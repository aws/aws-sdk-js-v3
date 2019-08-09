import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a <code>RegisterEcsCluster</code> request.</p>
 */
export interface RegisterEcsClusterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The cluster's ARN.</p>
   */
  EcsClusterArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
