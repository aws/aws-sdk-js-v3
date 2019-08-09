import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DisableEbsEncryptionByDefaultOutput shape
 */
export interface DisableEbsEncryptionByDefaultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The updated status of encryption by default.</p>
   */
  EbsEncryptionByDefault?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
