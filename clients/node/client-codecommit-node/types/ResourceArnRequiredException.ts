import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A valid Amazon Resource Name (ARN) for an AWS CodeCommit resource is required. For a list of valid resources in AWS CodeCommit, see <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/auth-and-access-control-iam-access-control-identity-based.html#arn-formats">CodeCommit Resources and Operations</a> in the AWS CodeCommit User Guide.</p>
 */
export interface ResourceArnRequiredException
  extends __ServiceException__<_ResourceArnRequiredExceptionDetails> {
  name: "ResourceArnRequiredException";
}

export interface _ResourceArnRequiredExceptionDetails {}
