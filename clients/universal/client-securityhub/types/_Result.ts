/**
 * <p>Details about the account that wasn't processed.</p>
 */
export interface _Result {
  /**
   * <p>An AWS account ID of the account that wasn't be processed.</p>
   */
  AccountId?: string;

  /**
   * <p>The reason that the account wasn't be processed.</p>
   */
  ProcessingResult?: string;
}

export type _UnmarshalledResult = _Result;
