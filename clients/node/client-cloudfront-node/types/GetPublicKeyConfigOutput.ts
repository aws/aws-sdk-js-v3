import { _UnmarshalledPublicKeyConfig } from "./_PublicKeyConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetPublicKeyConfigOutput shape
 */
export interface GetPublicKeyConfigOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Return the result for the public key configuration.</p>
   */
  PublicKeyConfig?: _UnmarshalledPublicKeyConfig;

  /**
   * <p>The current version of the public key configuration. For example: <code>E2QWRUHAPOMQZL</code>.</p>
   */
  ETag?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
