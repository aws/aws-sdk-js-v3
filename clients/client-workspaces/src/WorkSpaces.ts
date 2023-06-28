// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  AssociateConnectionAliasCommand,
  AssociateConnectionAliasCommandInput,
  AssociateConnectionAliasCommandOutput,
} from "./commands/AssociateConnectionAliasCommand";
import {
  AssociateIpGroupsCommand,
  AssociateIpGroupsCommandInput,
  AssociateIpGroupsCommandOutput,
} from "./commands/AssociateIpGroupsCommand";
import {
  AuthorizeIpRulesCommand,
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput,
} from "./commands/AuthorizeIpRulesCommand";
import {
  CopyWorkspaceImageCommand,
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput,
} from "./commands/CopyWorkspaceImageCommand";
import {
  CreateConnectClientAddInCommand,
  CreateConnectClientAddInCommandInput,
  CreateConnectClientAddInCommandOutput,
} from "./commands/CreateConnectClientAddInCommand";
import {
  CreateConnectionAliasCommand,
  CreateConnectionAliasCommandInput,
  CreateConnectionAliasCommandOutput,
} from "./commands/CreateConnectionAliasCommand";
import {
  CreateIpGroupCommand,
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput,
} from "./commands/CreateIpGroupCommand";
import {
  CreateStandbyWorkspacesCommand,
  CreateStandbyWorkspacesCommandInput,
  CreateStandbyWorkspacesCommandOutput,
} from "./commands/CreateStandbyWorkspacesCommand";
import { CreateTagsCommand, CreateTagsCommandInput, CreateTagsCommandOutput } from "./commands/CreateTagsCommand";
import {
  CreateUpdatedWorkspaceImageCommand,
  CreateUpdatedWorkspaceImageCommandInput,
  CreateUpdatedWorkspaceImageCommandOutput,
} from "./commands/CreateUpdatedWorkspaceImageCommand";
import {
  CreateWorkspaceBundleCommand,
  CreateWorkspaceBundleCommandInput,
  CreateWorkspaceBundleCommandOutput,
} from "./commands/CreateWorkspaceBundleCommand";
import {
  CreateWorkspaceImageCommand,
  CreateWorkspaceImageCommandInput,
  CreateWorkspaceImageCommandOutput,
} from "./commands/CreateWorkspaceImageCommand";
import {
  CreateWorkspacesCommand,
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput,
} from "./commands/CreateWorkspacesCommand";
import {
  DeleteClientBrandingCommand,
  DeleteClientBrandingCommandInput,
  DeleteClientBrandingCommandOutput,
} from "./commands/DeleteClientBrandingCommand";
import {
  DeleteConnectClientAddInCommand,
  DeleteConnectClientAddInCommandInput,
  DeleteConnectClientAddInCommandOutput,
} from "./commands/DeleteConnectClientAddInCommand";
import {
  DeleteConnectionAliasCommand,
  DeleteConnectionAliasCommandInput,
  DeleteConnectionAliasCommandOutput,
} from "./commands/DeleteConnectionAliasCommand";
import {
  DeleteIpGroupCommand,
  DeleteIpGroupCommandInput,
  DeleteIpGroupCommandOutput,
} from "./commands/DeleteIpGroupCommand";
import { DeleteTagsCommand, DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import {
  DeleteWorkspaceBundleCommand,
  DeleteWorkspaceBundleCommandInput,
  DeleteWorkspaceBundleCommandOutput,
} from "./commands/DeleteWorkspaceBundleCommand";
import {
  DeleteWorkspaceImageCommand,
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput,
} from "./commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommand,
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput,
} from "./commands/DeregisterWorkspaceDirectoryCommand";
import {
  DescribeAccountCommand,
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput,
} from "./commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommand,
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput,
} from "./commands/DescribeAccountModificationsCommand";
import {
  DescribeClientBrandingCommand,
  DescribeClientBrandingCommandInput,
  DescribeClientBrandingCommandOutput,
} from "./commands/DescribeClientBrandingCommand";
import {
  DescribeClientPropertiesCommand,
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput,
} from "./commands/DescribeClientPropertiesCommand";
import {
  DescribeConnectClientAddInsCommand,
  DescribeConnectClientAddInsCommandInput,
  DescribeConnectClientAddInsCommandOutput,
} from "./commands/DescribeConnectClientAddInsCommand";
import {
  DescribeConnectionAliasesCommand,
  DescribeConnectionAliasesCommandInput,
  DescribeConnectionAliasesCommandOutput,
} from "./commands/DescribeConnectionAliasesCommand";
import {
  DescribeConnectionAliasPermissionsCommand,
  DescribeConnectionAliasPermissionsCommandInput,
  DescribeConnectionAliasPermissionsCommandOutput,
} from "./commands/DescribeConnectionAliasPermissionsCommand";
import {
  DescribeIpGroupsCommand,
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput,
} from "./commands/DescribeIpGroupsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput,
} from "./commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput,
} from "./commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagePermissionsCommand,
  DescribeWorkspaceImagePermissionsCommandInput,
  DescribeWorkspaceImagePermissionsCommandOutput,
} from "./commands/DescribeWorkspaceImagePermissionsCommand";
import {
  DescribeWorkspaceImagesCommand,
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput,
} from "./commands/DescribeWorkspaceImagesCommand";
import {
  DescribeWorkspacesCommand,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput,
} from "./commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput,
} from "./commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DescribeWorkspaceSnapshotsCommand,
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput,
} from "./commands/DescribeWorkspaceSnapshotsCommand";
import {
  DisassociateConnectionAliasCommand,
  DisassociateConnectionAliasCommandInput,
  DisassociateConnectionAliasCommandOutput,
} from "./commands/DisassociateConnectionAliasCommand";
import {
  DisassociateIpGroupsCommand,
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput,
} from "./commands/DisassociateIpGroupsCommand";
import {
  ImportClientBrandingCommand,
  ImportClientBrandingCommandInput,
  ImportClientBrandingCommandOutput,
} from "./commands/ImportClientBrandingCommand";
import {
  ImportWorkspaceImageCommand,
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput,
} from "./commands/ImportWorkspaceImageCommand";
import {
  ListAvailableManagementCidrRangesCommand,
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput,
} from "./commands/ListAvailableManagementCidrRangesCommand";
import {
  MigrateWorkspaceCommand,
  MigrateWorkspaceCommandInput,
  MigrateWorkspaceCommandOutput,
} from "./commands/MigrateWorkspaceCommand";
import {
  ModifyAccountCommand,
  ModifyAccountCommandInput,
  ModifyAccountCommandOutput,
} from "./commands/ModifyAccountCommand";
import {
  ModifyCertificateBasedAuthPropertiesCommand,
  ModifyCertificateBasedAuthPropertiesCommandInput,
  ModifyCertificateBasedAuthPropertiesCommandOutput,
} from "./commands/ModifyCertificateBasedAuthPropertiesCommand";
import {
  ModifyClientPropertiesCommand,
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput,
} from "./commands/ModifyClientPropertiesCommand";
import {
  ModifySamlPropertiesCommand,
  ModifySamlPropertiesCommandInput,
  ModifySamlPropertiesCommandOutput,
} from "./commands/ModifySamlPropertiesCommand";
import {
  ModifySelfservicePermissionsCommand,
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput,
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  ModifyWorkspaceAccessPropertiesCommand,
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommand,
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput,
} from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommand,
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput,
} from "./commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommand,
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput,
} from "./commands/ModifyWorkspaceStateCommand";
import {
  RebootWorkspacesCommand,
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput,
} from "./commands/RebootWorkspacesCommand";
import {
  RebuildWorkspacesCommand,
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput,
} from "./commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommand,
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput,
} from "./commands/RegisterWorkspaceDirectoryCommand";
import {
  RestoreWorkspaceCommand,
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput,
} from "./commands/RestoreWorkspaceCommand";
import {
  RevokeIpRulesCommand,
  RevokeIpRulesCommandInput,
  RevokeIpRulesCommandOutput,
} from "./commands/RevokeIpRulesCommand";
import {
  StartWorkspacesCommand,
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput,
} from "./commands/StartWorkspacesCommand";
import {
  StopWorkspacesCommand,
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput,
} from "./commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommand,
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput,
} from "./commands/TerminateWorkspacesCommand";
import {
  UpdateConnectClientAddInCommand,
  UpdateConnectClientAddInCommandInput,
  UpdateConnectClientAddInCommandOutput,
} from "./commands/UpdateConnectClientAddInCommand";
import {
  UpdateConnectionAliasPermissionCommand,
  UpdateConnectionAliasPermissionCommandInput,
  UpdateConnectionAliasPermissionCommandOutput,
} from "./commands/UpdateConnectionAliasPermissionCommand";
import {
  UpdateRulesOfIpGroupCommand,
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput,
} from "./commands/UpdateRulesOfIpGroupCommand";
import {
  UpdateWorkspaceBundleCommand,
  UpdateWorkspaceBundleCommandInput,
  UpdateWorkspaceBundleCommandOutput,
} from "./commands/UpdateWorkspaceBundleCommand";
import {
  UpdateWorkspaceImagePermissionCommand,
  UpdateWorkspaceImagePermissionCommandInput,
  UpdateWorkspaceImagePermissionCommandOutput,
} from "./commands/UpdateWorkspaceImagePermissionCommand";
import { WorkSpacesClient, WorkSpacesClientConfig } from "./WorkSpacesClient";

