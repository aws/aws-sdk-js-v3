// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "../commands/AddLFTagsToResourceCommand";
import {
  AssumeDecoratedRoleWithSAMLCommandInput,
  AssumeDecoratedRoleWithSAMLCommandOutput,
} from "../commands/AssumeDecoratedRoleWithSAMLCommand";
import {
  BatchGrantPermissionsCommandInput,
  BatchGrantPermissionsCommandOutput,
} from "../commands/BatchGrantPermissionsCommand";
import {
  BatchRevokePermissionsCommandInput,
  BatchRevokePermissionsCommandOutput,
} from "../commands/BatchRevokePermissionsCommand";
import { CancelTransactionCommandInput, CancelTransactionCommandOutput } from "../commands/CancelTransactionCommand";
import { CommitTransactionCommandInput, CommitTransactionCommandOutput } from "../commands/CommitTransactionCommand";
import {
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
} from "../commands/CreateDataCellsFilterCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "../commands/CreateLFTagCommand";
import {
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "../commands/DeleteDataCellsFilterCommand";
import { DeleteLFTagCommandInput, DeleteLFTagCommandOutput } from "../commands/DeleteLFTagCommand";
import {
  DeleteObjectsOnCancelCommandInput,
  DeleteObjectsOnCancelCommandOutput,
} from "../commands/DeleteObjectsOnCancelCommand";
import { DeregisterResourceCommandInput, DeregisterResourceCommandOutput } from "../commands/DeregisterResourceCommand";
import { DescribeResourceCommandInput, DescribeResourceCommandOutput } from "../commands/DescribeResourceCommand";
import {
  DescribeTransactionCommandInput,
  DescribeTransactionCommandOutput,
} from "../commands/DescribeTransactionCommand";
import { ExtendTransactionCommandInput, ExtendTransactionCommandOutput } from "../commands/ExtendTransactionCommand";
import { GetDataCellsFilterCommandInput, GetDataCellsFilterCommandOutput } from "../commands/GetDataCellsFilterCommand";
import {
  GetDataLakeSettingsCommandInput,
  GetDataLakeSettingsCommandOutput,
} from "../commands/GetDataLakeSettingsCommand";
import {
  GetEffectivePermissionsForPathCommandInput,
  GetEffectivePermissionsForPathCommandOutput,
} from "../commands/GetEffectivePermissionsForPathCommand";
import { GetLFTagCommandInput, GetLFTagCommandOutput } from "../commands/GetLFTagCommand";
import { GetQueryStateCommandInput, GetQueryStateCommandOutput } from "../commands/GetQueryStateCommand";
import { GetQueryStatisticsCommandInput, GetQueryStatisticsCommandOutput } from "../commands/GetQueryStatisticsCommand";
import { GetResourceLFTagsCommandInput, GetResourceLFTagsCommandOutput } from "../commands/GetResourceLFTagsCommand";
import { GetTableObjectsCommandInput, GetTableObjectsCommandOutput } from "../commands/GetTableObjectsCommand";
import {
  GetTemporaryGluePartitionCredentialsCommandInput,
  GetTemporaryGluePartitionCredentialsCommandOutput,
} from "../commands/GetTemporaryGluePartitionCredentialsCommand";
import {
  GetTemporaryGlueTableCredentialsCommandInput,
  GetTemporaryGlueTableCredentialsCommandOutput,
} from "../commands/GetTemporaryGlueTableCredentialsCommand";
import { GetWorkUnitResultsCommandInput, GetWorkUnitResultsCommandOutput } from "../commands/GetWorkUnitResultsCommand";
import { GetWorkUnitsCommandInput, GetWorkUnitsCommandOutput } from "../commands/GetWorkUnitsCommand";
import { GrantPermissionsCommandInput, GrantPermissionsCommandOutput } from "../commands/GrantPermissionsCommand";
import {
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
} from "../commands/ListDataCellsFilterCommand";
import { ListLFTagsCommandInput, ListLFTagsCommandOutput } from "../commands/ListLFTagsCommand";
import { ListPermissionsCommandInput, ListPermissionsCommandOutput } from "../commands/ListPermissionsCommand";
import { ListResourcesCommandInput, ListResourcesCommandOutput } from "../commands/ListResourcesCommand";
import {
  ListTableStorageOptimizersCommandInput,
  ListTableStorageOptimizersCommandOutput,
} from "../commands/ListTableStorageOptimizersCommand";
import { ListTransactionsCommandInput, ListTransactionsCommandOutput } from "../commands/ListTransactionsCommand";
import {
  PutDataLakeSettingsCommandInput,
  PutDataLakeSettingsCommandOutput,
} from "../commands/PutDataLakeSettingsCommand";
import { RegisterResourceCommandInput, RegisterResourceCommandOutput } from "../commands/RegisterResourceCommand";
import {
  RemoveLFTagsFromResourceCommandInput,
  RemoveLFTagsFromResourceCommandOutput,
} from "../commands/RemoveLFTagsFromResourceCommand";
import { RevokePermissionsCommandInput, RevokePermissionsCommandOutput } from "../commands/RevokePermissionsCommand";
import {
  SearchDatabasesByLFTagsCommandInput,
  SearchDatabasesByLFTagsCommandOutput,
} from "../commands/SearchDatabasesByLFTagsCommand";
import {
  SearchTablesByLFTagsCommandInput,
  SearchTablesByLFTagsCommandOutput,
} from "../commands/SearchTablesByLFTagsCommand";
import { StartQueryPlanningCommandInput, StartQueryPlanningCommandOutput } from "../commands/StartQueryPlanningCommand";
import { StartTransactionCommandInput, StartTransactionCommandOutput } from "../commands/StartTransactionCommand";
import {
  UpdateDataCellsFilterCommandInput,
  UpdateDataCellsFilterCommandOutput,
} from "../commands/UpdateDataCellsFilterCommand";
import { UpdateLFTagCommandInput, UpdateLFTagCommandOutput } from "../commands/UpdateLFTagCommand";
import { UpdateResourceCommandInput, UpdateResourceCommandOutput } from "../commands/UpdateResourceCommand";
import { UpdateTableObjectsCommandInput, UpdateTableObjectsCommandOutput } from "../commands/UpdateTableObjectsCommand";
import {
  UpdateTableStorageOptimizerCommandInput,
  UpdateTableStorageOptimizerCommandOutput,
} from "../commands/UpdateTableStorageOptimizerCommand";
import { LakeFormationServiceException as __BaseException } from "../models/LakeFormationServiceException";
import {
  AccessDeniedException,
  AddObjectInput,
  AllRowsWildcard,
  AlreadyExistsException,
  AuditContext,
  BatchPermissionsFailureEntry,
  BatchPermissionsRequestEntry,
  CatalogResource,
  ColumnLFTag,
  ColumnWildcard,
  ConcurrentModificationException,
  DatabaseResource,
  DataCellsFilter,
  DataCellsFilterResource,
  DataLakePrincipal,
  DataLakeSettings,
  DataLocationResource,
  DeleteObjectInput,
  DetailsMap,
  EntityNotFoundException,
  ErrorDetail,
  ExecutionStatistics,
  ExpiredException,
  FilterCondition,
  GlueEncryptionException,
  InternalServiceException,
  InvalidInputException,
  LFTag,
  LFTagError,
  LFTagKeyResource,
  LFTagPair,
  LFTagPolicyResource,
  OperationTimeoutException,
  OptimizerType,
  PartitionObjects,
  PartitionValueList,
  Permission,
  PermissionType,
  PermissionTypeMismatchException,
  PlanningStatistics,
  PrincipalPermissions,
  PrincipalResourcePermissions,
  QueryPlanningContext,
  Resource,
  ResourceInfo,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  RowFilter,
  StatisticsNotReadyYetException,
  StorageOptimizer,
  TableObject,
  TableResource,
  TableWildcard,
  TableWithColumnsResource,
  TaggedDatabase,
  TaggedTable,
  ThrottledException,
  TransactionCanceledException,
  TransactionCommitInProgressException,
  TransactionCommittedException,
  TransactionDescription,
  VirtualObject,
  WorkUnitRange,
  WorkUnitsNotReadyYetException,
  WriteOperation,
} from "../models/models_0";

/**
 * serializeAws_restJson1AddLFTagsToResourceCommand
 */
export const se_AddLFTagsToResourceCommand = async (
  input: AddLFTagsToResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AddLFTagsToResource";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.LFTags != null && { LFTags: se_LFTagsList(input.LFTags, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AssumeDecoratedRoleWithSAMLCommand
 */
export const se_AssumeDecoratedRoleWithSAMLCommand = async (
  input: AssumeDecoratedRoleWithSAMLCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/AssumeDecoratedRoleWithSAML";
  let body: any;
  body = JSON.stringify({
    ...(input.DurationSeconds != null && { DurationSeconds: input.DurationSeconds }),
    ...(input.PrincipalArn != null && { PrincipalArn: input.PrincipalArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.SAMLAssertion != null && { SAMLAssertion: input.SAMLAssertion }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchGrantPermissionsCommand
 */
export const se_BatchGrantPermissionsCommand = async (
  input: BatchGrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BatchGrantPermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Entries != null && { Entries: se_BatchPermissionsRequestEntryList(input.Entries, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1BatchRevokePermissionsCommand
 */
export const se_BatchRevokePermissionsCommand = async (
  input: BatchRevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/BatchRevokePermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Entries != null && { Entries: se_BatchPermissionsRequestEntryList(input.Entries, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CancelTransactionCommand
 */
export const se_CancelTransactionCommand = async (
  input: CancelTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CancelTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CommitTransactionCommand
 */
export const se_CommitTransactionCommand = async (
  input: CommitTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CommitTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateDataCellsFilterCommand
 */
export const se_CreateDataCellsFilterCommand = async (
  input: CreateDataCellsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateDataCellsFilter";
  let body: any;
  body = JSON.stringify({
    ...(input.TableData != null && { TableData: se_DataCellsFilter(input.TableData, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1CreateLFTagCommand
 */
export const se_CreateLFTagCommand = async (
  input: CreateLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateLFTag";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValues != null && { TagValues: se_TagValueList(input.TagValues, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteDataCellsFilterCommand
 */
export const se_DeleteDataCellsFilterCommand = async (
  input: DeleteDataCellsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteDataCellsFilter";
  let body: any;
  body = JSON.stringify({
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TableCatalogId != null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName != null && { TableName: input.TableName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteLFTagCommand
 */
export const se_DeleteLFTagCommand = async (
  input: DeleteLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteLFTag";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteObjectsOnCancelCommand
 */
export const se_DeleteObjectsOnCancelCommand = async (
  input: DeleteObjectsOnCancelCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteObjectsOnCancel";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Objects != null && { Objects: se_VirtualObjectList(input.Objects, context) }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeregisterResourceCommand
 */
export const se_DeregisterResourceCommand = async (
  input: DeregisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeregisterResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeResourceCommand
 */
export const se_DescribeResourceCommand = async (
  input: DescribeResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeTransactionCommand
 */
export const se_DescribeTransactionCommand = async (
  input: DescribeTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DescribeTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ExtendTransactionCommand
 */
export const se_ExtendTransactionCommand = async (
  input: ExtendTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ExtendTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDataCellsFilterCommand
 */
export const se_GetDataCellsFilterCommand = async (
  input: GetDataCellsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDataCellsFilter";
  let body: any;
  body = JSON.stringify({
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TableCatalogId != null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName != null && { TableName: input.TableName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDataLakeSettingsCommand
 */
export const se_GetDataLakeSettingsCommand = async (
  input: GetDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetDataLakeSettings";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetEffectivePermissionsForPathCommand
 */
export const se_GetEffectivePermissionsForPathCommand = async (
  input: GetEffectivePermissionsForPathCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetEffectivePermissionsForPath";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetLFTagCommand
 */
export const se_GetLFTagCommand = async (
  input: GetLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetLFTag";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetQueryStateCommand
 */
export const se_GetQueryStateCommand = async (
  input: GetQueryStateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetQueryState";
  let body: any;
  body = JSON.stringify({
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "query-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetQueryStatisticsCommand
 */
export const se_GetQueryStatisticsCommand = async (
  input: GetQueryStatisticsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetQueryStatistics";
  let body: any;
  body = JSON.stringify({
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "query-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetResourceLFTagsCommand
 */
export const se_GetResourceLFTagsCommand = async (
  input: GetResourceLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetResourceLFTags";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
    ...(input.ShowAssignedLFTags != null && { ShowAssignedLFTags: input.ShowAssignedLFTags }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTableObjectsCommand
 */
export const se_GetTableObjectsCommand = async (
  input: GetTableObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetTableObjects";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PartitionPredicate != null && { PartitionPredicate: input.PartitionPredicate }),
    ...(input.QueryAsOfTime != null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTemporaryGluePartitionCredentialsCommand
 */
export const se_GetTemporaryGluePartitionCredentialsCommand = async (
  input: GetTemporaryGluePartitionCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetTemporaryGluePartitionCredentials";
  let body: any;
  body = JSON.stringify({
    ...(input.AuditContext != null && { AuditContext: se_AuditContext(input.AuditContext, context) }),
    ...(input.DurationSeconds != null && { DurationSeconds: input.DurationSeconds }),
    ...(input.Partition != null && { Partition: se_PartitionValueList(input.Partition, context) }),
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.SupportedPermissionTypes != null && {
      SupportedPermissionTypes: se_PermissionTypeList(input.SupportedPermissionTypes, context),
    }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetTemporaryGlueTableCredentialsCommand
 */
export const se_GetTemporaryGlueTableCredentialsCommand = async (
  input: GetTemporaryGlueTableCredentialsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetTemporaryGlueTableCredentials";
  let body: any;
  body = JSON.stringify({
    ...(input.AuditContext != null && { AuditContext: se_AuditContext(input.AuditContext, context) }),
    ...(input.DurationSeconds != null && { DurationSeconds: input.DurationSeconds }),
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.SupportedPermissionTypes != null && {
      SupportedPermissionTypes: se_PermissionTypeList(input.SupportedPermissionTypes, context),
    }),
    ...(input.TableArn != null && { TableArn: input.TableArn }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkUnitResultsCommand
 */
export const se_GetWorkUnitResultsCommand = async (
  input: GetWorkUnitResultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetWorkUnitResults";
  let body: any;
  body = JSON.stringify({
    ...(input.QueryId != null && { QueryId: input.QueryId }),
    ...(input.WorkUnitId != null && { WorkUnitId: input.WorkUnitId }),
    ...(input.WorkUnitToken != null && { WorkUnitToken: input.WorkUnitToken }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "data-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetWorkUnitsCommand
 */
export const se_GetWorkUnitsCommand = async (
  input: GetWorkUnitsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GetWorkUnits";
  let body: any;
  body = JSON.stringify({
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.PageSize != null && { PageSize: input.PageSize }),
    ...(input.QueryId != null && { QueryId: input.QueryId }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "query-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GrantPermissionsCommand
 */
export const se_GrantPermissionsCommand = async (
  input: GrantPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/GrantPermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption != null && {
      PermissionsWithGrantOption: se_PermissionList(input.PermissionsWithGrantOption, context),
    }),
    ...(input.Principal != null && { Principal: se_DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListDataCellsFilterCommand
 */
export const se_ListDataCellsFilterCommand = async (
  input: ListDataCellsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListDataCellsFilter";
  let body: any;
  body = JSON.stringify({
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Table != null && { Table: se_TableResource(input.Table, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListLFTagsCommand
 */
export const se_ListLFTagsCommand = async (
  input: ListLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListLFTags";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType != null && { ResourceShareType: input.ResourceShareType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListPermissionsCommand
 */
export const se_ListPermissionsCommand = async (
  input: ListPermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListPermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.IncludeRelated != null && { IncludeRelated: input.IncludeRelated }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.Principal != null && { Principal: se_DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListResourcesCommand
 */
export const se_ListResourcesCommand = async (
  input: ListResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListResources";
  let body: any;
  body = JSON.stringify({
    ...(input.FilterConditionList != null && {
      FilterConditionList: se_FilterConditionList(input.FilterConditionList, context),
    }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTableStorageOptimizersCommand
 */
export const se_ListTableStorageOptimizersCommand = async (
  input: ListTableStorageOptimizersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTableStorageOptimizers";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StorageOptimizerType != null && { StorageOptimizerType: input.StorageOptimizerType }),
    ...(input.TableName != null && { TableName: input.TableName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTransactionsCommand
 */
export const se_ListTransactionsCommand = async (
  input: ListTransactionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListTransactions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
    ...(input.StatusFilter != null && { StatusFilter: input.StatusFilter }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1PutDataLakeSettingsCommand
 */
export const se_PutDataLakeSettingsCommand = async (
  input: PutDataLakeSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/PutDataLakeSettings";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DataLakeSettings != null && { DataLakeSettings: se_DataLakeSettings(input.DataLakeSettings, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RegisterResourceCommand
 */
export const se_RegisterResourceCommand = async (
  input: RegisterResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RegisterResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.UseServiceLinkedRole != null && { UseServiceLinkedRole: input.UseServiceLinkedRole }),
    ...(input.WithFederation != null && { WithFederation: input.WithFederation }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RemoveLFTagsFromResourceCommand
 */
export const se_RemoveLFTagsFromResourceCommand = async (
  input: RemoveLFTagsFromResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RemoveLFTagsFromResource";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.LFTags != null && { LFTags: se_LFTagsList(input.LFTags, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1RevokePermissionsCommand
 */
export const se_RevokePermissionsCommand = async (
  input: RevokePermissionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/RevokePermissions";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption != null && {
      PermissionsWithGrantOption: se_PermissionList(input.PermissionsWithGrantOption, context),
    }),
    ...(input.Principal != null && { Principal: se_DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchDatabasesByLFTagsCommand
 */
export const se_SearchDatabasesByLFTagsCommand = async (
  input: SearchDatabasesByLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SearchDatabasesByLFTags";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Expression != null && { Expression: se_Expression(input.Expression, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SearchTablesByLFTagsCommand
 */
export const se_SearchTablesByLFTagsCommand = async (
  input: SearchTablesByLFTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/SearchTablesByLFTags";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Expression != null && { Expression: se_Expression(input.Expression, context) }),
    ...(input.MaxResults != null && { MaxResults: input.MaxResults }),
    ...(input.NextToken != null && { NextToken: input.NextToken }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartQueryPlanningCommand
 */
export const se_StartQueryPlanningCommand = async (
  input: StartQueryPlanningCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartQueryPlanning";
  let body: any;
  body = JSON.stringify({
    ...(input.QueryPlanningContext != null && {
      QueryPlanningContext: se_QueryPlanningContext(input.QueryPlanningContext, context),
    }),
    ...(input.QueryString != null && { QueryString: input.QueryString }),
  });
  let { hostname: resolvedHostname } = await context.endpoint();
  if (context.disableHostPrefix !== true) {
    resolvedHostname = "query-" + resolvedHostname;
    if (!__isValidHostname(resolvedHostname)) {
      throw new Error("ValidationError: prefixed hostname must be hostname compatible.");
    }
  }
  return new __HttpRequest({
    protocol,
    hostname: resolvedHostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1StartTransactionCommand
 */
export const se_StartTransactionCommand = async (
  input: StartTransactionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/StartTransaction";
  let body: any;
  body = JSON.stringify({
    ...(input.TransactionType != null && { TransactionType: input.TransactionType }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateDataCellsFilterCommand
 */
export const se_UpdateDataCellsFilterCommand = async (
  input: UpdateDataCellsFilterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateDataCellsFilter";
  let body: any;
  body = JSON.stringify({
    ...(input.TableData != null && { TableData: se_DataCellsFilter(input.TableData, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateLFTagCommand
 */
export const se_UpdateLFTagCommand = async (
  input: UpdateLFTagCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateLFTag";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValuesToAdd != null && { TagValuesToAdd: se_TagValueList(input.TagValuesToAdd, context) }),
    ...(input.TagValuesToDelete != null && { TagValuesToDelete: se_TagValueList(input.TagValuesToDelete, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateResourceCommand
 */
export const se_UpdateResourceCommand = async (
  input: UpdateResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateResource";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn != null && { RoleArn: input.RoleArn }),
    ...(input.WithFederation != null && { WithFederation: input.WithFederation }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTableObjectsCommand
 */
export const se_UpdateTableObjectsCommand = async (
  input: UpdateTableObjectsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateTableObjects";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
    ...(input.WriteOperations != null && { WriteOperations: se_WriteOperationList(input.WriteOperations, context) }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UpdateTableStorageOptimizerCommand
 */
export const se_UpdateTableStorageOptimizerCommand = async (
  input: UpdateTableStorageOptimizerCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/UpdateTableStorageOptimizer";
  let body: any;
  body = JSON.stringify({
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.StorageOptimizerConfig != null && {
      StorageOptimizerConfig: se_StorageOptimizerConfigMap(input.StorageOptimizerConfig, context),
    }),
    ...(input.TableName != null && { TableName: input.TableName }),
  });
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AddLFTagsToResourceCommand
 */
export const de_AddLFTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AddLFTagsToResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures != null) {
    contents.Failures = de_LFTagErrors(data.Failures, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AddLFTagsToResourceCommandError
 */
const de_AddLFTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1AssumeDecoratedRoleWithSAMLCommand
 */
export const de_AssumeDecoratedRoleWithSAMLCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeDecoratedRoleWithSAMLCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_AssumeDecoratedRoleWithSAMLCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessKeyId != null) {
    contents.AccessKeyId = __expectString(data.AccessKeyId);
  }
  if (data.Expiration != null) {
    contents.Expiration = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.Expiration)));
  }
  if (data.SecretAccessKey != null) {
    contents.SecretAccessKey = __expectString(data.SecretAccessKey);
  }
  if (data.SessionToken != null) {
    contents.SessionToken = __expectString(data.SessionToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1AssumeDecoratedRoleWithSAMLCommandError
 */
const de_AssumeDecoratedRoleWithSAMLCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssumeDecoratedRoleWithSAMLCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchGrantPermissionsCommand
 */
export const de_BatchGrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchGrantPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures != null) {
    contents.Failures = de_BatchPermissionsFailureList(data.Failures, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchGrantPermissionsCommandError
 */
const de_BatchGrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1BatchRevokePermissionsCommand
 */
export const de_BatchRevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_BatchRevokePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures != null) {
    contents.Failures = de_BatchPermissionsFailureList(data.Failures, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1BatchRevokePermissionsCommandError
 */
const de_BatchRevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CancelTransactionCommand
 */
export const de_CancelTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CancelTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelTransactionCommandError
 */
const de_CancelTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await de_TransactionCommitInProgressExceptionRes(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await de_TransactionCommittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CommitTransactionCommand
 */
export const de_CommitTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommitTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionStatus != null) {
    contents.TransactionStatus = __expectString(data.TransactionStatus);
  }
  return contents;
};

/**
 * deserializeAws_restJson1CommitTransactionCommandError
 */
const de_CommitTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateDataCellsFilterCommand
 */
export const de_CreateDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateDataCellsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateDataCellsFilterCommandError
 */
const de_CreateDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.lakeformation#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLFTagCommand
 */
export const de_CreateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLFTagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLFTagCommandError
 */
const de_CreateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteDataCellsFilterCommand
 */
export const de_DeleteDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteDataCellsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteDataCellsFilterCommandError
 */
const de_DeleteDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLFTagCommand
 */
export const de_DeleteLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLFTagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLFTagCommandError
 */
const de_DeleteLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteObjectsOnCancelCommand
 */
export const de_DeleteObjectsOnCancelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsOnCancelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteObjectsOnCancelCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteObjectsOnCancelCommandError
 */
const de_DeleteObjectsOnCancelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsOnCancelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await de_TransactionCommittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeregisterResourceCommand
 */
export const de_DeregisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeregisterResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeregisterResourceCommandError
 */
const de_DeregisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeResourceCommand
 */
export const de_DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceInfo != null) {
    contents.ResourceInfo = de_ResourceInfo(data.ResourceInfo, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeResourceCommandError
 */
const de_DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DescribeTransactionCommand
 */
export const de_DescribeTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionDescription != null) {
    contents.TransactionDescription = de_TransactionDescription(data.TransactionDescription, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1DescribeTransactionCommandError
 */
const de_DescribeTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ExtendTransactionCommand
 */
export const de_ExtendTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExtendTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ExtendTransactionCommandError
 */
const de_ExtendTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await de_TransactionCommitInProgressExceptionRes(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await de_TransactionCommittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDataCellsFilterCommand
 */
export const de_GetDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataCellsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataCellsFilter != null) {
    contents.DataCellsFilter = de_DataCellsFilter(data.DataCellsFilter, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataCellsFilterCommandError
 */
const de_GetDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetDataLakeSettingsCommand
 */
export const de_GetDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataLakeSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataLakeSettings != null) {
    contents.DataLakeSettings = de_DataLakeSettings(data.DataLakeSettings, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetDataLakeSettingsCommandError
 */
const de_GetDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetEffectivePermissionsForPathCommand
 */
export const de_GetEffectivePermissionsForPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetEffectivePermissionsForPathCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Permissions != null) {
    contents.Permissions = de_PrincipalResourcePermissionsList(data.Permissions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetEffectivePermissionsForPathCommandError
 */
const de_GetEffectivePermissionsForPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetLFTagCommand
 */
export const de_GetLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLFTagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogId != null) {
    contents.CatalogId = __expectString(data.CatalogId);
  }
  if (data.TagKey != null) {
    contents.TagKey = __expectString(data.TagKey);
  }
  if (data.TagValues != null) {
    contents.TagValues = de_TagValueList(data.TagValues, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetLFTagCommandError
 */
const de_GetLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetQueryStateCommand
 */
export const de_GetQueryStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetQueryStateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Error != null) {
    contents.Error = __expectString(data.Error);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStateCommandError
 */
const de_GetQueryStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetQueryStatisticsCommand
 */
export const de_GetQueryStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetQueryStatisticsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExecutionStatistics != null) {
    contents.ExecutionStatistics = de_ExecutionStatistics(data.ExecutionStatistics, context);
  }
  if (data.PlanningStatistics != null) {
    contents.PlanningStatistics = de_PlanningStatistics(data.PlanningStatistics, context);
  }
  if (data.QuerySubmissionTime != null) {
    contents.QuerySubmissionTime = __expectNonNull(__parseRfc3339DateTimeWithOffset(data.QuerySubmissionTime));
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetQueryStatisticsCommandError
 */
const de_GetQueryStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await de_ExpiredExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "StatisticsNotReadyYetException":
    case "com.amazonaws.lakeformation#StatisticsNotReadyYetException":
      throw await de_StatisticsNotReadyYetExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetResourceLFTagsCommand
 */
export const de_GetResourceLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetResourceLFTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LFTagOnDatabase != null) {
    contents.LFTagOnDatabase = de_LFTagsList(data.LFTagOnDatabase, context);
  }
  if (data.LFTagsOnColumns != null) {
    contents.LFTagsOnColumns = de_ColumnLFTagsList(data.LFTagsOnColumns, context);
  }
  if (data.LFTagsOnTable != null) {
    contents.LFTagsOnTable = de_LFTagsList(data.LFTagsOnTable, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetResourceLFTagsCommandError
 */
const de_GetResourceLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTableObjectsCommand
 */
export const de_GetTableObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTableObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Objects != null) {
    contents.Objects = de_PartitionedTableObjectsList(data.Objects, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTableObjectsCommandError
 */
const de_GetTableObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await de_TransactionCommittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTemporaryGluePartitionCredentialsCommand
 */
export const de_GetTemporaryGluePartitionCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemporaryGluePartitionCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessKeyId != null) {
    contents.AccessKeyId = __expectString(data.AccessKeyId);
  }
  if (data.Expiration != null) {
    contents.Expiration = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.Expiration)));
  }
  if (data.SecretAccessKey != null) {
    contents.SecretAccessKey = __expectString(data.SecretAccessKey);
  }
  if (data.SessionToken != null) {
    contents.SessionToken = __expectString(data.SessionToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTemporaryGluePartitionCredentialsCommandError
 */
const de_GetTemporaryGluePartitionCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.lakeformation#PermissionTypeMismatchException":
      throw await de_PermissionTypeMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetTemporaryGlueTableCredentialsCommand
 */
export const de_GetTemporaryGlueTableCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGlueTableCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetTemporaryGlueTableCredentialsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessKeyId != null) {
    contents.AccessKeyId = __expectString(data.AccessKeyId);
  }
  if (data.Expiration != null) {
    contents.Expiration = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.Expiration)));
  }
  if (data.SecretAccessKey != null) {
    contents.SecretAccessKey = __expectString(data.SecretAccessKey);
  }
  if (data.SessionToken != null) {
    contents.SessionToken = __expectString(data.SessionToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetTemporaryGlueTableCredentialsCommandError
 */
const de_GetTemporaryGlueTableCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGlueTableCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.lakeformation#PermissionTypeMismatchException":
      throw await de_PermissionTypeMismatchExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkUnitResultsCommand
 */
export const de_GetWorkUnitResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetWorkUnitResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkUnitResultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.ResultStream = data;
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkUnitResultsCommandError
 */
const de_GetWorkUnitResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await de_ExpiredExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GetWorkUnitsCommand
 */
export const de_GetWorkUnitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetWorkUnitsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueryId != null) {
    contents.QueryId = __expectString(data.QueryId);
  }
  if (data.WorkUnitRanges != null) {
    contents.WorkUnitRanges = de_WorkUnitRangeList(data.WorkUnitRanges, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1GetWorkUnitsCommandError
 */
const de_GetWorkUnitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await de_ExpiredExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "WorkUnitsNotReadyYetException":
    case "com.amazonaws.lakeformation#WorkUnitsNotReadyYetException":
      throw await de_WorkUnitsNotReadyYetExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1GrantPermissionsCommand
 */
export const de_GrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GrantPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1GrantPermissionsCommandError
 */
const de_GrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListDataCellsFilterCommand
 */
export const de_ListDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListDataCellsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataCellsFilters != null) {
    contents.DataCellsFilters = de_DataCellsFilterList(data.DataCellsFilters, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListDataCellsFilterCommandError
 */
const de_ListDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLFTagsCommand
 */
export const de_ListLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLFTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LFTags != null) {
    contents.LFTags = de_LFTagsList(data.LFTags, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListLFTagsCommandError
 */
const de_ListLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListPermissionsCommand
 */
export const de_ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PrincipalResourcePermissions != null) {
    contents.PrincipalResourcePermissions = de_PrincipalResourcePermissionsList(
      data.PrincipalResourcePermissions,
      context
    );
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListPermissionsCommandError
 */
const de_ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListResourcesCommand
 */
export const de_ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceInfoList != null) {
    contents.ResourceInfoList = de_ResourceInfoList(data.ResourceInfoList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListResourcesCommandError
 */
const de_ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTableStorageOptimizersCommand
 */
export const de_ListTableStorageOptimizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableStorageOptimizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTableStorageOptimizersCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StorageOptimizerList != null) {
    contents.StorageOptimizerList = de_StorageOptimizerList(data.StorageOptimizerList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTableStorageOptimizersCommandError
 */
const de_ListTableStorageOptimizersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableStorageOptimizersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListTransactionsCommand
 */
export const de_ListTransactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTransactionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Transactions != null) {
    contents.Transactions = de_TransactionDescriptionList(data.Transactions, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1ListTransactionsCommandError
 */
const de_ListTransactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1PutDataLakeSettingsCommand
 */
export const de_PutDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutDataLakeSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutDataLakeSettingsCommandError
 */
const de_PutDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RegisterResourceCommand
 */
export const de_RegisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RegisterResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RegisterResourceCommandError
 */
const de_RegisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.lakeformation#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await de_ResourceNumberLimitExceededExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RemoveLFTagsFromResourceCommand
 */
export const de_RemoveLFTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RemoveLFTagsFromResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures != null) {
    contents.Failures = de_LFTagErrors(data.Failures, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1RemoveLFTagsFromResourceCommandError
 */
const de_RemoveLFTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1RevokePermissionsCommand
 */
export const de_RevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_RevokePermissionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokePermissionsCommandError
 */
const de_RevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SearchDatabasesByLFTagsCommand
 */
export const de_SearchDatabasesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchDatabasesByLFTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DatabaseList != null) {
    contents.DatabaseList = de_DatabaseLFTagsList(data.DatabaseList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchDatabasesByLFTagsCommandError
 */
const de_SearchDatabasesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1SearchTablesByLFTagsCommand
 */
export const de_SearchTablesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_SearchTablesByLFTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TableList != null) {
    contents.TableList = de_TableLFTagsList(data.TableList, context);
  }
  return contents;
};

/**
 * deserializeAws_restJson1SearchTablesByLFTagsCommandError
 */
const de_SearchTablesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await de_GlueEncryptionExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartQueryPlanningCommand
 */
export const de_StartQueryPlanningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryPlanningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartQueryPlanningCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QueryId != null) {
    contents.QueryId = __expectString(data.QueryId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartQueryPlanningCommandError
 */
const de_StartQueryPlanningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryPlanningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await de_ThrottledExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1StartTransactionCommand
 */
export const de_StartTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartTransactionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionId != null) {
    contents.TransactionId = __expectString(data.TransactionId);
  }
  return contents;
};

/**
 * deserializeAws_restJson1StartTransactionCommandError
 */
const de_StartTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateDataCellsFilterCommand
 */
export const de_UpdateDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateDataCellsFilterCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateDataCellsFilterCommandError
 */
const de_UpdateDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateLFTagCommand
 */
export const de_UpdateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateLFTagCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateLFTagCommandError
 */
const de_UpdateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateResourceCommand
 */
export const de_UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateResourceCommandError
 */
const de_UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTableObjectsCommand
 */
export const de_UpdateTableObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTableObjectsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTableObjectsCommandError
 */
const de_UpdateTableObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await de_ConcurrentModificationExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await de_OperationTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await de_ResourceNotReadyExceptionRes(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await de_TransactionCommitInProgressExceptionRes(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await de_TransactionCommittedExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1UpdateTableStorageOptimizerCommand
 */
export const de_UpdateTableStorageOptimizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableStorageOptimizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateTableStorageOptimizerCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Result != null) {
    contents.Result = __expectString(data.Result);
  }
  return contents;
};

/**
 * deserializeAws_restJson1UpdateTableStorageOptimizerCommandError
 */
const de_UpdateTableStorageOptimizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableStorageOptimizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await de_AccessDeniedExceptionRes(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await de_EntityNotFoundExceptionRes(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await de_InternalServiceExceptionRes(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await de_InvalidInputExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
        errorCode,
      });
  }
};

const map = __map;
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConcurrentModificationExceptionRes
 */
const de_ConcurrentModificationExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1EntityNotFoundExceptionRes
 */
const de_EntityNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ExpiredExceptionRes
 */
const de_ExpiredExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ExpiredException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1GlueEncryptionExceptionRes
 */
const de_GlueEncryptionExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new GlueEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InternalServiceExceptionRes
 */
const de_InternalServiceExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidInputExceptionRes
 */
const de_InvalidInputExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1OperationTimeoutExceptionRes
 */
const de_OperationTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new OperationTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PermissionTypeMismatchExceptionRes
 */
const de_PermissionTypeMismatchExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionTypeMismatchException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new PermissionTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotReadyExceptionRes
 */
const de_ResourceNotReadyExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNumberLimitExceededExceptionRes
 */
const de_ResourceNumberLimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNumberLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1StatisticsNotReadyYetExceptionRes
 */
const de_StatisticsNotReadyYetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatisticsNotReadyYetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new StatisticsNotReadyYetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ThrottledExceptionRes
 */
const de_ThrottledExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ThrottledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransactionCanceledExceptionRes
 */
const de_TransactionCanceledExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransactionCommitInProgressExceptionRes
 */
const de_TransactionCommitInProgressExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCommitInProgressException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCommitInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1TransactionCommittedExceptionRes
 */
const de_TransactionCommittedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCommittedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCommittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1WorkUnitsNotReadyYetExceptionRes
 */
const de_WorkUnitsNotReadyYetExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkUnitsNotReadyYetException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new WorkUnitsNotReadyYetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AddObjectInput
 */
const se_AddObjectInput = (input: AddObjectInput, context: __SerdeContext): any => {
  return {
    ...(input.ETag != null && { ETag: input.ETag }),
    ...(input.PartitionValues != null && { PartitionValues: se_PartitionValuesList(input.PartitionValues, context) }),
    ...(input.Size != null && { Size: input.Size }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1AllRowsWildcard
 */
const se_AllRowsWildcard = (input: AllRowsWildcard, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1AuditContext
 */
const se_AuditContext = (input: AuditContext, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalAuditContext != null && { AdditionalAuditContext: input.AdditionalAuditContext }),
  };
};

/**
 * serializeAws_restJson1AuthorizedSessionTagValueList
 */
const se_AuthorizedSessionTagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1BatchPermissionsRequestEntry
 */
const se_BatchPermissionsRequestEntry = (input: BatchPermissionsRequestEntry, context: __SerdeContext): any => {
  return {
    ...(input.Id != null && { Id: input.Id }),
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption != null && {
      PermissionsWithGrantOption: se_PermissionList(input.PermissionsWithGrantOption, context),
    }),
    ...(input.Principal != null && { Principal: se_DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource != null && { Resource: se_Resource(input.Resource, context) }),
  };
};

/**
 * serializeAws_restJson1BatchPermissionsRequestEntryList
 */
const se_BatchPermissionsRequestEntryList = (input: BatchPermissionsRequestEntry[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BatchPermissionsRequestEntry(entry, context);
    });
};

/**
 * serializeAws_restJson1CatalogResource
 */
const se_CatalogResource = (input: CatalogResource, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1ColumnNames
 */
const se_ColumnNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ColumnWildcard
 */
const se_ColumnWildcard = (input: ColumnWildcard, context: __SerdeContext): any => {
  return {
    ...(input.ExcludedColumnNames != null && {
      ExcludedColumnNames: se_ColumnNames(input.ExcludedColumnNames, context),
    }),
  };
};

/**
 * serializeAws_restJson1DatabaseResource
 */
const se_DatabaseResource = (input: DatabaseResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1DataCellsFilter
 */
const se_DataCellsFilter = (input: DataCellsFilter, context: __SerdeContext): any => {
  return {
    ...(input.ColumnNames != null && { ColumnNames: se_ColumnNames(input.ColumnNames, context) }),
    ...(input.ColumnWildcard != null && { ColumnWildcard: se_ColumnWildcard(input.ColumnWildcard, context) }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.RowFilter != null && { RowFilter: se_RowFilter(input.RowFilter, context) }),
    ...(input.TableCatalogId != null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName != null && { TableName: input.TableName }),
    ...(input.VersionId != null && { VersionId: input.VersionId }),
  };
};

/**
 * serializeAws_restJson1DataCellsFilterResource
 */
const se_DataCellsFilterResource = (input: DataCellsFilterResource, context: __SerdeContext): any => {
  return {
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TableCatalogId != null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName != null && { TableName: input.TableName }),
  };
};

/**
 * serializeAws_restJson1DataLakePrincipal
 */
const se_DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.DataLakePrincipalIdentifier != null && {
      DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier,
    }),
  };
};

/**
 * serializeAws_restJson1DataLakePrincipalList
 */
const se_DataLakePrincipalList = (input: DataLakePrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataLakePrincipal(entry, context);
    });
};

/**
 * serializeAws_restJson1DataLakeSettings
 */
const se_DataLakeSettings = (input: DataLakeSettings, context: __SerdeContext): any => {
  return {
    ...(input.AllowExternalDataFiltering != null && { AllowExternalDataFiltering: input.AllowExternalDataFiltering }),
    ...(input.AuthorizedSessionTagValueList != null && {
      AuthorizedSessionTagValueList: se_AuthorizedSessionTagValueList(input.AuthorizedSessionTagValueList, context),
    }),
    ...(input.CreateDatabaseDefaultPermissions != null && {
      CreateDatabaseDefaultPermissions: se_PrincipalPermissionsList(input.CreateDatabaseDefaultPermissions, context),
    }),
    ...(input.CreateTableDefaultPermissions != null && {
      CreateTableDefaultPermissions: se_PrincipalPermissionsList(input.CreateTableDefaultPermissions, context),
    }),
    ...(input.DataLakeAdmins != null && { DataLakeAdmins: se_DataLakePrincipalList(input.DataLakeAdmins, context) }),
    ...(input.ExternalDataFilteringAllowList != null && {
      ExternalDataFilteringAllowList: se_DataLakePrincipalList(input.ExternalDataFilteringAllowList, context),
    }),
    ...(input.Parameters != null && { Parameters: se_ParametersMap(input.Parameters, context) }),
    ...(input.TrustedResourceOwners != null && {
      TrustedResourceOwners: se_TrustedResourceOwners(input.TrustedResourceOwners, context),
    }),
  };
};

/**
 * serializeAws_restJson1DataLocationResource
 */
const se_DataLocationResource = (input: DataLocationResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
  };
};

/**
 * serializeAws_restJson1DeleteObjectInput
 */
const se_DeleteObjectInput = (input: DeleteObjectInput, context: __SerdeContext): any => {
  return {
    ...(input.ETag != null && { ETag: input.ETag }),
    ...(input.PartitionValues != null && { PartitionValues: se_PartitionValuesList(input.PartitionValues, context) }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1Expression
 */
const se_Expression = (input: LFTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LFTag(entry, context);
    });
};

/**
 * serializeAws_restJson1FilterCondition
 */
const se_FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator != null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Field != null && { Field: input.Field }),
    ...(input.StringValueList != null && { StringValueList: se_StringValueList(input.StringValueList, context) }),
  };
};

/**
 * serializeAws_restJson1FilterConditionList
 */
const se_FilterConditionList = (input: FilterCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FilterCondition(entry, context);
    });
};

/**
 * serializeAws_restJson1LFTag
 */
const se_LFTag = (input: LFTag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValues != null && { TagValues: se_TagValueList(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1LFTagKeyResource
 */
const se_LFTagKeyResource = (input: LFTagKeyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValues != null && { TagValues: se_TagValueList(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1LFTagPair
 */
const se_LFTagPair = (input: LFTagPair, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.TagKey != null && { TagKey: input.TagKey }),
    ...(input.TagValues != null && { TagValues: se_TagValueList(input.TagValues, context) }),
  };
};

/**
 * serializeAws_restJson1LFTagPolicyResource
 */
const se_LFTagPolicyResource = (input: LFTagPolicyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.Expression != null && { Expression: se_Expression(input.Expression, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_restJson1LFTagsList
 */
const se_LFTagsList = (input: LFTagPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_LFTagPair(entry, context);
    });
};

/**
 * serializeAws_restJson1ParametersMap
 */
const se_ParametersMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1PartitionValueList
 */
const se_PartitionValueList = (input: PartitionValueList, context: __SerdeContext): any => {
  return {
    ...(input.Values != null && { Values: se_ValueStringList(input.Values, context) }),
  };
};

/**
 * serializeAws_restJson1PartitionValuesList
 */
const se_PartitionValuesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PermissionList
 */
const se_PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PermissionTypeList
 */
const se_PermissionTypeList = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1PrincipalPermissions
 */
const se_PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return {
    ...(input.Permissions != null && { Permissions: se_PermissionList(input.Permissions, context) }),
    ...(input.Principal != null && { Principal: se_DataLakePrincipal(input.Principal, context) }),
  };
};

/**
 * serializeAws_restJson1PrincipalPermissionsList
 */
const se_PrincipalPermissionsList = (input: PrincipalPermissions[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_PrincipalPermissions(entry, context);
    });
};

/**
 * serializeAws_restJson1QueryParameterMap
 */
const se_QueryParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1QueryPlanningContext
 */
const se_QueryPlanningContext = (input: QueryPlanningContext, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.QueryAsOfTime != null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.QueryParameters != null && { QueryParameters: se_QueryParameterMap(input.QueryParameters, context) }),
    ...(input.TransactionId != null && { TransactionId: input.TransactionId }),
  };
};

/**
 * serializeAws_restJson1Resource
 */
const se_Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Catalog != null && { Catalog: se_CatalogResource(input.Catalog, context) }),
    ...(input.DataCellsFilter != null && {
      DataCellsFilter: se_DataCellsFilterResource(input.DataCellsFilter, context),
    }),
    ...(input.DataLocation != null && { DataLocation: se_DataLocationResource(input.DataLocation, context) }),
    ...(input.Database != null && { Database: se_DatabaseResource(input.Database, context) }),
    ...(input.LFTag != null && { LFTag: se_LFTagKeyResource(input.LFTag, context) }),
    ...(input.LFTagPolicy != null && { LFTagPolicy: se_LFTagPolicyResource(input.LFTagPolicy, context) }),
    ...(input.Table != null && { Table: se_TableResource(input.Table, context) }),
    ...(input.TableWithColumns != null && {
      TableWithColumns: se_TableWithColumnsResource(input.TableWithColumns, context),
    }),
  };
};

/**
 * serializeAws_restJson1RowFilter
 */
const se_RowFilter = (input: RowFilter, context: __SerdeContext): any => {
  return {
    ...(input.AllRowsWildcard != null && { AllRowsWildcard: se_AllRowsWildcard(input.AllRowsWildcard, context) }),
    ...(input.FilterExpression != null && { FilterExpression: input.FilterExpression }),
  };
};

/**
 * serializeAws_restJson1StorageOptimizerConfig
 */
const se_StorageOptimizerConfig = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StorageOptimizerConfigMap
 */
const se_StorageOptimizerConfigMap = (input: Record<string, Record<string, string>>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [OptimizerType | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = se_StorageOptimizerConfig(value, context);
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1StringValueList
 */
const se_StringValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TableResource
 */
const se_TableResource = (input: TableResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
    ...(input.TableWildcard != null && { TableWildcard: se_TableWildcard(input.TableWildcard, context) }),
  };
};

/**
 * serializeAws_restJson1TableWildcard
 */
const se_TableWildcard = (input: TableWildcard, context: __SerdeContext): any => {
  return {};
};

/**
 * serializeAws_restJson1TableWithColumnsResource
 */
const se_TableWithColumnsResource = (input: TableWithColumnsResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId != null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames != null && { ColumnNames: se_ColumnNames(input.ColumnNames, context) }),
    ...(input.ColumnWildcard != null && { ColumnWildcard: se_ColumnWildcard(input.ColumnWildcard, context) }),
    ...(input.DatabaseName != null && { DatabaseName: input.DatabaseName }),
    ...(input.Name != null && { Name: input.Name }),
  };
};

/**
 * serializeAws_restJson1TagValueList
 */
const se_TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TrustedResourceOwners
 */
const se_TrustedResourceOwners = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ValueStringList
 */
const se_ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1VirtualObject
 */
const se_VirtualObject = (input: VirtualObject, context: __SerdeContext): any => {
  return {
    ...(input.ETag != null && { ETag: input.ETag }),
    ...(input.Uri != null && { Uri: input.Uri }),
  };
};

/**
 * serializeAws_restJson1VirtualObjectList
 */
const se_VirtualObjectList = (input: VirtualObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_VirtualObject(entry, context);
    });
};

/**
 * serializeAws_restJson1WriteOperation
 */
const se_WriteOperation = (input: WriteOperation, context: __SerdeContext): any => {
  return {
    ...(input.AddObject != null && { AddObject: se_AddObjectInput(input.AddObject, context) }),
    ...(input.DeleteObject != null && { DeleteObject: se_DeleteObjectInput(input.DeleteObject, context) }),
  };
};

/**
 * serializeAws_restJson1WriteOperationList
 */
const se_WriteOperationList = (input: WriteOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_WriteOperation(entry, context);
    });
};

/**
 * deserializeAws_restJson1AllRowsWildcard
 */
const de_AllRowsWildcard = (output: any, context: __SerdeContext): AllRowsWildcard => {
  return {} as any;
};

/**
 * deserializeAws_restJson1AuthorizedSessionTagValueList
 */
const de_AuthorizedSessionTagValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPermissionsFailureEntry
 */
const de_BatchPermissionsFailureEntry = (output: any, context: __SerdeContext): BatchPermissionsFailureEntry => {
  return {
    Error: output.Error != null ? de_ErrorDetail(output.Error, context) : undefined,
    RequestEntry:
      output.RequestEntry != null ? de_BatchPermissionsRequestEntry(output.RequestEntry, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BatchPermissionsFailureList
 */
const de_BatchPermissionsFailureList = (output: any, context: __SerdeContext): BatchPermissionsFailureEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BatchPermissionsFailureEntry(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BatchPermissionsRequestEntry
 */
const de_BatchPermissionsRequestEntry = (output: any, context: __SerdeContext): BatchPermissionsRequestEntry => {
  return {
    Id: __expectString(output.Id),
    Permissions: output.Permissions != null ? de_PermissionList(output.Permissions, context) : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption != null
        ? de_PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal: output.Principal != null ? de_DataLakePrincipal(output.Principal, context) : undefined,
    Resource: output.Resource != null ? de_Resource(output.Resource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CatalogResource
 */
const de_CatalogResource = (output: any, context: __SerdeContext): CatalogResource => {
  return {} as any;
};

/**
 * deserializeAws_restJson1ColumnLFTag
 */
const de_ColumnLFTag = (output: any, context: __SerdeContext): ColumnLFTag => {
  return {
    LFTags: output.LFTags != null ? de_LFTagsList(output.LFTags, context) : undefined,
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1ColumnLFTagsList
 */
const de_ColumnLFTagsList = (output: any, context: __SerdeContext): ColumnLFTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ColumnLFTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ColumnNames
 */
const de_ColumnNames = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ColumnWildcard
 */
const de_ColumnWildcard = (output: any, context: __SerdeContext): ColumnWildcard => {
  return {
    ExcludedColumnNames:
      output.ExcludedColumnNames != null ? de_ColumnNames(output.ExcludedColumnNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DatabaseLFTagsList
 */
const de_DatabaseLFTagsList = (output: any, context: __SerdeContext): TaggedDatabase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaggedDatabase(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DatabaseResource
 */
const de_DatabaseResource = (output: any, context: __SerdeContext): DatabaseResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1DataCellsFilter
 */
const de_DataCellsFilter = (output: any, context: __SerdeContext): DataCellsFilter => {
  return {
    ColumnNames: output.ColumnNames != null ? de_ColumnNames(output.ColumnNames, context) : undefined,
    ColumnWildcard: output.ColumnWildcard != null ? de_ColumnWildcard(output.ColumnWildcard, context) : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    RowFilter: output.RowFilter != null ? de_RowFilter(output.RowFilter, context) : undefined,
    TableCatalogId: __expectString(output.TableCatalogId),
    TableName: __expectString(output.TableName),
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_restJson1DataCellsFilterList
 */
const de_DataCellsFilterList = (output: any, context: __SerdeContext): DataCellsFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataCellsFilter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataCellsFilterResource
 */
const de_DataCellsFilterResource = (output: any, context: __SerdeContext): DataCellsFilterResource => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableCatalogId: __expectString(output.TableCatalogId),
    TableName: __expectString(output.TableName),
  } as any;
};

/**
 * deserializeAws_restJson1DataLakePrincipal
 */
const de_DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return {
    DataLakePrincipalIdentifier: __expectString(output.DataLakePrincipalIdentifier),
  } as any;
};

/**
 * deserializeAws_restJson1DataLakePrincipalList
 */
const de_DataLakePrincipalList = (output: any, context: __SerdeContext): DataLakePrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataLakePrincipal(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DataLakeSettings
 */
const de_DataLakeSettings = (output: any, context: __SerdeContext): DataLakeSettings => {
  return {
    AllowExternalDataFiltering: __expectBoolean(output.AllowExternalDataFiltering),
    AuthorizedSessionTagValueList:
      output.AuthorizedSessionTagValueList != null
        ? de_AuthorizedSessionTagValueList(output.AuthorizedSessionTagValueList, context)
        : undefined,
    CreateDatabaseDefaultPermissions:
      output.CreateDatabaseDefaultPermissions != null
        ? de_PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context)
        : undefined,
    CreateTableDefaultPermissions:
      output.CreateTableDefaultPermissions != null
        ? de_PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
        : undefined,
    DataLakeAdmins:
      output.DataLakeAdmins != null ? de_DataLakePrincipalList(output.DataLakeAdmins, context) : undefined,
    ExternalDataFilteringAllowList:
      output.ExternalDataFilteringAllowList != null
        ? de_DataLakePrincipalList(output.ExternalDataFilteringAllowList, context)
        : undefined,
    Parameters: output.Parameters != null ? de_ParametersMap(output.Parameters, context) : undefined,
    TrustedResourceOwners:
      output.TrustedResourceOwners != null
        ? de_TrustedResourceOwners(output.TrustedResourceOwners, context)
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataLocationResource
 */
const de_DataLocationResource = (output: any, context: __SerdeContext): DataLocationResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

/**
 * deserializeAws_restJson1DetailsMap
 */
const de_DetailsMap = (output: any, context: __SerdeContext): DetailsMap => {
  return {
    ResourceShare: output.ResourceShare != null ? de_ResourceShareList(output.ResourceShare, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ErrorDetail
 */
const de_ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ExecutionStatistics
 */
const de_ExecutionStatistics = (output: any, context: __SerdeContext): ExecutionStatistics => {
  return {
    AverageExecutionTimeMillis: __expectLong(output.AverageExecutionTimeMillis),
    DataScannedBytes: __expectLong(output.DataScannedBytes),
    WorkUnitsExecutedCount: __expectLong(output.WorkUnitsExecutedCount),
  } as any;
};

/**
 * deserializeAws_restJson1Expression
 */
const de_Expression = (output: any, context: __SerdeContext): LFTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LFTag(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LFTag
 */
const de_LFTag = (output: any, context: __SerdeContext): LFTag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValues: output.TagValues != null ? de_TagValueList(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LFTagError
 */
const de_LFTagError = (output: any, context: __SerdeContext): LFTagError => {
  return {
    Error: output.Error != null ? de_ErrorDetail(output.Error, context) : undefined,
    LFTag: output.LFTag != null ? de_LFTagPair(output.LFTag, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LFTagErrors
 */
const de_LFTagErrors = (output: any, context: __SerdeContext): LFTagError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LFTagError(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1LFTagKeyResource
 */
const de_LFTagKeyResource = (output: any, context: __SerdeContext): LFTagKeyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues: output.TagValues != null ? de_TagValueList(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LFTagPair
 */
const de_LFTagPair = (output: any, context: __SerdeContext): LFTagPair => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues: output.TagValues != null ? de_TagValueList(output.TagValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1LFTagPolicyResource
 */
const de_LFTagPolicyResource = (output: any, context: __SerdeContext): LFTagPolicyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Expression: output.Expression != null ? de_Expression(output.Expression, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1LFTagsList
 */
const de_LFTagsList = (output: any, context: __SerdeContext): LFTagPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LFTagPair(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ParametersMap
 */
const de_ParametersMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1PartitionedTableObjectsList
 */
const de_PartitionedTableObjectsList = (output: any, context: __SerdeContext): PartitionObjects[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartitionObjects(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PartitionObjects
 */
const de_PartitionObjects = (output: any, context: __SerdeContext): PartitionObjects => {
  return {
    Objects: output.Objects != null ? de_TableObjectList(output.Objects, context) : undefined,
    PartitionValues:
      output.PartitionValues != null ? de_PartitionValuesList(output.PartitionValues, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PartitionValuesList
 */
const de_PartitionValuesList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PermissionList
 */
const de_PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PlanningStatistics
 */
const de_PlanningStatistics = (output: any, context: __SerdeContext): PlanningStatistics => {
  return {
    EstimatedDataToScanBytes: __expectLong(output.EstimatedDataToScanBytes),
    PlanningTimeMillis: __expectLong(output.PlanningTimeMillis),
    QueueTimeMillis: __expectLong(output.QueueTimeMillis),
    WorkUnitsGeneratedCount: __expectLong(output.WorkUnitsGeneratedCount),
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalPermissions
 */
const de_PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return {
    Permissions: output.Permissions != null ? de_PermissionList(output.Permissions, context) : undefined,
    Principal: output.Principal != null ? de_DataLakePrincipal(output.Principal, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalPermissionsList
 */
const de_PrincipalPermissionsList = (output: any, context: __SerdeContext): PrincipalPermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PrincipalPermissions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PrincipalResourcePermissions
 */
const de_PrincipalResourcePermissions = (output: any, context: __SerdeContext): PrincipalResourcePermissions => {
  return {
    AdditionalDetails: output.AdditionalDetails != null ? de_DetailsMap(output.AdditionalDetails, context) : undefined,
    Permissions: output.Permissions != null ? de_PermissionList(output.Permissions, context) : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption != null
        ? de_PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal: output.Principal != null ? de_DataLakePrincipal(output.Principal, context) : undefined,
    Resource: output.Resource != null ? de_Resource(output.Resource, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PrincipalResourcePermissionsList
 */
const de_PrincipalResourcePermissionsList = (output: any, context: __SerdeContext): PrincipalResourcePermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PrincipalResourcePermissions(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Resource
 */
const de_Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    Catalog: output.Catalog != null ? de_CatalogResource(output.Catalog, context) : undefined,
    DataCellsFilter:
      output.DataCellsFilter != null ? de_DataCellsFilterResource(output.DataCellsFilter, context) : undefined,
    DataLocation: output.DataLocation != null ? de_DataLocationResource(output.DataLocation, context) : undefined,
    Database: output.Database != null ? de_DatabaseResource(output.Database, context) : undefined,
    LFTag: output.LFTag != null ? de_LFTagKeyResource(output.LFTag, context) : undefined,
    LFTagPolicy: output.LFTagPolicy != null ? de_LFTagPolicyResource(output.LFTagPolicy, context) : undefined,
    Table: output.Table != null ? de_TableResource(output.Table, context) : undefined,
    TableWithColumns:
      output.TableWithColumns != null ? de_TableWithColumnsResource(output.TableWithColumns, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ResourceInfo
 */
const de_ResourceInfo = (output: any, context: __SerdeContext): ResourceInfo => {
  return {
    LastModified:
      output.LastModified != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
    WithFederation: __expectBoolean(output.WithFederation),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceInfoList
 */
const de_ResourceInfoList = (output: any, context: __SerdeContext): ResourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ResourceInfo(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ResourceShareList
 */
const de_ResourceShareList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RowFilter
 */
const de_RowFilter = (output: any, context: __SerdeContext): RowFilter => {
  return {
    AllRowsWildcard: output.AllRowsWildcard != null ? de_AllRowsWildcard(output.AllRowsWildcard, context) : undefined,
    FilterExpression: __expectString(output.FilterExpression),
  } as any;
};

/**
 * deserializeAws_restJson1StorageOptimizer
 */
const de_StorageOptimizer = (output: any, context: __SerdeContext): StorageOptimizer => {
  return {
    Config: output.Config != null ? de_StorageOptimizerConfig(output.Config, context) : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LastRunDetails: __expectString(output.LastRunDetails),
    StorageOptimizerType: __expectString(output.StorageOptimizerType),
    Warnings: __expectString(output.Warnings),
  } as any;
};

/**
 * deserializeAws_restJson1StorageOptimizerConfig
 */
const de_StorageOptimizerConfig = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1StorageOptimizerList
 */
const de_StorageOptimizerList = (output: any, context: __SerdeContext): StorageOptimizer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_StorageOptimizer(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableLFTagsList
 */
const de_TableLFTagsList = (output: any, context: __SerdeContext): TaggedTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TaggedTable(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableObject
 */
const de_TableObject = (output: any, context: __SerdeContext): TableObject => {
  return {
    ETag: __expectString(output.ETag),
    Size: __expectLong(output.Size),
    Uri: __expectString(output.Uri),
  } as any;
};

/**
 * deserializeAws_restJson1TableObjectList
 */
const de_TableObjectList = (output: any, context: __SerdeContext): TableObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TableObject(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TableResource
 */
const de_TableResource = (output: any, context: __SerdeContext): TableResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableWildcard: output.TableWildcard != null ? de_TableWildcard(output.TableWildcard, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TableWildcard
 */
const de_TableWildcard = (output: any, context: __SerdeContext): TableWildcard => {
  return {} as any;
};

/**
 * deserializeAws_restJson1TableWithColumnsResource
 */
const de_TableWithColumnsResource = (output: any, context: __SerdeContext): TableWithColumnsResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ColumnNames: output.ColumnNames != null ? de_ColumnNames(output.ColumnNames, context) : undefined,
    ColumnWildcard: output.ColumnWildcard != null ? de_ColumnWildcard(output.ColumnWildcard, context) : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
  } as any;
};

/**
 * deserializeAws_restJson1TaggedDatabase
 */
const de_TaggedDatabase = (output: any, context: __SerdeContext): TaggedDatabase => {
  return {
    Database: output.Database != null ? de_DatabaseResource(output.Database, context) : undefined,
    LFTags: output.LFTags != null ? de_LFTagsList(output.LFTags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TaggedTable
 */
const de_TaggedTable = (output: any, context: __SerdeContext): TaggedTable => {
  return {
    LFTagOnDatabase: output.LFTagOnDatabase != null ? de_LFTagsList(output.LFTagOnDatabase, context) : undefined,
    LFTagsOnColumns: output.LFTagsOnColumns != null ? de_ColumnLFTagsList(output.LFTagsOnColumns, context) : undefined,
    LFTagsOnTable: output.LFTagsOnTable != null ? de_LFTagsList(output.LFTagsOnTable, context) : undefined,
    Table: output.Table != null ? de_TableResource(output.Table, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagValueList
 */
const de_TagValueList = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TransactionDescription
 */
const de_TransactionDescription = (output: any, context: __SerdeContext): TransactionDescription => {
  return {
    TransactionEndTime:
      output.TransactionEndTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TransactionEndTime)))
        : undefined,
    TransactionId: __expectString(output.TransactionId),
    TransactionStartTime:
      output.TransactionStartTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TransactionStartTime)))
        : undefined,
    TransactionStatus: __expectString(output.TransactionStatus),
  } as any;
};

/**
 * deserializeAws_restJson1TransactionDescriptionList
 */
const de_TransactionDescriptionList = (output: any, context: __SerdeContext): TransactionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_TransactionDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1TrustedResourceOwners
 */
const de_TrustedResourceOwners = (output: any, context: __SerdeContext): string[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
  return retVal;
};

/**
 * deserializeAws_restJson1WorkUnitRange
 */
const de_WorkUnitRange = (output: any, context: __SerdeContext): WorkUnitRange => {
  return {
    WorkUnitIdMax: __expectLong(output.WorkUnitIdMax),
    WorkUnitIdMin: __expectLong(output.WorkUnitIdMin),
    WorkUnitToken: __expectString(output.WorkUnitToken),
  } as any;
};

/**
 * deserializeAws_restJson1WorkUnitRangeList
 */
const de_WorkUnitRangeList = (output: any, context: __SerdeContext): WorkUnitRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_WorkUnitRange(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (streamBody: any = new Uint8Array(), context: __SerdeContext): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then((body) => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== null &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then((encoded) => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

const parseErrorBody = async (errorBody: any, context: __SerdeContext) => {
  const value = await parseBody(errorBody, context);
  value.message = value.message ?? value.Message;
  return value;
};

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string | number): string => {
    let cleanValue = rawValue;
    if (typeof cleanValue === "number") {
      cleanValue = cleanValue.toString();
    }
    if (cleanValue.indexOf(",") >= 0) {
      cleanValue = cleanValue.split(",")[0];
    }
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }
};
