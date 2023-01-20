// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import { BatchDeleteBuildsCommandInput, BatchDeleteBuildsCommandOutput } from "./commands/BatchDeleteBuildsCommand";
import {
  BatchGetBuildBatchesCommandInput,
  BatchGetBuildBatchesCommandOutput,
} from "./commands/BatchGetBuildBatchesCommand";
import { BatchGetBuildsCommandInput, BatchGetBuildsCommandOutput } from "./commands/BatchGetBuildsCommand";
import { BatchGetProjectsCommandInput, BatchGetProjectsCommandOutput } from "./commands/BatchGetProjectsCommand";
import {
  BatchGetReportGroupsCommandInput,
  BatchGetReportGroupsCommandOutput,
} from "./commands/BatchGetReportGroupsCommand";
import { BatchGetReportsCommandInput, BatchGetReportsCommandOutput } from "./commands/BatchGetReportsCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateReportGroupCommandInput, CreateReportGroupCommandOutput } from "./commands/CreateReportGroupCommand";
import { CreateWebhookCommandInput, CreateWebhookCommandOutput } from "./commands/CreateWebhookCommand";
import { DeleteBuildBatchCommandInput, DeleteBuildBatchCommandOutput } from "./commands/DeleteBuildBatchCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteReportCommandInput, DeleteReportCommandOutput } from "./commands/DeleteReportCommand";
import { DeleteReportGroupCommandInput, DeleteReportGroupCommandOutput } from "./commands/DeleteReportGroupCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteSourceCredentialsCommandInput,
  DeleteSourceCredentialsCommandOutput,
} from "./commands/DeleteSourceCredentialsCommand";
import { DeleteWebhookCommandInput, DeleteWebhookCommandOutput } from "./commands/DeleteWebhookCommand";
import {
  DescribeCodeCoveragesCommandInput,
  DescribeCodeCoveragesCommandOutput,
} from "./commands/DescribeCodeCoveragesCommand";
import { DescribeTestCasesCommandInput, DescribeTestCasesCommandOutput } from "./commands/DescribeTestCasesCommand";
import {
  GetReportGroupTrendCommandInput,
  GetReportGroupTrendCommandOutput,
} from "./commands/GetReportGroupTrendCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import {
  ImportSourceCredentialsCommandInput,
  ImportSourceCredentialsCommandOutput,
} from "./commands/ImportSourceCredentialsCommand";
import {
  InvalidateProjectCacheCommandInput,
  InvalidateProjectCacheCommandOutput,
} from "./commands/InvalidateProjectCacheCommand";
import { ListBuildBatchesCommandInput, ListBuildBatchesCommandOutput } from "./commands/ListBuildBatchesCommand";
import {
  ListBuildBatchesForProjectCommandInput,
  ListBuildBatchesForProjectCommandOutput,
} from "./commands/ListBuildBatchesForProjectCommand";
import { ListBuildsCommandInput, ListBuildsCommandOutput } from "./commands/ListBuildsCommand";
import {
  ListBuildsForProjectCommandInput,
  ListBuildsForProjectCommandOutput,
} from "./commands/ListBuildsForProjectCommand";
import {
  ListCuratedEnvironmentImagesCommandInput,
  ListCuratedEnvironmentImagesCommandOutput,
} from "./commands/ListCuratedEnvironmentImagesCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListReportGroupsCommandInput, ListReportGroupsCommandOutput } from "./commands/ListReportGroupsCommand";
import { ListReportsCommandInput, ListReportsCommandOutput } from "./commands/ListReportsCommand";
import {
  ListReportsForReportGroupCommandInput,
  ListReportsForReportGroupCommandOutput,
} from "./commands/ListReportsForReportGroupCommand";
import { ListSharedProjectsCommandInput, ListSharedProjectsCommandOutput } from "./commands/ListSharedProjectsCommand";
import {
  ListSharedReportGroupsCommandInput,
  ListSharedReportGroupsCommandOutput,
} from "./commands/ListSharedReportGroupsCommand";
import {
  ListSourceCredentialsCommandInput,
  ListSourceCredentialsCommandOutput,
} from "./commands/ListSourceCredentialsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { RetryBuildBatchCommandInput, RetryBuildBatchCommandOutput } from "./commands/RetryBuildBatchCommand";
import { RetryBuildCommandInput, RetryBuildCommandOutput } from "./commands/RetryBuildCommand";
import { StartBuildBatchCommandInput, StartBuildBatchCommandOutput } from "./commands/StartBuildBatchCommand";
import { StartBuildCommandInput, StartBuildCommandOutput } from "./commands/StartBuildCommand";
import { StopBuildBatchCommandInput, StopBuildBatchCommandOutput } from "./commands/StopBuildBatchCommand";
import { StopBuildCommandInput, StopBuildCommandOutput } from "./commands/StopBuildCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  UpdateProjectVisibilityCommandInput,
  UpdateProjectVisibilityCommandOutput,
} from "./commands/UpdateProjectVisibilityCommand";
import { UpdateReportGroupCommandInput, UpdateReportGroupCommandOutput } from "./commands/UpdateReportGroupCommand";
import { UpdateWebhookCommandInput, UpdateWebhookCommandOutput } from "./commands/UpdateWebhookCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchDeleteBuildsCommandInput
  | BatchGetBuildBatchesCommandInput
  | BatchGetBuildsCommandInput
  | BatchGetProjectsCommandInput
  | BatchGetReportGroupsCommandInput
  | BatchGetReportsCommandInput
  | CreateProjectCommandInput
  | CreateReportGroupCommandInput
  | CreateWebhookCommandInput
  | DeleteBuildBatchCommandInput
  | DeleteProjectCommandInput
  | DeleteReportCommandInput
  | DeleteReportGroupCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteSourceCredentialsCommandInput
  | DeleteWebhookCommandInput
  | DescribeCodeCoveragesCommandInput
  | DescribeTestCasesCommandInput
  | GetReportGroupTrendCommandInput
  | GetResourcePolicyCommandInput
  | ImportSourceCredentialsCommandInput
  | InvalidateProjectCacheCommandInput
  | ListBuildBatchesCommandInput
  | ListBuildBatchesForProjectCommandInput
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
  | RetryBuildBatchCommandInput
  | RetryBuildCommandInput
  | StartBuildBatchCommandInput
  | StartBuildCommandInput
  | StopBuildBatchCommandInput
  | StopBuildCommandInput
  | UpdateProjectCommandInput
  | UpdateProjectVisibilityCommandInput
  | UpdateReportGroupCommandInput
  | UpdateWebhookCommandInput;

