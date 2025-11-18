// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultKafkaHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
import { CreateReplicatorCommandInput, CreateReplicatorCommandOutput } from "./commands/CreateReplicatorCommand";
import {
  CreateVpcConnectionCommandInput,
  CreateVpcConnectionCommandOutput,
} from "./commands/CreateVpcConnectionCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import {
  DeleteClusterPolicyCommandInput,
  DeleteClusterPolicyCommandOutput,
} from "./commands/DeleteClusterPolicyCommand";
import {
  DeleteConfigurationCommandInput,
  DeleteConfigurationCommandOutput,
} from "./commands/DeleteConfigurationCommand";
import { DeleteReplicatorCommandInput, DeleteReplicatorCommandOutput } from "./commands/DeleteReplicatorCommand";
import {
  DeleteVpcConnectionCommandInput,
  DeleteVpcConnectionCommandOutput,
} from "./commands/DeleteVpcConnectionCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
import {
  DescribeClusterOperationV2CommandInput,
  DescribeClusterOperationV2CommandOutput,
} from "./commands/DescribeClusterOperationV2Command";
import { DescribeClusterV2CommandInput, DescribeClusterV2CommandOutput } from "./commands/DescribeClusterV2Command";
import {
  DescribeConfigurationCommandInput,
  DescribeConfigurationCommandOutput,
} from "./commands/DescribeConfigurationCommand";
import {
  DescribeConfigurationRevisionCommandInput,
  DescribeConfigurationRevisionCommandOutput,
} from "./commands/DescribeConfigurationRevisionCommand";
import { DescribeReplicatorCommandInput, DescribeReplicatorCommandOutput } from "./commands/DescribeReplicatorCommand";
import { DescribeTopicCommandInput, DescribeTopicCommandOutput } from "./commands/DescribeTopicCommand";
import {
  DescribeTopicPartitionsCommandInput,
  DescribeTopicPartitionsCommandOutput,
} from "./commands/DescribeTopicPartitionsCommand";
import {
  DescribeVpcConnectionCommandInput,
  DescribeVpcConnectionCommandOutput,
} from "./commands/DescribeVpcConnectionCommand";
import {
  GetBootstrapBrokersCommandInput,
  GetBootstrapBrokersCommandOutput,
} from "./commands/GetBootstrapBrokersCommand";
import { GetClusterPolicyCommandInput, GetClusterPolicyCommandOutput } from "./commands/GetClusterPolicyCommand";
import {
  GetCompatibleKafkaVersionsCommandInput,
  GetCompatibleKafkaVersionsCommandOutput,
} from "./commands/GetCompatibleKafkaVersionsCommand";
import {
  ListClientVpcConnectionsCommandInput,
  ListClientVpcConnectionsCommandOutput,
} from "./commands/ListClientVpcConnectionsCommand";
import {
  ListClusterOperationsCommandInput,
  ListClusterOperationsCommandOutput,
} from "./commands/ListClusterOperationsCommand";
import {
  ListClusterOperationsV2CommandInput,
  ListClusterOperationsV2CommandOutput,
} from "./commands/ListClusterOperationsV2Command";
import { ListClustersCommandInput, ListClustersCommandOutput } from "./commands/ListClustersCommand";
import { ListClustersV2CommandInput, ListClustersV2CommandOutput } from "./commands/ListClustersV2Command";
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
import { ListReplicatorsCommandInput, ListReplicatorsCommandOutput } from "./commands/ListReplicatorsCommand";
import { ListScramSecretsCommandInput, ListScramSecretsCommandOutput } from "./commands/ListScramSecretsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTopicsCommandInput, ListTopicsCommandOutput } from "./commands/ListTopicsCommand";
import { ListVpcConnectionsCommandInput, ListVpcConnectionsCommandOutput } from "./commands/ListVpcConnectionsCommand";
import { PutClusterPolicyCommandInput, PutClusterPolicyCommandOutput } from "./commands/PutClusterPolicyCommand";
import { RebootBrokerCommandInput, RebootBrokerCommandOutput } from "./commands/RebootBrokerCommand";
import {
  RejectClientVpcConnectionCommandInput,
  RejectClientVpcConnectionCommandOutput,
} from "./commands/RejectClientVpcConnectionCommand";
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
import { UpdateRebalancingCommandInput, UpdateRebalancingCommandOutput } from "./commands/UpdateRebalancingCommand";
import {
  UpdateReplicationInfoCommandInput,
  UpdateReplicationInfoCommandOutput,
} from "./commands/UpdateReplicationInfoCommand";
import { UpdateSecurityCommandInput, UpdateSecurityCommandOutput } from "./commands/UpdateSecurityCommand";
import { UpdateStorageCommandInput, UpdateStorageCommandOutput } from "./commands/UpdateStorageCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

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
  | CreateVpcConnectionCommandInput
  | DeleteClusterCommandInput
  | DeleteClusterPolicyCommandInput
  | DeleteConfigurationCommandInput
  | DeleteReplicatorCommandInput
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
  | UpdateStorageCommandInput;

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
  | CreateVpcConnectionCommandOutput
  | DeleteClusterCommandOutput
  | DeleteClusterPolicyCommandOutput
  | DeleteConfigurationCommandOutput
  | DeleteReplicatorCommandOutput
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
  | UpdateStorageCommandOutput;

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
  defaultUserAgentProvider?: Provider<__UserAgent>;

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
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

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
