// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { ElasticBeanstalkServiceException as __BaseException } from "./ElasticBeanstalkServiceException";

/**
 * <p></p>
 */
export interface AbortEnvironmentUpdateMessage {
  /**
   * <p>This specifies the ID of the environment with the in-progress update that you want to
   *       cancel.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>This specifies the name of the environment with the in-progress update that you want to
   *       cancel.</p>
   */
  EnvironmentName?: string;
}

/**
 * <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 */
export class InsufficientPrivilegesException extends __BaseException {
  readonly name: "InsufficientPrivilegesException" = "InsufficientPrivilegesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InsufficientPrivilegesException, __BaseException>) {
    super({
      name: "InsufficientPrivilegesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InsufficientPrivilegesException.prototype);
  }
}

export enum ActionHistoryStatus {
  Completed = "Completed",
  Failed = "Failed",
  Unknown = "Unknown",
}

export enum ActionStatus {
  Pending = "Pending",
  Running = "Running",
  Scheduled = "Scheduled",
  Unknown = "Unknown",
}

export enum ActionType {
  InstanceRefresh = "InstanceRefresh",
  PlatformUpdate = "PlatformUpdate",
  Unknown = "Unknown",
}

/**
 * <p>A lifecycle rule that deletes application versions after the specified number of
 *       days.</p>
 */
export interface MaxAgeRule {
  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable
   *       it.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specify the number of days to retain an application versions.</p>
   */
  MaxAgeInDays?: number;

  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when
   *       Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;
}

/**
 * <p>A lifecycle rule that deletes the oldest application version when the maximum count is
 *       exceeded.</p>
 */
export interface MaxCountRule {
  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable
   *       it.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specify the maximum number of application versions to retain.</p>
   */
  MaxCount?: number;

  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when
   *       Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;
}

/**
 * <p>The application version lifecycle settings for an application. Defines the rules that
 *       Elastic Beanstalk applies to an application's versions in order to avoid hitting the
 *       per-region limit for application versions.</p>
 *          <p>When Elastic Beanstalk deletes an application version from its database, you can no
 *       longer deploy that version to an environment. The source bundle remains in S3 unless you
 *       configure the rule to delete it.</p>
 */
export interface ApplicationVersionLifecycleConfig {
  /**
   * <p>Specify a max count rule to restrict the number of application versions that are
   *       retained for an application.</p>
   */
  MaxCountRule?: MaxCountRule;

  /**
   * <p>Specify a max age rule to restrict the length of time that application versions are
   *       retained for an application.</p>
   */
  MaxAgeRule?: MaxAgeRule;
}

/**
 * <p>The resource lifecycle configuration for an application. Defines lifecycle settings for
 *       resources that belong to the application, and the service role that AWS Elastic Beanstalk assumes
 *       in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle
 *       settings for application versions.</p>
 */
export interface ApplicationResourceLifecycleConfig {
  /**
   * <p>The ARN of an IAM service role that Elastic Beanstalk has permission to
   *       assume.</p>
   *          <p>The <code>ServiceRole</code> property is required the first time that you provide a
   *         <code>VersionLifecycleConfig</code> for the application in one of the supporting calls
   *         (<code>CreateApplication</code> or <code>UpdateApplicationResourceLifecycle</code>). After
   *       you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the
   *       application, and you don't need to specify it again in subsequent
   *         <code>UpdateApplicationResourceLifecycle</code> calls. You can, however, specify it in
   *       subsequent calls to change the Service Role to another value.</p>
   */
  ServiceRole?: string;

  /**
   * <p>Defines lifecycle settings for application versions.</p>
   */
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}

/**
 * <p>Describes the properties of an application.</p>
 */
export interface ApplicationDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationArn?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>User-defined description of the application.</p>
   */
  Description?: string;

  /**
   * <p>The date when the application was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the application was last modified.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The names of the versions for this application.</p>
   */
  Versions?: string[];

  /**
   * <p>The names of the configuration templates associated with this application.</p>
   */
  ConfigurationTemplates?: string[];

  /**
   * <p>The lifecycle settings for the application.</p>
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}

/**
 * <p>Result message containing a single description of an application.</p>
 */
export interface ApplicationDescriptionMessage {
  /**
   * <p> The <a>ApplicationDescription</a> of the application. </p>
   */
  Application?: ApplicationDescription;
}

/**
 * <p>Result message containing a list of application descriptions.</p>
 */
export interface ApplicationDescriptionsMessage {
  /**
   * <p>This parameter contains a list of <a>ApplicationDescription</a>.</p>
   */
  Applications?: ApplicationDescription[];
}

/**
 * <p>Represents the average latency for the slowest X percent of requests over the last 10
 *       seconds.</p>
 */
export interface Latency {
  /**
   * <p>The average latency for the slowest 0.1 percent of requests over the last 10
   *       seconds.</p>
   */
  P999?: number;

  /**
   * <p>The average latency for the slowest 1 percent of requests over the last 10
   *       seconds.</p>
   */
  P99?: number;

  /**
   * <p>The average latency for the slowest 5 percent of requests over the last 10
   *       seconds.</p>
   */
  P95?: number;

  /**
   * <p>The average latency for the slowest 10 percent of requests over the last 10
   *       seconds.</p>
   */
  P90?: number;

  /**
   * <p>The average latency for the slowest 15 percent of requests over the last 10
   *       seconds.</p>
   */
  P85?: number;

  /**
   * <p>The average latency for the slowest 25 percent of requests over the last 10
   *       seconds.</p>
   */
  P75?: number;

  /**
   * <p>The average latency for the slowest 50 percent of requests over the last 10
   *       seconds.</p>
   */
  P50?: number;

  /**
   * <p>The average latency for the slowest 90 percent of requests over the last 10
   *       seconds.</p>
   */
  P10?: number;
}

/**
 * <p>Represents the percentage of requests over the last 10 seconds that resulted in each
 *       type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code
 *       Definitions</a>.</p>
 */
export interface StatusCodes {
  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 2xx (200, 201,
   *       etc.) status code.</p>
   */
  Status2xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 3xx (300, 301,
   *       etc.) status code.</p>
   */
  Status3xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 4xx (400, 401,
   *       etc.) status code.</p>
   */
  Status4xx?: number;

  /**
   * <p>The percentage of requests over the last 10 seconds that resulted in a 5xx (500, 501,
   *       etc.) status code.</p>
   */
  Status5xx?: number;
}

/**
 * <p>Application request metrics for an AWS Elastic Beanstalk environment.</p>
 */
export interface ApplicationMetrics {
  /**
   * <p>The amount of time that the metrics cover (usually 10 seconds). For example, you might
   *       have 5 requests (<code>request_count</code>) within the most recent time slice of 10 seconds
   *         (<code>duration</code>).</p>
   */
  Duration?: number;

  /**
   * <p>Average number of requests handled by the web server per second over the last 10
   *       seconds.</p>
   */
  RequestCount?: number;

  /**
   * <p>Represents the percentage of requests over the last 10 seconds that resulted in each
   *       type of status code response.</p>
   */
  StatusCodes?: StatusCodes;

  /**
   * <p>Represents the average latency for the slowest X percent of requests over the last 10
   *       seconds. Latencies are in seconds with one millisecond resolution.</p>
   */
  Latency?: Latency;
}

export interface ApplicationResourceLifecycleDescriptionMessage {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The lifecycle configuration.</p>
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}

export enum SourceRepository {
  CodeCommit = "CodeCommit",
  S3 = "S3",
}

export enum SourceType {
  Git = "Git",
  Zip = "Zip",
}

/**
 * <p>Location of the source code for an application version.</p>
 */
export interface SourceBuildInformation {
  /**
   * <p>The type of repository.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Git</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Zip</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SourceType: SourceType | string | undefined;

  /**
   * <p>Location where the repository is stored.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CodeCommit</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SourceRepository: SourceRepository | string | undefined;

  /**
   * <p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code>
   *          </p>
   *          <ul>
   *             <li>
   *                <p>For <code>CodeCommit</code>,
   * 	the format is the repository name and commit ID, separated by a forward slash.
   * 	For example,
   * 	<code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p>
   *             </li>
   *             <li>
   *                <p>For <code>S3</code>,
   * 	the format is the S3 bucket name and object key, separated by a forward slash.
   * 	For example,
   * 	<code>my-s3-bucket/Folders/my-source-file</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceLocation: string | undefined;
}

/**
 * <p>The bucket and key of an item stored in Amazon S3.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket where the data is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key where the data is located.</p>
   */
  S3Key?: string;
}

export enum ApplicationVersionStatus {
  Building = "Building",
  Failed = "Failed",
  Processed = "Processed",
  Processing = "Processing",
  Unprocessed = "Unprocessed",
}

/**
 * <p>Describes the properties of an application version.</p>
 */
export interface ApplicationVersionDescription {
  /**
   * <p>The Amazon Resource Name (ARN) of the application version.</p>
   */
  ApplicationVersionArn?: string;

  /**
   * <p>The name of the application to which the application version belongs.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The description of the application version.</p>
   */
  Description?: string;

  /**
   * <p>A unique identifier for the application version.</p>
   */
  VersionLabel?: string;

  /**
   * <p>If the version's source code was retrieved from AWS CodeCommit, the location of the
   *       source code for the application version.</p>
   */
  SourceBuildInformation?: SourceBuildInformation;

  /**
   * <p>Reference to the artifact from the AWS CodeBuild build.</p>
   */
  BuildArn?: string;

  /**
   * <p>The storage location of the application version's source bundle in Amazon S3.</p>
   */
  SourceBundle?: S3Location;

  /**
   * <p>The creation date of the application version.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The last modified date of the application version.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The processing status of the application version. Reflects the state of the application
   *       version during its creation. Many of the values are only applicable if you specified
   *         <code>True</code> for the <code>Process</code> parameter of the
   *         <code>CreateApplicationVersion</code> action. The following list describes the possible
   *       values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Unprocessed</code> – Application version wasn't pre-processed or validated.
   *           Elastic Beanstalk will validate configuration files during deployment of the application version to an
   *         environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Processing</code> – Elastic Beanstalk is currently processing the application version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Building</code> – Application version is currently undergoing an AWS CodeBuild build.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Processed</code> – Elastic Beanstalk was successfully pre-processed and validated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> – Either the AWS CodeBuild build failed or configuration files didn't
   *           pass validation. This application version isn't usable.</p>
   *             </li>
   *          </ul>
   */
  Status?: ApplicationVersionStatus | string;
}

/**
 * <p>Result message wrapping a single description of an application version.</p>
 */
export interface ApplicationVersionDescriptionMessage {
  /**
   * <p> The <a>ApplicationVersionDescription</a> of the application version.
   *     </p>
   */
  ApplicationVersion?: ApplicationVersionDescription;
}

/**
 * <p>Result message wrapping a list of application version descriptions.</p>
 */
export interface ApplicationVersionDescriptionsMessage {
  /**
   * <p>List of <code>ApplicationVersionDescription</code> objects sorted in order of
   *       creation.</p>
   */
  ApplicationVersions?: ApplicationVersionDescription[];

