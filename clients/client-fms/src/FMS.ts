// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateAdminAccountCommand,
  AssociateAdminAccountCommandInput,
  AssociateAdminAccountCommandOutput,
} from "./commands/AssociateAdminAccountCommand";
import {
  AssociateThirdPartyFirewallCommand,
  AssociateThirdPartyFirewallCommandInput,
  AssociateThirdPartyFirewallCommandOutput,
} from "./commands/AssociateThirdPartyFirewallCommand";
import {
  BatchAssociateResourceCommand,
  BatchAssociateResourceCommandInput,
  BatchAssociateResourceCommandOutput,
} from "./commands/BatchAssociateResourceCommand";
import {
  BatchDisassociateResourceCommand,
  BatchDisassociateResourceCommandInput,
  BatchDisassociateResourceCommandOutput,
} from "./commands/BatchDisassociateResourceCommand";
import {
  DeleteAppsListCommand,
  DeleteAppsListCommandInput,
  DeleteAppsListCommandOutput,
} from "./commands/DeleteAppsListCommand";
import {
  DeleteNotificationChannelCommand,
  DeleteNotificationChannelCommandInput,
  DeleteNotificationChannelCommandOutput,
} from "./commands/DeleteNotificationChannelCommand";
import {
  DeletePolicyCommand,
  DeletePolicyCommandInput,
  DeletePolicyCommandOutput,
} from "./commands/DeletePolicyCommand";
import {
  DeleteProtocolsListCommand,
  DeleteProtocolsListCommandInput,
  DeleteProtocolsListCommandOutput,
} from "./commands/DeleteProtocolsListCommand";
import {
  DeleteResourceSetCommand,
  DeleteResourceSetCommandInput,
  DeleteResourceSetCommandOutput,
} from "./commands/DeleteResourceSetCommand";
import {
  DisassociateAdminAccountCommand,
  DisassociateAdminAccountCommandInput,
  DisassociateAdminAccountCommandOutput,
} from "./commands/DisassociateAdminAccountCommand";
import {
  DisassociateThirdPartyFirewallCommand,
  DisassociateThirdPartyFirewallCommandInput,
  DisassociateThirdPartyFirewallCommandOutput,
} from "./commands/DisassociateThirdPartyFirewallCommand";
import {
  GetAdminAccountCommand,
  GetAdminAccountCommandInput,
  GetAdminAccountCommandOutput,
} from "./commands/GetAdminAccountCommand";
import { GetAppsListCommand, GetAppsListCommandInput, GetAppsListCommandOutput } from "./commands/GetAppsListCommand";
import {
  GetComplianceDetailCommand,
  GetComplianceDetailCommandInput,
  GetComplianceDetailCommandOutput,
} from "./commands/GetComplianceDetailCommand";
import {
  GetNotificationChannelCommand,
  GetNotificationChannelCommandInput,
  GetNotificationChannelCommandOutput,
} from "./commands/GetNotificationChannelCommand";
import { GetPolicyCommand, GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import {
  GetProtectionStatusCommand,
  GetProtectionStatusCommandInput,
  GetProtectionStatusCommandOutput,
} from "./commands/GetProtectionStatusCommand";
import {
  GetProtocolsListCommand,
  GetProtocolsListCommandInput,
  GetProtocolsListCommandOutput,
} from "./commands/GetProtocolsListCommand";
import {
  GetResourceSetCommand,
  GetResourceSetCommandInput,
  GetResourceSetCommandOutput,
} from "./commands/GetResourceSetCommand";
import {
  GetThirdPartyFirewallAssociationStatusCommand,
  GetThirdPartyFirewallAssociationStatusCommandInput,
  GetThirdPartyFirewallAssociationStatusCommandOutput,
} from "./commands/GetThirdPartyFirewallAssociationStatusCommand";
import {
  GetViolationDetailsCommand,
  GetViolationDetailsCommandInput,
  GetViolationDetailsCommandOutput,
} from "./commands/GetViolationDetailsCommand";
import {
  ListAppsListsCommand,
  ListAppsListsCommandInput,
  ListAppsListsCommandOutput,
} from "./commands/ListAppsListsCommand";
import {
  ListComplianceStatusCommand,
  ListComplianceStatusCommandInput,
  ListComplianceStatusCommandOutput,
} from "./commands/ListComplianceStatusCommand";
import {
  ListDiscoveredResourcesCommand,
  ListDiscoveredResourcesCommandInput,
  ListDiscoveredResourcesCommandOutput,
} from "./commands/ListDiscoveredResourcesCommand";
import {
  ListMemberAccountsCommand,
  ListMemberAccountsCommandInput,
  ListMemberAccountsCommandOutput,
} from "./commands/ListMemberAccountsCommand";
import {
  ListPoliciesCommand,
  ListPoliciesCommandInput,
  ListPoliciesCommandOutput,
} from "./commands/ListPoliciesCommand";
import {
  ListProtocolsListsCommand,
  ListProtocolsListsCommandInput,
  ListProtocolsListsCommandOutput,
} from "./commands/ListProtocolsListsCommand";
import {
  ListResourceSetResourcesCommand,
  ListResourceSetResourcesCommandInput,
  ListResourceSetResourcesCommandOutput,
} from "./commands/ListResourceSetResourcesCommand";
import {
  ListResourceSetsCommand,
  ListResourceSetsCommandInput,
  ListResourceSetsCommandOutput,
} from "./commands/ListResourceSetsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListThirdPartyFirewallFirewallPoliciesCommand,
  ListThirdPartyFirewallFirewallPoliciesCommandInput,
  ListThirdPartyFirewallFirewallPoliciesCommandOutput,
} from "./commands/ListThirdPartyFirewallFirewallPoliciesCommand";
import { PutAppsListCommand, PutAppsListCommandInput, PutAppsListCommandOutput } from "./commands/PutAppsListCommand";
import {
  PutNotificationChannelCommand,
  PutNotificationChannelCommandInput,
  PutNotificationChannelCommandOutput,
} from "./commands/PutNotificationChannelCommand";
import { PutPolicyCommand, PutPolicyCommandInput, PutPolicyCommandOutput } from "./commands/PutPolicyCommand";
import {
  PutProtocolsListCommand,
  PutProtocolsListCommandInput,
  PutProtocolsListCommandOutput,
} from "./commands/PutProtocolsListCommand";
import {
  PutResourceSetCommand,
  PutResourceSetCommandInput,
  PutResourceSetCommandOutput,
} from "./commands/PutResourceSetCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { FMSClient } from "./FMSClient";

