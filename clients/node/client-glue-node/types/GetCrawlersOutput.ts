import { _UnmarshalledCrawler } from "./_Crawler";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCrawlersOutput shape
 */
export interface GetCrawlersOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of crawler metadata.</p>
   */
  Crawlers?: Array<_UnmarshalledCrawler>;

  /**
   * <p>A continuation token, if the returned list has not reached the end of those defined in this customer account.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
