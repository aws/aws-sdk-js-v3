// @ts-ignore
import { InvokeStore } from "@aws/lambda-invoke-store";
import { HttpRequest } from "@smithy/core/protocols";
import { afterAll, beforeEach, describe, expect, test as it, vi } from "vitest";

import { traceContextPropagationMiddleware } from "./traceContextPropagationMiddleware";

describe(traceContextPropagationMiddleware.name, () => {
  const mockNextHandler = vi.fn();

  const TRACEPARENT = "00-0af7651916cd43dd8448eb211c80319c-b7ad6b7169203331-01";
  const TRACESTATE = "rojo=00f067aa0ba902b7";
  const BAGGAGE = "userId=alice,serverNode=DF%2028";

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue(undefined as any);
  });

  afterAll(() => {
    vi.restoreAllMocks();
  });

  const mockInvokeStore = (overrides: Record<string, () => string | undefined>) => {
    vi.spyOn(InvokeStore, "getInstanceAsync").mockResolvedValue({
      getTraceparent: () => undefined,
      getTracestate: () => undefined,
      getBaggage: () => undefined,
      ...overrides,
    } as any);
  };

  it("propagates traceparent, tracestate, and baggage from InvokeStore", async () => {
    mockInvokeStore({
      getTraceparent: () => TRACEPARENT,
      getTracestate: () => TRACESTATE,
      getBaggage: () => BAGGAGE,
    });

    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    expect(mockNextHandler.mock.calls.length).toBe(1);
    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers.traceparent).toBe(TRACEPARENT);
    expect(request.headers.tracestate).toBe(TRACESTATE);
    expect(request.headers.baggage).toBe(BAGGAGE);
  });

  it("only sets headers for values present in InvokeStore", async () => {
    mockInvokeStore({
      getTraceparent: () => TRACEPARENT,
    });

    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers.traceparent).toBe(TRACEPARENT);
    expect(request.headers.tracestate).not.toBeDefined();
    expect(request.headers.baggage).not.toBeDefined();
  });

  it("does not propagate tracestate or baggage when traceparent is absent", async () => {
    mockInvokeStore({
      getTracestate: () => TRACESTATE,
      getBaggage: () => BAGGAGE,
    });

    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers.traceparent).not.toBeDefined();
    expect(request.headers.tracestate).not.toBeDefined();
    expect(request.headers.baggage).not.toBeDefined();
  });

  it("is a no-op when there is no InvokeStore context", async () => {
    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({}),
    });

    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers.traceparent).not.toBeDefined();
    expect(request.headers.tracestate).not.toBeDefined();
    expect(request.headers.baggage).not.toBeDefined();
  });

  it("does not overwrite an existing traceparent header", async () => {
    mockInvokeStore({
      getTraceparent: () => TRACEPARENT,
    });

    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          traceparent: "existing-value",
        },
      }),
    });

    const { request } = mockNextHandler.mock.calls[0][0];
    expect(request.headers.traceparent).toBe("existing-value");
  });

  it("normalizes an existing differently-cased traceparent and does not overwrite it", async () => {
    mockInvokeStore({
      getTraceparent: () => TRACEPARENT,
    });

    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          TraceParent: "existing-value",
        },
      }),
    });

    const { request } = mockNextHandler.mock.calls[0][0];
    // rewritten to canonical lowercase, value preserved, not overwritten, not duplicated
    expect(request.headers.traceparent).toBe("existing-value");
    expect(request.headers.TraceParent).not.toBeDefined();
    expect(Object.keys(request.headers).filter((h) => h.toLowerCase() === "traceparent").length).toBe(1);
  });

  it("does not modify non-HttpRequest requests", async () => {
    mockInvokeStore({
      getTraceparent: () => TRACEPARENT,
    });

    const nonHttpRequest = { foo: "bar" };
    const handler = traceContextPropagationMiddleware()(mockNextHandler, {} as any);
    await handler({
      input: {},
      request: nonHttpRequest as any,
    });

    expect(mockNextHandler.mock.calls[0][0].request).toBe(nonHttpRequest);
  });
});