  /**
   * <p>In a paginated request, the token that you can pass in a subsequent request to get the
   *       next response page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Request to execute a scheduled managed action immediately.</p>
 */
export interface ApplyEnvironmentManagedActionRequest {
  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The action ID of the scheduled managed action to execute.</p>
   */
  ActionId: string | undefined;
}

/**
 * <p>The result message containing information about the managed action.</p>
 */
export interface ApplyEnvironmentManagedActionResult {
  /**
   * <p>The action ID of the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>The type of managed action.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>The status of the managed action.</p>
   */
  Status?: string;
}

/**
 * <p>A generic service exception has occurred.</p>
 */
export class ElasticBeanstalkServiceException extends __BaseException {
  readonly name: "ElasticBeanstalkServiceException" = "ElasticBeanstalkServiceException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ElasticBeanstalkServiceException, __BaseException>) {
    super({
      name: "ElasticBeanstalkServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ElasticBeanstalkServiceException.prototype);
  }
}

/**
 * <p>Cannot modify the managed action in its current state.</p>
 */
export class ManagedActionInvalidStateException extends __BaseException {
  readonly name: "ManagedActionInvalidStateException" = "ManagedActionInvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedActionInvalidStateException, __BaseException>) {
    super({
      name: "ManagedActionInvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedActionInvalidStateException.prototype);
  }
}

/**
 * <p>Request to add or change the operations role used by an environment.</p>
 */
export interface AssociateEnvironmentOperationsRoleMessage {
  /**
   * <p>The name of the environment to which to set the operations role.</p>
   */
  EnvironmentName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's
   *       operations role.</p>
   */
  OperationsRole: string | undefined;
}

/**
 * <p>Describes an Auto Scaling launch configuration.</p>
 */
export interface AutoScalingGroup {
  /**
   * <p>The name of the <code>AutoScalingGroup</code> . </p>
   */
  Name?: string;
}

/**
 * <p>Describes the solution stack.</p>
 */
export interface SolutionStackDescription {
  /**
   * <p>The name of the solution stack.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The permitted file types allowed for a solution stack.</p>
   */
  PermittedFileTypes?: string[];
}

/**
 * <p>Results message indicating whether a CNAME is available.</p>
 */
export interface CheckDNSAvailabilityMessage {
  /**
   * <p>The prefix used when this CNAME is reserved.</p>
   */
  CNAMEPrefix: string | undefined;
}

/**
 * <p>Indicates if the specified CNAME is available.</p>
 */
export interface CheckDNSAvailabilityResultMessage {
  /**
   * <p>Indicates if the specified CNAME is available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> : The CNAME is available.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> : The CNAME is not available.</p>
   *             </li>
   *          </ul>
   */
  Available?: boolean;

  /**
   * <p>The fully qualified CNAME to reserve when <a>CreateEnvironment</a> is called
   *       with the provided prefix.</p>
   */
  FullyQualifiedCNAME?: string;
}

/**
 * <p>Request to create or update a group of environments.</p>
 */
export interface ComposeEnvironmentsMessage {
  /**
   * <p>The name of the application to which the specified source bundles belong.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the group to which the target environments belong. Specify a group name
   *       only if the environment name defined in each target environment's manifest ends with a +
   *       (plus) character. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest
   *         (env.yaml)</a> for details.</p>
   */
  GroupName?: string;

  /**
   * <p>A list of version labels, specifying one or more application source bundles that belong
   *       to the target application. Each source bundle must include an environment manifest that
   *       specifies the name of the environment and the name of the solution stack to use, and
   *       optionally can specify environment links to create.</p>
   */
  VersionLabels?: string[];
}

/**
 * <p>A link to another environment, defined in the environment's manifest. Links provide
 *       connection information in system properties that can be used to connect to another environment
 *       in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest
 *         (env.yaml)</a> for details.</p>
 */
export interface EnvironmentLink {
  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;

  /**
   * <p>The name of the linked environment (the dependency).</p>
   */
  EnvironmentName?: string;
}

export enum EnvironmentHealth {
  Green = "Green",
  Grey = "Grey",
  Red = "Red",
  Yellow = "Yellow",
}

export enum EnvironmentHealthStatus {
  Degraded = "Degraded",
  Info = "Info",
  NoData = "NoData",
  Ok = "Ok",
  Pending = "Pending",
  Severe = "Severe",
  Suspended = "Suspended",
  Unknown = "Unknown",
  Warning = "Warning",
}

/**
 * <p>Describes the properties of a Listener for the LoadBalancer.</p>
 */
export interface Listener {
  /**
   * <p>The protocol that is used by the Listener.</p>
   */
  Protocol?: string;

  /**
   * <p>The port that is used by the Listener.</p>
   */
  Port?: number;
}

/**
 * <p>Describes the details of a LoadBalancer.</p>
 */
export interface LoadBalancerDescription {
  /**
   * <p>The name of the LoadBalancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>The domain name of the LoadBalancer.</p>
   */
  Domain?: string;

  /**
   * <p>A list of Listeners used by the LoadBalancer.</p>
   */
  Listeners?: Listener[];
}

/**
 * <p>Describes the AWS resources in use by this environment. This data is not live
 *       data.</p>
 */
export interface EnvironmentResourcesDescription {
  /**
   * <p>Describes the LoadBalancer.</p>
   */
  LoadBalancer?: LoadBalancerDescription;
}

export enum EnvironmentStatus {
  Aborting = "Aborting",
  Launching = "Launching",
  LinkingFrom = "LinkingFrom",
  LinkingTo = "LinkingTo",
  Ready = "Ready",
  Terminated = "Terminated",
  Terminating = "Terminating",
  Updating = "Updating",
}

/**
 * <p>Describes the properties of an environment tier</p>
 */
export interface EnvironmentTier {
  /**
   * <p>The name of this environment tier.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>For <i>Web server tier</i> – <code>WebServer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For <i>Worker tier</i> – <code>Worker</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Name?: string;

  /**
   * <p>The type of this environment tier.</p>
   *          <p>Valid values:</p>
   *          <ul>
   *             <li>
   *                <p>For <i>Web server tier</i> – <code>Standard</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>For <i>Worker tier</i> – <code>SQS/HTTP</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Type?: string;

  /**
   * <p>The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the
   *       latest compatible worker tier version.</p>
   *          <note>
   *             <p>This member is deprecated. Any specific version that you set may become out of date.
   *         We recommend leaving it unspecified.</p>
   *          </note>
   */
  Version?: string;
}

/**
 * <p>Describes the properties of an environment.</p>
 */
export interface EnvironmentDescription {
  /**
   * <p>The name of this environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ID of this environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the application associated with this environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The application version deployed in this environment.</p>
   */
  VersionLabel?: string;

  /**
   * <p> The name of the <code>SolutionStack</code> deployed with this environment. </p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the configuration template used to originally launch this
   *       environment.</p>
   */
  TemplateName?: string;

  /**
   * <p>Describes this environment.</p>
   */
  Description?: string;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the LoadBalancer. For
   *       single-instance environments, the IP address of the instance.</p>
   */
  EndpointURL?: string;

  /**
   * <p>The URL to the CNAME for this environment.</p>
   */
  CNAME?: string;

  /**
   * <p>The creation date for this environment.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The last modified date for this environment.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The current operational status of the environment:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Launching</code>: Environment is in the process of initial deployment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Updating</code>: Environment is in the process of updating its configuration
   *           settings or application version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Ready</code>: Environment is available to have an action performed on it, such as
   *           update or terminate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminating</code>: Environment is in the shut-down process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminated</code>: Environment is not running.</p>
   *             </li>
   *          </ul>
   */
  Status?: EnvironmentStatus | string;

  /**
   * <p>Indicates if there is an in-progress environment configuration update or application
   *       version deployment that you can cancel.</p>
   *          <p>
   *             <code>true:</code> There is an update in progress. </p>
   *          <p>
   *             <code>false:</code> There are no updates currently in progress. </p>
   */
  AbortableOperationInProgress?: boolean;

  /**
   * <p>Describes the health status of the environment. AWS Elastic Beanstalk indicates the
   *       failure levels for a running environment:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Red</code>: Indicates the environment is not responsive. Occurs when three or more
   *           consecutive failures occur for an environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Yellow</code>: Indicates that something is wrong. Occurs when two consecutive
   *           failures occur for an environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Green</code>: Indicates the environment is healthy and fully functional.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Grey</code>: Default health for a new environment. The environment is not fully
   *           launched and health checks have not started or health checks are suspended during an
   *             <code>UpdateEnvironment</code> or <code>RestartEnvironment</code> request.</p>
   *             </li>
   *          </ul>
   *          <p> Default: <code>Grey</code>
   *          </p>
   */
  Health?: EnvironmentHealth | string;

  /**
   * <p>Returns the health status of the application running in your environment. For more
   *       information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and
   *         Statuses</a>.</p>
   */
  HealthStatus?: EnvironmentHealthStatus | string;

  /**
   * <p>The description of the AWS resources used by this environment.</p>
   */
  Resources?: EnvironmentResourcesDescription;

  /**
   * <p>Describes the current tier of this environment.</p>
   */
  Tier?: EnvironmentTier;

  /**
   * <p>A list of links to other environments in the same group.</p>
   */
  EnvironmentLinks?: EnvironmentLink[];

  /**
   * <p>The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.</p>
   */
  EnvironmentArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment's operations role. For more information,
   *       see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   */
  OperationsRole?: string;
}

/**
 * <p>Result message containing a list of environment descriptions.</p>
 */
export interface EnvironmentDescriptionsMessage {
  /**
   * <p> Returns an <a>EnvironmentDescription</a> list. </p>
   */
  Environments?: EnvironmentDescription[];

  /**
   * <p>In a paginated request, the token that you can pass in a subsequent request to get the
   *       next response page.</p>
   */
  NextToken?: string;
}

/**
 * <p>The specified account has reached its limit of environments.</p>
 */
export class TooManyEnvironmentsException extends __BaseException {
  readonly name: "TooManyEnvironmentsException" = "TooManyEnvironmentsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyEnvironmentsException, __BaseException>) {
    super({
      name: "TooManyEnvironmentsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyEnvironmentsException.prototype);
  }
}

/**
 * <p>Describes a tag applied to a resource in an environment.</p>
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

/**
 * <p>Request to create an application.</p>
 */
export interface CreateApplicationMessage {
  /**
   * <p>The name of the application. Must be unique within your account.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Your description of the application.</p>
   */
  Description?: string;

  /**
   * <p>Specifies an application resource lifecycle configuration to prevent your application
   *       from accumulating too many versions.</p>
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

  /**
   * <p>Specifies the tags applied to the application.</p>
   *          <p>Elastic Beanstalk applies these tags only to the application. Environments that you create in the
   *       application don't inherit the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The specified account has reached its limit of applications.</p>
 */
export class TooManyApplicationsException extends __BaseException {
  readonly name: "TooManyApplicationsException" = "TooManyApplicationsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyApplicationsException, __BaseException>) {
    super({
      name: "TooManyApplicationsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyApplicationsException.prototype);
  }
}

/**
 * <p>AWS CodeBuild is not available in the specified region.</p>
 */
export class CodeBuildNotInServiceRegionException extends __BaseException {
  readonly name: "CodeBuildNotInServiceRegionException" = "CodeBuildNotInServiceRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CodeBuildNotInServiceRegionException, __BaseException>) {
    super({
      name: "CodeBuildNotInServiceRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CodeBuildNotInServiceRegionException.prototype);
  }
}

export enum ComputeType {
  BUILD_GENERAL1_LARGE = "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM = "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL = "BUILD_GENERAL1_SMALL",
}

/**
 * <p>Settings for an AWS CodeBuild build.</p>
 */
export interface BuildConfiguration {
  /**
   * <p>The name of the artifact of the CodeBuild build.
   *     If provided, Elastic Beanstalk stores the build artifact in the S3 location
   *     <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>-<i>artifact-name</i>.zip.
   *     If not provided, Elastic Beanstalk stores the build artifact in the S3 location
   *     <i>S3-bucket</i>/resources/<i>application-name</i>/codebuild/codebuild-<i>version-label</i>.zip.
   *     </p>
   */
  ArtifactName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>
   */
  CodeBuildServiceRole: string | undefined;

  /**
   * <p>Information about the compute resources the build project will use.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ComputeType?: ComputeType | string;

  /**
   * <p>The ID of the Docker image to use for this build project.</p>
   */
  Image: string | undefined;

  /**
   * <p>How long in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.</p>
   */
  TimeoutInMinutes?: number;
}

/**
 * <p></p>
 */
export interface CreateApplicationVersionMessage {
  /**
   * <p> The name of the application. If no application is found with this name, and
   *         <code>AutoCreateApplication</code> is <code>false</code>, returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>A label identifying this version.</p>
   *          <p>Constraint: Must be unique per application. If an application version already exists
   *       with this label for the specified application, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel: string | undefined;

  /**
   * <p>A description of this application version.</p>
   */
  Description?: string;

  /**
   * <p>Specify a commit in an AWS CodeCommit Git repository to use as the source code for the
   *       application version.</p>
   */
  SourceBuildInformation?: SourceBuildInformation;

  /**
   * <p>The Amazon S3 bucket and key that identify the location of the source bundle for this
   *       version.</p>
   *          <note>
   *             <p>The Amazon S3 bucket must be in the same region as the
   *       environment.</p>
   *          </note>
   *          <p>Specify a source bundle in S3 or a commit in an AWS CodeCommit repository (with
   *         <code>SourceBuildInformation</code>), but not both. If neither <code>SourceBundle</code> nor
   *         <code>SourceBuildInformation</code> are provided, Elastic Beanstalk uses a sample
   *       application.</p>
   */
  SourceBundle?: S3Location;

