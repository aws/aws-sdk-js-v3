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
   */
  backoff?: number | ((numFailures: number) => void);
}
