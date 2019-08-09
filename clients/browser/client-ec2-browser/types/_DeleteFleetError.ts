/**
 * <p>Describes an EC2 Fleet error.</p>
 */
export interface _DeleteFleetError {
  /**
   * <p>The error code.</p>
   */
  Code?:
    | "fleetIdDoesNotExist"
    | "fleetIdMalformed"
    | "fleetNotInDeletableState"
    | "unexpectedError"
    | string;

  /**
   * <p>The description for the error code.</p>
   */
  Message?: string;
}

export type _UnmarshalledDeleteFleetError = _DeleteFleetError;
