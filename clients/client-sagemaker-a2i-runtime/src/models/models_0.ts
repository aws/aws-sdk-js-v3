// smithy-typescript generated code
import { ContentClassifier, HumanLoopStatus, SortOrder } from "./enums";

/**
 * @public
 */
export interface DeleteHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want to delete.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanLoopResponse {}

/**
 * @public
 */
export interface DescribeHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want information about.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * <p>Information about where the human output will be stored.</p>
 * @public
 */
export interface HumanLoopOutput {
  /**
   * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.</p>
   * @public
   */
  OutputS3Uri: string | undefined;
}

/**
 * @public
 */
export interface DescribeHumanLoopResponse {
  /**
   * <p>The creation time when Amazon Augmented AI created the human loop.</p>
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * <p>The reason why a human loop failed. The failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>A failure code that identifies the type of failure.</p>
   *          <p>Possible values: <code>ValidationError</code>, <code>Expired</code>,
   *         <code>InternalError</code>
   *          </p>
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * <p>The status of the human loop. </p>
   * @public
   */
  HumanLoopStatus: HumanLoopStatus | undefined;

  /**
   * <p>The name of the human loop. The name must be lowercase, unique within the Region in your
   *       account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   * @public
   */
  HumanLoopArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object that contains information about the output of the human loop.</p>
   * @public
   */
  HumanLoopOutput?: HumanLoopOutput | undefined;
}

/**
 * @public
 */
export interface ListHumanLoopsRequest {
  /**
   * <p>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * <p>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a flow definition.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>Optional. The order for displaying results. Valid values: <code>Ascending</code> and
   *         <code>Descending</code>.</p>
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * <p>A token to display the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The total number of items to return. If the total number of available items is more than
   *       the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in
   *       the output. You can use this token to display the next page of results. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary information about the human loop.</p>
 * @public
 */
export interface HumanLoopSummary {
  /**
   * <p>The name of the human loop.</p>
   * @public
   */
  HumanLoopName?: string | undefined;

  /**
   * <p>The status of the human loop. </p>
   * @public
   */
  HumanLoopStatus?: HumanLoopStatus | undefined;

  /**
   * <p>When Amazon Augmented AI created the human loop.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The reason why the human loop failed. A failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition used to configure the human
   *       loop.</p>
   * @public
   */
  FlowDefinitionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListHumanLoopsResponse {
  /**
   * <p>An array of objects that contain information about the human loops.</p>
   * @public
   */
  HumanLoopSummaries: HumanLoopSummary[] | undefined;

  /**
   * <p>A token to display the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content.</p>
   *          <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>
   * @public
   */
  ContentClassifiers: ContentClassifier[] | undefined;
}

/**
 * <p>An object containing the human loop input in JSON format.</p>
 * @public
 */
export interface HumanLoopInput {
  /**
   * <p>Serialized input from the human loop. The input must be a string representation of a file in JSON format.</p>
   * @public
   */
  InputContent: string | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopRequest {
  /**
   * <p>The name of the human loop.</p>
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition associated with this human
   *       loop.</p>
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object that contains information about the human loop.</p>
   * @public
   */
  HumanLoopInput: HumanLoopInput | undefined;

  /**
   * <p>Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data
   *       is free of personally identifiable information and/or free of adult content.</p>
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   * @public
   */
  HumanLoopArn?: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopRequest {
  /**
   * <p>The name of the human loop that you want to stop.</p>
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopResponse {}
