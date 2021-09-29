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
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
  SmithyException as __SmithyException,
} from "@aws-sdk/types";

export const serializeAws_restJson1AbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    operation: "add",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1TagMap(input.Tags, context) }),
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.archiveSize) && { "x-amz-archive-size": input.archiveSize! }),
    ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.lockId !== undefined) {
    const labelValue: string = input.lockId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: lockId.");
    }
    resolvedPath = resolvedPath.replace("{lockId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: lockId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.archiveId !== undefined) {
    const labelValue: string = input.archiveId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: archiveId.");
    }
    resolvedPath = resolvedPath.replace("{archiveId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: archiveId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.range) && { range: input.range! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace("{jobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  const headers: any = {
    ...(isSerializableHeaderValue(input.archiveDescription) && {
      "x-amz-archive-description": input.archiveDescription!,
    }),
    ...(isSerializableHeaderValue(input.partSize) && { "x-amz-part-size": input.partSize! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.statuscode !== undefined && { statuscode: input.statuscode }),
    ...(input.completed !== undefined && { completed: input.completed }),
  };
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.marker !== undefined && { marker: input.marker }),
  };
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
  const query: any = {
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  const query: any = {
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
  };
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    operation: "remove",
  };
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined &&
      input.TagKeys !== null && { TagKeys: serializeAws_restJson1TagKeyList(input.TagKeys, context) }),
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Policy !== undefined &&
      input.Policy !== null && { Policy: serializeAws_restJson1DataRetrievalPolicy(input.Policy, context) }),
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
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
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.archiveDescription) && {
      "x-amz-archive-description": input.archiveDescription!,
    }),
    ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/{accountId}/vaults/{vaultName}/archives";
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
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
  const headers: any = {
    "content-type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.checksum) && { "x-amz-sha256-tree-hash": input.checksum! }),
    ...(isSerializableHeaderValue(input.range) && { "content-range": input.range! }),
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace("{vaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace("{uploadId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
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
  const contents: AbortMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AbortVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AbortVaultLockCommandError(output, context);
  }
  const contents: AbortVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AbortVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1AddTagsToVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1AddTagsToVaultCommandError(output, context);
  }
  const contents: AddTagsToVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1AddTagsToVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CompleteMultipartUploadCommandError(output, context);
  }
  const contents: CompleteMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    archiveId: undefined,
    checksum: undefined,
    location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["x-amz-archive-id"] !== undefined) {
    contents.archiveId = output.headers["x-amz-archive-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CompleteVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1CompleteVaultLockCommandError(output, context);
  }
  const contents: CompleteVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CompleteVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1CreateVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateVaultCommandError(output, context);
  }
  const contents: CreateVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteArchiveCommandError(output, context);
  }
  const contents: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultCommandError(output, context);
  }
  const contents: DeleteVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultAccessPolicyCommandError(output, context);
  }
  const contents: DeleteVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DeleteVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteVaultNotificationsCommandError(output, context);
  }
  const contents: DeleteVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeJobCommandError(output, context);
  }
  const contents: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    Action: undefined,
    ArchiveId: undefined,
    ArchiveSHA256TreeHash: undefined,
    ArchiveSizeInBytes: undefined,
    Completed: undefined,
    CompletionDate: undefined,
    CreationDate: undefined,
    InventoryRetrievalParameters: undefined,
    InventorySizeInBytes: undefined,
    JobDescription: undefined,
    JobId: undefined,
    JobOutputPath: undefined,
    OutputLocation: undefined,
    RetrievalByteRange: undefined,
    SHA256TreeHash: undefined,
    SNSTopic: undefined,
    SelectParameters: undefined,
    StatusCode: undefined,
    StatusMessage: undefined,
    Tier: undefined,
    VaultARN: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Action !== undefined && data.Action !== null) {
    contents.Action = __expectString(data.Action);
  }
  if (data.ArchiveId !== undefined && data.ArchiveId !== null) {
    contents.ArchiveId = __expectString(data.ArchiveId);
  }
  if (data.ArchiveSHA256TreeHash !== undefined && data.ArchiveSHA256TreeHash !== null) {
    contents.ArchiveSHA256TreeHash = __expectString(data.ArchiveSHA256TreeHash);
  }
  if (data.ArchiveSizeInBytes !== undefined && data.ArchiveSizeInBytes !== null) {
    contents.ArchiveSizeInBytes = __expectLong(data.ArchiveSizeInBytes);
  }
  if (data.Completed !== undefined && data.Completed !== null) {
    contents.Completed = __expectBoolean(data.Completed);
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = __expectString(data.CompletionDate);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.InventoryRetrievalParameters !== undefined && data.InventoryRetrievalParameters !== null) {
    contents.InventoryRetrievalParameters = deserializeAws_restJson1InventoryRetrievalJobDescription(
      data.InventoryRetrievalParameters,
      context
    );
  }
  if (data.InventorySizeInBytes !== undefined && data.InventorySizeInBytes !== null) {
    contents.InventorySizeInBytes = __expectLong(data.InventorySizeInBytes);
  }
  if (data.JobDescription !== undefined && data.JobDescription !== null) {
    contents.JobDescription = __expectString(data.JobDescription);
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = __expectString(data.JobId);
  }
  if (data.JobOutputPath !== undefined && data.JobOutputPath !== null) {
    contents.JobOutputPath = __expectString(data.JobOutputPath);
  }
  if (data.OutputLocation !== undefined && data.OutputLocation !== null) {
    contents.OutputLocation = deserializeAws_restJson1OutputLocation(data.OutputLocation, context);
  }
  if (data.RetrievalByteRange !== undefined && data.RetrievalByteRange !== null) {
    contents.RetrievalByteRange = __expectString(data.RetrievalByteRange);
  }
  if (data.SHA256TreeHash !== undefined && data.SHA256TreeHash !== null) {
    contents.SHA256TreeHash = __expectString(data.SHA256TreeHash);
  }
  if (data.SNSTopic !== undefined && data.SNSTopic !== null) {
    contents.SNSTopic = __expectString(data.SNSTopic);
  }
  if (data.SelectParameters !== undefined && data.SelectParameters !== null) {
    contents.SelectParameters = deserializeAws_restJson1SelectParameters(data.SelectParameters, context);
  }
  if (data.StatusCode !== undefined && data.StatusCode !== null) {
    contents.StatusCode = __expectString(data.StatusCode);
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  if (data.Tier !== undefined && data.Tier !== null) {
    contents.Tier = __expectString(data.Tier);
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1DescribeVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeVaultCommandError(output, context);
  }
  const contents: DescribeVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreationDate: undefined,
    LastInventoryDate: undefined,
    NumberOfArchives: undefined,
    SizeInBytes: undefined,
    VaultARN: undefined,
    VaultName: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.LastInventoryDate !== undefined && data.LastInventoryDate !== null) {
    contents.LastInventoryDate = __expectString(data.LastInventoryDate);
  }
  if (data.NumberOfArchives !== undefined && data.NumberOfArchives !== null) {
    contents.NumberOfArchives = __expectLong(data.NumberOfArchives);
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = __expectLong(data.SizeInBytes);
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
  if (data.VaultName !== undefined && data.VaultName !== null) {
    contents.VaultName = __expectString(data.VaultName);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: GetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    Policy: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = deserializeAws_restJson1DataRetrievalPolicy(data.Policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetJobOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetJobOutputCommandError(output, context);
  }
  const contents: GetJobOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    acceptRanges: undefined,
    archiveDescription: undefined,
    body: undefined,
    checksum: undefined,
    contentRange: undefined,
    contentType: undefined,
    status: undefined,
  };
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["content-range"] !== undefined) {
    contents.contentRange = output.headers["content-range"];
  }
  if (output.headers["accept-ranges"] !== undefined) {
    contents.acceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  if (output.headers["x-amz-archive-description"] !== undefined) {
    contents.archiveDescription = output.headers["x-amz-archive-description"];
  }
  const data: any = output.body;
  contents.body = data;
  if (contents.status === undefined) {
    contents.status = output.statusCode;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetJobOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultAccessPolicyCommandError(output, context);
  }
  const contents: GetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    policy: undefined,
  };
  const data: { [key: string]: any } | undefined = __expectObject(await parseBody(output.body, context));
  contents.policy = deserializeAws_restJson1VaultAccessPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultLockCommandError(output, context);
  }
  const contents: GetVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    CreationDate: undefined,
    ExpirationDate: undefined,
    Policy: undefined,
    State: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.ExpirationDate !== undefined && data.ExpirationDate !== null) {
    contents.ExpirationDate = __expectString(data.ExpirationDate);
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1GetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetVaultNotificationsCommandError(output, context);
  }
  const contents: GetVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    vaultNotificationConfig: undefined,
  };
  const data: { [key: string]: any } | undefined = __expectObject(await parseBody(output.body, context));
  contents.vaultNotificationConfig = deserializeAws_restJson1VaultNotificationConfig(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InitiateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateJobCommandError(output, context);
  }
  const contents: InitiateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    jobId: undefined,
    jobOutputPath: undefined,
    location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  if (output.headers["x-amz-job-id"] !== undefined) {
    contents.jobId = output.headers["x-amz-job-id"];
  }
  if (output.headers["x-amz-job-output-path"] !== undefined) {
    contents.jobOutputPath = output.headers["x-amz-job-output-path"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InitiateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.glacier#InsufficientCapacityException":
      response = {
        ...(await deserializeAws_restJson1InsufficientCapacityExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "PolicyEnforcedException":
    case "com.amazonaws.glacier#PolicyEnforcedException":
      response = {
        ...(await deserializeAws_restJson1PolicyEnforcedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InitiateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateMultipartUploadCommandError(output, context);
  }
  const contents: InitiateMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    location: undefined,
    uploadId: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  if (output.headers["x-amz-multipart-upload-id"] !== undefined) {
    contents.uploadId = output.headers["x-amz-multipart-upload-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InitiateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1InitiateVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1InitiateVaultLockCommandError(output, context);
  }
  const contents: InitiateVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    lockId: undefined,
  };
  if (output.headers["x-amz-lock-id"] !== undefined) {
    contents.lockId = output.headers["x-amz-lock-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1InitiateVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    JobList: undefined,
    Marker: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.JobList !== undefined && data.JobList !== null) {
    contents.JobList = deserializeAws_restJson1JobList(data.JobList, context);
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListMultipartUploadsCommandError(output, context);
  }
  const contents: ListMultipartUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Marker: undefined,
    UploadsList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.UploadsList !== undefined && data.UploadsList !== null) {
    contents.UploadsList = deserializeAws_restJson1UploadsList(data.UploadsList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListPartsCommandError(output, context);
  }
  const contents: ListPartsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ArchiveDescription: undefined,
    CreationDate: undefined,
    Marker: undefined,
    MultipartUploadId: undefined,
    PartSizeInBytes: undefined,
    Parts: undefined,
    VaultARN: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ArchiveDescription !== undefined && data.ArchiveDescription !== null) {
    contents.ArchiveDescription = __expectString(data.ArchiveDescription);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = __expectString(data.CreationDate);
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.MultipartUploadId !== undefined && data.MultipartUploadId !== null) {
    contents.MultipartUploadId = __expectString(data.MultipartUploadId);
  }
  if (data.PartSizeInBytes !== undefined && data.PartSizeInBytes !== null) {
    contents.PartSizeInBytes = __expectLong(data.PartSizeInBytes);
  }
  if (data.Parts !== undefined && data.Parts !== null) {
    contents.Parts = deserializeAws_restJson1PartList(data.Parts, context);
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = __expectString(data.VaultARN);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProvisionedCapacityCommandError(output, context);
  }
  const contents: ListProvisionedCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    ProvisionedCapacityList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ProvisionedCapacityList !== undefined && data.ProvisionedCapacityList !== null) {
    contents.ProvisionedCapacityList = deserializeAws_restJson1ProvisionedCapacityList(
      data.ProvisionedCapacityList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListTagsForVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsForVaultCommandError(output, context);
  }
  const contents: ListTagsForVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    Tags: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsForVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1ListVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListVaultsCommandError(output, context);
  }
  const contents: ListVaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    Marker: undefined,
    VaultList: undefined,
  };
  const data: { [key: string]: any } = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = __expectString(data.Marker);
  }
  if (data.VaultList !== undefined && data.VaultList !== null) {
    contents.VaultList = deserializeAws_restJson1VaultList(data.VaultList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListVaultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1PurchaseProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1PurchaseProvisionedCapacityCommandError(output, context);
  }
  const contents: PurchaseProvisionedCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    capacityId: undefined,
  };
  if (output.headers["x-amz-capacity-id"] !== undefined) {
    contents.capacityId = output.headers["x-amz-capacity-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PurchaseProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1RemoveTagsFromVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1RemoveTagsFromVaultCommandError(output, context);
  }
  const contents: RemoveTagsFromVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1RemoveTagsFromVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: SetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetVaultAccessPolicyCommandError(output, context);
  }
  const contents: SetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1SetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1SetVaultNotificationsCommandError(output, context);
  }
  const contents: SetVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1SetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UploadArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1UploadArchiveCommandError(output, context);
  }
  const contents: UploadArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    archiveId: undefined,
    checksum: undefined,
    location: undefined,
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["x-amz-archive-id"] !== undefined) {
    contents.archiveId = output.headers["x-amz-archive-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UploadArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1UploadMultipartPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1UploadMultipartPartCommandError(output, context);
  }
  const contents: UploadMultipartPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    checksum: undefined,
  };
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UploadMultipartPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1ServiceUnavailableExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output),
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1InsufficientCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const contents: InsufficientCapacityException = {
    name: "InsufficientCapacityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1MissingParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingParameterValueException> => {
  const contents: MissingParameterValueException = {
    name: "MissingParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1PolicyEnforcedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyEnforcedException> => {
  const contents: PolicyEnforcedException = {
    name: "PolicyEnforcedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1RequestTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    name: "RequestTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = __expectString(data.code);
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = __expectString(data.message);
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = __expectString(data.type);
  }
  return contents;
};

const serializeAws_restJson1AccessControlPolicyList = (input: Grant[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Grant(entry, context);
    });
};

