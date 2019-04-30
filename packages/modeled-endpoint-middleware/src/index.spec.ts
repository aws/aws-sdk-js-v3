import { modeledEndpointMiddleware } from "./";
import { BuildHandlerArguments } from "@aws-sdk/types";
import { parseUrl } from "@aws-sdk/url-parser-universal";

describe("modeledEndpointMiddleware", () => {
  it("should use an element of the operation input as the request endpoint", async () => {
    const args: BuildHandlerArguments<{ endpoint: string }, any> = {
      input: {
        endpoint: "http://api.example.com/foo/bar"
      },
      request: {
        method: "POST",
        headers: {
          foo: "bar"
        },
        protocol: "https:",
        hostname: "service.region.amazonaws.com",
        path: "/endpoint/preamble/path/to/operation",
        port: 1234
      }
    };
    const next = jest.fn(() => {});

    await modeledEndpointMiddleware(parseUrl, "endpoint")(next, {
      model: { http: { requestUri: "/path/to/operation" } }
    } as any)(args);

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0]).toEqual([
      {
        input: args.input,
        request: {
          method: "POST",
          headers: {
            foo: "bar"
          },
          protocol: "http:",
          hostname: "api.example.com",
          path: "/foo/bar/path/to/operation"
        }
      }
    ]);
  });

  it("should preserve interpolated path parameters", async () => {
    const args: BuildHandlerArguments<{ endpoint: string }, any> = {
      input: {
        endpoint: "http://api.example.com/foo/bar"
      },
      request: {
        method: "POST",
        headers: {
          foo: "bar"
        },
        protocol: "https:",
        hostname: "service.region.amazonaws.com",
        path: "/path/to/operation/urlParam/static",
        port: 1234
      }
    };
    const next = jest.fn(() => {});

    await modeledEndpointMiddleware(parseUrl, "endpoint")(next, {
      model: {
        http: { requestUri: "/path/to/operation/{interpolateMe}/static" }
      }
    } as any)(args);

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0]).toEqual([
      {
        input: args.input,
        request: {
          method: "POST",
          headers: {
            foo: "bar"
          },
          protocol: "http:",
          hostname: "api.example.com",
          path: "/foo/bar/path/to/operation/urlParam/static"
        }
      }
    ]);
  });

  it("should handle greedy path parameters", async () => {
    const args: BuildHandlerArguments<{ endpoint: string }, any> = {
      input: {
        endpoint: "http://api.example.com/foo/bar"
      },
      request: {
        method: "POST",
        headers: {
          foo: "bar"
        },
        protocol: "https:",
        hostname: "service.region.amazonaws.com",
        path:
          "/endpoint/preamble/static/urlParam/static/many/additional/path/elements",
        port: 1234
      }
    };
    const next = jest.fn(() => {});

    await modeledEndpointMiddleware(parseUrl, "endpoint")(next, {
      model: {
        http: {
          requestUri: "/static/{param}/static/{greedy+}"
        }
      }
    } as any)(args);

    expect(next.mock.calls.length).toBe(1);
    expect(next.mock.calls[0]).toEqual([
      {
        input: args.input,
        request: {
          method: "POST",
          headers: {
            foo: "bar"
          },
          protocol: "http:",
          hostname: "api.example.com",
          path: "/foo/bar/static/urlParam/static/many/additional/path/elements"
        }
      }
    ]);
  });
});
