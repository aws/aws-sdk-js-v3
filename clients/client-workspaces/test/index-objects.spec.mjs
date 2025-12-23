import {
  AcceptAccountLinkInvitation$,
  AcceptAccountLinkInvitationCommand,
  AcceptAccountLinkInvitationRequest$,
  AcceptAccountLinkInvitationResult$,
  AccessDeniedException,
  AccessDeniedException$,
  AccessEndpoint$,
  AccessEndpointConfig$,
  AccessEndpointType,
  AccessPropertyValue,
  AccountLink$,
  AccountLinkStatusEnum,
  AccountModification$,
  ActiveDirectoryConfig$,
  AGAModeForDirectoryEnum,
  AGAModeForWorkSpaceEnum,
  AGAPreferredProtocolForDirectory,
  AGAPreferredProtocolForWorkSpace,
  Application,
  ApplicationAssociatedResourceType,
  ApplicationNotSupportedException,
  ApplicationNotSupportedException$,
  ApplicationResourceAssociation$,
  ApplicationSettingsRequest$,
  ApplicationSettingsResponse$,
  ApplicationSettingsStatusEnum,
  AssociateConnectionAlias$,
  AssociateConnectionAliasCommand,
  AssociateConnectionAliasRequest$,
  AssociateConnectionAliasResult$,
  AssociateIpGroups$,
  AssociateIpGroupsCommand,
  AssociateIpGroupsRequest$,
  AssociateIpGroupsResult$,
  AssociateWorkspaceApplication$,
  AssociateWorkspaceApplicationCommand,
  AssociateWorkspaceApplicationRequest$,
  AssociateWorkspaceApplicationResult$,
  AssociationErrorCode,
  AssociationState,
  AssociationStateReason$,
  AssociationStatus,
  AuthenticationType,
  AuthorizeIpRules$,
  AuthorizeIpRulesCommand,
  AuthorizeIpRulesRequest$,
  AuthorizeIpRulesResult$,
  BundleAssociatedResourceType,
  BundleResourceAssociation$,
  BundleType,
  Capacity$,
  CapacityStatus$,
  CertificateBasedAuthProperties$,
  CertificateBasedAuthStatusEnum,
  ClientDeviceType,
  ClientProperties$,
  ClientPropertiesResult$,
  Compute,
  ComputeNotCompatibleException,
  ComputeNotCompatibleException$,
  ComputeType$,
  ConflictException,
  ConflictException$,
  ConnectClientAddIn$,
  ConnectionAlias$,
  ConnectionAliasAssociation$,
  ConnectionAliasPermission$,
  ConnectionAliasState,
  ConnectionState,
  CopyWorkspaceImage$,
  CopyWorkspaceImageCommand,
  CopyWorkspaceImageRequest$,
  CopyWorkspaceImageResult$,
  CreateAccountLinkInvitation$,
  CreateAccountLinkInvitationCommand,
  CreateAccountLinkInvitationRequest$,
  CreateAccountLinkInvitationResult$,
  CreateConnectClientAddIn$,
  CreateConnectClientAddInCommand,
  CreateConnectClientAddInRequest$,
  CreateConnectClientAddInResult$,
  CreateConnectionAlias$,
  CreateConnectionAliasCommand,
  CreateConnectionAliasRequest$,
  CreateConnectionAliasResult$,
  CreateIpGroup$,
  CreateIpGroupCommand,
  CreateIpGroupRequest$,
  CreateIpGroupResult$,
  CreateStandbyWorkspaces$,
  CreateStandbyWorkspacesCommand,
  CreateStandbyWorkspacesRequest$,
  CreateStandbyWorkspacesResult$,
  CreateTags$,
  CreateTagsCommand,
  CreateTagsRequest$,
  CreateTagsResult$,
  CreateUpdatedWorkspaceImage$,
  CreateUpdatedWorkspaceImageCommand,
  CreateUpdatedWorkspaceImageRequest$,
  CreateUpdatedWorkspaceImageResult$,
  CreateWorkspaceBundle$,
  CreateWorkspaceBundleCommand,
  CreateWorkspaceBundleRequest$,
  CreateWorkspaceBundleResult$,
  CreateWorkspaceImage$,
  CreateWorkspaceImageCommand,
  CreateWorkspaceImageRequest$,
  CreateWorkspaceImageResult$,
  CreateWorkspaces$,
  CreateWorkspacesCommand,
  CreateWorkspacesPool$,
  CreateWorkspacesPoolCommand,
  CreateWorkspacesPoolRequest$,
  CreateWorkspacesPoolResult$,
  CreateWorkspacesRequest$,
  CreateWorkspacesResult$,
  CustomImageProtocol,
  CustomWorkspaceImageImportErrorDetails$,
  CustomWorkspaceImageImportState,
  DataReplication,
  DataReplicationSettings$,
  DedicatedTenancyAccountType,
  DedicatedTenancyModificationStateEnum,
  DedicatedTenancySupportEnum,
  DedicatedTenancySupportResultEnum,
  DefaultClientBrandingAttributes$,
  DefaultImportClientBrandingAttributes$,
  DefaultWorkspaceCreationProperties$,
  DeletableCertificateBasedAuthProperty,
  DeletableSamlProperty,
  DeleteAccountLinkInvitation$,
  DeleteAccountLinkInvitationCommand,
  DeleteAccountLinkInvitationRequest$,
  DeleteAccountLinkInvitationResult$,
  DeleteClientBranding$,
  DeleteClientBrandingCommand,
  DeleteClientBrandingRequest$,
  DeleteClientBrandingResult$,
  DeleteConnectClientAddIn$,
  DeleteConnectClientAddInCommand,
  DeleteConnectClientAddInRequest$,
  DeleteConnectClientAddInResult$,
  DeleteConnectionAlias$,
  DeleteConnectionAliasCommand,
  DeleteConnectionAliasRequest$,
  DeleteConnectionAliasResult$,
  DeleteIpGroup$,
  DeleteIpGroupCommand,
  DeleteIpGroupRequest$,
  DeleteIpGroupResult$,
  DeleteTags$,
  DeleteTagsCommand,
  DeleteTagsRequest$,
  DeleteTagsResult$,
  DeleteWorkspaceBundle$,
  DeleteWorkspaceBundleCommand,
  DeleteWorkspaceBundleRequest$,
  DeleteWorkspaceBundleResult$,
  DeleteWorkspaceImage$,
  DeleteWorkspaceImageCommand,
  DeleteWorkspaceImageRequest$,
  DeleteWorkspaceImageResult$,
  DeployWorkspaceApplications$,
  DeployWorkspaceApplicationsCommand,
  DeployWorkspaceApplicationsRequest$,
  DeployWorkspaceApplicationsResult$,
  DeregisterWorkspaceDirectory$,
  DeregisterWorkspaceDirectoryCommand,
  DeregisterWorkspaceDirectoryRequest$,
  DeregisterWorkspaceDirectoryResult$,
  DescribeAccount$,
  DescribeAccountCommand,
  DescribeAccountModifications$,
  DescribeAccountModificationsCommand,
  DescribeAccountModificationsRequest$,
  DescribeAccountModificationsResult$,
  DescribeAccountRequest$,
  DescribeAccountResult$,
  DescribeApplicationAssociations$,
  DescribeApplicationAssociationsCommand,
  DescribeApplicationAssociationsRequest$,
  DescribeApplicationAssociationsResult$,
  DescribeApplications$,
  DescribeApplicationsCommand,
  DescribeApplicationsRequest$,
  DescribeApplicationsResult$,
  DescribeBundleAssociations$,
  DescribeBundleAssociationsCommand,
  DescribeBundleAssociationsRequest$,
  DescribeBundleAssociationsResult$,
  DescribeClientBranding$,
  DescribeClientBrandingCommand,
  DescribeClientBrandingRequest$,
  DescribeClientBrandingResult$,
  DescribeClientProperties$,
  DescribeClientPropertiesCommand,
  DescribeClientPropertiesRequest$,
  DescribeClientPropertiesResult$,
  DescribeConnectClientAddIns$,
  DescribeConnectClientAddInsCommand,
  DescribeConnectClientAddInsRequest$,
  DescribeConnectClientAddInsResult$,
  DescribeConnectionAliases$,
  DescribeConnectionAliasesCommand,
  DescribeConnectionAliasesRequest$,
  DescribeConnectionAliasesResult$,
  DescribeConnectionAliasPermissions$,
  DescribeConnectionAliasPermissionsCommand,
  DescribeConnectionAliasPermissionsRequest$,
  DescribeConnectionAliasPermissionsResult$,
  DescribeCustomWorkspaceImageImport$,
  DescribeCustomWorkspaceImageImportCommand,
  DescribeCustomWorkspaceImageImportRequest$,
  DescribeCustomWorkspaceImageImportResult$,
  DescribeImageAssociations$,
  DescribeImageAssociationsCommand,
  DescribeImageAssociationsRequest$,
  DescribeImageAssociationsResult$,
  DescribeIpGroups$,
  DescribeIpGroupsCommand,
  DescribeIpGroupsRequest$,
  DescribeIpGroupsResult$,
  DescribeTags$,
  DescribeTagsCommand,
  DescribeTagsRequest$,
  DescribeTagsResult$,
  DescribeWorkspaceAssociations$,
  DescribeWorkspaceAssociationsCommand,
  DescribeWorkspaceAssociationsRequest$,
  DescribeWorkspaceAssociationsResult$,
  DescribeWorkspaceBundles$,
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceBundlesRequest$,
  DescribeWorkspaceBundlesResult$,
  DescribeWorkspaceDirectories$,
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesFilter$,
  DescribeWorkspaceDirectoriesFilterName,
  DescribeWorkspaceDirectoriesRequest$,
  DescribeWorkspaceDirectoriesResult$,
  DescribeWorkspaceImagePermissions$,
  DescribeWorkspaceImagePermissionsCommand,
  DescribeWorkspaceImagePermissionsRequest$,
  DescribeWorkspaceImagePermissionsResult$,
  DescribeWorkspaceImages$,
  DescribeWorkspaceImagesCommand,
  DescribeWorkspaceImagesRequest$,
  DescribeWorkspaceImagesResult$,
  DescribeWorkspaces$,
  DescribeWorkspacesCommand,
  DescribeWorkspacesConnectionStatus$,
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspacesConnectionStatusRequest$,
  DescribeWorkspacesConnectionStatusResult$,
  DescribeWorkspaceSnapshots$,
  DescribeWorkspaceSnapshotsCommand,
  DescribeWorkspaceSnapshotsRequest$,
  DescribeWorkspaceSnapshotsResult$,
  DescribeWorkspacesPools$,
  DescribeWorkspacesPoolsCommand,
  DescribeWorkspacesPoolSessions$,
  DescribeWorkspacesPoolSessionsCommand,
  DescribeWorkspacesPoolSessionsRequest$,
  DescribeWorkspacesPoolSessionsResult$,
  DescribeWorkspacesPoolsFilter$,
  DescribeWorkspacesPoolsFilterName,
  DescribeWorkspacesPoolsFilterOperator,
  DescribeWorkspacesPoolsRequest$,
  DescribeWorkspacesPoolsResult$,
  DescribeWorkspacesRequest$,
  DescribeWorkspacesResult$,
  DisassociateConnectionAlias$,
  DisassociateConnectionAliasCommand,
  DisassociateConnectionAliasRequest$,
  DisassociateConnectionAliasResult$,
  DisassociateIpGroups$,
  DisassociateIpGroupsCommand,
  DisassociateIpGroupsRequest$,
  DisassociateIpGroupsResult$,
  DisassociateWorkspaceApplication$,
  DisassociateWorkspaceApplicationCommand,
  DisassociateWorkspaceApplicationRequest$,
  DisassociateWorkspaceApplicationResult$,
  EndpointEncryptionMode,
  ErrorDetails$,
  FailedCreateStandbyWorkspacesRequest$,
  FailedCreateWorkspaceRequest$,
  FailedWorkspaceChangeRequest$,
  GetAccountLink$,
  GetAccountLinkCommand,
  GetAccountLinkRequest$,
  GetAccountLinkResult$,
  GlobalAcceleratorForDirectory$,
  GlobalAcceleratorForWorkSpace$,
  IDCConfig$,
  ImageAssociatedResourceType,
  ImageComputeType,
  ImagePermission$,
  ImageResourceAssociation$,
  ImageSourceIdentifier$,
  ImageType,
  ImportClientBranding$,
  ImportClientBrandingCommand,
  ImportClientBrandingRequest$,
  ImportClientBrandingResult$,
  ImportCustomWorkspaceImage$,
  ImportCustomWorkspaceImageCommand,
  ImportCustomWorkspaceImageRequest$,
  ImportCustomWorkspaceImageResult$,
  ImportWorkspaceImage$,
  ImportWorkspaceImageCommand,
  ImportWorkspaceImageRequest$,
  ImportWorkspaceImageResult$,
  IncompatibleApplicationsException,
  IncompatibleApplicationsException$,
  InternalServerException,
  InternalServerException$,
  InternetFallbackProtocol,
  InvalidParameterCombinationException,
  InvalidParameterCombinationException$,
  InvalidParameterValuesException,
  InvalidParameterValuesException$,
  InvalidResourceStateException,
  InvalidResourceStateException$,
  IosClientBrandingAttributes$,
  IosImportClientBrandingAttributes$,
  IpRuleItem$,
  ListAccountLinks$,
  ListAccountLinksCommand,
  ListAccountLinksRequest$,
  ListAccountLinksResult$,
  ListAvailableManagementCidrRanges$,
  ListAvailableManagementCidrRangesCommand,
  ListAvailableManagementCidrRangesRequest$,
  ListAvailableManagementCidrRangesResult$,
  LogUploadEnum,
  MicrosoftEntraConfig$,
  MigrateWorkspace$,
  MigrateWorkspaceCommand,
  MigrateWorkspaceRequest$,
  MigrateWorkspaceResult$,
  ModificationResourceEnum,
  ModificationState$,
  ModificationStateEnum,
  ModifyAccount$,
  ModifyAccountCommand,
  ModifyAccountRequest$,
  ModifyAccountResult$,
  ModifyCertificateBasedAuthProperties$,
  ModifyCertificateBasedAuthPropertiesCommand,
  ModifyCertificateBasedAuthPropertiesRequest$,
  ModifyCertificateBasedAuthPropertiesResult$,
  ModifyClientProperties$,
  ModifyClientPropertiesCommand,
  ModifyClientPropertiesRequest$,
  ModifyClientPropertiesResult$,
  ModifyEndpointEncryptionMode$,
  ModifyEndpointEncryptionModeCommand,
  ModifyEndpointEncryptionModeRequest$,
  ModifyEndpointEncryptionModeResponse$,
  ModifySamlProperties$,
  ModifySamlPropertiesCommand,
  ModifySamlPropertiesRequest$,
  ModifySamlPropertiesResult$,
  ModifySelfservicePermissions$,
  ModifySelfservicePermissionsCommand,
  ModifySelfservicePermissionsRequest$,
  ModifySelfservicePermissionsResult$,
  ModifyStreamingProperties$,
  ModifyStreamingPropertiesCommand,
  ModifyStreamingPropertiesRequest$,
  ModifyStreamingPropertiesResult$,
  ModifyWorkspaceAccessProperties$,
  ModifyWorkspaceAccessPropertiesCommand,
  ModifyWorkspaceAccessPropertiesRequest$,
  ModifyWorkspaceAccessPropertiesResult$,
  ModifyWorkspaceCreationProperties$,
  ModifyWorkspaceCreationPropertiesCommand,
  ModifyWorkspaceCreationPropertiesRequest$,
  ModifyWorkspaceCreationPropertiesResult$,
  ModifyWorkspaceProperties$,
  ModifyWorkspacePropertiesCommand,
  ModifyWorkspacePropertiesRequest$,
  ModifyWorkspacePropertiesResult$,
  ModifyWorkspaceState$,
  ModifyWorkspaceStateCommand,
  ModifyWorkspaceStateRequest$,
  ModifyWorkspaceStateResult$,
  NetworkAccessConfiguration$,
  OperatingSystem$,
  OperatingSystemName,
  OperatingSystemNotCompatibleException,
  OperatingSystemNotCompatibleException$,
  OperatingSystemType,
  OperationInProgressException,
  OperationInProgressException$,
  OperationNotSupportedException,
  OperationNotSupportedException$,
  OSVersion,
  paginateDescribeApplicationAssociations,
  paginateDescribeApplications,
  paginateDescribeWorkspaceBundles,
  paginateDescribeWorkspaceDirectories,
  paginateDescribeWorkspaces,
  paginateListAccountLinks,
  PendingCreateStandbyWorkspacesRequest$,
  Platform,
  PoolsRunningMode,
  Protocol,
  RebootRequest$,
  RebootWorkspaces$,
  RebootWorkspacesCommand,
  RebootWorkspacesRequest$,
  RebootWorkspacesResult$,
  RebuildRequest$,
  RebuildWorkspaces$,
  RebuildWorkspacesCommand,
  RebuildWorkspacesRequest$,
  RebuildWorkspacesResult$,
  ReconnectEnum,
  RegisterWorkspaceDirectory$,
  RegisterWorkspaceDirectoryCommand,
  RegisterWorkspaceDirectoryRequest$,
  RegisterWorkspaceDirectoryResult$,
  RejectAccountLinkInvitation$,
  RejectAccountLinkInvitationCommand,
  RejectAccountLinkInvitationRequest$,
  RejectAccountLinkInvitationResult$,
  RelatedWorkspaceProperties$,
  ResourceAlreadyExistsException,
  ResourceAlreadyExistsException$,
  ResourceAssociatedException,
  ResourceAssociatedException$,
  ResourceCreationFailedException,
  ResourceCreationFailedException$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  ResourceUnavailableException,
  ResourceUnavailableException$,
  RestoreWorkspace$,
  RestoreWorkspaceCommand,
  RestoreWorkspaceRequest$,
  RestoreWorkspaceResult$,
  RevokeIpRules$,
  RevokeIpRulesCommand,
  RevokeIpRulesRequest$,
  RevokeIpRulesResult$,
  RootStorage$,
  RunningMode,
  SamlProperties$,
  SamlStatusEnum,
  SelfservicePermissions$,
  SessionConnectionState,
  Snapshot$,
  StandbyWorkspace$,
  StandbyWorkspaceRelationshipType,
  StandbyWorkspacesProperties$,
  StartRequest$,
  StartWorkspaces$,
  StartWorkspacesCommand,
  StartWorkspacesPool$,
  StartWorkspacesPoolCommand,
  StartWorkspacesPoolRequest$,
  StartWorkspacesPoolResult$,
  StartWorkspacesRequest$,
  StartWorkspacesResult$,
  StopRequest$,
  StopWorkspaces$,
  StopWorkspacesCommand,
  StopWorkspacesPool$,
  StopWorkspacesPoolCommand,
  StopWorkspacesPoolRequest$,
  StopWorkspacesPoolResult$,
  StopWorkspacesRequest$,
  StopWorkspacesResult$,
  StorageConnector$,
  StorageConnectorStatusEnum,
  StorageConnectorTypeEnum,
  StreamingExperiencePreferredProtocolEnum,
  StreamingProperties$,
  Tag$,
  TargetWorkspaceState,
  Tenancy,
  TerminateRequest$,
  TerminateWorkspaces$,
  TerminateWorkspacesCommand,
  TerminateWorkspacesPool$,
  TerminateWorkspacesPoolCommand,
  TerminateWorkspacesPoolRequest$,
  TerminateWorkspacesPoolResult$,
  TerminateWorkspacesPoolSession$,
  TerminateWorkspacesPoolSessionCommand,
  TerminateWorkspacesPoolSessionRequest$,
  TerminateWorkspacesPoolSessionResult$,
  TerminateWorkspacesRequest$,
  TerminateWorkspacesResult$,
  TimeoutSettings$,
  UnsupportedNetworkConfigurationException,
  UnsupportedNetworkConfigurationException$,
  UnsupportedWorkspaceConfigurationException,
  UnsupportedWorkspaceConfigurationException$,
  UpdateConnectClientAddIn$,
  UpdateConnectClientAddInCommand,
  UpdateConnectClientAddInRequest$,
  UpdateConnectClientAddInResult$,
  UpdateConnectionAliasPermission$,
  UpdateConnectionAliasPermissionCommand,
  UpdateConnectionAliasPermissionRequest$,
  UpdateConnectionAliasPermissionResult$,
  UpdateResult$,
  UpdateRulesOfIpGroup$,
  UpdateRulesOfIpGroupCommand,
  UpdateRulesOfIpGroupRequest$,
  UpdateRulesOfIpGroupResult$,
  UpdateWorkspaceBundle$,
  UpdateWorkspaceBundleCommand,
  UpdateWorkspaceBundleRequest$,
  UpdateWorkspaceBundleResult$,
  UpdateWorkspaceImagePermission$,
  UpdateWorkspaceImagePermissionCommand,
  UpdateWorkspaceImagePermissionRequest$,
  UpdateWorkspaceImagePermissionResult$,
  UpdateWorkspacesPool$,
  UpdateWorkspacesPoolCommand,
  UpdateWorkspacesPoolRequest$,
  UpdateWorkspacesPoolResult$,
  UserIdentityType,
  UserSetting$,
  UserSettingActionEnum,
  UserSettingPermissionEnum,
  UserStorage$,
  ValidationException,
  ValidationException$,
  Workspace$,
  WorkspaceAccessProperties$,
  WorkSpaceApplication$,
  WorkSpaceApplicationDeployment$,
  WorkSpaceApplicationLicenseType,
  WorkSpaceApplicationState,
  WorkSpaceAssociatedResourceType,
  WorkspaceBundle$,
  WorkspaceBundleState,
  WorkspaceConnectionStatus$,
  WorkspaceCreationProperties$,
  WorkspaceDirectory$,
  WorkspaceDirectoryState,
  WorkspaceDirectoryType,
  WorkspaceImage$,
  WorkspaceImageErrorDetailCode,
  WorkspaceImageIngestionProcess,
  WorkspaceImageRequiredTenancy,
  WorkspaceImageState,
  WorkspaceProperties$,
  WorkspaceRequest$,
  WorkspaceResourceAssociation$,
  WorkSpaces,
  WorkSpacesClient,
  WorkspacesDefaultRoleNotFoundException,
  WorkspacesDefaultRoleNotFoundException$,
  WorkspacesIpGroup$,
  WorkspacesPool$,
  WorkspacesPoolError$,
  WorkspacesPoolErrorCode,
  WorkspacesPoolSession$,
  WorkspacesPoolState,
  WorkSpacesServiceException,
  WorkspaceState,
  WorkspaceType,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkSpacesClient === "function");
