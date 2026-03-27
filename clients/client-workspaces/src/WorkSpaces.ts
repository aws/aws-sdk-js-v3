// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type AcceptAccountLinkInvitationCommandInput,
  type AcceptAccountLinkInvitationCommandOutput,
  AcceptAccountLinkInvitationCommand,
} from "./commands/AcceptAccountLinkInvitationCommand";
import {
  type AssociateConnectionAliasCommandInput,
  type AssociateConnectionAliasCommandOutput,
  AssociateConnectionAliasCommand,
} from "./commands/AssociateConnectionAliasCommand";
import {
  type AssociateIpGroupsCommandInput,
  type AssociateIpGroupsCommandOutput,
  AssociateIpGroupsCommand,
} from "./commands/AssociateIpGroupsCommand";
import {
  type AssociateWorkspaceApplicationCommandInput,
  type AssociateWorkspaceApplicationCommandOutput,
  AssociateWorkspaceApplicationCommand,
} from "./commands/AssociateWorkspaceApplicationCommand";
import {
  type AuthorizeIpRulesCommandInput,
  type AuthorizeIpRulesCommandOutput,
  AuthorizeIpRulesCommand,
} from "./commands/AuthorizeIpRulesCommand";
import {
  type CopyWorkspaceImageCommandInput,
  type CopyWorkspaceImageCommandOutput,
  CopyWorkspaceImageCommand,
} from "./commands/CopyWorkspaceImageCommand";
import {
  type CreateAccountLinkInvitationCommandInput,
  type CreateAccountLinkInvitationCommandOutput,
  CreateAccountLinkInvitationCommand,
} from "./commands/CreateAccountLinkInvitationCommand";
import {
  type CreateConnectClientAddInCommandInput,
  type CreateConnectClientAddInCommandOutput,
  CreateConnectClientAddInCommand,
} from "./commands/CreateConnectClientAddInCommand";
import {
  type CreateConnectionAliasCommandInput,
  type CreateConnectionAliasCommandOutput,
  CreateConnectionAliasCommand,
} from "./commands/CreateConnectionAliasCommand";
import {
  type CreateIpGroupCommandInput,
  type CreateIpGroupCommandOutput,
  CreateIpGroupCommand,
} from "./commands/CreateIpGroupCommand";
import {
  type CreateStandbyWorkspacesCommandInput,
  type CreateStandbyWorkspacesCommandOutput,
  CreateStandbyWorkspacesCommand,
} from "./commands/CreateStandbyWorkspacesCommand";
import {
  type CreateTagsCommandInput,
  type CreateTagsCommandOutput,
  CreateTagsCommand,
} from "./commands/CreateTagsCommand";
import {
  type CreateUpdatedWorkspaceImageCommandInput,
  type CreateUpdatedWorkspaceImageCommandOutput,
  CreateUpdatedWorkspaceImageCommand,
} from "./commands/CreateUpdatedWorkspaceImageCommand";
import {
  type CreateWorkspaceBundleCommandInput,
  type CreateWorkspaceBundleCommandOutput,
  CreateWorkspaceBundleCommand,
} from "./commands/CreateWorkspaceBundleCommand";
import {
  type CreateWorkspaceImageCommandInput,
  type CreateWorkspaceImageCommandOutput,
  CreateWorkspaceImageCommand,
} from "./commands/CreateWorkspaceImageCommand";
import {
  type CreateWorkspacesCommandInput,
  type CreateWorkspacesCommandOutput,
  CreateWorkspacesCommand,
} from "./commands/CreateWorkspacesCommand";
import {
  type CreateWorkspacesPoolCommandInput,
  type CreateWorkspacesPoolCommandOutput,
  CreateWorkspacesPoolCommand,
} from "./commands/CreateWorkspacesPoolCommand";
import {
  type DeleteAccountLinkInvitationCommandInput,
  type DeleteAccountLinkInvitationCommandOutput,
  DeleteAccountLinkInvitationCommand,
} from "./commands/DeleteAccountLinkInvitationCommand";
import {
  type DeleteClientBrandingCommandInput,
  type DeleteClientBrandingCommandOutput,
  DeleteClientBrandingCommand,
} from "./commands/DeleteClientBrandingCommand";
import {
  type DeleteConnectClientAddInCommandInput,
  type DeleteConnectClientAddInCommandOutput,
  DeleteConnectClientAddInCommand,
} from "./commands/DeleteConnectClientAddInCommand";
import {
  type DeleteConnectionAliasCommandInput,
  type DeleteConnectionAliasCommandOutput,
  DeleteConnectionAliasCommand,
} from "./commands/DeleteConnectionAliasCommand";
import {
  type DeleteIpGroupCommandInput,
  type DeleteIpGroupCommandOutput,
  DeleteIpGroupCommand,
} from "./commands/DeleteIpGroupCommand";
import {
  type DeleteTagsCommandInput,
  type DeleteTagsCommandOutput,
  DeleteTagsCommand,
} from "./commands/DeleteTagsCommand";
import {
  type DeleteWorkspaceBundleCommandInput,
  type DeleteWorkspaceBundleCommandOutput,
  DeleteWorkspaceBundleCommand,
} from "./commands/DeleteWorkspaceBundleCommand";
import {
  type DeleteWorkspaceImageCommandInput,
  type DeleteWorkspaceImageCommandOutput,
  DeleteWorkspaceImageCommand,
} from "./commands/DeleteWorkspaceImageCommand";
import {
  type DeployWorkspaceApplicationsCommandInput,
  type DeployWorkspaceApplicationsCommandOutput,
  DeployWorkspaceApplicationsCommand,
} from "./commands/DeployWorkspaceApplicationsCommand";
import {
  type DeregisterWorkspaceDirectoryCommandInput,
  type DeregisterWorkspaceDirectoryCommandOutput,
  DeregisterWorkspaceDirectoryCommand,
} from "./commands/DeregisterWorkspaceDirectoryCommand";
import {
  type DescribeAccountCommandInput,
  type DescribeAccountCommandOutput,
  DescribeAccountCommand,
} from "./commands/DescribeAccountCommand";
import {
  type DescribeAccountModificationsCommandInput,
  type DescribeAccountModificationsCommandOutput,
  DescribeAccountModificationsCommand,
} from "./commands/DescribeAccountModificationsCommand";
import {
  type DescribeApplicationAssociationsCommandInput,
  type DescribeApplicationAssociationsCommandOutput,
  DescribeApplicationAssociationsCommand,
} from "./commands/DescribeApplicationAssociationsCommand";
import {
  type DescribeApplicationsCommandInput,
  type DescribeApplicationsCommandOutput,
  DescribeApplicationsCommand,
} from "./commands/DescribeApplicationsCommand";
import {
  type DescribeBundleAssociationsCommandInput,
  type DescribeBundleAssociationsCommandOutput,
  DescribeBundleAssociationsCommand,
} from "./commands/DescribeBundleAssociationsCommand";
import {
  type DescribeClientBrandingCommandInput,
  type DescribeClientBrandingCommandOutput,
  DescribeClientBrandingCommand,
} from "./commands/DescribeClientBrandingCommand";
import {
  type DescribeClientPropertiesCommandInput,
  type DescribeClientPropertiesCommandOutput,
  DescribeClientPropertiesCommand,
} from "./commands/DescribeClientPropertiesCommand";
import {
  type DescribeConnectClientAddInsCommandInput,
  type DescribeConnectClientAddInsCommandOutput,
  DescribeConnectClientAddInsCommand,
} from "./commands/DescribeConnectClientAddInsCommand";
import {
  type DescribeConnectionAliasesCommandInput,
  type DescribeConnectionAliasesCommandOutput,
  DescribeConnectionAliasesCommand,
} from "./commands/DescribeConnectionAliasesCommand";
import {
  type DescribeConnectionAliasPermissionsCommandInput,
  type DescribeConnectionAliasPermissionsCommandOutput,
  DescribeConnectionAliasPermissionsCommand,
} from "./commands/DescribeConnectionAliasPermissionsCommand";
import {
  type DescribeCustomWorkspaceImageImportCommandInput,
  type DescribeCustomWorkspaceImageImportCommandOutput,
  DescribeCustomWorkspaceImageImportCommand,
} from "./commands/DescribeCustomWorkspaceImageImportCommand";
import {
  type DescribeImageAssociationsCommandInput,
  type DescribeImageAssociationsCommandOutput,
  DescribeImageAssociationsCommand,
} from "./commands/DescribeImageAssociationsCommand";
import {
  type DescribeIpGroupsCommandInput,
  type DescribeIpGroupsCommandOutput,
  DescribeIpGroupsCommand,
} from "./commands/DescribeIpGroupsCommand";
import {
  type DescribeTagsCommandInput,
  type DescribeTagsCommandOutput,
  DescribeTagsCommand,
} from "./commands/DescribeTagsCommand";
import {
  type DescribeWorkspaceAssociationsCommandInput,
  type DescribeWorkspaceAssociationsCommandOutput,
  DescribeWorkspaceAssociationsCommand,
} from "./commands/DescribeWorkspaceAssociationsCommand";
import {
  type DescribeWorkspaceBundlesCommandInput,
  type DescribeWorkspaceBundlesCommandOutput,
  DescribeWorkspaceBundlesCommand,
} from "./commands/DescribeWorkspaceBundlesCommand";
import {
  type DescribeWorkspaceDirectoriesCommandInput,
  type DescribeWorkspaceDirectoriesCommandOutput,
  DescribeWorkspaceDirectoriesCommand,
} from "./commands/DescribeWorkspaceDirectoriesCommand";
import {
  type DescribeWorkspaceImagePermissionsCommandInput,
  type DescribeWorkspaceImagePermissionsCommandOutput,
  DescribeWorkspaceImagePermissionsCommand,
} from "./commands/DescribeWorkspaceImagePermissionsCommand";
import {
  type DescribeWorkspaceImagesCommandInput,
  type DescribeWorkspaceImagesCommandOutput,
  DescribeWorkspaceImagesCommand,
} from "./commands/DescribeWorkspaceImagesCommand";
import {
  type DescribeWorkspacesCommandInput,
  type DescribeWorkspacesCommandOutput,
  DescribeWorkspacesCommand,
} from "./commands/DescribeWorkspacesCommand";
import {
  type DescribeWorkspacesConnectionStatusCommandInput,
  type DescribeWorkspacesConnectionStatusCommandOutput,
  DescribeWorkspacesConnectionStatusCommand,
} from "./commands/DescribeWorkspacesConnectionStatusCommand";
import {
  type DescribeWorkspaceSnapshotsCommandInput,
  type DescribeWorkspaceSnapshotsCommandOutput,
  DescribeWorkspaceSnapshotsCommand,
} from "./commands/DescribeWorkspaceSnapshotsCommand";
import {
  type DescribeWorkspacesPoolsCommandInput,
  type DescribeWorkspacesPoolsCommandOutput,
  DescribeWorkspacesPoolsCommand,
} from "./commands/DescribeWorkspacesPoolsCommand";
import {
  type DescribeWorkspacesPoolSessionsCommandInput,
  type DescribeWorkspacesPoolSessionsCommandOutput,
  DescribeWorkspacesPoolSessionsCommand,
} from "./commands/DescribeWorkspacesPoolSessionsCommand";
import {
  type DisassociateConnectionAliasCommandInput,
  type DisassociateConnectionAliasCommandOutput,
  DisassociateConnectionAliasCommand,
} from "./commands/DisassociateConnectionAliasCommand";
import {
  type DisassociateIpGroupsCommandInput,
  type DisassociateIpGroupsCommandOutput,
  DisassociateIpGroupsCommand,
} from "./commands/DisassociateIpGroupsCommand";
import {
  type DisassociateWorkspaceApplicationCommandInput,
  type DisassociateWorkspaceApplicationCommandOutput,
  DisassociateWorkspaceApplicationCommand,
} from "./commands/DisassociateWorkspaceApplicationCommand";
import {
  type GetAccountLinkCommandInput,
  type GetAccountLinkCommandOutput,
  GetAccountLinkCommand,
} from "./commands/GetAccountLinkCommand";
import {
  type ImportClientBrandingCommandInput,
  type ImportClientBrandingCommandOutput,
  ImportClientBrandingCommand,
} from "./commands/ImportClientBrandingCommand";
import {
  type ImportCustomWorkspaceImageCommandInput,
  type ImportCustomWorkspaceImageCommandOutput,
  ImportCustomWorkspaceImageCommand,
} from "./commands/ImportCustomWorkspaceImageCommand";
import {
  type ImportWorkspaceImageCommandInput,
  type ImportWorkspaceImageCommandOutput,
  ImportWorkspaceImageCommand,
} from "./commands/ImportWorkspaceImageCommand";
import {
  type ListAccountLinksCommandInput,
  type ListAccountLinksCommandOutput,
  ListAccountLinksCommand,
} from "./commands/ListAccountLinksCommand";
import {
  type ListAvailableManagementCidrRangesCommandInput,
  type ListAvailableManagementCidrRangesCommandOutput,
  ListAvailableManagementCidrRangesCommand,
} from "./commands/ListAvailableManagementCidrRangesCommand";
import {
  type MigrateWorkspaceCommandInput,
  type MigrateWorkspaceCommandOutput,
  MigrateWorkspaceCommand,
} from "./commands/MigrateWorkspaceCommand";
import {
  type ModifyAccountCommandInput,
  type ModifyAccountCommandOutput,
  ModifyAccountCommand,
} from "./commands/ModifyAccountCommand";
import {
  type ModifyCertificateBasedAuthPropertiesCommandInput,
  type ModifyCertificateBasedAuthPropertiesCommandOutput,
  ModifyCertificateBasedAuthPropertiesCommand,
} from "./commands/ModifyCertificateBasedAuthPropertiesCommand";
import {
  type ModifyClientPropertiesCommandInput,
  type ModifyClientPropertiesCommandOutput,
  ModifyClientPropertiesCommand,
} from "./commands/ModifyClientPropertiesCommand";
import {
  type ModifyEndpointEncryptionModeCommandInput,
  type ModifyEndpointEncryptionModeCommandOutput,
  ModifyEndpointEncryptionModeCommand,
} from "./commands/ModifyEndpointEncryptionModeCommand";
import {
  type ModifySamlPropertiesCommandInput,
  type ModifySamlPropertiesCommandOutput,
  ModifySamlPropertiesCommand,
} from "./commands/ModifySamlPropertiesCommand";
import {
  type ModifySelfservicePermissionsCommandInput,
  type ModifySelfservicePermissionsCommandOutput,
  ModifySelfservicePermissionsCommand,
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  type ModifyStreamingPropertiesCommandInput,
  type ModifyStreamingPropertiesCommandOutput,
  ModifyStreamingPropertiesCommand,
} from "./commands/ModifyStreamingPropertiesCommand";
import {
  type ModifyWorkspaceAccessPropertiesCommandInput,
  type ModifyWorkspaceAccessPropertiesCommandOutput,
  ModifyWorkspaceAccessPropertiesCommand,
} from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  type ModifyWorkspaceCreationPropertiesCommandInput,
  type ModifyWorkspaceCreationPropertiesCommandOutput,
  ModifyWorkspaceCreationPropertiesCommand,
} from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  type ModifyWorkspacePropertiesCommandInput,
  type ModifyWorkspacePropertiesCommandOutput,
  ModifyWorkspacePropertiesCommand,
} from "./commands/ModifyWorkspacePropertiesCommand";
import {
  type ModifyWorkspaceStateCommandInput,
  type ModifyWorkspaceStateCommandOutput,
  ModifyWorkspaceStateCommand,
} from "./commands/ModifyWorkspaceStateCommand";
import {
  type RebootWorkspacesCommandInput,
  type RebootWorkspacesCommandOutput,
  RebootWorkspacesCommand,
} from "./commands/RebootWorkspacesCommand";
import {
  type RebuildWorkspacesCommandInput,
  type RebuildWorkspacesCommandOutput,
  RebuildWorkspacesCommand,
} from "./commands/RebuildWorkspacesCommand";
import {
  type RegisterWorkspaceDirectoryCommandInput,
  type RegisterWorkspaceDirectoryCommandOutput,
  RegisterWorkspaceDirectoryCommand,
} from "./commands/RegisterWorkspaceDirectoryCommand";
import {
  type RejectAccountLinkInvitationCommandInput,
  type RejectAccountLinkInvitationCommandOutput,
  RejectAccountLinkInvitationCommand,
} from "./commands/RejectAccountLinkInvitationCommand";
import {
  type RestoreWorkspaceCommandInput,
  type RestoreWorkspaceCommandOutput,
  RestoreWorkspaceCommand,
} from "./commands/RestoreWorkspaceCommand";
import {
  type RevokeIpRulesCommandInput,
  type RevokeIpRulesCommandOutput,
  RevokeIpRulesCommand,
} from "./commands/RevokeIpRulesCommand";
import {
  type StartWorkspacesCommandInput,
  type StartWorkspacesCommandOutput,
  StartWorkspacesCommand,
} from "./commands/StartWorkspacesCommand";
import {
  type StartWorkspacesPoolCommandInput,
  type StartWorkspacesPoolCommandOutput,
  StartWorkspacesPoolCommand,
} from "./commands/StartWorkspacesPoolCommand";
import {
  type StopWorkspacesCommandInput,
  type StopWorkspacesCommandOutput,
  StopWorkspacesCommand,
} from "./commands/StopWorkspacesCommand";
import {
  type StopWorkspacesPoolCommandInput,
  type StopWorkspacesPoolCommandOutput,
  StopWorkspacesPoolCommand,
} from "./commands/StopWorkspacesPoolCommand";
import {
  type TerminateWorkspacesCommandInput,
  type TerminateWorkspacesCommandOutput,
  TerminateWorkspacesCommand,
} from "./commands/TerminateWorkspacesCommand";
import {
  type TerminateWorkspacesPoolCommandInput,
  type TerminateWorkspacesPoolCommandOutput,
  TerminateWorkspacesPoolCommand,
} from "./commands/TerminateWorkspacesPoolCommand";
import {
  type TerminateWorkspacesPoolSessionCommandInput,
  type TerminateWorkspacesPoolSessionCommandOutput,
  TerminateWorkspacesPoolSessionCommand,
} from "./commands/TerminateWorkspacesPoolSessionCommand";
import {
  type UpdateConnectClientAddInCommandInput,
  type UpdateConnectClientAddInCommandOutput,
  UpdateConnectClientAddInCommand,
} from "./commands/UpdateConnectClientAddInCommand";
import {
  type UpdateConnectionAliasPermissionCommandInput,
  type UpdateConnectionAliasPermissionCommandOutput,
  UpdateConnectionAliasPermissionCommand,
} from "./commands/UpdateConnectionAliasPermissionCommand";
import {
  type UpdateRulesOfIpGroupCommandInput,
  type UpdateRulesOfIpGroupCommandOutput,
  UpdateRulesOfIpGroupCommand,
} from "./commands/UpdateRulesOfIpGroupCommand";
import {
  type UpdateWorkspaceBundleCommandInput,
  type UpdateWorkspaceBundleCommandOutput,
  UpdateWorkspaceBundleCommand,
} from "./commands/UpdateWorkspaceBundleCommand";
import {
  type UpdateWorkspaceImagePermissionCommandInput,
  type UpdateWorkspaceImagePermissionCommandOutput,
  UpdateWorkspaceImagePermissionCommand,
} from "./commands/UpdateWorkspaceImagePermissionCommand";
import {
  type UpdateWorkspacesPoolCommandInput,
  type UpdateWorkspacesPoolCommandOutput,
  UpdateWorkspacesPoolCommand,
} from "./commands/UpdateWorkspacesPoolCommand";
import { paginateDescribeApplicationAssociations } from "./pagination/DescribeApplicationAssociationsPaginator";
import { paginateDescribeApplications } from "./pagination/DescribeApplicationsPaginator";
import { paginateDescribeWorkspaceBundles } from "./pagination/DescribeWorkspaceBundlesPaginator";
import { paginateDescribeWorkspaceDirectories } from "./pagination/DescribeWorkspaceDirectoriesPaginator";
import { paginateDescribeWorkspaces } from "./pagination/DescribeWorkspacesPaginator";
import { paginateListAccountLinks } from "./pagination/ListAccountLinksPaginator";
import { WorkSpacesClient } from "./WorkSpacesClient";

