import { HttpRequest } from "@smithy/protocol-http";
import { BuildHandlerArguments, RequestHandler } from "@smithy/types";

import { websocketEndpointMiddleware } from "./middleware-websocket-endpoint";

describe(websocketEndpointMiddleware.name, () => {
  const config = { requestHandler: { metadata: { handlerProtocol: "websocket/h1.1" } } as RequestHandler<any, any> };
  const handlerOption = { headerPrefix: "some-thing" };
  it("should skip non-http request", (done) => {
    const nonHttpRequest = {
      foo: "bar",
    };
    const next = (args: BuildHandlerArguments<any>) => {
      expect(args.request).toEqual(nonHttpRequest);
      done();
    };
    const mw = websocketEndpointMiddleware(config, handlerOption);
    mw(next as any, {} as any)({ request: nonHttpRequest, input: {} });
  });

  it("should update endpoint to websocket url", (done) => {
    const request = new HttpRequest({
      protocol: "https:",
      hostname: "foo.us-east-1.amazonaws.com",
      path: "/stream-operation",
      method: "POST",
    });
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      expect(processed.protocol).toEqual("wss:");
      expect(processed.hostname).toEqual("foo.us-east-1.amazonaws.com");
      expect(processed.path).toEqual("/stream-operation-websocket");
      expect(processed.method).toEqual("GET");
      done();
    };
    const mw = websocketEndpointMiddleware(config, handlerOption);
    mw(next as any, {} as any)({ request, input: {} });
  });

  it("should remove content-type and sha256 hash header without transferring them to query parameters", (done) => {
    const request = new HttpRequest({
      headers: {
        "content-type": "application/vnd.amazon.eventstream",
        "Content-Type": "application/vnd.amazon.eventstream",
        "x-amz-content-sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
        "X-Amz-Content-Sha256": "STREAMING-AWS4-HMAC-SHA256-EVENTS",
      },
    });
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      const queryKeys = Object.keys(processed.query).map((key) => key.toLowerCase());
      expect(queryKeys).not.toContain("content-type");
      expect(queryKeys).not.toContain("x-amz-content-sha256");
      done();
    };
    const mw = websocketEndpointMiddleware(config, handlerOption);
    mw(next as any, {} as any)({ request, input: {} });
  });

  it("should contain only a host header after adjustment", (done) => {
    const request = new HttpRequest({});
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      const headerKeys = Object.keys(processed.headers).map((key) => key.toLowerCase());
      expect(headerKeys).toEqual(["host"]);
      expect(processed.headers["host"]).toBeDefined();
      done();
    };
    const mw = websocketEndpointMiddleware(config, handlerOption);
    mw(next as any, {} as any)({ request, input: {} });
  });

  it("should move API parameters from headers to query", (done) => {
    const request = new HttpRequest({
      headers: {
        "x-amzn-transcribe-language-code": "en-US",
        "x-amzn-transcribe-media-encoding": "pmc",
        "x-amzn-transcribe-session-id": "123",
        "x-amzn-transcribe-vocabulary-name": "abc",
        "x-amzn-transcribe-sample-rate": "44100",
      },
    });
    const next = (args: BuildHandlerArguments<any>) => {
      expect(HttpRequest.isInstance(args.request)).toBeTruthy();
      const processed = args.request as HttpRequest;
      expect(processed.query).toEqual({
        "language-code": "en-US",
        "media-encoding": "pmc",
        "session-id": "123",
        "vocabulary-name": "abc",
        "sample-rate": "44100",
      });
      done();
    };
    const mw = websocketEndpointMiddleware(config, { headerPrefix: "x-amzn-transcribe-" });
    mw(next as any, {} as any)({ request, input: {} });
  });
});
