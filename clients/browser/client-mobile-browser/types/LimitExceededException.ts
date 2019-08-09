import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> There are too many AWS Mobile Hub projects in the account or the account has exceeded the maximum number of resources in some AWS service. You should create another sub-account using AWS Organizations or remove some resources and retry your request. </p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p> The Exception Error Message. </p>
   */
  retryAfterSeconds?: string;

  /**
   * <p> The Exception Error Message. </p>
   */
  message?: string;
}
