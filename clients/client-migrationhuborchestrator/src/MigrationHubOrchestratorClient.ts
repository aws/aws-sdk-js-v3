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

import { CreateWorkflowCommandInput, CreateWorkflowCommandOutput } from "./commands/CreateWorkflowCommand";
import { CreateWorkflowStepCommandInput, CreateWorkflowStepCommandOutput } from "./commands/CreateWorkflowStepCommand";
import {
  CreateWorkflowStepGroupCommandInput,
  CreateWorkflowStepGroupCommandOutput,
} from "./commands/CreateWorkflowStepGroupCommand";
import { DeleteWorkflowCommandInput, DeleteWorkflowCommandOutput } from "./commands/DeleteWorkflowCommand";
import { DeleteWorkflowStepCommandInput, DeleteWorkflowStepCommandOutput } from "./commands/DeleteWorkflowStepCommand";
import {
  DeleteWorkflowStepGroupCommandInput,
  DeleteWorkflowStepGroupCommandOutput,
} from "./commands/DeleteWorkflowStepGroupCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "./commands/GetTemplateCommand";
import { GetTemplateStepCommandInput, GetTemplateStepCommandOutput } from "./commands/GetTemplateStepCommand";
import {
  GetTemplateStepGroupCommandInput,
  GetTemplateStepGroupCommandOutput,
} from "./commands/GetTemplateStepGroupCommand";
import { GetWorkflowCommandInput, GetWorkflowCommandOutput } from "./commands/GetWorkflowCommand";
import { GetWorkflowStepCommandInput, GetWorkflowStepCommandOutput } from "./commands/GetWorkflowStepCommand";
import {
  GetWorkflowStepGroupCommandInput,
  GetWorkflowStepGroupCommandOutput,
} from "./commands/GetWorkflowStepGroupCommand";
import { ListPluginsCommandInput, ListPluginsCommandOutput } from "./commands/ListPluginsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTemplatesCommandInput, ListTemplatesCommandOutput } from "./commands/ListTemplatesCommand";
import {
  ListTemplateStepGroupsCommandInput,
  ListTemplateStepGroupsCommandOutput,
} from "./commands/ListTemplateStepGroupsCommand";
import { ListTemplateStepsCommandInput, ListTemplateStepsCommandOutput } from "./commands/ListTemplateStepsCommand";
import { ListWorkflowsCommandInput, ListWorkflowsCommandOutput } from "./commands/ListWorkflowsCommand";
import {
  ListWorkflowStepGroupsCommandInput,
  ListWorkflowStepGroupsCommandOutput,
} from "./commands/ListWorkflowStepGroupsCommand";
import { ListWorkflowStepsCommandInput, ListWorkflowStepsCommandOutput } from "./commands/ListWorkflowStepsCommand";
import { RetryWorkflowStepCommandInput, RetryWorkflowStepCommandOutput } from "./commands/RetryWorkflowStepCommand";
import { StartWorkflowCommandInput, StartWorkflowCommandOutput } from "./commands/StartWorkflowCommand";
import { StopWorkflowCommandInput, StopWorkflowCommandOutput } from "./commands/StopWorkflowCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateWorkflowCommandInput, UpdateWorkflowCommandOutput } from "./commands/UpdateWorkflowCommand";
import { UpdateWorkflowStepCommandInput, UpdateWorkflowStepCommandOutput } from "./commands/UpdateWorkflowStepCommand";
import {
  UpdateWorkflowStepGroupCommandInput,
  UpdateWorkflowStepGroupCommandOutput,
} from "./commands/UpdateWorkflowStepGroupCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateWorkflowCommandInput
  | CreateWorkflowStepCommandInput
  | CreateWorkflowStepGroupCommandInput
  | DeleteWorkflowCommandInput
  | DeleteWorkflowStepCommandInput
  | DeleteWorkflowStepGroupCommandInput
  | GetTemplateCommandInput
  | GetTemplateStepCommandInput
  | GetTemplateStepGroupCommandInput
  | GetWorkflowCommandInput
  | GetWorkflowStepCommandInput
  | GetWorkflowStepGroupCommandInput
  | ListPluginsCommandInput
  | ListTagsForResourceCommandInput
  | ListTemplateStepGroupsCommandInput
  | ListTemplateStepsCommandInput
  | ListTemplatesCommandInput
  | ListWorkflowStepGroupsCommandInput
  | ListWorkflowStepsCommandInput
  | ListWorkflowsCommandInput
  | RetryWorkflowStepCommandInput
  | StartWorkflowCommandInput
  | StopWorkflowCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateWorkflowCommandInput
  | UpdateWorkflowStepCommandInput
  | UpdateWorkflowStepGroupCommandInput;

export type ServiceOutputTypes =
  | CreateWorkflowCommandOutput
  | CreateWorkflowStepCommandOutput
  | CreateWorkflowStepGroupCommandOutput
  | DeleteWorkflowCommandOutput
  | DeleteWorkflowStepCommandOutput
  | DeleteWorkflowStepGroupCommandOutput
  | GetTemplateCommandOutput
  | GetTemplateStepCommandOutput
  | GetTemplateStepGroupCommandOutput
  | GetWorkflowCommandOutput
  | GetWorkflowStepCommandOutput
  | GetWorkflowStepGroupCommandOutput
  | ListPluginsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTemplateStepGroupsCommandOutput
  | ListTemplateStepsCommandOutput
  | ListTemplatesCommandOutput
  | ListWorkflowStepGroupsCommandOutput
  | ListWorkflowStepsCommandOutput
  | ListWorkflowsCommandOutput
  | RetryWorkflowStepCommandOutput
  | StartWorkflowCommandOutput
  | StopWorkflowCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateWorkflowCommandOutput
  | UpdateWorkflowStepCommandOutput
  | UpdateWorkflowStepGroupCommandOutput;

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

type MigrationHubOrchestratorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of MigrationHubOrchestratorClient class constructor that set the region, credentials and other options.
 */
export interface MigrationHubOrchestratorClientConfig extends MigrationHubOrchestratorClientConfigType {}

type MigrationHubOrchestratorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of MigrationHubOrchestratorClient class. This is resolved and normalized from the {@link MigrationHubOrchestratorClientConfig | constructor configuration interface}.
 */
export interface MigrationHubOrchestratorClientResolvedConfig
  extends MigrationHubOrchestratorClientResolvedConfigType {}

/**
 * <p>This API reference provides descriptions, syntax, and other details about each of the
 *             actions and data types for AWS Migration Hub Orchestrator. he topic for each action shows the API
 *             request parameters and the response. Alternatively, you can use one of the AWS SDKs to
 *             access an API that is tailored to the programming language or platform that you're
 *             using.</p>
 */
export class MigrationHubOrchestratorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MigrationHubOrchestratorClientResolvedConfig
> {
  /**
   * The resolved configuration of MigrationHubOrchestratorClient class. This is resolved and normalized from the {@link MigrationHubOrchestratorClientConfig | constructor configuration interface}.
   */
  readonly config: MigrationHubOrchestratorClientResolvedConfig;

  constructor(configuration: MigrationHubOrchestratorClientConfig) {
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
