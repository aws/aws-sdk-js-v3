import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p></p>
 */
export interface AbortEnvironmentUpdateMessage {
  __type?: "AbortEnvironmentUpdateMessage";
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

export namespace AbortEnvironmentUpdateMessage {
  export const filterSensitiveLog = (
    obj: AbortEnvironmentUpdateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AbortEnvironmentUpdateMessage =>
    __isa(o, "AbortEnvironmentUpdateMessage");
}

export type ActionHistoryStatus = "Completed" | "Failed" | "Unknown";

export type ActionStatus = "Pending" | "Running" | "Scheduled" | "Unknown";

export type ActionType = "InstanceRefresh" | "PlatformUpdate" | "Unknown";

/**
 * <p>Describes the properties of an application.</p>
 */
export interface ApplicationDescription {
  __type?: "ApplicationDescription";
  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  ApplicationArn?: string;

  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The names of the configuration templates associated with this application.</p>
   */
  ConfigurationTemplates?: string[];

  /**
   * <p>The date when the application was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the application was last modified.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>User-defined description of the application.</p>
   */
  Description?: string;

  /**
   * <p>The lifecycle settings for the application.</p>
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;

  /**
   * <p>The names of the versions for this application.</p>
   */
  Versions?: string[];
}

export namespace ApplicationDescription {
  export const filterSensitiveLog = (obj: ApplicationDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationDescription =>
    __isa(o, "ApplicationDescription");
}

/**
 * <p>Result message containing a single description of an application.</p>
 */
export interface ApplicationDescriptionMessage {
  __type?: "ApplicationDescriptionMessage";
  /**
   * <p> The <a>ApplicationDescription</a> of the application. </p>
   */
  Application?: ApplicationDescription;
}

export namespace ApplicationDescriptionMessage {
  export const filterSensitiveLog = (
    obj: ApplicationDescriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationDescriptionMessage =>
    __isa(o, "ApplicationDescriptionMessage");
}

/**
 * <p>Result message containing a list of application descriptions.</p>
 */
export interface ApplicationDescriptionsMessage {
  __type?: "ApplicationDescriptionsMessage";
  /**
   * <p>This parameter contains a list of <a>ApplicationDescription</a>.</p>
   */
  Applications?: ApplicationDescription[];
}

export namespace ApplicationDescriptionsMessage {
  export const filterSensitiveLog = (
    obj: ApplicationDescriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationDescriptionsMessage =>
    __isa(o, "ApplicationDescriptionsMessage");
}

/**
 * <p>Application request metrics for an AWS Elastic Beanstalk environment.</p>
 */
export interface ApplicationMetrics {
  __type?: "ApplicationMetrics";
  /**
   * <p>The amount of time that the metrics cover (usually 10 seconds). For example, you might
   *       have 5 requests (<code>request_count</code>) within the most recent time slice of 10 seconds
   *         (<code>duration</code>).</p>
   */
  Duration?: number;

  /**
   * <p>Represents the average latency for the slowest X percent of requests over the last 10
   *       seconds. Latencies are in seconds with one millisecond resolution.</p>
   */
  Latency?: Latency;

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
}

export namespace ApplicationMetrics {
  export const filterSensitiveLog = (obj: ApplicationMetrics): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationMetrics =>
    __isa(o, "ApplicationMetrics");
}

/**
 * <p>The resource lifecycle configuration for an application. Defines lifecycle settings for
 *       resources that belong to the application, and the service role that Elastic Beanstalk assumes
 *       in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle
 *       settings for application versions.</p>
 */
export interface ApplicationResourceLifecycleConfig {
  __type?: "ApplicationResourceLifecycleConfig";
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
   * <p>The application version lifecycle configuration.</p>
   */
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig;
}

export namespace ApplicationResourceLifecycleConfig {
  export const filterSensitiveLog = (
    obj: ApplicationResourceLifecycleConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationResourceLifecycleConfig =>
    __isa(o, "ApplicationResourceLifecycleConfig");
}

export interface ApplicationResourceLifecycleDescriptionMessage {
  __type?: "ApplicationResourceLifecycleDescriptionMessage";
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The lifecycle configuration.</p>
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig;
}

export namespace ApplicationResourceLifecycleDescriptionMessage {
  export const filterSensitiveLog = (
    obj: ApplicationResourceLifecycleDescriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is ApplicationResourceLifecycleDescriptionMessage =>
    __isa(o, "ApplicationResourceLifecycleDescriptionMessage");
}

/**
 * <p>Describes the properties of an application version.</p>
 */
export interface ApplicationVersionDescription {
  __type?: "ApplicationVersionDescription";
  /**
   * <p>The name of the application to which the application version belongs.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application version.</p>
   */
  ApplicationVersionArn?: string;

  /**
   * <p>Reference to the artifact from the AWS CodeBuild build.</p>
   */
  BuildArn?: string;

  /**
   * <p>The creation date of the application version.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The last modified date of the application version.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The description of the application version.</p>
   */
  Description?: string;

  /**
   * <p>If the version's source code was retrieved from AWS CodeCommit, the location of the
   *       source code for the application version.</p>
   */
  SourceBuildInformation?: SourceBuildInformation;

  /**
   * <p>The storage location of the application version's source bundle in Amazon S3.</p>
   */
  SourceBundle?: S3Location;

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

