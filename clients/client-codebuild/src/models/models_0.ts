// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeBuildServiceException as __BaseException } from "./CodeBuildServiceException";

/**
 * @public
 * <p>An Amazon Web Services service limit was exceeded for the calling Amazon Web Services account.</p>
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
  OAUTH: "OAUTH",
  PERSONAL_ACCESS_TOKEN: "PERSONAL_ACCESS_TOKEN",
} as const;

/**
 * @public
 */
export type AuthType = (typeof AuthType)[keyof typeof AuthType];

/**
 * @public
 */
export interface BatchDeleteBuildsInput {
  /**
   * @public
   * <p>The IDs of the builds to delete.</p>
   */
  ids: string[] | undefined;
}

/**
 * @public
 * <p>Information about a build that could not be successfully deleted.</p>
 */
export interface BuildNotDeleted {
  /**
   * @public
   * <p>The ID of the build that could not be successfully deleted.</p>
   */
  id?: string;

  /**
   * @public
   * <p>Additional information about the build that could not be successfully deleted.</p>
   */
  statusCode?: string;
}

/**
 * @public
 */
export interface BatchDeleteBuildsOutput {
  /**
   * @public
   * <p>The IDs of the builds that were successfully deleted.</p>
   */
  buildsDeleted?: string[];

  /**
   * @public
   * <p>Information about any builds that could not be successfully deleted.</p>
   */
  buildsNotDeleted?: BuildNotDeleted[];
}

/**
 * @public
 * <p>The input value that was provided is not valid.</p>
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
   * @public
   * <p>An array that contains the batch build identifiers to retrieve.</p>
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
 * @public
 * <p>Information about build output artifacts.</p>
 */
export interface BuildArtifacts {
  /**
   * @public
   * <p>Information about the location of the build artifacts.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The SHA-256 hash of the build artifact.</p>
   *         <p>You can use this hash along with a checksum tool to confirm file integrity and
   *             authenticity.</p>
   *         <note>
   *             <p>This value is available only if the build project's <code>packaging</code> value
   *                 is set to <code>ZIP</code>.</p>
   *         </note>
   */
  sha256sum?: string;

  /**
   * @public
   * <p>The MD5 hash of the build artifact.</p>
   *         <p>You can use this hash along with a checksum tool to confirm file integrity and
   *             authenticity.</p>
   *         <note>
   *             <p>This value is available only if the build project's <code>packaging</code> value
   *                 is set to <code>ZIP</code>.</p>
   *         </note>
   */
  md5sum?: string;

  /**
   * @public
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * @public
   * <p> Information that tells you if encryption for build artifacts is disabled. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * @public
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;

  /**
   * @public
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *         <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *         </note>
   *         <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                 <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *               <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *               <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                     <ul>
   *                   <li>
   *                             <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                         </li>
   *                   <li>
   *                             <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                         </li>
   *                </ul>
   *                     <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   */
  bucketOwnerAccess?: BucketOwnerAccess | string;
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
 * @public
 * <p>Specifies restrictions for the batch build.</p>
 */
export interface BatchRestrictions {
  /**
   * @public
   * <p>Specifies the maximum number of builds allowed.</p>
   */
  maximumBuildsAllowed?: number;

  /**
   * @public
   * <p>An array of strings that specify the compute types that are allowed for the batch
   *             build. See <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment
   *                 compute types</a> in the <i>CodeBuild User Guide</i> for these values.
   *         </p>
   */
  computeTypesAllowed?: string[];
}

/**
 * @public
 * <p>Contains configuration information about a batch build project.</p>
 */
export interface ProjectBuildBatchConfig {
  /**
   * @public
   * <p>Specifies the service role ARN for the batch build project.</p>
   */
  serviceRole?: string;

  /**
   * @public
   * <p>Specifies if the build artifacts for the batch build should be combined into a single
   *             artifact location.</p>
   */
  combineArtifacts?: boolean;

  /**
   * @public
   * <p>A <code>BatchRestrictions</code> object that specifies the restrictions for the batch
   *             build.</p>
   */
  restrictions?: BatchRestrictions;

  /**
   * @public
   * <p>Specifies the maximum amount of time, in minutes, that the batch build must be completed in.</p>
   */
  timeoutInMins?: number;

  /**
   * @public
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
   */
  batchReportMode?: BatchReportModeType | string;
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
 * @public
 * <p>Represents a resolved build artifact. A resolved artifact is an artifact that is built and
 *             deployed to the destination, such as Amazon S3.</p>
 */
export interface ResolvedArtifact {
  /**
   * @public
   * <p>Specifies the type of artifact.</p>
   */
  type?: ArtifactsType | string;

  /**
   * @public
   * <p>The location of the artifact.</p>
   */
  location?: string;

  /**
   * @public
   * <p>The identifier of the artifact.</p>
   */
  identifier?: string;
}

/**
 * @public
 * <p>Contains summary information about a batch build group.</p>
 */
export interface BuildSummary {
  /**
   * @public
   * <p>The batch build ARN.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>When the build was started, expressed in Unix time format.</p>
   */
  requestedOn?: Date;

  /**
   * @public
   * <p>The status of the build group.</p>
   *         <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                     <p>The build group failed.</p>
   *                 </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                     <p>The build group faulted.</p>
   *                 </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                     <p>The build group is still in progress.</p>
   *                 </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                     <p>The build group stopped.</p>
   *                 </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                     <p>The build group succeeded.</p>
   *                 </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                     <p>The build group timed out.</p>
   *                 </dd>
   *          </dl>
   */
  buildStatus?: StatusType | string;

  /**
   * @public
   * <p>A <code>ResolvedArtifact</code> object that represents the primary build artifacts for the
   *             build group.</p>
   */
  primaryArtifact?: ResolvedArtifact;

  /**
   * @public
   * <p>An array of <code>ResolvedArtifact</code> objects that represents the secondary build
   *             artifacts for the build group.</p>
   */
  secondaryArtifacts?: ResolvedArtifact[];
}

/**
 * @public
 * <p>Contains information about a batch build build group. Build groups are used to combine
 *             builds that can run in parallel, while still being able to set dependencies on other
 *             build groups.</p>
 */
export interface BuildGroup {
  /**
   * @public
   * <p>Contains the identifier of the build group.</p>
   */
  identifier?: string;

  /**
   * @public
   * <p>An array of strings that contain the identifiers of the build groups that this build
   *             group depends on.</p>
   */
  dependsOn?: string[];

  /**
   * @public
   * <p>Specifies if failures in this build group can be ignored.</p>
   */
  ignoreFailure?: boolean;

  /**
   * @public
   * <p>A <code>BuildSummary</code> object that contains a summary of the current build
   *             group.</p>
   */
  currentBuildSummary?: BuildSummary;

  /**
   * @public
   * <p>An array of <code>BuildSummary</code> objects that contain summaries of previous
   *             build groups.</p>
   */
  priorBuildSummaryList?: BuildSummary[];
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
 * @public
 * <p>Information about the cache for the build project.</p>
 */
export interface ProjectCache {
  /**
   * @public
   * <p>The type of cache used by the build project. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NO_CACHE</code>: The build project does not use any cache.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>S3</code>: The build project reads and writes from and to S3.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LOCAL</code>: The build project stores a cache locally on a build host
   *                     that is only available to that build host.</p>
   *             </li>
   *          </ul>
   */
  type: CacheType | string | undefined;

  /**
   * @public
   * <p>Information about the cache location: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>NO_CACHE</code> or <code>LOCAL</code>: This value is ignored.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>S3</code>: This is the S3 bucket name/prefix.</p>
   *             </li>
   *          </ul>
   */
  location?: string;

  /**
   * @public
   * <p>An array of strings that specify the local cache modes. You can use one or more local
   *             cache modes at the same time. This is only used for <code>LOCAL</code> cache
   *             types.</p>
   *         <p>Possible values are:</p>
   *         <dl>
   *             <dt>LOCAL_SOURCE_CACHE</dt>
   *             <dd>
   *                     <p>Caches Git metadata for primary and secondary sources. After the cache is
   *                         created, subsequent builds pull only the change between commits. This mode
   *                         is a good choice for projects with a clean working directory and a source
   *                         that is a large Git repository. If you choose this option and your project
   *                         does not use a Git repository (GitHub, GitHub Enterprise, or Bitbucket), the
   *                         option is ignored. </p>
   *                 </dd>
   *             <dt>LOCAL_DOCKER_LAYER_CACHE</dt>
   *             <dd>
   *                     <p>Caches existing Docker layers. This mode is a good choice for projects
   *                         that build or pull large Docker images. It can prevent the performance
   *                         issues caused by pulling large Docker images down from the network. </p>
   *                     <note>
   *                         <ul>
   *                      <li>
   *                                 <p>You can use a Docker layer cache in the Linux environment
   *                                     only. </p>
   *                             </li>
   *                      <li>
   *                                 <p>The <code>privileged</code> flag must be set so that your
   *                                     project has the required Docker permissions. </p>
   *                             </li>
   *                      <li>
   *                                 <p>You should consider the security implications before you use a
   *                                     Docker layer cache. </p>
   *                             </li>
   *                   </ul>
   *                     </note>
   *                 </dd>
   *             <dt>LOCAL_CUSTOM_CACHE</dt>
   *             <dd>
   *                     <p>Caches directories you specify in the buildspec file. This mode is a good
   *                         choice if your build scenario is not suited to one of the other three local
   *                         cache modes. If you use a custom cache: </p>
   *                     <ul>
   *                   <li>
   *                             <p>Only directories can be specified for caching. You cannot specify
   *                                 individual files. </p>
   *                         </li>
   *                   <li>
   *                             <p>Symlinks are used to reference cached directories. </p>
   *                         </li>
   *                   <li>
   *                             <p>Cached directories are linked to your build before it downloads
   *                                 its project sources. Cached items are overridden if a source item
   *                                 has the same name. Directories are specified using cache paths in
   *                                 the buildspec file. </p>
   *                         </li>
   *                </ul>
   *                 </dd>
   *          </dl>
   */
  modes?: (CacheMode | string)[];
}

/**
 * @public
 * @enum
 */
export const ComputeType = {
  BUILD_GENERAL1_2XLARGE: "BUILD_GENERAL1_2XLARGE",
  BUILD_GENERAL1_LARGE: "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM: "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL: "BUILD_GENERAL1_SMALL",
} as const;

/**
 * @public
 */
export type ComputeType = (typeof ComputeType)[keyof typeof ComputeType];

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
 * @public
 * <p>Information about an environment variable for a build project or a build.</p>
 */
export interface EnvironmentVariable {
  /**
   * @public
   * <p>The name or key of the environment variable.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The value of the environment variable.</p>
   *         <important>
   *             <p>We strongly discourage the use of <code>PLAINTEXT</code> environment variables to
   *                 store sensitive values, especially Amazon Web Services secret key IDs and secret access keys.
   *                     <code>PLAINTEXT</code> environment variables can be displayed in plain text
   *                 using the CodeBuild console and the CLI. For sensitive values, we recommend you use an
   *                 environment variable of type <code>PARAMETER_STORE</code> or
   *                     <code>SECRETS_MANAGER</code>. </p>
   *         </important>
   */
  value: string | undefined;

  /**
   * @public
   * <p>The type of environment variable. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PARAMETER_STORE</code>: An environment variable stored in Systems Manager
   *                     Parameter Store. To learn how to specify a parameter store environment variable,
   *                     see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.parameter-store">env/parameter-store</a> in the
   *                     <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PLAINTEXT</code>: An environment variable in plain text format. This is
   *                     the default value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SECRETS_MANAGER</code>: An environment variable stored in Secrets Manager. To learn how to specify a secrets manager environment variable, see
   *                         <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec.env.secrets-manager">env/secrets-manager</a> in the
   *                     <i>CodeBuild User Guide</i>.</p>
   *             </li>
   *          </ul>
   */
  type?: EnvironmentVariableType | string;
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
 * @public
 * <p> Information about credentials that provide access to a private Docker registry. When
 *             this is set: </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     <code>imagePullCredentialsType</code> must be set to <code>SERVICE_ROLE</code>.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p> images cannot be curated or an Amazon ECR image.</p>
 *             </li>
 *          </ul>
 *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-private-registry.html">Private Registry with
 *                 Secrets Manager Sample for CodeBuild</a>. </p>
 */
export interface RegistryCredential {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) or name of credentials created using Secrets Manager. </p>
   *         <note>
   *             <p> The <code>credential</code> can use the name of the credentials only if they
   *                 exist in your current Amazon Web Services Region. </p>
   *         </note>
   */
  credential: string | undefined;

  /**
   * @public
   * <p> The service that created the credentials to access a private Docker registry. The
   *             valid value, SECRETS_MANAGER, is for Secrets Manager. </p>
   */
  credentialProvider: CredentialProviderType | string | undefined;
}

/**
 * @public
 * @enum
 */
export const EnvironmentType = {
  ARM_CONTAINER: "ARM_CONTAINER",
  LINUX_CONTAINER: "LINUX_CONTAINER",
  LINUX_GPU_CONTAINER: "LINUX_GPU_CONTAINER",
  WINDOWS_CONTAINER: "WINDOWS_CONTAINER",
  WINDOWS_SERVER_2019_CONTAINER: "WINDOWS_SERVER_2019_CONTAINER",
} as const;

/**
 * @public
 */
export type EnvironmentType = (typeof EnvironmentType)[keyof typeof EnvironmentType];

/**
 * @public
 * <p>Information about the build environment of the build project.</p>
 */
export interface ProjectEnvironment {
  /**
   * @public
   * <p>The type of build environment to use for related builds.</p>
   *         <ul>
   *             <li>
   *                 <p>The environment type <code>ARM_CONTAINER</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), EU (Ireland),
   *                     Asia Pacific (Mumbai), Asia Pacific (Tokyo), Asia Pacific (Sydney), and
   *                     EU (Frankfurt).</p>
   *             </li>
   *             <li>
   *                 <p>The environment type <code>LINUX_CONTAINER</code> with compute type
   *                         <code>build.general1.2xlarge</code> is available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon),
   *                     Canada (Central), EU (Ireland), EU (London),
   *                     EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney), China (Beijing), and
   *                     China (Ningxia).</p>
   *             </li>
   *             <li>
   *                 <p>The environment type <code>LINUX_GPU_CONTAINER</code> is available only in
   *                     regions US East (N. Virginia), US East (Ohio), US West (Oregon),
   *                     Canada (Central), EU (Ireland), EU (London),
   *                     EU (Frankfurt), Asia Pacific (Tokyo), Asia Pacific (Seoul),
   *                     Asia Pacific (Singapore), Asia Pacific (Sydney) , China (Beijing), and
   *                     China (Ningxia).</p>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>The environment types <code>WINDOWS_CONTAINER</code> and
   *                         <code>WINDOWS_SERVER_2019_CONTAINER</code> are available only in regions
   *                     US East (N. Virginia), US East (Ohio), US West (Oregon), and
   *                     EU (Ireland).</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment compute types</a> in the <i>CodeBuild
   *                 user guide</i>.</p>
   */
  type: EnvironmentType | string | undefined;

