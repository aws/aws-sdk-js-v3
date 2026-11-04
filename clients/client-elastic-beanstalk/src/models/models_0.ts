// smithy-typescript generated code
import type {
  ActionHistoryStatus,
  ActionStatus,
  ActionType,
  ApplicationVersionStatus,
  ArchitectureType,
  ComputeType,
  ConfigurationDeploymentStatus,
  ConfigurationOptionValueType,
  EnvironmentHealth,
  EnvironmentHealthAttribute,
  EnvironmentHealthStatus,
  EnvironmentInfoType,
  EnvironmentStatus,
  EventSeverity,
  FailureType,
  ImageBuildType,
  InstancesHealthAttribute,
  PlatformStatus,
  SourceRepository,
  SourceType,
  ValidationSeverity,
} from "./enums";

/**
 * @public
 */
export interface AbortEnvironmentUpdateMessage {
  /**
   * This specifies the ID of the environment with the in-progress update that you want to cancel.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * This specifies the name of the environment with the in-progress update that you want to cancel.
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * A lifecycle rule that deletes application versions after the specified number of days.
 *
 * @public
 */
export interface MaxAgeRule {
  /**
   * Specify `true` to apply the rule, or `false` to disable it.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Specify the number of days to retain an application versions.
   *
   * @public
   */
  MaxAgeInDays?: number | undefined;

  /**
   * Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
   *
   * @public
   */
  DeleteSourceFromS3?: boolean | undefined;
}

/**
 * A lifecycle rule that deletes the oldest application version when the maximum count is exceeded.
 *
 * @public
 */
export interface MaxCountRule {
  /**
   * Specify `true` to apply the rule, or `false` to disable it.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * Specify the maximum number of application versions to retain.
   *
   * @public
   */
  MaxCount?: number | undefined;

  /**
   * Set to `true` to delete a version's source bundle from Amazon S3 when Elastic Beanstalk deletes the application version.
   *
   * @public
   */
  DeleteSourceFromS3?: boolean | undefined;
}

/**
 * The application version lifecycle settings for an application. Defines the rules that Elastic Beanstalk applies to an application's versions in order to avoid hitting the per-region limit for application versions.
 *
 * When Elastic Beanstalk deletes an application version from its database, you can no longer deploy that version to an environment. The source bundle remains in S3 unless you configure the rule to delete it.
 *
 * @public
 */
export interface ApplicationVersionLifecycleConfig {
  /**
   * Specify a max count rule to restrict the number of application versions that are retained for an application.
   *
   * @public
   */
  MaxCountRule?: MaxCountRule | undefined;

  /**
   * Specify a max age rule to restrict the length of time that application versions are retained for an application.
   *
   * @public
   */
  MaxAgeRule?: MaxAgeRule | undefined;
}

/**
 * The resource lifecycle configuration for an application. Defines lifecycle settings for resources that belong to the application, and the service role that Elastic Beanstalk assumes in order to apply lifecycle settings. The version lifecycle configuration defines lifecycle settings for application versions.
 *
 * @public
 */
export interface ApplicationResourceLifecycleConfig {
  /**
   * The ARN of an IAM service role that Elastic Beanstalk has permission to assume.
   *
   * The `ServiceRole` property is required the first time that you provide a `VersionLifecycleConfig` for the application in one of the supporting calls (`CreateApplication` or `UpdateApplicationResourceLifecycle`). After you provide it once, in either one of the calls, Elastic Beanstalk persists the Service Role with the application, and you don't need to specify it again in subsequent `UpdateApplicationResourceLifecycle` calls. You can, however, specify it in subsequent calls to change the Service Role to another value.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * Defines lifecycle settings for application versions.
   *
   * @public
   */
  VersionLifecycleConfig?: ApplicationVersionLifecycleConfig | undefined;
}

/**
 * Describes the properties of an application.
 *
 * @public
 */
export interface ApplicationDescription {
  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * User-defined description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The date when the application was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the application was last modified.
   *
   * @public
   */
  DateUpdated?: Date | undefined;

  /**
   * The names of the versions for this application.
   *
   * @public
   */
  Versions?: string[] | undefined;

  /**
   * The names of the configuration templates associated with this application.
   *
   * @public
   */
  ConfigurationTemplates?: string[] | undefined;

  /**
   * The lifecycle settings for the application.
   *
   * @public
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig | undefined;
}

/**
 * Result message containing a single description of an application.
 *
 * @public
 */
export interface ApplicationDescriptionMessage {
  /**
   * The ApplicationDescription of the application.
   *
   * @public
   */
  Application?: ApplicationDescription | undefined;
}

/**
 * Result message containing a list of application descriptions.
 *
 * @public
 */
export interface ApplicationDescriptionsMessage {
  /**
   * This parameter contains a list of ApplicationDescription.
   *
   * @public
   */
  Applications?: ApplicationDescription[] | undefined;
}

/**
 * Represents the average latency for the slowest X percent of requests over the last 10 seconds.
 *
 * @public
 */
export interface Latency {
  /**
   * The average latency for the slowest 0.1 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P999?: number | undefined;

  /**
   * The average latency for the slowest 1 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P99?: number | undefined;

  /**
   * The average latency for the slowest 5 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P95?: number | undefined;

  /**
   * The average latency for the slowest 10 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P90?: number | undefined;

  /**
   * The average latency for the slowest 15 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P85?: number | undefined;

  /**
   * The average latency for the slowest 25 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P75?: number | undefined;

  /**
   * The average latency for the slowest 50 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P50?: number | undefined;

  /**
   * The average latency for the slowest 90 percent of requests over the last 10 seconds.
   *
   * @public
   */
  P10?: number | undefined;
}

/**
 * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response. For more information, see [Status Code Definitions](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html).
 *
 * @public
 */
export interface StatusCodes {
  /**
   * The percentage of requests over the last 10 seconds that resulted in a 2xx (200, 201, etc.) status code.
   *
   * @public
   */
  Status2xx?: number | undefined;

  /**
   * The percentage of requests over the last 10 seconds that resulted in a 3xx (300, 301, etc.) status code.
   *
   * @public
   */
  Status3xx?: number | undefined;

  /**
   * The percentage of requests over the last 10 seconds that resulted in a 4xx (400, 401, etc.) status code.
   *
   * @public
   */
  Status4xx?: number | undefined;

  /**
   * The percentage of requests over the last 10 seconds that resulted in a 5xx (500, 501, etc.) status code.
   *
   * @public
   */
  Status5xx?: number | undefined;
}

/**
 * Application request metrics for an Elastic Beanstalk environment.
 *
 * @public
 */
export interface ApplicationMetrics {
  /**
   * The amount of time that the metrics cover (usually 10 seconds). For example, you might have 5 requests (`request_count`) within the most recent time slice of 10 seconds (`duration`).
   *
   * @public
   */
  Duration?: number | undefined;

  /**
   * Average number of requests handled by the web server per second over the last 10 seconds.
   *
   * @public
   */
  RequestCount?: number | undefined;

  /**
   * Represents the percentage of requests over the last 10 seconds that resulted in each type of status code response.
   *
   * @public
   */
  StatusCodes?: StatusCodes | undefined;

  /**
   * Represents the average latency for the slowest X percent of requests over the last 10 seconds. Latencies are in seconds with one millisecond resolution.
   *
   * @public
   */
  Latency?: Latency | undefined;
}

/**
 * @public
 */
export interface ApplicationResourceLifecycleDescriptionMessage {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The lifecycle configuration.
   *
   * @public
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig | undefined;
}

/**
 * Settings that Elastic Beanstalk uses to build a container image from the source bundle of an application version.
 *
 * @public
 */
export interface ImageBuildConfiguration {
  /**
   * How Elastic Beanstalk builds the container image. Elastic Beanstalk rejects a `Build` that doesn't specify it.
   *
   * Valid values:
   *
   * - `docker` – Elastic Beanstalk builds the image from a Dockerfile in your source bundle. Specify the Dockerfile with `DockerfileLocation`.
   * - `buildpack` – Elastic Beanstalk builds the image with a Cloud Native Buildpacks builder. Specify the builder with `Buildpack`.
   *
   * @public
   */
  Type?: ImageBuildType | undefined;

  /**
   * The path to the Dockerfile within the source bundle, relative to the root of the source bundle. For example, `backend/Dockerfile`.
   *
   * Elastic Beanstalk uses this member only when `Type` is `docker`. If you don't specify it, Elastic Beanstalk uses the Dockerfile at the root of the source bundle.
   *
   * @public
   */
  DockerfileLocation?: string | undefined;

  /**
   * The Cloud Native Buildpacks builder image that Elastic Beanstalk uses to build the container image. For example, `paketobuildpacks/builder-jammy-base`.
   *
   * This member is required when `Type` is `buildpack`. Elastic Beanstalk doesn't provide a default builder.
   *
   * @public
   */
  Buildpack?: string | undefined;

  /**
   * The processor architecture that Elastic Beanstalk builds the container image for. The architecture must match the architecture of the instances in the environment that you deploy the application version to.
   *
   * Valid values:
   *
   * - `amd64` – x86-64 instances. This is the default.
   * - `arm64` – Amazon Web Services Graviton instances.
   *
   * @public
   */
  Architecture?: ArchitectureType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that CodeBuild assumes to run the build in your Amazon Web Services account. Elastic Beanstalk rejects a `Build` that doesn't specify this role.
   *
   * @public
   */
  CodeBuildServiceRole?: string | undefined;

  /**
   * The size of the compute resources that run the build. If you don't specify it, Elastic Beanstalk uses `BUILD_GENERAL1_MEDIUM`.
   *
   * Valid values:
   *
   * - `BUILD_GENERAL1_SMALL` – Use up to 3 GB memory and 2 vCPUs for builds.
   * - `BUILD_GENERAL1_MEDIUM` – Use up to 7 GB memory and 4 vCPUs for builds.
   * - `BUILD_GENERAL1_LARGE` – Use up to 15 GB memory and 8 vCPUs for builds.
   *
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * How long, in minutes from 5 to 480 (8 hours), Elastic Beanstalk waits before stopping a build that hasn't completed. The default is 60 minutes.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;
}

/**
 * The location of a container image.
 *
 * @public
 */
export interface ImageSource {
  /**
   * The URI of the container image, including the registry, the repository, and the image tag or digest. For example, `111122223333.dkr.ecr.us-east-1.amazonaws.com/my-repository:latest`.
   *
   * @public
   */
  Uri?: string | undefined;
}

/**
 * Location of the source code for an application version.
 *
 * @public
 */
export interface SourceBuildInformation {
  /**
   * The type of repository.
   *
   * - `Git`
   * - `Zip`
   *
   * @public
   */
  SourceType: SourceType | undefined;

  /**
   * Location where the repository is stored.
   *
   * - `CodeCommit`
   * - `S3`
   *
   * @public
   */
  SourceRepository: SourceRepository | undefined;

