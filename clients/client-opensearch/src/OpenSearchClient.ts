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
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "./commands/AcceptInboundConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelServiceSoftwareUpdateCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import {
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
} from "./commands/CreateOutboundConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "./commands/CreateVpcEndpointCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import {
  DeleteInboundConnectionCommandInput,
  DeleteInboundConnectionCommandOutput,
} from "./commands/DeleteInboundConnectionCommand";
import {
  DeleteOutboundConnectionCommandInput,
  DeleteOutboundConnectionCommandOutput,
} from "./commands/DeleteOutboundConnectionCommand";
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
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import {
  DescribeDomainConfigCommandInput,
  DescribeDomainConfigCommandOutput,
} from "./commands/DescribeDomainConfigCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand";
import {
  DescribeDryRunProgressCommandInput,
  DescribeDryRunProgressCommandOutput,
} from "./commands/DescribeDryRunProgressCommand";
import {
  DescribeInboundConnectionsCommandInput,
  DescribeInboundConnectionsCommandOutput,
} from "./commands/DescribeInboundConnectionsCommand";
import {
  DescribeInstanceTypeLimitsCommandInput,
  DescribeInstanceTypeLimitsCommandOutput,
} from "./commands/DescribeInstanceTypeLimitsCommand";
import {
  DescribeOutboundConnectionsCommandInput,
  DescribeOutboundConnectionsCommandOutput,
} from "./commands/DescribeOutboundConnectionsCommand";
import { DescribePackagesCommandInput, DescribePackagesCommandOutput } from "./commands/DescribePackagesCommand";
import {
  DescribeReservedInstanceOfferingsCommandInput,
  DescribeReservedInstanceOfferingsCommandOutput,
} from "./commands/DescribeReservedInstanceOfferingsCommand";
import {
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "./commands/DescribeReservedInstancesCommand";
import {
  DescribeVpcEndpointsCommandInput,
  DescribeVpcEndpointsCommandOutput,
} from "./commands/DescribeVpcEndpointsCommand";
import { DissociatePackageCommandInput, DissociatePackageCommandOutput } from "./commands/DissociatePackageCommand";
import {
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "./commands/GetCompatibleVersionsCommand";
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
  ListInstanceTypeDetailsCommandInput,
  ListInstanceTypeDetailsCommandOutput,
} from "./commands/ListInstanceTypeDetailsCommand";
import {
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "./commands/ListPackagesForDomainCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListVersionsCommandInput, ListVersionsCommandOutput } from "./commands/ListVersionsCommand";
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
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedInstanceOfferingCommand";
import {
  RejectInboundConnectionCommandInput,
  RejectInboundConnectionCommandOutput,
} from "./commands/RejectInboundConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  RevokeVpcEndpointAccessCommandInput,
  RevokeVpcEndpointAccessCommandOutput,
} from "./commands/RevokeVpcEndpointAccessCommand";
import {
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "./commands/StartServiceSoftwareUpdateCommand";
import { UpdateDomainConfigCommandInput, UpdateDomainConfigCommandOutput } from "./commands/UpdateDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "./commands/UpdateVpcEndpointCommand";
import { UpgradeDomainCommandInput, UpgradeDomainCommandOutput } from "./commands/UpgradeDomainCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AcceptInboundConnectionCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | AuthorizeVpcEndpointAccessCommandInput
  | CancelServiceSoftwareUpdateCommandInput
  | CreateDomainCommandInput
  | CreateOutboundConnectionCommandInput
  | CreatePackageCommandInput
  | CreateVpcEndpointCommandInput
  | DeleteDomainCommandInput
  | DeleteInboundConnectionCommandInput
  | DeleteOutboundConnectionCommandInput
  | DeletePackageCommandInput
  | DeleteVpcEndpointCommandInput
  | DescribeDomainAutoTunesCommandInput
  | DescribeDomainChangeProgressCommandInput
  | DescribeDomainCommandInput
  | DescribeDomainConfigCommandInput
  | DescribeDomainsCommandInput
  | DescribeDryRunProgressCommandInput
  | DescribeInboundConnectionsCommandInput
  | DescribeInstanceTypeLimitsCommandInput
  | DescribeOutboundConnectionsCommandInput
  | DescribePackagesCommandInput
  | DescribeReservedInstanceOfferingsCommandInput
  | DescribeReservedInstancesCommandInput
  | DescribeVpcEndpointsCommandInput
  | DissociatePackageCommandInput
  | GetCompatibleVersionsCommandInput
  | GetPackageVersionHistoryCommandInput
  | GetUpgradeHistoryCommandInput
  | GetUpgradeStatusCommandInput
  | ListDomainNamesCommandInput
  | ListDomainsForPackageCommandInput
  | ListInstanceTypeDetailsCommandInput
  | ListPackagesForDomainCommandInput
  | ListTagsCommandInput
  | ListVersionsCommandInput
  | ListVpcEndpointAccessCommandInput
  | ListVpcEndpointsCommandInput
  | ListVpcEndpointsForDomainCommandInput
  | PurchaseReservedInstanceOfferingCommandInput
  | RejectInboundConnectionCommandInput
  | RemoveTagsCommandInput
  | RevokeVpcEndpointAccessCommandInput
  | StartServiceSoftwareUpdateCommandInput
  | UpdateDomainConfigCommandInput
  | UpdatePackageCommandInput
  | UpdateVpcEndpointCommandInput
  | UpgradeDomainCommandInput;

export type ServiceOutputTypes =
  | AcceptInboundConnectionCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | AuthorizeVpcEndpointAccessCommandOutput
  | CancelServiceSoftwareUpdateCommandOutput
  | CreateDomainCommandOutput
  | CreateOutboundConnectionCommandOutput
  | CreatePackageCommandOutput
  | CreateVpcEndpointCommandOutput
  | DeleteDomainCommandOutput
  | DeleteInboundConnectionCommandOutput
  | DeleteOutboundConnectionCommandOutput
  | DeletePackageCommandOutput
  | DeleteVpcEndpointCommandOutput
  | DescribeDomainAutoTunesCommandOutput
  | DescribeDomainChangeProgressCommandOutput
  | DescribeDomainCommandOutput
  | DescribeDomainConfigCommandOutput
  | DescribeDomainsCommandOutput
  | DescribeDryRunProgressCommandOutput
  | DescribeInboundConnectionsCommandOutput
  | DescribeInstanceTypeLimitsCommandOutput
  | DescribeOutboundConnectionsCommandOutput
  | DescribePackagesCommandOutput
  | DescribeReservedInstanceOfferingsCommandOutput
  | DescribeReservedInstancesCommandOutput
  | DescribeVpcEndpointsCommandOutput
  | DissociatePackageCommandOutput
  | GetCompatibleVersionsCommandOutput
  | GetPackageVersionHistoryCommandOutput
  | GetUpgradeHistoryCommandOutput
  | GetUpgradeStatusCommandOutput
  | ListDomainNamesCommandOutput
  | ListDomainsForPackageCommandOutput
  | ListInstanceTypeDetailsCommandOutput
  | ListPackagesForDomainCommandOutput
  | ListTagsCommandOutput
  | ListVersionsCommandOutput
  | ListVpcEndpointAccessCommandOutput
  | ListVpcEndpointsCommandOutput
  | ListVpcEndpointsForDomainCommandOutput
  | PurchaseReservedInstanceOfferingCommandOutput
  | RejectInboundConnectionCommandOutput
  | RemoveTagsCommandOutput
  | RevokeVpcEndpointAccessCommandOutput
  | StartServiceSoftwareUpdateCommandOutput
  | UpdateDomainConfigCommandOutput
  | UpdatePackageCommandOutput
  | UpdateVpcEndpointCommandOutput
  | UpgradeDomainCommandOutput;

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

type OpenSearchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of OpenSearchClient class constructor that set the region, credentials and other options.
 */
export interface OpenSearchClientConfig extends OpenSearchClientConfigType {}

type OpenSearchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of OpenSearchClient class. This is resolved and normalized from the {@link OpenSearchClientConfig | constructor configuration interface}.
 */
export interface OpenSearchClientResolvedConfig extends OpenSearchClientResolvedConfigType {}

/**
 * <p>Use the Amazon OpenSearch Service configuration API to create, configure, and manage
 *    OpenSearch Service domains.</p>
 *          <p>For sample code that uses the configuration API, see the <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-configuration-samples.html">
 *                <i>Amazon OpenSearch Service Developer Guide</i>
 *             </a>. The guide also
 *    contains <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html">sample code</a> for
 *    sending signed HTTP requests to the OpenSearch APIs. The endpoint for configuration service
 *    requests is Region specific: es.<i>region</i>.amazonaws.com. For example,
 *    es.us-east-1.amazonaws.com. For a current list of supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions">Amazon Web Services
 *     service endpoints</a>.</p>
 */
export class OpenSearchClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  OpenSearchClientResolvedConfig
> {
  /**
   * The resolved configuration of OpenSearchClient class. This is resolved and normalized from the {@link OpenSearchClientConfig | constructor configuration interface}.
   */
  readonly config: OpenSearchClientResolvedConfig;

  constructor(configuration: OpenSearchClientConfig) {
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
