import { Provider, UserAgent } from "@smithy/types";

import { DefaultUserAgentOptions } from "./configurations";

/**
 * @internal
 */
export interface PreviouslyResolved {
  userAgentAppId: Provider<string | undefined>;
}

/**
 * Default provider to the user agent in ReactNative.
 * @internal
 */
export const createDefaultUserAgentProvider =
  ({ serviceId, clientVersion }: DefaultUserAgentOptions): ((config?: PreviouslyResolved) => Promise<UserAgent>) =>
  async (config?: PreviouslyResolved) => {
    const sections: UserAgent = [
      // sdk-metadata
      ["aws-sdk-js", clientVersion],
      // ua-metadata
      ["ua", "2.1"],
      // os-metadata
      ["os/other"],
      // language-metadata
      // ECMAScript edition doesn't matter in JS.
      ["lang/js"],
      ["md/rn"],
    ];

    if (serviceId) {
      // api-metadata
      // service Id may not appear in non-AWS clients
      sections.push([`api/${serviceId}`, clientVersion]);
    }

    const appId = await config?.userAgentAppId?.();
    if (appId) {
      sections.push([`app/${appId}`]);
    }

    return sections;
  };

/**
 * @internal
 * @deprecated use createDefaultUserAgentProvider
 */
export const defaultUserAgent = createDefaultUserAgentProvider;
