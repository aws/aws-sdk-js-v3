import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it attempted to create resources beyond the current AWS account limits. The error code describes the limit exceeded.</p>
 */
export interface LimitExceededException
  extends __ServiceException__<_LimitExceededExceptionDetails> {
  name: "LimitExceededException";
}

export interface _LimitExceededExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode:
    | "ASSESSMENT_TARGET_LIMIT_EXCEEDED"
    | "ASSESSMENT_TEMPLATE_LIMIT_EXCEEDED"
    | "ASSESSMENT_RUN_LIMIT_EXCEEDED"
    | "RESOURCE_GROUP_LIMIT_EXCEEDED"
    | "EVENT_SUBSCRIPTION_LIMIT_EXCEEDED"
    | string;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
