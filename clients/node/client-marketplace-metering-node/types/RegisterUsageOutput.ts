import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * RegisterUsageOutput shape
 */
export interface RegisterUsageOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>(Optional) Only included when public key version has expired</p>
   */
  PublicKeyRotationTimestamp?: Date;

  /**
   * <p>JWT Token</p>
   */
  Signature?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
