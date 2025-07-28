// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateAssetsCommand,
  AssociateAssetsCommandInput,
  AssociateAssetsCommandOutput,
} from "./commands/AssociateAssetsCommand";
import {
  AssociateTimeSeriesToAssetPropertyCommand,
  AssociateTimeSeriesToAssetPropertyCommandInput,
  AssociateTimeSeriesToAssetPropertyCommandOutput,
} from "./commands/AssociateTimeSeriesToAssetPropertyCommand";
import {
  BatchAssociateProjectAssetsCommand,
  BatchAssociateProjectAssetsCommandInput,
  BatchAssociateProjectAssetsCommandOutput,
} from "./commands/BatchAssociateProjectAssetsCommand";
import {
  BatchDisassociateProjectAssetsCommand,
  BatchDisassociateProjectAssetsCommandInput,
  BatchDisassociateProjectAssetsCommandOutput,
} from "./commands/BatchDisassociateProjectAssetsCommand";
import {
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyAggregatesCommandInput,
  BatchGetAssetPropertyAggregatesCommandOutput,
} from "./commands/BatchGetAssetPropertyAggregatesCommand";
import {
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueCommandInput,
  BatchGetAssetPropertyValueCommandOutput,
} from "./commands/BatchGetAssetPropertyValueCommand";
import {
  BatchGetAssetPropertyValueHistoryCommand,
  BatchGetAssetPropertyValueHistoryCommandInput,
  BatchGetAssetPropertyValueHistoryCommandOutput,
} from "./commands/BatchGetAssetPropertyValueHistoryCommand";
import {
  BatchPutAssetPropertyValueCommand,
  BatchPutAssetPropertyValueCommandInput,
  BatchPutAssetPropertyValueCommandOutput,
} from "./commands/BatchPutAssetPropertyValueCommand";
import {
  CreateAccessPolicyCommand,
  CreateAccessPolicyCommandInput,
  CreateAccessPolicyCommandOutput,
} from "./commands/CreateAccessPolicyCommand";
import { CreateAssetCommand, CreateAssetCommandInput, CreateAssetCommandOutput } from "./commands/CreateAssetCommand";
import {
  CreateAssetModelCommand,
  CreateAssetModelCommandInput,
  CreateAssetModelCommandOutput,
} from "./commands/CreateAssetModelCommand";
import {
  CreateAssetModelCompositeModelCommand,
  CreateAssetModelCompositeModelCommandInput,
  CreateAssetModelCompositeModelCommandOutput,
} from "./commands/CreateAssetModelCompositeModelCommand";
import {
  CreateBulkImportJobCommand,
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "./commands/CreateBulkImportJobCommand";
import {
  CreateComputationModelCommand,
  CreateComputationModelCommandInput,
  CreateComputationModelCommandOutput,
} from "./commands/CreateComputationModelCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
import {
  CreateDatasetCommand,
  CreateDatasetCommandInput,
  CreateDatasetCommandOutput,
} from "./commands/CreateDatasetCommand";
import {
  CreateGatewayCommand,
  CreateGatewayCommandInput,
  CreateGatewayCommandOutput,
} from "./commands/CreateGatewayCommand";
import {
  CreatePortalCommand,
  CreatePortalCommandInput,
  CreatePortalCommandOutput,
} from "./commands/CreatePortalCommand";
import {
  CreateProjectCommand,
  CreateProjectCommandInput,
  CreateProjectCommandOutput,
} from "./commands/CreateProjectCommand";
import {
  DeleteAccessPolicyCommand,
  DeleteAccessPolicyCommandInput,
  DeleteAccessPolicyCommandOutput,
} from "./commands/DeleteAccessPolicyCommand";
import { DeleteAssetCommand, DeleteAssetCommandInput, DeleteAssetCommandOutput } from "./commands/DeleteAssetCommand";
import {
  DeleteAssetModelCommand,
  DeleteAssetModelCommandInput,
  DeleteAssetModelCommandOutput,
} from "./commands/DeleteAssetModelCommand";
import {
  DeleteAssetModelCompositeModelCommand,
  DeleteAssetModelCompositeModelCommandInput,
  DeleteAssetModelCompositeModelCommandOutput,
} from "./commands/DeleteAssetModelCompositeModelCommand";
import {
  DeleteComputationModelCommand,
  DeleteComputationModelCommandInput,
  DeleteComputationModelCommandOutput,
} from "./commands/DeleteComputationModelCommand";
import {
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
import {
  DeleteDatasetCommand,
  DeleteDatasetCommandInput,
  DeleteDatasetCommandOutput,
} from "./commands/DeleteDatasetCommand";
import {
  DeleteGatewayCommand,
  DeleteGatewayCommandInput,
  DeleteGatewayCommandOutput,
} from "./commands/DeleteGatewayCommand";
import {
  DeletePortalCommand,
  DeletePortalCommandInput,
  DeletePortalCommandOutput,
} from "./commands/DeletePortalCommand";
import {
  DeleteProjectCommand,
  DeleteProjectCommandInput,
  DeleteProjectCommandOutput,
} from "./commands/DeleteProjectCommand";
import {
  DeleteTimeSeriesCommand,
  DeleteTimeSeriesCommandInput,
  DeleteTimeSeriesCommandOutput,
} from "./commands/DeleteTimeSeriesCommand";
import {
  DescribeAccessPolicyCommand,
  DescribeAccessPolicyCommandInput,
  DescribeAccessPolicyCommandOutput,
} from "./commands/DescribeAccessPolicyCommand";
import {
  DescribeActionCommand,
  DescribeActionCommandInput,
  DescribeActionCommandOutput,
} from "./commands/DescribeActionCommand";
import {
  DescribeAssetCommand,
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
} from "./commands/DescribeAssetCommand";
import {
  DescribeAssetCompositeModelCommand,
  DescribeAssetCompositeModelCommandInput,
  DescribeAssetCompositeModelCommandOutput,
} from "./commands/DescribeAssetCompositeModelCommand";
import {
  DescribeAssetModelCommand,
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
} from "./commands/DescribeAssetModelCommand";
import {
  DescribeAssetModelCompositeModelCommand,
  DescribeAssetModelCompositeModelCommandInput,
  DescribeAssetModelCompositeModelCommandOutput,
} from "./commands/DescribeAssetModelCompositeModelCommand";
import {
  DescribeAssetPropertyCommand,
  DescribeAssetPropertyCommandInput,
  DescribeAssetPropertyCommandOutput,
} from "./commands/DescribeAssetPropertyCommand";
import {
  DescribeBulkImportJobCommand,
  DescribeBulkImportJobCommandInput,
  DescribeBulkImportJobCommandOutput,
} from "./commands/DescribeBulkImportJobCommand";
import {
  DescribeComputationModelCommand,
  DescribeComputationModelCommandInput,
  DescribeComputationModelCommandOutput,
} from "./commands/DescribeComputationModelCommand";
import {
  DescribeComputationModelExecutionSummaryCommand,
  DescribeComputationModelExecutionSummaryCommandInput,
  DescribeComputationModelExecutionSummaryCommandOutput,
} from "./commands/DescribeComputationModelExecutionSummaryCommand";
import {
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDatasetCommand,
  DescribeDatasetCommandInput,
  DescribeDatasetCommandOutput,
} from "./commands/DescribeDatasetCommand";
import {
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import {
  DescribeExecutionCommand,
  DescribeExecutionCommandInput,
  DescribeExecutionCommandOutput,
} from "./commands/DescribeExecutionCommand";
import {
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeGatewayCapabilityConfigurationCommandInput,
  DescribeGatewayCapabilityConfigurationCommandOutput,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import {
  DescribeGatewayCommand,
  DescribeGatewayCommandInput,
  DescribeGatewayCommandOutput,
} from "./commands/DescribeGatewayCommand";
import {
  DescribeLoggingOptionsCommand,
  DescribeLoggingOptionsCommandInput,
  DescribeLoggingOptionsCommandOutput,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  DescribePortalCommand,
  DescribePortalCommandInput,
  DescribePortalCommandOutput,
} from "./commands/DescribePortalCommand";
import {
  DescribeProjectCommand,
  DescribeProjectCommandInput,
  DescribeProjectCommandOutput,
} from "./commands/DescribeProjectCommand";
import {
  DescribeStorageConfigurationCommand,
  DescribeStorageConfigurationCommandInput,
  DescribeStorageConfigurationCommandOutput,
} from "./commands/DescribeStorageConfigurationCommand";
import {
  DescribeTimeSeriesCommand,
  DescribeTimeSeriesCommandInput,
  DescribeTimeSeriesCommandOutput,
} from "./commands/DescribeTimeSeriesCommand";
import {
  DisassociateAssetsCommand,
  DisassociateAssetsCommandInput,
  DisassociateAssetsCommandOutput,
} from "./commands/DisassociateAssetsCommand";
import {
  DisassociateTimeSeriesFromAssetPropertyCommand,
  DisassociateTimeSeriesFromAssetPropertyCommandInput,
  DisassociateTimeSeriesFromAssetPropertyCommandOutput,
} from "./commands/DisassociateTimeSeriesFromAssetPropertyCommand";
import {
  ExecuteActionCommand,
  ExecuteActionCommandInput,
  ExecuteActionCommandOutput,
} from "./commands/ExecuteActionCommand";
import {
  ExecuteQueryCommand,
  ExecuteQueryCommandInput,
  ExecuteQueryCommandOutput,
} from "./commands/ExecuteQueryCommand";
import {
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyAggregatesCommandInput,
  GetAssetPropertyAggregatesCommandOutput,
} from "./commands/GetAssetPropertyAggregatesCommand";
import {
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueCommandInput,
  GetAssetPropertyValueCommandOutput,
} from "./commands/GetAssetPropertyValueCommand";
import {
  GetAssetPropertyValueHistoryCommand,
  GetAssetPropertyValueHistoryCommandInput,
  GetAssetPropertyValueHistoryCommandOutput,
} from "./commands/GetAssetPropertyValueHistoryCommand";
import {
  GetInterpolatedAssetPropertyValuesCommand,
  GetInterpolatedAssetPropertyValuesCommandInput,
  GetInterpolatedAssetPropertyValuesCommandOutput,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import {
  InvokeAssistantCommand,
  InvokeAssistantCommandInput,
  InvokeAssistantCommandOutput,
} from "./commands/InvokeAssistantCommand";
import {
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import {
  ListAssetModelCompositeModelsCommand,
  ListAssetModelCompositeModelsCommandInput,
  ListAssetModelCompositeModelsCommandOutput,
} from "./commands/ListAssetModelCompositeModelsCommand";
import {
  ListAssetModelPropertiesCommand,
  ListAssetModelPropertiesCommandInput,
  ListAssetModelPropertiesCommandOutput,
} from "./commands/ListAssetModelPropertiesCommand";
import {
  ListAssetModelsCommand,
  ListAssetModelsCommandInput,
  ListAssetModelsCommandOutput,
} from "./commands/ListAssetModelsCommand";
import {
  ListAssetPropertiesCommand,
  ListAssetPropertiesCommandInput,
  ListAssetPropertiesCommandOutput,
} from "./commands/ListAssetPropertiesCommand";
import {
  ListAssetRelationshipsCommand,
  ListAssetRelationshipsCommandInput,
  ListAssetRelationshipsCommandOutput,
} from "./commands/ListAssetRelationshipsCommand";
import { ListAssetsCommand, ListAssetsCommandInput, ListAssetsCommandOutput } from "./commands/ListAssetsCommand";
import {
  ListAssociatedAssetsCommand,
  ListAssociatedAssetsCommandInput,
  ListAssociatedAssetsCommandOutput,
} from "./commands/ListAssociatedAssetsCommand";
import {
  ListBulkImportJobsCommand,
  ListBulkImportJobsCommandInput,
  ListBulkImportJobsCommandOutput,
} from "./commands/ListBulkImportJobsCommand";
import {
  ListCompositionRelationshipsCommand,
  ListCompositionRelationshipsCommandInput,
  ListCompositionRelationshipsCommandOutput,
} from "./commands/ListCompositionRelationshipsCommand";
import {
  ListComputationModelDataBindingUsagesCommand,
  ListComputationModelDataBindingUsagesCommandInput,
  ListComputationModelDataBindingUsagesCommandOutput,
} from "./commands/ListComputationModelDataBindingUsagesCommand";
import {
  ListComputationModelResolveToResourcesCommand,
  ListComputationModelResolveToResourcesCommandInput,
  ListComputationModelResolveToResourcesCommandOutput,
} from "./commands/ListComputationModelResolveToResourcesCommand";
import {
  ListComputationModelsCommand,
  ListComputationModelsCommandInput,
  ListComputationModelsCommandOutput,
} from "./commands/ListComputationModelsCommand";
import {
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
import {
  ListDatasetsCommand,
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
} from "./commands/ListDatasetsCommand";
import {
  ListExecutionsCommand,
  ListExecutionsCommandInput,
  ListExecutionsCommandOutput,
} from "./commands/ListExecutionsCommand";
import {
  ListGatewaysCommand,
  ListGatewaysCommandInput,
  ListGatewaysCommandOutput,
} from "./commands/ListGatewaysCommand";
import { ListPortalsCommand, ListPortalsCommandInput, ListPortalsCommandOutput } from "./commands/ListPortalsCommand";
import {
  ListProjectAssetsCommand,
  ListProjectAssetsCommandInput,
  ListProjectAssetsCommandOutput,
} from "./commands/ListProjectAssetsCommand";
import {
  ListProjectsCommand,
  ListProjectsCommandInput,
  ListProjectsCommandOutput,
} from "./commands/ListProjectsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTimeSeriesCommand,
  ListTimeSeriesCommandInput,
  ListTimeSeriesCommandOutput,
} from "./commands/ListTimeSeriesCommand";
import {
  PutDefaultEncryptionConfigurationCommand,
  PutDefaultEncryptionConfigurationCommandInput,
  PutDefaultEncryptionConfigurationCommandOutput,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  PutLoggingOptionsCommand,
  PutLoggingOptionsCommandInput,
  PutLoggingOptionsCommandOutput,
} from "./commands/PutLoggingOptionsCommand";
import {
  PutStorageConfigurationCommand,
  PutStorageConfigurationCommandInput,
  PutStorageConfigurationCommandOutput,
} from "./commands/PutStorageConfigurationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessPolicyCommand,
  UpdateAccessPolicyCommandInput,
  UpdateAccessPolicyCommandOutput,
} from "./commands/UpdateAccessPolicyCommand";
import { UpdateAssetCommand, UpdateAssetCommandInput, UpdateAssetCommandOutput } from "./commands/UpdateAssetCommand";
import {
  UpdateAssetModelCommand,
  UpdateAssetModelCommandInput,
  UpdateAssetModelCommandOutput,
} from "./commands/UpdateAssetModelCommand";
import {
  UpdateAssetModelCompositeModelCommand,
  UpdateAssetModelCompositeModelCommandInput,
  UpdateAssetModelCompositeModelCommandOutput,
} from "./commands/UpdateAssetModelCompositeModelCommand";
import {
  UpdateAssetPropertyCommand,
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import {
  UpdateComputationModelCommand,
  UpdateComputationModelCommandInput,
  UpdateComputationModelCommandOutput,
} from "./commands/UpdateComputationModelCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";
import {
  UpdateDatasetCommand,
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
} from "./commands/UpdateDatasetCommand";
import {
  UpdateGatewayCapabilityConfigurationCommand,
  UpdateGatewayCapabilityConfigurationCommandInput,
  UpdateGatewayCapabilityConfigurationCommandOutput,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import {
  UpdateGatewayCommand,
  UpdateGatewayCommandInput,
  UpdateGatewayCommandOutput,
} from "./commands/UpdateGatewayCommand";
import {
  UpdatePortalCommand,
  UpdatePortalCommandInput,
  UpdatePortalCommandOutput,
} from "./commands/UpdatePortalCommand";
import {
  UpdateProjectCommand,
  UpdateProjectCommandInput,
  UpdateProjectCommandOutput,
} from "./commands/UpdateProjectCommand";
import { IoTSiteWiseClient, IoTSiteWiseClientConfig } from "./IoTSiteWiseClient";

const commands = {
  AssociateAssetsCommand,
  AssociateTimeSeriesToAssetPropertyCommand,
  BatchAssociateProjectAssetsCommand,
  BatchDisassociateProjectAssetsCommand,
  BatchGetAssetPropertyAggregatesCommand,
  BatchGetAssetPropertyValueCommand,
  BatchGetAssetPropertyValueHistoryCommand,
  BatchPutAssetPropertyValueCommand,
  CreateAccessPolicyCommand,
  CreateAssetCommand,
  CreateAssetModelCommand,
  CreateAssetModelCompositeModelCommand,
  CreateBulkImportJobCommand,
  CreateComputationModelCommand,
  CreateDashboardCommand,
  CreateDatasetCommand,
  CreateGatewayCommand,
  CreatePortalCommand,
  CreateProjectCommand,
  DeleteAccessPolicyCommand,
  DeleteAssetCommand,
  DeleteAssetModelCommand,
  DeleteAssetModelCompositeModelCommand,
  DeleteComputationModelCommand,
  DeleteDashboardCommand,
  DeleteDatasetCommand,
  DeleteGatewayCommand,
  DeletePortalCommand,
  DeleteProjectCommand,
  DeleteTimeSeriesCommand,
  DescribeAccessPolicyCommand,
  DescribeActionCommand,
  DescribeAssetCommand,
  DescribeAssetCompositeModelCommand,
  DescribeAssetModelCommand,
  DescribeAssetModelCompositeModelCommand,
  DescribeAssetPropertyCommand,
  DescribeBulkImportJobCommand,
  DescribeComputationModelCommand,
  DescribeComputationModelExecutionSummaryCommand,
  DescribeDashboardCommand,
  DescribeDatasetCommand,
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeExecutionCommand,
  DescribeGatewayCommand,
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeLoggingOptionsCommand,
  DescribePortalCommand,
  DescribeProjectCommand,
  DescribeStorageConfigurationCommand,
  DescribeTimeSeriesCommand,
  DisassociateAssetsCommand,
  DisassociateTimeSeriesFromAssetPropertyCommand,
  ExecuteActionCommand,
  ExecuteQueryCommand,
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueHistoryCommand,
  GetInterpolatedAssetPropertyValuesCommand,
  InvokeAssistantCommand,
  ListAccessPoliciesCommand,
  ListActionsCommand,
  ListAssetModelCompositeModelsCommand,
  ListAssetModelPropertiesCommand,
  ListAssetModelsCommand,
  ListAssetPropertiesCommand,
  ListAssetRelationshipsCommand,
  ListAssetsCommand,
  ListAssociatedAssetsCommand,
  ListBulkImportJobsCommand,
  ListCompositionRelationshipsCommand,
  ListComputationModelDataBindingUsagesCommand,
  ListComputationModelResolveToResourcesCommand,
  ListComputationModelsCommand,
  ListDashboardsCommand,
  ListDatasetsCommand,
  ListExecutionsCommand,
  ListGatewaysCommand,
  ListPortalsCommand,
  ListProjectAssetsCommand,
  ListProjectsCommand,
  ListTagsForResourceCommand,
  ListTimeSeriesCommand,
  PutDefaultEncryptionConfigurationCommand,
  PutLoggingOptionsCommand,
  PutStorageConfigurationCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAccessPolicyCommand,
  UpdateAssetCommand,
  UpdateAssetModelCommand,
  UpdateAssetModelCompositeModelCommand,
  UpdateAssetPropertyCommand,
  UpdateComputationModelCommand,
  UpdateDashboardCommand,
  UpdateDatasetCommand,
  UpdateGatewayCommand,
  UpdateGatewayCapabilityConfigurationCommand,
  UpdatePortalCommand,
  UpdateProjectCommand,
};

export interface IoTSiteWise {
  /**
   * @see {@link AssociateAssetsCommand}
   */
  associateAssets(
    args: AssociateAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssetsCommandOutput>;
  associateAssets(args: AssociateAssetsCommandInput, cb: (err: any, data?: AssociateAssetsCommandOutput) => void): void;
  associateAssets(
    args: AssociateAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateTimeSeriesToAssetPropertyCommand}
   */
  associateTimeSeriesToAssetProperty(
    args: AssociateTimeSeriesToAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateTimeSeriesToAssetPropertyCommandOutput>;
  associateTimeSeriesToAssetProperty(
    args: AssociateTimeSeriesToAssetPropertyCommandInput,
    cb: (err: any, data?: AssociateTimeSeriesToAssetPropertyCommandOutput) => void
  ): void;
  associateTimeSeriesToAssetProperty(
    args: AssociateTimeSeriesToAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateTimeSeriesToAssetPropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchAssociateProjectAssetsCommand}
   */
  batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateProjectAssetsCommandOutput>;
  batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void
  ): void;
  batchAssociateProjectAssets(
    args: BatchAssociateProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateProjectAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchDisassociateProjectAssetsCommand}
   */
  batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateProjectAssetsCommandOutput>;
  batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void
  ): void;
  batchDisassociateProjectAssets(
    args: BatchDisassociateProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateProjectAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAssetPropertyAggregatesCommand}
   */
  batchGetAssetPropertyAggregates(
    args: BatchGetAssetPropertyAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAssetPropertyAggregatesCommandOutput>;
  batchGetAssetPropertyAggregates(
    args: BatchGetAssetPropertyAggregatesCommandInput,
    cb: (err: any, data?: BatchGetAssetPropertyAggregatesCommandOutput) => void
  ): void;
  batchGetAssetPropertyAggregates(
    args: BatchGetAssetPropertyAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAssetPropertyAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAssetPropertyValueCommand}
   */
  batchGetAssetPropertyValue(
    args: BatchGetAssetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAssetPropertyValueCommandOutput>;
  batchGetAssetPropertyValue(
    args: BatchGetAssetPropertyValueCommandInput,
    cb: (err: any, data?: BatchGetAssetPropertyValueCommandOutput) => void
  ): void;
  batchGetAssetPropertyValue(
    args: BatchGetAssetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAssetPropertyValueCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAssetPropertyValueHistoryCommand}
   */
  batchGetAssetPropertyValueHistory(
    args: BatchGetAssetPropertyValueHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGetAssetPropertyValueHistoryCommandOutput>;
  batchGetAssetPropertyValueHistory(
    args: BatchGetAssetPropertyValueHistoryCommandInput,
    cb: (err: any, data?: BatchGetAssetPropertyValueHistoryCommandOutput) => void
  ): void;
  batchGetAssetPropertyValueHistory(
    args: BatchGetAssetPropertyValueHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGetAssetPropertyValueHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchPutAssetPropertyValueCommand}
   */
  batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchPutAssetPropertyValueCommandOutput>;
  batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void
  ): void;
  batchPutAssetPropertyValue(
    args: BatchPutAssetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchPutAssetPropertyValueCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccessPolicyCommand}
   */
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessPolicyCommandOutput>;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;
  createAccessPolicy(
    args: CreateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetCommand}
   */
  createAsset(args: CreateAssetCommandInput, options?: __HttpHandlerOptions): Promise<CreateAssetCommandOutput>;
  createAsset(args: CreateAssetCommandInput, cb: (err: any, data?: CreateAssetCommandOutput) => void): void;
  createAsset(
    args: CreateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetModelCommand}
   */
  createAssetModel(
    args: CreateAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetModelCommandOutput>;
  createAssetModel(
    args: CreateAssetModelCommandInput,
    cb: (err: any, data?: CreateAssetModelCommandOutput) => void
  ): void;
  createAssetModel(
    args: CreateAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAssetModelCompositeModelCommand}
   */
  createAssetModelCompositeModel(
    args: CreateAssetModelCompositeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetModelCompositeModelCommandOutput>;
  createAssetModelCompositeModel(
    args: CreateAssetModelCompositeModelCommandInput,
    cb: (err: any, data?: CreateAssetModelCompositeModelCommandOutput) => void
  ): void;
  createAssetModelCompositeModel(
    args: CreateAssetModelCompositeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAssetModelCompositeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBulkImportJobCommand}
   */
  createBulkImportJob(
    args: CreateBulkImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBulkImportJobCommandOutput>;
  createBulkImportJob(
    args: CreateBulkImportJobCommandInput,
    cb: (err: any, data?: CreateBulkImportJobCommandOutput) => void
  ): void;
  createBulkImportJob(
    args: CreateBulkImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBulkImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateComputationModelCommand}
   */
  createComputationModel(
    args: CreateComputationModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateComputationModelCommandOutput>;
  createComputationModel(
    args: CreateComputationModelCommandInput,
    cb: (err: any, data?: CreateComputationModelCommandOutput) => void
  ): void;
  createComputationModel(
    args: CreateComputationModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateComputationModelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDashboardCommand}
   */
  createDashboard(
    args: CreateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDashboardCommandOutput>;
  createDashboard(args: CreateDashboardCommandInput, cb: (err: any, data?: CreateDashboardCommandOutput) => void): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
  createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(args: CreateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<CreateGatewayCommandOutput>;
  createGateway(args: CreateGatewayCommandInput, cb: (err: any, data?: CreateGatewayCommandOutput) => void): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalCommand}
   */
  createPortal(args: CreatePortalCommandInput, options?: __HttpHandlerOptions): Promise<CreatePortalCommandOutput>;
  createPortal(args: CreatePortalCommandInput, cb: (err: any, data?: CreatePortalCommandOutput) => void): void;
  createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
  createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
  createProject(
    args: CreateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccessPolicyCommand}
   */
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessPolicyCommandOutput>;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;
  deleteAccessPolicy(
    args: DeleteAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetCommand}
   */
  deleteAsset(args: DeleteAssetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssetCommandOutput>;
  deleteAsset(args: DeleteAssetCommandInput, cb: (err: any, data?: DeleteAssetCommandOutput) => void): void;
  deleteAsset(
    args: DeleteAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetModelCommand}
   */
  deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetModelCommandOutput>;
  deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    cb: (err: any, data?: DeleteAssetModelCommandOutput) => void
  ): void;
  deleteAssetModel(
    args: DeleteAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAssetModelCompositeModelCommand}
   */
  deleteAssetModelCompositeModel(
    args: DeleteAssetModelCompositeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetModelCompositeModelCommandOutput>;
  deleteAssetModelCompositeModel(
    args: DeleteAssetModelCompositeModelCommandInput,
    cb: (err: any, data?: DeleteAssetModelCompositeModelCommandOutput) => void
  ): void;
  deleteAssetModelCompositeModel(
    args: DeleteAssetModelCompositeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetModelCompositeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteComputationModelCommand}
   */
  deleteComputationModel(
    args: DeleteComputationModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteComputationModelCommandOutput>;
  deleteComputationModel(
    args: DeleteComputationModelCommandInput,
    cb: (err: any, data?: DeleteComputationModelCommandOutput) => void
  ): void;
  deleteComputationModel(
    args: DeleteComputationModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteComputationModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDashboardCommand}
   */
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDashboardCommandOutput>;
  deleteDashboard(args: DeleteDashboardCommandInput, cb: (err: any, data?: DeleteDashboardCommandOutput) => void): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(args: DeleteGatewayCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(args: DeleteGatewayCommandInput, cb: (err: any, data?: DeleteGatewayCommandOutput) => void): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalCommand}
   */
  deletePortal(args: DeletePortalCommandInput, options?: __HttpHandlerOptions): Promise<DeletePortalCommandOutput>;
  deletePortal(args: DeletePortalCommandInput, cb: (err: any, data?: DeletePortalCommandOutput) => void): void;
  deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
  deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
  deleteProject(
    args: DeleteProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTimeSeriesCommand}
   */
  deleteTimeSeries(): Promise<DeleteTimeSeriesCommandOutput>;
  deleteTimeSeries(
    args: DeleteTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTimeSeriesCommandOutput>;
  deleteTimeSeries(
    args: DeleteTimeSeriesCommandInput,
    cb: (err: any, data?: DeleteTimeSeriesCommandOutput) => void
  ): void;
  deleteTimeSeries(
    args: DeleteTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccessPolicyCommand}
   */
  describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccessPolicyCommandOutput>;
  describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void
  ): void;
  describeAccessPolicy(
    args: DescribeAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeActionCommand}
   */
  describeAction(
    args: DescribeActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeActionCommandOutput>;
  describeAction(args: DescribeActionCommandInput, cb: (err: any, data?: DescribeActionCommandOutput) => void): void;
  describeAction(
    args: DescribeActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetCommand}
   */
  describeAsset(args: DescribeAssetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAssetCommandOutput>;
  describeAsset(args: DescribeAssetCommandInput, cb: (err: any, data?: DescribeAssetCommandOutput) => void): void;
  describeAsset(
    args: DescribeAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetCompositeModelCommand}
   */
  describeAssetCompositeModel(
    args: DescribeAssetCompositeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetCompositeModelCommandOutput>;
  describeAssetCompositeModel(
    args: DescribeAssetCompositeModelCommandInput,
    cb: (err: any, data?: DescribeAssetCompositeModelCommandOutput) => void
  ): void;
  describeAssetCompositeModel(
    args: DescribeAssetCompositeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetCompositeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetModelCommand}
   */
  describeAssetModel(
    args: DescribeAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetModelCommandOutput>;
  describeAssetModel(
    args: DescribeAssetModelCommandInput,
    cb: (err: any, data?: DescribeAssetModelCommandOutput) => void
  ): void;
  describeAssetModel(
    args: DescribeAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetModelCompositeModelCommand}
   */
  describeAssetModelCompositeModel(
    args: DescribeAssetModelCompositeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetModelCompositeModelCommandOutput>;
  describeAssetModelCompositeModel(
    args: DescribeAssetModelCompositeModelCommandInput,
    cb: (err: any, data?: DescribeAssetModelCompositeModelCommandOutput) => void
  ): void;
  describeAssetModelCompositeModel(
    args: DescribeAssetModelCompositeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetModelCompositeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetPropertyCommand}
   */
  describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetPropertyCommandOutput>;
  describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void
  ): void;
  describeAssetProperty(
    args: DescribeAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetPropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBulkImportJobCommand}
   */
  describeBulkImportJob(
    args: DescribeBulkImportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBulkImportJobCommandOutput>;
  describeBulkImportJob(
    args: DescribeBulkImportJobCommandInput,
    cb: (err: any, data?: DescribeBulkImportJobCommandOutput) => void
  ): void;
  describeBulkImportJob(
    args: DescribeBulkImportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBulkImportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComputationModelCommand}
   */
  describeComputationModel(
    args: DescribeComputationModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputationModelCommandOutput>;
  describeComputationModel(
    args: DescribeComputationModelCommandInput,
    cb: (err: any, data?: DescribeComputationModelCommandOutput) => void
  ): void;
  describeComputationModel(
    args: DescribeComputationModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputationModelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeComputationModelExecutionSummaryCommand}
   */
  describeComputationModelExecutionSummary(
    args: DescribeComputationModelExecutionSummaryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeComputationModelExecutionSummaryCommandOutput>;
  describeComputationModelExecutionSummary(
    args: DescribeComputationModelExecutionSummaryCommandInput,
    cb: (err: any, data?: DescribeComputationModelExecutionSummaryCommandOutput) => void
  ): void;
  describeComputationModelExecutionSummary(
    args: DescribeComputationModelExecutionSummaryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeComputationModelExecutionSummaryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDashboardCommand}
   */
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDashboardCommandOutput>;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;
  describeDashboard(
    args: DescribeDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDatasetCommand}
   */
  describeDataset(
    args: DescribeDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDatasetCommandOutput>;
  describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
  describeDataset(
    args: DescribeDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeDefaultEncryptionConfigurationCommand}
   */
  describeDefaultEncryptionConfiguration(): Promise<DescribeDefaultEncryptionConfigurationCommandOutput>;
  describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeDefaultEncryptionConfigurationCommandOutput>;
  describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  describeDefaultEncryptionConfiguration(
    args: DescribeDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeDefaultEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeExecutionCommand}
   */
  describeExecution(
    args: DescribeExecutionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeExecutionCommandOutput>;
  describeExecution(
    args: DescribeExecutionCommandInput,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;
  describeExecution(
    args: DescribeExecutionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeExecutionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayCommand}
   */
  describeGateway(
    args: DescribeGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCommandOutput>;
  describeGateway(args: DescribeGatewayCommandInput, cb: (err: any, data?: DescribeGatewayCommandOutput) => void): void;
  describeGateway(
    args: DescribeGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGatewayCapabilityConfigurationCommand}
   */
  describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGatewayCapabilityConfigurationCommandOutput>;
  describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  describeGatewayCapabilityConfiguration(
    args: DescribeGatewayCapabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGatewayCapabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLoggingOptionsCommand}
   */
  describeLoggingOptions(): Promise<DescribeLoggingOptionsCommandOutput>;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingOptionsCommandOutput>;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;
  describeLoggingOptions(
    args: DescribeLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribePortalCommand}
   */
  describePortal(
    args: DescribePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePortalCommandOutput>;
  describePortal(args: DescribePortalCommandInput, cb: (err: any, data?: DescribePortalCommandOutput) => void): void;
  describePortal(
    args: DescribePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProjectCommand}
   */
  describeProject(
    args: DescribeProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProjectCommandOutput>;
  describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
  describeProject(
    args: DescribeProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeStorageConfigurationCommand}
   */
  describeStorageConfiguration(): Promise<DescribeStorageConfigurationCommandOutput>;
  describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeStorageConfigurationCommandOutput>;
  describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    cb: (err: any, data?: DescribeStorageConfigurationCommandOutput) => void
  ): void;
  describeStorageConfiguration(
    args: DescribeStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTimeSeriesCommand}
   */
  describeTimeSeries(): Promise<DescribeTimeSeriesCommandOutput>;
  describeTimeSeries(
    args: DescribeTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTimeSeriesCommandOutput>;
  describeTimeSeries(
    args: DescribeTimeSeriesCommandInput,
    cb: (err: any, data?: DescribeTimeSeriesCommandOutput) => void
  ): void;
  describeTimeSeries(
    args: DescribeTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateAssetsCommand}
   */
  disassociateAssets(
    args: DisassociateAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAssetsCommandOutput>;
  disassociateAssets(
    args: DisassociateAssetsCommandInput,
    cb: (err: any, data?: DisassociateAssetsCommandOutput) => void
  ): void;
  disassociateAssets(
    args: DisassociateAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateTimeSeriesFromAssetPropertyCommand}
   */
  disassociateTimeSeriesFromAssetProperty(
    args: DisassociateTimeSeriesFromAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateTimeSeriesFromAssetPropertyCommandOutput>;
  disassociateTimeSeriesFromAssetProperty(
    args: DisassociateTimeSeriesFromAssetPropertyCommandInput,
    cb: (err: any, data?: DisassociateTimeSeriesFromAssetPropertyCommandOutput) => void
  ): void;
  disassociateTimeSeriesFromAssetProperty(
    args: DisassociateTimeSeriesFromAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateTimeSeriesFromAssetPropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteActionCommand}
   */
  executeAction(args: ExecuteActionCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteActionCommandOutput>;
  executeAction(args: ExecuteActionCommandInput, cb: (err: any, data?: ExecuteActionCommandOutput) => void): void;
  executeAction(
    args: ExecuteActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteQueryCommand}
   */
  executeQuery(args: ExecuteQueryCommandInput, options?: __HttpHandlerOptions): Promise<ExecuteQueryCommandOutput>;
  executeQuery(args: ExecuteQueryCommandInput, cb: (err: any, data?: ExecuteQueryCommandOutput) => void): void;
  executeQuery(
    args: ExecuteQueryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetPropertyAggregatesCommand}
   */
  getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyAggregatesCommandOutput>;
  getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void
  ): void;
  getAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyAggregatesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetPropertyValueCommand}
   */
  getAssetPropertyValue(): Promise<GetAssetPropertyValueCommandOutput>;
  getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyValueCommandOutput>;
  getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void
  ): void;
  getAssetPropertyValue(
    args: GetAssetPropertyValueCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyValueCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAssetPropertyValueHistoryCommand}
   */
  getAssetPropertyValueHistory(): Promise<GetAssetPropertyValueHistoryCommandOutput>;
  getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAssetPropertyValueHistoryCommandOutput>;
  getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void
  ): void;
  getAssetPropertyValueHistory(
    args: GetAssetPropertyValueHistoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAssetPropertyValueHistoryCommandOutput) => void
  ): void;

  /**
   * @see {@link GetInterpolatedAssetPropertyValuesCommand}
   */
  getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetInterpolatedAssetPropertyValuesCommandOutput>;
  getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void
  ): void;
  getInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetInterpolatedAssetPropertyValuesCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeAssistantCommand}
   */
  invokeAssistant(
    args: InvokeAssistantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeAssistantCommandOutput>;
  invokeAssistant(args: InvokeAssistantCommandInput, cb: (err: any, data?: InvokeAssistantCommandOutput) => void): void;
  invokeAssistant(
    args: InvokeAssistantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeAssistantCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccessPoliciesCommand}
   */
  listAccessPolicies(): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessPoliciesCommandOutput>;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;
  listAccessPolicies(
    args: ListAccessPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessPoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListActionsCommand}
   */
  listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
  listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
  listActions(
    args: ListActionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetModelCompositeModelsCommand}
   */
  listAssetModelCompositeModels(
    args: ListAssetModelCompositeModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetModelCompositeModelsCommandOutput>;
  listAssetModelCompositeModels(
    args: ListAssetModelCompositeModelsCommandInput,
    cb: (err: any, data?: ListAssetModelCompositeModelsCommandOutput) => void
  ): void;
  listAssetModelCompositeModels(
    args: ListAssetModelCompositeModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetModelCompositeModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetModelPropertiesCommand}
   */
  listAssetModelProperties(
    args: ListAssetModelPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetModelPropertiesCommandOutput>;
  listAssetModelProperties(
    args: ListAssetModelPropertiesCommandInput,
    cb: (err: any, data?: ListAssetModelPropertiesCommandOutput) => void
  ): void;
  listAssetModelProperties(
    args: ListAssetModelPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetModelPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetModelsCommand}
   */
  listAssetModels(): Promise<ListAssetModelsCommandOutput>;
  listAssetModels(
    args: ListAssetModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetModelsCommandOutput>;
  listAssetModels(args: ListAssetModelsCommandInput, cb: (err: any, data?: ListAssetModelsCommandOutput) => void): void;
  listAssetModels(
    args: ListAssetModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetPropertiesCommand}
   */
  listAssetProperties(
    args: ListAssetPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetPropertiesCommandOutput>;
  listAssetProperties(
    args: ListAssetPropertiesCommandInput,
    cb: (err: any, data?: ListAssetPropertiesCommandOutput) => void
  ): void;
  listAssetProperties(
    args: ListAssetPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetRelationshipsCommand}
   */
  listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetRelationshipsCommandOutput>;
  listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void
  ): void;
  listAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssetsCommand}
   */
  listAssets(): Promise<ListAssetsCommandOutput>;
  listAssets(args: ListAssetsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssetsCommandOutput>;
  listAssets(args: ListAssetsCommandInput, cb: (err: any, data?: ListAssetsCommandOutput) => void): void;
  listAssets(
    args: ListAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAssociatedAssetsCommand}
   */
  listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssociatedAssetsCommandOutput>;
  listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void
  ): void;
  listAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAssociatedAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBulkImportJobsCommand}
   */
  listBulkImportJobs(): Promise<ListBulkImportJobsCommandOutput>;
  listBulkImportJobs(
    args: ListBulkImportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBulkImportJobsCommandOutput>;
  listBulkImportJobs(
    args: ListBulkImportJobsCommandInput,
    cb: (err: any, data?: ListBulkImportJobsCommandOutput) => void
  ): void;
  listBulkImportJobs(
    args: ListBulkImportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBulkImportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompositionRelationshipsCommand}
   */
  listCompositionRelationships(
    args: ListCompositionRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompositionRelationshipsCommandOutput>;
  listCompositionRelationships(
    args: ListCompositionRelationshipsCommandInput,
    cb: (err: any, data?: ListCompositionRelationshipsCommandOutput) => void
  ): void;
  listCompositionRelationships(
    args: ListCompositionRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompositionRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComputationModelDataBindingUsagesCommand}
   */
  listComputationModelDataBindingUsages(
    args: ListComputationModelDataBindingUsagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComputationModelDataBindingUsagesCommandOutput>;
  listComputationModelDataBindingUsages(
    args: ListComputationModelDataBindingUsagesCommandInput,
    cb: (err: any, data?: ListComputationModelDataBindingUsagesCommandOutput) => void
  ): void;
  listComputationModelDataBindingUsages(
    args: ListComputationModelDataBindingUsagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComputationModelDataBindingUsagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComputationModelResolveToResourcesCommand}
   */
  listComputationModelResolveToResources(
    args: ListComputationModelResolveToResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComputationModelResolveToResourcesCommandOutput>;
  listComputationModelResolveToResources(
    args: ListComputationModelResolveToResourcesCommandInput,
    cb: (err: any, data?: ListComputationModelResolveToResourcesCommandOutput) => void
  ): void;
  listComputationModelResolveToResources(
    args: ListComputationModelResolveToResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComputationModelResolveToResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListComputationModelsCommand}
   */
  listComputationModels(): Promise<ListComputationModelsCommandOutput>;
  listComputationModels(
    args: ListComputationModelsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComputationModelsCommandOutput>;
  listComputationModels(
    args: ListComputationModelsCommandInput,
    cb: (err: any, data?: ListComputationModelsCommandOutput) => void
  ): void;
  listComputationModels(
    args: ListComputationModelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComputationModelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDashboardsCommand}
   */
  listDashboards(
    args: ListDashboardsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDashboardsCommandOutput>;
  listDashboards(args: ListDashboardsCommandInput, cb: (err: any, data?: ListDashboardsCommandOutput) => void): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
  listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
  listDatasets(
    args: ListDatasetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListExecutionsCommand}
   */
  listExecutions(
    args: ListExecutionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListExecutionsCommandOutput>;
  listExecutions(args: ListExecutionsCommandInput, cb: (err: any, data?: ListExecutionsCommandOutput) => void): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, options?: __HttpHandlerOptions): Promise<ListGatewaysCommandOutput>;
  listGateways(args: ListGatewaysCommandInput, cb: (err: any, data?: ListGatewaysCommandOutput) => void): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalsCommand}
   */
  listPortals(): Promise<ListPortalsCommandOutput>;
  listPortals(args: ListPortalsCommandInput, options?: __HttpHandlerOptions): Promise<ListPortalsCommandOutput>;
  listPortals(args: ListPortalsCommandInput, cb: (err: any, data?: ListPortalsCommandOutput) => void): void;
  listPortals(
    args: ListPortalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectAssetsCommand}
   */
  listProjectAssets(
    args: ListProjectAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectAssetsCommandOutput>;
  listProjectAssets(
    args: ListProjectAssetsCommandInput,
    cb: (err: any, data?: ListProjectAssetsCommandOutput) => void
  ): void;
  listProjectAssets(
    args: ListProjectAssetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectAssetsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProjectsCommand}
   */
  listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
  listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
  listProjects(
    args: ListProjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTimeSeriesCommand}
   */
  listTimeSeries(): Promise<ListTimeSeriesCommandOutput>;
  listTimeSeries(
    args: ListTimeSeriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTimeSeriesCommandOutput>;
  listTimeSeries(args: ListTimeSeriesCommandInput, cb: (err: any, data?: ListTimeSeriesCommandOutput) => void): void;
  listTimeSeries(
    args: ListTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDefaultEncryptionConfigurationCommand}
   */
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDefaultEncryptionConfigurationCommandOutput>;
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;
  putDefaultEncryptionConfiguration(
    args: PutDefaultEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDefaultEncryptionConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLoggingOptionsCommand}
   */
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLoggingOptionsCommandOutput>;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;
  putLoggingOptions(
    args: PutLoggingOptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutStorageConfigurationCommand}
   */
  putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutStorageConfigurationCommandOutput>;
  putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    cb: (err: any, data?: PutStorageConfigurationCommandOutput) => void
  ): void;
  putStorageConfiguration(
    args: PutStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAccessPolicyCommand}
   */
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessPolicyCommandOutput>;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;
  updateAccessPolicy(
    args: UpdateAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetCommand}
   */
  updateAsset(args: UpdateAssetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAssetCommandOutput>;
  updateAsset(args: UpdateAssetCommandInput, cb: (err: any, data?: UpdateAssetCommandOutput) => void): void;
  updateAsset(
    args: UpdateAssetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetModelCommand}
   */
  updateAssetModel(
    args: UpdateAssetModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetModelCommandOutput>;
  updateAssetModel(
    args: UpdateAssetModelCommandInput,
    cb: (err: any, data?: UpdateAssetModelCommandOutput) => void
  ): void;
  updateAssetModel(
    args: UpdateAssetModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetModelCompositeModelCommand}
   */
  updateAssetModelCompositeModel(
    args: UpdateAssetModelCompositeModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetModelCompositeModelCommandOutput>;
  updateAssetModelCompositeModel(
    args: UpdateAssetModelCompositeModelCommandInput,
    cb: (err: any, data?: UpdateAssetModelCompositeModelCommandOutput) => void
  ): void;
  updateAssetModelCompositeModel(
    args: UpdateAssetModelCompositeModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetModelCompositeModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAssetPropertyCommand}
   */
  updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetPropertyCommandOutput>;
  updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void
  ): void;
  updateAssetProperty(
    args: UpdateAssetPropertyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAssetPropertyCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateComputationModelCommand}
   */
  updateComputationModel(
    args: UpdateComputationModelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateComputationModelCommandOutput>;
  updateComputationModel(
    args: UpdateComputationModelCommandInput,
    cb: (err: any, data?: UpdateComputationModelCommandOutput) => void
  ): void;
  updateComputationModel(
    args: UpdateComputationModelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateComputationModelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDashboardCommand}
   */
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDashboardCommandOutput>;
  updateDashboard(args: UpdateDashboardCommandInput, cb: (err: any, data?: UpdateDashboardCommandOutput) => void): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(args: UpdateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetCommandOutput>;
  updateDataset(args: UpdateDatasetCommandInput, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(args: UpdateGatewayCommandInput, options?: __HttpHandlerOptions): Promise<UpdateGatewayCommandOutput>;
  updateGateway(args: UpdateGatewayCommandInput, cb: (err: any, data?: UpdateGatewayCommandOutput) => void): void;
  updateGateway(
    args: UpdateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCapabilityConfigurationCommand}
   */
  updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCapabilityConfigurationCommandOutput>;
  updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void
  ): void;
  updateGatewayCapabilityConfiguration(
    args: UpdateGatewayCapabilityConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGatewayCapabilityConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdatePortalCommand}
   */
  updatePortal(args: UpdatePortalCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePortalCommandOutput>;
  updatePortal(args: UpdatePortalCommandInput, cb: (err: any, data?: UpdatePortalCommandOutput) => void): void;
  updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
  updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
}

/**
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export class IoTSiteWise extends IoTSiteWiseClient implements IoTSiteWise {}
createAggregatedClient(commands, IoTSiteWise);
