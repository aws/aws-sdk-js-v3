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
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTime as __parseRfc3339DateTime,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  AddLFTagsToResourceCommandInput,
  AddLFTagsToResourceCommandOutput,
} from "../commands/AddLFTagsToResourceCommand";
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

export const serializeAws_restJson1AddLFTagsToResourceCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.LFTags !== undefined &&
      input.LFTags !== null && { LFTags: serializeAws_restJson1LFTagsList(input.LFTags, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
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

export const serializeAws_restJson1BatchGrantPermissionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_restJson1BatchPermissionsRequestEntryList(input.Entries, context),
      }),
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

export const serializeAws_restJson1BatchRevokePermissionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Entries !== undefined &&
      input.Entries !== null && {
        Entries: serializeAws_restJson1BatchPermissionsRequestEntryList(input.Entries, context),
      }),
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

export const serializeAws_restJson1CancelTransactionCommand = async (
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
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1CommitTransactionCommand = async (
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
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1CreateDataCellsFilterCommand = async (
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
    ...(input.TableData !== undefined &&
      input.TableData !== null && { TableData: serializeAws_restJson1DataCellsFilter(input.TableData, context) }),
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

export const serializeAws_restJson1CreateLFTagCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_restJson1TagValueList(input.TagValues, context) }),
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

export const serializeAws_restJson1DeleteDataCellsFilterCommand = async (
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
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TableCatalogId !== undefined &&
      input.TableCatalogId !== null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
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

export const serializeAws_restJson1DeleteLFTagCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
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

export const serializeAws_restJson1DeleteObjectsOnCancelCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Objects !== undefined &&
      input.Objects !== null && { Objects: serializeAws_restJson1VirtualObjectList(input.Objects, context) }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1DeregisterResourceCommand = async (
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
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1DescribeResourceCommand = async (
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
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1DescribeTransactionCommand = async (
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
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1ExtendTransactionCommand = async (
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
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1GetDataLakeSettingsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
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

export const serializeAws_restJson1GetEffectivePermissionsForPathCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
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

export const serializeAws_restJson1GetLFTagCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
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

export const serializeAws_restJson1GetQueryStateCommand = async (
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
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
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

export const serializeAws_restJson1GetQueryStatisticsCommand = async (
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
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
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

export const serializeAws_restJson1GetResourceLFTagsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
    ...(input.ShowAssignedLFTags !== undefined &&
      input.ShowAssignedLFTags !== null && { ShowAssignedLFTags: input.ShowAssignedLFTags }),
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

export const serializeAws_restJson1GetTableObjectsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PartitionPredicate !== undefined &&
      input.PartitionPredicate !== null && { PartitionPredicate: input.PartitionPredicate }),
    ...(input.QueryAsOfTime !== undefined &&
      input.QueryAsOfTime !== null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
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

export const serializeAws_restJson1GetTemporaryGluePartitionCredentialsCommand = async (
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
    ...(input.AuditContext !== undefined &&
      input.AuditContext !== null && { AuditContext: serializeAws_restJson1AuditContext(input.AuditContext, context) }),
    ...(input.DurationSeconds !== undefined &&
      input.DurationSeconds !== null && { DurationSeconds: input.DurationSeconds }),
    ...(input.Partition !== undefined &&
      input.Partition !== null && { Partition: serializeAws_restJson1PartitionValueList(input.Partition, context) }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.SupportedPermissionTypes !== undefined &&
      input.SupportedPermissionTypes !== null && {
        SupportedPermissionTypes: serializeAws_restJson1PermissionTypeList(input.SupportedPermissionTypes, context),
      }),
    ...(input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }),
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

export const serializeAws_restJson1GetTemporaryGlueTableCredentialsCommand = async (
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
    ...(input.AuditContext !== undefined &&
      input.AuditContext !== null && { AuditContext: serializeAws_restJson1AuditContext(input.AuditContext, context) }),
    ...(input.DurationSeconds !== undefined &&
      input.DurationSeconds !== null && { DurationSeconds: input.DurationSeconds }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.SupportedPermissionTypes !== undefined &&
      input.SupportedPermissionTypes !== null && {
        SupportedPermissionTypes: serializeAws_restJson1PermissionTypeList(input.SupportedPermissionTypes, context),
      }),
    ...(input.TableArn !== undefined && input.TableArn !== null && { TableArn: input.TableArn }),
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

export const serializeAws_restJson1GetWorkUnitResultsCommand = async (
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
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
    ...(input.WorkUnitId !== undefined && input.WorkUnitId !== null && { WorkUnitId: input.WorkUnitId }),
    ...(input.WorkUnitToken !== undefined && input.WorkUnitToken !== null && { WorkUnitToken: input.WorkUnitToken }),
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

export const serializeAws_restJson1GetWorkUnitsCommand = async (
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
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.PageSize !== undefined && input.PageSize !== null && { PageSize: input.PageSize }),
    ...(input.QueryId !== undefined && input.QueryId !== null && { QueryId: input.QueryId }),
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

export const serializeAws_restJson1GrantPermissionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_restJson1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_restJson1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
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

export const serializeAws_restJson1ListDataCellsFilterCommand = async (
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
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Table !== undefined &&
      input.Table !== null && { Table: serializeAws_restJson1TableResource(input.Table, context) }),
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

export const serializeAws_restJson1ListLFTagsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.ResourceShareType !== undefined &&
      input.ResourceShareType !== null && { ResourceShareType: input.ResourceShareType }),
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

export const serializeAws_restJson1ListPermissionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.IncludeRelated !== undefined &&
      input.IncludeRelated !== null && { IncludeRelated: input.IncludeRelated }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_restJson1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
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

export const serializeAws_restJson1ListResourcesCommand = async (
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
    ...(input.FilterConditionList !== undefined &&
      input.FilterConditionList !== null && {
        FilterConditionList: serializeAws_restJson1FilterConditionList(input.FilterConditionList, context),
      }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1ListTableStorageOptimizersCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StorageOptimizerType !== undefined &&
      input.StorageOptimizerType !== null && { StorageOptimizerType: input.StorageOptimizerType }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
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

export const serializeAws_restJson1ListTransactionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
    ...(input.StatusFilter !== undefined && input.StatusFilter !== null && { StatusFilter: input.StatusFilter }),
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

export const serializeAws_restJson1PutDataLakeSettingsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DataLakeSettings !== undefined &&
      input.DataLakeSettings !== null && {
        DataLakeSettings: serializeAws_restJson1DataLakeSettings(input.DataLakeSettings, context),
      }),
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

export const serializeAws_restJson1RegisterResourceCommand = async (
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
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
    ...(input.UseServiceLinkedRole !== undefined &&
      input.UseServiceLinkedRole !== null && { UseServiceLinkedRole: input.UseServiceLinkedRole }),
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

export const serializeAws_restJson1RemoveLFTagsFromResourceCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.LFTags !== undefined &&
      input.LFTags !== null && { LFTags: serializeAws_restJson1LFTagsList(input.LFTags, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
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

export const serializeAws_restJson1RevokePermissionsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_restJson1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_restJson1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
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

export const serializeAws_restJson1SearchDatabasesByLFTagsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_restJson1Expression(input.Expression, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1SearchTablesByLFTagsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_restJson1Expression(input.Expression, context) }),
    ...(input.MaxResults !== undefined && input.MaxResults !== null && { MaxResults: input.MaxResults }),
    ...(input.NextToken !== undefined && input.NextToken !== null && { NextToken: input.NextToken }),
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

export const serializeAws_restJson1StartQueryPlanningCommand = async (
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
    ...(input.QueryPlanningContext !== undefined &&
      input.QueryPlanningContext !== null && {
        QueryPlanningContext: serializeAws_restJson1QueryPlanningContext(input.QueryPlanningContext, context),
      }),
    ...(input.QueryString !== undefined && input.QueryString !== null && { QueryString: input.QueryString }),
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

export const serializeAws_restJson1StartTransactionCommand = async (
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
    ...(input.TransactionType !== undefined &&
      input.TransactionType !== null && { TransactionType: input.TransactionType }),
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

export const serializeAws_restJson1UpdateLFTagCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValuesToAdd !== undefined &&
      input.TagValuesToAdd !== null && {
        TagValuesToAdd: serializeAws_restJson1TagValueList(input.TagValuesToAdd, context),
      }),
    ...(input.TagValuesToDelete !== undefined &&
      input.TagValuesToDelete !== null && {
        TagValuesToDelete: serializeAws_restJson1TagValueList(input.TagValuesToDelete, context),
      }),
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

export const serializeAws_restJson1UpdateResourceCommand = async (
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
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.RoleArn !== undefined && input.RoleArn !== null && { RoleArn: input.RoleArn }),
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

export const serializeAws_restJson1UpdateTableObjectsCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
    ...(input.WriteOperations !== undefined &&
      input.WriteOperations !== null && {
        WriteOperations: serializeAws_restJson1WriteOperationList(input.WriteOperations, context),
      }),
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

export const serializeAws_restJson1UpdateTableStorageOptimizerCommand = async (
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
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.StorageOptimizerConfig !== undefined &&
      input.StorageOptimizerConfig !== null && {
        StorageOptimizerConfig: serializeAws_restJson1StorageOptimizerConfigMap(input.StorageOptimizerConfig, context),
      }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
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

export const deserializeAws_restJson1AddLFTagsToResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddLFTagsToResourceCommandError(output, context);
  }
  const contents: AddLFTagsToResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Failures: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures !== undefined && data.Failures !== null) {
    contents.Failures = deserializeAws_restJson1LFTagErrors(data.Failures, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddLFTagsToResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddLFTagsToResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1BatchGrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchGrantPermissionsCommandError(output, context);
  }
  const contents: BatchGrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Failures: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures !== undefined && data.Failures !== null) {
    contents.Failures = deserializeAws_restJson1BatchPermissionsFailureList(data.Failures, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchGrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchGrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1BatchRevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1BatchRevokePermissionsCommandError(output, context);
  }
  const contents: BatchRevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Failures: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures !== undefined && data.Failures !== null) {
    contents.Failures = deserializeAws_restJson1BatchPermissionsFailureList(data.Failures, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1BatchRevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<BatchRevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CancelTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelTransactionCommandError(output, context);
  }
  const contents: CancelTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CancelTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await deserializeAws_restJson1TransactionCommitInProgressExceptionResponse(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await deserializeAws_restJson1TransactionCommittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CommitTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CommitTransactionCommandError(output, context);
  }
  const contents: CommitTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransactionStatus: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionStatus !== undefined && data.TransactionStatus !== null) {
    contents.TransactionStatus = __expectString(data.TransactionStatus);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CommitTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CommitTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await deserializeAws_restJson1TransactionCanceledExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateDataCellsFilterCommandError(output, context);
  }
  const contents: CreateDataCellsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.lakeformation#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await deserializeAws_restJson1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1CreateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLFTagCommandError(output, context);
  }
  const contents: CreateLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await deserializeAws_restJson1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteDataCellsFilterCommandError(output, context);
  }
  const contents: DeleteDataCellsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteLFTagCommandError(output, context);
  }
  const contents: DeleteLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeleteObjectsOnCancelCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsOnCancelCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteObjectsOnCancelCommandError(output, context);
  }
  const contents: DeleteObjectsOnCancelCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteObjectsOnCancelCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteObjectsOnCancelCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await deserializeAws_restJson1TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await deserializeAws_restJson1TransactionCommittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DeregisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeregisterResourceCommandError(output, context);
  }
  const contents: DeregisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeregisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeregisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeResourceCommandError(output, context);
  }
  const contents: DescribeResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceInfo: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceInfo !== undefined && data.ResourceInfo !== null) {
    contents.ResourceInfo = deserializeAws_restJson1ResourceInfo(data.ResourceInfo, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1DescribeTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeTransactionCommandError(output, context);
  }
  const contents: DescribeTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransactionDescription: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionDescription !== undefined && data.TransactionDescription !== null) {
    contents.TransactionDescription = deserializeAws_restJson1TransactionDescription(
      data.TransactionDescription,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ExtendTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExtendTransactionCommandError(output, context);
  }
  const contents: ExtendTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExtendTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExtendTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await deserializeAws_restJson1TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await deserializeAws_restJson1TransactionCommitInProgressExceptionResponse(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await deserializeAws_restJson1TransactionCommittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataLakeSettingsCommandError(output, context);
  }
  const contents: GetDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataLakeSettings: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataLakeSettings !== undefined && data.DataLakeSettings !== null) {
    contents.DataLakeSettings = deserializeAws_restJson1DataLakeSettings(data.DataLakeSettings, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetEffectivePermissionsForPathCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetEffectivePermissionsForPathCommandError(output, context);
  }
  const contents: GetEffectivePermissionsForPathCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Permissions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Permissions !== undefined && data.Permissions !== null) {
    contents.Permissions = deserializeAws_restJson1PrincipalResourcePermissionsList(data.Permissions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetEffectivePermissionsForPathCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetEffectivePermissionsForPathCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLFTagCommandError(output, context);
  }
  const contents: GetLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
    CatalogId: undefined,
    TagKey: undefined,
    TagValues: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CatalogId !== undefined && data.CatalogId !== null) {
    contents.CatalogId = __expectString(data.CatalogId);
  }
  if (data.TagKey !== undefined && data.TagKey !== null) {
    contents.TagKey = __expectString(data.TagKey);
  }
  if (data.TagValues !== undefined && data.TagValues !== null) {
    contents.TagValues = deserializeAws_restJson1TagValueList(data.TagValues, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetQueryStateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetQueryStateCommandError(output, context);
  }
  const contents: GetQueryStateCommandOutput = {
    $metadata: deserializeMetadata(output),
    Error: undefined,
    State: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Error !== undefined && data.Error !== null) {
    contents.Error = __expectString(data.Error);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetQueryStateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetQueryStatisticsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatisticsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetQueryStatisticsCommandError(output, context);
  }
  const contents: GetQueryStatisticsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ExecutionStatistics: undefined,
    PlanningStatistics: undefined,
    QuerySubmissionTime: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ExecutionStatistics !== undefined && data.ExecutionStatistics !== null) {
    contents.ExecutionStatistics = deserializeAws_restJson1ExecutionStatistics(data.ExecutionStatistics, context);
  }
  if (data.PlanningStatistics !== undefined && data.PlanningStatistics !== null) {
    contents.PlanningStatistics = deserializeAws_restJson1PlanningStatistics(data.PlanningStatistics, context);
  }
  if (data.QuerySubmissionTime !== undefined && data.QuerySubmissionTime !== null) {
    contents.QuerySubmissionTime = __expectNonNull(__parseRfc3339DateTime(data.QuerySubmissionTime));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetQueryStatisticsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetQueryStatisticsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await deserializeAws_restJson1ExpiredExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "StatisticsNotReadyYetException":
    case "com.amazonaws.lakeformation#StatisticsNotReadyYetException":
      throw await deserializeAws_restJson1StatisticsNotReadyYetExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetResourceLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetResourceLFTagsCommandError(output, context);
  }
  const contents: GetResourceLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LFTagOnDatabase: undefined,
    LFTagsOnColumns: undefined,
    LFTagsOnTable: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LFTagOnDatabase !== undefined && data.LFTagOnDatabase !== null) {
    contents.LFTagOnDatabase = deserializeAws_restJson1LFTagsList(data.LFTagOnDatabase, context);
  }
  if (data.LFTagsOnColumns !== undefined && data.LFTagsOnColumns !== null) {
    contents.LFTagsOnColumns = deserializeAws_restJson1ColumnLFTagsList(data.LFTagsOnColumns, context);
  }
  if (data.LFTagsOnTable !== undefined && data.LFTagsOnTable !== null) {
    contents.LFTagsOnTable = deserializeAws_restJson1LFTagsList(data.LFTagsOnTable, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetResourceLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetResourceLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await deserializeAws_restJson1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTableObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTableObjectsCommandError(output, context);
  }
  const contents: GetTableObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Objects: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Objects !== undefined && data.Objects !== null) {
    contents.Objects = deserializeAws_restJson1PartitionedTableObjectsList(data.Objects, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTableObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTableObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await deserializeAws_restJson1TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await deserializeAws_restJson1TransactionCommittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTemporaryGluePartitionCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemporaryGluePartitionCredentialsCommandError(output, context);
  }
  const contents: GetTemporaryGluePartitionCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessKeyId: undefined,
    Expiration: undefined,
    SecretAccessKey: undefined,
    SessionToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessKeyId !== undefined && data.AccessKeyId !== null) {
    contents.AccessKeyId = __expectString(data.AccessKeyId);
  }
  if (data.Expiration !== undefined && data.Expiration !== null) {
    contents.Expiration = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.Expiration)));
  }
  if (data.SecretAccessKey !== undefined && data.SecretAccessKey !== null) {
    contents.SecretAccessKey = __expectString(data.SecretAccessKey);
  }
  if (data.SessionToken !== undefined && data.SessionToken !== null) {
    contents.SessionToken = __expectString(data.SessionToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTemporaryGluePartitionCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGluePartitionCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.lakeformation#PermissionTypeMismatchException":
      throw await deserializeAws_restJson1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetTemporaryGlueTableCredentialsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGlueTableCredentialsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetTemporaryGlueTableCredentialsCommandError(output, context);
  }
  const contents: GetTemporaryGlueTableCredentialsCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccessKeyId: undefined,
    Expiration: undefined,
    SecretAccessKey: undefined,
    SessionToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AccessKeyId !== undefined && data.AccessKeyId !== null) {
    contents.AccessKeyId = __expectString(data.AccessKeyId);
  }
  if (data.Expiration !== undefined && data.Expiration !== null) {
    contents.Expiration = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.Expiration)));
  }
  if (data.SecretAccessKey !== undefined && data.SecretAccessKey !== null) {
    contents.SecretAccessKey = __expectString(data.SecretAccessKey);
  }
  if (data.SessionToken !== undefined && data.SessionToken !== null) {
    contents.SessionToken = __expectString(data.SessionToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetTemporaryGlueTableCredentialsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetTemporaryGlueTableCredentialsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "PermissionTypeMismatchException":
    case "com.amazonaws.lakeformation#PermissionTypeMismatchException":
      throw await deserializeAws_restJson1PermissionTypeMismatchExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetWorkUnitResultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitResultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkUnitResultsCommandError(output, context);
  }
  const contents: GetWorkUnitResultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResultStream: undefined,
  };
  const data: any = output.body;
  contents.ResultStream = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkUnitResultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitResultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await deserializeAws_restJson1ExpiredExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GetWorkUnitsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetWorkUnitsCommandError(output, context);
  }
  const contents: GetWorkUnitsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    QueryId: undefined,
    WorkUnitRanges: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.QueryId !== undefined && data.QueryId !== null) {
    contents.QueryId = __expectString(data.QueryId);
  }
  if (data.WorkUnitRanges !== undefined && data.WorkUnitRanges !== null) {
    contents.WorkUnitRanges = deserializeAws_restJson1WorkUnitRangeList(data.WorkUnitRanges, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetWorkUnitsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetWorkUnitsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ExpiredException":
    case "com.amazonaws.lakeformation#ExpiredException":
      throw await deserializeAws_restJson1ExpiredExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "WorkUnitsNotReadyYetException":
    case "com.amazonaws.lakeformation#WorkUnitsNotReadyYetException":
      throw await deserializeAws_restJson1WorkUnitsNotReadyYetExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1GrantPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GrantPermissionsCommandError(output, context);
  }
  const contents: GrantPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GrantPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GrantPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListDataCellsFilterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCellsFilterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListDataCellsFilterCommandError(output, context);
  }
  const contents: ListDataCellsFilterCommandOutput = {
    $metadata: deserializeMetadata(output),
    DataCellsFilters: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DataCellsFilters !== undefined && data.DataCellsFilters !== null) {
    contents.DataCellsFilters = deserializeAws_restJson1DataCellsFilterList(data.DataCellsFilters, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListDataCellsFilterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListDataCellsFilterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLFTagsCommandError(output, context);
  }
  const contents: ListLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    LFTags: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LFTags !== undefined && data.LFTags !== null) {
    contents.LFTags = deserializeAws_restJson1LFTagsList(data.LFTags, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListPermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPermissionsCommandError(output, context);
  }
  const contents: ListPermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    PrincipalResourcePermissions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.PrincipalResourcePermissions !== undefined && data.PrincipalResourcePermissions !== null) {
    contents.PrincipalResourcePermissions = deserializeAws_restJson1PrincipalResourcePermissionsList(
      data.PrincipalResourcePermissions,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListResourcesCommandError(output, context);
  }
  const contents: ListResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    ResourceInfoList: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ResourceInfoList !== undefined && data.ResourceInfoList !== null) {
    contents.ResourceInfoList = deserializeAws_restJson1ResourceInfoList(data.ResourceInfoList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTableStorageOptimizersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableStorageOptimizersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTableStorageOptimizersCommandError(output, context);
  }
  const contents: ListTableStorageOptimizersCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    StorageOptimizerList: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.StorageOptimizerList !== undefined && data.StorageOptimizerList !== null) {
    contents.StorageOptimizerList = deserializeAws_restJson1StorageOptimizerList(data.StorageOptimizerList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTableStorageOptimizersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTableStorageOptimizersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1ListTransactionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTransactionsCommandError(output, context);
  }
  const contents: ListTransactionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Transactions: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Transactions !== undefined && data.Transactions !== null) {
    contents.Transactions = deserializeAws_restJson1TransactionDescriptionList(data.Transactions, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTransactionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTransactionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1PutDataLakeSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutDataLakeSettingsCommandError(output, context);
  }
  const contents: PutDataLakeSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutDataLakeSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutDataLakeSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RegisterResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RegisterResourceCommandError(output, context);
  }
  const contents: RegisterResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RegisterResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RegisterResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.lakeformation#AlreadyExistsException":
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNumberLimitExceededException":
    case "com.amazonaws.lakeformation#ResourceNumberLimitExceededException":
      throw await deserializeAws_restJson1ResourceNumberLimitExceededExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RemoveLFTagsFromResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveLFTagsFromResourceCommandError(output, context);
  }
  const contents: RemoveLFTagsFromResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    Failures: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Failures !== undefined && data.Failures !== null) {
    contents.Failures = deserializeAws_restJson1LFTagErrors(data.Failures, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveLFTagsFromResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveLFTagsFromResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await deserializeAws_restJson1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1RevokePermissionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1RevokePermissionsCommandError(output, context);
  }
  const contents: RevokePermissionsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RevokePermissionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokePermissionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1SearchDatabasesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchDatabasesByLFTagsCommandError(output, context);
  }
  const contents: SearchDatabasesByLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    DatabaseList: undefined,
    NextToken: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.DatabaseList !== undefined && data.DatabaseList !== null) {
    contents.DatabaseList = deserializeAws_restJson1DatabaseLFTagsList(data.DatabaseList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchDatabasesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchDatabasesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await deserializeAws_restJson1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1SearchTablesByLFTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1SearchTablesByLFTagsCommandError(output, context);
  }
  const contents: SearchTablesByLFTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    TableList: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.TableList !== undefined && data.TableList !== null) {
    contents.TableList = deserializeAws_restJson1TableLFTagsList(data.TableList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SearchTablesByLFTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SearchTablesByLFTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "GlueEncryptionException":
    case "com.amazonaws.lakeformation#GlueEncryptionException":
      throw await deserializeAws_restJson1GlueEncryptionExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartQueryPlanningCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryPlanningCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartQueryPlanningCommandError(output, context);
  }
  const contents: StartQueryPlanningCommandOutput = {
    $metadata: deserializeMetadata(output),
    QueryId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.QueryId !== undefined && data.QueryId !== null) {
    contents.QueryId = __expectString(data.QueryId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartQueryPlanningCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartQueryPlanningCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "ThrottledException":
    case "com.amazonaws.lakeformation#ThrottledException":
      throw await deserializeAws_restJson1ThrottledExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1StartTransactionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTransactionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartTransactionCommandError(output, context);
  }
  const contents: StartTransactionCommandOutput = {
    $metadata: deserializeMetadata(output),
    TransactionId: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.TransactionId !== undefined && data.TransactionId !== null) {
    contents.TransactionId = __expectString(data.TransactionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartTransactionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartTransactionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateLFTagCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateLFTagCommandError(output, context);
  }
  const contents: UpdateLFTagCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateLFTagCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateLFTagCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateResourceCommandError(output, context);
  }
  const contents: UpdateResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateTableObjectsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableObjectsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTableObjectsCommandError(output, context);
  }
  const contents: UpdateTableObjectsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTableObjectsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableObjectsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConcurrentModificationException":
    case "com.amazonaws.lakeformation#ConcurrentModificationException":
      throw await deserializeAws_restJson1ConcurrentModificationExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    case "OperationTimeoutException":
    case "com.amazonaws.lakeformation#OperationTimeoutException":
      throw await deserializeAws_restJson1OperationTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotReadyException":
    case "com.amazonaws.lakeformation#ResourceNotReadyException":
      throw await deserializeAws_restJson1ResourceNotReadyExceptionResponse(parsedOutput, context);
    case "TransactionCanceledException":
    case "com.amazonaws.lakeformation#TransactionCanceledException":
      throw await deserializeAws_restJson1TransactionCanceledExceptionResponse(parsedOutput, context);
    case "TransactionCommitInProgressException":
    case "com.amazonaws.lakeformation#TransactionCommitInProgressException":
      throw await deserializeAws_restJson1TransactionCommitInProgressExceptionResponse(parsedOutput, context);
    case "TransactionCommittedException":
    case "com.amazonaws.lakeformation#TransactionCommittedException":
      throw await deserializeAws_restJson1TransactionCommittedExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

export const deserializeAws_restJson1UpdateTableStorageOptimizerCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableStorageOptimizerCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateTableStorageOptimizerCommandError(output, context);
  }
  const contents: UpdateTableStorageOptimizerCommandOutput = {
    $metadata: deserializeMetadata(output),
    Result: undefined,
  };
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Result !== undefined && data.Result !== null) {
    contents.Result = __expectString(data.Result);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateTableStorageOptimizerCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateTableStorageOptimizerCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __BaseException;
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AccessDeniedException":
    case "com.amazonaws.lakeformation#AccessDeniedException":
      throw await deserializeAws_restJson1AccessDeniedExceptionResponse(parsedOutput, context);
    case "EntityNotFoundException":
    case "com.amazonaws.lakeformation#EntityNotFoundException":
      throw await deserializeAws_restJson1EntityNotFoundExceptionResponse(parsedOutput, context);
    case "InternalServiceException":
    case "com.amazonaws.lakeformation#InternalServiceException":
      throw await deserializeAws_restJson1InternalServiceExceptionResponse(parsedOutput, context);
    case "InvalidInputException":
    case "com.amazonaws.lakeformation#InvalidInputException":
      throw await deserializeAws_restJson1InvalidInputExceptionResponse(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      const $metadata = deserializeMetadata(output);
      const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
      response = new __BaseException({
        name: parsedBody.code || parsedBody.Code || errorCode || statusCode || "UnknowError",
        $fault: "client",
        $metadata,
      });
      throw __decorateServiceException(response, parsedBody);
  }
};

