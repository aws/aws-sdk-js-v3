import { _ProjectSource } from "./_ProjectSource";
import { _ProjectSourceVersion } from "./_ProjectSourceVersion";
import { _ProjectArtifacts } from "./_ProjectArtifacts";
import { _ProjectCache } from "./_ProjectCache";
import { _ProjectEnvironment } from "./_ProjectEnvironment";
import { _Tag } from "./_Tag";
import { _VpcConfig } from "./_VpcConfig";
import { _LogsConfig } from "./_LogsConfig";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateProjectInput shape
 */
export interface CreateProjectInput {
  /**
   * <p>The name of the build project.</p>
   */
  name: string;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * <p>Information about the build input source code for the build project.</p>
   */
  source: _ProjectSource;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: Array<_ProjectSource> | Iterable<_ProjectSource>;

  /**
   * <p> A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of: </p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take precedence over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?:
    | Array<_ProjectSourceVersion>
    | Iterable<_ProjectSourceVersion>;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts: _ProjectArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: Array<_ProjectArtifacts> | Iterable<_ProjectArtifacts>;

  /**
   * <p>Stores recently used information so that it can be quickly accessed at a later time.</p>
   */
  cache?: _ProjectCache;

  /**
   * <p>Information about the build environment for the build project.</p>
   */
  environment: _ProjectEnvironment;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>
   */
  serviceRole: string;

  /**
   * <p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before it times out any build that has not been marked as completed. The default is 60 minutes.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p>A set of tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.</p>
   */
  vpcConfig?: _VpcConfig;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * <p> Information about logs for the build project. These can be logs in Amazon CloudWatch Logs, logs uploaded to a specified S3 bucket, or both. </p>
   */
  logsConfig?: _LogsConfig;

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
