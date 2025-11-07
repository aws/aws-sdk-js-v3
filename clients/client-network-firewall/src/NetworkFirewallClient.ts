// smithy-typescript generated code
import {
  getHostHeaderPlugin,
  HostHeaderInputConfig,
  HostHeaderResolvedConfig,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  getUserAgentPlugin,
  resolveUserAgentConfig,
  UserAgentInputConfig,
  UserAgentResolvedConfig,
} from "@aws-sdk/middleware-user-agent";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import { EndpointInputConfig, EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/middleware-endpoint";
import { getRetryPlugin, resolveRetryConfig, RetryInputConfig, RetryResolvedConfig } from "@smithy/middleware-retry";
import { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  Client as __Client,
  DefaultsMode as __DefaultsMode,
  SmithyConfiguration as __SmithyConfiguration,
  SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
} from "@smithy/smithy-client";
import {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  ClientProtocol,
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  HttpRequest,
  HttpResponse,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultNetworkFirewallHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  AcceptNetworkFirewallTransitGatewayAttachmentCommandInput,
  AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/AcceptNetworkFirewallTransitGatewayAttachmentCommand";
import {
  AssociateAvailabilityZonesCommandInput,
  AssociateAvailabilityZonesCommandOutput,
} from "./commands/AssociateAvailabilityZonesCommand";
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
import {
  CreateTLSInspectionConfigurationCommandInput,
  CreateTLSInspectionConfigurationCommandOutput,
} from "./commands/CreateTLSInspectionConfigurationCommand";
import {
  CreateVpcEndpointAssociationCommandInput,
  CreateVpcEndpointAssociationCommandOutput,
} from "./commands/CreateVpcEndpointAssociationCommand";
import { DeleteFirewallCommandInput, DeleteFirewallCommandOutput } from "./commands/DeleteFirewallCommand";
import {
  DeleteFirewallPolicyCommandInput,
  DeleteFirewallPolicyCommandOutput,
} from "./commands/DeleteFirewallPolicyCommand";
import {
  DeleteNetworkFirewallTransitGatewayAttachmentCommandInput,
  DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/DeleteNetworkFirewallTransitGatewayAttachmentCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import {
  DeleteTLSInspectionConfigurationCommandInput,
  DeleteTLSInspectionConfigurationCommandOutput,
} from "./commands/DeleteTLSInspectionConfigurationCommand";
import {
  DeleteVpcEndpointAssociationCommandInput,
  DeleteVpcEndpointAssociationCommandOutput,
} from "./commands/DeleteVpcEndpointAssociationCommand";
import { DescribeFirewallCommandInput, DescribeFirewallCommandOutput } from "./commands/DescribeFirewallCommand";
import {
  DescribeFirewallMetadataCommandInput,
  DescribeFirewallMetadataCommandOutput,
} from "./commands/DescribeFirewallMetadataCommand";
import {
  DescribeFirewallPolicyCommandInput,
  DescribeFirewallPolicyCommandOutput,
} from "./commands/DescribeFirewallPolicyCommand";
import {
  DescribeFlowOperationCommandInput,
  DescribeFlowOperationCommandOutput,
} from "./commands/DescribeFlowOperationCommand";
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
  DescribeRuleGroupMetadataCommandInput,
  DescribeRuleGroupMetadataCommandOutput,
} from "./commands/DescribeRuleGroupMetadataCommand";
import {
  DescribeRuleGroupSummaryCommandInput,
  DescribeRuleGroupSummaryCommandOutput,
} from "./commands/DescribeRuleGroupSummaryCommand";
import {
  DescribeTLSInspectionConfigurationCommandInput,
  DescribeTLSInspectionConfigurationCommandOutput,
} from "./commands/DescribeTLSInspectionConfigurationCommand";
import {
  DescribeVpcEndpointAssociationCommandInput,
  DescribeVpcEndpointAssociationCommandOutput,
} from "./commands/DescribeVpcEndpointAssociationCommand";
import {
  DisassociateAvailabilityZonesCommandInput,
  DisassociateAvailabilityZonesCommandOutput,
} from "./commands/DisassociateAvailabilityZonesCommand";
import {
  DisassociateSubnetsCommandInput,
  DisassociateSubnetsCommandOutput,
} from "./commands/DisassociateSubnetsCommand";
import {
  GetAnalysisReportResultsCommandInput,
  GetAnalysisReportResultsCommandOutput,
} from "./commands/GetAnalysisReportResultsCommand";
import {
  ListAnalysisReportsCommandInput,
  ListAnalysisReportsCommandOutput,
} from "./commands/ListAnalysisReportsCommand";
import {
  ListFirewallPoliciesCommandInput,
  ListFirewallPoliciesCommandOutput,
} from "./commands/ListFirewallPoliciesCommand";
import { ListFirewallsCommandInput, ListFirewallsCommandOutput } from "./commands/ListFirewallsCommand";
import {
  ListFlowOperationResultsCommandInput,
  ListFlowOperationResultsCommandOutput,
} from "./commands/ListFlowOperationResultsCommand";
import { ListFlowOperationsCommandInput, ListFlowOperationsCommandOutput } from "./commands/ListFlowOperationsCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTLSInspectionConfigurationsCommandInput,
  ListTLSInspectionConfigurationsCommandOutput,
} from "./commands/ListTLSInspectionConfigurationsCommand";
import {
  ListVpcEndpointAssociationsCommandInput,
  ListVpcEndpointAssociationsCommandOutput,
} from "./commands/ListVpcEndpointAssociationsCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import {
  RejectNetworkFirewallTransitGatewayAttachmentCommandInput,
  RejectNetworkFirewallTransitGatewayAttachmentCommandOutput,
} from "./commands/RejectNetworkFirewallTransitGatewayAttachmentCommand";
import {
  StartAnalysisReportCommandInput,
  StartAnalysisReportCommandOutput,
} from "./commands/StartAnalysisReportCommand";
import { StartFlowCaptureCommandInput, StartFlowCaptureCommandOutput } from "./commands/StartFlowCaptureCommand";
import { StartFlowFlushCommandInput, StartFlowFlushCommandOutput } from "./commands/StartFlowFlushCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAvailabilityZoneChangeProtectionCommandInput,
  UpdateAvailabilityZoneChangeProtectionCommandOutput,
} from "./commands/UpdateAvailabilityZoneChangeProtectionCommand";
import {
  UpdateFirewallAnalysisSettingsCommandInput,
  UpdateFirewallAnalysisSettingsCommandOutput,
} from "./commands/UpdateFirewallAnalysisSettingsCommand";
import {
  UpdateFirewallDeleteProtectionCommandInput,
  UpdateFirewallDeleteProtectionCommandOutput,
} from "./commands/UpdateFirewallDeleteProtectionCommand";
import {
  UpdateFirewallDescriptionCommandInput,
  UpdateFirewallDescriptionCommandOutput,
} from "./commands/UpdateFirewallDescriptionCommand";
import {
  UpdateFirewallEncryptionConfigurationCommandInput,
  UpdateFirewallEncryptionConfigurationCommandOutput,
} from "./commands/UpdateFirewallEncryptionConfigurationCommand";
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
import {
  UpdateTLSInspectionConfigurationCommandInput,
  UpdateTLSInspectionConfigurationCommandOutput,
} from "./commands/UpdateTLSInspectionConfigurationCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { resolveRuntimeExtensions, RuntimeExtension, RuntimeExtensionsConfig } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | AcceptNetworkFirewallTransitGatewayAttachmentCommandInput
  | AssociateAvailabilityZonesCommandInput
  | AssociateFirewallPolicyCommandInput
  | AssociateSubnetsCommandInput
  | CreateFirewallCommandInput
  | CreateFirewallPolicyCommandInput
  | CreateRuleGroupCommandInput
  | CreateTLSInspectionConfigurationCommandInput
  | CreateVpcEndpointAssociationCommandInput
  | DeleteFirewallCommandInput
  | DeleteFirewallPolicyCommandInput
  | DeleteNetworkFirewallTransitGatewayAttachmentCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteTLSInspectionConfigurationCommandInput
  | DeleteVpcEndpointAssociationCommandInput
  | DescribeFirewallCommandInput
  | DescribeFirewallMetadataCommandInput
  | DescribeFirewallPolicyCommandInput
  | DescribeFlowOperationCommandInput
  | DescribeLoggingConfigurationCommandInput
  | DescribeResourcePolicyCommandInput
  | DescribeRuleGroupCommandInput
  | DescribeRuleGroupMetadataCommandInput
  | DescribeRuleGroupSummaryCommandInput
  | DescribeTLSInspectionConfigurationCommandInput
  | DescribeVpcEndpointAssociationCommandInput
  | DisassociateAvailabilityZonesCommandInput
  | DisassociateSubnetsCommandInput
  | GetAnalysisReportResultsCommandInput
  | ListAnalysisReportsCommandInput
  | ListFirewallPoliciesCommandInput
  | ListFirewallsCommandInput
  | ListFlowOperationResultsCommandInput
  | ListFlowOperationsCommandInput
  | ListRuleGroupsCommandInput
  | ListTLSInspectionConfigurationsCommandInput
  | ListTagsForResourceCommandInput
  | ListVpcEndpointAssociationsCommandInput
  | PutResourcePolicyCommandInput
  | RejectNetworkFirewallTransitGatewayAttachmentCommandInput
  | StartAnalysisReportCommandInput
  | StartFlowCaptureCommandInput
  | StartFlowFlushCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAvailabilityZoneChangeProtectionCommandInput
  | UpdateFirewallAnalysisSettingsCommandInput
  | UpdateFirewallDeleteProtectionCommandInput
  | UpdateFirewallDescriptionCommandInput
  | UpdateFirewallEncryptionConfigurationCommandInput
  | UpdateFirewallPolicyChangeProtectionCommandInput
  | UpdateFirewallPolicyCommandInput
  | UpdateLoggingConfigurationCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateSubnetChangeProtectionCommandInput
  | UpdateTLSInspectionConfigurationCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AcceptNetworkFirewallTransitGatewayAttachmentCommandOutput
  | AssociateAvailabilityZonesCommandOutput
  | AssociateFirewallPolicyCommandOutput
  | AssociateSubnetsCommandOutput
  | CreateFirewallCommandOutput
  | CreateFirewallPolicyCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateTLSInspectionConfigurationCommandOutput
  | CreateVpcEndpointAssociationCommandOutput
  | DeleteFirewallCommandOutput
  | DeleteFirewallPolicyCommandOutput
  | DeleteNetworkFirewallTransitGatewayAttachmentCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteTLSInspectionConfigurationCommandOutput
  | DeleteVpcEndpointAssociationCommandOutput
  | DescribeFirewallCommandOutput
  | DescribeFirewallMetadataCommandOutput
  | DescribeFirewallPolicyCommandOutput
  | DescribeFlowOperationCommandOutput
  | DescribeLoggingConfigurationCommandOutput
  | DescribeResourcePolicyCommandOutput
  | DescribeRuleGroupCommandOutput
  | DescribeRuleGroupMetadataCommandOutput
  | DescribeRuleGroupSummaryCommandOutput
  | DescribeTLSInspectionConfigurationCommandOutput
  | DescribeVpcEndpointAssociationCommandOutput
  | DisassociateAvailabilityZonesCommandOutput
  | DisassociateSubnetsCommandOutput
  | GetAnalysisReportResultsCommandOutput
  | ListAnalysisReportsCommandOutput
  | ListFirewallPoliciesCommandOutput
  | ListFirewallsCommandOutput
  | ListFlowOperationResultsCommandOutput
  | ListFlowOperationsCommandOutput
  | ListRuleGroupsCommandOutput
  | ListTLSInspectionConfigurationsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListVpcEndpointAssociationsCommandOutput
  | PutResourcePolicyCommandOutput
  | RejectNetworkFirewallTransitGatewayAttachmentCommandOutput
  | StartAnalysisReportCommandOutput
  | StartFlowCaptureCommandOutput
  | StartFlowFlushCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAvailabilityZoneChangeProtectionCommandOutput
  | UpdateFirewallAnalysisSettingsCommandOutput
  | UpdateFirewallDeleteProtectionCommandOutput
  | UpdateFirewallDescriptionCommandOutput
  | UpdateFirewallEncryptionConfigurationCommandOutput
  | UpdateFirewallPolicyChangeProtectionCommandOutput
  | UpdateFirewallPolicyCommandOutput
  | UpdateLoggingConfigurationCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateSubnetChangeProtectionCommandOutput
  | UpdateTLSInspectionConfigurationCommandOutput;

