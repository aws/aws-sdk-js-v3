import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RotateSecretOutput shape
 */
export interface RotateSecretOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the secret.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the new version of the secret created by the rotation started by this request.</p>
   */
  VersionId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