const deserializeAws_restJson1AccessDeniedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AccessDeniedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ConcurrentModificationExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConcurrentModificationException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ConcurrentModificationException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1EntityNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<EntityNotFoundException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new EntityNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ExpiredExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ExpiredException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ExpiredException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1GlueEncryptionExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<GlueEncryptionException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new GlueEncryptionException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InternalServiceExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServiceException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InternalServiceException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1InvalidInputExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidInputException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new InvalidInputException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1OperationTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<OperationTimeoutException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new OperationTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1PermissionTypeMismatchExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PermissionTypeMismatchException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new PermissionTypeMismatchException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNotReadyExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotReadyException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNotReadyException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ResourceNumberLimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNumberLimitExceededException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ResourceNumberLimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1StatisticsNotReadyYetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<StatisticsNotReadyYetException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new StatisticsNotReadyYetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1ThrottledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ThrottledException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new ThrottledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TransactionCanceledExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCanceledException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCanceledException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TransactionCommitInProgressExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCommitInProgressException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCommitInProgressException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1TransactionCommittedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TransactionCommittedException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new TransactionCommittedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const deserializeAws_restJson1WorkUnitsNotReadyYetExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<WorkUnitsNotReadyYetException> => {
  const contents: any = {};
  const data: any = parsedOutput.body;
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  const exception = new WorkUnitsNotReadyYetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

const serializeAws_restJson1AddObjectInput = (input: AddObjectInput, context: __SerdeContext): any => {
  return {
    ...(input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_restJson1PartitionValuesList(input.PartitionValues, context),
      }),
    ...(input.Size !== undefined && input.Size !== null && { Size: input.Size }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1AllRowsWildcard = (input: AllRowsWildcard, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1AuditContext = (input: AuditContext, context: __SerdeContext): any => {
  return {
    ...(input.AdditionalAuditContext !== undefined &&
      input.AdditionalAuditContext !== null && { AdditionalAuditContext: input.AdditionalAuditContext }),
  };
};

const serializeAws_restJson1AuthorizedSessionTagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1BatchPermissionsRequestEntry = (
  input: BatchPermissionsRequestEntry,
  context: __SerdeContext
): any => {
  return {
    ...(input.Id !== undefined && input.Id !== null && { Id: input.Id }),
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.PermissionsWithGrantOption !== undefined &&
      input.PermissionsWithGrantOption !== null && {
        PermissionsWithGrantOption: serializeAws_restJson1PermissionList(input.PermissionsWithGrantOption, context),
      }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_restJson1DataLakePrincipal(input.Principal, context) }),
    ...(input.Resource !== undefined &&
      input.Resource !== null && { Resource: serializeAws_restJson1Resource(input.Resource, context) }),
  };
};

const serializeAws_restJson1BatchPermissionsRequestEntryList = (
  input: BatchPermissionsRequestEntry[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BatchPermissionsRequestEntry(entry, context);
    });
};

const serializeAws_restJson1CatalogResource = (input: CatalogResource, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1ColumnNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ColumnWildcard = (input: ColumnWildcard, context: __SerdeContext): any => {
  return {
    ...(input.ExcludedColumnNames !== undefined &&
      input.ExcludedColumnNames !== null && {
        ExcludedColumnNames: serializeAws_restJson1ColumnNames(input.ExcludedColumnNames, context),
      }),
  };
};

const serializeAws_restJson1DatabaseResource = (input: DatabaseResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1DataCellsFilter = (input: DataCellsFilter, context: __SerdeContext): any => {
  return {
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && { ColumnNames: serializeAws_restJson1ColumnNames(input.ColumnNames, context) }),
    ...(input.ColumnWildcard !== undefined &&
      input.ColumnWildcard !== null && {
        ColumnWildcard: serializeAws_restJson1ColumnWildcard(input.ColumnWildcard, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.RowFilter !== undefined &&
      input.RowFilter !== null && { RowFilter: serializeAws_restJson1RowFilter(input.RowFilter, context) }),
    ...(input.TableCatalogId !== undefined &&
      input.TableCatalogId !== null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_restJson1DataCellsFilterResource = (
  input: DataCellsFilterResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TableCatalogId !== undefined &&
      input.TableCatalogId !== null && { TableCatalogId: input.TableCatalogId }),
    ...(input.TableName !== undefined && input.TableName !== null && { TableName: input.TableName }),
  };
};

const serializeAws_restJson1DataLakePrincipal = (input: DataLakePrincipal, context: __SerdeContext): any => {
  return {
    ...(input.DataLakePrincipalIdentifier !== undefined &&
      input.DataLakePrincipalIdentifier !== null && { DataLakePrincipalIdentifier: input.DataLakePrincipalIdentifier }),
  };
};

const serializeAws_restJson1DataLakePrincipalList = (input: DataLakePrincipal[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataLakePrincipal(entry, context);
    });
};

const serializeAws_restJson1DataLakeSettings = (input: DataLakeSettings, context: __SerdeContext): any => {
  return {
    ...(input.AllowExternalDataFiltering !== undefined &&
      input.AllowExternalDataFiltering !== null && { AllowExternalDataFiltering: input.AllowExternalDataFiltering }),
    ...(input.AuthorizedSessionTagValueList !== undefined &&
      input.AuthorizedSessionTagValueList !== null && {
        AuthorizedSessionTagValueList: serializeAws_restJson1AuthorizedSessionTagValueList(
          input.AuthorizedSessionTagValueList,
          context
        ),
      }),
    ...(input.CreateDatabaseDefaultPermissions !== undefined &&
      input.CreateDatabaseDefaultPermissions !== null && {
        CreateDatabaseDefaultPermissions: serializeAws_restJson1PrincipalPermissionsList(
          input.CreateDatabaseDefaultPermissions,
          context
        ),
      }),
    ...(input.CreateTableDefaultPermissions !== undefined &&
      input.CreateTableDefaultPermissions !== null && {
        CreateTableDefaultPermissions: serializeAws_restJson1PrincipalPermissionsList(
          input.CreateTableDefaultPermissions,
          context
        ),
      }),
    ...(input.DataLakeAdmins !== undefined &&
      input.DataLakeAdmins !== null && {
        DataLakeAdmins: serializeAws_restJson1DataLakePrincipalList(input.DataLakeAdmins, context),
      }),
    ...(input.ExternalDataFilteringAllowList !== undefined &&
      input.ExternalDataFilteringAllowList !== null && {
        ExternalDataFilteringAllowList: serializeAws_restJson1DataLakePrincipalList(
          input.ExternalDataFilteringAllowList,
          context
        ),
      }),
    ...(input.TrustedResourceOwners !== undefined &&
      input.TrustedResourceOwners !== null && {
        TrustedResourceOwners: serializeAws_restJson1TrustedResourceOwners(input.TrustedResourceOwners, context),
      }),
  };
};

const serializeAws_restJson1DataLocationResource = (input: DataLocationResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
  };
};

const serializeAws_restJson1DeleteObjectInput = (input: DeleteObjectInput, context: __SerdeContext): any => {
  return {
    ...(input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag }),
    ...(input.PartitionValues !== undefined &&
      input.PartitionValues !== null && {
        PartitionValues: serializeAws_restJson1PartitionValuesList(input.PartitionValues, context),
      }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1Expression = (input: LFTag[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LFTag(entry, context);
    });
};

const serializeAws_restJson1FilterCondition = (input: FilterCondition, context: __SerdeContext): any => {
  return {
    ...(input.ComparisonOperator !== undefined &&
      input.ComparisonOperator !== null && { ComparisonOperator: input.ComparisonOperator }),
    ...(input.Field !== undefined && input.Field !== null && { Field: input.Field }),
    ...(input.StringValueList !== undefined &&
      input.StringValueList !== null && {
        StringValueList: serializeAws_restJson1StringValueList(input.StringValueList, context),
      }),
  };
};

const serializeAws_restJson1FilterConditionList = (input: FilterCondition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1FilterCondition(entry, context);
    });
};

const serializeAws_restJson1LFTag = (input: LFTag, context: __SerdeContext): any => {
  return {
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_restJson1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_restJson1LFTagKeyResource = (input: LFTagKeyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_restJson1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_restJson1LFTagPair = (input: LFTagPair, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.TagKey !== undefined && input.TagKey !== null && { TagKey: input.TagKey }),
    ...(input.TagValues !== undefined &&
      input.TagValues !== null && { TagValues: serializeAws_restJson1TagValueList(input.TagValues, context) }),
  };
};

const serializeAws_restJson1LFTagPolicyResource = (input: LFTagPolicyResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.Expression !== undefined &&
      input.Expression !== null && { Expression: serializeAws_restJson1Expression(input.Expression, context) }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_restJson1LFTagsList = (input: LFTagPair[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1LFTagPair(entry, context);
    });
};

const serializeAws_restJson1PartitionValueList = (input: PartitionValueList, context: __SerdeContext): any => {
  return {
    ...(input.Values !== undefined &&
      input.Values !== null && { Values: serializeAws_restJson1ValueStringList(input.Values, context) }),
  };
};

const serializeAws_restJson1PartitionValuesList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PermissionList = (input: (Permission | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PermissionTypeList = (input: (PermissionType | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1PrincipalPermissions = (input: PrincipalPermissions, context: __SerdeContext): any => {
  return {
    ...(input.Permissions !== undefined &&
      input.Permissions !== null && { Permissions: serializeAws_restJson1PermissionList(input.Permissions, context) }),
    ...(input.Principal !== undefined &&
      input.Principal !== null && { Principal: serializeAws_restJson1DataLakePrincipal(input.Principal, context) }),
  };
};

const serializeAws_restJson1PrincipalPermissionsList = (
  input: PrincipalPermissions[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1PrincipalPermissions(entry, context);
    });
};

const serializeAws_restJson1QueryParameterMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1QueryPlanningContext = (input: QueryPlanningContext, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.QueryAsOfTime !== undefined &&
      input.QueryAsOfTime !== null && { QueryAsOfTime: Math.round(input.QueryAsOfTime.getTime() / 1000) }),
    ...(input.QueryParameters !== undefined &&
      input.QueryParameters !== null && {
        QueryParameters: serializeAws_restJson1QueryParameterMap(input.QueryParameters, context),
      }),
    ...(input.TransactionId !== undefined && input.TransactionId !== null && { TransactionId: input.TransactionId }),
  };
};

const serializeAws_restJson1Resource = (input: Resource, context: __SerdeContext): any => {
  return {
    ...(input.Catalog !== undefined &&
      input.Catalog !== null && { Catalog: serializeAws_restJson1CatalogResource(input.Catalog, context) }),
    ...(input.DataCellsFilter !== undefined &&
      input.DataCellsFilter !== null && {
        DataCellsFilter: serializeAws_restJson1DataCellsFilterResource(input.DataCellsFilter, context),
      }),
    ...(input.DataLocation !== undefined &&
      input.DataLocation !== null && {
        DataLocation: serializeAws_restJson1DataLocationResource(input.DataLocation, context),
      }),
    ...(input.Database !== undefined &&
      input.Database !== null && { Database: serializeAws_restJson1DatabaseResource(input.Database, context) }),
    ...(input.LFTag !== undefined &&
      input.LFTag !== null && { LFTag: serializeAws_restJson1LFTagKeyResource(input.LFTag, context) }),
    ...(input.LFTagPolicy !== undefined &&
      input.LFTagPolicy !== null && {
        LFTagPolicy: serializeAws_restJson1LFTagPolicyResource(input.LFTagPolicy, context),
      }),
    ...(input.Table !== undefined &&
      input.Table !== null && { Table: serializeAws_restJson1TableResource(input.Table, context) }),
    ...(input.TableWithColumns !== undefined &&
      input.TableWithColumns !== null && {
        TableWithColumns: serializeAws_restJson1TableWithColumnsResource(input.TableWithColumns, context),
      }),
  };
};

const serializeAws_restJson1RowFilter = (input: RowFilter, context: __SerdeContext): any => {
  return {
    ...(input.AllRowsWildcard !== undefined &&
      input.AllRowsWildcard !== null && {
        AllRowsWildcard: serializeAws_restJson1AllRowsWildcard(input.AllRowsWildcard, context),
      }),
    ...(input.FilterExpression !== undefined &&
      input.FilterExpression !== null && { FilterExpression: input.FilterExpression }),
  };
};

const serializeAws_restJson1StorageOptimizerConfig = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1StorageOptimizerConfigMap = (
  input: Record<string, Record<string, string>>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [OptimizerType | string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: serializeAws_restJson1StorageOptimizerConfig(value, context),
    };
  }, {});
};

const serializeAws_restJson1StringValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TableResource = (input: TableResource, context: __SerdeContext): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
    ...(input.TableWildcard !== undefined &&
      input.TableWildcard !== null && {
        TableWildcard: serializeAws_restJson1TableWildcard(input.TableWildcard, context),
      }),
  };
};

