import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the Amazon S3 Glacier response to your request.</p>
 */
export interface ListTagsForVaultOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The tags attached to the vault. Each tag is composed of a key and a value.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
