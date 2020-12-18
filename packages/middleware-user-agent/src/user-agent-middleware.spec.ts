import { HttpRequest } from "@aws-sdk/protocol-http";
import { UserAgentPair } from "@aws-sdk/types";

import { USER_AGENT, X_AMZ_USER_AGENT } from "./constants";
import { userAgentMiddleware } from "./user-agent-middleware";

describe("userAgentMiddleware", () => {
  const mockNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should collect user agent pair from default, custom-supplied, and handler context", async () => {
    const middleware = userAgentMiddleware({
      defaultUserAgentProvider: async () => [
        ["default_agent", "1.0.0"],
        ["aws-sdk-js", "1.0.0"],
      ],
      customUserAgent: [["custom_ua/abc"]],
      runtime: "node",
    });
    const handler = middleware(mockNextHandler, { userAgent: [["cfg/retry-mode", "standard"]] });
    await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    const sdkUserAgent = mockNextHandler.mock.calls[0][0].request.headers[X_AMZ_USER_AGENT];
    expect(sdkUserAgent).toEqual(expect.stringContaining("aws-sdk-js/1.0.0"));
    expect(sdkUserAgent).toEqual(expect.stringContaining("default_agent/1.0.0"));
    expect(sdkUserAgent).toEqual(expect.stringContaining("custom_ua/abc"));
    expect(sdkUserAgent).toEqual(expect.stringContaining("cfg/retry-mode/standard"));
    expect(mockNextHandler.mock.calls[0][0].request.headers[USER_AGENT]).toEqual(
      expect.stringContaining("aws-sdk-js/1.0.0")
    );
  });

  it(`should not set ${USER_AGENT} header in browser`, async () => {
    const middleware = userAgentMiddleware({
      defaultUserAgentProvider: async () => [["aws-sdk-js", "1.0.0"]],
      runtime: "browser",
    });
    const handler = middleware(mockNextHandler, {});
    await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
    expect(mockNextHandler.mock.calls.length).toEqual(1);
    expect(mockNextHandler.mock.calls[0][0].request.headers[USER_AGENT]).toBeUndefined();
  });

  describe("should sanitize the user agent string", () => {
    const cases: { ua: UserAgentPair; expected: string }[] = [
      { ua: ["/name", "1.0.0"], expected: "name/1.0.0" },
      { ua: ["Name", "1.0.0"], expected: "Name/1.0.0" },
      { ua: ["md/name", "1.0.0"], expected: "md/name/1.0.0" },
      { ua: ["$prefix/&name", "1.0.0"], expected: "$prefix/&name/1.0.0" },
      { ua: ["name(or not)", "1.0.0"], expected: "name_or_not_/1.0.0" },
      { ua: ["name", "1.0.0(test_version)"], expected: "name/1.0.0_test_version" },
      { ua: ["api/Service", "1.0.0"], expected: "api/service/1.0.0" },
    ];
    for (const { ua, expected } of cases) {
      it(`should sanitize user agent ${ua} to ${expected}`, async () => {
        const middleware = userAgentMiddleware({
          defaultUserAgentProvider: async () => [ua],
          runtime: "browser",
        });
        const handler = middleware(mockNextHandler, {});
        await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
        expect(mockNextHandler.mock.calls[0][0].request.headers[X_AMZ_USER_AGENT]).toEqual(
          expect.stringContaining(expected)
        );
      });
    }
  });
});