  /**
   * The location of the source code, as a formatted string, depending on the value of `SourceRepository`
   *
   * - For `CodeCommit`, the format is the repository name and commit ID, separated by a forward slash. For example, `my-git-repo/265cfa0cf6af46153527f55d6503ec030551f57a`.
   * - For `S3`, the format is the S3 bucket name and object key, separated by a forward slash. For example, `my-s3-bucket/Folders/my-source-file`.
   *
   * @public
   */
  SourceLocation: string | undefined;
}

/**
 * The bucket and key of an item stored in Amazon S3.
 *
 * @public
 */
export interface S3Location {
  /**
   * The Amazon S3 bucket where the data is located.
   *
   * @public
   */
  S3Bucket?: string | undefined;

  /**
   * The Amazon S3 key where the data is located.
   *
   * @public
   */
  S3Key?: string | undefined;
}

/**
 * Describes the properties of an application version.
 *
 * @public
 */
export interface ApplicationVersionDescription {
  /**
   * The Amazon Resource Name (ARN) of the application version.
   *
   * @public
   */
  ApplicationVersionArn?: string | undefined;

  /**
   * The name of the application to which the application version belongs.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The description of the application version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique identifier for the application version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * If the version's source code was retrieved from CodeCommit, the location of the source code for the application version.
   *
   * @public
   */
  SourceBuildInformation?: SourceBuildInformation | undefined;

  /**
   * Reference to the artifact from the CodeBuild build.
   *
   * @public
   */
  BuildArn?: string | undefined;

  /**
   * The storage location of the application version's source bundle in Amazon S3.
   *
   * @public
   */
  SourceBundle?: S3Location | undefined;

  /**
   * The location of the container image for the application version.
   *
   * For an application version created from an image you provide, this is that image. For one that Elastic Beanstalk builds from your source bundle, Elastic Beanstalk fills this in with the image it pushed after the build succeeds.
   *
   * @public
   */
  ImageSource?: ImageSource | undefined;

  /**
   * The settings that Elastic Beanstalk uses to build a container image from the source bundle of the application version. Not present for an application version created from an image you provide.
   *
   * @public
   */
  ImageBuildConfiguration?: ImageBuildConfiguration | undefined;

  /**
   * Indicates whether Elastic Beanstalk pre-processed and validated the environment manifest (`env.yaml`) and configuration files (`*.config` files in the `.ebextensions` folder) in the source bundle of the application version.
   *
   * @public
   */
  Process?: boolean | undefined;

  /**
   * The creation date of the application version.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The last modified date of the application version.
   *
   * @public
   */
  DateUpdated?: Date | undefined;

  /**
   * The processing status of the application version. Reflects the state of the application version during its creation. Many of the values are only applicable if you specified `True` for the `Process` parameter of the `CreateApplicationVersion` action. The following list describes the possible values.
   *
   * - `Unprocessed` – Application version wasn't pre-processed or validated. Elastic Beanstalk will validate configuration files during deployment of the application version to an environment.
   * - `Processing` – Elastic Beanstalk is currently processing the application version.
   * - `Building` – Application version is currently undergoing an CodeBuild build.
   * - `Processed` – Elastic Beanstalk was successfully pre-processed and validated.
   * - `Failed` – Either the CodeBuild build failed or configuration files didn't pass validation. This application version isn't usable.
   *
   * @public
   */
  Status?: ApplicationVersionStatus | undefined;
}

/**
 * Result message wrapping a single description of an application version.
 *
 * @public
 */
export interface ApplicationVersionDescriptionMessage {
  /**
   * The ApplicationVersionDescription of the application version.
   *
   * @public
   */
  ApplicationVersion?: ApplicationVersionDescription | undefined;
}

/**
 * Result message wrapping a list of application version descriptions.
 *
 * @public
 */
export interface ApplicationVersionDescriptionsMessage {
  /**
   * List of `ApplicationVersionDescription` objects sorted in order of creation.
   *
   * @public
   */
  ApplicationVersions?: ApplicationVersionDescription[] | undefined;

  /**
   * In a paginated request, the token that you can pass in a subsequent request to get the next response page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request to execute a scheduled managed action immediately.
 *
 * @public
 */
export interface ApplyEnvironmentManagedActionRequest {
  /**
   * The name of the target environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The environment ID of the target environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The action ID of the scheduled managed action to execute.
   *
   * @public
   */
  ActionId: string | undefined;
}

/**
 * The result message containing information about the managed action.
 *
 * @public
 */
export interface ApplyEnvironmentManagedActionResult {
  /**
   * The action ID of the managed action.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * A description of the managed action.
   *
   * @public
   */
  ActionDescription?: string | undefined;

  /**
   * The type of managed action.
   *
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * The status of the managed action.
   *
   * @public
   */
  Status?: string | undefined;
}

/**
 * Request to add or change the operations role used by an environment.
 *
 * @public
 */
export interface AssociateEnvironmentOperationsRoleMessage {
  /**
   * The name of the environment to which to set the operations role.
   *
   * @public
   */
  EnvironmentName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role.
   *
   * @public
   */
  OperationsRole: string | undefined;
}

/**
 * Describes an Auto Scaling launch configuration.
 *
 * @public
 */
export interface AutoScalingGroup {
  /**
   * The name of the `AutoScalingGroup` .
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the solution stack.
 *
 * @public
 */
export interface SolutionStackDescription {
  /**
   * The name of the solution stack.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The permitted file types allowed for a solution stack.
   *
   * @public
   */
  PermittedFileTypes?: string[] | undefined;
}

/**
 * Results message indicating whether a CNAME is available.
 *
 * @public
 */
export interface CheckDNSAvailabilityMessage {
  /**
   * The prefix used when this CNAME is reserved.
   *
   * @public
   */
  CNAMEPrefix: string | undefined;
}

/**
 * Indicates if the specified CNAME is available.
 *
 * @public
 */
export interface CheckDNSAvailabilityResultMessage {
  /**
   * Indicates if the specified CNAME is available:
   *
   * - `true` : The CNAME is available.
   * - `false` : The CNAME is not available.
   *
   * @public
   */
  Available?: boolean | undefined;

  /**
   * The fully qualified CNAME to reserve when CreateEnvironment is called with the provided prefix.
   *
   * @public
   */
  FullyQualifiedCNAME?: string | undefined;
}

/**
 * Request to create or update a group of environments.
 *
 * @public
 */
export interface ComposeEnvironmentsMessage {
  /**
   * The name of the application to which the specified source bundles belong.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The name of the group to which the target environments belong. Specify a group name only if the environment name defined in each target environment's manifest ends with a + (plus) character. See [Environment Manifest (env.yaml)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html) for details.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * A list of version labels, specifying one or more application source bundles that belong to the target application. Each source bundle must include an environment manifest that specifies the name of the environment and the name of the solution stack to use, and optionally can specify environment links to create.
   *
   * @public
   */
  VersionLabels?: string[] | undefined;
}

/**
 * A link to another environment, defined in the environment's manifest. Links provide connection information in system properties that can be used to connect to another environment in the same group. See [Environment Manifest (env.yaml)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html) for details.
 *
 * @public
 */
export interface EnvironmentLink {
  /**
   * The name of the link.
   *
   * @public
   */
  LinkName?: string | undefined;

  /**
   * The name of the linked environment (the dependency).
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * Describes the properties of a Listener for the LoadBalancer.
 *
 * @public
 */
export interface Listener {
  /**
   * The protocol that is used by the Listener.
   *
   * @public
   */
  Protocol?: string | undefined;

  /**
   * The port that is used by the Listener.
   *
   * @public
   */
  Port?: number | undefined;
}

/**
 * Describes the details of a LoadBalancer.
 *
 * @public
 */
export interface LoadBalancerDescription {
  /**
   * The name of the LoadBalancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * The domain name of the LoadBalancer.
   *
   * @public
   */
  Domain?: string | undefined;

  /**
   * A list of Listeners used by the LoadBalancer.
   *
   * @public
   */
  Listeners?: Listener[] | undefined;
}

/**
 * Describes the Amazon Web Services resources in use by this environment. This data is not live data.
 *
 * @public
 */
export interface EnvironmentResourcesDescription {
  /**
   * Describes the LoadBalancer.
   *
   * @public
   */
  LoadBalancer?: LoadBalancerDescription | undefined;
}

/**
 * Describes the properties of an environment tier
 *
 * @public
 */
export interface EnvironmentTier {
  /**
   * The name of this environment tier.
   *
   * Valid values:
   *
   * - For *Standard-mode EC2-based web server* – `WebServer`
   * - For *Standard-mode EC2-based backend application with Amazon SQS* – `Worker`
   * - For *Cluster-mode Amazon EKS-based applications* – `Cluster`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The type of this environment tier.
   *
   * Valid values:
   *
   * - For *Web server tier* – `Standard`
   * - For *Worker tier* – `SQS/HTTP`
   * - For *Cluster tier* – `EKS`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The version of this environment tier. When you don't set a value to it, Elastic Beanstalk uses the latest compatible worker tier version.
   *
   * > **Note:** This member is deprecated. Any specific version that you set may become out of date. We recommend leaving it unspecified.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Describes the properties of an environment.
 *
 * @public
 */
export interface EnvironmentDescription {
  /**
   * The name of this environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The ID of this environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the application associated with this environment.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The application version deployed in this environment.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The name of the `SolutionStack` deployed with this environment.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The name of the configuration template used to originally launch this environment.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * Describes this environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * For load-balanced, autoscaling environments, the URL to the LoadBalancer. For single-instance environments, the IP address of the instance.
   *
   * @public
   */
  EndpointURL?: string | undefined;

  /**
   * The URL to the CNAME for this environment.
   *
   * @public
   */
  CNAME?: string | undefined;

  /**
   * The creation date for this environment.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The last modified date for this environment.
   *
   * @public
   */
  DateUpdated?: Date | undefined;

  /**
   * The current operational status of the environment:
   *
   * - `Aborting`: Environment is in the process of aborting a deployment.
   * - `Launching`: Environment is in the process of initial deployment.
   * - `LinkingFrom`: Environment is in the process of being linked to by another environment. See [Environment links](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-links.html) for details.
   * - `LinkingTo`: Environment is in the process of linking to another environment. See [Environment links](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-links.html) for details.
   * - `Updating`: Environment is in the process of updating its configuration settings or application version.
   * - `Ready`: Environment is available to have an action performed on it, such as update or terminate.
   * - `Terminating`: Environment is in the shut-down process.
   * - `Terminated`: Environment is not running.
   *
   * @public
   */
  Status?: EnvironmentStatus | undefined;

  /**
   * Indicates if there is an in-progress environment configuration update or application version deployment that you can cancel.
   *
   * `true:` There is an update in progress.
   *
   * `false:` There are no updates currently in progress.
   *
   * @public
   */
  AbortableOperationInProgress?: boolean | undefined;

