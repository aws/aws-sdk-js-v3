import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>No IAM ARN was included in the request. You must use an IAM session ARN or IAM user ARN in the request.</p>
 */
export interface IamArnRequiredException
  extends __ServiceException__<_IamArnRequiredExceptionDetails> {
  name: "IamArnRequiredException";
}

export interface _IamArnRequiredExceptionDetails {}
