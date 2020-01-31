export interface UserAgentInputConfig {
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: string;
}
interface PreviouslyResolved {
  defaultUserAgent: string;
  runtime: string;
}
export interface UserAgentResolvedConfig {
  defaultUserAgent: string;
  customUserAgent?: string;
  runtime: string;
}
export function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentInputConfig
): T & UserAgentResolvedConfig {
  return input;
}