/**
 * @public
 */
export interface ClientDefaults extends Partial<__SmithyConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use or its constructor options. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandlerUserInput;

  /**
   * A constructor for a class implementing the {@link @smithy/types#ChecksumConstructor} interface
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
   * Disable dynamically changing the endpoint of the client based on the hostPrefix
   * trait of an operation.
   */
  disableHostPrefix?: boolean;

  /**
   * Unique service identifier.
   * @internal
   */
  serviceId?: string;

  /**
   * Enables IPv6/IPv4 dualstack endpoint.
   */
  useDualstackEndpoint?: boolean | __Provider<boolean>;

  /**
   * Enables FIPS compatible endpoints.
   */
  useFipsEndpoint?: boolean | __Provider<boolean>;

  /**
   * The AWS region to which this client will send requests
   */
  region?: string | __Provider<string>;

  /**
   * Setting a client profile is similar to setting a value for the
   * AWS_PROFILE environment variable. Setting a profile on a client
   * in code only affects the single client instance, unlike AWS_PROFILE.
   *
   * When set, and only for environments where an AWS configuration
   * file exists, fields configurable by this file will be retrieved
   * from the specified profile within that file.
   * Conflicting code configuration and environment variables will
   * still have higher priority.
   *
   * For client credential resolution that involves checking the AWS
   * configuration file, the client's profile (this value) will be
   * used unless a different profile is set in the credential
   * provider options.
   *
   */
  profile?: string;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;

  /**
   * Default credentials provider; Not available in browser runtime.
   * @deprecated
   * @internal
   */
  credentialDefaultProvider?: (input: any) => AwsCredentialIdentityProvider;

  /**
   * Value for how many times a request will be made at most in case of retry.
   */
  maxAttempts?: number | __Provider<number>;

  /**
   * Specifies which retry algorithm to use.
   * @see https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-smithy-util-retry/Enum/RETRY_MODES/
   *
   */
  retryMode?: string | __Provider<string>;

  /**
   * Optional logger for logging debug/info/warn/error.
   */
  logger?: __Logger;

  /**
   * Optional extensions
   */
  extensions?: RuntimeExtension[];

  /**
   * The protocol controlling the message type (e.g. HTTP) and format (e.g. JSON)
   * may be overridden. A default will always be set by the client.
   * Available options depend on the service's supported protocols and will not be validated by
   * the client.
   * @alpha
   *
   */
  protocol?: ClientProtocol<HttpRequest, HttpResponse>;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type NetworkFirewallClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of NetworkFirewallClient class constructor that set the region, credentials and other options.
 */
