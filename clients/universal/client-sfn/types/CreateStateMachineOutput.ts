import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateStateMachineOutput shape
 */
export interface CreateStateMachineOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) that identifies the created state machine.</p>
   */
  stateMachineArn: string;

  /**
   * <p>The date the state machine is created.</p>
   */
  creationDate: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
