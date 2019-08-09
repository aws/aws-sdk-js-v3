import { _UnmarshalledCrawler } from "./_Crawler";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCrawlerOutput shape
 */
export interface GetCrawlerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: _UnmarshalledCrawler;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