  /**
   * Describes the health status of the environment. Elastic Beanstalk indicates the failure levels for a running environment:
   *
   * - `Red`: Indicates the environment is not responsive. Occurs when three or more consecutive failures occur for an environment.
   * - `Yellow`: Indicates that something is wrong. Occurs when two consecutive failures occur for an environment.
   * - `Green`: Indicates the environment is healthy and fully functional.
   * - `Grey`: Default health for a new environment. The environment is not fully launched and health checks have not started or health checks are suspended during an `UpdateEnvironment` or `RestartEnvironment` request.
   *
   * Default: `Grey`
   *
   * @public
   */
  Health?: EnvironmentHealth | undefined;

  /**
   * Returns the health status of the application running in your environment. For more information, see [Health Colors and Statuses](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html).
   *
   * @public
   */
  HealthStatus?: EnvironmentHealthStatus | undefined;

  /**
   * The description of the Amazon Web Services resources used by this environment.
   *
   * @public
   */
  Resources?: EnvironmentResourcesDescription | undefined;

  /**
   * Describes the current tier of this environment.
   *
   * @public
   */
  Tier?: EnvironmentTier | undefined;

  /**
   * A list of links to other environments in the same group.
   *
   * @public
   */
  EnvironmentLinks?: EnvironmentLink[] | undefined;

  /**
   * The environment's Amazon Resource Name (ARN), which can be used in other API requests that require an ARN.
   *
   * @public
   */
  EnvironmentArn?: string | undefined;

  /**
   * > **Important:** The operations role feature of Elastic Beanstalk is in beta release and is subject to change.
   *
   * The Amazon Resource Name (ARN) of the environment's operations role.
   *
   * @public
   */
  OperationsRole?: string | undefined;
}

/**
 * Result message containing a list of environment descriptions.
 *
 * @public
 */
export interface EnvironmentDescriptionsMessage {
  /**
   * Returns an EnvironmentDescription list.
   *
   * @public
   */
  Environments?: EnvironmentDescription[] | undefined;

  /**
   * In a paginated request, the token that you can pass in a subsequent request to get the next response page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a tag applied to a resource in an environment.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Request to create an application.
 *
 * @public
 */
export interface CreateApplicationMessage {
  /**
   * The name of the application. Must be unique within your account.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * Your description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies an application resource lifecycle configuration to prevent your application from accumulating too many versions.
   *
   * @public
   */
  ResourceLifecycleConfig?: ApplicationResourceLifecycleConfig | undefined;

  /**
   * Specifies the tags applied to the application.
   *
   * Elastic Beanstalk applies these tags only to the application. Environments that you create in the application don't inherit the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Settings for an CodeBuild build.
 *
 * @public
 */
export interface BuildConfiguration {
  /**
   * The name of the artifact of the CodeBuild build. If provided, Elastic Beanstalk stores the build artifact in the S3 location *S3-bucket*\/resources/*application-name*\/codebuild/codebuild-*version-label*-*artifact-name*.zip. If not provided, Elastic Beanstalk stores the build artifact in the S3 location *S3-bucket*\/resources/*application-name*\/codebuild/codebuild-*version-label*.zip.
   *
   * @public
   */
  ArtifactName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role that enables CodeBuild to interact with dependent Amazon Web Services service on behalf of the Amazon Web Services account.
   *
   * @public
   */
  CodeBuildServiceRole: string | undefined;

  /**
   * Information about the compute resources the build project will use.
   *
   * - `BUILD_GENERAL1_SMALL: Use up to 3 GB memory and 2 vCPUs for builds`
   * - `BUILD_GENERAL1_MEDIUM: Use up to 7 GB memory and 4 vCPUs for builds`
   * - `BUILD_GENERAL1_LARGE: Use up to 15 GB memory and 8 vCPUs for builds`
   *
   * @public
   */
  ComputeType?: ComputeType | undefined;

  /**
   * The ID of the Docker image to use for this build project.
   *
   * @public
   */
  Image: string | undefined;

  /**
   * How long in minutes, from 5 to 480 (8 hours), for CodeBuild to wait until timing out any related build that does not get marked as completed. The default is 60 minutes.
   *
   * @public
   */
  TimeoutInMinutes?: number | undefined;
}

/**
 * The source of the container image for an application version: an image that you built and pushed to a container registry yourself, or settings for Elastic Beanstalk to build one from your source bundle.
 *
 * @public
 */
export interface ImageConfiguration {
  /**
   * The location of a container image that you built and pushed to a container registry yourself. Elastic Beanstalk deploys the image without a build step.
   *
   * If you specify `Source`, don't specify `Build` or the request's `SourceBundle` parameter.
   *
   * @public
   */
  Source?: ImageSource | undefined;

  /**
   * Settings that Elastic Beanstalk uses to build a container image from the source bundle of the application version.
   *
   * If you specify `Build`, also specify the request's `SourceBundle` parameter, and don't specify `Source`.
   *
   * @public
   */
  Build?: ImageBuildConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateApplicationVersionMessage {
  /**
   * The name of the application. If no application is found with this name, and `AutoCreateApplication` is `false`, returns an `InvalidParameterValue` error.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * A label identifying this version.
   *
   * Constraint: Must be unique per application. If an application version already exists with this label for the specified application, Elastic Beanstalk returns an `InvalidParameterValue` error.
   *
   * @public
   */
  VersionLabel: string | undefined;

  /**
   * A description of this application version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specify a commit in an CodeCommit Git repository to use as the source code for the application version.
   *
   * @public
   */
  SourceBuildInformation?: SourceBuildInformation | undefined;

  /**
   * The Amazon S3 bucket and key that identify the location of the source bundle for this version.
   *
   * > **Note:**
   * >
   * > The Amazon S3 bucket must be in the same region as the environment.
   * >
   * > Unless you're specifying a source bundle in the bucket that Elastic Beanstalk manages in your account, you must assign a custom policy to your user, and grant `Allow` permission to the `s3:Get*` actions on your S3 object resource, for example, `arn:aws:s3:::your-bucket/your-source-bundle-object`.
   *
   * Specify a source bundle in Amazon S3 or a commit in an CodeCommit repository (with `SourceBuildInformation`), but not both. If neither `SourceBundle` nor `SourceBuildInformation` are provided, Elastic Beanstalk uses a sample application.
   *
   * @public
   */
  SourceBundle?: S3Location | undefined;

  /**
   * Settings for an CodeBuild build.
   *
   * Don't specify `BuildConfiguration` together with `ImageConfiguration`, which configures a container image build instead.
   *
   * @public
   */
  BuildConfiguration?: BuildConfiguration | undefined;

  /**
   * Set to `true` to create an application with the specified name if it doesn't already exist.
   *
   * @public
   */
  AutoCreateApplication?: boolean | undefined;

  /**
   * Pre-processes and validates the environment manifest (`env.yaml`) and configuration files (`*.config` files in the `.ebextensions` folder) in the source bundle. Validating configuration files can identify issues prior to deploying the application version to an environment.
   *
   * You must turn processing on for application versions that you create using CodeBuild or CodeCommit. For application versions built from a source bundle in Amazon S3, processing is optional.
   *
   * > **Note:** The `Process` option validates Elastic Beanstalk configuration files. It doesn't validate your application's configuration files, like proxy server or Docker configuration.
   *
   * @public
   */
  Process?: boolean | undefined;

  /**
   * Specifies the tags applied to the application version.
   *
   * Elastic Beanstalk applies these tags only to the application version. Environments that use the application version don't inherit the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The source of the container image for this application version. You can specify an image that you built and pushed to a container registry yourself, or settings for Elastic Beanstalk to build one from your source bundle. Specify exactly one of the `Source` and `Build` members.
   *
   * Don't specify `ImageConfiguration` together with `BuildConfiguration`, which configures an CodeBuild build instead.
   *
   * @public
   */
  ImageConfiguration?: ImageConfiguration | undefined;
}

/**
 * A specification identifying an individual configuration option along with its current value. For a list of possible namespaces and option values, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *Elastic Beanstalk Developer Guide*.
 *
 * @public
 */
export interface ConfigurationOptionSetting {
  /**
   * A unique resource name for the option setting. Use it for a time–based scaling configuration option.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * A unique namespace that identifies the option's associated Amazon Web Services resource.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the configuration option.
   *
   * @public
   */
  OptionName?: string | undefined;

  /**
   * The current value for the configuration option.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Describes the settings for a configuration set.
 *
 * @public
 */
export interface ConfigurationSettingsDescription {
  /**
   * The name of the solution stack this configuration set uses.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The name of the application associated with this configuration set.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * If not `null`, the name of the configuration template for this configuration set.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * Describes this configuration set.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If not `null`, the name of the environment for this configuration set.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * If this configuration set is associated with an environment, the `DeploymentStatus` parameter indicates the deployment status of this configuration set:
   *
   * - `null`: This configuration is not associated with a running environment.
   * - `pending`: This is a draft configuration that is not deployed to the associated environment but is in the process of deploying.
   * - `deployed`: This is the configuration that is currently deployed to the associated running environment.
   * - `failed`: This is a draft configuration that failed to successfully deploy.
   *
   * @public
   */
  DeploymentStatus?: ConfigurationDeploymentStatus | undefined;

  /**
   * The date (in UTC time) when this configuration set was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date (in UTC time) when this configuration set was last modified.
   *
   * @public
   */
  DateUpdated?: Date | undefined;

  /**
   * A list of the configuration options and their values in this configuration set.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;
}

/**
 * A specification for an environment configuration.
 *
 * @public
 */
export interface SourceConfiguration {
  /**
   * The name of the application associated with the configuration.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The name of the configuration template.
   *
   * @public
   */
  TemplateName?: string | undefined;
}

/**
 * Request to create a configuration template.
 *
 * @public
 */
export interface CreateConfigurationTemplateMessage {
  /**
   * The name of the Elastic Beanstalk application to associate with this configuration template.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the configuration template.
   *
   * Constraint: This name must be unique per application.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * The name of an Elastic Beanstalk solution stack (platform version) that this configuration uses. For example, `64bit Amazon Linux 2013.09 running Tomcat 7 Java 7`. A solution stack specifies the operating system, runtime, and application server for a configuration template. It also determines the set of configuration options as well as the possible and default values. For more information, see [Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/concepts.platforms.html) in the *Elastic Beanstalk Developer Guide*.
   *
   * You must specify `SolutionStackName` if you don't specify `PlatformArn`, `EnvironmentId`, or `SourceConfiguration`.
   *
   * Use the [`ListAvailableSolutionStacks`](https://docs.aws.amazon.com/elasticbeanstalk/latest/api/API_ListAvailableSolutionStacks.html) API to obtain a list of available solution stacks.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom platform. For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the *Elastic Beanstalk Developer Guide*.
   *
   * > **Note:** If you specify `PlatformArn`, then don't specify `SolutionStackName`.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * An Elastic Beanstalk configuration template to base this one on. If specified, Elastic Beanstalk uses the configuration values from the specified configuration template to create a new configuration.
   *
   * Values specified in `OptionSettings` override any values obtained from the `SourceConfiguration`.
   *
   * You must specify `SourceConfiguration` if you don't specify `PlatformArn`, `EnvironmentId`, or `SolutionStackName`.
   *
   * Constraint: If both solution stack name and source configuration are specified, the solution stack of the source configuration template must match the specified solution stack name.
   *
   * @public
   */
  SourceConfiguration?: SourceConfiguration | undefined;

