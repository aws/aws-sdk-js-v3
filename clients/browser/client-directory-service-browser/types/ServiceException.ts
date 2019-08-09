import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An exception has occurred in AWS Directory Service.</p>
 */
export interface ServiceException
  extends __ServiceException__<_ServiceExceptionDetails> {
  name: "ServiceException";
}

export interface _ServiceExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
