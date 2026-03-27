// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";
import type { WaiterResult } from "@smithy/util-waiter";

import {
  type AssociateAssetsCommandInput,
  type AssociateAssetsCommandOutput,
  AssociateAssetsCommand,
} from "./commands/AssociateAssetsCommand";
import {
  type AssociateTimeSeriesToAssetPropertyCommandInput,
  type AssociateTimeSeriesToAssetPropertyCommandOutput,
  AssociateTimeSeriesToAssetPropertyCommand,
} from "./commands/AssociateTimeSeriesToAssetPropertyCommand";
import {
  type BatchAssociateProjectAssetsCommandInput,
  type BatchAssociateProjectAssetsCommandOutput,
  BatchAssociateProjectAssetsCommand,
} from "./commands/BatchAssociateProjectAssetsCommand";
import {
  type BatchDisassociateProjectAssetsCommandInput,
  type BatchDisassociateProjectAssetsCommandOutput,
  BatchDisassociateProjectAssetsCommand,
} from "./commands/BatchDisassociateProjectAssetsCommand";
import {
  type BatchGetAssetPropertyAggregatesCommandInput,
  type BatchGetAssetPropertyAggregatesCommandOutput,
  BatchGetAssetPropertyAggregatesCommand,
} from "./commands/BatchGetAssetPropertyAggregatesCommand";
import {
  type BatchGetAssetPropertyValueCommandInput,
  type BatchGetAssetPropertyValueCommandOutput,
  BatchGetAssetPropertyValueCommand,
} from "./commands/BatchGetAssetPropertyValueCommand";
import {
  type BatchGetAssetPropertyValueHistoryCommandInput,
  type BatchGetAssetPropertyValueHistoryCommandOutput,
  BatchGetAssetPropertyValueHistoryCommand,
} from "./commands/BatchGetAssetPropertyValueHistoryCommand";
import {
  type BatchPutAssetPropertyValueCommandInput,
  type BatchPutAssetPropertyValueCommandOutput,
  BatchPutAssetPropertyValueCommand,
} from "./commands/BatchPutAssetPropertyValueCommand";
import {
  type CreateAccessPolicyCommandInput,
  type CreateAccessPolicyCommandOutput,
  CreateAccessPolicyCommand,
} from "./commands/CreateAccessPolicyCommand";
import {
  type CreateAssetCommandInput,
  type CreateAssetCommandOutput,
  CreateAssetCommand,
} from "./commands/CreateAssetCommand";
import {
  type CreateAssetModelCommandInput,
  type CreateAssetModelCommandOutput,
  CreateAssetModelCommand,
} from "./commands/CreateAssetModelCommand";
import {
  type CreateAssetModelCompositeModelCommandInput,
  type CreateAssetModelCompositeModelCommandOutput,
  CreateAssetModelCompositeModelCommand,
} from "./commands/CreateAssetModelCompositeModelCommand";
import {
  type CreateBulkImportJobCommandInput,
  type CreateBulkImportJobCommandOutput,
  CreateBulkImportJobCommand,
} from "./commands/CreateBulkImportJobCommand";
import {
  type CreateComputationModelCommandInput,
  type CreateComputationModelCommandOutput,
  CreateComputationModelCommand,
} from "./commands/CreateComputationModelCommand";
import {
  type CreateDashboardCommandInput,
  type CreateDashboardCommandOutput,
  CreateDashboardCommand,
} from "./commands/CreateDashboardCommand";
import {
  type CreateDatasetCommandInput,
  type CreateDatasetCommandOutput,
  CreateDatasetCommand,
} from "./commands/CreateDatasetCommand";
import {
  type CreateGatewayCommandInput,
  type CreateGatewayCommandOutput,
  CreateGatewayCommand,
} from "./commands/CreateGatewayCommand";
import {
  type CreatePortalCommandInput,
  type CreatePortalCommandOutput,
  CreatePortalCommand,
} from "./commands/CreatePortalCommand";
import {
  type CreateProjectCommandInput,
  type CreateProjectCommandOutput,
  CreateProjectCommand,
} from "./commands/CreateProjectCommand";
import {
  type DeleteAccessPolicyCommandInput,
  type DeleteAccessPolicyCommandOutput,
  DeleteAccessPolicyCommand,
} from "./commands/DeleteAccessPolicyCommand";
import {
  type DeleteAssetCommandInput,
  type DeleteAssetCommandOutput,
  DeleteAssetCommand,
} from "./commands/DeleteAssetCommand";
import {
  type DeleteAssetModelCommandInput,
  type DeleteAssetModelCommandOutput,
  DeleteAssetModelCommand,
} from "./commands/DeleteAssetModelCommand";
import {
  type DeleteAssetModelCompositeModelCommandInput,
  type DeleteAssetModelCompositeModelCommandOutput,
  DeleteAssetModelCompositeModelCommand,
} from "./commands/DeleteAssetModelCompositeModelCommand";
import {
  type DeleteAssetModelInterfaceRelationshipCommandInput,
  type DeleteAssetModelInterfaceRelationshipCommandOutput,
  DeleteAssetModelInterfaceRelationshipCommand,
} from "./commands/DeleteAssetModelInterfaceRelationshipCommand";
import {
  type DeleteComputationModelCommandInput,
  type DeleteComputationModelCommandOutput,
  DeleteComputationModelCommand,
} from "./commands/DeleteComputationModelCommand";
import {
  type DeleteDashboardCommandInput,
  type DeleteDashboardCommandOutput,
  DeleteDashboardCommand,
} from "./commands/DeleteDashboardCommand";
import {
  type DeleteDatasetCommandInput,
  type DeleteDatasetCommandOutput,
  DeleteDatasetCommand,
} from "./commands/DeleteDatasetCommand";
import {
  type DeleteGatewayCommandInput,
  type DeleteGatewayCommandOutput,
  DeleteGatewayCommand,
} from "./commands/DeleteGatewayCommand";
import {
  type DeletePortalCommandInput,
  type DeletePortalCommandOutput,
  DeletePortalCommand,
} from "./commands/DeletePortalCommand";
import {
  type DeleteProjectCommandInput,
  type DeleteProjectCommandOutput,
  DeleteProjectCommand,
} from "./commands/DeleteProjectCommand";
import {
  type DeleteTimeSeriesCommandInput,
  type DeleteTimeSeriesCommandOutput,
  DeleteTimeSeriesCommand,
} from "./commands/DeleteTimeSeriesCommand";
import {
  type DescribeAccessPolicyCommandInput,
  type DescribeAccessPolicyCommandOutput,
  DescribeAccessPolicyCommand,
} from "./commands/DescribeAccessPolicyCommand";
import {
  type DescribeActionCommandInput,
  type DescribeActionCommandOutput,
  DescribeActionCommand,
} from "./commands/DescribeActionCommand";
import {
  type DescribeAssetCommandInput,
  type DescribeAssetCommandOutput,
  DescribeAssetCommand,
} from "./commands/DescribeAssetCommand";
import {
  type DescribeAssetCompositeModelCommandInput,
  type DescribeAssetCompositeModelCommandOutput,
  DescribeAssetCompositeModelCommand,
} from "./commands/DescribeAssetCompositeModelCommand";
import {
  type DescribeAssetModelCommandInput,
  type DescribeAssetModelCommandOutput,
  DescribeAssetModelCommand,
} from "./commands/DescribeAssetModelCommand";
import {
  type DescribeAssetModelCompositeModelCommandInput,
  type DescribeAssetModelCompositeModelCommandOutput,
  DescribeAssetModelCompositeModelCommand,
} from "./commands/DescribeAssetModelCompositeModelCommand";
import {
  type DescribeAssetModelInterfaceRelationshipCommandInput,
  type DescribeAssetModelInterfaceRelationshipCommandOutput,
  DescribeAssetModelInterfaceRelationshipCommand,
} from "./commands/DescribeAssetModelInterfaceRelationshipCommand";
import {
  type DescribeAssetPropertyCommandInput,
  type DescribeAssetPropertyCommandOutput,
  DescribeAssetPropertyCommand,
} from "./commands/DescribeAssetPropertyCommand";
import {
  type DescribeBulkImportJobCommandInput,
  type DescribeBulkImportJobCommandOutput,
  DescribeBulkImportJobCommand,
} from "./commands/DescribeBulkImportJobCommand";
import {
  type DescribeComputationModelCommandInput,
  type DescribeComputationModelCommandOutput,
  DescribeComputationModelCommand,
} from "./commands/DescribeComputationModelCommand";
import {
  type DescribeComputationModelExecutionSummaryCommandInput,
  type DescribeComputationModelExecutionSummaryCommandOutput,
  DescribeComputationModelExecutionSummaryCommand,
} from "./commands/DescribeComputationModelExecutionSummaryCommand";
import {
  type DescribeDashboardCommandInput,
  type DescribeDashboardCommandOutput,
  DescribeDashboardCommand,
} from "./commands/DescribeDashboardCommand";
import {
  type DescribeDatasetCommandInput,
  type DescribeDatasetCommandOutput,
  DescribeDatasetCommand,
} from "./commands/DescribeDatasetCommand";
import {
  type DescribeDefaultEncryptionConfigurationCommandInput,
  type DescribeDefaultEncryptionConfigurationCommandOutput,
  DescribeDefaultEncryptionConfigurationCommand,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
import {
  type DescribeExecutionCommandInput,
  type DescribeExecutionCommandOutput,
  DescribeExecutionCommand,
} from "./commands/DescribeExecutionCommand";
import {
  type DescribeGatewayCapabilityConfigurationCommandInput,
  type DescribeGatewayCapabilityConfigurationCommandOutput,
  DescribeGatewayCapabilityConfigurationCommand,
} from "./commands/DescribeGatewayCapabilityConfigurationCommand";
import {
  type DescribeGatewayCommandInput,
  type DescribeGatewayCommandOutput,
  DescribeGatewayCommand,
} from "./commands/DescribeGatewayCommand";
import {
  type DescribeLoggingOptionsCommandInput,
  type DescribeLoggingOptionsCommandOutput,
  DescribeLoggingOptionsCommand,
} from "./commands/DescribeLoggingOptionsCommand";
import {
  type DescribePortalCommandInput,
  type DescribePortalCommandOutput,
  DescribePortalCommand,
} from "./commands/DescribePortalCommand";
import {
  type DescribeProjectCommandInput,
  type DescribeProjectCommandOutput,
  DescribeProjectCommand,
} from "./commands/DescribeProjectCommand";
import {
  type DescribeStorageConfigurationCommandInput,
  type DescribeStorageConfigurationCommandOutput,
  DescribeStorageConfigurationCommand,
} from "./commands/DescribeStorageConfigurationCommand";
import {
  type DescribeTimeSeriesCommandInput,
  type DescribeTimeSeriesCommandOutput,
  DescribeTimeSeriesCommand,
} from "./commands/DescribeTimeSeriesCommand";
import {
  type DisassociateAssetsCommandInput,
  type DisassociateAssetsCommandOutput,
  DisassociateAssetsCommand,
} from "./commands/DisassociateAssetsCommand";
import {
  type DisassociateTimeSeriesFromAssetPropertyCommandInput,
  type DisassociateTimeSeriesFromAssetPropertyCommandOutput,
  DisassociateTimeSeriesFromAssetPropertyCommand,
} from "./commands/DisassociateTimeSeriesFromAssetPropertyCommand";
import {
  type ExecuteActionCommandInput,
  type ExecuteActionCommandOutput,
  ExecuteActionCommand,
} from "./commands/ExecuteActionCommand";
import {
  type ExecuteQueryCommandInput,
  type ExecuteQueryCommandOutput,
  ExecuteQueryCommand,
} from "./commands/ExecuteQueryCommand";
import {
  type GetAssetPropertyAggregatesCommandInput,
  type GetAssetPropertyAggregatesCommandOutput,
  GetAssetPropertyAggregatesCommand,
} from "./commands/GetAssetPropertyAggregatesCommand";
import {
  type GetAssetPropertyValueCommandInput,
  type GetAssetPropertyValueCommandOutput,
  GetAssetPropertyValueCommand,
} from "./commands/GetAssetPropertyValueCommand";
import {
  type GetAssetPropertyValueHistoryCommandInput,
  type GetAssetPropertyValueHistoryCommandOutput,
  GetAssetPropertyValueHistoryCommand,
} from "./commands/GetAssetPropertyValueHistoryCommand";
import {
  type GetInterpolatedAssetPropertyValuesCommandInput,
  type GetInterpolatedAssetPropertyValuesCommandOutput,
  GetInterpolatedAssetPropertyValuesCommand,
} from "./commands/GetInterpolatedAssetPropertyValuesCommand";
import {
  type InvokeAssistantCommandInput,
  type InvokeAssistantCommandOutput,
  InvokeAssistantCommand,
} from "./commands/InvokeAssistantCommand";
import {
  type ListAccessPoliciesCommandInput,
  type ListAccessPoliciesCommandOutput,
  ListAccessPoliciesCommand,
} from "./commands/ListAccessPoliciesCommand";
import {
  type ListActionsCommandInput,
  type ListActionsCommandOutput,
  ListActionsCommand,
} from "./commands/ListActionsCommand";
import {
  type ListAssetModelCompositeModelsCommandInput,
  type ListAssetModelCompositeModelsCommandOutput,
  ListAssetModelCompositeModelsCommand,
} from "./commands/ListAssetModelCompositeModelsCommand";
import {
  type ListAssetModelPropertiesCommandInput,
  type ListAssetModelPropertiesCommandOutput,
  ListAssetModelPropertiesCommand,
} from "./commands/ListAssetModelPropertiesCommand";
import {
  type ListAssetModelsCommandInput,
  type ListAssetModelsCommandOutput,
  ListAssetModelsCommand,
} from "./commands/ListAssetModelsCommand";
import {
  type ListAssetPropertiesCommandInput,
  type ListAssetPropertiesCommandOutput,
  ListAssetPropertiesCommand,
} from "./commands/ListAssetPropertiesCommand";
import {
  type ListAssetRelationshipsCommandInput,
  type ListAssetRelationshipsCommandOutput,
  ListAssetRelationshipsCommand,
} from "./commands/ListAssetRelationshipsCommand";
import {
  type ListAssetsCommandInput,
  type ListAssetsCommandOutput,
  ListAssetsCommand,
} from "./commands/ListAssetsCommand";
import {
  type ListAssociatedAssetsCommandInput,
  type ListAssociatedAssetsCommandOutput,
  ListAssociatedAssetsCommand,
} from "./commands/ListAssociatedAssetsCommand";
import {
  type ListBulkImportJobsCommandInput,
  type ListBulkImportJobsCommandOutput,
  ListBulkImportJobsCommand,
} from "./commands/ListBulkImportJobsCommand";
import {
  type ListCompositionRelationshipsCommandInput,
  type ListCompositionRelationshipsCommandOutput,
  ListCompositionRelationshipsCommand,
} from "./commands/ListCompositionRelationshipsCommand";
import {
  type ListComputationModelDataBindingUsagesCommandInput,
  type ListComputationModelDataBindingUsagesCommandOutput,
  ListComputationModelDataBindingUsagesCommand,
} from "./commands/ListComputationModelDataBindingUsagesCommand";
import {
  type ListComputationModelResolveToResourcesCommandInput,
  type ListComputationModelResolveToResourcesCommandOutput,
  ListComputationModelResolveToResourcesCommand,
} from "./commands/ListComputationModelResolveToResourcesCommand";
import {
  type ListComputationModelsCommandInput,
  type ListComputationModelsCommandOutput,
  ListComputationModelsCommand,
} from "./commands/ListComputationModelsCommand";
import {
  type ListDashboardsCommandInput,
  type ListDashboardsCommandOutput,
  ListDashboardsCommand,
} from "./commands/ListDashboardsCommand";
import {
  type ListDatasetsCommandInput,
  type ListDatasetsCommandOutput,
  ListDatasetsCommand,
} from "./commands/ListDatasetsCommand";
import {
  type ListExecutionsCommandInput,
  type ListExecutionsCommandOutput,
  ListExecutionsCommand,
} from "./commands/ListExecutionsCommand";
import {
  type ListGatewaysCommandInput,
  type ListGatewaysCommandOutput,
  ListGatewaysCommand,
} from "./commands/ListGatewaysCommand";
import {
  type ListInterfaceRelationshipsCommandInput,
  type ListInterfaceRelationshipsCommandOutput,
  ListInterfaceRelationshipsCommand,
} from "./commands/ListInterfaceRelationshipsCommand";
import {
  type ListPortalsCommandInput,
  type ListPortalsCommandOutput,
  ListPortalsCommand,
} from "./commands/ListPortalsCommand";
import {
  type ListProjectAssetsCommandInput,
  type ListProjectAssetsCommandOutput,
  ListProjectAssetsCommand,
} from "./commands/ListProjectAssetsCommand";
import {
  type ListProjectsCommandInput,
  type ListProjectsCommandOutput,
  ListProjectsCommand,
} from "./commands/ListProjectsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListTimeSeriesCommandInput,
  type ListTimeSeriesCommandOutput,
  ListTimeSeriesCommand,
} from "./commands/ListTimeSeriesCommand";
import {
  type PutAssetModelInterfaceRelationshipCommandInput,
  type PutAssetModelInterfaceRelationshipCommandOutput,
  PutAssetModelInterfaceRelationshipCommand,
} from "./commands/PutAssetModelInterfaceRelationshipCommand";
import {
  type PutDefaultEncryptionConfigurationCommandInput,
  type PutDefaultEncryptionConfigurationCommandOutput,
  PutDefaultEncryptionConfigurationCommand,
} from "./commands/PutDefaultEncryptionConfigurationCommand";
import {
  type PutLoggingOptionsCommandInput,
  type PutLoggingOptionsCommandOutput,
  PutLoggingOptionsCommand,
} from "./commands/PutLoggingOptionsCommand";
import {
  type PutStorageConfigurationCommandInput,
  type PutStorageConfigurationCommandOutput,
  PutStorageConfigurationCommand,
} from "./commands/PutStorageConfigurationCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateAccessPolicyCommandInput,
  type UpdateAccessPolicyCommandOutput,
  UpdateAccessPolicyCommand,
} from "./commands/UpdateAccessPolicyCommand";
import {
  type UpdateAssetCommandInput,
  type UpdateAssetCommandOutput,
  UpdateAssetCommand,
} from "./commands/UpdateAssetCommand";
import {
  type UpdateAssetModelCommandInput,
  type UpdateAssetModelCommandOutput,
  UpdateAssetModelCommand,
} from "./commands/UpdateAssetModelCommand";
import {
  type UpdateAssetModelCompositeModelCommandInput,
  type UpdateAssetModelCompositeModelCommandOutput,
  UpdateAssetModelCompositeModelCommand,
} from "./commands/UpdateAssetModelCompositeModelCommand";
import {
  type UpdateAssetPropertyCommandInput,
  type UpdateAssetPropertyCommandOutput,
  UpdateAssetPropertyCommand,
} from "./commands/UpdateAssetPropertyCommand";
import {
  type UpdateComputationModelCommandInput,
  type UpdateComputationModelCommandOutput,
  UpdateComputationModelCommand,
} from "./commands/UpdateComputationModelCommand";
import {
  type UpdateDashboardCommandInput,
  type UpdateDashboardCommandOutput,
  UpdateDashboardCommand,
} from "./commands/UpdateDashboardCommand";
import {
  type UpdateDatasetCommandInput,
  type UpdateDatasetCommandOutput,
  UpdateDatasetCommand,
} from "./commands/UpdateDatasetCommand";
import {
  type UpdateGatewayCapabilityConfigurationCommandInput,
  type UpdateGatewayCapabilityConfigurationCommandOutput,
  UpdateGatewayCapabilityConfigurationCommand,
} from "./commands/UpdateGatewayCapabilityConfigurationCommand";
import {
  type UpdateGatewayCommandInput,
  type UpdateGatewayCommandOutput,
  UpdateGatewayCommand,
} from "./commands/UpdateGatewayCommand";
import {
  type UpdatePortalCommandInput,
  type UpdatePortalCommandOutput,
  UpdatePortalCommand,
} from "./commands/UpdatePortalCommand";
import {
  type UpdateProjectCommandInput,
  type UpdateProjectCommandOutput,
  UpdateProjectCommand,
} from "./commands/UpdateProjectCommand";
import { IoTSiteWiseClient } from "./IoTSiteWiseClient";
import { paginateBatchGetAssetPropertyAggregates } from "./pagination/BatchGetAssetPropertyAggregatesPaginator";
import { paginateBatchGetAssetPropertyValueHistory } from "./pagination/BatchGetAssetPropertyValueHistoryPaginator";
import { paginateBatchGetAssetPropertyValue } from "./pagination/BatchGetAssetPropertyValuePaginator";
import { paginateExecuteQuery } from "./pagination/ExecuteQueryPaginator";
import { paginateGetAssetPropertyAggregates } from "./pagination/GetAssetPropertyAggregatesPaginator";
import { paginateGetAssetPropertyValueHistory } from "./pagination/GetAssetPropertyValueHistoryPaginator";
import { paginateGetInterpolatedAssetPropertyValues } from "./pagination/GetInterpolatedAssetPropertyValuesPaginator";
import { paginateListAccessPolicies } from "./pagination/ListAccessPoliciesPaginator";
import { paginateListAssetModelCompositeModels } from "./pagination/ListAssetModelCompositeModelsPaginator";
import { paginateListAssetModelProperties } from "./pagination/ListAssetModelPropertiesPaginator";
import { paginateListAssetModels } from "./pagination/ListAssetModelsPaginator";
import { paginateListAssetProperties } from "./pagination/ListAssetPropertiesPaginator";
import { paginateListAssetRelationships } from "./pagination/ListAssetRelationshipsPaginator";
import { paginateListAssets } from "./pagination/ListAssetsPaginator";
import { paginateListAssociatedAssets } from "./pagination/ListAssociatedAssetsPaginator";
import { paginateListBulkImportJobs } from "./pagination/ListBulkImportJobsPaginator";
import { paginateListCompositionRelationships } from "./pagination/ListCompositionRelationshipsPaginator";
import {
  paginateListComputationModelDataBindingUsages,
} from "./pagination/ListComputationModelDataBindingUsagesPaginator";
import {
  paginateListComputationModelResolveToResources,
} from "./pagination/ListComputationModelResolveToResourcesPaginator";
import { paginateListComputationModels } from "./pagination/ListComputationModelsPaginator";
import { paginateListDashboards } from "./pagination/ListDashboardsPaginator";
import { paginateListDatasets } from "./pagination/ListDatasetsPaginator";
import { paginateListExecutions } from "./pagination/ListExecutionsPaginator";
import { paginateListGateways } from "./pagination/ListGatewaysPaginator";
import { paginateListInterfaceRelationships } from "./pagination/ListInterfaceRelationshipsPaginator";
import { paginateListPortals } from "./pagination/ListPortalsPaginator";
import { paginateListProjectAssets } from "./pagination/ListProjectAssetsPaginator";
import { paginateListProjects } from "./pagination/ListProjectsPaginator";
import { paginateListTimeSeries } from "./pagination/ListTimeSeriesPaginator";
import { waitUntilAssetActive } from "./waiters/waitForAssetActive";
import { waitUntilAssetModelActive } from "./waiters/waitForAssetModelActive";
import { waitUntilAssetModelNotExists } from "./waiters/waitForAssetModelNotExists";
import { waitUntilAssetNotExists } from "./waiters/waitForAssetNotExists";
import { waitUntilPortalActive } from "./waiters/waitForPortalActive";
import { waitUntilPortalNotExists } from "./waiters/waitForPortalNotExists";

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
  DeleteAssetModelInterfaceRelationshipCommand,
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
  DescribeAssetModelInterfaceRelationshipCommand,
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
  ListInterfaceRelationshipsCommand,
  ListPortalsCommand,
  ListProjectAssetsCommand,
  ListProjectsCommand,
  ListTagsForResourceCommand,
  ListTimeSeriesCommand,
  PutAssetModelInterfaceRelationshipCommand,
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
const paginators = {
  paginateBatchGetAssetPropertyAggregates,
  paginateBatchGetAssetPropertyValue,
  paginateBatchGetAssetPropertyValueHistory,
  paginateExecuteQuery,
  paginateGetAssetPropertyAggregates,
  paginateGetAssetPropertyValueHistory,
  paginateGetInterpolatedAssetPropertyValues,
  paginateListAccessPolicies,
  paginateListAssetModelCompositeModels,
  paginateListAssetModelProperties,
  paginateListAssetModels,
  paginateListAssetProperties,
  paginateListAssetRelationships,
  paginateListAssets,
  paginateListAssociatedAssets,
  paginateListBulkImportJobs,
  paginateListCompositionRelationships,
  paginateListComputationModelDataBindingUsages,
  paginateListComputationModelResolveToResources,
  paginateListComputationModels,
  paginateListDashboards,
  paginateListDatasets,
  paginateListExecutions,
  paginateListGateways,
  paginateListInterfaceRelationships,
  paginateListPortals,
  paginateListProjectAssets,
  paginateListProjects,
  paginateListTimeSeries,
};
const waiters = {
  waitUntilAssetActive,
  waitUntilAssetNotExists,
  waitUntilAssetModelActive,
  waitUntilAssetModelNotExists,
  waitUntilPortalActive,
  waitUntilPortalNotExists,
};

