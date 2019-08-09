import { _UnmarshalledCrawlerMetrics } from "./_CrawlerMetrics";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetCrawlerMetricsOutput shape
 */
export interface GetCrawlerMetricsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of metrics for the specified crawler.</p>
   */
  CrawlerMetricsList?: Array<_UnmarshalledCrawlerMetrics>;

  /**
   * <p>A continuation token, if the returned list does not contain the last metric available.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
