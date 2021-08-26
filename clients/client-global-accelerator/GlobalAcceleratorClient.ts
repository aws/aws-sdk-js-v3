import {
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "./commands/AddCustomRoutingEndpointsCommand";
import { AdvertiseByoipCidrCommandInput, AdvertiseByoipCidrCommandOutput } from "./commands/AdvertiseByoipCidrCommand";
import {
  AllowCustomRoutingTrafficCommandInput,
  AllowCustomRoutingTrafficCommandOutput,
} from "./commands/AllowCustomRoutingTrafficCommand";
import { CreateAcceleratorCommandInput, CreateAcceleratorCommandOutput } from "./commands/CreateAcceleratorCommand";
import {
  CreateCustomRoutingAcceleratorCommandInput,
  CreateCustomRoutingAcceleratorCommandOutput,
} from "./commands/CreateCustomRoutingAcceleratorCommand";
import {
  CreateCustomRoutingEndpointGroupCommandInput,
  CreateCustomRoutingEndpointGroupCommandOutput,
} from "./commands/CreateCustomRoutingEndpointGroupCommand";
import {
  CreateCustomRoutingListenerCommandInput,
  CreateCustomRoutingListenerCommandOutput,
} from "./commands/CreateCustomRoutingListenerCommand";
import {
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput,
} from "./commands/CreateEndpointGroupCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import { DeleteAcceleratorCommandInput, DeleteAcceleratorCommandOutput } from "./commands/DeleteAcceleratorCommand";
import {
  DeleteCustomRoutingAcceleratorCommandInput,
  DeleteCustomRoutingAcceleratorCommandOutput,
} from "./commands/DeleteCustomRoutingAcceleratorCommand";
import {
  DeleteCustomRoutingEndpointGroupCommandInput,
  DeleteCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DeleteCustomRoutingEndpointGroupCommand";
import {
  DeleteCustomRoutingListenerCommandInput,
  DeleteCustomRoutingListenerCommandOutput,
} from "./commands/DeleteCustomRoutingListenerCommand";
import {
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput,
} from "./commands/DeleteEndpointGroupCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import {
  DenyCustomRoutingTrafficCommandInput,
  DenyCustomRoutingTrafficCommandOutput,
} from "./commands/DenyCustomRoutingTrafficCommand";
import {
  DeprovisionByoipCidrCommandInput,
  DeprovisionByoipCidrCommandOutput,
} from "./commands/DeprovisionByoipCidrCommand";
import {
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput,
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput,
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeCustomRoutingAcceleratorAttributesCommandInput,
  DescribeCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorAttributesCommand";
import {
  DescribeCustomRoutingAcceleratorCommandInput,
  DescribeCustomRoutingAcceleratorCommandOutput,
} from "./commands/DescribeCustomRoutingAcceleratorCommand";
import {
  DescribeCustomRoutingEndpointGroupCommandInput,
  DescribeCustomRoutingEndpointGroupCommandOutput,
} from "./commands/DescribeCustomRoutingEndpointGroupCommand";
import {
  DescribeCustomRoutingListenerCommandInput,
  DescribeCustomRoutingListenerCommandOutput,
} from "./commands/DescribeCustomRoutingListenerCommand";
import {
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput,
} from "./commands/DescribeEndpointGroupCommand";
import { DescribeListenerCommandInput, DescribeListenerCommandOutput } from "./commands/DescribeListenerCommand";
import { ListAcceleratorsCommandInput, ListAcceleratorsCommandOutput } from "./commands/ListAcceleratorsCommand";
import { ListByoipCidrsCommandInput, ListByoipCidrsCommandOutput } from "./commands/ListByoipCidrsCommand";
import {
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "./commands/ListCustomRoutingAcceleratorsCommand";
import {
  ListCustomRoutingEndpointGroupsCommandInput,
  ListCustomRoutingEndpointGroupsCommandOutput,
} from "./commands/ListCustomRoutingEndpointGroupsCommand";
import {
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "./commands/ListCustomRoutingListenersCommand";
import {
  ListCustomRoutingPortMappingsByDestinationCommandInput,
  ListCustomRoutingPortMappingsByDestinationCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsByDestinationCommand";
import {
  ListCustomRoutingPortMappingsCommandInput,
  ListCustomRoutingPortMappingsCommandOutput,
} from "./commands/ListCustomRoutingPortMappingsCommand";
import { ListEndpointGroupsCommandInput, ListEndpointGroupsCommandOutput } from "./commands/ListEndpointGroupsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "./commands/ListListenersCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ProvisionByoipCidrCommandInput, ProvisionByoipCidrCommandOutput } from "./commands/ProvisionByoipCidrCommand";
import {
  RemoveCustomRoutingEndpointsCommandInput,
  RemoveCustomRoutingEndpointsCommandOutput,
} from "./commands/RemoveCustomRoutingEndpointsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput,
} from "./commands/UpdateAcceleratorAttributesCommand";
import { UpdateAcceleratorCommandInput, UpdateAcceleratorCommandOutput } from "./commands/UpdateAcceleratorCommand";
import {
  UpdateCustomRoutingAcceleratorAttributesCommandInput,
  UpdateCustomRoutingAcceleratorAttributesCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorAttributesCommand";
import {
  UpdateCustomRoutingAcceleratorCommandInput,
  UpdateCustomRoutingAcceleratorCommandOutput,
} from "./commands/UpdateCustomRoutingAcceleratorCommand";
import {
  UpdateCustomRoutingListenerCommandInput,
  UpdateCustomRoutingListenerCommandOutput,
} from "./commands/UpdateCustomRoutingListenerCommand";
import {
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput,
} from "./commands/UpdateEndpointGroupCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "./commands/UpdateListenerCommand";
import { WithdrawByoipCidrCommandInput, WithdrawByoipCidrCommandOutput } from "./commands/WithdrawByoipCidrCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig,
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { RetryInputConfig, RetryResolvedConfig, getRetryPlugin, resolveRetryConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AddCustomRoutingEndpointsCommandInput
  | AdvertiseByoipCidrCommandInput
  | AllowCustomRoutingTrafficCommandInput
  | CreateAcceleratorCommandInput
  | CreateCustomRoutingAcceleratorCommandInput
  | CreateCustomRoutingEndpointGroupCommandInput
  | CreateCustomRoutingListenerCommandInput
  | CreateEndpointGroupCommandInput
  | CreateListenerCommandInput
  | DeleteAcceleratorCommandInput
  | DeleteCustomRoutingAcceleratorCommandInput
  | DeleteCustomRoutingEndpointGroupCommandInput
  | DeleteCustomRoutingListenerCommandInput
  | DeleteEndpointGroupCommandInput
  | DeleteListenerCommandInput
  | DenyCustomRoutingTrafficCommandInput
  | DeprovisionByoipCidrCommandInput
  | DescribeAcceleratorAttributesCommandInput
  | DescribeAcceleratorCommandInput
  | DescribeCustomRoutingAcceleratorAttributesCommandInput
  | DescribeCustomRoutingAcceleratorCommandInput
  | DescribeCustomRoutingEndpointGroupCommandInput
  | DescribeCustomRoutingListenerCommandInput
  | DescribeEndpointGroupCommandInput
  | DescribeListenerCommandInput
  | ListAcceleratorsCommandInput
  | ListByoipCidrsCommandInput
  | ListCustomRoutingAcceleratorsCommandInput
  | ListCustomRoutingEndpointGroupsCommandInput
  | ListCustomRoutingListenersCommandInput
  | ListCustomRoutingPortMappingsByDestinationCommandInput
  | ListCustomRoutingPortMappingsCommandInput
  | ListEndpointGroupsCommandInput
  | ListListenersCommandInput
  | ListTagsForResourceCommandInput
  | ProvisionByoipCidrCommandInput
  | RemoveCustomRoutingEndpointsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAcceleratorAttributesCommandInput
  | UpdateAcceleratorCommandInput
  | UpdateCustomRoutingAcceleratorAttributesCommandInput
  | UpdateCustomRoutingAcceleratorCommandInput
  | UpdateCustomRoutingListenerCommandInput
  | UpdateEndpointGroupCommandInput
  | UpdateListenerCommandInput
  | WithdrawByoipCidrCommandInput;

export type ServiceOutputTypes =
  | AddCustomRoutingEndpointsCommandOutput
  | AdvertiseByoipCidrCommandOutput
  | AllowCustomRoutingTrafficCommandOutput
  | CreateAcceleratorCommandOutput
  | CreateCustomRoutingAcceleratorCommandOutput
  | CreateCustomRoutingEndpointGroupCommandOutput
  | CreateCustomRoutingListenerCommandOutput
  | CreateEndpointGroupCommandOutput
  | CreateListenerCommandOutput
  | DeleteAcceleratorCommandOutput
  | DeleteCustomRoutingAcceleratorCommandOutput
  | DeleteCustomRoutingEndpointGroupCommandOutput
  | DeleteCustomRoutingListenerCommandOutput
  | DeleteEndpointGroupCommandOutput
  | DeleteListenerCommandOutput
  | DenyCustomRoutingTrafficCommandOutput
  | DeprovisionByoipCidrCommandOutput
  | DescribeAcceleratorAttributesCommandOutput
  | DescribeAcceleratorCommandOutput
  | DescribeCustomRoutingAcceleratorAttributesCommandOutput
  | DescribeCustomRoutingAcceleratorCommandOutput
  | DescribeCustomRoutingEndpointGroupCommandOutput
  | DescribeCustomRoutingListenerCommandOutput
  | DescribeEndpointGroupCommandOutput
  | DescribeListenerCommandOutput
  | ListAcceleratorsCommandOutput
  | ListByoipCidrsCommandOutput
  | ListCustomRoutingAcceleratorsCommandOutput
  | ListCustomRoutingEndpointGroupsCommandOutput
  | ListCustomRoutingListenersCommandOutput
  | ListCustomRoutingPortMappingsByDestinationCommandOutput
  | ListCustomRoutingPortMappingsCommandOutput
  | ListEndpointGroupsCommandOutput
  | ListListenersCommandOutput
  | ListTagsForResourceCommandOutput
  | ProvisionByoipCidrCommandOutput
  | RemoveCustomRoutingEndpointsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAcceleratorAttributesCommandOutput
  | UpdateAcceleratorCommandOutput
  | UpdateCustomRoutingAcceleratorAttributesCommandOutput
  | UpdateCustomRoutingAcceleratorCommandOutput
  | UpdateCustomRoutingListenerCommandOutput
  | UpdateEndpointGroupCommandOutput
  | UpdateListenerCommandOutput
  | WithdrawByoipCidrCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   * @internal
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array.
   * @internal
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string.
   * @internal
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array.
   * @internal
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string.
   * @internal
   */
  utf8Encoder?: __Encoder;

  /**
   * The runtime environment.
   * @internal
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @internal
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type GlobalAcceleratorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of GlobalAcceleratorClient class constructor that set the region, credentials and other options.
 */
export interface GlobalAcceleratorClientConfig extends GlobalAcceleratorClientConfigType {}

type GlobalAcceleratorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of GlobalAcceleratorClient class. This is resolved and normalized from the {@link GlobalAcceleratorClientConfig | constructor configuration interface}.
 */
export interface GlobalAcceleratorClientResolvedConfig extends GlobalAcceleratorClientResolvedConfigType {}

/**
 * <fullname>AWS Global Accelerator</fullname>
 * 		       <p>This is the <i>AWS Global Accelerator API Reference</i>. This guide is for developers who need detailed information about
 * 			AWS Global Accelerator API actions, data types, and errors. For more information about Global Accelerator features, see the
 * 			<a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/Welcome.html">AWS Global Accelerator Developer Guide</a>.</p>
 *
 * 		       <p>AWS Global Accelerator is a service in which you create <i>accelerators</i> to improve the performance
 * 			of your applications for local and global users. Depending on the type of accelerator you choose, you can
 * 			gain additional benefits. </p>
 * 		       <ul>
 *             <li>
 *                <p>By using a standard accelerator, you can improve availability of your internet applications
 * 				that are used by a global audience. With a standard accelerator, Global Accelerator directs traffic to optimal endpoints over the AWS
 * 				global network. </p>
 *             </li>
 *             <li>
 *                <p>For other scenarios, you might choose a custom routing accelerator. With a custom routing accelerator, you
 * 				can use application logic to directly map one or more users to a specific endpoint among many endpoints.</p>
 *             </li>
 *          </ul>
 * 		       <important>
 * 			         <p>Global Accelerator is a global service that supports endpoints in multiple AWS Regions but you must specify the
 * 				US West (Oregon) Region to create or update accelerators.</p>
 * 		       </important>
 * 		       <p>By default, Global Accelerator provides you with two static IP addresses that you associate with your accelerator. With
 * 			a standard accelerator, instead of using the
 * 			IP addresses that Global Accelerator provides, you can configure these entry points to be IPv4 addresses from your own IP address ranges
 * 			that you bring to Global Accelerator. The static IP addresses are anycast from the AWS edge network. For a standard accelerator,
 * 			they distribute incoming application traffic across multiple endpoint resources in multiple AWS Regions, which increases
 * 			the availability of your applications. Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers,
 * 			Amazon EC2 instances, or Elastic IP addresses that are located in one AWS Region or multiple Regions. For custom routing
 * 			accelerators, you map traffic that arrives to the static IP addresses to specific Amazon EC2 servers in endpoints that
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
 * 		       <p>For standard accelerators, Global Accelerator uses the AWS global network to route traffic to the optimal regional endpoint based
 * 			on health, client location, and policies that you configure. The service reacts instantly to
 * 			changes in health or configuration to ensure that internet traffic from clients is always
 * 			directed to healthy endpoints.</p>
 *
 * 		       <p>For a list of the AWS Regions where Global Accelerator and other services are currently supported, see the
 * 			<a href="https://docs.aws.amazon.com/about-aws/global-infrastructure/regional-product-services/">AWS
 * 				Region Table</a>.</p>
 *
 * 		       <p>AWS Global Accelerator includes the following components:</p>
 * 		       <dl>
 *             <dt>Static IP addresses</dt>
 *             <dd>
 *                <p>Global Accelerator provides you with a set of two static IP addresses that are anycast from the AWS edge
 * 					network. If you bring your own IP address range to AWS (BYOIP) to use with a standard accelerator, you
 * 					can instead assign IP addresses from your own pool to use with your accelerator. For more information,
 * 					see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/using-byoip.html">
 * 						Bring your own IP addresses (BYOIP) in AWS Global Accelerator</a>.</p>
 * 					          <p>The IP addresses serve as single fixed entry points for your clients. If you already have Elastic
 * 						Load Balancing load balancers, Amazon EC2 instances, or Elastic IP address resources set up for your applications,
 * 						you can easily add those to a standard accelerator in Global Accelerator. This allows Global Accelerator to use static IP addresses
 * 						to access the resources.</p>
 * 					          <p>The static IP addresses remain assigned to your accelerator for as long as it exists, even
 * 						if you disable the accelerator and it no longer accepts or routes traffic.
 * 						However, when you <i>delete</i> an accelerator, you lose the
 * 						static IP addresses that are assigned to it, so you can no longer route
 * 						traffic by using them. You can use IAM policies like tag-based permissions
 * 						with Global Accelerator to delete an accelerator. For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/access-control-manage-access-tag-policies.html">Tag-based policies</a>.</p>
 * 				        </dd>
 *             <dt>Accelerator</dt>
 *             <dd>
 *                <p>An accelerator directs traffic to endpoints over the AWS global network to improve the
 * 					performance of your internet applications. Each accelerator includes one or more listeners.</p>
 * 					          <p>There are two types of accelerators:</p>
 * 					          <ul>
 *                   <li>
 *                      <p>A <i>standard</i> accelerator directs traffic to the optimal AWS endpoint based
 * 							on several factors, including the user’s location, the health of the endpoint, and the endpoint weights
 * 							that you configure. This improves the availability and performance of your applications.
 * 							Endpoints can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP addresses.</p>
 *                   </li>
 *                   <li>
 *                      <p>A <i>custom routing</i> accelerator directs traffic to one of possibly thousands of
 * 								Amazon EC2 instances running in a single or multiple virtual private
 * 								clouds (VPCs). With custom routing, listener ports are mapped to
 * 								statically associate port ranges with VPC subnets, which
 * 								allows Global Accelerator to determine an EC2 instance IP address at the time of
 * 								connection. By default, all port mapping destinations in a VPC
 * 								subnet can't receive traffic. You can choose to configure all
 * 								destinations in the subnet to receive traffic, or to specify
 * 								individual port mappings that can receive traffic.</p>
 *                   </li>
 *                </ul>
 * 					          <p>For more information, see <a href="https://docs.aws.amazon.com/global-accelerator/latest/dg/introduction-accelerator-types.html">Types of accelerators</a>.</p>
 * 				        </dd>
 *             <dt>DNS name</dt>
 *             <dd>
 *                <p>Global Accelerator assigns each accelerator a default Domain Name System (DNS) name, similar to
 * 					<code>a1234567890abcdef.awsglobalaccelerator.com</code>, that points to
 * 					the static IP addresses that Global Accelerator assigns to you or that you choose from your
 * 					own IP address range. Depending on the use
 * 					case, you can use your accelerator's static IP addresses or DNS name to
 * 					route traffic to your accelerator, or set up DNS records to route traffic using
 * 					your own custom domain name.</p>
 * 				        </dd>
 *             <dt>Network zone</dt>
 *             <dd>
 *                <p>A network zone services the static IP addresses for your accelerator from a unique IP subnet. Similar to an
 * 					AWS Availability Zone, a network zone is an isolated unit with its own set of physical infrastructure.
 * 					When you configure an accelerator, by default, Global Accelerator allocates two IPv4 addresses for it. If one IP address from a
 * 					network zone becomes unavailable due to IP address blocking by certain client networks, or network
 * 					disruptions, then client applications can retry on the healthy static IP address from the other isolated
 * 					network zone.</p>
 * 				        </dd>
 *             <dt>Listener</dt>
 *             <dd>
 *                <p>A listener processes inbound connections from clients to Global Accelerator, based on the port (or port range)
 * 					and protocol (or protocols) that you configure. A listener can be configured for TCP, UDP, or both TCP and UDP protocols. Each
 * 					listener has one or more endpoint groups associated with it, and traffic is forwarded
 * 					to endpoints in one of the groups. You associate endpoint groups with listeners by specifying the Regions that you
 * 					want to distribute traffic to. With a standard accelerator, traffic is distributed to optimal endpoints within the endpoint
 * 					groups associated with a listener.</p>
 *             </dd>
 *             <dt>Endpoint group</dt>
 *             <dd>
 *                <p>Each endpoint group is associated with a specific AWS Region. Endpoint groups include one or
 * 					more endpoints in the Region. With a standard accelerator, you can increase or reduce the percentage of
 * 					traffic that would be otherwise directed to an endpoint group by adjusting a
 * 					setting called a <i>traffic dial</i>. The traffic dial lets
 * 					you easily do performance testing or blue/green deployment testing, for example, for new
 * 					releases across different AWS Regions. </p>
 * 				        </dd>
 *             <dt>Endpoint</dt>
 *             <dd>
 *                <p>An endpoint is a resource that Global Accelerator directs traffic to.</p>
 * 					          <p>Endpoints for standard accelerators can be Network Load Balancers, Application Load Balancers, Amazon EC2 instances, or Elastic IP
 * 						addresses. An Application Load Balancer endpoint can be internet-facing or internal. Traffic for
 * 						standard accelerators is routed to endpoints based on the health of the
 * 						endpoint along with configuration options that you choose, such as endpoint
 * 						weights. For each endpoint, you can configure weights, which are numbers
 * 						that you can use to specify the proportion of traffic to route to each one.
 * 						This can be useful, for example, to do performance testing within a
 * 						Region.</p>
 * 					          <p>Endpoints for custom routing accelerators are virtual private cloud (VPC) subnets with one
 * 						or many EC2 instances.</p>
 * 				        </dd>
 *          </dl>
 */
export class GlobalAcceleratorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlobalAcceleratorClientResolvedConfig
> {
  /**
   * The resolved configuration of GlobalAcceleratorClient class. This is resolved and normalized from the {@link GlobalAcceleratorClientConfig | constructor configuration interface}.
   */
  readonly config: GlobalAcceleratorClientResolvedConfig;

  constructor(configuration: GlobalAcceleratorClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
  }

  /**
   * Destroy underlying resources, like sockets. It's usually not necessary to do this.
   * However in Node.js, it's best to explicitly shut down the client's agent when it is no longer needed.
   * Otherwise, sockets might stay open for quite a long time before the server terminates them.
   */
  destroy(): void {
    super.destroy();
  }
}
