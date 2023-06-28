import { setPartitionInfo, useDefaultPartitionInfo } from "@aws-sdk/util-endpoints";
import { HttpRequest } from "@smithy/protocol-http";
import { UserAgentPair } from "@smithy/types";

import { USER_AGENT, X_AMZ_USER_AGENT } from "./constants";
import { userAgentMiddleware } from "./user-agent-middleware";

describe("userAgentMiddleware", () => {
  const mockNextHandler = jest.fn();
  const mockInternalNextHandler = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    useDefaultPartitionInfo();
  });

  describe("should collect user agent pair from default, custom-supplied, and handler context", () => {
    [
      { runtime: "node", sdkUserAgentKey: USER_AGENT, userAgentKey: X_AMZ_USER_AGENT },
      { runtime: "browser", sdkUserAgentKey: X_AMZ_USER_AGENT, userAgentKey: USER_AGENT },
    ].forEach(({ runtime, sdkUserAgentKey, userAgentKey }) =>
      it(runtime, async () => {
        const middleware = userAgentMiddleware({
          defaultUserAgentProvider: async () => [
            ["default_agent", "1.0.0"],
            ["aws-sdk-js", "1.0.0"],
          ],
          customUserAgent: [["custom_ua/abc"]],
          runtime,
        });
        const handler = middleware(mockNextHandler, { userAgent: [["cfg/retry-mode", "standard"]] });
        await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
        expect(mockNextHandler.mock.calls.length).toEqual(1);
        const sdkUserAgent = mockNextHandler.mock.calls[0][0].request.headers[sdkUserAgentKey];
        expect(sdkUserAgent).toEqual(expect.stringContaining("aws-sdk-js/1.0.0"));
        expect(sdkUserAgent).toEqual(expect.stringContaining("default_agent/1.0.0"));
        expect(sdkUserAgent).toEqual(expect.stringContaining("custom_ua/abc"));
        expect(sdkUserAgent).toEqual(expect.stringContaining("cfg/retry-mode#standard"));
        if (userAgentKey === USER_AGENT) {
          expect(mockNextHandler.mock.calls[0][0].request.headers[userAgentKey]).toBeUndefined();
        } else {
          expect(mockNextHandler.mock.calls[0][0].request.headers[userAgentKey]).toEqual(
            expect.stringContaining("aws-sdk-js/1.0.0")
          );
        }
      })
    );
  });

  describe("should sanitize the SDK user agent string", () => {
    const cases: { ua: UserAgentPair; expected: string }[] = [
      { ua: ["/name", "1.0.0"], expected: "name/1.0.0" },
      { ua: ["Name", "1.0.0"], expected: "Name/1.0.0" },
      { ua: ["md/name", "1.0.0"], expected: "md/name#1.0.0" },
      { ua: ["$prefix/&name", "1.0.0"], expected: "$prefix/&name#1.0.0" },
      { ua: ["name(or not)", "1.0.0"], expected: "name-or-not-/1.0.0" },
      { ua: ["name", "1.0.0(test_version)"], expected: "name/1.0.0-test_version" },
      { ua: ["api/Service", "1.0.0"], expected: "api/service#1.0.0" },
      { ua: ["#name#", "1.0.0#blah"], expected: "-name-/1.0.0#blah" },
      { ua: ["#prefix#/#name#", "1.0.0#blah"], expected: "-prefix-/-name-#1.0.0#blah" },
    ];
    [
      { runtime: "node", sdkUserAgentKey: USER_AGENT },
      { runtime: "browser", sdkUserAgentKey: X_AMZ_USER_AGENT },
    ].forEach(({ runtime, sdkUserAgentKey }) =>
      describe(runtime, () => {
        for (const { ua, expected } of cases) {
          it(`should sanitize user agent ${ua} to ${expected}`, async () => {
            const middleware = userAgentMiddleware({
              defaultUserAgentProvider: async () => [ua],
              runtime,
            });
            const handler = middleware(mockNextHandler, {});
            await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
            expect(mockNextHandler.mock.calls[0][0].request.headers[sdkUserAgentKey]).toEqual(
              expect.stringContaining(expected)
            );
          });

          it(`should include internal metadata, user agent ${ua} customization: ${expected}`, async () => {
            const middleware = userAgentMiddleware({
              defaultUserAgentProvider: async () => [ua],
              runtime,
            });

            // internal variant
            setPartitionInfo({} as any, "a-test-prefix");
            const handler = middleware(mockInternalNextHandler, {});
            await handler({ input: {}, request: new HttpRequest({ headers: {} }) });
            expect(mockInternalNextHandler.mock.calls[0][0].request.headers[sdkUserAgentKey]).toEqual(
              expect.stringContaining("a-test-prefix " + expected)
            );
          });
        }
      })
    );
  });
});