  /**
   * @public
   * <p>The image tag or image digest that identifies the Docker image to use for this build
   *             project. Use the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>For an image tag: <code><registry>/<repository>:<tag></code>. For
   *                     example, in the Docker repository that CodeBuild uses to manage its Docker
   *                     images, this would be <code>aws/codebuild/standard:4.0</code>. </p>
   *             </li>
   *             <li>
   *                 <p>For an image digest: <code><registry>/<repository>@<digest></code>.
   *                     For example, to specify an image with the digest
   *                     "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use
   *                         <code><registry>/<repository>@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf</code>.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-available.html">Docker images provided by CodeBuild</a> in the <i>CodeBuild user
   *                 guide</i>.</p>
   */
  image: string | undefined;

  /**
   * @public
   * <p>Information about the compute resources the build project uses. Available values
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BUILD_GENERAL1_SMALL</code>: Use up to 3 GB memory and 2 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BUILD_GENERAL1_MEDIUM</code>: Use up to 7 GB memory and 4 vCPUs for
   *                     builds.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BUILD_GENERAL1_LARGE</code>: Use up to 16 GB memory and 8 vCPUs for
   *                     builds, depending on your environment type.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>BUILD_GENERAL1_2XLARGE</code>: Use up to 145 GB memory, 72 vCPUs, and
   *                     824 GB of SSD storage for builds. This compute type supports Docker images up to
   *                     100 GB uncompressed.</p>
   *             </li>
   *          </ul>
   *         <p> If you use <code>BUILD_GENERAL1_LARGE</code>: </p>
   *         <ul>
   *             <li>
   *                 <p> For environment type <code>LINUX_CONTAINER</code>, you can use up to 15 GB
   *                     memory and 8 vCPUs for builds. </p>
   *             </li>
   *             <li>
   *                 <p> For environment type <code>LINUX_GPU_CONTAINER</code>, you can use up to 255
   *                     GB memory, 32 vCPUs, and 4 NVIDIA Tesla V100 GPUs for builds.</p>
   *             </li>
   *             <li>
   *                 <p> For environment type <code>ARM_CONTAINER</code>, you can use up to 16 GB
   *                     memory and 8 vCPUs on ARM-based processors for builds.</p>
   *             </li>
   *          </ul>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build Environment
   *                 Compute Types</a> in the <i>CodeBuild User Guide.</i>
   *         </p>
   */
  computeType: ComputeType | string | undefined;

  /**
   * @public
   * <p>A set of environment variables to make available to builds for this build
   *             project.</p>
   */
  environmentVariables?: EnvironmentVariable[];

  /**
   * @public
   * <p>Enables running the Docker daemon inside a Docker container. Set to true only if the
   *             build project is used to build Docker images. Otherwise, a build that attempts to
   *             interact with the Docker daemon fails. The default setting is <code>false</code>.</p>
   *         <p>You can initialize the Docker daemon during the install phase of your build by adding
   *             one of the following sets of commands to the install phase of your buildspec
   *             file:</p>
   *         <p>If the operating system's base image is Ubuntu Linux:</p>
   *         <p>
   *             <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&</code>
   *         </p>
   *         <p>
   *             <code>- timeout 15 sh -c "until docker info; do echo .; sleep 1; done"</code>
   *         </p>
   *         <p>If the operating system's base image is Alpine Linux and the previous command does not
   *             work, add the <code>-t</code> argument to <code>timeout</code>:</p>
   *         <p>
   *             <code>- nohup /usr/local/bin/dockerd --host=unix:///var/run/docker.sock --host=tcp://0.0.0.0:2375 --storage-driver=overlay&</code>
   *          </p>
   *         <p>
   *             <code>- timeout -t 15 sh -c "until docker info; do echo .; sleep 1; done"</code>
   *         </p>
   */
  privilegedMode?: boolean;

  /**
   * @public
   * <p>The ARN of the Amazon S3 bucket, path prefix, and object key that contains the PEM-encoded
   *             certificate for the build project. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/create-project-cli.html#cli.environment.certificate">certificate</a> in the
   *                 <i>CodeBuild User Guide</i>.</p>
   */
  certificate?: string;

  /**
   * @public
   * <p> The credentials for access to a private registry.</p>
   */
  registryCredential?: RegistryCredential;

  /**
   * @public
   * <p> The type of credentials CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CODEBUILD</code> specifies that CodeBuild uses its own credentials.
   *                     This requires that you modify your ECR repository policy to trust CodeBuild service principal. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SERVICE_ROLE</code> specifies that CodeBuild uses your build project's service
   *                     role. </p>
   *             </li>
   *          </ul>
   *         <p> When you use a cross-account or private registry image, you must use SERVICE_ROLE
   *             credentials. When you use an CodeBuild curated image, you must use CODEBUILD credentials.
   *         </p>
   */
  imagePullCredentialsType?: ImagePullCredentialsType | string;
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
 * @public
 * <p> Information about a file system created by Amazon Elastic File System (EFS). For more
 *             information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is
 *                 Amazon Elastic File System?</a>
 *         </p>
 */
export interface ProjectFileSystemLocation {
  /**
   * @public
   * <p> The type of the file system. The one supported type is <code>EFS</code>. </p>
   */
  type?: FileSystemType | string;

  /**
   * @public
   * <p>A string that specifies the location of the file system created by Amazon EFS. Its
   *             format is <code>efs-dns-name:/directory-path</code>. You can find the DNS name of file
   *             system when you view it in the Amazon EFS console. The directory path is a path to a
   *             directory in the file system that CodeBuild mounts. For example, if the DNS name of a
   *             file system is <code>fs-abcd1234.efs.us-west-2.amazonaws.com</code>, and its mount
   *             directory is <code>my-efs-mount-directory</code>, then the <code>location</code> is
   *                 <code>fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory</code>. </p>
   *         <p>The directory path in the format <code>efs-dns-name:/directory-path</code> is
   *             optional. If you do not specify a directory path, the location is only the DNS name and
   *             CodeBuild mounts the entire file system. </p>
   */
  location?: string;

  /**
   * @public
   * <p>The location in the container where you mount the file system. </p>
   */
  mountPoint?: string;

  /**
   * @public
   * <p>The name used to access a file system created by Amazon EFS. CodeBuild creates an
   *             environment variable by appending the <code>identifier</code> in all capital letters to
   *                 <code>CODEBUILD_</code>. For example, if you specify <code>my_efs</code> for
   *                 <code>identifier</code>, a new environment variable is create named
   *                 <code>CODEBUILD_MY_EFS</code>. </p>
   *         <p> The <code>identifier</code> is used to mount your file system. </p>
   */
  identifier?: string;

  /**
   * @public
   * <p> The mount options for a file system created by Amazon EFS. The default mount options
   *             used by CodeBuild are
   *                 <code>nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2</code>. For
   *             more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-nfs-mount-settings.html">Recommended NFS Mount
   *                 Options</a>. </p>
   */
  mountOptions?: string;
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
 * @public
 * <p> Information about CloudWatch Logs for a build project. </p>
 */
export interface CloudWatchLogsConfig {
  /**
   * @public
   * <p>The current status of the logs in CloudWatch Logs for a build project. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code>: CloudWatch Logs are enabled for this build project.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code>: CloudWatch Logs are not enabled for this build project.</p>
   *             </li>
   *          </ul>
   */
  status: LogsConfigStatusType | string | undefined;

  /**
   * @public
   * <p> The group name of the logs in CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   */
  groupName?: string;

  /**
   * @public
   * <p> The prefix of the stream name of the CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   */
  streamName?: string;
}

/**
 * @public
 * <p> Information about S3 logs for a build project. </p>
 */
export interface S3LogsConfig {
  /**
   * @public
   * <p>The current status of the S3 build logs. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code>: S3 build logs are enabled for this build project.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code>: S3 build logs are not enabled for this build
   *                     project.</p>
   *             </li>
   *          </ul>
   */
  status: LogsConfigStatusType | string | undefined;

  /**
   * @public
   * <p> The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket
   *             name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then
   *             acceptable formats are <code>my-bucket/build-log</code> or
   *                 <code>arn:aws:s3:::my-bucket/build-log</code>. </p>
   */
  location?: string;

  /**
   * @public
   * <p> Set to true if you do not want your S3 build log output encrypted. By default S3
   *             build logs are encrypted. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * @public
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *         <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *         </note>
   *         <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                 <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *               <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *               <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                     <ul>
   *                   <li>
   *                             <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                         </li>
   *                   <li>
   *                             <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                         </li>
   *                </ul>
   *                     <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   */
  bucketOwnerAccess?: BucketOwnerAccess | string;
}

/**
 * @public
 * <p> Information about logs for a build project. These can be logs in CloudWatch Logs, built in a
 *             specified S3 bucket, or both. </p>
 */
export interface LogsConfig {
  /**
   * @public
   * <p> Information about CloudWatch Logs for a build project. CloudWatch Logs are enabled by default. </p>
   */
  cloudWatchLogs?: CloudWatchLogsConfig;

  /**
   * @public
   * <p> Information about logs built to an S3 bucket for a build project. S3 logs are not
   *             enabled by default. </p>
   */
  s3Logs?: S3LogsConfig;
}

/**
 * @public
 * <p>Additional information about a build phase that has an error. You can use this
 *             information for troubleshooting.</p>
 */
export interface PhaseContext {
  /**
   * @public
   * <p>The status code for the context of the build phase.</p>
   */
  statusCode?: string;

  /**
   * @public
   * <p>An explanation of the build phase's context. This might include a command ID and an
   *             exit code.</p>
   */
  message?: string;
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
 * @public
 * <p>Contains information about a stage for a batch build.</p>
 */
export interface BuildBatchPhase {
  /**
   * @public
   * <p>The name of the batch build phase. Valid values include:</p>
   *         <dl>
   *             <dt>COMBINE_ARTIFACTS</dt>
   *             <dd>
   *                     <p>Build output artifacts are being combined and uploaded to the output
   *                         location.</p>
   *                 </dd>
   *             <dt>DOWNLOAD_BATCHSPEC</dt>
   *             <dd>
   *                     <p>The batch build specification is being downloaded.</p>
   *                 </dd>
   *             <dt>FAILED</dt>
   *             <dd>
   *                     <p>One or more of the builds failed.</p>
   *                 </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                     <p>The batch build is in progress.</p>
   *                 </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                     <p>The batch build was stopped.</p>
   *                 </dd>
   *             <dt>SUBMITTED</dt>
   *             <dd>
   *                     <p>The btach build has been submitted.</p>
   *                 </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                     <p>The batch build succeeded.</p>
   *                 </dd>
   *          </dl>
   */
  phaseType?: BuildBatchPhaseType | string;

  /**
   * @public
   * <p>The current status of the batch build phase. Valid values include:</p>
   *         <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                     <p>The build phase failed.</p>
   *                 </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                     <p>The build phase faulted.</p>
   *                 </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                     <p>The build phase is still in progress.</p>
   *                 </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                     <p>The build phase stopped.</p>
   *                 </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                     <p>The build phase succeeded.</p>
   *                 </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                     <p>The build phase timed out.</p>
   *                 </dd>
   *          </dl>
   */
  phaseStatus?: StatusType | string;

  /**
   * @public
   * <p>When the batch build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>When the batch build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>How long, in seconds, between the starting and ending times of the batch build's
   *         phase.</p>
   */
  durationInSeconds?: number;

  /**
   * @public
   * <p>Additional information about the batch build phase. Especially to help troubleshoot a
   *             failed batch build.</p>
   */
  contexts?: PhaseContext[];
}

/**
 * @public
 * @enum
 */
export const SourceAuthType = {
  OAUTH: "OAUTH",
} as const;

/**
 * @public
 */
export type SourceAuthType = (typeof SourceAuthType)[keyof typeof SourceAuthType];

/**
 * @public
 * <p>Information about the authorization settings for CodeBuild to access the source code to be
 *             built.</p>
 *         <p>This information is for the CodeBuild console's use only. Your code should not get or set
 *             this information directly.</p>
 */
export interface SourceAuth {
  /**
   * @public
   * <note>
   *             <p> This data type is deprecated and is no longer accurate or used. </p>
   *         </note>
   *         <p>The authorization type to use. The only valid value is <code>OAUTH</code>, which
   *             represents the OAuth authorization type.</p>
   */
  type: SourceAuthType | string | undefined;

  /**
   * @public
   * <p>The resource value that applies to the specified authorization type.</p>
   */
  resource?: string;
}

/**
 * @public
 * <p>Contains information that defines how the CodeBuild build project reports the build status
 *             to the source provider. </p>
 */
export interface BuildStatusConfig {
  /**
   * @public
   * <p>Specifies the context of the build status CodeBuild sends to the source provider. The
   *             usage of this parameter depends on the source provider.</p>
   *         <dl>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                     <p>This parameter is used for the <code>name</code> parameter in the
   *                         Bitbucket commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p>
   *                 </dd>
   *             <dt>GitHub/GitHub Enterprise Server</dt>
   *             <dd>
   *                     <p>This parameter is used for the <code>context</code> parameter in the
   *                         GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p>
   *                 </dd>
   *          </dl>
   */
  context?: string;

  /**
   * @public
   * <p>Specifies the target url of the build status CodeBuild sends to the source provider. The
   *             usage of this parameter depends on the source provider.</p>
   *         <dl>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                     <p>This parameter is used for the <code>url</code> parameter in the Bitbucket
   *                         commit status. For more information, see <a href="https://developer.atlassian.com/bitbucket/api/2/reference/resource/repositories/%7Bworkspace%7D/%7Brepo_slug%7D/commit/%7Bnode%7D/statuses/build">build</a> in the Bitbucket API documentation.</p>
   *                 </dd>
   *             <dt>GitHub/GitHub Enterprise Server</dt>
   *             <dd>
   *                     <p>This parameter is used for the <code>target_url</code> parameter in the
   *                         GitHub commit status. For more information, see <a href="https://developer.github.com/v3/repos/statuses/#create-a-commit-status">Create a commit status</a> in the GitHub developer guide.</p>
   *                 </dd>
   *          </dl>
   */
  targetUrl?: string;
}

/**
 * @public
 * <p> Information about the Git submodules configuration for an CodeBuild build project.
 *         </p>
 */
export interface GitSubmodulesConfig {
  /**
   * @public
   * <p> Set to true to fetch Git submodules for your CodeBuild build project. </p>
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
  NO_SOURCE: "NO_SOURCE",
  S3: "S3",
} as const;

/**
 * @public
 */
export type SourceType = (typeof SourceType)[keyof typeof SourceType];

/**
 * @public
 * <p>Information about the build input source code for the build project.</p>
 */
export interface ProjectSource {
  /**
   * @public
   * <p>The type of repository that contains the source code to be built. Valid values
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CODECOMMIT</code>: The source code is in an CodeCommit repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CODEPIPELINE</code>: The source code settings are specified in the
   *                     source action of a pipeline in CodePipeline.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>GITHUB</code>: The source code is in a GitHub or GitHub Enterprise Cloud
   *                     repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>GITHUB_ENTERPRISE</code>: The source code is in a GitHub Enterprise
   *                     Server repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NO_SOURCE</code>: The project does not have input source code.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>S3</code>: The source code is in an Amazon S3 bucket.</p>
   *             </li>
   *          </ul>
   */
  type: SourceType | string | undefined;

