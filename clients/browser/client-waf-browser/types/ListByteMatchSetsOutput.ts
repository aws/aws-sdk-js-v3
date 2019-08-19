import { _UnmarshalledByteMatchSetSummary } from "./_ByteMatchSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListByteMatchSetsOutput shape
 */
export interface ListByteMatchSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>ByteMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>ByteMatchSet</code> objects, submit another <code>ListByteMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>ByteMatchSetSummary</a> objects.</p>
   */
  ByteMatchSets?: Array<_UnmarshalledByteMatchSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
