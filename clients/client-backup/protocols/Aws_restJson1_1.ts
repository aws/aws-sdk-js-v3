import {
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput
} from "../commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput
} from "../commands/CreateBackupSelectionCommand";
import {
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput
} from "../commands/CreateBackupVaultCommand";
import {
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput
} from "../commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput
} from "../commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput
} from "../commands/DeleteBackupVaultAccessPolicyCommand";
import {
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput
} from "../commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput
} from "../commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput
} from "../commands/DeleteRecoveryPointCommand";
import {
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput
} from "../commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput
} from "../commands/DescribeBackupVaultCommand";
import {
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput
} from "../commands/DescribeCopyJobCommand";
import {
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput
} from "../commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput
} from "../commands/DescribeRecoveryPointCommand";
import {
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput
} from "../commands/DescribeRestoreJobCommand";
import {
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput
} from "../commands/ExportBackupPlanTemplateCommand";
import {
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput
} from "../commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput
} from "../commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput
} from "../commands/GetBackupPlanFromTemplateCommand";
import {
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput
} from "../commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput
} from "../commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput
} from "../commands/GetBackupVaultNotificationsCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput
} from "../commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput
} from "../commands/GetSupportedResourceTypesCommand";
import {
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput
} from "../commands/ListBackupJobsCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput
} from "../commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput
} from "../commands/ListBackupPlanVersionsCommand";
import {
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput
} from "../commands/ListBackupPlansCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput
} from "../commands/ListBackupSelectionsCommand";
import {
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput
} from "../commands/ListBackupVaultsCommand";
import {
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput
} from "../commands/ListCopyJobsCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput
} from "../commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput
} from "../commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput
} from "../commands/ListRecoveryPointsByResourceCommand";
import {
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput
} from "../commands/ListRestoreJobsCommand";
import {
  ListTagsCommandInput,
  ListTagsCommandOutput
} from "../commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput
} from "../commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput
} from "../commands/PutBackupVaultNotificationsCommand";
import {
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput
} from "../commands/StartBackupJobCommand";
import {
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput
} from "../commands/StartCopyJobCommand";
import {
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput
} from "../commands/StartRestoreJobCommand";
import {
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput
} from "../commands/StopBackupJobCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput
} from "../commands/UpdateBackupPlanCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput
} from "../commands/UpdateRecoveryPointLifecycleCommand";
import {
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
  Lifecycle,
  LimitExceededException,
  MissingParameterValueException,
  ProtectedResource,
  RecoveryPointByBackupVault,
  RecoveryPointByResource,
  RecoveryPointCreator,
  ResourceNotFoundException,
  RestoreJobsListMember,
  ServiceUnavailableException
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

export async function serializeAws_restJson1_1CreateBackupPlanCommand(
  input: CreateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup/plans";
  let body: any;
  const bodyParams: any = {};
  if (input.BackupPlan !== undefined) {
    bodyParams["BackupPlan"] = serializeAws_restJson1_1BackupPlanInput(
      input.BackupPlan,
      context
    );
  }
  if (input.BackupPlanTags !== undefined) {
    bodyParams["BackupPlanTags"] = serializeAws_restJson1_1Tags(
      input.BackupPlanTags,
      context
    );
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
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

export async function serializeAws_restJson1_1CreateBackupSelectionCommand(
  input: CreateBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.BackupSelection !== undefined) {
    bodyParams["BackupSelection"] = serializeAws_restJson1_1BackupSelection(
      input.BackupSelection,
      context
    );
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
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

export async function serializeAws_restJson1_1CreateBackupVaultCommand(
  input: CreateBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.BackupVaultTags !== undefined) {
    bodyParams["BackupVaultTags"] = serializeAws_restJson1_1Tags(
      input.BackupVaultTags,
      context
    );
  }
  if (input.CreatorRequestId !== undefined) {
    bodyParams["CreatorRequestId"] = input.CreatorRequestId;
  }
  if (input.EncryptionKeyArn !== undefined) {
    bodyParams["EncryptionKeyArn"] = input.EncryptionKeyArn;
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

export async function serializeAws_restJson1_1DeleteBackupPlanCommand(
  input: DeleteBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBackupSelectionCommand(
  input: DeleteBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue: string = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SelectionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SelectionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBackupVaultCommand(
  input: DeleteBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBackupVaultAccessPolicyCommand(
  input: DeleteBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteBackupVaultNotificationsCommand(
  input: DeleteBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DeleteRecoveryPointCommand(
  input: DeleteRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RecoveryPointArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RecoveryPointArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: RecoveryPointArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "DELETE",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeBackupJobCommand(
  input: DescribeBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue: string = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupJobId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupJobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeBackupVaultCommand(
  input: DescribeBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults/{BackupVaultName}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeCopyJobCommand(
  input: DescribeCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/copy-jobs/{CopyJobId}";
  if (input.CopyJobId !== undefined) {
    const labelValue: string = input.CopyJobId;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: CopyJobId.");
    }
    resolvedPath = resolvedPath.replace(
      "{CopyJobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: CopyJobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeProtectedResourceCommand(
  input: DescribeProtectedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/resources/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeRecoveryPointCommand(
  input: DescribeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RecoveryPointArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RecoveryPointArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: RecoveryPointArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1DescribeRestoreJobCommand(
  input: DescribeRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/restore-jobs/{RestoreJobId}";
  if (input.RestoreJobId !== undefined) {
    const labelValue: string = input.RestoreJobId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RestoreJobId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RestoreJobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: RestoreJobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ExportBackupPlanTemplateCommand(
  input: ExportBackupPlanTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}/toTemplate";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBackupPlanCommand(
  input: GetBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {};
  if (input.VersionId !== undefined) {
    query["versionId"] = input.VersionId;
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

export async function serializeAws_restJson1_1GetBackupPlanFromJSONCommand(
  input: GetBackupPlanFromJSONCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup/template/json/toPlan";
  let body: any;
  const bodyParams: any = {};
  if (input.BackupPlanTemplateJson !== undefined) {
    bodyParams["BackupPlanTemplateJson"] = input.BackupPlanTemplateJson;
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1GetBackupPlanFromTemplateCommand(
  input: GetBackupPlanFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/template/plans/{BackupPlanTemplateId}/toPlan";
  if (input.BackupPlanTemplateId !== undefined) {
    const labelValue: string = input.BackupPlanTemplateId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanTemplateId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanTemplateId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: BackupPlanTemplateId."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBackupSelectionCommand(
  input: GetBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  if (input.SelectionId !== undefined) {
    const labelValue: string = input.SelectionId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: SelectionId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{SelectionId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: SelectionId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBackupVaultAccessPolicyCommand(
  input: GetBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetBackupVaultNotificationsCommand(
  input: GetBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetRecoveryPointRestoreMetadataCommand(
  input: GetRecoveryPointRestoreMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RecoveryPointArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RecoveryPointArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: RecoveryPointArn."
    );
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1GetSupportedResourceTypesCommand(
  input: GetSupportedResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/supported-resource-types";
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "GET",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1ListBackupJobsCommand(
  input: ListBackupJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-jobs";
  const query: any = {};
  if (input.ByBackupVaultName !== undefined) {
    query["backupVaultName"] = input.ByBackupVaultName;
  }
  if (input.ByCreatedAfter !== undefined) {
    query["createdAfter"] = input.ByCreatedAfter.toISOString().toString();
  }
  if (input.ByCreatedBefore !== undefined) {
    query["createdBefore"] = input.ByCreatedBefore.toISOString().toString();
  }
  if (input.ByResourceArn !== undefined) {
    query["resourceArn"] = input.ByResourceArn;
  }
  if (input.ByResourceType !== undefined) {
    query["resourceType"] = input.ByResourceType;
  }
  if (input.ByState !== undefined) {
    query["state"] = input.ByState;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListBackupPlanTemplatesCommand(
  input: ListBackupPlanTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/template/plans";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListBackupPlanVersionsCommand(
  input: ListBackupPlanVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}/versions";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListBackupPlansCommand(
  input: ListBackupPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans";
  const query: any = {};
  if (input.IncludeDeleted !== undefined) {
    query["includeDeleted"] = input.IncludeDeleted.toString();
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListBackupSelectionsCommand(
  input: ListBackupSelectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup/plans/{BackupPlanId}/selections";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListBackupVaultsCommand(
  input: ListBackupVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListCopyJobsCommand(
  input: ListCopyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/copy-jobs";
  const query: any = {};
  if (input.ByCreatedAfter !== undefined) {
    query["createdAfter"] = input.ByCreatedAfter.toISOString().toString();
  }
  if (input.ByCreatedBefore !== undefined) {
    query["createdBefore"] = input.ByCreatedBefore.toISOString().toString();
  }
  if (input.ByDestinationVaultArn !== undefined) {
    query["destinationVaultArn"] = input.ByDestinationVaultArn;
  }
  if (input.ByResourceArn !== undefined) {
    query["resourceArn"] = input.ByResourceArn;
  }
  if (input.ByResourceType !== undefined) {
    query["resourceType"] = input.ByResourceType;
  }
  if (input.ByState !== undefined) {
    query["state"] = input.ByState;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListProtectedResourcesCommand(
  input: ListProtectedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/resources";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListRecoveryPointsByBackupVaultCommand(
  input: ListRecoveryPointsByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-vaults/{BackupVaultName}/recovery-points";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  const query: any = {};
  if (input.ByBackupPlanId !== undefined) {
    query["backupPlanId"] = input.ByBackupPlanId;
  }
  if (input.ByCreatedAfter !== undefined) {
    query["createdAfter"] = input.ByCreatedAfter.toISOString().toString();
  }
  if (input.ByCreatedBefore !== undefined) {
    query["createdBefore"] = input.ByCreatedBefore.toISOString().toString();
  }
  if (input.ByResourceArn !== undefined) {
    query["resourceArn"] = input.ByResourceArn;
  }
  if (input.ByResourceType !== undefined) {
    query["resourceType"] = input.ByResourceType;
  }
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListRecoveryPointsByResourceCommand(
  input: ListRecoveryPointsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/resources/{ResourceArn}/recovery-points";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListRestoreJobsCommand(
  input: ListRestoreJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/restore-jobs";
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1ListTagsCommand(
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  const query: any = {};
  if (input.MaxResults !== undefined) {
    query["maxResults"] = input.MaxResults.toString();
  }
  if (input.NextToken !== undefined) {
    query["nextToken"] = input.NextToken;
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

export async function serializeAws_restJson1_1PutBackupVaultAccessPolicyCommand(
  input: PutBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup-vaults/{BackupVaultName}/access-policy";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Policy !== undefined) {
    bodyParams["Policy"] = input.Policy;
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

export async function serializeAws_restJson1_1PutBackupVaultNotificationsCommand(
  input: PutBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.BackupVaultEvents !== undefined) {
    bodyParams["BackupVaultEvents"] = serializeAws_restJson1_1BackupVaultEvents(
      input.BackupVaultEvents,
      context
    );
  }
  if (input.SNSTopicArn !== undefined) {
    bodyParams["SNSTopicArn"] = input.SNSTopicArn;
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

export async function serializeAws_restJson1_1StartBackupJobCommand(
  input: StartBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup-jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.BackupVaultName !== undefined) {
    bodyParams["BackupVaultName"] = input.BackupVaultName;
  }
  if (input.CompleteWindowMinutes !== undefined) {
    bodyParams["CompleteWindowMinutes"] = input.CompleteWindowMinutes;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.Lifecycle !== undefined) {
    bodyParams["Lifecycle"] = serializeAws_restJson1_1Lifecycle(
      input.Lifecycle,
      context
    );
  }
  if (input.RecoveryPointTags !== undefined) {
    bodyParams["RecoveryPointTags"] = serializeAws_restJson1_1Tags(
      input.RecoveryPointTags,
      context
    );
  }
  if (input.ResourceArn !== undefined) {
    bodyParams["ResourceArn"] = input.ResourceArn;
  }
  if (input.StartWindowMinutes !== undefined) {
    bodyParams["StartWindowMinutes"] = input.StartWindowMinutes;
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

export async function serializeAws_restJson1_1StartCopyJobCommand(
  input: StartCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/copy-jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.DestinationBackupVaultArn !== undefined) {
    bodyParams["DestinationBackupVaultArn"] = input.DestinationBackupVaultArn;
  }
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.Lifecycle !== undefined) {
    bodyParams["Lifecycle"] = serializeAws_restJson1_1Lifecycle(
      input.Lifecycle,
      context
    );
  }
  if (input.RecoveryPointArn !== undefined) {
    bodyParams["RecoveryPointArn"] = input.RecoveryPointArn;
  }
  if (input.SourceBackupVaultName !== undefined) {
    bodyParams["SourceBackupVaultName"] = input.SourceBackupVaultName;
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

export async function serializeAws_restJson1_1StartRestoreJobCommand(
  input: StartRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/restore-jobs";
  let body: any;
  const bodyParams: any = {};
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.IdempotencyToken !== undefined) {
    bodyParams["IdempotencyToken"] = input.IdempotencyToken;
  }
  if (input.Metadata !== undefined) {
    bodyParams["Metadata"] = serializeAws_restJson1_1Metadata(
      input.Metadata,
      context
    );
  }
  if (input.RecoveryPointArn !== undefined) {
    bodyParams["RecoveryPointArn"] = input.RecoveryPointArn;
  }
  if (input.ResourceType !== undefined) {
    bodyParams["ResourceType"] = input.ResourceType;
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

export async function serializeAws_restJson1_1StopBackupJobCommand(
  input: StopBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "";
  let resolvedPath = "/backup-jobs/{BackupJobId}";
  if (input.BackupJobId !== undefined) {
    const labelValue: string = input.BackupJobId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupJobId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupJobId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupJobId.");
  }
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath
  });
}

export async function serializeAws_restJson1_1TagResourceCommand(
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/tags/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Tags !== undefined) {
    bodyParams["Tags"] = serializeAws_restJson1_1Tags(input.Tags, context);
  }
  body = JSON.stringify(bodyParams);
  return new __HttpRequest({
    ...context.endpoint,
    protocol: "https",
    method: "POST",
    headers: headers,
    path: resolvedPath,
    body: body
  });
}

export async function serializeAws_restJson1_1UntagResourceCommand(
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/untag/{ResourceArn}";
  if (input.ResourceArn !== undefined) {
    const labelValue: string = input.ResourceArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: ResourceArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{ResourceArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: ResourceArn.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.TagKeyList !== undefined) {
    bodyParams["TagKeyList"] = serializeAws_restJson1_1TagKeyList(
      input.TagKeyList,
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
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateBackupPlanCommand(
  input: UpdateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath = "/backup/plans/{BackupPlanId}";
  if (input.BackupPlanId !== undefined) {
    const labelValue: string = input.BackupPlanId;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupPlanId."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupPlanId}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupPlanId.");
  }
  let body: any;
  const bodyParams: any = {};
  if (input.BackupPlan !== undefined) {
    bodyParams["BackupPlan"] = serializeAws_restJson1_1BackupPlanInput(
      input.BackupPlan,
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
    body: body
  });
}

export async function serializeAws_restJson1_1UpdateRecoveryPointLifecycleCommand(
  input: UpdateRecoveryPointLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> {
  const headers: any = {};
  headers["Content-Type"] = "application/json";
  let resolvedPath =
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  if (input.BackupVaultName !== undefined) {
    const labelValue: string = input.BackupVaultName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: BackupVaultName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{BackupVaultName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: BackupVaultName.");
  }
  if (input.RecoveryPointArn !== undefined) {
    const labelValue: string = input.RecoveryPointArn;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: RecoveryPointArn."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{RecoveryPointArn}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: RecoveryPointArn."
    );
  }
  let body: any;
  const bodyParams: any = {};
  if (input.Lifecycle !== undefined) {
    bodyParams["Lifecycle"] = serializeAws_restJson1_1Lifecycle(
      input.Lifecycle,
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
    body: body
  });
}

export async function deserializeAws_restJson1_1CreateBackupPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBackupPlanCommandError(
      output,
      context
    );
  }
  const contents: CreateBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupPlanOutput",
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBackupPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.services.cryo#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1CreateBackupSelectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBackupSelectionCommandError(
      output,
      context
    );
  }
  const contents: CreateBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupSelectionOutput",
    BackupPlanId: undefined,
    CreationDate: undefined,
    SelectionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = data.SelectionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBackupSelectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.services.cryo#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1CreateBackupVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateBackupVaultCommandError(
      output,
      context
    );
  }
  const contents: CreateBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateBackupVaultOutput",
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1CreateBackupVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.services.cryo#AlreadyExistsException":
      response = {
        ...(await deserializeAws_restJson1_1AlreadyExistsExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteBackupPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackupPlanCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteBackupPlanOutput",
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    DeletionDate: undefined,
    VersionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackupPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteBackupSelectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackupSelectionCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackupSelectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteBackupVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackupVaultCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackupVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteBackupVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackupVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackupVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteBackupVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteBackupVaultNotificationsCommandError(
      output,
      context
    );
  }
  const contents: DeleteBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteBackupVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DeleteRecoveryPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRecoveryPointCommandError(
      output,
      context
    );
  }
  const contents: DeleteRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DeleteRecoveryPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeBackupJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBackupJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupJobOutput",
    BackupJobId: undefined,
    BackupSizeInBytes: undefined,
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
    StatusMessage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = data.BackupJobId;
  }
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.BytesTransferred !== undefined && data.BytesTransferred !== null) {
    contents.BytesTransferred = data.BytesTransferred;
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1_1RecoveryPointCreator(
      data.CreatedBy,
      context
    );
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (
    data.ExpectedCompletionDate !== undefined &&
    data.ExpectedCompletionDate !== null
  ) {
    contents.ExpectedCompletionDate = new Date(
      Math.round(data.ExpectedCompletionDate * 1000)
    );
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = data.PercentDone;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.StartBy !== undefined && data.StartBy !== null) {
    contents.StartBy = new Date(Math.round(data.StartBy * 1000));
  }
  if (data.State !== undefined && data.State !== null) {
    contents.State = data.State;
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = data.StatusMessage;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBackupJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.services.cryo#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeBackupVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeBackupVaultCommandError(
      output,
      context
    );
  }
  const contents: DescribeBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeBackupVaultOutput",
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    EncryptionKeyArn: undefined,
    NumberOfRecoveryPoints: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = data.EncryptionKeyArn;
  }
  if (
    data.NumberOfRecoveryPoints !== undefined &&
    data.NumberOfRecoveryPoints !== null
  ) {
    contents.NumberOfRecoveryPoints = data.NumberOfRecoveryPoints;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeBackupVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeCopyJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeCopyJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeCopyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeCopyJobOutput",
    CopyJob: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJob !== undefined && data.CopyJob !== null) {
    contents.CopyJob = deserializeAws_restJson1_1CopyJob(data.CopyJob, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeCopyJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeProtectedResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeProtectedResourceCommandError(
      output,
      context
    );
  }
  const contents: DescribeProtectedResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeProtectedResourceOutput",
    LastBackupTime: undefined,
    ResourceArn: undefined,
    ResourceType: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.LastBackupTime !== undefined && data.LastBackupTime !== null) {
    contents.LastBackupTime = new Date(Math.round(data.LastBackupTime * 1000));
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeProtectedResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeRecoveryPointCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRecoveryPointCommandError(
      output,
      context
    );
  }
  const contents: DescribeRecoveryPointCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRecoveryPointOutput",
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
    Status: undefined,
    StorageClass: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (
    data.CalculatedLifecycle !== undefined &&
    data.CalculatedLifecycle !== null
  ) {
    contents.CalculatedLifecycle = deserializeAws_restJson1_1CalculatedLifecycle(
      data.CalculatedLifecycle,
      context
    );
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (data.CreatedBy !== undefined && data.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1_1RecoveryPointCreator(
      data.CreatedBy,
      context
    );
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.EncryptionKeyArn !== undefined && data.EncryptionKeyArn !== null) {
    contents.EncryptionKeyArn = data.EncryptionKeyArn;
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.IsEncrypted !== undefined && data.IsEncrypted !== null) {
    contents.IsEncrypted = data.IsEncrypted;
  }
  if (data.LastRestoreTime !== undefined && data.LastRestoreTime !== null) {
    contents.LastRestoreTime = new Date(
      Math.round(data.LastRestoreTime * 1000)
    );
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1_1Lifecycle(
      data.Lifecycle,
      context
    );
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.ResourceArn !== undefined && data.ResourceArn !== null) {
    contents.ResourceArn = data.ResourceArn;
  }
  if (data.ResourceType !== undefined && data.ResourceType !== null) {
    contents.ResourceType = data.ResourceType;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StorageClass !== undefined && data.StorageClass !== null) {
    contents.StorageClass = data.StorageClass;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRecoveryPointCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1DescribeRestoreJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRestoreJobCommandError(
      output,
      context
    );
  }
  const contents: DescribeRestoreJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRestoreJobOutput",
    BackupSizeInBytes: undefined,
    CompletionDate: undefined,
    CreatedResourceArn: undefined,
    CreationDate: undefined,
    ExpectedCompletionTimeMinutes: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    RestoreJobId: undefined,
    Status: undefined,
    StatusMessage: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupSizeInBytes !== undefined && data.BackupSizeInBytes !== null) {
    contents.BackupSizeInBytes = data.BackupSizeInBytes;
  }
  if (data.CompletionDate !== undefined && data.CompletionDate !== null) {
    contents.CompletionDate = new Date(Math.round(data.CompletionDate * 1000));
  }
  if (
    data.CreatedResourceArn !== undefined &&
    data.CreatedResourceArn !== null
  ) {
    contents.CreatedResourceArn = data.CreatedResourceArn;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (
    data.ExpectedCompletionTimeMinutes !== undefined &&
    data.ExpectedCompletionTimeMinutes !== null
  ) {
    contents.ExpectedCompletionTimeMinutes = data.ExpectedCompletionTimeMinutes;
  }
  if (data.IamRoleArn !== undefined && data.IamRoleArn !== null) {
    contents.IamRoleArn = data.IamRoleArn;
  }
  if (data.PercentDone !== undefined && data.PercentDone !== null) {
    contents.PercentDone = data.PercentDone;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = data.RestoreJobId;
  }
  if (data.Status !== undefined && data.Status !== null) {
    contents.Status = data.Status;
  }
  if (data.StatusMessage !== undefined && data.StatusMessage !== null) {
    contents.StatusMessage = data.StatusMessage;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1DescribeRestoreJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.services.cryo#DependencyFailureException":
      response = {
        ...(await deserializeAws_restJson1_1DependencyFailureExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ExportBackupPlanTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ExportBackupPlanTemplateCommandError(
      output,
      context
    );
  }
  const contents: ExportBackupPlanTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ExportBackupPlanTemplateOutput",
    BackupPlanTemplateJson: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BackupPlanTemplateJson !== undefined &&
    data.BackupPlanTemplateJson !== null
  ) {
    contents.BackupPlanTemplateJson = data.BackupPlanTemplateJson;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ExportBackupPlanTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupPlanCommandError(output, context);
  }
  const contents: GetBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupPlanOutput",
    BackupPlan: undefined,
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    DeletionDate: undefined,
    LastExecutionDate: undefined,
    VersionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1_1BackupPlan(
      data.BackupPlan,
      context
    );
  }
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.DeletionDate !== undefined && data.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(data.DeletionDate * 1000));
  }
  if (data.LastExecutionDate !== undefined && data.LastExecutionDate !== null) {
    contents.LastExecutionDate = new Date(
      Math.round(data.LastExecutionDate * 1000)
    );
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupPlanFromJSONCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupPlanFromJSONCommandError(
      output,
      context
    );
  }
  const contents: GetBackupPlanFromJSONCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupPlanFromJSONOutput",
    BackupPlan: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlan !== undefined && data.BackupPlan !== null) {
    contents.BackupPlan = deserializeAws_restJson1_1BackupPlan(
      data.BackupPlan,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupPlanFromJSONCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupPlanFromTemplateCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupPlanFromTemplateCommandError(
      output,
      context
    );
  }
  const contents: GetBackupPlanFromTemplateCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupPlanFromTemplateOutput",
    BackupPlanDocument: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BackupPlanDocument !== undefined &&
    data.BackupPlanDocument !== null
  ) {
    contents.BackupPlanDocument = deserializeAws_restJson1_1BackupPlan(
      data.BackupPlanDocument,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupPlanFromTemplateCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupSelectionCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupSelectionCommandError(
      output,
      context
    );
  }
  const contents: GetBackupSelectionCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupSelectionOutput",
    BackupPlanId: undefined,
    BackupSelection: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    SelectionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.BackupSelection !== undefined && data.BackupSelection !== null) {
    contents.BackupSelection = deserializeAws_restJson1_1BackupSelection(
      data.BackupSelection,
      context
    );
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.SelectionId !== undefined && data.SelectionId !== null) {
    contents.SelectionId = data.SelectionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupSelectionCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: GetBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupVaultAccessPolicyOutput",
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    Policy: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.Policy !== undefined && data.Policy !== null) {
    contents.Policy = data.Policy;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetBackupVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetBackupVaultNotificationsCommandError(
      output,
      context
    );
  }
  const contents: GetBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetBackupVaultNotificationsOutput",
    BackupVaultArn: undefined,
    BackupVaultEvents: undefined,
    BackupVaultName: undefined,
    SNSTopicArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.BackupVaultEvents !== undefined && data.BackupVaultEvents !== null) {
    contents.BackupVaultEvents = deserializeAws_restJson1_1BackupVaultEvents(
      data.BackupVaultEvents,
      context
    );
  }
  if (data.BackupVaultName !== undefined && data.BackupVaultName !== null) {
    contents.BackupVaultName = data.BackupVaultName;
  }
  if (data.SNSTopicArn !== undefined && data.SNSTopicArn !== null) {
    contents.SNSTopicArn = data.SNSTopicArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetBackupVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetRecoveryPointRestoreMetadataCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetRecoveryPointRestoreMetadataCommandError(
      output,
      context
    );
  }
  const contents: GetRecoveryPointRestoreMetadataCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetRecoveryPointRestoreMetadataOutput",
    BackupVaultArn: undefined,
    RecoveryPointArn: undefined,
    RestoreMetadata: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  if (data.RestoreMetadata !== undefined && data.RestoreMetadata !== null) {
    contents.RestoreMetadata = deserializeAws_restJson1_1Metadata(
      data.RestoreMetadata,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetRecoveryPointRestoreMetadataCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1GetSupportedResourceTypesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1GetSupportedResourceTypesCommandError(
      output,
      context
    );
  }
  const contents: GetSupportedResourceTypesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "GetSupportedResourceTypesOutput",
    ResourceTypes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.ResourceTypes !== undefined && data.ResourceTypes !== null) {
    contents.ResourceTypes = deserializeAws_restJson1_1ResourceTypes(
      data.ResourceTypes,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1GetSupportedResourceTypesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupJobsCommandError(
      output,
      context
    );
  }
  const contents: ListBackupJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupJobsOutput",
    BackupJobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupJobs !== undefined && data.BackupJobs !== null) {
    contents.BackupJobs = deserializeAws_restJson1_1BackupJobsList(
      data.BackupJobs,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupPlanTemplatesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupPlanTemplatesCommandError(
      output,
      context
    );
  }
  const contents: ListBackupPlanTemplatesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupPlanTemplatesOutput",
    BackupPlanTemplatesList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BackupPlanTemplatesList !== undefined &&
    data.BackupPlanTemplatesList !== null
  ) {
    contents.BackupPlanTemplatesList = deserializeAws_restJson1_1BackupPlanTemplatesList(
      data.BackupPlanTemplatesList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupPlanTemplatesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupPlanVersionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupPlanVersionsCommandError(
      output,
      context
    );
  }
  const contents: ListBackupPlanVersionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupPlanVersionsOutput",
    BackupPlanVersionsList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BackupPlanVersionsList !== undefined &&
    data.BackupPlanVersionsList !== null
  ) {
    contents.BackupPlanVersionsList = deserializeAws_restJson1_1BackupPlanVersionsList(
      data.BackupPlanVersionsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupPlanVersionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupPlansCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupPlansCommandError(
      output,
      context
    );
  }
  const contents: ListBackupPlansCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupPlansOutput",
    BackupPlansList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlansList !== undefined && data.BackupPlansList !== null) {
    contents.BackupPlansList = deserializeAws_restJson1_1BackupPlansList(
      data.BackupPlansList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupPlansCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupSelectionsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupSelectionsCommandError(
      output,
      context
    );
  }
  const contents: ListBackupSelectionsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupSelectionsOutput",
    BackupSelectionsList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (
    data.BackupSelectionsList !== undefined &&
    data.BackupSelectionsList !== null
  ) {
    contents.BackupSelectionsList = deserializeAws_restJson1_1BackupSelectionsList(
      data.BackupSelectionsList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupSelectionsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListBackupVaultsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListBackupVaultsCommandError(
      output,
      context
    );
  }
  const contents: ListBackupVaultsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListBackupVaultsOutput",
    BackupVaultList: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultList !== undefined && data.BackupVaultList !== null) {
    contents.BackupVaultList = deserializeAws_restJson1_1BackupVaultList(
      data.BackupVaultList,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListBackupVaultsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListCopyJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListCopyJobsCommandError(output, context);
  }
  const contents: ListCopyJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListCopyJobsOutput",
    CopyJobs: undefined,
    NextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJobs !== undefined && data.CopyJobs !== null) {
    contents.CopyJobs = deserializeAws_restJson1_1CopyJobsList(
      data.CopyJobs,
      context
    );
  }
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListCopyJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListProtectedResourcesCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListProtectedResourcesCommandError(
      output,
      context
    );
  }
  const contents: ListProtectedResourcesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListProtectedResourcesOutput",
    NextToken: undefined,
    Results: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Results !== undefined && data.Results !== null) {
    contents.Results = deserializeAws_restJson1_1ProtectedResourcesList(
      data.Results,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListProtectedResourcesCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListRecoveryPointsByBackupVaultCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRecoveryPointsByBackupVaultCommandError(
      output,
      context
    );
  }
  const contents: ListRecoveryPointsByBackupVaultCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRecoveryPointsByBackupVaultOutput",
    NextToken: undefined,
    RecoveryPoints: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1_1RecoveryPointByBackupVaultList(
      data.RecoveryPoints,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRecoveryPointsByBackupVaultCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListRecoveryPointsByResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRecoveryPointsByResourceCommandError(
      output,
      context
    );
  }
  const contents: ListRecoveryPointsByResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRecoveryPointsByResourceOutput",
    NextToken: undefined,
    RecoveryPoints: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RecoveryPoints !== undefined && data.RecoveryPoints !== null) {
    contents.RecoveryPoints = deserializeAws_restJson1_1RecoveryPointByResourceList(
      data.RecoveryPoints,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRecoveryPointsByResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListRestoreJobsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRestoreJobsCommandError(
      output,
      context
    );
  }
  const contents: ListRestoreJobsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRestoreJobsOutput",
    NextToken: undefined,
    RestoreJobs: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.RestoreJobs !== undefined && data.RestoreJobs !== null) {
    contents.RestoreJobs = deserializeAws_restJson1_1RestoreJobsList(
      data.RestoreJobs,
      context
    );
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListRestoreJobsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1ListTagsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsCommandError(output, context);
  }
  const contents: ListTagsCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsOutput",
    NextToken: undefined,
    Tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.NextToken !== undefined && data.NextToken !== null) {
    contents.NextToken = data.NextToken;
  }
  if (data.Tags !== undefined && data.Tags !== null) {
    contents.Tags = deserializeAws_restJson1_1Tags(data.Tags, context);
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1ListTagsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1PutBackupVaultAccessPolicyCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutBackupVaultAccessPolicyCommandError(
      output,
      context
    );
  }
  const contents: PutBackupVaultAccessPolicyCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutBackupVaultAccessPolicyCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1PutBackupVaultNotificationsCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1PutBackupVaultNotificationsCommandError(
      output,
      context
    );
  }
  const contents: PutBackupVaultNotificationsCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1PutBackupVaultNotificationsCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1StartBackupJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartBackupJobCommandError(
      output,
      context
    );
  }
  const contents: StartBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartBackupJobOutput",
    BackupJobId: undefined,
    CreationDate: undefined,
    RecoveryPointArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupJobId !== undefined && data.BackupJobId !== null) {
    contents.BackupJobId = data.BackupJobId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartBackupJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1StartCopyJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartCopyJobCommandError(output, context);
  }
  const contents: StartCopyJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartCopyJobOutput",
    CopyJobId: undefined,
    CreationDate: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.CopyJobId !== undefined && data.CopyJobId !== null) {
    contents.CopyJobId = data.CopyJobId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartCopyJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1StartRestoreJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StartRestoreJobCommandError(
      output,
      context
    );
  }
  const contents: StartRestoreJobCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "StartRestoreJobOutput",
    RestoreJobId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.RestoreJobId !== undefined && data.RestoreJobId !== null) {
    contents.RestoreJobId = data.RestoreJobId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StartRestoreJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1StopBackupJobCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1StopBackupJobCommandError(output, context);
  }
  const contents: StopBackupJobCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1StopBackupJobCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InvalidRequestException":
    case "com.amazonaws.services.cryo#InvalidRequestException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidRequestExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1TagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1TagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.services.cryo#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1UntagResourceCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output)
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UntagResourceCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1UpdateBackupPlanCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateBackupPlanCommandError(
      output,
      context
    );
  }
  const contents: UpdateBackupPlanCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateBackupPlanOutput",
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    CreationDate: undefined,
    VersionId: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupPlanArn !== undefined && data.BackupPlanArn !== null) {
    contents.BackupPlanArn = data.BackupPlanArn;
  }
  if (data.BackupPlanId !== undefined && data.BackupPlanId !== null) {
    contents.BackupPlanId = data.BackupPlanId;
  }
  if (data.CreationDate !== undefined && data.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(data.CreationDate * 1000));
  }
  if (data.VersionId !== undefined && data.VersionId !== null) {
    contents.VersionId = data.VersionId;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateBackupPlanCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

export async function deserializeAws_restJson1_1UpdateRecoveryPointLifecycleCommand(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRecoveryPointLifecycleCommandError(
      output,
      context
    );
  }
  const contents: UpdateRecoveryPointLifecycleCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRecoveryPointLifecycleOutput",
    BackupVaultArn: undefined,
    CalculatedLifecycle: undefined,
    Lifecycle: undefined,
    RecoveryPointArn: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.BackupVaultArn !== undefined && data.BackupVaultArn !== null) {
    contents.BackupVaultArn = data.BackupVaultArn;
  }
  if (
    data.CalculatedLifecycle !== undefined &&
    data.CalculatedLifecycle !== null
  ) {
    contents.CalculatedLifecycle = deserializeAws_restJson1_1CalculatedLifecycle(
      data.CalculatedLifecycle,
      context
    );
  }
  if (data.Lifecycle !== undefined && data.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1_1Lifecycle(
      data.Lifecycle,
      context
    );
  }
  if (data.RecoveryPointArn !== undefined && data.RecoveryPointArn !== null) {
    contents.RecoveryPointArn = data.RecoveryPointArn;
  }
  return Promise.resolve(contents);
}

async function deserializeAws_restJson1_1UpdateRecoveryPointLifecycleCommandError(
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> {
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: String = "UnknownError";
  if (output.headers["x-amzn-errortype"]) {
    errorCode = output.headers["x-amzn-errortype"].split(":")[0];
  }
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.services.cryo#InvalidParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1InvalidParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "MissingParameterValueException":
    case "com.amazonaws.services.cryo#MissingParameterValueException":
      response = {
        ...(await deserializeAws_restJson1_1MissingParameterValueExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceNotFoundException":
    case "com.amazonaws.services.cryo#ResourceNotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceNotFoundExceptionResponse(
          output,
          context
        )),
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.services.cryo#ServiceUnavailableException":
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

const deserializeAws_restJson1_1AlreadyExistsExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: AlreadyExistsException = {
    name: "AlreadyExistsException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Arn: undefined,
    Code: undefined,
    Context: undefined,
    CreatorRequestId: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Arn !== undefined && data.Arn !== null) {
    contents.Arn = data.Arn;
  }
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.CreatorRequestId !== undefined && data.CreatorRequestId !== null) {
    contents.CreatorRequestId = data.CreatorRequestId;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1DependencyFailureExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<DependencyFailureException> => {
  const contents: DependencyFailureException = {
    name: "DependencyFailureException",
    $fault: "server",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const deserializeAws_restJson1_1InvalidRequestExceptionResponse = async (
  output: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: InvalidRequestException = {
    name: "InvalidRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(output),
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
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
    Code: undefined,
    Context: undefined,
    Message: undefined,
    Type: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.Code !== undefined && data.Code !== null) {
    contents.Code = data.Code;
  }
  if (data.Context !== undefined && data.Context !== null) {
    contents.Context = data.Context;
  }
  if (data.Message !== undefined && data.Message !== null) {
    contents.Message = data.Message;
  }
  if (data.Type !== undefined && data.Type !== null) {
    contents.Type = data.Type;
  }
  return contents;
};

const serializeAws_restJson1_1BackupPlanInput = (
  input: BackupPlanInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.BackupPlanName !== undefined) {
    bodyParams["BackupPlanName"] = input.BackupPlanName;
  }
  if (input.Rules !== undefined) {
    bodyParams["Rules"] = serializeAws_restJson1_1BackupRulesInput(
      input.Rules,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1BackupRuleInput = (
  input: BackupRuleInput,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.CompletionWindowMinutes !== undefined) {
    bodyParams["CompletionWindowMinutes"] = input.CompletionWindowMinutes;
  }
  if (input.CopyActions !== undefined) {
    bodyParams["CopyActions"] = serializeAws_restJson1_1CopyActions(
      input.CopyActions,
      context
    );
  }
  if (input.Lifecycle !== undefined) {
    bodyParams["Lifecycle"] = serializeAws_restJson1_1Lifecycle(
      input.Lifecycle,
      context
    );
  }
  if (input.RecoveryPointTags !== undefined) {
    bodyParams["RecoveryPointTags"] = serializeAws_restJson1_1Tags(
      input.RecoveryPointTags,
      context
    );
  }
  if (input.RuleName !== undefined) {
    bodyParams["RuleName"] = input.RuleName;
  }
  if (input.ScheduleExpression !== undefined) {
    bodyParams["ScheduleExpression"] = input.ScheduleExpression;
  }
  if (input.StartWindowMinutes !== undefined) {
    bodyParams["StartWindowMinutes"] = input.StartWindowMinutes;
  }
  if (input.TargetBackupVaultName !== undefined) {
    bodyParams["TargetBackupVaultName"] = input.TargetBackupVaultName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BackupRulesInput = (
  input: Array<BackupRuleInput>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1BackupRuleInput(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1BackupSelection = (
  input: BackupSelection,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.IamRoleArn !== undefined) {
    bodyParams["IamRoleArn"] = input.IamRoleArn;
  }
  if (input.ListOfTags !== undefined) {
    bodyParams["ListOfTags"] = serializeAws_restJson1_1ListOfTags(
      input.ListOfTags,
      context
    );
  }
  if (input.Resources !== undefined) {
    bodyParams["Resources"] = serializeAws_restJson1_1ResourceArns(
      input.Resources,
      context
    );
  }
  if (input.SelectionName !== undefined) {
    bodyParams["SelectionName"] = input.SelectionName;
  }
  return bodyParams;
};

const serializeAws_restJson1_1BackupVaultEvents = (
  input: Array<BackupVaultEvent | string>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(entry);
  }
  return contents;
};

const serializeAws_restJson1_1Condition = (
  input: Condition,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.ConditionKey !== undefined) {
    bodyParams["ConditionKey"] = input.ConditionKey;
  }
  if (input.ConditionType !== undefined) {
    bodyParams["ConditionType"] = input.ConditionType;
  }
  if (input.ConditionValue !== undefined) {
    bodyParams["ConditionValue"] = input.ConditionValue;
  }
  return bodyParams;
};

const serializeAws_restJson1_1CopyAction = (
  input: CopyAction,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DestinationBackupVaultArn !== undefined) {
    bodyParams["DestinationBackupVaultArn"] = input.DestinationBackupVaultArn;
  }
  if (input.Lifecycle !== undefined) {
    bodyParams["Lifecycle"] = serializeAws_restJson1_1Lifecycle(
      input.Lifecycle,
      context
    );
  }
  return bodyParams;
};

const serializeAws_restJson1_1CopyActions = (
  input: Array<CopyAction>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1CopyAction(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Lifecycle = (
  input: Lifecycle,
  context: __SerdeContext
): any => {
  const bodyParams: any = {};
  if (input.DeleteAfterDays !== undefined) {
    bodyParams["DeleteAfterDays"] = input.DeleteAfterDays;
  }
  if (input.MoveToColdStorageAfterDays !== undefined) {
    bodyParams["MoveToColdStorageAfterDays"] = input.MoveToColdStorageAfterDays;
  }
  return bodyParams;
};

const serializeAws_restJson1_1ListOfTags = (
  input: Array<Condition>,
  context: __SerdeContext
): any => {
  const contents = [];
  for (let entry of input) {
    contents.push(serializeAws_restJson1_1Condition(entry, context));
  }
  return contents;
};

const serializeAws_restJson1_1Metadata = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const serializeAws_restJson1_1ResourceArns = (
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

const serializeAws_restJson1_1Tags = (
  input: { [key: string]: string },
  context: __SerdeContext
): any => {
  const mapParams: any = {};
  Object.keys(input).forEach(key => {
    mapParams[key] = input[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1BackupJob = (
  output: any,
  context: __SerdeContext
): BackupJob => {
  let contents: any = {
    __type: "BackupJob",
    BackupJobId: undefined,
    BackupSizeInBytes: undefined,
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
    StatusMessage: undefined
  };
  if (output.BackupJobId !== undefined && output.BackupJobId !== null) {
    contents.BackupJobId = output.BackupJobId;
  }
  if (
    output.BackupSizeInBytes !== undefined &&
    output.BackupSizeInBytes !== null
  ) {
    contents.BackupSizeInBytes = output.BackupSizeInBytes;
  }
  if (output.BackupVaultArn !== undefined && output.BackupVaultArn !== null) {
    contents.BackupVaultArn = output.BackupVaultArn;
  }
  if (output.BackupVaultName !== undefined && output.BackupVaultName !== null) {
    contents.BackupVaultName = output.BackupVaultName;
  }
  if (
    output.BytesTransferred !== undefined &&
    output.BytesTransferred !== null
  ) {
    contents.BytesTransferred = output.BytesTransferred;
  }
  if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
    contents.CompletionDate = new Date(
      Math.round(output.CompletionDate * 1000)
    );
  }
  if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1_1RecoveryPointCreator(
      output.CreatedBy,
      context
    );
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.ExpectedCompletionDate !== undefined &&
    output.ExpectedCompletionDate !== null
  ) {
    contents.ExpectedCompletionDate = new Date(
      Math.round(output.ExpectedCompletionDate * 1000)
    );
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.PercentDone !== undefined && output.PercentDone !== null) {
    contents.PercentDone = output.PercentDone;
  }
  if (
    output.RecoveryPointArn !== undefined &&
    output.RecoveryPointArn !== null
  ) {
    contents.RecoveryPointArn = output.RecoveryPointArn;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.StartBy !== undefined && output.StartBy !== null) {
    contents.StartBy = new Date(Math.round(output.StartBy * 1000));
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupJobsList = (
  output: any,
  context: __SerdeContext
): Array<BackupJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupJob(entry, context)
  );
};

const deserializeAws_restJson1_1BackupPlan = (
  output: any,
  context: __SerdeContext
): BackupPlan => {
  let contents: any = {
    __type: "BackupPlan",
    BackupPlanName: undefined,
    Rules: undefined
  };
  if (output.BackupPlanName !== undefined && output.BackupPlanName !== null) {
    contents.BackupPlanName = output.BackupPlanName;
  }
  if (output.Rules !== undefined && output.Rules !== null) {
    contents.Rules = deserializeAws_restJson1_1BackupRules(
      output.Rules,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1BackupPlanTemplatesList = (
  output: any,
  context: __SerdeContext
): Array<BackupPlanTemplatesListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupPlanTemplatesListMember(entry, context)
  );
};

const deserializeAws_restJson1_1BackupPlanTemplatesListMember = (
  output: any,
  context: __SerdeContext
): BackupPlanTemplatesListMember => {
  let contents: any = {
    __type: "BackupPlanTemplatesListMember",
    BackupPlanTemplateId: undefined,
    BackupPlanTemplateName: undefined
  };
  if (
    output.BackupPlanTemplateId !== undefined &&
    output.BackupPlanTemplateId !== null
  ) {
    contents.BackupPlanTemplateId = output.BackupPlanTemplateId;
  }
  if (
    output.BackupPlanTemplateName !== undefined &&
    output.BackupPlanTemplateName !== null
  ) {
    contents.BackupPlanTemplateName = output.BackupPlanTemplateName;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupPlanVersionsList = (
  output: any,
  context: __SerdeContext
): Array<BackupPlansListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupPlansListMember(entry, context)
  );
};

const deserializeAws_restJson1_1BackupPlansList = (
  output: any,
  context: __SerdeContext
): Array<BackupPlansListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupPlansListMember(entry, context)
  );
};

const deserializeAws_restJson1_1BackupPlansListMember = (
  output: any,
  context: __SerdeContext
): BackupPlansListMember => {
  let contents: any = {
    __type: "BackupPlansListMember",
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    BackupPlanName: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    DeletionDate: undefined,
    LastExecutionDate: undefined,
    VersionId: undefined
  };
  if (output.BackupPlanArn !== undefined && output.BackupPlanArn !== null) {
    contents.BackupPlanArn = output.BackupPlanArn;
  }
  if (output.BackupPlanId !== undefined && output.BackupPlanId !== null) {
    contents.BackupPlanId = output.BackupPlanId;
  }
  if (output.BackupPlanName !== undefined && output.BackupPlanName !== null) {
    contents.BackupPlanName = output.BackupPlanName;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.DeletionDate !== undefined && output.DeletionDate !== null) {
    contents.DeletionDate = new Date(Math.round(output.DeletionDate * 1000));
  }
  if (
    output.LastExecutionDate !== undefined &&
    output.LastExecutionDate !== null
  ) {
    contents.LastExecutionDate = new Date(
      Math.round(output.LastExecutionDate * 1000)
    );
  }
  if (output.VersionId !== undefined && output.VersionId !== null) {
    contents.VersionId = output.VersionId;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupRule = (
  output: any,
  context: __SerdeContext
): BackupRule => {
  let contents: any = {
    __type: "BackupRule",
    CompletionWindowMinutes: undefined,
    CopyActions: undefined,
    Lifecycle: undefined,
    RecoveryPointTags: undefined,
    RuleId: undefined,
    RuleName: undefined,
    ScheduleExpression: undefined,
    StartWindowMinutes: undefined,
    TargetBackupVaultName: undefined
  };
  if (
    output.CompletionWindowMinutes !== undefined &&
    output.CompletionWindowMinutes !== null
  ) {
    contents.CompletionWindowMinutes = output.CompletionWindowMinutes;
  }
  if (output.CopyActions !== undefined && output.CopyActions !== null) {
    contents.CopyActions = deserializeAws_restJson1_1CopyActions(
      output.CopyActions,
      context
    );
  }
  if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1_1Lifecycle(
      output.Lifecycle,
      context
    );
  }
  if (
    output.RecoveryPointTags !== undefined &&
    output.RecoveryPointTags !== null
  ) {
    contents.RecoveryPointTags = deserializeAws_restJson1_1Tags(
      output.RecoveryPointTags,
      context
    );
  }
  if (output.RuleId !== undefined && output.RuleId !== null) {
    contents.RuleId = output.RuleId;
  }
  if (output.RuleName !== undefined && output.RuleName !== null) {
    contents.RuleName = output.RuleName;
  }
  if (
    output.ScheduleExpression !== undefined &&
    output.ScheduleExpression !== null
  ) {
    contents.ScheduleExpression = output.ScheduleExpression;
  }
  if (
    output.StartWindowMinutes !== undefined &&
    output.StartWindowMinutes !== null
  ) {
    contents.StartWindowMinutes = output.StartWindowMinutes;
  }
  if (
    output.TargetBackupVaultName !== undefined &&
    output.TargetBackupVaultName !== null
  ) {
    contents.TargetBackupVaultName = output.TargetBackupVaultName;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupRules = (
  output: any,
  context: __SerdeContext
): Array<BackupRule> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupRule(entry, context)
  );
};

const deserializeAws_restJson1_1BackupSelection = (
  output: any,
  context: __SerdeContext
): BackupSelection => {
  let contents: any = {
    __type: "BackupSelection",
    IamRoleArn: undefined,
    ListOfTags: undefined,
    Resources: undefined,
    SelectionName: undefined
  };
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.ListOfTags !== undefined && output.ListOfTags !== null) {
    contents.ListOfTags = deserializeAws_restJson1_1ListOfTags(
      output.ListOfTags,
      context
    );
  }
  if (output.Resources !== undefined && output.Resources !== null) {
    contents.Resources = deserializeAws_restJson1_1ResourceArns(
      output.Resources,
      context
    );
  }
  if (output.SelectionName !== undefined && output.SelectionName !== null) {
    contents.SelectionName = output.SelectionName;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupSelectionsList = (
  output: any,
  context: __SerdeContext
): Array<BackupSelectionsListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupSelectionsListMember(entry, context)
  );
};

const deserializeAws_restJson1_1BackupSelectionsListMember = (
  output: any,
  context: __SerdeContext
): BackupSelectionsListMember => {
  let contents: any = {
    __type: "BackupSelectionsListMember",
    BackupPlanId: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    IamRoleArn: undefined,
    SelectionId: undefined,
    SelectionName: undefined
  };
  if (output.BackupPlanId !== undefined && output.BackupPlanId !== null) {
    contents.BackupPlanId = output.BackupPlanId;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.SelectionId !== undefined && output.SelectionId !== null) {
    contents.SelectionId = output.SelectionId;
  }
  if (output.SelectionName !== undefined && output.SelectionName !== null) {
    contents.SelectionName = output.SelectionName;
  }
  return contents;
};

const deserializeAws_restJson1_1BackupVaultEvents = (
  output: any,
  context: __SerdeContext
): Array<BackupVaultEvent | string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1BackupVaultList = (
  output: any,
  context: __SerdeContext
): Array<BackupVaultListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1BackupVaultListMember(entry, context)
  );
};

const deserializeAws_restJson1_1BackupVaultListMember = (
  output: any,
  context: __SerdeContext
): BackupVaultListMember => {
  let contents: any = {
    __type: "BackupVaultListMember",
    BackupVaultArn: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
    CreatorRequestId: undefined,
    EncryptionKeyArn: undefined,
    NumberOfRecoveryPoints: undefined
  };
  if (output.BackupVaultArn !== undefined && output.BackupVaultArn !== null) {
    contents.BackupVaultArn = output.BackupVaultArn;
  }
  if (output.BackupVaultName !== undefined && output.BackupVaultName !== null) {
    contents.BackupVaultName = output.BackupVaultName;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.CreatorRequestId !== undefined &&
    output.CreatorRequestId !== null
  ) {
    contents.CreatorRequestId = output.CreatorRequestId;
  }
  if (
    output.EncryptionKeyArn !== undefined &&
    output.EncryptionKeyArn !== null
  ) {
    contents.EncryptionKeyArn = output.EncryptionKeyArn;
  }
  if (
    output.NumberOfRecoveryPoints !== undefined &&
    output.NumberOfRecoveryPoints !== null
  ) {
    contents.NumberOfRecoveryPoints = output.NumberOfRecoveryPoints;
  }
  return contents;
};

const deserializeAws_restJson1_1CalculatedLifecycle = (
  output: any,
  context: __SerdeContext
): CalculatedLifecycle => {
  let contents: any = {
    __type: "CalculatedLifecycle",
    DeleteAt: undefined,
    MoveToColdStorageAt: undefined
  };
  if (output.DeleteAt !== undefined && output.DeleteAt !== null) {
    contents.DeleteAt = new Date(Math.round(output.DeleteAt * 1000));
  }
  if (
    output.MoveToColdStorageAt !== undefined &&
    output.MoveToColdStorageAt !== null
  ) {
    contents.MoveToColdStorageAt = new Date(
      Math.round(output.MoveToColdStorageAt * 1000)
    );
  }
  return contents;
};

const deserializeAws_restJson1_1Condition = (
  output: any,
  context: __SerdeContext
): Condition => {
  let contents: any = {
    __type: "Condition",
    ConditionKey: undefined,
    ConditionType: undefined,
    ConditionValue: undefined
  };
  if (output.ConditionKey !== undefined && output.ConditionKey !== null) {
    contents.ConditionKey = output.ConditionKey;
  }
  if (output.ConditionType !== undefined && output.ConditionType !== null) {
    contents.ConditionType = output.ConditionType;
  }
  if (output.ConditionValue !== undefined && output.ConditionValue !== null) {
    contents.ConditionValue = output.ConditionValue;
  }
  return contents;
};

const deserializeAws_restJson1_1CopyAction = (
  output: any,
  context: __SerdeContext
): CopyAction => {
  let contents: any = {
    __type: "CopyAction",
    DestinationBackupVaultArn: undefined,
    Lifecycle: undefined
  };
  if (
    output.DestinationBackupVaultArn !== undefined &&
    output.DestinationBackupVaultArn !== null
  ) {
    contents.DestinationBackupVaultArn = output.DestinationBackupVaultArn;
  }
  if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1_1Lifecycle(
      output.Lifecycle,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1_1CopyActions = (
  output: any,
  context: __SerdeContext
): Array<CopyAction> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CopyAction(entry, context)
  );
};

const deserializeAws_restJson1_1CopyJob = (
  output: any,
  context: __SerdeContext
): CopyJob => {
  let contents: any = {
    __type: "CopyJob",
    BackupSizeInBytes: undefined,
    CompletionDate: undefined,
    CopyJobId: undefined,
    CreatedBy: undefined,
    CreationDate: undefined,
    DestinationBackupVaultArn: undefined,
    DestinationRecoveryPointArn: undefined,
    IamRoleArn: undefined,
    ResourceArn: undefined,
    ResourceType: undefined,
    SourceBackupVaultArn: undefined,
    SourceRecoveryPointArn: undefined,
    State: undefined,
    StatusMessage: undefined
  };
  if (
    output.BackupSizeInBytes !== undefined &&
    output.BackupSizeInBytes !== null
  ) {
    contents.BackupSizeInBytes = output.BackupSizeInBytes;
  }
  if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
    contents.CompletionDate = new Date(
      Math.round(output.CompletionDate * 1000)
    );
  }
  if (output.CopyJobId !== undefined && output.CopyJobId !== null) {
    contents.CopyJobId = output.CopyJobId;
  }
  if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1_1RecoveryPointCreator(
      output.CreatedBy,
      context
    );
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.DestinationBackupVaultArn !== undefined &&
    output.DestinationBackupVaultArn !== null
  ) {
    contents.DestinationBackupVaultArn = output.DestinationBackupVaultArn;
  }
  if (
    output.DestinationRecoveryPointArn !== undefined &&
    output.DestinationRecoveryPointArn !== null
  ) {
    contents.DestinationRecoveryPointArn = output.DestinationRecoveryPointArn;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (
    output.SourceBackupVaultArn !== undefined &&
    output.SourceBackupVaultArn !== null
  ) {
    contents.SourceBackupVaultArn = output.SourceBackupVaultArn;
  }
  if (
    output.SourceRecoveryPointArn !== undefined &&
    output.SourceRecoveryPointArn !== null
  ) {
    contents.SourceRecoveryPointArn = output.SourceRecoveryPointArn;
  }
  if (output.State !== undefined && output.State !== null) {
    contents.State = output.State;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1CopyJobsList = (
  output: any,
  context: __SerdeContext
): Array<CopyJob> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1CopyJob(entry, context)
  );
};

const deserializeAws_restJson1_1Lifecycle = (
  output: any,
  context: __SerdeContext
): Lifecycle => {
  let contents: any = {
    __type: "Lifecycle",
    DeleteAfterDays: undefined,
    MoveToColdStorageAfterDays: undefined
  };
  if (output.DeleteAfterDays !== undefined && output.DeleteAfterDays !== null) {
    contents.DeleteAfterDays = output.DeleteAfterDays;
  }
  if (
    output.MoveToColdStorageAfterDays !== undefined &&
    output.MoveToColdStorageAfterDays !== null
  ) {
    contents.MoveToColdStorageAfterDays = output.MoveToColdStorageAfterDays;
  }
  return contents;
};

const deserializeAws_restJson1_1ListOfTags = (
  output: any,
  context: __SerdeContext
): Array<Condition> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Condition(entry, context)
  );
};

const deserializeAws_restJson1_1Metadata = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
};

const deserializeAws_restJson1_1ProtectedResource = (
  output: any,
  context: __SerdeContext
): ProtectedResource => {
  let contents: any = {
    __type: "ProtectedResource",
    LastBackupTime: undefined,
    ResourceArn: undefined,
    ResourceType: undefined
  };
  if (output.LastBackupTime !== undefined && output.LastBackupTime !== null) {
    contents.LastBackupTime = new Date(
      Math.round(output.LastBackupTime * 1000)
    );
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  return contents;
};

const deserializeAws_restJson1_1ProtectedResourcesList = (
  output: any,
  context: __SerdeContext
): Array<ProtectedResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1ProtectedResource(entry, context)
  );
};

const deserializeAws_restJson1_1RecoveryPointByBackupVault = (
  output: any,
  context: __SerdeContext
): RecoveryPointByBackupVault => {
  let contents: any = {
    __type: "RecoveryPointByBackupVault",
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
    Status: undefined
  };
  if (
    output.BackupSizeInBytes !== undefined &&
    output.BackupSizeInBytes !== null
  ) {
    contents.BackupSizeInBytes = output.BackupSizeInBytes;
  }
  if (output.BackupVaultArn !== undefined && output.BackupVaultArn !== null) {
    contents.BackupVaultArn = output.BackupVaultArn;
  }
  if (output.BackupVaultName !== undefined && output.BackupVaultName !== null) {
    contents.BackupVaultName = output.BackupVaultName;
  }
  if (
    output.CalculatedLifecycle !== undefined &&
    output.CalculatedLifecycle !== null
  ) {
    contents.CalculatedLifecycle = deserializeAws_restJson1_1CalculatedLifecycle(
      output.CalculatedLifecycle,
      context
    );
  }
  if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
    contents.CompletionDate = new Date(
      Math.round(output.CompletionDate * 1000)
    );
  }
  if (output.CreatedBy !== undefined && output.CreatedBy !== null) {
    contents.CreatedBy = deserializeAws_restJson1_1RecoveryPointCreator(
      output.CreatedBy,
      context
    );
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.EncryptionKeyArn !== undefined &&
    output.EncryptionKeyArn !== null
  ) {
    contents.EncryptionKeyArn = output.EncryptionKeyArn;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.IsEncrypted !== undefined && output.IsEncrypted !== null) {
    contents.IsEncrypted = output.IsEncrypted;
  }
  if (output.LastRestoreTime !== undefined && output.LastRestoreTime !== null) {
    contents.LastRestoreTime = new Date(
      Math.round(output.LastRestoreTime * 1000)
    );
  }
  if (output.Lifecycle !== undefined && output.Lifecycle !== null) {
    contents.Lifecycle = deserializeAws_restJson1_1Lifecycle(
      output.Lifecycle,
      context
    );
  }
  if (
    output.RecoveryPointArn !== undefined &&
    output.RecoveryPointArn !== null
  ) {
    contents.RecoveryPointArn = output.RecoveryPointArn;
  }
  if (output.ResourceArn !== undefined && output.ResourceArn !== null) {
    contents.ResourceArn = output.ResourceArn;
  }
  if (output.ResourceType !== undefined && output.ResourceType !== null) {
    contents.ResourceType = output.ResourceType;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1RecoveryPointByBackupVaultList = (
  output: any,
  context: __SerdeContext
): Array<RecoveryPointByBackupVault> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RecoveryPointByBackupVault(entry, context)
  );
};

const deserializeAws_restJson1_1RecoveryPointByResource = (
  output: any,
  context: __SerdeContext
): RecoveryPointByResource => {
  let contents: any = {
    __type: "RecoveryPointByResource",
    BackupSizeBytes: undefined,
    BackupVaultName: undefined,
    CreationDate: undefined,
    EncryptionKeyArn: undefined,
    RecoveryPointArn: undefined,
    Status: undefined
  };
  if (output.BackupSizeBytes !== undefined && output.BackupSizeBytes !== null) {
    contents.BackupSizeBytes = output.BackupSizeBytes;
  }
  if (output.BackupVaultName !== undefined && output.BackupVaultName !== null) {
    contents.BackupVaultName = output.BackupVaultName;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.EncryptionKeyArn !== undefined &&
    output.EncryptionKeyArn !== null
  ) {
    contents.EncryptionKeyArn = output.EncryptionKeyArn;
  }
  if (
    output.RecoveryPointArn !== undefined &&
    output.RecoveryPointArn !== null
  ) {
    contents.RecoveryPointArn = output.RecoveryPointArn;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  return contents;
};

const deserializeAws_restJson1_1RecoveryPointByResourceList = (
  output: any,
  context: __SerdeContext
): Array<RecoveryPointByResource> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RecoveryPointByResource(entry, context)
  );
};

const deserializeAws_restJson1_1RecoveryPointCreator = (
  output: any,
  context: __SerdeContext
): RecoveryPointCreator => {
  let contents: any = {
    __type: "RecoveryPointCreator",
    BackupPlanArn: undefined,
    BackupPlanId: undefined,
    BackupPlanVersion: undefined,
    BackupRuleId: undefined
  };
  if (output.BackupPlanArn !== undefined && output.BackupPlanArn !== null) {
    contents.BackupPlanArn = output.BackupPlanArn;
  }
  if (output.BackupPlanId !== undefined && output.BackupPlanId !== null) {
    contents.BackupPlanId = output.BackupPlanId;
  }
  if (
    output.BackupPlanVersion !== undefined &&
    output.BackupPlanVersion !== null
  ) {
    contents.BackupPlanVersion = output.BackupPlanVersion;
  }
  if (output.BackupRuleId !== undefined && output.BackupRuleId !== null) {
    contents.BackupRuleId = output.BackupRuleId;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceArns = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1ResourceTypes = (
  output: any,
  context: __SerdeContext
): Array<string> => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1RestoreJobsList = (
  output: any,
  context: __SerdeContext
): Array<RestoreJobsListMember> => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RestoreJobsListMember(entry, context)
  );
};

const deserializeAws_restJson1_1RestoreJobsListMember = (
  output: any,
  context: __SerdeContext
): RestoreJobsListMember => {
  let contents: any = {
    __type: "RestoreJobsListMember",
    BackupSizeInBytes: undefined,
    CompletionDate: undefined,
    CreatedResourceArn: undefined,
    CreationDate: undefined,
    ExpectedCompletionTimeMinutes: undefined,
    IamRoleArn: undefined,
    PercentDone: undefined,
    RecoveryPointArn: undefined,
    RestoreJobId: undefined,
    Status: undefined,
    StatusMessage: undefined
  };
  if (
    output.BackupSizeInBytes !== undefined &&
    output.BackupSizeInBytes !== null
  ) {
    contents.BackupSizeInBytes = output.BackupSizeInBytes;
  }
  if (output.CompletionDate !== undefined && output.CompletionDate !== null) {
    contents.CompletionDate = new Date(
      Math.round(output.CompletionDate * 1000)
    );
  }
  if (
    output.CreatedResourceArn !== undefined &&
    output.CreatedResourceArn !== null
  ) {
    contents.CreatedResourceArn = output.CreatedResourceArn;
  }
  if (output.CreationDate !== undefined && output.CreationDate !== null) {
    contents.CreationDate = new Date(Math.round(output.CreationDate * 1000));
  }
  if (
    output.ExpectedCompletionTimeMinutes !== undefined &&
    output.ExpectedCompletionTimeMinutes !== null
  ) {
    contents.ExpectedCompletionTimeMinutes =
      output.ExpectedCompletionTimeMinutes;
  }
  if (output.IamRoleArn !== undefined && output.IamRoleArn !== null) {
    contents.IamRoleArn = output.IamRoleArn;
  }
  if (output.PercentDone !== undefined && output.PercentDone !== null) {
    contents.PercentDone = output.PercentDone;
  }
  if (
    output.RecoveryPointArn !== undefined &&
    output.RecoveryPointArn !== null
  ) {
    contents.RecoveryPointArn = output.RecoveryPointArn;
  }
  if (output.RestoreJobId !== undefined && output.RestoreJobId !== null) {
    contents.RestoreJobId = output.RestoreJobId;
  }
  if (output.Status !== undefined && output.Status !== null) {
    contents.Status = output.Status;
  }
  if (output.StatusMessage !== undefined && output.StatusMessage !== null) {
    contents.StatusMessage = output.StatusMessage;
  }
  return contents;
};

const deserializeAws_restJson1_1Tags = (
  output: any,
  context: __SerdeContext
): { [key: string]: string } => {
  const mapParams: any = {};
  Object.keys(output).forEach(key => {
    mapParams[key] = output[key];
  });
  return mapParams;
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
