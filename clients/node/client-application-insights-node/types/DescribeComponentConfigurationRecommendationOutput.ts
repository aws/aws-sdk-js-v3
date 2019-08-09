import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeComponentConfigurationRecommendationOutput shape
 */
export interface DescribeComponentConfigurationRecommendationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The recommended configuration settings of the component. The value is the escaped JSON of the configuration.</p>
   */
  ComponentConfiguration?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
