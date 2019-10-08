export namespace UserAgentConfig {
  export interface Input {
    /**
     * The custom user agent header that would be appended to default one
     */
    customUserAgent?: string;
  }
  export interface PreviouslyResolved {
    defaultUserAgent: string;
  }
  export interface Resolved {
    defaultUserAgent: string;
    customUserAgent?: string;
  }
  export function resolve<T>(
    input: T & PreviouslyResolved & Input
  ): T & Resolved {
    return input;
  }
}

export type UserAgentConfigInput = UserAgentConfig.Input;
