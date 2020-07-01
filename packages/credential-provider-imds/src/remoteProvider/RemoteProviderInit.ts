export const DEFAULT_TIMEOUT = 1000;
export const DEFAULT_MAX_RETRIES = 3;

export interface RemoteProviderConfig {
  /**
   * The connection timeout (in milliseconds)
   */
  timeout: number;

  /**
   * The maximum number of times the HTTP connection should be retried
   */
  maxRetries: number;
}

export type RemoteProviderInit = Partial<RemoteProviderConfig>;

export const providerConfigFromInit = ({
  maxRetries = DEFAULT_MAX_RETRIES,
  timeout = DEFAULT_TIMEOUT
}: RemoteProviderInit): RemoteProviderConfig => ({ maxRetries, timeout });
