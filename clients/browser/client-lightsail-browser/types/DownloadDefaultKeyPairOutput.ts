import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DownloadDefaultKeyPairOutput shape
 */
export interface DownloadDefaultKeyPairOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
