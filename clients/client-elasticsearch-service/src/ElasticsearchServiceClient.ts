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
  AcceptInboundCrossClusterSearchConnectionCommandInput,
  AcceptInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/AcceptInboundCrossClusterSearchConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelElasticsearchServiceSoftwareUpdateCommandInput,
  CancelElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelElasticsearchServiceSoftwareUpdateCommand";
import {
  CreateElasticsearchDomainCommandInput,
  CreateElasticsearchDomainCommandOutput,
} from "./commands/CreateElasticsearchDomainCommand";
import {
  CreateOutboundCrossClusterSearchConnectionCommandInput,
  CreateOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/CreateOutboundCrossClusterSearchConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "./commands/CreateVpcEndpointCommand";
import {
  DeleteElasticsearchDomainCommandInput,
  DeleteElasticsearchDomainCommandOutput,
} from "./commands/DeleteElasticsearchDomainCommand";
import {
  DeleteElasticsearchServiceRoleCommandInput,
  DeleteElasticsearchServiceRoleCommandOutput,
} from "./commands/DeleteElasticsearchServiceRoleCommand";
import {
  DeleteInboundCrossClusterSearchConnectionCommandInput,
  DeleteInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteInboundCrossClusterSearchConnectionCommand";
import {
  DeleteOutboundCrossClusterSearchConnectionCommandInput,
  DeleteOutboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/DeleteOutboundCrossClusterSearchConnectionCommand";
import { DeletePackageCommandInput, DeletePackageCommandOutput } from "./commands/DeletePackageCommand";
import { DeleteVpcEndpointCommandInput, DeleteVpcEndpointCommandOutput } from "./commands/DeleteVpcEndpointCommand";
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "./commands/DescribeDomainAutoTunesCommand";
import {
  DescribeDomainChangeProgressCommandInput,
  DescribeDomainChangeProgressCommandOutput,
} from "./commands/DescribeDomainChangeProgressCommand";
import {
  DescribeElasticsearchDomainCommandInput,
  DescribeElasticsearchDomainCommandOutput,
} from "./commands/DescribeElasticsearchDomainCommand";
import {
  DescribeElasticsearchDomainConfigCommandInput,
  DescribeElasticsearchDomainConfigCommandOutput,
} from "./commands/DescribeElasticsearchDomainConfigCommand";
import {
  DescribeElasticsearchDomainsCommandInput,
  DescribeElasticsearchDomainsCommandOutput,
} from "./commands/DescribeElasticsearchDomainsCommand";
import {
  DescribeElasticsearchInstanceTypeLimitsCommandInput,
  DescribeElasticsearchInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeElasticsearchInstanceTypeLimitsCommand";
import {
  DescribeInboundCrossClusterSearchConnectionsCommandInput,
  DescribeInboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeInboundCrossClusterSearchConnectionsCommand";
import {
  DescribeOutboundCrossClusterSearchConnectionsCommandInput,
  DescribeOutboundCrossClusterSearchConnectionsCommandOutput,
} from "./commands/DescribeOutboundCrossClusterSearchConnectionsCommand";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "./commands/DescribePackagesCommand";
import {
  DescribeReservedElasticsearchInstanceOfferingsCommandInput,
  DescribeReservedElasticsearchInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstanceOfferingsCommand";
import {
  DescribeReservedElasticsearchInstancesCommandInput,
  DescribeReservedElasticsearchInstancesCommandOutput,
} from "./commands/DescribeReservedElasticsearchInstancesCommand";
import {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "./commands/DissociatePackageCommand";
import {
  GetCompatibleElasticsearchVersionsCommandInput,
  GetCompatibleElasticsearchVersionsCommandOutput,
} from "./commands/GetCompatibleElasticsearchVersionsCommand";
import {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "./commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "./commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "./commands/GetUpgradeStatusCommand";
import { ListDomainNamesCommandInput, ListDomainNamesCommandOutput } from "./commands/ListDomainNamesCommand";
import {
  ListDomainsForPackageCommandInput,
  ListDomainsForPackageCommandOutput,
} from "./commands/ListDomainsForPackageCommand";
import {
  ListElasticsearchInstanceTypesCommandInput,
  ListElasticsearchInstanceTypesCommandOutput,
} from "./commands/ListElasticsearchInstanceTypesCommand";
import {
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "./commands/ListElasticsearchVersionsCommand";
import {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListVpcEndpointAccessCommandInput,
  ListVpcEndpointAccessCommandOutput,
} from "./commands/ListVpcEndpointAccessCommand";
import { ListVpcEndpointsCommandInput, ListVpcEndpointsCommandOutput } from "./commands/ListVpcEndpointsCommand";
import {
  ListVpcEndpointsForDomainCommandInput,
  ListVpcEndpointsForDomainCommandOutput,
} from "./commands/ListVpcEndpointsForDomainCommand";
import {
  PurchaseReservedElasticsearchInstanceOfferingCommandInput,
  PurchaseReservedElasticsearchInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedElasticsearchInstanceOfferingCommand";
import {
  RejectInboundCrossClusterSearchConnectionCommandInput,
  RejectInboundCrossClusterSearchConnectionCommandOutput,
} from "./commands/RejectInboundCrossClusterSearchConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "./commands/RevokeVpcEndpointAccessCommand";
import {
  StartElasticsearchServiceSoftwareUpdateCommandInput,
  StartElasticsearchServiceSoftwareUpdateCommandOutput,
} from "./commands/StartElasticsearchServiceSoftwareUpdateCommand";
import {
  UpdateElasticsearchDomainConfigCommandInput,
  UpdateElasticsearchDomainConfigCommandOutput,
} from "./commands/UpdateElasticsearchDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "./commands/UpdateVpcEndpointCommand";
import {
  UpgradeElasticsearchDomainCommandInput,
  UpgradeElasticsearchDomainCommandOutput,
} from "./commands/UpgradeElasticsearchDomainCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptInboundCrossClusterSearchConnectionCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | AuthorizeVpcEndpointAccessCommandInput
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

export type ServiceOutputTypes =
  | AcceptInboundCrossClusterSearchConnectionCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | AuthorizeVpcEndpointAccessCommandOutput
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

type ElasticsearchServiceClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of ElasticsearchServiceClient class constructor that set the region, credentials and other options.
 */
export interface ElasticsearchServiceClientConfig extends ElasticsearchServiceClientConfigType {}

type ElasticsearchServiceClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of ElasticsearchServiceClient class. This is resolved and normalized from the {@link ElasticsearchServiceClientConfig | constructor configuration interface}.
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

  constructor(configuration: ElasticsearchServiceClientConfig) {
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
