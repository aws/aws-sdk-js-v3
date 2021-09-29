import { RAMClient } from "./RAMClient";
import {
  AcceptResourceShareInvitationCommand,
  AcceptResourceShareInvitationCommandInput,
  AcceptResourceShareInvitationCommandOutput,
} from "./commands/AcceptResourceShareInvitationCommand";
import {
  AssociateResourceShareCommand,
  AssociateResourceShareCommandInput,
  AssociateResourceShareCommandOutput,
} from "./commands/AssociateResourceShareCommand";
import {
  AssociateResourceSharePermissionCommand,
  AssociateResourceSharePermissionCommandInput,
  AssociateResourceSharePermissionCommandOutput,
} from "./commands/AssociateResourceSharePermissionCommand";
import {
  CreateResourceShareCommand,
  CreateResourceShareCommandInput,
  CreateResourceShareCommandOutput,
} from "./commands/CreateResourceShareCommand";
import {
  DeleteResourceShareCommand,
  DeleteResourceShareCommandInput,
  DeleteResourceShareCommandOutput,
} from "./commands/DeleteResourceShareCommand";
import {
  DisassociateResourceShareCommand,
  DisassociateResourceShareCommandInput,
  DisassociateResourceShareCommandOutput,
} from "./commands/DisassociateResourceShareCommand";
import {
  DisassociateResourceSharePermissionCommand,
  DisassociateResourceSharePermissionCommandInput,
  DisassociateResourceSharePermissionCommandOutput,
} from "./commands/DisassociateResourceSharePermissionCommand";
import {
  EnableSharingWithAwsOrganizationCommand,
  EnableSharingWithAwsOrganizationCommandInput,
  EnableSharingWithAwsOrganizationCommandOutput,
} from "./commands/EnableSharingWithAwsOrganizationCommand";
import {
  GetPermissionCommand,
  GetPermissionCommandInput,
  GetPermissionCommandOutput,
} from "./commands/GetPermissionCommand";
import {
  GetResourcePoliciesCommand,
  GetResourcePoliciesCommandInput,
  GetResourcePoliciesCommandOutput,
} from "./commands/GetResourcePoliciesCommand";
import {
  GetResourceShareAssociationsCommand,
  GetResourceShareAssociationsCommandInput,
  GetResourceShareAssociationsCommandOutput,
} from "./commands/GetResourceShareAssociationsCommand";
import {
  GetResourceShareInvitationsCommand,
  GetResourceShareInvitationsCommandInput,
  GetResourceShareInvitationsCommandOutput,
} from "./commands/GetResourceShareInvitationsCommand";
import {
  GetResourceSharesCommand,
  GetResourceSharesCommandInput,
  GetResourceSharesCommandOutput,
} from "./commands/GetResourceSharesCommand";
import {
  ListPendingInvitationResourcesCommand,
  ListPendingInvitationResourcesCommandInput,
  ListPendingInvitationResourcesCommandOutput,
} from "./commands/ListPendingInvitationResourcesCommand";
import {
  ListPermissionsCommand,
  ListPermissionsCommandInput,
  ListPermissionsCommandOutput,
} from "./commands/ListPermissionsCommand";
import {
  ListPrincipalsCommand,
  ListPrincipalsCommandInput,
  ListPrincipalsCommandOutput,
} from "./commands/ListPrincipalsCommand";
import {
  ListResourceSharePermissionsCommand,
  ListResourceSharePermissionsCommandInput,
  ListResourceSharePermissionsCommandOutput,
} from "./commands/ListResourceSharePermissionsCommand";
import {
  ListResourceTypesCommand,
  ListResourceTypesCommandInput,
  ListResourceTypesCommandOutput,
} from "./commands/ListResourceTypesCommand";
import {
  ListResourcesCommand,
  ListResourcesCommandInput,
  ListResourcesCommandOutput,
} from "./commands/ListResourcesCommand";
import {
  PromoteResourceShareCreatedFromPolicyCommand,
  PromoteResourceShareCreatedFromPolicyCommandInput,
  PromoteResourceShareCreatedFromPolicyCommandOutput,
} from "./commands/PromoteResourceShareCreatedFromPolicyCommand";
import {
  RejectResourceShareInvitationCommand,
  RejectResourceShareInvitationCommandInput,
  RejectResourceShareInvitationCommandOutput,
} from "./commands/RejectResourceShareInvitationCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateResourceShareCommand,
  UpdateResourceShareCommandInput,
  UpdateResourceShareCommandOutput,
} from "./commands/UpdateResourceShareCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>This is the <i>Resource Access Manager API Reference</i>. This documentation provides
 *             descriptions and syntax for each of the actions and data types in RAM. RAM is a
 *             service that helps you securely share your Amazon Web Services resources across Amazon Web Services accounts and
 *             within your organization or organizational units (OUs) in Organizations. For supported
 *             resource types, you can also share resources with IAM roles and IAM users. If you have
 *             multiple Amazon Web Services accounts, you can use RAM to share those resources with other
 *             accounts.</p>
 *
 *         <p>To learn more about RAM, see the following resources:</p>
 *
 *         <ul>
 *             <li>
 *                 <p>
 *                     <a href="http://aws.amazon.com/ram">Resource Access Manager product page</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/ram/latest/userguide/">Resource Access Manager User
 *                         Guide</a>
 *                </p>
 *             </li>
 *          </ul>
 */
