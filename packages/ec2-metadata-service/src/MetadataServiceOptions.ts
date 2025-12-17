/**
 * @public
 */
export interface MetadataServiceOptions {
  /**
   * the endpoint of the instance metadata service.
   */
  endpoint?: string;
  /**
   * a map of options to pass to the underlying HTTP request.
   */
  httpOptions?: {
    /**
     * a timeout value in milliseconds to wait before aborting the connection. Set to 0 for no timeout.
     */
    timeout?: number;
  };
  /**
   * Prevent IMDSv1 fallback.
   */
  ec2MetadataV1Disabled?: boolean;
  /**
   * profile name to check for IMDSv1 settings.
   */
  profile?: string;
  /**
   * when true, metadata service will not fetch token, which indicates usage of IMDSv1
   */
  disableFetchToken?: boolean;
  /**
   * the number of retry attempts for any failed request, defaulting to 3.
   */
  retries?: number;
  /**
   * the number of seconds to sleep in-between retries and/or a customer provided backoff function to call.
   * if the function returns a promise, it will be awaited and its resolved value ignored.
   * if the function returns a number, the number will be used as seconds duration to wait before the following retry attempt.
   */
  backoff?: number | ((numFailures: number) => Promise<void> | number);
  /**
   * the TTL of the token in seconds, defaulting to 21,600 seconds (6 hours)
   */
  tokenTtl?: number;
  /**
   * the port for the endpoint, defaulting to 80.
   * can also be provided as a part of the endpoint URL, though an explicit config value will take precedence.
   */
  port?: number;
}
