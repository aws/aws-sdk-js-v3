import { _ProjectSource, _UnmarshalledProjectSource } from "./_ProjectSource";
import {
  _ProjectSourceVersion,
  _UnmarshalledProjectSourceVersion
} from "./_ProjectSourceVersion";
import {
  _ProjectArtifacts,
  _UnmarshalledProjectArtifacts
} from "./_ProjectArtifacts";
import { _ProjectCache, _UnmarshalledProjectCache } from "./_ProjectCache";
import {
  _ProjectEnvironment,
  _UnmarshalledProjectEnvironment
} from "./_ProjectEnvironment";
import { _Tag, _UnmarshalledTag } from "./_Tag";
import { _Webhook, _UnmarshalledWebhook } from "./_Webhook";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";
import { _ProjectBadge, _UnmarshalledProjectBadge } from "./_ProjectBadge";
import { _LogsConfig, _UnmarshalledLogsConfig } from "./_LogsConfig";

/**
 * <p>Information about a build project.</p>
 */
export interface _Project {
  /**
   * <p>The name of the build project.</p>
   */
  name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   */
  arn?: string;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * <p>Information about the build input source code for this build project.</p>
   */
  source?: _ProjectSource;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: Array<_ProjectSource> | Iterable<_ProjectSource>;

  /**
   * <p>A version of the build input to be built for this project. If not specified, the latest version is used. If specified, it must be one of:</p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul> <p> If <code>sourceVersion</code> is specified at the build level, then that version takes precedence over this <code>sourceVersion</code> (at the project level). </p> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?:
    | Array<_ProjectSourceVersion>
    | Iterable<_ProjectSourceVersion>;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts?: _ProjectArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: Array<_ProjectArtifacts> | Iterable<_ProjectArtifacts>;

  /**
   * <p>Information about the cache for the build project.</p>
   */
  cache?: _ProjectCache;

  /**
   * <p>Information about the build environment for this build project.</p>
   */
  environment?: _ProjectEnvironment;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services on behalf of the AWS account.</p>
   */
  serviceRole?: string;

  /**
   * <p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any related build that did not get marked as completed. The default is 60 minutes.</p>
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
   * <p>The tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>When the build project was created, expressed in Unix time format.</p>
   */
  created?: Date | string | number;

  /**
   * <p>When the build project's settings were last modified, expressed in Unix time format.</p>
   */
  lastModified?: Date | string | number;

  /**
   * <p>Information about a webhook that connects repository events to a build project in AWS CodeBuild.</p>
   */
  webhook?: _Webhook;

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  vpcConfig?: _VpcConfig;

  /**
   * <p>Information about the build badge for the build project.</p>
   */
  badge?: _ProjectBadge;

  /**
   * <p> Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both. </p>
   */
  logsConfig?: _LogsConfig;
}

export interface _UnmarshalledProject extends _Project {
  /**
   * <p>Information about the build input source code for this build project.</p>
   */
  source?: _UnmarshalledProjectSource;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: Array<_UnmarshalledProjectSource>;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. If <code>secondarySourceVersions</code> is specified at the build level, then they take over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?: Array<_UnmarshalledProjectSourceVersion>;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts?: _UnmarshalledProjectArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: Array<_UnmarshalledProjectArtifacts>;

  /**
   * <p>Information about the cache for the build project.</p>
   */
  cache?: _UnmarshalledProjectCache;

  /**
   * <p>Information about the build environment for this build project.</p>
   */
  environment?: _UnmarshalledProjectEnvironment;

  /**
   * <p>The tags for this build project.</p> <p>These tags are available for use by AWS services that support AWS CodeBuild build project tags.</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * <p>When the build project was created, expressed in Unix time format.</p>
   */
  created?: Date;

  /**
   * <p>When the build project's settings were last modified, expressed in Unix time format.</p>
   */
  lastModified?: Date;

  /**
   * <p>Information about a webhook that connects repository events to a build project in AWS CodeBuild.</p>
   */
  webhook?: _UnmarshalledWebhook;

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  vpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>Information about the build badge for the build project.</p>
   */
  badge?: _UnmarshalledProjectBadge;

  /**
   * <p> Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an S3 bucket, or both. </p>
   */
  logsConfig?: _UnmarshalledLogsConfig;
}
