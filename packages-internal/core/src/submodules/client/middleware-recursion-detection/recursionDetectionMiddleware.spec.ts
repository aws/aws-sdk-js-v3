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

  describe("W3C baggage propagation", () => {
    const mockBaggage = "userId=alice,serverNode=DF%2028";

    it("should set baggage from InvokeStore when not already in headers", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should NOT set baggage when InvokeStore does not provide it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["baggage"]).toBeUndefined();
    });

    it("should preserve existing baggage header without overwriting from InvokeStore", async () => {
      const existingBaggage = "key1=value1";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
        getBaggage: () => mockBaggage,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({
          headers: {
            baggage: existingBaggage,
          },
        }),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["baggage"]).toBe(existingBaggage);
    });

    it("should propagate baggage independently of traceparent presence on the request", async () => {
      const existingTraceparent = "00-abcdef1234567890abcdef1234567890-1234567890abcdef-01";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
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
      // traceparent is passed through untouched; baggage is still populated from InvokeStore
      expect(request.headers["traceparent"]).toBe(existingTraceparent);
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    describe("sanitizeTraceHeaders", () => {
      it("should normalize non-canonical casing of baggage to lowercase and not overwrite with InvokeStore value", async () => {
        const existingBaggage = "existing=value";
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getBaggage: () => mockBaggage,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              Baggage: existingBaggage,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["baggage"]).toBe(existingBaggage);
        expect(request.headers["Baggage"]).toBeUndefined();
        expect(Object.keys(request.headers).filter((h) => h.toLowerCase() === "baggage").length).toBe(1);
      });

      it("should not modify a baggage header that is already lowercase", async () => {
        vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
          getXRayTraceId: () => undefined,
          getBaggage: () => undefined,
        } as any);

        const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
        await handler({
          input: {},
          request: new HttpRequest({
            headers: {
              baggage: mockBaggage,
            },
          }),
        });

        const { request } = mockNextHandler.mock.calls[0][0];
        expect(request.headers["baggage"]).toBe(mockBaggage);
      });
    });

    it("should handle InvokeStore where getBaggage is not defined", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => undefined,
      } as any);

      const handler = recursionDetectionMiddleware()(mockNextHandler, {} as any);
      await handler({
        input: {},
        request: new HttpRequest({}),
      });

      const { request } = mockNextHandler.mock.calls[0][0];
      expect(request.headers["baggage"]).toBeUndefined();
    });

    it("should set both X-Amzn-Trace-Id and baggage when in Lambda with InvokeStore", async () => {
      const mockXRayTraceId = "Root=1-abc-def;Parent=123;Sampled=1";
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => mockXRayTraceId,
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
      expect(request.headers["baggage"]).toBe(mockBaggage);
    });

    it("should only call InvokeStore.getInstanceAsync once when both features need it", async () => {
      vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
        getXRayTraceId: () => "trace-id",
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

      expect(InvokeStore.getInstanceAsync).toHaveBeenCalledTimes(1);
    });
  });
});
