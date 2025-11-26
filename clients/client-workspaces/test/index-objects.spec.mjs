import {
  AGAModeForDirectoryEnum,
  AGAModeForWorkSpaceEnum,
  AGAPreferredProtocolForDirectory,
  AGAPreferredProtocolForWorkSpace,
  AcceptAccountLinkInvitationCommand,
  AccessEndpointType,
  AccessPropertyValue,
  AccountLinkStatusEnum,
  Application,
  ApplicationAssociatedResourceType,
  ApplicationSettingsStatusEnum,
  AssociateConnectionAliasCommand,
  AssociateIpGroupsCommand,
  AssociateWorkspaceApplicationCommand,
  AssociationErrorCode,
  AssociationState,
  AssociationStatus,
  AuthenticationType,
  AuthorizeIpRulesCommand,
  BundleAssociatedResourceType,
  BundleType,
  CertificateBasedAuthStatusEnum,
  ClientDeviceType,
  Compute,
  ConnectionAliasState,
  ConnectionState,
  CopyWorkspaceImageCommand,
  CreateAccountLinkInvitationCommand,
  CreateConnectClientAddInCommand,
  CreateConnectionAliasCommand,
  CreateIpGroupCommand,
  CreateStandbyWorkspacesCommand,
  CreateTagsCommand,
  CreateUpdatedWorkspaceImageCommand,
  CreateWorkspaceBundleCommand,
  CreateWorkspaceImageCommand,
  CreateWorkspacesCommand,
  CreateWorkspacesPoolCommand,
  CustomImageProtocol,
  CustomWorkspaceImageImportState,
  DataReplication,
  DedicatedTenancyAccountType,
  DedicatedTenancyModificationStateEnum,
  DedicatedTenancySupportEnum,
  DedicatedTenancySupportResultEnum,
  DeletableCertificateBasedAuthProperty,
  DeletableSamlProperty,
  DeleteAccountLinkInvitationCommand,
  DeleteClientBrandingCommand,
  DeleteConnectClientAddInCommand,
  DeleteConnectionAliasCommand,
  DeleteIpGroupCommand,
  DeleteTagsCommand,
  DeleteWorkspaceBundleCommand,
  DeleteWorkspaceImageCommand,
  DeployWorkspaceApplicationsCommand,
  DeregisterWorkspaceDirectoryCommand,
  DescribeAccountCommand,
  DescribeAccountModificationsCommand,
  DescribeApplicationAssociationsCommand,
  DescribeApplicationsCommand,
  DescribeBundleAssociationsCommand,
  DescribeClientBrandingCommand,
  DescribeClientPropertiesCommand,
  DescribeConnectClientAddInsCommand,
  DescribeConnectionAliasPermissionsCommand,
  DescribeConnectionAliasesCommand,
  DescribeCustomWorkspaceImageImportCommand,
  DescribeImageAssociationsCommand,
  DescribeIpGroupsCommand,
  DescribeTagsCommand,
  DescribeWorkspaceAssociationsCommand,
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesFilterName,
  DescribeWorkspaceImagePermissionsCommand,
  DescribeWorkspaceImagesCommand,
  DescribeWorkspaceSnapshotsCommand,
  DescribeWorkspacesCommand,
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspacesPoolSessionsCommand,
  DescribeWorkspacesPoolsCommand,
  DescribeWorkspacesPoolsFilterName,
  DescribeWorkspacesPoolsFilterOperator,
  DisassociateConnectionAliasCommand,
  DisassociateIpGroupsCommand,
  DisassociateWorkspaceApplicationCommand,
  EndpointEncryptionMode,
  GetAccountLinkCommand,
  ImageAssociatedResourceType,
  ImageComputeType,
  ImageType,
  ImportClientBrandingCommand,
  ImportCustomWorkspaceImageCommand,
  ImportWorkspaceImageCommand,
  InternetFallbackProtocol,
  ListAccountLinksCommand,
  ListAvailableManagementCidrRangesCommand,
  LogUploadEnum,
  MigrateWorkspaceCommand,
  ModificationResourceEnum,
  ModificationStateEnum,
  ModifyAccountCommand,
  ModifyCertificateBasedAuthPropertiesCommand,
  ModifyClientPropertiesCommand,
  ModifyEndpointEncryptionModeCommand,
  ModifySamlPropertiesCommand,
  ModifySelfservicePermissionsCommand,
  ModifyStreamingPropertiesCommand,
  ModifyWorkspaceAccessPropertiesCommand,
  ModifyWorkspaceCreationPropertiesCommand,
  ModifyWorkspacePropertiesCommand,
  ModifyWorkspaceStateCommand,
  OSVersion,
  OperatingSystemName,
  OperatingSystemType,
  Platform,
  PoolsRunningMode,
  Protocol,
  RebootWorkspacesCommand,
  RebuildWorkspacesCommand,
  ReconnectEnum,
  RegisterWorkspaceDirectoryCommand,
  RejectAccountLinkInvitationCommand,
  RestoreWorkspaceCommand,
  RevokeIpRulesCommand,
  RunningMode,
  SamlStatusEnum,
  SessionConnectionState,
  StandbyWorkspaceRelationshipType,
  StartWorkspacesCommand,
  StartWorkspacesPoolCommand,
  StopWorkspacesCommand,
  StopWorkspacesPoolCommand,
  StorageConnectorStatusEnum,
  StorageConnectorTypeEnum,
  StreamingExperiencePreferredProtocolEnum,
  TargetWorkspaceState,
  Tenancy,
  TerminateWorkspacesCommand,
  TerminateWorkspacesPoolCommand,
  TerminateWorkspacesPoolSessionCommand,
  UpdateConnectClientAddInCommand,
  UpdateConnectionAliasPermissionCommand,
  UpdateRulesOfIpGroupCommand,
  UpdateWorkspaceBundleCommand,
  UpdateWorkspaceImagePermissionCommand,
  UpdateWorkspacesPoolCommand,
  UserIdentityType,
  UserSettingActionEnum,
  UserSettingPermissionEnum,
  WorkSpaceApplicationLicenseType,
  WorkSpaceApplicationState,
  WorkSpaceAssociatedResourceType,
  WorkSpaces,
  WorkSpacesClient,
  WorkSpacesServiceException,
  WorkspaceBundleState,
  WorkspaceDirectoryState,
  WorkspaceDirectoryType,
  WorkspaceImageErrorDetailCode,
  WorkspaceImageIngestionProcess,
  WorkspaceImageRequiredTenancy,
  WorkspaceImageState,
  WorkspaceState,
  WorkspaceType,
  WorkspacesPoolErrorCode,
  WorkspacesPoolState,
  paginateDescribeApplicationAssociations,
  paginateDescribeApplications,
  paginateDescribeWorkspaceBundles,
  paginateDescribeWorkspaceDirectories,
  paginateDescribeWorkspaces,
  paginateListAccountLinks,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof WorkSpacesClient === "function")
