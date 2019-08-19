import { _UnmarshalledRegexMatchSetSummary } from "./_RegexMatchSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListRegexMatchSetsOutput shape
 */
export interface ListRegexMatchSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>RegexMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>RegexMatchSet</code> objects, submit another <code>ListRegexMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>RegexMatchSetSummary</a> objects.</p>
   */
  RegexMatchSets?: Array<_UnmarshalledRegexMatchSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
