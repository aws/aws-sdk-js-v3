/**
 * <p>The details of a crawl in the workflow.</p>
 */
export interface _Crawl {
  /**
   * <p>The state of the crawler.</p>
   */
  State?: "RUNNING" | "SUCCEEDED" | "CANCELLED" | "FAILED" | string;

  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartedOn?: Date | string | number;

  /**
   * <p>The date and time on which the crawl completed.</p>
   */
  CompletedOn?: Date | string | number;

  /**
   * <p>The error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;
}

export interface _UnmarshalledCrawl extends _Crawl {
  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time on which the crawl completed.</p>
   */
  CompletedOn?: Date;
}
