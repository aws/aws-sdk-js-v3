export interface UserAgentInputConfig {
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: string;
}
interface PreviouslyResolved {
  defaultUserAgent: string;
}
export interface UserAgentResolvedConfig {
  defaultUserAgent: string;
  customUserAgent?: string;
}
export function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentInputConfig
): T & UserAgentResolvedConfig {
  return input;
}
