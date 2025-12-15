import {
  AdvancedBackupSetting$,
  AggregatedScanResult$,
  AggregationPeriod,
  AlreadyExistsException,
  AlreadyExistsException$,
  AssociateBackupVaultMpaApprovalTeam$,
  AssociateBackupVaultMpaApprovalTeamCommand,
  AssociateBackupVaultMpaApprovalTeamInput$,
  Backup,
  BackupClient,
  BackupJob$,
  BackupJobState,
  BackupJobStatus,
  BackupJobSummary$,
  BackupPlan$,
  BackupPlanInput$,
  BackupPlanTemplatesListMember$,
  BackupPlansListMember$,
  BackupRule$,
  BackupRuleInput$,
  BackupSelection$,
  BackupSelectionsListMember$,
  BackupServiceException,
  BackupVaultEvent,
  BackupVaultListMember$,
  CalculatedLifecycle$,
  CancelLegalHold$,
  CancelLegalHoldCommand,
  CancelLegalHoldInput$,
  CancelLegalHoldOutput$,
  Condition$,
  ConditionParameter$,
  ConditionType,
  Conditions$,
  ConflictException,
  ConflictException$,
  ControlInputParameter$,
  ControlScope$,
  CopyAction$,
  CopyJob$,
  CopyJobState,
  CopyJobStatus,
  CopyJobSummary$,
  CreateBackupPlan$,
  CreateBackupPlanCommand,
  CreateBackupPlanInput$,
  CreateBackupPlanOutput$,
  CreateBackupSelection$,
  CreateBackupSelectionCommand,
  CreateBackupSelectionInput$,
  CreateBackupSelectionOutput$,
  CreateBackupVault$,
  CreateBackupVaultCommand,
  CreateBackupVaultInput$,
  CreateBackupVaultOutput$,
  CreateFramework$,
  CreateFrameworkCommand,
  CreateFrameworkInput$,
  CreateFrameworkOutput$,
  CreateLegalHold$,
  CreateLegalHoldCommand,
  CreateLegalHoldInput$,
  CreateLegalHoldOutput$,
  CreateLogicallyAirGappedBackupVault$,
  CreateLogicallyAirGappedBackupVaultCommand,
  CreateLogicallyAirGappedBackupVaultInput$,
  CreateLogicallyAirGappedBackupVaultOutput$,
  CreateReportPlan$,
  CreateReportPlanCommand,
  CreateReportPlanInput$,
  CreateReportPlanOutput$,
  CreateRestoreAccessBackupVault$,
  CreateRestoreAccessBackupVaultCommand,
  CreateRestoreAccessBackupVaultInput$,
  CreateRestoreAccessBackupVaultOutput$,
  CreateRestoreTestingPlan$,
  CreateRestoreTestingPlanCommand,
  CreateRestoreTestingPlanInput$,
  CreateRestoreTestingPlanOutput$,
  CreateRestoreTestingSelection$,
  CreateRestoreTestingSelectionCommand,
  CreateRestoreTestingSelectionInput$,
  CreateRestoreTestingSelectionOutput$,
  CreateTieringConfiguration$,
  CreateTieringConfigurationCommand,
  CreateTieringConfigurationInput$,
  CreateTieringConfigurationOutput$,
  DateRange$,
  DeleteBackupPlan$,
  DeleteBackupPlanCommand,
  DeleteBackupPlanInput$,
  DeleteBackupPlanOutput$,
  DeleteBackupSelection$,
  DeleteBackupSelectionCommand,
  DeleteBackupSelectionInput$,
  DeleteBackupVault$,
  DeleteBackupVaultAccessPolicy$,
  DeleteBackupVaultAccessPolicyCommand,
  DeleteBackupVaultAccessPolicyInput$,
  DeleteBackupVaultCommand,
  DeleteBackupVaultInput$,
  DeleteBackupVaultLockConfiguration$,
  DeleteBackupVaultLockConfigurationCommand,
  DeleteBackupVaultLockConfigurationInput$,
  DeleteBackupVaultNotifications$,
  DeleteBackupVaultNotificationsCommand,
  DeleteBackupVaultNotificationsInput$,
  DeleteFramework$,
  DeleteFrameworkCommand,
  DeleteFrameworkInput$,
  DeleteRecoveryPoint$,
  DeleteRecoveryPointCommand,
  DeleteRecoveryPointInput$,
  DeleteReportPlan$,
  DeleteReportPlanCommand,
  DeleteReportPlanInput$,
  DeleteRestoreTestingPlan$,
  DeleteRestoreTestingPlanCommand,
  DeleteRestoreTestingPlanInput$,
  DeleteRestoreTestingSelection$,
  DeleteRestoreTestingSelectionCommand,
  DeleteRestoreTestingSelectionInput$,
  DeleteTieringConfiguration$,
  DeleteTieringConfigurationCommand,
  DeleteTieringConfigurationInput$,
  DeleteTieringConfigurationOutput$,
  DependencyFailureException,
  DependencyFailureException$,
  DescribeBackupJob$,
  DescribeBackupJobCommand,
  DescribeBackupJobInput$,
  DescribeBackupJobOutput$,
  DescribeBackupVault$,
  DescribeBackupVaultCommand,
  DescribeBackupVaultInput$,
  DescribeBackupVaultOutput$,
  DescribeCopyJob$,
  DescribeCopyJobCommand,
  DescribeCopyJobInput$,
  DescribeCopyJobOutput$,
  DescribeFramework$,
  DescribeFrameworkCommand,
  DescribeFrameworkInput$,
  DescribeFrameworkOutput$,
  DescribeGlobalSettings$,
  DescribeGlobalSettingsCommand,
  DescribeGlobalSettingsInput$,
  DescribeGlobalSettingsOutput$,
  DescribeProtectedResource$,
  DescribeProtectedResourceCommand,
  DescribeProtectedResourceInput$,
  DescribeProtectedResourceOutput$,
  DescribeRecoveryPoint$,
  DescribeRecoveryPointCommand,
  DescribeRecoveryPointInput$,
  DescribeRecoveryPointOutput$,
  DescribeRegionSettings$,
  DescribeRegionSettingsCommand,
  DescribeRegionSettingsInput$,
  DescribeRegionSettingsOutput$,
  DescribeReportJob$,
  DescribeReportJobCommand,
  DescribeReportJobInput$,
  DescribeReportJobOutput$,
  DescribeReportPlan$,
  DescribeReportPlanCommand,
  DescribeReportPlanInput$,
  DescribeReportPlanOutput$,
  DescribeRestoreJob$,
  DescribeRestoreJobCommand,
  DescribeRestoreJobInput$,
  DescribeRestoreJobOutput$,
  DescribeScanJob$,
  DescribeScanJobCommand,
  DescribeScanJobInput$,
  DescribeScanJobOutput$,
  DisassociateBackupVaultMpaApprovalTeam$,
  DisassociateBackupVaultMpaApprovalTeamCommand,
  DisassociateBackupVaultMpaApprovalTeamInput$,
  DisassociateRecoveryPoint$,
  DisassociateRecoveryPointCommand,
  DisassociateRecoveryPointFromParent$,
  DisassociateRecoveryPointFromParentCommand,
  DisassociateRecoveryPointFromParentInput$,
  DisassociateRecoveryPointInput$,
  EncryptionKeyType,
  ExportBackupPlanTemplate$,
  ExportBackupPlanTemplateCommand,
  ExportBackupPlanTemplateInput$,
  ExportBackupPlanTemplateOutput$,
  Framework$,
  FrameworkControl$,
  GetBackupPlan$,
  GetBackupPlanCommand,
  GetBackupPlanFromJSON$,
  GetBackupPlanFromJSONCommand,
  GetBackupPlanFromJSONInput$,
  GetBackupPlanFromJSONOutput$,
  GetBackupPlanFromTemplate$,
  GetBackupPlanFromTemplateCommand,
  GetBackupPlanFromTemplateInput$,
  GetBackupPlanFromTemplateOutput$,
  GetBackupPlanInput$,
  GetBackupPlanOutput$,
  GetBackupSelection$,
  GetBackupSelectionCommand,
  GetBackupSelectionInput$,
  GetBackupSelectionOutput$,
  GetBackupVaultAccessPolicy$,
  GetBackupVaultAccessPolicyCommand,
  GetBackupVaultAccessPolicyInput$,
  GetBackupVaultAccessPolicyOutput$,
  GetBackupVaultNotifications$,
  GetBackupVaultNotificationsCommand,
  GetBackupVaultNotificationsInput$,
  GetBackupVaultNotificationsOutput$,
  GetLegalHold$,
  GetLegalHoldCommand,
  GetLegalHoldInput$,
  GetLegalHoldOutput$,
  GetRecoveryPointIndexDetails$,
  GetRecoveryPointIndexDetailsCommand,
  GetRecoveryPointIndexDetailsInput$,
  GetRecoveryPointIndexDetailsOutput$,
  GetRecoveryPointRestoreMetadata$,
  GetRecoveryPointRestoreMetadataCommand,
  GetRecoveryPointRestoreMetadataInput$,
  GetRecoveryPointRestoreMetadataOutput$,
  GetRestoreJobMetadata$,
  GetRestoreJobMetadataCommand,
  GetRestoreJobMetadataInput$,
  GetRestoreJobMetadataOutput$,
  GetRestoreTestingInferredMetadata$,
  GetRestoreTestingInferredMetadataCommand,
  GetRestoreTestingInferredMetadataInput$,
  GetRestoreTestingInferredMetadataOutput$,
  GetRestoreTestingPlan$,
  GetRestoreTestingPlanCommand,
  GetRestoreTestingPlanInput$,
  GetRestoreTestingPlanOutput$,
  GetRestoreTestingSelection$,
  GetRestoreTestingSelectionCommand,
  GetRestoreTestingSelectionInput$,
  GetRestoreTestingSelectionOutput$,
  GetSupportedResourceTypes$,
  GetSupportedResourceTypesCommand,
  GetSupportedResourceTypesOutput$,
  GetTieringConfiguration$,
  GetTieringConfigurationCommand,
  GetTieringConfigurationInput$,
  GetTieringConfigurationOutput$,
  Index,
  IndexAction$,
  IndexStatus,
  IndexedRecoveryPoint$,
  InvalidParameterValueException,
  InvalidParameterValueException$,
  InvalidRequestException,
  InvalidRequestException$,
  InvalidResourceStateException,
  InvalidResourceStateException$,
  KeyValue$,
  LatestMpaApprovalTeamUpdate$,
  LatestRevokeRequest$,
  LegalHold$,
  LegalHoldStatus,
  Lifecycle$,
  LifecycleDeleteAfterEvent,
  LimitExceededException,
  LimitExceededException$,
  ListBackupJobSummaries$,
  ListBackupJobSummariesCommand,
  ListBackupJobSummariesInput$,
  ListBackupJobSummariesOutput$,
  ListBackupJobs$,
  ListBackupJobsCommand,
  ListBackupJobsInput$,
  ListBackupJobsOutput$,
  ListBackupPlanTemplates$,
  ListBackupPlanTemplatesCommand,
  ListBackupPlanTemplatesInput$,
  ListBackupPlanTemplatesOutput$,
  ListBackupPlanVersions$,
  ListBackupPlanVersionsCommand,
  ListBackupPlanVersionsInput$,
  ListBackupPlanVersionsOutput$,
  ListBackupPlans$,
  ListBackupPlansCommand,
  ListBackupPlansInput$,
  ListBackupPlansOutput$,
  ListBackupSelections$,
  ListBackupSelectionsCommand,
  ListBackupSelectionsInput$,
  ListBackupSelectionsOutput$,
  ListBackupVaults$,
  ListBackupVaultsCommand,
  ListBackupVaultsInput$,
  ListBackupVaultsOutput$,
  ListCopyJobSummaries$,
  ListCopyJobSummariesCommand,
  ListCopyJobSummariesInput$,
  ListCopyJobSummariesOutput$,
  ListCopyJobs$,
  ListCopyJobsCommand,
  ListCopyJobsInput$,
  ListCopyJobsOutput$,
  ListFrameworks$,
  ListFrameworksCommand,
  ListFrameworksInput$,
  ListFrameworksOutput$,
  ListIndexedRecoveryPoints$,
  ListIndexedRecoveryPointsCommand,
  ListIndexedRecoveryPointsInput$,
  ListIndexedRecoveryPointsOutput$,
  ListLegalHolds$,
  ListLegalHoldsCommand,
  ListLegalHoldsInput$,
  ListLegalHoldsOutput$,
  ListProtectedResources$,
  ListProtectedResourcesByBackupVault$,
  ListProtectedResourcesByBackupVaultCommand,
  ListProtectedResourcesByBackupVaultInput$,
  ListProtectedResourcesByBackupVaultOutput$,
  ListProtectedResourcesCommand,
  ListProtectedResourcesInput$,
  ListProtectedResourcesOutput$,
  ListRecoveryPointsByBackupVault$,
  ListRecoveryPointsByBackupVaultCommand,
  ListRecoveryPointsByBackupVaultInput$,
  ListRecoveryPointsByBackupVaultOutput$,
  ListRecoveryPointsByLegalHold$,
  ListRecoveryPointsByLegalHoldCommand,
  ListRecoveryPointsByLegalHoldInput$,
  ListRecoveryPointsByLegalHoldOutput$,
  ListRecoveryPointsByResource$,
  ListRecoveryPointsByResourceCommand,
  ListRecoveryPointsByResourceInput$,
  ListRecoveryPointsByResourceOutput$,
  ListReportJobs$,
  ListReportJobsCommand,
  ListReportJobsInput$,
  ListReportJobsOutput$,
  ListReportPlans$,
  ListReportPlansCommand,
  ListReportPlansInput$,
  ListReportPlansOutput$,
  ListRestoreAccessBackupVaults$,
  ListRestoreAccessBackupVaultsCommand,
  ListRestoreAccessBackupVaultsInput$,
  ListRestoreAccessBackupVaultsOutput$,
  ListRestoreJobSummaries$,
  ListRestoreJobSummariesCommand,
  ListRestoreJobSummariesInput$,
  ListRestoreJobSummariesOutput$,
  ListRestoreJobs$,
  ListRestoreJobsByProtectedResource$,
  ListRestoreJobsByProtectedResourceCommand,
  ListRestoreJobsByProtectedResourceInput$,
  ListRestoreJobsByProtectedResourceOutput$,
  ListRestoreJobsCommand,
  ListRestoreJobsInput$,
  ListRestoreJobsOutput$,
  ListRestoreTestingPlans$,
  ListRestoreTestingPlansCommand,
  ListRestoreTestingPlansInput$,
  ListRestoreTestingPlansOutput$,
  ListRestoreTestingSelections$,
  ListRestoreTestingSelectionsCommand,
  ListRestoreTestingSelectionsInput$,
  ListRestoreTestingSelectionsOutput$,
  ListScanJobSummaries$,
  ListScanJobSummariesCommand,
  ListScanJobSummariesInput$,
  ListScanJobSummariesOutput$,
  ListScanJobs$,
  ListScanJobsCommand,
  ListScanJobsInput$,
  ListScanJobsOutput$,
  ListTags$,
  ListTagsCommand,
  ListTagsInput$,
  ListTagsOutput$,
  ListTieringConfigurations$,
  ListTieringConfigurationsCommand,
  ListTieringConfigurationsInput$,
  ListTieringConfigurationsOutput$,
  MalwareScanner,
  MissingParameterValueException,
  MissingParameterValueException$,
  MpaRevokeSessionStatus,
  MpaSessionStatus,
  ProtectedResource$,
  ProtectedResourceConditions$,
  PutBackupVaultAccessPolicy$,
  PutBackupVaultAccessPolicyCommand,
  PutBackupVaultAccessPolicyInput$,
  PutBackupVaultLockConfiguration$,
  PutBackupVaultLockConfigurationCommand,
  PutBackupVaultLockConfigurationInput$,
  PutBackupVaultNotifications$,
  PutBackupVaultNotificationsCommand,
  PutBackupVaultNotificationsInput$,
  PutRestoreValidationResult$,
  PutRestoreValidationResultCommand,
  PutRestoreValidationResultInput$,
  RecoveryPointByBackupVault$,
  RecoveryPointByResource$,
  RecoveryPointCreator$,
  RecoveryPointMember$,
  RecoveryPointSelection$,
  RecoveryPointStatus,
  ReportDeliveryChannel$,
  ReportDestination$,
  ReportJob$,
  ReportPlan$,
  ReportSetting$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceSelection$,
  RestoreAccessBackupVaultListMember$,
  RestoreDeletionStatus,
  RestoreJobCreator$,
  RestoreJobState,
  RestoreJobStatus,
  RestoreJobSummary$,
  RestoreJobsListMember$,
  RestoreTestingPlanForCreate$,
  RestoreTestingPlanForGet$,
  RestoreTestingPlanForList$,
  RestoreTestingPlanForUpdate$,
  RestoreTestingRecoveryPointSelection$,
  RestoreTestingRecoveryPointSelectionAlgorithm,
  RestoreTestingRecoveryPointType,
  RestoreTestingSelectionForCreate$,
  RestoreTestingSelectionForGet$,
  RestoreTestingSelectionForList$,
  RestoreTestingSelectionForUpdate$,
  RestoreValidationStatus,
  RevokeRestoreAccessBackupVault$,
  RevokeRestoreAccessBackupVaultCommand,
  RevokeRestoreAccessBackupVaultInput$,
  RuleExecutionType,
  ScanAction$,
  ScanFinding,
  ScanJob$,
  ScanJobCreator$,
  ScanJobState,
  ScanJobStatus,
  ScanJobSummary$,
  ScanMode,
  ScanResourceType,
  ScanResult$,
  ScanResultInfo$,
  ScanResultStatus,
  ScanSetting$,
  ScanState,
  ScheduledPlanExecutionMember$,
  ServiceUnavailableException,
  ServiceUnavailableException$,
  StartBackupJob$,
  StartBackupJobCommand,
  StartBackupJobInput$,
  StartBackupJobOutput$,
  StartCopyJob$,
  StartCopyJobCommand,
  StartCopyJobInput$,
  StartCopyJobOutput$,
  StartReportJob$,
  StartReportJobCommand,
  StartReportJobInput$,
  StartReportJobOutput$,
  StartRestoreJob$,
  StartRestoreJobCommand,
  StartRestoreJobInput$,
  StartRestoreJobOutput$,
  StartScanJob$,
  StartScanJobCommand,
  StartScanJobInput$,
  StartScanJobOutput$,
  StopBackupJob$,
  StopBackupJobCommand,
  StopBackupJobInput$,
  StorageClass,
  TagResource$,
  TagResourceCommand,
  TagResourceInput$,
  TieringConfiguration$,
  TieringConfigurationInputForCreate$,
  TieringConfigurationInputForUpdate$,
  TieringConfigurationsListMember$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceInput$,
  UpdateBackupPlan$,
  UpdateBackupPlanCommand,
  UpdateBackupPlanInput$,
  UpdateBackupPlanOutput$,
  UpdateFramework$,
  UpdateFrameworkCommand,
  UpdateFrameworkInput$,
  UpdateFrameworkOutput$,
  UpdateGlobalSettings$,
  UpdateGlobalSettingsCommand,
  UpdateGlobalSettingsInput$,
  UpdateRecoveryPointIndexSettings$,
  UpdateRecoveryPointIndexSettingsCommand,
  UpdateRecoveryPointIndexSettingsInput$,
  UpdateRecoveryPointIndexSettingsOutput$,
  UpdateRecoveryPointLifecycle$,
  UpdateRecoveryPointLifecycleCommand,
  UpdateRecoveryPointLifecycleInput$,
  UpdateRecoveryPointLifecycleOutput$,
  UpdateRegionSettings$,
  UpdateRegionSettingsCommand,
  UpdateRegionSettingsInput$,
  UpdateReportPlan$,
  UpdateReportPlanCommand,
  UpdateReportPlanInput$,
  UpdateReportPlanOutput$,
  UpdateRestoreTestingPlan$,
  UpdateRestoreTestingPlanCommand,
  UpdateRestoreTestingPlanInput$,
  UpdateRestoreTestingPlanOutput$,
  UpdateRestoreTestingSelection$,
  UpdateRestoreTestingSelectionCommand,
  UpdateRestoreTestingSelectionInput$,
  UpdateRestoreTestingSelectionOutput$,
  UpdateTieringConfiguration$,
  UpdateTieringConfigurationCommand,
  UpdateTieringConfigurationInput$,
  UpdateTieringConfigurationOutput$,
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
assert(typeof AssociateBackupVaultMpaApprovalTeam$ === "object");
assert(typeof CancelLegalHoldCommand === "function");
assert(typeof CancelLegalHold$ === "object");
assert(typeof CreateBackupPlanCommand === "function");
assert(typeof CreateBackupPlan$ === "object");
assert(typeof CreateBackupSelectionCommand === "function");
assert(typeof CreateBackupSelection$ === "object");
assert(typeof CreateBackupVaultCommand === "function");
assert(typeof CreateBackupVault$ === "object");
assert(typeof CreateFrameworkCommand === "function");
assert(typeof CreateFramework$ === "object");
assert(typeof CreateLegalHoldCommand === "function");
assert(typeof CreateLegalHold$ === "object");
assert(typeof CreateLogicallyAirGappedBackupVaultCommand === "function");
assert(typeof CreateLogicallyAirGappedBackupVault$ === "object");
assert(typeof CreateReportPlanCommand === "function");
assert(typeof CreateReportPlan$ === "object");
assert(typeof CreateRestoreAccessBackupVaultCommand === "function");
assert(typeof CreateRestoreAccessBackupVault$ === "object");
assert(typeof CreateRestoreTestingPlanCommand === "function");
assert(typeof CreateRestoreTestingPlan$ === "object");
assert(typeof CreateRestoreTestingSelectionCommand === "function");
assert(typeof CreateRestoreTestingSelection$ === "object");
assert(typeof CreateTieringConfigurationCommand === "function");
assert(typeof CreateTieringConfiguration$ === "object");
assert(typeof DeleteBackupPlanCommand === "function");
assert(typeof DeleteBackupPlan$ === "object");
assert(typeof DeleteBackupSelectionCommand === "function");
assert(typeof DeleteBackupSelection$ === "object");
assert(typeof DeleteBackupVaultCommand === "function");
assert(typeof DeleteBackupVault$ === "object");
assert(typeof DeleteBackupVaultAccessPolicyCommand === "function");
assert(typeof DeleteBackupVaultAccessPolicy$ === "object");
assert(typeof DeleteBackupVaultLockConfigurationCommand === "function");
assert(typeof DeleteBackupVaultLockConfiguration$ === "object");
assert(typeof DeleteBackupVaultNotificationsCommand === "function");
assert(typeof DeleteBackupVaultNotifications$ === "object");
assert(typeof DeleteFrameworkCommand === "function");
assert(typeof DeleteFramework$ === "object");
assert(typeof DeleteRecoveryPointCommand === "function");
assert(typeof DeleteRecoveryPoint$ === "object");
assert(typeof DeleteReportPlanCommand === "function");
assert(typeof DeleteReportPlan$ === "object");
assert(typeof DeleteRestoreTestingPlanCommand === "function");
assert(typeof DeleteRestoreTestingPlan$ === "object");
assert(typeof DeleteRestoreTestingSelectionCommand === "function");
assert(typeof DeleteRestoreTestingSelection$ === "object");
assert(typeof DeleteTieringConfigurationCommand === "function");
assert(typeof DeleteTieringConfiguration$ === "object");
assert(typeof DescribeBackupJobCommand === "function");
assert(typeof DescribeBackupJob$ === "object");
assert(typeof DescribeBackupVaultCommand === "function");
assert(typeof DescribeBackupVault$ === "object");
assert(typeof DescribeCopyJobCommand === "function");
assert(typeof DescribeCopyJob$ === "object");
assert(typeof DescribeFrameworkCommand === "function");
assert(typeof DescribeFramework$ === "object");
assert(typeof DescribeGlobalSettingsCommand === "function");
assert(typeof DescribeGlobalSettings$ === "object");
assert(typeof DescribeProtectedResourceCommand === "function");
assert(typeof DescribeProtectedResource$ === "object");
assert(typeof DescribeRecoveryPointCommand === "function");
assert(typeof DescribeRecoveryPoint$ === "object");
assert(typeof DescribeRegionSettingsCommand === "function");
assert(typeof DescribeRegionSettings$ === "object");
assert(typeof DescribeReportJobCommand === "function");
assert(typeof DescribeReportJob$ === "object");
assert(typeof DescribeReportPlanCommand === "function");
assert(typeof DescribeReportPlan$ === "object");
assert(typeof DescribeRestoreJobCommand === "function");
assert(typeof DescribeRestoreJob$ === "object");
assert(typeof DescribeScanJobCommand === "function");
assert(typeof DescribeScanJob$ === "object");
assert(typeof DisassociateBackupVaultMpaApprovalTeamCommand === "function");
assert(typeof DisassociateBackupVaultMpaApprovalTeam$ === "object");
assert(typeof DisassociateRecoveryPointCommand === "function");
assert(typeof DisassociateRecoveryPoint$ === "object");
assert(typeof DisassociateRecoveryPointFromParentCommand === "function");
assert(typeof DisassociateRecoveryPointFromParent$ === "object");
assert(typeof ExportBackupPlanTemplateCommand === "function");
assert(typeof ExportBackupPlanTemplate$ === "object");
assert(typeof GetBackupPlanCommand === "function");
assert(typeof GetBackupPlan$ === "object");
assert(typeof GetBackupPlanFromJSONCommand === "function");
assert(typeof GetBackupPlanFromJSON$ === "object");
assert(typeof GetBackupPlanFromTemplateCommand === "function");
assert(typeof GetBackupPlanFromTemplate$ === "object");
assert(typeof GetBackupSelectionCommand === "function");
assert(typeof GetBackupSelection$ === "object");
assert(typeof GetBackupVaultAccessPolicyCommand === "function");
assert(typeof GetBackupVaultAccessPolicy$ === "object");
assert(typeof GetBackupVaultNotificationsCommand === "function");
assert(typeof GetBackupVaultNotifications$ === "object");
assert(typeof GetLegalHoldCommand === "function");
assert(typeof GetLegalHold$ === "object");
assert(typeof GetRecoveryPointIndexDetailsCommand === "function");
assert(typeof GetRecoveryPointIndexDetails$ === "object");
assert(typeof GetRecoveryPointRestoreMetadataCommand === "function");
assert(typeof GetRecoveryPointRestoreMetadata$ === "object");
assert(typeof GetRestoreJobMetadataCommand === "function");
assert(typeof GetRestoreJobMetadata$ === "object");
assert(typeof GetRestoreTestingInferredMetadataCommand === "function");
assert(typeof GetRestoreTestingInferredMetadata$ === "object");
assert(typeof GetRestoreTestingPlanCommand === "function");
assert(typeof GetRestoreTestingPlan$ === "object");
assert(typeof GetRestoreTestingSelectionCommand === "function");
assert(typeof GetRestoreTestingSelection$ === "object");
assert(typeof GetSupportedResourceTypesCommand === "function");
assert(typeof GetSupportedResourceTypes$ === "object");
assert(typeof GetTieringConfigurationCommand === "function");
assert(typeof GetTieringConfiguration$ === "object");
assert(typeof ListBackupJobsCommand === "function");
assert(typeof ListBackupJobs$ === "object");
assert(typeof ListBackupJobSummariesCommand === "function");
assert(typeof ListBackupJobSummaries$ === "object");
assert(typeof ListBackupPlansCommand === "function");
assert(typeof ListBackupPlans$ === "object");
assert(typeof ListBackupPlanTemplatesCommand === "function");
assert(typeof ListBackupPlanTemplates$ === "object");
assert(typeof ListBackupPlanVersionsCommand === "function");
assert(typeof ListBackupPlanVersions$ === "object");
assert(typeof ListBackupSelectionsCommand === "function");
assert(typeof ListBackupSelections$ === "object");
assert(typeof ListBackupVaultsCommand === "function");
assert(typeof ListBackupVaults$ === "object");
assert(typeof ListCopyJobsCommand === "function");
assert(typeof ListCopyJobs$ === "object");
assert(typeof ListCopyJobSummariesCommand === "function");
assert(typeof ListCopyJobSummaries$ === "object");
assert(typeof ListFrameworksCommand === "function");
assert(typeof ListFrameworks$ === "object");
assert(typeof ListIndexedRecoveryPointsCommand === "function");
assert(typeof ListIndexedRecoveryPoints$ === "object");
assert(typeof ListLegalHoldsCommand === "function");
assert(typeof ListLegalHolds$ === "object");
assert(typeof ListProtectedResourcesCommand === "function");
assert(typeof ListProtectedResources$ === "object");
assert(typeof ListProtectedResourcesByBackupVaultCommand === "function");
assert(typeof ListProtectedResourcesByBackupVault$ === "object");
assert(typeof ListRecoveryPointsByBackupVaultCommand === "function");
assert(typeof ListRecoveryPointsByBackupVault$ === "object");
assert(typeof ListRecoveryPointsByLegalHoldCommand === "function");
assert(typeof ListRecoveryPointsByLegalHold$ === "object");
assert(typeof ListRecoveryPointsByResourceCommand === "function");
assert(typeof ListRecoveryPointsByResource$ === "object");
assert(typeof ListReportJobsCommand === "function");
assert(typeof ListReportJobs$ === "object");
assert(typeof ListReportPlansCommand === "function");
assert(typeof ListReportPlans$ === "object");
assert(typeof ListRestoreAccessBackupVaultsCommand === "function");
assert(typeof ListRestoreAccessBackupVaults$ === "object");
assert(typeof ListRestoreJobsCommand === "function");
assert(typeof ListRestoreJobs$ === "object");
assert(typeof ListRestoreJobsByProtectedResourceCommand === "function");
assert(typeof ListRestoreJobsByProtectedResource$ === "object");
assert(typeof ListRestoreJobSummariesCommand === "function");
assert(typeof ListRestoreJobSummaries$ === "object");
assert(typeof ListRestoreTestingPlansCommand === "function");
assert(typeof ListRestoreTestingPlans$ === "object");
assert(typeof ListRestoreTestingSelectionsCommand === "function");
assert(typeof ListRestoreTestingSelections$ === "object");
assert(typeof ListScanJobsCommand === "function");
assert(typeof ListScanJobs$ === "object");
assert(typeof ListScanJobSummariesCommand === "function");
assert(typeof ListScanJobSummaries$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListTieringConfigurationsCommand === "function");
assert(typeof ListTieringConfigurations$ === "object");
assert(typeof PutBackupVaultAccessPolicyCommand === "function");
assert(typeof PutBackupVaultAccessPolicy$ === "object");
assert(typeof PutBackupVaultLockConfigurationCommand === "function");
assert(typeof PutBackupVaultLockConfiguration$ === "object");
assert(typeof PutBackupVaultNotificationsCommand === "function");
assert(typeof PutBackupVaultNotifications$ === "object");
assert(typeof PutRestoreValidationResultCommand === "function");
assert(typeof PutRestoreValidationResult$ === "object");
assert(typeof RevokeRestoreAccessBackupVaultCommand === "function");
assert(typeof RevokeRestoreAccessBackupVault$ === "object");
assert(typeof StartBackupJobCommand === "function");
assert(typeof StartBackupJob$ === "object");
assert(typeof StartCopyJobCommand === "function");
assert(typeof StartCopyJob$ === "object");
assert(typeof StartReportJobCommand === "function");
assert(typeof StartReportJob$ === "object");
assert(typeof StartRestoreJobCommand === "function");
assert(typeof StartRestoreJob$ === "object");
assert(typeof StartScanJobCommand === "function");
assert(typeof StartScanJob$ === "object");
assert(typeof StopBackupJobCommand === "function");
assert(typeof StopBackupJob$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateBackupPlanCommand === "function");
assert(typeof UpdateBackupPlan$ === "object");
assert(typeof UpdateFrameworkCommand === "function");
assert(typeof UpdateFramework$ === "object");
assert(typeof UpdateGlobalSettingsCommand === "function");
assert(typeof UpdateGlobalSettings$ === "object");
assert(typeof UpdateRecoveryPointIndexSettingsCommand === "function");
assert(typeof UpdateRecoveryPointIndexSettings$ === "object");
assert(typeof UpdateRecoveryPointLifecycleCommand === "function");
assert(typeof UpdateRecoveryPointLifecycle$ === "object");
assert(typeof UpdateRegionSettingsCommand === "function");
assert(typeof UpdateRegionSettings$ === "object");
assert(typeof UpdateReportPlanCommand === "function");
assert(typeof UpdateReportPlan$ === "object");
assert(typeof UpdateRestoreTestingPlanCommand === "function");
assert(typeof UpdateRestoreTestingPlan$ === "object");
assert(typeof UpdateRestoreTestingSelectionCommand === "function");
assert(typeof UpdateRestoreTestingSelection$ === "object");
assert(typeof UpdateTieringConfigurationCommand === "function");
assert(typeof UpdateTieringConfiguration$ === "object");
// structural schemas
assert(typeof AdvancedBackupSetting$ === "object");
assert(typeof AggregatedScanResult$ === "object");
assert(typeof AssociateBackupVaultMpaApprovalTeamInput$ === "object");
assert(typeof BackupJob$ === "object");
assert(typeof BackupJobSummary$ === "object");
assert(typeof BackupPlan$ === "object");
assert(typeof BackupPlanInput$ === "object");
assert(typeof BackupPlansListMember$ === "object");
assert(typeof BackupPlanTemplatesListMember$ === "object");
assert(typeof BackupRule$ === "object");
assert(typeof BackupRuleInput$ === "object");
assert(typeof BackupSelection$ === "object");
assert(typeof BackupSelectionsListMember$ === "object");
assert(typeof BackupVaultListMember$ === "object");
assert(typeof CalculatedLifecycle$ === "object");
assert(typeof CancelLegalHoldInput$ === "object");
assert(typeof CancelLegalHoldOutput$ === "object");
assert(typeof Condition$ === "object");
assert(typeof ConditionParameter$ === "object");
assert(typeof Conditions$ === "object");
assert(typeof ControlInputParameter$ === "object");
assert(typeof ControlScope$ === "object");
assert(typeof CopyAction$ === "object");
assert(typeof CopyJob$ === "object");
assert(typeof CopyJobSummary$ === "object");
assert(typeof CreateBackupPlanInput$ === "object");
assert(typeof CreateBackupPlanOutput$ === "object");
assert(typeof CreateBackupSelectionInput$ === "object");
assert(typeof CreateBackupSelectionOutput$ === "object");
assert(typeof CreateBackupVaultInput$ === "object");
assert(typeof CreateBackupVaultOutput$ === "object");
assert(typeof CreateFrameworkInput$ === "object");
assert(typeof CreateFrameworkOutput$ === "object");
assert(typeof CreateLegalHoldInput$ === "object");
assert(typeof CreateLegalHoldOutput$ === "object");
assert(typeof CreateLogicallyAirGappedBackupVaultInput$ === "object");
assert(typeof CreateLogicallyAirGappedBackupVaultOutput$ === "object");
assert(typeof CreateReportPlanInput$ === "object");
assert(typeof CreateReportPlanOutput$ === "object");
assert(typeof CreateRestoreAccessBackupVaultInput$ === "object");
assert(typeof CreateRestoreAccessBackupVaultOutput$ === "object");
assert(typeof CreateRestoreTestingPlanInput$ === "object");
assert(typeof CreateRestoreTestingPlanOutput$ === "object");
assert(typeof CreateRestoreTestingSelectionInput$ === "object");
assert(typeof CreateRestoreTestingSelectionOutput$ === "object");
assert(typeof CreateTieringConfigurationInput$ === "object");
assert(typeof CreateTieringConfigurationOutput$ === "object");
assert(typeof DateRange$ === "object");
assert(typeof DeleteBackupPlanInput$ === "object");
assert(typeof DeleteBackupPlanOutput$ === "object");
assert(typeof DeleteBackupSelectionInput$ === "object");
assert(typeof DeleteBackupVaultAccessPolicyInput$ === "object");
assert(typeof DeleteBackupVaultInput$ === "object");
assert(typeof DeleteBackupVaultLockConfigurationInput$ === "object");
assert(typeof DeleteBackupVaultNotificationsInput$ === "object");
assert(typeof DeleteFrameworkInput$ === "object");
assert(typeof DeleteRecoveryPointInput$ === "object");
assert(typeof DeleteReportPlanInput$ === "object");
assert(typeof DeleteRestoreTestingPlanInput$ === "object");
assert(typeof DeleteRestoreTestingSelectionInput$ === "object");
assert(typeof DeleteTieringConfigurationInput$ === "object");
assert(typeof DeleteTieringConfigurationOutput$ === "object");
assert(typeof DescribeBackupJobInput$ === "object");
assert(typeof DescribeBackupJobOutput$ === "object");
assert(typeof DescribeBackupVaultInput$ === "object");
assert(typeof DescribeBackupVaultOutput$ === "object");
assert(typeof DescribeCopyJobInput$ === "object");
assert(typeof DescribeCopyJobOutput$ === "object");
assert(typeof DescribeFrameworkInput$ === "object");
assert(typeof DescribeFrameworkOutput$ === "object");
assert(typeof DescribeGlobalSettingsInput$ === "object");
assert(typeof DescribeGlobalSettingsOutput$ === "object");
assert(typeof DescribeProtectedResourceInput$ === "object");
assert(typeof DescribeProtectedResourceOutput$ === "object");
assert(typeof DescribeRecoveryPointInput$ === "object");
assert(typeof DescribeRecoveryPointOutput$ === "object");
assert(typeof DescribeRegionSettingsInput$ === "object");
assert(typeof DescribeRegionSettingsOutput$ === "object");
assert(typeof DescribeReportJobInput$ === "object");
assert(typeof DescribeReportJobOutput$ === "object");
assert(typeof DescribeReportPlanInput$ === "object");
assert(typeof DescribeReportPlanOutput$ === "object");
assert(typeof DescribeRestoreJobInput$ === "object");
assert(typeof DescribeRestoreJobOutput$ === "object");
assert(typeof DescribeScanJobInput$ === "object");
assert(typeof DescribeScanJobOutput$ === "object");
assert(typeof DisassociateBackupVaultMpaApprovalTeamInput$ === "object");
assert(typeof DisassociateRecoveryPointFromParentInput$ === "object");
assert(typeof DisassociateRecoveryPointInput$ === "object");
assert(typeof ExportBackupPlanTemplateInput$ === "object");
assert(typeof ExportBackupPlanTemplateOutput$ === "object");
assert(typeof Framework$ === "object");
assert(typeof FrameworkControl$ === "object");
assert(typeof GetBackupPlanFromJSONInput$ === "object");
assert(typeof GetBackupPlanFromJSONOutput$ === "object");
assert(typeof GetBackupPlanFromTemplateInput$ === "object");
assert(typeof GetBackupPlanFromTemplateOutput$ === "object");
assert(typeof GetBackupPlanInput$ === "object");
assert(typeof GetBackupPlanOutput$ === "object");
assert(typeof GetBackupSelectionInput$ === "object");
assert(typeof GetBackupSelectionOutput$ === "object");
assert(typeof GetBackupVaultAccessPolicyInput$ === "object");
assert(typeof GetBackupVaultAccessPolicyOutput$ === "object");
assert(typeof GetBackupVaultNotificationsInput$ === "object");
assert(typeof GetBackupVaultNotificationsOutput$ === "object");
assert(typeof GetLegalHoldInput$ === "object");
assert(typeof GetLegalHoldOutput$ === "object");
assert(typeof GetRecoveryPointIndexDetailsInput$ === "object");
assert(typeof GetRecoveryPointIndexDetailsOutput$ === "object");
assert(typeof GetRecoveryPointRestoreMetadataInput$ === "object");
assert(typeof GetRecoveryPointRestoreMetadataOutput$ === "object");
assert(typeof GetRestoreJobMetadataInput$ === "object");
assert(typeof GetRestoreJobMetadataOutput$ === "object");
assert(typeof GetRestoreTestingInferredMetadataInput$ === "object");
assert(typeof GetRestoreTestingInferredMetadataOutput$ === "object");
assert(typeof GetRestoreTestingPlanInput$ === "object");
assert(typeof GetRestoreTestingPlanOutput$ === "object");
assert(typeof GetRestoreTestingSelectionInput$ === "object");
assert(typeof GetRestoreTestingSelectionOutput$ === "object");
assert(typeof GetSupportedResourceTypesOutput$ === "object");
assert(typeof GetTieringConfigurationInput$ === "object");
assert(typeof GetTieringConfigurationOutput$ === "object");
assert(typeof IndexAction$ === "object");
assert(typeof IndexedRecoveryPoint$ === "object");
assert(typeof KeyValue$ === "object");
assert(typeof LatestMpaApprovalTeamUpdate$ === "object");
assert(typeof LatestRevokeRequest$ === "object");
assert(typeof LegalHold$ === "object");
assert(typeof Lifecycle$ === "object");
assert(typeof ListBackupJobsInput$ === "object");
assert(typeof ListBackupJobsOutput$ === "object");
assert(typeof ListBackupJobSummariesInput$ === "object");
assert(typeof ListBackupJobSummariesOutput$ === "object");
assert(typeof ListBackupPlansInput$ === "object");
assert(typeof ListBackupPlansOutput$ === "object");
assert(typeof ListBackupPlanTemplatesInput$ === "object");
assert(typeof ListBackupPlanTemplatesOutput$ === "object");
assert(typeof ListBackupPlanVersionsInput$ === "object");
assert(typeof ListBackupPlanVersionsOutput$ === "object");
assert(typeof ListBackupSelectionsInput$ === "object");
assert(typeof ListBackupSelectionsOutput$ === "object");
assert(typeof ListBackupVaultsInput$ === "object");
assert(typeof ListBackupVaultsOutput$ === "object");
assert(typeof ListCopyJobsInput$ === "object");
assert(typeof ListCopyJobsOutput$ === "object");
assert(typeof ListCopyJobSummariesInput$ === "object");
assert(typeof ListCopyJobSummariesOutput$ === "object");
assert(typeof ListFrameworksInput$ === "object");
assert(typeof ListFrameworksOutput$ === "object");
assert(typeof ListIndexedRecoveryPointsInput$ === "object");
assert(typeof ListIndexedRecoveryPointsOutput$ === "object");
assert(typeof ListLegalHoldsInput$ === "object");
assert(typeof ListLegalHoldsOutput$ === "object");
assert(typeof ListProtectedResourcesByBackupVaultInput$ === "object");
assert(typeof ListProtectedResourcesByBackupVaultOutput$ === "object");
assert(typeof ListProtectedResourcesInput$ === "object");
assert(typeof ListProtectedResourcesOutput$ === "object");
assert(typeof ListRecoveryPointsByBackupVaultInput$ === "object");
assert(typeof ListRecoveryPointsByBackupVaultOutput$ === "object");
assert(typeof ListRecoveryPointsByLegalHoldInput$ === "object");
assert(typeof ListRecoveryPointsByLegalHoldOutput$ === "object");
assert(typeof ListRecoveryPointsByResourceInput$ === "object");
assert(typeof ListRecoveryPointsByResourceOutput$ === "object");
assert(typeof ListReportJobsInput$ === "object");
assert(typeof ListReportJobsOutput$ === "object");
assert(typeof ListReportPlansInput$ === "object");
assert(typeof ListReportPlansOutput$ === "object");
assert(typeof ListRestoreAccessBackupVaultsInput$ === "object");
assert(typeof ListRestoreAccessBackupVaultsOutput$ === "object");
assert(typeof ListRestoreJobsByProtectedResourceInput$ === "object");
assert(typeof ListRestoreJobsByProtectedResourceOutput$ === "object");
assert(typeof ListRestoreJobsInput$ === "object");
assert(typeof ListRestoreJobsOutput$ === "object");
assert(typeof ListRestoreJobSummariesInput$ === "object");
assert(typeof ListRestoreJobSummariesOutput$ === "object");
assert(typeof ListRestoreTestingPlansInput$ === "object");
assert(typeof ListRestoreTestingPlansOutput$ === "object");
assert(typeof ListRestoreTestingSelectionsInput$ === "object");
assert(typeof ListRestoreTestingSelectionsOutput$ === "object");
assert(typeof ListScanJobsInput$ === "object");
assert(typeof ListScanJobsOutput$ === "object");
assert(typeof ListScanJobSummariesInput$ === "object");
assert(typeof ListScanJobSummariesOutput$ === "object");
assert(typeof ListTagsInput$ === "object");
assert(typeof ListTagsOutput$ === "object");
assert(typeof ListTieringConfigurationsInput$ === "object");
assert(typeof ListTieringConfigurationsOutput$ === "object");
assert(typeof ProtectedResource$ === "object");
assert(typeof ProtectedResourceConditions$ === "object");
assert(typeof PutBackupVaultAccessPolicyInput$ === "object");
assert(typeof PutBackupVaultLockConfigurationInput$ === "object");
assert(typeof PutBackupVaultNotificationsInput$ === "object");
assert(typeof PutRestoreValidationResultInput$ === "object");
assert(typeof RecoveryPointByBackupVault$ === "object");
assert(typeof RecoveryPointByResource$ === "object");
assert(typeof RecoveryPointCreator$ === "object");
assert(typeof RecoveryPointMember$ === "object");
assert(typeof RecoveryPointSelection$ === "object");
assert(typeof ReportDeliveryChannel$ === "object");
assert(typeof ReportDestination$ === "object");
assert(typeof ReportJob$ === "object");
assert(typeof ReportPlan$ === "object");
assert(typeof ReportSetting$ === "object");
assert(typeof ResourceSelection$ === "object");
assert(typeof RestoreAccessBackupVaultListMember$ === "object");
assert(typeof RestoreJobCreator$ === "object");
assert(typeof RestoreJobsListMember$ === "object");
assert(typeof RestoreJobSummary$ === "object");
assert(typeof RestoreTestingPlanForCreate$ === "object");
assert(typeof RestoreTestingPlanForGet$ === "object");
assert(typeof RestoreTestingPlanForList$ === "object");
assert(typeof RestoreTestingPlanForUpdate$ === "object");
assert(typeof RestoreTestingRecoveryPointSelection$ === "object");
assert(typeof RestoreTestingSelectionForCreate$ === "object");
assert(typeof RestoreTestingSelectionForGet$ === "object");
assert(typeof RestoreTestingSelectionForList$ === "object");
assert(typeof RestoreTestingSelectionForUpdate$ === "object");
assert(typeof RevokeRestoreAccessBackupVaultInput$ === "object");
assert(typeof ScanAction$ === "object");
assert(typeof ScanJob$ === "object");
assert(typeof ScanJobCreator$ === "object");
assert(typeof ScanJobSummary$ === "object");
assert(typeof ScanResult$ === "object");
assert(typeof ScanResultInfo$ === "object");
assert(typeof ScanSetting$ === "object");
assert(typeof ScheduledPlanExecutionMember$ === "object");
assert(typeof StartBackupJobInput$ === "object");
assert(typeof StartBackupJobOutput$ === "object");
assert(typeof StartCopyJobInput$ === "object");
assert(typeof StartCopyJobOutput$ === "object");
assert(typeof StartReportJobInput$ === "object");
assert(typeof StartReportJobOutput$ === "object");
assert(typeof StartRestoreJobInput$ === "object");
assert(typeof StartRestoreJobOutput$ === "object");
assert(typeof StartScanJobInput$ === "object");
assert(typeof StartScanJobOutput$ === "object");
assert(typeof StopBackupJobInput$ === "object");
assert(typeof TagResourceInput$ === "object");
assert(typeof TieringConfiguration$ === "object");
assert(typeof TieringConfigurationInputForCreate$ === "object");
assert(typeof TieringConfigurationInputForUpdate$ === "object");
assert(typeof TieringConfigurationsListMember$ === "object");
assert(typeof UntagResourceInput$ === "object");
assert(typeof UpdateBackupPlanInput$ === "object");
assert(typeof UpdateBackupPlanOutput$ === "object");
assert(typeof UpdateFrameworkInput$ === "object");
assert(typeof UpdateFrameworkOutput$ === "object");
assert(typeof UpdateGlobalSettingsInput$ === "object");
assert(typeof UpdateRecoveryPointIndexSettingsInput$ === "object");
assert(typeof UpdateRecoveryPointIndexSettingsOutput$ === "object");
assert(typeof UpdateRecoveryPointLifecycleInput$ === "object");
assert(typeof UpdateRecoveryPointLifecycleOutput$ === "object");
assert(typeof UpdateRegionSettingsInput$ === "object");
assert(typeof UpdateReportPlanInput$ === "object");
assert(typeof UpdateReportPlanOutput$ === "object");
assert(typeof UpdateRestoreTestingPlanInput$ === "object");
assert(typeof UpdateRestoreTestingPlanOutput$ === "object");
assert(typeof UpdateRestoreTestingSelectionInput$ === "object");
assert(typeof UpdateRestoreTestingSelectionOutput$ === "object");
assert(typeof UpdateTieringConfigurationInput$ === "object");
assert(typeof UpdateTieringConfigurationOutput$ === "object");
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
assert(typeof AlreadyExistsException$ === "object");
assert(ConflictException.prototype instanceof BackupServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailureException.prototype instanceof BackupServiceException);
assert(typeof DependencyFailureException$ === "object");
assert(InvalidParameterValueException.prototype instanceof BackupServiceException);
assert(typeof InvalidParameterValueException$ === "object");
assert(InvalidRequestException.prototype instanceof BackupServiceException);
assert(typeof InvalidRequestException$ === "object");
assert(InvalidResourceStateException.prototype instanceof BackupServiceException);
assert(typeof InvalidResourceStateException$ === "object");
assert(LimitExceededException.prototype instanceof BackupServiceException);
assert(typeof LimitExceededException$ === "object");
assert(MissingParameterValueException.prototype instanceof BackupServiceException);
assert(typeof MissingParameterValueException$ === "object");
assert(ResourceNotFoundException.prototype instanceof BackupServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceUnavailableException.prototype instanceof BackupServiceException);
assert(typeof ServiceUnavailableException$ === "object");
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