  /**
   * <p>Settings for an AWS CodeBuild build.</p>
   */
  BuildConfiguration?: BuildConfiguration;

  /**
   * <p>Set to <code>true</code> to create an application with the specified name if it doesn't
   *       already exist.</p>
   */
  AutoCreateApplication?: boolean;

  /**
   * <p>Pre-processes and validates the environment manifest (<code>env.yaml</code>) and
   *       configuration files (<code>*.config</code> files in the <code>.ebextensions</code> folder) in
   *       the source bundle. Validating configuration files can identify issues prior to deploying the
   *       application version to an environment.</p>
   *          <p>You must turn processing on for application versions that you create using AWS
   *       CodeBuild or AWS CodeCommit. For application versions built from a source bundle in Amazon S3,
   *       processing is optional.</p>
   *          <note>
   *             <p>The <code>Process</code> option validates Elastic Beanstalk configuration files. It
   *       doesn't validate your application's configuration files, like proxy server or Docker
   *       configuration.</p>
   *          </note>
   */
  Process?: boolean;

  /**
   * <p>Specifies the tags applied to the application version.</p>
   *          <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the
   *       application version don't inherit the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The specified S3 bucket does not belong to the S3 region in which the service is
 *       running. The following regions are supported:</p>
 *          <ul>
 *             <li>
 *                <p>IAD/us-east-1</p>
 *             </li>
 *             <li>
 *                <p>PDX/us-west-2</p>
 *             </li>
 *             <li>
 *                <p>DUB/eu-west-1</p>
 *             </li>
 *          </ul>
 */
export class S3LocationNotInServiceRegionException extends __BaseException {
  readonly name: "S3LocationNotInServiceRegionException" = "S3LocationNotInServiceRegionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3LocationNotInServiceRegionException, __BaseException>) {
    super({
      name: "S3LocationNotInServiceRegionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3LocationNotInServiceRegionException.prototype);
  }
}

/**
 * <p>The specified account has reached its limit of application versions.</p>
 */
export class TooManyApplicationVersionsException extends __BaseException {
  readonly name: "TooManyApplicationVersionsException" = "TooManyApplicationVersionsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyApplicationVersionsException, __BaseException>) {
    super({
      name: "TooManyApplicationVersionsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyApplicationVersionsException.prototype);
  }
}

export enum ConfigurationDeploymentStatus {
  deployed = "deployed",
  failed = "failed",
  pending = "pending",
}

/**
 * <p>A specification identifying an individual configuration option along with its current
 *       value. For a list of possible namespaces and option values, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the
 *       <i>AWS Elastic Beanstalk Developer Guide</i>. </p>
 */
export interface ConfigurationOptionSetting {
  /**
   * <p>A unique resource name for the option setting. Use it for a time–based scaling configuration option.</p>
   */
  ResourceName?: string;

  /**
   * <p>A unique namespace that identifies the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  OptionName?: string;

  /**
   * <p>The current value for the configuration option.</p>
   */
  Value?: string;
}

/**
 * <p>Describes the settings for a configuration set.</p>
 */
export interface ConfigurationSettingsDescription {
  /**
   * <p>The name of the solution stack this configuration set uses.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the application associated with this configuration set.</p>
   */
  ApplicationName?: string;

  /**
   * <p> If not <code>null</code>, the name of the configuration template for this
   *       configuration set. </p>
   */
  TemplateName?: string;

  /**
   * <p>Describes this configuration set.</p>
   */
  Description?: string;

  /**
   * <p> If not <code>null</code>, the name of the environment for this configuration set.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p> If this configuration set is associated with an environment, the
   *         <code>DeploymentStatus</code> parameter indicates the deployment status of this
   *       configuration set: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>null</code>: This configuration is not associated with a running
   *           environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>pending</code>: This is a draft configuration that is not deployed to the associated
   *           environment but is in the process of deploying.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>deployed</code>: This is the configuration that is currently deployed to the
   *           associated running environment.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>failed</code>: This is a draft configuration that failed to successfully
   *           deploy.</p>
   *             </li>
   *          </ul>
   */
  DeploymentStatus?: ConfigurationDeploymentStatus | string;

  /**
   * <p>The date (in UTC time) when this configuration set was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date (in UTC time) when this configuration set was last modified.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>A list of the configuration options and their values in this configuration
   *       set.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];
}

/**
 * <p>A specification for an environment configuration.</p>
 */
export interface SourceConfiguration {
  /**
   * <p>The name of the application associated with the configuration.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the configuration template.</p>
   */
  TemplateName?: string;
}

/**
 * <p>Request to create a configuration template.</p>
 */
export interface CreateConfigurationTemplateMessage {
  /**
   * <p>The name of the Elastic Beanstalk application to associate with this configuration
   *       template.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template.</p>
   *          <p>Constraint: This name must be unique per application.</p>
   */
  TemplateName: string | undefined;

  /**
   * <p>The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For
   *       example, <code>64bit Amazon Linux 2013.09 running Tomcat 7 Java 7</code>. A solution stack
   *       specifies the operating system, runtime, and application server for a configuration template.
   *       It also determines the set of configuration options as well as the possible and default
   *       values. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Supported Platforms</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   *          <p>You must specify <code>SolutionStackName</code> if you don't specify
   *         <code>PlatformArn</code>, <code>EnvironmentId</code>, or
   *       <code>SourceConfiguration</code>.</p>
   *          <p>Use the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html">
   *                <code>ListAvailableSolutionStacks</code>
   *             </a> API to obtain a list of available
   *       solution stacks.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom platform. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html"> Custom
   *         Platforms</a> in the <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   *          <note>
   *             <p>If you specify <code>PlatformArn</code>, then don't specify
   *           <code>SolutionStackName</code>.</p>
   *          </note>
   */
  PlatformArn?: string;

  /**
   * <p>An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified
   *       configuration template to create a new configuration.</p>
   *          <p>Values specified in <code>OptionSettings</code> override any values obtained from the
   *         <code>SourceConfiguration</code>.</p>
   *          <p>You must specify <code>SourceConfiguration</code> if you don't specify
   *         <code>PlatformArn</code>, <code>EnvironmentId</code>, or
   *       <code>SolutionStackName</code>.</p>
   *          <p>Constraint: If both solution stack name and source configuration are specified, the
   *       solution stack of the source configuration template must match the specified solution stack
   *       name.</p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * <p>The ID of an environment whose settings you want to use to create the configuration
   *       template. You must specify <code>EnvironmentId</code> if you don't specify
   *         <code>PlatformArn</code>, <code>SolutionStackName</code>, or
   *         <code>SourceConfiguration</code>.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>An optional description for this configuration.</p>
   */
  Description?: string;

  /**
   * <p>Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these
   *       values override the values obtained from the solution stack or the source configuration
   *       template. For a complete list of Elastic Beanstalk configuration options, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>Specifies the tags applied to the configuration template.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 */
export class TooManyBucketsException extends __BaseException {
  readonly name: "TooManyBucketsException" = "TooManyBucketsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyBucketsException, __BaseException>) {
    super({
      name: "TooManyBucketsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyBucketsException.prototype);
  }
}

/**
 * <p>The specified account has reached its limit of configuration templates.</p>
 */
export class TooManyConfigurationTemplatesException extends __BaseException {
  readonly name: "TooManyConfigurationTemplatesException" = "TooManyConfigurationTemplatesException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyConfigurationTemplatesException, __BaseException>) {
    super({
      name: "TooManyConfigurationTemplatesException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyConfigurationTemplatesException.prototype);
  }
}

/**
 * <p>A specification identifying an individual configuration option.</p>
 */
export interface OptionSpecification {
  /**
   * <p>A unique resource name for a time-based scaling configuration option.</p>
   */
  ResourceName?: string;

  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  OptionName?: string;
}

/**
 * <p></p>
 */
export interface CreateEnvironmentMessage {
  /**
   * <p>The name of the application that is associated with this environment.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>A unique name for the environment.</p>
   *          <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only
   *       letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique
   *       within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   *          <p>If you don't specify the <code>CNAMEPrefix</code> parameter, the environment name becomes part of
   *       the CNAME, and therefore part of the visible URL for your application.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the group to which the target environment belongs. Specify a group name
   *       only if the environment's name is specified in an environment manifest and not with the
   *       environment name parameter. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest
   *         (env.yaml)</a> for details.</p>
   */
  GroupName?: string;

  /**
   * <p>Your description for this environment.</p>
   */
  Description?: string;

  /**
   * <p>If specified, the environment attempts to use this value as the prefix for the CNAME in
   *       your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by
   *       appending a random alphanumeric string to the environment name.</p>
   */
  CNAMEPrefix?: string;

  /**
   * <p>Specifies the tier to use in creating this environment. The environment tier that you
   *       choose determines whether Elastic Beanstalk provisions resources to support a web application that handles
   *       HTTP(S) requests or a web application that handles background-processing tasks.</p>
   */
  Tier?: EnvironmentTier;

  /**
   * <p>Specifies the tags applied to resources in the environment.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the application version to deploy.</p>
   *          <p>Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.</p>
   */
  VersionLabel?: string;

  /**
   * <p>The name of the Elastic Beanstalk configuration template to use with the environment.</p>
   *          <note>
   *             <p>If you specify <code>TemplateName</code>, then don't specify
   *           <code>SolutionStackName</code>.</p>
   *          </note>
   */
  TemplateName?: string;

  /**
   * <p>The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If
   *       specified, Elastic Beanstalk sets the configuration values to the default values associated with the
   *       specified solution stack. For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html">Elastic Beanstalk Supported Platforms</a> in the <i>AWS Elastic Beanstalk
   *         Platforms</i> guide.</p>
   *          <note>
   *             <p>If you specify <code>SolutionStackName</code>, don't specify <code>PlatformArn</code> or
   *           <code>TemplateName</code>.</p>
   *          </note>
   */
  SolutionStackName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the custom platform to use with the environment. For
   *       more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html">Custom Platforms</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   *          <note>
   *             <p>If you specify <code>PlatformArn</code>, don't specify
   *         <code>SolutionStackName</code>.</p>
   *          </note>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk sets the specified configuration options to the
   *       requested value in the configuration set for the new environment. These override the values
   *       obtained from the solution stack or the configuration template.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>A list of custom user-defined configuration options to remove from the configuration
   *       set for this new environment.</p>
   */
  OptionsToRemove?: OptionSpecification[];

  /**
   * <p>The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's
   *       operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream
   *       services during this call and during subsequent calls acting on this environment. To specify
   *       an operations role, you must have the <code>iam:PassRole</code> permission for the role. For
   *       more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/iam-operationsrole.html">Operations roles</a> in the
   *         <i>AWS Elastic Beanstalk Developer Guide</i>.</p>
   */
  OperationsRole?: string;
}

/**
 * <p>Request to create a new platform version.</p>
 */
export interface CreatePlatformVersionRequest {
  /**
   * <p>The name of your custom platform.</p>
   */
  PlatformName: string | undefined;

  /**
   * <p>The number, such as 1.0.2, for the new platform version.</p>
   */
  PlatformVersion: string | undefined;

  /**
   * <p>The location of the platform definition archive in Amazon S3.</p>
   */
  PlatformDefinitionBundle: S3Location | undefined;

  /**
   * <p>The name of the builder environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The configuration option settings to apply to the builder environment.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>Specifies the tags applied to the new platform version.</p>
   *          <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using
   *       the platform version don't inherit the tags.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>The builder used to build the custom platform.</p>
 */
export interface Builder {
  /**
   * <p>The ARN of the builder.</p>
   */
  ARN?: string;
}

export enum PlatformStatus {
  Creating = "Creating",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Failed = "Failed",
  Ready = "Ready",
}

/**
 * <p>Summary information about a platform version.</p>
 */
export interface PlatformSummary {
  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The AWS account ID of the person who created the platform version.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The status of the platform version. You can create an environment from the platform
   *       version once it is ready.</p>
   */
  PlatformStatus?: PlatformStatus | string;

  /**
   * <p>The category of platform version.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The operating system used by the platform version.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform version.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The tiers in which the platform version runs.</p>
   */
  SupportedTierList?: string[];

