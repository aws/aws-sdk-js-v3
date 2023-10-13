// smithy-typescript generated code
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse,
  isValidHostname as __isValidHostname,
} from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  parseRfc3339DateTimeWithOffset as __parseRfc3339DateTimeWithOffset,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

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
import {
  CreateLakeFormationOptInCommandInput,
  CreateLakeFormationOptInCommandOutput,
} from "../commands/CreateLakeFormationOptInCommand";
import { CreateLFTagCommandInput, CreateLFTagCommandOutput } from "../commands/CreateLFTagCommand";
import {
  DeleteDataCellsFilterCommandInput,
  DeleteDataCellsFilterCommandOutput,
} from "../commands/DeleteDataCellsFilterCommand";
import {
  DeleteLakeFormationOptInCommandInput,
  DeleteLakeFormationOptInCommandOutput,
} from "../commands/DeleteLakeFormationOptInCommand";
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
import {
  ListLakeFormationOptInsCommandInput,
  ListLakeFormationOptInsCommandOutput,
} from "../commands/ListLakeFormationOptInsCommand";
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
  BatchPermissionsRequestEntry,
  CatalogResource,
  ColumnWildcard,
  ConcurrentModificationException,
  DatabaseResource,
  DataCellsFilter,
  DataCellsFilterResource,
  DataLakePrincipal,
  DataLakeSettings,
  DataLocationResource,
  DeleteObjectInput,
  EntityNotFoundException,
  ExpiredException,
  FilterCondition,
  GlueEncryptionException,
  InternalServiceException,
  InvalidInputException,
  LakeFormationOptInsInfo,
  LFTag,
  LFTagKeyResource,
  LFTagPair,
  LFTagPolicyResource,
  OperationTimeoutException,
  OptimizerType,
  PartitionValueList,
  Permission,
  PermissionType,
  PermissionTypeMismatchException,
  PrincipalPermissions,
  PrincipalResourcePermissions,
  QueryPlanningContext,
  Resource,
  ResourceInfo,
  ResourceNotReadyException,
  ResourceNumberLimitExceededException,
  RowFilter,
  StatisticsNotReadyYetException,
  TableResource,
  TableWildcard,
  TableWithColumnsResource,
  ThrottledException,
  TransactionCanceledException,
  TransactionCommitInProgressException,
  TransactionCommittedException,
  TransactionDescription,
  VirtualObject,
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      LFTags: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      DurationSeconds: [],
      PrincipalArn: [],
      RoleArn: [],
      SAMLAssertion: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Entries: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Entries: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TableData: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1CreateLakeFormationOptInCommand
 */
export const se_CreateLakeFormationOptInCommand = async (
  input: CreateLakeFormationOptInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/CreateLakeFormationOptIn";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      TagKey: [],
      TagValues: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      DatabaseName: [],
      Name: [],
      TableCatalogId: [],
      TableName: [],
    })
  );
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
 * serializeAws_restJson1DeleteLakeFormationOptInCommand
 */
export const se_DeleteLakeFormationOptInCommand = async (
  input: DeleteLakeFormationOptInCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/DeleteLakeFormationOptIn";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      TagKey: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DatabaseName: [],
      Objects: (_) => _json(_),
      TableName: [],
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      ResourceArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      DatabaseName: [],
      Name: [],
      TableCatalogId: [],
      TableName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      MaxResults: [],
      NextToken: [],
      ResourceArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      TagKey: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      QueryId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      QueryId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Resource: (_) => _json(_),
      ShowAssignedLFTags: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DatabaseName: [],
      MaxResults: [],
      NextToken: [],
      PartitionPredicate: [],
      QueryAsOfTime: (_) => Math.round(_.getTime() / 1000),
      TableName: [],
      TransactionId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AuditContext: (_) => _json(_),
      DurationSeconds: [],
      Partition: (_) => _json(_),
      Permissions: (_) => _json(_),
      SupportedPermissionTypes: (_) => _json(_),
      TableArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      AuditContext: (_) => _json(_),
      DurationSeconds: [],
      Permissions: (_) => _json(_),
      SupportedPermissionTypes: (_) => _json(_),
      TableArn: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      QueryId: [],
      WorkUnitId: [],
      WorkUnitToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      NextToken: [],
      PageSize: [],
      QueryId: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Permissions: (_) => _json(_),
      PermissionsWithGrantOption: (_) => _json(_),
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      Table: (_) => _json(_),
    })
  );
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
 * serializeAws_restJson1ListLakeFormationOptInsCommand
 */
