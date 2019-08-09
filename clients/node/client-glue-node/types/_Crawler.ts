import {
  _CrawlerTargets,
  _UnmarshalledCrawlerTargets
} from "./_CrawlerTargets";
import {
  _SchemaChangePolicy,
  _UnmarshalledSchemaChangePolicy
} from "./_SchemaChangePolicy";
import { _Schedule, _UnmarshalledSchedule } from "./_Schedule";
import { _LastCrawlInfo, _UnmarshalledLastCrawlInfo } from "./_LastCrawlInfo";

/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to determine its schema. If successful, the crawler records metadata concerning the data source in the AWS Glue Data Catalog.</p>
 */
export interface _Crawler {
  /**
   * <p>The name of the crawler.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources, such as Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  Role?: string;

  /**
   * <p>A collection of targets to crawl.</p>
   */
  Targets?: _CrawlerTargets;

  /**
   * <p>The name of the database in which the crawler's output is stored.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the crawler.</p>
   */
  Description?: string;

  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated with the crawler.</p>
   */
  Classifiers?: Array<string> | Iterable<string>;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   */
  SchemaChangePolicy?: _SchemaChangePolicy;

  /**
   * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
   */
  State?: "READY" | "RUNNING" | "STOPPING" | string;

  /**
   * <p>The prefix added to the names of tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   */
  Schedule?: _Schedule;

  /**
   * <p>If the crawler is running, contains the total time elapsed since the last crawl began.</p>
   */
  CrawlElapsedTime?: number;

  /**
   * <p>The time that the crawler was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>The time that the crawler was last updated.</p>
   */
  LastUpdated?: Date | string | number;

  /**
   * <p>The status of the last crawl, and potentially error information if an error occurred.</p>
   */
  LastCrawl?: _LastCrawlInfo;

  /**
   * <p>The version of the crawler.</p>
   */
  Version?: number;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users to specify aspects of a crawler's behavior. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;
}

export interface _UnmarshalledCrawler extends _Crawler {
  /**
   * <p>A collection of targets to crawl.</p>
   */
  Targets?: _UnmarshalledCrawlerTargets;

  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated with the crawler.</p>
   */
  Classifiers?: Array<string>;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   */
  SchemaChangePolicy?: _UnmarshalledSchemaChangePolicy;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   */
  Schedule?: _UnmarshalledSchedule;

  /**
   * <p>The time that the crawler was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that the crawler was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The status of the last crawl, and potentially error information if an error occurred.</p>
   */
  LastCrawl?: _UnmarshalledLastCrawlInfo;
}
