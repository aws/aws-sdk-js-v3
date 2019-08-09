import { _UnmarshalledGeoMatchSetSummary } from "./_GeoMatchSetSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListGeoMatchSetsOutput shape
 */
export interface ListGeoMatchSetsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>If you have more <code>GeoMatchSet</code> objects than the number that you specified for <code>Limit</code> in the request, the response includes a <code>NextMarker</code> value. To list more <code>GeoMatchSet</code> objects, submit another <code>ListGeoMatchSets</code> request, and specify the <code>NextMarker</code> value from the response in the <code>NextMarker</code> value in the next request.</p>
   */
  NextMarker?: string;

  /**
   * <p>An array of <a>GeoMatchSetSummary</a> objects.</p>
   */
  GeoMatchSets?: Array<_UnmarshalledGeoMatchSetSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
