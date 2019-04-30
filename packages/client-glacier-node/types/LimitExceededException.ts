import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Returned if the request results in a vault or account limit being exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>Client</p>
   */
  type?: string;

  /**
   * <p>400 Bad Request</p>
   */
  code?: string;

  /**
   * <p>Returned if the request results in a vault limit or tags limit being exceeded.</p>
   */
  message?: string;
}
