import { _UnmarshalledEntityDescription } from "./_EntityDescription";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchEntitiesOutput shape
 */
export interface SearchEntitiesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of descriptions for each entity returned in the search result.</p>
   */
  descriptions?: Array<_UnmarshalledEntityDescription>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
