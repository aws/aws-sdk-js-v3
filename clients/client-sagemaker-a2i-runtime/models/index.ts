import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ContentClassifier {
  FREE_OF_ADULT_CONTENT = "FreeOfAdultContent",
  FREE_OF_PERSONALLY_IDENTIFIABLE_INFORMATION = "FreeOfPersonallyIdentifiableInformation"
}

export interface DeleteHumanLoopRequest {
  __type?: "DeleteHumanLoopRequest";
  /**
   * <p>The name of the human loop you want to delete.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace DeleteHumanLoopRequest {
  export function isa(o: any): o is DeleteHumanLoopRequest {
    return __isa(o, "DeleteHumanLoopRequest");
  }
}

export interface DeleteHumanLoopResponse {
  __type?: "DeleteHumanLoopResponse";
}

export namespace DeleteHumanLoopResponse {
  export function isa(o: any): o is DeleteHumanLoopResponse {
    return __isa(o, "DeleteHumanLoopResponse");
  }
}

export interface DescribeHumanLoopRequest {
  __type?: "DescribeHumanLoopRequest";
  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace DescribeHumanLoopRequest {
  export function isa(o: any): o is DescribeHumanLoopRequest {
    return __isa(o, "DescribeHumanLoopRequest");
  }
}

export interface DescribeHumanLoopResponse {
  __type?: "DescribeHumanLoopResponse";
  /**
   * <p>The timestamp when Amazon Augmented AI created the human loop.</p>
   */
  CreationTimestamp: Date | undefined;

  /**
   * <p>A failure code denoting a specific type of failure.</p>
   */
  FailureCode?: string;

  /**
   * <p>The reason why a human loop has failed. The failure reason is returned when the human loop status is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn: string | undefined;

  /**
   * <p>An object containing information about the human loop input.</p>
   */
  HumanLoopInput: HumanLoopInputContent | undefined;

  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName: string | undefined;

  /**
   * <p>An object containing information about the output of the human loop.</p>
   */
  HumanLoopOutput?: HumanLoopOutputContent;

  /**
   * <p>The status of the human loop. Valid values:</p>
   */
  HumanLoopStatus: HumanLoopStatus | string | undefined;
}

export namespace DescribeHumanLoopResponse {
  export function isa(o: any): o is DescribeHumanLoopResponse {
    return __isa(o, "DescribeHumanLoopResponse");
  }
}

/**
 * <p>Contains information about why a human loop was triggered. If at least one activation reason is evaluated to be true, the human loop is activated.</p>
 */
export interface HumanLoopActivationReason {
  __type?: "HumanLoopActivationReason";
  /**
   * <p>True if the specified conditions were matched to trigger the human loop.</p>
   */
  ConditionsMatched?: boolean;
}

export namespace HumanLoopActivationReason {
  export function isa(o: any): o is HumanLoopActivationReason {
    return __isa(o, "HumanLoopActivationReason");
  }
}

/**
 * <p>Information about the corresponding flow definition's human loop activation condition evaluation. Null if <code>StartHumanLoop</code> was invoked directly.</p>
 */
export interface HumanLoopActivationResults {
  __type?: "HumanLoopActivationResults";
  /**
   * <p>A copy of the human loop activation conditions of the flow definition, augmented with the results of evaluating those conditions on the input provided to the <code>StartHumanLoop</code> operation.</p>
   */
  HumanLoopActivationConditionsEvaluationResults?: string;

  /**
   * <p>An object containing information about why a human loop was triggered.</p>
   */
  HumanLoopActivationReason?: HumanLoopActivationReason;
}

export namespace HumanLoopActivationResults {
  export function isa(o: any): o is HumanLoopActivationResults {
    return __isa(o, "HumanLoopActivationResults");
  }
}

/**
 * <p>An object containing the input.</p>
 */
export interface HumanLoopInputContent {
  __type?: "HumanLoopInputContent";
  /**
   * <p>Serialized input from the human loop.</p>
   */
  InputContent: string | undefined;
}

export namespace HumanLoopInputContent {
  export function isa(o: any): o is HumanLoopInputContent {
    return __isa(o, "HumanLoopInputContent");
  }
}

/**
 * <p>Information about where the human output will be stored.</p>
 */
export interface HumanLoopOutputContent {
  __type?: "HumanLoopOutputContent";
  /**
   * <p>The location of the Amazon S3 object where Amazon Augmented AI stores your human loop output. The output is stored at the following location:
   *       <code>s3://S3OutputPath/HumanLoopName/CreationTime/output.json</code>.</p>
   */
  OutputS3Uri: string | undefined;
}

export namespace HumanLoopOutputContent {
  export function isa(o: any): o is HumanLoopOutputContent {
    return __isa(o, "HumanLoopOutputContent");
  }
}

export enum HumanLoopStatus {
  COMPLETED = "Completed",
  FAILED = "Failed",
  IN_PROGRESS = "InProgress",
  STOPPED = "Stopped",
  STOPPING = "Stopping"
}

/**
 * <p>Summary information about the human loop.</p>
 */
