export interface UserAgentConfigInput {
  /**
   * The custom user agent header that would be appended to default one
   */
  customUserAgent?: string;
}
interface PreviouslyResolved {
  defaultUserAgent: string;
}
export interface UserAgentConfigResolved {
  defaultUserAgent: string;
  customUserAgent?: string;
}
export function resolveUserAgentConfig<T>(
  input: T & PreviouslyResolved & UserAgentConfigInput
): T & UserAgentConfigResolved {
  return input;
}
