import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateStateMachineOutput shape
 */
export interface UpdateStateMachineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The date and time the state machine was updated.</p>
   */
  updateDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
