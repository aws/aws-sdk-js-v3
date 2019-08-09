import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes a key pair.</p>
 */
export interface CreateKeyPairOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The SHA-1 digest of the DER encoded private key.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>An unencrypted PEM encoded RSA private key.</p>
   */
  KeyMaterial?: string;

  /**
   * <p>The name of the key pair.</p>
   */
  KeyName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
