import { _UnmarshalledSearchRecord } from "./_SearchRecord";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchOutput shape
 */
export interface SearchOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of <code>SearchResult</code> objects.</p>
   */
  Results?: Array<_UnmarshalledSearchRecord>;

  /**
   * <p>If the result of the previous <code>Search</code> request was truncated, the response includes a NextToken. To retrieve the next set of results, use the token in the next request.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
