// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  resolvedPath as __resolvedPath,
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
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput,
} from "../commands/AbortMultipartUploadCommand";
import { AbortVaultLockCommandInput, AbortVaultLockCommandOutput } from "../commands/AbortVaultLockCommand";
import { AddTagsToVaultCommandInput, AddTagsToVaultCommandOutput } from "../commands/AddTagsToVaultCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput,
} from "../commands/CompleteMultipartUploadCommand";
import { CompleteVaultLockCommandInput, CompleteVaultLockCommandOutput } from "../commands/CompleteVaultLockCommand";
import { CreateVaultCommandInput, CreateVaultCommandOutput } from "../commands/CreateVaultCommand";
import { DeleteArchiveCommandInput, DeleteArchiveCommandOutput } from "../commands/DeleteArchiveCommand";
import {
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput,
} from "../commands/DeleteVaultAccessPolicyCommand";
import { DeleteVaultCommandInput, DeleteVaultCommandOutput } from "../commands/DeleteVaultCommand";
import {
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput,
} from "../commands/DeleteVaultNotificationsCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import { DescribeVaultCommandInput, DescribeVaultCommandOutput } from "../commands/DescribeVaultCommand";
import {
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput,
} from "../commands/GetDataRetrievalPolicyCommand";
import { GetJobOutputCommandInput, GetJobOutputCommandOutput } from "../commands/GetJobOutputCommand";
import {
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput,
} from "../commands/GetVaultAccessPolicyCommand";
import { GetVaultLockCommandInput, GetVaultLockCommandOutput } from "../commands/GetVaultLockCommand";
import {
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput,
} from "../commands/GetVaultNotificationsCommand";
import { InitiateJobCommandInput, InitiateJobCommandOutput } from "../commands/InitiateJobCommand";
import {
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput,
} from "../commands/InitiateMultipartUploadCommand";
import { InitiateVaultLockCommandInput, InitiateVaultLockCommandOutput } from "../commands/InitiateVaultLockCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput,
} from "../commands/ListMultipartUploadsCommand";
import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import {
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput,
} from "../commands/ListProvisionedCapacityCommand";
import { ListTagsForVaultCommandInput, ListTagsForVaultCommandOutput } from "../commands/ListTagsForVaultCommand";
import { ListVaultsCommandInput, ListVaultsCommandOutput } from "../commands/ListVaultsCommand";
import {
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput,
} from "../commands/PurchaseProvisionedCapacityCommand";
import {
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput,
} from "../commands/RemoveTagsFromVaultCommand";
import {
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput,
} from "../commands/SetDataRetrievalPolicyCommand";
import {
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput,
} from "../commands/SetVaultAccessPolicyCommand";
import {
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput,
} from "../commands/SetVaultNotificationsCommand";
import { UploadArchiveCommandInput, UploadArchiveCommandOutput } from "../commands/UploadArchiveCommand";
import {
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput,
} from "../commands/UploadMultipartPartCommand";
import { GlacierServiceException as __BaseException } from "../models/GlacierServiceException";
import {
  CSVInput,
  CSVOutput,
  DataRetrievalPolicy,
  DataRetrievalRule,
  Encryption,
  Grant,
  Grantee,
  InputSerialization,
  InsufficientCapacityException,
  InvalidParameterValueException,
  InventoryRetrievalJobInput,
  JobParameters,
  LimitExceededException,
  MissingParameterValueException,
  OutputLocation,
  OutputSerialization,
  PolicyEnforcedException,
  RequestTimeoutException,
  ResourceNotFoundException,
  S3Location,
  SelectParameters,
  ServiceUnavailableException,
  VaultAccessPolicy,
  VaultLockPolicy,
  VaultNotificationConfig,
} from "../models/models_0";

/**
 * serializeAws_restJson1AbortMultipartUploadCommand
 */
export const se_AbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AbortVaultLockCommand
 */