  /**
   * @public
   * <p>Information about the location of the source code to be built. Valid values
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>For source code settings that are specified in the source action of a pipeline
   *                     in CodePipeline, <code>location</code> should not be specified. If it is specified,
   *                     CodePipeline ignores it. This is because CodePipeline uses the settings in a pipeline's source
   *                     action instead of this value.</p>
   *             </li>
   *             <li>
   *                 <p>For source code in an CodeCommit repository, the HTTPS clone URL to the repository
   *                     that contains the source code and the buildspec file (for example,
   *                         <code>https://git-codecommit.<region-ID>.amazonaws.com/v1/repos/<repo-name></code>).</p>
   *             </li>
   *             <li>
   *                 <p>For source code in an Amazon S3 input bucket, one of the following. </p>
   *                 <ul>
   *                   <li>
   *                         <p>The path to the ZIP file that contains the source code (for example,
   *                                 <code><bucket-name>/<path>/<object-name>.zip</code>). </p>
   *                     </li>
   *                   <li>
   *                         <p>The path to the folder that contains the source code (for example,
   *                                 <code><bucket-name>/<path-to-source-code>/<folder>/</code>). </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For source code in a GitHub repository, the HTTPS clone URL to the repository
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
   *                 <p>For source code in a Bitbucket repository, the HTTPS clone URL to the
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
   *         <p>
   *           If you specify <code>CODEPIPELINE</code> for the <code>Type</code> property, don't specify this
   *           property. For all of the other types, you must specify <code>Location</code>.
   *        </p>
   */
  location?: string;

  /**
   * @public
   * <p>Information about the Git clone depth for the build project.</p>
   */
  gitCloneDepth?: number;

  /**
   * @public
   * <p> Information about the Git submodules configuration for the build project. </p>
   */
  gitSubmodulesConfig?: GitSubmodulesConfig;

  /**
   * @public
   * <p>The buildspec file declaration to use for the builds in this build project.</p>
   *         <p> If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   */
  buildspec?: string;

  /**
   * @public
   * <p>Information about the authorization settings for CodeBuild to access the source code to be
   *             built.</p>
   *         <p>This information is for the CodeBuild console's use only. Your code should not get or set
   *             this information directly.</p>
   */
  auth?: SourceAuth;

  /**
   * @public
   * <p> Set to true to report the status of a build's start and finish to your source
   *             provider. This option is valid only when your source provider is GitHub, GitHub
   *             Enterprise, or Bitbucket. If this is set and you use a different source provider, an
   *             <code>invalidInputException</code> is thrown. </p>
   *             <p>To be able to report the build status to the source provider, the user associated with the source provider must
   * have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p>
   *             <p>The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *             <p>If your project's builds are triggered by a webhook, you must push a
   *               new commit to the repo for a change to this property to take
   *               effect.</p>
   */
  reportBuildStatus?: boolean;

  /**
   * @public
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   */
  buildStatusConfig?: BuildStatusConfig;

  /**
   * @public
   * <p>Enable this flag to ignore SSL warnings while connecting to the project source
   *           code.</p>
   */
  insecureSsl?: boolean;

  /**
   * @public
   * <p>An identifier for this project source. The identifier can only contain
   *           alphanumeric characters and underscores, and must be less than 128 characters in length. </p>
   */
  sourceIdentifier?: string;
}

/**
 * @public
 * <p> A source identifier and its corresponding version. </p>
 */
export interface ProjectSourceVersion {
  /**
   * @public
   * <p>An identifier for a source in the build project. The identifier can only contain
   *             alphanumeric characters and underscores, and must be less than 128 characters in length. </p>
   */
  sourceIdentifier: string | undefined;

  /**
   * @public
   * <p>The source version for the corresponding source identifier. If specified, must be one
   *           of:</p>
   *          <ul>
   *             <li>
   *               <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *               <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *                   corresponds to the version of the source code you want to build. If a pull
   *                   request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *                   (for example, <code>pr/25</code>). If a branch name is specified, the branch's
   *                   HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *                   used.</p>
   *             </li>
   *             <li>
   *               <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *                   version of the source code you want to build. If a branch name is specified, the
   *                   branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                   commit ID is used.</p>
   *             </li>
   *             <li>
   *               <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *                   file to use.</p>
   *             </li>
   *          </ul>
   *          <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *               with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   */
  sourceVersion: string | undefined;
}

/**
 * @public
 * <p>Information about the VPC configuration that CodeBuild accesses.</p>
 */
export interface VpcConfig {
  /**
   * @public
   * <p>The ID of the Amazon VPC.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  subnets?: string[];

  /**
   * @public
   * <p>A list of one or more security groups IDs in your Amazon VPC.</p>
   */
  securityGroupIds?: string[];
}

/**
 * @public
 * <p>Contains information about a batch build.</p>
 */
export interface BuildBatch {
  /**
   * @public
   * <p>The identifier of the batch build.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN of the batch build.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The date and time that the batch build started.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>The date and time that the batch build ended.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The current phase of the batch build.</p>
   */
  currentPhase?: string;

  /**
   * @public
   * <p>The status of the batch build.</p>
   */
  buildBatchStatus?: StatusType | string;

  /**
   * @public
   * <p>The identifier of the version of the source code to be built.</p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>The identifier of the resolved version of this batch build's source code.</p>
   *         <ul>
   *             <li>
   *                 <p>For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.</p>
   *             </li>
   *             <li>
   *                 <p>For CodePipeline, the source revision provided by CodePipeline.</p>
   *             </li>
   *             <li>
   *                 <p>For Amazon S3, this does not apply.</p>
   *             </li>
   *          </ul>
   */
  resolvedSourceVersion?: string;

  /**
   * @public
   * <p>The name of the batch build project.</p>
   */
  projectName?: string;

  /**
   * @public
   * <p>An array of <code>BuildBatchPhase</code> objects the specify the phases of the
   *             batch build.</p>
   */
  phases?: BuildBatchPhase[];

  /**
   * @public
   * <p>Information about the build input source code for the build project.</p>
   */
  source?: ProjectSource;

  /**
   * @public
   * <p>An array of <code>ProjectSource</code> objects that define the sources for the batch
   *             build.</p>
   */
  secondarySources?: ProjectSource[];

  /**
   * @public
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
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @public
   * <p>A <code>BuildArtifacts</code> object the defines the build artifacts for this batch build.</p>
   */
  artifacts?: BuildArtifacts;

  /**
   * @public
   * <p>An array of <code>BuildArtifacts</code> objects the define the build artifacts
   *             for this batch build.</p>
   */
  secondaryArtifacts?: BuildArtifacts[];

  /**
   * @public
   * <p>Information about the cache for the build project.</p>
   */
  cache?: ProjectCache;

  /**
   * @public
   * <p>Information about the build environment of the build project.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * @public
   * <p>The name of a service role used for builds in the batch.</p>
   */
  serviceRole?: string;

  /**
   * @public
   * <p> Information about logs for a build project. These can be logs in CloudWatch Logs, built in a
   *             specified S3 bucket, or both. </p>
   */
  logConfig?: LogsConfig;

  /**
   * @public
   * <p>Specifies the maximum amount of time, in minutes, that the build in a batch must be
   *             completed in.</p>
   */
  buildTimeoutInMinutes?: number;

  /**
   * @public
   * <p>Specifies the amount of time, in minutes, that the batch build is allowed to be queued
   *             before it times out.</p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * @public
   * <p>Indicates if the batch build is complete.</p>
   */
  complete?: boolean;

  /**
   * @public
   * <p>The entity that started the batch build. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>If CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If an IAM user started the build, the user's name.</p>
   *             </li>
   *             <li>
   *                 <p>If the Jenkins plugin for CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   */
  initiator?: string;

  /**
   * @public
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the batch build output
   *             artifacts.</p>
   *         <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>The number of the batch build. For each project, the <code>buildBatchNumber</code> of its
   *             first batch build is <code>1</code>. The <code>buildBatchNumber</code> of each subsequent
   *             batch build is incremented by <code>1</code>. If a batch build is deleted, the
   *                 <code>buildBatchNumber</code> of other batch builds does not change.</p>
   */
  buildBatchNumber?: number;

  /**
   * @public
   * <p>An array of <code>ProjectFileSystemLocation</code> objects for the batch build
   *             project. A <code>ProjectFileSystemLocation</code> object specifies the
   *                 <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *                 <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon
   *             Elastic File System. </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @public
   * <p>Contains configuration information about a batch build project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * @public
   * <p>An array of <code>BuildGroup</code> objects that define the build groups for the
   *             batch build.</p>
   */
  buildGroups?: BuildGroup[];

  /**
   * @public
   * <p>Specifies if session debugging is enabled for this batch build. For more information, see
   *   <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.</p>
   */
  debugSessionEnabled?: boolean;
}

/**
 * @public
 */
export interface BatchGetBuildBatchesOutput {
  /**
   * @public
   * <p>An array of <code>BuildBatch</code> objects that represent the retrieved batch
   *             builds.</p>
   */
  buildBatches?: BuildBatch[];

  /**
   * @public
   * <p>An array that contains the identifiers of any batch builds that are not found.</p>
   */
  buildBatchesNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetBuildsInput {
  /**
   * @public
   * <p>The IDs of the builds.</p>
   */
  ids: string[] | undefined;
}

/**
 * @public
 * <p>Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a
 *                 running build in Session Manager</a>.</p>
 */
export interface DebugSession {
  /**
   * @public
   * <p>Specifies if session debugging is enabled for this build.</p>
   */
  sessionEnabled?: boolean;

  /**
   * @public
   * <p>Contains the identifier of the Session Manager session used for the build. To work with
   *             the paused build, you open this session to examine, control, and resume the
   *             build.</p>
   */
  sessionTarget?: string;
}

/**
 * @public
 * <p>Contains information about an exported environment variable. </p>
 *         <p>Exported environment variables are used in conjunction with CodePipeline to export
 *   environment variables from the current build stage to subsequent stages in the pipeline.
 *   For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p>
 *         <note>
 *             <p> During a build, the value of a variable is available starting with the
 *                   <code>install</code> phase. It can be updated between the start of the
 *                   <code>install</code> phase and the end of the <code>post_build</code> phase.
 *               After the <code>post_build</code> phase ends, the value of exported variables cannot
 *               change.</p>
 *          </note>
 */
export interface ExportedEnvironmentVariable {
  /**
   * @public
   * <p>The name of the exported environment variable.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The value assigned to the exported environment variable.</p>
   */
  value?: string;
}

/**
 * @public
 * <p>Information about build logs in CloudWatch Logs.</p>
 */
export interface LogsLocation {
  /**
   * @public
   * <p>The name of the CloudWatch Logs group for the build logs.</p>
   */
  groupName?: string;

  /**
   * @public
   * <p>The name of the CloudWatch Logs stream for the build logs.</p>
   */
  streamName?: string;

  /**
   * @public
   * <p>The URL to an individual build log in CloudWatch Logs.</p>
   */
  deepLink?: string;

  /**
   * @public
   * <p> The URL to a build log in an S3 bucket. </p>
   */
  s3DeepLink?: string;

  /**
   * @public
   * <p> The ARN of CloudWatch Logs for a build project. Its format is
   *                 <code>arn:$\{Partition\}:logs:$\{Region\}:$\{Account\}:log-group:$\{LogGroupName\}:log-stream:$\{LogStreamName\}</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html#amazoncloudwatchlogs-resources-for-iam-policies">Resources Defined by CloudWatch Logs</a>. </p>
   */
  cloudWatchLogsArn?: string;

  /**
   * @public
   * <p> The ARN of S3 logs for a build project. Its format is
   *                 <code>arn:$\{Partition\}:s3:::$\{BucketName\}/$\{ObjectName\}</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html#amazons3-resources-for-iam-policies">Resources Defined by Amazon S3</a>. </p>
   */
  s3LogsArn?: string;

  /**
   * @public
   * <p> Information about CloudWatch Logs for a build project. </p>
   */
  cloudWatchLogs?: CloudWatchLogsConfig;

  /**
   * @public
   * <p> Information about S3 logs for a build project. </p>
   */
  s3Logs?: S3LogsConfig;
}

/**
 * @public
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  /**
   * @public
   * <p>The ID of the subnet.</p>
   */
  subnetId?: string;

  /**
   * @public
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;
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
 * @public
 * <p>Information about a stage for a build.</p>
 */
export interface BuildPhase {
  /**
   * @public
   * <p>The name of the build phase. Valid values include:</p>
   *         <dl>
   *             <dt>BUILD</dt>
   *             <dd>
   *                     <p>Core build activities typically occur in this build phase.</p>
   *                 </dd>
   *             <dt>COMPLETED</dt>
   *             <dd>
   *                     <p>The build has been completed.</p>
   *                 </dd>
   *             <dt>DOWNLOAD_SOURCE</dt>
   *             <dd>
   *                     <p>Source code is being downloaded in this build phase.</p>
   *                 </dd>
   *             <dt>FINALIZING</dt>
   *             <dd>
   *                     <p>The build process is completing in this build phase.</p>
   *                 </dd>
   *             <dt>INSTALL</dt>
   *             <dd>
   *                     <p>Installation activities typically occur in this build phase.</p>
   *                 </dd>
   *             <dt>POST_BUILD</dt>
   *             <dd>
   *                     <p>Post-build activities typically occur in this build phase.</p>
   *                 </dd>
   *             <dt>PRE_BUILD</dt>
   *             <dd>
   *                     <p>Pre-build activities typically occur in this build phase.</p>
   *                 </dd>
   *             <dt>PROVISIONING</dt>
   *             <dd>
   *                     <p>The build environment is being set up.</p>
   *                 </dd>
   *             <dt>QUEUED</dt>
   *             <dd>
   *                     <p>The build has been submitted and is queued behind other submitted
   *                         builds.</p>
   *                 </dd>
   *             <dt>SUBMITTED</dt>
   *             <dd>
   *                     <p>The build has been submitted.</p>
   *                 </dd>
   *             <dt>UPLOAD_ARTIFACTS</dt>
   *             <dd>
   *                     <p>Build output artifacts are being uploaded to the output location.</p>
   *                 </dd>
   *          </dl>
   */
  phaseType?: BuildPhaseType | string;

