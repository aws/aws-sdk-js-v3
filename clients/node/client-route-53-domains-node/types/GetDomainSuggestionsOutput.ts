import { _UnmarshalledDomainSuggestion } from "./_DomainSuggestion";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetDomainSuggestionsOutput shape
 */
export interface GetDomainSuggestionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of possible domain names. If you specified <code>true</code> for <code>OnlyAvailable</code> in the request, the list contains only domains that are available for registration.</p>
   */
  SuggestionsList?: Array<_UnmarshalledDomainSuggestion>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
