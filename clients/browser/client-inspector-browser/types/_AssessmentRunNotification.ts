/**
 * <p>Used as one of the elements of the <a>AssessmentRun</a> data type.</p>
 */
export interface _AssessmentRunNotification {
  /**
   * <p>The date of the notification.</p>
   */
  date: Date | string | number;

  /**
   * <p>The event for which a notification is sent.</p>
   */
  event:
    | "ASSESSMENT_RUN_STARTED"
    | "ASSESSMENT_RUN_COMPLETED"
    | "ASSESSMENT_RUN_STATE_CHANGED"
    | "FINDING_REPORTED"
    | "OTHER"
    | string;

  /**
   * <p>The message included in the notification.</p>
   */
  message?: string;

  /**
   * <p>The Boolean value that specifies whether the notification represents an error.</p>
   */
  error: boolean;

  /**
   * <p>The SNS topic to which the SNS notification is sent.</p>
   */
  snsTopicArn?: string;

  /**
   * <p>The status code of the SNS notification.</p>
   */
  snsPublishStatusCode?:
    | "SUCCESS"
    | "TOPIC_DOES_NOT_EXIST"
    | "ACCESS_DENIED"
    | "INTERNAL_ERROR"
    | string;
}

export interface _UnmarshalledAssessmentRunNotification
  extends _AssessmentRunNotification {
  /**
   * <p>The date of the notification.</p>
   */
  date: Date;
}
