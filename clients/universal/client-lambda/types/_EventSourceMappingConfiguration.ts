/**
 * <p>A mapping between an AWS resource and an AWS Lambda function. See <a>CreateEventSourceMapping</a> for details.</p>
 */
export interface _EventSourceMappingConfiguration {
  /**
   * <p>The identifier of the event source mapping.</p>
   */
  UUID?: string;

  /**
   * <p>The maximum number of items to retrieve in a single batch.</p>
   */
  BatchSize?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the event source.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The ARN of the Lambda function.</p>
   */
  FunctionArn?: string;

  /**
   * <p>The date that the event source mapping was last updated.</p>
   */
  LastModified?: Date | string | number;

  /**
   * <p>The result of the last AWS Lambda invocation of your Lambda function.</p>
   */
  LastProcessingResult?: string;

  /**
   * <p>The state of the event source mapping. It can be one of the following: <code>Creating</code>, <code>Enabling</code>, <code>Enabled</code>, <code>Disabling</code>, <code>Disabled</code>, <code>Updating</code>, or <code>Deleting</code>.</p>
   */
  State?: string;

  /**
   * <p>The cause of the last state change, either <code>User initiated</code> or <code>Lambda initiated</code>.</p>
   */
  StateTransitionReason?: string;
}

export interface _UnmarshalledEventSourceMappingConfiguration
  extends _EventSourceMappingConfiguration {
  /**
   * <p>The date that the event source mapping was last updated.</p>
   */
  LastModified?: Date;
}
