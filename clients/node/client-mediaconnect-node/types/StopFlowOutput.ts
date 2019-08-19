import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StopFlowOutput shape
 */
export interface StopFlowOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The ARN of the flow that you stopped.
   */
  FlowArn?: string;

  /**
   * The status of the flow when the StopFlow process begins.
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
