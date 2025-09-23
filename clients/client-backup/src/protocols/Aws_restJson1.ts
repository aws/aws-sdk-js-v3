// smithy-typescript generated code
import { loadRestJsonErrorCode, parseJsonBody as parseBody, parseJsonErrorBody as parseErrorBody } from "@aws-sdk/core";
import { requestBuilder as rb } from "@smithy/core";
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
  serializeDateTime as __serializeDateTime,
  take,
  withBaseException,
} from "@smithy/smithy-client";
import {
  Endpoint as __Endpoint,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  AssociateBackupVaultMpaApprovalTeamCommandInput,
  AssociateBackupVaultMpaApprovalTeamCommandOutput,
} from "../commands/AssociateBackupVaultMpaApprovalTeamCommand";
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
import {
  CreateRestoreAccessBackupVaultCommandInput,
  CreateRestoreAccessBackupVaultCommandOutput,
} from "../commands/CreateRestoreAccessBackupVaultCommand";
import {
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
} from "../commands/CreateRestoreTestingPlanCommand";
import {
  CreateRestoreTestingSelectionCommandInput,
  CreateRestoreTestingSelectionCommandOutput,
} from "../commands/CreateRestoreTestingSelectionCommand";
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
import {
  DeleteRestoreTestingPlanCommandInput,
  DeleteRestoreTestingPlanCommandOutput,
} from "../commands/DeleteRestoreTestingPlanCommand";
import {
  DeleteRestoreTestingSelectionCommandInput,
  DeleteRestoreTestingSelectionCommandOutput,
} from "../commands/DeleteRestoreTestingSelectionCommand";
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
  DisassociateBackupVaultMpaApprovalTeamCommandInput,
  DisassociateBackupVaultMpaApprovalTeamCommandOutput,
} from "../commands/DisassociateBackupVaultMpaApprovalTeamCommand";
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
  GetRecoveryPointIndexDetailsCommandInput,
  GetRecoveryPointIndexDetailsCommandOutput,
} from "../commands/GetRecoveryPointIndexDetailsCommand";
import {
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "../commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetRestoreJobMetadataCommandInput,
  GetRestoreJobMetadataCommandOutput,
} from "../commands/GetRestoreJobMetadataCommand";
import {
  GetRestoreTestingInferredMetadataCommandInput,
  GetRestoreTestingInferredMetadataCommandOutput,
} from "../commands/GetRestoreTestingInferredMetadataCommand";
import {
  GetRestoreTestingPlanCommandInput,
  GetRestoreTestingPlanCommandOutput,
} from "../commands/GetRestoreTestingPlanCommand";
import {
  GetRestoreTestingSelectionCommandInput,
  GetRestoreTestingSelectionCommandOutput,
} from "../commands/GetRestoreTestingSelectionCommand";
import {
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "../commands/GetSupportedResourceTypesCommand";
import { ListBackupJobsCommandInput, ListBackupJobsCommandOutput } from "../commands/ListBackupJobsCommand";
import {
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "../commands/ListBackupJobSummariesCommand";
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
import {
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
} from "../commands/ListCopyJobSummariesCommand";
import { ListFrameworksCommandInput, ListFrameworksCommandOutput } from "../commands/ListFrameworksCommand";
import {
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput,
} from "../commands/ListIndexedRecoveryPointsCommand";
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
import {
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput,
} from "../commands/ListRestoreAccessBackupVaultsCommand";
import {
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput,
} from "../commands/ListRestoreJobsByProtectedResourceCommand";
import { ListRestoreJobsCommandInput, ListRestoreJobsCommandOutput } from "../commands/ListRestoreJobsCommand";
import {
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
} from "../commands/ListRestoreJobSummariesCommand";
import {
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "../commands/ListRestoreTestingPlansCommand";
import {
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "../commands/ListRestoreTestingSelectionsCommand";
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
import {
  PutRestoreValidationResultCommandInput,
  PutRestoreValidationResultCommandOutput,
} from "../commands/PutRestoreValidationResultCommand";
import {
  RevokeRestoreAccessBackupVaultCommandInput,
  RevokeRestoreAccessBackupVaultCommandOutput,
} from "../commands/RevokeRestoreAccessBackupVaultCommand";
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
  UpdateRecoveryPointIndexSettingsCommandInput,
  UpdateRecoveryPointIndexSettingsCommandOutput,
} from "../commands/UpdateRecoveryPointIndexSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "../commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "../commands/UpdateRegionSettingsCommand";
import { UpdateReportPlanCommandInput, UpdateReportPlanCommandOutput } from "../commands/UpdateReportPlanCommand";
import {
  UpdateRestoreTestingPlanCommandInput,
  UpdateRestoreTestingPlanCommandOutput,
} from "../commands/UpdateRestoreTestingPlanCommand";
import {
  UpdateRestoreTestingSelectionCommandInput,
  UpdateRestoreTestingSelectionCommandOutput,
} from "../commands/UpdateRestoreTestingSelectionCommand";
import { BackupServiceException as __BaseException } from "../models/BackupServiceException";
import {
  AdvancedBackupSetting,
  AlreadyExistsException,
  BackupJob,
  BackupJobSummary,
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
  CopyJobSummary,
  DateRange,
  DependencyFailureException,
  Framework,
  FrameworkControl,
  IndexAction,
  IndexedRecoveryPoint,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidResourceStateException,
  KeyValue,
  LatestMpaApprovalTeamUpdate,
  LatestRevokeRequest,
  LegalHold,
  Lifecycle,
  LimitExceededException,
  MissingParameterValueException,
  ProtectedResource,
  ProtectedResourceConditions,
  RecoveryPointByBackupVault,
  RecoveryPointByResource,
  RecoveryPointSelection,
  ReportDeliveryChannel,
  ReportJob,
  ReportPlan,
  ReportSetting,
  ResourceNotFoundException,
  RestoreAccessBackupVaultListMember,
  RestoreJobsListMember,
  RestoreJobSummary,
  RestoreTestingPlanForCreate,
  RestoreTestingPlanForGet,
  RestoreTestingPlanForList,
  RestoreTestingPlanForUpdate,
  RestoreTestingRecoveryPointSelection,
  RestoreTestingRecoveryPointType,
  RestoreTestingSelectionForCreate,
  RestoreTestingSelectionForGet,
  RestoreTestingSelectionForList,
  RestoreTestingSelectionForUpdate,
  ServiceUnavailableException,
} from "../models/models_0";

/**
 * serializeAws_restJson1AssociateBackupVaultMpaApprovalTeamCommand
 */
export const se_AssociateBackupVaultMpaApprovalTeamCommand = async (
  input: AssociateBackupVaultMpaApprovalTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/mpaApprovalTeam");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      MpaApprovalTeamArn: [],
      RequesterComment: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CancelLegalHoldCommand
 */
export const se_CancelLegalHoldCommand = async (
  input: CancelLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/legal-holds/{LegalHoldId}");
  b.p("LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
  const query: any = map({
    [_cD]: [, __expectNonNull(input[_CD]!, `CancelDescription`)],
    [_rRID]: [() => input.RetainRecordInDays !== void 0, () => input[_RRID]!.toString()],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBackupPlanCommand
 */
export const se_CreateBackupPlanCommand = async (
  input: CreateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup/plans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlan: (_) => _json(_),
      BackupPlanTags: (_) => _json(_),
      CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBackupSelectionCommand
 */
export const se_CreateBackupSelectionCommand = async (
  input: CreateBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup/plans/{BackupPlanId}/selections");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupSelection: (_) => _json(_),
      CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateBackupVaultCommand
 */
export const se_CreateBackupVaultCommand = async (
  input: CreateBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultTags: (_) => _json(_),
      CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
      EncryptionKeyArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateFrameworkCommand
 */
export const se_CreateFrameworkCommand = async (
  input: CreateFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/frameworks");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLegalHoldCommand
 */
export const se_CreateLegalHoldCommand = async (
  input: CreateLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/legal-holds");
  let body: any;
  body = JSON.stringify(
    take(input, {
      Description: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      RecoveryPointSelection: (_) => se_RecoveryPointSelection(_, context),
      Tags: (_) => _json(_),
      Title: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateLogicallyAirGappedBackupVaultCommand
 */
export const se_CreateLogicallyAirGappedBackupVaultCommand = async (
  input: CreateLogicallyAirGappedBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/logically-air-gapped-backup-vaults/{BackupVaultName}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultTags: (_) => _json(_),
      CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
      MaxRetentionDays: [],
      MinRetentionDays: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateReportPlanCommand
 */
export const se_CreateReportPlanCommand = async (
  input: CreateReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/report-plans");
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
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRestoreAccessBackupVaultCommand
 */
export const se_CreateRestoreAccessBackupVaultCommand = async (
  input: CreateRestoreAccessBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-access-backup-vaults");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultName: [],
      BackupVaultTags: (_) => _json(_),
      CreatorRequestId: [true, (_) => _ ?? generateIdempotencyToken()],
      RequesterComment: [],
      SourceBackupVaultArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRestoreTestingPlanCommand
 */
export const se_CreateRestoreTestingPlanCommand = async (
  input: CreateRestoreTestingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-testing/plans");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CreatorRequestId: [],
      RestoreTestingPlan: (_) => _json(_),
      Tags: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1CreateRestoreTestingSelectionCommand
 */
export const se_CreateRestoreTestingSelectionCommand = async (
  input: CreateRestoreTestingSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}/selections");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      CreatorRequestId: [],
      RestoreTestingSelection: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupPlanCommand
 */
export const se_DeleteBackupPlanCommand = async (
  input: DeleteBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupSelectionCommand
 */
export const se_DeleteBackupSelectionCommand = async (
  input: DeleteBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}/selections/{SelectionId}");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  b.p("SelectionId", () => input.SelectionId!, "{SelectionId}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupVaultCommand
 */
export const se_DeleteBackupVaultCommand = async (
  input: DeleteBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupVaultAccessPolicyCommand
 */
export const se_DeleteBackupVaultAccessPolicyCommand = async (
  input: DeleteBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/access-policy");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupVaultLockConfigurationCommand
 */
export const se_DeleteBackupVaultLockConfigurationCommand = async (
  input: DeleteBackupVaultLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/vault-lock");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteBackupVaultNotificationsCommand
 */
export const se_DeleteBackupVaultNotificationsCommand = async (
  input: DeleteBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/notification-configuration");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteFrameworkCommand
 */
export const se_DeleteFrameworkCommand = async (
  input: DeleteFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/frameworks/{FrameworkName}");
  b.p("FrameworkName", () => input.FrameworkName!, "{FrameworkName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRecoveryPointCommand
 */
export const se_DeleteRecoveryPointCommand = async (
  input: DeleteRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteReportPlanCommand
 */
export const se_DeleteReportPlanCommand = async (
  input: DeleteReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/report-plans/{ReportPlanName}");
  b.p("ReportPlanName", () => input.ReportPlanName!, "{ReportPlanName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRestoreTestingPlanCommand
 */
export const se_DeleteRestoreTestingPlanCommand = async (
  input: DeleteRestoreTestingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DeleteRestoreTestingSelectionCommand
 */
export const se_DeleteRestoreTestingSelectionCommand = async (
  input: DeleteRestoreTestingSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  b.p("RestoreTestingSelectionName", () => input.RestoreTestingSelectionName!, "{RestoreTestingSelectionName}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBackupJobCommand
 */
export const se_DescribeBackupJobCommand = async (
  input: DescribeBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-jobs/{BackupJobId}");
  b.p("BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeBackupVaultCommand
 */
export const se_DescribeBackupVaultCommand = async (
  input: DescribeBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  const query: any = map({
    [_bVAI]: [, input[_BVAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeCopyJobCommand
 */
export const se_DescribeCopyJobCommand = async (
  input: DescribeCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/copy-jobs/{CopyJobId}");
  b.p("CopyJobId", () => input.CopyJobId!, "{CopyJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeFrameworkCommand
 */
export const se_DescribeFrameworkCommand = async (
  input: DescribeFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/frameworks/{FrameworkName}");
  b.p("FrameworkName", () => input.FrameworkName!, "{FrameworkName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeGlobalSettingsCommand
 */
export const se_DescribeGlobalSettingsCommand = async (
  input: DescribeGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/global-settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeProtectedResourceCommand
 */
export const se_DescribeProtectedResourceCommand = async (
  input: DescribeProtectedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resources/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRecoveryPointCommand
 */
export const se_DescribeRecoveryPointCommand = async (
  input: DescribeRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  const query: any = map({
    [_bVAI]: [, input[_BVAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRegionSettingsCommand
 */
export const se_DescribeRegionSettingsCommand = async (
  input: DescribeRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/account-settings");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReportJobCommand
 */
export const se_DescribeReportJobCommand = async (
  input: DescribeReportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/report-jobs/{ReportJobId}");
  b.p("ReportJobId", () => input.ReportJobId!, "{ReportJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeReportPlanCommand
 */
export const se_DescribeReportPlanCommand = async (
  input: DescribeReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/report-plans/{ReportPlanName}");
  b.p("ReportPlanName", () => input.ReportPlanName!, "{ReportPlanName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DescribeRestoreJobCommand
 */
export const se_DescribeRestoreJobCommand = async (
  input: DescribeRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-jobs/{RestoreJobId}");
  b.p("RestoreJobId", () => input.RestoreJobId!, "{RestoreJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateBackupVaultMpaApprovalTeamCommand
 */
export const se_DisassociateBackupVaultMpaApprovalTeamCommand = async (
  input: DisassociateBackupVaultMpaApprovalTeamCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/mpaApprovalTeam");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  const query: any = map({
    [_d]: [, ""],
  });
  let body: any;
  body = JSON.stringify(
    take(input, {
      RequesterComment: [],
    })
  );
  b.m("POST").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateRecoveryPointCommand
 */
export const se_DisassociateRecoveryPointCommand = async (
  input: DisassociateRecoveryPointCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/disassociate");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1DisassociateRecoveryPointFromParentCommand
 */
export const se_DisassociateRecoveryPointFromParentCommand = async (
  input: DisassociateRecoveryPointFromParentCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/parentAssociation");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  b.m("DELETE").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ExportBackupPlanTemplateCommand
 */
export const se_ExportBackupPlanTemplateCommand = async (
  input: ExportBackupPlanTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}/toTemplate");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupPlanCommand
 */
export const se_GetBackupPlanCommand = async (
  input: GetBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  const query: any = map({
    [_vI]: [, input[_VI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupPlanFromJSONCommand
 */
export const se_GetBackupPlanFromJSONCommand = async (
  input: GetBackupPlanFromJSONCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup/template/json/toPlan");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlanTemplateJson: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupPlanFromTemplateCommand
 */
export const se_GetBackupPlanFromTemplateCommand = async (
  input: GetBackupPlanFromTemplateCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/template/plans/{BackupPlanTemplateId}/toPlan");
  b.p("BackupPlanTemplateId", () => input.BackupPlanTemplateId!, "{BackupPlanTemplateId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupSelectionCommand
 */
export const se_GetBackupSelectionCommand = async (
  input: GetBackupSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}/selections/{SelectionId}");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  b.p("SelectionId", () => input.SelectionId!, "{SelectionId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupVaultAccessPolicyCommand
 */
export const se_GetBackupVaultAccessPolicyCommand = async (
  input: GetBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/access-policy");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetBackupVaultNotificationsCommand
 */
export const se_GetBackupVaultNotificationsCommand = async (
  input: GetBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/notification-configuration");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetLegalHoldCommand
 */
export const se_GetLegalHoldCommand = async (
  input: GetLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/legal-holds/{LegalHoldId}");
  b.p("LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecoveryPointIndexDetailsCommand
 */
export const se_GetRecoveryPointIndexDetailsCommand = async (
  input: GetRecoveryPointIndexDetailsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRecoveryPointRestoreMetadataCommand
 */
export const se_GetRecoveryPointRestoreMetadataCommand = async (
  input: GetRecoveryPointRestoreMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/restore-metadata");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  const query: any = map({
    [_bVAI]: [, input[_BVAI]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestoreJobMetadataCommand
 */
export const se_GetRestoreJobMetadataCommand = async (
  input: GetRestoreJobMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-jobs/{RestoreJobId}/metadata");
  b.p("RestoreJobId", () => input.RestoreJobId!, "{RestoreJobId}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestoreTestingInferredMetadataCommand
 */
export const se_GetRestoreTestingInferredMetadataCommand = async (
  input: GetRestoreTestingInferredMetadataCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/inferred-metadata");
  const query: any = map({
    [_BVAI]: [, input[_BVAI]!],
    [_BVN]: [, __expectNonNull(input[_BVN]!, `BackupVaultName`)],
    [_RPA]: [, __expectNonNull(input[_RPA]!, `RecoveryPointArn`)],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestoreTestingPlanCommand
 */
export const se_GetRestoreTestingPlanCommand = async (
  input: GetRestoreTestingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetRestoreTestingSelectionCommand
 */
export const se_GetRestoreTestingSelectionCommand = async (
  input: GetRestoreTestingSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  b.p("RestoreTestingSelectionName", () => input.RestoreTestingSelectionName!, "{RestoreTestingSelectionName}", false);
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1GetSupportedResourceTypesCommand
 */
export const se_GetSupportedResourceTypesCommand = async (
  input: GetSupportedResourceTypesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/supported-resource-types");
  let body: any;
  b.m("GET").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupJobsCommand
 */
export const se_ListBackupJobsCommand = async (
  input: ListBackupJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-jobs");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_rA]: [, input[_BRA]!],
    [_s]: [, input[_BS]!],
    [_bVN]: [, input[_BBVN]!],
    [_cB]: [() => input.ByCreatedBefore !== void 0, () => __serializeDateTime(input[_BCB]!).toString()],
    [_cA]: [() => input.ByCreatedAfter !== void 0, () => __serializeDateTime(input[_BCA]!).toString()],
    [_rT]: [, input[_BRT]!],
    [_aI]: [, input[_BAI]!],
    [_cAo]: [() => input.ByCompleteAfter !== void 0, () => __serializeDateTime(input[_BCAy]!).toString()],
    [_cBo]: [() => input.ByCompleteBefore !== void 0, () => __serializeDateTime(input[_BCBy]!).toString()],
    [_pJI]: [, input[_BPJI]!],
    [_mC]: [, input[_BMC]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupJobSummariesCommand
 */
export const se_ListBackupJobSummariesCommand = async (
  input: ListBackupJobSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/backup-job-summaries");
  const query: any = map({
    [_AI]: [, input[_AI]!],
    [_S]: [, input[_S]!],
    [_RT]: [, input[_RT]!],
    [_MC]: [, input[_MC]!],
    [_AP]: [, input[_AP]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupPlansCommand
 */
export const se_ListBackupPlansCommand = async (
  input: ListBackupPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_iD]: [() => input.IncludeDeleted !== void 0, () => input[_ID]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupPlanTemplatesCommand
 */
export const se_ListBackupPlanTemplatesCommand = async (
  input: ListBackupPlanTemplatesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/template/plans");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupPlanVersionsCommand
 */
export const se_ListBackupPlanVersionsCommand = async (
  input: ListBackupPlanVersionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}/versions");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupSelectionsCommand
 */
export const se_ListBackupSelectionsCommand = async (
  input: ListBackupSelectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup/plans/{BackupPlanId}/selections");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListBackupVaultsCommand
 */
export const se_ListBackupVaultsCommand = async (
  input: ListBackupVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults");
  const query: any = map({
    [_vT]: [, input[_BVT]!],
    [_sh]: [() => input.ByShared !== void 0, () => input[_BSy]!.toString()],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCopyJobsCommand
 */
export const se_ListCopyJobsCommand = async (
  input: ListCopyJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/copy-jobs");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_rA]: [, input[_BRA]!],
    [_s]: [, input[_BS]!],
    [_cB]: [() => input.ByCreatedBefore !== void 0, () => __serializeDateTime(input[_BCB]!).toString()],
    [_cA]: [() => input.ByCreatedAfter !== void 0, () => __serializeDateTime(input[_BCA]!).toString()],
    [_rT]: [, input[_BRT]!],
    [_dVA]: [, input[_BDVA]!],
    [_aI]: [, input[_BAI]!],
    [_cBo]: [() => input.ByCompleteBefore !== void 0, () => __serializeDateTime(input[_BCBy]!).toString()],
    [_cAo]: [() => input.ByCompleteAfter !== void 0, () => __serializeDateTime(input[_BCAy]!).toString()],
    [_pJI]: [, input[_BPJI]!],
    [_mC]: [, input[_BMC]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListCopyJobSummariesCommand
 */
export const se_ListCopyJobSummariesCommand = async (
  input: ListCopyJobSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/copy-job-summaries");
  const query: any = map({
    [_AI]: [, input[_AI]!],
    [_S]: [, input[_S]!],
    [_RT]: [, input[_RT]!],
    [_MC]: [, input[_MC]!],
    [_AP]: [, input[_AP]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListFrameworksCommand
 */
export const se_ListFrameworksCommand = async (
  input: ListFrameworksCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/frameworks");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListIndexedRecoveryPointsCommand
 */
export const se_ListIndexedRecoveryPointsCommand = async (
  input: ListIndexedRecoveryPointsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/indexes/recovery-point");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_sRA]: [, input[_SRA]!],
    [_cB]: [() => input.CreatedBefore !== void 0, () => __serializeDateTime(input[_CB]!).toString()],
    [_cA]: [() => input.CreatedAfter !== void 0, () => __serializeDateTime(input[_CA]!).toString()],
    [_rT]: [, input[_RT]!],
    [_iS]: [, input[_IS]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListLegalHoldsCommand
 */
export const se_ListLegalHoldsCommand = async (
  input: ListLegalHoldsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/legal-holds");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProtectedResourcesCommand
 */
export const se_ListProtectedResourcesCommand = async (
  input: ListProtectedResourcesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resources");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListProtectedResourcesByBackupVaultCommand
 */
export const se_ListProtectedResourcesByBackupVaultCommand = async (
  input: ListProtectedResourcesByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/resources");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  const query: any = map({
    [_bVAI]: [, input[_BVAI]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecoveryPointsByBackupVaultCommand
 */
export const se_ListRecoveryPointsByBackupVaultCommand = async (
  input: ListRecoveryPointsByBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  const query: any = map({
    [_bVAI]: [, input[_BVAI]!],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_rA]: [, input[_BRA]!],
    [_rT]: [, input[_BRT]!],
    [_bPI]: [, input[_BBPI]!],
    [_cB]: [() => input.ByCreatedBefore !== void 0, () => __serializeDateTime(input[_BCB]!).toString()],
    [_cA]: [() => input.ByCreatedAfter !== void 0, () => __serializeDateTime(input[_BCA]!).toString()],
    [_pRPA]: [, input[_BPRPA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecoveryPointsByLegalHoldCommand
 */
export const se_ListRecoveryPointsByLegalHoldCommand = async (
  input: ListRecoveryPointsByLegalHoldCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/legal-holds/{LegalHoldId}/recovery-points");
  b.p("LegalHoldId", () => input.LegalHoldId!, "{LegalHoldId}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRecoveryPointsByResourceCommand
 */
export const se_ListRecoveryPointsByResourceCommand = async (
  input: ListRecoveryPointsByResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resources/{ResourceArn}/recovery-points");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_mBAWSBO]: [() => input.ManagedByAWSBackupOnly !== void 0, () => input[_MBAWSBO]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListReportJobsCommand
 */
export const se_ListReportJobsCommand = async (
  input: ListReportJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/report-jobs");
  const query: any = map({
    [_RPN]: [, input[_BRPN]!],
    [_CBr]: [() => input.ByCreationBefore !== void 0, () => __serializeDateTime(input[_BCByr]!).toString()],
    [_CAr]: [() => input.ByCreationAfter !== void 0, () => __serializeDateTime(input[_BCAyr]!).toString()],
    [_St]: [, input[_BSyt]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListReportPlansCommand
 */
export const se_ListReportPlansCommand = async (
  input: ListReportPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/report-plans");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreAccessBackupVaultsCommand
 */
export const se_ListRestoreAccessBackupVaultsCommand = async (
  input: ListRestoreAccessBackupVaultsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreJobsCommand
 */
export const se_ListRestoreJobsCommand = async (
  input: ListRestoreJobsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-jobs");
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_aI]: [, input[_BAI]!],
    [_rT]: [, input[_BRT]!],
    [_cB]: [() => input.ByCreatedBefore !== void 0, () => __serializeDateTime(input[_BCB]!).toString()],
    [_cA]: [() => input.ByCreatedAfter !== void 0, () => __serializeDateTime(input[_BCA]!).toString()],
    [_st]: [, input[_BSyt]!],
    [_cBo]: [() => input.ByCompleteBefore !== void 0, () => __serializeDateTime(input[_BCBy]!).toString()],
    [_cAo]: [() => input.ByCompleteAfter !== void 0, () => __serializeDateTime(input[_BCAy]!).toString()],
    [_rTPA]: [, input[_BRTPA]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreJobsByProtectedResourceCommand
 */
export const se_ListRestoreJobsByProtectedResourceCommand = async (
  input: ListRestoreJobsByProtectedResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/resources/{ResourceArn}/restore-jobs");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_st]: [, input[_BSyt]!],
    [_rPCDA]: [
      () => input.ByRecoveryPointCreationDateAfter !== void 0,
      () => __serializeDateTime(input[_BRPCDA]!).toString(),
    ],
    [_rPCDB]: [
      () => input.ByRecoveryPointCreationDateBefore !== void 0,
      () => __serializeDateTime(input[_BRPCDB]!).toString(),
    ],
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreJobSummariesCommand
 */
export const se_ListRestoreJobSummariesCommand = async (
  input: ListRestoreJobSummariesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/audit/restore-job-summaries");
  const query: any = map({
    [_AI]: [, input[_AI]!],
    [_S]: [, input[_S]!],
    [_RT]: [, input[_RT]!],
    [_AP]: [, input[_AP]!],
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreTestingPlansCommand
 */
export const se_ListRestoreTestingPlansCommand = async (
  input: ListRestoreTestingPlansCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans");
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListRestoreTestingSelectionsCommand
 */
export const se_ListRestoreTestingSelectionsCommand = async (
  input: ListRestoreTestingSelectionsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}/selections");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  const query: any = map({
    [_MR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
    [_NT]: [, input[_NT]!],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1ListTagsCommand
 */
export const se_ListTagsCommand = async (
  input: ListTagsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  const query: any = map({
    [_nT]: [, input[_NT]!],
    [_mR]: [() => input.MaxResults !== void 0, () => input[_MR]!.toString()],
  });
  let body: any;
  b.m("GET").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutBackupVaultAccessPolicyCommand
 */
export const se_PutBackupVaultAccessPolicyCommand = async (
  input: PutBackupVaultAccessPolicyCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/access-policy");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Policy: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutBackupVaultLockConfigurationCommand
 */
export const se_PutBackupVaultLockConfigurationCommand = async (
  input: PutBackupVaultLockConfigurationCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/vault-lock");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ChangeableForDays: [],
      MaxRetentionDays: [],
      MinRetentionDays: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutBackupVaultNotificationsCommand
 */
export const se_PutBackupVaultNotificationsCommand = async (
  input: PutBackupVaultNotificationsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/notification-configuration");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupVaultEvents: (_) => _json(_),
      SNSTopicArn: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1PutRestoreValidationResultCommand
 */
export const se_PutRestoreValidationResultCommand = async (
  input: PutRestoreValidationResultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-jobs/{RestoreJobId}/validations");
  b.p("RestoreJobId", () => input.RestoreJobId!, "{RestoreJobId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      ValidationStatus: [],
      ValidationStatusMessage: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1RevokeRestoreAccessBackupVaultCommand
 */
export const se_RevokeRestoreAccessBackupVaultCommand = async (
  input: RevokeRestoreAccessBackupVaultCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp(
    "/logically-air-gapped-backup-vaults/{BackupVaultName}/restore-access-backup-vaults/{RestoreAccessBackupVaultArn}"
  );
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RestoreAccessBackupVaultArn", () => input.RestoreAccessBackupVaultArn!, "{RestoreAccessBackupVaultArn}", false);
  const query: any = map({
    [_rC]: [, input[_RC]!],
  });
  let body: any;
  b.m("DELETE").h(headers).q(query).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartBackupJobCommand
 */
export const se_StartBackupJobCommand = async (
  input: StartBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupOptions: (_) => _json(_),
      BackupVaultName: [],
      CompleteWindowMinutes: [],
      IamRoleArn: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Index: [],
      Lifecycle: (_) => _json(_),
      RecoveryPointTags: (_) => _json(_),
      ResourceArn: [],
      StartWindowMinutes: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartCopyJobCommand
 */
export const se_StartCopyJobCommand = async (
  input: StartCopyJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/copy-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      DestinationBackupVaultArn: [],
      IamRoleArn: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Lifecycle: (_) => _json(_),
      RecoveryPointArn: [],
      SourceBackupVaultName: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartReportJobCommand
 */
export const se_StartReportJobCommand = async (
  input: StartReportJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/report-jobs/{ReportPlanName}");
  b.p("ReportPlanName", () => input.ReportPlanName!, "{ReportPlanName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StartRestoreJobCommand
 */
export const se_StartRestoreJobCommand = async (
  input: StartRestoreJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-jobs");
  let body: any;
  body = JSON.stringify(
    take(input, {
      CopySourceTagsToRestoredResource: [],
      IamRoleArn: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      Metadata: (_) => _json(_),
      RecoveryPointArn: [],
      ResourceType: [],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1StopBackupJobCommand
 */
export const se_StopBackupJobCommand = async (
  input: StopBackupJobCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {};
  b.bp("/backup-jobs/{BackupJobId}");
  b.p("BackupJobId", () => input.BackupJobId!, "{BackupJobId}", false);
  let body: any;
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1TagResourceCommand
 */
export const se_TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/tags/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Tags: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UntagResourceCommand
 */
export const se_UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/untag/{ResourceArn}");
  b.p("ResourceArn", () => input.ResourceArn!, "{ResourceArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      TagKeyList: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateBackupPlanCommand
 */
export const se_UpdateBackupPlanCommand = async (
  input: UpdateBackupPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup/plans/{BackupPlanId}");
  b.p("BackupPlanId", () => input.BackupPlanId!, "{BackupPlanId}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      BackupPlan: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateFrameworkCommand
 */
export const se_UpdateFrameworkCommand = async (
  input: UpdateFrameworkCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/frameworks/{FrameworkName}");
  b.p("FrameworkName", () => input.FrameworkName!, "{FrameworkName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      FrameworkControls: (_) => _json(_),
      FrameworkDescription: [],
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const se_UpdateGlobalSettingsCommand = async (
  input: UpdateGlobalSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/global-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      GlobalSettings: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRecoveryPointIndexSettingsCommand
 */
export const se_UpdateRecoveryPointIndexSettingsCommand = async (
  input: UpdateRecoveryPointIndexSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}/index");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IamRoleArn: [],
      Index: [],
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRecoveryPointLifecycleCommand
 */
export const se_UpdateRecoveryPointLifecycleCommand = async (
  input: UpdateRecoveryPointLifecycleCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/backup-vaults/{BackupVaultName}/recovery-points/{RecoveryPointArn}");
  b.p("BackupVaultName", () => input.BackupVaultName!, "{BackupVaultName}", false);
  b.p("RecoveryPointArn", () => input.RecoveryPointArn!, "{RecoveryPointArn}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      Lifecycle: (_) => _json(_),
    })
  );
  b.m("POST").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRegionSettingsCommand
 */
export const se_UpdateRegionSettingsCommand = async (
  input: UpdateRegionSettingsCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/account-settings");
  let body: any;
  body = JSON.stringify(
    take(input, {
      ResourceTypeManagementPreference: (_) => _json(_),
      ResourceTypeOptInPreference: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateReportPlanCommand
 */
export const se_UpdateReportPlanCommand = async (
  input: UpdateReportPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/audit/report-plans/{ReportPlanName}");
  b.p("ReportPlanName", () => input.ReportPlanName!, "{ReportPlanName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      IdempotencyToken: [true, (_) => _ ?? generateIdempotencyToken()],
      ReportDeliveryChannel: (_) => _json(_),
      ReportPlanDescription: [],
      ReportSetting: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRestoreTestingPlanCommand
 */
export const se_UpdateRestoreTestingPlanCommand = async (
  input: UpdateRestoreTestingPlanCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RestoreTestingPlan: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * serializeAws_restJson1UpdateRestoreTestingSelectionCommand
 */
export const se_UpdateRestoreTestingSelectionCommand = async (
  input: UpdateRestoreTestingSelectionCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const b = rb(input, context);
  const headers: any = {
    "content-type": "application/json",
  };
  b.bp("/restore-testing/plans/{RestoreTestingPlanName}/selections/{RestoreTestingSelectionName}");
  b.p("RestoreTestingPlanName", () => input.RestoreTestingPlanName!, "{RestoreTestingPlanName}", false);
  b.p("RestoreTestingSelectionName", () => input.RestoreTestingSelectionName!, "{RestoreTestingSelectionName}", false);
  let body: any;
  body = JSON.stringify(
    take(input, {
      RestoreTestingSelection: (_) => _json(_),
    })
  );
  b.m("PUT").h(headers).b(body);
  return b.build();
};

/**
 * deserializeAws_restJson1AssociateBackupVaultMpaApprovalTeamCommand
 */
export const de_AssociateBackupVaultMpaApprovalTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<AssociateBackupVaultMpaApprovalTeamCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CancelLegalHoldCommand
 */
export const de_CancelLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CancelLegalHoldCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1CreateBackupPlanCommand
 */
export const de_CreateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateBackupSelectionCommand
 */
export const de_CreateBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateBackupVaultCommand
 */
export const de_CreateBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateFrameworkCommand
 */
export const de_CreateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateLegalHoldCommand
 */
export const de_CreateLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateLogicallyAirGappedBackupVaultCommand
 */
export const de_CreateLogicallyAirGappedBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateLogicallyAirGappedBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateReportPlanCommand
 */
export const de_CreateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1CreateRestoreAccessBackupVaultCommand
 */
export const de_CreateRestoreAccessBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestoreAccessBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreAccessBackupVaultArn: __expectString,
    RestoreAccessBackupVaultName: __expectString,
    VaultState: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRestoreTestingPlanCommand
 */
export const de_CreateRestoreTestingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestoreTestingPlanCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1CreateRestoreTestingSelectionCommand
 */
export const de_CreateRestoreTestingSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRestoreTestingSelectionCommandOutput> => {
  if (output.statusCode !== 201 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
    RestoreTestingSelectionName: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupPlanCommand
 */
export const de_DeleteBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DeleteBackupSelectionCommand
 */
export const de_DeleteBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultCommand
 */
export const de_DeleteBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultAccessPolicyCommand
 */
export const de_DeleteBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultLockConfigurationCommand
 */
export const de_DeleteBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteBackupVaultNotificationsCommand
 */
export const de_DeleteBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteFrameworkCommand
 */
export const de_DeleteFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRecoveryPointCommand
 */
export const de_DeleteRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteReportPlanCommand
 */
export const de_DeleteReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRestoreTestingPlanCommand
 */
export const de_DeleteRestoreTestingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRestoreTestingPlanCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DeleteRestoreTestingSelectionCommand
 */
export const de_DeleteRestoreTestingSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRestoreTestingSelectionCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeBackupJobCommand
 */
export const de_DescribeBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    InitiationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsParent: __expectBoolean,
    MessageCategory: __expectString,
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
 * deserializeAws_restJson1DescribeBackupVaultCommand
 */
export const de_DescribeBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    LatestMpaApprovalTeamUpdate: (_) => de_LatestMpaApprovalTeamUpdate(_, context),
    LockDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Locked: __expectBoolean,
    MaxRetentionDays: __expectLong,
    MinRetentionDays: __expectLong,
    MpaApprovalTeamArn: __expectString,
    MpaSessionArn: __expectString,
    NumberOfRecoveryPoints: __expectLong,
    SourceBackupVaultArn: __expectString,
    VaultState: __expectString,
    VaultType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeCopyJobCommand
 */
export const de_DescribeCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeFrameworkCommand
 */
export const de_DescribeFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeGlobalSettingsCommand
 */
export const de_DescribeGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeProtectedResourceCommand
 */
export const de_DescribeProtectedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeProtectedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    LastBackupTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastBackupVaultArn: __expectString,
    LastRecoveryPointArn: __expectString,
    LatestRestoreExecutionTimeMinutes: __expectLong,
    LatestRestoreJobCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestRestoreRecoveryPointCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRecoveryPointCommand
 */
export const de_DescribeRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
    IndexStatus: __expectString,
    IndexStatusMessage: __expectString,
    InitiationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
    VaultType: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DescribeRegionSettingsCommand
 */
export const de_DescribeRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeReportJobCommand
 */
export const de_DescribeReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeReportPlanCommand
 */
export const de_DescribeReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1DescribeRestoreJobCommand
 */
export const de_DescribeRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AccountId: __expectString,
    BackupSizeInBytes: __expectLong,
    CompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatedBy: _json,
    CreatedResourceArn: __expectString,
    CreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionStatus: __expectString,
    DeletionStatusMessage: __expectString,
    ExpectedCompletionTimeMinutes: __expectLong,
    IamRoleArn: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    RecoveryPointCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceType: __expectString,
    RestoreJobId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    ValidationStatus: __expectString,
    ValidationStatusMessage: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateBackupVaultMpaApprovalTeamCommand
 */
export const de_DisassociateBackupVaultMpaApprovalTeamCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateBackupVaultMpaApprovalTeamCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRecoveryPointCommand
 */
export const de_DisassociateRecoveryPointCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1DisassociateRecoveryPointFromParentCommand
 */
export const de_DisassociateRecoveryPointFromParentCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DisassociateRecoveryPointFromParentCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1ExportBackupPlanTemplateCommand
 */
export const de_ExportBackupPlanTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ExportBackupPlanTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupPlanCommand
 */
export const de_GetBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupPlanFromJSONCommand
 */
export const de_GetBackupPlanFromJSONCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromJSONCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupPlanFromTemplateCommand
 */
export const de_GetBackupPlanFromTemplateCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupPlanFromTemplateCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupSelectionCommand
 */
export const de_GetBackupSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupVaultAccessPolicyCommand
 */
export const de_GetBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetBackupVaultNotificationsCommand
 */
export const de_GetBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetLegalHoldCommand
 */
export const de_GetLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1GetRecoveryPointIndexDetailsCommand
 */
export const de_GetRecoveryPointIndexDetailsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointIndexDetailsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    IndexCompletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IndexCreationDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IndexDeletionDate: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IndexStatus: __expectString,
    IndexStatusMessage: __expectString,
    RecoveryPointArn: __expectString,
    SourceResourceArn: __expectString,
    TotalItemsIndexed: __expectLong,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRecoveryPointRestoreMetadataCommand
 */
export const de_GetRecoveryPointRestoreMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRecoveryPointRestoreMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultArn: __expectString,
    RecoveryPointArn: __expectString,
    ResourceType: __expectString,
    RestoreMetadata: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestoreJobMetadataCommand
 */
export const de_GetRestoreJobMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestoreJobMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    Metadata: _json,
    RestoreJobId: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestoreTestingInferredMetadataCommand
 */
export const de_GetRestoreTestingInferredMetadataCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestoreTestingInferredMetadataCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    InferredMetadata: _json,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestoreTestingPlanCommand
 */
export const de_GetRestoreTestingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestoreTestingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RestoreTestingPlan: (_) => de_RestoreTestingPlanForGet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetRestoreTestingSelectionCommand
 */
export const de_GetRestoreTestingSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetRestoreTestingSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    RestoreTestingSelection: (_) => de_RestoreTestingSelectionForGet(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1GetSupportedResourceTypesCommand
 */
export const de_GetSupportedResourceTypesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<GetSupportedResourceTypesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupJobsCommand
 */
export const de_ListBackupJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupJobSummariesCommand
 */
export const de_ListBackupJobSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupJobSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AggregationPeriod: __expectString,
    BackupJobSummaries: (_) => de_BackupJobSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListBackupPlansCommand
 */
export const de_ListBackupPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupPlanTemplatesCommand
 */
export const de_ListBackupPlanTemplatesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanTemplatesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupPlanVersionsCommand
 */
export const de_ListBackupPlanVersionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupPlanVersionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupSelectionsCommand
 */
export const de_ListBackupSelectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupSelectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListBackupVaultsCommand
 */
export const de_ListBackupVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListBackupVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListCopyJobsCommand
 */
export const de_ListCopyJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListCopyJobSummariesCommand
 */
export const de_ListCopyJobSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListCopyJobSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AggregationPeriod: __expectString,
    CopyJobSummaries: (_) => de_CopyJobSummaryList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListFrameworksCommand
 */
export const de_ListFrameworksCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListFrameworksCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListIndexedRecoveryPointsCommand
 */
export const de_ListIndexedRecoveryPointsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListIndexedRecoveryPointsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    IndexedRecoveryPoints: (_) => de_IndexedRecoveryPointList(_, context),
    NextToken: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListLegalHoldsCommand
 */
export const de_ListLegalHoldsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListLegalHoldsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListProtectedResourcesCommand
 */
export const de_ListProtectedResourcesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListProtectedResourcesByBackupVaultCommand
 */
export const de_ListProtectedResourcesByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListProtectedResourcesByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRecoveryPointsByBackupVaultCommand
 */
export const de_ListRecoveryPointsByBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRecoveryPointsByLegalHoldCommand
 */
export const de_ListRecoveryPointsByLegalHoldCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByLegalHoldCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRecoveryPointsByResourceCommand
 */
export const de_ListRecoveryPointsByResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRecoveryPointsByResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListReportJobsCommand
 */
export const de_ListReportJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListReportPlansCommand
 */
export const de_ListReportPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListReportPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRestoreAccessBackupVaultsCommand
 */
export const de_ListRestoreAccessBackupVaultsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreAccessBackupVaultsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RestoreAccessBackupVaults: (_) => de_RestoreAccessBackupVaultList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRestoreJobsCommand
 */
export const de_ListRestoreJobsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRestoreJobsByProtectedResourceCommand
 */
export const de_ListRestoreJobsByProtectedResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobsByProtectedResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1ListRestoreJobSummariesCommand
 */
export const de_ListRestoreJobSummariesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreJobSummariesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    AggregationPeriod: __expectString,
    NextToken: __expectString,
    RestoreJobSummaries: (_) => de_RestoreJobSummaryList(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRestoreTestingPlansCommand
 */
export const de_ListRestoreTestingPlansCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreTestingPlansCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RestoreTestingPlans: (_) => de_RestoreTestingPlans(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListRestoreTestingSelectionsCommand
 */
export const de_ListRestoreTestingSelectionsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRestoreTestingSelectionsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    NextToken: __expectString,
    RestoreTestingSelections: (_) => de_RestoreTestingSelections(_, context),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1ListTagsCommand
 */
export const de_ListTagsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1PutBackupVaultAccessPolicyCommand
 */
export const de_PutBackupVaultAccessPolicyCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultAccessPolicyCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupVaultLockConfigurationCommand
 */
export const de_PutBackupVaultLockConfigurationCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultLockConfigurationCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutBackupVaultNotificationsCommand
 */
export const de_PutBackupVaultNotificationsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutBackupVaultNotificationsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1PutRestoreValidationResultCommand
 */
export const de_PutRestoreValidationResultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<PutRestoreValidationResultCommandOutput> => {
  if (output.statusCode !== 204 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1RevokeRestoreAccessBackupVaultCommand
 */
export const de_RevokeRestoreAccessBackupVaultCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<RevokeRestoreAccessBackupVaultCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1StartBackupJobCommand
 */
export const de_StartBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartCopyJobCommand
 */
export const de_StartCopyJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartCopyJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartReportJobCommand
 */
export const de_StartReportJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartReportJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StartRestoreJobCommand
 */
export const de_StartRestoreJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StartRestoreJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1StopBackupJobCommand
 */
export const de_StopBackupJobCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<StopBackupJobCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1TagResourceCommand
 */
export const de_TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UntagResourceCommand
 */
export const de_UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateBackupPlanCommand
 */
export const de_UpdateBackupPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateBackupPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateFrameworkCommand
 */
export const de_UpdateFrameworkCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateFrameworkCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateGlobalSettingsCommand
 */
export const de_UpdateGlobalSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateGlobalSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecoveryPointIndexSettingsCommand
 */
export const de_UpdateRecoveryPointIndexSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointIndexSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    BackupVaultName: __expectString,
    Index: __expectString,
    IndexStatus: __expectString,
    RecoveryPointArn: __expectString,
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRecoveryPointLifecycleCommand
 */
export const de_UpdateRecoveryPointLifecycleCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRecoveryPointLifecycleCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateRegionSettingsCommand
 */
export const de_UpdateRegionSettingsCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRegionSettingsCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  await collectBody(output.body, context);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateReportPlanCommand
 */
export const de_UpdateReportPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateReportPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
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
 * deserializeAws_restJson1UpdateRestoreTestingPlanCommand
 */
export const de_UpdateRestoreTestingPlanCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRestoreTestingPlanCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserializeAws_restJson1UpdateRestoreTestingSelectionCommand
 */
export const de_UpdateRestoreTestingSelectionCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRestoreTestingSelectionCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 300) {
    return de_CommandError(output, context);
  }
  const contents: any = map({
    $metadata: deserializeMetadata(output),
  });
  const data: Record<string, any> = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
  const doc = take(data, {
    CreationTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
    RestoreTestingSelectionName: __expectString,
    UpdateTime: (_) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
  });
  Object.assign(contents, doc);
  return contents;
};

/**
 * deserialize_Aws_restJson1CommandError
 */
const de_CommandError = async (output: __HttpResponse, context: __SerdeContext): Promise<never> => {
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
    case "InvalidResourceStateException":
    case "com.amazonaws.backup#InvalidResourceStateException":
      throw await de_InvalidResourceStateExceptionRes(parsedOutput, context);
    case "AlreadyExistsException":
    case "com.amazonaws.backup#AlreadyExistsException":
      throw await de_AlreadyExistsExceptionRes(parsedOutput, context);
    case "LimitExceededException":
    case "com.amazonaws.backup#LimitExceededException":
      throw await de_LimitExceededExceptionRes(parsedOutput, context);
    case "ConflictException":
    case "com.amazonaws.backup#ConflictException":
      throw await de_ConflictExceptionRes(parsedOutput, context);
    case "DependencyFailureException":
    case "com.amazonaws.backup#DependencyFailureException":
      throw await de_DependencyFailureExceptionRes(parsedOutput, context);
    default:
      const parsedBody = parsedOutput.body;
      return throwDefaultError({
        output,
        parsedBody,
        errorCode,
      }) as never;
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
    FromDate: (_) => _.getTime() / 1_000,
    ToDate: (_) => _.getTime() / 1_000,
  });
};

// se_FormatList omitted.

// se_FrameworkControl omitted.

// se_FrameworkControls omitted.

// se_GlobalSettings omitted.

// se_IndexAction omitted.

// se_IndexActions omitted.

// se_KeyValue omitted.

// se_KeyValueList omitted.

// se_Lifecycle omitted.

// se_ListOfTags omitted.

// se_Metadata omitted.

// se_ProtectedResourceConditions omitted.

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

// se_ResourceTypes omitted.

// se_RestoreTestingPlanForCreate omitted.

// se_RestoreTestingPlanForUpdate omitted.

// se_RestoreTestingRecoveryPointSelection omitted.

// se_RestoreTestingRecoveryPointTypeList omitted.

// se_RestoreTestingSelectionForCreate omitted.

// se_RestoreTestingSelectionForUpdate omitted.

// se_SensitiveStringMap omitted.

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
    InitiationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IsParent: __expectBoolean,
    MessageCategory: __expectString,
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

/**
 * deserializeAws_restJson1BackupJobSummary
 */
const de_BackupJobSummary = (output: any, context: __SerdeContext): BackupJobSummary => {
  return take(output, {
    AccountId: __expectString,
    Count: __expectInt32,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageCategory: __expectString,
    Region: __expectString,
    ResourceType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1BackupJobSummaryList
 */
const de_BackupJobSummaryList = (output: any, context: __SerdeContext): BackupJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_BackupJobSummary(entry, context);
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
    VaultState: __expectString,
    VaultType: __expectString,
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
    MessageCategory: __expectString,
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
 * deserializeAws_restJson1CopyJobSummary
 */
const de_CopyJobSummary = (output: any, context: __SerdeContext): CopyJobSummary => {
  return take(output, {
    AccountId: __expectString,
    Count: __expectInt32,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MessageCategory: __expectString,
    Region: __expectString,
    ResourceType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1CopyJobSummaryList
 */
const de_CopyJobSummaryList = (output: any, context: __SerdeContext): CopyJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_CopyJobSummary(entry, context);
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

// de_IndexAction omitted.

// de_IndexActions omitted.

/**
 * deserializeAws_restJson1IndexedRecoveryPoint
 */
const de_IndexedRecoveryPoint = (output: any, context: __SerdeContext): IndexedRecoveryPoint => {
  return take(output, {
    BackupCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    BackupVaultArn: __expectString,
    IamRoleArn: __expectString,
    IndexCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IndexStatus: __expectString,
    IndexStatusMessage: __expectString,
    RecoveryPointArn: __expectString,
    ResourceType: __expectString,
    SourceResourceArn: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1IndexedRecoveryPointList
 */
const de_IndexedRecoveryPointList = (output: any, context: __SerdeContext): IndexedRecoveryPoint[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_IndexedRecoveryPoint(entry, context);
    });
  return retVal;
};

// de_KeyValue omitted.

// de_KeyValueList omitted.

/**
 * deserializeAws_restJson1LatestMpaApprovalTeamUpdate
 */
const de_LatestMpaApprovalTeamUpdate = (output: any, context: __SerdeContext): LatestMpaApprovalTeamUpdate => {
  return take(output, {
    ExpiryDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InitiationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MpaSessionArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1LatestRevokeRequest
 */
const de_LatestRevokeRequest = (output: any, context: __SerdeContext): LatestRevokeRequest => {
  return take(output, {
    ExpiryDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    InitiationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    MpaSessionArn: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
  }) as any;
};

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
    LastBackupVaultArn: __expectString,
    LastRecoveryPointArn: __expectString,
    ResourceArn: __expectString,
    ResourceName: __expectString,
    ResourceType: __expectString,
  }) as any;
};

// de_ProtectedResourceConditions omitted.

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
    IndexStatus: __expectString,
    IndexStatusMessage: __expectString,
    InitiationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
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
    VaultType: __expectString,
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
    IndexStatus: __expectString,
    IndexStatusMessage: __expectString,
    IsParent: __expectBoolean,
    ParentRecoveryPointArn: __expectString,
    RecoveryPointArn: __expectString,
    ResourceName: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    VaultType: __expectString,
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
 * deserializeAws_restJson1RestoreAccessBackupVaultList
 */
const de_RestoreAccessBackupVaultList = (
  output: any,
  context: __SerdeContext
): RestoreAccessBackupVaultListMember[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestoreAccessBackupVaultListMember(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RestoreAccessBackupVaultListMember
 */
const de_RestoreAccessBackupVaultListMember = (
  output: any,
  context: __SerdeContext
): RestoreAccessBackupVaultListMember => {
  return take(output, {
    ApprovalDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LatestRevokeRequest: (_: any) => de_LatestRevokeRequest(_, context),
    RestoreAccessBackupVaultArn: __expectString,
    VaultState: __expectString,
  }) as any;
};

// de_RestoreJobCreator omitted.

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
    CreatedBy: _json,
    CreatedResourceArn: __expectString,
    CreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    DeletionStatus: __expectString,
    DeletionStatusMessage: __expectString,
    ExpectedCompletionTimeMinutes: __expectLong,
    IamRoleArn: __expectString,
    PercentDone: __expectString,
    RecoveryPointArn: __expectString,
    RecoveryPointCreationDate: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    ResourceType: __expectString,
    RestoreJobId: __expectString,
    Status: __expectString,
    StatusMessage: __expectString,
    ValidationStatus: __expectString,
    ValidationStatusMessage: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreJobSummary
 */
const de_RestoreJobSummary = (output: any, context: __SerdeContext): RestoreJobSummary => {
  return take(output, {
    AccountId: __expectString,
    Count: __expectInt32,
    EndTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    Region: __expectString,
    ResourceType: __expectString,
    StartTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    State: __expectString,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreJobSummaryList
 */
const de_RestoreJobSummaryList = (output: any, context: __SerdeContext): RestoreJobSummary[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestoreJobSummary(entry, context);
    });
  return retVal;
};

/**
 * deserializeAws_restJson1RestoreTestingPlanForGet
 */
const de_RestoreTestingPlanForGet = (output: any, context: __SerdeContext): RestoreTestingPlanForGet => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    LastExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RecoveryPointSelection: _json,
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
    ScheduleExpression: __expectString,
    ScheduleExpressionTimezone: __expectString,
    StartWindowHours: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreTestingPlanForList
 */
const de_RestoreTestingPlanForList = (output: any, context: __SerdeContext): RestoreTestingPlanForList => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastExecutionTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    LastUpdateTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    RestoreTestingPlanArn: __expectString,
    RestoreTestingPlanName: __expectString,
    ScheduleExpression: __expectString,
    ScheduleExpressionTimezone: __expectString,
    StartWindowHours: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreTestingPlans
 */
const de_RestoreTestingPlans = (output: any, context: __SerdeContext): RestoreTestingPlanForList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestoreTestingPlanForList(entry, context);
    });
  return retVal;
};

// de_RestoreTestingRecoveryPointSelection omitted.

// de_RestoreTestingRecoveryPointTypeList omitted.

/**
 * deserializeAws_restJson1RestoreTestingSelectionForGet
 */
const de_RestoreTestingSelectionForGet = (output: any, context: __SerdeContext): RestoreTestingSelectionForGet => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    CreatorRequestId: __expectString,
    IamRoleArn: __expectString,
    ProtectedResourceArns: _json,
    ProtectedResourceConditions: _json,
    ProtectedResourceType: __expectString,
    RestoreMetadataOverrides: _json,
    RestoreTestingPlanName: __expectString,
    RestoreTestingSelectionName: __expectString,
    ValidationWindowHours: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreTestingSelectionForList
 */
const de_RestoreTestingSelectionForList = (output: any, context: __SerdeContext): RestoreTestingSelectionForList => {
  return take(output, {
    CreationTime: (_: any) => __expectNonNull(__parseEpochTimestamp(__expectNumber(_))),
    IamRoleArn: __expectString,
    ProtectedResourceType: __expectString,
    RestoreTestingPlanName: __expectString,
    RestoreTestingSelectionName: __expectString,
    ValidationWindowHours: __expectInt32,
  }) as any;
};

/**
 * deserializeAws_restJson1RestoreTestingSelections
 */
const de_RestoreTestingSelections = (output: any, context: __SerdeContext): RestoreTestingSelectionForList[] => {
  const retVal = (output || [])
    .filter((e: any) => e != null)
    .map((entry: any) => {
      return de_RestoreTestingSelectionForList(entry, context);
    });
  return retVal;
};

// de_SensitiveStringMap omitted.

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

const _AI = "AccountId";
const _AP = "AggregationPeriod";
const _BAI = "ByAccountId";
const _BBPI = "ByBackupPlanId";
const _BBVN = "ByBackupVaultName";
const _BCA = "ByCreatedAfter";
const _BCAy = "ByCompleteAfter";
const _BCAyr = "ByCreationAfter";
const _BCB = "ByCreatedBefore";
const _BCBy = "ByCompleteBefore";
const _BCByr = "ByCreationBefore";
const _BDVA = "ByDestinationVaultArn";
const _BMC = "ByMessageCategory";
const _BPJI = "ByParentJobId";
const _BPRPA = "ByParentRecoveryPointArn";
const _BRA = "ByResourceArn";
const _BRPCDA = "ByRecoveryPointCreationDateAfter";
const _BRPCDB = "ByRecoveryPointCreationDateBefore";
const _BRPN = "ByReportPlanName";
const _BRT = "ByResourceType";
const _BRTPA = "ByRestoreTestingPlanArn";
const _BS = "ByState";
const _BSy = "ByShared";
const _BSyt = "ByStatus";
const _BVAI = "BackupVaultAccountId";
const _BVN = "BackupVaultName";
const _BVT = "ByVaultType";
const _CA = "CreatedAfter";
const _CAr = "CreationAfter";
const _CB = "CreatedBefore";
const _CBr = "CreationBefore";
const _CD = "CancelDescription";
const _ID = "IncludeDeleted";
const _IS = "IndexStatus";
const _MBAWSBO = "ManagedByAWSBackupOnly";
const _MC = "MessageCategory";
const _MR = "MaxResults";
const _NT = "NextToken";
const _RC = "RequesterComment";
const _RPA = "RecoveryPointArn";
const _RPN = "ReportPlanName";
const _RRID = "RetainRecordInDays";
const _RT = "ResourceType";
const _S = "State";
const _SRA = "SourceResourceArn";
const _St = "Status";
const _VI = "VersionId";
const _aI = "accountId";
const _bPI = "backupPlanId";
const _bVAI = "backupVaultAccountId";
const _bVN = "backupVaultName";
const _cA = "createdAfter";
const _cAo = "completeAfter";
const _cB = "createdBefore";
const _cBo = "completeBefore";
const _cD = "cancelDescription";
const _d = "delete";
const _dVA = "destinationVaultArn";
const _iD = "includeDeleted";
const _iS = "indexStatus";
const _mBAWSBO = "managedByAWSBackupOnly";
const _mC = "messageCategory";
const _mR = "maxResults";
const _nT = "nextToken";
const _pJI = "parentJobId";
const _pRPA = "parentRecoveryPointArn";
const _rA = "resourceArn";
const _rC = "requesterComment";
const _rPCDA = "recoveryPointCreationDateAfter";
const _rPCDB = "recoveryPointCreationDateBefore";
const _rRID = "retainRecordInDays";
const _rT = "resourceType";
const _rTPA = "restoreTestingPlanArn";
const _s = "state";
const _sRA = "sourceResourceArn";
const _sh = "shared";
const _st = "status";
const _vI = "versionId";
const _vT = "vaultType";
