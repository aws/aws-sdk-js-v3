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
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type EventStreamSerdeProvider as __EventStreamSerdeProvider,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultIoTSiteWiseHttpAuthSchemeParametersProvider,
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
import {
  CreateComputationModelCommandInput,
  CreateComputationModelCommandOutput,
} from "./commands/CreateComputationModelCommand";
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
import {
  DeleteAssetModelInterfaceRelationshipCommandInput,
  DeleteAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/DeleteAssetModelInterfaceRelationshipCommand";
import {
  DeleteComputationModelCommandInput,
  DeleteComputationModelCommandOutput,
} from "./commands/DeleteComputationModelCommand";
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
  DescribeAssetModelInterfaceRelationshipCommandInput,
  DescribeAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/DescribeAssetModelInterfaceRelationshipCommand";
import {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "./commands/DescribeBulkImportJobCommand";
import {
  DescribeComputationModelCommandInput,
  DescribeComputationModelCommandOutput,
} from "./commands/DescribeComputationModelCommand";
import {
  DescribeComputationModelExecutionSummaryCommandInput,
  DescribeComputationModelExecutionSummaryCommandOutput,
} from "./commands/DescribeComputationModelExecutionSummaryCommand";
import { DescribeDashboardCommandInput, DescribeDashboardCommandOutput } from "./commands/DescribeDashboardCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import {
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import { DescribeExecutionCommandInput, DescribeExecutionCommandOutput } from "./commands/DescribeExecutionCommand";
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
import {
  ListComputationModelDataBindingUsagesCommandInput,
  ListComputationModelDataBindingUsagesCommandOutput,
} from "./commands/ListComputationModelDataBindingUsagesCommand";
import {
  ListComputationModelResolveToResourcesCommandInput,
  ListComputationModelResolveToResourcesCommandOutput,
} from "./commands/ListComputationModelResolveToResourcesCommand";
import {
  ListComputationModelsCommandInput,
  ListComputationModelsCommandOutput,
} from "./commands/ListComputationModelsCommand";
import { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import {
  ListInterfaceRelationshipsCommandInput,
  ListInterfaceRelationshipsCommandOutput,
} from "./commands/ListInterfaceRelationshipsCommand";
import { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import { ListProjectAssetsCommandInput, ListProjectAssetsCommandOutput } from "./commands/ListProjectAssetsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput } from "./commands/ListTimeSeriesCommand";
import {
  PutAssetModelInterfaceRelationshipCommandInput,
  PutAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/PutAssetModelInterfaceRelationshipCommand";
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
import {
  UpdateComputationModelCommandInput,
  UpdateComputationModelCommandOutput,
} from "./commands/UpdateComputationModelCommand";
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
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

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
  | CreateComputationModelCommandInput
  | CreateDashboardCommandInput
  | CreateDatasetCommandInput
  | CreateGatewayCommandInput
  | CreatePortalCommandInput
  | CreateProjectCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetModelCommandInput
  | DeleteAssetModelCompositeModelCommandInput
  | DeleteAssetModelInterfaceRelationshipCommandInput
  | DeleteComputationModelCommandInput
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
  | DescribeAssetModelInterfaceRelationshipCommandInput
  | DescribeAssetPropertyCommandInput
  | DescribeBulkImportJobCommandInput
  | DescribeComputationModelCommandInput
  | DescribeComputationModelExecutionSummaryCommandInput
  | DescribeDashboardCommandInput
  | DescribeDatasetCommandInput
  | DescribeDefaultEncryptionConfigurationCommandInput
  | DescribeExecutionCommandInput
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
  | ListComputationModelDataBindingUsagesCommandInput
  | ListComputationModelResolveToResourcesCommandInput
  | ListComputationModelsCommandInput
  | ListDashboardsCommandInput
  | ListDatasetsCommandInput
  | ListExecutionsCommandInput
  | ListGatewaysCommandInput
  | ListInterfaceRelationshipsCommandInput
  | ListPortalsCommandInput
  | ListProjectAssetsCommandInput
  | ListProjectsCommandInput
  | ListTagsForResourceCommandInput
  | ListTimeSeriesCommandInput
  | PutAssetModelInterfaceRelationshipCommandInput
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
  | UpdateComputationModelCommandInput
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
  | CreateComputationModelCommandOutput
  | CreateDashboardCommandOutput
  | CreateDatasetCommandOutput
  | CreateGatewayCommandOutput
  | CreatePortalCommandOutput
  | CreateProjectCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetModelCommandOutput
  | DeleteAssetModelCompositeModelCommandOutput
  | DeleteAssetModelInterfaceRelationshipCommandOutput
  | DeleteComputationModelCommandOutput
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
  | DescribeAssetModelInterfaceRelationshipCommandOutput
  | DescribeAssetPropertyCommandOutput
  | DescribeBulkImportJobCommandOutput
  | DescribeComputationModelCommandOutput
  | DescribeComputationModelExecutionSummaryCommandOutput
  | DescribeDashboardCommandOutput
  | DescribeDatasetCommandOutput
  | DescribeDefaultEncryptionConfigurationCommandOutput
  | DescribeExecutionCommandOutput
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
  | ListComputationModelDataBindingUsagesCommandOutput
  | ListComputationModelResolveToResourcesCommandOutput
  | ListComputationModelsCommandOutput
  | ListDashboardsCommandOutput
  | ListDatasetsCommandOutput
  | ListExecutionsCommandOutput
  | ListGatewaysCommandOutput
  | ListInterfaceRelationshipsCommandOutput
  | ListPortalsCommandOutput
  | ListProjectAssetsCommandOutput
  | ListProjectsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTimeSeriesCommandOutput
  | PutAssetModelInterfaceRelationshipCommandOutput
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
  | UpdateComputationModelCommandOutput
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
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
    this.config = _config_9;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
