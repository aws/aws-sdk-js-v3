import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { predictEndpointMiddleware } from "./predict-endpoint";

describe("predictEndpointMiddleware", () => {
  const mockUrlParser = vi.fn().mockReturnValue({
    hostname: "api.example.com",
    path: "/foo/bar",
    protocol: "http:",
  });
  const next = vi.fn();

  beforeEach(() => {
    mockUrlParser.mockClear();
    next.mockClear();
  });

  it("should set the request endpoint using the PredictEndpoint input", async () => {
    const input = { PredictEndpoint: "http://api.example.com/foo/bar" };
    const request = new HttpRequest({});
    const handler = predictEndpointMiddleware({
      urlParser: mockUrlParser,
    })(next, {} as any);
    await handler({ input, request });

    const {
      input: forwardedInput,
      request: { hostname, path, protocol },
    } = next.mock.calls[0][0];

    expect(mockUrlParser.mock.calls[0][0]).toBe("http://api.example.com/foo/bar");
    expect(forwardedInput).toBe(input);
    expect(hostname).toBe("api.example.com");
    expect(path).toBe("/foo/bar");
    expect(protocol).toBe("http:");
  });
});
