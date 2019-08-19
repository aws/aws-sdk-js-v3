/**
 * <p>Contains information about the reason that the operation failed.</p> <p>This data type is used as a response element in the <a>GetOrganizationsAccessReport</a>, <a>GetServiceLastAccessedDetails</a>, and <a>GetServiceLastAccessedDetailsWithEntities</a> operations.</p>
 */
export interface _ErrorDetails {
  /**
   * <p>Detailed information about the reason that the operation failed.</p>
   */
  Message: string;

  /**
   * <p>The error code associated with the operation failure.</p>
   */
  Code: string;
}

export type _UnmarshalledErrorDetails = _ErrorDetails;