const commands = {
  AssociateConnectionAliasCommand,
  AssociateIpGroupsCommand,
  AuthorizeIpRulesCommand,
  CopyWorkspaceImageCommand,
  CreateConnectClientAddInCommand,
  CreateConnectionAliasCommand,
  CreateIpGroupCommand,
  CreateStandbyWorkspacesCommand,
  CreateTagsCommand,
  CreateUpdatedWorkspaceImageCommand,
  CreateWorkspaceBundleCommand,
  CreateWorkspaceImageCommand,
  CreateWorkspacesCommand,
  DeleteClientBrandingCommand,
  DeleteConnectClientAddInCommand,
  DeleteConnectionAliasCommand,
  DeleteIpGroupCommand,
  DeleteTagsCommand,
  DeleteWorkspaceBundleCommand,
  DeleteWorkspaceImageCommand,
  DeregisterWorkspaceDirectoryCommand,
  DescribeAccountCommand,
  DescribeAccountModificationsCommand,
  DescribeClientBrandingCommand,
  DescribeClientPropertiesCommand,
  DescribeConnectClientAddInsCommand,
  DescribeConnectionAliasesCommand,
  DescribeConnectionAliasPermissionsCommand,
  DescribeIpGroupsCommand,
  DescribeTagsCommand,
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceImagePermissionsCommand,
  DescribeWorkspaceImagesCommand,
  DescribeWorkspacesCommand,
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspaceSnapshotsCommand,
  DisassociateConnectionAliasCommand,
  DisassociateIpGroupsCommand,
  ImportClientBrandingCommand,
  ImportWorkspaceImageCommand,
  ListAvailableManagementCidrRangesCommand,
  MigrateWorkspaceCommand,
  ModifyAccountCommand,
  ModifyCertificateBasedAuthPropertiesCommand,
  ModifyClientPropertiesCommand,
  ModifySamlPropertiesCommand,
  ModifySelfservicePermissionsCommand,
  ModifyWorkspaceAccessPropertiesCommand,
  ModifyWorkspaceCreationPropertiesCommand,
  ModifyWorkspacePropertiesCommand,
  ModifyWorkspaceStateCommand,
  RebootWorkspacesCommand,
  RebuildWorkspacesCommand,
  RegisterWorkspaceDirectoryCommand,
  RestoreWorkspaceCommand,
  RevokeIpRulesCommand,
  StartWorkspacesCommand,
  StopWorkspacesCommand,
  TerminateWorkspacesCommand,
  UpdateConnectClientAddInCommand,
  UpdateConnectionAliasPermissionCommand,
  UpdateRulesOfIpGroupCommand,
  UpdateWorkspaceBundleCommand,
  UpdateWorkspaceImagePermissionCommand,
};

