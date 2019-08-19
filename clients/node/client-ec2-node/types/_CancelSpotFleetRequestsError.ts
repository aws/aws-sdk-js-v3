/**
 * <p>Describes a Spot Fleet error.</p>
 */
export interface _CancelSpotFleetRequestsError {
  /**
   * <p>The error code.</p>
   */
  Code?:
    | "fleetRequestIdDoesNotExist"
    | "fleetRequestIdMalformed"
    | "fleetRequestNotInCancellableState"
    | "unexpectedError"
    | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export type _UnmarshalledCancelSpotFleetRequestsError = _CancelSpotFleetRequestsError;
