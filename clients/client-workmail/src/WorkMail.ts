import { WorkMailClient } from "./WorkMailClient";
import {
  AssociateDelegateToResourceCommand,
  AssociateDelegateToResourceCommandInput,
  AssociateDelegateToResourceCommandOutput,
} from "./commands/AssociateDelegateToResourceCommand";
import {
  AssociateMemberToGroupCommand,
  AssociateMemberToGroupCommandInput,
  AssociateMemberToGroupCommandOutput,
} from "./commands/AssociateMemberToGroupCommand";
import {
  CancelMailboxExportJobCommand,
  CancelMailboxExportJobCommandInput,
  CancelMailboxExportJobCommandOutput,
} from "./commands/CancelMailboxExportJobCommand";
import { CreateAliasCommand, CreateAliasCommandInput, CreateAliasCommandOutput } from "./commands/CreateAliasCommand";
import { CreateGroupCommand, CreateGroupCommandInput, CreateGroupCommandOutput } from "./commands/CreateGroupCommand";
import {
  CreateOrganizationCommand,
  CreateOrganizationCommandInput,
  CreateOrganizationCommandOutput,
} from "./commands/CreateOrganizationCommand";
import {
  CreateResourceCommand,
  CreateResourceCommandInput,
  CreateResourceCommandOutput,
} from "./commands/CreateResourceCommand";
import { CreateUserCommand, CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  DeleteAccessControlRuleCommand,
  DeleteAccessControlRuleCommandInput,
  DeleteAccessControlRuleCommandOutput,
} from "./commands/DeleteAccessControlRuleCommand";
import { DeleteAliasCommand, DeleteAliasCommandInput, DeleteAliasCommandOutput } from "./commands/DeleteAliasCommand";
import { DeleteGroupCommand, DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import {
  DeleteMailboxPermissionsCommand,
  DeleteMailboxPermissionsCommandInput,
  DeleteMailboxPermissionsCommandOutput,
} from "./commands/DeleteMailboxPermissionsCommand";
import {
  DeleteOrganizationCommand,
  DeleteOrganizationCommandInput,
  DeleteOrganizationCommandOutput,
} from "./commands/DeleteOrganizationCommand";
import {
  DeleteResourceCommand,
  DeleteResourceCommandInput,
  DeleteResourceCommandOutput,
} from "./commands/DeleteResourceCommand";
import {
  DeleteRetentionPolicyCommand,
  DeleteRetentionPolicyCommandInput,
  DeleteRetentionPolicyCommandOutput,
} from "./commands/DeleteRetentionPolicyCommand";
import { DeleteUserCommand, DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeregisterFromWorkMailCommand,
  DeregisterFromWorkMailCommandInput,
  DeregisterFromWorkMailCommandOutput,
} from "./commands/DeregisterFromWorkMailCommand";
import {
  DescribeGroupCommand,
  DescribeGroupCommandInput,
  DescribeGroupCommandOutput,
} from "./commands/DescribeGroupCommand";
import {
  DescribeMailboxExportJobCommand,
  DescribeMailboxExportJobCommandInput,
  DescribeMailboxExportJobCommandOutput,
} from "./commands/DescribeMailboxExportJobCommand";
import {
  DescribeOrganizationCommand,
  DescribeOrganizationCommandInput,
  DescribeOrganizationCommandOutput,
} from "./commands/DescribeOrganizationCommand";
import {
  DescribeResourceCommand,
  DescribeResourceCommandInput,
  DescribeResourceCommandOutput,
} from "./commands/DescribeResourceCommand";
import {
  DescribeUserCommand,
  DescribeUserCommandInput,
  DescribeUserCommandOutput,
} from "./commands/DescribeUserCommand";
import {
  DisassociateDelegateFromResourceCommand,
  DisassociateDelegateFromResourceCommandInput,
  DisassociateDelegateFromResourceCommandOutput,
} from "./commands/DisassociateDelegateFromResourceCommand";
import {
  DisassociateMemberFromGroupCommand,
  DisassociateMemberFromGroupCommandInput,
  DisassociateMemberFromGroupCommandOutput,
} from "./commands/DisassociateMemberFromGroupCommand";
import {
  GetAccessControlEffectCommand,
  GetAccessControlEffectCommandInput,
  GetAccessControlEffectCommandOutput,
} from "./commands/GetAccessControlEffectCommand";
import {
  GetDefaultRetentionPolicyCommand,
  GetDefaultRetentionPolicyCommandInput,
  GetDefaultRetentionPolicyCommandOutput,
} from "./commands/GetDefaultRetentionPolicyCommand";
import {
  GetMailboxDetailsCommand,
  GetMailboxDetailsCommandInput,
  GetMailboxDetailsCommandOutput,
} from "./commands/GetMailboxDetailsCommand";
import {
  ListAccessControlRulesCommand,
  ListAccessControlRulesCommandInput,
  ListAccessControlRulesCommandOutput,
} from "./commands/ListAccessControlRulesCommand";
import { ListAliasesCommand, ListAliasesCommandInput, ListAliasesCommandOutput } from "./commands/ListAliasesCommand";
import {
  ListGroupMembersCommand,
  ListGroupMembersCommandInput,
  ListGroupMembersCommandOutput,
} from "./commands/ListGroupMembersCommand";
import { ListGroupsCommand, ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import {
  ListMailboxExportJobsCommand,
  ListMailboxExportJobsCommandInput,
  ListMailboxExportJobsCommandOutput,
} from "./commands/ListMailboxExportJobsCommand";
import {
  ListMailboxPermissionsCommand,
  ListMailboxPermissionsCommandInput,
  ListMailboxPermissionsCommandOutput,
} from "./commands/ListMailboxPermissionsCommand";
import {
  ListOrganizationsCommand,
  ListOrganizationsCommandInput,
  ListOrganizationsCommandOutput,
} from "./commands/ListOrganizationsCommand";
import {
  ListResourceDelegatesCommand,
  ListResourceDelegatesCommandInput,
  ListResourceDelegatesCommandOutput,
} from "./commands/ListResourceDelegatesCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListUsersCommand, ListUsersCommandInput, ListUsersCommandOutput } from "./commands/ListUsersCommand";
import {
  PutAccessControlRuleCommand,
  PutAccessControlRuleCommandInput,
  PutAccessControlRuleCommandOutput,
} from "./commands/PutAccessControlRuleCommand";
import {
  PutMailboxPermissionsCommand,
  PutMailboxPermissionsCommandInput,
  PutMailboxPermissionsCommandOutput,
} from "./commands/PutMailboxPermissionsCommand";
import {
  PutRetentionPolicyCommand,
  PutRetentionPolicyCommandInput,
  PutRetentionPolicyCommandOutput,
} from "./commands/PutRetentionPolicyCommand";
import {
  RegisterToWorkMailCommand,
  RegisterToWorkMailCommandInput,
  RegisterToWorkMailCommandOutput,
} from "./commands/RegisterToWorkMailCommand";
import {
  ResetPasswordCommand,
  ResetPasswordCommandInput,
  ResetPasswordCommandOutput,
} from "./commands/ResetPasswordCommand";
import {
  StartMailboxExportJobCommand,
  StartMailboxExportJobCommandInput,
  StartMailboxExportJobCommandOutput,
} from "./commands/StartMailboxExportJobCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateMailboxQuotaCommand,
  UpdateMailboxQuotaCommandInput,
  UpdateMailboxQuotaCommandOutput,
} from "./commands/UpdateMailboxQuotaCommand";
import {
  UpdatePrimaryEmailAddressCommand,
  UpdatePrimaryEmailAddressCommandInput,
  UpdatePrimaryEmailAddressCommandOutput,
} from "./commands/UpdatePrimaryEmailAddressCommand";
import {
  UpdateResourceCommand,
  UpdateResourceCommandInput,
  UpdateResourceCommandOutput,
} from "./commands/UpdateResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon WorkMail is a secure, managed business email and calendaring service with support for
 *          existing desktop and mobile email clients. You can access your email, contacts, and
 *          calendars using Microsoft Outlook, your browser, or other native iOS and Android email
 *          applications. You can integrate WorkMail with your existing corporate directory and control
 *          both the keys that encrypt your data and the location in which your data is
 *          stored.</p>
 *          <p>The WorkMail API is designed for the following scenarios:</p>
 *          <ul>
 *             <li>
 *                <p>Listing and describing organizations</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing users</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing groups</p>
 *             </li>
 *          </ul>
 *          <ul>
 *             <li>
 *                <p>Managing resources</p>
 *             </li>
 *          </ul>
 *          <p>All WorkMail API operations are Amazon-authenticated and certificate-signed. They not
 *          only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management
 *          users and roles to help facilitate access, trust, and permission policies. By creating a
 *          role and allowing an IAM user to access the WorkMail site, the IAM user gains full
 *          administrative visibility into the entire WorkMail organization (or as set in the IAM
 *          policy). This includes, but is not limited to, the ability to create, update, and delete
 *          users, groups, and resources. This allows developers to perform the scenarios listed above,
 *          as well as give users the ability to grant access on a selective basis using the IAM
 *          model.</p>
 */
export class WorkMail extends WorkMailClient {
  /**
   * <p>Adds a member (user or group) to the resource's set of delegates.</p>
   */
  public associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateDelegateToResourceCommandOutput>;
  public associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void
  ): void;
  public associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void
  ): void;
  public associateDelegateToResource(
    args: AssociateDelegateToResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateDelegateToResourceCommandOutput) => void),
    cb?: (err: any, data?: AssociateDelegateToResourceCommandOutput) => void
  ): Promise<AssociateDelegateToResourceCommandOutput> | void {
    const command = new AssociateDelegateToResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a member (user or group) to the group's set.</p>
   */
  public associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateMemberToGroupCommandOutput>;
  public associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void
  ): void;
  public associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateMemberToGroupCommandOutput) => void
  ): void;
  public associateMemberToGroup(
    args: AssociateMemberToGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateMemberToGroupCommandOutput) => void),
    cb?: (err: any, data?: AssociateMemberToGroupCommandOutput) => void
  ): Promise<AssociateMemberToGroupCommandOutput> | void {
    const command = new AssociateMemberToGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Cancels a mailbox export job.</p>
   *          <note>
   *             <p>If the mailbox export job is near completion, it might not be possible to cancel
   *             it.</p>
   *          </note>
   */
  public cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CancelMailboxExportJobCommandOutput>;
  public cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void
  ): void;
  public cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelMailboxExportJobCommandOutput) => void
  ): void;
  public cancelMailboxExportJob(
    args: CancelMailboxExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CancelMailboxExportJobCommandOutput) => void),
    cb?: (err: any, data?: CancelMailboxExportJobCommandOutput) => void
  ): Promise<CancelMailboxExportJobCommandOutput> | void {
    const command = new CancelMailboxExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds an alias to the set of a given member (user or group) of Amazon WorkMail.</p>
   */
  public createAlias(args: CreateAliasCommandInput, options?: __HttpHandlerOptions): Promise<CreateAliasCommandOutput>;
  public createAlias(args: CreateAliasCommandInput, cb: (err: any, data?: CreateAliasCommandOutput) => void): void;
  public createAlias(
    args: CreateAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAliasCommandOutput) => void
  ): void;
  public createAlias(
    args: CreateAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAliasCommandOutput) => void),
    cb?: (err: any, data?: CreateAliasCommandOutput) => void
  ): Promise<CreateAliasCommandOutput> | void {
    const command = new CreateAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a group that can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
   */
  public createGroup(args: CreateGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateGroupCommandOutput>;
  public createGroup(args: CreateGroupCommandInput, cb: (err: any, data?: CreateGroupCommandOutput) => void): void;
  public createGroup(
    args: CreateGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateGroupCommandOutput) => void
  ): void;
  public createGroup(
    args: CreateGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateGroupCommandOutput) => void
  ): Promise<CreateGroupCommandOutput> | void {
    const command = new CreateGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new Amazon WorkMail directory for you. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_new_organization.html">Adding an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
   *          <p>You can associate multiple email domains with an organization, then set your default email domain from the Amazon WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/add_domain.html">Adding a domain</a> and <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/default_domain.html">Choosing the default domain</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
   *          <p>Optionally, you can use a customer managed master key from AWS Key Management Service
   *          (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, Amazon WorkMail creates a
   *          default AWS managed master key for you.</p>
   */
  public createOrganization(
    args: CreateOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOrganizationCommandOutput>;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): void;
  public createOrganization(
    args: CreateOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateOrganizationCommandOutput) => void),
    cb?: (err: any, data?: CreateOrganizationCommandOutput) => void
  ): Promise<CreateOrganizationCommandOutput> | void {
    const command = new CreateOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a new Amazon WorkMail resource. </p>
   */
  public createResource(
    args: CreateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceCommandOutput>;
  public createResource(
    args: CreateResourceCommandInput,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceCommandOutput) => void
  ): void;
  public createResource(
    args: CreateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceCommandOutput) => void
  ): Promise<CreateResourceCommandOutput> | void {
    const command = new CreateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a user who can be used in Amazon WorkMail by calling the <a>RegisterToWorkMail</a> operation.</p>
   */
  public createUser(args: CreateUserCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserCommandOutput>;
  public createUser(args: CreateUserCommandInput, cb: (err: any, data?: CreateUserCommandOutput) => void): void;
  public createUser(
    args: CreateUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateUserCommandOutput) => void
  ): void;
  public createUser(
    args: CreateUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateUserCommandOutput) => void),
    cb?: (err: any, data?: CreateUserCommandOutput) => void
  ): Promise<CreateUserCommandOutput> | void {
    const command = new CreateUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an access control rule for the specified WorkMail organization.</p>
   */
  public deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessControlRuleCommandOutput>;
  public deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void
  ): void;
  public deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void
  ): void;
  public deleteAccessControlRule(
    args: DeleteAccessControlRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessControlRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessControlRuleCommandOutput) => void
  ): Promise<DeleteAccessControlRuleCommandOutput> | void {
    const command = new DeleteAccessControlRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Remove one or more specified aliases from a set of aliases for a given
   *          user.</p>
   */
  public deleteAlias(args: DeleteAliasCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAliasCommandOutput>;
  public deleteAlias(args: DeleteAliasCommandInput, cb: (err: any, data?: DeleteAliasCommandOutput) => void): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAliasCommandOutput) => void
  ): void;
  public deleteAlias(
    args: DeleteAliasCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAliasCommandOutput) => void),
    cb?: (err: any, data?: DeleteAliasCommandOutput) => void
  ): Promise<DeleteAliasCommandOutput> | void {
    const command = new DeleteAliasCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a group from Amazon WorkMail.</p>
   */
  public deleteGroup(args: DeleteGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteGroupCommandOutput>;
  public deleteGroup(args: DeleteGroupCommandInput, cb: (err: any, data?: DeleteGroupCommandOutput) => void): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteGroupCommandOutput) => void
  ): void;
  public deleteGroup(
    args: DeleteGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteGroupCommandOutput) => void
  ): Promise<DeleteGroupCommandOutput> | void {
    const command = new DeleteGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes permissions granted to a member (user or group).</p>
   */
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMailboxPermissionsCommandOutput>;
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void
  ): void;
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void
  ): void;
  public deleteMailboxPermissions(
    args: DeleteMailboxPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMailboxPermissionsCommandOutput) => void),
    cb?: (err: any, data?: DeleteMailboxPermissionsCommandOutput) => void
  ): Promise<DeleteMailboxPermissionsCommandOutput> | void {
    const command = new DeleteMailboxPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes an Amazon WorkMail organization and all underlying AWS resources managed by Amazon WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/remove_organization.html">Removing an organization</a> in the <i>Amazon WorkMail Administrator Guide</i>.</p>
   */
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOrganizationCommandOutput>;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): void;
  public deleteOrganization(
    args: DeleteOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DeleteOrganizationCommandOutput) => void
  ): Promise<DeleteOrganizationCommandOutput> | void {
    const command = new DeleteOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified resource. </p>
   */
  public deleteResource(
    args: DeleteResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceCommandOutput>;
  public deleteResource(
    args: DeleteResourceCommandInput,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceCommandOutput) => void
  ): void;
  public deleteResource(
    args: DeleteResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceCommandOutput) => void
  ): Promise<DeleteResourceCommandOutput> | void {
    const command = new DeleteResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes the specified retention policy from the specified organization.</p>
   */
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRetentionPolicyCommandOutput>;
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): void;
  public deleteRetentionPolicy(
    args: DeleteRetentionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRetentionPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteRetentionPolicyCommandOutput) => void
  ): Promise<DeleteRetentionPolicyCommandOutput> | void {
    const command = new DeleteRetentionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a user from Amazon WorkMail and all subsequent systems. Before you can delete a
   *          user, the user state must be <code>DISABLED</code>. Use the <a>DescribeUser</a>
   *          action to confirm the user state.</p>
   *          <p>Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for
   *          30 days before they are permanently removed.</p>
   */
  public deleteUser(args: DeleteUserCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserCommandOutput>;
  public deleteUser(args: DeleteUserCommandInput, cb: (err: any, data?: DeleteUserCommandOutput) => void): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteUserCommandOutput) => void
  ): void;
  public deleteUser(
    args: DeleteUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteUserCommandOutput) => void),
    cb?: (err: any, data?: DeleteUserCommandOutput) => void
  ): Promise<DeleteUserCommandOutput> | void {
    const command = new DeleteUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Mark a user, group, or resource as no longer used in Amazon WorkMail. This action
   *          disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days
   *          before they are permanently removed. The functionality in the console is
   *             <i>Disable</i>.</p>
   */
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterFromWorkMailCommandOutput>;
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void
  ): void;
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void
  ): void;
  public deregisterFromWorkMail(
    args: DeregisterFromWorkMailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterFromWorkMailCommandOutput) => void),
    cb?: (err: any, data?: DeregisterFromWorkMailCommandOutput) => void
  ): Promise<DeregisterFromWorkMailCommandOutput> | void {
    const command = new DeregisterFromWorkMailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the data available for the group.</p>
   */
  public describeGroup(
    args: DescribeGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeGroupCommandOutput>;
  public describeGroup(
    args: DescribeGroupCommandInput,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeGroupCommandOutput) => void
  ): void;
  public describeGroup(
    args: DescribeGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeGroupCommandOutput) => void
  ): Promise<DescribeGroupCommandOutput> | void {
    const command = new DescribeGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Describes the current status of a mailbox export job.</p>
   */
  public describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeMailboxExportJobCommandOutput>;
  public describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void
  ): void;
  public describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void
  ): void;
  public describeMailboxExportJob(
    args: DescribeMailboxExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeMailboxExportJobCommandOutput) => void),
    cb?: (err: any, data?: DescribeMailboxExportJobCommandOutput) => void
  ): Promise<DescribeMailboxExportJobCommandOutput> | void {
    const command = new DescribeMailboxExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides more information regarding a given organization based on its
   *          identifier.</p>
   */
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOrganizationCommandOutput>;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): void;
  public describeOrganization(
    args: DescribeOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeOrganizationCommandOutput) => void),
    cb?: (err: any, data?: DescribeOrganizationCommandOutput) => void
  ): Promise<DescribeOrganizationCommandOutput> | void {
    const command = new DescribeOrganizationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns the data available for the resource.</p>
   */
  public describeResource(
    args: DescribeResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourceCommandOutput>;
  public describeResource(
    args: DescribeResourceCommandInput,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  public describeResource(
    args: DescribeResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourceCommandOutput) => void
  ): void;
  public describeResource(
    args: DescribeResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourceCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourceCommandOutput) => void
  ): Promise<DescribeResourceCommandOutput> | void {
    const command = new DescribeResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Provides information regarding the user.</p>
   */
  public describeUser(
    args: DescribeUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeUserCommandOutput>;
  public describeUser(args: DescribeUserCommandInput, cb: (err: any, data?: DescribeUserCommandOutput) => void): void;
  public describeUser(
    args: DescribeUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeUserCommandOutput) => void
  ): void;
  public describeUser(
    args: DescribeUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeUserCommandOutput) => void),
    cb?: (err: any, data?: DescribeUserCommandOutput) => void
  ): Promise<DescribeUserCommandOutput> | void {
    const command = new DescribeUserCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a member from the resource's set of delegates.</p>
   */
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateDelegateFromResourceCommandOutput>;
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void
  ): void;
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void
  ): void;
  public disassociateDelegateFromResource(
    args: DisassociateDelegateFromResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void),
    cb?: (err: any, data?: DisassociateDelegateFromResourceCommandOutput) => void
  ): Promise<DisassociateDelegateFromResourceCommandOutput> | void {
    const command = new DisassociateDelegateFromResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Removes a member from a group.</p>
   */
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateMemberFromGroupCommandOutput>;
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void
  ): void;
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void
  ): void;
  public disassociateMemberFromGroup(
    args: DisassociateMemberFromGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateMemberFromGroupCommandOutput) => void),
    cb?: (err: any, data?: DisassociateMemberFromGroupCommandOutput) => void
  ): Promise<DisassociateMemberFromGroupCommandOutput> | void {
    const command = new DisassociateMemberFromGroupCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the effects of an organization's access control rules as they apply to a
   *          specified IPv4 address, access protocol action, or user ID. </p>
   */
  public getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessControlEffectCommandOutput>;
  public getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void
  ): void;
  public getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessControlEffectCommandOutput) => void
  ): void;
  public getAccessControlEffect(
    args: GetAccessControlEffectCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessControlEffectCommandOutput) => void),
    cb?: (err: any, data?: GetAccessControlEffectCommandOutput) => void
  ): Promise<GetAccessControlEffectCommandOutput> | void {
    const command = new GetAccessControlEffectCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets the default retention policy details for the specified organization.</p>
   */
  public getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDefaultRetentionPolicyCommandOutput>;
  public getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void
  ): void;
  public getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void
  ): void;
  public getDefaultRetentionPolicy(
    args: GetDefaultRetentionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetDefaultRetentionPolicyCommandOutput) => void
  ): Promise<GetDefaultRetentionPolicyCommandOutput> | void {
    const command = new GetDefaultRetentionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Requests a user's mailbox details for a specified organization and user.</p>
   */
  public getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMailboxDetailsCommandOutput>;
  public getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void
  ): void;
  public getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMailboxDetailsCommandOutput) => void
  ): void;
  public getMailboxDetails(
    args: GetMailboxDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMailboxDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetMailboxDetailsCommandOutput) => void
  ): Promise<GetMailboxDetailsCommandOutput> | void {
    const command = new GetMailboxDetailsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the access control rules for the specified organization.</p>
   */
  public listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessControlRulesCommandOutput>;
  public listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void
  ): void;
  public listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessControlRulesCommandOutput) => void
  ): void;
  public listAccessControlRules(
    args: ListAccessControlRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessControlRulesCommandOutput) => void),
    cb?: (err: any, data?: ListAccessControlRulesCommandOutput) => void
  ): Promise<ListAccessControlRulesCommandOutput> | void {
    const command = new ListAccessControlRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Creates a paginated call to list the aliases associated with a given
   *          entity.</p>
   */
  public listAliases(args: ListAliasesCommandInput, options?: __HttpHandlerOptions): Promise<ListAliasesCommandOutput>;
  public listAliases(args: ListAliasesCommandInput, cb: (err: any, data?: ListAliasesCommandOutput) => void): void;
  public listAliases(
    args: ListAliasesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAliasesCommandOutput) => void
  ): void;
  public listAliases(
    args: ListAliasesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAliasesCommandOutput) => void),
    cb?: (err: any, data?: ListAliasesCommandOutput) => void
  ): Promise<ListAliasesCommandOutput> | void {
    const command = new ListAliasesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns an overview of the members of a group. Users and groups can be members of a
   *          group.</p>
   */
  public listGroupMembers(
    args: ListGroupMembersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroupMembersCommandOutput>;
  public listGroupMembers(
    args: ListGroupMembersCommandInput,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;
  public listGroupMembers(
    args: ListGroupMembersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): void;
  public listGroupMembers(
    args: ListGroupMembersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupMembersCommandOutput) => void),
    cb?: (err: any, data?: ListGroupMembersCommandOutput) => void
  ): Promise<ListGroupMembersCommandOutput> | void {
    const command = new ListGroupMembersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns summaries of the organization's groups.</p>
   */
  public listGroups(args: ListGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListGroupsCommandOutput>;
  public listGroups(args: ListGroupsCommandInput, cb: (err: any, data?: ListGroupsCommandOutput) => void): void;
  public listGroups(
    args: ListGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroupsCommandOutput) => void
  ): void;
  public listGroups(
    args: ListGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListGroupsCommandOutput) => void
  ): Promise<ListGroupsCommandOutput> | void {
    const command = new ListGroupsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the mailbox export jobs started for the specified organization within the last
   *          seven days.</p>
   */
  public listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMailboxExportJobsCommandOutput>;
  public listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void
  ): void;
  public listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMailboxExportJobsCommandOutput) => void
  ): void;
  public listMailboxExportJobs(
    args: ListMailboxExportJobsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMailboxExportJobsCommandOutput) => void),
    cb?: (err: any, data?: ListMailboxExportJobsCommandOutput) => void
  ): Promise<ListMailboxExportJobsCommandOutput> | void {
    const command = new ListMailboxExportJobsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the mailbox permissions associated with a user, group, or resource
   *          mailbox.</p>
   */
  public listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMailboxPermissionsCommandOutput>;
  public listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void
  ): void;
  public listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMailboxPermissionsCommandOutput) => void
  ): void;
  public listMailboxPermissions(
    args: ListMailboxPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMailboxPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListMailboxPermissionsCommandOutput) => void
  ): Promise<ListMailboxPermissionsCommandOutput> | void {
    const command = new ListMailboxPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns summaries of the customer's organizations.</p>
   */
  public listOrganizations(
    args: ListOrganizationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOrganizationsCommandOutput>;
  public listOrganizations(
    args: ListOrganizationsCommandInput,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;
  public listOrganizations(
    args: ListOrganizationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): void;
  public listOrganizations(
    args: ListOrganizationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListOrganizationsCommandOutput) => void),
    cb?: (err: any, data?: ListOrganizationsCommandOutput) => void
  ): Promise<ListOrganizationsCommandOutput> | void {
    const command = new ListOrganizationsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the delegates associated with a resource. Users and groups can be resource
   *          delegates and answer requests on behalf of the resource.</p>
   */
  public listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceDelegatesCommandOutput>;
  public listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void
  ): void;
  public listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceDelegatesCommandOutput) => void
  ): void;
  public listResourceDelegates(
    args: ListResourceDelegatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceDelegatesCommandOutput) => void),
    cb?: (err: any, data?: ListResourceDelegatesCommandOutput) => void
  ): Promise<ListResourceDelegatesCommandOutput> | void {
    const command = new ListResourceDelegatesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns summaries of the organization's resources.</p>
   */
  public listResources(
    args: ListResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourcesCommandOutput>;
  public listResources(
    args: ListResourcesCommandInput,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourcesCommandOutput) => void
  ): void;
  public listResources(
    args: ListResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListResourcesCommandOutput) => void
  ): Promise<ListResourcesCommandOutput> | void {
    const command = new ListResourcesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags applied to an Amazon WorkMail organization resource.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns summaries of the organization's users.</p>
   */
  public listUsers(args: ListUsersCommandInput, options?: __HttpHandlerOptions): Promise<ListUsersCommandOutput>;
  public listUsers(args: ListUsersCommandInput, cb: (err: any, data?: ListUsersCommandOutput) => void): void;
  public listUsers(
    args: ListUsersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListUsersCommandOutput) => void
  ): void;
  public listUsers(
    args: ListUsersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListUsersCommandOutput) => void),
    cb?: (err: any, data?: ListUsersCommandOutput) => void
  ): Promise<ListUsersCommandOutput> | void {
    const command = new ListUsersCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Adds a new access control rule for the specified organization. The rule allows or
   *          denies access to the organization for the specified IPv4 addresses, access protocol
   *          actions, and user IDs. Adding a new rule with the same name as an existing rule replaces
   *          the older rule.</p>
   */
  public putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAccessControlRuleCommandOutput>;
  public putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void
  ): void;
  public putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAccessControlRuleCommandOutput) => void
  ): void;
  public putAccessControlRule(
    args: PutAccessControlRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAccessControlRuleCommandOutput) => void),
    cb?: (err: any, data?: PutAccessControlRuleCommandOutput) => void
  ): Promise<PutAccessControlRuleCommandOutput> | void {
    const command = new PutAccessControlRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Sets permissions for a user, group, or resource. This replaces any pre-existing
   *          permissions.</p>
   */
  public putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMailboxPermissionsCommandOutput>;
  public putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void
  ): void;
  public putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMailboxPermissionsCommandOutput) => void
  ): void;
  public putMailboxPermissions(
    args: PutMailboxPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutMailboxPermissionsCommandOutput) => void),
    cb?: (err: any, data?: PutMailboxPermissionsCommandOutput) => void
  ): Promise<PutMailboxPermissionsCommandOutput> | void {
    const command = new PutMailboxPermissionsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Puts a retention policy to the specified organization.</p>
   */
  public putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRetentionPolicyCommandOutput>;
  public putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  public putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): void;
  public putRetentionPolicy(
    args: PutRetentionPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRetentionPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutRetentionPolicyCommandOutput) => void
  ): Promise<PutRetentionPolicyCommandOutput> | void {
    const command = new PutRetentionPolicyCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Registers an existing and disabled user, group, or resource for Amazon WorkMail use by
   *          associating a mailbox and calendaring capabilities. It performs no change if the user,
   *          group, or resource is enabled and fails if the user, group, or resource is deleted. This
   *          operation results in the accumulation of costs. For more information, see <a href="https://aws.amazon.com/workmail/pricing">Pricing</a>. The equivalent console
   *          functionality for this operation is <i>Enable</i>. </p>
   *          <p>Users can either be created by calling the <a>CreateUser</a> API operation
   *          or they can be synchronized from your directory. For more information, see <a>DeregisterFromWorkMail</a>.</p>
   */
  public registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterToWorkMailCommandOutput>;
  public registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void
  ): void;
  public registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterToWorkMailCommandOutput) => void
  ): void;
  public registerToWorkMail(
    args: RegisterToWorkMailCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterToWorkMailCommandOutput) => void),
    cb?: (err: any, data?: RegisterToWorkMailCommandOutput) => void
  ): Promise<RegisterToWorkMailCommandOutput> | void {
    const command = new RegisterToWorkMailCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Allows the administrator to reset the password for a user.</p>
   */
  public resetPassword(
    args: ResetPasswordCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ResetPasswordCommandOutput>;
  public resetPassword(
    args: ResetPasswordCommandInput,
    cb: (err: any, data?: ResetPasswordCommandOutput) => void
  ): void;
  public resetPassword(
    args: ResetPasswordCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ResetPasswordCommandOutput) => void
  ): void;
  public resetPassword(
    args: ResetPasswordCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ResetPasswordCommandOutput) => void),
    cb?: (err: any, data?: ResetPasswordCommandOutput) => void
  ): Promise<ResetPasswordCommandOutput> | void {
    const command = new ResetPasswordCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a mailbox export job to export MIME-format email messages and calendar items
   *          from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3)
   *          bucket. For more information, see <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/mail-export.html">Exporting mailbox content</a> in
   *          the <i>Amazon WorkMail Administrator Guide</i>.</p>
   */
  public startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartMailboxExportJobCommandOutput>;
  public startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void
  ): void;
  public startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartMailboxExportJobCommandOutput) => void
  ): void;
  public startMailboxExportJob(
    args: StartMailboxExportJobCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartMailboxExportJobCommandOutput) => void),
    cb?: (err: any, data?: StartMailboxExportJobCommandOutput) => void
  ): Promise<StartMailboxExportJobCommandOutput> | void {
    const command = new StartMailboxExportJobCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Applies the specified tags to the specified Amazon WorkMail organization
   *          resource.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Untags the specified tags from the specified Amazon WorkMail organization
   *          resource.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates a user's current mailbox quota for a specified organization and
   *          user.</p>
   */
  public updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMailboxQuotaCommandOutput>;
  public updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void
  ): void;
  public updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void
  ): void;
  public updateMailboxQuota(
    args: UpdateMailboxQuotaCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateMailboxQuotaCommandOutput) => void),
    cb?: (err: any, data?: UpdateMailboxQuotaCommandOutput) => void
  ): Promise<UpdateMailboxQuotaCommandOutput> | void {
    const command = new UpdateMailboxQuotaCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates the primary email for a user, group, or resource. The current email is moved
   *          into the list of aliases (or swapped between an existing alias and the current primary
   *          email), and the email provided in the input is promoted as the primary.</p>
   */
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdatePrimaryEmailAddressCommandOutput>;
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void
  ): void;
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void
  ): void;
  public updatePrimaryEmailAddress(
    args: UpdatePrimaryEmailAddressCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void),
    cb?: (err: any, data?: UpdatePrimaryEmailAddressCommandOutput) => void
  ): Promise<UpdatePrimaryEmailAddressCommandOutput> | void {
    const command = new UpdatePrimaryEmailAddressCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates data for the resource. To have the latest information, it must be preceded by
   *          a <a>DescribeResource</a> call. The dataset in the request should be the one
   *          expected when performing another <code>DescribeResource</code> call.</p>
   */
  public updateResource(
    args: UpdateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceCommandOutput>;
  public updateResource(
    args: UpdateResourceCommandInput,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceCommandOutput) => void
  ): void;
  public updateResource(
    args: UpdateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceCommandOutput) => void
  ): Promise<UpdateResourceCommandOutput> | void {
    const command = new UpdateResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
