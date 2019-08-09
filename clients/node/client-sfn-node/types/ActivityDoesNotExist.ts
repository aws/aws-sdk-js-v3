import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified activity does not exist.</p>
 */
export interface ActivityDoesNotExist
  extends __ServiceException__<_ActivityDoesNotExistDetails> {
  name: "ActivityDoesNotExist";
}

export interface _ActivityDoesNotExistDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
