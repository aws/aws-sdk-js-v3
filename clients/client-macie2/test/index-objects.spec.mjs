import {
  AcceptInvitationCommand,
  AccessDeniedException,
  AdminStatus,
  AllowListStatusCode,
  AllowsUnencryptedObjectUploads,
  AutoEnableMode,
  AutomatedDiscoveryAccountStatus,
  AutomatedDiscoveryAccountUpdateErrorCode,
  AutomatedDiscoveryMonitoringStatus,
  AutomatedDiscoveryStatus,
  AvailabilityCode,
  BatchGetCustomDataIdentifiersCommand,
  BatchUpdateAutomatedDiscoveryAccountsCommand,
  BucketMetadataErrorCode,
  ClassificationScopeUpdateOperation,
  ConflictException,
  CreateAllowListCommand,
  CreateClassificationJobCommand,
  CreateCustomDataIdentifierCommand,
  CreateFindingsFilterCommand,
  CreateInvitationsCommand,
  CreateMemberCommand,
  CreateSampleFindingsCommand,
  Currency,
  DataIdentifierSeverity,
  DataIdentifierType,
  DayOfWeek,
  DeclineInvitationsCommand,
  DeleteAllowListCommand,
  DeleteCustomDataIdentifierCommand,
  DeleteFindingsFilterCommand,
  DeleteInvitationsCommand,
  DeleteMemberCommand,
  DescribeBucketsCommand,
  DescribeClassificationJobCommand,
  DescribeOrganizationConfigurationCommand,
  DisableMacieCommand,
  DisableOrganizationAdminAccountCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMemberCommand,
  EffectivePermission,
  EnableMacieCommand,
  EnableOrganizationAdminAccountCommand,
  EncryptionType,
  ErrorCode,
  FindingActionType,
  FindingCategory,
  FindingPublishingFrequency,
  FindingStatisticsSortAttributeName,
  FindingType,
  FindingsFilterAction,
  GetAdministratorAccountCommand,
  GetAllowListCommand,
  GetAutomatedDiscoveryConfigurationCommand,
  GetBucketStatisticsCommand,
  GetClassificationExportConfigurationCommand,
  GetClassificationScopeCommand,
  GetCustomDataIdentifierCommand,
  GetFindingStatisticsCommand,
  GetFindingsCommand,
  GetFindingsFilterCommand,
  GetFindingsPublicationConfigurationCommand,
  GetInvitationsCountCommand,
  GetMacieSessionCommand,
  GetMasterAccountCommand,
  GetMemberCommand,
  GetResourceProfileCommand,
  GetRevealConfigurationCommand,
  GetSensitiveDataOccurrencesAvailabilityCommand,
  GetSensitiveDataOccurrencesCommand,
  GetSensitivityInspectionTemplateCommand,
  GetUsageStatisticsCommand,
  GetUsageTotalsCommand,
  GroupBy,
  InternalServerException,
  IsDefinedInJob,
  IsMonitoredByJob,
  JobComparator,
  JobStatus,
  JobType,
  LastRunErrorStatusCode,
  ListAllowListsCommand,
  ListAutomatedDiscoveryAccountsCommand,
  ListClassificationJobsCommand,
  ListClassificationScopesCommand,
  ListCustomDataIdentifiersCommand,
  ListFindingsCommand,
  ListFindingsFiltersCommand,
  ListInvitationsCommand,
  ListJobsFilterKey,
  ListJobsSortAttributeName,
  ListManagedDataIdentifiersCommand,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListResourceProfileArtifactsCommand,
  ListResourceProfileDetectionsCommand,
  ListSensitivityInspectionTemplatesCommand,
  ListTagsForResourceCommand,
  Macie2,
  Macie2Client,
  Macie2ServiceException,
  MacieStatus,
  ManagedDataIdentifierSelector,
  OrderBy,
  OriginType,
  PutClassificationExportConfigurationCommand,
  PutFindingsPublicationConfigurationCommand,
  RelationshipStatus,
  ResourceNotFoundException,
  RetrievalMode,
  RevealRequestStatus,
  RevealStatus,
  ScopeFilterKey,
  SearchResourcesCommand,
  SearchResourcesComparator,
  SearchResourcesSimpleCriterionKey,
  SearchResourcesSortAttributeName,
  SensitiveDataItemCategory,
  ServiceQuotaExceededException,
  SeverityDescription,
  SharedAccess,
  SimpleCriterionKeyForJob,
  StorageClass,
  TagResourceCommand,
  TagTarget,
  TestCustomDataIdentifierCommand,
  ThrottlingException,
  TimeRange,
  Type,
  UnavailabilityReasonCode,
  Unit,
  UnprocessableEntityException,
  UntagResourceCommand,
  UpdateAllowListCommand,
  UpdateAutomatedDiscoveryConfigurationCommand,
  UpdateClassificationJobCommand,
  UpdateClassificationScopeCommand,
  UpdateFindingsFilterCommand,
  UpdateMacieSessionCommand,
  UpdateMemberSessionCommand,
  UpdateOrganizationConfigurationCommand,
  UpdateResourceProfileCommand,
  UpdateResourceProfileDetectionsCommand,
  UpdateRevealConfigurationCommand,
  UpdateSensitivityInspectionTemplateCommand,
  UsageStatisticsFilterComparator,
  UsageStatisticsFilterKey,
  UsageStatisticsSortKey,
  UsageType,
  UserIdentityType,
  ValidationException,
  paginateDescribeBuckets,
  paginateGetUsageStatistics,
  paginateListAllowLists,
  paginateListAutomatedDiscoveryAccounts,
  paginateListClassificationJobs,
  paginateListClassificationScopes,
  paginateListCustomDataIdentifiers,
  paginateListFindings,
  paginateListFindingsFilters,
  paginateListInvitations,
  paginateListManagedDataIdentifiers,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListResourceProfileArtifacts,
  paginateListResourceProfileDetections,
  paginateListSensitivityInspectionTemplates,
  paginateSearchResources,
  waitForFindingRevealed,
  waitUntilFindingRevealed,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Macie2Client === "function");