  /**
   * <p>The additions associated with the platform version.</p>
   */
  SupportedAddonList?: string[];

  /**
   * <p>The state of the platform version in its lifecycle.</p>
   *          <p>Possible values: <code>recommended</code> | empty</p>
   *          <p>If an empty value is returned, the platform version is supported but isn't the recommended
   *     one for its branch.</p>
   */
  PlatformLifecycleState?: string;

  /**
   * <p>The version string of the platform version.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The platform branch to which the platform version belongs.</p>
   */
  PlatformBranchName?: string;

  /**
   * <p>The state of the platform version's branch in its lifecycle.</p>
   *          <p>Possible values: <code>beta</code> | <code>supported</code> | <code>deprecated</code> |
   *         <code>retired</code>
   *          </p>
   */
  PlatformBranchLifecycleState?: string;
}

export interface CreatePlatformVersionResult {
  /**
   * <p>Detailed information about the new version of the custom platform.</p>
   */
  PlatformSummary?: PlatformSummary;

  /**
   * <p>The builder used to create the custom platform.</p>
   */
  Builder?: Builder;
}

/**
 * <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
 */
export class TooManyPlatformsException extends __BaseException {
  readonly name: "TooManyPlatformsException" = "TooManyPlatformsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyPlatformsException, __BaseException>) {
    super({
      name: "TooManyPlatformsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyPlatformsException.prototype);
  }
}

/**
 * <p>Results of a <a>CreateStorageLocationResult</a> call.</p>
 */
export interface CreateStorageLocationResultMessage {
  /**
   * <p>The name of the Amazon S3 bucket created.</p>
   */
  S3Bucket?: string;
}

/**
 * <p>The specified account does not have a subscription to Amazon S3.</p>
 */
export class S3SubscriptionRequiredException extends __BaseException {
  readonly name: "S3SubscriptionRequiredException" = "S3SubscriptionRequiredException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<S3SubscriptionRequiredException, __BaseException>) {
    super({
      name: "S3SubscriptionRequiredException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, S3SubscriptionRequiredException.prototype);
  }
}

/**
 * <p>Request to delete an application.</p>
 */
export interface DeleteApplicationMessage {
  /**
   * <p>The name of the application to delete.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>When set to true, running environments will be terminated before deleting the
   *       application.</p>
   */
  TerminateEnvByForce?: boolean;
}

/**
 * <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 */
export class OperationInProgressException extends __BaseException {
  readonly name: "OperationInProgressException" = "OperationInProgressException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationInProgressException, __BaseException>) {
    super({
      name: "OperationInProgressException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationInProgressException.prototype);
  }
}

/**
 * <p>Request to delete an application version.</p>
 */
export interface DeleteApplicationVersionMessage {
  /**
   * <p>The name of the application to which the version belongs.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The label of the version to delete.</p>
   */
  VersionLabel: string | undefined;

  /**
   * <p>Set to <code>true</code> to delete the source bundle from your storage bucket.
   *       Otherwise, the application version is deleted only from Elastic Beanstalk and the source
   *       bundle remains in Amazon S3.</p>
   */
  DeleteSourceBundle?: boolean;
}

/**
 * <p>Unable to delete the Amazon S3 source bundle associated with the application version.
 *       The application version was deleted successfully.</p>
 */
export class SourceBundleDeletionException extends __BaseException {
  readonly name: "SourceBundleDeletionException" = "SourceBundleDeletionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SourceBundleDeletionException, __BaseException>) {
    super({
      name: "SourceBundleDeletionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SourceBundleDeletionException.prototype);
  }
}

/**
 * <p>Request to delete a configuration template.</p>
 */
export interface DeleteConfigurationTemplateMessage {
  /**
   * <p>The name of the application to delete the configuration template from.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template to delete.</p>
   */
  TemplateName: string | undefined;
}

/**
 * <p>Request to delete a draft environment configuration.</p>
 */
export interface DeleteEnvironmentConfigurationMessage {
  /**
   * <p>The name of the application the environment is associated with.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the environment to delete the draft configuration from.</p>
   */
  EnvironmentName: string | undefined;
}

export interface DeletePlatformVersionRequest {
  /**
   * <p>The ARN of the version of the custom platform.</p>
   */
  PlatformArn?: string;
}

export interface DeletePlatformVersionResult {
  /**
   * <p>Detailed information about the version of the custom platform.</p>
   */
  PlatformSummary?: PlatformSummary;
}

/**
 * <p>You cannot delete the platform version because there are still environments running on it.</p>
 */
export class PlatformVersionStillReferencedException extends __BaseException {
  readonly name: "PlatformVersionStillReferencedException" = "PlatformVersionStillReferencedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PlatformVersionStillReferencedException, __BaseException>) {
    super({
      name: "PlatformVersionStillReferencedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PlatformVersionStillReferencedException.prototype);
  }
}

/**
 * <p>The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It
 *       reflects the resource's limits for this account.</p>
 */
export interface ResourceQuota {
  /**
   * <p>The maximum number of instances of this Elastic Beanstalk resource type that an AWS account can
   *       use.</p>
   */
  Maximum?: number;
}

/**
 * <p>A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect
 *       Elastic Beanstalk resource limits for this account.</p>
 */
export interface ResourceQuotas {
  /**
   * <p>The quota for applications in the AWS account.</p>
   */
  ApplicationQuota?: ResourceQuota;

  /**
   * <p>The quota for application versions in the AWS account.</p>
   */
  ApplicationVersionQuota?: ResourceQuota;

  /**
   * <p>The quota for environments in the AWS account.</p>
   */
  EnvironmentQuota?: ResourceQuota;

  /**
   * <p>The quota for configuration templates in the AWS account.</p>
   */
  ConfigurationTemplateQuota?: ResourceQuota;

  /**
   * <p>The quota for custom platforms in the AWS account.</p>
   */
  CustomPlatformQuota?: ResourceQuota;
}

export interface DescribeAccountAttributesResult {
  /**
   * <p>The Elastic Beanstalk resource quotas associated with the calling AWS account.</p>
   */
  ResourceQuotas?: ResourceQuotas;
}

/**
 * <p>Request to describe one or more applications.</p>
 */
export interface DescribeApplicationsMessage {
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include
   *       those with the specified names.</p>
   */
  ApplicationNames?: string[];
}

/**
 * <p>Request to describe application versions.</p>
 */
export interface DescribeApplicationVersionsMessage {
  /**
   * <p>Specify an application name to show only application versions for that
   *       application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>Specify a version label to show a specific application version.</p>
   */
  VersionLabels?: string[];

  /**
   * <p>For a paginated request. Specify a maximum number of application versions to include in
   *       each response.</p>
   *          <p>If no <code>MaxRecords</code> is specified, all available application versions are
   *       retrieved in a single response.</p>
   */
  MaxRecords?: number;

  /**
   * <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other
   *       parameter values must be identical to the ones specified in the initial request.</p>
   *          <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
   */
  NextToken?: string;
}

/**
 * <p>A regular expression representing a restriction on a string configuration option
 *       value.</p>
 */
export interface OptionRestrictionRegex {
  /**
   * <p>The regular expression pattern that a string configuration option value with this
   *       restriction must match.</p>
   */
  Pattern?: string;

  /**
   * <p>A unique name representing this regular expression.</p>
   */
  Label?: string;
}

export enum ConfigurationOptionValueType {
  List = "List",
  Scalar = "Scalar",
}

/**
 * <p>Describes the possible values for a configuration option.</p>
 */
export interface ConfigurationOptionDescription {
  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  Name?: string;

  /**
   * <p>The default value for this configuration option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>An indication of which action is required if the value for this configuration option
   *       changes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NoInterruption</code> : There is no interruption to the environment or application
   *           availability.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RestartEnvironment</code> : The environment is entirely restarted, all AWS resources
   *           are deleted and recreated, and the environment is unavailable during the
   *           process.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RestartApplicationServer</code> : The environment is available the entire time.
   *           However, a short application outage occurs when the application servers on the running
   *           Amazon EC2 instances are restarted.</p>
   *             </li>
   *          </ul>
   */
  ChangeSeverity?: string;

  /**
   * <p>An indication of whether the user defined this configuration option:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code> : This configuration option was defined by the user. It is a valid
   *           choice for specifying if this as an <code>Option to Remove</code> when updating
   *           configuration settings. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code> : This configuration was not defined by the user.</p>
   *             </li>
   *          </ul>
   *          <p> Constraint: You can remove only <code>UserDefined</code> options from a configuration. </p>
   *          <p> Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  UserDefined?: boolean;

  /**
   * <p>An indication of which type of values this option has and whether it is allowable to
   *       select one or more than one of the possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Scalar</code> : Values for this option are a single selection from the possible
   *           values, or an unformatted string, or numeric value governed by the
   *           <code>MIN/MAX/Regex</code> constraints.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>List</code> : Values for this option are multiple selections from the possible
   *           values.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Boolean</code> : Values for this option are either <code>true</code> or
   *           <code>false</code> .</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Json</code> : Values for this option are a JSON representation of a
   *           <code>ConfigDocument</code>.</p>
   *             </li>
   *          </ul>
   */
  ValueType?: ConfigurationOptionValueType | string;

  /**
   * <p>If specified, values for the configuration option are selected from this
   *       list.</p>
   */
  ValueOptions?: string[];

  /**
   * <p>If specified, the configuration option must be a numeric value greater than this
   *       value.</p>
   */
  MinValue?: number;

  /**
   * <p>If specified, the configuration option must be a numeric value less than this
   *       value.</p>
   */
  MaxValue?: number;

  /**
   * <p>If specified, the configuration option must be a string value no longer than this
   *       value.</p>
   */
  MaxLength?: number;

  /**
   * <p>If specified, the configuration option must be a string value that satisfies this
   *       regular expression.</p>
   */
  Regex?: OptionRestrictionRegex;
}

/**
 * <p>Describes the settings for a specified configuration set.</p>
 */
export interface ConfigurationOptionsDescription {
  /**
   * <p>The name of the solution stack these configuration options belong to.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p> A list of <a>ConfigurationOptionDescription</a>. </p>
   */
  Options?: ConfigurationOptionDescription[];
}

/**
 * <p>Result message containing a list of application version descriptions.</p>
 */
export interface DescribeConfigurationOptionsMessage {
  /**
   * <p>The name of the application associated with the configuration template or environment.
   *       Only needed if you want to describe the configuration options associated with either the
   *       configuration template or environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the configuration template whose configuration options you want to
   *       describe.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment whose configuration options you want to describe.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the solution stack whose configuration options you want to
   *       describe.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, restricts the descriptions to only the specified options.</p>
   */
  Options?: OptionSpecification[];
}

/**
 * <p>The results from a request to change the configuration settings of an
 *       environment.</p>
 */
export interface ConfigurationSettingsDescriptions {
  /**
   * <p> A list of <a>ConfigurationSettingsDescription</a>. </p>
   */
  ConfigurationSettings?: ConfigurationSettingsDescription[];
}

/**
 * <p>Result message containing all of the configuration settings for a specified solution
 *       stack or configuration template.</p>
 */
export interface DescribeConfigurationSettingsMessage {
  /**
   * <p>The application for the environment or configuration template.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template to describe.</p>
   *          <p> Conditional: You must specify either this parameter or an EnvironmentName, but not
   *       both. If you specify both, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic
   *       Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment to describe.</p>
   *          <p> Condition: You must specify either this or a TemplateName, but not both. If you
   *       specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error.
   *       If you do not specify either, AWS Elastic Beanstalk returns
   *         <code>MissingRequiredParameter</code> error. </p>
   */
  EnvironmentName?: string;
}

export enum EnvironmentHealthAttribute {
  All = "All",
  ApplicationMetrics = "ApplicationMetrics",
  Causes = "Causes",
  Color = "Color",
  HealthStatus = "HealthStatus",
  InstancesHealth = "InstancesHealth",
  RefreshedAt = "RefreshedAt",
  Status = "Status",
}

/**
 * <p>See the example below to learn how to create a request body.</p>
 */
export interface DescribeEnvironmentHealthRequest {
  /**
   * <p>Specify the environment by name.</p>
   *          <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>Specify the environment by ID.</p>
   *          <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specify the response elements to return. To retrieve all attributes, set to
   *         <code>All</code>. If no attribute names are specified, returns the name of the
   *       environment.</p>
   */
  AttributeNames?: (EnvironmentHealthAttribute | string)[];
}

/**
 * <p>Represents summary information about the health of an instance. For more information,
 *       see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
 */
export interface InstanceHealthSummary {
  /**
   * <p>
   *             <b>Grey.</b> AWS Elastic Beanstalk and the health agent are
   *       reporting no data on an instance.</p>
   */
  NoData?: number;

