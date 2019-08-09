import { _UnmarshalledKeyPair } from "./_KeyPair";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetKeyPairOutput shape
 */
export interface GetKeyPairOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the key pair.</p>
   */
  keyPair?: _UnmarshalledKeyPair;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
