import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateSecretOutput shape
 */
export interface UpdateSecretOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret that was updated.</p> <note> <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when you initially create a secret. This affects only the ARN and not the actual friendly name. This ensures that if you create a new secret with the same name as an old secret that you previously deleted, then users with access to the old secret <i>don't</i> automatically get access to the new secret because the ARNs are different.</p> </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that was updated.</p>
   */
  Name?: string;

  /**
   * <p>If a new version of the secret was created by this operation, then <code>VersionId</code> contains the unique identifier of the new version.</p>
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
