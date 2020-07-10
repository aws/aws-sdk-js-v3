import { AssociateWebACLCommandInput, AssociateWebACLCommandOutput } from "./commands/AssociateWebACLCommand";
import { CreateByteMatchSetCommandInput, CreateByteMatchSetCommandOutput } from "./commands/CreateByteMatchSetCommand";
import { CreateGeoMatchSetCommandInput, CreateGeoMatchSetCommandOutput } from "./commands/CreateGeoMatchSetCommand";
import { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import {
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "./commands/CreateRateBasedRuleCommand";
import {
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "./commands/CreateRegexMatchSetCommand";
import {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import {
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "./commands/CreateSizeConstraintSetCommand";
import {
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "./commands/CreateSqlInjectionMatchSetCommand";
import { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand";
import { CreateXssMatchSetCommandInput, CreateXssMatchSetCommandOutput } from "./commands/CreateXssMatchSetCommand";
import { DeleteByteMatchSetCommandInput, DeleteByteMatchSetCommandOutput } from "./commands/DeleteByteMatchSetCommand";
import { DeleteGeoMatchSetCommandInput, DeleteGeoMatchSetCommandOutput } from "./commands/DeleteGeoMatchSetCommand";
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
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "./commands/DeleteRateBasedRuleCommand";
import {
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "./commands/DeleteRegexMatchSetCommand";
import {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import {
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "./commands/DeleteSizeConstraintSetCommand";
import {
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "./commands/DeleteSqlInjectionMatchSetCommand";
import { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand";
import { DeleteXssMatchSetCommandInput, DeleteXssMatchSetCommandOutput } from "./commands/DeleteXssMatchSetCommand";
import { DisassociateWebACLCommandInput, DisassociateWebACLCommandOutput } from "./commands/DisassociateWebACLCommand";
import { GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput } from "./commands/GetByteMatchSetCommand";
import { GetChangeTokenCommandInput, GetChangeTokenCommandOutput } from "./commands/GetChangeTokenCommand";
import {
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "./commands/GetChangeTokenStatusCommand";
import { GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput } from "./commands/GetGeoMatchSetCommand";
import { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import { GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput } from "./commands/GetRateBasedRuleCommand";
import {
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "./commands/GetRateBasedRuleManagedKeysCommand";
import { GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput } from "./commands/GetRegexMatchSetCommand";
import { GetRegexPatternSetCommandInput, GetRegexPatternSetCommandOutput } from "./commands/GetRegexPatternSetCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand";
import { GetSampledRequestsCommandInput, GetSampledRequestsCommandOutput } from "./commands/GetSampledRequestsCommand";
import {
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "./commands/GetSizeConstraintSetCommand";
import {
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "./commands/GetSqlInjectionMatchSetCommand";
import { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import {
  GetWebACLForResourceCommandInput,
  GetWebACLForResourceCommandOutput,
} from "./commands/GetWebACLForResourceCommand";
import { GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput } from "./commands/GetXssMatchSetCommand";
import {
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "./commands/ListActivatedRulesInRuleGroupCommand";
import { ListByteMatchSetsCommandInput, ListByteMatchSetsCommandOutput } from "./commands/ListByteMatchSetsCommand";
import { ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput } from "./commands/ListGeoMatchSetsCommand";
import { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import { ListRateBasedRulesCommandInput, ListRateBasedRulesCommandOutput } from "./commands/ListRateBasedRulesCommand";
import { ListRegexMatchSetsCommandInput, ListRegexMatchSetsCommandOutput } from "./commands/ListRegexMatchSetsCommand";
import {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import {
  ListResourcesForWebACLCommandInput,
  ListResourcesForWebACLCommandOutput,
} from "./commands/ListResourcesForWebACLCommand";
import { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "./commands/ListSizeConstraintSetsCommand";
import {
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "./commands/ListSqlInjectionMatchSetsCommand";
import {
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "./commands/ListSubscribedRuleGroupsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import { ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput } from "./commands/ListXssMatchSetsCommand";
import {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateByteMatchSetCommandInput, UpdateByteMatchSetCommandOutput } from "./commands/UpdateByteMatchSetCommand";
import { UpdateGeoMatchSetCommandInput, UpdateGeoMatchSetCommandOutput } from "./commands/UpdateGeoMatchSetCommand";
import { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import {
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "./commands/UpdateRateBasedRuleCommand";
import {
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "./commands/UpdateRegexMatchSetCommand";
import {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import {
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "./commands/UpdateSizeConstraintSetCommand";
import {
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "./commands/UpdateSqlInjectionMatchSetCommand";
import { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand";
import { UpdateXssMatchSetCommandInput, UpdateXssMatchSetCommandOutput } from "./commands/UpdateXssMatchSetCommand";
import { ClientDefaultValues as __ClientDefaultValues } from "./runtimeConfig";
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
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AssociateWebACLCommandInput
  | CreateByteMatchSetCommandInput
  | CreateGeoMatchSetCommandInput
  | CreateIPSetCommandInput
  | CreateRateBasedRuleCommandInput
  | CreateRegexMatchSetCommandInput
  | CreateRegexPatternSetCommandInput
  | CreateRuleCommandInput
  | CreateRuleGroupCommandInput
  | CreateSizeConstraintSetCommandInput
  | CreateSqlInjectionMatchSetCommandInput
  | CreateWebACLCommandInput
  | CreateXssMatchSetCommandInput
  | DeleteByteMatchSetCommandInput
  | DeleteGeoMatchSetCommandInput
  | DeleteIPSetCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeletePermissionPolicyCommandInput
  | DeleteRateBasedRuleCommandInput
  | DeleteRegexMatchSetCommandInput
  | DeleteRegexPatternSetCommandInput
  | DeleteRuleCommandInput
  | DeleteRuleGroupCommandInput
  | DeleteSizeConstraintSetCommandInput
  | DeleteSqlInjectionMatchSetCommandInput
  | DeleteWebACLCommandInput
  | DeleteXssMatchSetCommandInput
  | DisassociateWebACLCommandInput
  | GetByteMatchSetCommandInput
  | GetChangeTokenCommandInput
  | GetChangeTokenStatusCommandInput
  | GetGeoMatchSetCommandInput
  | GetIPSetCommandInput
  | GetLoggingConfigurationCommandInput
  | GetPermissionPolicyCommandInput
  | GetRateBasedRuleCommandInput
  | GetRateBasedRuleManagedKeysCommandInput
  | GetRegexMatchSetCommandInput
  | GetRegexPatternSetCommandInput
  | GetRuleCommandInput
  | GetRuleGroupCommandInput
  | GetSampledRequestsCommandInput
  | GetSizeConstraintSetCommandInput
  | GetSqlInjectionMatchSetCommandInput
  | GetWebACLCommandInput
  | GetWebACLForResourceCommandInput
  | GetXssMatchSetCommandInput
  | ListActivatedRulesInRuleGroupCommandInput
  | ListByteMatchSetsCommandInput
  | ListGeoMatchSetsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListRateBasedRulesCommandInput
  | ListRegexMatchSetsCommandInput
  | ListRegexPatternSetsCommandInput
  | ListResourcesForWebACLCommandInput
  | ListRuleGroupsCommandInput
  | ListRulesCommandInput
  | ListSizeConstraintSetsCommandInput
  | ListSqlInjectionMatchSetsCommandInput
  | ListSubscribedRuleGroupsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebACLsCommandInput
  | ListXssMatchSetsCommandInput
  | PutLoggingConfigurationCommandInput
  | PutPermissionPolicyCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateByteMatchSetCommandInput
  | UpdateGeoMatchSetCommandInput
  | UpdateIPSetCommandInput
  | UpdateRateBasedRuleCommandInput
  | UpdateRegexMatchSetCommandInput
  | UpdateRegexPatternSetCommandInput
  | UpdateRuleCommandInput
  | UpdateRuleGroupCommandInput
  | UpdateSizeConstraintSetCommandInput
  | UpdateSqlInjectionMatchSetCommandInput
  | UpdateWebACLCommandInput
  | UpdateXssMatchSetCommandInput;

export type ServiceOutputTypes =
  | AssociateWebACLCommandOutput
  | CreateByteMatchSetCommandOutput
  | CreateGeoMatchSetCommandOutput
  | CreateIPSetCommandOutput
  | CreateRateBasedRuleCommandOutput
  | CreateRegexMatchSetCommandOutput
  | CreateRegexPatternSetCommandOutput
  | CreateRuleCommandOutput
  | CreateRuleGroupCommandOutput
  | CreateSizeConstraintSetCommandOutput
  | CreateSqlInjectionMatchSetCommandOutput
  | CreateWebACLCommandOutput
  | CreateXssMatchSetCommandOutput
  | DeleteByteMatchSetCommandOutput
  | DeleteGeoMatchSetCommandOutput
  | DeleteIPSetCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeletePermissionPolicyCommandOutput
  | DeleteRateBasedRuleCommandOutput
  | DeleteRegexMatchSetCommandOutput
  | DeleteRegexPatternSetCommandOutput
  | DeleteRuleCommandOutput
  | DeleteRuleGroupCommandOutput
  | DeleteSizeConstraintSetCommandOutput
  | DeleteSqlInjectionMatchSetCommandOutput
  | DeleteWebACLCommandOutput
  | DeleteXssMatchSetCommandOutput
  | DisassociateWebACLCommandOutput
  | GetByteMatchSetCommandOutput
  | GetChangeTokenCommandOutput
  | GetChangeTokenStatusCommandOutput
  | GetGeoMatchSetCommandOutput
  | GetIPSetCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetPermissionPolicyCommandOutput
  | GetRateBasedRuleCommandOutput
  | GetRateBasedRuleManagedKeysCommandOutput
  | GetRegexMatchSetCommandOutput
  | GetRegexPatternSetCommandOutput
  | GetRuleCommandOutput
  | GetRuleGroupCommandOutput
  | GetSampledRequestsCommandOutput
  | GetSizeConstraintSetCommandOutput
  | GetSqlInjectionMatchSetCommandOutput
  | GetWebACLCommandOutput
  | GetWebACLForResourceCommandOutput
  | GetXssMatchSetCommandOutput
  | ListActivatedRulesInRuleGroupCommandOutput
  | ListByteMatchSetsCommandOutput
  | ListGeoMatchSetsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListRateBasedRulesCommandOutput
  | ListRegexMatchSetsCommandOutput
  | ListRegexPatternSetsCommandOutput
  | ListResourcesForWebACLCommandOutput
  | ListRuleGroupsCommandOutput
  | ListRulesCommandOutput
  | ListSizeConstraintSetsCommandOutput
  | ListSqlInjectionMatchSetsCommandOutput
  | ListSubscribedRuleGroupsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebACLsCommandOutput
  | ListXssMatchSetsCommandOutput
  | PutLoggingConfigurationCommandOutput
  | PutPermissionPolicyCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateByteMatchSetCommandOutput
  | UpdateGeoMatchSetCommandOutput
  | UpdateIPSetCommandOutput
  | UpdateRateBasedRuleCommandOutput
  | UpdateRegexMatchSetCommandOutput
  | UpdateRegexPatternSetCommandOutput
  | UpdateRuleCommandOutput
  | UpdateRuleGroupCommandOutput
  | UpdateSizeConstraintSetCommandOutput
  | UpdateSqlInjectionMatchSetCommandOutput
  | UpdateWebACLCommandOutput
  | UpdateXssMatchSetCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
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
   * Provider function that return promise of a maxAttempts string
   */
  maxAttemptsDefaultProvider?: (input: any) => __Provider<string>;

  /**
   * Fetch related hostname, signing name or signing region with given region.
   */
  regionInfoProvider?: RegionInfoProvider;
}

export type WAFRegionalClientConfig = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  AwsAuthInputConfig &
  RetryInputConfig &
  UserAgentInputConfig &
  HostHeaderInputConfig;

export type WAFRegionalClientResolvedConfig = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  AwsAuthResolvedConfig &
  RetryResolvedConfig &
  UserAgentResolvedConfig &
  HostHeaderResolvedConfig;

/**
 * <p>This is the <i>AWS WAF Regional API Reference</i> for using AWS WAF with Elastic Load Balancing (ELB) Application Load Balancers. The AWS WAF actions and data types listed in the reference are available for protecting Application Load Balancers. You can use these actions and data types by means of the endpoints listed in <a href="https://docs.aws.amazon.com/general/latest/gr/rande.html#waf_region">AWS Regions and Endpoints</a>. This guide is for developers who need detailed information about the AWS WAF API actions, data types, and errors. For detailed information about AWS WAF features and an overview of how to use the AWS WAF API, see the
 *         <a href="https://docs.aws.amazon.com/waf/latest/developerguide/">AWS WAF Developer Guide</a>.</p>
 */
export class WAFRegionalClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFRegionalClientResolvedConfig
> {
  readonly config: WAFRegionalClientResolvedConfig;

  constructor(configuration: WAFRegionalClientConfig) {
    let _config_0 = {
      ...__ClientDefaultValues,
      ...configuration,
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

  destroy(): void {
    super.destroy();
  }
}
