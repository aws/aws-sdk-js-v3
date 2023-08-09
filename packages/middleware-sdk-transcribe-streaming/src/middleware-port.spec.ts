import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments, RequestHandler } from "@smithy/types";

import { websocketPortMiddleware } from "./middleware-port";

describe("websocketPortMiddleware", () => {
  const mockHandler: RequestHandler<any, any> = {
    metadata: { handlerProtocol: "websocket" },
    handle: () => ({} as any),
  };
  it("should skip non-http request", (done) => {
    const nonHttpRequest = {
      foo: "bar",
    };
    const next = (args: BuildHandlerArguments<any>) => {
      expect(args.request).toEqual(nonHttpRequest);
      done();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request: nonHttpRequest, input: {} });
  });

  it("should skip non WebSocket requests", (done) => {
    const mockHandler: RequestHandler<any, any> = {
      metadata: { handlerProtocol: "some_protocol" },
      handle: () => ({} as any),
    };
    const request = new HttpRequest({});
    const next = (args: BuildHandlerArguments<any>) => {
      expect(args.request).toEqual(request);
      done();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request, input: {} });
  });

  it("should update endpoint to websocket url", (done) => {
    const request = new HttpRequest({
      hostname: "transcribestreaming.us-east-1.amazonaws.com",
    });
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      expect(processed.hostname).toEqual("transcribestreaming.us-east-1.amazonaws.com:8443");
      expect(processed.headers.host).toEqual("transcribestreaming.us-east-1.amazonaws.com:8443");
      done();
    };
    const mw = websocketPortMiddleware({ requestHandler: mockHandler });
    mw(next as any, {} as any)({ request, input: {} });
  });
});
