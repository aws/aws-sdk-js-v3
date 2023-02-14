// smithy-typescript generated code
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@aws-sdk/config-resolver";
import { getContentLengthPlugin } from "@aws-sdk/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@aws-sdk/middleware-endpoint";
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@aws-sdk/middleware-retry";
import {
  AwsAuthInputConfig,
  AwsAuthResolvedConfig,
  getAwsAuthPlugin,
  resolveAwsAuthConfig,
} from "@aws-sdk/middleware-signing";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { HttpHandler as __HttpHandler } from "@aws-sdk/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@aws-sdk/smithy-client";
import {
  BodyLengthCalculator as __BodyLengthCalculator,
  Checksum as __Checksum,
  ChecksumConstructor as __ChecksumConstructor,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

import {
  AddCustomRoutingEndpointsCommandInput,
  AddCustomRoutingEndpointsCommandOutput,
} from "./commands/AddCustomRoutingEndpointsCommand";
import { AddEndpointsCommandInput, AddEndpointsCommandOutput } from "./commands/AddEndpointsCommand";
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
import { RemoveEndpointsCommandInput, RemoveEndpointsCommandOutput } from "./commands/RemoveEndpointsCommand";
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
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AddCustomRoutingEndpointsCommandInput
  | AddEndpointsCommandInput
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
  | RemoveEndpointsCommandInput
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
  | AddEndpointsCommandOutput
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
  | RemoveEndpointsCommandOutput
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
   * A constructor for a class implementing the {@link __Checksum} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __ChecksumConstructor | __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: __BodyLengthCalculator;

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
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

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
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * The {@link __DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

type GlobalAcceleratorClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of GlobalAcceleratorClient class constructor that set the region, credentials and other options.
 */
export interface GlobalAcceleratorClientConfig extends GlobalAcceleratorClientConfigType {}

type GlobalAcceleratorClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of GlobalAcceleratorClient class. This is resolved and normalized from the {@link GlobalAcceleratorClientConfig | constructor configuration interface}.
 */
export interface GlobalAcceleratorClientResolvedConfig extends GlobalAcceleratorClientResolvedConfigType {}

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
    const _config_0 = __getRuntimeConfig(configuration);
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveRetryConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveAwsAuthConfig(_config_5);
    const _config_7 = resolveUserAgentConfig(_config_6);
    super(_config_7);
    this.config = _config_7;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
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
