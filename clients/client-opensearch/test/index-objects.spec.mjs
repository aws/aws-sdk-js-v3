import {
  AIMLOptionsInput$,
  AIMLOptionsOutput$,
  AIMLOptionsStatus$,
  AWSDomainInformation$,
  AWSServicePrincipal,
  AcceptInboundConnection$,
  AcceptInboundConnectionCommand,
  AcceptInboundConnectionRequest$,
  AcceptInboundConnectionResponse$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessPoliciesStatus$,
  ActionSeverity,
  ActionStatus,
  ActionType,
  AddDataSource$,
  AddDataSourceCommand,
  AddDataSourceRequest$,
  AddDataSourceResponse$,
  AddDirectQueryDataSource$,
  AddDirectQueryDataSourceCommand,
  AddDirectQueryDataSourceRequest$,
  AddDirectQueryDataSourceResponse$,
  AddTags$,
  AddTagsCommand,
  AddTagsRequest$,
  AdditionalLimit$,
  AdvancedOptionsStatus$,
  AdvancedSecurityOptions$,
  AdvancedSecurityOptionsInput$,
  AdvancedSecurityOptionsStatus$,
  AppConfig$,
  AppConfigType,
  ApplicationStatus,
  ApplicationSummary$,
  AssociatePackage$,
  AssociatePackageCommand,
  AssociatePackageRequest$,
  AssociatePackageResponse$,
  AssociatePackages$,
  AssociatePackagesCommand,
  AssociatePackagesRequest$,
  AssociatePackagesResponse$,
  AuthorizeVpcEndpointAccess$,
  AuthorizeVpcEndpointAccessCommand,
  AuthorizeVpcEndpointAccessRequest$,
  AuthorizeVpcEndpointAccessResponse$,
  AuthorizedPrincipal$,
  AutoTune$,
  AutoTuneDesiredState,
  AutoTuneDetails$,
  AutoTuneMaintenanceSchedule$,
  AutoTuneOptions$,
  AutoTuneOptionsInput$,
  AutoTuneOptionsOutput$,
  AutoTuneOptionsStatus$,
  AutoTuneState,
  AutoTuneStatus$,
  AutoTuneType,
  AvailabilityZoneInfo$,
  BaseException,
  BaseException$,
  CancelDomainConfigChange$,
  CancelDomainConfigChangeCommand,
  CancelDomainConfigChangeRequest$,
  CancelDomainConfigChangeResponse$,
  CancelServiceSoftwareUpdate$,
  CancelServiceSoftwareUpdateCommand,
  CancelServiceSoftwareUpdateRequest$,
  CancelServiceSoftwareUpdateResponse$,
  CancelledChangeProperty$,
  ChangeProgressDetails$,
  ChangeProgressStage$,
  ChangeProgressStatusDetails$,
  CloudWatchDirectQueryDataSource$,
  ClusterConfig$,
  ClusterConfigStatus$,
  CognitoOptions$,
  CognitoOptionsStatus$,
  ColdStorageOptions$,
  CompatibleVersionsMap$,
  ConfigChangeStatus,
  ConflictException,
  ConflictException$,
  ConnectionMode,
  ConnectionProperties$,
  CreateApplication$,
  CreateApplicationCommand,
  CreateApplicationRequest$,
  CreateApplicationResponse$,
  CreateDomain$,
  CreateDomainCommand,
  CreateDomainRequest$,
  CreateDomainResponse$,
  CreateIndex$,
  CreateIndexCommand,
  CreateIndexRequest$,
  CreateIndexResponse$,
  CreateOutboundConnection$,
  CreateOutboundConnectionCommand,
  CreateOutboundConnectionRequest$,
  CreateOutboundConnectionResponse$,
  CreatePackage$,
  CreatePackageCommand,
  CreatePackageRequest$,
  CreatePackageResponse$,
  CreateVpcEndpoint$,
  CreateVpcEndpointCommand,
  CreateVpcEndpointRequest$,
  CreateVpcEndpointResponse$,
  CrossClusterSearchConnectionProperties$,
  DataSource$,
  DataSourceDetails$,
  DataSourceStatus,
  DataSourceType$,
  DeleteApplication$,
  DeleteApplicationCommand,
  DeleteApplicationRequest$,
  DeleteApplicationResponse$,
  DeleteDataSource$,
  DeleteDataSourceCommand,
  DeleteDataSourceRequest$,
  DeleteDataSourceResponse$,
  DeleteDirectQueryDataSource$,
  DeleteDirectQueryDataSourceCommand,
  DeleteDirectQueryDataSourceRequest$,
  DeleteDomain$,
  DeleteDomainCommand,
  DeleteDomainRequest$,
  DeleteDomainResponse$,
  DeleteInboundConnection$,
  DeleteInboundConnectionCommand,
  DeleteInboundConnectionRequest$,
  DeleteInboundConnectionResponse$,
  DeleteIndex$,
  DeleteIndexCommand,
  DeleteIndexRequest$,
  DeleteIndexResponse$,
  DeleteOutboundConnection$,
  DeleteOutboundConnectionCommand,
  DeleteOutboundConnectionRequest$,
  DeleteOutboundConnectionResponse$,
  DeletePackage$,
  DeletePackageCommand,
  DeletePackageRequest$,
  DeletePackageResponse$,
  DeleteVpcEndpoint$,
  DeleteVpcEndpointCommand,
  DeleteVpcEndpointRequest$,
  DeleteVpcEndpointResponse$,
  DependencyFailureException,
  DependencyFailureException$,
  DeploymentStatus,
  DescribeDomain$,
  DescribeDomainAutoTunes$,
  DescribeDomainAutoTunesCommand,
  DescribeDomainAutoTunesRequest$,
  DescribeDomainAutoTunesResponse$,
  DescribeDomainChangeProgress$,
  DescribeDomainChangeProgressCommand,
  DescribeDomainChangeProgressRequest$,
  DescribeDomainChangeProgressResponse$,
  DescribeDomainCommand,
  DescribeDomainConfig$,
  DescribeDomainConfigCommand,
  DescribeDomainConfigRequest$,
  DescribeDomainConfigResponse$,
  DescribeDomainHealth$,
  DescribeDomainHealthCommand,
  DescribeDomainHealthRequest$,
  DescribeDomainHealthResponse$,
  DescribeDomainNodes$,
  DescribeDomainNodesCommand,
  DescribeDomainNodesRequest$,
  DescribeDomainNodesResponse$,
  DescribeDomainRequest$,
  DescribeDomainResponse$,
  DescribeDomains$,
  DescribeDomainsCommand,
  DescribeDomainsRequest$,
  DescribeDomainsResponse$,
  DescribeDryRunProgress$,
  DescribeDryRunProgressCommand,
  DescribeDryRunProgressRequest$,
  DescribeDryRunProgressResponse$,
  DescribeInboundConnections$,
  DescribeInboundConnectionsCommand,
  DescribeInboundConnectionsRequest$,
  DescribeInboundConnectionsResponse$,
  DescribeInstanceTypeLimits$,
  DescribeInstanceTypeLimitsCommand,
  DescribeInstanceTypeLimitsRequest$,
  DescribeInstanceTypeLimitsResponse$,
  DescribeOutboundConnections$,
  DescribeOutboundConnectionsCommand,
  DescribeOutboundConnectionsRequest$,
  DescribeOutboundConnectionsResponse$,
  DescribePackages$,
  DescribePackagesCommand,
  DescribePackagesFilter$,
  DescribePackagesFilterName,
  DescribePackagesRequest$,
  DescribePackagesResponse$,
  DescribeReservedInstanceOfferings$,
  DescribeReservedInstanceOfferingsCommand,
  DescribeReservedInstanceOfferingsRequest$,
  DescribeReservedInstanceOfferingsResponse$,
  DescribeReservedInstances$,
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesRequest$,
  DescribeReservedInstancesResponse$,
  DescribeVpcEndpoints$,
  DescribeVpcEndpointsCommand,
  DescribeVpcEndpointsRequest$,
  DescribeVpcEndpointsResponse$,
  DirectQueryDataSource$,
  DirectQueryDataSourceType$,
  DisabledOperationException,
  DisabledOperationException$,
  DissociatePackage$,
  DissociatePackageCommand,
  DissociatePackageRequest$,
  DissociatePackageResponse$,
  DissociatePackages$,
  DissociatePackagesCommand,
  DissociatePackagesRequest$,
  DissociatePackagesResponse$,
  DomainConfig$,
  DomainEndpointOptions$,
  DomainEndpointOptionsStatus$,
  DomainHealth,
  DomainInfo$,
  DomainInformationContainer$,
  DomainMaintenanceDetails$,
  DomainNodesStatus$,
  DomainPackageDetails$,
  DomainPackageStatus,
  DomainProcessingStatusType,
  DomainState,
  DomainStatus$,
  DryRunMode,
  DryRunProgressStatus$,
  DryRunResults$,
  Duration$,
  EBSOptions$,
  EBSOptionsStatus$,
  EncryptionAtRestOptions$,
  EncryptionAtRestOptionsStatus$,
  EngineType,
  EnvironmentInfo$,
  ErrorDetails$,
  Filter$,
  GetApplication$,
  GetApplicationCommand,
  GetApplicationRequest$,
  GetApplicationResponse$,
  GetCompatibleVersions$,
  GetCompatibleVersionsCommand,
  GetCompatibleVersionsRequest$,
  GetCompatibleVersionsResponse$,
  GetDataSource$,
  GetDataSourceCommand,
  GetDataSourceRequest$,
  GetDataSourceResponse$,
  GetDefaultApplicationSetting$,
  GetDefaultApplicationSettingCommand,
  GetDefaultApplicationSettingRequest$,
  GetDefaultApplicationSettingResponse$,
  GetDirectQueryDataSource$,
  GetDirectQueryDataSourceCommand,
  GetDirectQueryDataSourceRequest$,
  GetDirectQueryDataSourceResponse$,
  GetDomainMaintenanceStatus$,
  GetDomainMaintenanceStatusCommand,
  GetDomainMaintenanceStatusRequest$,
  GetDomainMaintenanceStatusResponse$,
  GetIndex$,
  GetIndexCommand,
  GetIndexRequest$,
  GetIndexResponse$,
  GetPackageVersionHistory$,
  GetPackageVersionHistoryCommand,
  GetPackageVersionHistoryRequest$,
  GetPackageVersionHistoryResponse$,
  GetUpgradeHistory$,
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryRequest$,
  GetUpgradeHistoryResponse$,
  GetUpgradeStatus$,
  GetUpgradeStatusCommand,
  GetUpgradeStatusRequest$,
  GetUpgradeStatusResponse$,
  IAMFederationOptionsInput$,
  IAMFederationOptionsOutput$,
  IPAddressType,
  IPAddressTypeStatus$,
  IamIdentityCenterOptions$,
  IamIdentityCenterOptionsInput$,
  IdentityCenterOptions$,
  IdentityCenterOptionsInput$,
  IdentityCenterOptionsStatus$,
  InboundConnection$,
  InboundConnectionStatus$,
  InboundConnectionStatusCode,
  IndexStatus,
  InitiatedBy,
  InstanceCountLimits$,
  InstanceLimits$,
  InstanceTypeDetails$,
  InternalException,
  InternalException$,
  InvalidPaginationTokenException,
  InvalidPaginationTokenException$,
  InvalidTypeException,
  InvalidTypeException$,
  JWTOptionsInput$,
  JWTOptionsOutput$,
  KeyStoreAccessOption$,
  LimitExceededException,
  LimitExceededException$,
  Limits$,
  ListApplications$,
  ListApplicationsCommand,
  ListApplicationsRequest$,
  ListApplicationsResponse$,
  ListDataSources$,
  ListDataSourcesCommand,
  ListDataSourcesRequest$,
  ListDataSourcesResponse$,
  ListDirectQueryDataSources$,
  ListDirectQueryDataSourcesCommand,
  ListDirectQueryDataSourcesRequest$,
  ListDirectQueryDataSourcesResponse$,
  ListDomainMaintenances$,
  ListDomainMaintenancesCommand,
  ListDomainMaintenancesRequest$,
  ListDomainMaintenancesResponse$,
  ListDomainNames$,
  ListDomainNamesCommand,
  ListDomainNamesRequest$,
  ListDomainNamesResponse$,
  ListDomainsForPackage$,
  ListDomainsForPackageCommand,
  ListDomainsForPackageRequest$,
  ListDomainsForPackageResponse$,
  ListInstanceTypeDetails$,
  ListInstanceTypeDetailsCommand,
  ListInstanceTypeDetailsRequest$,
  ListInstanceTypeDetailsResponse$,
  ListPackagesForDomain$,
  ListPackagesForDomainCommand,
  ListPackagesForDomainRequest$,
  ListPackagesForDomainResponse$,
  ListScheduledActions$,
  ListScheduledActionsCommand,
  ListScheduledActionsRequest$,
  ListScheduledActionsResponse$,
  ListTags$,
  ListTagsCommand,
  ListTagsRequest$,
  ListTagsResponse$,
  ListVersions$,
  ListVersionsCommand,
  ListVersionsRequest$,
  ListVersionsResponse$,
  ListVpcEndpointAccess$,
  ListVpcEndpointAccessCommand,
  ListVpcEndpointAccessRequest$,
  ListVpcEndpointAccessResponse$,
  ListVpcEndpoints$,
  ListVpcEndpointsCommand,
  ListVpcEndpointsForDomain$,
  ListVpcEndpointsForDomainCommand,
  ListVpcEndpointsForDomainRequest$,
  ListVpcEndpointsForDomainResponse$,
  ListVpcEndpointsRequest$,
  ListVpcEndpointsResponse$,
  LogPublishingOption$,
  LogPublishingOptionsStatus$,
  LogType,
  MaintenanceStatus,
  MaintenanceType,
  MasterNodeStatus,
  MasterUserOptions$,
  ModifyingProperties$,
  NaturalLanguageQueryGenerationCurrentState,
  NaturalLanguageQueryGenerationDesiredState,
  NaturalLanguageQueryGenerationOptionsInput$,
  NaturalLanguageQueryGenerationOptionsOutput$,
  NodeConfig$,
  NodeOption$,
  NodeOptionsNodeType,
  NodeStatus,
  NodeToNodeEncryptionOptions$,
  NodeToNodeEncryptionOptionsStatus$,
  NodeType,
  OffPeakWindow$,
  OffPeakWindowOptions$,
  OffPeakWindowOptionsStatus$,
  OpenSearch,
  OpenSearchClient,
  OpenSearchPartitionInstanceType,
  OpenSearchServiceException,
  OpenSearchWarmPartitionInstanceType,
  OptionState,
  OptionStatus$,
  OutboundConnection$,
  OutboundConnectionStatus$,
  OutboundConnectionStatusCode,
  OverallChangeStatus,
  PackageAssociationConfiguration$,
  PackageConfiguration$,
  PackageDetails$,
  PackageDetailsForAssociation$,
  PackageEncryptionOptions$,
  PackageScopeOperationEnum,
  PackageSource$,
  PackageStatus,
  PackageType,
  PackageVendingOptions$,
  PackageVersionHistory$,
  PluginProperties$,
  PrincipalType,
  PropertyValueType,
  PurchaseReservedInstanceOffering$,
  PurchaseReservedInstanceOfferingCommand,
  PurchaseReservedInstanceOfferingRequest$,
  PurchaseReservedInstanceOfferingResponse$,
  PutDefaultApplicationSetting$,
  PutDefaultApplicationSettingCommand,
  PutDefaultApplicationSettingRequest$,
  PutDefaultApplicationSettingResponse$,
  RecurringCharge$,
  RejectInboundConnection$,
  RejectInboundConnectionCommand,
  RejectInboundConnectionRequest$,
  RejectInboundConnectionResponse$,
  RemoveTags$,
  RemoveTagsCommand,
  RemoveTagsRequest$,
  RequirementLevel,
  ReservedInstance$,
  ReservedInstanceOffering$,
  ReservedInstancePaymentOption,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  RevokeVpcEndpointAccess$,
  RevokeVpcEndpointAccessCommand,
  RevokeVpcEndpointAccessRequest$,
  RevokeVpcEndpointAccessResponse$,
  RolesKeyIdCOption,
  RollbackOnDisable,
  S3GlueDataCatalog$,
  S3VectorsEngine$,
  SAMLIdp$,
  SAMLOptionsInput$,
  SAMLOptionsOutput$,
  ScheduleAt,
  ScheduledAction$,
  ScheduledAutoTuneActionType,
  ScheduledAutoTuneDetails$,
  ScheduledAutoTuneSeverityType,
  ScheduledBy,
  SecurityLakeDirectQueryDataSource$,
  ServerlessVectorAcceleration$,
  ServiceSoftwareOptions$,
  SkipUnavailableStatus,
  SlotNotAvailableException,
  SlotNotAvailableException$,
  SnapshotOptions$,
  SnapshotOptionsStatus$,
  SoftwareUpdateOptions$,
  SoftwareUpdateOptionsStatus$,
  StartDomainMaintenance$,
  StartDomainMaintenanceCommand,
  StartDomainMaintenanceRequest$,
  StartDomainMaintenanceResponse$,
  StartServiceSoftwareUpdate$,
  StartServiceSoftwareUpdateCommand,
  StartServiceSoftwareUpdateRequest$,
  StartServiceSoftwareUpdateResponse$,
  StorageType$,
  StorageTypeLimit$,
  SubjectKeyIdCOption,
  TLSSecurityPolicy,
  Tag$,
  ThrottlingException,
  ThrottlingException$,
  TimeUnit,
  UpdateApplication$,
  UpdateApplicationCommand,
  UpdateApplicationRequest$,
  UpdateApplicationResponse$,
  UpdateDataSource$,
  UpdateDataSourceCommand,
  UpdateDataSourceRequest$,
  UpdateDataSourceResponse$,
  UpdateDirectQueryDataSource$,
  UpdateDirectQueryDataSourceCommand,
  UpdateDirectQueryDataSourceRequest$,
  UpdateDirectQueryDataSourceResponse$,
  UpdateDomainConfig$,
  UpdateDomainConfigCommand,
  UpdateDomainConfigRequest$,
  UpdateDomainConfigResponse$,
  UpdateIndex$,
  UpdateIndexCommand,
  UpdateIndexRequest$,
  UpdateIndexResponse$,
  UpdatePackage$,
  UpdatePackageCommand,
  UpdatePackageRequest$,
  UpdatePackageResponse$,
  UpdatePackageScope$,
  UpdatePackageScopeCommand,
  UpdatePackageScopeRequest$,
  UpdatePackageScopeResponse$,
  UpdateScheduledAction$,
  UpdateScheduledActionCommand,
  UpdateScheduledActionRequest$,
  UpdateScheduledActionResponse$,
  UpdateVpcEndpoint$,
  UpdateVpcEndpointCommand,
  UpdateVpcEndpointRequest$,
  UpdateVpcEndpointResponse$,
  UpgradeDomain$,
  UpgradeDomainCommand,
  UpgradeDomainRequest$,
  UpgradeDomainResponse$,
  UpgradeHistory$,
  UpgradeStatus,
  UpgradeStep,
  UpgradeStepItem$,
  VPCDerivedInfo$,
  VPCDerivedInfoStatus$,
  VPCOptions$,
  ValidationException,
  ValidationException$,
  ValidationFailure$,
  VersionStatus$,
  VolumeType,
  VpcEndpoint$,
  VpcEndpointError$,
  VpcEndpointErrorCode,
  VpcEndpointStatus,
  VpcEndpointSummary$,
  WindowStartTime$,
  ZoneAwarenessConfig$,
  ZoneStatus,
  paginateDescribeDomainAutoTunes,
  paginateDescribeInboundConnections,
  paginateDescribeOutboundConnections,
  paginateDescribePackages,
  paginateDescribeReservedInstanceOfferings,
  paginateDescribeReservedInstances,
  paginateGetPackageVersionHistory,
  paginateGetUpgradeHistory,
  paginateListApplications,
  paginateListDomainMaintenances,
  paginateListDomainsForPackage,
  paginateListInstanceTypeDetails,
  paginateListPackagesForDomain,
  paginateListScheduledActions,
  paginateListVersions,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OpenSearchClient === "function");
