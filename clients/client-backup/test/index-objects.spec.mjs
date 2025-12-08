import {
  AggregationPeriod,
  AlreadyExistsException,
  AssociateBackupVaultMpaApprovalTeamCommand,
  Backup,
  BackupClient,
  BackupJobState,
  BackupJobStatus,
  BackupServiceException,
  BackupVaultEvent,
  CancelLegalHoldCommand,
  ConditionType,
  ConflictException,
  CopyJobState,
  CopyJobStatus,
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
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultCommand,
  DeleteBackupVaultLockConfigurationCommand,
  DeleteBackupVaultNotificationsCommand,
  DeleteFrameworkCommand,
  DeleteRecoveryPointCommand,
  DeleteReportPlanCommand,
  DeleteRestoreTestingPlanCommand,
  DeleteRestoreTestingSelectionCommand,
  DeleteTieringConfigurationCommand,
  DependencyFailureException,
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
  EncryptionKeyType,
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
  Index,
  IndexStatus,
  InvalidParameterValueException,
  InvalidRequestException,
  InvalidResourceStateException,
  LegalHoldStatus,
  LifecycleDeleteAfterEvent,
  LimitExceededException,
  ListBackupJobSummariesCommand,
  ListBackupJobsCommand,
  ListBackupPlanTemplatesCommand,
  ListBackupPlanVersionsCommand,
  ListBackupPlansCommand,
  ListBackupSelectionsCommand,
  ListBackupVaultsCommand,
  ListCopyJobSummariesCommand,
  ListCopyJobsCommand,
  ListFrameworksCommand,
  ListIndexedRecoveryPointsCommand,
  ListLegalHoldsCommand,
  ListProtectedResourcesByBackupVaultCommand,
  ListProtectedResourcesCommand,
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByResourceCommand,
  ListReportJobsCommand,
  ListReportPlansCommand,
  ListRestoreAccessBackupVaultsCommand,
  ListRestoreJobSummariesCommand,
  ListRestoreJobsByProtectedResourceCommand,
  ListRestoreJobsCommand,
  ListRestoreTestingPlansCommand,
  ListRestoreTestingSelectionsCommand,
  ListScanJobSummariesCommand,
  ListScanJobsCommand,
  ListTagsCommand,
  ListTieringConfigurationsCommand,
  MalwareScanner,
  MissingParameterValueException,
  MpaRevokeSessionStatus,
  MpaSessionStatus,
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultLockConfigurationCommand,
  PutBackupVaultNotificationsCommand,
  PutRestoreValidationResultCommand,
  RecoveryPointStatus,
  ResourceNotFoundException,
  RestoreDeletionStatus,
  RestoreJobState,
  RestoreJobStatus,
  RestoreTestingRecoveryPointSelectionAlgorithm,
  RestoreTestingRecoveryPointType,
  RestoreValidationStatus,
  RevokeRestoreAccessBackupVaultCommand,
  RuleExecutionType,
  ScanFinding,
  ScanJobState,
  ScanJobStatus,
  ScanMode,
  ScanResourceType,
  ScanResultStatus,
  ScanState,
  ServiceUnavailableException,
  StartBackupJobCommand,
  StartCopyJobCommand,
  StartReportJobCommand,
  StartRestoreJobCommand,
  StartScanJobCommand,
  StopBackupJobCommand,
  StorageClass,
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
  VaultState,
  VaultType,
  paginateListBackupJobSummaries,
  paginateListBackupJobs,
  paginateListBackupPlanTemplates,
  paginateListBackupPlanVersions,
  paginateListBackupPlans,
  paginateListBackupSelections,
  paginateListBackupVaults,
  paginateListCopyJobSummaries,
  paginateListCopyJobs,
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
  paginateListRestoreJobSummaries,
  paginateListRestoreJobs,
  paginateListRestoreJobsByProtectedResource,
  paginateListRestoreTestingPlans,
  paginateListRestoreTestingSelections,
  paginateListScanJobSummaries,
  paginateListScanJobs,
  paginateListTags,
  paginateListTieringConfigurations,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof BackupClient === "function");
