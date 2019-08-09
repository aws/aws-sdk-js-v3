/**
 * <p>Parameters to define a mitigation action that publishes findings to Amazon SNS. You can implement your own custom actions in response to the Amazon SNS messages.</p>
 */
export interface _PublishFindingToSnsParams {
  /**
   * <p>The ARN of the topic to which you want to publish the findings.</p>
   */
  topicArn: string;
}

export type _UnmarshalledPublishFindingToSnsParams = _PublishFindingToSnsParams;
