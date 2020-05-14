import {
  AbortMultipartUploadCommandInput,
  AbortMultipartUploadCommandOutput
} from "../commands/AbortMultipartUploadCommand";
import {
  AbortVaultLockCommandInput,
  AbortVaultLockCommandOutput
} from "../commands/AbortVaultLockCommand";
import {
  AddTagsToVaultCommandInput,
  AddTagsToVaultCommandOutput
} from "../commands/AddTagsToVaultCommand";
import {
  CompleteMultipartUploadCommandInput,
  CompleteMultipartUploadCommandOutput
} from "../commands/CompleteMultipartUploadCommand";
import {
  CompleteVaultLockCommandInput,
  CompleteVaultLockCommandOutput
} from "../commands/CompleteVaultLockCommand";
import { CreateVaultCommandInput, CreateVaultCommandOutput } from "../commands/CreateVaultCommand";
import {
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput
} from "../commands/DeleteArchiveCommand";
import {
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput
} from "../commands/DeleteVaultAccessPolicyCommand";
import { DeleteVaultCommandInput, DeleteVaultCommandOutput } from "../commands/DeleteVaultCommand";
import {
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput
} from "../commands/DeleteVaultNotificationsCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "../commands/DescribeJobCommand";
import {
  DescribeVaultCommandInput,
  DescribeVaultCommandOutput
} from "../commands/DescribeVaultCommand";
import {
  GetDataRetrievalPolicyCommandInput,
  GetDataRetrievalPolicyCommandOutput
} from "../commands/GetDataRetrievalPolicyCommand";
import {
  GetJobOutputCommandInput,
  GetJobOutputCommandOutput
} from "../commands/GetJobOutputCommand";
import {
  GetVaultAccessPolicyCommandInput,
  GetVaultAccessPolicyCommandOutput
} from "../commands/GetVaultAccessPolicyCommand";
import {
  GetVaultLockCommandInput,
  GetVaultLockCommandOutput
} from "../commands/GetVaultLockCommand";
import {
  GetVaultNotificationsCommandInput,
  GetVaultNotificationsCommandOutput
} from "../commands/GetVaultNotificationsCommand";
import { InitiateJobCommandInput, InitiateJobCommandOutput } from "../commands/InitiateJobCommand";
import {
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput
} from "../commands/InitiateMultipartUploadCommand";
import {
  InitiateVaultLockCommandInput,
  InitiateVaultLockCommandOutput
} from "../commands/InitiateVaultLockCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "../commands/ListJobsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput
} from "../commands/ListMultipartUploadsCommand";
import { ListPartsCommandInput, ListPartsCommandOutput } from "../commands/ListPartsCommand";
import {
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput
} from "../commands/ListProvisionedCapacityCommand";
import {
  ListTagsForVaultCommandInput,
  ListTagsForVaultCommandOutput
} from "../commands/ListTagsForVaultCommand";
import { ListVaultsCommandInput, ListVaultsCommandOutput } from "../commands/ListVaultsCommand";
import {
  PurchaseProvisionedCapacityCommandInput,
  PurchaseProvisionedCapacityCommandOutput
} from "../commands/PurchaseProvisionedCapacityCommand";
import {
  RemoveTagsFromVaultCommandInput,
  RemoveTagsFromVaultCommandOutput
} from "../commands/RemoveTagsFromVaultCommand";
import {
  SetDataRetrievalPolicyCommandInput,
  SetDataRetrievalPolicyCommandOutput
} from "../commands/SetDataRetrievalPolicyCommand";
import {
  SetVaultAccessPolicyCommandInput,
  SetVaultAccessPolicyCommandOutput
} from "../commands/SetVaultAccessPolicyCommand";
import {
  SetVaultNotificationsCommandInput,
  SetVaultNotificationsCommandOutput
} from "../commands/SetVaultNotificationsCommand";
import {
  UploadArchiveCommandInput,
  UploadArchiveCommandOutput
} from "../commands/UploadArchiveCommand";
import {
  UploadMultipartPartCommandInput,
  UploadMultipartPartCommandOutput
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
  VaultNotificationConfig
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";

export const serializeAws_restJson1_1AbortMultipartUploadCommand = async (
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1AbortVaultLockCommand = async (
  input: AbortVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1AddTagsToVaultCommand = async (
  input: AddTagsToVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
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
    operation: "add"
  };
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && {
      Tags: serializeAws_restJson1_1TagMap(input.Tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1CompleteMultipartUploadCommand = async (
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.archiveSize) && {
      "x-amz-archive-size": input.archiveSize!
    }),
    ...(isSerializableHeaderValue(input.checksum) && {
      "x-amz-sha256-tree-hash": input.checksum!
    })
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CompleteVaultLockCommand = async (
  input: CompleteVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateVaultCommand = async (
  input: CreateVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteArchiveCommand = async (
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/archives/{archiveId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVaultCommand = async (
  input: DeleteVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVaultAccessPolicyCommand = async (
  input: DeleteVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVaultNotificationsCommand = async (
  input: DeleteVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeJobCommand = async (
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeVaultCommand = async (
  input: DescribeVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetDataRetrievalPolicyCommand = async (
  input: GetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/policies/data-retrieval";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetJobOutputCommand = async (
  input: GetJobOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.range) && { Range: input.range! })
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetVaultAccessPolicyCommand = async (
  input: GetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetVaultLockCommand = async (
  input: GetVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1GetVaultNotificationsCommand = async (
  input: GetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1InitiateJobCommand = async (
  input: InitiateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
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
    body = serializeAws_restJson1_1JobParameters(input.jobParameters, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1InitiateMultipartUploadCommand = async (
  input: InitiateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "",
    ...(isSerializableHeaderValue(input.archiveDescription) && {
      "x-amz-archive-description": input.archiveDescription!
    }),
    ...(isSerializableHeaderValue(input.partSize) && {
      "x-amz-part-size": input.partSize!
    })
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1InitiateVaultLockCommand = async (
  input: InitiateVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
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
    body = serializeAws_restJson1_1VaultLockPolicy(input.policy, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListJobsCommand = async (
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
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
    ...(input.completed !== undefined && { completed: input.completed }),
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.marker !== undefined && { marker: input.marker }),
    ...(input.statuscode !== undefined && { statuscode: input.statuscode })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListMultipartUploadsCommand = async (
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
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
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.marker !== undefined && { marker: input.marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListPartsCommand = async (
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.marker !== undefined && { marker: input.marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListProvisionedCapacityCommand = async (
  input: ListProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/provisioned-capacity";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForVaultCommand = async (
  input: ListTagsForVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListVaultsCommand = async (
  input: ListVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/vaults";
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
    ...(input.limit !== undefined && { limit: input.limit }),
    ...(input.marker !== undefined && { marker: input.marker })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1PurchaseProvisionedCapacityCommand = async (
  input: PurchaseProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/{accountId}/provisioned-capacity";
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
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1RemoveTagsFromVaultCommand = async (
  input: RemoveTagsFromVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
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
    operation: "remove"
  };
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeys !== undefined && {
      TagKeys: serializeAws_restJson1_1TagKeyList(input.TagKeys, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1SetDataRetrievalPolicyCommand = async (
  input: SetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/policies/data-retrieval";
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
    ...(input.Policy !== undefined && {
      Policy: serializeAws_restJson1_1DataRetrievalPolicy(input.Policy, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1SetVaultAccessPolicyCommand = async (
  input: SetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
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
    body = serializeAws_restJson1_1VaultAccessPolicy(input.policy, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1SetVaultNotificationsCommand = async (
  input: SetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/notification-configuration";
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
    body = serializeAws_restJson1_1VaultNotificationConfig(input.vaultNotificationConfig, context);
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UploadArchiveCommand = async (
  input: UploadArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.archiveDescription) && {
      "x-amz-archive-description": input.archiveDescription!
    }),
    ...(isSerializableHeaderValue(input.checksum) && {
      "x-amz-sha256-tree-hash": input.checksum!
    })
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/archives";
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
  if (input.body !== undefined) {
    body = input.body;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "POST",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UploadMultipartPartCommand = async (
  input: UploadMultipartPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/octet-stream",
    ...(isSerializableHeaderValue(input.checksum) && {
      "x-amz-sha256-tree-hash": input.checksum!
    }),
    ...(isSerializableHeaderValue(input.range) && {
      "Content-Range": input.range!
    })
  };
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace("{accountId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
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
  if (input.body !== undefined) {
    body = input.body;
  }
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1AbortMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AbortMultipartUploadCommandError(output, context);
  }
  const contents: AbortMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AbortMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1AbortVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AbortVaultLockCommandError(output, context);
  }
  const contents: AbortVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AbortVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1AddTagsToVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddTagsToVaultCommandError(output, context);
  }
  const contents: AddTagsToVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1AddTagsToVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CompleteMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CompleteMultipartUploadCommandError(output, context);
  }
  const contents: CompleteMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ArchiveCreationOutput",
    archiveId: undefined,
    checksum: undefined,
    location: undefined
  };
  if (output.headers["x-amz-archive-id"] !== undefined) {
    contents.archiveId = output.headers["x-amz-archive-id"];
  }
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CompleteMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CompleteVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CompleteVaultLockCommandError(output, context);
  }
  const contents: CompleteVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CompleteVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVaultCommandError(output, context);
  }
  const contents: CreateVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVaultOutput",
    location: undefined
  };
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteArchiveCommandError(output, context);
  }
  const contents: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultCommandError(output, context);
  }
  const contents: DeleteVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultAccessPolicyCommandError(output, context);
  }
  const contents: DeleteVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultNotificationsCommandError(output, context);
  }
  const contents: DeleteVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeJobCommandError(output, context);
  }
  const contents: DescribeJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GlacierJobDescription",
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
    VaultARN: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Action !== undefined && data.Action !== null) {
    contents.Action = data.Action;
  }
  if (data.ArchiveId !== undefined && data.ArchiveId !== null) {
    contents.ArchiveId = data.ArchiveId;
  }
  if (data.ArchiveSHA256TreeHash !== undefined && data.ArchiveSHA256TreeHash !== null) {
    contents.ArchiveSHA256TreeHash = data.ArchiveSHA256TreeHash;
  }
  if (data.ArchiveSizeInBytes !== undefined && data.ArchiveSizeInBytes !== null) {
    contents.ArchiveSizeInBytes = data.ArchiveSizeInBytes;
  }
  if (data.Completed !== undefined && data.Completed !== null) {
    contents.Completed = data.Completed;
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = data.CompletionDate;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = data.CreationDate;
  }
  if (
    data.InventoryRetrievalParameters !== undefined &&
    data.InventoryRetrievalParameters !== null
  ) {
    contents.InventoryRetrievalParameters = deserializeAws_restJson1_1InventoryRetrievalJobDescription(
      data.InventoryRetrievalParameters,
      context
    );
  }
  if (data.InventorySizeInBytes !== undefined && data.InventorySizeInBytes !== null) {
    contents.InventorySizeInBytes = data.InventorySizeInBytes;
  }
  if (data.JobDescription !== undefined && data.JobDescription !== null) {
    contents.JobDescription = data.JobDescription;
  }
  if (data.JobId !== undefined && data.JobId !== null) {
    contents.JobId = data.JobId;
  }
  if (data.JobOutputPath !== undefined && data.JobOutputPath !== null) {
    contents.JobOutputPath = data.JobOutputPath;
  }
  if (data.OutputLocation !== undefined && data.OutputLocation !== null) {
    contents.OutputLocation = deserializeAws_restJson1_1OutputLocation(
      data.OutputLocation,
      context
    );
  }
  if (data.RetrievalByteRange !== undefined && data.RetrievalByteRange !== null) {
    contents.RetrievalByteRange = data.RetrievalByteRange;
  }
  if (data.SHA256TreeHash !== undefined && data.SHA256TreeHash !== null) {
    contents.SHA256TreeHash = data.SHA256TreeHash;
  }
  if (data.SNSTopic !== undefined && data.SNSTopic !== null) {
    contents.SNSTopic = data.SNSTopic;
  }
  if (data.SelectParameters !== undefined && data.SelectParameters !== null) {
    contents.SelectParameters = deserializeAws_restJson1_1SelectParameters(
      data.SelectParameters,
      context
    );
  }
  if (data.StatusCode !== undefined && data.StatusCode !== null) {
    contents.StatusCode = data.StatusCode;
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = data.StatusMessage;
  }
  if (data.Tier !== undefined && data.Tier !== null) {
    contents.Tier = data.Tier;
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = data.VaultARN;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVaultCommandError(output, context);
  }
  const contents: DescribeVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVaultOutput",
    CreationDate: undefined,
    LastInventoryDate: undefined,
    NumberOfArchives: undefined,
    SizeInBytes: undefined,
    VaultARN: undefined,
    VaultName: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = data.CreationDate;
  }
  if (data.LastInventoryDate !== undefined && data.LastInventoryDate !== null) {
    contents.LastInventoryDate = data.LastInventoryDate;
  }
  if (data.NumberOfArchives !== undefined && data.NumberOfArchives !== null) {
    contents.NumberOfArchives = data.NumberOfArchives;
  }
  if (data.SizeInBytes !== undefined && data.SizeInBytes !== null) {
    contents.SizeInBytes = data.SizeInBytes;
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = data.VaultARN;
  }
  if (data.VaultName !== undefined && data.VaultName !== null) {
    contents.VaultName = data.VaultName;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: GetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataRetrievalPolicyOutput",
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = deserializeAws_restJson1_1DataRetrievalPolicy(data.Policy, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetJobOutputCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetJobOutputCommandError(output, context);
  }
  const contents: GetJobOutputCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetJobOutputOutput",
    acceptRanges: undefined,
    archiveDescription: undefined,
    body: undefined,
    checksum: undefined,
    contentRange: undefined,
    contentType: undefined
  };
  if (output.headers["accept-ranges"] !== undefined) {
    contents.acceptRanges = output.headers["accept-ranges"];
  }
  if (output.headers["x-amz-archive-description"] !== undefined) {
    contents.archiveDescription = output.headers["x-amz-archive-description"];
  }
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["content-range"] !== undefined) {
    contents.contentRange = output.headers["content-range"];
  }
  if (output.headers["content-type"] !== undefined) {
    contents.contentType = output.headers["content-type"];
  }
  const data: any = output.body;
  contents.body = data;
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetJobOutputCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetVaultAccessPolicyCommandError(output, context);
  }
  const contents: GetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVaultAccessPolicyOutput",
    policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.policy = deserializeAws_restJson1_1VaultAccessPolicy(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetVaultLockCommandError(output, context);
  }
  const contents: GetVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVaultLockOutput",
    CreationDate: undefined,
    ExpirationDate: undefined,
    Policy: undefined,
    State: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = data.CreationDate;
  }
  if (data.ExpirationDate !== undefined && data.ExpirationDate !== null) {
    contents.ExpirationDate = data.ExpirationDate;
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1GetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetVaultNotificationsCommandError(output, context);
  }
  const contents: GetVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVaultNotificationsOutput",
    vaultNotificationConfig: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.vaultNotificationConfig = deserializeAws_restJson1_1VaultNotificationConfig(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1GetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1InitiateJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  if (output.statusCode !== 202 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateJobCommandError(output, context);
  }
  const contents: InitiateJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateJobOutput",
    jobId: undefined,
    jobOutputPath: undefined,
    location: undefined
  };
  if (output.headers["x-amz-job-id"] !== undefined) {
    contents.jobId = output.headers["x-amz-job-id"];
  }
  if (output.headers["x-amz-job-output-path"] !== undefined) {
    contents.jobOutputPath = output.headers["x-amz-job-output-path"];
  }
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InitiateJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.glacier.gaws#InsufficientCapacityException":
      response = {
        ...(await deserializeAws_restJson1_1InsufficientCapacityExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyEnforcedException":
    case "com.amazonaws.glacier.gaws#PolicyEnforcedException":
      response = {
        ...(await deserializeAws_restJson1_1PolicyEnforcedExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1InitiateMultipartUploadCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateMultipartUploadCommandError(output, context);
  }
  const contents: InitiateMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateMultipartUploadOutput",
    location: undefined,
    uploadId: undefined
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

const deserializeAws_restJson1_1InitiateMultipartUploadCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1InitiateVaultLockCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateVaultLockCommandError(output, context);
  }
  const contents: InitiateVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "InitiateVaultLockOutput",
    lockId: undefined
  };
  if (output.headers["x-amz-lock-id"] !== undefined) {
    contents.lockId = output.headers["x-amz-lock-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1InitiateVaultLockCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListJobsCommandError(output, context);
  }
  const contents: ListJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListJobsOutput",
    JobList: undefined,
    Marker: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.JobList !== undefined && data.JobList !== null) {
    contents.JobList = deserializeAws_restJson1_1JobList(data.JobList, context);
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListMultipartUploadsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMultipartUploadsCommandError(output, context);
  }
  const contents: ListMultipartUploadsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMultipartUploadsOutput",
    Marker: undefined,
    UploadsList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.UploadsList !== undefined && data.UploadsList !== null) {
    contents.UploadsList = deserializeAws_restJson1_1UploadsList(data.UploadsList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListMultipartUploadsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListPartsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListPartsCommandError(output, context);
  }
  const contents: ListPartsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListPartsOutput",
    ArchiveDescription: undefined,
    CreationDate: undefined,
    Marker: undefined,
    MultipartUploadId: undefined,
    PartSizeInBytes: undefined,
    Parts: undefined,
    VaultARN: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ArchiveDescription !== undefined && data.ArchiveDescription !== null) {
    contents.ArchiveDescription = data.ArchiveDescription;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = data.CreationDate;
  }
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.MultipartUploadId !== undefined && data.MultipartUploadId !== null) {
    contents.MultipartUploadId = data.MultipartUploadId;
  }
  if (data.PartSizeInBytes !== undefined && data.PartSizeInBytes !== null) {
    contents.PartSizeInBytes = data.PartSizeInBytes;
  }
  if (data.Parts !== undefined && data.Parts !== null) {
    contents.Parts = deserializeAws_restJson1_1PartList(data.Parts, context);
  }
  if (data.VaultARN !== undefined && data.VaultARN !== null) {
    contents.VaultARN = data.VaultARN;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListPartsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProvisionedCapacityCommandError(output, context);
  }
  const contents: ListProvisionedCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProvisionedCapacityOutput",
    ProvisionedCapacityList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ProvisionedCapacityList !== undefined && data.ProvisionedCapacityList !== null) {
    contents.ProvisionedCapacityList = deserializeAws_restJson1_1ProvisionedCapacityList(
      data.ProvisionedCapacityList,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForVaultCommandError(output, context);
  }
  const contents: ListTagsForVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForVaultOutput",
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1TagMap(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVaultsCommandError(output, context);
  }
  const contents: ListVaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVaultsOutput",
    Marker: undefined,
    VaultList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Marker !== undefined && data.Marker !== null) {
    contents.Marker = data.Marker;
  }
  if (data.VaultList !== undefined && data.VaultList !== null) {
    contents.VaultList = deserializeAws_restJson1_1VaultList(data.VaultList, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListVaultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1PurchaseProvisionedCapacityCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PurchaseProvisionedCapacityCommandError(output, context);
  }
  const contents: PurchaseProvisionedCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "PurchaseProvisionedCapacityOutput",
    capacityId: undefined
  };
  if (output.headers["x-amz-capacity-id"] !== undefined) {
    contents.capacityId = output.headers["x-amz-capacity-id"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1PurchaseProvisionedCapacityCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1RemoveTagsFromVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveTagsFromVaultCommandError(output, context);
  }
  const contents: RemoveTagsFromVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1RemoveTagsFromVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SetDataRetrievalPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetDataRetrievalPolicyCommandError(output, context);
  }
  const contents: SetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SetDataRetrievalPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SetVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetVaultAccessPolicyCommandError(output, context);
  }
  const contents: SetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SetVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1SetVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetVaultNotificationsCommandError(output, context);
  }
  const contents: SetVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1SetVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UploadArchiveCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UploadArchiveCommandError(output, context);
  }
  const contents: UploadArchiveCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ArchiveCreationOutput",
    archiveId: undefined,
    checksum: undefined,
    location: undefined
  };
  if (output.headers["x-amz-archive-id"] !== undefined) {
    contents.archiveId = output.headers["x-amz-archive-id"];
  }
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  if (output.headers["location"] !== undefined) {
    contents.location = output.headers["location"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UploadArchiveCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier.gaws#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UploadMultipartPartCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UploadMultipartPartCommandError(output, context);
  }
  const contents: UploadMultipartPartCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UploadMultipartPartOutput",
    checksum: undefined
  };
  if (output.headers["x-amz-sha256-tree-hash"] !== undefined) {
    contents.checksum = output.headers["x-amz-sha256-tree-hash"];
  }
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UploadMultipartPartCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier.gaws#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
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
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1InsufficientCapacityExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const contents: InsufficientCapacityException = {
    name: "InsufficientCapacityException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1MissingParameterValueExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<MissingParameterValueException> => {
  const contents: MissingParameterValueException = {
    name: "MissingParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1PolicyEnforcedExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<PolicyEnforcedException> => {
  const contents: PolicyEnforcedException = {
    name: "PolicyEnforcedException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1RequestTimeoutExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    name: "RequestTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceNotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = parsedOutput.body;
  if (data.code !== undefined && data.code !== null) {
    contents.code = data.code;
  }
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  if (data.type !== undefined && data.type !== null) {
    contents.type = data.type;
  }
  return contents;
};

const serializeAws_restJson1_1AccessControlPolicyList = (
  input: Grant[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Grant(entry, context));
};

const serializeAws_restJson1_1CSVInput = (input: CSVInput, context: __SerdeContext): any => {
  return {
    ...(input.Comments !== undefined && { Comments: input.Comments }),
    ...(input.FieldDelimiter !== undefined && {
      FieldDelimiter: input.FieldDelimiter
    }),
    ...(input.FileHeaderInfo !== undefined && {
      FileHeaderInfo: input.FileHeaderInfo
    }),
    ...(input.QuoteCharacter !== undefined && {
      QuoteCharacter: input.QuoteCharacter
    }),
    ...(input.QuoteEscapeCharacter !== undefined && {
      QuoteEscapeCharacter: input.QuoteEscapeCharacter
    }),
    ...(input.RecordDelimiter !== undefined && {
      RecordDelimiter: input.RecordDelimiter
    })
  };
};

const serializeAws_restJson1_1CSVOutput = (input: CSVOutput, context: __SerdeContext): any => {
  return {
    ...(input.FieldDelimiter !== undefined && {
      FieldDelimiter: input.FieldDelimiter
    }),
    ...(input.QuoteCharacter !== undefined && {
      QuoteCharacter: input.QuoteCharacter
    }),
    ...(input.QuoteEscapeCharacter !== undefined && {
      QuoteEscapeCharacter: input.QuoteEscapeCharacter
    }),
    ...(input.QuoteFields !== undefined && { QuoteFields: input.QuoteFields }),
    ...(input.RecordDelimiter !== undefined && {
      RecordDelimiter: input.RecordDelimiter
    })
  };
};

const serializeAws_restJson1_1Encryption = (input: Encryption, context: __SerdeContext): any => {
  return {
    ...(input.EncryptionType !== undefined && {
      EncryptionType: input.EncryptionType
    }),
    ...(input.KMSContext !== undefined && { KMSContext: input.KMSContext }),
    ...(input.KMSKeyId !== undefined && { KMSKeyId: input.KMSKeyId })
  };
};

const serializeAws_restJson1_1Grant = (input: Grant, context: __SerdeContext): any => {
  return {
    ...(input.Grantee !== undefined && {
      Grantee: serializeAws_restJson1_1Grantee(input.Grantee, context)
    }),
    ...(input.Permission !== undefined && { Permission: input.Permission })
  };
};

const serializeAws_restJson1_1Grantee = (input: Grantee, context: __SerdeContext): any => {
  return {
    ...(input.DisplayName !== undefined && { DisplayName: input.DisplayName }),
    ...(input.EmailAddress !== undefined && {
      EmailAddress: input.EmailAddress
    }),
    ...(input.ID !== undefined && { ID: input.ID }),
    ...(input.Type !== undefined && { Type: input.Type }),
    ...(input.URI !== undefined && { URI: input.URI })
  };
};

const serializeAws_restJson1_1InputSerialization = (
  input: InputSerialization,
  context: __SerdeContext
): any => {
  return {
    ...(input.csv !== undefined && {
      csv: serializeAws_restJson1_1CSVInput(input.csv, context)
    })
  };
};

const serializeAws_restJson1_1OutputLocation = (
  input: OutputLocation,
  context: __SerdeContext
): any => {
  return {
    ...(input.S3 !== undefined && {
      S3: serializeAws_restJson1_1S3Location(input.S3, context)
    })
  };
};

const serializeAws_restJson1_1OutputSerialization = (
  input: OutputSerialization,
  context: __SerdeContext
): any => {
  return {
    ...(input.csv !== undefined && {
      csv: serializeAws_restJson1_1CSVOutput(input.csv, context)
    })
  };
};

const serializeAws_restJson1_1S3Location = (input: S3Location, context: __SerdeContext): any => {
  return {
    ...(input.AccessControlList !== undefined && {
      AccessControlList: serializeAws_restJson1_1AccessControlPolicyList(
        input.AccessControlList,
        context
      )
    }),
    ...(input.BucketName !== undefined && { BucketName: input.BucketName }),
    ...(input.CannedACL !== undefined && { CannedACL: input.CannedACL }),
    ...(input.Encryption !== undefined && {
      Encryption: serializeAws_restJson1_1Encryption(input.Encryption, context)
    }),
    ...(input.Prefix !== undefined && { Prefix: input.Prefix }),
    ...(input.StorageClass !== undefined && {
      StorageClass: input.StorageClass
    }),
    ...(input.Tagging !== undefined && {
      Tagging: serializeAws_restJson1_1hashmap(input.Tagging, context)
    }),
    ...(input.UserMetadata !== undefined && {
      UserMetadata: serializeAws_restJson1_1hashmap(input.UserMetadata, context)
    })
  };
};

const serializeAws_restJson1_1SelectParameters = (
  input: SelectParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.Expression !== undefined && { Expression: input.Expression }),
    ...(input.ExpressionType !== undefined && {
      ExpressionType: input.ExpressionType
    }),
    ...(input.InputSerialization !== undefined && {
      InputSerialization: serializeAws_restJson1_1InputSerialization(
        input.InputSerialization,
        context
      )
    }),
    ...(input.OutputSerialization !== undefined && {
      OutputSerialization: serializeAws_restJson1_1OutputSerialization(
        input.OutputSerialization,
        context
      )
    })
  };
};

const serializeAws_restJson1_1hashmap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1_1DataRetrievalPolicy = (
  input: DataRetrievalPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Rules !== undefined && {
      Rules: serializeAws_restJson1_1DataRetrievalRulesList(input.Rules, context)
    })
  };
};

const serializeAws_restJson1_1DataRetrievalRule = (
  input: DataRetrievalRule,
  context: __SerdeContext
): any => {
  return {
    ...(input.BytesPerHour !== undefined && {
      BytesPerHour: input.BytesPerHour
    }),
    ...(input.Strategy !== undefined && { Strategy: input.Strategy })
  };
};

const serializeAws_restJson1_1DataRetrievalRulesList = (
  input: DataRetrievalRule[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1DataRetrievalRule(entry, context));
};

const serializeAws_restJson1_1InventoryRetrievalJobInput = (
  input: InventoryRetrievalJobInput,
  context: __SerdeContext
): any => {
  return {
    ...(input.EndDate !== undefined && { EndDate: input.EndDate }),
    ...(input.Limit !== undefined && { Limit: input.Limit }),
    ...(input.Marker !== undefined && { Marker: input.Marker }),
    ...(input.StartDate !== undefined && { StartDate: input.StartDate })
  };
};

const serializeAws_restJson1_1JobParameters = (
  input: JobParameters,
  context: __SerdeContext
): any => {
  return {
    ...(input.ArchiveId !== undefined && { ArchiveId: input.ArchiveId }),
    ...(input.Description !== undefined && { Description: input.Description }),
    ...(input.Format !== undefined && { Format: input.Format }),
    ...(input.InventoryRetrievalParameters !== undefined && {
      InventoryRetrievalParameters: serializeAws_restJson1_1InventoryRetrievalJobInput(
        input.InventoryRetrievalParameters,
        context
      )
    }),
    ...(input.OutputLocation !== undefined && {
      OutputLocation: serializeAws_restJson1_1OutputLocation(input.OutputLocation, context)
    }),
    ...(input.RetrievalByteRange !== undefined && {
      RetrievalByteRange: input.RetrievalByteRange
    }),
    ...(input.SNSTopic !== undefined && { SNSTopic: input.SNSTopic }),
    ...(input.SelectParameters !== undefined && {
      SelectParameters: serializeAws_restJson1_1SelectParameters(input.SelectParameters, context)
    }),
    ...(input.Tier !== undefined && { Tier: input.Tier }),
    ...(input.Type !== undefined && { Type: input.Type })
  };
};

const serializeAws_restJson1_1NotificationEventList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const serializeAws_restJson1_1VaultAccessPolicy = (
  input: VaultAccessPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy !== undefined && { Policy: input.Policy })
  };
};

const serializeAws_restJson1_1VaultLockPolicy = (
  input: VaultLockPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.Policy !== undefined && { Policy: input.Policy })
  };
};

const serializeAws_restJson1_1VaultNotificationConfig = (
  input: VaultNotificationConfig,
  context: __SerdeContext
): any => {
  return {
    ...(input.Events !== undefined && {
      Events: serializeAws_restJson1_1NotificationEventList(input.Events, context)
    }),
    ...(input.SNSTopic !== undefined && { SNSTopic: input.SNSTopic })
  };
};

const deserializeAws_restJson1_1AccessControlPolicyList = (
  output: any,
  context: __SerdeContext
): Grant[] => {
  return (output || []).map((entry: any) => deserializeAws_restJson1_1Grant(entry, context));
};

const deserializeAws_restJson1_1CSVInput = (output: any, context: __SerdeContext): CSVInput => {
  return {
    __type: "CSVInput",
    Comments:
      output.Comments !== undefined && output.Comments !== null ? output.Comments : undefined,
    FieldDelimiter:
      output.FieldDelimiter !== undefined && output.FieldDelimiter !== null
        ? output.FieldDelimiter
        : undefined,
    FileHeaderInfo:
      output.FileHeaderInfo !== undefined && output.FileHeaderInfo !== null
        ? output.FileHeaderInfo
        : undefined,
    QuoteCharacter:
      output.QuoteCharacter !== undefined && output.QuoteCharacter !== null
        ? output.QuoteCharacter
        : undefined,
    QuoteEscapeCharacter:
      output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
        ? output.QuoteEscapeCharacter
        : undefined,
    RecordDelimiter:
      output.RecordDelimiter !== undefined && output.RecordDelimiter !== null
        ? output.RecordDelimiter
        : undefined
  } as any;
};

const deserializeAws_restJson1_1CSVOutput = (output: any, context: __SerdeContext): CSVOutput => {
  return {
    __type: "CSVOutput",
    FieldDelimiter:
      output.FieldDelimiter !== undefined && output.FieldDelimiter !== null
        ? output.FieldDelimiter
        : undefined,
    QuoteCharacter:
      output.QuoteCharacter !== undefined && output.QuoteCharacter !== null
        ? output.QuoteCharacter
        : undefined,
    QuoteEscapeCharacter:
      output.QuoteEscapeCharacter !== undefined && output.QuoteEscapeCharacter !== null
        ? output.QuoteEscapeCharacter
        : undefined,
    QuoteFields:
      output.QuoteFields !== undefined && output.QuoteFields !== null
        ? output.QuoteFields
        : undefined,
    RecordDelimiter:
      output.RecordDelimiter !== undefined && output.RecordDelimiter !== null
        ? output.RecordDelimiter
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Encryption = (output: any, context: __SerdeContext): Encryption => {
  return {
    __type: "Encryption",
    EncryptionType:
      output.EncryptionType !== undefined && output.EncryptionType !== null
        ? output.EncryptionType
        : undefined,
    KMSContext:
      output.KMSContext !== undefined && output.KMSContext !== null ? output.KMSContext : undefined,
    KMSKeyId:
      output.KMSKeyId !== undefined && output.KMSKeyId !== null ? output.KMSKeyId : undefined
  } as any;
};

const deserializeAws_restJson1_1GlacierJobDescription = (
  output: any,
  context: __SerdeContext
): GlacierJobDescription => {
  return {
    __type: "GlacierJobDescription",
    Action: output.Action !== undefined && output.Action !== null ? output.Action : undefined,
    ArchiveId:
      output.ArchiveId !== undefined && output.ArchiveId !== null ? output.ArchiveId : undefined,
    ArchiveSHA256TreeHash:
      output.ArchiveSHA256TreeHash !== undefined && output.ArchiveSHA256TreeHash !== null
        ? output.ArchiveSHA256TreeHash
        : undefined,
    ArchiveSizeInBytes:
      output.ArchiveSizeInBytes !== undefined && output.ArchiveSizeInBytes !== null
        ? output.ArchiveSizeInBytes
        : undefined,
    Completed:
      output.Completed !== undefined && output.Completed !== null ? output.Completed : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? output.CompletionDate
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? output.CreationDate
        : undefined,
    InventoryRetrievalParameters:
      output.InventoryRetrievalParameters !== undefined &&
      output.InventoryRetrievalParameters !== null
        ? deserializeAws_restJson1_1InventoryRetrievalJobDescription(
            output.InventoryRetrievalParameters,
            context
          )
        : undefined,
    InventorySizeInBytes:
      output.InventorySizeInBytes !== undefined && output.InventorySizeInBytes !== null
        ? output.InventorySizeInBytes
        : undefined,
    JobDescription:
      output.JobDescription !== undefined && output.JobDescription !== null
        ? output.JobDescription
        : undefined,
    JobId: output.JobId !== undefined && output.JobId !== null ? output.JobId : undefined,
    JobOutputPath:
      output.JobOutputPath !== undefined && output.JobOutputPath !== null
        ? output.JobOutputPath
        : undefined,
    OutputLocation:
      output.OutputLocation !== undefined && output.OutputLocation !== null
        ? deserializeAws_restJson1_1OutputLocation(output.OutputLocation, context)
        : undefined,
    RetrievalByteRange:
      output.RetrievalByteRange !== undefined && output.RetrievalByteRange !== null
        ? output.RetrievalByteRange
        : undefined,
    SHA256TreeHash:
      output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null
        ? output.SHA256TreeHash
        : undefined,
    SNSTopic:
      output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined,
    SelectParameters:
      output.SelectParameters !== undefined && output.SelectParameters !== null
        ? deserializeAws_restJson1_1SelectParameters(output.SelectParameters, context)
        : undefined,
    StatusCode:
      output.StatusCode !== undefined && output.StatusCode !== null ? output.StatusCode : undefined,
    StatusMessage:
      output.StatusMessage !== undefined && output.StatusMessage !== null
        ? output.StatusMessage
        : undefined,
    Tier: output.Tier !== undefined && output.Tier !== null ? output.Tier : undefined,
    VaultARN:
      output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined
  } as any;
};

const deserializeAws_restJson1_1Grant = (output: any, context: __SerdeContext): Grant => {
  return {
    __type: "Grant",
    Grantee:
      output.Grantee !== undefined && output.Grantee !== null
        ? deserializeAws_restJson1_1Grantee(output.Grantee, context)
        : undefined,
    Permission:
      output.Permission !== undefined && output.Permission !== null ? output.Permission : undefined
  } as any;
};

const deserializeAws_restJson1_1Grantee = (output: any, context: __SerdeContext): Grantee => {
  return {
    __type: "Grantee",
    DisplayName:
      output.DisplayName !== undefined && output.DisplayName !== null
        ? output.DisplayName
        : undefined,
    EmailAddress:
      output.EmailAddress !== undefined && output.EmailAddress !== null
        ? output.EmailAddress
        : undefined,
    ID: output.ID !== undefined && output.ID !== null ? output.ID : undefined,
    Type: output.Type !== undefined && output.Type !== null ? output.Type : undefined,
    URI: output.URI !== undefined && output.URI !== null ? output.URI : undefined
  } as any;
};

const deserializeAws_restJson1_1InputSerialization = (
  output: any,
  context: __SerdeContext
): InputSerialization => {
  return {
    __type: "InputSerialization",
    csv:
      output.csv !== undefined && output.csv !== null
        ? deserializeAws_restJson1_1CSVInput(output.csv, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1InventoryRetrievalJobDescription = (
  output: any,
  context: __SerdeContext
): InventoryRetrievalJobDescription => {
  return {
    __type: "InventoryRetrievalJobDescription",
    EndDate: output.EndDate !== undefined && output.EndDate !== null ? output.EndDate : undefined,
    Format: output.Format !== undefined && output.Format !== null ? output.Format : undefined,
    Limit: output.Limit !== undefined && output.Limit !== null ? output.Limit : undefined,
    Marker: output.Marker !== undefined && output.Marker !== null ? output.Marker : undefined,
    StartDate:
      output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputLocation = (
  output: any,
  context: __SerdeContext
): OutputLocation => {
  return {
    __type: "OutputLocation",
    S3:
      output.S3 !== undefined && output.S3 !== null
        ? deserializeAws_restJson1_1S3Location(output.S3, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1OutputSerialization = (
  output: any,
  context: __SerdeContext
): OutputSerialization => {
  return {
    __type: "OutputSerialization",
    csv:
      output.csv !== undefined && output.csv !== null
        ? deserializeAws_restJson1_1CSVOutput(output.csv, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1S3Location = (output: any, context: __SerdeContext): S3Location => {
  return {
    __type: "S3Location",
    AccessControlList:
      output.AccessControlList !== undefined && output.AccessControlList !== null
        ? deserializeAws_restJson1_1AccessControlPolicyList(output.AccessControlList, context)
        : undefined,
    BucketName:
      output.BucketName !== undefined && output.BucketName !== null ? output.BucketName : undefined,
    CannedACL:
      output.CannedACL !== undefined && output.CannedACL !== null ? output.CannedACL : undefined,
    Encryption:
      output.Encryption !== undefined && output.Encryption !== null
        ? deserializeAws_restJson1_1Encryption(output.Encryption, context)
        : undefined,
    Prefix: output.Prefix !== undefined && output.Prefix !== null ? output.Prefix : undefined,
    StorageClass:
      output.StorageClass !== undefined && output.StorageClass !== null
        ? output.StorageClass
        : undefined,
    Tagging:
      output.Tagging !== undefined && output.Tagging !== null
        ? deserializeAws_restJson1_1hashmap(output.Tagging, context)
        : undefined,
    UserMetadata:
      output.UserMetadata !== undefined && output.UserMetadata !== null
        ? deserializeAws_restJson1_1hashmap(output.UserMetadata, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1SelectParameters = (
  output: any,
  context: __SerdeContext
): SelectParameters => {
  return {
    __type: "SelectParameters",
    Expression:
      output.Expression !== undefined && output.Expression !== null ? output.Expression : undefined,
    ExpressionType:
      output.ExpressionType !== undefined && output.ExpressionType !== null
        ? output.ExpressionType
        : undefined,
    InputSerialization:
      output.InputSerialization !== undefined && output.InputSerialization !== null
        ? deserializeAws_restJson1_1InputSerialization(output.InputSerialization, context)
        : undefined,
    OutputSerialization:
      output.OutputSerialization !== undefined && output.OutputSerialization !== null
        ? deserializeAws_restJson1_1OutputSerialization(output.OutputSerialization, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1hashmap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1DataRetrievalPolicy = (
  output: any,
  context: __SerdeContext
): DataRetrievalPolicy => {
  return {
    __type: "DataRetrievalPolicy",
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1_1DataRetrievalRulesList(output.Rules, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1DataRetrievalRule = (
  output: any,
  context: __SerdeContext
): DataRetrievalRule => {
  return {
    __type: "DataRetrievalRule",
    BytesPerHour:
      output.BytesPerHour !== undefined && output.BytesPerHour !== null
        ? output.BytesPerHour
        : undefined,
    Strategy:
      output.Strategy !== undefined && output.Strategy !== null ? output.Strategy : undefined
  } as any;
};

const deserializeAws_restJson1_1DataRetrievalRulesList = (
  output: any,
  context: __SerdeContext
): DataRetrievalRule[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataRetrievalRule(entry, context)
  );
};

const deserializeAws_restJson1_1DescribeVaultOutput = (
  output: any,
  context: __SerdeContext
): DescribeVaultOutput => {
  return {
    __type: "DescribeVaultOutput",
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? output.CreationDate
        : undefined,
    LastInventoryDate:
      output.LastInventoryDate !== undefined && output.LastInventoryDate !== null
        ? output.LastInventoryDate
        : undefined,
    NumberOfArchives:
      output.NumberOfArchives !== undefined && output.NumberOfArchives !== null
        ? output.NumberOfArchives
        : undefined,
    SizeInBytes:
      output.SizeInBytes !== undefined && output.SizeInBytes !== null
        ? output.SizeInBytes
        : undefined,
    VaultARN:
      output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined,
    VaultName:
      output.VaultName !== undefined && output.VaultName !== null ? output.VaultName : undefined
  } as any;
};

const deserializeAws_restJson1_1JobList = (
  output: any,
  context: __SerdeContext
): GlacierJobDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GlacierJobDescription(entry, context)
  );
};

const deserializeAws_restJson1_1NotificationEventList = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1PartList = (
  output: any,
  context: __SerdeContext
): PartListElement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PartListElement(entry, context)
  );
};

const deserializeAws_restJson1_1PartListElement = (
  output: any,
  context: __SerdeContext
): PartListElement => {
  return {
    __type: "PartListElement",
    RangeInBytes:
      output.RangeInBytes !== undefined && output.RangeInBytes !== null
        ? output.RangeInBytes
        : undefined,
    SHA256TreeHash:
      output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null
        ? output.SHA256TreeHash
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ProvisionedCapacityDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription => {
  return {
    __type: "ProvisionedCapacityDescription",
    CapacityId:
      output.CapacityId !== undefined && output.CapacityId !== null ? output.CapacityId : undefined,
    ExpirationDate:
      output.ExpirationDate !== undefined && output.ExpirationDate !== null
        ? output.ExpirationDate
        : undefined,
    StartDate:
      output.StartDate !== undefined && output.StartDate !== null ? output.StartDate : undefined
  } as any;
};

const deserializeAws_restJson1_1ProvisionedCapacityList = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProvisionedCapacityDescription(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  return Object.entries(output).reduce(
    (acc: { [key: string]: string }, [key, value]: [string, any]) => ({
      ...acc,
      [key]: value
    }),
    {}
  );
};

const deserializeAws_restJson1_1UploadListElement = (
  output: any,
  context: __SerdeContext
): UploadListElement => {
  return {
    __type: "UploadListElement",
    ArchiveDescription:
      output.ArchiveDescription !== undefined && output.ArchiveDescription !== null
        ? output.ArchiveDescription
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? output.CreationDate
        : undefined,
    MultipartUploadId:
      output.MultipartUploadId !== undefined && output.MultipartUploadId !== null
        ? output.MultipartUploadId
        : undefined,
    PartSizeInBytes:
      output.PartSizeInBytes !== undefined && output.PartSizeInBytes !== null
        ? output.PartSizeInBytes
        : undefined,
    VaultARN:
      output.VaultARN !== undefined && output.VaultARN !== null ? output.VaultARN : undefined
  } as any;
};

const deserializeAws_restJson1_1UploadsList = (
  output: any,
  context: __SerdeContext
): UploadListElement[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UploadListElement(entry, context)
  );
};

const deserializeAws_restJson1_1VaultAccessPolicy = (
  output: any,
  context: __SerdeContext
): VaultAccessPolicy => {
  return {
    __type: "VaultAccessPolicy",
    Policy: output.Policy !== undefined && output.Policy !== null ? output.Policy : undefined
  } as any;
};

const deserializeAws_restJson1_1VaultList = (
  output: any,
  context: __SerdeContext
): DescribeVaultOutput[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DescribeVaultOutput(entry, context)
  );
};

const deserializeAws_restJson1_1VaultNotificationConfig = (
  output: any,
  context: __SerdeContext
): VaultNotificationConfig => {
  return {
    __type: "VaultNotificationConfig",
    Events:
      output.Events !== undefined && output.Events !== null
        ? deserializeAws_restJson1_1NotificationEventList(output.Events, context)
        : undefined,
    SNSTopic:
      output.SNSTopic !== undefined && output.SNSTopic !== null ? output.SNSTopic : undefined
  } as any;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return context.streamCollector(streamBody) || Promise.resolve(new Uint8Array());
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (streamBody: any, context: __SerdeContext): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

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
