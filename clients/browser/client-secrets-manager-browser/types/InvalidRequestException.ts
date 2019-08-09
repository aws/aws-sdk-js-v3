import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You provided a parameter value that is not valid for the current state of the resource.</p> <p>Possible causes:</p> <ul> <li> <p>You tried to perform the operation on a secret that's currently marked deleted.</p> </li> <li> <p>You tried to enable rotation on a secret that doesn't already have a Lambda function ARN configured and you didn't include such an ARN as a parameter in this call. </p> </li> </ul>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
