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

import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand";
import { CheckCapacityCommandInput, CheckCapacityCommandOutput } from "./commands/CheckCapacityCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand";
import {
  DeleteFirewallManagerRuleGroupsCommandInput,
  DeleteFirewallManagerRuleGroupsCommandOutput,
} from "./commands/DeleteFirewallManagerRuleGroupsCommand";
import { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand";
import {
  DescribeManagedRuleGroupCommandInput,
  DescribeManagedRuleGroupCommandOutput,
} from "./commands/DescribeManagedRuleGroupCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand";
import {
  GenerateMobileSdkReleaseUrlCommandInput,
  GenerateMobileSdkReleaseUrlCommandOutput,
} from "./commands/GenerateMobileSdkReleaseUrlCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import { GetManagedRuleSetCommandInput, GetManagedRuleSetCommandOutput } from "./commands/GetManagedRuleSetCommand";
import {
  GetMobileSdkReleaseCommandInput,
  GetMobileSdkReleaseCommandOutput,
} from "./commands/GetMobileSdkReleaseCommand";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import {
  GetRateBasedStatementManagedKeysCommandInput,
  GetRateBasedStatementManagedKeysCommandOutput,
} from "./commands/GetRateBasedStatementManagedKeysCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand";
import {
  ListAvailableManagedRuleGroupsCommandInput,
  ListAvailableManagedRuleGroupsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupsCommand";
import {
  ListAvailableManagedRuleGroupVersionsCommandInput,
  ListAvailableManagedRuleGroupVersionsCommandOutput,
} from "./commands/ListAvailableManagedRuleGroupVersionsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import {
  ListManagedRuleSetsCommandInput,
  ListManagedRuleSetsCommandOutput,
} from "./commands/ListManagedRuleSetsCommand";
import {
  ListMobileSdkReleasesCommandInput,
  ListMobileSdkReleasesCommandOutput,
} from "./commands/ListMobileSdkReleasesCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import {
  PutManagedRuleSetVersionsCommandInput,
  PutManagedRuleSetVersionsCommandOutput,
} from "./commands/PutManagedRuleSetVersionsCommand";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateManagedRuleSetVersionExpiryDateCommandInput,
  UpdateManagedRuleSetVersionExpiryDateCommandOutput,
} from "./commands/UpdateManagedRuleSetVersionExpiryDateCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateWebACLCommandInput
  | CheckCapacityCommandInput
  | CreateIPSetCommandInput
  | CreateRegexPatternSetCommandInput
  | CreateRuleGroupCommandInput
  | CreateWebACLCommandInput
  | DeleteFirewallManagerRuleGroupsCommandInput
  | DeleteIPSetCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeletePermissionPolicyCommandInput
  | DeleteRegexPatternSetCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteWebACLCommandInput
  | DescribeManagedRuleGroupCommandInput
  | DisassociateWebACLCommandInput
  | GenerateMobileSdkReleaseUrlCommandInput
  | GetIPSetCommandInput
  | GetLoggingConfigurationCommandInput
  | GetManagedRuleSetCommandInput
  | GetMobileSdkReleaseCommandInput
  | GetPermissionPolicyCommandInput
  | GetRateBasedStatementManagedKeysCommandInput
  | GetRegexPatternSetCommandInput
  | GetRuleGroupCommandInput
  | GetSampledRequestsCommandInput
  | GetWebACLCommandInput
  | GetWebACLForResourceCommandInput
  | ListAvailableManagedRuleGroupVersionsCommandInput
  | ListAvailableManagedRuleGroupsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListManagedRuleSetsCommandInput
  | ListMobileSdkReleasesCommandInput
  | ListRegexPatternSetsCommandInput
  | ListResourcesForWebACLCommandInput
  | ListRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebACLsCommandInput
  | PutLoggingConfigurationCommandInput
  | PutManagedRuleSetVersionsCommandInput
  | PutPermissionPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateIPSetCommandInput
  | UpdateManagedRuleSetVersionExpiryDateCommandInput
  | UpdateRegexPatternSetCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateWebACLCommandInput;

export type ServiceOutputTypes =
  | AssociateWebACLCommandOutput
  | CheckCapacityCommandOutput
  | CreateIPSetCommandOutput
  | CreateRegexPatternSetCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateWebACLCommandOutput
  | DeleteFirewallManagerRuleGroupsCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeletePermissionPolicyCommandOutput
  | DeleteRegexPatternSetCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteWebACLCommandOutput
  | DescribeManagedRuleGroupCommandOutput
  | DisassociateWebACLCommandOutput
  | GenerateMobileSdkReleaseUrlCommandOutput
  | GetIPSetCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetManagedRuleSetCommandOutput
  | GetMobileSdkReleaseCommandOutput
  | GetPermissionPolicyCommandOutput
  | GetRateBasedStatementManagedKeysCommandOutput
  | GetRegexPatternSetCommandOutput
  | GetRuleGroupCommandOutput
  | GetSampledRequestsCommandOutput
  | GetWebACLCommandOutput
  | GetWebACLForResourceCommandOutput
  | ListAvailableManagedRuleGroupVersionsCommandOutput
  | ListAvailableManagedRuleGroupsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListManagedRuleSetsCommandOutput
  | ListMobileSdkReleasesCommandOutput
  | ListRegexPatternSetsCommandOutput
  | ListResourcesForWebACLCommandOutput
  | ListRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebACLsCommandOutput
  | PutLoggingConfigurationCommandOutput
  | PutManagedRuleSetVersionsCommandOutput
  | PutPermissionPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateManagedRuleSetVersionExpiryDateCommandOutput
  | UpdateRegexPatternSetCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateWebACLCommandOutput;

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

