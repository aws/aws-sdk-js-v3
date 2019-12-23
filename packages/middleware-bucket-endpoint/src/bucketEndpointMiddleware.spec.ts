import { HttpRequest } from "@aws-sdk/protocol-http";
import { MiddlewareStack } from "@aws-sdk/middleware-stack";
import {
  bucketEndpointMiddleware,
  bucketEndpointMiddlewareOptions
} from "./bucketEndpointMiddleware";
import { resolveBucketEndpointConfig } from "./configurations";

describe("bucketEndpointMiddleware", () => {
  const input = { Bucket: "bucket" };
  const requestInput = {
    method: "GET",
    headers: {},
    protocol: "https:",
    hostname: "s3.us-west-2.amazonaws.com",
    path: "/bucket"
  };
  const next = jest.fn();

  beforeEach(() => {
    next.mockClear();
  });

  it("should convert the request provided into one directed to a virtual hosted-style endpoint", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(resolveBucketEndpointConfig({}))(
      next,
      {} as any
    );
    await handler({ input, request });

    const {
      input: forwardedInput,
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(forwardedInput).toBe(input);
    expect(hostname).toBe("bucket.s3.us-west-2.amazonaws.com");
    expect(path).toBe("/");
  });

  it("should not convert the request provided into one directed to a virtual hosted-style endpoint if so configured", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(
      resolveBucketEndpointConfig({
        forcePathStyle: true
      })
    )(next, {} as any);
    await handler({ input, request });

    const {
      input: forwardedInput,
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(forwardedInput).toBe(input);
    expect(hostname).toBe("s3.us-west-2.amazonaws.com");
    expect(path).toBe("/bucket");
  });

  it("should use the bucket name as a virtual hosted-style endpoint if so configured", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(
      resolveBucketEndpointConfig({
        bucketEndpoint: true
      })
    )(next, {} as any);
    await handler({
      input: { Bucket: "files.domain.com" },
      request: { ...request, path: "/files.domain.com/path/to/key.ext" }
    });

    const {
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(hostname).toBe("files.domain.com");
    expect(path).toBe("/path/to/key.ext");
  });

  it("should use a transfer acceleration endpoint if so configured", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(
      resolveBucketEndpointConfig({
        useAccelerateEndpoint: true
      })
    )(next, {} as any);
    await handler({ input, request });

    const {
      input: forwardedInput,
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(forwardedInput).toBe(input);
    expect(hostname).toBe("bucket.s3-accelerate.amazonaws.com");
    expect(path).toBe("/");
  });

  it("should use a dualstack endpoint if so configured", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(
      resolveBucketEndpointConfig({
        useDualstackEndpoint: true
      })
    )(next, {} as any);
    await handler({ input, request });

    const {
      input: forwardedInput,
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(forwardedInput).toBe(input);
    expect(hostname).toBe("bucket.s3.dualstack.us-west-2.amazonaws.com");
    expect(path).toBe("/");
  });

  it("should use an accelerate dualstack endpoint if configured", async () => {
    const request = new HttpRequest(requestInput);
    const handler = bucketEndpointMiddleware(
      resolveBucketEndpointConfig({
        useAccelerateEndpoint: true,
        useDualstackEndpoint: true
      })
    )(next, {} as any);
    await handler({ input, request });

    const {
      request: { hostname, path }
    } = next.mock.calls[0][0];

    expect(hostname).toBe("bucket.s3-accelerate.dualstack.amazonaws.com");
    expect(path).toBe("/");
  });

  it("should be inserted before 'hostheaderMiddleware' if exists", async () => {
    const stack = new MiddlewareStack();
    const mockHostheaderMiddleware = (next: any) => (args: any) => {
      args.request.arr.push("two");
      return next(args);
    };
    const mockbucketEndpointMiddleware = (next: any) => (args: any) => {
      args.request.arr.push("one");
      return next(args);
    };
    stack.add(mockHostheaderMiddleware, {
      ...bucketEndpointMiddlewareOptions,
      name: bucketEndpointMiddlewareOptions.toMiddleware
    });
    stack.addRelativeTo(
      mockbucketEndpointMiddleware,
      bucketEndpointMiddlewareOptions
    );
    const handler = stack.resolve(next, {} as any);
    expect.assertions(2);
    await handler({ request: { arr: [] }, input: {} } as any);
    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0][0].request.arr).toEqual(["one", "two"]);
  });
});