assert(typeof OpenSearch === "function");
// commands
assert(typeof AcceptInboundConnectionCommand === "function");
assert(typeof AcceptInboundConnection$ === "object");
assert(typeof AddDataSourceCommand === "function");
assert(typeof AddDataSource$ === "object");
assert(typeof AddDirectQueryDataSourceCommand === "function");
assert(typeof AddDirectQueryDataSource$ === "object");
assert(typeof AddTagsCommand === "function");
assert(typeof AddTags$ === "object");
assert(typeof AssociatePackageCommand === "function");
assert(typeof AssociatePackage$ === "object");
assert(typeof AssociatePackagesCommand === "function");
assert(typeof AssociatePackages$ === "object");
assert(typeof AuthorizeVpcEndpointAccessCommand === "function");
assert(typeof AuthorizeVpcEndpointAccess$ === "object");
assert(typeof CancelDomainConfigChangeCommand === "function");
assert(typeof CancelDomainConfigChange$ === "object");
assert(typeof CancelServiceSoftwareUpdateCommand === "function");
assert(typeof CancelServiceSoftwareUpdate$ === "object");
assert(typeof CreateApplicationCommand === "function");
assert(typeof CreateApplication$ === "object");
assert(typeof CreateDomainCommand === "function");
assert(typeof CreateDomain$ === "object");
assert(typeof CreateIndexCommand === "function");
assert(typeof CreateIndex$ === "object");
assert(typeof CreateOutboundConnectionCommand === "function");
assert(typeof CreateOutboundConnection$ === "object");
assert(typeof CreatePackageCommand === "function");
assert(typeof CreatePackage$ === "object");
assert(typeof CreateVpcEndpointCommand === "function");
assert(typeof CreateVpcEndpoint$ === "object");
assert(typeof DeleteApplicationCommand === "function");
assert(typeof DeleteApplication$ === "object");
assert(typeof DeleteDataSourceCommand === "function");
assert(typeof DeleteDataSource$ === "object");
assert(typeof DeleteDirectQueryDataSourceCommand === "function");
assert(typeof DeleteDirectQueryDataSource$ === "object");
assert(typeof DeleteDomainCommand === "function");
assert(typeof DeleteDomain$ === "object");
assert(typeof DeleteInboundConnectionCommand === "function");
assert(typeof DeleteInboundConnection$ === "object");
assert(typeof DeleteIndexCommand === "function");
assert(typeof DeleteIndex$ === "object");
assert(typeof DeleteOutboundConnectionCommand === "function");
assert(typeof DeleteOutboundConnection$ === "object");
assert(typeof DeletePackageCommand === "function");
assert(typeof DeletePackage$ === "object");
assert(typeof DeleteVpcEndpointCommand === "function");
assert(typeof DeleteVpcEndpoint$ === "object");
assert(typeof DescribeDomainCommand === "function");
assert(typeof DescribeDomain$ === "object");
assert(typeof DescribeDomainAutoTunesCommand === "function");
assert(typeof DescribeDomainAutoTunes$ === "object");
assert(typeof DescribeDomainChangeProgressCommand === "function");
assert(typeof DescribeDomainChangeProgress$ === "object");
assert(typeof DescribeDomainConfigCommand === "function");
assert(typeof DescribeDomainConfig$ === "object");
assert(typeof DescribeDomainHealthCommand === "function");
assert(typeof DescribeDomainHealth$ === "object");
assert(typeof DescribeDomainNodesCommand === "function");
assert(typeof DescribeDomainNodes$ === "object");
assert(typeof DescribeDomainsCommand === "function");
assert(typeof DescribeDomains$ === "object");
assert(typeof DescribeDryRunProgressCommand === "function");
assert(typeof DescribeDryRunProgress$ === "object");
assert(typeof DescribeInboundConnectionsCommand === "function");
assert(typeof DescribeInboundConnections$ === "object");
assert(typeof DescribeInstanceTypeLimitsCommand === "function");
assert(typeof DescribeInstanceTypeLimits$ === "object");
assert(typeof DescribeOutboundConnectionsCommand === "function");
assert(typeof DescribeOutboundConnections$ === "object");
assert(typeof DescribePackagesCommand === "function");
assert(typeof DescribePackages$ === "object");
assert(typeof DescribeReservedInstanceOfferingsCommand === "function");
assert(typeof DescribeReservedInstanceOfferings$ === "object");
assert(typeof DescribeReservedInstancesCommand === "function");
assert(typeof DescribeReservedInstances$ === "object");
assert(typeof DescribeVpcEndpointsCommand === "function");
assert(typeof DescribeVpcEndpoints$ === "object");
assert(typeof DissociatePackageCommand === "function");
assert(typeof DissociatePackage$ === "object");
assert(typeof DissociatePackagesCommand === "function");
assert(typeof DissociatePackages$ === "object");
assert(typeof GetApplicationCommand === "function");
assert(typeof GetApplication$ === "object");
assert(typeof GetCompatibleVersionsCommand === "function");
assert(typeof GetCompatibleVersions$ === "object");
assert(typeof GetDataSourceCommand === "function");
assert(typeof GetDataSource$ === "object");
assert(typeof GetDefaultApplicationSettingCommand === "function");
assert(typeof GetDefaultApplicationSetting$ === "object");
assert(typeof GetDirectQueryDataSourceCommand === "function");
assert(typeof GetDirectQueryDataSource$ === "object");
assert(typeof GetDomainMaintenanceStatusCommand === "function");
assert(typeof GetDomainMaintenanceStatus$ === "object");
assert(typeof GetIndexCommand === "function");
assert(typeof GetIndex$ === "object");
assert(typeof GetPackageVersionHistoryCommand === "function");
assert(typeof GetPackageVersionHistory$ === "object");
assert(typeof GetUpgradeHistoryCommand === "function");
assert(typeof GetUpgradeHistory$ === "object");
assert(typeof GetUpgradeStatusCommand === "function");
assert(typeof GetUpgradeStatus$ === "object");
assert(typeof ListApplicationsCommand === "function");
assert(typeof ListApplications$ === "object");
assert(typeof ListDataSourcesCommand === "function");
assert(typeof ListDataSources$ === "object");
assert(typeof ListDirectQueryDataSourcesCommand === "function");
assert(typeof ListDirectQueryDataSources$ === "object");
assert(typeof ListDomainMaintenancesCommand === "function");
assert(typeof ListDomainMaintenances$ === "object");
assert(typeof ListDomainNamesCommand === "function");
assert(typeof ListDomainNames$ === "object");
assert(typeof ListDomainsForPackageCommand === "function");
assert(typeof ListDomainsForPackage$ === "object");
assert(typeof ListInstanceTypeDetailsCommand === "function");
assert(typeof ListInstanceTypeDetails$ === "object");
assert(typeof ListPackagesForDomainCommand === "function");
assert(typeof ListPackagesForDomain$ === "object");
assert(typeof ListScheduledActionsCommand === "function");
assert(typeof ListScheduledActions$ === "object");
assert(typeof ListTagsCommand === "function");
assert(typeof ListTags$ === "object");
assert(typeof ListVersionsCommand === "function");
assert(typeof ListVersions$ === "object");
assert(typeof ListVpcEndpointAccessCommand === "function");
assert(typeof ListVpcEndpointAccess$ === "object");
assert(typeof ListVpcEndpointsCommand === "function");
assert(typeof ListVpcEndpoints$ === "object");
assert(typeof ListVpcEndpointsForDomainCommand === "function");
assert(typeof ListVpcEndpointsForDomain$ === "object");
assert(typeof PurchaseReservedInstanceOfferingCommand === "function");
assert(typeof PurchaseReservedInstanceOffering$ === "object");
assert(typeof PutDefaultApplicationSettingCommand === "function");
assert(typeof PutDefaultApplicationSetting$ === "object");
assert(typeof RejectInboundConnectionCommand === "function");
assert(typeof RejectInboundConnection$ === "object");
assert(typeof RemoveTagsCommand === "function");
assert(typeof RemoveTags$ === "object");
assert(typeof RevokeVpcEndpointAccessCommand === "function");
assert(typeof RevokeVpcEndpointAccess$ === "object");
assert(typeof StartDomainMaintenanceCommand === "function");
assert(typeof StartDomainMaintenance$ === "object");
assert(typeof StartServiceSoftwareUpdateCommand === "function");
assert(typeof StartServiceSoftwareUpdate$ === "object");
assert(typeof UpdateApplicationCommand === "function");
assert(typeof UpdateApplication$ === "object");
assert(typeof UpdateDataSourceCommand === "function");
assert(typeof UpdateDataSource$ === "object");
assert(typeof UpdateDirectQueryDataSourceCommand === "function");
assert(typeof UpdateDirectQueryDataSource$ === "object");
assert(typeof UpdateDomainConfigCommand === "function");
assert(typeof UpdateDomainConfig$ === "object");
assert(typeof UpdateIndexCommand === "function");
assert(typeof UpdateIndex$ === "object");
assert(typeof UpdatePackageCommand === "function");
assert(typeof UpdatePackage$ === "object");
assert(typeof UpdatePackageScopeCommand === "function");
assert(typeof UpdatePackageScope$ === "object");
assert(typeof UpdateScheduledActionCommand === "function");
assert(typeof UpdateScheduledAction$ === "object");
assert(typeof UpdateVpcEndpointCommand === "function");
assert(typeof UpdateVpcEndpoint$ === "object");
assert(typeof UpgradeDomainCommand === "function");
assert(typeof UpgradeDomain$ === "object");
// structural schemas
assert(typeof AcceptInboundConnectionRequest$ === "object");
assert(typeof AcceptInboundConnectionResponse$ === "object");
assert(typeof AccessPoliciesStatus$ === "object");
assert(typeof AddDataSourceRequest$ === "object");
assert(typeof AddDataSourceResponse$ === "object");
assert(typeof AddDirectQueryDataSourceRequest$ === "object");
assert(typeof AddDirectQueryDataSourceResponse$ === "object");
assert(typeof AdditionalLimit$ === "object");
assert(typeof AddTagsRequest$ === "object");
assert(typeof AdvancedOptionsStatus$ === "object");
assert(typeof AdvancedSecurityOptions$ === "object");
assert(typeof AdvancedSecurityOptionsInput$ === "object");
assert(typeof AdvancedSecurityOptionsStatus$ === "object");
assert(typeof AIMLOptionsInput$ === "object");
assert(typeof AIMLOptionsOutput$ === "object");
assert(typeof AIMLOptionsStatus$ === "object");
assert(typeof AppConfig$ === "object");
assert(typeof ApplicationSummary$ === "object");
assert(typeof AssociatePackageRequest$ === "object");
assert(typeof AssociatePackageResponse$ === "object");
assert(typeof AssociatePackagesRequest$ === "object");
assert(typeof AssociatePackagesResponse$ === "object");
assert(typeof AuthorizedPrincipal$ === "object");
assert(typeof AuthorizeVpcEndpointAccessRequest$ === "object");
assert(typeof AuthorizeVpcEndpointAccessResponse$ === "object");
assert(typeof AutoTune$ === "object");
assert(typeof AutoTuneDetails$ === "object");
assert(typeof AutoTuneMaintenanceSchedule$ === "object");
assert(typeof AutoTuneOptions$ === "object");
assert(typeof AutoTuneOptionsInput$ === "object");
assert(typeof AutoTuneOptionsOutput$ === "object");
assert(typeof AutoTuneOptionsStatus$ === "object");
assert(typeof AutoTuneStatus$ === "object");
assert(typeof AvailabilityZoneInfo$ === "object");
assert(typeof AWSDomainInformation$ === "object");
assert(typeof CancelDomainConfigChangeRequest$ === "object");
assert(typeof CancelDomainConfigChangeResponse$ === "object");
assert(typeof CancelledChangeProperty$ === "object");
assert(typeof CancelServiceSoftwareUpdateRequest$ === "object");
assert(typeof CancelServiceSoftwareUpdateResponse$ === "object");
assert(typeof ChangeProgressDetails$ === "object");
assert(typeof ChangeProgressStage$ === "object");
assert(typeof ChangeProgressStatusDetails$ === "object");
assert(typeof CloudWatchDirectQueryDataSource$ === "object");
assert(typeof ClusterConfig$ === "object");
assert(typeof ClusterConfigStatus$ === "object");
assert(typeof CognitoOptions$ === "object");
assert(typeof CognitoOptionsStatus$ === "object");
assert(typeof ColdStorageOptions$ === "object");
assert(typeof CompatibleVersionsMap$ === "object");
assert(typeof ConnectionProperties$ === "object");
assert(typeof CreateApplicationRequest$ === "object");
assert(typeof CreateApplicationResponse$ === "object");
assert(typeof CreateDomainRequest$ === "object");
assert(typeof CreateDomainResponse$ === "object");
assert(typeof CreateIndexRequest$ === "object");
assert(typeof CreateIndexResponse$ === "object");
assert(typeof CreateOutboundConnectionRequest$ === "object");
assert(typeof CreateOutboundConnectionResponse$ === "object");
assert(typeof CreatePackageRequest$ === "object");
assert(typeof CreatePackageResponse$ === "object");
assert(typeof CreateVpcEndpointRequest$ === "object");
assert(typeof CreateVpcEndpointResponse$ === "object");
assert(typeof CrossClusterSearchConnectionProperties$ === "object");
assert(typeof DataSource$ === "object");
assert(typeof DataSourceDetails$ === "object");
assert(typeof DataSourceType$ === "object");
assert(typeof DeleteApplicationRequest$ === "object");
assert(typeof DeleteApplicationResponse$ === "object");
assert(typeof DeleteDataSourceRequest$ === "object");
assert(typeof DeleteDataSourceResponse$ === "object");
assert(typeof DeleteDirectQueryDataSourceRequest$ === "object");
assert(typeof DeleteDomainRequest$ === "object");
assert(typeof DeleteDomainResponse$ === "object");
assert(typeof DeleteInboundConnectionRequest$ === "object");
assert(typeof DeleteInboundConnectionResponse$ === "object");
assert(typeof DeleteIndexRequest$ === "object");
assert(typeof DeleteIndexResponse$ === "object");
assert(typeof DeleteOutboundConnectionRequest$ === "object");
assert(typeof DeleteOutboundConnectionResponse$ === "object");
assert(typeof DeletePackageRequest$ === "object");
assert(typeof DeletePackageResponse$ === "object");
assert(typeof DeleteVpcEndpointRequest$ === "object");
assert(typeof DeleteVpcEndpointResponse$ === "object");
assert(typeof DescribeDomainAutoTunesRequest$ === "object");
assert(typeof DescribeDomainAutoTunesResponse$ === "object");
assert(typeof DescribeDomainChangeProgressRequest$ === "object");
assert(typeof DescribeDomainChangeProgressResponse$ === "object");
assert(typeof DescribeDomainConfigRequest$ === "object");
assert(typeof DescribeDomainConfigResponse$ === "object");
assert(typeof DescribeDomainHealthRequest$ === "object");
assert(typeof DescribeDomainHealthResponse$ === "object");
assert(typeof DescribeDomainNodesRequest$ === "object");
assert(typeof DescribeDomainNodesResponse$ === "object");
assert(typeof DescribeDomainRequest$ === "object");
assert(typeof DescribeDomainResponse$ === "object");
assert(typeof DescribeDomainsRequest$ === "object");
assert(typeof DescribeDomainsResponse$ === "object");
assert(typeof DescribeDryRunProgressRequest$ === "object");
assert(typeof DescribeDryRunProgressResponse$ === "object");
assert(typeof DescribeInboundConnectionsRequest$ === "object");
assert(typeof DescribeInboundConnectionsResponse$ === "object");
assert(typeof DescribeInstanceTypeLimitsRequest$ === "object");
assert(typeof DescribeInstanceTypeLimitsResponse$ === "object");
assert(typeof DescribeOutboundConnectionsRequest$ === "object");
assert(typeof DescribeOutboundConnectionsResponse$ === "object");
assert(typeof DescribePackagesFilter$ === "object");
assert(typeof DescribePackagesRequest$ === "object");
assert(typeof DescribePackagesResponse$ === "object");
assert(typeof DescribeReservedInstanceOfferingsRequest$ === "object");
assert(typeof DescribeReservedInstanceOfferingsResponse$ === "object");
assert(typeof DescribeReservedInstancesRequest$ === "object");
assert(typeof DescribeReservedInstancesResponse$ === "object");
assert(typeof DescribeVpcEndpointsRequest$ === "object");
assert(typeof DescribeVpcEndpointsResponse$ === "object");
assert(typeof DirectQueryDataSource$ === "object");
assert(typeof DirectQueryDataSourceType$ === "object");
assert(typeof DissociatePackageRequest$ === "object");
assert(typeof DissociatePackageResponse$ === "object");
assert(typeof DissociatePackagesRequest$ === "object");
assert(typeof DissociatePackagesResponse$ === "object");
assert(typeof DomainConfig$ === "object");
assert(typeof DomainEndpointOptions$ === "object");
assert(typeof DomainEndpointOptionsStatus$ === "object");
assert(typeof DomainInfo$ === "object");
assert(typeof DomainInformationContainer$ === "object");
assert(typeof DomainMaintenanceDetails$ === "object");
assert(typeof DomainNodesStatus$ === "object");
assert(typeof DomainPackageDetails$ === "object");
assert(typeof DomainStatus$ === "object");
assert(typeof DryRunProgressStatus$ === "object");
assert(typeof DryRunResults$ === "object");
assert(typeof Duration$ === "object");
assert(typeof EBSOptions$ === "object");
assert(typeof EBSOptionsStatus$ === "object");
assert(typeof EncryptionAtRestOptions$ === "object");
assert(typeof EncryptionAtRestOptionsStatus$ === "object");
assert(typeof EnvironmentInfo$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof Filter$ === "object");
assert(typeof GetApplicationRequest$ === "object");
assert(typeof GetApplicationResponse$ === "object");
assert(typeof GetCompatibleVersionsRequest$ === "object");
assert(typeof GetCompatibleVersionsResponse$ === "object");
assert(typeof GetDataSourceRequest$ === "object");
assert(typeof GetDataSourceResponse$ === "object");
assert(typeof GetDefaultApplicationSettingRequest$ === "object");
assert(typeof GetDefaultApplicationSettingResponse$ === "object");
assert(typeof GetDirectQueryDataSourceRequest$ === "object");
assert(typeof GetDirectQueryDataSourceResponse$ === "object");
assert(typeof GetDomainMaintenanceStatusRequest$ === "object");
assert(typeof GetDomainMaintenanceStatusResponse$ === "object");
assert(typeof GetIndexRequest$ === "object");
assert(typeof GetIndexResponse$ === "object");
assert(typeof GetPackageVersionHistoryRequest$ === "object");
assert(typeof GetPackageVersionHistoryResponse$ === "object");
assert(typeof GetUpgradeHistoryRequest$ === "object");
assert(typeof GetUpgradeHistoryResponse$ === "object");
assert(typeof GetUpgradeStatusRequest$ === "object");
assert(typeof GetUpgradeStatusResponse$ === "object");
assert(typeof IAMFederationOptionsInput$ === "object");
assert(typeof IAMFederationOptionsOutput$ === "object");
assert(typeof IamIdentityCenterOptions$ === "object");
assert(typeof IamIdentityCenterOptionsInput$ === "object");
assert(typeof IdentityCenterOptions$ === "object");
assert(typeof IdentityCenterOptionsInput$ === "object");
assert(typeof IdentityCenterOptionsStatus$ === "object");
assert(typeof InboundConnection$ === "object");
assert(typeof InboundConnectionStatus$ === "object");
assert(typeof InstanceCountLimits$ === "object");
assert(typeof InstanceLimits$ === "object");
assert(typeof InstanceTypeDetails$ === "object");
assert(typeof IPAddressTypeStatus$ === "object");
assert(typeof JWTOptionsInput$ === "object");
assert(typeof JWTOptionsOutput$ === "object");
assert(typeof KeyStoreAccessOption$ === "object");
assert(typeof Limits$ === "object");
assert(typeof ListApplicationsRequest$ === "object");
assert(typeof ListApplicationsResponse$ === "object");
assert(typeof ListDataSourcesRequest$ === "object");
assert(typeof ListDataSourcesResponse$ === "object");
assert(typeof ListDirectQueryDataSourcesRequest$ === "object");
assert(typeof ListDirectQueryDataSourcesResponse$ === "object");
assert(typeof ListDomainMaintenancesRequest$ === "object");
assert(typeof ListDomainMaintenancesResponse$ === "object");
assert(typeof ListDomainNamesRequest$ === "object");
assert(typeof ListDomainNamesResponse$ === "object");
assert(typeof ListDomainsForPackageRequest$ === "object");
assert(typeof ListDomainsForPackageResponse$ === "object");
assert(typeof ListInstanceTypeDetailsRequest$ === "object");
assert(typeof ListInstanceTypeDetailsResponse$ === "object");
assert(typeof ListPackagesForDomainRequest$ === "object");
assert(typeof ListPackagesForDomainResponse$ === "object");
assert(typeof ListScheduledActionsRequest$ === "object");
assert(typeof ListScheduledActionsResponse$ === "object");
assert(typeof ListTagsRequest$ === "object");
assert(typeof ListTagsResponse$ === "object");
assert(typeof ListVersionsRequest$ === "object");
assert(typeof ListVersionsResponse$ === "object");
assert(typeof ListVpcEndpointAccessRequest$ === "object");
assert(typeof ListVpcEndpointAccessResponse$ === "object");
assert(typeof ListVpcEndpointsForDomainRequest$ === "object");
assert(typeof ListVpcEndpointsForDomainResponse$ === "object");
assert(typeof ListVpcEndpointsRequest$ === "object");
assert(typeof ListVpcEndpointsResponse$ === "object");
assert(typeof LogPublishingOption$ === "object");
assert(typeof LogPublishingOptionsStatus$ === "object");
assert(typeof MasterUserOptions$ === "object");
assert(typeof ModifyingProperties$ === "object");
assert(typeof NaturalLanguageQueryGenerationOptionsInput$ === "object");
assert(typeof NaturalLanguageQueryGenerationOptionsOutput$ === "object");
assert(typeof NodeConfig$ === "object");
assert(typeof NodeOption$ === "object");
assert(typeof NodeToNodeEncryptionOptions$ === "object");
assert(typeof NodeToNodeEncryptionOptionsStatus$ === "object");
assert(typeof OffPeakWindow$ === "object");
assert(typeof OffPeakWindowOptions$ === "object");
assert(typeof OffPeakWindowOptionsStatus$ === "object");
assert(typeof OptionStatus$ === "object");
assert(typeof OutboundConnection$ === "object");
assert(typeof OutboundConnectionStatus$ === "object");
assert(typeof PackageAssociationConfiguration$ === "object");
assert(typeof PackageConfiguration$ === "object");
assert(typeof PackageDetails$ === "object");
assert(typeof PackageDetailsForAssociation$ === "object");
assert(typeof PackageEncryptionOptions$ === "object");
assert(typeof PackageSource$ === "object");
assert(typeof PackageVendingOptions$ === "object");
assert(typeof PackageVersionHistory$ === "object");
assert(typeof PluginProperties$ === "object");
assert(typeof PurchaseReservedInstanceOfferingRequest$ === "object");
assert(typeof PurchaseReservedInstanceOfferingResponse$ === "object");
assert(typeof PutDefaultApplicationSettingRequest$ === "object");
assert(typeof PutDefaultApplicationSettingResponse$ === "object");
assert(typeof RecurringCharge$ === "object");
assert(typeof RejectInboundConnectionRequest$ === "object");
assert(typeof RejectInboundConnectionResponse$ === "object");
assert(typeof RemoveTagsRequest$ === "object");
assert(typeof ReservedInstance$ === "object");
assert(typeof ReservedInstanceOffering$ === "object");
assert(typeof RevokeVpcEndpointAccessRequest$ === "object");
assert(typeof RevokeVpcEndpointAccessResponse$ === "object");
assert(typeof S3GlueDataCatalog$ === "object");
assert(typeof S3VectorsEngine$ === "object");
assert(typeof SAMLIdp$ === "object");
assert(typeof SAMLOptionsInput$ === "object");
assert(typeof SAMLOptionsOutput$ === "object");
assert(typeof ScheduledAction$ === "object");
assert(typeof ScheduledAutoTuneDetails$ === "object");
assert(typeof SecurityLakeDirectQueryDataSource$ === "object");
assert(typeof ServerlessVectorAcceleration$ === "object");
assert(typeof ServiceSoftwareOptions$ === "object");
assert(typeof SnapshotOptions$ === "object");
assert(typeof SnapshotOptionsStatus$ === "object");
assert(typeof SoftwareUpdateOptions$ === "object");
assert(typeof SoftwareUpdateOptionsStatus$ === "object");
assert(typeof StartDomainMaintenanceRequest$ === "object");
assert(typeof StartDomainMaintenanceResponse$ === "object");
assert(typeof StartServiceSoftwareUpdateRequest$ === "object");
assert(typeof StartServiceSoftwareUpdateResponse$ === "object");
assert(typeof StorageType$ === "object");
assert(typeof StorageTypeLimit$ === "object");
assert(typeof Tag$ === "object");
assert(typeof UpdateApplicationRequest$ === "object");
assert(typeof UpdateApplicationResponse$ === "object");
assert(typeof UpdateDataSourceRequest$ === "object");
assert(typeof UpdateDataSourceResponse$ === "object");
assert(typeof UpdateDirectQueryDataSourceRequest$ === "object");
assert(typeof UpdateDirectQueryDataSourceResponse$ === "object");
assert(typeof UpdateDomainConfigRequest$ === "object");
assert(typeof UpdateDomainConfigResponse$ === "object");
assert(typeof UpdateIndexRequest$ === "object");
assert(typeof UpdateIndexResponse$ === "object");
assert(typeof UpdatePackageRequest$ === "object");
assert(typeof UpdatePackageResponse$ === "object");
assert(typeof UpdatePackageScopeRequest$ === "object");
assert(typeof UpdatePackageScopeResponse$ === "object");
assert(typeof UpdateScheduledActionRequest$ === "object");
assert(typeof UpdateScheduledActionResponse$ === "object");
assert(typeof UpdateVpcEndpointRequest$ === "object");
assert(typeof UpdateVpcEndpointResponse$ === "object");
assert(typeof UpgradeDomainRequest$ === "object");
assert(typeof UpgradeDomainResponse$ === "object");
assert(typeof UpgradeHistory$ === "object");
assert(typeof UpgradeStepItem$ === "object");
assert(typeof ValidationFailure$ === "object");
assert(typeof VersionStatus$ === "object");
assert(typeof VPCDerivedInfo$ === "object");
assert(typeof VPCDerivedInfoStatus$ === "object");
assert(typeof VpcEndpoint$ === "object");
assert(typeof VpcEndpointError$ === "object");
assert(typeof VpcEndpointSummary$ === "object");
assert(typeof VPCOptions$ === "object");
assert(typeof WindowStartTime$ === "object");
assert(typeof ZoneAwarenessConfig$ === "object");
// enums
assert(typeof ActionSeverity === "object");
assert(typeof ActionStatus === "object");
assert(typeof ActionType === "object");
assert(typeof AppConfigType === "object");
assert(typeof ApplicationStatus === "object");
assert(typeof AutoTuneDesiredState === "object");
assert(typeof AutoTuneState === "object");
assert(typeof AutoTuneType === "object");
assert(typeof AWSServicePrincipal === "object");
assert(typeof ConfigChangeStatus === "object");
assert(typeof ConnectionMode === "object");
assert(typeof DataSourceStatus === "object");
assert(typeof DeploymentStatus === "object");
assert(typeof DescribePackagesFilterName === "object");
assert(typeof DomainHealth === "object");
assert(typeof DomainPackageStatus === "object");
assert(typeof DomainProcessingStatusType === "object");
assert(typeof DomainState === "object");
assert(typeof DryRunMode === "object");
assert(typeof EngineType === "object");
assert(typeof InboundConnectionStatusCode === "object");
assert(typeof IndexStatus === "object");
assert(typeof InitiatedBy === "object");
assert(typeof IPAddressType === "object");
assert(typeof LogType === "object");
assert(typeof MaintenanceStatus === "object");
assert(typeof MaintenanceType === "object");
assert(typeof MasterNodeStatus === "object");
assert(typeof NaturalLanguageQueryGenerationCurrentState === "object");
assert(typeof NaturalLanguageQueryGenerationDesiredState === "object");
assert(typeof NodeOptionsNodeType === "object");
assert(typeof NodeStatus === "object");
assert(typeof NodeType === "object");
assert(typeof OpenSearchPartitionInstanceType === "object");
assert(typeof OpenSearchWarmPartitionInstanceType === "object");
assert(typeof OptionState === "object");
assert(typeof OutboundConnectionStatusCode === "object");
assert(typeof OverallChangeStatus === "object");
assert(typeof PackageScopeOperationEnum === "object");
assert(typeof PackageStatus === "object");
assert(typeof PackageType === "object");
assert(typeof PrincipalType === "object");
assert(typeof PropertyValueType === "object");
assert(typeof RequirementLevel === "object");
assert(typeof ReservedInstancePaymentOption === "object");
assert(typeof RolesKeyIdCOption === "object");
assert(typeof RollbackOnDisable === "object");
assert(typeof ScheduleAt === "object");
assert(typeof ScheduledAutoTuneActionType === "object");
assert(typeof ScheduledAutoTuneSeverityType === "object");
assert(typeof ScheduledBy === "object");
assert(typeof SkipUnavailableStatus === "object");
assert(typeof SubjectKeyIdCOption === "object");
assert(typeof TimeUnit === "object");
assert(typeof TLSSecurityPolicy === "object");
assert(typeof UpgradeStatus === "object");
assert(typeof UpgradeStep === "object");
assert(typeof VolumeType === "object");
assert(typeof VpcEndpointErrorCode === "object");
assert(typeof VpcEndpointStatus === "object");
assert(typeof ZoneStatus === "object");
// errors
assert(AccessDeniedException.prototype instanceof OpenSearchServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(BaseException.prototype instanceof OpenSearchServiceException);
assert(typeof BaseException$ === "object");
assert(ConflictException.prototype instanceof OpenSearchServiceException);
assert(typeof ConflictException$ === "object");
assert(DependencyFailureException.prototype instanceof OpenSearchServiceException);
assert(typeof DependencyFailureException$ === "object");
assert(DisabledOperationException.prototype instanceof OpenSearchServiceException);
assert(typeof DisabledOperationException$ === "object");
assert(InternalException.prototype instanceof OpenSearchServiceException);
assert(typeof InternalException$ === "object");
assert(InvalidPaginationTokenException.prototype instanceof OpenSearchServiceException);
assert(typeof InvalidPaginationTokenException$ === "object");
assert(InvalidTypeException.prototype instanceof OpenSearchServiceException);
assert(typeof InvalidTypeException$ === "object");
assert(LimitExceededException.prototype instanceof OpenSearchServiceException);
assert(typeof LimitExceededException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof OpenSearchServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OpenSearchServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(SlotNotAvailableException.prototype instanceof OpenSearchServiceException);
assert(typeof SlotNotAvailableException$ === "object");
assert(ThrottlingException.prototype instanceof OpenSearchServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof OpenSearchServiceException);
assert(typeof ValidationException$ === "object");
assert(OpenSearchServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeDomainAutoTunes === "function");
assert(typeof paginateDescribeInboundConnections === "function");
assert(typeof paginateDescribeOutboundConnections === "function");
assert(typeof paginateDescribePackages === "function");
assert(typeof paginateDescribeReservedInstanceOfferings === "function");
assert(typeof paginateDescribeReservedInstances === "function");
assert(typeof paginateGetPackageVersionHistory === "function");
assert(typeof paginateGetUpgradeHistory === "function");
assert(typeof paginateListApplications === "function");
assert(typeof paginateListDomainMaintenances === "function");
assert(typeof paginateListDomainsForPackage === "function");
assert(typeof paginateListInstanceTypeDetails === "function");
assert(typeof paginateListPackagesForDomain === "function");
assert(typeof paginateListScheduledActions === "function");
assert(typeof paginateListVersions === "function");
console.log(`OpenSearch index test passed.`);