export interface IoTSiteWise {
  /**
   * @see {@link AssociateAssetsCommand}
   */
  associateAssets(
    args: AssociateAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAssetsCommandOutput>;
  associateAssets(
    args: AssociateAssetsCommandInput,
    cb: (err: any, data?: AssociateAssetsCommandOutput) => void
  ): void;
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
  createAsset(
    args: CreateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAssetCommandOutput>;
  createAsset(
    args: CreateAssetCommandInput,
    cb: (err: any, data?: CreateAssetCommandOutput) => void
  ): void;
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
  createDashboard(
    args: CreateDashboardCommandInput,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;
  createDashboard(
    args: CreateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDatasetCommand}
   */
  createDataset(
    args: CreateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDatasetCommandOutput>;
  createDataset(
    args: CreateDatasetCommandInput,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;
  createDataset(
    args: CreateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateGatewayCommand}
   */
  createGateway(
    args: CreateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateGatewayCommandOutput>;
  createGateway(
    args: CreateGatewayCommandInput,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;
  createGateway(
    args: CreateGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePortalCommand}
   */
  createPortal(
    args: CreatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePortalCommandOutput>;
  createPortal(
    args: CreatePortalCommandInput,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;
  createPortal(
    args: CreatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProjectCommand}
   */
  createProject(
    args: CreateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateProjectCommandOutput>;
  createProject(
    args: CreateProjectCommandInput,
    cb: (err: any, data?: CreateProjectCommandOutput) => void
  ): void;
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
  deleteAsset(
    args: DeleteAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetCommandOutput>;
  deleteAsset(
    args: DeleteAssetCommandInput,
    cb: (err: any, data?: DeleteAssetCommandOutput) => void
  ): void;
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
   * @see {@link DeleteAssetModelInterfaceRelationshipCommand}
   */
  deleteAssetModelInterfaceRelationship(
    args: DeleteAssetModelInterfaceRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAssetModelInterfaceRelationshipCommandOutput>;
  deleteAssetModelInterfaceRelationship(
    args: DeleteAssetModelInterfaceRelationshipCommandInput,
    cb: (err: any, data?: DeleteAssetModelInterfaceRelationshipCommandOutput) => void
  ): void;
  deleteAssetModelInterfaceRelationship(
    args: DeleteAssetModelInterfaceRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAssetModelInterfaceRelationshipCommandOutput) => void
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
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;
  deleteDashboard(
    args: DeleteDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDatasetCommand}
   */
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDatasetCommandOutput>;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;
  deleteDataset(
    args: DeleteDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteGatewayCommand}
   */
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteGatewayCommandOutput>;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;
  deleteGateway(
    args: DeleteGatewayCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGatewayCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePortalCommand}
   */
  deletePortal(
    args: DeletePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePortalCommandOutput>;
  deletePortal(
    args: DeletePortalCommandInput,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;
  deletePortal(
    args: DeletePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProjectCommand}
   */
  deleteProject(
    args: DeleteProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProjectCommandOutput>;
  deleteProject(
    args: DeleteProjectCommandInput,
    cb: (err: any, data?: DeleteProjectCommandOutput) => void
  ): void;
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
  describeAction(
    args: DescribeActionCommandInput,
    cb: (err: any, data?: DescribeActionCommandOutput) => void
  ): void;
  describeAction(
    args: DescribeActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeActionCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAssetCommand}
   */
  describeAsset(
    args: DescribeAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetCommandOutput>;
  describeAsset(
    args: DescribeAssetCommandInput,
    cb: (err: any, data?: DescribeAssetCommandOutput) => void
  ): void;
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
   * @see {@link DescribeAssetModelInterfaceRelationshipCommand}
   */
  describeAssetModelInterfaceRelationship(
    args: DescribeAssetModelInterfaceRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAssetModelInterfaceRelationshipCommandOutput>;
  describeAssetModelInterfaceRelationship(
    args: DescribeAssetModelInterfaceRelationshipCommandInput,
    cb: (err: any, data?: DescribeAssetModelInterfaceRelationshipCommandOutput) => void
  ): void;
  describeAssetModelInterfaceRelationship(
    args: DescribeAssetModelInterfaceRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAssetModelInterfaceRelationshipCommandOutput) => void
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
  describeDataset(
    args: DescribeDatasetCommandInput,
    cb: (err: any, data?: DescribeDatasetCommandOutput) => void
  ): void;
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
  describeGateway(
    args: DescribeGatewayCommandInput,
    cb: (err: any, data?: DescribeGatewayCommandOutput) => void
  ): void;
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
  describePortal(
    args: DescribePortalCommandInput,
    cb: (err: any, data?: DescribePortalCommandOutput) => void
  ): void;
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
  describeProject(
    args: DescribeProjectCommandInput,
    cb: (err: any, data?: DescribeProjectCommandOutput) => void
  ): void;
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
  executeAction(
    args: ExecuteActionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteActionCommandOutput>;
  executeAction(
    args: ExecuteActionCommandInput,
    cb: (err: any, data?: ExecuteActionCommandOutput) => void
  ): void;
  executeAction(
    args: ExecuteActionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExecuteActionCommandOutput) => void
  ): void;

  /**
   * @see {@link ExecuteQueryCommand}
   */
  executeQuery(
    args: ExecuteQueryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExecuteQueryCommandOutput>;
  executeQuery(
    args: ExecuteQueryCommandInput,
    cb: (err: any, data?: ExecuteQueryCommandOutput) => void
  ): void;
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
  invokeAssistant(
    args: InvokeAssistantCommandInput,
    cb: (err: any, data?: InvokeAssistantCommandOutput) => void
  ): void;
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
  listActions(
    args: ListActionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListActionsCommandOutput>;
  listActions(
    args: ListActionsCommandInput,
    cb: (err: any, data?: ListActionsCommandOutput) => void
  ): void;
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
  listAssetModels(
    args: ListAssetModelsCommandInput,
    cb: (err: any, data?: ListAssetModelsCommandOutput) => void
  ): void;
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
  listAssets(
    args: ListAssetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAssetsCommandOutput>;
  listAssets(
    args: ListAssetsCommandInput,
    cb: (err: any, data?: ListAssetsCommandOutput) => void
  ): void;
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
  listDashboards(
    args: ListDashboardsCommandInput,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;
  listDashboards(
    args: ListDashboardsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDashboardsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDatasetsCommand}
   */
  listDatasets(
    args: ListDatasetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDatasetsCommandOutput>;
  listDatasets(
    args: ListDatasetsCommandInput,
    cb: (err: any, data?: ListDatasetsCommandOutput) => void
  ): void;
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
  listExecutions(
    args: ListExecutionsCommandInput,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;
  listExecutions(
    args: ListExecutionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListExecutionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGatewaysCommand}
   */
  listGateways(): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGatewaysCommandOutput>;
  listGateways(
    args: ListGatewaysCommandInput,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;
  listGateways(
    args: ListGatewaysCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGatewaysCommandOutput) => void
  ): void;

  /**
   * @see {@link ListInterfaceRelationshipsCommand}
   */
  listInterfaceRelationships(
    args: ListInterfaceRelationshipsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListInterfaceRelationshipsCommandOutput>;
  listInterfaceRelationships(
    args: ListInterfaceRelationshipsCommandInput,
    cb: (err: any, data?: ListInterfaceRelationshipsCommandOutput) => void
  ): void;
  listInterfaceRelationships(
    args: ListInterfaceRelationshipsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListInterfaceRelationshipsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPortalsCommand}
   */
  listPortals(): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPortalsCommandOutput>;
  listPortals(
    args: ListPortalsCommandInput,
    cb: (err: any, data?: ListPortalsCommandOutput) => void
  ): void;
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
  listProjects(
    args: ListProjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProjectsCommandOutput>;
  listProjects(
    args: ListProjectsCommandInput,
    cb: (err: any, data?: ListProjectsCommandOutput) => void
  ): void;
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
  listTimeSeries(
    args: ListTimeSeriesCommandInput,
    cb: (err: any, data?: ListTimeSeriesCommandOutput) => void
  ): void;
  listTimeSeries(
    args: ListTimeSeriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTimeSeriesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutAssetModelInterfaceRelationshipCommand}
   */
  putAssetModelInterfaceRelationship(
    args: PutAssetModelInterfaceRelationshipCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAssetModelInterfaceRelationshipCommandOutput>;
  putAssetModelInterfaceRelationship(
    args: PutAssetModelInterfaceRelationshipCommandInput,
    cb: (err: any, data?: PutAssetModelInterfaceRelationshipCommandOutput) => void
  ): void;
  putAssetModelInterfaceRelationship(
    args: PutAssetModelInterfaceRelationshipCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAssetModelInterfaceRelationshipCommandOutput) => void
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateAsset(
    args: UpdateAssetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAssetCommandOutput>;
  updateAsset(
    args: UpdateAssetCommandInput,
    cb: (err: any, data?: UpdateAssetCommandOutput) => void
  ): void;
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
  updateDashboard(
    args: UpdateDashboardCommandInput,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;
  updateDashboard(
    args: UpdateDashboardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDashboardCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDatasetCommand}
   */
  updateDataset(
    args: UpdateDatasetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDatasetCommandOutput>;
  updateDataset(
    args: UpdateDatasetCommandInput,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;
  updateDataset(
    args: UpdateDatasetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDatasetCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGatewayCommand}
   */
  updateGateway(
    args: UpdateGatewayCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGatewayCommandOutput>;
  updateGateway(
    args: UpdateGatewayCommandInput,
    cb: (err: any, data?: UpdateGatewayCommandOutput) => void
  ): void;
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
  updatePortal(
    args: UpdatePortalCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePortalCommandOutput>;
  updatePortal(
    args: UpdatePortalCommandInput,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;
  updatePortal(
    args: UpdatePortalCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePortalCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProjectCommand}
   */
  updateProject(
    args: UpdateProjectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateProjectCommandOutput>;
  updateProject(
    args: UpdateProjectCommandInput,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;
  updateProject(
    args: UpdateProjectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProjectCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGetAssetPropertyAggregatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetAssetPropertyAggregatesCommandOutput}.
   */
  paginateBatchGetAssetPropertyAggregates(
    args: BatchGetAssetPropertyAggregatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetAssetPropertyAggregatesCommandOutput>;

  /**
   * @see {@link BatchGetAssetPropertyValueCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetAssetPropertyValueCommandOutput}.
   */
  paginateBatchGetAssetPropertyValue(
    args: BatchGetAssetPropertyValueCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetAssetPropertyValueCommandOutput>;

  /**
   * @see {@link BatchGetAssetPropertyValueHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link BatchGetAssetPropertyValueHistoryCommandOutput}.
   */
  paginateBatchGetAssetPropertyValueHistory(
    args: BatchGetAssetPropertyValueHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<BatchGetAssetPropertyValueHistoryCommandOutput>;

  /**
   * @see {@link ExecuteQueryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ExecuteQueryCommandOutput}.
   */
  paginateExecuteQuery(
    args: ExecuteQueryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ExecuteQueryCommandOutput>;

  /**
   * @see {@link GetAssetPropertyAggregatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAssetPropertyAggregatesCommandOutput}.
   */
  paginateGetAssetPropertyAggregates(
    args: GetAssetPropertyAggregatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAssetPropertyAggregatesCommandOutput>;

  /**
   * @see {@link GetAssetPropertyValueHistoryCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetAssetPropertyValueHistoryCommandOutput}.
   */
  paginateGetAssetPropertyValueHistory(
    args?: GetAssetPropertyValueHistoryCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetAssetPropertyValueHistoryCommandOutput>;

  /**
   * @see {@link GetInterpolatedAssetPropertyValuesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetInterpolatedAssetPropertyValuesCommandOutput}.
   */
  paginateGetInterpolatedAssetPropertyValues(
    args: GetInterpolatedAssetPropertyValuesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetInterpolatedAssetPropertyValuesCommandOutput>;

  /**
   * @see {@link ListAccessPoliciesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccessPoliciesCommandOutput}.
   */
  paginateListAccessPolicies(
    args?: ListAccessPoliciesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccessPoliciesCommandOutput>;

  /**
   * @see {@link ListAssetModelCompositeModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetModelCompositeModelsCommandOutput}.
   */
  paginateListAssetModelCompositeModels(
    args: ListAssetModelCompositeModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetModelCompositeModelsCommandOutput>;

  /**
   * @see {@link ListAssetModelPropertiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetModelPropertiesCommandOutput}.
   */
  paginateListAssetModelProperties(
    args: ListAssetModelPropertiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetModelPropertiesCommandOutput>;

  /**
   * @see {@link ListAssetModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetModelsCommandOutput}.
   */
  paginateListAssetModels(
    args?: ListAssetModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetModelsCommandOutput>;

  /**
   * @see {@link ListAssetPropertiesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetPropertiesCommandOutput}.
   */
  paginateListAssetProperties(
    args: ListAssetPropertiesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetPropertiesCommandOutput>;

  /**
   * @see {@link ListAssetRelationshipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetRelationshipsCommandOutput}.
   */
  paginateListAssetRelationships(
    args: ListAssetRelationshipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetRelationshipsCommandOutput>;

  /**
   * @see {@link ListAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssetsCommandOutput}.
   */
  paginateListAssets(
    args?: ListAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssetsCommandOutput>;

  /**
   * @see {@link ListAssociatedAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAssociatedAssetsCommandOutput}.
   */
  paginateListAssociatedAssets(
    args: ListAssociatedAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAssociatedAssetsCommandOutput>;

  /**
   * @see {@link ListBulkImportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBulkImportJobsCommandOutput}.
   */
  paginateListBulkImportJobs(
    args?: ListBulkImportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBulkImportJobsCommandOutput>;

  /**
   * @see {@link ListCompositionRelationshipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCompositionRelationshipsCommandOutput}.
   */
  paginateListCompositionRelationships(
    args: ListCompositionRelationshipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCompositionRelationshipsCommandOutput>;

  /**
   * @see {@link ListComputationModelDataBindingUsagesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComputationModelDataBindingUsagesCommandOutput}.
   */
  paginateListComputationModelDataBindingUsages(
    args: ListComputationModelDataBindingUsagesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComputationModelDataBindingUsagesCommandOutput>;

  /**
   * @see {@link ListComputationModelResolveToResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComputationModelResolveToResourcesCommandOutput}.
   */
  paginateListComputationModelResolveToResources(
    args: ListComputationModelResolveToResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComputationModelResolveToResourcesCommandOutput>;

  /**
   * @see {@link ListComputationModelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListComputationModelsCommandOutput}.
   */
  paginateListComputationModels(
    args?: ListComputationModelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListComputationModelsCommandOutput>;

  /**
   * @see {@link ListDashboardsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDashboardsCommandOutput}.
   */
  paginateListDashboards(
    args: ListDashboardsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDashboardsCommandOutput>;

  /**
   * @see {@link ListDatasetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListDatasetsCommandOutput}.
   */
  paginateListDatasets(
    args: ListDatasetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListDatasetsCommandOutput>;

  /**
   * @see {@link ListExecutionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListExecutionsCommandOutput}.
   */
  paginateListExecutions(
    args: ListExecutionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListExecutionsCommandOutput>;

  /**
   * @see {@link ListGatewaysCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListGatewaysCommandOutput}.
   */
  paginateListGateways(
    args?: ListGatewaysCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListGatewaysCommandOutput>;

  /**
   * @see {@link ListInterfaceRelationshipsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListInterfaceRelationshipsCommandOutput}.
   */
  paginateListInterfaceRelationships(
    args: ListInterfaceRelationshipsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListInterfaceRelationshipsCommandOutput>;

  /**
   * @see {@link ListPortalsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPortalsCommandOutput}.
   */
  paginateListPortals(
    args?: ListPortalsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPortalsCommandOutput>;

  /**
   * @see {@link ListProjectAssetsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectAssetsCommandOutput}.
   */
  paginateListProjectAssets(
    args: ListProjectAssetsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectAssetsCommandOutput>;

  /**
   * @see {@link ListProjectsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProjectsCommandOutput}.
   */
  paginateListProjects(
    args: ListProjectsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProjectsCommandOutput>;

  /**
   * @see {@link ListTimeSeriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTimeSeriesCommandOutput}.
   */
  paginateListTimeSeries(
    args?: ListTimeSeriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTimeSeriesCommandOutput>;

  /**
   * @see {@link DescribeAssetCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAssetActive(
    args: DescribeAssetCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeAssetCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAssetNotExists(
    args: DescribeAssetCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeAssetModelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAssetModelActive(
    args: DescribeAssetModelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribeAssetModelCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilAssetModelNotExists(
    args: DescribeAssetModelCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribePortalCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPortalActive(
    args: DescribePortalCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;

  /**
   * @see {@link DescribePortalCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilPortalNotExists(
    args: DescribePortalCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<IoTSiteWise>, "client">
  ): Promise<WaiterResult>;
}

/**
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 * @public
 */
export class IoTSiteWise extends IoTSiteWiseClient implements IoTSiteWise {}
createAggregatedClient(commands, IoTSiteWise, { paginators, waiters });
