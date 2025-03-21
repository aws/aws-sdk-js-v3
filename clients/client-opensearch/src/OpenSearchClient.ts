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
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultOpenSearchHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptInboundConnectionCommandInput,
  AcceptInboundConnectionCommandOutput,
} from "./commands/AcceptInboundConnectionCommand";
import { AddDataSourceCommandInput, AddDataSourceCommandOutput } from "./commands/AddDataSourceCommand";
import {
  AddDirectQueryDataSourceCommandInput,
  AddDirectQueryDataSourceCommandOutput,
} from "./commands/AddDirectQueryDataSourceCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociatePackageCommandInput, AssociatePackageCommandOutput } from "./commands/AssociatePackageCommand";
import { AssociatePackagesCommandInput, AssociatePackagesCommandOutput } from "./commands/AssociatePackagesCommand";
import {
  AuthorizeVpcEndpointAccessCommandInput,
  AuthorizeVpcEndpointAccessCommandOutput,
} from "./commands/AuthorizeVpcEndpointAccessCommand";
import {
  CancelDomainConfigChangeCommandInput,
  CancelDomainConfigChangeCommandOutput,
} from "./commands/CancelDomainConfigChangeCommand";
import {
  CancelServiceSoftwareUpdateCommandInput,
  CancelServiceSoftwareUpdateCommandOutput,
} from "./commands/CancelServiceSoftwareUpdateCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import {
  CreateOutboundConnectionCommandInput,
  CreateOutboundConnectionCommandOutput,
} from "./commands/CreateOutboundConnectionCommand";
import { CreatePackageCommandInput, CreatePackageCommandOutput } from "./commands/CreatePackageCommand";
import { CreateVpcEndpointCommandInput, CreateVpcEndpointCommandOutput } from "./commands/CreateVpcEndpointCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import {
  DeleteDirectQueryDataSourceCommandInput,
  DeleteDirectQueryDataSourceCommandOutput,
} from "./commands/DeleteDirectQueryDataSourceCommand";
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
import {
  DescribeDomainHealthCommandInput,
  DescribeDomainHealthCommandOutput,
} from "./commands/DescribeDomainHealthCommand";
import {
  DescribeDomainNodesCommandInput,
  DescribeDomainNodesCommandOutput,
} from "./commands/DescribeDomainNodesCommand";
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
import { DissociatePackagesCommandInput, DissociatePackagesCommandOutput } from "./commands/DissociatePackagesCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import {
  GetCompatibleVersionsCommandInput,
  GetCompatibleVersionsCommandOutput,
} from "./commands/GetCompatibleVersionsCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import {
  GetDirectQueryDataSourceCommandInput,
  GetDirectQueryDataSourceCommandOutput,
} from "./commands/GetDirectQueryDataSourceCommand";
import {
  GetDomainMaintenanceStatusCommandInput,
  GetDomainMaintenanceStatusCommandOutput,
} from "./commands/GetDomainMaintenanceStatusCommand";
import {
  GetPackageVersionHistoryCommandInput,
  GetPackageVersionHistoryCommandOutput,
} from "./commands/GetPackageVersionHistoryCommand";
import { GetUpgradeHistoryCommandInput, GetUpgradeHistoryCommandOutput } from "./commands/GetUpgradeHistoryCommand";
import { GetUpgradeStatusCommandInput, GetUpgradeStatusCommandOutput } from "./commands/GetUpgradeStatusCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import {
  ListDirectQueryDataSourcesCommandInput,
  ListDirectQueryDataSourcesCommandOutput,
} from "./commands/ListDirectQueryDataSourcesCommand";
import {
  ListDomainMaintenancesCommandInput,
  ListDomainMaintenancesCommandOutput,
} from "./commands/ListDomainMaintenancesCommand";
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
import {
  ListScheduledActionsCommandInput,
  ListScheduledActionsCommandOutput,
} from "./commands/ListScheduledActionsCommand";
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
  StartDomainMaintenanceCommandInput,
  StartDomainMaintenanceCommandOutput,
} from "./commands/StartDomainMaintenanceCommand";
import {
  StartServiceSoftwareUpdateCommandInput,
  StartServiceSoftwareUpdateCommandOutput,
} from "./commands/StartServiceSoftwareUpdateCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import {
  UpdateDirectQueryDataSourceCommandInput,
  UpdateDirectQueryDataSourceCommandOutput,
} from "./commands/UpdateDirectQueryDataSourceCommand";
import { UpdateDomainConfigCommandInput, UpdateDomainConfigCommandOutput } from "./commands/UpdateDomainConfigCommand";
import { UpdatePackageCommandInput, UpdatePackageCommandOutput } from "./commands/UpdatePackageCommand";
import { UpdatePackageScopeCommandInput, UpdatePackageScopeCommandOutput } from "./commands/UpdatePackageScopeCommand";
import {
  UpdateScheduledActionCommandInput,
  UpdateScheduledActionCommandOutput,
} from "./commands/UpdateScheduledActionCommand";
import { UpdateVpcEndpointCommandInput, UpdateVpcEndpointCommandOutput } from "./commands/UpdateVpcEndpointCommand";
import { UpgradeDomainCommandInput, UpgradeDomainCommandOutput } from "./commands/UpgradeDomainCommand";
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
  | AcceptInboundConnectionCommandInput
  | AddDataSourceCommandInput
  | AddDirectQueryDataSourceCommandInput
  | AddTagsCommandInput
  | AssociatePackageCommandInput
  | AssociatePackagesCommandInput
  | AuthorizeVpcEndpointAccessCommandInput
  | CancelDomainConfigChangeCommandInput
  | CancelServiceSoftwareUpdateCommandInput
  | CreateApplicationCommandInput
  | CreateDomainCommandInput
  | CreateOutboundConnectionCommandInput
  | CreatePackageCommandInput
  | CreateVpcEndpointCommandInput
  | DeleteApplicationCommandInput
  | DeleteDataSourceCommandInput
  | DeleteDirectQueryDataSourceCommandInput
  | DeleteDomainCommandInput
  | DeleteInboundConnectionCommandInput
  | DeleteOutboundConnectionCommandInput
  | DeletePackageCommandInput
  | DeleteVpcEndpointCommandInput
  | DescribeDomainAutoTunesCommandInput
  | DescribeDomainChangeProgressCommandInput
  | DescribeDomainCommandInput
  | DescribeDomainConfigCommandInput
  | DescribeDomainHealthCommandInput
  | DescribeDomainNodesCommandInput
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
  | DissociatePackagesCommandInput
  | GetApplicationCommandInput
  | GetCompatibleVersionsCommandInput
  | GetDataSourceCommandInput
  | GetDirectQueryDataSourceCommandInput
  | GetDomainMaintenanceStatusCommandInput
  | GetPackageVersionHistoryCommandInput
  | GetUpgradeHistoryCommandInput
  | GetUpgradeStatusCommandInput
  | ListApplicationsCommandInput
  | ListDataSourcesCommandInput
  | ListDirectQueryDataSourcesCommandInput
  | ListDomainMaintenancesCommandInput
  | ListDomainNamesCommandInput
  | ListDomainsForPackageCommandInput
  | ListInstanceTypeDetailsCommandInput
  | ListPackagesForDomainCommandInput
  | ListScheduledActionsCommandInput
  | ListTagsCommandInput
  | ListVersionsCommandInput
  | ListVpcEndpointAccessCommandInput
  | ListVpcEndpointsCommandInput
  | ListVpcEndpointsForDomainCommandInput
  | PurchaseReservedInstanceOfferingCommandInput
  | RejectInboundConnectionCommandInput
  | RemoveTagsCommandInput
  | RevokeVpcEndpointAccessCommandInput
  | StartDomainMaintenanceCommandInput
  | StartServiceSoftwareUpdateCommandInput
  | UpdateApplicationCommandInput
  | UpdateDataSourceCommandInput
  | UpdateDirectQueryDataSourceCommandInput
  | UpdateDomainConfigCommandInput
  | UpdatePackageCommandInput
  | UpdatePackageScopeCommandInput
  | UpdateScheduledActionCommandInput
  | UpdateVpcEndpointCommandInput
  | UpgradeDomainCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptInboundConnectionCommandOutput
  | AddDataSourceCommandOutput
  | AddDirectQueryDataSourceCommandOutput
  | AddTagsCommandOutput
  | AssociatePackageCommandOutput
  | AssociatePackagesCommandOutput
  | AuthorizeVpcEndpointAccessCommandOutput
  | CancelDomainConfigChangeCommandOutput
  | CancelServiceSoftwareUpdateCommandOutput
  | CreateApplicationCommandOutput
  | CreateDomainCommandOutput
  | CreateOutboundConnectionCommandOutput
  | CreatePackageCommandOutput
  | CreateVpcEndpointCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteDirectQueryDataSourceCommandOutput
  | DeleteDomainCommandOutput
  | DeleteInboundConnectionCommandOutput
  | DeleteOutboundConnectionCommandOutput
  | DeletePackageCommandOutput
  | DeleteVpcEndpointCommandOutput
  | DescribeDomainAutoTunesCommandOutput
  | DescribeDomainChangeProgressCommandOutput
  | DescribeDomainCommandOutput
  | DescribeDomainConfigCommandOutput
  | DescribeDomainHealthCommandOutput
  | DescribeDomainNodesCommandOutput
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
  | DissociatePackagesCommandOutput
  | GetApplicationCommandOutput
  | GetCompatibleVersionsCommandOutput
  | GetDataSourceCommandOutput
  | GetDirectQueryDataSourceCommandOutput
  | GetDomainMaintenanceStatusCommandOutput
  | GetPackageVersionHistoryCommandOutput
  | GetUpgradeHistoryCommandOutput
  | GetUpgradeStatusCommandOutput
  | ListApplicationsCommandOutput
  | ListDataSourcesCommandOutput
  | ListDirectQueryDataSourcesCommandOutput
  | ListDomainMaintenancesCommandOutput
  | ListDomainNamesCommandOutput
  | ListDomainsForPackageCommandOutput
  | ListInstanceTypeDetailsCommandOutput
  | ListPackagesForDomainCommandOutput
  | ListScheduledActionsCommandOutput
  | ListTagsCommandOutput
  | ListVersionsCommandOutput
  | ListVpcEndpointAccessCommandOutput
  | ListVpcEndpointsCommandOutput
  | ListVpcEndpointsForDomainCommandOutput
  | PurchaseReservedInstanceOfferingCommandOutput
  | RejectInboundConnectionCommandOutput
  | RemoveTagsCommandOutput
  | RevokeVpcEndpointAccessCommandOutput
  | StartDomainMaintenanceCommandOutput
  | StartServiceSoftwareUpdateCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateDirectQueryDataSourceCommandOutput
  | UpdateDomainConfigCommandOutput
  | UpdatePackageCommandOutput
  | UpdatePackageScopeCommandOutput
  | UpdateScheduledActionCommandOutput
  | UpdateVpcEndpointCommandOutput
  | UpgradeDomainCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type OpenSearchClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of OpenSearchClient class constructor that set the region, credentials and other options.
 */
export interface OpenSearchClientConfig extends OpenSearchClientConfigType {}

/**
 * @public
 */
export type OpenSearchClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of OpenSearchClient class. This is resolved and normalized from the {@link OpenSearchClientConfig | constructor configuration interface}.
 */
export interface OpenSearchClientResolvedConfig extends OpenSearchClientResolvedConfigType {}

/**
 * <p>Use the Amazon OpenSearch Service configuration API to create, configure, and manage
 *    OpenSearch Service domains. The endpoint for configuration service requests is Region specific:
 *     es.<i>region</i>.amazonaws.com. For example, es.us-east-1.amazonaws.com. For a
 *    current list of supported Regions and endpoints, see <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#service-regions">Amazon Web Services service
 *    endpoints</a>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<OpenSearchClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultOpenSearchHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: OpenSearchClientResolvedConfig) =>
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
