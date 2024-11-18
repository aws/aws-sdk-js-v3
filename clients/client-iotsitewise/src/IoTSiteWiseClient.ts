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
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  defaultIoTSiteWiseHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
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
  CreateAssetModelCompositeModelCommandInput,
  CreateAssetModelCompositeModelCommandOutput,
} from "./commands/CreateAssetModelCompositeModelCommand";
import {
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "./commands/CreateBulkImportJobCommand";
import { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { DeleteAccessPolicyCommandInput, DeleteAccessPolicyCommandOutput } from "./commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "./commands/DeleteAssetModelCommand";
import {
  DeleteAssetModelCompositeModelCommandInput,
  DeleteAssetModelCompositeModelCommandOutput,
} from "./commands/DeleteAssetModelCompositeModelCommand";
import { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "./commands/DeleteTimeSeriesCommand";
import {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand";
import {
  DescribeAssetCompositeModelCommandInput,
  DescribeAssetCompositeModelCommandOutput,
} from "./commands/DescribeAssetCompositeModelCommand";
import { DescribeAssetModelCommandInput, DescribeAssetModelCommandOutput } from "./commands/DescribeAssetModelCommand";
import {
  DescribeAssetModelCompositeModelCommandInput,
  DescribeAssetModelCompositeModelCommandOutput,
} from "./commands/DescribeAssetModelCompositeModelCommand";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "./commands/DescribeBulkImportJobCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
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
import { ExecuteActionCommandInput, ExecuteActionCommandOutput } from "./commands/ExecuteActionCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "./commands/ExecuteQueryCommand";
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
import { InvokeAssistantCommandInput, InvokeAssistantCommandOutput } from "./commands/InvokeAssistantCommand";
import { ListAccessPoliciesCommandInput, ListAccessPoliciesCommandOutput } from "./commands/ListAccessPoliciesCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput,
} from "./commands/ListAssetModelCompositeModelsCommand";
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
import {
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput,
} from "./commands/ListCompositionRelationshipsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
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
  UpdateAssetModelCompositeModelCommandInput,
  UpdateAssetModelCompositeModelCommandOutput,
} from "./commands/UpdateAssetModelCompositeModelCommand";
import {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
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
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
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
  | CreateAssetModelCompositeModelCommandInput
  | CreateBulkImportJobCommandInput
  | CreateDashboardCommandInput
  | CreateDatasetCommandInput
  | CreateGatewayCommandInput
  | CreatePortalCommandInput
  | CreateProjectCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetModelCommandInput
  | DeleteAssetModelCompositeModelCommandInput
  | DeleteDashboardCommandInput
  | DeleteDatasetCommandInput
  | DeleteGatewayCommandInput
  | DeletePortalCommandInput
  | DeleteProjectCommandInput
  | DeleteTimeSeriesCommandInput
  | DescribeAccessPolicyCommandInput
  | DescribeActionCommandInput
  | DescribeAssetCommandInput
  | DescribeAssetCompositeModelCommandInput
  | DescribeAssetModelCommandInput
  | DescribeAssetModelCompositeModelCommandInput
  | DescribeAssetPropertyCommandInput
  | DescribeBulkImportJobCommandInput
  | DescribeDashboardCommandInput
  | DescribeDatasetCommandInput
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
  | ExecuteActionCommandInput
  | ExecuteQueryCommandInput
  | GetAssetPropertyAggregatesCommandInput
  | GetAssetPropertyValueCommandInput
  | GetAssetPropertyValueHistoryCommandInput
  | GetInterpolatedAssetPropertyValuesCommandInput
  | InvokeAssistantCommandInput
  | ListAccessPoliciesCommandInput
  | ListActionsCommandInput
  | ListAssetModelCompositeModelsCommandInput
  | ListAssetModelPropertiesCommandInput
  | ListAssetModelsCommandInput
  | ListAssetPropertiesCommandInput
  | ListAssetRelationshipsCommandInput
  | ListAssetsCommandInput
  | ListAssociatedAssetsCommandInput
  | ListBulkImportJobsCommandInput
  | ListCompositionRelationshipsCommandInput
  | ListDashboardsCommandInput
  | ListDatasetsCommandInput
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
  | UpdateAssetModelCompositeModelCommandInput
  | UpdateAssetPropertyCommandInput
  | UpdateDashboardCommandInput
  | UpdateDatasetCommandInput
  | UpdateGatewayCapabilityConfigurationCommandInput
  | UpdateGatewayCommandInput
  | UpdatePortalCommandInput
  | UpdateProjectCommandInput;

/**
 * @public
 */
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
  | CreateAssetModelCompositeModelCommandOutput
  | CreateBulkImportJobCommandOutput
  | CreateDashboardCommandOutput
  | CreateDatasetCommandOutput
  | CreateGatewayCommandOutput
  | CreatePortalCommandOutput
  | CreateProjectCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetModelCommandOutput
  | DeleteAssetModelCompositeModelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteGatewayCommandOutput
  | DeletePortalCommandOutput
  | DeleteProjectCommandOutput
  | DeleteTimeSeriesCommandOutput
  | DescribeAccessPolicyCommandOutput
  | DescribeActionCommandOutput
  | DescribeAssetCommandOutput
  | DescribeAssetCompositeModelCommandOutput
  | DescribeAssetModelCommandOutput
  | DescribeAssetModelCompositeModelCommandOutput
  | DescribeAssetPropertyCommandOutput
  | DescribeBulkImportJobCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDatasetCommandOutput
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
  | ExecuteActionCommandOutput
  | ExecuteQueryCommandOutput
  | GetAssetPropertyAggregatesCommandOutput
  | GetAssetPropertyValueCommandOutput
  | GetAssetPropertyValueHistoryCommandOutput
  | GetInterpolatedAssetPropertyValuesCommandOutput
  | InvokeAssistantCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListActionsCommandOutput
  | ListAssetModelCompositeModelsCommandOutput
  | ListAssetModelPropertiesCommandOutput
  | ListAssetModelsCommandOutput
  | ListAssetPropertiesCommandOutput
  | ListAssetRelationshipsCommandOutput
  | ListAssetsCommandOutput
  | ListAssociatedAssetsCommandOutput
  | ListBulkImportJobsCommandOutput
  | ListCompositionRelationshipsCommandOutput
  | ListDashboardsCommandOutput
  | ListDatasetsCommandOutput
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
  | UpdateAssetModelCompositeModelCommandOutput
  | UpdateAssetPropertyCommandOutput
  | UpdateDashboardCommandOutput
  | UpdateDatasetCommandOutput
  | UpdateGatewayCapabilityConfigurationCommandOutput
  | UpdateGatewayCommandOutput
  | UpdatePortalCommandOutput
  | UpdateProjectCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type IoTSiteWiseClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of IoTSiteWiseClient class constructor that set the region, credentials and other options.
 */
export interface IoTSiteWiseClientConfig extends IoTSiteWiseClientConfigType {}

/**
 * @public
 */
export type IoTSiteWiseClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of IoTSiteWiseClient class. This is resolved and normalized from the {@link IoTSiteWiseClientConfig | constructor configuration interface}.
 */
export interface IoTSiteWiseClientResolvedConfig extends IoTSiteWiseClientResolvedConfigType {}

/**
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<IoTSiteWiseClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    super(_config_9);
    this.config = _config_9;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultIoTSiteWiseHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IoTSiteWiseClientResolvedConfig) =>
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
