/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface _CrawlerMetrics {
  /**
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;
}

export type _UnmarshalledCrawlerMetrics = _CrawlerMetrics;
