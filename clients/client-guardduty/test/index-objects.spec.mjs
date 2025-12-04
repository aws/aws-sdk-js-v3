import {
  AcceptAdministratorInvitationCommand,
  AcceptInvitationCommand,
  AdminStatus,
  ArchiveFindingsCommand,
  AutoEnableMembers,
  ClusterStatus,
  CoverageFilterCriterionKey,
  CoverageSortKey,
  CoverageStatisticsType,
  CoverageStatus,
  CreateDetectorCommand,
  CreateFilterCommand,
  CreateIPSetCommand,
  CreateMalwareProtectionPlanCommand,
  CreateMembersCommand,
  CreatePublishingDestinationCommand,
  CreateSampleFindingsCommand,
  CreateThreatEntitySetCommand,
  CreateThreatIntelSetCommand,
  CreateTrustedEntitySetCommand,
  CriterionKey,
  DataSource,
  DataSourceStatus,
  DeclineInvitationsCommand,
  DeleteDetectorCommand,
  DeleteFilterCommand,
  DeleteIPSetCommand,
  DeleteInvitationsCommand,
  DeleteMalwareProtectionPlanCommand,
  DeleteMembersCommand,
  DeletePublishingDestinationCommand,
  DeleteThreatEntitySetCommand,
  DeleteThreatIntelSetCommand,
  DeleteTrustedEntitySetCommand,
  DescribeMalwareScansCommand,
  DescribeOrganizationConfigurationCommand,
  DescribePublishingDestinationCommand,
  DestinationType,
  DetectionSource,
  DetectorFeature,
  DetectorFeatureResult,
  DetectorStatus,
  DisableOrganizationAdminAccountCommand,
  DisassociateFromAdministratorAccountCommand,
  DisassociateFromMasterAccountCommand,
  DisassociateMembersCommand,
  EbsSnapshotPreservation,
  EcsClusterStatus,
  EcsLaunchType,
  EnableOrganizationAdminAccountCommand,
  FeatureAdditionalConfiguration,
  FeatureStatus,
  Feedback,
  FilterAction,
  FindingPublishingFrequency,
  FindingResourceType,
  FindingStatisticType,
  FreeTrialFeatureResult,
  GetAdministratorAccountCommand,
  GetCoverageStatisticsCommand,
  GetDetectorCommand,
  GetFilterCommand,
  GetFindingsCommand,
  GetFindingsStatisticsCommand,
  GetIPSetCommand,
  GetInvitationsCountCommand,
  GetMalwareProtectionPlanCommand,
  GetMalwareScanCommand,
  GetMalwareScanSettingsCommand,
  GetMasterAccountCommand,
  GetMemberDetectorsCommand,
  GetMembersCommand,
  GetOrganizationStatisticsCommand,
  GetRemainingFreeTrialDaysCommand,
  GetThreatEntitySetCommand,
  GetThreatIntelSetCommand,
  GetTrustedEntitySetCommand,
  GetUsageStatisticsCommand,
  GroupByType,
  GuardDuty,
  GuardDutyClient,
  GuardDutyServiceException,
  IndicatorType,
  InviteMembersCommand,
  IpSetFormat,
  IpSetStatus,
  KubernetesResourcesTypes,
  ListCoverageCommand,
  ListDetectorsCommand,
  ListFiltersCommand,
  ListFindingsCommand,
  ListIPSetsCommand,
  ListInvitationsCommand,
  ListMalwareProtectionPlansCommand,
  ListMalwareScansCommand,
  ListMalwareScansCriterionKey,
  ListMembersCommand,
  ListOrganizationAdminAccountsCommand,
  ListPublishingDestinationsCommand,
  ListTagsForResourceCommand,
  ListThreatEntitySetsCommand,
  ListThreatIntelSetsCommand,
  ListTrustedEntitySetsCommand,
  MalwareProtectionPlanStatus,
  MalwareProtectionPlanTaggingActionStatus,
  MalwareProtectionResourceType,
  MalwareProtectionScanStatus,
  MalwareProtectionScanType,
  ManagementType,
  MfaStatus,
  NetworkDirection,
  OrderBy,
  OrgFeature,
  OrgFeatureAdditionalConfiguration,
  OrgFeatureStatus,
  ProfileSubtype,
  ProfileType,
  PublicAccessStatus,
  PublicAclIgnoreBehavior,
  PublicBucketRestrictBehavior,
  PublishingStatus,
  ResourceType,
  ScanCategory,
  ScanCriterionKey,
  ScanResult,
  ScanResultStatus,
  ScanStatus,
  ScanStatusReason,
  ScanType,
  SendObjectMalwareScanCommand,
  SignalType,
  StartMalwareScanCommand,
  StartMonitoringMembersCommand,
  StopMonitoringMembersCommand,
  TagResourceCommand,
  ThreatEntitySetFormat,
  ThreatEntitySetStatus,
  ThreatIntelSetFormat,
  ThreatIntelSetStatus,
  TriggerType,
  TrustedEntitySetFormat,
  TrustedEntitySetStatus,
  UnarchiveFindingsCommand,
  UntagResourceCommand,
  UpdateDetectorCommand,
  UpdateFilterCommand,
  UpdateFindingsFeedbackCommand,
  UpdateIPSetCommand,
  UpdateMalwareProtectionPlanCommand,
  UpdateMalwareScanSettingsCommand,
  UpdateMemberDetectorsCommand,
  UpdateOrganizationConfigurationCommand,
  UpdatePublishingDestinationCommand,
  UpdateThreatEntitySetCommand,
  UpdateThreatIntelSetCommand,
  UpdateTrustedEntitySetCommand,
  UsageFeature,
  UsageStatisticType,
  paginateDescribeMalwareScans,
  paginateDescribeOrganizationConfiguration,
  paginateGetUsageStatistics,
  paginateListCoverage,
  paginateListDetectors,
  paginateListFilters,
  paginateListFindings,
  paginateListIPSets,
  paginateListInvitations,
  paginateListMalwareScans,
  paginateListMembers,
  paginateListOrganizationAdminAccounts,
  paginateListPublishingDestinations,
  paginateListThreatEntitySets,
  paginateListThreatIntelSets,
  paginateListTrustedEntitySets,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GuardDutyClient === "function")
