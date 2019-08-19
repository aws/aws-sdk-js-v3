/**
 * <p>Specifies the AWS Lambda function to use as a code hook for a campaign.</p>
 */
export interface _CampaignHook {
  /**
   * <p>The name or Amazon Resource Name (ARN) of the AWS Lambda function that Amazon Pinpoint invokes to send messages for a campaign.</p>
   */
  LambdaFunctionName?: string;

  /**
   * <p>Specifies which Lambda mode to use when invoking the AWS Lambda function.</p>
   */
  Mode?: "DELIVERY" | "FILTER" | string;

  /**
   *  <p>The web URL that Amazon Pinpoint calls to invoke the AWS Lambda function over HTTPS.</p>
   */
  WebUrl?: string;
}

export type _UnmarshalledCampaignHook = _CampaignHook;
