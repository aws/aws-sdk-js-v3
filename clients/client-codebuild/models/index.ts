import { SENSITIVE_STRING, SmithyException as __SmithyException, isa as __isa } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>An AWS service limit was exceeded for the calling AWS account.</p>
 */
export interface AccountLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "AccountLimitExceededException";
  $fault: "client";
  message?: string;
}

export namespace AccountLimitExceededException {
  export const filterSensitiveLog = (obj: AccountLimitExceededException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is AccountLimitExceededException => __isa(o, "AccountLimitExceededException");
}

export enum ArtifactNamespace {
  BUILD_ID = "BUILD_ID",
  NONE = "NONE",
}

export enum ArtifactPackaging {
  NONE = "NONE",
  ZIP = "ZIP",
}

export enum ArtifactsType {
  CODEPIPELINE = "CODEPIPELINE",
  NO_ARTIFACTS = "NO_ARTIFACTS",
  S3 = "S3",
}

export enum AuthType {
  BASIC_AUTH = "BASIC_AUTH",
  OAUTH = "OAUTH",
  PERSONAL_ACCESS_TOKEN = "PERSONAL_ACCESS_TOKEN",
}

export interface BatchDeleteBuildsInput {
  __type?: "BatchDeleteBuildsInput";
  /**
   * <p>The IDs of the builds to delete.</p>
   */
  ids: string[] | undefined;
}

export namespace BatchDeleteBuildsInput {
  export const filterSensitiveLog = (obj: BatchDeleteBuildsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeleteBuildsInput => __isa(o, "BatchDeleteBuildsInput");
}

export interface BatchDeleteBuildsOutput {
  __type?: "BatchDeleteBuildsOutput";
  /**
   * <p>The IDs of the builds that were successfully deleted.</p>
   */
  buildsDeleted?: string[];

  /**
   * <p>Information about any builds that could not be successfully deleted.</p>
   */
  buildsNotDeleted?: BuildNotDeleted[];
}

export namespace BatchDeleteBuildsOutput {
  export const filterSensitiveLog = (obj: BatchDeleteBuildsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchDeleteBuildsOutput => __isa(o, "BatchDeleteBuildsOutput");
}

export interface BatchGetBuildBatchesInput {
  __type?: "BatchGetBuildBatchesInput";
  /**
   * <p>An array that contains the batch build identifiers to retrieve.</p>
   */
  ids: string[] | undefined;
}

export namespace BatchGetBuildBatchesInput {
  export const filterSensitiveLog = (obj: BatchGetBuildBatchesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetBuildBatchesInput => __isa(o, "BatchGetBuildBatchesInput");
}

export interface BatchGetBuildBatchesOutput {
  __type?: "BatchGetBuildBatchesOutput";
  /**
   * <p>An array that contains the identifiers of any batch builds that are not found.</p>
   */
  buildBatchesNotFound?: string[];

  /**
   * <p>An array of <code>BuildBatch</code> objects that represent the retrieved batch
   *             builds.</p>
   */
  buildBatches?: BuildBatch[];
}

export namespace BatchGetBuildBatchesOutput {
  export const filterSensitiveLog = (obj: BatchGetBuildBatchesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetBuildBatchesOutput => __isa(o, "BatchGetBuildBatchesOutput");
}

export interface BatchGetBuildsInput {
  __type?: "BatchGetBuildsInput";
  /**
   * <p>The IDs of the builds.</p>
   */
  ids: string[] | undefined;
}

export namespace BatchGetBuildsInput {
  export const filterSensitiveLog = (obj: BatchGetBuildsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetBuildsInput => __isa(o, "BatchGetBuildsInput");
}

export interface BatchGetBuildsOutput {
  __type?: "BatchGetBuildsOutput";
  /**
   * <p>Information about the requested builds.</p>
   */
  builds?: Build[];

  /**
   * <p>The IDs of builds for which information could not be found.</p>
   */
  buildsNotFound?: string[];
}

export namespace BatchGetBuildsOutput {
  export const filterSensitiveLog = (obj: BatchGetBuildsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetBuildsOutput => __isa(o, "BatchGetBuildsOutput");
}

export interface BatchGetProjectsInput {
  __type?: "BatchGetProjectsInput";
  /**
   * <p>The names or ARNs of the build projects. To get information about a project shared
   *             with your AWS account, its ARN must be specified. You cannot specify a shared project
   *             using its name.</p>
   */
  names: string[] | undefined;
}

export namespace BatchGetProjectsInput {
  export const filterSensitiveLog = (obj: BatchGetProjectsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetProjectsInput => __isa(o, "BatchGetProjectsInput");
}

export interface BatchGetProjectsOutput {
  __type?: "BatchGetProjectsOutput";
  /**
   * <p>Information about the requested build projects.</p>
   */
  projects?: Project[];

  /**
   * <p>The names of build projects for which information could not be found.</p>
   */
  projectsNotFound?: string[];
}

export namespace BatchGetProjectsOutput {
  export const filterSensitiveLog = (obj: BatchGetProjectsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetProjectsOutput => __isa(o, "BatchGetProjectsOutput");
}

export interface BatchGetReportGroupsInput {
  __type?: "BatchGetReportGroupsInput";
  /**
   * <p>
   *       An array of report group ARNs that identify the report groups to return.
   *     </p>
   */
  reportGroupArns: string[] | undefined;
}

export namespace BatchGetReportGroupsInput {
  export const filterSensitiveLog = (obj: BatchGetReportGroupsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetReportGroupsInput => __isa(o, "BatchGetReportGroupsInput");
}

export interface BatchGetReportGroupsOutput {
  __type?: "BatchGetReportGroupsOutput";
  /**
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>ReportGroup</code>.
   *     </p>
   */
  reportGroupsNotFound?: string[];

  /**
   * <p>
   *       The array of report groups returned by <code>BatchGetReportGroups</code>.
   *     </p>
   */
  reportGroups?: ReportGroup[];
}

export namespace BatchGetReportGroupsOutput {
  export const filterSensitiveLog = (obj: BatchGetReportGroupsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetReportGroupsOutput => __isa(o, "BatchGetReportGroupsOutput");
}

export interface BatchGetReportsInput {
  __type?: "BatchGetReportsInput";
  /**
   * <p>
   *       An array of ARNs that identify the <code>Report</code> objects to return.
   *     </p>
   */
  reportArns: string[] | undefined;
}

export namespace BatchGetReportsInput {
  export const filterSensitiveLog = (obj: BatchGetReportsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetReportsInput => __isa(o, "BatchGetReportsInput");
}

export interface BatchGetReportsOutput {
  __type?: "BatchGetReportsOutput";
  /**
   * <p>
   *       An array of ARNs passed to <code>BatchGetReportGroups</code> that are not associated with a <code>Report</code>.
   *     </p>
   */
  reportsNotFound?: string[];

  /**
   * <p>
   *       The array of <code>Report</code> objects returned by <code>BatchGetReports</code>.
   *     </p>
   */
  reports?: Report[];
}

export namespace BatchGetReportsOutput {
  export const filterSensitiveLog = (obj: BatchGetReportsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchGetReportsOutput => __isa(o, "BatchGetReportsOutput");
}

/**
 * <p>Specifies restrictions for the batch build.</p>
 */
export interface BatchRestrictions {
  __type?: "BatchRestrictions";
  /**
   * <p>Specifies the maximum number of builds allowed.</p>
   */
  maximumBuildsAllowed?: number;

  /**
   * <p>An array of strings that specify the compute types that are allowed for the batch
   *             build. See <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build environment
   *                 compute types</a> in the <i>AWS CodeBuild User Guide</i> for these values.
   *         </p>
   */
  computeTypesAllowed?: string[];
}

export namespace BatchRestrictions {
  export const filterSensitiveLog = (obj: BatchRestrictions): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BatchRestrictions => __isa(o, "BatchRestrictions");
}

/**
 * <p>Information about a build.</p>
 */
export interface Build {
  __type?: "Build";
  /**
   * <p>Information about the build's logs in Amazon CloudWatch Logs.</p>
   */
  logs?: LogsLocation;

  /**
   * <p>
   *          An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *          specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *          <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *       </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * <p>When the build process started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * <p>The name of a service role used for this build.</p>
   */
  serviceRole?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output
   *             artifacts.</p>
   *         <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p>Information about the build environment for this build.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * <p>The number of the build. For each project, the <code>buildNumber</code> of its first
   *             build is <code>1</code>. The <code>buildNumber</code> of each subsequent build is
   *             incremented by <code>1</code>. If a build is deleted, the <code>buildNumber</code> of
   *             other builds does not change.</p>
   */
  buildNumber?: number;

  /**
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
   * <p>The name of the AWS CodeBuild project.</p>
   */
  projectName?: string;

  /**
   * <p>Whether the build is complete. True if complete; otherwise, false.</p>
   */
  buildComplete?: boolean;

  /**
   * <p>If your AWS CodeBuild project accesses resources in an Amazon VPC, you provide this parameter
   *             that identifies the VPC ID and the list of security group IDs and subnet IDs. The
   *             security groups and subnets must belong to the same VPC. You must provide at least one
   *             security group and one subnet ID.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * <p>The current build phase.</p>
   */
  currentPhase?: string;

  /**
   * <p>Describes a network interface.</p>
   */
  networkInterface?: NetworkInterface;

  /**
   * <p>When the build process ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>The unique ID for the build.</p>
   */
  id?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the build.</p>
   */
  arn?: string;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * <p>How long, in minutes, for AWS CodeBuild to wait before timing out this build if it does not
   *             get marked as completed.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p> A list of exported environment variables for this build. </p>
   */
  exportedEnvironmentVariables?: ExportedEnvironmentVariable[];

  /**
   * <p>Contains information about the debug session for this build.</p>
   */
  debugSession?: DebugSession;

  /**
   * <p> An identifier for the version of this build's source code. </p>
   *         <ul>
   *             <li>
   *                 <p> For AWS CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID. </p>
   *             </li>
   *             <li>
   *                 <p> For AWS CodePipeline, the source revision provided by AWS CodePipeline. </p>
   *             </li>
   *             <li>
   *                 <p> For Amazon Simple Storage Service (Amazon S3), this does not apply. </p>
   *             </li>
   *          </ul>
   */
  resolvedSourceVersion?: string;

  /**
   * <p>The ARN of the batch build that this build is a member of, if applicable.</p>
   */
  buildBatchArn?: string;

  /**
   * <p>Any version identifier for the version of the source code to be built. If
   *                 <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. Each
   *                 <code>ProjectSourceVersion</code> must be one of: </p>
   *         <ul>
   *             <li>
   *                 <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
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
   *                 <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *                     file to use.</p>
   *             </li>
   *          </ul>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: BuildArtifacts[];

  /**
   * <p>Information about the source code to be built.</p>
   */
  source?: ProjectSource;

  /**
   * <p>The entity that started the build. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>If AWS CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If an AWS Identity and Access Management (IAM) user started the build, the user's name (for example,
   *                         <code>MyUserName</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If the Jenkins plugin for AWS CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   */
  initiator?: string;

  /**
   * <p>Information about the cache for the build.</p>
   */
  cache?: ProjectCache;

  /**
   * <p>Information about all previous build phases that are complete and information about
   *             any current build phase that is not yet complete.</p>
   */
  phases?: BuildPhase[];

  /**
   * <p>Information about the output artifacts for the build.</p>
   */
  artifacts?: BuildArtifacts;

  /**
   * <p> An array of the ARNs associated with this build's reports. </p>
   */
  reportArns?: string[];
}

export namespace Build {
  export const filterSensitiveLog = (obj: Build): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Build => __isa(o, "Build");
}

/**
 * <p>Information about build output artifacts.</p>
 */
export interface BuildArtifacts {
  __type?: "BuildArtifacts";
  /**
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
   * <p> Information that tells you if encryption for build artifacts is disabled. </p>
   */
  encryptionDisabled?: boolean;

  /**
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
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;

  /**
   * <p>Information about the location of the build artifacts.</p>
   */
  location?: string;
}

export namespace BuildArtifacts {
  export const filterSensitiveLog = (obj: BuildArtifacts): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildArtifacts => __isa(o, "BuildArtifacts");
}

/**
 * <p>Contains information about a batch build.</p>
 */
export interface BuildBatch {
  __type?: "BuildBatch";
  /**
   * <p>Information about the build input source code for the build project.</p>
   */
  source?: ProjectSource;

  /**
   * <p>The name of the batch build project.</p>
   */
  projectName?: string;

  /**
   * <p>An array of <code>BuildBatchPhase</code> objects the specify the phases of the
   *             batch build.</p>
   */
  phases?: BuildBatchPhase[];

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * <p>Specifies the amount of time, in minutes, that the batch build is allowed to be queued
   *             before it times out.</p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>An array of <code>ProjectFileSystemLocation</code> objects for the batch build
   *             project. A <code>ProjectFileSystemLocation</code> object specifies the
   *                 <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *                 <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon
   *             Elastic File System. </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * <p> Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a
   *             specified S3 bucket, or both. </p>
   */
  logConfig?: LogsConfig;

  /**
   * <p>The date and time that the batch build ended.</p>
   */
  endTime?: Date;

  /**
   * <p>An array of <code>ProjectSource</code> objects that define the sources for the batch
   *             build.</p>
   */
  secondarySources?: ProjectSource[];

  /**
   * <p>The identifier of the resolved version of this batch build's source code.</p>
   *         <ul>
   *             <li>
   *                 <p>For AWS CodeCommit, GitHub, GitHub Enterprise, and BitBucket, the commit ID.</p>
   *             </li>
   *             <li>
   *                 <p>For AWS CodePipeline, the source revision provided by AWS CodePipeline.</p>
   *             </li>
   *             <li>
   *                 <p>For Amazon Simple Storage Service (Amazon S3), this does not apply.</p>
   *             </li>
   *          </ul>
   */
  resolvedSourceVersion?: string;

  /**
   * <p>Specifies the maximum amount of time, in minutes, that the build in a batch must be
   *             completed in.</p>
   */
  buildTimeoutInMinutes?: number;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. Each
   *                 <code>ProjectSourceVersion</code> must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
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
   *                <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * <p>The current phase of the batch build.</p>
   */
  currentPhase?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the batch build output
   *             artifacts.</p>
   *         <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p>Information about the build environment of the build project.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * <p>An array of <code>BuildArtifacts</code> objects the define the build artifacts
   *             for this batch build.</p>
   */
  secondaryArtifacts?: BuildArtifacts[];

  /**
   * <p>The number of the batch build. For each project, the <code>buildBatchNumber</code> of its
   *             first batch build is <code>1</code>. The <code>buildBatchNumber</code> of each subsequent
   *             batch build is incremented by <code>1</code>. If a batch build is deleted, the
   *                 <code>buildBatchNumber</code> of other batch builds does not change.</p>
   */
  buildBatchNumber?: number;

  /**
   * <p>An array of <code>BuildGroup</code> objects that define the build groups for the
   *             batch build.</p>
   */
  buildGroups?: BuildGroup[];

  /**
   * <p>A <code>BuildArtifacts</code> object the defines the build artifacts for this batch build.</p>
   */
  artifacts?: BuildArtifacts;

  /**
   * <p>Information about the cache for the build project.</p>
   */
  cache?: ProjectCache;

  /**
   * <p>Indicates if the batch build is complete.</p>
   */
  complete?: boolean;

  /**
   * <p>The date and time that the batch build started.</p>
   */
  startTime?: Date;

  /**
   * <p>The identifier of the batch build.</p>
   */
  id?: string;

  /**
   * <p>The ARN of the batch build.</p>
   */
  arn?: string;

  /**
   * <p>The name of a service role used for builds in the batch.</p>
   */
  serviceRole?: string;

  /**
   * <p>Contains configuration information about a batch build project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * <p>The status of the batch build.</p>
   */
  buildBatchStatus?: StatusType | string;

  /**
   * <p>The entity that started the batch build. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>If AWS CodePipeline started the build, the pipeline's name (for example,
   *                         <code>codepipeline/my-demo-pipeline</code>).</p>
   *             </li>
   *             <li>
   *                 <p>If an AWS Identity and Access Management (IAM) user started the build, the user's name.</p>
   *             </li>
   *             <li>
   *                 <p>If the Jenkins plugin for AWS CodeBuild started the build, the string
   *                         <code>CodeBuild-Jenkins-Plugin</code>.</p>
   *             </li>
   *          </ul>
   */
  initiator?: string;

