/**
 * <p>Status and error information about the most recent crawl.</p>
 */
export interface _LastCrawlInfo {
  /**
   * <p>Status of the last crawl.</p>
   */
  Status?: "SUCCEEDED" | "CANCELLED" | "FAILED" | string;

  /**
   * <p>If an error occurred, the error information about the last crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group for the last crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream for the last crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The prefix for a message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The time at which the crawl started.</p>
   */
  StartTime?: Date | string | number;
}

export interface _UnmarshalledLastCrawlInfo extends _LastCrawlInfo {
  /**
   * <p>The time at which the crawl started.</p>
   */
  StartTime?: Date;
}
