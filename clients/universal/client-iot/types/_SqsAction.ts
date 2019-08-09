/**
 * <p>Describes an action to publish data to an Amazon SQS queue.</p>
 */
export interface _SqsAction {
  /**
   * <p>The ARN of the IAM role that grants access.</p>
   */
  roleArn: string;

  /**
   * <p>The URL of the Amazon SQS queue.</p>
   */
  queueUrl: string;

  /**
   * <p>Specifies whether to use Base64 encoding.</p>
   */
  useBase64?: boolean;
}

export type _UnmarshalledSqsAction = _SqsAction;
