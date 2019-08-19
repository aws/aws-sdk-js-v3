import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpgradeAppliedSchemaOutput shape
 */
export interface UpgradeAppliedSchemaOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the upgraded schema that is returned as part of the response.</p>
   */
  UpgradedSchemaArn?: string;

  /**
   * <p>The ARN of the directory that is returned as part of the response.</p>
   */
  DirectoryArn?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
