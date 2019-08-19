/**
 * _UnprocessedAccount shape
 */
export interface _UnprocessedAccount {
  /**
   * <p>AWS Account ID.</p>
   */
  AccountId: string;

  /**
   * <p>A reason why the account hasn't been processed.</p>
   */
  Result: string;
}

export type _UnmarshalledUnprocessedAccount = _UnprocessedAccount;