const commands = {
  AcceptAccountLinkInvitationCommand,
  AssociateConnectionAliasCommand,
  AssociateIpGroupsCommand,
  AssociateWorkspaceApplicationCommand,
  AuthorizeIpRulesCommand,
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
  DescribeConnectionAliasesCommand,
  DescribeConnectionAliasPermissionsCommand,
  DescribeCustomWorkspaceImageImportCommand,
  DescribeImageAssociationsCommand,
  DescribeIpGroupsCommand,
  DescribeTagsCommand,
  DescribeWorkspaceAssociationsCommand,
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceImagePermissionsCommand,
  DescribeWorkspaceImagesCommand,
  DescribeWorkspacesCommand,
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspaceSnapshotsCommand,
  DescribeWorkspacesPoolsCommand,
  DescribeWorkspacesPoolSessionsCommand,
  DisassociateConnectionAliasCommand,
  DisassociateIpGroupsCommand,
  DisassociateWorkspaceApplicationCommand,
  GetAccountLinkCommand,
  ImportClientBrandingCommand,
  ImportCustomWorkspaceImageCommand,
  ImportWorkspaceImageCommand,
  ListAccountLinksCommand,
  ListAvailableManagementCidrRangesCommand,
  MigrateWorkspaceCommand,
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
  RebootWorkspacesCommand,
  RebuildWorkspacesCommand,
  RegisterWorkspaceDirectoryCommand,
  RejectAccountLinkInvitationCommand,
  RestoreWorkspaceCommand,
  RevokeIpRulesCommand,
  StartWorkspacesCommand,
  StartWorkspacesPoolCommand,
  StopWorkspacesCommand,
  StopWorkspacesPoolCommand,
  TerminateWorkspacesCommand,
  TerminateWorkspacesPoolCommand,
  TerminateWorkspacesPoolSessionCommand,
  UpdateConnectClientAddInCommand,
  UpdateConnectionAliasPermissionCommand,
  UpdateRulesOfIpGroupCommand,
  UpdateWorkspaceBundleCommand,
  UpdateWorkspaceImagePermissionCommand,
  UpdateWorkspacesPoolCommand,
};
const paginators = {
  paginateDescribeApplicationAssociations,
  paginateDescribeApplications,
  paginateDescribeWorkspaceBundles,
  paginateDescribeWorkspaceDirectories,
  paginateDescribeWorkspaces,
  paginateListAccountLinks,
};

