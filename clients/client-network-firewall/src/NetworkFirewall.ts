// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AssociateFirewallPolicyCommand,
  AssociateFirewallPolicyCommandInput,
  AssociateFirewallPolicyCommandOutput,
} from "./commands/AssociateFirewallPolicyCommand";
import {
  AssociateSubnetsCommand,
  AssociateSubnetsCommandInput,
  AssociateSubnetsCommandOutput,
} from "./commands/AssociateSubnetsCommand";
import {
  CreateFirewallCommand,
  CreateFirewallCommandInput,
  CreateFirewallCommandOutput,
} from "./commands/CreateFirewallCommand";
import {
  CreateFirewallPolicyCommand,
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
} from "./commands/CreateFirewallPolicyCommand";
import {
  CreateRuleGroupCommand,
  CreateRuleGroupCommandInput,
  CreateRuleGroupCommandOutput,
} from "./commands/CreateRuleGroupCommand";
import {
  DeleteFirewallCommand,
  DeleteFirewallCommandInput,
  DeleteFirewallCommandOutput,
} from "./commands/DeleteFirewallCommand";
import {
  DeleteFirewallPolicyCommand,
  DeleteFirewallPolicyCommandInput,
  DeleteFirewallPolicyCommandOutput,
} from "./commands/DeleteFirewallPolicyCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import {
  DeleteRuleGroupCommand,
  DeleteRuleGroupCommandInput,
  DeleteRuleGroupCommandOutput,
} from "./commands/DeleteRuleGroupCommand";
import {
  DescribeFirewallCommand,
  DescribeFirewallCommandInput,
  DescribeFirewallCommandOutput,
} from "./commands/DescribeFirewallCommand";
import {
  DescribeFirewallPolicyCommand,
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
} from "./commands/DescribeFirewallPolicyCommand";
import {
  DescribeLoggingConfigurationCommand,
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  DescribeResourcePolicyCommand,
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import {
  DescribeRuleGroupCommand,
  DescribeRuleGroupCommandInput,
  DescribeRuleGroupCommandOutput,
} from "./commands/DescribeRuleGroupCommand";
import {
  DescribeRuleGroupMetadataCommand,
  DescribeRuleGroupMetadataCommandInput,
  DescribeRuleGroupMetadataCommandOutput,
} from "./commands/DescribeRuleGroupMetadataCommand";
import {
  DisassociateSubnetsCommand,
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
} from "./commands/DisassociateSubnetsCommand";
import {
  ListFirewallPoliciesCommand,
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "./commands/ListFirewallPoliciesCommand";
import {
  ListFirewallsCommand,
  ListFirewallsCommandInput,
  ListFirewallsCommandOutput,
} from "./commands/ListFirewallsCommand";
import {
  ListRuleGroupsCommand,
  ListRuleGroupsCommandInput,
  ListRuleGroupsCommandOutput,
} from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateFirewallDeleteProtectionCommand,
  UpdateFirewallDeleteProtectionCommandInput,
  UpdateFirewallDeleteProtectionCommandOutput,
} from "./commands/UpdateFirewallDeleteProtectionCommand";
import {
  UpdateFirewallDescriptionCommand,
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
} from "./commands/UpdateFirewallDescriptionCommand";
import {
  UpdateFirewallEncryptionConfigurationCommand,
  UpdateFirewallEncryptionConfigurationCommandInput,
  UpdateFirewallEncryptionConfigurationCommandOutput,
} from "./commands/UpdateFirewallEncryptionConfigurationCommand";
import {
  UpdateFirewallPolicyChangeProtectionCommand,
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
} from "./commands/UpdateFirewallPolicyChangeProtectionCommand";
import {
  UpdateFirewallPolicyCommand,
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
} from "./commands/UpdateFirewallPolicyCommand";
import {
  UpdateLoggingConfigurationCommand,
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  UpdateRuleGroupCommand,
  UpdateRuleGroupCommandInput,
  UpdateRuleGroupCommandOutput,
} from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSubnetChangeProtectionCommand,
  UpdateSubnetChangeProtectionCommandInput,
  UpdateSubnetChangeProtectionCommandOutput,
} from "./commands/UpdateSubnetChangeProtectionCommand";
import { NetworkFirewallClient } from "./NetworkFirewallClient";