const serializeAws_restJson1CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  return {
    ...(input.Comments !== undefined && input.Comments !== null && { Comments: input.Comments }),
    ...(input.FieldDelimiter !== undefined &&
      input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.FileHeaderInfo !== undefined &&
      input.FileHeaderInfo !== null && { FileHeaderInfo: input.FileHeaderInfo }),
    ...(input.QuoteCharacter !== undefined &&
      input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter !== undefined &&
      input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.RecordDelimiter !== undefined &&
      input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

const serializeAws_restJson1CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  return {
    ...(input.FieldDelimiter !== undefined &&
      input.FieldDelimiter !== null && { FieldDelimiter: input.FieldDelimiter }),
    ...(input.QuoteCharacter !== undefined &&
      input.QuoteCharacter !== null && { QuoteCharacter: input.QuoteCharacter }),
    ...(input.QuoteEscapeCharacter !== undefined &&
      input.QuoteEscapeCharacter !== null && { QuoteEscapeCharacter: input.QuoteEscapeCharacter }),
    ...(input.QuoteFields !== undefined && input.QuoteFields !== null && { QuoteFields: input.QuoteFields }),
    ...(input.RecordDelimiter !== undefined &&
      input.RecordDelimiter !== null && { RecordDelimiter: input.RecordDelimiter }),
  };
};

const serializeAws_restJson1DataRetrievalPolicy = (input: DataRetrievalPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1DataRetrievalRulesList(input.Rules, context) }),
  };
};

