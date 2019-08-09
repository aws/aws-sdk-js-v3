import { _UnmarshalledCrawler } from "./_Crawler";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * BatchGetCrawlersOutput shape
 */
export interface BatchGetCrawlersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of crawler definitions.</p>
   */
  Crawlers?: Array<_UnmarshalledCrawler>;

  /**
   * <p>A list of names of crawlers that were not found.</p>
   */
  CrawlersNotFound?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
