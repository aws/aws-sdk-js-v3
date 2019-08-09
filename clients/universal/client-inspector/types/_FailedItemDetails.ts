/**
 * <p>Includes details about the failed items.</p>
 */
export interface _FailedItemDetails {
  /**
   * <p>The status code of a failed item.</p>
   */
  failureCode:
    | "INVALID_ARN"
    | "DUPLICATE_ARN"
    | "ITEM_DOES_NOT_EXIST"
    | "ACCESS_DENIED"
    | "LIMIT_EXCEEDED"
    | "INTERNAL_ERROR"
    | string;

  /**
   * <p>Indicates whether you can immediately retry a request for this item for a specified resource.</p>
   */
  retryable: boolean;
}

export type _UnmarshalledFailedItemDetails = _FailedItemDetails;