export interface WorkSpaces {
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
  createIpGroup(args: CreateIpGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateIpGroupCommandOutput>;
  createIpGroup(args: CreateIpGroupCommandInput, cb: (err: any, data?: CreateIpGroupCommandOutput) => void): void;
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
  createTags(args: CreateTagsCommandInput, options?: __HttpHandlerOptions): Promise<CreateTagsCommandOutput>;
  createTags(args: CreateTagsCommandInput, cb: (err: any, data?: CreateTagsCommandOutput) => void): void;
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
  deleteIpGroup(args: DeleteIpGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteIpGroupCommandOutput>;
  deleteIpGroup(args: DeleteIpGroupCommandInput, cb: (err: any, data?: DeleteIpGroupCommandOutput) => void): void;
  deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteTagsCommand}
   */
  deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
  deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
  deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteWorkspaceBundleCommand}
   */
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
  describeAccount(
    args: DescribeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCommandOutput>;
  describeAccount(args: DescribeAccountCommandInput, cb: (err: any, data?: DescribeAccountCommandOutput) => void): void;
  describeAccount(
    args: DescribeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeAccountModificationsCommand}
   */
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
   * @see {@link DescribeIpGroupsCommand}
   */
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
  describeTags(args: DescribeTagsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTagsCommandOutput>;
  describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeWorkspaceBundlesCommand}
   */
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
  modifyAccount(args: ModifyAccountCommandInput, options?: __HttpHandlerOptions): Promise<ModifyAccountCommandOutput>;
  modifyAccount(args: ModifyAccountCommandInput, cb: (err: any, data?: ModifyAccountCommandOutput) => void): void;
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
  revokeIpRules(args: RevokeIpRulesCommandInput, options?: __HttpHandlerOptions): Promise<RevokeIpRulesCommandOutput>;
  revokeIpRules(args: RevokeIpRulesCommandInput, cb: (err: any, data?: RevokeIpRulesCommandOutput) => void): void;
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
  startWorkspaces(args: StartWorkspacesCommandInput, cb: (err: any, data?: StartWorkspacesCommandOutput) => void): void;
  startWorkspaces(
    args: StartWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): void;

  /**
   * @see {@link StopWorkspacesCommand}
   */
  stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkspacesCommandOutput>;
  stopWorkspaces(args: StopWorkspacesCommandInput, cb: (err: any, data?: StopWorkspacesCommandOutput) => void): void;
  stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkspacesCommandOutput) => void
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
}

/**
 * @public
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
 */
export class WorkSpaces extends WorkSpacesClient implements WorkSpaces {}
createAggregatedClient(commands, WorkSpaces);
