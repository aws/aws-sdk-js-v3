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

import { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "./commands/AssociateAssetsCommand";
import {
  AssociateTimeSeriesToAssetPropertyCommandInput,
  AssociateTimeSeriesToAssetPropertyCommandOutput,
} from "./commands/AssociateTimeSeriesToAssetPropertyCommand";
import {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand";
import {
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "./commands/BatchDisassociateProjectAssetsCommand";
import {
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "./commands/BatchGetAssetPropertyAggregatesCommand";
import {
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "./commands/BatchGetAssetPropertyValueCommand";
import {
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput,
} from "./commands/BatchGetAssetPropertyValueHistoryCommand";
import {
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "./commands/BatchPutAssetPropertyValueCommand";
import { CreateAccessPolicyCommandInput, CreateAccessPolicyCommandOutput } from "./commands/CreateAccessPolicyCommand";
import { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "./commands/CreateAssetModelCommand";
import {
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "./commands/CreateBulkImportJobCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "./commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "./commands/DeleteAssetModelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "./commands/DeleteTimeSeriesCommand";
import {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand";
import { DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput } from "./commands/DescribeAssetModelCommand";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "./commands/DescribeBulkImportJobCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import {
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import {
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "./commands/DescribeGatewayCommand";
import {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import { DescribePortalCommandInput, DescribePortalCommandOutput } from "./commands/DescribePortalCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import {
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "./commands/DescribeStorageConfigurationCommand";
import { DescribeTimeSeriesCommandInput, DescribeTimeSeriesCommandOutput } from "./commands/DescribeTimeSeriesCommand";
import { DisassociateAssetsCommandInput, DisassociateAssetsCommandOutput } from "./commands/DisassociateAssetsCommand";
import {
  DisassociateTimeSeriesFromAssetPropertyCommandInput,
  DisassociateTimeSeriesFromAssetPropertyCommandOutput,
} from "./commands/DisassociateTimeSeriesFromAssetPropertyCommand";
import {
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "./commands/GetAssetPropertyAggregatesCommand";
import {
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "./commands/GetAssetPropertyValueCommand";
import {
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "./commands/GetAssetPropertyValueHistoryCommand";
import {
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "./commands/ListAccessPoliciesCommand";
import {
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
} from "./commands/ListAssetModelPropertiesCommand";
import { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "./commands/ListAssetModelsCommand";
import {
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "./commands/ListAssetPropertiesCommand";
import {
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "./commands/ListAssetRelationshipsCommand";
import { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "./commands/ListAssociatedAssetsCommand";
import { ListBulkImportJobsCommandInput, ListBulkImportJobsCommandOutput } from "./commands/ListBulkImportJobsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "./commands/ListProjectAssetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput } from "./commands/ListTimeSeriesCommand";
import {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import {
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
} from "./commands/PutStorageConfigurationCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAccessPolicyCommandInput, UpdateAccessPolicyCommandOutput } from "./commands/UpdateAccessPolicyCommand";
import { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import { UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput } from "./commands/UpdateAssetModelCommand";
import {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import {
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateAssetsCommandInput
  | AssociateTimeSeriesToAssetPropertyCommandInput
  | BatchAssociateProjectAssetsCommandInput
  | BatchDisassociateProjectAssetsCommandInput
  | BatchGetAssetPropertyAggregatesCommandInput
  | BatchGetAssetPropertyValueCommandInput
  | BatchGetAssetPropertyValueHistoryCommandInput
  | BatchPutAssetPropertyValueCommandInput
  | CreateAccessPolicyCommandInput
  | CreateAssetCommandInput
  | CreateAssetModelCommandInput
  | CreateBulkImportJobCommandInput
  | CreateDashboardCommandInput
  | CreateGatewayCommandInput
  | CreatePortalCommandInput
  | CreateProjectCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetModelCommandInput
  | DeleteDashboardCommandInput
  | DeleteGatewayCommandInput
  | DeletePortalCommandInput
  | DeleteProjectCommandInput
  | DeleteTimeSeriesCommandInput
  | DescribeAccessPolicyCommandInput
  | DescribeAssetCommandInput
  | DescribeAssetModelCommandInput
  | DescribeAssetPropertyCommandInput
  | DescribeBulkImportJobCommandInput
  | DescribeDashboardCommandInput
  | DescribeDefaultEncryptionConfigurationCommandInput
  | DescribeGatewayCapabilityConfigurationCommandInput
  | DescribeGatewayCommandInput
  | DescribeLoggingOptionsCommandInput
  | DescribePortalCommandInput
  | DescribeProjectCommandInput
  | DescribeStorageConfigurationCommandInput
  | DescribeTimeSeriesCommandInput
  | DisassociateAssetsCommandInput
  | DisassociateTimeSeriesFromAssetPropertyCommandInput
  | GetAssetPropertyAggregatesCommandInput
  | GetAssetPropertyValueCommandInput
  | GetAssetPropertyValueHistoryCommandInput
  | GetInterpolatedAssetPropertyValuesCommandInput
  | ListAccessPoliciesCommandInput
  | ListAssetModelPropertiesCommandInput
  | ListAssetModelsCommandInput
  | ListAssetPropertiesCommandInput
  | ListAssetRelationshipsCommandInput
  | ListAssetsCommandInput
  | ListAssociatedAssetsCommandInput
  | ListBulkImportJobsCommandInput
  | ListDashboardsCommandInput
  | ListGatewaysCommandInput
  | ListPortalsCommandInput
  | ListProjectAssetsCommandInput
  | ListProjectsCommandInput
  | ListTagsForResourceCommandInput
  | ListTimeSeriesCommandInput
  | PutDefaultEncryptionConfigurationCommandInput
  | PutLoggingOptionsCommandInput
  | PutStorageConfigurationCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessPolicyCommandInput
  | UpdateAssetCommandInput
  | UpdateAssetModelCommandInput
  | UpdateAssetPropertyCommandInput
  | UpdateDashboardCommandInput
  | UpdateGatewayCapabilityConfigurationCommandInput
  | UpdateGatewayCommandInput
  | UpdatePortalCommandInput
  | UpdateProjectCommandInput;

export type ServiceOutputTypes =
  | AssociateAssetsCommandOutput
  | AssociateTimeSeriesToAssetPropertyCommandOutput
  | BatchAssociateProjectAssetsCommandOutput
  | BatchDisassociateProjectAssetsCommandOutput
  | BatchGetAssetPropertyAggregatesCommandOutput
  | BatchGetAssetPropertyValueCommandOutput
  | BatchGetAssetPropertyValueHistoryCommandOutput
  | BatchPutAssetPropertyValueCommandOutput
  | CreateAccessPolicyCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetModelCommandOutput
  | CreateBulkImportJobCommandOutput
  | CreateDashboardCommandOutput
  | CreateGatewayCommandOutput
  | CreatePortalCommandOutput
  | CreateProjectCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetModelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteGatewayCommandOutput
  | DeletePortalCommandOutput
  | DeleteProjectCommandOutput
  | DeleteTimeSeriesCommandOutput
  | DescribeAccessPolicyCommandOutput
  | DescribeAssetCommandOutput
  | DescribeAssetModelCommandOutput
  | DescribeAssetPropertyCommandOutput
  | DescribeBulkImportJobCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDefaultEncryptionConfigurationCommandOutput
  | DescribeGatewayCapabilityConfigurationCommandOutput
  | DescribeGatewayCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | DescribePortalCommandOutput
  | DescribeProjectCommandOutput
  | DescribeStorageConfigurationCommandOutput
  | DescribeTimeSeriesCommandOutput
  | DisassociateAssetsCommandOutput
  | DisassociateTimeSeriesFromAssetPropertyCommandOutput
  | GetAssetPropertyAggregatesCommandOutput
  | GetAssetPropertyValueCommandOutput
  | GetAssetPropertyValueHistoryCommandOutput
  | GetInterpolatedAssetPropertyValuesCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListAssetModelPropertiesCommandOutput
  | ListAssetModelsCommandOutput
  | ListAssetPropertiesCommandOutput
  | ListAssetRelationshipsCommandOutput
  | ListAssetsCommandOutput
  | ListAssociatedAssetsCommandOutput
  | ListBulkImportJobsCommandOutput
  | ListDashboardsCommandOutput
  | ListGatewaysCommandOutput
  | ListPortalsCommandOutput
  | ListProjectAssetsCommandOutput
  | ListProjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTimeSeriesCommandOutput
  | PutDefaultEncryptionConfigurationCommandOutput
  | PutLoggingOptionsCommandOutput
  | PutStorageConfigurationCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessPolicyCommandOutput
  | UpdateAssetCommandOutput
  | UpdateAssetModelCommandOutput
  | UpdateAssetPropertyCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateGatewayCapabilityConfigurationCommandOutput
  | UpdateGatewayCommandOutput
  | UpdatePortalCommandOutput
  | UpdateProjectCommandOutput;

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

type IoTSiteWiseClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IoTSiteWiseClient class constructor that set the region, credentials and other options.
 */
export interface IoTSiteWiseClientConfig extends IoTSiteWiseClientConfigType {}

type IoTSiteWiseClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IoTSiteWiseClient class. This is resolved and normalized from the {@link IoTSiteWiseClientConfig | constructor configuration interface}.
 */
export interface IoTSiteWiseClientResolvedConfig extends IoTSiteWiseClientResolvedConfigType {}

/**
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export class IoTSiteWiseClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTSiteWiseClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTSiteWiseClient class. This is resolved and normalized from the {@link IoTSiteWiseClientConfig | constructor configuration interface}.
   */
  readonly config: IoTSiteWiseClientResolvedConfig;

  constructor(configuration: IoTSiteWiseClientConfig) {
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
