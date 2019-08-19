import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteFlowOutput shape
 */
export interface DeleteFlowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that was deleted.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the DeleteFlow process begins.
   */
  Status?:
    | "STANDBY"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "STARTING"
    | "STOPPING"
    | "ERROR"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
