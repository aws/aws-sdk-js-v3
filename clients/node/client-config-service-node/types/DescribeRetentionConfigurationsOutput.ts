import { _UnmarshalledRetentionConfiguration } from "./_RetentionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeRetentionConfigurationsOutput shape
 */
export interface DescribeRetentionConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a retention configuration object.</p>
   */
  RetentionConfigurations?: Array<_UnmarshalledRetentionConfiguration>;

  /**
   * <p>The <code>nextToken</code> string returned on a previous page that you use to get the next page of results in a paginated response. </p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
