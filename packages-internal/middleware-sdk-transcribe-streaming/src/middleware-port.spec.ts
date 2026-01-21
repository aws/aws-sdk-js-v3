import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments, RequestHandler } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { websocketPortMiddleware } from "./middleware-port";

describe("websocketPortMiddleware", () => {
  const mockHandler: RequestHandler<any, any> = {
    metadata: { handlerProtocol: "websocket" },
    handle: () => ({} as any),
  };
  it("should skip non-http request", async () => {
    const nonHttpRequest = {
      foo: "bar",
    };
    let resolve: (resolved?: unknown) => void;
    const promise = new Promise((r) => (resolve = r));
    const next = (args: BuildHandlerArguments<any>) => {
      expect(args.request).toEqual(nonHttpRequest);
      resolve();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request: nonHttpRequest, input: {} });
    await promise;
  });

  it("should skip non WebSocket requests", async () => {
    const mockHandler: RequestHandler<any, any> = {
      metadata: { handlerProtocol: "some_protocol" },
      handle: () => ({} as any),
    };
    const request = new HttpRequest({});
    let resolve: (resolved?: unknown) => void;
    const promise = new Promise((r) => (resolve = r));
    const next = (args: BuildHandlerArguments<any>) => {
      expect(args.request).toEqual(request);
      resolve();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request, input: {} });
    await promise;
  });

  it("should update endpoint to websocket url", async () => {
    const request = new HttpRequest({
      hostname: "transcribestreaming.us-east-1.amazonaws.com",
    });
    let resolve: (resolved?: unknown) => void;
    const promise = new Promise((r) => (resolve = r));
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      expect(processed.hostname).toEqual("transcribestreaming.us-east-1.amazonaws.com:8443");
      expect(processed.headers.host).toEqual("transcribestreaming.us-east-1.amazonaws.com:8443");
      resolve();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request, input: {} });
    await promise;
  });
});
