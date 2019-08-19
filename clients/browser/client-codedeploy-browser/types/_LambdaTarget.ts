import {
  _LifecycleEvent,
  _UnmarshalledLifecycleEvent
} from "./_LifecycleEvent";
import {
  _LambdaFunctionInfo,
  _UnmarshalledLambdaFunctionInfo
} from "./_LambdaFunctionInfo";

/**
 * <p> Information about the target AWS Lambda function during an AWS Lambda deployment. </p>
 */
export interface _LambdaTarget {
  /**
   * <p> The unique ID of a deployment. </p>
   */
  deploymentId?: string;

  /**
   * <p> The unique ID of a deployment target that has a type of <code>lambdaTarget</code>. </p>
   */
  targetId?: string;

  /**
   * <p> The ARN of the target. </p>
   */
  targetArn?: string;

  /**
   * <p> The status an AWS Lambda deployment's target Lambda function. </p>
   */
  status?:
    | "Pending"
    | "InProgress"
    | "Succeeded"
    | "Failed"
    | "Skipped"
    | "Unknown"
    | "Ready"
    | string;

  /**
   * <p> The date and time when the target Lambda function was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p> The lifecycle events of the deployment to this target Lambda function. </p>
   */
  lifecycleEvents?: Array<_LifecycleEvent> | Iterable<_LifecycleEvent>;

  /**
   * <p> A <code>LambdaFunctionInfo</code> object that describes a target Lambda function. </p>
   */
  lambdaFunctionInfo?: _LambdaFunctionInfo;
}

export interface _UnmarshalledLambdaTarget extends _LambdaTarget {
  /**
   * <p> The date and time when the target Lambda function was updated by a deployment. </p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p> The lifecycle events of the deployment to this target Lambda function. </p>
   */
  lifecycleEvents?: Array<_UnmarshalledLifecycleEvent>;

  /**
   * <p> A <code>LambdaFunctionInfo</code> object that describes a target Lambda function. </p>
   */
  lambdaFunctionInfo?: _UnmarshalledLambdaFunctionInfo;
}
