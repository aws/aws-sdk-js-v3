import { _UnmarshalledDeploymentApplicationConfig } from "./_DeploymentApplicationConfig";
import { _UnmarshalledDeploymentConfig } from "./_DeploymentConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDeploymentJobOutput shape
 */
export interface CreateDeploymentJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The target fleet for the deployment job.</p>
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
  deploymentApplicationConfigs?: Array<
    _UnmarshalledDeploymentApplicationConfig
  >;

  /**
   * <p>The failure reason of the deployment job if it failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The failure code of the simulation job if it failed:</p> <dl> <dt>BadPermissionError</dt> <dd> <p>AWS Greengrass requires a service-level role permission to access other services. The role must include the <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy$jsonEditor"> <code>AWSGreengrassResourceAccessRolePolicy</code> managed policy</a>. </p> </dd> <dt>ExtractingBundleFailure</dt> <dd> <p>The robot application could not be extracted from the bundle.</p> </dd> <dt>FailureThresholdBreached</dt> <dd> <p>The percentage of robots that could not be updated exceeded the percentage set for the deployment.</p> </dd> <dt>GreengrassDeploymentFailed</dt> <dd> <p>The robot application could not be deployed to the robot.</p> </dd> <dt>GreengrassGroupVersionDoesNotExist</dt> <dd> <p>The AWS Greengrass group or version associated with a robot is missing.</p> </dd> <dt>InternalServerError</dt> <dd> <p>An internal error has occurred. Retry your request, but if the problem persists, contact us with details.</p> </dd> <dt>MissingRobotApplicationArchitecture</dt> <dd> <p>The robot application does not have a source that matches the architecture of the robot.</p> </dd> <dt>MissingRobotDeploymentResource</dt> <dd> <p>One or more of the resources specified for the robot application are missing. For example, does the robot application have the correct launch package and launch file?</p> </dd> <dt>PostLaunchFileFailure</dt> <dd> <p>The post-launch script failed.</p> </dd> <dt>PreLaunchFileFailure</dt> <dd> <p>The pre-launch script failed.</p> </dd> <dt>ResourceNotFound</dt> <dd> <p>One or more deployment resources are missing. For example, do robot application source bundles still exist? </p> </dd> <dt>RobotDeploymentNoResponse</dt> <dd> <p>There is no response from the robot. It might not be powered on or connected to the internet.</p> </dd> </dl>
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
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: _UnmarshalledDeploymentConfig;

  /**
   * <p>The list of all tags added to the deployment job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
