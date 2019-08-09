import { _BuildPhase, _UnmarshalledBuildPhase } from "./_BuildPhase";
import { _ProjectSource, _UnmarshalledProjectSource } from "./_ProjectSource";
import {
  _ProjectSourceVersion,
  _UnmarshalledProjectSourceVersion
} from "./_ProjectSourceVersion";
import {
  _BuildArtifacts,
  _UnmarshalledBuildArtifacts
} from "./_BuildArtifacts";
import { _ProjectCache, _UnmarshalledProjectCache } from "./_ProjectCache";
import {
  _ProjectEnvironment,
  _UnmarshalledProjectEnvironment
} from "./_ProjectEnvironment";
import { _LogsLocation, _UnmarshalledLogsLocation } from "./_LogsLocation";
import { _VpcConfig, _UnmarshalledVpcConfig } from "./_VpcConfig";
import {
  _NetworkInterface,
  _UnmarshalledNetworkInterface
} from "./_NetworkInterface";

/**
 * <p>Information about a build.</p>
 */
export interface _Build {
  /**
   * <p>The unique ID for the build.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the build.</p>
   */
  arn?: string;

  /**
   * <p>When the build process started, expressed in Unix time format.</p>
   */
  startTime?: Date | string | number;

  /**
   * <p>When the build process ended, expressed in Unix time format.</p>
   */
  endTime?: Date | string | number;

  /**
   * <p>The current build phase.</p>
   */
  currentPhase?: string;

  /**
   * <p>The current status of the build. Valid values include:</p> <ul> <li> <p> <code>FAILED</code>: The build failed.</p> </li> <li> <p> <code>FAULT</code>: The build faulted.</p> </li> <li> <p> <code>IN_PROGRESS</code>: The build is still in progress.</p> </li> <li> <p> <code>STOPPED</code>: The build stopped.</p> </li> <li> <p> <code>SUCCEEDED</code>: The build succeeded.</p> </li> <li> <p> <code>TIMED_OUT</code>: The build timed out.</p> </li> </ul>
   */
  buildStatus?:
    | "SUCCEEDED"
    | "FAILED"
    | "FAULT"
    | "TIMED_OUT"
    | "IN_PROGRESS"
    | "STOPPED"
    | string;

  /**
   * <p>Any version identifier for the version of the source code to be built. If <code>sourceVersion</code> is specified at the project level, then this <code>sourceVersion</code> (at the build level) takes precedence. </p> <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p> An identifier for the version of this build's source code. </p> <ul> <li> <p> For AWS CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. </p> </li> <li> <p> For AWS CodePipeline, the source revision provided by AWS CodePipeline. </p> </li> <li> <p> For Amazon Simple Storage Service (Amazon S3), this does not apply. </p> </li> </ul>
   */
  resolvedSourceVersion?: string;

  /**
   * <p>The name of the AWS CodeBuild project.</p>
   */
  projectName?: string;

  /**
   * <p>Information about all previous build phases that are complete and information about any current build phase that is not yet complete.</p>
   */
  phases?: Array<_BuildPhase> | Iterable<_BuildPhase>;

  /**
   * <p>Information about the source code to be built.</p>
   */
  source?: _ProjectSource;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: Array<_ProjectSource> | Iterable<_ProjectSource>;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. Each <code>ProjectSourceVersion</code> must be one of: </p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul>
   */
  secondarySourceVersions?:
    | Array<_ProjectSourceVersion>
    | Iterable<_ProjectSourceVersion>;

  /**
   * <p>Information about the output artifacts for the build.</p>
   */
  artifacts?: _BuildArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: Array<_BuildArtifacts> | Iterable<_BuildArtifacts>;

  /**
   * <p>Information about the cache for the build.</p>
   */
  cache?: _ProjectCache;

  /**
   * <p>Information about the build environment for this build.</p>
   */
  environment?: _ProjectEnvironment;

  /**
   * <p>The name of a service role used for this build.</p>
   */
  serviceRole?: string;

  /**
   * <p>Information about the build's logs in Amazon CloudWatch Logs.</p>
   */
  logs?: _LogsLocation;

  /**
   * <p>How long, in minutes, for AWS CodeBuild to wait before timing out this build if it does not get marked as completed.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>Whether the build is complete. True if complete; otherwise, false.</p>
   */
  buildComplete?: boolean;

  /**
   * <p>The entity that started the build. Valid values include:</p> <ul> <li> <p>If AWS CodePipeline started the build, the pipeline's name (for example, <code>codepipeline/my-demo-pipeline</code>).</p> </li> <li> <p>If an AWS Identity and Access Management (IAM) user started the build, the user's name (for example, <code>MyUserName</code>).</p> </li> <li> <p>If the Jenkins plugin for AWS CodeBuild started the build, the string <code>CodeBuild-Jenkins-Plugin</code>.</p> </li> </ul>
   */
  initiator?: string;

  /**
   * <p>If your AWS CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.</p>
   */
  vpcConfig?: _VpcConfig;

  /**
   * <p>Describes a network interface.</p>
   */
  networkInterface?: _NetworkInterface;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output artifacts.</p> <note> <p> You can use a cross-account KMS key to encrypt the build output artifacts if your service role has permission to that key. </p> </note> <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using the format <code>alias/<i>alias-name</i> </code>).</p>
   */
  encryptionKey?: string;
}

export interface _UnmarshalledBuild extends _Build {
  /**
   * <p>When the build process started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * <p>When the build process ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * <p>Information about all previous build phases that are complete and information about any current build phase that is not yet complete.</p>
   */
  phases?: Array<_UnmarshalledBuildPhase>;

  /**
   * <p>Information about the source code to be built.</p>
   */
  source?: _UnmarshalledProjectSource;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: Array<_UnmarshalledProjectSource>;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. Each <code>ProjectSourceVersion</code> must be one of: </p> <ul> <li> <p>For AWS CodeCommit: the commit ID to use.</p> </li> <li> <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a pull request ID is specified, it must use the format <code>pr/pull-request-ID</code> (for example, <code>pr/25</code>). If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Bitbucket: the commit ID, branch name, or tag name that corresponds to the version of the source code you want to build. If a branch name is specified, the branch's HEAD commit ID is used. If not specified, the default branch's HEAD commit ID is used.</p> </li> <li> <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP file to use.</p> </li> </ul>
   */
  secondarySourceVersions?: Array<_UnmarshalledProjectSourceVersion>;

  /**
   * <p>Information about the output artifacts for the build.</p>
   */
  artifacts?: _UnmarshalledBuildArtifacts;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: Array<_UnmarshalledBuildArtifacts>;

  /**
   * <p>Information about the cache for the build.</p>
   */
  cache?: _UnmarshalledProjectCache;

  /**
   * <p>Information about the build environment for this build.</p>
   */
  environment?: _UnmarshalledProjectEnvironment;

  /**
   * <p>Information about the build's logs in Amazon CloudWatch Logs.</p>
   */
  logs?: _UnmarshalledLogsLocation;

  /**
   * <p>If your AWS CodeBuild project accesses resources in an Amazon VPC, you provide this parameter that identifies the VPC ID and the list of security group IDs and subnet IDs. The security groups and subnets must belong to the same VPC. You must provide at least one security group and one subnet ID.</p>
   */
  vpcConfig?: _UnmarshalledVpcConfig;

  /**
   * <p>Describes a network interface.</p>
   */
  networkInterface?: _UnmarshalledNetworkInterface;
}
