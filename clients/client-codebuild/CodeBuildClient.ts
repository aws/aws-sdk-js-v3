import {
  BatchDeleteBuildsCommandInput,
  BatchDeleteBuildsCommandOutput
} from "./commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildsCommandInput,
  BatchGetBuildsCommandOutput
} from "./commands/BatchGetBuildsCommand";
import {
  BatchGetProjectsCommandInput,
  BatchGetProjectsCommandOutput
} from "./commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput
} from "./commands/BatchGetReportGroupsCommand";
import {
  BatchGetReportsCommandInput,
  BatchGetReportsCommandOutput
} from "./commands/BatchGetReportsCommand";
import {
  CreateProjectCommandInput,
  CreateProjectCommandOutput
} from "./commands/CreateProjectCommand";
import {
  CreateReportGroupCommandInput,
  CreateReportGroupCommandOutput
} from "./commands/CreateReportGroupCommand";
import {
  CreateWebhookCommandInput,
  CreateWebhookCommandOutput
} from "./commands/CreateWebhookCommand";
import {
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput
} from "./commands/DeleteProjectCommand";
import {
  DeleteReportCommandInput,
  DeleteReportCommandOutput
} from "./commands/DeleteReportCommand";
import {
  DeleteReportGroupCommandInput,
  DeleteReportGroupCommandOutput
} from "./commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput
} from "./commands/DeleteSourceCredentialsCommand";
import {
  DeleteWebhookCommandInput,
  DeleteWebhookCommandOutput
} from "./commands/DeleteWebhookCommand";
import {
  DescribeTestCasesCommandInput,
  DescribeTestCasesCommandOutput
} from "./commands/DescribeTestCasesCommand";
import {
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput
} from "./commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput
} from "./commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput
} from "./commands/InvalidateProjectCacheCommand";
import {
  ListBuildsCommandInput,
  ListBuildsCommandOutput
} from "./commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput
} from "./commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput
} from "./commands/ListCuratedEnvironmentImagesCommand";
import {
  ListProjectsCommandInput,
  ListProjectsCommandOutput
} from "./commands/ListProjectsCommand";
import {
  ListReportGroupsCommandInput,
  ListReportGroupsCommandOutput
} from "./commands/ListReportGroupsCommand";
import {
  ListReportsCommandInput,
  ListReportsCommandOutput
} from "./commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput
} from "./commands/ListReportsForReportGroupCommand";
import {
  ListSharedProjectsCommandInput,
  ListSharedProjectsCommandOutput
} from "./commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput
} from "./commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput
} from "./commands/ListSourceCredentialsCommand";
import {
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput
} from "./commands/PutResourcePolicyCommand";
import {
  StartBuildCommandInput,
  StartBuildCommandOutput
} from "./commands/StartBuildCommand";
import {
  StopBuildCommandInput,
  StopBuildCommandOutput
} from "./commands/StopBuildCommand";
import {
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput
} from "./commands/UpdateProjectCommand";
import {
  UpdateReportGroupCommandInput,
  UpdateReportGroupCommandOutput
} from "./commands/UpdateReportGroupCommand";
import {
  UpdateWebhookCommandInput,
  UpdateWebhookCommandOutput
} from "./commands/UpdateWebhookCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | BatchDeleteBuildsCommandInput
  | BatchGetBuildsCommandInput
  | BatchGetProjectsCommandInput
  | BatchGetReportGroupsCommandInput
  | BatchGetReportsCommandInput
  | CreateProjectCommandInput
  | CreateReportGroupCommandInput
  | CreateWebhookCommandInput
  | DeleteProjectCommandInput
  | DeleteReportCommandInput
  | DeleteReportGroupCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSourceCredentialsCommandInput
  | DeleteWebhookCommandInput
  | DescribeTestCasesCommandInput
  | GetResourcePolicyCommandInput
  | ImportSourceCredentialsCommandInput
  | InvalidateProjectCacheCommandInput
  | ListBuildsCommandInput
  | ListBuildsForProjectCommandInput
  | ListCuratedEnvironmentImagesCommandInput
  | ListProjectsCommandInput
  | ListReportGroupsCommandInput
  | ListReportsCommandInput
  | ListReportsForReportGroupCommandInput
  | ListSharedProjectsCommandInput
  | ListSharedReportGroupsCommandInput
  | ListSourceCredentialsCommandInput
  | PutResourcePolicyCommandInput
  | StartBuildCommandInput
  | StopBuildCommandInput
  | UpdateProjectCommandInput
  | UpdateReportGroupCommandInput
  | UpdateWebhookCommandInput;

