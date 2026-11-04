// smithy-typescript generated code
import type { ContentClassifier, HumanLoopStatus, SortOrder } from "./enums";

/**
 * @public
 */
export interface DeleteHumanLoopRequest {
  /**
   * The name of the human loop that you want to delete.
   *
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
   * The name of the human loop that you want information about.
   *
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * Information about where the human output will be stored.
 *
 * @public
 */
export interface HumanLoopOutput {
  /**
   * The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.
   *
   * @public
   */
  OutputS3Uri: string | undefined;
}

/**
 * @public
 */
export interface DescribeHumanLoopResponse {
  /**
   * The creation time when Amazon Augmented AI created the human loop.
   *
   * @public
   */
  CreationTime: Date | undefined;

  /**
   * The reason why a human loop failed. The failure reason is returned when the status of the human loop is `Failed`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * A failure code that identifies the type of failure.
   *
   * Possible values: `ValidationError`, `Expired`, `InternalError`
   *
   * @public
   */
  FailureCode?: string | undefined;

  /**
   * The status of the human loop.
   *
   * @public
   */
  HumanLoopStatus: HumanLoopStatus | undefined;

  /**
   * The name of the human loop. The name must be lowercase, unique within the Region in your account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).
   *
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the human loop.
   *
   * @public
   */
  HumanLoopArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * An object that contains information about the output of the human loop.
   *
   * @public
   */
  HumanLoopOutput?: HumanLoopOutput | undefined;
}

/**
 * @public
 */
export interface ListHumanLoopsRequest {
  /**
   * (Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, `2020-02-24`.
   *
   * @public
   */
  CreationTimeAfter?: Date | undefined;

  /**
   * (Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, `2020-02-24`.
   *
   * @public
   */
  CreationTimeBefore?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of a flow definition.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * Optional. The order for displaying results. Valid values: `Ascending` and `Descending`.
   *
   * @public
   */
  SortOrder?: SortOrder | undefined;

  /**
   * A token to display the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The total number of items to return. If the total number of available items is more than the value specified in `MaxResults`, then a `NextToken` is returned in the output. You can use this token to display the next page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about the human loop.
 *
 * @public
 */
export interface HumanLoopSummary {
  /**
   * The name of the human loop.
   *
   * @public
   */
  HumanLoopName?: string | undefined;

  /**
   * The status of the human loop.
   *
   * @public
   */
  HumanLoopStatus?: HumanLoopStatus | undefined;

  /**
   * When Amazon Augmented AI created the human loop.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The reason why the human loop failed. A failure reason is returned when the status of the human loop is `Failed`.
   *
   * @public
   */
  FailureReason?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition used to configure the human loop.
   *
   * @public
   */
  FlowDefinitionArn?: string | undefined;
}

/**
 * @public
 */
export interface ListHumanLoopsResponse {
  /**
   * An array of objects that contain information about the human loops.
   *
   * @public
   */
  HumanLoopSummaries: HumanLoopSummary[] | undefined;

  /**
   * A token to display the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Attributes of the data specified by the customer. Use these to describe the data to be labeled.
 *
 * @public
 */
export interface HumanLoopDataAttributes {
  /**
   * Declares that your content is free of personally identifiable information or adult content.
   *
   * Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.
   *
   * @public
   */
  ContentClassifiers: ContentClassifier[] | undefined;
}

/**
 * An object containing the human loop input in JSON format.
 *
 * @public
 */
export interface HumanLoopInput {
  /**
   * Serialized input from the human loop. The input must be a string representation of a file in JSON format.
   *
   * @public
   */
  InputContent: string | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopRequest {
  /**
   * The name of the human loop.
   *
   * @public
   */
  HumanLoopName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the flow definition associated with this human loop.
   *
   * @public
   */
  FlowDefinitionArn: string | undefined;

  /**
   * An object that contains information about the human loop.
   *
   * @public
   */
  HumanLoopInput: HumanLoopInput | undefined;

  /**
   * Attributes of the specified data. Use `DataAttributes` to specify if your data is free of personally identifiable information and/or free of adult content.
   *
   * @public
   */
  DataAttributes?: HumanLoopDataAttributes | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopResponse {
  /**
   * The Amazon Resource Name (ARN) of the human loop.
   *
   * @public
   */
  HumanLoopArn?: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopRequest {
  /**
   * The name of the human loop that you want to stop.
   *
   * @public
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopResponse {}
