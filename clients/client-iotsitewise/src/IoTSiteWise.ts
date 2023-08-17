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
  CreateBulkImportJobCommand,
  CreateBulkImportJobCommandInput,
  CreateBulkImportJobCommandOutput,
} from "./commands/CreateBulkImportJobCommand";
import {
  CreateDashboardCommand,
  CreateDashboardCommandInput,
  CreateDashboardCommandOutput,
} from "./commands/CreateDashboardCommand";
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
  DeleteDashboardCommand,
  DeleteDashboardCommandInput,
  DeleteDashboardCommandOutput,
} from "./commands/DeleteDashboardCommand";
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
  DescribeAssetCommand,
  DescribeAssetCommandInput,
  DescribeAssetCommandOutput,
} from "./commands/DescribeAssetCommand";
import {
  DescribeAssetModelCommand,
  DescribeAssetModelCommandInput,
  DescribeAssetModelCommandOutput,
} from "./commands/DescribeAssetModelCommand";
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
  DescribeDashboardCommand,
  DescribeDashboardCommandInput,
  DescribeDashboardCommandOutput,
} from "./commands/DescribeDashboardCommand";
import {
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeDefaultEncryptionConfigurationCommandInput,
  DescribeDefaultEncryptionConfigurationCommandOutput,
} from "./commands/DescribeDefaultEncryptionConfigurationCommand";
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
  ListAccessPoliciesCommand,
  ListAccessPoliciesCommandInput,
  ListAccessPoliciesCommandOutput,
} from "./commands/ListAccessPoliciesCommand";
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
  ListDashboardsCommand,
  ListDashboardsCommandInput,
  ListDashboardsCommandOutput,
} from "./commands/ListDashboardsCommand";
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
  UpdateAssetPropertyCommand,
  UpdateAssetPropertyCommandInput,
  UpdateAssetPropertyCommandOutput,
} from "./commands/UpdateAssetPropertyCommand";
import {
  UpdateDashboardCommand,
  UpdateDashboardCommandInput,
  UpdateDashboardCommandOutput,
} from "./commands/UpdateDashboardCommand";
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
  CreateBulkImportJobCommand,
  CreateDashboardCommand,
  CreateGatewayCommand,
  CreatePortalCommand,
  CreateProjectCommand,
  DeleteAccessPolicyCommand,
  DeleteAssetCommand,
  DeleteAssetModelCommand,
  DeleteDashboardCommand,
  DeleteGatewayCommand,
  DeletePortalCommand,
  DeleteProjectCommand,
  DeleteTimeSeriesCommand,
  DescribeAccessPolicyCommand,
  DescribeAssetCommand,
  DescribeAssetModelCommand,
  DescribeAssetPropertyCommand,
  DescribeBulkImportJobCommand,
  DescribeDashboardCommand,
  DescribeDefaultEncryptionConfigurationCommand,
  DescribeGatewayCommand,
  DescribeGatewayCapabilityConfigurationCommand,
  DescribeLoggingOptionsCommand,
  DescribePortalCommand,
  DescribeProjectCommand,
  DescribeStorageConfigurationCommand,
  DescribeTimeSeriesCommand,
  DisassociateAssetsCommand,
  DisassociateTimeSeriesFromAssetPropertyCommand,
  GetAssetPropertyAggregatesCommand,
  GetAssetPropertyValueCommand,
  GetAssetPropertyValueHistoryCommand,
  GetInterpolatedAssetPropertyValuesCommand,
  ListAccessPoliciesCommand,
  ListAssetModelPropertiesCommand,
  ListAssetModelsCommand,
  ListAssetPropertiesCommand,
  ListAssetRelationshipsCommand,
  ListAssetsCommand,
  ListAssociatedAssetsCommand,
  ListBulkImportJobsCommand,
  ListDashboardsCommand,
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
  UpdateAssetPropertyCommand,
  UpdateDashboardCommand,
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
   * @see {@link DescribeDefaultEncryptionConfigurationCommand}
   */
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
   * @see {@link ListAccessPoliciesCommand}
   */
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
   * @see {@link ListGatewaysCommand}
   */
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
 * @public
 * <p>Welcome to the IoT SiteWise API Reference. IoT SiteWise is an Amazon Web Services service that connects <a href="https://en.wikipedia.org/wiki/Internet_of_things#Industrial_applications">Industrial Internet of Things (IIoT)</a> devices to the power of the Amazon Web Services Cloud. For more information, see the
 *       <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/">IoT SiteWise User Guide</a>. For information about IoT SiteWise quotas, see <a href="https://docs.aws.amazon.com/iot-sitewise/latest/userguide/quotas.html">Quotas</a> in the <i>IoT SiteWise User Guide</i>.</p>
 */
export class IoTSiteWise extends IoTSiteWiseClient implements IoTSiteWise {}
createAggregatedClient(commands, IoTSiteWise);
