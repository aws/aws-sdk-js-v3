import { _Crawl, _UnmarshalledCrawl } from "./_Crawl";

/**
 * <p>The details of a Crawler node present in the workflow.</p>
 */
export interface _CrawlerNodeDetails {
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   */
  Crawls?: Array<_Crawl> | Iterable<_Crawl>;
}

export interface _UnmarshalledCrawlerNodeDetails extends _CrawlerNodeDetails {
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   */
  Crawls?: Array<_UnmarshalledCrawl>;
}
