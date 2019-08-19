import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You cannot perform a specified action if an assessment run is currently in progress.</p>
 */
export interface AssessmentRunInProgressException
  extends __ServiceException__<_AssessmentRunInProgressExceptionDetails> {
  name: "AssessmentRunInProgressException";
}

export interface _AssessmentRunInProgressExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>The ARNs of the assessment runs that are currently in progress.</p>
   */
  assessmentRunArns: Array<string>;

  /**
   * <p>Boolean value that indicates whether the ARN list of the assessment runs is truncated.</p>
   */
  assessmentRunArnsTruncated: boolean;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
