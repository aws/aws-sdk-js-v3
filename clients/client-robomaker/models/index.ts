import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum Architecture {
  ARM64 = "ARM64",
  ARMHF = "ARMHF",
  X86_64 = "X86_64"
}

export interface BatchDescribeSimulationJobRequest {
  __type?: "BatchDescribeSimulationJobRequest";
  /**
   * <p>A list of Amazon Resource Names (ARNs) of simulation jobs to describe.</p>
   */
  jobs: Array<string> | undefined;
}

export namespace BatchDescribeSimulationJobRequest {
  export function isa(o: any): o is BatchDescribeSimulationJobRequest {
    return __isa(o, "BatchDescribeSimulationJobRequest");
  }
}

export interface BatchDescribeSimulationJobResponse {
  __type?: "BatchDescribeSimulationJobResponse";
  /**
   * <p>A list of simulation jobs.</p>
   */
  jobs?: Array<SimulationJob>;

  /**
   * <p>A list of unprocessed simulation job Amazon Resource Names (ARNs).</p>
   */
  unprocessedJobs?: Array<string>;
}

export namespace BatchDescribeSimulationJobResponse {
  export function isa(o: any): o is BatchDescribeSimulationJobResponse {
    return __isa(o, "BatchDescribeSimulationJobResponse");
  }
}

export interface CancelDeploymentJobRequest {
  __type?: "CancelDeploymentJobRequest";
  /**
   * <p>The deployment job ARN to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelDeploymentJobRequest {
  export function isa(o: any): o is CancelDeploymentJobRequest {
    return __isa(o, "CancelDeploymentJobRequest");
  }
}

export interface CancelDeploymentJobResponse {
  __type?: "CancelDeploymentJobResponse";
}

export namespace CancelDeploymentJobResponse {
  export function isa(o: any): o is CancelDeploymentJobResponse {
    return __isa(o, "CancelDeploymentJobResponse");
  }
}

export interface CancelSimulationJobRequest {
  __type?: "CancelSimulationJobRequest";
  /**
   * <p>The simulation job ARN to cancel.</p>
   */
  job: string | undefined;
}

export namespace CancelSimulationJobRequest {
  export function isa(o: any): o is CancelSimulationJobRequest {
    return __isa(o, "CancelSimulationJobRequest");
  }
}

export interface CancelSimulationJobResponse {
  __type?: "CancelSimulationJobResponse";
}

export namespace CancelSimulationJobResponse {
  export function isa(o: any): o is CancelSimulationJobResponse {
    return __isa(o, "CancelSimulationJobResponse");
  }
}

/**
 * <p>The failure percentage threshold percentage was met.</p>
 */
export interface ConcurrentDeploymentException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentDeploymentException";
  $fault: "client";
  message?: string;
}

export namespace ConcurrentDeploymentException {
  export function isa(o: any): o is ConcurrentDeploymentException {
    return __isa(o, "ConcurrentDeploymentException");
  }
}

export interface CreateDeploymentJobRequest {
  __type?: "CreateDeploymentJobRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs: Array<DeploymentApplicationConfig> | undefined;

  /**
   * <p>The requested deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet to deploy.</p>
   */
  fleet: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the deployment job.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateDeploymentJobRequest {
  export function isa(o: any): o is CreateDeploymentJobRequest {
    return __isa(o, "CreateDeploymentJobRequest");
  }
}

export interface CreateDeploymentJobResponse {
  __type?: "CreateDeploymentJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>BadPermissionError</dt>
   *             <dd>
   *
   *                <p>AWS Greengrass requires a service-level role permission to access
   *                   other services. The role must include the
   *                   <a href="https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSGreengrassResourceAccessRolePolicy$jsonEditor">
   *                      <code>AWSGreengrassResourceAccessRolePolicy</code>
   *                      managed policy</a>.
   *                </p>
   *             </dd>
   *             <dt>ExtractingBundleFailure</dt>
   *             <dd>
   *                <p>The robot application could not be extracted from the bundle.</p>
   *             </dd>
   *             <dt>FailureThresholdBreached</dt>
   *             <dd>
   *                <p>The percentage of robots that could not be updated exceeded the percentage
   *                   set for the deployment.</p>
   *             </dd>
   *             <dt>GreengrassDeploymentFailed</dt>
   *             <dd>
   *                <p>The robot application could not be deployed to the robot.</p>
   *             </dd>
   *             <dt>GreengrassGroupVersionDoesNotExist</dt>
   *             <dd>
   *                <p>The AWS Greengrass group or version associated with a robot is missing.</p>
   *             </dd>
   *             <dt>InternalServerError</dt>
   *             <dd>
   *                <p>An internal error has occurred. Retry your request, but if the problem persists,
   *                   contact us with details.</p>
   *             </dd>
   *             <dt>MissingRobotApplicationArchitecture</dt>
   *             <dd>
   *                <p>The robot application does not have a source that matches the architecture of the robot.</p>
   *             </dd>
   *             <dt>MissingRobotDeploymentResource</dt>
   *             <dd>
   *                <p>One or more of the resources specified for the robot application are missing. For
   *                example, does the robot application have the correct launch package and launch file?</p>
   *             </dd>
   *             <dt>PostLaunchFileFailure</dt>
   *             <dd>
   *                <p>The post-launch script failed.</p>
   *             </dd>
   *             <dt>PreLaunchFileFailure</dt>
   *             <dd>
   *                <p>The pre-launch script failed.</p>
   *             </dd>
   *             <dt>ResourceNotFound</dt>
   *             <dd>
   *                <p>One or more deployment resources are missing. For example, do robot application
   *                   source bundles still exist? </p>
   *             </dd>
   *             <dt>RobotDeploymentNoResponse</dt>
   *             <dd>
   *                <p>There is no response from the robot. It might not be powered on or
   *                connected to the internet.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The failure reason of the deployment job if it failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The target fleet for the deployment job.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The list of all tags added to the deployment job.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateDeploymentJobResponse {
  export function isa(o: any): o is CreateDeploymentJobResponse {
    return __isa(o, "CreateDeploymentJobResponse");
  }
}

export interface CreateFleetRequest {
  __type?: "CreateFleetRequest";
  /**
   * <p>The name of the fleet.</p>
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the fleet.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFleetRequest {
  export function isa(o: any): o is CreateFleetRequest {
    return __isa(o, "CreateFleetRequest");
  }
}

export interface CreateFleetResponse {
  __type?: "CreateFleetResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>The list of all tags added to the fleet.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateFleetResponse {
  export function isa(o: any): o is CreateFleetResponse {
    return __isa(o, "CreateFleetResponse");
  }
}

export interface CreateRobotApplicationRequest {
  __type?: "CreateRobotApplicationRequest";
  /**
   * <p>The name of the robot application.</p>
   */
  name: string | undefined;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: Array<SourceConfig> | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot application.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRobotApplicationRequest {
  export function isa(o: any): o is CreateRobotApplicationRequest {
    return __isa(o, "CreateRobotApplicationRequest");
  }
}

export interface CreateRobotApplicationResponse {
  __type?: "CreateRobotApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The list of all tags added to the robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace CreateRobotApplicationResponse {
  export function isa(o: any): o is CreateRobotApplicationResponse {
    return __isa(o, "CreateRobotApplicationResponse");
  }
}

export interface CreateRobotApplicationVersionRequest {
  __type?: "CreateRobotApplicationVersionRequest";
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the robot application. If you provide a value and it
   *         matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;
}

export namespace CreateRobotApplicationVersionRequest {
  export function isa(o: any): o is CreateRobotApplicationVersionRequest {
    return __isa(o, "CreateRobotApplicationVersionRequest");
  }
}

export interface CreateRobotApplicationVersionResponse {
  __type?: "CreateRobotApplicationVersionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace CreateRobotApplicationVersionResponse {
  export function isa(o: any): o is CreateRobotApplicationVersionResponse {
    return __isa(o, "CreateRobotApplicationVersionResponse");
  }
}

export interface CreateRobotRequest {
  __type?: "CreateRobotRequest";
  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture: Architecture | string | undefined;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId: string | undefined;

