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
  defaultKafkaHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  BatchAssociateScramSecretCommandInput,
  BatchAssociateScramSecretCommandOutput,
} from "./commands/BatchAssociateScramSecretCommand";
import type {
  BatchDisassociateScramSecretCommandInput,
  BatchDisassociateScramSecretCommandOutput,
} from "./commands/BatchDisassociateScramSecretCommand";
import type { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import type { CreateClusterV2CommandInput, CreateClusterV2CommandOutput } from "./commands/CreateClusterV2Command";
import type {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import type { CreateReplicatorCommandInput, CreateReplicatorCommandOutput } from "./commands/CreateReplicatorCommand";
import type { CreateTopicCommandInput, CreateTopicCommandOutput } from "./commands/CreateTopicCommand";
import type {
  CreateVpcConnectionCommandInput,
  CreateVpcConnectionCommandOutput,
} from "./commands/CreateVpcConnectionCommand";
import type { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import type {
  DeleteClusterPolicyCommandInput,
  DeleteClusterPolicyCommandOutput,
} from "./commands/DeleteClusterPolicyCommand";
import type {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import type { DeleteReplicatorCommandInput, DeleteReplicatorCommandOutput } from "./commands/DeleteReplicatorCommand";
import type { DeleteTopicCommandInput, DeleteTopicCommandOutput } from "./commands/DeleteTopicCommand";
import type {
  DeleteVpcConnectionCommandInput,
  DeleteVpcConnectionCommandOutput,
} from "./commands/DeleteVpcConnectionCommand";
import type { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import type {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
import type {
  DescribeClusterOperationV2CommandInput,
  DescribeClusterOperationV2CommandOutput,
} from "./commands/DescribeClusterOperationV2Command";
import type {
  DescribeClusterV2CommandInput,
  DescribeClusterV2CommandOutput,
} from "./commands/DescribeClusterV2Command";
import type {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "./commands/DescribeConfigurationCommand";
import type {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "./commands/DescribeConfigurationRevisionCommand";
import type {
  DescribeReplicatorCommandInput,
  DescribeReplicatorCommandOutput,
} from "./commands/DescribeReplicatorCommand";
import type { DescribeTopicCommandInput, DescribeTopicCommandOutput } from "./commands/DescribeTopicCommand";
import type {
  DescribeTopicPartitionsCommandInput,
  DescribeTopicPartitionsCommandOutput,
} from "./commands/DescribeTopicPartitionsCommand";
import type {
  DescribeVpcConnectionCommandInput,
  DescribeVpcConnectionCommandOutput,
} from "./commands/DescribeVpcConnectionCommand";
import type {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "./commands/GetBootstrapBrokersCommand";
import type { GetClusterPolicyCommandInput, GetClusterPolicyCommandOutput } from "./commands/GetClusterPolicyCommand";
import type {
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import type {
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "./commands/ListClientVpcConnectionsCommand";
import type {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "./commands/ListClusterOperationsCommand";
import type {
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "./commands/ListClusterOperationsV2Command";
import type { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import type { ListClustersV2CommandInput, ListClustersV2CommandOutput } from "./commands/ListClustersV2Command";
import type {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import type {
  ListConfigurationsCommandInput,
  ListConfigurationsCommandOutput,
} from "./commands/ListConfigurationsCommand";
import type {
  ListKafkaVersionsCommandInput,
  ListKafkaVersionsCommandOutput,
} from "./commands/ListKafkaVersionsCommand";
import type { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import type { ListReplicatorsCommandInput, ListReplicatorsCommandOutput } from "./commands/ListReplicatorsCommand";
import type { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "./commands/ListScramSecretsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import type {
  ListVpcConnectionsCommandInput,
  ListVpcConnectionsCommandOutput,
} from "./commands/ListVpcConnectionsCommand";
import type { PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput } from "./commands/PutClusterPolicyCommand";
import type { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import type {
  RejectClientVpcConnectionCommandInput,
  RejectClientVpcConnectionCommandOutput,
} from "./commands/RejectClientVpcConnectionCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateBrokerCountCommandInput,
  UpdateBrokerCountCommandOutput,
} from "./commands/UpdateBrokerCountCommand";
import type {
  UpdateBrokerStorageCommandInput,
  UpdateBrokerStorageCommandOutput,
} from "./commands/UpdateBrokerStorageCommand";
import type { UpdateBrokerTypeCommandInput, UpdateBrokerTypeCommandOutput } from "./commands/UpdateBrokerTypeCommand";
import type {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "./commands/UpdateClusterConfigurationCommand";
import type {
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "./commands/UpdateClusterKafkaVersionCommand";
import type {
  UpdateConfigurationCommandInput,
  UpdateConfigurationCommandOutput,
} from "./commands/UpdateConfigurationCommand";
import type {
  UpdateConnectivityCommandInput,
  UpdateConnectivityCommandOutput,
} from "./commands/UpdateConnectivityCommand";
import type { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "./commands/UpdateMonitoringCommand";
import type {
  UpdateRebalancingCommandInput,
  UpdateRebalancingCommandOutput,
} from "./commands/UpdateRebalancingCommand";
import type {
  UpdateReplicationInfoCommandInput,
  UpdateReplicationInfoCommandOutput,
} from "./commands/UpdateReplicationInfoCommand";
import type { UpdateSecurityCommandInput, UpdateSecurityCommandOutput } from "./commands/UpdateSecurityCommand";
import type { UpdateStorageCommandInput, UpdateStorageCommandOutput } from "./commands/UpdateStorageCommand";
import type { UpdateTopicCommandInput, UpdateTopicCommandOutput } from "./commands/UpdateTopicCommand";
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
  | BatchAssociateScramSecretCommandInput
  | BatchDisassociateScramSecretCommandInput
  | CreateClusterCommandInput
  | CreateClusterV2CommandInput
  | CreateConfigurationCommandInput
  | CreateReplicatorCommandInput
  | CreateTopicCommandInput
  | CreateVpcConnectionCommandInput
  | DeleteClusterCommandInput
  | DeleteClusterPolicyCommandInput
  | DeleteConfigurationCommandInput
  | DeleteReplicatorCommandInput
  | DeleteTopicCommandInput
  | DeleteVpcConnectionCommandInput
  | DescribeClusterCommandInput
  | DescribeClusterOperationCommandInput
  | DescribeClusterOperationV2CommandInput
  | DescribeClusterV2CommandInput
  | DescribeConfigurationCommandInput
  | DescribeConfigurationRevisionCommandInput
  | DescribeReplicatorCommandInput
  | DescribeTopicCommandInput
  | DescribeTopicPartitionsCommandInput
  | DescribeVpcConnectionCommandInput
  | GetBootstrapBrokersCommandInput
  | GetClusterPolicyCommandInput
  | GetCompatibleKafkaVersionsCommandInput
  | ListClientVpcConnectionsCommandInput
  | ListClusterOperationsCommandInput
  | ListClusterOperationsV2CommandInput
  | ListClustersCommandInput
  | ListClustersV2CommandInput
  | ListConfigurationRevisionsCommandInput
  | ListConfigurationsCommandInput
  | ListKafkaVersionsCommandInput
  | ListNodesCommandInput
  | ListReplicatorsCommandInput
  | ListScramSecretsCommandInput
  | ListTagsForResourceCommandInput
  | ListTopicsCommandInput
  | ListVpcConnectionsCommandInput
  | PutClusterPolicyCommandInput
  | RebootBrokerCommandInput
  | RejectClientVpcConnectionCommandInput
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
  | UpdateRebalancingCommandInput
  | UpdateReplicationInfoCommandInput
  | UpdateSecurityCommandInput
  | UpdateStorageCommandInput
  | UpdateTopicCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchAssociateScramSecretCommandOutput
  | BatchDisassociateScramSecretCommandOutput
  | CreateClusterCommandOutput
  | CreateClusterV2CommandOutput
  | CreateConfigurationCommandOutput
  | CreateReplicatorCommandOutput
  | CreateTopicCommandOutput
  | CreateVpcConnectionCommandOutput
  | DeleteClusterCommandOutput
  | DeleteClusterPolicyCommandOutput
  | DeleteConfigurationCommandOutput
  | DeleteReplicatorCommandOutput
  | DeleteTopicCommandOutput
  | DeleteVpcConnectionCommandOutput
  | DescribeClusterCommandOutput
  | DescribeClusterOperationCommandOutput
  | DescribeClusterOperationV2CommandOutput
  | DescribeClusterV2CommandOutput
  | DescribeConfigurationCommandOutput
  | DescribeConfigurationRevisionCommandOutput
  | DescribeReplicatorCommandOutput
  | DescribeTopicCommandOutput
  | DescribeTopicPartitionsCommandOutput
  | DescribeVpcConnectionCommandOutput
  | GetBootstrapBrokersCommandOutput
  | GetClusterPolicyCommandOutput
  | GetCompatibleKafkaVersionsCommandOutput
  | ListClientVpcConnectionsCommandOutput
  | ListClusterOperationsCommandOutput
  | ListClusterOperationsV2CommandOutput
  | ListClustersCommandOutput
  | ListClustersV2CommandOutput
  | ListConfigurationRevisionsCommandOutput
  | ListConfigurationsCommandOutput
  | ListKafkaVersionsCommandOutput
  | ListNodesCommandOutput
  | ListReplicatorsCommandOutput
  | ListScramSecretsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTopicsCommandOutput
  | ListVpcConnectionsCommandOutput
  | PutClusterPolicyCommandOutput
  | RebootBrokerCommandOutput
  | RejectClientVpcConnectionCommandOutput
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
  | UpdateRebalancingCommandOutput
  | UpdateReplicationInfoCommandOutput
  | UpdateSecurityCommandOutput
  | UpdateStorageCommandOutput
  | UpdateTopicCommandOutput;

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
export type KafkaClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of KafkaClient class constructor that set the region, credentials and other options.
 */
export interface KafkaClientConfig extends KafkaClientConfigType {}

/**
 * @public
 */
export type KafkaClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of KafkaClient class. This is resolved and normalized from the {@link KafkaClientConfig | constructor configuration interface}.
 */
export interface KafkaClientResolvedConfig extends KafkaClientResolvedConfigType {}

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<KafkaClientConfig>) {
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
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultKafkaHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: KafkaClientResolvedConfig) =>
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
