// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  AddCustomRoutingEndpointsCommand,
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "./commands/AddCustomRoutingEndpointsCommand";
import {
  AddEndpointsCommand,
  AddEndpointsCommandInput,
  AddEndpointsCommandOutput,
} from "./commands/AddEndpointsCommand";
import {
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
} from "./commands/AdvertiseByoipCidrCommand";
import {
  AllowCustomRoutingTrafficCommand,
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
} from "./commands/AllowCustomRoutingTrafficCommand";
import {
  CreateAcceleratorCommand,
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput,
} from "./commands/CreateAcceleratorCommand";
import {
  CreateCustomRoutingAcceleratorCommand,
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
} from "./commands/CreateCustomRoutingAcceleratorCommand";
import {
  CreateCustomRoutingEndpointGroupCommand,
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
} from "./commands/CreateCustomRoutingEndpointGroupCommand";
import {
  CreateCustomRoutingListenerCommand,
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
} from "./commands/CreateCustomRoutingListenerCommand";
import {
  CreateEndpointGroupCommand,
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
} from "./commands/CreateEndpointGroupCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput,
} from "./commands/CreateListenerCommand";
import {
  DeleteAcceleratorCommand,
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput,
} from "./commands/DeleteAcceleratorCommand";
import {
  DeleteCustomRoutingAcceleratorCommand,
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
} from "./commands/DeleteCustomRoutingAcceleratorCommand";
import {
  DeleteCustomRoutingEndpointGroupCommand,
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import {
  DeleteCustomRoutingListenerCommand,
  DeleteCustomRoutingListenerCommandInput,
  DeleteCustomRoutingListenerCommandOutput,
} from "./commands/DeleteCustomRoutingListenerCommand";
import {
  DeleteEndpointGroupCommand,
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
} from "./commands/DeleteEndpointGroupCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput,
} from "./commands/DeleteListenerCommand";
import {
  DenyCustomRoutingTrafficCommand,
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
} from "./commands/DenyCustomRoutingTrafficCommand";
import {
  DeprovisionByoipCidrCommand,
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DescribeAcceleratorAttributesCommand,
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommand,
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput,
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeCustomRoutingAcceleratorAttributesCommand,
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import {
  DescribeCustomRoutingAcceleratorCommand,
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorCommand";
import {
  DescribeCustomRoutingEndpointGroupCommand,
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import {
  DescribeCustomRoutingListenerCommand,
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
} from "./commands/DescribeCustomRoutingListenerCommand";
import {
  DescribeEndpointGroupCommand,
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
} from "./commands/DescribeEndpointGroupCommand";
import {
  DescribeListenerCommand,
  DescribeListenerCommandInput,
  DescribeListenerCommandOutput,
} from "./commands/DescribeListenerCommand";
import {
  ListAcceleratorsCommand,
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput,
} from "./commands/ListAcceleratorsCommand";
import {
  ListByoipCidrsCommand,
  ListByoipCidrsCommandInput,
  ListByoipCidrsCommandOutput,
} from "./commands/ListByoipCidrsCommand";
import {
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "./commands/ListCustomRoutingAcceleratorsCommand";
import {
  ListCustomRoutingEndpointGroupsCommand,
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "./commands/ListCustomRoutingEndpointGroupsCommand";
import {
  ListCustomRoutingListenersCommand,
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "./commands/ListCustomRoutingListenersCommand";
import {
  ListCustomRoutingPortMappingsByDestinationCommand,
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import {
  ListCustomRoutingPortMappingsCommand,
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsCommand";
import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput,
} from "./commands/ListEndpointGroupsCommand";
import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "./commands/ListListenersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ProvisionByoipCidrCommand,
  ProvisionByoipCidrCommandInput,
  ProvisionByoipCidrCommandOutput,
} from "./commands/ProvisionByoipCidrCommand";
import {
  RemoveCustomRoutingEndpointsCommand,
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
} from "./commands/RemoveCustomRoutingEndpointsCommand";
import {
  RemoveEndpointsCommand,
  RemoveEndpointsCommandInput,
  RemoveEndpointsCommandOutput,
} from "./commands/RemoveEndpointsCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAcceleratorAttributesCommand,
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
} from "./commands/UpdateAcceleratorAttributesCommand";
import {
  UpdateAcceleratorCommand,
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput,
} from "./commands/UpdateAcceleratorCommand";
import {
  UpdateCustomRoutingAcceleratorAttributesCommand,
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import {
  UpdateCustomRoutingAcceleratorCommand,
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorCommand";
import {
  UpdateCustomRoutingListenerCommand,
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
} from "./commands/UpdateCustomRoutingListenerCommand";
import {
  UpdateEndpointGroupCommand,
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput,
} from "./commands/UpdateEndpointGroupCommand";
import {
  UpdateListenerCommand,
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput,
} from "./commands/UpdateListenerCommand";
import {
  WithdrawByoipCidrCommand,
  WithdrawByoipCidrCommandInput,
  WithdrawByoipCidrCommandOutput,
} from "./commands/WithdrawByoipCidrCommand";
import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";

/**
 * <fullname>Global Accelerator</fullname>
 * 	        <p>This is the <i>Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 		    Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 	    	<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 * 	        <p>Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
 * 			of your applications for local and global users. Depending on the type of accelerator you choose, you can
 * 			gain additional benefits. </p>
 * 		       <ul>
 *             <li>
 *                <p>By using a standard accelerator, you can improve availability of your internet applications
 * 			    that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the Amazon Web Services
 * 				global network. </p>
 *             </li>
 *             <li>
 *                <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
 * 				can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
 *             </li>
 *          </ul>
 * 		       <important>
 * 		          <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
 * 		    	US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
 * 		    	on AWS CLI commands.</p>
 * 		       </important>
 *
 *
 * 		       <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. The static IP addresses
 * 			are anycast from the Amazon Web Services edge network. For IPv4, Global Accelerator provides two static IPv4 addresses. For dual-stack,
 * 			Global Accelerator provides a total of four addresses: two static IPv4 addresses and two static IPv6 addresses.
 * 			With a standard accelerator for IPv4, instead of using the addresses that Global Accelerator provides, you can configure
 * 			these entry points to be IPv4 addresses from your own IP address ranges that you bring toGlobal Accelerator (BYOIP). </p>
 *
 *
 * 	        <p>For a standard accelerator,
 * 	        they distribute incoming application traffic across multiple endpoint resources in multiple Amazon Web Services Regions , which increases
 * 			the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
 * 	    	Amazon EC2 instances, or Elastic IP addresses that are located in one Amazon Web Services Region or multiple Amazon Web Services Regions. For custom routing
 * 	        accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
 * 			are virtual private cloud (VPC) subnets.</p>
 *
 * 		       <important>
 *             <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even if you
 * 				disable the accelerator and it no longer accepts or routes traffic. However, when you
 * 					<i>delete</i> an accelerator, you lose the static IP addresses that
 * 				are assigned to it, so you can no longer route traffic by using them. You can use
 * 				IAM policies like tag-based permissions with Global Accelerator to limit the users who have
 * 				permissions to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 *          </important>
 * 	        <p>For standard accelerators, Global Accelerator uses the Amazon Web Services global network to route traffic to the optimal regional endpoint based
 * 			on health, client location, and policies that you configure. The service reacts instantly to
 * 			changes in health or configuration to ensure that internet traffic from clients is always
 * 			directed to healthy endpoints.</p>
 * 		       <p>For more information about understanding and using Global Accelerator, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/what-is-global-accelerator.html">Global Accelerator Developer Guide</a>.</p>
 */
export class GlobalAccelerator extends GlobalAcceleratorClient {
  /**
   * <p>Associate a virtual private cloud (VPC) subnet endpoint with your custom routing accelerator.</p>
   * 	        <p>The listener port range must be large enough to support the number of IP addresses that can be
   * 		specified in your subnet. The number of ports required is: subnet size times the number
   * 		of ports per destination EC2 instances. For example, a subnet defined as /24 requires a listener
   * 		port range of at least 255 ports. </p>
   * 	        <p>Note: You must have enough remaining listener ports available to
   * 		map to the subnet ports, or the call will fail with a LimitExceededException.</p>
   * 	        <p>By default, all destinations in a subnet in a custom routing accelerator cannot receive traffic. To enable all
   * 			destinations to receive traffic, or to specify individual port mappings that can receive
   * 			traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
   * 				AllowCustomRoutingTraffic</a> operation.</p>
   */
  public addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddCustomRoutingEndpointsCommandOutput>;
  public addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void
  ): void;
  public addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void
  ): void;
  public addCustomRoutingEndpoints(
    args: AddCustomRoutingEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void),
    cb?: (err: any, data?: AddCustomRoutingEndpointsCommandOutput) => void
  ): Promise<AddCustomRoutingEndpointsCommandOutput> | void {
    const command = new AddCustomRoutingEndpointsCommand(args);
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
   * <p>Add endpoints to an endpoint group. The <code>AddEndpoints</code> API operation is the recommended option for adding endpoints. The
   * 			alternative options are to add endpoints when you create an endpoint group (with the
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_CreateEndpointGroup.html">CreateEndpointGroup</a> API)
   * 			or when you update an endpoint group (with the
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a> API). </p>
   * 		       <p>There are two advantages to using <code>AddEndpoints</code> to add endpoints:</p>
   * 			      <ul>
   *             <li>
   *                <p>It's faster, because Global Accelerator only has to resolve the new endpoints that
   * 					you're adding.</p>
   *             </li>
   *             <li>
   *                <p>It's more convenient, because you don't need to specify all of the current
   * 					endpoints that are already in the endpoint group in addition to the new endpoints that you want to add.</p>
   *             </li>
   *          </ul>
   */
  public addEndpoints(
    args: AddEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AddEndpointsCommandOutput>;
  public addEndpoints(args: AddEndpointsCommandInput, cb: (err: any, data?: AddEndpointsCommandOutput) => void): void;
  public addEndpoints(
    args: AddEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AddEndpointsCommandOutput) => void
  ): void;
  public addEndpoints(
    args: AddEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AddEndpointsCommandOutput) => void),
    cb?: (err: any, data?: AddEndpointsCommandOutput) => void
  ): Promise<AddEndpointsCommandOutput> | void {
    const command = new AddEndpointsCommand(args);
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
   * <p>Advertises an IPv4 address range that is provisioned for use with your Amazon Web Services resources
   * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
   * 			the specified addresses starts routing to Amazon Web Services because of propagation delays. </p>
   * 		       <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
   * 			WithdrawByoipCidr</a>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
   * 		    IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AdvertiseByoipCidrCommandOutput>;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): void;
  public advertiseByoipCidr(
    args: AdvertiseByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AdvertiseByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: AdvertiseByoipCidrCommandOutput) => void
  ): Promise<AdvertiseByoipCidrCommandOutput> | void {
    const command = new AdvertiseByoipCidrCommand(args);
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
   * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that can receive traffic
   * 			for a custom routing accelerator. You can allow traffic to all destinations in the subnet endpoint, or allow traffic to a
   * 			specified list of destination IP addresses and ports in the subnet. Note that you cannot specify IP addresses or ports
   * 			outside of the range that you configured for the endpoint group.</p>
   * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
   * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
   */
  public allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<AllowCustomRoutingTrafficCommandOutput>;
  public allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void
  ): void;
  public allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void
  ): void;
  public allowCustomRoutingTraffic(
    args: AllowCustomRoutingTrafficCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void),
    cb?: (err: any, data?: AllowCustomRoutingTrafficCommandOutput) => void
  ): Promise<AllowCustomRoutingTrafficCommandOutput> | void {
    const command = new AllowCustomRoutingTrafficCommand(args);
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
   * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
   * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. </p>
   * 		       <important>
   * 			         <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
   * 				US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
   * 				on AWS CLI commands.</p>
   * 		       </important>
   */
  public createAccelerator(
    args: CreateAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateAcceleratorCommandOutput>;
  public createAccelerator(
    args: CreateAcceleratorCommandInput,
    cb: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): void;
  public createAccelerator(
    args: CreateAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): void;
  public createAccelerator(
    args: CreateAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): Promise<CreateAcceleratorCommandOutput> | void {
    const command = new CreateAcceleratorCommand(args);
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
   * <p>Create a custom routing accelerator. A custom routing accelerator directs traffic to one of possibly thousands
   * 	    of Amazon EC2 instance destinations running in a single or multiple virtual private clouds (VPC) subnet endpoints.</p>
   * 	        <p>Be aware that, by default, all destination EC2 instances in a VPC subnet endpoint cannot receive
   * 			traffic. To enable all destinations to receive traffic, or to specify individual port
   * 			mappings that can receive traffic, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_AllowCustomRoutingTraffic.html">
   * 				AllowCustomRoutingTraffic</a> operation.</p>
   * 	        <important>
   * 		          <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
   * 			US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
   * 			on AWS CLI commands.</p>
   * 	        </important>
   */
  public createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingAcceleratorCommandOutput>;
  public createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public createCustomRoutingAccelerator(
    args: CreateCustomRoutingAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomRoutingAcceleratorCommandOutput) => void
  ): Promise<CreateCustomRoutingAcceleratorCommandOutput> | void {
    const command = new CreateCustomRoutingAcceleratorCommand(args);
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
   * <p>Create an endpoint group for the specified listener for a custom routing accelerator.
   * 	    An endpoint group is a collection of endpoints in one Amazon Web Services
   * 		Region. </p>
   */
  public createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput>;
  public createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public createCustomRoutingEndpointGroup(
    args: CreateCustomRoutingEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomRoutingEndpointGroupCommandOutput) => void
  ): Promise<CreateCustomRoutingEndpointGroupCommandOutput> | void {
    const command = new CreateCustomRoutingEndpointGroupCommand(args);
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
   * <p>Create a listener to process inbound connections from clients to a custom routing accelerator.
   * 			Connections arrive to assigned static IP addresses on the port range that you specify. </p>
   */
  public createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateCustomRoutingListenerCommandOutput>;
  public createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void
  ): void;
  public createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void
  ): void;
  public createCustomRoutingListener(
    args: CreateCustomRoutingListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateCustomRoutingListenerCommandOutput) => void),
    cb?: (err: any, data?: CreateCustomRoutingListenerCommandOutput) => void
  ): Promise<CreateCustomRoutingListenerCommandOutput> | void {
    const command = new CreateCustomRoutingListenerCommand(args);
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
   * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one Amazon Web Services
   * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
   */
  public createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEndpointGroupCommandOutput>;
  public createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): void;
  public createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): void;
  public createEndpointGroup(
    args: CreateEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): Promise<CreateEndpointGroupCommandOutput> | void {
    const command = new CreateEndpointGroupCommand(args);
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
   * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
   * 			IP addresses on a port, port range, or list of port ranges that you specify. </p>
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
   * <p>Delete an accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
   * 			(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
   * 	        <important>
   *             <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
   * 	        Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
   * 		</p>
   * 		          <p>The IP addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
   * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
   * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
   * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
   * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
   * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   *          </important>
   */
  public deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteAcceleratorCommandOutput>;
  public deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): void;
  public deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): void;
  public deleteAccelerator(
    args: DeleteAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): Promise<DeleteAcceleratorCommandOutput> | void {
    const command = new DeleteAcceleratorCommand(args);
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
   * <p>Delete a custom routing accelerator. Before you can delete an accelerator, you must disable it and remove all dependent resources
   * 		(listeners and endpoint groups). To disable the accelerator, update the accelerator to set <code>Enabled</code> to false.</p>
   *          <important>
   *             <p>When you create a custom routing accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
   * 	</p>
   * 		          <p>The IP
   * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
   * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
   * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
   * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
   * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
   * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Identity and access management</a> in
   * 		    the <i>Global Accelerator Developer Guide</i>.</p>
   *          </important>
   */
  public deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingAcceleratorCommandOutput>;
  public deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public deleteCustomRoutingAccelerator(
    args: DeleteCustomRoutingAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomRoutingAcceleratorCommandOutput) => void
  ): Promise<DeleteCustomRoutingAcceleratorCommandOutput> | void {
    const command = new DeleteCustomRoutingAcceleratorCommand(args);
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
   * <p>Delete an endpoint group from a listener for a custom routing accelerator.</p>
   */
  public deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingEndpointGroupCommandOutput>;
  public deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public deleteCustomRoutingEndpointGroup(
    args: DeleteCustomRoutingEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomRoutingEndpointGroupCommandOutput) => void
  ): Promise<DeleteCustomRoutingEndpointGroupCommandOutput> | void {
    const command = new DeleteCustomRoutingEndpointGroupCommand(args);
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
   * <p>Delete a listener for a custom routing accelerator.</p>
   */
  public deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCustomRoutingListenerCommandOutput>;
  public deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void
  ): void;
  public deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void
  ): void;
  public deleteCustomRoutingListener(
    args: DeleteCustomRoutingListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void),
    cb?: (err: any, data?: DeleteCustomRoutingListenerCommandOutput) => void
  ): Promise<DeleteCustomRoutingListenerCommandOutput> | void {
    const command = new DeleteCustomRoutingListenerCommand(args);
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
   * <p>Delete an endpoint group from a listener.</p>
   */
  public deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEndpointGroupCommandOutput>;
  public deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): void;
  public deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): void;
  public deleteEndpointGroup(
    args: DeleteEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): Promise<DeleteEndpointGroupCommandOutput> | void {
    const command = new DeleteEndpointGroupCommand(args);
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
   * <p>Delete a listener from an accelerator.</p>
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
   * <p>Specify the Amazon EC2 instance (destination) IP addresses and ports for a VPC subnet endpoint that cannot receive traffic
   * 			for a custom routing accelerator. You can deny traffic to all destinations in the VPC endpoint, or deny traffic to a
   * 			specified list of destination IP addresses and ports. Note that you cannot specify IP addresses
   * 			or ports outside of the range that you configured for the endpoint group.</p>
   * 		       <p>After you make changes, you can verify that the updates are complete by checking the status of your
   * 			accelerator: the status changes from IN_PROGRESS to DEPLOYED.</p>
   */
  public denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DenyCustomRoutingTrafficCommandOutput>;
  public denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void
  ): void;
  public denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void
  ): void;
  public denyCustomRoutingTraffic(
    args: DenyCustomRoutingTrafficCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void),
    cb?: (err: any, data?: DenyCustomRoutingTrafficCommandOutput) => void
  ): Promise<DenyCustomRoutingTrafficCommandOutput> | void {
    const command = new DenyCustomRoutingTrafficCommand(args);
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
   * <p>Releases the specified address range that you provisioned to use with your Amazon Web Services resources
   * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. </p>
   * 		       <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
   * 			any accelerators that are using static IP addresses allocated from its address range.
   * 		</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring
   * 			your own IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeprovisionByoipCidrCommandOutput>;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): void;
  public deprovisionByoipCidr(
    args: DeprovisionByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeprovisionByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: DeprovisionByoipCidrCommandOutput) => void
  ): Promise<DeprovisionByoipCidrCommandOutput> | void {
    const command = new DeprovisionByoipCidrCommand(args);
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
   * <p>Describe an accelerator. </p>
   */
  public describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorCommandOutput>;
  public describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): void;
  public describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): void;
  public describeAccelerator(
    args: DescribeAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): Promise<DescribeAcceleratorCommandOutput> | void {
    const command = new DescribeAcceleratorCommand(args);
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
   * <p>Describe the attributes of an accelerator.
   * 		</p>
   */
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeAcceleratorAttributesCommandOutput>;
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): void;
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): void;
  public describeAcceleratorAttributes(
    args: DescribeAcceleratorAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): Promise<DescribeAcceleratorAttributesCommandOutput> | void {
    const command = new DescribeAcceleratorAttributesCommand(args);
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
   * <p>Describe a custom routing accelerator. </p>
   */
  public describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingAcceleratorCommandOutput>;
  public describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public describeCustomRoutingAccelerator(
    args: DescribeCustomRoutingAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomRoutingAcceleratorCommandOutput) => void
  ): Promise<DescribeCustomRoutingAcceleratorCommandOutput> | void {
    const command = new DescribeCustomRoutingAcceleratorCommand(args);
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
   * <p>Describe the attributes of a custom routing accelerator. </p>
   */
  public describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput>;
  public describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  public describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  public describeCustomRoutingAcceleratorAttributes(
    args: DescribeCustomRoutingAcceleratorAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): Promise<DescribeCustomRoutingAcceleratorAttributesCommandOutput> | void {
    const command = new DescribeCustomRoutingAcceleratorAttributesCommand(args);
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
   * <p>Describe an endpoint group for a custom routing accelerator. </p>
   */
  public describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingEndpointGroupCommandOutput>;
  public describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void
  ): void;
  public describeCustomRoutingEndpointGroup(
    args: DescribeCustomRoutingEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomRoutingEndpointGroupCommandOutput) => void
  ): Promise<DescribeCustomRoutingEndpointGroupCommandOutput> | void {
    const command = new DescribeCustomRoutingEndpointGroupCommand(args);
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
   * <p>The description of a listener for a custom routing accelerator.</p>
   */
  public describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeCustomRoutingListenerCommandOutput>;
  public describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void
  ): void;
  public describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void
  ): void;
  public describeCustomRoutingListener(
    args: DescribeCustomRoutingListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void),
    cb?: (err: any, data?: DescribeCustomRoutingListenerCommandOutput) => void
  ): Promise<DescribeCustomRoutingListenerCommandOutput> | void {
    const command = new DescribeCustomRoutingListenerCommand(args);
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
   * <p>Describe an endpoint group. </p>
   */
  public describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEndpointGroupCommandOutput>;
  public describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): void;
  public describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): void;
  public describeEndpointGroup(
    args: DescribeEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): Promise<DescribeEndpointGroupCommandOutput> | void {
    const command = new DescribeEndpointGroupCommand(args);
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
   * <p>Describe a listener. </p>
   */
  public describeListener(
    args: DescribeListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeListenerCommandOutput>;
  public describeListener(
    args: DescribeListenerCommandInput,
    cb: (err: any, data?: DescribeListenerCommandOutput) => void
  ): void;
  public describeListener(
    args: DescribeListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeListenerCommandOutput) => void
  ): void;
  public describeListener(
    args: DescribeListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribeListenerCommandOutput) => void),
    cb?: (err: any, data?: DescribeListenerCommandOutput) => void
  ): Promise<DescribeListenerCommandOutput> | void {
    const command = new DescribeListenerCommand(args);
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
   * <p>List the accelerators for an Amazon Web Services account. </p>
   */
  public listAccelerators(
    args: ListAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListAcceleratorsCommandOutput>;
  public listAccelerators(
    args: ListAcceleratorsCommandInput,
    cb: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): void;
  public listAccelerators(
    args: ListAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): void;
  public listAccelerators(
    args: ListAcceleratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListAcceleratorsCommandOutput) => void),
    cb?: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): Promise<ListAcceleratorsCommandOutput> | void {
    const command = new ListAcceleratorsCommand(args);
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
   * <p>Lists the IP address ranges that were specified in calls to <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/ProvisionByoipCidr.html">ProvisionByoipCidr</a>, including
   * 			the current state and a history of state changes.</p>
   */
  public listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListByoipCidrsCommandOutput>;
  public listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    cb: (err: any, data?: ListByoipCidrsCommandOutput) => void
  ): void;
  public listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListByoipCidrsCommandOutput) => void
  ): void;
  public listByoipCidrs(
    args: ListByoipCidrsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListByoipCidrsCommandOutput) => void),
    cb?: (err: any, data?: ListByoipCidrsCommandOutput) => void
  ): Promise<ListByoipCidrsCommandOutput> | void {
    const command = new ListByoipCidrsCommand(args);
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
   * <p>List the custom routing accelerators for an Amazon Web Services account. </p>
   */
  public listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingAcceleratorsCommandOutput>;
  public listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void
  ): void;
  public listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void
  ): void;
  public listCustomRoutingAccelerators(
    args: ListCustomRoutingAcceleratorsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomRoutingAcceleratorsCommandOutput) => void
  ): Promise<ListCustomRoutingAcceleratorsCommandOutput> | void {
    const command = new ListCustomRoutingAcceleratorsCommand(args);
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
   * <p>List the endpoint groups that are associated with a listener for a custom routing accelerator. </p>
   */
  public listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingEndpointGroupsCommandOutput>;
  public listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void
  ): void;
  public listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void
  ): void;
  public listCustomRoutingEndpointGroups(
    args: ListCustomRoutingEndpointGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomRoutingEndpointGroupsCommandOutput) => void
  ): Promise<ListCustomRoutingEndpointGroupsCommandOutput> | void {
    const command = new ListCustomRoutingEndpointGroupsCommand(args);
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
   * <p>List the listeners for a custom routing accelerator. </p>
   */
  public listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingListenersCommandOutput>;
  public listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void
  ): void;
  public listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void
  ): void;
  public listCustomRoutingListeners(
    args: ListCustomRoutingListenersCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomRoutingListenersCommandOutput) => void),
    cb?: (err: any, data?: ListCustomRoutingListenersCommandOutput) => void
  ): Promise<ListCustomRoutingListenersCommandOutput> | void {
    const command = new ListCustomRoutingListenersCommand(args);
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
   * <p>Provides a complete mapping from the public accelerator IP address and port to destination EC2 instance
   * 		IP addresses and ports in the virtual public cloud (VPC) subnet endpoint for a custom routing accelerator.
   * 		For each subnet endpoint that you add, Global Accelerator creates a new static port mapping for the accelerator. The port
   * 	    mappings don't change after Global Accelerator generates them, so you can retrieve and cache the full mapping on your servers. </p>
   *          <p>If you remove a subnet from your accelerator, Global Accelerator removes (reclaims) the port mappings. If you add a subnet to
   *         your accelerator, Global Accelerator creates new port mappings (the existing ones don't change). If you add or remove EC2 instances
   *         in your subnet, the port mappings don't change, because the mappings are created when you add the subnet to Global Accelerator.</p>
   * 	        <p>The mappings also include a flag for each destination denoting which destination IP addresses and
   * 		ports are allowed or denied traffic.</p>
   */
  public listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingPortMappingsCommandOutput>;
  public listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void
  ): void;
  public listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void
  ): void;
  public listCustomRoutingPortMappings(
    args: ListCustomRoutingPortMappingsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void),
    cb?: (err: any, data?: ListCustomRoutingPortMappingsCommandOutput) => void
  ): Promise<ListCustomRoutingPortMappingsCommandOutput> | void {
    const command = new ListCustomRoutingPortMappingsCommand(args);
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
   * <p>List the port mappings for a specific EC2 instance (destination) in a VPC subnet endpoint. The
   * 			response is the mappings for one destination IP address. This is useful when your subnet endpoint has mappings that
   * 			span multiple custom routing accelerators in your account, or for scenarios where you only want to
   * 			list the port mappings for a specific destination instance.</p>
   */
  public listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput>;
  public listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void
  ): void;
  public listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void
  ): void;
  public listCustomRoutingPortMappingsByDestination(
    args: ListCustomRoutingPortMappingsByDestinationCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void),
    cb?: (err: any, data?: ListCustomRoutingPortMappingsByDestinationCommandOutput) => void
  ): Promise<ListCustomRoutingPortMappingsByDestinationCommandOutput> | void {
    const command = new ListCustomRoutingPortMappingsByDestinationCommand(args);
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
   * <p>List the endpoint groups that are associated with a listener. </p>
   */
  public listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEndpointGroupsCommandOutput>;
  public listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): void;
  public listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): void;
  public listEndpointGroups(
    args: ListEndpointGroupsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListEndpointGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): Promise<ListEndpointGroupsCommandOutput> | void {
    const command = new ListEndpointGroupsCommand(args);
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
   * <p>List the listeners for an accelerator. </p>
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
   * <p>List all tags for an accelerator. </p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 		    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
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
   * <p>Provisions an IP address range to use with your Amazon Web Services resources through bring your own IP
   * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
   * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
   * 			AdvertiseByoipCidr</a>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
   * 			IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ProvisionByoipCidrCommandOutput>;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): void;
  public provisionByoipCidr(
    args: ProvisionByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ProvisionByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: ProvisionByoipCidrCommandOutput) => void
  ): Promise<ProvisionByoipCidrCommandOutput> | void {
    const command = new ProvisionByoipCidrCommand(args);
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
   * <p>Remove endpoints from a custom routing accelerator.</p>
   */
  public removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput>;
  public removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void
  ): void;
  public removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void
  ): void;
  public removeCustomRoutingEndpoints(
    args: RemoveCustomRoutingEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void),
    cb?: (err: any, data?: RemoveCustomRoutingEndpointsCommandOutput) => void
  ): Promise<RemoveCustomRoutingEndpointsCommandOutput> | void {
    const command = new RemoveCustomRoutingEndpointsCommand(args);
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
   * <p>Remove endpoints from an endpoint group. </p>
   * 		       <p>The <code>RemoveEndpoints</code> API operation is the recommended option for removing endpoints. The alternative is to remove
   * 			endpoints by updating an endpoint group by using the
   * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/api/API_UpdateEndpointGroup.html">UpdateEndpointGroup</a>
   * 			API operation. There are two advantages to using <code>AddEndpoints</code> to remove endpoints instead:</p>
   * 		       <ul>
   *             <li>
   *                <p>It's more convenient, because you only need to specify the endpoints that you want to remove. With the
   * 				<code>UpdateEndpointGroup</code> API operation, you must specify all of the endpoints in the
   * 				endpoint group except the ones that you want to remove from the group.</p>
   *             </li>
   *             <li>
   *                <p>It's faster, because Global Accelerator doesn't need to resolve any endpoints. With the
   * 				<code>UpdateEndpointGroup</code> API operation, Global Accelerator must resolve all of the endpoints that
   * 				remain in the group.</p>
   *             </li>
   *          </ul>
   */
  public removeEndpoints(
    args: RemoveEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RemoveEndpointsCommandOutput>;
  public removeEndpoints(
    args: RemoveEndpointsCommandInput,
    cb: (err: any, data?: RemoveEndpointsCommandOutput) => void
  ): void;
  public removeEndpoints(
    args: RemoveEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RemoveEndpointsCommandOutput) => void
  ): void;
  public removeEndpoints(
    args: RemoveEndpointsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RemoveEndpointsCommandOutput) => void),
    cb?: (err: any, data?: RemoveEndpointsCommandOutput) => void
  ): Promise<RemoveEndpointsCommandOutput> | void {
    const command = new RemoveEndpointsCommand(args);
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
   * <p>Add tags to an accelerator resource. </p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 		    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>. </p>
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
   * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value.
   * 			The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 		    in Global Accelerator</a> in the <i>Global Accelerator Developer Guide</i>.</p>
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
   * <p>Update an accelerator. </p>
   *
   * 		       <important>
   * 			         <p>Global Accelerator is a global service that supports endpoints in multiple Amazon Web Services Regions but you must specify the
   * 				US West (Oregon) Region to create, update, or otherwise work with accelerators.  That is, for example, specify <code>--region us-west-2</code>
   * 				on AWS CLI commands.</p>
   * 		       </important>
   */
  public updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcceleratorCommandOutput>;
  public updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): void;
  public updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): void;
  public updateAccelerator(
    args: UpdateAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): Promise<UpdateAcceleratorCommandOutput> | void {
    const command = new UpdateAcceleratorCommand(args);
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
   * <p>Update the attributes for an accelerator. </p>
   */
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAcceleratorAttributesCommandOutput>;
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): void;
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): void;
  public updateAcceleratorAttributes(
    args: UpdateAcceleratorAttributesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): Promise<UpdateAcceleratorAttributesCommandOutput> | void {
    const command = new UpdateAcceleratorAttributesCommand(args);
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
   * <p>Update a custom routing accelerator. </p>
   */
  public updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingAcceleratorCommandOutput>;
  public updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void
  ): void;
  public updateCustomRoutingAccelerator(
    args: UpdateCustomRoutingAcceleratorCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomRoutingAcceleratorCommandOutput) => void
  ): Promise<UpdateCustomRoutingAcceleratorCommandOutput> | void {
    const command = new UpdateCustomRoutingAcceleratorCommand(args);
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
   * <p>Update the attributes for a custom routing accelerator. </p>
   */
  public updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput>;
  public updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  public updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): void;
  public updateCustomRoutingAcceleratorAttributes(
    args: UpdateCustomRoutingAcceleratorAttributesCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomRoutingAcceleratorAttributesCommandOutput) => void
  ): Promise<UpdateCustomRoutingAcceleratorAttributesCommandOutput> | void {
    const command = new UpdateCustomRoutingAcceleratorAttributesCommand(args);
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
   * <p>Update a listener for a custom routing accelerator. </p>
   */
  public updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateCustomRoutingListenerCommandOutput>;
  public updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void
  ): void;
  public updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void
  ): void;
  public updateCustomRoutingListener(
    args: UpdateCustomRoutingListenerCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void),
    cb?: (err: any, data?: UpdateCustomRoutingListenerCommandOutput) => void
  ): Promise<UpdateCustomRoutingListenerCommandOutput> | void {
    const command = new UpdateCustomRoutingListenerCommand(args);
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
   * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
   */
  public updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEndpointGroupCommandOutput>;
  public updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): void;
  public updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): void;
  public updateEndpointGroup(
    args: UpdateEndpointGroupCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): Promise<UpdateEndpointGroupCommandOutput> | void {
    const command = new UpdateEndpointGroupCommand(args);
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
   * <p>Update a listener. </p>
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
   * <p>Stops advertising an address range that is provisioned as an address pool.
   * 			You can perform this operation at most once every 10 seconds, even if you specify different address
   * 			ranges each time.</p>
   * 	        <p>It can take a few minutes before traffic to the specified addresses stops routing to Amazon Web Services because of
   * 			propagation delays.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring your own
   * 			IP addresses (BYOIP)</a> in the <i>Global Accelerator Developer Guide</i>.</p>
   */
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<WithdrawByoipCidrCommandOutput>;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): void;
  public withdrawByoipCidr(
    args: WithdrawByoipCidrCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: WithdrawByoipCidrCommandOutput) => void),
    cb?: (err: any, data?: WithdrawByoipCidrCommandOutput) => void
  ): Promise<WithdrawByoipCidrCommandOutput> | void {
    const command = new WithdrawByoipCidrCommand(args);
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