export type ServiceOutputTypes =
  | BatchDeleteBuildsCommandOutput
  | BatchGetBuildBatchesCommandOutput
  | BatchGetBuildsCommandOutput
  | BatchGetProjectsCommandOutput
  | BatchGetReportGroupsCommandOutput
  | BatchGetReportsCommandOutput
  | CreateProjectCommandOutput
  | CreateReportGroupCommandOutput
  | CreateWebhookCommandOutput
  | DeleteBuildBatchCommandOutput
  | DeleteProjectCommandOutput
  | DeleteReportCommandOutput
  | DeleteReportGroupCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteSourceCredentialsCommandOutput
  | DeleteWebhookCommandOutput
  | DescribeCodeCoveragesCommandOutput
  | DescribeTestCasesCommandOutput
  | GetReportGroupTrendCommandOutput
  | GetResourcePolicyCommandOutput
  | ImportSourceCredentialsCommandOutput
  | InvalidateProjectCacheCommandOutput
  | ListBuildBatchesCommandOutput
  | ListBuildBatchesForProjectCommandOutput
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
  | RetryBuildBatchCommandOutput
  | RetryBuildCommandOutput
  | StartBuildBatchCommandOutput
  | StartBuildCommandOutput
  | StopBuildBatchCommandOutput
  | StopBuildCommandOutput
  | UpdateProjectCommandOutput
  | UpdateProjectVisibilityCommandOutput
  | UpdateReportGroupCommandOutput
  | UpdateWebhookCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type CodeBuildClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of CodeBuildClient class constructor that set the region, credentials and other options.
 */
export interface CodeBuildClientConfig extends CodeBuildClientConfigType {}

type CodeBuildClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of CodeBuildClient class. This is resolved and normalized from the {@link CodeBuildClientConfig | constructor configuration interface}.
 */
export interface CodeBuildClientResolvedConfig extends CodeBuildClientResolvedConfigType {}

/**
 * <fullname>CodeBuild</fullname>
 *         <p>CodeBuild is a fully managed build service in the cloud. CodeBuild compiles your source code,
 *             runs unit tests, and produces artifacts that are ready to deploy. CodeBuild eliminates the
 *             need to provision, manage, and scale your own build servers. It provides prepackaged
 *             build environments for the most popular programming languages and build tools, such as
 *             Apache Maven, Gradle, and more. You can also fully customize build environments in CodeBuild
 *             to use your own build tools. CodeBuild scales automatically to meet peak build requests. You
 *             pay only for the build time you consume. For more information about CodeBuild, see the <i>
 *                 <a href="https://docs.aws.amazon.com/codebuild/latest/userguide/welcome.html">CodeBuild User
 *                     Guide</a>.</i>
 *          </p>
 */
export class CodeBuildClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  CodeBuildClientResolvedConfig
> {
  /**
   * The resolved configuration of CodeBuildClient class. This is resolved and normalized from the {@link CodeBuildClientConfig | constructor configuration interface}.
   */
  readonly config: CodeBuildClientResolvedConfig;

  constructor(configuration: CodeBuildClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
