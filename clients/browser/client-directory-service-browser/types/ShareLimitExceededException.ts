import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum number of AWS accounts that you can share with this directory has been reached.</p>
 */
export interface ShareLimitExceededException
  extends __ServiceException__<_ShareLimitExceededExceptionDetails> {
  name: "ShareLimitExceededException";
}

export interface _ShareLimitExceededExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
