// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SageMakerA2IRuntimeServiceException as __BaseException } from "./SageMakerA2IRuntimeServiceException";

/**
 * @public
 */
export interface DeleteHumanLoopRequest {
  /**
   * @public
   * <p>The name of the human loop that you want to delete.</p>
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface DeleteHumanLoopResponse {}

/**
 * @public
 * <p>We couldn't process your request because of an issue with the server. Try again
 *       later.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>We couldn't find the requested resource. Check that your resources exists and were created
 *       in the same AWS Region as your request, and try your request again. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You exceeded
 *       the
 *       maximum number of requests.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The
 *       request isn't valid. Check the syntax and try again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeHumanLoopRequest {
  /**
   * @public
   * <p>The name of the human loop that you want information about.</p>
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 * <p>Information about where the human output will be stored.</p>
 */
export interface HumanLoopOutput {
  /**
   * @public
   * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output.</p>
   */
  OutputS3Uri: string | undefined;
}

/**
 * @public
 * @enum
 */
export const HumanLoopStatus = {
  COMPLETED: "Completed",
  FAILED: "Failed",
  IN_PROGRESS: "InProgress",
  STOPPED: "Stopped",
  STOPPING: "Stopping",
} as const;

/**
 * @public
 */
export type HumanLoopStatus = (typeof HumanLoopStatus)[keyof typeof HumanLoopStatus];

/**
 * @public
 */
export interface DescribeHumanLoopResponse {
  /**
   * @public
   * <p>The creation time when Amazon Augmented AI created the human loop.</p>
   */
  CreationTime: Date | undefined;

  /**
   * @public
   * <p>The reason why a human loop failed. The failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>A failure code that identifies the type of failure.</p>
   *          <p>Possible values: <code>ValidationError</code>, <code>Expired</code>,
   *         <code>InternalError</code>
   *          </p>
   */
  FailureCode?: string;

  /**
   * @public
   * <p>The status of the human loop. </p>
   */
  HumanLoopStatus: HumanLoopStatus | undefined;

  /**
   * @public
   * <p>The name of the human loop. The name must be lowercase, unique within the Region in your
   *       account, and can have up to 63 characters. Valid characters: a-z, 0-9, and - (hyphen).</p>
   */
  HumanLoopName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>An object that contains information about the output of the human loop.</p>
   */
  HumanLoopOutput?: HumanLoopOutput;
}

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "Ascending",
  DESCENDING: "Descending",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface ListHumanLoopsRequest {
  /**
   * @public
   * <p>(Optional) The timestamp of the date when you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * @public
   * <p>(Optional) The timestamp of the date before which you want the human loops to begin in ISO 8601 format. For example, <code>2020-02-24</code>.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>Optional. The order for displaying results. Valid values: <code>Ascending</code> and
   *         <code>Descending</code>.</p>
   */
  SortOrder?: SortOrder;

  /**
   * @public
   * <p>A token to display the next page of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The total number of items to return. If the total number of available items is more than
   *       the value specified in <code>MaxResults</code>, then a <code>NextToken</code> is returned in
   *       the output. You can use this token to display the next page of results. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Summary information about the human loop.</p>
 */
export interface HumanLoopSummary {
  /**
   * @public
   * <p>The name of the human loop.</p>
   */
  HumanLoopName?: string;

  /**
   * @public
   * <p>The status of the human loop. </p>
   */
  HumanLoopStatus?: HumanLoopStatus;

  /**
   * @public
   * <p>When Amazon Augmented AI created the human loop.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The reason why the human loop failed. A failure reason is returned when the status of the
   *       human loop is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition used to configure the human
   *       loop.</p>
   */
  FlowDefinitionArn?: string;
}

/**
 * @public
 */
export interface ListHumanLoopsResponse {
  /**
   * @public
   * <p>An array of objects that contain information about the human loops.</p>
   */
  HumanLoopSummaries: HumanLoopSummary[] | undefined;

  /**
   * @public
   * <p>A token to display the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Your request has the same name as another active human loop but has different input data. You cannot start two
 *     human loops with the same name and different input data.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>You exceeded your service quota. Service quotas, also referred to as limits, are the
 *       maximum number of service resources or operations for your AWS account. For a list of
 *       Amazon A2I service quotes, see <a href="https://docs.aws.amazon.com/general/latest/gr/a2i.html">Amazon Augmented AI Service Quotes</a>. Delete some resources or request an increase in your
 *       service quota. You can request a quota increase using Service Quotas or the AWS Support
 *       Center. To request an increase, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS Service Quotas</a> in the
 *         <i>AWS General Reference</i>.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ContentClassifier = {
  FREE_OF_ADULT_CONTENT: "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION: "FreeOfPersonallyIdentifiableInformation",
} as const;

/**
 * @public
 */
export type ContentClassifier = (typeof ContentClassifier)[keyof typeof ContentClassifier];

/**
 * @public
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 */
export interface HumanLoopDataAttributes {
  /**
   * @public
   * <p>Declares that your content is free of personally identifiable information or adult content.</p>
   *          <p>Amazon SageMaker can restrict the Amazon Mechanical Turk workers who can view your task based on this information.</p>
   */
  ContentClassifiers: ContentClassifier[] | undefined;
}

/**
 * @public
 * <p>An object containing the human loop input in JSON format.</p>
 */
export interface HumanLoopInput {
  /**
   * @public
   * <p>Serialized input from the human loop. The input must be a string representation of a file in JSON format.</p>
   */
  InputContent: string | undefined;
}

/**
 * @public
 */
export interface StartHumanLoopRequest {
  /**
   * @public
   * <p>The name of the human loop.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the flow definition associated with this human
   *       loop.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * @public
   * <p>An object that contains information about the human loop.</p>
   */
  HumanLoopInput: HumanLoopInput | undefined;

  /**
   * @public
   * <p>Attributes of the specified data. Use <code>DataAttributes</code> to specify if your data
   *       is free of personally identifiable information and/or free of adult content.</p>
   */
  DataAttributes?: HumanLoopDataAttributes;
}

/**
 * @public
 */
export interface StartHumanLoopResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn?: string;
}

/**
 * @public
 */
export interface StopHumanLoopRequest {
  /**
   * @public
   * <p>The name of the human loop that you want to stop.</p>
   */
  HumanLoopName: string | undefined;
}

/**
 * @public
 */
export interface StopHumanLoopResponse {}