const serializeAws_restJson1DataRetrievalRule = (input: DataRetrievalRule, context: __SerdeContext): any => {
  return {
    ...(input.BytesPerHour !== undefined && input.BytesPerHour !== null && { BytesPerHour: input.BytesPerHour }),
    ...(input.Strategy !== undefined && input.Strategy !== null && { Strategy: input.Strategy }),
  };
};

const serializeAws_restJson1DataRetrievalRulesList = (input: DataRetrievalRule[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1DataRetrievalRule(entry, context);
    });
};

const serializeAws_restJson1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType !== undefined &&
      input.EncryptionType !== null && { EncryptionType: input.EncryptionType }),
    ...(input.KMSContext !== undefined && input.KMSContext !== null && { KMSContext: input.KMSContext }),
    ...(input.KMSKeyId !== undefined && input.KMSKeyId !== null && { KMSKeyId: input.KMSKeyId }),
  };
};

const serializeAws_restJson1Grant = (input: Grant, context: __SerdeContext): any => {
  return {
    ...(input.Grantee !== undefined &&
      input.Grantee !== null && { Grantee: serializeAws_restJson1Grantee(input.Grantee, context) }),
    ...(input.Permission !== undefined && input.Permission !== null && { Permission: input.Permission }),
  };
};

const serializeAws_restJson1Grantee = (input: Grantee, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName !== undefined && input.DisplayName !== null && { DisplayName: input.DisplayName }),
    ...(input.EmailAddress !== undefined && input.EmailAddress !== null && { EmailAddress: input.EmailAddress }),
    ...(input.ID !== undefined && input.ID !== null && { ID: input.ID }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
    ...(input.URI !== undefined && input.URI !== null && { URI: input.URI }),
  };
};

