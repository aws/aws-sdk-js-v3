import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You do not have required permissions to access the requested resource.</p>
 */
export interface AccessDeniedException
  extends __ServiceException__<_AccessDeniedExceptionDetails> {
  name: "AccessDeniedException";
}

export interface _AccessDeniedExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode:
    | "ACCESS_DENIED_TO_ASSESSMENT_TARGET"
    | "ACCESS_DENIED_TO_ASSESSMENT_TEMPLATE"
    | "ACCESS_DENIED_TO_ASSESSMENT_RUN"
    | "ACCESS_DENIED_TO_FINDING"
    | "ACCESS_DENIED_TO_RESOURCE_GROUP"
    | "ACCESS_DENIED_TO_RULES_PACKAGE"
    | "ACCESS_DENIED_TO_SNS_TOPIC"
    | "ACCESS_DENIED_TO_IAM_ROLE"
    | string;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
