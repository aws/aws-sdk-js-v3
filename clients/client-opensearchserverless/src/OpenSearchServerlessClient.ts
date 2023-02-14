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

import { BatchGetCollectionCommandInput, BatchGetCollectionCommandOutput } from "./commands/BatchGetCollectionCommand";
import {
  BatchGetVpcEndpointCommandInput,
  BatchGetVpcEndpointCommandOutput,
} from "./commands/BatchGetVpcEndpointCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "./commands/CreateAccessPolicyCommand";
import { CreateCollectionCommandInput, CreateCollectionCommandOutput } from "./commands/CreateCollectionCommand";
import {
  CreateSecurityConfigCommandInput,
  CreateSecurityConfigCommandOutput,
} from "./commands/CreateSecurityConfigCommand";
import {
  CreateSecurityPolicyCommandInput,
  CreateSecurityPolicyCommandOutput,
} from "./commands/CreateSecurityPolicyCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "./commands/CreateVpcEndpointCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "./commands/DeleteAccessPolicyCommand";
import { DeleteCollectionCommandInput, DeleteCollectionCommandOutput } from "./commands/DeleteCollectionCommand";
import {
  DeleteSecurityConfigCommandInput,
  DeleteSecurityConfigCommandOutput,
} from "./commands/DeleteSecurityConfigCommand";
import {
  DeleteSecurityPolicyCommandInput,
  DeleteSecurityPolicyCommandOutput,
} from "./commands/DeleteSecurityPolicyCommand";
import { DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput } from "./commands/DeleteVpcEndpointCommand";
import { GetAccessPolicyCommandInput, GetAccessPolicyCommandOutput } from "./commands/GetAccessPolicyCommand";
import { GetAccountSettingsCommandInput, GetAccountSettingsCommandOutput } from "./commands/GetAccountSettingsCommand";
import { GetPoliciesStatsCommandInput, GetPoliciesStatsCommandOutput } from "./commands/GetPoliciesStatsCommand";
import { GetSecurityConfigCommandInput, GetSecurityConfigCommandOutput } from "./commands/GetSecurityConfigCommand";
import { GetSecurityPolicyCommandInput, GetSecurityPolicyCommandOutput } from "./commands/GetSecurityPolicyCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "./commands/ListAccessPoliciesCommand";
import { ListCollectionsCommandInput, ListCollectionsCommandOutput } from "./commands/ListCollectionsCommand";
import {
  ListSecurityConfigsCommandInput,
  ListSecurityConfigsCommandOutput,
} from "./commands/ListSecurityConfigsCommand";
import {
  ListSecurityPoliciesCommandInput,
  ListSecurityPoliciesCommandOutput,
} from "./commands/ListSecurityPoliciesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "./commands/ListVpcEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput } from "./commands/UpdateAccessPolicyCommand";
import {
  UpdateAccountSettingsCommandInput,
  UpdateAccountSettingsCommandOutput,
} from "./commands/UpdateAccountSettingsCommand";
import { UpdateCollectionCommandInput, UpdateCollectionCommandOutput } from "./commands/UpdateCollectionCommand";
import {
  UpdateSecurityConfigCommandInput,
  UpdateSecurityConfigCommandOutput,
} from "./commands/UpdateSecurityConfigCommand";
import {
  UpdateSecurityPolicyCommandInput,
  UpdateSecurityPolicyCommandOutput,
} from "./commands/UpdateSecurityPolicyCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "./commands/UpdateVpcEndpointCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchGetCollectionCommandInput
  | BatchGetVpcEndpointCommandInput
  | CreateAccessPolicyCommandInput
  | CreateCollectionCommandInput
  | CreateSecurityConfigCommandInput
  | CreateSecurityPolicyCommandInput
  | CreateVpcEndpointCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteCollectionCommandInput
  | DeleteSecurityConfigCommandInput
  | DeleteSecurityPolicyCommandInput
  | DeleteVpcEndpointCommandInput
  | GetAccessPolicyCommandInput
  | GetAccountSettingsCommandInput
  | GetPoliciesStatsCommandInput
  | GetSecurityConfigCommandInput
  | GetSecurityPolicyCommandInput
  | ListAccessPoliciesCommandInput
  | ListCollectionsCommandInput
  | ListSecurityConfigsCommandInput
  | ListSecurityPoliciesCommandInput
  | ListTagsForResourceCommandInput
  | ListVpcEndpointsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessPolicyCommandInput
  | UpdateAccountSettingsCommandInput
  | UpdateCollectionCommandInput
  | UpdateSecurityConfigCommandInput
  | UpdateSecurityPolicyCommandInput
  | UpdateVpcEndpointCommandInput;

export type ServiceOutputTypes =
  | BatchGetCollectionCommandOutput
  | BatchGetVpcEndpointCommandOutput
  | CreateAccessPolicyCommandOutput
  | CreateCollectionCommandOutput
  | CreateSecurityConfigCommandOutput
  | CreateSecurityPolicyCommandOutput
  | CreateVpcEndpointCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteCollectionCommandOutput
  | DeleteSecurityConfigCommandOutput
  | DeleteSecurityPolicyCommandOutput
  | DeleteVpcEndpointCommandOutput
  | GetAccessPolicyCommandOutput
  | GetAccountSettingsCommandOutput
  | GetPoliciesStatsCommandOutput
  | GetSecurityConfigCommandOutput
  | GetSecurityPolicyCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListCollectionsCommandOutput
  | ListSecurityConfigsCommandOutput
  | ListSecurityPoliciesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVpcEndpointsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessPolicyCommandOutput
  | UpdateAccountSettingsCommandOutput
  | UpdateCollectionCommandOutput
  | UpdateSecurityConfigCommandOutput
  | UpdateSecurityPolicyCommandOutput
  | UpdateVpcEndpointCommandOutput;

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

type OpenSearchServerlessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of OpenSearchServerlessClient class constructor that set the region, credentials and other options.
 */
export interface OpenSearchServerlessClientConfig extends OpenSearchServerlessClientConfigType {}

type OpenSearchServerlessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of OpenSearchServerlessClient class. This is resolved and normalized from the {@link OpenSearchServerlessClientConfig | constructor configuration interface}.
 */
export interface OpenSearchServerlessClientResolvedConfig extends OpenSearchServerlessClientResolvedConfigType {}

/**
 * <p>Use the Amazon OpenSearch Serverless API to create, configure, and manage OpenSearch Serverless collections and
 *             security policies.</p>
 *         <p>OpenSearch Serverless is an on-demand, pre-provisioned serverless configuration for
 *             Amazon OpenSearch Service. OpenSearch Serverless removes the operational complexities of provisioning,
 *             configuring, and tuning your OpenSearch clusters. It enables you to easily search and
 *             analyze petabytes of data without having to worry about the underlying infrastructure
 *             and data management.</p>
 *         <p> To learn more about OpenSearch Serverless, see <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/serverless-overview.html">What is
 *                 Amazon OpenSearch Serverless?</a>
 *          </p>
 */
export class OpenSearchServerlessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpenSearchServerlessClientResolvedConfig
> {
  /**
   * The resolved configuration of OpenSearchServerlessClient class. This is resolved and normalized from the {@link OpenSearchServerlessClientConfig | constructor configuration interface}.
   */
  readonly config: OpenSearchServerlessClientResolvedConfig;

  constructor(configuration: OpenSearchServerlessClientConfig) {
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
