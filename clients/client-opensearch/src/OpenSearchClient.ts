import {
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "./commands/AcceptInboundConnectionCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
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
import {
  DescribeDomainAutoTunesCommandInput,
  DescribeDomainAutoTunesCommandOutput,
} from "./commands/DescribeDomainAutoTunesCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import {
  DescribeDomainConfigCommandInput,
  DescribeDomainConfigCommandOutput,
} from "./commands/DescribeDomainConfigCommand";
import { DescribeDomainsCommandInput, DescribeDomainsCommandOutput } from "./commands/DescribeDomainsCommand";
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
  PurchaseReservedInstanceOfferingCommandInput,
  PurchaseReservedInstanceOfferingCommandOutput,
} from "./commands/PurchaseReservedInstanceOfferingCommand";
import {
  RejectInboundConnectionCommandInput,
  RejectInboundConnectionCommandOutput,
} from "./commands/RejectInboundConnectionCommand";
import { RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "./commands/StartServiceSoftwareUpdateCommand";
import { UpdateDomainConfigCommandInput, UpdateDomainConfigCommandOutput } from "./commands/UpdateDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import { UpgradeDomainCommandInput, UpgradeDomainCommandOutput } from "./commands/UpgradeDomainCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AcceptInboundConnectionCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | CancelServiceSoftwareUpdateCommandInput
  | CreateDomainCommandInput
  | CreateOutboundConnectionCommandInput
  | CreatePackageCommandInput
  | DeleteDomainCommandInput
  | DeleteInboundConnectionCommandInput
  | DeleteOutboundConnectionCommandInput
  | DeletePackageCommandInput
  | DescribeDomainAutoTunesCommandInput
  | DescribeDomainCommandInput
  | DescribeDomainConfigCommandInput
  | DescribeDomainsCommandInput
  | DescribeInboundConnectionsCommandInput
  | DescribeInstanceTypeLimitsCommandInput
  | DescribeOutboundConnectionsCommandInput
  | DescribePackagesCommandInput
  | DescribeReservedInstanceOfferingsCommandInput
  | DescribeReservedInstancesCommandInput
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
  | PurchaseReservedInstanceOfferingCommandInput
  | RejectInboundConnectionCommandInput
  | RemoveTagsCommandInput
  | StartServiceSoftwareUpdateCommandInput
  | UpdateDomainConfigCommandInput
  | UpdatePackageCommandInput
  | UpgradeDomainCommandInput;

export type ServiceOutputTypes =
  | AcceptInboundConnectionCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | CancelServiceSoftwareUpdateCommandOutput
  | CreateDomainCommandOutput
  | CreateOutboundConnectionCommandOutput
  | CreatePackageCommandOutput
  | DeleteDomainCommandOutput
  | DeleteInboundConnectionCommandOutput
  | DeleteOutboundConnectionCommandOutput
  | DeletePackageCommandOutput
  | DescribeDomainAutoTunesCommandOutput
  | DescribeDomainCommandOutput
  | DescribeDomainConfigCommandOutput
  | DescribeDomainsCommandOutput
  | DescribeInboundConnectionsCommandOutput
  | DescribeInstanceTypeLimitsCommandOutput
  | DescribeOutboundConnectionsCommandOutput
  | DescribePackagesCommandOutput
  | DescribeReservedInstanceOfferingsCommandOutput
  | DescribeReservedInstancesCommandOutput
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
  | PurchaseReservedInstanceOfferingCommandOutput
  | RejectInboundConnectionCommandOutput
  | RemoveTagsCommandOutput
  | StartServiceSoftwareUpdateCommandOutput
  | UpdateDomainConfigCommandOutput
  | UpdatePackageCommandOutput
  | UpgradeDomainCommandOutput;

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

type OpenSearchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of OpenSearchClient class constructor that set the region, credentials and other options.
 */
export interface OpenSearchClientConfig extends OpenSearchClientConfigType {}

type OpenSearchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of OpenSearchClient class. This is resolved and normalized from the {@link OpenSearchClientConfig | constructor configuration interface}.
 */
export interface OpenSearchClientResolvedConfig extends OpenSearchClientResolvedConfigType {}

/**
 * <fullname>Amazon OpenSearch Configuration Service</fullname>
 *     <p>Use the Amazon OpenSearch configuration API to create, configure, and manage Amazon OpenSearch Service domains.</p>
 *     <p>For sample code that uses the configuration API, see the <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/opensearch-configuration-samples.html">
 *       Amazon OpenSearch Service Developer Guide</a>.
 *       The guide also contains <a href="https://docs.aws.amazon.com/opensearch-service/latest/developerguide/request-signing.html">
 *         sample
 *         code for sending signed HTTP requests to the OpenSearch APIs</a>.
 *     </p>
 *     <p>The endpoint for configuration service requests is region-specific: es.<i>region</i>.amazonaws.com.
 *       For example, es.us-east-1.amazonaws.com. For a current list of supported regions and endpoints,
 *       see <a href="http://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions" target="_blank">Regions and Endpoints</a>.
 *     </p>
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
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
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