export class RAM extends RAMClient {
  /**
   * <p>Accepts an invitation to a resource share from another Amazon Web Services account.</p>
   */
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AcceptResourceShareInvitationCommandOutput>;
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): void;
  public acceptResourceShareInvitation(
    args: AcceptResourceShareInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AcceptResourceShareInvitationCommandOutput) => void),
    cb?: (err: any, data?: AcceptResourceShareInvitationCommandOutput) => void
  ): Promise<AcceptResourceShareInvitationCommandOutput> | void {
    const command = new AcceptResourceShareInvitationCommand(args);
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
   * <p>Associates the specified resource share with the specified principals and resources.</p>
   */
  public associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceShareCommandOutput>;
  public associateResourceShare(
    args: AssociateResourceShareCommandInput,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;
  public associateResourceShare(
    args: AssociateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): void;
  public associateResourceShare(
    args: AssociateResourceShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResourceShareCommandOutput) => void),
    cb?: (err: any, data?: AssociateResourceShareCommandOutput) => void
  ): Promise<AssociateResourceShareCommandOutput> | void {
    const command = new AssociateResourceShareCommand(args);
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
   * <p>Associates a permission with a resource share.</p>
   */
  public associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateResourceSharePermissionCommandOutput>;
  public associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;
  public associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): void;
  public associateResourceSharePermission(
    args: AssociateResourceSharePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateResourceSharePermissionCommandOutput) => void),
    cb?: (err: any, data?: AssociateResourceSharePermissionCommandOutput) => void
  ): Promise<AssociateResourceSharePermissionCommandOutput> | void {
    const command = new AssociateResourceSharePermissionCommand(args);
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
   * <p>Creates a resource share. You must provide a list of the Amazon Resource Names (ARNs) for the
   *             resources you want to share. You must also specify who you want to share the resources
   *             with, and the permissions that you grant them.</p>
   *         <note>
   *             <p>Sharing a resource makes it available for use by principals outside of the
   *                 Amazon Web Services account that created the resource. Sharing doesn't change any permissions or
   *                 quotas that apply to the resource in the account that created it.</p>
   *         </note>
   */
  public createResourceShare(
    args: CreateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateResourceShareCommandOutput>;
  public createResourceShare(
    args: CreateResourceShareCommandInput,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;
  public createResourceShare(
    args: CreateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): void;
  public createResourceShare(
    args: CreateResourceShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateResourceShareCommandOutput) => void),
    cb?: (err: any, data?: CreateResourceShareCommandOutput) => void
  ): Promise<CreateResourceShareCommandOutput> | void {
    const command = new CreateResourceShareCommand(args);
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
   * <p>Deletes the specified resource share.</p>
   */
  public deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceShareCommandOutput>;
  public deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;
  public deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): void;
  public deleteResourceShare(
    args: DeleteResourceShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceShareCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceShareCommandOutput) => void
  ): Promise<DeleteResourceShareCommandOutput> | void {
    const command = new DeleteResourceShareCommand(args);
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
   * <p>Disassociates the specified principals or resources from the specified resource share.</p>
   */
  public disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceShareCommandOutput>;
  public disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;
  public disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): void;
  public disassociateResourceShare(
    args: DisassociateResourceShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateResourceShareCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResourceShareCommandOutput) => void
  ): Promise<DisassociateResourceShareCommandOutput> | void {
    const command = new DisassociateResourceShareCommand(args);
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
   * <p>Disassociates an RAM permission from a resource share.</p>
   */
  public disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateResourceSharePermissionCommandOutput>;
  public disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;
  public disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): void;
  public disassociateResourceSharePermission(
    args: DisassociateResourceSharePermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void),
    cb?: (err: any, data?: DisassociateResourceSharePermissionCommandOutput) => void
  ): Promise<DisassociateResourceSharePermissionCommandOutput> | void {
    const command = new DisassociateResourceSharePermissionCommand(args);
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
   * <p>Enables resource sharing within your organization in Organizations.</p>
   *         <p>The caller must be the master account for the organization.</p>
   */
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput>;
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): void;
  public enableSharingWithAwsOrganization(
    args: EnableSharingWithAwsOrganizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void),
    cb?: (err: any, data?: EnableSharingWithAwsOrganizationCommandOutput) => void
  ): Promise<EnableSharingWithAwsOrganizationCommandOutput> | void {
    const command = new EnableSharingWithAwsOrganizationCommand(args);
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
   * <p>Gets the contents of an RAM permission in JSON format.</p>
   */
  public getPermission(
    args: GetPermissionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPermissionCommandOutput>;
  public getPermission(
    args: GetPermissionCommandInput,
    cb: (err: any, data?: GetPermissionCommandOutput) => void
  ): void;
  public getPermission(
    args: GetPermissionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPermissionCommandOutput) => void
  ): void;
  public getPermission(
    args: GetPermissionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPermissionCommandOutput) => void),
    cb?: (err: any, data?: GetPermissionCommandOutput) => void
  ): Promise<GetPermissionCommandOutput> | void {
    const command = new GetPermissionCommand(args);
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
   * <p>Gets the policies for the specified resources that you own and have shared.</p>
   */
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePoliciesCommandOutput>;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): void;
  public getResourcePolicies(
    args: GetResourcePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePoliciesCommandOutput) => void
  ): Promise<GetResourcePoliciesCommandOutput> | void {
    const command = new GetResourcePoliciesCommand(args);
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
   * <p>Gets the resources or principals for the resource shares that you own.</p>
   */
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceShareAssociationsCommandOutput>;
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): void;
  public getResourceShareAssociations(
    args: GetResourceShareAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceShareAssociationsCommandOutput) => void),
    cb?: (err: any, data?: GetResourceShareAssociationsCommandOutput) => void
  ): Promise<GetResourceShareAssociationsCommandOutput> | void {
    const command = new GetResourceShareAssociationsCommand(args);
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
   * <p>Gets the invitations that you have received for resource shares.</p>
   */
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceShareInvitationsCommandOutput>;
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): void;
  public getResourceShareInvitations(
    args: GetResourceShareInvitationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceShareInvitationsCommandOutput) => void),
    cb?: (err: any, data?: GetResourceShareInvitationsCommandOutput) => void
  ): Promise<GetResourceShareInvitationsCommandOutput> | void {
    const command = new GetResourceShareInvitationsCommand(args);
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
   * <p>Gets the resource shares that you own or the resource shares that are shared with you.</p>
   */
  public getResourceShares(
    args: GetResourceSharesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSharesCommandOutput>;
  public getResourceShares(
    args: GetResourceSharesCommandInput,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;
  public getResourceShares(
    args: GetResourceSharesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): void;
  public getResourceShares(
    args: GetResourceSharesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceSharesCommandOutput) => void),
    cb?: (err: any, data?: GetResourceSharesCommandOutput) => void
  ): Promise<GetResourceSharesCommandOutput> | void {
    const command = new GetResourceSharesCommand(args);
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
   * <p>Lists the resources in a resource share that is shared with you but that the invitation is still
   *             pending for.</p>
   */
  public listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPendingInvitationResourcesCommandOutput>;
  public listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;
  public listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): void;
  public listPendingInvitationResources(
    args: ListPendingInvitationResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPendingInvitationResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListPendingInvitationResourcesCommandOutput) => void
  ): Promise<ListPendingInvitationResourcesCommandOutput> | void {
    const command = new ListPendingInvitationResourcesCommand(args);
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
   * <p>Lists the RAM permissions.</p>
   */
  public listPermissions(
    args: ListPermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPermissionsCommandOutput>;
  public listPermissions(
    args: ListPermissionsCommandInput,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPermissionsCommandOutput) => void
  ): void;
  public listPermissions(
    args: ListPermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListPermissionsCommandOutput) => void
  ): Promise<ListPermissionsCommandOutput> | void {
    const command = new ListPermissionsCommand(args);
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
   * <p>Lists the principals that you have shared resources with or that have shared resources
   *             with you.</p>
   */
  public listPrincipals(
    args: ListPrincipalsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrincipalsCommandOutput>;
  public listPrincipals(
    args: ListPrincipalsCommandInput,
    cb: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): void;
  public listPrincipals(
    args: ListPrincipalsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): void;
  public listPrincipals(
    args: ListPrincipalsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPrincipalsCommandOutput) => void),
    cb?: (err: any, data?: ListPrincipalsCommandOutput) => void
  ): Promise<ListPrincipalsCommandOutput> | void {
    const command = new ListPrincipalsCommand(args);
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
   * <p>Lists the resources that you added to a resource shares or the resources that are shared with
   *             you.</p>
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
   * <p>Lists the RAM permissions that are associated with a resource share.</p>
   */
  public listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSharePermissionsCommandOutput>;
  public listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;
  public listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): void;
  public listResourceSharePermissions(
    args: ListResourceSharePermissionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceSharePermissionsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceSharePermissionsCommandOutput) => void
  ): Promise<ListResourceSharePermissionsCommandOutput> | void {
    const command = new ListResourceSharePermissionsCommand(args);
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
   * <p>Lists the shareable resource types supported by RAM.</p>
   */
  public listResourceTypes(
    args: ListResourceTypesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceTypesCommandOutput>;
  public listResourceTypes(
    args: ListResourceTypesCommandInput,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;
  public listResourceTypes(
    args: ListResourceTypesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): void;
  public listResourceTypes(
    args: ListResourceTypesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceTypesCommandOutput) => void),
    cb?: (err: any, data?: ListResourceTypesCommandOutput) => void
  ): Promise<ListResourceTypesCommandOutput> | void {
    const command = new ListResourceTypesCommand(args);
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
   * <p>Resource shares that were created by attaching a policy to a resource are visible only
   *             to the resource share owner, and the resource share cannot be modified in RAM.</p>
   *
   *         <p>Use this API action to promote the resource share. When you promote the resource
   *             share, it becomes:</p>
   *         <ul>
   *             <li>
   *                 <p>Visible to all principals that it is shared with.</p>
   *             </li>
   *             <li>
   *                 <p>Modifiable in RAM.</p>
   *             </li>
   *          </ul>
   */
  public promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput>;
  public promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;
  public promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): void;
  public promoteResourceShareCreatedFromPolicy(
    args: PromoteResourceShareCreatedFromPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void),
    cb?: (err: any, data?: PromoteResourceShareCreatedFromPolicyCommandOutput) => void
  ): Promise<PromoteResourceShareCreatedFromPolicyCommandOutput> | void {
    const command = new PromoteResourceShareCreatedFromPolicyCommand(args);
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
   * <p>Rejects an invitation to a resource share from another Amazon Web Services account.</p>
   */
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RejectResourceShareInvitationCommandOutput>;
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): void;
  public rejectResourceShareInvitation(
    args: RejectResourceShareInvitationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RejectResourceShareInvitationCommandOutput) => void),
    cb?: (err: any, data?: RejectResourceShareInvitationCommandOutput) => void
  ): Promise<RejectResourceShareInvitationCommandOutput> | void {
    const command = new RejectResourceShareInvitationCommand(args);
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
   * <p>Adds the specified tags to the specified resource share that you own.</p>
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
   * <p>Removes the specified tags from the specified resource share that you own.</p>
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
   * <p>Updates the specified resource share that you own.</p>
   */
  public updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateResourceShareCommandOutput>;
  public updateResourceShare(
    args: UpdateResourceShareCommandInput,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;
  public updateResourceShare(
    args: UpdateResourceShareCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): void;
  public updateResourceShare(
    args: UpdateResourceShareCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateResourceShareCommandOutput) => void),
    cb?: (err: any, data?: UpdateResourceShareCommandOutput) => void
  ): Promise<UpdateResourceShareCommandOutput> | void {
    const command = new UpdateResourceShareCommand(args);
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
