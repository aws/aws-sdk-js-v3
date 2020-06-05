import { WorkSpacesClient } from "./WorkSpacesClient";
import {
  AssociateIpGroupsCommand,
  AssociateIpGroupsCommandInput,
  AssociateIpGroupsCommandOutput
} from "./commands/AssociateIpGroupsCommand";
import {
  AuthorizeIpRulesCommand,
  AuthorizeIpRulesCommandInput,
  AuthorizeIpRulesCommandOutput
} from "./commands/AuthorizeIpRulesCommand";
import {
  CopyWorkspaceImageCommand,
  CopyWorkspaceImageCommandInput,
  CopyWorkspaceImageCommandOutput
} from "./commands/CopyWorkspaceImageCommand";
import {
  CreateIpGroupCommand,
  CreateIpGroupCommandInput,
  CreateIpGroupCommandOutput
} from "./commands/CreateIpGroupCommand";
import {
  CreateTagsCommand,
  CreateTagsCommandInput,
  CreateTagsCommandOutput
} from "./commands/CreateTagsCommand";
import {
  CreateWorkspacesCommand,
  CreateWorkspacesCommandInput,
  CreateWorkspacesCommandOutput
} from "./commands/CreateWorkspacesCommand";
import {
  DeleteIpGroupCommand,
  DeleteIpGroupCommandInput,
  DeleteIpGroupCommandOutput
} from "./commands/DeleteIpGroupCommand";
import {
  DeleteTagsCommand,
  DeleteTagsCommandInput,
  DeleteTagsCommandOutput
} from "./commands/DeleteTagsCommand";
import {
  DeleteWorkspaceImageCommand,
  DeleteWorkspaceImageCommandInput,
  DeleteWorkspaceImageCommandOutput
} from "./commands/DeleteWorkspaceImageCommand";
import {
  DeregisterWorkspaceDirectoryCommand,
  DeregisterWorkspaceDirectoryCommandInput,
  DeregisterWorkspaceDirectoryCommandOutput
} from "./commands/DeregisterWorkspaceDirectoryCommand";
import {
  DescribeAccountCommand,
  DescribeAccountCommandInput,
  DescribeAccountCommandOutput
} from "./commands/DescribeAccountCommand";
import {
  DescribeAccountModificationsCommand,
  DescribeAccountModificationsCommandInput,
  DescribeAccountModificationsCommandOutput
} from "./commands/DescribeAccountModificationsCommand";
import {
  DescribeClientPropertiesCommand,
  DescribeClientPropertiesCommandInput,
  DescribeClientPropertiesCommandOutput
} from "./commands/DescribeClientPropertiesCommand";
import {
  DescribeIpGroupsCommand,
  DescribeIpGroupsCommandInput,
  DescribeIpGroupsCommandOutput
} from "./commands/DescribeIpGroupsCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput
} from "./commands/DescribeTagsCommand";
import {
  DescribeWorkspaceBundlesCommand,
  DescribeWorkspaceBundlesCommandInput,
  DescribeWorkspaceBundlesCommandOutput
} from "./commands/DescribeWorkspaceBundlesCommand";
import {
  DescribeWorkspaceDirectoriesCommand,
  DescribeWorkspaceDirectoriesCommandInput,
  DescribeWorkspaceDirectoriesCommandOutput
} from "./commands/DescribeWorkspaceDirectoriesCommand";
import {
  DescribeWorkspaceImagesCommand,
  DescribeWorkspaceImagesCommandInput,
  DescribeWorkspaceImagesCommandOutput
} from "./commands/DescribeWorkspaceImagesCommand";
import {
  DescribeWorkspaceSnapshotsCommand,
  DescribeWorkspaceSnapshotsCommandInput,
  DescribeWorkspaceSnapshotsCommandOutput
} from "./commands/DescribeWorkspaceSnapshotsCommand";
import {
  DescribeWorkspacesCommand,
  DescribeWorkspacesCommandInput,
  DescribeWorkspacesCommandOutput
} from "./commands/DescribeWorkspacesCommand";
import {
  DescribeWorkspacesConnectionStatusCommand,
  DescribeWorkspacesConnectionStatusCommandInput,
  DescribeWorkspacesConnectionStatusCommandOutput
} from "./commands/DescribeWorkspacesConnectionStatusCommand";
import {
  DisassociateIpGroupsCommand,
  DisassociateIpGroupsCommandInput,
  DisassociateIpGroupsCommandOutput
} from "./commands/DisassociateIpGroupsCommand";
import {
  ImportWorkspaceImageCommand,
  ImportWorkspaceImageCommandInput,
  ImportWorkspaceImageCommandOutput
} from "./commands/ImportWorkspaceImageCommand";
import {
  ListAvailableManagementCidrRangesCommand,
  ListAvailableManagementCidrRangesCommandInput,
  ListAvailableManagementCidrRangesCommandOutput
} from "./commands/ListAvailableManagementCidrRangesCommand";
import {
  MigrateWorkspaceCommand,
  MigrateWorkspaceCommandInput,
  MigrateWorkspaceCommandOutput
} from "./commands/MigrateWorkspaceCommand";
import {
  ModifyAccountCommand,
  ModifyAccountCommandInput,
  ModifyAccountCommandOutput
} from "./commands/ModifyAccountCommand";
import {
  ModifyClientPropertiesCommand,
  ModifyClientPropertiesCommandInput,
  ModifyClientPropertiesCommandOutput
} from "./commands/ModifyClientPropertiesCommand";
import {
  ModifySelfservicePermissionsCommand,
  ModifySelfservicePermissionsCommandInput,
  ModifySelfservicePermissionsCommandOutput
} from "./commands/ModifySelfservicePermissionsCommand";
import {
  ModifyWorkspaceAccessPropertiesCommand,
  ModifyWorkspaceAccessPropertiesCommandInput,
  ModifyWorkspaceAccessPropertiesCommandOutput
} from "./commands/ModifyWorkspaceAccessPropertiesCommand";
import {
  ModifyWorkspaceCreationPropertiesCommand,
  ModifyWorkspaceCreationPropertiesCommandInput,
  ModifyWorkspaceCreationPropertiesCommandOutput
} from "./commands/ModifyWorkspaceCreationPropertiesCommand";
import {
  ModifyWorkspacePropertiesCommand,
  ModifyWorkspacePropertiesCommandInput,
  ModifyWorkspacePropertiesCommandOutput
} from "./commands/ModifyWorkspacePropertiesCommand";
import {
  ModifyWorkspaceStateCommand,
  ModifyWorkspaceStateCommandInput,
  ModifyWorkspaceStateCommandOutput
} from "./commands/ModifyWorkspaceStateCommand";
import {
  RebootWorkspacesCommand,
  RebootWorkspacesCommandInput,
  RebootWorkspacesCommandOutput
} from "./commands/RebootWorkspacesCommand";
import {
  RebuildWorkspacesCommand,
  RebuildWorkspacesCommandInput,
  RebuildWorkspacesCommandOutput
} from "./commands/RebuildWorkspacesCommand";
import {
  RegisterWorkspaceDirectoryCommand,
  RegisterWorkspaceDirectoryCommandInput,
  RegisterWorkspaceDirectoryCommandOutput
} from "./commands/RegisterWorkspaceDirectoryCommand";
import {
  RestoreWorkspaceCommand,
  RestoreWorkspaceCommandInput,
  RestoreWorkspaceCommandOutput
} from "./commands/RestoreWorkspaceCommand";
import {
  RevokeIpRulesCommand,
  RevokeIpRulesCommandInput,
  RevokeIpRulesCommandOutput
} from "./commands/RevokeIpRulesCommand";
import {
  StartWorkspacesCommand,
  StartWorkspacesCommandInput,
  StartWorkspacesCommandOutput
} from "./commands/StartWorkspacesCommand";
import {
  StopWorkspacesCommand,
  StopWorkspacesCommandInput,
  StopWorkspacesCommandOutput
} from "./commands/StopWorkspacesCommand";
import {
  TerminateWorkspacesCommand,
  TerminateWorkspacesCommandInput,
  TerminateWorkspacesCommandOutput
} from "./commands/TerminateWorkspacesCommand";
import {
  UpdateRulesOfIpGroupCommand,
  UpdateRulesOfIpGroupCommandInput,
  UpdateRulesOfIpGroupCommandOutput
} from "./commands/UpdateRulesOfIpGroupCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>Amazon WorkSpaces Service</fullname>
 *          <p>Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows and
 *          Amazon Linux desktops for your users.</p>
 */
