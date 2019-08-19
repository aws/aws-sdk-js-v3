import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can have at most 500 active Systems Manager documents.</p>
 */
export interface DocumentLimitExceeded
  extends __ServiceException__<_DocumentLimitExceededDetails> {
  name: "DocumentLimitExceeded";
}

export interface _DocumentLimitExceededDetails {
  /**
   * _String shape
   */
  Message?: string;
}
