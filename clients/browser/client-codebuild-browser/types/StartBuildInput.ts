import { _ProjectSource } from "./_ProjectSource";
import { _ProjectSourceVersion } from "./_ProjectSourceVersion";
import { _ProjectArtifacts } from "./_ProjectArtifacts";
import { _EnvironmentVariable } from "./_EnvironmentVariable";
import { _SourceAuth } from "./_SourceAuth";
import { _GitSubmodulesConfig } from "./_GitSubmodulesConfig";
import { _ProjectCache } from "./_ProjectCache";
import { _LogsConfig } from "./_LogsConfig";
import { _RegistryCredential } from "./_RegistryCredential";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * StartBuildInput shape
 */
export interface StartBuildInput {
  /**
   * <p>The name of the AWS CodeBuild build project to start running a build.</p>
   */
  projectName: string;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySourcesOverride?: Array<_ProjectSource> | Iterable<_ProjectSource>;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects that specify one or more versions of the project's secondary sources to be used for this build only. </p>
   */
  secondarySourcesVersionOverride?:
    | Array<_ProjectSourceVersion>
    | Iterable<_ProjectSourceVersion>;

  /**
   * <p>A version of the build input to be built, for this build only. If not specified, the latest version is used. If specified, must be one of:</p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p>Build output artifact settings that override, for this build only, the latest ones already defined in the build project.</p>
   */
  artifactsOverride?: _ProjectArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifactsOverride?:
    | Array<_ProjectArtifacts>
    | Iterable<_ProjectArtifacts>;

  /**
   * <p>A set of environment variables that overrides, for this build only, the latest ones already defined in the build project.</p>
   */
  environmentVariablesOverride?:
    | Array<_EnvironmentVariable>
    | Iterable<_EnvironmentVariable>;

  /**
   * <p>A source input type, for this build, that overrides the source input defined in the build project.</p>
   */
  sourceTypeOverride?:
    | "CODECOMMIT"
    | "CODEPIPELINE"
    | "GITHUB"
    | "S3"
    | "BITBUCKET"
    | "GITHUB_ENTERPRISE"
    | "NO_SOURCE"
    | string;

  /**
   * <p>A location that overrides, for this build, the source location for the one defined in the build project.</p>
   */
  sourceLocationOverride?: string;

  /**
   * <p>An authorization type for this build that overrides the one defined in the build project. This override applies only if the build project's source is BitBucket or GitHub.</p>
   */
  sourceAuthOverride?: _SourceAuth;

  /**
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this build only, any previous depth of history defined in the build project.</p>
   */
  gitCloneDepthOverride?: number;

  /**
   * <p> Information about the Git submodules configuration for this build of an AWS CodeBuild build project. </p>
   */
  gitSubmodulesConfigOverride?: _GitSubmodulesConfig;

  /**
   * <p>A build spec declaration that overrides, for this build only, the latest one already defined in the build project.</p>
   */
  buildspecOverride?: string;

  /**
   * <p>Enable this flag to override the insecure SSL setting that is specified in the build project. The insecure SSL setting determines whether to ignore SSL warnings while connecting to the project source code. This override applies only if the build's source is GitHub Enterprise.</p>
   */
  insecureSslOverride?: boolean;

  /**
   * <p> Set to true to report to your source provider the status of a build's start and completion. If you use this option with a source provider other than GitHub, GitHub Enterprise, or Bitbucket, an invalidInputException is thrown. </p>
   */
  reportBuildStatusOverride?: boolean;

  /**
   * <p>A container type for this build that overrides the one specified in the build project.</p>
   */
  environmentTypeOverride?: "WINDOWS_CONTAINER" | "LINUX_CONTAINER" | string;

  /**
   * <p>The name of an image for this build that overrides the one specified in the build project.</p>
   */
  imageOverride?: string;

  /**
   * <p>The name of a compute type for this build that overrides the one specified in the build project.</p>
   */
  computeTypeOverride?:
    | "BUILD_GENERAL1_SMALL"
    | "BUILD_GENERAL1_MEDIUM"
    | "BUILD_GENERAL1_LARGE"
    | string;

  /**
   * <p>The name of a certificate for this build that overrides the one specified in the build project.</p>
   */
  certificateOverride?: string;

  /**
   * <p>A ProjectCache object specified for this build that overrides the one defined in the build project.</p>
   */
  cacheOverride?: _ProjectCache;

  /**
   * <p>The name of a service role for this build that overrides the one specified in the build project.</p>
   */
  serviceRoleOverride?: string;

  /**
   * <p>Enable this flag to override privileged mode in the build project.</p>
   */
  privilegedModeOverride?: boolean;

  /**
   * <p>The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this build only, the latest setting already defined in the build project.</p>
   */
  timeoutInMinutesOverride?: number;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutesOverride?: number;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the StartBuild request. The token is included in the StartBuild request and is valid for 12 hours. If you repeat the StartBuild request with the same token, but change a parameter, AWS CodeBuild returns a parameter mismatch error. </p>
   */
  idempotencyToken?: string;

  /**
   * <p> Log settings for this build that override the log settings defined in the build project. </p>
   */
  logsConfigOverride?: _LogsConfig;

  /**
   * <p> The credentials for access to a private registry. </p>
   */
  registryCredentialOverride?: _RegistryCredential;

  /**
   * <p> The type of credentials AWS CodeBuild uses to pull images in your build. There are two valid values: </p> <ul> <li> <p> <code>CODEBUILD</code> specifies that AWS CodeBuild uses its own credentials. This requires that you modify your ECR repository policy to trust AWS CodeBuild's service principal.</p> </li> <li> <p> <code>SERVICE_ROLE</code> specifies that AWS CodeBuild uses your build project's service role. </p> </li> </ul> <p> When using a cross-account or private registry image, you must use SERVICE_ROLE credentials. When using an AWS CodeBuild curated image, you must use CODEBUILD credentials. </p>
   */
  imagePullCredentialsTypeOverride?: "CODEBUILD" | "SERVICE_ROLE" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