/**
 * <p>This is the API Reference for Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <ul>
 *             <li>
 *                <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
 *                <p>To access Network Firewall using the REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *             </li>
 *             <li>
 *                <p>For descriptions of Network Firewall features, including and step-by-step
 *                instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
 *                   Guide</a>.</p>
 *             </li>
 *          </ul>
 *          <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
 *          prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
 *          perimeter of your VPC. This includes filtering traffic going to and coming from an internet
 *          gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
 *       with Suricata, a free, open source network analysis and threat detection engine.
 *       Network Firewall supports Suricata version 5.0.2. For information about Suricata,
 *           see the <a href="https://suricata.io/">Suricata website</a>.</p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and
 *                block all other forms of traffic.</p>
 *             </li>
 *             <li>
 *                <p>Use custom lists of known bad domains to limit the types of domain names that your
 *                applications can access.</p>
 *             </li>
 *             <li>
 *                <p>Perform deep packet inspection on traffic entering or leaving your VPC.</p>
 *             </li>
 *             <li>
 *                <p>Use stateful protocol detection to filter protocols like HTTPS, regardless of the
 *                port used.</p>
 *             </li>
 *          </ul>
 *          <p>To enable Network Firewall for your VPCs, you perform steps in both Amazon VPC and in
 *          Network Firewall. For information about using Amazon VPC, see <a href="https://docs.aws.amazon.com/vpc/latest/userguide/">Amazon VPC User Guide</a>.</p>
 *          <p>To start using Network Firewall, do the following: </p>
 *          <ol>
 *             <li>
 *                <p>(Optional) If you don't already have a VPC that you want to protect, create it in
 *                Amazon VPC. </p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, in each Availability Zone where you want to have a firewall endpoint, create a
 *                subnet for the sole use of Network Firewall. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create stateless and stateful rule groups,
 *                  to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall policy that uses your rule groups and
 *                  specifies additional default traffic filtering behavior. </p>
 *             </li>
 *             <li>
 *                <p>In Network Firewall, create a firewall and specify your new firewall policy and
 *                  VPC subnets. Network Firewall creates a firewall endpoint in each subnet that you
 *                specify, with the behavior that's defined in the firewall policy.</p>
 *             </li>
 *             <li>
 *                <p>In Amazon VPC, use ingress routing enhancements to route traffic through the new firewall
 *                endpoints.</p>
 *             </li>
 *          </ol>
 */