/**
 * <p>This is the <i>Firewall Manager API Reference</i>. This guide is for
 *       developers who need detailed information about the Firewall Manager API actions, data
 *       types, and errors. For detailed information about Firewall Manager features, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-chapter.html">Firewall Manager Developer Guide</a>.</p>
 *          <p>Some API actions require explicit resource permissions. For information, see the developer guide topic
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a>.
 * </p>
 */
export class FMS extends FMSClient {
  /**
   * <p>Sets the Firewall Manager administrator account. The account must be
   *       a member of the organization in Organizations whose resources you want to protect.
   *           Firewall Manager sets the permissions that allow the account to administer your Firewall Manager policies.</p>
   *          <p>The account that you associate with Firewall Manager is called the Firewall Manager administrator account. </p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: AssociateAdminAccountCommandOutput) => void
  ): Promise<AssociateAdminAccountCommandOutput> | void {
    const command = new AssociateAdminAccountCommand(args);
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
   * <p>Sets the Firewall Manager policy administrator as a tenant administrator of a third-party firewall service. A tenant is an instance of the third-party firewall service that's associated with your Amazon Web Services customer account.</p>
   */
  public associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateThirdPartyFirewallCommandOutput>;
  public associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    cb: (err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void
  ): void;
  public associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void
  ): void;
  public associateThirdPartyFirewall(
    args: AssociateThirdPartyFirewallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void),
    cb?: (err: any, data?: AssociateThirdPartyFirewallCommandOutput) => void
  ): Promise<AssociateThirdPartyFirewallCommandOutput> | void {
    const command = new AssociateThirdPartyFirewallCommand(args);
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
   * <p>Associate resources to a Firewall Manager resource set.</p>
   */
  public batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchAssociateResourceCommandOutput>;
  public batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    cb: (err: any, data?: BatchAssociateResourceCommandOutput) => void
  ): void;
  public batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchAssociateResourceCommandOutput) => void
  ): void;
  public batchAssociateResource(
    args: BatchAssociateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchAssociateResourceCommandOutput) => void),
    cb?: (err: any, data?: BatchAssociateResourceCommandOutput) => void
  ): Promise<BatchAssociateResourceCommandOutput> | void {
    const command = new BatchAssociateResourceCommand(args);
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
   * <p>Disassociates resources from a Firewall Manager resource set.</p>
   */
  public batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchDisassociateResourceCommandOutput>;
  public batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    cb: (err: any, data?: BatchDisassociateResourceCommandOutput) => void
  ): void;
  public batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchDisassociateResourceCommandOutput) => void
  ): void;
  public batchDisassociateResource(
    args: BatchDisassociateResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchDisassociateResourceCommandOutput) => void),
    cb?: (err: any, data?: BatchDisassociateResourceCommandOutput) => void
  ): Promise<BatchDisassociateResourceCommandOutput> | void {
    const command = new BatchDisassociateResourceCommand(args);
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
   * <p>Permanently deletes an Firewall Manager applications list.</p>
   */
  public deleteAppsList(
    args: DeleteAppsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAppsListCommandOutput>;
  public deleteAppsList(
    args: DeleteAppsListCommandInput,
    cb: (err: any, data?: DeleteAppsListCommandOutput) => void
  ): void;
  public deleteAppsList(
    args: DeleteAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAppsListCommandOutput) => void
  ): void;
  public deleteAppsList(
    args: DeleteAppsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAppsListCommandOutput) => void),
    cb?: (err: any, data?: DeleteAppsListCommandOutput) => void
  ): Promise<DeleteAppsListCommandOutput> | void {
    const command = new DeleteAppsListCommand(args);
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
   * <p>Deletes an Firewall Manager association with the IAM role and the Amazon Simple
   *       Notification Service (SNS) topic that is used to record Firewall Manager SNS logs.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: DeleteNotificationChannelCommandOutput) => void
  ): Promise<DeleteNotificationChannelCommandOutput> | void {
    const command = new DeleteNotificationChannelCommand(args);
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
   * <p>Permanently deletes an Firewall Manager policy. </p>
   */
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePolicyCommandOutput>;
  public deletePolicy(args: DeletePolicyCommandInput, cb: (err: any, data?: DeletePolicyCommandOutput) => void): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePolicyCommandOutput) => void
  ): void;
  public deletePolicy(
    args: DeletePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeletePolicyCommandOutput) => void
  ): Promise<DeletePolicyCommandOutput> | void {
    const command = new DeletePolicyCommand(args);
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
   * <p>Permanently deletes an Firewall Manager protocols list.</p>
   */
  public deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteProtocolsListCommandOutput>;
  public deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void
  ): void;
  public deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProtocolsListCommandOutput) => void
  ): void;
  public deleteProtocolsList(
    args: DeleteProtocolsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteProtocolsListCommandOutput) => void),
    cb?: (err: any, data?: DeleteProtocolsListCommandOutput) => void
  ): Promise<DeleteProtocolsListCommandOutput> | void {
    const command = new DeleteProtocolsListCommand(args);
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
   * <p>Deletes the specified <a>ResourceSet</a>.</p>
   */
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourceSetCommandOutput>;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): void;
  public deleteResourceSet(
    args: DeleteResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourceSetCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourceSetCommandOutput) => void
  ): Promise<DeleteResourceSetCommandOutput> | void {
    const command = new DeleteResourceSetCommand(args);
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
   * <p>Disassociates the account that has been set as the Firewall Manager administrator
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: DisassociateAdminAccountCommandOutput) => void
  ): Promise<DisassociateAdminAccountCommandOutput> | void {
    const command = new DisassociateAdminAccountCommand(args);
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
   * <p>Disassociates a Firewall Manager policy administrator from a third-party firewall tenant. When you call <code>DisassociateThirdPartyFirewall</code>, the third-party firewall vendor deletes all of the firewalls that are associated with the account.</p>
   */
  public disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateThirdPartyFirewallCommandOutput>;
  public disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    cb: (err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void
  ): void;
  public disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void
  ): void;
  public disassociateThirdPartyFirewall(
    args: DisassociateThirdPartyFirewallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void),
    cb?: (err: any, data?: DisassociateThirdPartyFirewallCommandOutput) => void
  ): Promise<DisassociateThirdPartyFirewallCommandOutput> | void {
    const command = new DisassociateThirdPartyFirewallCommand(args);
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
   * <p>Returns the Organizations account that is associated with Firewall Manager
   *       as the Firewall Manager administrator.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAdminAccountCommandOutput) => void),
    cb?: (err: any, data?: GetAdminAccountCommandOutput) => void
  ): Promise<GetAdminAccountCommandOutput> | void {
    const command = new GetAdminAccountCommand(args);
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
   * <p>Returns information about the specified Firewall Manager applications list.</p>
   */
  public getAppsList(args: GetAppsListCommandInput, options?: __HttpHandlerOptions): Promise<GetAppsListCommandOutput>;
  public getAppsList(args: GetAppsListCommandInput, cb: (err: any, data?: GetAppsListCommandOutput) => void): void;
  public getAppsList(
    args: GetAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAppsListCommandOutput) => void
  ): void;
  public getAppsList(
    args: GetAppsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAppsListCommandOutput) => void),
    cb?: (err: any, data?: GetAppsListCommandOutput) => void
  ): Promise<GetAppsListCommandOutput> | void {
    const command = new GetAppsListCommand(args);
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
   * <p>Returns detailed compliance information about the specified member account. Details
   *       include resources that are in and out of compliance with the specified policy. </p>
   *          <ul>
   *             <li>
   *               <p>Resources are
   *               considered noncompliant for WAF and Shield Advanced policies if the specified policy has
   *               not been applied to them.</p>
   *             </li>
   *             <li>
   *               <p>Resources are considered noncompliant for security group policies if
   *               they are in scope of the policy, they violate one or more of the policy rules, and remediation
   *               is disabled or not possible.</p>
   *             </li>
   *             <li>
   *               <p>Resources are considered noncompliant for Network Firewall policies
   *                 if a firewall is missing in the VPC, if the firewall endpoint isn't set up in an expected Availability Zone and subnet,
   *                 if a subnet created by the Firewall Manager doesn't have the expected route table,
   *                 and for modifications to a firewall policy that violate the Firewall Manager policy's rules.</p>
   *             </li>
   *             <li>
   *               <p>Resources are considered noncompliant for DNS Firewall policies
   *               if a DNS Firewall rule group is missing from the rule group associations for the VPC. </p>
   *             </li>
   *          </ul>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetComplianceDetailCommandOutput) => void),
    cb?: (err: any, data?: GetComplianceDetailCommandOutput) => void
  ): Promise<GetComplianceDetailCommandOutput> | void {
    const command = new GetComplianceDetailCommand(args);
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
   * <p>Information
   *       about the Amazon Simple Notification Service (SNS) topic that is used to
   *       record Firewall Manager SNS logs.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: GetNotificationChannelCommandOutput) => void
  ): Promise<GetNotificationChannelCommandOutput> | void {
    const command = new GetNotificationChannelCommand(args);
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
   * <p>Returns information about the specified Firewall Manager policy.</p>
   */
  public getPolicy(args: GetPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetPolicyCommandOutput>;
  public getPolicy(args: GetPolicyCommandInput, cb: (err: any, data?: GetPolicyCommandOutput) => void): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPolicyCommandOutput) => void
  ): void;
  public getPolicy(
    args: GetPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetPolicyCommandOutput) => void
  ): Promise<GetPolicyCommandOutput> | void {
    const command = new GetPolicyCommand(args);
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProtectionStatusCommandOutput) => void),
    cb?: (err: any, data?: GetProtectionStatusCommandOutput) => void
  ): Promise<GetProtectionStatusCommandOutput> | void {
    const command = new GetProtectionStatusCommand(args);
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
   * <p>Returns information about the specified Firewall Manager protocols list.</p>
   */
  public getProtocolsList(
    args: GetProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetProtocolsListCommandOutput>;
  public getProtocolsList(
    args: GetProtocolsListCommandInput,
    cb: (err: any, data?: GetProtocolsListCommandOutput) => void
  ): void;
  public getProtocolsList(
    args: GetProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetProtocolsListCommandOutput) => void
  ): void;
  public getProtocolsList(
    args: GetProtocolsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetProtocolsListCommandOutput) => void),
    cb?: (err: any, data?: GetProtocolsListCommandOutput) => void
  ): Promise<GetProtocolsListCommandOutput> | void {
    const command = new GetProtocolsListCommand(args);
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
   * <p>Gets information about a specific resource set.</p>
   */
  public getResourceSet(
    args: GetResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourceSetCommandOutput>;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourceSetCommandOutput) => void
  ): void;
  public getResourceSet(
    args: GetResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourceSetCommandOutput) => void),
    cb?: (err: any, data?: GetResourceSetCommandOutput) => void
  ): Promise<GetResourceSetCommandOutput> | void {
    const command = new GetResourceSetCommand(args);
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
   * <p>The onboarding status of a Firewall Manager admin account to third-party firewall vendor tenant.</p>
   */
  public getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetThirdPartyFirewallAssociationStatusCommandOutput>;
  public getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    cb: (err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void
  ): void;
  public getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void
  ): void;
  public getThirdPartyFirewallAssociationStatus(
    args: GetThirdPartyFirewallAssociationStatusCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void),
    cb?: (err: any, data?: GetThirdPartyFirewallAssociationStatusCommandOutput) => void
  ): Promise<GetThirdPartyFirewallAssociationStatusCommandOutput> | void {
    const command = new GetThirdPartyFirewallAssociationStatusCommand(args);
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
   * <p>Retrieves violations for a resource based on the specified Firewall Manager policy and Amazon Web Services account.</p>
   */
  public getViolationDetails(
    args: GetViolationDetailsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetViolationDetailsCommandOutput>;
  public getViolationDetails(
    args: GetViolationDetailsCommandInput,
    cb: (err: any, data?: GetViolationDetailsCommandOutput) => void
  ): void;
  public getViolationDetails(
    args: GetViolationDetailsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetViolationDetailsCommandOutput) => void
  ): void;
  public getViolationDetails(
    args: GetViolationDetailsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetViolationDetailsCommandOutput) => void),
    cb?: (err: any, data?: GetViolationDetailsCommandOutput) => void
  ): Promise<GetViolationDetailsCommandOutput> | void {
    const command = new GetViolationDetailsCommand(args);
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
   * <p>Returns an array of <code>AppsListDataSummary</code> objects.</p>
   */
  public listAppsLists(
    args: ListAppsListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAppsListsCommandOutput>;
  public listAppsLists(
    args: ListAppsListsCommandInput,
    cb: (err: any, data?: ListAppsListsCommandOutput) => void
  ): void;
  public listAppsLists(
    args: ListAppsListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAppsListsCommandOutput) => void
  ): void;
  public listAppsLists(
    args: ListAppsListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAppsListsCommandOutput) => void),
    cb?: (err: any, data?: ListAppsListsCommandOutput) => void
  ): Promise<ListAppsListsCommandOutput> | void {
    const command = new ListAppsListsCommand(args);
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
   * <p>Returns an array of <code>PolicyComplianceStatus</code> objects. Use
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListComplianceStatusCommandOutput) => void),
    cb?: (err: any, data?: ListComplianceStatusCommandOutput) => void
  ): Promise<ListComplianceStatusCommandOutput> | void {
    const command = new ListComplianceStatusCommand(args);
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
   * <p>Returns an array of resources in the organization's accounts that are available to be associated with a resource set.</p>
   */
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDiscoveredResourcesCommandOutput>;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): void;
  public listDiscoveredResources(
    args: ListDiscoveredResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListDiscoveredResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListDiscoveredResourcesCommandOutput) => void
  ): Promise<ListDiscoveredResourcesCommandOutput> | void {
    const command = new ListDiscoveredResourcesCommand(args);
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
   * <p>Returns a <code>MemberAccounts</code> object that lists the member accounts in the
   *       administrator's Amazon Web Services organization.</p>
   *          <p>The <code>ListMemberAccounts</code> must be submitted by the account that is set as the
   *       Firewall Manager administrator.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMemberAccountsCommandOutput) => void),
    cb?: (err: any, data?: ListMemberAccountsCommandOutput) => void
  ): Promise<ListMemberAccountsCommandOutput> | void {
    const command = new ListMemberAccountsCommand(args);
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
   * <p>Returns an array of <code>PolicySummary</code> objects.</p>
   */
  public listPolicies(
    args: ListPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPoliciesCommandOutput>;
  public listPolicies(args: ListPoliciesCommandInput, cb: (err: any, data?: ListPoliciesCommandOutput) => void): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPoliciesCommandOutput) => void
  ): void;
  public listPolicies(
    args: ListPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListPoliciesCommandOutput) => void
  ): Promise<ListPoliciesCommandOutput> | void {
    const command = new ListPoliciesCommand(args);
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
   * <p>Returns an array of <code>ProtocolsListDataSummary</code> objects.</p>
   */
  public listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListProtocolsListsCommandOutput>;
  public listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    cb: (err: any, data?: ListProtocolsListsCommandOutput) => void
  ): void;
  public listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListProtocolsListsCommandOutput) => void
  ): void;
  public listProtocolsLists(
    args: ListProtocolsListsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListProtocolsListsCommandOutput) => void),
    cb?: (err: any, data?: ListProtocolsListsCommandOutput) => void
  ): Promise<ListProtocolsListsCommandOutput> | void {
    const command = new ListProtocolsListsCommand(args);
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
   * <p>Returns an array of resources that are currently associated to a resource set.</p>
   */
  public listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetResourcesCommandOutput>;
  public listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    cb: (err: any, data?: ListResourceSetResourcesCommandOutput) => void
  ): void;
  public listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetResourcesCommandOutput) => void
  ): void;
  public listResourceSetResources(
    args: ListResourceSetResourcesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceSetResourcesCommandOutput) => void),
    cb?: (err: any, data?: ListResourceSetResourcesCommandOutput) => void
  ): Promise<ListResourceSetResourcesCommandOutput> | void {
    const command = new ListResourceSetResourcesCommand(args);
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
   * <p>Returns an array of <code>ResourceSetSummary</code> objects.</p>
   */
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListResourceSetsCommandOutput>;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): void;
  public listResourceSets(
    args: ListResourceSetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListResourceSetsCommandOutput) => void),
    cb?: (err: any, data?: ListResourceSetsCommandOutput) => void
  ): Promise<ListResourceSetsCommandOutput> | void {
    const command = new ListResourceSetsCommand(args);
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
   * <p>Retrieves the list of tags for the specified Amazon Web Services resource.   </p>
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
   * <p>Retrieves a list of all of the third-party firewall policies that are associated with the third-party firewall administrator's account.</p>
   */
  public listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput>;
  public listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    cb: (err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void
  ): void;
  public listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void
  ): void;
  public listThirdPartyFirewallFirewallPolicies(
    args: ListThirdPartyFirewallFirewallPoliciesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListThirdPartyFirewallFirewallPoliciesCommandOutput) => void
  ): Promise<ListThirdPartyFirewallFirewallPoliciesCommandOutput> | void {
    const command = new ListThirdPartyFirewallFirewallPoliciesCommand(args);
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
   * <p>Creates an Firewall Manager applications list.</p>
   */
  public putAppsList(args: PutAppsListCommandInput, options?: __HttpHandlerOptions): Promise<PutAppsListCommandOutput>;
  public putAppsList(args: PutAppsListCommandInput, cb: (err: any, data?: PutAppsListCommandOutput) => void): void;
  public putAppsList(
    args: PutAppsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAppsListCommandOutput) => void
  ): void;
  public putAppsList(
    args: PutAppsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAppsListCommandOutput) => void),
    cb?: (err: any, data?: PutAppsListCommandOutput) => void
  ): Promise<PutAppsListCommandOutput> | void {
    const command = new PutAppsListCommand(args);
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
   * <p>Designates the IAM role and Amazon Simple Notification Service (SNS) topic that
   *       Firewall Manager uses to record SNS logs.</p>
   *          <p>To perform this action outside of the console, you must configure the SNS topic to allow the Firewall Manager
   *       role <code>AWSServiceRoleForFMS</code> to publish SNS logs. For more information, see
   *       <a href="https://docs.aws.amazon.com/waf/latest/developerguide/fms-api-permissions-ref.html">Firewall Manager required permissions for API actions</a> in the <i>Firewall Manager Developer Guide</i>.</p>
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
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutNotificationChannelCommandOutput) => void),
    cb?: (err: any, data?: PutNotificationChannelCommandOutput) => void
  ): Promise<PutNotificationChannelCommandOutput> | void {
    const command = new PutNotificationChannelCommand(args);
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
   * <p>Creates an Firewall Manager policy.</p>
   *          <p>Firewall Manager provides the following types of policies: </p>
   *          <ul>
   *             <li>
   *                <p>An WAF policy (type WAFV2), which defines rule groups to run first in the
   *               corresponding WAF web ACL and rule groups to run last in the web ACL.</p>
   *             </li>
   *             <li>
   *                <p>An WAF Classic policy (type WAF), which defines a rule group. </p>
   *             </li>
   *             <li>
   *                <p>A Shield Advanced policy, which applies Shield Advanced protection to specified
   *           accounts and resources.</p>
   *             </li>
   *             <li>
   *                <p>A security group policy, which manages VPC security groups across your Amazon Web Services
   *           organization. </p>
   *             </li>
   *             <li>
   *                <p>An Network Firewall policy, which provides firewall rules to filter network traffic in specified
   *           Amazon VPCs.</p>
   *             </li>
   *             <li>
   *                <p>A DNS Firewall policy, which provides Route 53 Resolver DNS Firewall rules to filter DNS queries for
   *             specified VPCs.</p>
   *             </li>
   *          </ul>
   *          <p>Each policy is specific to one of the types. If you want to enforce more than one
   *       policy type across accounts, create multiple policies. You can create multiple
   *       policies for each type.</p>
   *          <p>You must be subscribed to Shield Advanced to create a Shield Advanced policy. For more
   *         information about subscribing to Shield Advanced, see
   *     <a href="https://docs.aws.amazon.com/waf/latest/DDOSAPIReference/API_CreateSubscription.html">CreateSubscription</a>.</p>
   */
  public putPolicy(args: PutPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutPolicyCommandOutput>;
  public putPolicy(args: PutPolicyCommandInput, cb: (err: any, data?: PutPolicyCommandOutput) => void): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPolicyCommandOutput) => void
  ): void;
  public putPolicy(
    args: PutPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutPolicyCommandOutput) => void
  ): Promise<PutPolicyCommandOutput> | void {
    const command = new PutPolicyCommand(args);
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
   * <p>Creates an Firewall Manager protocols list.</p>
   */
  public putProtocolsList(
    args: PutProtocolsListCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutProtocolsListCommandOutput>;
  public putProtocolsList(
    args: PutProtocolsListCommandInput,
    cb: (err: any, data?: PutProtocolsListCommandOutput) => void
  ): void;
  public putProtocolsList(
    args: PutProtocolsListCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutProtocolsListCommandOutput) => void
  ): void;
  public putProtocolsList(
    args: PutProtocolsListCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutProtocolsListCommandOutput) => void),
    cb?: (err: any, data?: PutProtocolsListCommandOutput) => void
  ): Promise<PutProtocolsListCommandOutput> | void {
    const command = new PutProtocolsListCommand(args);
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
   * <p>Creates the resource set.</p>
   *          <p>An Firewall Manager resource set defines the resources to import into an Firewall Manager policy from another Amazon Web Services service.</p>
   */
  public putResourceSet(
    args: PutResourceSetCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourceSetCommandOutput>;
  public putResourceSet(
    args: PutResourceSetCommandInput,
    cb: (err: any, data?: PutResourceSetCommandOutput) => void
  ): void;
  public putResourceSet(
    args: PutResourceSetCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourceSetCommandOutput) => void
  ): void;
  public putResourceSet(
    args: PutResourceSetCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourceSetCommandOutput) => void),
    cb?: (err: any, data?: PutResourceSetCommandOutput) => void
  ): Promise<PutResourceSetCommandOutput> | void {
    const command = new PutResourceSetCommand(args);
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
   * <p>Adds one or more tags to an Amazon Web Services resource.</p>
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
   * <p>Removes one or more tags from an Amazon Web Services resource.</p>
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
}
