import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * InitializeClusterOutput shape
 */
export interface InitializeClusterOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The cluster's state.</p>
   */
  State?:
    | "CREATE_IN_PROGRESS"
    | "UNINITIALIZED"
    | "INITIALIZE_IN_PROGRESS"
    | "INITIALIZED"
    | "ACTIVE"
    | "UPDATE_IN_PROGRESS"
    | "DELETE_IN_PROGRESS"
    | "DELETED"
    | "DEGRADED"
    | string;

  /**
   * <p>A description of the cluster's state.</p>
   */
  StateMessage?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
