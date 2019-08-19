/**
 * <p>Information about the error for the T2 or T3 instance whose credit option for CPU usage was not modified.</p>
 */
export interface _UnsuccessfulInstanceCreditSpecificationItemError {
  /**
   * <p>The error code.</p>
   */
  Code?:
    | "InvalidInstanceID.Malformed"
    | "InvalidInstanceID.NotFound"
    | "IncorrectInstanceState"
    | "InstanceCreditSpecification.NotSupported"
    | string;

  /**
   * <p>The applicable error message.</p>
   */
  Message?: string;
}

export type _UnmarshalledUnsuccessfulInstanceCreditSpecificationItemError = _UnsuccessfulInstanceCreditSpecificationItemError;