assert(typeof Macie2 === "function");
// commands
assert(typeof AcceptInvitationCommand === "function");
assert(typeof BatchGetCustomDataIdentifiersCommand === "function");
assert(typeof BatchUpdateAutomatedDiscoveryAccountsCommand === "function");
assert(typeof CreateAllowListCommand === "function");
assert(typeof CreateClassificationJobCommand === "function");
assert(typeof CreateCustomDataIdentifierCommand === "function");
assert(typeof CreateFindingsFilterCommand === "function");
assert(typeof CreateInvitationsCommand === "function");
assert(typeof CreateMemberCommand === "function");
assert(typeof CreateSampleFindingsCommand === "function");
assert(typeof DeclineInvitationsCommand === "function");
assert(typeof DeleteAllowListCommand === "function");
assert(typeof DeleteCustomDataIdentifierCommand === "function");
assert(typeof DeleteFindingsFilterCommand === "function");
assert(typeof DeleteInvitationsCommand === "function");
assert(typeof DeleteMemberCommand === "function");
assert(typeof DescribeBucketsCommand === "function");
assert(typeof DescribeClassificationJobCommand === "function");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DisableMacieCommand === "function");
assert(typeof DisableOrganizationAdminAccountCommand === "function");
assert(typeof DisassociateFromAdministratorAccountCommand === "function");
assert(typeof DisassociateFromMasterAccountCommand === "function");
assert(typeof DisassociateMemberCommand === "function");
assert(typeof EnableMacieCommand === "function");
assert(typeof EnableOrganizationAdminAccountCommand === "function");
assert(typeof GetAdministratorAccountCommand === "function");
assert(typeof GetAllowListCommand === "function");
assert(typeof GetAutomatedDiscoveryConfigurationCommand === "function");
assert(typeof GetBucketStatisticsCommand === "function");
assert(typeof GetClassificationExportConfigurationCommand === "function");
assert(typeof GetClassificationScopeCommand === "function");
assert(typeof GetCustomDataIdentifierCommand === "function");
assert(typeof GetFindingsCommand === "function");
assert(typeof GetFindingsFilterCommand === "function");
assert(typeof GetFindingsPublicationConfigurationCommand === "function");
assert(typeof GetFindingStatisticsCommand === "function");
assert(typeof GetInvitationsCountCommand === "function");
assert(typeof GetMacieSessionCommand === "function");
assert(typeof GetMasterAccountCommand === "function");
assert(typeof GetMemberCommand === "function");
assert(typeof GetResourceProfileCommand === "function");
assert(typeof GetRevealConfigurationCommand === "function");
assert(typeof GetSensitiveDataOccurrencesCommand === "function");
assert(typeof GetSensitiveDataOccurrencesAvailabilityCommand === "function");
assert(typeof GetSensitivityInspectionTemplateCommand === "function");
assert(typeof GetUsageStatisticsCommand === "function");
assert(typeof GetUsageTotalsCommand === "function");
assert(typeof ListAllowListsCommand === "function");
assert(typeof ListAutomatedDiscoveryAccountsCommand === "function");
assert(typeof ListClassificationJobsCommand === "function");
assert(typeof ListClassificationScopesCommand === "function");
assert(typeof ListCustomDataIdentifiersCommand === "function");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindingsFiltersCommand === "function");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListManagedDataIdentifiersCommand === "function");
assert(typeof ListMembersCommand === "function");
assert(typeof ListOrganizationAdminAccountsCommand === "function");
assert(typeof ListResourceProfileArtifactsCommand === "function");
assert(typeof ListResourceProfileDetectionsCommand === "function");
assert(typeof ListSensitivityInspectionTemplatesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof PutClassificationExportConfigurationCommand === "function");
assert(typeof PutFindingsPublicationConfigurationCommand === "function");
assert(typeof SearchResourcesCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof TestCustomDataIdentifierCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAllowListCommand === "function");
assert(typeof UpdateAutomatedDiscoveryConfigurationCommand === "function");
assert(typeof UpdateClassificationJobCommand === "function");
assert(typeof UpdateClassificationScopeCommand === "function");
assert(typeof UpdateFindingsFilterCommand === "function");
assert(typeof UpdateMacieSessionCommand === "function");
assert(typeof UpdateMemberSessionCommand === "function");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateResourceProfileCommand === "function");
assert(typeof UpdateResourceProfileDetectionsCommand === "function");
assert(typeof UpdateRevealConfigurationCommand === "function");
assert(typeof UpdateSensitivityInspectionTemplateCommand === "function");
// enums
assert(typeof AdminStatus === "object");
assert(typeof AllowListStatusCode === "object");
assert(typeof AllowsUnencryptedObjectUploads === "object");
assert(typeof AutoEnableMode === "object");
assert(typeof AutomatedDiscoveryAccountStatus === "object");
assert(typeof AutomatedDiscoveryAccountUpdateErrorCode === "object");
assert(typeof AutomatedDiscoveryMonitoringStatus === "object");
assert(typeof AutomatedDiscoveryStatus === "object");
assert(typeof AvailabilityCode === "object");
assert(typeof BucketMetadataErrorCode === "object");
assert(typeof ClassificationScopeUpdateOperation === "object");
assert(typeof Currency === "object");
assert(typeof DataIdentifierSeverity === "object");
assert(typeof DataIdentifierType === "object");
assert(typeof DayOfWeek === "object");
assert(typeof EffectivePermission === "object");
assert(typeof EncryptionType === "object");
assert(typeof ErrorCode === "object");
assert(typeof FindingActionType === "object");
assert(typeof FindingCategory === "object");
assert(typeof FindingPublishingFrequency === "object");
assert(typeof FindingsFilterAction === "object");
assert(typeof FindingStatisticsSortAttributeName === "object");
assert(typeof FindingType === "object");
assert(typeof GroupBy === "object");
assert(typeof IsDefinedInJob === "object");
assert(typeof IsMonitoredByJob === "object");
assert(typeof JobComparator === "object");
assert(typeof JobStatus === "object");
assert(typeof JobType === "object");
assert(typeof LastRunErrorStatusCode === "object");
assert(typeof ListJobsFilterKey === "object");
assert(typeof ListJobsSortAttributeName === "object");
assert(typeof MacieStatus === "object");
assert(typeof ManagedDataIdentifierSelector === "object");
assert(typeof OrderBy === "object");
assert(typeof OriginType === "object");
assert(typeof RelationshipStatus === "object");
assert(typeof RetrievalMode === "object");
assert(typeof RevealRequestStatus === "object");
assert(typeof RevealStatus === "object");
assert(typeof ScopeFilterKey === "object");
assert(typeof SearchResourcesComparator === "object");
assert(typeof SearchResourcesSimpleCriterionKey === "object");
assert(typeof SearchResourcesSortAttributeName === "object");
assert(typeof SensitiveDataItemCategory === "object");
assert(typeof SeverityDescription === "object");
assert(typeof SharedAccess === "object");
assert(typeof SimpleCriterionKeyForJob === "object");
assert(typeof StorageClass === "object");
assert(typeof TagTarget === "object");
assert(typeof TimeRange === "object");
assert(typeof Type === "object");
assert(typeof UnavailabilityReasonCode === "object");
assert(typeof Unit === "object");
assert(typeof UsageStatisticsFilterComparator === "object");
assert(typeof UsageStatisticsFilterKey === "object");
assert(typeof UsageStatisticsSortKey === "object");
assert(typeof UsageType === "object");
assert(typeof UserIdentityType === "object");
// errors
assert(AccessDeniedException.prototype instanceof Macie2ServiceException);
assert(ConflictException.prototype instanceof Macie2ServiceException);
assert(InternalServerException.prototype instanceof Macie2ServiceException);
assert(ResourceNotFoundException.prototype instanceof Macie2ServiceException);
assert(ServiceQuotaExceededException.prototype instanceof Macie2ServiceException);
assert(ThrottlingException.prototype instanceof Macie2ServiceException);
assert(UnprocessableEntityException.prototype instanceof Macie2ServiceException);
assert(ValidationException.prototype instanceof Macie2ServiceException);
assert(Macie2ServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForFindingRevealed === "function");
assert(typeof waitUntilFindingRevealed === "function");
// paginators
assert(typeof paginateDescribeBuckets === "function");
assert(typeof paginateGetUsageStatistics === "function");
assert(typeof paginateListAllowLists === "function");
assert(typeof paginateListAutomatedDiscoveryAccounts === "function");
assert(typeof paginateListClassificationJobs === "function");
assert(typeof paginateListClassificationScopes === "function");
assert(typeof paginateListCustomDataIdentifiers === "function");
assert(typeof paginateListFindings === "function");
assert(typeof paginateListFindingsFilters === "function");
assert(typeof paginateListInvitations === "function");
assert(typeof paginateListManagedDataIdentifiers === "function");
assert(typeof paginateListMembers === "function");
assert(typeof paginateListOrganizationAdminAccounts === "function");
assert(typeof paginateListResourceProfileArtifacts === "function");
assert(typeof paginateListResourceProfileDetections === "function");
assert(typeof paginateListSensitivityInspectionTemplates === "function");
assert(typeof paginateSearchResources === "function");
console.log(`Macie2 index test passed.`);
