/**
 * <p>The Amazon Simple Notification Service topic to which Amazon Rekognition publishes the completion status of a video analysis operation. For more information, see <a>api-video</a>.</p>
 */
export interface _NotificationChannel {
  /**
   * <p>The Amazon SNS topic to which Amazon Rekognition to posts the completion status.</p>
   */
  SNSTopicArn: string;

  /**
   * <p>The ARN of an IAM role that gives Amazon Rekognition publishing permissions to the Amazon SNS topic. </p>
   */
  RoleArn: string;
}

export type _UnmarshalledNotificationChannel = _NotificationChannel;
