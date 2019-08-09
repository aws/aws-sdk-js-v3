import { _UnmarshalledReservedNodeOffering } from "./_ReservedNodeOffering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetReservedNodeExchangeOfferingsOutput shape
 */
export interface GetReservedNodeExchangeOfferingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>An optional parameter that specifies the starting point for returning a set of response records. When the results of a <code>GetReservedNodeExchangeOfferings</code> request exceed the value specified in MaxRecords, Amazon Redshift returns a value in the marker field of the response. You can retrieve the next set of response records by providing the returned marker value in the marker parameter and retrying the request. </p>
   */
  Marker?: string;

  /**
   * <p>Returns an array of <a>ReservedNodeOffering</a> objects.</p>
   */
  ReservedNodeOfferings?: Array<_UnmarshalledReservedNodeOffering>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