const serializeAws_restJson1hashmap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1InputSerialization = (input: InputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVInput(input.csv, context) }),
  };
};

const serializeAws_restJson1InventoryRetrievalJobInput = (
  input: InventoryRetrievalJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndDate !== undefined && input.EndDate !== null && { EndDate: input.EndDate }),
    ...(input.Limit !== undefined && input.Limit !== null && { Limit: input.Limit }),
    ...(input.Marker !== undefined && input.Marker !== null && { Marker: input.Marker }),
    ...(input.StartDate !== undefined && input.StartDate !== null && { StartDate: input.StartDate }),
  };
};

const serializeAws_restJson1JobParameters = (input: JobParameters, context: __SerdeContext): any => {
  return {
    ...(input.ArchiveId !== undefined && input.ArchiveId !== null && { ArchiveId: input.ArchiveId }),
    ...(input.Description !== undefined && input.Description !== null && { Description: input.Description }),
    ...(input.Format !== undefined && input.Format !== null && { Format: input.Format }),
    ...(input.InventoryRetrievalParameters !== undefined &&
      input.InventoryRetrievalParameters !== null && {
        InventoryRetrievalParameters: serializeAws_restJson1InventoryRetrievalJobInput(
          input.InventoryRetrievalParameters,
          context
        ),
      }),
    ...(input.OutputLocation !== undefined &&
      input.OutputLocation !== null && {
        OutputLocation: serializeAws_restJson1OutputLocation(input.OutputLocation, context),
      }),
    ...(input.RetrievalByteRange !== undefined &&
      input.RetrievalByteRange !== null && { RetrievalByteRange: input.RetrievalByteRange }),
    ...(input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic }),
    ...(input.SelectParameters !== undefined &&
      input.SelectParameters !== null && {
        SelectParameters: serializeAws_restJson1SelectParameters(input.SelectParameters, context),
      }),
    ...(input.Tier !== undefined && input.Tier !== null && { Tier: input.Tier }),
    ...(input.Type !== undefined && input.Type !== null && { Type: input.Type }),
  };
};

