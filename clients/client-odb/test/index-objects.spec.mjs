import {
  AcceptMarketplaceRegistration$,
  AcceptMarketplaceRegistrationCommand,
  AcceptMarketplaceRegistrationInput$,
  AcceptMarketplaceRegistrationOutput$,
  Access,
  AccessDeniedException,
  AccessDeniedException$,
  AdminPasswordSource,
  AdminPasswordSourceConfiguration$,
  AdminPasswordSourceConfigurationInput$,
  AdminPasswordSourceSummary$,
  AssociateIamRoleToResource$,
  AssociateIamRoleToResourceCommand,
  AssociateIamRoleToResourceInput$,
  AssociateIamRoleToResourceOutput$,
  AutonomousDatabase$,
  AutonomousDatabaseApex$,
  AutonomousDatabaseBackup$,
  AutonomousDatabaseBackupStatus,
  AutonomousDatabaseBackupSummary$,
  AutonomousDatabaseBackupType,
  AutonomousDatabaseCharacterSetSummary$,
  AutonomousDatabaseConnectionStrings$,
  AutonomousDatabaseConnectionUrls$,
  AutonomousDatabasePeerSummary$,
  AutonomousDatabaseResourceStatus,
  AutonomousDatabaseSummary$,
  AutonomousDatabaseVersionSummary$,
  AutonomousDatabaseWalletDetails$,
  AutonomousDatabaseWalletStatus,
  AutonomousMaintenanceScheduleType,
  AutonomousVirtualMachineSummary$,
  AwsEncryptionKeyConfiguration$,
  AwsEncryptionKeyConfigurationInput$,
  CharacterSetType,
  CloneToRefreshableConfiguration$,
  CloneType,
  CloudAutonomousVmCluster$,
  CloudAutonomousVmClusterResourceDetails$,
  CloudAutonomousVmClusterSummary$,
  CloudExadataInfrastructure$,
  CloudExadataInfrastructureSummary$,
  CloudExadataInfrastructureUnallocatedResources$,
  CloudVmCluster$,
  CloudVmClusterSummary$,
  ComputeModel,
  ConflictException,
  ConflictException$,
  CreateAutonomousDatabase$,
  CreateAutonomousDatabaseBackup$,
  CreateAutonomousDatabaseBackupCommand,
  CreateAutonomousDatabaseBackupInput$,
  CreateAutonomousDatabaseBackupOutput$,
  CreateAutonomousDatabaseCommand,
  CreateAutonomousDatabaseInput$,
  CreateAutonomousDatabaseOutput$,
  CreateAutonomousDatabaseWallet$,
  CreateAutonomousDatabaseWalletCommand,
  CreateAutonomousDatabaseWalletInput$,
  CreateAutonomousDatabaseWalletOutput$,
  CreateCloudAutonomousVmCluster$,
  CreateCloudAutonomousVmClusterCommand,
  CreateCloudAutonomousVmClusterInput$,
  CreateCloudAutonomousVmClusterOutput$,
  CreateCloudExadataInfrastructure$,
  CreateCloudExadataInfrastructureCommand,
  CreateCloudExadataInfrastructureInput$,
  CreateCloudExadataInfrastructureOutput$,
  CreateCloudVmCluster$,
  CreateCloudVmClusterCommand,
  CreateCloudVmClusterInput$,
  CreateCloudVmClusterOutput$,
  CreateOdbNetwork$,
  CreateOdbNetworkCommand,
  CreateOdbNetworkInput$,
  CreateOdbNetworkOutput$,
  CreateOdbPeeringConnection$,
  CreateOdbPeeringConnectionCommand,
  CreateOdbPeeringConnectionInput$,
  CreateOdbPeeringConnectionOutput$,
  CrossRegionDataGuardConfiguration$,
  CrossRegionDisasterRecoveryConfiguration$,
  CrossRegionS3RestoreSourcesAccess$,
  CustomerContact$,
  CustomerManagedAwsSecretConfiguration$,
  CustomerManagedAwsSecretConfigurationInput$,
  DatabaseCloneConfiguration$,
  DatabaseConnectionStringProfile$,
  DatabaseEdition,
  DatabaseManagementStatus,
  DatabaseStandbySummary$,
  DatabaseTool$,
  DatabaseType,
  DataCollectionOptions$,
  DataGuardRole,
  DataSafeStatus,
  DayOfWeek$,
  DayOfWeekName,
  DbIormConfig$,
  DbNode$,
  DbNodeMaintenanceType,
  DbNodeResourceStatus,
  DbNodeSummary$,
  DbServer$,
  DbServerPatchingDetails$,
  DbServerPatchingStatus,
  DbServerSummary$,
  DbSystemShapeSummary$,
  DbWorkload,
  DeleteAutonomousDatabase$,
  DeleteAutonomousDatabaseBackup$,
  DeleteAutonomousDatabaseBackupCommand,
  DeleteAutonomousDatabaseBackupInput$,
  DeleteAutonomousDatabaseBackupOutput$,
  DeleteAutonomousDatabaseCommand,
  DeleteAutonomousDatabaseInput$,
  DeleteAutonomousDatabaseOutput$,
  DeleteCloudAutonomousVmCluster$,
  DeleteCloudAutonomousVmClusterCommand,
  DeleteCloudAutonomousVmClusterInput$,
  DeleteCloudAutonomousVmClusterOutput$,
  DeleteCloudExadataInfrastructure$,
  DeleteCloudExadataInfrastructureCommand,
  DeleteCloudExadataInfrastructureInput$,
  DeleteCloudExadataInfrastructureOutput$,
  DeleteCloudVmCluster$,
  DeleteCloudVmClusterCommand,
  DeleteCloudVmClusterInput$,
  DeleteCloudVmClusterOutput$,
  DeleteOdbNetwork$,
  DeleteOdbNetworkCommand,
  DeleteOdbNetworkInput$,
  DeleteOdbNetworkOutput$,
  DeleteOdbPeeringConnection$,
  DeleteOdbPeeringConnectionCommand,
  DeleteOdbPeeringConnectionInput$,
  DeleteOdbPeeringConnectionOutput$,
  DisassociateIamRoleFromResource$,
  DisassociateIamRoleFromResourceCommand,
  DisassociateIamRoleFromResourceInput$,
  DisassociateIamRoleFromResourceOutput$,
  DisasterRecoveryConfiguration$,
  DisasterRecoveryType,
  DiskRedundancy,
  EncryptionKeyConfiguration$,
  EncryptionKeyConfigurationInput$,
  EncryptionKeyProvider,
  EncryptionKeyProviderInput,
  EncryptionSummary$,
  ExadataIormConfig$,
  ExternalIdType,
  FailoverAutonomousDatabase$,
  FailoverAutonomousDatabaseCommand,
  FailoverAutonomousDatabaseInput$,
  FailoverAutonomousDatabaseOutput$,
  GetAutonomousDatabase$,
  GetAutonomousDatabaseBackup$,
  GetAutonomousDatabaseBackupCommand,
  GetAutonomousDatabaseBackupInput$,
  GetAutonomousDatabaseBackupOutput$,
  GetAutonomousDatabaseCommand,
  GetAutonomousDatabaseInput$,
  GetAutonomousDatabaseOutput$,
  GetAutonomousDatabaseWalletDetails$,
  GetAutonomousDatabaseWalletDetailsCommand,
  GetAutonomousDatabaseWalletDetailsInput$,
  GetAutonomousDatabaseWalletDetailsOutput$,
  GetCloudAutonomousVmCluster$,
  GetCloudAutonomousVmClusterCommand,
  GetCloudAutonomousVmClusterInput$,
  GetCloudAutonomousVmClusterOutput$,
  GetCloudExadataInfrastructure$,
  GetCloudExadataInfrastructureCommand,
  GetCloudExadataInfrastructureInput$,
  GetCloudExadataInfrastructureOutput$,
  GetCloudExadataInfrastructureUnallocatedResources$,
  GetCloudExadataInfrastructureUnallocatedResourcesCommand,
  GetCloudExadataInfrastructureUnallocatedResourcesInput$,
  GetCloudExadataInfrastructureUnallocatedResourcesOutput$,
  GetCloudVmCluster$,
  GetCloudVmClusterCommand,
  GetCloudVmClusterInput$,
  GetCloudVmClusterOutput$,
  GetDbNode$,
  GetDbNodeCommand,
  GetDbNodeInput$,
  GetDbNodeOutput$,
  GetDbServer$,
  GetDbServerCommand,
  GetDbServerInput$,
  GetDbServerOutput$,
  GetOciOnboardingStatus$,
  GetOciOnboardingStatusCommand,
  GetOciOnboardingStatusInput$,
  GetOciOnboardingStatusOutput$,
  GetOdbNetwork$,
  GetOdbNetworkCommand,
  GetOdbNetworkInput$,
  GetOdbNetworkOutput$,
  GetOdbPeeringConnection$,
  GetOdbPeeringConnectionCommand,
  GetOdbPeeringConnectionInput$,
  GetOdbPeeringConnectionOutput$,
  GiVersionSummary$,
  IamRole$,
  IamRoleStatus,
  InitializeService$,
  InitializeServiceCommand,
  InitializeServiceInput$,
  InitializeServiceOutput$,
  InternalServerException,
  InternalServerException$,
  IormLifecycleState,
  KmsAccess$,
  LicenseModel,
  ListAutonomousDatabaseBackups$,
  ListAutonomousDatabaseBackupsCommand,
  ListAutonomousDatabaseBackupsInput$,
  ListAutonomousDatabaseBackupsOutput$,
  ListAutonomousDatabaseCharacterSets$,
  ListAutonomousDatabaseCharacterSetsCommand,
  ListAutonomousDatabaseCharacterSetsInput$,
  ListAutonomousDatabaseCharacterSetsOutput$,
  ListAutonomousDatabaseClones$,
  ListAutonomousDatabaseClonesCommand,
  ListAutonomousDatabaseClonesInput$,
  ListAutonomousDatabaseClonesOutput$,
  ListAutonomousDatabasePeers$,
  ListAutonomousDatabasePeersCommand,
  ListAutonomousDatabasePeersInput$,
  ListAutonomousDatabasePeersOutput$,
  ListAutonomousDatabases$,
  ListAutonomousDatabasesCommand,
  ListAutonomousDatabasesInput$,
  ListAutonomousDatabasesOutput$,
  ListAutonomousDatabaseVersions$,
  ListAutonomousDatabaseVersionsCommand,
  ListAutonomousDatabaseVersionsInput$,
  ListAutonomousDatabaseVersionsOutput$,
  ListAutonomousVirtualMachines$,
  ListAutonomousVirtualMachinesCommand,
  ListAutonomousVirtualMachinesInput$,
  ListAutonomousVirtualMachinesOutput$,
  ListCloudAutonomousVmClusters$,
  ListCloudAutonomousVmClustersCommand,
  ListCloudAutonomousVmClustersInput$,
  ListCloudAutonomousVmClustersOutput$,
  ListCloudExadataInfrastructures$,
  ListCloudExadataInfrastructuresCommand,
  ListCloudExadataInfrastructuresInput$,
  ListCloudExadataInfrastructuresOutput$,
  ListCloudVmClusters$,
  ListCloudVmClustersCommand,
  ListCloudVmClustersInput$,
  ListCloudVmClustersOutput$,
  ListDbNodes$,
  ListDbNodesCommand,
  ListDbNodesInput$,
  ListDbNodesOutput$,
  ListDbServers$,
  ListDbServersCommand,
  ListDbServersInput$,
  ListDbServersOutput$,
  ListDbSystemShapes$,
  ListDbSystemShapesCommand,
  ListDbSystemShapesInput$,
  ListDbSystemShapesOutput$,
  ListGiVersions$,
  ListGiVersionsCommand,
  ListGiVersionsInput$,
  ListGiVersionsOutput$,
  ListOdbNetworks$,
  ListOdbNetworksCommand,
  ListOdbNetworksInput$,
  ListOdbNetworksOutput$,
  ListOdbPeeringConnections$,
  ListOdbPeeringConnectionsCommand,
  ListOdbPeeringConnectionsInput$,
  ListOdbPeeringConnectionsOutput$,
  ListSystemVersions$,
  ListSystemVersionsCommand,
  ListSystemVersionsInput$,
  ListSystemVersionsOutput$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  LongTermBackupSchedule$,
  MaintenanceWindow$,
  ManagedResourceStatus,
  ManagedS3BackupAccess$,
  ManagedServices$,
  Month$,
  MonthName,
  NetServicesArchitecture,
  Objective,
  OciAwsIntegration,
  OciDnsForwardingConfig$,
  OciEncryptionKeyConfiguration$,
  OciIamRole$,
  OciIamRoleStatus,
  OciIdentityDomain$,
  OciOnboardingStatus,
  Odb,
  OdbClient,
  OdbNetwork$,
  OdbNetworkSummary$,
  OdbPeeringConnection$,
  OdbPeeringConnectionSummary$,
  OdbServiceException,
  OkvEncryptionKeyConfiguration$,
  OpenMode,
  OperationsInsightsStatus,
  paginateListAutonomousDatabaseBackups,
  paginateListAutonomousDatabaseCharacterSets,
  paginateListAutonomousDatabaseClones,
  paginateListAutonomousDatabasePeers,
  paginateListAutonomousDatabases,
  paginateListAutonomousDatabaseVersions,
  paginateListAutonomousVirtualMachines,
  paginateListCloudAutonomousVmClusters,
  paginateListCloudExadataInfrastructures,
  paginateListCloudVmClusters,
  paginateListDbNodes,
  paginateListDbServers,
  paginateListDbSystemShapes,
  paginateListGiVersions,
  paginateListOdbNetworks,
  paginateListOdbPeeringConnections,
  paginateListSystemVersions,
  PatchingModeType,
  PermissionLevel,
  PointInTimeRestoreConfiguration$,
  PreferenceType,
  RebootAutonomousDatabase$,
  RebootAutonomousDatabaseCommand,
  RebootAutonomousDatabaseInput$,
  RebootAutonomousDatabaseOutput$,
  RebootDbNode$,
  RebootDbNodeCommand,
  RebootDbNodeInput$,
  RebootDbNodeOutput$,
  RefreshableMode,
  RefreshableStatus,
  RepeatCadence,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourcePoolSummary$,
  ResourceStatus,
  RestoreAutonomousDatabase$,
  RestoreAutonomousDatabaseCommand,
  RestoreAutonomousDatabaseInput$,
  RestoreAutonomousDatabaseOutput$,
  RestoreFromBackupConfiguration$,
  S3Access$,
  ScheduledOperationDetails$,
  ServiceNetworkEndpoint$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  ShapeType,
  ShrinkAutonomousDatabase$,
  ShrinkAutonomousDatabaseCommand,
  ShrinkAutonomousDatabaseInput$,
  ShrinkAutonomousDatabaseOutput$,
  SourceConfiguration$,
  SourceType,
  StandbyAllowlistedIpsSource,
  StartAutonomousDatabase$,
  StartAutonomousDatabaseCommand,
  StartAutonomousDatabaseInput$,
  StartAutonomousDatabaseOutput$,
  StartDbNode$,
  StartDbNodeCommand,
  StartDbNodeInput$,
  StartDbNodeOutput$,
  StopAutonomousDatabase$,
  StopAutonomousDatabaseCommand,
  StopAutonomousDatabaseInput$,
  StopAutonomousDatabaseOutput$,
  StopDbNode$,
  StopDbNodeCommand,
  StopDbNodeInput$,
  StopDbNodeOutput$,
  StsAccess$,
  SubscriptionError$,
  SupportedAwsIntegration,
  SwitchoverAutonomousDatabase$,
  SwitchoverAutonomousDatabaseCommand,
  SwitchoverAutonomousDatabaseInput$,
  SwitchoverAutonomousDatabaseOutput$,
  SystemVersionSummary$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  ThrottlingException,
  ThrottlingException$,
  TransportableTablespace$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAutonomousDatabase$,
  UpdateAutonomousDatabaseBackup$,
  UpdateAutonomousDatabaseBackupCommand,
  UpdateAutonomousDatabaseBackupInput$,
  UpdateAutonomousDatabaseBackupOutput$,
  UpdateAutonomousDatabaseCommand,
  UpdateAutonomousDatabaseInput$,
  UpdateAutonomousDatabaseOutput$,
  UpdateCloudExadataInfrastructure$,
  UpdateCloudExadataInfrastructureCommand,
  UpdateCloudExadataInfrastructureInput$,
  UpdateCloudExadataInfrastructureOutput$,
  UpdateOdbNetwork$,
  UpdateOdbNetworkCommand,
  UpdateOdbNetworkInput$,
  UpdateOdbNetworkOutput$,
  UpdateOdbPeeringConnection$,
  UpdateOdbPeeringConnectionCommand,
  UpdateOdbPeeringConnectionInput$,
  UpdateOdbPeeringConnectionOutput$,
  ValidationException,
  ValidationException$,
  ValidationExceptionField$,
  ValidationExceptionReason,
  VpcEndpointType,
  WalletPasswordSource,
  WalletPasswordSourceConfiguration$,
  WalletPasswordSourceConfigurationInput$,
  WalletPasswordSourceSummary$,
  WalletType,
  ZeroEtlAccess$,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof OdbClient === "function");
