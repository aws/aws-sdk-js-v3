import {
  _EventTriggerDefinition,
  _UnmarshalledEventTriggerDefinition
} from "./_EventTriggerDefinition";

/**
 * <p>Identifies </p>
 */
export interface _LambdaResource {
  /**
   * <p>An Amazon Resource Name (ARN) that represents an AWS Lambda function to be triggered by PUT object actions on the associated local Amazon S3 resource.</p>
   */
  LambdaArn?: string;

  /**
   * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
   */
  EventTriggers?:
    | Array<_EventTriggerDefinition>
    | Iterable<_EventTriggerDefinition>;
}

export interface _UnmarshalledLambdaResource extends _LambdaResource {
  /**
   * <p>The array of ARNs for <a>S3Resource</a> objects to trigger the <a>LambdaResource</a> objects associated with this job.</p>
   */
  EventTriggers?: Array<_UnmarshalledEventTriggerDefinition>;
}
