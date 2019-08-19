import { _UnmarshalledReservation } from "./_Reservation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for ListReservationsResponse
 */
export interface ListReservationsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Token to retrieve the next page of results
   */
  NextToken?: string;

  /**
   * List of reservations
   */
  Reservations?: Array<_UnmarshalledReservation>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