export class NetworkFirewall extends NetworkFirewallClient {
  /**
   * <p>Associates a <a>FirewallPolicy</a> to a <a>Firewall</a>. </p>
   *          <p>A firewall policy defines how to monitor and manage your VPC network traffic, using a
   *          collection of inspection rule groups and other settings. Each firewall requires one
   *          firewall policy association, and you can use the same firewall policy for multiple
   *          firewalls. </p>
   */
  public associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateFirewallPolicyCommandOutput>;
  public associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;
  public associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): void;
  public associateFirewallPolicy(
    args: AssociateFirewallPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateFirewallPolicyCommandOutput) => void),
    cb?: (err: any, data?: AssociateFirewallPolicyCommandOutput) => void
  ): Promise<AssociateFirewallPolicyCommandOutput> | void {
    const command = new AssociateFirewallPolicyCommand(args);
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
   * <p>Associates the specified subnets in the Amazon VPC to the firewall. You can specify one
   *          subnet for each of the Availability Zones that the VPC spans. </p>
   *          <p>This request creates an Network Firewall firewall endpoint in each of the subnets. To
   *          enable the firewall's protections, you must also modify the VPC's route tables for each
   *          subnet's Availability Zone, to redirect the traffic that's coming into and going out of the
   *          zone through the firewall endpoint. </p>
   */
  public associateSubnets(
    args: AssociateSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AssociateSubnetsCommandOutput>;
  public associateSubnets(
    args: AssociateSubnetsCommandInput,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;
  public associateSubnets(
    args: AssociateSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): void;
  public associateSubnets(
    args: AssociateSubnetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AssociateSubnetsCommandOutput) => void),
    cb?: (err: any, data?: AssociateSubnetsCommandOutput) => void
  ): Promise<AssociateSubnetsCommandOutput> | void {
    const command = new AssociateSubnetsCommand(args);
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
   * <p>Creates an Network Firewall <a>Firewall</a> and accompanying <a>FirewallStatus</a> for a VPC. </p>
   *          <p>The firewall defines the configuration settings for an Network Firewall firewall. The settings that you can define at creation include the firewall policy, the subnets in your VPC to use for the firewall endpoints, and any tags that are attached to the firewall Amazon Web Services resource. </p>
   *          <p>After you create a firewall, you can provide additional settings, like the logging configuration. </p>
   *          <p>To update the settings for a firewall, you use the operations that apply to the settings
   *          themselves, for example <a>UpdateLoggingConfiguration</a>, <a>AssociateSubnets</a>, and <a>UpdateFirewallDeleteProtection</a>. </p>
   *          <p>To manage a firewall's tags, use the standard Amazon Web Services resource tagging operations, <a>ListTagsForResource</a>, <a>TagResource</a>, and <a>UntagResource</a>.</p>
   *          <p>To retrieve information about firewalls, use <a>ListFirewalls</a> and <a>DescribeFirewall</a>.</p>
   */
  public createFirewall(
    args: CreateFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallCommandOutput>;
  public createFirewall(
    args: CreateFirewallCommandInput,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;
  public createFirewall(
    args: CreateFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallCommandOutput) => void
  ): void;
  public createFirewall(
    args: CreateFirewallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFirewallCommandOutput) => void),
    cb?: (err: any, data?: CreateFirewallCommandOutput) => void
  ): Promise<CreateFirewallCommandOutput> | void {
    const command = new CreateFirewallCommand(args);
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
   * <p>Creates the firewall policy for the firewall according to the specifications. </p>
   *          <p>An Network Firewall firewall policy defines the behavior of a firewall, in a collection of
   *          stateless and stateful rule groups and other settings. You can use one firewall policy for
   *          multiple firewalls. </p>
   */
  public createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateFirewallPolicyCommandOutput>;
  public createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;
  public createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): void;
  public createFirewallPolicy(
    args: CreateFirewallPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateFirewallPolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateFirewallPolicyCommandOutput) => void
  ): Promise<CreateFirewallPolicyCommandOutput> | void {
    const command = new CreateFirewallPolicyCommand(args);
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
   * <p>Creates the specified stateless or stateful rule group, which includes the rules for
   *          network traffic inspection, a capacity setting, and tags. </p>
   *          <p>You provide your rule group specification in your request using either
   *             <code>RuleGroup</code> or <code>Rules</code>.</p>
   */
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleGroupCommandOutput>;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): void;
  public createRuleGroup(
    args: CreateRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleGroupCommandOutput) => void
  ): Promise<CreateRuleGroupCommandOutput> | void {
    const command = new CreateRuleGroupCommand(args);
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
   * <p>Deletes the specified <a>Firewall</a> and its <a>FirewallStatus</a>.
   *        This operation requires the firewall's <code>DeleteProtection</code> flag to be
   *             <code>FALSE</code>. You can't revert this operation. </p>
   *          <p>You can check whether a firewall is
   *          in use by reviewing the route tables for the Availability Zones where you have
   *          firewall subnet mappings. Retrieve the subnet mappings by calling <a>DescribeFirewall</a>.
   *          You define and update the route tables through Amazon VPC. As needed, update the route tables for the
   *          zones to remove the firewall endpoints. When the route tables no longer use the firewall endpoints,
   *          you can remove the firewall safely.</p>
   *          <p>To delete a firewall, remove the delete protection if you need to using <a>UpdateFirewallDeleteProtection</a>,
   *          then delete the firewall by calling <a>DeleteFirewall</a>. </p>
   */
  public deleteFirewall(
    args: DeleteFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallCommandOutput>;
  public deleteFirewall(
    args: DeleteFirewallCommandInput,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;
  public deleteFirewall(
    args: DeleteFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): void;
  public deleteFirewall(
    args: DeleteFirewallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallCommandOutput) => void
  ): Promise<DeleteFirewallCommandOutput> | void {
    const command = new DeleteFirewallCommand(args);
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
   * <p>Deletes the specified <a>FirewallPolicy</a>. </p>
   */
  public deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteFirewallPolicyCommandOutput>;
  public deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;
  public deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): void;
  public deleteFirewallPolicy(
    args: DeleteFirewallPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteFirewallPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteFirewallPolicyCommandOutput) => void
  ): Promise<DeleteFirewallPolicyCommandOutput> | void {
    const command = new DeleteFirewallPolicyCommand(args);
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
   * <p>Deletes a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
   */
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteResourcePolicyCommandOutput>;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): void;
  public deleteResourcePolicy(
    args: DeleteResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteResourcePolicyCommandOutput) => void
  ): Promise<DeleteResourcePolicyCommandOutput> | void {
    const command = new DeleteResourcePolicyCommand(args);
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
   * <p>Deletes the specified <a>RuleGroup</a>. </p>
   */
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleGroupCommandOutput>;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): void;
  public deleteRuleGroup(
    args: DeleteRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleGroupCommandOutput) => void
  ): Promise<DeleteRuleGroupCommandOutput> | void {
    const command = new DeleteRuleGroupCommand(args);
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
   * <p>Returns the data objects for the specified firewall. </p>
   */
  public describeFirewall(
    args: DescribeFirewallCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFirewallCommandOutput>;
  public describeFirewall(
    args: DescribeFirewallCommandInput,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;
  public describeFirewall(
    args: DescribeFirewallCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): void;
  public describeFirewall(
    args: DescribeFirewallCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFirewallCommandOutput) => void),
    cb?: (err: any, data?: DescribeFirewallCommandOutput) => void
  ): Promise<DescribeFirewallCommandOutput> | void {
    const command = new DescribeFirewallCommand(args);
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
   * <p>Returns the data objects for the specified firewall policy. </p>
   */
  public describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeFirewallPolicyCommandOutput>;
  public describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;
  public describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): void;
  public describeFirewallPolicy(
    args: DescribeFirewallPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeFirewallPolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeFirewallPolicyCommandOutput) => void
  ): Promise<DescribeFirewallPolicyCommandOutput> | void {
    const command = new DescribeFirewallPolicyCommand(args);
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
   * <p>Returns the logging configuration for the specified firewall. </p>
   */
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoggingConfigurationCommandOutput>;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): void;
  public describeLoggingConfiguration(
    args: DescribeLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoggingConfigurationCommandOutput) => void
  ): Promise<DescribeLoggingConfigurationCommandOutput> | void {
    const command = new DescribeLoggingConfigurationCommand(args);
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
   * <p>Retrieves a resource policy that you created in a <a>PutResourcePolicy</a> request. </p>
   */
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeResourcePolicyCommandOutput>;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): void;
  public describeResourcePolicy(
    args: DescribeResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: DescribeResourcePolicyCommandOutput) => void
  ): Promise<DescribeResourcePolicyCommandOutput> | void {
    const command = new DescribeResourcePolicyCommand(args);
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
   * <p>Returns the data objects for the specified rule group. </p>
   */
  public describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupCommandOutput>;
  public describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;
  public describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): void;
  public describeRuleGroup(
    args: DescribeRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuleGroupCommandOutput) => void
  ): Promise<DescribeRuleGroupCommandOutput> | void {
    const command = new DescribeRuleGroupCommand(args);
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
   * <p>High-level information about a rule group, returned by operations like create and describe.
   *          You can use the information provided in the metadata to retrieve and manage a rule group.
   *          You can retrieve all objects for a rule group by calling <a>DescribeRuleGroup</a>.
   *       </p>
   */
  public describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRuleGroupMetadataCommandOutput>;
  public describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;
  public describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): void;
  public describeRuleGroupMetadata(
    args: DescribeRuleGroupMetadataCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void),
    cb?: (err: any, data?: DescribeRuleGroupMetadataCommandOutput) => void
  ): Promise<DescribeRuleGroupMetadataCommandOutput> | void {
    const command = new DescribeRuleGroupMetadataCommand(args);
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
   * <p>Removes the specified subnet associations from the firewall. This removes the
   *           firewall endpoints from the subnets and removes any network filtering protections that the endpoints
   *           were providing.
   *       </p>
   */
  public disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisassociateSubnetsCommandOutput>;
  public disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;
  public disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): void;
  public disassociateSubnets(
    args: DisassociateSubnetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisassociateSubnetsCommandOutput) => void),
    cb?: (err: any, data?: DisassociateSubnetsCommandOutput) => void
  ): Promise<DisassociateSubnetsCommandOutput> | void {
    const command = new DisassociateSubnetsCommand(args);
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
   * <p>Retrieves the metadata for the firewall policies that you have defined. Depending on
   *          your setting for max results and the number of firewall policies, a single call might not
   *          return the full list. </p>
   */
  public listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallPoliciesCommandOutput>;
  public listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;
  public listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): void;
  public listFirewallPolicies(
    args: ListFirewallPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallPoliciesCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallPoliciesCommandOutput) => void
  ): Promise<ListFirewallPoliciesCommandOutput> | void {
    const command = new ListFirewallPoliciesCommand(args);
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
   * <p>Retrieves the metadata for the firewalls that you have defined. If you provide VPC
   *          identifiers in your request, this returns only the firewalls for those VPCs.</p>
   *          <p>Depending on your setting for max results and the number of firewalls, a single call
   *          might not return the full list. </p>
   */
  public listFirewalls(
    args: ListFirewallsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListFirewallsCommandOutput>;
  public listFirewalls(
    args: ListFirewallsCommandInput,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;
  public listFirewalls(
    args: ListFirewallsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListFirewallsCommandOutput) => void
  ): void;
  public listFirewalls(
    args: ListFirewallsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListFirewallsCommandOutput) => void),
    cb?: (err: any, data?: ListFirewallsCommandOutput) => void
  ): Promise<ListFirewallsCommandOutput> | void {
    const command = new ListFirewallsCommand(args);
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
   * <p>Retrieves the metadata for the rule groups that you have defined. Depending on your
   *          setting for max results and the number of rule groups, a single call might not return the
   *          full list. </p>
   */
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRuleGroupsCommandOutput>;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): void;
  public listRuleGroups(
    args: ListRuleGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRuleGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListRuleGroupsCommandOutput) => void
  ): Promise<ListRuleGroupsCommandOutput> | void {
    const command = new ListRuleGroupsCommand(args);
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
   * <p>Retrieves the tags associated with the specified resource. Tags are key:value pairs that
   *          you can use to categorize and manage your resources, for purposes like billing. For
   *          example, you might set the tag key to "customer" and the value to the customer name or ID.
   *          You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   *          <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall
   *          policies, and rule groups. </p>
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
   * <p>Creates or updates an IAM policy for your rule group or firewall policy. Use this to share rule groups and firewall policies between accounts. This operation works in conjunction with the Amazon Web Services Resource Access Manager (RAM) service
   *            to manage resource sharing for Network Firewall. </p>
   *          <p>Use this operation to create or update a resource policy for your rule group or firewall policy. In the policy, you specify the accounts that you want to share the resource with and the operations that you want the accounts to be able to perform. </p>
   *          <p>When you add an account in the resource policy, you then run the following Resource Access Manager (RAM) operations to access and accept the shared rule group or firewall policy. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_GetResourceShareInvitations.html">GetResourceShareInvitations</a> - Returns the Amazon Resource Names (ARNs) of the resource share invitations.  </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_AcceptResourceShareInvitation.html">AcceptResourceShareInvitation</a> - Accepts the share invitation for a specified resource share. </p>
   *             </li>
   *          </ul>
   *          <p>For additional information about resource sharing using RAM, see <a href="https://docs.aws.amazon.com/ram/latest/userguide/what-is.html">Resource Access Manager User Guide</a>.</p>
   */
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutResourcePolicyCommandOutput>;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): void;
  public putResourcePolicy(
    args: PutResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: PutResourcePolicyCommandOutput) => void
  ): Promise<PutResourcePolicyCommandOutput> | void {
    const command = new PutResourcePolicyCommand(args);
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
   * <p>Adds the specified tags to the specified resource. Tags are key:value pairs that you can
   *          use to categorize and manage your resources, for purposes like billing. For example, you
   *          might set the tag key to "customer" and the value to the customer name or ID. You can
   *          specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a resource.</p>
   *          <p>You can tag the Amazon Web Services resources that you manage through Network Firewall: firewalls, firewall
   *          policies, and rule groups. </p>
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
   * <p>Removes the tags with the specified keys from the specified resource. Tags are key:value
   *          pairs that you can use to categorize and manage your resources, for purposes like billing.
   *          For example, you might set the tag key to "customer" and the value to the customer name or
   *          ID. You can specify one or more tags to add to each Amazon Web Services resource, up to 50 tags for a
   *          resource.</p>
   *          <p>You can manage tags for the Amazon Web Services resources that you manage through Network Firewall:
   *          firewalls, firewall policies, and rule groups. </p>
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
   * <p>Modifies the flag, <code>DeleteProtection</code>, which indicates whether it is possible
   *          to delete the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
   *          against deletion. This setting helps protect against accidentally deleting a firewall
   *          that's in use. </p>
   */
  public updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDeleteProtectionCommandOutput>;
  public updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;
  public updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): void;
  public updateFirewallDeleteProtection(
    args: UpdateFirewallDeleteProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallDeleteProtectionCommandOutput) => void
  ): Promise<UpdateFirewallDeleteProtectionCommandOutput> | void {
    const command = new UpdateFirewallDeleteProtectionCommand(args);
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
   * <p>Modifies the description for the specified firewall. Use the description to help you
   *          identify the firewall when you're working with it. </p>
   */
  public updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallDescriptionCommandOutput>;
  public updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;
  public updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): void;
  public updateFirewallDescription(
    args: UpdateFirewallDescriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallDescriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallDescriptionCommandOutput) => void
  ): Promise<UpdateFirewallDescriptionCommandOutput> | void {
    const command = new UpdateFirewallDescriptionCommand(args);
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
   * <p>A complex type that contains settings for encryption of your firewall resources.</p>
   */
  public updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallEncryptionConfigurationCommandOutput>;
  public updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;
  public updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): void;
  public updateFirewallEncryptionConfiguration(
    args: UpdateFirewallEncryptionConfigurationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallEncryptionConfigurationCommandOutput) => void
  ): Promise<UpdateFirewallEncryptionConfigurationCommandOutput> | void {
    const command = new UpdateFirewallEncryptionConfigurationCommand(args);
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
   * <p>Updates the properties of the specified firewall policy.</p>
   */
  public updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallPolicyCommandOutput>;
  public updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;
  public updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): void;
  public updateFirewallPolicy(
    args: UpdateFirewallPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallPolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallPolicyCommandOutput) => void
  ): Promise<UpdateFirewallPolicyCommandOutput> | void {
    const command = new UpdateFirewallPolicyCommand(args);
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
   * <p>Modifies the flag, <code>ChangeProtection</code>, which indicates whether it
   *          is possible to change the firewall. If the flag is set to <code>TRUE</code>, the firewall is protected
   *          from changes. This setting helps protect against accidentally changing a firewall that's in use.</p>
   */
  public updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput>;
  public updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;
  public updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): void;
  public updateFirewallPolicyChangeProtection(
    args: UpdateFirewallPolicyChangeProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateFirewallPolicyChangeProtectionCommandOutput) => void
  ): Promise<UpdateFirewallPolicyChangeProtectionCommandOutput> | void {
    const command = new UpdateFirewallPolicyChangeProtectionCommand(args);
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
   * <p>Sets the logging configuration for the specified firewall. </p>
   *          <p>To change the logging configuration, retrieve the <a>LoggingConfiguration</a> by calling <a>DescribeLoggingConfiguration</a>, then change it and provide
   *          the modified object to this update call. You must change the logging configuration one
   *             <a>LogDestinationConfig</a> at a time inside the retrieved <a>LoggingConfiguration</a> object. </p>
   *          <p>You can perform only one of the following actions in any call to
   *             <code>UpdateLoggingConfiguration</code>: </p>
   *          <ul>
   *             <li>
   *                <p>Create a new log destination object by adding a single
   *                   <code>LogDestinationConfig</code> array element to
   *                   <code>LogDestinationConfigs</code>.</p>
   *             </li>
   *             <li>
   *                <p>Delete a log destination object by removing a single
   *                   <code>LogDestinationConfig</code> array element from
   *                   <code>LogDestinationConfigs</code>.</p>
   *             </li>
   *             <li>
   *                <p>Change the <code>LogDestination</code> setting in a single
   *                   <code>LogDestinationConfig</code> array element.</p>
   *             </li>
   *          </ul>
   *          <p>You can't change the <code>LogDestinationType</code> or <code>LogType</code> in a
   *             <code>LogDestinationConfig</code>. To change these settings, delete the existing
   *             <code>LogDestinationConfig</code> object and create a new one, using two separate calls
   *          to this update operation.</p>
   */
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  public updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLoggingConfigurationCommandOutput) => void),
    cb?: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): Promise<UpdateLoggingConfigurationCommandOutput> | void {
    const command = new UpdateLoggingConfigurationCommand(args);
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
   * <p>Updates the rule settings for the specified rule group. You use a rule group by
   *          reference in one or more firewall policies. When you modify a rule group, you modify all
   *          firewall policies that use the rule group. </p>
   *          <p>To update a rule group, first call <a>DescribeRuleGroup</a> to retrieve the
   *          current <a>RuleGroup</a> object, update the object as needed, and then provide
   *          the updated object to this call. </p>
   */
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleGroupCommandOutput>;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): void;
  public updateRuleGroup(
    args: UpdateRuleGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleGroupCommandOutput) => void
  ): Promise<UpdateRuleGroupCommandOutput> | void {
    const command = new UpdateRuleGroupCommand(args);
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
   * <p></p>
   */
  public updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSubnetChangeProtectionCommandOutput>;
  public updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;
  public updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): void;
  public updateSubnetChangeProtection(
    args: UpdateSubnetChangeProtectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void),
    cb?: (err: any, data?: UpdateSubnetChangeProtectionCommandOutput) => void
  ): Promise<UpdateSubnetChangeProtectionCommandOutput> | void {
    const command = new UpdateSubnetChangeProtectionCommand(args);
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
