import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ImportKeyPairOutput shape
 */
export interface ImportKeyPairOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The MD5 public key fingerprint as specified in section 4 of RFC 4716.</p>
   */
  KeyFingerprint?: string;

  /**
   * <p>The key pair name you provided.</p>
   */
  KeyName?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
