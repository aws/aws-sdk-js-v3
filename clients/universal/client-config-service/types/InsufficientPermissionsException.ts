import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates one of the following errors:</p> <ul> <li> <p>The rule cannot be created because the IAM role assigned to AWS Config lacks permissions to perform the config:Put* action.</p> </li> <li> <p>The AWS Lambda function cannot be invoked. Check the function ARN, and check the function's permissions.</p> </li> </ul>
 */
export interface InsufficientPermissionsException
  extends __ServiceException__<_InsufficientPermissionsExceptionDetails> {
  name: "InsufficientPermissionsException";
}

export interface _InsufficientPermissionsExceptionDetails {}
