import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The sub-type count exceeded the limit for the inventory type.</p>
 */
export interface SubTypeCountLimitExceededException
  extends __ServiceException__<_SubTypeCountLimitExceededExceptionDetails> {
  name: "SubTypeCountLimitExceededException";
}

export interface _SubTypeCountLimitExceededExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