  /**
   * <p>
   *             <b>Grey.</b> AWS Elastic Beanstalk and the health agent are
   *       reporting an insufficient amount of data on an instance.</p>
   */
  Unknown?: number;

  /**
   * <p>
   *             <b>Grey.</b> An operation is in progress on an instance within the
   *       command timeout.</p>
   */
  Pending?: number;

  /**
   * <p>
   *             <b>Green.</b> An instance is passing health checks and the health
   *       agent is not reporting any problems.</p>
   */
  Ok?: number;

  /**
   * <p>
   *             <b>Green.</b> An operation is in progress on an instance.</p>
   */
  Info?: number;

  /**
   * <p>
   *             <b>Yellow.</b> The health agent is reporting a moderate number of
   *       request failures or other issues for an instance or environment.</p>
   */
  Warning?: number;

  /**
   * <p>
   *             <b>Red.</b> The health agent is reporting a high number of request
   *       failures or other issues for an instance or environment.</p>
   */
  Degraded?: number;

  /**
   * <p>
   *             <b>Red.</b> The health agent is reporting a very high number of
   *       request failures or other issues for an instance or environment.</p>
   */
  Severe?: number;
}

/**
 * <p>Health details for an AWS Elastic Beanstalk environment.</p>
 */
export interface DescribeEnvironmentHealthResult {
  /**
   * <p>The environment's name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health status</a> of the
   *       environment. For example, <code>Ok</code>.</p>
   */
  HealthStatus?: string;

  /**
   * <p>The environment's operational status. <code>Ready</code>, <code>Launching</code>,
   *         <code>Updating</code>, <code>Terminating</code>, or <code>Terminated</code>.</p>
   */
  Status?: EnvironmentHealth | string;

  /**
   * <p>The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health color</a> of the
   *       environment.</p>
   */
  Color?: string;

  /**
   * <p>Descriptions of the data that contributed to the environment's current health
   *       status.</p>
   */
  Causes?: string[];

  /**
   * <p>Application request metrics for the environment.</p>
   */
  ApplicationMetrics?: ApplicationMetrics;

  /**
   * <p>Summary health information for the instances in the environment.</p>
   */
  InstancesHealth?: InstanceHealthSummary;

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;
}

/**
 * <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>Request to list completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryRequest {
  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The pagination token returned by a previous request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return for a single request.</p>
   */
  MaxItems?: number;
}

export enum FailureType {
  CancellationFailed = "CancellationFailed",
  InternalFailure = "InternalFailure",
  InvalidEnvironmentState = "InvalidEnvironmentState",
  PermissionsError = "PermissionsError",
  RollbackFailed = "RollbackFailed",
  RollbackSuccessful = "RollbackSuccessful",
  UpdateCancelled = "UpdateCancelled",
}

/**
 * <p>The record of a completed or failed managed action.</p>
 */
export interface ManagedActionHistoryItem {
  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>The type of the managed action.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>If the action failed, the type of failure.</p>
   */
  FailureType?: FailureType | string;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionHistoryStatus | string;

  /**
   * <p>If the action failed, a description of the failure.</p>
   */
  FailureDescription?: string;

  /**
   * <p>The date and time that the action started executing.</p>
   */
  ExecutedTime?: Date;

  /**
   * <p>The date and time that the action finished executing.</p>
   */
  FinishedTime?: Date;
}

/**
 * <p>A result message containing a list of completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryResult {
  /**
   * <p>A list of completed and failed managed actions.</p>
   */
  ManagedActionHistoryItems?: ManagedActionHistoryItem[];

  /**
   * <p>A pagination token that you pass to <a>DescribeEnvironmentManagedActionHistory</a> to get the next page of
   *       results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Request to list an environment's upcoming and in-progress managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionsRequest {
  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>To show only actions with a particular status, specify a status.</p>
   */
  Status?: ActionStatus | string;
}

/**
 * <p>The record of an upcoming or in-progress managed action.</p>
 */
export interface ManagedAction {
  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>The type of managed action.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>The status of the managed action. If the action is <code>Scheduled</code>, you can
   *       apply it immediately with <a>ApplyEnvironmentManagedAction</a>.</p>
   */
  Status?: ActionStatus | string;

  /**
   * <p>The start time of the maintenance window in which the managed action will
   *       execute.</p>
   */
  WindowStartTime?: Date;
}

/**
 * <p>The result message containing a list of managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionsResult {
  /**
   * <p>A list of upcoming and in-progress managed actions.</p>
   */
  ManagedActions?: ManagedAction[];
}

/**
 * <p>Request to describe the resources in an environment.</p>
 */
export interface DescribeEnvironmentResourcesMessage {
  /**
   * <p>The ID of the environment to retrieve AWS resource usage data.</p>
   *          <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to retrieve AWS resource usage data.</p>
   *          <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;
}

/**
 * <p>The description of an Amazon EC2 instance.</p>
 */
export interface Instance {
  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  Id?: string;
}

/**
 * <p>Describes an Auto Scaling launch configuration.</p>
 */
export interface LaunchConfiguration {
  /**
   * <p>The name of the launch configuration.</p>
   */
  Name?: string;
}

/**
 * <p>Describes an Amazon EC2 launch template.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The ID of the launch template.</p>
   */
  Id?: string;
}

/**
 * <p>Describes a LoadBalancer.</p>
 */
export interface LoadBalancer {
  /**
   * <p>The name of the LoadBalancer.</p>
   */
  Name?: string;
}

/**
 * <p>Describes a queue.</p>
 */
export interface Queue {
  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The URL of the queue.</p>
   */
  URL?: string;
}

/**
 * <p>Describes a trigger.</p>
 */
export interface Trigger {
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

/**
 * <p>Describes the AWS resources in use by this environment. This data is live.</p>
 */
export interface EnvironmentResourceDescription {
  /**
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p> The <code>AutoScalingGroups</code> used by this environment. </p>
   */
  AutoScalingGroups?: AutoScalingGroup[];

  /**
   * <p>The Amazon EC2 instances used by this environment.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The Auto Scaling launch configurations in use by this environment.</p>
   */
  LaunchConfigurations?: LaunchConfiguration[];

  /**
   * <p>The Amazon EC2 launch templates in use by this environment.</p>
   */
  LaunchTemplates?: LaunchTemplate[];

  /**
   * <p>The LoadBalancers in use by this environment.</p>
   */
  LoadBalancers?: LoadBalancer[];

  /**
   * <p>The <code>AutoScaling</code> triggers in use by this environment. </p>
   */
  Triggers?: Trigger[];

  /**
   * <p>The queues used by this environment.</p>
   */
  Queues?: Queue[];
}

/**
 * <p>Result message containing a list of environment resource descriptions.</p>
 */
export interface EnvironmentResourceDescriptionsMessage {
  /**
   * <p> A list of <a>EnvironmentResourceDescription</a>. </p>
   */
  EnvironmentResources?: EnvironmentResourceDescription;
}

/**
 * <p>Request to describe one or more environments.</p>
 */
export interface DescribeEnvironmentsMessage {
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that are associated with this application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that are associated with this application version.</p>
   */
  VersionLabel?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that have the specified IDs.</p>
   */
  EnvironmentIds?: string[];

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that have the specified names.</p>
   */
  EnvironmentNames?: string[];

  /**
   * <p>Indicates whether to include deleted environments:</p>
   *          <p>
   *             <code>true</code>: Environments that have been deleted after
   *       <code>IncludedDeletedBackTo</code> are displayed.</p>
   *          <p>
   *             <code>false</code>: Do not include deleted environments.</p>
   */
  IncludeDeleted?: boolean;

  /**
   * <p> If specified when <code>IncludeDeleted</code> is set to <code>true</code>, then
   *       environments deleted after this date are displayed. </p>
   */
  IncludedDeletedBackTo?: Date;

  /**
   * <p>For a paginated request. Specify a maximum number of environments to include in
   *       each response.</p>
   *          <p>If no <code>MaxRecords</code> is specified, all available environments are
   *       retrieved in a single response.</p>
   */
  MaxRecords?: number;

  /**
   * <p>For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other
   *       parameter values must be identical to the ones specified in the initial request.</p>
   *          <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
   */
  NextToken?: string;
}

export enum EventSeverity {
  DEBUG = "DEBUG",
  ERROR = "ERROR",
  FATAL = "FATAL",
  INFO = "INFO",
  TRACE = "TRACE",
  WARN = "WARN",
}

/**
 * <p>Request to retrieve a list of events for an environment.</p>
 */
export interface DescribeEventsMessage {
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those associated with this application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those
   *       associated with this application version.</p>
   */
  VersionLabel?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that
   *       are associated with this environment configuration.</p>
   */
  TemplateName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those
   *       associated with this environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those
   *       associated with this environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ARN of a custom platform version. If specified, AWS Elastic Beanstalk restricts the
   *       returned descriptions to those associated with this custom platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the described events to include only
   *       those associated with this request ID.</p>
   */
  RequestId?: string;

  /**
   * <p>If specified, limits the events returned from this call to include only those with the
   *       specified severity or higher.</p>
   */
  Severity?: EventSeverity | string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that
   *       occur on or after this time.</p>
   */
  StartTime?: Date;

  /**
   * <p> If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that
   *       occur up to, but not including, the <code>EndTime</code>. </p>
   */
  EndTime?: Date;

  /**
   * <p>Specifies the maximum number of events that can be returned, beginning with the most
   *       recent event.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Pagination token. If specified, the events return the next batch of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes an event.</p>
 */
export interface EventDescription {
  /**
   * <p>The date when the event occurred.</p>
   */
  EventDate?: Date;

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p>The application associated with the event.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The release label for the application version associated with this event.</p>
   */
  VersionLabel?: string;

  /**
   * <p>The name of the configuration associated with this event.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment associated with this event.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The web service request ID for the activity of this event.</p>
   */
  RequestId?: string;

  /**
   * <p>The severity level of this event.</p>
   */
  Severity?: EventSeverity | string;
}

/**
 * <p>Result message wrapping a list of event descriptions.</p>
 */
export interface EventDescriptionsMessage {
  /**
   * <p> A list of <a>EventDescription</a>. </p>
   */
  Events?: EventDescription[];

  /**
   * <p> If returned, this indicates that there are more results to obtain. Use this token in
   *       the next <a>DescribeEvents</a> call to get the next batch of events. </p>
   */
  NextToken?: string;
}

export enum InstancesHealthAttribute {
  All = "All",
  ApplicationMetrics = "ApplicationMetrics",
  AvailabilityZone = "AvailabilityZone",
  Causes = "Causes",
  Color = "Color",
  Deployment = "Deployment",
  HealthStatus = "HealthStatus",
  InstanceType = "InstanceType",
  LaunchedAt = "LaunchedAt",
  RefreshedAt = "RefreshedAt",
  System = "System",
}

/**
 * <p>Parameters for a call to <code>DescribeInstancesHealth</code>.</p>
 */
export interface DescribeInstancesHealthRequest {
  /**
   * <p>Specify the AWS Elastic Beanstalk environment by name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>Specify the AWS Elastic Beanstalk environment by ID.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specifies the response elements you wish to receive. To retrieve all attributes, set to
   *         <code>All</code>. If no attribute names are specified, returns a list of
   *       instances.</p>
   */
  AttributeNames?: (InstancesHealthAttribute | string)[];

  /**
   * <p>Specify the pagination token returned by a previous call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Information about an application version deployment.</p>
 */
export interface Deployment {
  /**
   * <p>The version label of the application version in the deployment.</p>
   */
  VersionLabel?: string;

  /**
   * <p>The ID of the deployment. This number increases by one each time that you deploy source
   *       code or change instance configuration settings.</p>
   */
  DeploymentId?: number;

  /**
   * <p>The status of the deployment:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>In Progress</code> : The deployment is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Deployed</code> : The deployment succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> : The deployment failed.</p>
   *             </li>
   *          </ul>
   */
  Status?: string;