export interface HumanLoopSummary {
  __type?: "HumanLoopSummary";
  /**
   * <p>When Amazon Augmented AI created the human loop.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The reason why the human loop failed. A failure reason is returned only when the status of the human loop is <code>Failed</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn?: string;

  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName?: string;

  /**
   * <p>The status of the human loop. Valid values:</p>
   */
  HumanLoopStatus?: HumanLoopStatus | string;
}

export namespace HumanLoopSummary {
  export function isa(o: any): o is HumanLoopSummary {
    return __isa(o, "HumanLoopSummary");
  }
}

/**
 * <p>Attributes of the data specified by the customer. Use these to describe the data to be labeled.</p>
 */
export interface HumanReviewDataAttributes {
  __type?: "HumanReviewDataAttributes";
  /**
   * <p>Declares that your content is free of personally identifiable information or adult content.
   *       Amazon SageMaker may restrict the Amazon Mechanical Turk workers that can view your task based on this information.</p>
   */
  ContentClassifiers: Array<ContentClassifier | string> | undefined;
}

export namespace HumanReviewDataAttributes {
  export function isa(o: any): o is HumanReviewDataAttributes {
    return __isa(o, "HumanReviewDataAttributes");
  }
}

/**
 * <p>Your request could not be processed.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

export interface ListHumanLoopsRequest {
  __type?: "ListHumanLoopsRequest";
  /**
   * <p>(Optional) The timestamp of the date when you want the human loops to begin. For example, <code>1551000000</code>.</p>
   */
  CreationTimeAfter?: Date;

  /**
   * <p>(Optional) The timestamp of the date before which you want the human loops to begin. For example, <code>1550000000</code>.</p>
   */
  CreationTimeBefore?: Date;

  /**
   * <p>The total number of items to return. If the total number of available items is more than the value specified in <code>MaxResults</code>, then a <code>NextToken</code> will be provided in the output that you can use to resume pagination.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional value that specifies whether you want the results sorted in <code>Ascending</code> or <code>Descending</code> order.</p>
   */
  SortOrder?: SortOrder | string;
}

export namespace ListHumanLoopsRequest {
  export function isa(o: any): o is ListHumanLoopsRequest {
    return __isa(o, "ListHumanLoopsRequest");
  }
}

export interface ListHumanLoopsResponse {
  __type?: "ListHumanLoopsResponse";
  /**
   * <p>An array of objects containing information about the human loops.</p>
   */
  HumanLoopSummaries: Array<HumanLoopSummary> | undefined;

  /**
   * <p>A token to resume pagination.</p>
   */
  NextToken?: string;
}

export namespace ListHumanLoopsResponse {
  export function isa(o: any): o is ListHumanLoopsResponse {
    return __isa(o, "ListHumanLoopsResponse");
  }
}

/**
 * <p>We were unable to find the requested resource.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>You have exceeded your service quota. To perform the requested action, remove some of the relevant resources, or request a service quota increase.</p>
 */
export interface ServiceQuotaExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  export function isa(o: any): o is ServiceQuotaExceededException {
    return __isa(o, "ServiceQuotaExceededException");
  }
}

export enum SortOrder {
  ASCENDING = "Ascending",
  DESCENDING = "Descending"
}

export interface StartHumanLoopRequest {
  __type?: "StartHumanLoopRequest";
  /**
   * <p>Attributes of the data specified by the customer.</p>
   */
  DataAttributes?: HumanReviewDataAttributes;

  /**
   * <p>The Amazon Resource Name (ARN) of the flow definition.</p>
   */
  FlowDefinitionArn: string | undefined;

  /**
   * <p>An object containing information about the human loop.</p>
   */
  HumanLoopInput: HumanLoopInputContent | undefined;

  /**
   * <p>The name of the human loop.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace StartHumanLoopRequest {
  export function isa(o: any): o is StartHumanLoopRequest {
    return __isa(o, "StartHumanLoopRequest");
  }
}

export interface StartHumanLoopResponse {
  __type?: "StartHumanLoopResponse";
  /**
   * <p>An object containing information about the human loop activation.</p>
   */
  HumanLoopActivationResults?: HumanLoopActivationResults;

  /**
   * <p>The Amazon Resource Name (ARN) of the human loop.</p>
   */
  HumanLoopArn?: string;
}

export namespace StartHumanLoopResponse {
  export function isa(o: any): o is StartHumanLoopResponse {
    return __isa(o, "StartHumanLoopResponse");
  }
}

export interface StopHumanLoopRequest {
  __type?: "StopHumanLoopRequest";
  /**
   * <p>The name of the human loop you want to stop.</p>
   */
  HumanLoopName: string | undefined;
}

export namespace StopHumanLoopRequest {
  export function isa(o: any): o is StopHumanLoopRequest {
    return __isa(o, "StopHumanLoopRequest");
  }
}

export interface StopHumanLoopResponse {
  __type?: "StopHumanLoopResponse";
}

export namespace StopHumanLoopResponse {
  export function isa(o: any): o is StopHumanLoopResponse {
    return __isa(o, "StopHumanLoopResponse");
  }
}

/**
 * <p>Your request has exceeded the allowed amount of requests.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

/**
 * <p>Your request was not valid. Check the syntax and try again.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  export function isa(o: any): o is ValidationException {
    return __isa(o, "ValidationException");
  }
}