  /**
   * The ID of an environment whose settings you want to use to create the configuration template. You must specify `EnvironmentId` if you don't specify `PlatformArn`, `SolutionStackName`, or `SourceConfiguration`.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * An optional description for this configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Option values for the Elastic Beanstalk configuration, such as the instance type. If specified, these values override the values obtained from the solution stack or the source configuration template. For a complete list of Elastic Beanstalk configuration options, see [Option Values](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/command-options.html) in the *Elastic Beanstalk Developer Guide*.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;

  /**
   * Specifies the tags applied to the configuration template.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * A specification identifying an individual configuration option.
 *
 * @public
 */
export interface OptionSpecification {
  /**
   * A unique resource name for a time-based scaling configuration option.
   *
   * @public
   */
  ResourceName?: string | undefined;

  /**
   * A unique namespace identifying the option's associated Amazon Web Services resource.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the configuration option.
   *
   * @public
   */
  OptionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentMessage {
  /**
   * The name of the application that is associated with this environment.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * A unique name for the environment.
   *
   * Constraint: Must be from 4 to 40 characters in length. The name can contain only letters, numbers, and hyphens. It can't start or end with a hyphen. This name must be unique within a region in your account. If the specified name already exists in the region, Elastic Beanstalk returns an `InvalidParameterValue` error.
   *
   * If you don't specify the `CNAMEPrefix` parameter, the environment name becomes part of the CNAME, and therefore part of the visible URL for your application.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name parameter. See [Environment Manifest (env.yaml)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html) for details.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * Your description for this environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * If specified, the environment attempts to use this value as the prefix for the CNAME in your Elastic Beanstalk environment URL. If not specified, the CNAME is generated automatically by appending a random alphanumeric string to the environment name.
   *
   * @public
   */
  CNAMEPrefix?: string | undefined;

  /**
   * Specifies the tier to use in creating this environment. The environment tier that you choose determines whether Elastic Beanstalk provisions resources on Amazon EC2 instances or on an Amazon EKS cluster, and, for Amazon EC2, whether the environment serves HTTP(S) requests or processes background tasks from a queue.
   *
   * @public
   */
  Tier?: EnvironmentTier | undefined;

  /**
   * Specifies the tags applied to resources in the environment.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of the application version to deploy.
   *
   * Default: If not specified, Elastic Beanstalk attempts to deploy the sample application.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The name of the Elastic Beanstalk configuration template to use with the environment.
   *
   * > **Note:** If you specify `TemplateName`, then don't specify `SolutionStackName`.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The name of an Elastic Beanstalk solution stack (platform version) to use with the environment. If specified, Elastic Beanstalk sets the configuration values to the default values associated with the specified solution stack. For a list of current solution stacks, see [Elastic Beanstalk Supported Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/platforms/platforms-supported.html) in the *Elastic Beanstalk Platforms* guide.
   *
   * > **Note:** If you specify `SolutionStackName`, don't specify `PlatformArn` or `TemplateName`.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the custom platform to use with the environment. For more information, see [Custom Platforms](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/custom-platforms.html) in the *Elastic Beanstalk Developer Guide*.
   *
   * > **Note:** If you specify `PlatformArn`, don't specify `SolutionStackName`.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * If specified, Elastic Beanstalk sets the specified configuration options to the requested value in the configuration set for the new environment. These override the values obtained from the solution stack or the configuration template.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;

  /**
   * A list of custom user-defined configuration options to remove from the configuration set for this new environment.
   *
   * @public
   */
  OptionsToRemove?: OptionSpecification[] | undefined;

  /**
   * > **Important:** The operations role feature of Elastic Beanstalk is in beta release and is subject to change.
   *
   * The Amazon Resource Name (ARN) of an existing IAM role to be used as the environment's operations role. If specified, Elastic Beanstalk uses the operations role for permissions to downstream services during this call and during subsequent calls acting on this environment. To specify an operations role, you must have the `iam:PassRole` permission for the role.
   *
   * @public
   */
  OperationsRole?: string | undefined;
}

/**
 * Request to create a new platform version.
 *
 * @public
 */
export interface CreatePlatformVersionRequest {
  /**
   * The name of your custom platform.
   *
   * @public
   */
  PlatformName: string | undefined;

  /**
   * The number, such as 1.0.2, for the new platform version.
   *
   * @public
   */
  PlatformVersion: string | undefined;

  /**
   * The location of the platform definition archive in Amazon S3.
   *
   * @public
   */
  PlatformDefinitionBundle: S3Location | undefined;

  /**
   * The name of the builder environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The configuration option settings to apply to the builder environment.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;

  /**
   * Specifies the tags applied to the new platform version.
   *
   * Elastic Beanstalk applies these tags only to the platform version. Environments that you create using the platform version don't inherit the tags.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * The builder used to build the custom platform.
 *
 * @public
 */
export interface Builder {
  /**
   * The ARN of the builder.
   *
   * @public
   */
  ARN?: string | undefined;
}

/**
 * Summary information about a platform version.
 *
 * @public
 */
export interface PlatformSummary {
  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the person who created the platform version.
   *
   * @public
   */
  PlatformOwner?: string | undefined;

  /**
   * The status of the platform version. You can create an environment from the platform version once it is ready.
   *
   * @public
   */
  PlatformStatus?: PlatformStatus | undefined;

  /**
   * The category of platform version.
   *
   * @public
   */
  PlatformCategory?: string | undefined;

  /**
   * The operating system used by the platform version.
   *
   * @public
   */
  OperatingSystemName?: string | undefined;

  /**
   * The version of the operating system used by the platform version.
   *
   * @public
   */
  OperatingSystemVersion?: string | undefined;

  /**
   * The tiers in which the platform version runs.
   *
   * @public
   */
  SupportedTierList?: string[] | undefined;

  /**
   * The additions associated with the platform version.
   *
   * @public
   */
  SupportedAddonList?: string[] | undefined;

  /**
   * The state of the platform version in its lifecycle.
   *
   * Possible values: `recommended` | empty
   *
   * If an empty value is returned, the platform version is supported but isn't the recommended one for its branch.
   *
   * @public
   */
  PlatformLifecycleState?: string | undefined;

  /**
   * The version string of the platform version.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The platform branch to which the platform version belongs.
   *
   * @public
   */
  PlatformBranchName?: string | undefined;

  /**
   * The state of the platform version's branch in its lifecycle.
   *
   * Possible values: `beta` | `supported` | `deprecated` | `retired`
   *
   * @public
   */
  PlatformBranchLifecycleState?: string | undefined;
}

/**
 * @public
 */
export interface CreatePlatformVersionResult {
  /**
   * Detailed information about the new version of the custom platform.
   *
   * @public
   */
  PlatformSummary?: PlatformSummary | undefined;

  /**
   * The builder used to create the custom platform.
   *
   * @public
   */
  Builder?: Builder | undefined;
}

/**
 * Results of a CreateStorageLocationResult call.
 *
 * @public
 */
export interface CreateStorageLocationResultMessage {
  /**
   * The name of the Amazon S3 bucket created.
   *
   * @public
   */
  S3Bucket?: string | undefined;
}

/**
 * Request to delete an application.
 *
 * @public
 */
export interface DeleteApplicationMessage {
  /**
   * The name of the application to delete.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * When set to true, running environments will be terminated before deleting the application.
   *
   * @public
   */
  TerminateEnvByForce?: boolean | undefined;
}

/**
 * Request to delete an application version.
 *
 * @public
 */
export interface DeleteApplicationVersionMessage {
  /**
   * The name of the application to which the version belongs.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The label of the version to delete.
   *
   * @public
   */
  VersionLabel: string | undefined;

  /**
   * Set to `true` to delete the source bundle from your storage bucket. Otherwise, the application version is deleted only from Elastic Beanstalk and the source bundle remains in Amazon S3.
   *
   * @public
   */
  DeleteSourceBundle?: boolean | undefined;
}

/**
 * Request to delete a configuration template.
 *
 * @public
 */
export interface DeleteConfigurationTemplateMessage {
  /**
   * The name of the application to delete the configuration template from.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the configuration template to delete.
   *
   * @public
   */
  TemplateName: string | undefined;
}

/**
 * Request to delete a draft environment configuration.
 *
 * @public
 */
export interface DeleteEnvironmentConfigurationMessage {
  /**
   * The name of the application the environment is associated with.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the environment to delete the draft configuration from.
   *
   * @public
   */
  EnvironmentName: string | undefined;
}

/**
 * @public
 */
export interface DeletePlatformVersionRequest {
  /**
   * The ARN of the version of the custom platform.
   *
   * @public
   */
  PlatformArn?: string | undefined;
}

/**
 * @public
 */
export interface DeletePlatformVersionResult {
  /**
   * Detailed information about the version of the custom platform.
   *
   * @public
   */
  PlatformSummary?: PlatformSummary | undefined;
}

/**
 * The Elastic Beanstalk quota information for a single resource type in an Amazon Web Services account. It reflects the resource's limits for this account.
 *
 * @public
 */
export interface ResourceQuota {
  /**
   * The maximum number of instances of this Elastic Beanstalk resource type that an Amazon Web Services account can use.
   *
   * @public
   */
  Maximum?: number | undefined;
}

/**
 * A set of per-resource Elastic Beanstalk quotas associated with an Amazon Web Services account. They reflect Elastic Beanstalk resource limits for this account.
 *
 * @public
 */
export interface ResourceQuotas {
  /**
   * The quota for applications in the Amazon Web Services account.
   *
   * @public
   */
  ApplicationQuota?: ResourceQuota | undefined;

  /**
   * The quota for application versions in the Amazon Web Services account.
   *
   * @public
   */
  ApplicationVersionQuota?: ResourceQuota | undefined;

  /**
   * The quota for environments in the Amazon Web Services account.
   *
   * @public
   */
  EnvironmentQuota?: ResourceQuota | undefined;

  /**
   * The quota for configuration templates in the Amazon Web Services account.
   *
   * @public
   */
  ConfigurationTemplateQuota?: ResourceQuota | undefined;

