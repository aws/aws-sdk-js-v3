import type { UserAgent } from "@smithy/types";

import type { DefaultUserAgentOptions } from "./configurations";
import type { PreviouslyResolved } from "./index";

/**
 * This is an alternative to the default user agent provider that uses the bowser
 * library to parse the user agent string.
 *
 * Use this with your client's `defaultUserAgentProvider` constructor object field
 * to use the legacy behavior.
 *
 * @deprecated use the default provider unless you need the older UA-parsing functionality.
 * @public
 */
export const createUserAgentStringParsingProvider =
  ({ serviceId, clientVersion }: DefaultUserAgentOptions): ((config?: PreviouslyResolved) => Promise<UserAgent>) =>
  async (config?: PreviouslyResolved) => {
    const module = await import("bowser");
    const parse = module.parse ?? module.default.parse ?? (() => "");

    const parsedUA =
      typeof window !== "undefined" && window?.navigator?.userAgent ? parse(window.navigator.userAgent) : undefined;
    const sections: UserAgent = [
      // sdk-metadata
      ["aws-sdk-js", clientVersion],
      // ua-metadata
      ["ua", "2.1"],
      // os-metadata
      [`os/${parsedUA?.os?.name || "other"}`, parsedUA?.os?.version],
      // language-metadata
      // ECMAScript edition doesn't matter in JS.
      ["lang/js"],
      // browser vendor and version.
      ["md/browser", `${parsedUA?.browser?.name ?? "unknown"}_${parsedUA?.browser?.version ?? "unknown"}`],
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
