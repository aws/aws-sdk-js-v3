import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>A JSON object containing the following fields:</p>
 */
export interface UpdateChapCredentialsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the target. This is the same target specified in the request.</p>
   */
  TargetARN?: string;

  /**
   * <p>The iSCSI initiator that connects to the target. This is the same initiator name specified in the request.</p>
   */
  InitiatorName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