assert(typeof Backup === "function");
// commands
assert(typeof AssociateBackupVaultMpaApprovalTeamCommand === "function");
assert(typeof CancelLegalHoldCommand === "function");
assert(typeof CreateBackupPlanCommand === "function");
assert(typeof CreateBackupSelectionCommand === "function");
assert(typeof CreateBackupVaultCommand === "function");
assert(typeof CreateFrameworkCommand === "function");
assert(typeof CreateLegalHoldCommand === "function");
assert(typeof CreateLogicallyAirGappedBackupVaultCommand === "function");
assert(typeof CreateReportPlanCommand === "function");
assert(typeof CreateRestoreAccessBackupVaultCommand === "function");
assert(typeof CreateRestoreTestingPlanCommand === "function");
assert(typeof CreateRestoreTestingSelectionCommand === "function");
assert(typeof CreateTieringConfigurationCommand === "function");
assert(typeof DeleteBackupPlanCommand === "function");
assert(typeof DeleteBackupSelectionCommand === "function");
assert(typeof DeleteBackupVaultCommand === "function");
assert(typeof DeleteBackupVaultAccessPolicyCommand === "function");
assert(typeof DeleteBackupVaultLockConfigurationCommand === "function");
assert(typeof DeleteBackupVaultNotificationsCommand === "function");
assert(typeof DeleteFrameworkCommand === "function");
assert(typeof DeleteRecoveryPointCommand === "function");
assert(typeof DeleteReportPlanCommand === "function");
assert(typeof DeleteRestoreTestingPlanCommand === "function");
assert(typeof DeleteRestoreTestingSelectionCommand === "function");
assert(typeof DeleteTieringConfigurationCommand === "function");
assert(typeof DescribeBackupJobCommand === "function");
assert(typeof DescribeBackupVaultCommand === "function");
assert(typeof DescribeCopyJobCommand === "function");
assert(typeof DescribeFrameworkCommand === "function");
assert(typeof DescribeGlobalSettingsCommand === "function");
assert(typeof DescribeProtectedResourceCommand === "function");
assert(typeof DescribeRecoveryPointCommand === "function");
assert(typeof DescribeRegionSettingsCommand === "function");
assert(typeof DescribeReportJobCommand === "function");
assert(typeof DescribeReportPlanCommand === "function");
assert(typeof DescribeRestoreJobCommand === "function");
assert(typeof DescribeScanJobCommand === "function");
assert(typeof DisassociateBackupVaultMpaApprovalTeamCommand === "function");
assert(typeof DisassociateRecoveryPointCommand === "function");
assert(typeof DisassociateRecoveryPointFromParentCommand === "function");
assert(typeof ExportBackupPlanTemplateCommand === "function");
assert(typeof GetBackupPlanCommand === "function");
assert(typeof GetBackupPlanFromJSONCommand === "function");
assert(typeof GetBackupPlanFromTemplateCommand === "function");
assert(typeof GetBackupSelectionCommand === "function");
assert(typeof GetBackupVaultAccessPolicyCommand === "function");
assert(typeof GetBackupVaultNotificationsCommand === "function");
assert(typeof GetLegalHoldCommand === "function");
assert(typeof GetRecoveryPointIndexDetailsCommand === "function");
assert(typeof GetRecoveryPointRestoreMetadataCommand === "function");
assert(typeof GetRestoreJobMetadataCommand === "function");
assert(typeof GetRestoreTestingInferredMetadataCommand === "function");
assert(typeof GetRestoreTestingPlanCommand === "function");
assert(typeof GetRestoreTestingSelectionCommand === "function");
assert(typeof GetSupportedResourceTypesCommand === "function");
assert(typeof GetTieringConfigurationCommand === "function");
assert(typeof ListBackupJobsCommand === "function");
assert(typeof ListBackupJobSummariesCommand === "function");
assert(typeof ListBackupPlansCommand === "function");
assert(typeof ListBackupPlanTemplatesCommand === "function");
assert(typeof ListBackupPlanVersionsCommand === "function");
assert(typeof ListBackupSelectionsCommand === "function");
assert(typeof ListBackupVaultsCommand === "function");
assert(typeof ListCopyJobsCommand === "function");
assert(typeof ListCopyJobSummariesCommand === "function");
assert(typeof ListFrameworksCommand === "function");
assert(typeof ListIndexedRecoveryPointsCommand === "function");
assert(typeof ListLegalHoldsCommand === "function");
assert(typeof ListProtectedResourcesCommand === "function");
assert(typeof ListProtectedResourcesByBackupVaultCommand === "function");
assert(typeof ListRecoveryPointsByBackupVaultCommand === "function");
assert(typeof ListRecoveryPointsByLegalHoldCommand === "function");
assert(typeof ListRecoveryPointsByResourceCommand === "function");
assert(typeof ListReportJobsCommand === "function");
assert(typeof ListReportPlansCommand === "function");
assert(typeof ListRestoreAccessBackupVaultsCommand === "function");
assert(typeof ListRestoreJobsCommand === "function");
assert(typeof ListRestoreJobsByProtectedResourceCommand === "function");
assert(typeof ListRestoreJobSummariesCommand === "function");
assert(typeof ListRestoreTestingPlansCommand === "function");
assert(typeof ListRestoreTestingSelectionsCommand === "function");
assert(typeof ListScanJobsCommand === "function");
assert(typeof ListScanJobSummariesCommand === "function");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTieringConfigurationsCommand === "function");
assert(typeof PutBackupVaultAccessPolicyCommand === "function");
assert(typeof PutBackupVaultLockConfigurationCommand === "function");
assert(typeof PutBackupVaultNotificationsCommand === "function");
assert(typeof PutRestoreValidationResultCommand === "function");
assert(typeof RevokeRestoreAccessBackupVaultCommand === "function");
assert(typeof StartBackupJobCommand === "function");
assert(typeof StartCopyJobCommand === "function");
assert(typeof StartReportJobCommand === "function");
assert(typeof StartRestoreJobCommand === "function");
assert(typeof StartScanJobCommand === "function");
assert(typeof StopBackupJobCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateBackupPlanCommand === "function");
assert(typeof UpdateFrameworkCommand === "function");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdateRecoveryPointIndexSettingsCommand === "function");
assert(typeof UpdateRecoveryPointLifecycleCommand === "function");
assert(typeof UpdateRegionSettingsCommand === "function");
assert(typeof UpdateReportPlanCommand === "function");
assert(typeof UpdateRestoreTestingPlanCommand === "function");
assert(typeof UpdateRestoreTestingSelectionCommand === "function");
assert(typeof UpdateTieringConfigurationCommand === "function");
// enums
assert(typeof AggregationPeriod === "object");
assert(typeof BackupJobState === "object");
assert(typeof BackupJobStatus === "object");
assert(typeof BackupVaultEvent === "object");
assert(typeof ConditionType === "object");
assert(typeof CopyJobState === "object");
assert(typeof CopyJobStatus === "object");
assert(typeof EncryptionKeyType === "object");
assert(typeof Index === "object");
assert(typeof IndexStatus === "object");
assert(typeof LegalHoldStatus === "object");
assert(typeof LifecycleDeleteAfterEvent === "object");
assert(typeof MalwareScanner === "object");
assert(typeof MpaRevokeSessionStatus === "object");
assert(typeof MpaSessionStatus === "object");
assert(typeof RecoveryPointStatus === "object");
assert(typeof RestoreDeletionStatus === "object");
assert(typeof RestoreJobState === "object");
assert(typeof RestoreJobStatus === "object");
assert(typeof RestoreTestingRecoveryPointSelectionAlgorithm === "object");
assert(typeof RestoreTestingRecoveryPointType === "object");
assert(typeof RestoreValidationStatus === "object");
assert(typeof RuleExecutionType === "object");
assert(typeof ScanFinding === "object");
assert(typeof ScanJobState === "object");
assert(typeof ScanJobStatus === "object");
assert(typeof ScanMode === "object");
assert(typeof ScanResourceType === "object");
assert(typeof ScanResultStatus === "object");
assert(typeof ScanState === "object");
assert(typeof StorageClass === "object");
assert(typeof VaultState === "object");
assert(typeof VaultType === "object");
// errors
assert(AlreadyExistsException.prototype instanceof BackupServiceException);
assert(ConflictException.prototype instanceof BackupServiceException);
assert(DependencyFailureException.prototype instanceof BackupServiceException);
assert(InvalidParameterValueException.prototype instanceof BackupServiceException);
assert(InvalidRequestException.prototype instanceof BackupServiceException);
assert(InvalidResourceStateException.prototype instanceof BackupServiceException);
assert(LimitExceededException.prototype instanceof BackupServiceException);
assert(MissingParameterValueException.prototype instanceof BackupServiceException);
assert(ResourceNotFoundException.prototype instanceof BackupServiceException);
assert(ServiceUnavailableException.prototype instanceof BackupServiceException);
assert(BackupServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListBackupJobSummaries === "function");
assert(typeof paginateListBackupJobs === "function");
assert(typeof paginateListBackupPlanTemplates === "function");
assert(typeof paginateListBackupPlanVersions === "function");
assert(typeof paginateListBackupPlans === "function");
assert(typeof paginateListBackupSelections === "function");
assert(typeof paginateListBackupVaults === "function");
assert(typeof paginateListCopyJobSummaries === "function");
assert(typeof paginateListCopyJobs === "function");
assert(typeof paginateListFrameworks === "function");
assert(typeof paginateListIndexedRecoveryPoints === "function");
assert(typeof paginateListLegalHolds === "function");
assert(typeof paginateListProtectedResources === "function");
assert(typeof paginateListProtectedResourcesByBackupVault === "function");
assert(typeof paginateListRecoveryPointsByBackupVault === "function");
assert(typeof paginateListRecoveryPointsByLegalHold === "function");
assert(typeof paginateListRecoveryPointsByResource === "function");
assert(typeof paginateListReportJobs === "function");
assert(typeof paginateListReportPlans === "function");
assert(typeof paginateListRestoreAccessBackupVaults === "function");
assert(typeof paginateListRestoreJobSummaries === "function");
assert(typeof paginateListRestoreJobs === "function");
assert(typeof paginateListRestoreJobsByProtectedResource === "function");
assert(typeof paginateListRestoreTestingPlans === "function");
assert(typeof paginateListRestoreTestingSelections === "function");
assert(typeof paginateListScanJobSummaries === "function");
assert(typeof paginateListScanJobs === "function");
assert(typeof paginateListTags === "function");
assert(typeof paginateListTieringConfigurations === "function");
console.log(`Backup index test passed.`);
