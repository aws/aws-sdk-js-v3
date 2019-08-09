/**
 * <p>Information required to publish the Amazon SNS message.</p>
 */
export interface _SNSTopicPublishAction {
  /**
   * <p>The ARN of the Amazon SNS target where the message is sent.</p>
   */
  targetArn: string;
}

export type _UnmarshalledSNSTopicPublishAction = _SNSTopicPublishAction;
