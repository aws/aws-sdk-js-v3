/**
 * <p>An object that describes the recipients for an email.</p>
 */
export interface _Destination {
  /**
   * <p>An array that contains the email addresses of the "To" recipients for the email.</p>
   */
  ToAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for the email.</p>
   */
  CcAddresses?: Array<string> | Iterable<string>;

  /**
   * <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.</p>
   */
  BccAddresses?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDestination extends _Destination {
  /**
   * <p>An array that contains the email addresses of the "To" recipients for the email.</p>
   */
  ToAddresses?: Array<string>;

  /**
   * <p>An array that contains the email addresses of the "CC" (carbon copy) recipients for the email.</p>
   */
  CcAddresses?: Array<string>;

  /**
   * <p>An array that contains the email addresses of the "BCC" (blind carbon copy) recipients for the email.</p>
   */
  BccAddresses?: Array<string>;
}
