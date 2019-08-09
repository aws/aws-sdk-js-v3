import { _UnmarshalledPropertyNameSuggestion } from "./_PropertyNameSuggestion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetSearchSuggestionsOutput shape
 */
export interface GetSearchSuggestionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of property names for a <code>Resource</code> that match a <code>SuggestionQuery</code>.</p>
   */
  PropertyNameSuggestions?: Array<_UnmarshalledPropertyNameSuggestion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
