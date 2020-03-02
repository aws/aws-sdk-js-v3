import {
  CreateAcceleratorCommandInput,
  CreateAcceleratorCommandOutput
} from "./commands/CreateAcceleratorCommand";
import {
  CreateEndpointGroupCommandInput,
  CreateEndpointGroupCommandOutput
} from "./commands/CreateEndpointGroupCommand";
import {
  CreateListenerCommandInput,
  CreateListenerCommandOutput
} from "./commands/CreateListenerCommand";
import {
  DeleteAcceleratorCommandInput,
  DeleteAcceleratorCommandOutput
} from "./commands/DeleteAcceleratorCommand";
import {
  DeleteEndpointGroupCommandInput,
  DeleteEndpointGroupCommandOutput
} from "./commands/DeleteEndpointGroupCommand";
import {
  DeleteListenerCommandInput,
  DeleteListenerCommandOutput
} from "./commands/DeleteListenerCommand";
import {
  DescribeAcceleratorAttributesCommandInput,
  DescribeAcceleratorAttributesCommandOutput
} from "./commands/DescribeAcceleratorAttributesCommand";
import {
  DescribeAcceleratorCommandInput,
  DescribeAcceleratorCommandOutput
} from "./commands/DescribeAcceleratorCommand";
import {
  DescribeEndpointGroupCommandInput,
  DescribeEndpointGroupCommandOutput
} from "./commands/DescribeEndpointGroupCommand";
import {
  DescribeListenerCommandInput,
  DescribeListenerCommandOutput
} from "./commands/DescribeListenerCommand";
import {
  ListAcceleratorsCommandInput,
  ListAcceleratorsCommandOutput
} from "./commands/ListAcceleratorsCommand";
import {
  ListEndpointGroupsCommandInput,
  ListEndpointGroupsCommandOutput
} from "./commands/ListEndpointGroupsCommand";
import {
  ListListenersCommandInput,
  ListListenersCommandOutput
} from "./commands/ListListenersCommand";
import {
  UpdateAcceleratorAttributesCommandInput,
  UpdateAcceleratorAttributesCommandOutput
} from "./commands/UpdateAcceleratorAttributesCommand";
import {
  UpdateAcceleratorCommandInput,
  UpdateAcceleratorCommandOutput
} from "./commands/UpdateAcceleratorCommand";
import {
  UpdateEndpointGroupCommandInput,
  UpdateEndpointGroupCommandOutput
} from "./commands/UpdateEndpointGroupCommand";
import {
  UpdateListenerCommandInput,
  UpdateListenerCommandOutput
} from "./commands/UpdateListenerCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
import {
  EndpointsInputConfig,
  EndpointsResolvedConfig,
  RegionInputConfig,
  RegionResolvedConfig,
  resolveEndpointsConfig,
  resolveRegionConfig
} from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import {
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig
} from "@aws-sdk/middleware-host-header";
import {
  RetryInputConfig,
  RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig
} from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig
} from "@aws-sdk/middleware-signing";
import {
  UserAgentInputConfig,
  UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration
} from "@aws-sdk/smithy-client";
import {
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | CreateAcceleratorCommandInput
  | CreateEndpointGroupCommandInput
  | CreateListenerCommandInput
  | DeleteAcceleratorCommandInput
  | DeleteEndpointGroupCommandInput
  | DeleteListenerCommandInput
  | DescribeAcceleratorAttributesCommandInput
  | DescribeAcceleratorCommandInput
  | DescribeEndpointGroupCommandInput
  | DescribeListenerCommandInput
  | ListAcceleratorsCommandInput
  | ListEndpointGroupsCommandInput
  | ListListenersCommandInput
  | UpdateAcceleratorAttributesCommandInput
  | UpdateAcceleratorCommandInput
  | UpdateEndpointGroupCommandInput
  | UpdateListenerCommandInput;

export type ServiceOutputTypes =
  | CreateAcceleratorCommandOutput
  | CreateEndpointGroupCommandOutput
  | CreateListenerCommandOutput
  | DeleteAcceleratorCommandOutput
  | DeleteEndpointGroupCommandOutput
  | DeleteListenerCommandOutput
  | DescribeAcceleratorAttributesCommandOutput
  | DescribeAcceleratorCommandOutput
  | DescribeEndpointGroupCommandOutput
  | DescribeListenerCommandOutput
  | ListAcceleratorsCommandOutput
  | ListEndpointGroupsCommandOutput
  | ListListenersCommandOutput
  | UpdateAcceleratorAttributesCommandOutput
  | UpdateAcceleratorCommandOutput
  | UpdateEndpointGroupCommandOutput
  | UpdateListenerCommandOutput;

export interface ClientDefaults
  extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the @aws-sdk/types.Hash interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   */
  bodyLengthChecker?: (body: any) => number | undefined;

  /**
   * A function that converts a stream into an array of bytes.
   */
  streamCollector?: __StreamCollector;

  /**
   * The function that will be used to convert a base64-encoded string to a byte array
   */
  base64Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a base64-encoded string
   */
  base64Encoder?: __Encoder;

  /**
   * The function that will be used to convert a UTF8-encoded string to a byte array
   */
  utf8Decoder?: __Decoder;

  /**
   * The function that will be used to convert binary data to a UTF-8 encoded string
   */
  utf8Encoder?: __Encoder;

  /**
   * The string that will be used to populate default value in 'User-Agent' header
   */
  defaultUserAgent?: string;

  /**
   * The runtime environment
   */
  runtime?: string;

  /**
   * Disable dyanamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * The service name with which to sign requests.
   */
  signingName?: string;

  /**
   * Default credentials provider; Not available in browser runtime
   */
  credentialDefaultProvider?: (input: any) => __Provider<__Credentials>;

  /**
   * Provider function that return promise of a region string
   */
  regionDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type GlobalAcceleratorClientConfig = Partial<
  __SmithyConfiguration<__HttpHandlerOptions>
> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type GlobalAcceleratorClientResolvedConfig = __SmithyResolvedConfiguration<
  __HttpHandlerOptions
> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

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
export class GlobalAcceleratorClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  GlobalAcceleratorClientResolvedConfig
> {
  readonly config: GlobalAcceleratorClientResolvedConfig;

  constructor(configuration: GlobalAcceleratorClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration
    };
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveAwsAuthConfig(_config_2);
    let _config_4 = resolveRetryConfig(_config_3);
    let _config_5 = resolveUserAgentConfig(_config_4);
    let _config_6 = resolveHostHeaderConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getAwsAuthPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
  }

  destroy(): void {}
}