  /**
   * <p>The name for the robot.</p>
   */
  name: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the robot.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRobotRequest {
  export function isa(o: any): o is CreateRobotRequest {
    return __isa(o, "CreateRobotRequest");
  }
}

export interface CreateRobotResponse {
  __type?: "CreateRobotResponse";
  /**
   * <p>The target architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the Greengrass group associated with the robot.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The list of all tags added to the robot.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateRobotResponse {
  export function isa(o: any): o is CreateRobotResponse {
    return __isa(o, "CreateRobotResponse");
  }
}

export interface CreateSimulationApplicationRequest {
  __type?: "CreateSimulationApplicationRequest";
  /**
   * <p>The name of the simulation application.</p>
   */
  name: string | undefined;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The robot software suite of the simulation application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: Array<SourceConfig> | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation application.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateSimulationApplicationRequest {
  export function isa(o: any): o is CreateSimulationApplicationRequest {
    return __isa(o, "CreateSimulationApplicationRequest");
  }
}

export interface CreateSimulationApplicationResponse {
  __type?: "CreateSimulationApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The list of all tags added to the simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;
}

export namespace CreateSimulationApplicationResponse {
  export function isa(o: any): o is CreateSimulationApplicationResponse {
    return __isa(o, "CreateSimulationApplicationResponse");
  }
}

export interface CreateSimulationApplicationVersionRequest {
  __type?: "CreateSimulationApplicationVersionRequest";
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The current revision id for the simulation application. If you provide a value and it
   *         matches the latest revision ID, a new version will be created.</p>
   */
  currentRevisionId?: string;
}

export namespace CreateSimulationApplicationVersionRequest {
  export function isa(o: any): o is CreateSimulationApplicationVersionRequest {
    return __isa(o, "CreateSimulationApplicationVersionRequest");
  }
}

export interface CreateSimulationApplicationVersionResponse {
  __type?: "CreateSimulationApplicationVersionResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision ID of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;
}

export namespace CreateSimulationApplicationVersionResponse {
  export function isa(o: any): o is CreateSimulationApplicationVersionResponse {
    return __isa(o, "CreateSimulationApplicationVersionResponse");
  }
}

export interface CreateSimulationJobRequest {
  __type?: "CreateSimulationJobRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The data sources for the simulation job.</p>
   *          <note>
   *             <p>There is a limit of 100 files and a combined size of 25GB for all
   *             <code>DataSourceConfig</code> objects.
   *          </p>
   *          </note>
   */
  dataSources?: Array<DataSourceConfig>;

  /**
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Restart the simulation job in the same host instance.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The IAM role name that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job.
   *       </p>
   */
  iamRole: string | undefined;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds (up to 14 days or 1,209,600 seconds.
   *          When <code>maxJobDurationInSeconds</code> is reached, the simulation job will status will transition to
   *          <code>Completed</code>.</p>
   */
  maxJobDurationInSeconds: number | undefined;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The robot application to use in the simulation job.</p>
   */
  robotApplications?: Array<RobotApplicationConfig>;

  /**
   * <p>The simulation application to use in the simulation job.</p>
   */
  simulationApplications?: Array<SimulationApplicationConfig>;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security group IDs and subnet IDs.
   *          These must belong to the same VPC. You must provide at least one security group and one subnet ID. </p>
   */
  vpcConfig?: VPCConfig;
}

export namespace CreateSimulationJobRequest {
  export function isa(o: any): o is CreateSimulationJobRequest {
    return __isa(o, "CreateSimulationJobRequest");
  }
}

export interface CreateSimulationJobResponse {
  __type?: "CreateSimulationJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: Array<DataSource>;

  /**
   * <p>the failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The IAM role that allows the simulation job to call the AWS APIs that
   *          are specified in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds.
   *       </p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>Simulation job output files location.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>The robot application used by the simulation job.</p>
   */
  robotApplications?: Array<RobotApplicationConfig>;

  /**
   * <p>The simulation application used by the simulation job.</p>
   */
  simulationApplications?: Array<SimulationApplicationConfig>;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The list of all tags added to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>Information about the vpc configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;
}

export namespace CreateSimulationJobResponse {
  export function isa(o: any): o is CreateSimulationJobResponse {
    return __isa(o, "CreateSimulationJobResponse");
  }
}

/**
 * <p>Information about a data source.</p>
 */
export interface DataSource {
  __type?: "DataSource";
  /**
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys?: Array<S3KeyOutput>;
}

export namespace DataSource {
  export function isa(o: any): o is DataSource {
    return __isa(o, "DataSource");
  }
}

/**
 * <p>Information about a data source.</p>
 */
export interface DataSourceConfig {
  __type?: "DataSourceConfig";
  /**
   * <p>The name of the data source.</p>
   */
  name: string | undefined;

  /**
   * <p>The S3 bucket where the data files are located.</p>
   */
  s3Bucket: string | undefined;

  /**
   * <p>The list of S3 keys identifying the data source files.</p>
   */
  s3Keys: Array<string> | undefined;
}

export namespace DataSourceConfig {
  export function isa(o: any): o is DataSourceConfig {
    return __isa(o, "DataSourceConfig");
  }
}

export interface DeleteFleetRequest {
  __type?: "DeleteFleetRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export namespace DeleteFleetRequest {
  export function isa(o: any): o is DeleteFleetRequest {
    return __isa(o, "DeleteFleetRequest");
  }
}

export interface DeleteFleetResponse {
  __type?: "DeleteFleetResponse";
}

export namespace DeleteFleetResponse {
  export function isa(o: any): o is DeleteFleetResponse {
    return __isa(o, "DeleteFleetResponse");
  }
}

export interface DeleteRobotApplicationRequest {
  __type?: "DeleteRobotApplicationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to delete.</p>
   */
  applicationVersion?: string;
}

export namespace DeleteRobotApplicationRequest {
  export function isa(o: any): o is DeleteRobotApplicationRequest {
    return __isa(o, "DeleteRobotApplicationRequest");
  }
}

export interface DeleteRobotApplicationResponse {
  __type?: "DeleteRobotApplicationResponse";
}

export namespace DeleteRobotApplicationResponse {
  export function isa(o: any): o is DeleteRobotApplicationResponse {
    return __isa(o, "DeleteRobotApplicationResponse");
  }
}

export interface DeleteRobotRequest {
  __type?: "DeleteRobotRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export namespace DeleteRobotRequest {
  export function isa(o: any): o is DeleteRobotRequest {
    return __isa(o, "DeleteRobotRequest");
  }
}

export interface DeleteRobotResponse {
  __type?: "DeleteRobotResponse";
}

export namespace DeleteRobotResponse {
  export function isa(o: any): o is DeleteRobotResponse {
    return __isa(o, "DeleteRobotResponse");
  }
}

export interface DeleteSimulationApplicationRequest {
  __type?: "DeleteSimulationApplicationRequest";
  /**
   * <p>The application information for the simulation application to delete.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to delete.</p>
   */
  applicationVersion?: string;
}

export namespace DeleteSimulationApplicationRequest {
  export function isa(o: any): o is DeleteSimulationApplicationRequest {
    return __isa(o, "DeleteSimulationApplicationRequest");
  }
}

export interface DeleteSimulationApplicationResponse {
  __type?: "DeleteSimulationApplicationResponse";
}

export namespace DeleteSimulationApplicationResponse {
  export function isa(o: any): o is DeleteSimulationApplicationResponse {
    return __isa(o, "DeleteSimulationApplicationResponse");
  }
}

/**
 * <p>Information about a deployment application configuration.</p>
 */
export interface DeploymentApplicationConfig {
  __type?: "DeploymentApplicationConfig";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: string | undefined;