const serializeAws_restJson1NotificationEventList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1OutputLocation = (input: OutputLocation, context: __SerdeContext): any => {
  return {
    ...(input.S3 !== undefined && input.S3 !== null && { S3: serializeAws_restJson1S3Location(input.S3, context) }),
  };
};

const serializeAws_restJson1OutputSerialization = (input: OutputSerialization, context: __SerdeContext): any => {
  return {
    ...(input.csv !== undefined && input.csv !== null && { csv: serializeAws_restJson1CSVOutput(input.csv, context) }),
  };
};

const serializeAws_restJson1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList !== undefined &&
      input.AccessControlList !== null && {
        AccessControlList: serializeAws_restJson1AccessControlPolicyList(input.AccessControlList, context),
      }),
    ...(input.BucketName !== undefined && input.BucketName !== null && { BucketName: input.BucketName }),
    ...(input.CannedACL !== undefined && input.CannedACL !== null && { CannedACL: input.CannedACL }),
    ...(input.Encryption !== undefined &&
      input.Encryption !== null && { Encryption: serializeAws_restJson1Encryption(input.Encryption, context) }),
    ...(input.Prefix !== undefined && input.Prefix !== null && { Prefix: input.Prefix }),
    ...(input.StorageClass !== undefined && input.StorageClass !== null && { StorageClass: input.StorageClass }),
    ...(input.Tagging !== undefined &&
      input.Tagging !== null && { Tagging: serializeAws_restJson1hashmap(input.Tagging, context) }),
    ...(input.UserMetadata !== undefined &&
      input.UserMetadata !== null && { UserMetadata: serializeAws_restJson1hashmap(input.UserMetadata, context) }),
  };
};

