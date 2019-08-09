import { _UnmarshalledPublicKeyList } from "./_PublicKeyList";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListPublicKeysOutput shape
 */
export interface ListPublicKeysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Returns a list of all public keys that have been added to CloudFront for this account.</p>
   */
  PublicKeyList?: _UnmarshalledPublicKeyList;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
