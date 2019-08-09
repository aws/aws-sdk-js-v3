import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationsOutput shape
 */
export interface DescribeConfigurationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A key in the response map. The value is an array of data.</p>
   */
  configurations?: Array<{ [key: string]: string }>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
