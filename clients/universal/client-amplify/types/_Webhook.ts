/**
 * <p> Structure for webhook, which associates a webhook with an Amplify App. </p>
 */
export interface _Webhook {
  /**
   * <p> ARN for the webhook. </p>
   */
  webhookArn: string;

  /**
   * <p> Id of the webhook. </p>
   */
  webhookId: string;

  /**
   * <p> Url of the webhook. </p>
   */
  webhookUrl: string;

  /**
   * <p> Name for a branch, part of an Amplify App. </p>
   */
  branchName: string;

  /**
   * <p> Description for a webhook. </p>
   */
  description: string;

  /**
   * <p> Create date / time for a webhook. </p>
   */
  createTime: Date | string | number;

  /**
   * <p> Update date / time for a webhook. </p>
   */
  updateTime: Date | string | number;
}

export interface _UnmarshalledWebhook extends _Webhook {
  /**
   * <p> Create date / time for a webhook. </p>
   */
  createTime: Date;

  /**
   * <p> Update date / time for a webhook. </p>
   */
  updateTime: Date;
}