  /**
   * <p>The identifier of the version of the source code to be built.</p>
   */
  sourceVersion?: string;
}

export namespace BuildBatch {
  export const filterSensitiveLog = (obj: BuildBatch): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildBatch => __isa(o, "BuildBatch");
}

/**
 * <p>Specifies filters when retrieving batch builds.</p>
 */
export interface BuildBatchFilter {
  __type?: "BuildBatchFilter";
  /**
   * <p>The status of the batch builds to retrieve. Only batch builds that have this status will
   *             be retrieved.</p>
   */
  status?: StatusType | string;
}

export namespace BuildBatchFilter {
  export const filterSensitiveLog = (obj: BuildBatchFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildBatchFilter => __isa(o, "BuildBatchFilter");
}

/**
 * <p>Contains information about a stage for a batch build.</p>
 */
export interface BuildBatchPhase {
  __type?: "BuildBatchPhase";
  /**
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
   *             <dt>QUEUED</dt>
   *             <dd>
   *                     <p>The build has been submitted and is queued behind other submitted
   *                         builds.</p>
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
   * <p>When the batch build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * <p>How long, in seconds, between the starting and ending times of the batch build's
   *         phase.</p>
   */
  durationInSeconds?: number;

  /**
   * <p>Additional information about the batch build phase. Especially to help troubleshoot a
   *             failed btach build.</p>
   */
  contexts?: PhaseContext[];

  /**
   * <p>When the batch build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date;
}

export namespace BuildBatchPhase {
  export const filterSensitiveLog = (obj: BuildBatchPhase): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildBatchPhase => __isa(o, "BuildBatchPhase");
}

export enum BuildBatchPhaseType {
  COMBINE_ARTIFACTS = "COMBINE_ARTIFACTS",
  DOWNLOAD_BATCHSPEC = "DOWNLOAD_BATCHSPEC",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  SUBMITTED = "SUBMITTED",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>Contains information about a batch build build group. Build groups are used to combine
 *             builds that can run in parallel, while still being able to set dependencies on other
 *             build groups.</p>
 */
export interface BuildGroup {
  __type?: "BuildGroup";
  /**
   * <p>A <code>BuildSummary</code> object that contains a summary of the current build
   *             group.</p>
   */
  currentBuildSummary?: BuildSummary;

  /**
   * <p>An array of <code>BuildSummary</code> objects that contain summaries of previous
   *             build groups.</p>
   */
  priorBuildSummaryList?: BuildSummary[];

  /**
   * <p>An array of strings that contain the identifiers of the build groups that this build
   *             group depends on.</p>
   */
  dependsOn?: string[];

  /**
   * <p>Specifies if failures in this build group can be ignored.</p>
   */
  ignoreFailure?: boolean;

  /**
   * <p>Contains the identifier of the build group.</p>
   */
  identifier?: string;
}

export namespace BuildGroup {
  export const filterSensitiveLog = (obj: BuildGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildGroup => __isa(o, "BuildGroup");
}

/**
 * <p>Information about a build that could not be successfully deleted.</p>
 */
export interface BuildNotDeleted {
  __type?: "BuildNotDeleted";
  /**
   * <p>The ID of the build that could not be successfully deleted.</p>
   */
  id?: string;

  /**
   * <p>Additional information about the build that could not be successfully deleted.</p>
   */
  statusCode?: string;
}

export namespace BuildNotDeleted {
  export const filterSensitiveLog = (obj: BuildNotDeleted): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildNotDeleted => __isa(o, "BuildNotDeleted");
}

/**
 * <p>Information about a stage for a build.</p>
 */
export interface BuildPhase {
  __type?: "BuildPhase";
  /**
   * <p>When the build phase ended, expressed in Unix time format.</p>
   */
  endTime?: Date;

  /**
   * <p>Additional information about a build phase, especially to help troubleshoot a failed
   *             build.</p>
   */
  contexts?: PhaseContext[];

  /**
   * <p>The name of the build phase. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BUILD</code>: Core build activities typically occur in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>COMPLETED</code>: The build has been completed.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DOWNLOAD_SOURCE</code>: Source code is being downloaded in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>FINALIZING</code>: The build process is completing in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INSTALL</code>: Installation activities typically occur in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>POST_BUILD</code>: Post-build activities typically occur in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PRE_BUILD</code>: Pre-build activities typically occur in this build
   *                     phase.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PROVISIONING</code>: The build environment is being set up.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>QUEUED</code>: The build has been submitted and is queued behind other
   *                     submitted builds.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SUBMITTED</code>: The build has been submitted.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>UPLOAD_ARTIFACTS</code>: Build output artifacts are being uploaded to
   *                     the output location.</p>
   *             </li>
   *          </ul>
   */
  phaseType?: BuildPhaseType | string;

  /**
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
   *             <dt>QUEUED</dt>
   *             <dd>
   *                     <p>The build has been submitted and is queued behind other submitted
   *                         builds.</p>
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
   * <p>When the build phase started, expressed in Unix time format.</p>
   */
  startTime?: Date;

  /**
   * <p>How long, in seconds, between the starting and ending times of the build's
   *             phase.</p>
   */
  durationInSeconds?: number;
}

export namespace BuildPhase {
  export const filterSensitiveLog = (obj: BuildPhase): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildPhase => __isa(o, "BuildPhase");
}

export enum BuildPhaseType {
  BUILD = "BUILD",
  COMPLETED = "COMPLETED",
  DOWNLOAD_SOURCE = "DOWNLOAD_SOURCE",
  FINALIZING = "FINALIZING",
  INSTALL = "INSTALL",
  POST_BUILD = "POST_BUILD",
  PRE_BUILD = "PRE_BUILD",
  PROVISIONING = "PROVISIONING",
  QUEUED = "QUEUED",
  SUBMITTED = "SUBMITTED",
  UPLOAD_ARTIFACTS = "UPLOAD_ARTIFACTS",
}

/**
 * <p>Contains information that defines how the AWS CodeBuild build project reports the build status
 *             to the source provider. </p>
 */
export interface BuildStatusConfig {
  __type?: "BuildStatusConfig";
  /**
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

export namespace BuildStatusConfig {
  export const filterSensitiveLog = (obj: BuildStatusConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildStatusConfig => __isa(o, "BuildStatusConfig");
}

/**
 * <p>Contains summary information about a batch build group.</p>
 */
export interface BuildSummary {
  __type?: "BuildSummary";
  /**
   * <p>A <code>ResolvedArtifact</code> object that represents the primary build artifacts for the
   *             build group.</p>
   */
  primaryArtifact?: ResolvedArtifact;

  /**
   * <p>The batch build ARN.</p>
   */
  arn?: string;

  /**
   * <p>An array of <code>ResolvedArtifact</code> objects that represents the secondary build
   *             artifacts for the build group.</p>
   */
  secondaryArtifacts?: ResolvedArtifact[];

  /**
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
   * <p>When the build was started, expressed in Unix time format.</p>
   */
  requestedOn?: Date;
}

export namespace BuildSummary {
  export const filterSensitiveLog = (obj: BuildSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is BuildSummary => __isa(o, "BuildSummary");
}

export enum CacheMode {
  LOCAL_CUSTOM_CACHE = "LOCAL_CUSTOM_CACHE",
  LOCAL_DOCKER_LAYER_CACHE = "LOCAL_DOCKER_LAYER_CACHE",
  LOCAL_SOURCE_CACHE = "LOCAL_SOURCE_CACHE",
}

export enum CacheType {
  LOCAL = "LOCAL",
  NO_CACHE = "NO_CACHE",
  S3 = "S3",
}

/**
 * <p> Information about Amazon CloudWatch Logs for a build project. </p>
 */
export interface CloudWatchLogsConfig {
  __type?: "CloudWatchLogsConfig";
  /**
   * <p> The group name of the logs in Amazon CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   */
  groupName?: string;

  /**
   * <p> The prefix of the stream name of the Amazon CloudWatch Logs. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html">Working
   *                 with Log Groups and Log Streams</a>. </p>
   */
  streamName?: string;

  /**
   * <p>The current status of the logs in Amazon CloudWatch Logs for a build project. Valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ENABLED</code>: Amazon CloudWatch Logs are enabled for this build project.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>DISABLED</code>: Amazon CloudWatch Logs are not enabled for this build project.</p>
   *             </li>
   *          </ul>
   */
  status: LogsConfigStatusType | string | undefined;
}

export namespace CloudWatchLogsConfig {
  export const filterSensitiveLog = (obj: CloudWatchLogsConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CloudWatchLogsConfig => __isa(o, "CloudWatchLogsConfig");
}

/**
 * <p>Contains code coverage report information.</p>
 *         <p>Line coverage measures how many statements your tests cover. A statement is a single
 *             instruction, not including comments, conditionals, etc.</p>
 *         <p>Branch coverage determines if your tests cover every possible branch of a control
 *         structure, such as an <code>if</code> or <code>case</code> statement.</p>
 */
export interface CodeCoverage {
  __type?: "CodeCoverage";
  /**
   * <p>The percentage of branches that are covered by your tests.</p>
   */
  branchCoveragePercentage?: number;

  /**
   * <p>The number of lines that are not covered by your tests.</p>
   */
  linesMissed?: number;

  /**
   * <p>The path of the test report file.</p>
   */
  filePath?: string;

  /**
   * <p>The ARN of the report.</p>
   */
  reportARN?: string;

  /**
   * <p>The percentage of lines that are covered by your tests.</p>
   */
  lineCoveragePercentage?: number;

  /**
   * <p>The number of lines that are covered by your tests.</p>
   */
  linesCovered?: number;

  /**
   * <p>The date and time that the tests were run.</p>
   */
  expired?: Date;

  /**
   * <p>The number of conditional branches that are not covered by your tests.</p>
   */
  branchesMissed?: number;

  /**
   * <p>The number of conditional branches that are covered by your tests.</p>
   */
  branchesCovered?: number;

  /**
   * <p>The identifier of the code coverage report.</p>
   */
  id?: string;
}

export namespace CodeCoverage {
  export const filterSensitiveLog = (obj: CodeCoverage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeCoverage => __isa(o, "CodeCoverage");
}

/**
 * <p>Contains a summary of a code coverage report.</p>
 *         <p>Line coverage measures how many statements your tests cover. A statement is a single
 *             instruction, not including comments, conditionals, etc.</p>
 *         <p>Branch coverage determines if your tests cover every possible branch of a control
 *         structure, such as an <code>if</code> or <code>case</code> statement.</p>
 */
export interface CodeCoverageReportSummary {
  __type?: "CodeCoverageReportSummary";
  /**
   * <p>The number of lines that are covered by your tests.</p>
   */
  linesCovered?: number;

  /**
   * <p>The percentage of lines that are covered by your tests.</p>
   */
  lineCoveragePercentage?: number;

  /**
   * <p>The number of conditional branches that are covered by your tests.</p>
   */
  branchesCovered?: number;

  /**
   * <p>The number of conditional branches that are not covered by your tests.</p>
   */
  branchesMissed?: number;

  /**
   * <p>The percentage of branches that are covered by your tests.</p>
   */
  branchCoveragePercentage?: number;

  /**
   * <p>The number of lines that are not covered by your tests.</p>
   */
  linesMissed?: number;
}

export namespace CodeCoverageReportSummary {
  export const filterSensitiveLog = (obj: CodeCoverageReportSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CodeCoverageReportSummary => __isa(o, "CodeCoverageReportSummary");
}

export enum ComputeType {
  BUILD_GENERAL1_2XLARGE = "BUILD_GENERAL1_2XLARGE",
  BUILD_GENERAL1_LARGE = "BUILD_GENERAL1_LARGE",
  BUILD_GENERAL1_MEDIUM = "BUILD_GENERAL1_MEDIUM",
  BUILD_GENERAL1_SMALL = "BUILD_GENERAL1_SMALL",
}

export interface CreateProjectInput {
  __type?: "CreateProjectInput";
  /**
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *             time.</p>
   */
  cache?: ProjectCache;

  /**
   * <p>Information about logs for the build project. These can be logs in Amazon CloudWatch Logs, logs
   *       uploaded to a specified S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts: ProjectArtifacts | undefined;

  /**
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by AWS services that support AWS CodeBuild build project
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       precedence over these <code>secondarySourceVersions</code> (at the project level).
   *     </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output
   *       artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *       the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p>A version of the build input to be built for this project. If not specified, the latest
   *             version is used. If specified, it must be one of: </p>
   *          <ul>
   *             <li>
   *                <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
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
   *                <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>sourceVersion</code> is specified at the build level, then that version takes
   *             precedence over this <code>sourceVersion</code> (at the project level). </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * <p>An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * <p>
   *          An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *          specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *          <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *       </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * <p>Information about the build input source code for the build project.</p>
   */
  source: ProjectSource | undefined;

  /**
   * <p>VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>Information about the build environment for the build project.</p>
   */
  environment: ProjectEnvironment | undefined;

  /**
   * <p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before it times out
   *       any build that has not been marked as completed. The default is 60 minutes.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p>The name of the build project.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services
   *       on behalf of the AWS account.</p>
   */
  serviceRole: string | undefined;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *             badge.</p>
   */
  badgeEnabled?: boolean;

  /**
   * <p>A <a>ProjectBuildBatchConfig</a> object that defines the batch build options
   *             for the project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;
}

export namespace CreateProjectInput {
  export const filterSensitiveLog = (obj: CreateProjectInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateProjectInput => __isa(o, "CreateProjectInput");
}

export interface CreateProjectOutput {
  __type?: "CreateProjectOutput";
  /**
   * <p>Information about the build project that was created.</p>
   */
  project?: Project;
}

export namespace CreateProjectOutput {
  export const filterSensitiveLog = (obj: CreateProjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateProjectOutput => __isa(o, "CreateProjectOutput");
}

export interface CreateReportGroupInput {
  __type?: "CreateReportGroupInput";
  /**
   * <p>
   *       The type of report group.
   *     </p>
   */
  type: ReportType | string | undefined;

  /**
   * <p>
   *       The name of the report group.
   *     </p>
   */
  name: string | undefined;

  /**
   * <p>
   *       A list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by AWS services that support AWS CodeBuild report group
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>
   *       A <code>ReportExportConfig</code> object that contains information about where the report group test results are exported.
   *     </p>
   */
  exportConfig: ReportExportConfig | undefined;
}

export namespace CreateReportGroupInput {
  export const filterSensitiveLog = (obj: CreateReportGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateReportGroupInput => __isa(o, "CreateReportGroupInput");
}

export interface CreateReportGroupOutput {
  __type?: "CreateReportGroupOutput";
  /**
   * <p>
   *       Information about the report group that was created.
   *     </p>
   */
  reportGroup?: ReportGroup;
}

export namespace CreateReportGroupOutput {
  export const filterSensitiveLog = (obj: CreateReportGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateReportGroupOutput => __isa(o, "CreateReportGroupOutput");
}

export interface CreateWebhookInput {
  __type?: "CreateWebhookInput";
  /**
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;

  /**
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   */
  filterGroups?: WebhookFilter[][];

  /**
   * <p>The name of the AWS CodeBuild project.</p>
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
   */
  branchFilter?: string;
}

export namespace CreateWebhookInput {
  export const filterSensitiveLog = (obj: CreateWebhookInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWebhookInput => __isa(o, "CreateWebhookInput");
}

export interface CreateWebhookOutput {
  __type?: "CreateWebhookOutput";
  /**
   * <p>Information about a webhook that connects repository events to a build project in
   *       AWS CodeBuild.</p>
   */
  webhook?: Webhook;
}

export namespace CreateWebhookOutput {
  export const filterSensitiveLog = (obj: CreateWebhookOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is CreateWebhookOutput => __isa(o, "CreateWebhookOutput");
}

export enum CredentialProviderType {
  SECRETS_MANAGER = "SECRETS_MANAGER",
}

/**
 * <p>Contains information about the debug session for a build. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a
 *                 running build in Session Manager</a>.</p>
 */
export interface DebugSession {
  __type?: "DebugSession";
  /**
   * <p>Specifies if session debugging is enabled for this build.</p>
   */
  sessionEnabled?: boolean;

  /**
   * <p>Contains the identifier of the Session Manager session used for the build. To work with
   *             the paused build, you open this session to examine, control, and resume the
   *             build.</p>
   */
  sessionTarget?: string;
}

export namespace DebugSession {
  export const filterSensitiveLog = (obj: DebugSession): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DebugSession => __isa(o, "DebugSession");
}

export interface DeleteBuildBatchInput {
  __type?: "DeleteBuildBatchInput";
  /**
   * <p>The identifier of the batch build to delete.</p>
   */
  id: string | undefined;
}

export namespace DeleteBuildBatchInput {
  export const filterSensitiveLog = (obj: DeleteBuildBatchInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBuildBatchInput => __isa(o, "DeleteBuildBatchInput");
}

export interface DeleteBuildBatchOutput {
  __type?: "DeleteBuildBatchOutput";
  /**
   * <p>The status code.</p>
   */
  statusCode?: string;

