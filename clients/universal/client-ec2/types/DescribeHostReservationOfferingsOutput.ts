import { _UnmarshalledHostOffering } from "./_HostOffering";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeHostReservationOfferingsOutput shape
 */
export interface DescribeHostReservationOfferingsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * <p>Information about the offerings.</p>
   */
  OfferingSet?: Array<_UnmarshalledHostOffering>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
