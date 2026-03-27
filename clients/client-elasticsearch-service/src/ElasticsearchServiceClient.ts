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
  defaultElasticsearchServiceHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
import type { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import type { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
import type {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import type {
  CancelDomainConfigChangeCommandInput,
  CancelDomainConfigChangeCommandOutput,
} from "./commands/CancelDomainConfigChangeCommand";
import type {
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import type {
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
} from "./commands/CreateElasticsearchDomainCommand";
import type {
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
import type { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import type {
  CreateVpcEndpointCommandInput,
  CreateVpcEndpointCommandOutput,
} from "./commands/CreateVpcEndpointCommand";
import type {
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
} from "./commands/DeleteElasticsearchDomainCommand";
import type {
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput,
} from "./commands/DeleteElasticsearchServiceRoleCommand";
import type {
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import type {
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import type { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import type {
  DeleteVpcEndpointCommandInput,
  DeleteVpcEndpointCommandOutput,
} from "./commands/DeleteVpcEndpointCommand";
import type {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "./commands/DescribeDomainAutoTunesCommand";
import type {
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
} from "./commands/DescribeDomainChangeProgressCommand";
import type {
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
} from "./commands/DescribeElasticsearchDomainCommand";
import type {
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
} from "./commands/DescribeElasticsearchDomainConfigCommand";
import type {
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput,
} from "./commands/DescribeElasticsearchDomainsCommand";
import type {
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import type {
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import type {
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import type { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "./commands/DescribePackagesCommand";
import type {
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import type {
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstancesCommand";
import type {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import type {
  DissociatePackageCommandInput,
  DissociatePackageCommandOutput,
} from "./commands/DissociatePackageCommand";
import type {
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "./commands/GetCompatibleElasticsearchVersionsCommand";
import type {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "./commands/GetPackageVersionHistoryCommand";
import type {
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "./commands/GetUpgradeHistoryCommand";
import type { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "./commands/GetUpgradeStatusCommand";
import type { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import type {
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "./commands/ListDomainsForPackageCommand";
import type {
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "./commands/ListElasticsearchInstanceTypesCommand";
import type {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "./commands/ListElasticsearchVersionsCommand";
import type {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand";
import type { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import type {
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
} from "./commands/ListVpcEndpointAccessCommand";
import type { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "./commands/ListVpcEndpointsCommand";
import type {
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
} from "./commands/ListVpcEndpointsForDomainCommand";
import type {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import type {
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import type { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import type {
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "./commands/RevokeVpcEndpointAccessCommand";
import type {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import type {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "./commands/UpdateElasticsearchDomainConfigCommand";
import type { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import type {
  UpdateVpcEndpointCommandInput,
  UpdateVpcEndpointCommandOutput,
} from "./commands/UpdateVpcEndpointCommand";
import type {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "./commands/UpgradeElasticsearchDomainCommand";
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
  | AcceptInboundCrossClusterSearchConnectionCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | AuthorizeVpcEndpointAccessCommandInput
  | CancelDomainConfigChangeCommandInput
  | CancelElasticsearchServiceSoftwareUpdateCommandInput
  | CreateElasticsearchDomainCommandInput
  | CreateOutboundCrossClusterSearchConnectionCommandInput
  | CreatePackageCommandInput
  | CreateVpcEndpointCommandInput
  | DeleteElasticsearchDomainCommandInput
  | DeleteElasticsearchServiceRoleCommandInput
  | DeleteInboundCrossClusterSearchConnectionCommandInput
  | DeleteOutboundCrossClusterSearchConnectionCommandInput
  | DeletePackageCommandInput
  | DeleteVpcEndpointCommandInput
  | DescribeDomainAutoTunesCommandInput
  | DescribeDomainChangeProgressCommandInput
  | DescribeElasticsearchDomainCommandInput
  | DescribeElasticsearchDomainConfigCommandInput
  | DescribeElasticsearchDomainsCommandInput
  | DescribeElasticsearchInstanceTypeLimitsCommandInput
  | DescribeInboundCrossClusterSearchConnectionsCommandInput
  | DescribeOutboundCrossClusterSearchConnectionsCommandInput
  | DescribePackagesCommandInput
  | DescribeReservedElasticsearchInstanceOfferingsCommandInput
  | DescribeReservedElasticsearchInstancesCommandInput
  | DescribeVpcEndpointsCommandInput
  | DissociatePackageCommandInput
  | GetCompatibleElasticsearchVersionsCommandInput
  | GetPackageVersionHistoryCommandInput
  | GetUpgradeHistoryCommandInput
  | GetUpgradeStatusCommandInput
  | ListDomainNamesCommandInput
  | ListDomainsForPackageCommandInput
  | ListElasticsearchInstanceTypesCommandInput
  | ListElasticsearchVersionsCommandInput
  | ListPackagesForDomainCommandInput
  | ListTagsCommandInput
  | ListVpcEndpointAccessCommandInput
  | ListVpcEndpointsCommandInput
  | ListVpcEndpointsForDomainCommandInput
  | PurchaseReservedElasticsearchInstanceOfferingCommandInput
  | RejectInboundCrossClusterSearchConnectionCommandInput
  | RemoveTagsCommandInput
  | RevokeVpcEndpointAccessCommandInput
  | StartElasticsearchServiceSoftwareUpdateCommandInput
  | UpdateElasticsearchDomainConfigCommandInput
  | UpdatePackageCommandInput
  | UpdateVpcEndpointCommandInput
  | UpgradeElasticsearchDomainCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptInboundCrossClusterSearchConnectionCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | AuthorizeVpcEndpointAccessCommandOutput
  | CancelDomainConfigChangeCommandOutput
  | CancelElasticsearchServiceSoftwareUpdateCommandOutput
  | CreateElasticsearchDomainCommandOutput
  | CreateOutboundCrossClusterSearchConnectionCommandOutput
  | CreatePackageCommandOutput
  | CreateVpcEndpointCommandOutput
  | DeleteElasticsearchDomainCommandOutput
  | DeleteElasticsearchServiceRoleCommandOutput
  | DeleteInboundCrossClusterSearchConnectionCommandOutput
  | DeleteOutboundCrossClusterSearchConnectionCommandOutput
  | DeletePackageCommandOutput
  | DeleteVpcEndpointCommandOutput
  | DescribeDomainAutoTunesCommandOutput
  | DescribeDomainChangeProgressCommandOutput
  | DescribeElasticsearchDomainCommandOutput
  | DescribeElasticsearchDomainConfigCommandOutput
  | DescribeElasticsearchDomainsCommandOutput
  | DescribeElasticsearchInstanceTypeLimitsCommandOutput
  | DescribeInboundCrossClusterSearchConnectionsCommandOutput
  | DescribeOutboundCrossClusterSearchConnectionsCommandOutput
  | DescribePackagesCommandOutput
  | DescribeReservedElasticsearchInstanceOfferingsCommandOutput
  | DescribeReservedElasticsearchInstancesCommandOutput
  | DescribeVpcEndpointsCommandOutput
  | DissociatePackageCommandOutput
  | GetCompatibleElasticsearchVersionsCommandOutput
  | GetPackageVersionHistoryCommandOutput
  | GetUpgradeHistoryCommandOutput
  | GetUpgradeStatusCommandOutput
  | ListDomainNamesCommandOutput
  | ListDomainsForPackageCommandOutput
  | ListElasticsearchInstanceTypesCommandOutput
  | ListElasticsearchVersionsCommandOutput
  | ListPackagesForDomainCommandOutput
  | ListTagsCommandOutput
  | ListVpcEndpointAccessCommandOutput
  | ListVpcEndpointsCommandOutput
  | ListVpcEndpointsForDomainCommandOutput
  | PurchaseReservedElasticsearchInstanceOfferingCommandOutput
  | RejectInboundCrossClusterSearchConnectionCommandOutput
  | RemoveTagsCommandOutput
  | RevokeVpcEndpointAccessCommandOutput
  | StartElasticsearchServiceSoftwareUpdateCommandOutput
  | UpdateElasticsearchDomainConfigCommandOutput
  | UpdatePackageCommandOutput
  | UpdateVpcEndpointCommandOutput
  | UpgradeElasticsearchDomainCommandOutput;

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
export type ElasticsearchServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of ElasticsearchServiceClient class constructor that set the region, credentials and other options.
 */
export interface ElasticsearchServiceClientConfig extends ElasticsearchServiceClientConfigType {}

/**
 * @public
 */
export type ElasticsearchServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of ElasticsearchServiceClient class. This is resolved and normalized from the {@link ElasticsearchServiceClientConfig | constructor configuration interface}.
 */
export interface ElasticsearchServiceClientResolvedConfig extends ElasticsearchServiceClientResolvedConfigType {}

/**
 * <fullname>Amazon Elasticsearch Configuration Service</fullname>
 *       <p>Use the Amazon Elasticsearch Configuration API to create, configure, and manage Elasticsearch domains.</p>
 *       <p>For sample code that uses the Configuration API, see the <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-configuration-samples.html">Amazon Elasticsearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-request-signing.html">sample code for sending signed HTTP requests to the Elasticsearch APIs</a>.</p>
 *       <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *          For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *          see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#elasticsearch-service-regions" target="_blank">Regions and Endpoints</a>.</p>
 * @public
 */
export class ElasticsearchServiceClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  ElasticsearchServiceClientResolvedConfig
> {
  /**
   * The resolved configuration of ElasticsearchServiceClient class. This is resolved and normalized from the {@link ElasticsearchServiceClientConfig | constructor configuration interface}.
   */
  readonly config: ElasticsearchServiceClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<ElasticsearchServiceClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultElasticsearchServiceHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: ElasticsearchServiceClientResolvedConfig) =>
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