  /**
   * <p>The launch configuration.</p>
   */
  launchConfig: DeploymentLaunchConfig | undefined;
}

export namespace DeploymentApplicationConfig {
  export function isa(o: any): o is DeploymentApplicationConfig {
    return __isa(o, "DeploymentApplicationConfig");
  }
}

/**
 * <p>Information about a deployment configuration.</p>
 */
export interface DeploymentConfig {
  __type?: "DeploymentConfig";
  /**
   * <p>The percentage of robots receiving the deployment at the same time.</p>
   */
  concurrentDeploymentPercentage?: number;

  /**
   * <p>The download condition file.</p>
   */
  downloadConditionFile?: S3Object;

  /**
   * <p>The percentage of deployments that need to fail before stopping deployment.</p>
   */
  failureThresholdPercentage?: number;

  /**
   * <p>The amount of time, in seconds, to wait for deployment to a single robot to complete.
   *         Choose a time between 1 minute and 7 days. The default is 5 hours.</p>
   */
  robotDeploymentTimeoutInSeconds?: number;
}

export namespace DeploymentConfig {
  export function isa(o: any): o is DeploymentConfig {
    return __isa(o, "DeploymentConfig");
  }
}

/**
 * <p>Information about a deployment job.</p>
 */
export interface DeploymentJob {
  __type?: "DeploymentJob";
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;
}

export namespace DeploymentJob {
  export function isa(o: any): o is DeploymentJob {
    return __isa(o, "DeploymentJob");
  }
}

export enum DeploymentJobErrorCode {
  BadPermissionError = "BadPermissionError",
  DownloadConditionFailed = "DownloadConditionFailed",
  EnvironmentSetupError = "EnvironmentSetupError",
  EtagMismatch = "EtagMismatch",
  ExtractingBundleFailure = "ExtractingBundleFailure",
  FailureThresholdBreached = "FailureThresholdBreached",
  GreengrassDeploymentFailed = "GreengrassDeploymentFailed",
  GreengrassGroupVersionDoesNotExist = "GreengrassGroupVersionDoesNotExist",
  InternalServerError = "InternalServerError",
  MissingRobotApplicationArchitecture = "MissingRobotApplicationArchitecture",
  MissingRobotArchitecture = "MissingRobotArchitecture",
  MissingRobotDeploymentResource = "MissingRobotDeploymentResource",
  PostLaunchFileFailure = "PostLaunchFileFailure",
  PreLaunchFileFailure = "PreLaunchFileFailure",
  ResourceNotFound = "ResourceNotFound",
  RobotAgentConnectionTimeout = "RobotAgentConnectionTimeout",
  RobotDeploymentAborted = "RobotDeploymentAborted",
  RobotDeploymentNoResponse = "RobotDeploymentNoResponse"
}

/**
 * <p>Configuration information for a deployment launch.</p>
 */
export interface DeploymentLaunchConfig {
  __type?: "DeploymentLaunchConfig";
  /**
   * <p>An array of key/value pairs specifying environment variables for the robot application</p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The deployment post-launch file. This file will be executed after the launch file.</p>
   */
  postLaunchFile?: string;

  /**
   * <p>The deployment pre-launch file. This file will be executed prior to the launch file.</p>
   */
  preLaunchFile?: string;
}

export namespace DeploymentLaunchConfig {
  export function isa(o: any): o is DeploymentLaunchConfig {
    return __isa(o, "DeploymentLaunchConfig");
  }
}

export enum DeploymentStatus {
  Canceled = "Canceled",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  Preparing = "Preparing",
  Succeeded = "Succeeded"
}

export interface DeregisterRobotRequest {
  __type?: "DeregisterRobotRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export namespace DeregisterRobotRequest {
  export function isa(o: any): o is DeregisterRobotRequest {
    return __isa(o, "DeregisterRobotRequest");
  }
}

export interface DeregisterRobotResponse {
  __type?: "DeregisterRobotResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot?: string;
}

export namespace DeregisterRobotResponse {
  export function isa(o: any): o is DeregisterRobotResponse {
    return __isa(o, "DeregisterRobotResponse");
  }
}

export interface DescribeDeploymentJobRequest {
  __type?: "DescribeDeploymentJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  job: string | undefined;
}

export namespace DescribeDeploymentJobRequest {
  export function isa(o: any): o is DescribeDeploymentJobRequest {
    return __isa(o, "DescribeDeploymentJobRequest");
  }
}

export interface DescribeDeploymentJobResponse {
  __type?: "DescribeDeploymentJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment job was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The deployment application configuration.</p>
   */
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

  /**
   * <p>The deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The deployment job failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>A short description of the reason why the deployment job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>A list of robot deployment summaries.</p>
   */
  robotDeploymentSummary?: Array<RobotDeployment>;

  /**
   * <p>The status of the deployment job.</p>
   */
  status?: DeploymentStatus | string;

  /**
   * <p>The list of all tags added to the specified deployment job.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DescribeDeploymentJobResponse {
  export function isa(o: any): o is DescribeDeploymentJobResponse {
    return __isa(o, "DescribeDeploymentJobResponse");
  }
}

export interface DescribeFleetRequest {
  __type?: "DescribeFleetRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;
}

export namespace DescribeFleetRequest {
  export function isa(o: any): o is DescribeFleetRequest {
    return __isa(o, "DescribeFleetRequest");
  }
}

export interface DescribeFleetResponse {
  __type?: "DescribeFleetResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The status of the last deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;

  /**
   * <p>A list of robots.</p>
   */
  robots?: Array<Robot>;

  /**
   * <p>The list of all tags added to the specified fleet.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DescribeFleetResponse {
  export function isa(o: any): o is DescribeFleetResponse {
    return __isa(o, "DescribeFleetResponse");
  }
}

export interface DescribeRobotApplicationRequest {
  __type?: "DescribeRobotApplicationRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application to describe.</p>
   */
  applicationVersion?: string;
}

export namespace DescribeRobotApplicationRequest {
  export function isa(o: any): o is DescribeRobotApplicationRequest {
    return __isa(o, "DescribeRobotApplicationRequest");
  }
}

export interface DescribeRobotApplicationResponse {
  __type?: "DescribeRobotApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The list of all tags added to the specified robot application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace DescribeRobotApplicationResponse {
  export function isa(o: any): o is DescribeRobotApplicationResponse {
    return __isa(o, "DescribeRobotApplicationResponse");
  }
}

export interface DescribeRobotRequest {
  __type?: "DescribeRobotRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot to be described.</p>
   */
  robot: string | undefined;
}

export namespace DescribeRobotRequest {
  export function isa(o: any): o is DescribeRobotRequest {
    return __isa(o, "DescribeRobotRequest");
  }
}

export interface DescribeRobotResponse {
  __type?: "DescribeRobotResponse";
  /**
   * <p>The target architecture of the robot application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The Greengrass group id.</p>
   */
  greengrassGroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment job.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The status of the fleet.</p>
   */
  status?: RobotStatus | string;

