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

import {
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "./commands/BatchAssociateScramSecretCommand";
import {
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "./commands/BatchDisassociateScramSecretCommand";
import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import { CreateClusterV2CommandInput, CreateClusterV2CommandOutput } from "./commands/CreateClusterV2Command";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
import { DescribeClusterV2CommandInput, DescribeClusterV2CommandOutput } from "./commands/DescribeClusterV2Command";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "./commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "./commands/DescribeConfigurationRevisionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "./commands/GetBootstrapBrokersCommand";
import {
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "./commands/ListClusterOperationsCommand";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListClustersV2CommandInput, ListClustersV2CommandOutput } from "./commands/ListClustersV2Command";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "./commands/ListScramSecretsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateBrokerCountCommandInput, UpdateBrokerCountCommandOutput } from "./commands/UpdateBrokerCountCommand";
import {
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
} from "./commands/UpdateBrokerStorageCommand";
import { UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput } from "./commands/UpdateBrokerTypeCommand";
import {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "./commands/UpdateClusterConfigurationCommand";
import {
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "./commands/UpdateClusterKafkaVersionCommand";
import {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import { UpdateConnectivityCommandInput, UpdateConnectivityCommandOutput } from "./commands/UpdateConnectivityCommand";
import { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "./commands/UpdateMonitoringCommand";
import { UpdateSecurityCommandInput, UpdateSecurityCommandOutput } from "./commands/UpdateSecurityCommand";
import { UpdateStorageCommandInput, UpdateStorageCommandOutput } from "./commands/UpdateStorageCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchAssociateScramSecretCommandInput
  | BatchDisassociateScramSecretCommandInput
  | CreateClusterCommandInput
  | CreateClusterV2CommandInput
  | CreateConfigurationCommandInput
  | DeleteClusterCommandInput
  | DeleteConfigurationCommandInput
  | DescribeClusterCommandInput
  | DescribeClusterOperationCommandInput
  | DescribeClusterV2CommandInput
  | DescribeConfigurationCommandInput
  | DescribeConfigurationRevisionCommandInput
  | GetBootstrapBrokersCommandInput
  | GetCompatibleKafkaVersionsCommandInput
  | ListClusterOperationsCommandInput
  | ListClustersCommandInput
  | ListClustersV2CommandInput
  | ListConfigurationRevisionsCommandInput
  | ListConfigurationsCommandInput
  | ListKafkaVersionsCommandInput
  | ListNodesCommandInput
  | ListScramSecretsCommandInput
  | ListTagsForResourceCommandInput
  | RebootBrokerCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBrokerCountCommandInput
  | UpdateBrokerStorageCommandInput
  | UpdateBrokerTypeCommandInput
  | UpdateClusterConfigurationCommandInput
  | UpdateClusterKafkaVersionCommandInput
  | UpdateConfigurationCommandInput
  | UpdateConnectivityCommandInput
  | UpdateMonitoringCommandInput
  | UpdateSecurityCommandInput
  | UpdateStorageCommandInput;

export type ServiceOutputTypes =
  | BatchAssociateScramSecretCommandOutput
  | BatchDisassociateScramSecretCommandOutput
  | CreateClusterCommandOutput
  | CreateClusterV2CommandOutput
  | CreateConfigurationCommandOutput
  | DeleteClusterCommandOutput
  | DeleteConfigurationCommandOutput
  | DescribeClusterCommandOutput
  | DescribeClusterOperationCommandOutput
  | DescribeClusterV2CommandOutput
  | DescribeConfigurationCommandOutput
  | DescribeConfigurationRevisionCommandOutput
  | GetBootstrapBrokersCommandOutput
  | GetCompatibleKafkaVersionsCommandOutput
  | ListClusterOperationsCommandOutput
  | ListClustersCommandOutput
  | ListClustersV2CommandOutput
  | ListConfigurationRevisionsCommandOutput
  | ListConfigurationsCommandOutput
  | ListKafkaVersionsCommandOutput
  | ListNodesCommandOutput
  | ListScramSecretsCommandOutput
  | ListTagsForResourceCommandOutput
  | RebootBrokerCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBrokerCountCommandOutput
  | UpdateBrokerStorageCommandOutput
  | UpdateBrokerTypeCommandOutput
  | UpdateClusterConfigurationCommandOutput
  | UpdateClusterKafkaVersionCommandOutput
  | UpdateConfigurationCommandOutput
  | UpdateConnectivityCommandOutput
  | UpdateMonitoringCommandOutput
  | UpdateSecurityCommandOutput
  | UpdateStorageCommandOutput;

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

type KafkaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of KafkaClient class constructor that set the region, credentials and other options.
 */
export interface KafkaClientConfig extends KafkaClientConfigType {}

type KafkaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of KafkaClient class. This is resolved and normalized from the {@link KafkaClientConfig | constructor configuration interface}.
 */
export interface KafkaClientResolvedConfig extends KafkaClientResolvedConfigType {}

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export class KafkaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KafkaClientResolvedConfig
> {
  /**
   * The resolved configuration of KafkaClient class. This is resolved and normalized from the {@link KafkaClientConfig | constructor configuration interface}.
   */
  readonly config: KafkaClientResolvedConfig;

  constructor(configuration: KafkaClientConfig) {
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
