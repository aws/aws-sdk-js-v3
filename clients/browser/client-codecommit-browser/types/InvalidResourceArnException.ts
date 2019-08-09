import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The value for the resource ARN is not valid. For more information about resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
 */
export interface InvalidResourceArnException
  extends __ServiceException__<_InvalidResourceArnExceptionDetails> {
  name: "InvalidResourceArnException";
}

export interface _InvalidResourceArnExceptionDetails {}
