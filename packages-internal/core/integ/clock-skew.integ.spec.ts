/**
 * Integration tests for clock skew correction, derived from the Clock Skew SEP
 * test cases (clock-skew-test-cases.json).
 *
 * These tests exercise the full middleware + signer flow with mocked HTTP
 * responses and mocked time. No network calls are made.
 *
 * Approach:
 *   - We mock Date.now() to return controlled values
 *   - During the "send phase" (before request handler fires), Date.now() returns clientTimeAtSend
 *   - During the "receive phase" (after handler returns response), Date.now() returns clientTimeAtReceive
 *   - A custom HTTP handler transitions the mock between phases
 *   - This is robust against any number of Date.now() calls in middleware
 */
import { STS } from "@aws-sdk/client-sts";
import { HttpResponse } from "@smithy/core/protocols";
import type { HttpHandlerOptions, RequestHandlerOutput } from "@smithy/types";
import { HttpRequest } from "@smithy/protocol-http";
import { Readable } from "node:stream";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

// ─── Response Builders ──────────────────────────────────────────────────────

function stsSuccessResponse(dateHeader: string, ageHeader?: string): HttpResponse {
  const headers: Record<string, string> = {
    "content-type": "text/xml",
    date: dateHeader,
  };
  if (ageHeader !== undefined) {
    headers["age"] = ageHeader;
  }
  return new HttpResponse({
    statusCode: 200,
    headers,
    body: Readable.from(
      Buffer.from(
        `<GetCallerIdentityResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <GetCallerIdentityResult>
    <Arn>arn:aws:iam::123456789012:user/test</Arn>
    <UserId>AIDAEXAMPLE</UserId>
    <Account>123456789012</Account>
  </GetCallerIdentityResult>
  <ResponseMetadata>
    <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
  </ResponseMetadata>
</GetCallerIdentityResponse>`
      )
    ),
  });
}

function stsErrorResponse(dateHeader: string, errorCode: string, statusCode = 403): HttpResponse {
  return new HttpResponse({
    statusCode,
    headers: {
      "content-type": "text/xml",
      date: dateHeader,
    },
    body: Readable.from(
      Buffer.from(
        `<ErrorResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <Error>
    <Type>Sender</Type>
    <Code>${errorCode}</Code>
    <Message>Clock skew test</Message>
  </Error>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ErrorResponse>`
      )
    ),
  });
}

function stsErrorResponseNoDate(errorCode: string, statusCode = 403): HttpResponse {
  return new HttpResponse({
    statusCode,
    headers: {
      "content-type": "text/xml",
    },
    body: Readable.from(
      Buffer.from(
        `<ErrorResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <Error>
    <Type>Sender</Type>
    <Code>${errorCode}</Code>
    <Message>Clock skew test</Message>
  </Error>
  <RequestId>01234567-89ab-cdef-0123-456789abcdef</RequestId>
</ErrorResponse>`
      )
    ),
  });
}

// ─── Time-controlling HTTP handler ──────────────────────────────────────────

interface AttemptTiming {
  sendMs: number;
  receiveMs: number;
  response: HttpResponse;
  expectedSigningTime?: string; // SigV4 format, e.g. "20260101T000000Z"
}

/**
 * Custom HTTP handler that:
 * 1. Records the x-amz-date header from each request for assertion
 * 2. Transitions Date.now() from send→receive time when the handler fires
 * 3. Returns the queued response
 */
class ClockSkewTestHandler {
  private attempts: AttemptTiming[];
  private currentIndex = 0;
  private dateNowMock: ReturnType<typeof vi.spyOn>;
  public capturedSigningTimes: string[] = [];

  constructor(attempts: AttemptTiming[], dateNowMock: ReturnType<typeof vi.spyOn>) {
    this.attempts = attempts;
    this.dateNowMock = dateNowMock;
    // Start with the first attempt's send time
    this.dateNowMock.mockImplementation(() => {
      const current = this.attempts[this.currentIndex] ?? this.attempts[this.attempts.length - 1];
      return current.sendMs;
    });
  }