const serializeAws_restJson1SelectParameters = (input: SelectParameters, context: __SerdeContext): any => {
  return {
    ...(input.Expression !== undefined && input.Expression !== null && { Expression: input.Expression }),
    ...(input.ExpressionType !== undefined &&
      input.ExpressionType !== null && { ExpressionType: input.ExpressionType }),
    ...(input.InputSerialization !== undefined &&
      input.InputSerialization !== null && {
        InputSerialization: serializeAws_restJson1InputSerialization(input.InputSerialization, context),
      }),
    ...(input.OutputSerialization !== undefined &&
      input.OutputSerialization !== null && {
        OutputSerialization: serializeAws_restJson1OutputSerialization(input.OutputSerialization, context),
      }),
  };
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1TagMap = (input: { [key: string]: string }, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: { [key: string]: any }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: value,
    };
  }, {});
};

const serializeAws_restJson1VaultAccessPolicy = (input: VaultAccessPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
  };
};

const serializeAws_restJson1VaultLockPolicy = (input: VaultLockPolicy, context: __SerdeContext): any => {
  return {
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
  };
};

const serializeAws_restJson1VaultNotificationConfig = (
  input: VaultNotificationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Events !== undefined &&
      input.Events !== null && { Events: serializeAws_restJson1NotificationEventList(input.Events, context) }),
    ...(input.SNSTopic !== undefined && input.SNSTopic !== null && { SNSTopic: input.SNSTopic }),
  };
};

const deserializeAws_restJson1AccessControlPolicyList = (output: any, context: __SerdeContext): Grant[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Grant(entry, context);
    });
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
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1DataRetrievalRulesList(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1DataRetrievalRule = (output: any, context: __SerdeContext): DataRetrievalRule => {
  return {
    BytesPerHour: __expectLong(output.BytesPerHour),
    Strategy: __expectString(output.Strategy),
  } as any;
};

const deserializeAws_restJson1DataRetrievalRulesList = (output: any, context: __SerdeContext): DataRetrievalRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DataRetrievalRule(entry, context);
    });
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
      output.InventoryRetrievalParameters !== undefined && output.InventoryRetrievalParameters !== null
        ? deserializeAws_restJson1InventoryRetrievalJobDescription(output.InventoryRetrievalParameters, context)
        : undefined,
    InventorySizeInBytes: __expectLong(output.InventorySizeInBytes),
    JobDescription: __expectString(output.JobDescription),
    JobId: __expectString(output.JobId),
    JobOutputPath: __expectString(output.JobOutputPath),
    OutputLocation:
      output.OutputLocation !== undefined && output.OutputLocation !== null
        ? deserializeAws_restJson1OutputLocation(output.OutputLocation, context)
        : undefined,
    RetrievalByteRange: __expectString(output.RetrievalByteRange),
    SHA256TreeHash: __expectString(output.SHA256TreeHash),
    SNSTopic: __expectString(output.SNSTopic),
    SelectParameters:
      output.SelectParameters !== undefined && output.SelectParameters !== null
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
    Grantee:
      output.Grantee !== undefined && output.Grantee !== null
        ? deserializeAws_restJson1Grantee(output.Grantee, context)
        : undefined,
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

