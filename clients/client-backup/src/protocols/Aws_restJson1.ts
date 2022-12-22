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

export const serializeAws_restJson1CancelLegalHoldCommand = async (
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

export const serializeAws_restJson1CreateBackupPlanCommand = async (
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
    ...(input.BackupPlan != null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
    ...(input.BackupPlanTags != null && { BackupPlanTags: serializeAws_restJson1Tags(input.BackupPlanTags, context) }),
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
    ...(input.BackupSelection != null && {
      BackupSelection: serializeAws_restJson1BackupSelection(input.BackupSelection, context),
    }),
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
    ...(input.BackupVaultTags != null && {
      BackupVaultTags: serializeAws_restJson1Tags(input.BackupVaultTags, context),
    }),
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

export const serializeAws_restJson1CreateFrameworkCommand = async (
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
      FrameworkControls: serializeAws_restJson1FrameworkControls(input.FrameworkControls, context),
    }),
    ...(input.FrameworkDescription != null && { FrameworkDescription: input.FrameworkDescription }),
    ...(input.FrameworkName != null && { FrameworkName: input.FrameworkName }),
    ...(input.FrameworkTags != null && {
      FrameworkTags: serializeAws_restJson1stringMap(input.FrameworkTags, context),
    }),
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

export const serializeAws_restJson1CreateLegalHoldCommand = async (
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
      RecoveryPointSelection: serializeAws_restJson1RecoveryPointSelection(input.RecoveryPointSelection, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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

export const serializeAws_restJson1CreateReportPlanCommand = async (
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
      ReportDeliveryChannel: serializeAws_restJson1ReportDeliveryChannel(input.ReportDeliveryChannel, context),
    }),
    ...(input.ReportPlanDescription != null && { ReportPlanDescription: input.ReportPlanDescription }),
    ...(input.ReportPlanName != null && { ReportPlanName: input.ReportPlanName }),
    ...(input.ReportPlanTags != null && {
      ReportPlanTags: serializeAws_restJson1stringMap(input.ReportPlanTags, context),
    }),
    ...(input.ReportSetting != null && {
      ReportSetting: serializeAws_restJson1ReportSetting(input.ReportSetting, context),
    }),
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

export const serializeAws_restJson1DeleteBackupPlanCommand = async (
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

export const serializeAws_restJson1DeleteBackupSelectionCommand = async (
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

export const serializeAws_restJson1DeleteBackupVaultCommand = async (
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

export const serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (
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

export const serializeAws_restJson1DeleteBackupVaultLockConfigurationCommand = async (
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

export const serializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (
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

export const serializeAws_restJson1DeleteFrameworkCommand = async (
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

export const serializeAws_restJson1DeleteRecoveryPointCommand = async (
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

export const serializeAws_restJson1DeleteReportPlanCommand = async (
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

export const serializeAws_restJson1DescribeBackupJobCommand = async (
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

export const serializeAws_restJson1DescribeBackupVaultCommand = async (
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

export const serializeAws_restJson1DescribeCopyJobCommand = async (
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

export const serializeAws_restJson1DescribeFrameworkCommand = async (
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

export const serializeAws_restJson1DescribeGlobalSettingsCommand = async (
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

export const serializeAws_restJson1DescribeProtectedResourceCommand = async (
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

export const serializeAws_restJson1DescribeRecoveryPointCommand = async (
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

export const serializeAws_restJson1DescribeRegionSettingsCommand = async (
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

export const serializeAws_restJson1DescribeReportJobCommand = async (
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

export const serializeAws_restJson1DescribeReportPlanCommand = async (
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

export const serializeAws_restJson1DescribeRestoreJobCommand = async (
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

export const serializeAws_restJson1DisassociateRecoveryPointCommand = async (
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

export const serializeAws_restJson1DisassociateRecoveryPointFromParentCommand = async (
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

export const serializeAws_restJson1ExportBackupPlanTemplateCommand = async (
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

export const serializeAws_restJson1GetBackupPlanCommand = async (
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

export const serializeAws_restJson1GetBackupPlanFromJSONCommand = async (
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

export const serializeAws_restJson1GetBackupPlanFromTemplateCommand = async (
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

export const serializeAws_restJson1GetBackupSelectionCommand = async (
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

export const serializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (
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

export const serializeAws_restJson1GetBackupVaultNotificationsCommand = async (
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

export const serializeAws_restJson1GetLegalHoldCommand = async (
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

export const serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (
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

export const serializeAws_restJson1GetSupportedResourceTypesCommand = async (
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

export const serializeAws_restJson1ListBackupJobsCommand = async (
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

export const serializeAws_restJson1ListBackupPlansCommand = async (
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

export const serializeAws_restJson1ListBackupPlanTemplatesCommand = async (
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

export const serializeAws_restJson1ListBackupPlanVersionsCommand = async (
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

export const serializeAws_restJson1ListBackupSelectionsCommand = async (
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

export const serializeAws_restJson1ListBackupVaultsCommand = async (
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

export const serializeAws_restJson1ListCopyJobsCommand = async (
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

export const serializeAws_restJson1ListFrameworksCommand = async (
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

export const serializeAws_restJson1ListLegalHoldsCommand = async (
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

export const serializeAws_restJson1ListProtectedResourcesCommand = async (
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

export const serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (
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

export const serializeAws_restJson1ListRecoveryPointsByLegalHoldCommand = async (
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

export const serializeAws_restJson1ListRecoveryPointsByResourceCommand = async (
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

export const serializeAws_restJson1ListReportJobsCommand = async (
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

export const serializeAws_restJson1ListReportPlansCommand = async (
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

export const serializeAws_restJson1ListRestoreJobsCommand = async (
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

export const serializeAws_restJson1ListTagsCommand = async (
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

export const serializeAws_restJson1PutBackupVaultLockConfigurationCommand = async (
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
      BackupVaultEvents: serializeAws_restJson1BackupVaultEvents(input.BackupVaultEvents, context),
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

export const serializeAws_restJson1StartBackupJobCommand = async (
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
    ...(input.BackupOptions != null && {
      BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
    }),
    ...(input.BackupVaultName != null && { BackupVaultName: input.BackupVaultName }),
    ...(input.CompleteWindowMinutes != null && { CompleteWindowMinutes: input.CompleteWindowMinutes }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.IdempotencyToken != null && { IdempotencyToken: input.IdempotencyToken }),
    ...(input.Lifecycle != null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags != null && {
      RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
    }),
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

export const serializeAws_restJson1StartCopyJobCommand = async (
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
    ...(input.Lifecycle != null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
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

export const serializeAws_restJson1StartReportJobCommand = async (
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

export const serializeAws_restJson1StartRestoreJobCommand = async (
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
    ...(input.Metadata != null && { Metadata: serializeAws_restJson1Metadata(input.Metadata, context) }),
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

export const serializeAws_restJson1StopBackupJobCommand = async (
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

export const serializeAws_restJson1TagResourceCommand = async (
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
    ...(input.Tags != null && { Tags: serializeAws_restJson1Tags(input.Tags, context) }),
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
  resolvedPath = __resolvedPath(resolvedPath, input, "ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify({
    ...(input.TagKeyList != null && { TagKeyList: serializeAws_restJson1TagKeyList(input.TagKeyList, context) }),
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
    ...(input.BackupPlan != null && { BackupPlan: serializeAws_restJson1BackupPlanInput(input.BackupPlan, context) }),
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

export const serializeAws_restJson1UpdateFrameworkCommand = async (
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
      FrameworkControls: serializeAws_restJson1FrameworkControls(input.FrameworkControls, context),
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

export const serializeAws_restJson1UpdateGlobalSettingsCommand = async (
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
    ...(input.GlobalSettings != null && {
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
    ...(input.Lifecycle != null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
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
  const resolvedPath = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + "/account-settings";
  let body: any;
  body = JSON.stringify({
    ...(input.ResourceTypeManagementPreference != null && {
      ResourceTypeManagementPreference: serializeAws_restJson1ResourceTypeManagementPreference(
        input.ResourceTypeManagementPreference,
        context
      ),
    }),
    ...(input.ResourceTypeOptInPreference != null && {
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

export const serializeAws_restJson1UpdateReportPlanCommand = async (
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
      ReportDeliveryChannel: serializeAws_restJson1ReportDeliveryChannel(input.ReportDeliveryChannel, context),
    }),
    ...(input.ReportPlanDescription != null && { ReportPlanDescription: input.ReportPlanDescription }),
    ...(input.ReportSetting != null && {
      ReportSetting: serializeAws_restJson1ReportSetting(input.ReportSetting, context),
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

export const deserializeAws_restJson1CancelLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLegalHoldCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return deserializeAws_restJson1CancelLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1CancelLegalHoldCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
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

const deserializeAws_restJson1CreateBackupPlanCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupSelectionCommandError(output, context);
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

const deserializeAws_restJson1CreateBackupSelectionCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateBackupVaultCommandError(output, context);
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

const deserializeAws_restJson1CreateBackupVaultCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateFrameworkCommandError(output, context);
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

const deserializeAws_restJson1CreateFrameworkCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateLegalHoldCommandError(output, context);
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
    contents.RecoveryPointSelection = deserializeAws_restJson1RecoveryPointSelection(
      data.RecoveryPointSelection,
      context
    );
  }
  if (data.Status != null) {
    contents.Status = __expectString(data.Status);
  }
  if (data.Title != null) {
    contents.Title = __expectString(data.Title);
  }
  return contents;
};

const deserializeAws_restJson1CreateLegalHoldCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1CreateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1CreateReportPlanCommandError(output, context);
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

const deserializeAws_restJson1CreateReportPlanCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupPlanCommandError(output, context);
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

const deserializeAws_restJson1DeleteBackupPlanCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupSelectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBackupSelectionCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBackupVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteBackupVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteFrameworkCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteFrameworkCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteRecoveryPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteRecoveryPointCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DeleteReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DeleteReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DeleteReportPlanCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupJobCommandError(output, context);
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
    contents.BackupOptions = deserializeAws_restJson1BackupOptions(data.BackupOptions, context);
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
    contents.ChildJobsInState = deserializeAws_restJson1BackupJobChildJobsInState(data.ChildJobsInState, context);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletionDate)));
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
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

const deserializeAws_restJson1DescribeBackupJobCommandError = async (
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
      throw await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeBackupVaultCommandError(output, context);
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

const deserializeAws_restJson1DescribeBackupVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeCopyJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CopyJob != null) {
    contents.CopyJob = deserializeAws_restJson1CopyJob(data.CopyJob, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeCopyJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeFrameworkCommandError(output, context);
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
    contents.FrameworkControls = deserializeAws_restJson1FrameworkControls(data.FrameworkControls, context);
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

const deserializeAws_restJson1DescribeFrameworkCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.GlobalSettings != null) {
    contents.GlobalSettings = deserializeAws_restJson1GlobalSettings(data.GlobalSettings, context);
  }
  if (data.LastUpdateTime != null) {
    contents.LastUpdateTime = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.LastUpdateTime)));
  }
  return contents;
};

const deserializeAws_restJson1DescribeGlobalSettingsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeProtectedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeProtectedResourceCommandError(output, context);
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
  if (data.ResourceType != null) {
    contents.ResourceType = __expectString(data.ResourceType);
  }
  return contents;
};

const deserializeAws_restJson1DescribeProtectedResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRecoveryPointCommandError(output, context);
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
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.CompletionDate != null) {
    contents.CompletionDate = __expectNonNull(__parseEpochTimestamp(__expectNumber(data.CompletionDate)));
  }
  if (data.CompositeMemberIdentifier != null) {
    contents.CompositeMemberIdentifier = __expectString(data.CompositeMemberIdentifier);
  }
  if (data.CreatedBy != null) {
    contents.CreatedBy = deserializeAws_restJson1RecoveryPointCreator(data.CreatedBy, context);
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
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
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

const deserializeAws_restJson1DescribeRecoveryPointCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRegionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceTypeManagementPreference != null) {
    contents.ResourceTypeManagementPreference = deserializeAws_restJson1ResourceTypeManagementPreference(
      data.ResourceTypeManagementPreference,
      context
    );
  }
  if (data.ResourceTypeOptInPreference != null) {
    contents.ResourceTypeOptInPreference = deserializeAws_restJson1ResourceTypeOptInPreference(
      data.ResourceTypeOptInPreference,
      context
    );
  }
  return contents;
};

const deserializeAws_restJson1DescribeRegionSettingsCommandError = async (
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

export const deserializeAws_restJson1DescribeReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReportJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReportJob != null) {
    contents.ReportJob = deserializeAws_restJson1ReportJob(data.ReportJob, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeReportJobCommandError = async (
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
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeReportPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ReportPlan != null) {
    contents.ReportPlan = deserializeAws_restJson1ReportPlan(data.ReportPlan, context);
  }
  return contents;
};

const deserializeAws_restJson1DescribeReportPlanCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DescribeRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DescribeRestoreJobCommandError(output, context);
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

const deserializeAws_restJson1DescribeRestoreJobCommandError = async (
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
      throw await deserializeAws_restJson1DependencyFailureExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DisassociateRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRecoveryPointCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateRecoveryPointCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await deserializeAws_restJson1InvalidResourceStateExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1DisassociateRecoveryPointFromParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointFromParentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return deserializeAws_restJson1DisassociateRecoveryPointFromParentCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1DisassociateRecoveryPointFromParentCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ExportBackupPlanTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ExportBackupPlanTemplateCommandError(output, context);
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

const deserializeAws_restJson1ExportBackupPlanTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
  }
  if (data.BackupPlan != null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
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

const deserializeAws_restJson1GetBackupPlanCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanFromJSONCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromJSONCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlan != null) {
    contents.BackupPlan = deserializeAws_restJson1BackupPlan(data.BackupPlan, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBackupPlanFromJSONCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupPlanFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupPlanFromTemplateCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlanDocument != null) {
    contents.BackupPlanDocument = deserializeAws_restJson1BackupPlan(data.BackupPlanDocument, context);
  }
  return contents;
};

const deserializeAws_restJson1GetBackupPlanFromTemplateCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupSelectionCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlanId != null) {
    contents.BackupPlanId = __expectString(data.BackupPlanId);
  }
  if (data.BackupSelection != null) {
    contents.BackupSelection = deserializeAws_restJson1BackupSelection(data.BackupSelection, context);
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

const deserializeAws_restJson1GetBackupSelectionCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError(output, context);
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

const deserializeAws_restJson1GetBackupVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.BackupVaultEvents != null) {
    contents.BackupVaultEvents = deserializeAws_restJson1BackupVaultEvents(data.BackupVaultEvents, context);
  }
  if (data.BackupVaultName != null) {
    contents.BackupVaultName = __expectString(data.BackupVaultName);
  }
  if (data.SNSTopicArn != null) {
    contents.SNSTopicArn = __expectString(data.SNSTopicArn);
  }
  return contents;
};

const deserializeAws_restJson1GetBackupVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetLegalHoldCommandError(output, context);
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
    contents.RecoveryPointSelection = deserializeAws_restJson1RecoveryPointSelection(
      data.RecoveryPointSelection,
      context
    );
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

const deserializeAws_restJson1GetLegalHoldCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError(output, context);
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
    contents.RestoreMetadata = deserializeAws_restJson1Metadata(data.RestoreMetadata, context);
  }
  return contents;
};

const deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1GetSupportedResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1GetSupportedResourceTypesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.ResourceTypes != null) {
    contents.ResourceTypes = deserializeAws_restJson1ResourceTypes(data.ResourceTypes, context);
  }
  return contents;
};

const deserializeAws_restJson1GetSupportedResourceTypesCommandError = async (
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

export const deserializeAws_restJson1ListBackupJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupJobs != null) {
    contents.BackupJobs = deserializeAws_restJson1BackupJobsList(data.BackupJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupJobsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlansList != null) {
    contents.BackupPlansList = deserializeAws_restJson1BackupPlansList(data.BackupPlansList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupPlansCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlanTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanTemplatesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlanTemplatesList != null) {
    contents.BackupPlanTemplatesList = deserializeAws_restJson1BackupPlanTemplatesList(
      data.BackupPlanTemplatesList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupPlanTemplatesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupPlanVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupPlanVersionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupPlanVersionsList != null) {
    contents.BackupPlanVersionsList = deserializeAws_restJson1BackupPlanVersionsList(
      data.BackupPlanVersionsList,
      context
    );
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupPlanVersionsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupSelectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupSelectionsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupSelectionsList != null) {
    contents.BackupSelectionsList = deserializeAws_restJson1BackupSelectionsList(data.BackupSelectionsList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupSelectionsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListBackupVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListBackupVaultsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupVaultList != null) {
    contents.BackupVaultList = deserializeAws_restJson1BackupVaultList(data.BackupVaultList, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListBackupVaultsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListCopyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListCopyJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.CopyJobs != null) {
    contents.CopyJobs = deserializeAws_restJson1CopyJobsList(data.CopyJobs, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListCopyJobsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListFrameworksCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.Frameworks != null) {
    contents.Frameworks = deserializeAws_restJson1FrameworkList(data.Frameworks, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListFrameworksCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListLegalHoldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLegalHoldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListLegalHoldsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.LegalHolds != null) {
    contents.LegalHolds = deserializeAws_restJson1LegalHoldsList(data.LegalHolds, context);
  }
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  return contents;
};

const deserializeAws_restJson1ListLegalHoldsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListProtectedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListProtectedResourcesCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Results != null) {
    contents.Results = deserializeAws_restJson1ProtectedResourcesList(data.Results, context);
  }
  return contents;
};

const deserializeAws_restJson1ListProtectedResourcesCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByBackupVaultList(data.RecoveryPoints, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointsList(data.RecoveryPoints, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRecoveryPointsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRecoveryPointsByResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RecoveryPoints != null) {
    contents.RecoveryPoints = deserializeAws_restJson1RecoveryPointByResourceList(data.RecoveryPoints, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRecoveryPointsByResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListReportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReportJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReportJobs != null) {
    contents.ReportJobs = deserializeAws_restJson1ReportJobList(data.ReportJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1ListReportJobsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListReportPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListReportPlansCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.ReportPlans != null) {
    contents.ReportPlans = deserializeAws_restJson1ReportPlanList(data.ReportPlans, context);
  }
  return contents;
};

const deserializeAws_restJson1ListReportPlansCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListRestoreJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListRestoreJobsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.RestoreJobs != null) {
    contents.RestoreJobs = deserializeAws_restJson1RestoreJobsList(data.RestoreJobs, context);
  }
  return contents;
};

const deserializeAws_restJson1ListRestoreJobsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1ListTagsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.NextToken != null) {
    contents.NextToken = __expectString(data.NextToken);
  }
  if (data.Tags != null) {
    contents.Tags = deserializeAws_restJson1Tags(data.Tags, context);
  }
  return contents;
};

const deserializeAws_restJson1ListTagsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1PutBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutBackupVaultAccessPolicyCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1PutBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultLockConfigurationCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutBackupVaultLockConfigurationCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1PutBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1PutBackupVaultNotificationsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1PutBackupVaultNotificationsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartBackupJobCommandError(output, context);
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

const deserializeAws_restJson1StartBackupJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartCopyJobCommandError(output, context);
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

const deserializeAws_restJson1StartCopyJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartReportJobCommandError(output, context);
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

const deserializeAws_restJson1StartReportJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StartRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StartRestoreJobCommandError(output, context);
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

const deserializeAws_restJson1StartRestoreJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1StopBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1StopBackupJobCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1StopBackupJobCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1TagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1TagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UntagResourceCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UntagResourceCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateBackupPlanCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.AdvancedBackupSettings != null) {
    contents.AdvancedBackupSettings = deserializeAws_restJson1AdvancedBackupSettings(
      data.AdvancedBackupSettings,
      context
    );
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

const deserializeAws_restJson1UpdateBackupPlanCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateFrameworkCommandError(output, context);
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

const deserializeAws_restJson1UpdateFrameworkCommandError = async (
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
      throw await deserializeAws_restJson1AlreadyExistsExceptionResponse(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await deserializeAws_restJson1LimitExceededExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateGlobalSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateGlobalSettingsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  if (data.BackupVaultArn != null) {
    contents.BackupVaultArn = __expectString(data.BackupVaultArn);
  }
  if (data.CalculatedLifecycle != null) {
    contents.CalculatedLifecycle = deserializeAws_restJson1CalculatedLifecycle(data.CalculatedLifecycle, context);
  }
  if (data.Lifecycle != null) {
    contents.Lifecycle = deserializeAws_restJson1Lifecycle(data.Lifecycle, context);
  }
  if (data.RecoveryPointArn != null) {
    contents.RecoveryPointArn = __expectString(data.RecoveryPointArn);
  }
  return contents;
};

const deserializeAws_restJson1UpdateRecoveryPointLifecycleCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "InvalidRequestException":
    case "com.amazonaws.backup#InvalidRequestException":
      throw await deserializeAws_restJson1InvalidRequestExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateRegionSettingsCommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

const deserializeAws_restJson1UpdateRegionSettingsCommandError = async (
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
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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

export const deserializeAws_restJson1UpdateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return deserializeAws_restJson1UpdateReportPlanCommandError(output, context);
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

const deserializeAws_restJson1UpdateReportPlanCommandError = async (
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
      throw await deserializeAws_restJson1ConflictExceptionResponse(parsedOutput, context);
    case "InvalidParameterValueException":
    case "com.amazonaws.backup#InvalidParameterValueException":
      throw await deserializeAws_restJson1InvalidParameterValueExceptionResponse(parsedOutput, context);
    case "MissingParameterValueException":
    case "com.amazonaws.backup#MissingParameterValueException":
      throw await deserializeAws_restJson1MissingParameterValueExceptionResponse(parsedOutput, context);
    case "ResourceNotFoundException":
    case "com.amazonaws.backup#ResourceNotFoundException":
      throw await deserializeAws_restJson1ResourceNotFoundExceptionResponse(parsedOutput, context);
    case "ServiceUnavailableException":
    case "com.amazonaws.backup#ServiceUnavailableException":
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
const deserializeAws_restJson1AlreadyExistsExceptionResponse = async (
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

const deserializeAws_restJson1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
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

const deserializeAws_restJson1DependencyFailureExceptionResponse = async (
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

const deserializeAws_restJson1InvalidParameterValueExceptionResponse = async (
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

const deserializeAws_restJson1InvalidRequestExceptionResponse = async (
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

const deserializeAws_restJson1InvalidResourceStateExceptionResponse = async (
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

const deserializeAws_restJson1LimitExceededExceptionResponse = async (
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

const deserializeAws_restJson1MissingParameterValueExceptionResponse = async (
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

const deserializeAws_restJson1ResourceNotFoundExceptionResponse = async (
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

const deserializeAws_restJson1ServiceUnavailableExceptionResponse = async (
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

const serializeAws_restJson1AdvancedBackupSetting = (input: AdvancedBackupSetting, context: __SerdeContext): any => {
  return {
    ...(input.BackupOptions != null && {
      BackupOptions: serializeAws_restJson1BackupOptions(input.BackupOptions, context),
    }),
    ...(input.ResourceType != null && { ResourceType: input.ResourceType }),
  };
};

const serializeAws_restJson1AdvancedBackupSettings = (input: AdvancedBackupSetting[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
};

const serializeAws_restJson1BackupOptions = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1BackupPlanInput = (input: BackupPlanInput, context: __SerdeContext): any => {
  return {
    ...(input.AdvancedBackupSettings != null && {
      AdvancedBackupSettings: serializeAws_restJson1AdvancedBackupSettings(input.AdvancedBackupSettings, context),
    }),
    ...(input.BackupPlanName != null && { BackupPlanName: input.BackupPlanName }),
    ...(input.Rules != null && { Rules: serializeAws_restJson1BackupRulesInput(input.Rules, context) }),
  };
};

const serializeAws_restJson1BackupRuleInput = (input: BackupRuleInput, context: __SerdeContext): any => {
  return {
    ...(input.CompletionWindowMinutes != null && { CompletionWindowMinutes: input.CompletionWindowMinutes }),
    ...(input.CopyActions != null && { CopyActions: serializeAws_restJson1CopyActions(input.CopyActions, context) }),
    ...(input.EnableContinuousBackup != null && { EnableContinuousBackup: input.EnableContinuousBackup }),
    ...(input.Lifecycle != null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
    ...(input.RecoveryPointTags != null && {
      RecoveryPointTags: serializeAws_restJson1Tags(input.RecoveryPointTags, context),
    }),
    ...(input.RuleName != null && { RuleName: input.RuleName }),
    ...(input.ScheduleExpression != null && { ScheduleExpression: input.ScheduleExpression }),
    ...(input.StartWindowMinutes != null && { StartWindowMinutes: input.StartWindowMinutes }),
    ...(input.TargetBackupVaultName != null && { TargetBackupVaultName: input.TargetBackupVaultName }),
  };
};

const serializeAws_restJson1BackupRulesInput = (input: BackupRuleInput[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1BackupRuleInput(entry, context);
    });
};

const serializeAws_restJson1BackupSelection = (input: BackupSelection, context: __SerdeContext): any => {
  return {
    ...(input.Conditions != null && { Conditions: serializeAws_restJson1Conditions(input.Conditions, context) }),
    ...(input.IamRoleArn != null && { IamRoleArn: input.IamRoleArn }),
    ...(input.ListOfTags != null && { ListOfTags: serializeAws_restJson1ListOfTags(input.ListOfTags, context) }),
    ...(input.NotResources != null && {
      NotResources: serializeAws_restJson1ResourceArns(input.NotResources, context),
    }),
    ...(input.Resources != null && { Resources: serializeAws_restJson1ResourceArns(input.Resources, context) }),
    ...(input.SelectionName != null && { SelectionName: input.SelectionName }),
  };
};

const serializeAws_restJson1BackupVaultEvents = (
  input: (BackupVaultEvent | string)[],
  context: __SerdeContext
): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ComplianceResourceIdList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Condition = (input: Condition, context: __SerdeContext): any => {
  return {
    ...(input.ConditionKey != null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionType != null && { ConditionType: input.ConditionType }),
    ...(input.ConditionValue != null && { ConditionValue: input.ConditionValue }),
  };
};

const serializeAws_restJson1ConditionParameter = (input: ConditionParameter, context: __SerdeContext): any => {
  return {
    ...(input.ConditionKey != null && { ConditionKey: input.ConditionKey }),
    ...(input.ConditionValue != null && { ConditionValue: input.ConditionValue }),
  };
};

const serializeAws_restJson1ConditionParameters = (input: ConditionParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ConditionParameter(entry, context);
    });
};

const serializeAws_restJson1Conditions = (input: Conditions, context: __SerdeContext): any => {
  return {
    ...(input.StringEquals != null && {
      StringEquals: serializeAws_restJson1ConditionParameters(input.StringEquals, context),
    }),
    ...(input.StringLike != null && {
      StringLike: serializeAws_restJson1ConditionParameters(input.StringLike, context),
    }),
    ...(input.StringNotEquals != null && {
      StringNotEquals: serializeAws_restJson1ConditionParameters(input.StringNotEquals, context),
    }),
    ...(input.StringNotLike != null && {
      StringNotLike: serializeAws_restJson1ConditionParameters(input.StringNotLike, context),
    }),
  };
};

const serializeAws_restJson1ControlInputParameter = (input: ControlInputParameter, context: __SerdeContext): any => {
  return {
    ...(input.ParameterName != null && { ParameterName: input.ParameterName }),
    ...(input.ParameterValue != null && { ParameterValue: input.ParameterValue }),
  };
};

const serializeAws_restJson1ControlInputParameters = (input: ControlInputParameter[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1ControlInputParameter(entry, context);
    });
};

const serializeAws_restJson1ControlScope = (input: ControlScope, context: __SerdeContext): any => {
  return {
    ...(input.ComplianceResourceIds != null && {
      ComplianceResourceIds: serializeAws_restJson1ComplianceResourceIdList(input.ComplianceResourceIds, context),
    }),
    ...(input.ComplianceResourceTypes != null && {
      ComplianceResourceTypes: serializeAws_restJson1ResourceTypeList(input.ComplianceResourceTypes, context),
    }),
    ...(input.Tags != null && { Tags: serializeAws_restJson1stringMap(input.Tags, context) }),
  };
};

const serializeAws_restJson1CopyAction = (input: CopyAction, context: __SerdeContext): any => {
  return {
    ...(input.DestinationBackupVaultArn != null && { DestinationBackupVaultArn: input.DestinationBackupVaultArn }),
    ...(input.Lifecycle != null && { Lifecycle: serializeAws_restJson1Lifecycle(input.Lifecycle, context) }),
  };
};

const serializeAws_restJson1CopyActions = (input: CopyAction[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1CopyAction(entry, context);
    });
};

const serializeAws_restJson1DateRange = (input: DateRange, context: __SerdeContext): any => {
  return {
    ...(input.FromDate != null && { FromDate: Math.round(input.FromDate.getTime() / 1000) }),
    ...(input.ToDate != null && { ToDate: Math.round(input.ToDate.getTime() / 1000) }),
  };
};

const serializeAws_restJson1FormatList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1FrameworkControl = (input: FrameworkControl, context: __SerdeContext): any => {
  return {
    ...(input.ControlInputParameters != null && {
      ControlInputParameters: serializeAws_restJson1ControlInputParameters(input.ControlInputParameters, context),
    }),
    ...(input.ControlName != null && { ControlName: input.ControlName }),
    ...(input.ControlScope != null && {
      ControlScope: serializeAws_restJson1ControlScope(input.ControlScope, context),
    }),
  };
};

const serializeAws_restJson1FrameworkControls = (input: FrameworkControl[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1FrameworkControl(entry, context);
    });
};

const serializeAws_restJson1GlobalSettings = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1Lifecycle = (input: Lifecycle, context: __SerdeContext): any => {
  return {
    ...(input.DeleteAfterDays != null && { DeleteAfterDays: input.DeleteAfterDays }),
    ...(input.MoveToColdStorageAfterDays != null && { MoveToColdStorageAfterDays: input.MoveToColdStorageAfterDays }),
  };
};

const serializeAws_restJson1ListOfTags = (input: Condition[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return serializeAws_restJson1Condition(entry, context);
    });
};

const serializeAws_restJson1Metadata = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1RecoveryPointSelection = (input: RecoveryPointSelection, context: __SerdeContext): any => {
  return {
    ...(input.DateRange != null && { DateRange: serializeAws_restJson1DateRange(input.DateRange, context) }),
    ...(input.ResourceIdentifiers != null && {
      ResourceIdentifiers: serializeAws_restJson1ResourceIdentifiers(input.ResourceIdentifiers, context),
    }),
    ...(input.VaultNames != null && { VaultNames: serializeAws_restJson1VaultNames(input.VaultNames, context) }),
  };
};

const serializeAws_restJson1ReportDeliveryChannel = (input: ReportDeliveryChannel, context: __SerdeContext): any => {
  return {
    ...(input.Formats != null && { Formats: serializeAws_restJson1FormatList(input.Formats, context) }),
    ...(input.S3BucketName != null && { S3BucketName: input.S3BucketName }),
    ...(input.S3KeyPrefix != null && { S3KeyPrefix: input.S3KeyPrefix }),
  };
};

const serializeAws_restJson1ReportSetting = (input: ReportSetting, context: __SerdeContext): any => {
  return {
    ...(input.Accounts != null && { Accounts: serializeAws_restJson1stringList(input.Accounts, context) }),
    ...(input.FrameworkArns != null && {
      FrameworkArns: serializeAws_restJson1stringList(input.FrameworkArns, context),
    }),
    ...(input.NumberOfFrameworks != null && { NumberOfFrameworks: input.NumberOfFrameworks }),
    ...(input.OrganizationUnits != null && {
      OrganizationUnits: serializeAws_restJson1stringList(input.OrganizationUnits, context),
    }),
    ...(input.Regions != null && { Regions: serializeAws_restJson1stringList(input.Regions, context) }),
    ...(input.ReportTemplate != null && { ReportTemplate: input.ReportTemplate }),
  };
};

const serializeAws_restJson1ResourceArns = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceIdentifiers = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceTypeList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1ResourceTypeManagementPreference = (
  input: Record<string, boolean>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1ResourceTypeOptInPreference = (
  input: Record<string, boolean>,
  context: __SerdeContext
): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1stringList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1stringMap = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1TagKeyList = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const serializeAws_restJson1Tags = (input: Record<string, string>, context: __SerdeContext): any => {
  return Object.entries(input).reduce((acc: Record<string, any>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = value;
    return acc;
  }, {});
};

const serializeAws_restJson1VaultNames = (input: string[], context: __SerdeContext): any => {
  return input
    .filter((e: any) => e != null)
    .map((entry) => {
      return entry;
    });
};

const deserializeAws_restJson1AdvancedBackupSetting = (output: any, context: __SerdeContext): AdvancedBackupSetting => {
  return {
    BackupOptions:
      output.BackupOptions != null ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context) : undefined,
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1AdvancedBackupSettings = (
  output: any,
  context: __SerdeContext
): AdvancedBackupSetting[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1AdvancedBackupSetting(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupJob = (output: any, context: __SerdeContext): BackupJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupJobId: __expectString(output.BackupJobId),
    BackupOptions:
      output.BackupOptions != null ? deserializeAws_restJson1BackupOptions(output.BackupOptions, context) : undefined,
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    BackupType: __expectString(output.BackupType),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    BytesTransferred: __expectLong(output.BytesTransferred),
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CreatedBy:
      output.CreatedBy != null ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context) : undefined,
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
    ResourceType: __expectString(output.ResourceType),
    StartBy:
      output.StartBy != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.StartBy))) : undefined,
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1BackupJobChildJobsInState = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [BackupJobState | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1BackupJobsList = (output: any, context: __SerdeContext): BackupJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupOptions = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1BackupPlan = (output: any, context: __SerdeContext): BackupPlan => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings != null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
        : undefined,
    BackupPlanName: __expectString(output.BackupPlanName),
    Rules: output.Rules != null ? deserializeAws_restJson1BackupRules(output.Rules, context) : undefined,
  } as any;
};

const deserializeAws_restJson1BackupPlansList = (output: any, context: __SerdeContext): BackupPlansListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupPlansListMember = (output: any, context: __SerdeContext): BackupPlansListMember => {
  return {
    AdvancedBackupSettings:
      output.AdvancedBackupSettings != null
        ? deserializeAws_restJson1AdvancedBackupSettings(output.AdvancedBackupSettings, context)
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

const deserializeAws_restJson1BackupPlanTemplatesList = (
  output: any,
  context: __SerdeContext
): BackupPlanTemplatesListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlanTemplatesListMember(entry, context);
    });
  return retVal;
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
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupPlansListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupRule = (output: any, context: __SerdeContext): BackupRule => {
  return {
    CompletionWindowMinutes: __expectLong(output.CompletionWindowMinutes),
    CopyActions:
      output.CopyActions != null ? deserializeAws_restJson1CopyActions(output.CopyActions, context) : undefined,
    EnableContinuousBackup: __expectBoolean(output.EnableContinuousBackup),
    Lifecycle: output.Lifecycle != null ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context) : undefined,
    RecoveryPointTags:
      output.RecoveryPointTags != null ? deserializeAws_restJson1Tags(output.RecoveryPointTags, context) : undefined,
    RuleId: __expectString(output.RuleId),
    RuleName: __expectString(output.RuleName),
    ScheduleExpression: __expectString(output.ScheduleExpression),
    StartWindowMinutes: __expectLong(output.StartWindowMinutes),
    TargetBackupVaultName: __expectString(output.TargetBackupVaultName),
  } as any;
};

const deserializeAws_restJson1BackupRules = (output: any, context: __SerdeContext): BackupRule[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupRule(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupSelection = (output: any, context: __SerdeContext): BackupSelection => {
  return {
    Conditions: output.Conditions != null ? deserializeAws_restJson1Conditions(output.Conditions, context) : undefined,
    IamRoleArn: __expectString(output.IamRoleArn),
    ListOfTags: output.ListOfTags != null ? deserializeAws_restJson1ListOfTags(output.ListOfTags, context) : undefined,
    NotResources:
      output.NotResources != null ? deserializeAws_restJson1ResourceArns(output.NotResources, context) : undefined,
    Resources: output.Resources != null ? deserializeAws_restJson1ResourceArns(output.Resources, context) : undefined,
    SelectionName: __expectString(output.SelectionName),
  } as any;
};

const deserializeAws_restJson1BackupSelectionsList = (
  output: any,
  context: __SerdeContext
): BackupSelectionsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupSelectionsListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupSelectionsListMember = (
  output: any,
  context: __SerdeContext
): BackupSelectionsListMember => {
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

const deserializeAws_restJson1BackupVaultEvents = (
  output: any,
  context: __SerdeContext
): (BackupVaultEvent | string)[] => {
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

const deserializeAws_restJson1BackupVaultList = (output: any, context: __SerdeContext): BackupVaultListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1BackupVaultListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1BackupVaultListMember = (output: any, context: __SerdeContext): BackupVaultListMember => {
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

const deserializeAws_restJson1CalculatedLifecycle = (output: any, context: __SerdeContext): CalculatedLifecycle => {
  return {
    DeleteAt:
      output.DeleteAt != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.DeleteAt))) : undefined,
    MoveToColdStorageAt:
      output.MoveToColdStorageAt != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.MoveToColdStorageAt)))
        : undefined,
  } as any;
};

const deserializeAws_restJson1ComplianceResourceIdList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Condition = (output: any, context: __SerdeContext): Condition => {
  return {
    ConditionKey: __expectString(output.ConditionKey),
    ConditionType: __expectString(output.ConditionType),
    ConditionValue: __expectString(output.ConditionValue),
  } as any;
};

const deserializeAws_restJson1ConditionParameter = (output: any, context: __SerdeContext): ConditionParameter => {
  return {
    ConditionKey: __expectString(output.ConditionKey),
    ConditionValue: __expectString(output.ConditionValue),
  } as any;
};

const deserializeAws_restJson1ConditionParameters = (output: any, context: __SerdeContext): ConditionParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ConditionParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Conditions = (output: any, context: __SerdeContext): Conditions => {
  return {
    StringEquals:
      output.StringEquals != null
        ? deserializeAws_restJson1ConditionParameters(output.StringEquals, context)
        : undefined,
    StringLike:
      output.StringLike != null ? deserializeAws_restJson1ConditionParameters(output.StringLike, context) : undefined,
    StringNotEquals:
      output.StringNotEquals != null
        ? deserializeAws_restJson1ConditionParameters(output.StringNotEquals, context)
        : undefined,
    StringNotLike:
      output.StringNotLike != null
        ? deserializeAws_restJson1ConditionParameters(output.StringNotLike, context)
        : undefined,
  } as any;
};

const deserializeAws_restJson1ControlInputParameter = (output: any, context: __SerdeContext): ControlInputParameter => {
  return {
    ParameterName: __expectString(output.ParameterName),
    ParameterValue: __expectString(output.ParameterValue),
  } as any;
};

const deserializeAws_restJson1ControlInputParameters = (
  output: any,
  context: __SerdeContext
): ControlInputParameter[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ControlInputParameter(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ControlScope = (output: any, context: __SerdeContext): ControlScope => {
  return {
    ComplianceResourceIds:
      output.ComplianceResourceIds != null
        ? deserializeAws_restJson1ComplianceResourceIdList(output.ComplianceResourceIds, context)
        : undefined,
    ComplianceResourceTypes:
      output.ComplianceResourceTypes != null
        ? deserializeAws_restJson1ResourceTypeList(output.ComplianceResourceTypes, context)
        : undefined,
    Tags: output.Tags != null ? deserializeAws_restJson1stringMap(output.Tags, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CopyAction = (output: any, context: __SerdeContext): CopyAction => {
  return {
    DestinationBackupVaultArn: __expectString(output.DestinationBackupVaultArn),
    Lifecycle: output.Lifecycle != null ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context) : undefined,
  } as any;
};

const deserializeAws_restJson1CopyActions = (output: any, context: __SerdeContext): CopyAction[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CopyAction(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1CopyJob = (output: any, context: __SerdeContext): CopyJob => {
  return {
    AccountId: __expectString(output.AccountId),
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    ChildJobsInState:
      output.ChildJobsInState != null
        ? deserializeAws_restJson1CopyJobChildJobsInState(output.ChildJobsInState, context)
        : undefined,
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CompositeMemberIdentifier: __expectString(output.CompositeMemberIdentifier),
    CopyJobId: __expectString(output.CopyJobId),
    CreatedBy:
      output.CreatedBy != null ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context) : undefined,
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
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    SourceRecoveryPointArn: __expectString(output.SourceRecoveryPointArn),
    State: __expectString(output.State),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1CopyJobChildJobsInState = (
  output: any,
  context: __SerdeContext
): Record<string, number> => {
  return Object.entries(output).reduce((acc: Record<string, number>, [key, value]: [CopyJobState | string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectLong(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1CopyJobsList = (output: any, context: __SerdeContext): CopyJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1CopyJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1DateRange = (output: any, context: __SerdeContext): DateRange => {
  return {
    FromDate:
      output.FromDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.FromDate))) : undefined,
    ToDate: output.ToDate != null ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.ToDate))) : undefined,
  } as any;
};

const deserializeAws_restJson1FormatList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1Framework = (output: any, context: __SerdeContext): Framework => {
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

const deserializeAws_restJson1FrameworkControl = (output: any, context: __SerdeContext): FrameworkControl => {
  return {
    ControlInputParameters:
      output.ControlInputParameters != null
        ? deserializeAws_restJson1ControlInputParameters(output.ControlInputParameters, context)
        : undefined,
    ControlName: __expectString(output.ControlName),
    ControlScope:
      output.ControlScope != null ? deserializeAws_restJson1ControlScope(output.ControlScope, context) : undefined,
  } as any;
};

const deserializeAws_restJson1FrameworkControls = (output: any, context: __SerdeContext): FrameworkControl[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1FrameworkControl(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1FrameworkList = (output: any, context: __SerdeContext): Framework[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Framework(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1GlobalSettings = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1LegalHold = (output: any, context: __SerdeContext): LegalHold => {
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

const deserializeAws_restJson1LegalHoldsList = (output: any, context: __SerdeContext): LegalHold[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1LegalHold(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Lifecycle = (output: any, context: __SerdeContext): Lifecycle => {
  return {
    DeleteAfterDays: __expectLong(output.DeleteAfterDays),
    MoveToColdStorageAfterDays: __expectLong(output.MoveToColdStorageAfterDays),
  } as any;
};

const deserializeAws_restJson1ListOfTags = (output: any, context: __SerdeContext): Condition[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1Condition(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1Metadata = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ProtectedResource = (output: any, context: __SerdeContext): ProtectedResource => {
  return {
    LastBackupTime:
      output.LastBackupTime != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.LastBackupTime)))
        : undefined,
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
  } as any;
};

const deserializeAws_restJson1ProtectedResourcesList = (output: any, context: __SerdeContext): ProtectedResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ProtectedResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryPointByBackupVault = (
  output: any,
  context: __SerdeContext
): RecoveryPointByBackupVault => {
  return {
    BackupSizeInBytes: __expectLong(output.BackupSizeInBytes),
    BackupVaultArn: __expectString(output.BackupVaultArn),
    BackupVaultName: __expectString(output.BackupVaultName),
    CalculatedLifecycle:
      output.CalculatedLifecycle != null
        ? deserializeAws_restJson1CalculatedLifecycle(output.CalculatedLifecycle, context)
        : undefined,
    CompletionDate:
      output.CompletionDate != null
        ? __expectNonNull(__parseEpochTimestamp(__expectNumber(output.CompletionDate)))
        : undefined,
    CompositeMemberIdentifier: __expectString(output.CompositeMemberIdentifier),
    CreatedBy:
      output.CreatedBy != null ? deserializeAws_restJson1RecoveryPointCreator(output.CreatedBy, context) : undefined,
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
    Lifecycle: output.Lifecycle != null ? deserializeAws_restJson1Lifecycle(output.Lifecycle, context) : undefined,
    ParentRecoveryPointArn: __expectString(output.ParentRecoveryPointArn),
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
    ResourceArn: __expectString(output.ResourceArn),
    ResourceType: __expectString(output.ResourceType),
    SourceBackupVaultArn: __expectString(output.SourceBackupVaultArn),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1RecoveryPointByBackupVaultList = (
  output: any,
  context: __SerdeContext
): RecoveryPointByBackupVault[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryPointByBackupVault(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryPointByResource = (
  output: any,
  context: __SerdeContext
): RecoveryPointByResource => {
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
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1RecoveryPointByResourceList = (
  output: any,
  context: __SerdeContext
): RecoveryPointByResource[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryPointByResource(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RecoveryPointCreator = (output: any, context: __SerdeContext): RecoveryPointCreator => {
  return {
    BackupPlanArn: __expectString(output.BackupPlanArn),
    BackupPlanId: __expectString(output.BackupPlanId),
    BackupPlanVersion: __expectString(output.BackupPlanVersion),
    BackupRuleId: __expectString(output.BackupRuleId),
  } as any;
};

const deserializeAws_restJson1RecoveryPointMember = (output: any, context: __SerdeContext): RecoveryPointMember => {
  return {
    RecoveryPointArn: __expectString(output.RecoveryPointArn),
  } as any;
};

const deserializeAws_restJson1RecoveryPointSelection = (
  output: any,
  context: __SerdeContext
): RecoveryPointSelection => {
  return {
    DateRange: output.DateRange != null ? deserializeAws_restJson1DateRange(output.DateRange, context) : undefined,
    ResourceIdentifiers:
      output.ResourceIdentifiers != null
        ? deserializeAws_restJson1ResourceIdentifiers(output.ResourceIdentifiers, context)
        : undefined,
    VaultNames: output.VaultNames != null ? deserializeAws_restJson1VaultNames(output.VaultNames, context) : undefined,
  } as any;
};

const deserializeAws_restJson1RecoveryPointsList = (output: any, context: __SerdeContext): RecoveryPointMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RecoveryPointMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReportDeliveryChannel = (output: any, context: __SerdeContext): ReportDeliveryChannel => {
  return {
    Formats: output.Formats != null ? deserializeAws_restJson1FormatList(output.Formats, context) : undefined,
    S3BucketName: __expectString(output.S3BucketName),
    S3KeyPrefix: __expectString(output.S3KeyPrefix),
  } as any;
};

const deserializeAws_restJson1ReportDestination = (output: any, context: __SerdeContext): ReportDestination => {
  return {
    S3BucketName: __expectString(output.S3BucketName),
    S3Keys: output.S3Keys != null ? deserializeAws_restJson1stringList(output.S3Keys, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ReportJob = (output: any, context: __SerdeContext): ReportJob => {
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
      output.ReportDestination != null
        ? deserializeAws_restJson1ReportDestination(output.ReportDestination, context)
        : undefined,
    ReportJobId: __expectString(output.ReportJobId),
    ReportPlanArn: __expectString(output.ReportPlanArn),
    ReportTemplate: __expectString(output.ReportTemplate),
    Status: __expectString(output.Status),
    StatusMessage: __expectString(output.StatusMessage),
  } as any;
};

const deserializeAws_restJson1ReportJobList = (output: any, context: __SerdeContext): ReportJob[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReportJob(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReportPlan = (output: any, context: __SerdeContext): ReportPlan => {
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
        ? deserializeAws_restJson1ReportDeliveryChannel(output.ReportDeliveryChannel, context)
        : undefined,
    ReportPlanArn: __expectString(output.ReportPlanArn),
    ReportPlanDescription: __expectString(output.ReportPlanDescription),
    ReportPlanName: __expectString(output.ReportPlanName),
    ReportSetting:
      output.ReportSetting != null ? deserializeAws_restJson1ReportSetting(output.ReportSetting, context) : undefined,
  } as any;
};

const deserializeAws_restJson1ReportPlanList = (output: any, context: __SerdeContext): ReportPlan[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1ReportPlan(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1ReportSetting = (output: any, context: __SerdeContext): ReportSetting => {
  return {
    Accounts: output.Accounts != null ? deserializeAws_restJson1stringList(output.Accounts, context) : undefined,
    FrameworkArns:
      output.FrameworkArns != null ? deserializeAws_restJson1stringList(output.FrameworkArns, context) : undefined,
    NumberOfFrameworks: __expectInt32(output.NumberOfFrameworks),
    OrganizationUnits:
      output.OrganizationUnits != null
        ? deserializeAws_restJson1stringList(output.OrganizationUnits, context)
        : undefined,
    Regions: output.Regions != null ? deserializeAws_restJson1stringList(output.Regions, context) : undefined,
    ReportTemplate: __expectString(output.ReportTemplate),
  } as any;
};

const deserializeAws_restJson1ResourceArns = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourceIdentifiers = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourceTypeList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1ResourceTypeManagementPreference = (
  output: any,
  context: __SerdeContext
): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ResourceTypeOptInPreference = (
  output: any,
  context: __SerdeContext
): Record<string, boolean> => {
  return Object.entries(output).reduce((acc: Record<string, boolean>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectBoolean(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1ResourceTypes = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1RestoreJobsList = (output: any, context: __SerdeContext): RestoreJobsListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      if (entry === null) {
        return null as any;
      }
      return deserializeAws_restJson1RestoreJobsListMember(entry, context);
    });
  return retVal;
};

const deserializeAws_restJson1RestoreJobsListMember = (output: any, context: __SerdeContext): RestoreJobsListMember => {
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

const deserializeAws_restJson1stringList = (output: any, context: __SerdeContext): string[] => {
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

const deserializeAws_restJson1stringMap = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1Tags = (output: any, context: __SerdeContext): Record<string, string> => {
  return Object.entries(output).reduce((acc: Record<string, string>, [key, value]: [string, any]) => {
    if (value === null) {
      return acc;
    }
    acc[key] = __expectString(value) as any;
    return acc;
  }, {});
};

const deserializeAws_restJson1VaultNames = (output: any, context: __SerdeContext): string[] => {
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
