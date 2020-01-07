import { GlobalAcceleratorClient } from "./GlobalAcceleratorClient";
import { CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput } from "./commands/CreateAcceleratorCommand";
import { CreateEndpointGroupCommandInput, CreateEndpointGroupCommandOutput } from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput } from "./commands/DeleteAcceleratorCommand";
import { DeleteEndpointGroupCommandInput, DeleteEndpointGroupCommandOutput } from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import { DescribeAcceleratorAttributesCommandInput, DescribeAcceleratorAttributesCommandOutput } from "./commands/DescribeAcceleratorAttributesCommand";
import { DescribeAcceleratorCommandInput, DescribeAcceleratorCommandOutput } from "./commands/DescribeAcceleratorCommand";
import { DescribeEndpointGroupCommandInput, DescribeEndpointGroupCommandOutput } from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommandInput, DescribeListenerCommandOutput } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "./commands/ListAcceleratorsCommand";
import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "./commands/ListListenersCommand";
import { UpdateAcceleratorAttributesCommandInput, UpdateAcceleratorAttributesCommandOutput } from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput } from "./commands/UpdateAcceleratorCommand";
import { UpdateEndpointGroupCommandInput, UpdateEndpointGroupCommandOutput } from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "./commands/UpdateListenerCommand";
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
export declare class GlobalAccelerator extends GlobalAcceleratorClient {
    /**
     * <p>Create an accelerator. An accelerator includes one or more listeners that process inbound connections and direct traffic
     * 			to one or more endpoint groups, each of which includes endpoints, such as Network Load Balancers. To see an AWS CLI
     * 			example of creating an accelerator, scroll down to <b>Example</b>.</p>
     *
     * 		       <important>
     * 			         <p>You must specify the US-West-2 (Oregon) Region to create or update accelerators.</p>
     * 		       </important>
     */
    createAccelerator(args: CreateAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<CreateAcceleratorCommandOutput>;
    createAccelerator(args: CreateAcceleratorCommandInput, cb: (err: any, data?: CreateAcceleratorCommandOutput) => void): void;
    createAccelerator(args: CreateAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAcceleratorCommandOutput) => void): void;
    /**
     * <p>Create an endpoint group for the specified listener. An endpoint group is a collection of endpoints in one AWS
     * 			Region. To see an AWS CLI example of creating an endpoint group, scroll down to <b>Example</b>.</p>
     */
    createEndpointGroup(args: CreateEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointGroupCommandOutput>;
    createEndpointGroup(args: CreateEndpointGroupCommandInput, cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void): void;
    createEndpointGroup(args: CreateEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Create a listener to process inbound connections from clients to an accelerator. Connections arrive to assigned static
     * 			IP addresses on a port, port range, or list of port ranges that you specify. To see an AWS CLI example of creating a
     * 			listener, scroll down to <b>Example</b>.</p>
     */
    createListener(args: CreateListenerCommandInput, options?: __HttpHandlerOptions): Promise<CreateListenerCommandOutput>;
    createListener(args: CreateListenerCommandInput, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    createListener(args: CreateListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateListenerCommandOutput) => void): void;
    /**
     * <p>Delete an accelerator. Note: before you can delete an accelerator, you must disable it and remove all dependent resources
     * 			(listeners and endpoint groups).</p>
     */
    deleteAccelerator(args: DeleteAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAcceleratorCommandOutput>;
    deleteAccelerator(args: DeleteAcceleratorCommandInput, cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void): void;
    deleteAccelerator(args: DeleteAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAcceleratorCommandOutput) => void): void;
    /**
     * <p>Delete an endpoint group from a listener.</p>
     */
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointGroupCommandOutput>;
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void): void;
    deleteEndpointGroup(args: DeleteEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Delete a listener from an accelerator.</p>
     */
    deleteListener(args: DeleteListenerCommandInput, options?: __HttpHandlerOptions): Promise<DeleteListenerCommandOutput>;
    deleteListener(args: DeleteListenerCommandInput, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    deleteListener(args: DeleteListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteListenerCommandOutput) => void): void;
    /**
     * <p>Describe an accelerator. To see an AWS CLI example of describing an accelerator, scroll down to <b>Example</b>.</p>
     */
    describeAccelerator(args: DescribeAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorCommandOutput>;
    describeAccelerator(args: DescribeAcceleratorCommandInput, cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void): void;
    describeAccelerator(args: DescribeAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorCommandOutput) => void): void;
    /**
     * <p>Describe the attributes of an accelerator.</p>
     */
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAcceleratorAttributesCommandOutput>;
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void): void;
    describeAcceleratorAttributes(args: DescribeAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Describe an endpoint group.</p>
     */
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointGroupCommandOutput>;
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void): void;
    describeEndpointGroup(args: DescribeEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Describe a listener.</p>
     */
    describeListener(args: DescribeListenerCommandInput, options?: __HttpHandlerOptions): Promise<DescribeListenerCommandOutput>;
    describeListener(args: DescribeListenerCommandInput, cb: (err: any, data?: DescribeListenerCommandOutput) => void): void;
    describeListener(args: DescribeListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeListenerCommandOutput) => void): void;
    /**
     * <p>List the accelerators for an AWS account.</p>
     */
    listAccelerators(args: ListAcceleratorsCommandInput, options?: __HttpHandlerOptions): Promise<ListAcceleratorsCommandOutput>;
    listAccelerators(args: ListAcceleratorsCommandInput, cb: (err: any, data?: ListAcceleratorsCommandOutput) => void): void;
    listAccelerators(args: ListAcceleratorsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAcceleratorsCommandOutput) => void): void;
    /**
     * <p>List the endpoint groups that are associated with a listener.</p>
     */
    listEndpointGroups(args: ListEndpointGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointGroupsCommandOutput>;
    listEndpointGroups(args: ListEndpointGroupsCommandInput, cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void): void;
    listEndpointGroups(args: ListEndpointGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointGroupsCommandOutput) => void): void;
    /**
     * <p>List the listeners for an accelerator.</p>
     */
    listListeners(args: ListListenersCommandInput, options?: __HttpHandlerOptions): Promise<ListListenersCommandOutput>;
    listListeners(args: ListListenersCommandInput, cb: (err: any, data?: ListListenersCommandOutput) => void): void;
    listListeners(args: ListListenersCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListListenersCommandOutput) => void): void;
    /**
     * <p>Update an accelerator. To see an AWS CLI example of updating an accelerator,
     * 			scroll down to <b>Example</b>.</p>
     *
     * 		       <important>
     * 			         <p>You must specify the US-West-2 (Oregon) Region to create or update accelerators.</p>
     * 		       </important>
     */
    updateAccelerator(args: UpdateAcceleratorCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAcceleratorCommandOutput>;
    updateAccelerator(args: UpdateAcceleratorCommandInput, cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void): void;
    updateAccelerator(args: UpdateAcceleratorCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAcceleratorCommandOutput) => void): void;
    /**
     * <p>Update the attributes for an accelerator. To see an AWS CLI example of updating an accelerator to enable flow logs,
     * 			scroll down to <b>Example</b>.</p>
     */
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAcceleratorAttributesCommandOutput>;
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void): void;
    updateAcceleratorAttributes(args: UpdateAcceleratorAttributesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAcceleratorAttributesCommandOutput) => void): void;
    /**
     * <p>Update an endpoint group. To see an AWS CLI example of updating an endpoint group, scroll down to <b>Example</b>.</p>
     */
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointGroupCommandOutput>;
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void): void;
    updateEndpointGroup(args: UpdateEndpointGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointGroupCommandOutput) => void): void;
    /**
     * <p>Update a listener.</p>
     */
    updateListener(args: UpdateListenerCommandInput, options?: __HttpHandlerOptions): Promise<UpdateListenerCommandOutput>;
    updateListener(args: UpdateListenerCommandInput, cb: (err: any, data?: UpdateListenerCommandOutput) => void): void;
    updateListener(args: UpdateListenerCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateListenerCommandOutput) => void): void;
}
