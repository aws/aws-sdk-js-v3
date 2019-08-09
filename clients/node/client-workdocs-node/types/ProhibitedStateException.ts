import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified document version is not in the INITIALIZED state.</p>
 */
export interface ProhibitedStateException
  extends __ServiceException__<_ProhibitedStateExceptionDetails> {
  name: "ProhibitedStateException";
}

export interface _ProhibitedStateExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
