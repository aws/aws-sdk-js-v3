import { normalizeProvider } from "@smithy/core";
import { Logger, Provider, UserAgent } from "@smithy/types";

/**
 * @internal
 */
export const DEFAULT_UA_APP_ID = undefined;

/**
 * @public
 */
export interface UserAgentInputConfig {
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: string | UserAgent;
  /**
   * The application ID used to identify the application.
   */
  userAgentAppId?: string | undefined | Provider<string | undefined>;
}

interface PreviouslyResolved {
  defaultUserAgentProvider: Provider<UserAgent>;
  runtime: string;
  logger?: Logger;
}

export interface UserAgentResolvedConfig {
  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header.
   * @internal
   */
  defaultUserAgentProvider: Provider<UserAgent>;
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: UserAgent;
  /**
   * The runtime environment
   */
  runtime: string;
  /**
   * Resolved value for input config {config.userAgentAppId}
   */
  userAgentAppId: Provider<string | undefined>;
}

function isValidUserAgentAppId(appId: unknown): boolean {
  if (appId === undefined) {
    return true;
  }
  return typeof appId === "string" && appId.length <= 50;
}

export function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentInputConfig
): T & UserAgentResolvedConfig {
  const normalizedAppIdProvider = normalizeProvider(input.userAgentAppId ?? DEFAULT_UA_APP_ID);
  const { customUserAgent } = input;

  return Object.assign(input, {
    customUserAgent:
      typeof customUserAgent === "string" ? ([[customUserAgent]] as [string, string?][]) : customUserAgent,
    userAgentAppId: async () => {
      const appId = await normalizedAppIdProvider();
      if (!isValidUserAgentAppId(appId)) {
        const logger = input.logger?.constructor?.name === "NoOpLogger" || !input.logger ? console : input.logger;
        if (typeof appId !== "string") {
          logger?.warn("userAgentAppId must be a string or undefined.");
        } else if (appId.length > 50) {
          logger?.warn("The provided userAgentAppId exceeds the maximum length of 50 characters.");
        }
      }
      return appId;
    },
  });
}