  /**
   * <p>For in-progress deployments, the time that the deployment started.</p>
   *          <p>For completed deployments, the time that the deployment ended.</p>
   */
  DeploymentTime?: Date;
}

/**
 * <p>CPU utilization metrics for an instance.</p>
 */
export interface CPUUtilization {
  /**
   * <p>Percentage of time that the CPU has spent in the <code>User</code> state over the last
   *       10 seconds.</p>
   */
  User?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>Nice</code> state over the last
   *       10 seconds.</p>
   */
  Nice?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>System</code> state over the
   *       last 10 seconds.</p>
   */
  System?: number;

  /**
   * <p>Percentage of time that the CPU has spent in the <code>Idle</code> state over the last
   *       10 seconds.</p>
   */
  Idle?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>I/O Wait</code> state over the
   *       last 10 seconds.</p>
   */
  IOWait?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>IRQ</code> state over the last
   *       10 seconds.</p>
   */
  IRQ?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>SoftIRQ</code> state over the
   *       last 10 seconds.</p>
   */
  SoftIRQ?: number;

  /**
   * <p>Available on Windows environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>Privileged</code> state over the
   *       last 10 seconds.</p>
   */
  Privileged?: number;
}

/**
 * <p>CPU utilization and load average metrics for an Amazon EC2 instance.</p>
 */
export interface SystemStatus {
  /**
   * <p>CPU utilization metrics for the instance.</p>
   */
  CPUUtilization?: CPUUtilization;

  /**
   * <p>Load average in the last 1-minute, 5-minute, and 15-minute periods.
   *       For more information, see
   *         <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-metrics.html#health-enhanced-metrics-os">Operating System Metrics</a>.</p>
   */
  LoadAverage?: number[];
}

/**
 * <p>Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk
 *       environment.</p>
 */
export interface SingleInstanceHealth {
  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>Returns the health status of the specified instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health
   *         Colors and Statuses</a>.</p>
   */
  HealthStatus?: string;

  /**
   * <p>Represents the color indicator that gives you information about the health of the EC2
   *       instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and
   *         Statuses</a>.</p>
   */
  Color?: string;

  /**
   * <p>Represents the causes, which provide more information about the current health
   *       status.</p>
   */
  Causes?: string[];

  /**
   * <p>The time at which the EC2 instance was launched.</p>
   */
  LaunchedAt?: Date;

  /**
   * <p>Request metrics from your application.</p>
   */
  ApplicationMetrics?: ApplicationMetrics;

  /**
   * <p>Operating system metrics from the instance.</p>
   */
  System?: SystemStatus;

  /**
   * <p>Information about the most recent deployment to an instance.</p>
   */
  Deployment?: Deployment;

  /**
   * <p>The availability zone in which the instance runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The instance's type.</p>
   */
  InstanceType?: string;
}

/**
 * <p>Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk
 *       environment.</p>
 */
export interface DescribeInstancesHealthResult {
  /**
   * <p>Detailed health information about each instance.</p>
   *          <p>The output differs slightly between Linux and Windows environments. There is a difference
   *       in the members that are supported under the <code><CPUUtilization></code> type.</p>
   */
  InstanceHealthList?: SingleInstanceHealth[];

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;

  /**
   * <p>Pagination token for the next page of results, if available.</p>
   */
  NextToken?: string;
}

export interface DescribePlatformVersionRequest {
  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;
}

/**
 * <p>A custom AMI available to platforms.</p>
 */
export interface CustomAmi {
  /**
   * <p>The type of virtualization used to create the custom AMI.</p>
   */
  VirtualizationType?: string;

  /**
   * <p>THe ID of the image used to create the custom AMI.</p>
   */
  ImageId?: string;
}

/**
 * <p>A framework supported by the platform.</p>
 */
export interface PlatformFramework {
  /**
   * <p>The name of the framework.</p>
   */
  Name?: string;

  /**
   * <p>The version of the framework.</p>
   */
  Version?: string;
}

/**
 * <p>A programming language supported by the platform.</p>
 */
export interface PlatformProgrammingLanguage {
  /**
   * <p>The name of the programming language.</p>
   */
  Name?: string;

  /**
   * <p>The version of the programming language.</p>
   */
  Version?: string;
}

/**
 * <p>Detailed information about a platform version.</p>
 */
export interface PlatformDescription {
  /**
   * <p>The ARN of the platform version.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The AWS account ID of the person who created the platform version.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The name of the platform version.</p>
   */
  PlatformName?: string;

  /**
   * <p>The version of the platform version.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The name of the solution stack used by the platform version.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The status of the platform version.</p>
   */
  PlatformStatus?: PlatformStatus | string;

  /**
   * <p>The date when the platform version was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the platform version was last updated.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The category of the platform version.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The description of the platform version.</p>
   */
  Description?: string;

  /**
   * <p>Information about the maintainer of the platform version.</p>
   */
  Maintainer?: string;

  /**
   * <p>The operating system used by the platform version.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform version.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The programming languages supported by the platform version.</p>
   */
  ProgrammingLanguages?: PlatformProgrammingLanguage[];

  /**
   * <p>The frameworks supported by the platform version.</p>
   */
  Frameworks?: PlatformFramework[];

  /**
   * <p>The custom AMIs supported by the platform version.</p>
   */
  CustomAmiList?: CustomAmi[];

  /**
   * <p>The tiers supported by the platform version.</p>
   */
  SupportedTierList?: string[];

  /**
   * <p>The additions supported by the platform version.</p>
   */
  SupportedAddonList?: string[];

  /**
   * <p>The state of the platform version in its lifecycle.</p>
   *          <p>Possible values: <code>Recommended</code> | <code>null</code>
   *          </p>
   *          <p>If a null value is returned, the platform version isn't the recommended one for its
   *       branch. Each platform branch has a single recommended platform version, typically the most
   *       recent one.</p>
   */
  PlatformLifecycleState?: string;

  /**
   * <p>The platform branch to which the platform version belongs.</p>
   */
  PlatformBranchName?: string;

  /**
   * <p>The state of the platform version's branch in its lifecycle.</p>
   *          <p>Possible values: <code>Beta</code> | <code>Supported</code> | <code>Deprecated</code> |
   *       <code>Retired</code>
   *          </p>
   */
  PlatformBranchLifecycleState?: string;
}

export interface DescribePlatformVersionResult {
  /**
   * <p>Detailed information about the platform version.</p>
   */
  PlatformDescription?: PlatformDescription;
}

/**
 * <p>Request to disassociate the operations role from an environment.</p>
 */
export interface DisassociateEnvironmentOperationsRoleMessage {
  /**
   * <p>The name of the environment from which to disassociate the operations role.</p>
   */
  EnvironmentName: string | undefined;
}

/**
 * <p>A list of available AWS Elastic Beanstalk solution stacks.</p>
 */
export interface ListAvailableSolutionStacksResultMessage {
  /**
   * <p>A list of available solution stacks.</p>
   */
  SolutionStacks?: string[];

  /**
   * <p> A list of available solution stacks and their <a>SolutionStackDescription</a>. </p>
   */
  SolutionStackDetails?: SolutionStackDescription[];
}

/**
 * <p>Describes criteria to restrict a list of results.</p>
 *          <p>For operators that apply a single value to the attribute, the filter is evaluated as
 *       follows: <code>Attribute Operator Values[1]</code>
 *          </p>
 *          <p>Some operators, e.g. <code>in</code>, can apply multiple values. In this case, the filter
 *       is evaluated as a logical union (OR) of applications of the operator to the attribute with
 *       each one of the values: <code>(Attribute Operator Values[1]) OR (Attribute Operator Values[2])
 *         OR ...</code>
 *          </p>
 *          <p>The valid values for attributes of <code>SearchFilter</code> depend on the API action. For
 *       valid values, see the reference page for the API action you're calling that takes a
 *         <code>SearchFilter</code> parameter.</p>
 */
export interface SearchFilter {
  /**
   * <p>The result attribute to which the filter values are applied. Valid values vary by API
   *       action.</p>
   */
  Attribute?: string;

  /**
   * <p>The operator to apply to the <code>Attribute</code> with each of the <code>Values</code>.
   *       Valid values vary by <code>Attribute</code>.</p>
   */
  Operator?: string;

  /**
   * <p>The list of values applied to the <code>Attribute</code> and <code>Operator</code>
   *       attributes. Number of values and valid values vary by <code>Attribute</code>.</p>
   */
  Values?: string[];
}

export interface ListPlatformBranchesRequest {
  /**
   * <p>Criteria for restricting the resulting list of platform branches. The filter is evaluated
   *       as a logical conjunction (AND) of the separate <code>SearchFilter</code> terms.</p>
   *          <p>The following list shows valid attribute values for each of the <code>SearchFilter</code>
   *       terms. Most operators take a single value. The <code>in</code> and <code>not_in</code>
   *       operators can take multiple values.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Attribute = BranchName</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code>
   *               | <code>ends_with</code> | <code>contains</code> | <code>in</code> |
   *                 <code>not_in</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Attribute = LifecycleState</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>in</code> |
   *                 <code>not_in</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Values</code>: <code>beta</code> | <code>supported</code> |
   *                 <code>deprecated</code> | <code>retired</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Attribute = PlatformName</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Operator</code>: <code>=</code> | <code>!=</code> | <code>begins_with</code>
   *               | <code>ends_with</code> | <code>contains</code> | <code>in</code> |
   *               <code>not_in</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Attribute = TierType</code>:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>Operator</code>: <code>=</code> | <code>!=</code>
   *                      </p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>Values</code>: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code>
   *                      </p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>Array size: limited to 10 <code>SearchFilter</code> objects.</p>
   *          <p>Within each <code>SearchFilter</code> item, the <code>Values</code> array is limited to 10
   *       items.</p>
   */
  Filters?: SearchFilter[];

  /**
   * <p>The maximum number of platform branch values returned in one call.</p>
   */
  MaxRecords?: number;

  /**
   * <p>For a paginated request. Specify a token from a previous response page to retrieve the
   *       next response page. All other parameter values must be identical to the ones specified in the
   *       initial request.</p>
   *          <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
   */
  NextToken?: string;
}

/**
 * <p>Summary information about a platform branch.</p>
 */
export interface PlatformBranchSummary {
  /**
   * <p>The name of the platform to which this platform branch belongs.</p>
   */
  PlatformName?: string;

  /**
   * <p>The name of the platform branch.</p>
   */
  BranchName?: string;

  /**
   * <p>The support life cycle state of the platform branch.</p>
   *          <p>Possible values: <code>beta</code> | <code>supported</code> | <code>deprecated</code> |
   *       <code>retired</code>
   *          </p>
   */
  LifecycleState?: string;

  /**
   * <p>An ordinal number that designates the order in which platform branches have been added to
   *       a platform. This can be helpful, for example, if your code calls the
   *         <code>ListPlatformBranches</code> action and then displays a list of platform
   *       branches.</p>
   *          <p>A larger <code>BranchOrder</code> value designates a newer platform branch within the
   *       platform.</p>
   */
  BranchOrder?: number;

  /**
   * <p>The environment tiers that platform versions in this branch support.</p>
   *          <p>Possible values: <code>WebServer/Standard</code> | <code>Worker/SQS/HTTP</code>
   *          </p>
   */
  SupportedTierList?: string[];
}

export interface ListPlatformBranchesResult {
  /**
   * <p>Summary information about the platform branches.</p>
   */
  PlatformBranchSummaryList?: PlatformBranchSummary[];

  /**
   * <p>In a paginated request, if this value isn't <code>null</code>, it's the token that you can
   *       pass in a subsequent request to get the next response page.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes criteria to restrict the results when listing platform versions.</p>
 *          <p>The filter is evaluated as follows: <code>Type Operator Values[1]</code>
 *          </p>
 */
export interface PlatformFilter {
  /**
   * <p>The platform version attribute to which the filter values are applied.</p>
   *          <p>Valid values: <code>PlatformName</code> | <code>PlatformVersion</code> |
   *         <code>PlatformStatus</code> | <code>PlatformBranchName</code> |
   *         <code>PlatformLifecycleState</code> | <code>PlatformOwner</code> |
   *         <code>SupportedTier</code> | <code>SupportedAddon</code> |
   *         <code>ProgrammingLanguageName</code> | <code>OperatingSystemName</code>
   *          </p>
   */
  Type?: string;

