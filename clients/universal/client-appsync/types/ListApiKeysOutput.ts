import { _UnmarshalledApiKey } from "./_ApiKey";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListApiKeysOutput shape
 */
export interface ListApiKeysOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>ApiKey</code> objects.</p>
   */
  apiKeys?: Array<_UnmarshalledApiKey>;

  /**
   * <p>An identifier to be passed in the next request to this operation to return the next set of items in the list.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
