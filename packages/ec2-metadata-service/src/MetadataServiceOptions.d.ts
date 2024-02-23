export interface MetadataServiceOptions {
  /**
   * the hostname of the instance metadata service.
   */
  host?: string;
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
   * the maximum number of retries to perform for timeout errors.
   */
  maxRetries?: number;
  /**
   * A set of options to configure the retry delay on retryable errors.
   */
  retryDelayOptions?: any;

  /**
   * Prevent IMDSv1 fallback.
   */
  ec2MetadataV1Disabled?: boolean;

  /**
   * profile name to check for IMDSv1 settings.
   */
  profile?: string;

  /**
   * optional file from which to to get config.
   */
  filename?: string;
}
