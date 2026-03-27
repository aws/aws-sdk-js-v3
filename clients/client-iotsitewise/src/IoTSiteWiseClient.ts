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
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  defaultIoTSiteWiseHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AssociateAssetsCommandInput, AssociateAssetsCommandOutput } from "./commands/AssociateAssetsCommand";
import type {
  AssociateTimeSeriesToAssetPropertyCommandInput,
  AssociateTimeSeriesToAssetPropertyCommandOutput,
} from "./commands/AssociateTimeSeriesToAssetPropertyCommand";
import type {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand";
import type {
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "./commands/BatchDisassociateProjectAssetsCommand";
import type {
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "./commands/BatchGetAssetPropertyAggregatesCommand";
import type {
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "./commands/BatchGetAssetPropertyValueCommand";
import type {
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput,
} from "./commands/BatchGetAssetPropertyValueHistoryCommand";
import type {
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "./commands/BatchPutAssetPropertyValueCommand";
import type {
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import type { CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import type { CreateAssetModelCommandInput, CreateAssetModelCommandOutput } from "./commands/CreateAssetModelCommand";
import type {
  CreateAssetModelCompositeModelCommandInput,
  CreateAssetModelCompositeModelCommandOutput,
} from "./commands/CreateAssetModelCompositeModelCommand";
import type {
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "./commands/CreateBulkImportJobCommand";
import type {
  CreateComputationModelCommandInput,
  CreateComputationModelCommandOutput,
} from "./commands/CreateComputationModelCommand";
import type { CreateDashboardCommandInput, CreateDashboardCommandOutput } from "./commands/CreateDashboardCommand";
import type { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import type { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import type { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type {
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import type { DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import type { DeleteAssetModelCommandInput, DeleteAssetModelCommandOutput } from "./commands/DeleteAssetModelCommand";
import type {
  DeleteAssetModelCompositeModelCommandInput,
  DeleteAssetModelCompositeModelCommandOutput,
} from "./commands/DeleteAssetModelCompositeModelCommand";
import type {
  DeleteAssetModelInterfaceRelationshipCommandInput,
  DeleteAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/DeleteAssetModelInterfaceRelationshipCommand";
import type {
  DeleteComputationModelCommandInput,
  DeleteComputationModelCommandOutput,
} from "./commands/DeleteComputationModelCommand";
import type { DeleteDashboardCommandInput, DeleteDashboardCommandOutput } from "./commands/DeleteDashboardCommand";
import type { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import type { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import type { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "./commands/DeleteTimeSeriesCommand";
import type {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import type { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import type { DescribeAssetCommandInput, DescribeAssetCommandOutput } from "./commands/DescribeAssetCommand";
import type {
  DescribeAssetCompositeModelCommandInput,
  DescribeAssetCompositeModelCommandOutput,
} from "./commands/DescribeAssetCompositeModelCommand";
import type {
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
} from "./commands/DescribeAssetModelCommand";
import type {
  DescribeAssetModelCompositeModelCommandInput,
  DescribeAssetModelCompositeModelCommandOutput,
} from "./commands/DescribeAssetModelCompositeModelCommand";
import type {
  DescribeAssetModelInterfaceRelationshipCommandInput,
  DescribeAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/DescribeAssetModelInterfaceRelationshipCommand";
import type {
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import type {
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "./commands/DescribeBulkImportJobCommand";
import type {
  DescribeComputationModelCommandInput,
  DescribeComputationModelCommandOutput,
} from "./commands/DescribeComputationModelCommand";
import type {
  DescribeComputationModelExecutionSummaryCommandInput,
  DescribeComputationModelExecutionSummaryCommandOutput,
} from "./commands/DescribeComputationModelExecutionSummaryCommand";
import type {
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import type { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import type {
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import type {
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import type {
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import type { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "./commands/DescribeGatewayCommand";
import type {
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import type { DescribePortalCommandInput, DescribePortalCommandOutput } from "./commands/DescribePortalCommand";
import type { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import type {
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "./commands/DescribeStorageConfigurationCommand";
import type {
  DescribeTimeSeriesCommandInput,
  DescribeTimeSeriesCommandOutput,
} from "./commands/DescribeTimeSeriesCommand";
import type {
  DisassociateAssetsCommandInput,
  DisassociateAssetsCommandOutput,
} from "./commands/DisassociateAssetsCommand";
import type {
  DisassociateTimeSeriesFromAssetPropertyCommandInput,
  DisassociateTimeSeriesFromAssetPropertyCommandOutput,
} from "./commands/DisassociateTimeSeriesFromAssetPropertyCommand";
import type { ExecuteActionCommandInput, ExecuteActionCommandOutput } from "./commands/ExecuteActionCommand";
import type { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "./commands/ExecuteQueryCommand";
import type {
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "./commands/GetAssetPropertyAggregatesCommand";
import type {
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "./commands/GetAssetPropertyValueCommand";
import type {
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "./commands/GetAssetPropertyValueHistoryCommand";
import type {
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import type { InvokeAssistantCommandInput, InvokeAssistantCommandOutput } from "./commands/InvokeAssistantCommand";
import type {
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import type { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import type {
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput,
} from "./commands/ListAssetModelCompositeModelsCommand";
import type {
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
} from "./commands/ListAssetModelPropertiesCommand";
import type { ListAssetModelsCommandInput, ListAssetModelsCommandOutput } from "./commands/ListAssetModelsCommand";
import type {
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "./commands/ListAssetPropertiesCommand";
import type {
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "./commands/ListAssetRelationshipsCommand";
import type { ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import type {
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "./commands/ListAssociatedAssetsCommand";
import type {
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput,
} from "./commands/ListBulkImportJobsCommand";
import type {
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput,
} from "./commands/ListCompositionRelationshipsCommand";
import type {
  ListComputationModelDataBindingUsagesCommandInput,
  ListComputationModelDataBindingUsagesCommandOutput,
} from "./commands/ListComputationModelDataBindingUsagesCommand";
import type {
  ListComputationModelResolveToResourcesCommandInput,
  ListComputationModelResolveToResourcesCommandOutput,
} from "./commands/ListComputationModelResolveToResourcesCommand";
import type {
  ListComputationModelsCommandInput,
  ListComputationModelsCommandOutput,
} from "./commands/ListComputationModelsCommand";
import type { ListDashboardsCommandInput, ListDashboardsCommandOutput } from "./commands/ListDashboardsCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import type { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import type {
  ListInterfaceRelationshipsCommandInput,
  ListInterfaceRelationshipsCommandOutput,
} from "./commands/ListInterfaceRelationshipsCommand";
import type { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import type {
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "./commands/ListProjectAssetsCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput } from "./commands/ListTimeSeriesCommand";
import type {
  PutAssetModelInterfaceRelationshipCommandInput,
  PutAssetModelInterfaceRelationshipCommandOutput,
} from "./commands/PutAssetModelInterfaceRelationshipCommand";
import type {
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import type {
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import type {
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
} from "./commands/PutStorageConfigurationCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand";
import type { UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import type { UpdateAssetModelCommandInput, UpdateAssetModelCommandOutput } from "./commands/UpdateAssetModelCommand";
import type {
  UpdateAssetModelCompositeModelCommandInput,
  UpdateAssetModelCompositeModelCommandOutput,
} from "./commands/UpdateAssetModelCompositeModelCommand";
import type {
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import type {
  UpdateComputationModelCommandInput,
  UpdateComputationModelCommandOutput,
} from "./commands/UpdateComputationModelCommand";
import type { UpdateDashboardCommandInput, UpdateDashboardCommandOutput } from "./commands/UpdateDashboardCommand";
import type { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import type {
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import type { UpdateGatewayCommandInput, UpdateGatewayCommandOutput } from "./commands/UpdateGatewayCommand";
import type { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
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
