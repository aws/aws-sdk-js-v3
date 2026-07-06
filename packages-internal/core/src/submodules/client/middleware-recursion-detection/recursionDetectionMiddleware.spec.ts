// @ts-ignore
import { InvokeStore } from "@aws/lambda-invoke-store";
import { HttpRequest } from "@smithy/core/protocols";
import { afterAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { recursionDetectionMiddleware } from "./recursionDetectionMiddleware";

describe(recursionDetectionMiddleware.name, () => {
  const mockNextHandler = vi.fn();
  const originEnv = process.env;

  const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue(undefined as any);
    process.env = {};
  });

  afterAll(() => {
    process.env = originEnv;
  });

  describe(`sets ${TRACE_ID_HEADER_NAME} header when function name and`, () => {
    const mockTraceIdEnv = "trace-id-from-env";
    const mockTraceIdInvokeStore = "trace-id-from-invoke-store";

    it("trace id environmental variables is set", async () => {
      process.env = {
        AWS_LAMBDA_FUNCTION_NAME: "some-function",
        _X_AMZN_TRACE_ID: mockTraceIdEnv,
      };
      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });
      const { calls } = (mockNextHandler as any).mock;
      expect(calls.length).toBe(1);
      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers[TRACE_ID_HEADER_NAME]).toBe(mockTraceIdEnv);
    });

    it("trace id value is set in InvokeStore", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockTraceIdInvokeStore,
        getTraceparent: () => undefined,
      } as any);
      process.env = {
        AWS_LAMBDA_FUNCTION_NAME: "some-function",
      };
      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });
      const { calls } = (mockNextHandler as any).mock;
      expect(calls.length).toBe(1);
      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers[TRACE_ID_HEADER_NAME]).toBe(mockTraceIdInvokeStore);
    });

    it("favors trace id value from InvokeStore over that from env variable", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockTraceIdInvokeStore,
        getTraceparent: () => undefined,
      } as any);
      process.env = {
        AWS_LAMBDA_FUNCTION_NAME: "some-function",
        _X_AMZN_TRACE_ID: mockTraceIdEnv,
      };
      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });
      const { calls } = (mockNextHandler as any).mock;
      expect(calls.length).toBe(1);
      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers[TRACE_ID_HEADER_NAME]).toBe(mockTraceIdInvokeStore);
    });
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when function name environmental variable is NOT set`, async () => {
    process.env = {
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).not.toBeDefined();
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when the header is already set`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          [TRACE_ID_HEADER_NAME]: "some-real-trace-id",
        },
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers[TRACE_ID_HEADER_NAME]).toBe("some-real-trace-id");
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when the header is already set with some other casing`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          ["x-AmZn-TrAcE-iD"]: "some-real-trace-id",
        },
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    const existingTraceHeader = Object.keys(request.headers).find(
      (h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()
    );
    expect(existingTraceHeader).toBeDefined();
    expect(request.headers[existingTraceHeader!]).toBe("some-real-trace-id");
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when the header is already set with alternating case`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          "X-aMzN-tRaCe-Id": "some-real-trace-id",
        },
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    const existingTraceHeader = Object.keys(request.headers).find(
      (h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()
    );
    expect(existingTraceHeader).toBeDefined();
    expect(request.headers[existingTraceHeader!]).toBe("some-real-trace-id");
  });

  it(`should NOT set ${TRACE_ID_HEADER_NAME} header when the header is already set with all uppercase`, async () => {
    process.env = {
      AWS_LAMBDA_FUNCTION_NAME: "some-function",
      _X_AMZN_TRACE_ID: "some-trace-id",
    };
    const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          "X-AMZN-TRACE-ID": "some-real-trace-id",
        },
      }),
    });

    const { calls } = (mockNextHandler as any).mock;
    expect(calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    const existingTraceHeader = Object.keys(request.headers).find(
      (h) => h.toLowerCase() === TRACE_ID_HEADER_NAME.toLowerCase()
    );
    expect(existingTraceHeader).toBeDefined();
    expect(request.headers[existingTraceHeader!]).toBe("some-real-trace-id");
  });

  describe("W3C trace context propagation", () => {
    const mockTraceparent = "00-4bf92f3577b34da6a3ce929d0e0e4736-00f067aa0ba902b7-01";
    const mockTracestate = "congo=t61rcWkgMzE";
    const mockBaggage = "userId=alice,serverNode=DF%2028";

    it("should set traceparent from InvokeStore when not already in headers", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
    });

    it("should set traceparent, tracestate, and baggage from InvokeStore", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
      expect(request.headers["tracestate"]).toBe(mockTracestate);
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should NOT set tracestate or baggage when traceparent is absent", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => undefined,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBeUndefined();
      expect(request.headers["tracestate"]).toBeUndefined();
      expect(request.headers["baggage"]).toBeUndefined();
    });

    it("should preserve existing traceparent header and add tracestate/baggage from InvokeStore", async () => {
      const existingTraceparent = "00-abcdef1234567890abcdef1234567890-1234567890abcdef-01";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({
          headers: {
            traceparent: existingTraceparent,
          },
        }),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(existingTraceparent);
      expect(request.headers["tracestate"]).toBe(mockTracestate);
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should not overwrite existing traceparent when InvokeStore also has one", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({
          headers: {
            traceparent: "existing-value",
          },
        }),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe("existing-value");
    });

    it("should normalize non-canonical traceparent casing and not overwrite with InvokeStore value", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({
          headers: {
            TraceParent: "existing-value",
          },
        }),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      // rewritten to canonical lowercase, value preserved, not overwritten
      expect(request.headers["traceparent"]).toBe("existing-value");
      expect(request.headers["TraceParent"]).toBeUndefined();
      expect(Object.keys(request.headers).filter((h) => h.toLowerCase() === "traceparent").length).toBe(1);
    });

    it("should NOT set tracestate when InvokeStore does not provide it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
      expect(request.headers["tracestate"]).toBeUndefined();
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should NOT set baggage when InvokeStore does not provide it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
      expect(request.headers["tracestate"]).toBe(mockTracestate);
      expect(request.headers["baggage"]).toBeUndefined();
    });

    describe("sanitizeTraceHeaders", () => {
      it("should normalize non-canonical casing of traceparent to lowercase", async () => {
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getTraceparent: () => undefined,
          getTracestate: () => undefined,
          getBaggage: () => undefined,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              Traceparent: mockTraceparent,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["traceparent"]).toBe(mockTraceparent);
        expect(request.headers["Traceparent"]).toBeUndefined();
      });

      it("should normalize non-canonical casing of tracestate to lowercase", async () => {
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getTraceparent: () => mockTraceparent,
          getTracestate: () => undefined,
          getBaggage: () => undefined,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              traceparent: mockTraceparent,
              TraceState: mockTracestate,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["tracestate"]).toBe(mockTracestate);
        expect(request.headers["TraceState"]).toBeUndefined();
      });

      it("should normalize non-canonical casing of baggage to lowercase", async () => {
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getTraceparent: () => mockTraceparent,
          getTracestate: () => undefined,
          getBaggage: () => undefined,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              traceparent: mockTraceparent,
              Baggage: mockBaggage,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["baggage"]).toBe(mockBaggage);
        expect(request.headers["Baggage"]).toBeUndefined();
      });

      it("should not modify headers that are already lowercase", async () => {
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getTraceparent: () => undefined,
          getTracestate: () => undefined,
          getBaggage: () => undefined,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              traceparent: mockTraceparent,
              tracestate: mockTracestate,
              baggage: mockBaggage,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["traceparent"]).toBe(mockTraceparent);
        expect(request.headers["tracestate"]).toBe(mockTracestate);
        expect(request.headers["baggage"]).toBe(mockBaggage);
      });
    });

    it("should handle InvokeStore where getTracestate and getBaggage are not defined", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getTraceparent: () => mockTraceparent,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
      expect(request.headers["tracestate"]).toBeUndefined();
      expect(request.headers["baggage"]).toBeUndefined();
    });

    it("should set both X-Amzn-Trace-Id and W3C headers when in Lambda with InvokeStore", async () => {
      const mockXRayTraceId = "Root=1-abc-def;Parent=123;Sampled=1";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockXRayTraceId,
        getTraceparent: () => mockTraceparent,
        getTracestate: () => mockTracestate,
        getBaggage: () => mockBaggage,
      } as any);
      process.env = {
        AWS_LAMBDA_FUNCTION_NAME: "some-function",
      };

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["X-Amzn-Trace-Id"]).toBe(mockXRayTraceId);
      expect(request.headers["traceparent"]).toBe(mockTraceparent);
      expect(request.headers["tracestate"]).toBe(mockTracestate);
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should only call InvokeStore.getInstanceAsync once when both features need it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => "trace-id",
        getTraceparent: () => mockTraceparent,
        getTracestate: () => undefined,
        getBaggage: () => undefined,
      } as any);
      process.env = {
        AWS_LAMBDA_FUNCTION_NAME: "some-function",
      };

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      expect(InvokeStore.getInstanceAsync).toHaveBeenCalledTimes(1);
    });
  });
});
