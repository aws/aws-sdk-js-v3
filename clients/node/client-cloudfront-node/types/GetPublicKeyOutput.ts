import { _UnmarshalledPublicKey } from "./_PublicKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPublicKeyOutput shape
 */
export interface GetPublicKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the public key.</p>
   */
  PublicKey?: _UnmarshalledPublicKey;

  /**
   * <p>The current version of the public key. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
