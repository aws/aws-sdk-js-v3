// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SdkStreamSerdeContext as __SdkStreamSerdeContext,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

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
  DescribeVaultOutput,
  Encryption,
  GlacierJobDescription,
  Grant,
  Grantee,
  InputSerialization,
  InsufficientCapacityException,
  InvalidParameterValueException,
  InventoryRetrievalJobDescription,
  InventoryRetrievalJobInput,
  JobParameters,
  LimitExceededException,
  MissingParameterValueException,
  OutputLocation,
  OutputSerialization,
  PartListElement,
  PolicyEnforcedException,
  ProvisionedCapacityDescription,
  RequestTimeoutException,
  ResourceNotFoundException,
  S3Location,
  SelectParameters,
  ServiceUnavailableException,
  UploadListElement,
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_TagMap(input.Tags, context) }),
  });
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
    body = se_JobParameters(input.jobParameters, context);
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
    body = se_VaultLockPolicy(input.policy, context);
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
  body = JSON.stringify({
    ...(input.TagKeys != null && { TagKeys: se_TagKeyList(input.TagKeys, context) }),
  });
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
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: se_DataRetrievalPolicy(input.Policy, context) }),
  });
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
    body = se_VaultAccessPolicy(input.policy, context);
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
    body = se_VaultNotificationConfig(input.vaultNotificationConfig, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Action != null) {
    contents.Action = __expectString(data.Action);
  }
  if (data.ArchiveId != null) {
    contents.ArchiveId = __expectString(data.ArchiveId);
  }
  if (data.ArchiveSHA256TreeHash != null) {
    contents.ArchiveSHA256TreeHash = __expectString(data.ArchiveSHA256TreeHash);
  }
  if (data.ArchiveSizeInBytes != null) {
    contents.ArchiveSizeInBytes = __expectLong(data.ArchiveSizeInBytes);
  }
  if (data.Completed != null) {
    contents.Completed = __expectBoolean(data.Completed);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectString(data.CompletionDate);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.InventoryRetrievalParameters != null) {
    contents.InventoryRetrievalParameters = de_InventoryRetrievalJobDescription(
      data.InventoryRetrievalParameters,
      context
    );
  }
  if (data.InventorySizeInBytes != null) {
    contents.InventorySizeInBytes = __expectLong(data.InventorySizeInBytes);
  }
  if (data.JobDescription != null) {
    contents.JobDescription = __expectString(data.JobDescription);
  }
  if (data.JobId != null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobOutputPath != null) {
    contents.JobOutputPath = __expectString(data.JobOutputPath);
  }
  if (data.OutputLocation != null) {
    contents.OutputLocation = de_OutputLocation(data.OutputLocation, context);
  }
  if (data.RetrievalByteRange != null) {
    contents.RetrievalByteRange = __expectString(data.RetrievalByteRange);
  }
  if (data.SHA256TreeHash != null) {
    contents.SHA256TreeHash = __expectString(data.SHA256TreeHash);
  }
  if (data.SNSTopic != null) {
    contents.SNSTopic = __expectString(data.SNSTopic);
  }
  if (data.SelectParameters != null) {
    contents.SelectParameters = de_SelectParameters(data.SelectParameters, context);
  }
  if (data.StatusCode != null) {
    contents.StatusCode = __expectString(data.StatusCode);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  if (data.Tier != null) {
    contents.Tier = __expectString(data.Tier);
  }
  if (data.VaultARN != null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationDate != null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.LastInventoryDate != null) {
    contents.LastInventoryDate = __expectString(data.LastInventoryDate);
  }
  if (data.NumberOfArchives != null) {
    contents.NumberOfArchives = __expectLong(data.NumberOfArchives);
  }
  if (data.SizeInBytes != null) {
    contents.SizeInBytes = __expectLong(data.SizeInBytes);
  }
  if (data.VaultARN != null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
  if (data.VaultName != null) {
    contents.VaultName = __expectString(data.VaultName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Policy != null) {
    contents.Policy = de_DataRetrievalPolicy(data.Policy, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.policy = de_VaultAccessPolicy(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationDate != null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.ExpirationDate != null) {
    contents.ExpirationDate = __expectString(data.ExpirationDate);
  }
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  contents.vaultNotificationConfig = de_VaultNotificationConfig(data, context);
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.JobList != null) {
    contents.JobList = de_JobList(data.JobList, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.UploadsList != null) {
    contents.UploadsList = de_UploadsList(data.UploadsList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ArchiveDescription != null) {
    contents.ArchiveDescription = __expectString(data.ArchiveDescription);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.MultipartUploadId != null) {
    contents.MultipartUploadId = __expectString(data.MultipartUploadId);
  }
  if (data.PartSizeInBytes != null) {
    contents.PartSizeInBytes = __expectLong(data.PartSizeInBytes);
  }
  if (data.Parts != null) {
    contents.Parts = de_PartList(data.Parts, context);
  }
  if (data.VaultARN != null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ProvisionedCapacityList != null) {
    contents.ProvisionedCapacityList = de_ProvisionedCapacityList(data.ProvisionedCapacityList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Tags != null) {
    contents.Tags = de_TagMap(data.Tags, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.VaultList != null) {
    contents.VaultList = de_VaultList(data.VaultList, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
 * deserializeAws_restJson1InsufficientCapacityExceptionRes
 */
const de_InsufficientCapacityExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
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
  if (data.code != null) {
    contents.code = __expectString(data.code);
  }
  if (data.message != null) {
    contents.message = __expectString(data.message);
  }
  if (data.type != null) {
    contents.type = __expectString(data.type);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AccessControlPolicyList
 */
const se_AccessControlPolicyList = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Grant(entry, context);
    });
};

/**
 * serializeAws_restJson1CSVInput
 */
const se_CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  return {
    ...(input.Comments != null && { Comments: input.Comments }),
    ...(input.FieldDelimiter != null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.FileHeaderInfo != null && { FileHeaderInfo: input.FileHeaderInfo }),
    ...(input.QuoteCharacter != null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter != null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.RecordDelimiter != null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

/**
 * serializeAws_restJson1CSVOutput
 */
const se_CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  return {
    ...(input.FieldDelimiter != null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.QuoteCharacter != null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter != null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.QuoteFields != null && { QuoteFields: input.QuoteFields }),
    ...(input.RecordDelimiter != null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

/**
 * serializeAws_restJson1DataRetrievalPolicy
 */
const se_DataRetrievalPolicy = (input: DataRetrievalPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Rules != null && { Rules: se_DataRetrievalRulesList(input.Rules, context) }),
  };
};

/**
 * serializeAws_restJson1DataRetrievalRule
 */
const se_DataRetrievalRule = (input: DataRetrievalRule, context: __SerdeContext): any => {
  return {
    ...(input.BytesPerHour != null && { BytesPerHour: input.BytesPerHour }),
    ...(input.Strategy != null && { Strategy: input.Strategy }),
  };
};

/**
 * serializeAws_restJson1DataRetrievalRulesList
 */
const se_DataRetrievalRulesList = (input: DataRetrievalRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_DataRetrievalRule(entry, context);
    });
};

/**
 * serializeAws_restJson1Encryption
 */
const se_Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KMSContext != null && { KMSContext: input.KMSContext }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
  };
};

/**
 * serializeAws_restJson1Grant
 */
const se_Grant = (input: Grant, context: __SerdeContext): any => {
  return {
    ...(input.Grantee != null && { Grantee: se_Grantee(input.Grantee, context) }),
    ...(input.Permission != null && { Permission: input.Permission }),
  };
};

/**
 * serializeAws_restJson1Grantee
 */
const se_Grantee = (input: Grantee, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.ID != null && { ID: input.ID }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.URI != null && { URI: input.URI }),
  };
};

/**
 * serializeAws_restJson1hashmap
 */
const se_hashmap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1InputSerialization
 */
const se_InputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv != null && { csv: se_CSVInput(input.csv, context) }),
  };
};

/**
 * serializeAws_restJson1InventoryRetrievalJobInput
 */
const se_InventoryRetrievalJobInput = (input: InventoryRetrievalJobInput, context: __SerdeContext): any => {
  return {
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
  };
};

/**
 * serializeAws_restJson1JobParameters
 */
const se_JobParameters = (input: JobParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveId != null && { ArchiveId: input.ArchiveId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.InventoryRetrievalParameters != null && {
      InventoryRetrievalParameters: se_InventoryRetrievalJobInput(input.InventoryRetrievalParameters, context),
    }),
    ...(input.OutputLocation != null && { OutputLocation: se_OutputLocation(input.OutputLocation, context) }),
    ...(input.RetrievalByteRange != null && { RetrievalByteRange: input.RetrievalByteRange }),
    ...(input.SNSTopic != null && { SNSTopic: input.SNSTopic }),
    ...(input.SelectParameters != null && { SelectParameters: se_SelectParameters(input.SelectParameters, context) }),
    ...(input.Tier != null && { Tier: input.Tier }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

/**
 * serializeAws_restJson1NotificationEventList
 */
const se_NotificationEventList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1OutputLocation
 */
const se_OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3 != null && { S3: se_S3Location(input.S3, context) }),
  };
};

