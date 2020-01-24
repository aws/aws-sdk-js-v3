import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import {
  CreateAcceleratorCommand,
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput
} from "./commands/CreateAcceleratorCommand";
import {
  CreateEndpointGroupCommand,
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput
} from "./commands/CreateEndpointGroupCommand";
import {
  CreateListenerCommand,
  CreateListenerCommandInput,
  CreateListenerCommandOutput
} from "./commands/CreateListenerCommand";
import {
  DeleteAcceleratorCommand,
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput
} from "./commands/DeleteAcceleratorCommand";
import {
  DeleteEndpointGroupCommand,
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput
} from "./commands/DeleteEndpointGroupCommand";
import {
  DeleteListenerCommand,
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput
} from "./commands/DeleteListenerCommand";
import {
  DescribeAcceleratorAttributesCommand,
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommand,
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeEndpointGroupCommand,
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput
} from "./commands/DescribeEndpointGroupCommand";
import {
  DescribeListenerCommand,
  DescribeListenerCommandInput,
  DescribeListenerCommandOutput
} from "./commands/DescribeListenerCommand";
import {
  ListAcceleratorsCommand,
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput
} from "./commands/ListAcceleratorsCommand";
import {
  ListEndpointGroupsCommand,
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput
} from "./commands/ListEndpointGroupsCommand";
import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput
} from "./commands/ListListenersCommand";
import {
  UpdateAcceleratorAttributesCommand,
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput
} from "./commands/UpdateAcceleratorAttributesCommand";
import {
  UpdateAcceleratorCommand,
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput
} from "./commands/UpdateAcceleratorCommand";
import {
  UpdateEndpointGroupCommand,
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput
} from "./commands/UpdateEndpointGroupCommand";
import {
  UpdateListenerCommand,
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput
} from "./commands/UpdateListenerCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <fullname>AWS Global Accelerator</fullname>
 * 		       <p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 			AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>. </p>
 * 		       <p>AWS Global Accelerator is a network layer service in which you create accelerators to improve availability and performance for
 * 			internet applications used by a global audience. </p>
 *
 * 		       <important>
 * 			         <p>You must specify the US-West-2 (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 *
 * 		       <p>Global Accelerator provides you with static IP addresses that you associate with your accelerator. These IP addresses are anycast
 * 			from the AWS edge network and distribute incoming application traffic across multiple endpoint resources in multiple
 * 			AWS Regions, which increases the availability of your applications. Endpoints can be Elastic IP addresses, Network Load Balancers,
 * 			and Application Load Balancers that are located in one AWS Region or multiple Regions.</p>
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
 * 					          <p>AWS Global Accelerator provides you with a set of static IP addresses which are anycast from the AWS edge network
 * 						and serve as the single fixed entry points for your clients. If you already have Elastic Load Balancing or
 * 						Elastic IP address resources set up for your applications, you can easily add those to Global Accelerator to allow the
 * 						resources to be accessed by a Global Accelerator static IP address.</p>
 * 				        </dd>
 *             <dt>Accelerator</dt>
 *             <dd>
 * 					          <p>An accelerator directs traffic to optimal endpoints over the AWS global network to improve availability
 * 						and performance for your internet applications that have a global audience. Each accelerator includes one or
 * 						more listeners.</p>
 * 				        </dd>
 *             <dt>Network zone</dt>
 *             <dd>
 * 					          <p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an
 * 						AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure.
 *
 * 						When you configure an accelerator, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a
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
 * 					          <p>An endpoint is an Elastic IP address, Network Load Balancer, or Application Load Balancer. Traffic is routed to endpoints based on several
 * 						factors, including the geo-proximity to the user, the health of the endpoint, and the configuration
 * 						options that you choose, such as endpoint weights. For each endpoint, you can configure weights, which are
 * 						numbers that you can use to specify the proportion of traffic to route to each one. This can be useful,
 * 						for example, to do performance testing within a Region.</p>
 * 				        </dd>
 *          </dl>
 */
export class GlobalAccelerator extends GlobalAcceleratorClient {
  /**
   * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
   * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI
   * 			example of creating an accelerator, scroll down to <b>Example</b>.</p>
   *
   * 		       <important>
   * 			         <p>You must specify the US-West-2 (Oregon) Region to create or update accelerators.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: CreateAcceleratorCommandOutput) => void
  ): Promise<CreateAcceleratorCommandOutput> | void {
    const command = new CreateAcceleratorCommand(args);
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
   * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
   * 			Region. To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: CreateEndpointGroupCommandOutput) => void
  ): Promise<CreateEndpointGroupCommandOutput> | void {
    const command = new CreateEndpointGroupCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: CreateListenerCommandOutput) => void),
    cb?: (err: any, data?: CreateListenerCommandOutput) => void
  ): Promise<CreateListenerCommandOutput> | void {
    const command = new CreateListenerCommand(args);
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
   * <p>Delete an accelerator. Note: before you can delete an accelerator, you must disable it and remove all dependent resources
   * 			(listeners and endpoint groups).</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DeleteAcceleratorCommandOutput) => void
  ): Promise<DeleteAcceleratorCommandOutput> | void {
    const command = new DeleteAcceleratorCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DeleteEndpointGroupCommandOutput) => void
  ): Promise<DeleteEndpointGroupCommandOutput> | void {
    const command = new DeleteEndpointGroupCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteListenerCommandOutput) => void),
    cb?: (err: any, data?: DeleteListenerCommandOutput) => void
  ): Promise<DeleteListenerCommandOutput> | void {
    const command = new DeleteListenerCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorCommandOutput) => void
  ): Promise<DescribeAcceleratorCommandOutput> | void {
    const command = new DescribeAcceleratorCommand(args);
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
   * <p>Describe the attributes of an accelerator.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void
  ): Promise<DescribeAcceleratorAttributesCommandOutput> | void {
    const command = new DescribeAcceleratorAttributesCommand(args);
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
   * <p>Describe an endpoint group.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: DescribeEndpointGroupCommandOutput) => void
  ): Promise<DescribeEndpointGroupCommandOutput> | void {
    const command = new DescribeEndpointGroupCommand(args);
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
   * <p>Describe a listener.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeListenerCommandOutput) => void),
    cb?: (err: any, data?: DescribeListenerCommandOutput) => void
  ): Promise<DescribeListenerCommandOutput> | void {
    const command = new DescribeListenerCommand(args);
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
   * <p>List the accelerators for an AWS account.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListAcceleratorsCommandOutput) => void),
    cb?: (err: any, data?: ListAcceleratorsCommandOutput) => void
  ): Promise<ListAcceleratorsCommandOutput> | void {
    const command = new ListAcceleratorsCommand(args);
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
   * <p>List the endpoint groups that are associated with a listener.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListEndpointGroupsCommandOutput) => void),
    cb?: (err: any, data?: ListEndpointGroupsCommandOutput) => void
  ): Promise<ListEndpointGroupsCommandOutput> | void {
    const command = new ListEndpointGroupsCommand(args);
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
   * <p>List the listeners for an accelerator.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListListenersCommandOutput) => void),
    cb?: (err: any, data?: ListListenersCommandOutput) => void
  ): Promise<ListListenersCommandOutput> | void {
    const command = new ListListenersCommand(args);
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
   * <p>Update an accelerator. To see an AWS CLI example of updating an accelerator,
   * 			scroll down to <b>Example</b>.</p>
   *
   * 		       <important>
   * 			         <p>You must specify the US-West-2 (Oregon) Region to create or update accelerators.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateAcceleratorCommandOutput) => void),
    cb?: (err: any, data?: UpdateAcceleratorCommandOutput) => void
  ): Promise<UpdateAcceleratorCommandOutput> | void {
    const command = new UpdateAcceleratorCommand(args);
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void),
    cb?: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void
  ): Promise<UpdateAcceleratorAttributesCommandOutput> | void {
    const command = new UpdateAcceleratorAttributesCommand(args);
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
   * <p>Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateEndpointGroupCommandOutput) => void),
    cb?: (err: any, data?: UpdateEndpointGroupCommandOutput) => void
  ): Promise<UpdateEndpointGroupCommandOutput> | void {
    const command = new UpdateEndpointGroupCommand(args);
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
   * <p>Update a listener.</p>
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
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: UpdateListenerCommandOutput) => void),
    cb?: (err: any, data?: UpdateListenerCommandOutput) => void
  ): Promise<UpdateListenerCommandOutput> | void {
    const command = new UpdateListenerCommand(args);
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