  /**
   * <p>The list of all tags added to the specified robot.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DescribeRobotResponse {
  export function isa(o: any): o is DescribeRobotResponse {
    return __isa(o, "DescribeRobotResponse");
  }
}

export interface DescribeSimulationApplicationRequest {
  __type?: "DescribeSimulationApplicationRequest";
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application to describe.</p>
   */
  applicationVersion?: string;
}

export namespace DescribeSimulationApplicationRequest {
  export function isa(o: any): o is DescribeSimulationApplicationRequest {
    return __isa(o, "DescribeSimulationApplicationRequest");
  }
}

export interface DescribeSimulationApplicationResponse {
  __type?: "DescribeSimulationApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The list of all tags added to the specified simulation application.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;
}

export namespace DescribeSimulationApplicationResponse {
  export function isa(o: any): o is DescribeSimulationApplicationResponse {
    return __isa(o, "DescribeSimulationApplicationResponse");
  }
}

export interface DescribeSimulationJobRequest {
  __type?: "DescribeSimulationJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job to be described.</p>
   */
  job: string | undefined;
}

export namespace DescribeSimulationJobRequest {
  export function isa(o: any): o is DescribeSimulationJobRequest {
    return __isa(o, "DescribeSimulationJobRequest");
  }
}

export interface DescribeSimulationJobResponse {
  __type?: "DescribeSimulationJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: Array<DataSource>;

  /**
   * <p>The failure behavior for the simulation job.</p>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The failure code of the simulation job if it failed:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>Details about why the simulation job failed. For more information
   *          about troubleshooting, see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/troubleshooting.html">Troubleshooting</a>.</p>
   */
  failureReason?: string;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf.</p>
   */
  iamRole?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The network interface information for the simulation job.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: Array<RobotApplicationConfig>;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: Array<SimulationApplicationConfig>;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>The list of all tags added to the specified simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>The VPC configuration.</p>
   */
  vpcConfig?: VPCConfigResponse;
}

export namespace DescribeSimulationJobResponse {
  export function isa(o: any): o is DescribeSimulationJobResponse {
    return __isa(o, "DescribeSimulationJobResponse");
  }
}

export enum FailureBehavior {
  Continue = "Continue",
  Fail = "Fail"
}

/**
 * <p>Information about a filter.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter.</p>
   */
  name?: string;

  /**
   * <p>A list of values.</p>
   */
  values?: Array<string>;
}

export namespace Filter {
  export function isa(o: any): o is Filter {
    return __isa(o, "Filter");
  }
}

/**
 * <p>Information about a fleet.</p>
 */
export interface Fleet {
  __type?: "Fleet";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The status of the last fleet deployment.</p>
   */
  lastDeploymentStatus?: DeploymentStatus | string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The name of the fleet.</p>
   */
  name?: string;
}

export namespace Fleet {
  export function isa(o: any): o is Fleet {
    return __isa(o, "Fleet");
  }
}

/**
 * <p>The request uses the same client token as a previous, but non-identical request.
 *          Do not reuse a client token with different requests, unless the requests are identical. </p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  message?: string;
}

export namespace IdempotentParameterMismatchException {
  export function isa(o: any): o is IdempotentParameterMismatchException {
    return __isa(o, "IdempotentParameterMismatchException");
  }
}

/**
 * <p>AWS RoboMaker experienced a service issue. Try your call again.</p>
 */
export interface InternalServerException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  export function isa(o: any): o is InternalServerException {
    return __isa(o, "InternalServerException");
  }
}

/**
 * <p>A parameter specified in a request is not valid, is unsupported, or cannot be used.
 *          The returned message provides an explanation of the error value.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p>Information about a launch configuration.</p>
 */
export interface LaunchConfig {
  __type?: "LaunchConfig";
  /**
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: { [key: string]: string };

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string | undefined;

  /**
   * <p>The package name.</p>
   */
  packageName: string | undefined;

  /**
   * <p>The port forwarding configuration.</p>
   */
  portForwardingConfig?: PortForwardingConfig;
}

export namespace LaunchConfig {
  export function isa(o: any): o is LaunchConfig {
    return __isa(o, "LaunchConfig");
  }
}

/**
 * <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *          stream requests exceeds the maximum number allowed. </p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace LimitExceededException {
  export function isa(o: any): o is LimitExceededException {
    return __isa(o, "LimitExceededException");
  }
}

export interface ListDeploymentJobsRequest {
  __type?: "ListDeploymentJobsRequest";
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>InProgress</code> or the status <code>Pending</code>.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListDeploymentJobs</code>
   *          in paginated output. When this parameter is used, <code>ListDeploymentJobs</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListDeploymentJobs</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListDeploymentJobs</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListDeploymentJobs</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListDeploymentJobsRequest {
  export function isa(o: any): o is ListDeploymentJobsRequest {
    return __isa(o, "ListDeploymentJobsRequest");
  }
}

export interface ListDeploymentJobsResponse {
  __type?: "ListDeploymentJobsResponse";
  /**
   * <p>A list of deployment jobs that meet the criteria of the request.</p>
   */
  deploymentJobs?: Array<DeploymentJob>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request.
   *          When the results of a <code>ListDeploymentJobs</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListDeploymentJobsResponse {
  export function isa(o: any): o is ListDeploymentJobsResponse {
    return __isa(o, "ListDeploymentJobsResponse");
  }
}

export interface ListFleetsRequest {
  __type?: "ListFleetsRequest";
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListFleets</code>
   *          in paginated output. When this parameter is used, <code>ListFleets</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListFleets</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListFleets</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListFleets</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListFleetsRequest {
  export function isa(o: any): o is ListFleetsRequest {
    return __isa(o, "ListFleetsRequest");
  }
}

export interface ListFleetsResponse {
  __type?: "ListFleetsResponse";
  /**
   * <p>A list of fleet details meeting the request criteria.</p>
   */
  fleetDetails?: Array<Fleet>;

  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListDeploymentJobs</code> request.
   *          When the results of a <code>ListFleets</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;
}

export namespace ListFleetsResponse {
  export function isa(o: any): o is ListFleetsResponse {
    return __isa(o, "ListFleetsResponse");
  }
}

export interface ListRobotApplicationsRequest {
  __type?: "ListRobotApplicationsRequest";
  /**
   * <p>Optional filters to limit results.</p>
   *             <p>The filter name <code>name</code> is supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListRobotApplications</code>
   *          in paginated output. When this parameter is used, <code>ListRobotApplications</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRobotApplications</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListRobotApplications</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRobotApplications</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The version qualifier of the robot application.</p>
   */
  versionQualifier?: string;
}

export namespace ListRobotApplicationsRequest {
  export function isa(o: any): o is ListRobotApplicationsRequest {
    return __isa(o, "ListRobotApplicationsRequest");
  }
}

export interface ListRobotApplicationsResponse {
  __type?: "ListRobotApplicationsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRobotApplications</code> request.
   *          When the results of a <code>ListRobotApplications</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of robot application summaries that meet the criteria of the request.</p>
   */
  robotApplicationSummaries?: Array<RobotApplicationSummary>;
}

export namespace ListRobotApplicationsResponse {
  export function isa(o: any): o is ListRobotApplicationsResponse {
    return __isa(o, "ListRobotApplicationsResponse");
  }
}

export interface ListRobotsRequest {
  __type?: "ListRobotsRequest";
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>fleetName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>Registered</code> or the status <code>Available</code>.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListRobots</code>
   *          in paginated output. When this parameter is used, <code>ListRobots</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListRobots</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListRobots</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListRobots</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListRobotsRequest {
  export function isa(o: any): o is ListRobotsRequest {
    return __isa(o, "ListRobotsRequest");
  }
}

export interface ListRobotsResponse {
  __type?: "ListRobotsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListRobots</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of robots that meet the criteria of the request.</p>
   */
  robots?: Array<Robot>;
}

export namespace ListRobotsResponse {
  export function isa(o: any): o is ListRobotsResponse {
    return __isa(o, "ListRobotsResponse");
  }
}

export interface ListSimulationApplicationsRequest {
  __type?: "ListSimulationApplicationsRequest";
  /**
   * <p>Optional list of filters to limit results.</p>
   *          <p>The filter name <code>name</code> is supported.  When filtering, you must use the complete
   *         value of the filtered item. You can use up to three filters.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListSimulationApplications</code>
   *          in paginated output. When this parameter is used, <code>ListSimulationApplications</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListSimulationApplications</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationApplications</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListSimulationApplications</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;

  /**
   * <p>The version qualifier of the simulation application.</p>
   */
  versionQualifier?: string;
}

export namespace ListSimulationApplicationsRequest {
  export function isa(o: any): o is ListSimulationApplicationsRequest {
    return __isa(o, "ListSimulationApplicationsRequest");
  }
}

export interface ListSimulationApplicationsResponse {
  __type?: "ListSimulationApplicationsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListSimulationApplications</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of simulation application summaries that meet the criteria of the request.</p>
   */
  simulationApplicationSummaries?: Array<SimulationApplicationSummary>;
}

export namespace ListSimulationApplicationsResponse {
  export function isa(o: any): o is ListSimulationApplicationsResponse {
    return __isa(o, "ListSimulationApplicationsResponse");
  }
}

export interface ListSimulationJobsRequest {
  __type?: "ListSimulationJobsRequest";
  /**
   * <p>Optional filters to limit results.</p>
   *          <p>The filter names <code>status</code> and <code>simulationApplicationName</code>
   *         and <code>robotApplicationName</code> are supported.
   *          When filtering, you must use the complete value of the filtered item. You can use up to three filters,
   *          but they must be for the same named item. For example, if you are looking for items with the status
   *          <code>Preparing</code> or the status <code>Running</code>.</p>
   */
  filters?: Array<Filter>;

