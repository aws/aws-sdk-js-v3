import { _UnmarshalledGeoMatchSet } from "./_GeoMatchSet";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateGeoMatchSetOutput shape
 */
export interface CreateGeoMatchSetOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <a>GeoMatchSet</a> returned in the <code>CreateGeoMatchSet</code> response. The <code>GeoMatchSet</code> contains no <code>GeoMatchConstraints</code>.</p>
   */
  GeoMatchSet?: _UnmarshalledGeoMatchSet;

  /**
   * <p>The <code>ChangeToken</code> that you used to submit the <code>CreateGeoMatchSet</code> request. You can also use this value to query the status of the request. For more information, see <a>GetChangeTokenStatus</a>.</p>
   */
  ChangeToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
