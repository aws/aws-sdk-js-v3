import {
  AcceptSharedDirectoryCommand,
  AddIpRoutesCommand,
  AddRegionCommand,
  AddTagsToResourceCommand,
  CaEnrollmentPolicyStatus,
  CancelSchemaExtensionCommand,
  CertificateState,
  CertificateType,
  ClientAuthenticationStatus,
  ClientAuthenticationType,
  ConnectDirectoryCommand,
  CreateAliasCommand,
  CreateComputerCommand,
  CreateConditionalForwarderCommand,
  CreateDirectoryCommand,
  CreateHybridADCommand,
  CreateLogSubscriptionCommand,
  CreateMicrosoftADCommand,
  CreateSnapshotCommand,
  CreateTrustCommand,
  DataAccessStatus,
  DeleteADAssessmentCommand,
  DeleteConditionalForwarderCommand,
  DeleteDirectoryCommand,
  DeleteLogSubscriptionCommand,
  DeleteSnapshotCommand,
  DeleteTrustCommand,
  DeregisterCertificateCommand,
  DeregisterEventTopicCommand,
  DescribeADAssessmentCommand,
  DescribeCAEnrollmentPolicyCommand,
  DescribeCertificateCommand,
  DescribeClientAuthenticationSettingsCommand,
  DescribeConditionalForwardersCommand,
  DescribeDirectoriesCommand,
  DescribeDirectoryDataAccessCommand,
  DescribeDomainControllersCommand,
  DescribeEventTopicsCommand,
  DescribeHybridADUpdateCommand,
  DescribeLDAPSSettingsCommand,
  DescribeRegionsCommand,
  DescribeSettingsCommand,
  DescribeSharedDirectoriesCommand,
  DescribeSnapshotsCommand,
  DescribeTrustsCommand,
  DescribeUpdateDirectoryCommand,
  DirectoryConfigurationStatus,
  DirectoryEdition,
  DirectoryService,
  DirectoryServiceClient,
  DirectoryServiceServiceException,
  DirectorySize,
  DirectoryStage,
  DirectoryType,
  DisableCAEnrollmentPolicyCommand,
  DisableClientAuthenticationCommand,
  DisableDirectoryDataAccessCommand,
  DisableLDAPSCommand,
  DisableRadiusCommand,
  DisableSsoCommand,
  DomainControllerStatus,
  EnableCAEnrollmentPolicyCommand,
  EnableClientAuthenticationCommand,
  EnableDirectoryDataAccessCommand,
  EnableLDAPSCommand,
  EnableRadiusCommand,
  EnableSsoCommand,
  GetDirectoryLimitsCommand,
  GetSnapshotLimitsCommand,
  HybridUpdateType,
  IpRouteStatusMsg,
  LDAPSStatus,
  LDAPSType,
  ListADAssessmentsCommand,
  ListCertificatesCommand,
  ListIpRoutesCommand,
  ListLogSubscriptionsCommand,
  ListSchemaExtensionsCommand,
  ListTagsForResourceCommand,
  NetworkType,
  OSVersion,
  RadiusAuthenticationProtocol,
  RadiusStatus,
  RegionType,
  RegisterCertificateCommand,
  RegisterEventTopicCommand,
  RejectSharedDirectoryCommand,
  RemoveIpRoutesCommand,
  RemoveRegionCommand,
  RemoveTagsFromResourceCommand,
  ReplicationScope,
  ResetUserPasswordCommand,
  RestoreFromSnapshotCommand,
  SchemaExtensionStatus,
  SelectiveAuth,
  ShareDirectoryCommand,
  ShareMethod,
  ShareStatus,
  SnapshotStatus,
  SnapshotType,
  StartADAssessmentCommand,
  StartSchemaExtensionCommand,
  TargetType,
  TopicStatus,
  TrustDirection,
  TrustState,
  TrustType,
  UnshareDirectoryCommand,
  UpdateConditionalForwarderCommand,
  UpdateDirectorySetupCommand,
  UpdateHybridADCommand,
  UpdateNumberOfDomainControllersCommand,
  UpdateRadiusCommand,
  UpdateSettingsCommand,
  UpdateStatus,
  UpdateTrustCommand,
  UpdateType,
  VerifyTrustCommand,
  paginateDescribeClientAuthenticationSettings,
  paginateDescribeDirectories,
  paginateDescribeDomainControllers,
  paginateDescribeLDAPSSettings,
  paginateDescribeRegions,
  paginateDescribeSharedDirectories,
  paginateDescribeSnapshots,
  paginateDescribeTrusts,
  paginateDescribeUpdateDirectory,
  paginateListADAssessments,
  paginateListCertificates,
  paginateListIpRoutes,
  paginateListLogSubscriptions,
  paginateListSchemaExtensions,
  paginateListTagsForResource,
  waitForHybridADUpdated,
  waitUntilHybridADUpdated,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof DirectoryServiceClient === "function")
