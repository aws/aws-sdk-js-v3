// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/core/event-streams";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  BatchAssociateDataSegmentsToDatasetCommandInput,
  BatchAssociateDataSegmentsToDatasetCommandOutput,
} from "./commands/BatchAssociateDataSegmentsToDatasetCommand";
import type {
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand";
import type {
  BatchDeleteDatasetDataSegmentsCommandInput,
  BatchDeleteDatasetDataSegmentsCommandOutput,
} from "./commands/BatchDeleteDatasetDataSegmentsCommand";
import type {
  BatchDisassociateDataSegmentsFromDatasetCommandInput,
  BatchDisassociateDataSegmentsFromDatasetCommandOutput,
} from "./commands/BatchDisassociateDataSegmentsFromDatasetCommand";
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
  CancelEnrichmentJobCommandInput,
  CancelEnrichmentJobCommandOutput,
} from "./commands/CancelEnrichmentJobCommand";
import type {
  CancelPipelineExecutionCommandInput,
  CancelPipelineExecutionCommandOutput,
} from "./commands/CancelPipelineExecutionCommand";
import type { CancelQueryCommandInput, CancelQueryCommandOutput } from "./commands/CancelQueryCommand";
import type {
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
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
import type {
  CreateDatasetExportJobCommandInput,
  CreateDatasetExportJobCommandOutput,
} from "./commands/CreateDatasetExportJobCommand";
import type {
  CreateEnrichmentJobCommandInput,
  CreateEnrichmentJobCommandOutput,
} from "./commands/CreateEnrichmentJobCommand";
import type { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import type { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import type { CreatePortalCommandInput, CreatePortalCommandOutput } from "./commands/CreatePortalCommand";
import type { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import type { CreateTaskCommandInput, CreateTaskCommandOutput } from "./commands/CreateTaskCommand";
import type { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import type {
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
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
import type { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import type { DeletePortalCommandInput, DeletePortalCommandOutput } from "./commands/DeletePortalCommand";
import type { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import type { DeleteTaskCommandInput, DeleteTaskCommandOutput } from "./commands/DeleteTaskCommand";
import type { DeleteTimeSeriesCommandInput, DeleteTimeSeriesCommandOutput } from "./commands/DeleteTimeSeriesCommand";
import type { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import type {
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import type { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import type {
  DescribeApplicationCommandInput,
  DescribeApplicationCommandOutput,
} from "./commands/DescribeApplicationCommand";
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
  DescribeDatasetExportJobCommandInput,
  DescribeDatasetExportJobCommandOutput,
} from "./commands/DescribeDatasetExportJobCommand";
import type {
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import type {
  DescribeEnrichmentJobCommandInput,
  DescribeEnrichmentJobCommandOutput,
} from "./commands/DescribeEnrichmentJobCommand";
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
import type { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import type {
  DescribePipelineExecutionCommandInput,
  DescribePipelineExecutionCommandOutput,
} from "./commands/DescribePipelineExecutionCommand";
import type { DescribePortalCommandInput, DescribePortalCommandOutput } from "./commands/DescribePortalCommand";
import type { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import type { DescribeQueryCommandInput, DescribeQueryCommandOutput } from "./commands/DescribeQueryCommand";
import type { DescribeSearchCommandInput, DescribeSearchCommandOutput } from "./commands/DescribeSearchCommand";
import type {
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "./commands/DescribeStorageConfigurationCommand";
import type { DescribeTaskCommandInput, DescribeTaskCommandOutput } from "./commands/DescribeTaskCommand";
import type {
  DescribeTimeSeriesCommandInput,
  DescribeTimeSeriesCommandOutput,
} from "./commands/DescribeTimeSeriesCommand";
import type {
  DescribeWorkspaceCommandInput,
  DescribeWorkspaceCommandOutput,
} from "./commands/DescribeWorkspaceCommand";
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
import type { GetCaptureDataCommandInput, GetCaptureDataCommandOutput } from "./commands/GetCaptureDataCommand";
import type {
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import type { GetQueryResultsCommandInput, GetQueryResultsCommandOutput } from "./commands/GetQueryResultsCommand";
import type { GetSearchResultsCommandInput, GetSearchResultsCommandOutput } from "./commands/GetSearchResultsCommand";
import type { InvokeAssistantCommandInput, InvokeAssistantCommandOutput } from "./commands/InvokeAssistantCommand";
import type {
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import type { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
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
import type {
  ListDatasetDataSegmentRelationshipsCommandInput,
  ListDatasetDataSegmentRelationshipsCommandOutput,
} from "./commands/ListDatasetDataSegmentRelationshipsCommand";
import type {
  ListDatasetDataSegmentsCommandInput,
  ListDatasetDataSegmentsCommandOutput,
} from "./commands/ListDatasetDataSegmentsCommand";
import type {
  ListDatasetExportJobsCommandInput,
  ListDatasetExportJobsCommandOutput,
} from "./commands/ListDatasetExportJobsCommand";
import type { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import type {
  ListEnrichmentJobsCommandInput,
  ListEnrichmentJobsCommandOutput,
} from "./commands/ListEnrichmentJobsCommand";
import type { ListExecutionsCommandInput, ListExecutionsCommandOutput } from "./commands/ListExecutionsCommand";
import type { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import type {
  ListInterfaceRelationshipsCommandInput,
  ListInterfaceRelationshipsCommandOutput,
} from "./commands/ListInterfaceRelationshipsCommand";
import type {
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "./commands/ListPipelineExecutionsCommand";
import type { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import type { ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import type {
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "./commands/ListProjectAssetsCommand";
import type { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import type { ListQueriesCommandInput, ListQueriesCommandOutput } from "./commands/ListQueriesCommand";
import type { ListSearchesCommandInput, ListSearchesCommandOutput } from "./commands/ListSearchesCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListTasksCommandInput, ListTasksCommandOutput } from "./commands/ListTasksCommand";
import type { ListTimeSeriesCommandInput, ListTimeSeriesCommandOutput } from "./commands/ListTimeSeriesCommand";
import type { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
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
import type {
  StartPipelineExecutionCommandInput,
  StartPipelineExecutionCommandOutput,
} from "./commands/StartPipelineExecutionCommand";
import type { StartQueryCommandInput, StartQueryCommandOutput } from "./commands/StartQueryCommand";
import type { StartSearchCommandInput, StartSearchCommandOutput } from "./commands/StartSearchCommand";
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
import type { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import type { UpdatePortalCommandInput, UpdatePortalCommandOutput } from "./commands/UpdatePortalCommand";
import type { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import type { UpdateTaskCommandInput, UpdateTaskCommandOutput } from "./commands/UpdateTaskCommand";
import type { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "./commands/UpdateWorkspaceCommand";
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
  | BatchAssociateDataSegmentsToDatasetCommandInput
  | BatchAssociateProjectAssetsCommandInput
  | BatchDeleteDatasetDataSegmentsCommandInput
  | BatchDisassociateDataSegmentsFromDatasetCommandInput
  | BatchDisassociateProjectAssetsCommandInput
  | BatchGetAssetPropertyAggregatesCommandInput
  | BatchGetAssetPropertyValueCommandInput
  | BatchGetAssetPropertyValueHistoryCommandInput
  | BatchPutAssetPropertyValueCommandInput
  | CancelEnrichmentJobCommandInput
  | CancelPipelineExecutionCommandInput
  | CancelQueryCommandInput
  | CreateAccessPolicyCommandInput
  | CreateApplicationCommandInput
  | CreateAssetCommandInput
  | CreateAssetModelCommandInput
  | CreateAssetModelCompositeModelCommandInput
  | CreateBulkImportJobCommandInput
  | CreateComputationModelCommandInput
  | CreateDashboardCommandInput
  | CreateDatasetCommandInput
  | CreateDatasetExportJobCommandInput
  | CreateEnrichmentJobCommandInput
  | CreateGatewayCommandInput
  | CreatePipelineCommandInput
  | CreatePortalCommandInput
  | CreateProjectCommandInput
  | CreateTaskCommandInput
  | CreateWorkspaceCommandInput
  | DeleteAccessPolicyCommandInput
  | DeleteApplicationCommandInput
  | DeleteAssetCommandInput
  | DeleteAssetModelCommandInput
  | DeleteAssetModelCompositeModelCommandInput
  | DeleteAssetModelInterfaceRelationshipCommandInput
  | DeleteComputationModelCommandInput
  | DeleteDashboardCommandInput
  | DeleteDatasetCommandInput
  | DeleteGatewayCommandInput
  | DeletePipelineCommandInput
  | DeletePortalCommandInput
  | DeleteProjectCommandInput
  | DeleteTaskCommandInput
  | DeleteTimeSeriesCommandInput
  | DeleteWorkspaceCommandInput
  | DescribeAccessPolicyCommandInput
  | DescribeActionCommandInput
  | DescribeApplicationCommandInput
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
  | DescribeDatasetExportJobCommandInput
  | DescribeDefaultEncryptionConfigurationCommandInput
  | DescribeEnrichmentJobCommandInput
  | DescribeExecutionCommandInput
  | DescribeGatewayCapabilityConfigurationCommandInput
  | DescribeGatewayCommandInput
  | DescribeLoggingOptionsCommandInput
  | DescribePipelineCommandInput
  | DescribePipelineExecutionCommandInput
  | DescribePortalCommandInput
  | DescribeProjectCommandInput
  | DescribeQueryCommandInput
  | DescribeSearchCommandInput
  | DescribeStorageConfigurationCommandInput
  | DescribeTaskCommandInput
  | DescribeTimeSeriesCommandInput
  | DescribeWorkspaceCommandInput
  | DisassociateAssetsCommandInput
  | DisassociateTimeSeriesFromAssetPropertyCommandInput
  | ExecuteActionCommandInput
  | ExecuteQueryCommandInput
  | GetAssetPropertyAggregatesCommandInput
  | GetAssetPropertyValueCommandInput
  | GetAssetPropertyValueHistoryCommandInput
  | GetCaptureDataCommandInput
  | GetInterpolatedAssetPropertyValuesCommandInput
  | GetQueryResultsCommandInput
  | GetSearchResultsCommandInput
  | InvokeAssistantCommandInput
  | ListAccessPoliciesCommandInput
  | ListActionsCommandInput
  | ListApplicationsCommandInput
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
  | ListDatasetDataSegmentRelationshipsCommandInput
  | ListDatasetDataSegmentsCommandInput
  | ListDatasetExportJobsCommandInput
  | ListDatasetsCommandInput
  | ListEnrichmentJobsCommandInput
  | ListExecutionsCommandInput
  | ListGatewaysCommandInput
  | ListInterfaceRelationshipsCommandInput
  | ListPipelineExecutionsCommandInput
  | ListPipelinesCommandInput
  | ListPortalsCommandInput
  | ListProjectAssetsCommandInput
  | ListProjectsCommandInput
  | ListQueriesCommandInput
  | ListSearchesCommandInput
  | ListTagsForResourceCommandInput
  | ListTasksCommandInput
  | ListTimeSeriesCommandInput
  | ListWorkspacesCommandInput
  | PutAssetModelInterfaceRelationshipCommandInput
  | PutDefaultEncryptionConfigurationCommandInput
  | PutLoggingOptionsCommandInput
  | PutStorageConfigurationCommandInput
  | StartPipelineExecutionCommandInput
  | StartQueryCommandInput
  | StartSearchCommandInput
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
  | UpdatePipelineCommandInput
  | UpdatePortalCommandInput
  | UpdateProjectCommandInput
  | UpdateTaskCommandInput
  | UpdateWorkspaceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociateAssetsCommandOutput
  | AssociateTimeSeriesToAssetPropertyCommandOutput
  | BatchAssociateDataSegmentsToDatasetCommandOutput
  | BatchAssociateProjectAssetsCommandOutput
  | BatchDeleteDatasetDataSegmentsCommandOutput
  | BatchDisassociateDataSegmentsFromDatasetCommandOutput
  | BatchDisassociateProjectAssetsCommandOutput
  | BatchGetAssetPropertyAggregatesCommandOutput
  | BatchGetAssetPropertyValueCommandOutput
  | BatchGetAssetPropertyValueHistoryCommandOutput
  | BatchPutAssetPropertyValueCommandOutput
  | CancelEnrichmentJobCommandOutput
  | CancelPipelineExecutionCommandOutput
  | CancelQueryCommandOutput
  | CreateAccessPolicyCommandOutput
  | CreateApplicationCommandOutput
  | CreateAssetCommandOutput
  | CreateAssetModelCommandOutput
  | CreateAssetModelCompositeModelCommandOutput
  | CreateBulkImportJobCommandOutput
  | CreateComputationModelCommandOutput
  | CreateDashboardCommandOutput
  | CreateDatasetCommandOutput
  | CreateDatasetExportJobCommandOutput
  | CreateEnrichmentJobCommandOutput
  | CreateGatewayCommandOutput
  | CreatePipelineCommandOutput
  | CreatePortalCommandOutput
  | CreateProjectCommandOutput
  | CreateTaskCommandOutput
  | CreateWorkspaceCommandOutput
  | DeleteAccessPolicyCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteAssetCommandOutput
  | DeleteAssetModelCommandOutput
  | DeleteAssetModelCompositeModelCommandOutput
  | DeleteAssetModelInterfaceRelationshipCommandOutput
  | DeleteComputationModelCommandOutput
  | DeleteDashboardCommandOutput
  | DeleteDatasetCommandOutput
  | DeleteGatewayCommandOutput
  | DeletePipelineCommandOutput
  | DeletePortalCommandOutput
  | DeleteProjectCommandOutput
  | DeleteTaskCommandOutput
  | DeleteTimeSeriesCommandOutput
  | DeleteWorkspaceCommandOutput
  | DescribeAccessPolicyCommandOutput
  | DescribeActionCommandOutput
  | DescribeApplicationCommandOutput
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
  | DescribeDatasetExportJobCommandOutput
  | DescribeDefaultEncryptionConfigurationCommandOutput
  | DescribeEnrichmentJobCommandOutput
  | DescribeExecutionCommandOutput
  | DescribeGatewayCapabilityConfigurationCommandOutput
  | DescribeGatewayCommandOutput
  | DescribeLoggingOptionsCommandOutput
  | DescribePipelineCommandOutput
  | DescribePipelineExecutionCommandOutput
  | DescribePortalCommandOutput
  | DescribeProjectCommandOutput
  | DescribeQueryCommandOutput
  | DescribeSearchCommandOutput
  | DescribeStorageConfigurationCommandOutput
  | DescribeTaskCommandOutput
  | DescribeTimeSeriesCommandOutput
  | DescribeWorkspaceCommandOutput
  | DisassociateAssetsCommandOutput
  | DisassociateTimeSeriesFromAssetPropertyCommandOutput
  | ExecuteActionCommandOutput
  | ExecuteQueryCommandOutput
  | GetAssetPropertyAggregatesCommandOutput
  | GetAssetPropertyValueCommandOutput
  | GetAssetPropertyValueHistoryCommandOutput
  | GetCaptureDataCommandOutput
  | GetInterpolatedAssetPropertyValuesCommandOutput
  | GetQueryResultsCommandOutput
  | GetSearchResultsCommandOutput
  | InvokeAssistantCommandOutput
  | ListAccessPoliciesCommandOutput
  | ListActionsCommandOutput
  | ListApplicationsCommandOutput
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
  | ListDatasetDataSegmentRelationshipsCommandOutput
  | ListDatasetDataSegmentsCommandOutput
  | ListDatasetExportJobsCommandOutput
  | ListDatasetsCommandOutput
  | ListEnrichmentJobsCommandOutput
  | ListExecutionsCommandOutput
  | ListGatewaysCommandOutput
  | ListInterfaceRelationshipsCommandOutput
  | ListPipelineExecutionsCommandOutput
  | ListPipelinesCommandOutput
  | ListPortalsCommandOutput
  | ListProjectAssetsCommandOutput
  | ListProjectsCommandOutput
  | ListQueriesCommandOutput
  | ListSearchesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTasksCommandOutput
  | ListTimeSeriesCommandOutput
  | ListWorkspacesCommandOutput
  | PutAssetModelInterfaceRelationshipCommandOutput
  | PutDefaultEncryptionConfigurationCommandOutput
  | PutLoggingOptionsCommandOutput
  | PutStorageConfigurationCommandOutput
  | StartPipelineExecutionCommandOutput
  | StartQueryCommandOutput
  | StartSearchCommandOutput
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
  | UpdatePipelineCommandOutput
  | UpdatePortalCommandOutput
  | UpdateProjectCommandOutput
  | UpdateTaskCommandOutput
  | UpdateWorkspaceCommandOutput;

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
