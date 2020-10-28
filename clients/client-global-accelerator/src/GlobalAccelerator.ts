import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import {
  AdvertiseByoipCidrCommand,
  AdvertiseByoipCidrCommandInput,
  AdvertiseByoipCidrCommandOutput,
} from "./commands/AdvertiseByoipCidrCommand";
import {
  CreateAcceleratorCommand,
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput,
} from "./commands/CreateAcceleratorCommand";
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
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Global Accelerator</fullname>
 * 		       <p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 			AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>.</p>
 * 		       <p>AWS Global Accelerator is a service in which you create <i>accelerators</i> to improve availability and performance
 * 			of your applications for local and global users. Global Accelerator directs traffic to optimal endpoints over the AWS
 * 			global network. This improves the availability and performance of your internet applications that are used by
 * 			a global audience. Global Accelerator is a global service that supports endpoints in multiple AWS Regions, which are listed
 * 			in the <a href="https://aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">AWS
 * 			Region Table</a>.</p>
 *
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 *
 * 		       <p>By default, Global Accelerator provides you with static IP addresses that you associate with your accelerator. (Instead of using the
 * 			IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges
 * 			that you bring to Global Accelerator.) The static IP addresses are anycast
 * 			from the AWS edge network and distribute incoming application traffic across multiple endpoint resources in multiple
 * 			AWS Regions, which increases the availability of your applications. Endpoints can be Network Load Balancers, Application Load Balancers, EC2 instances,
 * 			or Elastic IP addresses that are located in one AWS Region or multiple Regions.</p>
 *
 * 		       <p>Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based on health, client
 * 			location, and policies that you configure. The service reacts instantly to changes in health or configuration to
 * 			ensure that internet traffic from clients is directed to only healthy endpoints.</p>
 *
 * 		       <p>Global Accelerator includes components that work together to help you improve performance and availability for your
 * 			applications:</p>
 * 		       <dl>
 *             <dt>Static IP address</dt>
 *             <dd>
 * 					          <p>By default, AWS Global Accelerator provides you with a set of static IP addresses that are anycast from the AWS edge network
 * 						and serve as the single fixed entry points for your clients. Or you can configure these entry points to be IPv4 addresses
 * 						from your own IP address ranges that you bring to Global Accelerator (BYOIP). For more information,
 * 						see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own IP Addresses (BYOIP)</a> in
 * 						the <i>AWS Global Accelerator Developer Guide</i>. If you already have load balancers, EC2 instances, or
 * 						Elastic IP addresses set up for your applications, you can easily add those to Global Accelerator to allow the
 * 						resources to be accessed by the static IP addresses.</p>
 * 					          <important>
 *                   <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even
 * 						if you disable the accelerator and
 * 						it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
 * 						static IP addresses that are assigned to it, so you can no longer route traffic by using them.
 * 						You can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
 * 						see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
 * 						the <i>AWS Global Accelerator Developer Guide</i>.
 * 					</p>
 *                </important>
 * 				        </dd>
 *             <dt>Accelerator</dt>
 *             <dd>
 * 					          <p>An accelerator directs traffic to optimal endpoints over the AWS global network to improve availability
 * 						and performance for your internet applications that have a global audience. Each accelerator includes one or
 * 						more listeners.</p>
 * 				        </dd>
 *             <dt>DNS name</dt>
 *             <dd>
 *                <p>Global Accelerator assigns each accelerator a default Domain Name System (DNS)
 * 					name, similar to <code>a1234567890abcdef.awsglobalaccelerator.com</code>,
 * 					that points to your Global Accelerator static IP addresses. Depending
 * 					on the use case, you can use your accelerator's static IP addresses or DNS name to route traffic
 * 					to your accelerator, or set up DNS records to route traffic using your own custom domain name.</p>
 * 				        </dd>
 *             <dt>Network zone</dt>
 *             <dd>
 * 					          <p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an
 * 						AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure.
 *
 * 						When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a
 * 						network zone becomes unavailable due to IP address blocking by certain client networks, or network
 * 						disruptions, then client applications can retry on the healthy static IP address from the other isolated
 * 						network zone.</p>
 * 				        </dd>
 *             <dt>Listener</dt>
 *             <dd>
 * 					          <p>A listener processes inbound connections from clients to Global Accelerator, based on the protocol and port that you
 * 						configure. Each listener has one or more endpoint groups associated with it, and traffic is forwarded to
 * 						endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions
 * 						that you want to distribute traffic to. Traffic is distributed to optimal endpoints within the endpoint
 * 						groups associated with a listener.</p>
 * 				        </dd>
 *             <dt>Endpoint group</dt>
 *             <dd>
 * 					          <p>Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or more
 * 						endpoints in the Region. You can increase or reduce the percentage of traffic that would be otherwise
 * 						directed to an endpoint group by adjusting a setting called a <i>traffic dial</i>. The
 * 						traffic dial lets you easily do performance testing or blue/green deployment testing for new releases
 * 						across different AWS Regions, for example. </p>
 * 				        </dd>
 *             <dt>Endpoint</dt>
 *             <dd>
 * 					          <p>An endpoint is a Network Load Balancer, Application Load Balancer, EC2 instance, or Elastic IP address. Traffic is routed to endpoints based on several
 * 						factors, including the geo-proximity to the user, the health of the endpoint, and the configuration
 * 						options that you choose, such as endpoint weights. For each endpoint, you can configure weights, which are
 * 						numbers that you can use to specify the proportion of traffic to route to each one. This can be useful,
 * 						for example, to do performance testing within a Region.</p>
 * 				        </dd>
 *          </dl>
 */