  /**
   * <p>The maximum number of deployment job results returned by <code>ListSimulationJobs</code>
   *          in paginated output. When this parameter is used, <code>ListSimulationJobs</code> only returns
   *          <code>maxResults</code> results in a single page along with a <code>nextToken</code> response
   *          element. The remaining results of the initial request
   *          can be seen by sending another <code>ListSimulationJobs</code> request with the returned
   *          <code>nextToken</code> value.
   *          This value can be between 1 and 100. If this parameter is not used, then <code>ListSimulationJobs</code>
   *          returns up to 100 results and a <code>nextToken</code> value if applicable. </p>
   */
  maxResults?: number;

  /**
   * <p>The <code>nextToken</code> value returned from a previous paginated
   *          <code>ListSimulationJobs</code> request where <code>maxResults</code> was used and the results
   *          exceeded the value of that parameter. Pagination continues from the end of the previous results
   *          that returned the <code>nextToken</code> value.
   *       </p>
   *          <note>
   *             <p>This token should be treated as an opaque identifier that is only used to retrieve
   *          the next items in a list and not for other programmatic purposes.</p>
   *          </note>
   */
  nextToken?: string;
}

export namespace ListSimulationJobsRequest {
  export function isa(o: any): o is ListSimulationJobsRequest {
    return __isa(o, "ListSimulationJobsRequest");
  }
}

export interface ListSimulationJobsResponse {
  __type?: "ListSimulationJobsResponse";
  /**
   * <p>The <code>nextToken</code> value to include in a future <code>ListSimulationJobs</code> request.
   *          When the results of a <code>ListRobot</code> request exceed <code>maxResults</code>, this
   *          value can be used to retrieve the next page of results. This value is <code>null</code> when there are no more
   *          results to return. </p>
   */
  nextToken?: string;

  /**
   * <p>A list of simulation job summaries that meet the criteria of the request.</p>
   */
  simulationJobSummaries: Array<SimulationJobSummary> | undefined;
}

export namespace ListSimulationJobsResponse {
  export function isa(o: any): o is ListSimulationJobsResponse {
    return __isa(o, "ListSimulationJobsResponse");
  }
}

export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>The AWS RoboMaker Amazon Resource Name (ARN) with tags to be listed.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>The list of all tags added to the specified resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

/**
 * <p>The logging configuration.</p>
 */
export interface LoggingConfig {
  __type?: "LoggingConfig";
  /**
   * <p>A boolean indicating whether to record all ROS topics.</p>
   */
  recordAllRosTopics: boolean | undefined;
}

export namespace LoggingConfig {
  export function isa(o: any): o is LoggingConfig {
    return __isa(o, "LoggingConfig");
  }
}

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The IPv4 address of the network interface within the subnet.</p>
   */
  privateIpAddress?: string;

  /**
   * <p>The IPv4 public address of the network interface.</p>
   */
  publicIpAddress?: string;
}

export namespace NetworkInterface {
  export function isa(o: any): o is NetworkInterface {
    return __isa(o, "NetworkInterface");
  }
}

/**
 * <p>The output location.</p>
 */
export interface OutputLocation {
  __type?: "OutputLocation";
  /**
   * <p>The S3 bucket for output.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The S3 folder in the <code>s3Bucket</code> where output files will be placed.</p>
   */
  s3Prefix?: string;
}

export namespace OutputLocation {
  export function isa(o: any): o is OutputLocation {
    return __isa(o, "OutputLocation");
  }
}

/**
 * <p>Configuration information for port forwarding.</p>
 */
export interface PortForwardingConfig {
  __type?: "PortForwardingConfig";
  /**
   * <p>The port mappings for the configuration.</p>
   */
  portMappings?: Array<PortMapping>;
}

export namespace PortForwardingConfig {
  export function isa(o: any): o is PortForwardingConfig {
    return __isa(o, "PortForwardingConfig");
  }
}

/**
 * <p>An object representing a port mapping.</p>
 */
export interface PortMapping {
  __type?: "PortMapping";
  /**
   * <p>The port number on the application.</p>
   */
  applicationPort: number | undefined;

  /**
   * <p>A Boolean indicating whether to enable this port mapping on public IP.</p>
   */
  enableOnPublicIp?: boolean;

  /**
   * <p>The port number on the simulation job instance to use as a remote connection point. </p>
   */
  jobPort: number | undefined;
}

export namespace PortMapping {
  export function isa(o: any): o is PortMapping {
    return __isa(o, "PortMapping");
  }
}

/**
 * <p>Information about the progress of a deployment job.</p>
 */
export interface ProgressDetail {
  __type?: "ProgressDetail";
  /**
   * <p>The current progress status.</p>
   *          <dl>
   *             <dt>Validating</dt>
   *             <dd>
   *                <p>Validating the deployment.</p>
   *             </dd>
   *             <dt>DownloadingExtracting</dt>
   *             <dd>
   *                <p>Downloading and extracting the bundle on the robot.</p>
   *             </dd>
   *             <dt>ExecutingPreLaunch</dt>
   *             <dd>
   *                <p>Executing pre-launch script(s) if provided.</p>
   *             </dd>
   *             <dt>Launching</dt>
   *             <dd>
   *                <p>Launching the robot application.</p>
   *             </dd>
   *             <dt>ExecutingPostLaunch</dt>
   *             <dd>
   *                <p>Executing post-launch script(s) if provided.</p>
   *             </dd>
   *             <dt>Finished</dt>
   *             <dd>
   *                <p>Deployment is complete.</p>
   *             </dd>
   *          </dl>
   */
  currentProgress?: RobotDeploymentStep | string;