assert(typeof WorkSpaces === "function");
// commands
assert(typeof AcceptAccountLinkInvitationCommand === "function");
assert(typeof AcceptAccountLinkInvitation$ === "object");
assert(typeof AssociateConnectionAliasCommand === "function");
assert(typeof AssociateConnectionAlias$ === "object");
assert(typeof AssociateIpGroupsCommand === "function");
assert(typeof AssociateIpGroups$ === "object");
assert(typeof AssociateWorkspaceApplicationCommand === "function");
assert(typeof AssociateWorkspaceApplication$ === "object");
assert(typeof AuthorizeIpRulesCommand === "function");
assert(typeof AuthorizeIpRules$ === "object");
assert(typeof CopyWorkspaceImageCommand === "function");
assert(typeof CopyWorkspaceImage$ === "object");
assert(typeof CreateAccountLinkInvitationCommand === "function");
assert(typeof CreateAccountLinkInvitation$ === "object");
assert(typeof CreateConnectClientAddInCommand === "function");
assert(typeof CreateConnectClientAddIn$ === "object");
assert(typeof CreateConnectionAliasCommand === "function");
assert(typeof CreateConnectionAlias$ === "object");
assert(typeof CreateIpGroupCommand === "function");
assert(typeof CreateIpGroup$ === "object");
assert(typeof CreateStandbyWorkspacesCommand === "function");
assert(typeof CreateStandbyWorkspaces$ === "object");
assert(typeof CreateTagsCommand === "function");
assert(typeof CreateTags$ === "object");
assert(typeof CreateUpdatedWorkspaceImageCommand === "function");
assert(typeof CreateUpdatedWorkspaceImage$ === "object");
assert(typeof CreateWorkspaceBundleCommand === "function");
assert(typeof CreateWorkspaceBundle$ === "object");
assert(typeof CreateWorkspaceImageCommand === "function");
assert(typeof CreateWorkspaceImage$ === "object");
assert(typeof CreateWorkspacesCommand === "function");
assert(typeof CreateWorkspaces$ === "object");
assert(typeof CreateWorkspacesPoolCommand === "function");
assert(typeof CreateWorkspacesPool$ === "object");
assert(typeof DeleteAccountLinkInvitationCommand === "function");
assert(typeof DeleteAccountLinkInvitation$ === "object");
assert(typeof DeleteClientBrandingCommand === "function");
assert(typeof DeleteClientBranding$ === "object");
assert(typeof DeleteConnectClientAddInCommand === "function");
assert(typeof DeleteConnectClientAddIn$ === "object");
assert(typeof DeleteConnectionAliasCommand === "function");
assert(typeof DeleteConnectionAlias$ === "object");
assert(typeof DeleteIpGroupCommand === "function");
assert(typeof DeleteIpGroup$ === "object");
assert(typeof DeleteTagsCommand === "function");
assert(typeof DeleteTags$ === "object");
assert(typeof DeleteWorkspaceBundleCommand === "function");
assert(typeof DeleteWorkspaceBundle$ === "object");
assert(typeof DeleteWorkspaceImageCommand === "function");
assert(typeof DeleteWorkspaceImage$ === "object");
assert(typeof DeployWorkspaceApplicationsCommand === "function");
assert(typeof DeployWorkspaceApplications$ === "object");
assert(typeof DeregisterWorkspaceDirectoryCommand === "function");
assert(typeof DeregisterWorkspaceDirectory$ === "object");
assert(typeof DescribeAccountCommand === "function");
assert(typeof DescribeAccount$ === "object");
assert(typeof DescribeAccountModificationsCommand === "function");
assert(typeof DescribeAccountModifications$ === "object");
assert(typeof DescribeApplicationAssociationsCommand === "function");
assert(typeof DescribeApplicationAssociations$ === "object");
assert(typeof DescribeApplicationsCommand === "function");
assert(typeof DescribeApplications$ === "object");
assert(typeof DescribeBundleAssociationsCommand === "function");
assert(typeof DescribeBundleAssociations$ === "object");
assert(typeof DescribeClientBrandingCommand === "function");
assert(typeof DescribeClientBranding$ === "object");
assert(typeof DescribeClientPropertiesCommand === "function");
assert(typeof DescribeClientProperties$ === "object");
assert(typeof DescribeConnectClientAddInsCommand === "function");
assert(typeof DescribeConnectClientAddIns$ === "object");
assert(typeof DescribeConnectionAliasesCommand === "function");
assert(typeof DescribeConnectionAliases$ === "object");
assert(typeof DescribeConnectionAliasPermissionsCommand === "function");
assert(typeof DescribeConnectionAliasPermissions$ === "object");
assert(typeof DescribeCustomWorkspaceImageImportCommand === "function");
assert(typeof DescribeCustomWorkspaceImageImport$ === "object");
assert(typeof DescribeImageAssociationsCommand === "function");
assert(typeof DescribeImageAssociations$ === "object");
assert(typeof DescribeIpGroupsCommand === "function");
assert(typeof DescribeIpGroups$ === "object");
assert(typeof DescribeTagsCommand === "function");
assert(typeof DescribeTags$ === "object");
assert(typeof DescribeWorkspaceAssociationsCommand === "function");
assert(typeof DescribeWorkspaceAssociations$ === "object");
assert(typeof DescribeWorkspaceBundlesCommand === "function");
assert(typeof DescribeWorkspaceBundles$ === "object");
assert(typeof DescribeWorkspaceDirectoriesCommand === "function");
assert(typeof DescribeWorkspaceDirectories$ === "object");
assert(typeof DescribeWorkspaceImagePermissionsCommand === "function");
assert(typeof DescribeWorkspaceImagePermissions$ === "object");
assert(typeof DescribeWorkspaceImagesCommand === "function");
assert(typeof DescribeWorkspaceImages$ === "object");
assert(typeof DescribeWorkspacesCommand === "function");
assert(typeof DescribeWorkspaces$ === "object");
assert(typeof DescribeWorkspacesConnectionStatusCommand === "function");
assert(typeof DescribeWorkspacesConnectionStatus$ === "object");
assert(typeof DescribeWorkspaceSnapshotsCommand === "function");
assert(typeof DescribeWorkspaceSnapshots$ === "object");
assert(typeof DescribeWorkspacesPoolsCommand === "function");
assert(typeof DescribeWorkspacesPools$ === "object");
assert(typeof DescribeWorkspacesPoolSessionsCommand === "function");
assert(typeof DescribeWorkspacesPoolSessions$ === "object");
assert(typeof DisassociateConnectionAliasCommand === "function");
assert(typeof DisassociateConnectionAlias$ === "object");
assert(typeof DisassociateIpGroupsCommand === "function");
assert(typeof DisassociateIpGroups$ === "object");
assert(typeof DisassociateWorkspaceApplicationCommand === "function");
assert(typeof DisassociateWorkspaceApplication$ === "object");
assert(typeof GetAccountLinkCommand === "function");
assert(typeof GetAccountLink$ === "object");
assert(typeof ImportClientBrandingCommand === "function");
assert(typeof ImportClientBranding$ === "object");
assert(typeof ImportCustomWorkspaceImageCommand === "function");
assert(typeof ImportCustomWorkspaceImage$ === "object");
assert(typeof ImportWorkspaceImageCommand === "function");
assert(typeof ImportWorkspaceImage$ === "object");
assert(typeof ListAccountLinksCommand === "function");
assert(typeof ListAccountLinks$ === "object");
assert(typeof ListAvailableManagementCidrRangesCommand === "function");
assert(typeof ListAvailableManagementCidrRanges$ === "object");
assert(typeof MigrateWorkspaceCommand === "function");
assert(typeof MigrateWorkspace$ === "object");
assert(typeof ModifyAccountCommand === "function");
assert(typeof ModifyAccount$ === "object");
assert(typeof ModifyCertificateBasedAuthPropertiesCommand === "function");
assert(typeof ModifyCertificateBasedAuthProperties$ === "object");
assert(typeof ModifyClientPropertiesCommand === "function");
assert(typeof ModifyClientProperties$ === "object");
assert(typeof ModifyEndpointEncryptionModeCommand === "function");
assert(typeof ModifyEndpointEncryptionMode$ === "object");
assert(typeof ModifySamlPropertiesCommand === "function");
assert(typeof ModifySamlProperties$ === "object");
assert(typeof ModifySelfservicePermissionsCommand === "function");
assert(typeof ModifySelfservicePermissions$ === "object");
assert(typeof ModifyStreamingPropertiesCommand === "function");
assert(typeof ModifyStreamingProperties$ === "object");
assert(typeof ModifyWorkspaceAccessPropertiesCommand === "function");
assert(typeof ModifyWorkspaceAccessProperties$ === "object");
assert(typeof ModifyWorkspaceCreationPropertiesCommand === "function");
assert(typeof ModifyWorkspaceCreationProperties$ === "object");
assert(typeof ModifyWorkspacePropertiesCommand === "function");
assert(typeof ModifyWorkspaceProperties$ === "object");
assert(typeof ModifyWorkspaceStateCommand === "function");
assert(typeof ModifyWorkspaceState$ === "object");
assert(typeof RebootWorkspacesCommand === "function");
assert(typeof RebootWorkspaces$ === "object");
assert(typeof RebuildWorkspacesCommand === "function");
assert(typeof RebuildWorkspaces$ === "object");
assert(typeof RegisterWorkspaceDirectoryCommand === "function");
assert(typeof RegisterWorkspaceDirectory$ === "object");
assert(typeof RejectAccountLinkInvitationCommand === "function");
assert(typeof RejectAccountLinkInvitation$ === "object");
assert(typeof RestoreWorkspaceCommand === "function");
assert(typeof RestoreWorkspace$ === "object");
assert(typeof RevokeIpRulesCommand === "function");
assert(typeof RevokeIpRules$ === "object");
assert(typeof StartWorkspacesCommand === "function");
assert(typeof StartWorkspaces$ === "object");
assert(typeof StartWorkspacesPoolCommand === "function");
assert(typeof StartWorkspacesPool$ === "object");
assert(typeof StopWorkspacesCommand === "function");
assert(typeof StopWorkspaces$ === "object");
assert(typeof StopWorkspacesPoolCommand === "function");
assert(typeof StopWorkspacesPool$ === "object");
assert(typeof TerminateWorkspacesCommand === "function");
assert(typeof TerminateWorkspaces$ === "object");
assert(typeof TerminateWorkspacesPoolCommand === "function");
assert(typeof TerminateWorkspacesPool$ === "object");
assert(typeof TerminateWorkspacesPoolSessionCommand === "function");
assert(typeof TerminateWorkspacesPoolSession$ === "object");
assert(typeof UpdateConnectClientAddInCommand === "function");
assert(typeof UpdateConnectClientAddIn$ === "object");
assert(typeof UpdateConnectionAliasPermissionCommand === "function");
assert(typeof UpdateConnectionAliasPermission$ === "object");
assert(typeof UpdateRulesOfIpGroupCommand === "function");
assert(typeof UpdateRulesOfIpGroup$ === "object");
assert(typeof UpdateWorkspaceBundleCommand === "function");
assert(typeof UpdateWorkspaceBundle$ === "object");
assert(typeof UpdateWorkspaceImagePermissionCommand === "function");
assert(typeof UpdateWorkspaceImagePermission$ === "object");
assert(typeof UpdateWorkspacesPoolCommand === "function");
assert(typeof UpdateWorkspacesPool$ === "object");
// structural schemas
assert(typeof AcceptAccountLinkInvitationRequest$ === "object");
assert(typeof AcceptAccountLinkInvitationResult$ === "object");
assert(typeof AccessEndpoint$ === "object");
assert(typeof AccessEndpointConfig$ === "object");
assert(typeof AccountLink$ === "object");
assert(typeof AccountModification$ === "object");
assert(typeof ActiveDirectoryConfig$ === "object");
assert(typeof ApplicationResourceAssociation$ === "object");
assert(typeof ApplicationSettingsRequest$ === "object");
assert(typeof ApplicationSettingsResponse$ === "object");
assert(typeof AssociateConnectionAliasRequest$ === "object");
assert(typeof AssociateConnectionAliasResult$ === "object");
assert(typeof AssociateIpGroupsRequest$ === "object");
assert(typeof AssociateIpGroupsResult$ === "object");
assert(typeof AssociateWorkspaceApplicationRequest$ === "object");
assert(typeof AssociateWorkspaceApplicationResult$ === "object");
assert(typeof AssociationStateReason$ === "object");
assert(typeof AuthorizeIpRulesRequest$ === "object");
assert(typeof AuthorizeIpRulesResult$ === "object");
assert(typeof BundleResourceAssociation$ === "object");
assert(typeof Capacity$ === "object");
assert(typeof CapacityStatus$ === "object");
assert(typeof CertificateBasedAuthProperties$ === "object");
assert(typeof ClientProperties$ === "object");
assert(typeof ClientPropertiesResult$ === "object");
assert(typeof ComputeType$ === "object");
assert(typeof ConnectClientAddIn$ === "object");
assert(typeof ConnectionAlias$ === "object");
assert(typeof ConnectionAliasAssociation$ === "object");
assert(typeof ConnectionAliasPermission$ === "object");
assert(typeof CopyWorkspaceImageRequest$ === "object");
assert(typeof CopyWorkspaceImageResult$ === "object");
assert(typeof CreateAccountLinkInvitationRequest$ === "object");
assert(typeof CreateAccountLinkInvitationResult$ === "object");
assert(typeof CreateConnectClientAddInRequest$ === "object");
assert(typeof CreateConnectClientAddInResult$ === "object");
assert(typeof CreateConnectionAliasRequest$ === "object");
assert(typeof CreateConnectionAliasResult$ === "object");
assert(typeof CreateIpGroupRequest$ === "object");
assert(typeof CreateIpGroupResult$ === "object");
assert(typeof CreateStandbyWorkspacesRequest$ === "object");
assert(typeof CreateStandbyWorkspacesResult$ === "object");
assert(typeof CreateTagsRequest$ === "object");
assert(typeof CreateTagsResult$ === "object");
assert(typeof CreateUpdatedWorkspaceImageRequest$ === "object");
assert(typeof CreateUpdatedWorkspaceImageResult$ === "object");
assert(typeof CreateWorkspaceBundleRequest$ === "object");
assert(typeof CreateWorkspaceBundleResult$ === "object");
assert(typeof CreateWorkspaceImageRequest$ === "object");
assert(typeof CreateWorkspaceImageResult$ === "object");
assert(typeof CreateWorkspacesPoolRequest$ === "object");
assert(typeof CreateWorkspacesPoolResult$ === "object");
assert(typeof CreateWorkspacesRequest$ === "object");
assert(typeof CreateWorkspacesResult$ === "object");
assert(typeof CustomWorkspaceImageImportErrorDetails$ === "object");
assert(typeof DataReplicationSettings$ === "object");
assert(typeof DefaultClientBrandingAttributes$ === "object");
assert(typeof DefaultImportClientBrandingAttributes$ === "object");
assert(typeof DefaultWorkspaceCreationProperties$ === "object");
assert(typeof DeleteAccountLinkInvitationRequest$ === "object");
assert(typeof DeleteAccountLinkInvitationResult$ === "object");
assert(typeof DeleteClientBrandingRequest$ === "object");
assert(typeof DeleteClientBrandingResult$ === "object");
assert(typeof DeleteConnectClientAddInRequest$ === "object");
assert(typeof DeleteConnectClientAddInResult$ === "object");
assert(typeof DeleteConnectionAliasRequest$ === "object");
assert(typeof DeleteConnectionAliasResult$ === "object");
assert(typeof DeleteIpGroupRequest$ === "object");
assert(typeof DeleteIpGroupResult$ === "object");
assert(typeof DeleteTagsRequest$ === "object");
assert(typeof DeleteTagsResult$ === "object");
assert(typeof DeleteWorkspaceBundleRequest$ === "object");
assert(typeof DeleteWorkspaceBundleResult$ === "object");
assert(typeof DeleteWorkspaceImageRequest$ === "object");
assert(typeof DeleteWorkspaceImageResult$ === "object");
assert(typeof DeployWorkspaceApplicationsRequest$ === "object");
assert(typeof DeployWorkspaceApplicationsResult$ === "object");
assert(typeof DeregisterWorkspaceDirectoryRequest$ === "object");
assert(typeof DeregisterWorkspaceDirectoryResult$ === "object");
assert(typeof DescribeAccountModificationsRequest$ === "object");
assert(typeof DescribeAccountModificationsResult$ === "object");
assert(typeof DescribeAccountRequest$ === "object");
assert(typeof DescribeAccountResult$ === "object");
assert(typeof DescribeApplicationAssociationsRequest$ === "object");
assert(typeof DescribeApplicationAssociationsResult$ === "object");
assert(typeof DescribeApplicationsRequest$ === "object");
assert(typeof DescribeApplicationsResult$ === "object");
assert(typeof DescribeBundleAssociationsRequest$ === "object");
assert(typeof DescribeBundleAssociationsResult$ === "object");
assert(typeof DescribeClientBrandingRequest$ === "object");
assert(typeof DescribeClientBrandingResult$ === "object");
assert(typeof DescribeClientPropertiesRequest$ === "object");
assert(typeof DescribeClientPropertiesResult$ === "object");
assert(typeof DescribeConnectClientAddInsRequest$ === "object");
assert(typeof DescribeConnectClientAddInsResult$ === "object");
assert(typeof DescribeConnectionAliasesRequest$ === "object");
assert(typeof DescribeConnectionAliasesResult$ === "object");
assert(typeof DescribeConnectionAliasPermissionsRequest$ === "object");
assert(typeof DescribeConnectionAliasPermissionsResult$ === "object");
assert(typeof DescribeCustomWorkspaceImageImportRequest$ === "object");
assert(typeof DescribeCustomWorkspaceImageImportResult$ === "object");
assert(typeof DescribeImageAssociationsRequest$ === "object");
assert(typeof DescribeImageAssociationsResult$ === "object");
assert(typeof DescribeIpGroupsRequest$ === "object");
assert(typeof DescribeIpGroupsResult$ === "object");
assert(typeof DescribeTagsRequest$ === "object");
assert(typeof DescribeTagsResult$ === "object");
assert(typeof DescribeWorkspaceAssociationsRequest$ === "object");
assert(typeof DescribeWorkspaceAssociationsResult$ === "object");
assert(typeof DescribeWorkspaceBundlesRequest$ === "object");
assert(typeof DescribeWorkspaceBundlesResult$ === "object");
assert(typeof DescribeWorkspaceDirectoriesFilter$ === "object");
assert(typeof DescribeWorkspaceDirectoriesRequest$ === "object");
assert(typeof DescribeWorkspaceDirectoriesResult$ === "object");
assert(typeof DescribeWorkspaceImagePermissionsRequest$ === "object");
assert(typeof DescribeWorkspaceImagePermissionsResult$ === "object");
assert(typeof DescribeWorkspaceImagesRequest$ === "object");
assert(typeof DescribeWorkspaceImagesResult$ === "object");
assert(typeof DescribeWorkspacesConnectionStatusRequest$ === "object");
assert(typeof DescribeWorkspacesConnectionStatusResult$ === "object");
assert(typeof DescribeWorkspaceSnapshotsRequest$ === "object");
assert(typeof DescribeWorkspaceSnapshotsResult$ === "object");
assert(typeof DescribeWorkspacesPoolSessionsRequest$ === "object");
assert(typeof DescribeWorkspacesPoolSessionsResult$ === "object");
assert(typeof DescribeWorkspacesPoolsFilter$ === "object");
assert(typeof DescribeWorkspacesPoolsRequest$ === "object");
assert(typeof DescribeWorkspacesPoolsResult$ === "object");
assert(typeof DescribeWorkspacesRequest$ === "object");
assert(typeof DescribeWorkspacesResult$ === "object");
assert(typeof DisassociateConnectionAliasRequest$ === "object");
assert(typeof DisassociateConnectionAliasResult$ === "object");
assert(typeof DisassociateIpGroupsRequest$ === "object");
assert(typeof DisassociateIpGroupsResult$ === "object");
assert(typeof DisassociateWorkspaceApplicationRequest$ === "object");
assert(typeof DisassociateWorkspaceApplicationResult$ === "object");
assert(typeof ErrorDetails$ === "object");
assert(typeof FailedCreateStandbyWorkspacesRequest$ === "object");
assert(typeof FailedCreateWorkspaceRequest$ === "object");
assert(typeof FailedWorkspaceChangeRequest$ === "object");
assert(typeof GetAccountLinkRequest$ === "object");
assert(typeof GetAccountLinkResult$ === "object");
assert(typeof GlobalAcceleratorForDirectory$ === "object");
assert(typeof GlobalAcceleratorForWorkSpace$ === "object");
assert(typeof IDCConfig$ === "object");
assert(typeof ImagePermission$ === "object");
assert(typeof ImageResourceAssociation$ === "object");
assert(typeof ImageSourceIdentifier$ === "object");
assert(typeof ImportClientBrandingRequest$ === "object");
assert(typeof ImportClientBrandingResult$ === "object");
assert(typeof ImportCustomWorkspaceImageRequest$ === "object");
assert(typeof ImportCustomWorkspaceImageResult$ === "object");
assert(typeof ImportWorkspaceImageRequest$ === "object");
assert(typeof ImportWorkspaceImageResult$ === "object");
assert(typeof IosClientBrandingAttributes$ === "object");
assert(typeof IosImportClientBrandingAttributes$ === "object");
assert(typeof IpRuleItem$ === "object");
assert(typeof ListAccountLinksRequest$ === "object");
assert(typeof ListAccountLinksResult$ === "object");
assert(typeof ListAvailableManagementCidrRangesRequest$ === "object");
assert(typeof ListAvailableManagementCidrRangesResult$ === "object");
assert(typeof MicrosoftEntraConfig$ === "object");
assert(typeof MigrateWorkspaceRequest$ === "object");
assert(typeof MigrateWorkspaceResult$ === "object");
assert(typeof ModificationState$ === "object");
assert(typeof ModifyAccountRequest$ === "object");
assert(typeof ModifyAccountResult$ === "object");
assert(typeof ModifyCertificateBasedAuthPropertiesRequest$ === "object");
assert(typeof ModifyCertificateBasedAuthPropertiesResult$ === "object");
assert(typeof ModifyClientPropertiesRequest$ === "object");
assert(typeof ModifyClientPropertiesResult$ === "object");
assert(typeof ModifyEndpointEncryptionModeRequest$ === "object");
assert(typeof ModifyEndpointEncryptionModeResponse$ === "object");
assert(typeof ModifySamlPropertiesRequest$ === "object");
assert(typeof ModifySamlPropertiesResult$ === "object");
assert(typeof ModifySelfservicePermissionsRequest$ === "object");
assert(typeof ModifySelfservicePermissionsResult$ === "object");
assert(typeof ModifyStreamingPropertiesRequest$ === "object");
assert(typeof ModifyStreamingPropertiesResult$ === "object");
assert(typeof ModifyWorkspaceAccessPropertiesRequest$ === "object");
assert(typeof ModifyWorkspaceAccessPropertiesResult$ === "object");
assert(typeof ModifyWorkspaceCreationPropertiesRequest$ === "object");
assert(typeof ModifyWorkspaceCreationPropertiesResult$ === "object");
assert(typeof ModifyWorkspacePropertiesRequest$ === "object");
assert(typeof ModifyWorkspacePropertiesResult$ === "object");
assert(typeof ModifyWorkspaceStateRequest$ === "object");
assert(typeof ModifyWorkspaceStateResult$ === "object");
assert(typeof NetworkAccessConfiguration$ === "object");
assert(typeof OperatingSystem$ === "object");
assert(typeof PendingCreateStandbyWorkspacesRequest$ === "object");
assert(typeof RebootRequest$ === "object");
assert(typeof RebootWorkspacesRequest$ === "object");
assert(typeof RebootWorkspacesResult$ === "object");
assert(typeof RebuildRequest$ === "object");
assert(typeof RebuildWorkspacesRequest$ === "object");
assert(typeof RebuildWorkspacesResult$ === "object");
assert(typeof RegisterWorkspaceDirectoryRequest$ === "object");
assert(typeof RegisterWorkspaceDirectoryResult$ === "object");
assert(typeof RejectAccountLinkInvitationRequest$ === "object");
assert(typeof RejectAccountLinkInvitationResult$ === "object");
assert(typeof RelatedWorkspaceProperties$ === "object");
assert(typeof RestoreWorkspaceRequest$ === "object");
assert(typeof RestoreWorkspaceResult$ === "object");
assert(typeof RevokeIpRulesRequest$ === "object");
assert(typeof RevokeIpRulesResult$ === "object");
assert(typeof RootStorage$ === "object");
assert(typeof SamlProperties$ === "object");
assert(typeof SelfservicePermissions$ === "object");
assert(typeof Snapshot$ === "object");
assert(typeof StandbyWorkspace$ === "object");
assert(typeof StandbyWorkspacesProperties$ === "object");
assert(typeof StartRequest$ === "object");
assert(typeof StartWorkspacesPoolRequest$ === "object");
assert(typeof StartWorkspacesPoolResult$ === "object");
assert(typeof StartWorkspacesRequest$ === "object");
assert(typeof StartWorkspacesResult$ === "object");
assert(typeof StopRequest$ === "object");
assert(typeof StopWorkspacesPoolRequest$ === "object");
assert(typeof StopWorkspacesPoolResult$ === "object");
assert(typeof StopWorkspacesRequest$ === "object");
assert(typeof StopWorkspacesResult$ === "object");
assert(typeof StorageConnector$ === "object");
assert(typeof StreamingProperties$ === "object");
assert(typeof Tag$ === "object");
assert(typeof TerminateRequest$ === "object");
assert(typeof TerminateWorkspacesPoolRequest$ === "object");
assert(typeof TerminateWorkspacesPoolResult$ === "object");
assert(typeof TerminateWorkspacesPoolSessionRequest$ === "object");
assert(typeof TerminateWorkspacesPoolSessionResult$ === "object");
assert(typeof TerminateWorkspacesRequest$ === "object");
assert(typeof TerminateWorkspacesResult$ === "object");
assert(typeof TimeoutSettings$ === "object");
assert(typeof UpdateConnectClientAddInRequest$ === "object");
assert(typeof UpdateConnectClientAddInResult$ === "object");
assert(typeof UpdateConnectionAliasPermissionRequest$ === "object");
assert(typeof UpdateConnectionAliasPermissionResult$ === "object");
assert(typeof UpdateResult$ === "object");
assert(typeof UpdateRulesOfIpGroupRequest$ === "object");
assert(typeof UpdateRulesOfIpGroupResult$ === "object");
assert(typeof UpdateWorkspaceBundleRequest$ === "object");
assert(typeof UpdateWorkspaceBundleResult$ === "object");
assert(typeof UpdateWorkspaceImagePermissionRequest$ === "object");
assert(typeof UpdateWorkspaceImagePermissionResult$ === "object");
assert(typeof UpdateWorkspacesPoolRequest$ === "object");
assert(typeof UpdateWorkspacesPoolResult$ === "object");
assert(typeof UserSetting$ === "object");
assert(typeof UserStorage$ === "object");
assert(typeof Workspace$ === "object");
assert(typeof WorkspaceAccessProperties$ === "object");
assert(typeof WorkSpaceApplication$ === "object");
assert(typeof WorkSpaceApplicationDeployment$ === "object");
assert(typeof WorkspaceBundle$ === "object");
assert(typeof WorkspaceConnectionStatus$ === "object");
assert(typeof WorkspaceCreationProperties$ === "object");
assert(typeof WorkspaceDirectory$ === "object");
assert(typeof WorkspaceImage$ === "object");
assert(typeof WorkspaceProperties$ === "object");
assert(typeof WorkspaceRequest$ === "object");
assert(typeof WorkspaceResourceAssociation$ === "object");
assert(typeof WorkspacesIpGroup$ === "object");
assert(typeof WorkspacesPool$ === "object");
assert(typeof WorkspacesPoolError$ === "object");
assert(typeof WorkspacesPoolSession$ === "object");
// enums
assert(typeof AccessEndpointType === "object");
assert(typeof AccessPropertyValue === "object");
assert(typeof AccountLinkStatusEnum === "object");
assert(typeof AGAModeForDirectoryEnum === "object");
assert(typeof AGAModeForWorkSpaceEnum === "object");
assert(typeof AGAPreferredProtocolForDirectory === "object");
assert(typeof AGAPreferredProtocolForWorkSpace === "object");
assert(typeof Application === "object");
assert(typeof ApplicationAssociatedResourceType === "object");
assert(typeof ApplicationSettingsStatusEnum === "object");
assert(typeof AssociationErrorCode === "object");
assert(typeof AssociationState === "object");
assert(typeof AssociationStatus === "object");
assert(typeof AuthenticationType === "object");
assert(typeof BundleAssociatedResourceType === "object");
assert(typeof BundleType === "object");
assert(typeof CertificateBasedAuthStatusEnum === "object");
assert(typeof ClientDeviceType === "object");
assert(typeof Compute === "object");
assert(typeof ConnectionAliasState === "object");
assert(typeof ConnectionState === "object");
assert(typeof CustomImageProtocol === "object");
assert(typeof CustomWorkspaceImageImportState === "object");
assert(typeof DataReplication === "object");
assert(typeof DedicatedTenancyAccountType === "object");
assert(typeof DedicatedTenancyModificationStateEnum === "object");
assert(typeof DedicatedTenancySupportEnum === "object");
assert(typeof DedicatedTenancySupportResultEnum === "object");
assert(typeof DeletableCertificateBasedAuthProperty === "object");
assert(typeof DeletableSamlProperty === "object");
assert(typeof DescribeWorkspaceDirectoriesFilterName === "object");
assert(typeof DescribeWorkspacesPoolsFilterName === "object");
assert(typeof DescribeWorkspacesPoolsFilterOperator === "object");
assert(typeof EndpointEncryptionMode === "object");
assert(typeof ImageAssociatedResourceType === "object");
assert(typeof ImageComputeType === "object");
assert(typeof ImageType === "object");
assert(typeof InternetFallbackProtocol === "object");
assert(typeof LogUploadEnum === "object");
assert(typeof ModificationResourceEnum === "object");
assert(typeof ModificationStateEnum === "object");
assert(typeof OperatingSystemName === "object");
assert(typeof OperatingSystemType === "object");
assert(typeof OSVersion === "object");
assert(typeof Platform === "object");
assert(typeof PoolsRunningMode === "object");
assert(typeof Protocol === "object");
assert(typeof ReconnectEnum === "object");
assert(typeof RunningMode === "object");
assert(typeof SamlStatusEnum === "object");
assert(typeof SessionConnectionState === "object");
assert(typeof StandbyWorkspaceRelationshipType === "object");
assert(typeof StorageConnectorStatusEnum === "object");
assert(typeof StorageConnectorTypeEnum === "object");
assert(typeof StreamingExperiencePreferredProtocolEnum === "object");
assert(typeof TargetWorkspaceState === "object");
assert(typeof Tenancy === "object");
assert(typeof UserIdentityType === "object");
assert(typeof UserSettingActionEnum === "object");
assert(typeof UserSettingPermissionEnum === "object");
assert(typeof WorkSpaceApplicationLicenseType === "object");
assert(typeof WorkSpaceApplicationState === "object");
assert(typeof WorkSpaceAssociatedResourceType === "object");
assert(typeof WorkspaceBundleState === "object");
assert(typeof WorkspaceDirectoryState === "object");
assert(typeof WorkspaceDirectoryType === "object");
assert(typeof WorkspaceImageErrorDetailCode === "object");
assert(typeof WorkspaceImageIngestionProcess === "object");
assert(typeof WorkspaceImageRequiredTenancy === "object");
assert(typeof WorkspaceImageState === "object");
assert(typeof WorkspacesPoolErrorCode === "object");
assert(typeof WorkspacesPoolState === "object");
assert(typeof WorkspaceState === "object");
assert(typeof WorkspaceType === "object");
// errors
assert(AccessDeniedException.prototype instanceof WorkSpacesServiceException);
assert(typeof AccessDeniedException$ === "object");
assert(ApplicationNotSupportedException.prototype instanceof WorkSpacesServiceException);
assert(typeof ApplicationNotSupportedException$ === "object");
assert(ComputeNotCompatibleException.prototype instanceof WorkSpacesServiceException);
assert(typeof ComputeNotCompatibleException$ === "object");
assert(ConflictException.prototype instanceof WorkSpacesServiceException);
assert(typeof ConflictException$ === "object");
assert(IncompatibleApplicationsException.prototype instanceof WorkSpacesServiceException);
assert(typeof IncompatibleApplicationsException$ === "object");
assert(InternalServerException.prototype instanceof WorkSpacesServiceException);
assert(typeof InternalServerException$ === "object");
assert(InvalidParameterCombinationException.prototype instanceof WorkSpacesServiceException);
assert(typeof InvalidParameterCombinationException$ === "object");
assert(InvalidParameterValuesException.prototype instanceof WorkSpacesServiceException);
assert(typeof InvalidParameterValuesException$ === "object");
assert(InvalidResourceStateException.prototype instanceof WorkSpacesServiceException);
assert(typeof InvalidResourceStateException$ === "object");
assert(OperatingSystemNotCompatibleException.prototype instanceof WorkSpacesServiceException);
assert(typeof OperatingSystemNotCompatibleException$ === "object");
assert(OperationInProgressException.prototype instanceof WorkSpacesServiceException);
assert(typeof OperationInProgressException$ === "object");
assert(OperationNotSupportedException.prototype instanceof WorkSpacesServiceException);
assert(typeof OperationNotSupportedException$ === "object");
assert(ResourceAlreadyExistsException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceAlreadyExistsException$ === "object");
assert(ResourceAssociatedException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceAssociatedException$ === "object");
assert(ResourceCreationFailedException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceCreationFailedException$ === "object");
assert(ResourceInUseException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ResourceUnavailableException.prototype instanceof WorkSpacesServiceException);
assert(typeof ResourceUnavailableException$ === "object");
assert(UnsupportedNetworkConfigurationException.prototype instanceof WorkSpacesServiceException);
assert(typeof UnsupportedNetworkConfigurationException$ === "object");
assert(UnsupportedWorkspaceConfigurationException.prototype instanceof WorkSpacesServiceException);
assert(typeof UnsupportedWorkspaceConfigurationException$ === "object");
assert(ValidationException.prototype instanceof WorkSpacesServiceException);
assert(typeof ValidationException$ === "object");
assert(WorkspacesDefaultRoleNotFoundException.prototype instanceof WorkSpacesServiceException);
assert(typeof WorkspacesDefaultRoleNotFoundException$ === "object");
assert(WorkSpacesServiceException.prototype instanceof Error);
// paginators
assert(typeof paginateDescribeApplicationAssociations === "function");
assert(typeof paginateDescribeApplications === "function");
assert(typeof paginateDescribeWorkspaceBundles === "function");
assert(typeof paginateDescribeWorkspaceDirectories === "function");
assert(typeof paginateDescribeWorkspaces === "function");
assert(typeof paginateListAccountLinks === "function");
console.log(`WorkSpaces index test passed.`);
