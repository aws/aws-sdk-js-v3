import { _UnmarshalledKeyPair } from "./_KeyPair";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetKeyPairsOutput shape
 */
export interface GetKeyPairsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of key-value pairs containing information about the key pairs.</p>
   */
  keyPairs?: Array<_UnmarshalledKeyPair>;

  /**
   * <p>A token used for advancing to the next page of results from your get key pairs request.</p>
   */
  nextPageToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
