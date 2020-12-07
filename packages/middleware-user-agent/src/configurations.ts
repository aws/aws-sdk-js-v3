import { UserAgent } from "@aws-sdk/types";
export interface UserAgentInputConfig {
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: string | UserAgent;
}
interface PreviouslyResolved {
  defaultUserAgent: UserAgent;
  runtime: string;
}
export interface UserAgentResolvedConfig {
  defaultUserAgent: UserAgent;
  customUserAgent?: UserAgent;
  runtime: string;
}
export function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentInputConfig
): T & UserAgentResolvedConfig {
  return {
    ...input,
    customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
  };
}