export interface WorkSpaces {
  /**
   * @see {@link AcceptAccountLinkInvitationCommand}
   */
  acceptAccountLinkInvitation(
    args: AcceptAccountLinkInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptAccountLinkInvitationCommandOutput>;
  acceptAccountLinkInvitation(
    args: AcceptAccountLinkInvitationCommandInput,
    cb: (err: any, data?: AcceptAccountLinkInvitationCommandOutput) => void
  ): void;
  acceptAccountLinkInvitation(
    args: AcceptAccountLinkInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptAccountLinkInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateConnectionAliasCommand}
   */
  associateConnectionAlias(
    args: AssociateConnectionAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateConnectionAliasCommandOutput>;
  associateConnectionAlias(
    args: AssociateConnectionAliasCommandInput,
    cb: (err: any, data?: AssociateConnectionAliasCommandOutput) => void
  ): void;
  associateConnectionAlias(
    args: AssociateConnectionAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateConnectionAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateIpGroupsCommand}
   */
  associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIpGroupsCommandOutput>;
  associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void
  ): void;
  associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link AssociateWorkspaceApplicationCommand}
   */
  associateWorkspaceApplication(
    args: AssociateWorkspaceApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateWorkspaceApplicationCommandOutput>;
  associateWorkspaceApplication(
    args: AssociateWorkspaceApplicationCommandInput,
    cb: (err: any, data?: AssociateWorkspaceApplicationCommandOutput) => void
  ): void;
  associateWorkspaceApplication(
    args: AssociateWorkspaceApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateWorkspaceApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link AuthorizeIpRulesCommand}
   */
  authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeIpRulesCommandOutput>;
  authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void
  ): void;
  authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link CopyWorkspaceImageCommand}
   */
  copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyWorkspaceImageCommandOutput>;
  copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void
  ): void;
  copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateAccountLinkInvitationCommand}
   */
  createAccountLinkInvitation(
    args: CreateAccountLinkInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccountLinkInvitationCommandOutput>;
  createAccountLinkInvitation(
    args: CreateAccountLinkInvitationCommandInput,
    cb: (err: any, data?: CreateAccountLinkInvitationCommandOutput) => void
  ): void;
  createAccountLinkInvitation(
    args: CreateAccountLinkInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccountLinkInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectClientAddInCommand}
   */
  createConnectClientAddIn(
    args: CreateConnectClientAddInCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectClientAddInCommandOutput>;
  createConnectClientAddIn(
    args: CreateConnectClientAddInCommandInput,
    cb: (err: any, data?: CreateConnectClientAddInCommandOutput) => void
  ): void;
  createConnectClientAddIn(
    args: CreateConnectClientAddInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectClientAddInCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConnectionAliasCommand}
   */
  createConnectionAlias(
    args: CreateConnectionAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateConnectionAliasCommandOutput>;
  createConnectionAlias(
    args: CreateConnectionAliasCommandInput,
    cb: (err: any, data?: CreateConnectionAliasCommandOutput) => void
  ): void;
  createConnectionAlias(
    args: CreateConnectionAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConnectionAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateIpGroupCommand}
   */
  createIpGroup(
    args: CreateIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpGroupCommandOutput>;
  createIpGroup(
    args: CreateIpGroupCommandInput,
    cb: (err: any, data?: CreateIpGroupCommandOutput) => void
  ): void;
  createIpGroup(
    args: CreateIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStandbyWorkspacesCommand}
   */
  createStandbyWorkspaces(
    args: CreateStandbyWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStandbyWorkspacesCommandOutput>;
  createStandbyWorkspaces(
    args: CreateStandbyWorkspacesCommandInput,
    cb: (err: any, data?: CreateStandbyWorkspacesCommandOutput) => void
  ): void;
  createStandbyWorkspaces(
    args: CreateStandbyWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStandbyWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateTagsCommand}
   */
  createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateUpdatedWorkspaceImageCommand}
   */
  createUpdatedWorkspaceImage(
    args: CreateUpdatedWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateUpdatedWorkspaceImageCommandOutput>;
  createUpdatedWorkspaceImage(
    args: CreateUpdatedWorkspaceImageCommandInput,
    cb: (err: any, data?: CreateUpdatedWorkspaceImageCommandOutput) => void
  ): void;
  createUpdatedWorkspaceImage(
    args: CreateUpdatedWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUpdatedWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceBundleCommand}
   */
  createWorkspaceBundle(
    args: CreateWorkspaceBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceBundleCommandOutput>;
  createWorkspaceBundle(
    args: CreateWorkspaceBundleCommandInput,
    cb: (err: any, data?: CreateWorkspaceBundleCommandOutput) => void
  ): void;
  createWorkspaceBundle(
    args: CreateWorkspaceBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspaceImageCommand}
   */
  createWorkspaceImage(
    args: CreateWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspaceImageCommandOutput>;
  createWorkspaceImage(
    args: CreateWorkspaceImageCommandInput,
    cb: (err: any, data?: CreateWorkspaceImageCommandOutput) => void
  ): void;
  createWorkspaceImage(
    args: CreateWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspacesCommand}
   */
  createWorkspaces(
    args: CreateWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspacesCommandOutput>;
  createWorkspaces(
    args: CreateWorkspacesCommandInput,
    cb: (err: any, data?: CreateWorkspacesCommandOutput) => void
  ): void;
  createWorkspaces(
    args: CreateWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateWorkspacesPoolCommand}
   */
  createWorkspacesPool(
    args: CreateWorkspacesPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspacesPoolCommandOutput>;
  createWorkspacesPool(
    args: CreateWorkspacesPoolCommandInput,
    cb: (err: any, data?: CreateWorkspacesPoolCommandOutput) => void
  ): void;
  createWorkspacesPool(
    args: CreateWorkspacesPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspacesPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteAccountLinkInvitationCommand}
   */
  deleteAccountLinkInvitation(
    args: DeleteAccountLinkInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccountLinkInvitationCommandOutput>;
  deleteAccountLinkInvitation(
    args: DeleteAccountLinkInvitationCommandInput,
    cb: (err: any, data?: DeleteAccountLinkInvitationCommandOutput) => void
  ): void;
  deleteAccountLinkInvitation(
    args: DeleteAccountLinkInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccountLinkInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteClientBrandingCommand}
   */
  deleteClientBranding(
    args: DeleteClientBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteClientBrandingCommandOutput>;
  deleteClientBranding(
    args: DeleteClientBrandingCommandInput,
    cb: (err: any, data?: DeleteClientBrandingCommandOutput) => void
  ): void;
  deleteClientBranding(
    args: DeleteClientBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteClientBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectClientAddInCommand}
   */
  deleteConnectClientAddIn(
    args: DeleteConnectClientAddInCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectClientAddInCommandOutput>;
  deleteConnectClientAddIn(
    args: DeleteConnectClientAddInCommandInput,
    cb: (err: any, data?: DeleteConnectClientAddInCommandOutput) => void
  ): void;
  deleteConnectClientAddIn(
    args: DeleteConnectClientAddInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectClientAddInCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConnectionAliasCommand}
   */
  deleteConnectionAlias(
    args: DeleteConnectionAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteConnectionAliasCommandOutput>;
  deleteConnectionAlias(
    args: DeleteConnectionAliasCommandInput,
    cb: (err: any, data?: DeleteConnectionAliasCommandOutput) => void
  ): void;
  deleteConnectionAlias(
    args: DeleteConnectionAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConnectionAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteIpGroupCommand}
   */
  deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpGroupCommandOutput>;
  deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    cb: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): void;
  deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceBundleCommand}
   */
  deleteWorkspaceBundle(): Promise<DeleteWorkspaceBundleCommandOutput>;
  deleteWorkspaceBundle(
    args: DeleteWorkspaceBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceBundleCommandOutput>;
  deleteWorkspaceBundle(
    args: DeleteWorkspaceBundleCommandInput,
    cb: (err: any, data?: DeleteWorkspaceBundleCommandOutput) => void
  ): void;
  deleteWorkspaceBundle(
    args: DeleteWorkspaceBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceImageCommand}
   */
  deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceImageCommandOutput>;
  deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void
  ): void;
  deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeployWorkspaceApplicationsCommand}
   */
  deployWorkspaceApplications(
    args: DeployWorkspaceApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeployWorkspaceApplicationsCommandOutput>;
  deployWorkspaceApplications(
    args: DeployWorkspaceApplicationsCommandInput,
    cb: (err: any, data?: DeployWorkspaceApplicationsCommandOutput) => void
  ): void;
  deployWorkspaceApplications(
    args: DeployWorkspaceApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeployWorkspaceApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeregisterWorkspaceDirectoryCommand}
   */
  deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput>;
  deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountCommand}
   */
  describeAccount(): Promise<DescribeAccountCommandOutput>;
  describeAccount(
    args: DescribeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCommandOutput>;
  describeAccount(
    args: DescribeAccountCommandInput,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;
  describeAccount(
    args: DescribeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountModificationsCommand}
   */
  describeAccountModifications(): Promise<DescribeAccountModificationsCommandOutput>;
  describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountModificationsCommandOutput>;
  describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void
  ): void;
  describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationAssociationsCommand}
   */
  describeApplicationAssociations(
    args: DescribeApplicationAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationAssociationsCommandOutput>;
  describeApplicationAssociations(
    args: DescribeApplicationAssociationsCommandInput,
    cb: (err: any, data?: DescribeApplicationAssociationsCommandOutput) => void
  ): void;
  describeApplicationAssociations(
    args: DescribeApplicationAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationsCommand}
   */
  describeApplications(): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeApplicationsCommandOutput>;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;
  describeApplications(
    args: DescribeApplicationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeApplicationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeBundleAssociationsCommand}
   */
  describeBundleAssociations(
    args: DescribeBundleAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeBundleAssociationsCommandOutput>;
  describeBundleAssociations(
    args: DescribeBundleAssociationsCommandInput,
    cb: (err: any, data?: DescribeBundleAssociationsCommandOutput) => void
  ): void;
  describeBundleAssociations(
    args: DescribeBundleAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeBundleAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientBrandingCommand}
   */
  describeClientBranding(
    args: DescribeClientBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientBrandingCommandOutput>;
  describeClientBranding(
    args: DescribeClientBrandingCommandInput,
    cb: (err: any, data?: DescribeClientBrandingCommandOutput) => void
  ): void;
  describeClientBranding(
    args: DescribeClientBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeClientPropertiesCommand}
   */
  describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientPropertiesCommandOutput>;
  describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void
  ): void;
  describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectClientAddInsCommand}
   */
  describeConnectClientAddIns(
    args: DescribeConnectClientAddInsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectClientAddInsCommandOutput>;
  describeConnectClientAddIns(
    args: DescribeConnectClientAddInsCommandInput,
    cb: (err: any, data?: DescribeConnectClientAddInsCommandOutput) => void
  ): void;
  describeConnectClientAddIns(
    args: DescribeConnectClientAddInsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectClientAddInsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionAliasesCommand}
   */
  describeConnectionAliases(): Promise<DescribeConnectionAliasesCommandOutput>;
  describeConnectionAliases(
    args: DescribeConnectionAliasesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionAliasesCommandOutput>;
  describeConnectionAliases(
    args: DescribeConnectionAliasesCommandInput,
    cb: (err: any, data?: DescribeConnectionAliasesCommandOutput) => void
  ): void;
  describeConnectionAliases(
    args: DescribeConnectionAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionAliasesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeConnectionAliasPermissionsCommand}
   */
  describeConnectionAliasPermissions(
    args: DescribeConnectionAliasPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeConnectionAliasPermissionsCommandOutput>;
  describeConnectionAliasPermissions(
    args: DescribeConnectionAliasPermissionsCommandInput,
    cb: (err: any, data?: DescribeConnectionAliasPermissionsCommandOutput) => void
  ): void;
  describeConnectionAliasPermissions(
    args: DescribeConnectionAliasPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeConnectionAliasPermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeCustomWorkspaceImageImportCommand}
   */
  describeCustomWorkspaceImageImport(
    args: DescribeCustomWorkspaceImageImportCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomWorkspaceImageImportCommandOutput>;
  describeCustomWorkspaceImageImport(
    args: DescribeCustomWorkspaceImageImportCommandInput,
    cb: (err: any, data?: DescribeCustomWorkspaceImageImportCommandOutput) => void
  ): void;
  describeCustomWorkspaceImageImport(
    args: DescribeCustomWorkspaceImageImportCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomWorkspaceImageImportCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeImageAssociationsCommand}
   */
  describeImageAssociations(
    args: DescribeImageAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeImageAssociationsCommandOutput>;
  describeImageAssociations(
    args: DescribeImageAssociationsCommandInput,
    cb: (err: any, data?: DescribeImageAssociationsCommandOutput) => void
  ): void;
  describeImageAssociations(
    args: DescribeImageAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeImageAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeIpGroupsCommand}
   */
  describeIpGroups(): Promise<DescribeIpGroupsCommandOutput>;
  describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpGroupsCommandOutput>;
  describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void
  ): void;
  describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeTagsCommand}
   */
  describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceAssociationsCommand}
   */
  describeWorkspaceAssociations(
    args: DescribeWorkspaceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceAssociationsCommandOutput>;
  describeWorkspaceAssociations(
    args: DescribeWorkspaceAssociationsCommandInput,
    cb: (err: any, data?: DescribeWorkspaceAssociationsCommandOutput) => void
  ): void;
  describeWorkspaceAssociations(
    args: DescribeWorkspaceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceAssociationsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceBundlesCommand}
   */
  describeWorkspaceBundles(): Promise<DescribeWorkspaceBundlesCommandOutput>;
  describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceBundlesCommandOutput>;
  describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void
  ): void;
  describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceDirectoriesCommand}
   */
  describeWorkspaceDirectories(): Promise<DescribeWorkspaceDirectoriesCommandOutput>;
  describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceDirectoriesCommandOutput>;
  describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void
  ): void;
  describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceImagePermissionsCommand}
   */
  describeWorkspaceImagePermissions(
    args: DescribeWorkspaceImagePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceImagePermissionsCommandOutput>;
  describeWorkspaceImagePermissions(
    args: DescribeWorkspaceImagePermissionsCommandInput,
    cb: (err: any, data?: DescribeWorkspaceImagePermissionsCommandOutput) => void
  ): void;
  describeWorkspaceImagePermissions(
    args: DescribeWorkspaceImagePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceImagePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceImagesCommand}
   */
  describeWorkspaceImages(): Promise<DescribeWorkspaceImagesCommandOutput>;
  describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceImagesCommandOutput>;
  describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void
  ): void;
  describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspacesCommand}
   */
  describeWorkspaces(): Promise<DescribeWorkspacesCommandOutput>;
  describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesCommandOutput>;
  describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void
  ): void;
  describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspacesConnectionStatusCommand}
   */
  describeWorkspacesConnectionStatus(): Promise<DescribeWorkspacesConnectionStatusCommandOutput>;
  describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesConnectionStatusCommandOutput>;
  describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    cb: (err: any, data?: DescribeWorkspacesConnectionStatusCommandOutput) => void
  ): void;
  describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspacesConnectionStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceSnapshotsCommand}
   */
  describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceSnapshotsCommandOutput>;
  describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void
  ): void;
  describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspacesPoolsCommand}
   */
  describeWorkspacesPools(): Promise<DescribeWorkspacesPoolsCommandOutput>;
  describeWorkspacesPools(
    args: DescribeWorkspacesPoolsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesPoolsCommandOutput>;
  describeWorkspacesPools(
    args: DescribeWorkspacesPoolsCommandInput,
    cb: (err: any, data?: DescribeWorkspacesPoolsCommandOutput) => void
  ): void;
  describeWorkspacesPools(
    args: DescribeWorkspacesPoolsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspacesPoolsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspacesPoolSessionsCommand}
   */
  describeWorkspacesPoolSessions(
    args: DescribeWorkspacesPoolSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesPoolSessionsCommandOutput>;
  describeWorkspacesPoolSessions(
    args: DescribeWorkspacesPoolSessionsCommandInput,
    cb: (err: any, data?: DescribeWorkspacesPoolSessionsCommandOutput) => void
  ): void;
  describeWorkspacesPoolSessions(
    args: DescribeWorkspacesPoolSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspacesPoolSessionsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateConnectionAliasCommand}
   */
  disassociateConnectionAlias(
    args: DisassociateConnectionAliasCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateConnectionAliasCommandOutput>;
  disassociateConnectionAlias(
    args: DisassociateConnectionAliasCommandInput,
    cb: (err: any, data?: DisassociateConnectionAliasCommandOutput) => void
  ): void;
  disassociateConnectionAlias(
    args: DisassociateConnectionAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateConnectionAliasCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateIpGroupsCommand}
   */
  disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIpGroupsCommandOutput>;
  disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void
  ): void;
  disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link DisassociateWorkspaceApplicationCommand}
   */
  disassociateWorkspaceApplication(
    args: DisassociateWorkspaceApplicationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateWorkspaceApplicationCommandOutput>;
  disassociateWorkspaceApplication(
    args: DisassociateWorkspaceApplicationCommandInput,
    cb: (err: any, data?: DisassociateWorkspaceApplicationCommandOutput) => void
  ): void;
  disassociateWorkspaceApplication(
    args: DisassociateWorkspaceApplicationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateWorkspaceApplicationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAccountLinkCommand}
   */
  getAccountLink(): Promise<GetAccountLinkCommandOutput>;
  getAccountLink(
    args: GetAccountLinkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccountLinkCommandOutput>;
  getAccountLink(
    args: GetAccountLinkCommandInput,
    cb: (err: any, data?: GetAccountLinkCommandOutput) => void
  ): void;
  getAccountLink(
    args: GetAccountLinkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccountLinkCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportClientBrandingCommand}
   */
  importClientBranding(
    args: ImportClientBrandingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportClientBrandingCommandOutput>;
  importClientBranding(
    args: ImportClientBrandingCommandInput,
    cb: (err: any, data?: ImportClientBrandingCommandOutput) => void
  ): void;
  importClientBranding(
    args: ImportClientBrandingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportClientBrandingCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportCustomWorkspaceImageCommand}
   */
  importCustomWorkspaceImage(
    args: ImportCustomWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportCustomWorkspaceImageCommandOutput>;
  importCustomWorkspaceImage(
    args: ImportCustomWorkspaceImageCommandInput,
    cb: (err: any, data?: ImportCustomWorkspaceImageCommandOutput) => void
  ): void;
  importCustomWorkspaceImage(
    args: ImportCustomWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportCustomWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ImportWorkspaceImageCommand}
   */
  importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportWorkspaceImageCommandOutput>;
  importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void
  ): void;
  importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAccountLinksCommand}
   */
  listAccountLinks(): Promise<ListAccountLinksCommandOutput>;
  listAccountLinks(
    args: ListAccountLinksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccountLinksCommandOutput>;
  listAccountLinks(
    args: ListAccountLinksCommandInput,
    cb: (err: any, data?: ListAccountLinksCommandOutput) => void
  ): void;
  listAccountLinks(
    args: ListAccountLinksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccountLinksCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAvailableManagementCidrRangesCommand}
   */
  listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagementCidrRangesCommandOutput>;
  listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    cb: (err: any, data?: ListAvailableManagementCidrRangesCommandOutput) => void
  ): void;
  listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAvailableManagementCidrRangesCommandOutput) => void
  ): void;

  /**
   * @see {@link MigrateWorkspaceCommand}
   */
  migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MigrateWorkspaceCommandOutput>;
  migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void
  ): void;
  migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyAccountCommand}
   */
  modifyAccount(): Promise<ModifyAccountCommandOutput>;
  modifyAccount(
    args: ModifyAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAccountCommandOutput>;
  modifyAccount(
    args: ModifyAccountCommandInput,
    cb: (err: any, data?: ModifyAccountCommandOutput) => void
  ): void;
  modifyAccount(
    args: ModifyAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyCertificateBasedAuthPropertiesCommand}
   */
  modifyCertificateBasedAuthProperties(
    args: ModifyCertificateBasedAuthPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyCertificateBasedAuthPropertiesCommandOutput>;
  modifyCertificateBasedAuthProperties(
    args: ModifyCertificateBasedAuthPropertiesCommandInput,
    cb: (err: any, data?: ModifyCertificateBasedAuthPropertiesCommandOutput) => void
  ): void;
  modifyCertificateBasedAuthProperties(
    args: ModifyCertificateBasedAuthPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyCertificateBasedAuthPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyClientPropertiesCommand}
   */
  modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClientPropertiesCommandOutput>;
  modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void
  ): void;
  modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyEndpointEncryptionModeCommand}
   */
  modifyEndpointEncryptionMode(
    args: ModifyEndpointEncryptionModeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyEndpointEncryptionModeCommandOutput>;
  modifyEndpointEncryptionMode(
    args: ModifyEndpointEncryptionModeCommandInput,
    cb: (err: any, data?: ModifyEndpointEncryptionModeCommandOutput) => void
  ): void;
  modifyEndpointEncryptionMode(
    args: ModifyEndpointEncryptionModeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyEndpointEncryptionModeCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySamlPropertiesCommand}
   */
  modifySamlProperties(
    args: ModifySamlPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySamlPropertiesCommandOutput>;
  modifySamlProperties(
    args: ModifySamlPropertiesCommandInput,
    cb: (err: any, data?: ModifySamlPropertiesCommandOutput) => void
  ): void;
  modifySamlProperties(
    args: ModifySamlPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySamlPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifySelfservicePermissionsCommand}
   */
  modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySelfservicePermissionsCommandOutput>;
  modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void
  ): void;
  modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyStreamingPropertiesCommand}
   */
  modifyStreamingProperties(
    args: ModifyStreamingPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyStreamingPropertiesCommandOutput>;
  modifyStreamingProperties(
    args: ModifyStreamingPropertiesCommandInput,
    cb: (err: any, data?: ModifyStreamingPropertiesCommandOutput) => void
  ): void;
  modifyStreamingProperties(
    args: ModifyStreamingPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyStreamingPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyWorkspaceAccessPropertiesCommand}
   */
  modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceAccessPropertiesCommandOutput>;
  modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void
  ): void;
  modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyWorkspaceCreationPropertiesCommand}
   */
  modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceCreationPropertiesCommandOutput>;
  modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    cb: (err: any, data?: ModifyWorkspaceCreationPropertiesCommandOutput) => void
  ): void;
  modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspaceCreationPropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyWorkspacePropertiesCommand}
   */
  modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspacePropertiesCommandOutput>;
  modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void
  ): void;
  modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void
  ): void;

  /**
   * @see {@link ModifyWorkspaceStateCommand}
   */
  modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceStateCommandOutput>;
  modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void
  ): void;
  modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void
  ): void;

  /**
   * @see {@link RebootWorkspacesCommand}
   */
  rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootWorkspacesCommandOutput>;
  rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    cb: (err: any, data?: RebootWorkspacesCommandOutput) => void
  ): void;
  rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link RebuildWorkspacesCommand}
   */
  rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebuildWorkspacesCommandOutput>;
  rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void
  ): void;
  rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterWorkspaceDirectoryCommand}
   */
  registerWorkspaceDirectory(): Promise<RegisterWorkspaceDirectoryCommandOutput>;
  registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWorkspaceDirectoryCommandOutput>;
  registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void
  ): void;

  /**
   * @see {@link RejectAccountLinkInvitationCommand}
   */
  rejectAccountLinkInvitation(
    args: RejectAccountLinkInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectAccountLinkInvitationCommandOutput>;
  rejectAccountLinkInvitation(
    args: RejectAccountLinkInvitationCommandInput,
    cb: (err: any, data?: RejectAccountLinkInvitationCommandOutput) => void
  ): void;
  rejectAccountLinkInvitation(
    args: RejectAccountLinkInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectAccountLinkInvitationCommandOutput) => void
  ): void;

  /**
   * @see {@link RestoreWorkspaceCommand}
   */
  restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreWorkspaceCommandOutput>;
  restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void
  ): void;
  restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void
  ): void;

  /**
   * @see {@link RevokeIpRulesCommand}
   */
  revokeIpRules(
    args: RevokeIpRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeIpRulesCommandOutput>;
  revokeIpRules(
    args: RevokeIpRulesCommandInput,
    cb: (err: any, data?: RevokeIpRulesCommandOutput) => void
  ): void;
  revokeIpRules(
    args: RevokeIpRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeIpRulesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkspacesCommand}
   */
  startWorkspaces(
    args: StartWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkspacesCommandOutput>;
  startWorkspaces(
    args: StartWorkspacesCommandInput,
    cb: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): void;
  startWorkspaces(
    args: StartWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link StartWorkspacesPoolCommand}
   */
  startWorkspacesPool(
    args: StartWorkspacesPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkspacesPoolCommandOutput>;
  startWorkspacesPool(
    args: StartWorkspacesPoolCommandInput,
    cb: (err: any, data?: StartWorkspacesPoolCommandOutput) => void
  ): void;
  startWorkspacesPool(
    args: StartWorkspacesPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkspacesPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkspacesCommand}
   */
  stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkspacesCommandOutput>;
  stopWorkspaces(
    args: StopWorkspacesCommandInput,
    cb: (err: any, data?: StopWorkspacesCommandOutput) => void
  ): void;
  stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkspacesPoolCommand}
   */
  stopWorkspacesPool(
    args: StopWorkspacesPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkspacesPoolCommandOutput>;
  stopWorkspacesPool(
    args: StopWorkspacesPoolCommandInput,
    cb: (err: any, data?: StopWorkspacesPoolCommandOutput) => void
  ): void;
  stopWorkspacesPool(
    args: StopWorkspacesPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkspacesPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateWorkspacesCommand}
   */
  terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkspacesCommandOutput>;
  terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void
  ): void;
  terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateWorkspacesPoolCommand}
   */
  terminateWorkspacesPool(
    args: TerminateWorkspacesPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkspacesPoolCommandOutput>;
  terminateWorkspacesPool(
    args: TerminateWorkspacesPoolCommandInput,
    cb: (err: any, data?: TerminateWorkspacesPoolCommandOutput) => void
  ): void;
  terminateWorkspacesPool(
    args: TerminateWorkspacesPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkspacesPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link TerminateWorkspacesPoolSessionCommand}
   */
  terminateWorkspacesPoolSession(
    args: TerminateWorkspacesPoolSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkspacesPoolSessionCommandOutput>;
  terminateWorkspacesPoolSession(
    args: TerminateWorkspacesPoolSessionCommandInput,
    cb: (err: any, data?: TerminateWorkspacesPoolSessionCommandOutput) => void
  ): void;
  terminateWorkspacesPoolSession(
    args: TerminateWorkspacesPoolSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkspacesPoolSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectClientAddInCommand}
   */
  updateConnectClientAddIn(
    args: UpdateConnectClientAddInCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectClientAddInCommandOutput>;
  updateConnectClientAddIn(
    args: UpdateConnectClientAddInCommandInput,
    cb: (err: any, data?: UpdateConnectClientAddInCommandOutput) => void
  ): void;
  updateConnectClientAddIn(
    args: UpdateConnectClientAddInCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectClientAddInCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConnectionAliasPermissionCommand}
   */
  updateConnectionAliasPermission(
    args: UpdateConnectionAliasPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateConnectionAliasPermissionCommandOutput>;
  updateConnectionAliasPermission(
    args: UpdateConnectionAliasPermissionCommandInput,
    cb: (err: any, data?: UpdateConnectionAliasPermissionCommandOutput) => void
  ): void;
  updateConnectionAliasPermission(
    args: UpdateConnectionAliasPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConnectionAliasPermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRulesOfIpGroupCommand}
   */
  updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRulesOfIpGroupCommandOutput>;
  updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void
  ): void;
  updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceBundleCommand}
   */
  updateWorkspaceBundle(): Promise<UpdateWorkspaceBundleCommandOutput>;
  updateWorkspaceBundle(
    args: UpdateWorkspaceBundleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceBundleCommandOutput>;
  updateWorkspaceBundle(
    args: UpdateWorkspaceBundleCommandInput,
    cb: (err: any, data?: UpdateWorkspaceBundleCommandOutput) => void
  ): void;
  updateWorkspaceBundle(
    args: UpdateWorkspaceBundleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceBundleCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspaceImagePermissionCommand}
   */
  updateWorkspaceImagePermission(
    args: UpdateWorkspaceImagePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspaceImagePermissionCommandOutput>;
  updateWorkspaceImagePermission(
    args: UpdateWorkspaceImagePermissionCommandInput,
    cb: (err: any, data?: UpdateWorkspaceImagePermissionCommandOutput) => void
  ): void;
  updateWorkspaceImagePermission(
    args: UpdateWorkspaceImagePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspaceImagePermissionCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateWorkspacesPoolCommand}
   */
  updateWorkspacesPool(
    args: UpdateWorkspacesPoolCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateWorkspacesPoolCommandOutput>;
  updateWorkspacesPool(
    args: UpdateWorkspacesPoolCommandInput,
    cb: (err: any, data?: UpdateWorkspacesPoolCommandOutput) => void
  ): void;
  updateWorkspacesPool(
    args: UpdateWorkspacesPoolCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateWorkspacesPoolCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeApplicationAssociationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeApplicationAssociationsCommandOutput}.
   */
  paginateDescribeApplicationAssociations(
    args: DescribeApplicationAssociationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeApplicationAssociationsCommandOutput>;

  /**
   * @see {@link DescribeApplicationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeApplicationsCommandOutput}.
   */
  paginateDescribeApplications(
    args?: DescribeApplicationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeApplicationsCommandOutput>;

  /**
   * @see {@link DescribeWorkspaceBundlesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeWorkspaceBundlesCommandOutput}.
   */
  paginateDescribeWorkspaceBundles(
    args?: DescribeWorkspaceBundlesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeWorkspaceBundlesCommandOutput>;

  /**
   * @see {@link DescribeWorkspaceDirectoriesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeWorkspaceDirectoriesCommandOutput}.
   */
  paginateDescribeWorkspaceDirectories(
    args?: DescribeWorkspaceDirectoriesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeWorkspaceDirectoriesCommandOutput>;

  /**
   * @see {@link DescribeWorkspacesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link DescribeWorkspacesCommandOutput}.
   */
  paginateDescribeWorkspaces(
    args?: DescribeWorkspacesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<DescribeWorkspacesCommandOutput>;

  /**
   * @see {@link ListAccountLinksCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAccountLinksCommandOutput}.
   */
  paginateListAccountLinks(
    args?: ListAccountLinksCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAccountLinksCommandOutput>;
}

/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows
 *          or Amazon Linux desktops for your users, known as <i>WorkSpaces</i>.
 *             WorkSpaces eliminates the need to procure and deploy hardware or install complex
 *          software. You can quickly add or remove users as your needs change. Users can access their
 *          virtual desktops from multiple devices or web browsers.</p>
 *          <p>This API Reference provides detailed information about the actions, data types,
 *          parameters, and errors of the WorkSpaces service. For more information about the
 *          supported Amazon Web Services Regions, endpoints, and service quotas of the Amazon WorkSpaces service, see <a href="https://docs.aws.amazon.com/general/latest/gr/wsp.html">WorkSpaces endpoints and quotas</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *          <p>You can also manage your WorkSpaces resources using the WorkSpaces
 *          console, Command Line Interface (CLI), and SDKs. For more information about
 *          administering WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/">Amazon WorkSpaces Administration Guide</a>.
 *          For more information about using the Amazon WorkSpaces client application or web
 *          browser to access provisioned WorkSpaces, see the <a href="https://docs.aws.amazon.com/workspaces/latest/userguide/">Amazon WorkSpaces User Guide</a>. For more
 *          information about using the CLI to manage your WorkSpaces resources,
 *          see the <a href="https://docs.aws.amazon.com/cli/latest/reference/workspaces/index.html">WorkSpaces section of the CLI Reference</a>.</p>
 * @public
 */
export class WorkSpaces extends WorkSpacesClient implements WorkSpaces {}
createAggregatedClient(commands, WorkSpaces, { paginators });
