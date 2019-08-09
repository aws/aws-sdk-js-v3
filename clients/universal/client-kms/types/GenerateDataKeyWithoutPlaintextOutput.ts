import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GenerateDataKeyWithoutPlaintextOutput shape
 */
export interface GenerateDataKeyWithoutPlaintextOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The encrypted data key. When you use the HTTP API or the AWS CLI, the value is Base64-encoded. Otherwise, it is not encoded.</p>
   */
  CiphertextBlob?: Uint8Array;

  /**
   * <p>The identifier of the CMK that encrypted the data key.</p>
   */
  KeyId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
