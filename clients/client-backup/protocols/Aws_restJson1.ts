import { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "../commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "../commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput } from "../commands/CreateBackupVaultCommand";
import { DeleteBackupPlanCommandInput, DeleteBackupPlanCommandOutput } from "../commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "../commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "../commands/DeleteBackupVaultAccessPolicyCommand";
import { DeleteBackupVaultCommandInput, DeleteBackupVaultCommandOutput } from "../commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "../commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "../commands/DeleteRecoveryPointCommand";
import { DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput } from "../commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "../commands/DescribeBackupVaultCommand";
import { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "../commands/DescribeCopyJobCommand";
import {
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "../commands/DescribeGlobalSettingsCommand";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "../commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "../commands/DescribeRecoveryPointCommand";
import {
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "../commands/DescribeRegionSettingsCommand";
import { DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput } from "../commands/DescribeRestoreJobCommand";
import {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "../commands/DisassociateRecoveryPointCommand";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "../commands/ExportBackupPlanTemplateCommand";
import { GetBackupPlanCommandInput, GetBackupPlanCommandOutput } from "../commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "../commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "../commands/GetBackupPlanFromTemplateCommand";
import { GetBackupSelectionCommandInput, GetBackupSelectionCommandOutput } from "../commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "../commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "../commands/GetBackupVaultNotificationsCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "../commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "../commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "../commands/ListBackupJobsCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "../commands/ListBackupPlansCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "../commands/ListBackupVaultsCommand";
import { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "../commands/ListCopyJobsCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "../commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "../commands/ListRestoreJobsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "../commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "../commands/PutBackupVaultNotificationsCommand";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "../commands/StartBackupJobCommand";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "../commands/StartCopyJobCommand";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "../commands/StartRestoreJobCommand";
import { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "../commands/StopBackupJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "../commands/UpdateBackupPlanCommand";
import {
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "../commands/UpdateGlobalSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "../commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "../commands/UpdateRegionSettingsCommand";
import {
  AdvancedBackupSetting,
  AlreadyExistsException,
  BackupJob,
  BackupPlan,
  BackupPlanInput,
  BackupPlanTemplatesListMember,
  BackupPlansListMember,
  BackupRule,
  BackupRuleInput,
  BackupSelection,
  BackupSelectionsListMember,
  BackupVaultEvent,
  BackupVaultListMember,
  CalculatedLifecycle,
  Condition,
  CopyAction,
  CopyJob,
  DependencyFailureException,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidResourceStateException,
  Lifecycle,
  LimitExceededException,
  MissingParameterValueException,
  ProtectedResource,
  RecoveryPointByBackupVault,
  RecoveryPointByResource,
  RecoveryPointCreator,
  ResourceNotFoundException,
  RestoreJobsListMember,
  ServiceUnavailableException,
} from "../models/models_0";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  expectBoolean as __expectBoolean,
  expectInt as __expectInt,
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

export const serializeAws_restJson1CreateBackupPlanCommand = async (
  input: CreateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans";
  let body: any;
  body = JSON.stringify({
    ...(input.BackupPlan !== undefined &&
      input.BackupPlan !== null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
    ...(input.BackupPlanTags !== undefined &&
      input.BackupPlanTags !== null && { BackupPlanTags: serializeAws_restJson1Tags(input.BackupPlanTags, context) }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
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

export const serializeAws_restJson1CreateBackupSelectionCommand = async (
  input: CreateBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackupSelection !== undefined &&
      input.BackupSelection !== null && {
        BackupSelection: serializeAws_restJson1BackupSelection(input.BackupSelection, context),
      }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
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

export const serializeAws_restJson1CreateBackupVaultCommand = async (
  input: CreateBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackupVaultTags !== undefined &&
      input.BackupVaultTags !== null && {
        BackupVaultTags: serializeAws_restJson1Tags(input.BackupVaultTags, context),
      }),
    ...(input.CreatorRequestId !== undefined &&
      input.CreatorRequestId !== null && { CreatorRequestId: input.CreatorRequestId }),
    ...(input.EncryptionKeyArn !== undefined &&
      input.EncryptionKeyArn !== null && { EncryptionKeyArn: input.EncryptionKeyArn }),
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

export const serializeAws_restJson1DeleteBackupPlanCommand = async (
  input: DeleteBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
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

export const serializeAws_restJson1DeleteBackupSelectionCommand = async (
  input: DeleteBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue: string = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SelectionId.");
    }
    resolvedPath = resolvedPath.replace("{SelectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
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

export const serializeAws_restJson1DeleteBackupVaultCommand = async (
  input: DeleteBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (
  input: DeleteBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (
  input: DeleteBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1DeleteRecoveryPointCommand = async (
  input: DeleteRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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

export const serializeAws_restJson1DescribeBackupJobCommand = async (
  input: DescribeBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue: string = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupJobId.");
    }
    resolvedPath = resolvedPath.replace("{BackupJobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
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

export const serializeAws_restJson1DescribeBackupVaultCommand = async (
  input: DescribeBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1DescribeCopyJobCommand = async (
  input: DescribeCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs/{CopyJobId}";
  if (input.CopyJobId !== undefined) {
    const labelValue: string = input.CopyJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CopyJobId.");
    }
    resolvedPath = resolvedPath.replace("{CopyJobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: CopyJobId.");
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

export const serializeAws_restJson1DescribeGlobalSettingsCommand = async (
  input: DescribeGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-settings";
  let body: any;
  body = "";
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

export const serializeAws_restJson1DescribeProtectedResourceCommand = async (
  input: DescribeProtectedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
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

export const serializeAws_restJson1DescribeRecoveryPointCommand = async (
  input: DescribeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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

export const serializeAws_restJson1DescribeRegionSettingsCommand = async (
  input: DescribeRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account-settings";
  let body: any;
  body = "";
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

export const serializeAws_restJson1DescribeRestoreJobCommand = async (
  input: DescribeRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs/{RestoreJobId}";
  if (input.RestoreJobId !== undefined) {
    const labelValue: string = input.RestoreJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RestoreJobId.");
    }
    resolvedPath = resolvedPath.replace("{RestoreJobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RestoreJobId.");
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

export const serializeAws_restJson1DisassociateRecoveryPointCommand = async (
  input: DisassociateRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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

export const serializeAws_restJson1ExportBackupPlanTemplateCommand = async (
  input: ExportBackupPlanTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/toTemplate";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
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

export const serializeAws_restJson1GetBackupPlanCommand = async (
  input: GetBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {
    ...(input.VersionId !== undefined && { versionId: input.VersionId }),
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

export const serializeAws_restJson1GetBackupPlanFromJSONCommand = async (
  input: GetBackupPlanFromJSONCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/template/json/toPlan";
  let body: any;
  body = JSON.stringify({
    ...(input.BackupPlanTemplateJson !== undefined &&
      input.BackupPlanTemplateJson !== null && { BackupPlanTemplateJson: input.BackupPlanTemplateJson }),
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

export const serializeAws_restJson1GetBackupPlanFromTemplateCommand = async (
  input: GetBackupPlanFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/template/plans/{BackupPlanTemplateId}/toPlan";
  if (input.BackupPlanTemplateId !== undefined) {
    const labelValue: string = input.BackupPlanTemplateId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanTemplateId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanTemplateId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanTemplateId.");
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

export const serializeAws_restJson1GetBackupSelectionCommand = async (
  input: GetBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue: string = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: SelectionId.");
    }
    resolvedPath = resolvedPath.replace("{SelectionId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
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

export const serializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (
  input: GetBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1GetBackupVaultNotificationsCommand = async (
  input: GetBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
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

export const serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (
  input: GetRecoveryPointRestoreMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
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

export const serializeAws_restJson1GetSupportedResourceTypesCommand = async (
  input: GetSupportedResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/supported-resource-types";
  let body: any;
  body = "";
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

export const serializeAws_restJson1ListBackupJobsCommand = async (
  input: ListBackupJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByState !== undefined && { state: input.ByState }),
    ...(input.ByBackupVaultName !== undefined && { backupVaultName: input.ByBackupVaultName }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
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

export const serializeAws_restJson1ListBackupPlansCommand = async (
  input: ListBackupPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.IncludeDeleted !== undefined && { includeDeleted: input.IncludeDeleted.toString() }),
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

export const serializeAws_restJson1ListBackupPlanTemplatesCommand = async (
  input: ListBackupPlanTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/template/plans";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListBackupPlanVersionsCommand = async (
  input: ListBackupPlanVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/versions";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListBackupSelectionsCommand = async (
  input: ListBackupSelectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListBackupVaultsCommand = async (
  input: ListBackupVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListCopyJobsCommand = async (
  input: ListCopyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByState !== undefined && { state: input.ByState }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByDestinationVaultArn !== undefined && { destinationVaultArn: input.ByDestinationVaultArn }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
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

export const serializeAws_restJson1ListProtectedResourcesCommand = async (
  input: ListProtectedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (
  input: ListRecoveryPointsByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByResourceArn !== undefined && { resourceArn: input.ByResourceArn }),
    ...(input.ByResourceType !== undefined && { resourceType: input.ByResourceType }),
    ...(input.ByBackupPlanId !== undefined && { backupPlanId: input.ByBackupPlanId }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
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

export const serializeAws_restJson1ListRecoveryPointsByResourceCommand = async (
  input: ListRecoveryPointsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}/recovery-points";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1ListRestoreJobsCommand = async (
  input: ListRestoreJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs";
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
    ...(input.ByAccountId !== undefined && { accountId: input.ByAccountId }),
    ...(input.ByCreatedBefore !== undefined && {
      createdBefore: (input.ByCreatedBefore.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByCreatedAfter !== undefined && {
      createdAfter: (input.ByCreatedAfter.toISOString().split(".")[0] + "Z").toString(),
    }),
    ...(input.ByStatus !== undefined && { status: input.ByStatus }),
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

export const serializeAws_restJson1ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {
    ...(input.NextToken !== undefined && { nextToken: input.NextToken }),
    ...(input.MaxResults !== undefined && { maxResults: input.MaxResults.toString() }),
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

export const serializeAws_restJson1PutBackupVaultAccessPolicyCommand = async (
  input: PutBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Policy !== undefined && input.Policy !== null && { Policy: input.Policy }),
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

export const serializeAws_restJson1PutBackupVaultNotificationsCommand = async (
  input: PutBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackupVaultEvents !== undefined &&
      input.BackupVaultEvents !== null && {
        BackupVaultEvents: serializeAws_restJson1BackupVaultEvents(input.BackupVaultEvents, context),
      }),
    ...(input.SNSTopicArn !== undefined && input.SNSTopicArn !== null && { SNSTopicArn: input.SNSTopicArn }),
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

export const serializeAws_restJson1StartBackupJobCommand = async (
  input: StartBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.BackupOptions !== undefined &&
      input.BackupOptions !== null && {
        BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
      }),
    ...(input.BackupVaultName !== undefined &&
      input.BackupVaultName !== null && { BackupVaultName: input.BackupVaultName }),
    ...(input.CompleteWindowMinutes !== undefined &&
      input.CompleteWindowMinutes !== null && { CompleteWindowMinutes: input.CompleteWindowMinutes }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags !== undefined &&
      input.RecoveryPointTags !== null && {
        RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
      }),
    ...(input.ResourceArn !== undefined && input.ResourceArn !== null && { ResourceArn: input.ResourceArn }),
    ...(input.StartWindowMinutes !== undefined &&
      input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }),
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

export const serializeAws_restJson1StartCopyJobCommand = async (
  input: StartCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.DestinationBackupVaultArn !== undefined &&
      input.DestinationBackupVaultArn !== null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointArn !== undefined &&
      input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.SourceBackupVaultName !== undefined &&
      input.SourceBackupVaultName !== null && { SourceBackupVaultName: input.SourceBackupVaultName }),
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

export const serializeAws_restJson1StartRestoreJobCommand = async (
  input: StartRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs";
  let body: any;
  body = JSON.stringify({
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken !== undefined &&
      input.IdempotencyToken !== null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Metadata !== undefined &&
      input.Metadata !== null && { Metadata: serializeAws_restJson1Metadata(input.Metadata, context) }),
    ...(input.RecoveryPointArn !== undefined &&
      input.RecoveryPointArn !== null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
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

export const serializeAws_restJson1StopBackupJobCommand = async (
  input: StopBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue: string = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupJobId.");
    }
    resolvedPath = resolvedPath.replace("{BackupJobId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
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

export const serializeAws_restJson1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Tags !== undefined && input.Tags !== null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/untag/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: ResourceArn.");
    }
    resolvedPath = resolvedPath.replace("{ResourceArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeyList !== undefined &&
      input.TagKeyList !== null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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

export const serializeAws_restJson1UpdateBackupPlanCommand = async (
  input: UpdateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupPlanId.");
    }
    resolvedPath = resolvedPath.replace("{BackupPlanId}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.BackupPlan !== undefined &&
      input.BackupPlan !== null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
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

export const serializeAws_restJson1UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-settings";
  let body: any;
  body = JSON.stringify({
    ...(input.GlobalSettings !== undefined &&
      input.GlobalSettings !== null && {
        GlobalSettings: serializeAws_restJson1GlobalSettings(input.GlobalSettings, context),
      }),
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

export const serializeAws_restJson1UpdateRecoveryPointLifecycleCommand = async (
  input: UpdateRecoveryPointLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: BackupVaultName.");
    }
    resolvedPath = resolvedPath.replace("{BackupVaultName}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: RecoveryPointArn.");
    }
    resolvedPath = resolvedPath.replace("{RecoveryPointArn}", __extendedEncodeURIComponent(labelValue));
  } else {
    throw new Error("No value provided for input HTTP label: RecoveryPointArn.");
  }
  let body: any;
  body = JSON.stringify({
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
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

export const serializeAws_restJson1UpdateRegionSettingsCommand = async (
  input: UpdateRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account-settings";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceTypeOptInPreference !== undefined &&
      input.ResourceTypeOptInPreference !== null && {
        ResourceTypeOptInPreference: serializeAws_restJson1ResourceTypeOptInPreference(
          input.ResourceTypeOptInPreference,
          context
        ),
      }),
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

export const deserializeAws_restJson1CreateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupPlanCommandError(output, context);
  }
  const contents: CreateBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = __expectString(data.VersionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupSelectionCommandError(output, context);
  }
  const contents: CreateBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanId: undefined,
    CreationDate: undefined,
    SelectionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = __expectString(data.SelectionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupVaultCommandError(output, context);
  }
  const contents: CreateBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1CreateBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupPlanCommandError(output, context);
  }
  const contents: DeleteBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    DeletionDate: undefined,
    VersionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = __expectString(data.VersionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupSelectionCommandError(output, context);
  }
  const contents: DeleteBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultCommandError(output, context);
  }
  const contents: DeleteBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: DeleteBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError(output, context);
  }
  const contents: DeleteBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecoveryPointCommandError(output, context);
  }
  const contents: DeleteRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DeleteRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupJobCommandError(output, context);
  }
  const contents: DescribeBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountId: undefined,
    BackupJobId: undefined,
    BackupOptions: undefined,
    BackupSizeInBytes: undefined,
    BackupType: undefined,
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    BytesTransferred: undefined,
    CompletionDate: undefined,
    CreatedBy: undefined,
    CreationDate: undefined,
    ExpectedCompletionDate: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
    StartBy: undefined,
    State: undefined,
    StatusMessage: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountId !== undefined && data.AccountId !== null) {
    contents.AccountId = __expectString(data.AccountId);
  }
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = __expectString(data.BackupJobId);
  }
  if (data.BackupOptions !== undefined && data.BackupOptions !== null) {
    contents.BackupOptions = deserializeAws_restJson1BackupOptions(data.BackupOptions, context);
  }
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = __expectInt(data.BackupSizeInBytes);
  }
  if (data.BackupType !== undefined && data.BackupType !== null) {
    contents.BackupType = __expectString(data.BackupType);
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.BytesTransferred !== undefined && data.BytesTransferred !== null) {
    contents.BytesTransferred = __expectInt(data.BytesTransferred);
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.ExpectedCompletionDate !== undefined && data.ExpectedCompletionDate !== null) {
    contents.ExpectedCompletionDate = new Date(Math.round(data.ExpectedCompletionDate * 1000));
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = __expectString(data.PercentDone);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.StartBy !== undefined && data.StartBy !== null) {
    contents.StartBy = new Date(Math.round(data.StartBy * 1000));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = __expectString(data.State);
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupVaultCommandError(output, context);
  }
  const contents: DescribeBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    EncryptionKeyArn: undefined,
    NumberOfRecoveryPoints: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.NumberOfRecoveryPoints !== undefined && data.NumberOfRecoveryPoints !== null) {
    contents.NumberOfRecoveryPoints = __expectInt(data.NumberOfRecoveryPoints);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCopyJobCommandError(output, context);
  }
  const contents: DescribeCopyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    CopyJob: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJob !== undefined && data.CopyJob !== null) {
    contents.CopyJob = deserializeAws_restJson1CopyJob(data.CopyJob, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeCopyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGlobalSettingsCommandError(output, context);
  }
  const contents: DescribeGlobalSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    GlobalSettings: undefined,
    LastUpdateTime: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.GlobalSettings !== undefined && data.GlobalSettings !== null) {
    contents.GlobalSettings = deserializeAws_restJson1GlobalSettings(data.GlobalSettings, context);
  }
  if (data.LastUpdateTime !== undefined && data.LastUpdateTime !== null) {
    contents.LastUpdateTime = new Date(Math.round(data.LastUpdateTime * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeProtectedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProtectedResourceCommandError(output, context);
  }
  const contents: DescribeProtectedResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    LastBackupTime: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.LastBackupTime !== undefined && data.LastBackupTime !== null) {
    contents.LastBackupTime = new Date(Math.round(data.LastBackupTime * 1000));
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeProtectedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecoveryPointCommandError(output, context);
  }
  const contents: DescribeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupSizeInBytes: undefined,
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CalculatedLifecycle: undefined,
    CompletionDate: undefined,
    CreatedBy: undefined,
    CreationDate: undefined,
    EncryptionKeyArn: undefined,
    IamRoleArn: undefined,
    IsEncrypted: undefined,
    LastRestoreTime: undefined,
    Lifecycle: undefined,
    RecoveryPointArn: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
    SourceBackupVaultArn: undefined,
    Status: undefined,
    StorageClass: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = __expectInt(data.BackupSizeInBytes);
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.IsEncrypted !== undefined && data.IsEncrypted !== null) {
    contents.IsEncrypted = __expectBoolean(data.IsEncrypted);
  }
  if (data.LastRestoreTime !== undefined && data.LastRestoreTime !== null) {
    contents.LastRestoreTime = new Date(Math.round(data.LastRestoreTime * 1000));
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.SourceBackupVaultArn !== undefined && data.SourceBackupVaultArn !== null) {
    contents.SourceBackupVaultArn = __expectString(data.SourceBackupVaultArn);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StorageClass !== undefined && data.StorageClass !== null) {
    contents.StorageClass = __expectString(data.StorageClass);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRegionSettingsCommandError(output, context);
  }
  const contents: DescribeRegionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceTypeOptInPreference: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ResourceTypeOptInPreference !== undefined && data.ResourceTypeOptInPreference !== null) {
    contents.ResourceTypeOptInPreference = deserializeAws_restJson1ResourceTypeOptInPreference(
      data.ResourceTypeOptInPreference,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRegionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRestoreJobCommandError(output, context);
  }
  const contents: DescribeRestoreJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    AccountId: undefined,
    BackupSizeInBytes: undefined,
    CompletionDate: undefined,
    CreatedResourceArn: undefined,
    CreationDate: undefined,
    ExpectedCompletionTimeMinutes: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    ResourceType: undefined,
    RestoreJobId: undefined,
    Status: undefined,
    StatusMessage: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AccountId !== undefined && data.AccountId !== null) {
    contents.AccountId = __expectString(data.AccountId);
  }
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = __expectInt(data.BackupSizeInBytes);
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedResourceArn !== undefined && data.CreatedResourceArn !== null) {
    contents.CreatedResourceArn = __expectString(data.CreatedResourceArn);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.ExpectedCompletionTimeMinutes !== undefined && data.ExpectedCompletionTimeMinutes !== null) {
    contents.ExpectedCompletionTimeMinutes = __expectInt(data.ExpectedCompletionTimeMinutes);
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = __expectString(data.PercentDone);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = __expectString(data.RestoreJobId);
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DescribeRestoreJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DisassociateRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRecoveryPointCommandError(output, context);
  }
  const contents: DisassociateRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1DisassociateRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      response = {
        ...(await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ExportBackupPlanTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommandError(output, context);
  }
  const contents: ExportBackupPlanTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanTemplateJson: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanTemplateJson !== undefined && data.BackupPlanTemplateJson !== null) {
    contents.BackupPlanTemplateJson = __expectString(data.BackupPlanTemplateJson);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ExportBackupPlanTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanCommandError(output, context);
  }
  const contents: GetBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlan: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    DeletionDate: undefined,
    LastExecutionDate: undefined,
    VersionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.LastExecutionDate !== undefined && data.LastExecutionDate !== null) {
    contents.LastExecutionDate = new Date(Math.round(data.LastExecutionDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = __expectString(data.VersionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanFromJSONCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromJSONCommandError(output, context);
  }
  const contents: GetBackupPlanFromJSONCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlan: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupPlanFromJSONCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromTemplateCommandError(output, context);
  }
  const contents: GetBackupPlanFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanDocument: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanDocument !== undefined && data.BackupPlanDocument !== null) {
    contents.BackupPlanDocument = deserializeAws_restJson1BackupPlan(data.BackupPlanDocument, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupPlanFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupSelectionCommandError(output, context);
  }
  const contents: GetBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanId: undefined,
    BackupSelection: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    SelectionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.BackupSelection !== undefined && data.BackupSelection !== null) {
    contents.BackupSelection = deserializeAws_restJson1BackupSelection(data.BackupSelection, context);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = __expectString(data.SelectionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: GetBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    Policy: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = __expectString(data.Policy);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommandError(output, context);
  }
  const contents: GetBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    BackupVaultEvents: undefined,
    BackupVaultName: undefined,
    SNSTopicArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultEvents !== undefined && data.BackupVaultEvents !== null) {
    contents.BackupVaultEvents = deserializeAws_restJson1BackupVaultEvents(data.BackupVaultEvents, context);
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.SNSTopicArn !== undefined && data.SNSTopicArn !== null) {
    contents.SNSTopicArn = __expectString(data.SNSTopicArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError(output, context);
  }
  const contents: GetRecoveryPointRestoreMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    RecoveryPointArn: undefined,
    RestoreMetadata: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.RestoreMetadata !== undefined && data.RestoreMetadata !== null) {
    contents.RestoreMetadata = deserializeAws_restJson1Metadata(data.RestoreMetadata, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetSupportedResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSupportedResourceTypesCommandError(output, context);
  }
  const contents: GetSupportedResourceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    ResourceTypes: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.ResourceTypes !== undefined && data.ResourceTypes !== null) {
    contents.ResourceTypes = deserializeAws_restJson1ResourceTypes(data.ResourceTypes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1GetSupportedResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupJobsCommandError(output, context);
  }
  const contents: ListBackupJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupJobs: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupJobs !== undefined && data.BackupJobs !== null) {
    contents.BackupJobs = deserializeAws_restJson1BackupJobsList(data.BackupJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlansCommandError(output, context);
  }
  const contents: ListBackupPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlansList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlansList !== undefined && data.BackupPlansList !== null) {
    contents.BackupPlansList = deserializeAws_restJson1BackupPlansList(data.BackupPlansList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlanTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommandError(output, context);
  }
  const contents: ListBackupPlanTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanTemplatesList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanTemplatesList !== undefined && data.BackupPlanTemplatesList !== null) {
    contents.BackupPlanTemplatesList = deserializeAws_restJson1BackupPlanTemplatesList(
      data.BackupPlanTemplatesList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupPlanTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlanVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanVersionsCommandError(output, context);
  }
  const contents: ListBackupPlanVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupPlanVersionsList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanVersionsList !== undefined && data.BackupPlanVersionsList !== null) {
    contents.BackupPlanVersionsList = deserializeAws_restJson1BackupPlanVersionsList(
      data.BackupPlanVersionsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupPlanVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupSelectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupSelectionsCommandError(output, context);
  }
  const contents: ListBackupSelectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupSelectionsList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupSelectionsList !== undefined && data.BackupSelectionsList !== null) {
    contents.BackupSelectionsList = deserializeAws_restJson1BackupSelectionsList(data.BackupSelectionsList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupSelectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupVaultsCommandError(output, context);
  }
  const contents: ListBackupVaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultList: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultList !== undefined && data.BackupVaultList !== null) {
    contents.BackupVaultList = deserializeAws_restJson1BackupVaultList(data.BackupVaultList, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListBackupVaultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListCopyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCopyJobsCommandError(output, context);
  }
  const contents: ListCopyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    CopyJobs: undefined,
    NextToken: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJobs !== undefined && data.CopyJobs !== null) {
    contents.CopyJobs = deserializeAws_restJson1CopyJobsList(data.CopyJobs, context);
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListCopyJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListProtectedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProtectedResourcesCommandError(output, context);
  }
  const contents: ListProtectedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Results: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Results !== undefined && data.Results !== null) {
    contents.Results = deserializeAws_restJson1ProtectedResourcesList(data.Results, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListProtectedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError(output, context);
  }
  const contents: ListRecoveryPointsByBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecoveryPoints: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByBackupVaultList(data.RecoveryPoints, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRecoveryPointsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommandError(output, context);
  }
  const contents: ListRecoveryPointsByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RecoveryPoints: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByResourceList(data.RecoveryPoints, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRecoveryPointsByResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRestoreJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRestoreJobsCommandError(output, context);
  }
  const contents: ListRestoreJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    RestoreJobs: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RestoreJobs !== undefined && data.RestoreJobs !== null) {
    contents.RestoreJobs = deserializeAws_restJson1RestoreJobsList(data.RestoreJobs, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListRestoreJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    NextToken: undefined,
    Tags: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1PutBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: PutBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1PutBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultNotificationsCommandError(output, context);
  }
  const contents: PutBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1PutBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBackupJobCommandError(output, context);
  }
  const contents: StartBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupJobId: undefined,
    CreationDate: undefined,
    RecoveryPointArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = __expectString(data.BackupJobId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCopyJobCommandError(output, context);
  }
  const contents: StartCopyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    CopyJobId: undefined,
    CreationDate: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJobId !== undefined && data.CopyJobId !== null) {
    contents.CopyJobId = __expectString(data.CopyJobId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartCopyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRestoreJobCommandError(output, context);
  }
  const contents: StartRestoreJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    RestoreJobId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = __expectString(data.RestoreJobId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StartRestoreJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StopBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopBackupJobCommandError(output, context);
  }
  const contents: StopBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1StopBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackupPlanCommandError(output, context);
  }
  const contents: UpdateBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    AdvancedBackupSettings: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.AdvancedBackupSettings !== undefined && data.AdvancedBackupSettings !== null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = __expectString(data.VersionId);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommandError(output, context);
  }
  const contents: UpdateGlobalSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError(output, context);
  }
  const contents: UpdateRecoveryPointLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
    BackupVaultArn: undefined,
    CalculatedLifecycle: undefined,
    Lifecycle: undefined,
    RecoveryPointArn: undefined,
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.CalculatedLifecycle !== undefined && data.CalculatedLifecycle !== null) {
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRegionSettingsCommandError(output, context);
  }
  const contents: UpdateRegionSettingsCommandOutput = {
    $metadata: deserializeMetadata(output),
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1UpdateRegionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context),
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context)),
        name: errorCode,
        $metadata: deserializeMetadata(output),
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Arn: undefined,
    Code: undefined,
    Context: undefined,
    CreatorRequestId: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1DependencyFailureExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailureException> => {
  const contents: DependencyFailureException = {
    name: "DependencyFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const deserializeAws_restJson1InvalidResourceStateExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const contents: InvalidResourceStateException = {
    name: "InvalidResourceStateException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined,
  };
  const data: any = parsedOutput.body;
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = __expectString(data.Type);
  }
  return contents;
};

const serializeAws_restJson1AdvancedBackupSetting = (input: AdvancedBackupSetting, context: __SerdeContext): any => {
  return {
    ...(input.BackupOptions !== undefined &&
      input.BackupOptions !== null && {
        BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
      }),
    ...(input.ResourceType !== undefined && input.ResourceType !== null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_restJson1AdvancedBackupSettings = (input: AdvancedBackupSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};

const serializeAws_restJson1BackupOptions = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1BackupPlanInput = (input: BackupPlanInput, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedBackupSettings !== undefined &&
      input.AdvancedBackupSettings !== null && {
        AdvancedBackupSettings: serializeAws_restJson1AdvancedBackupSettings(input.AdvancedBackupSettings, context),
      }),
    ...(input.BackupPlanName !== undefined &&
      input.BackupPlanName !== null && { BackupPlanName: input.BackupPlanName }),
    ...(input.Rules !== undefined &&
      input.Rules !== null && { Rules: serializeAws_restJson1BackupRulesInput(input.Rules, context) }),
  };
};

const serializeAws_restJson1BackupRuleInput = (input: BackupRuleInput, context: __SerdeContext): any => {
  return {
    ...(input.CompletionWindowMinutes !== undefined &&
      input.CompletionWindowMinutes !== null && { CompletionWindowMinutes: input.CompletionWindowMinutes }),
    ...(input.CopyActions !== undefined &&
      input.CopyActions !== null && { CopyActions: serializeAws_restJson1CopyActions(input.CopyActions, context) }),
    ...(input.EnableContinuousBackup !== undefined &&
      input.EnableContinuousBackup !== null && { EnableContinuousBackup: input.EnableContinuousBackup }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags !== undefined &&
      input.RecoveryPointTags !== null && {
        RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
      }),
    ...(input.RuleName !== undefined && input.RuleName !== null && { RuleName: input.RuleName }),
    ...(input.ScheduleExpression !== undefined &&
      input.ScheduleExpression !== null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.StartWindowMinutes !== undefined &&
      input.StartWindowMinutes !== null && { StartWindowMinutes: input.StartWindowMinutes }),
    ...(input.TargetBackupVaultName !== undefined &&
      input.TargetBackupVaultName !== null && { TargetBackupVaultName: input.TargetBackupVaultName }),
  };
};

const serializeAws_restJson1BackupRulesInput = (input: BackupRuleInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1BackupRuleInput(entry, context);
    });
};

const serializeAws_restJson1BackupSelection = (input: BackupSelection, context: __SerdeContext): any => {
  return {
    ...(input.IamRoleArn !== undefined && input.IamRoleArn !== null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ListOfTags !== undefined &&
      input.ListOfTags !== null && { ListOfTags: serializeAws_restJson1ListOfTags(input.ListOfTags, context) }),
    ...(input.Resources !== undefined &&
      input.Resources !== null && { Resources: serializeAws_restJson1ResourceArns(input.Resources, context) }),
    ...(input.SelectionName !== undefined && input.SelectionName !== null && { SelectionName: input.SelectionName }),
  };
};

const serializeAws_restJson1BackupVaultEvents = (
  input: (BackupVaultEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.ConditionKey !== undefined && input.ConditionKey !== null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionType !== undefined && input.ConditionType !== null && { ConditionType: input.ConditionType }),
    ...(input.ConditionValue !== undefined &&
      input.ConditionValue !== null && { ConditionValue: input.ConditionValue }),
  };
};

const serializeAws_restJson1CopyAction = (input: CopyAction, context: __SerdeContext): any => {
  return {
    ...(input.DestinationBackupVaultArn !== undefined &&
      input.DestinationBackupVaultArn !== null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.Lifecycle !== undefined &&
      input.Lifecycle !== null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
  };
};

const serializeAws_restJson1CopyActions = (input: CopyAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1CopyAction(entry, context);
    });
};

const serializeAws_restJson1GlobalSettings = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1Lifecycle = (input: Lifecycle, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAfterDays !== undefined &&
      input.DeleteAfterDays !== null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays !== undefined &&
      input.MoveToColdStorageAfterDays !== null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};

const serializeAws_restJson1ListOfTags = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return serializeAws_restJson1Condition(entry, context);
    });
};

const serializeAws_restJson1Metadata = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const serializeAws_restJson1ResourceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      if (entry === null) {
        return null as any;
      }
      return entry;
    });
};

const serializeAws_restJson1ResourceTypeOptInPreference = (
  input: { [key: string]: boolean },
  context: __SerdeContext
): any => {
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

const serializeAws_restJson1Tags = (input: { [key: string]: string }, context: __SerdeContext): any => {
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

const deserializeAws_restJson1AdvancedBackupSetting = (output: any, context: __SerdeContext): AdvancedBackupSetting => {
  return {
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1AdvancedBackupSettings = (
  output: any,
  context: __SerdeContext
): AdvancedBackupSetting[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};

const deserializeAws_restJson1BackupJob = (output: any, context: __SerdeContext): BackupJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupJobId: __expectString(output.BackupJobId),
    BackupOptions:
      output.BackupOptions !== undefined && output.BackupOptions !== null
        ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context)
        : undefined,
    BackupSizeInBytes: __expectInt(output.BackupSizeInBytes),
    BackupType: __expectString(output.BackupType),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    BytesTransferred: __expectInt(output.BytesTransferred),
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionDate:
      output.ExpectedCompletionDate !== undefined && output.ExpectedCompletionDate !== null
        ? new Date(Math.round(output.ExpectedCompletionDate * 1000))
        : undefined,
    IamRoleArn: __expectString(output.IamRoleArn),
    PercentDone: __expectString(output.PercentDone),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
    StartBy:
      output.StartBy !== undefined && output.StartBy !== null ? new Date(Math.round(output.StartBy * 1000)) : undefined,
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1BackupJobsList = (output: any, context: __SerdeContext): BackupJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupJob(entry, context);
    });
};

const deserializeAws_restJson1BackupOptions = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1BackupPlan = (output: any, context: __SerdeContext): BackupPlan => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName: __expectString(output.BackupPlanName),
    Rules:
      output.Rules !== undefined && output.Rules !== null
        ? deserializeAws_restJson1BackupRules(output.Rules, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1BackupPlansList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};

const deserializeAws_restJson1BackupPlansListMember = (output: any, context: __SerdeContext): BackupPlansListMember => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings !== undefined && output.AdvancedBackupSettings !== null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanName: __expectString(output.BackupPlanName),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    DeletionDate:
      output.DeletionDate !== undefined && output.DeletionDate !== null
        ? new Date(Math.round(output.DeletionDate * 1000))
        : undefined,
    LastExecutionDate:
      output.LastExecutionDate !== undefined && output.LastExecutionDate !== null
        ? new Date(Math.round(output.LastExecutionDate * 1000))
        : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

const deserializeAws_restJson1BackupPlanTemplatesList = (
  output: any,
  context: __SerdeContext
): BackupPlanTemplatesListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlanTemplatesListMember(entry, context);
    });
};

const deserializeAws_restJson1BackupPlanTemplatesListMember = (
  output: any,
  context: __SerdeContext
): BackupPlanTemplatesListMember => {
  return {
    BackupPlanTemplateId: __expectString(output.BackupPlanTemplateId),
    BackupPlanTemplateName: __expectString(output.BackupPlanTemplateName),
  } as any;
};

const deserializeAws_restJson1BackupPlanVersionsList = (
  output: any,
  context: __SerdeContext
): BackupPlansListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
};

const deserializeAws_restJson1BackupRule = (output: any, context: __SerdeContext): BackupRule => {
  return {
    CompletionWindowMinutes: __expectInt(output.CompletionWindowMinutes),
    CopyActions:
      output.CopyActions !== undefined && output.CopyActions !== null
        ? deserializeAws_restJson1CopyActions(output.CopyActions, context)
        : undefined,
    EnableContinuousBackup: __expectBoolean(output.EnableContinuousBackup),
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointTags:
      output.RecoveryPointTags !== undefined && output.RecoveryPointTags !== null
        ? deserializeAws_restJson1Tags(output.RecoveryPointTags, context)
        : undefined,
    RuleId: __expectString(output.RuleId),
    RuleName: __expectString(output.RuleName),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    StartWindowMinutes: __expectInt(output.StartWindowMinutes),
    TargetBackupVaultName: __expectString(output.TargetBackupVaultName),
  } as any;
};

const deserializeAws_restJson1BackupRules = (output: any, context: __SerdeContext): BackupRule[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupRule(entry, context);
    });
};

const deserializeAws_restJson1BackupSelection = (output: any, context: __SerdeContext): BackupSelection => {
  return {
    IamRoleArn: __expectString(output.IamRoleArn),
    ListOfTags:
      output.ListOfTags !== undefined && output.ListOfTags !== null
        ? deserializeAws_restJson1ListOfTags(output.ListOfTags, context)
        : undefined,
    Resources:
      output.Resources !== undefined && output.Resources !== null
        ? deserializeAws_restJson1ResourceArns(output.Resources, context)
        : undefined,
    SelectionName: __expectString(output.SelectionName),
  } as any;
};

const deserializeAws_restJson1BackupSelectionsList = (
  output: any,
  context: __SerdeContext
): BackupSelectionsListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupSelectionsListMember(entry, context);
    });
};

const deserializeAws_restJson1BackupSelectionsListMember = (
  output: any,
  context: __SerdeContext
): BackupSelectionsListMember => {
  return {
    BackupPlanId: __expectString(output.BackupPlanId),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    IamRoleArn: __expectString(output.IamRoleArn),
    SelectionId: __expectString(output.SelectionId),
    SelectionName: __expectString(output.SelectionName),
  } as any;
};

const deserializeAws_restJson1BackupVaultEvents = (
  output: any,
  context: __SerdeContext
): (BackupVaultEvent | string)[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1BackupVaultList = (output: any, context: __SerdeContext): BackupVaultListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupVaultListMember(entry, context);
    });
};

const deserializeAws_restJson1BackupVaultListMember = (output: any, context: __SerdeContext): BackupVaultListMember => {
  return {
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    NumberOfRecoveryPoints: __expectInt(output.NumberOfRecoveryPoints),
  } as any;
};

const deserializeAws_restJson1CalculatedLifecycle = (output: any, context: __SerdeContext): CalculatedLifecycle => {
  return {
    DeleteAt:
      output.DeleteAt !== undefined && output.DeleteAt !== null
        ? new Date(Math.round(output.DeleteAt * 1000))
        : undefined,
    MoveToColdStorageAt:
      output.MoveToColdStorageAt !== undefined && output.MoveToColdStorageAt !== null
        ? new Date(Math.round(output.MoveToColdStorageAt * 1000))
        : undefined,
  } as any;
};

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    ConditionKey: __expectString(output.ConditionKey),
    ConditionType: __expectString(output.ConditionType),
    ConditionValue: __expectString(output.ConditionValue),
  } as any;
};

const deserializeAws_restJson1CopyAction = (output: any, context: __SerdeContext): CopyAction => {
  return {
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1CopyActions = (output: any, context: __SerdeContext): CopyAction[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CopyAction(entry, context);
    });
};

const deserializeAws_restJson1CopyJob = (output: any, context: __SerdeContext): CopyJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupSizeInBytes: __expectInt(output.BackupSizeInBytes),
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CopyJobId: __expectString(output.CopyJobId),
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    DestinationRecoveryPointArn: __expectString(output.DestinationRecoveryPointArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    SourceRecoveryPointArn: __expectString(output.SourceRecoveryPointArn),
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1CopyJobsList = (output: any, context: __SerdeContext): CopyJob[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CopyJob(entry, context);
    });
};

const deserializeAws_restJson1GlobalSettings = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1Lifecycle = (output: any, context: __SerdeContext): Lifecycle => {
  return {
    DeleteAfterDays: __expectInt(output.DeleteAfterDays),
    MoveToColdStorageAfterDays: __expectInt(output.MoveToColdStorageAfterDays),
  } as any;
};

const deserializeAws_restJson1ListOfTags = (output: any, context: __SerdeContext): Condition[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Condition(entry, context);
    });
};

const deserializeAws_restJson1Metadata = (output: any, context: __SerdeContext): { [key: string]: string } => {
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

const deserializeAws_restJson1ProtectedResource = (output: any, context: __SerdeContext): ProtectedResource => {
  return {
    LastBackupTime:
      output.LastBackupTime !== undefined && output.LastBackupTime !== null
        ? new Date(Math.round(output.LastBackupTime * 1000))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1ProtectedResourcesList = (output: any, context: __SerdeContext): ProtectedResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProtectedResource(entry, context);
    });
};

const deserializeAws_restJson1RecoveryPointByBackupVault = (
  output: any,
  context: __SerdeContext
): RecoveryPointByBackupVault => {
  return {
    BackupSizeInBytes: __expectInt(output.BackupSizeInBytes),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CalculatedLifecycle:
      output.CalculatedLifecycle !== undefined && output.CalculatedLifecycle !== null
        ? deserializeAws_restJson1CalculatedLifecycle(output.CalculatedLifecycle, context)
        : undefined,
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedBy:
      output.CreatedBy !== undefined && output.CreatedBy !== null
        ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context)
        : undefined,
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    IsEncrypted: __expectBoolean(output.IsEncrypted),
    LastRestoreTime:
      output.LastRestoreTime !== undefined && output.LastRestoreTime !== null
        ? new Date(Math.round(output.LastRestoreTime * 1000))
        : undefined,
    Lifecycle:
      output.Lifecycle !== undefined && output.Lifecycle !== null
        ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context)
        : undefined,
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1RecoveryPointByBackupVaultList = (
  output: any,
  context: __SerdeContext
): RecoveryPointByBackupVault[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryPointByBackupVault(entry, context);
    });
};

const deserializeAws_restJson1RecoveryPointByResource = (
  output: any,
  context: __SerdeContext
): RecoveryPointByResource => {
  return {
    BackupSizeBytes: __expectInt(output.BackupSizeBytes),
    BackupVaultName: __expectString(output.BackupVaultName),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    Status: __expectString(output.Status),
  } as any;
};

const deserializeAws_restJson1RecoveryPointByResourceList = (
  output: any,
  context: __SerdeContext
): RecoveryPointByResource[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryPointByResource(entry, context);
    });
};

const deserializeAws_restJson1RecoveryPointCreator = (output: any, context: __SerdeContext): RecoveryPointCreator => {
  return {
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanVersion: __expectString(output.BackupPlanVersion),
    BackupRuleId: __expectString(output.BackupRuleId),
  } as any;
};

const deserializeAws_restJson1ResourceArns = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1ResourceTypeOptInPreference = (
  output: any,
  context: __SerdeContext
): { [key: string]: boolean } => {
  return Object.entries(output).reduce((acc: { [key: string]: boolean }, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    return {
      ...acc,
      [key]: __expectBoolean(value) as any,
    };
  }, {});
};

const deserializeAws_restJson1ResourceTypes = (output: any, context: __SerdeContext): string[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return __expectString(entry) as any;
    });
};

const deserializeAws_restJson1RestoreJobsList = (output: any, context: __SerdeContext): RestoreJobsListMember[] => {
  return (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RestoreJobsListMember(entry, context);
    });
};

const deserializeAws_restJson1RestoreJobsListMember = (output: any, context: __SerdeContext): RestoreJobsListMember => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupSizeInBytes: __expectInt(output.BackupSizeInBytes),
    CompletionDate:
      output.CompletionDate !== undefined && output.CompletionDate !== null
        ? new Date(Math.round(output.CompletionDate * 1000))
        : undefined,
    CreatedResourceArn: __expectString(output.CreatedResourceArn),
    CreationDate:
      output.CreationDate !== undefined && output.CreationDate !== null
        ? new Date(Math.round(output.CreationDate * 1000))
        : undefined,
    ExpectedCompletionTimeMinutes: __expectInt(output.ExpectedCompletionTimeMinutes),
    IamRoleArn: __expectString(output.IamRoleArn),
    PercentDone: __expectString(output.PercentDone),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceType: __expectString(output.ResourceType),
    RestoreJobId: __expectString(output.RestoreJobId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): { [key: string]: string } => {
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
