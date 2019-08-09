/**
 * <p>Describes an action to publish to an Amazon SNS topic.</p>
 */
export interface _SnsAction {
  /**
   * <p>The ARN of the SNS topic.</p>
   */
  targetArn: string;

  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string;

  /**
   * <p>(Optional) The message format of the message to publish. Accepted values are "JSON" and "RAW". The default value of the attribute is "RAW". SNS uses this setting to determine if the payload should be parsed and relevant platform-specific bits of the payload should be extracted. To read more about SNS message formats, see <a href="https://docs.aws.amazon.com/sns/latest/dg/json-formats.html">https://docs.aws.amazon.com/sns/latest/dg/json-formats.html</a> refer to their official documentation.</p>
   */
  messageFormat?: "RAW" | "JSON" | string;
}

export type _UnmarshalledSnsAction = _SnsAction;
