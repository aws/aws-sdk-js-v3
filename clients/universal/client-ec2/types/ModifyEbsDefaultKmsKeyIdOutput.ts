import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ModifyEbsDefaultKmsKeyIdOutput shape
 */
export interface ModifyEbsDefaultKmsKeyIdOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the default CMK for encryption by default.</p>
   */
  KmsKeyId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
