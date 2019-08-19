import { _UnmarshalledGeoMatchSet } from "./_GeoMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetGeoMatchSetOutput shape
 */
export interface GetGeoMatchSetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the <a>GeoMatchSet</a> that you specified in the <code>GetGeoMatchSet</code> request. This includes the <code>Type</code>, which for a <code>GeoMatchContraint</code> is always <code>Country</code>, as well as the <code>Value</code>, which is the identifier for a specific country.</p>
   */
  GeoMatchSet?: _UnmarshalledGeoMatchSet;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