export interface NetworkFirewallClientConfig extends NetworkFirewallClientConfigType {}

/**
 * @public
 */
export type NetworkFirewallClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of NetworkFirewallClient class. This is resolved and normalized from the {@link NetworkFirewallClientConfig | constructor configuration interface}.
 */
export interface NetworkFirewallClientResolvedConfig extends NetworkFirewallClientResolvedConfigType {}

/**
 * <p>This is the API Reference for Network Firewall. This guide is for developers who need
 *          detailed information about the Network Firewall API actions, data types, and errors. </p>
 *          <p>The REST API requires you to handle connection details, such as calculating
 *                signatures, handling request retries, and error handling. For general information
 *                about using the Amazon Web Services REST APIs, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-apis.html">Amazon Web Services APIs</a>. </p>
 *          <p>To view the complete list of Amazon Web Services Regions where Network Firewall is available, see
 *          <a href="https://docs.aws.amazon.com/general/latest/gr/network-firewall.html">Service
 *             endpoints and quotas</a> in the <i>Amazon Web Services General
 *                Reference</i>.
 *       </p>
 *          <p>To access Network Firewall using the IPv4 REST API endpoint:
 *                   <code>https://network-firewall.<region>.amazonaws.com </code>
 *          </p>
 *          <p>To access Network Firewall using the Dualstack (IPv4 and IPv6) REST API endpoint:
 *                <code>https://network-firewall.<region>.aws.api </code>
 *          </p>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to
 *                the programming language or platform that you're using. For more information, see
 *                <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>For descriptions of Network Firewall features, including and step-by-step
 *                instructions on how to use them through the Network Firewall console, see the <a href="https://docs.aws.amazon.com/network-firewall/latest/developerguide/">Network Firewall Developer
 *                   Guide</a>.</p>
 *          <p>Network Firewall is a stateful, managed, network firewall and intrusion detection and
 *          prevention service for Amazon Virtual Private Cloud (Amazon VPC). With Network Firewall, you can filter traffic at the
 *          perimeter of your VPC. This includes filtering traffic going to and coming from an internet
 *          gateway, NAT gateway, or over VPN or Direct Connect. Network Firewall uses rules that are compatible
 *       with Suricata, a free, open source network analysis and threat detection engine.
 *       Network Firewall supports Suricata version 7.0.3. For information about Suricata,
 *           see the <a href="https://suricata.io/">Suricata website</a> and the
 *           <a href="https://suricata.readthedocs.io/en/suricata-7.0.3/">Suricata User Guide</a>. </p>
 *          <p>You can use Network Firewall to monitor and protect your VPC traffic in a number of ways.
 *          The following are just a few examples: </p>
 *          <ul>
 *             <li>
 *                <p>Allow domains or IP addresses for known Amazon Web Services service endpoints, such as Amazon S3, and
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
 *                <p>In Network Firewall, define the firewall behavior as follows: </p>
 *                <ol>
 *                   <li>
 *                      <p>Create stateless and stateful rule groups,
 *                  to define the components of the network traffic filtering behavior that you want your firewall to have. </p>
 *                   </li>
 *                   <li>
 *                      <p>Create a firewall policy that uses your rule groups and
 *                      specifies additional default traffic filtering behavior. </p>
 *                   </li>
 *                </ol>
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
 *          <p>After your firewall is established, you can add firewall endpoints for new Availability Zones by following the prior steps for the Amazon VPC setup and
 *       firewall subnet definitions. You can also add endpoints to Availability Zones that you're using in the firewall, either for the same VPC
 *           or for another VPC, by following the prior steps for the Amazon VPC setup, and defining the new VPC subnets as VPC endpoint associations. </p>
 * @public
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

  constructor(...[configuration]: __CheckOptionalClientConfig<NetworkFirewallClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    super(_config_0 as any);
    this.initConfig = _config_0;
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    this.config = _config_8;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultNetworkFirewallHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: NetworkFirewallClientResolvedConfig) =>
          new DefaultIdentityProviderConfig({
            "aws.auth#sigv4": config.credentials,
          }),
      })
    );
    this.middlewareStack.use(getHttpSigningPlugin(this.config));
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
