// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getOmitRetryHeadersPlugin,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultDataBrewHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchDeleteRecipeVersionCommandInput,
  BatchDeleteRecipeVersionCommandOutput,
} from "./commands/BatchDeleteRecipeVersionCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "./commands/CreateProfileJobCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "./commands/CreateRecipeCommand";
import type { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "./commands/CreateRecipeJobCommand";
import type { CreateRulesetCommandInput, CreateRulesetCommandOutput } from "./commands/CreateRulesetCommand";
import type { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "./commands/CreateScheduleCommand";
import type { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import type { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type {
  DeleteRecipeVersionCommandInput,
  DeleteRecipeVersionCommandOutput,
} from "./commands/DeleteRecipeVersionCommand";
import type { DeleteRulesetCommandInput, DeleteRulesetCommandOutput } from "./commands/DeleteRulesetCommand";
import type { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import type { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import type { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import type { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import type { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import type { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import type { DescribeRulesetCommandInput, DescribeRulesetCommandOutput } from "./commands/DescribeRulesetCommand";
import type { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import type { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import type {
  ListRecipeVersionsCommandInput,
  ListRecipeVersionsCommandOutput,
} from "./commands/ListRecipeVersionsCommand";
import type { ListRulesetsCommandInput, ListRulesetsCommandOutput } from "./commands/ListRulesetsCommand";
import type { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "./commands/ListSchedulesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PublishRecipeCommandInput, PublishRecipeCommandOutput } from "./commands/PublishRecipeCommand";
import type {
  SendProjectSessionActionCommandInput,
  SendProjectSessionActionCommandOutput,
} from "./commands/SendProjectSessionActionCommand";
import type { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import type {
  StartProjectSessionCommandInput,
  StartProjectSessionCommandOutput,
} from "./commands/StartProjectSessionCommand";
import type { StopJobRunCommandInput, StopJobRunCommandOutput } from "./commands/StopJobRunCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import type { UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput } from "./commands/UpdateProfileJobCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import type { UpdateRecipeCommandInput, UpdateRecipeCommandOutput } from "./commands/UpdateRecipeCommand";
import type { UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput } from "./commands/UpdateRecipeJobCommand";
import type { UpdateRulesetCommandInput, UpdateRulesetCommandOutput } from "./commands/UpdateRulesetCommand";
import type { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "./commands/UpdateScheduleCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
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

/**
 * @public
 */
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

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: __Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type DataBrewClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of DataBrewClient class constructor that set the region, credentials and other options.
 */
export interface DataBrewClientConfig extends DataBrewClientConfigType {}

/**
 * @public
 */
export type DataBrewClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of DataBrewClient class. This is resolved and normalized from the {@link DataBrewClientConfig | constructor configuration interface}.
 */
export interface DataBrewClientResolvedConfig extends DataBrewClientResolvedConfigType {}

/**
 * <p>Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<DataBrewClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getOmitRetryHeadersPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultDataBrewHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: DataBrewClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
