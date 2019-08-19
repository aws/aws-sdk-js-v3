import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutSecretValueOutput shape
 */
export interface PutSecretValueOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) for the secret for which you just created a version.</p>
   */
  ARN?: string;

  /**
   * <p>The friendly name of the secret for which you just created or updated a version.</p>
   */
  Name?: string;

  /**
   * <p>The unique identifier of the version of the secret you just created or updated.</p>
   */
  VersionId?: string;

  /**
   * <p>The list of staging labels that are currently attached to this version of the secret. Staging labels are used to track a version as it progresses through the secret rotation process.</p>
   */
  VersionStages?: Array<string>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
