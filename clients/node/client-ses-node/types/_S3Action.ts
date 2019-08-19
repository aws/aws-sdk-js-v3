/**
 * <p>When included in a receipt rule, this action saves the received message to an Amazon Simple Storage Service (Amazon S3) bucket and, optionally, publishes a notification to Amazon Simple Notification Service (Amazon SNS).</p> <p>To enable Amazon SES to write emails to your Amazon S3 bucket, use an AWS KMS key to encrypt your emails, or publish to an Amazon SNS topic of another account, Amazon SES must have permission to access those resources. For information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> <note> <p>When you save your emails to an Amazon S3 bucket, the maximum email size (including headers) is 30 MB. Emails larger than that will bounce.</p> </note> <p>For information about specifying Amazon S3 actions in receipt rules, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-action-s3.html">Amazon SES Developer Guide</a>.</p>
 */
export interface _S3Action {
  /**
   * <p>The ARN of the Amazon SNS topic to notify when the message is saved to the Amazon S3 bucket. An example of an Amazon SNS topic ARN is <code>arn:aws:sns:us-west-2:123456789012:MyTopic</code>. For more information about Amazon SNS topics, see the <a href="https://docs.aws.amazon.com/sns/latest/dg/CreateTopic.html">Amazon SNS Developer Guide</a>.</p>
   */
  TopicArn?: string;

  /**
   * <p>The name of the Amazon S3 bucket that incoming email will be saved to.</p>
   */
  BucketName: string;

  /**
   * <p>The key prefix of the Amazon S3 bucket. The key prefix is similar to a directory name that enables you to store similar data under the same directory in a bucket.</p>
   */
  ObjectKeyPrefix?: string;

  /**
   * <p>The customer master key that Amazon SES should use to encrypt your emails before saving them to the Amazon S3 bucket. You can use the default master key or a custom master key you created in AWS KMS as follows:</p> <ul> <li> <p>To use the default master key, provide an ARN in the form of <code>arn:aws:kms:REGION:ACCOUNT-ID-WITHOUT-HYPHENS:alias/aws/ses</code>. For example, if your AWS account ID is 123456789012 and you want to use the default master key in the US West (Oregon) region, the ARN of the default master key would be <code>arn:aws:kms:us-west-2:123456789012:alias/aws/ses</code>. If you use the default master key, you don't need to perform any extra steps to give Amazon SES permission to use the key.</p> </li> <li> <p>To use a custom master key you created in AWS KMS, provide the ARN of the master key and ensure that you add a statement to your key's policy to give Amazon SES permission to use it. For more information about giving permissions, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/receiving-email-permissions.html">Amazon SES Developer Guide</a>.</p> </li> </ul> <p>For more information about key policies, see the <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html">AWS KMS Developer Guide</a>. If you do not specify a master key, Amazon SES will not encrypt your emails.</p> <important> <p>Your mail is encrypted by Amazon SES using the Amazon S3 encryption client before the mail is submitted to Amazon S3 for storage. It is not encrypted using Amazon S3 server-side encryption. This means that you must use the Amazon S3 encryption client to decrypt the email after retrieving it from Amazon S3, as the service has no access to use your AWS KMS keys for decryption. This encryption client is currently available with the <a href="http://aws.amazon.com/sdk-for-java/">AWS SDK for Java</a> and <a href="http://aws.amazon.com/sdk-for-ruby/">AWS SDK for Ruby</a> only. For more information about client-side encryption using AWS KMS master keys, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UsingClientSideEncryption.html">Amazon S3 Developer Guide</a>.</p> </important>
   */
  KmsKeyArn?: string;
}

export type _UnmarshalledS3Action = _S3Action;