export const se_ListLakeFormationOptInsCommand = async (
  input: ListLakeFormationOptInsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/ListLakeFormationOptIns";
  let body: any;
  body = JSON.stringify(
    take(input, {
      MaxResults: [],
      NextToken: [],
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      MaxResults: [],
      NextToken: [],
      ResourceShareType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      IncludeRelated: [],
      MaxResults: [],
      NextToken: [],
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
      ResourceType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      FilterConditionList: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DatabaseName: [],
      MaxResults: [],
      NextToken: [],
      StorageOptimizerType: [],
      TableName: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      MaxResults: [],
      NextToken: [],
      StatusFilter: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DataLakeSettings: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      HybridAccessEnabled: [],
      ResourceArn: [],
      RoleArn: [],
      UseServiceLinkedRole: [],
      WithFederation: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      LFTags: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Permissions: (_) => _json(_),
      PermissionsWithGrantOption: (_) => _json(_),
      Principal: (_) => _json(_),
      Resource: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Expression: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      Expression: (_) => _json(_),
      MaxResults: [],
      NextToken: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      QueryPlanningContext: (_) => se_QueryPlanningContext(_, context),
      QueryString: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TransactionType: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      TableData: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      TagKey: [],
      TagValuesToAdd: (_) => _json(_),
      TagValuesToDelete: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      HybridAccessEnabled: [],
      ResourceArn: [],
      RoleArn: [],
      WithFederation: [],
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DatabaseName: [],
      TableName: [],
      TransactionId: [],
      WriteOperations: (_) => _json(_),
    })
  );
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
  body = JSON.stringify(
    take(input, {
      CatalogId: [],
      DatabaseName: [],
      StorageOptimizerConfig: (_) => _json(_),
      TableName: [],
    })
  );
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
  const doc = take(data, {
    Failures: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AccessKeyId: __expectString,
    Expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecretAccessKey: __expectString,
    SessionToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failures: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failures: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    TransactionStatus: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1CreateLakeFormationOptInCommand
 */
export const de_CreateLakeFormationOptInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLakeFormationOptInCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLakeFormationOptInCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLakeFormationOptInCommandError
 */
const de_CreateLakeFormationOptInCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLakeFormationOptInCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1DeleteLakeFormationOptInCommand
 */
export const de_DeleteLakeFormationOptInCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLakeFormationOptInCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteLakeFormationOptInCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteLakeFormationOptInCommandError
 */
const de_DeleteLakeFormationOptInCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteLakeFormationOptInCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ResourceInfo: (_) => de_ResourceInfo(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    TransactionDescription: (_) => de_TransactionDescription(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DataCellsFilter: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DataLakeSettings: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    Permissions: (_) => de_PrincipalResourcePermissionsList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    CatalogId: __expectString,
    TagKey: __expectString,
    TagValues: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Error: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    ExecutionStatistics: _json,
    PlanningStatistics: _json,
    QuerySubmissionTime: (_) => __expectNonNull(__parseRfc3339DateTimeWithOffset(_)),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    LFTagOnDatabase: _json,
    LFTagsOnColumns: _json,
    LFTagsOnTable: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    Objects: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AccessKeyId: __expectString,
    Expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecretAccessKey: __expectString,
    SessionToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    AccessKeyId: __expectString,
    Expiration: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SecretAccessKey: __expectString,
    SessionToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    QueryId: __expectString,
    WorkUnitRanges: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DataCellsFilters: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

/**
 * deserializeAws_restJson1ListLakeFormationOptInsCommand
 */
export const de_ListLakeFormationOptInsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLakeFormationOptInsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLakeFormationOptInsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LakeFormationOptInsInfoList: (_) => de_LakeFormationOptInsInfoList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLakeFormationOptInsCommandError
 */
const de_ListLakeFormationOptInsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLakeFormationOptInsCommandOutput> => {
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    LFTags: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    PrincipalResourcePermissions: (_) => de_PrincipalResourcePermissionsList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    ResourceInfoList: (_) => de_ResourceInfoList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    StorageOptimizerList: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    Transactions: (_) => de_TransactionDescriptionList(_, context),
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Failures: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    DatabaseList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    NextToken: __expectString,
    TableList: _json,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    QueryId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    TransactionId: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
      return throwDefaultError({
        output,
        parsedBody,
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
  const doc = take(data, {
    Result: __expectString,
  });
  Object.assign(contents, doc);
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
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      });
  }
};

const throwDefaultError = withBaseException(__BaseException);
/**
 * deserializeAws_restJson1AccessDeniedExceptionRes
 */
const de_AccessDeniedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AccessDeniedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
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
  const doc = take(data, {
    Message: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new WorkUnitsNotReadyYetException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AddObjectInput omitted.

// se_AllRowsWildcard omitted.

// se_AuditContext omitted.

// se_AuthorizedSessionTagValueList omitted.

// se_BatchPermissionsRequestEntry omitted.

// se_BatchPermissionsRequestEntryList omitted.

// se_CatalogResource omitted.

// se_ColumnNames omitted.

// se_ColumnWildcard omitted.

// se_DatabaseResource omitted.

// se_DataCellsFilter omitted.

// se_DataCellsFilterResource omitted.

// se_DataLakePrincipal omitted.

// se_DataLakePrincipalList omitted.

// se_DataLakeSettings omitted.

// se_DataLocationResource omitted.

// se_DeleteObjectInput omitted.

// se_Expression omitted.

// se_FilterCondition omitted.

// se_FilterConditionList omitted.

// se_LFTag omitted.

// se_LFTagKeyResource omitted.

// se_LFTagPair omitted.

// se_LFTagPolicyResource omitted.

// se_LFTagsList omitted.

// se_ParametersMap omitted.

// se_PartitionValueList omitted.

// se_PartitionValuesList omitted.

// se_PermissionList omitted.

// se_PermissionTypeList omitted.

// se_PrincipalPermissions omitted.

// se_PrincipalPermissionsList omitted.

// se_QueryParameterMap omitted.

/**
 * serializeAws_restJson1QueryPlanningContext
 */
const se_QueryPlanningContext = (input: QueryPlanningContext, context: __SerdeContext): any => {
  return take(input, {
    CatalogId: [],
    DatabaseName: [],
    QueryAsOfTime: (_) => Math.round(_.getTime() / 1000),
    QueryParameters: _json,
    TransactionId: [],
  });
};

// se_Resource omitted.

// se_RowFilter omitted.

// se_StorageOptimizerConfig omitted.

// se_StorageOptimizerConfigMap omitted.

// se_StringValueList omitted.

// se_TableResource omitted.

// se_TableWildcard omitted.

// se_TableWithColumnsResource omitted.

// se_TagValueList omitted.

// se_TrustedResourceOwners omitted.

// se_ValueStringList omitted.

// se_VirtualObject omitted.

// se_VirtualObjectList omitted.

// se_WriteOperation omitted.

// se_WriteOperationList omitted.

// de_AllRowsWildcard omitted.

// de_AuthorizedSessionTagValueList omitted.

// de_BatchPermissionsFailureEntry omitted.

// de_BatchPermissionsFailureList omitted.

// de_BatchPermissionsRequestEntry omitted.

// de_CatalogResource omitted.

// de_ColumnLFTag omitted.

// de_ColumnLFTagsList omitted.

// de_ColumnNames omitted.

// de_ColumnWildcard omitted.

// de_DatabaseLFTagsList omitted.

// de_DatabaseResource omitted.

// de_DataCellsFilter omitted.

// de_DataCellsFilterList omitted.

// de_DataCellsFilterResource omitted.

// de_DataLakePrincipal omitted.

// de_DataLakePrincipalList omitted.

// de_DataLakeSettings omitted.

// de_DataLocationResource omitted.

// de_DetailsMap omitted.

// de_ErrorDetail omitted.

// de_ExecutionStatistics omitted.

// de_Expression omitted.

/**
 * deserializeAws_restJson1LakeFormationOptInsInfo
 */
const de_LakeFormationOptInsInfo = (output: any, context: __SerdeContext): LakeFormationOptInsInfo => {
  return take(output, {
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedBy: __expectString,
    Principal: _json,
    Resource: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1LakeFormationOptInsInfoList
 */
const de_LakeFormationOptInsInfoList = (output: any, context: __SerdeContext): LakeFormationOptInsInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LakeFormationOptInsInfo(entry, context);
    });
  return retVal;
};

// de_LFTag omitted.

// de_LFTagError omitted.

// de_LFTagErrors omitted.

// de_LFTagKeyResource omitted.

// de_LFTagPair omitted.

// de_LFTagPolicyResource omitted.

// de_LFTagsList omitted.

// de_ParametersMap omitted.

// de_PartitionedTableObjectsList omitted.

// de_PartitionObjects omitted.

// de_PartitionValuesList omitted.

// de_PermissionList omitted.

// de_PlanningStatistics omitted.

// de_PrincipalPermissions omitted.

// de_PrincipalPermissionsList omitted.

/**
 * deserializeAws_restJson1PrincipalResourcePermissions
 */
const de_PrincipalResourcePermissions = (output: any, context: __SerdeContext): PrincipalResourcePermissions => {
  return take(output, {
    AdditionalDetails: _json,
    LastUpdated: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdatedBy: __expectString,
    Permissions: _json,
    PermissionsWithGrantOption: _json,
    Principal: _json,
    Resource: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1PrincipalResourcePermissionsList
 */
const de_PrincipalResourcePermissionsList = (output: any, context: __SerdeContext): PrincipalResourcePermissions[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_PrincipalResourcePermissions(entry, context);
    });
  return retVal;
};

// de_Resource omitted.

/**
 * deserializeAws_restJson1ResourceInfo
 */
const de_ResourceInfo = (output: any, context: __SerdeContext): ResourceInfo => {
  return take(output, {
    HybridAccessEnabled: __expectBoolean,
    LastModified: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    RoleArn: __expectString,
    WithFederation: __expectBoolean,
  }) as any;
};

/**
 * deserializeAws_restJson1ResourceInfoList
 */
const de_ResourceInfoList = (output: any, context: __SerdeContext): ResourceInfo[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ResourceInfo(entry, context);
    });
  return retVal;
};

// de_ResourceShareList omitted.

// de_RowFilter omitted.

// de_StorageOptimizer omitted.

// de_StorageOptimizerConfig omitted.

// de_StorageOptimizerList omitted.

// de_TableLFTagsList omitted.

// de_TableObject omitted.

// de_TableObjectList omitted.

// de_TableResource omitted.

// de_TableWildcard omitted.

// de_TableWithColumnsResource omitted.

// de_TaggedDatabase omitted.

// de_TaggedTable omitted.

// de_TagValueList omitted.

/**
 * deserializeAws_restJson1TransactionDescription
 */
const de_TransactionDescription = (output: any, context: __SerdeContext): TransactionDescription => {
  return take(output, {
    TransactionEndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransactionId: __expectString,
    TransactionStartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    TransactionStatus: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1TransactionDescriptionList
 */
const de_TransactionDescriptionList = (output: any, context: __SerdeContext): TransactionDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_TransactionDescription(entry, context);
    });
  return retVal;
};

// de_TrustedResourceOwners omitted.

// de_WorkUnitRange omitted.

// de_WorkUnitRangeList omitted.

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  requestId:
    output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
  extendedRequestId: output.headers["x-amz-id-2"],
  cfId: output.headers["x-amz-cf-id"],
});

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
