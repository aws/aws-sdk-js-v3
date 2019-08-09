import { _UnmarshalledReservation } from "./_Reservation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Placeholder documentation for UpdateReservationResponse
 */
export interface UpdateReservationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * Reserved resources available to use
   */
  Reservation?: _UnmarshalledReservation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