  /**
   * <p>An array of <code>BuildNotDeleted</code> objects that specify the builds that could not be
   *             deleted.</p>
   */
  buildsNotDeleted?: BuildNotDeleted[];

  /**
   * <p>An array of strings that contain the identifiers of the builds that were deleted.</p>
   */
  buildsDeleted?: string[];
}

export namespace DeleteBuildBatchOutput {
  export const filterSensitiveLog = (obj: DeleteBuildBatchOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteBuildBatchOutput => __isa(o, "DeleteBuildBatchOutput");
}

export interface DeleteProjectInput {
  __type?: "DeleteProjectInput";
  /**
   * <p>The name of the build project.</p>
   */
  name: string | undefined;
}

export namespace DeleteProjectInput {
  export const filterSensitiveLog = (obj: DeleteProjectInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteProjectInput => __isa(o, "DeleteProjectInput");
}

export interface DeleteProjectOutput {
  __type?: "DeleteProjectOutput";
}

export namespace DeleteProjectOutput {
  export const filterSensitiveLog = (obj: DeleteProjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteProjectOutput => __isa(o, "DeleteProjectOutput");
}

export interface DeleteReportGroupInput {
  __type?: "DeleteReportGroupInput";
  /**
   * <p>
   *       The ARN of the report group to delete.
   *     </p>
   */
  arn: string | undefined;
}

export namespace DeleteReportGroupInput {
  export const filterSensitiveLog = (obj: DeleteReportGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteReportGroupInput => __isa(o, "DeleteReportGroupInput");
}

export interface DeleteReportGroupOutput {
  __type?: "DeleteReportGroupOutput";
}

export namespace DeleteReportGroupOutput {
  export const filterSensitiveLog = (obj: DeleteReportGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteReportGroupOutput => __isa(o, "DeleteReportGroupOutput");
}

export interface DeleteReportInput {
  __type?: "DeleteReportInput";
  /**
   * <p>
   *       The ARN of the report to delete.
   *     </p>
   */
  arn: string | undefined;
}

export namespace DeleteReportInput {
  export const filterSensitiveLog = (obj: DeleteReportInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteReportInput => __isa(o, "DeleteReportInput");
}

export interface DeleteReportOutput {
  __type?: "DeleteReportOutput";
}

export namespace DeleteReportOutput {
  export const filterSensitiveLog = (obj: DeleteReportOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteReportOutput => __isa(o, "DeleteReportOutput");
}

export interface DeleteResourcePolicyInput {
  __type?: "DeleteResourcePolicyInput";
  /**
   * <p> The ARN of the resource that is associated with the resource policy. </p>
   */
  resourceArn: string | undefined;
}

export namespace DeleteResourcePolicyInput {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourcePolicyInput => __isa(o, "DeleteResourcePolicyInput");
}

export interface DeleteResourcePolicyOutput {
  __type?: "DeleteResourcePolicyOutput";
}

export namespace DeleteResourcePolicyOutput {
  export const filterSensitiveLog = (obj: DeleteResourcePolicyOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteResourcePolicyOutput => __isa(o, "DeleteResourcePolicyOutput");
}

export interface DeleteSourceCredentialsInput {
  __type?: "DeleteSourceCredentialsInput";
  /**
   * <p> The Amazon Resource Name (ARN) of the token.</p>
   */
  arn: string | undefined;
}

export namespace DeleteSourceCredentialsInput {
  export const filterSensitiveLog = (obj: DeleteSourceCredentialsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSourceCredentialsInput => __isa(o, "DeleteSourceCredentialsInput");
}

export interface DeleteSourceCredentialsOutput {
  __type?: "DeleteSourceCredentialsOutput";
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;
}

export namespace DeleteSourceCredentialsOutput {
  export const filterSensitiveLog = (obj: DeleteSourceCredentialsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteSourceCredentialsOutput => __isa(o, "DeleteSourceCredentialsOutput");
}

export interface DeleteWebhookInput {
  __type?: "DeleteWebhookInput";
  /**
   * <p>The name of the AWS CodeBuild project.</p>
   */
  projectName: string | undefined;
}

export namespace DeleteWebhookInput {
  export const filterSensitiveLog = (obj: DeleteWebhookInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWebhookInput => __isa(o, "DeleteWebhookInput");
}

export interface DeleteWebhookOutput {
  __type?: "DeleteWebhookOutput";
}

export namespace DeleteWebhookOutput {
  export const filterSensitiveLog = (obj: DeleteWebhookOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DeleteWebhookOutput => __isa(o, "DeleteWebhookOutput");
}

export interface DescribeCodeCoveragesInput {
  __type?: "DescribeCodeCoveragesInput";
  /**
   * <p>The minimum line coverage percentage to report.</p>
   */
  minLineCoveragePercentage?: number;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>The maximum line coverage percentage to report.</p>
   */
  maxLineCoveragePercentage?: number;

  /**
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
   */
  reportArn: string | undefined;

  /**
   * <p>Specifies if the results are sorted in ascending or descending order.</p>
   */
  sortOrder?: SortOrderType | string;

  /**
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
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>DescribeCodeCoverages</code>. This specifies the next item to return. To
   *             return the beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;
}

export namespace DescribeCodeCoveragesInput {
  export const filterSensitiveLog = (obj: DescribeCodeCoveragesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeCoveragesInput => __isa(o, "DescribeCodeCoveragesInput");
}

export interface DescribeCodeCoveragesOutput {
  __type?: "DescribeCodeCoveragesOutput";
  /**
   * <p>An array of <code>CodeCoverage</code> objects that contain the results.</p>
   */
  codeCoverages?: CodeCoverage[];

  /**
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>DescribeCodeCoverages</code> to retrieve the next set of items.</p>
   */
  nextToken?: string;
}

export namespace DescribeCodeCoveragesOutput {
  export const filterSensitiveLog = (obj: DescribeCodeCoveragesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeCodeCoveragesOutput => __isa(o, "DescribeCodeCoveragesOutput");
}

export interface DescribeTestCasesInput {
  __type?: "DescribeTestCasesInput";
  /**
   * <p>
   *       The maximum number of paginated test cases returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>TestCase</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The ARN of the report for which test cases are returned.
   *     </p>
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
   */
  nextToken?: string;

  /**
   * <p>
   *       A <code>TestCaseFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: TestCaseFilter;
}

export namespace DescribeTestCasesInput {
  export const filterSensitiveLog = (obj: DescribeTestCasesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTestCasesInput => __isa(o, "DescribeTestCasesInput");
}

export interface DescribeTestCasesOutput {
  __type?: "DescribeTestCasesOutput";
  /**
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
   * <p>
   *       The returned list of test cases.
   *     </p>
   */
  testCases?: TestCase[];
}

export namespace DescribeTestCasesOutput {
  export const filterSensitiveLog = (obj: DescribeTestCasesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is DescribeTestCasesOutput => __isa(o, "DescribeTestCasesOutput");
}

/**
 * <p>Information about a Docker image that is managed by AWS CodeBuild.</p>
 */
export interface EnvironmentImage {
  __type?: "EnvironmentImage";
  /**
   * <p>The name of the Docker image.</p>
   */
  name?: string;

  /**
   * <p>A list of environment image versions.</p>
   */
  versions?: string[];

  /**
   * <p>The description of the Docker image.</p>
   */
  description?: string;
}

export namespace EnvironmentImage {
  export const filterSensitiveLog = (obj: EnvironmentImage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnvironmentImage => __isa(o, "EnvironmentImage");
}

/**
 * <p>A set of Docker images that are related by programming language and are managed by
 *             AWS CodeBuild.</p>
 */
export interface EnvironmentLanguage {
  __type?: "EnvironmentLanguage";
  /**
   * <p>The programming language for the Docker images.</p>
   */
  language?: LanguageType | string;

  /**
   * <p>The list of Docker images that are related by the specified programming
   *             language.</p>
   */
  images?: EnvironmentImage[];
}

export namespace EnvironmentLanguage {
  export const filterSensitiveLog = (obj: EnvironmentLanguage): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnvironmentLanguage => __isa(o, "EnvironmentLanguage");
}

/**
 * <p>A set of Docker images that are related by platform and are managed by AWS CodeBuild.</p>
 */
export interface EnvironmentPlatform {
  __type?: "EnvironmentPlatform";
  /**
   * <p>The list of programming languages that are available for the specified
   *             platform.</p>
   */
  languages?: EnvironmentLanguage[];

  /**
   * <p>The platform's name.</p>
   */
  platform?: PlatformType | string;
}

export namespace EnvironmentPlatform {
  export const filterSensitiveLog = (obj: EnvironmentPlatform): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnvironmentPlatform => __isa(o, "EnvironmentPlatform");
}

export enum EnvironmentType {
  ARM_CONTAINER = "ARM_CONTAINER",
  LINUX_CONTAINER = "LINUX_CONTAINER",
  LINUX_GPU_CONTAINER = "LINUX_GPU_CONTAINER",
  WINDOWS_CONTAINER = "WINDOWS_CONTAINER",
  WINDOWS_SERVER_2019_CONTAINER = "WINDOWS_SERVER_2019_CONTAINER",
}

/**
 * <p>Information about an environment variable for a build project or a build.</p>
 */
export interface EnvironmentVariable {
  __type?: "EnvironmentVariable";
  /**
   * <p>The value of the environment variable.</p>
   *         <important>
   *             <p>We strongly discourage the use of <code>PLAINTEXT</code> environment variables to
   *                 store sensitive values, especially AWS secret key IDs and secret access keys.
   *                     <code>PLAINTEXT</code> environment variables can be displayed in plain text
   *                 using the AWS CodeBuild console and the AWS Command Line Interface (AWS CLI). For sensitive values, we recommend you use an
   *                 environment variable of type <code>PARAMETER_STORE</code> or
   *                     <code>SECRETS_MANAGER</code>. </p>
   *         </important>
   */
  value: string | undefined;

  /**
   * <p>The type of environment variable. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PARAMETER_STORE</code>: An environment variable stored in Amazon EC2 Systems Manager
   *                     Parameter Store. To learn how to specify a parameter store environment variable,
   *                     see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#parameter-store-build-spec"> parameter store reference-key in the buildspec file</a>.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>PLAINTEXT</code>: An environment variable in plain text format. This is
   *                     the default value.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SECRETS_MANAGER</code>: An environment variable stored in AWS Secrets
   *                     Manager. To learn how to specify a secrets manager environment variable, see
   *                         <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#secrets-manager-build-spec"> secrets manager reference-key in the buildspec file</a>.</p>
   *             </li>
   *          </ul>
   */
  type?: EnvironmentVariableType | string;

  /**
   * <p>The name or key of the environment variable.</p>
   */
  name: string | undefined;
}

export namespace EnvironmentVariable {
  export const filterSensitiveLog = (obj: EnvironmentVariable): any => ({
    ...obj,
  });
  export const isa = (o: any): o is EnvironmentVariable => __isa(o, "EnvironmentVariable");
}

export enum EnvironmentVariableType {
  PARAMETER_STORE = "PARAMETER_STORE",
  PLAINTEXT = "PLAINTEXT",
  SECRETS_MANAGER = "SECRETS_MANAGER",
}

/**
 * <p> Information about an exported environment variable. </p>
 */
export interface ExportedEnvironmentVariable {
  __type?: "ExportedEnvironmentVariable";
  /**
   * <p> The name of this exported environment variable. </p>
   */
  name?: string;

  /**
   * <p> The value assigned to this exported environment variable. </p>
   *         <note>
   *             <p> During a build, the value of a variable is available starting with the
   *                     <code>install</code> phase. It can be updated between the start of the
   *                     <code>install</code> phase and the end of the <code>post_build</code> phase.
   *                 After the <code>post_build</code> phase ends, the value of exported variables cannot
   *                 change.</p>
   *         </note>
   */
  value?: string;
}

export namespace ExportedEnvironmentVariable {
  export const filterSensitiveLog = (obj: ExportedEnvironmentVariable): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ExportedEnvironmentVariable => __isa(o, "ExportedEnvironmentVariable");
}

export enum FileSystemType {
  EFS = "EFS",
}

export interface GetResourcePolicyInput {
  __type?: "GetResourcePolicyInput";
  /**
   * <p> The ARN of the resource that is associated with the resource policy. </p>
   */
  resourceArn: string | undefined;
}

export namespace GetResourcePolicyInput {
  export const filterSensitiveLog = (obj: GetResourcePolicyInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePolicyInput => __isa(o, "GetResourcePolicyInput");
}

export interface GetResourcePolicyOutput {
  __type?: "GetResourcePolicyOutput";
  /**
   * <p> The resource policy for the resource identified by the input ARN parameter. </p>
   */
  policy?: string;
}

export namespace GetResourcePolicyOutput {
  export const filterSensitiveLog = (obj: GetResourcePolicyOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GetResourcePolicyOutput => __isa(o, "GetResourcePolicyOutput");
}

/**
 * <p> Information about the Git submodules configuration for an AWS CodeBuild build project.
 *         </p>
 */
export interface GitSubmodulesConfig {
  __type?: "GitSubmodulesConfig";
  /**
   * <p> Set to true to fetch Git submodules for your AWS CodeBuild build project. </p>
   */
  fetchSubmodules: boolean | undefined;
}

export namespace GitSubmodulesConfig {
  export const filterSensitiveLog = (obj: GitSubmodulesConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is GitSubmodulesConfig => __isa(o, "GitSubmodulesConfig");
}

export enum ImagePullCredentialsType {
  CODEBUILD = "CODEBUILD",
  SERVICE_ROLE = "SERVICE_ROLE",
}

export interface ImportSourceCredentialsInput {
  __type?: "ImportSourceCredentialsInput";
  /**
   * <p> The source provider used for this project. </p>
   */
  serverType: ServerType | string | undefined;

  /**
   * <p> The Bitbucket username when the <code>authType</code> is BASIC_AUTH. This parameter
   *             is not valid for other types of source providers or connections. </p>
   */
  username?: string;

  /**
   * <p> For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket,
   *             this is the app password. </p>
   */
  token: string | undefined;

  /**
   * <p> The type of authentication used to connect to a GitHub, GitHub Enterprise, or
   *             Bitbucket repository. An OAUTH connection is not supported by the API and must be
   *             created using the AWS CodeBuild console. </p>
   */
  authType: AuthType | string | undefined;

  /**
   * <p> Set to <code>false</code> to prevent overwriting the repository source credentials.
   *             Set to <code>true</code> to overwrite the repository source credentials. The default
   *             value is <code>true</code>. </p>
   */
  shouldOverwrite?: boolean;
}

export namespace ImportSourceCredentialsInput {
  export const filterSensitiveLog = (obj: ImportSourceCredentialsInput): any => ({
    ...obj,
    ...(obj.token && { token: SENSITIVE_STRING }),
  });
  export const isa = (o: any): o is ImportSourceCredentialsInput => __isa(o, "ImportSourceCredentialsInput");
}

export interface ImportSourceCredentialsOutput {
  __type?: "ImportSourceCredentialsOutput";
  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;
}

export namespace ImportSourceCredentialsOutput {
  export const filterSensitiveLog = (obj: ImportSourceCredentialsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ImportSourceCredentialsOutput => __isa(o, "ImportSourceCredentialsOutput");
}

export interface InvalidateProjectCacheInput {
  __type?: "InvalidateProjectCacheInput";
  /**
   * <p>The name of the AWS CodeBuild build project that the cache is reset for.</p>
   */
  projectName: string | undefined;
}

export namespace InvalidateProjectCacheInput {
  export const filterSensitiveLog = (obj: InvalidateProjectCacheInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidateProjectCacheInput => __isa(o, "InvalidateProjectCacheInput");
}

export interface InvalidateProjectCacheOutput {
  __type?: "InvalidateProjectCacheOutput";
}

export namespace InvalidateProjectCacheOutput {
  export const filterSensitiveLog = (obj: InvalidateProjectCacheOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidateProjectCacheOutput => __isa(o, "InvalidateProjectCacheOutput");
}

/**
 * <p>The input value that was provided is not valid.</p>
 */
export interface InvalidInputException extends __SmithyException, $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is InvalidInputException => __isa(o, "InvalidInputException");
}

export enum LanguageType {
  ANDROID = "ANDROID",
  BASE = "BASE",
  DOCKER = "DOCKER",
  DOTNET = "DOTNET",
  GOLANG = "GOLANG",
  JAVA = "JAVA",
  NODE_JS = "NODE_JS",
  PHP = "PHP",
  PYTHON = "PYTHON",
  RUBY = "RUBY",
}

export interface ListBuildBatchesForProjectInput {
  __type?: "ListBuildBatchesForProjectInput";
  /**
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatchesForProject</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
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
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;

  /**
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   */
  filter?: BuildBatchFilter;