  /**
   * <p>Estimated amount of time in seconds remaining in the step. This currently only applies
   *         to the <code>Downloading/Extracting</code> step of the deployment. It is empty for other steps.</p>
   */
  estimatedTimeRemainingSeconds?: number;

  /**
   * <p>Precentage of the step that is done. This currently only applies to the <code>Downloading/Extracting</code>
   *         step of the deployment. It is empty for other steps.</p>
   */
  percentDone?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the deployment job.</p>
   */
  targetResource?: string;
}

export namespace ProgressDetail {
  export function isa(o: any): o is ProgressDetail {
    return __isa(o, "ProgressDetail");
  }
}

export interface RegisterRobotRequest {
  __type?: "RegisterRobotRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  robot: string | undefined;
}

export namespace RegisterRobotRequest {
  export function isa(o: any): o is RegisterRobotRequest {
    return __isa(o, "RegisterRobotRequest");
  }
}

export interface RegisterRobotResponse {
  __type?: "RegisterRobotResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the fleet that the robot will join.</p>
   */
  fleet?: string;

  /**
   * <p>Information about the robot registration.</p>
   */
  robot?: string;
}

export namespace RegisterRobotResponse {
  export function isa(o: any): o is RegisterRobotResponse {
    return __isa(o, "RegisterRobotResponse");
  }
}

/**
 * <p>Information about a rendering engine.</p>
 */
export interface RenderingEngine {
  __type?: "RenderingEngine";
  /**
   * <p>The name of the rendering engine.</p>
   */
  name?: RenderingEngineType | string;

