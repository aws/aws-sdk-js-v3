import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A client exception has occurred.</p>
 */
export interface ClientException
  extends __ServiceException__<_ClientExceptionDetails> {
  name: "ClientException";
}

export interface _ClientExceptionDetails {
  /**
   * <p>The descriptive message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The AWS request identifier.</p>
   */
  RequestId?: string;
}
