import {
  AssociateFirewallPolicyCommandInput,
  AssociateFirewallPolicyCommandOutput,
} from "./commands/AssociateFirewallPolicyCommand";
import { AssociateSubnetsCommandInput, AssociateSubnetsCommandOutput } from "./commands/AssociateSubnetsCommand";
import { CreateFirewallCommandInput, CreateFirewallCommandOutput } from "./commands/CreateFirewallCommand";
import {
  CreateFirewallPolicyCommandInput,
  CreateFirewallPolicyCommandOutput,
} from "./commands/CreateFirewallPolicyCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import { DeleteFirewallCommandInput, DeleteFirewallCommandOutput } from "./commands/DeleteFirewallCommand";
import {
  DeleteFirewallPolicyCommandInput,
  DeleteFirewallPolicyCommandOutput,
} from "./commands/DeleteFirewallPolicyCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import { DescribeFirewallCommandInput, DescribeFirewallCommandOutput } from "./commands/DescribeFirewallCommand";
import {
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
} from "./commands/DescribeFirewallPolicyCommand";
import {
  DescribeLoggingConfigurationCommandInput,
  DescribeLoggingConfigurationCommandOutput,
} from "./commands/DescribeLoggingConfigurationCommand";
import {
  DescribeResourcePolicyCommandInput,
  DescribeResourcePolicyCommandOutput,
} from "./commands/DescribeResourcePolicyCommand";
import { DescribeRuleGroupCommandInput, DescribeRuleGroupCommandOutput } from "./commands/DescribeRuleGroupCommand";
import {
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
} from "./commands/DisassociateSubnetsCommand";
import {
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "./commands/ListFirewallPoliciesCommand";
import { ListFirewallsCommandInput, ListFirewallsCommandOutput } from "./commands/ListFirewallsCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateFirewallDeleteProtectionCommandInput,
  UpdateFirewallDeleteProtectionCommandOutput,
} from "./commands/UpdateFirewallDeleteProtectionCommand";
import {
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
} from "./commands/UpdateFirewallDescriptionCommand";
import {
  UpdateFirewallPolicyChangeProtectionCommandInput,
  UpdateFirewallPolicyChangeProtectionCommandOutput,
} from "./commands/UpdateFirewallPolicyChangeProtectionCommand";
import {
  UpdateFirewallPolicyCommandInput,
  UpdateFirewallPolicyCommandOutput,
} from "./commands/UpdateFirewallPolicyCommand";
import {
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSubnetChangeProtectionCommandInput,
  UpdateSubnetChangeProtectionCommandOutput,
} from "./commands/UpdateSubnetChangeProtectionCommand";
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
  | AssociateFirewallPolicyCommandInput
  | AssociateSubnetsCommandInput
  | CreateFirewallCommandInput
  | CreateFirewallPolicyCommandInput
  | CreateRuleGroupCommandInput
  | DeleteFirewallCommandInput
  | DeleteFirewallPolicyCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRuleGroupCommandInput
  | DescribeFirewallCommandInput
  | DescribeFirewallPolicyCommandInput
  | DescribeLoggingConfigurationCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeRuleGroupCommandInput
  | DisassociateSubnetsCommandInput
  | ListFirewallPoliciesCommandInput
  | ListFirewallsCommandInput
  | ListRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | PutResourcePolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateFirewallDeleteProtectionCommandInput
  | UpdateFirewallDescriptionCommandInput
  | UpdateFirewallPolicyChangeProtectionCommandInput
  | UpdateFirewallPolicyCommandInput
  | UpdateLoggingConfigurationCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateSubnetChangeProtectionCommandInput;

export type ServiceOutputTypes =
  | AssociateFirewallPolicyCommandOutput
  | AssociateSubnetsCommandOutput
  | CreateFirewallCommandOutput
  | CreateFirewallPolicyCommandOutput
  | CreateRuleGroupCommandOutput
  | DeleteFirewallCommandOutput
  | DeleteFirewallPolicyCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRuleGroupCommandOutput
  | DescribeFirewallCommandOutput
  | DescribeFirewallPolicyCommandOutput
  | DescribeLoggingConfigurationCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeRuleGroupCommandOutput
  | DisassociateSubnetsCommandOutput
  | ListFirewallPoliciesCommandOutput
  | ListFirewallsCommandOutput
  | ListRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutResourcePolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateFirewallDeleteProtectionCommandOutput
  | UpdateFirewallDescriptionCommandOutput
  | UpdateFirewallPolicyChangeProtectionCommandOutput
  | UpdateFirewallPolicyCommandOutput
  | UpdateLoggingConfigurationCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateSubnetChangeProtectionCommandOutput;

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

type NetworkFirewallClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of NetworkFirewallClient class constructor that set the region, credentials and other options.
 */
export interface NetworkFirewallClientConfig extends NetworkFirewallClientConfigType {}

type NetworkFirewallClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of NetworkFirewallClient class. This is resolved and normalized from the {@link NetworkFirewallClientConfig | constructor configuration interface}.
 */
export interface NetworkFirewallClientResolvedConfig extends NetworkFirewallClientResolvedConfigType {}

/**
 * <p>This is the API Reference for AWS Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <ul>
 *             <li>
 *                <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the AWS REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">AWS APIs</a>. </p>
 *                <p>To access Network Firewall using the REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Alternatively, you can use one of the AWS SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                   <a href="http://aws.amazon.com/tools/#SDKs">AWS SDKs</a>.</p>
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
 *          gateway, NAT gateway, or over VPN or AWS Direct Connect. Network Firewall uses rules that are compatible
 *           with Suricata, a free, open source intrusion detection system (IDS) engine. For information about Suricata,
 *           see the <a href="https://suricata-ids.org/">Suricata website</a>.</p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known AWS service endpoints, such as Amazon S3, and
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
export class NetworkFirewallClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NetworkFirewallClientResolvedConfig
> {
  /**
   * The resolved configuration of NetworkFirewallClient class. This is resolved and normalized from the {@link NetworkFirewallClientConfig | constructor configuration interface}.
   */
  readonly config: NetworkFirewallClientResolvedConfig;

  constructor(configuration: NetworkFirewallClientConfig) {
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