assert(typeof GuardDuty === "function")
// commands
assert(typeof AcceptAdministratorInvitationCommand === "function")
assert(typeof AcceptInvitationCommand === "function")
assert(typeof ArchiveFindingsCommand === "function")
assert(typeof CreateDetectorCommand === "function")
assert(typeof CreateFilterCommand === "function")
assert(typeof CreateIPSetCommand === "function")
assert(typeof CreateMalwareProtectionPlanCommand === "function")
assert(typeof CreateMembersCommand === "function")
assert(typeof CreatePublishingDestinationCommand === "function")
assert(typeof CreateSampleFindingsCommand === "function")
assert(typeof CreateThreatEntitySetCommand === "function")
assert(typeof CreateThreatIntelSetCommand === "function")
assert(typeof CreateTrustedEntitySetCommand === "function")
assert(typeof DeclineInvitationsCommand === "function")
assert(typeof DeleteDetectorCommand === "function")
assert(typeof DeleteFilterCommand === "function")
assert(typeof DeleteInvitationsCommand === "function")
assert(typeof DeleteIPSetCommand === "function")
assert(typeof DeleteMalwareProtectionPlanCommand === "function")
assert(typeof DeleteMembersCommand === "function")
assert(typeof DeletePublishingDestinationCommand === "function")
assert(typeof DeleteThreatEntitySetCommand === "function")
assert(typeof DeleteThreatIntelSetCommand === "function")
assert(typeof DeleteTrustedEntitySetCommand === "function")
assert(typeof DescribeMalwareScansCommand === "function")
assert(typeof DescribeOrganizationConfigurationCommand === "function")
assert(typeof DescribePublishingDestinationCommand === "function")
assert(typeof DisableOrganizationAdminAccountCommand === "function")
assert(typeof DisassociateFromAdministratorAccountCommand === "function")
assert(typeof DisassociateFromMasterAccountCommand === "function")
assert(typeof DisassociateMembersCommand === "function")
assert(typeof EnableOrganizationAdminAccountCommand === "function")
assert(typeof GetAdministratorAccountCommand === "function")
assert(typeof GetCoverageStatisticsCommand === "function")
assert(typeof GetDetectorCommand === "function")
assert(typeof GetFilterCommand === "function")
assert(typeof GetFindingsCommand === "function")
assert(typeof GetFindingsStatisticsCommand === "function")
assert(typeof GetInvitationsCountCommand === "function")
assert(typeof GetIPSetCommand === "function")
assert(typeof GetMalwareProtectionPlanCommand === "function")
assert(typeof GetMalwareScanCommand === "function")
assert(typeof GetMalwareScanSettingsCommand === "function")
assert(typeof GetMasterAccountCommand === "function")
assert(typeof GetMemberDetectorsCommand === "function")
assert(typeof GetMembersCommand === "function")
assert(typeof GetOrganizationStatisticsCommand === "function")
assert(typeof GetRemainingFreeTrialDaysCommand === "function")
assert(typeof GetThreatEntitySetCommand === "function")
assert(typeof GetThreatIntelSetCommand === "function")
assert(typeof GetTrustedEntitySetCommand === "function")
assert(typeof GetUsageStatisticsCommand === "function")
assert(typeof InviteMembersCommand === "function")
assert(typeof ListCoverageCommand === "function")
assert(typeof ListDetectorsCommand === "function")
assert(typeof ListFiltersCommand === "function")
assert(typeof ListFindingsCommand === "function")
assert(typeof ListInvitationsCommand === "function")
assert(typeof ListIPSetsCommand === "function")
assert(typeof ListMalwareProtectionPlansCommand === "function")
assert(typeof ListMalwareScansCommand === "function")
assert(typeof ListMembersCommand === "function")
assert(typeof ListOrganizationAdminAccountsCommand === "function")
assert(typeof ListPublishingDestinationsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof ListThreatEntitySetsCommand === "function")
assert(typeof ListThreatIntelSetsCommand === "function")
assert(typeof ListTrustedEntitySetsCommand === "function")
assert(typeof SendObjectMalwareScanCommand === "function")
assert(typeof StartMalwareScanCommand === "function")
assert(typeof StartMonitoringMembersCommand === "function")
assert(typeof StopMonitoringMembersCommand === "function")
assert(typeof TagResourceCommand === "function")
assert(typeof UnarchiveFindingsCommand === "function")
assert(typeof UntagResourceCommand === "function")
assert(typeof UpdateDetectorCommand === "function")
assert(typeof UpdateFilterCommand === "function")
assert(typeof UpdateFindingsFeedbackCommand === "function")
assert(typeof UpdateIPSetCommand === "function")
assert(typeof UpdateMalwareProtectionPlanCommand === "function")
assert(typeof UpdateMalwareScanSettingsCommand === "function")
assert(typeof UpdateMemberDetectorsCommand === "function")
assert(typeof UpdateOrganizationConfigurationCommand === "function")
assert(typeof UpdatePublishingDestinationCommand === "function")
assert(typeof UpdateThreatEntitySetCommand === "function")
assert(typeof UpdateThreatIntelSetCommand === "function")
assert(typeof UpdateTrustedEntitySetCommand === "function")
// enums
assert(typeof AdminStatus === "object");
assert(typeof AutoEnableMembers === "object");
assert(typeof ClusterStatus === "object");
assert(typeof CoverageFilterCriterionKey === "object");
assert(typeof CoverageSortKey === "object");
assert(typeof CoverageStatisticsType === "object");
assert(typeof CoverageStatus === "object");
assert(typeof CriterionKey === "object");
assert(typeof DataSource === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DestinationType === "object");
assert(typeof DetectionSource === "object");
assert(typeof DetectorFeature === "object");
assert(typeof DetectorFeatureResult === "object");
assert(typeof DetectorStatus === "object");
assert(typeof EbsSnapshotPreservation === "object");
assert(typeof EcsClusterStatus === "object");
assert(typeof EcsLaunchType === "object");
assert(typeof FeatureAdditionalConfiguration === "object");
assert(typeof FeatureStatus === "object");
assert(typeof Feedback === "object");
assert(typeof FilterAction === "object");
assert(typeof FindingPublishingFrequency === "object");
assert(typeof FindingResourceType === "object");
assert(typeof FindingStatisticType === "object");
assert(typeof FreeTrialFeatureResult === "object");
assert(typeof GroupByType === "object");
assert(typeof IndicatorType === "object");
assert(typeof IpSetFormat === "object");
assert(typeof IpSetStatus === "object");
assert(typeof KubernetesResourcesTypes === "object");
assert(typeof ListMalwareScansCriterionKey === "object");
assert(typeof MalwareProtectionPlanStatus === "object");
assert(typeof MalwareProtectionPlanTaggingActionStatus === "object");
assert(typeof MalwareProtectionResourceType === "object");
assert(typeof MalwareProtectionScanStatus === "object");
assert(typeof MalwareProtectionScanType === "object");
assert(typeof ManagementType === "object");
assert(typeof MfaStatus === "object");
assert(typeof NetworkDirection === "object");
assert(typeof OrderBy === "object");
assert(typeof OrgFeature === "object");
assert(typeof OrgFeatureAdditionalConfiguration === "object");
assert(typeof OrgFeatureStatus === "object");
assert(typeof ProfileSubtype === "object");
assert(typeof ProfileType === "object");
assert(typeof PublicAccessStatus === "object");
assert(typeof PublicAclIgnoreBehavior === "object");
assert(typeof PublicBucketRestrictBehavior === "object");
assert(typeof PublishingStatus === "object");
assert(typeof ResourceType === "object");
assert(typeof ScanCategory === "object");
assert(typeof ScanCriterionKey === "object");
assert(typeof ScanResult === "object");
assert(typeof ScanResultStatus === "object");
assert(typeof ScanStatus === "object");
assert(typeof ScanStatusReason === "object");
assert(typeof ScanType === "object");
assert(typeof SignalType === "object");
assert(typeof ThreatEntitySetFormat === "object");
assert(typeof ThreatEntitySetStatus === "object");
assert(typeof ThreatIntelSetFormat === "object");
assert(typeof ThreatIntelSetStatus === "object");
assert(typeof TriggerType === "object");
assert(typeof TrustedEntitySetFormat === "object");
assert(typeof TrustedEntitySetStatus === "object");
assert(typeof UsageFeature === "object");
assert(typeof UsageStatisticType === "object");
// errors
assert(GuardDutyServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeMalwareScans === "function")
assert(typeof paginateDescribeOrganizationConfiguration === "function")
assert(typeof paginateGetUsageStatistics === "function")
assert(typeof paginateListCoverage === "function")
assert(typeof paginateListDetectors === "function")
assert(typeof paginateListFilters === "function")
assert(typeof paginateListFindings === "function")
assert(typeof paginateListIPSets === "function")
assert(typeof paginateListInvitations === "function")
assert(typeof paginateListMalwareScans === "function")
assert(typeof paginateListMembers === "function")
assert(typeof paginateListOrganizationAdminAccounts === "function")
assert(typeof paginateListPublishingDestinations === "function")
assert(typeof paginateListThreatEntitySets === "function")
assert(typeof paginateListThreatIntelSets === "function")
assert(typeof paginateListTrustedEntitySets === "function")
console.log(`GuardDuty index test passed.`);
