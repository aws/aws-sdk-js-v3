import { _UnmarshalledOutputLocation } from "./_OutputLocation";
import { _UnmarshalledRobotApplicationConfig } from "./_RobotApplicationConfig";
import { _UnmarshalledSimulationApplicationConfig } from "./_SimulationApplicationConfig";
import { _UnmarshalledVPCConfigResponse } from "./_VPCConfigResponse";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateSimulationJobOutput shape
 */
export interface CreateSimulationJobOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?:
    | "Pending"
    | "Preparing"
    | "Running"
    | "Restarting"
    | "Completed"
    | "Failed"
    | "RunningFailed"
    | "Terminating"
    | "Terminated"
    | "Canceled"
    | string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>the failure behavior for the simulation job.</p>
   */
  failureBehavior?: "Fail" | "Continue" | string;

  /**
   * <p>The failure code of the simulation job if it failed:</p> <dl> <dt>InternalServiceError</dt> <dd> <p>Internal service error.</p> </dd> <dt>RobotApplicationCrash</dt> <dd> <p>Robot application exited abnormally.</p> </dd> <dt>SimulationApplicationCrash</dt> <dd> <p> Simulation application exited abnormally.</p> </dd> <dt>BadPermissionsRobotApplication</dt> <dd> <p>Robot application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsSimulationApplication</dt> <dd> <p>Simulation application bundle could not be downloaded.</p> </dd> <dt>BadPermissionsS3Output</dt> <dd> <p>Unable to publish outputs to customer-provided S3 bucket.</p> </dd> <dt>BadPermissionsCloudwatchLogs</dt> <dd> <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p> </dd> <dt>SubnetIpLimitExceeded</dt> <dd> <p>Subnet IP limit exceeded.</p> </dd> <dt>ENILimitExceeded</dt> <dd> <p>ENI limit exceeded.</p> </dd> <dt>BadPermissionsUserCredentials</dt> <dd> <p>Unable to use the Role provided.</p> </dd> <dt>InvalidBundleRobotApplication</dt> <dd> <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>InvalidBundleSimulationApplication</dt> <dd> <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p> </dd> <dt>RobotApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for RobotApplication does not match value during version creation.</p> </dd> <dt>SimulationApplicationVersionMismatchedEtag</dt> <dd> <p>Etag for SimulationApplication does not match value during version creation.</p> </dd> </dl>
   */
  failureCode?:
    | "InternalServiceError"
    | "RobotApplicationCrash"
    | "SimulationApplicationCrash"
    | "BadPermissionsRobotApplication"
    | "BadPermissionsSimulationApplication"
    | "BadPermissionsS3Output"
    | "BadPermissionsCloudwatchLogs"
    | "SubnetIpLimitExceeded"
    | "ENILimitExceeded"
    | "BadPermissionsUserCredentials"
    | "InvalidBundleRobotApplication"
    | "InvalidBundleSimulationApplication"
    | "RobotApplicationVersionMismatchedEtag"
    | "SimulationApplicationVersionMismatchedEtag"
    | "WrongRegionS3Output"
    | "WrongRegionRobotApplication"
    | "WrongRegionSimulationApplication"
    | string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>Simulation job output files location.</p>
   */
  outputLocation?: _UnmarshalledOutputLocation;

  /**
   * <p>The maximum simulation job duration in seconds. </p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The IAM role that allows the simulation job to call the AWS APIs that are specified in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>The robot application used by the simulation job.</p>
   */
  robotApplications?: Array<_UnmarshalledRobotApplicationConfig>;

  /**
   * <p>The simulation application used by the simulation job.</p>
   */
  simulationApplications?: Array<_UnmarshalledSimulationApplicationConfig>;

  /**
   * <p>The list of all tags added to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: _UnmarshalledVPCConfigResponse;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