  /**
   * @public
   * <p>The current status of the build phase. Valid values include:</p>
   *         <dl>
   *             <dt>FAILED</dt>
   *             <dd>
   *                     <p>The build phase failed.</p>
   *                 </dd>
   *             <dt>FAULT</dt>
   *             <dd>
   *                     <p>The build phase faulted.</p>
   *                 </dd>
   *             <dt>IN_PROGRESS</dt>
   *             <dd>
   *                     <p>The build phase is still in progress.</p>
   *                 </dd>
   *             <dt>STOPPED</dt>
   *             <dd>
   *                     <p>The build phase stopped.</p>
   *                 </dd>
   *             <dt>SUCCEEDED</dt>
   *             <dd>
   *                     <p>The build phase succeeded.</p>
   *                 </dd>
   *             <dt>TIMED_OUT</dt>
   *             <dd>
   *                     <p>The build phase timed out.</p>
   *                 </dd>
   *          </dl>
   */
  phaseStatus?: StatusType | string;

  /**
   * @public
   * <p>When the build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>When the build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>How long, in seconds, between the starting and ending times of the build's
   *             phase.</p>
   */
  durationInSeconds?: number;

  /**
   * @public
   * <p>Additional information about a build phase, especially to help troubleshoot a failed
   *             build.</p>
   */
  contexts?: PhaseContext[];
}

/**
 * @public
 * <p>Information about a build.</p>
 */
export interface Build {
  /**
   * @public
   * <p>The unique ID for the build.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>The number of the build. For each project, the <code>buildNumber</code> of its first
   *             build is <code>1</code>. The <code>buildNumber</code> of each subsequent build is
   *             incremented by <code>1</code>. If a build is deleted, the <code>buildNumber</code> of
   *             other builds does not change.</p>
   */
  buildNumber?: number;

  /**
   * @public
   * <p>When the build process started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * @public
   * <p>When the build process ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * @public
   * <p>The current build phase.</p>
   */
  currentPhase?: string;

  /**
   * @public
   * <p>The current status of the build. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code>: The build failed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAULT</code>: The build faulted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>IN_PROGRESS</code>: The build is still in progress.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>STOPPED</code>: The build stopped.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUCCEEDED</code>: The build succeeded.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>TIMED_OUT</code>: The build timed out.</p>
   *             </li>
   *          </ul>
   */
  buildStatus?: StatusType | string;

  /**
   * @public
   * <p>Any version identifier for the version of the source code to be built. If
   *                 <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p> An identifier for the version of this build's source code. </p>
   *         <ul>
   *             <li>
   *                 <p> For CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. </p>
   *             </li>
   *             <li>
   *                 <p> For CodePipeline, the source revision provided by CodePipeline. </p>
   *             </li>
   *             <li>
   *                 <p> For Amazon S3, this does not apply. </p>
   *             </li>
   *          </ul>
   */
  resolvedSourceVersion?: string;

  /**
   * @public
   * <p>The name of the CodeBuild project.</p>
   */
  projectName?: string;

  /**
   * @public
   * <p>Information about all previous build phases that are complete and information about
   *             any current build phase that is not yet complete.</p>
   */
  phases?: BuildPhase[];

  /**
   * @public
   * <p>Information about the source code to be built.</p>
   */
  source?: ProjectSource;

  /**
   * @public
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * @public
   * <p> An array of <code>ProjectSourceVersion</code> objects. Each
   *                 <code>ProjectSourceVersion</code> must be one of: </p>
   *         <ul>
   *             <li>
   *                 <p>For CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                 <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *                     corresponds to the version of the source code you want to build. If a pull
   *                     request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *                     (for example, <code>pr/25</code>). If a branch name is specified, the branch's
   *                     HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is
   *                     used.</p>
   *             </li>
   *             <li>
   *                 <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the
   *                     version of the source code you want to build. If a branch name is specified, the
   *                     branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                     commit ID is used.</p>
   *             </li>
   *             <li>
   *                 <p>For Amazon S3: the version ID of the object that represents the build input ZIP
   *                     file to use.</p>
   *             </li>
   *          </ul>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @public
   * <p>Information about the output artifacts for the build.</p>
   */
  artifacts?: BuildArtifacts;

  /**
   * @public
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: BuildArtifacts[];

  /**
   * @public
   * <p>Information about the cache for the build.</p>
   */
  cache?: ProjectCache;

  /**
   * @public
   * <p>Information about the build environment for this build.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * @public
   * <p>The name of a service role used for this build.</p>
   */
  serviceRole?: string;

  /**
   * @public
   * <p>Information about the build's logs in CloudWatch Logs.</p>
   */
  logs?: LogsLocation;

  /**
   * @public
   * <p>How long, in minutes, for CodeBuild to wait before timing out this build if it does not
   *             get marked as completed.</p>
   */
  timeoutInMinutes?: number;

  /**
   * @public
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * @public
   * <p>Whether the build is complete. True if complete; otherwise, false.</p>
   */
  buildComplete?: boolean;

  /**
   * @public
   * <p>The entity that started the build. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>If CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If an IAM user started the build, the user's name (for example,
   *                         <code>MyUserName</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If the Jenkins plugin for CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   */
  initiator?: string;

  /**
   * @public
   * <p>If your CodeBuild project accesses resources in an Amazon VPC, you provide this parameter
   *             that identifies the VPC ID and the list of security group IDs and subnet IDs. The
   *             security groups and subnets must belong to the same VPC. You must provide at least one
   *             security group and one subnet ID.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Describes a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *             artifacts.</p>
   *         <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>A list of exported environment variables for this build.</p>
   *         <p>Exported environment variables are used in conjunction with CodePipeline to export
   *   environment variables from the current build stage to subsequent stages in the pipeline.
   *   For more information, see <a href="https://docs.aws.amazon.com/codepipeline/latest/userguide/actions-variables.html">Working with variables</a> in the <i>CodePipeline User Guide</i>.</p>
   */
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[];

  /**
   * @public
   * <p> An array of the ARNs associated with this build's reports. </p>
   */
  reportArns?: string[];

  /**
   * @public
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @public
   * <p>Contains information about the debug session for this build.</p>
   */
  debugSession?: DebugSession;

  /**
   * @public
   * <p>The ARN of the batch build that this build is a member of, if applicable.</p>
   */
  buildBatchArn?: string;
}

/**
 * @public
 */
export interface BatchGetBuildsOutput {
  /**
   * @public
   * <p>Information about the requested builds.</p>
   */
  builds?: Build[];

  /**
   * @public
   * <p>The IDs of builds for which information could not be found.</p>
   */
  buildsNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetProjectsInput {
  /**
   * @public
   * <p>The names or ARNs of the build projects. To get information about a project shared
   *             with your Amazon Web Services account, its ARN must be specified. You cannot specify a shared project
   *             using its name.</p>
   */
  names: string[] | undefined;
}

/**
 * @public
 * <p>Information about the build output artifacts for the build project.</p>
 */
export interface ProjectArtifacts {
  /**
   * @public
   * <p>The type of build output artifact. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CODEPIPELINE</code>: The build project has build output generated
   *                     through CodePipeline. </p>
   *                 <note>
   *                     <p>The <code>CODEPIPELINE</code> type is not supported for
   *                             <code>secondaryArtifacts</code>.</p>
   *                 </note>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NO_ARTIFACTS</code>: The build project does not produce any build
   *                     output.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>S3</code>: The build project stores build output in Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  type: ArtifactsType | string | undefined;

  /**
   * @public
   * <p>Information about the build output artifact location:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output locations
   *                     instead of CodeBuild.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output
   *                     bucket.</p>
   *             </li>
   *          </ul>
   */
  location?: string;

  /**
   * @public
   * <p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that CodeBuild
   *             uses to name and store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>S3</code>, this is the path to the output
   *                     artifact. If <code>path</code> is not specified, <code>path</code> is not
   *                     used.</p>
   *             </li>
   *          </ul>
   *         <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>,
   *                 <code>namespaceType</code> is set to <code>NONE</code>, and <code>name</code> is set
   *             to <code>MyArtifact.zip</code>, the output artifact is stored in the output bucket at
   *                 <code>MyArtifacts/MyArtifact.zip</code>.</p>
   */
  path?: string;

  /**
   * @public
   * <p>Along with <code>path</code> and <code>name</code>, the pattern that CodeBuild uses to
   *             determine the name and location to store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>BUILD_ID</code>: Include the build ID in the location of the
   *                             build output artifact.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>NONE</code>: Do not include the build ID. This is the default if
   *                                 <code>namespaceType</code> is not specified.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   *         <p>For example, if <code>path</code> is set to <code>MyArtifacts</code>,
   *                 <code>namespaceType</code> is set to <code>BUILD_ID</code>, and <code>name</code> is
   *             set to <code>MyArtifact.zip</code>, the output artifact is stored in
   *                 <code>MyArtifacts/<build-ID>/MyArtifact.zip</code>.</p>
   */
  namespaceType?: ArtifactNamespace | string;

  /**
   * @public
   * <p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that CodeBuild
   *             uses to name and store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output names instead
   *                     of CodeBuild.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>S3</code>, this is the name of the output
   *                     artifact object. If you set the name to be a forward slash ("/"), the artifact
   *                     is stored in the root of the output bucket.</p>
   *             </li>
   *          </ul>
   *         <p>For example:</p>
   *         <ul>
   *             <li>
   *                 <p> If <code>path</code> is set to <code>MyArtifacts</code>,
   *                         <code>namespaceType</code> is set to <code>BUILD_ID</code>, and
   *                         <code>name</code> is set to <code>MyArtifact.zip</code>, then the output
   *                     artifact is stored in <code>MyArtifacts/<build-ID>/MyArtifact.zip</code>. </p>
   *             </li>
   *             <li>
   *                 <p> If <code>path</code> is empty, <code>namespaceType</code> is set to
   *                         <code>NONE</code>, and <code>name</code> is set to "<code>/</code>", the
   *                     output artifact is stored in the root of the output bucket. </p>
   *             </li>
   *             <li>
   *                 <p> If <code>path</code> is set to <code>MyArtifacts</code>,
   *                         <code>namespaceType</code> is set to <code>BUILD_ID</code>, and
   *                         <code>name</code> is set to "<code>/</code>", the output artifact is stored
   *                     in <code>MyArtifacts/<build-ID></code>. </p>
   *             </li>
   *          </ul>
   */
  name?: string;

  /**
   * @public
   * <p>The type of build output artifact to create:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, CodePipeline ignores this
   *                     value if specified. This is because CodePipeline manages its build output artifacts
   *                     instead of CodeBuild.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>NO_ARTIFACTS</code>, this value is
   *                     ignored if specified, because no build output is produced.</p>
   *             </li>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>S3</code>, valid values include:</p>
   *                 <ul>
   *                   <li>
   *                         <p>
   *                         <code>NONE</code>: CodeBuild creates in the output bucket a folder that
   *                             contains the build output. This is the default if <code>packaging</code>
   *                             is not specified.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>ZIP</code>: CodeBuild creates in the output bucket a ZIP file that
   *                             contains the build output.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  packaging?: ArtifactPackaging | string;

  /**
   * @public
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * @public
   * <p> Set to true if you do not want your output artifacts encrypted. This option is valid
   *             only if your artifacts type is Amazon S3. If this is set with another artifacts type, an
   *             invalidInputException is thrown. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * @public
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;

  /**
   * @public
   * <p>Specifies the bucket owner's access for objects that another account uploads to their
   *             Amazon S3 bucket. By default, only the account that uploads the objects to the bucket has
   *             access to these objects. This property allows you to give the bucket owner access to
   *             these objects.</p>
   *         <note>
   *             <p>To use this property, your CodeBuild service role must have the
   *                     <code>s3:PutBucketAcl</code> permission. This permission allows CodeBuild to modify
   *                 the access control list for the bucket.</p>
   *         </note>
   *         <p>This property can be one of the following values:</p>
   *          <dl>
   *             <dt>NONE</dt>
   *             <dd>
   *                 <p>The bucket owner does not have access to the objects. This is the
   *                         default.</p>
   *             </dd>
   *             <dt>READ_ONLY</dt>
   *             <dd>
   *               <p>The bucket owner has read-only access to the objects. The uploading account
   *                         retains ownership of the objects.</p>
   *             </dd>
   *             <dt>FULL</dt>
   *             <dd>
   *               <p>The bucket owner has full access to the objects. Object ownership is determined
   *                         by the following criteria:</p>
   *                     <ul>
   *                   <li>
   *                             <p>If the bucket is configured with the <b>Bucket
   *                                     owner preferred</b> setting, the bucket owner owns the
   *                                 objects. The uploading account will have object access as specified
   *                                 by the bucket's policy.</p>
   *                         </li>
   *                   <li>
   *                             <p>Otherwise, the uploading account retains ownership of the
   *                                 objects.</p>
   *                         </li>
   *                </ul>
   *                     <p>For more information about Amazon S3 object ownership, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/about-object-ownership.html">Controlling ownership of uploaded objects using S3
   *                             Object Ownership</a> in the <i>Amazon Simple Storage Service User
   *                         Guide</i>.</p>
   *             </dd>
   *          </dl>
   */
  bucketOwnerAccess?: BucketOwnerAccess | string;
}

/**
 * @public
 * <p>Information about the build badge for the build project.</p>
 */
export interface ProjectBadge {
  /**
   * @public
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *             badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * @public
   * <p>The publicly-accessible URL through which you can access the build badge for your
   *             project. </p>
   */
  badgeRequestUrl?: string;
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
 * <p>A tag, consisting of a key and a value.</p>
 *         <p>This tag is available for use by Amazon Web Services services that support tags in CodeBuild.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>The tag's key.</p>
   */
  key?: string;

