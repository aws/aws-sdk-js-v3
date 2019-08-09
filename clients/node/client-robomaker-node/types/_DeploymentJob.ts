import {
  _DeploymentApplicationConfig,
  _UnmarshalledDeploymentApplicationConfig
} from "./_DeploymentApplicationConfig";
import {
  _DeploymentConfig,
  _UnmarshalledDeploymentConfig
} from "./_DeploymentConfig";

/**
 * <p>Information about a deployment job.</p>
 */
export interface _DeploymentJob {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?:
    | "Pending"
    | "Preparing"
    | "InProgress"
    | "Failed"
    | "Succeeded"
    | "Canceled"
    | string;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?:
    | Array<_DeploymentApplicationConfig>
    | Iterable<_DeploymentApplicationConfig>;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: _DeploymentConfig;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The deployment job failure code.</p>
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

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date | string | number;
}

export interface _UnmarshalledDeploymentJob extends _DeploymentJob {
  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: Array<
    _UnmarshalledDeploymentApplicationConfig
  >;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: _UnmarshalledDeploymentConfig;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;
}
