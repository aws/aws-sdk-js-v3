import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for the resource has already been reached.</p> <p>For information on resource and stack limitations, see <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cloudformation-limits.html">Limits</a> in the <i>AWS CloudFormation User Guide</i>.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {}
