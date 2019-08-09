import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because it referenced an entity that does not exist. The error code describes the entity.</p>
 */
export interface NoSuchEntityException
  extends __ServiceException__<_NoSuchEntityExceptionDetails> {
  name: "NoSuchEntityException";
}

export interface _NoSuchEntityExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>Code that indicates the type of error that is generated.</p>
   */
  errorCode:
    | "ASSESSMENT_TARGET_DOES_NOT_EXIST"
    | "ASSESSMENT_TEMPLATE_DOES_NOT_EXIST"
    | "ASSESSMENT_RUN_DOES_NOT_EXIST"
    | "FINDING_DOES_NOT_EXIST"
    | "RESOURCE_GROUP_DOES_NOT_EXIST"
    | "RULES_PACKAGE_DOES_NOT_EXIST"
    | "SNS_TOPIC_DOES_NOT_EXIST"
    | "IAM_ROLE_DOES_NOT_EXIST"
    | string;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
