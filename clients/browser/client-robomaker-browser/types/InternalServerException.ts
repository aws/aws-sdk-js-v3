import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