const serializeAws_restJson1TableWildcard = (input: TableWildcard, context: __SerdeContext): any => {
  return {};
};

const serializeAws_restJson1TableWithColumnsResource = (
  input: TableWithColumnsResource,
  context: __SerdeContext
): any => {
  return {
    ...(input.CatalogId !== undefined && input.CatalogId !== null && { CatalogId: input.CatalogId }),
    ...(input.ColumnNames !== undefined &&
      input.ColumnNames !== null && { ColumnNames: serializeAws_restJson1ColumnNames(input.ColumnNames, context) }),
    ...(input.ColumnWildcard !== undefined &&
      input.ColumnWildcard !== null && {
        ColumnWildcard: serializeAws_restJson1ColumnWildcard(input.ColumnWildcard, context),
      }),
    ...(input.DatabaseName !== undefined && input.DatabaseName !== null && { DatabaseName: input.DatabaseName }),
    ...(input.Name !== undefined && input.Name !== null && { Name: input.Name }),
  };
};

const serializeAws_restJson1TagValueList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TrustedResourceOwners = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ValueStringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1VirtualObject = (input: VirtualObject, context: __SerdeContext): any => {
  return {
    ...(input.ETag !== undefined && input.ETag !== null && { ETag: input.ETag }),
    ...(input.Uri !== undefined && input.Uri !== null && { Uri: input.Uri }),
  };
};

