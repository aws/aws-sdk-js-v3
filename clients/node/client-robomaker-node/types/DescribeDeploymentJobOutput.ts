import { _UnmarshalledDeploymentConfig } from "./_DeploymentConfig";
import { _UnmarshalledDeploymentApplicationConfig } from "./_DeploymentApplicationConfig";
import { _UnmarshalledRobotDeployment } from "./_RobotDeployment";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeploymentJobOutput shape
 */
export interface DescribeDeploymentJobOutput
  extends __aws_sdk_types.MetadataBearer {
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
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: _UnmarshalledDeploymentConfig;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: Array<
    _UnmarshalledDeploymentApplicationConfig
  >;

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
  createdAt?: Date;

  /**
   * <p>A list of robot deployment summaries.</p>
   */
  robotDeploymentSummary?: Array<_UnmarshalledRobotDeployment>;

  /**
   * <p>The list of all tags added to the specified deployment job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
