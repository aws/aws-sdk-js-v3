// smithy-typescript generated code
import type {
  ArtifactNamespace,
  ArtifactPackaging,
  ArtifactsType,
  AuthType,
  BatchReportModeType,
  BucketOwnerAccess,
  BuildBatchPhaseType,
  BuildPhaseType,
  CacheMode,
  CacheType,
  CommandType,
  ComputeType,
  CredentialProviderType,
  EnvironmentType,
  EnvironmentVariableType,
  FileSystemType,
  FleetContextCode,
  FleetOverflowBehavior,
  FleetProxyRuleBehavior,
  FleetProxyRuleEffectType,
  FleetProxyRuleType,
  FleetScalingMetricType,
  FleetScalingType,
  FleetSortByType,
  FleetStatusCode,
  HostKernel,
  ImagePullCredentialsType,
  LanguageType,
  LogsConfigStatusType,
  MachineType,
  PlatformType,
  ProjectSortByType,
  ProjectVisibilityType,
  PullRequestBuildApproverRole,
  PullRequestBuildCommentApproval,
  ReportCodeCoverageSortByType,
  ReportExportConfigType,
  ReportGroupSortByType,
  ReportGroupStatusType,
  ReportGroupTrendFieldType,
  ReportPackagingType,
  ReportStatusType,
  ReportType,
  RetryBuildBatchType,
  ServerType,
  SharedResourceSortByType,
  SortOrderType,
  SourceAuthType,
  SourceType,
  StatusType,
  WebhookBuildType,
  WebhookFilterType,
  WebhookScopeType,
  WebhookStatus,
} from "./enums";

/**
 * Information about the auto-retry configuration for the build.
 *
 * @public
 */
export interface AutoRetryConfig {
  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the `RetryBuild` API to automatically retry your build for up to 2 additional times.
   *
   * @public
   */
  autoRetryLimit?: number | undefined;

  /**
   * The number of times that the build has been retried. The initial build will have an auto-retry number of 0.
   *
   * @public
   */
  autoRetryNumber?: number | undefined;

  /**
   * The build ARN of the auto-retried build triggered by the current build. The next auto-retry will be `null` for builds that don't trigger an auto-retry.
   *
   * @public
   */
  nextAutoRetry?: string | undefined;

