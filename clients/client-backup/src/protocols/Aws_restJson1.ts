// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import {
  _json,
  collectBody,
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";
import { v4 as generateIdempotencyToken } from "uuid";

import { CancelLegalHoldCommandInput, CancelLegalHoldCommandOutput } from "../commands/CancelLegalHoldCommand";
import { CreateBackupPlanCommandInput, CreateBackupPlanCommandOutput } from "../commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "../commands/CreateBackupSelectionCommand";
import { CreateBackupVaultCommandInput, CreateBackupVaultCommandOutput } from "../commands/CreateBackupVaultCommand";
import { CreateFrameworkCommandInput, CreateFrameworkCommandOutput } from "../commands/CreateFrameworkCommand";
import { CreateLegalHoldCommandInput, CreateLegalHoldCommandOutput } from "../commands/CreateLegalHoldCommand";
import {
  CreateLogicallyAirGappedBackupVaultCommandInput,
  CreateLogicallyAirGappedBackupVaultCommandOutput,
} from "../commands/CreateLogicallyAirGappedBackupVaultCommand";
import { CreateReportPlanCommandInput, CreateReportPlanCommandOutput } from "../commands/CreateReportPlanCommand";
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
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
} from "../commands/DeleteBackupVaultLockConfigurationCommand";
import {
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "../commands/DeleteBackupVaultNotificationsCommand";
import { DeleteFrameworkCommandInput, DeleteFrameworkCommandOutput } from "../commands/DeleteFrameworkCommand";
import {
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "../commands/DeleteRecoveryPointCommand";
import { DeleteReportPlanCommandInput, DeleteReportPlanCommandOutput } from "../commands/DeleteReportPlanCommand";
import { DescribeBackupJobCommandInput, DescribeBackupJobCommandOutput } from "../commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "../commands/DescribeBackupVaultCommand";
import { DescribeCopyJobCommandInput, DescribeCopyJobCommandOutput } from "../commands/DescribeCopyJobCommand";
import { DescribeFrameworkCommandInput, DescribeFrameworkCommandOutput } from "../commands/DescribeFrameworkCommand";
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
import { DescribeReportJobCommandInput, DescribeReportJobCommandOutput } from "../commands/DescribeReportJobCommand";
import { DescribeReportPlanCommandInput, DescribeReportPlanCommandOutput } from "../commands/DescribeReportPlanCommand";
import { DescribeRestoreJobCommandInput, DescribeRestoreJobCommandOutput } from "../commands/DescribeRestoreJobCommand";
import {
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "../commands/DisassociateRecoveryPointCommand";
import {
  DisassociateRecoveryPointFromParentCommandInput,
  DisassociateRecoveryPointFromParentCommandOutput,
} from "../commands/DisassociateRecoveryPointFromParentCommand";
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
import { GetLegalHoldCommandInput, GetLegalHoldCommandOutput } from "../commands/GetLegalHoldCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "../commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "../commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "../commands/ListBackupJobsCommand";
import { ListBackupPlansCommandInput, ListBackupPlansCommandOutput } from "../commands/ListBackupPlansCommand";
import {
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "../commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "../commands/ListBackupPlanVersionsCommand";
import {
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "../commands/ListBackupSelectionsCommand";
import { ListBackupVaultsCommandInput, ListBackupVaultsCommandOutput } from "../commands/ListBackupVaultsCommand";
import { ListCopyJobsCommandInput, ListCopyJobsCommandOutput } from "../commands/ListCopyJobsCommand";
import { ListFrameworksCommandInput, ListFrameworksCommandOutput } from "../commands/ListFrameworksCommand";
import { ListLegalHoldsCommandInput, ListLegalHoldsCommandOutput } from "../commands/ListLegalHoldsCommand";
import {
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "../commands/ListProtectedResourcesByBackupVaultCommand";
import {
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "../commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "../commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "../commands/ListRecoveryPointsByLegalHoldCommand";
import {
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "../commands/ListRecoveryPointsByResourceCommand";
import { ListReportJobsCommandInput, ListReportJobsCommandOutput } from "../commands/ListReportJobsCommand";
import { ListReportPlansCommandInput, ListReportPlansCommandOutput } from "../commands/ListReportPlansCommand";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "../commands/ListRestoreJobsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "../commands/ListTagsCommand";
import {
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "../commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
} from "../commands/PutBackupVaultLockConfigurationCommand";
import {
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "../commands/PutBackupVaultNotificationsCommand";
import { StartBackupJobCommandInput, StartBackupJobCommandOutput } from "../commands/StartBackupJobCommand";
import { StartCopyJobCommandInput, StartCopyJobCommandOutput } from "../commands/StartCopyJobCommand";
import { StartReportJobCommandInput, StartReportJobCommandOutput } from "../commands/StartReportJobCommand";
import { StartRestoreJobCommandInput, StartRestoreJobCommandOutput } from "../commands/StartRestoreJobCommand";
import { StopBackupJobCommandInput, StopBackupJobCommandOutput } from "../commands/StopBackupJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "../commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "../commands/UntagResourceCommand";
import { UpdateBackupPlanCommandInput, UpdateBackupPlanCommandOutput } from "../commands/UpdateBackupPlanCommand";
import { UpdateFrameworkCommandInput, UpdateFrameworkCommandOutput } from "../commands/UpdateFrameworkCommand";
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
import { UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput } from "../commands/UpdateReportPlanCommand";
import { BackupServiceException as __BaseException } from "../models/BackupServiceException";
import {
  AdvancedBackupSetting,
  AlreadyExistsException,
  BackupJob,
  BackupPlanInput,
  BackupPlansListMember,
  BackupRuleInput,
  BackupSelection,
  BackupSelectionsListMember,
  BackupVaultEvent,
  BackupVaultListMember,
  CalculatedLifecycle,
  Condition,
  ConditionParameter,
  Conditions,
  ConflictException,
  ControlInputParameter,
  ControlScope,
  CopyAction,
  CopyJob,
  DateRange,
  DependencyFailureException,
  Framework,
  FrameworkControl,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidResourceStateException,
  LegalHold,
  Lifecycle,
  LimitExceededException,
  MissingParameterValueException,
  ProtectedResource,
  RecoveryPointByBackupVault,
  RecoveryPointByResource,
  RecoveryPointSelection,
  ReportDeliveryChannel,
  ReportJob,
  ReportPlan,
  ReportSetting,
  ResourceNotFoundException,
  RestoreJobsListMember,
  ServiceUnavailableException,
} from "../models/models_0";

/**
 * serializeAws_restJson1CancelLegalHoldCommand
 */
export const se_CancelLegalHoldCommand = async (
  input: CancelLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/legal-holds/{LegalHoldId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
  const query: any = map({
    cancelDescription: [, __expectNonNull(input.CancelDescription!, `CancelDescription`)],
    retainRecordInDays: [() => input.RetainRecordInDays !== void 0, () => input.RetainRecordInDays!.toString()],
  });
  let body: any;
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    query,
    body,
  });
};

/**
 * serializeAws_restJson1CreateBackupPlanCommand
 */
export const se_CreateBackupPlanCommand = async (
  input: CreateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans";
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlan: (_) => _json(_),
      BackupPlanTags: (_) => _json(_),
      CreatorRequestId: [],
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
 * serializeAws_restJson1CreateBackupSelectionCommand
 */
export const se_CreateBackupSelectionCommand = async (
  input: CreateBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/selections";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupSelection: (_) => _json(_),
      CreatorRequestId: [],
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
 * serializeAws_restJson1CreateBackupVaultCommand
 */
export const se_CreateBackupVaultCommand = async (
  input: CreateBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultTags: (_) => _json(_),
      CreatorRequestId: [],
      EncryptionKeyArn: [],
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
 * serializeAws_restJson1CreateFrameworkCommand
 */
export const se_CreateFrameworkCommand = async (
  input: CreateFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/frameworks";
  let body: any;
  body = JSON.stringify(
    take(input, {
      FrameworkControls: (_) => _json(_),
      FrameworkDescription: [],
      FrameworkName: [],
      FrameworkTags: (_) => _json(_),
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1CreateLegalHoldCommand
 */
export const se_CreateLegalHoldCommand = async (
  input: CreateLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/legal-holds";
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      IdempotencyToken: [],
      RecoveryPointSelection: (_) => se_RecoveryPointSelection(_, context),
      Tags: (_) => _json(_),
      Title: [],
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
 * serializeAws_restJson1CreateLogicallyAirGappedBackupVaultCommand
 */
export const se_CreateLogicallyAirGappedBackupVaultCommand = async (
  input: CreateLogicallyAirGappedBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/logically-air-gapped-backup-vaults/{BackupVaultName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultTags: (_) => _json(_),
      CreatorRequestId: [],
      MaxRetentionDays: [],
      MinRetentionDays: [],
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
 * serializeAws_restJson1CreateReportPlanCommand
 */
export const se_CreateReportPlanCommand = async (
  input: CreateReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-plans";
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ReportDeliveryChannel: (_) => _json(_),
      ReportPlanDescription: [],
      ReportPlanName: [],
      ReportPlanTags: (_) => _json(_),
      ReportSetting: (_) => _json(_),
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
 * serializeAws_restJson1DeleteBackupPlanCommand
 */
export const se_DeleteBackupPlanCommand = async (
  input: DeleteBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
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
 * serializeAws_restJson1DeleteBackupSelectionCommand
 */
export const se_DeleteBackupSelectionCommand = async (
  input: DeleteBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SelectionId", () => input.SelectionId!, "{SelectionId}", false);
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
 * serializeAws_restJson1DeleteBackupVaultCommand
 */
export const se_DeleteBackupVaultCommand = async (
  input: DeleteBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand
 */
export const se_DeleteBackupVaultAccessPolicyCommand = async (
  input: DeleteBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/access-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1DeleteBackupVaultLockConfigurationCommand
 */
export const se_DeleteBackupVaultLockConfigurationCommand = async (
  input: DeleteBackupVaultLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/vault-lock";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1DeleteBackupVaultNotificationsCommand
 */
export const se_DeleteBackupVaultNotificationsCommand = async (
  input: DeleteBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1DeleteFrameworkCommand
 */
export const se_DeleteFrameworkCommand = async (
  input: DeleteFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/frameworks/{FrameworkName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FrameworkName",
    () => input.FrameworkName!,
    "{FrameworkName}",
    false
  );
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
 * serializeAws_restJson1DeleteRecoveryPointCommand
 */
export const se_DeleteRecoveryPointCommand = async (
  input: DeleteRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
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
 * serializeAws_restJson1DeleteReportPlanCommand
 */
export const se_DeleteReportPlanCommand = async (
  input: DeleteReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-plans/{ReportPlanName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReportPlanName",
    () => input.ReportPlanName!,
    "{ReportPlanName}",
    false
  );
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
 * serializeAws_restJson1DescribeBackupJobCommand
 */
export const se_DescribeBackupJobCommand = async (
  input: DescribeBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs/{BackupJobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
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
 * serializeAws_restJson1DescribeBackupVaultCommand
 */
export const se_DescribeBackupVaultCommand = async (
  input: DescribeBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults/{BackupVaultName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  const query: any = map({
    backupVaultAccountId: [, input.BackupVaultAccountId!],
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
 * serializeAws_restJson1DescribeCopyJobCommand
 */
export const se_DescribeCopyJobCommand = async (
  input: DescribeCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs/{CopyJobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "CopyJobId", () => input.CopyJobId!, "{CopyJobId}", false);
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
 * serializeAws_restJson1DescribeFrameworkCommand
 */
export const se_DescribeFrameworkCommand = async (
  input: DescribeFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/frameworks/{FrameworkName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FrameworkName",
    () => input.FrameworkName!,
    "{FrameworkName}",
    false
  );
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
 * serializeAws_restJson1DescribeGlobalSettingsCommand
 */
export const se_DescribeGlobalSettingsCommand = async (
  input: DescribeGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-settings";
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

/**
 * serializeAws_restJson1DescribeProtectedResourceCommand
 */
export const se_DescribeProtectedResourceCommand = async (
  input: DescribeProtectedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
 * serializeAws_restJson1DescribeRecoveryPointCommand
 */
export const se_DescribeRecoveryPointCommand = async (
  input: DescribeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
  const query: any = map({
    backupVaultAccountId: [, input.BackupVaultAccountId!],
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
 * serializeAws_restJson1DescribeRegionSettingsCommand
 */
export const se_DescribeRegionSettingsCommand = async (
  input: DescribeRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account-settings";
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

/**
 * serializeAws_restJson1DescribeReportJobCommand
 */
export const se_DescribeReportJobCommand = async (
  input: DescribeReportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-jobs/{ReportJobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ReportJobId", () => input.ReportJobId!, "{ReportJobId}", false);
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
 * serializeAws_restJson1DescribeReportPlanCommand
 */
export const se_DescribeReportPlanCommand = async (
  input: DescribeReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-plans/{ReportPlanName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReportPlanName",
    () => input.ReportPlanName!,
    "{ReportPlanName}",
    false
  );
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
 * serializeAws_restJson1DescribeRestoreJobCommand
 */
export const se_DescribeRestoreJobCommand = async (
  input: DescribeRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs/{RestoreJobId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RestoreJobId",
    () => input.RestoreJobId!,
    "{RestoreJobId}",
    false
  );
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
 * serializeAws_restJson1DisassociateRecoveryPointCommand
 */
export const se_DisassociateRecoveryPointCommand = async (
  input: DisassociateRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
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
 * serializeAws_restJson1DisassociateRecoveryPointFromParentCommand
 */
export const se_DisassociateRecoveryPointFromParentCommand = async (
  input: DisassociateRecoveryPointFromParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
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
 * serializeAws_restJson1ExportBackupPlanTemplateCommand
 */
export const se_ExportBackupPlanTemplateCommand = async (
  input: ExportBackupPlanTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/toTemplate";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
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
 * serializeAws_restJson1GetBackupPlanCommand
 */
export const se_GetBackupPlanCommand = async (
  input: GetBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  const query: any = map({
    versionId: [, input.VersionId!],
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
 * serializeAws_restJson1GetBackupPlanFromJSONCommand
 */
export const se_GetBackupPlanFromJSONCommand = async (
  input: GetBackupPlanFromJSONCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/template/json/toPlan";
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlanTemplateJson: [],
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
 * serializeAws_restJson1GetBackupPlanFromTemplateCommand
 */
export const se_GetBackupPlanFromTemplateCommand = async (
  input: GetBackupPlanFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/template/plans/{BackupPlanTemplateId}/toPlan";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanTemplateId",
    () => input.BackupPlanTemplateId!,
    "{BackupPlanTemplateId}",
    false
  );
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
 * serializeAws_restJson1GetBackupSelectionCommand
 */
export const se_GetBackupSelectionCommand = async (
  input: GetBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup/plans/{BackupPlanId}/selections/{SelectionId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  resolvedPath = __resolvedPath(resolvedPath, input, "SelectionId", () => input.SelectionId!, "{SelectionId}", false);
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
 * serializeAws_restJson1GetBackupVaultAccessPolicyCommand
 */
export const se_GetBackupVaultAccessPolicyCommand = async (
  input: GetBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/access-policy";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1GetBackupVaultNotificationsCommand
 */
export const se_GetBackupVaultNotificationsCommand = async (
  input: GetBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/notification-configuration";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
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
 * serializeAws_restJson1GetLegalHoldCommand
 */
export const se_GetLegalHoldCommand = async (
  input: GetLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/legal-holds/{LegalHoldId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
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
 * serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand
 */
export const se_GetRecoveryPointRestoreMetadataCommand = async (
  input: GetRecoveryPointRestoreMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
  const query: any = map({
    backupVaultAccountId: [, input.BackupVaultAccountId!],
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
 * serializeAws_restJson1GetSupportedResourceTypesCommand
 */
export const se_GetSupportedResourceTypesCommand = async (
  input: GetSupportedResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath =
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

/**
 * serializeAws_restJson1ListBackupJobsCommand
 */
export const se_ListBackupJobsCommand = async (
  input: ListBackupJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    resourceArn: [, input.ByResourceArn!],
    state: [, input.ByState!],
    backupVaultName: [, input.ByBackupVaultName!],
    createdBefore: [
      () => input.ByCreatedBefore !== void 0,
      () => (input.ByCreatedBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.ByCreatedAfter !== void 0,
      () => (input.ByCreatedAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    resourceType: [, input.ByResourceType!],
    accountId: [, input.ByAccountId!],
    completeAfter: [
      () => input.ByCompleteAfter !== void 0,
      () => (input.ByCompleteAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    completeBefore: [
      () => input.ByCompleteBefore !== void 0,
      () => (input.ByCompleteBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    parentJobId: [, input.ByParentJobId!],
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
 * serializeAws_restJson1ListBackupPlansCommand
 */
export const se_ListBackupPlansCommand = async (
  input: ListBackupPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    includeDeleted: [() => input.IncludeDeleted !== void 0, () => input.IncludeDeleted!.toString()],
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
 * serializeAws_restJson1ListBackupPlanTemplatesCommand
 */
export const se_ListBackupPlanTemplatesCommand = async (
  input: ListBackupPlanTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/template/plans";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListBackupPlanVersionsCommand
 */
export const se_ListBackupPlanVersionsCommand = async (
  input: ListBackupPlanVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/versions";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListBackupSelectionsCommand
 */
export const se_ListBackupSelectionsCommand = async (
  input: ListBackupSelectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}/selections";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListBackupVaultsCommand
 */
export const se_ListBackupVaultsCommand = async (
  input: ListBackupVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-vaults";
  const query: any = map({
    vaultType: [, input.ByVaultType!],
    shared: [() => input.ByShared !== void 0, () => input.ByShared!.toString()],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListCopyJobsCommand
 */
export const se_ListCopyJobsCommand = async (
  input: ListCopyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    resourceArn: [, input.ByResourceArn!],
    state: [, input.ByState!],
    createdBefore: [
      () => input.ByCreatedBefore !== void 0,
      () => (input.ByCreatedBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.ByCreatedAfter !== void 0,
      () => (input.ByCreatedAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    resourceType: [, input.ByResourceType!],
    destinationVaultArn: [, input.ByDestinationVaultArn!],
    accountId: [, input.ByAccountId!],
    completeBefore: [
      () => input.ByCompleteBefore !== void 0,
      () => (input.ByCompleteBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    completeAfter: [
      () => input.ByCompleteAfter !== void 0,
      () => (input.ByCompleteAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    parentJobId: [, input.ByParentJobId!],
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
 * serializeAws_restJson1ListFrameworksCommand
 */
export const se_ListFrameworksCommand = async (
  input: ListFrameworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/frameworks";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListLegalHoldsCommand
 */
export const se_ListLegalHoldsCommand = async (
  input: ListLegalHoldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/legal-holds";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListProtectedResourcesCommand
 */
export const se_ListProtectedResourcesCommand = async (
  input: ListProtectedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListProtectedResourcesByBackupVaultCommand
 */
export const se_ListProtectedResourcesByBackupVaultCommand = async (
  input: ListProtectedResourcesByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/resources";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  const query: any = map({
    backupVaultAccountId: [, input.BackupVaultAccountId!],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand
 */
export const se_ListRecoveryPointsByBackupVaultCommand = async (
  input: ListRecoveryPointsByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/recovery-points";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  const query: any = map({
    backupVaultAccountId: [, input.BackupVaultAccountId!],
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    resourceArn: [, input.ByResourceArn!],
    resourceType: [, input.ByResourceType!],
    backupPlanId: [, input.ByBackupPlanId!],
    createdBefore: [
      () => input.ByCreatedBefore !== void 0,
      () => (input.ByCreatedBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.ByCreatedAfter !== void 0,
      () => (input.ByCreatedAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    parentRecoveryPointArn: [, input.ByParentRecoveryPointArn!],
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
 * serializeAws_restJson1ListRecoveryPointsByLegalHoldCommand
 */
export const se_ListRecoveryPointsByLegalHoldCommand = async (
  input: ListRecoveryPointsByLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/legal-holds/{LegalHoldId}/recovery-points";
  resolvedPath = __resolvedPath(resolvedPath, input, "LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListRecoveryPointsByResourceCommand
 */
export const se_ListRecoveryPointsByResourceCommand = async (
  input: ListRecoveryPointsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/resources/{ResourceArn}/recovery-points";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1ListReportJobsCommand
 */
export const se_ListReportJobsCommand = async (
  input: ListReportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-jobs";
  const query: any = map({
    ReportPlanName: [, input.ByReportPlanName!],
    CreationBefore: [
      () => input.ByCreationBefore !== void 0,
      () => (input.ByCreationBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    CreationAfter: [
      () => input.ByCreationAfter !== void 0,
      () => (input.ByCreationAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    Status: [, input.ByStatus!],
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListReportPlansCommand
 */
export const se_ListReportPlansCommand = async (
  input: ListReportPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-plans";
  const query: any = map({
    MaxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    NextToken: [, input.NextToken!],
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
 * serializeAws_restJson1ListRestoreJobsCommand
 */
export const se_ListRestoreJobsCommand = async (
  input: ListRestoreJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs";
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
    accountId: [, input.ByAccountId!],
    createdBefore: [
      () => input.ByCreatedBefore !== void 0,
      () => (input.ByCreatedBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    createdAfter: [
      () => input.ByCreatedAfter !== void 0,
      () => (input.ByCreatedAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
    status: [, input.ByStatus!],
    completeBefore: [
      () => input.ByCompleteBefore !== void 0,
      () => (input.ByCompleteBefore!.toISOString().split(".")[0] + "Z").toString(),
    ],
    completeAfter: [
      () => input.ByCompleteAfter !== void 0,
      () => (input.ByCompleteAfter!.toISOString().split(".")[0] + "Z").toString(),
    ],
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
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    nextToken: [, input.NextToken!],
    maxResults: [() => input.MaxResults !== void 0, () => input.MaxResults!.toString()],
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
 * serializeAws_restJson1PutBackupVaultAccessPolicyCommand
 */
export const se_PutBackupVaultAccessPolicyCommand = async (
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
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
 * serializeAws_restJson1PutBackupVaultLockConfigurationCommand
 */
export const se_PutBackupVaultLockConfigurationCommand = async (
  input: PutBackupVaultLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` +
    "/backup-vaults/{BackupVaultName}/vault-lock";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChangeableForDays: [],
      MaxRetentionDays: [],
      MinRetentionDays: [],
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
 * serializeAws_restJson1PutBackupVaultNotificationsCommand
 */
export const se_PutBackupVaultNotificationsCommand = async (
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultEvents: (_) => _json(_),
      SNSTopicArn: [],
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
 * serializeAws_restJson1StartBackupJobCommand
 */
export const se_StartBackupJobCommand = async (
  input: StartBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs";
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupOptions: (_) => _json(_),
      BackupVaultName: [],
      CompleteWindowMinutes: [],
      IamRoleArn: [],
      IdempotencyToken: [],
      Lifecycle: (_) => _json(_),
      RecoveryPointTags: (_) => _json(_),
      ResourceArn: [],
      StartWindowMinutes: [],
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
 * serializeAws_restJson1StartCopyJobCommand
 */
export const se_StartCopyJobCommand = async (
  input: StartCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/copy-jobs";
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationBackupVaultArn: [],
      IamRoleArn: [],
      IdempotencyToken: [],
      Lifecycle: (_) => _json(_),
      RecoveryPointArn: [],
      SourceBackupVaultName: [],
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
 * serializeAws_restJson1StartReportJobCommand
 */
export const se_StartReportJobCommand = async (
  input: StartReportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-jobs/{ReportPlanName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReportPlanName",
    () => input.ReportPlanName!,
    "{ReportPlanName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1StartRestoreJobCommand
 */
export const se_StartRestoreJobCommand = async (
  input: StartRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/restore-jobs";
  let body: any;
  body = JSON.stringify(
    take(input, {
      CopySourceTagsToRestoredResource: [],
      IamRoleArn: [],
      IdempotencyToken: [],
      Metadata: (_) => _json(_),
      RecoveryPointArn: [],
      ResourceType: [],
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
 * serializeAws_restJson1StopBackupJobCommand
 */
export const se_StopBackupJobCommand = async (
  input: StopBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {};
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup-jobs/{BackupJobId}";
  resolvedPath = __resolvedPath(resolvedPath, input, "BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
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
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/tags/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
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
    body,
  });
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/untag/{ResourceArn}";
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeyList: (_) => _json(_),
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
 * serializeAws_restJson1UpdateBackupPlanCommand
 */
export const se_UpdateBackupPlanCommand = async (
  input: UpdateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/backup/plans/{BackupPlanId}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupPlanId",
    () => input.BackupPlanId!,
    "{BackupPlanId}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlan: (_) => _json(_),
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
 * serializeAws_restJson1UpdateFrameworkCommand
 */
export const se_UpdateFrameworkCommand = async (
  input: UpdateFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/frameworks/{FrameworkName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "FrameworkName",
    () => input.FrameworkName!,
    "{FrameworkName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      FrameworkControls: (_) => _json(_),
      FrameworkDescription: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
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
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/global-settings";
  let body: any;
  body = JSON.stringify(
    take(input, {
      GlobalSettings: (_) => _json(_),
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
 * serializeAws_restJson1UpdateRecoveryPointLifecycleCommand
 */
export const se_UpdateRecoveryPointLifecycleCommand = async (
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
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "BackupVaultName",
    () => input.BackupVaultName!,
    "{BackupVaultName}",
    false
  );
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "RecoveryPointArn",
    () => input.RecoveryPointArn!,
    "{RecoveryPointArn}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      Lifecycle: (_) => _json(_),
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
 * serializeAws_restJson1UpdateRegionSettingsCommand
 */
export const se_UpdateRegionSettingsCommand = async (
  input: UpdateRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account-settings";
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceTypeManagementPreference: (_) => _json(_),
      ResourceTypeOptInPreference: (_) => _json(_),
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
 * serializeAws_restJson1UpdateReportPlanCommand
 */
export const se_UpdateReportPlanCommand = async (
  input: UpdateReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
  const headers: any = {
    "content-type": "application/json",
  };
  let resolvedPath =
    `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/audit/report-plans/{ReportPlanName}";
  resolvedPath = __resolvedPath(
    resolvedPath,
    input,
    "ReportPlanName",
    () => input.ReportPlanName!,
    "{ReportPlanName}",
    false
  );
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ReportDeliveryChannel: (_) => _json(_),
      ReportPlanDescription: [],
      ReportSetting: (_) => _json(_),
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
 * deserializeAws_restJson1CancelLegalHoldCommand
 */
export const de_CancelLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLegalHoldCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CancelLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelLegalHoldCommandError
 */
const de_CancelLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateBackupPlanCommand
 */
export const de_CreateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdvancedBackupSettings: _json,
    BackupPlanArn: __expectString,
    BackupPlanId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackupPlanCommandError
 */
const de_CreateBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateBackupSelectionCommand
 */
export const de_CreateBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackupSelectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    SelectionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackupSelectionCommandError
 */
const de_CreateBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateBackupVaultCommand
 */
export const de_CreateBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackupVaultCommandError
 */
const de_CreateBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateFrameworkCommand
 */
export const de_CreateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    FrameworkArn: __expectString,
    FrameworkName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateFrameworkCommandError
 */
const de_CreateFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateLegalHoldCommand
 */
export const de_CreateLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LegalHoldArn: __expectString,
    LegalHoldId: __expectString,
    RecoveryPointSelection: (_) => de_RecoveryPointSelection(_, context),
    Status: __expectString,
    Title: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLegalHoldCommandError
 */
const de_CreateLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateLogicallyAirGappedBackupVaultCommand
 */
export const de_CreateLogicallyAirGappedBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogicallyAirGappedBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateLogicallyAirGappedBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VaultState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateLogicallyAirGappedBackupVaultCommandError
 */
const de_CreateLogicallyAirGappedBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogicallyAirGappedBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1CreateReportPlanCommand
 */
export const de_CreateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CreateReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReportPlanArn: __expectString,
    ReportPlanName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateReportPlanCommandError
 */
const de_CreateReportPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupPlanCommand
 */
export const de_DeleteBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanArn: __expectString,
    BackupPlanId: __expectString,
    DeletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupPlanCommandError
 */
const de_DeleteBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupSelectionCommand
 */
export const de_DeleteBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupSelectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupSelectionCommandError
 */
const de_DeleteBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupVaultCommand
 */
export const de_DeleteBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultCommandError
 */
const de_DeleteBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand
 */
export const de_DeleteBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError
 */
const de_DeleteBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommand
 */
export const de_DeleteBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupVaultLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommandError
 */
const de_DeleteBackupVaultLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteBackupVaultNotificationsCommand
 */
export const de_DeleteBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError
 */
const de_DeleteBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteFrameworkCommand
 */
export const de_DeleteFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFrameworkCommandError
 */
const de_DeleteFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteRecoveryPointCommand
 */
export const de_DeleteRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteRecoveryPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecoveryPointCommandError
 */
const de_DeleteRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DeleteReportPlanCommand
 */
export const de_DeleteReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DeleteReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReportPlanCommandError
 */
const de_DeleteReportPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeBackupJobCommand
 */
export const de_DescribeBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBackupJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountId: __expectString,
    BackupJobId: __expectString,
    BackupOptions: _json,
    BackupSizeInBytes: __expectLong,
    BackupType: __expectString,
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    BytesTransferred: __expectLong,
    ChildJobsInState: _json,
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedBy: _json,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpectedCompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IamRoleArn: __expectString,
    IsParent: __expectBoolean,
    NumberOfChildJobs: __expectLong,
    ParentJobId: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
    StartBy: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBackupJobCommandError
 */
const de_DescribeBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      throw await de_DependencyFailureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeBackupVaultCommand
 */
export const de_DescribeBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    EncryptionKeyArn: __expectString,
    LockDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Locked: __expectBoolean,
    MaxRetentionDays: __expectLong,
    MinRetentionDays: __expectLong,
    NumberOfRecoveryPoints: __expectLong,
    VaultType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBackupVaultCommandError
 */
const de_DescribeBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeCopyJobCommand
 */
export const de_DescribeCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeCopyJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CopyJob: (_) => de_CopyJob(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCopyJobCommandError
 */
const de_DescribeCopyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeFrameworkCommand
 */
export const de_DescribeFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentStatus: __expectString,
    FrameworkArn: __expectString,
    FrameworkControls: _json,
    FrameworkDescription: __expectString,
    FrameworkName: __expectString,
    FrameworkStatus: __expectString,
    IdempotencyToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeFrameworkCommandError
 */
const de_DescribeFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeGlobalSettingsCommand
 */
export const de_DescribeGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    GlobalSettings: _json,
    LastUpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeGlobalSettingsCommandError
 */
const de_DescribeGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeProtectedResourceCommand
 */
export const de_DescribeProtectedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeProtectedResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastBackupTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeProtectedResourceCommandError
 */
const de_DescribeProtectedResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeRecoveryPointCommand
 */
export const de_DescribeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRecoveryPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupSizeInBytes: __expectLong,
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CalculatedLifecycle: (_) => de_CalculatedLifecycle(_, context),
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompositeMemberIdentifier: __expectString,
    CreatedBy: _json,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EncryptionKeyArn: __expectString,
    IamRoleArn: __expectString,
    IsEncrypted: __expectBoolean,
    IsParent: __expectBoolean,
    LastRestoreTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Lifecycle: _json,
    ParentRecoveryPointArn: __expectString,
    RecoveryPointArn: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
    SourceBackupVaultArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    StorageClass: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRecoveryPointCommandError
 */
const de_DescribeRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeRegionSettingsCommand
 */
export const de_DescribeRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRegionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceTypeManagementPreference: _json,
    ResourceTypeOptInPreference: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRegionSettingsCommandError
 */
const de_DescribeRegionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeReportJobCommand
 */
export const de_DescribeReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReportJob: (_) => de_ReportJob(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReportJobCommandError
 */
const de_DescribeReportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeReportPlanCommand
 */
export const de_DescribeReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReportPlan: (_) => de_ReportPlan(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeReportPlanCommandError
 */
const de_DescribeReportPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DescribeRestoreJobCommand
 */
export const de_DescribeRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DescribeRestoreJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountId: __expectString,
    BackupSizeInBytes: __expectLong,
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedResourceArn: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpectedCompletionTimeMinutes: __expectLong,
    IamRoleArn: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    ResourceType: __expectString,
    RestoreJobId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRestoreJobCommandError
 */
const de_DescribeRestoreJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      throw await de_DependencyFailureExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DisassociateRecoveryPointCommand
 */
export const de_DisassociateRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_DisassociateRecoveryPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRecoveryPointCommandError
 */
const de_DisassociateRecoveryPointCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1DisassociateRecoveryPointFromParentCommand
 */
export const de_DisassociateRecoveryPointFromParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointFromParentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_DisassociateRecoveryPointFromParentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRecoveryPointFromParentCommandError
 */
const de_DisassociateRecoveryPointFromParentCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointFromParentCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ExportBackupPlanTemplateCommand
 */
export const de_ExportBackupPlanTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ExportBackupPlanTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanTemplateJson: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ExportBackupPlanTemplateCommandError
 */
const de_ExportBackupPlanTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupPlanCommand
 */
export const de_GetBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdvancedBackupSettings: _json,
    BackupPlan: _json,
    BackupPlanArn: __expectString,
    BackupPlanId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    DeletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastExecutionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupPlanCommandError
 */
const de_GetBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupPlanFromJSONCommand
 */
export const de_GetBackupPlanFromJSONCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupPlanFromJSONCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlan: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupPlanFromJSONCommandError
 */
const de_GetBackupPlanFromJSONCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupPlanFromTemplateCommand
 */
export const de_GetBackupPlanFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupPlanFromTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanDocument: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupPlanFromTemplateCommandError
 */
const de_GetBackupPlanFromTemplateCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupSelectionCommand
 */
export const de_GetBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupSelectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanId: __expectString,
    BackupSelection: _json,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    SelectionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupSelectionCommandError
 */
const de_GetBackupSelectionCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupVaultAccessPolicyCommand
 */
export const de_GetBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    Policy: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError
 */
const de_GetBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetBackupVaultNotificationsCommand
 */
export const de_GetBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    BackupVaultEvents: _json,
    BackupVaultName: __expectString,
    SNSTopicArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetBackupVaultNotificationsCommandError
 */
const de_GetBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetLegalHoldCommand
 */
export const de_GetLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CancelDescription: __expectString,
    CancellationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LegalHoldArn: __expectString,
    LegalHoldId: __expectString,
    RecoveryPointSelection: (_) => de_RecoveryPointSelection(_, context),
    RetainRecordUntil: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Status: __expectString,
    Title: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetLegalHoldCommandError
 */
const de_GetLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand
 */
export const de_GetRecoveryPointRestoreMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetRecoveryPointRestoreMetadataCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    RecoveryPointArn: __expectString,
    RestoreMetadata: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError
 */
const de_GetRecoveryPointRestoreMetadataCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1GetSupportedResourceTypesCommand
 */
export const de_GetSupportedResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_GetSupportedResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ResourceTypes: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSupportedResourceTypesCommandError
 */
const de_GetSupportedResourceTypesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupJobsCommand
 */
export const de_ListBackupJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupJobs: (_) => de_BackupJobsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupJobsCommandError
 */
const de_ListBackupJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupPlansCommand
 */
export const de_ListBackupPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupPlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlansList: (_) => de_BackupPlansList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupPlansCommandError
 */
const de_ListBackupPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupPlanTemplatesCommand
 */
export const de_ListBackupPlanTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupPlanTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanTemplatesList: _json,
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupPlanTemplatesCommandError
 */
const de_ListBackupPlanTemplatesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupPlanVersionsCommand
 */
export const de_ListBackupPlanVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupPlanVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupPlanVersionsList: (_) => de_BackupPlanVersionsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupPlanVersionsCommandError
 */
const de_ListBackupPlanVersionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupSelectionsCommand
 */
export const de_ListBackupSelectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupSelectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupSelectionsList: (_) => de_BackupSelectionsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupSelectionsCommandError
 */
const de_ListBackupSelectionsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListBackupVaultsCommand
 */
export const de_ListBackupVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListBackupVaultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultList: (_) => de_BackupVaultList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupVaultsCommandError
 */
const de_ListBackupVaultsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListCopyJobsCommand
 */
export const de_ListCopyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListCopyJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CopyJobs: (_) => de_CopyJobsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListCopyJobsCommandError
 */
const de_ListCopyJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListFrameworksCommand
 */
export const de_ListFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListFrameworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Frameworks: (_) => de_FrameworkList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFrameworksCommandError
 */
const de_ListFrameworksCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFrameworksCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListLegalHoldsCommand
 */
export const de_ListLegalHoldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLegalHoldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListLegalHoldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LegalHolds: (_) => de_LegalHoldsList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLegalHoldsCommandError
 */
const de_ListLegalHoldsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLegalHoldsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListProtectedResourcesCommand
 */
export const de_ListProtectedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProtectedResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Results: (_) => de_ProtectedResourcesList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProtectedResourcesCommandError
 */
const de_ListProtectedResourcesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListProtectedResourcesByBackupVaultCommand
 */
export const de_ListProtectedResourcesByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListProtectedResourcesByBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Results: (_) => de_ProtectedResourcesList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListProtectedResourcesByBackupVaultCommandError
 */
const de_ListProtectedResourcesByBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesByBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand
 */
export const de_ListRecoveryPointsByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecoveryPointsByBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RecoveryPoints: (_) => de_RecoveryPointByBackupVaultList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError
 */
const de_ListRecoveryPointsByBackupVaultCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommand
 */
export const de_ListRecoveryPointsByLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecoveryPointsByLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RecoveryPoints: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommandError
 */
const de_ListRecoveryPointsByLegalHoldCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByLegalHoldCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListRecoveryPointsByResourceCommand
 */
export const de_ListRecoveryPointsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRecoveryPointsByResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RecoveryPoints: (_) => de_RecoveryPointByResourceList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRecoveryPointsByResourceCommandError
 */
const de_ListRecoveryPointsByResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListReportJobsCommand
 */
export const de_ListReportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReportJobs: (_) => de_ReportJobList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReportJobsCommandError
 */
const de_ListReportJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListReportPlansCommand
 */
export const de_ListReportPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListReportPlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    ReportPlans: (_) => de_ReportPlanList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListReportPlansCommandError
 */
const de_ListReportPlansCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportPlansCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListRestoreJobsCommand
 */
export const de_ListRestoreJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListRestoreJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RestoreJobs: (_) => de_RestoreJobsList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRestoreJobsCommandError
 */
const de_ListRestoreJobsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    Tags: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommandError
 */
const de_ListTagsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1PutBackupVaultAccessPolicyCommand
 */
export const de_PutBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError
 */
const de_PutBackupVaultAccessPolicyCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1PutBackupVaultLockConfigurationCommand
 */
export const de_PutBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBackupVaultLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupVaultLockConfigurationCommandError
 */
const de_PutBackupVaultLockConfigurationCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultLockConfigurationCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1PutBackupVaultNotificationsCommand
 */
export const de_PutBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_PutBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupVaultNotificationsCommandError
 */
const de_PutBackupVaultNotificationsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1StartBackupJobCommand
 */
export const de_StartBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartBackupJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupJobId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsParent: __expectBoolean,
    RecoveryPointArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartBackupJobCommandError
 */
const de_StartBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1StartCopyJobCommand
 */
export const de_StartCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartCopyJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CopyJobId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsParent: __expectBoolean,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartCopyJobCommandError
 */
const de_StartCopyJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1StartReportJobCommand
 */
export const de_StartReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartReportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    ReportJobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartReportJobCommandError
 */
const de_StartReportJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1StartRestoreJobCommand
 */
export const de_StartRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StartRestoreJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RestoreJobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1StartRestoreJobCommandError
 */
const de_StartRestoreJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1StopBackupJobCommand
 */
export const de_StopBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_StopBackupJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StopBackupJobCommandError
 */
const de_StopBackupJobCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommandError
 */
const de_TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommandError
 */
const de_UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateBackupPlanCommand
 */
export const de_UpdateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AdvancedBackupSettings: _json,
    BackupPlanArn: __expectString,
    BackupPlanId: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackupPlanCommandError
 */
const de_UpdateBackupPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateFrameworkCommand
 */
export const de_UpdateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    FrameworkArn: __expectString,
    FrameworkName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateFrameworkCommandError
 */
const de_UpdateFrameworkCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFrameworkCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateGlobalSettingsCommandError
 */
const de_UpdateGlobalSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand
 */
export const de_UpdateRecoveryPointLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRecoveryPointLifecycleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    CalculatedLifecycle: (_) => de_CalculatedLifecycle(_, context),
    Lifecycle: _json,
    RecoveryPointArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError
 */
const de_UpdateRecoveryPointLifecycleCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await de_InvalidRequestExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateRegionSettingsCommand
 */
export const de_UpdateRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateRegionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRegionSettingsCommandError
 */
const de_UpdateRegionSettingsCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1UpdateReportPlanCommand
 */
export const de_UpdateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_UpdateReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReportPlanArn: __expectString,
    ReportPlanName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReportPlanCommandError
 */
const de_UpdateReportPlanCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportPlanCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseErrorBody(output.body, context),
  };
  const errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await de_InvalidParameterValueExceptionRes(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await de_MissingParameterValueExceptionRes(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Arn: __expectString,
    Code: __expectString,
    Context: __expectString,
    CreatorRequestId: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new AlreadyExistsException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1ConflictExceptionRes
 */
const de_ConflictExceptionRes = async (parsedOutput: any, context: __SerdeContext): Promise<ConflictException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ConflictException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1DependencyFailureExceptionRes
 */
const de_DependencyFailureExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<DependencyFailureException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new DependencyFailureException({
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
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidParameterValueException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidRequestExceptionRes
 */
const de_InvalidRequestExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidRequestException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidRequestException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * deserializeAws_restJson1InvalidResourceStateExceptionRes
 */
const de_InvalidResourceStateExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InvalidResourceStateException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  const doc = take(data, {
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new InvalidResourceStateException({
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
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
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
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new MissingParameterValueException({
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
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
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
    Code: __expectString,
    Context: __expectString,
    Message: __expectString,
    Type: __expectString,
  });
  Object.assign(contents, doc);
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

// se_AdvancedBackupSetting omitted.

// se_AdvancedBackupSettings omitted.

// se_BackupOptions omitted.

// se_BackupPlanInput omitted.

// se_BackupRuleInput omitted.

// se_BackupRulesInput omitted.

// se_BackupSelection omitted.

// se_BackupVaultEvents omitted.

// se_ComplianceResourceIdList omitted.

// se_Condition omitted.

// se_ConditionParameter omitted.

// se_ConditionParameters omitted.

// se_Conditions omitted.

// se_ControlInputParameter omitted.

// se_ControlInputParameters omitted.

// se_ControlScope omitted.

// se_CopyAction omitted.

// se_CopyActions omitted.

/**
 * serializeAws_restJson1DateRange
 */
const se_DateRange = (input: DateRange, context: __SerdeContext): any => {
  return take(input, {
    FromDate: (_) => Math.round(_.getTime() / 1000),
    ToDate: (_) => Math.round(_.getTime() / 1000),
  });
};

// se_FormatList omitted.

// se_FrameworkControl omitted.

// se_FrameworkControls omitted.

// se_GlobalSettings omitted.

// se_Lifecycle omitted.

// se_ListOfTags omitted.

// se_Metadata omitted.

/**
 * serializeAws_restJson1RecoveryPointSelection
 */
const se_RecoveryPointSelection = (input: RecoveryPointSelection, context: __SerdeContext): any => {
  return take(input, {
    DateRange: (_) => se_DateRange(_, context),
    ResourceIdentifiers: _json,
    VaultNames: _json,
  });
};

// se_ReportDeliveryChannel omitted.

// se_ReportSetting omitted.

// se_ResourceArns omitted.

// se_ResourceIdentifiers omitted.

// se_ResourceTypeList omitted.

// se_ResourceTypeManagementPreference omitted.

// se_ResourceTypeOptInPreference omitted.

// se_stringList omitted.

// se_stringMap omitted.

// se_TagKeyList omitted.

// se_Tags omitted.

// se_VaultNames omitted.

// de_AdvancedBackupSetting omitted.

// de_AdvancedBackupSettings omitted.

/**
 * deserializeAws_restJson1BackupJob
 */
const de_BackupJob = (output: any, context: __SerdeContext): BackupJob => {
  return take(output, {
    AccountId: __expectString,
    BackupJobId: __expectString,
    BackupOptions: _json,
    BackupSizeInBytes: __expectLong,
    BackupType: __expectString,
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    BytesTransferred: __expectLong,
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedBy: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpectedCompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IamRoleArn: __expectString,
    IsParent: __expectBoolean,
    ParentJobId: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
    StartBy: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_BackupJobChildJobsInState omitted.

/**
 * deserializeAws_restJson1BackupJobsList
 */
const de_BackupJobsList = (output: any, context: __SerdeContext): BackupJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupJob(entry, context);
    });
  return retVal;
};

// de_BackupOptions omitted.

// de_BackupPlan omitted.

/**
 * deserializeAws_restJson1BackupPlansList
 */
const de_BackupPlansList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupPlansListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupPlansListMember
 */
const de_BackupPlansListMember = (output: any, context: __SerdeContext): BackupPlansListMember => {
  return take(output, {
    AdvancedBackupSettings: _json,
    BackupPlanArn: __expectString,
    BackupPlanId: __expectString,
    BackupPlanName: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    DeletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastExecutionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    VersionId: __expectString,
  }) as any;
};

// de_BackupPlanTemplatesList omitted.

// de_BackupPlanTemplatesListMember omitted.

/**
 * deserializeAws_restJson1BackupPlanVersionsList
 */
const de_BackupPlanVersionsList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupPlansListMember(entry, context);
    });
  return retVal;
};

// de_BackupRule omitted.

// de_BackupRules omitted.

// de_BackupSelection omitted.

/**
 * deserializeAws_restJson1BackupSelectionsList
 */
const de_BackupSelectionsList = (output: any, context: __SerdeContext): BackupSelectionsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupSelectionsListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupSelectionsListMember
 */
const de_BackupSelectionsListMember = (output: any, context: __SerdeContext): BackupSelectionsListMember => {
  return take(output, {
    BackupPlanId: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    IamRoleArn: __expectString,
    SelectionId: __expectString,
    SelectionName: __expectString,
  }) as any;
};

// de_BackupVaultEvents omitted.

/**
 * deserializeAws_restJson1BackupVaultList
 */
const de_BackupVaultList = (output: any, context: __SerdeContext): BackupVaultListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupVaultListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupVaultListMember
 */
const de_BackupVaultListMember = (output: any, context: __SerdeContext): BackupVaultListMember => {
  return take(output, {
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    EncryptionKeyArn: __expectString,
    LockDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Locked: __expectBoolean,
    MaxRetentionDays: __expectLong,
    MinRetentionDays: __expectLong,
    NumberOfRecoveryPoints: __expectLong,
  }) as any;
};

/**
 * deserializeAws_restJson1CalculatedLifecycle
 */
const de_CalculatedLifecycle = (output: any, context: __SerdeContext): CalculatedLifecycle => {
  return take(output, {
    DeleteAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MoveToColdStorageAt: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_ComplianceResourceIdList omitted.

// de_Condition omitted.

// de_ConditionParameter omitted.

// de_ConditionParameters omitted.

// de_Conditions omitted.

// de_ControlInputParameter omitted.

// de_ControlInputParameters omitted.

// de_ControlScope omitted.

// de_CopyAction omitted.

// de_CopyActions omitted.

/**
 * deserializeAws_restJson1CopyJob
 */
const de_CopyJob = (output: any, context: __SerdeContext): CopyJob => {
  return take(output, {
    AccountId: __expectString,
    BackupSizeInBytes: __expectLong,
    ChildJobsInState: _json,
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompositeMemberIdentifier: __expectString,
    CopyJobId: __expectString,
    CreatedBy: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DestinationBackupVaultArn: __expectString,
    DestinationRecoveryPointArn: __expectString,
    IamRoleArn: __expectString,
    IsParent: __expectBoolean,
    NumberOfChildJobs: __expectLong,
    ParentJobId: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
    SourceBackupVaultArn: __expectString,
    SourceRecoveryPointArn: __expectString,
    State: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_CopyJobChildJobsInState omitted.

/**
 * deserializeAws_restJson1CopyJobsList
 */
const de_CopyJobsList = (output: any, context: __SerdeContext): CopyJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CopyJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateRange
 */
const de_DateRange = (output: any, context: __SerdeContext): DateRange => {
  return take(output, {
    FromDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ToDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  }) as any;
};

// de_FormatList omitted.

/**
 * deserializeAws_restJson1Framework
 */
const de_Framework = (output: any, context: __SerdeContext): Framework => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentStatus: __expectString,
    FrameworkArn: __expectString,
    FrameworkDescription: __expectString,
    FrameworkName: __expectString,
    NumberOfControls: __expectInt32,
  }) as any;
};

// de_FrameworkControl omitted.

// de_FrameworkControls omitted.

/**
 * deserializeAws_restJson1FrameworkList
 */
const de_FrameworkList = (output: any, context: __SerdeContext): Framework[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_Framework(entry, context);
    });
  return retVal;
};

// de_GlobalSettings omitted.

/**
 * deserializeAws_restJson1LegalHold
 */
const de_LegalHold = (output: any, context: __SerdeContext): LegalHold => {
  return take(output, {
    CancellationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Description: __expectString,
    LegalHoldArn: __expectString,
    LegalHoldId: __expectString,
    Status: __expectString,
    Title: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LegalHoldsList
 */
const de_LegalHoldsList = (output: any, context: __SerdeContext): LegalHold[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_LegalHold(entry, context);
    });
  return retVal;
};

// de_Lifecycle omitted.

// de_ListOfTags omitted.

// de_Metadata omitted.

/**
 * deserializeAws_restJson1ProtectedResource
 */
const de_ProtectedResource = (output: any, context: __SerdeContext): ProtectedResource => {
  return take(output, {
    LastBackupTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ProtectedResourcesList
 */
const de_ProtectedResourcesList = (output: any, context: __SerdeContext): ProtectedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ProtectedResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryPointByBackupVault
 */
const de_RecoveryPointByBackupVault = (output: any, context: __SerdeContext): RecoveryPointByBackupVault => {
  return take(output, {
    BackupSizeInBytes: __expectLong,
    BackupVaultArn: __expectString,
    BackupVaultName: __expectString,
    CalculatedLifecycle: (_: any) => de_CalculatedLifecycle(_, context),
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CompositeMemberIdentifier: __expectString,
    CreatedBy: _json,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EncryptionKeyArn: __expectString,
    IamRoleArn: __expectString,
    IsEncrypted: __expectBoolean,
    IsParent: __expectBoolean,
    LastRestoreTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Lifecycle: _json,
    ParentRecoveryPointArn: __expectString,
    RecoveryPointArn: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
    SourceBackupVaultArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecoveryPointByBackupVaultList
 */
const de_RecoveryPointByBackupVaultList = (output: any, context: __SerdeContext): RecoveryPointByBackupVault[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecoveryPointByBackupVault(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryPointByResource
 */
const de_RecoveryPointByResource = (output: any, context: __SerdeContext): RecoveryPointByResource => {
  return take(output, {
    BackupSizeBytes: __expectLong,
    BackupVaultName: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    EncryptionKeyArn: __expectString,
    IsParent: __expectBoolean,
    ParentRecoveryPointArn: __expectString,
    RecoveryPointArn: __expectString,
    ResourceName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RecoveryPointByResourceList
 */
const de_RecoveryPointByResourceList = (output: any, context: __SerdeContext): RecoveryPointByResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RecoveryPointByResource(entry, context);
    });
  return retVal;
};

// de_RecoveryPointCreator omitted.

// de_RecoveryPointMember omitted.

/**
 * deserializeAws_restJson1RecoveryPointSelection
 */
const de_RecoveryPointSelection = (output: any, context: __SerdeContext): RecoveryPointSelection => {
  return take(output, {
    DateRange: (_: any) => de_DateRange(_, context),
    ResourceIdentifiers: _json,
    VaultNames: _json,
  }) as any;
};

// de_RecoveryPointsList omitted.

// de_ReportDeliveryChannel omitted.

// de_ReportDestination omitted.

/**
 * deserializeAws_restJson1ReportJob
 */
const de_ReportJob = (output: any, context: __SerdeContext): ReportJob => {
  return take(output, {
    CompletionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReportDestination: _json,
    ReportJobId: __expectString,
    ReportPlanArn: __expectString,
    ReportTemplate: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1ReportJobList
 */
const de_ReportJobList = (output: any, context: __SerdeContext): ReportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReportJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReportPlan
 */
const de_ReportPlan = (output: any, context: __SerdeContext): ReportPlan => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeploymentStatus: __expectString,
    LastAttemptedExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastSuccessfulExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ReportDeliveryChannel: _json,
    ReportPlanArn: __expectString,
    ReportPlanDescription: __expectString,
    ReportPlanName: __expectString,
    ReportSetting: _json,
  }) as any;
};

/**
 * deserializeAws_restJson1ReportPlanList
 */
const de_ReportPlanList = (output: any, context: __SerdeContext): ReportPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_ReportPlan(entry, context);
    });
  return retVal;
};

// de_ReportSetting omitted.

// de_ResourceArns omitted.

// de_ResourceIdentifiers omitted.

// de_ResourceTypeList omitted.

// de_ResourceTypeManagementPreference omitted.

// de_ResourceTypeOptInPreference omitted.

// de_ResourceTypes omitted.

/**
 * deserializeAws_restJson1RestoreJobsList
 */
const de_RestoreJobsList = (output: any, context: __SerdeContext): RestoreJobsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestoreJobsListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RestoreJobsListMember
 */
const de_RestoreJobsListMember = (output: any, context: __SerdeContext): RestoreJobsListMember => {
  return take(output, {
    AccountId: __expectString,
    BackupSizeInBytes: __expectLong,
    CompletionDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedResourceArn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ExpectedCompletionTimeMinutes: __expectLong,
    IamRoleArn: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    ResourceType: __expectString,
    RestoreJobId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

// de_stringList omitted.

// de_stringMap omitted.

// de_Tags omitted.

// de_VaultNames omitted.

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