export class WorkSpaces extends WorkSpacesClient {
  /**
   * <p>Associates the specified IP access control group with the specified directory.</p>
   */
  public associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateIpGroupsCommandOutput>;
  public associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void
  ): void;
  public associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateIpGroupsCommandOutput) => void
  ): void;
  public associateIpGroups(
    args: AssociateIpGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateIpGroupsCommandOutput) => void),
    cb?: (err: any, data?: AssociateIpGroupsCommandOutput) => void
  ): Promise<AssociateIpGroupsCommandOutput> | void {
    const command = new AssociateIpGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds one or more rules to the specified IP access control group.</p>
   *          <p>This action gives users permission to access their WorkSpaces from the CIDR address
   *          ranges specified in the rules.</p>
   */
  public authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AuthorizeIpRulesCommandOutput>;
  public authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void
  ): void;
  public authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AuthorizeIpRulesCommandOutput) => void
  ): void;
  public authorizeIpRules(
    args: AuthorizeIpRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AuthorizeIpRulesCommandOutput) => void),
    cb?: (err: any, data?: AuthorizeIpRulesCommandOutput) => void
  ): Promise<AuthorizeIpRulesCommandOutput> | void {
    const command = new AuthorizeIpRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Copies the specified image from the specified Region to the current Region.</p>
   */
  public copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CopyWorkspaceImageCommandOutput>;
  public copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void
  ): void;
  public copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CopyWorkspaceImageCommandOutput) => void
  ): void;
  public copyWorkspaceImage(
    args: CopyWorkspaceImageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CopyWorkspaceImageCommandOutput) => void),
    cb?: (err: any, data?: CopyWorkspaceImageCommandOutput) => void
  ): Promise<CopyWorkspaceImageCommandOutput> | void {
    const command = new CopyWorkspaceImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates an IP access control group.</p>
   *          <p>An IP access control group provides you with the ability to control the IP addresses
   *          from which users are allowed to access their WorkSpaces. To specify the CIDR address
   *          ranges, add rules to your IP access control group and then associate the group with your
   *          directory. You can add rules when you create the group or at any time using <a>AuthorizeIpRules</a>.</p>
   *
   *          <p>There is a default IP access control group associated with your directory. If you don't
   *          associate an IP access control group with your directory, the default group is used. The
   *          default group includes a default rule that allows users to access their WorkSpaces from
   *          anywhere. You cannot modify the default IP access control group for your directory.</p>
   */
  public createIpGroup(
    args: CreateIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateIpGroupCommandOutput>;
  public createIpGroup(
    args: CreateIpGroupCommandInput,
    cb: (err: any, data?: CreateIpGroupCommandOutput) => void
  ): void;
  public createIpGroup(
    args: CreateIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateIpGroupCommandOutput) => void
  ): void;
  public createIpGroup(
    args: CreateIpGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateIpGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateIpGroupCommandOutput) => void
  ): Promise<CreateIpGroupCommandOutput> | void {
    const command = new CreateIpGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates the specified tags for the specified WorkSpaces resource.</p>
   */
  public createTags(
    args: CreateTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTagsCommandOutput>;
  public createTags(
    args: CreateTagsCommandInput,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTagsCommandOutput) => void
  ): void;
  public createTags(
    args: CreateTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateTagsCommandOutput) => void),
    cb?: (err: any, data?: CreateTagsCommandOutput) => void
  ): Promise<CreateTagsCommandOutput> | void {
    const command = new CreateTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates one or more WorkSpaces.</p>
   *          <p>This operation is asynchronous and returns before the WorkSpaces are created.</p>
   */
  public createWorkspaces(
    args: CreateWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateWorkspacesCommandOutput>;
  public createWorkspaces(
    args: CreateWorkspacesCommandInput,
    cb: (err: any, data?: CreateWorkspacesCommandOutput) => void
  ): void;
  public createWorkspaces(
    args: CreateWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateWorkspacesCommandOutput) => void
  ): void;
  public createWorkspaces(
    args: CreateWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: CreateWorkspacesCommandOutput) => void
  ): Promise<CreateWorkspacesCommandOutput> | void {
    const command = new CreateWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified IP access control group.</p>
   *          <p>You cannot delete an IP access control group that is associated with a directory.</p>
   */
  public deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteIpGroupCommandOutput>;
  public deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    cb: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): void;
  public deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): void;
  public deleteIpGroup(
    args: DeleteIpGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteIpGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteIpGroupCommandOutput) => void
  ): Promise<DeleteIpGroupCommandOutput> | void {
    const command = new DeleteIpGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified tags from the specified WorkSpaces resource.</p>
   */
  public deleteTags(
    args: DeleteTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTagsCommandOutput>;
  public deleteTags(
    args: DeleteTagsCommandInput,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTagsCommandOutput) => void
  ): void;
  public deleteTags(
    args: DeleteTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteTagsCommandOutput) => void),
    cb?: (err: any, data?: DeleteTagsCommandOutput) => void
  ): Promise<DeleteTagsCommandOutput> | void {
    const command = new DeleteTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified image from your account. To delete an image, you must first delete
   *          any bundles that are associated with the image and un-share the image if it is shared with
   *          other accounts. </p>
   */
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteWorkspaceImageCommandOutput>;
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void
  ): void;
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void
  ): void;
  public deleteWorkspaceImage(
    args: DeleteWorkspaceImageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteWorkspaceImageCommandOutput) => void),
    cb?: (err: any, data?: DeleteWorkspaceImageCommandOutput) => void
  ): Promise<DeleteWorkspaceImageCommandOutput> | void {
    const command = new DeleteWorkspaceImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deregisters the specified directory. This operation is asynchronous
   *          and returns before the WorkSpace directory is deregistered. If any WorkSpaces are
   *       registered to this directory, you must remove them before you can deregister the directory.</p>
   */
  public deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput>;
  public deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  public deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  public deregisterWorkspaceDirectory(
    args: DeregisterWorkspaceDirectoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void),
    cb?: (err: any, data?: DeregisterWorkspaceDirectoryCommandOutput) => void
  ): Promise<DeregisterWorkspaceDirectoryCommandOutput> | void {
    const command = new DeregisterWorkspaceDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list that describes the configuration of Bring Your Own License (BYOL) for
   *          the specified account.</p>
   */
  public describeAccount(
    args: DescribeAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountCommandOutput>;
  public describeAccount(
    args: DescribeAccountCommandInput,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;
  public describeAccount(
    args: DescribeAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountCommandOutput) => void
  ): void;
  public describeAccount(
    args: DescribeAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountCommandOutput) => void
  ): Promise<DescribeAccountCommandOutput> | void {
    const command = new DescribeAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list that describes modifications to the configuration of Bring Your Own
   *          License (BYOL) for the specified account.</p>
   */
  public describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountModificationsCommandOutput>;
  public describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void
  ): void;
  public describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountModificationsCommandOutput) => void
  ): void;
  public describeAccountModifications(
    args: DescribeAccountModificationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAccountModificationsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountModificationsCommandOutput) => void
  ): Promise<DescribeAccountModificationsCommandOutput> | void {
    const command = new DescribeAccountModificationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified Amazon WorkSpaces clients.</p>
   */
  public describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeClientPropertiesCommandOutput>;
  public describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void
  ): void;
  public describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeClientPropertiesCommandOutput) => void
  ): void;
  public describeClientProperties(
    args: DescribeClientPropertiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeClientPropertiesCommandOutput) => void),
    cb?: (err: any, data?: DescribeClientPropertiesCommandOutput) => void
  ): Promise<DescribeClientPropertiesCommandOutput> | void {
    const command = new DescribeClientPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes one or more of your IP access control groups.</p>
   */
  public describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeIpGroupsCommandOutput>;
  public describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void
  ): void;
  public describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeIpGroupsCommandOutput) => void
  ): void;
  public describeIpGroups(
    args: DescribeIpGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeIpGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeIpGroupsCommandOutput) => void
  ): Promise<DescribeIpGroupsCommandOutput> | void {
    const command = new DescribeIpGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified tags for the specified WorkSpaces resource.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(
    args: DescribeTagsCommandInput,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list that describes the available WorkSpace bundles.</p>
   *          <p>You can filter the results using either bundle ID or owner, but not both.</p>
   */
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceBundlesCommandOutput>;
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void
  ): void;
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void
  ): void;
  public describeWorkspaceBundles(
    args: DescribeWorkspaceBundlesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceBundlesCommandOutput) => void
  ): Promise<DescribeWorkspaceBundlesCommandOutput> | void {
    const command = new DescribeWorkspaceBundlesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the available directories that are registered with
   *          Amazon WorkSpaces.</p>
   */
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceDirectoriesCommandOutput>;
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void
  ): void;
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void
  ): void;
  public describeWorkspaceDirectories(
    args: DescribeWorkspaceDirectoriesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceDirectoriesCommandOutput) => void
  ): Promise<DescribeWorkspaceDirectoriesCommandOutput> | void {
    const command = new DescribeWorkspaceDirectoriesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list that describes one or more specified images, if the image identifiers
   *          are provided. Otherwise, all images in the account are described. </p>
   */
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceImagesCommandOutput>;
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void
  ): void;
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void
  ): void;
  public describeWorkspaceImages(
    args: DescribeWorkspaceImagesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkspaceImagesCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceImagesCommandOutput) => void
  ): Promise<DescribeWorkspaceImagesCommandOutput> | void {
    const command = new DescribeWorkspaceImagesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the specified WorkSpaces.</p>
   *          <p>You can filter the results by using the bundle identifier, directory identifier, or
   *          owner, but you can specify only one filter at a time.</p>
   */
  public describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesCommandOutput>;
  public describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void
  ): void;
  public describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspacesCommandOutput) => void
  ): void;
  public describeWorkspaces(
    args: DescribeWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspacesCommandOutput) => void
  ): Promise<DescribeWorkspacesCommandOutput> | void {
    const command = new DescribeWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the connection status of the specified WorkSpaces.</p>
   */
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspacesConnectionStatusCommandOutput>;
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    cb: (
      err: any,
      data?: DescribeWorkspacesConnectionStatusCommandOutput
    ) => void
  ): void;
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: DescribeWorkspacesConnectionStatusCommandOutput
    ) => void
  ): void;
  public describeWorkspacesConnectionStatus(
    args: DescribeWorkspacesConnectionStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: DescribeWorkspacesConnectionStatusCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: DescribeWorkspacesConnectionStatusCommandOutput
    ) => void
  ): Promise<DescribeWorkspacesConnectionStatusCommandOutput> | void {
    const command = new DescribeWorkspacesConnectionStatusCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the snapshots for the specified WorkSpace.</p>
   */
  public describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeWorkspaceSnapshotsCommandOutput>;
  public describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void
  ): void;
  public describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void
  ): void;
  public describeWorkspaceSnapshots(
    args: DescribeWorkspaceSnapshotsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void),
    cb?: (err: any, data?: DescribeWorkspaceSnapshotsCommandOutput) => void
  ): Promise<DescribeWorkspaceSnapshotsCommandOutput> | void {
    const command = new DescribeWorkspaceSnapshotsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Disassociates the specified IP access control group from the specified directory.</p>
   */
  public disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateIpGroupsCommandOutput>;
  public disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void
  ): void;
  public disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateIpGroupsCommandOutput) => void
  ): void;
  public disassociateIpGroups(
    args: DisassociateIpGroupsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateIpGroupsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateIpGroupsCommandOutput) => void
  ): Promise<DisassociateIpGroupsCommandOutput> | void {
    const command = new DisassociateIpGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Imports the specified Windows 7 or Windows 10 Bring Your Own License (BYOL) image into
   *          Amazon WorkSpaces. The image must be an already licensed EC2 image that is in your AWS
   *          account, and you must own the image. </p>
   */
  public importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ImportWorkspaceImageCommandOutput>;
  public importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void
  ): void;
  public importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ImportWorkspaceImageCommandOutput) => void
  ): void;
  public importWorkspaceImage(
    args: ImportWorkspaceImageCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ImportWorkspaceImageCommandOutput) => void),
    cb?: (err: any, data?: ImportWorkspaceImageCommandOutput) => void
  ): Promise<ImportWorkspaceImageCommandOutput> | void {
    const command = new ImportWorkspaceImageCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Retrieves a list of IP address ranges, specified as IPv4 CIDR blocks, that you can use
   *          for the network management interface when you enable Bring Your Own License (BYOL). </p>
   *          <p>The management network interface is connected to a secure Amazon WorkSpaces management
   *          network. It is used for interactive streaming of the WorkSpace desktop to Amazon WorkSpaces
   *          clients, and to allow Amazon WorkSpaces to manage the WorkSpace.</p>
   */
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAvailableManagementCidrRangesCommandOutput>;
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    cb: (
      err: any,
      data?: ListAvailableManagementCidrRangesCommandOutput
    ) => void
  ): void;
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ListAvailableManagementCidrRangesCommandOutput
    ) => void
  ): void;
  public listAvailableManagementCidrRanges(
    args: ListAvailableManagementCidrRangesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ListAvailableManagementCidrRangesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ListAvailableManagementCidrRangesCommandOutput
    ) => void
  ): Promise<ListAvailableManagementCidrRangesCommandOutput> | void {
    const command = new ListAvailableManagementCidrRangesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Migrates a WorkSpace from one operating system or bundle type to another, while retaining the data on the user volume.</p>
   *
   *          <p>The migration process recreates the WorkSpace by using a new root volume from the target bundle image and the user volume
   *          from the last available snapshot of the original WorkSpace. During migration, the original <code>D:\Users\%USERNAME%</code>
   *          user profile folder is renamed to <code>D:\Users\%USERNAME%MMddyyTHHmmss%.NotMigrated</code>. A new <code>D:\Users\%USERNAME%\</code>
   *          folder is generated by the new OS. Certain files in the old user profile are moved to the new user profile.</p>
   *
   *          <p>For available migration scenarios, details about what happens during migration, and best practices, see
   *          <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/migrate-workspaces.html">Migrate a WorkSpace</a>.</p>
   */
  public migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<MigrateWorkspaceCommandOutput>;
  public migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void
  ): void;
  public migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: MigrateWorkspaceCommandOutput) => void
  ): void;
  public migrateWorkspace(
    args: MigrateWorkspaceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: MigrateWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: MigrateWorkspaceCommandOutput) => void
  ): Promise<MigrateWorkspaceCommandOutput> | void {
    const command = new MigrateWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the configuration of Bring Your Own License (BYOL) for the specified
   *          account.</p>
   */
  public modifyAccount(
    args: ModifyAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyAccountCommandOutput>;
  public modifyAccount(
    args: ModifyAccountCommandInput,
    cb: (err: any, data?: ModifyAccountCommandOutput) => void
  ): void;
  public modifyAccount(
    args: ModifyAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyAccountCommandOutput) => void
  ): void;
  public modifyAccount(
    args: ModifyAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyAccountCommandOutput) => void),
    cb?: (err: any, data?: ModifyAccountCommandOutput) => void
  ): Promise<ModifyAccountCommandOutput> | void {
    const command = new ModifyAccountCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the properties of the specified Amazon WorkSpaces clients.</p>
   */
  public modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyClientPropertiesCommandOutput>;
  public modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void
  ): void;
  public modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyClientPropertiesCommandOutput) => void
  ): void;
  public modifyClientProperties(
    args: ModifyClientPropertiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyClientPropertiesCommandOutput) => void),
    cb?: (err: any, data?: ModifyClientPropertiesCommandOutput) => void
  ): Promise<ModifyClientPropertiesCommandOutput> | void {
    const command = new ModifyClientPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the self-service WorkSpace management capabilities for your users. For more
   *          information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/enable-user-self-service-workspace-management.html">Enable Self-Service WorkSpace Management Capabilities for Your Users</a>.</p>
   */
  public modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifySelfservicePermissionsCommandOutput>;
  public modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void
  ): void;
  public modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void
  ): void;
  public modifySelfservicePermissions(
    args: ModifySelfservicePermissionsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifySelfservicePermissionsCommandOutput) => void),
    cb?: (err: any, data?: ModifySelfservicePermissionsCommandOutput) => void
  ): Promise<ModifySelfservicePermissionsCommandOutput> | void {
    const command = new ModifySelfservicePermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Specifies which devices and operating systems users can use to access their WorkSpaces.
   *          For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/update-directory-details.html#control-device-access">
   *             Control Device Access</a>.</p>
   */
  public modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceAccessPropertiesCommandOutput>;
  public modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void
  ): void;
  public modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void
  ): void;
  public modifyWorkspaceAccessProperties(
    args: ModifyWorkspaceAccessPropertiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ModifyWorkspaceAccessPropertiesCommandOutput
        ) => void),
    cb?: (err: any, data?: ModifyWorkspaceAccessPropertiesCommandOutput) => void
  ): Promise<ModifyWorkspaceAccessPropertiesCommandOutput> | void {
    const command = new ModifyWorkspaceAccessPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modify the default properties used to create WorkSpaces.</p>
   */
  public modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceCreationPropertiesCommandOutput>;
  public modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    cb: (
      err: any,
      data?: ModifyWorkspaceCreationPropertiesCommandOutput
    ) => void
  ): void;
  public modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (
      err: any,
      data?: ModifyWorkspaceCreationPropertiesCommandOutput
    ) => void
  ): void;
  public modifyWorkspaceCreationProperties(
    args: ModifyWorkspaceCreationPropertiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((
          err: any,
          data?: ModifyWorkspaceCreationPropertiesCommandOutput
        ) => void),
    cb?: (
      err: any,
      data?: ModifyWorkspaceCreationPropertiesCommandOutput
    ) => void
  ): Promise<ModifyWorkspaceCreationPropertiesCommandOutput> | void {
    const command = new ModifyWorkspaceCreationPropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Modifies the specified WorkSpace properties.</p>
   */
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspacePropertiesCommandOutput>;
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void
  ): void;
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void
  ): void;
  public modifyWorkspaceProperties(
    args: ModifyWorkspacePropertiesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void),
    cb?: (err: any, data?: ModifyWorkspacePropertiesCommandOutput) => void
  ): Promise<ModifyWorkspacePropertiesCommandOutput> | void {
    const command = new ModifyWorkspacePropertiesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets the state of the specified WorkSpace.</p>
   *          <p>To maintain a WorkSpace without being interrupted, set the WorkSpace state to
   *             <code>ADMIN_MAINTENANCE</code>. WorkSpaces in this state do not respond to requests to
   *          reboot, stop, start, rebuild, or restore. An AutoStop WorkSpace in this state is not
   *          stopped. Users cannot log into a WorkSpace in the <code>ADMIN_MAINTENANCE</code>
   *          state.</p>
   */
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyWorkspaceStateCommandOutput>;
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void
  ): void;
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void
  ): void;
  public modifyWorkspaceState(
    args: ModifyWorkspaceStateCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ModifyWorkspaceStateCommandOutput) => void),
    cb?: (err: any, data?: ModifyWorkspaceStateCommandOutput) => void
  ): Promise<ModifyWorkspaceStateCommandOutput> | void {
    const command = new ModifyWorkspaceStateCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Reboots the specified WorkSpaces.</p>
   *          <p>You cannot reboot a WorkSpace unless its state is <code>AVAILABLE</code> or
   *             <code>UNHEALTHY</code>.</p>
   *          <p>This operation is asynchronous and returns before the WorkSpaces have rebooted.</p>
   */
  public rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebootWorkspacesCommandOutput>;
  public rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    cb: (err: any, data?: RebootWorkspacesCommandOutput) => void
  ): void;
  public rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebootWorkspacesCommandOutput) => void
  ): void;
  public rebootWorkspaces(
    args: RebootWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RebootWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: RebootWorkspacesCommandOutput) => void
  ): Promise<RebootWorkspacesCommandOutput> | void {
    const command = new RebootWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Rebuilds the specified WorkSpace.</p>
   *          <p>You cannot rebuild a WorkSpace unless its state is <code>AVAILABLE</code>,
   *             <code>ERROR</code>, or <code>UNHEALTHY</code>.</p>
   *          <p>Rebuilding a WorkSpace is a potentially destructive action that can result in the loss
   *          of data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/reset-workspace.html">Rebuild a
   *          WorkSpace</a>.</p>
   *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
   *          rebuilt.</p>
   */
  public rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RebuildWorkspacesCommandOutput>;
  public rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void
  ): void;
  public rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RebuildWorkspacesCommandOutput) => void
  ): void;
  public rebuildWorkspaces(
    args: RebuildWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RebuildWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: RebuildWorkspacesCommandOutput) => void
  ): Promise<RebuildWorkspacesCommandOutput> | void {
    const command = new RebuildWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers the specified directory. This operation is asynchronous
   *          and returns before the WorkSpace directory is registered. If this is the first time you are
   *          registering a directory, you will need to create the workspaces_DefaultRole role before you can
   *          register a directory. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/workspaces-access-control.html#create-default-role">
   *             Creating the workspaces_DefaultRole Role</a>.</p>
   */
  public registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterWorkspaceDirectoryCommandOutput>;
  public registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  public registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void
  ): void;
  public registerWorkspaceDirectory(
    args: RegisterWorkspaceDirectoryCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void),
    cb?: (err: any, data?: RegisterWorkspaceDirectoryCommandOutput) => void
  ): Promise<RegisterWorkspaceDirectoryCommandOutput> | void {
    const command = new RegisterWorkspaceDirectoryCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Restores the specified WorkSpace to its last known healthy state.</p>
   *          <p>You cannot restore a WorkSpace unless its state is <code> AVAILABLE</code>,
   *             <code>ERROR</code>, or <code>UNHEALTHY</code>.</p>
   *          <p>Restoring a WorkSpace is a potentially destructive action that can result in the loss of
   *          data. For more information, see <a href="https://docs.aws.amazon.com/workspaces/latest/adminguide/restore-workspace.html">Restore a
   *          WorkSpace</a>.</p>
   *          <p>This operation is asynchronous and returns before the WorkSpace is completely
   *          restored.</p>
   */
  public restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RestoreWorkspaceCommandOutput>;
  public restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void
  ): void;
  public restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RestoreWorkspaceCommandOutput) => void
  ): void;
  public restoreWorkspace(
    args: RestoreWorkspaceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RestoreWorkspaceCommandOutput) => void),
    cb?: (err: any, data?: RestoreWorkspaceCommandOutput) => void
  ): Promise<RestoreWorkspaceCommandOutput> | void {
    const command = new RestoreWorkspaceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes one or more rules from the specified IP access control group.</p>
   */
  public revokeIpRules(
    args: RevokeIpRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RevokeIpRulesCommandOutput>;
  public revokeIpRules(
    args: RevokeIpRulesCommandInput,
    cb: (err: any, data?: RevokeIpRulesCommandOutput) => void
  ): void;
  public revokeIpRules(
    args: RevokeIpRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RevokeIpRulesCommandOutput) => void
  ): void;
  public revokeIpRules(
    args: RevokeIpRulesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: RevokeIpRulesCommandOutput) => void),
    cb?: (err: any, data?: RevokeIpRulesCommandOutput) => void
  ): Promise<RevokeIpRulesCommandOutput> | void {
    const command = new RevokeIpRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts the specified WorkSpaces.</p>
   *          <p>You cannot start a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
   *          state of <code>STOPPED</code>.</p>
   */
  public startWorkspaces(
    args: StartWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartWorkspacesCommandOutput>;
  public startWorkspaces(
    args: StartWorkspacesCommandInput,
    cb: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): void;
  public startWorkspaces(
    args: StartWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): void;
  public startWorkspaces(
    args: StartWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: StartWorkspacesCommandOutput) => void
  ): Promise<StartWorkspacesCommandOutput> | void {
    const command = new StartWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p> Stops the specified WorkSpaces.</p>
   *          <p>You cannot stop a WorkSpace unless it has a running mode of <code>AutoStop</code> and a
   *          state of <code>AVAILABLE</code>, <code>IMPAIRED</code>, <code>UNHEALTHY</code>, or
   *             <code>ERROR</code>.</p>
   */
  public stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopWorkspacesCommandOutput>;
  public stopWorkspaces(
    args: StopWorkspacesCommandInput,
    cb: (err: any, data?: StopWorkspacesCommandOutput) => void
  ): void;
  public stopWorkspaces(
    args: StopWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopWorkspacesCommandOutput) => void
  ): void;
  public stopWorkspaces(
    args: StopWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: StopWorkspacesCommandOutput) => void
  ): Promise<StopWorkspacesCommandOutput> | void {
    const command = new StopWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Terminates the specified WorkSpaces.</p>
   *          <p>Terminating a WorkSpace is a permanent action and cannot be undone. The user's data is
   *          destroyed. If you need to archive any user data, contact Amazon Web Services before
   *          terminating the WorkSpace.</p>
   *          <p>You can terminate a WorkSpace that is in any state except <code>SUSPENDED</code>.</p>
   *          <p>This operation is asynchronous and returns before the WorkSpaces have been completely
   *          terminated.</p>
   */
  public terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TerminateWorkspacesCommandOutput>;
  public terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void
  ): void;
  public terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TerminateWorkspacesCommandOutput) => void
  ): void;
  public terminateWorkspaces(
    args: TerminateWorkspacesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TerminateWorkspacesCommandOutput) => void),
    cb?: (err: any, data?: TerminateWorkspacesCommandOutput) => void
  ): Promise<TerminateWorkspacesCommandOutput> | void {
    const command = new TerminateWorkspacesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Replaces the current rules of the specified IP access control group with the specified
   *          rules.</p>
   */
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRulesOfIpGroupCommandOutput>;
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void
  ): void;
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void
  ): void;
  public updateRulesOfIpGroup(
    args: UpdateRulesOfIpGroupCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateRulesOfIpGroupCommandOutput) => void
  ): Promise<UpdateRulesOfIpGroupCommandOutput> | void {
    const command = new UpdateRulesOfIpGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