  /**
   * <p>The operator to apply to the <code>Type</code> with each of the
   *       <code>Values</code>.</p>
   *          <p>Valid values: <code>=</code> | <code>!=</code> |
   *         <code><</code> | <code><=</code> |
   *         <code>></code> | <code>>=</code> |
   *         <code>contains</code> | <code>begins_with</code> | <code>ends_with</code>
   *          </p>
   */
  Operator?: string;

  /**
   * <p>The list of values applied to the filtering platform version attribute. Only one value is supported
   *       for all current operators.</p>
   *          <p>The following list shows valid filter values for some filter attributes.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PlatformStatus</code>: <code>Creating</code> | <code>Failed</code> |
   *             <code>Ready</code> | <code>Deleting</code> | <code>Deleted</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PlatformLifecycleState</code>: <code>recommended</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SupportedTier</code>: <code>WebServer/Standard</code> |
   *             <code>Worker/SQS/HTTP</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SupportedAddon</code>: <code>Log/S3</code> | <code>Monitoring/Healthd</code> |
   *             <code>WorkerDaemon/SQSD</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Values?: string[];
}

export interface ListPlatformVersionsRequest {
  /**
   * <p>Criteria for restricting the resulting list of platform versions. The filter is
   *       interpreted as a logical conjunction (AND) of the separate <code>PlatformFilter</code>
   *       terms.</p>
   */
  Filters?: PlatformFilter[];

  /**
   * <p>The maximum number of platform version values returned in one call.</p>
   */
  MaxRecords?: number;

  /**
   * <p>For a paginated request. Specify a token from a previous response page to retrieve the
   *       next response page. All other parameter values must be identical to the ones specified in the
   *       initial request.</p>
   *          <p>If no <code>NextToken</code> is specified, the first page is retrieved.</p>
   */
  NextToken?: string;
}

export interface ListPlatformVersionsResult {
  /**
   * <p>Summary information about the platform versions.</p>
   */
  PlatformSummaryList?: PlatformSummary[];

  /**
   * <p>In a paginated request, if this value isn't <code>null</code>, it's the token that you can
   *       pass in a subsequent request to get the next response page.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p>
   *          <p>Must be the ARN of an Elastic Beanstalk resource.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

export interface ResourceTagsDescriptionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which a tag list was requested.</p>
   */
  ResourceArn?: string;

  /**
   * <p>A list of tag key-value pairs.</p>
   */
  ResourceTags?: Tag[];
}

/**
 * <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
 */
export class ResourceTypeNotSupportedException extends __BaseException {
  readonly name: "ResourceTypeNotSupportedException" = "ResourceTypeNotSupportedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceTypeNotSupportedException, __BaseException>) {
    super({
      name: "ResourceTypeNotSupportedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceTypeNotSupportedException.prototype);
  }
}

/**
 * <p></p>
 */
export interface RebuildEnvironmentMessage {
  /**
   * <p>The ID of the environment to rebuild.</p>
   *          <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to rebuild.</p>
   *          <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;
}

export enum EnvironmentInfoType {
  bundle = "bundle",
  tail = "tail",
}

/**
 * <p>Request to retrieve logs from an environment and store them in your Elastic Beanstalk
 *       storage bucket.</p>
 */
export interface RequestEnvironmentInfoMessage {
  /**
   * <p>The ID of the environment of the requested data.</p>
   *          <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an
   *       <code>InvalidParameterValue</code> error. </p>
   *          <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment of the requested data.</p>
   *          <p>If no such environment is found, <code>RequestEnvironmentInfo</code> returns an
   *       <code>InvalidParameterValue</code> error. </p>
   *          <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p>The type of information to request.</p>
   */
  InfoType: EnvironmentInfoType | string | undefined;
}

/**
 * <p></p>
 */
export interface RestartAppServerMessage {
  /**
   * <p>The ID of the environment to restart the server for.</p>
   *          <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to restart the server for.</p>
   *          <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;
}

/**
 * <p>Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.</p>
 */
export interface RetrieveEnvironmentInfoMessage {
  /**
   * <p>The ID of the data's environment.</p>
   *          <p>If no such environment is found, returns an <code>InvalidParameterValue</code>
   *       error.</p>
   *          <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code>
   *       error.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the data's environment.</p>
   *          <p> If no such environment is found, returns an <code>InvalidParameterValue</code> error. </p>
   *          <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p>The type of information to retrieve.</p>
   */
  InfoType: EnvironmentInfoType | string | undefined;
}

/**
 * <p>The information retrieved from the Amazon EC2 instances.</p>
 */
export interface EnvironmentInfoDescription {
  /**
   * <p>The type of information retrieved.</p>
   */
  InfoType?: EnvironmentInfoType | string;

  /**
   * <p>The Amazon EC2 Instance ID for this information.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The time stamp when this information was retrieved.</p>
   */
  SampleTimestamp?: Date;

  /**
   * <p>The retrieved information. Currently contains a presigned Amazon S3 URL. The files are
   *       deleted after 15 minutes.</p>
   *          <p>Anyone in possession of this URL can access the files before they are deleted. Make the
   *       URL available only to trusted parties.</p>
   */
  Message?: string;
}

/**
 * <p>Result message containing a description of the requested environment info.</p>
 */
export interface RetrieveEnvironmentInfoResultMessage {
  /**
   * <p> The <a>EnvironmentInfoDescription</a> of the environment. </p>
   */
  EnvironmentInfo?: EnvironmentInfoDescription[];
}

/**
 * <p>Swaps the CNAMEs of two environments.</p>
 */
export interface SwapEnvironmentCNAMEsMessage {
  /**
   * <p>The ID of the source environment.</p>
   *          <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the
   *       <code>SourceEnvironmentName</code>. You may also specify both. If you specify the
   *       <code>SourceEnvironmentId</code>, you must specify the
   *       <code>DestinationEnvironmentId</code>. </p>
   */
  SourceEnvironmentId?: string;

  /**
   * <p>The name of the source environment.</p>
   *          <p> Condition: You must specify at least the <code>SourceEnvironmentID</code> or the
   *       <code>SourceEnvironmentName</code>. You may also specify both. If you specify the
   *       <code>SourceEnvironmentName</code>, you must specify the
   *       <code>DestinationEnvironmentName</code>. </p>
   */
  SourceEnvironmentName?: string;

  /**
   * <p>The ID of the destination environment.</p>
   *          <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the
   *       <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the
   *       <code>SourceEnvironmentId</code> with the <code>DestinationEnvironmentId</code>. </p>
   */
  DestinationEnvironmentId?: string;

  /**
   * <p>The name of the destination environment.</p>
   *          <p> Condition: You must specify at least the <code>DestinationEnvironmentID</code> or the
   *       <code>DestinationEnvironmentName</code>. You may also specify both. You must specify the
   *       <code>SourceEnvironmentName</code> with the <code>DestinationEnvironmentName</code>.
   *     </p>
   */
  DestinationEnvironmentName?: string;
}

/**
 * <p>Request to terminate an environment.</p>
 */
export interface TerminateEnvironmentMessage {
  /**
   * <p>The ID of the environment to terminate.</p>
   *          <p> Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to terminate.</p>
   *          <p> Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p>Indicates whether the associated AWS resources should shut down when the environment is
   *       terminated:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>true</code>: The specified environment as well as the associated AWS resources, such
   *           as Auto Scaling group and LoadBalancer, are terminated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>false</code>: AWS Elastic Beanstalk resource management is removed from the
   *           environment, but the AWS resources continue to operate.</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see the <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/"> AWS Elastic Beanstalk User Guide. </a>
   *          </p>
   *          <p> Default: <code>true</code>
   *          </p>
   *          <p> Valid Values: <code>true</code> | <code>false</code>
   *          </p>
   */
  TerminateResources?: boolean;

  /**
   * <p>Terminates the target environment even if another environment in the same group is
   *       dependent on it.</p>
   */
  ForceTerminate?: boolean;
}

/**
 * <p>Request to update an application.</p>
 */
export interface UpdateApplicationMessage {
  /**
   * <p>The name of the application to update. If no such application is found,
   *         <code>UpdateApplication</code> returns an <code>InvalidParameterValue</code> error.
   *     </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>A new description for the application.</p>
   *          <p>Default: If not specified, AWS Elastic Beanstalk does not update the
   *       description.</p>
   */
  Description?: string;
}

export interface UpdateApplicationResourceLifecycleMessage {
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The lifecycle configuration.</p>
   */
  ResourceLifecycleConfig: ApplicationResourceLifecycleConfig | undefined;
}

/**
 * <p></p>
 */
export interface UpdateApplicationVersionMessage {
  /**
   * <p>The name of the application associated with this version.</p>
   *          <p> If no application is found with this name, <code>UpdateApplication</code> returns an
   *         <code>InvalidParameterValue</code> error.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the version to update.</p>
   *          <p>If no application version is found with this label, <code>UpdateApplication</code>
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel: string | undefined;

  /**
   * <p>A new description for this version.</p>
   */
  Description?: string;
}

/**
 * <p>The result message containing the options for the specified solution stack.</p>
 */
export interface UpdateConfigurationTemplateMessage {
  /**
   * <p>The name of the application associated with the configuration template to
   *       update.</p>
   *          <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code>
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template to update.</p>
   *          <p> If no configuration template is found with this name,
   *         <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code>
   *       error. </p>
   */
  TemplateName: string | undefined;

  /**
   * <p>A new description for the configuration.</p>
   */
  Description?: string;

  /**
   * <p>A list of configuration option settings to update with the new specified option
   *       value.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>A list of configuration options to remove from the configuration set.</p>
   *          <p> Constraint: You can remove only <code>UserDefined</code> configuration options.
   *     </p>
   */
  OptionsToRemove?: OptionSpecification[];
}

/**
 * <p>Request to update an environment.</p>
 */
export interface UpdateEnvironmentMessage {
  /**
   * <p>The name of the application with which the environment is associated.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The ID of the environment to update.</p>
   *          <p>If no environment with this ID exists, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error.</p>
   *          <p>Condition: You must specify either this or an EnvironmentName, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the environment to update. If no environment with this name exists, AWS
   *       Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   *          <p>Condition: You must specify either this or an EnvironmentId, or both. If you do not
   *       specify either, AWS Elastic Beanstalk returns <code>MissingRequiredParameter</code> error.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the group to which the target environment belongs. Specify a group name
   *       only if the environment's name is specified in an environment manifest and not with the
   *       environment name or environment ID parameters. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest
   *         (env.yaml)</a> for details.</p>
   */
  GroupName?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk updates the description of this
   *       environment.</p>
   */
  Description?: string;

  /**
   * <p>This specifies the tier to use to update the environment.</p>
   *          <p>Condition: At this time, if you change the tier version, name, or type, AWS Elastic
   *       Beanstalk returns <code>InvalidParameterValue</code> error. </p>
   */
  Tier?: EnvironmentTier;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk deploys the named application
   *       version to the environment. If no such application version is found, returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk deploys this configuration
   *       template to the environment. If no such configuration template is found, AWS Elastic Beanstalk
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName?: string;

  /**
   * <p>This specifies the platform version that the environment will run after the environment
   *       is updated.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The ARN of the platform, if used.</p>
   */
  PlatformArn?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk updates the configuration set associated with the
   *       running environment and sets the specified configuration options to the requested
   *       value.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>A list of custom user-defined configuration options to remove from the configuration
   *       set for this environment.</p>
   */
  OptionsToRemove?: OptionSpecification[];
}

/**
 * <p>The number of tags in the resource would exceed the number of tags that each resource
 *       can have.</p>
 *          <p>To calculate this, the operation considers both the number of tags the resource already has
 *       and the tags this operation would add if it succeeded.</p>
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

export interface UpdateTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce to be updated.</p>
   *          <p>Must be the ARN of an Elastic Beanstalk resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to add or update. If a key of an existing tag is added, the tag's value is
   *       updated.</p>
   *          <p>Specify at least one of these parameters: <code>TagsToAdd</code>,
   *         <code>TagsToRemove</code>.</p>
   */
  TagsToAdd?: Tag[];

