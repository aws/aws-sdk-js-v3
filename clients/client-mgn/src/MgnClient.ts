// smithy-typescript generated code
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
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
  DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  RegionInfoProvider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  ChangeServerLifeCycleStateCommandInput,
  ChangeServerLifeCycleStateCommandOutput,
} from "./commands/ChangeServerLifeCycleStateCommand";
import {
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "./commands/DeleteSourceServerCommand";
import {
  DeleteVcenterClientCommandInput,
  DeleteVcenterClientCommandOutput,
} from "./commands/DeleteVcenterClientCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DescribeVcenterClientsCommandInput,
  DescribeVcenterClientsCommandOutput,
} from "./commands/DescribeVcenterClientsCommand";
import {
  DisconnectFromServiceCommandInput,
  DisconnectFromServiceCommandOutput,
} from "./commands/DisconnectFromServiceCommand";
import { FinalizeCutoverCommandInput, FinalizeCutoverCommandOutput } from "./commands/FinalizeCutoverCommand";
import {
  GetLaunchConfigurationCommandInput,
  GetLaunchConfigurationCommandOutput,
} from "./commands/GetLaunchConfigurationCommand";
import {
  GetReplicationConfigurationCommandInput,
  GetReplicationConfigurationCommandOutput,
} from "./commands/GetReplicationConfigurationCommand";
import { InitializeServiceCommandInput, InitializeServiceCommandOutput } from "./commands/InitializeServiceCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { MarkAsArchivedCommandInput, MarkAsArchivedCommandOutput } from "./commands/MarkAsArchivedCommand";
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import { StartCutoverCommandInput, StartCutoverCommandOutput } from "./commands/StartCutoverCommand";
import { StartReplicationCommandInput, StartReplicationCommandOutput } from "./commands/StartReplicationCommand";
import { StartTestCommandInput, StartTestCommandOutput } from "./commands/StartTestCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateTargetInstancesCommandInput,
  TerminateTargetInstancesCommandOutput,
} from "./commands/TerminateTargetInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateLaunchConfigurationCommandInput,
  UpdateLaunchConfigurationCommandOutput,
} from "./commands/UpdateLaunchConfigurationCommand";
import {
  UpdateReplicationConfigurationCommandInput,
  UpdateReplicationConfigurationCommandOutput,
} from "./commands/UpdateReplicationConfigurationCommand";
import {
  UpdateReplicationConfigurationTemplateCommandInput,
  UpdateReplicationConfigurationTemplateCommandOutput,
} from "./commands/UpdateReplicationConfigurationTemplateCommand";
import {
  UpdateSourceServerReplicationTypeCommandInput,
  UpdateSourceServerReplicationTypeCommandOutput,
} from "./commands/UpdateSourceServerReplicationTypeCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | ChangeServerLifeCycleStateCommandInput
  | CreateReplicationConfigurationTemplateCommandInput
  | DeleteJobCommandInput
  | DeleteReplicationConfigurationTemplateCommandInput
  | DeleteSourceServerCommandInput
  | DeleteVcenterClientCommandInput
  | DescribeJobLogItemsCommandInput
  | DescribeJobsCommandInput
  | DescribeReplicationConfigurationTemplatesCommandInput
  | DescribeSourceServersCommandInput
  | DescribeVcenterClientsCommandInput
  | DisconnectFromServiceCommandInput
  | FinalizeCutoverCommandInput
  | GetLaunchConfigurationCommandInput
  | GetReplicationConfigurationCommandInput
  | InitializeServiceCommandInput
  | ListTagsForResourceCommandInput
  | MarkAsArchivedCommandInput
  | RetryDataReplicationCommandInput
  | StartCutoverCommandInput
  | StartReplicationCommandInput
  | StartTestCommandInput
  | TagResourceCommandInput
  | TerminateTargetInstancesCommandInput
  | UntagResourceCommandInput
  | UpdateLaunchConfigurationCommandInput
  | UpdateReplicationConfigurationCommandInput
  | UpdateReplicationConfigurationTemplateCommandInput
  | UpdateSourceServerReplicationTypeCommandInput;

export type ServiceOutputTypes =
  | ChangeServerLifeCycleStateCommandOutput
  | CreateReplicationConfigurationTemplateCommandOutput
  | DeleteJobCommandOutput
  | DeleteReplicationConfigurationTemplateCommandOutput
  | DeleteSourceServerCommandOutput
  | DeleteVcenterClientCommandOutput
  | DescribeJobLogItemsCommandOutput
  | DescribeJobsCommandOutput
  | DescribeReplicationConfigurationTemplatesCommandOutput
  | DescribeSourceServersCommandOutput
  | DescribeVcenterClientsCommandOutput
  | DisconnectFromServiceCommandOutput
  | FinalizeCutoverCommandOutput
  | GetLaunchConfigurationCommandOutput
  | GetReplicationConfigurationCommandOutput
  | InitializeServiceCommandOutput
  | ListTagsForResourceCommandOutput
  | MarkAsArchivedCommandOutput
  | RetryDataReplicationCommandOutput
  | StartCutoverCommandOutput
  | StartReplicationCommandOutput
  | StartTestCommandOutput
  | TagResourceCommandOutput
  | TerminateTargetInstancesCommandOutput
  | UntagResourceCommandOutput
  | UpdateLaunchConfigurationCommandOutput
  | UpdateReplicationConfigurationCommandOutput
  | UpdateReplicationConfigurationTemplateCommandOutput
  | UpdateSourceServerReplicationTypeCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: DefaultsMode | Provider<DefaultsMode>;
}

type MgnClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of MgnClient class constructor that set the region, credentials and other options.
 */
export interface MgnClientConfig extends MgnClientConfigType {}

type MgnClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of MgnClient class. This is resolved and normalized from the {@link MgnClientConfig | constructor configuration interface}.
 */
export interface MgnClientResolvedConfig extends MgnClientResolvedConfigType {}

/**
 * <p>The Application Migration Service service.</p>
 */
export class MgnClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MgnClientResolvedConfig
> {
  /**
   * The resolved configuration of MgnClient class. This is resolved and normalized from the {@link MgnClientConfig | constructor configuration interface}.
   */
  readonly config: MgnClientResolvedConfig;

  constructor(configuration: MgnClientConfig) {
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveRegionConfig(_config_0);
    const _config_2 = resolveEndpointsConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveAwsAuthConfig(_config_4);
    const _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
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