assert(typeof Odb === "function");
// commands
assert(typeof AcceptMarketplaceRegistrationCommand === "function");
assert(typeof AcceptMarketplaceRegistration$ === "object");
assert(typeof AssociateIamRoleToResourceCommand === "function");
assert(typeof AssociateIamRoleToResource$ === "object");
assert(typeof CreateAutonomousDatabaseCommand === "function");
assert(typeof CreateAutonomousDatabase$ === "object");
assert(typeof CreateAutonomousDatabaseBackupCommand === "function");
assert(typeof CreateAutonomousDatabaseBackup$ === "object");
assert(typeof CreateAutonomousDatabaseWalletCommand === "function");
assert(typeof CreateAutonomousDatabaseWallet$ === "object");
assert(typeof CreateCloudAutonomousVmClusterCommand === "function");
assert(typeof CreateCloudAutonomousVmCluster$ === "object");
assert(typeof CreateCloudExadataInfrastructureCommand === "function");
assert(typeof CreateCloudExadataInfrastructure$ === "object");
assert(typeof CreateCloudVmClusterCommand === "function");
assert(typeof CreateCloudVmCluster$ === "object");
assert(typeof CreateOdbNetworkCommand === "function");
assert(typeof CreateOdbNetwork$ === "object");
assert(typeof CreateOdbPeeringConnectionCommand === "function");
assert(typeof CreateOdbPeeringConnection$ === "object");
assert(typeof DeleteAutonomousDatabaseCommand === "function");
assert(typeof DeleteAutonomousDatabase$ === "object");
assert(typeof DeleteAutonomousDatabaseBackupCommand === "function");
assert(typeof DeleteAutonomousDatabaseBackup$ === "object");
assert(typeof DeleteCloudAutonomousVmClusterCommand === "function");
assert(typeof DeleteCloudAutonomousVmCluster$ === "object");
assert(typeof DeleteCloudExadataInfrastructureCommand === "function");
assert(typeof DeleteCloudExadataInfrastructure$ === "object");
assert(typeof DeleteCloudVmClusterCommand === "function");
assert(typeof DeleteCloudVmCluster$ === "object");
assert(typeof DeleteOdbNetworkCommand === "function");
assert(typeof DeleteOdbNetwork$ === "object");
assert(typeof DeleteOdbPeeringConnectionCommand === "function");
assert(typeof DeleteOdbPeeringConnection$ === "object");
assert(typeof DisassociateIamRoleFromResourceCommand === "function");
assert(typeof DisassociateIamRoleFromResource$ === "object");
assert(typeof FailoverAutonomousDatabaseCommand === "function");
assert(typeof FailoverAutonomousDatabase$ === "object");
assert(typeof GetAutonomousDatabaseCommand === "function");
assert(typeof GetAutonomousDatabase$ === "object");
assert(typeof GetAutonomousDatabaseBackupCommand === "function");
assert(typeof GetAutonomousDatabaseBackup$ === "object");
assert(typeof GetAutonomousDatabaseWalletDetailsCommand === "function");
assert(typeof GetAutonomousDatabaseWalletDetails$ === "object");
assert(typeof GetCloudAutonomousVmClusterCommand === "function");
assert(typeof GetCloudAutonomousVmCluster$ === "object");
assert(typeof GetCloudExadataInfrastructureCommand === "function");
assert(typeof GetCloudExadataInfrastructure$ === "object");
assert(typeof GetCloudExadataInfrastructureUnallocatedResourcesCommand === "function");
assert(typeof GetCloudExadataInfrastructureUnallocatedResources$ === "object");
assert(typeof GetCloudVmClusterCommand === "function");
assert(typeof GetCloudVmCluster$ === "object");
assert(typeof GetDbNodeCommand === "function");
assert(typeof GetDbNode$ === "object");
assert(typeof GetDbServerCommand === "function");
assert(typeof GetDbServer$ === "object");
assert(typeof GetOciOnboardingStatusCommand === "function");
assert(typeof GetOciOnboardingStatus$ === "object");
assert(typeof GetOdbNetworkCommand === "function");
assert(typeof GetOdbNetwork$ === "object");
assert(typeof GetOdbPeeringConnectionCommand === "function");
assert(typeof GetOdbPeeringConnection$ === "object");
assert(typeof InitializeServiceCommand === "function");
assert(typeof InitializeService$ === "object");
assert(typeof ListAutonomousDatabaseBackupsCommand === "function");
assert(typeof ListAutonomousDatabaseBackups$ === "object");
assert(typeof ListAutonomousDatabaseCharacterSetsCommand === "function");
assert(typeof ListAutonomousDatabaseCharacterSets$ === "object");
assert(typeof ListAutonomousDatabaseClonesCommand === "function");
assert(typeof ListAutonomousDatabaseClones$ === "object");
assert(typeof ListAutonomousDatabasePeersCommand === "function");
assert(typeof ListAutonomousDatabasePeers$ === "object");
assert(typeof ListAutonomousDatabasesCommand === "function");
assert(typeof ListAutonomousDatabases$ === "object");
assert(typeof ListAutonomousDatabaseVersionsCommand === "function");
assert(typeof ListAutonomousDatabaseVersions$ === "object");
assert(typeof ListAutonomousVirtualMachinesCommand === "function");
assert(typeof ListAutonomousVirtualMachines$ === "object");
assert(typeof ListCloudAutonomousVmClustersCommand === "function");
assert(typeof ListCloudAutonomousVmClusters$ === "object");
assert(typeof ListCloudExadataInfrastructuresCommand === "function");
assert(typeof ListCloudExadataInfrastructures$ === "object");
assert(typeof ListCloudVmClustersCommand === "function");
assert(typeof ListCloudVmClusters$ === "object");
assert(typeof ListDbNodesCommand === "function");
assert(typeof ListDbNodes$ === "object");
assert(typeof ListDbServersCommand === "function");
assert(typeof ListDbServers$ === "object");
assert(typeof ListDbSystemShapesCommand === "function");
assert(typeof ListDbSystemShapes$ === "object");
assert(typeof ListGiVersionsCommand === "function");
assert(typeof ListGiVersions$ === "object");
assert(typeof ListOdbNetworksCommand === "function");
assert(typeof ListOdbNetworks$ === "object");
assert(typeof ListOdbPeeringConnectionsCommand === "function");
assert(typeof ListOdbPeeringConnections$ === "object");
assert(typeof ListSystemVersionsCommand === "function");
assert(typeof ListSystemVersions$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RebootAutonomousDatabaseCommand === "function");
assert(typeof RebootAutonomousDatabase$ === "object");
assert(typeof RebootDbNodeCommand === "function");
assert(typeof RebootDbNode$ === "object");
assert(typeof RestoreAutonomousDatabaseCommand === "function");
assert(typeof RestoreAutonomousDatabase$ === "object");
assert(typeof ShrinkAutonomousDatabaseCommand === "function");
assert(typeof ShrinkAutonomousDatabase$ === "object");
assert(typeof StartAutonomousDatabaseCommand === "function");
assert(typeof StartAutonomousDatabase$ === "object");
assert(typeof StartDbNodeCommand === "function");
assert(typeof StartDbNode$ === "object");
assert(typeof StopAutonomousDatabaseCommand === "function");
assert(typeof StopAutonomousDatabase$ === "object");
assert(typeof StopDbNodeCommand === "function");
assert(typeof StopDbNode$ === "object");
assert(typeof SwitchoverAutonomousDatabaseCommand === "function");
assert(typeof SwitchoverAutonomousDatabase$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAutonomousDatabaseCommand === "function");
assert(typeof UpdateAutonomousDatabase$ === "object");
assert(typeof UpdateAutonomousDatabaseBackupCommand === "function");
assert(typeof UpdateAutonomousDatabaseBackup$ === "object");
assert(typeof UpdateCloudExadataInfrastructureCommand === "function");
assert(typeof UpdateCloudExadataInfrastructure$ === "object");
assert(typeof UpdateOdbNetworkCommand === "function");
assert(typeof UpdateOdbNetwork$ === "object");
assert(typeof UpdateOdbPeeringConnectionCommand === "function");
assert(typeof UpdateOdbPeeringConnection$ === "object");
// structural schemas
assert(typeof AcceptMarketplaceRegistrationInput$ === "object");
assert(typeof AcceptMarketplaceRegistrationOutput$ === "object");
assert(typeof AdminPasswordSourceConfiguration$ === "object");
assert(typeof AdminPasswordSourceConfigurationInput$ === "object");
assert(typeof AdminPasswordSourceSummary$ === "object");
assert(typeof AssociateIamRoleToResourceInput$ === "object");
assert(typeof AssociateIamRoleToResourceOutput$ === "object");
assert(typeof AutonomousDatabase$ === "object");
assert(typeof AutonomousDatabaseApex$ === "object");
assert(typeof AutonomousDatabaseBackup$ === "object");
assert(typeof AutonomousDatabaseBackupSummary$ === "object");
assert(typeof AutonomousDatabaseCharacterSetSummary$ === "object");
assert(typeof AutonomousDatabaseConnectionStrings$ === "object");
assert(typeof AutonomousDatabaseConnectionUrls$ === "object");
assert(typeof AutonomousDatabasePeerSummary$ === "object");
assert(typeof AutonomousDatabaseSummary$ === "object");
assert(typeof AutonomousDatabaseVersionSummary$ === "object");
assert(typeof AutonomousDatabaseWalletDetails$ === "object");
assert(typeof AutonomousVirtualMachineSummary$ === "object");
assert(typeof AwsEncryptionKeyConfiguration$ === "object");
assert(typeof AwsEncryptionKeyConfigurationInput$ === "object");
assert(typeof CloneToRefreshableConfiguration$ === "object");
assert(typeof CloudAutonomousVmCluster$ === "object");
assert(typeof CloudAutonomousVmClusterResourceDetails$ === "object");
assert(typeof CloudAutonomousVmClusterSummary$ === "object");
assert(typeof CloudExadataInfrastructure$ === "object");
assert(typeof CloudExadataInfrastructureSummary$ === "object");
assert(typeof CloudExadataInfrastructureUnallocatedResources$ === "object");
assert(typeof CloudVmCluster$ === "object");
assert(typeof CloudVmClusterSummary$ === "object");
assert(typeof CreateAutonomousDatabaseBackupInput$ === "object");
assert(typeof CreateAutonomousDatabaseBackupOutput$ === "object");
assert(typeof CreateAutonomousDatabaseInput$ === "object");
assert(typeof CreateAutonomousDatabaseOutput$ === "object");
assert(typeof CreateAutonomousDatabaseWalletInput$ === "object");
assert(typeof CreateAutonomousDatabaseWalletOutput$ === "object");
assert(typeof CreateCloudAutonomousVmClusterInput$ === "object");
assert(typeof CreateCloudAutonomousVmClusterOutput$ === "object");
assert(typeof CreateCloudExadataInfrastructureInput$ === "object");
assert(typeof CreateCloudExadataInfrastructureOutput$ === "object");
assert(typeof CreateCloudVmClusterInput$ === "object");
assert(typeof CreateCloudVmClusterOutput$ === "object");
assert(typeof CreateOdbNetworkInput$ === "object");
assert(typeof CreateOdbNetworkOutput$ === "object");
assert(typeof CreateOdbPeeringConnectionInput$ === "object");
assert(typeof CreateOdbPeeringConnectionOutput$ === "object");
assert(typeof CrossRegionDataGuardConfiguration$ === "object");
assert(typeof CrossRegionDisasterRecoveryConfiguration$ === "object");
assert(typeof CrossRegionS3RestoreSourcesAccess$ === "object");
assert(typeof CustomerContact$ === "object");
assert(typeof CustomerManagedAwsSecretConfiguration$ === "object");
assert(typeof CustomerManagedAwsSecretConfigurationInput$ === "object");
assert(typeof DatabaseCloneConfiguration$ === "object");
assert(typeof DatabaseConnectionStringProfile$ === "object");
assert(typeof DatabaseStandbySummary$ === "object");
assert(typeof DatabaseTool$ === "object");
assert(typeof DataCollectionOptions$ === "object");
assert(typeof DayOfWeek$ === "object");
assert(typeof DbIormConfig$ === "object");
assert(typeof DbNode$ === "object");
assert(typeof DbNodeSummary$ === "object");
assert(typeof DbServer$ === "object");
assert(typeof DbServerPatchingDetails$ === "object");
assert(typeof DbServerSummary$ === "object");
assert(typeof DbSystemShapeSummary$ === "object");
assert(typeof DeleteAutonomousDatabaseBackupInput$ === "object");
assert(typeof DeleteAutonomousDatabaseBackupOutput$ === "object");
assert(typeof DeleteAutonomousDatabaseInput$ === "object");
assert(typeof DeleteAutonomousDatabaseOutput$ === "object");
assert(typeof DeleteCloudAutonomousVmClusterInput$ === "object");
assert(typeof DeleteCloudAutonomousVmClusterOutput$ === "object");
assert(typeof DeleteCloudExadataInfrastructureInput$ === "object");
assert(typeof DeleteCloudExadataInfrastructureOutput$ === "object");
assert(typeof DeleteCloudVmClusterInput$ === "object");
assert(typeof DeleteCloudVmClusterOutput$ === "object");
assert(typeof DeleteOdbNetworkInput$ === "object");
assert(typeof DeleteOdbNetworkOutput$ === "object");
assert(typeof DeleteOdbPeeringConnectionInput$ === "object");
assert(typeof DeleteOdbPeeringConnectionOutput$ === "object");
assert(typeof DisassociateIamRoleFromResourceInput$ === "object");
assert(typeof DisassociateIamRoleFromResourceOutput$ === "object");
assert(typeof DisasterRecoveryConfiguration$ === "object");
assert(typeof EncryptionKeyConfiguration$ === "object");
assert(typeof EncryptionKeyConfigurationInput$ === "object");
assert(typeof EncryptionSummary$ === "object");
assert(typeof ExadataIormConfig$ === "object");
assert(typeof FailoverAutonomousDatabaseInput$ === "object");
assert(typeof FailoverAutonomousDatabaseOutput$ === "object");
assert(typeof GetAutonomousDatabaseBackupInput$ === "object");
assert(typeof GetAutonomousDatabaseBackupOutput$ === "object");
assert(typeof GetAutonomousDatabaseInput$ === "object");
assert(typeof GetAutonomousDatabaseOutput$ === "object");
assert(typeof GetAutonomousDatabaseWalletDetailsInput$ === "object");
assert(typeof GetAutonomousDatabaseWalletDetailsOutput$ === "object");
assert(typeof GetCloudAutonomousVmClusterInput$ === "object");
assert(typeof GetCloudAutonomousVmClusterOutput$ === "object");
assert(typeof GetCloudExadataInfrastructureInput$ === "object");
assert(typeof GetCloudExadataInfrastructureOutput$ === "object");
assert(typeof GetCloudExadataInfrastructureUnallocatedResourcesInput$ === "object");
assert(typeof GetCloudExadataInfrastructureUnallocatedResourcesOutput$ === "object");
assert(typeof GetCloudVmClusterInput$ === "object");
assert(typeof GetCloudVmClusterOutput$ === "object");
assert(typeof GetDbNodeInput$ === "object");
assert(typeof GetDbNodeOutput$ === "object");
assert(typeof GetDbServerInput$ === "object");
assert(typeof GetDbServerOutput$ === "object");
assert(typeof GetOciOnboardingStatusInput$ === "object");
assert(typeof GetOciOnboardingStatusOutput$ === "object");
assert(typeof GetOdbNetworkInput$ === "object");
assert(typeof GetOdbNetworkOutput$ === "object");
assert(typeof GetOdbPeeringConnectionInput$ === "object");
assert(typeof GetOdbPeeringConnectionOutput$ === "object");
assert(typeof GiVersionSummary$ === "object");
assert(typeof IamRole$ === "object");
assert(typeof InitializeServiceInput$ === "object");
assert(typeof InitializeServiceOutput$ === "object");
assert(typeof KmsAccess$ === "object");
assert(typeof ListAutonomousDatabaseBackupsInput$ === "object");
assert(typeof ListAutonomousDatabaseBackupsOutput$ === "object");
assert(typeof ListAutonomousDatabaseCharacterSetsInput$ === "object");
assert(typeof ListAutonomousDatabaseCharacterSetsOutput$ === "object");
assert(typeof ListAutonomousDatabaseClonesInput$ === "object");
assert(typeof ListAutonomousDatabaseClonesOutput$ === "object");
assert(typeof ListAutonomousDatabasePeersInput$ === "object");
assert(typeof ListAutonomousDatabasePeersOutput$ === "object");
assert(typeof ListAutonomousDatabasesInput$ === "object");
assert(typeof ListAutonomousDatabasesOutput$ === "object");
assert(typeof ListAutonomousDatabaseVersionsInput$ === "object");
assert(typeof ListAutonomousDatabaseVersionsOutput$ === "object");
assert(typeof ListAutonomousVirtualMachinesInput$ === "object");
assert(typeof ListAutonomousVirtualMachinesOutput$ === "object");
assert(typeof ListCloudAutonomousVmClustersInput$ === "object");
assert(typeof ListCloudAutonomousVmClustersOutput$ === "object");
assert(typeof ListCloudExadataInfrastructuresInput$ === "object");
assert(typeof ListCloudExadataInfrastructuresOutput$ === "object");
assert(typeof ListCloudVmClustersInput$ === "object");
assert(typeof ListCloudVmClustersOutput$ === "object");
assert(typeof ListDbNodesInput$ === "object");
assert(typeof ListDbNodesOutput$ === "object");
assert(typeof ListDbServersInput$ === "object");
assert(typeof ListDbServersOutput$ === "object");
assert(typeof ListDbSystemShapesInput$ === "object");
assert(typeof ListDbSystemShapesOutput$ === "object");
assert(typeof ListGiVersionsInput$ === "object");
assert(typeof ListGiVersionsOutput$ === "object");
assert(typeof ListOdbNetworksInput$ === "object");
assert(typeof ListOdbNetworksOutput$ === "object");
assert(typeof ListOdbPeeringConnectionsInput$ === "object");
assert(typeof ListOdbPeeringConnectionsOutput$ === "object");
assert(typeof ListSystemVersionsInput$ === "object");
assert(typeof ListSystemVersionsOutput$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof LongTermBackupSchedule$ === "object");
assert(typeof MaintenanceWindow$ === "object");
assert(typeof ManagedS3BackupAccess$ === "object");
assert(typeof ManagedServices$ === "object");
assert(typeof Month$ === "object");
assert(typeof OciDnsForwardingConfig$ === "object");
assert(typeof OciEncryptionKeyConfiguration$ === "object");
assert(typeof OciIamRole$ === "object");
assert(typeof OciIdentityDomain$ === "object");
assert(typeof OdbNetwork$ === "object");
assert(typeof OdbNetworkSummary$ === "object");
assert(typeof OdbPeeringConnection$ === "object");
assert(typeof OdbPeeringConnectionSummary$ === "object");
assert(typeof OkvEncryptionKeyConfiguration$ === "object");
assert(typeof PointInTimeRestoreConfiguration$ === "object");
assert(typeof RebootAutonomousDatabaseInput$ === "object");
assert(typeof RebootAutonomousDatabaseOutput$ === "object");
assert(typeof RebootDbNodeInput$ === "object");
assert(typeof RebootDbNodeOutput$ === "object");
assert(typeof ResourcePoolSummary$ === "object");
assert(typeof RestoreAutonomousDatabaseInput$ === "object");
assert(typeof RestoreAutonomousDatabaseOutput$ === "object");
assert(typeof RestoreFromBackupConfiguration$ === "object");
assert(typeof S3Access$ === "object");
assert(typeof ScheduledOperationDetails$ === "object");
assert(typeof ServiceNetworkEndpoint$ === "object");
assert(typeof ShrinkAutonomousDatabaseInput$ === "object");
assert(typeof ShrinkAutonomousDatabaseOutput$ === "object");
assert(typeof SourceConfiguration$ === "object");
assert(typeof StartAutonomousDatabaseInput$ === "object");
assert(typeof StartAutonomousDatabaseOutput$ === "object");
assert(typeof StartDbNodeInput$ === "object");
assert(typeof StartDbNodeOutput$ === "object");
assert(typeof StopAutonomousDatabaseInput$ === "object");
assert(typeof StopAutonomousDatabaseOutput$ === "object");
assert(typeof StopDbNodeInput$ === "object");
assert(typeof StopDbNodeOutput$ === "object");
assert(typeof StsAccess$ === "object");
assert(typeof SubscriptionError$ === "object");
assert(typeof SwitchoverAutonomousDatabaseInput$ === "object");
assert(typeof SwitchoverAutonomousDatabaseOutput$ === "object");
assert(typeof SystemVersionSummary$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TransportableTablespace$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAutonomousDatabaseBackupInput$ === "object");
assert(typeof UpdateAutonomousDatabaseBackupOutput$ === "object");
assert(typeof UpdateAutonomousDatabaseInput$ === "object");
assert(typeof UpdateAutonomousDatabaseOutput$ === "object");
assert(typeof UpdateCloudExadataInfrastructureInput$ === "object");
assert(typeof UpdateCloudExadataInfrastructureOutput$ === "object");
assert(typeof UpdateOdbNetworkInput$ === "object");
assert(typeof UpdateOdbNetworkOutput$ === "object");
assert(typeof UpdateOdbPeeringConnectionInput$ === "object");
assert(typeof UpdateOdbPeeringConnectionOutput$ === "object");
assert(typeof ValidationExceptionField$ === "object");
assert(typeof WalletPasswordSourceConfiguration$ === "object");
assert(typeof WalletPasswordSourceConfigurationInput$ === "object");
assert(typeof WalletPasswordSourceSummary$ === "object");
assert(typeof ZeroEtlAccess$ === "object");
// enums
assert(typeof Access === "object");
assert(typeof AdminPasswordSource === "object");
assert(typeof AutonomousDatabaseBackupStatus === "object");
assert(typeof AutonomousDatabaseBackupType === "object");
assert(typeof AutonomousDatabaseResourceStatus === "object");
assert(typeof AutonomousDatabaseWalletStatus === "object");
assert(typeof AutonomousMaintenanceScheduleType === "object");
assert(typeof CharacterSetType === "object");
assert(typeof CloneType === "object");
assert(typeof ComputeModel === "object");
assert(typeof DatabaseEdition === "object");
assert(typeof DatabaseManagementStatus === "object");
assert(typeof DatabaseType === "object");
assert(typeof DataGuardRole === "object");
assert(typeof DataSafeStatus === "object");
assert(typeof DayOfWeekName === "object");
assert(typeof DbNodeMaintenanceType === "object");
assert(typeof DbNodeResourceStatus === "object");
assert(typeof DbServerPatchingStatus === "object");
assert(typeof DbWorkload === "object");
assert(typeof DisasterRecoveryType === "object");
assert(typeof DiskRedundancy === "object");
assert(typeof EncryptionKeyProvider === "object");
assert(typeof EncryptionKeyProviderInput === "object");
assert(typeof ExternalIdType === "object");
assert(typeof IamRoleStatus === "object");
assert(typeof IormLifecycleState === "object");
assert(typeof LicenseModel === "object");
assert(typeof ManagedResourceStatus === "object");
assert(typeof MonthName === "object");
assert(typeof NetServicesArchitecture === "object");
assert(typeof Objective === "object");
assert(typeof OciAwsIntegration === "object");
assert(typeof OciIamRoleStatus === "object");
assert(typeof OciOnboardingStatus === "object");
assert(typeof OpenMode === "object");
assert(typeof OperationsInsightsStatus === "object");
assert(typeof PatchingModeType === "object");
assert(typeof PermissionLevel === "object");
assert(typeof PreferenceType === "object");
assert(typeof RefreshableMode === "object");
assert(typeof RefreshableStatus === "object");
assert(typeof RepeatCadence === "object");
assert(typeof ResourceStatus === "object");
assert(typeof ShapeType === "object");
assert(typeof SourceType === "object");
assert(typeof StandbyAllowlistedIpsSource === "object");
assert(typeof SupportedAwsIntegration === "object");
assert(typeof ValidationExceptionReason === "object");
assert(typeof VpcEndpointType === "object");
assert(typeof WalletPasswordSource === "object");
assert(typeof WalletType === "object");
// errors
assert(AccessDeniedException.prototype instanceof OdbServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ConflictException.prototype instanceof OdbServiceException);
assert(typeof ConflictException$ === "object");
assert(InternalServerException.prototype instanceof OdbServiceException);
assert(typeof InternalServerException$ === "object");
assert(ResourceNotFoundException.prototype instanceof OdbServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof OdbServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(ThrottlingException.prototype instanceof OdbServiceException);
assert(typeof ThrottlingException$ === "object");
assert(ValidationException.prototype instanceof OdbServiceException);
assert(typeof ValidationException$ === "object");
assert(OdbServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateListAutonomousDatabaseBackups === "function");
assert(typeof paginateListAutonomousDatabaseCharacterSets === "function");
assert(typeof paginateListAutonomousDatabaseClones === "function");
assert(typeof paginateListAutonomousDatabasePeers === "function");
assert(typeof paginateListAutonomousDatabaseVersions === "function");
assert(typeof paginateListAutonomousDatabases === "function");
assert(typeof paginateListAutonomousVirtualMachines === "function");
assert(typeof paginateListCloudAutonomousVmClusters === "function");
assert(typeof paginateListCloudExadataInfrastructures === "function");
assert(typeof paginateListCloudVmClusters === "function");
assert(typeof paginateListDbNodes === "function");
assert(typeof paginateListDbServers === "function");
assert(typeof paginateListDbSystemShapes === "function");
assert(typeof paginateListGiVersions === "function");
assert(typeof paginateListOdbNetworks === "function");
assert(typeof paginateListOdbPeeringConnections === "function");
assert(typeof paginateListSystemVersions === "function");
console.log(`Odb index test passed.`);