  /**
   * @public
   * <p>The tag's value.</p>
   */
  value?: string;
}

/**
 * @public
 * @enum
 */
export const WebhookBuildType = {
  BUILD: "BUILD",
  BUILD_BATCH: "BUILD_BATCH",
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
} as const;

/**
 * @public
 */
export type WebhookFilterType = (typeof WebhookFilterType)[keyof typeof WebhookFilterType];

/**
 * @public
 * <p> A filter used to determine which webhooks trigger a build. </p>
 */
export interface WebhookFilter {
  /**
   * @public
   * <p> The type of webhook filter. There are six webhook filter types: <code>EVENT</code>,
   *                 <code>ACTOR_ACCOUNT_ID</code>, <code>HEAD_REF</code>, <code>BASE_REF</code>,
   *                 <code>FILE_PATH</code>, and <code>COMMIT_MESSAGE</code>. </p>
   *         <dl>
   *             <dt>
   *                EVENT
   *             </dt>
   *             <dd>
   *                     <p> A webhook event triggers a build when the provided <code>pattern</code>
   *                         matches one of five event types: <code>PUSH</code>,
   *                             <code>PULL_REQUEST_CREATED</code>, <code>PULL_REQUEST_UPDATED</code>,
   *                             <code>PULL_REQUEST_REOPENED</code>, and
   *                         <code>PULL_REQUEST_MERGED</code>. The <code>EVENT</code> patterns are
   *                         specified as a comma-separated string. For example, <code>PUSH,
   *                             PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> filters all push, pull
   *                         request created, and pull request updated events. </p>
   *                     <note>
   *                         <p> The <code>PULL_REQUEST_REOPENED</code> works with GitHub and GitHub
   *                             Enterprise only. </p>
   *                     </note>
   *                 </dd>
   *             <dt>
   *                ACTOR_ACCOUNT_ID
   *             </dt>
   *             <dd>
   *                     <p> A webhook event triggers a build when a GitHub, GitHub Enterprise, or
   *                         Bitbucket account ID matches the regular expression <code>pattern</code>.
   *                     </p>
   *                 </dd>
   *             <dt>
   *                HEAD_REF
   *             </dt>
   *             <dd>
   *                     <p> A webhook event triggers a build when the head reference matches the
   *                         regular expression <code>pattern</code>. For example,
   *                             <code>refs/heads/branch-name</code> and <code>refs/tags/tag-name</code>. </p>
   *                     <p> Works with GitHub and GitHub Enterprise push, GitHub and GitHub
   *                         Enterprise pull request, Bitbucket push, and Bitbucket pull request events.
   *                     </p>
   *                 </dd>
   *             <dt>
   *                BASE_REF
   *             </dt>
   *             <dd>
   *                     <p> A webhook event triggers a build when the base reference matches the
   *                         regular expression <code>pattern</code>. For example,
   *                             <code>refs/heads/branch-name</code>. </p>
   *                     <note>
   *                         <p> Works with pull request events only. </p>
   *                     </note>
   *                 </dd>
   *             <dt>
   *                FILE_PATH
   *             </dt>
   *             <dd>
   *                     <p> A webhook triggers a build when the path of a changed file matches the
   *                         regular expression <code>pattern</code>. </p>
   *                     <note>
   *                         <p> Works with GitHub and Bitbucket events push and pull requests events.
   *                             Also works with GitHub Enterprise push events, but does not work with
   *                             GitHub Enterprise pull request events. </p>
   *                     </note>
   *                 </dd>
   *             <dt>COMMIT_MESSAGE</dt>
   *             <dd>
   *                     <p>A webhook triggers a build when the head commit message matches the
   *                         regular expression <code>pattern</code>.</p>
   *                     <note>
   *                         <p> Works with GitHub and Bitbucket events push and pull requests events.
   *                             Also works with GitHub Enterprise push events, but does not work with
   *                             GitHub Enterprise pull request events. </p>
   *                     </note>
   *                 </dd>
   *          </dl>
   */
  type: WebhookFilterType | string | undefined;

  /**
   * @public
   * <p> For a <code>WebHookFilter</code> that uses <code>EVENT</code> type, a comma-separated
   *             string that specifies one or more events. For example, the webhook filter <code>PUSH,
   *                 PULL_REQUEST_CREATED, PULL_REQUEST_UPDATED</code> allows all push, pull request
   *             created, and pull request updated events to trigger a build. </p>
   *         <p> For a <code>WebHookFilter</code> that uses any of the other filter types, a regular
   *             expression pattern. For example, a <code>WebHookFilter</code> that uses
   *                 <code>HEAD_REF</code> for its <code>type</code> and the pattern
   *                 <code>^refs/heads/</code> triggers a build when the head reference is a branch with
   *             a reference name <code>refs/heads/branch-name</code>. </p>
   */
  pattern: string | undefined;

  /**
   * @public
   * <p> Used to indicate that the <code>pattern</code> determines which webhook events do not
   *             trigger a build. If true, then a webhook event that does not match the
   *                 <code>pattern</code> triggers a build. If false, then a webhook event that matches
   *             the <code>pattern</code> triggers a build. </p>
   */
  excludeMatchedPattern?: boolean;
}

/**
 * @public
 * <p>Information about a webhook that connects repository events to a build project in
 *       CodeBuild.</p>
 */
export interface Webhook {
  /**
   * @public
   * <p>The URL to the webhook.</p>
   */
  url?: string;

  /**
   * @public
   * <p>The CodeBuild endpoint where webhook events are sent.</p>
   */
  payloadUrl?: string;

  /**
   * @public
   * <p>The secret token of the associated repository. </p>
   *          <note>
   *             <p>A Bitbucket webhook does not support <code>secret</code>. </p>
   *          </note>
   */
  secret?: string;

  /**
   * @public
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p>It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   */
  branchFilter?: string;

  /**
   * @public
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   */
  filterGroups?: WebhookFilter[][];

  /**
   * @public
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;

  /**
   * @public
   * <p>A timestamp that indicates the last time a repository's secret token was modified.
   *     </p>
   */
  lastModifiedSecret?: Date;
}

/**
 * @public
 * <p>Information about a build project.</p>
 */
export interface Project {
  /**
   * @public
   * <p>The name of the build project.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   */
  arn?: string;

  /**
   * @public
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information about the build input source code for this build project.</p>
   */
  source?: ProjectSource;

  /**
   * @public
   * <p>An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * @public
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
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @public
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts?: ProjectArtifacts;

  /**
   * @public
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @public
   * <p>Information about the cache for the build project.</p>
   */
  cache?: ProjectCache;

  /**
   * @public
   * <p>Information about the build environment for this build project.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * @public
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services
   *       on behalf of the Amazon Web Services account.</p>
   */
  serviceRole?: string;

  /**
   * @public
   * <p>How long, in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before timing out any
   *       related build that did not get marked as completed. The default is 60 minutes.</p>
   */
  timeoutInMinutes?: number;

  /**
   * @public
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * @public
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
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>When the build project was created, expressed in Unix time format.</p>
   */
  created?: Date;

  /**
   * @public
   * <p>When the build project's settings were last modified, expressed in Unix time
   *       format.</p>
   */
  lastModified?: Date;

  /**
   * @public
   * <p>Information about a webhook that connects repository events to a build project in
   *       CodeBuild.</p>
   */
  webhook?: Webhook;

  /**
   * @public
   * <p>Information about the VPC configuration that CodeBuild accesses.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Information about the build badge for the build project.</p>
   */
  badge?: ProjectBadge;

  /**
   * @public
   * <p>Information about logs for the build project. A project can create logs in CloudWatch Logs, an
   *       S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * @public
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @public
   * <p>A <a>ProjectBuildBatchConfig</a>
   *  object that defines the batch build
   *             options for the project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * @public
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   */
  concurrentBuildLimit?: number;

  /**
   * @public
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *
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
   */
  projectVisibility?: ProjectVisibilityType | string;

  /**
   * @public
   * <p>Contains the project identifier used with the public build APIs. </p>
   */
  publicProjectAlias?: string;

  /**
   * @public
   * <p>The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for
   *       the project's builds.</p>
   */
  resourceAccessRole?: string;
}

/**
 * @public
 */
export interface BatchGetProjectsOutput {
  /**
   * @public
   * <p>Information about the requested build projects.</p>
   */
  projects?: Project[];