export type ServiceOutputTypes =
  | BatchDeleteBuildsCommandOutput
  | BatchGetBuildsCommandOutput
  | BatchGetProjectsCommandOutput
  | BatchGetReportGroupsCommandOutput
  | BatchGetReportsCommandOutput
  | CreateProjectCommandOutput
  | CreateReportGroupCommandOutput
  | CreateWebhookCommandOutput
  | DeleteProjectCommandOutput
  | DeleteReportCommandOutput
  | DeleteReportGroupCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSourceCredentialsCommandOutput
  | DeleteWebhookCommandOutput
  | DescribeTestCasesCommandOutput
  | GetResourcePolicyCommandOutput
  | ImportSourceCredentialsCommandOutput
  | InvalidateProjectCacheCommandOutput
  | ListBuildsCommandOutput
  | ListBuildsForProjectCommandOutput
  | ListCuratedEnvironmentImagesCommandOutput
  | ListProjectsCommandOutput
  | ListReportGroupsCommandOutput
  | ListReportsCommandOutput
  | ListReportsForReportGroupCommandOutput
  | ListSharedProjectsCommandOutput
  | ListSharedReportGroupsCommandOutput
  | ListSourceCredentialsCommandOutput
  | PutResourcePolicyCommandOutput
  | StartBuildCommandOutput
  | StopBuildCommandOutput
  | UpdateProjectCommandOutput
  | UpdateReportGroupCommandOutput
  | UpdateWebhookCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type CodeBuildClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type CodeBuildClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <fullname>AWS CodeBuild</fullname>
 *          <p>AWS CodeBuild is a fully managed build service in the cloud. AWS CodeBuild compiles your source code,
 *          runs unit tests, and produces artifacts that are ready to deploy. AWS CodeBuild eliminates the need
 *          to provision, manage, and scale your own build servers. It provides prepackaged build
 *          environments for the most popular programming languages and build tools, such as Apache
 *          Maven, Gradle, and more. You can also fully customize build environments in AWS CodeBuild to use
 *          your own build tools. AWS CodeBuild scales automatically to meet peak build requests. You pay only
 *          for the build time you consume. For more information about AWS CodeBuild, see the <i>
 *                <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">AWS CodeBuild User Guide</a>.</i>
 *          </p>
 *          <p>AWS CodeBuild supports these operations:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BatchDeleteBuilds</code>: Deletes one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetBuilds</code>: Gets information about one or more builds.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetProjects</code>: Gets information about one or more build projects.
 *                A <i>build project</i> defines how AWS CodeBuild runs a build. This includes
 *                information such as where to get the source code to build, the build environment to
 *                use, the build commands to run, and where to store the build output. A
 *                <i>build environment</i> is a representation of operating system,
 *                programming language runtime, and tools that AWS CodeBuild uses to run a build. You can add
 *                tags to build projects to help manage your resources and costs.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReportGroups</code>: Returns an array of report groups.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>BatchGetReports</code>: Returns an array of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProject</code>: Creates a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateReportGroup</code>: Creates a report group. A report group contains a collection of reports.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, enables AWS CodeBuild to start
 *                rebuilding the source code every time a code change is pushed to the
 *                repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteProject</code>: Deletes a build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReport</code>: Deletes a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteReportGroup</code>: Deletes a report group.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteResourcePolicy</code>:  Deletes a resource policy that is identified by its resource ARN.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteSourceCredentials</code>: Deletes a set of GitHub, GitHub Enterprise,
 *                or Bitbucket source credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DeleteWebhook</code>: For an existing AWS CodeBuild build project that has its
 *                source code stored in a GitHub or Bitbucket repository, stops AWS CodeBuild from rebuilding
 *                the source code every time a code change is pushed to the repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DescribeTestCases</code>: Returns a list of details about test cases for a report.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>GetResourcePolicy</code>:  Gets a resource policy that is identified by its resource ARN.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ImportSourceCredentials</code>: Imports the source repository credentials for an AWS CodeBuild project that has its source code stored
 *                in a GitHub, GitHub Enterprise, or Bitbucket repository.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>InvalidateProjectCache</code>: Resets the cache for a project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuilds</code>: Gets a list of build IDs, with each build ID representing
 *                a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListBuildsForProject</code>: Gets a list of build IDs for the specified
 *                build project, with each build ID representing a single build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListCuratedEnvironmentImages</code>: Gets information about Docker images
 *                that are managed by AWS CodeBuild.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListProjects</code>: Gets a list of build project names, with each build
 *                project name representing a single build project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportGroups</code>: Gets a list ARNs for the report groups in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReports</code>: Gets a list ARNs for the reports in the current AWS account.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListReportsForReportGroup</code>: Returns a list of ARNs for the reports that belong to a <code>ReportGroup</code>.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSharedProjects</code>: Gets a list of ARNs associated with projects shared with the current AWS account or user.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSharedReportGroups</code>: Gets a list of ARNs associated with report groups shared with the current AWS account or user</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ListSourceCredentials</code>: Returns a list of <code>SourceCredentialsInfo</code> objects. Each <code>SourceCredentialsInfo</code> object includes
 *                the authentication type, token ARN, and type of source provider for one set of credentials.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PutResourcePolicy</code>:  Stores a resource policy for the ARN of a <code>Project</code> or <code>ReportGroup</code> object.
 *             </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StartBuild</code>: Starts running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>StopBuild</code>: Attempts to stop running a build.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateProject</code>: Changes the settings of an existing build
 *                project.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateReportGroup</code>: Changes a report group.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>UpdateWebhook</code>: Changes the settings of an existing webhook.</p>
 *             </li>
 *          </ul>
 */
export class CodeBuildClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeBuildClientResolvedConfig
> {
  readonly config: CodeBuildClientResolvedConfig;

  constructor(configuration: CodeBuildClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