export class GlobalAccelerator extends GlobalAcceleratorClient {
  /**
   * <p>Advertises an IPv4 address range that is provisioned for use with your AWS resources
   * 			through bring your own IP addresses (BYOIP). It can take a few minutes before traffic to
   * 			the specified addresses starts routing to AWS because of propagation delays. To
   * 			see an AWS CLI example of advertising an address range, scroll down to
   * 			<b>Example</b>.</p>
   * 		       <p>To stop advertising the BYOIP address range, use <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">
   * 			WithdrawByoipCidr</a>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
   * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI
   * 			example of creating an accelerator, scroll down to <b>Example</b>.</p>
   * 		       <important>
   * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
   * 				US West (Oregon) Region to create or update accelerators.</p>
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
   * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
   * 			Region. A resource must be valid and active when you add it as an endpoint.</p>
   * 		       <p>To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.</p>
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
   * 			IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a
   * 			listener, scroll down to <b>Example</b>.</p>
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
   * 		       <important>
   *             <p>When you create an accelerator, by default, Global Accelerator provides you with a set of two static IP addresses.
   * 			Alternatively, you can bring your own IP address ranges to Global Accelerator and assign IP addresses from those ranges.
   * 		</p>
   * 		          <p>The IP
   * 			addresses are assigned to your accelerator for as long as it exists, even if you disable the accelerator and
   * 			it no longer accepts or routes traffic. However, when you <i>delete</i> an accelerator, you lose the
   * 			static IP addresses that are assigned to the accelerator, so you can no longer route traffic by using them.
   * 			As a best practice, ensure that you have permissions in place to avoid inadvertently deleting accelerators. You
   * 			can use IAM policies with Global Accelerator to limit the users who have permissions to delete an accelerator. For more information,
   * 			see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/auth-and-access-control.html">Authentication and Access Control</a> in
   * 			the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * <p>Releases the specified address range that you provisioned to use with your AWS resources
   * 			through bring your own IP addresses (BYOIP) and deletes the corresponding address pool. To
   * 			see an AWS CLI example of deprovisioning an address range, scroll down to
   * 			<b>Example</b>.</p>
   * 		       <p>Before you can release an address range, you must stop advertising it by using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/WithdrawByoipCidr.html">WithdrawByoipCidr</a> and you must not have
   * 			any accelerators that are using static IP addresses allocated from its address range.
   * 		</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * <p>Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to <b>Example</b>.</p>
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
   * <p>Describe the attributes of an accelerator. To see an AWS CLI example of describing the attributes of an accelerator,
   * 			scroll down to <b>Example</b>.</p>
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
   * <p>Describe an endpoint group. To see an AWS CLI example of describing
   * 			an endpoint group, scroll down to <b>Example</b>.</p>
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
   * <p>Describe a listener. To see an AWS CLI example of describing a listener, scroll down to <b>Example</b>.</p>
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
   * <p>List the accelerators for an AWS account. To see an AWS CLI example of listing the accelerators for an AWS account,
   * 			scroll down to <b>Example</b>.</p>
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
   * 		       <p>To see an AWS CLI example of listing BYOIP CIDR addresses, scroll down to
   * 			<b>Example</b>.</p>
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
   * <p>List the endpoint groups that are associated with a listener. To see an AWS CLI example of listing
   * 			the endpoint groups for listener, scroll down to <b>Example</b>.</p>
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
   * <p>List the listeners for an accelerator. To see an AWS CLI example of listing the listeners for an accelerator,
   * 			scroll down to <b>Example</b>.</p>
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
   * <p>List all tags for an accelerator. To see an AWS CLI example of listing tags for an accelerator,
   * 			scroll down to <b>Example</b>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
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
   * <p>Provisions an IP address range to use with your AWS resources through bring your own IP
   * 			addresses (BYOIP) and creates a corresponding address pool. After the address range is provisioned,
   * 			it is ready to be advertised using <a href="https://docs.aws.amazon.com/global-accelerator/latest/api/AdvertiseByoipCidr.html">
   * 			AdvertiseByoipCidr</a>.</p>
   * 		       <p>To see an AWS CLI example of provisioning an address range for BYOIP, scroll down to
   * 			<b>Example</b>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * <p>Add tags to an accelerator resource. To see an AWS CLI example of adding tags to an accelerator, scroll down to
   * 			<b>Example</b>.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>. </p>
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
   * <p>Remove tags from a Global Accelerator resource. When you specify a tag key, the action removes both that key and its associated value. To
   * 			see an AWS CLI example of removing tags from an accelerator, scroll down to <b>Example</b>.
   * 			The operation succeeds even if you attempt to remove tags from an accelerator that was already removed.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/tagging-in-global-accelerator.html">Tagging
   * 			in AWS Global Accelerator</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
   * <p>Update an accelerator. To see an AWS CLI example of updating an accelerator,
   * 			scroll down to <b>Example</b>.</p>
   *
   * 		       <important>
   * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
   * 				US West (Oregon) Region to create or update accelerators.</p>
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
   * <p>Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs,
   * 			scroll down to <b>Example</b>.</p>
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
   * <p>Update an endpoint group. A resource must be valid and active when you add it as an endpoint.</p>
   * 		       <p>To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>. </p>
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
   * <p>Update a listener. To see an AWS CLI example of updating listener, scroll down to <b>Example</b>.</p>
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
   * 			ranges each time. To see an AWS CLI example of withdrawing an address range for BYOIP so
   * 			it will no longer be advertised by AWS, scroll down to <b>Example</b>.</p>
   * 		       <p>It can take a few minutes before traffic to the specified addresses stops routing to AWS because of
   * 			propagation delays.</p>
   * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">Bring Your Own
   * 			IP Addresses (BYOIP)</a> in the <i>AWS Global Accelerator Developer Guide</i>.</p>
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
