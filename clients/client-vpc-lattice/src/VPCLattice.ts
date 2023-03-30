// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  BatchUpdateRuleCommand,
  BatchUpdateRuleCommandInput,
  BatchUpdateRuleCommandOutput,
} from "./commands/BatchUpdateRuleCommand";
import {
  CreateAccessLogSubscriptionCommand,
  CreateAccessLogSubscriptionCommandInput,
  CreateAccessLogSubscriptionCommandOutput,
} from "./commands/CreateAccessLogSubscriptionCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
} from "./commands/CreateListenerCommand";
import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import {
  CreateServiceCommand,
  CreateServiceCommandInput,
  CreateServiceCommandOutput,
} from "./commands/CreateServiceCommand";
import {
  CreateServiceNetworkCommand,
  CreateServiceNetworkCommandInput,
  CreateServiceNetworkCommandOutput,
} from "./commands/CreateServiceNetworkCommand";
import {
  CreateServiceNetworkServiceAssociationCommand,
  CreateServiceNetworkServiceAssociationCommandInput,
  CreateServiceNetworkServiceAssociationCommandOutput,
} from "./commands/CreateServiceNetworkServiceAssociationCommand";
import {
  CreateServiceNetworkVpcAssociationCommand,
  CreateServiceNetworkVpcAssociationCommandInput,
  CreateServiceNetworkVpcAssociationCommandOutput,
} from "./commands/CreateServiceNetworkVpcAssociationCommand";
import {
  CreateTargetGroupCommand,
  CreateTargetGroupCommandInput,
  CreateTargetGroupCommandOutput,
} from "./commands/CreateTargetGroupCommand";
import {
  DeleteAccessLogSubscriptionCommand,
  DeleteAccessLogSubscriptionCommandInput,
  DeleteAccessLogSubscriptionCommandOutput,
} from "./commands/DeleteAccessLogSubscriptionCommand";
import {
  DeleteAuthPolicyCommand,
  DeleteAuthPolicyCommandInput,
  DeleteAuthPolicyCommandOutput,
} from "./commands/DeleteAuthPolicyCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput,
} from "./commands/DeleteListenerCommand";
import {
  DeleteResourcePolicyCommand,
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import {
  DeleteServiceCommand,
  DeleteServiceCommandInput,
  DeleteServiceCommandOutput,
} from "./commands/DeleteServiceCommand";
import {
  DeleteServiceNetworkCommand,
  DeleteServiceNetworkCommandInput,
  DeleteServiceNetworkCommandOutput,
} from "./commands/DeleteServiceNetworkCommand";
import {
  DeleteServiceNetworkServiceAssociationCommand,
  DeleteServiceNetworkServiceAssociationCommandInput,
  DeleteServiceNetworkServiceAssociationCommandOutput,
} from "./commands/DeleteServiceNetworkServiceAssociationCommand";
import {
  DeleteServiceNetworkVpcAssociationCommand,
  DeleteServiceNetworkVpcAssociationCommandInput,
  DeleteServiceNetworkVpcAssociationCommandOutput,
} from "./commands/DeleteServiceNetworkVpcAssociationCommand";
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
  GetAccessLogSubscriptionCommand,
  GetAccessLogSubscriptionCommandInput,
  GetAccessLogSubscriptionCommandOutput,
} from "./commands/GetAccessLogSubscriptionCommand";
import {
  GetAuthPolicyCommand,
  GetAuthPolicyCommandInput,
  GetAuthPolicyCommandOutput,
} from "./commands/GetAuthPolicyCommand";
import { GetListenerCommand, GetListenerCommandInput, GetListenerCommandOutput } from "./commands/GetListenerCommand";
import {
  GetResourcePolicyCommand,
  GetResourcePolicyCommandInput,
  GetResourcePolicyCommandOutput,
} from "./commands/GetResourcePolicyCommand";
import { GetRuleCommand, GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { GetServiceCommand, GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import {
  GetServiceNetworkCommand,
  GetServiceNetworkCommandInput,
  GetServiceNetworkCommandOutput,
} from "./commands/GetServiceNetworkCommand";
import {
  GetServiceNetworkServiceAssociationCommand,
  GetServiceNetworkServiceAssociationCommandInput,
  GetServiceNetworkServiceAssociationCommandOutput,
} from "./commands/GetServiceNetworkServiceAssociationCommand";
import {
  GetServiceNetworkVpcAssociationCommand,
  GetServiceNetworkVpcAssociationCommandInput,
  GetServiceNetworkVpcAssociationCommandOutput,
} from "./commands/GetServiceNetworkVpcAssociationCommand";
import {
  GetTargetGroupCommand,
  GetTargetGroupCommandInput,
  GetTargetGroupCommandOutput,
} from "./commands/GetTargetGroupCommand";
import {
  ListAccessLogSubscriptionsCommand,
  ListAccessLogSubscriptionsCommandInput,
  ListAccessLogSubscriptionsCommandOutput,
} from "./commands/ListAccessLogSubscriptionsCommand";
import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "./commands/ListListenersCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListServiceNetworksCommand,
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput,
} from "./commands/ListServiceNetworksCommand";
import {
  ListServiceNetworkServiceAssociationsCommand,
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput,
} from "./commands/ListServiceNetworkServiceAssociationsCommand";
import {
  ListServiceNetworkVpcAssociationsCommand,
  ListServiceNetworkVpcAssociationsCommandInput,
  ListServiceNetworkVpcAssociationsCommandOutput,
} from "./commands/ListServiceNetworkVpcAssociationsCommand";
import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTargetGroupsCommand,
  ListTargetGroupsCommandInput,
  ListTargetGroupsCommandOutput,
} from "./commands/ListTargetGroupsCommand";
import { ListTargetsCommand, ListTargetsCommandInput, ListTargetsCommandOutput } from "./commands/ListTargetsCommand";
import {
  PutAuthPolicyCommand,
  PutAuthPolicyCommandInput,
  PutAuthPolicyCommandOutput,
} from "./commands/PutAuthPolicyCommand";
import {
  PutResourcePolicyCommand,
  PutResourcePolicyCommandInput,
  PutResourcePolicyCommandOutput,
} from "./commands/PutResourcePolicyCommand";
import {
  RegisterTargetsCommand,
  RegisterTargetsCommandInput,
  RegisterTargetsCommandOutput,
} from "./commands/RegisterTargetsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAccessLogSubscriptionCommand,
  UpdateAccessLogSubscriptionCommandInput,
  UpdateAccessLogSubscriptionCommandOutput,
} from "./commands/UpdateAccessLogSubscriptionCommand";
import {
  UpdateListenerCommand,
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput,
} from "./commands/UpdateListenerCommand";
import { UpdateRuleCommand, UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import {
  UpdateServiceCommand,
  UpdateServiceCommandInput,
  UpdateServiceCommandOutput,
} from "./commands/UpdateServiceCommand";
import {
  UpdateServiceNetworkCommand,
  UpdateServiceNetworkCommandInput,
  UpdateServiceNetworkCommandOutput,
} from "./commands/UpdateServiceNetworkCommand";
import {
  UpdateServiceNetworkVpcAssociationCommand,
  UpdateServiceNetworkVpcAssociationCommandInput,
  UpdateServiceNetworkVpcAssociationCommandOutput,
} from "./commands/UpdateServiceNetworkVpcAssociationCommand";
import {
  UpdateTargetGroupCommand,
  UpdateTargetGroupCommandInput,
  UpdateTargetGroupCommandOutput,
} from "./commands/UpdateTargetGroupCommand";
import { VPCLatticeClient } from "./VPCLatticeClient";

/**
 * @public
 * <p>Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure,
 *    and monitor all of your services across multiple accounts and virtual private clouds (VPCs).
 *    Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that
 *    you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a>
 *          </p>
 */
export class VPCLattice extends VPCLatticeClient {
  /**
   * @public
   * <p>Updates the listener rules in a batch. You can use this operation to change the priority of
   *    listener rules. This can be useful when bulk updating or swapping rule priority. </p>
   */
  public batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<BatchUpdateRuleCommandOutput>;
  public batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    cb: (err: any, data?: BatchUpdateRuleCommandOutput) => void
  ): void;
  public batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: BatchUpdateRuleCommandOutput) => void
  ): void;
  public batchUpdateRule(
    args: BatchUpdateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: BatchUpdateRuleCommandOutput) => void),
    cb?: (err: any, data?: BatchUpdateRuleCommandOutput) => void
  ): Promise<BatchUpdateRuleCommandOutput> | void {
    const command = new BatchUpdateRuleCommand(args);
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
   * @public
   * <p>Enables access logs to be sent to Amazon CloudWatch, Amazon S3, and Amazon Kinesis Data Firehose. The service network owner
   *    can use the access logs to audit the services in the network. The service network owner will only
   *    see access logs from clients and services that are associated with their service network. Access
   *    log entries represent traffic originated from VPCs associated with that network. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/monitoring-access-logs.html">Access logs</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAccessLogSubscriptionCommandOutput>;
  public createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void
  ): void;
  public createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void
  ): void;
  public createAccessLogSubscription(
    args: CreateAccessLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: CreateAccessLogSubscriptionCommandOutput) => void
  ): Promise<CreateAccessLogSubscriptionCommandOutput> | void {
    const command = new CreateAccessLogSubscriptionCommand(args);
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
   * @public
   * <p>Creates a listener for a service. Before you start using your Amazon VPC Lattice service, you must
   *    add one or more listeners. A listener is a process that checks for connection requests to your
   *    services. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html">Listeners</a> in the
   *    <i>Amazon VPC Lattice User Guide</i>.</p>
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
   * @public
   * <p>Creates a listener rule. Each listener has a default rule for checking connection requests,
   *    but you can define additional rules. Each rule consists of a priority, one or more actions, and
   *    one or more conditions. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
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
   * @public
   * <p>Creates a service. A service is any software application that can run on instances
   *    containers, or serverless functions within an account or virtual private cloud (VPC).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html">Services</a> in the
   *    <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public createService(
    args: CreateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceCommandOutput>;
  public createService(
    args: CreateServiceCommandInput,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceCommandOutput) => void
  ): void;
  public createService(
    args: CreateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceCommandOutput) => void
  ): Promise<CreateServiceCommandOutput> | void {
    const command = new CreateServiceCommand(args);
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
   * @public
   * <p>Creates a service network. A service network is a logical boundary for a collection of
   *    services. You can associate services and VPCs with a service network.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html">Service networks</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkCommandOutput>;
  public createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    cb: (err: any, data?: CreateServiceNetworkCommandOutput) => void
  ): void;
  public createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkCommandOutput) => void
  ): void;
  public createServiceNetwork(
    args: CreateServiceNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceNetworkCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceNetworkCommandOutput) => void
  ): Promise<CreateServiceNetworkCommandOutput> | void {
    const command = new CreateServiceNetworkCommand(args);
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
   * @public
   * <p>Associates a service with a service network.</p>
   *          <p>You can't use this operation if the service and service network are already associated or if
   *    there is a disassociation or deletion in progress. If the association fails, you can retry the
   *    operation by deleting the association and recreating it.</p>
   *          <p>You cannot associate a service and service network that are shared with a caller. The caller
   *    must own either the service or the service network.</p>
   *          <p>As a result of this operation, the association is created in the service network account and
   *    the association owner account.</p>
   */
  public createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkServiceAssociationCommandOutput>;
  public createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public createServiceNetworkServiceAssociation(
    args: CreateServiceNetworkServiceAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceNetworkServiceAssociationCommandOutput) => void
  ): Promise<CreateServiceNetworkServiceAssociationCommandOutput> | void {
    const command = new CreateServiceNetworkServiceAssociationCommand(args);
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
   * @public
   * <p>Associates a VPC with a service network. When you associate a VPC with the service network,
   *    it enables all the resources within that VPC to be clients and communicate with other services in
   *    the service network. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-network-associations.html#service-network-vpc-associations">Manage VPC associations</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   *          <p>You can't use this operation if there is a disassociation in progress. If the association
   *    fails, retry by deleting the association and recreating it.</p>
   *          <p>As a result of this operation, the association gets created in the service network account
   *    and the VPC owner account.</p>
   *          <p>Once a security group is added to the VPC association it cannot be removed. You can add or
   *    update the security groups being used for the VPC association once a security group is attached.
   *    To remove all security groups you must reassociate the VPC.</p>
   */
  public createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateServiceNetworkVpcAssociationCommandOutput>;
  public createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public createServiceNetworkVpcAssociation(
    args: CreateServiceNetworkVpcAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: CreateServiceNetworkVpcAssociationCommandOutput) => void
  ): Promise<CreateServiceNetworkVpcAssociationCommandOutput> | void {
    const command = new CreateServiceNetworkVpcAssociationCommand(args);
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
   * @public
   * <p>Creates a target group. A target group is a collection of targets, or compute resources,
   *    that run your application or service. A target group can only be used by a single service.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/target-groups.html">Target groups</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
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
   * @public
   * <p>Deletes the specified access log subscription.</p>
   */
  public deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAccessLogSubscriptionCommandOutput>;
  public deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void
  ): void;
  public deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void
  ): void;
  public deleteAccessLogSubscription(
    args: DeleteAccessLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: DeleteAccessLogSubscriptionCommandOutput) => void
  ): Promise<DeleteAccessLogSubscriptionCommandOutput> | void {
    const command = new DeleteAccessLogSubscriptionCommand(args);
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
   * @public
   * <p>Deletes the specified auth policy. If an auth is set to <code>Amazon Web Services_IAM</code>
   *    and the auth policy is deleted, all requests will be denied by default. If you are trying to
   *    remove the auth policy completely, you must set the auth_type to <code>NONE</code>. If auth is
   *    enabled on the resource, but no auth policy is set, all requests will be denied.</p>
   */
  public deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAuthPolicyCommandOutput>;
  public deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    cb: (err: any, data?: DeleteAuthPolicyCommandOutput) => void
  ): void;
  public deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAuthPolicyCommandOutput) => void
  ): void;
  public deleteAuthPolicy(
    args: DeleteAuthPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAuthPolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteAuthPolicyCommandOutput) => void
  ): Promise<DeleteAuthPolicyCommandOutput> | void {
    const command = new DeleteAuthPolicyCommand(args);
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
   * @public
   * <p>Deletes the specified listener.</p>
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
   * @public
   * <p>Deletes the specified resource policy.</p>
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
   * @public
   * <p>Deletes a listener rule. Each listener has a default rule for checking connection requests,
   *    but you can define additional rules. Each rule consists of a priority, one or more actions, and
   *    one or more conditions. You can delete additional listener rules, but you cannot delete the
   *    default rule.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
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
   * @public
   * <p>Deletes a service. A service can't be deleted if it's associated with a service network. If
   *    you delete a service, all resources related to the service, such as the resource policy, auth
   *    policy, listeners, listener rules, and access log subscriptions, are also deleted. For more
   *    information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/services.html#delete-service">Delete a service</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public deleteService(
    args: DeleteServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceCommandOutput>;
  public deleteService(
    args: DeleteServiceCommandInput,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceCommandOutput) => void
  ): void;
  public deleteService(
    args: DeleteServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceCommandOutput) => void
  ): Promise<DeleteServiceCommandOutput> | void {
    const command = new DeleteServiceCommand(args);
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
   * @public
   * <p>Deletes a service network. You can only delete the service network if there is no service or
   *    VPC associated with it. If you delete a service network, all resources related to the service
   *    network, such as the resource policy, auth policy, and access log subscriptions, are also
   *    deleted. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/service-networks.html#delete-service-network">Delete a service
   *     network</a> in the <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkCommandOutput>;
  public deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkCommandOutput) => void
  ): void;
  public deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkCommandOutput) => void
  ): void;
  public deleteServiceNetwork(
    args: DeleteServiceNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceNetworkCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceNetworkCommandOutput) => void
  ): Promise<DeleteServiceNetworkCommandOutput> | void {
    const command = new DeleteServiceNetworkCommand(args);
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
   * @public
   * <p>Deletes the association between a specified service and the specific service network. This
   *    request will fail if an association is still in progress.</p>
   */
  public deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkServiceAssociationCommandOutput>;
  public deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public deleteServiceNetworkServiceAssociation(
    args: DeleteServiceNetworkServiceAssociationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceNetworkServiceAssociationCommandOutput) => void
  ): Promise<DeleteServiceNetworkServiceAssociationCommandOutput> | void {
    const command = new DeleteServiceNetworkServiceAssociationCommand(args);
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
   * @public
   * <p>Disassociates the VPC from the service network. You can't disassociate the VPC if there is a
   *    create or update association in progress.</p>
   */
  public deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteServiceNetworkVpcAssociationCommandOutput>;
  public deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public deleteServiceNetworkVpcAssociation(
    args: DeleteServiceNetworkVpcAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: DeleteServiceNetworkVpcAssociationCommandOutput) => void
  ): Promise<DeleteServiceNetworkVpcAssociationCommandOutput> | void {
    const command = new DeleteServiceNetworkVpcAssociationCommand(args);
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
   * @public
   * <p>Deletes a target group. You can't delete a target group if it is used in a listener rule or
   *    if the target group creation is in progress.</p>
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
   * @public
   * <p>Deregisters the specified targets from the specified target group.</p>
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
   * @public
   * <p>Retrieves information about the specified access log subscription.</p>
   */
  public getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAccessLogSubscriptionCommandOutput>;
  public getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: GetAccessLogSubscriptionCommandOutput) => void
  ): void;
  public getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAccessLogSubscriptionCommandOutput) => void
  ): void;
  public getAccessLogSubscription(
    args: GetAccessLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAccessLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: GetAccessLogSubscriptionCommandOutput) => void
  ): Promise<GetAccessLogSubscriptionCommandOutput> | void {
    const command = new GetAccessLogSubscriptionCommand(args);
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
   * @public
   * <p>Retrieves information about the auth policy for the specified service or service
   *    network.</p>
   */
  public getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAuthPolicyCommandOutput>;
  public getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    cb: (err: any, data?: GetAuthPolicyCommandOutput) => void
  ): void;
  public getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAuthPolicyCommandOutput) => void
  ): void;
  public getAuthPolicy(
    args: GetAuthPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAuthPolicyCommandOutput) => void),
    cb?: (err: any, data?: GetAuthPolicyCommandOutput) => void
  ): Promise<GetAuthPolicyCommandOutput> | void {
    const command = new GetAuthPolicyCommand(args);
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
   * @public
   * <p>Retrieves information about the specified listener for the specified service.</p>
   */
  public getListener(args: GetListenerCommandInput, options?: __HttpHandlerOptions): Promise<GetListenerCommandOutput>;
  public getListener(args: GetListenerCommandInput, cb: (err: any, data?: GetListenerCommandOutput) => void): void;
  public getListener(
    args: GetListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetListenerCommandOutput) => void
  ): void;
  public getListener(
    args: GetListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetListenerCommandOutput) => void),
    cb?: (err: any, data?: GetListenerCommandOutput) => void
  ): Promise<GetListenerCommandOutput> | void {
    const command = new GetListenerCommand(args);
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
   * @public
   * <p>Retrieves information about the resource policy. The resource policy is an IAM policy
   *    created by AWS RAM on behalf of the resource owner when they share a resource.</p>
   */
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetResourcePolicyCommandOutput>;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): void;
  public getResourcePolicy(
    args: GetResourcePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetResourcePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetResourcePolicyCommandOutput) => void
  ): Promise<GetResourcePolicyCommandOutput> | void {
    const command = new GetResourcePolicyCommand(args);
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
   * @public
   * <p>Retrieves information about listener rules. You can also retrieve information about the
   *    default listener rule. For more information, see <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/listeners.html#listener-rules">Listener rules</a> in the
   *     <i>Amazon VPC Lattice User Guide</i>.</p>
   */
  public getRule(args: GetRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleCommandOutput>;
  public getRule(args: GetRuleCommandInput, cb: (err: any, data?: GetRuleCommandOutput) => void): void;
  public getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  public getRule(
    args: GetRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRuleCommandOutput) => void),
    cb?: (err: any, data?: GetRuleCommandOutput) => void
  ): Promise<GetRuleCommandOutput> | void {
    const command = new GetRuleCommand(args);
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
   * @public
   * <p>Retrieves information about the specified service.</p>
   */
  public getService(args: GetServiceCommandInput, options?: __HttpHandlerOptions): Promise<GetServiceCommandOutput>;
  public getService(args: GetServiceCommandInput, cb: (err: any, data?: GetServiceCommandOutput) => void): void;
  public getService(
    args: GetServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceCommandOutput) => void
  ): void;
  public getService(
    args: GetServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceCommandOutput) => void),
    cb?: (err: any, data?: GetServiceCommandOutput) => void
  ): Promise<GetServiceCommandOutput> | void {
    const command = new GetServiceCommand(args);
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
   * @public
   * <p>Retrieves information about the specified service network.</p>
   */
  public getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkCommandOutput>;
  public getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    cb: (err: any, data?: GetServiceNetworkCommandOutput) => void
  ): void;
  public getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkCommandOutput) => void
  ): void;
  public getServiceNetwork(
    args: GetServiceNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceNetworkCommandOutput) => void),
    cb?: (err: any, data?: GetServiceNetworkCommandOutput) => void
  ): Promise<GetServiceNetworkCommandOutput> | void {
    const command = new GetServiceNetworkCommand(args);
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
   * @public
   * <p>Retrieves information about the specified association between a service network and a
   *    service.</p>
   */
  public getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkServiceAssociationCommandOutput>;
  public getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    cb: (err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void
  ): void;
  public getServiceNetworkServiceAssociation(
    args: GetServiceNetworkServiceAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetServiceNetworkServiceAssociationCommandOutput) => void
  ): Promise<GetServiceNetworkServiceAssociationCommandOutput> | void {
    const command = new GetServiceNetworkServiceAssociationCommand(args);
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
   * @public
   * <p>Retrieves information about the association between a service network and a VPC.</p>
   */
  public getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetServiceNetworkVpcAssociationCommandOutput>;
  public getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public getServiceNetworkVpcAssociation(
    args: GetServiceNetworkVpcAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: GetServiceNetworkVpcAssociationCommandOutput) => void
  ): Promise<GetServiceNetworkVpcAssociationCommandOutput> | void {
    const command = new GetServiceNetworkVpcAssociationCommand(args);
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
   * @public
   * <p>Retrieves information about the specified target group.</p>
   */
  public getTargetGroup(
    args: GetTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTargetGroupCommandOutput>;
  public getTargetGroup(
    args: GetTargetGroupCommandInput,
    cb: (err: any, data?: GetTargetGroupCommandOutput) => void
  ): void;
  public getTargetGroup(
    args: GetTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTargetGroupCommandOutput) => void
  ): void;
  public getTargetGroup(
    args: GetTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: GetTargetGroupCommandOutput) => void
  ): Promise<GetTargetGroupCommandOutput> | void {
    const command = new GetTargetGroupCommand(args);
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
   * @public
   * <p>Lists all access log subscriptions for the specified service network or service.</p>
   */
  public listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAccessLogSubscriptionsCommandOutput>;
  public listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    cb: (err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void
  ): void;
  public listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void
  ): void;
  public listAccessLogSubscriptions(
    args: ListAccessLogSubscriptionsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void),
    cb?: (err: any, data?: ListAccessLogSubscriptionsCommandOutput) => void
  ): Promise<ListAccessLogSubscriptionsCommandOutput> | void {
    const command = new ListAccessLogSubscriptionsCommand(args);
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
   * @public
   * <p>Lists the listeners for the specified service.</p>
   */
  public listListeners(
    args: ListListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListListenersCommandOutput>;
  public listListeners(
    args: ListListenersCommandInput,
    cb: (err: any, data?: ListListenersCommandOutput) => void
  ): void;
  public listListeners(
    args: ListListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListListenersCommandOutput) => void
  ): void;
  public listListeners(
    args: ListListenersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListListenersCommandOutput) => void),
    cb?: (err: any, data?: ListListenersCommandOutput) => void
  ): Promise<ListListenersCommandOutput> | void {
    const command = new ListListenersCommand(args);
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
   * @public
   * <p>Lists the rules for the listener.</p>
   */
  public listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  public listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
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
   * @public
   * <p>Lists the service networks owned by the caller account or shared with the caller account.
   *    Also includes the account ID in the ARN to show which account owns the service network.</p>
   */
  public listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworksCommandOutput>;
  public listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    cb: (err: any, data?: ListServiceNetworksCommandOutput) => void
  ): void;
  public listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworksCommandOutput) => void
  ): void;
  public listServiceNetworks(
    args: ListServiceNetworksCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceNetworksCommandOutput) => void),
    cb?: (err: any, data?: ListServiceNetworksCommandOutput) => void
  ): Promise<ListServiceNetworksCommandOutput> | void {
    const command = new ListServiceNetworksCommand(args);
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
   * @public
   * <p>Lists the associations between the service network and the service. You can filter the list
   *    either by service or service network. You must provide either the service network identifier or
   *    the service identifier.</p>
   *          <p>Every association in Amazon VPC Lattice is given a unique Amazon Resource Name (ARN), such as when a
   *    service network is associated with a VPC or when a service is associated with a service network.
   *    If the association is for a resource that is shared with another account, the association will
   *    include the local account ID as the prefix in the ARN for each account the resource is shared
   *    with.</p>
   */
  public listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkServiceAssociationsCommandOutput>;
  public listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void
  ): void;
  public listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void
  ): void;
  public listServiceNetworkServiceAssociations(
    args: ListServiceNetworkServiceAssociationsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceNetworkServiceAssociationsCommandOutput) => void
  ): Promise<ListServiceNetworkServiceAssociationsCommandOutput> | void {
    const command = new ListServiceNetworkServiceAssociationsCommand(args);
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
   * @public
   * <p>Lists the service network and VPC associations. You can filter the list either by VPC or
   *    service network. You must provide either the service network identifier or the VPC
   *    identifier.</p>
   */
  public listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServiceNetworkVpcAssociationsCommandOutput>;
  public listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    cb: (err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void
  ): void;
  public listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void
  ): void;
  public listServiceNetworkVpcAssociations(
    args: ListServiceNetworkVpcAssociationsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void),
    cb?: (err: any, data?: ListServiceNetworkVpcAssociationsCommandOutput) => void
  ): Promise<ListServiceNetworkVpcAssociationsCommandOutput> | void {
    const command = new ListServiceNetworkVpcAssociationsCommand(args);
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
   * @public
   * <p>Lists the services owned by the caller account or shared with the caller account.</p>
   */
  public listServices(
    args: ListServicesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListServicesCommandOutput>;
  public listServices(args: ListServicesCommandInput, cb: (err: any, data?: ListServicesCommandOutput) => void): void;
  public listServices(
    args: ListServicesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListServicesCommandOutput) => void
  ): void;
  public listServices(
    args: ListServicesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListServicesCommandOutput) => void),
    cb?: (err: any, data?: ListServicesCommandOutput) => void
  ): Promise<ListServicesCommandOutput> | void {
    const command = new ListServicesCommand(args);
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
   * @public
   * <p>Lists the tags for the specified resource.</p>
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
   * @public
   * <p>Lists your target groups. You can narrow your search by using the filters below in your
   *    request.</p>
   */
  public listTargetGroups(
    args: ListTargetGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTargetGroupsCommandOutput>;
  public listTargetGroups(
    args: ListTargetGroupsCommandInput,
    cb: (err: any, data?: ListTargetGroupsCommandOutput) => void
  ): void;
  public listTargetGroups(
    args: ListTargetGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetGroupsCommandOutput) => void
  ): void;
  public listTargetGroups(
    args: ListTargetGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListTargetGroupsCommandOutput) => void
  ): Promise<ListTargetGroupsCommandOutput> | void {
    const command = new ListTargetGroupsCommand(args);
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
   * @public
   * <p>Lists the targets for the target group. By default, all targets are included. You can use
   *    this API to check the health status of targets. You can also ﬁlter the results by target. </p>
   */
  public listTargets(args: ListTargetsCommandInput, options?: __HttpHandlerOptions): Promise<ListTargetsCommandOutput>;
  public listTargets(args: ListTargetsCommandInput, cb: (err: any, data?: ListTargetsCommandOutput) => void): void;
  public listTargets(
    args: ListTargetsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTargetsCommandOutput) => void
  ): void;
  public listTargets(
    args: ListTargetsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTargetsCommandOutput) => void),
    cb?: (err: any, data?: ListTargetsCommandOutput) => void
  ): Promise<ListTargetsCommandOutput> | void {
    const command = new ListTargetsCommand(args);
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
   * @public
   * <p>Creates or updates the auth policy.</p>
   */
  public putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutAuthPolicyCommandOutput>;
  public putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    cb: (err: any, data?: PutAuthPolicyCommandOutput) => void
  ): void;
  public putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutAuthPolicyCommandOutput) => void
  ): void;
  public putAuthPolicy(
    args: PutAuthPolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutAuthPolicyCommandOutput) => void),
    cb?: (err: any, data?: PutAuthPolicyCommandOutput) => void
  ): Promise<PutAuthPolicyCommandOutput> | void {
    const command = new PutAuthPolicyCommand(args);
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
   * @public
   * <p>Attaches a resource-based permission policy to a service or service network. The policy must
   *    contain the same actions and condition statements as the Amazon Web Services Resource Access
   *    Manager permission for sharing services and service networks.</p>
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
   * @public
   * <p>Registers the targets with the target group. If it's a Lambda target, you can only have one
   *    target in a target group.</p>
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
   * @public
   * <p>Adds the specified tags to the specified resource.</p>
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
   * @public
   * <p>Removes the specified tags from the specified resource.</p>
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
   * @public
   * <p>Updates the specified access log subscription.</p>
   */
  public updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAccessLogSubscriptionCommandOutput>;
  public updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    cb: (err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void
  ): void;
  public updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void
  ): void;
  public updateAccessLogSubscription(
    args: UpdateAccessLogSubscriptionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void),
    cb?: (err: any, data?: UpdateAccessLogSubscriptionCommandOutput) => void
  ): Promise<UpdateAccessLogSubscriptionCommandOutput> | void {
    const command = new UpdateAccessLogSubscriptionCommand(args);
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
   * @public
   * <p>Updates the specified listener for the specified service.</p>
   */
  public updateListener(
    args: UpdateListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateListenerCommandOutput>;
  public updateListener(
    args: UpdateListenerCommandInput,
    cb: (err: any, data?: UpdateListenerCommandOutput) => void
  ): void;
  public updateListener(
    args: UpdateListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateListenerCommandOutput) => void
  ): void;
  public updateListener(
    args: UpdateListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateListenerCommandOutput) => void),
    cb?: (err: any, data?: UpdateListenerCommandOutput) => void
  ): Promise<UpdateListenerCommandOutput> | void {
    const command = new UpdateListenerCommand(args);
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
   * @public
   * <p>Updates a rule for the listener. You can't modify a default listener rule. To modify a
   *    default listener rule, use <code>UpdateListener</code>.</p>
   */
  public updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  public updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleCommandOutput) => void
  ): Promise<UpdateRuleCommandOutput> | void {
    const command = new UpdateRuleCommand(args);
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
   * @public
   * <p>Updates the specified service.</p>
   */
  public updateService(
    args: UpdateServiceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceCommandOutput>;
  public updateService(
    args: UpdateServiceCommandInput,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceCommandOutput) => void
  ): void;
  public updateService(
    args: UpdateServiceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceCommandOutput) => void
  ): Promise<UpdateServiceCommandOutput> | void {
    const command = new UpdateServiceCommand(args);
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
   * @public
   * <p>Updates the specified service network.</p>
   */
  public updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceNetworkCommandOutput>;
  public updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    cb: (err: any, data?: UpdateServiceNetworkCommandOutput) => void
  ): void;
  public updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceNetworkCommandOutput) => void
  ): void;
  public updateServiceNetwork(
    args: UpdateServiceNetworkCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceNetworkCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceNetworkCommandOutput) => void
  ): Promise<UpdateServiceNetworkCommandOutput> | void {
    const command = new UpdateServiceNetworkCommand(args);
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
   * @public
   * <p>Updates the service network and VPC association. Once you add a security group, it cannot be
   *    removed.</p>
   */
  public updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateServiceNetworkVpcAssociationCommandOutput>;
  public updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    cb: (err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void
  ): void;
  public updateServiceNetworkVpcAssociation(
    args: UpdateServiceNetworkVpcAssociationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void),
    cb?: (err: any, data?: UpdateServiceNetworkVpcAssociationCommandOutput) => void
  ): Promise<UpdateServiceNetworkVpcAssociationCommandOutput> | void {
    const command = new UpdateServiceNetworkVpcAssociationCommand(args);
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
   * @public
   * <p>Updates the specified target group.</p>
   */
  public updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateTargetGroupCommandOutput>;
  public updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    cb: (err: any, data?: UpdateTargetGroupCommandOutput) => void
  ): void;
  public updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateTargetGroupCommandOutput) => void
  ): void;
  public updateTargetGroup(
    args: UpdateTargetGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateTargetGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateTargetGroupCommandOutput) => void
  ): Promise<UpdateTargetGroupCommandOutput> | void {
    const command = new UpdateTargetGroupCommand(args);
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
