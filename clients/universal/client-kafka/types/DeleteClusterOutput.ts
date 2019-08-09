import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteClusterOutput shape
 */
export interface DeleteClusterOutput extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the cluster.</p>
   *
   */
  ClusterArn?: string;

  /**
   *
   *             <p>The state of the cluster. The possible states are CREATING, ACTIVE, and FAILED.</p>
   *
   */
  State?: "ACTIVE" | "CREATING" | "UPDATING" | "DELETING" | "FAILED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
