/**
 * <p>The <a href="http://docs.aws.amazon.com/lambda/latest/dg/dlq.html">dead letter queue</a> for failed asynchronous invocations.</p>
 */
export interface _DeadLetterConfig {
    /**
     * <p>The Amazon Resource Name (ARN) of an Amazon SQS queue or Amazon SNS topic.</p>
     */
    TargetArn?: string;
}

export type _UnmarshalledDeadLetterConfig = _DeadLetterConfig;