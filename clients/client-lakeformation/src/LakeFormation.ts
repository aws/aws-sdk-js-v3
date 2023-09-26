// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AddLFTagsToResourceCommand,
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "./commands/AddLFTagsToResourceCommand";
import {
  AssumeDecoratedRoleWithSAMLCommand,
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
} from "./commands/AssumeDecoratedRoleWithSAMLCommand";
import {
  BatchGrantPermissionsCommand,
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "./commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommand,
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "./commands/BatchRevokePermissionsCommand";
import {
  CancelTransactionCommand,
  CancelTransactionCommandInput,
  CancelTransactionCommandOutput,
} from "./commands/CancelTransactionCommand";
import {
  CommitTransactionCommand,
  CommitTransactionCommandInput,
  CommitTransactionCommandOutput,
} from "./commands/CommitTransactionCommand";
import {
  CreateDataCellsFilterCommand,
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
} from "./commands/CreateDataCellsFilterCommand";
import {
  CreateLakeFormationOptInCommand,
  CreateLakeFormationOptInCommandInput,
  CreateLakeFormationOptInCommandOutput,
} from "./commands/CreateLakeFormationOptInCommand";
import { CreateLFTagCommand, CreateLFTagCommandInput, CreateLFTagCommandOutput } from "./commands/CreateLFTagCommand";
import {
  DeleteDataCellsFilterCommand,
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "./commands/DeleteDataCellsFilterCommand";
import {
  DeleteLakeFormationOptInCommand,
  DeleteLakeFormationOptInCommandInput,
  DeleteLakeFormationOptInCommandOutput,
} from "./commands/DeleteLakeFormationOptInCommand";
import { DeleteLFTagCommand, DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "./commands/DeleteLFTagCommand";
import {
  DeleteObjectsOnCancelCommand,
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "./commands/DeleteObjectsOnCancelCommand";
import {
  DeregisterResourceCommand,
  DeregisterResourceCommandInput,
  DeregisterResourceCommandOutput,
} from "./commands/DeregisterResourceCommand";
import {
  DescribeResourceCommand,
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput,
} from "./commands/DescribeResourceCommand";
import {
  DescribeTransactionCommand,
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "./commands/DescribeTransactionCommand";
import {
  ExtendTransactionCommand,
  ExtendTransactionCommandInput,
  ExtendTransactionCommandOutput,
} from "./commands/ExtendTransactionCommand";
import {
  GetDataCellsFilterCommand,
  GetDataCellsFilterCommandInput,
  GetDataCellsFilterCommandOutput,
} from "./commands/GetDataCellsFilterCommand";
import {
  GetDataLakeSettingsCommand,
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "./commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommand,
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "./commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommand, GetLFTagCommandInput, GetLFTagCommandOutput } from "./commands/GetLFTagCommand";
import {
  GetQueryStateCommand,
  GetQueryStateCommandInput,
  GetQueryStateCommandOutput,
} from "./commands/GetQueryStateCommand";
import {
  GetQueryStatisticsCommand,
  GetQueryStatisticsCommandInput,
  GetQueryStatisticsCommandOutput,
} from "./commands/GetQueryStatisticsCommand";
import {
  GetResourceLFTagsCommand,
  GetResourceLFTagsCommandInput,
  GetResourceLFTagsCommandOutput,
} from "./commands/GetResourceLFTagsCommand";
import {
  GetTableObjectsCommand,
  GetTableObjectsCommandInput,
  GetTableObjectsCommandOutput,
} from "./commands/GetTableObjectsCommand";
import {
  GetTemporaryGluePartitionCredentialsCommand,
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
} from "./commands/GetTemporaryGluePartitionCredentialsCommand";
import {
  GetTemporaryGlueTableCredentialsCommand,
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
} from "./commands/GetTemporaryGlueTableCredentialsCommand";
import {
  GetWorkUnitResultsCommand,
  GetWorkUnitResultsCommandInput,
  GetWorkUnitResultsCommandOutput,
} from "./commands/GetWorkUnitResultsCommand";
import {
  GetWorkUnitsCommand,
  GetWorkUnitsCommandInput,
  GetWorkUnitsCommandOutput,
} from "./commands/GetWorkUnitsCommand";
import {
  GrantPermissionsCommand,
  GrantPermissionsCommandInput,
  GrantPermissionsCommandOutput,
} from "./commands/GrantPermissionsCommand";
import {
  ListDataCellsFilterCommand,
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "./commands/ListDataCellsFilterCommand";
import {
  ListLakeFormationOptInsCommand,
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "./commands/ListLakeFormationOptInsCommand";
import { ListLFTagsCommand, ListLFTagsCommandInput, ListLFTagsCommandOutput } from "./commands/ListLFTagsCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListTableStorageOptimizersCommand,
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "./commands/ListTableStorageOptimizersCommand";
import {
  ListTransactionsCommand,
  ListTransactionsCommandInput,
  ListTransactionsCommandOutput,
} from "./commands/ListTransactionsCommand";
import {
  PutDataLakeSettingsCommand,
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "./commands/PutDataLakeSettingsCommand";
import {
  RegisterResourceCommand,
  RegisterResourceCommandInput,
  RegisterResourceCommandOutput,
} from "./commands/RegisterResourceCommand";
import {
  RemoveLFTagsFromResourceCommand,
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "./commands/RemoveLFTagsFromResourceCommand";
import {
  RevokePermissionsCommand,
  RevokePermissionsCommandInput,
  RevokePermissionsCommandOutput,
} from "./commands/RevokePermissionsCommand";
import {
  SearchDatabasesByLFTagsCommand,
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "./commands/SearchDatabasesByLFTagsCommand";
import {
  SearchTablesByLFTagsCommand,
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "./commands/SearchTablesByLFTagsCommand";
import {
  StartQueryPlanningCommand,
  StartQueryPlanningCommandInput,
  StartQueryPlanningCommandOutput,
} from "./commands/StartQueryPlanningCommand";
import {
  StartTransactionCommand,
  StartTransactionCommandInput,
  StartTransactionCommandOutput,
} from "./commands/StartTransactionCommand";
import {
  UpdateDataCellsFilterCommand,
  UpdateDataCellsFilterCommandInput,
  UpdateDataCellsFilterCommandOutput,
} from "./commands/UpdateDataCellsFilterCommand";
import { UpdateLFTagCommand, UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "./commands/UpdateLFTagCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import {
  UpdateTableObjectsCommand,
  UpdateTableObjectsCommandInput,
  UpdateTableObjectsCommandOutput,
} from "./commands/UpdateTableObjectsCommand";
import {
  UpdateTableStorageOptimizerCommand,
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
} from "./commands/UpdateTableStorageOptimizerCommand";
import { LakeFormationClient, LakeFormationClientConfig } from "./LakeFormationClient";

const commands = {
  AddLFTagsToResourceCommand,
  AssumeDecoratedRoleWithSAMLCommand,
  BatchGrantPermissionsCommand,
  BatchRevokePermissionsCommand,
  CancelTransactionCommand,
  CommitTransactionCommand,
  CreateDataCellsFilterCommand,
  CreateLakeFormationOptInCommand,
  CreateLFTagCommand,
  DeleteDataCellsFilterCommand,
  DeleteLakeFormationOptInCommand,
  DeleteLFTagCommand,
  DeleteObjectsOnCancelCommand,
  DeregisterResourceCommand,
  DescribeResourceCommand,
  DescribeTransactionCommand,
  ExtendTransactionCommand,
  GetDataCellsFilterCommand,
  GetDataLakeSettingsCommand,
  GetEffectivePermissionsForPathCommand,
  GetLFTagCommand,
  GetQueryStateCommand,
  GetQueryStatisticsCommand,
  GetResourceLFTagsCommand,
  GetTableObjectsCommand,
  GetTemporaryGluePartitionCredentialsCommand,
  GetTemporaryGlueTableCredentialsCommand,
  GetWorkUnitResultsCommand,
  GetWorkUnitsCommand,
  GrantPermissionsCommand,
  ListDataCellsFilterCommand,
  ListLakeFormationOptInsCommand,
  ListLFTagsCommand,
  ListPermissionsCommand,
  ListResourcesCommand,
  ListTableStorageOptimizersCommand,
  ListTransactionsCommand,
  PutDataLakeSettingsCommand,
  RegisterResourceCommand,
  RemoveLFTagsFromResourceCommand,
  RevokePermissionsCommand,
  SearchDatabasesByLFTagsCommand,
  SearchTablesByLFTagsCommand,
  StartQueryPlanningCommand,
  StartTransactionCommand,
  UpdateDataCellsFilterCommand,
  UpdateLFTagCommand,
  UpdateResourceCommand,
  UpdateTableObjectsCommand,
  UpdateTableStorageOptimizerCommand,
};

export interface LakeFormation {
  /**
   * @see {@link AddLFTagsToResourceCommand}
   */
  addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddLFTagsToResourceCommandOutput>;
  addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void
  ): void;
  addLFTagsToResource(
    args: AddLFTagsToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddLFTagsToResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link AssumeDecoratedRoleWithSAMLCommand}
   */
  assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssumeDecoratedRoleWithSAMLCommandOutput>;
  assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    cb: (err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void
  ): void;
  assumeDecoratedRoleWithSAML(
    args: AssumeDecoratedRoleWithSAMLCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssumeDecoratedRoleWithSAMLCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchGrantPermissionsCommand}
   */
  batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchGrantPermissionsCommandOutput>;
  batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void
  ): void;
  batchGrantPermissions(
    args: BatchGrantPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchGrantPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link BatchRevokePermissionsCommand}
   */
  batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchRevokePermissionsCommandOutput>;
  batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void
  ): void;
  batchRevokePermissions(
    args: BatchRevokePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchRevokePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelTransactionCommand}
   */
  cancelTransaction(
    args: CancelTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelTransactionCommandOutput>;
  cancelTransaction(
    args: CancelTransactionCommandInput,
    cb: (err: any, data?: CancelTransactionCommandOutput) => void
  ): void;
  cancelTransaction(
    args: CancelTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link CommitTransactionCommand}
   */
  commitTransaction(
    args: CommitTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CommitTransactionCommandOutput>;
  commitTransaction(
    args: CommitTransactionCommandInput,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;
  commitTransaction(
    args: CommitTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CommitTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataCellsFilterCommand}
   */
  createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataCellsFilterCommandOutput>;
  createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    cb: (err: any, data?: CreateDataCellsFilterCommandOutput) => void
  ): void;
  createDataCellsFilter(
    args: CreateDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataCellsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLakeFormationOptInCommand}
   */
  createLakeFormationOptIn(
    args: CreateLakeFormationOptInCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLakeFormationOptInCommandOutput>;
  createLakeFormationOptIn(
    args: CreateLakeFormationOptInCommandInput,
    cb: (err: any, data?: CreateLakeFormationOptInCommandOutput) => void
  ): void;
  createLakeFormationOptIn(
    args: CreateLakeFormationOptInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLakeFormationOptInCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLFTagCommand}
   */
  createLFTag(args: CreateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<CreateLFTagCommandOutput>;
  createLFTag(args: CreateLFTagCommandInput, cb: (err: any, data?: CreateLFTagCommandOutput) => void): void;
  createLFTag(
    args: CreateLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLFTagCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataCellsFilterCommand}
   */
  deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataCellsFilterCommandOutput>;
  deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    cb: (err: any, data?: DeleteDataCellsFilterCommandOutput) => void
  ): void;
  deleteDataCellsFilter(
    args: DeleteDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataCellsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLakeFormationOptInCommand}
   */
  deleteLakeFormationOptIn(
    args: DeleteLakeFormationOptInCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLakeFormationOptInCommandOutput>;
  deleteLakeFormationOptIn(
    args: DeleteLakeFormationOptInCommandInput,
    cb: (err: any, data?: DeleteLakeFormationOptInCommandOutput) => void
  ): void;
  deleteLakeFormationOptIn(
    args: DeleteLakeFormationOptInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLakeFormationOptInCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLFTagCommand}
   */
  deleteLFTag(args: DeleteLFTagCommandInput, options?: __HttpHandlerOptions): Promise<DeleteLFTagCommandOutput>;
  deleteLFTag(args: DeleteLFTagCommandInput, cb: (err: any, data?: DeleteLFTagCommandOutput) => void): void;
  deleteLFTag(
    args: DeleteLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLFTagCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteObjectsOnCancelCommand}
   */
  deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteObjectsOnCancelCommandOutput>;
  deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    cb: (err: any, data?: DeleteObjectsOnCancelCommandOutput) => void
  ): void;
  deleteObjectsOnCancel(
    args: DeleteObjectsOnCancelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteObjectsOnCancelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterResourceCommand}
   */
  deregisterResource(
    args: DeregisterResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterResourceCommandOutput>;
  deregisterResource(
    args: DeregisterResourceCommandInput,
    cb: (err: any, data?: DeregisterResourceCommandOutput) => void
  ): void;
  deregisterResource(
    args: DeregisterResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeResourceCommand}
   */
  describeResource(
    args: DescribeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCommandOutput>;
  describeResource(
    args: DescribeResourceCommandInput,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  describeResource(
    args: DescribeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTransactionCommand}
   */
  describeTransaction(
    args: DescribeTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTransactionCommandOutput>;
  describeTransaction(
    args: DescribeTransactionCommandInput,
    cb: (err: any, data?: DescribeTransactionCommandOutput) => void
  ): void;
  describeTransaction(
    args: DescribeTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link ExtendTransactionCommand}
   */
  extendTransaction(
    args: ExtendTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExtendTransactionCommandOutput>;
  extendTransaction(
    args: ExtendTransactionCommandInput,
    cb: (err: any, data?: ExtendTransactionCommandOutput) => void
  ): void;
  extendTransaction(
    args: ExtendTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExtendTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataCellsFilterCommand}
   */
  getDataCellsFilter(
    args: GetDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataCellsFilterCommandOutput>;
  getDataCellsFilter(
    args: GetDataCellsFilterCommandInput,
    cb: (err: any, data?: GetDataCellsFilterCommandOutput) => void
  ): void;
  getDataCellsFilter(
    args: GetDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataCellsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataLakeSettingsCommand}
   */
  getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataLakeSettingsCommandOutput>;
  getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void
  ): void;
  getDataLakeSettings(
    args: GetDataLakeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataLakeSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEffectivePermissionsForPathCommand}
   */
  getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEffectivePermissionsForPathCommandOutput>;
  getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void
  ): void;
  getEffectivePermissionsForPath(
    args: GetEffectivePermissionsForPathCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEffectivePermissionsForPathCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLFTagCommand}
   */
  getLFTag(args: GetLFTagCommandInput, options?: __HttpHandlerOptions): Promise<GetLFTagCommandOutput>;
  getLFTag(args: GetLFTagCommandInput, cb: (err: any, data?: GetLFTagCommandOutput) => void): void;
  getLFTag(
    args: GetLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLFTagCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryStateCommand}
   */
  getQueryState(args: GetQueryStateCommandInput, options?: __HttpHandlerOptions): Promise<GetQueryStateCommandOutput>;
  getQueryState(args: GetQueryStateCommandInput, cb: (err: any, data?: GetQueryStateCommandOutput) => void): void;
  getQueryState(
    args: GetQueryStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryStateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetQueryStatisticsCommand}
   */
  getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetQueryStatisticsCommandOutput>;
  getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    cb: (err: any, data?: GetQueryStatisticsCommandOutput) => void
  ): void;
  getQueryStatistics(
    args: GetQueryStatisticsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetQueryStatisticsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetResourceLFTagsCommand}
   */
  getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceLFTagsCommandOutput>;
  getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void
  ): void;
  getResourceLFTags(
    args: GetResourceLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceLFTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTableObjectsCommand}
   */
  getTableObjects(
    args: GetTableObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTableObjectsCommandOutput>;
  getTableObjects(args: GetTableObjectsCommandInput, cb: (err: any, data?: GetTableObjectsCommandOutput) => void): void;
  getTableObjects(
    args: GetTableObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTableObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemporaryGluePartitionCredentialsCommand}
   */
  getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemporaryGluePartitionCredentialsCommandOutput>;
  getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    cb: (err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void
  ): void;
  getTemporaryGluePartitionCredentials(
    args: GetTemporaryGluePartitionCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemporaryGluePartitionCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTemporaryGlueTableCredentialsCommand}
   */
  getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTemporaryGlueTableCredentialsCommandOutput>;
  getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    cb: (err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void
  ): void;
  getTemporaryGlueTableCredentials(
    args: GetTemporaryGlueTableCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTemporaryGlueTableCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkUnitResultsCommand}
   */
  getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetWorkUnitResultsCommandOutput>;
  getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    cb: (err: any, data?: GetWorkUnitResultsCommandOutput) => void
  ): void;
  getWorkUnitResults(
    args: GetWorkUnitResultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkUnitResultsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetWorkUnitsCommand}
   */
  getWorkUnits(args: GetWorkUnitsCommandInput, options?: __HttpHandlerOptions): Promise<GetWorkUnitsCommandOutput>;
  getWorkUnits(args: GetWorkUnitsCommandInput, cb: (err: any, data?: GetWorkUnitsCommandOutput) => void): void;
  getWorkUnits(
    args: GetWorkUnitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetWorkUnitsCommandOutput) => void
  ): void;

  /**
   * @see {@link GrantPermissionsCommand}
   */
  grantPermissions(
    args: GrantPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GrantPermissionsCommandOutput>;
  grantPermissions(
    args: GrantPermissionsCommandInput,
    cb: (err: any, data?: GrantPermissionsCommandOutput) => void
  ): void;
  grantPermissions(
    args: GrantPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GrantPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataCellsFilterCommand}
   */
  listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataCellsFilterCommandOutput>;
  listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    cb: (err: any, data?: ListDataCellsFilterCommandOutput) => void
  ): void;
  listDataCellsFilter(
    args: ListDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataCellsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLakeFormationOptInsCommand}
   */
  listLakeFormationOptIns(
    args: ListLakeFormationOptInsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLakeFormationOptInsCommandOutput>;
  listLakeFormationOptIns(
    args: ListLakeFormationOptInsCommandInput,
    cb: (err: any, data?: ListLakeFormationOptInsCommandOutput) => void
  ): void;
  listLakeFormationOptIns(
    args: ListLakeFormationOptInsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLakeFormationOptInsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLFTagsCommand}
   */
  listLFTags(args: ListLFTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListLFTagsCommandOutput>;
  listLFTags(args: ListLFTagsCommandInput, cb: (err: any, data?: ListLFTagsCommandOutput) => void): void;
  listLFTags(
    args: ListLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLFTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPermissionsCommand}
   */
  listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  listPermissions(args: ListPermissionsCommandInput, cb: (err: any, data?: ListPermissionsCommandOutput) => void): void;
  listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListResourcesCommand}
   */
  listResources(args: ListResourcesCommandInput, options?: __HttpHandlerOptions): Promise<ListResourcesCommandOutput>;
  listResources(args: ListResourcesCommandInput, cb: (err: any, data?: ListResourcesCommandOutput) => void): void;
  listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTableStorageOptimizersCommand}
   */
  listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTableStorageOptimizersCommandOutput>;
  listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    cb: (err: any, data?: ListTableStorageOptimizersCommandOutput) => void
  ): void;
  listTableStorageOptimizers(
    args: ListTableStorageOptimizersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTableStorageOptimizersCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTransactionsCommand}
   */
  listTransactions(
    args: ListTransactionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTransactionsCommandOutput>;
  listTransactions(
    args: ListTransactionsCommandInput,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;
  listTransactions(
    args: ListTransactionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTransactionsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutDataLakeSettingsCommand}
   */
  putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutDataLakeSettingsCommandOutput>;
  putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void
  ): void;
  putDataLakeSettings(
    args: PutDataLakeSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutDataLakeSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterResourceCommand}
   */
  registerResource(
    args: RegisterResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterResourceCommandOutput>;
  registerResource(
    args: RegisterResourceCommandInput,
    cb: (err: any, data?: RegisterResourceCommandOutput) => void
  ): void;
  registerResource(
    args: RegisterResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RemoveLFTagsFromResourceCommand}
   */
  removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveLFTagsFromResourceCommandOutput>;
  removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void
  ): void;
  removeLFTagsFromResource(
    args: RemoveLFTagsFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveLFTagsFromResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokePermissionsCommand}
   */
  revokePermissions(
    args: RevokePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokePermissionsCommandOutput>;
  revokePermissions(
    args: RevokePermissionsCommandInput,
    cb: (err: any, data?: RevokePermissionsCommandOutput) => void
  ): void;
  revokePermissions(
    args: RevokePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchDatabasesByLFTagsCommand}
   */
  searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchDatabasesByLFTagsCommandOutput>;
  searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void
  ): void;
  searchDatabasesByLFTags(
    args: SearchDatabasesByLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchDatabasesByLFTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link SearchTablesByLFTagsCommand}
   */
  searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SearchTablesByLFTagsCommandOutput>;
  searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void
  ): void;
  searchTablesByLFTags(
    args: SearchTablesByLFTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SearchTablesByLFTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartQueryPlanningCommand}
   */
  startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartQueryPlanningCommandOutput>;
  startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    cb: (err: any, data?: StartQueryPlanningCommandOutput) => void
  ): void;
  startQueryPlanning(
    args: StartQueryPlanningCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartQueryPlanningCommandOutput) => void
  ): void;

  /**
   * @see {@link StartTransactionCommand}
   */
  startTransaction(
    args: StartTransactionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartTransactionCommandOutput>;
  startTransaction(
    args: StartTransactionCommandInput,
    cb: (err: any, data?: StartTransactionCommandOutput) => void
  ): void;
  startTransaction(
    args: StartTransactionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartTransactionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateDataCellsFilterCommand}
   */
  updateDataCellsFilter(
    args: UpdateDataCellsFilterCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateDataCellsFilterCommandOutput>;
  updateDataCellsFilter(
    args: UpdateDataCellsFilterCommandInput,
    cb: (err: any, data?: UpdateDataCellsFilterCommandOutput) => void
  ): void;
  updateDataCellsFilter(
    args: UpdateDataCellsFilterCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateDataCellsFilterCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLFTagCommand}
   */
  updateLFTag(args: UpdateLFTagCommandInput, options?: __HttpHandlerOptions): Promise<UpdateLFTagCommandOutput>;
  updateLFTag(args: UpdateLFTagCommandInput, cb: (err: any, data?: UpdateLFTagCommandOutput) => void): void;
  updateLFTag(
    args: UpdateLFTagCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLFTagCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateResourceCommand}
   */
  updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  updateResource(args: UpdateResourceCommandInput, cb: (err: any, data?: UpdateResourceCommandOutput) => void): void;
  updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableObjectsCommand}
   */
  updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableObjectsCommandOutput>;
  updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    cb: (err: any, data?: UpdateTableObjectsCommandOutput) => void
  ): void;
  updateTableObjects(
    args: UpdateTableObjectsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableObjectsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTableStorageOptimizerCommand}
   */
  updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTableStorageOptimizerCommandOutput>;
  updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    cb: (err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void
  ): void;
  updateTableStorageOptimizer(
    args: UpdateTableStorageOptimizerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTableStorageOptimizerCommandOutput) => void
  ): void;
}

/**
 * @public
 * <fullname>Lake Formation</fullname>
 *          <p>Defines the public endpoint for the Lake Formation service.</p>
 */
export class LakeFormation extends LakeFormationClient implements LakeFormation {}
createAggregatedClient(commands, LakeFormation);
