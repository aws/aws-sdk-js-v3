import { _UnmarshalledDeploymentConfig } from "./_DeploymentConfig";
import { _UnmarshalledDeploymentApplicationConfig } from "./_DeploymentApplicationConfig";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * SyncDeploymentJobOutput shape
 */
export interface SyncDeploymentJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the synchronization job.</p>
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
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfig?: _UnmarshalledDeploymentConfig;

  /**
   * <p>Information about the deployment application configurations.</p>
   */
  deploymentApplicationConfigs?: Array<
    _UnmarshalledDeploymentApplicationConfig
  >;

  /**
   * <p>The failure reason if the job fails.</p>
   */
  failureReason?: string;

  /**
   * <p>The failure code if the job fails:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>RobotApplicationCrash</dt> <dd> <p>Robot application exited abnormally.</p> </dd> <dt>SimulationApplicationCrash</dt> <dd> <p> Simulation application exited abnormally.</p> </dd> <dt>BadPermissionsRobotApplication</dt> <dd> <p>Robot application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsSimulationApplication</dt> <dd> <p>Simulation application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsS3Output</dt> <dd> <p>Unable to publish outputs to customer-provided S3 bucket.</p> </dd> <dt>BadPermissionsCloudwatchLogs</dt> <dd> <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p> </dd> <dt>SubnetIpLimitExceeded</dt> <dd> <p>Subnet IP limit exceeded.</p> </dd> <dt>ENILimitExceeded</dt> <dd> <p>ENI limit exceeded.</p> </dd> <dt>BadPermissionsUserCredentials</dt> <dd> <p>Unable to use the Role provided.</p> </dd> <dt>InvalidBundleRobotApplication</dt> <dd> <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>InvalidBundleSimulationApplication</dt> <dd> <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>RobotApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for RobotApplication does not match value during version creation.</p> </dd> <dt>SimulationApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for SimulationApplication does not match value during version creation.</p> </dd> </dl>
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
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
