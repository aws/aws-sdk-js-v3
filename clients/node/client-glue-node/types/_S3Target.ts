/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface _S3Target {
  /**
   * <p>The path to the Amazon S3 target.</p>
   */
  Path?: string;

  /**
   * <p>A list of glob patterns used to exclude from the crawl. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledS3Target extends _S3Target {
  /**
   * <p>A list of glob patterns used to exclude from the crawl. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: Array<string>;
}