export const se_AbortVaultLockCommand = async (
  input: AbortVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/lock-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1AddTagsToVaultCommand
 */
export const se_AddTagsToVaultCommand = async (
  input: AddTagsToVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  const query: any = map({
    operation: [, "add"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CompleteMultipartUploadCommand
 */
export const se_CompleteMultipartUploadCommand = async (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-archive-size": input.archiveSize!,
    "x-amz-sha256-tree-hash": input.checksum!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  let body: any;
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
 * serializeAws_restJson1CompleteVaultLockCommand
 */
export const se_CompleteVaultLockCommand = async (
  input: CompleteVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "lockId", () => input.lockId!, "{lockId}", false);
  let body: any;
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
 * serializeAws_restJson1CreateVaultCommand
 */
export const se_CreateVaultCommand = async (
  input: CreateVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteArchiveCommand
 */
export const se_DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/archives/{archiveId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "archiveId", () => input.archiveId!, "{archiveId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVaultCommand
 */
export const se_DeleteVaultCommand = async (
  input: DeleteVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVaultAccessPolicyCommand
 */
export const se_DeleteVaultAccessPolicyCommand = async (
  input: DeleteVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/access-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DeleteVaultNotificationsCommand
 */
export const se_DeleteVaultNotificationsCommand = async (
  input: DeleteVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeJobCommand
 */
export const se_DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/jobs/{jobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1DescribeVaultCommand
 */
export const se_DescribeVaultCommand = async (
  input: DescribeVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetDataRetrievalPolicyCommand
 */
export const se_GetDataRetrievalPolicyCommand = async (
  input: GetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/policies/data-retrieval";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetJobOutputCommand
 */
export const se_GetJobOutputCommand = async (
  input: GetJobOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    range: input.range!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "jobId", () => input.jobId!, "{jobId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetVaultAccessPolicyCommand
 */
export const se_GetVaultAccessPolicyCommand = async (
  input: GetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/access-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetVaultLockCommand
 */
export const se_GetVaultLockCommand = async (
  input: GetVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/lock-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1GetVaultNotificationsCommand
 */
export const se_GetVaultNotificationsCommand = async (
  input: GetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1InitiateJobCommand
 */
export const se_InitiateJobCommand = async (
  input: InitiateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  if (input.jobParameters !== undefined) {
    body = _json(input.jobParameters);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1InitiateMultipartUploadCommand
 */
export const se_InitiateMultipartUploadCommand = async (
  input: InitiateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "x-amz-archive-description": input.archiveDescription!,
    "x-amz-part-size": input.partSize!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
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
 * serializeAws_restJson1InitiateVaultLockCommand
 */
export const se_InitiateVaultLockCommand = async (
  input: InitiateVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/lock-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  if (input.policy !== undefined) {
    body = _json(input.policy);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
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
 * serializeAws_restJson1ListJobsCommand
 */
export const se_ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/jobs";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  const query: any = map({
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    marker: [, input.marker!],
    statuscode: [, input.statuscode!],
    completed: [, input.completed!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListMultipartUploadsCommand
 */
export const se_ListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  const query: any = map({
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
    marker: [, input.marker!],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListPartsCommand
 */
export const se_ListPartsCommand = async (
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  const query: any = map({
    marker: [, input.marker!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1ListProvisionedCapacityCommand
 */
export const se_ListProvisionedCapacityCommand = async (
  input: ListProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/provisioned-capacity";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListTagsForVaultCommand
 */
export const se_ListTagsForVaultCommand = async (
  input: ListTagsForVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1ListVaultsCommand
 */
export const se_ListVaultsCommand = async (
  input: ListVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  const query: any = map({
    marker: [, input.marker!],
    limit: [() => input.limit !== void 0, () => input.limit!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1PurchaseProvisionedCapacityCommand
 */
export const se_PurchaseProvisionedCapacityCommand = async (
  input: PurchaseProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/provisioned-capacity";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
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
 * serializeAws_restJson1RemoveTagsFromVaultCommand
 */
export const se_RemoveTagsFromVaultCommand = async (
  input: RemoveTagsFromVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/tags";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  const query: any = map({
    operation: [, "remove"],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeys: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1SetDataRetrievalPolicyCommand
 */
export const se_SetDataRetrievalPolicyCommand = async (
  input: SetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/policies/data-retrieval";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: (_) => _json(_),
    })
  );
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SetVaultAccessPolicyCommand
 */
export const se_SetVaultAccessPolicyCommand = async (
  input: SetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/access-policy";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  if (input.policy !== undefined) {
    body = _json(input.policy);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1SetVaultNotificationsCommand
 */
export const se_SetVaultNotificationsCommand = async (
  input: SetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  let body: any;
  if (input.vaultNotificationConfig !== undefined) {
    body = _json(input.vaultNotificationConfig);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * serializeAws_restJson1UploadArchiveCommand
 */
export const se_UploadArchiveCommand = async (
  input: UploadArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-amz-archive-description": input.archiveDescription!,
    "x-amz-sha256-tree-hash": input.checksum!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/archives";
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
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
 * serializeAws_restJson1UploadMultipartPartCommand
 */
export const se_UploadMultipartPartCommand = async (
  input: UploadMultipartPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = map({}, isSerializableHeaderValue, {
    "content-type": "application/octet-stream",
    "x-amz-sha256-tree-hash": input.checksum!,
    "content-range": input.range!,
  });
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "accountId", () => input.accountId!, "{accountId}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "vaultName", () => input.vaultName!, "{vaultName}", false);
  resolvedPath = __resolvedPath(resolvedPath, input, "uploadId", () => input.uploadId!, "{uploadId}", false);
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body,
  });
};

/**
 * deserializeAws_restJson1AbortMultipartUploadCommand
 */
export const de_AbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AbortMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AbortMultipartUploadCommandError
 */
const de_AbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AbortVaultLockCommand
 */
export const de_AbortVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AbortVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AbortVaultLockCommandError
 */
const de_AbortVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1AddTagsToVaultCommand
 */
export const de_AddTagsToVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_AddTagsToVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1AddTagsToVaultCommandError
 */
const de_AddTagsToVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CompleteMultipartUploadCommand
 */
export const de_CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CompleteMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
    checksum: [, output.headers["x-amz-sha256-tree-hash"]],
    archiveId: [, output.headers["x-amz-archive-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CompleteMultipartUploadCommandError
 */
const de_CompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CompleteVaultLockCommand
 */
export const de_CompleteVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CompleteVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CompleteVaultLockCommandError
 */
const de_CompleteVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1CreateVaultCommand
 */
export const de_CreateVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CreateVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateVaultCommandError
 */
const de_CreateVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteArchiveCommand
 */
export const de_DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteArchiveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteArchiveCommandError
 */
const de_DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteVaultCommand
 */
export const de_DeleteVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVaultCommandError
 */
const de_DeleteVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteVaultAccessPolicyCommand
 */
export const de_DeleteVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVaultAccessPolicyCommandError
 */
const de_DeleteVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DeleteVaultNotificationsCommand
 */
export const de_DeleteVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DeleteVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteVaultNotificationsCommandError
 */
const de_DeleteVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeJobCommand
 */
export const de_DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Action: __expectString,
    ArchiveId: __expectString,
    ArchiveSHA256TreeHash: __expectString,
    ArchiveSizeInBytes: __expectLong,
    Completed: __expectBoolean,
    CompletionDate: __expectString,
    CreationDate: __expectString,
    InventoryRetrievalParameters: _json,
    InventorySizeInBytes: __expectLong,
    JobDescription: __expectString,
    JobId: __expectString,
    JobOutputPath: __expectString,
    OutputLocation: _json,
    RetrievalByteRange: __expectString,
    SHA256TreeHash: __expectString,
    SNSTopic: __expectString,
    SelectParameters: _json,
    StatusCode: __expectString,
    StatusMessage: __expectString,
    Tier: __expectString,
    VaultARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeJobCommandError
 */
const de_DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1DescribeVaultCommand
 */
export const de_DescribeVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: __expectString,
    LastInventoryDate: __expectString,
    NumberOfArchives: __expectLong,
    SizeInBytes: __expectLong,
    VaultARN: __expectString,
    VaultName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeVaultCommandError
 */
const de_DescribeVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetDataRetrievalPolicyCommand
 */
export const de_GetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Policy: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetDataRetrievalPolicyCommandError
 */
const de_GetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetJobOutputCommand
 */
export const de_GetJobOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetJobOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetJobOutputCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    checksum: [, output.headers["x-amz-sha256-tree-hash"]],
    contentRange: [, output.headers["content-range"]],
    acceptRanges: [, output.headers["accept-ranges"]],
    contentType: [, output.headers["content-type"]],
    archiveDescription: [, output.headers["x-amz-archive-description"]],
  });
  const data: any = output.body;
  context.sdkStreamMixin(data);
  contents.body = data;
  map(contents, {
    status: [, output.statusCode],
  });
  return contents;
};

/**
 * deserializeAws_restJson1GetJobOutputCommandError
 */
const de_GetJobOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVaultAccessPolicyCommand
 */
export const de_GetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.policy = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetVaultAccessPolicyCommandError
 */
const de_GetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVaultLockCommand
 */
export const de_GetVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: __expectString,
    ExpirationDate: __expectString,
    Policy: __expectString,
    State: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetVaultLockCommandError
 */
const de_GetVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1GetVaultNotificationsCommand
 */
export const de_GetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.vaultNotificationConfig = _json(data);
  return contents;
};

/**
 * deserializeAws_restJson1GetVaultNotificationsCommandError
 */
const de_GetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InitiateJobCommand
 */
export const de_InitiateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return de_InitiateJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
    jobId: [, output.headers["x-amz-job-id"]],
    jobOutputPath: [, output.headers["x-amz-job-output-path"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InitiateJobCommandError
 */
const de_InitiateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.glacier#InsufficientCapacityException":
      throw await de_InsufficientCapacityExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "PolicyEnforcedException":
    case "com.amazonaws.glacier#PolicyEnforcedException":
      throw await de_PolicyEnforcedExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InitiateMultipartUploadCommand
 */
export const de_InitiateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_InitiateMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
    uploadId: [, output.headers["x-amz-multipart-upload-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InitiateMultipartUploadCommandError
 */
const de_InitiateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InitiateVaultLockCommand
 */
export const de_InitiateVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_InitiateVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    lockId: [, output.headers["x-amz-lock-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1InitiateVaultLockCommandError
 */
const de_InitiateVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListJobsCommand
 */
export const de_ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    JobList: _json,
    Marker: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListJobsCommandError
 */
const de_ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListMultipartUploadsCommand
 */
export const de_ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListMultipartUploadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Marker: __expectString,
    UploadsList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListMultipartUploadsCommandError
 */
const de_ListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListPartsCommand
 */
export const de_ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListPartsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ArchiveDescription: __expectString,
    CreationDate: __expectString,
    Marker: __expectString,
    MultipartUploadId: __expectString,
    PartSizeInBytes: __expectLong,
    Parts: _json,
    VaultARN: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListPartsCommandError
 */
const de_ListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListProvisionedCapacityCommand
 */
export const de_ListProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProvisionedCapacityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ProvisionedCapacityList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProvisionedCapacityCommandError
 */
const de_ListProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListTagsForVaultCommand
 */
export const de_ListTagsForVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsForVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsForVaultCommandError
 */
const de_ListTagsForVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1ListVaultsCommand
 */
export const de_ListVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListVaultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Marker: __expectString,
    VaultList: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListVaultsCommandError
 */
const de_ListVaultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1PurchaseProvisionedCapacityCommand
 */
export const de_PurchaseProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_PurchaseProvisionedCapacityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    capacityId: [, output.headers["x-amz-capacity-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PurchaseProvisionedCapacityCommandError
 */
const de_PurchaseProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1RemoveTagsFromVaultCommand
 */
export const de_RemoveTagsFromVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_RemoveTagsFromVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RemoveTagsFromVaultCommandError
 */
const de_RemoveTagsFromVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SetDataRetrievalPolicyCommand
 */
export const de_SetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_SetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetDataRetrievalPolicyCommandError
 */
const de_SetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SetVaultAccessPolicyCommand
 */
export const de_SetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_SetVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetVaultAccessPolicyCommandError
 */
const de_SetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1SetVaultNotificationsCommand
 */
export const de_SetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_SetVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1SetVaultNotificationsCommandError
 */
const de_SetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UploadArchiveCommand
 */
export const de_UploadArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_UploadArchiveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
    checksum: [, output.headers["x-amz-sha256-tree-hash"]],
    archiveId: [, output.headers["x-amz-archive-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UploadArchiveCommandError
 */
const de_UploadArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1UploadMultipartPartCommand
 */
export const de_UploadMultipartPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_UploadMultipartPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    checksum: [, output.headers["x-amz-sha256-tree-hash"]],
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UploadMultipartPartCommandError
 */
const de_UploadMultipartPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      throw await de_RequestTimeoutExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await de_ServiceUnavailableExceptionRes(parsedOutput, context);
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
 * deserializeAws_restJson1InsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InsufficientCapacityException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidParameterValueExceptionRes
 */
const de_InvalidParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1LimitExceededExceptionRes
 */
const de_LimitExceededExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new LimitExceededException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1MissingParameterValueExceptionRes
 */
const de_MissingParameterValueExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingParameterValueException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MissingParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1PolicyEnforcedExceptionRes
 */
const de_PolicyEnforcedExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyEnforcedException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new PolicyEnforcedException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1RequestTimeoutExceptionRes
 */
const de_RequestTimeoutExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new RequestTimeoutException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ResourceNotFoundExceptionRes
 */
const de_ResourceNotFoundExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ResourceNotFoundException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ServiceUnavailableExceptionRes
 */
const de_ServiceUnavailableExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    code: __expectString,
    message: __expectString,
    type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AccessControlPolicyList omitted.

// se_CSVInput omitted.

// se_CSVOutput omitted.

// se_DataRetrievalPolicy omitted.

// se_DataRetrievalRule omitted.

// se_DataRetrievalRulesList omitted.

// se_Encryption omitted.

// se_Grant omitted.

// se_Grantee omitted.

// se_hashmap omitted.

// se_InputSerialization omitted.

// se_InventoryRetrievalJobInput omitted.

// se_JobParameters omitted.

// se_NotificationEventList omitted.

// se_OutputLocation omitted.

// se_OutputSerialization omitted.

// se_S3Location omitted.

// se_SelectParameters omitted.

// se_TagKeyList omitted.

// se_TagMap omitted.

// se_VaultAccessPolicy omitted.

// se_VaultLockPolicy omitted.

// se_VaultNotificationConfig omitted.

// de_AccessControlPolicyList omitted.

// de_CSVInput omitted.

// de_CSVOutput omitted.

// de_DataRetrievalPolicy omitted.

// de_DataRetrievalRule omitted.

// de_DataRetrievalRulesList omitted.

// de_DescribeVaultOutput omitted.

// de_Encryption omitted.

// de_GlacierJobDescription omitted.

// de_Grant omitted.

// de_Grantee omitted.

// de_hashmap omitted.

// de_InputSerialization omitted.

// de_InventoryRetrievalJobDescription omitted.

// de_JobList omitted.

// de_NotificationEventList omitted.

// de_OutputLocation omitted.

// de_OutputSerialization omitted.

// de_PartList omitted.

// de_PartListElement omitted.

// de_ProvisionedCapacityDescription omitted.

// de_ProvisionedCapacityList omitted.

// de_S3Location omitted.

// de_SelectParameters omitted.

// de_TagMap omitted.

// de_UploadListElement omitted.

// de_UploadsList omitted.

// de_VaultAccessPolicy omitted.

// de_VaultList omitted.

// de_VaultNotificationConfig omitted.

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
