import { _UnmarshalledPublicKey } from "./_PublicKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreatePublicKeyOutput shape
 */
export interface CreatePublicKeyOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returned when you add a public key.</p>
   */
  PublicKey?: _UnmarshalledPublicKey;

  /**
   * <p>The fully qualified URI of the new public key resource just created. For example: <code>https://cloudfront.amazonaws.com/2010-11-01/cloudfront-public-key/EDFDVBD632BHDS5</code>.</p>
   */
  Location?: string;

  /**
   * <p>The current version of the public key. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
