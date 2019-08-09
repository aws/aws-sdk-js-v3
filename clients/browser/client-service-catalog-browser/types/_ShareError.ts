/**
 * <p>Errors that occurred during the portfolio share operation.</p>
 */
export interface _ShareError {
  /**
   * <p>List of accounts impacted by the error.</p>
   */
  Accounts?: Array<string> | Iterable<string>;

  /**
   * <p>Information about the error.</p>
   */
  Message?: string;

  /**
   * <p>Error type that happened when processing the operation.</p>
   */
  Error?: string;
}

export interface _UnmarshalledShareError extends _ShareError {
  /**
   * <p>List of accounts impacted by the error.</p>
   */
  Accounts?: Array<string>;
}
