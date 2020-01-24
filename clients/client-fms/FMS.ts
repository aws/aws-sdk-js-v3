import { FMSClient } from "./FMSClient";
import {
  AssociateAdminAccountCommand,
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput
} from "./commands/AssociateAdminAccountCommand";
import {
  DeleteNotificationChannelCommand,
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput
} from "./commands/DeleteNotificationChannelCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput
} from "./commands/DeletePolicyCommand";
import {
  DisassociateAdminAccountCommand,
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput
} from "./commands/DisassociateAdminAccountCommand";
import {
  GetAdminAccountCommand,
  GetAdminAccountCommandInput,
  GetAdminAccountCommandOutput
} from "./commands/GetAdminAccountCommand";
import {
  GetComplianceDetailCommand,
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput
} from "./commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommand,
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput
} from "./commands/GetNotificationChannelCommand";
import {
  GetPolicyCommand,
  GetPolicyCommandInput,
  GetPolicyCommandOutput
} from "./commands/GetPolicyCommand";
import {
  GetProtectionStatusCommand,
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput
} from "./commands/GetProtectionStatusCommand";
import {
  ListComplianceStatusCommand,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput
} from "./commands/ListComplianceStatusCommand";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput
} from "./commands/ListMemberAccountsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput
} from "./commands/ListPoliciesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "./commands/ListTagsForResourceCommand";
import {
  PutNotificationChannelCommand,
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput
} from "./commands/PutNotificationChannelCommand";
import {
  PutPolicyCommand,
  PutPolicyCommandInput,
  PutPolicyCommandOutput
} from "./commands/PutPolicyCommand";
import {
  TagResourceCommand,
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "./commands/UntagResourceCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Firewall Manager</fullname>
 *          <p>This is the <i>AWS Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the AWS Firewall Manager API actions, data
 *       types, and errors. For detailed information about AWS Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">AWS Firewall
 *         Manager Developer Guide</a>.</p>
 */
export class FMS extends FMSClient {
  /**
   * <p>Sets the AWS Firewall Manager administrator account. AWS Firewall Manager must be
   *       associated with the master account of your AWS organization or associated with a member
   *       account that has the appropriate permissions. If the account ID that you submit is not an AWS
   *       Organizations master account, AWS Firewall Manager will set the appropriate permissions for
   *       the given member account.</p>
   *          <p>The account that you associate with AWS Firewall Manager is called the AWS Firewall
   *       Manager administrator account. </p>
   */
  public associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateAdminAccountCommandOutput>;
  public associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): void;
  public associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): void;
  public associateAdminAccount(
    args: AssociateAdminAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: AssociateAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): Promise<AssociateAdminAccountCommandOutput> | void {
    const command = new AssociateAdminAccountCommand(args);
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
   * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple
   *       Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
   */
  public deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteNotificationChannelCommandOutput>;
  public deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): void;
  public deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): void;
  public deleteNotificationChannel(
    args: DeleteNotificationChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): Promise<DeleteNotificationChannelCommandOutput> | void {
    const command = new DeleteNotificationChannelCommand(args);
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
   * <p>Permanently deletes an AWS Firewall Manager policy. </p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
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
   * <p>Disassociates the account that has been set as the AWS Firewall Manager administrator
   *       account. To set a different account as the administrator account, you must submit an
   *         <code>AssociateAdminAccount</code> request.</p>
   */
  public disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateAdminAccountCommandOutput>;
  public disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): void;
  public disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): void;
  public disassociateAdminAccount(
    args: DisassociateAdminAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DisassociateAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): Promise<DisassociateAdminAccountCommandOutput> | void {
    const command = new DisassociateAdminAccountCommand(args);
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
   * <p>Returns the AWS Organizations master account that is associated with AWS Firewall Manager
   *       as the AWS Firewall Manager administrator.</p>
   */
  public getAdminAccount(
    args: GetAdminAccountCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAdminAccountCommandOutput>;
  public getAdminAccount(
    args: GetAdminAccountCommandInput,
    cb: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): void;
  public getAdminAccount(
    args: GetAdminAccountCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): void;
  public getAdminAccount(
    args: GetAdminAccountCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): Promise<GetAdminAccountCommandOutput> | void {
    const command = new GetAdminAccountCommand(args);
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
   * <p>Returns detailed compliance information about the specified member account. Details
   *       include resources that are in and out of compliance with the specified policy. Resources are
   *       considered noncompliant for AWS WAF and Shield Advanced policies if the specified policy has
   *       not been applied to them. Resources are considered noncompliant for security group policies if
   *       they are in scope of the policy, they violate one or more of the policy rules, and remediation
   *       is disabled or not possible. </p>
   */
  public getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetComplianceDetailCommandOutput>;
  public getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    cb: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): void;
  public getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): void;
  public getComplianceDetail(
    args: GetComplianceDetailCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetComplianceDetailCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): Promise<GetComplianceDetailCommandOutput> | void {
    const command = new GetComplianceDetailCommand(args);
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
   * <p>Information
   *       about the Amazon Simple Notification Service (SNS) topic that is used to
   *       record AWS Firewall Manager SNS logs.</p>
   */
  public getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetNotificationChannelCommandOutput>;
  public getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    cb: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): void;
  public getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): void;
  public getNotificationChannel(
    args: GetNotificationChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): Promise<GetNotificationChannelCommandOutput> | void {
    const command = new GetNotificationChannelCommand(args);
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
   * <p>Returns information about the specified AWS Firewall Manager policy.</p>
   */
  public getPolicy(
    args: GetPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPolicyCommandOutput>;
  public getPolicy(
    args: GetPolicyCommandInput,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
   * <p>If you created a Shield Advanced policy, returns policy-level attack summary information
   *          in the event of a potential DDoS attack. Other policy types are currently unsupported.</p>
   */
  public getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtectionStatusCommandOutput>;
  public getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    cb: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): void;
  public getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): void;
  public getProtectionStatus(
    args: GetProtectionStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetProtectionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): Promise<GetProtectionStatusCommandOutput> | void {
    const command = new GetProtectionStatusCommand(args);
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
   * <p>Returns an array of <code>PolicyComplianceStatus</code> objects in the response. Use
   *         <code>PolicyComplianceStatus</code> to get a summary of which member accounts are protected
   *       by the specified policy. </p>
   */
  public listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListComplianceStatusCommandOutput>;
  public listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    cb: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): void;
  public listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): void;
  public listComplianceStatus(
    args: ListComplianceStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListComplianceStatusCommandOutput) => void),
    cb?: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): Promise<ListComplianceStatusCommandOutput> | void {
    const command = new ListComplianceStatusCommand(args);
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
   * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
   *       administrator's AWS organization.</p>
   *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
   *       AWS Firewall Manager administrator.</p>
   */
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMemberAccountsCommandOutput>;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): void;
  public listMemberAccounts(
    args: ListMemberAccountsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListMemberAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): Promise<ListMemberAccountsCommandOutput> | void {
    const command = new ListMemberAccountsCommand(args);
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
   * <p>Returns an array of <code>PolicySummary</code> objects in the response.</p>
   */
  public listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  public listPolicies(
    args: ListPoliciesCommandInput,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesCommandOutput) => void
  ): Promise<ListPoliciesCommandOutput> | void {
    const command = new ListPoliciesCommand(args);
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
   * <p>Retrieves the list of tags for the specified AWS resource.   </p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
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
   * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that AWS
   *       Firewall Manager uses to record SNS logs.</p>
   */
  public putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutNotificationChannelCommandOutput>;
  public putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    cb: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): void;
  public putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): void;
  public putNotificationChannel(
    args: PutNotificationChannelCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): Promise<PutNotificationChannelCommandOutput> | void {
    const command = new PutNotificationChannelCommand(args);
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
   * <p>Creates an AWS Firewall Manager policy.</p>
   *          <p>Firewall Manager provides the following types of policies: </p>
   *          <ul>
   *             <li>
   *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
   *           accounts and resources</p>
   *             </li>
   *             <li>
   *                <p>An AWS WAF policy, which contains a rule group and defines which resources are to be
   *           protected by that rule group</p>
   *             </li>
   *             <li>
   *                <p>A security group policy, which manages VPC security groups across your AWS
   *           organization. </p>
   *             </li>
   *          </ul>
   *          <p>Each policy is specific to one of the three types. If you want to enforce more than one
   *       policy type across accounts, you can create multiple policies. You can create multiple
   *       policies for each type.</p>
   *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
   *       information about subscribing to Shield Advanced, see <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
   */
  public putPolicy(
    args: PutPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPolicyCommandOutput>;
  public putPolicy(
    args: PutPolicyCommandInput,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: PutPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutPolicyCommandOutput) => void
  ): Promise<PutPolicyCommandOutput> | void {
    const command = new PutPolicyCommand(args);
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
   * <p>Adds one or more tags to an AWS resource.</p>
   */
  public tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  public tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
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
   * <p>Removes one or more tags from an AWS resource.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
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
