import { _UnmarshalledXssMatchSetSummary } from "./_XssMatchSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The response to a <a>ListXssMatchSets</a> request.</p>
 */
export interface ListXssMatchSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <a>XssMatchSet</a> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>XssMatchSet</code> objects, submit another <code>ListXssMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>XssMatchSetSummary</a> objects.</p>
   */
  XssMatchSets?: Array<_UnmarshalledXssMatchSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
