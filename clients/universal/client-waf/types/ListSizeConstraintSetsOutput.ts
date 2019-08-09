import { _UnmarshalledSizeConstraintSetSummary } from "./_SizeConstraintSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListSizeConstraintSetsOutput shape
 */
export interface ListSizeConstraintSetsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>SizeConstraintSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>SizeConstraintSet</code> objects, submit another <code>ListSizeConstraintSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>SizeConstraintSetSummary</a> objects.</p>
   */
  SizeConstraintSets?: Array<_UnmarshalledSizeConstraintSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
