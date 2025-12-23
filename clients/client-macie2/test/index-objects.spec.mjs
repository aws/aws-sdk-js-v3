import {
  _Record$,
  AcceptInvitation$,
  AcceptInvitationCommand,
  AcceptInvitationRequest$,
  AcceptInvitationResponse$,
  AccessControlList$,
  AccessDeniedException,
  AccessDeniedException$,
  AccountDetail$,
  AccountLevelPermissions$,
  AdminAccount$,
  AdminStatus,
  AllowListCriteria$,
  AllowListStatus$,
  AllowListStatusCode,
  AllowListSummary$,
  AllowsUnencryptedObjectUploads,
  ApiCallDetails$,
  AssumedRole$,
  AutoEnableMode,
  AutomatedDiscoveryAccount$,
  AutomatedDiscoveryAccountStatus,
  AutomatedDiscoveryAccountUpdate$,
  AutomatedDiscoveryAccountUpdateError$,
  AutomatedDiscoveryAccountUpdateErrorCode,
  AutomatedDiscoveryMonitoringStatus,
  AutomatedDiscoveryStatus,
  AvailabilityCode,
  AwsAccount$,
  AwsService$,
  BatchGetCustomDataIdentifiers$,
  BatchGetCustomDataIdentifiersCommand,
  BatchGetCustomDataIdentifiersRequest$,
  BatchGetCustomDataIdentifiersResponse$,
  BatchGetCustomDataIdentifierSummary$,
  BatchUpdateAutomatedDiscoveryAccounts$,
  BatchUpdateAutomatedDiscoveryAccountsCommand,
  BatchUpdateAutomatedDiscoveryAccountsRequest$,
  BatchUpdateAutomatedDiscoveryAccountsResponse$,
  BlockPublicAccess$,
  BucketCountByEffectivePermission$,
  BucketCountByEncryptionType$,
  BucketCountBySharedAccessType$,
  BucketCountPolicyAllowsUnencryptedObjectUploads$,
  BucketCriteriaAdditionalProperties$,
  BucketLevelPermissions$,
  BucketMetadata$,
  BucketMetadataErrorCode,
  BucketPermissionConfiguration$,
  BucketPolicy$,
  BucketPublicAccess$,
  BucketServerSideEncryption$,
  BucketSortCriteria$,
  BucketStatisticsBySensitivity$,
  Cell$,
  ClassificationDetails$,
  ClassificationExportConfiguration$,
  ClassificationResult$,
  ClassificationResultStatus$,
  ClassificationScopeSummary$,
  ClassificationScopeUpdateOperation,
  ConflictException,
  ConflictException$,
  CreateAllowList$,
  CreateAllowListCommand,
  CreateAllowListRequest$,
  CreateAllowListResponse$,
  CreateClassificationJob$,
  CreateClassificationJobCommand,
  CreateClassificationJobRequest$,
  CreateClassificationJobResponse$,
  CreateCustomDataIdentifier$,
  CreateCustomDataIdentifierCommand,
  CreateCustomDataIdentifierRequest$,
  CreateCustomDataIdentifierResponse$,
  CreateFindingsFilter$,
  CreateFindingsFilterCommand,
  CreateFindingsFilterRequest$,
  CreateFindingsFilterResponse$,
  CreateInvitations$,
  CreateInvitationsCommand,
  CreateInvitationsRequest$,
  CreateInvitationsResponse$,
  CreateMember$,
  CreateMemberCommand,
  CreateMemberRequest$,
  CreateMemberResponse$,
  CreateSampleFindings$,
  CreateSampleFindingsCommand,
  CreateSampleFindingsRequest$,
  CreateSampleFindingsResponse$,
  CriteriaBlockForJob$,
  CriteriaForJob$,
  CriterionAdditionalProperties$,
  Currency,
  CustomDataIdentifiers$,
  CustomDataIdentifierSummary$,
  CustomDetection$,
  DailySchedule$,
  DataIdentifierSeverity,
  DataIdentifierType,
  DayOfWeek,
  DeclineInvitations$,
  DeclineInvitationsCommand,
  DeclineInvitationsRequest$,
  DeclineInvitationsResponse$,
  DefaultDetection$,
  DeleteAllowList$,
  DeleteAllowListCommand,
  DeleteAllowListRequest$,
  DeleteAllowListResponse$,
  DeleteCustomDataIdentifier$,
  DeleteCustomDataIdentifierCommand,
  DeleteCustomDataIdentifierRequest$,
  DeleteCustomDataIdentifierResponse$,
  DeleteFindingsFilter$,
  DeleteFindingsFilterCommand,
  DeleteFindingsFilterRequest$,
  DeleteFindingsFilterResponse$,
  DeleteInvitations$,
  DeleteInvitationsCommand,
  DeleteInvitationsRequest$,
  DeleteInvitationsResponse$,
  DeleteMember$,
  DeleteMemberCommand,
  DeleteMemberRequest$,
  DeleteMemberResponse$,
  DescribeBuckets$,
  DescribeBucketsCommand,
  DescribeBucketsRequest$,
  DescribeBucketsResponse$,
  DescribeClassificationJob$,
  DescribeClassificationJobCommand,
  DescribeClassificationJobRequest$,
  DescribeClassificationJobResponse$,
  DescribeOrganizationConfiguration$,
  DescribeOrganizationConfigurationCommand,
  DescribeOrganizationConfigurationRequest$,
  DescribeOrganizationConfigurationResponse$,
  DetectedDataDetails$,
  Detection$,
  DisableMacie$,
  DisableMacieCommand,
  DisableMacieRequest$,
  DisableMacieResponse$,
  DisableOrganizationAdminAccount$,
  DisableOrganizationAdminAccountCommand,
  DisableOrganizationAdminAccountRequest$,
  DisableOrganizationAdminAccountResponse$,
  DisassociateFromAdministratorAccount$,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromAdministratorAccountRequest$,
  DisassociateFromAdministratorAccountResponse$,
  DisassociateFromMasterAccount$,
  DisassociateFromMasterAccountCommand,
  DisassociateFromMasterAccountRequest$,
  DisassociateFromMasterAccountResponse$,
  DisassociateMember$,
  DisassociateMemberCommand,
  DisassociateMemberRequest$,
  DisassociateMemberResponse$,
  DomainDetails$,
  EffectivePermission,
  EnableMacie$,
  EnableMacieCommand,
  EnableMacieRequest$,
  EnableMacieResponse$,
  EnableOrganizationAdminAccount$,
  EnableOrganizationAdminAccountCommand,
  EnableOrganizationAdminAccountRequest$,
  EnableOrganizationAdminAccountResponse$,
  EncryptionType,
  ErrorCode,
  FederatedUser$,
  Finding$,
  FindingAction$,
  FindingActionType,
  FindingActor$,
  FindingCategory,
  FindingCriteria$,
  FindingPublishingFrequency,
  FindingsFilterAction,
  FindingsFilterListItem$,
  FindingStatisticsSortAttributeName,
  FindingStatisticsSortCriteria$,
  FindingType,
  GetAdministratorAccount$,
  GetAdministratorAccountCommand,
  GetAdministratorAccountRequest$,
  GetAdministratorAccountResponse$,
  GetAllowList$,
  GetAllowListCommand,
  GetAllowListRequest$,
  GetAllowListResponse$,
  GetAutomatedDiscoveryConfiguration$,
  GetAutomatedDiscoveryConfigurationCommand,
  GetAutomatedDiscoveryConfigurationRequest$,
  GetAutomatedDiscoveryConfigurationResponse$,
  GetBucketStatistics$,
  GetBucketStatisticsCommand,
  GetBucketStatisticsRequest$,
  GetBucketStatisticsResponse$,
  GetClassificationExportConfiguration$,
  GetClassificationExportConfigurationCommand,
  GetClassificationExportConfigurationRequest$,
  GetClassificationExportConfigurationResponse$,
  GetClassificationScope$,
  GetClassificationScopeCommand,
  GetClassificationScopeRequest$,
  GetClassificationScopeResponse$,
  GetCustomDataIdentifier$,
  GetCustomDataIdentifierCommand,
  GetCustomDataIdentifierRequest$,
  GetCustomDataIdentifierResponse$,
  GetFindings$,
  GetFindingsCommand,
  GetFindingsFilter$,
  GetFindingsFilterCommand,
  GetFindingsFilterRequest$,
  GetFindingsFilterResponse$,
  GetFindingsPublicationConfiguration$,
  GetFindingsPublicationConfigurationCommand,
  GetFindingsPublicationConfigurationRequest$,
  GetFindingsPublicationConfigurationResponse$,
  GetFindingsRequest$,
  GetFindingsResponse$,
  GetFindingStatistics$,
  GetFindingStatisticsCommand,
  GetFindingStatisticsRequest$,
  GetFindingStatisticsResponse$,
  GetInvitationsCount$,
  GetInvitationsCountCommand,
  GetInvitationsCountRequest$,
  GetInvitationsCountResponse$,
  GetMacieSession$,
  GetMacieSessionCommand,
  GetMacieSessionRequest$,
  GetMacieSessionResponse$,
  GetMasterAccount$,
  GetMasterAccountCommand,
  GetMasterAccountRequest$,
  GetMasterAccountResponse$,
  GetMember$,
  GetMemberCommand,
  GetMemberRequest$,
  GetMemberResponse$,
  GetResourceProfile$,
  GetResourceProfileCommand,
  GetResourceProfileRequest$,
  GetResourceProfileResponse$,
  GetRevealConfiguration$,
  GetRevealConfigurationCommand,
  GetRevealConfigurationRequest$,
  GetRevealConfigurationResponse$,
  GetSensitiveDataOccurrences$,
  GetSensitiveDataOccurrencesAvailability$,
  GetSensitiveDataOccurrencesAvailabilityCommand,
  GetSensitiveDataOccurrencesAvailabilityRequest$,
  GetSensitiveDataOccurrencesAvailabilityResponse$,
  GetSensitiveDataOccurrencesCommand,
  GetSensitiveDataOccurrencesRequest$,
  GetSensitiveDataOccurrencesResponse$,
  GetSensitivityInspectionTemplate$,
  GetSensitivityInspectionTemplateCommand,
  GetSensitivityInspectionTemplateRequest$,
  GetSensitivityInspectionTemplateResponse$,
  GetUsageStatistics$,
  GetUsageStatisticsCommand,
  GetUsageStatisticsRequest$,
  GetUsageStatisticsResponse$,
  GetUsageTotals$,
  GetUsageTotalsCommand,
  GetUsageTotalsRequest$,
  GetUsageTotalsResponse$,
  GroupBy,
  GroupCount$,
  IamUser$,
  InternalServerException,
  InternalServerException$,
  Invitation$,
  IpAddressDetails$,
  IpCity$,
  IpCountry$,
  IpGeoLocation$,
  IpOwner$,
  IsDefinedInJob,
  IsMonitoredByJob,
  JobComparator,
  JobDetails$,
  JobScheduleFrequency$,
  JobScopeTerm$,
  JobScopingBlock$,
  JobStatus,
  JobSummary$,
  JobType,
  KeyValuePair$,
  LastRunErrorStatus$,
  LastRunErrorStatusCode,
  ListAllowLists$,
  ListAllowListsCommand,
  ListAllowListsRequest$,
  ListAllowListsResponse$,
  ListAutomatedDiscoveryAccounts$,
  ListAutomatedDiscoveryAccountsCommand,
  ListAutomatedDiscoveryAccountsRequest$,
  ListAutomatedDiscoveryAccountsResponse$,
  ListClassificationJobs$,
  ListClassificationJobsCommand,
  ListClassificationJobsRequest$,
  ListClassificationJobsResponse$,
  ListClassificationScopes$,
  ListClassificationScopesCommand,
  ListClassificationScopesRequest$,
  ListClassificationScopesResponse$,
  ListCustomDataIdentifiers$,
  ListCustomDataIdentifiersCommand,
  ListCustomDataIdentifiersRequest$,
  ListCustomDataIdentifiersResponse$,
  ListFindings$,
  ListFindingsCommand,
  ListFindingsFilters$,
  ListFindingsFiltersCommand,
  ListFindingsFiltersRequest$,
  ListFindingsFiltersResponse$,
  ListFindingsRequest$,
  ListFindingsResponse$,
  ListInvitations$,
  ListInvitationsCommand,
  ListInvitationsRequest$,
  ListInvitationsResponse$,
  ListJobsFilterCriteria$,
  ListJobsFilterKey,
  ListJobsFilterTerm$,
  ListJobsSortAttributeName,
  ListJobsSortCriteria$,
  ListManagedDataIdentifiers$,
  ListManagedDataIdentifiersCommand,
  ListManagedDataIdentifiersRequest$,
  ListManagedDataIdentifiersResponse$,
  ListMembers$,
  ListMembersCommand,
  ListMembersRequest$,
  ListMembersResponse$,
  ListOrganizationAdminAccounts$,
  ListOrganizationAdminAccountsCommand,
  ListOrganizationAdminAccountsRequest$,
  ListOrganizationAdminAccountsResponse$,
  ListResourceProfileArtifacts$,
  ListResourceProfileArtifactsCommand,
  ListResourceProfileArtifactsRequest$,
  ListResourceProfileArtifactsResponse$,
  ListResourceProfileDetections$,
  ListResourceProfileDetectionsCommand,
  ListResourceProfileDetectionsRequest$,
  ListResourceProfileDetectionsResponse$,
  ListSensitivityInspectionTemplates$,
  ListSensitivityInspectionTemplatesCommand,
  ListSensitivityInspectionTemplatesRequest$,
  ListSensitivityInspectionTemplatesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  Macie2,
  Macie2Client,
  Macie2ServiceException,
  MacieStatus,
  ManagedDataIdentifierSelector,
  ManagedDataIdentifierSummary$,
  MatchingBucket$,
  MatchingResource$,
  Member$,
  MonthlySchedule$,
  ObjectCountByEncryptionType$,
  ObjectLevelStatistics$,
  Occurrences$,
  OrderBy,
  OriginType,
  Page$,
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
  PolicyDetails$,
  PutClassificationExportConfiguration$,
  PutClassificationExportConfigurationCommand,
  PutClassificationExportConfigurationRequest$,
  PutClassificationExportConfigurationResponse$,
  PutFindingsPublicationConfiguration$,
  PutFindingsPublicationConfigurationCommand,
  PutFindingsPublicationConfigurationRequest$,
  PutFindingsPublicationConfigurationResponse$,
  Range$,
  RelationshipStatus,
  ReplicationDetails$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceProfileArtifact$,
  ResourcesAffected$,
  ResourceStatistics$,
  RetrievalConfiguration$,
  RetrievalMode,
  RevealConfiguration$,
  RevealRequestStatus,
  RevealStatus,
  S3Bucket$,
  S3BucketCriteriaForJob$,
  S3BucketDefinitionForJob$,
  S3BucketOwner$,
  S3ClassificationScope$,
  S3ClassificationScopeExclusion$,
  S3ClassificationScopeExclusionUpdate$,
  S3ClassificationScopeUpdate$,
  S3Destination$,
  S3JobDefinition$,
  S3Object$,
  S3WordsList$,
  ScopeFilterKey,
  Scoping$,
  SearchResources$,
  SearchResourcesBucketCriteria$,
  SearchResourcesCommand,
  SearchResourcesComparator,
  SearchResourcesCriteria$,
  SearchResourcesCriteriaBlock$,
  SearchResourcesRequest$,
  SearchResourcesResponse$,
  SearchResourcesSimpleCriterion$,
  SearchResourcesSimpleCriterionKey,
  SearchResourcesSortAttributeName,
  SearchResourcesSortCriteria$,
  SearchResourcesTagCriterion$,
  SearchResourcesTagCriterionPair$,
  SecurityHubConfiguration$,
  SensitiveDataItem$,
  SensitiveDataItemCategory,
  SensitivityAggregations$,
  SensitivityInspectionTemplateExcludes$,
  SensitivityInspectionTemplateIncludes$,
  SensitivityInspectionTemplatesEntry$,
  ServerSideEncryption$,
  ServiceLimit$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SessionContext$,
  SessionContextAttributes$,
  SessionIssuer$,
  Severity$,
  SeverityDescription,
  SeverityLevel$,
  SharedAccess,
  SimpleCriterionForJob$,
  SimpleCriterionKeyForJob,
  SimpleScopeTerm$,
  SortCriteria$,
  Statistics$,
  StorageClass,
  SuppressDataIdentifier$,
  TagCriterionForJob$,
  TagCriterionPairForJob$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TagScopeTerm$,
  TagTarget,
  TagValuePair$,
  TestCustomDataIdentifier$,
  TestCustomDataIdentifierCommand,
  TestCustomDataIdentifierRequest$,
  TestCustomDataIdentifierResponse$,
  ThrottlingException,
  ThrottlingException$,
  TimeRange,
  Type,
  UnavailabilityReasonCode,
  Unit,
  UnprocessableEntityException,
  UnprocessableEntityException$,
  UnprocessedAccount$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAllowList$,
  UpdateAllowListCommand,
  UpdateAllowListRequest$,
  UpdateAllowListResponse$,
  UpdateAutomatedDiscoveryConfiguration$,
  UpdateAutomatedDiscoveryConfigurationCommand,
  UpdateAutomatedDiscoveryConfigurationRequest$,
  UpdateAutomatedDiscoveryConfigurationResponse$,
  UpdateClassificationJob$,
  UpdateClassificationJobCommand,
  UpdateClassificationJobRequest$,
  UpdateClassificationJobResponse$,
  UpdateClassificationScope$,
  UpdateClassificationScopeCommand,
  UpdateClassificationScopeRequest$,
  UpdateClassificationScopeResponse$,
  UpdateFindingsFilter$,
  UpdateFindingsFilterCommand,
  UpdateFindingsFilterRequest$,
  UpdateFindingsFilterResponse$,
  UpdateMacieSession$,
  UpdateMacieSessionCommand,
  UpdateMacieSessionRequest$,
  UpdateMacieSessionResponse$,
  UpdateMemberSession$,
  UpdateMemberSessionCommand,
  UpdateMemberSessionRequest$,
  UpdateMemberSessionResponse$,
  UpdateOrganizationConfiguration$,
  UpdateOrganizationConfigurationCommand,
  UpdateOrganizationConfigurationRequest$,
  UpdateOrganizationConfigurationResponse$,
  UpdateResourceProfile$,
  UpdateResourceProfileCommand,
  UpdateResourceProfileDetections$,
  UpdateResourceProfileDetectionsCommand,
  UpdateResourceProfileDetectionsRequest$,
  UpdateResourceProfileDetectionsResponse$,
  UpdateResourceProfileRequest$,
  UpdateResourceProfileResponse$,
  UpdateRetrievalConfiguration$,
  UpdateRevealConfiguration$,
  UpdateRevealConfigurationCommand,
  UpdateRevealConfigurationRequest$,
  UpdateRevealConfigurationResponse$,
  UpdateSensitivityInspectionTemplate$,
  UpdateSensitivityInspectionTemplateCommand,
  UpdateSensitivityInspectionTemplateRequest$,
  UpdateSensitivityInspectionTemplateResponse$,
  UsageByAccount$,
  UsageRecord$,
  UsageStatisticsFilter$,
  UsageStatisticsFilterComparator,
  UsageStatisticsFilterKey,
  UsageStatisticsSortBy$,
  UsageStatisticsSortKey,
  UsageTotal$,
  UsageType,
  UserIdentity$,
  UserIdentityRoot$,
  UserIdentityType,
  UserPausedDetails$,
  ValidationException,
  ValidationException$,
  waitForFindingRevealed,
  waitUntilFindingRevealed,
  WeeklySchedule$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof Macie2Client === "function");
