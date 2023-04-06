// smithy-typescript generated code
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import {
  decorateServiceException as __decorateServiceException,
  expectBoolean as __expectBoolean,
  expectInt32 as __expectInt32,
  expectLong as __expectLong,
  expectNonNull as __expectNonNull,
  expectNumber as __expectNumber,
  expectObject as __expectObject,
  expectString as __expectString,
  extendedEncodeURIComponent as __extendedEncodeURIComponent,
  map as __map,
  parseEpochTimestamp as __parseEpochTimestamp,
  resolvedPath as __resolvedPath,
  throwDefaultError,
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";
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
  BackupJobState,
  BackupPlan,
  BackupPlanInput,
  BackupPlansListMember,
  BackupPlanTemplatesListMember,
  BackupRule,
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
  CopyJobState,
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
  RecoveryPointCreator,
  RecoveryPointMember,
  RecoveryPointSelection,
  ReportDeliveryChannel,
  ReportDestination,
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
  body = JSON.stringify({
    ...(input.BackupPlan != null && { BackupPlan: se_BackupPlanInput(input.BackupPlan, context) }),
    ...(input.BackupPlanTags != null && { BackupPlanTags: se_Tags(input.BackupPlanTags, context) }),
    ...(input.CreatorRequestId != null && { CreatorRequestId: input.CreatorRequestId }),
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
  body = JSON.stringify({
    ...(input.BackupSelection != null && { BackupSelection: se_BackupSelection(input.BackupSelection, context) }),
    ...(input.CreatorRequestId != null && { CreatorRequestId: input.CreatorRequestId }),
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
  body = JSON.stringify({
    ...(input.BackupVaultTags != null && { BackupVaultTags: se_Tags(input.BackupVaultTags, context) }),
    ...(input.CreatorRequestId != null && { CreatorRequestId: input.CreatorRequestId }),
    ...(input.EncryptionKeyArn != null && { EncryptionKeyArn: input.EncryptionKeyArn }),
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
  body = JSON.stringify({
    ...(input.FrameworkControls != null && {
      FrameworkControls: se_FrameworkControls(input.FrameworkControls, context),
    }),
    ...(input.FrameworkDescription != null && { FrameworkDescription: input.FrameworkDescription }),
    ...(input.FrameworkName != null && { FrameworkName: input.FrameworkName }),
    ...(input.FrameworkTags != null && { FrameworkTags: se_stringMap(input.FrameworkTags, context) }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
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
  body = JSON.stringify({
    ...(input.Description != null && { Description: input.Description }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.RecoveryPointSelection != null && {
      RecoveryPointSelection: se_RecoveryPointSelection(input.RecoveryPointSelection, context),
    }),
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
    ...(input.Title != null && { Title: input.Title }),
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
  body = JSON.stringify({
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ReportDeliveryChannel != null && {
      ReportDeliveryChannel: se_ReportDeliveryChannel(input.ReportDeliveryChannel, context),
    }),
    ...(input.ReportPlanDescription != null && { ReportPlanDescription: input.ReportPlanDescription }),
    ...(input.ReportPlanName != null && { ReportPlanName: input.ReportPlanName }),
    ...(input.ReportPlanTags != null && { ReportPlanTags: se_stringMap(input.ReportPlanTags, context) }),
    ...(input.ReportSetting != null && { ReportSetting: se_ReportSetting(input.ReportSetting, context) }),
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
  body = JSON.stringify({
    ...(input.BackupPlanTemplateJson != null && { BackupPlanTemplateJson: input.BackupPlanTemplateJson }),
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
  body = JSON.stringify({
    ...(input.Policy != null && { Policy: input.Policy }),
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
  body = JSON.stringify({
    ...(input.ChangeableForDays != null && { ChangeableForDays: input.ChangeableForDays }),
    ...(input.MaxRetentionDays != null && { MaxRetentionDays: input.MaxRetentionDays }),
    ...(input.MinRetentionDays != null && { MinRetentionDays: input.MinRetentionDays }),
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
  body = JSON.stringify({
    ...(input.BackupVaultEvents != null && {
      BackupVaultEvents: se_BackupVaultEvents(input.BackupVaultEvents, context),
    }),
    ...(input.SNSTopicArn != null && { SNSTopicArn: input.SNSTopicArn }),
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
  body = JSON.stringify({
    ...(input.BackupOptions != null && { BackupOptions: se_BackupOptions(input.BackupOptions, context) }),
    ...(input.BackupVaultName != null && { BackupVaultName: input.BackupVaultName }),
    ...(input.CompleteWindowMinutes != null && { CompleteWindowMinutes: input.CompleteWindowMinutes }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle != null && { Lifecycle: se_Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags != null && { RecoveryPointTags: se_Tags(input.RecoveryPointTags, context) }),
    ...(input.ResourceArn != null && { ResourceArn: input.ResourceArn }),
    ...(input.StartWindowMinutes != null && { StartWindowMinutes: input.StartWindowMinutes }),
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
  body = JSON.stringify({
    ...(input.DestinationBackupVaultArn != null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle != null && { Lifecycle: se_Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointArn != null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.SourceBackupVaultName != null && { SourceBackupVaultName: input.SourceBackupVaultName }),
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
  body = JSON.stringify({
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
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
  body = JSON.stringify({
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Metadata != null && { Metadata: se_Metadata(input.Metadata, context) }),
    ...(input.RecoveryPointArn != null && { RecoveryPointArn: input.RecoveryPointArn }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
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
  body = JSON.stringify({
    ...(input.Tags != null && { Tags: se_Tags(input.Tags, context) }),
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
  body = JSON.stringify({
    ...(input.TagKeyList != null && { TagKeyList: se_TagKeyList(input.TagKeyList, context) }),
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
  body = JSON.stringify({
    ...(input.BackupPlan != null && { BackupPlan: se_BackupPlanInput(input.BackupPlan, context) }),
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
  body = JSON.stringify({
    ...(input.FrameworkControls != null && {
      FrameworkControls: se_FrameworkControls(input.FrameworkControls, context),
    }),
    ...(input.FrameworkDescription != null && { FrameworkDescription: input.FrameworkDescription }),
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
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
  body = JSON.stringify({
    ...(input.GlobalSettings != null && { GlobalSettings: se_GlobalSettings(input.GlobalSettings, context) }),
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
  body = JSON.stringify({
    ...(input.Lifecycle != null && { Lifecycle: se_Lifecycle(input.Lifecycle, context) }),
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
  body = JSON.stringify({
    ...(input.ResourceTypeManagementPreference != null && {
      ResourceTypeManagementPreference: se_ResourceTypeManagementPreference(
        input.ResourceTypeManagementPreference,
        context
      ),
    }),
    ...(input.ResourceTypeOptInPreference != null && {
      ResourceTypeOptInPreference: se_ResourceTypeOptInPreference(input.ResourceTypeOptInPreference, context),
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
  body = JSON.stringify({
    IdempotencyToken: input.IdempotencyToken ?? generateIdempotencyToken(),
    ...(input.ReportDeliveryChannel != null && {
      ReportDeliveryChannel: se_ReportDeliveryChannel(input.ReportDeliveryChannel, context),
    }),
    ...(input.ReportPlanDescription != null && { ReportPlanDescription: input.ReportPlanDescription }),
    ...(input.ReportSetting != null && { ReportSetting: se_ReportSetting(input.ReportSetting, context) }),
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = de_AdvancedBackupSettings(data.AdvancedBackupSettings, context);
  }
  if (data.BackupPlanArn != null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.VersionId != null) {
    contents.VersionId = __expectString(data.VersionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.SelectionId != null) {
    contents.SelectionId = __expectString(data.SelectionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.FrameworkArn != null) {
    contents.FrameworkArn = __expectString(data.FrameworkArn);
  }
  if (data.FrameworkName != null) {
    contents.FrameworkName = __expectString(data.FrameworkName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LegalHoldArn != null) {
    contents.LegalHoldArn = __expectString(data.LegalHoldArn);
  }
  if (data.LegalHoldId != null) {
    contents.LegalHoldId = __expectString(data.LegalHoldId);
  }
  if (data.RecoveryPointSelection != null) {
    contents.RecoveryPointSelection = de_RecoveryPointSelection(data.RecoveryPointSelection, context);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Title != null) {
    contents.Title = __expectString(data.Title);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.ReportPlanArn != null) {
    contents.ReportPlanArn = __expectString(data.ReportPlanArn);
  }
  if (data.ReportPlanName != null) {
    contents.ReportPlanName = __expectString(data.ReportPlanName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanArn != null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.DeletionDate != null) {
    contents.DeletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.DeletionDate)));
  }
  if (data.VersionId != null) {
    contents.VersionId = __expectString(data.VersionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AccountId != null) {
    contents.AccountId = __expectString(data.AccountId);
  }
  if (data.BackupJobId != null) {
    contents.BackupJobId = __expectString(data.BackupJobId);
  }
  if (data.BackupOptions != null) {
    contents.BackupOptions = de_BackupOptions(data.BackupOptions, context);
  }
  if (data.BackupSizeInBytes != null) {
    contents.BackupSizeInBytes = __expectLong(data.BackupSizeInBytes);
  }
  if (data.BackupType != null) {
    contents.BackupType = __expectString(data.BackupType);
  }
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.BytesTransferred != null) {
    contents.BytesTransferred = __expectLong(data.BytesTransferred);
  }
  if (data.ChildJobsInState != null) {
    contents.ChildJobsInState = de_BackupJobChildJobsInState(data.ChildJobsInState, context);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletionDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = de_RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.ExpectedCompletionDate != null) {
    contents.ExpectedCompletionDate = __expectNonNull(
      __parseEpochTimestamp(__expectNumber(data.ExpectedCompletionDate))
    );
  }
  if (data.IamRoleArn != null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.IsParent != null) {
    contents.IsParent = __expectBoolean(data.IsParent);
  }
  if (data.NumberOfChildJobs != null) {
    contents.NumberOfChildJobs = __expectLong(data.NumberOfChildJobs);
  }
  if (data.ParentJobId != null) {
    contents.ParentJobId = __expectString(data.ParentJobId);
  }
  if (data.PercentDone != null) {
    contents.PercentDone = __expectString(data.PercentDone);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.StartBy != null) {
    contents.StartBy = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.StartBy)));
  }
  if (data.State != null) {
    contents.State = __expectString(data.State);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.CreatorRequestId != null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.EncryptionKeyArn != null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.LockDate != null) {
    contents.LockDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LockDate)));
  }
  if (data.Locked != null) {
    contents.Locked = __expectBoolean(data.Locked);
  }
  if (data.MaxRetentionDays != null) {
    contents.MaxRetentionDays = __expectLong(data.MaxRetentionDays);
  }
  if (data.MinRetentionDays != null) {
    contents.MinRetentionDays = __expectLong(data.MinRetentionDays);
  }
  if (data.NumberOfRecoveryPoints != null) {
    contents.NumberOfRecoveryPoints = __expectLong(data.NumberOfRecoveryPoints);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CopyJob != null) {
    contents.CopyJob = de_CopyJob(data.CopyJob, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.DeploymentStatus != null) {
    contents.DeploymentStatus = __expectString(data.DeploymentStatus);
  }
  if (data.FrameworkArn != null) {
    contents.FrameworkArn = __expectString(data.FrameworkArn);
  }
  if (data.FrameworkControls != null) {
    contents.FrameworkControls = de_FrameworkControls(data.FrameworkControls, context);
  }
  if (data.FrameworkDescription != null) {
    contents.FrameworkDescription = __expectString(data.FrameworkDescription);
  }
  if (data.FrameworkName != null) {
    contents.FrameworkName = __expectString(data.FrameworkName);
  }
  if (data.FrameworkStatus != null) {
    contents.FrameworkStatus = __expectString(data.FrameworkStatus);
  }
  if (data.IdempotencyToken != null) {
    contents.IdempotencyToken = __expectString(data.IdempotencyToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.GlobalSettings != null) {
    contents.GlobalSettings = de_GlobalSettings(data.GlobalSettings, context);
  }
  if (data.LastUpdateTime != null) {
    contents.LastUpdateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdateTime)));
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.LastBackupTime != null) {
    contents.LastBackupTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastBackupTime)));
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupSizeInBytes != null) {
    contents.BackupSizeInBytes = __expectLong(data.BackupSizeInBytes);
  }
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.CalculatedLifecycle != null) {
    contents.CalculatedLifecycle = de_CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletionDate)));
  }
  if (data.CompositeMemberIdentifier != null) {
    contents.CompositeMemberIdentifier = __expectString(data.CompositeMemberIdentifier);
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = de_RecoveryPointCreator(data.CreatedBy, context);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.EncryptionKeyArn != null) {
    contents.EncryptionKeyArn = __expectString(data.EncryptionKeyArn);
  }
  if (data.IamRoleArn != null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.IsEncrypted != null) {
    contents.IsEncrypted = __expectBoolean(data.IsEncrypted);
  }
  if (data.IsParent != null) {
    contents.IsParent = __expectBoolean(data.IsParent);
  }
  if (data.LastRestoreTime != null) {
    contents.LastRestoreTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastRestoreTime)));
  }
  if (data.Lifecycle != null) {
    contents.Lifecycle = de_Lifecycle(data.Lifecycle, context);
  }
  if (data.ParentRecoveryPointArn != null) {
    contents.ParentRecoveryPointArn = __expectString(data.ParentRecoveryPointArn);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceArn != null) {
    contents.ResourceArn = __expectString(data.ResourceArn);
  }
  if (data.ResourceName != null) {
    contents.ResourceName = __expectString(data.ResourceName);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.SourceBackupVaultArn != null) {
    contents.SourceBackupVaultArn = __expectString(data.SourceBackupVaultArn);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
  if (data.StorageClass != null) {
    contents.StorageClass = __expectString(data.StorageClass);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ResourceTypeManagementPreference != null) {
    contents.ResourceTypeManagementPreference = de_ResourceTypeManagementPreference(
      data.ResourceTypeManagementPreference,
      context
    );
  }
  if (data.ResourceTypeOptInPreference != null) {
    contents.ResourceTypeOptInPreference = de_ResourceTypeOptInPreference(data.ResourceTypeOptInPreference, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ReportJob != null) {
    contents.ReportJob = de_ReportJob(data.ReportJob, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ReportPlan != null) {
    contents.ReportPlan = de_ReportPlan(data.ReportPlan, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AccountId != null) {
    contents.AccountId = __expectString(data.AccountId);
  }
  if (data.BackupSizeInBytes != null) {
    contents.BackupSizeInBytes = __expectLong(data.BackupSizeInBytes);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletionDate)));
  }
  if (data.CreatedResourceArn != null) {
    contents.CreatedResourceArn = __expectString(data.CreatedResourceArn);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.ExpectedCompletionTimeMinutes != null) {
    contents.ExpectedCompletionTimeMinutes = __expectLong(data.ExpectedCompletionTimeMinutes);
  }
  if (data.IamRoleArn != null) {
    contents.IamRoleArn = __expectString(data.IamRoleArn);
  }
  if (data.PercentDone != null) {
    contents.PercentDone = __expectString(data.PercentDone);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  if (data.RestoreJobId != null) {
    contents.RestoreJobId = __expectString(data.RestoreJobId);
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.StatusMessage != null) {
    contents.StatusMessage = __expectString(data.StatusMessage);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanTemplateJson != null) {
    contents.BackupPlanTemplateJson = __expectString(data.BackupPlanTemplateJson);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = de_AdvancedBackupSettings(data.AdvancedBackupSettings, context);
  }
  if (data.BackupPlan != null) {
    contents.BackupPlan = de_BackupPlan(data.BackupPlan, context);
  }
  if (data.BackupPlanArn != null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.CreatorRequestId != null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.DeletionDate != null) {
    contents.DeletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.DeletionDate)));
  }
  if (data.LastExecutionDate != null) {
    contents.LastExecutionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastExecutionDate)));
  }
  if (data.VersionId != null) {
    contents.VersionId = __expectString(data.VersionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlan != null) {
    contents.BackupPlan = de_BackupPlan(data.BackupPlan, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanDocument != null) {
    contents.BackupPlanDocument = de_BackupPlan(data.BackupPlanDocument, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.BackupSelection != null) {
    contents.BackupSelection = de_BackupSelection(data.BackupSelection, context);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.CreatorRequestId != null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.SelectionId != null) {
    contents.SelectionId = __expectString(data.SelectionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.Policy != null) {
    contents.Policy = __expectString(data.Policy);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultEvents != null) {
    contents.BackupVaultEvents = de_BackupVaultEvents(data.BackupVaultEvents, context);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.SNSTopicArn != null) {
    contents.SNSTopicArn = __expectString(data.SNSTopicArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CancelDescription != null) {
    contents.CancelDescription = __expectString(data.CancelDescription);
  }
  if (data.CancellationDate != null) {
    contents.CancellationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CancellationDate)));
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.Description != null) {
    contents.Description = __expectString(data.Description);
  }
  if (data.LegalHoldArn != null) {
    contents.LegalHoldArn = __expectString(data.LegalHoldArn);
  }
  if (data.LegalHoldId != null) {
    contents.LegalHoldId = __expectString(data.LegalHoldId);
  }
  if (data.RecoveryPointSelection != null) {
    contents.RecoveryPointSelection = de_RecoveryPointSelection(data.RecoveryPointSelection, context);
  }
  if (data.RetainRecordUntil != null) {
    contents.RetainRecordUntil = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.RetainRecordUntil)));
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Title != null) {
    contents.Title = __expectString(data.Title);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  if (data.RestoreMetadata != null) {
    contents.RestoreMetadata = de_Metadata(data.RestoreMetadata, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ResourceTypes != null) {
    contents.ResourceTypes = de_ResourceTypes(data.ResourceTypes, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupJobs != null) {
    contents.BackupJobs = de_BackupJobsList(data.BackupJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlansList != null) {
    contents.BackupPlansList = de_BackupPlansList(data.BackupPlansList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanTemplatesList != null) {
    contents.BackupPlanTemplatesList = de_BackupPlanTemplatesList(data.BackupPlanTemplatesList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupPlanVersionsList != null) {
    contents.BackupPlanVersionsList = de_BackupPlanVersionsList(data.BackupPlanVersionsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupSelectionsList != null) {
    contents.BackupSelectionsList = de_BackupSelectionsList(data.BackupSelectionsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultList != null) {
    contents.BackupVaultList = de_BackupVaultList(data.BackupVaultList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CopyJobs != null) {
    contents.CopyJobs = de_CopyJobsList(data.CopyJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.Frameworks != null) {
    contents.Frameworks = de_FrameworkList(data.Frameworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.LegalHolds != null) {
    contents.LegalHolds = de_LegalHoldsList(data.LegalHolds, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Results != null) {
    contents.Results = de_ProtectedResourcesList(data.Results, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = de_RecoveryPointByBackupVaultList(data.RecoveryPoints, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = de_RecoveryPointsList(data.RecoveryPoints, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = de_RecoveryPointByResourceList(data.RecoveryPoints, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReportJobs != null) {
    contents.ReportJobs = de_ReportJobList(data.ReportJobs, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReportPlans != null) {
    contents.ReportPlans = de_ReportPlanList(data.ReportPlans, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RestoreJobs != null) {
    contents.RestoreJobs = de_RestoreJobsList(data.RestoreJobs, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = de_Tags(data.Tags, context);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupJobId != null) {
    contents.BackupJobId = __expectString(data.BackupJobId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.IsParent != null) {
    contents.IsParent = __expectBoolean(data.IsParent);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CopyJobId != null) {
    contents.CopyJobId = __expectString(data.CopyJobId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.IsParent != null) {
    contents.IsParent = __expectBoolean(data.IsParent);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.ReportJobId != null) {
    contents.ReportJobId = __expectString(data.ReportJobId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.RestoreJobId != null) {
    contents.RestoreJobId = __expectString(data.RestoreJobId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = de_AdvancedBackupSettings(data.AdvancedBackupSettings, context);
  }
  if (data.BackupPlanArn != null) {
    contents.BackupPlanArn = __expectString(data.BackupPlanArn);
  }
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.CreationDate != null) {
    contents.CreationDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationDate)));
  }
  if (data.VersionId != null) {
    contents.VersionId = __expectString(data.VersionId);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.FrameworkArn != null) {
    contents.FrameworkArn = __expectString(data.FrameworkArn);
  }
  if (data.FrameworkName != null) {
    contents.FrameworkName = __expectString(data.FrameworkName);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.CalculatedLifecycle != null) {
    contents.CalculatedLifecycle = de_CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.Lifecycle != null) {
    contents.Lifecycle = de_Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
      throwDefaultError({
        output,
        parsedBody,
        exceptionCtor: __BaseException,
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
  if (data.CreationTime != null) {
    contents.CreationTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CreationTime)));
  }
  if (data.ReportPlanArn != null) {
    contents.ReportPlanArn = __expectString(data.ReportPlanArn);
  }
  if (data.ReportPlanName != null) {
    contents.ReportPlanName = __expectString(data.ReportPlanName);
  }
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
 * deserializeAws_restJson1AlreadyExistsExceptionRes
 */
const de_AlreadyExistsExceptionRes = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<AlreadyExistsException> => {
  const contents: any = map({});
  const data: any = parsedOutput.body;
  if (data.Arn != null) {
    contents.Arn = __expectString(data.Arn);
  }
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.CreatorRequestId != null) {
    contents.CreatorRequestId = __expectString(data.CreatorRequestId);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
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
  if (data.Code != null) {
    contents.Code = __expectString(data.Code);
  }
  if (data.Context != null) {
    contents.Context = __expectString(data.Context);
  }
  if (data.Message != null) {
    contents.Message = __expectString(data.Message);
  }
  if (data.Type != null) {
    contents.Type = __expectString(data.Type);
  }
  const exception = new ServiceUnavailableException({
    $metadata: deserializeMetadata(parsedOutput),
    ...contents,
  });
  return __decorateServiceException(exception, parsedOutput.body);
};

/**
 * serializeAws_restJson1AdvancedBackupSetting
 */
const se_AdvancedBackupSetting = (input: AdvancedBackupSetting, context: __SerdeContext): any => {
  return {
    ...(input.BackupOptions != null && { BackupOptions: se_BackupOptions(input.BackupOptions, context) }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

/**
 * serializeAws_restJson1AdvancedBackupSettings
 */
const se_AdvancedBackupSettings = (input: AdvancedBackupSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_AdvancedBackupSetting(entry, context);
    });
};

/**
 * serializeAws_restJson1BackupOptions
 */
const se_BackupOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1BackupPlanInput
 */
const se_BackupPlanInput = (input: BackupPlanInput, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedBackupSettings != null && {
      AdvancedBackupSettings: se_AdvancedBackupSettings(input.AdvancedBackupSettings, context),
    }),
    ...(input.BackupPlanName != null && { BackupPlanName: input.BackupPlanName }),
    ...(input.Rules != null && { Rules: se_BackupRulesInput(input.Rules, context) }),
  };
};

/**
 * serializeAws_restJson1BackupRuleInput
 */
const se_BackupRuleInput = (input: BackupRuleInput, context: __SerdeContext): any => {
  return {
    ...(input.CompletionWindowMinutes != null && { CompletionWindowMinutes: input.CompletionWindowMinutes }),
    ...(input.CopyActions != null && { CopyActions: se_CopyActions(input.CopyActions, context) }),
    ...(input.EnableContinuousBackup != null && { EnableContinuousBackup: input.EnableContinuousBackup }),
    ...(input.Lifecycle != null && { Lifecycle: se_Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags != null && { RecoveryPointTags: se_Tags(input.RecoveryPointTags, context) }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.StartWindowMinutes != null && { StartWindowMinutes: input.StartWindowMinutes }),
    ...(input.TargetBackupVaultName != null && { TargetBackupVaultName: input.TargetBackupVaultName }),
  };
};

/**
 * serializeAws_restJson1BackupRulesInput
 */
const se_BackupRulesInput = (input: BackupRuleInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_BackupRuleInput(entry, context);
    });
};

/**
 * serializeAws_restJson1BackupSelection
 */
const se_BackupSelection = (input: BackupSelection, context: __SerdeContext): any => {
  return {
    ...(input.Conditions != null && { Conditions: se_Conditions(input.Conditions, context) }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ListOfTags != null && { ListOfTags: se_ListOfTags(input.ListOfTags, context) }),
    ...(input.NotResources != null && { NotResources: se_ResourceArns(input.NotResources, context) }),
    ...(input.Resources != null && { Resources: se_ResourceArns(input.Resources, context) }),
    ...(input.SelectionName != null && { SelectionName: input.SelectionName }),
  };
};

/**
 * serializeAws_restJson1BackupVaultEvents
 */
const se_BackupVaultEvents = (input: (BackupVaultEvent | string)[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ComplianceResourceIdList
 */
const se_ComplianceResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1Condition
 */
const se_Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.ConditionKey != null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionType != null && { ConditionType: input.ConditionType }),
    ...(input.ConditionValue != null && { ConditionValue: input.ConditionValue }),
  };
};

/**
 * serializeAws_restJson1ConditionParameter
 */
const se_ConditionParameter = (input: ConditionParameter, context: __SerdeContext): any => {
  return {
    ...(input.ConditionKey != null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionValue != null && { ConditionValue: input.ConditionValue }),
  };
};

/**
 * serializeAws_restJson1ConditionParameters
 */
const se_ConditionParameters = (input: ConditionParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ConditionParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1Conditions
 */
const se_Conditions = (input: Conditions, context: __SerdeContext): any => {
  return {
    ...(input.StringEquals != null && { StringEquals: se_ConditionParameters(input.StringEquals, context) }),
    ...(input.StringLike != null && { StringLike: se_ConditionParameters(input.StringLike, context) }),
    ...(input.StringNotEquals != null && { StringNotEquals: se_ConditionParameters(input.StringNotEquals, context) }),
    ...(input.StringNotLike != null && { StringNotLike: se_ConditionParameters(input.StringNotLike, context) }),
  };
};

/**
 * serializeAws_restJson1ControlInputParameter
 */
const se_ControlInputParameter = (input: ControlInputParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

/**
 * serializeAws_restJson1ControlInputParameters
 */
const se_ControlInputParameters = (input: ControlInputParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_ControlInputParameter(entry, context);
    });
};

/**
 * serializeAws_restJson1ControlScope
 */
const se_ControlScope = (input: ControlScope, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceResourceIds != null && {
      ComplianceResourceIds: se_ComplianceResourceIdList(input.ComplianceResourceIds, context),
    }),
    ...(input.ComplianceResourceTypes != null && {
      ComplianceResourceTypes: se_ResourceTypeList(input.ComplianceResourceTypes, context),
    }),
    ...(input.Tags != null && { Tags: se_stringMap(input.Tags, context) }),
  };
};

/**
 * serializeAws_restJson1CopyAction
 */
const se_CopyAction = (input: CopyAction, context: __SerdeContext): any => {
  return {
    ...(input.DestinationBackupVaultArn != null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.Lifecycle != null && { Lifecycle: se_Lifecycle(input.Lifecycle, context) }),
  };
};

/**
 * serializeAws_restJson1CopyActions
 */
const se_CopyActions = (input: CopyAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_CopyAction(entry, context);
    });
};

/**
 * serializeAws_restJson1DateRange
 */
const se_DateRange = (input: DateRange, context: __SerdeContext): any => {
  return {
    ...(input.FromDate != null && { FromDate: Math.round(input.FromDate.getTime() / 1000) }),
    ...(input.ToDate != null && { ToDate: Math.round(input.ToDate.getTime() / 1000) }),
  };
};

/**
 * serializeAws_restJson1FormatList
 */
const se_FormatList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1FrameworkControl
 */
const se_FrameworkControl = (input: FrameworkControl, context: __SerdeContext): any => {
  return {
    ...(input.ControlInputParameters != null && {
      ControlInputParameters: se_ControlInputParameters(input.ControlInputParameters, context),
    }),
    ...(input.ControlName != null && { ControlName: input.ControlName }),
    ...(input.ControlScope != null && { ControlScope: se_ControlScope(input.ControlScope, context) }),
  };
};

/**
 * serializeAws_restJson1FrameworkControls
 */
const se_FrameworkControls = (input: FrameworkControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_FrameworkControl(entry, context);
    });
};

/**
 * serializeAws_restJson1GlobalSettings
 */
const se_GlobalSettings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1Lifecycle
 */
const se_Lifecycle = (input: Lifecycle, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAfterDays != null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays != null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};

/**
 * serializeAws_restJson1ListOfTags
 */
const se_ListOfTags = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return se_Condition(entry, context);
    });
};

/**
 * serializeAws_restJson1Metadata
 */
const se_Metadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1RecoveryPointSelection
 */
const se_RecoveryPointSelection = (input: RecoveryPointSelection, context: __SerdeContext): any => {
  return {
    ...(input.DateRange != null && { DateRange: se_DateRange(input.DateRange, context) }),
    ...(input.ResourceIdentifiers != null && {
      ResourceIdentifiers: se_ResourceIdentifiers(input.ResourceIdentifiers, context),
    }),
    ...(input.VaultNames != null && { VaultNames: se_VaultNames(input.VaultNames, context) }),
  };
};

/**
 * serializeAws_restJson1ReportDeliveryChannel
 */
const se_ReportDeliveryChannel = (input: ReportDeliveryChannel, context: __SerdeContext): any => {
  return {
    ...(input.Formats != null && { Formats: se_FormatList(input.Formats, context) }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

/**
 * serializeAws_restJson1ReportSetting
 */
const se_ReportSetting = (input: ReportSetting, context: __SerdeContext): any => {
  return {
    ...(input.Accounts != null && { Accounts: se_stringList(input.Accounts, context) }),
    ...(input.FrameworkArns != null && { FrameworkArns: se_stringList(input.FrameworkArns, context) }),
    ...(input.NumberOfFrameworks != null && { NumberOfFrameworks: input.NumberOfFrameworks }),
    ...(input.OrganizationUnits != null && { OrganizationUnits: se_stringList(input.OrganizationUnits, context) }),
    ...(input.Regions != null && { Regions: se_stringList(input.Regions, context) }),
    ...(input.ReportTemplate != null && { ReportTemplate: input.ReportTemplate }),
  };
};

/**
 * serializeAws_restJson1ResourceArns
 */
const se_ResourceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceIdentifiers
 */
const se_ResourceIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceTypeList
 */
const se_ResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1ResourceTypeManagementPreference
 */
const se_ResourceTypeManagementPreference = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1ResourceTypeOptInPreference
 */
const se_ResourceTypeOptInPreference = (input: Record<string, boolean>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1stringList
 */
const se_stringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * serializeAws_restJson1stringMap
 */
const se_stringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
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
 * serializeAws_restJson1Tags
 */
const se_Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

/**
 * serializeAws_restJson1VaultNames
 */
const se_VaultNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

/**
 * deserializeAws_restJson1AdvancedBackupSetting
 */
const de_AdvancedBackupSetting = (output: any, context: __SerdeContext): AdvancedBackupSetting => {
  return {
    BackupOptions: output.BackupOptions != null ? de_BackupOptions(output.BackupOptions, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1AdvancedBackupSettings
 */
const de_AdvancedBackupSettings = (output: any, context: __SerdeContext): AdvancedBackupSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_AdvancedBackupSetting(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupJob
 */
const de_BackupJob = (output: any, context: __SerdeContext): BackupJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupJobId: __expectString(output.BackupJobId),
    BackupOptions: output.BackupOptions != null ? de_BackupOptions(output.BackupOptions, context) : undefined,
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    BackupType: __expectString(output.BackupType),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    BytesTransferred: __expectLong(output.BytesTransferred),
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CreatedBy: output.CreatedBy != null ? de_RecoveryPointCreator(output.CreatedBy, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    ExpectedCompletionDate:
      output.ExpectedCompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ExpectedCompletionDate)))
        : undefined,
    IamRoleArn: __expectString(output.IamRoleArn),
    IsParent: __expectBoolean(output.IsParent),
    ParentJobId: __expectString(output.ParentJobId),
    PercentDone: __expectString(output.PercentDone),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
    StartBy:
      output.StartBy != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartBy))) : undefined,
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1BackupJobChildJobsInState
 */
const de_BackupJobChildJobsInState = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [BackupJobState | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BackupJobsList
 */
const de_BackupJobsList = (output: any, context: __SerdeContext): BackupJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupOptions
 */
const de_BackupOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1BackupPlan
 */
const de_BackupPlan = (output: any, context: __SerdeContext): BackupPlan => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings != null
        ? de_AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName: __expectString(output.BackupPlanName),
    Rules: output.Rules != null ? de_BackupRules(output.Rules, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1BackupPlansList
 */
const de_BackupPlansList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupPlansListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupPlansListMember
 */
const de_BackupPlansListMember = (output: any, context: __SerdeContext): BackupPlansListMember => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings != null
        ? de_AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanName: __expectString(output.BackupPlanName),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    DeletionDate:
      output.DeletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeletionDate)))
        : undefined,
    LastExecutionDate:
      output.LastExecutionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastExecutionDate)))
        : undefined,
    VersionId: __expectString(output.VersionId),
  } as any;
};

/**
 * deserializeAws_restJson1BackupPlanTemplatesList
 */
const de_BackupPlanTemplatesList = (output: any, context: __SerdeContext): BackupPlanTemplatesListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupPlanTemplatesListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupPlanTemplatesListMember
 */
const de_BackupPlanTemplatesListMember = (output: any, context: __SerdeContext): BackupPlanTemplatesListMember => {
  return {
    BackupPlanTemplateId: __expectString(output.BackupPlanTemplateId),
    BackupPlanTemplateName: __expectString(output.BackupPlanTemplateName),
  } as any;
};

/**
 * deserializeAws_restJson1BackupPlanVersionsList
 */
const de_BackupPlanVersionsList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupPlansListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupRule
 */
const de_BackupRule = (output: any, context: __SerdeContext): BackupRule => {
  return {
    CompletionWindowMinutes: __expectLong(output.CompletionWindowMinutes),
    CopyActions: output.CopyActions != null ? de_CopyActions(output.CopyActions, context) : undefined,
    EnableContinuousBackup: __expectBoolean(output.EnableContinuousBackup),
    Lifecycle: output.Lifecycle != null ? de_Lifecycle(output.Lifecycle, context) : undefined,
    RecoveryPointTags: output.RecoveryPointTags != null ? de_Tags(output.RecoveryPointTags, context) : undefined,
    RuleId: __expectString(output.RuleId),
    RuleName: __expectString(output.RuleName),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    StartWindowMinutes: __expectLong(output.StartWindowMinutes),
    TargetBackupVaultName: __expectString(output.TargetBackupVaultName),
  } as any;
};

/**
 * deserializeAws_restJson1BackupRules
 */
const de_BackupRules = (output: any, context: __SerdeContext): BackupRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupRule(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupSelection
 */
const de_BackupSelection = (output: any, context: __SerdeContext): BackupSelection => {
  return {
    Conditions: output.Conditions != null ? de_Conditions(output.Conditions, context) : undefined,
    IamRoleArn: __expectString(output.IamRoleArn),
    ListOfTags: output.ListOfTags != null ? de_ListOfTags(output.ListOfTags, context) : undefined,
    NotResources: output.NotResources != null ? de_ResourceArns(output.NotResources, context) : undefined,
    Resources: output.Resources != null ? de_ResourceArns(output.Resources, context) : undefined,
    SelectionName: __expectString(output.SelectionName),
  } as any;
};

/**
 * deserializeAws_restJson1BackupSelectionsList
 */
const de_BackupSelectionsList = (output: any, context: __SerdeContext): BackupSelectionsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupSelectionsListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupSelectionsListMember
 */
const de_BackupSelectionsListMember = (output: any, context: __SerdeContext): BackupSelectionsListMember => {
  return {
    BackupPlanId: __expectString(output.BackupPlanId),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    IamRoleArn: __expectString(output.IamRoleArn),
    SelectionId: __expectString(output.SelectionId),
    SelectionName: __expectString(output.SelectionName),
  } as any;
};

/**
 * deserializeAws_restJson1BackupVaultEvents
 */
const de_BackupVaultEvents = (output: any, context: __SerdeContext): (BackupVaultEvent | string)[] => {
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
 * deserializeAws_restJson1BackupVaultList
 */
const de_BackupVaultList = (output: any, context: __SerdeContext): BackupVaultListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_BackupVaultListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1BackupVaultListMember
 */
const de_BackupVaultListMember = (output: any, context: __SerdeContext): BackupVaultListMember => {
  return {
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    CreatorRequestId: __expectString(output.CreatorRequestId),
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    LockDate:
      output.LockDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LockDate))) : undefined,
    Locked: __expectBoolean(output.Locked),
    MaxRetentionDays: __expectLong(output.MaxRetentionDays),
    MinRetentionDays: __expectLong(output.MinRetentionDays),
    NumberOfRecoveryPoints: __expectLong(output.NumberOfRecoveryPoints),
  } as any;
};

/**
 * deserializeAws_restJson1CalculatedLifecycle
 */
const de_CalculatedLifecycle = (output: any, context: __SerdeContext): CalculatedLifecycle => {
  return {
    DeleteAt:
      output.DeleteAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeleteAt))) : undefined,
    MoveToColdStorageAt:
      output.MoveToColdStorageAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MoveToColdStorageAt)))
        : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ComplianceResourceIdList
 */
const de_ComplianceResourceIdList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Condition
 */
const de_Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    ConditionKey: __expectString(output.ConditionKey),
    ConditionType: __expectString(output.ConditionType),
    ConditionValue: __expectString(output.ConditionValue),
  } as any;
};

/**
 * deserializeAws_restJson1ConditionParameter
 */
const de_ConditionParameter = (output: any, context: __SerdeContext): ConditionParameter => {
  return {
    ConditionKey: __expectString(output.ConditionKey),
    ConditionValue: __expectString(output.ConditionValue),
  } as any;
};

/**
 * deserializeAws_restJson1ConditionParameters
 */
const de_ConditionParameters = (output: any, context: __SerdeContext): ConditionParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ConditionParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Conditions
 */
const de_Conditions = (output: any, context: __SerdeContext): Conditions => {
  return {
    StringEquals: output.StringEquals != null ? de_ConditionParameters(output.StringEquals, context) : undefined,
    StringLike: output.StringLike != null ? de_ConditionParameters(output.StringLike, context) : undefined,
    StringNotEquals:
      output.StringNotEquals != null ? de_ConditionParameters(output.StringNotEquals, context) : undefined,
    StringNotLike: output.StringNotLike != null ? de_ConditionParameters(output.StringNotLike, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ControlInputParameter
 */
const de_ControlInputParameter = (output: any, context: __SerdeContext): ControlInputParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

/**
 * deserializeAws_restJson1ControlInputParameters
 */
const de_ControlInputParameters = (output: any, context: __SerdeContext): ControlInputParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ControlInputParameter(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ControlScope
 */
const de_ControlScope = (output: any, context: __SerdeContext): ControlScope => {
  return {
    ComplianceResourceIds:
      output.ComplianceResourceIds != null
        ? de_ComplianceResourceIdList(output.ComplianceResourceIds, context)
        : undefined,
    ComplianceResourceTypes:
      output.ComplianceResourceTypes != null ? de_ResourceTypeList(output.ComplianceResourceTypes, context) : undefined,
    Tags: output.Tags != null ? de_stringMap(output.Tags, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CopyAction
 */
const de_CopyAction = (output: any, context: __SerdeContext): CopyAction => {
  return {
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    Lifecycle: output.Lifecycle != null ? de_Lifecycle(output.Lifecycle, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1CopyActions
 */
const de_CopyActions = (output: any, context: __SerdeContext): CopyAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CopyAction(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1CopyJob
 */
const de_CopyJob = (output: any, context: __SerdeContext): CopyJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    ChildJobsInState:
      output.ChildJobsInState != null ? de_CopyJobChildJobsInState(output.ChildJobsInState, context) : undefined,
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CompositeMemberIdentifier: __expectString(output.CompositeMemberIdentifier),
    CopyJobId: __expectString(output.CopyJobId),
    CreatedBy: output.CreatedBy != null ? de_RecoveryPointCreator(output.CreatedBy, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    DestinationRecoveryPointArn: __expectString(output.DestinationRecoveryPointArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    IsParent: __expectBoolean(output.IsParent),
    NumberOfChildJobs: __expectLong(output.NumberOfChildJobs),
    ParentJobId: __expectString(output.ParentJobId),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    SourceRecoveryPointArn: __expectString(output.SourceRecoveryPointArn),
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1CopyJobChildJobsInState
 */
const de_CopyJobChildJobsInState = (output: any, context: __SerdeContext): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [CopyJobState | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1CopyJobsList
 */
const de_CopyJobsList = (output: any, context: __SerdeContext): CopyJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_CopyJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1DateRange
 */
const de_DateRange = (output: any, context: __SerdeContext): DateRange => {
  return {
    FromDate:
      output.FromDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FromDate))) : undefined,
    ToDate: output.ToDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ToDate))) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FormatList
 */
const de_FormatList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1Framework
 */
const de_Framework = (output: any, context: __SerdeContext): Framework => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DeploymentStatus: __expectString(output.DeploymentStatus),
    FrameworkArn: __expectString(output.FrameworkArn),
    FrameworkDescription: __expectString(output.FrameworkDescription),
    FrameworkName: __expectString(output.FrameworkName),
    NumberOfControls: __expectInt32(output.NumberOfControls),
  } as any;
};

/**
 * deserializeAws_restJson1FrameworkControl
 */
const de_FrameworkControl = (output: any, context: __SerdeContext): FrameworkControl => {
  return {
    ControlInputParameters:
      output.ControlInputParameters != null
        ? de_ControlInputParameters(output.ControlInputParameters, context)
        : undefined,
    ControlName: __expectString(output.ControlName),
    ControlScope: output.ControlScope != null ? de_ControlScope(output.ControlScope, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1FrameworkControls
 */
const de_FrameworkControls = (output: any, context: __SerdeContext): FrameworkControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_FrameworkControl(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1FrameworkList
 */
const de_FrameworkList = (output: any, context: __SerdeContext): Framework[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Framework(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1GlobalSettings
 */
const de_GlobalSettings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1LegalHold
 */
const de_LegalHold = (output: any, context: __SerdeContext): LegalHold => {
  return {
    CancellationDate:
      output.CancellationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CancellationDate)))
        : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    Description: __expectString(output.Description),
    LegalHoldArn: __expectString(output.LegalHoldArn),
    LegalHoldId: __expectString(output.LegalHoldId),
    Status: __expectString(output.Status),
    Title: __expectString(output.Title),
  } as any;
};

/**
 * deserializeAws_restJson1LegalHoldsList
 */
const de_LegalHoldsList = (output: any, context: __SerdeContext): LegalHold[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_LegalHold(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Lifecycle
 */
const de_Lifecycle = (output: any, context: __SerdeContext): Lifecycle => {
  return {
    DeleteAfterDays: __expectLong(output.DeleteAfterDays),
    MoveToColdStorageAfterDays: __expectLong(output.MoveToColdStorageAfterDays),
  } as any;
};

/**
 * deserializeAws_restJson1ListOfTags
 */
const de_ListOfTags = (output: any, context: __SerdeContext): Condition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_Condition(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1Metadata
 */
const de_Metadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ProtectedResource
 */
const de_ProtectedResource = (output: any, context: __SerdeContext): ProtectedResource => {
  return {
    LastBackupTime:
      output.LastBackupTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastBackupTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

/**
 * deserializeAws_restJson1ProtectedResourcesList
 */
const de_ProtectedResourcesList = (output: any, context: __SerdeContext): ProtectedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ProtectedResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryPointByBackupVault
 */
const de_RecoveryPointByBackupVault = (output: any, context: __SerdeContext): RecoveryPointByBackupVault => {
  return {
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CalculatedLifecycle:
      output.CalculatedLifecycle != null ? de_CalculatedLifecycle(output.CalculatedLifecycle, context) : undefined,
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CompositeMemberIdentifier: __expectString(output.CompositeMemberIdentifier),
    CreatedBy: output.CreatedBy != null ? de_RecoveryPointCreator(output.CreatedBy, context) : undefined,
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    IamRoleArn: __expectString(output.IamRoleArn),
    IsEncrypted: __expectBoolean(output.IsEncrypted),
    IsParent: __expectBoolean(output.IsParent),
    LastRestoreTime:
      output.LastRestoreTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastRestoreTime)))
        : undefined,
    Lifecycle: output.Lifecycle != null ? de_Lifecycle(output.Lifecycle, context) : undefined,
    ParentRecoveryPointArn: __expectString(output.ParentRecoveryPointArn),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceName: __expectString(output.ResourceName),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryPointByBackupVaultList
 */
const de_RecoveryPointByBackupVaultList = (output: any, context: __SerdeContext): RecoveryPointByBackupVault[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryPointByBackupVault(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryPointByResource
 */
const de_RecoveryPointByResource = (output: any, context: __SerdeContext): RecoveryPointByResource => {
  return {
    BackupSizeBytes: __expectLong(output.BackupSizeBytes),
    BackupVaultName: __expectString(output.BackupVaultName),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    EncryptionKeyArn: __expectString(output.EncryptionKeyArn),
    IsParent: __expectBoolean(output.IsParent),
    ParentRecoveryPointArn: __expectString(output.ParentRecoveryPointArn),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceName: __expectString(output.ResourceName),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryPointByResourceList
 */
const de_RecoveryPointByResourceList = (output: any, context: __SerdeContext): RecoveryPointByResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryPointByResource(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RecoveryPointCreator
 */
const de_RecoveryPointCreator = (output: any, context: __SerdeContext): RecoveryPointCreator => {
  return {
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanVersion: __expectString(output.BackupPlanVersion),
    BackupRuleId: __expectString(output.BackupRuleId),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryPointMember
 */
const de_RecoveryPointMember = (output: any, context: __SerdeContext): RecoveryPointMember => {
  return {
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryPointSelection
 */
const de_RecoveryPointSelection = (output: any, context: __SerdeContext): RecoveryPointSelection => {
  return {
    DateRange: output.DateRange != null ? de_DateRange(output.DateRange, context) : undefined,
    ResourceIdentifiers:
      output.ResourceIdentifiers != null ? de_ResourceIdentifiers(output.ResourceIdentifiers, context) : undefined,
    VaultNames: output.VaultNames != null ? de_VaultNames(output.VaultNames, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1RecoveryPointsList
 */
const de_RecoveryPointsList = (output: any, context: __SerdeContext): RecoveryPointMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RecoveryPointMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReportDeliveryChannel
 */
const de_ReportDeliveryChannel = (output: any, context: __SerdeContext): ReportDeliveryChannel => {
  return {
    Formats: output.Formats != null ? de_FormatList(output.Formats, context) : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

/**
 * deserializeAws_restJson1ReportDestination
 */
const de_ReportDestination = (output: any, context: __SerdeContext): ReportDestination => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3Keys: output.S3Keys != null ? de_stringList(output.S3Keys, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReportJob
 */
const de_ReportJob = (output: any, context: __SerdeContext): ReportJob => {
  return {
    CompletionTime:
      output.CompletionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionTime)))
        : undefined,
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    ReportDestination:
      output.ReportDestination != null ? de_ReportDestination(output.ReportDestination, context) : undefined,
    ReportJobId: __expectString(output.ReportJobId),
    ReportPlanArn: __expectString(output.ReportPlanArn),
    ReportTemplate: __expectString(output.ReportTemplate),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1ReportJobList
 */
const de_ReportJobList = (output: any, context: __SerdeContext): ReportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportJob(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReportPlan
 */
const de_ReportPlan = (output: any, context: __SerdeContext): ReportPlan => {
  return {
    CreationTime:
      output.CreationTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationTime)))
        : undefined,
    DeploymentStatus: __expectString(output.DeploymentStatus),
    LastAttemptedExecutionTime:
      output.LastAttemptedExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastAttemptedExecutionTime)))
        : undefined,
    LastSuccessfulExecutionTime:
      output.LastSuccessfulExecutionTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastSuccessfulExecutionTime)))
        : undefined,
    ReportDeliveryChannel:
      output.ReportDeliveryChannel != null
        ? de_ReportDeliveryChannel(output.ReportDeliveryChannel, context)
        : undefined,
    ReportPlanArn: __expectString(output.ReportPlanArn),
    ReportPlanDescription: __expectString(output.ReportPlanDescription),
    ReportPlanName: __expectString(output.ReportPlanName),
    ReportSetting: output.ReportSetting != null ? de_ReportSetting(output.ReportSetting, context) : undefined,
  } as any;
};

/**
 * deserializeAws_restJson1ReportPlanList
 */
const de_ReportPlanList = (output: any, context: __SerdeContext): ReportPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_ReportPlan(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1ReportSetting
 */
const de_ReportSetting = (output: any, context: __SerdeContext): ReportSetting => {
  return {
    Accounts: output.Accounts != null ? de_stringList(output.Accounts, context) : undefined,
    FrameworkArns: output.FrameworkArns != null ? de_stringList(output.FrameworkArns, context) : undefined,
    NumberOfFrameworks: __expectInt32(output.NumberOfFrameworks),
    OrganizationUnits: output.OrganizationUnits != null ? de_stringList(output.OrganizationUnits, context) : undefined,
    Regions: output.Regions != null ? de_stringList(output.Regions, context) : undefined,
    ReportTemplate: __expectString(output.ReportTemplate),
  } as any;
};

/**
 * deserializeAws_restJson1ResourceArns
 */
const de_ResourceArns = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ResourceIdentifiers
 */
const de_ResourceIdentifiers = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ResourceTypeList
 */
const de_ResourceTypeList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1ResourceTypeManagementPreference
 */
const de_ResourceTypeManagementPreference = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ResourceTypeOptInPreference
 */
const de_ResourceTypeOptInPreference = (output: any, context: __SerdeContext): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1ResourceTypes
 */
const de_ResourceTypes = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1RestoreJobsList
 */
const de_RestoreJobsList = (output: any, context: __SerdeContext): RestoreJobsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return de_RestoreJobsListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RestoreJobsListMember
 */
const de_RestoreJobsListMember = (output: any, context: __SerdeContext): RestoreJobsListMember => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CreatedResourceArn: __expectString(output.CreatedResourceArn),
    CreationDate:
      output.CreationDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CreationDate)))
        : undefined,
    ExpectedCompletionTimeMinutes: __expectLong(output.ExpectedCompletionTimeMinutes),
    IamRoleArn: __expectString(output.IamRoleArn),
    PercentDone: __expectString(output.PercentDone),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceType: __expectString(output.ResourceType),
    RestoreJobId: __expectString(output.RestoreJobId),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

/**
 * deserializeAws_restJson1stringList
 */
const de_stringList = (output: any, context: __SerdeContext): string[] => {
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
 * deserializeAws_restJson1stringMap
 */
const de_stringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1Tags
 */
const de_Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

/**
 * deserializeAws_restJson1VaultNames
 */
const de_VaultNames = (output: any, context: __SerdeContext): string[] => {
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
