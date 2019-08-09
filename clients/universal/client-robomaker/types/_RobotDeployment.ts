import {
  _ProgressDetail,
  _UnmarshalledProgressDetail
} from "./_ProgressDetail";

/**
 * <p>Information about a robot deployment.</p>
 */
export interface _RobotDeployment {
  /**
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date | string | number;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date | string | number;

  /**
   * <p>The status of the robot deployment.</p>
   */
  status?:
    | "Available"
    | "Registered"
    | "PendingNewDeployment"
    | "Deploying"
    | "Failed"
    | "InSync"
    | "NoResponse"
    | string;

  /**
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: _ProgressDetail;

  /**
   * <p>A short description of the reason why the robot deployment failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The robot deployment failure code.</p>
   */
  failureCode?:
    | "ResourceNotFound"
    | "EnvironmentSetupError"
    | "EtagMismatch"
    | "FailureThresholdBreached"
    | "RobotDeploymentAborted"
    | "RobotDeploymentNoResponse"
    | "RobotAgentConnectionTimeout"
    | "GreengrassDeploymentFailed"
    | "MissingRobotArchitecture"
    | "MissingRobotApplicationArchitecture"
    | "MissingRobotDeploymentResource"
    | "GreengrassGroupVersionDoesNotExist"
    | "ExtractingBundleFailure"
    | "PreLaunchFileFailure"
    | "PostLaunchFileFailure"
    | "BadPermissionError"
    | "InternalServerError"
    | string;
}

export interface _UnmarshalledRobotDeployment extends _RobotDeployment {
  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date;

  /**
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: _UnmarshalledProgressDetail;
}
