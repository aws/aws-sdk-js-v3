import { _UnmarshalledKeyPair } from "./_KeyPair";
import { _UnmarshalledOperation } from "./_Operation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateKeyPairOutput shape
 */
export interface CreateKeyPairOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the new key pair you just created.</p>
   */
  keyPair?: _UnmarshalledKeyPair;

  /**
   * <p>A base64-encoded public key of the <code>ssh-rsa</code> type.</p>
   */
  publicKeyBase64?: string;

  /**
   * <p>A base64-encoded RSA private key.</p>
   */
  privateKeyBase64?: string;

  /**
   * <p>An array of key-value pairs containing information about the results of your create key pair request.</p>
   */
  operation?: _UnmarshalledOperation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