  /**
   * <p>The name of the project.</p>
   */
  projectName?: string;
}

export namespace ListBuildBatchesForProjectInput {
  export const filterSensitiveLog = (obj: ListBuildBatchesForProjectInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildBatchesForProjectInput => __isa(o, "ListBuildBatchesForProjectInput");
}

export interface ListBuildBatchesForProjectOutput {
  __type?: "ListBuildBatchesForProjectOutput";
  /**
   * <p>An array of strings that contains the batch build identifiers.</p>
   */
  ids?: string[];

  /**
   * <p>If there are more items to return, this contains a token that is passed to a
   *             subsequent call to <code>ListBuildBatchesForProject</code> to retrieve the next set of
   *             items.</p>
   */
  nextToken?: string;
}

export namespace ListBuildBatchesForProjectOutput {
  export const filterSensitiveLog = (obj: ListBuildBatchesForProjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildBatchesForProjectOutput => __isa(o, "ListBuildBatchesForProjectOutput");
}

export interface ListBuildBatchesInput {
  __type?: "ListBuildBatchesInput";
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
   */
  sortOrder?: SortOrderType | string;

  /**
   * <p>The <code>nextToken</code> value returned from a previous call to
   *                 <code>ListBuildBatches</code>. This specifies the next item to return. To return the
   *             beginning of the list, exclude this parameter.</p>
   */
  nextToken?: string;

  /**
   * <p>A <code>BuildBatchFilter</code> object that specifies the filters for the search.</p>
   */
  filter?: BuildBatchFilter;

  /**
   * <p>The maximum number of results to return.</p>
   */
  maxResults?: number;
}

export namespace ListBuildBatchesInput {
  export const filterSensitiveLog = (obj: ListBuildBatchesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildBatchesInput => __isa(o, "ListBuildBatchesInput");
}

export interface ListBuildBatchesOutput {
  __type?: "ListBuildBatchesOutput";
  /**
   * <p>If there are more items to return, this contains a token that is passed to a subsequent
   *             call to <code>ListBuildBatches</code> to retrieve the next set of items.</p>
   */
  nextToken?: string;

  /**
   * <p>An array of strings that contains the batch build identifiers.</p>
   */
  ids?: string[];
}

export namespace ListBuildBatchesOutput {
  export const filterSensitiveLog = (obj: ListBuildBatchesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildBatchesOutput => __isa(o, "ListBuildBatchesOutput");
}

export interface ListBuildsForProjectInput {
  __type?: "ListBuildsForProjectInput";
  /**
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
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
   * <p>The name of the AWS CodeBuild project.</p>
   */
  projectName: string | undefined;
}

export namespace ListBuildsForProjectInput {
  export const filterSensitiveLog = (obj: ListBuildsForProjectInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildsForProjectInput => __isa(o, "ListBuildsForProjectInput");
}

export interface ListBuildsForProjectOutput {
  __type?: "ListBuildsForProjectOutput";
  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of build IDs for the specified build project, with each build ID representing a
   *             single build.</p>
   */
  ids?: string[];
}

export namespace ListBuildsForProjectOutput {
  export const filterSensitiveLog = (obj: ListBuildsForProjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildsForProjectOutput => __isa(o, "ListBuildsForProjectOutput");
}

export interface ListBuildsInput {
  __type?: "ListBuildsInput";
  /**
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
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;
}

export namespace ListBuildsInput {
  export const filterSensitiveLog = (obj: ListBuildsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildsInput => __isa(o, "ListBuildsInput");
}

export interface ListBuildsOutput {
  __type?: "ListBuildsOutput";
  /**
   * <p>A list of build IDs, with each build ID representing a single build.</p>
   */
  ids?: string[];

  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;
}

export namespace ListBuildsOutput {
  export const filterSensitiveLog = (obj: ListBuildsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListBuildsOutput => __isa(o, "ListBuildsOutput");
}

export interface ListCuratedEnvironmentImagesInput {
  __type?: "ListCuratedEnvironmentImagesInput";
}

export namespace ListCuratedEnvironmentImagesInput {
  export const filterSensitiveLog = (obj: ListCuratedEnvironmentImagesInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCuratedEnvironmentImagesInput => __isa(o, "ListCuratedEnvironmentImagesInput");
}

export interface ListCuratedEnvironmentImagesOutput {
  __type?: "ListCuratedEnvironmentImagesOutput";
  /**
   * <p>Information about supported platforms for Docker images that are managed by
   *             AWS CodeBuild.</p>
   */
  platforms?: EnvironmentPlatform[];
}

export namespace ListCuratedEnvironmentImagesOutput {
  export const filterSensitiveLog = (obj: ListCuratedEnvironmentImagesOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListCuratedEnvironmentImagesOutput =>
    __isa(o, "ListCuratedEnvironmentImagesOutput");
}

export interface ListProjectsInput {
  __type?: "ListProjectsInput";
  /**
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
   * <p>During a previous call, if there are more than 100 items in the list, only the first
   *             100 items are returned, along with a unique string called a
   *                 <i>nextToken</i>. To get the next batch of items in the list, call
   *             this operation again, adding the next token to the call. To get all of the items in the
   *             list, keep calling this operation with each subsequent next token that is returned,
   *             until no more next tokens are returned.</p>
   */
  nextToken?: string;

  /**
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
}

export namespace ListProjectsInput {
  export const filterSensitiveLog = (obj: ListProjectsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProjectsInput => __isa(o, "ListProjectsInput");
}

export interface ListProjectsOutput {
  __type?: "ListProjectsOutput";
  /**
   * <p>If there are more than 100 items in the list, only the first 100 items are returned,
   *             along with a unique string called a <i>nextToken</i>. To get the next
   *             batch of items in the list, call this operation again, adding the next token to the
   *             call.</p>
   */
  nextToken?: string;