type WAFV2ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of WAFV2Client class constructor that set the region, credentials and other options.
 */
export interface WAFV2ClientConfig extends WAFV2ClientConfigType {}

type WAFV2ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of WAFV2Client class. This is resolved and normalized from the {@link WAFV2ClientConfig | constructor configuration interface}.
 */
export interface WAFV2ClientResolvedConfig extends WAFV2ClientResolvedConfigType {}

/**
 * <fullname>WAF</fullname>
 *          <note>
 *             <p>This is the latest version of the <b>WAF</b> API,
 *             released in November, 2019. The names of the entities that you use to access this API,
 *             like endpoints and namespaces, all have the versioning information added, like "V2" or
 *             "v2", to distinguish from the prior version. We recommend migrating your resources to
 *             this version, because it has a number of significant improvements.</p>
 *             <p>If you used WAF prior to this release, you can't use this WAFV2 API to access any
 *             WAF resources that you created before. You can access your old rules, web ACLs, and
 *             other WAF resources only through the WAF Classic APIs. The WAF Classic APIs
 *             have retained the prior names, endpoints, and namespaces. </p>
 *             <p>For information, including how to migrate your WAF resources to this version,
 *             see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">WAF Developer Guide</a>. </p>
 *          </note>
 *          <p>WAF is a web application firewall that lets you monitor the HTTP and HTTPS
 *          requests that are forwarded to Amazon CloudFront, an Amazon API Gateway REST API, an Application Load Balancer, an AppSync
 *          GraphQL API, or an Amazon Cognito user pool. WAF also lets you control access to your content. Based on conditions that
 *          you specify, such as the IP addresses that requests originate from or the values of query
 *          strings, the Amazon API Gateway REST API, CloudFront distribution, the Application Load Balancer, the AppSync GraphQL
 *          API, or the Amazon Cognito user pool responds to requests either with the requested content or with an HTTP 403 status code
 *          (Forbidden). You also can configure CloudFront to return a custom error page when a request is
 *          blocked.</p>
 *          <p>This API guide is for developers who need detailed information about WAF API actions,
 *          data types, and errors. For detailed information about WAF features and an overview of
 *          how to use WAF, see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/what-is-aws-waf.html">WAF Developer
 *          Guide</a>.</p>
 *          <p>You can make calls using the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/waf.html">WAF endpoints and quotas</a>. </p>
 *          <ul>
 *             <li>
 *                <p>For regional applications, you can use any of the endpoints in the list.
 *                A regional application can be an Application Load Balancer (ALB), an Amazon API Gateway REST API, an AppSync GraphQL API, or an Amazon Cognito user pool. </p>
 *             </li>
 *             <li>
 *                <p>For Amazon CloudFront applications, you must use the API endpoint listed for
 *                US East (N. Virginia): us-east-1.</p>
 *             </li>
 *          </ul>
 *          <p>Alternatively, you can use one of the Amazon Web Services SDKs to access an API that's tailored to the
 *          programming language or platform that you're using. For more information, see <a href="http://aws.amazon.com/tools/#SDKs">Amazon Web Services SDKs</a>.</p>
 *          <p>We currently provide two versions of the WAF API: this API and the prior versions,
 *          the classic WAF APIs. This new API provides the same functionality as the older versions,
 *          with the following major improvements:</p>
 *          <ul>
 *             <li>
 *                <p>You use one API for both global and regional applications. Where you need to
 *                distinguish the scope, you specify a <code>Scope</code> parameter and set it to
 *                   <code>CLOUDFRONT</code> or <code>REGIONAL</code>. </p>
 *             </li>
 *             <li>
 *                <p>You can define a web ACL or rule group with a single call, and update it with a
 *                single call. You define all rule specifications in JSON format, and pass them to your
 *                rule group or web ACL calls.</p>
 *             </li>
 *             <li>
 *                <p>The limits WAF places on the use of rules more closely reflects the cost of
 *                running each type of rule. Rule groups include capacity settings, so you know the
 *                maximum cost of a rule group when you use it.</p>
 *             </li>
 *          </ul>
 */
export class WAFV2Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFV2ClientResolvedConfig
> {
  /**
   * The resolved configuration of WAFV2Client class. This is resolved and normalized from the {@link WAFV2ClientConfig | constructor configuration interface}.
   */
  readonly config: WAFV2ClientResolvedConfig;

  constructor(configuration: WAFV2ClientConfig) {
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