const deserializeAws_restJson1hashmap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1InputSerialization = (output: any, context: __SerdeContext): InputSerialization => {
  return {
    csv:
      output.csv !== undefined && output.csv !== null
        ? deserializeAws_restJson1CSVInput(output.csv, context)
        : undefined,
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1GlacierJobDescription(entry, context);
    });
};

const deserializeAws_restJson1NotificationEventList = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1OutputLocation = (output: any, context: __SerdeContext): OutputLocation => {
  return {
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1S3Location(output.S3, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1OutputSerialization = (output: any, context: __SerdeContext): OutputSerialization => {
  return {
    csv:
      output.csv !== undefined && output.csv !== null
        ? deserializeAws_restJson1CSVOutput(output.csv, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1PartList = (output: any, context: __SerdeContext): PartListElement[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1PartListElement(entry, context);
    });
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProvisionedCapacityDescription(entry, context);
    });
};

const deserializeAws_restJson1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    AccessControlList:
      output.AccessControlList !== undefined && output.AccessControlList !== null
        ? deserializeAws_restJson1AccessControlPolicyList(output.AccessControlList, context)
        : undefined,
    BucketName: __expectString(output.BucketName),
    CannedACL: __expectString(output.CannedACL),
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1Encryption(output.Encryption, context)
        : undefined,
    Prefix: __expectString(output.Prefix),
    StorageClass: __expectString(output.StorageClass),
    Tagging:
      output.Tagging !== undefined && output.Tagging !== null
        ? deserializeAws_restJson1hashmap(output.Tagging, context)
        : undefined,
    UserMetadata:
      output.UserMetadata !== undefined && output.UserMetadata !== null
        ? deserializeAws_restJson1hashmap(output.UserMetadata, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1SelectParameters = (output: any, context: __SerdeContext): SelectParameters => {
  return {
    Expression: __expectString(output.Expression),
    ExpressionType: __expectString(output.ExpressionType),
    InputSerialization:
      output.InputSerialization !== undefined && output.InputSerialization !== null
        ? deserializeAws_restJson1InputSerialization(output.InputSerialization, context)
        : undefined,
    OutputSerialization:
      output.OutputSerialization !== undefined && output.OutputSerialization !== null
        ? deserializeAws_restJson1OutputSerialization(output.OutputSerialization, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1TagMap = (output: any, context: __SerdeContext): { [key: string]: string } => {
  return Object.entries(output).reduce((acc: { [key: string]: string }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectString(value) as any,
    };
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
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1UploadListElement(entry, context);
    });
};

const deserializeAws_restJson1VaultAccessPolicy = (output: any, context: __SerdeContext): VaultAccessPolicy => {
  return {
    Policy: __expectString(output.Policy),
  } as any;
};

const deserializeAws_restJson1VaultList = (output: any, context: __SerdeContext): DescribeVaultOutput[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1DescribeVaultOutput(entry, context);
    });
};

const deserializeAws_restJson1VaultNotificationConfig = (
  output: any,
  context: __SerdeContext
): VaultNotificationConfig => {
  return {
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_restJson1NotificationEventList(output.Events, context)
        : undefined,
    SNSTopic: __expectString(output.SNSTopic),
  } as any;
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
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
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

  return "";
};
