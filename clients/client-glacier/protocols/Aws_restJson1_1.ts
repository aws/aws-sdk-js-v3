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
import {
  CreateVaultCommandInput,
  CreateVaultCommandOutput
} from "../commands/CreateVaultCommand";
import {
  DeleteArchiveCommandInput,
  DeleteArchiveCommandOutput
} from "../commands/DeleteArchiveCommand";
import {
  DeleteVaultAccessPolicyCommandInput,
  DeleteVaultAccessPolicyCommandOutput
} from "../commands/DeleteVaultAccessPolicyCommand";
import {
  DeleteVaultCommandInput,
  DeleteVaultCommandOutput
} from "../commands/DeleteVaultCommand";
import {
  DeleteVaultNotificationsCommandInput,
  DeleteVaultNotificationsCommandOutput
} from "../commands/DeleteVaultNotificationsCommand";
import {
  DescribeJobCommandInput,
  DescribeJobCommandOutput
} from "../commands/DescribeJobCommand";
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
import {
  InitiateJobCommandInput,
  InitiateJobCommandOutput
} from "../commands/InitiateJobCommand";
import {
  InitiateMultipartUploadCommandInput,
  InitiateMultipartUploadCommandOutput
} from "../commands/InitiateMultipartUploadCommand";
import {
  InitiateVaultLockCommandInput,
  InitiateVaultLockCommandOutput
} from "../commands/InitiateVaultLockCommand";
import {
  ListJobsCommandInput,
  ListJobsCommandOutput
} from "../commands/ListJobsCommand";
import {
  ListMultipartUploadsCommandInput,
  ListMultipartUploadsCommandOutput
} from "../commands/ListMultipartUploadsCommand";
import {
  ListPartsCommandInput,
  ListPartsCommandOutput
} from "../commands/ListPartsCommand";
import {
  ListProvisionedCapacityCommandInput,
  ListProvisionedCapacityCommandOutput
} from "../commands/ListProvisionedCapacityCommand";
import {
  ListTagsForVaultCommandInput,
  ListTagsForVaultCommandOutput
} from "../commands/ListTagsForVaultCommand";
import {
  ListVaultsCommandInput,
  ListVaultsCommandOutput
} from "../commands/ListVaultsCommand";
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