  /**
   * The quota for custom platforms in the Amazon Web Services account.
   *
   * @public
   */
  CustomPlatformQuota?: ResourceQuota | undefined;
}

/**
 * @public
 */
export interface DescribeAccountAttributesResult {
  /**
   * The Elastic Beanstalk resource quotas associated with the calling Amazon Web Services account.
   *
   * @public
   */
  ResourceQuotas?: ResourceQuotas | undefined;
}

/**
 * Request to describe one or more applications.
 *
 * @public
 */
export interface DescribeApplicationsMessage {
  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to only include those with the specified names.
   *
   * @public
   */
  ApplicationNames?: string[] | undefined;
}

/**
 * Request to describe application versions.
 *
 * @public
 */
export interface DescribeApplicationVersionsMessage {
  /**
   * Specify an application name to show only application versions for that application.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * Specify a version label to show a specific application version.
   *
   * @public
   */
  VersionLabels?: string[] | undefined;

  /**
   * For a paginated request. Specify a maximum number of application versions to include in each response.
   *
   * If no `MaxRecords` is specified, all available application versions are retrieved in a single response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If no `NextToken` is specified, the first page is retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A regular expression representing a restriction on a string configuration option value.
 *
 * @public
 */
export interface OptionRestrictionRegex {
  /**
   * The regular expression pattern that a string configuration option value with this restriction must match.
   *
   * @public
   */
  Pattern?: string | undefined;

  /**
   * A unique name representing this regular expression.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * Describes the possible values for a configuration option.
 *
 * @public
 */
export interface ConfigurationOptionDescription {
  /**
   * A unique namespace identifying the option's associated Amazon Web Services resource.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the configuration option.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The default value for this configuration option.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * An indication of which action is required if the value for this configuration option changes:
   *
   * - `NoInterruption` : There is no interruption to the environment or application availability.
   * - `RestartEnvironment` : The environment is entirely restarted, all A resources are deleted and recreated, and the environment is unavailable during the process.
   * - `RestartApplicationServer` : The environment is available the entire time. However, a short application outage occurs when the application servers on the running Amazon EC2 instances are restarted.
   *
   * @public
   */
  ChangeSeverity?: string | undefined;

  /**
   * An indication of whether the user defined this configuration option:
   *
   * - `true` : This configuration option was defined by the user. It is a valid choice for specifying if this as an `Option to Remove` when updating configuration settings.
   * - `false` : This configuration was not defined by the user.
   *
   * Constraint: You can remove only `UserDefined` options from a configuration.
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  UserDefined?: boolean | undefined;

  /**
   * An indication of which type of values this option has and whether it is allowable to select one or more than one of the possible values:
   *
   * - `Scalar` : Values for this option are a single selection from the possible values, or an unformatted string, or numeric value governed by the `MIN/MAX/Regex` constraints.
   * - `List` : Values for this option are multiple selections from the possible values.
   * - `Boolean` : Values for this option are either `true` or `false` .
   * - `Json` : Values for this option are a JSON representation of a `ConfigDocument`.
   *
   * @public
   */
  ValueType?: ConfigurationOptionValueType | undefined;

  /**
   * If specified, values for the configuration option are selected from this list.
   *
   * @public
   */
  ValueOptions?: string[] | undefined;

  /**
   * If specified, the configuration option must be a numeric value greater than this value.
   *
   * @public
   */
  MinValue?: number | undefined;

  /**
   * If specified, the configuration option must be a numeric value less than this value.
   *
   * @public
   */
  MaxValue?: number | undefined;

  /**
   * If specified, the configuration option must be a string value no longer than this value.
   *
   * @public
   */
  MaxLength?: number | undefined;

  /**
   * If specified, the configuration option must be a string value that satisfies this regular expression.
   *
   * @public
   */
  Regex?: OptionRestrictionRegex | undefined;
}

/**
 * Describes the settings for a specified configuration set.
 *
 * @public
 */
export interface ConfigurationOptionsDescription {
  /**
   * The name of the solution stack these configuration options belong to.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * A list of ConfigurationOptionDescription.
   *
   * @public
   */
  Options?: ConfigurationOptionDescription[] | undefined;
}

/**
 * Result message containing a list of application version descriptions.
 *
 * @public
 */
export interface DescribeConfigurationOptionsMessage {
  /**
   * The name of the application associated with the configuration template or environment. Only needed if you want to describe the configuration options associated with either the configuration template or environment.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The name of the configuration template whose configuration options you want to describe.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The name of the environment whose configuration options you want to describe.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The name of the solution stack whose configuration options you want to describe.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The ARN of the custom platform.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * If specified, restricts the descriptions to only the specified options.
   *
   * @public
   */
  Options?: OptionSpecification[] | undefined;
}

/**
 * The results from a request to change the configuration settings of an environment.
 *
 * @public
 */
export interface ConfigurationSettingsDescriptions {
  /**
   * A list of ConfigurationSettingsDescription.
   *
   * @public
   */
  ConfigurationSettings?: ConfigurationSettingsDescription[] | undefined;
}

/**
 * Result message containing all of the configuration settings for a specified solution stack or configuration template.
 *
 * @public
 */
export interface DescribeConfigurationSettingsMessage {
  /**
   * The application for the environment or configuration template.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the configuration template to describe.
   *
   * Conditional: You must specify either this parameter or an EnvironmentName, but not both. If you specify both, Elastic Beanstalk returns an `InvalidParameterCombination` error. If you do not specify either, Elastic Beanstalk returns a `MissingRequiredParameter` error.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The name of the environment to describe.
   *
   * Condition: You must specify either this or a TemplateName, but not both. If you specify both, Elastic Beanstalk returns an `InvalidParameterCombination` error. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * See the example below to learn how to create a request body.
 *
 * @public
 */
export interface DescribeEnvironmentHealthRequest {
  /**
   * Specify the environment by name.
   *
   * You must specify either this or an EnvironmentName, or both.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * Specify the environment by ID.
   *
   * You must specify either this or an EnvironmentName, or both.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * Specify the response elements to return. To retrieve all attributes, set to `All`. If no attribute names are specified, returns the name of the environment.
   *
   * @public
   */
  AttributeNames?: EnvironmentHealthAttribute[] | undefined;
}

/**
 * Represents summary information about the health of an instance. For more information, see [Health Colors and Statuses](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html).
 *
 * @public
 */
export interface InstanceHealthSummary {
  /**
   * **Grey.** Elastic Beanstalk and the health agent are reporting no data on an instance.
   *
   * @public
   */
  NoData?: number | undefined;

  /**
   * **Grey.** Elastic Beanstalk and the health agent are reporting an insufficient amount of data on an instance.
   *
   * @public
   */
  Unknown?: number | undefined;

  /**
   * **Grey.** An operation is in progress on an instance within the command timeout.
   *
   * @public
   */
  Pending?: number | undefined;

  /**
   * **Green.** An instance is passing health checks and the health agent is not reporting any problems.
   *
   * @public
   */
  Ok?: number | undefined;

  /**
   * **Green.** An operation is in progress on an instance.
   *
   * @public
   */
  Info?: number | undefined;

  /**
   * **Yellow.** The health agent is reporting a moderate number of request failures or other issues for an instance or environment.
   *
   * @public
   */
  Warning?: number | undefined;

  /**
   * **Red.** The health agent is reporting a high number of request failures or other issues for an instance or environment.
   *
   * @public
   */
  Degraded?: number | undefined;

  /**
   * **Red.** The health agent is reporting a very high number of request failures or other issues for an instance or environment.
   *
   * @public
   */
  Severe?: number | undefined;
}

/**
 * Health details for an Elastic Beanstalk environment.
 *
 * @public
 */
export interface DescribeEnvironmentHealthResult {
  /**
   * The environment's name.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The [health status](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html) of the environment. For example, `Ok`.
   *
   * @public
   */
  HealthStatus?: string | undefined;

  /**
   * The environment's operational status. `Ready`, `Launching`, `Updating`, `Terminating`, or `Terminated`.
   *
   * @public
   */
  Status?: EnvironmentHealth | undefined;

  /**
   * The [health color](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html) of the environment.
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Descriptions of the data that contributed to the environment's current health status.
   *
   * @public
   */
  Causes?: string[] | undefined;

  /**
   * Application request metrics for the environment.
   *
   * @public
   */
  ApplicationMetrics?: ApplicationMetrics | undefined;

  /**
   * Summary health information for the instances in the environment.
   *
   * @public
   */
  InstancesHealth?: InstanceHealthSummary | undefined;

  /**
   * The date and time that the health information was retrieved.
   *
   * @public
   */
  RefreshedAt?: Date | undefined;
}

/**
 * Request to list completed and failed managed actions.
 *
 * @public
 */
export interface DescribeEnvironmentManagedActionHistoryRequest {
  /**
   * The environment ID of the target environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the target environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The pagination token returned by a previous request.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return for a single request.
   *
   * @public
   */
  MaxItems?: number | undefined;
}

/**
 * The record of a completed or failed managed action.
 *
 * @public
 */
export interface ManagedActionHistoryItem {
  /**
   * A unique identifier for the managed action.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * The type of the managed action.
   *
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * A description of the managed action.
   *
   * @public
   */
  ActionDescription?: string | undefined;

  /**
   * If the action failed, the type of failure.
   *
   * @public
   */
  FailureType?: FailureType | undefined;

  /**
   * The status of the action.
   *
   * @public
   */
  Status?: ActionHistoryStatus | undefined;

  /**
   * If the action failed, a description of the failure.
   *
   * @public
   */
  FailureDescription?: string | undefined;

  /**
   * The date and time that the action started executing.
   *
   * @public
   */
  ExecutedTime?: Date | undefined;

  /**
   * The date and time that the action finished executing.
   *
   * @public
   */
  FinishedTime?: Date | undefined;
}

/**
 * A result message containing a list of completed and failed managed actions.
 *
 * @public
 */
export interface DescribeEnvironmentManagedActionHistoryResult {
  /**
   * A list of completed and failed managed actions.
   *
   * @public
   */
  ManagedActionHistoryItems?: ManagedActionHistoryItem[] | undefined;

  /**
   * A pagination token that you pass to DescribeEnvironmentManagedActionHistory to get the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request to list an environment's upcoming and in-progress managed actions.
 *
 * @public
 */
export interface DescribeEnvironmentManagedActionsRequest {
  /**
   * The name of the target environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The environment ID of the target environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * To show only actions with a particular status, specify a status.
   *
   * @public
   */
  Status?: ActionStatus | undefined;
}

/**
 * The record of an upcoming or in-progress managed action.
 *
 * @public
 */
export interface ManagedAction {
  /**
   * A unique identifier for the managed action.
   *
   * @public
   */
  ActionId?: string | undefined;

  /**
   * A description of the managed action.
   *
   * @public
   */
  ActionDescription?: string | undefined;

  /**
   * The type of managed action.
   *
   * @public
   */
  ActionType?: ActionType | undefined;