  /**
   * <p>The version of the rendering engine.</p>
   */
  version?: string;
}

export namespace RenderingEngine {
  export function isa(o: any): o is RenderingEngine {
    return __isa(o, "RenderingEngine");
  }
}

export enum RenderingEngineType {
  OGRE = "OGRE"
}

/**
 * <p>The specified resource already exists.</p>
 */
export interface ResourceAlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export function isa(o: any): o is ResourceAlreadyExistsException {
    return __isa(o, "ResourceAlreadyExistsException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

export interface RestartSimulationJobRequest {
  __type?: "RestartSimulationJobRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  job: string | undefined;
}

export namespace RestartSimulationJobRequest {
  export function isa(o: any): o is RestartSimulationJobRequest {
    return __isa(o, "RestartSimulationJobRequest");
  }
}

export interface RestartSimulationJobResponse {
  __type?: "RestartSimulationJobResponse";
}

export namespace RestartSimulationJobResponse {
  export function isa(o: any): o is RestartSimulationJobResponse {
    return __isa(o, "RestartSimulationJobResponse");
  }
}

/**
 * <p>Information about a robot.</p>
 */
export interface Robot {
  __type?: "Robot";
  /**
   * <p>The architecture of the robot.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleetArn?: string;

  /**
   * <p>The Greengrass group associated with the robot.</p>
   */
  greenGrassGroupId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the last deployment job.</p>
   */
  lastDeploymentJob?: string;

  /**
   * <p>The time of the last deployment.</p>
   */
  lastDeploymentTime?: Date;

  /**
   * <p>The name of the robot.</p>
   */
  name?: string;

  /**
   * <p>The status of the robot.</p>
   */
  status?: RobotStatus | string;
}

export namespace Robot {
  export function isa(o: any): o is Robot {
    return __isa(o, "Robot");
  }
}

/**
 * <p>Application configuration information for a robot.</p>
 */
export interface RobotApplicationConfig {
  __type?: "RobotApplicationConfig";
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the robot application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: LaunchConfig | undefined;
}

export namespace RobotApplicationConfig {
  export function isa(o: any): o is RobotApplicationConfig {
    return __isa(o, "RobotApplicationConfig");
  }
}

/**
 * <p>Summary information for a robot application.</p>
 */
export interface RobotApplicationSummary {
  __type?: "RobotApplicationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the robot.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>Information about a robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace RobotApplicationSummary {
  export function isa(o: any): o is RobotApplicationSummary {
    return __isa(o, "RobotApplicationSummary");
  }
}

/**
 * <p>Information about a robot deployment.</p>
 */
export interface RobotDeployment {
  __type?: "RobotDeployment";
  /**
   * <p>The robot deployment Amazon Resource Name (ARN).</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment finished.</p>
   */
  deploymentFinishTime?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the deployment was started.</p>
   */
  deploymentStartTime?: Date;

  /**
   * <p>The robot deployment failure code.</p>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>A short description of the reason why the robot deployment failed.</p>
   */
  failureReason?: string;

  /**
   * <p>Information about how the deployment is progressing.</p>
   */
  progressDetail?: ProgressDetail;

  /**
   * <p>The status of the robot deployment.</p>
   */
  status?: RobotStatus | string;
}

export namespace RobotDeployment {
  export function isa(o: any): o is RobotDeployment {
    return __isa(o, "RobotDeployment");
  }
}

export enum RobotDeploymentStep {
  DownloadingExtractingStep = "DownloadingExtracting",
  ExecutingDownloadCondition = "ExecutingDownloadCondition",
  FinishedStep = "Finished",
  LaunchingStep = "Launching",
  PostLaunchStep = "ExecutingPostLaunch",
  PreLaunchStep = "ExecutingPreLaunch",
  ValidatingStep = "Validating"
}

/**
 * <p>Information about a robot software suite.</p>
 */
export interface RobotSoftwareSuite {
  __type?: "RobotSoftwareSuite";
  /**
   * <p>The name of the robot software suite.</p>
   */
  name?: RobotSoftwareSuiteType | string;

  /**
   * <p>The version of the robot software suite.</p>
   */
  version?: RobotSoftwareSuiteVersionType | string;
}

export namespace RobotSoftwareSuite {
  export function isa(o: any): o is RobotSoftwareSuite {
    return __isa(o, "RobotSoftwareSuite");
  }
}

export enum RobotSoftwareSuiteType {
  ROS = "ROS",
  ROS2 = "ROS2"
}

export enum RobotSoftwareSuiteVersionType {
  Dashing = "Dashing",
  Kinetic = "Kinetic",
  Melodic = "Melodic"
}

export enum RobotStatus {
  Available = "Available",
  Deploying = "Deploying",
  Failed = "Failed",
  InSync = "InSync",
  NoResponse = "NoResponse",
  PendingNewDeployment = "PendingNewDeployment",
  Registered = "Registered"
}

/**
 * <p>Information about S3 keys.</p>
 */
export interface S3KeyOutput {
  __type?: "S3KeyOutput";
  /**
   * <p>The etag for the object.</p>
   */
  etag?: string;

  /**
   * <p>The S3 key.</p>
   */
  s3Key?: string;
}

export namespace S3KeyOutput {
  export function isa(o: any): o is S3KeyOutput {
    return __isa(o, "S3KeyOutput");
  }
}

/**
 * <p>Information about an S3 object.</p>
 */
export interface S3Object {
  __type?: "S3Object";
  /**
   * <p>The bucket containing the object.</p>
   */
  bucket: string | undefined;

  /**
   * <p>The etag of the object.</p>
   */
  etag?: string;

  /**
   * <p>The key of the object.</p>
   */
  key: string | undefined;
}

export namespace S3Object {
  export function isa(o: any): o is S3Object {
    return __isa(o, "S3Object");
  }
}

/**
 * <p>The request has failed due to a temporary failure of the server.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>Information about a simulation application configuration.</p>
 */
export interface SimulationApplicationConfig {
  __type?: "SimulationApplicationConfig";
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The version of the simulation application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: LaunchConfig | undefined;
}

export namespace SimulationApplicationConfig {
  export function isa(o: any): o is SimulationApplicationConfig {
    return __isa(o, "SimulationApplicationConfig");
  }
}

/**
 * <p>Summary information for a simulation application.</p>
 */
export interface SimulationApplicationSummary {
  __type?: "SimulationApplicationSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>Information about a robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>Information about a simulation software suite.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The version of the simulation application.</p>
   */
  version?: string;
}

export namespace SimulationApplicationSummary {
  export function isa(o: any): o is SimulationApplicationSummary {
    return __isa(o, "SimulationApplicationSummary");
  }
}

/**
 * <p>Information about a simulation job.</p>
 */
export interface SimulationJob {
  __type?: "SimulationJob";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>A unique identifier for this <code>SimulationJob</code> request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The data sources for the simulation job.</p>
   */
  dataSources?: Array<DataSource>;

  /**
   * <p>The failure behavior the simulation job.</p>
   *          <dl>
   *             <dt>Continue</dt>
   *             <dd>
   *                <p>Restart the simulation job in the same host instance.</p>
   *             </dd>
   *             <dt>Fail</dt>
   *             <dd>
   *                <p>Stop the simulation job and terminate the instance.</p>
   *             </dd>
   *          </dl>
   */
  failureBehavior?: FailureBehavior | string;

  /**
   * <p>The failure code of the simulation job if it failed.</p>
   */
  failureCode?: SimulationJobErrorCode | string;

  /**
   * <p>The reason why the simulation job failed.</p>
   */
  failureReason?: string;

  /**
   * <p>The IAM role that allows the simulation instance to call the AWS APIs that
   *          are specified in its associated policies on your behalf. This is how credentials are passed in to your
   *          simulation job.
   *       </p>
   */
  iamRole?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last started.</p>
   */
  lastStartedAt?: Date;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The logging configuration.</p>
   */
  loggingConfig?: LoggingConfig;

  /**
   * <p>The maximum simulation job duration in seconds. The value must be 8 days (691,200 seconds) or less.</p>
   */
  maxJobDurationInSeconds?: number;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>Information about a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>Location for output files generated by the simulation job.</p>
   */
  outputLocation?: OutputLocation;

  /**
   * <p>A list of robot applications.</p>
   */
  robotApplications?: Array<RobotApplicationConfig>;

  /**
   * <p>A list of simulation applications.</p>
   */
  simulationApplications?: Array<SimulationApplicationConfig>;

  /**
   * <p>The simulation job execution duration in milliseconds.</p>
   */
  simulationTimeMillis?: number;

  /**
   * <p>Status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the simulation job.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>VPC configuration information.</p>
   */
  vpcConfig?: VPCConfigResponse;
}

export namespace SimulationJob {
  export function isa(o: any): o is SimulationJob {
    return __isa(o, "SimulationJob");
  }
}

export enum SimulationJobErrorCode {
  BadPermissionsCloudwatchLogs = "BadPermissionsCloudwatchLogs",
  BadPermissionsRobotApplication = "BadPermissionsRobotApplication",
  BadPermissionsS3Object = "BadPermissionsS3Object",
  BadPermissionsS3Output = "BadPermissionsS3Output",
  BadPermissionsSimulationApplication = "BadPermissionsSimulationApplication",
  BadPermissionsUserCredentials = "BadPermissionsUserCredentials",
  ENILimitExceeded = "ENILimitExceeded",
  InternalServiceError = "InternalServiceError",
  InvalidBundleRobotApplication = "InvalidBundleRobotApplication",
  InvalidBundleSimulationApplication = "InvalidBundleSimulationApplication",
  InvalidInput = "InvalidInput",
  InvalidS3Resource = "InvalidS3Resource",
  MismatchedEtag = "MismatchedEtag",
  ResourceNotFound = "ResourceNotFound",
  RobotApplicationCrash = "RobotApplicationCrash",
  RobotApplicationVersionMismatchedEtag = "RobotApplicationVersionMismatchedEtag",
  SimulationApplicationCrash = "SimulationApplicationCrash",
  SimulationApplicationVersionMismatchedEtag = "SimulationApplicationVersionMismatchedEtag",
  SubnetIpLimitExceeded = "SubnetIpLimitExceeded",
  WrongRegionRobotApplication = "WrongRegionRobotApplication",
  WrongRegionS3Bucket = "WrongRegionS3Bucket",
  WrongRegionS3Output = "WrongRegionS3Output",
  WrongRegionSimulationApplication = "WrongRegionSimulationApplication"
}

export enum SimulationJobStatus {
  Canceled = "Canceled",
  Completed = "Completed",
  Failed = "Failed",
  Pending = "Pending",
  Preparing = "Preparing",
  Restarting = "Restarting",
  Running = "Running",
  RunningFailed = "RunningFailed",
  Terminated = "Terminated",
  Terminating = "Terminating"
}

/**
 * <p>Summary information for a simulation job.</p>
 */
export interface SimulationJobSummary {
  __type?: "SimulationJobSummary";
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The names of the data sources.</p>
   */
  dataSourceNames?: Array<string>;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: Array<string>;

  /**
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: Array<string>;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?: SimulationJobStatus | string;
}

export namespace SimulationJobSummary {
  export function isa(o: any): o is SimulationJobSummary {
    return __isa(o, "SimulationJobSummary");
  }
}

/**
 * <p>Information about a simulation software suite.</p>
 */
export interface SimulationSoftwareSuite {
  __type?: "SimulationSoftwareSuite";
  /**
   * <p>The name of the simulation software suite.</p>
   */
  name?: SimulationSoftwareSuiteType | string;

  /**
   * <p>The version of the simulation software suite.</p>
   */
  version?: string;
}

export namespace SimulationSoftwareSuite {
  export function isa(o: any): o is SimulationSoftwareSuite {
    return __isa(o, "SimulationSoftwareSuite");
  }
}

export enum SimulationSoftwareSuiteType {
  Gazebo = "Gazebo",
  RosbagPlay = "RosbagPlay"
}

/**
 * <p>Information about a source.</p>
 */
export interface Source {
  __type?: "Source";
  /**
   * <p>The taget processor architecture for the application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   */
  etag?: string;

  /**
   * <p>The s3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;
}

export namespace Source {
  export function isa(o: any): o is Source {
    return __isa(o, "Source");
  }
}

/**
 * <p>Information about a source configuration.</p>
 */
export interface SourceConfig {
  __type?: "SourceConfig";
  /**
   * <p>The target processor architecture for the application.</p>
   */
  architecture?: Architecture | string;

  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;
}

export namespace SourceConfig {
  export function isa(o: any): o is SourceConfig {
    return __isa(o, "SourceConfig");
  }
}

export interface SyncDeploymentJobRequest {
  __type?: "SyncDeploymentJobRequest";
  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request.</p>
   */
  clientRequestToken?: string;

  /**
   * <p>The target fleet for the synchronization.</p>
   */
  fleet: string | undefined;
}

export namespace SyncDeploymentJobRequest {
  export function isa(o: any): o is SyncDeploymentJobRequest {
    return __isa(o, "SyncDeploymentJobRequest");
  }
}

export interface SyncDeploymentJobResponse {
  __type?: "SyncDeploymentJobResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the synchronization request.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the fleet was created.</p>
   */
  createdAt?: Date;

  /**
   * <p>Information about the deployment application configurations.</p>
   */
  deploymentApplicationConfigs?: Array<DeploymentApplicationConfig>;

  /**
   * <p>Information about the deployment configuration.</p>
   */
  deploymentConfig?: DeploymentConfig;

  /**
   * <p>The failure code if the job fails:</p>
   *          <dl>
   *             <dt>InternalServiceError</dt>
   *             <dd>
   *                <p>Internal service error.</p>
   *             </dd>
   *             <dt>RobotApplicationCrash</dt>
   *             <dd>
   *                <p>Robot application exited abnormally.</p>
   *             </dd>
   *             <dt>SimulationApplicationCrash</dt>
   *             <dd>
   *                <p> Simulation application exited abnormally.</p>
   *             </dd>
   *             <dt>BadPermissionsRobotApplication</dt>
   *             <dd>
   *                <p>Robot application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation application bundle could not be downloaded.</p>
   *             </dd>
   *             <dt>BadPermissionsS3Output</dt>
   *             <dd>
   *                <p>Unable to publish outputs to customer-provided S3 bucket.</p>
   *             </dd>
   *             <dt>BadPermissionsCloudwatchLogs</dt>
   *             <dd>
   *                <p>Unable to publish logs to customer-provided CloudWatch Logs resource.</p>
   *             </dd>
   *             <dt>SubnetIpLimitExceeded</dt>
   *             <dd>
   *                <p>Subnet IP limit exceeded.</p>
   *             </dd>
   *             <dt>ENILimitExceeded</dt>
   *             <dd>
   *                <p>ENI limit exceeded.</p>
   *             </dd>
   *             <dt>BadPermissionsUserCredentials</dt>
   *             <dd>
   *                <p>Unable to use the Role provided.</p>
   *             </dd>
   *             <dt>InvalidBundleRobotApplication</dt>
   *             <dd>
   *                <p>Robot bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>InvalidBundleSimulationApplication</dt>
   *             <dd>
   *                <p>Simulation bundle cannot be extracted (invalid format, bundling error, or other issue).</p>
   *             </dd>
   *             <dt>RobotApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for RobotApplication does not match value during version creation.</p>
   *             </dd>
   *             <dt>SimulationApplicationVersionMismatchedEtag</dt>
   *             <dd>
   *                <p>Etag for SimulationApplication does not match value during version creation.</p>
   *             </dd>
   *          </dl>
   */
  failureCode?: DeploymentJobErrorCode | string;

  /**
   * <p>The failure reason if the job fails.</p>
   */
  failureReason?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the fleet.</p>
   */
  fleet?: string;

  /**
   * <p>The status of the synchronization job.</p>
   */
  status?: DeploymentStatus | string;
}

export namespace SyncDeploymentJobResponse {
  export function isa(o: any): o is SyncDeploymentJobResponse {
    return __isa(o, "SyncDeploymentJobResponse");
  }
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are tagging.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that are attached to the resource.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p>AWS RoboMaker is temporarily unable to process the request. Try your call again.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  message?: string;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the AWS RoboMaker resource you are removing tags.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A map that contains tag keys and tag values that will be unattached from the resource.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

export interface UpdateRobotApplicationRequest {
  __type?: "UpdateRobotApplicationRequest";
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources: Array<SourceConfig> | undefined;
}

export namespace UpdateRobotApplicationRequest {
  export function isa(o: any): o is UpdateRobotApplicationRequest {
    return __isa(o, "UpdateRobotApplicationRequest");
  }
}

export interface UpdateRobotApplicationResponse {
  __type?: "UpdateRobotApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the updated robot application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the robot application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the robot application.</p>
   */
  name?: string;

  /**
   * <p>The revision id of the robot application.</p>
   */
  revisionId?: string;

  /**
   * <p>The robot software suite used by the robot application.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The sources of the robot application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace UpdateRobotApplicationResponse {
  export function isa(o: any): o is UpdateRobotApplicationResponse {
    return __isa(o, "UpdateRobotApplicationResponse");
  }
}

export interface UpdateSimulationApplicationRequest {
  __type?: "UpdateSimulationApplicationRequest";
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string | undefined;

  /**
   * <p>The revision id for the robot application.</p>
   */
  currentRevisionId?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite: RobotSoftwareSuite | undefined;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite: SimulationSoftwareSuite | undefined;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources: Array<SourceConfig> | undefined;
}

export namespace UpdateSimulationApplicationRequest {
  export function isa(o: any): o is UpdateSimulationApplicationRequest {
    return __isa(o, "UpdateSimulationApplicationRequest");
  }
}

export interface UpdateSimulationApplicationResponse {
  __type?: "UpdateSimulationApplicationResponse";
  /**
   * <p>The Amazon Resource Name (ARN) of the updated simulation application.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation application was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>The name of the simulation application.</p>
   */
  name?: string;

  /**
   * <p>The rendering engine for the simulation application.</p>
   */
  renderingEngine?: RenderingEngine;

  /**
   * <p>The revision id of the simulation application.</p>
   */
  revisionId?: string;

  /**
   * <p>Information about the robot software suite.</p>
   */
  robotSoftwareSuite?: RobotSoftwareSuite;

  /**
   * <p>The simulation software suite used by the simulation application.</p>
   */
  simulationSoftwareSuite?: SimulationSoftwareSuite;

  /**
   * <p>The sources of the simulation application.</p>
   */
  sources?: Array<Source>;

  /**
   * <p>The version of the robot application.</p>
   */
  version?: string;
}

export namespace UpdateSimulationApplicationResponse {
  export function isa(o: any): o is UpdateSimulationApplicationResponse {
    return __isa(o, "UpdateSimulationApplicationResponse");
  }
}

/**
 * <p>If your simulation job accesses resources in a VPC, you provide this parameter identifying the list of security
 *         group IDs and subnet IDs. These must belong to the same VPC. You must provide at least one
 *         security group and two subnet IDs.</p>
 */
export interface VPCConfig {
  __type?: "VPCConfig";
  /**
   * <p>A boolean indicating whether to assign a public IP address.</p>
   */
  assignPublicIp?: boolean;

  /**
   * <p>A list of one or more security groups IDs in your VPC.</p>
   */
  securityGroups?: Array<string>;

  /**
   * <p>A list of one or more subnet IDs in your VPC.</p>
   */
  subnets: Array<string> | undefined;
}

export namespace VPCConfig {
  export function isa(o: any): o is VPCConfig {
    return __isa(o, "VPCConfig");
  }
}

/**
 * <p>VPC configuration associated with your simulation job.</p>
 */
export interface VPCConfigResponse {
  __type?: "VPCConfigResponse";
  /**
   * <p>A boolean indicating if a public IP was assigned.</p>
   */
  assignPublicIp?: boolean;

  /**
   * <p>A list of security group IDs associated with the simulation job.</p>
   */
  securityGroups?: Array<string>;

  /**
   * <p>A list of subnet IDs associated with the simulation job.</p>
   */
  subnets?: Array<string>;

  /**
   * <p>The VPC ID associated with your simulation job.</p>
   */
  vpcId?: string;
}

export namespace VPCConfigResponse {
  export function isa(o: any): o is VPCConfigResponse {
    return __isa(o, "VPCConfigResponse");
  }
}
