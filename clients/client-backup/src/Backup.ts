// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import { BackupClient } from "./BackupClient";
import {
  type AssociateBackupVaultMpaApprovalTeamCommandInput,
  type AssociateBackupVaultMpaApprovalTeamCommandOutput,
  AssociateBackupVaultMpaApprovalTeamCommand,
} from "./commands/AssociateBackupVaultMpaApprovalTeamCommand";
import {
  type CancelLegalHoldCommandInput,
  type CancelLegalHoldCommandOutput,
  CancelLegalHoldCommand,
} from "./commands/CancelLegalHoldCommand";
import {
  type CreateBackupPlanCommandInput,
  type CreateBackupPlanCommandOutput,
  CreateBackupPlanCommand,
} from "./commands/CreateBackupPlanCommand";
import {
  type CreateBackupSelectionCommandInput,
  type CreateBackupSelectionCommandOutput,
  CreateBackupSelectionCommand,
} from "./commands/CreateBackupSelectionCommand";
import {
  type CreateBackupVaultCommandInput,
  type CreateBackupVaultCommandOutput,
  CreateBackupVaultCommand,
} from "./commands/CreateBackupVaultCommand";
import {
  type CreateFrameworkCommandInput,
  type CreateFrameworkCommandOutput,
  CreateFrameworkCommand,
} from "./commands/CreateFrameworkCommand";
import {
  type CreateLegalHoldCommandInput,
  type CreateLegalHoldCommandOutput,
  CreateLegalHoldCommand,
} from "./commands/CreateLegalHoldCommand";
import {
  type CreateLogicallyAirGappedBackupVaultCommandInput,
  type CreateLogicallyAirGappedBackupVaultCommandOutput,
  CreateLogicallyAirGappedBackupVaultCommand,
} from "./commands/CreateLogicallyAirGappedBackupVaultCommand";
import {
  type CreateReportPlanCommandInput,
  type CreateReportPlanCommandOutput,
  CreateReportPlanCommand,
} from "./commands/CreateReportPlanCommand";
import {
  type CreateRestoreAccessBackupVaultCommandInput,
  type CreateRestoreAccessBackupVaultCommandOutput,
  CreateRestoreAccessBackupVaultCommand,
} from "./commands/CreateRestoreAccessBackupVaultCommand";
import {
  type CreateRestoreTestingPlanCommandInput,
  type CreateRestoreTestingPlanCommandOutput,
  CreateRestoreTestingPlanCommand,
} from "./commands/CreateRestoreTestingPlanCommand";
import {
  type CreateRestoreTestingSelectionCommandInput,
  type CreateRestoreTestingSelectionCommandOutput,
  CreateRestoreTestingSelectionCommand,
} from "./commands/CreateRestoreTestingSelectionCommand";
import {
  type CreateTieringConfigurationCommandInput,
  type CreateTieringConfigurationCommandOutput,
  CreateTieringConfigurationCommand,
} from "./commands/CreateTieringConfigurationCommand";
import {
  type DeleteBackupPlanCommandInput,
  type DeleteBackupPlanCommandOutput,
  DeleteBackupPlanCommand,
} from "./commands/DeleteBackupPlanCommand";
import {
  type DeleteBackupSelectionCommandInput,
  type DeleteBackupSelectionCommandOutput,
  DeleteBackupSelectionCommand,
} from "./commands/DeleteBackupSelectionCommand";
import {
  type DeleteBackupVaultAccessPolicyCommandInput,
  type DeleteBackupVaultAccessPolicyCommandOutput,
  DeleteBackupVaultAccessPolicyCommand,
} from "./commands/DeleteBackupVaultAccessPolicyCommand";
import {
  type DeleteBackupVaultCommandInput,
  type DeleteBackupVaultCommandOutput,
  DeleteBackupVaultCommand,
} from "./commands/DeleteBackupVaultCommand";
import {
  type DeleteBackupVaultLockConfigurationCommandInput,
  type DeleteBackupVaultLockConfigurationCommandOutput,
  DeleteBackupVaultLockConfigurationCommand,
} from "./commands/DeleteBackupVaultLockConfigurationCommand";
import {
  type DeleteBackupVaultNotificationsCommandInput,
  type DeleteBackupVaultNotificationsCommandOutput,
  DeleteBackupVaultNotificationsCommand,
} from "./commands/DeleteBackupVaultNotificationsCommand";
import {
  type DeleteFrameworkCommandInput,
  type DeleteFrameworkCommandOutput,
  DeleteFrameworkCommand,
} from "./commands/DeleteFrameworkCommand";
import {
  type DeleteRecoveryPointCommandInput,
  type DeleteRecoveryPointCommandOutput,
  DeleteRecoveryPointCommand,
} from "./commands/DeleteRecoveryPointCommand";
import {
  type DeleteReportPlanCommandInput,
  type DeleteReportPlanCommandOutput,
  DeleteReportPlanCommand,
} from "./commands/DeleteReportPlanCommand";
import {
  type DeleteRestoreTestingPlanCommandInput,
  type DeleteRestoreTestingPlanCommandOutput,
  DeleteRestoreTestingPlanCommand,
} from "./commands/DeleteRestoreTestingPlanCommand";
import {
  type DeleteRestoreTestingSelectionCommandInput,
  type DeleteRestoreTestingSelectionCommandOutput,
  DeleteRestoreTestingSelectionCommand,
} from "./commands/DeleteRestoreTestingSelectionCommand";
import {
  type DeleteTieringConfigurationCommandInput,
  type DeleteTieringConfigurationCommandOutput,
  DeleteTieringConfigurationCommand,
} from "./commands/DeleteTieringConfigurationCommand";
import {
  type DescribeBackupJobCommandInput,
  type DescribeBackupJobCommandOutput,
  DescribeBackupJobCommand,
} from "./commands/DescribeBackupJobCommand";
import {
  type DescribeBackupVaultCommandInput,
  type DescribeBackupVaultCommandOutput,
  DescribeBackupVaultCommand,
} from "./commands/DescribeBackupVaultCommand";
import {
  type DescribeCopyJobCommandInput,
  type DescribeCopyJobCommandOutput,
  DescribeCopyJobCommand,
} from "./commands/DescribeCopyJobCommand";
import {
  type DescribeFrameworkCommandInput,
  type DescribeFrameworkCommandOutput,
  DescribeFrameworkCommand,
} from "./commands/DescribeFrameworkCommand";
import {
  type DescribeGlobalSettingsCommandInput,
  type DescribeGlobalSettingsCommandOutput,
  DescribeGlobalSettingsCommand,
} from "./commands/DescribeGlobalSettingsCommand";
import {
  type DescribeProtectedResourceCommandInput,
  type DescribeProtectedResourceCommandOutput,
  DescribeProtectedResourceCommand,
} from "./commands/DescribeProtectedResourceCommand";
import {
  type DescribeRecoveryPointCommandInput,
  type DescribeRecoveryPointCommandOutput,
  DescribeRecoveryPointCommand,
} from "./commands/DescribeRecoveryPointCommand";
import {
  type DescribeRegionSettingsCommandInput,
  type DescribeRegionSettingsCommandOutput,
  DescribeRegionSettingsCommand,
} from "./commands/DescribeRegionSettingsCommand";
import {
  type DescribeReportJobCommandInput,
  type DescribeReportJobCommandOutput,
  DescribeReportJobCommand,
} from "./commands/DescribeReportJobCommand";
import {
  type DescribeReportPlanCommandInput,
  type DescribeReportPlanCommandOutput,
  DescribeReportPlanCommand,
} from "./commands/DescribeReportPlanCommand";
import {
  type DescribeRestoreJobCommandInput,
  type DescribeRestoreJobCommandOutput,
  DescribeRestoreJobCommand,
} from "./commands/DescribeRestoreJobCommand";
import {
  type DescribeScanJobCommandInput,
  type DescribeScanJobCommandOutput,
  DescribeScanJobCommand,
} from "./commands/DescribeScanJobCommand";
import {
  type DisassociateBackupVaultMpaApprovalTeamCommandInput,
  type DisassociateBackupVaultMpaApprovalTeamCommandOutput,
  DisassociateBackupVaultMpaApprovalTeamCommand,
} from "./commands/DisassociateBackupVaultMpaApprovalTeamCommand";
import {
  type DisassociateRecoveryPointCommandInput,
  type DisassociateRecoveryPointCommandOutput,
  DisassociateRecoveryPointCommand,
} from "./commands/DisassociateRecoveryPointCommand";
import {
  type DisassociateRecoveryPointFromParentCommandInput,
  type DisassociateRecoveryPointFromParentCommandOutput,
  DisassociateRecoveryPointFromParentCommand,
} from "./commands/DisassociateRecoveryPointFromParentCommand";
import {
  type ExportBackupPlanTemplateCommandInput,
  type ExportBackupPlanTemplateCommandOutput,
  ExportBackupPlanTemplateCommand,
} from "./commands/ExportBackupPlanTemplateCommand";
import {
  type GetBackupPlanCommandInput,
  type GetBackupPlanCommandOutput,
  GetBackupPlanCommand,
} from "./commands/GetBackupPlanCommand";
import {
  type GetBackupPlanFromJSONCommandInput,
  type GetBackupPlanFromJSONCommandOutput,
  GetBackupPlanFromJSONCommand,
} from "./commands/GetBackupPlanFromJSONCommand";
import {
  type GetBackupPlanFromTemplateCommandInput,
  type GetBackupPlanFromTemplateCommandOutput,
  GetBackupPlanFromTemplateCommand,
} from "./commands/GetBackupPlanFromTemplateCommand";
import {
  type GetBackupSelectionCommandInput,
  type GetBackupSelectionCommandOutput,
  GetBackupSelectionCommand,
} from "./commands/GetBackupSelectionCommand";
import {
  type GetBackupVaultAccessPolicyCommandInput,
  type GetBackupVaultAccessPolicyCommandOutput,
  GetBackupVaultAccessPolicyCommand,
} from "./commands/GetBackupVaultAccessPolicyCommand";
import {
  type GetBackupVaultNotificationsCommandInput,
  type GetBackupVaultNotificationsCommandOutput,
  GetBackupVaultNotificationsCommand,
} from "./commands/GetBackupVaultNotificationsCommand";
import {
  type GetLegalHoldCommandInput,
  type GetLegalHoldCommandOutput,
  GetLegalHoldCommand,
} from "./commands/GetLegalHoldCommand";
import {
  type GetRecoveryPointIndexDetailsCommandInput,
  type GetRecoveryPointIndexDetailsCommandOutput,
  GetRecoveryPointIndexDetailsCommand,
} from "./commands/GetRecoveryPointIndexDetailsCommand";
import {
  type GetRecoveryPointRestoreMetadataCommandInput,
  type GetRecoveryPointRestoreMetadataCommandOutput,
  GetRecoveryPointRestoreMetadataCommand,
} from "./commands/GetRecoveryPointRestoreMetadataCommand";
import {
  type GetRestoreJobMetadataCommandInput,
  type GetRestoreJobMetadataCommandOutput,
  GetRestoreJobMetadataCommand,
} from "./commands/GetRestoreJobMetadataCommand";
import {
  type GetRestoreTestingInferredMetadataCommandInput,
  type GetRestoreTestingInferredMetadataCommandOutput,
  GetRestoreTestingInferredMetadataCommand,
} from "./commands/GetRestoreTestingInferredMetadataCommand";
import {
  type GetRestoreTestingPlanCommandInput,
  type GetRestoreTestingPlanCommandOutput,
  GetRestoreTestingPlanCommand,
} from "./commands/GetRestoreTestingPlanCommand";
import {
  type GetRestoreTestingSelectionCommandInput,
  type GetRestoreTestingSelectionCommandOutput,
  GetRestoreTestingSelectionCommand,
} from "./commands/GetRestoreTestingSelectionCommand";
import {
  type GetSupportedResourceTypesCommandInput,
  type GetSupportedResourceTypesCommandOutput,
  GetSupportedResourceTypesCommand,
} from "./commands/GetSupportedResourceTypesCommand";
import {
  type GetTieringConfigurationCommandInput,
  type GetTieringConfigurationCommandOutput,
  GetTieringConfigurationCommand,
} from "./commands/GetTieringConfigurationCommand";
import {
  type ListBackupJobsCommandInput,
  type ListBackupJobsCommandOutput,
  ListBackupJobsCommand,
} from "./commands/ListBackupJobsCommand";
import {
  type ListBackupJobSummariesCommandInput,
  type ListBackupJobSummariesCommandOutput,
  ListBackupJobSummariesCommand,
} from "./commands/ListBackupJobSummariesCommand";
import {
  type ListBackupPlansCommandInput,
  type ListBackupPlansCommandOutput,
  ListBackupPlansCommand,
} from "./commands/ListBackupPlansCommand";
import {
  type ListBackupPlanTemplatesCommandInput,
  type ListBackupPlanTemplatesCommandOutput,
  ListBackupPlanTemplatesCommand,
} from "./commands/ListBackupPlanTemplatesCommand";
import {
  type ListBackupPlanVersionsCommandInput,
  type ListBackupPlanVersionsCommandOutput,
  ListBackupPlanVersionsCommand,
} from "./commands/ListBackupPlanVersionsCommand";
import {
  type ListBackupSelectionsCommandInput,
  type ListBackupSelectionsCommandOutput,
  ListBackupSelectionsCommand,
} from "./commands/ListBackupSelectionsCommand";
import {
  type ListBackupVaultsCommandInput,
  type ListBackupVaultsCommandOutput,
  ListBackupVaultsCommand,
} from "./commands/ListBackupVaultsCommand";
import {
  type ListCopyJobsCommandInput,
  type ListCopyJobsCommandOutput,
  ListCopyJobsCommand,
} from "./commands/ListCopyJobsCommand";
import {
  type ListCopyJobSummariesCommandInput,
  type ListCopyJobSummariesCommandOutput,
  ListCopyJobSummariesCommand,
} from "./commands/ListCopyJobSummariesCommand";
import {
  type ListFrameworksCommandInput,
  type ListFrameworksCommandOutput,
  ListFrameworksCommand,
} from "./commands/ListFrameworksCommand";
import {
  type ListIndexedRecoveryPointsCommandInput,
  type ListIndexedRecoveryPointsCommandOutput,
  ListIndexedRecoveryPointsCommand,
} from "./commands/ListIndexedRecoveryPointsCommand";
import {
  type ListLegalHoldsCommandInput,
  type ListLegalHoldsCommandOutput,
  ListLegalHoldsCommand,
} from "./commands/ListLegalHoldsCommand";
import {
  type ListProtectedResourcesByBackupVaultCommandInput,
  type ListProtectedResourcesByBackupVaultCommandOutput,
  ListProtectedResourcesByBackupVaultCommand,
} from "./commands/ListProtectedResourcesByBackupVaultCommand";
import {
  type ListProtectedResourcesCommandInput,
  type ListProtectedResourcesCommandOutput,
  ListProtectedResourcesCommand,
} from "./commands/ListProtectedResourcesCommand";
import {
  type ListRecoveryPointsByBackupVaultCommandInput,
  type ListRecoveryPointsByBackupVaultCommandOutput,
  ListRecoveryPointsByBackupVaultCommand,
} from "./commands/ListRecoveryPointsByBackupVaultCommand";
import {
  type ListRecoveryPointsByLegalHoldCommandInput,
  type ListRecoveryPointsByLegalHoldCommandOutput,
  ListRecoveryPointsByLegalHoldCommand,
} from "./commands/ListRecoveryPointsByLegalHoldCommand";
import {
  type ListRecoveryPointsByResourceCommandInput,
  type ListRecoveryPointsByResourceCommandOutput,
  ListRecoveryPointsByResourceCommand,
} from "./commands/ListRecoveryPointsByResourceCommand";
import {
  type ListReportJobsCommandInput,
  type ListReportJobsCommandOutput,
  ListReportJobsCommand,
} from "./commands/ListReportJobsCommand";
import {
  type ListReportPlansCommandInput,
  type ListReportPlansCommandOutput,
  ListReportPlansCommand,
} from "./commands/ListReportPlansCommand";
import {
  type ListRestoreAccessBackupVaultsCommandInput,
  type ListRestoreAccessBackupVaultsCommandOutput,
  ListRestoreAccessBackupVaultsCommand,
} from "./commands/ListRestoreAccessBackupVaultsCommand";
import {
  type ListRestoreJobsByProtectedResourceCommandInput,
  type ListRestoreJobsByProtectedResourceCommandOutput,
  ListRestoreJobsByProtectedResourceCommand,
} from "./commands/ListRestoreJobsByProtectedResourceCommand";
import {
  type ListRestoreJobsCommandInput,
  type ListRestoreJobsCommandOutput,
  ListRestoreJobsCommand,
} from "./commands/ListRestoreJobsCommand";
import {
  type ListRestoreJobSummariesCommandInput,
  type ListRestoreJobSummariesCommandOutput,
  ListRestoreJobSummariesCommand,
} from "./commands/ListRestoreJobSummariesCommand";
import {
  type ListRestoreTestingPlansCommandInput,
  type ListRestoreTestingPlansCommandOutput,
  ListRestoreTestingPlansCommand,
} from "./commands/ListRestoreTestingPlansCommand";
import {
  type ListRestoreTestingSelectionsCommandInput,
  type ListRestoreTestingSelectionsCommandOutput,
  ListRestoreTestingSelectionsCommand,
} from "./commands/ListRestoreTestingSelectionsCommand";
import {
  type ListScanJobsCommandInput,
  type ListScanJobsCommandOutput,
  ListScanJobsCommand,
} from "./commands/ListScanJobsCommand";
import {
  type ListScanJobSummariesCommandInput,
  type ListScanJobSummariesCommandOutput,
  ListScanJobSummariesCommand,
} from "./commands/ListScanJobSummariesCommand";
import { type ListTagsCommandInput, type ListTagsCommandOutput, ListTagsCommand } from "./commands/ListTagsCommand";
import {
  type ListTieringConfigurationsCommandInput,
  type ListTieringConfigurationsCommandOutput,
  ListTieringConfigurationsCommand,
} from "./commands/ListTieringConfigurationsCommand";
import {
  type PutBackupVaultAccessPolicyCommandInput,
  type PutBackupVaultAccessPolicyCommandOutput,
  PutBackupVaultAccessPolicyCommand,
} from "./commands/PutBackupVaultAccessPolicyCommand";
import {
  type PutBackupVaultLockConfigurationCommandInput,
  type PutBackupVaultLockConfigurationCommandOutput,
  PutBackupVaultLockConfigurationCommand,
} from "./commands/PutBackupVaultLockConfigurationCommand";
import {
  type PutBackupVaultNotificationsCommandInput,
  type PutBackupVaultNotificationsCommandOutput,
  PutBackupVaultNotificationsCommand,
} from "./commands/PutBackupVaultNotificationsCommand";
import {
  type PutRestoreValidationResultCommandInput,
  type PutRestoreValidationResultCommandOutput,
  PutRestoreValidationResultCommand,
} from "./commands/PutRestoreValidationResultCommand";
import {
  type RevokeRestoreAccessBackupVaultCommandInput,
  type RevokeRestoreAccessBackupVaultCommandOutput,
  RevokeRestoreAccessBackupVaultCommand,
} from "./commands/RevokeRestoreAccessBackupVaultCommand";
import {
  type StartBackupJobCommandInput,
  type StartBackupJobCommandOutput,
  StartBackupJobCommand,
} from "./commands/StartBackupJobCommand";
import {
  type StartCopyJobCommandInput,
  type StartCopyJobCommandOutput,
  StartCopyJobCommand,
} from "./commands/StartCopyJobCommand";
import {
  type StartReportJobCommandInput,
  type StartReportJobCommandOutput,
  StartReportJobCommand,
} from "./commands/StartReportJobCommand";
import {
  type StartRestoreJobCommandInput,
  type StartRestoreJobCommandOutput,
  StartRestoreJobCommand,
} from "./commands/StartRestoreJobCommand";
import {
  type StartScanJobCommandInput,
  type StartScanJobCommandOutput,
  StartScanJobCommand,
} from "./commands/StartScanJobCommand";
import {
  type StopBackupJobCommandInput,
  type StopBackupJobCommandOutput,
  StopBackupJobCommand,
} from "./commands/StopBackupJobCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateBackupPlanCommandInput,
  type UpdateBackupPlanCommandOutput,
  UpdateBackupPlanCommand,
} from "./commands/UpdateBackupPlanCommand";
import {
  type UpdateFrameworkCommandInput,
  type UpdateFrameworkCommandOutput,
  UpdateFrameworkCommand,
} from "./commands/UpdateFrameworkCommand";
import {
  type UpdateGlobalSettingsCommandInput,
  type UpdateGlobalSettingsCommandOutput,
  UpdateGlobalSettingsCommand,
} from "./commands/UpdateGlobalSettingsCommand";
import {
  type UpdateRecoveryPointIndexSettingsCommandInput,
  type UpdateRecoveryPointIndexSettingsCommandOutput,
  UpdateRecoveryPointIndexSettingsCommand,
} from "./commands/UpdateRecoveryPointIndexSettingsCommand";
import {
  type UpdateRecoveryPointLifecycleCommandInput,
  type UpdateRecoveryPointLifecycleCommandOutput,
  UpdateRecoveryPointLifecycleCommand,
} from "./commands/UpdateRecoveryPointLifecycleCommand";
import {
  type UpdateRegionSettingsCommandInput,
  type UpdateRegionSettingsCommandOutput,
  UpdateRegionSettingsCommand,
} from "./commands/UpdateRegionSettingsCommand";
import {
  type UpdateReportPlanCommandInput,
  type UpdateReportPlanCommandOutput,
  UpdateReportPlanCommand,
} from "./commands/UpdateReportPlanCommand";
import {
  type UpdateRestoreTestingPlanCommandInput,
  type UpdateRestoreTestingPlanCommandOutput,
  UpdateRestoreTestingPlanCommand,
} from "./commands/UpdateRestoreTestingPlanCommand";
import {
  type UpdateRestoreTestingSelectionCommandInput,
  type UpdateRestoreTestingSelectionCommandOutput,
  UpdateRestoreTestingSelectionCommand,
} from "./commands/UpdateRestoreTestingSelectionCommand";
import {
  type UpdateTieringConfigurationCommandInput,
  type UpdateTieringConfigurationCommandOutput,
  UpdateTieringConfigurationCommand,
} from "./commands/UpdateTieringConfigurationCommand";
import { paginateListBackupJobs } from "./pagination/ListBackupJobsPaginator";
import { paginateListBackupJobSummaries } from "./pagination/ListBackupJobSummariesPaginator";
import { paginateListBackupPlans } from "./pagination/ListBackupPlansPaginator";
import { paginateListBackupPlanTemplates } from "./pagination/ListBackupPlanTemplatesPaginator";
import { paginateListBackupPlanVersions } from "./pagination/ListBackupPlanVersionsPaginator";
import { paginateListBackupSelections } from "./pagination/ListBackupSelectionsPaginator";
import { paginateListBackupVaults } from "./pagination/ListBackupVaultsPaginator";
import { paginateListCopyJobs } from "./pagination/ListCopyJobsPaginator";
import { paginateListCopyJobSummaries } from "./pagination/ListCopyJobSummariesPaginator";
import { paginateListFrameworks } from "./pagination/ListFrameworksPaginator";
import { paginateListIndexedRecoveryPoints } from "./pagination/ListIndexedRecoveryPointsPaginator";
import { paginateListLegalHolds } from "./pagination/ListLegalHoldsPaginator";
import { paginateListProtectedResourcesByBackupVault } from "./pagination/ListProtectedResourcesByBackupVaultPaginator";
import { paginateListProtectedResources } from "./pagination/ListProtectedResourcesPaginator";
import { paginateListRecoveryPointsByBackupVault } from "./pagination/ListRecoveryPointsByBackupVaultPaginator";
import { paginateListRecoveryPointsByLegalHold } from "./pagination/ListRecoveryPointsByLegalHoldPaginator";
import { paginateListRecoveryPointsByResource } from "./pagination/ListRecoveryPointsByResourcePaginator";
import { paginateListReportJobs } from "./pagination/ListReportJobsPaginator";
import { paginateListReportPlans } from "./pagination/ListReportPlansPaginator";
import { paginateListRestoreAccessBackupVaults } from "./pagination/ListRestoreAccessBackupVaultsPaginator";
import { paginateListRestoreJobsByProtectedResource } from "./pagination/ListRestoreJobsByProtectedResourcePaginator";
import { paginateListRestoreJobs } from "./pagination/ListRestoreJobsPaginator";
import { paginateListRestoreJobSummaries } from "./pagination/ListRestoreJobSummariesPaginator";
import { paginateListRestoreTestingPlans } from "./pagination/ListRestoreTestingPlansPaginator";
import { paginateListRestoreTestingSelections } from "./pagination/ListRestoreTestingSelectionsPaginator";
import { paginateListScanJobs } from "./pagination/ListScanJobsPaginator";
import { paginateListScanJobSummaries } from "./pagination/ListScanJobSummariesPaginator";
import { paginateListTags } from "./pagination/ListTagsPaginator";
import { paginateListTieringConfigurations } from "./pagination/ListTieringConfigurationsPaginator";

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
const paginators = {
  paginateListBackupJobs,
  paginateListBackupJobSummaries,
  paginateListBackupPlans,
  paginateListBackupPlanTemplates,
  paginateListBackupPlanVersions,
  paginateListBackupSelections,
  paginateListBackupVaults,
  paginateListCopyJobs,
  paginateListCopyJobSummaries,
  paginateListFrameworks,
  paginateListIndexedRecoveryPoints,
  paginateListLegalHolds,
  paginateListProtectedResources,
  paginateListProtectedResourcesByBackupVault,
  paginateListRecoveryPointsByBackupVault,
  paginateListRecoveryPointsByLegalHold,
  paginateListRecoveryPointsByResource,
  paginateListReportJobs,
  paginateListReportPlans,
  paginateListRestoreAccessBackupVaults,
  paginateListRestoreJobs,
  paginateListRestoreJobsByProtectedResource,
  paginateListRestoreJobSummaries,
  paginateListRestoreTestingPlans,
  paginateListRestoreTestingSelections,
  paginateListScanJobs,
  paginateListScanJobSummaries,
  paginateListTags,
  paginateListTieringConfigurations,
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
  cancelLegalHold(
    args: CancelLegalHoldCommandInput,
    cb: (err: any, data?: CancelLegalHoldCommandOutput) => void
  ): void;
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
  createFramework(
    args: CreateFrameworkCommandInput,
    cb: (err: any, data?: CreateFrameworkCommandOutput) => void
  ): void;
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
  createLegalHold(
    args: CreateLegalHoldCommandInput,
    cb: (err: any, data?: CreateLegalHoldCommandOutput) => void
  ): void;
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
  deleteFramework(
    args: DeleteFrameworkCommandInput,
    cb: (err: any, data?: DeleteFrameworkCommandOutput) => void
  ): void;
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
  describeCopyJob(
    args: DescribeCopyJobCommandInput,
    cb: (err: any, data?: DescribeCopyJobCommandOutput) => void
  ): void;
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
  describeScanJob(
    args: DescribeScanJobCommandInput,
    cb: (err: any, data?: DescribeScanJobCommandOutput) => void
  ): void;
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
  getBackupPlan(
    args: GetBackupPlanCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetBackupPlanCommandOutput>;
  getBackupPlan(
    args: GetBackupPlanCommandInput,
    cb: (err: any, data?: GetBackupPlanCommandOutput) => void
  ): void;
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
  getLegalHold(
    args: GetLegalHoldCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLegalHoldCommandOutput>;
  getLegalHold(
    args: GetLegalHoldCommandInput,
    cb: (err: any, data?: GetLegalHoldCommandOutput) => void
  ): void;
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
  listBackupJobs(
    args: ListBackupJobsCommandInput,
    cb: (err: any, data?: ListBackupJobsCommandOutput) => void
  ): void;
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
  listBackupPlans(
    args: ListBackupPlansCommandInput,
    cb: (err: any, data?: ListBackupPlansCommandOutput) => void
  ): void;
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
  listCopyJobs(
    args: ListCopyJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCopyJobsCommandOutput>;
  listCopyJobs(
    args: ListCopyJobsCommandInput,
    cb: (err: any, data?: ListCopyJobsCommandOutput) => void
  ): void;
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
  listFrameworks(
    args: ListFrameworksCommandInput,
    cb: (err: any, data?: ListFrameworksCommandOutput) => void
  ): void;
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
  listLegalHolds(
    args: ListLegalHoldsCommandInput,
    cb: (err: any, data?: ListLegalHoldsCommandOutput) => void
  ): void;
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
  listReportJobs(
    args: ListReportJobsCommandInput,
    cb: (err: any, data?: ListReportJobsCommandOutput) => void
  ): void;
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
  listReportPlans(
    args: ListReportPlansCommandInput,
    cb: (err: any, data?: ListReportPlansCommandOutput) => void
  ): void;
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
  listRestoreJobs(
    args: ListRestoreJobsCommandInput,
    cb: (err: any, data?: ListRestoreJobsCommandOutput) => void
  ): void;
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
  listScanJobs(
    args: ListScanJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListScanJobsCommandOutput>;
  listScanJobs(
    args: ListScanJobsCommandInput,
    cb: (err: any, data?: ListScanJobsCommandOutput) => void
  ): void;
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
  listTags(
    args: ListTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsCommandOutput>;
  listTags(
    args: ListTagsCommandInput,
    cb: (err: any, data?: ListTagsCommandOutput) => void
  ): void;
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
  startBackupJob(
    args: StartBackupJobCommandInput,
    cb: (err: any, data?: StartBackupJobCommandOutput) => void
  ): void;
  startBackupJob(
    args: StartBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartBackupJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartCopyJobCommand}
   */
  startCopyJob(
    args: StartCopyJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCopyJobCommandOutput>;
  startCopyJob(
    args: StartCopyJobCommandInput,
    cb: (err: any, data?: StartCopyJobCommandOutput) => void
  ): void;
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
  startReportJob(
    args: StartReportJobCommandInput,
    cb: (err: any, data?: StartReportJobCommandOutput) => void
  ): void;
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
  startRestoreJob(
    args: StartRestoreJobCommandInput,
    cb: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): void;
  startRestoreJob(
    args: StartRestoreJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartRestoreJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StartScanJobCommand}
   */
  startScanJob(
    args: StartScanJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartScanJobCommandOutput>;
  startScanJob(
    args: StartScanJobCommandInput,
    cb: (err: any, data?: StartScanJobCommandOutput) => void
  ): void;
  startScanJob(
    args: StartScanJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartScanJobCommandOutput) => void
  ): void;

  /**
   * @see {@link StopBackupJobCommand}
   */
  stopBackupJob(
    args: StopBackupJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopBackupJobCommandOutput>;
  stopBackupJob(
    args: StopBackupJobCommandInput,
    cb: (err: any, data?: StopBackupJobCommandOutput) => void
  ): void;
  stopBackupJob(
    args: StopBackupJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopBackupJobCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
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
  updateFramework(
    args: UpdateFrameworkCommandInput,
    cb: (err: any, data?: UpdateFrameworkCommandOutput) => void
  ): void;
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

  /**
   * @see {@link ListBackupJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupJobsCommandOutput}.
   */
  paginateListBackupJobs(
    args?: ListBackupJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupJobsCommandOutput>;

  /**
   * @see {@link ListBackupJobSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupJobSummariesCommandOutput}.
   */
  paginateListBackupJobSummaries(
    args?: ListBackupJobSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupJobSummariesCommandOutput>;

  /**
   * @see {@link ListBackupPlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupPlansCommandOutput}.
   */
  paginateListBackupPlans(
    args?: ListBackupPlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupPlansCommandOutput>;

  /**
   * @see {@link ListBackupPlanTemplatesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupPlanTemplatesCommandOutput}.
   */
  paginateListBackupPlanTemplates(
    args?: ListBackupPlanTemplatesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupPlanTemplatesCommandOutput>;

  /**
   * @see {@link ListBackupPlanVersionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupPlanVersionsCommandOutput}.
   */
  paginateListBackupPlanVersions(
    args: ListBackupPlanVersionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupPlanVersionsCommandOutput>;

  /**
   * @see {@link ListBackupSelectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupSelectionsCommandOutput}.
   */
  paginateListBackupSelections(
    args: ListBackupSelectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupSelectionsCommandOutput>;

  /**
   * @see {@link ListBackupVaultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListBackupVaultsCommandOutput}.
   */
  paginateListBackupVaults(
    args?: ListBackupVaultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListBackupVaultsCommandOutput>;

  /**
   * @see {@link ListCopyJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCopyJobsCommandOutput}.
   */
  paginateListCopyJobs(
    args?: ListCopyJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCopyJobsCommandOutput>;

  /**
   * @see {@link ListCopyJobSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListCopyJobSummariesCommandOutput}.
   */
  paginateListCopyJobSummaries(
    args?: ListCopyJobSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListCopyJobSummariesCommandOutput>;

  /**
   * @see {@link ListFrameworksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFrameworksCommandOutput}.
   */
  paginateListFrameworks(
    args?: ListFrameworksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFrameworksCommandOutput>;

  /**
   * @see {@link ListIndexedRecoveryPointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListIndexedRecoveryPointsCommandOutput}.
   */
  paginateListIndexedRecoveryPoints(
    args?: ListIndexedRecoveryPointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListIndexedRecoveryPointsCommandOutput>;

  /**
   * @see {@link ListLegalHoldsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLegalHoldsCommandOutput}.
   */
  paginateListLegalHolds(
    args?: ListLegalHoldsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLegalHoldsCommandOutput>;

  /**
   * @see {@link ListProtectedResourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectedResourcesCommandOutput}.
   */
  paginateListProtectedResources(
    args?: ListProtectedResourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectedResourcesCommandOutput>;

  /**
   * @see {@link ListProtectedResourcesByBackupVaultCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListProtectedResourcesByBackupVaultCommandOutput}.
   */
  paginateListProtectedResourcesByBackupVault(
    args: ListProtectedResourcesByBackupVaultCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListProtectedResourcesByBackupVaultCommandOutput>;

  /**
   * @see {@link ListRecoveryPointsByBackupVaultCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPointsByBackupVaultCommandOutput}.
   */
  paginateListRecoveryPointsByBackupVault(
    args: ListRecoveryPointsByBackupVaultCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPointsByBackupVaultCommandOutput>;

  /**
   * @see {@link ListRecoveryPointsByLegalHoldCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPointsByLegalHoldCommandOutput}.
   */
  paginateListRecoveryPointsByLegalHold(
    args: ListRecoveryPointsByLegalHoldCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPointsByLegalHoldCommandOutput>;

  /**
   * @see {@link ListRecoveryPointsByResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRecoveryPointsByResourceCommandOutput}.
   */
  paginateListRecoveryPointsByResource(
    args: ListRecoveryPointsByResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRecoveryPointsByResourceCommandOutput>;

  /**
   * @see {@link ListReportJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportJobsCommandOutput}.
   */
  paginateListReportJobs(
    args?: ListReportJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportJobsCommandOutput>;

  /**
   * @see {@link ListReportPlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListReportPlansCommandOutput}.
   */
  paginateListReportPlans(
    args?: ListReportPlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListReportPlansCommandOutput>;

  /**
   * @see {@link ListRestoreAccessBackupVaultsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreAccessBackupVaultsCommandOutput}.
   */
  paginateListRestoreAccessBackupVaults(
    args: ListRestoreAccessBackupVaultsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreAccessBackupVaultsCommandOutput>;

  /**
   * @see {@link ListRestoreJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreJobsCommandOutput}.
   */
  paginateListRestoreJobs(
    args?: ListRestoreJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreJobsCommandOutput>;

  /**
   * @see {@link ListRestoreJobsByProtectedResourceCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreJobsByProtectedResourceCommandOutput}.
   */
  paginateListRestoreJobsByProtectedResource(
    args: ListRestoreJobsByProtectedResourceCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreJobsByProtectedResourceCommandOutput>;

  /**
   * @see {@link ListRestoreJobSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreJobSummariesCommandOutput}.
   */
  paginateListRestoreJobSummaries(
    args?: ListRestoreJobSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreJobSummariesCommandOutput>;

  /**
   * @see {@link ListRestoreTestingPlansCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreTestingPlansCommandOutput}.
   */
  paginateListRestoreTestingPlans(
    args?: ListRestoreTestingPlansCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreTestingPlansCommandOutput>;

  /**
   * @see {@link ListRestoreTestingSelectionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRestoreTestingSelectionsCommandOutput}.
   */
  paginateListRestoreTestingSelections(
    args: ListRestoreTestingSelectionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRestoreTestingSelectionsCommandOutput>;

  /**
   * @see {@link ListScanJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScanJobsCommandOutput}.
   */
  paginateListScanJobs(
    args?: ListScanJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScanJobsCommandOutput>;

  /**
   * @see {@link ListScanJobSummariesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListScanJobSummariesCommandOutput}.
   */
  paginateListScanJobSummaries(
    args?: ListScanJobSummariesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListScanJobSummariesCommandOutput>;

  /**
   * @see {@link ListTagsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTagsCommandOutput}.
   */
  paginateListTags(
    args: ListTagsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTagsCommandOutput>;

  /**
   * @see {@link ListTieringConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListTieringConfigurationsCommandOutput}.
   */
  paginateListTieringConfigurations(
    args?: ListTieringConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListTieringConfigurationsCommandOutput>;
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
createAggregatedClient(commands, Backup, { paginators });
