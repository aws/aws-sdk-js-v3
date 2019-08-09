import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An IAM user ARN was not specified.</p>
 */
export interface IamUserArnRequiredException
  extends __ServiceException__<_IamUserArnRequiredExceptionDetails> {
  name: "IamUserArnRequiredException";
}

export interface _IamUserArnRequiredExceptionDetails {}
