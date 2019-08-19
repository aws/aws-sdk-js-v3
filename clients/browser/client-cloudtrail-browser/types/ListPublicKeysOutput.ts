import { _UnmarshalledPublicKey } from "./_PublicKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Returns the objects or data listed below if successful. Otherwise, returns an error.</p>
 */
export interface ListPublicKeysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Contains an array of PublicKey objects.</p> <note> <p>The returned public keys may have validity time ranges that overlap.</p> </note>
   */
  PublicKeyList?: Array<_UnmarshalledPublicKey>;

  /**
   * <p>Reserved for future use.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