/**
 * serializeAws_restJson1OutputSerialization
 */
const se_OutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv != null && { csv: se_CSVOutput(input.csv, context) }),
  };
};

/**
 * serializeAws_restJson1S3Location
 */
const se_S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList != null && {
      AccessControlList: se_AccessControlPolicyList(input.AccessControlList, context),
    }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.CannedACL != null && { CannedACL: input.CannedACL }),
    ...(input.Encryption != null && { Encryption: se_Encryption(input.Encryption, context) }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
    ...(input.Tagging != null && { Tagging: se_hashmap(input.Tagging, context) }),
    ...(input.UserMetadata != null && { UserMetadata: se_hashmap(input.UserMetadata, context) }),
  };
};

/**
 * serializeAws_restJson1SelectParameters
 */
const se_SelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.ExpressionType != null && { ExpressionType: input.ExpressionType }),
    ...(input.InputSerialization != null && {
      InputSerialization: se_InputSerialization(input.InputSerialization, context),
    }),
    ...(input.OutputSerialization != null && {
      OutputSerialization: se_OutputSerialization(input.OutputSerialization, context),
    }),
  };
};

/**
 * serializeAws_restJson1TagKeyList
 */
const se_TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1TagMap
 */
const se_TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1VaultAccessPolicy
 */
