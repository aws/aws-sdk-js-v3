// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddListenerCertificatesCommand,
  AddListenerCertificatesCommandInput,
  AddListenerCertificatesCommandOutput,
} from "./commands/AddListenerCertificatesCommand";
import { AddTagsCommand, AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
} from "./commands/CreateListenerCommand";
import {
  CreateLoadBalancerCommand,
  CreateLoadBalancerCommandInput,
  CreateLoadBalancerCommandOutput,
} from "./commands/CreateLoadBalancerCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateTargetGroupCommand,
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput,
} from "./commands/CreateTargetGroupCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput,
} from "./commands/DeleteListenerCommand";
import {
  DeleteLoadBalancerCommand,
  DeleteLoadBalancerCommandInput,
  DeleteLoadBalancerCommandOutput,
} from "./commands/DeleteLoadBalancerCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteTargetGroupCommand,
  DeleteTargetGroupCommandInput,
  DeleteTargetGroupCommandOutput,
} from "./commands/DeleteTargetGroupCommand";
import {
  DeregisterTargetsCommand,
  DeregisterTargetsCommandInput,
  DeregisterTargetsCommandOutput,
} from "./commands/DeregisterTargetsCommand";
import {
  DescribeAccountLimitsCommand,
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "./commands/DescribeAccountLimitsCommand";
import {
  DescribeListenerCertificatesCommand,
  DescribeListenerCertificatesCommandInput,
  DescribeListenerCertificatesCommandOutput,
} from "./commands/DescribeListenerCertificatesCommand";
import {
  DescribeListenersCommand,
  DescribeListenersCommandInput,
  DescribeListenersCommandOutput,
} from "./commands/DescribeListenersCommand";
import {
  DescribeLoadBalancerAttributesCommand,
  DescribeLoadBalancerAttributesCommandInput,
  DescribeLoadBalancerAttributesCommandOutput,
} from "./commands/DescribeLoadBalancerAttributesCommand";
import {
  DescribeLoadBalancersCommand,
  DescribeLoadBalancersCommandInput,
  DescribeLoadBalancersCommandOutput,
} from "./commands/DescribeLoadBalancersCommand";
import {
  DescribeRulesCommand,
  DescribeRulesCommandInput,
  DescribeRulesCommandOutput,
} from "./commands/DescribeRulesCommand";
import {
  DescribeSSLPoliciesCommand,
  DescribeSSLPoliciesCommandInput,
  DescribeSSLPoliciesCommandOutput,
} from "./commands/DescribeSSLPoliciesCommand";
import {
  DescribeTagsCommand,
  DescribeTagsCommandInput,
  DescribeTagsCommandOutput,
} from "./commands/DescribeTagsCommand";
import {
  DescribeTargetGroupAttributesCommand,
  DescribeTargetGroupAttributesCommandInput,
  DescribeTargetGroupAttributesCommandOutput,
} from "./commands/DescribeTargetGroupAttributesCommand";
import {
  DescribeTargetGroupsCommand,
  DescribeTargetGroupsCommandInput,
  DescribeTargetGroupsCommandOutput,
} from "./commands/DescribeTargetGroupsCommand";
import {
  DescribeTargetHealthCommand,
  DescribeTargetHealthCommandInput,
  DescribeTargetHealthCommandOutput,
} from "./commands/DescribeTargetHealthCommand";
import {
  ModifyListenerCommand,
  ModifyListenerCommandInput,
  ModifyListenerCommandOutput,
} from "./commands/ModifyListenerCommand";
import {
  ModifyLoadBalancerAttributesCommand,
  ModifyLoadBalancerAttributesCommandInput,
  ModifyLoadBalancerAttributesCommandOutput,
} from "./commands/ModifyLoadBalancerAttributesCommand";
import { ModifyRuleCommand, ModifyRuleCommandInput, ModifyRuleCommandOutput } from "./commands/ModifyRuleCommand";
import {
  ModifyTargetGroupAttributesCommand,
  ModifyTargetGroupAttributesCommandInput,
  ModifyTargetGroupAttributesCommandOutput,
} from "./commands/ModifyTargetGroupAttributesCommand";
import {
  ModifyTargetGroupCommand,
  ModifyTargetGroupCommandInput,
  ModifyTargetGroupCommandOutput,
} from "./commands/ModifyTargetGroupCommand";
import {
  RegisterTargetsCommand,
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
} from "./commands/RegisterTargetsCommand";
import {
  RemoveListenerCertificatesCommand,
  RemoveListenerCertificatesCommandInput,
  RemoveListenerCertificatesCommandOutput,
} from "./commands/RemoveListenerCertificatesCommand";
import { RemoveTagsCommand, RemoveTagsCommandInput, RemoveTagsCommandOutput } from "./commands/RemoveTagsCommand";
import {
  SetIpAddressTypeCommand,
  SetIpAddressTypeCommandInput,
  SetIpAddressTypeCommandOutput,
} from "./commands/SetIpAddressTypeCommand";
import {
  SetRulePrioritiesCommand,
  SetRulePrioritiesCommandInput,
  SetRulePrioritiesCommandOutput,
} from "./commands/SetRulePrioritiesCommand";
import {
  SetSecurityGroupsCommand,
  SetSecurityGroupsCommandInput,
  SetSecurityGroupsCommandOutput,
} from "./commands/SetSecurityGroupsCommand";
import { SetSubnetsCommand, SetSubnetsCommandInput, SetSubnetsCommandOutput } from "./commands/SetSubnetsCommand";
import { ElasticLoadBalancingV2Client } from "./ElasticLoadBalancingV2Client";

/**
 * <fullname>Elastic Load Balancing</fullname>
 *
 *          <p>A load balancer distributes incoming traffic across targets, such as your EC2 instances.
 *       This enables you to increase the availability of your application. The load balancer also
 *       monitors the health of its registered targets and ensures that it routes traffic only to
 *       healthy targets. You configure your load balancer to accept incoming traffic by specifying one
 *       or more listeners, which are configured with a protocol and port number for connections from
 *       clients to the load balancer. You configure a target group with a protocol and port number for
 *       connections from the load balancer to the targets, and with health check settings to be used
 *       when checking the health status of the targets.</p>
 *
 *          <p>Elastic Load Balancing supports the following types of load balancers: Application Load
 *       Balancers, Network Load Balancers, Gateway Load Balancers, and Classic Load Balancers. This
 *       reference covers the following load balancer types:</p>
 *          <ul>
 *             <li>
 *                <p>Application Load Balancer - Operates at the application layer (layer 7) and supports
 *           HTTP and HTTPS.</p>
 *             </li>
 *             <li>
 *                <p>Network Load Balancer - Operates at the transport layer (layer 4) and supports TCP,
 *           TLS, and UDP.</p>
 *             </li>
 *             <li>
 *                <p>Gateway Load Balancer - Operates at the network layer (layer 3).</p>
 *             </li>
 *          </ul>
 *
 *          <p>For more information, see the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/userguide/">Elastic Load Balancing User
 *       Guide</a>.</p>
 *
 *
 *
 *
 *
 *
 *
 *          <p>All Elastic Load Balancing operations are idempotent, which means that they complete at
 *       most one time. If you repeat an operation, it succeeds.</p>
 */
export class ElasticLoadBalancingV2 extends ElasticLoadBalancingV2Client {
  /**
   * <p>Adds the specified SSL server certificate to the certificate list for the specified HTTPS
   *       or TLS listener.</p>
   *          <p>If the certificate in already in the certificate list, the call is successful but the
   *       certificate is not added again.</p>
   *
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html">HTTPS
   *         listeners</a> in the <i>Application Load Balancers Guide</i> or <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html">TLS
   *         listeners</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  public addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddListenerCertificatesCommandOutput>;
  public addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;
  public addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): void;
  public addListenerCertificates(
    args: AddListenerCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddListenerCertificatesCommandOutput) => void),
    cb?: (err: any, data?: AddListenerCertificatesCommandOutput) => void
  ): Promise<AddListenerCertificatesCommandOutput> | void {
    const command = new AddListenerCertificatesCommand(args);
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
   * <p>Adds the specified tags to the specified Elastic Load Balancing resource. You can tag your
   *       Application Load Balancers, Network Load Balancers, Gateway Load Balancers, target groups,
   *       listeners, and rules.</p>
   *          <p>Each tag consists of a key and an optional value. If a resource already has a tag with the
   *       same key, <code>AddTags</code> updates its value.</p>
   */
  public addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
  public addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
  public addTags(
    args: AddTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddTagsCommandOutput) => void
  ): void;
  public addTags(
    args: AddTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddTagsCommandOutput) => void),
    cb?: (err: any, data?: AddTagsCommandOutput) => void
  ): Promise<AddTagsCommandOutput> | void {
    const command = new AddTagsCommand(args);
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
   * <p>Creates a listener for the specified Application Load Balancer, Network Load Balancer, or
   *       Gateway Load Balancer.</p>
   *
   *
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html">Listeners for
   *             your Application Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-listeners.html">Listeners for
   *             your Network Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-listeners.html">Listeners for your
   *             Gateway Load Balancers</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent, which means that it completes at most one time. If you
   *       attempt to create multiple listeners with the same settings, each call succeeds.</p>
   */
  public createListener(
    args: CreateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateListenerCommandOutput>;
  public createListener(
    args: CreateListenerCommandInput,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;
  public createListener(
    args: CreateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateListenerCommandOutput) => void
  ): void;
  public createListener(
    args: CreateListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateListenerCommandOutput) => void),
    cb?: (err: any, data?: CreateListenerCommandOutput) => void
  ): Promise<CreateListenerCommandOutput> | void {
    const command = new CreateListenerCommand(args);
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
   * <p>Creates an Application Load Balancer, Network Load Balancer, or Gateway Load
   *       Balancer.</p>
   *
   *
   *
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html">Application Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html">Network Load
   *             Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html">Gateway Load
   *             Balancers</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent, which means that it completes at most one time. If you
   *       attempt to create multiple load balancers with the same settings, each call succeeds.</p>
   */
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLoadBalancerCommandOutput>;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): void;
  public createLoadBalancer(
    args: CreateLoadBalancerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: CreateLoadBalancerCommandOutput) => void
  ): Promise<CreateLoadBalancerCommandOutput> | void {
    const command = new CreateLoadBalancerCommand(args);
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
   * <p>Creates a rule for the specified listener. The listener must be associated with an
   *       Application Load Balancer.</p>
   *          <p>Each rule consists of a priority, one or more actions, and one or more conditions. Rules
   *       are evaluated in priority order, from the lowest value to the highest value. When the
   *       conditions for a rule are met, its actions are performed. If the conditions for no rules are
   *       met, the actions for the default rule are performed. For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-listeners.html#listener-rules">Listener rules</a> in the <i>Application Load Balancers Guide</i>.</p>
   */
  public createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  public createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  public createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleCommandOutput) => void
  ): Promise<CreateRuleCommandOutput> | void {
    const command = new CreateRuleCommand(args);
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
   * <p>Creates a target group.</p>
   *
   *
   *
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html">Target
   *             groups for your Application Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html">Target groups
   *             for your Network Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html">Target groups for your
   *             Gateway Load Balancers</a>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>This operation is idempotent, which means that it completes at most one time. If you
   *       attempt to create multiple target groups with the same settings, each call succeeds.</p>
   */
  public createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateTargetGroupCommandOutput>;
  public createTargetGroup(
    args: CreateTargetGroupCommandInput,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;
  public createTargetGroup(
    args: CreateTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): void;
  public createTargetGroup(
    args: CreateTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateTargetGroupCommandOutput) => void
  ): Promise<CreateTargetGroupCommandOutput> | void {
    const command = new CreateTargetGroupCommand(args);
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
   * <p>Deletes the specified listener.</p>
   *          <p>Alternatively, your listener is deleted when you delete the load balancer to which it is
   *         attached.</p>
   */
  public deleteListener(
    args: DeleteListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteListenerCommandOutput>;
  public deleteListener(
    args: DeleteListenerCommandInput,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;
  public deleteListener(
    args: DeleteListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteListenerCommandOutput) => void
  ): void;
  public deleteListener(
    args: DeleteListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteListenerCommandOutput) => void),
    cb?: (err: any, data?: DeleteListenerCommandOutput) => void
  ): Promise<DeleteListenerCommandOutput> | void {
    const command = new DeleteListenerCommand(args);
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
   * <p>Deletes the specified Application Load Balancer, Network Load Balancer, or Gateway Load
   *       Balancer. Deleting a load balancer also deletes its listeners.</p>
   *          <p>You can't delete a load balancer if deletion protection is enabled. If the load balancer
   *       does not exist or has already been deleted, the call succeeds.</p>
   *          <p>Deleting a load balancer does not affect its registered targets. For example, your EC2
   *       instances continue to run and are still registered to their target groups. If you no longer
   *       need these EC2 instances, you can stop or terminate them.</p>
   */
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLoadBalancerCommandOutput>;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): void;
  public deleteLoadBalancer(
    args: DeleteLoadBalancerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLoadBalancerCommandOutput) => void),
    cb?: (err: any, data?: DeleteLoadBalancerCommandOutput) => void
  ): Promise<DeleteLoadBalancerCommandOutput> | void {
    const command = new DeleteLoadBalancerCommand(args);
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
   * <p>Deletes the specified rule.</p>
   *          <p>You can't delete the default rule.</p>
   */
  public deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  public deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
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
   * <p>Deletes the specified target group.</p>
   *          <p>You can delete a target group if it is not referenced by any actions. Deleting a target
   *       group also deletes any associated health checks. Deleting a target group does not affect its
   *       registered targets. For example, any EC2 instances continue to run until you stop or terminate
   *       them.</p>
   */
  public deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteTargetGroupCommandOutput>;
  public deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;
  public deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): void;
  public deleteTargetGroup(
    args: DeleteTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteTargetGroupCommandOutput) => void
  ): Promise<DeleteTargetGroupCommandOutput> | void {
    const command = new DeleteTargetGroupCommand(args);
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
   * <p>Deregisters the specified targets from the specified target group. After the targets are
   *       deregistered, they no longer receive traffic from the load balancer.</p>
   */
  public deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeregisterTargetsCommandOutput>;
  public deregisterTargets(
    args: DeregisterTargetsCommandInput,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;
  public deregisterTargets(
    args: DeregisterTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): void;
  public deregisterTargets(
    args: DeregisterTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeregisterTargetsCommandOutput) => void),
    cb?: (err: any, data?: DeregisterTargetsCommandOutput) => void
  ): Promise<DeregisterTargetsCommandOutput> | void {
    const command = new DeregisterTargetsCommand(args);
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
   * <p>Describes the current Elastic Load Balancing resource limits for your Amazon Web Services
   *       account.</p>
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-limits.html">Quotas for your
   *             Application Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-limits.html">Quotas for your
   *             Network Load Balancers</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/quotas-limits.html">Quotas for your Gateway
   *             Load Balancers</a>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAccountLimitsCommandOutput>;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): void;
  public describeAccountLimits(
    args: DescribeAccountLimitsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAccountLimitsCommandOutput) => void),
    cb?: (err: any, data?: DescribeAccountLimitsCommandOutput) => void
  ): Promise<DescribeAccountLimitsCommandOutput> | void {
    const command = new DescribeAccountLimitsCommand(args);
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
   * <p>Describes the default certificate and the certificate list for the specified HTTPS or TLS
   *       listener.</p>
   *          <p>If the default certificate is also in the certificate list, it appears twice in the
   *       results (once with <code>IsDefault</code> set to true and once with <code>IsDefault</code> set
   *       to false).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#https-listener-certificates">SSL certificates</a> in the <i>Application Load Balancers Guide</i> or
   *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#tls-listener-certificate">Server certificates</a> in the <i>Network Load Balancers
   *       Guide</i>.</p>
   */
  public describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenerCertificatesCommandOutput>;
  public describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;
  public describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): void;
  public describeListenerCertificates(
    args: DescribeListenerCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeListenerCertificatesCommandOutput) => void),
    cb?: (err: any, data?: DescribeListenerCertificatesCommandOutput) => void
  ): Promise<DescribeListenerCertificatesCommandOutput> | void {
    const command = new DescribeListenerCertificatesCommand(args);
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
   * <p>Describes the specified listeners or the listeners for the specified Application Load
   *       Balancer, Network Load Balancer, or Gateway Load Balancer. You must specify either a load
   *       balancer or one or more listeners.</p>
   */
  public describeListeners(
    args: DescribeListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenersCommandOutput>;
  public describeListeners(
    args: DescribeListenersCommandInput,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;
  public describeListeners(
    args: DescribeListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenersCommandOutput) => void
  ): void;
  public describeListeners(
    args: DescribeListenersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeListenersCommandOutput) => void),
    cb?: (err: any, data?: DescribeListenersCommandOutput) => void
  ): Promise<DescribeListenersCommandOutput> | void {
    const command = new DescribeListenersCommand(args);
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
   * <p>Describes the attributes for the specified Application Load Balancer, Network Load
   *       Balancer, or Gateway Load Balancer.</p>
   *
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/application-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Application Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/network-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Network Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/gateway-load-balancers.html#load-balancer-attributes">Load balancer attributes</a> in the <i>Gateway Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancerAttributesCommandOutput>;
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): void;
  public describeLoadBalancerAttributes(
    args: DescribeLoadBalancerAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoadBalancerAttributesCommandOutput) => void
  ): Promise<DescribeLoadBalancerAttributesCommandOutput> | void {
    const command = new DescribeLoadBalancerAttributesCommand(args);
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
   * <p>Describes the specified load balancers or all of your load balancers.</p>
   */
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLoadBalancersCommandOutput>;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): void;
  public describeLoadBalancers(
    args: DescribeLoadBalancersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeLoadBalancersCommandOutput) => void),
    cb?: (err: any, data?: DescribeLoadBalancersCommandOutput) => void
  ): Promise<DescribeLoadBalancersCommandOutput> | void {
    const command = new DescribeLoadBalancersCommand(args);
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
   * <p>Describes the specified rules or the rules for the specified listener. You must specify
   *       either a listener or one or more rules.</p>
   */
  public describeRules(
    args: DescribeRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeRulesCommandOutput>;
  public describeRules(
    args: DescribeRulesCommandInput,
    cb: (err: any, data?: DescribeRulesCommandOutput) => void
  ): void;
  public describeRules(
    args: DescribeRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeRulesCommandOutput) => void
  ): void;
  public describeRules(
    args: DescribeRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeRulesCommandOutput) => void),
    cb?: (err: any, data?: DescribeRulesCommandOutput) => void
  ): Promise<DescribeRulesCommandOutput> | void {
    const command = new DescribeRulesCommand(args);
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
   * <p>Describes the specified policies or all policies used for SSL negotiation.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/create-https-listener.html#describe-ssl-policies">Security policies</a> in the <i>Application Load Balancers Guide</i> or
   *         <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/create-tls-listener.html#describe-ssl-policies">Security policies</a> in the <i>Network Load Balancers Guide</i>.</p>
   */
  public describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSSLPoliciesCommandOutput>;
  public describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;
  public describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): void;
  public describeSSLPolicies(
    args: DescribeSSLPoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeSSLPoliciesCommandOutput) => void),
    cb?: (err: any, data?: DescribeSSLPoliciesCommandOutput) => void
  ): Promise<DescribeSSLPoliciesCommandOutput> | void {
    const command = new DescribeSSLPoliciesCommand(args);
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
   * <p>Describes the tags for the specified Elastic Load Balancing resources. You can describe
   *       the tags for one or more Application Load Balancers, Network Load Balancers, Gateway Load
   *       Balancers, target groups, listeners, or rules.</p>
   */
  public describeTags(
    args: DescribeTagsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTagsCommandOutput>;
  public describeTags(args: DescribeTagsCommandInput, cb: (err: any, data?: DescribeTagsCommandOutput) => void): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTagsCommandOutput) => void
  ): void;
  public describeTags(
    args: DescribeTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTagsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTagsCommandOutput) => void
  ): Promise<DescribeTagsCommandOutput> | void {
    const command = new DescribeTagsCommand(args);
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
   * <p>Describes the attributes for the specified target group.</p>
   *          <p>For more information, see the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Application Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/network/load-balancer-target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Network Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/gateway/target-groups.html#target-group-attributes">Target group attributes</a> in the <i>Gateway Load Balancers
   *             Guide</i>
   *                </p>
   *             </li>
   *          </ul>
   */
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetGroupAttributesCommandOutput>;
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): void;
  public describeTargetGroupAttributes(
    args: DescribeTargetGroupAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeTargetGroupAttributesCommandOutput) => void
  ): Promise<DescribeTargetGroupAttributesCommandOutput> | void {
    const command = new DescribeTargetGroupAttributesCommand(args);
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
   * <p>Describes the specified target groups or all of your target groups. By default, all target
   *       groups are described. Alternatively, you can specify one of the following to filter the
   *       results: the ARN of the load balancer, the names of one or more target groups, or the ARNs of
   *       one or more target groups.</p>
   */
  public describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetGroupsCommandOutput>;
  public describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;
  public describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): void;
  public describeTargetGroups(
    args: DescribeTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: DescribeTargetGroupsCommandOutput) => void
  ): Promise<DescribeTargetGroupsCommandOutput> | void {
    const command = new DescribeTargetGroupsCommand(args);
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
   * <p>Describes the health of the specified targets or all of your targets.</p>
   */
  public describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeTargetHealthCommandOutput>;
  public describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;
  public describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): void;
  public describeTargetHealth(
    args: DescribeTargetHealthCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeTargetHealthCommandOutput) => void),
    cb?: (err: any, data?: DescribeTargetHealthCommandOutput) => void
  ): Promise<DescribeTargetHealthCommandOutput> | void {
    const command = new DescribeTargetHealthCommand(args);
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
   * <p>Replaces the specified properties of the specified listener. Any properties that you do
   *       not specify remain unchanged.</p>
   *          <p>Changing the protocol from HTTPS to HTTP, or from TLS to TCP, removes the security policy
   *       and default certificate properties. If you change the protocol from HTTP to HTTPS, or from TCP
   *       to TLS, you must add the security policy and default certificate properties.</p>
   *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
   *       must provide the entire list. For example, to add an action, specify a list with the current
   *       actions plus the new action.</p>
   */
  public modifyListener(
    args: ModifyListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyListenerCommandOutput>;
  public modifyListener(
    args: ModifyListenerCommandInput,
    cb: (err: any, data?: ModifyListenerCommandOutput) => void
  ): void;
  public modifyListener(
    args: ModifyListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyListenerCommandOutput) => void
  ): void;
  public modifyListener(
    args: ModifyListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyListenerCommandOutput) => void),
    cb?: (err: any, data?: ModifyListenerCommandOutput) => void
  ): Promise<ModifyListenerCommandOutput> | void {
    const command = new ModifyListenerCommand(args);
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
   * <p>Modifies the specified attributes of the specified Application Load Balancer, Network Load
   *       Balancer, or Gateway Load Balancer.</p>
   *          <p>If any of the specified attributes can't be modified as requested, the call fails. Any
   *       existing attributes that you do not modify retain their current values.</p>
   */
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyLoadBalancerAttributesCommandOutput>;
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): void;
  public modifyLoadBalancerAttributes(
    args: ModifyLoadBalancerAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void),
    cb?: (err: any, data?: ModifyLoadBalancerAttributesCommandOutput) => void
  ): Promise<ModifyLoadBalancerAttributesCommandOutput> | void {
    const command = new ModifyLoadBalancerAttributesCommand(args);
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
   * <p>Replaces the specified properties of the specified rule. Any properties that you do not
   *       specify are unchanged.</p>
   *          <p>To add an item to a list, remove an item from a list, or update an item in a list, you
   *       must provide the entire list. For example, to add an action, specify a list with the current
   *       actions plus the new action.</p>
   */
  public modifyRule(args: ModifyRuleCommandInput, options?: __HttpHandlerOptions): Promise<ModifyRuleCommandOutput>;
  public modifyRule(args: ModifyRuleCommandInput, cb: (err: any, data?: ModifyRuleCommandOutput) => void): void;
  public modifyRule(
    args: ModifyRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyRuleCommandOutput) => void
  ): void;
  public modifyRule(
    args: ModifyRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyRuleCommandOutput) => void),
    cb?: (err: any, data?: ModifyRuleCommandOutput) => void
  ): Promise<ModifyRuleCommandOutput> | void {
    const command = new ModifyRuleCommand(args);
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
   * <p>Modifies the health checks used when evaluating the health state of the targets in the
   *       specified target group.</p>
   */
  public modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTargetGroupCommandOutput>;
  public modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;
  public modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): void;
  public modifyTargetGroup(
    args: ModifyTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: ModifyTargetGroupCommandOutput) => void
  ): Promise<ModifyTargetGroupCommandOutput> | void {
    const command = new ModifyTargetGroupCommand(args);
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
   * <p>Modifies the specified attributes of the specified target group.</p>
   */
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ModifyTargetGroupAttributesCommandOutput>;
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): void;
  public modifyTargetGroupAttributes(
    args: ModifyTargetGroupAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void),
    cb?: (err: any, data?: ModifyTargetGroupAttributesCommandOutput) => void
  ): Promise<ModifyTargetGroupAttributesCommandOutput> | void {
    const command = new ModifyTargetGroupAttributesCommand(args);
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
   * <p>Registers the specified targets with the specified target group.</p>
   *
   *          <p>If the target is an EC2 instance, it must be in the <code>running</code> state when you
   *       register it.</p>
   *
   *          <p>By default, the load balancer routes requests to registered targets using the protocol and
   *       port for the target group. Alternatively, you can override the port for a target when you
   *       register it. You can register each EC2 instance or IP address with the same target group
   *       multiple times using different ports.</p>
   *
   *          <p>With a Network Load Balancer, you cannot register instances by instance ID if they have
   *       the following instance types: C1, CC1, CC2, CG1, CG2, CR1, CS1, G1, G2, HI1, HS1, M1, M2, M3,
   *       and T1. You can register instances of these types by IP address.</p>
   */
  public registerTargets(
    args: RegisterTargetsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterTargetsCommandOutput>;
  public registerTargets(
    args: RegisterTargetsCommandInput,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;
  public registerTargets(
    args: RegisterTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): void;
  public registerTargets(
    args: RegisterTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterTargetsCommandOutput) => void),
    cb?: (err: any, data?: RegisterTargetsCommandOutput) => void
  ): Promise<RegisterTargetsCommandOutput> | void {
    const command = new RegisterTargetsCommand(args);
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
   * <p>Removes the specified certificate from the certificate list for the specified HTTPS or TLS
   *       listener.</p>
   */
  public removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveListenerCertificatesCommandOutput>;
  public removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;
  public removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): void;
  public removeListenerCertificates(
    args: RemoveListenerCertificatesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveListenerCertificatesCommandOutput) => void),
    cb?: (err: any, data?: RemoveListenerCertificatesCommandOutput) => void
  ): Promise<RemoveListenerCertificatesCommandOutput> | void {
    const command = new RemoveListenerCertificatesCommand(args);
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
   * <p>Removes the specified tags from the specified Elastic Load Balancing resources. You can
   *       remove the tags for one or more Application Load Balancers, Network Load Balancers, Gateway
   *       Load Balancers, target groups, listeners, or rules.</p>
   */
  public removeTags(args: RemoveTagsCommandInput, options?: __HttpHandlerOptions): Promise<RemoveTagsCommandOutput>;
  public removeTags(args: RemoveTagsCommandInput, cb: (err: any, data?: RemoveTagsCommandOutput) => void): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveTagsCommandOutput) => void
  ): void;
  public removeTags(
    args: RemoveTagsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveTagsCommandOutput) => void),
    cb?: (err: any, data?: RemoveTagsCommandOutput) => void
  ): Promise<RemoveTagsCommandOutput> | void {
    const command = new RemoveTagsCommand(args);
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
   * <p>Sets the type of IP addresses used by the subnets of the specified load balancer.</p>
   */
  public setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetIpAddressTypeCommandOutput>;
  public setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;
  public setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): void;
  public setIpAddressType(
    args: SetIpAddressTypeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetIpAddressTypeCommandOutput) => void),
    cb?: (err: any, data?: SetIpAddressTypeCommandOutput) => void
  ): Promise<SetIpAddressTypeCommandOutput> | void {
    const command = new SetIpAddressTypeCommand(args);
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
   * <p>Sets the priorities of the specified rules.</p>
   *          <p>You can reorder the rules as long as there are no priority conflicts in the new order. Any
   *       existing rules that you do not specify retain their current priority.</p>
   */
  public setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetRulePrioritiesCommandOutput>;
  public setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;
  public setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): void;
  public setRulePriorities(
    args: SetRulePrioritiesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetRulePrioritiesCommandOutput) => void),
    cb?: (err: any, data?: SetRulePrioritiesCommandOutput) => void
  ): Promise<SetRulePrioritiesCommandOutput> | void {
    const command = new SetRulePrioritiesCommand(args);
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
   * <p>Associates the specified security groups with the specified Application Load Balancer. The
   *       specified security groups override the previously associated security groups.</p>
   *          <p>You can't specify a security group for a Network Load Balancer or Gateway Load
   *       Balancer.</p>
   */
  public setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SetSecurityGroupsCommandOutput>;
  public setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;
  public setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): void;
  public setSecurityGroups(
    args: SetSecurityGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSecurityGroupsCommandOutput) => void),
    cb?: (err: any, data?: SetSecurityGroupsCommandOutput) => void
  ): Promise<SetSecurityGroupsCommandOutput> | void {
    const command = new SetSecurityGroupsCommand(args);
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
   * <p>Enables the Availability Zones for the specified public subnets for the specified
   *       Application Load Balancer or Network Load Balancer. The specified subnets replace the
   *       previously enabled subnets.</p>
   *          <p>When you specify subnets for a Network Load Balancer, you must include all subnets that
   *       were enabled previously, with their existing configurations, plus any additional
   *       subnets.</p>
   */
  public setSubnets(args: SetSubnetsCommandInput, options?: __HttpHandlerOptions): Promise<SetSubnetsCommandOutput>;
  public setSubnets(args: SetSubnetsCommandInput, cb: (err: any, data?: SetSubnetsCommandOutput) => void): void;
  public setSubnets(
    args: SetSubnetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SetSubnetsCommandOutput) => void
  ): void;
  public setSubnets(
    args: SetSubnetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SetSubnetsCommandOutput) => void),
    cb?: (err: any, data?: SetSubnetsCommandOutput) => void
  ): Promise<SetSubnetsCommandOutput> | void {
    const command = new SetSubnetsCommand(args);
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