assert(typeof WorkSpaces === "function")
// commands
assert(typeof AcceptAccountLinkInvitationCommand === "function")
assert(typeof AssociateConnectionAliasCommand === "function")
assert(typeof AssociateIpGroupsCommand === "function")
assert(typeof AssociateWorkspaceApplicationCommand === "function")
assert(typeof AuthorizeIpRulesCommand === "function")
assert(typeof CopyWorkspaceImageCommand === "function")
assert(typeof CreateAccountLinkInvitationCommand === "function")
assert(typeof CreateConnectClientAddInCommand === "function")
assert(typeof CreateConnectionAliasCommand === "function")
assert(typeof CreateIpGroupCommand === "function")
assert(typeof CreateStandbyWorkspacesCommand === "function")
assert(typeof CreateTagsCommand === "function")
assert(typeof CreateUpdatedWorkspaceImageCommand === "function")
assert(typeof CreateWorkspaceBundleCommand === "function")
assert(typeof CreateWorkspaceImageCommand === "function")
assert(typeof CreateWorkspacesCommand === "function")
assert(typeof CreateWorkspacesPoolCommand === "function")
assert(typeof DeleteAccountLinkInvitationCommand === "function")
assert(typeof DeleteClientBrandingCommand === "function")
assert(typeof DeleteConnectClientAddInCommand === "function")
assert(typeof DeleteConnectionAliasCommand === "function")
assert(typeof DeleteIpGroupCommand === "function")
assert(typeof DeleteTagsCommand === "function")
assert(typeof DeleteWorkspaceBundleCommand === "function")
assert(typeof DeleteWorkspaceImageCommand === "function")
assert(typeof DeployWorkspaceApplicationsCommand === "function")
assert(typeof DeregisterWorkspaceDirectoryCommand === "function")
assert(typeof DescribeAccountCommand === "function")
assert(typeof DescribeAccountModificationsCommand === "function")
assert(typeof DescribeApplicationAssociationsCommand === "function")
assert(typeof DescribeApplicationsCommand === "function")
assert(typeof DescribeBundleAssociationsCommand === "function")
assert(typeof DescribeClientBrandingCommand === "function")
assert(typeof DescribeClientPropertiesCommand === "function")
assert(typeof DescribeConnectClientAddInsCommand === "function")
assert(typeof DescribeConnectionAliasesCommand === "function")
assert(typeof DescribeConnectionAliasPermissionsCommand === "function")
assert(typeof DescribeCustomWorkspaceImageImportCommand === "function")
assert(typeof DescribeImageAssociationsCommand === "function")
assert(typeof DescribeIpGroupsCommand === "function")
assert(typeof DescribeTagsCommand === "function")
assert(typeof DescribeWorkspaceAssociationsCommand === "function")
assert(typeof DescribeWorkspaceBundlesCommand === "function")
assert(typeof DescribeWorkspaceDirectoriesCommand === "function")
assert(typeof DescribeWorkspaceImagePermissionsCommand === "function")
assert(typeof DescribeWorkspaceImagesCommand === "function")
assert(typeof DescribeWorkspacesCommand === "function")
assert(typeof DescribeWorkspacesConnectionStatusCommand === "function")
assert(typeof DescribeWorkspaceSnapshotsCommand === "function")
assert(typeof DescribeWorkspacesPoolsCommand === "function")
assert(typeof DescribeWorkspacesPoolSessionsCommand === "function")
assert(typeof DisassociateConnectionAliasCommand === "function")
assert(typeof DisassociateIpGroupsCommand === "function")
assert(typeof DisassociateWorkspaceApplicationCommand === "function")
assert(typeof GetAccountLinkCommand === "function")
assert(typeof ImportClientBrandingCommand === "function")
assert(typeof ImportCustomWorkspaceImageCommand === "function")
assert(typeof ImportWorkspaceImageCommand === "function")
assert(typeof ListAccountLinksCommand === "function")
assert(typeof ListAvailableManagementCidrRangesCommand === "function")
assert(typeof MigrateWorkspaceCommand === "function")
assert(typeof ModifyAccountCommand === "function")
assert(typeof ModifyCertificateBasedAuthPropertiesCommand === "function")
assert(typeof ModifyClientPropertiesCommand === "function")
assert(typeof ModifyEndpointEncryptionModeCommand === "function")
assert(typeof ModifySamlPropertiesCommand === "function")
assert(typeof ModifySelfservicePermissionsCommand === "function")
assert(typeof ModifyStreamingPropertiesCommand === "function")
assert(typeof ModifyWorkspaceAccessPropertiesCommand === "function")
assert(typeof ModifyWorkspaceCreationPropertiesCommand === "function")
assert(typeof ModifyWorkspacePropertiesCommand === "function")
assert(typeof ModifyWorkspaceStateCommand === "function")
assert(typeof RebootWorkspacesCommand === "function")
assert(typeof RebuildWorkspacesCommand === "function")
assert(typeof RegisterWorkspaceDirectoryCommand === "function")
assert(typeof RejectAccountLinkInvitationCommand === "function")
assert(typeof RestoreWorkspaceCommand === "function")
assert(typeof RevokeIpRulesCommand === "function")
assert(typeof StartWorkspacesCommand === "function")
assert(typeof StartWorkspacesPoolCommand === "function")
assert(typeof StopWorkspacesCommand === "function")
assert(typeof StopWorkspacesPoolCommand === "function")
assert(typeof TerminateWorkspacesCommand === "function")
assert(typeof TerminateWorkspacesPoolCommand === "function")
assert(typeof TerminateWorkspacesPoolSessionCommand === "function")
assert(typeof UpdateConnectClientAddInCommand === "function")
assert(typeof UpdateConnectionAliasPermissionCommand === "function")
assert(typeof UpdateRulesOfIpGroupCommand === "function")
assert(typeof UpdateWorkspaceBundleCommand === "function")
assert(typeof UpdateWorkspaceImagePermissionCommand === "function")
assert(typeof UpdateWorkspacesPoolCommand === "function")
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
assert(WorkSpacesServiceException.prototype instanceof Error)
// paginators
assert(typeof paginateDescribeApplicationAssociations === "function")
assert(typeof paginateDescribeApplications === "function")
assert(typeof paginateDescribeWorkspaceBundles === "function")
assert(typeof paginateDescribeWorkspaceDirectories === "function")
assert(typeof paginateDescribeWorkspaces === "function")
assert(typeof paginateListAccountLinks === "function")
console.log(`WorkSpaces index test passed.`);