  /**
   * <p>A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.</p>
   *          <p>Specify at least one of these parameters: <code>TagsToAdd</code>,
   *       <code>TagsToRemove</code>.</p>
   */
  TagsToRemove?: string[];
}

export enum ValidationSeverity {
  error = "error",
  warning = "warning",
}

/**
 * <p>An error or warning for a desired configuration option value.</p>
 */
export interface ValidationMessage {
  /**
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;

  /**
   * <p>An indication of the severity of this message:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>error</code>: This message indicates that this is not a valid setting for an
   *           option.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>warning</code>: This message is providing information you should take into
   *           account.</p>
   *             </li>
   *          </ul>
   */
  Severity?: ValidationSeverity | string;

  /**
   * <p>The namespace to which the option belongs.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;
}

/**
 * <p>Provides a list of validation messages.</p>
 */
export interface ConfigurationSettingsValidationMessages {
  /**
   * <p> A list of <a>ValidationMessage</a>. </p>
   */
  Messages?: ValidationMessage[];
}

/**
 * <p>A list of validation messages for a specified configuration template.</p>
 */
export interface ValidateConfigurationSettingsMessage {
  /**
   * <p>The name of the application that the configuration template or environment belongs
   *       to.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template to validate the settings against.</p>
   *          <p>Condition: You cannot specify both this and an environment name.</p>
   */
  TemplateName?: string;

  /**
   * <p>The name of the environment to validate the settings against.</p>
   *          <p>Condition: You cannot specify both this and a configuration template name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>A list of the options and desired values to evaluate.</p>
   */
  OptionSettings: ConfigurationOptionSetting[] | undefined;
}

/**
 * @internal
 */
export const AbortEnvironmentUpdateMessageFilterSensitiveLog = (obj: AbortEnvironmentUpdateMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaxAgeRuleFilterSensitiveLog = (obj: MaxAgeRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MaxCountRuleFilterSensitiveLog = (obj: MaxCountRule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationVersionLifecycleConfigFilterSensitiveLog = (obj: ApplicationVersionLifecycleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationResourceLifecycleConfigFilterSensitiveLog = (obj: ApplicationResourceLifecycleConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationDescriptionFilterSensitiveLog = (obj: ApplicationDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationDescriptionMessageFilterSensitiveLog = (obj: ApplicationDescriptionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationDescriptionsMessageFilterSensitiveLog = (obj: ApplicationDescriptionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LatencyFilterSensitiveLog = (obj: Latency): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatusCodesFilterSensitiveLog = (obj: StatusCodes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationMetricsFilterSensitiveLog = (obj: ApplicationMetrics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationResourceLifecycleDescriptionMessageFilterSensitiveLog = (
  obj: ApplicationResourceLifecycleDescriptionMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceBuildInformationFilterSensitiveLog = (obj: SourceBuildInformation): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationVersionDescriptionFilterSensitiveLog = (obj: ApplicationVersionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationVersionDescriptionMessageFilterSensitiveLog = (
  obj: ApplicationVersionDescriptionMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplicationVersionDescriptionsMessageFilterSensitiveLog = (
  obj: ApplicationVersionDescriptionsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplyEnvironmentManagedActionRequestFilterSensitiveLog = (
  obj: ApplyEnvironmentManagedActionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApplyEnvironmentManagedActionResultFilterSensitiveLog = (
  obj: ApplyEnvironmentManagedActionResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateEnvironmentOperationsRoleMessageFilterSensitiveLog = (
  obj: AssociateEnvironmentOperationsRoleMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingGroupFilterSensitiveLog = (obj: AutoScalingGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SolutionStackDescriptionFilterSensitiveLog = (obj: SolutionStackDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckDNSAvailabilityMessageFilterSensitiveLog = (obj: CheckDNSAvailabilityMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CheckDNSAvailabilityResultMessageFilterSensitiveLog = (obj: CheckDNSAvailabilityResultMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ComposeEnvironmentsMessageFilterSensitiveLog = (obj: ComposeEnvironmentsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentLinkFilterSensitiveLog = (obj: EnvironmentLink): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListenerFilterSensitiveLog = (obj: Listener): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerDescriptionFilterSensitiveLog = (obj: LoadBalancerDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentResourcesDescriptionFilterSensitiveLog = (obj: EnvironmentResourcesDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentTierFilterSensitiveLog = (obj: EnvironmentTier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentDescriptionFilterSensitiveLog = (obj: EnvironmentDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentDescriptionsMessageFilterSensitiveLog = (obj: EnvironmentDescriptionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationMessageFilterSensitiveLog = (obj: CreateApplicationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuildConfigurationFilterSensitiveLog = (obj: BuildConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApplicationVersionMessageFilterSensitiveLog = (obj: CreateApplicationVersionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationOptionSettingFilterSensitiveLog = (obj: ConfigurationOptionSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSettingsDescriptionFilterSensitiveLog = (obj: ConfigurationSettingsDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SourceConfigurationFilterSensitiveLog = (obj: SourceConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConfigurationTemplateMessageFilterSensitiveLog = (obj: CreateConfigurationTemplateMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionSpecificationFilterSensitiveLog = (obj: OptionSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEnvironmentMessageFilterSensitiveLog = (obj: CreateEnvironmentMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlatformVersionRequestFilterSensitiveLog = (obj: CreatePlatformVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuilderFilterSensitiveLog = (obj: Builder): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformSummaryFilterSensitiveLog = (obj: PlatformSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePlatformVersionResultFilterSensitiveLog = (obj: CreatePlatformVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateStorageLocationResultMessageFilterSensitiveLog = (obj: CreateStorageLocationResultMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationMessageFilterSensitiveLog = (obj: DeleteApplicationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApplicationVersionMessageFilterSensitiveLog = (obj: DeleteApplicationVersionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConfigurationTemplateMessageFilterSensitiveLog = (obj: DeleteConfigurationTemplateMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEnvironmentConfigurationMessageFilterSensitiveLog = (
  obj: DeleteEnvironmentConfigurationMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlatformVersionRequestFilterSensitiveLog = (obj: DeletePlatformVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePlatformVersionResultFilterSensitiveLog = (obj: DeletePlatformVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceQuotaFilterSensitiveLog = (obj: ResourceQuota): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceQuotasFilterSensitiveLog = (obj: ResourceQuotas): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountAttributesResultFilterSensitiveLog = (obj: DescribeAccountAttributesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationsMessageFilterSensitiveLog = (obj: DescribeApplicationsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationVersionsMessageFilterSensitiveLog = (obj: DescribeApplicationVersionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionRestrictionRegexFilterSensitiveLog = (obj: OptionRestrictionRegex): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationOptionDescriptionFilterSensitiveLog = (obj: ConfigurationOptionDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationOptionsDescriptionFilterSensitiveLog = (obj: ConfigurationOptionsDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationOptionsMessageFilterSensitiveLog = (
  obj: DescribeConfigurationOptionsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSettingsDescriptionsFilterSensitiveLog = (obj: ConfigurationSettingsDescriptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConfigurationSettingsMessageFilterSensitiveLog = (
  obj: DescribeConfigurationSettingsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentHealthRequestFilterSensitiveLog = (obj: DescribeEnvironmentHealthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceHealthSummaryFilterSensitiveLog = (obj: InstanceHealthSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentHealthResultFilterSensitiveLog = (obj: DescribeEnvironmentHealthResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentManagedActionHistoryRequestFilterSensitiveLog = (
  obj: DescribeEnvironmentManagedActionHistoryRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedActionHistoryItemFilterSensitiveLog = (obj: ManagedActionHistoryItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentManagedActionHistoryResultFilterSensitiveLog = (
  obj: DescribeEnvironmentManagedActionHistoryResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentManagedActionsRequestFilterSensitiveLog = (
  obj: DescribeEnvironmentManagedActionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ManagedActionFilterSensitiveLog = (obj: ManagedAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentManagedActionsResultFilterSensitiveLog = (
  obj: DescribeEnvironmentManagedActionsResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentResourcesMessageFilterSensitiveLog = (
  obj: DescribeEnvironmentResourcesMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationFilterSensitiveLog = (obj: LaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateFilterSensitiveLog = (obj: LaunchTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerFilterSensitiveLog = (obj: LoadBalancer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const QueueFilterSensitiveLog = (obj: Queue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TriggerFilterSensitiveLog = (obj: Trigger): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentResourceDescriptionFilterSensitiveLog = (obj: EnvironmentResourceDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentResourceDescriptionsMessageFilterSensitiveLog = (
  obj: EnvironmentResourceDescriptionsMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEnvironmentsMessageFilterSensitiveLog = (obj: DescribeEnvironmentsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventsMessageFilterSensitiveLog = (obj: DescribeEventsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDescriptionFilterSensitiveLog = (obj: EventDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventDescriptionsMessageFilterSensitiveLog = (obj: EventDescriptionsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesHealthRequestFilterSensitiveLog = (obj: DescribeInstancesHealthRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeploymentFilterSensitiveLog = (obj: Deployment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CPUUtilizationFilterSensitiveLog = (obj: CPUUtilization): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SystemStatusFilterSensitiveLog = (obj: SystemStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SingleInstanceHealthFilterSensitiveLog = (obj: SingleInstanceHealth): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstancesHealthResultFilterSensitiveLog = (obj: DescribeInstancesHealthResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlatformVersionRequestFilterSensitiveLog = (obj: DescribePlatformVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomAmiFilterSensitiveLog = (obj: CustomAmi): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformFrameworkFilterSensitiveLog = (obj: PlatformFramework): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformProgrammingLanguageFilterSensitiveLog = (obj: PlatformProgrammingLanguage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformDescriptionFilterSensitiveLog = (obj: PlatformDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePlatformVersionResultFilterSensitiveLog = (obj: DescribePlatformVersionResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateEnvironmentOperationsRoleMessageFilterSensitiveLog = (
  obj: DisassociateEnvironmentOperationsRoleMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAvailableSolutionStacksResultMessageFilterSensitiveLog = (
  obj: ListAvailableSolutionStacksResultMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchFilterFilterSensitiveLog = (obj: SearchFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformBranchesRequestFilterSensitiveLog = (obj: ListPlatformBranchesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformBranchSummaryFilterSensitiveLog = (obj: PlatformBranchSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformBranchesResultFilterSensitiveLog = (obj: ListPlatformBranchesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlatformFilterFilterSensitiveLog = (obj: PlatformFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformVersionsRequestFilterSensitiveLog = (obj: ListPlatformVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPlatformVersionsResultFilterSensitiveLog = (obj: ListPlatformVersionsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceMessageFilterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceTagsDescriptionMessageFilterSensitiveLog = (obj: ResourceTagsDescriptionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RebuildEnvironmentMessageFilterSensitiveLog = (obj: RebuildEnvironmentMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RequestEnvironmentInfoMessageFilterSensitiveLog = (obj: RequestEnvironmentInfoMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RestartAppServerMessageFilterSensitiveLog = (obj: RestartAppServerMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveEnvironmentInfoMessageFilterSensitiveLog = (obj: RetrieveEnvironmentInfoMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnvironmentInfoDescriptionFilterSensitiveLog = (obj: EnvironmentInfoDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetrieveEnvironmentInfoResultMessageFilterSensitiveLog = (
  obj: RetrieveEnvironmentInfoResultMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SwapEnvironmentCNAMEsMessageFilterSensitiveLog = (obj: SwapEnvironmentCNAMEsMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateEnvironmentMessageFilterSensitiveLog = (obj: TerminateEnvironmentMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationMessageFilterSensitiveLog = (obj: UpdateApplicationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationResourceLifecycleMessageFilterSensitiveLog = (
  obj: UpdateApplicationResourceLifecycleMessage
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApplicationVersionMessageFilterSensitiveLog = (obj: UpdateApplicationVersionMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConfigurationTemplateMessageFilterSensitiveLog = (obj: UpdateConfigurationTemplateMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateEnvironmentMessageFilterSensitiveLog = (obj: UpdateEnvironmentMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateTagsForResourceMessageFilterSensitiveLog = (obj: UpdateTagsForResourceMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationMessageFilterSensitiveLog = (obj: ValidationMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConfigurationSettingsValidationMessagesFilterSensitiveLog = (
  obj: ConfigurationSettingsValidationMessages
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidateConfigurationSettingsMessageFilterSensitiveLog = (
  obj: ValidateConfigurationSettingsMessage
): any => ({
  ...obj,
});
