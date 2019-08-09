import { _UnmarshalledHostReservation } from "./_HostReservation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeHostReservationsOutput shape
 */
export interface DescribeHostReservationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Details about the reservation's configuration.</p>
   */
  HostReservationSet?: Array<_UnmarshalledHostReservation>;

  /**
   * <p>The token to use to retrieve the next page of results. This value is <code>null</code> when there are no more results to return.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
