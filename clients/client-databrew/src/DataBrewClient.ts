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
import {
  getOmitRetryHeadersPlugin,
  getRetryPlugin,
  resolveRetryConfig,
  RetryInputConfig,
  RetryResolvedConfig,
} from "@aws-sdk/middleware-retry";
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

import {
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "./commands/BatchDeleteRecipeVersionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "./commands/CreateProfileJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "./commands/CreateRecipeCommand";
import { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "./commands/CreateRecipeJobCommand";
import { CreateRulesetCommandInput, CreateRulesetCommandOutput } from "./commands/CreateRulesetCommand";
import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "./commands/CreateScheduleCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import {
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "./commands/DeleteRecipeVersionCommand";
import { DeleteRulesetCommandInput, DeleteRulesetCommandOutput } from "./commands/DeleteRulesetCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import { DescribeRulesetCommandInput, DescribeRulesetCommandOutput } from "./commands/DescribeRulesetCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "./commands/ListRecipeVersionsCommand";
import { ListRulesetsCommandInput, ListRulesetsCommandOutput } from "./commands/ListRulesetsCommand";
import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "./commands/ListSchedulesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PublishRecipeCommandInput, PublishRecipeCommandOutput } from "./commands/PublishRecipeCommand";
import {
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
} from "./commands/SendProjectSessionActionCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import {
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
} from "./commands/StartProjectSessionCommand";
import { StopJobRunCommandInput, StopJobRunCommandOutput } from "./commands/StopJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import { UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput } from "./commands/UpdateProfileJobCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateRecipeCommandInput, UpdateRecipeCommandOutput } from "./commands/UpdateRecipeCommand";
import { UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput } from "./commands/UpdateRecipeJobCommand";
import { UpdateRulesetCommandInput, UpdateRulesetCommandOutput } from "./commands/UpdateRulesetCommand";
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "./commands/UpdateScheduleCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchDeleteRecipeVersionCommandInput
  | CreateDatasetCommandInput
  | CreateProfileJobCommandInput
  | CreateProjectCommandInput
  | CreateRecipeCommandInput
  | CreateRecipeJobCommandInput
  | CreateRulesetCommandInput
  | CreateScheduleCommandInput
  | DeleteDatasetCommandInput
  | DeleteJobCommandInput
  | DeleteProjectCommandInput
  | DeleteRecipeVersionCommandInput
  | DeleteRulesetCommandInput
  | DeleteScheduleCommandInput
  | DescribeDatasetCommandInput
  | DescribeJobCommandInput
  | DescribeJobRunCommandInput
  | DescribeProjectCommandInput
  | DescribeRecipeCommandInput
  | DescribeRulesetCommandInput
  | DescribeScheduleCommandInput
  | ListDatasetsCommandInput
  | ListJobRunsCommandInput
  | ListJobsCommandInput
  | ListProjectsCommandInput
  | ListRecipeVersionsCommandInput
  | ListRecipesCommandInput
  | ListRulesetsCommandInput
  | ListSchedulesCommandInput
  | ListTagsForResourceCommandInput
  | PublishRecipeCommandInput
  | SendProjectSessionActionCommandInput
  | StartJobRunCommandInput
  | StartProjectSessionCommandInput
  | StopJobRunCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateDatasetCommandInput
  | UpdateProfileJobCommandInput
  | UpdateProjectCommandInput
  | UpdateRecipeCommandInput
  | UpdateRecipeJobCommandInput
  | UpdateRulesetCommandInput
  | UpdateScheduleCommandInput;

export type ServiceOutputTypes =
  | BatchDeleteRecipeVersionCommandOutput
  | CreateDatasetCommandOutput
  | CreateProfileJobCommandOutput
  | CreateProjectCommandOutput
  | CreateRecipeCommandOutput
  | CreateRecipeJobCommandOutput
  | CreateRulesetCommandOutput
  | CreateScheduleCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteJobCommandOutput
  | DeleteProjectCommandOutput
  | DeleteRecipeVersionCommandOutput
  | DeleteRulesetCommandOutput
  | DeleteScheduleCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeJobCommandOutput
  | DescribeJobRunCommandOutput
  | DescribeProjectCommandOutput
  | DescribeRecipeCommandOutput
  | DescribeRulesetCommandOutput
  | DescribeScheduleCommandOutput
  | ListDatasetsCommandOutput
  | ListJobRunsCommandOutput
  | ListJobsCommandOutput
  | ListProjectsCommandOutput
  | ListRecipeVersionsCommandOutput
  | ListRecipesCommandOutput
  | ListRulesetsCommandOutput
  | ListSchedulesCommandOutput
  | ListTagsForResourceCommandOutput
  | PublishRecipeCommandOutput
  | SendProjectSessionActionCommandOutput
  | StartJobRunCommandOutput
  | StartProjectSessionCommandOutput
  | StopJobRunCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateProfileJobCommandOutput
  | UpdateProjectCommandOutput
  | UpdateRecipeCommandOutput
  | UpdateRecipeJobCommandOutput
  | UpdateRulesetCommandOutput
  | UpdateScheduleCommandOutput;

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

type DataBrewClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of DataBrewClient class constructor that set the region, credentials and other options.
 */
export interface DataBrewClientConfig extends DataBrewClientConfigType {}

type DataBrewClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of DataBrewClient class. This is resolved and normalized from the {@link DataBrewClientConfig | constructor configuration interface}.
 */
export interface DataBrewClientResolvedConfig extends DataBrewClientResolvedConfigType {}

/**
 * <p>Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export class DataBrewClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DataBrewClientResolvedConfig
> {
  /**
   * The resolved configuration of DataBrewClient class. This is resolved and normalized from the {@link DataBrewClientConfig | constructor configuration interface}.
   */
  readonly config: DataBrewClientResolvedConfig;

  constructor(configuration: DataBrewClientConfig) {
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
    this.middlewareStack.use(getOmitRetryHeadersPlugin(this.config));
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
