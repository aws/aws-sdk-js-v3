import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The update is not valid.</p>
 */
export interface InvalidUpdate
  extends __ServiceException__<_InvalidUpdateDetails> {
  name: "InvalidUpdate";
}

export interface _InvalidUpdateDetails {
  /**
   * _String shape
   */
  Message?: string;
}
