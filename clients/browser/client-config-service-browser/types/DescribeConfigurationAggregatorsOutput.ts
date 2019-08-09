import { _UnmarshalledConfigurationAggregator } from "./_ConfigurationAggregator";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationAggregatorsOutput shape
 */
export interface DescribeConfigurationAggregatorsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a ConfigurationAggregators object.</p>
   */
  ConfigurationAggregators?: Array<_UnmarshalledConfigurationAggregator>;

  /**
   * <p>The nextToken string returned on a previous page that you use to get the next page of results in a paginated response.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
