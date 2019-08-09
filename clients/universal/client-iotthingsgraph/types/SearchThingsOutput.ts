import { _UnmarshalledThing } from "./_Thing";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SearchThingsOutput shape
 */
export interface SearchThingsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An array of things in the result set.</p>
   */
  things?: Array<_UnmarshalledThing>;

  /**
   * <p>The string to specify as <code>nextToken</code> when you request the next page of results.</p>
   */
  nextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
