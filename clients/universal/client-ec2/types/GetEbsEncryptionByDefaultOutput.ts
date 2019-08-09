import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetEbsEncryptionByDefaultOutput shape
 */
export interface GetEbsEncryptionByDefaultOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Indicates whether encryption by default is enabled.</p>
   */
  EbsEncryptionByDefault?: boolean;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
