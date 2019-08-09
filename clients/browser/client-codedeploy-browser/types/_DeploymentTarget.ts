import {
  _InstanceTarget,
  _UnmarshalledInstanceTarget
} from "./_InstanceTarget";
import { _LambdaTarget, _UnmarshalledLambdaTarget } from "./_LambdaTarget";
import { _ECSTarget, _UnmarshalledECSTarget } from "./_ECSTarget";

/**
 * <p> Information about the deployment target. </p>
 */
export interface _DeploymentTarget {
  /**
   * <p> The deployment type that is specific to the deployment's compute platform. </p>
   */
  deploymentTargetType?:
    | "InstanceTarget"
    | "LambdaTarget"
    | "ECSTarget"
    | string;

  /**
   * <p> Information about the target for a deployment that uses the EC2/On-premises compute platform. </p>
   */
  instanceTarget?: _InstanceTarget;

  /**
   * <p> Information about the target for a deployment that uses the AWS Lambda compute platform. </p>
   */
  lambdaTarget?: _LambdaTarget;

  /**
   * <p> Information about the target for a deployment that uses the Amazon ECS compute platform. </p>
   */
  ecsTarget?: _ECSTarget;
}

export interface _UnmarshalledDeploymentTarget extends _DeploymentTarget {
  /**
   * <p> Information about the target for a deployment that uses the EC2/On-premises compute platform. </p>
   */
  instanceTarget?: _UnmarshalledInstanceTarget;

  /**
   * <p> Information about the target for a deployment that uses the AWS Lambda compute platform. </p>
   */
  lambdaTarget?: _UnmarshalledLambdaTarget;

  /**
   * <p> Information about the target for a deployment that uses the Amazon ECS compute platform. </p>
   */
  ecsTarget?: _UnmarshalledECSTarget;
}