  /**
   * The status of the managed action. If the action is `Scheduled`, you can apply it immediately with ApplyEnvironmentManagedAction.
   *
   * @public
   */
  Status?: ActionStatus | undefined;

  /**
   * The start time of the maintenance window in which the managed action will execute.
   *
   * @public
   */
  WindowStartTime?: Date | undefined;
}

/**
 * The result message containing a list of managed actions.
 *
 * @public
 */
export interface DescribeEnvironmentManagedActionsResult {
  /**
   * A list of upcoming and in-progress managed actions.
   *
   * @public
   */
  ManagedActions?: ManagedAction[] | undefined;
}

/**
 * Request to describe the resources in an environment.
 *
 * @public
 */
export interface DescribeEnvironmentResourcesMessage {
  /**
   * The ID of the environment to retrieve Amazon Web Services resource usage data.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment to retrieve Amazon Web Services resource usage data.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * Describes the Amazon EKS cluster that an environment runs on.
 *
 * @public
 */
export interface Cluster {
  /**
   * The Amazon Resource Name (ARN) of the Amazon EKS cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * The description of an Amazon EC2 instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The ID of the Amazon EC2 instance.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Describes an Auto Scaling launch configuration.
 *
 * @public
 */
export interface LaunchConfiguration {
  /**
   * The name of the launch configuration.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes an Amazon EC2 launch template.
 *
 * @public
 */
export interface LaunchTemplate {
  /**
   * The ID of the launch template.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * Describes a LoadBalancer.
 *
 * @public
 */
export interface LoadBalancer {
  /**
   * The name of the LoadBalancer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes a queue.
 *
 * @public
 */
export interface Queue {
  /**
   * The name of the queue.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The URL of the queue.
   *
   * @public
   */
  URL?: string | undefined;
}

/**
 * Describes a trigger.
 *
 * @public
 */
export interface Trigger {
  /**
   * The name of the trigger.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Describes the Amazon Web Services resources in use by this environment. This data is live.
 *
 * @public
 */
export interface EnvironmentResourceDescription {
  /**
   * The name of the environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The `AutoScalingGroups` used by this environment.
   *
   * @public
   */
  AutoScalingGroups?: AutoScalingGroup[] | undefined;

  /**
   * The Amazon EKS cluster that this environment runs on. This member is present only for environments in the *Cluster* tier.
   *
   * @public
   */
  Cluster?: Cluster | undefined;

  /**
   * The Amazon EC2 instances used by this environment.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * The Auto Scaling launch configurations in use by this environment.
   *
   * @public
   */
  LaunchConfigurations?: LaunchConfiguration[] | undefined;

  /**
   * The Amazon EC2 launch templates in use by this environment.
   *
   * @public
   */
  LaunchTemplates?: LaunchTemplate[] | undefined;

  /**
   * The LoadBalancers in use by this environment.
   *
   * @public
   */
  LoadBalancers?: LoadBalancer[] | undefined;

  /**
   * The `AutoScaling` triggers in use by this environment.
   *
   * @public
   */
  Triggers?: Trigger[] | undefined;

  /**
   * The queues used by this environment.
   *
   * @public
   */
  Queues?: Queue[] | undefined;
}

/**
 * Result message containing a list of environment resource descriptions.
 *
 * @public
 */
export interface EnvironmentResourceDescriptionsMessage {
  /**
   * A list of EnvironmentResourceDescription.
   *
   * @public
   */
  EnvironmentResources?: EnvironmentResourceDescription | undefined;
}

/**
 * Request to describe one or more environments.
 *
 * @public
 */
export interface DescribeEnvironmentsMessage {
  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to include only those that are associated with this application version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to include only those that have the specified IDs.
   *
   * @public
   */
  EnvironmentIds?: string[] | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to include only those that have the specified names.
   *
   * @public
   */
  EnvironmentNames?: string[] | undefined;

  /**
   * Indicates whether to include deleted environments:
   *
   * `true`: Environments that have been deleted after `IncludedDeletedBackTo` are displayed.
   *
   * `false`: Do not include deleted environments.
   *
   * @public
   */
  IncludeDeleted?: boolean | undefined;

  /**
   * If specified when `IncludeDeleted` is set to `true`, then environments deleted after this date are displayed.
   *
   * @public
   */
  IncludedDeletedBackTo?: Date | undefined;

  /**
   * For a paginated request. Specify a maximum number of environments to include in each response.
   *
   * If no `MaxRecords` is specified, all available environments are retrieved in a single response.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If no `NextToken` is specified, the first page is retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Request to retrieve a list of events for an environment.
 *
 * @public
 */
export interface DescribeEventsMessage {
  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to include only those associated with this application.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those associated with this application version.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those that are associated with this environment configuration.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those associated with this environment.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The ARN of a custom platform version. If specified, Elastic Beanstalk restricts the returned descriptions to those associated with this custom platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the described events to include only those associated with this request ID.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * If specified, limits the events returned from this call to include only those with the specified severity or higher.
   *
   * @public
   */
  Severity?: EventSeverity | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those that occur on or after this time.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * If specified, Elastic Beanstalk restricts the returned descriptions to those that occur up to, but not including, the `EndTime`.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * Specifies the maximum number of events that can be returned, beginning with the most recent event.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * Pagination token. If specified, the events return the next batch of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an event.
 *
 * @public
 */
export interface EventDescription {
  /**
   * The date when the event occurred.
   *
   * @public
   */
  EventDate?: Date | undefined;

  /**
   * The event message.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The application associated with the event.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The release label for the application version associated with this event.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The name of the configuration associated with this event.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The name of the environment associated with this event.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The web service request ID for the activity of this event.
   *
   * @public
   */
  RequestId?: string | undefined;

  /**
   * The severity level of this event.
   *
   * @public
   */
  Severity?: EventSeverity | undefined;
}

/**
 * Result message wrapping a list of event descriptions.
 *
 * @public
 */
export interface EventDescriptionsMessage {
  /**
   * A list of EventDescription.
   *
   * @public
   */
  Events?: EventDescription[] | undefined;

  /**
   * If returned, this indicates that there are more results to obtain. Use this token in the next DescribeEvents call to get the next batch of events.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Parameters for a call to `DescribeInstancesHealth`.
 *
 * @public
 */
export interface DescribeInstancesHealthRequest {
  /**
   * Specify the Elastic Beanstalk environment by name.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * Specify the Elastic Beanstalk environment by ID.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * Specifies the response elements you wish to receive. To retrieve all attributes, set to `All`. If no attribute names are specified, returns a list of instances.
   *
   * @public
   */
  AttributeNames?: InstancesHealthAttribute[] | undefined;

  /**
   * Specify the pagination token returned by a previous call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Information about an application version deployment.
 *
 * @public
 */
export interface Deployment {
  /**
   * The version label of the application version in the deployment.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * The ID of the deployment. This number increases by one each time that you deploy source code or change instance configuration settings.
   *
   * @public
   */
  DeploymentId?: number | undefined;

  /**
   * The status of the deployment:
   *
   * - `In Progress` : The deployment is in progress.
   * - `Deployed` : The deployment succeeded.
   * - `Failed` : The deployment failed.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * For in-progress deployments, the time that the deployment started.
   *
   * For completed deployments, the time that the deployment ended.
   *
   * @public
   */
  DeploymentTime?: Date | undefined;
}

/**
 * CPU utilization metrics for an instance.
 *
 * @public
 */
export interface CPUUtilization {
  /**
   * Percentage of time that the CPU has spent in the `User` state over the last 10 seconds.
   *
   * @public
   */
  User?: number | undefined;

  /**
   * Available on Linux environments only.
   *
   * Percentage of time that the CPU has spent in the `Nice` state over the last 10 seconds.
   *
   * @public
   */
  Nice?: number | undefined;

  /**
   * Available on Linux environments only.
   *
   * Percentage of time that the CPU has spent in the `System` state over the last 10 seconds.
   *
   * @public
   */
  System?: number | undefined;

  /**
   * Percentage of time that the CPU has spent in the `Idle` state over the last 10 seconds.
   *
   * @public
   */
  Idle?: number | undefined;

  /**
   * Available on Linux environments only.
   *
   * Percentage of time that the CPU has spent in the `I/O Wait` state over the last 10 seconds.
   *
   * @public
   */
  IOWait?: number | undefined;

  /**
   * Available on Linux environments only.
   *
   * Percentage of time that the CPU has spent in the `IRQ` state over the last 10 seconds.
   *
   * @public
   */
  IRQ?: number | undefined;

  /**
   * Available on Linux environments only.
   *
   * Percentage of time that the CPU has spent in the `SoftIRQ` state over the last 10 seconds.
   *
   * @public
   */
  SoftIRQ?: number | undefined;

  /**
   * Available on Windows environments only.
   *
   * Percentage of time that the CPU has spent in the `Privileged` state over the last 10 seconds.
   *
   * @public
   */
  Privileged?: number | undefined;
}

/**
 * CPU utilization and load average metrics for an Amazon EC2 instance.
 *
 * @public
 */
export interface SystemStatus {
  /**
   * CPU utilization metrics for the instance.
   *
   * @public
   */
  CPUUtilization?: CPUUtilization | undefined;

  /**
   * Load average in the last 1-minute, 5-minute, and 15-minute periods. For more information, see [Operating System Metrics](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-metrics.html#health-enhanced-metrics-os).
   *
   * @public
   */
  LoadAverage?: number[] | undefined;
}

/**
 * Detailed health information about an Amazon EC2 instance in your Elastic Beanstalk environment.
 *
 * @public
 */
export interface SingleInstanceHealth {
  /**
   * The ID of the Amazon EC2 instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Returns the health status of the specified instance. For more information, see [Health Colors and Statuses](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html).
   *
   * @public
   */
  HealthStatus?: string | undefined;

  /**
   * Represents the color indicator that gives you information about the health of the EC2 instance. For more information, see [Health Colors and Statuses](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/health-enhanced-status.html).
   *
   * @public
   */
  Color?: string | undefined;

  /**
   * Represents the causes, which provide more information about the current health status.
   *
   * @public
   */
  Causes?: string[] | undefined;

  /**
   * The time at which the EC2 instance was launched.
   *
   * @public
   */
  LaunchedAt?: Date | undefined;

  /**
   * Request metrics from your application.
   *
   * @public
   */
  ApplicationMetrics?: ApplicationMetrics | undefined;

  /**
   * Operating system metrics from the instance.
   *
   * @public
   */
  System?: SystemStatus | undefined;

  /**
   * Information about the most recent deployment to an instance.
   *
   * @public
   */
  Deployment?: Deployment | undefined;

