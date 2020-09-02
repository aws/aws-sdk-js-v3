import { CreateClusterCommandInput, CreateClusterCommandOutput } from "./commands/CreateClusterCommand";
import {
  CreateConfigurationCommandInput,
  CreateConfigurationCommandOutput,
} from "./commands/CreateConfigurationCommand";
import { DeleteClusterCommandInput, DeleteClusterCommandOutput } from "./commands/DeleteClusterCommand";
import { DescribeClusterCommandInput, DescribeClusterCommandOutput } from "./commands/DescribeClusterCommand";
import {
  DescribeClusterOperationCommandInput,
  DescribeClusterOperationCommandOutput,
} from "./commands/DescribeClusterOperationCommand";
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
import {
  ListConfigurationRevisionsCommandInput,
  ListConfigurationRevisionsCommandOutput,
} from "./commands/ListConfigurationRevisionsCommand";
import { ListConfigurationsCommandInput, ListConfigurationsCommandOutput } from "./commands/ListConfigurationsCommand";
import { ListKafkaVersionsCommandInput, ListKafkaVersionsCommandOutput } from "./commands/ListKafkaVersionsCommand";
import { ListNodesCommandInput, ListNodesCommandOutput } from "./commands/ListNodesCommand";
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
import {
  UpdateClusterConfigurationCommandInput,
  UpdateClusterConfigurationCommandOutput,
} from "./commands/UpdateClusterConfigurationCommand";
import {
  UpdateClusterKafkaVersionCommandInput,
  UpdateClusterKafkaVersionCommandOutput,
} from "./commands/UpdateClusterKafkaVersionCommand";
import { UpdateMonitoringCommandInput, UpdateMonitoringCommandOutput } from "./commands/UpdateMonitoringCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateClusterCommandInput
  | CreateConfigurationCommandInput
  | DeleteClusterCommandInput
  | DescribeClusterCommandInput
  | DescribeClusterOperationCommandInput
  | DescribeConfigurationCommandInput
  | DescribeConfigurationRevisionCommandInput
  | GetBootstrapBrokersCommandInput
  | GetCompatibleKafkaVersionsCommandInput
  | ListClusterOperationsCommandInput
  | ListClustersCommandInput
  | ListConfigurationRevisionsCommandInput
  | ListConfigurationsCommandInput
  | ListKafkaVersionsCommandInput
  | ListNodesCommandInput
  | ListTagsForResourceCommandInput
  | RebootBrokerCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBrokerCountCommandInput
  | UpdateBrokerStorageCommandInput
  | UpdateClusterConfigurationCommandInput
  | UpdateClusterKafkaVersionCommandInput
  | UpdateMonitoringCommandInput;

export type ServiceOutputTypes =
  | CreateClusterCommandOutput
  | CreateConfigurationCommandOutput
  | DeleteClusterCommandOutput
  | DescribeClusterCommandOutput
  | DescribeClusterOperationCommandOutput
  | DescribeConfigurationCommandOutput
  | DescribeConfigurationRevisionCommandOutput
  | GetBootstrapBrokersCommandOutput
  | GetCompatibleKafkaVersionsCommandOutput
  | ListClusterOperationsCommandOutput
  | ListClustersCommandOutput
  | ListConfigurationRevisionsCommandOutput
  | ListConfigurationsCommandOutput
  | ListKafkaVersionsCommandOutput
  | ListNodesCommandOutput
  | ListTagsForResourceCommandOutput
  | RebootBrokerCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBrokerCountCommandOutput
  | UpdateBrokerStorageCommandOutput
  | UpdateClusterConfigurationCommandOutput
  | UpdateClusterKafkaVersionCommandOutput
  | UpdateMonitoringCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type KafkaClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type KafkaClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>The operations for managing an Amazon MSK cluster.</p>
 */
export class KafkaClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  KafkaClientResolvedConfig
> {
  readonly config: KafkaClientResolvedConfig;

  constructor(configuration: KafkaClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
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
    this.middlewareStack.use(getLoggerPlugin(this.config));
  }

  destroy(): void {
    super.destroy();
  }
}
