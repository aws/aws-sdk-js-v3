import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CancelRotateSecretOutput shape
 */
export interface CancelRotateSecretOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret for which rotation was canceled.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret for which rotation was canceled.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the version of the secret that was created during the rotation. This version might not be complete, and should be evaluated for possible deletion. At the very least, you should remove the <code>VersionStage</code> value <code>AWSPENDING</code> to enable this version to be deleted. Failing to clean up a cancelled rotation can block you from successfully starting future rotations.</p>
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
