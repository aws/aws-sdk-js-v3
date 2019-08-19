import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSecretOutput shape
 */
export interface CreateSecretOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the secret that you just created.</p> <note> <p>Secrets Manager automatically adds several random characters to the name at the end of the ARN when you initially create a secret. This affects only the ARN and not the actual friendly name. This ensures that if you create a new secret with the same name as an old secret that you previously deleted, then users with access to the old secret <i>don't</i> automatically get access to the new secret because the ARNs are different.</p> </note>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret that you just created.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier that's associated with the version of the secret you just created.</p>
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