  /**
   * The availability zone in which the instance runs.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The instance's type.
   *
   * @public
   */
  InstanceType?: string | undefined;
}

/**
 * Detailed health information about the Amazon EC2 instances in an Elastic Beanstalk environment.
 *
 * @public
 */
export interface DescribeInstancesHealthResult {
  /**
   * Detailed health information about each instance.
   *
   * The output differs slightly between Linux and Windows environments. There is a difference in the members that are supported under the `<CPUUtilization>` type.
   *
   * @public
   */
  InstanceHealthList?: SingleInstanceHealth[] | undefined;

  /**
   * The date and time that the health information was retrieved.
   *
   * @public
   */
  RefreshedAt?: Date | undefined;

  /**
   * Pagination token for the next page of results, if available.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlatformVersionRequest {
  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;
}

/**
 * A custom AMI available to platforms.
 *
 * @public
 */
export interface CustomAmi {
  /**
   * The type of virtualization used to create the custom AMI.
   *
   * @public
   */
  VirtualizationType?: string | undefined;

  /**
   * THe ID of the image used to create the custom AMI.
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * A framework supported by the platform.
 *
 * @public
 */
export interface PlatformFramework {
  /**
   * The name of the framework.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of the framework.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * A programming language supported by the platform.
 *
 * @public
 */
export interface PlatformProgrammingLanguage {
  /**
   * The name of the programming language.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of the programming language.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Detailed information about a platform version.
 *
 * @public
 */
export interface PlatformDescription {
  /**
   * The ARN of the platform version.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the person who created the platform version.
   *
   * @public
   */
  PlatformOwner?: string | undefined;

  /**
   * The name of the platform version.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The version of the platform version.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * The name of the solution stack used by the platform version.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The status of the platform version.
   *
   * @public
   */
  PlatformStatus?: PlatformStatus | undefined;

  /**
   * The date when the platform version was created.
   *
   * @public
   */
  DateCreated?: Date | undefined;

  /**
   * The date when the platform version was last updated.
   *
   * @public
   */
  DateUpdated?: Date | undefined;

  /**
   * The category of the platform version.
   *
   * @public
   */
  PlatformCategory?: string | undefined;

  /**
   * The description of the platform version.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Information about the maintainer of the platform version.
   *
   * @public
   */
  Maintainer?: string | undefined;

  /**
   * The operating system used by the platform version.
   *
   * @public
   */
  OperatingSystemName?: string | undefined;

  /**
   * The version of the operating system used by the platform version.
   *
   * @public
   */
  OperatingSystemVersion?: string | undefined;

  /**
   * The programming languages supported by the platform version.
   *
   * @public
   */
  ProgrammingLanguages?: PlatformProgrammingLanguage[] | undefined;

  /**
   * The frameworks supported by the platform version.
   *
   * @public
   */
  Frameworks?: PlatformFramework[] | undefined;

  /**
   * The custom AMIs supported by the platform version.
   *
   * @public
   */
  CustomAmiList?: CustomAmi[] | undefined;

  /**
   * The tiers supported by the platform version.
   *
   * @public
   */
  SupportedTierList?: string[] | undefined;

  /**
   * The additions supported by the platform version.
   *
   * @public
   */
  SupportedAddonList?: string[] | undefined;

  /**
   * The state of the platform version in its lifecycle.
   *
   * Possible values: `Recommended` | `null`
   *
   * If a null value is returned, the platform version isn't the recommended one for its branch. Each platform branch has a single recommended platform version, typically the most recent one.
   *
   * @public
   */
  PlatformLifecycleState?: string | undefined;

  /**
   * The platform branch to which the platform version belongs.
   *
   * @public
   */
  PlatformBranchName?: string | undefined;

  /**
   * The state of the platform version's branch in its lifecycle.
   *
   * Possible values: `Beta` | `Supported` | `Deprecated` | `Retired`
   *
   * @public
   */
  PlatformBranchLifecycleState?: string | undefined;
}

/**
 * @public
 */
export interface DescribePlatformVersionResult {
  /**
   * Detailed information about the platform version.
   *
   * @public
   */
  PlatformDescription?: PlatformDescription | undefined;
}

/**
 * Request to disassociate the operations role from an environment.
 *
 * @public
 */
export interface DisassociateEnvironmentOperationsRoleMessage {
  /**
   * The name of the environment from which to disassociate the operations role.
   *
   * @public
   */
  EnvironmentName: string | undefined;
}

/**
 * A list of available Elastic Beanstalk solution stacks.
 *
 * @public
 */
export interface ListAvailableSolutionStacksResultMessage {
  /**
   * A list of available solution stacks.
   *
   * @public
   */
  SolutionStacks?: string[] | undefined;

  /**
   * A list of available solution stacks and their SolutionStackDescription.
   *
   * @public
   */
  SolutionStackDetails?: SolutionStackDescription[] | undefined;
}

/**
 * Describes criteria to restrict a list of results.
 *
 * For operators that apply a single value to the attribute, the filter is evaluated as follows: `Attribute Operator Values[1]`
 *
 * Some operators, e.g. `in`, can apply multiple values. In this case, the filter is evaluated as a logical union (OR) of applications of the operator to the attribute with each one of the values: `(Attribute Operator Values[1]) OR (Attribute Operator Values[2]) OR ...`
 *
 * The valid values for attributes of `SearchFilter` depend on the API action. For valid values, see the reference page for the API action you're calling that takes a `SearchFilter` parameter.
 *
 * @public
 */
export interface SearchFilter {
  /**
   * The result attribute to which the filter values are applied. Valid values vary by API action.
   *
   * @public
   */
  Attribute?: string | undefined;

  /**
   * The operator to apply to the `Attribute` with each of the `Values`. Valid values vary by `Attribute`.
   *
   * @public
   */
  Operator?: string | undefined;

  /**
   * The list of values applied to the `Attribute` and `Operator` attributes. Number of values and valid values vary by `Attribute`.
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPlatformBranchesRequest {
  /**
   * Criteria for restricting the resulting list of platform branches. The filter is evaluated as a logical conjunction (AND) of the separate `SearchFilter` terms.
   *
   * The following list shows valid attribute values for each of the `SearchFilter` terms. Most operators take a single value. The `in` and `not_in` operators can take multiple values.
   *
   * - `Attribute = BranchName`:
   *
   *   - `Operator`: `=` | `!=` | `begins_with` | `ends_with` | `contains` | `in` | `not_in`
   * - `Attribute = LifecycleState`:
   *
   *   - `Operator`: `=` | `!=` | `in` | `not_in`
   *   - `Values`: `beta` | `supported` | `deprecated` | `retired`
   * - `Attribute = PlatformName`:
   *
   *   - `Operator`: `=` | `!=` | `begins_with` | `ends_with` | `contains` | `in` | `not_in`
   * - `Attribute = TierType`:
   *
   *   - `Operator`: `=` | `!=`
   *   - `Values`: `WebServer/Standard` | `Worker/SQS/HTTP`
   *
   * Array size: limited to 10 `SearchFilter` objects.
   *
   * Within each `SearchFilter` item, the `Values` array is limited to 10 items.
   *
   * @public
   */
  Filters?: SearchFilter[] | undefined;

  /**
   * The maximum number of platform branch values returned in one call.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If no `NextToken` is specified, the first page is retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Summary information about a platform branch.
 *
 * @public
 */
export interface PlatformBranchSummary {
  /**
   * The name of the platform to which this platform branch belongs.
   *
   * @public
   */
  PlatformName?: string | undefined;

  /**
   * The name of the platform branch.
   *
   * @public
   */
  BranchName?: string | undefined;

  /**
   * The support life cycle state of the platform branch.
   *
   * Possible values: `beta` | `supported` | `deprecated` | `retired`
   *
   * @public
   */
  LifecycleState?: string | undefined;

  /**
   * An ordinal number that designates the order in which platform branches have been added to a platform. This can be helpful, for example, if your code calls the `ListPlatformBranches` action and then displays a list of platform branches.
   *
   * A larger `BranchOrder` value designates a newer platform branch within the platform.
   *
   * @public
   */
  BranchOrder?: number | undefined;