  /**
   * The build ARN of the build that triggered the current auto-retry build. The previous auto-retry will be `null` for the initial build.
   *
   * @public
   */
  previousAutoRetry?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBuildsInput {
  /**
   * The IDs of the builds to delete.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Information about a build that could not be successfully deleted.
 *
 * @public
 */
export interface BuildNotDeleted {
  /**
   * The ID of the build that could not be successfully deleted.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * Additional information about the build that could not be successfully deleted.
   *
   * @public
   */
  statusCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBuildsOutput {
  /**
   * The IDs of the builds that were successfully deleted.
   *
   * @public
   */
  buildsDeleted?: string[] | undefined;

  /**
   * Information about any builds that could not be successfully deleted.
   *
   * @public
   */
  buildsNotDeleted?: BuildNotDeleted[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildBatchesInput {
  /**
   * An array that contains the batch build identifiers to retrieve.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Information about build output artifacts.
 *
 * @public
 */
export interface BuildArtifacts {
  /**
   * Information about the location of the build artifacts.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The SHA-256 hash of the build artifact.
   *
   * You can use this hash along with a checksum tool to confirm file integrity and authenticity.
   *
   * > **Note:** This value is available only if the build project's `packaging` value is set to `ZIP`.
   *
   * @public
   */
  sha256sum?: string | undefined;

  /**
   * The MD5 hash of the build artifact.
   *
   * You can use this hash along with a checksum tool to confirm file integrity and authenticity.
   *
   * > **Note:** This value is available only if the build project's `packaging` value is set to `ZIP`.
   *
   * @public
   */
  md5sum?: string | undefined;

  /**
   * If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique.
   *
   * @public
   */
  overrideArtifactName?: boolean | undefined;

  /**
   * Information that tells you if encryption for build artifacts is disabled.
   *
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * An identifier for this artifact definition.
   *
   * @public
   */
  artifactIdentifier?: string | undefined;

  /**
   * Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.
   *
   * > **Note:** To use this property, your CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.
   *
   * This property can be one of the following values:
   *
   * - **NONE**
   *
   *   The bucket owner does not have access to the objects. This is the default.
   *
   * - **READ_ONLY**
   *
   *   The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.
   *
   * - **FULL**
   *
   *   The bucket owner has full access to the objects. Object ownership is determined by the following criteria:
   *
   *   - If the bucket is configured with the **Bucket owner preferred** setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.
   *   - Otherwise, the uploading account retains ownership of the objects.
   *
   *   For more information about Amazon S3 object ownership, see [Controlling ownership of uploaded objects using S3 Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * Specifies restrictions for the batch build.
 *
 * @public
 */
export interface BatchRestrictions {
  /**
   * Specifies the maximum number of builds allowed.
   *
   * @public
   */
  maximumBuildsAllowed?: number | undefined;

  /**
   * An array of strings that specify the compute types that are allowed for the batch build. See [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the *CodeBuild User Guide* for these values.
   *
   * @public
   */
  computeTypesAllowed?: string[] | undefined;

  /**
   * An array of strings that specify the fleets that are allowed for the batch build. See [Run builds on reserved capacity fleets](https://docs.aws.amazon.com/codebuild/latest/userguide/fleets.html) in the *CodeBuild User Guide* for more information.
   *
   * @public
   */
  fleetsAllowed?: string[] | undefined;
}

/**
 * Contains configuration information about a batch build project.
 *
 * @public
 */
export interface ProjectBuildBatchConfig {
  /**
   * Specifies the service role ARN for the batch build project.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * Specifies if the build artifacts for the batch build should be combined into a single artifact location.
   *
   * @public
   */
  combineArtifacts?: boolean | undefined;

  /**
   * A `BatchRestrictions` object that specifies the restrictions for the batch build.
   *
   * @public
   */
  restrictions?: BatchRestrictions | undefined;

  /**
   * Specifies the maximum amount of time, in minutes, that the batch build must be completed in.
   *
   * @public
   */
  timeoutInMins?: number | undefined;

  /**
   * Specifies how build status reports are sent to the source provider for the batch build. This property is only used when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise, and your project is configured to report build statuses to the source provider.
   *
   * - **REPORT_AGGREGATED_BATCH**
   *
   *   (Default) Aggregate all of the build statuses into a single status report.
   *
   * - **REPORT_INDIVIDUAL_BUILDS**
   *
   *   Send a separate status report for each individual build.
   *
   * @public
   */
  batchReportMode?: BatchReportModeType | undefined;
}

/**
 * Represents a resolved build artifact. A resolved artifact is an artifact that is built and deployed to the destination, such as Amazon S3.
 *
 * @public
 */
export interface ResolvedArtifact {
  /**
   * Specifies the type of artifact.
   *
   * @public
   */
  type?: ArtifactsType | undefined;

  /**
   * The location of the artifact.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The identifier of the artifact.
   *
   * @public
   */
  identifier?: string | undefined;
}

/**
 * Contains summary information about a batch build group.
 *
 * @public
 */
export interface BuildSummary {
  /**
   * The batch build ARN.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * When the build was started, expressed in Unix time format.
   *
   * @public
   */
  requestedOn?: Date | undefined;

  /**
   * The status of the build group.
   *
   * - **FAILED**
   *
   *   The build group failed.
   *
   * - **FAULT**
   *
   *   The build group faulted.
   *
   * - **IN_PROGRESS**
   *
   *   The build group is still in progress.
   *
   * - **STOPPED**
   *
   *   The build group stopped.
   *
   * - **SUCCEEDED**
   *
   *   The build group succeeded.
   *
   * - **TIMED_OUT**
   *
   *   The build group timed out.
   *
   * @public
   */
  buildStatus?: StatusType | undefined;

  /**
   * A `ResolvedArtifact` object that represents the primary build artifacts for the build group.
   *
   * @public
   */
  primaryArtifact?: ResolvedArtifact | undefined;

  /**
   * An array of `ResolvedArtifact` objects that represents the secondary build artifacts for the build group.
   *
   * @public
   */
  secondaryArtifacts?: ResolvedArtifact[] | undefined;
}

/**
 * Contains information about a batch build build group. Build groups are used to combine builds that can run in parallel, while still being able to set dependencies on other build groups.
 *
 * @public
 */
export interface BuildGroup {
  /**
   * Contains the identifier of the build group.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * An array of strings that contain the identifiers of the build groups that this build group depends on.
   *
   * @public
   */
  dependsOn?: string[] | undefined;

  /**
   * Specifies if failures in this build group can be ignored.
   *
   * @public
   */
  ignoreFailure?: boolean | undefined;

  /**
   * A `BuildSummary` object that contains a summary of the current build group.
   *
   * @public
   */
  currentBuildSummary?: BuildSummary | undefined;

  /**
   * An array of `BuildSummary` objects that contain summaries of previous build groups.
   *
   * @public
   */
  priorBuildSummaryList?: BuildSummary[] | undefined;
}

/**
 * Information about the cache for the build project.
 *
 * @public
 */
export interface ProjectCache {
  /**
   * The type of cache used by the build project. Valid values include:
   *
   * - `NO_CACHE`: The build project does not use any cache.
   * - `S3`: The build project reads and writes from and to S3.
   * - `LOCAL`: The build project stores a cache locally on a build host that is only available to that build host.
   *
   * @public
   */
  type: CacheType | undefined;

  /**
   * Information about the cache location:
   *
   * - `NO_CACHE` or `LOCAL`: This value is ignored.
   * - `S3`: This is the S3 bucket name/prefix.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * An array of strings that specify the local cache modes. You can use one or more local cache modes at the same time. This is only used for `LOCAL` cache types.
   *
   * Possible values are:
   *
   * - **LOCAL_SOURCE_CACHE**
   *
   *   Caches Git metadata for primary and secondary sources. After the cache is created, subsequent builds pull only the change between commits. This mode is a good choice for projects with a clean working directory and a source that is a large Git repository. If you choose this option and your project does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the option is ignored.
   *
   * - **LOCAL_DOCKER_LAYER_CACHE**
   *
   *   Caches existing Docker layers. This mode is a good choice for projects that build or pull large Docker images. It can prevent the performance issues caused by pulling large Docker images down from the network.
   *
   *   > **Note:**
   *   >
   *   > - You can use a Docker layer cache in the Linux environment only.
   *   > - The `privileged` flag must be set so that your project has the required Docker permissions.
   *   > - You should consider the security implications before you use a Docker layer cache.
   *
   * - **LOCAL_CUSTOM_CACHE**
   *
   *   Caches directories you specify in the buildspec file. This mode is a good choice if your build scenario is not suited to one of the other three local cache modes. If you use a custom cache:
   *
   *   - Only directories can be specified for caching. You cannot specify individual files.
   *   - Symlinks are used to reference cached directories.
   *   - Cached directories are linked to your build before it downloads its project sources. Cached items are overridden if a source item has the same name. Directories are specified using cache paths in the buildspec file.
   *
   * @public
   */
  modes?: CacheMode[] | undefined;

  /**
   * Defines the scope of the cache. You can use this namespace to share a cache across multiple projects. For more information, see [Cache sharing between projects](https://docs.aws.amazon.com/codebuild/latest/userguide/caching-s3.html#caching-s3-sharing) in the *CodeBuild User Guide*.
   *
   * @public
   */
  cacheNamespace?: string | undefined;
}

/**
 * Contains compute attributes. These attributes only need be specified when your project's or fleet's `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
 *
 * @public
 */
export interface ComputeConfiguration {
  /**
   * The number of vCPUs of the instance type included in your fleet.
   *
   * @public
   */
  vCpu?: number | undefined;

  /**
   * The amount of memory of the instance type included in your fleet.
   *
   * @public
   */
  memory?: number | undefined;

  /**
   * The amount of disk space of the instance type included in your fleet.
   *
   * @public
   */
  disk?: number | undefined;

  /**
   * The machine type of the instance type included in your fleet.
   *
   * @public
   */
  machineType?: MachineType | undefined;

  /**
   * The EC2 instance type to be launched in your fleet.
   *
   * @public
   */
  instanceType?: string | undefined;
}

/**
 * Contains information about the status of the docker server.
 *
 * @public
 */
export interface DockerServerStatus {
  /**
   * The status of the docker server.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * A message associated with the status of a docker server.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains docker server information.
 *
 * @public
 */
export interface DockerServer {
  /**
   * Information about the compute resources the docker server uses. Available values include:
   *
   * - `BUILD_GENERAL1_SMALL`: Use up to 4 GiB memory and 2 vCPUs for your docker server.
   * - `BUILD_GENERAL1_MEDIUM`: Use up to 8 GiB memory and 4 vCPUs for your docker server.
   * - `BUILD_GENERAL1_LARGE`: Use up to 16 GiB memory and 8 vCPUs for your docker server.
   * - `BUILD_GENERAL1_XLARGE`: Use up to 64 GiB memory and 32 vCPUs for your docker server.
   * - `BUILD_GENERAL1_2XLARGE`: Use up to 128 GiB memory and 64 vCPUs for your docker server.
   *
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * A list of one or more security groups IDs.
   *
   * > **Note:** Security groups configured for Docker servers should allow ingress network traffic from the VPC configured in the project. They should allow ingress on port 9876.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * A DockerServerStatus object to use for this docker server.
   *
   * > **Note:** Note that `status` is only an output and cannot be passed in as an input.
   *
   * @public
   */
  status?: DockerServerStatus | undefined;
}

/**
 * Information about an environment variable for a build project or a build.
 *
 * @public
 */
export interface EnvironmentVariable {
  /**
   * The name or key of the environment variable.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The value of the environment variable.
   *
   * > **Important:** We strongly discourage the use of `PLAINTEXT` environment variables to store sensitive values, especially Amazon Web Services secret key IDs. `PLAINTEXT` environment variables can be displayed in plain text using the CodeBuild console and the CLI. For sensitive values, we recommend you use an environment variable of type `PARAMETER_STORE` or `SECRETS_MANAGER`.
   *
   * @public
   */
  value: string | undefined;

  /**
   * The type of environment variable. Valid values include:
   *
   * - `PARAMETER_STORE`: An environment variable stored in Systems Manager Parameter Store. For environment variables of this type, specify the name of the parameter as the `value` of the EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also define Parameter Store environment variables in the buildspec. To learn how to do so, see [env/parameter-store](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.parameter-store) in the *CodeBuild User Guide*.
   * - `PLAINTEXT`: An environment variable in plain text format. This is the default value.
   * - `SECRETS_MANAGER`: An environment variable stored in Secrets Manager. For environment variables of this type, specify the name of the secret as the `value` of the EnvironmentVariable. The secret value will be substituted for the name at runtime. You can also define Secrets Manager environment variables in the buildspec. To learn how to do so, see [env/secrets-manager](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.secrets-manager) in the *CodeBuild User Guide*.
   *
   * @public
   */
  type?: EnvironmentVariableType | undefined;
}

/**
 * Information about the compute fleet of the build project. For more information, see [Working with reserved capacity in CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/fleets.html).
 *
 * @public
 */
export interface ProjectFleet {
  /**
   * Specifies the compute fleet ARN for the build project.
   *
   * @public
   */
  fleetArn?: string | undefined;
}

/**
 * Information about credentials that provide access to a private Docker registry. When this is set:
 *
 * - `imagePullCredentialsType` must be set to `SERVICE_ROLE`.
 * - images cannot be curated or an Amazon ECR image.
 *
 * For more information, see [Private Registry with Secrets Manager Sample for CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html).
 *
 * @public
 */
export interface RegistryCredential {
  /**
   * The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager.
   *
   * > **Note:** The `credential` can use the name of the credentials only if they exist in your current Amazon Web Services Region.
   *
   * @public
   */
  credential: string | undefined;

  /**
   * The service that created the credentials to access a private Docker registry. The valid value, SECRETS_MANAGER, is for Secrets Manager.
   *
   * @public
   */
  credentialProvider: CredentialProviderType | undefined;
}

/**
 * Information about the build environment of the build project.
 *
 * @public
 */
export interface ProjectEnvironment {
  /**
   * The type of build environment to use for related builds.
   *
   * > **Note:** If you're using compute fleets during project creation, `type` will be ignored.
   *
   * For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  type: EnvironmentType | undefined;

  /**
   * The image tag or image digest that identifies the Docker image to use for this build project. Use the following formats:
   *
   * - For an image tag: `<registry>/<repository>:<tag>`. For example, in the Docker repository that CodeBuild uses to manage its Docker images, this would be `aws/codebuild/standard:4.0`.
   * - For an image digest: `<registry>/<repository>@<digest>`. For example, to specify an image with the digest "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use `<registry>/<repository>@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf`.
   *
   * For more information, see [Docker images provided by CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  image: string | undefined;

  /**
   * Information about the compute resources the build project uses. Available values include:
   *
   * - `ATTRIBUTE_BASED_COMPUTE`: Specify the amount of vCPUs, memory, disk space, and the type of machine.
   *
   *   > **Note:** If you use `ATTRIBUTE_BASED_COMPUTE`, you must define your attributes by using `computeConfiguration`. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see [Reserved capacity environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types) in the *CodeBuild User Guide*.
   * - `BUILD_GENERAL1_SMALL`: Use up to 4 GiB memory and 2 vCPUs for builds.
   * - `BUILD_GENERAL1_MEDIUM`: Use up to 8 GiB memory and 4 vCPUs for builds.
   * - `BUILD_GENERAL1_LARGE`: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_XLARGE`: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_2XLARGE`: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.
   * - `BUILD_LAMBDA_1GB`: Use up to 1 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_2GB`: Use up to 2 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_4GB`: Use up to 4 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_8GB`: Use up to 8 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_10GB`: Use up to 10 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   *
   * If you use `BUILD_GENERAL1_SMALL`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.
   *
   * If you use `BUILD_GENERAL1_LARGE`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.
   *
   * For more information, see [On-demand environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types) in the *CodeBuild User Guide.*
   *
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * The compute configuration of the build project. This is only required if `computeType` is set to `ATTRIBUTE_BASED_COMPUTE`.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * A ProjectFleet object to use for this build project.
   *
   * @public
   */
  fleet?: ProjectFleet | undefined;

  /**
   * A set of environment variables to make available to builds for this build project.
   *
   * @public
   */
  environmentVariables?: EnvironmentVariable[] | undefined;

  /**
   * Enables running the Docker daemon inside a Docker container. Set to true only if the build project is used to build Docker images. Otherwise, a build that attempts to interact with the Docker daemon fails. The default setting is `false`.
   *
   * You can initialize the Docker daemon during the install phase of your build by adding one of the following sets of commands to the install phase of your buildspec file:
   *
   * If the operating system's base image is Ubuntu Linux:
   *
   * `- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&`
   *
   * `- timeout 15 sh -c "until docker info; do echo .; sleep 1; done"`
   *
   * If the operating system's base image is Alpine Linux and the previous command does not work, add the `-t` argument to `timeout`:
   *
   * `- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&`
   *
   * `- timeout -t 15 sh -c "until docker info; do echo .; sleep 1; done"`
   *
   * @public
   */
  privilegedMode?: boolean | undefined;

  /**
   * The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded certificate for the build project. For more information, see [certificate](https://docs.aws.amazon.com/codebuild/latest/userguide/create-project-cli.html#cli.environment.certificate) in the *CodeBuild User Guide*.
   *
   * @public
   */
  certificate?: string | undefined;

  /**
   * The credentials for access to a private registry.
   *
   * @public
   */
  registryCredential?: RegistryCredential | undefined;

  /**
   * The type of credentials CodeBuild uses to pull images in your build. There are two valid values:
   *
   * - `CODEBUILD` specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild service principal.
   * - `SERVICE_ROLE` specifies that CodeBuild uses your build project's service role.
   *
   * When you use a cross-account or private registry image, you must use SERVICE_ROLE credentials. When you use an CodeBuild curated image, you must use CODEBUILD credentials.
   *
   * @public
   */
  imagePullCredentialsType?: ImagePullCredentialsType | undefined;

  /**
   * A DockerServer object to use for this build project.
   *
   * @public
   */
  dockerServer?: DockerServer | undefined;

  /**
   * The host operating system kernel used for on-demand builds in the build project. The host kernel does not affect the build environment operating system, which is determined by the image you specify. Valid values are:
   *
   * - `LINUX_KERNEL_4`: Runs on an Amazon Linux 2 host (kernel 4.x).
   * - `LINUX_KERNEL_6`: Runs on an Amazon Linux 2023 host (kernel 6.x).
   * - `LINUX_KERNEL_LATEST`: Runs on the latest supported host kernel.
   *
   * This setting applies to the `LINUX_CONTAINER`, `ARM_CONTAINER`, `LINUX_EC2`, and `ARM_EC2` environment types. It is not applicable to Windows, Lambda, or Mac environment types.
   *
   * @public
   */
  hostKernel?: HostKernel | undefined;
}

/**
 * Information about a file system created by Amazon Elastic File System (EFS). For more information, see [What Is Amazon Elastic File System?](https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html)
 *
 * @public
 */
export interface ProjectFileSystemLocation {
  /**
   * The type of the file system. The one supported type is `EFS`.
   *
   * @public
   */
  type?: FileSystemType | undefined;

  /**
   * A string that specifies the location of the file system created by Amazon EFS. Its format is `efs-dns-name:/directory-path`. You can find the DNS name of file system when you view it in the Amazon EFS console. The directory path is a path to a directory in the file system that CodeBuild mounts. For example, if the DNS name of a file system is `fs-abcd1234.efs.us-west-2.amazonaws.com`, and its mount directory is `my-efs-mount-directory`, then the `location` is `fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory`.
   *
   * The directory path in the format `efs-dns-name:/directory-path` is optional. If you do not specify a directory path, the location is only the DNS name and CodeBuild mounts the entire file system.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * The location in the container where you mount the file system.
   *
   * @public
   */
  mountPoint?: string | undefined;

  /**
   * The name used to access a file system created by Amazon EFS. CodeBuild creates an environment variable by appending the `identifier` in all capital letters to `CODEBUILD_`. For example, if you specify `my_efs` for `identifier`, a new environment variable is create named `CODEBUILD_MY_EFS`.
   *
   * The `identifier` is used to mount your file system.
   *
   * @public
   */
  identifier?: string | undefined;

  /**
   * The mount options for a file system created by Amazon EFS. The default mount options used by CodeBuild are `nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2`. For more information, see [Recommended NFS Mount Options](https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-nfs-mount-settings.html).
   *
   * @public
   */
  mountOptions?: string | undefined;
}

/**
 * Information about CloudWatch Logs for a build project.
 *
 * @public
 */
export interface CloudWatchLogsConfig {
  /**
   * The current status of the logs in CloudWatch Logs for a build project. Valid values are:
   *
   * - `ENABLED`: CloudWatch Logs are enabled for this build project.
   * - `DISABLED`: CloudWatch Logs are not enabled for this build project.
   *
   * @public
   */
  status: LogsConfigStatusType | undefined;

  /**
   * The group name of the logs in CloudWatch Logs. For more information, see [Working with Log Groups and Log Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html).
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The prefix of the stream name of the CloudWatch Logs. For more information, see [Working with Log Groups and Log Streams](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html).
   *
   * @public
   */
  streamName?: string | undefined;
}

/**
 * Information about S3 logs for a build project.
 *
 * @public
 */
export interface S3LogsConfig {
  /**
   * The current status of the S3 build logs. Valid values are:
   *
   * - `ENABLED`: S3 build logs are enabled for this build project.
   * - `DISABLED`: S3 build logs are not enabled for this build project.
   *
   * @public
   */
  status: LogsConfigStatusType | undefined;

  /**
   * The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket name is `my-bucket`, and your path prefix is `build-log`, then acceptable formats are `my-bucket/build-log` or `arn:aws:s3:::my-bucket/build-log`.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * Set to true if you do not want your S3 build log output encrypted. By default S3 build logs are encrypted.
   *
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.
   *
   * > **Note:** To use this property, your CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.
   *
   * This property can be one of the following values:
   *
   * - **NONE**
   *
   *   The bucket owner does not have access to the objects. This is the default.
   *
   * - **READ_ONLY**
   *
   *   The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.
   *
   * - **FULL**
   *
   *   The bucket owner has full access to the objects. Object ownership is determined by the following criteria:
   *
   *   - If the bucket is configured with the **Bucket owner preferred** setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.
   *   - Otherwise, the uploading account retains ownership of the objects.
   *
   *   For more information about Amazon S3 object ownership, see [Controlling ownership of uploaded objects using S3 Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
 *
 * @public
 */
export interface LogsConfig {
  /**
   * Information about CloudWatch Logs for a build project. CloudWatch Logs are enabled by default.
   *
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsConfig | undefined;

  /**
   * Information about logs built to an S3 bucket for a build project. S3 logs are not enabled by default.
   *
   * @public
   */
  s3Logs?: S3LogsConfig | undefined;
}

/**
 * Additional information about a build phase that has an error. You can use this information for troubleshooting.
 *
 * @public
 */
export interface PhaseContext {
  /**
   * The status code for the context of the build phase.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * An explanation of the build phase's context. This might include a command ID and an exit code.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains information about a stage for a batch build.
 *
 * @public
 */
export interface BuildBatchPhase {
  /**
   * The name of the batch build phase. Valid values include:
   *
   * - **COMBINE_ARTIFACTS**
   *
   *   Build output artifacts are being combined and uploaded to the output location.
   *
   * - **DOWNLOAD_BATCHSPEC**
   *
   *   The batch build specification is being downloaded.
   *
   * - **FAILED**
   *
   *   One or more of the builds failed.
   *
   * - **IN_PROGRESS**
   *
   *   The batch build is in progress.
   *
   * - **STOPPED**
   *
   *   The batch build was stopped.
   *
   * - **SUBMITTED**
   *
   *   The btach build has been submitted.
   *
   * - **SUCCEEDED**
   *
   *   The batch build succeeded.
   *
   * @public
   */
  phaseType?: BuildBatchPhaseType | undefined;

  /**
   * The current status of the batch build phase. Valid values include:
   *
   * - **FAILED**
   *
   *   The build phase failed.
   *
   * - **FAULT**
   *
   *   The build phase faulted.
   *
   * - **IN_PROGRESS**
   *
   *   The build phase is still in progress.
   *
   * - **STOPPED**
   *
   *   The build phase stopped.
   *
   * - **SUCCEEDED**
   *
   *   The build phase succeeded.
   *
   * - **TIMED_OUT**
   *
   *   The build phase timed out.
   *
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * When the batch build phase started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the batch build phase ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * How long, in seconds, between the starting and ending times of the batch build's phase.
   *
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * Additional information about the batch build phase. Especially to help troubleshoot a failed batch build.
   *
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * Information about the authorization settings for CodeBuild to access the source code to be built.
 *
 * @public
 */
export interface SourceAuth {
  /**
   * The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.
   *
   * @public
   */
  type: SourceAuthType | undefined;

  /**
   * The resource value that applies to the specified authorization type.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * Contains information that defines how the CodeBuild build project reports the build status to the source provider.
 *
 * @public
 */
export interface BuildStatusConfig {
  /**
   * Specifies the context of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
   *
   * - **Bitbucket**
   *
   *   This parameter is used for the `name` parameter in the Bitbucket commit status. For more information, see [build](https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build) in the Bitbucket API documentation.
   *
   * - **GitHub/GitHub Enterprise Server**
   *
   *   This parameter is used for the `context` parameter in the GitHub commit status. For more information, see [Create a commit status](https://developer.github.com/v3/repos/statuses/#create-a-commit-status) in the GitHub developer guide.
   *
   * @public
   */
  context?: string | undefined;

  /**
   * Specifies the target url of the build status CodeBuild sends to the source provider. The usage of this parameter depends on the source provider.
   *
   * - **Bitbucket**
   *
   *   This parameter is used for the `url` parameter in the Bitbucket commit status. For more information, see [build](https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build) in the Bitbucket API documentation.
   *
   * - **GitHub/GitHub Enterprise Server**
   *
   *   This parameter is used for the `target_url` parameter in the GitHub commit status. For more information, see [Create a commit status](https://developer.github.com/v3/repos/statuses/#create-a-commit-status) in the GitHub developer guide.
   *
   * @public
   */
  targetUrl?: string | undefined;
}

/**
 * Information about the Git submodules configuration for an CodeBuild build project.
 *
 * @public
 */
export interface GitSubmodulesConfig {
  /**
   * Set to true to fetch Git submodules for your CodeBuild build project.
   *
   * @public
   */
  fetchSubmodules: boolean | undefined;
}

/**
 * Information about the build input source code for the build project.
 *
 * @public
 */
export interface ProjectSource {
  /**
   * The type of repository that contains the source code to be built. Valid values include:
   *
   * - `BITBUCKET`: The source code is in a Bitbucket repository.
   * - `CODECOMMIT`: The source code is in an CodeCommit repository.
   * - `CODEPIPELINE`: The source code settings are specified in the source action of a pipeline in CodePipeline.
   * - `GITHUB`: The source code is in a GitHub repository.
   * - `GITHUB_ENTERPRISE`: The source code is in a GitHub Enterprise Server repository.
   * - `GITLAB`: The source code is in a GitLab repository.
   * - `GITLAB_SELF_MANAGED`: The source code is in a self-managed GitLab repository.
   * - `NO_SOURCE`: The project does not have input source code.
   * - `S3`: The source code is in an Amazon S3 bucket.
   *
   * @public
   */
  type: SourceType | undefined;

  /**
   * Information about the location of the source code to be built. Valid values include:
   *
   * - For source code settings that are specified in the source action of a pipeline in CodePipeline, `location` should not be specified. If it is specified, CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source action instead of this value.
   * - For source code in an CodeCommit repository, the HTTPS clone URL to the repository that contains the source code and the buildspec file (for example, `https://git-codecommit.<region-ID>.amazonaws.com/v1/repos/<repo-name>`).
   * - For source code in an Amazon S3 input bucket, one of the following.
   *
   *   - The path to the ZIP file that contains the source code (for example, `<bucket-name>/<path>/<object-name>.zip`).
   *   - The path to the folder that contains the source code (for example, `<bucket-name>/<path-to-source-code>/<folder>/`).
   * - For source code in a GitHub repository, the HTTPS clone URL to the repository that contains the source and the buildspec file. You must connect your Amazon Web Services account to your GitHub account. Use the CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with GitHub, on the GitHub **Authorize application** page, for **Organization access**, choose **Request access** next to each repository you want to allow CodeBuild to have access to, and then choose **Authorize application**. (After you have connected to your GitHub account, you do not need to finish creating the build project. You can leave the CodeBuild console.) To instruct CodeBuild to use this connection, in the `source` object, set the `auth` object's `type` value to `OAUTH`.
   * - For source code in an GitLab or self-managed GitLab repository, the HTTPS clone URL to the repository that contains the source and the buildspec file. You must connect your Amazon Web Services account to your GitLab account. Use the CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with GitLab, on the Connections **Authorize application** page, choose **Authorize**. Then on the CodeConnections **Create GitLab connection** page, choose **Connect to GitLab**. (After you have connected to your GitLab account, you do not need to finish creating the build project. You can leave the CodeBuild console.) To instruct CodeBuild to override the default connection and use this connection instead, set the `auth` object's `type` value to `CODECONNECTIONS` in the `source` object.
   * - For source code in a Bitbucket repository, the HTTPS clone URL to the repository that contains the source and the buildspec file. You must connect your Amazon Web Services account to your Bitbucket account. Use the CodeBuild console to start creating a build project. When you use the console to connect (or reconnect) with Bitbucket, on the Bitbucket **Confirm access to your account** page, choose **Grant access**. (After you have connected to your Bitbucket account, you do not need to finish creating the build project. You can leave the CodeBuild console.) To instruct CodeBuild to use this connection, in the `source` object, set the `auth` object's `type` value to `OAUTH`.
   *
   * If you specify `CODEPIPELINE` for the `Type` property, don't specify this property. For all of the other types, you must specify `Location`.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * Information about the Git clone depth for the build project.
   *
   * @public
   */
  gitCloneDepth?: number | undefined;

  /**
   * Information about the Git submodules configuration for the build project.
   *
   * @public
   */
  gitSubmodulesConfig?: GitSubmodulesConfig | undefined;

  /**
   * The buildspec file declaration to use for the builds in this build project.
   *
   * If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in `CODEBUILD_SRC_DIR` environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, `arn:aws:s3:::my-codebuild-sample2/buildspec.yml`). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see [Buildspec File Name and Storage Location](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage).
   *
   * @public
   */
  buildspec?: string | undefined;

  /**
   * Information about the authorization settings for CodeBuild to access the source code to be built.
   *
   * @public
   */
  auth?: SourceAuth | undefined;

  /**
   * Set to true to report the status of a build's start and finish to your source provider. This option is valid only when your source provider is GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, GitLab, GitLab Self Managed, or Bitbucket. If this is set and you use a different source provider, an `invalidInputException` is thrown.
   *
   * To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see [Source provider access](https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html) in the *CodeBuild User Guide*.
   *
   * The status of a build triggered by a webhook is always reported to your source provider.
   *
   * If your project's builds are triggered by a webhook, you must push a new commit to the repo for a change to this property to take effect.
   *
   * @public
   */
  reportBuildStatus?: boolean | undefined;

  /**
   * Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is `GITHUB`, `GITHUB_ENTERPRISE`, or `BITBUCKET`.
   *
   * @public
   */
  buildStatusConfig?: BuildStatusConfig | undefined;

  /**
   * Enable this flag to ignore SSL warnings while connecting to the project source code.
   *
   * @public
   */
  insecureSsl?: boolean | undefined;

  /**
   * An identifier for this project source. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
   *
   * @public
   */
  sourceIdentifier?: string | undefined;
}

/**
 * A source identifier and its corresponding version.
 *
 * @public
 */
export interface ProjectSourceVersion {
  /**
   * An identifier for a source in the build project. The identifier can only contain alphanumeric characters and underscores, and must be less than 128 characters in length.
   *
   * @public
   */
  sourceIdentifier: string | undefined;

  /**
   * The source version for the corresponding source identifier. If specified, must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example, `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For GitLab: the commit ID, branch, or Git tag to use.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion: string | undefined;
}

/**
 * Information about the VPC configuration that CodeBuild accesses.
 *
 * @public
 */
export interface VpcConfig {
  /**
   * The ID of the Amazon VPC.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * A list of one or more subnet IDs in your Amazon VPC.
   *
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * A list of one or more security groups IDs in your Amazon VPC.
   *
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * Contains information about a batch build.
 *
 * @public
 */
export interface BuildBatch {
  /**
   * The identifier of the batch build.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the batch build.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The date and time that the batch build started.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * The date and time that the batch build ended.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The current phase of the batch build.
   *
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * The status of the batch build.
   *
   * @public
   */
  buildBatchStatus?: StatusType | undefined;

  /**
   * The identifier of the version of the source code to be built.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * The identifier of the resolved version of this batch build's source code.
   *
   * - For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.
   * - For CodePipeline, the source revision provided by CodePipeline.
   * - For Amazon S3, this does not apply.
   *
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * The name of the batch build project.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * An array of `BuildBatchPhase` objects the specify the phases of the batch build.
   *
   * @public
   */
  phases?: BuildBatchPhase[] | undefined;

  /**
   * Information about the build input source code for the build project.
   *
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * An array of `ProjectSource` objects that define the sources for the batch build.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * An array of `ProjectSourceVersion` objects. Each `ProjectSourceVersion` must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example, `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * A `BuildArtifacts` object the defines the build artifacts for this batch build.
   *
   * @public
   */
  artifacts?: BuildArtifacts | undefined;

  /**
   * An array of `BuildArtifacts` objects the define the build artifacts for this batch build.
   *
   * @public
   */
  secondaryArtifacts?: BuildArtifacts[] | undefined;

  /**
   * Information about the cache for the build project.
   *
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * Information about the build environment of the build project.
   *
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * The name of a service role used for builds in the batch.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
   *
   * @public
   */
  logConfig?: LogsConfig | undefined;

  /**
   * Specifies the maximum amount of time, in minutes, that the build in a batch must be completed in.
   *
   * @public
   */
  buildTimeoutInMinutes?: number | undefined;

  /**
   * Specifies the amount of time, in minutes, that the batch build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * Indicates if the batch build is complete.
   *
   * @public
   */
  complete?: boolean | undefined;

  /**
   * The entity that started the batch build. Valid values include:
   *
   * - If CodePipeline started the build, the pipeline's name (for example, `codepipeline/my-demo-pipeline`).
   * - If a user started the build, the user's name.
   * - If the Jenkins plugin for CodeBuild started the build, the string `CodeBuild-Jenkins-Plugin`.
   *
   * @public
   */
  initiator?: string | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the batch build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * The number of the batch build. For each project, the `buildBatchNumber` of its first batch build is `1`. The `buildBatchNumber` of each subsequent batch build is incremented by `1`. If a batch build is deleted, the `buildBatchNumber` of other batch builds does not change.
   *
   * @public
   */
  buildBatchNumber?: number | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for the batch build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * Contains configuration information about a batch build project.
   *
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * An array of `BuildGroup` objects that define the build groups for the batch build.
   *
   * @public
   */
  buildGroups?: BuildGroup[] | undefined;

  /**
   * Specifies if session debugging is enabled for this batch build. For more information, see [Viewing a running build in Session Manager](https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html). Batch session debugging is not supported for matrix batch builds.
   *
   * @public
   */
  debugSessionEnabled?: boolean | undefined;

  /**
   * An array that contains the ARNs of reports created by merging reports from builds associated with this batch build.
   *
   * @public
   */
  reportArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildBatchesOutput {
  /**
   * An array of `BuildBatch` objects that represent the retrieved batch builds.
   *
   * @public
   */
  buildBatches?: BuildBatch[] | undefined;

  /**
   * An array that contains the identifiers of any batch builds that are not found.
   *
   * @public
   */
  buildBatchesNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildsInput {
  /**
   * The IDs of the builds.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Contains information about the debug session for a build. For more information, see [Viewing a running build in Session Manager](https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html).
 *
 * @public
 */
export interface DebugSession {
  /**
   * Specifies if session debugging is enabled for this build.
   *
   * @public
   */
  sessionEnabled?: boolean | undefined;

  /**
   * Contains the identifier of the Session Manager session used for the build. To work with the paused build, you open this session to examine, control, and resume the build.
   *
   * @public
   */
  sessionTarget?: string | undefined;
}

/**
 * Contains information about an exported environment variable.
 *
 * Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see [Working with variables](https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html) in the *CodePipeline User Guide*.
 *
 * > **Note:** During a build, the value of a variable is available starting with the `install` phase. It can be updated between the start of the `install` phase and the end of the `post_build` phase. After the `post_build` phase ends, the value of exported variables cannot change.
 *
 * @public
 */
export interface ExportedEnvironmentVariable {
  /**
   * The name of the exported environment variable.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The value assigned to the exported environment variable.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * Information about build logs in CloudWatch Logs.
 *
 * @public
 */
export interface LogsLocation {
  /**
   * The name of the CloudWatch Logs group for the build logs.
   *
   * @public
   */
  groupName?: string | undefined;

  /**
   * The name of the CloudWatch Logs stream for the build logs.
   *
   * @public
   */
  streamName?: string | undefined;

  /**
   * The URL to an individual build log in CloudWatch Logs. The log stream is created during the PROVISIONING phase of a build and the `deeplink` will not be valid until it is created.
   *
   * @public
   */
  deepLink?: string | undefined;

  /**
   * The URL to a build log in an S3 bucket.
   *
   * @public
   */
  s3DeepLink?: string | undefined;

  /**
   * The ARN of the CloudWatch Logs stream for a build execution. Its format is `arn:$\{Partition\}:logs:$\{Region\}:$\{Account\}:log-group:$\{LogGroupName\}:log-stream:$\{LogStreamName\}`. The CloudWatch Logs stream is created during the PROVISIONING phase of a build and the ARN will not be valid until it is created. For more information, see [Resources Defined by CloudWatch Logs](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html#amazoncloudwatchlogs-resources-for-iam-policies).
   *
   * @public
   */
  cloudWatchLogsArn?: string | undefined;

  /**
   * The ARN of S3 logs for a build project. Its format is `arn:$\{Partition\}:s3:::$\{BucketName\}/$\{ObjectName\}`. For more information, see [Resources Defined by Amazon S3](https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html#amazons3-resources-for-iam-policies).
   *
   * @public
   */
  s3LogsArn?: string | undefined;

  /**
   * Information about CloudWatch Logs for a build project.
   *
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsConfig | undefined;

  /**
   * Information about S3 logs for a build project.
   *
   * @public
   */
  s3Logs?: S3LogsConfig | undefined;
}

/**
 * Describes a network interface.
 *
 * @public
 */
export interface NetworkInterface {
  /**
   * The ID of the subnet.
   *
   * @public
   */
  subnetId?: string | undefined;

  /**
   * The ID of the network interface.
   *
   * @public
   */
  networkInterfaceId?: string | undefined;
}

/**
 * Information about a stage for a build.
 *
 * @public
 */
export interface BuildPhase {
  /**
   * The name of the build phase. Valid values include:
   *
   * - **BUILD**
   *
   *   Core build activities typically occur in this build phase.
   *
   * - **COMPLETED**
   *
   *   The build has been completed.
   *
   * - **DOWNLOAD_SOURCE**
   *
   *   Source code is being downloaded in this build phase.
   *
   * - **FINALIZING**
   *
   *   The build process is completing in this build phase.
   *
   * - **INSTALL**
   *
   *   Installation activities typically occur in this build phase.
   *
   * - **POST_BUILD**
   *
   *   Post-build activities typically occur in this build phase.
   *
   * - **PRE_BUILD**
   *
   *   Pre-build activities typically occur in this build phase.
   *
   * - **PROVISIONING**
   *
   *   The build environment is being set up.
   *
   * - **QUEUED**
   *
   *   The build has been submitted and is queued behind other submitted builds.
   *
   * - **SUBMITTED**
   *
   *   The build has been submitted.
   *
   * - **UPLOAD_ARTIFACTS**
   *
   *   Build output artifacts are being uploaded to the output location.
   *
   * @public
   */
  phaseType?: BuildPhaseType | undefined;

  /**
   * The current status of the build phase. Valid values include:
   *
   * - **FAILED**
   *
   *   The build phase failed.
   *
   * - **FAULT**
   *
   *   The build phase faulted.
   *
   * - **IN_PROGRESS**
   *
   *   The build phase is still in progress.
   *
   * - **STOPPED**
   *
   *   The build phase stopped.
   *
   * - **SUCCEEDED**
   *
   *   The build phase succeeded.
   *
   * - **TIMED_OUT**
   *
   *   The build phase timed out.
   *
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * When the build phase started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the build phase ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * How long, in seconds, between the starting and ending times of the build's phase.
   *
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * Additional information about a build phase, especially to help troubleshoot a failed build.
   *
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * Information about a build.
 *
 * @public
 */
export interface Build {
  /**
   * The unique ID for the build.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the build.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The number of the build. For each project, the `buildNumber` of its first build is `1`. The `buildNumber` of each subsequent build is incremented by `1`. If a build is deleted, the `buildNumber` of other builds does not change.
   *
   * @public
   */
  buildNumber?: number | undefined;

  /**
   * When the build process started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the build process ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The current build phase.
   *
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * The current status of the build. Valid values include:
   *
   * - `FAILED`: The build failed.
   * - `FAULT`: The build faulted.
   * - `IN_PROGRESS`: The build is still in progress.
   * - `STOPPED`: The build stopped.
   * - `SUCCEEDED`: The build succeeded.
   * - `TIMED_OUT`: The build timed out.
   *
   * @public
   */
  buildStatus?: StatusType | undefined;

  /**
   * Any version identifier for the version of the source code to be built. If `sourceVersion` is specified at the project level, then this `sourceVersion` (at the build level) takes precedence.
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An identifier for the version of this build's source code.
   *
   * - For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.
   * - For CodePipeline, the source revision provided by CodePipeline.
   * - For Amazon S3, this does not apply.
   *
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * The name of the CodeBuild project.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * Information about all previous build phases that are complete and information about any current build phase that is not yet complete.
   *
   * @public
   */
  phases?: BuildPhase[] | undefined;

  /**
   * Information about the source code to be built.
   *
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * An array of `ProjectSourceVersion` objects. Each `ProjectSourceVersion` must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example, `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * Information about the output artifacts for the build.
   *
   * @public
   */
  artifacts?: BuildArtifacts | undefined;

  /**
   * An array of `ProjectArtifacts` objects.
   *
   * @public
   */
  secondaryArtifacts?: BuildArtifacts[] | undefined;

  /**
   * Information about the cache for the build.
   *
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * Information about the build environment for this build.
   *
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * The name of a service role used for this build.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * Information about the build's logs in CloudWatch Logs.
   *
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this build if it does not get marked as completed.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The number of minutes a build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * Whether the build is complete. True if complete; otherwise, false.
   *
   * @public
   */
  buildComplete?: boolean | undefined;

  /**
   * The entity that started the build. Valid values include:
   *
   * - If CodePipeline started the build, the pipeline's name (for example, `codepipeline/my-demo-pipeline`).
   * - If a user started the build, the user's name (for example, `MyUserName`).
   * - If the Jenkins plugin for CodeBuild started the build, the string `CodeBuild-Jenkins-Plugin`.
   *
   * @public
   */
  initiator?: string | undefined;

  /**
   * If your CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Describes a network interface.
   *
   * @public
   */
  networkInterface?: NetworkInterface | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * A list of exported environment variables for this build.
   *
   * Exported environment variables are used in conjunction with CodePipeline to export environment variables from the current build stage to subsequent stages in the pipeline. For more information, see [Working with variables](https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html) in the *CodePipeline User Guide*.
   *
   * @public
   */
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[] | undefined;

  /**
   * An array of the ARNs associated with this build's reports.
   *
   * @public
   */
  reportArns?: string[] | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for a CodeBuild build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * Contains information about the debug session for this build.
   *
   * @public
   */
  debugSession?: DebugSession | undefined;

  /**
   * The ARN of the batch build that this build is a member of, if applicable.
   *
   * @public
   */
  buildBatchArn?: string | undefined;

  /**
   * Information about the auto-retry configuration for the build.
   *
   * @public
   */
  autoRetryConfig?: AutoRetryConfig | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildsOutput {
  /**
   * Information about the requested builds.
   *
   * @public
   */
  builds?: Build[] | undefined;

  /**
   * The IDs of builds for which information could not be found.
   *
   * @public
   */
  buildsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCommandExecutionsInput {
  /**
   * A `sandboxId` or `sandboxArn`.
   *
   * @public
   */
  sandboxId: string | undefined;

  /**
   * A comma separated list of `commandExecutionIds`.
   *
   * @public
   */
  commandExecutionIds: string[] | undefined;
}

/**
 * Contains command execution information.
 *
 * @public
 */
export interface CommandExecution {
  /**
   * The ID of the command execution.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A `sandboxId`.
   *
   * @public
   */
  sandboxId?: string | undefined;

  /**
   * When the command execution process was initially submitted, expressed in Unix time format.
   *
   * @public
   */
  submitTime?: Date | undefined;

  /**
   * When the command execution process started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the command execution process ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The status of the command execution.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The command that needs to be executed.
   *
   * @public
   */
  command?: string | undefined;

  /**
   * The command type.
   *
   * @public
   */
  type?: CommandType | undefined;

  /**
   * The exit code to return upon completion.
   *
   * @public
   */
  exitCode?: string | undefined;

  /**
   * The text written by the command to stdout.
   *
   * @public
   */
  standardOutputContent?: string | undefined;

  /**
   * The text written by the command to stderr.
   *
   * @public
   */
  standardErrContent?: string | undefined;

  /**
   * Information about build logs in CloudWatch Logs.
   *
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * A `sandboxArn`.
   *
   * @public
   */
  sandboxArn?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCommandExecutionsOutput {
  /**
   * Information about the requested command executions.
   *
   * @public
   */
  commandExecutions?: CommandExecution[] | undefined;

  /**
   * The IDs of command executions for which information could not be found.
   *
   * @public
   */
  commandExecutionsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFleetsInput {
  /**
   * The names or ARNs of the compute fleets.
   *
   * @public
   */
  names: string[] | undefined;
}

/**
 * Information about the proxy rule for your reserved capacity instances.
 *
 * @public
 */
export interface FleetProxyRule {
  /**
   * The type of proxy rule.
   *
   * @public
   */
  type: FleetProxyRuleType | undefined;

  /**
   * The behavior of the proxy rule.
   *
   * @public
   */
  effect: FleetProxyRuleEffectType | undefined;

  /**
   * The destination of the proxy rule.
   *
   * @public
   */
  entities: string[] | undefined;
}

/**
 * Information about the proxy configurations that apply network access control to your reserved capacity instances.
 *
 * @public
 */
export interface ProxyConfiguration {
  /**
   * The default behavior of outgoing traffic.
   *
   * @public
   */
  defaultBehavior?: FleetProxyRuleBehavior | undefined;

  /**
   * An array of `FleetProxyRule` objects that represent the specified destination domains or IPs to allow or deny network access control to.
   *
   * @public
   */
  orderedProxyRules?: FleetProxyRule[] | undefined;
}

/**
 * Defines when a new instance is auto-scaled into the compute fleet.
 *
 * @public
 */
export interface TargetTrackingScalingConfiguration {
  /**
   * The metric type to determine auto-scaling.
   *
   * @public
   */
  metricType?: FleetScalingMetricType | undefined;

  /**
   * The value of `metricType` when to start scaling.
   *
   * @public
   */
  targetValue?: number | undefined;
}

/**
 * The scaling configuration output of a compute fleet.
 *
 * @public
 */
export interface ScalingConfigurationOutput {
  /**
   * The scaling type for a compute fleet.
   *
   * @public
   */
  scalingType?: FleetScalingType | undefined;

  /**
   * A list of `TargetTrackingScalingConfiguration` objects.
   *
   * @public
   */
  targetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[] | undefined;

  /**
   * The maximum number of instances in the ﬂeet when auto-scaling.
   *
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * The desired number of instances in the ﬂeet when auto-scaling.
   *
   * @public
   */
  desiredCapacity?: number | undefined;
}

/**
 * The status of the compute fleet.
 *
 * @public
 */
export interface FleetStatus {
  /**
   * The status code of the compute fleet. Valid values include:
   *
   * - `CREATING`: The compute fleet is being created.
   * - `UPDATING`: The compute fleet is being updated.
   * - `ROTATING`: The compute fleet is being rotated.
   * - `PENDING_DELETION`: The compute fleet is pending deletion.
   * - `DELETING`: The compute fleet is being deleted.
   * - `CREATE_FAILED`: The compute fleet has failed to create.
   * - `UPDATE_ROLLBACK_FAILED`: The compute fleet has failed to update and could not rollback to previous state.
   * - `ACTIVE`: The compute fleet has succeeded and is active.
   *
   * @public
   */
  statusCode?: FleetStatusCode | undefined;

  /**
   * Additional information about a compute fleet. Valid values include:
   *
   * - `CREATE_FAILED`: The compute fleet has failed to create.
   * - `UPDATE_FAILED`: The compute fleet has failed to update.
   *
   * @public
   */
  context?: FleetContextCode | undefined;

  /**
   * A message associated with the status of a compute fleet.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * A tag, consisting of a key and a value.
 *
 * This tag is available for use by Amazon Web Services services that support tags in CodeBuild.
 *
 * @public
 */
export interface Tag {
  /**
   * The tag's key.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * The tag's value.
   *
   * @public
   */
  value?: string | undefined;
}

/**
 * A set of dedicated instances for your build environment.
 *
 * @public
 */
export interface Fleet {
  /**
   * The ARN of the compute fleet.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the compute fleet.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ID of the compute fleet.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The time at which the compute fleet was created.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The time at which the compute fleet was last modified.
   *
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * The status of the compute fleet.
   *
   * @public
   */
  status?: FleetStatus | undefined;

  /**
   * The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.
   *
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * The environment type of the compute fleet.
   *
   * - The environment type `ARM_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo).
   * - The environment type `ARM_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_GPU_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).
   * - The environment type `MAC_ARM` is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt)
   * - The environment type `MAC_ARM` is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).
   * - The environment type `WINDOWS_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `WINDOWS_SERVER_2019_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland).
   * - The environment type `WINDOWS_SERVER_2022_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and Asia Pacific (Mumbai).
   *
   * For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  environmentType?: EnvironmentType | undefined;

  /**
   * Information about the compute resources the compute fleet uses. Available values include:
   *
   * - `ATTRIBUTE_BASED_COMPUTE`: Specify the amount of vCPUs, memory, disk space, and the type of machine.
   *
   *   > **Note:** If you use `ATTRIBUTE_BASED_COMPUTE`, you must define your attributes by using `computeConfiguration`. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see [Reserved capacity environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types) in the *CodeBuild User Guide*.
   * - `CUSTOM_INSTANCE_TYPE`: Specify the instance type for your compute fleet. For a list of supported instance types, see [Supported instance families](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types) in the *CodeBuild User Guide*.
   * - `BUILD_GENERAL1_SMALL`: Use up to 4 GiB memory and 2 vCPUs for builds.
   * - `BUILD_GENERAL1_MEDIUM`: Use up to 8 GiB memory and 4 vCPUs for builds.
   * - `BUILD_GENERAL1_LARGE`: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_XLARGE`: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_2XLARGE`: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.
   * - `BUILD_LAMBDA_1GB`: Use up to 1 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_2GB`: Use up to 2 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_4GB`: Use up to 4 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_8GB`: Use up to 8 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_10GB`: Use up to 10 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   *
   * If you use `BUILD_GENERAL1_SMALL`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.
   *
   * If you use `BUILD_GENERAL1_LARGE`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.
   *
   * For more information, see [On-demand environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types) in the *CodeBuild User Guide.*
   *
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * The compute configuration of the compute fleet. This is only required if `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The scaling configuration of the compute fleet.
   *
   * @public
   */
  scalingConfiguration?: ScalingConfigurationOutput | undefined;

  /**
   * The compute fleet overflow behavior.
   *
   * - For overflow behavior `QUEUE`, your overflow builds need to wait on the existing fleet instance to become available.
   * - For overflow behavior `ON_DEMAND`, your overflow builds run on CodeBuild on-demand.
   *
   *   > **Note:** If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see [Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface).
   *
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The proxy configuration of the compute fleet.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The Amazon Machine Image (AMI) of the compute fleet.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The service role associated with the compute fleet. For more information, see [Allow a user to add a permission policy for a fleet service role](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * A list of tag key and value pairs associated with this compute fleet.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFleetsOutput {
  /**
   * Information about the requested compute fleets.
   *
   * @public
   */
  fleets?: Fleet[] | undefined;

  /**
   * The names of compute fleets for which information could not be found.
   *
   * @public
   */
  fleetsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetProjectsInput {
  /**
   * The names or ARNs of the build projects. To get information about a project shared with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project using its name.
   *
   * @public
   */
  names: string[] | undefined;
}

/**
 * Information about the build output artifacts for the build project.
 *
 * @public
 */
export interface ProjectArtifacts {
  /**
   * The type of build output artifact. Valid values include:
   *
   * - `CODEPIPELINE`: The build project has build output generated through CodePipeline.
   *
   *   > **Note:** The `CODEPIPELINE` type is not supported for `secondaryArtifacts`.
   * - `NO_ARTIFACTS`: The build project does not produce any build output.
   * - `S3`: The build project stores build output in Amazon S3.
   *
   * @public
   */
  type: ArtifactsType | undefined;

  /**
   * Information about the build output artifact location:
   *
   * - If `type` is set to `CODEPIPELINE`, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output locations instead of CodeBuild.
   * - If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
   * - If `type` is set to `S3`, this is the name of the output bucket.
   *
   * @public
   */
  location?: string | undefined;

  /**
   * Along with `namespaceType` and `name`, the pattern that CodeBuild uses to name and store the output artifact:
   *
   * - If `type` is set to `CODEPIPELINE`, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.
   * - If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
   * - If `type` is set to `S3`, this is the path to the output artifact. If `path` is not specified, `path` is not used.
   *
   * For example, if `path` is set to `MyArtifacts`, `namespaceType` is set to `NONE`, and `name` is set to `MyArtifact.zip`, the output artifact is stored in the output bucket at `MyArtifacts/MyArtifact.zip`.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * Along with `path` and `name`, the pattern that CodeBuild uses to determine the name and location to store the output artifact:
   *
   * - If `type` is set to `CODEPIPELINE`, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.
   * - If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
   * - If `type` is set to `S3`, valid values include:
   *
   *   - `BUILD_ID`: Include the build ID in the location of the build output artifact.
   *   - `NONE`: Do not include the build ID. This is the default if `namespaceType` is not specified.
   *
   * For example, if `path` is set to `MyArtifacts`, `namespaceType` is set to `BUILD_ID`, and `name` is set to `MyArtifact.zip`, the output artifact is stored in `MyArtifacts/<build-ID>/MyArtifact.zip`.
   *
   * @public
   */
  namespaceType?: ArtifactNamespace | undefined;

  /**
   * Along with `path` and `namespaceType`, the pattern that CodeBuild uses to name and store the output artifact:
   *
   * - If `type` is set to `CODEPIPELINE`, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output names instead of CodeBuild.
   * - If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
   * - If `type` is set to `S3`, this is the name of the output artifact object. If you set the name to be a forward slash ("/"), the artifact is stored in the root of the output bucket.
   *
   * For example:
   *
   * - If `path` is set to `MyArtifacts`, `namespaceType` is set to `BUILD_ID`, and `name` is set to `MyArtifact.zip`, then the output artifact is stored in `MyArtifacts/<build-ID>/MyArtifact.zip`.
   * - If `path` is empty, `namespaceType` is set to `NONE`, and `name` is set to "`/`", the output artifact is stored in the root of the output bucket.
   * - If `path` is set to `MyArtifacts`, `namespaceType` is set to `BUILD_ID`, and `name` is set to "`/`", the output artifact is stored in `MyArtifacts/<build-ID>`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of build output artifact to create:
   *
   * - If `type` is set to `CODEPIPELINE`, CodePipeline ignores this value if specified. This is because CodePipeline manages its build output artifacts instead of CodeBuild.
   * - If `type` is set to `NO_ARTIFACTS`, this value is ignored if specified, because no build output is produced.
   * - If `type` is set to `S3`, valid values include:
   *
   *   - `NONE`: CodeBuild creates in the output bucket a folder that contains the build output. This is the default if `packaging` is not specified.
   *   - `ZIP`: CodeBuild creates in the output bucket a ZIP file that contains the build output.
   *
   * @public
   */
  packaging?: ArtifactPackaging | undefined;

  /**
   * If this flag is set, a name specified in the buildspec file overrides the artifact name. The name specified in a buildspec file is calculated at build time and uses the Shell Command Language. For example, you can append a date and time to your artifact name so that it is always unique.
   *
   * @public
   */
  overrideArtifactName?: boolean | undefined;

  /**
   * Set to true if you do not want your output artifacts encrypted. This option is valid only if your artifacts type is Amazon S3. If this is set with another artifacts type, an invalidInputException is thrown.
   *
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * An identifier for this artifact definition.
   *
   * @public
   */
  artifactIdentifier?: string | undefined;

  /**
   * Specifies the bucket owner's access for objects that another account uploads to their Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has access to these objects. This property allows you to give the bucket owner access to these objects.
   *
   * > **Note:** To use this property, your CodeBuild service role must have the `s3:PutBucketAcl` permission. This permission allows CodeBuild to modify the access control list for the bucket.
   *
   * This property can be one of the following values:
   *
   * - **NONE**
   *
   *   The bucket owner does not have access to the objects. This is the default.
   *
   * - **READ_ONLY**
   *
   *   The bucket owner has read-only access to the objects. The uploading account retains ownership of the objects.
   *
   * - **FULL**
   *
   *   The bucket owner has full access to the objects. Object ownership is determined by the following criteria:
   *
   *   - If the bucket is configured with the **Bucket owner preferred** setting, the bucket owner owns the objects. The uploading account will have object access as specified by the bucket's policy.
   *   - Otherwise, the uploading account retains ownership of the objects.
   *
   *   For more information about Amazon S3 object ownership, see [Controlling ownership of uploaded objects using S3 Object Ownership](https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html) in the *Amazon Simple Storage Service User Guide*.
   *
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * Information about the build badge for the build project.
 *
 * @public
 */
export interface ProjectBadge {
  /**
   * Set this to true to generate a publicly accessible URL for your project's build badge.
   *
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * The publicly-accessible URL through which you can access the build badge for your project.
   *
   * @public
   */
  badgeRequestUrl?: string | undefined;
}

/**
 * A filter used to determine which webhooks trigger a build.
 *
 * @public
 */
export interface WebhookFilter {
  /**
   * The type of webhook filter. There are 11 webhook filter types: `EVENT`, `ACTOR_ACCOUNT_ID`, `HEAD_REF`, `BASE_REF`, `FILE_PATH`, `COMMIT_MESSAGE`, `TAG_NAME`, `RELEASE_NAME`, `REPOSITORY_NAME`, `ORGANIZATION_NAME`, and `WORKFLOW_NAME`.
   *
   * - EVENT
   *
   *   - A webhook event triggers a build when the provided `pattern` matches one of nine event types: `PUSH`, `PULL_REQUEST_CREATED`, `PULL_REQUEST_UPDATED`, `PULL_REQUEST_CLOSED`, `PULL_REQUEST_REOPENED`, `PULL_REQUEST_MERGED`, `RELEASED`, `PRERELEASED`, and `WORKFLOW_JOB_QUEUED`. The `EVENT` patterns are specified as a comma-separated string. For example, `PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED` filters all push, pull request created, and pull request updated events.
   *
   *     > **Note:** Types `PULL_REQUEST_REOPENED` and `WORKFLOW_JOB_QUEUED` work with GitHub and GitHub Enterprise only. Types `RELEASED` and `PRERELEASED` work with GitHub only.
   * - ACTOR_ACCOUNT_ID
   *
   *   - A webhook event triggers a build when a GitHub, GitHub Enterprise, or Bitbucket account ID matches the regular expression `pattern`.
   * - HEAD_REF
   *
   *   - A webhook event triggers a build when the head reference matches the regular expression `pattern`. For example, `refs/heads/branch-name` and `refs/tags/tag-name`.
   *
   *     > **Note:** Works with GitHub and GitHub Enterprise push, GitHub and GitHub Enterprise pull request, Bitbucket push, and Bitbucket pull request events.
   * - BASE_REF
   *
   *   - A webhook event triggers a build when the base reference matches the regular expression `pattern`. For example, `refs/heads/branch-name`.
   *
   *     > **Note:** Works with pull request events only.
   * - FILE_PATH
   *
   *   - A webhook triggers a build when the path of a changed file matches the regular expression `pattern`.
   *
   *     > **Note:** Works with push and pull request events only.
   * - COMMIT_MESSAGE
   *
   *   - A webhook triggers a build when the head commit message matches the regular expression `pattern`.
   *
   *     > **Note:** Works with push and pull request events only.
   * - TAG_NAME
   *
   *   - A webhook triggers a build when the tag name of the release matches the regular expression `pattern`.
   *
   *     > **Note:** Works with `RELEASED` and `PRERELEASED` events only.
   * - RELEASE_NAME
   *
   *   - A webhook triggers a build when the release name matches the regular expression `pattern`.
   *
   *     > **Note:** Works with `RELEASED` and `PRERELEASED` events only.
   * - REPOSITORY_NAME
   *
   *   - A webhook triggers a build when the repository name matches the regular expression `pattern`.
   *
   *     > **Note:** Works with GitHub global or organization webhooks only.
   * - ORGANIZATION_NAME
   *
   *   - A webhook triggers a build when the organization name matches the regular expression `pattern`.
   *
   *     > **Note:** Works with GitHub global webhooks only.
   * - WORKFLOW_NAME
   *
   *   - A webhook triggers a build when the workflow name matches the regular expression `pattern`.
   *
   *     > **Note:** Works with `WORKFLOW_JOB_QUEUED` events only.
   *
   *     > **Note:** For CodeBuild-hosted Buildkite runner builds, WORKFLOW_NAME filters will filter by pipeline name.
   *
   * @public
   */
  type: WebhookFilterType | undefined;

  /**
   * For a `WebHookFilter` that uses `EVENT` type, a comma-separated string that specifies one or more events. For example, the webhook filter `PUSH, PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED` allows all push, pull request created, and pull request updated events to trigger a build.
   *
   * For a `WebHookFilter` that uses any of the other filter types, a regular expression pattern. For example, a `WebHookFilter` that uses `HEAD_REF` for its `type` and the pattern `^refs/heads/` triggers a build when the head reference is a branch with a reference name `refs/heads/branch-name`.
   *
   * @public
   */
  pattern: string | undefined;

  /**
   * Used to indicate that the `pattern` determines which webhook events do not trigger a build. If true, then a webhook event that does not match the `pattern` triggers a build. If false, then a webhook event that matches the `pattern` triggers a build.
   *
   * @public
   */
  excludeMatchedPattern?: boolean | undefined;
}

/**
 * A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
 *
 * @public
 */
export interface PullRequestBuildPolicy {
  /**
   * Specifies when comment-based approval is required before triggering a build on pull requests. This setting determines whether builds run automatically or require explicit approval through comments.
   *
   * - *DISABLED*: Builds trigger automatically without requiring comment approval
   * - *ALL_PULL_REQUESTS*: All pull requests require comment approval before builds execute (unless contributor is one of the approver roles)
   * - *FORK_PULL_REQUESTS*: Only pull requests from forked repositories require comment approval (unless contributor is one of the approver roles)
   *
   * @public
   */
  requiresCommentApproval: PullRequestBuildCommentApproval | undefined;

  /**
   * List of repository roles that have approval privileges for pull request builds when comment approval is required. Only users with these roles can provide valid comment approvals. If a pull request contributor is one of these roles, their pull request builds will trigger automatically. This field is only applicable when `requiresCommentApproval` is not *DISABLED*.
   *
   * @public
   */
  approverRoles?: PullRequestBuildApproverRole[] | undefined;
}

/**
 * Contains configuration information about the scope for a webhook.
 *
 * @public
 */
export interface ScopeConfiguration {
  /**
   * The name of either the group, enterprise, or organization that will send webhook events to CodeBuild, depending on the type of webhook.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that this parameter is only required if your project's source type is GITHUB_ENTERPRISE or GITLAB_SELF_MANAGED.
   *
   * @public
   */
  domain?: string | undefined;

  /**
   * The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION.
   *
   * @public
   */
  scope: WebhookScopeType | undefined;
}

/**
 * Information about a webhook that connects repository events to a build project in CodeBuild.
 *
 * @public
 */
export interface Webhook {
  /**
   * The URL to the webhook.
   *
   * @public
   */
  url?: string | undefined;

  /**
   * The CodeBuild endpoint where webhook events are sent.
   *
   * @public
   */
  payloadUrl?: string | undefined;

  /**
   * The secret token of the associated repository.
   *
   * > **Note:** A Bitbucket webhook does not support `secret`.
   *
   * @public
   */
  secret?: string | undefined;

  /**
   * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If `branchFilter` is empty, then all branches are built.
   *
   * > **Note:** It is recommended that you use `filterGroups` instead of `branchFilter`.
   *
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * An array of arrays of `WebhookFilter` objects used to determine which webhooks are triggered. At least one `WebhookFilter` in the array must specify `EVENT` as its `type`.
   *
   * For a build to be triggered, at least one filter group in the `filterGroups` array must pass. For a filter group to pass, each of its filters must pass.
   *
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * Specifies the type of build this webhook will trigger.
   *
   * > **Note:** `RUNNER_BUILDKITE_BUILD` is only available for `NO_SOURCE` source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see [Tutorial: Configure a CodeBuild-hosted Buildkite runner](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns `payloadUrl` and `secret` values for the webhook. The `payloadUrl` and `secret` values in the output can be used to manually create a webhook within GitHub.
   *
   * > **Note:** manualCreation is only available for GitHub webhooks.
   *
   * @public
   */
  manualCreation?: boolean | undefined;

  /**
   * A timestamp that indicates the last time a repository's secret token was modified.
   *
   * @public
   */
  lastModifiedSecret?: Date | undefined;

  /**
   * The scope configuration for global or organization webhooks.
   *
   * > **Note:** Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * The status of the webhook. Valid values include:
   *
   * - `CREATING`: The webhook is being created.
   * - `CREATE_FAILED`: The webhook has failed to create.
   * - `ACTIVE`: The webhook has succeeded and is active.
   * - `DELETING`: The webhook is being deleted.
   *
   * @public
   */
  status?: WebhookStatus | undefined;

  /**
   * A message associated with the status of a webhook.
   *
   * @public
   */
  statusMessage?: string | undefined;

  /**
   * A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
   *
   * @public
   */
  pullRequestBuildPolicy?: PullRequestBuildPolicy | undefined;
}

/**
 * Information about a build project.
 *
 * @public
 */
export interface Project {
  /**
   * The name of the build project.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the build project.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * A description that makes the build project easy to identify.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the build input source code for this build project.
   *
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For GitLab: the commit ID, branch, or Git tag to use.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * If `sourceVersion` is specified at the build level, then that version takes precedence over this `sourceVersion` (at the project level).
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An array of `ProjectSourceVersion` objects. If `secondarySourceVersions` is specified at the build level, then they take over these `secondarySourceVersions` (at the project level).
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * Information about the build output artifacts for the build project.
   *
   * @public
   */
  artifacts?: ProjectArtifacts | undefined;

  /**
   * An array of `ProjectArtifacts` objects.
   *
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * Information about the cache for the build project.
   *
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * Information about the build environment for this build project.
   *
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The number of minutes a build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`). If you don't specify a value, CodeBuild uses the managed CMK for Amazon Simple Storage Service (Amazon S3).
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * A list of tag key and value pairs associated with this build project.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * When the build project was created, expressed in Unix time format.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * When the build project's settings were last modified, expressed in Unix time format.
   *
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * Information about a webhook that connects repository events to a build project in CodeBuild.
   *
   * @public
   */
  webhook?: Webhook | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Information about the build badge for the build project.
   *
   * @public
   */
  badge?: ProjectBadge | undefined;

  /**
   * Information about logs for the build project. A project can create logs in CloudWatch Logs, an S3 bucket, or both.
   *
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for a CodeBuild build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * A ProjectBuildBatchConfig object that defines the batch build options for the project.
   *
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * The maximum number of concurrent builds that are allowed for this project.
   *
   * New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.
   *
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * Specifies the visibility of the project's builds. Possible values are:
   *
   * - **PUBLIC_READ**
   *
   *   The project builds are visible to the public.
   *
   * - **PRIVATE**
   *
   *   The project builds are not visible to the public.
   *
   * @public
   */
  projectVisibility?: ProjectVisibilityType | undefined;

  /**
   * Contains the project identifier used with the public build APIs.
   *
   * @public
   */
  publicProjectAlias?: string | undefined;

  /**
   * The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.
   *
   * @public
   */
  resourceAccessRole?: string | undefined;

  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the `RetryBuild` API to automatically retry your build for up to 2 additional times.
   *
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetProjectsOutput {
  /**
   * Information about the requested build projects.
   *
   * @public
   */
  projects?: Project[] | undefined;

  /**
   * The names of build projects for which information could not be found.
   *
   * @public
   */
  projectsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetReportGroupsInput {
  /**
   * An array of report group ARNs that identify the report groups to return.
   *
   * @public
   */
  reportGroupArns: string[] | undefined;
}

/**
 * Information about the S3 bucket where the raw data of a report are exported.
 *
 * @public
 */
export interface S3ReportExportConfig {
  /**
   * The name of the S3 bucket where the raw data of a report are exported.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket that is owned by an account other than the account running the build.
   *
   * @public
   */
  bucketOwner?: string | undefined;

  /**
   * The path to the exported report's raw data results.
   *
   * @public
   */
  path?: string | undefined;

  /**
   * The type of build output artifact to create. Valid values include:
   *
   * - `NONE`: CodeBuild creates the raw data in the output bucket. This is the default if packaging is not specified.
   * - `ZIP`: CodeBuild creates a ZIP file with the raw data in the output bucket.
   *
   * @public
   */
  packaging?: ReportPackagingType | undefined;

  /**
   * The encryption key for the report's encrypted raw data.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * A boolean value that specifies if the results of a report are encrypted.
   *
   * @public
   */
  encryptionDisabled?: boolean | undefined;
}

/**
 * Information about the location where the run of a report is exported.
 *
 * @public
 */
export interface ReportExportConfig {
  /**
   * The export configuration type. Valid values are:
   *
   * - `S3`: The report results are exported to an S3 bucket.
   * - `NO_EXPORT`: The report results are not exported.
   *
   * @public
   */
  exportConfigType?: ReportExportConfigType | undefined;

  /**
   * A `S3ReportExportConfig` object that contains information about the S3 bucket where the run of a report is exported.
   *
   * @public
   */
  s3Destination?: S3ReportExportConfig | undefined;
}

/**
 * A series of reports. Each report contains information about the results from running a series of test cases. You specify the test cases for a report group in the buildspec for a build project using one or more paths to the test case files.
 *
 * @public
 */
export interface ReportGroup {
  /**
   * The ARN of the `ReportGroup`.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the `ReportGroup`.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of the `ReportGroup`. This can be one of the following values:
   *
   * - **CODE_COVERAGE**
   *
   *   The report group contains code coverage reports.
   *
   * - **TEST**
   *
   *   The report group contains test reports.
   *
   * @public
   */
  type?: ReportType | undefined;

  /**
   * Information about the destination where the raw data of this `ReportGroup` is exported.
   *
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * The date and time this `ReportGroup` was created.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time this `ReportGroup` was last modified.
   *
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * A list of tag key and value pairs associated with this report group.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * The status of the report group. This property is read-only.
   *
   * This can be one of the following values:
   *
   * - **ACTIVE**
   *
   *   The report group is active.
   *
   * - **DELETING**
   *
   *   The report group is in the process of being deleted.
   *
   * @public
   */
  status?: ReportGroupStatusType | undefined;
}

/**
 * @public
 */
export interface BatchGetReportGroupsOutput {
  /**
   * The array of report groups returned by `BatchGetReportGroups`.
   *
   * @public
   */
  reportGroups?: ReportGroup[] | undefined;

  /**
   * An array of ARNs passed to `BatchGetReportGroups` that are not associated with a `ReportGroup`.
   *
   * @public
   */
  reportGroupsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetReportsInput {
  /**
   * An array of ARNs that identify the `Report` objects to return.
   *
   * @public
   */
  reportArns: string[] | undefined;
}

/**
 * Contains a summary of a code coverage report.
 *
 * Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.
 *
 * Branch coverage determines if your tests cover every possible branch of a control structure, such as an `if` or `case` statement.
 *
 * @public
 */
export interface CodeCoverageReportSummary {
  /**
   * The percentage of lines that are covered by your tests.
   *
   * @public
   */
  lineCoveragePercentage?: number | undefined;

  /**
   * The number of lines that are covered by your tests.
   *
   * @public
   */
  linesCovered?: number | undefined;

  /**
   * The number of lines that are not covered by your tests.
   *
   * @public
   */
  linesMissed?: number | undefined;

  /**
   * The percentage of branches that are covered by your tests.
   *
   * @public
   */
  branchCoveragePercentage?: number | undefined;

  /**
   * The number of conditional branches that are covered by your tests.
   *
   * @public
   */
  branchesCovered?: number | undefined;

  /**
   * The number of conditional branches that are not covered by your tests.
   *
   * @public
   */
  branchesMissed?: number | undefined;
}

/**
 * Information about a test report.
 *
 * @public
 */
export interface TestReportSummary {
  /**
   * The number of test cases in this `TestReportSummary`. The total includes truncated test cases.
   *
   * @public
   */
  total: number | undefined;

  /**
   * A map that contains the number of each type of status returned by the test results in this `TestReportSummary`.
   *
   * @public
   */
  statusCounts: Record<string, number> | undefined;

  /**
   * The number of nanoseconds it took to run all of the test cases in this report.
   *
   * @public
   */
  durationInNanoSeconds: number | undefined;
}

/**
 * Information about the results from running a series of test cases during the run of a build project. The test cases are specified in the buildspec for the build project using one or more paths to the test case files. You can specify any type of tests you want, such as unit tests, integration tests, and functional tests.
 *
 * @public
 */
export interface Report {
  /**
   * The ARN of the report run.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of the report that was run.
   *
   * - **CODE_COVERAGE**
   *
   *   A code coverage report.
   *
   * - **TEST**
   *
   *   A test report.
   *
   * @public
   */
  type?: ReportType | undefined;

  /**
   * The name of the report that was run.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The ARN of the report group associated with this report.
   *
   * @public
   */
  reportGroupArn?: string | undefined;

  /**
   * The ARN of the build run that generated this report.
   *
   * @public
   */
  executionId?: string | undefined;

  /**
   * The status of this report.
   *
   * @public
   */
  status?: ReportStatusType | undefined;

  /**
   * The date and time this report run occurred.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * The date and time a report expires. A report expires 30 days after it is created. An expired report is not available to view in CodeBuild.
   *
   * @public
   */
  expired?: Date | undefined;

  /**
   * Information about where the raw data used to generate this report was exported.
   *
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * A boolean that specifies if this report run is truncated. The list of test cases is truncated after the maximum number of test cases is reached.
   *
   * @public
   */
  truncated?: boolean | undefined;

  /**
   * A `TestReportSummary` object that contains information about this test report.
   *
   * @public
   */
  testSummary?: TestReportSummary | undefined;

  /**
   * A `CodeCoverageReportSummary` object that contains a code coverage summary for this report.
   *
   * @public
   */
  codeCoverageSummary?: CodeCoverageReportSummary | undefined;
}

/**
 * @public
 */
export interface BatchGetReportsOutput {
  /**
   * The array of `Report` objects returned by `BatchGetReports`.
   *
   * @public
   */
  reports?: Report[] | undefined;

  /**
   * An array of ARNs passed to `BatchGetReportGroups` that are not associated with a `Report`.
   *
   * @public
   */
  reportsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSandboxesInput {
  /**
   * A comma separated list of `sandboxIds` or `sandboxArns`.
   *
   * @public
   */
  ids: string[] | undefined;
}

/**
 * Contains information about the sandbox phase.
 *
 * @public
 */
export interface SandboxSessionPhase {
  /**
   * The name of the sandbox phase.
   *
   * @public
   */
  phaseType?: string | undefined;

  /**
   * The current status of the sandbox phase. Valid values include:
   *
   * - **FAILED**
   *
   *   The sandbox phase failed.
   *
   * - **FAULT**
   *
   *   The sandbox phase faulted.
   *
   * - **IN_PROGRESS**
   *
   *   The sandbox phase is still in progress.
   *
   * - **STOPPED**
   *
   *   The sandbox phase stopped.
   *
   * - **SUCCEEDED**
   *
   *   The sandbox phase succeeded.
   *
   * - **TIMED_OUT**
   *
   *   The sandbox phase timed out.
   *
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * When the sandbox phase started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the sandbox phase ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * How long, in seconds, between the starting and ending times of the sandbox's phase.
   *
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * An array of `PhaseContext` objects.
   *
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * Contains information about the sandbox session.
 *
 * @public
 */
export interface SandboxSession {
  /**
   * The ID of the sandbox session.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The status of the sandbox session.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * When the sandbox session started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the sandbox session ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The current phase for the sandbox.
   *
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * An array of `SandboxSessionPhase` objects.
   *
   * @public
   */
  phases?: SandboxSessionPhase[] | undefined;

  /**
   * An identifier for the version of this sandbox's source code.
   *
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * Information about build logs in CloudWatch Logs.
   *
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * Describes a network interface.
   *
   * @public
   */
  networkInterface?: NetworkInterface | undefined;
}

/**
 * Contains sandbox information.
 *
 * @public
 */
export interface Sandbox {
  /**
   * The ID of the sandbox.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the sandbox.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The CodeBuild project name.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * When the sandbox process was initially requested, expressed in Unix time format.
   *
   * @public
   */
  requestTime?: Date | undefined;

  /**
   * When the sandbox process started, expressed in Unix time format.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * When the sandbox process ended, expressed in Unix time format.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The status of the sandbox.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * Information about the build input source code for the build project.
   *
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * Any version identifier for the version of the sandbox to be built.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * An array of `ProjectSourceVersion` objects.
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * Information about the build environment of the build project.
   *
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for a CodeBuild build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this sandbox if it does not get marked as completed.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The number of minutes a sandbox is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Information about logs for a build project. These can be logs in CloudWatch Logs, built in a specified S3 bucket, or both.
   *
   * @public
   */
  logConfig?: LogsConfig | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the sandbox output artifacts.
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * The name of a service role used for this sandbox.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The current session for the sandbox.
   *
   * @public
   */
  currentSession?: SandboxSession | undefined;
}

/**
 * @public
 */
export interface BatchGetSandboxesOutput {
  /**
   * Information about the requested sandboxes.
   *
   * @public
   */
  sandboxes?: Sandbox[] | undefined;

  /**
   * The IDs of sandboxes for which information could not be found.
   *
   * @public
   */
  sandboxesNotFound?: string[] | undefined;
}

/**
 * Specifies filters when retrieving batch builds.
 *
 * @public
 */
export interface BuildBatchFilter {
  /**
   * The status of the batch builds to retrieve. Only batch builds that have this status will be retrieved.
   *
   * @public
   */
  status?: StatusType | undefined;
}

/**
 * The scaling configuration input of a compute fleet.
 *
 * @public
 */
export interface ScalingConfigurationInput {
  /**
   * The scaling type for a compute fleet.
   *
   * @public
   */
  scalingType?: FleetScalingType | undefined;

  /**
   * A list of `TargetTrackingScalingConfiguration` objects.
   *
   * @public
   */
  targetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[] | undefined;

  /**
   * The maximum number of instances in the ﬂeet when auto-scaling.
   *
   * @public
   */
  maxCapacity?: number | undefined;
}

/**
 * @public
 */
export interface CreateFleetInput {
  /**
   * The name of the compute fleet.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The initial number of machines allocated to the ﬂeet, which deﬁnes the number of builds that can run in parallel.
   *
   * @public
   */
  baseCapacity: number | undefined;

  /**
   * The environment type of the compute fleet.
   *
   * - The environment type `ARM_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo).
   * - The environment type `ARM_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_GPU_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).
   * - The environment type `MAC_ARM` is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt)
   * - The environment type `MAC_ARM` is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).
   * - The environment type `WINDOWS_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `WINDOWS_SERVER_2019_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland).
   * - The environment type `WINDOWS_SERVER_2022_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and Asia Pacific (Mumbai).
   *
   * For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  environmentType: EnvironmentType | undefined;

  /**
   * Information about the compute resources the compute fleet uses. Available values include:
   *
   * - `ATTRIBUTE_BASED_COMPUTE`: Specify the amount of vCPUs, memory, disk space, and the type of machine.
   *
   *   > **Note:** If you use `ATTRIBUTE_BASED_COMPUTE`, you must define your attributes by using `computeConfiguration`. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see [Reserved capacity environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types) in the *CodeBuild User Guide*.
   * - `CUSTOM_INSTANCE_TYPE`: Specify the instance type for your compute fleet. For a list of supported instance types, see [Supported instance families](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types) in the *CodeBuild User Guide*.
   * - `BUILD_GENERAL1_SMALL`: Use up to 4 GiB memory and 2 vCPUs for builds.
   * - `BUILD_GENERAL1_MEDIUM`: Use up to 8 GiB memory and 4 vCPUs for builds.
   * - `BUILD_GENERAL1_LARGE`: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_XLARGE`: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_2XLARGE`: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.
   * - `BUILD_LAMBDA_1GB`: Use up to 1 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_2GB`: Use up to 2 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_4GB`: Use up to 4 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_8GB`: Use up to 8 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_10GB`: Use up to 10 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   *
   * If you use `BUILD_GENERAL1_SMALL`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.
   *
   * If you use `BUILD_GENERAL1_LARGE`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.
   *
   * For more information, see [On-demand environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types) in the *CodeBuild User Guide.*
   *
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * The compute configuration of the compute fleet. This is only required if `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The scaling configuration of the compute fleet.
   *
   * @public
   */
  scalingConfiguration?: ScalingConfigurationInput | undefined;

  /**
   * The compute fleet overflow behavior.
   *
   * - For overflow behavior `QUEUE`, your overflow builds need to wait on the existing fleet instance to become available.
   * - For overflow behavior `ON_DEMAND`, your overflow builds run on CodeBuild on-demand.
   *
   *   > **Note:** If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see [Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface).
   *
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The proxy configuration of the compute fleet.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The Amazon Machine Image (AMI) of the compute fleet.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The service role associated with the compute fleet. For more information, see [Allow a user to add a permission policy for a fleet service role](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * A list of tag key and value pairs associated with this compute fleet.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetOutput {
  /**
   * Information about the compute fleet
   *
   * @public
   */
  fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * The name of the build project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description that makes the build project easy to identify.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information about the build input source code for the build project.
   *
   * @public
   */
  source: ProjectSource | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For GitLab: the commit ID, branch, or Git tag to use.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * If `sourceVersion` is specified at the build level, then that version takes precedence over this `sourceVersion` (at the project level).
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An array of `ProjectSourceVersion` objects. If `secondarySourceVersions` is specified at the build level, then they take precedence over these `secondarySourceVersions` (at the project level).
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * Information about the build output artifacts for the build project.
   *
   * @public
   */
  artifacts: ProjectArtifacts | undefined;

  /**
   * An array of `ProjectArtifacts` objects.
   *
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * Stores recently used information so that it can be quickly accessed at a later time.
   *
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * Information about the build environment for the build project.
   *
   * @public
   */
  environment: ProjectEnvironment | undefined;

  /**
   * The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
   *
   * @public
   */
  serviceRole: string | undefined;

  /**
   * How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The number of minutes a build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * A list of tag key and value pairs associated with this build project.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * VpcConfig enables CodeBuild to access resources in an Amazon VPC.
   *
   * > **Note:** If you're using compute fleets during project creation, do not provide vpcConfig.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Set this to true to generate a publicly accessible URL for your project's build badge.
   *
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * Information about logs for the build project. These can be logs in CloudWatch Logs, logs uploaded to a specified S3 bucket, or both.
   *
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for a CodeBuild build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * A ProjectBuildBatchConfig object that defines the batch build options for the project.
   *
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * The maximum number of concurrent builds that are allowed for this project.
   *
   * New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.
   *
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the `RetryBuild` API to automatically retry your build for up to 2 additional times.
   *
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * Information about the build project that was created.
   *
   * @public
   */
  project?: Project | undefined;
}

/**
 * @public
 */
export interface CreateReportGroupInput {
  /**
   * The name of the report group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The type of report group.
   *
   * @public
   */
  type: ReportType | undefined;

  /**
   * A `ReportExportConfig` object that contains information about where the report group test results are exported.
   *
   * @public
   */
  exportConfig: ReportExportConfig | undefined;

  /**
   * A list of tag key and value pairs associated with this report group.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateReportGroupOutput {
  /**
   * Information about the report group that was created.
   *
   * @public
   */
  reportGroup?: ReportGroup | undefined;
}

/**
 * @public
 */
export interface CreateWebhookInput {
  /**
   * The name of the CodeBuild project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If `branchFilter` is empty, then all branches are built.
   *
   * > **Note:** It is recommended that you use `filterGroups` instead of `branchFilter`.
   *
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * An array of arrays of `WebhookFilter` objects used to determine which webhooks are triggered. At least one `WebhookFilter` in the array must specify `EVENT` as its `type`.
   *
   * For a build to be triggered, at least one filter group in the `filterGroups` array must pass. For a filter group to pass, each of its filters must pass.
   *
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * Specifies the type of build this webhook will trigger.
   *
   * > **Note:** `RUNNER_BUILDKITE_BUILD` is only available for `NO_SOURCE` source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see [Tutorial: Configure a CodeBuild-hosted Buildkite runner](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns `payloadUrl` and `secret` values for the webhook. The `payloadUrl` and `secret` values in the output can be used to manually create a webhook within GitHub.
   *
   * > **Note:** `manualCreation` is only available for GitHub webhooks.
   *
   * @public
   */
  manualCreation?: boolean | undefined;

  /**
   * The scope configuration for global or organization webhooks.
   *
   * > **Note:** Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.
   *
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
   *
   * @public
   */
  pullRequestBuildPolicy?: PullRequestBuildPolicy | undefined;
}

/**
 * @public
 */
export interface CreateWebhookOutput {
  /**
   * Information about a webhook that connects repository events to a build project in CodeBuild.
   *
   * @public
   */
  webhook?: Webhook | undefined;
}

/**
 * @public
 */
export interface DeleteBuildBatchInput {
  /**
   * The identifier of the batch build to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildBatchOutput {
  /**
   * The status code.
   *
   * @public
   */
  statusCode?: string | undefined;

  /**
   * An array of strings that contain the identifiers of the builds that were deleted.
   *
   * @public
   */
  buildsDeleted?: string[] | undefined;

  /**
   * An array of `BuildNotDeleted` objects that specify the builds that could not be deleted.
   *
   * @public
   */
  buildsNotDeleted?: BuildNotDeleted[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetInput {
  /**
   * The ARN of the compute fleet.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteFleetOutput {}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * The name of the build project.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectOutput {}

/**
 * @public
 */
export interface DeleteReportInput {
  /**
   * The ARN of the report to delete.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteReportOutput {}

/**
 * @public
 */
export interface DeleteReportGroupInput {
  /**
   * The ARN of the report group to delete.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * If `true`, deletes any reports that belong to a report group before deleting the report group.
   *
   * If `false`, you must delete any reports in the report group. Use [ListReportsForReportGroup](https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html) to get the reports in a report group. Use [DeleteReport](https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html) to delete the reports. If you call `DeleteReportGroup` for a report group that contains one or more reports, an exception is thrown.
   *
   * @public
   */
  deleteReports?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteReportGroupOutput {}

/**
 * @public
 */
export interface DeleteResourcePolicyInput {
  /**
   * The ARN of the resource that is associated with the resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyOutput {}

/**
 * @public
 */
export interface DeleteSourceCredentialsInput {
  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceCredentialsOutput {
  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * The name of the CodeBuild project.
   *
   * @public
   */
  projectName: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookOutput {}

/**
 * @public
 */
export interface DescribeCodeCoveragesInput {
  /**
   * The ARN of the report for which test cases are returned.
   *
   * @public
   */
  reportArn: string | undefined;

  /**
   * The `nextToken` value returned from a previous call to `DescribeCodeCoverages`. This specifies the next item to return. To return the beginning of the list, exclude this parameter.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies if the results are sorted in ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * Specifies how the results are sorted. Possible values are:
   *
   * - **FILE_PATH**
   *
   *   The results are sorted by file path.
   *
   * - **LINE_COVERAGE_PERCENTAGE**
   *
   *   The results are sorted by the percentage of lines that are covered.
   *
   * @public
   */
  sortBy?: ReportCodeCoverageSortByType | undefined;

  /**
   * The minimum line coverage percentage to report.
   *
   * @public
   */
  minLineCoveragePercentage?: number | undefined;

  /**
   * The maximum line coverage percentage to report.
   *
   * @public
   */
  maxLineCoveragePercentage?: number | undefined;
}

/**
 * Contains code coverage report information.
 *
 * Line coverage measures how many statements your tests cover. A statement is a single instruction, not including comments, conditionals, etc.
 *
 * Branch coverage determines if your tests cover every possible branch of a control structure, such as an `if` or `case` statement.
 *
 * @public
 */
export interface CodeCoverage {
  /**
   * The identifier of the code coverage report.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The ARN of the report.
   *
   * @public
   */
  reportARN?: string | undefined;

  /**
   * The path of the test report file.
   *
   * @public
   */
  filePath?: string | undefined;

  /**
   * The percentage of lines that are covered by your tests.
   *
   * @public
   */
  lineCoveragePercentage?: number | undefined;

  /**
   * The number of lines that are covered by your tests.
   *
   * @public
   */
  linesCovered?: number | undefined;

  /**
   * The number of lines that are not covered by your tests.
   *
   * @public
   */
  linesMissed?: number | undefined;

  /**
   * The percentage of branches that are covered by your tests.
   *
   * @public
   */
  branchCoveragePercentage?: number | undefined;

  /**
   * The number of conditional branches that are covered by your tests.
   *
   * @public
   */
  branchesCovered?: number | undefined;

  /**
   * The number of conditional branches that are not covered by your tests.
   *
   * @public
   */
  branchesMissed?: number | undefined;

  /**
   * The date and time that the tests were run.
   *
   * @public
   */
  expired?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeCodeCoveragesOutput {
  /**
   * If there are more items to return, this contains a token that is passed to a subsequent call to `DescribeCodeCoverages` to retrieve the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of `CodeCoverage` objects that contain the results.
   *
   * @public
   */
  codeCoverages?: CodeCoverage[] | undefined;
}

/**
 * A filter used to return specific types of test cases. In order to pass the filter, the report must meet all of the filter properties.
 *
 * @public
 */
export interface TestCaseFilter {
  /**
   * The status used to filter test cases. A `TestCaseFilter` can have one status. Valid values are:
   *
   * - `SUCCEEDED`
   * - `FAILED`
   * - `ERROR`
   * - `SKIPPED`
   * - `UNKNOWN`
   *
   * @public
   */
  status?: string | undefined;

  /**
   * A keyword that is used to filter on the `name` or the `prefix` of the test cases. Only test cases where the keyword is a substring of the `name` or the `prefix` will be returned.
   *
   * @public
   */
  keyword?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestCasesInput {
  /**
   * The ARN of the report for which test cases are returned.
   *
   * @public
   */
  reportArn: string | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of paginated test cases returned per response. Use `nextToken` to iterate pages in the list of returned `TestCase` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `TestCaseFilter` object used to filter the returned reports.
   *
   * @public
   */
  filter?: TestCaseFilter | undefined;
}

/**
 * Information about a test case created using a framework such as NUnit or Cucumber. A test case might be a unit test or a configuration test.
 *
 * @public
 */
export interface TestCase {
  /**
   * The ARN of the report to which the test case belongs.
   *
   * @public
   */
  reportArn?: string | undefined;

  /**
   * The path to the raw data file that contains the test result.
   *
   * @public
   */
  testRawDataPath?: string | undefined;

  /**
   * A string that is applied to a series of related test cases. CodeBuild generates the prefix. The prefix depends on the framework used to generate the tests.
   *
   * @public
   */
  prefix?: string | undefined;

  /**
   * The name of the test case.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The status returned by the test case after it was run. Valid statuses are `SUCCEEDED`, `FAILED`, `ERROR`, `SKIPPED`, and `UNKNOWN`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The number of nanoseconds it took to run this test case.
   *
   * @public
   */
  durationInNanoSeconds?: number | undefined;

  /**
   * A message associated with a test case. For example, an error message or stack trace.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * The date and time a test case expires. A test case expires 30 days after it is created. An expired test case is not available to view in CodeBuild.
   *
   * @public
   */
  expired?: Date | undefined;

  /**
   * The name of the test suite that the test case is a part of.
   *
   * @public
   */
  testSuiteName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestCasesOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The returned list of test cases.
   *
   * @public
   */
  testCases?: TestCase[] | undefined;
}

/**
 * @public
 */
export interface GetReportGroupTrendInput {
  /**
   * The ARN of the report group that contains the reports to analyze.
   *
   * @public
   */
  reportGroupArn: string | undefined;

  /**
   * The number of reports to analyze. This operation always retrieves the most recent reports.
   *
   * If this parameter is omitted, the most recent 100 reports are analyzed.
   *
   * @public
   */
  numOfReports?: number | undefined;

  /**
   * The test report value to accumulate. This must be one of the following values:
   *
   * - **Test reports:**
   *
   *   - **DURATION**
   *
   *     Accumulate the test run times for the specified reports.
   *
   *   - **PASS_RATE**
   *
   *     Accumulate the percentage of tests that passed for the specified test reports.
   *
   *   - **TOTAL**
   *
   *     Accumulate the total number of tests for the specified test reports.
   *
   * - **Code coverage reports:**
   *
   *   - **BRANCH_COVERAGE**
   *
   *     Accumulate the branch coverage percentages for the specified test reports.
   *
   *   - **BRANCHES_COVERED**
   *
   *     Accumulate the branches covered values for the specified test reports.
   *
   *   - **BRANCHES_MISSED**
   *
   *     Accumulate the branches missed values for the specified test reports.
   *
   *   - **LINE_COVERAGE**
   *
   *     Accumulate the line coverage percentages for the specified test reports.
   *
   *   - **LINES_COVERED**
   *
   *     Accumulate the lines covered values for the specified test reports.
   *
   *   - **LINES_MISSED**
   *
   *     Accumulate the lines not covered values for the specified test reports.
   *
   * @public
   */
  trendField: ReportGroupTrendFieldType | undefined;
}

/**
 * Contains the unmodified data for the report. For more information, see .
 *
 * @public
 */
export interface ReportWithRawData {
  /**
   * The ARN of the report.
   *
   * @public
   */
  reportArn?: string | undefined;

  /**
   * The value of the requested data field from the report.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * Contains trend statistics for a set of reports. The actual values depend on the type of trend being collected. For more information, see .
 *
 * @public
 */
export interface ReportGroupTrendStats {
  /**
   * Contains the average of all values analyzed.
   *
   * @public
   */
  average?: string | undefined;

  /**
   * Contains the maximum value analyzed.
   *
   * @public
   */
  max?: string | undefined;

  /**
   * Contains the minimum value analyzed.
   *
   * @public
   */
  min?: string | undefined;
}

/**
 * @public
 */
export interface GetReportGroupTrendOutput {
  /**
   * Contains the accumulated trend data.
   *
   * @public
   */
  stats?: ReportGroupTrendStats | undefined;

  /**
   * An array that contains the raw data for each report.
   *
   * @public
   */
  rawData?: ReportWithRawData[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * The ARN of the resource that is associated with the resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * The resource policy for the resource identified by the input ARN parameter.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface ImportSourceCredentialsInput {
  /**
   * The Bitbucket username when the `authType` is BASIC_AUTH. This parameter is not valid for other types of source providers or connections.
   *
   * @public
   */
  username?: string | undefined;

  /**
   * For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the `authType` CODECONNECTIONS, this is the `connectionArn`. For the `authType` SECRETS_MANAGER, this is the `secretArn`.
   *
   * @public
   */
  token: string | undefined;

  /**
   * The source provider used for this project.
   *
   * @public
   */
  serverType: ServerType | undefined;

  /**
   * The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository. An OAUTH connection is not supported by the API and must be created using the CodeBuild console.
   *
   * @public
   */
  authType: AuthType | undefined;

  /**
   * Set to `false` to prevent overwriting the repository source credentials. Set to `true` to overwrite the repository source credentials. The default value is `true`.
   *
   * @public
   */
  shouldOverwrite?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportSourceCredentialsOutput {
  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface InvalidateProjectCacheInput {
  /**
   * The name of the CodeBuild build project that the cache is reset for.
   *
   * @public
   */
  projectName: string | undefined;
}

/**
 * @public
 */
export interface InvalidateProjectCacheOutput {}

/**
 * @public
 */
export interface ListBuildBatchesInput {
  /**
   * A `BuildBatchFilter` object that specifies the filters for the search.
   *
   * @public
   */
  filter?: BuildBatchFilter | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies the sort order of the returned items. Valid values include:
   *
   * - `ASCENDING`: List the batch build identifiers in ascending order by identifier.
   * - `DESCENDING`: List the batch build identifiers in descending order by identifier.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The `nextToken` value returned from a previous call to `ListBuildBatches`. This specifies the next item to return. To return the beginning of the list, exclude this parameter.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesOutput {
  /**
   * An array of strings that contains the batch build identifiers.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * If there are more items to return, this contains a token that is passed to a subsequent call to `ListBuildBatches` to retrieve the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectInput {
  /**
   * The name of the project.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * A `BuildBatchFilter` object that specifies the filters for the search.
   *
   * @public
   */
  filter?: BuildBatchFilter | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Specifies the sort order of the returned items. Valid values include:
   *
   * - `ASCENDING`: List the batch build identifiers in ascending order by identifier.
   * - `DESCENDING`: List the batch build identifiers in descending order by identifier.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The `nextToken` value returned from a previous call to `ListBuildBatchesForProject`. This specifies the next item to return. To return the beginning of the list, exclude this parameter.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectOutput {
  /**
   * An array of strings that contains the batch build identifiers.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * If there are more items to return, this contains a token that is passed to a subsequent call to `ListBuildBatchesForProject` to retrieve the next set of items.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * The order to list build IDs. Valid values include:
   *
   * - `ASCENDING`: List the build IDs in ascending order by build ID.
   * - `DESCENDING`: List the build IDs in descending order by build ID.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * A list of build IDs, with each build ID representing a single build.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsForProjectInput {
  /**
   * The name of the CodeBuild project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The order to sort the results in. The results are sorted by build number, not the build identifier. If this is not specified, the results are sorted in descending order.
   *
   * Valid values include:
   *
   * - `ASCENDING`: List the build identifiers in ascending order, by build number.
   * - `DESCENDING`: List the build identifiers in descending order, by build number.
   *
   * If the project has more than 100 builds, setting the sort order will result in an error.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsForProjectOutput {
  /**
   * A list of build identifiers for the specified build project, with each build ID representing a single build.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsForSandboxInput {
  /**
   * A `sandboxId` or `sandboxArn`.
   *
   * @public
   */
  sandboxId: string | undefined;

  /**
   * The maximum number of sandbox records to be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The order in which sandbox records should be retrieved.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsForSandboxOutput {
  /**
   * Information about the requested command executions.
   *
   * @public
   */
  commandExecutions?: CommandExecution[] | undefined;

  /**
   * Information about the next token to get paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesInput {}

/**
 * Information about a Docker image that is managed by CodeBuild.
 *
 * @public
 */
export interface EnvironmentImage {
  /**
   * The name of the Docker image.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The description of the Docker image.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of environment image versions.
   *
   * @public
   */
  versions?: string[] | undefined;
}

/**
 * A set of Docker images that are related by programming language and are managed by CodeBuild.
 *
 * @public
 */
export interface EnvironmentLanguage {
  /**
   * The programming language for the Docker images.
   *
   * @public
   */
  language?: LanguageType | undefined;

  /**
   * The list of Docker images that are related by the specified programming language.
   *
   * @public
   */
  images?: EnvironmentImage[] | undefined;
}

/**
 * A set of Docker images that are related by platform and are managed by CodeBuild.
 *
 * @public
 */
export interface EnvironmentPlatform {
  /**
   * The platform's name.
   *
   * @public
   */
  platform?: PlatformType | undefined;

  /**
   * The list of programming languages that are available for the specified platform.
   *
   * @public
   */
  languages?: EnvironmentLanguage[] | undefined;
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesOutput {
  /**
   * Information about supported platforms for Docker images that are managed by CodeBuild.
   *
   * @public
   */
  platforms?: EnvironmentPlatform[] | undefined;
}

/**
 * @public
 */
export interface ListFleetsInput {
  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of paginated compute fleets returned per response. Use `nextToken` to iterate pages in the list of returned compute fleets.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The order in which to list compute fleets. Valid values include:
   *
   * - `ASCENDING`: List in ascending order.
   * - `DESCENDING`: List in descending order.
   *
   * Use `sortBy` to specify the criterion to be used to list compute fleet names.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The criterion to be used to list compute fleet names. Valid values include:
   *
   * - `CREATED_TIME`: List based on when each compute fleet was created.
   * - `LAST_MODIFIED_TIME`: List based on when information about each compute fleet was last changed.
   * - `NAME`: List based on each compute fleet's name.
   *
   * Use `sortOrder` to specify in what order to list the compute fleet names based on the preceding criteria.
   *
   * @public
   */
  sortBy?: FleetSortByType | undefined;
}

/**
 * @public
 */
export interface ListFleetsOutput {
  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of compute fleet names.
   *
   * @public
   */
  fleets?: string[] | undefined;
}

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * The criterion to be used to list build project names. Valid values include:
   *
   * - `CREATED_TIME`: List based on when each build project was created.
   * - `LAST_MODIFIED_TIME`: List based on when information about each build project was last changed.
   * - `NAME`: List based on each build project's name.
   *
   * Use `sortOrder` to specify in what order to list the build project names based on the preceding criteria.
   *
   * @public
   */
  sortBy?: ProjectSortByType | undefined;

  /**
   * The order in which to list build projects. Valid values include:
   *
   * - `ASCENDING`: List in ascending order.
   * - `DESCENDING`: List in descending order.
   *
   * Use `sortBy` to specify the criterion to be used to list build project names.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * During a previous call, if there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * If there are more than 100 items in the list, only the first 100 items are returned, along with a unique string called a *nextToken*. To get the next batch of items in the list, call this operation again, adding the next token to the call.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of build project names, with each build project name representing a single build project.
   *
   * @public
   */
  projects?: string[] | undefined;
}

/**
 * @public
 */
export interface ListReportGroupsInput {
  /**
   * Used to specify the order to sort the list of returned report groups. Valid values are `ASCENDING` and `DESCENDING`.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The criterion to be used to list build report groups. Valid values include:
   *
   * - `CREATED_TIME`: List based on when each report group was created.
   * - `LAST_MODIFIED_TIME`: List based on when each report group was last changed.
   * - `NAME`: List based on each report group's name.
   *
   * @public
   */
  sortBy?: ReportGroupSortByType | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of paginated report groups returned per response. Use `nextToken` to iterate pages in the list of returned `ReportGroup` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReportGroupsOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of ARNs for the report groups in the current Amazon Web Services account.
   *
   * @public
   */
  reportGroups?: string[] | undefined;
}

/**
 * A filter used to return reports with the status specified by the input `status` parameter.
 *
 * @public
 */
export interface ReportFilter {
  /**
   * The status used to filter reports. You can filter using one status only.
   *
   * @public
   */
  status?: ReportStatusType | undefined;
}

/**
 * @public
 */
export interface ListReportsInput {
  /**
   * Specifies the sort order for the list of returned reports. Valid values are:
   *
   * - `ASCENDING`: return reports in chronological order based on their creation date.
   * - `DESCENDING`: return reports in the reverse chronological order based on their creation date.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of paginated reports returned per response. Use `nextToken` to iterate pages in the list of returned `Report` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `ReportFilter` object used to filter the returned reports.
   *
   * @public
   */
  filter?: ReportFilter | undefined;
}

/**
 * @public
 */
export interface ListReportsOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of returned ARNs for the reports in the current Amazon Web Services account.
   *
   * @public
   */
  reports?: string[] | undefined;
}

/**
 * @public
 */
export interface ListReportsForReportGroupInput {
  /**
   * The ARN of the report group for which you want to return report ARNs.
   *
   * @public
   */
  reportGroupArn: string | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Use to specify whether the results are returned in ascending or descending order.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The maximum number of paginated reports in this report group returned per response. Use `nextToken` to iterate pages in the list of returned `Report` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A `ReportFilter` object used to filter the returned reports.
   *
   * @public
   */
  filter?: ReportFilter | undefined;
}

/**
 * @public
 */
export interface ListReportsForReportGroupOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of report ARNs.
   *
   * @public
   */
  reports?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSandboxesInput {
  /**
   * The maximum number of sandbox records to be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The order in which sandbox records should be retrieved.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesOutput {
  /**
   * Information about the requested sandbox IDs.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Information about the next token to get paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesForProjectInput {
  /**
   * The CodeBuild project name.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The maximum number of sandbox records to be retrieved.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The order in which sandbox records should be retrieved.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesForProjectOutput {
  /**
   * Information about the requested sandbox IDs.
   *
   * @public
   */
  ids?: string[] | undefined;

  /**
   * Information about the next token to get paginated results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSharedProjectsInput {
  /**
   * The criterion to be used to list build projects shared with the current Amazon Web Services account or user. Valid values include:
   *
   * - `ARN`: List based on the ARN.
   * - `MODIFIED_TIME`: List based on when information about the shared project was last changed.
   *
   * @public
   */
  sortBy?: SharedResourceSortByType | undefined;

  /**
   * The order in which to list shared build projects. Valid values include:
   *
   * - `ASCENDING`: List in ascending order.
   * - `DESCENDING`: List in descending order.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The maximum number of paginated shared build projects returned per response. Use `nextToken` to iterate pages in the list of returned `Project` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSharedProjectsOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of ARNs for the build projects shared with the current Amazon Web Services account or user.
   *
   * @public
   */
  projects?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSharedReportGroupsInput {
  /**
   * The order in which to list shared report groups. Valid values include:
   *
   * - `ASCENDING`: List in ascending order.
   * - `DESCENDING`: List in descending order.
   *
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * The criterion to be used to list report groups shared with the current Amazon Web Services account or user. Valid values include:
   *
   * - `ARN`: List based on the ARN.
   * - `MODIFIED_TIME`: List based on when information about the shared report group was last changed.
   *
   * @public
   */
  sortBy?: SharedResourceSortByType | undefined;

  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of paginated shared report groups per response. Use `nextToken` to iterate pages in the list of returned `ReportGroup` objects. The default value is 100.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSharedReportGroupsOutput {
  /**
   * During a previous call, the maximum number of items that can be returned is the value specified in `maxResults`. If there more items in the list, then a unique string called a *nextToken* is returned. To get the next batch of items in the list, call this operation again, adding the next token to the call. To get all of the items in the list, keep calling this operation with each subsequent next token that is returned, until no more next tokens are returned.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The list of ARNs for the report groups shared with the current Amazon Web Services account or user.
   *
   * @public
   */
  reportGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSourceCredentialsInput {}

/**
 * Information about the credentials for a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket repository.
 *
 * @public
 */
export interface SourceCredentialsInfo {
  /**
   * The Amazon Resource Name (ARN) of the token.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or BITBUCKET.
   *
   * @public
   */
  serverType?: ServerType | undefined;

  /**
   * The type of authentication used by the credentials. Valid options are OAUTH, BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER.
   *
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * The connection ARN if your authType is CODECONNECTIONS or SECRETS_MANAGER.
   *
   * @public
   */
  resource?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceCredentialsOutput {
  /**
   * A list of `SourceCredentialsInfo` objects. Each `SourceCredentialsInfo` object includes the authentication type, token ARN, and type of source provider for one set of credentials.
   *
   * @public
   */
  sourceCredentialsInfos?: SourceCredentialsInfo[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * A JSON-formatted resource policy. For more information, see [Sharing a Project](https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share) and [Sharing a Report Group](https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share) in the *CodeBuild User Guide*.
   *
   * @public
   */
  policy: string | undefined;

  /**
   * The ARN of the `Project` or `ReportGroup` resource you want to associate with a resource policy.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * The ARN of the `Project` or `ReportGroup` resource that is associated with a resource policy.
   *
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RetryBuildInput {
  /**
   * Specifies the identifier of the build to restart.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the `RetryBuild` request. The token is included in the `RetryBuild` request and is valid for five minutes. If you repeat the `RetryBuild` request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
   *
   * @public
   */
  idempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface RetryBuildOutput {
  /**
   * Information about a build.
   *
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 */
export interface RetryBuildBatchInput {
  /**
   * Specifies the identifier of the batch build to restart.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the `RetryBuildBatch` request. The token is included in the `RetryBuildBatch` request and is valid for five minutes. If you repeat the `RetryBuildBatch` request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
   *
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * Specifies the type of retry to perform.
   *
   * @public
   */
  retryType?: RetryBuildBatchType | undefined;
}

/**
 * @public
 */
export interface RetryBuildBatchOutput {
  /**
   * Contains information about a batch build.
   *
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StartBuildInput {
  /**
   * The name of the CodeBuild build project to start running a build.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySourcesOverride?: ProjectSource[] | undefined;

  /**
   * An array of `ProjectSourceVersion` objects that specify one or more versions of the project's secondary sources to be used for this build only.
   *
   * @public
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[] | undefined;

  /**
   * The version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:
   *
   * - **CodeCommit**
   *
   *   The commit ID, branch, or Git tag to use.
   *
   * - **GitHub**
   *
   *   The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   *
   * - **GitLab**
   *
   *   The commit ID, branch, or Git tag to use.
   *
   * - **Bitbucket**
   *
   *   The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   *
   * - **Amazon S3**
   *
   *   The version ID of the object that represents the build input ZIP file to use.
   *
   * If `sourceVersion` is specified at the project level, then this `sourceVersion` (at the build level) takes precedence.
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * Build output artifact settings that override, for this build only, the latest ones already defined in the build project.
   *
   * @public
   */
  artifactsOverride?: ProjectArtifacts | undefined;

  /**
   * An array of `ProjectArtifacts` objects.
   *
   * @public
   */
  secondaryArtifactsOverride?: ProjectArtifacts[] | undefined;

  /**
   * A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.
   *
   * @public
   */
  environmentVariablesOverride?: EnvironmentVariable[] | undefined;

  /**
   * A source input type, for this build, that overrides the source input defined in the build project.
   *
   * @public
   */
  sourceTypeOverride?: SourceType | undefined;

  /**
   * A location that overrides, for this build, the source location for the one defined in the build project.
   *
   * @public
   */
  sourceLocationOverride?: string | undefined;

  /**
   * An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket, GitHub, GitLab, or GitLab Self Managed.
   *
   * @public
   */
  sourceAuthOverride?: SourceAuth | undefined;

  /**
   * The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.
   *
   * @public
   */
  gitCloneDepthOverride?: number | undefined;

  /**
   * Information about the Git submodules configuration for this build of an CodeBuild build project.
   *
   * @public
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig | undefined;

  /**
   * A buildspec file declaration that overrides the latest one defined in the build project, for this build only. The buildspec defined on the project is not changed.
   *
   * If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in `CODEBUILD_SRC_DIR` environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, `arn:aws:s3:::my-codebuild-sample2/buildspec.yml`). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see [Buildspec File Name and Storage Location](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage).
   *
   * > **Note:** Since this property allows you to change the build commands that will run in the container, you should note that an IAM principal with the ability to call this API and set this parameter can override the default settings. Moreover, we encourage that you use a trustworthy buildspec location like a file in your source repository or a Amazon S3 bucket. Alternatively, you can restrict overrides to the buildspec by using a condition key: [Prevent unauthorized modifications to project buildspec](https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html#action-context-keys-example-overridebuildspec.html).
   *
   * @public
   */
  buildspecOverride?: string | undefined;

  /**
   * Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.
   *
   * @public
   */
  insecureSslOverride?: boolean | undefined;

  /**
   * Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket, an `invalidInputException` is thrown.
   *
   * To be able to report the build status to the source provider, the user associated with the source provider must have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see [Source provider access](https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html) in the *CodeBuild User Guide*.
   *
   * > **Note:** The status of a build triggered by a webhook is always reported to your source provider.
   *
   * @public
   */
  reportBuildStatusOverride?: boolean | undefined;

  /**
   * Contains information that defines how the build project reports the build status to the source provider. This option is only used when the source provider is `GITHUB`, `GITHUB_ENTERPRISE`, or `BITBUCKET`.
   *
   * @public
   */
  buildStatusConfigOverride?: BuildStatusConfig | undefined;

  /**
   * A container type for this build that overrides the one specified in the build project.
   *
   * @public
   */
  environmentTypeOverride?: EnvironmentType | undefined;

  /**
   * The name of an image for this build that overrides the one specified in the build project.
   *
   * @public
   */
  imageOverride?: string | undefined;

  /**
   * The name of a compute type for this build that overrides the one specified in the build project.
   *
   * @public
   */
  computeTypeOverride?: ComputeType | undefined;

  /**
   * The name of a certificate for this build that overrides the one specified in the build project.
   *
   * @public
   */
  certificateOverride?: string | undefined;

  /**
   * A ProjectCache object specified for this build that overrides the one defined in the build project.
   *
   * @public
   */
  cacheOverride?: ProjectCache | undefined;

  /**
   * The name of a service role for this build that overrides the one specified in the build project.
   *
   * @public
   */
  serviceRoleOverride?: string | undefined;

  /**
   * Enable this flag to override privileged mode in the build project.
   *
   * @public
   */
  privilegedModeOverride?: boolean | undefined;

  /**
   * The number of build timeout minutes, from 5 to 2160 (36 hours), that overrides, for this build only, the latest setting already defined in the build project.
   *
   * @public
   */
  timeoutInMinutesOverride?: number | undefined;

  /**
   * The number of minutes a build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutesOverride?: number | undefined;

  /**
   * The Key Management Service customer master key (CMK) that overrides the one specified in the build project. The CMK key encrypts the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKeyOverride?: string | undefined;

  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 5 minutes. If you repeat the StartBuild request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
   *
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * Log settings for this build that override the log settings defined in the build project.
   *
   * @public
   */
  logsConfigOverride?: LogsConfig | undefined;

  /**
   * The credentials for access to a private registry.
   *
   * @public
   */
  registryCredentialOverride?: RegistryCredential | undefined;

  /**
   * The type of credentials CodeBuild uses to pull images in your build. There are two valid values:
   *
   * - **CODEBUILD**
   *
   *   Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.
   *
   * - **SERVICE_ROLE**
   *
   *   Specifies that CodeBuild uses your build project's service role.
   *
   * When using a cross-account or private registry image, you must use `SERVICE_ROLE` credentials. When using an CodeBuild curated image, you must use `CODEBUILD` credentials.
   *
   * @public
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | undefined;

  /**
   * Specifies if session debugging is enabled for this build. For more information, see [Viewing a running build in Session Manager](https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html).
   *
   * @public
   */
  debugSessionEnabled?: boolean | undefined;

  /**
   * A ProjectFleet object specified for this build that overrides the one defined in the build project.
   *
   * @public
   */
  fleetOverride?: ProjectFleet | undefined;

  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the `RetryBuild` API to automatically retry your build for up to 2 additional times.
   *
   * @public
   */
  autoRetryLimitOverride?: number | undefined;

  /**
   * The host operating system kernel for this build that overrides the one specified in the build project.
   *
   * @public
   */
  hostKernelOverride?: HostKernel | undefined;
}

/**
 * @public
 */
export interface StartBuildOutput {
  /**
   * Information about the build to be run.
   *
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 */
export interface StartBuildBatchInput {
  /**
   * The name of the project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * An array of `ProjectSource` objects that override the secondary sources defined in the batch build project.
   *
   * @public
   */
  secondarySourcesOverride?: ProjectSource[] | undefined;

  /**
   * An array of `ProjectSourceVersion` objects that override the secondary source versions in the batch build project.
   *
   * @public
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[] | undefined;

  /**
   * The version of the batch build input to be built, for this build only. If not specified, the latest version is used. If specified, the contents depends on the source provider:
   *
   * - **CodeCommit**
   *
   *   The commit ID, branch, or Git tag to use.
   *
   * - **GitHub**
   *
   *   The commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   *
   * - **Bitbucket**
   *
   *   The commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   *
   * - **Amazon S3**
   *
   *   The version ID of the object that represents the build input ZIP file to use.
   *
   * If `sourceVersion` is specified at the project level, then this `sourceVersion` (at the build level) takes precedence.
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An array of `ProjectArtifacts` objects that contains information about the build output artifact overrides for the build project.
   *
   * @public
   */
  artifactsOverride?: ProjectArtifacts | undefined;

  /**
   * An array of `ProjectArtifacts` objects that override the secondary artifacts defined in the batch build project.
   *
   * @public
   */
  secondaryArtifactsOverride?: ProjectArtifacts[] | undefined;

  /**
   * An array of `EnvironmentVariable` objects that override, or add to, the environment variables defined in the batch build project.
   *
   * @public
   */
  environmentVariablesOverride?: EnvironmentVariable[] | undefined;

  /**
   * The source input type that overrides the source input defined in the batch build project.
   *
   * @public
   */
  sourceTypeOverride?: SourceType | undefined;

  /**
   * A location that overrides, for this batch build, the source location defined in the batch build project.
   *
   * @public
   */
  sourceLocationOverride?: string | undefined;

  /**
   * A `SourceAuth` object that overrides the one defined in the batch build project. This override applies only if the build project's source is BitBucket or GitHub.
   *
   * @public
   */
  sourceAuthOverride?: SourceAuth | undefined;

  /**
   * The user-defined depth of history, with a minimum value of 0, that overrides, for this batch build only, any previous depth of history defined in the batch build project.
   *
   * @public
   */
  gitCloneDepthOverride?: number | undefined;

  /**
   * A `GitSubmodulesConfig` object that overrides the Git submodules configuration for this batch build.
   *
   * @public
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig | undefined;

  /**
   * A buildspec file declaration that overrides, for this build only, the latest one already defined in the build project.
   *
   * If this value is set, it can be either an inline buildspec definition, the path to an alternate buildspec file relative to the value of the built-in `CODEBUILD_SRC_DIR` environment variable, or the path to an S3 bucket. The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec file using its ARN (for example, `arn:aws:s3:::my-codebuild-sample2/buildspec.yml`). If this value is not provided or is set to an empty string, the source code must contain a buildspec file in its root directory. For more information, see [Buildspec File Name and Storage Location](https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage).
   *
   * @public
   */
  buildspecOverride?: string | undefined;

  /**
   * Enable this flag to override the insecure SSL setting that is specified in the batch build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.
   *
   * @public
   */
  insecureSslOverride?: boolean | undefined;

  /**
   * Set to `true` to report to your source provider the status of a batch build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an `invalidInputException` is thrown.
   *
   * > **Note:** The status of a build triggered by a webhook is always reported to your source provider.
   *
   * @public
   */
  reportBuildBatchStatusOverride?: boolean | undefined;

  /**
   * A container type for this batch build that overrides the one specified in the batch build project.
   *
   * @public
   */
  environmentTypeOverride?: EnvironmentType | undefined;

  /**
   * The name of an image for this batch build that overrides the one specified in the batch build project.
   *
   * @public
   */
  imageOverride?: string | undefined;

  /**
   * The name of a compute type for this batch build that overrides the one specified in the batch build project.
   *
   * @public
   */
  computeTypeOverride?: ComputeType | undefined;

  /**
   * The name of a certificate for this batch build that overrides the one specified in the batch build project.
   *
   * @public
   */
  certificateOverride?: string | undefined;

  /**
   * A `ProjectCache` object that specifies cache overrides.
   *
   * @public
   */
  cacheOverride?: ProjectCache | undefined;

  /**
   * The name of a service role for this batch build that overrides the one specified in the batch build project.
   *
   * @public
   */
  serviceRoleOverride?: string | undefined;

  /**
   * Enable this flag to override privileged mode in the batch build project.
   *
   * @public
   */
  privilegedModeOverride?: boolean | undefined;

  /**
   * Overrides the build timeout specified in the batch build project.
   *
   * @public
   */
  buildTimeoutInMinutesOverride?: number | undefined;

  /**
   * The number of minutes a batch build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutesOverride?: number | undefined;

  /**
   * The Key Management Service customer master key (CMK) that overrides the one specified in the batch build project. The CMK key encrypts the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKeyOverride?: string | undefined;

  /**
   * A unique, case sensitive identifier you provide to ensure the idempotency of the `StartBuildBatch` request. The token is included in the `StartBuildBatch` request and is valid for five minutes. If you repeat the `StartBuildBatch` request with the same token, but change a parameter, CodeBuild returns a parameter mismatch error.
   *
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * A `LogsConfig` object that override the log settings defined in the batch build project.
   *
   * @public
   */
  logsConfigOverride?: LogsConfig | undefined;

  /**
   * A `RegistryCredential` object that overrides credentials for access to a private registry.
   *
   * @public
   */
  registryCredentialOverride?: RegistryCredential | undefined;

  /**
   * The type of credentials CodeBuild uses to pull images in your batch build. There are two valid values:
   *
   * - **CODEBUILD**
   *
   *   Specifies that CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust CodeBuild's service principal.
   *
   * - **SERVICE_ROLE**
   *
   *   Specifies that CodeBuild uses your build project's service role.
   *
   * When using a cross-account or private registry image, you must use `SERVICE_ROLE` credentials. When using an CodeBuild curated image, you must use `CODEBUILD` credentials.
   *
   * @public
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | undefined;

  /**
   * A `BuildBatchConfigOverride` object that contains batch build configuration overrides.
   *
   * @public
   */
  buildBatchConfigOverride?: ProjectBuildBatchConfig | undefined;

  /**
   * Specifies if session debugging is enabled for this batch build. For more information, see [Viewing a running build in Session Manager](https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html). Batch session debugging is not supported for matrix batch builds.
   *
   * @public
   */
  debugSessionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface StartBuildBatchOutput {
  /**
   * A `BuildBatch` object that contains information about the batch build.
   *
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionInput {
  /**
   * A `sandboxId` or `sandboxArn`.
   *
   * @public
   */
  sandboxId: string | undefined;

  /**
   * The command that needs to be executed.
   *
   * @public
   */
  command: string | undefined;

  /**
   * The command type.
   *
   * @public
   */
  type?: CommandType | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionOutput {
  /**
   * Information about the requested command executions.
   *
   * @public
   */
  commandExecution?: CommandExecution | undefined;
}

/**
 * @public
 */
export interface StartSandboxInput {
  /**
   * The CodeBuild project name.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * A unique client token.
   *
   * @public
   */
  idempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSandboxOutput {
  /**
   * Information about the requested sandbox.
   *
   * @public
   */
  sandbox?: Sandbox | undefined;
}

/**
 * @public
 */
export interface StartSandboxConnectionInput {
  /**
   * A `sandboxId` or `sandboxArn`.
   *
   * @public
   */
  sandboxId: string | undefined;
}

/**
 * Contains information about the Session Manager session.
 *
 * @public
 */
export interface SSMSession {
  /**
   * The ID of the session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * An encrypted token value containing session and caller information.
   *
   * @public
   */
  tokenValue?: string | undefined;

  /**
   * A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the node.
   *
   * @public
   */
  streamUrl?: string | undefined;
}

/**
 * @public
 */
export interface StartSandboxConnectionOutput {
  /**
   * Information about the Session Manager session.
   *
   * @public
   */
  ssmSession?: SSMSession | undefined;
}

/**
 * @public
 */
export interface StopBuildInput {
  /**
   * The ID of the build.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildOutput {
  /**
   * Information about the build.
   *
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 */
export interface StopBuildBatchInput {
  /**
   * The identifier of the batch build to stop.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildBatchOutput {
  /**
   * Contains information about a batch build.
   *
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StopSandboxInput {
  /**
   * Information about the requested sandbox ID.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopSandboxOutput {
  /**
   * Information about the requested sandbox.
   *
   * @public
   */
  sandbox?: Sandbox | undefined;
}

/**
 * @public
 */
export interface UpdateFleetInput {
  /**
   * The ARN of the compute fleet.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.
   *
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * The environment type of the compute fleet.
   *
   * - The environment type `ARM_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), EU (Frankfurt), and South America (São Paulo).
   * - The environment type `ARM_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `LINUX_GPU_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).
   * - The environment type `MAC_ARM` is available for Medium fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), and EU (Frankfurt)
   * - The environment type `MAC_ARM` is available for Large fleets only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).
   * - The environment type `WINDOWS_EC2` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and Asia Pacific (Mumbai).
   * - The environment type `WINDOWS_SERVER_2019_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney), Asia Pacific (Tokyo), Asia Pacific (Mumbai) and EU (Ireland).
   * - The environment type `WINDOWS_SERVER_2022_CONTAINER` is available only in regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt), Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and Asia Pacific (Mumbai).
   *
   * For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  environmentType?: EnvironmentType | undefined;

  /**
   * Information about the compute resources the compute fleet uses. Available values include:
   *
   * - `ATTRIBUTE_BASED_COMPUTE`: Specify the amount of vCPUs, memory, disk space, and the type of machine.
   *
   *   > **Note:** If you use `ATTRIBUTE_BASED_COMPUTE`, you must define your attributes by using `computeConfiguration`. CodeBuild will select the cheapest instance that satisfies your specified attributes. For more information, see [Reserved capacity environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types) in the *CodeBuild User Guide*.
   * - `CUSTOM_INSTANCE_TYPE`: Specify the instance type for your compute fleet. For a list of supported instance types, see [Supported instance families](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types) in the *CodeBuild User Guide*.
   * - `BUILD_GENERAL1_SMALL`: Use up to 4 GiB memory and 2 vCPUs for builds.
   * - `BUILD_GENERAL1_MEDIUM`: Use up to 8 GiB memory and 4 vCPUs for builds.
   * - `BUILD_GENERAL1_LARGE`: Use up to 16 GiB memory and 8 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_XLARGE`: Use up to 72 GiB memory and 36 vCPUs for builds, depending on your environment type.
   * - `BUILD_GENERAL1_2XLARGE`: Use up to 144 GiB memory, 72 vCPUs, and 824 GB of SSD storage for builds. This compute type supports Docker images up to 100 GB uncompressed.
   * - `BUILD_LAMBDA_1GB`: Use up to 1 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_2GB`: Use up to 2 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_4GB`: Use up to 4 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_8GB`: Use up to 8 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   * - `BUILD_LAMBDA_10GB`: Use up to 10 GiB memory for builds. Only available for environment type `LINUX_LAMBDA_CONTAINER` and `ARM_LAMBDA_CONTAINER`.
   *
   * If you use `BUILD_GENERAL1_SMALL`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 16 GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 4 GiB memory and 2 vCPUs on ARM-based processors for builds.
   *
   * If you use `BUILD_GENERAL1_LARGE`:
   *
   * - For environment type `LINUX_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs for builds.
   * - For environment type `LINUX_GPU_CONTAINER`, you can use up to 255 GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.
   * - For environment type `ARM_CONTAINER`, you can use up to 16 GiB memory and 8 vCPUs on ARM-based processors for builds.
   *
   * For more information, see [On-demand environment types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types) in the *CodeBuild User Guide.*
   *
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * The compute configuration of the compute fleet. This is only required if `computeType` is set to `ATTRIBUTE_BASED_COMPUTE` or `CUSTOM_INSTANCE_TYPE`.
   *
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * The scaling configuration of the compute fleet.
   *
   * @public
   */
  scalingConfiguration?: ScalingConfigurationInput | undefined;

  /**
   * The compute fleet overflow behavior.
   *
   * - For overflow behavior `QUEUE`, your overflow builds need to wait on the existing fleet instance to become available.
   * - For overflow behavior `ON_DEMAND`, your overflow builds run on CodeBuild on-demand.
   *
   *   > **Note:** If you choose to set your overflow behavior to on-demand while creating a VPC-connected fleet, make sure that you add the required VPC permissions to your project service role. For more information, see [Example policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface).
   *
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * Information about the VPC configuration that CodeBuild accesses.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * The proxy configuration of the compute fleet.
   *
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * The Amazon Machine Image (AMI) of the compute fleet.
   *
   * @public
   */
  imageId?: string | undefined;

  /**
   * The service role associated with the compute fleet. For more information, see [Allow a user to add a permission policy for a fleet service role](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * A list of tag key and value pairs associated with this compute fleet.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateFleetOutput {
  /**
   * A `Fleet` object.
   *
   * @public
   */
  fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * The name of the build project.
   *
   * > **Note:** You cannot change a build project's name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A new or replacement description of the build project.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Information to be changed about the build input source code for the build project.
   *
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * An array of `ProjectSource` objects.
   *
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:
   *
   * - For CodeCommit: the commit ID, branch, or Git tag to use.
   * - For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format `pr/pull-request-ID` (for example `pr/25`). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For GitLab: the commit ID, branch, or Git tag to use.
   * - For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.
   * - For Amazon S3: the version ID of the object that represents the build input ZIP file to use.
   *
   * If `sourceVersion` is specified at the build level, then that version takes precedence over this `sourceVersion` (at the project level).
   *
   * For more information, see [Source Version Sample with CodeBuild](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html) in the *CodeBuild User Guide*.
   *
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * An array of `ProjectSourceVersion` objects. If `secondarySourceVersions` is specified at the build level, then they take over these `secondarySourceVersions` (at the project level).
   *
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * Information to be changed about the build output artifacts for the build project.
   *
   * @public
   */
  artifacts?: ProjectArtifacts | undefined;

  /**
   * An array of `ProjectArtifact` objects.
   *
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * Stores recently used information so that it can be quickly accessed at a later time.
   *
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * Information to be changed about the build environment for the build project.
   *
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * The replacement ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services on behalf of the Amazon Web Services account.
   *
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * The replacement value in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out any related build that did not get marked as completed.
   *
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * The number of minutes a build is allowed to be queued before it times out.
   *
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * The Key Management Service customer master key (CMK) to be used for encrypting the build output artifacts.
   *
   * > **Note:** You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key.
   *
   * You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format `alias/<alias-name>`).
   *
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * An updated list of tag key and value pairs associated with this build project.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild build project tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * VpcConfig enables CodeBuild to access resources in an Amazon VPC.
   *
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * Set this to true to generate a publicly accessible URL for your project's build badge.
   *
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * Information about logs for the build project. A project can create logs in CloudWatch Logs, logs in an S3 bucket, or both.
   *
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * An array of `ProjectFileSystemLocation` objects for a CodeBuild build project. A `ProjectFileSystemLocation` object specifies the `identifier`, `location`, `mountOptions`, `mountPoint`, and `type` of a file system created using Amazon Elastic File System.
   *
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * Contains configuration information about a batch build project.
   *
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * The maximum number of concurrent builds that are allowed for this project.
   *
   * New builds are only started if the current number of builds is less than or equal to this limit. If the current build count meets this limit, new builds are throttled and are not run.
   *
   * To remove this limit, set this value to -1.
   *
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * The maximum number of additional automatic retries after a failed build. For example, if the auto-retry limit is set to 2, CodeBuild will call the `RetryBuild` API to automatically retry your build for up to 2 additional times.
   *
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * Information about the build project that was changed.
   *
   * @public
   */
  project?: Project | undefined;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityInput {
  /**
   * The Amazon Resource Name (ARN) of the build project.
   *
   * @public
   */
  projectArn: string | undefined;

  /**
   * Specifies the visibility of the project's builds. Possible values are:
   *
   * - **PUBLIC_READ**
   *
   *   The project builds are visible to the public.
   *
   * - **PRIVATE**
   *
   *   The project builds are not visible to the public.
   *
   * @public
   */
  projectVisibility: ProjectVisibilityType | undefined;

  /**
   * The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the project's builds.
   *
   * @public
   */
  resourceAccessRole?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityOutput {
  /**
   * The Amazon Resource Name (ARN) of the build project.
   *
   * @public
   */
  projectArn?: string | undefined;

  /**
   * Contains the project identifier used with the public build APIs.
   *
   * @public
   */
  publicProjectAlias?: string | undefined;

  /**
   * Specifies the visibility of the project's builds. Possible values are:
   *
   * - **PUBLIC_READ**
   *
   *   The project builds are visible to the public.
   *
   * - **PRIVATE**
   *
   *   The project builds are not visible to the public.
   *
   * @public
   */
  projectVisibility?: ProjectVisibilityType | undefined;
}

/**
 * @public
 */
export interface UpdateReportGroupInput {
  /**
   * The ARN of the report group to update.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * Used to specify an updated export type. Valid values are:
   *
   * - `S3`: The report results are exported to an S3 bucket.
   * - `NO_EXPORT`: The report results are not exported.
   *
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * An updated list of tag key and value pairs associated with this report group.
   *
   * These tags are available for use by Amazon Web Services services that support CodeBuild report group tags.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateReportGroupOutput {
  /**
   * Information about the updated report group.
   *
   * @public
   */
  reportGroup?: ReportGroup | undefined;
}

/**
 * @public
 */
export interface UpdateWebhookInput {
  /**
   * The name of the CodeBuild project.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A regular expression used to determine which repository branches are built when a webhook is triggered. If the name of a branch matches the regular expression, then it is built. If `branchFilter` is empty, then all branches are built.
   *
   * > **Note:** It is recommended that you use `filterGroups` instead of `branchFilter`.
   *
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * A boolean value that specifies whether the associated GitHub repository's secret token should be updated. If you use Bitbucket for your repository, `rotateSecret` is ignored.
   *
   * @public
   */
  rotateSecret?: boolean | undefined;

  /**
   * An array of arrays of `WebhookFilter` objects used to determine if a webhook event can trigger a build. A filter group must contain at least one `EVENT` `WebhookFilter`.
   *
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * Specifies the type of build this webhook will trigger.
   *
   * > **Note:** `RUNNER_BUILDKITE_BUILD` is only available for `NO_SOURCE` source type projects configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see [Tutorial: Configure a CodeBuild-hosted Buildkite runner](https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html) in the *CodeBuild user guide*.
   *
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.
   *
   * @public
   */
  pullRequestBuildPolicy?: PullRequestBuildPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateWebhookOutput {
  /**
   * Information about a repository's webhook that is associated with a project in CodeBuild.
   *
   * @public
   */
  webhook?: Webhook | undefined;
}
