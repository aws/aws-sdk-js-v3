import { _ShareError, _UnmarshalledShareError } from "./_ShareError";

/**
 * <p>Information about the portfolio share operation.</p>
 */
export interface _ShareDetails {
  /**
   * <p>List of accounts for whom the operation succeeded.</p>
   */
  SuccessfulShares?: Array<string> | Iterable<string>;

  /**
   * <p>List of errors.</p>
   */
  ShareErrors?: Array<_ShareError> | Iterable<_ShareError>;
}

export interface _UnmarshalledShareDetails extends _ShareDetails {
  /**
   * <p>List of accounts for whom the operation succeeded.</p>
   */
  SuccessfulShares?: Array<string>;

  /**
   * <p>List of errors.</p>
   */
  ShareErrors?: Array<_UnmarshalledShareError>;
}
