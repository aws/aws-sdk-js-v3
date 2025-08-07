// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeBuildServiceException as __BaseException } from "./CodeBuildServiceException";

/**
 * <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
 * @public
 */
export class AccountLimitExceededException extends __BaseException {
  readonly name: "AccountLimitExceededException" = "AccountLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountLimitExceededException, __BaseException>) {
    super({
      name: "AccountLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountLimitExceededException.prototype);
  }
}

/**
 * <p>The CodeBuild access has been suspended for the calling Amazon Web Services account.</p>
 * @public
 */
export class AccountSuspendedException extends __BaseException {
  readonly name: "AccountSuspendedException" = "AccountSuspendedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccountSuspendedException, __BaseException>) {
    super({
      name: "AccountSuspendedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccountSuspendedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ArtifactNamespace = {
  BUILD_ID: "BUILD_ID",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ArtifactNamespace = (typeof ArtifactNamespace)[keyof typeof ArtifactNamespace];

/**
 * @public
 * @enum
 */
export const ArtifactPackaging = {
  NONE: "NONE",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type ArtifactPackaging = (typeof ArtifactPackaging)[keyof typeof ArtifactPackaging];

/**
 * @public
 * @enum
 */
export const ArtifactsType = {
  CODEPIPELINE: "CODEPIPELINE",
  NO_ARTIFACTS: "NO_ARTIFACTS",
  S3: "S3",
} as const;

/**
 * @public
 */
export type ArtifactsType = (typeof ArtifactsType)[keyof typeof ArtifactsType];

/**
 * @public
 * @enum
 */
export const AuthType = {
  BASIC_AUTH: "BASIC_AUTH",
  CODECONNECTIONS: "CODECONNECTIONS",
  OAUTH: "OAUTH",
  PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * <p>Information about the auto-retry configuration for the build.</p>
 * @public
 */
export interface AutoRetryConfig {
  /**
   * <p>The maximum number of additional automatic retries after a failed build. For example, if the
   *             auto-retry limit is set to 2, CodeBuild will call the <code>RetryBuild</code> API to automatically
   *             retry your build for up to 2 additional times.</p>
   * @public
   */
  autoRetryLimit?: number | undefined;

  /**
   * <p>The number of times that the build has been retried. The initial build will have an auto-retry number of 0.</p>
   * @public
   */
  autoRetryNumber?: number | undefined;

  /**
   * <p>The build ARN of the auto-retried build triggered by the current build. The next auto-retry
   *             will be <code>null</code> for builds that don't trigger an auto-retry.</p>
   * @public
   */
  nextAutoRetry?: string | undefined;

  /**
   * <p>The build ARN of the build that triggered the current auto-retry build. The previous auto-retry will be
   *             <code>null</code> for the initial build.</p>
   * @public
   */
  previousAutoRetry?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBuildsInput {
  /**
   * <p>The IDs of the builds to delete.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * <p>Information about a build that could not be successfully deleted.</p>
 * @public
 */
export interface BuildNotDeleted {
  /**
   * <p>The ID of the build that could not be successfully deleted.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>Additional information about the build that could not be successfully deleted.</p>
   * @public
   */
  statusCode?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteBuildsOutput {
  /**
   * <p>The IDs of the builds that were successfully deleted.</p>
   * @public
   */
  buildsDeleted?: string[] | undefined;

  /**
   * <p>Information about any builds that could not be successfully deleted.</p>
   * @public
   */
  buildsNotDeleted?: BuildNotDeleted[] | undefined;
}

/**
 * <p>The input value that was provided is not valid.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
  }
}

/**
 * @public
 */
export interface BatchGetBuildBatchesInput {
  /**
   * <p>An array that contains the batch build identifiers to retrieve.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const BucketOwnerAccess = {
  FULL: "FULL",
  NONE: "NONE",
  READ_ONLY: "READ_ONLY",
} as const;

/**
 * @public
 */
export type BucketOwnerAccess = (typeof BucketOwnerAccess)[keyof typeof BucketOwnerAccess];

/**
 * <p>Information about build output artifacts.</p>
 * @public
 */
export interface BuildArtifacts {
  /**
   * <p>Information about the location of the build artifacts.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The SHA-256 hash of the build artifact.</p>
   *          <p>You can use this hash along with a checksum tool to confirm file integrity and
   *             authenticity.</p>
   *          <note>
   *             <p>This value is available only if the build project's <code>packaging</code> value
   *                 is set to <code>ZIP</code>.</p>
   *          </note>
   * @public
   */
  sha256sum?: string | undefined;

  /**
   * <p>The MD5 hash of the build artifact.</p>
   *          <p>You can use this hash along with a checksum tool to confirm file integrity and
   *             authenticity.</p>
   *          <note>
   *             <p>This value is available only if the build project's <code>packaging</code> value
   *                 is set to <code>ZIP</code>.</p>
   *          </note>
   * @public
   */
  md5sum?: string | undefined;

  /**
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   * @public
   */
  overrideArtifactName?: boolean | undefined;

  /**
   * <p> Information that tells you if encryption for build artifacts is disabled. </p>
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * <p> An identifier for this artifact definition. </p>
   * @public
   */
  artifactIdentifier?: string | undefined;

  /**
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *          <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *          </note>
   *          <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *                <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *                <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                   </li>
   *                </ul>
   *                <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * @public
 * @enum
 */
export const BatchReportModeType = {
  REPORT_AGGREGATED_BATCH: "REPORT_AGGREGATED_BATCH",
  REPORT_INDIVIDUAL_BUILDS: "REPORT_INDIVIDUAL_BUILDS",
} as const;

/**
 * @public
 */
export type BatchReportModeType = (typeof BatchReportModeType)[keyof typeof BatchReportModeType];

/**
 * <p>Specifies restrictions for the batch build.</p>
 * @public
 */
export interface BatchRestrictions {
  /**
   * <p>Specifies the maximum number of builds allowed.</p>
   * @public
   */
  maximumBuildsAllowed?: number | undefined;

  /**
   * <p>An array of strings that specify the compute types that are allowed for the batch
   *             build. See <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment
   *                 compute types</a> in the <i>CodeBuild User Guide</i> for these values.
   *         </p>
   * @public
   */
  computeTypesAllowed?: string[] | undefined;

  /**
   * <p>An array of strings that specify the fleets that are allowed
   *             for the batch build. See <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/fleets.html">Run builds on reserved capacity fleets</a> in the <i>CodeBuild User Guide</i>
   *                 for more information. </p>
   * @public
   */
  fleetsAllowed?: string[] | undefined;
}

/**
 * <p>Contains configuration information about a batch build project.</p>
 * @public
 */
export interface ProjectBuildBatchConfig {
  /**
   * <p>Specifies the service role ARN for the batch build project.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>Specifies if the build artifacts for the batch build should be combined into a single
   *             artifact location.</p>
   * @public
   */
  combineArtifacts?: boolean | undefined;

  /**
   * <p>A <code>BatchRestrictions</code> object that specifies the restrictions for the batch
   *             build.</p>
   * @public
   */
  restrictions?: BatchRestrictions | undefined;

  /**
   * <p>Specifies the maximum amount of time, in minutes, that the batch build must be completed in.</p>
   * @public
   */
  timeoutInMins?: number | undefined;

  /**
   * <p>Specifies how build status reports are sent to the source provider for the batch build. This property is only used
   *               when the source provider for your project is Bitbucket, GitHub, or GitHub Enterprise,
   *               and your project is configured to report build statuses to the source provider.</p>
   *          <dl>
   *             <dt>REPORT_AGGREGATED_BATCH</dt>
   *             <dd>
   *                <p>(Default) Aggregate all of the build statuses into a single status report.</p>
   *             </dd>
   *             <dt>REPORT_INDIVIDUAL_BUILDS</dt>
   *             <dd>
   *                <p>Send a separate status report for each individual build.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  batchReportMode?: BatchReportModeType | undefined;
}

/**
 * @public
 * @enum
 */
export const StatusType = {
  FAILED: "FAILED",
  FAULT: "FAULT",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * <p>Represents a resolved build artifact. A resolved artifact is an artifact that is built and
 *             deployed to the destination, such as Amazon S3.</p>
 * @public
 */
export interface ResolvedArtifact {
  /**
   * <p>Specifies the type of artifact.</p>
   * @public
   */
  type?: ArtifactsType | undefined;

  /**
   * <p>The location of the artifact.</p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The identifier of the artifact.</p>
   * @public
   */
  identifier?: string | undefined;
}

/**
 * <p>Contains summary information about a batch build group.</p>
 * @public
 */
export interface BuildSummary {
  /**
   * <p>The batch build ARN.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>When the build was started, expressed in Unix time format.</p>
   * @public
   */
  requestedOn?: Date | undefined;

  /**
   * <p>The status of the build group.</p>
   *          <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>The build group failed.</p>
   *             </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                <p>The build group faulted.</p>
   *             </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>The build group is still in progress.</p>
   *             </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                <p>The build group stopped.</p>
   *             </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                <p>The build group succeeded.</p>
   *             </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                <p>The build group timed out.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  buildStatus?: StatusType | undefined;

  /**
   * <p>A <code>ResolvedArtifact</code> object that represents the primary build artifacts for the
   *             build group.</p>
   * @public
   */
  primaryArtifact?: ResolvedArtifact | undefined;

  /**
   * <p>An array of <code>ResolvedArtifact</code> objects that represents the secondary build
   *             artifacts for the build group.</p>
   * @public
   */
  secondaryArtifacts?: ResolvedArtifact[] | undefined;
}

/**
 * <p>Contains information about a batch build build group. Build groups are used to combine
 *             builds that can run in parallel, while still being able to set dependencies on other
 *             build groups.</p>
 * @public
 */
export interface BuildGroup {
  /**
   * <p>Contains the identifier of the build group.</p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p>An array of strings that contain the identifiers of the build groups that this build
   *             group depends on.</p>
   * @public
   */
  dependsOn?: string[] | undefined;

  /**
   * <p>Specifies if failures in this build group can be ignored.</p>
   * @public
   */
  ignoreFailure?: boolean | undefined;

  /**
   * <p>A <code>BuildSummary</code> object that contains a summary of the current build
   *             group.</p>
   * @public
   */
  currentBuildSummary?: BuildSummary | undefined;

  /**
   * <p>An array of <code>BuildSummary</code> objects that contain summaries of previous
   *             build groups.</p>
   * @public
   */
  priorBuildSummaryList?: BuildSummary[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CacheMode = {
  LOCAL_CUSTOM_CACHE: "LOCAL_CUSTOM_CACHE",
  LOCAL_DOCKER_LAYER_CACHE: "LOCAL_DOCKER_LAYER_CACHE",
  LOCAL_SOURCE_CACHE: "LOCAL_SOURCE_CACHE",
} as const;

/**
 * @public
 */
export type CacheMode = (typeof CacheMode)[keyof typeof CacheMode];

/**
 * @public
 * @enum
 */
export const CacheType = {
  LOCAL: "LOCAL",
  NO_CACHE: "NO_CACHE",
  S3: "S3",
} as const;

/**
 * @public
 */
export type CacheType = (typeof CacheType)[keyof typeof CacheType];

/**
 * <p>Information about the cache for the build project.</p>
 * @public
 */
export interface ProjectCache {
  /**
   * <p>The type of cache used by the build project. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NO_CACHE</code>: The build project does not use any cache.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code>: The build project reads and writes from and to S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LOCAL</code>: The build project stores a cache locally on a build host
   *                     that is only available to that build host.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: CacheType | undefined;

  /**
   * <p>Information about the cache location: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NO_CACHE</code> or <code>LOCAL</code>: This value is ignored.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code>: This is the S3 bucket name/prefix.</p>
   *             </li>
   *          </ul>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>An array of strings that specify the local cache modes. You can use one or more local
   *             cache modes at the same time. This is only used for <code>LOCAL</code> cache
   *             types.</p>
   *          <p>Possible values are:</p>
   *          <dl>
   *             <dt>LOCAL_SOURCE_CACHE</dt>
   *             <dd>
   *                <p>Caches Git metadata for primary and secondary sources. After the cache is
   *                         created, subsequent builds pull only the change between commits. This mode
   *                         is a good choice for projects with a clean working directory and a source
   *                         that is a large Git repository. If you choose this option and your project
   *                         does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the
   *                         option is ignored. </p>
   *             </dd>
   *             <dt>LOCAL_DOCKER_LAYER_CACHE</dt>
   *             <dd>
   *                <p>Caches existing Docker layers. This mode is a good choice for projects
   *                         that build or pull large Docker images. It can prevent the performance
   *                         issues caused by pulling large Docker images down from the network. </p>
   *                <note>
   *                   <ul>
   *                      <li>
   *                         <p>You can use a Docker layer cache in the Linux environment
   *                                     only. </p>
   *                      </li>
   *                      <li>
   *                         <p>The <code>privileged</code> flag must be set so that your
   *                                     project has the required Docker permissions. </p>
   *                      </li>
   *                      <li>
   *                         <p>You should consider the security implications before you use a
   *                                     Docker layer cache. </p>
   *                      </li>
   *                   </ul>
   *                </note>
   *             </dd>
   *             <dt>LOCAL_CUSTOM_CACHE</dt>
   *             <dd>
   *                <p>Caches directories you specify in the buildspec file. This mode is a good
   *                         choice if your build scenario is not suited to one of the other three local
   *                         cache modes. If you use a custom cache: </p>
   *                <ul>
   *                   <li>
   *                      <p>Only directories can be specified for caching. You cannot specify
   *                                 individual files. </p>
   *                   </li>
   *                   <li>
   *                      <p>Symlinks are used to reference cached directories. </p>
   *                   </li>
   *                   <li>
   *                      <p>Cached directories are linked to your build before it downloads
   *                                 its project sources. Cached items are overridden if a source item
   *                                 has the same name. Directories are specified using cache paths in
   *                                 the buildspec file. </p>
   *                   </li>
   *                </ul>
   *             </dd>
   *          </dl>
   * @public
   */
  modes?: CacheMode[] | undefined;

  /**
   * <p>Defines the scope of the cache. You can use this namespace to share a cache across
   *             multiple projects. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/caching-s3.html#caching-s3-sharing">Cache sharing
   *                 between projects</a> in the <i>CodeBuild User Guide</i>.</p>
   * @public
   */
  cacheNamespace?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MachineType = {
  GENERAL: "GENERAL",
  NVME: "NVME",
} as const;

/**
 * @public
 */
export type MachineType = (typeof MachineType)[keyof typeof MachineType];

/**
 * <p>Contains compute attributes. These attributes only need be specified when your project's or fleet's <code>computeType</code> is set to <code>ATTRIBUTE_BASED_COMPUTE</code> or <code>CUSTOM_INSTANCE_TYPE</code>.</p>
 * @public
 */
export interface ComputeConfiguration {
  /**
   * <p>The number of vCPUs of the instance type included in your fleet.</p>
   * @public
   */
  vCpu?: number | undefined;

  /**
   * <p>The amount of memory of the instance type included in your fleet.</p>
   * @public
   */
  memory?: number | undefined;

  /**
   * <p>The amount of disk space of the instance type included in your fleet.</p>
   * @public
   */
  disk?: number | undefined;

  /**
   * <p>The machine type of the instance type included in your fleet.</p>
   * @public
   */
  machineType?: MachineType | undefined;

  /**
   * <p>The EC2 instance type to be launched in your fleet.</p>
   * @public
   */
  instanceType?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  ATTRIBUTE_BASED_COMPUTE: "ATTRIBUTE_BASED_COMPUTE",
  BUILD_GENERAL1_2XLARGE: "BUILD_GENERAL1_2XLARGE",
  BUILD_GENERAL1_LARGE: "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM: "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL: "BUILD_GENERAL1_SMALL",
  BUILD_GENERAL1_XLARGE: "BUILD_GENERAL1_XLARGE",
  BUILD_LAMBDA_10GB: "BUILD_LAMBDA_10GB",
  BUILD_LAMBDA_1GB: "BUILD_LAMBDA_1GB",
  BUILD_LAMBDA_2GB: "BUILD_LAMBDA_2GB",
  BUILD_LAMBDA_4GB: "BUILD_LAMBDA_4GB",
  BUILD_LAMBDA_8GB: "BUILD_LAMBDA_8GB",
  CUSTOM_INSTANCE_TYPE: "CUSTOM_INSTANCE_TYPE",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

/**
 * <p>Contains information about the status of the docker server.</p>
 * @public
 */
export interface DockerServerStatus {
  /**
   * <p>The status of the docker server.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>A message associated with the status of a docker server.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>Contains docker server information.</p>
 * @public
 */
export interface DockerServer {
  /**
   * <p>Information about the compute resources the docker server uses. Available values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 4 GiB memory and 2 vCPUs for
   *                     your docker server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 8 GiB memory and 4 vCPUs for
   *                     your docker server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GiB memory and 8 vCPUs for
   *                     your docker server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_XLARGE</code>: Use up to 64 GiB memory and 32 vCPUs for
   *                     your docker server.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 128 GiB memory and 64 vCPUs for
   *                     your docker server.</p>
   *             </li>
   *          </ul>
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * <p>A list of one or more security groups IDs.</p>
   *          <note>
   *             <p>Security groups configured for Docker servers should allow ingress network traffic from the VPC configured in the project. They should allow ingress on port 9876.</p>
   *          </note>
   * @public
   */
  securityGroupIds?: string[] | undefined;

  /**
   * <p>A DockerServerStatus object to use for this docker server.</p>
   * @public
   */
  status?: DockerServerStatus | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentVariableType = {
  PARAMETER_STORE: "PARAMETER_STORE",
  PLAINTEXT: "PLAINTEXT",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * @public
 */
export type EnvironmentVariableType = (typeof EnvironmentVariableType)[keyof typeof EnvironmentVariableType];

/**
 * <p>Information about an environment variable for a build project or a build.</p>
 * @public
 */
export interface EnvironmentVariable {
  /**
   * <p>The name or key of the environment variable.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The value of the environment variable.</p>
   *          <important>
   *             <p>We strongly discourage the use of <code>PLAINTEXT</code> environment variables to
   *                 store sensitive values, especially Amazon Web Services secret key IDs.
   *                     <code>PLAINTEXT</code> environment variables can be displayed in plain text
   *                 using the CodeBuild console and the CLI. For sensitive values, we recommend you use an
   *                 environment variable of type <code>PARAMETER_STORE</code> or
   *                     <code>SECRETS_MANAGER</code>. </p>
   *          </important>
   * @public
   */
  value: string | undefined;

  /**
   * <p>The type of environment variable. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PARAMETER_STORE</code>: An environment variable stored in Systems Manager
   *                     Parameter Store. For environment variables of this type, specify the name of the parameter as the <code>value</code> of the
   *                     EnvironmentVariable. The parameter value will be substituted for the name at runtime. You can also define Parameter
   *                     Store environment variables in the buildspec. To learn how to do so,
   *                     see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.parameter-store">env/parameter-store</a> in the
   *                     <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLAINTEXT</code>: An environment variable in plain text format. This is
   *                     the default value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECRETS_MANAGER</code>: An environment variable stored in Secrets Manager. For environment variables of this type,
   *                     specify the name of the secret as the <code>value</code> of the EnvironmentVariable. The secret value will be substituted for the
   *                     name at runtime. You can also define Secrets Manager environment variables in the buildspec. To learn how to do so, see
   *                         <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.secrets-manager">env/secrets-manager</a> in the
   *                     <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: EnvironmentVariableType | undefined;
}

/**
 * <p>Information about the compute fleet of the build project. For more
 *             information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/fleets.html">Working
 *                 with reserved capacity in CodeBuild</a>.</p>
 * @public
 */
export interface ProjectFleet {
  /**
   * <p>Specifies the compute fleet ARN for the build project.</p>
   * @public
   */
  fleetArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImagePullCredentialsType = {
  CODEBUILD: "CODEBUILD",
  SERVICE_ROLE: "SERVICE_ROLE",
} as const;

/**
 * @public
 */
export type ImagePullCredentialsType = (typeof ImagePullCredentialsType)[keyof typeof ImagePullCredentialsType];

/**
 * @public
 * @enum
 */
export const CredentialProviderType = {
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * @public
 */
export type CredentialProviderType = (typeof CredentialProviderType)[keyof typeof CredentialProviderType];

/**
 * <p> Information about credentials that provide access to a private Docker registry. When
 *             this is set: </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>.
 *                 </p>
 *             </li>
 *             <li>
 *                <p> images cannot be curated or an Amazon ECR image.</p>
 *             </li>
 *          </ul>
 *          <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with
 *                 Secrets Manager Sample for CodeBuild</a>. </p>
 * @public
 */
export interface RegistryCredential {
  /**
   * <p> The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. </p>
   *          <note>
   *             <p> The <code>credential</code> can use the name of the credentials only if they
   *                 exist in your current Amazon Web Services Region. </p>
   *          </note>
   * @public
   */
  credential: string | undefined;

  /**
   * <p> The service that created the credentials to access a private Docker registry. The
   *             valid value, SECRETS_MANAGER, is for Secrets Manager. </p>
   * @public
   */
  credentialProvider: CredentialProviderType | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentType = {
  ARM_CONTAINER: "ARM_CONTAINER",
  ARM_EC2: "ARM_EC2",
  ARM_LAMBDA_CONTAINER: "ARM_LAMBDA_CONTAINER",
  LINUX_CONTAINER: "LINUX_CONTAINER",
  LINUX_EC2: "LINUX_EC2",
  LINUX_GPU_CONTAINER: "LINUX_GPU_CONTAINER",
  LINUX_LAMBDA_CONTAINER: "LINUX_LAMBDA_CONTAINER",
  MAC_ARM: "MAC_ARM",
  WINDOWS_CONTAINER: "WINDOWS_CONTAINER",
  WINDOWS_EC2: "WINDOWS_EC2",
  WINDOWS_SERVER_2019_CONTAINER: "WINDOWS_SERVER_2019_CONTAINER",
  WINDOWS_SERVER_2022_CONTAINER: "WINDOWS_SERVER_2022_CONTAINER",
} as const;

/**
 * @public
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

/**
 * <p>Information about the build environment of the build project.</p>
 * @public
 */
export interface ProjectEnvironment {
  /**
   * <p>The type of build environment to use for related builds.</p>
   *          <note>
   *             <p>If you're using compute fleets during project creation, <code>type</code> will be ignored.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild
   *                 user guide</i>.</p>
   * @public
   */
  type: EnvironmentType | undefined;

  /**
   * <p>The image tag or image digest that identifies the Docker image to use for this build
   *             project. Use the following formats:</p>
   *          <ul>
   *             <li>
   *                <p>For an image tag: <code><registry>/<repository>:<tag></code>. For
   *                     example, in the Docker repository that CodeBuild uses to manage its Docker
   *                     images, this would be <code>aws/codebuild/standard:4.0</code>. </p>
   *             </li>
   *             <li>
   *                <p>For an image digest: <code><registry>/<repository>@<digest></code>.
   *                     For example, to specify an image with the digest
   *                     "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use
   *                         <code><registry>/<repository>@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf</code>.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html">Docker images provided by CodeBuild</a> in the <i>CodeBuild user
   *                 guide</i>.</p>
   * @public
   */
  image: string | undefined;

  /**
   * <p>Information about the compute resources the build project uses. Available values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTRIBUTE_BASED_COMPUTE</code>: Specify the amount of vCPUs, memory, disk space, and the type of machine.</p>
   *                <note>
   *                   <p> If you use <code>ATTRIBUTE_BASED_COMPUTE</code>, you must define your attributes by using <code>computeConfiguration</code>. CodeBuild
   *                         will select the cheapest instance that satisfies your specified attributes. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types">Reserved capacity environment
   *                         types</a> in the <i>CodeBuild User Guide</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 4 GiB memory and 2 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 8 GiB memory and 4 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GiB memory and 8 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_XLARGE</code>: Use up to 72 GiB memory and 36 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 144 GiB memory, 72 vCPUs, and
   *                     824 GB of SSD storage for builds. This compute type supports Docker images up to
   *                     100 GB uncompressed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_1GB</code>: Use up to 1 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_2GB</code>: Use up to 2 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_4GB</code>: Use up to 4 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_8GB</code>: Use up to 8 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_10GB</code>: Use up to 10 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_SMALL</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 16
   *                     GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255
   *                     GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types">On-demand environment types</a>
   *                 in the <i>CodeBuild User Guide.</i>
   *          </p>
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * <p>The compute configuration of the build project. This is only required if <code>computeType</code> is set to <code>ATTRIBUTE_BASED_COMPUTE</code>.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * <p>A ProjectFleet object to use for this build project.</p>
   * @public
   */
  fleet?: ProjectFleet | undefined;

  /**
   * <p>A set of environment variables to make available to builds for this build
   *             project.</p>
   * @public
   */
  environmentVariables?: EnvironmentVariable[] | undefined;

  /**
   * <p>Enables running the Docker daemon inside a Docker container. Set to true only if the
   *             build project is used to build Docker images. Otherwise, a build that attempts to
   *             interact with the Docker daemon fails. The default setting is <code>false</code>.</p>
   *          <p>You can initialize the Docker daemon during the install phase of your build by adding
   *             one of the following sets of commands to the install phase of your buildspec
   *             file:</p>
   *          <p>If the operating system's base image is Ubuntu Linux:</p>
   *          <p>
   *             <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&</code>
   *          </p>
   *          <p>
   *             <code>- timeout 15 sh -c "until docker info; do echo .; sleep 1; done"</code>
   *          </p>
   *          <p>If the operating system's base image is Alpine Linux and the previous command does not
   *             work, add the <code>-t</code> argument to <code>timeout</code>:</p>
   *          <p>
   *             <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&</code>
   *          </p>
   *          <p>
   *             <code>- timeout -t 15 sh -c "until docker info; do echo .; sleep 1; done"</code>
   *          </p>
   * @public
   */
  privilegedMode?: boolean | undefined;

  /**
   * <p>The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded
   *             certificate for the build project. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/create-project-cli.html#cli.environment.certificate">certificate</a> in the
   *                 <i>CodeBuild User Guide</i>.</p>
   * @public
   */
  certificate?: string | undefined;

  /**
   * <p> The credentials for access to a private registry.</p>
   * @public
   */
  registryCredential?: RegistryCredential | undefined;

  /**
   * <p> The type of credentials CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CODEBUILD</code> specifies that CodeBuild uses its own credentials.
   *                     This requires that you modify your ECR repository policy to trust CodeBuild service principal. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SERVICE_ROLE</code> specifies that CodeBuild uses your build project's service
   *                     role. </p>
   *             </li>
   *          </ul>
   *          <p> When you use a cross-account or private registry image, you must use SERVICE_ROLE
   *             credentials. When you use an CodeBuild curated image, you must use CODEBUILD credentials.
   *         </p>
   * @public
   */
  imagePullCredentialsType?: ImagePullCredentialsType | undefined;

  /**
   * <p>A DockerServer object to use for this build project.</p>
   * @public
   */
  dockerServer?: DockerServer | undefined;
}

/**
 * @public
 * @enum
 */
export const FileSystemType = {
  EFS: "EFS",
} as const;

/**
 * @public
 */
export type FileSystemType = (typeof FileSystemType)[keyof typeof FileSystemType];

/**
 * <p> Information about a file system created by Amazon Elastic File System (EFS). For more
 *             information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is
 *                 Amazon Elastic File System?</a>
 *          </p>
 * @public
 */
export interface ProjectFileSystemLocation {
  /**
   * <p> The type of the file system. The one supported type is <code>EFS</code>. </p>
   * @public
   */
  type?: FileSystemType | undefined;

  /**
   * <p>A string that specifies the location of the file system created by Amazon EFS. Its
   *             format is <code>efs-dns-name:/directory-path</code>. You can find the DNS name of file
   *             system when you view it in the Amazon EFS console. The directory path is a path to a
   *             directory in the file system that CodeBuild mounts. For example, if the DNS name of a
   *             file system is <code>fs-abcd1234.efs.us-west-2.amazonaws.com</code>, and its mount
   *             directory is <code>my-efs-mount-directory</code>, then the <code>location</code> is
   *                 <code>fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory</code>. </p>
   *          <p>The directory path in the format <code>efs-dns-name:/directory-path</code> is
   *             optional. If you do not specify a directory path, the location is only the DNS name and
   *             CodeBuild mounts the entire file system. </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>The location in the container where you mount the file system. </p>
   * @public
   */
  mountPoint?: string | undefined;

  /**
   * <p>The name used to access a file system created by Amazon EFS. CodeBuild creates an
   *             environment variable by appending the <code>identifier</code> in all capital letters to
   *                 <code>CODEBUILD_</code>. For example, if you specify <code>my_efs</code> for
   *                 <code>identifier</code>, a new environment variable is create named
   *                 <code>CODEBUILD_MY_EFS</code>. </p>
   *          <p> The <code>identifier</code> is used to mount your file system. </p>
   * @public
   */
  identifier?: string | undefined;

  /**
   * <p> The mount options for a file system created by Amazon EFS. The default mount options
   *             used by CodeBuild are
   *                 <code>nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2</code>. For
   *             more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-nfs-mount-settings.html">Recommended NFS Mount
   *                 Options</a>. </p>
   * @public
   */
  mountOptions?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const LogsConfigStatusType = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type LogsConfigStatusType = (typeof LogsConfigStatusType)[keyof typeof LogsConfigStatusType];

/**
 * <p> Information about CloudWatch Logs for a build project. </p>
 * @public
 */
export interface CloudWatchLogsConfig {
  /**
   * <p>The current status of the logs in CloudWatch Logs for a build project. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: CloudWatch Logs are enabled for this build project.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>: CloudWatch Logs are not enabled for this build project.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: LogsConfigStatusType | undefined;

  /**
   * <p> The group name of the logs in CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p> The prefix of the stream name of the CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   * @public
   */
  streamName?: string | undefined;
}

/**
 * <p> Information about S3 logs for a build project. </p>
 * @public
 */
export interface S3LogsConfig {
  /**
   * <p>The current status of the S3 build logs. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: S3 build logs are enabled for this build project.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>: S3 build logs are not enabled for this build
   *                     project.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status: LogsConfigStatusType | undefined;

  /**
   * <p> The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket
   *             name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then
   *             acceptable formats are <code>my-bucket/build-log</code> or
   *                 <code>arn:aws:s3:::my-bucket/build-log</code>. </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p> Set to true if you do not want your S3 build log output encrypted. By default S3
   *             build logs are encrypted. </p>
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *          <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *          </note>
   *          <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *                <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *                <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                   </li>
   *                </ul>
   *                <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * <p> Information about logs for a build project. These can be logs in CloudWatch Logs, built in a
 *             specified S3 bucket, or both. </p>
 * @public
 */
export interface LogsConfig {
  /**
   * <p> Information about CloudWatch Logs for a build project. CloudWatch Logs are enabled by default. </p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsConfig | undefined;

  /**
   * <p> Information about logs built to an S3 bucket for a build project. S3 logs are not
   *             enabled by default. </p>
   * @public
   */
  s3Logs?: S3LogsConfig | undefined;
}

/**
 * <p>Additional information about a build phase that has an error. You can use this
 *             information for troubleshooting.</p>
 * @public
 */
export interface PhaseContext {
  /**
   * <p>The status code for the context of the build phase.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>An explanation of the build phase's context. This might include a command ID and an
   *             exit code.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BuildBatchPhaseType = {
  COMBINE_ARTIFACTS: "COMBINE_ARTIFACTS",
  DOWNLOAD_BATCHSPEC: "DOWNLOAD_BATCHSPEC",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  STOPPED: "STOPPED",
  SUBMITTED: "SUBMITTED",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BuildBatchPhaseType = (typeof BuildBatchPhaseType)[keyof typeof BuildBatchPhaseType];

/**
 * <p>Contains information about a stage for a batch build.</p>
 * @public
 */
export interface BuildBatchPhase {
  /**
   * <p>The name of the batch build phase. Valid values include:</p>
   *          <dl>
   *             <dt>COMBINE_ARTIFACTS</dt>
   *             <dd>
   *                <p>Build output artifacts are being combined and uploaded to the output
   *                         location.</p>
   *             </dd>
   *             <dt>DOWNLOAD_BATCHSPEC</dt>
   *             <dd>
   *                <p>The batch build specification is being downloaded.</p>
   *             </dd>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>One or more of the builds failed.</p>
   *             </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>The batch build is in progress.</p>
   *             </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                <p>The batch build was stopped.</p>
   *             </dd>
   *             <dt>SUBMITTED</dt>
   *             <dd>
   *                <p>The btach build has been submitted.</p>
   *             </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                <p>The batch build succeeded.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  phaseType?: BuildBatchPhaseType | undefined;

  /**
   * <p>The current status of the batch build phase. Valid values include:</p>
   *          <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>The build phase failed.</p>
   *             </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                <p>The build phase faulted.</p>
   *             </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>The build phase is still in progress.</p>
   *             </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                <p>The build phase stopped.</p>
   *             </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                <p>The build phase succeeded.</p>
   *             </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                <p>The build phase timed out.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * <p>When the batch build phase started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the batch build phase ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>How long, in seconds, between the starting and ending times of the batch build's
   *         phase.</p>
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * <p>Additional information about the batch build phase. Especially to help troubleshoot a
   *             failed batch build.</p>
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceAuthType = {
  CODECONNECTIONS: "CODECONNECTIONS",
  OAUTH: "OAUTH",
  SECRETS_MANAGER: "SECRETS_MANAGER",
} as const;

/**
 * @public
 */
export type SourceAuthType = (typeof SourceAuthType)[keyof typeof SourceAuthType];

/**
 * <p>Information about the authorization settings for CodeBuild to access the source code to be
 *             built.</p>
 * @public
 */
export interface SourceAuth {
  /**
   * <p>The authorization type to use. Valid options are OAUTH, CODECONNECTIONS, or SECRETS_MANAGER.</p>
   * @public
   */
  type: SourceAuthType | undefined;

  /**
   * <p>The resource value that applies to the specified authorization type.</p>
   * @public
   */
  resource?: string | undefined;
}

/**
 * <p>Contains information that defines how the CodeBuild build project reports the build status
 *             to the source provider. </p>
 * @public
 */
export interface BuildStatusConfig {
  /**
   * <p>Specifies the context of the build status CodeBuild sends to the source provider. The
   *             usage of this parameter depends on the source provider.</p>
   *          <dl>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                <p>This parameter is used for the <code>name</code> parameter in the
   *                         Bitbucket commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p>
   *             </dd>
   *             <dt>GitHub/GitHub Enterprise Server</dt>
   *             <dd>
   *                <p>This parameter is used for the <code>context</code> parameter in the
   *                         GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  context?: string | undefined;

  /**
   * <p>Specifies the target url of the build status CodeBuild sends to the source provider. The
   *             usage of this parameter depends on the source provider.</p>
   *          <dl>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                <p>This parameter is used for the <code>url</code> parameter in the Bitbucket
   *                         commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p>
   *             </dd>
   *             <dt>GitHub/GitHub Enterprise Server</dt>
   *             <dd>
   *                <p>This parameter is used for the <code>target_url</code> parameter in the
   *                         GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  targetUrl?: string | undefined;
}

/**
 * <p> Information about the Git submodules configuration for an CodeBuild build project.
 *         </p>
 * @public
 */
export interface GitSubmodulesConfig {
  /**
   * <p> Set to true to fetch Git submodules for your CodeBuild build project. </p>
   * @public
   */
  fetchSubmodules: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const SourceType = {
  BITBUCKET: "BITBUCKET",
  CODECOMMIT: "CODECOMMIT",
  CODEPIPELINE: "CODEPIPELINE",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
  GITLAB: "GITLAB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
  NO_SOURCE: "NO_SOURCE",
  S3: "S3",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * <p>Information about the build input source code for the build project.</p>
 * @public
 */
export interface ProjectSource {
  /**
   * <p>The type of repository that contains the source code to be built. Valid values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODECOMMIT</code>: The source code is in an CodeCommit repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CODEPIPELINE</code>: The source code settings are specified in the
   *                     source action of a pipeline in CodePipeline.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB</code>: The source code is in a GitHub repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITHUB_ENTERPRISE</code>: The source code is in a GitHub Enterprise
   *                     Server repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITLAB</code>: The source code is in a GitLab repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GITLAB_SELF_MANAGED</code>: The source code is in a self-managed GitLab repository.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_SOURCE</code>: The project does not have input source code.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code>: The source code is in an Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: SourceType | undefined;

  /**
   * <p>Information about the location of the source code to be built. Valid values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>For source code settings that are specified in the source action of a pipeline
   *                     in CodePipeline, <code>location</code> should not be specified. If it is specified,
   *                     CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source
   *                     action instead of this value.</p>
   *             </li>
   *             <li>
   *                <p>For source code in an CodeCommit repository, the HTTPS clone URL to the repository
   *                     that contains the source code and the buildspec file (for example,
   *                         <code>https://git-codecommit.<region-ID>.amazonaws.com/v1/repos/<repo-name></code>).</p>
   *             </li>
   *             <li>
   *                <p>For source code in an Amazon S3 input bucket, one of the following. </p>
   *                <ul>
   *                   <li>
   *                      <p>The path to the ZIP file that contains the source code (for example,
   *                                 <code><bucket-name>/<path>/<object-name>.zip</code>). </p>
   *                   </li>
   *                   <li>
   *                      <p>The path to the folder that contains the source code (for example,
   *                                 <code><bucket-name>/<path-to-source-code>/<folder>/</code>). </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>For source code in a GitHub repository, the HTTPS clone URL to the repository
   *                     that contains the source and the buildspec file. You must connect your Amazon Web Services account
   *                     to your GitHub account. Use the CodeBuild console to start creating a build
   *                     project. When you use the console to connect (or reconnect) with GitHub, on the
   *                     GitHub <b>Authorize application</b> page, for
   *                         <b>Organization access</b>, choose <b>Request access</b> next to each repository you want to
   *                     allow CodeBuild to have access to, and then choose <b>Authorize
   *                         application</b>. (After you have connected to your GitHub account,
   *                     you do not need to finish creating the build project. You can leave the CodeBuild
   *                     console.) To instruct CodeBuild to use this connection, in the <code>source</code>
   *                     object, set the <code>auth</code> object's <code>type</code> value to
   *                         <code>OAUTH</code>.</p>
   *             </li>
   *             <li>
   *                <p>For source code in an GitLab or self-managed GitLab repository, the HTTPS clone URL to the repository
   *                     that contains the source and the buildspec file. You must connect your Amazon Web Services account
   *                     to your GitLab account. Use the CodeBuild console to start creating a build
   *                     project. When you use the console to connect (or reconnect) with GitLab, on the
   *                     Connections <b>Authorize application</b> page, choose <b>Authorize</b>. Then on the CodeConnections <b>Create GitLab connection</b> page,
   *                     choose <b>Connect to GitLab</b>. (After you have connected to your GitLab account,
   *                     you do not need to finish creating the build project. You can leave the CodeBuild
   *                     console.) To instruct CodeBuild to override the default connection and use this connection instead,
   *                     set the <code>auth</code> object's <code>type</code> value to
   *                     <code>CODECONNECTIONS</code> in the <code>source</code> object.</p>
   *             </li>
   *             <li>
   *                <p>For source code in a Bitbucket repository, the HTTPS clone URL to the
   *                     repository that contains the source and the buildspec file. You must connect
   *                     your Amazon Web Services account to your Bitbucket account. Use the CodeBuild console to start
   *                     creating a build project. When you use the console to connect (or reconnect)
   *                     with Bitbucket, on the Bitbucket <b>Confirm access to your
   *                         account</b> page, choose <b>Grant
   *                         access</b>. (After you have connected to your Bitbucket account, you
   *                     do not need to finish creating the build project. You can leave the CodeBuild
   *                     console.) To instruct CodeBuild to use this connection, in the <code>source</code>
   *                     object, set the <code>auth</code> object's <code>type</code> value to
   *                         <code>OAUTH</code>.</p>
   *             </li>
   *          </ul>
   *          <p>
   *           If you specify <code>CODEPIPELINE</code> for the <code>Type</code> property, don't specify this
   *           property. For all of the other types, you must specify <code>Location</code>.
   *        </p>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   * @public
   */
  gitCloneDepth?: number | undefined;

  /**
   * <p> Information about the Git submodules configuration for the build project. </p>
   * @public
   */
  gitSubmodulesConfig?: GitSubmodulesConfig | undefined;

  /**
   * <p>The buildspec file declaration to use for the builds in this build project.</p>
   *          <p> If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   * @public
   */
  buildspec?: string | undefined;

  /**
   * <p>Information about the authorization settings for CodeBuild to access the source code to be
   *             built.</p>
   * @public
   */
  auth?: SourceAuth | undefined;

  /**
   * <p> Set to true to report the status of a build's start and finish to your source
   *             provider. This option is valid only when your source provider is GitHub, GitHub
   *             Enterprise, GitLab, GitLab Self Managed, GitLab, GitLab Self Managed, or Bitbucket. If this is set and you use a different source provider, an
   *             <code>invalidInputException</code> is thrown. </p>
   *          <p>To be able to report the build status to the source provider, the user associated with the source provider must
   * have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p>
   *          <p>The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *          <p>If your project's builds are triggered by a webhook, you must push a
   *               new commit to the repo for a change to this property to take
   *               effect.</p>
   * @public
   */
  reportBuildStatus?: boolean | undefined;

  /**
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   * @public
   */
  buildStatusConfig?: BuildStatusConfig | undefined;

  /**
   * <p>Enable this flag to ignore SSL warnings while connecting to the project source
   *           code.</p>
   * @public
   */
  insecureSsl?: boolean | undefined;

  /**
   * <p>An identifier for this project source. The identifier can only contain
   *           alphanumeric characters and underscores, and must be less than 128 characters in length. </p>
   * @public
   */
  sourceIdentifier?: string | undefined;
}

/**
 * <p> A source identifier and its corresponding version. </p>
 * @public
 */
export interface ProjectSourceVersion {
  /**
   * <p>An identifier for a source in the build project. The identifier can only contain
   *             alphanumeric characters and underscores, and must be less than 128 characters in length. </p>
   * @public
   */
  sourceIdentifier: string | undefined;

  /**
   * <p>The source version for the corresponding source identifier. If specified, must be one
   *           of:</p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *                   corresponds to the version of the source code you want to build. If a pull
   *                   request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *                   (for example, <code>pr/25</code>). If a branch name is specified, the branch's
   *                   HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *                   used.</p>
   *             </li>
   *             <li>
   *                <p>For GitLab: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *                   version of the source code you want to build. If a branch name is specified, the
   *                   branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                   commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *                   file to use.</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *               with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   * @public
   */
  sourceVersion: string | undefined;
}

/**
 * <p>Information about the VPC configuration that CodeBuild accesses.</p>
 * @public
 */
export interface VpcConfig {
  /**
   * <p>The ID of the Amazon VPC.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   * @public
   */
  subnets?: string[] | undefined;

  /**
   * <p>A list of one or more security groups IDs in your Amazon VPC.</p>
   * @public
   */
  securityGroupIds?: string[] | undefined;
}

/**
 * <p>Contains information about a batch build.</p>
 * @public
 */
export interface BuildBatch {
  /**
   * <p>The identifier of the batch build.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the batch build.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The date and time that the batch build started.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>The date and time that the batch build ended.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The current phase of the batch build.</p>
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * <p>The status of the batch build.</p>
   * @public
   */
  buildBatchStatus?: StatusType | undefined;

  /**
   * <p>The identifier of the version of the source code to be built.</p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>The identifier of the resolved version of this batch build's source code.</p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.</p>
   *             </li>
   *             <li>
   *                <p>For CodePipeline, the source revision provided by CodePipeline.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3, this does not apply.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * <p>The name of the batch build project.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>An array of <code>BuildBatchPhase</code> objects the specify the phases of the
   *             batch build.</p>
   * @public
   */
  phases?: BuildBatchPhase[] | undefined;

  /**
   * <p>Information about the build input source code for the build project.</p>
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * <p>An array of <code>ProjectSource</code> objects that define the sources for the batch
   *             build.</p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. Each
   *                 <code>ProjectSourceVersion</code> must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *           corresponds to the version of the source code you want to build. If a pull
   *           request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *           (for example, <code>pr/25</code>). If a branch name is specified, the branch's
   *           HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *           version of the source code you want to build. If a branch name is specified, the
   *           branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *           commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>A <code>BuildArtifacts</code> object the defines the build artifacts for this batch build.</p>
   * @public
   */
  artifacts?: BuildArtifacts | undefined;

  /**
   * <p>An array of <code>BuildArtifacts</code> objects the define the build artifacts
   *             for this batch build.</p>
   * @public
   */
  secondaryArtifacts?: BuildArtifacts[] | undefined;

  /**
   * <p>Information about the cache for the build project.</p>
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * <p>Information about the build environment of the build project.</p>
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * <p>The name of a service role used for builds in the batch.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p> Information about logs for a build project. These can be logs in CloudWatch Logs, built in a
   *             specified S3 bucket, or both. </p>
   * @public
   */
  logConfig?: LogsConfig | undefined;

  /**
   * <p>Specifies the maximum amount of time, in minutes, that the build in a batch must be
   *             completed in.</p>
   * @public
   */
  buildTimeoutInMinutes?: number | undefined;

  /**
   * <p>Specifies the amount of time, in minutes, that the batch build is allowed to be queued
   *             before it times out.</p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>Indicates if the batch build is complete.</p>
   * @public
   */
  complete?: boolean | undefined;

  /**
   * <p>The entity that started the batch build. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>If CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                <p>If a user started the build, the user's name.</p>
   *             </li>
   *             <li>
   *                <p>If the Jenkins plugin for CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  initiator?: string | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the batch build output
   *             artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>The number of the batch build. For each project, the <code>buildBatchNumber</code> of its
   *             first batch build is <code>1</code>. The <code>buildBatchNumber</code> of each subsequent
   *             batch build is incremented by <code>1</code>. If a batch build is deleted, the
   *                 <code>buildBatchNumber</code> of other batch builds does not change.</p>
   * @public
   */
  buildBatchNumber?: number | undefined;

  /**
   * <p>An array of <code>ProjectFileSystemLocation</code> objects for the batch build
   *             project. A <code>ProjectFileSystemLocation</code> object specifies the
   *                 <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *                 <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon
   *             Elastic File System. </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>Contains configuration information about a batch build project.</p>
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * <p>An array of <code>BuildGroup</code> objects that define the build groups for the
   *             batch build.</p>
   * @public
   */
  buildGroups?: BuildGroup[] | undefined;

  /**
   * <p>Specifies if session debugging is enabled for this batch build. For more information, see
   *   <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.</p>
   * @public
   */
  debugSessionEnabled?: boolean | undefined;

  /**
   * <p>An array that contains the ARNs of reports created by merging reports from builds associated with this batch build.</p>
   * @public
   */
  reportArns?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildBatchesOutput {
  /**
   * <p>An array of <code>BuildBatch</code> objects that represent the retrieved batch
   *             builds.</p>
   * @public
   */
  buildBatches?: BuildBatch[] | undefined;

  /**
   * <p>An array that contains the identifiers of any batch builds that are not found.</p>
   * @public
   */
  buildBatchesNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildsInput {
  /**
   * <p>The IDs of the builds.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * <p>Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a
 *                 running build in Session Manager</a>.</p>
 * @public
 */
export interface DebugSession {
  /**
   * <p>Specifies if session debugging is enabled for this build.</p>
   * @public
   */
  sessionEnabled?: boolean | undefined;

  /**
   * <p>Contains the identifier of the Session Manager session used for the build. To work with
   *             the paused build, you open this session to examine, control, and resume the
   *             build.</p>
   * @public
   */
  sessionTarget?: string | undefined;
}

/**
 * <p>Contains information about an exported environment variable. </p>
 *          <p>Exported environment variables are used in conjunction with CodePipeline to export
 *   environment variables from the current build stage to subsequent stages in the pipeline.
 *   For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p>
 *          <note>
 *             <p> During a build, the value of a variable is available starting with the
 *                   <code>install</code> phase. It can be updated between the start of the
 *                   <code>install</code> phase and the end of the <code>post_build</code> phase.
 *               After the <code>post_build</code> phase ends, the value of exported variables cannot
 *               change.</p>
 *          </note>
 * @public
 */
export interface ExportedEnvironmentVariable {
  /**
   * <p>The name of the exported environment variable.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The value assigned to the exported environment variable.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>Information about build logs in CloudWatch Logs.</p>
 * @public
 */
export interface LogsLocation {
  /**
   * <p>The name of the CloudWatch Logs group for the build logs.</p>
   * @public
   */
  groupName?: string | undefined;

  /**
   * <p>The name of the CloudWatch Logs stream for the build logs.</p>
   * @public
   */
  streamName?: string | undefined;

  /**
   * <p>The URL to an individual build log in CloudWatch Logs. The log stream is created during the PROVISIONING phase of a build and the <code>deeplink</code> will not be valid until it is created.</p>
   * @public
   */
  deepLink?: string | undefined;

  /**
   * <p> The URL to a build log in an S3 bucket. </p>
   * @public
   */
  s3DeepLink?: string | undefined;

  /**
   * <p>The ARN of the CloudWatch Logs stream for a build execution. Its format is <code>arn:$\{Partition\}:logs:$\{Region\}:$\{Account\}:log-group:$\{LogGroupName\}:log-stream:$\{LogStreamName\}</code>.
   *             The CloudWatch Logs stream is created during the PROVISIONING phase of a build and the ARN will not be valid until it is created. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html#amazoncloudwatchlogs-resources-for-iam-policies">Resources Defined by CloudWatch Logs</a>.</p>
   * @public
   */
  cloudWatchLogsArn?: string | undefined;

  /**
   * <p> The ARN of S3 logs for a build project. Its format is
   *                 <code>arn:$\{Partition\}:s3:::$\{BucketName\}/$\{ObjectName\}</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html#amazons3-resources-for-iam-policies">Resources Defined by Amazon S3</a>. </p>
   * @public
   */
  s3LogsArn?: string | undefined;

  /**
   * <p> Information about CloudWatch Logs for a build project. </p>
   * @public
   */
  cloudWatchLogs?: CloudWatchLogsConfig | undefined;

  /**
   * <p> Information about S3 logs for a build project. </p>
   * @public
   */
  s3Logs?: S3LogsConfig | undefined;
}

/**
 * <p>Describes a network interface.</p>
 * @public
 */
export interface NetworkInterface {
  /**
   * <p>The ID of the subnet.</p>
   * @public
   */
  subnetId?: string | undefined;

  /**
   * <p>The ID of the network interface.</p>
   * @public
   */
  networkInterfaceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BuildPhaseType = {
  BUILD: "BUILD",
  COMPLETED: "COMPLETED",
  DOWNLOAD_SOURCE: "DOWNLOAD_SOURCE",
  FINALIZING: "FINALIZING",
  INSTALL: "INSTALL",
  POST_BUILD: "POST_BUILD",
  PRE_BUILD: "PRE_BUILD",
  PROVISIONING: "PROVISIONING",
  QUEUED: "QUEUED",
  SUBMITTED: "SUBMITTED",
  UPLOAD_ARTIFACTS: "UPLOAD_ARTIFACTS",
} as const;

/**
 * @public
 */
export type BuildPhaseType = (typeof BuildPhaseType)[keyof typeof BuildPhaseType];

/**
 * <p>Information about a stage for a build.</p>
 * @public
 */
export interface BuildPhase {
  /**
   * <p>The name of the build phase. Valid values include:</p>
   *          <dl>
   *             <dt>BUILD</dt>
   *             <dd>
   *                <p>Core build activities typically occur in this build phase.</p>
   *             </dd>
   *             <dt>COMPLETED</dt>
   *             <dd>
   *                <p>The build has been completed.</p>
   *             </dd>
   *             <dt>DOWNLOAD_SOURCE</dt>
   *             <dd>
   *                <p>Source code is being downloaded in this build phase.</p>
   *             </dd>
   *             <dt>FINALIZING</dt>
   *             <dd>
   *                <p>The build process is completing in this build phase.</p>
   *             </dd>
   *             <dt>INSTALL</dt>
   *             <dd>
   *                <p>Installation activities typically occur in this build phase.</p>
   *             </dd>
   *             <dt>POST_BUILD</dt>
   *             <dd>
   *                <p>Post-build activities typically occur in this build phase.</p>
   *             </dd>
   *             <dt>PRE_BUILD</dt>
   *             <dd>
   *                <p>Pre-build activities typically occur in this build phase.</p>
   *             </dd>
   *             <dt>PROVISIONING</dt>
   *             <dd>
   *                <p>The build environment is being set up.</p>
   *             </dd>
   *             <dt>QUEUED</dt>
   *             <dd>
   *                <p>The build has been submitted and is queued behind other submitted
   *                         builds.</p>
   *             </dd>
   *             <dt>SUBMITTED</dt>
   *             <dd>
   *                <p>The build has been submitted.</p>
   *             </dd>
   *             <dt>UPLOAD_ARTIFACTS</dt>
   *             <dd>
   *                <p>Build output artifacts are being uploaded to the output location.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  phaseType?: BuildPhaseType | undefined;

  /**
   * <p>The current status of the build phase. Valid values include:</p>
   *          <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>The build phase failed.</p>
   *             </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                <p>The build phase faulted.</p>
   *             </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>The build phase is still in progress.</p>
   *             </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                <p>The build phase stopped.</p>
   *             </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                <p>The build phase succeeded.</p>
   *             </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                <p>The build phase timed out.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * <p>When the build phase started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the build phase ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>How long, in seconds, between the starting and ending times of the build's
   *             phase.</p>
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * <p>Additional information about a build phase, especially to help troubleshoot a failed
   *             build.</p>
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * <p>Information about a build.</p>
 * @public
 */
export interface Build {
  /**
   * <p>The unique ID for the build.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the build.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The number of the build. For each project, the <code>buildNumber</code> of its first
   *             build is <code>1</code>. The <code>buildNumber</code> of each subsequent build is
   *             incremented by <code>1</code>. If a build is deleted, the <code>buildNumber</code> of
   *             other builds does not change.</p>
   * @public
   */
  buildNumber?: number | undefined;

  /**
   * <p>When the build process started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the build process ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The current build phase.</p>
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * <p>The current status of the build. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>: The build failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAULT</code>: The build faulted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code>: The build is still in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code>: The build stopped.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>: The build succeeded.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TIMED_OUT</code>: The build timed out.</p>
   *             </li>
   *          </ul>
   * @public
   */
  buildStatus?: StatusType | undefined;

  /**
   * <p>Any version identifier for the version of the source code to be built. If
   *                 <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p> An identifier for the version of this build's source code. </p>
   *          <ul>
   *             <li>
   *                <p> For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. </p>
   *             </li>
   *             <li>
   *                <p> For CodePipeline, the source revision provided by CodePipeline. </p>
   *             </li>
   *             <li>
   *                <p> For Amazon S3, this does not apply. </p>
   *             </li>
   *          </ul>
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * <p>The name of the CodeBuild project.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>Information about all previous build phases that are complete and information about
   *             any current build phase that is not yet complete.</p>
   * @public
   */
  phases?: BuildPhase[] | undefined;

  /**
   * <p>Information about the source code to be built.</p>
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. Each
   *                 <code>ProjectSourceVersion</code> must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *                     corresponds to the version of the source code you want to build. If a pull
   *                     request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *                     (for example, <code>pr/25</code>). If a branch name is specified, the branch's
   *                     HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *                     used.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *                     version of the source code you want to build. If a branch name is specified, the
   *                     branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                     commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *                     file to use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>Information about the output artifacts for the build.</p>
   * @public
   */
  artifacts?: BuildArtifacts | undefined;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   * @public
   */
  secondaryArtifacts?: BuildArtifacts[] | undefined;

  /**
   * <p>Information about the cache for the build.</p>
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * <p>Information about the build environment for this build.</p>
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * <p>The name of a service role used for this build.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>Information about the build's logs in CloudWatch Logs.</p>
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * <p>How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this build if it does not
   *             get marked as completed.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>Whether the build is complete. True if complete; otherwise, false.</p>
   * @public
   */
  buildComplete?: boolean | undefined;

  /**
   * <p>The entity that started the build. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>If CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                <p>If a user started the build, the user's name (for example,
   *                         <code>MyUserName</code>).</p>
   *             </li>
   *             <li>
   *                <p>If the Jenkins plugin for CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  initiator?: string | undefined;

  /**
   * <p>If your CodeBuild project accesses resources in an Amazon VPC, you provide this parameter
   *             that identifies the VPC ID and the list of security group IDs and subnet IDs. The
   *             security groups and subnets must belong to the same VPC. You must provide at least one
   *             security group and one subnet ID.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>Describes a network interface.</p>
   * @public
   */
  networkInterface?: NetworkInterface | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *             artifacts.</p>
   *          <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>A list of exported environment variables for this build.</p>
   *          <p>Exported environment variables are used in conjunction with CodePipeline to export
   *   environment variables from the current build stage to subsequent stages in the pipeline.
   *   For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p>
   * @public
   */
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[] | undefined;

  /**
   * <p> An array of the ARNs associated with this build's reports. </p>
   * @public
   */
  reportArns?: string[] | undefined;

  /**
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>Contains information about the debug session for this build.</p>
   * @public
   */
  debugSession?: DebugSession | undefined;

  /**
   * <p>The ARN of the batch build that this build is a member of, if applicable.</p>
   * @public
   */
  buildBatchArn?: string | undefined;

  /**
   * <p>Information about the auto-retry configuration for the build.</p>
   * @public
   */
  autoRetryConfig?: AutoRetryConfig | undefined;
}

/**
 * @public
 */
export interface BatchGetBuildsOutput {
  /**
   * <p>Information about the requested builds.</p>
   * @public
   */
  builds?: Build[] | undefined;

  /**
   * <p>The IDs of builds for which information could not be found.</p>
   * @public
   */
  buildsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetCommandExecutionsInput {
  /**
   * <p>A <code>sandboxId</code> or <code>sandboxArn</code>.</p>
   * @public
   */
  sandboxId: string | undefined;

  /**
   * <p>A comma separated list of <code>commandExecutionIds</code>.</p>
   * @public
   */
  commandExecutionIds: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const CommandType = {
  SHELL: "SHELL",
} as const;

/**
 * @public
 */
export type CommandType = (typeof CommandType)[keyof typeof CommandType];

/**
 * <p>Contains command execution information.</p>
 * @public
 */
export interface CommandExecution {
  /**
   * <p>The ID of the command execution.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A <code>sandboxId</code>.</p>
   * @public
   */
  sandboxId?: string | undefined;

  /**
   * <p>When the command execution process was initially submitted, expressed in Unix time format.</p>
   * @public
   */
  submitTime?: Date | undefined;

  /**
   * <p>When the command execution process started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the command execution process ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The status of the command execution.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>The command that needs to be executed.</p>
   * @public
   */
  command?: string | undefined;

  /**
   * <p>The command type.</p>
   * @public
   */
  type?: CommandType | undefined;

  /**
   * <p>The exit code to return upon completion.</p>
   * @public
   */
  exitCode?: string | undefined;

  /**
   * <p>The text written by the command to stdout.</p>
   * @public
   */
  standardOutputContent?: string | undefined;

  /**
   * <p>The text written by the command to stderr.</p>
   * @public
   */
  standardErrContent?: string | undefined;

  /**
   * <p>Information about build logs in CloudWatch Logs.</p>
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * <p>A <code>sandboxArn</code>.</p>
   * @public
   */
  sandboxArn?: string | undefined;
}

/**
 * @public
 */
export interface BatchGetCommandExecutionsOutput {
  /**
   * <p>Information about the requested command executions.</p>
   * @public
   */
  commandExecutions?: CommandExecution[] | undefined;

  /**
   * <p>The IDs of command executions for which information could not be found.</p>
   * @public
   */
  commandExecutionsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFleetsInput {
  /**
   * <p>The names or ARNs of the compute fleets.</p>
   * @public
   */
  names: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetOverflowBehavior = {
  ON_DEMAND: "ON_DEMAND",
  QUEUE: "QUEUE",
} as const;

/**
 * @public
 */
export type FleetOverflowBehavior = (typeof FleetOverflowBehavior)[keyof typeof FleetOverflowBehavior];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleBehavior = {
  ALLOW_ALL: "ALLOW_ALL",
  DENY_ALL: "DENY_ALL",
} as const;

/**
 * @public
 */
export type FleetProxyRuleBehavior = (typeof FleetProxyRuleBehavior)[keyof typeof FleetProxyRuleBehavior];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleEffectType = {
  ALLOW: "ALLOW",
  DENY: "DENY",
} as const;

/**
 * @public
 */
export type FleetProxyRuleEffectType = (typeof FleetProxyRuleEffectType)[keyof typeof FleetProxyRuleEffectType];

/**
 * @public
 * @enum
 */
export const FleetProxyRuleType = {
  DOMAIN: "DOMAIN",
  IP: "IP",
} as const;

/**
 * @public
 */
export type FleetProxyRuleType = (typeof FleetProxyRuleType)[keyof typeof FleetProxyRuleType];

/**
 * <p>Information about the proxy rule for your reserved capacity instances.</p>
 * @public
 */
export interface FleetProxyRule {
  /**
   * <p>The type of proxy rule.</p>
   * @public
   */
  type: FleetProxyRuleType | undefined;

  /**
   * <p>The behavior of the proxy rule.</p>
   * @public
   */
  effect: FleetProxyRuleEffectType | undefined;

  /**
   * <p>The destination of the proxy rule.</p>
   * @public
   */
  entities: string[] | undefined;
}

/**
 * <p>Information about the proxy configurations that apply network access control to your reserved capacity instances.</p>
 * @public
 */
export interface ProxyConfiguration {
  /**
   * <p>The default behavior of outgoing traffic.</p>
   * @public
   */
  defaultBehavior?: FleetProxyRuleBehavior | undefined;

  /**
   * <p>An array of <code>FleetProxyRule</code> objects that represent the specified destination domains or IPs to allow or deny network access control to.</p>
   * @public
   */
  orderedProxyRules?: FleetProxyRule[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetScalingType = {
  TARGET_TRACKING_SCALING: "TARGET_TRACKING_SCALING",
} as const;

/**
 * @public
 */
export type FleetScalingType = (typeof FleetScalingType)[keyof typeof FleetScalingType];

/**
 * @public
 * @enum
 */
export const FleetScalingMetricType = {
  FLEET_UTILIZATION_RATE: "FLEET_UTILIZATION_RATE",
} as const;

/**
 * @public
 */
export type FleetScalingMetricType = (typeof FleetScalingMetricType)[keyof typeof FleetScalingMetricType];

/**
 * <p>Defines when a new instance is auto-scaled into the compute fleet.</p>
 * @public
 */
export interface TargetTrackingScalingConfiguration {
  /**
   * <p>The metric type to determine auto-scaling.</p>
   * @public
   */
  metricType?: FleetScalingMetricType | undefined;

  /**
   * <p>The value of <code>metricType</code> when to start scaling.</p>
   * @public
   */
  targetValue?: number | undefined;
}

/**
 * <p>The scaling configuration output of a compute fleet.</p>
 * @public
 */
export interface ScalingConfigurationOutput {
  /**
   * <p>The scaling type for a compute fleet.</p>
   * @public
   */
  scalingType?: FleetScalingType | undefined;

  /**
   * <p>A list of <code>TargetTrackingScalingConfiguration</code> objects.</p>
   * @public
   */
  targetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[] | undefined;

  /**
   * <p>The maximum number of instances in the ﬂeet when auto-scaling.</p>
   * @public
   */
  maxCapacity?: number | undefined;

  /**
   * <p>The desired number of instances in the ﬂeet when auto-scaling.</p>
   * @public
   */
  desiredCapacity?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetContextCode = {
  ACTION_REQUIRED: "ACTION_REQUIRED",
  CREATE_FAILED: "CREATE_FAILED",
  INSUFFICIENT_CAPACITY: "INSUFFICIENT_CAPACITY",
  PENDING_DELETION: "PENDING_DELETION",
  UPDATE_FAILED: "UPDATE_FAILED",
} as const;

/**
 * @public
 */
export type FleetContextCode = (typeof FleetContextCode)[keyof typeof FleetContextCode];

/**
 * @public
 * @enum
 */
export const FleetStatusCode = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
  PENDING_DELETION: "PENDING_DELETION",
  ROTATING: "ROTATING",
  UPDATE_ROLLBACK_FAILED: "UPDATE_ROLLBACK_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type FleetStatusCode = (typeof FleetStatusCode)[keyof typeof FleetStatusCode];

/**
 * <p>The status of the compute fleet.</p>
 * @public
 */
export interface FleetStatus {
  /**
   * <p>The status code of the compute fleet. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: The compute fleet is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATING</code>: The compute fleet is being updated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ROTATING</code>: The compute fleet is being rotated.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PENDING_DELETION</code>: The compute fleet is pending deletion.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: The compute fleet is being deleted.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: The compute fleet has failed to create.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_ROLLBACK_FAILED</code>: The compute fleet has failed to update and could not rollback to previous state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The compute fleet has succeeded and is active.</p>
   *             </li>
   *          </ul>
   * @public
   */
  statusCode?: FleetStatusCode | undefined;

  /**
   * <p>Additional information about a compute fleet. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: The compute fleet has failed to create.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_FAILED</code>: The compute fleet has failed to update.</p>
   *             </li>
   *          </ul>
   * @public
   */
  context?: FleetContextCode | undefined;

  /**
   * <p>A message associated with the status of a compute fleet.</p>
   * @public
   */
  message?: string | undefined;
}

/**
 * <p>A tag, consisting of a key and a value.</p>
 *          <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The tag's key.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>The tag's value.</p>
   * @public
   */
  value?: string | undefined;
}

/**
 * <p>A set of dedicated instances for your build environment.</p>
 * @public
 */
export interface Fleet {
  /**
   * <p>The ARN of the compute fleet.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the compute fleet.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The ID of the compute fleet.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The time at which the compute fleet was created.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The time at which the compute fleet was last modified.</p>
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * <p>The status of the compute fleet.</p>
   * @public
   */
  status?: FleetStatus | undefined;

  /**
   * <p>The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.</p>
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * <p>The environment type of the compute fleet.</p>
   *          <ul>
   *             <li>
   *                <p>The environment type <code>ARM_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney),
   *                     EU (Frankfurt), and South America (São Paulo).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>ARM_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Medium fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     and EU (Frankfurt)</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Large fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2019_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     Asia Pacific (Tokyo), Asia Pacific (Mumbai) and
   *                     EU (Ireland).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2022_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt),
   *                     Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild
   *                 user guide</i>.</p>
   * @public
   */
  environmentType?: EnvironmentType | undefined;

  /**
   * <p>Information about the compute resources the compute fleet uses. Available values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTRIBUTE_BASED_COMPUTE</code>: Specify the amount of vCPUs, memory, disk space, and the type of machine.</p>
   *                <note>
   *                   <p> If you use <code>ATTRIBUTE_BASED_COMPUTE</code>, you must define your attributes by using <code>computeConfiguration</code>. CodeBuild
   *                         will select the cheapest instance that satisfies your specified attributes. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types">Reserved capacity environment
   *                         types</a> in the <i>CodeBuild User Guide</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_INSTANCE_TYPE</code>: Specify the instance type for your compute fleet. For a list of supported instance types, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types">Supported instance families
   *                         </a> in the <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 4 GiB memory and 2 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 8 GiB memory and 4 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GiB memory and 8 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_XLARGE</code>: Use up to 72 GiB memory and 36 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 144 GiB memory, 72 vCPUs, and
   *                     824 GB of SSD storage for builds. This compute type supports Docker images up to
   *                     100 GB uncompressed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_1GB</code>: Use up to 1 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_2GB</code>: Use up to 2 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_4GB</code>: Use up to 4 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_8GB</code>: Use up to 8 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_10GB</code>: Use up to 10 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_SMALL</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 16
   *                     GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255
   *                     GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types">On-demand environment types</a>
   *                 in the <i>CodeBuild User Guide.</i>
   *          </p>
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * <p>The compute configuration of the compute fleet. This is only required if <code>computeType</code> is set to <code>ATTRIBUTE_BASED_COMPUTE</code> or <code>CUSTOM_INSTANCE_TYPE</code>.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * <p>The scaling configuration of the compute fleet.</p>
   * @public
   */
  scalingConfiguration?: ScalingConfigurationOutput | undefined;

  /**
   * <p>The compute fleet overflow behavior.</p>
   *          <ul>
   *             <li>
   *                <p>For overflow behavior <code>QUEUE</code>, your overflow builds need to wait on
   *                     the existing fleet instance to become available.</p>
   *             </li>
   *             <li>
   *                <p>For overflow behavior <code>ON_DEMAND</code>, your overflow builds run on CodeBuild on-demand.</p>
   *                <note>
   *                   <p>If you choose to set your overflow behavior to on-demand while creating a VPC-connected
   *                     fleet, make sure that you add the required VPC permissions to your project service role. For more
   *                     information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface">Example
   *                     policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface</a>.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The proxy configuration of the compute fleet.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) of the compute fleet.</p>
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The service role associated with the compute fleet. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html">
   *             Allow a user to add a permission policy for a fleet service role</a> in the <i>CodeBuild User Guide</i>.</p>
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this compute fleet.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface BatchGetFleetsOutput {
  /**
   * <p>Information about the requested compute fleets.</p>
   * @public
   */
  fleets?: Fleet[] | undefined;

  /**
   * <p>The names of compute fleets for which information could not be found.</p>
   * @public
   */
  fleetsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetProjectsInput {
  /**
   * <p>The names or ARNs of the build projects. To get information about a project shared
   *             with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project
   *             using its name.</p>
   * @public
   */
  names: string[] | undefined;
}

/**
 * <p>Information about the build output artifacts for the build project.</p>
 * @public
 */
export interface ProjectArtifacts {
  /**
   * <p>The type of build output artifact. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CODEPIPELINE</code>: The build project has build output generated
   *                     through CodePipeline. </p>
   *                <note>
   *                   <p>The <code>CODEPIPELINE</code> type is not supported for
   *                             <code>secondaryArtifacts</code>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_ARTIFACTS</code>: The build project does not produce any build
   *                     output.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>S3</code>: The build project stores build output in Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type: ArtifactsType | undefined;

  /**
   * <p>Information about the build output artifact location:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output locations
   *                     instead of CodeBuild.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output
   *                     bucket.</p>
   *             </li>
   *          </ul>
   * @public
   */
  location?: string | undefined;

  /**
   * <p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that CodeBuild
   *             uses to name and store the output artifact:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>S3</code>, this is the path to the output
   *                     artifact. If <code>path</code> is not specified, <code>path</code> is not
   *                     used.</p>
   *             </li>
   *          </ul>
   *          <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>,
   *                 <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set
   *             to <code>MyArtifact.zip</code>, the output artifact is stored in the output bucket at
   *                 <code>MyArtifacts/MyArtifact.zip</code>.</p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p>Along with <code>path</code> and <code>name</code>, the pattern that CodeBuild uses to
   *             determine the name and location to store the output artifact:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>BUILD_ID</code>: Include the build ID in the location of the
   *                             build output artifact.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>NONE</code>: Do not include the build ID. This is the default if
   *                                 <code>namespaceType</code> is not specified.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   *          <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>,
   *                 <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is
   *             set to <code>MyArtifact.zip</code>, the output artifact is stored in
   *                 <code>MyArtifacts/<build-ID>/MyArtifact.zip</code>.</p>
   * @public
   */
  namespaceType?: ArtifactNamespace | undefined;

  /**
   * <p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that CodeBuild
   *             uses to name and store the output artifact:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output
   *                     artifact object. If you set the name to be a forward slash ("/"), the artifact
   *                     is stored in the root of the output bucket.</p>
   *             </li>
   *          </ul>
   *          <p>For example:</p>
   *          <ul>
   *             <li>
   *                <p> If <code>path</code> is set to <code>MyArtifacts</code>,
   *                         <code>namespaceType</code> is set to <code>BUILD_ID</code>, and
   *                         <code>name</code> is set to <code>MyArtifact.zip</code>, then the output
   *                     artifact is stored in <code>MyArtifacts/<build-ID>/MyArtifact.zip</code>. </p>
   *             </li>
   *             <li>
   *                <p> If <code>path</code> is empty, <code>namespaceType</code> is set to
   *                         <code>NONE</code>, and <code>name</code> is set to "<code>/</code>", the
   *                     output artifact is stored in the root of the output bucket. </p>
   *             </li>
   *             <li>
   *                <p> If <code>path</code> is set to <code>MyArtifacts</code>,
   *                         <code>namespaceType</code> is set to <code>BUILD_ID</code>, and
   *                         <code>name</code> is set to "<code>/</code>", the output artifact is stored
   *                     in <code>MyArtifacts/<build-ID></code>. </p>
   *             </li>
   *          </ul>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of build output artifact to create:</p>
   *          <ul>
   *             <li>
   *                <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output artifacts
   *                     instead of CodeBuild.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p>
   *                <ul>
   *                   <li>
   *                      <p>
   *                         <code>NONE</code>: CodeBuild creates in the output bucket a folder that
   *                             contains the build output. This is the default if <code>packaging</code>
   *                             is not specified.</p>
   *                   </li>
   *                   <li>
   *                      <p>
   *                         <code>ZIP</code>: CodeBuild creates in the output bucket a ZIP file that
   *                             contains the build output.</p>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  packaging?: ArtifactPackaging | undefined;

  /**
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   * @public
   */
  overrideArtifactName?: boolean | undefined;

  /**
   * <p> Set to true if you do not want your output artifacts encrypted. This option is valid
   *             only if your artifacts type is Amazon S3. If this is set with another artifacts type, an
   *             invalidInputException is thrown. </p>
   * @public
   */
  encryptionDisabled?: boolean | undefined;

  /**
   * <p> An identifier for this artifact definition. </p>
   * @public
   */
  artifactIdentifier?: string | undefined;

  /**
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *          <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *          </note>
   *          <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *                <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *                <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                <ul>
   *                   <li>
   *                      <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                   </li>
   *                   <li>
   *                      <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                   </li>
   *                </ul>
   *                <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  bucketOwnerAccess?: BucketOwnerAccess | undefined;
}

/**
 * <p>Information about the build badge for the build project.</p>
 * @public
 */
export interface ProjectBadge {
  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *             badge.</p>
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * <p>The publicly-accessible URL through which you can access the build badge for your
   *             project. </p>
   * @public
   */
  badgeRequestUrl?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectVisibilityType = {
  PRIVATE: "PRIVATE",
  PUBLIC_READ: "PUBLIC_READ",
} as const;

/**
 * @public
 */
export type ProjectVisibilityType = (typeof ProjectVisibilityType)[keyof typeof ProjectVisibilityType];

/**
 * @public
 * @enum
 */
export const WebhookBuildType = {
  BUILD: "BUILD",
  BUILD_BATCH: "BUILD_BATCH",
  RUNNER_BUILDKITE_BUILD: "RUNNER_BUILDKITE_BUILD",
} as const;

/**
 * @public
 */
export type WebhookBuildType = (typeof WebhookBuildType)[keyof typeof WebhookBuildType];

/**
 * @public
 * @enum
 */
export const WebhookFilterType = {
  ACTOR_ACCOUNT_ID: "ACTOR_ACCOUNT_ID",
  BASE_REF: "BASE_REF",
  COMMIT_MESSAGE: "COMMIT_MESSAGE",
  EVENT: "EVENT",
  FILE_PATH: "FILE_PATH",
  HEAD_REF: "HEAD_REF",
  ORGANIZATION_NAME: "ORGANIZATION_NAME",
  RELEASE_NAME: "RELEASE_NAME",
  REPOSITORY_NAME: "REPOSITORY_NAME",
  TAG_NAME: "TAG_NAME",
  WORKFLOW_NAME: "WORKFLOW_NAME",
} as const;

/**
 * @public
 */
export type WebhookFilterType = (typeof WebhookFilterType)[keyof typeof WebhookFilterType];

/**
 * <p>A filter used to determine which webhooks trigger a build. </p>
 * @public
 */
export interface WebhookFilter {
  /**
   * <p> The type of webhook filter. There are 11 webhook filter types: <code>EVENT</code>,
   *                 <code>ACTOR_ACCOUNT_ID</code>, <code>HEAD_REF</code>, <code>BASE_REF</code>,
   *             <code>FILE_PATH</code>, <code>COMMIT_MESSAGE</code>, <code>TAG_NAME</code>, <code>RELEASE_NAME</code>,
   *             <code>REPOSITORY_NAME</code>, <code>ORGANIZATION_NAME</code>,
   *             and <code>WORKFLOW_NAME</code>. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                     EVENT
   *                 </p>
   *                <ul>
   *                   <li>
   *                      <p> A webhook event triggers a build when the provided <code>pattern</code>
   *                             matches one of nine event types: <code>PUSH</code>,
   *                             <code>PULL_REQUEST_CREATED</code>, <code>PULL_REQUEST_UPDATED</code>,
   *                             <code>PULL_REQUEST_CLOSED</code>, <code>PULL_REQUEST_REOPENED</code>,
   *                             <code>PULL_REQUEST_MERGED</code>, <code>RELEASED</code>, <code>PRERELEASED</code>,
   *                             and <code>WORKFLOW_JOB_QUEUED</code>. The <code>EVENT</code> patterns are
   *                             specified as a comma-separated string. For example, <code>PUSH,
   *                                 PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> filters all push, pull
   *                             request created, and pull request updated events. </p>
   *                      <note>
   *                         <p> Types <code>PULL_REQUEST_REOPENED</code> and <code>WORKFLOW_JOB_QUEUED</code>
   *                                 work with GitHub and GitHub Enterprise only. Types <code>RELEASED</code> and
   *                                 <code>PRERELEASED</code> work with GitHub only.</p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>ACTOR_ACCOUNT_ID</p>
   *                <ul>
   *                   <li>
   *                      <p> A webhook event triggers a build when a GitHub, GitHub Enterprise, or
   *                             Bitbucket account ID matches the regular expression <code>pattern</code>.
   *                         </p>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>HEAD_REF</p>
   *                <ul>
   *                   <li>
   *                      <p> A webhook event triggers a build when the head reference matches the
   *                             regular expression <code>pattern</code>. For example,
   *                             <code>refs/heads/branch-name</code> and <code>refs/tags/tag-name</code>. </p>
   *                      <note>
   *                         <p> Works with GitHub and GitHub Enterprise push, GitHub and GitHub
   *                             Enterprise pull request, Bitbucket push, and Bitbucket pull request events.</p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>BASE_REF</p>
   *                <ul>
   *                   <li>
   *                      <p> A webhook event triggers a build when the base reference matches the
   *                             regular expression <code>pattern</code>. For example,
   *                             <code>refs/heads/branch-name</code>. </p>
   *                      <note>
   *                         <p> Works with pull request events only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>FILE_PATH</p>
   *                <ul>
   *                   <li>
   *                      <p> A webhook triggers a build when the path of a changed file matches the
   *                             regular expression <code>pattern</code>. </p>
   *                      <note>
   *                         <p> Works with push and pull request events only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>COMMIT_MESSAGE</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the head commit message matches the
   *                             regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with push and pull request events only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>TAG_NAME</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the tag name of the release matches the
   *                             regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with <code>RELEASED</code> and <code>PRERELEASED</code> events only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>RELEASE_NAME</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the release name matches the
   *                             regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with <code>RELEASED</code> and <code>PRERELEASED</code> events only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>REPOSITORY_NAME</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the repository name matches the
   *                                 regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with GitHub global or organization webhooks only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>ORGANIZATION_NAME</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the organization name matches the
   *                                 regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with GitHub global webhooks only. </p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *             <li>
   *                <p>WORKFLOW_NAME</p>
   *                <ul>
   *                   <li>
   *                      <p>A webhook triggers a build when the workflow name matches the
   *                             regular expression <code>pattern</code>.</p>
   *                      <note>
   *                         <p> Works with <code>WORKFLOW_JOB_QUEUED</code> events only. </p>
   *                      </note>
   *                      <note>
   *                         <p>For CodeBuild-hosted Buildkite runner builds, WORKFLOW_NAME
   *                                 filters will filter by pipeline name.</p>
   *                      </note>
   *                   </li>
   *                </ul>
   *             </li>
   *          </ul>
   * @public
   */
  type: WebhookFilterType | undefined;

  /**
   * <p> For a <code>WebHookFilter</code> that uses <code>EVENT</code> type, a comma-separated
   *             string that specifies one or more events. For example, the webhook filter <code>PUSH,
   *                 PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> allows all push, pull request
   *             created, and pull request updated events to trigger a build. </p>
   *          <p> For a <code>WebHookFilter</code> that uses any of the other filter types, a regular
   *             expression pattern. For example, a <code>WebHookFilter</code> that uses
   *                 <code>HEAD_REF</code> for its <code>type</code> and the pattern
   *                 <code>^refs/heads/</code> triggers a build when the head reference is a branch with
   *             a reference name <code>refs/heads/branch-name</code>. </p>
   * @public
   */
  pattern: string | undefined;

  /**
   * <p> Used to indicate that the <code>pattern</code> determines which webhook events do not
   *             trigger a build. If true, then a webhook event that does not match the
   *                 <code>pattern</code> triggers a build. If false, then a webhook event that matches
   *             the <code>pattern</code> triggers a build. </p>
   * @public
   */
  excludeMatchedPattern?: boolean | undefined;
}

/**
 * @public
 * @enum
 */
export const WebhookScopeType = {
  GITHUB_GLOBAL: "GITHUB_GLOBAL",
  GITHUB_ORGANIZATION: "GITHUB_ORGANIZATION",
  GITLAB_GROUP: "GITLAB_GROUP",
} as const;

/**
 * @public
 */
export type WebhookScopeType = (typeof WebhookScopeType)[keyof typeof WebhookScopeType];

/**
 * <p>Contains configuration information about the scope for a webhook. </p>
 * @public
 */
export interface ScopeConfiguration {
  /**
   * <p>The name of either the group, enterprise, or organization that will send webhook events to CodeBuild, depending on the type of webhook.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The domain of the GitHub Enterprise organization or the GitLab Self Managed group. Note that this parameter is only required if your project's source type is GITHUB_ENTERPRISE or GITLAB_SELF_MANAGED.</p>
   * @public
   */
  domain?: string | undefined;

  /**
   * <p>The type of scope for a GitHub or GitLab webhook. The scope default is GITHUB_ORGANIZATION.</p>
   * @public
   */
  scope: WebhookScopeType | undefined;
}

/**
 * @public
 * @enum
 */
export const WebhookStatus = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type WebhookStatus = (typeof WebhookStatus)[keyof typeof WebhookStatus];

/**
 * <p>Information about a webhook that connects repository events to a build project in
 *       CodeBuild.</p>
 * @public
 */
export interface Webhook {
  /**
   * <p>The URL to the webhook.</p>
   * @public
   */
  url?: string | undefined;

  /**
   * <p>The CodeBuild endpoint where webhook events are sent.</p>
   * @public
   */
  payloadUrl?: string | undefined;

  /**
   * <p>The secret token of the associated repository. </p>
   *          <note>
   *             <p>A Bitbucket webhook does not support <code>secret</code>. </p>
   *          </note>
   * @public
   */
  secret?: string | undefined;

  /**
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p>It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * <p>Specifies the type of build this webhook will trigger.</p>
   *          <note>
   *             <p>
   *                <code>RUNNER_BUILDKITE_BUILD</code> is only available for <code>NO_SOURCE</code> source type projects
   *         configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html">Tutorial: Configure a CodeBuild-hosted Buildkite runner</a> in the <i>CodeBuild
   *         user guide</i>.</p>
   *          </note>
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * <p>If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns <code>payloadUrl</code> and
   *       <code>secret</code> values for the webhook. The <code>payloadUrl</code> and <code>secret</code> values in the output can
   *       be used to manually create a webhook within GitHub.</p>
   *          <note>
   *             <p>manualCreation is only available for GitHub webhooks.</p>
   *          </note>
   * @public
   */
  manualCreation?: boolean | undefined;

  /**
   * <p>A timestamp that indicates the last time a repository's secret token was modified.
   *     </p>
   * @public
   */
  lastModifiedSecret?: Date | undefined;

  /**
   * <p>The scope configuration for global or organization webhooks.</p>
   *          <note>
   *             <p>Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.</p>
   *          </note>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>The status of the webhook. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATING</code>: The webhook is being created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATE_FAILED</code>: The webhook has failed to create.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ACTIVE</code>: The webhook has succeeded and is active.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DELETING</code>: The webhook is being deleted.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: WebhookStatus | undefined;

  /**
   * <p>A message associated with the status of a webhook.</p>
   * @public
   */
  statusMessage?: string | undefined;
}

/**
 * <p>Information about a build project.</p>
 * @public
 */
export interface Project {
  /**
   * <p>The name of the build project.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information about the build input source code for this build project.</p>
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * <p>An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p>A version of the build input to be built for this project. If not specified, the
   *       latest version is used. If specified, it must be one of:</p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *           corresponds to the version of the source code you want to build. If a pull
   *           request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *           (for example <code>pr/25</code>). If a branch name is specified, the branch's
   *           HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>For GitLab: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *           version of the source code you want to build. If a branch name is specified, the
   *           branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *           commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>sourceVersion</code> is specified at the build level, then that version
   *       takes precedence over this <code>sourceVersion</code> (at the project level). </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *       with CodeBuild</a> in the <i>CodeBuild User Guide</i>.
   *     </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       over these <code>secondarySourceVersions</code> (at the project level). </p>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   * @public
   */
  artifacts?: ProjectArtifacts | undefined;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * <p>Information about the cache for the build project.</p>
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * <p>Information about the build environment for this build project.</p>
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services
   *       on behalf of the Amazon Web Services account.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out any
   *       related build that did not get marked as completed. The default is 60 minutes.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *       artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<alias-name></code>). If you don't specify a
   *         value, CodeBuild uses the managed CMK for Amazon Simple Storage Service (Amazon S3).
   *     </p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>When the build project was created, expressed in Unix time format.</p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>When the build project's settings were last modified, expressed in Unix time
   *       format.</p>
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * <p>Information about a webhook that connects repository events to a build project in
   *       CodeBuild.</p>
   * @public
   */
  webhook?: Webhook | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>Information about the build badge for the build project.</p>
   * @public
   */
  badge?: ProjectBadge | undefined;

  /**
   * <p>Information about logs for the build project. A project can create logs in CloudWatch Logs, an
   *       S3 bucket, or both. </p>
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>A <a>ProjectBuildBatchConfig</a>
   *  object that defines the batch build
   *             options for the project.</p>
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *          <dl>
   *             <dt>PUBLIC_READ</dt>
   *             <dd>
   *                <p>The project builds are visible to the public.</p>
   *             </dd>
   *             <dt>PRIVATE</dt>
   *             <dd>
   *                <p>The project builds are not visible to the public.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  projectVisibility?: ProjectVisibilityType | undefined;

  /**
   * <p>Contains the project identifier used with the public build APIs. </p>
   * @public
   */
  publicProjectAlias?: string | undefined;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for
   *       the project's builds.</p>
   * @public
   */
  resourceAccessRole?: string | undefined;

  /**
   * <p>The maximum number of additional automatic retries after a failed build. For example, if the
   *       auto-retry limit is set to 2, CodeBuild will call the <code>RetryBuild</code> API to automatically
   *       retry your build for up to 2 additional times.</p>
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface BatchGetProjectsOutput {
  /**
   * <p>Information about the requested build projects.</p>
   * @public
   */
  projects?: Project[] | undefined;

  /**
   * <p>The names of build projects for which information could not be found.</p>
   * @public
   */
  projectsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetReportGroupsInput {
  /**
   * <p>
   *       An array of report group ARNs that identify the report groups to return.
   *     </p>
   * @public
   */
  reportGroupArns: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportExportConfigType = {
  NO_EXPORT: "NO_EXPORT",
  S3: "S3",
} as const;

/**
 * @public
 */
export type ReportExportConfigType = (typeof ReportExportConfigType)[keyof typeof ReportExportConfigType];

/**
 * @public
 * @enum
 */
export const ReportPackagingType = {
  NONE: "NONE",
  ZIP: "ZIP",
} as const;

/**
 * @public
 */
export type ReportPackagingType = (typeof ReportPackagingType)[keyof typeof ReportPackagingType];

/**
 * <p> Information about the S3 bucket where the raw data of a report are exported. </p>
 * @public
 */
export interface S3ReportExportConfig {
  /**
   * <p> The name of the S3 bucket where the raw data of a report are exported. </p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket
   *         that is owned by an account other than the account running the build.</p>
   * @public
   */
  bucketOwner?: string | undefined;

  /**
   * <p> The path to the exported report's raw data results. </p>
   * @public
   */
  path?: string | undefined;

  /**
   * <p> The type of build output artifact to create. Valid values include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NONE</code>: CodeBuild creates the raw data in the output bucket. This
   *                     is the default if packaging is not specified. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ZIP</code>: CodeBuild creates a ZIP file with the raw data in the
   *                     output bucket. </p>
   *             </li>
   *          </ul>
   * @public
   */
  packaging?: ReportPackagingType | undefined;

  /**
   * <p> The encryption key for the report's encrypted raw data. </p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p> A boolean value that specifies if the results of a report are encrypted. </p>
   * @public
   */
  encryptionDisabled?: boolean | undefined;
}

/**
 * <p> Information about the location where the run of a report is exported. </p>
 * @public
 */
export interface ReportExportConfig {
  /**
   * <p> The export configuration type. Valid values are: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S3</code>: The report results are exported to an S3 bucket. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_EXPORT</code>: The report results are not exported. </p>
   *             </li>
   *          </ul>
   * @public
   */
  exportConfigType?: ReportExportConfigType | undefined;

  /**
   * <p> A <code>S3ReportExportConfig</code> object that contains information about the S3
   *             bucket where the run of a report is exported. </p>
   * @public
   */
  s3Destination?: S3ReportExportConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportGroupStatusType = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type ReportGroupStatusType = (typeof ReportGroupStatusType)[keyof typeof ReportGroupStatusType];

/**
 * @public
 * @enum
 */
export const ReportType = {
  CODE_COVERAGE: "CODE_COVERAGE",
  TEST: "TEST",
} as const;

/**
 * @public
 */
export type ReportType = (typeof ReportType)[keyof typeof ReportType];

/**
 * <p>A series of reports. Each report contains information about the results from running a
 *             series of test cases. You specify the test cases for a report group in the buildspec for
 *             a build project using one or more paths to the test case files. </p>
 * @public
 */
export interface ReportGroup {
  /**
   * <p>The ARN of the <code>ReportGroup</code>.
   *     </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the <code>ReportGroup</code>.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of the <code>ReportGroup</code>. This can be one of the following
   *             values:</p>
   *          <dl>
   *             <dt>CODE_COVERAGE</dt>
   *             <dd>
   *                <p>The report group contains code coverage reports.</p>
   *             </dd>
   *             <dt>TEST</dt>
   *             <dd>
   *                <p>The report group contains test reports.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  type?: ReportType | undefined;

  /**
   * <p>Information about the destination where the raw data of this <code>ReportGroup</code>
   *             is exported. </p>
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * <p>The date and time this <code>ReportGroup</code> was created. </p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p>The date and time this <code>ReportGroup</code> was last modified. </p>
   * @public
   */
  lastModified?: Date | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this report group. </p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>The status of the report group. This property is read-only.</p>
   *          <p>This can be one of the following values:</p>
   *          <dl>
   *             <dt>ACTIVE</dt>
   *             <dd>
   *                <p>The report group is active.</p>
   *             </dd>
   *             <dt>DELETING</dt>
   *             <dd>
   *                <p>The report group is in the process of being deleted.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  status?: ReportGroupStatusType | undefined;
}

/**
 * @public
 */
export interface BatchGetReportGroupsOutput {
  /**
   * <p>
   *       The array of report groups returned by <code>BatchGetReportGroups</code>.
   *     </p>
   * @public
   */
  reportGroups?: ReportGroup[] | undefined;

  /**
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>ReportGroup</code>.
   *     </p>
   * @public
   */
  reportGroupsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetReportsInput {
  /**
   * <p>
   *       An array of ARNs that identify the <code>Report</code> objects to return.
   *     </p>
   * @public
   */
  reportArns: string[] | undefined;
}

/**
 * <p>Contains a summary of a code coverage report.</p>
 *          <p>Line coverage measures how many statements your tests cover. A statement is a single
 *       instruction, not including comments, conditionals, etc.</p>
 *          <p>Branch coverage determines if your tests cover every possible branch of a control
 *     structure, such as an <code>if</code> or <code>case</code> statement.</p>
 * @public
 */
export interface CodeCoverageReportSummary {
  /**
   * <p>The percentage of lines that are covered by your tests.</p>
   * @public
   */
  lineCoveragePercentage?: number | undefined;

  /**
   * <p>The number of lines that are covered by your tests.</p>
   * @public
   */
  linesCovered?: number | undefined;

  /**
   * <p>The number of lines that are not covered by your tests.</p>
   * @public
   */
  linesMissed?: number | undefined;

  /**
   * <p>The percentage of branches that are covered by your tests.</p>
   * @public
   */
  branchCoveragePercentage?: number | undefined;

  /**
   * <p>The number of conditional branches that are covered by your tests.</p>
   * @public
   */
  branchesCovered?: number | undefined;

  /**
   * <p>The number of conditional branches that are not covered by your tests.</p>
   * @public
   */
  branchesMissed?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportStatusType = {
  DELETING: "DELETING",
  FAILED: "FAILED",
  GENERATING: "GENERATING",
  INCOMPLETE: "INCOMPLETE",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type ReportStatusType = (typeof ReportStatusType)[keyof typeof ReportStatusType];

/**
 * <p> Information about a test report. </p>
 * @public
 */
export interface TestReportSummary {
  /**
   * <p> The number of test cases in this <code>TestReportSummary</code>. The total includes
   *             truncated test cases. </p>
   * @public
   */
  total: number | undefined;

  /**
   * <p> A map that contains the number of each type of status returned by the test results in
   *             this <code>TestReportSummary</code>. </p>
   * @public
   */
  statusCounts: Record<string, number> | undefined;

  /**
   * <p> The number of nanoseconds it took to run all of the test cases in this report.
   *         </p>
   * @public
   */
  durationInNanoSeconds: number | undefined;
}

/**
 * <p>Information about the results from running a series of test cases during the run of a
 *             build project. The test cases are specified in the buildspec for the build project using
 *             one or more paths to the test case files. You can specify any type of tests you want,
 *             such as unit tests, integration tests, and functional tests. </p>
 * @public
 */
export interface Report {
  /**
   * <p> The ARN of the report run. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The type of the report that was run.</p>
   *          <dl>
   *             <dt>CODE_COVERAGE</dt>
   *             <dd>
   *                <p>A code coverage report.</p>
   *             </dd>
   *             <dt>TEST</dt>
   *             <dd>
   *                <p>A test report.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  type?: ReportType | undefined;

  /**
   * <p> The name of the report that was run. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The ARN of the report group associated with this report. </p>
   * @public
   */
  reportGroupArn?: string | undefined;

  /**
   * <p> The ARN of the build run that generated this report. </p>
   * @public
   */
  executionId?: string | undefined;

  /**
   * <p> The status of this report. </p>
   * @public
   */
  status?: ReportStatusType | undefined;

  /**
   * <p> The date and time this report run occurred. </p>
   * @public
   */
  created?: Date | undefined;

  /**
   * <p> The date and time a report expires. A report expires 30 days after it is created. An
   *       expired report is not available to view in CodeBuild. </p>
   * @public
   */
  expired?: Date | undefined;

  /**
   * <p> Information about where the raw data used to generate this report was exported.
   *     </p>
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * <p> A boolean that specifies if this report run is truncated. The list of test cases is
   *       truncated after the maximum number of test cases is reached. </p>
   * @public
   */
  truncated?: boolean | undefined;

  /**
   * <p> A <code>TestReportSummary</code> object that contains information about this test
   *       report. </p>
   * @public
   */
  testSummary?: TestReportSummary | undefined;

  /**
   * <p>A <code>CodeCoverageReportSummary</code> object that contains a code coverage summary for
   *             this report.</p>
   * @public
   */
  codeCoverageSummary?: CodeCoverageReportSummary | undefined;
}

/**
 * @public
 */
export interface BatchGetReportsOutput {
  /**
   * <p>
   *       The array of <code>Report</code> objects returned by <code>BatchGetReports</code>.
   *     </p>
   * @public
   */
  reports?: Report[] | undefined;

  /**
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>Report</code>.
   *     </p>
   * @public
   */
  reportsNotFound?: string[] | undefined;
}

/**
 * @public
 */
export interface BatchGetSandboxesInput {
  /**
   * <p>A comma separated list of <code>sandboxIds</code> or <code>sandboxArns</code>.</p>
   * @public
   */
  ids: string[] | undefined;
}

/**
 * <p>Contains information about the sandbox phase.</p>
 * @public
 */
export interface SandboxSessionPhase {
  /**
   * <p>The name of the sandbox phase.</p>
   * @public
   */
  phaseType?: string | undefined;

  /**
   * <p>The current status of the sandbox phase. Valid values include:</p>
   *          <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                <p>The sandbox phase failed.</p>
   *             </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                <p>The sandbox phase faulted.</p>
   *             </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                <p>The sandbox phase is still in progress.</p>
   *             </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                <p>The sandbox phase stopped.</p>
   *             </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                <p>The sandbox phase succeeded.</p>
   *             </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                <p>The sandbox phase timed out.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  phaseStatus?: StatusType | undefined;

  /**
   * <p>When the sandbox phase started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the sandbox phase ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>How long, in seconds, between the starting and ending times of the sandbox's
   *             phase.</p>
   * @public
   */
  durationInSeconds?: number | undefined;

  /**
   * <p> An array of <code>PhaseContext</code> objects. </p>
   * @public
   */
  contexts?: PhaseContext[] | undefined;
}

/**
 * <p>Contains information about the sandbox session.</p>
 * @public
 */
export interface SandboxSession {
  /**
   * <p>The ID of the sandbox session.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The status of the sandbox session.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>When the sandbox session started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the sandbox session ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The current phase for the sandbox.</p>
   * @public
   */
  currentPhase?: string | undefined;

  /**
   * <p> An array of <code>SandboxSessionPhase</code> objects. </p>
   * @public
   */
  phases?: SandboxSessionPhase[] | undefined;

  /**
   * <p>An identifier for the version of this sandbox's source code.</p>
   * @public
   */
  resolvedSourceVersion?: string | undefined;

  /**
   * <p>Information about build logs in CloudWatch Logs.</p>
   * @public
   */
  logs?: LogsLocation | undefined;

  /**
   * <p>Describes a network interface.</p>
   * @public
   */
  networkInterface?: NetworkInterface | undefined;
}

/**
 * <p>Contains sandbox information.</p>
 * @public
 */
export interface Sandbox {
  /**
   * <p>The ID of the sandbox.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the sandbox.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The CodeBuild project name.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>When the sandbox process was initially requested, expressed in Unix time format.</p>
   * @public
   */
  requestTime?: Date | undefined;

  /**
   * <p>When the sandbox process started, expressed in Unix time format.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>When the sandbox process ended, expressed in Unix time format.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The status of the sandbox.</p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>Information about the build input source code for the build project.</p>
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * <p>Any version identifier for the version of the sandbox to be built.</p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects.</p>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>Information about the build environment of the build project.</p>
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before timing out this sandbox if it does not
   *             get marked as completed.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p>The number of minutes a sandbox is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p> Information about logs for a build project. These can be logs in CloudWatch Logs, built in a
   *             specified S3 bucket, or both. </p>
   * @public
   */
  logConfig?: LogsConfig | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the sandbox output
   *             artifacts.</p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>The name of a service role used for this sandbox.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The current session for the sandbox.</p>
   * @public
   */
  currentSession?: SandboxSession | undefined;
}

/**
 * @public
 */
export interface BatchGetSandboxesOutput {
  /**
   * <p>Information about the requested sandboxes.</p>
   * @public
   */
  sandboxes?: Sandbox[] | undefined;

  /**
   * <p>The IDs of sandboxes for which information could not be found.</p>
   * @public
   */
  sandboxesNotFound?: string[] | undefined;
}

/**
 * <p>Specifies filters when retrieving batch builds.</p>
 * @public
 */
export interface BuildBatchFilter {
  /**
   * <p>The status of the batch builds to retrieve. Only batch builds that have this status will
   *             be retrieved.</p>
   * @public
   */
  status?: StatusType | undefined;
}

/**
 * <p>The scaling configuration input of a compute fleet.</p>
 * @public
 */
export interface ScalingConfigurationInput {
  /**
   * <p>The scaling type for a compute fleet.</p>
   * @public
   */
  scalingType?: FleetScalingType | undefined;

  /**
   * <p>A list of <code>TargetTrackingScalingConfiguration</code> objects.</p>
   * @public
   */
  targetTrackingScalingConfigs?: TargetTrackingScalingConfiguration[] | undefined;

  /**
   * <p>The maximum number of instances in the ﬂeet when auto-scaling.</p>
   * @public
   */
  maxCapacity?: number | undefined;
}

/**
 * @public
 */
export interface CreateFleetInput {
  /**
   * <p>The name of the compute fleet.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The initial number of machines allocated to the ﬂeet, which deﬁnes the number of builds that can run in parallel.</p>
   * @public
   */
  baseCapacity: number | undefined;

  /**
   * <p>The environment type of the compute fleet.</p>
   *          <ul>
   *             <li>
   *                <p>The environment type <code>ARM_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney),
   *                     EU (Frankfurt), and South America (São Paulo).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>ARM_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Medium fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     and EU (Frankfurt)</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Large fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2019_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     Asia Pacific (Tokyo), Asia Pacific (Mumbai) and
   *                     EU (Ireland).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2022_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt),
   *                     Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild
   *                 user guide</i>.</p>
   * @public
   */
  environmentType: EnvironmentType | undefined;

  /**
   * <p>Information about the compute resources the compute fleet uses. Available values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTRIBUTE_BASED_COMPUTE</code>: Specify the amount of vCPUs, memory, disk space, and the type of machine.</p>
   *                <note>
   *                   <p> If you use <code>ATTRIBUTE_BASED_COMPUTE</code>, you must define your attributes by using <code>computeConfiguration</code>. CodeBuild
   *                         will select the cheapest instance that satisfies your specified attributes. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types">Reserved capacity environment
   *                         types</a> in the <i>CodeBuild User Guide</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_INSTANCE_TYPE</code>: Specify the instance type for your compute fleet. For a list of supported instance types, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types">Supported instance families
   *                         </a> in the <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 4 GiB memory and 2 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 8 GiB memory and 4 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GiB memory and 8 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_XLARGE</code>: Use up to 72 GiB memory and 36 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 144 GiB memory, 72 vCPUs, and
   *                     824 GB of SSD storage for builds. This compute type supports Docker images up to
   *                     100 GB uncompressed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_1GB</code>: Use up to 1 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_2GB</code>: Use up to 2 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_4GB</code>: Use up to 4 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_8GB</code>: Use up to 8 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_10GB</code>: Use up to 10 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_SMALL</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 16
   *                     GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255
   *                     GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types">On-demand environment types</a>
   *                 in the <i>CodeBuild User Guide.</i>
   *          </p>
   * @public
   */
  computeType: ComputeType | undefined;

  /**
   * <p>The compute configuration of the compute fleet. This is only required if <code>computeType</code> is set to <code>ATTRIBUTE_BASED_COMPUTE</code> or <code>CUSTOM_INSTANCE_TYPE</code>.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * <p>The scaling configuration of the compute fleet.</p>
   * @public
   */
  scalingConfiguration?: ScalingConfigurationInput | undefined;

  /**
   * <p>The compute fleet overflow behavior.</p>
   *          <ul>
   *             <li>
   *                <p>For overflow behavior <code>QUEUE</code>, your overflow builds need to wait on
   *                     the existing fleet instance to become available.</p>
   *             </li>
   *             <li>
   *                <p>For overflow behavior <code>ON_DEMAND</code>, your overflow builds run on CodeBuild on-demand.</p>
   *                <note>
   *                   <p>If you choose to set your overflow behavior to on-demand while creating a VPC-connected
   *                     fleet, make sure that you add the required VPC permissions to your project service role. For more
   *                     information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface">Example
   *                     policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface</a>.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The proxy configuration of the compute fleet.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) of the compute fleet.</p>
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The service role associated with the compute fleet. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html">
   *             Allow a user to add a permission policy for a fleet service role</a> in the <i>CodeBuild User Guide</i>.</p>
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this compute fleet.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateFleetOutput {
  /**
   * <p>Information about the compute fleet</p>
   * @public
   */
  fleet?: Fleet | undefined;
}

/**
 * <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
 * @public
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * <p>The name of the build project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information about the build input source code for the build project.</p>
   * @public
   */
  source: ProjectSource | undefined;

  /**
   * <p>An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p>A version of the build input to be built for this project. If not specified, the latest
   *             version is used. If specified, it must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *           corresponds to the version of the source code you want to build. If a pull
   *           request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *           (for example <code>pr/25</code>). If a branch name is specified, the branch's
   *           HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *           used.</p>
   *             </li>
   *             <li>
   *                <p>For GitLab: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *           version of the source code you want to build. If a branch name is specified, the
   *           branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *           commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>sourceVersion</code> is specified at the build level, then that version takes
   *             precedence over this <code>sourceVersion</code> (at the project level). </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>CodeBuild User Guide</i>.
   *     </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       precedence over these <code>secondarySourceVersions</code> (at the project level).
   *     </p>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   * @public
   */
  artifacts: ProjectArtifacts | undefined;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *         time.</p>
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * <p>Information about the build environment for the build project.</p>
   * @public
   */
  environment: ProjectEnvironment | undefined;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services
   *       on behalf of the Amazon Web Services account.</p>
   * @public
   */
  serviceRole: string | undefined;

  /**
   * <p>How long, in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before it times out
   *       any build that has not been marked as completed. The default is 60 minutes.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *       artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<alias-name></code>).
   *     </p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>VpcConfig enables CodeBuild to access resources in an Amazon VPC.</p>
   *          <note>
   *             <p>If you're using compute fleets during project creation, do not provide vpcConfig.</p>
   *          </note>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *         badge.</p>
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * <p>Information about logs for the build project. These can be logs in CloudWatch Logs, logs
   *       uploaded to a specified S3 bucket, or both. </p>
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>A <a>ProjectBuildBatchConfig</a>
   *  object that defines the batch build options
   *             for the project.</p>
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * <p>The maximum number of additional automatic retries after a failed build. For example, if the
   *       auto-retry limit is set to 2, CodeBuild will call the <code>RetryBuild</code> API to automatically
   *       retry your build for up to 2 additional times.</p>
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * <p>Information about the build project that was created.</p>
   * @public
   */
  project?: Project | undefined;
}

/**
 * @public
 */
export interface CreateReportGroupInput {
  /**
   * <p>
   *       The name of the report group.
   *     </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>
   *       The type of report group.
   *     </p>
   * @public
   */
  type: ReportType | undefined;

  /**
   * <p>
   *       A <code>ReportExportConfig</code> object that contains information about where the report group test results are exported.
   *     </p>
   * @public
   */
  exportConfig: ReportExportConfig | undefined;

  /**
   * <p>
   *       A list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateReportGroupOutput {
  /**
   * <p>
   *       Information about the report group that was created.
   *     </p>
   * @public
   */
  reportGroup?: ReportGroup | undefined;
}

/**
 * @public
 * @enum
 */
export const PullRequestBuildApproverRole = {
  BITBUCKET_ADMIN: "BITBUCKET_ADMIN",
  BITBUCKET_READ: "BITBUCKET_READ",
  BITBUCKET_WRITE: "BITBUCKET_WRITE",
  GITHUB_ADMIN: "GITHUB_ADMIN",
  GITHUB_MAINTAIN: "GITHUB_MAINTAIN",
  GITHUB_READ: "GITHUB_READ",
  GITHUB_TRIAGE: "GITHUB_TRIAGE",
  GITHUB_WRITE: "GITHUB_WRITE",
  GITLAB_DEVELOPER: "GITLAB_DEVELOPER",
  GITLAB_GUEST: "GITLAB_GUEST",
  GITLAB_MAINTAINER: "GITLAB_MAINTAINER",
  GITLAB_OWNER: "GITLAB_OWNER",
  GITLAB_PLANNER: "GITLAB_PLANNER",
  GITLAB_REPORTER: "GITLAB_REPORTER",
} as const;

/**
 * @public
 */
export type PullRequestBuildApproverRole =
  (typeof PullRequestBuildApproverRole)[keyof typeof PullRequestBuildApproverRole];

/**
 * @public
 * @enum
 */
export const PullRequestBuildCommentApproval = {
  ALL_PULL_REQUESTS: "ALL_PULL_REQUESTS",
  DISABLED: "DISABLED",
  FORK_PULL_REQUESTS: "FORK_PULL_REQUESTS",
} as const;

/**
 * @public
 */
export type PullRequestBuildCommentApproval =
  (typeof PullRequestBuildCommentApproval)[keyof typeof PullRequestBuildCommentApproval];

/**
 * <p>Configuration policy that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.</p>
 * @public
 */
export interface PullRequestBuildPolicy {
  /**
   * <p>Specifies when comment-based approval is required before triggering a build on pull requests. This setting determines whether builds run automatically or require explicit approval through comments.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>DISABLED</i>: Builds trigger automatically without requiring comment approval</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>ALL_PULL_REQUESTS</i>: All pull requests require comment approval before builds execute (unless contributor is one of the approver roles)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORK_PULL_REQUESTS</i>: Only pull requests from forked repositories require comment approval (unless contributor is one of the approver roles)</p>
   *             </li>
   *          </ul>
   * @public
   */
  requiresCommentApproval: PullRequestBuildCommentApproval | undefined;

  /**
   * <p>List of repository roles that have approval privileges for pull request builds when comment approval is required. Only users with these roles can provide valid comment approvals. If a pull request contributor is one of these roles, their pull request builds will trigger automatically. This field is only applicable when <code>requiresCommentApproval</code> is not <i>DISABLED</i>.</p>
   * @public
   */
  approverRoles?: PullRequestBuildApproverRole[] | undefined;
}

/**
 * @public
 */
export interface CreateWebhookInput {
  /**
   * <p>The name of the CodeBuild project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p>It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * <p>Specifies the type of build this webhook will trigger.</p>
   *          <note>
   *             <p>
   *                <code>RUNNER_BUILDKITE_BUILD</code> is only available for <code>NO_SOURCE</code> source type projects
   *         configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html">Tutorial: Configure a CodeBuild-hosted Buildkite runner</a> in the <i>CodeBuild
   *         user guide</i>.</p>
   *          </note>
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * <p>If manualCreation is true, CodeBuild doesn't create a webhook in GitHub and instead returns <code>payloadUrl</code> and
   *       <code>secret</code> values for the webhook. The <code>payloadUrl</code> and <code>secret</code> values in the output can be
   *       used to manually create a webhook within GitHub.</p>
   *          <note>
   *             <p>
   *                <code>manualCreation</code> is only available for GitHub webhooks.</p>
   *          </note>
   * @public
   */
  manualCreation?: boolean | undefined;

  /**
   * <p>The scope configuration for global or organization webhooks.</p>
   *          <note>
   *             <p>Global or organization webhooks are only available for GitHub and Github Enterprise webhooks.</p>
   *          </note>
   * @public
   */
  scopeConfiguration?: ScopeConfiguration | undefined;

  /**
   * <p>A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.</p>
   * @public
   */
  pullRequestBuildPolicy?: PullRequestBuildPolicy | undefined;
}

/**
 * @public
 */
export interface CreateWebhookOutput {
  /**
   * <p>Information about a webhook that connects repository events to a build project in
   *       CodeBuild.</p>
   * @public
   */
  webhook?: Webhook | undefined;
}

/**
 * <p>There was a problem with the underlying OAuth provider.</p>
 * @public
 */
export class OAuthProviderException extends __BaseException {
  readonly name: "OAuthProviderException" = "OAuthProviderException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OAuthProviderException, __BaseException>) {
    super({
      name: "OAuthProviderException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OAuthProviderException.prototype);
  }
}

/**
 * <p>The specified Amazon Web Services resource cannot be found.</p>
 * @public
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

/**
 * @public
 */
export interface DeleteBuildBatchInput {
  /**
   * <p>The identifier of the batch build to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildBatchOutput {
  /**
   * <p>The status code.</p>
   * @public
   */
  statusCode?: string | undefined;

  /**
   * <p>An array of strings that contain the identifiers of the builds that were deleted.</p>
   * @public
   */
  buildsDeleted?: string[] | undefined;

  /**
   * <p>An array of <code>BuildNotDeleted</code> objects that specify the builds that could not be
   *             deleted.</p>
   * @public
   */
  buildsNotDeleted?: BuildNotDeleted[] | undefined;
}

/**
 * @public
 */
export interface DeleteFleetInput {
  /**
   * <p>The ARN of the compute fleet.</p>
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
   * <p>The name of the build project.</p>
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
   * <p>
   *       The ARN of the report to delete.
   *     </p>
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
   * <p>The ARN of the report group to delete. </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>If <code>true</code>, deletes any reports that belong to a report group before deleting
   *             the report group. </p>
   *          <p>If <code>false</code>, you must delete any reports in the report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call
   *       <code>DeleteReportGroup</code> for a report group that contains one or more reports,
   *             an exception is thrown. </p>
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
   * <p> The ARN of the resource that is associated with the resource policy. </p>
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
   * <p> The Amazon Resource Name (ARN) of the token.</p>
   * @public
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceCredentialsOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * <p>The name of the CodeBuild project.</p>
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
 * @enum
 */
export const ReportCodeCoverageSortByType = {
  FILE_PATH: "FILE_PATH",
  LINE_COVERAGE_PERCENTAGE: "LINE_COVERAGE_PERCENTAGE",
} as const;

/**
 * @public
 */
export type ReportCodeCoverageSortByType =
  (typeof ReportCodeCoverageSortByType)[keyof typeof ReportCodeCoverageSortByType];

/**
 * @public
 * @enum
 */
export const SortOrderType = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrderType = (typeof SortOrderType)[keyof typeof SortOrderType];

/**
 * @public
 */
export interface DescribeCodeCoveragesInput {
  /**
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
   * @public
   */
  reportArn: string | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>DescribeCodeCoverages</code>. This specifies the next item to return. To
   *             return the beginning of the list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies if the results are sorted in ascending or descending order.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>Specifies how the results are sorted. Possible values are:</p>
   *          <dl>
   *             <dt>FILE_PATH</dt>
   *             <dd>
   *                <p>The results are sorted by file path.</p>
   *             </dd>
   *             <dt>LINE_COVERAGE_PERCENTAGE</dt>
   *             <dd>
   *                <p>The results are sorted by the percentage of lines that are covered.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  sortBy?: ReportCodeCoverageSortByType | undefined;

  /**
   * <p>The minimum line coverage percentage to report.</p>
   * @public
   */
  minLineCoveragePercentage?: number | undefined;

  /**
   * <p>The maximum line coverage percentage to report.</p>
   * @public
   */
  maxLineCoveragePercentage?: number | undefined;
}

/**
 * <p>Contains code coverage report information.</p>
 *          <p>Line coverage measures how many statements your tests cover. A statement is a single
 *       instruction, not including comments, conditionals, etc.</p>
 *          <p>Branch coverage determines if your tests cover every possible branch of a control
 *     structure, such as an <code>if</code> or <code>case</code> statement.</p>
 * @public
 */
export interface CodeCoverage {
  /**
   * <p>The identifier of the code coverage report.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The ARN of the report.</p>
   * @public
   */
  reportARN?: string | undefined;

  /**
   * <p>The path of the test report file.</p>
   * @public
   */
  filePath?: string | undefined;

  /**
   * <p>The percentage of lines that are covered by your tests.</p>
   * @public
   */
  lineCoveragePercentage?: number | undefined;

  /**
   * <p>The number of lines that are covered by your tests.</p>
   * @public
   */
  linesCovered?: number | undefined;

  /**
   * <p>The number of lines that are not covered by your tests.</p>
   * @public
   */
  linesMissed?: number | undefined;

  /**
   * <p>The percentage of branches that are covered by your tests.</p>
   * @public
   */
  branchCoveragePercentage?: number | undefined;

  /**
   * <p>The number of conditional branches that are covered by your tests.</p>
   * @public
   */
  branchesCovered?: number | undefined;

  /**
   * <p>The number of conditional branches that are not covered by your tests.</p>
   * @public
   */
  branchesMissed?: number | undefined;

  /**
   * <p>The date and time that the tests were run.</p>
   * @public
   */
  expired?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeCodeCoveragesOutput {
  /**
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>DescribeCodeCoverages</code> to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of <code>CodeCoverage</code> objects that contain the results.</p>
   * @public
   */
  codeCoverages?: CodeCoverage[] | undefined;
}

/**
 * <p>A filter used to return specific types of test cases. In order to pass the filter, the
 *             report must meet all of the filter properties.</p>
 * @public
 */
export interface TestCaseFilter {
  /**
   * <p>The status used to filter test cases. A <code>TestCaseFilter</code> can have one
   *             status. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SUCCEEDED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ERROR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UNKNOWN</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: string | undefined;

  /**
   * <p>A keyword that is used to filter on the <code>name</code> or the <code>prefix</code>
   *             of the test cases. Only test cases where the keyword is a substring of the
   *                 <code>name</code> or the <code>prefix</code> will be returned.</p>
   * @public
   */
  keyword?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestCasesInput {
  /**
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
   * @public
   */
  reportArn: string | undefined;

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The maximum number of paginated test cases returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>TestCase</code> objects. The default value is 100.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       A <code>TestCaseFilter</code> object used to filter the returned reports.
   *     </p>
   * @public
   */
  filter?: TestCaseFilter | undefined;
}

/**
 * <p> Information about a test case created using a framework such as NUnit or Cucumber. A
 *             test case might be a unit test or a configuration test. </p>
 * @public
 */
export interface TestCase {
  /**
   * <p> The ARN of the report to which the test case belongs. </p>
   * @public
   */
  reportArn?: string | undefined;

  /**
   * <p> The path to the raw data file that contains the test result. </p>
   * @public
   */
  testRawDataPath?: string | undefined;

  /**
   * <p> A string that is applied to a series of related test cases. CodeBuild generates the
   *             prefix. The prefix depends on the framework used to generate the tests. </p>
   * @public
   */
  prefix?: string | undefined;

  /**
   * <p> The name of the test case. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p> The status returned by the test case after it was run. Valid statuses are
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>ERROR</code>,
   *                 <code>SKIPPED</code>, and <code>UNKNOWN</code>. </p>
   * @public
   */
  status?: string | undefined;

  /**
   * <p> The number of nanoseconds it took to run this test case. </p>
   * @public
   */
  durationInNanoSeconds?: number | undefined;

  /**
   * <p> A message associated with a test case. For example, an error message or stack trace.
   *         </p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p> The date and time a test case expires. A test case expires 30 days after it is
   *             created. An expired test case is not available to view in CodeBuild. </p>
   * @public
   */
  expired?: Date | undefined;

  /**
   * <p>The name of the test suite that the test case is a part of.</p>
   * @public
   */
  testSuiteName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTestCasesOutput {
  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The returned list of test cases.
   *     </p>
   * @public
   */
  testCases?: TestCase[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportGroupTrendFieldType = {
  BRANCHES_COVERED: "BRANCHES_COVERED",
  BRANCHES_MISSED: "BRANCHES_MISSED",
  BRANCH_COVERAGE: "BRANCH_COVERAGE",
  DURATION: "DURATION",
  LINES_COVERED: "LINES_COVERED",
  LINES_MISSED: "LINES_MISSED",
  LINE_COVERAGE: "LINE_COVERAGE",
  PASS_RATE: "PASS_RATE",
  TOTAL: "TOTAL",
} as const;

/**
 * @public
 */
export type ReportGroupTrendFieldType = (typeof ReportGroupTrendFieldType)[keyof typeof ReportGroupTrendFieldType];

/**
 * @public
 */
export interface GetReportGroupTrendInput {
  /**
   * <p>The ARN of the report group that contains the reports to analyze.</p>
   * @public
   */
  reportGroupArn: string | undefined;

  /**
   * <p>The number of reports to analyze. This operation always retrieves the most recent
   *             reports.</p>
   *          <p>If this parameter is omitted, the most recent 100 reports are analyzed.</p>
   * @public
   */
  numOfReports?: number | undefined;

  /**
   * <p>The test report value to accumulate. This must be one of the following values:</p>
   *          <dl>
   *             <dt>Test reports:</dt>
   *             <dd>
   *                <dl>
   *                   <dt>DURATION</dt>
   *                   <dd>
   *                      <p>Accumulate the test run times for the specified
   *                                     reports.</p>
   *                   </dd>
   *                   <dt>PASS_RATE</dt>
   *                   <dd>
   *                      <p>Accumulate the percentage of tests that passed for the
   *                                     specified test reports.</p>
   *                   </dd>
   *                   <dt>TOTAL</dt>
   *                   <dd>
   *                      <p>Accumulate the total number of tests for the specified test
   *                                     reports.</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   *          <dl>
   *             <dt>Code coverage reports:</dt>
   *             <dd>
   *                <dl>
   *                   <dt>BRANCH_COVERAGE</dt>
   *                   <dd>
   *                      <p>Accumulate the branch coverage percentages for the specified
   *                                     test reports.</p>
   *                   </dd>
   *                   <dt>BRANCHES_COVERED</dt>
   *                   <dd>
   *                      <p>Accumulate the branches covered values for the specified test
   *                                     reports.</p>
   *                   </dd>
   *                   <dt>BRANCHES_MISSED</dt>
   *                   <dd>
   *                      <p>Accumulate the branches missed values for the specified test
   *                                     reports.</p>
   *                   </dd>
   *                   <dt>LINE_COVERAGE</dt>
   *                   <dd>
   *                      <p>Accumulate the line coverage percentages for the specified
   *                                     test reports.</p>
   *                   </dd>
   *                   <dt>LINES_COVERED</dt>
   *                   <dd>
   *                      <p>Accumulate the lines covered values for the specified test
   *                                     reports.</p>
   *                   </dd>
   *                   <dt>LINES_MISSED</dt>
   *                   <dd>
   *                      <p>Accumulate the lines not covered values for the specified test
   *                                     reports.</p>
   *                   </dd>
   *                </dl>
   *             </dd>
   *          </dl>
   * @public
   */
  trendField: ReportGroupTrendFieldType | undefined;
}

/**
 * <p>Contains the unmodified data for the report. For more information, see .</p>
 * @public
 */
export interface ReportWithRawData {
  /**
   * <p>The ARN of the report.</p>
   * @public
   */
  reportArn?: string | undefined;

  /**
   * <p>The value of the requested data field from the report.</p>
   * @public
   */
  data?: string | undefined;
}

/**
 * <p>Contains trend statistics for a set of reports. The actual values depend on the type of
 *             trend being collected. For more information, see .</p>
 * @public
 */
export interface ReportGroupTrendStats {
  /**
   * <p>Contains the average of all values analyzed.</p>
   * @public
   */
  average?: string | undefined;

  /**
   * <p>Contains the maximum value analyzed.</p>
   * @public
   */
  max?: string | undefined;

  /**
   * <p>Contains the minimum value analyzed.</p>
   * @public
   */
  min?: string | undefined;
}

/**
 * @public
 */
export interface GetReportGroupTrendOutput {
  /**
   * <p>Contains the accumulated trend data.</p>
   * @public
   */
  stats?: ReportGroupTrendStats | undefined;

  /**
   * <p>An array that contains the raw data for each report.</p>
   * @public
   */
  rawData?: ReportWithRawData[] | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * <p> The ARN of the resource that is associated with the resource policy. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * <p> The resource policy for the resource identified by the input ARN parameter. </p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ServerType = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
  GITLAB: "GITLAB",
  GITLAB_SELF_MANAGED: "GITLAB_SELF_MANAGED",
} as const;

/**
 * @public
 */
export type ServerType = (typeof ServerType)[keyof typeof ServerType];

/**
 * @public
 */
export interface ImportSourceCredentialsInput {
  /**
   * <p> The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter
   *             is not valid for other types of source providers or connections. </p>
   * @public
   */
  username?: string | undefined;

  /**
   * <p> For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket,
   *             this is either the access token or the app password. For the <code>authType</code> CODECONNECTIONS,
   *             this is the <code>connectionArn</code>. For the <code>authType</code> SECRETS_MANAGER, this is the <code>secretArn</code>.</p>
   * @public
   */
  token: string | undefined;

  /**
   * <p> The source provider used for this project. </p>
   * @public
   */
  serverType: ServerType | undefined;

  /**
   * <p> The type of authentication used to connect to a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or
   *             Bitbucket repository. An OAUTH connection is not supported by the API and must be
   *             created using the CodeBuild console.</p>
   * @public
   */
  authType: AuthType | undefined;

  /**
   * <p> Set to <code>false</code> to prevent overwriting the repository source credentials.
   *             Set to <code>true</code> to overwrite the repository source credentials. The default
   *             value is <code>true</code>. </p>
   * @public
   */
  shouldOverwrite?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportSourceCredentialsOutput {
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface InvalidateProjectCacheInput {
  /**
   * <p>The name of the CodeBuild build project that the cache is reset for.</p>
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
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   * @public
   */
  filter?: BuildBatchFilter | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies the sort order of the returned items. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List the batch build identifiers in ascending order by identifier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List the batch build identifiers in descending order by identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatches</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesOutput {
  /**
   * <p>An array of strings that contains the batch build identifiers.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>ListBuildBatches</code> to retrieve the next set of items.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectInput {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   * @public
   */
  filter?: BuildBatchFilter | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Specifies the sort order of the returned items. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List the batch build identifiers in ascending order by
   *                     identifier.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List the batch build identifiers in descending order
   *                     by identifier.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatchesForProject</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectOutput {
  /**
   * <p>An array of strings that contains the batch build identifiers.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>If there are more items to return, this contains a token that is passed to a
   *             subsequent call to <code>ListBuildBatchesForProject</code> to retrieve the next set of
   *             items.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * <p>The order to list build IDs. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List the build IDs in ascending order by build
   *                     ID.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List the build IDs in descending order by build
   *                     ID.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * <p>A list of build IDs, with each build ID representing a single build.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsForProjectInput {
  /**
   * <p>The name of the CodeBuild project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The order to sort the results in. The results are sorted by build number, not the build
   *             identifier. If this is not specified, the results are sorted in descending order.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List the build identifiers in ascending order, by build number.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List the build identifiers in descending order, by build number.</p>
   *             </li>
   *          </ul>
   *          <p>If the project has more than 100 builds, setting the sort order will result in an
   *             error. </p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListBuildsForProjectOutput {
  /**
   * <p>A list of build identifiers for the specified build project, with each build ID representing a
   *             single build.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsForSandboxInput {
  /**
   * <p>A <code>sandboxId</code> or <code>sandboxArn</code>.</p>
   * @public
   */
  sandboxId: string | undefined;

  /**
   * <p>The maximum number of sandbox records to be retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The order in which sandbox records should be retrieved.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCommandExecutionsForSandboxOutput {
  /**
   * <p>Information about the requested command executions.</p>
   * @public
   */
  commandExecutions?: CommandExecution[] | undefined;

  /**
   * <p>Information about the next token to get paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesInput {}

/**
 * <p>Information about a Docker image that is managed by CodeBuild.</p>
 * @public
 */
export interface EnvironmentImage {
  /**
   * <p>The name of the Docker image.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The description of the Docker image.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of environment image versions.</p>
   * @public
   */
  versions?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const LanguageType = {
  ANDROID: "ANDROID",
  BASE: "BASE",
  DOCKER: "DOCKER",
  DOTNET: "DOTNET",
  GOLANG: "GOLANG",
  JAVA: "JAVA",
  NODE_JS: "NODE_JS",
  PHP: "PHP",
  PYTHON: "PYTHON",
  RUBY: "RUBY",
} as const;

/**
 * @public
 */
export type LanguageType = (typeof LanguageType)[keyof typeof LanguageType];

/**
 * <p>A set of Docker images that are related by programming language and are managed by
 *             CodeBuild.</p>
 * @public
 */
export interface EnvironmentLanguage {
  /**
   * <p>The programming language for the Docker images.</p>
   * @public
   */
  language?: LanguageType | undefined;

  /**
   * <p>The list of Docker images that are related by the specified programming
   *             language.</p>
   * @public
   */
  images?: EnvironmentImage[] | undefined;
}

/**
 * @public
 * @enum
 */
export const PlatformType = {
  AMAZON_LINUX: "AMAZON_LINUX",
  DEBIAN: "DEBIAN",
  UBUNTU: "UBUNTU",
  WINDOWS_SERVER: "WINDOWS_SERVER",
} as const;

/**
 * @public
 */
export type PlatformType = (typeof PlatformType)[keyof typeof PlatformType];

/**
 * <p>A set of Docker images that are related by platform and are managed by CodeBuild.</p>
 * @public
 */
export interface EnvironmentPlatform {
  /**
   * <p>The platform's name.</p>
   * @public
   */
  platform?: PlatformType | undefined;

  /**
   * <p>The list of programming languages that are available for the specified
   *             platform.</p>
   * @public
   */
  languages?: EnvironmentLanguage[] | undefined;
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesOutput {
  /**
   * <p>Information about supported platforms for Docker images that are managed by
   *             CodeBuild.</p>
   * @public
   */
  platforms?: EnvironmentPlatform[] | undefined;
}

/**
 * @public
 * @enum
 */
export const FleetSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type FleetSortByType = (typeof FleetSortByType)[keyof typeof FleetSortByType];

/**
 * @public
 */
export interface ListFleetsInput {
  /**
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *             <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of paginated compute fleets returned per response. Use
   *             <code>nextToken</code> to iterate pages in the list of returned compute fleets.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The order in which to list compute fleets. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   *          <p>Use <code>sortBy</code> to specify the criterion to be used to list compute fleet
   *             names.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The criterion to be used to list compute fleet names. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED_TIME</code>: List based on when each compute fleet was
   *                         created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST_MODIFIED_TIME</code>: List based on when information about each
   *                         compute fleet was last changed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>: List based on each compute fleet's name.</p>
   *             </li>
   *          </ul>
   *          <p>Use <code>sortOrder</code> to specify in what order to list the compute fleet names
   *                 based on the preceding criteria.</p>
   * @public
   */
  sortBy?: FleetSortByType | undefined;
}

/**
 * @public
 */
export interface ListFleetsOutput {
  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of compute fleet names.</p>
   * @public
   */
  fleets?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProjectSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type ProjectSortByType = (typeof ProjectSortByType)[keyof typeof ProjectSortByType];

/**
 * @public
 */
export interface ListProjectsInput {
  /**
   * <p>The criterion to be used to list build project names. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED_TIME</code>: List based on when each build project was
   *                     created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST_MODIFIED_TIME</code>: List based on when information about each
   *                     build project was last changed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>: List based on each build project's name.</p>
   *             </li>
   *          </ul>
   *          <p>Use <code>sortOrder</code> to specify in what order to list the build project names
   *             based on the preceding criteria.</p>
   * @public
   */
  sortBy?: ProjectSortByType | undefined;

  /**
   * <p>The order in which to list build projects. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   *          <p>Use <code>sortBy</code> to specify the criterion to be used to list build project
   *             names.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The list of build project names, with each build project name representing a single
   *             build project.</p>
   * @public
   */
  projects?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ReportGroupSortByType = {
  CREATED_TIME: "CREATED_TIME",
  LAST_MODIFIED_TIME: "LAST_MODIFIED_TIME",
  NAME: "NAME",
} as const;

/**
 * @public
 */
export type ReportGroupSortByType = (typeof ReportGroupSortByType)[keyof typeof ReportGroupSortByType];

/**
 * @public
 */
export interface ListReportGroupsInput {
  /**
   * <p>
   *       Used to specify the order to sort the list of returned report groups. Valid values are
   *       <code>ASCENDING</code> and <code>DESCENDING</code>.
   *     </p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>
   *       The criterion to be used to list build report groups. Valid values include:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED_TIME</code>: List based on when each report group was
   *           created.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LAST_MODIFIED_TIME</code>: List based on when each report group  was last changed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>: List based on each report group's name.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortBy?: ReportGroupSortByType | undefined;

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The maximum number of paginated report groups returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>ReportGroup</code> objects. The default value is 100.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReportGroupsOutput {
  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The list of ARNs for the report groups in the current Amazon Web Services account.
   *     </p>
   * @public
   */
  reportGroups?: string[] | undefined;
}

/**
 * <p> A filter used to return reports with the status specified by the input
 *                 <code>status</code> parameter. </p>
 * @public
 */
export interface ReportFilter {
  /**
   * <p> The status used to filter reports. You can filter using one status only. </p>
   * @public
   */
  status?: ReportStatusType | undefined;
}

/**
 * @public
 */
export interface ListReportsInput {
  /**
   * <p>
   *       Specifies the sort order for the list of returned reports. Valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: return reports in chronological order based on their creation date.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: return reports in the reverse chronological order based on their creation date.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The maximum number of paginated reports returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   * @public
   */
  filter?: ReportFilter | undefined;
}

/**
 * @public
 */
export interface ListReportsOutput {
  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The list of returned ARNs for the reports in the current Amazon Web Services account.
   *     </p>
   * @public
   */
  reports?: string[] | undefined;
}

/**
 * @public
 */
export interface ListReportsForReportGroupInput {
  /**
   * <p>
   *       The ARN of the report group for which you want to return report ARNs.
   *     </p>
   * @public
   */
  reportGroupArn: string | undefined;

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       Use to specify whether the results are returned in ascending or descending order.
   *     </p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>
   *       The maximum number of paginated reports in this report group returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   * @public
   */
  filter?: ReportFilter | undefined;
}

/**
 * @public
 */
export interface ListReportsForReportGroupOutput {
  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>
   *       The list of report ARNs.
   *     </p>
   * @public
   */
  reports?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSandboxesInput {
  /**
   * <p>The maximum number of sandbox records to be retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The order in which sandbox records should be retrieved.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesOutput {
  /**
   * <p>Information about the requested sandbox IDs.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>Information about the next token to get paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesForProjectInput {
  /**
   * <p>The CodeBuild project name.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The maximum number of sandbox records to be retrieved.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The order in which sandbox records should be retrieved.</p>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p>The next token, if any, to get paginated results. You will get this value from previous execution of list sandboxes.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSandboxesForProjectOutput {
  /**
   * <p>Information about the requested sandbox IDs.</p>
   * @public
   */
  ids?: string[] | undefined;

  /**
   * <p>Information about the next token to get paginated results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SharedResourceSortByType = {
  ARN: "ARN",
  MODIFIED_TIME: "MODIFIED_TIME",
} as const;

/**
 * @public
 */
export type SharedResourceSortByType = (typeof SharedResourceSortByType)[keyof typeof SharedResourceSortByType];

/**
 * @public
 */
export interface ListSharedProjectsInput {
  /**
   * <p> The criterion to be used to list build projects shared with the current Amazon Web Services account
   *             or user. Valid values include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ARN</code>: List based on the ARN. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED_TIME</code>: List based on when information about the shared
   *                     project was last changed. </p>
   *             </li>
   *          </ul>
   * @public
   */
  sortBy?: SharedResourceSortByType | undefined;

  /**
   * <p>The order in which to list shared build projects. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p> The maximum number of paginated shared build projects returned per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned <code>Project</code>
   *             objects. The default value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSharedProjectsOutput {
  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The list of ARNs for the build projects shared with the current Amazon Web Services account or user.
   *         </p>
   * @public
   */
  projects?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSharedReportGroupsInput {
  /**
   * <p>The order in which to list shared report groups. Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   * @public
   */
  sortOrder?: SortOrderType | undefined;

  /**
   * <p> The criterion to be used to list report groups shared with the current Amazon Web Services account or
   *             user. Valid values include: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ARN</code>: List based on the ARN. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MODIFIED_TIME</code>: List based on when information about the shared
   *                     report group was last changed. </p>
   *             </li>
   *          </ul>
   * @public
   */
  sortBy?: SharedResourceSortByType | undefined;

  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The maximum number of paginated shared report groups per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned
   *                 <code>ReportGroup</code> objects. The default value is 100. </p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSharedReportGroupsOutput {
  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p> The list of ARNs for the report groups shared with the current Amazon Web Services account or user.
   *         </p>
   * @public
   */
  reportGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ListSourceCredentialsInput {}

/**
 * <p> Information about the credentials for a GitHub, GitHub Enterprise, GitLab, GitLab Self Managed, or Bitbucket
 *             repository. </p>
 * @public
 */
export interface SourceCredentialsInfo {
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p> The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, GITLAB, GITLAB_SELF_MANAGED, or
   *             BITBUCKET. </p>
   * @public
   */
  serverType?: ServerType | undefined;

  /**
   * <p> The type of authentication used by the credentials. Valid options are OAUTH,
   *             BASIC_AUTH, PERSONAL_ACCESS_TOKEN, CODECONNECTIONS, or SECRETS_MANAGER. </p>
   * @public
   */
  authType?: AuthType | undefined;

  /**
   * <p>The connection ARN if your authType is CODECONNECTIONS or SECRETS_MANAGER.</p>
   * @public
   */
  resource?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceCredentialsOutput {
  /**
   * <p> A list of <code>SourceCredentialsInfo</code> objects. Each
   *                 <code>SourceCredentialsInfo</code> object includes the authentication type, token
   *             ARN, and type of source provider for one set of credentials. </p>
   * @public
   */
  sourceCredentialsInfos?: SourceCredentialsInfo[] | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * <p> A JSON-formatted resource policy. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share">Sharing
   *                 a Project</a> and <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share">Sharing a Report Group</a> in the <i>CodeBuild User Guide</i>.
   *         </p>
   * @public
   */
  policy: string | undefined;

  /**
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource you want to
   *             associate with a resource policy. </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource that is
   *             associated with a resource policy. </p>
   * @public
   */
  resourceArn?: string | undefined;
}

/**
 * @public
 */
export interface RetryBuildInput {
  /**
   * <p>Specifies the identifier of the build to restart.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *       <code>RetryBuild</code> request. The token is included in the
   *       <code>RetryBuild</code> request and is valid for five minutes. If you repeat
   *       the <code>RetryBuild</code> request with the same token, but change a parameter,
   *       CodeBuild returns a parameter mismatch error.</p>
   * @public
   */
  idempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface RetryBuildOutput {
  /**
   * <p>Information about a build.</p>
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 * @enum
 */
export const RetryBuildBatchType = {
  RETRY_ALL_BUILDS: "RETRY_ALL_BUILDS",
  RETRY_FAILED_BUILDS: "RETRY_FAILED_BUILDS",
} as const;

/**
 * @public
 */
export type RetryBuildBatchType = (typeof RetryBuildBatchType)[keyof typeof RetryBuildBatchType];

/**
 * @public
 */
export interface RetryBuildBatchInput {
  /**
   * <p>Specifies the identifier of the batch build to restart.</p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>RetryBuildBatch</code> request. The token is included in the
   *                 <code>RetryBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>RetryBuildBatch</code> request with the same token, but change a parameter,
   *             CodeBuild returns a parameter mismatch error.</p>
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * <p>Specifies the type of retry to perform.</p>
   * @public
   */
  retryType?: RetryBuildBatchType | undefined;
}

/**
 * @public
 */
export interface RetryBuildBatchOutput {
  /**
   * <p>Contains information about a batch build.</p>
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StartBuildInput {
  /**
   * <p>The name of the CodeBuild build project to start running a build.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySourcesOverride?: ProjectSource[] | undefined;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects that specify one or more
   *             versions of the project's secondary sources to be used for this build only. </p>
   * @public
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[] | undefined;

  /**
   * <p>The version of the build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *          <dl>
   *             <dt>CodeCommit</dt>
   *             <dd>
   *                <p>The commit ID, branch, or Git tag to use.</p>
   *             </dd>
   *             <dt>GitHub</dt>
   *             <dd>
   *                <p>The commit ID, pull request ID, branch name, or tag name that corresponds
   *                         to the version of the source code you want to build. If a pull request ID is
   *                         specified, it must use the format <code>pr/pull-request-ID</code> (for
   *                         example <code>pr/25</code>). If a branch name is specified, the branch's
   *                         HEAD commit ID is used. If not specified, the default branch's HEAD commit
   *                         ID is used.</p>
   *             </dd>
   *             <dt>GitLab</dt>
   *             <dd>
   *                <p>The commit ID, branch, or Git tag to use.</p>
   *             </dd>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                <p>The commit ID, branch name, or tag name that corresponds to the version of
   *                         the source code you want to build. If a branch name is specified, the
   *                         branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                         commit ID is used.</p>
   *             </dd>
   *             <dt>Amazon S3</dt>
   *             <dd>
   *                <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *             </dd>
   *          </dl>
   *          <p>If <code>sourceVersion</code> is specified at the project level, then this
   *             <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *             with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>Build output artifact settings that override, for this build only, the latest ones
   *             already defined in the build project.</p>
   * @public
   */
  artifactsOverride?: ProjectArtifacts | undefined;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   * @public
   */
  secondaryArtifactsOverride?: ProjectArtifacts[] | undefined;

  /**
   * <p>A set of environment variables that overrides, for this build only, the latest ones
   *             already defined in the build project.</p>
   * @public
   */
  environmentVariablesOverride?: EnvironmentVariable[] | undefined;

  /**
   * <p>A source input type, for this build, that overrides the source input defined in the
   *             build project.</p>
   * @public
   */
  sourceTypeOverride?: SourceType | undefined;

  /**
   * <p>A location that overrides, for this build, the source location for the one defined in
   *             the build project.</p>
   * @public
   */
  sourceLocationOverride?: string | undefined;

  /**
   * <p>An authorization type for this build that overrides the one defined in the build
   *             project. This override applies only if the build project's source is BitBucket, GitHub,
   *             GitLab, or GitLab Self Managed.</p>
   * @public
   */
  sourceAuthOverride?: SourceAuth | undefined;

  /**
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *             build only, any previous depth of history defined in the build project.</p>
   * @public
   */
  gitCloneDepthOverride?: number | undefined;

  /**
   * <p> Information about the Git submodules configuration for this build of an CodeBuild build
   *             project. </p>
   * @public
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig | undefined;

  /**
   * <p>A buildspec file declaration that overrides the latest one defined
   *             in the build project, for this build only. The buildspec defined on the project is not changed.</p>
   *          <p>If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>.</p>
   *          <note>
   *             <p>Since this property allows you to change the build commands that will run in the container,
   *             you should note that an IAM principal with the ability to call this API and set this parameter
   *             can override the default settings. Moreover, we encourage that you use a trustworthy buildspec location
   *             like a file in your source repository or a Amazon S3 bucket. Alternatively, you can restrict overrides
   *             to the buildspec by using a condition key: <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/action-context-keys.html#action-context-keys-example-overridebuildspec.html">Prevent unauthorized modifications to project buildspec</a>.</p>
   *          </note>
   * @public
   */
  buildspecOverride?: string | undefined;

  /**
   * <p>Enable this flag to override the insecure SSL setting that is specified in the build
   *             project. The insecure SSL setting determines whether to ignore SSL warnings while
   *             connecting to the project source code. This override applies only if the build's source
   *             is GitHub Enterprise.</p>
   * @public
   */
  insecureSslOverride?: boolean | undefined;

  /**
   * <p> Set to true to report to your source provider the status of a build's start and
   *             completion. If you use this option with a source provider other than GitHub, GitHub
   *             Enterprise, GitLab, GitLab Self Managed, or Bitbucket, an <code>invalidInputException</code> is thrown. </p>
   *          <p>To be able to report the build status to the source provider, the user associated with the source provider must
   * have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p>
   *          <note>
   *             <p> The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *          </note>
   * @public
   */
  reportBuildStatusOverride?: boolean | undefined;

  /**
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   * @public
   */
  buildStatusConfigOverride?: BuildStatusConfig | undefined;

  /**
   * <p>A container type for this build that overrides the one specified in the build
   *             project.</p>
   * @public
   */
  environmentTypeOverride?: EnvironmentType | undefined;

  /**
   * <p>The name of an image for this build that overrides the one specified in the build
   *             project.</p>
   * @public
   */
  imageOverride?: string | undefined;

  /**
   * <p>The name of a compute type for this build that overrides the one specified in the
   *             build project.</p>
   * @public
   */
  computeTypeOverride?: ComputeType | undefined;

  /**
   * <p>The name of a certificate for this build that overrides the one specified in the build
   *             project.</p>
   * @public
   */
  certificateOverride?: string | undefined;

  /**
   * <p>A ProjectCache object specified for this build that overrides the one defined in the
   *             build project.</p>
   * @public
   */
  cacheOverride?: ProjectCache | undefined;

  /**
   * <p>The name of a service role for this build that overrides the one specified in the
   *             build project.</p>
   * @public
   */
  serviceRoleOverride?: string | undefined;

  /**
   * <p>Enable this flag to override privileged mode in the build project.</p>
   * @public
   */
  privilegedModeOverride?: boolean | undefined;

  /**
   * <p>The number of build timeout minutes, from 5 to 2160 (36 hours), that overrides, for this
   *             build only, the latest setting already defined in the build project.</p>
   * @public
   */
  timeoutInMinutesOverride?: number | undefined;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutesOverride?: number | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) that overrides the one specified in the build
   *             project. The CMK key encrypts the build output artifacts.</p>
   *          <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   * @public
   */
  encryptionKeyOverride?: string | undefined;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *             StartBuild request. The token is included in the StartBuild request and is valid for 5
   *             minutes. If you repeat the StartBuild request with the same token, but change a
   *             parameter, CodeBuild returns a parameter mismatch error. </p>
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * <p> Log settings for this build that override the log settings defined in the build
   *             project. </p>
   * @public
   */
  logsConfigOverride?: LogsConfig | undefined;

  /**
   * <p> The credentials for access to a private registry. </p>
   * @public
   */
  registryCredentialOverride?: RegistryCredential | undefined;

  /**
   * <p>The type of credentials CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *          <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                <p>Specifies that CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust CodeBuild's service principal.</p>
   *             </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                <p>Specifies that CodeBuild uses your build project's service role. </p>
   *             </dd>
   *          </dl>
   *          <p>When using a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   * @public
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | undefined;

  /**
   * <p>Specifies if session debugging is enabled for this build. For more information, see
   *                 <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.</p>
   * @public
   */
  debugSessionEnabled?: boolean | undefined;

  /**
   * <p>A ProjectFleet object specified for this build that overrides the one defined in the
   *             build project.</p>
   * @public
   */
  fleetOverride?: ProjectFleet | undefined;

  /**
   * <p>The maximum number of additional automatic retries after a failed build. For example, if the
   *             auto-retry limit is set to 2, CodeBuild will call the <code>RetryBuild</code> API to automatically
   *             retry your build for up to 2 additional times.</p>
   * @public
   */
  autoRetryLimitOverride?: number | undefined;
}

/**
 * @public
 */
export interface StartBuildOutput {
  /**
   * <p>Information about the build to be run.</p>
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 */
export interface StartBuildBatchInput {
  /**
   * <p>The name of the project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>An array of <code>ProjectSource</code> objects that override the secondary sources
   *         defined in the batch build project.</p>
   * @public
   */
  secondarySourcesOverride?: ProjectSource[] | undefined;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects that override the secondary source
   *             versions in the batch build project.</p>
   * @public
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[] | undefined;

  /**
   * <p>The version of the batch build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *          <dl>
   *             <dt>CodeCommit</dt>
   *             <dd>
   *                <p>The commit ID, branch, or Git tag to use.</p>
   *             </dd>
   *             <dt>GitHub</dt>
   *             <dd>
   *                <p>The commit ID, pull request ID, branch name, or tag name that corresponds
   *                         to the version of the source code you want to build. If a pull request ID is
   *                         specified, it must use the format <code>pr/pull-request-ID</code> (for
   *                         example <code>pr/25</code>). If a branch name is specified, the branch's
   *                         HEAD commit ID is used. If not specified, the default branch's HEAD commit
   *                         ID is used.</p>
   *             </dd>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                <p>The commit ID, branch name, or tag name that corresponds to the version of
   *                         the source code you want to build. If a branch name is specified, the
   *                         branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                         commit ID is used.</p>
   *             </dd>
   *             <dt>Amazon S3</dt>
   *             <dd>
   *                <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *             </dd>
   *          </dl>
   *          <p>If <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects that contains information about the
   *             build output artifact overrides for the build project.</p>
   * @public
   */
  artifactsOverride?: ProjectArtifacts | undefined;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects that override the secondary artifacts
   *             defined in the batch build project.</p>
   * @public
   */
  secondaryArtifactsOverride?: ProjectArtifacts[] | undefined;

  /**
   * <p>An array of <code>EnvironmentVariable</code> objects that override, or add to, the
   *             environment variables defined in the batch build project.</p>
   * @public
   */
  environmentVariablesOverride?: EnvironmentVariable[] | undefined;

  /**
   * <p>The source input type that overrides the source input defined in the batch
   *         build project.</p>
   * @public
   */
  sourceTypeOverride?: SourceType | undefined;

  /**
   * <p>A location that overrides, for this batch build, the source location defined in
   *         the batch build project.</p>
   * @public
   */
  sourceLocationOverride?: string | undefined;

  /**
   * <p>A <code>SourceAuth</code> object that overrides the one defined in the batch build
   *             project. This override applies only if the build project's source is BitBucket or
   *             GitHub.</p>
   * @public
   */
  sourceAuthOverride?: SourceAuth | undefined;

  /**
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *         batch build only, any previous depth of history defined in the batch build project.</p>
   * @public
   */
  gitCloneDepthOverride?: number | undefined;

  /**
   * <p>A <code>GitSubmodulesConfig</code> object that overrides the Git submodules configuration
   *             for this batch build.</p>
   * @public
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig | undefined;

  /**
   * <p>A buildspec file declaration that overrides, for this build only, the latest one
   *         already defined in the build project.</p>
   *          <p>If this value is set, it can be either an inline buildspec definition, the path to an
   *         alternate buildspec file relative to the value of the built-in
   *         <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *         The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec
   *         file using its ARN (for example,
   *         <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *         provided or is set to an empty string, the source code must contain a buildspec file in
   *         its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   * @public
   */
  buildspecOverride?: string | undefined;

  /**
   * <p>Enable this flag to override the insecure SSL setting that is specified in the batch build
   *         project. The insecure SSL setting determines whether to ignore SSL warnings while
   *         connecting to the project source code. This override applies only if the build's source
   *         is GitHub Enterprise.</p>
   * @public
   */
  insecureSslOverride?: boolean | undefined;

  /**
   * <p>Set to <code>true</code> to report to your source provider the status of a batch build's
   *             start and completion. If you use this option with a source provider other than GitHub,
   *             GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p>
   *          <note>
   *             <p>The status of a build triggered by a webhook is always reported to your source
   *           provider. </p>
   *          </note>
   * @public
   */
  reportBuildBatchStatusOverride?: boolean | undefined;

  /**
   * <p>A container type for this batch build that overrides the one specified in the batch build
   *         project.</p>
   * @public
   */
  environmentTypeOverride?: EnvironmentType | undefined;

  /**
   * <p>The name of an image for this batch build that overrides the one specified in the batch
   *             build project.</p>
   * @public
   */
  imageOverride?: string | undefined;

  /**
   * <p>The name of a compute type for this batch build that overrides the one specified in the
   *         batch build project.</p>
   * @public
   */
  computeTypeOverride?: ComputeType | undefined;

  /**
   * <p>The name of a certificate for this batch build that overrides the one specified in the batch build
   *         project.</p>
   * @public
   */
  certificateOverride?: string | undefined;

  /**
   * <p>A <code>ProjectCache</code> object that specifies cache overrides.</p>
   * @public
   */
  cacheOverride?: ProjectCache | undefined;

  /**
   * <p>The name of a service role for this batch build that overrides the one specified in the
   *         batch build project.</p>
   * @public
   */
  serviceRoleOverride?: string | undefined;

  /**
   * <p>Enable this flag to override privileged mode in the batch build project.</p>
   * @public
   */
  privilegedModeOverride?: boolean | undefined;

  /**
   * <p>Overrides the build timeout specified in the batch build project.</p>
   * @public
   */
  buildTimeoutInMinutesOverride?: number | undefined;

  /**
   * <p>The number of minutes a batch build is allowed to be queued before it times out.</p>
   * @public
   */
  queuedTimeoutInMinutesOverride?: number | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) that overrides the one specified in the batch build
   *         project. The CMK key encrypts the build output artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *           service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<alias-name></code>).</p>
   * @public
   */
  encryptionKeyOverride?: string | undefined;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>StartBuildBatch</code> request. The token is included in the
   *                 <code>StartBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>StartBuildBatch</code> request with the same token, but change a parameter,
   *             CodeBuild returns a parameter mismatch error.</p>
   * @public
   */
  idempotencyToken?: string | undefined;

  /**
   * <p>A <code>LogsConfig</code> object that override the log settings defined in the batch build
   *             project.</p>
   * @public
   */
  logsConfigOverride?: LogsConfig | undefined;

  /**
   * <p>A <code>RegistryCredential</code> object that overrides credentials for access to a
   *             private registry.</p>
   * @public
   */
  registryCredentialOverride?: RegistryCredential | undefined;

  /**
   * <p>The type of credentials CodeBuild uses to pull images in your batch build. There are two valid
   *         values: </p>
   *          <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                <p>Specifies that CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust CodeBuild's service principal.</p>
   *             </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                <p>Specifies that CodeBuild uses your build project's service role. </p>
   *             </dd>
   *          </dl>
   *          <p>When using a cross-account or private registry image, you must use
   *                 <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   * @public
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | undefined;

  /**
   * <p>A <code>BuildBatchConfigOverride</code> object that contains batch build configuration
   *             overrides.</p>
   * @public
   */
  buildBatchConfigOverride?: ProjectBuildBatchConfig | undefined;

  /**
   * <p>Specifies if session debugging is enabled for this batch build. For more information, see
   *   <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.</p>
   * @public
   */
  debugSessionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface StartBuildBatchOutput {
  /**
   * <p>A <code>BuildBatch</code> object that contains information about the batch build.</p>
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionInput {
  /**
   * <p>A <code>sandboxId</code> or <code>sandboxArn</code>.</p>
   * @public
   */
  sandboxId: string | undefined;

  /**
   * <p>The command that needs to be executed.</p>
   * @public
   */
  command: string | undefined;

  /**
   * <p>The command type.</p>
   * @public
   */
  type?: CommandType | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionOutput {
  /**
   * <p>Information about the requested command executions.</p>
   * @public
   */
  commandExecution?: CommandExecution | undefined;
}

/**
 * @public
 */
export interface StartSandboxInput {
  /**
   * <p>The CodeBuild project name.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>A unique client token.</p>
   * @public
   */
  idempotencyToken?: string | undefined;
}

/**
 * @public
 */
export interface StartSandboxOutput {
  /**
   * <p>Information about the requested sandbox.</p>
   * @public
   */
  sandbox?: Sandbox | undefined;
}

/**
 * @public
 */
export interface StartSandboxConnectionInput {
  /**
   * <p>A <code>sandboxId</code> or <code>sandboxArn</code>.</p>
   * @public
   */
  sandboxId: string | undefined;
}

/**
 * <p>Contains information about the Session Manager session.</p>
 * @public
 */
export interface SSMSession {
  /**
   * <p>The ID of the session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>An encrypted token value containing session and caller information.</p>
   * @public
   */
  tokenValue?: string | undefined;

  /**
   * <p>A URL back to SSM Agent on the managed node that the Session Manager client uses to send commands and receive output from the node.</p>
   * @public
   */
  streamUrl?: string | undefined;
}

/**
 * @public
 */
export interface StartSandboxConnectionOutput {
  /**
   * <p>Information about the Session Manager session.</p>
   * @public
   */
  ssmSession?: SSMSession | undefined;
}

/**
 * @public
 */
export interface StopBuildInput {
  /**
   * <p>The ID of the build.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildOutput {
  /**
   * <p>Information about the build.</p>
   * @public
   */
  build?: Build | undefined;
}

/**
 * @public
 */
export interface StopBuildBatchInput {
  /**
   * <p>The identifier of the batch build to stop.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildBatchOutput {
  /**
   * <p>Contains information about a batch build.</p>
   * @public
   */
  buildBatch?: BuildBatch | undefined;
}

/**
 * @public
 */
export interface StopSandboxInput {
  /**
   * <p>Information about the requested sandbox ID.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopSandboxOutput {
  /**
   * <p>Information about the requested sandbox.</p>
   * @public
   */
  sandbox?: Sandbox | undefined;
}

/**
 * @public
 */
export interface UpdateFleetInput {
  /**
   * <p>The ARN of the compute fleet.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can
   *             run in parallel.</p>
   * @public
   */
  baseCapacity?: number | undefined;

  /**
   * <p>The environment type of the compute fleet.</p>
   *          <ul>
   *             <li>
   *                <p>The environment type <code>ARM_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Singapore), Asia Pacific (Sydney),
   *                     EU (Frankfurt), and South America (São Paulo).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>ARM_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Medium fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     and EU (Frankfurt)</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>MAC_ARM</code> is available for Large fleets only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon), and Asia Pacific (Sydney).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_EC2</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     EU (Frankfurt), Asia Pacific (Tokyo),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), South America (São Paulo), and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2019_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), Asia Pacific (Sydney),
   *                     Asia Pacific (Tokyo), Asia Pacific (Mumbai) and
   *                     EU (Ireland).</p>
   *             </li>
   *             <li>
   *                <p>The environment type <code>WINDOWS_SERVER_2022_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland), EU (Frankfurt),
   *                     Asia Pacific (Sydney), Asia Pacific (Singapore), Asia Pacific (Tokyo), South America (São Paulo) and
   *                     Asia Pacific (Mumbai).</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild
   *                 user guide</i>.</p>
   * @public
   */
  environmentType?: EnvironmentType | undefined;

  /**
   * <p>Information about the compute resources the compute fleet uses. Available values
   *             include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ATTRIBUTE_BASED_COMPUTE</code>: Specify the amount of vCPUs, memory, disk space, and the type of machine.</p>
   *                <note>
   *                   <p> If you use <code>ATTRIBUTE_BASED_COMPUTE</code>, you must define your attributes by using <code>computeConfiguration</code>. CodeBuild
   *                         will select the cheapest instance that satisfies your specified attributes. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.types">Reserved capacity environment
   *                         types</a> in the <i>CodeBuild User Guide</i>.</p>
   *                </note>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_INSTANCE_TYPE</code>: Specify the instance type for your compute fleet. For a list of supported instance types, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment-reserved-capacity.instance-types">Supported instance families
   *                         </a> in the <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 4 GiB memory and 2 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 8 GiB memory and 4 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GiB memory and 8 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_XLARGE</code>: Use up to 72 GiB memory and 36 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 144 GiB memory, 72 vCPUs, and
   *                     824 GB of SSD storage for builds. This compute type supports Docker images up to
   *                     100 GB uncompressed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_1GB</code>: Use up to 1 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_2GB</code>: Use up to 2 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_4GB</code>: Use up to 4 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_8GB</code>: Use up to 8 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BUILD_LAMBDA_10GB</code>: Use up to 10 GiB memory for
   *                     builds. Only available for environment type <code>LINUX_LAMBDA_CONTAINER</code> and <code>ARM_LAMBDA_CONTAINER</code>.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_SMALL</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 16
   *                     GiB memory, 4 vCPUs, and 1 NVIDIA A10G Tensor Core GPU for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 4 GiB
   *                     memory and 2 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p>
   *          <ul>
   *             <li>
   *                <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255
   *                     GiB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p>
   *             </li>
   *             <li>
   *                <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GiB
   *                     memory and 8 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html#environment.types">On-demand environment types</a>
   *                 in the <i>CodeBuild User Guide.</i>
   *          </p>
   * @public
   */
  computeType?: ComputeType | undefined;

  /**
   * <p>The compute configuration of the compute fleet. This is only required if <code>computeType</code> is set to <code>ATTRIBUTE_BASED_COMPUTE</code> or <code>CUSTOM_INSTANCE_TYPE</code>.</p>
   * @public
   */
  computeConfiguration?: ComputeConfiguration | undefined;

  /**
   * <p>The scaling configuration of the compute fleet.</p>
   * @public
   */
  scalingConfiguration?: ScalingConfigurationInput | undefined;

  /**
   * <p>The compute fleet overflow behavior.</p>
   *          <ul>
   *             <li>
   *                <p>For overflow behavior <code>QUEUE</code>, your overflow builds need to wait on
   *                     the existing fleet instance to become available.</p>
   *             </li>
   *             <li>
   *                <p>For overflow behavior <code>ON_DEMAND</code>, your overflow builds run on CodeBuild on-demand.</p>
   *                <note>
   *                   <p>If you choose to set your overflow behavior to on-demand while creating a VPC-connected
   *                     fleet, make sure that you add the required VPC permissions to your project service role. For more
   *                     information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-create-vpc-network-interface">Example
   *                     policy statement to allow CodeBuild access to Amazon Web Services services required to create a VPC network interface</a>.</p>
   *                </note>
   *             </li>
   *          </ul>
   * @public
   */
  overflowBehavior?: FleetOverflowBehavior | undefined;

  /**
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>The proxy configuration of the compute fleet.</p>
   * @public
   */
  proxyConfiguration?: ProxyConfiguration | undefined;

  /**
   * <p>The Amazon Machine Image (AMI) of the compute fleet.</p>
   * @public
   */
  imageId?: string | undefined;

  /**
   * <p>The service role associated with the compute fleet. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html">
   *             Allow a user to add a permission policy for a fleet service role</a> in the <i>CodeBuild User Guide</i>.</p>
   * @public
   */
  fleetServiceRole?: string | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this compute fleet.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateFleetOutput {
  /**
   * <p>A <code>Fleet</code> object.</p>
   * @public
   */
  fleet?: Fleet | undefined;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * <p>The name of the build project.</p>
   *          <note>
   *             <p>You cannot change a build project's name.</p>
   *          </note>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A new or replacement description of the build project.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Information to be changed about the build input source code for the build
   *     project.</p>
   * @public
   */
  source?: ProjectSource | undefined;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   * @public
   */
  secondarySources?: ProjectSource[] | undefined;

  /**
   * <p> A version of the build input to be built for this project. If not specified, the
   *     latest version is used. If specified, it must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *             corresponds to the version of the source code you want to build. If a pull
   *             request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *             (for example <code>pr/25</code>). If a branch name is specified, the branch's
   *             HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *             used.</p>
   *             </li>
   *             <li>
   *                <p>For GitLab: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *             version of the source code you want to build. If a branch name is specified, the
   *             branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *             commit ID is used.</p>
   *             </li>
   *             <li>
   *                <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *             file to use.</p>
   *             </li>
   *          </ul>
   *          <p> If <code>sourceVersion</code> is specified at the build level, then that version
   *     takes precedence over this <code>sourceVersion</code> (at the project level). </p>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *         with CodeBuild</a> in the <i>CodeBuild User Guide</i>.
   *     </p>
   * @public
   */
  sourceVersion?: string | undefined;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *     over these <code>secondarySourceVersions</code> (at the project level). </p>
   * @public
   */
  secondarySourceVersions?: ProjectSourceVersion[] | undefined;

  /**
   * <p>Information to be changed about the build output artifacts for the build
   *         project.</p>
   * @public
   */
  artifacts?: ProjectArtifacts | undefined;

  /**
   * <p> An array of <code>ProjectArtifact</code> objects. </p>
   * @public
   */
  secondaryArtifacts?: ProjectArtifacts[] | undefined;

  /**
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *       time.</p>
   * @public
   */
  cache?: ProjectCache | undefined;

  /**
   * <p>Information to be changed about the build environment for the build project.</p>
   * @public
   */
  environment?: ProjectEnvironment | undefined;

  /**
   * <p>The replacement ARN of the IAM role that enables CodeBuild to interact with dependent
   *     Amazon Web Services services on behalf of the Amazon Web Services account.</p>
   * @public
   */
  serviceRole?: string | undefined;

  /**
   * <p>The replacement value in minutes, from 5 to 2160 (36 hours), for CodeBuild to wait before
   *       timing out any related build that did not get marked as completed.</p>
   * @public
   */
  timeoutInMinutes?: number | undefined;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   * @public
   */
  queuedTimeoutInMinutes?: number | undefined;

  /**
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *     artifacts.</p>
   *          <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *     the format <code>alias/<alias-name></code>).
   *     </p>
   * @public
   */
  encryptionKey?: string | undefined;

  /**
   * <p>An updated list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>VpcConfig enables CodeBuild to access resources in an Amazon VPC.</p>
   * @public
   */
  vpcConfig?: VpcConfig | undefined;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *       badge.</p>
   * @public
   */
  badgeEnabled?: boolean | undefined;

  /**
   * <p> Information about logs for the build project. A project can create logs in CloudWatch Logs,
   *     logs in an S3 bucket, or both. </p>
   * @public
   */
  logsConfig?: LogsConfig | undefined;

  /**
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   * @public
   */
  fileSystemLocations?: ProjectFileSystemLocation[] | undefined;

  /**
   * <p>Contains configuration information about a batch build project.</p>
   * @public
   */
  buildBatchConfig?: ProjectBuildBatchConfig | undefined;

  /**
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   *          <p>To remove this limit, set this value to -1.</p>
   * @public
   */
  concurrentBuildLimit?: number | undefined;

  /**
   * <p>The maximum number of additional automatic retries after a failed build. For example, if the
   *       auto-retry limit is set to 2, CodeBuild will call the <code>RetryBuild</code> API to automatically
   *       retry your build for up to 2 additional times.</p>
   * @public
   */
  autoRetryLimit?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * <p>Information about the build project that was changed.</p>
   * @public
   */
  project?: Project | undefined;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   * @public
   */
  projectArn: string | undefined;

  /**
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *          <dl>
   *             <dt>PUBLIC_READ</dt>
   *             <dd>
   *                <p>The project builds are visible to the public.</p>
   *             </dd>
   *             <dt>PRIVATE</dt>
   *             <dd>
   *                <p>The project builds are not visible to the public.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  projectVisibility: ProjectVisibilityType | undefined;

  /**
   * <p>The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for
   *       the project's builds.</p>
   * @public
   */
  resourceAccessRole?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityOutput {
  /**
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   * @public
   */
  projectArn?: string | undefined;

  /**
   * <p>Contains the project identifier used with the public build APIs. </p>
   * @public
   */
  publicProjectAlias?: string | undefined;

  /**
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *          <dl>
   *             <dt>PUBLIC_READ</dt>
   *             <dd>
   *                <p>The project builds are visible to the public.</p>
   *             </dd>
   *             <dt>PRIVATE</dt>
   *             <dd>
   *                <p>The project builds are not visible to the public.</p>
   *             </dd>
   *          </dl>
   * @public
   */
  projectVisibility?: ProjectVisibilityType | undefined;
}

/**
 * @public
 */
export interface UpdateReportGroupInput {
  /**
   * <p>
   *       The ARN of the report group to update.
   *     </p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>
   *       Used to specify an updated export type. Valid values are:
   *     </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>S3</code>: The report results are exported to an S3 bucket.
   *         </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NO_EXPORT</code>: The report results are not exported.
   *         </p>
   *             </li>
   *          </ul>
   * @public
   */
  exportConfig?: ReportExportConfig | undefined;

  /**
   * <p>
   *       An updated list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface UpdateReportGroupOutput {
  /**
   * <p>
   *       Information about the updated report group.
   *     </p>
   * @public
   */
  reportGroup?: ReportGroup | undefined;
}

/**
 * @public
 */
export interface UpdateWebhookInput {
  /**
   * <p>The name of the CodeBuild project.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p> It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   * @public
   */
  branchFilter?: string | undefined;

  /**
   * <p> A boolean value that specifies whether the associated GitHub repository's secret
   *       token should be updated. If you use Bitbucket for your repository,
   *       <code>rotateSecret</code> is ignored. </p>
   * @public
   */
  rotateSecret?: boolean | undefined;

  /**
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine if a
   *       webhook event can trigger a build. A filter group must contain at least one
   *       <code>EVENT</code>
   *             <code>WebhookFilter</code>. </p>
   * @public
   */
  filterGroups?: WebhookFilter[][] | undefined;

  /**
   * <p>Specifies the type of build this webhook will trigger.</p>
   *          <note>
   *             <p>
   *                <code>RUNNER_BUILDKITE_BUILD</code> is only available for <code>NO_SOURCE</code> source type projects
   *         configured for Buildkite runner builds. For more information about CodeBuild-hosted Buildkite runner builds, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-runner-buildkite.html">Tutorial: Configure a CodeBuild-hosted Buildkite runner</a> in the <i>CodeBuild
   *         user guide</i>.</p>
   *          </note>
   * @public
   */
  buildType?: WebhookBuildType | undefined;

  /**
   * <p>A PullRequestBuildPolicy object that defines comment-based approval requirements for triggering builds on pull requests. This policy helps control when automated builds are executed based on contributor permissions and approval workflows.</p>
   * @public
   */
  pullRequestBuildPolicy?: PullRequestBuildPolicy | undefined;
}

/**
 * @public
 */
export interface UpdateWebhookOutput {
  /**
   * <p> Information about a repository's webhook that is associated with a project in CodeBuild.
   *     </p>
   * @public
   */
  webhook?: Webhook | undefined;
}

/**
 * @internal
 */
export const CommandExecutionFilterSensitiveLog = (obj: CommandExecution): any => ({
  ...obj,
  ...(obj.command && { command: SENSITIVE_STRING }),
  ...(obj.standardOutputContent && { standardOutputContent: SENSITIVE_STRING }),
  ...(obj.standardErrContent && { standardErrContent: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const BatchGetCommandExecutionsOutputFilterSensitiveLog = (obj: BatchGetCommandExecutionsOutput): any => ({
  ...obj,
  ...(obj.commandExecutions && {
    commandExecutions: obj.commandExecutions.map((item) => CommandExecutionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ImportSourceCredentialsInputFilterSensitiveLog = (obj: ImportSourceCredentialsInput): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCommandExecutionsForSandboxInputFilterSensitiveLog = (
  obj: ListCommandExecutionsForSandboxInput
): any => ({
  ...obj,
  ...(obj.nextToken && { nextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListCommandExecutionsForSandboxOutputFilterSensitiveLog = (
  obj: ListCommandExecutionsForSandboxOutput
): any => ({
  ...obj,
  ...(obj.commandExecutions && {
    commandExecutions: obj.commandExecutions.map((item) => CommandExecutionFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListFleetsInputFilterSensitiveLog = (obj: ListFleetsInput): any => ({
  ...obj,
  ...(obj.nextToken && { nextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListSandboxesForProjectInputFilterSensitiveLog = (obj: ListSandboxesForProjectInput): any => ({
  ...obj,
  ...(obj.nextToken && { nextToken: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartCommandExecutionInputFilterSensitiveLog = (obj: StartCommandExecutionInput): any => ({
  ...obj,
  ...(obj.command && { command: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartCommandExecutionOutputFilterSensitiveLog = (obj: StartCommandExecutionOutput): any => ({
  ...obj,
  ...(obj.commandExecution && { commandExecution: CommandExecutionFilterSensitiveLog(obj.commandExecution) }),
});

/**
 * @internal
 */
export const StartSandboxInputFilterSensitiveLog = (obj: StartSandboxInput): any => ({
  ...obj,
  ...(obj.idempotencyToken && { idempotencyToken: SENSITIVE_STRING }),
});