  /**
   * @public
   * <p>The names of build projects for which information could not be found.</p>
   */
  projectsNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetReportGroupsInput {
  /**
   * @public
   * <p>
   *       An array of report group ARNs that identify the report groups to return.
   *     </p>
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
 * @public
 * <p> Information about the S3 bucket where the raw data of a report are exported. </p>
 */
export interface S3ReportExportConfig {
  /**
   * @public
   * <p> The name of the S3 bucket where the raw data of a report are exported. </p>
   */
  bucket?: string;

  /**
   * @public
   * <p>The Amazon Web Services account identifier of the owner of the Amazon S3 bucket. This allows report data to be exported to an Amazon S3 bucket
   *         that is owned by an account other than the account running the build.</p>
   */
  bucketOwner?: string;

  /**
   * @public
   * <p> The path to the exported report's raw data results. </p>
   */
  path?: string;

  /**
   * @public
   * <p> The type of build output artifact to create. Valid values include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>NONE</code>: CodeBuild creates the raw data in the output bucket. This
   *                     is the default if packaging is not specified. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ZIP</code>: CodeBuild creates a ZIP file with the raw data in the
   *                     output bucket. </p>
   *             </li>
   *          </ul>
   */
  packaging?: ReportPackagingType | string;

  /**
   * @public
   * <p> The encryption key for the report's encrypted raw data. </p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p> A boolean value that specifies if the results of a report are encrypted. </p>
   */
  encryptionDisabled?: boolean;
}

/**
 * @public
 * <p> Information about the location where the run of a report is exported. </p>
 */
export interface ReportExportConfig {
  /**
   * @public
   * <p> The export configuration type. Valid values are: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>S3</code>: The report results are exported to an S3 bucket. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>NO_EXPORT</code>: The report results are not exported. </p>
   *             </li>
   *          </ul>
   */
  exportConfigType?: ReportExportConfigType | string;

  /**
   * @public
   * <p> A <code>S3ReportExportConfig</code> object that contains information about the S3
   *             bucket where the run of a report is exported. </p>
   */
  s3Destination?: S3ReportExportConfig;
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
 * @public
 * <p>A series of reports. Each report contains information about the results from running a
 *             series of test cases. You specify the test cases for a report group in the buildspec for
 *             a build project using one or more paths to the test case files. </p>
 */
export interface ReportGroup {
  /**
   * @public
   * <p>The ARN of the <code>ReportGroup</code>.
   *     </p>
   */
  arn?: string;

  /**
   * @public
   * <p>The name of the <code>ReportGroup</code>.
   *     </p>
   */
  name?: string;

  /**
   * @public
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
   */
  type?: ReportType | string;

  /**
   * @public
   * <p>Information about the destination where the raw data of this <code>ReportGroup</code>
   *             is exported. </p>
   */
  exportConfig?: ReportExportConfig;

  /**
   * @public
   * <p>The date and time this <code>ReportGroup</code> was created. </p>
   */
  created?: Date;

  /**
   * @public
   * <p>The date and time this <code>ReportGroup</code> was last modified. </p>
   */
  lastModified?: Date;

  /**
   * @public
   * <p>A list of tag key and value pairs associated with this report group. </p>
   *         <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   */
  tags?: Tag[];

  /**
   * @public
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
   */
  status?: ReportGroupStatusType | string;
}

/**
 * @public
 */
export interface BatchGetReportGroupsOutput {
  /**
   * @public
   * <p>
   *       The array of report groups returned by <code>BatchGetReportGroups</code>.
   *     </p>
   */
  reportGroups?: ReportGroup[];

  /**
   * @public
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>ReportGroup</code>.
   *     </p>
   */
  reportGroupsNotFound?: string[];
}

/**
 * @public
 */
export interface BatchGetReportsInput {
  /**
   * @public
   * <p>
   *       An array of ARNs that identify the <code>Report</code> objects to return.
   *     </p>
   */
  reportArns: string[] | undefined;
}

/**
 * @public
 * <p>Contains a summary of a code coverage report.</p>
 *         <p>Line coverage measures how many statements your tests cover. A statement is a single
 *       instruction, not including comments, conditionals, etc.</p>
 *         <p>Branch coverage determines if your tests cover every possible branch of a control
 *     structure, such as an <code>if</code> or <code>case</code> statement.</p>
 */
export interface CodeCoverageReportSummary {
  /**
   * @public
   * <p>The percentage of lines that are covered by your tests.</p>
   */
  lineCoveragePercentage?: number;

  /**
   * @public
   * <p>The number of lines that are covered by your tests.</p>
   */
  linesCovered?: number;

  /**
   * @public
   * <p>The number of lines that are not covered by your tests.</p>
   */
  linesMissed?: number;

  /**
   * @public
   * <p>The percentage of branches that are covered by your tests.</p>
   */
  branchCoveragePercentage?: number;

  /**
   * @public
   * <p>The number of conditional branches that are covered by your tests.</p>
   */
  branchesCovered?: number;

  /**
   * @public
   * <p>The number of conditional branches that are not covered by your tests.</p>
   */
  branchesMissed?: number;
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
 * @public
 * <p> Information about a test report. </p>
 */
export interface TestReportSummary {
  /**
   * @public
   * <p> The number of test cases in this <code>TestReportSummary</code>. The total includes
   *             truncated test cases. </p>
   */
  total: number | undefined;

  /**
   * @public
   * <p> A map that contains the number of each type of status returned by the test results in
   *             this <code>TestReportSummary</code>. </p>
   */
  statusCounts: Record<string, number> | undefined;

  /**
   * @public
   * <p> The number of nanoseconds it took to run all of the test cases in this report.
   *         </p>
   */
  durationInNanoSeconds: number | undefined;
}

/**
 * @public
 * <p>Information about the results from running a series of test cases during the run of a
 *             build project. The test cases are specified in the buildspec for the build project using
 *             one or more paths to the test case files. You can specify any type of tests you want,
 *             such as unit tests, integration tests, and functional tests. </p>
 */
export interface Report {
  /**
   * @public
   * <p> The ARN of the report run. </p>
   */
  arn?: string;

  /**
   * @public
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
   */
  type?: ReportType | string;

  /**
   * @public
   * <p> The name of the report that was run. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The ARN of the report group associated with this report. </p>
   */
  reportGroupArn?: string;

  /**
   * @public
   * <p> The ARN of the build run that generated this report. </p>
   */
  executionId?: string;

  /**
   * @public
   * <p> The status of this report. </p>
   */
  status?: ReportStatusType | string;

  /**
   * @public
   * <p> The date and time this report run occurred. </p>
   */
  created?: Date;

  /**
   * @public
   * <p> The date and time a report expires. A report expires 30 days after it is created. An
   *       expired report is not available to view in CodeBuild. </p>
   */
  expired?: Date;

  /**
   * @public
   * <p> Information about where the raw data used to generate this report was exported.
   *     </p>
   */
  exportConfig?: ReportExportConfig;

  /**
   * @public
   * <p> A boolean that specifies if this report run is truncated. The list of test cases is
   *       truncated after the maximum number of test cases is reached. </p>
   */
  truncated?: boolean;

  /**
   * @public
   * <p> A <code>TestReportSummary</code> object that contains information about this test
   *       report. </p>
   */
  testSummary?: TestReportSummary;

  /**
   * @public
   * <p>A <code>CodeCoverageReportSummary</code> object that contains a code coverage summary for
   *             this report.</p>
   */
  codeCoverageSummary?: CodeCoverageReportSummary;
}

/**
 * @public
 */
export interface BatchGetReportsOutput {
  /**
   * @public
   * <p>
   *       The array of <code>Report</code> objects returned by <code>BatchGetReports</code>.
   *     </p>
   */
  reports?: Report[];

  /**
   * @public
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>Report</code>.
   *     </p>
   */
  reportsNotFound?: string[];
}

/**
 * @public
 * <p>Specifies filters when retrieving batch builds.</p>
 */
export interface BuildBatchFilter {
  /**
   * @public
   * <p>The status of the batch builds to retrieve. Only batch builds that have this status will
   *             be retrieved.</p>
   */
  status?: StatusType | string;
}

/**
 * @public
 */
export interface CreateProjectInput {
  /**
   * @public
   * <p>The name of the build project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information about the build input source code for the build project.</p>
   */
  source: ProjectSource | undefined;

  /**
   * @public
   * <p>An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * @public
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
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       precedence over these <code>secondarySourceVersions</code> (at the project level).
   *     </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @public
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts: ProjectArtifacts | undefined;

  /**
   * @public
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @public
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *         time.</p>
   */
  cache?: ProjectCache;

  /**
   * @public
   * <p>Information about the build environment for the build project.</p>
   */
  environment: ProjectEnvironment | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that enables CodeBuild to interact with dependent Amazon Web Services services
   *       on behalf of the Amazon Web Services account.</p>
   */
  serviceRole: string | undefined;

  /**
   * @public
   * <p>How long, in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before it times out
   *       any build that has not been marked as completed. The default is 60 minutes.</p>
   */
  timeoutInMinutes?: number;

  /**
   * @public
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *       artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<alias-name></code>).
   *     </p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>VpcConfig enables CodeBuild to access resources in an Amazon VPC.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *         badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * @public
   * <p>Information about logs for the build project. These can be logs in CloudWatch Logs, logs
   *       uploaded to a specified S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * @public
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @public
   * <p>A <a>ProjectBuildBatchConfig</a>
   *  object that defines the batch build options
   *             for the project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * @public
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   */
  concurrentBuildLimit?: number;
}

/**
 * @public
 */
export interface CreateProjectOutput {
  /**
   * @public
   * <p>Information about the build project that was created.</p>
   */
  project?: Project;
}

/**
 * @public
 * <p>The specified Amazon Web Services resource cannot be created, because an Amazon Web Services resource with the same
 *             settings already exists.</p>
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
export interface CreateReportGroupInput {
  /**
   * @public
   * <p>
   *       The name of the report group.
   *     </p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>
   *       The type of report group.
   *     </p>
   */
  type: ReportType | string | undefined;

  /**
   * @public
   * <p>
   *       A <code>ReportExportConfig</code> object that contains information about where the report group test results are exported.
   *     </p>
   */
  exportConfig: ReportExportConfig | undefined;

  /**
   * @public
   * <p>
   *       A list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface CreateReportGroupOutput {
  /**
   * @public
   * <p>
   *       Information about the report group that was created.
   *     </p>
   */
  reportGroup?: ReportGroup;
}

/**
 * @public
 */
export interface CreateWebhookInput {
  /**
   * @public
   * <p>The name of the CodeBuild project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p>It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   */
  branchFilter?: string;

  /**
   * @public
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   */
  filterGroups?: WebhookFilter[][];

  /**
   * @public
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;
}

/**
 * @public
 */
export interface CreateWebhookOutput {
  /**
   * @public
   * <p>Information about a webhook that connects repository events to a build project in
   *       CodeBuild.</p>
   */
  webhook?: Webhook;
}

/**
 * @public
 * <p>There was a problem with the underlying OAuth provider.</p>
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
 * @public
 * <p>The specified Amazon Web Services resource cannot be found.</p>
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
   * @public
   * <p>The identifier of the batch build to delete.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteBuildBatchOutput {
  /**
   * @public
   * <p>The status code.</p>
   */
  statusCode?: string;

  /**
   * @public
   * <p>An array of strings that contain the identifiers of the builds that were deleted.</p>
   */
  buildsDeleted?: string[];

  /**
   * @public
   * <p>An array of <code>BuildNotDeleted</code> objects that specify the builds that could not be
   *             deleted.</p>
   */
  buildsNotDeleted?: BuildNotDeleted[];
}

/**
 * @public
 */
export interface DeleteProjectInput {
  /**
   * @public
   * <p>The name of the build project.</p>
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
   * @public
   * <p>
   *       The ARN of the report to delete.
   *     </p>
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
   * @public
   * <p>The ARN of the report group to delete. </p>
   */
  arn: string | undefined;

  /**
   * @public
   * <p>If <code>true</code>, deletes any reports that belong to a report group before deleting
   *             the report group. </p>
   *          <p>If <code>false</code>, you must delete any reports in the report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_ListReportsForReportGroup.html">ListReportsForReportGroup</a> to get the reports in a report group. Use <a href="https://docs.aws.amazon.com/codebuild/latest/APIReference/API_DeleteReport.html">DeleteReport</a> to delete the reports. If you call
   *       <code>DeleteReportGroup</code> for a report group that contains one or more reports,
   *             an exception is thrown. </p>
   */
  deleteReports?: boolean;
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
   * @public
   * <p> The ARN of the resource that is associated with the resource policy. </p>
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
   * @public
   * <p> The Amazon Resource Name (ARN) of the token.</p>
   */
  arn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceCredentialsOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface DeleteWebhookInput {
  /**
   * @public
   * <p>The name of the CodeBuild project.</p>
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
   * @public
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
   */
  reportArn: string | undefined;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>DescribeCodeCoverages</code>. This specifies the next item to return. To
   *             return the beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specifies if the results are sorted in ascending or descending order.</p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>Specifies how the results are sorted. Possible values are:</p>
   *         <dl>
   *             <dt>FILE_PATH</dt>
   *             <dd>
   *                     <p>The results are sorted by file path.</p>
   *                 </dd>
   *             <dt>LINE_COVERAGE_PERCENTAGE</dt>
   *             <dd>
   *                     <p>The results are sorted by the percentage of lines that are covered.</p>
   *                 </dd>
   *          </dl>
   */
  sortBy?: ReportCodeCoverageSortByType | string;

  /**
   * @public
   * <p>The minimum line coverage percentage to report.</p>
   */
  minLineCoveragePercentage?: number;

  /**
   * @public
   * <p>The maximum line coverage percentage to report.</p>
   */
  maxLineCoveragePercentage?: number;
}

/**
 * @public
 * <p>Contains code coverage report information.</p>
 *         <p>Line coverage measures how many statements your tests cover. A statement is a single
 *       instruction, not including comments, conditionals, etc.</p>
 *         <p>Branch coverage determines if your tests cover every possible branch of a control
 *     structure, such as an <code>if</code> or <code>case</code> statement.</p>
 */
export interface CodeCoverage {
  /**
   * @public
   * <p>The identifier of the code coverage report.</p>
   */
  id?: string;

  /**
   * @public
   * <p>The ARN of the report.</p>
   */
  reportARN?: string;

  /**
   * @public
   * <p>The path of the test report file.</p>
   */
  filePath?: string;

  /**
   * @public
   * <p>The percentage of lines that are covered by your tests.</p>
   */
  lineCoveragePercentage?: number;

  /**
   * @public
   * <p>The number of lines that are covered by your tests.</p>
   */
  linesCovered?: number;

  /**
   * @public
   * <p>The number of lines that are not covered by your tests.</p>
   */
  linesMissed?: number;

  /**
   * @public
   * <p>The percentage of branches that are covered by your tests.</p>
   */
  branchCoveragePercentage?: number;

  /**
   * @public
   * <p>The number of conditional branches that are covered by your tests.</p>
   */
  branchesCovered?: number;

  /**
   * @public
   * <p>The number of conditional branches that are not covered by your tests.</p>
   */
  branchesMissed?: number;

  /**
   * @public
   * <p>The date and time that the tests were run.</p>
   */
  expired?: Date;
}

/**
 * @public
 */
export interface DescribeCodeCoveragesOutput {
  /**
   * @public
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>DescribeCodeCoverages</code> to retrieve the next set of items.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>An array of <code>CodeCoverage</code> objects that contain the results.</p>
   */
  codeCoverages?: CodeCoverage[];
}

/**
 * @public
 * <p>A filter used to return specific types of test cases. In order to pass the filter, the
 *             report must meet all of the filter properties.</p>
 */
export interface TestCaseFilter {
  /**
   * @public
   * <p>The status used to filter test cases. A <code>TestCaseFilter</code> can have one
   *             status. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SUCCEEDED</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FAILED</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ERROR</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SKIPPED</code>
   *                </p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UNKNOWN</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  status?: string;

  /**
   * @public
   * <p>A keyword that is used to filter on the <code>name</code> or the <code>prefix</code>
   *             of the test cases. Only test cases where the keyword is a substring of the
   *                 <code>name</code> or the <code>prefix</code> will be returned.</p>
   */
  keyword?: string;
}

/**
 * @public
 */
export interface DescribeTestCasesInput {
  /**
   * @public
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
   */
  reportArn: string | undefined;

  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The maximum number of paginated test cases returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>TestCase</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       A <code>TestCaseFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: TestCaseFilter;
}

/**
 * @public
 * <p> Information about a test case created using a framework such as NUnit or Cucumber. A
 *             test case might be a unit test or a configuration test. </p>
 */
export interface TestCase {
  /**
   * @public
   * <p> The ARN of the report to which the test case belongs. </p>
   */
  reportArn?: string;

  /**
   * @public
   * <p> The path to the raw data file that contains the test result. </p>
   */
  testRawDataPath?: string;

  /**
   * @public
   * <p> A string that is applied to a series of related test cases. CodeBuild generates the
   *             prefix. The prefix depends on the framework used to generate the tests. </p>
   */
  prefix?: string;

  /**
   * @public
   * <p> The name of the test case. </p>
   */
  name?: string;

  /**
   * @public
   * <p> The status returned by the test case after it was run. Valid statuses are
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>ERROR</code>,
   *                 <code>SKIPPED</code>, and <code>UNKNOWN</code>. </p>
   */
  status?: string;

  /**
   * @public
   * <p> The number of nanoseconds it took to run this test case. </p>
   */
  durationInNanoSeconds?: number;

  /**
   * @public
   * <p> A message associated with a test case. For example, an error message or stack trace.
   *         </p>
   */
  message?: string;

  /**
   * @public
   * <p> The date and time a test case expires. A test case expires 30 days after it is
   *             created. An expired test case is not available to view in CodeBuild. </p>
   */
  expired?: Date;
}

/**
 * @public
 */
export interface DescribeTestCasesOutput {
  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The returned list of test cases.
   *     </p>
   */
  testCases?: TestCase[];
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
   * @public
   * <p>The ARN of the report group that contains the reports to analyze.</p>
   */
  reportGroupArn: string | undefined;

  /**
   * @public
   * <p>The number of reports to analyze. This operation always retrieves the most recent
   *             reports.</p>
   *         <p>If this parameter is omitted, the most recent 100 reports are analyzed.</p>
   */
  numOfReports?: number;

  /**
   * @public
   * <p>The test report value to accumulate. This must be one of the following values:</p>
   *          <dl>
   *             <dt>Test reports:</dt>
   *             <dd>
   *                     <dl>
   *                   <dt>DURATION</dt>
   *                   <dd>
   *                                 <p>Accumulate the test run times for the specified
   *                                     reports.</p>
   *                             </dd>
   *                   <dt>PASS_RATE</dt>
   *                   <dd>
   *                                 <p>Accumulate the percentage of tests that passed for the
   *                                     specified test reports.</p>
   *                             </dd>
   *                   <dt>TOTAL</dt>
   *                   <dd>
   *                                 <p>Accumulate the total number of tests for the specified test
   *                                     reports.</p>
   *                             </dd>
   *                </dl>
   *                 </dd>
   *          </dl>
   *          <dl>
   *             <dt>Code coverage reports:</dt>
   *             <dd>
   *                     <dl>
   *                   <dt>BRANCH_COVERAGE</dt>
   *                   <dd>
   *                                 <p>Accumulate the branch coverage percentages for the specified
   *                                     test reports.</p>
   *                             </dd>
   *                   <dt>BRANCHES_COVERED</dt>
   *                   <dd>
   *                                 <p>Accumulate the branches covered values for the specified test
   *                                     reports.</p>
   *                             </dd>
   *                   <dt>BRANCHES_MISSED</dt>
   *                   <dd>
   *                                 <p>Accumulate the branches missed values for the specified test
   *                                     reports.</p>
   *                             </dd>
   *                   <dt>LINE_COVERAGE</dt>
   *                   <dd>
   *                                 <p>Accumulate the line coverage percentages for the specified
   *                                     test reports.</p>
   *                             </dd>
   *                   <dt>LINES_COVERED</dt>
   *                   <dd>
   *                                 <p>Accumulate the lines covered values for the specified test
   *                                     reports.</p>
   *                             </dd>
   *                   <dt>LINES_MISSED</dt>
   *                   <dd>
   *                                 <p>Accumulate the lines not covered values for the specified test
   *                                     reports.</p>
   *                             </dd>
   *                </dl>
   *                 </dd>
   *          </dl>
   */
  trendField: ReportGroupTrendFieldType | string | undefined;
}

/**
 * @public
 * <p>Contains the unmodified data for the report. For more information, see .</p>
 */
export interface ReportWithRawData {
  /**
   * @public
   * <p>The ARN of the report.</p>
   */
  reportArn?: string;

  /**
   * @public
   * <p>The value of the requested data field from the report.</p>
   */
  data?: string;
}

/**
 * @public
 * <p>Contains trend statistics for a set of reports. The actual values depend on the type of
 *             trend being collected. For more information, see .</p>
 */
export interface ReportGroupTrendStats {
  /**
   * @public
   * <p>Contains the average of all values analyzed.</p>
   */
  average?: string;

  /**
   * @public
   * <p>Contains the maximum value analyzed.</p>
   */
  max?: string;

  /**
   * @public
   * <p>Contains the minimum value analyzed.</p>
   */
  min?: string;
}

/**
 * @public
 */
export interface GetReportGroupTrendOutput {
  /**
   * @public
   * <p>Contains the accumulated trend data.</p>
   */
  stats?: ReportGroupTrendStats;

  /**
   * @public
   * <p>An array that contains the raw data for each report.</p>
   */
  rawData?: ReportWithRawData[];
}

/**
 * @public
 */
export interface GetResourcePolicyInput {
  /**
   * @public
   * <p> The ARN of the resource that is associated with the resource policy. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyOutput {
  /**
   * @public
   * <p> The resource policy for the resource identified by the input ARN parameter. </p>
   */
  policy?: string;
}

/**
 * @public
 * @enum
 */
export const ServerType = {
  BITBUCKET: "BITBUCKET",
  GITHUB: "GITHUB",
  GITHUB_ENTERPRISE: "GITHUB_ENTERPRISE",
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
   * @public
   * <p> The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter
   *             is not valid for other types of source providers or connections. </p>
   */
  username?: string;

  /**
   * @public
   * <p> For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket,
   *             this is the app password. </p>
   */
  token: string | undefined;

  /**
   * @public
   * <p> The source provider used for this project. </p>
   */
  serverType: ServerType | string | undefined;

  /**
   * @public
   * <p> The type of authentication used to connect to a GitHub, GitHub Enterprise, or
   *             Bitbucket repository. An OAUTH connection is not supported by the API and must be
   *             created using the CodeBuild console. </p>
   */
  authType: AuthType | string | undefined;

  /**
   * @public
   * <p> Set to <code>false</code> to prevent overwriting the repository source credentials.
   *             Set to <code>true</code> to overwrite the repository source credentials. The default
   *             value is <code>true</code>. </p>
   */
  shouldOverwrite?: boolean;
}

/**
 * @public
 */
export interface ImportSourceCredentialsOutput {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;
}

/**
 * @public
 */
export interface InvalidateProjectCacheInput {
  /**
   * @public
   * <p>The name of the CodeBuild build project that the cache is reset for.</p>
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
   * @public
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   */
  filter?: BuildBatchFilter;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
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
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatches</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildBatchesOutput {
  /**
   * @public
   * <p>An array of strings that contains the batch build identifiers.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>ListBuildBatches</code> to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectInput {
  /**
   * @public
   * <p>The name of the project.</p>
   */
  projectName?: string;

  /**
   * @public
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   */
  filter?: BuildBatchFilter;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Specifies the sort order of the returned items. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List the batch build identifiers in ascending order by
   *                     identifier.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List the batch build identifiers in descending order
   *                     by identifier.</p>
   *             </li>
   *          </ul>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatchesForProject</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildBatchesForProjectOutput {
  /**
   * @public
   * <p>An array of strings that contains the batch build identifiers.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>If there are more items to return, this contains a token that is passed to a
   *             subsequent call to <code>ListBuildBatchesForProject</code> to retrieve the next set of
   *             items.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsInput {
  /**
   * @public
   * <p>The order to list build IDs. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List the build IDs in ascending order by build
   *                     ID.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List the build IDs in descending order by build
   *                     ID.</p>
   *             </li>
   *          </ul>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsOutput {
  /**
   * @public
   * <p>A list of build IDs, with each build ID representing a single build.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsForProjectInput {
  /**
   * @public
   * <p>The name of the CodeBuild project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The order to sort the results in. The results are sorted by build number, not the build
   *             identifier. If this is not specified, the results are sorted in descending order.</p>
   *         <p>Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List the build identifiers in ascending order, by build number.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List the build identifiers in descending order, by build number.</p>
   *             </li>
   *          </ul>
   *         <p>If the project has more than 100 builds, setting the sort order will result in an
   *             error. </p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListBuildsForProjectOutput {
  /**
   * @public
   * <p>A list of build identifiers for the specified build project, with each build ID representing a
   *             single build.</p>
   */
  ids?: string[];

  /**
   * @public
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesInput {}

/**
 * @public
 * <p>Information about a Docker image that is managed by CodeBuild.</p>
 */
export interface EnvironmentImage {
  /**
   * @public
   * <p>The name of the Docker image.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The description of the Docker image.</p>
   */
  description?: string;

  /**
   * @public
   * <p>A list of environment image versions.</p>
   */
  versions?: string[];
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
 * @public
 * <p>A set of Docker images that are related by programming language and are managed by
 *             CodeBuild.</p>
 */
export interface EnvironmentLanguage {
  /**
   * @public
   * <p>The programming language for the Docker images.</p>
   */
  language?: LanguageType | string;

  /**
   * @public
   * <p>The list of Docker images that are related by the specified programming
   *             language.</p>
   */
  images?: EnvironmentImage[];
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
 * @public
 * <p>A set of Docker images that are related by platform and are managed by CodeBuild.</p>
 */
export interface EnvironmentPlatform {
  /**
   * @public
   * <p>The platform's name.</p>
   */
  platform?: PlatformType | string;

  /**
   * @public
   * <p>The list of programming languages that are available for the specified
   *             platform.</p>
   */
  languages?: EnvironmentLanguage[];
}

/**
 * @public
 */
export interface ListCuratedEnvironmentImagesOutput {
  /**
   * @public
   * <p>Information about supported platforms for Docker images that are managed by
   *             CodeBuild.</p>
   */
  platforms?: EnvironmentPlatform[];
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
   * @public
   * <p>The criterion to be used to list build project names. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CREATED_TIME</code>: List based on when each build project was
   *                     created.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LAST_MODIFIED_TIME</code>: List based on when information about each
   *                     build project was last changed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>NAME</code>: List based on each build project's name.</p>
   *             </li>
   *          </ul>
   *         <p>Use <code>sortOrder</code> to specify in what order to list the build project names
   *             based on the preceding criteria.</p>
   */
  sortBy?: ProjectSortByType | string;

  /**
   * @public
   * <p>The order in which to list build projects. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   *         <p>Use <code>sortBy</code> to specify the criterion to be used to list build project
   *             names.</p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsOutput {
  /**
   * @public
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The list of build project names, with each build project name representing a single
   *             build project.</p>
   */
  projects?: string[];
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
   * @public
   * <p>
   *       Used to specify the order to sort the list of returned report groups. Valid values are
   *       <code>ASCENDING</code> and <code>DESCENDING</code>.
   *     </p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
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
   */
  sortBy?: ReportGroupSortByType | string;

  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The maximum number of paginated report groups returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>ReportGroup</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListReportGroupsOutput {
  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The list of ARNs for the report groups in the current Amazon Web Services account.
   *     </p>
   */
  reportGroups?: string[];
}

/**
 * @public
 * <p> A filter used to return reports with the status specified by the input
 *                 <code>status</code> parameter. </p>
 */
export interface ReportFilter {
  /**
   * @public
   * <p> The status used to filter reports. You can filter using one status only. </p>
   */
  status?: ReportStatusType | string;
}

/**
 * @public
 */
export interface ListReportsInput {
  /**
   * @public
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
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The maximum number of paginated reports returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: ReportFilter;
}

/**
 * @public
 */
export interface ListReportsOutput {
  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The list of returned ARNs for the reports in the current Amazon Web Services account.
   *     </p>
   */
  reports?: string[];
}

/**
 * @public
 */
export interface ListReportsForReportGroupInput {
  /**
   * @public
   * <p>
   *       The ARN of the report group for which you want to return report ARNs.
   *     </p>
   */
  reportGroupArn: string | undefined;

  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       Use to specify whether the results are returned in ascending or descending order.
   *     </p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p>
   *       The maximum number of paginated reports in this report group returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: ReportFilter;
}

/**
 * @public
 */
export interface ListReportsForReportGroupOutput {
  /**
   * @public
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>
   *       The list of report ARNs.
   *     </p>
   */
  reports?: string[];
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
   * @public
   * <p> The criterion to be used to list build projects shared with the current Amazon Web Services account
   *             or user. Valid values include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>ARN</code>: List based on the ARN. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>MODIFIED_TIME</code>: List based on when information about the shared
   *                     project was last changed. </p>
   *             </li>
   *          </ul>
   */
  sortBy?: SharedResourceSortByType | string;

  /**
   * @public
   * <p>The order in which to list shared build projects. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p> The maximum number of paginated shared build projects returned per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned <code>Project</code>
   *             objects. The default value is 100. </p>
   */
  maxResults?: number;

  /**
   * @public
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListSharedProjectsOutput {
  /**
   * @public
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The list of ARNs for the build projects shared with the current Amazon Web Services account or user.
   *         </p>
   */
  projects?: string[];
}

/**
 * @public
 */
export interface ListSharedReportGroupsInput {
  /**
   * @public
   * <p>The order in which to list shared report groups. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASCENDING</code>: List in ascending order.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DESCENDING</code>: List in descending order.</p>
   *             </li>
   *          </ul>
   */
  sortOrder?: SortOrderType | string;

  /**
   * @public
   * <p> The criterion to be used to list report groups shared with the current Amazon Web Services account or
   *             user. Valid values include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>ARN</code>: List based on the ARN. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>MODIFIED_TIME</code>: List based on when information about the shared
   *                     report group was last changed. </p>
   *             </li>
   *          </ul>
   */
  sortBy?: SharedResourceSortByType | string;

  /**
   * @public
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The maximum number of paginated shared report groups per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned
   *                 <code>ReportGroup</code> objects. The default value is 100. </p>
   */
  maxResults?: number;
}

/**
 * @public
 */
export interface ListSharedReportGroupsOutput {
  /**
   * @public
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;

  /**
   * @public
   * <p> The list of ARNs for the report groups shared with the current Amazon Web Services account or user.
   *         </p>
   */
  reportGroups?: string[];
}

/**
 * @public
 */
export interface ListSourceCredentialsInput {}

/**
 * @public
 * <p> Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket
 *             repository. </p>
 */
export interface SourceCredentialsInfo {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;

  /**
   * @public
   * <p> The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or
   *             BITBUCKET. </p>
   */
  serverType?: ServerType | string;

  /**
   * @public
   * <p> The type of authentication used by the credentials. Valid options are OAUTH,
   *             BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. </p>
   */
  authType?: AuthType | string;
}

/**
 * @public
 */
export interface ListSourceCredentialsOutput {
  /**
   * @public
   * <p> A list of <code>SourceCredentialsInfo</code> objects. Each
   *                 <code>SourceCredentialsInfo</code> object includes the authentication type, token
   *             ARN, and type of source provider for one set of credentials. </p>
   */
  sourceCredentialsInfos?: SourceCredentialsInfo[];
}

/**
 * @public
 */
export interface PutResourcePolicyInput {
  /**
   * @public
   * <p> A JSON-formatted resource policy. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share">Sharing
   *                 a Project</a> and <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share">Sharing a Report Group</a> in the <i>CodeBuild User Guide</i>.
   *         </p>
   */
  policy: string | undefined;

  /**
   * @public
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource you want to
   *             associate with a resource policy. </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyOutput {
  /**
   * @public
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource that is
   *             associated with a resource policy. </p>
   */
  resourceArn?: string;
}

/**
 * @public
 */
export interface RetryBuildInput {
  /**
   * @public
   * <p>Specifies the identifier of the build to restart.</p>
   */
  id?: string;

  /**
   * @public
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *       <code>RetryBuild</code> request. The token is included in the
   *       <code>RetryBuild</code> request and is valid for five minutes. If you repeat
   *       the <code>RetryBuild</code> request with the same token, but change a parameter,
   *       CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;
}

/**
 * @public
 */
export interface RetryBuildOutput {
  /**
   * @public
   * <p>Information about a build.</p>
   */
  build?: Build;
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
   * @public
   * <p>Specifies the identifier of the batch build to restart.</p>
   */
  id?: string;

  /**
   * @public
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>RetryBuildBatch</code> request. The token is included in the
   *                 <code>RetryBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>RetryBuildBatch</code> request with the same token, but change a parameter,
   *             CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;

  /**
   * @public
   * <p>Specifies the type of retry to perform.</p>
   */
  retryType?: RetryBuildBatchType | string;
}

/**
 * @public
 */
export interface RetryBuildBatchOutput {
  /**
   * @public
   * <p>Contains information about a batch build.</p>
   */
  buildBatch?: BuildBatch;
}

/**
 * @public
 */
export interface StartBuildInput {
  /**
   * @public
   * <p>The name of the CodeBuild build project to start running a build.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySourcesOverride?: ProjectSource[];

  /**
   * @public
   * <p> An array of <code>ProjectSourceVersion</code> objects that specify one or more
   *             versions of the project's secondary sources to be used for this build only. </p>
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * @public
   * <p>The version of the build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *         <dl>
   *             <dt>CodeCommit</dt>
   *             <dd>
   *                     <p>The commit ID, branch, or Git tag to use.</p>
   *                 </dd>
   *             <dt>GitHub</dt>
   *             <dd>
   *                     <p>The commit ID, pull request ID, branch name, or tag name that corresponds
   *                         to the version of the source code you want to build. If a pull request ID is
   *                         specified, it must use the format <code>pr/pull-request-ID</code> (for
   *                         example <code>pr/25</code>). If a branch name is specified, the branch's
   *                         HEAD commit ID is used. If not specified, the default branch's HEAD commit
   *                         ID is used.</p>
   *                 </dd>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                     <p>The commit ID, branch name, or tag name that corresponds to the version of
   *                         the source code you want to build. If a branch name is specified, the
   *                         branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                         commit ID is used.</p>
   *                 </dd>
   *             <dt>Amazon S3</dt>
   *             <dd>
   *                     <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *                 </dd>
   *          </dl>
   *         <p>If <code>sourceVersion</code> is specified at the project level, then this
   *             <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *             with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>Build output artifact settings that override, for this build only, the latest ones
   *             already defined in the build project.</p>
   */
  artifactsOverride?: ProjectArtifacts;

  /**
   * @public
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * @public
   * <p>A set of environment variables that overrides, for this build only, the latest ones
   *             already defined in the build project.</p>
   */
  environmentVariablesOverride?: EnvironmentVariable[];

  /**
   * @public
   * <p>A source input type, for this build, that overrides the source input defined in the
   *             build project.</p>
   */
  sourceTypeOverride?: SourceType | string;

  /**
   * @public
   * <p>A location that overrides, for this build, the source location for the one defined in
   *             the build project.</p>
   */
  sourceLocationOverride?: string;

  /**
   * @public
   * <p>An authorization type for this build that overrides the one defined in the build
   *             project. This override applies only if the build project's source is BitBucket or
   *             GitHub.</p>
   */
  sourceAuthOverride?: SourceAuth;

  /**
   * @public
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *             build only, any previous depth of history defined in the build project.</p>
   */
  gitCloneDepthOverride?: number;

  /**
   * @public
   * <p> Information about the Git submodules configuration for this build of an CodeBuild build
   *             project. </p>
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * @public
   * <p>A buildspec file declaration that overrides, for this build only, the latest one
   *             already defined in the build project.</p>
   *         <p> If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same Amazon Web Services Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   */
  buildspecOverride?: string;

  /**
   * @public
   * <p>Enable this flag to override the insecure SSL setting that is specified in the build
   *             project. The insecure SSL setting determines whether to ignore SSL warnings while
   *             connecting to the project source code. This override applies only if the build's source
   *             is GitHub Enterprise.</p>
   */
  insecureSslOverride?: boolean;

  /**
   * @public
   * <p> Set to true to report to your source provider the status of a build's start and
   *             completion. If you use this option with a source provider other than GitHub, GitHub
   *             Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p>
   *             <p>To be able to report the build status to the source provider, the user associated with the source provider must
   * have write access to the repo. If the user does not have write access, the build status cannot be updated. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/access-tokens.html">Source provider access</a> in the <i>CodeBuild User Guide</i>.</p>
   *         <note>
   *             <p> The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *         </note>
   */
  reportBuildStatusOverride?: boolean;

  /**
   * @public
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   */
  buildStatusConfigOverride?: BuildStatusConfig;

  /**
   * @public
   * <p>A container type for this build that overrides the one specified in the build
   *             project.</p>
   */
  environmentTypeOverride?: EnvironmentType | string;

  /**
   * @public
   * <p>The name of an image for this build that overrides the one specified in the build
   *             project.</p>
   */
  imageOverride?: string;

  /**
   * @public
   * <p>The name of a compute type for this build that overrides the one specified in the
   *             build project.</p>
   */
  computeTypeOverride?: ComputeType | string;

  /**
   * @public
   * <p>The name of a certificate for this build that overrides the one specified in the build
   *             project.</p>
   */
  certificateOverride?: string;

  /**
   * @public
   * <p>A ProjectCache object specified for this build that overrides the one defined in the
   *             build project.</p>
   */
  cacheOverride?: ProjectCache;

  /**
   * @public
   * <p>The name of a service role for this build that overrides the one specified in the
   *             build project.</p>
   */
  serviceRoleOverride?: string;

  /**
   * @public
   * <p>Enable this flag to override privileged mode in the build project.</p>
   */
  privilegedModeOverride?: boolean;

  /**
   * @public
   * <p>The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this
   *             build only, the latest setting already defined in the build project.</p>
   */
  timeoutInMinutesOverride?: number;

  /**
   * @public
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutesOverride?: number;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) that overrides the one specified in the build
   *             project. The CMK key encrypts the build output artifacts.</p>
   *         <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<alias-name></code>).</p>
   */
  encryptionKeyOverride?: string;

  /**
   * @public
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *             StartBuild request. The token is included in the StartBuild request and is valid for 5
   *             minutes. If you repeat the StartBuild request with the same token, but change a
   *             parameter, CodeBuild returns a parameter mismatch error. </p>
   */
  idempotencyToken?: string;

  /**
   * @public
   * <p> Log settings for this build that override the log settings defined in the build
   *             project. </p>
   */
  logsConfigOverride?: LogsConfig;

  /**
   * @public
   * <p> The credentials for access to a private registry. </p>
   */
  registryCredentialOverride?: RegistryCredential;

  /**
   * @public
   * <p>The type of credentials CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *         <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                     <p>Specifies that CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust CodeBuild's service principal.</p>
   *                 </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                     <p>Specifies that CodeBuild uses your build project's service role. </p>
   *                 </dd>
   *          </dl>
   *         <p>When using a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | string;

  /**
   * @public
   * <p>Specifies if session debugging is enabled for this build. For more information, see
   *                 <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.</p>
   */
  debugSessionEnabled?: boolean;
}

/**
 * @public
 */
export interface StartBuildOutput {
  /**
   * @public
   * <p>Information about the build to be run.</p>
   */
  build?: Build;
}

/**
 * @public
 */
export interface StartBuildBatchInput {
  /**
   * @public
   * <p>The name of the project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>An array of <code>ProjectSource</code> objects that override the secondary sources
   *         defined in the batch build project.</p>
   */
  secondarySourcesOverride?: ProjectSource[];

  /**
   * @public
   * <p>An array of <code>ProjectSourceVersion</code> objects that override the secondary source
   *             versions in the batch build project.</p>
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * @public
   * <p>The version of the batch build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *         <dl>
   *             <dt>CodeCommit</dt>
   *             <dd>
   *                     <p>The commit ID, branch, or Git tag to use.</p>
   *                 </dd>
   *             <dt>GitHub</dt>
   *             <dd>
   *                     <p>The commit ID, pull request ID, branch name, or tag name that corresponds
   *                         to the version of the source code you want to build. If a pull request ID is
   *                         specified, it must use the format <code>pr/pull-request-ID</code> (for
   *                         example <code>pr/25</code>). If a branch name is specified, the branch's
   *                         HEAD commit ID is used. If not specified, the default branch's HEAD commit
   *                         ID is used.</p>
   *                 </dd>
   *             <dt>Bitbucket</dt>
   *             <dd>
   *                     <p>The commit ID, branch name, or tag name that corresponds to the version of
   *                         the source code you want to build. If a branch name is specified, the
   *                         branch's HEAD commit ID is used. If not specified, the default branch's HEAD
   *                         commit ID is used.</p>
   *                 </dd>
   *             <dt>Amazon S3</dt>
   *             <dd>
   *                     <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *                 </dd>
   *          </dl>
   *          <p>If <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * @public
   * <p>An array of <code>ProjectArtifacts</code> objects that contains information about the
   *             build output artifact overrides for the build project.</p>
   */
  artifactsOverride?: ProjectArtifacts;

  /**
   * @public
   * <p>An array of <code>ProjectArtifacts</code> objects that override the secondary artifacts
   *             defined in the batch build project.</p>
   */
  secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * @public
   * <p>An array of <code>EnvironmentVariable</code> objects that override, or add to, the
   *             environment variables defined in the batch build project.</p>
   */
  environmentVariablesOverride?: EnvironmentVariable[];

  /**
   * @public
   * <p>The source input type that overrides the source input defined in the batch
   *         build project.</p>
   */
  sourceTypeOverride?: SourceType | string;

  /**
   * @public
   * <p>A location that overrides, for this batch build, the source location defined in
   *         the batch build project.</p>
   */
  sourceLocationOverride?: string;

  /**
   * @public
   * <p>A <code>SourceAuth</code> object that overrides the one defined in the batch build
   *             project. This override applies only if the build project's source is BitBucket or
   *             GitHub.</p>
   */
  sourceAuthOverride?: SourceAuth;

  /**
   * @public
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *         batch build only, any previous depth of history defined in the batch build project.</p>
   */
  gitCloneDepthOverride?: number;

  /**
   * @public
   * <p>A <code>GitSubmodulesConfig</code> object that overrides the Git submodules configuration
   *             for this batch build.</p>
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * @public
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
   */
  buildspecOverride?: string;

  /**
   * @public
   * <p>Enable this flag to override the insecure SSL setting that is specified in the batch build
   *         project. The insecure SSL setting determines whether to ignore SSL warnings while
   *         connecting to the project source code. This override applies only if the build's source
   *         is GitHub Enterprise.</p>
   */
  insecureSslOverride?: boolean;

  /**
   * @public
   * <p>Set to <code>true</code> to report to your source provider the status of a batch build's
   *             start and completion. If you use this option with a source provider other than GitHub,
   *             GitHub Enterprise, or Bitbucket, an <code>invalidInputException</code> is thrown. </p>
   *          <note>
   *             <p>The status of a build triggered by a webhook is always reported to your source
   *           provider. </p>
   *          </note>
   */
  reportBuildBatchStatusOverride?: boolean;

  /**
   * @public
   * <p>A container type for this batch build that overrides the one specified in the batch build
   *         project.</p>
   */
  environmentTypeOverride?: EnvironmentType | string;

  /**
   * @public
   * <p>The name of an image for this batch build that overrides the one specified in the batch
   *             build project.</p>
   */
  imageOverride?: string;

  /**
   * @public
   * <p>The name of a compute type for this batch build that overrides the one specified in the
   *         batch build project.</p>
   */
  computeTypeOverride?: ComputeType | string;

  /**
   * @public
   * <p>The name of a certificate for this batch build that overrides the one specified in the batch build
   *         project.</p>
   */
  certificateOverride?: string;

  /**
   * @public
   * <p>A <code>ProjectCache</code> object that specifies cache overrides.</p>
   */
  cacheOverride?: ProjectCache;

  /**
   * @public
   * <p>The name of a service role for this batch build that overrides the one specified in the
   *         batch build project.</p>
   */
  serviceRoleOverride?: string;

  /**
   * @public
   * <p>Enable this flag to override privileged mode in the batch build project.</p>
   */
  privilegedModeOverride?: boolean;

  /**
   * @public
   * <p>Overrides the build timeout specified in the batch build project.</p>
   */
  buildTimeoutInMinutesOverride?: number;

  /**
   * @public
   * <p>The number of minutes a batch build is allowed to be queued before it times out.</p>
   */
  queuedTimeoutInMinutesOverride?: number;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) that overrides the one specified in the batch build
   *         project. The CMK key encrypts the build output artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *           service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<alias-name></code>).</p>
   */
  encryptionKeyOverride?: string;

  /**
   * @public
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>StartBuildBatch</code> request. The token is included in the
   *                 <code>StartBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>StartBuildBatch</code> request with the same token, but change a parameter,
   *             CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;

  /**
   * @public
   * <p>A <code>LogsConfig</code> object that override the log settings defined in the batch build
   *             project.</p>
   */
  logsConfigOverride?: LogsConfig;

  /**
   * @public
   * <p>A <code>RegistryCredential</code> object that overrides credentials for access to a
   *             private registry.</p>
   */
  registryCredentialOverride?: RegistryCredential;

  /**
   * @public
   * <p>The type of credentials CodeBuild uses to pull images in your batch build. There are two valid
   *         values: </p>
   *         <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                     <p>Specifies that CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust CodeBuild's service principal.</p>
   *                 </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                     <p>Specifies that CodeBuild uses your build project's service role. </p>
   *                 </dd>
   *          </dl>
   *          <p>When using a cross-account or private registry image, you must use
   *                 <code>SERVICE_ROLE</code> credentials. When using an CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | string;

  /**
   * @public
   * <p>A <code>BuildBatchConfigOverride</code> object that contains batch build configuration
   *             overrides.</p>
   */
  buildBatchConfigOverride?: ProjectBuildBatchConfig;

  /**
   * @public
   * <p>Specifies if session debugging is enabled for this batch build. For more information, see
   *   <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>. Batch session debugging is not supported for matrix batch builds.</p>
   */
  debugSessionEnabled?: boolean;
}

/**
 * @public
 */
export interface StartBuildBatchOutput {
  /**
   * @public
   * <p>A <code>BuildBatch</code> object that contains information about the batch build.</p>
   */
  buildBatch?: BuildBatch;
}

/**
 * @public
 */
export interface StopBuildInput {
  /**
   * @public
   * <p>The ID of the build.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildOutput {
  /**
   * @public
   * <p>Information about the build.</p>
   */
  build?: Build;
}

/**
 * @public
 */
export interface StopBuildBatchInput {
  /**
   * @public
   * <p>The identifier of the batch build to stop.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopBuildBatchOutput {
  /**
   * @public
   * <p>Contains information about a batch build.</p>
   */
  buildBatch?: BuildBatch;
}

/**
 * @public
 */
export interface UpdateProjectInput {
  /**
   * @public
   * <p>The name of the build project.</p>
   *          <note>
   *             <p>You cannot change a build project's name.</p>
   *          </note>
   */
  name: string | undefined;

  /**
   * @public
   * <p>A new or replacement description of the build project.</p>
   */
  description?: string;

  /**
   * @public
   * <p>Information to be changed about the build input source code for the build
   *     project.</p>
   */
  source?: ProjectSource;

  /**
   * @public
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * @public
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
   */
  sourceVersion?: string;

  /**
   * @public
   * <p> An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *     over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * @public
   * <p>Information to be changed about the build output artifacts for the build
   *         project.</p>
   */
  artifacts?: ProjectArtifacts;

  /**
   * @public
   * <p> An array of <code>ProjectArtifact</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * @public
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *       time.</p>
   */
  cache?: ProjectCache;

  /**
   * @public
   * <p>Information to be changed about the build environment for the build project.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * @public
   * <p>The replacement ARN of the IAM role that enables CodeBuild to interact with dependent
   *     Amazon Web Services services on behalf of the Amazon Web Services account.</p>
   */
  serviceRole?: string;

  /**
   * @public
   * <p>The replacement value in minutes, from 5 to 480 (8 hours), for CodeBuild to wait before
   *       timing out any related build that did not get marked as completed.</p>
   */
  timeoutInMinutes?: number;

  /**
   * @public
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * @public
   * <p>The Key Management Service customer master key (CMK) to be used for encrypting the build output
   *     artifacts.</p>
   *          <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *     the format <code>alias/<alias-name></code>).
   *     </p>
   */
  encryptionKey?: string;

  /**
   * @public
   * <p>An updated list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild build project
   *       tags.</p>
   */
  tags?: Tag[];

  /**
   * @public
   * <p>VpcConfig enables CodeBuild to access resources in an Amazon VPC.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * @public
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *       badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * @public
   * <p> Information about logs for the build project. A project can create logs in CloudWatch Logs,
   *     logs in an S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * @public
   * <p>
   *       An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *       specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *       <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *   </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * @public
   * <p>Contains configuration information about a batch build project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * @public
   * <p>The maximum number of concurrent builds that are allowed for this project.</p>
   *          <p>New builds are only started if the current number of builds is less than or equal to this limit.
   *   If the current build count meets this limit, new builds are throttled and are not run.</p>
   *          <p>To remove this limit, set this value to -1.</p>
   */
  concurrentBuildLimit?: number;
}

/**
 * @public
 */
export interface UpdateProjectOutput {
  /**
   * @public
   * <p>Information about the build project that was changed.</p>
   */
  project?: Project;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityInput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   */
  projectArn: string | undefined;

  /**
   * @public
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *
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
   */
  projectVisibility: ProjectVisibilityType | string | undefined;

  /**
   * @public
   * <p>The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for
   *       the project's builds.</p>
   */
  resourceAccessRole?: string;
}

/**
 * @public
 */
export interface UpdateProjectVisibilityOutput {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   */
  projectArn?: string;

  /**
   * @public
   * <p>Contains the project identifier used with the public build APIs. </p>
   */
  publicProjectAlias?: string;

  /**
   * @public
   * <p>Specifies the visibility of the project's builds. Possible values are:</p>
   *
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
   */
  projectVisibility?: ProjectVisibilityType | string;
}

/**
 * @public
 */
export interface UpdateReportGroupInput {
  /**
   * @public
   * <p>
   *       The ARN of the report group to update.
   *     </p>
   */
  arn: string | undefined;

  /**
   * @public
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
   */
  exportConfig?: ReportExportConfig;

  /**
   * @public
   * <p>
   *       An updated list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by Amazon Web Services services that support CodeBuild report group
   *       tags.</p>
   */
  tags?: Tag[];
}

/**
 * @public
 */
export interface UpdateReportGroupOutput {
  /**
   * @public
   * <p>
   *       Information about the updated report group.
   *     </p>
   */
  reportGroup?: ReportGroup;
}

/**
 * @public
 */
export interface UpdateWebhookInput {
  /**
   * @public
   * <p>The name of the CodeBuild project.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>A regular expression used to determine which repository branches are built when a
   *       webhook is triggered. If the name of a branch matches the regular expression, then it is
   *       built. If <code>branchFilter</code> is empty, then all branches are built.</p>
   *          <note>
   *             <p> It is recommended that you use <code>filterGroups</code> instead of
   *         <code>branchFilter</code>. </p>
   *          </note>
   */
  branchFilter?: string;

  /**
   * @public
   * <p> A boolean value that specifies whether the associated GitHub repository's secret
   *       token should be updated. If you use Bitbucket for your repository,
   *       <code>rotateSecret</code> is ignored. </p>
   */
  rotateSecret?: boolean;

  /**
   * @public
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine if a
   *       webhook event can trigger a build. A filter group must contain at least one
   *       <code>EVENT</code>
   *             <code>WebhookFilter</code>. </p>
   */
  filterGroups?: WebhookFilter[][];

  /**
   * @public
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;
}

/**
 * @public
 */
export interface UpdateWebhookOutput {
  /**
   * @public
   * <p> Information about a repository's webhook that is associated with a project in CodeBuild.
   *     </p>
   */
  webhook?: Webhook;
}

/**
 * @internal
 */
export const ImportSourceCredentialsInputFilterSensitiveLog = (obj: ImportSourceCredentialsInput): any => ({
  ...obj,
  ...(obj.token && { token: SENSITIVE_STRING }),
});