assert(typeof Macie2 === "function");
// commands
assert(typeof AcceptInvitationCommand === "function");
assert(typeof AcceptInvitation$ === "object");
assert(typeof BatchGetCustomDataIdentifiersCommand === "function");
assert(typeof BatchGetCustomDataIdentifiers$ === "object");
assert(typeof BatchUpdateAutomatedDiscoveryAccountsCommand === "function");
assert(typeof BatchUpdateAutomatedDiscoveryAccounts$ === "object");
assert(typeof CreateAllowListCommand === "function");
assert(typeof CreateAllowList$ === "object");
assert(typeof CreateClassificationJobCommand === "function");
assert(typeof CreateClassificationJob$ === "object");
assert(typeof CreateCustomDataIdentifierCommand === "function");
assert(typeof CreateCustomDataIdentifier$ === "object");
assert(typeof CreateFindingsFilterCommand === "function");
assert(typeof CreateFindingsFilter$ === "object");
assert(typeof CreateInvitationsCommand === "function");
assert(typeof CreateInvitations$ === "object");
assert(typeof CreateMemberCommand === "function");
assert(typeof CreateMember$ === "object");
assert(typeof CreateSampleFindingsCommand === "function");
assert(typeof CreateSampleFindings$ === "object");
assert(typeof DeclineInvitationsCommand === "function");
assert(typeof DeclineInvitations$ === "object");
assert(typeof DeleteAllowListCommand === "function");
assert(typeof DeleteAllowList$ === "object");
assert(typeof DeleteCustomDataIdentifierCommand === "function");
assert(typeof DeleteCustomDataIdentifier$ === "object");
assert(typeof DeleteFindingsFilterCommand === "function");
assert(typeof DeleteFindingsFilter$ === "object");
assert(typeof DeleteInvitationsCommand === "function");
assert(typeof DeleteInvitations$ === "object");
assert(typeof DeleteMemberCommand === "function");
assert(typeof DeleteMember$ === "object");
assert(typeof DescribeBucketsCommand === "function");
assert(typeof DescribeBuckets$ === "object");
assert(typeof DescribeClassificationJobCommand === "function");
assert(typeof DescribeClassificationJob$ === "object");
assert(typeof DescribeOrganizationConfigurationCommand === "function");
assert(typeof DescribeOrganizationConfiguration$ === "object");
assert(typeof DisableMacieCommand === "function");
assert(typeof DisableMacie$ === "object");
assert(typeof DisableOrganizationAdminAccountCommand === "function");
assert(typeof DisableOrganizationAdminAccount$ === "object");
assert(typeof DisassociateFromAdministratorAccountCommand === "function");
assert(typeof DisassociateFromAdministratorAccount$ === "object");
assert(typeof DisassociateFromMasterAccountCommand === "function");
assert(typeof DisassociateFromMasterAccount$ === "object");
assert(typeof DisassociateMemberCommand === "function");
assert(typeof DisassociateMember$ === "object");
assert(typeof EnableMacieCommand === "function");
assert(typeof EnableMacie$ === "object");
assert(typeof EnableOrganizationAdminAccountCommand === "function");
assert(typeof EnableOrganizationAdminAccount$ === "object");
assert(typeof GetAdministratorAccountCommand === "function");
assert(typeof GetAdministratorAccount$ === "object");
assert(typeof GetAllowListCommand === "function");
assert(typeof GetAllowList$ === "object");
assert(typeof GetAutomatedDiscoveryConfigurationCommand === "function");
assert(typeof GetAutomatedDiscoveryConfiguration$ === "object");
assert(typeof GetBucketStatisticsCommand === "function");
assert(typeof GetBucketStatistics$ === "object");
assert(typeof GetClassificationExportConfigurationCommand === "function");
assert(typeof GetClassificationExportConfiguration$ === "object");
assert(typeof GetClassificationScopeCommand === "function");
assert(typeof GetClassificationScope$ === "object");
assert(typeof GetCustomDataIdentifierCommand === "function");
assert(typeof GetCustomDataIdentifier$ === "object");
assert(typeof GetFindingsCommand === "function");
assert(typeof GetFindings$ === "object");
assert(typeof GetFindingsFilterCommand === "function");
assert(typeof GetFindingsFilter$ === "object");
assert(typeof GetFindingsPublicationConfigurationCommand === "function");
assert(typeof GetFindingsPublicationConfiguration$ === "object");
assert(typeof GetFindingStatisticsCommand === "function");
assert(typeof GetFindingStatistics$ === "object");
assert(typeof GetInvitationsCountCommand === "function");
assert(typeof GetInvitationsCount$ === "object");
assert(typeof GetMacieSessionCommand === "function");
assert(typeof GetMacieSession$ === "object");
assert(typeof GetMasterAccountCommand === "function");
assert(typeof GetMasterAccount$ === "object");
assert(typeof GetMemberCommand === "function");
assert(typeof GetMember$ === "object");
assert(typeof GetResourceProfileCommand === "function");
assert(typeof GetResourceProfile$ === "object");
assert(typeof GetRevealConfigurationCommand === "function");
assert(typeof GetRevealConfiguration$ === "object");
assert(typeof GetSensitiveDataOccurrencesCommand === "function");
assert(typeof GetSensitiveDataOccurrences$ === "object");
assert(typeof GetSensitiveDataOccurrencesAvailabilityCommand === "function");
assert(typeof GetSensitiveDataOccurrencesAvailability$ === "object");
assert(typeof GetSensitivityInspectionTemplateCommand === "function");
assert(typeof GetSensitivityInspectionTemplate$ === "object");
assert(typeof GetUsageStatisticsCommand === "function");
assert(typeof GetUsageStatistics$ === "object");
assert(typeof GetUsageTotalsCommand === "function");
assert(typeof GetUsageTotals$ === "object");
assert(typeof ListAllowListsCommand === "function");
assert(typeof ListAllowLists$ === "object");
assert(typeof ListAutomatedDiscoveryAccountsCommand === "function");
assert(typeof ListAutomatedDiscoveryAccounts$ === "object");
assert(typeof ListClassificationJobsCommand === "function");
assert(typeof ListClassificationJobs$ === "object");
assert(typeof ListClassificationScopesCommand === "function");
assert(typeof ListClassificationScopes$ === "object");
assert(typeof ListCustomDataIdentifiersCommand === "function");
assert(typeof ListCustomDataIdentifiers$ === "object");
assert(typeof ListFindingsCommand === "function");
assert(typeof ListFindings$ === "object");
assert(typeof ListFindingsFiltersCommand === "function");
assert(typeof ListFindingsFilters$ === "object");
assert(typeof ListInvitationsCommand === "function");
assert(typeof ListInvitations$ === "object");
assert(typeof ListManagedDataIdentifiersCommand === "function");
assert(typeof ListManagedDataIdentifiers$ === "object");
assert(typeof ListMembersCommand === "function");
assert(typeof ListMembers$ === "object");
assert(typeof ListOrganizationAdminAccountsCommand === "function");
assert(typeof ListOrganizationAdminAccounts$ === "object");
assert(typeof ListResourceProfileArtifactsCommand === "function");
assert(typeof ListResourceProfileArtifacts$ === "object");
assert(typeof ListResourceProfileDetectionsCommand === "function");
assert(typeof ListResourceProfileDetections$ === "object");
assert(typeof ListSensitivityInspectionTemplatesCommand === "function");
assert(typeof ListSensitivityInspectionTemplates$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof PutClassificationExportConfigurationCommand === "function");
assert(typeof PutClassificationExportConfiguration$ === "object");
assert(typeof PutFindingsPublicationConfigurationCommand === "function");
assert(typeof PutFindingsPublicationConfiguration$ === "object");
assert(typeof SearchResourcesCommand === "function");
assert(typeof SearchResources$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof TestCustomDataIdentifierCommand === "function");
assert(typeof TestCustomDataIdentifier$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAllowListCommand === "function");
assert(typeof UpdateAllowList$ === "object");
assert(typeof UpdateAutomatedDiscoveryConfigurationCommand === "function");
assert(typeof UpdateAutomatedDiscoveryConfiguration$ === "object");
assert(typeof UpdateClassificationJobCommand === "function");
assert(typeof UpdateClassificationJob$ === "object");
assert(typeof UpdateClassificationScopeCommand === "function");
assert(typeof UpdateClassificationScope$ === "object");
assert(typeof UpdateFindingsFilterCommand === "function");
assert(typeof UpdateFindingsFilter$ === "object");
assert(typeof UpdateMacieSessionCommand === "function");
assert(typeof UpdateMacieSession$ === "object");
assert(typeof UpdateMemberSessionCommand === "function");
assert(typeof UpdateMemberSession$ === "object");
assert(typeof UpdateOrganizationConfigurationCommand === "function");
assert(typeof UpdateOrganizationConfiguration$ === "object");
assert(typeof UpdateResourceProfileCommand === "function");
assert(typeof UpdateResourceProfile$ === "object");
assert(typeof UpdateResourceProfileDetectionsCommand === "function");
assert(typeof UpdateResourceProfileDetections$ === "object");
assert(typeof UpdateRevealConfigurationCommand === "function");
assert(typeof UpdateRevealConfiguration$ === "object");
assert(typeof UpdateSensitivityInspectionTemplateCommand === "function");
assert(typeof UpdateSensitivityInspectionTemplate$ === "object");
// structural schemas
assert(typeof AcceptInvitationRequest$ === "object");
assert(typeof AcceptInvitationResponse$ === "object");
assert(typeof AccessControlList$ === "object");
assert(typeof AccountDetail$ === "object");
assert(typeof AccountLevelPermissions$ === "object");
assert(typeof AdminAccount$ === "object");
assert(typeof AllowListCriteria$ === "object");
assert(typeof AllowListStatus$ === "object");
assert(typeof AllowListSummary$ === "object");
assert(typeof ApiCallDetails$ === "object");
assert(typeof AssumedRole$ === "object");
assert(typeof AutomatedDiscoveryAccount$ === "object");
assert(typeof AutomatedDiscoveryAccountUpdate$ === "object");
assert(typeof AutomatedDiscoveryAccountUpdateError$ === "object");
assert(typeof AwsAccount$ === "object");
assert(typeof AwsService$ === "object");
assert(typeof BatchGetCustomDataIdentifiersRequest$ === "object");
assert(typeof BatchGetCustomDataIdentifiersResponse$ === "object");
assert(typeof BatchGetCustomDataIdentifierSummary$ === "object");
assert(typeof BatchUpdateAutomatedDiscoveryAccountsRequest$ === "object");
assert(typeof BatchUpdateAutomatedDiscoveryAccountsResponse$ === "object");
assert(typeof BlockPublicAccess$ === "object");
assert(typeof BucketCountByEffectivePermission$ === "object");
assert(typeof BucketCountByEncryptionType$ === "object");
assert(typeof BucketCountBySharedAccessType$ === "object");
assert(typeof BucketCountPolicyAllowsUnencryptedObjectUploads$ === "object");
assert(typeof BucketCriteriaAdditionalProperties$ === "object");
assert(typeof BucketLevelPermissions$ === "object");
assert(typeof BucketMetadata$ === "object");
assert(typeof BucketPermissionConfiguration$ === "object");
assert(typeof BucketPolicy$ === "object");
assert(typeof BucketPublicAccess$ === "object");
assert(typeof BucketServerSideEncryption$ === "object");
assert(typeof BucketSortCriteria$ === "object");
assert(typeof BucketStatisticsBySensitivity$ === "object");
assert(typeof Cell$ === "object");
assert(typeof ClassificationDetails$ === "object");
assert(typeof ClassificationExportConfiguration$ === "object");
assert(typeof ClassificationResult$ === "object");
assert(typeof ClassificationResultStatus$ === "object");
assert(typeof ClassificationScopeSummary$ === "object");
assert(typeof CreateAllowListRequest$ === "object");
assert(typeof CreateAllowListResponse$ === "object");
assert(typeof CreateClassificationJobRequest$ === "object");
assert(typeof CreateClassificationJobResponse$ === "object");
assert(typeof CreateCustomDataIdentifierRequest$ === "object");
assert(typeof CreateCustomDataIdentifierResponse$ === "object");
assert(typeof CreateFindingsFilterRequest$ === "object");
assert(typeof CreateFindingsFilterResponse$ === "object");
assert(typeof CreateInvitationsRequest$ === "object");
assert(typeof CreateInvitationsResponse$ === "object");
assert(typeof CreateMemberRequest$ === "object");
assert(typeof CreateMemberResponse$ === "object");
assert(typeof CreateSampleFindingsRequest$ === "object");
assert(typeof CreateSampleFindingsResponse$ === "object");
assert(typeof CriteriaBlockForJob$ === "object");
assert(typeof CriteriaForJob$ === "object");
assert(typeof CriterionAdditionalProperties$ === "object");
assert(typeof CustomDataIdentifiers$ === "object");
assert(typeof CustomDataIdentifierSummary$ === "object");
assert(typeof CustomDetection$ === "object");
assert(typeof DailySchedule$ === "object");
assert(typeof DeclineInvitationsRequest$ === "object");
assert(typeof DeclineInvitationsResponse$ === "object");
assert(typeof DefaultDetection$ === "object");
assert(typeof DeleteAllowListRequest$ === "object");
assert(typeof DeleteAllowListResponse$ === "object");
assert(typeof DeleteCustomDataIdentifierRequest$ === "object");
assert(typeof DeleteCustomDataIdentifierResponse$ === "object");
assert(typeof DeleteFindingsFilterRequest$ === "object");
assert(typeof DeleteFindingsFilterResponse$ === "object");
assert(typeof DeleteInvitationsRequest$ === "object");
assert(typeof DeleteInvitationsResponse$ === "object");
assert(typeof DeleteMemberRequest$ === "object");
assert(typeof DeleteMemberResponse$ === "object");
assert(typeof DescribeBucketsRequest$ === "object");
assert(typeof DescribeBucketsResponse$ === "object");
assert(typeof DescribeClassificationJobRequest$ === "object");
assert(typeof DescribeClassificationJobResponse$ === "object");
assert(typeof DescribeOrganizationConfigurationRequest$ === "object");
assert(typeof DescribeOrganizationConfigurationResponse$ === "object");
assert(typeof DetectedDataDetails$ === "object");
assert(typeof Detection$ === "object");
assert(typeof DisableMacieRequest$ === "object");
assert(typeof DisableMacieResponse$ === "object");
assert(typeof DisableOrganizationAdminAccountRequest$ === "object");
assert(typeof DisableOrganizationAdminAccountResponse$ === "object");
assert(typeof DisassociateFromAdministratorAccountRequest$ === "object");
assert(typeof DisassociateFromAdministratorAccountResponse$ === "object");
assert(typeof DisassociateFromMasterAccountRequest$ === "object");
assert(typeof DisassociateFromMasterAccountResponse$ === "object");
assert(typeof DisassociateMemberRequest$ === "object");
assert(typeof DisassociateMemberResponse$ === "object");
assert(typeof DomainDetails$ === "object");
assert(typeof EnableMacieRequest$ === "object");
assert(typeof EnableMacieResponse$ === "object");
assert(typeof EnableOrganizationAdminAccountRequest$ === "object");
assert(typeof EnableOrganizationAdminAccountResponse$ === "object");
assert(typeof FederatedUser$ === "object");
assert(typeof Finding$ === "object");
assert(typeof FindingAction$ === "object");
assert(typeof FindingActor$ === "object");
assert(typeof FindingCriteria$ === "object");
assert(typeof FindingsFilterListItem$ === "object");
assert(typeof FindingStatisticsSortCriteria$ === "object");
assert(typeof GetAdministratorAccountRequest$ === "object");
assert(typeof GetAdministratorAccountResponse$ === "object");
assert(typeof GetAllowListRequest$ === "object");
assert(typeof GetAllowListResponse$ === "object");
assert(typeof GetAutomatedDiscoveryConfigurationRequest$ === "object");
assert(typeof GetAutomatedDiscoveryConfigurationResponse$ === "object");
assert(typeof GetBucketStatisticsRequest$ === "object");
assert(typeof GetBucketStatisticsResponse$ === "object");
assert(typeof GetClassificationExportConfigurationRequest$ === "object");
assert(typeof GetClassificationExportConfigurationResponse$ === "object");
assert(typeof GetClassificationScopeRequest$ === "object");
assert(typeof GetClassificationScopeResponse$ === "object");
assert(typeof GetCustomDataIdentifierRequest$ === "object");
assert(typeof GetCustomDataIdentifierResponse$ === "object");
assert(typeof GetFindingsFilterRequest$ === "object");
assert(typeof GetFindingsFilterResponse$ === "object");
assert(typeof GetFindingsPublicationConfigurationRequest$ === "object");
assert(typeof GetFindingsPublicationConfigurationResponse$ === "object");
assert(typeof GetFindingsRequest$ === "object");
assert(typeof GetFindingsResponse$ === "object");
assert(typeof GetFindingStatisticsRequest$ === "object");
assert(typeof GetFindingStatisticsResponse$ === "object");
assert(typeof GetInvitationsCountRequest$ === "object");
assert(typeof GetInvitationsCountResponse$ === "object");
assert(typeof GetMacieSessionRequest$ === "object");
assert(typeof GetMacieSessionResponse$ === "object");
assert(typeof GetMasterAccountRequest$ === "object");
assert(typeof GetMasterAccountResponse$ === "object");
assert(typeof GetMemberRequest$ === "object");
assert(typeof GetMemberResponse$ === "object");
assert(typeof GetResourceProfileRequest$ === "object");
assert(typeof GetResourceProfileResponse$ === "object");
assert(typeof GetRevealConfigurationRequest$ === "object");
assert(typeof GetRevealConfigurationResponse$ === "object");
assert(typeof GetSensitiveDataOccurrencesAvailabilityRequest$ === "object");
assert(typeof GetSensitiveDataOccurrencesAvailabilityResponse$ === "object");
assert(typeof GetSensitiveDataOccurrencesRequest$ === "object");
assert(typeof GetSensitiveDataOccurrencesResponse$ === "object");
assert(typeof GetSensitivityInspectionTemplateRequest$ === "object");
assert(typeof GetSensitivityInspectionTemplateResponse$ === "object");
assert(typeof GetUsageStatisticsRequest$ === "object");
assert(typeof GetUsageStatisticsResponse$ === "object");
assert(typeof GetUsageTotalsRequest$ === "object");
assert(typeof GetUsageTotalsResponse$ === "object");
assert(typeof GroupCount$ === "object");
assert(typeof IamUser$ === "object");
assert(typeof Invitation$ === "object");
assert(typeof IpAddressDetails$ === "object");
assert(typeof IpCity$ === "object");
assert(typeof IpCountry$ === "object");
assert(typeof IpGeoLocation$ === "object");
assert(typeof IpOwner$ === "object");
assert(typeof JobDetails$ === "object");
assert(typeof JobScheduleFrequency$ === "object");
assert(typeof JobScopeTerm$ === "object");
assert(typeof JobScopingBlock$ === "object");
assert(typeof JobSummary$ === "object");
assert(typeof KeyValuePair$ === "object");
assert(typeof LastRunErrorStatus$ === "object");
assert(typeof ListAllowListsRequest$ === "object");
assert(typeof ListAllowListsResponse$ === "object");
assert(typeof ListAutomatedDiscoveryAccountsRequest$ === "object");
assert(typeof ListAutomatedDiscoveryAccountsResponse$ === "object");
assert(typeof ListClassificationJobsRequest$ === "object");
assert(typeof ListClassificationJobsResponse$ === "object");
assert(typeof ListClassificationScopesRequest$ === "object");
assert(typeof ListClassificationScopesResponse$ === "object");
assert(typeof ListCustomDataIdentifiersRequest$ === "object");
assert(typeof ListCustomDataIdentifiersResponse$ === "object");
assert(typeof ListFindingsFiltersRequest$ === "object");
assert(typeof ListFindingsFiltersResponse$ === "object");
assert(typeof ListFindingsRequest$ === "object");
assert(typeof ListFindingsResponse$ === "object");
assert(typeof ListInvitationsRequest$ === "object");
assert(typeof ListInvitationsResponse$ === "object");
assert(typeof ListJobsFilterCriteria$ === "object");
assert(typeof ListJobsFilterTerm$ === "object");
assert(typeof ListJobsSortCriteria$ === "object");
assert(typeof ListManagedDataIdentifiersRequest$ === "object");
assert(typeof ListManagedDataIdentifiersResponse$ === "object");
assert(typeof ListMembersRequest$ === "object");
assert(typeof ListMembersResponse$ === "object");
assert(typeof ListOrganizationAdminAccountsRequest$ === "object");
assert(typeof ListOrganizationAdminAccountsResponse$ === "object");
assert(typeof ListResourceProfileArtifactsRequest$ === "object");
assert(typeof ListResourceProfileArtifactsResponse$ === "object");
assert(typeof ListResourceProfileDetectionsRequest$ === "object");
assert(typeof ListResourceProfileDetectionsResponse$ === "object");
assert(typeof ListSensitivityInspectionTemplatesRequest$ === "object");
assert(typeof ListSensitivityInspectionTemplatesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof ManagedDataIdentifierSummary$ === "object");
assert(typeof MatchingBucket$ === "object");
assert(typeof MatchingResource$ === "object");
assert(typeof Member$ === "object");
assert(typeof MonthlySchedule$ === "object");
assert(typeof ObjectCountByEncryptionType$ === "object");
assert(typeof ObjectLevelStatistics$ === "object");
assert(typeof Occurrences$ === "object");
assert(typeof Page$ === "object");
assert(typeof PolicyDetails$ === "object");
assert(typeof PutClassificationExportConfigurationRequest$ === "object");
assert(typeof PutClassificationExportConfigurationResponse$ === "object");
assert(typeof PutFindingsPublicationConfigurationRequest$ === "object");
assert(typeof PutFindingsPublicationConfigurationResponse$ === "object");
assert(typeof Range$ === "object");
assert(typeof _Record$ === "object");
assert(typeof ReplicationDetails$ === "object");
assert(typeof ResourceProfileArtifact$ === "object");
assert(typeof ResourcesAffected$ === "object");
assert(typeof ResourceStatistics$ === "object");
assert(typeof RetrievalConfiguration$ === "object");
assert(typeof RevealConfiguration$ === "object");
assert(typeof S3Bucket$ === "object");
assert(typeof S3BucketCriteriaForJob$ === "object");
assert(typeof S3BucketDefinitionForJob$ === "object");
assert(typeof S3BucketOwner$ === "object");
assert(typeof S3ClassificationScope$ === "object");
assert(typeof S3ClassificationScopeExclusion$ === "object");
assert(typeof S3ClassificationScopeExclusionUpdate$ === "object");
assert(typeof S3ClassificationScopeUpdate$ === "object");
assert(typeof S3Destination$ === "object");
assert(typeof S3JobDefinition$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof S3WordsList$ === "object");
assert(typeof Scoping$ === "object");
assert(typeof SearchResourcesBucketCriteria$ === "object");
assert(typeof SearchResourcesCriteria$ === "object");
assert(typeof SearchResourcesCriteriaBlock$ === "object");
assert(typeof SearchResourcesRequest$ === "object");
assert(typeof SearchResourcesResponse$ === "object");
assert(typeof SearchResourcesSimpleCriterion$ === "object");
assert(typeof SearchResourcesSortCriteria$ === "object");
assert(typeof SearchResourcesTagCriterion$ === "object");
assert(typeof SearchResourcesTagCriterionPair$ === "object");
assert(typeof SecurityHubConfiguration$ === "object");
assert(typeof SensitiveDataItem$ === "object");
assert(typeof SensitivityAggregations$ === "object");
assert(typeof SensitivityInspectionTemplateExcludes$ === "object");
assert(typeof SensitivityInspectionTemplateIncludes$ === "object");
assert(typeof SensitivityInspectionTemplatesEntry$ === "object");
assert(typeof ServerSideEncryption$ === "object");
assert(typeof ServiceLimit$ === "object");
assert(typeof SessionContext$ === "object");
assert(typeof SessionContextAttributes$ === "object");
assert(typeof SessionIssuer$ === "object");
assert(typeof Severity$ === "object");
assert(typeof SeverityLevel$ === "object");
assert(typeof SimpleCriterionForJob$ === "object");
assert(typeof SimpleScopeTerm$ === "object");
assert(typeof SortCriteria$ === "object");
assert(typeof Statistics$ === "object");
assert(typeof SuppressDataIdentifier$ === "object");
assert(typeof TagCriterionForJob$ === "object");
assert(typeof TagCriterionPairForJob$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TagScopeTerm$ === "object");
assert(typeof TagValuePair$ === "object");
assert(typeof TestCustomDataIdentifierRequest$ === "object");
assert(typeof TestCustomDataIdentifierResponse$ === "object");
assert(typeof UnprocessedAccount$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAllowListRequest$ === "object");
assert(typeof UpdateAllowListResponse$ === "object");
assert(typeof UpdateAutomatedDiscoveryConfigurationRequest$ === "object");
assert(typeof UpdateAutomatedDiscoveryConfigurationResponse$ === "object");
assert(typeof UpdateClassificationJobRequest$ === "object");
assert(typeof UpdateClassificationJobResponse$ === "object");
assert(typeof UpdateClassificationScopeRequest$ === "object");
assert(typeof UpdateClassificationScopeResponse$ === "object");
assert(typeof UpdateFindingsFilterRequest$ === "object");
assert(typeof UpdateFindingsFilterResponse$ === "object");
assert(typeof UpdateMacieSessionRequest$ === "object");
assert(typeof UpdateMacieSessionResponse$ === "object");
assert(typeof UpdateMemberSessionRequest$ === "object");
assert(typeof UpdateMemberSessionResponse$ === "object");
assert(typeof UpdateOrganizationConfigurationRequest$ === "object");
assert(typeof UpdateOrganizationConfigurationResponse$ === "object");
assert(typeof UpdateResourceProfileDetectionsRequest$ === "object");
assert(typeof UpdateResourceProfileDetectionsResponse$ === "object");
assert(typeof UpdateResourceProfileRequest$ === "object");
assert(typeof UpdateResourceProfileResponse$ === "object");
assert(typeof UpdateRetrievalConfiguration$ === "object");
assert(typeof UpdateRevealConfigurationRequest$ === "object");
assert(typeof UpdateRevealConfigurationResponse$ === "object");
assert(typeof UpdateSensitivityInspectionTemplateRequest$ === "object");
assert(typeof UpdateSensitivityInspectionTemplateResponse$ === "object");
assert(typeof UsageByAccount$ === "object");
assert(typeof UsageRecord$ === "object");
assert(typeof UsageStatisticsFilter$ === "object");
assert(typeof UsageStatisticsSortBy$ === "object");
assert(typeof UsageTotal$ === "object");
assert(typeof UserIdentity$ === "object");
assert(typeof UserIdentityRoot$ === "object");
assert(typeof UserPausedDetails$ === "object");
assert(typeof WeeklySchedule$ === "object");
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
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof Macie2ServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof Macie2ServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof Macie2ServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof Macie2ServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof Macie2ServiceException);
assert(typeof ThrottlingException$ === "object");
assert(UnprocessableEntityException.prototype instanceof Macie2ServiceException);
assert(typeof UnprocessableEntityException$ === "object");
assert(ValidationException.prototype instanceof Macie2ServiceException);
assert(typeof ValidationException$ === "object");
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
