import {
  ADAssessmentLimitExceededException,
  ADAssessmentLimitExceededException$,
  AcceptSharedDirectory$,
  AcceptSharedDirectoryCommand,
  AcceptSharedDirectoryRequest$,
  AcceptSharedDirectoryResult$,
  AccessDeniedException,
  AccessDeniedException$,
  AddIpRoutes$,
  AddIpRoutesCommand,
  AddIpRoutesRequest$,
  AddIpRoutesResult$,
  AddRegion$,
  AddRegionCommand,
  AddRegionRequest$,
  AddRegionResult$,
  AddTagsToResource$,
  AddTagsToResourceCommand,
  AddTagsToResourceRequest$,
  AddTagsToResourceResult$,
  Assessment$,
  AssessmentConfiguration$,
  AssessmentReport$,
  AssessmentSummary$,
  AssessmentValidation$,
  Attribute$,
  AuthenticationFailedException,
  AuthenticationFailedException$,
  CaEnrollmentPolicyStatus,
  CancelSchemaExtension$,
  CancelSchemaExtensionCommand,
  CancelSchemaExtensionRequest$,
  CancelSchemaExtensionResult$,
  Certificate$,
  CertificateAlreadyExistsException,
  CertificateAlreadyExistsException$,
  CertificateDoesNotExistException,
  CertificateDoesNotExistException$,
  CertificateInUseException,
  CertificateInUseException$,
  CertificateInfo$,
  CertificateLimitExceededException,
  CertificateLimitExceededException$,
  CertificateState,
  CertificateType,
  ClientAuthenticationSettingInfo$,
  ClientAuthenticationStatus,
  ClientAuthenticationType,
  ClientCertAuthSettings$,
  ClientException,
  ClientException$,
  Computer$,
  ConditionalForwarder$,
  ConnectDirectory$,
  ConnectDirectoryCommand,
  ConnectDirectoryRequest$,
  ConnectDirectoryResult$,
  CreateAlias$,
  CreateAliasCommand,
  CreateAliasRequest$,
  CreateAliasResult$,
  CreateComputer$,
  CreateComputerCommand,
  CreateComputerRequest$,
  CreateComputerResult$,
  CreateConditionalForwarder$,
  CreateConditionalForwarderCommand,
  CreateConditionalForwarderRequest$,
  CreateConditionalForwarderResult$,
  CreateDirectory$,
  CreateDirectoryCommand,
  CreateDirectoryRequest$,
  CreateDirectoryResult$,
  CreateHybridAD$,
  CreateHybridADCommand,
  CreateHybridADRequest$,
  CreateHybridADResult$,
  CreateLogSubscription$,
  CreateLogSubscriptionCommand,
  CreateLogSubscriptionRequest$,
  CreateLogSubscriptionResult$,
  CreateMicrosoftAD$,
  CreateMicrosoftADCommand,
  CreateMicrosoftADRequest$,
  CreateMicrosoftADResult$,
  CreateSnapshot$,
  CreateSnapshotCommand,
  CreateSnapshotRequest$,
  CreateSnapshotResult$,
  CreateTrust$,
  CreateTrustCommand,
  CreateTrustRequest$,
  CreateTrustResult$,
  DataAccessStatus,
  DeleteADAssessment$,
  DeleteADAssessmentCommand,
  DeleteADAssessmentRequest$,
  DeleteADAssessmentResult$,
  DeleteConditionalForwarder$,
  DeleteConditionalForwarderCommand,
  DeleteConditionalForwarderRequest$,
  DeleteConditionalForwarderResult$,
  DeleteDirectory$,
  DeleteDirectoryCommand,
  DeleteDirectoryRequest$,
  DeleteDirectoryResult$,
  DeleteLogSubscription$,
  DeleteLogSubscriptionCommand,
  DeleteLogSubscriptionRequest$,
  DeleteLogSubscriptionResult$,
  DeleteSnapshot$,
  DeleteSnapshotCommand,
  DeleteSnapshotRequest$,
  DeleteSnapshotResult$,
  DeleteTrust$,
  DeleteTrustCommand,
  DeleteTrustRequest$,
  DeleteTrustResult$,
  DeregisterCertificate$,
  DeregisterCertificateCommand,
  DeregisterCertificateRequest$,
  DeregisterCertificateResult$,
  DeregisterEventTopic$,
  DeregisterEventTopicCommand,
  DeregisterEventTopicRequest$,
  DeregisterEventTopicResult$,
  DescribeADAssessment$,
  DescribeADAssessmentCommand,
  DescribeADAssessmentRequest$,
  DescribeADAssessmentResult$,
  DescribeCAEnrollmentPolicy$,
  DescribeCAEnrollmentPolicyCommand,
  DescribeCAEnrollmentPolicyRequest$,
  DescribeCAEnrollmentPolicyResult$,
  DescribeCertificate$,
  DescribeCertificateCommand,
  DescribeCertificateRequest$,
  DescribeCertificateResult$,
  DescribeClientAuthenticationSettings$,
  DescribeClientAuthenticationSettingsCommand,
  DescribeClientAuthenticationSettingsRequest$,
  DescribeClientAuthenticationSettingsResult$,
  DescribeConditionalForwarders$,
  DescribeConditionalForwardersCommand,
  DescribeConditionalForwardersRequest$,
  DescribeConditionalForwardersResult$,
  DescribeDirectories$,
  DescribeDirectoriesCommand,
  DescribeDirectoriesRequest$,
  DescribeDirectoriesResult$,
  DescribeDirectoryDataAccess$,
  DescribeDirectoryDataAccessCommand,
  DescribeDirectoryDataAccessRequest$,
  DescribeDirectoryDataAccessResult$,
  DescribeDomainControllers$,
  DescribeDomainControllersCommand,
  DescribeDomainControllersRequest$,
  DescribeDomainControllersResult$,
  DescribeEventTopics$,
  DescribeEventTopicsCommand,
  DescribeEventTopicsRequest$,
  DescribeEventTopicsResult$,
  DescribeHybridADUpdate$,
  DescribeHybridADUpdateCommand,
  DescribeHybridADUpdateRequest$,
  DescribeHybridADUpdateResult$,
  DescribeLDAPSSettings$,
  DescribeLDAPSSettingsCommand,
  DescribeLDAPSSettingsRequest$,
  DescribeLDAPSSettingsResult$,
  DescribeRegions$,
  DescribeRegionsCommand,
  DescribeRegionsRequest$,
  DescribeRegionsResult$,
  DescribeSettings$,
  DescribeSettingsCommand,
  DescribeSettingsRequest$,
  DescribeSettingsResult$,
  DescribeSharedDirectories$,
  DescribeSharedDirectoriesCommand,
  DescribeSharedDirectoriesRequest$,
  DescribeSharedDirectoriesResult$,
  DescribeSnapshots$,
  DescribeSnapshotsCommand,
  DescribeSnapshotsRequest$,
  DescribeSnapshotsResult$,
  DescribeTrusts$,
  DescribeTrustsCommand,
  DescribeTrustsRequest$,
  DescribeTrustsResult$,
  DescribeUpdateDirectory$,
  DescribeUpdateDirectoryCommand,
  DescribeUpdateDirectoryRequest$,
  DescribeUpdateDirectoryResult$,
  DirectoryAlreadyInRegionException,
  DirectoryAlreadyInRegionException$,
  DirectoryAlreadySharedException,
  DirectoryAlreadySharedException$,
  DirectoryConfigurationStatus,
  DirectoryConnectSettings$,
  DirectoryConnectSettingsDescription$,
  DirectoryDescription$,
  DirectoryDoesNotExistException,
  DirectoryDoesNotExistException$,
  DirectoryEdition,
  DirectoryInDesiredStateException,
  DirectoryInDesiredStateException$,
  DirectoryLimitExceededException,
  DirectoryLimitExceededException$,
  DirectoryLimits$,
  DirectoryNotSharedException,
  DirectoryNotSharedException$,
  DirectoryService,
  DirectoryServiceClient,
  DirectoryServiceServiceException,
  DirectorySize,
  DirectorySizeUpdateSettings$,
  DirectoryStage,
  DirectoryType,
  DirectoryUnavailableException,
  DirectoryUnavailableException$,
  DirectoryVpcSettings$,
  DirectoryVpcSettingsDescription$,
  DisableAlreadyInProgressException,
  DisableAlreadyInProgressException$,
  DisableCAEnrollmentPolicy$,
  DisableCAEnrollmentPolicyCommand,
  DisableCAEnrollmentPolicyRequest$,
  DisableCAEnrollmentPolicyResult$,
  DisableClientAuthentication$,
  DisableClientAuthenticationCommand,
  DisableClientAuthenticationRequest$,
  DisableClientAuthenticationResult$,
  DisableDirectoryDataAccess$,
  DisableDirectoryDataAccessCommand,
  DisableDirectoryDataAccessRequest$,
  DisableDirectoryDataAccessResult$,
  DisableLDAPS$,
  DisableLDAPSCommand,
  DisableLDAPSRequest$,
  DisableLDAPSResult$,
  DisableRadius$,
  DisableRadiusCommand,
  DisableRadiusRequest$,
  DisableRadiusResult$,
  DisableSso$,
  DisableSsoCommand,
  DisableSsoRequest$,
  DisableSsoResult$,
  DomainController$,
  DomainControllerLimitExceededException,
  DomainControllerLimitExceededException$,
  DomainControllerStatus,
  EnableAlreadyInProgressException,
  EnableAlreadyInProgressException$,
  EnableCAEnrollmentPolicy$,
  EnableCAEnrollmentPolicyCommand,
  EnableCAEnrollmentPolicyRequest$,
  EnableCAEnrollmentPolicyResult$,
  EnableClientAuthentication$,
  EnableClientAuthenticationCommand,
  EnableClientAuthenticationRequest$,
  EnableClientAuthenticationResult$,
  EnableDirectoryDataAccess$,
  EnableDirectoryDataAccessCommand,
  EnableDirectoryDataAccessRequest$,
  EnableDirectoryDataAccessResult$,
  EnableLDAPS$,
  EnableLDAPSCommand,
  EnableLDAPSRequest$,
  EnableLDAPSResult$,
  EnableRadius$,
  EnableRadiusCommand,
  EnableRadiusRequest$,
  EnableRadiusResult$,
  EnableSso$,
  EnableSsoCommand,
  EnableSsoRequest$,
  EnableSsoResult$,
  EntityAlreadyExistsException,
  EntityAlreadyExistsException$,
  EntityDoesNotExistException,
  EntityDoesNotExistException$,
  EventTopic$,
  GetDirectoryLimits$,
  GetDirectoryLimitsCommand,
  GetDirectoryLimitsRequest$,
  GetDirectoryLimitsResult$,
  GetSnapshotLimits$,
  GetSnapshotLimitsCommand,
  GetSnapshotLimitsRequest$,
  GetSnapshotLimitsResult$,
  HybridAdministratorAccountUpdate$,
  HybridCustomerInstancesSettings$,
  HybridSettingsDescription$,
  HybridUpdateActivities$,
  HybridUpdateInfoEntry$,
  HybridUpdateType,
  HybridUpdateValue$,
  IncompatibleSettingsException,
  IncompatibleSettingsException$,
  InsufficientPermissionsException,
  InsufficientPermissionsException$,
  InvalidCertificateException,
  InvalidCertificateException$,
  InvalidClientAuthStatusException,
  InvalidClientAuthStatusException$,
  InvalidLDAPSStatusException,
  InvalidLDAPSStatusException$,
  InvalidNextTokenException,
  InvalidNextTokenException$,
  InvalidParameterException,
  InvalidParameterException$,
  InvalidPasswordException,
  InvalidPasswordException$,
  InvalidTargetException,
  InvalidTargetException$,
  IpRoute$,
  IpRouteInfo$,
  IpRouteLimitExceededException,
  IpRouteLimitExceededException$,
  IpRouteStatusMsg,
  LDAPSSettingInfo$,
  LDAPSStatus,
  LDAPSType,
  ListADAssessments$,
  ListADAssessmentsCommand,
  ListADAssessmentsRequest$,
  ListADAssessmentsResult$,
  ListCertificates$,
  ListCertificatesCommand,
  ListCertificatesRequest$,
  ListCertificatesResult$,
  ListIpRoutes$,
  ListIpRoutesCommand,
  ListIpRoutesRequest$,
  ListIpRoutesResult$,
  ListLogSubscriptions$,
  ListLogSubscriptionsCommand,
  ListLogSubscriptionsRequest$,
  ListLogSubscriptionsResult$,
  ListSchemaExtensions$,
  ListSchemaExtensionsCommand,
  ListSchemaExtensionsRequest$,
  ListSchemaExtensionsResult$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResult$,
  LogSubscription$,
  NetworkType,
  NetworkUpdateSettings$,
  NoAvailableCertificateException,
  NoAvailableCertificateException$,
  OSUpdateSettings$,
  OSVersion,
  OrganizationsException,
  OrganizationsException$,
  OwnerDirectoryDescription$,
  RadiusAuthenticationProtocol,
  RadiusSettings$,
  RadiusStatus,
  RegionDescription$,
  RegionLimitExceededException,
  RegionLimitExceededException$,
  RegionType,
  RegionsInfo$,
  RegisterCertificate$,
  RegisterCertificateCommand,
  RegisterCertificateRequest$,
  RegisterCertificateResult$,
  RegisterEventTopic$,
  RegisterEventTopicCommand,
  RegisterEventTopicRequest$,
  RegisterEventTopicResult$,
  RejectSharedDirectory$,
  RejectSharedDirectoryCommand,
  RejectSharedDirectoryRequest$,
  RejectSharedDirectoryResult$,
  RemoveIpRoutes$,
  RemoveIpRoutesCommand,
  RemoveIpRoutesRequest$,
  RemoveIpRoutesResult$,
  RemoveRegion$,
  RemoveRegionCommand,
  RemoveRegionRequest$,
  RemoveRegionResult$,
  RemoveTagsFromResource$,
  RemoveTagsFromResourceCommand,
  RemoveTagsFromResourceRequest$,
  RemoveTagsFromResourceResult$,
  ReplicationScope,
  ResetUserPassword$,
  ResetUserPasswordCommand,
  ResetUserPasswordRequest$,
  ResetUserPasswordResult$,
  RestoreFromSnapshot$,
  RestoreFromSnapshotCommand,
  RestoreFromSnapshotRequest$,
  RestoreFromSnapshotResult$,
  SchemaExtensionInfo$,
  SchemaExtensionStatus,
  SelectiveAuth,
  ServiceException,
  ServiceException$,
  Setting$,
  SettingEntry$,
  ShareDirectory$,
  ShareDirectoryCommand,
  ShareDirectoryRequest$,
  ShareDirectoryResult$,
  ShareLimitExceededException,
  ShareLimitExceededException$,
  ShareMethod,
  ShareStatus,
  ShareTarget$,
  SharedDirectory$,
  Snapshot$,
  SnapshotLimitExceededException,
  SnapshotLimitExceededException$,
  SnapshotLimits$,
  SnapshotStatus,
  SnapshotType,
  StartADAssessment$,
  StartADAssessmentCommand,
  StartADAssessmentRequest$,
  StartADAssessmentResult$,
  StartSchemaExtension$,
  StartSchemaExtensionCommand,
  StartSchemaExtensionRequest$,
  StartSchemaExtensionResult$,
  Tag$,
  TagLimitExceededException,
  TagLimitExceededException$,
  TargetType,
  TopicStatus,
  Trust$,
  TrustDirection,
  TrustState,
  TrustType,
  UnshareDirectory$,
  UnshareDirectoryCommand,
  UnshareDirectoryRequest$,
  UnshareDirectoryResult$,
  UnshareTarget$,
  UnsupportedOperationException,
  UnsupportedOperationException$,
  UnsupportedSettingsException,
  UnsupportedSettingsException$,
  UpdateConditionalForwarder$,
  UpdateConditionalForwarderCommand,
  UpdateConditionalForwarderRequest$,
  UpdateConditionalForwarderResult$,
  UpdateDirectorySetup$,
  UpdateDirectorySetupCommand,
  UpdateDirectorySetupRequest$,
  UpdateDirectorySetupResult$,
  UpdateHybridAD$,
  UpdateHybridADCommand,
  UpdateHybridADRequest$,
  UpdateHybridADResult$,
  UpdateInfoEntry$,
  UpdateNumberOfDomainControllers$,
  UpdateNumberOfDomainControllersCommand,
  UpdateNumberOfDomainControllersRequest$,
  UpdateNumberOfDomainControllersResult$,
  UpdateRadius$,
  UpdateRadiusCommand,
  UpdateRadiusRequest$,
  UpdateRadiusResult$,
  UpdateSettings$,
  UpdateSettingsCommand,
  UpdateSettingsRequest$,
  UpdateSettingsResult$,
  UpdateStatus,
  UpdateTrust$,
  UpdateTrustCommand,
  UpdateTrustRequest$,
  UpdateTrustResult$,
  UpdateType,
  UpdateValue$,
  UserDoesNotExistException,
  UserDoesNotExistException$,
  VerifyTrust$,
  VerifyTrustCommand,
  VerifyTrustRequest$,
  VerifyTrustResult$,
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
assert(typeof DirectoryServiceClient === "function");
assert(typeof DirectoryService === "function");
// commands
assert(typeof AcceptSharedDirectoryCommand === "function");
assert(typeof AcceptSharedDirectory$ === "object");
assert(typeof AddIpRoutesCommand === "function");
assert(typeof AddIpRoutes$ === "object");
assert(typeof AddRegionCommand === "function");
assert(typeof AddRegion$ === "object");
assert(typeof AddTagsToResourceCommand === "function");
assert(typeof AddTagsToResource$ === "object");
assert(typeof CancelSchemaExtensionCommand === "function");
assert(typeof CancelSchemaExtension$ === "object");
assert(typeof ConnectDirectoryCommand === "function");
assert(typeof ConnectDirectory$ === "object");
assert(typeof CreateAliasCommand === "function");
assert(typeof CreateAlias$ === "object");
assert(typeof CreateComputerCommand === "function");
assert(typeof CreateComputer$ === "object");
assert(typeof CreateConditionalForwarderCommand === "function");
assert(typeof CreateConditionalForwarder$ === "object");
assert(typeof CreateDirectoryCommand === "function");
assert(typeof CreateDirectory$ === "object");
assert(typeof CreateHybridADCommand === "function");
assert(typeof CreateHybridAD$ === "object");
assert(typeof CreateLogSubscriptionCommand === "function");
assert(typeof CreateLogSubscription$ === "object");
assert(typeof CreateMicrosoftADCommand === "function");
assert(typeof CreateMicrosoftAD$ === "object");
assert(typeof CreateSnapshotCommand === "function");
assert(typeof CreateSnapshot$ === "object");
assert(typeof CreateTrustCommand === "function");
assert(typeof CreateTrust$ === "object");
assert(typeof DeleteADAssessmentCommand === "function");
assert(typeof DeleteADAssessment$ === "object");
assert(typeof DeleteConditionalForwarderCommand === "function");
assert(typeof DeleteConditionalForwarder$ === "object");
assert(typeof DeleteDirectoryCommand === "function");
assert(typeof DeleteDirectory$ === "object");
assert(typeof DeleteLogSubscriptionCommand === "function");
assert(typeof DeleteLogSubscription$ === "object");
assert(typeof DeleteSnapshotCommand === "function");
assert(typeof DeleteSnapshot$ === "object");
assert(typeof DeleteTrustCommand === "function");
assert(typeof DeleteTrust$ === "object");
assert(typeof DeregisterCertificateCommand === "function");
assert(typeof DeregisterCertificate$ === "object");
assert(typeof DeregisterEventTopicCommand === "function");
assert(typeof DeregisterEventTopic$ === "object");
assert(typeof DescribeADAssessmentCommand === "function");
assert(typeof DescribeADAssessment$ === "object");
assert(typeof DescribeCAEnrollmentPolicyCommand === "function");
assert(typeof DescribeCAEnrollmentPolicy$ === "object");
assert(typeof DescribeCertificateCommand === "function");
assert(typeof DescribeCertificate$ === "object");
assert(typeof DescribeClientAuthenticationSettingsCommand === "function");
assert(typeof DescribeClientAuthenticationSettings$ === "object");
assert(typeof DescribeConditionalForwardersCommand === "function");
assert(typeof DescribeConditionalForwarders$ === "object");
assert(typeof DescribeDirectoriesCommand === "function");
assert(typeof DescribeDirectories$ === "object");
assert(typeof DescribeDirectoryDataAccessCommand === "function");
assert(typeof DescribeDirectoryDataAccess$ === "object");
assert(typeof DescribeDomainControllersCommand === "function");
assert(typeof DescribeDomainControllers$ === "object");
assert(typeof DescribeEventTopicsCommand === "function");
assert(typeof DescribeEventTopics$ === "object");
assert(typeof DescribeHybridADUpdateCommand === "function");
assert(typeof DescribeHybridADUpdate$ === "object");
assert(typeof DescribeLDAPSSettingsCommand === "function");
assert(typeof DescribeLDAPSSettings$ === "object");
assert(typeof DescribeRegionsCommand === "function");
assert(typeof DescribeRegions$ === "object");
assert(typeof DescribeSettingsCommand === "function");
assert(typeof DescribeSettings$ === "object");
assert(typeof DescribeSharedDirectoriesCommand === "function");
assert(typeof DescribeSharedDirectories$ === "object");
assert(typeof DescribeSnapshotsCommand === "function");
assert(typeof DescribeSnapshots$ === "object");
assert(typeof DescribeTrustsCommand === "function");
assert(typeof DescribeTrusts$ === "object");
assert(typeof DescribeUpdateDirectoryCommand === "function");
assert(typeof DescribeUpdateDirectory$ === "object");
assert(typeof DisableCAEnrollmentPolicyCommand === "function");
assert(typeof DisableCAEnrollmentPolicy$ === "object");
assert(typeof DisableClientAuthenticationCommand === "function");
assert(typeof DisableClientAuthentication$ === "object");
assert(typeof DisableDirectoryDataAccessCommand === "function");
assert(typeof DisableDirectoryDataAccess$ === "object");
assert(typeof DisableLDAPSCommand === "function");
assert(typeof DisableLDAPS$ === "object");
assert(typeof DisableRadiusCommand === "function");
assert(typeof DisableRadius$ === "object");
assert(typeof DisableSsoCommand === "function");
assert(typeof DisableSso$ === "object");
assert(typeof EnableCAEnrollmentPolicyCommand === "function");
assert(typeof EnableCAEnrollmentPolicy$ === "object");
assert(typeof EnableClientAuthenticationCommand === "function");
assert(typeof EnableClientAuthentication$ === "object");
assert(typeof EnableDirectoryDataAccessCommand === "function");
assert(typeof EnableDirectoryDataAccess$ === "object");
assert(typeof EnableLDAPSCommand === "function");
assert(typeof EnableLDAPS$ === "object");
assert(typeof EnableRadiusCommand === "function");
assert(typeof EnableRadius$ === "object");
assert(typeof EnableSsoCommand === "function");
assert(typeof EnableSso$ === "object");
assert(typeof GetDirectoryLimitsCommand === "function");
assert(typeof GetDirectoryLimits$ === "object");
assert(typeof GetSnapshotLimitsCommand === "function");
assert(typeof GetSnapshotLimits$ === "object");
assert(typeof ListADAssessmentsCommand === "function");
assert(typeof ListADAssessments$ === "object");
assert(typeof ListCertificatesCommand === "function");
assert(typeof ListCertificates$ === "object");
assert(typeof ListIpRoutesCommand === "function");
assert(typeof ListIpRoutes$ === "object");
assert(typeof ListLogSubscriptionsCommand === "function");
assert(typeof ListLogSubscriptions$ === "object");
assert(typeof ListSchemaExtensionsCommand === "function");
assert(typeof ListSchemaExtensions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterCertificateCommand === "function");
assert(typeof RegisterCertificate$ === "object");
assert(typeof RegisterEventTopicCommand === "function");
assert(typeof RegisterEventTopic$ === "object");
assert(typeof RejectSharedDirectoryCommand === "function");
assert(typeof RejectSharedDirectory$ === "object");
assert(typeof RemoveIpRoutesCommand === "function");
assert(typeof RemoveIpRoutes$ === "object");
assert(typeof RemoveRegionCommand === "function");
assert(typeof RemoveRegion$ === "object");
assert(typeof RemoveTagsFromResourceCommand === "function");
assert(typeof RemoveTagsFromResource$ === "object");
assert(typeof ResetUserPasswordCommand === "function");
assert(typeof ResetUserPassword$ === "object");
assert(typeof RestoreFromSnapshotCommand === "function");
assert(typeof RestoreFromSnapshot$ === "object");
assert(typeof ShareDirectoryCommand === "function");
assert(typeof ShareDirectory$ === "object");
assert(typeof StartADAssessmentCommand === "function");
assert(typeof StartADAssessment$ === "object");
assert(typeof StartSchemaExtensionCommand === "function");
assert(typeof StartSchemaExtension$ === "object");
assert(typeof UnshareDirectoryCommand === "function");
assert(typeof UnshareDirectory$ === "object");
assert(typeof UpdateConditionalForwarderCommand === "function");
assert(typeof UpdateConditionalForwarder$ === "object");
assert(typeof UpdateDirectorySetupCommand === "function");
assert(typeof UpdateDirectorySetup$ === "object");
assert(typeof UpdateHybridADCommand === "function");
assert(typeof UpdateHybridAD$ === "object");
assert(typeof UpdateNumberOfDomainControllersCommand === "function");
assert(typeof UpdateNumberOfDomainControllers$ === "object");
assert(typeof UpdateRadiusCommand === "function");
assert(typeof UpdateRadius$ === "object");
assert(typeof UpdateSettingsCommand === "function");
assert(typeof UpdateSettings$ === "object");
assert(typeof UpdateTrustCommand === "function");
assert(typeof UpdateTrust$ === "object");
assert(typeof VerifyTrustCommand === "function");
assert(typeof VerifyTrust$ === "object");
// structural schemas
assert(typeof AcceptSharedDirectoryRequest$ === "object");
assert(typeof AcceptSharedDirectoryResult$ === "object");
assert(typeof AddIpRoutesRequest$ === "object");
assert(typeof AddIpRoutesResult$ === "object");
assert(typeof AddRegionRequest$ === "object");
assert(typeof AddRegionResult$ === "object");
assert(typeof AddTagsToResourceRequest$ === "object");
assert(typeof AddTagsToResourceResult$ === "object");
assert(typeof Assessment$ === "object");
assert(typeof AssessmentConfiguration$ === "object");
assert(typeof AssessmentReport$ === "object");
assert(typeof AssessmentSummary$ === "object");
assert(typeof AssessmentValidation$ === "object");
assert(typeof Attribute$ === "object");
assert(typeof CancelSchemaExtensionRequest$ === "object");
assert(typeof CancelSchemaExtensionResult$ === "object");
assert(typeof Certificate$ === "object");
assert(typeof CertificateInfo$ === "object");
assert(typeof ClientAuthenticationSettingInfo$ === "object");
assert(typeof ClientCertAuthSettings$ === "object");
assert(typeof Computer$ === "object");
assert(typeof ConditionalForwarder$ === "object");
assert(typeof ConnectDirectoryRequest$ === "object");
assert(typeof ConnectDirectoryResult$ === "object");
assert(typeof CreateAliasRequest$ === "object");
assert(typeof CreateAliasResult$ === "object");
assert(typeof CreateComputerRequest$ === "object");
assert(typeof CreateComputerResult$ === "object");
assert(typeof CreateConditionalForwarderRequest$ === "object");
assert(typeof CreateConditionalForwarderResult$ === "object");
assert(typeof CreateDirectoryRequest$ === "object");
assert(typeof CreateDirectoryResult$ === "object");
assert(typeof CreateHybridADRequest$ === "object");
assert(typeof CreateHybridADResult$ === "object");
assert(typeof CreateLogSubscriptionRequest$ === "object");
assert(typeof CreateLogSubscriptionResult$ === "object");
assert(typeof CreateMicrosoftADRequest$ === "object");
assert(typeof CreateMicrosoftADResult$ === "object");
assert(typeof CreateSnapshotRequest$ === "object");
assert(typeof CreateSnapshotResult$ === "object");
assert(typeof CreateTrustRequest$ === "object");
assert(typeof CreateTrustResult$ === "object");
assert(typeof DeleteADAssessmentRequest$ === "object");
assert(typeof DeleteADAssessmentResult$ === "object");
assert(typeof DeleteConditionalForwarderRequest$ === "object");
assert(typeof DeleteConditionalForwarderResult$ === "object");
assert(typeof DeleteDirectoryRequest$ === "object");
assert(typeof DeleteDirectoryResult$ === "object");
assert(typeof DeleteLogSubscriptionRequest$ === "object");
assert(typeof DeleteLogSubscriptionResult$ === "object");
assert(typeof DeleteSnapshotRequest$ === "object");
assert(typeof DeleteSnapshotResult$ === "object");
assert(typeof DeleteTrustRequest$ === "object");
assert(typeof DeleteTrustResult$ === "object");
assert(typeof DeregisterCertificateRequest$ === "object");
assert(typeof DeregisterCertificateResult$ === "object");
assert(typeof DeregisterEventTopicRequest$ === "object");
assert(typeof DeregisterEventTopicResult$ === "object");
assert(typeof DescribeADAssessmentRequest$ === "object");
assert(typeof DescribeADAssessmentResult$ === "object");
assert(typeof DescribeCAEnrollmentPolicyRequest$ === "object");
assert(typeof DescribeCAEnrollmentPolicyResult$ === "object");
assert(typeof DescribeCertificateRequest$ === "object");
assert(typeof DescribeCertificateResult$ === "object");
assert(typeof DescribeClientAuthenticationSettingsRequest$ === "object");
assert(typeof DescribeClientAuthenticationSettingsResult$ === "object");
assert(typeof DescribeConditionalForwardersRequest$ === "object");
assert(typeof DescribeConditionalForwardersResult$ === "object");
assert(typeof DescribeDirectoriesRequest$ === "object");
assert(typeof DescribeDirectoriesResult$ === "object");
assert(typeof DescribeDirectoryDataAccessRequest$ === "object");
assert(typeof DescribeDirectoryDataAccessResult$ === "object");
assert(typeof DescribeDomainControllersRequest$ === "object");
assert(typeof DescribeDomainControllersResult$ === "object");
assert(typeof DescribeEventTopicsRequest$ === "object");
assert(typeof DescribeEventTopicsResult$ === "object");
assert(typeof DescribeHybridADUpdateRequest$ === "object");
assert(typeof DescribeHybridADUpdateResult$ === "object");
assert(typeof DescribeLDAPSSettingsRequest$ === "object");
assert(typeof DescribeLDAPSSettingsResult$ === "object");
assert(typeof DescribeRegionsRequest$ === "object");
assert(typeof DescribeRegionsResult$ === "object");
assert(typeof DescribeSettingsRequest$ === "object");
assert(typeof DescribeSettingsResult$ === "object");
assert(typeof DescribeSharedDirectoriesRequest$ === "object");
assert(typeof DescribeSharedDirectoriesResult$ === "object");
assert(typeof DescribeSnapshotsRequest$ === "object");
assert(typeof DescribeSnapshotsResult$ === "object");
assert(typeof DescribeTrustsRequest$ === "object");
assert(typeof DescribeTrustsResult$ === "object");
assert(typeof DescribeUpdateDirectoryRequest$ === "object");
assert(typeof DescribeUpdateDirectoryResult$ === "object");
assert(typeof DirectoryConnectSettings$ === "object");
assert(typeof DirectoryConnectSettingsDescription$ === "object");
assert(typeof DirectoryDescription$ === "object");
assert(typeof DirectoryLimits$ === "object");
assert(typeof DirectorySizeUpdateSettings$ === "object");
assert(typeof DirectoryVpcSettings$ === "object");
assert(typeof DirectoryVpcSettingsDescription$ === "object");
assert(typeof DisableCAEnrollmentPolicyRequest$ === "object");
assert(typeof DisableCAEnrollmentPolicyResult$ === "object");
assert(typeof DisableClientAuthenticationRequest$ === "object");
assert(typeof DisableClientAuthenticationResult$ === "object");
assert(typeof DisableDirectoryDataAccessRequest$ === "object");
assert(typeof DisableDirectoryDataAccessResult$ === "object");
assert(typeof DisableLDAPSRequest$ === "object");
assert(typeof DisableLDAPSResult$ === "object");
assert(typeof DisableRadiusRequest$ === "object");
assert(typeof DisableRadiusResult$ === "object");
assert(typeof DisableSsoRequest$ === "object");
assert(typeof DisableSsoResult$ === "object");
assert(typeof DomainController$ === "object");
assert(typeof EnableCAEnrollmentPolicyRequest$ === "object");
assert(typeof EnableCAEnrollmentPolicyResult$ === "object");
assert(typeof EnableClientAuthenticationRequest$ === "object");
assert(typeof EnableClientAuthenticationResult$ === "object");
assert(typeof EnableDirectoryDataAccessRequest$ === "object");
assert(typeof EnableDirectoryDataAccessResult$ === "object");
assert(typeof EnableLDAPSRequest$ === "object");
assert(typeof EnableLDAPSResult$ === "object");
assert(typeof EnableRadiusRequest$ === "object");
assert(typeof EnableRadiusResult$ === "object");
assert(typeof EnableSsoRequest$ === "object");
assert(typeof EnableSsoResult$ === "object");
assert(typeof EventTopic$ === "object");
assert(typeof GetDirectoryLimitsRequest$ === "object");
assert(typeof GetDirectoryLimitsResult$ === "object");
assert(typeof GetSnapshotLimitsRequest$ === "object");
assert(typeof GetSnapshotLimitsResult$ === "object");
assert(typeof HybridAdministratorAccountUpdate$ === "object");
assert(typeof HybridCustomerInstancesSettings$ === "object");
assert(typeof HybridSettingsDescription$ === "object");
assert(typeof HybridUpdateActivities$ === "object");
assert(typeof HybridUpdateInfoEntry$ === "object");
assert(typeof HybridUpdateValue$ === "object");
assert(typeof IpRoute$ === "object");
assert(typeof IpRouteInfo$ === "object");
assert(typeof LDAPSSettingInfo$ === "object");
assert(typeof ListADAssessmentsRequest$ === "object");
assert(typeof ListADAssessmentsResult$ === "object");
assert(typeof ListCertificatesRequest$ === "object");
assert(typeof ListCertificatesResult$ === "object");
assert(typeof ListIpRoutesRequest$ === "object");
assert(typeof ListIpRoutesResult$ === "object");
assert(typeof ListLogSubscriptionsRequest$ === "object");
assert(typeof ListLogSubscriptionsResult$ === "object");
assert(typeof ListSchemaExtensionsRequest$ === "object");
assert(typeof ListSchemaExtensionsResult$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResult$ === "object");
assert(typeof LogSubscription$ === "object");
assert(typeof NetworkUpdateSettings$ === "object");
assert(typeof OSUpdateSettings$ === "object");
assert(typeof OwnerDirectoryDescription$ === "object");
assert(typeof RadiusSettings$ === "object");
assert(typeof RegionDescription$ === "object");
assert(typeof RegionsInfo$ === "object");
assert(typeof RegisterCertificateRequest$ === "object");
assert(typeof RegisterCertificateResult$ === "object");
assert(typeof RegisterEventTopicRequest$ === "object");
assert(typeof RegisterEventTopicResult$ === "object");
assert(typeof RejectSharedDirectoryRequest$ === "object");
assert(typeof RejectSharedDirectoryResult$ === "object");
assert(typeof RemoveIpRoutesRequest$ === "object");
assert(typeof RemoveIpRoutesResult$ === "object");
assert(typeof RemoveRegionRequest$ === "object");
assert(typeof RemoveRegionResult$ === "object");
assert(typeof RemoveTagsFromResourceRequest$ === "object");
assert(typeof RemoveTagsFromResourceResult$ === "object");
assert(typeof ResetUserPasswordRequest$ === "object");
assert(typeof ResetUserPasswordResult$ === "object");
assert(typeof RestoreFromSnapshotRequest$ === "object");
assert(typeof RestoreFromSnapshotResult$ === "object");
assert(typeof SchemaExtensionInfo$ === "object");
assert(typeof Setting$ === "object");
assert(typeof SettingEntry$ === "object");
assert(typeof SharedDirectory$ === "object");
assert(typeof ShareDirectoryRequest$ === "object");
assert(typeof ShareDirectoryResult$ === "object");
assert(typeof ShareTarget$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof SnapshotLimits$ === "object");
assert(typeof StartADAssessmentRequest$ === "object");
assert(typeof StartADAssessmentResult$ === "object");
assert(typeof StartSchemaExtensionRequest$ === "object");
assert(typeof StartSchemaExtensionResult$ === "object");
assert(typeof Tag$ === "object");
assert(typeof Trust$ === "object");
assert(typeof UnshareDirectoryRequest$ === "object");
assert(typeof UnshareDirectoryResult$ === "object");
assert(typeof UnshareTarget$ === "object");
assert(typeof UpdateConditionalForwarderRequest$ === "object");
assert(typeof UpdateConditionalForwarderResult$ === "object");
assert(typeof UpdateDirectorySetupRequest$ === "object");
assert(typeof UpdateDirectorySetupResult$ === "object");
assert(typeof UpdateHybridADRequest$ === "object");
assert(typeof UpdateHybridADResult$ === "object");
assert(typeof UpdateInfoEntry$ === "object");
assert(typeof UpdateNumberOfDomainControllersRequest$ === "object");
assert(typeof UpdateNumberOfDomainControllersResult$ === "object");
assert(typeof UpdateRadiusRequest$ === "object");
assert(typeof UpdateRadiusResult$ === "object");
assert(typeof UpdateSettingsRequest$ === "object");
assert(typeof UpdateSettingsResult$ === "object");
assert(typeof UpdateTrustRequest$ === "object");
assert(typeof UpdateTrustResult$ === "object");
assert(typeof UpdateValue$ === "object");
assert(typeof VerifyTrustRequest$ === "object");
assert(typeof VerifyTrustResult$ === "object");
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
assert(AccessDeniedException.prototype instanceof DirectoryServiceServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ADAssessmentLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof ADAssessmentLimitExceededException$ === "object");
assert(AuthenticationFailedException.prototype instanceof DirectoryServiceServiceException);
assert(typeof AuthenticationFailedException$ === "object");
assert(CertificateAlreadyExistsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof CertificateAlreadyExistsException$ === "object");
assert(CertificateDoesNotExistException.prototype instanceof DirectoryServiceServiceException);
assert(typeof CertificateDoesNotExistException$ === "object");
assert(CertificateInUseException.prototype instanceof DirectoryServiceServiceException);
assert(typeof CertificateInUseException$ === "object");
assert(CertificateLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof CertificateLimitExceededException$ === "object");
assert(ClientException.prototype instanceof DirectoryServiceServiceException);
assert(typeof ClientException$ === "object");
assert(DirectoryAlreadyInRegionException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryAlreadyInRegionException$ === "object");
assert(DirectoryAlreadySharedException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryAlreadySharedException$ === "object");
assert(DirectoryDoesNotExistException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryDoesNotExistException$ === "object");
assert(DirectoryInDesiredStateException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryInDesiredStateException$ === "object");
assert(DirectoryLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryLimitExceededException$ === "object");
assert(DirectoryNotSharedException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryNotSharedException$ === "object");
assert(DirectoryUnavailableException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DirectoryUnavailableException$ === "object");
assert(DisableAlreadyInProgressException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DisableAlreadyInProgressException$ === "object");
assert(DomainControllerLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof DomainControllerLimitExceededException$ === "object");
assert(EnableAlreadyInProgressException.prototype instanceof DirectoryServiceServiceException);
assert(typeof EnableAlreadyInProgressException$ === "object");
assert(EntityAlreadyExistsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof EntityAlreadyExistsException$ === "object");
assert(EntityDoesNotExistException.prototype instanceof DirectoryServiceServiceException);
assert(typeof EntityDoesNotExistException$ === "object");
assert(IncompatibleSettingsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof IncompatibleSettingsException$ === "object");
assert(InsufficientPermissionsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InsufficientPermissionsException$ === "object");
assert(InvalidCertificateException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidCertificateException$ === "object");
assert(InvalidClientAuthStatusException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidClientAuthStatusException$ === "object");
assert(InvalidLDAPSStatusException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidLDAPSStatusException$ === "object");
assert(InvalidNextTokenException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidNextTokenException$ === "object");
assert(InvalidParameterException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(InvalidPasswordException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidPasswordException$ === "object");
assert(InvalidTargetException.prototype instanceof DirectoryServiceServiceException);
assert(typeof InvalidTargetException$ === "object");
assert(IpRouteLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof IpRouteLimitExceededException$ === "object");
assert(NoAvailableCertificateException.prototype instanceof DirectoryServiceServiceException);
assert(typeof NoAvailableCertificateException$ === "object");
assert(OrganizationsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof OrganizationsException$ === "object");
assert(RegionLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof RegionLimitExceededException$ === "object");
assert(ServiceException.prototype instanceof DirectoryServiceServiceException);
assert(typeof ServiceException$ === "object");
assert(ShareLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof ShareLimitExceededException$ === "object");
assert(SnapshotLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof SnapshotLimitExceededException$ === "object");
assert(TagLimitExceededException.prototype instanceof DirectoryServiceServiceException);
assert(typeof TagLimitExceededException$ === "object");
assert(UnsupportedOperationException.prototype instanceof DirectoryServiceServiceException);
assert(typeof UnsupportedOperationException$ === "object");
assert(UnsupportedSettingsException.prototype instanceof DirectoryServiceServiceException);
assert(typeof UnsupportedSettingsException$ === "object");
assert(UserDoesNotExistException.prototype instanceof DirectoryServiceServiceException);
assert(typeof UserDoesNotExistException$ === "object");
assert(DirectoryServiceServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForHybridADUpdated === "function");
assert(typeof waitUntilHybridADUpdated === "function");
// paginators
assert(typeof paginateDescribeClientAuthenticationSettings === "function");
assert(typeof paginateDescribeDirectories === "function");
assert(typeof paginateDescribeDomainControllers === "function");
assert(typeof paginateDescribeLDAPSSettings === "function");
assert(typeof paginateDescribeRegions === "function");
assert(typeof paginateDescribeSharedDirectories === "function");
assert(typeof paginateDescribeSnapshots === "function");
assert(typeof paginateDescribeTrusts === "function");
assert(typeof paginateDescribeUpdateDirectory === "function");
assert(typeof paginateListADAssessments === "function");
assert(typeof paginateListCertificates === "function");
assert(typeof paginateListIpRoutes === "function");
assert(typeof paginateListLogSubscriptions === "function");
assert(typeof paginateListSchemaExtensions === "function");
assert(typeof paginateListTagsForResource === "function");
console.log(`DirectoryService index test passed.`);
