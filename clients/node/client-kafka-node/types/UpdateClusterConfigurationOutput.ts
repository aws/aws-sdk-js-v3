import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateClusterConfigurationOutput shape
 */
export interface UpdateClusterConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
   *
   */
  ClusterArn?: string;

  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the cluster operation.</p>
   *
   */
  ClusterOperationArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
