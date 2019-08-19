import { _UnmarshalledCapacityReservation } from "./_CapacityReservation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateCapacityReservationOutput shape
 */
export interface CreateCapacityReservationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the Capacity Reservation.</p>
   */
  CapacityReservation?: _UnmarshalledCapacityReservation;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
