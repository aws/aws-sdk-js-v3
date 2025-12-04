// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { BackupClient } from "./BackupClient";
import {
  AssociateBackupVaultMpaApprovalTeamCommand,
  AssociateBackupVaultMpaApprovalTeamCommandInput,
  AssociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/AssociateBackupVaultMpaApprovalTeamCommand";
import {
  CancelLegalHoldCommand,
  CancelLegalHoldCommandInput,
  CancelLegalHoldCommandOutput,
} from "./commands/CancelLegalHoldCommand";
import {
  CreateBackupPlanCommand,
  CreateBackupPlanCommandInput,
  CreateBackupPlanCommandOutput,
} from "./commands/CreateBackupPlanCommand";
import {
  CreateBackupSelectionCommand,
  CreateBackupSelectionCommandInput,
  CreateBackupSelectionCommandOutput,
} from "./commands/CreateBackupSelectionCommand";
import {
  CreateBackupVaultCommand,
  CreateBackupVaultCommandInput,
  CreateBackupVaultCommandOutput,
} from "./commands/CreateBackupVaultCommand";
import {
  CreateFrameworkCommand,
  CreateFrameworkCommandInput,
  CreateFrameworkCommandOutput,
} from "./commands/CreateFrameworkCommand";
import {
  CreateLegalHoldCommand,
  CreateLegalHoldCommandInput,
  CreateLegalHoldCommandOutput,
} from "./commands/CreateLegalHoldCommand";
import {
  CreateLogicallyAirGappedBackupVaultCommand,
  CreateLogicallyAirGappedBackupVaultCommandInput,
  CreateLogicallyAirGappedBackupVaultCommandOutput,
} from "./commands/CreateLogicallyAirGappedBackupVaultCommand";
import {
  CreateReportPlanCommand,
  CreateReportPlanCommandInput,
  CreateReportPlanCommandOutput,
} from "./commands/CreateReportPlanCommand";
import {
  CreateRestoreAccessBackupVaultCommand,
  CreateRestoreAccessBackupVaultCommandInput,
  CreateRestoreAccessBackupVaultCommandOutput,
} from "./commands/CreateRestoreAccessBackupVaultCommand";
import {
  CreateRestoreTestingPlanCommand,
  CreateRestoreTestingPlanCommandInput,
  CreateRestoreTestingPlanCommandOutput,
} from "./commands/CreateRestoreTestingPlanCommand";
import {
  CreateRestoreTestingSelectionCommand,
  CreateRestoreTestingSelectionCommandInput,
  CreateRestoreTestingSelectionCommandOutput,
} from "./commands/CreateRestoreTestingSelectionCommand";
import {
  CreateTieringConfigurationCommand,
  CreateTieringConfigurationCommandInput,
  CreateTieringConfigurationCommandOutput,
} from "./commands/CreateTieringConfigurationCommand";
import {
  DeleteBackupPlanCommand,
  DeleteBackupPlanCommandInput,
  DeleteBackupPlanCommandOutput,
} from "./commands/DeleteBackupPlanCommand";
import {
  DeleteBackupSelectionCommand,
  DeleteBackupSelectionCommandInput,
  DeleteBackupSelectionCommandOutput,
} from "./commands/DeleteBackupSelectionCommand";
import {
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultAccessPolicyCommandInput,
  DeleteBackupVaultAccessPolicyCommandOutput,
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import {
  DeleteBackupVaultCommand,
  DeleteBackupVaultCommandInput,
  DeleteBackupVaultCommandOutput,
} from "./commands/DeleteBackupVaultCommand";
import {
  DeleteBackupVaultLockConfigurationCommand,
  DeleteBackupVaultLockConfigurationCommandInput,
  DeleteBackupVaultLockConfigurationCommandOutput,
} from "./commands/DeleteBackupVaultLockConfigurationCommand";
import {
  DeleteBackupVaultNotificationsCommand,
  DeleteBackupVaultNotificationsCommandInput,
  DeleteBackupVaultNotificationsCommandOutput,
} from "./commands/DeleteBackupVaultNotificationsCommand";
import {
  DeleteFrameworkCommand,
  DeleteFrameworkCommandInput,
  DeleteFrameworkCommandOutput,
} from "./commands/DeleteFrameworkCommand";
import {
  DeleteRecoveryPointCommand,
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
} from "./commands/DeleteRecoveryPointCommand";
import {
  DeleteReportPlanCommand,
  DeleteReportPlanCommandInput,
  DeleteReportPlanCommandOutput,
} from "./commands/DeleteReportPlanCommand";
import {
  DeleteRestoreTestingPlanCommand,
  DeleteRestoreTestingPlanCommandInput,
  DeleteRestoreTestingPlanCommandOutput,
} from "./commands/DeleteRestoreTestingPlanCommand";
import {
  DeleteRestoreTestingSelectionCommand,
  DeleteRestoreTestingSelectionCommandInput,
  DeleteRestoreTestingSelectionCommandOutput,
} from "./commands/DeleteRestoreTestingSelectionCommand";
import {
  DeleteTieringConfigurationCommand,
  DeleteTieringConfigurationCommandInput,
  DeleteTieringConfigurationCommandOutput,
} from "./commands/DeleteTieringConfigurationCommand";
import {
  DescribeBackupJobCommand,
  DescribeBackupJobCommandInput,
  DescribeBackupJobCommandOutput,
} from "./commands/DescribeBackupJobCommand";
import {
  DescribeBackupVaultCommand,
  DescribeBackupVaultCommandInput,
  DescribeBackupVaultCommandOutput,
} from "./commands/DescribeBackupVaultCommand";
import {
  DescribeCopyJobCommand,
  DescribeCopyJobCommandInput,
  DescribeCopyJobCommandOutput,
} from "./commands/DescribeCopyJobCommand";
import {
  DescribeFrameworkCommand,
  DescribeFrameworkCommandInput,
  DescribeFrameworkCommandOutput,
} from "./commands/DescribeFrameworkCommand";
import {
  DescribeGlobalSettingsCommand,
  DescribeGlobalSettingsCommandInput,
  DescribeGlobalSettingsCommandOutput,
} from "./commands/DescribeGlobalSettingsCommand";
import {
  DescribeProtectedResourceCommand,
  DescribeProtectedResourceCommandInput,
  DescribeProtectedResourceCommandOutput,
} from "./commands/DescribeProtectedResourceCommand";
import {
  DescribeRecoveryPointCommand,
  DescribeRecoveryPointCommandInput,
  DescribeRecoveryPointCommandOutput,
} from "./commands/DescribeRecoveryPointCommand";
import {
  DescribeRegionSettingsCommand,
  DescribeRegionSettingsCommandInput,
  DescribeRegionSettingsCommandOutput,
} from "./commands/DescribeRegionSettingsCommand";
import {
  DescribeReportJobCommand,
  DescribeReportJobCommandInput,
  DescribeReportJobCommandOutput,
} from "./commands/DescribeReportJobCommand";
import {
  DescribeReportPlanCommand,
  DescribeReportPlanCommandInput,
  DescribeReportPlanCommandOutput,
} from "./commands/DescribeReportPlanCommand";
import {
  DescribeRestoreJobCommand,
  DescribeRestoreJobCommandInput,
  DescribeRestoreJobCommandOutput,
} from "./commands/DescribeRestoreJobCommand";
import {
  DescribeScanJobCommand,
  DescribeScanJobCommandInput,
  DescribeScanJobCommandOutput,
} from "./commands/DescribeScanJobCommand";
import {
  DisassociateBackupVaultMpaApprovalTeamCommand,
  DisassociateBackupVaultMpaApprovalTeamCommandInput,
  DisassociateBackupVaultMpaApprovalTeamCommandOutput,
} from "./commands/DisassociateBackupVaultMpaApprovalTeamCommand";
import {
  DisassociateRecoveryPointCommand,
  DisassociateRecoveryPointCommandInput,
  DisassociateRecoveryPointCommandOutput,
} from "./commands/DisassociateRecoveryPointCommand";
import {
  DisassociateRecoveryPointFromParentCommand,
  DisassociateRecoveryPointFromParentCommandInput,
  DisassociateRecoveryPointFromParentCommandOutput,
} from "./commands/DisassociateRecoveryPointFromParentCommand";
import {
  ExportBackupPlanTemplateCommand,
  ExportBackupPlanTemplateCommandInput,
  ExportBackupPlanTemplateCommandOutput,
} from "./commands/ExportBackupPlanTemplateCommand";
import {
  GetBackupPlanCommand,
  GetBackupPlanCommandInput,
  GetBackupPlanCommandOutput,
} from "./commands/GetBackupPlanCommand";
import {
  GetBackupPlanFromJSONCommand,
  GetBackupPlanFromJSONCommandInput,
  GetBackupPlanFromJSONCommandOutput,
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  GetBackupPlanFromTemplateCommand,
  GetBackupPlanFromTemplateCommandInput,
  GetBackupPlanFromTemplateCommandOutput,
} from "./commands/GetBackupPlanFromTemplateCommand";
import {
  GetBackupSelectionCommand,
  GetBackupSelectionCommandInput,
  GetBackupSelectionCommandOutput,
} from "./commands/GetBackupSelectionCommand";
import {
  GetBackupVaultAccessPolicyCommand,
  GetBackupVaultAccessPolicyCommandInput,
  GetBackupVaultAccessPolicyCommandOutput,
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  GetBackupVaultNotificationsCommand,
  GetBackupVaultNotificationsCommandInput,
  GetBackupVaultNotificationsCommandOutput,
} from "./commands/GetBackupVaultNotificationsCommand";
import {
  GetLegalHoldCommand,
  GetLegalHoldCommandInput,
  GetLegalHoldCommandOutput,
} from "./commands/GetLegalHoldCommand";
import {
  GetRecoveryPointIndexDetailsCommand,
  GetRecoveryPointIndexDetailsCommandInput,
  GetRecoveryPointIndexDetailsCommandOutput,
} from "./commands/GetRecoveryPointIndexDetailsCommand";
import {
  GetRecoveryPointRestoreMetadataCommand,
  GetRecoveryPointRestoreMetadataCommandInput,
  GetRecoveryPointRestoreMetadataCommandOutput,
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  GetRestoreJobMetadataCommand,
  GetRestoreJobMetadataCommandInput,
  GetRestoreJobMetadataCommandOutput,
} from "./commands/GetRestoreJobMetadataCommand";
import {
  GetRestoreTestingInferredMetadataCommand,
  GetRestoreTestingInferredMetadataCommandInput,
  GetRestoreTestingInferredMetadataCommandOutput,
} from "./commands/GetRestoreTestingInferredMetadataCommand";
import {
  GetRestoreTestingPlanCommand,
  GetRestoreTestingPlanCommandInput,
  GetRestoreTestingPlanCommandOutput,
} from "./commands/GetRestoreTestingPlanCommand";
import {
  GetRestoreTestingSelectionCommand,
  GetRestoreTestingSelectionCommandInput,
  GetRestoreTestingSelectionCommandOutput,
} from "./commands/GetRestoreTestingSelectionCommand";
import {
  GetSupportedResourceTypesCommand,
  GetSupportedResourceTypesCommandInput,
  GetSupportedResourceTypesCommandOutput,
} from "./commands/GetSupportedResourceTypesCommand";
import {
  GetTieringConfigurationCommand,
  GetTieringConfigurationCommandInput,
  GetTieringConfigurationCommandOutput,
} from "./commands/GetTieringConfigurationCommand";
import {
  ListBackupJobsCommand,
  ListBackupJobsCommandInput,
  ListBackupJobsCommandOutput,
} from "./commands/ListBackupJobsCommand";
import {
  ListBackupJobSummariesCommand,
  ListBackupJobSummariesCommandInput,
  ListBackupJobSummariesCommandOutput,
} from "./commands/ListBackupJobSummariesCommand";
import {
  ListBackupPlansCommand,
  ListBackupPlansCommandInput,
  ListBackupPlansCommandOutput,
} from "./commands/ListBackupPlansCommand";
import {
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesCommandInput,
  ListBackupPlanTemplatesCommandOutput,
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsCommandInput,
  ListBackupPlanVersionsCommandOutput,
} from "./commands/ListBackupPlanVersionsCommand";
import {
  ListBackupSelectionsCommand,
  ListBackupSelectionsCommandInput,
  ListBackupSelectionsCommandOutput,
} from "./commands/ListBackupSelectionsCommand";
import {
  ListBackupVaultsCommand,
  ListBackupVaultsCommandInput,
  ListBackupVaultsCommandOutput,
} from "./commands/ListBackupVaultsCommand";
import {
  ListCopyJobsCommand,
  ListCopyJobsCommandInput,
  ListCopyJobsCommandOutput,
} from "./commands/ListCopyJobsCommand";
import {
  ListCopyJobSummariesCommand,
  ListCopyJobSummariesCommandInput,
  ListCopyJobSummariesCommandOutput,
} from "./commands/ListCopyJobSummariesCommand";
import {
  ListFrameworksCommand,
  ListFrameworksCommandInput,
  ListFrameworksCommandOutput,
} from "./commands/ListFrameworksCommand";
import {
  ListIndexedRecoveryPointsCommand,
  ListIndexedRecoveryPointsCommandInput,
  ListIndexedRecoveryPointsCommandOutput,
} from "./commands/ListIndexedRecoveryPointsCommand";
import {
  ListLegalHoldsCommand,
  ListLegalHoldsCommandInput,
  ListLegalHoldsCommandOutput,
} from "./commands/ListLegalHoldsCommand";
import {
  ListProtectedResourcesByBackupVaultCommand,
  ListProtectedResourcesByBackupVaultCommandInput,
  ListProtectedResourcesByBackupVaultCommandOutput,
} from "./commands/ListProtectedResourcesByBackupVaultCommand";
import {
  ListProtectedResourcesCommand,
  ListProtectedResourcesCommandInput,
  ListProtectedResourcesCommandOutput,
} from "./commands/ListProtectedResourcesCommand";
import {
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommandInput,
  ListRecoveryPointsByBackupVaultCommandOutput,
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByLegalHoldCommandInput,
  ListRecoveryPointsByLegalHoldCommandOutput,
} from "./commands/ListRecoveryPointsByLegalHoldCommand";
import {
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceCommandInput,
  ListRecoveryPointsByResourceCommandOutput,
} from "./commands/ListRecoveryPointsByResourceCommand";
import {
  ListReportJobsCommand,
  ListReportJobsCommandInput,
  ListReportJobsCommandOutput,
} from "./commands/ListReportJobsCommand";
import {
  ListReportPlansCommand,
  ListReportPlansCommandInput,
  ListReportPlansCommandOutput,
} from "./commands/ListReportPlansCommand";
import {
  ListRestoreAccessBackupVaultsCommand,
  ListRestoreAccessBackupVaultsCommandInput,
  ListRestoreAccessBackupVaultsCommandOutput,
} from "./commands/ListRestoreAccessBackupVaultsCommand";
import {
  ListRestoreJobsByProtectedResourceCommand,
  ListRestoreJobsByProtectedResourceCommandInput,
  ListRestoreJobsByProtectedResourceCommandOutput,
} from "./commands/ListRestoreJobsByProtectedResourceCommand";
import {
  ListRestoreJobsCommand,
  ListRestoreJobsCommandInput,
  ListRestoreJobsCommandOutput,
} from "./commands/ListRestoreJobsCommand";
import {
  ListRestoreJobSummariesCommand,
  ListRestoreJobSummariesCommandInput,
  ListRestoreJobSummariesCommandOutput,
} from "./commands/ListRestoreJobSummariesCommand";
import {
  ListRestoreTestingPlansCommand,
  ListRestoreTestingPlansCommandInput,
  ListRestoreTestingPlansCommandOutput,
} from "./commands/ListRestoreTestingPlansCommand";
import {
  ListRestoreTestingSelectionsCommand,
  ListRestoreTestingSelectionsCommandInput,
  ListRestoreTestingSelectionsCommandOutput,
} from "./commands/ListRestoreTestingSelectionsCommand";
import {
  ListScanJobsCommand,
  ListScanJobsCommandInput,
  ListScanJobsCommandOutput,
} from "./commands/ListScanJobsCommand";
import {
  ListScanJobSummariesCommand,
  ListScanJobSummariesCommandInput,
  ListScanJobSummariesCommandOutput,
} from "./commands/ListScanJobSummariesCommand";
import { ListTagsCommand, ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import {
  ListTieringConfigurationsCommand,
  ListTieringConfigurationsCommandInput,
  ListTieringConfigurationsCommandOutput,
} from "./commands/ListTieringConfigurationsCommand";
import {
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultAccessPolicyCommandInput,
  PutBackupVaultAccessPolicyCommandOutput,
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  PutBackupVaultLockConfigurationCommand,
  PutBackupVaultLockConfigurationCommandInput,
  PutBackupVaultLockConfigurationCommandOutput,
} from "./commands/PutBackupVaultLockConfigurationCommand";
import {
  PutBackupVaultNotificationsCommand,
  PutBackupVaultNotificationsCommandInput,
  PutBackupVaultNotificationsCommandOutput,
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  PutRestoreValidationResultCommand,
  PutRestoreValidationResultCommandInput,
  PutRestoreValidationResultCommandOutput,
} from "./commands/PutRestoreValidationResultCommand";
import {
  RevokeRestoreAccessBackupVaultCommand,
  RevokeRestoreAccessBackupVaultCommandInput,
  RevokeRestoreAccessBackupVaultCommandOutput,
} from "./commands/RevokeRestoreAccessBackupVaultCommand";
import {
  StartBackupJobCommand,
  StartBackupJobCommandInput,
  StartBackupJobCommandOutput,
} from "./commands/StartBackupJobCommand";
import {
  StartCopyJobCommand,
  StartCopyJobCommandInput,
  StartCopyJobCommandOutput,
} from "./commands/StartCopyJobCommand";
import {
  StartReportJobCommand,
  StartReportJobCommandInput,
  StartReportJobCommandOutput,
} from "./commands/StartReportJobCommand";
import {
  StartRestoreJobCommand,
  StartRestoreJobCommandInput,
  StartRestoreJobCommandOutput,
} from "./commands/StartRestoreJobCommand";
import {
  StartScanJobCommand,
  StartScanJobCommandInput,
  StartScanJobCommandOutput,
} from "./commands/StartScanJobCommand";
import {
  StopBackupJobCommand,
  StopBackupJobCommandInput,
  StopBackupJobCommandOutput,
} from "./commands/StopBackupJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateBackupPlanCommand,
  UpdateBackupPlanCommandInput,
  UpdateBackupPlanCommandOutput,
} from "./commands/UpdateBackupPlanCommand";
import {
  UpdateFrameworkCommand,
  UpdateFrameworkCommandInput,
  UpdateFrameworkCommandOutput,
} from "./commands/UpdateFrameworkCommand";
import {
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsCommandInput,
  UpdateGlobalSettingsCommandOutput,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  UpdateRecoveryPointIndexSettingsCommand,
  UpdateRecoveryPointIndexSettingsCommandInput,
  UpdateRecoveryPointIndexSettingsCommandOutput,
} from "./commands/UpdateRecoveryPointIndexSettingsCommand";
import {
  UpdateRecoveryPointLifecycleCommand,
  UpdateRecoveryPointLifecycleCommandInput,
  UpdateRecoveryPointLifecycleCommandOutput,
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import {
  UpdateRegionSettingsCommand,
  UpdateRegionSettingsCommandInput,
  UpdateRegionSettingsCommandOutput,
} from "./commands/UpdateRegionSettingsCommand";
import {
  UpdateReportPlanCommand,
  UpdateReportPlanCommandInput,
  UpdateReportPlanCommandOutput,
} from "./commands/UpdateReportPlanCommand";
import {
  UpdateRestoreTestingPlanCommand,
  UpdateRestoreTestingPlanCommandInput,
  UpdateRestoreTestingPlanCommandOutput,
} from "./commands/UpdateRestoreTestingPlanCommand";
import {
  UpdateRestoreTestingSelectionCommand,
  UpdateRestoreTestingSelectionCommandInput,
  UpdateRestoreTestingSelectionCommandOutput,
} from "./commands/UpdateRestoreTestingSelectionCommand";
import {
  UpdateTieringConfigurationCommand,
  UpdateTieringConfigurationCommandInput,
  UpdateTieringConfigurationCommandOutput,
} from "./commands/UpdateTieringConfigurationCommand";

const commands = {
  AssociateBackupVaultMpaApprovalTeamCommand,
  CancelLegalHoldCommand,
  CreateBackupPlanCommand,
  CreateBackupSelectionCommand,
  CreateBackupVaultCommand,
  CreateFrameworkCommand,
  CreateLegalHoldCommand,
  CreateLogicallyAirGappedBackupVaultCommand,
  CreateReportPlanCommand,
  CreateRestoreAccessBackupVaultCommand,
  CreateRestoreTestingPlanCommand,
  CreateRestoreTestingSelectionCommand,
  CreateTieringConfigurationCommand,
  DeleteBackupPlanCommand,
  DeleteBackupSelectionCommand,
  DeleteBackupVaultCommand,
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultLockConfigurationCommand,
  DeleteBackupVaultNotificationsCommand,
  DeleteFrameworkCommand,
  DeleteRecoveryPointCommand,
  DeleteReportPlanCommand,
  DeleteRestoreTestingPlanCommand,
  DeleteRestoreTestingSelectionCommand,
  DeleteTieringConfigurationCommand,
  DescribeBackupJobCommand,
  DescribeBackupVaultCommand,
  DescribeCopyJobCommand,
  DescribeFrameworkCommand,
  DescribeGlobalSettingsCommand,
  DescribeProtectedResourceCommand,
  DescribeRecoveryPointCommand,
  DescribeRegionSettingsCommand,
  DescribeReportJobCommand,
  DescribeReportPlanCommand,
  DescribeRestoreJobCommand,
  DescribeScanJobCommand,
  DisassociateBackupVaultMpaApprovalTeamCommand,
  DisassociateRecoveryPointCommand,
  DisassociateRecoveryPointFromParentCommand,
  ExportBackupPlanTemplateCommand,
  GetBackupPlanCommand,
  GetBackupPlanFromJSONCommand,
  GetBackupPlanFromTemplateCommand,
  GetBackupSelectionCommand,
  GetBackupVaultAccessPolicyCommand,
  GetBackupVaultNotificationsCommand,
  GetLegalHoldCommand,
  GetRecoveryPointIndexDetailsCommand,
  GetRecoveryPointRestoreMetadataCommand,
  GetRestoreJobMetadataCommand,
  GetRestoreTestingInferredMetadataCommand,
  GetRestoreTestingPlanCommand,
  GetRestoreTestingSelectionCommand,
  GetSupportedResourceTypesCommand,
  GetTieringConfigurationCommand,
  ListBackupJobsCommand,
  ListBackupJobSummariesCommand,
  ListBackupPlansCommand,
  ListBackupPlanTemplatesCommand,
  ListBackupPlanVersionsCommand,
  ListBackupSelectionsCommand,
  ListBackupVaultsCommand,
  ListCopyJobsCommand,
  ListCopyJobSummariesCommand,
  ListFrameworksCommand,
  ListIndexedRecoveryPointsCommand,
  ListLegalHoldsCommand,
  ListProtectedResourcesCommand,
  ListProtectedResourcesByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByResourceCommand,
  ListReportJobsCommand,
  ListReportPlansCommand,
  ListRestoreAccessBackupVaultsCommand,
  ListRestoreJobsCommand,
  ListRestoreJobsByProtectedResourceCommand,
  ListRestoreJobSummariesCommand,
  ListRestoreTestingPlansCommand,
  ListRestoreTestingSelectionsCommand,
  ListScanJobsCommand,
  ListScanJobSummariesCommand,
  ListTagsCommand,
  ListTieringConfigurationsCommand,
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultLockConfigurationCommand,
  PutBackupVaultNotificationsCommand,
  PutRestoreValidationResultCommand,
  RevokeRestoreAccessBackupVaultCommand,
  StartBackupJobCommand,
  StartCopyJobCommand,
  StartReportJobCommand,
  StartRestoreJobCommand,
  StartScanJobCommand,
  StopBackupJobCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateBackupPlanCommand,
  UpdateFrameworkCommand,
  UpdateGlobalSettingsCommand,
  UpdateRecoveryPointIndexSettingsCommand,
  UpdateRecoveryPointLifecycleCommand,
  UpdateRegionSettingsCommand,
  UpdateReportPlanCommand,
  UpdateRestoreTestingPlanCommand,
  UpdateRestoreTestingSelectionCommand,
  UpdateTieringConfigurationCommand,
};

export interface Backup {
  /**
   * @see {@link AssociateBackupVaultMpaApprovalTeamCommand}
   */
  associateBackupVaultMpaApprovalTeam(
    args: AssociateBackupVaultMpaApprovalTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateBackupVaultMpaApprovalTeamCommandOutput>;
  associateBackupVaultMpaApprovalTeam(
    args: AssociateBackupVaultMpaApprovalTeamCommandInput,
    cb: (err: any, data?: AssociateBackupVaultMpaApprovalTeamCommandOutput) => void
  ): void;
  associateBackupVaultMpaApprovalTeam(
    args: AssociateBackupVaultMpaApprovalTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateBackupVaultMpaApprovalTeamCommandOutput) => void
  ): void;

  /**
   * @see {@link CancelLegalHoldCommand}
   */
  cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelLegalHoldCommandOutput>;
  cancelLegalHold(args: CancelLegalHoldCommandInput, cb: (err: any, data?: CancelLegalHoldCommandOutput) => void): void;
  cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupPlanCommand}
   */
  createBackupPlan(
    args: CreateBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupPlanCommandOutput>;
  createBackupPlan(
    args: CreateBackupPlanCommandInput,
    cb: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): void;
  createBackupPlan(
    args: CreateBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupSelectionCommand}
   */
  createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupSelectionCommandOutput>;
  createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    cb: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): void;
  createBackupSelection(
    args: CreateBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateBackupVaultCommand}
   */
  createBackupVault(
    args: CreateBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateBackupVaultCommandOutput>;
  createBackupVault(
    args: CreateBackupVaultCommandInput,
    cb: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): void;
  createBackupVault(
    args: CreateBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateFrameworkCommand}
   */
  createFramework(
    args: CreateFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFrameworkCommandOutput>;
  createFramework(args: CreateFrameworkCommandInput, cb: (err: any, data?: CreateFrameworkCommandOutput) => void): void;
  createFramework(
    args: CreateFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLegalHoldCommand}
   */
  createLegalHold(
    args: CreateLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLegalHoldCommandOutput>;
  createLegalHold(args: CreateLegalHoldCommandInput, cb: (err: any, data?: CreateLegalHoldCommandOutput) => void): void;
  createLegalHold(
    args: CreateLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLogicallyAirGappedBackupVaultCommand}
   */
  createLogicallyAirGappedBackupVault(
    args: CreateLogicallyAirGappedBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLogicallyAirGappedBackupVaultCommandOutput>;
  createLogicallyAirGappedBackupVault(
    args: CreateLogicallyAirGappedBackupVaultCommandInput,
    cb: (err: any, data?: CreateLogicallyAirGappedBackupVaultCommandOutput) => void
  ): void;
  createLogicallyAirGappedBackupVault(
    args: CreateLogicallyAirGappedBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLogicallyAirGappedBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateReportPlanCommand}
   */
  createReportPlan(
    args: CreateReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateReportPlanCommandOutput>;
  createReportPlan(
    args: CreateReportPlanCommandInput,
    cb: (err: any, data?: CreateReportPlanCommandOutput) => void
  ): void;
  createReportPlan(
    args: CreateReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateReportPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRestoreAccessBackupVaultCommand}
   */
  createRestoreAccessBackupVault(
    args: CreateRestoreAccessBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestoreAccessBackupVaultCommandOutput>;
  createRestoreAccessBackupVault(
    args: CreateRestoreAccessBackupVaultCommandInput,
    cb: (err: any, data?: CreateRestoreAccessBackupVaultCommandOutput) => void
  ): void;
  createRestoreAccessBackupVault(
    args: CreateRestoreAccessBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestoreAccessBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRestoreTestingPlanCommand}
   */
  createRestoreTestingPlan(
    args: CreateRestoreTestingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestoreTestingPlanCommandOutput>;
  createRestoreTestingPlan(
    args: CreateRestoreTestingPlanCommandInput,
    cb: (err: any, data?: CreateRestoreTestingPlanCommandOutput) => void
  ): void;
  createRestoreTestingPlan(
    args: CreateRestoreTestingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestoreTestingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRestoreTestingSelectionCommand}
   */
  createRestoreTestingSelection(
    args: CreateRestoreTestingSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRestoreTestingSelectionCommandOutput>;
  createRestoreTestingSelection(
    args: CreateRestoreTestingSelectionCommandInput,
    cb: (err: any, data?: CreateRestoreTestingSelectionCommandOutput) => void
  ): void;
  createRestoreTestingSelection(
    args: CreateRestoreTestingSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRestoreTestingSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTieringConfigurationCommand}
   */
  createTieringConfiguration(
    args: CreateTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTieringConfigurationCommandOutput>;
  createTieringConfiguration(
    args: CreateTieringConfigurationCommandInput,
    cb: (err: any, data?: CreateTieringConfigurationCommandOutput) => void
  ): void;
  createTieringConfiguration(
    args: CreateTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupPlanCommand}
   */
  deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupPlanCommandOutput>;
  deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    cb: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): void;
  deleteBackupPlan(
    args: DeleteBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupSelectionCommand}
   */
  deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupSelectionCommandOutput>;
  deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    cb: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): void;
  deleteBackupSelection(
    args: DeleteBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupVaultCommand}
   */
  deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultCommandOutput>;
  deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    cb: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): void;
  deleteBackupVault(
    args: DeleteBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupVaultAccessPolicyCommand}
   */
  deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultAccessPolicyCommandOutput>;
  deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  deleteBackupVaultAccessPolicy(
    args: DeleteBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupVaultLockConfigurationCommand}
   */
  deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultLockConfigurationCommandOutput>;
  deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    cb: (err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  deleteBackupVaultLockConfiguration(
    args: DeleteBackupVaultLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultLockConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteBackupVaultNotificationsCommand}
   */
  deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteBackupVaultNotificationsCommandOutput>;
  deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): void;
  deleteBackupVaultNotifications(
    args: DeleteBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteBackupVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFrameworkCommand}
   */
  deleteFramework(
    args: DeleteFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFrameworkCommandOutput>;
  deleteFramework(args: DeleteFrameworkCommandInput, cb: (err: any, data?: DeleteFrameworkCommandOutput) => void): void;
  deleteFramework(
    args: DeleteFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRecoveryPointCommand}
   */
  deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRecoveryPointCommandOutput>;
  deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    cb: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): void;
  deleteRecoveryPoint(
    args: DeleteRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteReportPlanCommand}
   */
  deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteReportPlanCommandOutput>;
  deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    cb: (err: any, data?: DeleteReportPlanCommandOutput) => void
  ): void;
  deleteReportPlan(
    args: DeleteReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteReportPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRestoreTestingPlanCommand}
   */
  deleteRestoreTestingPlan(
    args: DeleteRestoreTestingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRestoreTestingPlanCommandOutput>;
  deleteRestoreTestingPlan(
    args: DeleteRestoreTestingPlanCommandInput,
    cb: (err: any, data?: DeleteRestoreTestingPlanCommandOutput) => void
  ): void;
  deleteRestoreTestingPlan(
    args: DeleteRestoreTestingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestoreTestingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRestoreTestingSelectionCommand}
   */
  deleteRestoreTestingSelection(
    args: DeleteRestoreTestingSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRestoreTestingSelectionCommandOutput>;
  deleteRestoreTestingSelection(
    args: DeleteRestoreTestingSelectionCommandInput,
    cb: (err: any, data?: DeleteRestoreTestingSelectionCommandOutput) => void
  ): void;
  deleteRestoreTestingSelection(
    args: DeleteRestoreTestingSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRestoreTestingSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTieringConfigurationCommand}
   */
  deleteTieringConfiguration(
    args: DeleteTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTieringConfigurationCommandOutput>;
  deleteTieringConfiguration(
    args: DeleteTieringConfigurationCommandInput,
    cb: (err: any, data?: DeleteTieringConfigurationCommandOutput) => void
  ): void;
  deleteTieringConfiguration(
    args: DeleteTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupJobCommand}
   */
  describeBackupJob(
    args: DescribeBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupJobCommandOutput>;
  describeBackupJob(
    args: DescribeBackupJobCommandInput,
    cb: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): void;
  describeBackupJob(
    args: DescribeBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBackupVaultCommand}
   */
  describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBackupVaultCommandOutput>;
  describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    cb: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): void;
  describeBackupVault(
    args: DescribeBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCopyJobCommand}
   */
  describeCopyJob(
    args: DescribeCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCopyJobCommandOutput>;
  describeCopyJob(args: DescribeCopyJobCommandInput, cb: (err: any, data?: DescribeCopyJobCommandOutput) => void): void;
  describeCopyJob(
    args: DescribeCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeFrameworkCommand}
   */
  describeFramework(
    args: DescribeFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFrameworkCommandOutput>;
  describeFramework(
    args: DescribeFrameworkCommandInput,
    cb: (err: any, data?: DescribeFrameworkCommandOutput) => void
  ): void;
  describeFramework(
    args: DescribeFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeGlobalSettingsCommand}
   */
  describeGlobalSettings(): Promise<DescribeGlobalSettingsCommandOutput>;
  describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGlobalSettingsCommandOutput>;
  describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    cb: (err: any, data?: DescribeGlobalSettingsCommandOutput) => void
  ): void;
  describeGlobalSettings(
    args: DescribeGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProtectedResourceCommand}
   */
  describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProtectedResourceCommandOutput>;
  describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    cb: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): void;
  describeProtectedResource(
    args: DescribeProtectedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProtectedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRecoveryPointCommand}
   */
  describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRecoveryPointCommandOutput>;
  describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    cb: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): void;
  describeRecoveryPoint(
    args: DescribeRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRegionSettingsCommand}
   */
  describeRegionSettings(): Promise<DescribeRegionSettingsCommandOutput>;
  describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRegionSettingsCommandOutput>;
  describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    cb: (err: any, data?: DescribeRegionSettingsCommandOutput) => void
  ): void;
  describeRegionSettings(
    args: DescribeRegionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRegionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReportJobCommand}
   */
  describeReportJob(
    args: DescribeReportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportJobCommandOutput>;
  describeReportJob(
    args: DescribeReportJobCommandInput,
    cb: (err: any, data?: DescribeReportJobCommandOutput) => void
  ): void;
  describeReportJob(
    args: DescribeReportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeReportPlanCommand}
   */
  describeReportPlan(
    args: DescribeReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeReportPlanCommandOutput>;
  describeReportPlan(
    args: DescribeReportPlanCommandInput,
    cb: (err: any, data?: DescribeReportPlanCommandOutput) => void
  ): void;
  describeReportPlan(
    args: DescribeReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeReportPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeRestoreJobCommand}
   */
  describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRestoreJobCommandOutput>;
  describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    cb: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): void;
  describeRestoreJob(
    args: DescribeRestoreJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRestoreJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeScanJobCommand}
   */
  describeScanJob(
    args: DescribeScanJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeScanJobCommandOutput>;
  describeScanJob(args: DescribeScanJobCommandInput, cb: (err: any, data?: DescribeScanJobCommandOutput) => void): void;
  describeScanJob(
    args: DescribeScanJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeScanJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateBackupVaultMpaApprovalTeamCommand}
   */
  disassociateBackupVaultMpaApprovalTeam(
    args: DisassociateBackupVaultMpaApprovalTeamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateBackupVaultMpaApprovalTeamCommandOutput>;
  disassociateBackupVaultMpaApprovalTeam(
    args: DisassociateBackupVaultMpaApprovalTeamCommandInput,
    cb: (err: any, data?: DisassociateBackupVaultMpaApprovalTeamCommandOutput) => void
  ): void;
  disassociateBackupVaultMpaApprovalTeam(
    args: DisassociateBackupVaultMpaApprovalTeamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateBackupVaultMpaApprovalTeamCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRecoveryPointCommand}
   */
  disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRecoveryPointCommandOutput>;
  disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    cb: (err: any, data?: DisassociateRecoveryPointCommandOutput) => void
  ): void;
  disassociateRecoveryPoint(
    args: DisassociateRecoveryPointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRecoveryPointCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateRecoveryPointFromParentCommand}
   */
  disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateRecoveryPointFromParentCommandOutput>;
  disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    cb: (err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void
  ): void;
  disassociateRecoveryPointFromParent(
    args: DisassociateRecoveryPointFromParentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateRecoveryPointFromParentCommandOutput) => void
  ): void;

  /**
   * @see {@link ExportBackupPlanTemplateCommand}
   */
  exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ExportBackupPlanTemplateCommandOutput>;
  exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    cb: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): void;
  exportBackupPlanTemplate(
    args: ExportBackupPlanTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ExportBackupPlanTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupPlanCommand}
   */
  getBackupPlan(args: GetBackupPlanCommandInput, options?: __HttpHandlerOptions): Promise<GetBackupPlanCommandOutput>;
  getBackupPlan(args: GetBackupPlanCommandInput, cb: (err: any, data?: GetBackupPlanCommandOutput) => void): void;
  getBackupPlan(
    args: GetBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupPlanFromJSONCommand}
   */
  getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanFromJSONCommandOutput>;
  getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    cb: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): void;
  getBackupPlanFromJSON(
    args: GetBackupPlanFromJSONCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanFromJSONCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupPlanFromTemplateCommand}
   */
  getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanFromTemplateCommandOutput>;
  getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    cb: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): void;
  getBackupPlanFromTemplate(
    args: GetBackupPlanFromTemplateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupPlanFromTemplateCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupSelectionCommand}
   */
  getBackupSelection(
    args: GetBackupSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupSelectionCommandOutput>;
  getBackupSelection(
    args: GetBackupSelectionCommandInput,
    cb: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): void;
  getBackupSelection(
    args: GetBackupSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupVaultAccessPolicyCommand}
   */
  getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupVaultAccessPolicyCommandOutput>;
  getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  getBackupVaultAccessPolicy(
    args: GetBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetBackupVaultNotificationsCommand}
   */
  getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupVaultNotificationsCommandOutput>;
  getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): void;
  getBackupVaultNotifications(
    args: GetBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetBackupVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLegalHoldCommand}
   */
  getLegalHold(args: GetLegalHoldCommandInput, options?: __HttpHandlerOptions): Promise<GetLegalHoldCommandOutput>;
  getLegalHold(args: GetLegalHoldCommandInput, cb: (err: any, data?: GetLegalHoldCommandOutput) => void): void;
  getLegalHold(
    args: GetLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPointIndexDetailsCommand}
   */
  getRecoveryPointIndexDetails(
    args: GetRecoveryPointIndexDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryPointIndexDetailsCommandOutput>;
  getRecoveryPointIndexDetails(
    args: GetRecoveryPointIndexDetailsCommandInput,
    cb: (err: any, data?: GetRecoveryPointIndexDetailsCommandOutput) => void
  ): void;
  getRecoveryPointIndexDetails(
    args: GetRecoveryPointIndexDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryPointIndexDetailsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRecoveryPointRestoreMetadataCommand}
   */
  getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRecoveryPointRestoreMetadataCommandOutput>;
  getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    cb: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): void;
  getRecoveryPointRestoreMetadata(
    args: GetRecoveryPointRestoreMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRecoveryPointRestoreMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestoreJobMetadataCommand}
   */
  getRestoreJobMetadata(
    args: GetRestoreJobMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestoreJobMetadataCommandOutput>;
  getRestoreJobMetadata(
    args: GetRestoreJobMetadataCommandInput,
    cb: (err: any, data?: GetRestoreJobMetadataCommandOutput) => void
  ): void;
  getRestoreJobMetadata(
    args: GetRestoreJobMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestoreJobMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestoreTestingInferredMetadataCommand}
   */
  getRestoreTestingInferredMetadata(
    args: GetRestoreTestingInferredMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestoreTestingInferredMetadataCommandOutput>;
  getRestoreTestingInferredMetadata(
    args: GetRestoreTestingInferredMetadataCommandInput,
    cb: (err: any, data?: GetRestoreTestingInferredMetadataCommandOutput) => void
  ): void;
  getRestoreTestingInferredMetadata(
    args: GetRestoreTestingInferredMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestoreTestingInferredMetadataCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestoreTestingPlanCommand}
   */
  getRestoreTestingPlan(
    args: GetRestoreTestingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestoreTestingPlanCommandOutput>;
  getRestoreTestingPlan(
    args: GetRestoreTestingPlanCommandInput,
    cb: (err: any, data?: GetRestoreTestingPlanCommandOutput) => void
  ): void;
  getRestoreTestingPlan(
    args: GetRestoreTestingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestoreTestingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRestoreTestingSelectionCommand}
   */
  getRestoreTestingSelection(
    args: GetRestoreTestingSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRestoreTestingSelectionCommandOutput>;
  getRestoreTestingSelection(
    args: GetRestoreTestingSelectionCommandInput,
    cb: (err: any, data?: GetRestoreTestingSelectionCommandOutput) => void
  ): void;
  getRestoreTestingSelection(
    args: GetRestoreTestingSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRestoreTestingSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSupportedResourceTypesCommand}
   */
  getSupportedResourceTypes(): Promise<GetSupportedResourceTypesCommandOutput>;
  getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetSupportedResourceTypesCommandOutput>;
  getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    cb: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): void;
  getSupportedResourceTypes(
    args: GetSupportedResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSupportedResourceTypesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetTieringConfigurationCommand}
   */
  getTieringConfiguration(
    args: GetTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTieringConfigurationCommandOutput>;
  getTieringConfiguration(
    args: GetTieringConfigurationCommandInput,
    cb: (err: any, data?: GetTieringConfigurationCommandOutput) => void
  ): void;
  getTieringConfiguration(
    args: GetTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTieringConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupJobsCommand}
   */
  listBackupJobs(): Promise<ListBackupJobsCommandOutput>;
  listBackupJobs(
    args: ListBackupJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupJobsCommandOutput>;
  listBackupJobs(args: ListBackupJobsCommandInput, cb: (err: any, data?: ListBackupJobsCommandOutput) => void): void;
  listBackupJobs(
    args: ListBackupJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupJobSummariesCommand}
   */
  listBackupJobSummaries(): Promise<ListBackupJobSummariesCommandOutput>;
  listBackupJobSummaries(
    args: ListBackupJobSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupJobSummariesCommandOutput>;
  listBackupJobSummaries(
    args: ListBackupJobSummariesCommandInput,
    cb: (err: any, data?: ListBackupJobSummariesCommandOutput) => void
  ): void;
  listBackupJobSummaries(
    args: ListBackupJobSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupJobSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupPlansCommand}
   */
  listBackupPlans(): Promise<ListBackupPlansCommandOutput>;
  listBackupPlans(
    args: ListBackupPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlansCommandOutput>;
  listBackupPlans(args: ListBackupPlansCommandInput, cb: (err: any, data?: ListBackupPlansCommandOutput) => void): void;
  listBackupPlans(
    args: ListBackupPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupPlanTemplatesCommand}
   */
  listBackupPlanTemplates(): Promise<ListBackupPlanTemplatesCommandOutput>;
  listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlanTemplatesCommandOutput>;
  listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    cb: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): void;
  listBackupPlanTemplates(
    args: ListBackupPlanTemplatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlanTemplatesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupPlanVersionsCommand}
   */
  listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupPlanVersionsCommandOutput>;
  listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    cb: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): void;
  listBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupPlanVersionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupSelectionsCommand}
   */
  listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupSelectionsCommandOutput>;
  listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    cb: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): void;
  listBackupSelections(
    args: ListBackupSelectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupSelectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListBackupVaultsCommand}
   */
  listBackupVaults(): Promise<ListBackupVaultsCommandOutput>;
  listBackupVaults(
    args: ListBackupVaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListBackupVaultsCommandOutput>;
  listBackupVaults(
    args: ListBackupVaultsCommandInput,
    cb: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): void;
  listBackupVaults(
    args: ListBackupVaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListBackupVaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCopyJobsCommand}
   */
  listCopyJobs(): Promise<ListCopyJobsCommandOutput>;
  listCopyJobs(args: ListCopyJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListCopyJobsCommandOutput>;
  listCopyJobs(args: ListCopyJobsCommandInput, cb: (err: any, data?: ListCopyJobsCommandOutput) => void): void;
  listCopyJobs(
    args: ListCopyJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCopyJobSummariesCommand}
   */
  listCopyJobSummaries(): Promise<ListCopyJobSummariesCommandOutput>;
  listCopyJobSummaries(
    args: ListCopyJobSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCopyJobSummariesCommandOutput>;
  listCopyJobSummaries(
    args: ListCopyJobSummariesCommandInput,
    cb: (err: any, data?: ListCopyJobSummariesCommandOutput) => void
  ): void;
  listCopyJobSummaries(
    args: ListCopyJobSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCopyJobSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFrameworksCommand}
   */
  listFrameworks(): Promise<ListFrameworksCommandOutput>;
  listFrameworks(
    args: ListFrameworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFrameworksCommandOutput>;
  listFrameworks(args: ListFrameworksCommandInput, cb: (err: any, data?: ListFrameworksCommandOutput) => void): void;
  listFrameworks(
    args: ListFrameworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFrameworksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListIndexedRecoveryPointsCommand}
   */
  listIndexedRecoveryPoints(): Promise<ListIndexedRecoveryPointsCommandOutput>;
  listIndexedRecoveryPoints(
    args: ListIndexedRecoveryPointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListIndexedRecoveryPointsCommandOutput>;
  listIndexedRecoveryPoints(
    args: ListIndexedRecoveryPointsCommandInput,
    cb: (err: any, data?: ListIndexedRecoveryPointsCommandOutput) => void
  ): void;
  listIndexedRecoveryPoints(
    args: ListIndexedRecoveryPointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListIndexedRecoveryPointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLegalHoldsCommand}
   */
  listLegalHolds(): Promise<ListLegalHoldsCommandOutput>;
  listLegalHolds(
    args: ListLegalHoldsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLegalHoldsCommandOutput>;
  listLegalHolds(args: ListLegalHoldsCommandInput, cb: (err: any, data?: ListLegalHoldsCommandOutput) => void): void;
  listLegalHolds(
    args: ListLegalHoldsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLegalHoldsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedResourcesCommand}
   */
  listProtectedResources(): Promise<ListProtectedResourcesCommandOutput>;
  listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedResourcesCommandOutput>;
  listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    cb: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): void;
  listProtectedResources(
    args: ListProtectedResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedResourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListProtectedResourcesByBackupVaultCommand}
   */
  listProtectedResourcesByBackupVault(
    args: ListProtectedResourcesByBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtectedResourcesByBackupVaultCommandOutput>;
  listProtectedResourcesByBackupVault(
    args: ListProtectedResourcesByBackupVaultCommandInput,
    cb: (err: any, data?: ListProtectedResourcesByBackupVaultCommandOutput) => void
  ): void;
  listProtectedResourcesByBackupVault(
    args: ListProtectedResourcesByBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtectedResourcesByBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPointsByBackupVaultCommand}
   */
  listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByBackupVaultCommandOutput>;
  listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): void;
  listRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPointsByLegalHoldCommand}
   */
  listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByLegalHoldCommandOutput>;
  listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void
  ): void;
  listRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByLegalHoldCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRecoveryPointsByResourceCommand}
   */
  listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRecoveryPointsByResourceCommandOutput>;
  listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    cb: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): void;
  listRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRecoveryPointsByResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportJobsCommand}
   */
  listReportJobs(): Promise<ListReportJobsCommandOutput>;
  listReportJobs(
    args: ListReportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportJobsCommandOutput>;
  listReportJobs(args: ListReportJobsCommandInput, cb: (err: any, data?: ListReportJobsCommandOutput) => void): void;
  listReportJobs(
    args: ListReportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListReportPlansCommand}
   */
  listReportPlans(): Promise<ListReportPlansCommandOutput>;
  listReportPlans(
    args: ListReportPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListReportPlansCommandOutput>;
  listReportPlans(args: ListReportPlansCommandInput, cb: (err: any, data?: ListReportPlansCommandOutput) => void): void;
  listReportPlans(
    args: ListReportPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListReportPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreAccessBackupVaultsCommand}
   */
  listRestoreAccessBackupVaults(
    args: ListRestoreAccessBackupVaultsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreAccessBackupVaultsCommandOutput>;
  listRestoreAccessBackupVaults(
    args: ListRestoreAccessBackupVaultsCommandInput,
    cb: (err: any, data?: ListRestoreAccessBackupVaultsCommandOutput) => void
  ): void;
  listRestoreAccessBackupVaults(
    args: ListRestoreAccessBackupVaultsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreAccessBackupVaultsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreJobsCommand}
   */
  listRestoreJobs(): Promise<ListRestoreJobsCommandOutput>;
  listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreJobsCommandOutput>;
  listRestoreJobs(args: ListRestoreJobsCommandInput, cb: (err: any, data?: ListRestoreJobsCommandOutput) => void): void;
  listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreJobsByProtectedResourceCommand}
   */
  listRestoreJobsByProtectedResource(
    args: ListRestoreJobsByProtectedResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreJobsByProtectedResourceCommandOutput>;
  listRestoreJobsByProtectedResource(
    args: ListRestoreJobsByProtectedResourceCommandInput,
    cb: (err: any, data?: ListRestoreJobsByProtectedResourceCommandOutput) => void
  ): void;
  listRestoreJobsByProtectedResource(
    args: ListRestoreJobsByProtectedResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreJobsByProtectedResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreJobSummariesCommand}
   */
  listRestoreJobSummaries(): Promise<ListRestoreJobSummariesCommandOutput>;
  listRestoreJobSummaries(
    args: ListRestoreJobSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreJobSummariesCommandOutput>;
  listRestoreJobSummaries(
    args: ListRestoreJobSummariesCommandInput,
    cb: (err: any, data?: ListRestoreJobSummariesCommandOutput) => void
  ): void;
  listRestoreJobSummaries(
    args: ListRestoreJobSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreJobSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreTestingPlansCommand}
   */
  listRestoreTestingPlans(): Promise<ListRestoreTestingPlansCommandOutput>;
  listRestoreTestingPlans(
    args: ListRestoreTestingPlansCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreTestingPlansCommandOutput>;
  listRestoreTestingPlans(
    args: ListRestoreTestingPlansCommandInput,
    cb: (err: any, data?: ListRestoreTestingPlansCommandOutput) => void
  ): void;
  listRestoreTestingPlans(
    args: ListRestoreTestingPlansCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreTestingPlansCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRestoreTestingSelectionsCommand}
   */
  listRestoreTestingSelections(
    args: ListRestoreTestingSelectionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRestoreTestingSelectionsCommandOutput>;
  listRestoreTestingSelections(
    args: ListRestoreTestingSelectionsCommandInput,
    cb: (err: any, data?: ListRestoreTestingSelectionsCommandOutput) => void
  ): void;
  listRestoreTestingSelections(
    args: ListRestoreTestingSelectionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRestoreTestingSelectionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScanJobsCommand}
   */
  listScanJobs(): Promise<ListScanJobsCommandOutput>;
  listScanJobs(args: ListScanJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListScanJobsCommandOutput>;
  listScanJobs(args: ListScanJobsCommandInput, cb: (err: any, data?: ListScanJobsCommandOutput) => void): void;
  listScanJobs(
    args: ListScanJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScanJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListScanJobSummariesCommand}
   */
  listScanJobSummaries(): Promise<ListScanJobSummariesCommandOutput>;
  listScanJobSummaries(
    args: ListScanJobSummariesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScanJobSummariesCommandOutput>;
  listScanJobSummaries(
    args: ListScanJobSummariesCommandInput,
    cb: (err: any, data?: ListScanJobSummariesCommandOutput) => void
  ): void;
  listScanJobSummaries(
    args: ListScanJobSummariesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListScanJobSummariesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsCommand}
   */
  listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
  listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
  listTags(
    args: ListTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTieringConfigurationsCommand}
   */
  listTieringConfigurations(): Promise<ListTieringConfigurationsCommandOutput>;
  listTieringConfigurations(
    args: ListTieringConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTieringConfigurationsCommandOutput>;
  listTieringConfigurations(
    args: ListTieringConfigurationsCommandInput,
    cb: (err: any, data?: ListTieringConfigurationsCommandOutput) => void
  ): void;
  listTieringConfigurations(
    args: ListTieringConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTieringConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBackupVaultAccessPolicyCommand}
   */
  putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultAccessPolicyCommandOutput>;
  putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    cb: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): void;
  putBackupVaultAccessPolicy(
    args: PutBackupVaultAccessPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultAccessPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBackupVaultLockConfigurationCommand}
   */
  putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultLockConfigurationCommandOutput>;
  putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    cb: (err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void
  ): void;
  putBackupVaultLockConfiguration(
    args: PutBackupVaultLockConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultLockConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link PutBackupVaultNotificationsCommand}
   */
  putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutBackupVaultNotificationsCommandOutput>;
  putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    cb: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): void;
  putBackupVaultNotifications(
    args: PutBackupVaultNotificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutBackupVaultNotificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRestoreValidationResultCommand}
   */
  putRestoreValidationResult(
    args: PutRestoreValidationResultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRestoreValidationResultCommandOutput>;
  putRestoreValidationResult(
    args: PutRestoreValidationResultCommandInput,
    cb: (err: any, data?: PutRestoreValidationResultCommandOutput) => void
  ): void;
  putRestoreValidationResult(
    args: PutRestoreValidationResultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRestoreValidationResultCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeRestoreAccessBackupVaultCommand}
   */
  revokeRestoreAccessBackupVault(
    args: RevokeRestoreAccessBackupVaultCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeRestoreAccessBackupVaultCommandOutput>;
  revokeRestoreAccessBackupVault(
    args: RevokeRestoreAccessBackupVaultCommandInput,
    cb: (err: any, data?: RevokeRestoreAccessBackupVaultCommandOutput) => void
  ): void;
  revokeRestoreAccessBackupVault(
    args: RevokeRestoreAccessBackupVaultCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeRestoreAccessBackupVaultCommandOutput) => void
  ): void;

  /**
   * @see {@link StartBackupJobCommand}
   */
  startBackupJob(
    args: StartBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartBackupJobCommandOutput>;
  startBackupJob(args: StartBackupJobCommandInput, cb: (err: any, data?: StartBackupJobCommandOutput) => void): void;
  startBackupJob(
    args: StartBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBackupJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCopyJobCommand}
   */
  startCopyJob(args: StartCopyJobCommandInput, options?: __HttpHandlerOptions): Promise<StartCopyJobCommandOutput>;
  startCopyJob(args: StartCopyJobCommandInput, cb: (err: any, data?: StartCopyJobCommandOutput) => void): void;
  startCopyJob(
    args: StartCopyJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCopyJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartReportJobCommand}
   */
  startReportJob(
    args: StartReportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartReportJobCommandOutput>;
  startReportJob(args: StartReportJobCommandInput, cb: (err: any, data?: StartReportJobCommandOutput) => void): void;
  startReportJob(
    args: StartReportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartReportJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartRestoreJobCommand}
   */
  startRestoreJob(
    args: StartRestoreJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartRestoreJobCommandOutput>;
  startRestoreJob(args: StartRestoreJobCommandInput, cb: (err: any, data?: StartRestoreJobCommandOutput) => void): void;
  startRestoreJob(
    args: StartRestoreJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartScanJobCommand}
   */
  startScanJob(args: StartScanJobCommandInput, options?: __HttpHandlerOptions): Promise<StartScanJobCommandOutput>;
  startScanJob(args: StartScanJobCommandInput, cb: (err: any, data?: StartScanJobCommandOutput) => void): void;
  startScanJob(
    args: StartScanJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartScanJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBackupJobCommand}
   */
  stopBackupJob(args: StopBackupJobCommandInput, options?: __HttpHandlerOptions): Promise<StopBackupJobCommandOutput>;
  stopBackupJob(args: StopBackupJobCommandInput, cb: (err: any, data?: StopBackupJobCommandOutput) => void): void;
  stopBackupJob(
    args: StopBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBackupJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateBackupPlanCommand}
   */
  updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateBackupPlanCommandOutput>;
  updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    cb: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): void;
  updateBackupPlan(
    args: UpdateBackupPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateBackupPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateFrameworkCommand}
   */
  updateFramework(
    args: UpdateFrameworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFrameworkCommandOutput>;
  updateFramework(args: UpdateFrameworkCommandInput, cb: (err: any, data?: UpdateFrameworkCommandOutput) => void): void;
  updateFramework(
    args: UpdateFrameworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFrameworkCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateGlobalSettingsCommand}
   */
  updateGlobalSettings(): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateGlobalSettingsCommandOutput>;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;
  updateGlobalSettings(
    args: UpdateGlobalSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateGlobalSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryPointIndexSettingsCommand}
   */
  updateRecoveryPointIndexSettings(
    args: UpdateRecoveryPointIndexSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecoveryPointIndexSettingsCommandOutput>;
  updateRecoveryPointIndexSettings(
    args: UpdateRecoveryPointIndexSettingsCommandInput,
    cb: (err: any, data?: UpdateRecoveryPointIndexSettingsCommandOutput) => void
  ): void;
  updateRecoveryPointIndexSettings(
    args: UpdateRecoveryPointIndexSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecoveryPointIndexSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRecoveryPointLifecycleCommand}
   */
  updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRecoveryPointLifecycleCommandOutput>;
  updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    cb: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): void;
  updateRecoveryPointLifecycle(
    args: UpdateRecoveryPointLifecycleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRecoveryPointLifecycleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRegionSettingsCommand}
   */
  updateRegionSettings(): Promise<UpdateRegionSettingsCommandOutput>;
  updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRegionSettingsCommandOutput>;
  updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    cb: (err: any, data?: UpdateRegionSettingsCommandOutput) => void
  ): void;
  updateRegionSettings(
    args: UpdateRegionSettingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRegionSettingsCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateReportPlanCommand}
   */
  updateReportPlan(
    args: UpdateReportPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateReportPlanCommandOutput>;
  updateReportPlan(
    args: UpdateReportPlanCommandInput,
    cb: (err: any, data?: UpdateReportPlanCommandOutput) => void
  ): void;
  updateReportPlan(
    args: UpdateReportPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateReportPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRestoreTestingPlanCommand}
   */
  updateRestoreTestingPlan(
    args: UpdateRestoreTestingPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRestoreTestingPlanCommandOutput>;
  updateRestoreTestingPlan(
    args: UpdateRestoreTestingPlanCommandInput,
    cb: (err: any, data?: UpdateRestoreTestingPlanCommandOutput) => void
  ): void;
  updateRestoreTestingPlan(
    args: UpdateRestoreTestingPlanCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestoreTestingPlanCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRestoreTestingSelectionCommand}
   */
  updateRestoreTestingSelection(
    args: UpdateRestoreTestingSelectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRestoreTestingSelectionCommandOutput>;
  updateRestoreTestingSelection(
    args: UpdateRestoreTestingSelectionCommandInput,
    cb: (err: any, data?: UpdateRestoreTestingSelectionCommandOutput) => void
  ): void;
  updateRestoreTestingSelection(
    args: UpdateRestoreTestingSelectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRestoreTestingSelectionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateTieringConfigurationCommand}
   */
  updateTieringConfiguration(
    args: UpdateTieringConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTieringConfigurationCommandOutput>;
  updateTieringConfiguration(
    args: UpdateTieringConfigurationCommandInput,
    cb: (err: any, data?: UpdateTieringConfigurationCommandOutput) => void
  ): void;
  updateTieringConfiguration(
    args: UpdateTieringConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTieringConfigurationCommandOutput) => void
  ): void;
}

/**
 * <fullname>Backup</fullname>
 *          <p>Backup is a unified backup service designed to protect Amazon Web Services
 *          services and their associated data. Backup simplifies the creation, migration,
 *          restoration, and deletion of backups, while also providing reporting and
 *          auditing.</p>
 * @public
 */
export class Backup extends BackupClient implements Backup {}
createAggregatedClient(commands, Backup);