const serializeAws_restJson1VirtualObjectList = (input: VirtualObject[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1VirtualObject(entry, context);
    });
};

const serializeAws_restJson1WriteOperation = (input: WriteOperation, context: __SerdeContext): any => {
  return {
    ...(input.AddObject !== undefined &&
      input.AddObject !== null && { AddObject: serializeAws_restJson1AddObjectInput(input.AddObject, context) }),
    ...(input.DeleteObject !== undefined &&
      input.DeleteObject !== null && {
        DeleteObject: serializeAws_restJson1DeleteObjectInput(input.DeleteObject, context),
      }),
  };
};

const serializeAws_restJson1WriteOperationList = (input: WriteOperation[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1WriteOperation(entry, context);
    });
};

const deserializeAws_restJson1AllRowsWildcard = (output: any, context: __SerdeContext): AllRowsWildcard => {
  return {} as any;
};

const deserializeAws_restJson1AuthorizedSessionTagValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1BatchPermissionsFailureEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1ErrorDetail(output.Error, context)
        : undefined,
    RequestEntry:
      output.RequestEntry !== undefined && output.RequestEntry !== null
        ? deserializeAws_restJson1BatchPermissionsRequestEntry(output.RequestEntry, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BatchPermissionsFailureList = (
  output: any,
  context: __SerdeContext
): BatchPermissionsFailureEntry[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BatchPermissionsFailureEntry(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BatchPermissionsRequestEntry = (
  output: any,
  context: __SerdeContext
): BatchPermissionsRequestEntry => {
  return {
    Id: __expectString(output.Id),
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_restJson1PermissionList(output.Permissions, context)
        : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
        ? deserializeAws_restJson1PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_restJson1DataLakePrincipal(output.Principal, context)
        : undefined,
    Resource:
      output.Resource !== undefined && output.Resource !== null
        ? deserializeAws_restJson1Resource(output.Resource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CatalogResource = (output: any, context: __SerdeContext): CatalogResource => {
  return {} as any;
};

const deserializeAws_restJson1ColumnLFTag = (output: any, context: __SerdeContext): ColumnLFTag => {
  return {
    LFTags:
      output.LFTags !== undefined && output.LFTags !== null
        ? deserializeAws_restJson1LFTagsList(output.LFTags, context)
        : undefined,
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1ColumnLFTagsList = (output: any, context: __SerdeContext): ColumnLFTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ColumnLFTag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ColumnNames = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ColumnWildcard = (output: any, context: __SerdeContext): ColumnWildcard => {
  return {
    ExcludedColumnNames:
      output.ExcludedColumnNames !== undefined && output.ExcludedColumnNames !== null
        ? deserializeAws_restJson1ColumnNames(output.ExcludedColumnNames, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DatabaseLFTagsList = (output: any, context: __SerdeContext): TaggedDatabase[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaggedDatabase(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DatabaseResource = (output: any, context: __SerdeContext): DatabaseResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1DataCellsFilter = (output: any, context: __SerdeContext): DataCellsFilter => {
  return {
    ColumnNames:
      output.ColumnNames !== undefined && output.ColumnNames !== null
        ? deserializeAws_restJson1ColumnNames(output.ColumnNames, context)
        : undefined,
    ColumnWildcard:
      output.ColumnWildcard !== undefined && output.ColumnWildcard !== null
        ? deserializeAws_restJson1ColumnWildcard(output.ColumnWildcard, context)
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    RowFilter:
      output.RowFilter !== undefined && output.RowFilter !== null
        ? deserializeAws_restJson1RowFilter(output.RowFilter, context)
        : undefined,
    TableCatalogId: __expectString(output.TableCatalogId),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_restJson1DataCellsFilterList = (output: any, context: __SerdeContext): DataCellsFilter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataCellsFilter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataCellsFilterResource = (
  output: any,
  context: __SerdeContext
): DataCellsFilterResource => {
  return {
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableCatalogId: __expectString(output.TableCatalogId),
    TableName: __expectString(output.TableName),
  } as any;
};

const deserializeAws_restJson1DataLakePrincipal = (output: any, context: __SerdeContext): DataLakePrincipal => {
  return {
    DataLakePrincipalIdentifier: __expectString(output.DataLakePrincipalIdentifier),
  } as any;
};

const deserializeAws_restJson1DataLakePrincipalList = (output: any, context: __SerdeContext): DataLakePrincipal[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataLakePrincipal(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DataLakeSettings = (output: any, context: __SerdeContext): DataLakeSettings => {
  return {
    AllowExternalDataFiltering: __expectBoolean(output.AllowExternalDataFiltering),
    AuthorizedSessionTagValueList:
      output.AuthorizedSessionTagValueList !== undefined && output.AuthorizedSessionTagValueList !== null
        ? deserializeAws_restJson1AuthorizedSessionTagValueList(output.AuthorizedSessionTagValueList, context)
        : undefined,
    CreateDatabaseDefaultPermissions:
      output.CreateDatabaseDefaultPermissions !== undefined && output.CreateDatabaseDefaultPermissions !== null
        ? deserializeAws_restJson1PrincipalPermissionsList(output.CreateDatabaseDefaultPermissions, context)
        : undefined,
    CreateTableDefaultPermissions:
      output.CreateTableDefaultPermissions !== undefined && output.CreateTableDefaultPermissions !== null
        ? deserializeAws_restJson1PrincipalPermissionsList(output.CreateTableDefaultPermissions, context)
        : undefined,
    DataLakeAdmins:
      output.DataLakeAdmins !== undefined && output.DataLakeAdmins !== null
        ? deserializeAws_restJson1DataLakePrincipalList(output.DataLakeAdmins, context)
        : undefined,
    ExternalDataFilteringAllowList:
      output.ExternalDataFilteringAllowList !== undefined && output.ExternalDataFilteringAllowList !== null
        ? deserializeAws_restJson1DataLakePrincipalList(output.ExternalDataFilteringAllowList, context)
        : undefined,
    TrustedResourceOwners:
      output.TrustedResourceOwners !== undefined && output.TrustedResourceOwners !== null
        ? deserializeAws_restJson1TrustedResourceOwners(output.TrustedResourceOwners, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataLocationResource = (output: any, context: __SerdeContext): DataLocationResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ResourceArn: __expectString(output.ResourceArn),
  } as any;
};

const deserializeAws_restJson1DetailsMap = (output: any, context: __SerdeContext): DetailsMap => {
  return {
    ResourceShare:
      output.ResourceShare !== undefined && output.ResourceShare !== null
        ? deserializeAws_restJson1ResourceShareList(output.ResourceShare, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ErrorDetail = (output: any, context: __SerdeContext): ErrorDetail => {
  return {
    ErrorCode: __expectString(output.ErrorCode),
    ErrorMessage: __expectString(output.ErrorMessage),
  } as any;
};

const deserializeAws_restJson1ExecutionStatistics = (output: any, context: __SerdeContext): ExecutionStatistics => {
  return {
    AverageExecutionTimeMillis: __expectLong(output.AverageExecutionTimeMillis),
    DataScannedBytes: __expectLong(output.DataScannedBytes),
    WorkUnitsExecutedCount: __expectLong(output.WorkUnitsExecutedCount),
  } as any;
};

const deserializeAws_restJson1Expression = (output: any, context: __SerdeContext): LFTag[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LFTag(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LFTag = (output: any, context: __SerdeContext): LFTag => {
  return {
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_restJson1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LFTagError = (output: any, context: __SerdeContext): LFTagError => {
  return {
    Error:
      output.Error !== undefined && output.Error !== null
        ? deserializeAws_restJson1ErrorDetail(output.Error, context)
        : undefined,
    LFTag:
      output.LFTag !== undefined && output.LFTag !== null
        ? deserializeAws_restJson1LFTagPair(output.LFTag, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LFTagErrors = (output: any, context: __SerdeContext): LFTagError[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LFTagError(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1LFTagKeyResource = (output: any, context: __SerdeContext): LFTagKeyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_restJson1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LFTagPair = (output: any, context: __SerdeContext): LFTagPair => {
  return {
    CatalogId: __expectString(output.CatalogId),
    TagKey: __expectString(output.TagKey),
    TagValues:
      output.TagValues !== undefined && output.TagValues !== null
        ? deserializeAws_restJson1TagValueList(output.TagValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1LFTagPolicyResource = (output: any, context: __SerdeContext): LFTagPolicyResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    Expression:
      output.Expression !== undefined && output.Expression !== null
        ? deserializeAws_restJson1Expression(output.Expression, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1LFTagsList = (output: any, context: __SerdeContext): LFTagPair[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LFTagPair(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PartitionedTableObjectsList = (
  output: any,
  context: __SerdeContext
): PartitionObjects[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PartitionObjects(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PartitionObjects = (output: any, context: __SerdeContext): PartitionObjects => {
  return {
    Objects:
      output.Objects !== undefined && output.Objects !== null
        ? deserializeAws_restJson1TableObjectList(output.Objects, context)
        : undefined,
    PartitionValues:
      output.PartitionValues !== undefined && output.PartitionValues !== null
        ? deserializeAws_restJson1PartitionValuesList(output.PartitionValues, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PartitionValuesList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1PermissionList = (output: any, context: __SerdeContext): (Permission | string)[] => {
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

const deserializeAws_restJson1PlanningStatistics = (output: any, context: __SerdeContext): PlanningStatistics => {
  return {
    EstimatedDataToScanBytes: __expectLong(output.EstimatedDataToScanBytes),
    PlanningTimeMillis: __expectLong(output.PlanningTimeMillis),
    QueueTimeMillis: __expectLong(output.QueueTimeMillis),
    WorkUnitsGeneratedCount: __expectLong(output.WorkUnitsGeneratedCount),
  } as any;
};

const deserializeAws_restJson1PrincipalPermissions = (output: any, context: __SerdeContext): PrincipalPermissions => {
  return {
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_restJson1PermissionList(output.Permissions, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_restJson1DataLakePrincipal(output.Principal, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PrincipalPermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalPermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PrincipalPermissions(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PrincipalResourcePermissions = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions => {
  return {
    AdditionalDetails:
      output.AdditionalDetails !== undefined && output.AdditionalDetails !== null
        ? deserializeAws_restJson1DetailsMap(output.AdditionalDetails, context)
        : undefined,
    Permissions:
      output.Permissions !== undefined && output.Permissions !== null
        ? deserializeAws_restJson1PermissionList(output.Permissions, context)
        : undefined,
    PermissionsWithGrantOption:
      output.PermissionsWithGrantOption !== undefined && output.PermissionsWithGrantOption !== null
        ? deserializeAws_restJson1PermissionList(output.PermissionsWithGrantOption, context)
        : undefined,
    Principal:
      output.Principal !== undefined && output.Principal !== null
        ? deserializeAws_restJson1DataLakePrincipal(output.Principal, context)
        : undefined,
    Resource:
      output.Resource !== undefined && output.Resource !== null
        ? deserializeAws_restJson1Resource(output.Resource, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PrincipalResourcePermissionsList = (
  output: any,
  context: __SerdeContext
): PrincipalResourcePermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PrincipalResourcePermissions(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Resource = (output: any, context: __SerdeContext): Resource => {
  return {
    Catalog:
      output.Catalog !== undefined && output.Catalog !== null
        ? deserializeAws_restJson1CatalogResource(output.Catalog, context)
        : undefined,
    DataCellsFilter:
      output.DataCellsFilter !== undefined && output.DataCellsFilter !== null
        ? deserializeAws_restJson1DataCellsFilterResource(output.DataCellsFilter, context)
        : undefined,
    DataLocation:
      output.DataLocation !== undefined && output.DataLocation !== null
        ? deserializeAws_restJson1DataLocationResource(output.DataLocation, context)
        : undefined,
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_restJson1DatabaseResource(output.Database, context)
        : undefined,
    LFTag:
      output.LFTag !== undefined && output.LFTag !== null
        ? deserializeAws_restJson1LFTagKeyResource(output.LFTag, context)
        : undefined,
    LFTagPolicy:
      output.LFTagPolicy !== undefined && output.LFTagPolicy !== null
        ? deserializeAws_restJson1LFTagPolicyResource(output.LFTagPolicy, context)
        : undefined,
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_restJson1TableResource(output.Table, context)
        : undefined,
    TableWithColumns:
      output.TableWithColumns !== undefined && output.TableWithColumns !== null
        ? deserializeAws_restJson1TableWithColumnsResource(output.TableWithColumns, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ResourceInfo = (output: any, context: __SerdeContext): ResourceInfo => {
  return {
    LastModified:
      output.LastModified !== undefined && output.LastModified !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastModified)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    RoleArn: __expectString(output.RoleArn),
  } as any;
};

const deserializeAws_restJson1ResourceInfoList = (output: any, context: __SerdeContext): ResourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ResourceInfo(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ResourceShareList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RowFilter = (output: any, context: __SerdeContext): RowFilter => {
  return {
    AllRowsWildcard:
      output.AllRowsWildcard !== undefined && output.AllRowsWildcard !== null
        ? deserializeAws_restJson1AllRowsWildcard(output.AllRowsWildcard, context)
        : undefined,
    FilterExpression: __expectString(output.FilterExpression),
  } as any;
};

const deserializeAws_restJson1StorageOptimizer = (output: any, context: __SerdeContext): StorageOptimizer => {
  return {
    Config:
      output.Config !== undefined && output.Config !== null
        ? deserializeAws_restJson1StorageOptimizerConfig(output.Config, context)
        : undefined,
    ErrorMessage: __expectString(output.ErrorMessage),
    LastRunDetails: __expectString(output.LastRunDetails),
    StorageOptimizerType: __expectString(output.StorageOptimizerType),
    Warnings: __expectString(output.Warnings),
  } as any;
};

const deserializeAws_restJson1StorageOptimizerConfig = (
  output: any,
  context: __SerdeContext
): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1StorageOptimizerList = (output: any, context: __SerdeContext): StorageOptimizer[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1StorageOptimizer(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TableLFTagsList = (output: any, context: __SerdeContext): TaggedTable[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TaggedTable(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TableObject = (output: any, context: __SerdeContext): TableObject => {
  return {
    ETag: __expectString(output.ETag),
    Size: __expectLong(output.Size),
    Uri: __expectString(output.Uri),
  } as any;
};

const deserializeAws_restJson1TableObjectList = (output: any, context: __SerdeContext): TableObject[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TableObject(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TableResource = (output: any, context: __SerdeContext): TableResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
    TableWildcard:
      output.TableWildcard !== undefined && output.TableWildcard !== null
        ? deserializeAws_restJson1TableWildcard(output.TableWildcard, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TableWildcard = (output: any, context: __SerdeContext): TableWildcard => {
  return {} as any;
};

const deserializeAws_restJson1TableWithColumnsResource = (
  output: any,
  context: __SerdeContext
): TableWithColumnsResource => {
  return {
    CatalogId: __expectString(output.CatalogId),
    ColumnNames:
      output.ColumnNames !== undefined && output.ColumnNames !== null
        ? deserializeAws_restJson1ColumnNames(output.ColumnNames, context)
        : undefined,
    ColumnWildcard:
      output.ColumnWildcard !== undefined && output.ColumnWildcard !== null
        ? deserializeAws_restJson1ColumnWildcard(output.ColumnWildcard, context)
        : undefined,
    DatabaseName: __expectString(output.DatabaseName),
    Name: __expectString(output.Name),
  } as any;
};

const deserializeAws_restJson1TaggedDatabase = (output: any, context: __SerdeContext): TaggedDatabase => {
  return {
    Database:
      output.Database !== undefined && output.Database !== null
        ? deserializeAws_restJson1DatabaseResource(output.Database, context)
        : undefined,
    LFTags:
      output.LFTags !== undefined && output.LFTags !== null
        ? deserializeAws_restJson1LFTagsList(output.LFTags, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TaggedTable = (output: any, context: __SerdeContext): TaggedTable => {
  return {
    LFTagOnDatabase:
      output.LFTagOnDatabase !== undefined && output.LFTagOnDatabase !== null
        ? deserializeAws_restJson1LFTagsList(output.LFTagOnDatabase, context)
        : undefined,
    LFTagsOnColumns:
      output.LFTagsOnColumns !== undefined && output.LFTagsOnColumns !== null
        ? deserializeAws_restJson1ColumnLFTagsList(output.LFTagsOnColumns, context)
        : undefined,
    LFTagsOnTable:
      output.LFTagsOnTable !== undefined && output.LFTagsOnTable !== null
        ? deserializeAws_restJson1LFTagsList(output.LFTagsOnTable, context)
        : undefined,
    Table:
      output.Table !== undefined && output.Table !== null
        ? deserializeAws_restJson1TableResource(output.Table, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagValueList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1TransactionDescription = (
  output: any,
  context: __SerdeContext
): TransactionDescription => {
  return {
    TransactionEndTime:
      output.TransactionEndTime !== undefined && output.TransactionEndTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TransactionEndTime)))
        : undefined,
    TransactionId: __expectString(output.TransactionId),
    TransactionStartTime:
      output.TransactionStartTime !== undefined && output.TransactionStartTime !== null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.TransactionStartTime)))
        : undefined,
    TransactionStatus: __expectString(output.TransactionStatus),
  } as any;
};

const deserializeAws_restJson1TransactionDescriptionList = (
  output: any,
  context: __SerdeContext
): TransactionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1TransactionDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1TrustedResourceOwners = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1WorkUnitRange = (output: any, context: __SerdeContext): WorkUnitRange => {
  return {
    WorkUnitIdMax: __expectLong(output.WorkUnitIdMax),
    WorkUnitIdMin: __expectLong(output.WorkUnitIdMin),
    WorkUnitToken: __expectString(output.WorkUnitToken),
  } as any;
};

const deserializeAws_restJson1WorkUnitRangeList = (output: any, context: __SerdeContext): WorkUnitRange[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1WorkUnitRange(entry, context);
    });
  return retVal;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"],
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

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string | undefined => {
  const findKey = (object: any, key: string) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
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