assert(typeof DirectoryService === "function")
// commands
assert(typeof AcceptSharedDirectoryCommand === "function")
assert(typeof AddIpRoutesCommand === "function")
assert(typeof AddRegionCommand === "function")
assert(typeof AddTagsToResourceCommand === "function")
assert(typeof CancelSchemaExtensionCommand === "function")
assert(typeof ConnectDirectoryCommand === "function")
assert(typeof CreateAliasCommand === "function")
assert(typeof CreateComputerCommand === "function")
assert(typeof CreateConditionalForwarderCommand === "function")
assert(typeof CreateDirectoryCommand === "function")
assert(typeof CreateHybridADCommand === "function")
assert(typeof CreateLogSubscriptionCommand === "function")
assert(typeof CreateMicrosoftADCommand === "function")
assert(typeof CreateSnapshotCommand === "function")
assert(typeof CreateTrustCommand === "function")
assert(typeof DeleteADAssessmentCommand === "function")
assert(typeof DeleteConditionalForwarderCommand === "function")
assert(typeof DeleteDirectoryCommand === "function")
assert(typeof DeleteLogSubscriptionCommand === "function")
assert(typeof DeleteSnapshotCommand === "function")
assert(typeof DeleteTrustCommand === "function")
assert(typeof DeregisterCertificateCommand === "function")
assert(typeof DeregisterEventTopicCommand === "function")
assert(typeof DescribeADAssessmentCommand === "function")
assert(typeof DescribeCAEnrollmentPolicyCommand === "function")
assert(typeof DescribeCertificateCommand === "function")
assert(typeof DescribeClientAuthenticationSettingsCommand === "function")
assert(typeof DescribeConditionalForwardersCommand === "function")
assert(typeof DescribeDirectoriesCommand === "function")
assert(typeof DescribeDirectoryDataAccessCommand === "function")
assert(typeof DescribeDomainControllersCommand === "function")
assert(typeof DescribeEventTopicsCommand === "function")
assert(typeof DescribeHybridADUpdateCommand === "function")
assert(typeof DescribeLDAPSSettingsCommand === "function")
assert(typeof DescribeRegionsCommand === "function")
assert(typeof DescribeSettingsCommand === "function")
assert(typeof DescribeSharedDirectoriesCommand === "function")
assert(typeof DescribeSnapshotsCommand === "function")
assert(typeof DescribeTrustsCommand === "function")
assert(typeof DescribeUpdateDirectoryCommand === "function")
assert(typeof DisableCAEnrollmentPolicyCommand === "function")
assert(typeof DisableClientAuthenticationCommand === "function")
assert(typeof DisableDirectoryDataAccessCommand === "function")
assert(typeof DisableLDAPSCommand === "function")
assert(typeof DisableRadiusCommand === "function")
assert(typeof DisableSsoCommand === "function")
assert(typeof EnableCAEnrollmentPolicyCommand === "function")
assert(typeof EnableClientAuthenticationCommand === "function")
assert(typeof EnableDirectoryDataAccessCommand === "function")
assert(typeof EnableLDAPSCommand === "function")
assert(typeof EnableRadiusCommand === "function")
assert(typeof EnableSsoCommand === "function")
assert(typeof GetDirectoryLimitsCommand === "function")
assert(typeof GetSnapshotLimitsCommand === "function")
assert(typeof ListADAssessmentsCommand === "function")
assert(typeof ListCertificatesCommand === "function")
assert(typeof ListIpRoutesCommand === "function")
assert(typeof ListLogSubscriptionsCommand === "function")
assert(typeof ListSchemaExtensionsCommand === "function")
assert(typeof ListTagsForResourceCommand === "function")
assert(typeof RegisterCertificateCommand === "function")
assert(typeof RegisterEventTopicCommand === "function")
assert(typeof RejectSharedDirectoryCommand === "function")
assert(typeof RemoveIpRoutesCommand === "function")
assert(typeof RemoveRegionCommand === "function")
assert(typeof RemoveTagsFromResourceCommand === "function")
assert(typeof ResetUserPasswordCommand === "function")
assert(typeof RestoreFromSnapshotCommand === "function")
assert(typeof ShareDirectoryCommand === "function")
assert(typeof StartADAssessmentCommand === "function")
assert(typeof StartSchemaExtensionCommand === "function")
assert(typeof UnshareDirectoryCommand === "function")
assert(typeof UpdateConditionalForwarderCommand === "function")
assert(typeof UpdateDirectorySetupCommand === "function")
assert(typeof UpdateHybridADCommand === "function")
assert(typeof UpdateNumberOfDomainControllersCommand === "function")
assert(typeof UpdateRadiusCommand === "function")
assert(typeof UpdateSettingsCommand === "function")
assert(typeof UpdateTrustCommand === "function")
assert(typeof VerifyTrustCommand === "function")
// enums
assert(typeof CaEnrollmentPolicyStatus === "object");
assert(typeof CertificateState === "object");
assert(typeof CertificateType === "object");
assert(typeof ClientAuthenticationStatus === "object");
assert(typeof ClientAuthenticationType === "object");
assert(typeof DataAccessStatus === "object");
assert(typeof DirectoryConfigurationStatus === "object");
assert(typeof DirectoryEdition === "object");
assert(typeof DirectorySize === "object");
assert(typeof DirectoryStage === "object");
assert(typeof DirectoryType === "object");
assert(typeof DomainControllerStatus === "object");
assert(typeof HybridUpdateType === "object");
assert(typeof IpRouteStatusMsg === "object");
assert(typeof LDAPSStatus === "object");
assert(typeof LDAPSType === "object");
assert(typeof NetworkType === "object");
assert(typeof OSVersion === "object");
assert(typeof RadiusAuthenticationProtocol === "object");
assert(typeof RadiusStatus === "object");
assert(typeof RegionType === "object");
assert(typeof ReplicationScope === "object");
assert(typeof SchemaExtensionStatus === "object");
assert(typeof SelectiveAuth === "object");
assert(typeof ShareMethod === "object");
assert(typeof ShareStatus === "object");
assert(typeof SnapshotStatus === "object");
assert(typeof SnapshotType === "object");
assert(typeof TargetType === "object");
assert(typeof TopicStatus === "object");
assert(typeof TrustDirection === "object");
assert(typeof TrustState === "object");
assert(typeof TrustType === "object");
assert(typeof UpdateStatus === "object");
assert(typeof UpdateType === "object");
// errors
assert(DirectoryServiceServiceException.prototype instanceof Error)
// waiters
assert(typeof waitForHybridADUpdated === "function")
assert(typeof waitUntilHybridADUpdated === "function")
// paginators
assert(typeof paginateDescribeClientAuthenticationSettings === "function")
assert(typeof paginateDescribeDirectories === "function")
assert(typeof paginateDescribeDomainControllers === "function")
assert(typeof paginateDescribeLDAPSSettings === "function")
assert(typeof paginateDescribeRegions === "function")
assert(typeof paginateDescribeSharedDirectories === "function")
assert(typeof paginateDescribeSnapshots === "function")
assert(typeof paginateDescribeTrusts === "function")
assert(typeof paginateDescribeUpdateDirectory === "function")
assert(typeof paginateListADAssessments === "function")
assert(typeof paginateListCertificates === "function")
assert(typeof paginateListIpRoutes === "function")
assert(typeof paginateListLogSubscriptions === "function")
assert(typeof paginateListSchemaExtensions === "function")
assert(typeof paginateListTagsForResource === "function")
console.log(`DirectoryService index test passed.`);