  /**
   * <p>A unique identifier for the application version.</p>
   */
  VersionLabel?: string;
}

export namespace ApplicationVersionDescription {
  export const filterSensitiveLog = (
    obj: ApplicationVersionDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationVersionDescription =>
    __isa(o, "ApplicationVersionDescription");
}

/**
 * <p>Result message wrapping a single description of an application version.</p>
 */
export interface ApplicationVersionDescriptionMessage {
  __type?: "ApplicationVersionDescriptionMessage";
  /**
   * <p> The <a>ApplicationVersionDescription</a> of the application version.
   *     </p>
   */
  ApplicationVersion?: ApplicationVersionDescription;
}

export namespace ApplicationVersionDescriptionMessage {
  export const filterSensitiveLog = (
    obj: ApplicationVersionDescriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationVersionDescriptionMessage =>
    __isa(o, "ApplicationVersionDescriptionMessage");
}

/**
 * <p>Result message wrapping a list of application version descriptions.</p>
 */
export interface ApplicationVersionDescriptionsMessage {
  __type?: "ApplicationVersionDescriptionsMessage";
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

export namespace ApplicationVersionDescriptionsMessage {
  export const filterSensitiveLog = (
    obj: ApplicationVersionDescriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationVersionDescriptionsMessage =>
    __isa(o, "ApplicationVersionDescriptionsMessage");
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
  __type?: "ApplicationVersionLifecycleConfig";
  /**
   * <p>Specify a max age rule to restrict the length of time that application versions are
   *       retained for an application.</p>
   */
  MaxAgeRule?: MaxAgeRule;

  /**
   * <p>Specify a max count rule to restrict the number of application versions that are
   *       retained for an application.</p>
   */
  MaxCountRule?: MaxCountRule;
}

export namespace ApplicationVersionLifecycleConfig {
  export const filterSensitiveLog = (
    obj: ApplicationVersionLifecycleConfig
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationVersionLifecycleConfig =>
    __isa(o, "ApplicationVersionLifecycleConfig");
}

export type ApplicationVersionStatus =
  | "Building"
  | "Failed"
  | "Processed"
  | "Processing"
  | "Unprocessed";

/**
 * <p>Request to execute a scheduled managed action immediately.</p>
 */
export interface ApplyEnvironmentManagedActionRequest {
  __type?: "ApplyEnvironmentManagedActionRequest";
  /**
   * <p>The action ID of the scheduled managed action to execute.</p>
   */
  ActionId: string | undefined;

  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;
}

export namespace ApplyEnvironmentManagedActionRequest {
  export const filterSensitiveLog = (
    obj: ApplyEnvironmentManagedActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyEnvironmentManagedActionRequest =>
    __isa(o, "ApplyEnvironmentManagedActionRequest");
}

/**
 * <p>The result message containing information about the managed action.</p>
 */
export interface ApplyEnvironmentManagedActionResult {
  __type?: "ApplyEnvironmentManagedActionResult";
  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>The action ID of the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>The type of managed action.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>The status of the managed action.</p>
   */
  Status?: string;
}

export namespace ApplyEnvironmentManagedActionResult {
  export const filterSensitiveLog = (
    obj: ApplyEnvironmentManagedActionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplyEnvironmentManagedActionResult =>
    __isa(o, "ApplyEnvironmentManagedActionResult");
}

/**
 * <p>Describes an Auto Scaling launch configuration.</p>
 */
export interface AutoScalingGroup {
  __type?: "AutoScalingGroup";
  /**
   * <p>The name of the <code>AutoScalingGroup</code> . </p>
   */
  Name?: string;
}

export namespace AutoScalingGroup {
  export const filterSensitiveLog = (obj: AutoScalingGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingGroup =>
    __isa(o, "AutoScalingGroup");
}

/**
 * <p>Settings for an AWS CodeBuild build.</p>
 */
export interface BuildConfiguration {
  __type?: "BuildConfiguration";
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
   * 	              <p>
   *                   <code>BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds</code>
   *                </p>
   *             </li>
   *             <li>
   * 	              <p>
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

export namespace BuildConfiguration {
  export const filterSensitiveLog = (obj: BuildConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is BuildConfiguration =>
    __isa(o, "BuildConfiguration");
}

/**
 * <p>The builder used to build the custom platform.</p>
 */
export interface Builder {
  __type?: "Builder";
  /**
   * <p>The ARN of the builder.</p>
   */
  ARN?: string;
}

export namespace Builder {
  export const filterSensitiveLog = (obj: Builder): any => ({
    ...obj
  });
  export const isa = (o: any): o is Builder => __isa(o, "Builder");
}

/**
 * <p>Results message indicating whether a CNAME is available.</p>
 */
export interface CheckDNSAvailabilityMessage {
  __type?: "CheckDNSAvailabilityMessage";
  /**
   * <p>The prefix used when this CNAME is reserved.</p>
   */
  CNAMEPrefix: string | undefined;
}

export namespace CheckDNSAvailabilityMessage {
  export const filterSensitiveLog = (
    obj: CheckDNSAvailabilityMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckDNSAvailabilityMessage =>
    __isa(o, "CheckDNSAvailabilityMessage");
}

/**
 * <p>Indicates if the specified CNAME is available.</p>
 */
export interface CheckDNSAvailabilityResultMessage {
  __type?: "CheckDNSAvailabilityResultMessage";
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

export namespace CheckDNSAvailabilityResultMessage {
  export const filterSensitiveLog = (
    obj: CheckDNSAvailabilityResultMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CheckDNSAvailabilityResultMessage =>
    __isa(o, "CheckDNSAvailabilityResultMessage");
}

/**
 * <p>AWS CodeBuild is not available in the specified region.</p>
 */
export interface CodeBuildNotInServiceRegionException
  extends __SmithyException,
    $MetadataBearer {
  name: "CodeBuildNotInServiceRegionException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace CodeBuildNotInServiceRegionException {
  export const filterSensitiveLog = (
    obj: CodeBuildNotInServiceRegionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeBuildNotInServiceRegionException =>
    __isa(o, "CodeBuildNotInServiceRegionException");
}

/**
 * <p>Request to create or update a group of environments.</p>
 */
export interface ComposeEnvironmentsMessage {
  __type?: "ComposeEnvironmentsMessage";
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

export namespace ComposeEnvironmentsMessage {
  export const filterSensitiveLog = (obj: ComposeEnvironmentsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ComposeEnvironmentsMessage =>
    __isa(o, "ComposeEnvironmentsMessage");
}

export enum ComputeType {
  BUILD_GENERAL1_LARGE = "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM = "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL = "BUILD_GENERAL1_SMALL"
}

export type ConfigurationDeploymentStatus = "deployed" | "failed" | "pending";

/**
 * <p>Describes the possible values for a configuration option.</p>
 */
export interface ConfigurationOptionDescription {
  __type?: "ConfigurationOptionDescription";
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
   * <p>The default value for this configuration option.</p>
   */
  DefaultValue?: string;

  /**
   * <p>If specified, the configuration option must be a string value no longer than this
   *       value.</p>
   */
  MaxLength?: number;

  /**
   * <p>If specified, the configuration option must be a numeric value less than this
   *       value.</p>
   */
  MaxValue?: number;

  /**
   * <p>If specified, the configuration option must be a numeric value greater than this
   *       value.</p>
   */
  MinValue?: number;

  /**
   * <p>The name of the configuration option.</p>
   */
  Name?: string;

  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>If specified, the configuration option must be a string value that satisfies this
   *       regular expression.</p>
   */
  Regex?: OptionRestrictionRegex;

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
   * <p>If specified, values for the configuration option are selected from this
   *       list.</p>
   */
  ValueOptions?: string[];

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
}

export namespace ConfigurationOptionDescription {
  export const filterSensitiveLog = (
    obj: ConfigurationOptionDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationOptionDescription =>
    __isa(o, "ConfigurationOptionDescription");
}

/**
 * <p>Describes the settings for a specified configuration set.</p>
 */
export interface ConfigurationOptionsDescription {
  __type?: "ConfigurationOptionsDescription";
  /**
   * <p> A list of <a>ConfigurationOptionDescription</a>. </p>
   */
  Options?: ConfigurationOptionDescription[];

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack these configuration options belong to.</p>
   */
  SolutionStackName?: string;
}

export namespace ConfigurationOptionsDescription {
  export const filterSensitiveLog = (
    obj: ConfigurationOptionsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationOptionsDescription =>
    __isa(o, "ConfigurationOptionsDescription");
}

/**
 * <p> A specification identifying an individual configuration option along with its current
 *       value. For a list of possible option values, go to <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html">Option Values</a> in the
 *       <i>AWS Elastic Beanstalk Developer Guide</i>. </p>
 */
export interface ConfigurationOptionSetting {
  __type?: "ConfigurationOptionSetting";
  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  OptionName?: string;

  /**
   * <p>A unique resource name for a time-based scaling configuration option.</p>
   */
  ResourceName?: string;

  /**
   * <p>The current value for the configuration option.</p>
   */
  Value?: string;
}

export namespace ConfigurationOptionSetting {
  export const filterSensitiveLog = (obj: ConfigurationOptionSetting): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationOptionSetting =>
    __isa(o, "ConfigurationOptionSetting");
}

export type ConfigurationOptionValueType = "List" | "Scalar";

/**
 * <p>Describes the settings for a configuration set.</p>
 */
export interface ConfigurationSettingsDescription {
  __type?: "ConfigurationSettingsDescription";
  /**
   * <p>The name of the application associated with this configuration set.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The date (in UTC time) when this configuration set was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date (in UTC time) when this configuration set was last modified.</p>
   */
  DateUpdated?: Date;

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
   * <p>Describes this configuration set.</p>
   */
  Description?: string;

  /**
   * <p> If not <code>null</code>, the name of the environment for this configuration set.
   *     </p>
   */
  EnvironmentName?: string;

  /**
   * <p>A list of the configuration options and their values in this configuration
   *       set.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack this configuration set uses.</p>
   */
  SolutionStackName?: string;

  /**
   * <p> If not <code>null</code>, the name of the configuration template for this
   *       configuration set. </p>
   */
  TemplateName?: string;
}

export namespace ConfigurationSettingsDescription {
  export const filterSensitiveLog = (
    obj: ConfigurationSettingsDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationSettingsDescription =>
    __isa(o, "ConfigurationSettingsDescription");
}

/**
 * <p>The results from a request to change the configuration settings of an
 *       environment.</p>
 */
export interface ConfigurationSettingsDescriptions {
  __type?: "ConfigurationSettingsDescriptions";
  /**
   * <p> A list of <a>ConfigurationSettingsDescription</a>. </p>
   */
  ConfigurationSettings?: ConfigurationSettingsDescription[];
}

export namespace ConfigurationSettingsDescriptions {
  export const filterSensitiveLog = (
    obj: ConfigurationSettingsDescriptions
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationSettingsDescriptions =>
    __isa(o, "ConfigurationSettingsDescriptions");
}

/**
 * <p>Provides a list of validation messages.</p>
 */
export interface ConfigurationSettingsValidationMessages {
  __type?: "ConfigurationSettingsValidationMessages";
  /**
   * <p> A list of <a>ValidationMessage</a>. </p>
   */
  Messages?: ValidationMessage[];
}

export namespace ConfigurationSettingsValidationMessages {
  export const filterSensitiveLog = (
    obj: ConfigurationSettingsValidationMessages
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfigurationSettingsValidationMessages =>
    __isa(o, "ConfigurationSettingsValidationMessages");
}

/**
 * <p>CPU utilization metrics for an instance.</p>
 */
export interface CPUUtilization {
  __type?: "CPUUtilization";
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
   * <p>Percentage of time that the CPU has spent in the <code>Idle</code> state over the last
   *       10 seconds.</p>
   */
  Idle?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>Nice</code> state over the last
   *       10 seconds.</p>
   */
  Nice?: number;

  /**
   * <p>Available on Windows environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>Privileged</code> state over the
   *       last 10 seconds.</p>
   */
  Privileged?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>SoftIRQ</code> state over the
   *       last 10 seconds.</p>
   */
  SoftIRQ?: number;

  /**
   * <p>Available on Linux environments only.</p>
   *          <p>Percentage of time that the CPU has spent in the <code>System</code> state over the
   *       last 10 seconds.</p>
   */
  System?: number;

  /**
   * <p>Percentage of time that the CPU has spent in the <code>User</code> state over the last
   *       10 seconds.</p>
   */
  User?: number;
}

export namespace CPUUtilization {
  export const filterSensitiveLog = (obj: CPUUtilization): any => ({
    ...obj
  });
  export const isa = (o: any): o is CPUUtilization =>
    __isa(o, "CPUUtilization");
}

/**
 * <p>Request to create an application.</p>
 */
export interface CreateApplicationMessage {
  __type?: "CreateApplicationMessage";
  /**
   * <p>The name of the application.</p>
   *          <p>Constraint: This name must be unique within your account. If the specified name already
   *       exists, the action returns an <code>InvalidParameterValue</code> error.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes the application.</p>
   */
  Description?: string;

  /**
   * <p>Specify an application resource lifecycle configuration to prevent your application
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

export namespace CreateApplicationMessage {
  export const filterSensitiveLog = (obj: CreateApplicationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationMessage =>
    __isa(o, "CreateApplicationMessage");
}

/**
 * <p></p>
 */
export interface CreateApplicationVersionMessage {
  __type?: "CreateApplicationVersionMessage";
  /**
   * <p> The name of the application. If no application is found with this name, and
   *         <code>AutoCreateApplication</code> is <code>false</code>, returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Set to <code>true</code> to create an application with the specified name if it doesn't
   *       already exist.</p>
   */
  AutoCreateApplication?: boolean;

  /**
   * <p>Settings for an AWS CodeBuild build.</p>
   */
  BuildConfiguration?: BuildConfiguration;

  /**
   * <p>Describes this version.</p>
   */
  Description?: string;

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
   * <p>Specifies the tags applied to the application version.</p>
   *          <p>Elastic Beanstalk applies these tags only to the application version. Environments that use the
   *       application version don't inherit the tags.</p>
   */
  Tags?: Tag[];

  /**
   * <p>A label identifying this version.</p>
   *          <p>Constraint: Must be unique per application. If an application version already exists
   *       with this label for the specified application, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel: string | undefined;
}

export namespace CreateApplicationVersionMessage {
  export const filterSensitiveLog = (
    obj: CreateApplicationVersionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateApplicationVersionMessage =>
    __isa(o, "CreateApplicationVersionMessage");
}

/**
 * <p>Request to create a configuration template.</p>
 */
export interface CreateConfigurationTemplateMessage {
  __type?: "CreateConfigurationTemplateMessage";
  /**
   * <p>The name of the application to associate with this configuration template. If no
   *       application is found with this name, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Describes this configuration.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the environment used with this configuration template.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk sets the specified configuration option to the
   *       requested value. The new value overrides the value obtained from the solution stack or the
   *       source configuration template.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>The ARN of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack used by this configuration. The solution stack specifies
   *       the operating system, architecture, and application server for a configuration template. It
   *       determines the set of configuration options as well as the possible and default
   *       values.</p>
   *
   *          <p> Use <a>ListAvailableSolutionStacks</a> to obtain a list of available
   *       solution stacks. </p>
   *          <p> A solution stack name or a source configuration parameter must be specified, otherwise
   *       AWS Elastic Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   *          <p>If a solution stack name is not specified and the source configuration parameter is
   *       specified, AWS Elastic Beanstalk uses the same solution stack as the source configuration
   *       template.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk uses the configuration values from the specified
   *       configuration template to create a new configuration.</p>
   *          <p> Values specified in the <code>OptionSettings</code> parameter of this call overrides
   *       any values obtained from the <code>SourceConfiguration</code>. </p>
   *
   *          <p> If no configuration template is found, returns an <code>InvalidParameterValue</code>
   *       error. </p>
   *          <p> Constraint: If both the solution stack name parameter and the source configuration
   *       parameters are specified, the solution stack of the source configuration template must match
   *       the specified solution stack name or else AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterCombination</code> error. </p>
   */
  SourceConfiguration?: SourceConfiguration;

  /**
   * <p>Specifies the tags applied to the configuration template.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of the configuration template.</p>
   *
   *          <p>Constraint: This name must be unique per application.</p>
   *          <p>Default: If a configuration template already exists with this name, AWS Elastic
   *       Beanstalk returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName: string | undefined;
}

export namespace CreateConfigurationTemplateMessage {
  export const filterSensitiveLog = (
    obj: CreateConfigurationTemplateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConfigurationTemplateMessage =>
    __isa(o, "CreateConfigurationTemplateMessage");
}

/**
 * <p></p>
 */
export interface CreateEnvironmentMessage {
  __type?: "CreateEnvironmentMessage";
  /**
   * <p>The name of the application that contains the version to be deployed.</p>
   *          <p> If no application is found with this name, <code>CreateEnvironment</code> returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>If specified, the environment attempts to use this value as the prefix for the CNAME.
   *       If not specified, the CNAME is generated automatically by appending a random alphanumeric
   *       string to the environment name.</p>
   */
  CNAMEPrefix?: string;

  /**
   * <p>Describes this environment.</p>
   */
  Description?: string;

  /**
   * <p>A unique name for the deployment environment. Used in the application URL.</p>
   *          <p>Constraint: Must be from 4 to 40 characters in length. The name can contain only
   *       letters, numbers, and hyphens. It cannot start or end with a hyphen. This name must be unique
   *       within a region in your account. If the specified name already exists in the region, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   *          <p>Default: If the CNAME parameter is not specified, the environment name becomes part of
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
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>This is an alternative to specifying a template name. If specified, AWS Elastic
   *       Beanstalk sets the configuration values to the default values associated with the specified
   *       solution stack.</p>
   *          <p>For a list of current solution stacks, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html">Elastic Beanstalk Supported
   *         Platforms</a>.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>Specifies the tags applied to resources in the environment.</p>
   */
  Tags?: Tag[];

  /**
   * <p> The name of the configuration template to use in deployment. If no configuration
   *       template is found with this name, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName?: string;

  /**
   * <p>This specifies the tier to use for creating this environment.</p>
   */
  Tier?: EnvironmentTier;

  /**
   * <p>The name of the application version to deploy.</p>
   *          <p> If the specified application has no associated application versions, AWS Elastic
   *       Beanstalk <code>UpdateEnvironment</code> returns an <code>InvalidParameterValue</code> error. </p>
   *          <p>Default: If not specified, AWS Elastic Beanstalk attempts to launch the sample
   *       application in the container.</p>
   */
  VersionLabel?: string;
}

export namespace CreateEnvironmentMessage {
  export const filterSensitiveLog = (obj: CreateEnvironmentMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateEnvironmentMessage =>
    __isa(o, "CreateEnvironmentMessage");
}

/**
 * <p>Request to create a new platform version.</p>
 */
export interface CreatePlatformVersionRequest {
  __type?: "CreatePlatformVersionRequest";
  /**
   * <p>The name of the builder environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The configuration option settings to apply to the builder environment.</p>
   */
  OptionSettings?: ConfigurationOptionSetting[];

  /**
   * <p>The location of the platform definition archive in Amazon S3.</p>
   */
  PlatformDefinitionBundle: S3Location | undefined;

  /**
   * <p>The name of your custom platform.</p>
   */
  PlatformName: string | undefined;

  /**
   * <p>The number, such as 1.0.2, for the new platform version.</p>
   */
  PlatformVersion: string | undefined;

  /**
   * <p>Specifies the tags applied to the new platform version.</p>
   *          <p>Elastic Beanstalk applies these tags only to the platform version. Environments that you create using
   *       the platform version don't inherit the tags.</p>
   */
  Tags?: Tag[];
}

export namespace CreatePlatformVersionRequest {
  export const filterSensitiveLog = (
    obj: CreatePlatformVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePlatformVersionRequest =>
    __isa(o, "CreatePlatformVersionRequest");
}

export interface CreatePlatformVersionResult {
  __type?: "CreatePlatformVersionResult";
  /**
   * <p>The builder used to create the custom platform.</p>
   */
  Builder?: Builder;

  /**
   * <p>Detailed information about the new version of the custom platform.</p>
   */
  PlatformSummary?: PlatformSummary;
}

export namespace CreatePlatformVersionResult {
  export const filterSensitiveLog = (
    obj: CreatePlatformVersionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePlatformVersionResult =>
    __isa(o, "CreatePlatformVersionResult");
}

/**
 * <p>Results of a <a>CreateStorageLocationResult</a> call.</p>
 */
export interface CreateStorageLocationResultMessage {
  __type?: "CreateStorageLocationResultMessage";
  /**
   * <p>The name of the Amazon S3 bucket created.</p>
   */
  S3Bucket?: string;
}

export namespace CreateStorageLocationResultMessage {
  export const filterSensitiveLog = (
    obj: CreateStorageLocationResultMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateStorageLocationResultMessage =>
    __isa(o, "CreateStorageLocationResultMessage");
}

/**
 * <p>A custom AMI available to platforms.</p>
 */
export interface CustomAmi {
  __type?: "CustomAmi";
  /**
   * <p>THe ID of the image used to create the custom AMI.</p>
   */
  ImageId?: string;

  /**
   * <p>The type of virtualization used to create the custom AMI.</p>
   */
  VirtualizationType?: string;
}

export namespace CustomAmi {
  export const filterSensitiveLog = (obj: CustomAmi): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomAmi => __isa(o, "CustomAmi");
}

/**
 * <p>Request to delete an application.</p>
 */
export interface DeleteApplicationMessage {
  __type?: "DeleteApplicationMessage";
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

export namespace DeleteApplicationMessage {
  export const filterSensitiveLog = (obj: DeleteApplicationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationMessage =>
    __isa(o, "DeleteApplicationMessage");
}

/**
 * <p>Request to delete an application version.</p>
 */
export interface DeleteApplicationVersionMessage {
  __type?: "DeleteApplicationVersionMessage";
  /**
   * <p>The name of the application to which the version belongs.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>Set to <code>true</code> to delete the source bundle from your storage bucket.
   *       Otherwise, the application version is deleted only from Elastic Beanstalk and the source
   *       bundle remains in Amazon S3.</p>
   */
  DeleteSourceBundle?: boolean;

  /**
   * <p>The label of the version to delete.</p>
   */
  VersionLabel: string | undefined;
}

export namespace DeleteApplicationVersionMessage {
  export const filterSensitiveLog = (
    obj: DeleteApplicationVersionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteApplicationVersionMessage =>
    __isa(o, "DeleteApplicationVersionMessage");
}

/**
 * <p>Request to delete a configuration template.</p>
 */
export interface DeleteConfigurationTemplateMessage {
  __type?: "DeleteConfigurationTemplateMessage";
  /**
   * <p>The name of the application to delete the configuration template from.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the configuration template to delete.</p>
   */
  TemplateName: string | undefined;
}

export namespace DeleteConfigurationTemplateMessage {
  export const filterSensitiveLog = (
    obj: DeleteConfigurationTemplateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConfigurationTemplateMessage =>
    __isa(o, "DeleteConfigurationTemplateMessage");
}

/**
 * <p>Request to delete a draft environment configuration.</p>
 */
export interface DeleteEnvironmentConfigurationMessage {
  __type?: "DeleteEnvironmentConfigurationMessage";
  /**
   * <p>The name of the application the environment is associated with.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the environment to delete the draft configuration from.</p>
   */
  EnvironmentName: string | undefined;
}

export namespace DeleteEnvironmentConfigurationMessage {
  export const filterSensitiveLog = (
    obj: DeleteEnvironmentConfigurationMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteEnvironmentConfigurationMessage =>
    __isa(o, "DeleteEnvironmentConfigurationMessage");
}

export interface DeletePlatformVersionRequest {
  __type?: "DeletePlatformVersionRequest";
  /**
   * <p>The ARN of the version of the custom platform.</p>
   */
  PlatformArn?: string;
}

export namespace DeletePlatformVersionRequest {
  export const filterSensitiveLog = (
    obj: DeletePlatformVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePlatformVersionRequest =>
    __isa(o, "DeletePlatformVersionRequest");
}

export interface DeletePlatformVersionResult {
  __type?: "DeletePlatformVersionResult";
  /**
   * <p>Detailed information about the version of the custom platform.</p>
   */
  PlatformSummary?: PlatformSummary;
}

export namespace DeletePlatformVersionResult {
  export const filterSensitiveLog = (
    obj: DeletePlatformVersionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePlatformVersionResult =>
    __isa(o, "DeletePlatformVersionResult");
}

/**
 * <p>Information about an application version deployment.</p>
 */
export interface Deployment {
  __type?: "Deployment";
  /**
   * <p>The ID of the deployment. This number increases by one each time that you deploy source
   *       code or change instance configuration settings.</p>
   */
  DeploymentId?: number;

  /**
   * <p>For in-progress deployments, the time that the deployment started.</p>
   *          <p>For completed deployments, the time that the deployment ended.</p>
   */
  DeploymentTime?: Date;

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
   * <p>The version label of the application version in the deployment.</p>
   */
  VersionLabel?: string;
}

export namespace Deployment {
  export const filterSensitiveLog = (obj: Deployment): any => ({
    ...obj
  });
  export const isa = (o: any): o is Deployment => __isa(o, "Deployment");
}

export interface DescribeAccountAttributesResult {
  __type?: "DescribeAccountAttributesResult";
  /**
   * <p>The Elastic Beanstalk resource quotas associated with the calling AWS account.</p>
   */
  ResourceQuotas?: ResourceQuotas;
}

export namespace DescribeAccountAttributesResult {
  export const filterSensitiveLog = (
    obj: DescribeAccountAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountAttributesResult =>
    __isa(o, "DescribeAccountAttributesResult");
}

/**
 * <p>Request to describe one or more applications.</p>
 */
export interface DescribeApplicationsMessage {
  __type?: "DescribeApplicationsMessage";
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to only include
   *       those with the specified names.</p>
   */
  ApplicationNames?: string[];
}

export namespace DescribeApplicationsMessage {
  export const filterSensitiveLog = (
    obj: DescribeApplicationsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationsMessage =>
    __isa(o, "DescribeApplicationsMessage");
}

/**
 * <p>Request to describe application versions.</p>
 */
export interface DescribeApplicationVersionsMessage {
  __type?: "DescribeApplicationVersionsMessage";
  /**
   * <p>Specify an application name to show only application versions for that
   *       application.</p>
   */
  ApplicationName?: string;

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

  /**
   * <p>Specify a version label to show a specific application version.</p>
   */
  VersionLabels?: string[];
}

export namespace DescribeApplicationVersionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeApplicationVersionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationVersionsMessage =>
    __isa(o, "DescribeApplicationVersionsMessage");
}

/**
 * <p>Result message containing a list of application version descriptions.</p>
 */
export interface DescribeConfigurationOptionsMessage {
  __type?: "DescribeConfigurationOptionsMessage";
  /**
   * <p>The name of the application associated with the configuration template or environment.
   *       Only needed if you want to describe the configuration options associated with either the
   *       configuration template or environment.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the environment whose configuration options you want to describe.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>If specified, restricts the descriptions to only the specified options.</p>
   */
  Options?: OptionSpecification[];

  /**
   * <p>The ARN of the custom platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The name of the solution stack whose configuration options you want to
   *       describe.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The name of the configuration template whose configuration options you want to
   *       describe.</p>
   */
  TemplateName?: string;
}

export namespace DescribeConfigurationOptionsMessage {
  export const filterSensitiveLog = (
    obj: DescribeConfigurationOptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConfigurationOptionsMessage =>
    __isa(o, "DescribeConfigurationOptionsMessage");
}

/**
 * <p>Result message containing all of the configuration settings for a specified solution
 *       stack or configuration template.</p>
 */
export interface DescribeConfigurationSettingsMessage {
  __type?: "DescribeConfigurationSettingsMessage";
  /**
   * <p>The application for the environment or configuration template.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the environment to describe.</p>
   *          <p> Condition: You must specify either this or a TemplateName, but not both. If you
   *       specify both, AWS Elastic Beanstalk returns an <code>InvalidParameterCombination</code> error.
   *       If you do not specify either, AWS Elastic Beanstalk returns
   *         <code>MissingRequiredParameter</code> error. </p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the configuration template to describe.</p>
   *          <p> Conditional: You must specify either this parameter or an EnvironmentName, but not
   *       both. If you specify both, AWS Elastic Beanstalk returns an
   *         <code>InvalidParameterCombination</code> error. If you do not specify either, AWS Elastic
   *       Beanstalk returns a <code>MissingRequiredParameter</code> error. </p>
   */
  TemplateName?: string;
}

export namespace DescribeConfigurationSettingsMessage {
  export const filterSensitiveLog = (
    obj: DescribeConfigurationSettingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeConfigurationSettingsMessage =>
    __isa(o, "DescribeConfigurationSettingsMessage");
}

/**
 * <p>See the example below to learn how to create a request body.</p>
 */
export interface DescribeEnvironmentHealthRequest {
  __type?: "DescribeEnvironmentHealthRequest";
  /**
   * <p>Specify the response elements to return. To retrieve all attributes, set to
   *         <code>All</code>. If no attribute names are specified, returns the name of the
   *       environment.</p>
   */
  AttributeNames?: (EnvironmentHealthAttribute | string)[];

  /**
   * <p>Specify the environment by ID.</p>
   *          <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specify the environment by name.</p>
   *          <p>You must specify either this or an EnvironmentName, or both.</p>
   */
  EnvironmentName?: string;
}

export namespace DescribeEnvironmentHealthRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentHealthRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentHealthRequest =>
    __isa(o, "DescribeEnvironmentHealthRequest");
}

/**
 * <p>Health details for an AWS Elastic Beanstalk environment.</p>
 */
export interface DescribeEnvironmentHealthResult {
  __type?: "DescribeEnvironmentHealthResult";
  /**
   * <p>Application request metrics for the environment.</p>
   */
  ApplicationMetrics?: ApplicationMetrics;

  /**
   * <p>Descriptions of the data that contributed to the environment's current health
   *       status.</p>
   */
  Causes?: string[];

  /**
   * <p>The <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">health color</a> of the
   *       environment.</p>
   */
  Color?: string;

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
   * <p>Summary health information for the instances in the environment.</p>
   */
  InstancesHealth?: InstanceHealthSummary;

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;

  /**
   * <p>The environment's operational status. <code>Ready</code>, <code>Launching</code>,
   *         <code>Updating</code>, <code>Terminating</code>, or <code>Terminated</code>.</p>
   */
  Status?: EnvironmentHealth | string;
}

export namespace DescribeEnvironmentHealthResult {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentHealthResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentHealthResult =>
    __isa(o, "DescribeEnvironmentHealthResult");
}

/**
 * <p>Request to list completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryRequest {
  __type?: "DescribeEnvironmentManagedActionHistoryRequest";
  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The maximum number of items to return for a single request.</p>
   */
  MaxItems?: number;

  /**
   * <p>The pagination token returned by a previous request.</p>
   */
  NextToken?: string;
}

export namespace DescribeEnvironmentManagedActionHistoryRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentManagedActionHistoryRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEnvironmentManagedActionHistoryRequest =>
    __isa(o, "DescribeEnvironmentManagedActionHistoryRequest");
}

/**
 * <p>A result message containing a list of completed and failed managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionHistoryResult {
  __type?: "DescribeEnvironmentManagedActionHistoryResult";
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

export namespace DescribeEnvironmentManagedActionHistoryResult {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentManagedActionHistoryResult
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeEnvironmentManagedActionHistoryResult =>
    __isa(o, "DescribeEnvironmentManagedActionHistoryResult");
}

/**
 * <p>Request to list an environment's upcoming and in-progress managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionsRequest {
  __type?: "DescribeEnvironmentManagedActionsRequest";
  /**
   * <p>The environment ID of the target environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The name of the target environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>To show only actions with a particular status, specify a status.</p>
   */
  Status?: ActionStatus | string;
}

export namespace DescribeEnvironmentManagedActionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentManagedActionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentManagedActionsRequest =>
    __isa(o, "DescribeEnvironmentManagedActionsRequest");
}

/**
 * <p>The result message containing a list of managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionsResult {
  __type?: "DescribeEnvironmentManagedActionsResult";
  /**
   * <p>A list of upcoming and in-progress managed actions.</p>
   */
  ManagedActions?: ManagedAction[];
}

export namespace DescribeEnvironmentManagedActionsResult {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentManagedActionsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentManagedActionsResult =>
    __isa(o, "DescribeEnvironmentManagedActionsResult");
}

/**
 * <p>Request to describe the resources in an environment.</p>
 */
export interface DescribeEnvironmentResourcesMessage {
  __type?: "DescribeEnvironmentResourcesMessage";
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

export namespace DescribeEnvironmentResourcesMessage {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentResourcesMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentResourcesMessage =>
    __isa(o, "DescribeEnvironmentResourcesMessage");
}

/**
 * <p>Request to describe one or more environments.</p>
 */
export interface DescribeEnvironmentsMessage {
  __type?: "DescribeEnvironmentsMessage";
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that are associated with this application.</p>
   */
  ApplicationName?: string;

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

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those that are associated with this application version.</p>
   */
  VersionLabel?: string;
}

export namespace DescribeEnvironmentsMessage {
  export const filterSensitiveLog = (
    obj: DescribeEnvironmentsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEnvironmentsMessage =>
    __isa(o, "DescribeEnvironmentsMessage");
}

/**
 * <p>Request to retrieve a list of events for an environment.</p>
 */
export interface DescribeEventsMessage {
  __type?: "DescribeEventsMessage";
  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to include only
   *       those associated with this application.</p>
   */
  ApplicationName?: string;

  /**
   * <p> If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that
   *       occur up to, but not including, the <code>EndTime</code>. </p>
   */
  EndTime?: Date;

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
   * <p>Specifies the maximum number of events that can be returned, beginning with the most
   *       recent event.</p>
   */
  MaxRecords?: number;

  /**
   * <p>Pagination token. If specified, the events return the next batch of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The ARN of the version of the custom platform.</p>
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
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those that
   *       are associated with this environment configuration.</p>
   */
  TemplateName?: string;

  /**
   * <p>If specified, AWS Elastic Beanstalk restricts the returned descriptions to those
   *       associated with this application version.</p>
   */
  VersionLabel?: string;
}

export namespace DescribeEventsMessage {
  export const filterSensitiveLog = (obj: DescribeEventsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeEventsMessage =>
    __isa(o, "DescribeEventsMessage");
}

/**
 * <p>Parameters for a call to <code>DescribeInstancesHealth</code>.</p>
 */
export interface DescribeInstancesHealthRequest {
  __type?: "DescribeInstancesHealthRequest";
  /**
   * <p>Specifies the response elements you wish to receive. To retrieve all attributes, set to
   *         <code>All</code>. If no attribute names are specified, returns a list of
   *       instances.</p>
   */
  AttributeNames?: (InstancesHealthAttribute | string)[];

  /**
   * <p>Specify the AWS Elastic Beanstalk environment by ID.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>Specify the AWS Elastic Beanstalk environment by name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>Specify the pagination token returned by a previous call.</p>
   */
  NextToken?: string;
}

export namespace DescribeInstancesHealthRequest {
  export const filterSensitiveLog = (
    obj: DescribeInstancesHealthRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstancesHealthRequest =>
    __isa(o, "DescribeInstancesHealthRequest");
}

/**
 * <p>Detailed health information about the Amazon EC2 instances in an AWS Elastic Beanstalk
 *       environment.</p>
 */
export interface DescribeInstancesHealthResult {
  __type?: "DescribeInstancesHealthResult";
  /**
   * <p>Detailed health information about each instance.</p>
   *          <p>The output differs slightly between Linux and Windows environments. There is a difference
   *       in the members that are supported under the <code><CPUUtilization></code> type.</p>
   */
  InstanceHealthList?: SingleInstanceHealth[];

  /**
   * <p>Pagination token for the next page of results, if available.</p>
   */
  NextToken?: string;

  /**
   * <p>The date and time that the health information was retrieved.</p>
   */
  RefreshedAt?: Date;
}

export namespace DescribeInstancesHealthResult {
  export const filterSensitiveLog = (
    obj: DescribeInstancesHealthResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeInstancesHealthResult =>
    __isa(o, "DescribeInstancesHealthResult");
}

export interface DescribePlatformVersionRequest {
  __type?: "DescribePlatformVersionRequest";
  /**
   * <p>The ARN of the version of the platform.</p>
   */
  PlatformArn?: string;
}

export namespace DescribePlatformVersionRequest {
  export const filterSensitiveLog = (
    obj: DescribePlatformVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePlatformVersionRequest =>
    __isa(o, "DescribePlatformVersionRequest");
}

export interface DescribePlatformVersionResult {
  __type?: "DescribePlatformVersionResult";
  /**
   * <p>Detailed information about the version of the platform.</p>
   */
  PlatformDescription?: PlatformDescription;
}

export namespace DescribePlatformVersionResult {
  export const filterSensitiveLog = (
    obj: DescribePlatformVersionResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePlatformVersionResult =>
    __isa(o, "DescribePlatformVersionResult");
}

/**
 * <p>A generic service exception has occurred.</p>
 */
export interface ElasticBeanstalkServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "ElasticBeanstalkServiceException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ElasticBeanstalkServiceException {
  export const filterSensitiveLog = (
    obj: ElasticBeanstalkServiceException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ElasticBeanstalkServiceException =>
    __isa(o, "ElasticBeanstalkServiceException");
}

/**
 * <p>Describes the properties of an environment.</p>
 */
export interface EnvironmentDescription {
  __type?: "EnvironmentDescription";
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
   * <p>The name of the application associated with this environment.</p>
   */
  ApplicationName?: string;

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
   * <p>Describes this environment.</p>
   */
  Description?: string;

  /**
   * <p>For load-balanced, autoscaling environments, the URL to the LoadBalancer. For
   *       single-instance environments, the IP address of the instance.</p>
   */
  EndpointURL?: string;

  /**
   * <p>The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.</p>
   */
  EnvironmentArn?: string;

  /**
   * <p>The ID of this environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>A list of links to other environments in the same group.</p>
   */
  EnvironmentLinks?: EnvironmentLink[];

  /**
   * <p>The name of this environment.</p>
   */
  EnvironmentName?: string;

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
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The description of the AWS resources used by this environment.</p>
   */
  Resources?: EnvironmentResourcesDescription;

  /**
   * <p> The name of the <code>SolutionStack</code> deployed with this environment. </p>
   */
  SolutionStackName?: string;

  /**
   * <p>The current operational status of the environment:</p>
   *
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
   * <p>The name of the configuration template used to originally launch this
   *       environment.</p>
   */
  TemplateName?: string;

  /**
   * <p>Describes the current tier of this environment.</p>
   */
  Tier?: EnvironmentTier;

  /**
   * <p>The application version deployed in this environment.</p>
   */
  VersionLabel?: string;
}

export namespace EnvironmentDescription {
  export const filterSensitiveLog = (obj: EnvironmentDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentDescription =>
    __isa(o, "EnvironmentDescription");
}

/**
 * <p>Result message containing a list of environment descriptions.</p>
 */
export interface EnvironmentDescriptionsMessage {
  __type?: "EnvironmentDescriptionsMessage";
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

export namespace EnvironmentDescriptionsMessage {
  export const filterSensitiveLog = (
    obj: EnvironmentDescriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentDescriptionsMessage =>
    __isa(o, "EnvironmentDescriptionsMessage");
}

export type EnvironmentHealth = "Green" | "Grey" | "Red" | "Yellow";

export enum EnvironmentHealthAttribute {
  All = "All",
  ApplicationMetrics = "ApplicationMetrics",
  Causes = "Causes",
  Color = "Color",
  HealthStatus = "HealthStatus",
  InstancesHealth = "InstancesHealth",
  RefreshedAt = "RefreshedAt",
  Status = "Status"
}

export type EnvironmentHealthStatus =
  | "Degraded"
  | "Info"
  | "NoData"
  | "Ok"
  | "Pending"
  | "Severe"
  | "Suspended"
  | "Unknown"
  | "Warning";

/**
 * <p>The information retrieved from the Amazon EC2 instances.</p>
 */
export interface EnvironmentInfoDescription {
  __type?: "EnvironmentInfoDescription";
  /**
   * <p>The Amazon EC2 Instance ID for this information.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The type of information retrieved.</p>
   */
  InfoType?: EnvironmentInfoType | string;

  /**
   * <p>The retrieved information. Currently contains a presigned Amazon S3 URL. The files are
   *       deleted after 15 minutes.</p>
   *          <p>Anyone in possession of this URL can access the files before they are deleted. Make the
   *       URL available only to trusted parties.</p>
   */
  Message?: string;

  /**
   * <p>The time stamp when this information was retrieved.</p>
   */
  SampleTimestamp?: Date;
}

export namespace EnvironmentInfoDescription {
  export const filterSensitiveLog = (obj: EnvironmentInfoDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentInfoDescription =>
    __isa(o, "EnvironmentInfoDescription");
}

export type EnvironmentInfoType = "bundle" | "tail";

/**
 * <p>A link to another environment, defined in the environment's manifest. Links provide
 *       connection information in system properties that can be used to connect to another environment
 *       in the same group. See <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html">Environment Manifest
 *         (env.yaml)</a> for details.</p>
 */
export interface EnvironmentLink {
  __type?: "EnvironmentLink";
  /**
   * <p>The name of the linked environment (the dependency).</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The name of the link.</p>
   */
  LinkName?: string;
}

export namespace EnvironmentLink {
  export const filterSensitiveLog = (obj: EnvironmentLink): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentLink =>
    __isa(o, "EnvironmentLink");
}

/**
 * <p>Describes the AWS resources in use by this environment. This data is live.</p>
 */
export interface EnvironmentResourceDescription {
  __type?: "EnvironmentResourceDescription";
  /**
   * <p> The <code>AutoScalingGroups</code> used by this environment. </p>
   */
  AutoScalingGroups?: AutoScalingGroup[];

  /**
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

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
   * <p>The queues used by this environment.</p>
   */
  Queues?: Queue[];

  /**
   * <p>The <code>AutoScaling</code> triggers in use by this environment. </p>
   */
  Triggers?: Trigger[];
}

export namespace EnvironmentResourceDescription {
  export const filterSensitiveLog = (
    obj: EnvironmentResourceDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentResourceDescription =>
    __isa(o, "EnvironmentResourceDescription");
}

/**
 * <p>Result message containing a list of environment resource descriptions.</p>
 */
export interface EnvironmentResourceDescriptionsMessage {
  __type?: "EnvironmentResourceDescriptionsMessage";
  /**
   * <p> A list of <a>EnvironmentResourceDescription</a>. </p>
   */
  EnvironmentResources?: EnvironmentResourceDescription;
}

export namespace EnvironmentResourceDescriptionsMessage {
  export const filterSensitiveLog = (
    obj: EnvironmentResourceDescriptionsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentResourceDescriptionsMessage =>
    __isa(o, "EnvironmentResourceDescriptionsMessage");
}

/**
 * <p>Describes the AWS resources in use by this environment. This data is not live
 *       data.</p>
 */
export interface EnvironmentResourcesDescription {
  __type?: "EnvironmentResourcesDescription";
  /**
   * <p>Describes the LoadBalancer.</p>
   */
  LoadBalancer?: LoadBalancerDescription;
}

export namespace EnvironmentResourcesDescription {
  export const filterSensitiveLog = (
    obj: EnvironmentResourcesDescription
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentResourcesDescription =>
    __isa(o, "EnvironmentResourcesDescription");
}

export type EnvironmentStatus =
  | "Launching"
  | "Ready"
  | "Terminated"
  | "Terminating"
  | "Updating";

/**
 * <p>Describes the properties of an environment tier</p>
 */
export interface EnvironmentTier {
  __type?: "EnvironmentTier";
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

export namespace EnvironmentTier {
  export const filterSensitiveLog = (obj: EnvironmentTier): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnvironmentTier =>
    __isa(o, "EnvironmentTier");
}

/**
 * <p>Describes an event.</p>
 */
export interface EventDescription {
  __type?: "EventDescription";
  /**
   * <p>The application associated with the event.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the environment associated with this event.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>The date when the event occurred.</p>
   */
  EventDate?: Date;

  /**
   * <p>The event message.</p>
   */
  Message?: string;

  /**
   * <p>The ARN of the platform.</p>
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

  /**
   * <p>The name of the configuration associated with this event.</p>
   */
  TemplateName?: string;

  /**
   * <p>The release label for the application version associated with this event.</p>
   */
  VersionLabel?: string;
}

export namespace EventDescription {
  export const filterSensitiveLog = (obj: EventDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventDescription =>
    __isa(o, "EventDescription");
}

/**
 * <p>Result message wrapping a list of event descriptions.</p>
 */
export interface EventDescriptionsMessage {
  __type?: "EventDescriptionsMessage";
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

export namespace EventDescriptionsMessage {
  export const filterSensitiveLog = (obj: EventDescriptionsMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is EventDescriptionsMessage =>
    __isa(o, "EventDescriptionsMessage");
}

export type EventSeverity =
  | "DEBUG"
  | "ERROR"
  | "FATAL"
  | "INFO"
  | "TRACE"
  | "WARN";

export type FailureType =
  | "CancellationFailed"
  | "InternalFailure"
  | "InvalidEnvironmentState"
  | "PermissionsError"
  | "RollbackFailed"
  | "RollbackSuccessful"
  | "UpdateCancelled";

/**
 * <p>The description of an Amazon EC2 instance.</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  Id?: string;
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj
  });
  export const isa = (o: any): o is Instance => __isa(o, "Instance");
}

/**
 * <p>Represents summary information about the health of an instance. For more information,
 *       see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and Statuses</a>.</p>
 */
export interface InstanceHealthSummary {
  __type?: "InstanceHealthSummary";
  /**
   * <p>
   *             <b>Red.</b> The health agent is reporting a high number of request
   *       failures or other issues for an instance or environment.</p>
   */
  Degraded?: number;

  /**
   * <p>
   *             <b>Green.</b> An operation is in progress on an instance.</p>
   */
  Info?: number;

  /**
   * <p>
   *             <b>Grey.</b> AWS Elastic Beanstalk and the health agent are
   *       reporting no data on an instance.</p>
   */
  NoData?: number;

  /**
   * <p>
   *             <b>Green.</b> An instance is passing health checks and the health
   *       agent is not reporting any problems.</p>
   */
  Ok?: number;

  /**
   * <p>
   *             <b>Grey.</b> An operation is in progress on an instance within the
   *       command timeout.</p>
   */
  Pending?: number;

  /**
   * <p>
   *             <b>Red.</b> The health agent is reporting a very high number of
   *       request failures or other issues for an instance or environment.</p>
   */
  Severe?: number;

  /**
   * <p>
   *             <b>Grey.</b> AWS Elastic Beanstalk and the health agent are
   *       reporting an insufficient amount of data on an instance.</p>
   */
  Unknown?: number;

  /**
   * <p>
   *             <b>Yellow.</b> The health agent is reporting a moderate number of
   *       request failures or other issues for an instance or environment.</p>
   */
  Warning?: number;
}

export namespace InstanceHealthSummary {
  export const filterSensitiveLog = (obj: InstanceHealthSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceHealthSummary =>
    __isa(o, "InstanceHealthSummary");
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
  System = "System"
}

/**
 * <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 */
export interface InsufficientPrivilegesException
  extends __SmithyException,
    $MetadataBearer {
  name: "InsufficientPrivilegesException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace InsufficientPrivilegesException {
  export const filterSensitiveLog = (
    obj: InsufficientPrivilegesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is InsufficientPrivilegesException =>
    __isa(o, "InsufficientPrivilegesException");
}

/**
 * <p>One or more input parameters is not valid. Please correct the input parameters and try
 *       the operation again.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidRequestException =>
    __isa(o, "InvalidRequestException");
}

/**
 * <p>Represents the average latency for the slowest X percent of requests over the last 10
 *       seconds.</p>
 */
export interface Latency {
  __type?: "Latency";
  /**
   * <p>The average latency for the slowest 90 percent of requests over the last 10
   *       seconds.</p>
   */
  P10?: number;

  /**
   * <p>The average latency for the slowest 50 percent of requests over the last 10
   *       seconds.</p>
   */
  P50?: number;

  /**
   * <p>The average latency for the slowest 25 percent of requests over the last 10
   *       seconds.</p>
   */
  P75?: number;

  /**
   * <p>The average latency for the slowest 15 percent of requests over the last 10
   *       seconds.</p>
   */
  P85?: number;

  /**
   * <p>The average latency for the slowest 10 percent of requests over the last 10
   *       seconds.</p>
   */
  P90?: number;

  /**
   * <p>The average latency for the slowest 5 percent of requests over the last 10
   *       seconds.</p>
   */
  P95?: number;

  /**
   * <p>The average latency for the slowest 1 percent of requests over the last 10
   *       seconds.</p>
   */
  P99?: number;

  /**
   * <p>The average latency for the slowest 0.1 percent of requests over the last 10
   *       seconds.</p>
   */
  P999?: number;
}

export namespace Latency {
  export const filterSensitiveLog = (obj: Latency): any => ({
    ...obj
  });
  export const isa = (o: any): o is Latency => __isa(o, "Latency");
}

/**
 * <p>Describes an Auto Scaling launch configuration.</p>
 */
export interface LaunchConfiguration {
  __type?: "LaunchConfiguration";
  /**
   * <p>The name of the launch configuration.</p>
   */
  Name?: string;
}

export namespace LaunchConfiguration {
  export const filterSensitiveLog = (obj: LaunchConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchConfiguration =>
    __isa(o, "LaunchConfiguration");
}

/**
 * <p>Describes an Amazon EC2 launch template.</p>
 */
export interface LaunchTemplate {
  __type?: "LaunchTemplate";
  /**
   * <p>The ID of the launch template.</p>
   */
  Id?: string;
}

export namespace LaunchTemplate {
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchTemplate =>
    __isa(o, "LaunchTemplate");
}

/**
 * <p>A list of available AWS Elastic Beanstalk solution stacks.</p>
 */
export interface ListAvailableSolutionStacksResultMessage {
  __type?: "ListAvailableSolutionStacksResultMessage";
  /**
   * <p> A list of available solution stacks and their <a>SolutionStackDescription</a>. </p>
   */
  SolutionStackDetails?: SolutionStackDescription[];

  /**
   * <p>A list of available solution stacks.</p>
   */
  SolutionStacks?: string[];
}

export namespace ListAvailableSolutionStacksResultMessage {
  export const filterSensitiveLog = (
    obj: ListAvailableSolutionStacksResultMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListAvailableSolutionStacksResultMessage =>
    __isa(o, "ListAvailableSolutionStacksResultMessage");
}

/**
 * <p>Describes the properties of a Listener for the LoadBalancer.</p>
 */
export interface Listener {
  __type?: "Listener";
  /**
   * <p>The port that is used by the Listener.</p>
   */
  Port?: number;

  /**
   * <p>The protocol that is used by the Listener.</p>
   */
  Protocol?: string;
}

export namespace Listener {
  export const filterSensitiveLog = (obj: Listener): any => ({
    ...obj
  });
  export const isa = (o: any): o is Listener => __isa(o, "Listener");
}

export interface ListPlatformVersionsRequest {
  __type?: "ListPlatformVersionsRequest";
  /**
   * <p>List only the platforms where the platform member
   *       value relates to one of the supplied values.</p>
   */
  Filters?: PlatformFilter[];

  /**
   * <p>The maximum number of platform values returned in one call.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The starting index into the remaining list of platforms.
   *       Use the <code>NextToken</code> value from a previous
   *       <code>ListPlatformVersion</code> call.</p>
   */
  NextToken?: string;
}

export namespace ListPlatformVersionsRequest {
  export const filterSensitiveLog = (
    obj: ListPlatformVersionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPlatformVersionsRequest =>
    __isa(o, "ListPlatformVersionsRequest");
}

export interface ListPlatformVersionsResult {
  __type?: "ListPlatformVersionsResult";
  /**
   * <p>The starting index into the remaining list of platforms.
   *       if this value is not <code>null</code>, you can use it in a subsequent
   *       <code>ListPlatformVersion</code> call.
   *       </p>
   */
  NextToken?: string;

  /**
   * <p>Detailed information about the platforms.</p>
   */
  PlatformSummaryList?: PlatformSummary[];
}

export namespace ListPlatformVersionsResult {
  export const filterSensitiveLog = (obj: ListPlatformVersionsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListPlatformVersionsResult =>
    __isa(o, "ListPlatformVersionsResult");
}

export interface ListTagsForResourceMessage {
  __type?: "ListTagsForResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.</p>
   *          <p>Must be the ARN of an Elastic Beanstalk environment.</p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceMessage {
  export const filterSensitiveLog = (obj: ListTagsForResourceMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTagsForResourceMessage =>
    __isa(o, "ListTagsForResourceMessage");
}

/**
 * <p>Describes a LoadBalancer.</p>
 */
export interface LoadBalancer {
  __type?: "LoadBalancer";
  /**
   * <p>The name of the LoadBalancer.</p>
   */
  Name?: string;
}

export namespace LoadBalancer {
  export const filterSensitiveLog = (obj: LoadBalancer): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancer => __isa(o, "LoadBalancer");
}

/**
 * <p>Describes the details of a LoadBalancer.</p>
 */
export interface LoadBalancerDescription {
  __type?: "LoadBalancerDescription";
  /**
   * <p>The domain name of the LoadBalancer.</p>
   */
  Domain?: string;

  /**
   * <p>A list of Listeners used by the LoadBalancer.</p>
   */
  Listeners?: Listener[];

  /**
   * <p>The name of the LoadBalancer.</p>
   */
  LoadBalancerName?: string;
}

export namespace LoadBalancerDescription {
  export const filterSensitiveLog = (obj: LoadBalancerDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerDescription =>
    __isa(o, "LoadBalancerDescription");
}

/**
 * <p>The record of an upcoming or in-progress managed action.</p>
 */
export interface ManagedAction {
  __type?: "ManagedAction";
  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

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

export namespace ManagedAction {
  export const filterSensitiveLog = (obj: ManagedAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedAction => __isa(o, "ManagedAction");
}

/**
 * <p>The record of a completed or failed managed action.</p>
 */
export interface ManagedActionHistoryItem {
  __type?: "ManagedActionHistoryItem";
  /**
   * <p>A description of the managed action.</p>
   */
  ActionDescription?: string;

  /**
   * <p>A unique identifier for the managed action.</p>
   */
  ActionId?: string;

  /**
   * <p>The type of the managed action.</p>
   */
  ActionType?: ActionType | string;

  /**
   * <p>The date and time that the action started executing.</p>
   */
  ExecutedTime?: Date;

  /**
   * <p>If the action failed, a description of the failure.</p>
   */
  FailureDescription?: string;

  /**
   * <p>If the action failed, the type of failure.</p>
   */
  FailureType?: FailureType | string;

  /**
   * <p>The date and time that the action finished executing.</p>
   */
  FinishedTime?: Date;

  /**
   * <p>The status of the action.</p>
   */
  Status?: ActionHistoryStatus | string;
}

export namespace ManagedActionHistoryItem {
  export const filterSensitiveLog = (obj: ManagedActionHistoryItem): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedActionHistoryItem =>
    __isa(o, "ManagedActionHistoryItem");
}

/**
 * <p>Cannot modify the managed action in its current state.</p>
 */
export interface ManagedActionInvalidStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "ManagedActionInvalidStateException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ManagedActionInvalidStateException {
  export const filterSensitiveLog = (
    obj: ManagedActionInvalidStateException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ManagedActionInvalidStateException =>
    __isa(o, "ManagedActionInvalidStateException");
}

/**
 * <p>A lifecycle rule that deletes application versions after the specified number of
 *       days.</p>
 */
export interface MaxAgeRule {
  __type?: "MaxAgeRule";
  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when
   *       Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;

  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable
   *       it.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specify the number of days to retain an application versions.</p>
   */
  MaxAgeInDays?: number;
}

export namespace MaxAgeRule {
  export const filterSensitiveLog = (obj: MaxAgeRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaxAgeRule => __isa(o, "MaxAgeRule");
}

/**
 * <p>A lifecycle rule that deletes the oldest application version when the maximum count is
 *       exceeded.</p>
 */
export interface MaxCountRule {
  __type?: "MaxCountRule";
  /**
   * <p>Set to <code>true</code> to delete a version's source bundle from Amazon S3 when
   *       Elastic Beanstalk deletes the application version.</p>
   */
  DeleteSourceFromS3?: boolean;

  /**
   * <p>Specify <code>true</code> to apply the rule, or <code>false</code> to disable
   *       it.</p>
   */
  Enabled: boolean | undefined;

  /**
   * <p>Specify the maximum number of application versions to retain.</p>
   */
  MaxCount?: number;
}

export namespace MaxCountRule {
  export const filterSensitiveLog = (obj: MaxCountRule): any => ({
    ...obj
  });
  export const isa = (o: any): o is MaxCountRule => __isa(o, "MaxCountRule");
}

/**
 * <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 */
export interface OperationInProgressException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationInProgressException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace OperationInProgressException {
  export const filterSensitiveLog = (
    obj: OperationInProgressException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationInProgressException =>
    __isa(o, "OperationInProgressException");
}

/**
 * <p>A regular expression representing a restriction on a string configuration option
 *       value.</p>
 */
export interface OptionRestrictionRegex {
  __type?: "OptionRestrictionRegex";
  /**
   * <p>A unique name representing this regular expression.</p>
   */
  Label?: string;

  /**
   * <p>The regular expression pattern that a string configuration option value with this
   *       restriction must match.</p>
   */
  Pattern?: string;
}

export namespace OptionRestrictionRegex {
  export const filterSensitiveLog = (obj: OptionRestrictionRegex): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionRestrictionRegex =>
    __isa(o, "OptionRestrictionRegex");
}

/**
 * <p>A specification identifying an individual configuration option.</p>
 */
export interface OptionSpecification {
  __type?: "OptionSpecification";
  /**
   * <p>A unique namespace identifying the option's associated AWS resource.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the configuration option.</p>
   */
  OptionName?: string;

  /**
   * <p>A unique resource name for a time-based scaling configuration option.</p>
   */
  ResourceName?: string;
}

export namespace OptionSpecification {
  export const filterSensitiveLog = (obj: OptionSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionSpecification =>
    __isa(o, "OptionSpecification");
}

/**
 * <p>Detailed information about a platform.</p>
 */
export interface PlatformDescription {
  __type?: "PlatformDescription";
  /**
   * <p>The custom AMIs supported by the platform.</p>
   */
  CustomAmiList?: CustomAmi[];

  /**
   * <p>The date when the platform was created.</p>
   */
  DateCreated?: Date;

  /**
   * <p>The date when the platform was last updated.</p>
   */
  DateUpdated?: Date;

  /**
   * <p>The description of the platform.</p>
   */
  Description?: string;

  /**
   * <p>The frameworks supported by the platform.</p>
   */
  Frameworks?: PlatformFramework[];

  /**
   * <p>Information about the maintainer of the platform.</p>
   */
  Maintainer?: string;

  /**
   * <p>The operating system used by the platform.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The category of the platform.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The name of the platform.</p>
   */
  PlatformName?: string;

  /**
   * <p>The AWS account ID of the person who created the platform.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The status of the platform.</p>
   */
  PlatformStatus?: PlatformStatus | string;

  /**
   * <p>The version of the platform.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>The programming languages supported by the platform.</p>
   */
  ProgrammingLanguages?: PlatformProgrammingLanguage[];

  /**
   * <p>The name of the solution stack used by the platform.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>The additions supported by the platform.</p>
   */
  SupportedAddonList?: string[];

  /**
   * <p>The tiers supported by the platform.</p>
   */
  SupportedTierList?: string[];
}

export namespace PlatformDescription {
  export const filterSensitiveLog = (obj: PlatformDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformDescription =>
    __isa(o, "PlatformDescription");
}

/**
 * <p>Specify criteria to restrict the results when listing custom
 *      platforms.</p>
 *          <p>The filter is evaluated as the expression:</p>
 *          <p>
 *             <code>Type</code>
 *             <code>Operator</code>
 *             <code>Values[i]</code>
 *          </p>
 */
export interface PlatformFilter {
  __type?: "PlatformFilter";
  /**
   * <p>The operator to apply to the <code>Type</code> with each of
   *       the <code>Values</code>.</p>
   *          <p>
   * 	Valid Values:
   *     <code>=</code>
   *     (equal to) |
   *     <code>!=</code>
   * 	(not equal to) |
   * 	<code><</code>
   * 	(less than) |
   * 	<code><=</code>
   * 	(less than or equal to) |
   * 	<code>></code>
   * 	(greater than) |
   * 	<code>>=</code>
   * 	(greater than or equal to) |
   * 	<code>contains</code> |
   * 	<code>begins_with</code> |
   * 	<code>ends_with</code>
   *          </p>
   */
  Operator?: string;

  /**
   * <p>The custom platform attribute to which the filter values are applied.</p>
   *          <p>Valid Values:
   *         <code>PlatformName</code> |
   *         <code>PlatformVersion</code> |
   *         <code>PlatformStatus</code> |
   *         <code>PlatformOwner</code>
   *          </p>
   */
  Type?: string;

  /**
   * <p>The list of values applied to the custom platform attribute.</p>
   */
  Values?: string[];
}

export namespace PlatformFilter {
  export const filterSensitiveLog = (obj: PlatformFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformFilter =>
    __isa(o, "PlatformFilter");
}

/**
 * <p>A framework supported by the custom platform.</p>
 */
export interface PlatformFramework {
  __type?: "PlatformFramework";
  /**
   * <p>The name of the framework.</p>
   */
  Name?: string;

  /**
   * <p>The version of the framework.</p>
   */
  Version?: string;
}

export namespace PlatformFramework {
  export const filterSensitiveLog = (obj: PlatformFramework): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformFramework =>
    __isa(o, "PlatformFramework");
}

/**
 * <p>A programming language supported by the platform.</p>
 */
export interface PlatformProgrammingLanguage {
  __type?: "PlatformProgrammingLanguage";
  /**
   * <p>The name of the programming language.</p>
   */
  Name?: string;

  /**
   * <p>The version of the programming language.</p>
   */
  Version?: string;
}

export namespace PlatformProgrammingLanguage {
  export const filterSensitiveLog = (
    obj: PlatformProgrammingLanguage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformProgrammingLanguage =>
    __isa(o, "PlatformProgrammingLanguage");
}

export type PlatformStatus =
  | "Creating"
  | "Deleted"
  | "Deleting"
  | "Failed"
  | "Ready";

/**
 * <p>Detailed information about a platform.</p>
 */
export interface PlatformSummary {
  __type?: "PlatformSummary";
  /**
   * <p>The operating system used by the platform.</p>
   */
  OperatingSystemName?: string;

  /**
   * <p>The version of the operating system used by the platform.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The ARN of the platform.</p>
   */
  PlatformArn?: string;

  /**
   * <p>The category of platform.</p>
   */
  PlatformCategory?: string;

  /**
   * <p>The AWS account ID of the person who created the platform.</p>
   */
  PlatformOwner?: string;

  /**
   * <p>The status of the platform. You can create an environment
   *       from the platform once it is ready.</p>
   */
  PlatformStatus?: PlatformStatus | string;

  /**
   * <p>The additions associated with the platform.</p>
   */
  SupportedAddonList?: string[];

  /**
   * <p>The tiers in which the platform runs.</p>
   */
  SupportedTierList?: string[];
}

export namespace PlatformSummary {
  export const filterSensitiveLog = (obj: PlatformSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformSummary =>
    __isa(o, "PlatformSummary");
}

/**
 * <p>You cannot delete the platform version because there are still environments running on it.</p>
 */
export interface PlatformVersionStillReferencedException
  extends __SmithyException,
    $MetadataBearer {
  name: "PlatformVersionStillReferencedException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace PlatformVersionStillReferencedException {
  export const filterSensitiveLog = (
    obj: PlatformVersionStillReferencedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PlatformVersionStillReferencedException =>
    __isa(o, "PlatformVersionStillReferencedException");
}

/**
 * <p>Describes a queue.</p>
 */
export interface Queue {
  __type?: "Queue";
  /**
   * <p>The name of the queue.</p>
   */
  Name?: string;

  /**
   * <p>The URL of the queue.</p>
   */
  URL?: string;
}

export namespace Queue {
  export const filterSensitiveLog = (obj: Queue): any => ({
    ...obj
  });
  export const isa = (o: any): o is Queue => __isa(o, "Queue");
}

/**
 * <p></p>
 */
export interface RebuildEnvironmentMessage {
  __type?: "RebuildEnvironmentMessage";
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

export namespace RebuildEnvironmentMessage {
  export const filterSensitiveLog = (obj: RebuildEnvironmentMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RebuildEnvironmentMessage =>
    __isa(o, "RebuildEnvironmentMessage");
}

/**
 * <p>Request to retrieve logs from an environment and store them in your Elastic Beanstalk
 *       storage bucket.</p>
 */
export interface RequestEnvironmentInfoMessage {
  __type?: "RequestEnvironmentInfoMessage";
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

export namespace RequestEnvironmentInfoMessage {
  export const filterSensitiveLog = (
    obj: RequestEnvironmentInfoMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RequestEnvironmentInfoMessage =>
    __isa(o, "RequestEnvironmentInfoMessage");
}

/**
 * <p>A resource doesn't exist for the specified Amazon Resource Name (ARN).</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The AWS Elastic Beanstalk quota information for a single resource type in an AWS account. It
 *       reflects the resource's limits for this account.</p>
 */
export interface ResourceQuota {
  __type?: "ResourceQuota";
  /**
   * <p>The maximum number of instances of this Elastic Beanstalk resource type that an AWS account can
   *       use.</p>
   */
  Maximum?: number;
}

export namespace ResourceQuota {
  export const filterSensitiveLog = (obj: ResourceQuota): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceQuota => __isa(o, "ResourceQuota");
}

/**
 * <p>A set of per-resource AWS Elastic Beanstalk quotas associated with an AWS account. They reflect
 *       Elastic Beanstalk resource limits for this account.</p>
 */
export interface ResourceQuotas {
  __type?: "ResourceQuotas";
  /**
   * <p>The quota for applications in the AWS account.</p>
   */
  ApplicationQuota?: ResourceQuota;

  /**
   * <p>The quota for application versions in the AWS account.</p>
   */
  ApplicationVersionQuota?: ResourceQuota;

  /**
   * <p>The quota for configuration templates in the AWS account.</p>
   */
  ConfigurationTemplateQuota?: ResourceQuota;

  /**
   * <p>The quota for custom platforms in the AWS account.</p>
   */
  CustomPlatformQuota?: ResourceQuota;

  /**
   * <p>The quota for environments in the AWS account.</p>
   */
  EnvironmentQuota?: ResourceQuota;
}

export namespace ResourceQuotas {
  export const filterSensitiveLog = (obj: ResourceQuotas): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceQuotas =>
    __isa(o, "ResourceQuotas");
}

export interface ResourceTagsDescriptionMessage {
  __type?: "ResourceTagsDescriptionMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce for which a tag list was requested.</p>
   */
  ResourceArn?: string;

  /**
   * <p>A list of tag key-value pairs.</p>
   */
  ResourceTags?: Tag[];
}

export namespace ResourceTagsDescriptionMessage {
  export const filterSensitiveLog = (
    obj: ResourceTagsDescriptionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTagsDescriptionMessage =>
    __isa(o, "ResourceTagsDescriptionMessage");
}

/**
 * <p>The type of the specified Amazon Resource Name (ARN) isn't supported for this operation.</p>
 */
export interface ResourceTypeNotSupportedException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceTypeNotSupportedException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace ResourceTypeNotSupportedException {
  export const filterSensitiveLog = (
    obj: ResourceTypeNotSupportedException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceTypeNotSupportedException =>
    __isa(o, "ResourceTypeNotSupportedException");
}

/**
 * <p></p>
 */
export interface RestartAppServerMessage {
  __type?: "RestartAppServerMessage";
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

export namespace RestartAppServerMessage {
  export const filterSensitiveLog = (obj: RestartAppServerMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is RestartAppServerMessage =>
    __isa(o, "RestartAppServerMessage");
}

/**
 * <p>Request to download logs retrieved with <a>RequestEnvironmentInfo</a>.</p>
 */
export interface RetrieveEnvironmentInfoMessage {
  __type?: "RetrieveEnvironmentInfoMessage";
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

export namespace RetrieveEnvironmentInfoMessage {
  export const filterSensitiveLog = (
    obj: RetrieveEnvironmentInfoMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveEnvironmentInfoMessage =>
    __isa(o, "RetrieveEnvironmentInfoMessage");
}

/**
 * <p>Result message containing a description of the requested environment info.</p>
 */
export interface RetrieveEnvironmentInfoResultMessage {
  __type?: "RetrieveEnvironmentInfoResultMessage";
  /**
   * <p> The <a>EnvironmentInfoDescription</a> of the environment. </p>
   */
  EnvironmentInfo?: EnvironmentInfoDescription[];
}

export namespace RetrieveEnvironmentInfoResultMessage {
  export const filterSensitiveLog = (
    obj: RetrieveEnvironmentInfoResultMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RetrieveEnvironmentInfoResultMessage =>
    __isa(o, "RetrieveEnvironmentInfoResultMessage");
}

/**
 * <p>The bucket and key of an item stored in Amazon S3.</p>
 */
export interface S3Location {
  __type?: "S3Location";
  /**
   * <p>The Amazon S3 bucket where the data is located.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key where the data is located.</p>
   */
  S3Key?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Location => __isa(o, "S3Location");
}

/**
 * <p>The specified S3 bucket does not belong to the S3 region in which the service is
 *       running. The following regions are supported:</p>
 *          <ul>
 *             <li>
 * 	              <p>IAD/us-east-1</p>
 * 	           </li>
 *             <li>
 * 	              <p>PDX/us-west-2</p>
 * 	           </li>
 *             <li>
 * 	              <p>DUB/eu-west-1</p>
 * 	           </li>
 *          </ul>
 */
export interface S3LocationNotInServiceRegionException
  extends __SmithyException,
    $MetadataBearer {
  name: "S3LocationNotInServiceRegionException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace S3LocationNotInServiceRegionException {
  export const filterSensitiveLog = (
    obj: S3LocationNotInServiceRegionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3LocationNotInServiceRegionException =>
    __isa(o, "S3LocationNotInServiceRegionException");
}

/**
 * <p>The specified account does not have a subscription to Amazon S3.</p>
 */
export interface S3SubscriptionRequiredException
  extends __SmithyException,
    $MetadataBearer {
  name: "S3SubscriptionRequiredException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace S3SubscriptionRequiredException {
  export const filterSensitiveLog = (
    obj: S3SubscriptionRequiredException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3SubscriptionRequiredException =>
    __isa(o, "S3SubscriptionRequiredException");
}

/**
 * <p>Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk
 *       environment.</p>
 */
export interface SingleInstanceHealth {
  __type?: "SingleInstanceHealth";
  /**
   * <p>Request metrics from your application.</p>
   */
  ApplicationMetrics?: ApplicationMetrics;

  /**
   * <p>The availability zone in which the instance runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Represents the causes, which provide more information about the current health
   *       status.</p>
   */
  Causes?: string[];

  /**
   * <p>Represents the color indicator that gives you information about the health of the EC2
   *       instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health Colors and
   *         Statuses</a>.</p>
   */
  Color?: string;

  /**
   * <p>Information about the most recent deployment to an instance.</p>
   */
  Deployment?: Deployment;

  /**
   * <p>Returns the health status of the specified instance. For more information, see <a href="https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html">Health
   *         Colors and Statuses</a>.</p>
   */
  HealthStatus?: string;

  /**
   * <p>The ID of the Amazon EC2 instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The instance's type.</p>
   */
  InstanceType?: string;

  /**
   * <p>The time at which the EC2 instance was launched.</p>
   */
  LaunchedAt?: Date;

  /**
   * <p>Operating system metrics from the instance.</p>
   */
  System?: SystemStatus;
}

export namespace SingleInstanceHealth {
  export const filterSensitiveLog = (obj: SingleInstanceHealth): any => ({
    ...obj
  });
  export const isa = (o: any): o is SingleInstanceHealth =>
    __isa(o, "SingleInstanceHealth");
}

/**
 * <p>Describes the solution stack.</p>
 */
export interface SolutionStackDescription {
  __type?: "SolutionStackDescription";
  /**
   * <p>The permitted file types allowed for a solution stack.</p>
   */
  PermittedFileTypes?: string[];

  /**
   * <p>The name of the solution stack.</p>
   */
  SolutionStackName?: string;
}

export namespace SolutionStackDescription {
  export const filterSensitiveLog = (obj: SolutionStackDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is SolutionStackDescription =>
    __isa(o, "SolutionStackDescription");
}

/**
 * <p>Location of the source code for an application version.</p>
 */
export interface SourceBuildInformation {
  __type?: "SourceBuildInformation";
  /**
   * <p>The location of the source code, as a formatted string, depending on the value of <code>SourceRepository</code>
   *          </p>
   *         <ul>
   *             <li>
   * 	              <p>For <code>CodeCommit</code>,
   * 	the format is the repository name and commit ID, separated by a forward slash.
   * 	For example,
   * 	<code>my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a</code>.</p>
   *             </li>
   *             <li>
   * 	              <p>For <code>S3</code>,
   * 	the format is the S3 bucket name and object key, separated by a forward slash.
   * 	For example,
   * 	<code>my-s3-bucket/Folders/my-source-file</code>.</p>
   *             </li>
   *          </ul>
   */
  SourceLocation: string | undefined;

  /**
   * <p>Location where the repository is stored.</p>
   *          <ul>
   *             <li>
   * 	              <p>
   *                   <code>CodeCommit</code>
   *                </p>
   *             </li>
   *             <li>
   * 	              <p>
   *                   <code>S3</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SourceRepository: SourceRepository | string | undefined;

  /**
   * <p>The type of repository.</p>
   *          <ul>
   *             <li>
   * 	              <p>
   *                   <code>Git</code>
   *                </p>
   *             </li>
   *             <li>
   * 	              <p>
   *                   <code>Zip</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  SourceType: SourceType | string | undefined;
}

export namespace SourceBuildInformation {
  export const filterSensitiveLog = (obj: SourceBuildInformation): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceBuildInformation =>
    __isa(o, "SourceBuildInformation");
}

/**
 * <p>Unable to delete the Amazon S3 source bundle associated with the application version.
 *       The application version was deleted successfully.</p>
 */
export interface SourceBundleDeletionException
  extends __SmithyException,
    $MetadataBearer {
  name: "SourceBundleDeletionException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace SourceBundleDeletionException {
  export const filterSensitiveLog = (
    obj: SourceBundleDeletionException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceBundleDeletionException =>
    __isa(o, "SourceBundleDeletionException");
}

/**
 * <p>A specification for an environment configuration</p>
 */
export interface SourceConfiguration {
  __type?: "SourceConfiguration";
  /**
   * <p>The name of the application associated with the configuration.</p>
   */
  ApplicationName?: string;

  /**
   * <p>The name of the configuration template.</p>
   */
  TemplateName?: string;
}

export namespace SourceConfiguration {
  export const filterSensitiveLog = (obj: SourceConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is SourceConfiguration =>
    __isa(o, "SourceConfiguration");
}

export type SourceRepository = "CodeCommit" | "S3";

export type SourceType = "Git" | "Zip";

/**
 * <p>Represents the percentage of requests over the last 10 seconds that resulted in each
 *       type of status code response. For more information, see <a href="http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html">Status Code
 *       Definitions</a>.</p>
 */
export interface StatusCodes {
  __type?: "StatusCodes";
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

export namespace StatusCodes {
  export const filterSensitiveLog = (obj: StatusCodes): any => ({
    ...obj
  });
  export const isa = (o: any): o is StatusCodes => __isa(o, "StatusCodes");
}

/**
 * <p>Swaps the CNAMEs of two environments.</p>
 */
export interface SwapEnvironmentCNAMEsMessage {
  __type?: "SwapEnvironmentCNAMEsMessage";
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
}

export namespace SwapEnvironmentCNAMEsMessage {
  export const filterSensitiveLog = (
    obj: SwapEnvironmentCNAMEsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SwapEnvironmentCNAMEsMessage =>
    __isa(o, "SwapEnvironmentCNAMEsMessage");
}

/**
 * <p>CPU utilization and load average metrics for an Amazon EC2 instance.</p>
 */
export interface SystemStatus {
  __type?: "SystemStatus";
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

export namespace SystemStatus {
  export const filterSensitiveLog = (obj: SystemStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is SystemStatus => __isa(o, "SystemStatus");
}

/**
 * <p>Describes a tag applied to a resource in an environment.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The key of the tag.</p>
   */
  Key?: string;

  /**
   * <p>The value of the tag.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Request to terminate an environment.</p>
 */
export interface TerminateEnvironmentMessage {
  __type?: "TerminateEnvironmentMessage";
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
   * <p>Terminates the target environment even if another environment in the same group is
   *       dependent on it.</p>
   */
  ForceTerminate?: boolean;

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
}

export namespace TerminateEnvironmentMessage {
  export const filterSensitiveLog = (
    obj: TerminateEnvironmentMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateEnvironmentMessage =>
    __isa(o, "TerminateEnvironmentMessage");
}

/**
 * <p>The specified account has reached its limit of applications.</p>
 */
export interface TooManyApplicationsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyApplicationsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyApplicationsException {
  export const filterSensitiveLog = (
    obj: TooManyApplicationsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyApplicationsException =>
    __isa(o, "TooManyApplicationsException");
}

/**
 * <p>The specified account has reached its limit of application versions.</p>
 */
export interface TooManyApplicationVersionsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyApplicationVersionsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyApplicationVersionsException {
  export const filterSensitiveLog = (
    obj: TooManyApplicationVersionsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyApplicationVersionsException =>
    __isa(o, "TooManyApplicationVersionsException");
}

/**
 * <p>The specified account has reached its limit of Amazon S3 buckets.</p>
 */
export interface TooManyBucketsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyBucketsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyBucketsException {
  export const filterSensitiveLog = (obj: TooManyBucketsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyBucketsException =>
    __isa(o, "TooManyBucketsException");
}

/**
 * <p>The specified account has reached its limit of configuration templates.</p>
 */
export interface TooManyConfigurationTemplatesException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyConfigurationTemplatesException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyConfigurationTemplatesException {
  export const filterSensitiveLog = (
    obj: TooManyConfigurationTemplatesException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyConfigurationTemplatesException =>
    __isa(o, "TooManyConfigurationTemplatesException");
}

/**
 * <p>The specified account has reached its limit of environments.</p>
 */
export interface TooManyEnvironmentsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyEnvironmentsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyEnvironmentsException {
  export const filterSensitiveLog = (
    obj: TooManyEnvironmentsException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyEnvironmentsException =>
    __isa(o, "TooManyEnvironmentsException");
}

/**
 * <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
 */
export interface TooManyPlatformsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyPlatformsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyPlatformsException {
  export const filterSensitiveLog = (obj: TooManyPlatformsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyPlatformsException =>
    __isa(o, "TooManyPlatformsException");
}

/**
 * <p>The number of tags in the resource would exceed the number of tags that each resource
 *       can have.</p>
 *          <p>To calculate this, the operation considers both the number of tags the resource already has
 *       and the tags this operation would add if it succeeded.</p>
 */
export interface TooManyTagsException
  extends __SmithyException,
    $MetadataBearer {
  name: "TooManyTagsException";
  $fault: "client";
  /**
   * <p>The exception error message.</p>
   */
  message?: string;
}

export namespace TooManyTagsException {
  export const filterSensitiveLog = (obj: TooManyTagsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is TooManyTagsException =>
    __isa(o, "TooManyTagsException");
}

/**
 * <p>Describes a trigger.</p>
 */
export interface Trigger {
  __type?: "Trigger";
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

export namespace Trigger {
  export const filterSensitiveLog = (obj: Trigger): any => ({
    ...obj
  });
  export const isa = (o: any): o is Trigger => __isa(o, "Trigger");
}

/**
 * <p>Request to update an application.</p>
 */
export interface UpdateApplicationMessage {
  __type?: "UpdateApplicationMessage";
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

export namespace UpdateApplicationMessage {
  export const filterSensitiveLog = (obj: UpdateApplicationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationMessage =>
    __isa(o, "UpdateApplicationMessage");
}

export interface UpdateApplicationResourceLifecycleMessage {
  __type?: "UpdateApplicationResourceLifecycleMessage";
  /**
   * <p>The name of the application.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The lifecycle configuration.</p>
   */
  ResourceLifecycleConfig: ApplicationResourceLifecycleConfig | undefined;
}

export namespace UpdateApplicationResourceLifecycleMessage {
  export const filterSensitiveLog = (
    obj: UpdateApplicationResourceLifecycleMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationResourceLifecycleMessage =>
    __isa(o, "UpdateApplicationResourceLifecycleMessage");
}

/**
 * <p></p>
 */
export interface UpdateApplicationVersionMessage {
  __type?: "UpdateApplicationVersionMessage";
  /**
   * <p>The name of the application associated with this version.</p>
   *          <p> If no application is found with this name, <code>UpdateApplication</code> returns an
   *         <code>InvalidParameterValue</code> error.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>A new description for this version.</p>
   */
  Description?: string;

  /**
   * <p>The name of the version to update.</p>
   *          <p>If no application version is found with this label, <code>UpdateApplication</code>
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  VersionLabel: string | undefined;
}

export namespace UpdateApplicationVersionMessage {
  export const filterSensitiveLog = (
    obj: UpdateApplicationVersionMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateApplicationVersionMessage =>
    __isa(o, "UpdateApplicationVersionMessage");
}

/**
 * <p>The result message containing the options for the specified solution stack.</p>
 */
export interface UpdateConfigurationTemplateMessage {
  __type?: "UpdateConfigurationTemplateMessage";
  /**
   * <p>The name of the application associated with the configuration template to
   *       update.</p>
   *          <p> If no application is found with this name, <code>UpdateConfigurationTemplate</code>
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  ApplicationName: string | undefined;

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

  /**
   * <p>The name of the configuration template to update.</p>
   *          <p> If no configuration template is found with this name,
   *         <code>UpdateConfigurationTemplate</code> returns an <code>InvalidParameterValue</code>
   *       error. </p>
   */
  TemplateName: string | undefined;
}

export namespace UpdateConfigurationTemplateMessage {
  export const filterSensitiveLog = (
    obj: UpdateConfigurationTemplateMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConfigurationTemplateMessage =>
    __isa(o, "UpdateConfigurationTemplateMessage");
}

/**
 * <p>Request to update an environment.</p>
 */
export interface UpdateEnvironmentMessage {
  __type?: "UpdateEnvironmentMessage";
  /**
   * <p>The name of the application with which the environment is associated.</p>
   */
  ApplicationName?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk updates the description of this
   *       environment.</p>
   */
  Description?: string;

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

  /**
   * <p>The ARN of the platform, if used.</p>
   */
  PlatformArn?: string;

  /**
   * <p>This specifies the platform version that the environment will run after the environment
   *       is updated.</p>
   */
  SolutionStackName?: string;

  /**
   * <p>If this parameter is specified, AWS Elastic Beanstalk deploys this configuration
   *       template to the environment. If no such configuration template is found, AWS Elastic Beanstalk
   *       returns an <code>InvalidParameterValue</code> error. </p>
   */
  TemplateName?: string;

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
}

export namespace UpdateEnvironmentMessage {
  export const filterSensitiveLog = (obj: UpdateEnvironmentMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateEnvironmentMessage =>
    __isa(o, "UpdateEnvironmentMessage");
}

export interface UpdateTagsForResourceMessage {
  __type?: "UpdateTagsForResourceMessage";
  /**
   * <p>The Amazon Resource Name (ARN) of the resouce to be updated.</p>
   *          <p>Must be the ARN of an Elastic Beanstalk environment.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A list of tags to add or update.</p>
   *          <p>If a key of an existing tag is added, the tag's value is updated.</p>
   */
  TagsToAdd?: Tag[];

  /**
   * <p>A list of tag keys to remove.</p>
   *          <p>If a tag key doesn't exist, it is silently ignored.</p>
   */
  TagsToRemove?: string[];
}

export namespace UpdateTagsForResourceMessage {
  export const filterSensitiveLog = (
    obj: UpdateTagsForResourceMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTagsForResourceMessage =>
    __isa(o, "UpdateTagsForResourceMessage");
}

/**
 * <p>A list of validation messages for a specified configuration template.</p>
 */
export interface ValidateConfigurationSettingsMessage {
  __type?: "ValidateConfigurationSettingsMessage";
  /**
   * <p>The name of the application that the configuration template or environment belongs
   *       to.</p>
   */
  ApplicationName: string | undefined;

  /**
   * <p>The name of the environment to validate the settings against.</p>
   *          <p>Condition: You cannot specify both this and a configuration template name.</p>
   */
  EnvironmentName?: string;

  /**
   * <p>A list of the options and desired values to evaluate.</p>
   */
  OptionSettings: ConfigurationOptionSetting[] | undefined;

  /**
   * <p>The name of the configuration template to validate the settings against.</p>
   *          <p>Condition: You cannot specify both this and an environment name.</p>
   */
  TemplateName?: string;
}

export namespace ValidateConfigurationSettingsMessage {
  export const filterSensitiveLog = (
    obj: ValidateConfigurationSettingsMessage
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidateConfigurationSettingsMessage =>
    __isa(o, "ValidateConfigurationSettingsMessage");
}

/**
 * <p>An error or warning for a desired configuration option value.</p>
 */
export interface ValidationMessage {
  __type?: "ValidationMessage";
  /**
   * <p>A message describing the error or warning.</p>
   */
  Message?: string;

  /**
   * <p>The namespace to which the option belongs.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the option.</p>
   */
  OptionName?: string;

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
}

export namespace ValidationMessage {
  export const filterSensitiveLog = (obj: ValidationMessage): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationMessage =>
    __isa(o, "ValidationMessage");
}

export type ValidationSeverity = "error" | "warning";