  async handle(request: HttpRequest, _options?: HttpHandlerOptions): Promise<RequestHandlerOutput<HttpResponse>> {
    const attempt = this.attempts[this.currentIndex];

    // Capture the signing time from the request
    const signingTime = request.headers["x-amz-date"];
    this.capturedSigningTimes.push(signingTime);

    // Transition to receive phase — after this point, Date.now() returns receiveMs
    this.dateNowMock.mockImplementation(() => attempt.receiveMs);

    const response = attempt.response;
    this.currentIndex++;

    // Set up the next attempt's send time for any subsequent calls
    if (this.currentIndex < this.attempts.length) {
      // After the response processing is done and before the next sign() call,
      // we need to return the next attempt's send time. We do this via a short
      // setTimeout-like trick: mockImplementation that returns the next sendMs.
      // The response processing (successHandler/errorHandler) will still see
      // receiveMs because we set it above and the handler runs synchronously
      // before returning. After the await resolves, the next sign() call will
      // get the next sendMs.
      const nextSendMs = this.attempts[this.currentIndex].sendMs;
      // Use a microtask to transition after the current handler's response is processed
      queueMicrotask(() => {
        this.dateNowMock.mockImplementation(() => nextSendMs);
      });
    }

    return { response };
  }

  updateHttpClientConfig(): void {}
  httpHandlerConfigs() {
    return {};
  }
  destroy(): void {}

  assertSigningTimes() {
    for (let i = 0; i < this.attempts.length; i++) {
      const expected = this.attempts[i].expectedSigningTime;
      if (expected) {
        expect(this.capturedSigningTimes[i]).toBe(expected);
      }
    }
  }
}

// ─── Helpers ────────────────────────────────────────────────────────────────

function toSigV4Date(isoTime: string): string {
  return new Date(isoTime).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "");
}

// ─── Tests ──────────────────────────────────────────────────────────────────

