import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSecretVersionStageOutput shape
 */
export interface UpdateSecretVersionStageOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret with the staging label that was modified.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret with the staging label that was modified.</p>
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
