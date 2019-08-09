import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
