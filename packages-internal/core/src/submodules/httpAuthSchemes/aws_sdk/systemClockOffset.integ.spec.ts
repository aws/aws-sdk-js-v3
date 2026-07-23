import { DynamoDB } from "@aws-sdk/client-dynamodb";
import type { HttpRequest } from "@smithy/core/protocols";
import { HttpResponse } from "@smithy/core/protocols";
import { Readable } from "node:stream";
import { describe, expect, test as it } from "vitest";

function dynamoSuccess(dateHeader: string) {
  return new HttpResponse({
    statusCode: 200,
    headers: {
      server: "Server",
      date: dateHeader,
      "content-type": "application/x-amz-json-1.0",
      "x-amzn-requestid": "AAAA",
      "x-amz-crc32": "357788998",
    },
    body: Readable.from([JSON.stringify({ TableNames: [] })]),
  });
}

function dynamoError(dateHeader: string, errorCode: string) {
  return new HttpResponse({
    statusCode: 400,
    headers: {
      server: "Server",
      date: dateHeader,
      "content-type": "application/x-amz-json-1.0",
      "x-amzn-requestid": "BBBB",
    },
    body: Readable.from([
      JSON.stringify({
        __type: `com.amazon.coral.service#${errorCode}`,
        message: "Clock skew test",
      }),
    ]),
  });
}

describe("systemClockOffset concurrent correction", () => {
  it("retries all concurrent requests after clock-skew correction", async () => {
    let requestCount = 0;

    const client = new DynamoDB({
      region: "us-west-2",
      credentials: { accessKeyId: "AKID", secretAccessKey: "SECRET" },
      systemClockOffset: -86400000,
      requestHandler: {
        async handle(request: HttpRequest) {
          // allow 3 skewed requests to accumulate before responding.
          await new Promise((r) => setTimeout(r, 250));
          requestCount++;
          const now = new Date().toUTCString();

          const authHeader = request.headers["authorization"] ?? "";
          const credentialMatch = authHeader.match(/Credential=\w+\/(\d{8})\//);
          const signingDate = credentialMatch?.[1];
          const today = new Date().toISOString().slice(0, 10).replace(/-/g, "");

          if (signingDate !== today) {
            return {
              response: new HttpResponse({
                statusCode: 400,
                headers: {
                  server: "Server",
                  date: now,
                  "content-type": "application/x-amz-json-1.0",
                  connection: "keep-alive",
                  "x-amzn-requestid": "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
                  "x-amz-crc32": "0",
                },
                body: Readable.from([
                  JSON.stringify({
                    __type: "com.amazon.coral.service#InvalidSignatureException",
                    message: `Signature expired: ${signingDate}T000000Z is now earlier than ${today}T000000Z (${today}T000000Z - 15 min.)`,
                  }),
                ]),
              }),
            };
          }

          return {
            response: new HttpResponse({
              statusCode: 200,
              headers: {
                server: "Server",
                date: now,
                "content-type": "application/x-amz-json-1.0",
                connection: "keep-alive",
                "x-amzn-requestid": "BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB",
                "x-amz-crc32": "357788998",
              },
              body: Readable.from([
                JSON.stringify({
                  TableNames: ["MyTable"],
                }),
              ]),
            }),
          };
        },
      },
    });

    async function concurrentRequests() {
      const results = await Promise.all([client.listTables(), client.listTables(), client.listTables()]);

      for (const result of results) {
        expect(result.TableNames).toEqual(["MyTable"]);
        expect(result.$metadata.httpStatusCode).toEqual(200);
      }
    }

    {
      await concurrentRequests();

      // 3 initial stale requests + 3 retries with corrected offset = 6.
      expect(requestCount).toBe(6);
      expect(Math.abs(client.config.systemClockOffset)).toBeLessThan(10_000);
    }
    {
      await concurrentRequests();

      // subsequent requests should already be skew-corrected and only add 3 more.
      expect(requestCount).toBe(9);
    }
  });
});

describe("systemClockOffset disableClockSkewCorrection", () => {
  const credentials = { accessKeyId: "AKID", secretAccessKey: "SECRET" };
  const handler = (fn: () => { response: HttpResponse }) => ({
    async handle() {
      return fn();
    },
    updateHttpClientConfig() {},
    httpHandlerConfigs() {
      return {};
    },
    destroy() {},
  });

  it("does not record or retry when disableClockSkewCorrection is true", async () => {
    const skewedDate = new Date(Date.now() + 300_000).toUTCString();
    let requestCount = 0;
    const client = new DynamoDB({
      region: "us-west-2",
      credentials,
      maxAttempts: 3,
      disableClockSkewCorrection: true,
      requestHandler: handler(() => {
        requestCount++;
        return { response: dynamoError(skewedDate, "RequestTimeTooSkewed") };
      }),
    });

    try {
      await client.listTables({});
      expect.fail("should have thrown");
    } catch (e: any) {
      expect(e.name).toBe("RequestTimeTooSkewed");
    }
    expect(requestCount).toBe(1);
    expect(client.config.systemClockOffset).toBe(0);
  });

  it("does not record offset from success when disableClockSkewCorrection is true", async () => {
    const skewedDate = new Date(Date.now() + 120_000).toUTCString();
    const client = new DynamoDB({
      region: "us-west-2",
      credentials,
      disableClockSkewCorrection: true,
      requestHandler: handler(() => ({ response: dynamoSuccess(skewedDate) })),
    });

    await client.listTables({});
    expect(client.config.systemClockOffset).toBe(0);
  });
});