describe("Clock Skew SEP Integration Tests", () => {
  const credentials = { accessKeyId: "INTEG_TEST", secretAccessKey: "INTEG_TEST" };
  const region = "us-east-1";
  let dateNowSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    dateNowSpy = vi.spyOn(Date, "now");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("Clocks agree, request succeeds on first attempt, ClientSkew updated to 0", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:00:01 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler as any });
    await client.getCallerIdentity({});

    handler.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);
  });

  it("Definite clock skew error on first attempt, retry succeeds, ClientSkew persists to next operation", async () => {
    // Operation 1
    const handler1 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsErrorResponse("Thu, 01 Jan 2026 00:05:01 GMT", "RequestTimeTooSkewed"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
        {
          sendMs: new Date("2026-01-01T00:00:02Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:04Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:05:03 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:05:02Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler1 as any });
    await client.getCallerIdentity({});

    handler1.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(300000);

    // Operation 2: ClientSkew persists (300s = 300000ms)
    const handler2 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:01:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:01:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:06:01 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:06:00Z"),
        },
      ],
      dateNowSpy
    );

    (client.config as any).requestHandler = handler2;
    await client.getCallerIdentity({});

    handler2.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(300000);
  });

  it("Clock skew error with no retry budget still updates ClientSkew", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsErrorResponse("Thu, 01 Jan 2026 00:05:01 GMT", "RequestTimeTooSkewed"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 1, requestHandler: handler as any });

    try {
      await client.getCallerIdentity({});
      expect.fail("should have thrown");
    } catch (e: any) {
      expect(e.name).toBe("RequestTimeTooSkewed");
    }

    handler.assertSigningTimes();
    // ClientSkew updated even though the operation failed
    expect(client.config.systemClockOffset).toBe(300000);
  });

  it("Delayed response exceeding trust threshold does not update ClientSkew", async () => {
    // Operation 1: elapsed = 16 min > 15 min → discard
    const handler1 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:16:00Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:10:00 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler1 as any });
    await client.getCallerIdentity({});

    handler1.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);

    // Operation 2: fast response, learns correction
    const handler2 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:17:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:17:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:22:01 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:17:00Z"),
        },
      ],
      dateNowSpy
    );

    (client.config as any).requestHandler = handler2;
    await client.getCallerIdentity({});

    handler2.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(300000);
  });

  it("Stale ClientSkew is silently corrected by a successful response without error or retry", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:00:01 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:05:00Z"), // 00:00:00 + 300s stale offset
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler as any });
    (client.config as any).systemClockOffset = 300000; // pre-existing stale 5-min offset

    await client.getCallerIdentity({});

    handler.assertSigningTimes();
    // Stale offset corrected to 0
    expect(client.config.systemClockOffset).toBe(0);
  });

  it("Possible clock skew error with skew below detection threshold is not retried as clock skew", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsErrorResponse("Thu, 01 Jan 2026 00:02:01 GMT", "InvalidSignatureException", 400),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
      ],
      dateNowSpy
    );

    // maxAttempts = 1 to prove it's NOT retried as clock skew
    const client = new STS({ region, credentials, maxAttempts: 1, requestHandler: handler as any });

    try {
      await client.getCallerIdentity({});
      expect.fail("should have thrown");
    } catch (e: any) {
      expect(e.name).toBe("InvalidSignatureException");
    }

    handler.assertSigningTimes();
    // ClientSkew updated (unconditional recording) even though not retried
    expect(client.config.systemClockOffset).toBe(120000);
  });

  it("Possible clock skew error with skew above detection threshold is retried and succeeds", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsErrorResponse("Thu, 01 Jan 2026 00:05:01 GMT", "InvalidSignatureException", 400),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
        {
          sendMs: new Date("2026-01-01T00:00:02Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:04Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 00:05:03 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:05:02Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler as any });
    await client.getCallerIdentity({});

    handler.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(300000);
  });

  it("Clock skew error with no Date header is not treated as a candidate, ClientSkew is not updated", async () => {
    const handler = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T00:00:00Z").getTime(),
          receiveMs: new Date("2026-01-01T00:00:02Z").getTime(),
          response: stsErrorResponseNoDate("RequestTimeTooSkewed"),
          expectedSigningTime: toSigV4Date("2026-01-01T00:00:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 1, requestHandler: handler as any });

    try {
      await client.getCallerIdentity({});
      expect.fail("should have thrown");
    } catch (e: any) {
      expect(e.name).toBe("RequestTimeTooSkewed");
    }

    handler.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);
  });

  it("Cached response with Age header does not update ClientSkew", async () => {
    // Operation 1: CDN cached (Age header present) → discard
    const handler1 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T16:51:00Z").getTime(),
          receiveMs: new Date("2026-01-01T16:51:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 12:03:01 GMT", "17280"),
          expectedSigningTime: toSigV4Date("2026-01-01T16:51:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler1 as any });
    await client.getCallerIdentity({});

    handler1.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);

    // Operation 2: non-cached, learns actual skew
    const handler2 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T16:51:10Z").getTime(),
          receiveMs: new Date("2026-01-01T16:51:12Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 16:56:11 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T16:51:10Z"),
        },
      ],
      dateNowSpy
    );

    (client.config as any).requestHandler = handler2;
    await client.getCallerIdentity({});

    handler2.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(300000);
  });

  it("Cached response with Age header does not poison ClientSkew even when followed by normal request", async () => {
    // Operation 1: CDN cached → discarded
    const handler1 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T16:51:00Z").getTime(),
          receiveMs: new Date("2026-01-01T16:51:02Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 12:03:01 GMT", "17280"),
          expectedSigningTime: toSigV4Date("2026-01-01T16:51:00Z"),
        },
      ],
      dateNowSpy
    );

    const client = new STS({ region, credentials, maxAttempts: 3, requestHandler: handler1 as any });
    await client.getCallerIdentity({});

    handler1.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);

    // Operation 2: non-cached, clocks agree, no skew
    const handler2 = new ClockSkewTestHandler(
      [
        {
          sendMs: new Date("2026-01-01T16:51:10Z").getTime(),
          receiveMs: new Date("2026-01-01T16:51:12Z").getTime(),
          response: stsSuccessResponse("Thu, 01 Jan 2026 16:51:11 GMT"),
          expectedSigningTime: toSigV4Date("2026-01-01T16:51:10Z"),
        },
      ],
      dateNowSpy
    );

    (client.config as any).requestHandler = handler2;
    await client.getCallerIdentity({});

    handler2.assertSigningTimes();
    expect(client.config.systemClockOffset).toBe(0);
  });
});
