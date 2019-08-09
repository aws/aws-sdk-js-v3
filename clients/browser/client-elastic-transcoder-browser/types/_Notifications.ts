/**
 * <p>The Amazon Simple Notification Service (Amazon SNS) topic or topics to notify in order to report job status.</p> <important> <p>To receive notifications, you must also subscribe to the new topic in the Amazon SNS console.</p> </important>
 */
export interface _Notifications {
  /**
   * <p>The Amazon Simple Notification Service (Amazon SNS) topic that you want to notify when Elastic Transcoder has started to process the job.</p>
   */
  Progressing?: string;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder has finished processing the job.</p>
   */
  Completed?: string;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder encounters a warning condition.</p>
   */
  Warning?: string;

  /**
   * <p>The Amazon SNS topic that you want to notify when Elastic Transcoder encounters an error condition.</p>
   */
  Error?: string;
}

export type _UnmarshalledNotifications = _Notifications;
