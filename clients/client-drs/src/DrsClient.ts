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
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
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
  CreateReplicationConfigurationTemplateCommandInput,
  CreateReplicationConfigurationTemplateCommandOutput,
} from "./commands/CreateReplicationConfigurationTemplateCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import {
  DeleteRecoveryInstanceCommandInput,
  DeleteRecoveryInstanceCommandOutput,
} from "./commands/DeleteRecoveryInstanceCommand";
import {
  DeleteReplicationConfigurationTemplateCommandInput,
  DeleteReplicationConfigurationTemplateCommandOutput,
} from "./commands/DeleteReplicationConfigurationTemplateCommand";
import { DeleteSourceServerCommandInput, DeleteSourceServerCommandOutput } from "./commands/DeleteSourceServerCommand";
import {
  DescribeJobLogItemsCommandInput,
  DescribeJobLogItemsCommandOutput,
} from "./commands/DescribeJobLogItemsCommand";
import { DescribeJobsCommandInput, DescribeJobsCommandOutput } from "./commands/DescribeJobsCommand";
import {
  DescribeRecoveryInstancesCommandInput,
  DescribeRecoveryInstancesCommandOutput,
} from "./commands/DescribeRecoveryInstancesCommand";
import {
  DescribeRecoverySnapshotsCommandInput,
  DescribeRecoverySnapshotsCommandOutput,
} from "./commands/DescribeRecoverySnapshotsCommand";
import {
  DescribeReplicationConfigurationTemplatesCommandInput,
  DescribeReplicationConfigurationTemplatesCommandOutput,
} from "./commands/DescribeReplicationConfigurationTemplatesCommand";
import {
  DescribeSourceServersCommandInput,
  DescribeSourceServersCommandOutput,
} from "./commands/DescribeSourceServersCommand";
import {
  DisconnectRecoveryInstanceCommandInput,
  DisconnectRecoveryInstanceCommandOutput,
} from "./commands/DisconnectRecoveryInstanceCommand";
import {
  DisconnectSourceServerCommandInput,
  DisconnectSourceServerCommandOutput,
} from "./commands/DisconnectSourceServerCommand";
import {
  GetFailbackReplicationConfigurationCommandInput,
  GetFailbackReplicationConfigurationCommandOutput,
} from "./commands/GetFailbackReplicationConfigurationCommand";
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
import {
  RetryDataReplicationCommandInput,
  RetryDataReplicationCommandOutput,
} from "./commands/RetryDataReplicationCommand";
import {
  StartFailbackLaunchCommandInput,
  StartFailbackLaunchCommandOutput,
} from "./commands/StartFailbackLaunchCommand";
import { StartRecoveryCommandInput, StartRecoveryCommandOutput } from "./commands/StartRecoveryCommand";
import { StopFailbackCommandInput, StopFailbackCommandOutput } from "./commands/StopFailbackCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  TerminateRecoveryInstancesCommandInput,
  TerminateRecoveryInstancesCommandOutput,
} from "./commands/TerminateRecoveryInstancesCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateFailbackReplicationConfigurationCommandInput,
  UpdateFailbackReplicationConfigurationCommandOutput,
} from "./commands/UpdateFailbackReplicationConfigurationCommand";
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
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateReplicationConfigurationTemplateCommandInput
  | DeleteJobCommandInput
  | DeleteRecoveryInstanceCommandInput
  | DeleteReplicationConfigurationTemplateCommandInput
  | DeleteSourceServerCommandInput
  | DescribeJobLogItemsCommandInput
  | DescribeJobsCommandInput
  | DescribeRecoveryInstancesCommandInput
  | DescribeRecoverySnapshotsCommandInput
  | DescribeReplicationConfigurationTemplatesCommandInput
  | DescribeSourceServersCommandInput
  | DisconnectRecoveryInstanceCommandInput
  | DisconnectSourceServerCommandInput
  | GetFailbackReplicationConfigurationCommandInput
  | GetLaunchConfigurationCommandInput
  | GetReplicationConfigurationCommandInput
  | InitializeServiceCommandInput
  | ListTagsForResourceCommandInput
  | RetryDataReplicationCommandInput
  | StartFailbackLaunchCommandInput
  | StartRecoveryCommandInput
  | StopFailbackCommandInput
  | TagResourceCommandInput
  | TerminateRecoveryInstancesCommandInput
  | UntagResourceCommandInput
  | UpdateFailbackReplicationConfigurationCommandInput
  | UpdateLaunchConfigurationCommandInput
  | UpdateReplicationConfigurationCommandInput
  | UpdateReplicationConfigurationTemplateCommandInput;

export type ServiceOutputTypes =
  | CreateReplicationConfigurationTemplateCommandOutput
  | DeleteJobCommandOutput
  | DeleteRecoveryInstanceCommandOutput
  | DeleteReplicationConfigurationTemplateCommandOutput
  | DeleteSourceServerCommandOutput
  | DescribeJobLogItemsCommandOutput
  | DescribeJobsCommandOutput
  | DescribeRecoveryInstancesCommandOutput
  | DescribeRecoverySnapshotsCommandOutput
  | DescribeReplicationConfigurationTemplatesCommandOutput
  | DescribeSourceServersCommandOutput
  | DisconnectRecoveryInstanceCommandOutput
  | DisconnectSourceServerCommandOutput
  | GetFailbackReplicationConfigurationCommandOutput
  | GetLaunchConfigurationCommandOutput
  | GetReplicationConfigurationCommandOutput
  | InitializeServiceCommandOutput
  | ListTagsForResourceCommandOutput
  | RetryDataReplicationCommandOutput
  | StartFailbackLaunchCommandOutput
  | StartRecoveryCommandOutput
  | StopFailbackCommandOutput
  | TagResourceCommandOutput
  | TerminateRecoveryInstancesCommandOutput
  | UntagResourceCommandOutput
  | UpdateFailbackReplicationConfigurationCommandOutput
  | UpdateLaunchConfigurationCommandOutput
  | UpdateReplicationConfigurationCommandOutput
  | UpdateReplicationConfigurationTemplateCommandOutput;

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
  bodyLengthChecker?: (body: any) => number | undefined;

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
}

type DrsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of DrsClient class constructor that set the region, credentials and other options.
 */
export interface DrsClientConfig extends DrsClientConfigType {}

type DrsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of DrsClient class. This is resolved and normalized from the {@link DrsClientConfig | constructor configuration interface}.
 */
export interface DrsClientResolvedConfig extends DrsClientResolvedConfigType {}

/**
 * <p>AWS Elastic Disaster Recovery Service.</p>
 */
export class DrsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  DrsClientResolvedConfig
> {
  /**
   * The resolved configuration of DrsClient class. This is resolved and normalized from the {@link DrsClientConfig | constructor configuration interface}.
   */
  readonly config: DrsClientResolvedConfig;

  constructor(configuration: DrsClientConfig) {
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
