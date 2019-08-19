import { _UnmarshalledAggregatedSourceStatus } from "./_AggregatedSourceStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationAggregatorSourcesStatusOutput shape
 */
export interface DescribeConfigurationAggregatorSourcesStatusOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns an AggregatedSourceStatus object. </p>
   */
  AggregatedSourceStatusList?: Array<_UnmarshalledAggregatedSourceStatus>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