const se_VaultAccessPolicy = (input: VaultAccessPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

/**
 * serializeAws_restJson1VaultLockPolicy
 */
const se_VaultLockPolicy = (input: VaultLockPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

/**
 * serializeAws_restJson1VaultNotificationConfig
 */
const se_VaultNotificationConfig = (input: VaultNotificationConfig, context: __SerdeContext): any => {
  return {
    ...(input.Events != null && { Events: se_NotificationEventList(input.Events, context) }),
    ...(input.SNSTopic != null && { SNSTopic: input.SNSTopic }),
  };
};

/**
 * deserializeAws_restJson1AccessControlPolicyList
 */
const de_AccessControlPolicyList = (output: any, context: __SerdeContext): Grant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Grant(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CSVInput
 */
const de_CSVInput = (output: any, context: __SerdeContext): CSVInput => {
  return {
    Comments: __expectString(output.Comments),
    FieldDelimiter: __expectString(output.FieldDelimiter),
    FileHeaderInfo: __expectString(output.FileHeaderInfo),
    QuoteCharacter: __expectString(output.QuoteCharacter),
    QuoteEscapeCharacter: __expectString(output.QuoteEscapeCharacter),
    RecordDelimiter: __expectString(output.RecordDelimiter),
  } as any;
};

/**
 * deserializeAws_restJson1CSVOutput
 */
const de_CSVOutput = (output: any, context: __SerdeContext): CSVOutput => {
  return {
    FieldDelimiter: __expectString(output.FieldDelimiter),
    QuoteCharacter: __expectString(output.QuoteCharacter),
    QuoteEscapeCharacter: __expectString(output.QuoteEscapeCharacter),
    QuoteFields: __expectString(output.QuoteFields),
    RecordDelimiter: __expectString(output.RecordDelimiter),
  } as any;
};

/**
 * deserializeAws_restJson1DataRetrievalPolicy
 */
const de_DataRetrievalPolicy = (output: any, context: __SerdeContext): DataRetrievalPolicy => {
  return {
    Rules: output.Rules != null ? de_DataRetrievalRulesList(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1DataRetrievalRule
 */
const de_DataRetrievalRule = (output: any, context: __SerdeContext): DataRetrievalRule => {
  return {
    BytesPerHour: __expectLong(output.BytesPerHour),
    Strategy: __expectString(output.Strategy),
  } as any;
};

/**
 * deserializeAws_restJson1DataRetrievalRulesList
 */
const de_DataRetrievalRulesList = (output: any, context: __SerdeContext): DataRetrievalRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DataRetrievalRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DescribeVaultOutput
 */
const de_DescribeVaultOutput = (output: any, context: __SerdeContext): DescribeVaultOutput => {
  return {
    CreationDate: __expectString(output.CreationDate),
    LastInventoryDate: __expectString(output.LastInventoryDate),
    NumberOfArchives: __expectLong(output.NumberOfArchives),
    SizeInBytes: __expectLong(output.SizeInBytes),
    VaultARN: __expectString(output.VaultARN),
    VaultName: __expectString(output.VaultName),
  } as any;
};

/**
 * deserializeAws_restJson1Encryption
 */
const de_Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    KMSContext: __expectString(output.KMSContext),
    KMSKeyId: __expectString(output.KMSKeyId),
  } as any;
};

/**
 * deserializeAws_restJson1GlacierJobDescription
 */
const de_GlacierJobDescription = (output: any, context: __SerdeContext): GlacierJobDescription => {
  return {
    Action: __expectString(output.Action),
    ArchiveId: __expectString(output.ArchiveId),
    ArchiveSHA256TreeHash: __expectString(output.ArchiveSHA256TreeHash),
    ArchiveSizeInBytes: __expectLong(output.ArchiveSizeInBytes),
    Completed: __expectBoolean(output.Completed),
    CompletionDate: __expectString(output.CompletionDate),
    CreationDate: __expectString(output.CreationDate),
    InventoryRetrievalParameters:
      output.InventoryRetrievalParameters != null
        ? de_InventoryRetrievalJobDescription(output.InventoryRetrievalParameters, context)
        : undefined,
    InventorySizeInBytes: __expectLong(output.InventorySizeInBytes),
    JobDescription: __expectString(output.JobDescription),
    JobId: __expectString(output.JobId),
    JobOutputPath: __expectString(output.JobOutputPath),
    OutputLocation: output.OutputLocation != null ? de_OutputLocation(output.OutputLocation, context) : undefined,
    RetrievalByteRange: __expectString(output.RetrievalByteRange),
    SHA256TreeHash: __expectString(output.SHA256TreeHash),
    SNSTopic: __expectString(output.SNSTopic),
    SelectParameters:
      output.SelectParameters != null ? de_SelectParameters(output.SelectParameters, context) : undefined,
    StatusCode: __expectString(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    Tier: __expectString(output.Tier),
    VaultARN: __expectString(output.VaultARN),
  } as any;
};

/**
 * deserializeAws_restJson1Grant
 */
const de_Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    Grantee: output.Grantee != null ? de_Grantee(output.Grantee, context) : undefined,
    Permission: __expectString(output.Permission),
  } as any;
};

/**
 * deserializeAws_restJson1Grantee
 */
const de_Grantee = (output: any, context: __SerdeContext): Grantee => {
  return {
    DisplayName: __expectString(output.DisplayName),
    EmailAddress: __expectString(output.EmailAddress),
    ID: __expectString(output.ID),
    Type: __expectString(output.Type),
    URI: __expectString(output.URI),
  } as any;
};

/**
 * deserializeAws_restJson1hashmap
 */
const de_hashmap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1InputSerialization
 */
const de_InputSerialization = (output: any, context: __SerdeContext): InputSerialization => {
  return {
    csv: output.csv != null ? de_CSVInput(output.csv, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1InventoryRetrievalJobDescription
 */
const de_InventoryRetrievalJobDescription = (
  output: any,
  context: __SerdeContext
): InventoryRetrievalJobDescription => {
  return {
    EndDate: __expectString(output.EndDate),
    Format: __expectString(output.Format),
    Limit: __expectString(output.Limit),
    Marker: __expectString(output.Marker),
    StartDate: __expectString(output.StartDate),
  } as any;
};

/**
 * deserializeAws_restJson1JobList
 */
const de_JobList = (output: any, context: __SerdeContext): GlacierJobDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_GlacierJobDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1NotificationEventList
 */
const de_NotificationEventList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1OutputLocation
 */
const de_OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    S3: output.S3 != null ? de_S3Location(output.S3, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1OutputSerialization
 */
const de_OutputSerialization = (output: any, context: __SerdeContext): OutputSerialization => {
  return {
    csv: output.csv != null ? de_CSVOutput(output.csv, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1PartList
 */
const de_PartList = (output: any, context: __SerdeContext): PartListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_PartListElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1PartListElement
 */
const de_PartListElement = (output: any, context: __SerdeContext): PartListElement => {
  return {
    RangeInBytes: __expectString(output.RangeInBytes),
    SHA256TreeHash: __expectString(output.SHA256TreeHash),
  } as any;
};

/**
 * deserializeAws_restJson1ProvisionedCapacityDescription
 */
const de_ProvisionedCapacityDescription = (output: any, context: __SerdeContext): ProvisionedCapacityDescription => {
  return {
    CapacityId: __expectString(output.CapacityId),
    ExpirationDate: __expectString(output.ExpirationDate),
    StartDate: __expectString(output.StartDate),
  } as any;
};

/**
 * deserializeAws_restJson1ProvisionedCapacityList
 */
const de_ProvisionedCapacityList = (output: any, context: __SerdeContext): ProvisionedCapacityDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProvisionedCapacityDescription(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1S3Location
 */
const de_S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    AccessControlList:
      output.AccessControlList != null ? de_AccessControlPolicyList(output.AccessControlList, context) : undefined,
    BucketName: __expectString(output.BucketName),
    CannedACL: __expectString(output.CannedACL),
    Encryption: output.Encryption != null ? de_Encryption(output.Encryption, context) : undefined,
    Prefix: __expectString(output.Prefix),
    StorageClass: __expectString(output.StorageClass),
    Tagging: output.Tagging != null ? de_hashmap(output.Tagging, context) : undefined,
    UserMetadata: output.UserMetadata != null ? de_hashmap(output.UserMetadata, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1SelectParameters
 */
const de_SelectParameters = (output: any, context: __SerdeContext): SelectParameters => {
  return {
    Expression: __expectString(output.Expression),
    ExpressionType: __expectString(output.ExpressionType),
    InputSerialization:
      output.InputSerialization != null ? de_InputSerialization(output.InputSerialization, context) : undefined,
    OutputSerialization:
      output.OutputSerialization != null ? de_OutputSerialization(output.OutputSerialization, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1TagMap
 */
const de_TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1UploadListElement
 */
const de_UploadListElement = (output: any, context: __SerdeContext): UploadListElement => {
  return {
    ArchiveDescription: __expectString(output.ArchiveDescription),
    CreationDate: __expectString(output.CreationDate),
    MultipartUploadId: __expectString(output.MultipartUploadId),
    PartSizeInBytes: __expectLong(output.PartSizeInBytes),
    VaultARN: __expectString(output.VaultARN),
  } as any;
};

/**
 * deserializeAws_restJson1UploadsList
 */
const de_UploadsList = (output: any, context: __SerdeContext): UploadListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_UploadListElement(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VaultAccessPolicy
 */
const de_VaultAccessPolicy = (output: any, context: __SerdeContext): VaultAccessPolicy => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

/**
 * deserializeAws_restJson1VaultList
 */
const de_VaultList = (output: any, context: __SerdeContext): DescribeVaultOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_DescribeVaultOutput(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1VaultNotificationConfig
 */
const de_VaultNotificationConfig = (output: any, context: __SerdeContext): VaultNotificationConfig => {
  return {
    Events: output.Events != null ? de_NotificationEventList(output.Events, context) : undefined,
    SNSTopic: __expectString(output.SNSTopic),
  } as any;
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