  /**
   * The environment tiers that platform versions in this branch support.
   *
   * Possible values: `WebServer/Standard` | `Worker/SQS/HTTP`
   *
   * @public
   */
  SupportedTierList?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPlatformBranchesResult {
  /**
   * Summary information about the platform branches.
   *
   * @public
   */
  PlatformBranchSummaryList?: PlatformBranchSummary[] | undefined;

  /**
   * In a paginated request, if this value isn't `null`, it's the token that you can pass in a subsequent request to get the next response page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes criteria to restrict the results when listing platform versions.
 *
 * The filter is evaluated as follows: `Type Operator Values[1]`
 *
 * @public
 */
export interface PlatformFilter {
  /**
   * The platform version attribute to which the filter values are applied.
   *
   * Valid values: `PlatformName` | `PlatformVersion` | `PlatformStatus` | `PlatformBranchName` | `PlatformLifecycleState` | `PlatformOwner` | `SupportedTier` | `SupportedAddon` | `ProgrammingLanguageName` | `OperatingSystemName`
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The operator to apply to the `Type` with each of the `Values`.
   *
   * Valid values: `=` | `!=` | `<` | `<=` | `>` | `>=` | `contains` | `begins_with` | `ends_with`
   *
   * @public
   */
  Operator?: string | undefined;

  /**
   * The list of values applied to the filtering platform version attribute. Only one value is supported for all current operators.
   *
   * The following list shows valid filter values for some filter attributes.
   *
   * - `PlatformStatus`: `Creating` | `Failed` | `Ready` | `Deleting` | `Deleted`
   * - `PlatformLifecycleState`: `recommended`
   * - `SupportedTier`: `WebServer/Standard` | `Worker/SQS/HTTP`
   * - `SupportedAddon`: `Log/S3` | `Monitoring/Healthd` | `WorkerDaemon/SQSD`
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPlatformVersionsRequest {
  /**
   * Criteria for restricting the resulting list of platform versions. The filter is interpreted as a logical conjunction (AND) of the separate `PlatformFilter` terms.
   *
   * @public
   */
  Filters?: PlatformFilter[] | undefined;

  /**
   * The maximum number of platform version values returned in one call.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * For a paginated request. Specify a token from a previous response page to retrieve the next response page. All other parameter values must be identical to the ones specified in the initial request.
   *
   * If no `NextToken` is specified, the first page is retrieved.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPlatformVersionsResult {
  /**
   * Summary information about the platform versions.
   *
   * @public
   */
  PlatformSummaryList?: PlatformSummary[] | undefined;

  /**
   * In a paginated request, if this value isn't `null`, it's the token that you can pass in a subsequent request to get the next response page.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * The Amazon Resource Name (ARN) of the resouce for which a tag list is requested.
   *
   * Must be the ARN of an Elastic Beanstalk resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ResourceTagsDescriptionMessage {
  /**
   * The Amazon Resource Name (ARN) of the resource for which a tag list was requested.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A list of tag key-value pairs.
   *
   * @public
   */
  ResourceTags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface RebuildEnvironmentMessage {
  /**
   * The ID of the environment to rebuild.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment to rebuild.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * Request to retrieve logs from an environment and store them in your Elastic Beanstalk storage bucket.
 *
 * @public
 */
export interface RequestEnvironmentInfoMessage {
  /**
   * The ID of the environment of the requested data.
   *
   * If no such environment is found, `RequestEnvironmentInfo` returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment of the requested data.
   *
   * If no such environment is found, `RequestEnvironmentInfo` returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The type of information to request.
   *
   * @public
   */
  InfoType: EnvironmentInfoType | undefined;
}

/**
 * @public
 */
export interface RestartAppServerMessage {
  /**
   * The ID of the environment to restart the server for.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment to restart the server for.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;
}

/**
 * Request to download logs retrieved with RequestEnvironmentInfo.
 *
 * @public
 */
export interface RetrieveEnvironmentInfoMessage {
  /**
   * The ID of the data's environment.
   *
   * If no such environment is found, returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the data's environment.
   *
   * If no such environment is found, returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The type of information to retrieve.
   *
   * @public
   */
  InfoType: EnvironmentInfoType | undefined;
}

/**
 * The information retrieved from the Amazon EC2 instances.
 *
 * @public
 */
export interface EnvironmentInfoDescription {
  /**
   * The type of information retrieved.
   *
   * @public
   */
  InfoType?: EnvironmentInfoType | undefined;

  /**
   * The Amazon EC2 Instance ID for this information.
   *
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * The time stamp when this information was retrieved.
   *
   * @public
   */
  SampleTimestamp?: Date | undefined;

  /**
   * The retrieved information. Currently contains a presigned Amazon S3 URL. The files are deleted after 15 minutes.
   *
   * Anyone in possession of this URL can access the files before they are deleted. Make the URL available only to trusted parties.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Result message containing a description of the requested environment info.
 *
 * @public
 */
export interface RetrieveEnvironmentInfoResultMessage {
  /**
   * The EnvironmentInfoDescription of the environment.
   *
   * @public
   */
  EnvironmentInfo?: EnvironmentInfoDescription[] | undefined;
}

/**
 * Swaps the CNAMEs of two environments.
 *
 * @public
 */
export interface SwapEnvironmentCNAMEsMessage {
  /**
   * The ID of the source environment.
   *
   * Condition: You must specify at least the `SourceEnvironmentID` or the `SourceEnvironmentName`. You may also specify both. If you specify the `SourceEnvironmentId`, you must specify the `DestinationEnvironmentId`.
   *
   * @public
   */
  SourceEnvironmentId?: string | undefined;

  /**
   * The name of the source environment.
   *
   * Condition: You must specify at least the `SourceEnvironmentID` or the `SourceEnvironmentName`. You may also specify both. If you specify the `SourceEnvironmentName`, you must specify the `DestinationEnvironmentName`.
   *
   * @public
   */
  SourceEnvironmentName?: string | undefined;

  /**
   * The ID of the destination environment.
   *
   * Condition: You must specify at least the `DestinationEnvironmentID` or the `DestinationEnvironmentName`. You may also specify both. You must specify the `SourceEnvironmentId` with the `DestinationEnvironmentId`.
   *
   * @public
   */
  DestinationEnvironmentId?: string | undefined;

  /**
   * The name of the destination environment.
   *
   * Condition: You must specify at least the `DestinationEnvironmentID` or the `DestinationEnvironmentName`. You may also specify both. You must specify the `SourceEnvironmentName` with the `DestinationEnvironmentName`.
   *
   * @public
   */
  DestinationEnvironmentName?: string | undefined;
}

/**
 * Request to terminate an environment.
 *
 * @public
 */
export interface TerminateEnvironmentMessage {
  /**
   * The ID of the environment to terminate.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment to terminate.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * Indicates whether the associated Amazon Web Services resources should shut down when the environment is terminated:
   *
   * - `true`: The specified environment as well as the associated Amazon Web Services resources, such as Auto Scaling group and LoadBalancer, are terminated.
   * - `false`: Elastic Beanstalk resource management is removed from the environment, but the Amazon Web Services resources continue to operate.
   *
   * For more information, see the [Elastic Beanstalk User Guide.](https://docs.aws.amazon.com/elasticbeanstalk/latest/ug/)
   *
   * Default: `true`
   *
   * Valid Values: `true` | `false`
   *
   * @public
   */
  TerminateResources?: boolean | undefined;

  /**
   * Terminates the target environment even if another environment in the same group is dependent on it.
   *
   * @public
   */
  ForceTerminate?: boolean | undefined;
}

/**
 * Request to update an application.
 *
 * @public
 */
export interface UpdateApplicationMessage {
  /**
   * The name of the application to update. If no such application is found, `UpdateApplication` returns an `InvalidParameterValue` error.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * A new description for the application.
   *
   * Default: If not specified, Elastic Beanstalk does not update the description.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResourceLifecycleMessage {
  /**
   * The name of the application.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The lifecycle configuration.
   *
   * @public
   */
  ResourceLifecycleConfig: ApplicationResourceLifecycleConfig | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationVersionMessage {
  /**
   * The name of the application associated with this version.
   *
   * If no application is found with this name, `UpdateApplication` returns an `InvalidParameterValue` error.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the version to update.
   *
   * If no application version is found with this label, `UpdateApplication` returns an `InvalidParameterValue` error.
   *
   * @public
   */
  VersionLabel: string | undefined;

  /**
   * A new description for this version.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The result message containing the options for the specified solution stack.
 *
 * @public
 */
export interface UpdateConfigurationTemplateMessage {
  /**
   * The name of the application associated with the configuration template to update.
   *
   * If no application is found with this name, `UpdateConfigurationTemplate` returns an `InvalidParameterValue` error.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the configuration template to update.
   *
   * If no configuration template is found with this name, `UpdateConfigurationTemplate` returns an `InvalidParameterValue` error.
   *
   * @public
   */
  TemplateName: string | undefined;

  /**
   * A new description for the configuration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of configuration option settings to update with the new specified option value.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;

  /**
   * A list of configuration options to remove from the configuration set.
   *
   * Constraint: You can remove only `UserDefined` configuration options.
   *
   * @public
   */
  OptionsToRemove?: OptionSpecification[] | undefined;
}

/**
 * Request to update an environment.
 *
 * @public
 */
export interface UpdateEnvironmentMessage {
  /**
   * The name of the application with which the environment is associated.
   *
   * @public
   */
  ApplicationName?: string | undefined;

  /**
   * The ID of the environment to update.
   *
   * If no environment with this ID exists, Elastic Beanstalk returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentName, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The name of the environment to update. If no environment with this name exists, Elastic Beanstalk returns an `InvalidParameterValue` error.
   *
   * Condition: You must specify either this or an EnvironmentId, or both. If you do not specify either, Elastic Beanstalk returns `MissingRequiredParameter` error.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * The name of the group to which the target environment belongs. Specify a group name only if the environment's name is specified in an environment manifest and not with the environment name or environment ID parameters. See [Environment Manifest (env.yaml)](https://docs.aws.amazon.com/elasticbeanstalk/latest/dg/environment-cfg-manifest.html) for details.
   *
   * @public
   */
  GroupName?: string | undefined;

  /**
   * If this parameter is specified, Elastic Beanstalk updates the description of this environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * This specifies the tier to use to update the environment.
   *
   * Condition: At this time, if you change the tier version, name, or type, Elastic Beanstalk returns `InvalidParameterValue` error.
   *
   * @public
   */
  Tier?: EnvironmentTier | undefined;

  /**
   * If this parameter is specified, Elastic Beanstalk deploys the named application version to the environment. If no such application version is found, returns an `InvalidParameterValue` error.
   *
   * @public
   */
  VersionLabel?: string | undefined;

  /**
   * If this parameter is specified, Elastic Beanstalk deploys this configuration template to the environment. If no such configuration template is found, Elastic Beanstalk returns an `InvalidParameterValue` error.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * This specifies the platform version that the environment will run after the environment is updated.
   *
   * @public
   */
  SolutionStackName?: string | undefined;

  /**
   * The ARN of the platform, if used.
   *
   * @public
   */
  PlatformArn?: string | undefined;

  /**
   * If specified, Elastic Beanstalk updates the configuration set associated with the running environment and sets the specified configuration options to the requested value.
   *
   * @public
   */
  OptionSettings?: ConfigurationOptionSetting[] | undefined;

  /**
   * A list of custom user-defined configuration options to remove from the configuration set for this environment.
   *
   * @public
   */
  OptionsToRemove?: OptionSpecification[] | undefined;
}

/**
 * @public
 */
export interface UpdateTagsForResourceMessage {
  /**
   * The Amazon Resource Name (ARN) of the resouce to be updated.
   *
   * Must be the ARN of an Elastic Beanstalk resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A list of tags to add or update. If a key of an existing tag is added, the tag's value is updated.
   *
   * Specify at least one of these parameters: `TagsToAdd`, `TagsToRemove`.
   *
   * @public
   */
  TagsToAdd?: Tag[] | undefined;

  /**
   * A list of tag keys to remove. If a tag key doesn't exist, it is silently ignored.
   *
   * Specify at least one of these parameters: `TagsToAdd`, `TagsToRemove`.
   *
   * @public
   */
  TagsToRemove?: string[] | undefined;
}

/**
 * An error or warning for a desired configuration option value.
 *
 * @public
 */
export interface ValidationMessage {
  /**
   * A message describing the error or warning.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * An indication of the severity of this message:
   *
   * - `error`: This message indicates that this is not a valid setting for an option.
   * - `warning`: This message is providing information you should take into account.
   *
   * @public
   */
  Severity?: ValidationSeverity | undefined;

  /**
   * The namespace to which the option belongs.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The name of the option.
   *
   * @public
   */
  OptionName?: string | undefined;
}

/**
 * Provides a list of validation messages.
 *
 * @public
 */
export interface ConfigurationSettingsValidationMessages {
  /**
   * A list of ValidationMessage.
   *
   * @public
   */
  Messages?: ValidationMessage[] | undefined;
}

/**
 * A list of validation messages for a specified configuration template.
 *
 * @public
 */
export interface ValidateConfigurationSettingsMessage {
  /**
   * The name of the application that the configuration template or environment belongs to.
   *
   * @public
   */
  ApplicationName: string | undefined;

  /**
   * The name of the configuration template to validate the settings against.
   *
   * Condition: You cannot specify both this and an environment name.
   *
   * @public
   */
  TemplateName?: string | undefined;

  /**
   * The name of the environment to validate the settings against.
   *
   * Condition: You cannot specify both this and a configuration template name.
   *
   * @public
   */
  EnvironmentName?: string | undefined;

  /**
   * A list of the options and desired values to evaluate.
   *
   * @public
   */
  OptionSettings: ConfigurationOptionSetting[] | undefined;
}
