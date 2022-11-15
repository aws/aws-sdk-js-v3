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

export const serializeAws_restJson1AbortMultipartUploadCommand = async (
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

export const serializeAws_restJson1AbortVaultLockCommand = async (
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

export const serializeAws_restJson1AddTagsToVaultCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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

export const serializeAws_restJson1CompleteMultipartUploadCommand = async (
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

export const serializeAws_restJson1CompleteVaultLockCommand = async (
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

export const serializeAws_restJson1CreateVaultCommand = async (
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

export const serializeAws_restJson1DeleteArchiveCommand = async (
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

export const serializeAws_restJson1DeleteVaultCommand = async (
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

export const serializeAws_restJson1DeleteVaultAccessPolicyCommand = async (
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

export const serializeAws_restJson1DeleteVaultNotificationsCommand = async (
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

export const serializeAws_restJson1DescribeJobCommand = async (
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

export const serializeAws_restJson1DescribeVaultCommand = async (
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

export const serializeAws_restJson1GetDataRetrievalPolicyCommand = async (
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

export const serializeAws_restJson1GetJobOutputCommand = async (
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

export const serializeAws_restJson1GetVaultAccessPolicyCommand = async (
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

export const serializeAws_restJson1GetVaultLockCommand = async (
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

export const serializeAws_restJson1GetVaultNotificationsCommand = async (
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

export const serializeAws_restJson1InitiateJobCommand = async (
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
    body = serializeAws_restJson1JobParameters(input.jobParameters, context);
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

export const serializeAws_restJson1InitiateMultipartUploadCommand = async (
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

export const serializeAws_restJson1InitiateVaultLockCommand = async (
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
    body = serializeAws_restJson1VaultLockPolicy(input.policy, context);
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

export const serializeAws_restJson1ListJobsCommand = async (
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

export const serializeAws_restJson1ListMultipartUploadsCommand = async (
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

export const serializeAws_restJson1ListPartsCommand = async (
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

export const serializeAws_restJson1ListProvisionedCapacityCommand = async (
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

export const serializeAws_restJson1ListTagsForVaultCommand = async (
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

export const serializeAws_restJson1ListVaultsCommand = async (
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

export const serializeAws_restJson1PurchaseProvisionedCapacityCommand = async (
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

export const serializeAws_restJson1RemoveTagsFromVaultCommand = async (
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
    ...(input.TagKeys != null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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

export const serializeAws_restJson1SetDataRetrievalPolicyCommand = async (
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
    ...(input.Policy != null && { Policy: serializeAws_restJson1DataRetrievalPolicy(input.Policy, context) }),
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

export const serializeAws_restJson1SetVaultAccessPolicyCommand = async (
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
    body = serializeAws_restJson1VaultAccessPolicy(input.policy, context);
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

export const serializeAws_restJson1SetVaultNotificationsCommand = async (
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
    body = serializeAws_restJson1VaultNotificationConfig(input.vaultNotificationConfig, context);
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

export const serializeAws_restJson1UploadArchiveCommand = async (
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

export const serializeAws_restJson1UploadMultipartPartCommand = async (
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

export const deserializeAws_restJson1AbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AbortMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AbortMultipartUploadCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AbortVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AbortVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AbortVaultLockCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1AddTagsToVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddTagsToVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1AddTagsToVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CompleteMultipartUploadCommandError(output, context);
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

const deserializeAws_restJson1CompleteMultipartUploadCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CompleteVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CompleteVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CompleteVaultLockCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1CreateVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CreateVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteArchiveCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteArchiveCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DeleteVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobCommandError(output, context);
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
    contents.InventoryRetrievalParameters = deserializeAws_restJson1InventoryRetrievalJobDescription(
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
    contents.OutputLocation = deserializeAws_restJson1OutputLocation(data.OutputLocation, context);
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
    contents.SelectParameters = deserializeAws_restJson1SelectParameters(data.SelectParameters, context);
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

const deserializeAws_restJson1DescribeJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1DescribeVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVaultCommandError(output, context);
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

const deserializeAws_restJson1DescribeVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy != null) {
    contents.Policy = deserializeAws_restJson1DataRetrievalPolicy(data.Policy, context);
  }
  return contents;
};

const deserializeAws_restJson1GetDataRetrievalPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetJobOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext & __SdkStreamSerdeContext
): Promise<GetJobOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobOutputCommandError(output, context);
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

const deserializeAws_restJson1GetJobOutputCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.policy = deserializeAws_restJson1VaultAccessPolicy(data, context);
  return contents;
};

const deserializeAws_restJson1GetVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultLockCommandError(output, context);
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

const deserializeAws_restJson1GetVaultLockCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1GetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> | undefined = __expectObject(await parseBody(output.body, context));
  contents.vaultNotificationConfig = deserializeAws_restJson1VaultNotificationConfig(data, context);
  return contents;
};

const deserializeAws_restJson1GetVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InitiateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateJobCommandError(output, context);
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

const deserializeAws_restJson1InitiateJobCommandError = async (
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
      throw await deserializeAws_restJson1InsufficientCapacityExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "PolicyEnforcedException":
    case "com.amazonaws.glacier#PolicyEnforcedException":
      throw await deserializeAws_restJson1PolicyEnforcedExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InitiateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateMultipartUploadCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    location: [, output.headers["location"]],
    uploadId: [, output.headers["x-amz-multipart-upload-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1InitiateMultipartUploadCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1InitiateVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateVaultLockCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    lockId: [, output.headers["x-amz-lock-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1InitiateVaultLockCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobList != null) {
    contents.JobList = deserializeAws_restJson1JobList(data.JobList, context);
  }
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  return contents;
};

const deserializeAws_restJson1ListJobsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMultipartUploadsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.UploadsList != null) {
    contents.UploadsList = deserializeAws_restJson1UploadsList(data.UploadsList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListMultipartUploadsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPartsCommandError(output, context);
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
    contents.Parts = deserializeAws_restJson1PartList(data.Parts, context);
  }
  if (data.VaultARN != null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
  return contents;
};

const deserializeAws_restJson1ListPartsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProvisionedCapacityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProvisionedCapacityList != null) {
    contents.ProvisionedCapacityList = deserializeAws_restJson1ProvisionedCapacityList(
      data.ProvisionedCapacityList,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1ListProvisionedCapacityCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListTagsForVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsForVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1ListVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVaultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker != null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.VaultList != null) {
    contents.VaultList = deserializeAws_restJson1VaultList(data.VaultList, context);
  }
  return contents;
};

const deserializeAws_restJson1ListVaultsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1PurchaseProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseProvisionedCapacityCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    capacityId: [, output.headers["x-amz-capacity-id"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PurchaseProvisionedCapacityCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1RemoveTagsFromVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveTagsFromVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1RemoveTagsFromVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1SetDataRetrievalPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1SetVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1SetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1SetVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UploadArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UploadArchiveCommandError(output, context);
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

const deserializeAws_restJson1UploadArchiveCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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

export const deserializeAws_restJson1UploadMultipartPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UploadMultipartPartCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
    checksum: [, output.headers["x-amz-sha256-tree-hash"]],
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UploadMultipartPartCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      throw await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      throw await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context);
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
const deserializeAws_restJson1InsufficientCapacityExceptionResponse = async (
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

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1MissingParameterValueExceptionResponse = async (
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

const deserializeAws_restJson1PolicyEnforcedExceptionResponse = async (
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

const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const serializeAws_restJson1AccessControlPolicyList = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Grant(entry, context);
    });
};

const serializeAws_restJson1CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  return {
    ...(input.Comments != null && { Comments: input.Comments }),
    ...(input.FieldDelimiter != null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.FileHeaderInfo != null && { FileHeaderInfo: input.FileHeaderInfo }),
    ...(input.QuoteCharacter != null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter != null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.RecordDelimiter != null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

const serializeAws_restJson1CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  return {
    ...(input.FieldDelimiter != null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.QuoteCharacter != null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter != null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.QuoteFields != null && { QuoteFields: input.QuoteFields }),
    ...(input.RecordDelimiter != null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

const serializeAws_restJson1DataRetrievalPolicy = (input: DataRetrievalPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Rules != null && { Rules: serializeAws_restJson1DataRetrievalRulesList(input.Rules, context) }),
  };
};

const serializeAws_restJson1DataRetrievalRule = (input: DataRetrievalRule, context: __SerdeContext): any => {
  return {
    ...(input.BytesPerHour != null && { BytesPerHour: input.BytesPerHour }),
    ...(input.Strategy != null && { Strategy: input.Strategy }),
  };
};

const serializeAws_restJson1DataRetrievalRulesList = (input: DataRetrievalRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1DataRetrievalRule(entry, context);
    });
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType != null && { EncryptionType: input.EncryptionType }),
    ...(input.KMSContext != null && { KMSContext: input.KMSContext }),
    ...(input.KMSKeyId != null && { KMSKeyId: input.KMSKeyId }),
  };
};

const serializeAws_restJson1Grant = (input: Grant, context: __SerdeContext): any => {
  return {
    ...(input.Grantee != null && { Grantee: serializeAws_restJson1Grantee(input.Grantee, context) }),
    ...(input.Permission != null && { Permission: input.Permission }),
  };
};

const serializeAws_restJson1Grantee = (input: Grantee, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName != null && { DisplayName: input.DisplayName }),
    ...(input.EmailAddress != null && { EmailAddress: input.EmailAddress }),
    ...(input.ID != null && { ID: input.ID }),
    ...(input.Type != null && { Type: input.Type }),
    ...(input.URI != null && { URI: input.URI }),
  };
};

const serializeAws_restJson1hashmap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1InputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv != null && { csv: serializeAws_restJson1CSVInput(input.csv, context) }),
  };
};

const serializeAws_restJson1InventoryRetrievalJobInput = (
  input: InventoryRetrievalJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndDate != null && { EndDate: input.EndDate }),
    ...(input.Limit != null && { Limit: input.Limit }),
    ...(input.Marker != null && { Marker: input.Marker }),
    ...(input.StartDate != null && { StartDate: input.StartDate }),
  };
};

const serializeAws_restJson1JobParameters = (input: JobParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveId != null && { ArchiveId: input.ArchiveId }),
    ...(input.Description != null && { Description: input.Description }),
    ...(input.Format != null && { Format: input.Format }),
    ...(input.InventoryRetrievalParameters != null && {
      InventoryRetrievalParameters: serializeAws_restJson1InventoryRetrievalJobInput(
        input.InventoryRetrievalParameters,
        context
      ),
    }),
    ...(input.OutputLocation != null && {
      OutputLocation: serializeAws_restJson1OutputLocation(input.OutputLocation, context),
    }),
    ...(input.RetrievalByteRange != null && { RetrievalByteRange: input.RetrievalByteRange }),
    ...(input.SNSTopic != null && { SNSTopic: input.SNSTopic }),
    ...(input.SelectParameters != null && {
      SelectParameters: serializeAws_restJson1SelectParameters(input.SelectParameters, context),
    }),
    ...(input.Tier != null && { Tier: input.Tier }),
    ...(input.Type != null && { Type: input.Type }),
  };
};

const serializeAws_restJson1NotificationEventList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3 != null && { S3: serializeAws_restJson1S3Location(input.S3, context) }),
  };
};

const serializeAws_restJson1OutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv != null && { csv: serializeAws_restJson1CSVOutput(input.csv, context) }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList != null && {
      AccessControlList: serializeAws_restJson1AccessControlPolicyList(input.AccessControlList, context),
    }),
    ...(input.BucketName != null && { BucketName: input.BucketName }),
    ...(input.CannedACL != null && { CannedACL: input.CannedACL }),
    ...(input.Encryption != null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Prefix != null && { Prefix: input.Prefix }),
    ...(input.StorageClass != null && { StorageClass: input.StorageClass }),
    ...(input.Tagging != null && { Tagging: serializeAws_restJson1hashmap(input.Tagging, context) }),
    ...(input.UserMetadata != null && { UserMetadata: serializeAws_restJson1hashmap(input.UserMetadata, context) }),
  };
};

const serializeAws_restJson1SelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  return {
    ...(input.Expression != null && { Expression: input.Expression }),
    ...(input.ExpressionType != null && { ExpressionType: input.ExpressionType }),
    ...(input.InputSerialization != null && {
      InputSerialization: serializeAws_restJson1InputSerialization(input.InputSerialization, context),
    }),
    ...(input.OutputSerialization != null && {
      OutputSerialization: serializeAws_restJson1OutputSerialization(input.OutputSerialization, context),
    }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1VaultAccessPolicy = (input: VaultAccessPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

const serializeAws_restJson1VaultLockPolicy = (input: VaultLockPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy != null && { Policy: input.Policy }),
  };
};

const serializeAws_restJson1VaultNotificationConfig = (
  input: VaultNotificationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Events != null && { Events: serializeAws_restJson1NotificationEventList(input.Events, context) }),
    ...(input.SNSTopic != null && { SNSTopic: input.SNSTopic }),
  };
};

const deserializeAws_restJson1AccessControlPolicyList = (output: any, context: __SerdeContext): Grant[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Grant(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CSVInput = (output: any, context: __SerdeContext): CSVInput => {
  return {
    Comments: __expectString(output.Comments),
    FieldDelimiter: __expectString(output.FieldDelimiter),
    FileHeaderInfo: __expectString(output.FileHeaderInfo),
    QuoteCharacter: __expectString(output.QuoteCharacter),
    QuoteEscapeCharacter: __expectString(output.QuoteEscapeCharacter),
    RecordDelimiter: __expectString(output.RecordDelimiter),
  } as any;
};

const deserializeAws_restJson1CSVOutput = (output: any, context: __SerdeContext): CSVOutput => {
  return {
    FieldDelimiter: __expectString(output.FieldDelimiter),
    QuoteCharacter: __expectString(output.QuoteCharacter),
    QuoteEscapeCharacter: __expectString(output.QuoteEscapeCharacter),
    QuoteFields: __expectString(output.QuoteFields),
    RecordDelimiter: __expectString(output.RecordDelimiter),
  } as any;
};

const deserializeAws_restJson1DataRetrievalPolicy = (output: any, context: __SerdeContext): DataRetrievalPolicy => {
  return {
    Rules: output.Rules != null ? deserializeAws_restJson1DataRetrievalRulesList(output.Rules, context) : undefined,
  } as any;
};

const deserializeAws_restJson1DataRetrievalRule = (output: any, context: __SerdeContext): DataRetrievalRule => {
  return {
    BytesPerHour: __expectLong(output.BytesPerHour),
    Strategy: __expectString(output.Strategy),
  } as any;
};

const deserializeAws_restJson1DataRetrievalRulesList = (output: any, context: __SerdeContext): DataRetrievalRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataRetrievalRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DescribeVaultOutput = (output: any, context: __SerdeContext): DescribeVaultOutput => {
  return {
    CreationDate: __expectString(output.CreationDate),
    LastInventoryDate: __expectString(output.LastInventoryDate),
    NumberOfArchives: __expectLong(output.NumberOfArchives),
    SizeInBytes: __expectLong(output.SizeInBytes),
    VaultARN: __expectString(output.VaultARN),
    VaultName: __expectString(output.VaultName),
  } as any;
};

const deserializeAws_restJson1Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    EncryptionType: __expectString(output.EncryptionType),
    KMSContext: __expectString(output.KMSContext),
    KMSKeyId: __expectString(output.KMSKeyId),
  } as any;
};

const deserializeAws_restJson1GlacierJobDescription = (output: any, context: __SerdeContext): GlacierJobDescription => {
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
        ? deserializeAws_restJson1InventoryRetrievalJobDescription(output.InventoryRetrievalParameters, context)
        : undefined,
    InventorySizeInBytes: __expectLong(output.InventorySizeInBytes),
    JobDescription: __expectString(output.JobDescription),
    JobId: __expectString(output.JobId),
    JobOutputPath: __expectString(output.JobOutputPath),
    OutputLocation:
      output.OutputLocation != null
        ? deserializeAws_restJson1OutputLocation(output.OutputLocation, context)
        : undefined,
    RetrievalByteRange: __expectString(output.RetrievalByteRange),
    SHA256TreeHash: __expectString(output.SHA256TreeHash),
    SNSTopic: __expectString(output.SNSTopic),
    SelectParameters:
      output.SelectParameters != null
        ? deserializeAws_restJson1SelectParameters(output.SelectParameters, context)
        : undefined,
    StatusCode: __expectString(output.StatusCode),
    StatusMessage: __expectString(output.StatusMessage),
    Tier: __expectString(output.Tier),
    VaultARN: __expectString(output.VaultARN),
  } as any;
};

const deserializeAws_restJson1Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    Grantee: output.Grantee != null ? deserializeAws_restJson1Grantee(output.Grantee, context) : undefined,
    Permission: __expectString(output.Permission),
  } as any;
};

const deserializeAws_restJson1Grantee = (output: any, context: __SerdeContext): Grantee => {
  return {
    DisplayName: __expectString(output.DisplayName),
    EmailAddress: __expectString(output.EmailAddress),
    ID: __expectString(output.ID),
    Type: __expectString(output.Type),
    URI: __expectString(output.URI),
  } as any;
};

const deserializeAws_restJson1hashmap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1InputSerialization = (output: any, context: __SerdeContext): InputSerialization => {
  return {
    csv: output.csv != null ? deserializeAws_restJson1CSVInput(output.csv, context) : undefined,
  } as any;
};

const deserializeAws_restJson1InventoryRetrievalJobDescription = (
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

const deserializeAws_restJson1JobList = (output: any, context: __SerdeContext): GlacierJobDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GlacierJobDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1NotificationEventList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    S3: output.S3 != null ? deserializeAws_restJson1S3Location(output.S3, context) : undefined,
  } as any;
};

const deserializeAws_restJson1OutputSerialization = (output: any, context: __SerdeContext): OutputSerialization => {
  return {
    csv: output.csv != null ? deserializeAws_restJson1CSVOutput(output.csv, context) : undefined,
  } as any;
};

const deserializeAws_restJson1PartList = (output: any, context: __SerdeContext): PartListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PartListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1PartListElement = (output: any, context: __SerdeContext): PartListElement => {
  return {
    RangeInBytes: __expectString(output.RangeInBytes),
    SHA256TreeHash: __expectString(output.SHA256TreeHash),
  } as any;
};

const deserializeAws_restJson1ProvisionedCapacityDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription => {
  return {
    CapacityId: __expectString(output.CapacityId),
    ExpirationDate: __expectString(output.ExpirationDate),
    StartDate: __expectString(output.StartDate),
  } as any;
};

const deserializeAws_restJson1ProvisionedCapacityList = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProvisionedCapacityDescription(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    AccessControlList:
      output.AccessControlList != null
        ? deserializeAws_restJson1AccessControlPolicyList(output.AccessControlList, context)
        : undefined,
    BucketName: __expectString(output.BucketName),
    CannedACL: __expectString(output.CannedACL),
    Encryption: output.Encryption != null ? deserializeAws_restJson1Encryption(output.Encryption, context) : undefined,
    Prefix: __expectString(output.Prefix),
    StorageClass: __expectString(output.StorageClass),
    Tagging: output.Tagging != null ? deserializeAws_restJson1hashmap(output.Tagging, context) : undefined,
    UserMetadata:
      output.UserMetadata != null ? deserializeAws_restJson1hashmap(output.UserMetadata, context) : undefined,
  } as any;
};

const deserializeAws_restJson1SelectParameters = (output: any, context: __SerdeContext): SelectParameters => {
  return {
    Expression: __expectString(output.Expression),
    ExpressionType: __expectString(output.ExpressionType),
    InputSerialization:
      output.InputSerialization != null
        ? deserializeAws_restJson1InputSerialization(output.InputSerialization, context)
        : undefined,
    OutputSerialization:
      output.OutputSerialization != null
        ? deserializeAws_restJson1OutputSerialization(output.OutputSerialization, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1UploadListElement = (output: any, context: __SerdeContext): UploadListElement => {
  return {
    ArchiveDescription: __expectString(output.ArchiveDescription),
    CreationDate: __expectString(output.CreationDate),
    MultipartUploadId: __expectString(output.MultipartUploadId),
    PartSizeInBytes: __expectLong(output.PartSizeInBytes),
    VaultARN: __expectString(output.VaultARN),
  } as any;
};

const deserializeAws_restJson1UploadsList = (output: any, context: __SerdeContext): UploadListElement[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UploadListElement(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VaultAccessPolicy = (output: any, context: __SerdeContext): VaultAccessPolicy => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_restJson1VaultList = (output: any, context: __SerdeContext): DescribeVaultOutput[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DescribeVaultOutput(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1VaultNotificationConfig = (
  output: any,
  context: __SerdeContext
): VaultNotificationConfig => {
  return {
    Events: output.Events != null ? deserializeAws_restJson1NotificationEventList(output.Events, context) : undefined,
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