export async function serializeAws_restJson1_1AbortMultipartUploadCommand(
  input: AbortMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace(
      "{uploadId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1AbortVaultLockCommand(
  input: AbortVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1AddTagsToVaultCommand(
  input: AddTagsToVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    operation: "add"
  };
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1TagMap(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1CompleteMultipartUploadCommand(
  input: CompleteMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.archiveSize !== undefined) {
    headers["x-amz-archive-size"] = input.archiveSize;
  }
  if (input.checksum !== undefined) {
    headers["x-amz-sha256-tree-hash"] = input.checksum;
  }
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace(
      "{uploadId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CompleteVaultLockCommand(
  input: CompleteVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.lockId !== undefined) {
    const labelValue: string = input.lockId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: lockId.");
    }
    resolvedPath = resolvedPath.replace(
      "{lockId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: lockId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1CreateVaultCommand(
  input: CreateVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteArchiveCommand(
  input: DeleteArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/archives/{archiveId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.archiveId !== undefined) {
    const labelValue: string = input.archiveId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: archiveId.");
    }
    resolvedPath = resolvedPath.replace(
      "{archiveId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: archiveId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVaultCommand(
  input: DeleteVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVaultAccessPolicyCommand(
  input: DeleteVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteVaultNotificationsCommand(
  input: DeleteVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeJobCommand(
  input: DescribeJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeVaultCommand(
  input: DescribeVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetDataRetrievalPolicyCommand(
  input: GetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/policies/data-retrieval";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetJobOutputCommand(
  input: GetJobOutputCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.range !== undefined) {
    headers["Range"] = input.range;
  }
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs/{jobId}/output";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.jobId !== undefined) {
    const labelValue: string = input.jobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: jobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{jobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: jobId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetVaultAccessPolicyCommand(
  input: GetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetVaultLockCommand(
  input: GetVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetVaultNotificationsCommand(
  input: GetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1InitiateJobCommand(
  input: InitiateJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1InitiateMultipartUploadCommand(
  input: InitiateMultipartUploadCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  if (input.archiveDescription !== undefined) {
    headers["x-amz-archive-description"] = input.archiveDescription;
  }
  if (input.partSize !== undefined) {
    headers["x-amz-part-size"] = input.partSize;
  }
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1InitiateVaultLockCommand(
  input: InitiateVaultLockCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/lock-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1ListJobsCommand(
  input: ListJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/jobs";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {};
  if (input.completed !== undefined) {
    query["completed"] = input.completed;
  }
  if (input.limit !== undefined) {
    query["limit"] = input.limit;
  }
  if (input.marker !== undefined) {
    query["marker"] = input.marker;
  }
  if (input.statuscode !== undefined) {
    query["statuscode"] = input.statuscode;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListMultipartUploadsCommand(
  input: ListMultipartUploadsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/multipart-uploads";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit;
  }
  if (input.marker !== undefined) {
    query["marker"] = input.marker;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListPartsCommand(
  input: ListPartsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace(
      "{uploadId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit;
  }
  if (input.marker !== undefined) {
    query["marker"] = input.marker;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1ListProvisionedCapacityCommand(
  input: ListProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/provisioned-capacity";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListTagsForVaultCommand(
  input: ListTagsForVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListVaultsCommand(
  input: ListVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/vaults";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  const query: any = {};
  if (input.limit !== undefined) {
    query["limit"] = input.limit;
  }
  if (input.marker !== undefined) {
    query["marker"] = input.marker;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath,
    query: query
  });
}

export async function serializeAws_restJson1_1PurchaseProvisionedCapacityCommand(
  input: PurchaseProvisionedCapacityCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/{accountId}/provisioned-capacity";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1RemoveTagsFromVaultCommand(
  input: RemoveTagsFromVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/tags";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  const query: any = {
    operation: "remove"
  };
  let body: any;
  const bodyParams: any = {};
  if (input.TagKeys !== undefined) {
    bodyParams["TagKeys"] = serializeAws_restJson1_1TagKeyList(
      input.TagKeys,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    query: query,
    body: body
  });
}

export async function serializeAws_restJson1_1SetDataRetrievalPolicyCommand(
  input: SetDataRetrievalPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/policies/data-retrieval";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = serializeAws_restJson1_1DataRetrievalPolicy(
      input.Policy,
      context
    );
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SetVaultAccessPolicyCommand(
  input: SetVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/{accountId}/vaults/{vaultName}/access-policy";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
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
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1SetVaultNotificationsCommand(
  input: SetVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/notification-configuration";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  let body: any;
  if (input.vaultNotificationConfig !== undefined) {
    body = serializeAws_restJson1_1VaultNotificationConfig(
      input.vaultNotificationConfig,
      context
    );
  }
  if (body === undefined) {
    body = {};
  }
  body = JSON.stringify(body);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UploadArchiveCommand(
  input: UploadArchiveCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (input.archiveDescription !== undefined) {
    headers["x-amz-archive-description"] = input.archiveDescription;
  }
  if (input.checksum !== undefined) {
    headers["x-amz-sha256-tree-hash"] = input.checksum;
  }
  let resolvedPath = "/{accountId}/vaults/{vaultName}/archives";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UploadMultipartPartCommand(
  input: UploadMultipartPartCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/octet-stream";
  if (input.checksum !== undefined) {
    headers["x-amz-sha256-tree-hash"] = input.checksum;
  }
  if (input.range !== undefined) {
    headers["Content-Range"] = input.range;
  }
  let resolvedPath =
    "/{accountId}/vaults/{vaultName}/multipart-uploads/{uploadId}";
  if (input.accountId !== undefined) {
    const labelValue: string = input.accountId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: accountId.");
    }
    resolvedPath = resolvedPath.replace(
      "{accountId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: accountId.");
  }
  if (input.uploadId !== undefined) {
    const labelValue: string = input.uploadId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: uploadId.");
    }
    resolvedPath = resolvedPath.replace(
      "{uploadId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: uploadId.");
  }
  if (input.vaultName !== undefined) {
    const labelValue: string = input.vaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: vaultName.");
    }
    resolvedPath = resolvedPath.replace(
      "{vaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: vaultName.");
  }
  let body: any;
  if (input.body !== undefined) {
    body = input.body;
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "PUT",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function deserializeAws_restJson1_1AbortMultipartUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AbortMultipartUploadCommandError(
      output,
      context
    );
  }
  const contents: AbortMultipartUploadCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AbortMultipartUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortMultipartUploadCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1AbortVaultLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AbortVaultLockCommandError(
      output,
      context
    );
  }
  const contents: AbortVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AbortVaultLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AbortVaultLockCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1AddTagsToVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1AddTagsToVaultCommandError(
      output,
      context
    );
  }
  const contents: AddTagsToVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1AddTagsToVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AddTagsToVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CompleteMultipartUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CompleteMultipartUploadCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1CompleteMultipartUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteMultipartUploadCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CompleteVaultLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CompleteVaultLockCommandError(
      output,
      context
    );
  }
  const contents: CompleteVaultLockCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CompleteVaultLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CompleteVaultLockCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1CreateVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> {
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
}

async function deserializeAws_restJson1_1CreateVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteArchiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteArchiveCommandError(output, context);
  }
  const contents: DeleteArchiveCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteArchiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteArchiveCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultCommandError(output, context);
  }
  const contents: DeleteVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DeleteVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVaultNotificationsCommandError(
      output,
      context
    );
  }
  const contents: DeleteVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
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
  if (
    data.ArchiveSHA256TreeHash !== undefined &&
    data.ArchiveSHA256TreeHash !== null
  ) {
    contents.ArchiveSHA256TreeHash = data.ArchiveSHA256TreeHash;
  }
  if (
    data.ArchiveSizeInBytes !== undefined &&
    data.ArchiveSizeInBytes !== null
  ) {
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
  if (
    data.InventorySizeInBytes !== undefined &&
    data.InventorySizeInBytes !== null
  ) {
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
  if (
    data.RetrievalByteRange !== undefined &&
    data.RetrievalByteRange !== null
  ) {
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
}

async function deserializeAws_restJson1_1DescribeJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1DescribeVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> {
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
}

async function deserializeAws_restJson1_1DescribeVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetDataRetrievalPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetDataRetrievalPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetDataRetrievalPolicyOutput",
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = deserializeAws_restJson1_1DataRetrievalPolicy(
      data.Policy,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetDataRetrievalPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetDataRetrievalPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetJobOutputCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetJobOutputCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetJobOutputCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetVaultAccessPolicyOutput",
    policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.policy = deserializeAws_restJson1_1VaultAccessPolicy(data, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetVaultLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> {
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
}

async function deserializeAws_restJson1_1GetVaultLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultLockCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1GetVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetVaultNotificationsCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1GetVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1InitiateJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> {
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
}

async function deserializeAws_restJson1_1InitiateJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InsufficientCapacityException":
    case "com.amazonaws.glacier.gaws#InsufficientCapacityException":
      response = {
        ...(await deserializeAws_restJson1_1InsufficientCapacityExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "PolicyEnforcedException":
    case "com.amazonaws.glacier.gaws#PolicyEnforcedException":
      response = {
        ...(await deserializeAws_restJson1_1PolicyEnforcedExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1InitiateMultipartUploadCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateMultipartUploadCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1InitiateMultipartUploadCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateMultipartUploadCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1InitiateVaultLockCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1InitiateVaultLockCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1InitiateVaultLockCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<InitiateVaultLockCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
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
}

async function deserializeAws_restJson1_1ListJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListMultipartUploadsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMultipartUploadsCommandError(
      output,
      context
    );
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
    contents.UploadsList = deserializeAws_restJson1_1UploadsList(
      data.UploadsList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListMultipartUploadsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMultipartUploadsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListPartsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> {
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
  if (
    data.ArchiveDescription !== undefined &&
    data.ArchiveDescription !== null
  ) {
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
}

async function deserializeAws_restJson1_1ListPartsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListPartsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListProvisionedCapacityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProvisionedCapacityCommandError(
      output,
      context
    );
  }
  const contents: ListProvisionedCapacityCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProvisionedCapacityOutput",
    ProvisionedCapacityList: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.ProvisionedCapacityList !== undefined &&
    data.ProvisionedCapacityList !== null
  ) {
    contents.ProvisionedCapacityList = deserializeAws_restJson1_1ProvisionedCapacityList(
      data.ProvisionedCapacityList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProvisionedCapacityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProvisionedCapacityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListTagsForVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForVaultCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1ListTagsForVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1ListVaultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> {
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
    contents.VaultList = deserializeAws_restJson1_1VaultList(
      data.VaultList,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListVaultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVaultsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1PurchaseProvisionedCapacityCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> {
  if (output.statusCode !== 201 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PurchaseProvisionedCapacityCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1PurchaseProvisionedCapacityCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PurchaseProvisionedCapacityCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.glacier.gaws#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1RemoveTagsFromVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1RemoveTagsFromVaultCommandError(
      output,
      context
    );
  }
  const contents: RemoveTagsFromVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1RemoveTagsFromVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RemoveTagsFromVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1SetDataRetrievalPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetDataRetrievalPolicyCommandError(
      output,
      context
    );
  }
  const contents: SetDataRetrievalPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SetDataRetrievalPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetDataRetrievalPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1SetVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: SetVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SetVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1SetVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1SetVaultNotificationsCommandError(
      output,
      context
    );
  }
  const contents: SetVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1SetVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<SetVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UploadArchiveCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> {
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
}

async function deserializeAws_restJson1_1UploadArchiveCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadArchiveCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier.gaws#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

export async function deserializeAws_restJson1_1UploadMultipartPartCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> {
  if (output.statusCode !== 204 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UploadMultipartPartCommandError(
      output,
      context
    );
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
}

async function deserializeAws_restJson1_1UploadMultipartPartCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UploadMultipartPartCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.glacier.gaws#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.glacier.gaws#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "RequestTimeoutException":
    case "com.amazonaws.glacier.gaws#RequestTimeoutException":
      response = {
        ...(await deserializeAws_restJson1_1RequestTimeoutExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.glacier.gaws#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.glacier.gaws#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = await parseBody(output.body, context);
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
}

const deserializeAws_restJson1_1InsufficientCapacityExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InsufficientCapacityException> => {
  const contents: InsufficientCapacityException = {
    name: "InsufficientCapacityException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<InvalidParameterValueException> => {
  const contents: InvalidParameterValueException = {
    name: "InvalidParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<MissingParameterValueException> => {
  const contents: MissingParameterValueException = {
    name: "MissingParameterValueException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<PolicyEnforcedException> => {
  const contents: PolicyEnforcedException = {
    name: "PolicyEnforcedException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<RequestTimeoutException> => {
  const contents: RequestTimeoutException = {
    name: "RequestTimeoutException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<ResourceNotFoundException> => {
  const contents: ResourceNotFoundException = {
    name: "ResourceNotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  output: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    code: undefined,
    message: undefined,
    type: undefined
  };
  const data: any = await parseBody(output.body, context);
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
  input: Array<Grant>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Grant(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1CSVInput = (
  input: CSVInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Comments !== undefined) {
    bodyParams["Comments"] = input.Comments;
  }
  if (input.FieldDelimiter !== undefined) {
    bodyParams["FieldDelimiter"] = input.FieldDelimiter;
  }
  if (input.FileHeaderInfo !== undefined) {
    bodyParams["FileHeaderInfo"] = input.FileHeaderInfo;
  }
  if (input.QuoteCharacter !== undefined) {
    bodyParams["QuoteCharacter"] = input.QuoteCharacter;
  }
  if (input.QuoteEscapeCharacter !== undefined) {
    bodyParams["QuoteEscapeCharacter"] = input.QuoteEscapeCharacter;
  }
  if (input.RecordDelimiter !== undefined) {
    bodyParams["RecordDelimiter"] = input.RecordDelimiter;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CSVOutput = (
  input: CSVOutput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.FieldDelimiter !== undefined) {
    bodyParams["FieldDelimiter"] = input.FieldDelimiter;
  }
  if (input.QuoteCharacter !== undefined) {
    bodyParams["QuoteCharacter"] = input.QuoteCharacter;
  }
  if (input.QuoteEscapeCharacter !== undefined) {
    bodyParams["QuoteEscapeCharacter"] = input.QuoteEscapeCharacter;
  }
  if (input.QuoteFields !== undefined) {
    bodyParams["QuoteFields"] = input.QuoteFields;
  }
  if (input.RecordDelimiter !== undefined) {
    bodyParams["RecordDelimiter"] = input.RecordDelimiter;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Encryption = (
  input: Encryption,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EncryptionType !== undefined) {
    bodyParams["EncryptionType"] = input.EncryptionType;
  }
  if (input.KMSContext !== undefined) {
    bodyParams["KMSContext"] = input.KMSContext;
  }
  if (input.KMSKeyId !== undefined) {
    bodyParams["KMSKeyId"] = input.KMSKeyId;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Grant = (
  input: Grant,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Grantee !== undefined) {
    bodyParams["Grantee"] = serializeAws_restJson1_1Grantee(
      input.Grantee,
      context
    );
  }
  if (input.Permission !== undefined) {
    bodyParams["Permission"] = input.Permission;
  }
  return bodyParams;
};

const serializeAws_restJson1_1Grantee = (
  input: Grantee,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DisplayName !== undefined) {
    bodyParams["DisplayName"] = input.DisplayName;
  }
  if (input.EmailAddress !== undefined) {
    bodyParams["EmailAddress"] = input.EmailAddress;
  }
  if (input.ID !== undefined) {
    bodyParams["ID"] = input.ID;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  if (input.URI !== undefined) {
    bodyParams["URI"] = input.URI;
  }
  return bodyParams;
};

const serializeAws_restJson1_1InputSerialization = (
  input: InputSerialization,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.csv !== undefined) {
    bodyParams["csv"] = serializeAws_restJson1_1CSVInput(input.csv, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputLocation = (
  input: OutputLocation,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.S3 !== undefined) {
    bodyParams["S3"] = serializeAws_restJson1_1S3Location(input.S3, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1OutputSerialization = (
  input: OutputSerialization,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.csv !== undefined) {
    bodyParams["csv"] = serializeAws_restJson1_1CSVOutput(input.csv, context);
  }
  return bodyParams;
};

const serializeAws_restJson1_1S3Location = (
  input: S3Location,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.AccessControlList !== undefined) {
    bodyParams[
      "AccessControlList"
    ] = serializeAws_restJson1_1AccessControlPolicyList(
      input.AccessControlList,
      context
    );
  }
  if (input.BucketName !== undefined) {
    bodyParams["BucketName"] = input.BucketName;
  }
  if (input.CannedACL !== undefined) {
    bodyParams["CannedACL"] = input.CannedACL;
  }
  if (input.Encryption !== undefined) {
    bodyParams["Encryption"] = serializeAws_restJson1_1Encryption(
      input.Encryption,
      context
    );
  }
  if (input.Prefix !== undefined) {
    bodyParams["Prefix"] = input.Prefix;
  }
  if (input.StorageClass !== undefined) {
    bodyParams["StorageClass"] = input.StorageClass;
  }
  if (input.Tagging !== undefined) {
    bodyParams["Tagging"] = serializeAws_restJson1_1hashmap(
      input.Tagging,
      context
    );
  }
  if (input.UserMetadata !== undefined) {
    bodyParams["UserMetadata"] = serializeAws_restJson1_1hashmap(
      input.UserMetadata,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1SelectParameters = (
  input: SelectParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Expression !== undefined) {
    bodyParams["Expression"] = input.Expression;
  }
  if (input.ExpressionType !== undefined) {
    bodyParams["ExpressionType"] = input.ExpressionType;
  }
  if (input.InputSerialization !== undefined) {
    bodyParams[
      "InputSerialization"
    ] = serializeAws_restJson1_1InputSerialization(
      input.InputSerialization,
      context
    );
  }
  if (input.OutputSerialization !== undefined) {
    bodyParams[
      "OutputSerialization"
    ] = serializeAws_restJson1_1OutputSerialization(
      input.OutputSerialization,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1hashmap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1DataRetrievalPolicy = (
  input: DataRetrievalPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_restJson1_1DataRetrievalRulesList(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1DataRetrievalRule = (
  input: DataRetrievalRule,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BytesPerHour !== undefined) {
    bodyParams["BytesPerHour"] = input.BytesPerHour;
  }
  if (input.Strategy !== undefined) {
    bodyParams["Strategy"] = input.Strategy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1DataRetrievalRulesList = (
  input: Array<DataRetrievalRule>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1DataRetrievalRule(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1InventoryRetrievalJobInput = (
  input: InventoryRetrievalJobInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.EndDate !== undefined) {
    bodyParams["EndDate"] = input.EndDate;
  }
  if (input.Limit !== undefined) {
    bodyParams["Limit"] = input.Limit;
  }
  if (input.Marker !== undefined) {
    bodyParams["Marker"] = input.Marker;
  }
  if (input.StartDate !== undefined) {
    bodyParams["StartDate"] = input.StartDate;
  }
  return bodyParams;
};

const serializeAws_restJson1_1JobParameters = (
  input: JobParameters,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ArchiveId !== undefined) {
    bodyParams["ArchiveId"] = input.ArchiveId;
  }
  if (input.Description !== undefined) {
    bodyParams["Description"] = input.Description;
  }
  if (input.Format !== undefined) {
    bodyParams["Format"] = input.Format;
  }
  if (input.InventoryRetrievalParameters !== undefined) {
    bodyParams[
      "InventoryRetrievalParameters"
    ] = serializeAws_restJson1_1InventoryRetrievalJobInput(
      input.InventoryRetrievalParameters,
      context
    );
  }
  if (input.OutputLocation !== undefined) {
    bodyParams["OutputLocation"] = serializeAws_restJson1_1OutputLocation(
      input.OutputLocation,
      context
    );
  }
  if (input.RetrievalByteRange !== undefined) {
    bodyParams["RetrievalByteRange"] = input.RetrievalByteRange;
  }
  if (input.SNSTopic !== undefined) {
    bodyParams["SNSTopic"] = input.SNSTopic;
  }
  if (input.SelectParameters !== undefined) {
    bodyParams["SelectParameters"] = serializeAws_restJson1_1SelectParameters(
      input.SelectParameters,
      context
    );
  }
  if (input.Tier !== undefined) {
    bodyParams["Tier"] = input.Tier;
  }
  if (input.Type !== undefined) {
    bodyParams["Type"] = input.Type;
  }
  return bodyParams;
};

const serializeAws_restJson1_1NotificationEventList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagKeyList = (
  input: Array<string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1TagMap = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1VaultAccessPolicy = (
  input: VaultAccessPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VaultLockPolicy = (
  input: VaultLockPolicy,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
  }
  return bodyParams;
};

const serializeAws_restJson1_1VaultNotificationConfig = (
  input: VaultNotificationConfig,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.Events !== undefined) {
    bodyParams["Events"] = serializeAws_restJson1_1NotificationEventList(
      input.Events,
      context
    );
  }
  if (input.SNSTopic !== undefined) {
    bodyParams["SNSTopic"] = input.SNSTopic;
  }
  return bodyParams;
};

const deserializeAws_restJson1_1AccessControlPolicyList = (
  output: any,
  context: __SerdeContext
): Array<Grant> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Grant(entry, context)
  );
};

const deserializeAws_restJson1_1CSVInput = (
  output: any,
  context: __SerdeContext
): CSVInput => {
  let contents: any = {
    __type: "CSVInput",
    Comments: undefined,
    FieldDelimiter: undefined,
    FileHeaderInfo: undefined,
    QuoteCharacter: undefined,
    QuoteEscapeCharacter: undefined,
    RecordDelimiter: undefined
  };
  if (output.Comments !== undefined && output.Comments !== null) {
    contents.Comments = output.Comments;
  }
  if (output.FieldDelimiter !== undefined && output.FieldDelimiter !== null) {
    contents.FieldDelimiter = output.FieldDelimiter;
  }
  if (output.FileHeaderInfo !== undefined && output.FileHeaderInfo !== null) {
    contents.FileHeaderInfo = output.FileHeaderInfo;
  }
  if (output.QuoteCharacter !== undefined && output.QuoteCharacter !== null) {
    contents.QuoteCharacter = output.QuoteCharacter;
  }
  if (
    output.QuoteEscapeCharacter !== undefined &&
    output.QuoteEscapeCharacter !== null
  ) {
    contents.QuoteEscapeCharacter = output.QuoteEscapeCharacter;
  }
  if (output.RecordDelimiter !== undefined && output.RecordDelimiter !== null) {
    contents.RecordDelimiter = output.RecordDelimiter;
  }
  return contents;
};

const deserializeAws_restJson1_1CSVOutput = (
  output: any,
  context: __SerdeContext
): CSVOutput => {
  let contents: any = {
    __type: "CSVOutput",
    FieldDelimiter: undefined,
    QuoteCharacter: undefined,
    QuoteEscapeCharacter: undefined,
    QuoteFields: undefined,
    RecordDelimiter: undefined
  };
  if (output.FieldDelimiter !== undefined && output.FieldDelimiter !== null) {
    contents.FieldDelimiter = output.FieldDelimiter;
  }
  if (output.QuoteCharacter !== undefined && output.QuoteCharacter !== null) {
    contents.QuoteCharacter = output.QuoteCharacter;
  }
  if (
    output.QuoteEscapeCharacter !== undefined &&
    output.QuoteEscapeCharacter !== null
  ) {
    contents.QuoteEscapeCharacter = output.QuoteEscapeCharacter;
  }
  if (output.QuoteFields !== undefined && output.QuoteFields !== null) {
    contents.QuoteFields = output.QuoteFields;
  }
  if (output.RecordDelimiter !== undefined && output.RecordDelimiter !== null) {
    contents.RecordDelimiter = output.RecordDelimiter;
  }
  return contents;
};

const deserializeAws_restJson1_1Encryption = (
  output: any,
  context: __SerdeContext
): Encryption => {
  let contents: any = {
    __type: "Encryption",
    EncryptionType: undefined,
    KMSContext: undefined,
    KMSKeyId: undefined
  };
  if (output.EncryptionType !== undefined && output.EncryptionType !== null) {
    contents.EncryptionType = output.EncryptionType;
  }
  if (output.KMSContext !== undefined && output.KMSContext !== null) {
    contents.KMSContext = output.KMSContext;
  }
  if (output.KMSKeyId !== undefined && output.KMSKeyId !== null) {
    contents.KMSKeyId = output.KMSKeyId;
  }
  return contents;
};

const deserializeAws_restJson1_1GlacierJobDescription = (
  output: any,
  context: __SerdeContext
): GlacierJobDescription => {
  let contents: any = {
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
  if (output.Action !== undefined && output.Action !== null) {
    contents.Action = output.Action;
  }
  if (output.ArchiveId !== undefined && output.ArchiveId !== null) {
    contents.ArchiveId = output.ArchiveId;
  }
  if (
    output.ArchiveSHA256TreeHash !== undefined &&
    output.ArchiveSHA256TreeHash !== null
  ) {
    contents.ArchiveSHA256TreeHash = output.ArchiveSHA256TreeHash;
  }
  if (
    output.ArchiveSizeInBytes !== undefined &&
    output.ArchiveSizeInBytes !== null
  ) {
    contents.ArchiveSizeInBytes = output.ArchiveSizeInBytes;
  }
  if (output.Completed !== undefined && output.Completed !== null) {
    contents.Completed = output.Completed;
  }
  if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
    contents.CompletionDate = output.CompletionDate;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = output.CreationDate;
  }
  if (
    output.InventoryRetrievalParameters !== undefined &&
    output.InventoryRetrievalParameters !== null
  ) {
    contents.InventoryRetrievalParameters = deserializeAws_restJson1_1InventoryRetrievalJobDescription(
      output.InventoryRetrievalParameters,
      context
    );
  }
  if (
    output.InventorySizeInBytes !== undefined &&
    output.InventorySizeInBytes !== null
  ) {
    contents.InventorySizeInBytes = output.InventorySizeInBytes;
  }
  if (output.JobDescription !== undefined && output.JobDescription !== null) {
    contents.JobDescription = output.JobDescription;
  }
  if (output.JobId !== undefined && output.JobId !== null) {
    contents.JobId = output.JobId;
  }
  if (output.JobOutputPath !== undefined && output.JobOutputPath !== null) {
    contents.JobOutputPath = output.JobOutputPath;
  }
  if (output.OutputLocation !== undefined && output.OutputLocation !== null) {
    contents.OutputLocation = deserializeAws_restJson1_1OutputLocation(
      output.OutputLocation,
      context
    );
  }
  if (
    output.RetrievalByteRange !== undefined &&
    output.RetrievalByteRange !== null
  ) {
    contents.RetrievalByteRange = output.RetrievalByteRange;
  }
  if (output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null) {
    contents.SHA256TreeHash = output.SHA256TreeHash;
  }
  if (output.SNSTopic !== undefined && output.SNSTopic !== null) {
    contents.SNSTopic = output.SNSTopic;
  }
  if (
    output.SelectParameters !== undefined &&
    output.SelectParameters !== null
  ) {
    contents.SelectParameters = deserializeAws_restJson1_1SelectParameters(
      output.SelectParameters,
      context
    );
  }
  if (output.StatusCode !== undefined && output.StatusCode !== null) {
    contents.StatusCode = output.StatusCode;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  if (output.Tier !== undefined && output.Tier !== null) {
    contents.Tier = output.Tier;
  }
  if (output.VaultARN !== undefined && output.VaultARN !== null) {
    contents.VaultARN = output.VaultARN;
  }
  return contents;
};

const deserializeAws_restJson1_1Grant = (
  output: any,
  context: __SerdeContext
): Grant => {
  let contents: any = {
    __type: "Grant",
    Grantee: undefined,
    Permission: undefined
  };
  if (output.Grantee !== undefined && output.Grantee !== null) {
    contents.Grantee = deserializeAws_restJson1_1Grantee(
      output.Grantee,
      context
    );
  }
  if (output.Permission !== undefined && output.Permission !== null) {
    contents.Permission = output.Permission;
  }
  return contents;
};

const deserializeAws_restJson1_1Grantee = (
  output: any,
  context: __SerdeContext
): Grantee => {
  let contents: any = {
    __type: "Grantee",
    DisplayName: undefined,
    EmailAddress: undefined,
    ID: undefined,
    Type: undefined,
    URI: undefined
  };
  if (output.DisplayName !== undefined && output.DisplayName !== null) {
    contents.DisplayName = output.DisplayName;
  }
  if (output.EmailAddress !== undefined && output.EmailAddress !== null) {
    contents.EmailAddress = output.EmailAddress;
  }
  if (output.ID !== undefined && output.ID !== null) {
    contents.ID = output.ID;
  }
  if (output.Type !== undefined && output.Type !== null) {
    contents.Type = output.Type;
  }
  if (output.URI !== undefined && output.URI !== null) {
    contents.URI = output.URI;
  }
  return contents;
};

const deserializeAws_restJson1_1InputSerialization = (
  output: any,
  context: __SerdeContext
): InputSerialization => {
  let contents: any = {
    __type: "InputSerialization",
    csv: undefined
  };
  if (output.csv !== undefined && output.csv !== null) {
    contents.csv = deserializeAws_restJson1_1CSVInput(output.csv, context);
  }
  return contents;
};

const deserializeAws_restJson1_1InventoryRetrievalJobDescription = (
  output: any,
  context: __SerdeContext
): InventoryRetrievalJobDescription => {
  let contents: any = {
    __type: "InventoryRetrievalJobDescription",
    EndDate: undefined,
    Format: undefined,
    Limit: undefined,
    Marker: undefined,
    StartDate: undefined
  };
  if (output.EndDate !== undefined && output.EndDate !== null) {
    contents.EndDate = output.EndDate;
  }
  if (output.Format !== undefined && output.Format !== null) {
    contents.Format = output.Format;
  }
  if (output.Limit !== undefined && output.Limit !== null) {
    contents.Limit = output.Limit;
  }
  if (output.Marker !== undefined && output.Marker !== null) {
    contents.Marker = output.Marker;
  }
  if (output.StartDate !== undefined && output.StartDate !== null) {
    contents.StartDate = output.StartDate;
  }
  return contents;
};

const deserializeAws_restJson1_1OutputLocation = (
  output: any,
  context: __SerdeContext
): OutputLocation => {
  let contents: any = {
    __type: "OutputLocation",
    S3: undefined
  };
  if (output.S3 !== undefined && output.S3 !== null) {
    contents.S3 = deserializeAws_restJson1_1S3Location(output.S3, context);
  }
  return contents;
};

const deserializeAws_restJson1_1OutputSerialization = (
  output: any,
  context: __SerdeContext
): OutputSerialization => {
  let contents: any = {
    __type: "OutputSerialization",
    csv: undefined
  };
  if (output.csv !== undefined && output.csv !== null) {
    contents.csv = deserializeAws_restJson1_1CSVOutput(output.csv, context);
  }
  return contents;
};

const deserializeAws_restJson1_1S3Location = (
  output: any,
  context: __SerdeContext
): S3Location => {
  let contents: any = {
    __type: "S3Location",
    AccessControlList: undefined,
    BucketName: undefined,
    CannedACL: undefined,
    Encryption: undefined,
    Prefix: undefined,
    StorageClass: undefined,
    Tagging: undefined,
    UserMetadata: undefined
  };
  if (
    output.AccessControlList !== undefined &&
    output.AccessControlList !== null
  ) {
    contents.AccessControlList = deserializeAws_restJson1_1AccessControlPolicyList(
      output.AccessControlList,
      context
    );
  }
  if (output.BucketName !== undefined && output.BucketName !== null) {
    contents.BucketName = output.BucketName;
  }
  if (output.CannedACL !== undefined && output.CannedACL !== null) {
    contents.CannedACL = output.CannedACL;
  }
  if (output.Encryption !== undefined && output.Encryption !== null) {
    contents.Encryption = deserializeAws_restJson1_1Encryption(
      output.Encryption,
      context
    );
  }
  if (output.Prefix !== undefined && output.Prefix !== null) {
    contents.Prefix = output.Prefix;
  }
  if (output.StorageClass !== undefined && output.StorageClass !== null) {
    contents.StorageClass = output.StorageClass;
  }
  if (output.Tagging !== undefined && output.Tagging !== null) {
    contents.Tagging = deserializeAws_restJson1_1hashmap(
      output.Tagging,
      context
    );
  }
  if (output.UserMetadata !== undefined && output.UserMetadata !== null) {
    contents.UserMetadata = deserializeAws_restJson1_1hashmap(
      output.UserMetadata,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1SelectParameters = (
  output: any,
  context: __SerdeContext
): SelectParameters => {
  let contents: any = {
    __type: "SelectParameters",
    Expression: undefined,
    ExpressionType: undefined,
    InputSerialization: undefined,
    OutputSerialization: undefined
  };
  if (output.Expression !== undefined && output.Expression !== null) {
    contents.Expression = output.Expression;
  }
  if (output.ExpressionType !== undefined && output.ExpressionType !== null) {
    contents.ExpressionType = output.ExpressionType;
  }
  if (
    output.InputSerialization !== undefined &&
    output.InputSerialization !== null
  ) {
    contents.InputSerialization = deserializeAws_restJson1_1InputSerialization(
      output.InputSerialization,
      context
    );
  }
  if (
    output.OutputSerialization !== undefined &&
    output.OutputSerialization !== null
  ) {
    contents.OutputSerialization = deserializeAws_restJson1_1OutputSerialization(
      output.OutputSerialization,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1hashmap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1DataRetrievalPolicy = (
  output: any,
  context: __SerdeContext
): DataRetrievalPolicy => {
  let contents: any = {
    __type: "DataRetrievalPolicy",
    Rules: undefined
  };
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_restJson1_1DataRetrievalRulesList(
      output.Rules,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1DataRetrievalRule = (
  output: any,
  context: __SerdeContext
): DataRetrievalRule => {
  let contents: any = {
    __type: "DataRetrievalRule",
    BytesPerHour: undefined,
    Strategy: undefined
  };
  if (output.BytesPerHour !== undefined && output.BytesPerHour !== null) {
    contents.BytesPerHour = output.BytesPerHour;
  }
  if (output.Strategy !== undefined && output.Strategy !== null) {
    contents.Strategy = output.Strategy;
  }
  return contents;
};

const deserializeAws_restJson1_1DataRetrievalRulesList = (
  output: any,
  context: __SerdeContext
): Array<DataRetrievalRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DataRetrievalRule(entry, context)
  );
};

const deserializeAws_restJson1_1DescribeVaultOutput = (
  output: any,
  context: __SerdeContext
): DescribeVaultOutput => {
  let contents: any = {
    __type: "DescribeVaultOutput",
    CreationDate: undefined,
    LastInventoryDate: undefined,
    NumberOfArchives: undefined,
    SizeInBytes: undefined,
    VaultARN: undefined,
    VaultName: undefined
  };
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = output.CreationDate;
  }
  if (
    output.LastInventoryDate !== undefined &&
    output.LastInventoryDate !== null
  ) {
    contents.LastInventoryDate = output.LastInventoryDate;
  }
  if (
    output.NumberOfArchives !== undefined &&
    output.NumberOfArchives !== null
  ) {
    contents.NumberOfArchives = output.NumberOfArchives;
  }
  if (output.SizeInBytes !== undefined && output.SizeInBytes !== null) {
    contents.SizeInBytes = output.SizeInBytes;
  }
  if (output.VaultARN !== undefined && output.VaultARN !== null) {
    contents.VaultARN = output.VaultARN;
  }
  if (output.VaultName !== undefined && output.VaultName !== null) {
    contents.VaultName = output.VaultName;
  }
  return contents;
};

const deserializeAws_restJson1_1JobList = (
  output: any,
  context: __SerdeContext
): Array<GlacierJobDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GlacierJobDescription(entry, context)
  );
};

const deserializeAws_restJson1_1NotificationEventList = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1PartList = (
  output: any,
  context: __SerdeContext
): Array<PartListElement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1PartListElement(entry, context)
  );
};

const deserializeAws_restJson1_1PartListElement = (
  output: any,
  context: __SerdeContext
): PartListElement => {
  let contents: any = {
    __type: "PartListElement",
    RangeInBytes: undefined,
    SHA256TreeHash: undefined
  };
  if (output.RangeInBytes !== undefined && output.RangeInBytes !== null) {
    contents.RangeInBytes = output.RangeInBytes;
  }
  if (output.SHA256TreeHash !== undefined && output.SHA256TreeHash !== null) {
    contents.SHA256TreeHash = output.SHA256TreeHash;
  }
  return contents;
};

const deserializeAws_restJson1_1ProvisionedCapacityDescription = (
  output: any,
  context: __SerdeContext
): ProvisionedCapacityDescription => {
  let contents: any = {
    __type: "ProvisionedCapacityDescription",
    CapacityId: undefined,
    ExpirationDate: undefined,
    StartDate: undefined
  };
  if (output.CapacityId !== undefined && output.CapacityId !== null) {
    contents.CapacityId = output.CapacityId;
  }
  if (output.ExpirationDate !== undefined && output.ExpirationDate !== null) {
    contents.ExpirationDate = output.ExpirationDate;
  }
  if (output.StartDate !== undefined && output.StartDate !== null) {
    contents.StartDate = output.StartDate;
  }
  return contents;
};

const deserializeAws_restJson1_1ProvisionedCapacityList = (
  output: any,
  context: __SerdeContext
): Array<ProvisionedCapacityDescription> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProvisionedCapacityDescription(entry, context)
  );
};

const deserializeAws_restJson1_1TagMap = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1UploadListElement = (
  output: any,
  context: __SerdeContext
): UploadListElement => {
  let contents: any = {
    __type: "UploadListElement",
    ArchiveDescription: undefined,
    CreationDate: undefined,
    MultipartUploadId: undefined,
    PartSizeInBytes: undefined,
    VaultARN: undefined
  };
  if (
    output.ArchiveDescription !== undefined &&
    output.ArchiveDescription !== null
  ) {
    contents.ArchiveDescription = output.ArchiveDescription;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = output.CreationDate;
  }
  if (
    output.MultipartUploadId !== undefined &&
    output.MultipartUploadId !== null
  ) {
    contents.MultipartUploadId = output.MultipartUploadId;
  }
  if (output.PartSizeInBytes !== undefined && output.PartSizeInBytes !== null) {
    contents.PartSizeInBytes = output.PartSizeInBytes;
  }
  if (output.VaultARN !== undefined && output.VaultARN !== null) {
    contents.VaultARN = output.VaultARN;
  }
  return contents;
};

const deserializeAws_restJson1_1UploadsList = (
  output: any,
  context: __SerdeContext
): Array<UploadListElement> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1UploadListElement(entry, context)
  );
};

const deserializeAws_restJson1_1VaultAccessPolicy = (
  output: any,
  context: __SerdeContext
): VaultAccessPolicy => {
  let contents: any = {
    __type: "VaultAccessPolicy",
    Policy: undefined
  };
  if (output.Policy !== undefined && output.Policy !== null) {
    contents.Policy = output.Policy;
  }
  return contents;
};

const deserializeAws_restJson1_1VaultList = (
  output: any,
  context: __SerdeContext
): Array<DescribeVaultOutput> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1DescribeVaultOutput(entry, context)
  );
};

const deserializeAws_restJson1_1VaultNotificationConfig = (
  output: any,
  context: __SerdeContext
): VaultNotificationConfig => {
  let contents: any = {
    __type: "VaultNotificationConfig",
    Events: undefined,
    SNSTopic: undefined
  };
  if (output.Events !== undefined && output.Events !== null) {
    contents.Events = deserializeAws_restJson1_1NotificationEventList(
      output.Events,
      context
    );
  }
  if (output.SNSTopic !== undefined && output.SNSTopic !== null) {
    contents.SNSTopic = output.SNSTopic;
  }
  return contents;
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any,
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> => {
  return collectBody(streamBody, context).then(body =>
    context.utf8Encoder(body)
  );
};

const parseBody = (streamBody: any, context: __SerdeContext): any => {
  return collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });
};