  /**
   * <p>The list of build project names, with each build project name representing a single
   *             build project.</p>
   */
  projects?: string[];
}

export namespace ListProjectsOutput {
  export const filterSensitiveLog = (obj: ListProjectsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListProjectsOutput => __isa(o, "ListProjectsOutput");
}

export interface ListReportGroupsInput {
  __type?: "ListReportGroupsInput";
  /**
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
   * <p>
   *       The maximum number of paginated report groups returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>ReportGroup</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       Used to specify the order to sort the list of returned report groups. Valid values are
   *       <code>ASCENDING</code> and <code>DESCENDING</code>.
   *     </p>
   */
  sortOrder?: SortOrderType | string;
}

export namespace ListReportGroupsInput {
  export const filterSensitiveLog = (obj: ListReportGroupsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportGroupsInput => __isa(o, "ListReportGroupsInput");
}

export interface ListReportGroupsOutput {
  __type?: "ListReportGroupsOutput";
  /**
   * <p>
   *       The list of ARNs for the report groups in the current AWS account.
   *     </p>
   */
  reportGroups?: string[];

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListReportGroupsOutput {
  export const filterSensitiveLog = (obj: ListReportGroupsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportGroupsOutput => __isa(o, "ListReportGroupsOutput");
}

export interface ListReportsForReportGroupInput {
  __type?: "ListReportsForReportGroupInput";
  /**
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
   * <p>
   *       Use to specify whether the results are returned in ascending or descending order.
   *     </p>
   */
  sortOrder?: SortOrderType | string;

  /**
   * <p>
   *       The maximum number of paginated reports in this report group returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       The ARN of the report group for which you want to return report ARNs.
   *     </p>
   */
  reportGroupArn: string | undefined;

  /**
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: ReportFilter;
}

export namespace ListReportsForReportGroupInput {
  export const filterSensitiveLog = (obj: ListReportsForReportGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportsForReportGroupInput => __isa(o, "ListReportsForReportGroupInput");
}

export interface ListReportsForReportGroupOutput {
  __type?: "ListReportsForReportGroupOutput";
  /**
   * <p>
   *       The list of report ARNs.
   *     </p>
   */
  reports?: string[];

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListReportsForReportGroupOutput {
  export const filterSensitiveLog = (obj: ListReportsForReportGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportsForReportGroupOutput => __isa(o, "ListReportsForReportGroupOutput");
}

export interface ListReportsInput {
  __type?: "ListReportsInput";
  /**
   * <p>
   *       The maximum number of paginated reports returned per response. Use <code>nextToken</code> to iterate pages in
   *       the list of returned <code>Report</code> objects. The default value is 100.
   *     </p>
   */
  maxResults?: number;

  /**
   * <p>
   *       A <code>ReportFilter</code> object used to filter the returned reports.
   *     </p>
   */
  filter?: ReportFilter;

  /**
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
}

export namespace ListReportsInput {
  export const filterSensitiveLog = (obj: ListReportsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportsInput => __isa(o, "ListReportsInput");
}

export interface ListReportsOutput {
  __type?: "ListReportsOutput";
  /**
   * <p>
   *       The list of returned ARNs for the reports in the current AWS account.
   *     </p>
   */
  reports?: string[];

  /**
   * <p>
   *       During a previous call, the maximum number of items that can be returned is the value specified in
   *       <code>maxResults</code>. If there more items in the list, then a unique string called a <i>nextToken</i>
   *       is returned. To get the next batch of items in the list, call this operation again, adding the next token
   *       to the call. To get all of the items in the list, keep calling this operation with each
   *       subsequent next token that is returned, until no more next tokens are returned.
   *     </p>
   */
  nextToken?: string;
}

export namespace ListReportsOutput {
  export const filterSensitiveLog = (obj: ListReportsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListReportsOutput => __isa(o, "ListReportsOutput");
}

export interface ListSharedProjectsInput {
  __type?: "ListSharedProjectsInput";
  /**
   * <p> The maximum number of paginated shared build projects returned per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned <code>Project</code>
   *             objects. The default value is 100. </p>
   */
  maxResults?: number;

  /**
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
   * <p> The criterion to be used to list build projects shared with the current AWS account
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
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;
}

export namespace ListSharedProjectsInput {
  export const filterSensitiveLog = (obj: ListSharedProjectsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSharedProjectsInput => __isa(o, "ListSharedProjectsInput");
}

export interface ListSharedProjectsOutput {
  __type?: "ListSharedProjectsOutput";
  /**
   * <p> The list of ARNs for the build projects shared with the current AWS account or user.
   *         </p>
   */
  projects?: string[];

  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;
}

export namespace ListSharedProjectsOutput {
  export const filterSensitiveLog = (obj: ListSharedProjectsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSharedProjectsOutput => __isa(o, "ListSharedProjectsOutput");
}

export interface ListSharedReportGroupsInput {
  __type?: "ListSharedReportGroupsInput";
  /**
   * <p> The maximum number of paginated shared report groups per response. Use
   *                 <code>nextToken</code> to iterate pages in the list of returned
   *                 <code>ReportGroup</code> objects. The default value is 100. </p>
   */
  maxResults?: number;

  /**
   * <p> The criterion to be used to list report groups shared with the current AWS account or
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
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;
}

export namespace ListSharedReportGroupsInput {
  export const filterSensitiveLog = (obj: ListSharedReportGroupsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSharedReportGroupsInput => __isa(o, "ListSharedReportGroupsInput");
}

export interface ListSharedReportGroupsOutput {
  __type?: "ListSharedReportGroupsOutput";
  /**
   * <p> The list of ARNs for the report groups shared with the current AWS account or user.
   *         </p>
   */
  reportGroups?: string[];

  /**
   * <p> During a previous call, the maximum number of items that can be returned is the value
   *             specified in <code>maxResults</code>. If there more items in the list, then a unique
   *             string called a <i>nextToken</i> is returned. To get the next batch of
   *             items in the list, call this operation again, adding the next token to the call. To get
   *             all of the items in the list, keep calling this operation with each subsequent next
   *             token that is returned, until no more next tokens are returned. </p>
   */
  nextToken?: string;
}

export namespace ListSharedReportGroupsOutput {
  export const filterSensitiveLog = (obj: ListSharedReportGroupsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSharedReportGroupsOutput => __isa(o, "ListSharedReportGroupsOutput");
}

export interface ListSourceCredentialsInput {
  __type?: "ListSourceCredentialsInput";
}

export namespace ListSourceCredentialsInput {
  export const filterSensitiveLog = (obj: ListSourceCredentialsInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSourceCredentialsInput => __isa(o, "ListSourceCredentialsInput");
}

export interface ListSourceCredentialsOutput {
  __type?: "ListSourceCredentialsOutput";
  /**
   * <p> A list of <code>SourceCredentialsInfo</code> objects. Each
   *                 <code>SourceCredentialsInfo</code> object includes the authentication type, token
   *             ARN, and type of source provider for one set of credentials. </p>
   */
  sourceCredentialsInfos?: SourceCredentialsInfo[];
}

export namespace ListSourceCredentialsOutput {
  export const filterSensitiveLog = (obj: ListSourceCredentialsOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ListSourceCredentialsOutput => __isa(o, "ListSourceCredentialsOutput");
}

/**
 * <p> Information about logs for a build project. These can be logs in Amazon CloudWatch Logs, built in a
 *             specified S3 bucket, or both. </p>
 */
export interface LogsConfig {
  __type?: "LogsConfig";
  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. Amazon CloudWatch Logs are enabled by default. </p>
   */
  cloudWatchLogs?: CloudWatchLogsConfig;

  /**
   * <p> Information about logs built to an S3 bucket for a build project. S3 logs are not
   *             enabled by default. </p>
   */
  s3Logs?: S3LogsConfig;
}

export namespace LogsConfig {
  export const filterSensitiveLog = (obj: LogsConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LogsConfig => __isa(o, "LogsConfig");
}

export enum LogsConfigStatusType {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

/**
 * <p>Information about build logs in Amazon CloudWatch Logs.</p>
 */
export interface LogsLocation {
  __type?: "LogsLocation";
  /**
   * <p> The URL to a build log in an S3 bucket. </p>
   */
  s3DeepLink?: string;

  /**
   * <p> The ARN of Amazon CloudWatch Logs for a build project. Its format is
   *                 <code>arn:${Partition}:logs:${Region}:${Account}:log-group:${LogGroupName}:log-stream:${LogStreamName}</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazoncloudwatchlogs.html#amazoncloudwatchlogs-resources-for-iam-policies">Resources Defined by Amazon CloudWatch Logs</a>. </p>
   */
  cloudWatchLogsArn?: string;

  /**
   * <p> Information about S3 logs for a build project. </p>
   */
  s3Logs?: S3LogsConfig;

  /**
   * <p> The ARN of S3 logs for a build project. Its format is
   *                 <code>arn:${Partition}:s3:::${BucketName}/${ObjectName}</code>. For more
   *             information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/list_amazons3.html#amazons3-resources-for-iam-policies">Resources Defined by Amazon S3</a>. </p>
   */
  s3LogsArn?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs group for the build logs.</p>
   */
  groupName?: string;

  /**
   * <p>The URL to an individual build log in Amazon CloudWatch Logs.</p>
   */
  deepLink?: string;

  /**
   * <p>The name of the Amazon CloudWatch Logs stream for the build logs.</p>
   */
  streamName?: string;

  /**
   * <p> Information about Amazon CloudWatch Logs for a build project. </p>
   */
  cloudWatchLogs?: CloudWatchLogsConfig;
}

export namespace LogsLocation {
  export const filterSensitiveLog = (obj: LogsLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is LogsLocation => __isa(o, "LogsLocation");
}

/**
 * <p>Describes a network interface.</p>
 */
export interface NetworkInterface {
  __type?: "NetworkInterface";
  /**
   * <p>The ID of the network interface.</p>
   */
  networkInterfaceId?: string;

  /**
   * <p>The ID of the subnet.</p>
   */
  subnetId?: string;
}

export namespace NetworkInterface {
  export const filterSensitiveLog = (obj: NetworkInterface): any => ({
    ...obj,
  });
  export const isa = (o: any): o is NetworkInterface => __isa(o, "NetworkInterface");
}

/**
 * <p>There was a problem with the underlying OAuth provider.</p>
 */
export interface OAuthProviderException extends __SmithyException, $MetadataBearer {
  name: "OAuthProviderException";
  $fault: "client";
  message?: string;
}

export namespace OAuthProviderException {
  export const filterSensitiveLog = (obj: OAuthProviderException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is OAuthProviderException => __isa(o, "OAuthProviderException");
}

/**
 * <p>Additional information about a build phase that has an error. You can use this
 *             information for troubleshooting.</p>
 */
export interface PhaseContext {
  __type?: "PhaseContext";
  /**
   * <p>An explanation of the build phase's context. This might include a command ID and an
   *             exit code.</p>
   */
  message?: string;

  /**
   * <p>The status code for the context of the build phase.</p>
   */
  statusCode?: string;
}

export namespace PhaseContext {
  export const filterSensitiveLog = (obj: PhaseContext): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PhaseContext => __isa(o, "PhaseContext");
}

export enum PlatformType {
  AMAZON_LINUX = "AMAZON_LINUX",
  DEBIAN = "DEBIAN",
  UBUNTU = "UBUNTU",
  WINDOWS_SERVER = "WINDOWS_SERVER",
}

/**
 * <p>Information about a build project.</p>
 */
export interface Project {
  __type?: "Project";
  /**
   * <p>Information about the build badge for the build project.</p>
   */
  badge?: ProjectBadge;

  /**
   * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * <p>Information about the build input source code for this build project.</p>
   */
  source?: ProjectSource;

  /**
   * <p>The name of the build project.</p>
   */
  name?: string;

  /**
   * <p>The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>When the build project's settings were last modified, expressed in Unix time
   *       format.</p>
   */
  lastModified?: Date;

  /**
   * <p>Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs, an
   *       S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * <p>Information about the cache for the build project.</p>
   */
  cache?: ProjectCache;

  /**
   * <p>A list of tag key and value pairs associated with this build project.</p>
   *          <p>These tags are available for use by AWS services that support AWS CodeBuild build project
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>Information about the build output artifacts for the build project.</p>
   */
  artifacts?: ProjectArtifacts;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects. If
   *       <code>secondarySourceVersions</code> is specified at the build level, then they take
   *       over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent AWS services
   *       on behalf of the AWS account.</p>
   */
  serviceRole?: string;

  /**
   * <p>
   *          An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *          specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *          <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *       </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * <p>The Amazon Resource Name (ARN) of the build project.</p>
   */
  arn?: string;

  /**
   * <p>An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * <p>Information about a webhook that connects repository events to a build project in
   *       AWS CodeBuild.</p>
   */
  webhook?: Webhook;

  /**
   * <p>A <a>ProjectBuildBatchConfig</a> object that defines the batch build
   *             options for the project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * <p>When the build project was created, expressed in Unix time format.</p>
   */
  created?: Date;

  /**
   * <p>How long, in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before timing out any
   *       related build that did not get marked as completed. The default is 60 minutes.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p>A description that makes the build project easy to identify.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * <p>A version of the build input to be built for this project. If not specified, the
   *       latest version is used. If specified, it must be one of:</p>
   *          <ul>
   *             <li>
   *                <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
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
   *                <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *           file to use.</p>
   *             </li>
   *          </ul>
   *          <p>If <code>sourceVersion</code> is specified at the build level, then that version
   *       takes precedence over this <code>sourceVersion</code> (at the project level). </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *       with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output
   *       artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *         service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *       the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p>Information about the build environment for this build project.</p>
   */
  environment?: ProjectEnvironment;
}

export namespace Project {
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Project => __isa(o, "Project");
}

/**
 * <p>Information about the build output artifacts for the build project.</p>
 */
export interface ProjectArtifacts {
  __type?: "ProjectArtifacts";
  /**
   * <p>The type of build output artifact. Valid values include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>CODEPIPELINE</code>: The build project has build output generated
   *                     through AWS CodePipeline. </p>
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
   *                   <code>S3</code>: The build project stores build output in Amazon Simple Storage Service (Amazon S3).</p>
   *             </li>
   *          </ul>
   */
  type: ArtifactsType | string | undefined;

  /**
   * <p> An identifier for this artifact definition. </p>
   */
  artifactIdentifier?: string;

  /**
   * <p> If this flag is set, a name specified in the buildspec file overrides the artifact
   *             name. The name specified in a buildspec file is calculated at build time and uses the
   *             Shell Command Language. For example, you can append a date and time to your artifact
   *             name so that it is always unique. </p>
   */
  overrideArtifactName?: boolean;

  /**
   * <p>Along with <code>path</code> and <code>namespaceType</code>, the pattern that AWS CodeBuild
   *             uses to name and store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this
   *                     value if specified. This is because AWS CodePipeline manages its build output names instead
   *                     of AWS CodeBuild.</p>
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
   *                     artifact is stored in
   *                         <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>.
   *                 </p>
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
   *                     in <code>MyArtifacts/<i>build-ID</i>
   *                   </code>. </p>
   *             </li>
   *          </ul>
   */
  name?: string;

  /**
   * <p>Along with <code>namespaceType</code> and <code>name</code>, the pattern that AWS CodeBuild
   *             uses to name and store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this
   *                     value if specified. This is because AWS CodePipeline manages its build output names instead
   *                     of AWS CodeBuild.</p>
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
   * <p>The type of build output artifact to create:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this
   *                     value if specified. This is because AWS CodePipeline manages its build output artifacts
   *                     instead of AWS CodeBuild.</p>
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
   *                         <code>NONE</code>: AWS CodeBuild creates in the output bucket a folder that
   *                             contains the build output. This is the default if <code>packaging</code>
   *                             is not specified.</p>
   *                     </li>
   *                   <li>
   *                         <p>
   *                         <code>ZIP</code>: AWS CodeBuild creates in the output bucket a ZIP file that
   *                             contains the build output.</p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  packaging?: ArtifactPackaging | string;

  /**
   * <p> Set to true if you do not want your output artifacts encrypted. This option is valid
   *             only if your artifacts type is Amazon Simple Storage Service (Amazon S3). If this is set with another artifacts type, an
   *             invalidInputException is thrown. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * <p>Along with <code>path</code> and <code>name</code>, the pattern that AWS CodeBuild uses to
   *             determine the name and location to store the output artifact:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this
   *                     value if specified. This is because AWS CodePipeline manages its build output names instead
   *                     of AWS CodeBuild.</p>
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
   *                     <code>MyArtifacts/<i>build-ID</i>/MyArtifact.zip</code>.</p>
   */
  namespaceType?: ArtifactNamespace | string;

  /**
   * <p>Information about the build output artifact location:</p>
   *         <ul>
   *             <li>
   *                 <p>If <code>type</code> is set to <code>CODEPIPELINE</code>, AWS CodePipeline ignores this
   *                     value if specified. This is because AWS CodePipeline manages its build output locations
   *                     instead of AWS CodeBuild.</p>
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
}

export namespace ProjectArtifacts {
  export const filterSensitiveLog = (obj: ProjectArtifacts): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectArtifacts => __isa(o, "ProjectArtifacts");
}

/**
 * <p>Information about the build badge for the build project.</p>
 */
export interface ProjectBadge {
  __type?: "ProjectBadge";
  /**
   * <p>The publicly-accessible URL through which you can access the build badge for your
   *             project. </p>
   *         <p>The publicly accessible URL through which you can access the build badge for your
   *             project. </p>
   */
  badgeRequestUrl?: string;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *             badge.</p>
   */
  badgeEnabled?: boolean;
}

export namespace ProjectBadge {
  export const filterSensitiveLog = (obj: ProjectBadge): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectBadge => __isa(o, "ProjectBadge");
}

/**
 * <p>Contains configuration information about a batch build project.</p>
 */
export interface ProjectBuildBatchConfig {
  __type?: "ProjectBuildBatchConfig";
  /**
   * <p>A <code>BatchRestrictions</code> object that specifies the restrictions for the batch
   *             build.</p>
   */
  restrictions?: BatchRestrictions;

  /**
   * <p>Specifies the service role ARN for the batch build project.</p>
   */
  serviceRole?: string;

  /**
   * <p>Specifies the maximum amount of time, in minutes, that the batch build must be completed in.</p>
   */
  timeoutInMins?: number;

  /**
   * <p>Specifies if the build artifacts for the batch build should be combined into a single
   *             artifact location.</p>
   */
  combineArtifacts?: boolean;
}

export namespace ProjectBuildBatchConfig {
  export const filterSensitiveLog = (obj: ProjectBuildBatchConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectBuildBatchConfig => __isa(o, "ProjectBuildBatchConfig");
}

/**
 * <p>Information about the cache for the build project.</p>
 */
export interface ProjectCache {
  __type?: "ProjectCache";
  /**
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
   * <p> If you use a <code>LOCAL</code> cache, the local cache mode. You can use one or more
   *             local cache modes at the same time. </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LOCAL_SOURCE_CACHE</code> mode caches Git metadata for primary and
   *                     secondary sources. After the cache is created, subsequent builds pull only the
   *                     change between commits. This mode is a good choice for projects with a clean
   *                     working directory and a source that is a large Git repository. If you choose
   *                     this option and your project does not use a Git repository (GitHub, GitHub
   *                     Enterprise, or Bitbucket), the option is ignored. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>LOCAL_DOCKER_LAYER_CACHE</code> mode caches existing Docker layers. This
   *                     mode is a good choice for projects that build or pull large Docker images. It
   *                     can prevent the performance issues caused by pulling large Docker images down
   *                     from the network. </p>
   *                 <note>
   *                     <ul>
   *                      <li>
   *                             <p> You can use a Docker layer cache in the Linux environment only.
   *                             </p>
   *                         </li>
   *                      <li>
   *                             <p> The <code>privileged</code> flag must be set so that your project
   *                                 has the required Docker permissions. </p>
   *                         </li>
   *                      <li>
   *                             <p> You should consider the security implications before you use a
   *                                 Docker layer cache. </p>
   *                         </li>
   *                   </ul>
   *                 </note>
   *             </li>
   *          </ul>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>LOCAL_CUSTOM_CACHE</code> mode caches directories you specify in the
   *                     buildspec file. This mode is a good choice if your build scenario is not suited
   *                     to one of the other three local cache modes. If you use a custom cache: </p>
   *                 <ul>
   *                   <li>
   *                         <p> Only directories can be specified for caching. You cannot specify
   *                             individual files. </p>
   *                     </li>
   *                   <li>
   *                         <p> Symlinks are used to reference cached directories. </p>
   *                     </li>
   *                   <li>
   *                         <p> Cached directories are linked to your build before it downloads its
   *                             project sources. Cached items are overridden if a source item has the
   *                             same name. Directories are specified using cache paths in the buildspec
   *                             file. </p>
   *                     </li>
   *                </ul>
   *             </li>
   *          </ul>
   */
  modes?: (CacheMode | string)[];

  /**
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
}

export namespace ProjectCache {
  export const filterSensitiveLog = (obj: ProjectCache): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectCache => __isa(o, "ProjectCache");
}

/**
 * <p>Information about the build environment of the build project.</p>
 */
export interface ProjectEnvironment {
  __type?: "ProjectEnvironment";
  /**
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
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html">Build Environment
   *                 Compute Types</a> in the <i>AWS CodeBuild User Guide.</i>
   *         </p>
   */
  computeType: ComputeType | string | undefined;

  /**
   * <p> The type of credentials AWS CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>CODEBUILD</code> specifies that AWS CodeBuild uses its own credentials.
   *                     This requires that you modify your ECR repository policy to trust AWS
   *                     CodeBuild's service principal. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>SERVICE_ROLE</code> specifies that AWS CodeBuild uses your build project's service
   *                     role. </p>
   *             </li>
   *          </ul>
   *         <p> When you use a cross-account or private registry image, you must use SERVICE_ROLE
   *             credentials. When you use an AWS CodeBuild curated image, you must use CODEBUILD credentials.
   *         </p>
   */
  imagePullCredentialsType?: ImagePullCredentialsType | string;

  /**
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
   */
  type: EnvironmentType | string | undefined;

  /**
   * <p>The image tag or image digest that identifies the Docker image to use for this build
   *             project. Use the following formats:</p>
   *         <ul>
   *             <li>
   *                 <p>For an image tag: <code>registry/repository:tag</code>. For example, to
   *                     specify an image with the tag "latest," use
   *                         <code>registry/repository:latest</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For an image digest: <code>registry/repository@digest</code>. For example, to
   *                     specify an image with the digest
   *                     "sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf," use
   *                         <code>registry/repository@sha256:cbbf2f9a99b47fc460d422812b6a5adff7dfee951d8fa2e4a98caa0382cfbdbf</code>.</p>
   *             </li>
   *          </ul>
   */
  image: string | undefined;

  /**
   * <p>The certificate to use with this build project.</p>
   */
  certificate?: string;

  /**
   * <p> The credentials for access to a private registry.</p>
   */
  registryCredential?: RegistryCredential;

  /**
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
   * <p>A set of environment variables to make available to builds for this build
   *             project.</p>
   */
  environmentVariables?: EnvironmentVariable[];
}

export namespace ProjectEnvironment {
  export const filterSensitiveLog = (obj: ProjectEnvironment): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectEnvironment => __isa(o, "ProjectEnvironment");
}

/**
 * <p> Information about a file system created by Amazon Elastic File System (EFS). For more
 *             information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/whatisefs.html">What Is
 *                 Amazon Elastic File System?</a>
 *         </p>
 */
export interface ProjectFileSystemLocation {
  __type?: "ProjectFileSystemLocation";
  /**
   * <p> A string that specifies the location of the file system created by Amazon EFS. Its
   *             format is <code>efs-dns-name:/directory-path</code>. You can find the DNS name of file
   *             system when you view it in the AWS EFS console. The directory path is a path to a
   *             directory in the file system that CodeBuild mounts. For example, if the DNS name of a
   *             file system is <code>fs-abcd1234.efs.us-west-2.amazonaws.com</code>, and its mount
   *             directory is <code>my-efs-mount-directory</code>, then the <code>location</code> is
   *                 <code>fs-abcd1234.efs.us-west-2.amazonaws.com:/my-efs-mount-directory</code>. </p>
   *         <p> The directory path in the format <code>efs-dns-name:/directory-path</code> is
   *             optional. If you do not specify a directory path, the location is only the DNS name and
   *             CodeBuild mounts the entire file system. </p>
   */
  location?: string;

  /**
   * <p> The location in the container where you mount the file system. </p>
   */
  mountPoint?: string;

  /**
   * <p> The name used to access a file system created by Amazon EFS. CodeBuild creates an
   *             environment variable by appending the <code>identifier</code> in all capital letters to
   *                 <code>CODEBUILD_</code>. For example, if you specify <code>my-efs</code> for
   *                 <code>identifier</code>, a new environment variable is create named
   *                 <code>CODEBUILD_MY-EFS</code>. </p>
   *         <p> The <code>identifier</code> is used to mount your file system. </p>
   */
  identifier?: string;

  /**
   * <p> The mount options for a file system created by AWS EFS. The default mount options
   *             used by CodeBuild are
   *                 <code>nfsvers=4.1,rsize=1048576,wsize=1048576,hard,timeo=600,retrans=2</code>. For
   *             more information, see <a href="https://docs.aws.amazon.com/efs/latest/ug/mounting-fs-nfs-mount-settings.html">Recommended NFS Mount
   *                 Options</a>. </p>
   */
  mountOptions?: string;

  /**
   * <p> The type of the file system. The one supported type is <code>EFS</code>. </p>
   */
  type?: FileSystemType | string;
}

export namespace ProjectFileSystemLocation {
  export const filterSensitiveLog = (obj: ProjectFileSystemLocation): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectFileSystemLocation => __isa(o, "ProjectFileSystemLocation");
}

export enum ProjectSortByType {
  CREATED_TIME = "CREATED_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  NAME = "NAME",
}

/**
 * <p>Information about the build input source code for the build project.</p>
 */
export interface ProjectSource {
  __type?: "ProjectSource";
  /**
   * <p> Set to true to report the status of a build's start and finish to your source
   *             provider. This option is valid only when your source provider is GitHub, GitHub
   *             Enterprise, or Bitbucket. If this is set and you use a different source provider, an
   *             invalidInputException is thrown. </p>
   *         <note>
   *             <p> The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *         </note>
   */
  reportBuildStatus?: boolean;

  /**
   * <p>The buildspec file declaration to use for the builds in this build project.</p>
   *         <p> If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same AWS Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   */
  buildspec?: string;

  /**
   * <p>Information about the location of the source code to be built. Valid values
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>For source code settings that are specified in the source action of a pipeline
   *                     in AWS CodePipeline, <code>location</code> should not be specified. If it is specified,
   *                     AWS CodePipeline ignores it. This is because AWS CodePipeline uses the settings in a pipeline's source
   *                     action instead of this value.</p>
   *             </li>
   *             <li>
   *                 <p>For source code in an AWS CodeCommit repository, the HTTPS clone URL to the repository
   *                     that contains the source code and the buildspec file (for example,
   *                             <code>https://git-codecommit.<i>region-ID</i>.amazonaws.com/v1/repos/<i>repo-name</i>
   *                   </code>).</p>
   *             </li>
   *             <li>
   *                 <p>For source code in an Amazon Simple Storage Service (Amazon S3) input bucket, one of the following. </p>
   *                 <ul>
   *                   <li>
   *                         <p> The path to the ZIP file that contains the source code (for example,
   *                                     <code>
   *                            <i>bucket-name</i>/<i>path</i>/<i>to</i>/<i>object-name</i>.zip</code>).
   *                         </p>
   *                     </li>
   *                   <li>
   *                         <p> The path to the folder that contains the source code (for example,
   *                                     <code>
   *                            <i>bucket-name</i>/<i>path</i>/<i>to</i>/<i>source-code</i>/<i>folder</i>/</code>).
   *                         </p>
   *                     </li>
   *                </ul>
   *             </li>
   *             <li>
   *                 <p>For source code in a GitHub repository, the HTTPS clone URL to the repository
   *                     that contains the source and the buildspec file. You must connect your AWS
   *                     account to your GitHub account. Use the AWS CodeBuild console to start creating a build
   *                     project. When you use the console to connect (or reconnect) with GitHub, on the
   *                     GitHub <b>Authorize application</b> page, for
   *                         <b>Organization access</b>, choose <b>Request access</b> next to each repository you want to
   *                     allow AWS CodeBuild to have access to, and then choose <b>Authorize
   *                         application</b>. (After you have connected to your GitHub account,
   *                     you do not need to finish creating the build project. You can leave the AWS CodeBuild
   *                     console.) To instruct AWS CodeBuild to use this connection, in the <code>source</code>
   *                     object, set the <code>auth</code> object's <code>type</code> value to
   *                         <code>OAUTH</code>.</p>
   *             </li>
   *             <li>
   *                 <p>For source code in a Bitbucket repository, the HTTPS clone URL to the
   *                     repository that contains the source and the buildspec file. You must connect
   *                     your AWS account to your Bitbucket account. Use the AWS CodeBuild console to start
   *                     creating a build project. When you use the console to connect (or reconnect)
   *                     with Bitbucket, on the Bitbucket <b>Confirm access to your
   *                         account</b> page, choose <b>Grant
   *                         access</b>. (After you have connected to your Bitbucket account, you
   *                     do not need to finish creating the build project. You can leave the AWS CodeBuild
   *                     console.) To instruct AWS CodeBuild to use this connection, in the <code>source</code>
   *                     object, set the <code>auth</code> object's <code>type</code> value to
   *                         <code>OAUTH</code>.</p>
   *             </li>
   *          </ul>
   */
  location?: string;

  /**
   * <p>Information about the authorization settings for AWS CodeBuild to access the source code to be
   *             built.</p>
   *         <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set
   *             this information directly.</p>
   */
  auth?: SourceAuth;

  /**
   * <p>Enable this flag to ignore SSL warnings while connecting to the project source
   *             code.</p>
   */
  insecureSsl?: boolean;

  /**
   * <p> Information about the Git submodules configuration for the build project. </p>
   */
  gitSubmodulesConfig?: GitSubmodulesConfig;

  /**
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   */
  buildStatusConfig?: BuildStatusConfig;

  /**
   * <p> An identifier for this project source. </p>
   */
  sourceIdentifier?: string;

  /**
   * <p>Information about the Git clone depth for the build project.</p>
   */
  gitCloneDepth?: number;

  /**
   * <p>The type of repository that contains the source code to be built. Valid values
   *             include:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>BITBUCKET</code>: The source code is in a Bitbucket repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CODECOMMIT</code>: The source code is in an AWS CodeCommit repository.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>CODEPIPELINE</code>: The source code settings are specified in the
   *                     source action of a pipeline in AWS CodePipeline.</p>
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
   *                   <code>S3</code>: The source code is in an Amazon Simple Storage Service (Amazon S3) input bucket.</p>
   *             </li>
   *          </ul>
   */
  type: SourceType | string | undefined;
}

export namespace ProjectSource {
  export const filterSensitiveLog = (obj: ProjectSource): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectSource => __isa(o, "ProjectSource");
}

/**
 * <p> A source identifier and its corresponding version. </p>
 */
export interface ProjectSourceVersion {
  __type?: "ProjectSourceVersion";
  /**
   * <p>The source version for the corresponding source identifier. If specified, must be one
   *             of:</p>
   *         <ul>
   *             <li>
   *                 <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
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
   *                 <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *                     file to use.</p>
   *             </li>
   *          </ul>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion: string | undefined;

  /**
   * <p>An identifier for a source in the build project.</p>
   */
  sourceIdentifier: string | undefined;
}

export namespace ProjectSourceVersion {
  export const filterSensitiveLog = (obj: ProjectSourceVersion): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ProjectSourceVersion => __isa(o, "ProjectSourceVersion");
}

export interface PutResourcePolicyInput {
  __type?: "PutResourcePolicyInput";
  /**
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource you want to
   *             associate with a resource policy. </p>
   */
  resourceArn: string | undefined;

  /**
   * <p> A JSON-formatted resource policy. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/project-sharing.html#project-sharing-share">Sharing
   *                 a Project</a> and <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/report-groups-sharing.html#report-groups-sharing-share">Sharing a Report Group</a> in the <i>AWS CodeBuild User Guide</i>.
   *         </p>
   */
  policy: string | undefined;
}

export namespace PutResourcePolicyInput {
  export const filterSensitiveLog = (obj: PutResourcePolicyInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutResourcePolicyInput => __isa(o, "PutResourcePolicyInput");
}

export interface PutResourcePolicyOutput {
  __type?: "PutResourcePolicyOutput";
  /**
   * <p> The ARN of the <code>Project</code> or <code>ReportGroup</code> resource that is
   *             associated with a resource policy. </p>
   */
  resourceArn?: string;
}

export namespace PutResourcePolicyOutput {
  export const filterSensitiveLog = (obj: PutResourcePolicyOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is PutResourcePolicyOutput => __isa(o, "PutResourcePolicyOutput");
}

/**
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
 *                 AWS Secrets Manager Sample for AWS CodeBuild</a>. </p>
 */
export interface RegistryCredential {
  __type?: "RegistryCredential";
  /**
   * <p> The Amazon Resource Name (ARN) or name of credentials created using AWS Secrets Manager. </p>
   *         <note>
   *             <p> The <code>credential</code> can use the name of the credentials only if they
   *                 exist in your current AWS Region. </p>
   *         </note>
   */
  credential: string | undefined;

  /**
   * <p> The service that created the credentials to access a private Docker registry. The
   *             valid value, SECRETS_MANAGER, is for AWS Secrets Manager. </p>
   */
  credentialProvider: CredentialProviderType | string | undefined;
}

export namespace RegistryCredential {
  export const filterSensitiveLog = (obj: RegistryCredential): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RegistryCredential => __isa(o, "RegistryCredential");
}

/**
 * <p>Information about the results from running a series of test cases during the run of a
 *             build project. The test cases are specified in the buildspec for the build project using
 *             one or more paths to the test case files. You can specify any type of tests you want,
 *             such as unit tests, integration tests, and functional tests. </p>
 */
export interface Report {
  __type?: "Report";
  /**
   * <p> A <code>TestReportSummary</code> object that contains information about this test
   *       report. </p>
   */
  testSummary?: TestReportSummary;

  /**
   * <p> The status of this report. </p>
   */
  status?: ReportStatusType | string;

  /**
   * <p>The type of the report that was run.</p>
   *         <dl>
   *             <dt>CODE_COVERAGE</dt>
   *             <dd>
   *                     <p>A code coverage report.</p>
   *                 </dd>
   *             <dt>TEST</dt>
   *             <dd>
   *                     <p>A test report.</p>
   *                 </dd>
   *          </dl>
   */
  type?: ReportType | string;

  /**
   * <p> The ARN of the build run that generated this report. </p>
   */
  executionId?: string;

  /**
   * <p> A boolean that specifies if this report run is truncated. The list of test cases is
   *       truncated after the maximum number of test cases is reached. </p>
   */
  truncated?: boolean;

  /**
   * <p> The ARN of the report run. </p>
   */
  arn?: string;

  /**
   * <p> The ARN of the report group associated with this report. </p>
   */
  reportGroupArn?: string;

  /**
   * <p> The date and time this report run occurred. </p>
   */
  created?: Date;

  /**
   * <p>A <code>CodeCoverageReportSummary</code> object that contains a code coverage summary for
   *             this report.</p>
   */
  codeCoverageSummary?: CodeCoverageReportSummary;

  /**
   * <p> The name of the report that was run. </p>
   */
  name?: string;

  /**
   * <p> The date and time a report expires. A report expires 30 days after it is created. An
   *       expired report is not available to view in CodeBuild. </p>
   */
  expired?: Date;

  /**
   * <p> Information about where the raw data used to generate this report was exported.
   *     </p>
   */
  exportConfig?: ReportExportConfig;
}

export namespace Report {
  export const filterSensitiveLog = (obj: Report): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Report => __isa(o, "Report");
}

export enum ReportCodeCoverageSortByType {
  FILE_PATH = "FILE_PATH",
  LINE_COVERAGE_PERCENTAGE = "LINE_COVERAGE_PERCENTAGE",
}

/**
 * <p> Information about the location where the run of a report is exported. </p>
 */
export interface ReportExportConfig {
  __type?: "ReportExportConfig";
  /**
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
   * <p> A <code>S3ReportExportConfig</code> object that contains information about the S3
   *             bucket where the run of a report is exported. </p>
   */
  s3Destination?: S3ReportExportConfig;
}

export namespace ReportExportConfig {
  export const filterSensitiveLog = (obj: ReportExportConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReportExportConfig => __isa(o, "ReportExportConfig");
}

export enum ReportExportConfigType {
  NO_EXPORT = "NO_EXPORT",
  S3 = "S3",
}

/**
 * <p> A filter used to return reports with the status specified by the input
 *                 <code>status</code> parameter. </p>
 */
export interface ReportFilter {
  __type?: "ReportFilter";
  /**
   * <p> The status used to filter reports. You can filter using one status only. </p>
   */
  status?: ReportStatusType | string;
}

export namespace ReportFilter {
  export const filterSensitiveLog = (obj: ReportFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReportFilter => __isa(o, "ReportFilter");
}

/**
 * <p> A series of reports. Each report contains information about the results from running
 *             a series of test cases. You specify the test cases for a report group in the buildspec
 *             for a build project using one or more paths to the test case files. </p>
 */
export interface ReportGroup {
  __type?: "ReportGroup";
  /**
   * <p> The type of the <code>ReportGroup</code>. The one valid value is <code>TEST</code>.
   *         </p>
   */
  type?: ReportType | string;

  /**
   * <p> A list of tag key and value pairs associated with this report group. </p>
   *         <p>These tags are available for use by AWS services that support AWS CodeBuild report group
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p> The date and time this <code>ReportGroup</code> was created. </p>
   */
  created?: Date;

  /**
   * <p> The ARN of a <code>ReportGroup</code>. </p>
   */
  arn?: string;

  /**
   * <p> The date and time this <code>ReportGroup</code> was last modified. </p>
   */
  lastModified?: Date;

  /**
   * <p> The name of a <code>ReportGroup</code>. </p>
   */
  name?: string;

  /**
   * <p> Information about the destination where the raw data of this <code>ReportGroup</code>
   *             is exported. </p>
   */
  exportConfig?: ReportExportConfig;
}

export namespace ReportGroup {
  export const filterSensitiveLog = (obj: ReportGroup): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ReportGroup => __isa(o, "ReportGroup");
}

export enum ReportGroupSortByType {
  CREATED_TIME = "CREATED_TIME",
  LAST_MODIFIED_TIME = "LAST_MODIFIED_TIME",
  NAME = "NAME",
}

export enum ReportPackagingType {
  NONE = "NONE",
  ZIP = "ZIP",
}

export enum ReportStatusType {
  DELETING = "DELETING",
  FAILED = "FAILED",
  GENERATING = "GENERATING",
  INCOMPLETE = "INCOMPLETE",
  SUCCEEDED = "SUCCEEDED",
}

export enum ReportType {
  CODE_COVERAGE = "CODE_COVERAGE",
  TEST = "TEST",
}

/**
 * <p>Represents a resolved build artifact. A resolve artifact is an artifact that is built and
 *             deployed to the destination, such as Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface ResolvedArtifact {
  __type?: "ResolvedArtifact";
  /**
   * <p>The identifier of the artifact.</p>
   */
  identifier?: string;

  /**
   * <p>The location of the artifact.</p>
   */
  location?: string;

  /**
   * <p>Specifies the type of artifact.</p>
   */
  type?: ArtifactsType | string;
}

export namespace ResolvedArtifact {
  export const filterSensitiveLog = (obj: ResolvedArtifact): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResolvedArtifact => __isa(o, "ResolvedArtifact");
}

/**
 * <p>The specified AWS resource cannot be created, because an AWS resource with the same
 *             settings already exists.</p>
 */
export interface ResourceAlreadyExistsException extends __SmithyException, $MetadataBearer {
  name: "ResourceAlreadyExistsException";
  $fault: "client";
  message?: string;
}

export namespace ResourceAlreadyExistsException {
  export const filterSensitiveLog = (obj: ResourceAlreadyExistsException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceAlreadyExistsException => __isa(o, "ResourceAlreadyExistsException");
}

/**
 * <p>The specified AWS resource cannot be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
  export const isa = (o: any): o is ResourceNotFoundException => __isa(o, "ResourceNotFoundException");
}

export interface RetryBuildBatchInput {
  __type?: "RetryBuildBatchInput";
  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>RetryBuildBatch</code> request. The token is included in the
   *                 <code>RetryBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>RetryBuildBatch</code> request with the same token, but change a parameter,
   *             AWS CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;

  /**
   * <p>Specifies the type of retry to perform.</p>
   */
  retryType?: RetryBuildBatchType | string;

  /**
   * <p>Specifies the identifier of the batch build to restart.</p>
   */
  id?: string;
}

export namespace RetryBuildBatchInput {
  export const filterSensitiveLog = (obj: RetryBuildBatchInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetryBuildBatchInput => __isa(o, "RetryBuildBatchInput");
}

export interface RetryBuildBatchOutput {
  __type?: "RetryBuildBatchOutput";
  /**
   * <p>Contains information about a batch build.</p>
   */
  buildBatch?: BuildBatch;
}

export namespace RetryBuildBatchOutput {
  export const filterSensitiveLog = (obj: RetryBuildBatchOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetryBuildBatchOutput => __isa(o, "RetryBuildBatchOutput");
}

export enum RetryBuildBatchType {
  RETRY_ALL_BUILDS = "RETRY_ALL_BUILDS",
  RETRY_FAILED_BUILDS = "RETRY_FAILED_BUILDS",
}

export interface RetryBuildInput {
  __type?: "RetryBuildInput";
  /**
   * <p>Specifies the identifier of the build to restart.</p>
   */
  id?: string;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *       <code>RetryBuild</code> request. The token is included in the
   *       <code>RetryBuild</code> request and is valid for five minutes. If you repeat
   *       the <code>RetryBuild</code> request with the same token, but change a parameter,
   *       AWS CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;
}

export namespace RetryBuildInput {
  export const filterSensitiveLog = (obj: RetryBuildInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetryBuildInput => __isa(o, "RetryBuildInput");
}

export interface RetryBuildOutput {
  __type?: "RetryBuildOutput";
  /**
   * <p>Information about a build.</p>
   */
  build?: Build;
}

export namespace RetryBuildOutput {
  export const filterSensitiveLog = (obj: RetryBuildOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is RetryBuildOutput => __isa(o, "RetryBuildOutput");
}

/**
 * <p> Information about S3 logs for a build project. </p>
 */
export interface S3LogsConfig {
  __type?: "S3LogsConfig";
  /**
   * <p> Set to true if you do not want your S3 build log output encrypted. By default S3
   *             build logs are encrypted. </p>
   */
  encryptionDisabled?: boolean;

  /**
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
   * <p> The ARN of an S3 bucket and the path prefix for S3 logs. If your Amazon S3 bucket
   *             name is <code>my-bucket</code>, and your path prefix is <code>build-log</code>, then
   *             acceptable formats are <code>my-bucket/build-log</code> or
   *                 <code>arn:aws:s3:::my-bucket/build-log</code>. </p>
   */
  location?: string;
}

export namespace S3LogsConfig {
  export const filterSensitiveLog = (obj: S3LogsConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3LogsConfig => __isa(o, "S3LogsConfig");
}

/**
 * <p> Information about the S3 bucket where the raw data of a report are exported. </p>
 */
export interface S3ReportExportConfig {
  __type?: "S3ReportExportConfig";
  /**
   * <p> The type of build output artifact to create. Valid values include: </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>NONE</code>: AWS CodeBuild creates the raw data in the output bucket. This
   *                     is the default if packaging is not specified. </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ZIP</code>: AWS CodeBuild creates a ZIP file with the raw data in the
   *                     output bucket. </p>
   *             </li>
   *          </ul>
   */
  packaging?: ReportPackagingType | string;

  /**
   * <p> The encryption key for the report's encrypted raw data. </p>
   */
  encryptionKey?: string;

  /**
   * <p> The name of the S3 bucket where the raw data of a report are exported. </p>
   */
  bucket?: string;

  /**
   * <p> A boolean value that specifies if the results of a report are encrypted. </p>
   */
  encryptionDisabled?: boolean;

  /**
   * <p> The path to the exported report's raw data results. </p>
   */
  path?: string;
}

export namespace S3ReportExportConfig {
  export const filterSensitiveLog = (obj: S3ReportExportConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is S3ReportExportConfig => __isa(o, "S3ReportExportConfig");
}

export enum ServerType {
  BITBUCKET = "BITBUCKET",
  GITHUB = "GITHUB",
  GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE",
}

export enum SharedResourceSortByType {
  ARN = "ARN",
  MODIFIED_TIME = "MODIFIED_TIME",
}

export enum SortOrderType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>Information about the authorization settings for AWS CodeBuild to access the source code to be
 *             built.</p>
 *         <p>This information is for the AWS CodeBuild console's use only. Your code should not get or set
 *             this information directly.</p>
 */
export interface SourceAuth {
  __type?: "SourceAuth";
  /**
   * <p>The resource value that applies to the specified authorization type.</p>
   */
  resource?: string;

  /**
   * <note>
   *             <p> This data type is deprecated and is no longer accurate or used. </p>
   *         </note>
   *         <p>The authorization type to use. The only valid value is <code>OAUTH</code>, which
   *             represents the OAuth authorization type.</p>
   */
  type: SourceAuthType | string | undefined;
}

export namespace SourceAuth {
  export const filterSensitiveLog = (obj: SourceAuth): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SourceAuth => __isa(o, "SourceAuth");
}

export enum SourceAuthType {
  OAUTH = "OAUTH",
}

/**
 * <p> Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket
 *             repository. </p>
 */
export interface SourceCredentialsInfo {
  __type?: "SourceCredentialsInfo";
  /**
   * <p> The type of source provider. The valid options are GITHUB, GITHUB_ENTERPRISE, or
   *             BITBUCKET. </p>
   */
  serverType?: ServerType | string;

  /**
   * <p> The Amazon Resource Name (ARN) of the token. </p>
   */
  arn?: string;

  /**
   * <p> The type of authentication used by the credentials. Valid options are OAUTH,
   *             BASIC_AUTH, or PERSONAL_ACCESS_TOKEN. </p>
   */
  authType?: AuthType | string;
}

export namespace SourceCredentialsInfo {
  export const filterSensitiveLog = (obj: SourceCredentialsInfo): any => ({
    ...obj,
  });
  export const isa = (o: any): o is SourceCredentialsInfo => __isa(o, "SourceCredentialsInfo");
}

export enum SourceType {
  BITBUCKET = "BITBUCKET",
  CODECOMMIT = "CODECOMMIT",
  CODEPIPELINE = "CODEPIPELINE",
  GITHUB = "GITHUB",
  GITHUB_ENTERPRISE = "GITHUB_ENTERPRISE",
  NO_SOURCE = "NO_SOURCE",
  S3 = "S3",
}

export interface StartBuildBatchInput {
  __type?: "StartBuildBatchInput";
  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) that overrides the one specified in the batch build
   *         project. The CMK key encrypts the build output artifacts.</p>
   *          <note>
   *             <p>You can use a cross-account KMS key to encrypt the build output artifacts if your
   *           service role has permission to that key. </p>
   *          </note>
   *          <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *         the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKeyOverride?: string;

  /**
   * <p>The name of a certificate for this batch build that overrides the one specified in the batch build
   *         project.</p>
   */
  certificateOverride?: string;

  /**
   * <p>A buildspec file declaration that overrides, for this build only, the latest one
   *         already defined in the build project.</p>
   *          <p>If this value is set, it can be either an inline buildspec definition, the path to an
   *         alternate buildspec file relative to the value of the built-in
   *         <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *         The bucket must be in the same AWS Region as the build project. Specify the buildspec
   *         file using its ARN (for example,
   *         <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *         provided or is set to an empty string, the source code must contain a buildspec file in
   *         its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   */
  buildspecOverride?: string;

  /**
   * <p>The version of the batch build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *         <dl>
   *             <dt>AWS CodeCommit</dt>
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
   *             <dt>Amazon Simple Storage Service (Amazon S3)</dt>
   *             <dd>
   *                     <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *                 </dd>
   *          </dl>
   *          <p>If <code>sourceVersion</code> is specified at the project level, then this
   *                 <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p>An array of <code>ProjectArtifacts</code> objects that contains information about the
   *             build output artifact overrides for the build project.</p>
   */
  artifactsOverride?: ProjectArtifacts;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *                 <code>StartBuildBatch</code> request. The token is included in the
   *                 <code>StartBuildBatch</code> request and is valid for five minutes. If you repeat
   *             the <code>StartBuildBatch</code> request with the same token, but change a parameter,
   *             AWS CodeBuild returns a parameter mismatch error.</p>
   */
  idempotencyToken?: string;

  /**
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
   * <p>An array of <code>ProjectArtifacts</code> objects that override the secondary artifacts
   *             defined in the batch build project.</p>
   */
  secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * <p>Enable this flag to override the insecure SSL setting that is specified in the batch build
   *         project. The insecure SSL setting determines whether to ignore SSL warnings while
   *         connecting to the project source code. This override applies only if the build's source
   *         is GitHub Enterprise.</p>
   */
  insecureSslOverride?: boolean;

  /**
   * <p>A <code>GitSubmodulesConfig</code> object that overrides the Git submodules configuration
   *             for this batch build.</p>
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * <p>A <code>BuildBatchConfigOverride</code> object that contains batch build configuration
   *             overrides.</p>
   */
  buildBatchConfigOverride?: ProjectBuildBatchConfig;

  /**
   * <p>An array of <code>ProjectSourceVersion</code> objects that override the secondary source
   *             versions in the batch build project.</p>
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * <p>An array of <code>ProjectSource</code> objects that override the secondary sources
   *         defined in the batch build project.</p>
   */
  secondarySourcesOverride?: ProjectSource[];

  /**
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *         batch build only, any previous depth of history defined in the batch build project.</p>
   */
  gitCloneDepthOverride?: number;

  /**
   * <p>The name of the project.</p>
   */
  projectName: string | undefined;

  /**
   * <p>A <code>SourceAuth</code> object that overrides the one defined in the batch build
   *             project. This override applies only if the build project's source is BitBucket or
   *             GitHub.</p>
   */
  sourceAuthOverride?: SourceAuth;

  /**
   * <p>A <code>RegistryCredential</code> object that overrides credentials for access to a
   *             private registry.</p>
   */
  registryCredentialOverride?: RegistryCredential;

  /**
   * <p>Overrides the build timeout specified in the batch build project.</p>
   */
  buildTimeoutInMinutesOverride?: number;

  /**
   * <p>A container type for this batch build that overrides the one specified in the batch build
   *         project.</p>
   */
  environmentTypeOverride?: EnvironmentType | string;

  /**
   * <p>The name of a compute type for this batch build that overrides the one specified in the
   *         batch build project.</p>
   */
  computeTypeOverride?: ComputeType | string;

  /**
   * <p>Enable this flag to override privileged mode in the batch build project.</p>
   */
  privilegedModeOverride?: boolean;

  /**
   * <p>The name of an image for this batch build that overrides the one specified in the batch
   *             build project.</p>
   */
  imageOverride?: string;

  /**
   * <p>The name of a service role for this batch build that overrides the one specified in the
   *         batch build project.</p>
   */
  serviceRoleOverride?: string;

  /**
   * <p>A <code>ProjectCache</code> object that specifies cache overrides.</p>
   */
  cacheOverride?: ProjectCache;

  /**
   * <p>The type of credentials AWS CodeBuild uses to pull images in your batch build. There are two valid
   *         values: </p>
   *         <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                     <p>Specifies that AWS CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust AWS CodeBuild's service principal.</p>
   *                 </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                     <p>Specifies that AWS CodeBuild uses your build project's service role. </p>
   *                 </dd>
   *          </dl>
   *          <p>When using a cross-account or private registry image, you must use
   *                 <code>SERVICE_ROLE</code> credentials. When using an AWS CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | string;

  /**
   * <p>The number of minutes a batch build is allowed to be queued before it times out.</p>
   */
  queuedTimeoutInMinutesOverride?: number;

  /**
   * <p>A location that overrides, for this batch build, the source location defined in
   *         the batch build project.</p>
   */
  sourceLocationOverride?: string;

  /**
   * <p>A <code>LogsConfig</code> object that override the log settings defined in the batch build
   *             project.</p>
   */
  logsConfigOverride?: LogsConfig;

  /**
   * <p>The source input type that overrides the source input defined in the batch
   *         build project.</p>
   */
  sourceTypeOverride?: SourceType | string;

  /**
   * <p>An array of <code>EnvironmentVariable</code> objects that override, or add to, the
   *             environment variables defined in the batch build project.</p>
   */
  environmentVariablesOverride?: EnvironmentVariable[];
}

export namespace StartBuildBatchInput {
  export const filterSensitiveLog = (obj: StartBuildBatchInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartBuildBatchInput => __isa(o, "StartBuildBatchInput");
}

export interface StartBuildBatchOutput {
  __type?: "StartBuildBatchOutput";
  /**
   * <p>A <code>BuildBatch</code> object that contains information about the batch build.</p>
   */
  buildBatch?: BuildBatch;
}

export namespace StartBuildBatchOutput {
  export const filterSensitiveLog = (obj: StartBuildBatchOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartBuildBatchOutput => __isa(o, "StartBuildBatchOutput");
}

export interface StartBuildInput {
  __type?: "StartBuildInput";
  /**
   * <p> Log settings for this build that override the log settings defined in the build
   *             project. </p>
   */
  logsConfigOverride?: LogsConfig;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutesOverride?: number;

  /**
   * <p> Set to true to report to your source provider the status of a build's start and
   *             completion. If you use this option with a source provider other than GitHub, GitHub
   *             Enterprise, or Bitbucket, an invalidInputException is thrown. </p>
   *         <note>
   *             <p> The status of a build triggered by a webhook is always reported to your source
   *                 provider. </p>
   *         </note>
   */
  reportBuildStatusOverride?: boolean;

  /**
   * <p>The version of the build input to be built, for this build only. If not specified,
   *             the latest version is used. If specified, the contents depends on the source
   *             provider:</p>
   *         <dl>
   *             <dt>AWS CodeCommit</dt>
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
   *             <dt>Amazon Simple Storage Service (Amazon S3)</dt>
   *             <dd>
   *                     <p>The version ID of the object that represents the build input ZIP file to
   *                         use.</p>
   *                 </dd>
   *          </dl>
   *         <p>If <code>sourceVersion</code> is specified at the project level, then this
   *             <code>sourceVersion</code> (at the build level) takes precedence. </p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *             with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) that overrides the one specified in the build
   *             project. The CMK key encrypts the build output artifacts.</p>
   *         <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKeyOverride?: string;

  /**
   * <p>Build output artifact settings that override, for this build only, the latest ones
   *             already defined in the build project.</p>
   */
  artifactsOverride?: ProjectArtifacts;

  /**
   * <p>The user-defined depth of history, with a minimum value of 0, that overrides, for this
   *             build only, any previous depth of history defined in the build project.</p>
   */
  gitCloneDepthOverride?: number;

  /**
   * <p> An array of <code>ProjectArtifacts</code> objects. </p>
   */
  secondaryArtifactsOverride?: ProjectArtifacts[];

  /**
   * <p>The name of the AWS CodeBuild build project to start running a build.</p>
   */
  projectName: string | undefined;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects that specify one or more
   *             versions of the project's secondary sources to be used for this build only. </p>
   */
  secondarySourcesVersionOverride?: ProjectSourceVersion[];

  /**
   * <p>Enable this flag to override the insecure SSL setting that is specified in the build
   *             project. The insecure SSL setting determines whether to ignore SSL warnings while
   *             connecting to the project source code. This override applies only if the build's source
   *             is GitHub Enterprise.</p>
   */
  insecureSslOverride?: boolean;

  /**
   * <p> The credentials for access to a private registry. </p>
   */
  registryCredentialOverride?: RegistryCredential;

  /**
   * <p>An authorization type for this build that overrides the one defined in the build
   *             project. This override applies only if the build project's source is BitBucket or
   *             GitHub.</p>
   */
  sourceAuthOverride?: SourceAuth;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySourcesOverride?: ProjectSource[];

  /**
   * <p>A buildspec file declaration that overrides, for this build only, the latest one
   *             already defined in the build project.</p>
   *         <p> If this value is set, it can be either an inline buildspec definition, the path to an
   *             alternate buildspec file relative to the value of the built-in
   *                 <code>CODEBUILD_SRC_DIR</code> environment variable, or the path to an S3 bucket.
   *             The bucket must be in the same AWS Region as the build project. Specify the buildspec
   *             file using its ARN (for example,
   *                 <code>arn:aws:s3:::my-codebuild-sample2/buildspec.yml</code>). If this value is not
   *             provided or is set to an empty string, the source code must contain a buildspec file in
   *             its root directory. For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/build-spec-ref.html#build-spec-ref-name-storage">Buildspec File Name and Storage Location</a>. </p>
   */
  buildspecOverride?: string;

  /**
   * <p> Information about the Git submodules configuration for this build of an AWS CodeBuild build
   *             project. </p>
   */
  gitSubmodulesConfigOverride?: GitSubmodulesConfig;

  /**
   * <p>A unique, case sensitive identifier you provide to ensure the idempotency of the
   *             StartBuild request. The token is included in the StartBuild request and is valid for 5
   *             minutes. If you repeat the StartBuild request with the same token, but change a
   *             parameter, AWS CodeBuild returns a parameter mismatch error. </p>
   */
  idempotencyToken?: string;

  /**
   * <p>Enable this flag to override privileged mode in the build project.</p>
   */
  privilegedModeOverride?: boolean;

  /**
   * <p>A ProjectCache object specified for this build that overrides the one defined in the
   *             build project.</p>
   */
  cacheOverride?: ProjectCache;

  /**
   * <p>The name of a compute type for this build that overrides the one specified in the
   *             build project.</p>
   */
  computeTypeOverride?: ComputeType | string;

  /**
   * <p>The name of an image for this build that overrides the one specified in the build
   *             project.</p>
   */
  imageOverride?: string;

  /**
   * <p>Specifies if session debugging is enabled for this build. For more information, see
   *                 <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/session-manager.html">Viewing a running build in Session Manager</a>.</p>
   */
  debugSessionEnabled?: boolean;

  /**
   * <p>A container type for this build that overrides the one specified in the build
   *             project.</p>
   */
  environmentTypeOverride?: EnvironmentType | string;

  /**
   * <p>The type of credentials AWS CodeBuild uses to pull images in your build. There are two valid
   *             values: </p>
   *         <dl>
   *             <dt>CODEBUILD</dt>
   *             <dd>
   *                     <p>Specifies that AWS CodeBuild uses its own credentials. This requires that you
   *                         modify your ECR repository policy to trust AWS CodeBuild's service principal.</p>
   *                 </dd>
   *             <dt>SERVICE_ROLE</dt>
   *             <dd>
   *                     <p>Specifies that AWS CodeBuild uses your build project's service role. </p>
   *                 </dd>
   *          </dl>
   *         <p>When using a cross-account or private registry image, you must use
   *             <code>SERVICE_ROLE</code> credentials. When using an AWS CodeBuild curated image,
   *             you must use <code>CODEBUILD</code> credentials. </p>
   */
  imagePullCredentialsTypeOverride?: ImagePullCredentialsType | string;

  /**
   * <p>The number of build timeout minutes, from 5 to 480 (8 hours), that overrides, for this
   *             build only, the latest setting already defined in the build project.</p>
   */
  timeoutInMinutesOverride?: number;

  /**
   * <p>The name of a service role for this build that overrides the one specified in the
   *             build project.</p>
   */
  serviceRoleOverride?: string;

  /**
   * <p>Contains information that defines how the build project reports the build status to
   *             the source provider. This option is only used when the source provider is
   *                 <code>GITHUB</code>, <code>GITHUB_ENTERPRISE</code>, or
   *             <code>BITBUCKET</code>.</p>
   */
  buildStatusConfigOverride?: BuildStatusConfig;

  /**
   * <p>The name of a certificate for this build that overrides the one specified in the build
   *             project.</p>
   */
  certificateOverride?: string;

  /**
   * <p>A source input type, for this build, that overrides the source input defined in the
   *             build project.</p>
   */
  sourceTypeOverride?: SourceType | string;

  /**
   * <p>A set of environment variables that overrides, for this build only, the latest ones
   *             already defined in the build project.</p>
   */
  environmentVariablesOverride?: EnvironmentVariable[];

  /**
   * <p>A location that overrides, for this build, the source location for the one defined in
   *             the build project.</p>
   */
  sourceLocationOverride?: string;
}

export namespace StartBuildInput {
  export const filterSensitiveLog = (obj: StartBuildInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartBuildInput => __isa(o, "StartBuildInput");
}

export interface StartBuildOutput {
  __type?: "StartBuildOutput";
  /**
   * <p>Information about the build to be run.</p>
   */
  build?: Build;
}

export namespace StartBuildOutput {
  export const filterSensitiveLog = (obj: StartBuildOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StartBuildOutput => __isa(o, "StartBuildOutput");
}

export enum StatusType {
  FAILED = "FAILED",
  FAULT = "FAULT",
  IN_PROGRESS = "IN_PROGRESS",
  STOPPED = "STOPPED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT",
}

export interface StopBuildBatchInput {
  __type?: "StopBuildBatchInput";
  /**
   * <p>The identifier of the batch build to stop.</p>
   */
  id: string | undefined;
}

export namespace StopBuildBatchInput {
  export const filterSensitiveLog = (obj: StopBuildBatchInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopBuildBatchInput => __isa(o, "StopBuildBatchInput");
}

export interface StopBuildBatchOutput {
  __type?: "StopBuildBatchOutput";
  /**
   * <p>Contains information about a batch build.</p>
   */
  buildBatch?: BuildBatch;
}

export namespace StopBuildBatchOutput {
  export const filterSensitiveLog = (obj: StopBuildBatchOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopBuildBatchOutput => __isa(o, "StopBuildBatchOutput");
}

export interface StopBuildInput {
  __type?: "StopBuildInput";
  /**
   * <p>The ID of the build.</p>
   */
  id: string | undefined;
}

export namespace StopBuildInput {
  export const filterSensitiveLog = (obj: StopBuildInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopBuildInput => __isa(o, "StopBuildInput");
}

export interface StopBuildOutput {
  __type?: "StopBuildOutput";
  /**
   * <p>Information about the build.</p>
   */
  build?: Build;
}

export namespace StopBuildOutput {
  export const filterSensitiveLog = (obj: StopBuildOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is StopBuildOutput => __isa(o, "StopBuildOutput");
}

/**
 * <p>A tag, consisting of a key and a value.</p>
 *         <p>This tag is available for use by AWS services that support tags in AWS CodeBuild.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag's key.</p>
   */
  key?: string;

  /**
   * <p>The tag's value.</p>
   */
  value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p> Information about a test case created using a framework such as NUnit or Cucumber. A
 *             test case might be a unit test or a configuration test. </p>
 */
export interface TestCase {
  __type?: "TestCase";
  /**
   * <p> The ARN of the report to which the test case belongs. </p>
   */
  reportArn?: string;

  /**
   * <p> The name of the test case. </p>
   */
  name?: string;

  /**
   * <p> The status returned by the test case after it was run. Valid statuses are
   *                 <code>SUCCEEDED</code>, <code>FAILED</code>, <code>ERROR</code>,
   *                 <code>SKIPPED</code>, and <code>UNKNOWN</code>. </p>
   */
  status?: string;

  /**
   * <p> The number of nanoseconds it took to run this test case. </p>
   */
  durationInNanoSeconds?: number;

  /**
   * <p> A message associated with a test case. For example, an error message or stack trace.
   *         </p>
   */
  message?: string;

  /**
   * <p> A string that is applied to a series of related test cases. CodeBuild generates the
   *             prefix. The prefix depends on the framework used to generate the tests. </p>
   */
  prefix?: string;

  /**
   * <p> The path to the raw data file that contains the test result. </p>
   */
  testRawDataPath?: string;

  /**
   * <p> The date and time a test case expires. A test case expires 30 days after it is
   *             created. An expired test case is not available to view in CodeBuild. </p>
   */
  expired?: Date;
}

export namespace TestCase {
  export const filterSensitiveLog = (obj: TestCase): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestCase => __isa(o, "TestCase");
}

/**
 * <p> A filter used to return specific types of test cases. </p>
 */
export interface TestCaseFilter {
  __type?: "TestCaseFilter";
  /**
   * <p> The status used to filter test cases. Valid statuses are <code>SUCCEEDED</code>,
   *                 <code>FAILED</code>, <code>ERROR</code>, <code>SKIPPED</code>, and
   *                 <code>UNKNOWN</code>. A <code>TestCaseFilter</code> can have one status. </p>
   */
  status?: string;
}

export namespace TestCaseFilter {
  export const filterSensitiveLog = (obj: TestCaseFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestCaseFilter => __isa(o, "TestCaseFilter");
}

/**
 * <p> Information about a test report. </p>
 */
export interface TestReportSummary {
  __type?: "TestReportSummary";
  /**
   * <p> The number of nanoseconds it took to run all of the test cases in this report.
   *         </p>
   */
  durationInNanoSeconds: number | undefined;

  /**
   * <p> A map that contains the number of each type of status returned by the test results in
   *             this <code>TestReportSummary</code>. </p>
   */
  statusCounts: { [key: string]: number } | undefined;

  /**
   * <p> The number of test cases in this <code>TestReportSummary</code>. The total includes
   *             truncated test cases. </p>
   */
  total: number | undefined;
}

export namespace TestReportSummary {
  export const filterSensitiveLog = (obj: TestReportSummary): any => ({
    ...obj,
  });
  export const isa = (o: any): o is TestReportSummary => __isa(o, "TestReportSummary");
}

export interface UpdateProjectInput {
  __type?: "UpdateProjectInput";
  /**
   * <p>The AWS Key Management Service (AWS KMS) customer master key (CMK) to be used for encrypting the build output
   *             artifacts.</p>
   *         <note>
   *             <p> You can use a cross-account KMS key to encrypt the build output artifacts if your
   *                 service role has permission to that key. </p>
   *         </note>
   *         <p>You can specify either the Amazon Resource Name (ARN) of the CMK or, if available, the CMK's alias (using
   *             the format <code>alias/<i>alias-name</i>
   *             </code>).</p>
   */
  encryptionKey?: string;

  /**
   * <p> A version of the build input to be built for this project. If not specified, the
   *             latest version is used. If specified, it must be one of: </p>
   *         <ul>
   *             <li>
   *                 <p>For AWS CodeCommit: the commit ID, branch, or Git tag to use.</p>
   *             </li>
   *             <li>
   *                 <p>For GitHub: the commit ID, pull request ID, branch name, or tag name that
   *                     corresponds to the version of the source code you want to build. If a pull
   *                     request ID is specified, it must use the format <code>pr/pull-request-ID</code>
   *                     (for example <code>pr/25</code>). If a branch name is specified, the branch's
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
   *                 <p>For Amazon Simple Storage Service (Amazon S3): the version ID of the object that represents the build input ZIP
   *                     file to use.</p>
   *             </li>
   *          </ul>
   *         <p> If <code>sourceVersion</code> is specified at the build level, then that version
   *             takes precedence over this <code>sourceVersion</code> (at the project level). </p>
   *         <p> For more information, see <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/sample-source-version.html">Source Version Sample
   *                 with CodeBuild</a> in the <i>AWS CodeBuild User Guide</i>. </p>
   */
  sourceVersion?: string;

  /**
   * <p> An array of <code>ProjectSourceVersion</code> objects. If
   *                 <code>secondarySourceVersions</code> is specified at the build level, then they take
   *             over these <code>secondarySourceVersions</code> (at the project level). </p>
   */
  secondarySourceVersions?: ProjectSourceVersion[];

  /**
   * <p>A new or replacement description of the build project.</p>
   */
  description?: string;

  /**
   * <p>Stores recently used information so that it can be quickly accessed at a later
   *             time.</p>
   */
  cache?: ProjectCache;

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondarySources?: ProjectSource[];

  /**
   * <p>Information to be changed about the build input source code for the build
   *             project.</p>
   */
  source?: ProjectSource;

  /**
   * <p>
   *          An array of <code>ProjectFileSystemLocation</code> objects for a CodeBuild build project. A <code>ProjectFileSystemLocation</code> object
   *          specifies the <code>identifier</code>, <code>location</code>, <code>mountOptions</code>,
   *          <code>mountPoint</code>, and <code>type</code> of a file system created using Amazon Elastic File System.
   *       </p>
   */
  fileSystemLocations?: ProjectFileSystemLocation[];

  /**
   * <p> An array of <code>ProjectSource</code> objects. </p>
   */
  secondaryArtifacts?: ProjectArtifacts[];

  /**
   * <p>An updated list of tag key and value pairs associated with this build project.</p>
   *         <p>These tags are available for use by AWS services that support AWS CodeBuild build project
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>The replacement value in minutes, from 5 to 480 (8 hours), for AWS CodeBuild to wait before
   *             timing out any related build that did not get marked as completed.</p>
   */
  timeoutInMinutes?: number;

  /**
   * <p> The number of minutes a build is allowed to be queued before it times out. </p>
   */
  queuedTimeoutInMinutes?: number;

  /**
   * <p>Information to be changed about the build environment for the build project.</p>
   */
  environment?: ProjectEnvironment;

  /**
   * <p>VpcConfig enables AWS CodeBuild to access resources in an Amazon VPC.</p>
   */
  vpcConfig?: VpcConfig;

  /**
   * <p>The replacement ARN of the AWS Identity and Access Management (IAM) role that enables AWS CodeBuild to interact with dependent
   *             AWS services on behalf of the AWS account.</p>
   */
  serviceRole?: string;

  /**
   * <p> Information about logs for the build project. A project can create logs in Amazon CloudWatch Logs,
   *             logs in an S3 bucket, or both. </p>
   */
  logsConfig?: LogsConfig;

  /**
   * <p>Contains configuration information about a batch build project.</p>
   */
  buildBatchConfig?: ProjectBuildBatchConfig;

  /**
   * <p>Information to be changed about the build output artifacts for the build
   *             project.</p>
   */
  artifacts?: ProjectArtifacts;

  /**
   * <p>The name of the build project.</p>
   *         <note>
   *             <p>You cannot change a build project's name.</p>
   *         </note>
   */
  name: string | undefined;

  /**
   * <p>Set this to true to generate a publicly accessible URL for your project's build
   *             badge.</p>
   */
  badgeEnabled?: boolean;
}

export namespace UpdateProjectInput {
  export const filterSensitiveLog = (obj: UpdateProjectInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateProjectInput => __isa(o, "UpdateProjectInput");
}

export interface UpdateProjectOutput {
  __type?: "UpdateProjectOutput";
  /**
   * <p>Information about the build project that was changed.</p>
   */
  project?: Project;
}

export namespace UpdateProjectOutput {
  export const filterSensitiveLog = (obj: UpdateProjectOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateProjectOutput => __isa(o, "UpdateProjectOutput");
}

export interface UpdateReportGroupInput {
  __type?: "UpdateReportGroupInput";
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
   */
  exportConfig?: ReportExportConfig;

  /**
   * <p>
   *       An updated list of tag key and value pairs associated with this report group.
   *     </p>
   *          <p>These tags are available for use by AWS services that support AWS CodeBuild report group
   *          tags.</p>
   */
  tags?: Tag[];

  /**
   * <p>
   *       The ARN of the report group to update.
   *     </p>
   */
  arn: string | undefined;
}

export namespace UpdateReportGroupInput {
  export const filterSensitiveLog = (obj: UpdateReportGroupInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateReportGroupInput => __isa(o, "UpdateReportGroupInput");
}

export interface UpdateReportGroupOutput {
  __type?: "UpdateReportGroupOutput";
  /**
   * <p>
   *       Information about the updated report group.
   *     </p>
   */
  reportGroup?: ReportGroup;
}

export namespace UpdateReportGroupOutput {
  export const filterSensitiveLog = (obj: UpdateReportGroupOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateReportGroupOutput => __isa(o, "UpdateReportGroupOutput");
}

export interface UpdateWebhookInput {
  __type?: "UpdateWebhookInput";
  /**
   * <p> A boolean value that specifies whether the associated GitHub repository's secret
   *       token should be updated. If you use Bitbucket for your repository,
   *       <code>rotateSecret</code> is ignored. </p>
   */
  rotateSecret?: boolean;

  /**
   * <p>The name of the AWS CodeBuild project.</p>
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
   */
  branchFilter?: string;

  /**
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;

  /**
   * <p> An array of arrays of <code>WebhookFilter</code> objects used to determine if a
   *       webhook event can trigger a build. A filter group must contain at least one
   *       <code>EVENT</code>
   *             <code>WebhookFilter</code>. </p>
   */
  filterGroups?: WebhookFilter[][];
}

export namespace UpdateWebhookInput {
  export const filterSensitiveLog = (obj: UpdateWebhookInput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWebhookInput => __isa(o, "UpdateWebhookInput");
}

export interface UpdateWebhookOutput {
  __type?: "UpdateWebhookOutput";
  /**
   * <p> Information about a repository's webhook that is associated with a project in AWS CodeBuild.
   *     </p>
   */
  webhook?: Webhook;
}

export namespace UpdateWebhookOutput {
  export const filterSensitiveLog = (obj: UpdateWebhookOutput): any => ({
    ...obj,
  });
  export const isa = (o: any): o is UpdateWebhookOutput => __isa(o, "UpdateWebhookOutput");
}

/**
 * <p>Information about the VPC configuration that AWS CodeBuild accesses.</p>
 */
export interface VpcConfig {
  __type?: "VpcConfig";
  /**
   * <p>A list of one or more subnet IDs in your Amazon VPC.</p>
   */
  subnets?: string[];

  /**
   * <p>A list of one or more security groups IDs in your Amazon VPC.</p>
   */
  securityGroupIds?: string[];

  /**
   * <p>The ID of the Amazon VPC.</p>
   */
  vpcId?: string;
}

export namespace VpcConfig {
  export const filterSensitiveLog = (obj: VpcConfig): any => ({
    ...obj,
  });
  export const isa = (o: any): o is VpcConfig => __isa(o, "VpcConfig");
}

/**
 * <p>Information about a webhook that connects repository events to a build project in
 *       AWS CodeBuild.</p>
 */
export interface Webhook {
  __type?: "Webhook";
  /**
   * <p>A timestamp that indicates the last time a repository's secret token was modified.
   *     </p>
   */
  lastModifiedSecret?: Date;

  /**
   * <p>The secret token of the associated repository. </p>
   *          <note>
   *             <p>A Bitbucket webhook does not support <code>secret</code>. </p>
   *          </note>
   */
  secret?: string;

  /**
   * <p>The URL to the webhook.</p>
   */
  url?: string;

  /**
   * <p>An array of arrays of <code>WebhookFilter</code> objects used to determine which
   *       webhooks are triggered. At least one <code>WebhookFilter</code> in the array must
   *       specify <code>EVENT</code> as its <code>type</code>. </p>
   *          <p>For a build to be triggered, at least one filter group in the
   *       <code>filterGroups</code> array must pass. For a filter group to pass, each of its
   *       filters must pass. </p>
   */
  filterGroups?: WebhookFilter[][];

  /**
   * <p>The AWS CodeBuild endpoint where webhook events are sent.</p>
   */
  payloadUrl?: string;

  /**
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
   * <p>Specifies the type of build this webhook will trigger.</p>
   */
  buildType?: WebhookBuildType | string;
}

export namespace Webhook {
  export const filterSensitiveLog = (obj: Webhook): any => ({
    ...obj,
  });
  export const isa = (o: any): o is Webhook => __isa(o, "Webhook");
}

export enum WebhookBuildType {
  BUILD = "BUILD",
  BUILD_BATCH = "BUILD_BATCH",
}

/**
 * <p> A filter used to determine which webhooks trigger a build. </p>
 */
export interface WebhookFilter {
  __type?: "WebhookFilter";
  /**
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
   * <p> Used to indicate that the <code>pattern</code> determines which webhook events do not
   *             trigger a build. If true, then a webhook event that does not match the
   *                 <code>pattern</code> triggers a build. If false, then a webhook event that matches
   *             the <code>pattern</code> triggers a build. </p>
   */
  excludeMatchedPattern?: boolean;
}

export namespace WebhookFilter {
  export const filterSensitiveLog = (obj: WebhookFilter): any => ({
    ...obj,
  });
  export const isa = (o: any): o is WebhookFilter => __isa(o, "WebhookFilter");
}

export enum WebhookFilterType {
  ACTOR_ACCOUNT_ID = "ACTOR_ACCOUNT_ID",
  BASE_REF = "BASE_REF",
  COMMIT_MESSAGE = "COMMIT_MESSAGE",
  EVENT = "EVENT",
  FILE_PATH = "FILE_PATH",
  HEAD_REF = "HEAD_REF",
}
