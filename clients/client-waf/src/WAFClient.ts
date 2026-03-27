// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  getHostHeaderPlugin,
  resolveHostHeaderConfig,
} from "@aws-sdk/middleware-host-header";
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
import { getRecursionDetectionPlugin } from "@aws-sdk/middleware-recursion-detection";
import {
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getUserAgentPlugin,
  resolveUserAgentConfig,
} from "@aws-sdk/middleware-user-agent";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import { getContentLengthPlugin } from "@smithy/middleware-content-length";
import {
  type EndpointInputConfig,
  type EndpointResolvedConfig,
  resolveEndpointConfig,
} from "@smithy/middleware-endpoint";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/middleware-retry";
import type { HttpHandlerUserInput as __HttpHandlerUserInput } from "@smithy/protocol-http";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/smithy-client";
import type {
  AwsCredentialIdentityProvider,
  BodyLengthCalculator as __BodyLengthCalculator,
  CheckOptionalClientConfig as __CheckOptionalClientConfig,
  ChecksumConstructor as __ChecksumConstructor,
  Decoder as __Decoder,
  Encoder as __Encoder,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultWAFHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  CreateByteMatchSetCommandInput,
  CreateByteMatchSetCommandOutput,
} from "./commands/CreateByteMatchSetCommand";
import type {
  CreateGeoMatchSetCommandInput,
  CreateGeoMatchSetCommandOutput,
} from "./commands/CreateGeoMatchSetCommand";
import type { CreateIPSetCommandInput, CreateIPSetCommandOutput } from "./commands/CreateIPSetCommand";
import type {
  CreateRateBasedRuleCommandInput,
  CreateRateBasedRuleCommandOutput,
} from "./commands/CreateRateBasedRuleCommand";
import type {
  CreateRegexMatchSetCommandInput,
  CreateRegexMatchSetCommandOutput,
} from "./commands/CreateRegexMatchSetCommand";
import type {
  CreateRegexPatternSetCommandInput,
  CreateRegexPatternSetCommandOutput,
} from "./commands/CreateRegexPatternSetCommand";
import type { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import type { CreateRuleGroupCommandInput, CreateRuleGroupCommandOutput } from "./commands/CreateRuleGroupCommand";
import type {
  CreateSizeConstraintSetCommandInput,
  CreateSizeConstraintSetCommandOutput,
} from "./commands/CreateSizeConstraintSetCommand";
import type {
  CreateSqlInjectionMatchSetCommandInput,
  CreateSqlInjectionMatchSetCommandOutput,
} from "./commands/CreateSqlInjectionMatchSetCommand";
import type { CreateWebACLCommandInput, CreateWebACLCommandOutput } from "./commands/CreateWebACLCommand";
import type {
  CreateWebACLMigrationStackCommandInput,
  CreateWebACLMigrationStackCommandOutput,
} from "./commands/CreateWebACLMigrationStackCommand";
import type {
  CreateXssMatchSetCommandInput,
  CreateXssMatchSetCommandOutput,
} from "./commands/CreateXssMatchSetCommand";
import type {
  DeleteByteMatchSetCommandInput,
  DeleteByteMatchSetCommandOutput,
} from "./commands/DeleteByteMatchSetCommand";
import type {
  DeleteGeoMatchSetCommandInput,
  DeleteGeoMatchSetCommandOutput,
} from "./commands/DeleteGeoMatchSetCommand";
import type { DeleteIPSetCommandInput, DeleteIPSetCommandOutput } from "./commands/DeleteIPSetCommand";
import type {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import type {
  DeletePermissionPolicyCommandInput,
  DeletePermissionPolicyCommandOutput,
} from "./commands/DeletePermissionPolicyCommand";
import type {
  DeleteRateBasedRuleCommandInput,
  DeleteRateBasedRuleCommandOutput,
} from "./commands/DeleteRateBasedRuleCommand";
import type {
  DeleteRegexMatchSetCommandInput,
  DeleteRegexMatchSetCommandOutput,
} from "./commands/DeleteRegexMatchSetCommand";
import type {
  DeleteRegexPatternSetCommandInput,
  DeleteRegexPatternSetCommandOutput,
} from "./commands/DeleteRegexPatternSetCommand";
import type { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import type { DeleteRuleGroupCommandInput, DeleteRuleGroupCommandOutput } from "./commands/DeleteRuleGroupCommand";
import type {
  DeleteSizeConstraintSetCommandInput,
  DeleteSizeConstraintSetCommandOutput,
} from "./commands/DeleteSizeConstraintSetCommand";
import type {
  DeleteSqlInjectionMatchSetCommandInput,
  DeleteSqlInjectionMatchSetCommandOutput,
} from "./commands/DeleteSqlInjectionMatchSetCommand";
import type { DeleteWebACLCommandInput, DeleteWebACLCommandOutput } from "./commands/DeleteWebACLCommand";
import type {
  DeleteXssMatchSetCommandInput,
  DeleteXssMatchSetCommandOutput,
} from "./commands/DeleteXssMatchSetCommand";
import type { GetByteMatchSetCommandInput, GetByteMatchSetCommandOutput } from "./commands/GetByteMatchSetCommand";
import type { GetChangeTokenCommandInput, GetChangeTokenCommandOutput } from "./commands/GetChangeTokenCommand";
import type {
  GetChangeTokenStatusCommandInput,
  GetChangeTokenStatusCommandOutput,
} from "./commands/GetChangeTokenStatusCommand";
import type { GetGeoMatchSetCommandInput, GetGeoMatchSetCommandOutput } from "./commands/GetGeoMatchSetCommand";
import type { GetIPSetCommandInput, GetIPSetCommandOutput } from "./commands/GetIPSetCommand";
import type {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import type {
  GetPermissionPolicyCommandInput,
  GetPermissionPolicyCommandOutput,
} from "./commands/GetPermissionPolicyCommand";
import type { GetRateBasedRuleCommandInput, GetRateBasedRuleCommandOutput } from "./commands/GetRateBasedRuleCommand";
import type {
  GetRateBasedRuleManagedKeysCommandInput,
  GetRateBasedRuleManagedKeysCommandOutput,
} from "./commands/GetRateBasedRuleManagedKeysCommand";
import type { GetRegexMatchSetCommandInput, GetRegexMatchSetCommandOutput } from "./commands/GetRegexMatchSetCommand";
import type {
  GetRegexPatternSetCommandInput,
  GetRegexPatternSetCommandOutput,
} from "./commands/GetRegexPatternSetCommand";
import type { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import type { GetRuleGroupCommandInput, GetRuleGroupCommandOutput } from "./commands/GetRuleGroupCommand";
import type {
  GetSampledRequestsCommandInput,
  GetSampledRequestsCommandOutput,
} from "./commands/GetSampledRequestsCommand";
import type {
  GetSizeConstraintSetCommandInput,
  GetSizeConstraintSetCommandOutput,
} from "./commands/GetSizeConstraintSetCommand";
import type {
  GetSqlInjectionMatchSetCommandInput,
  GetSqlInjectionMatchSetCommandOutput,
} from "./commands/GetSqlInjectionMatchSetCommand";
import type { GetWebACLCommandInput, GetWebACLCommandOutput } from "./commands/GetWebACLCommand";
import type { GetXssMatchSetCommandInput, GetXssMatchSetCommandOutput } from "./commands/GetXssMatchSetCommand";
import type {
  ListActivatedRulesInRuleGroupCommandInput,
  ListActivatedRulesInRuleGroupCommandOutput,
} from "./commands/ListActivatedRulesInRuleGroupCommand";
import type {
  ListByteMatchSetsCommandInput,
  ListByteMatchSetsCommandOutput,
} from "./commands/ListByteMatchSetsCommand";
import type { ListGeoMatchSetsCommandInput, ListGeoMatchSetsCommandOutput } from "./commands/ListGeoMatchSetsCommand";
import type { ListIPSetsCommandInput, ListIPSetsCommandOutput } from "./commands/ListIPSetsCommand";
import type {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import type {
  ListRateBasedRulesCommandInput,
  ListRateBasedRulesCommandOutput,
} from "./commands/ListRateBasedRulesCommand";
import type {
  ListRegexMatchSetsCommandInput,
  ListRegexMatchSetsCommandOutput,
} from "./commands/ListRegexMatchSetsCommand";
import type {
  ListRegexPatternSetsCommandInput,
  ListRegexPatternSetsCommandOutput,
} from "./commands/ListRegexPatternSetsCommand";
import type { ListRuleGroupsCommandInput, ListRuleGroupsCommandOutput } from "./commands/ListRuleGroupsCommand";
import type { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import type {
  ListSizeConstraintSetsCommandInput,
  ListSizeConstraintSetsCommandOutput,
} from "./commands/ListSizeConstraintSetsCommand";
import type {
  ListSqlInjectionMatchSetsCommandInput,
  ListSqlInjectionMatchSetsCommandOutput,
} from "./commands/ListSqlInjectionMatchSetsCommand";
import type {
  ListSubscribedRuleGroupsCommandInput,
  ListSubscribedRuleGroupsCommandOutput,
} from "./commands/ListSubscribedRuleGroupsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { ListWebACLsCommandInput, ListWebACLsCommandOutput } from "./commands/ListWebACLsCommand";
import type { ListXssMatchSetsCommandInput, ListXssMatchSetsCommandOutput } from "./commands/ListXssMatchSetsCommand";
import type {
  PutLoggingConfigurationCommandInput,
  PutLoggingConfigurationCommandOutput,
} from "./commands/PutLoggingConfigurationCommand";
import type {
  PutPermissionPolicyCommandInput,
  PutPermissionPolicyCommandOutput,
} from "./commands/PutPermissionPolicyCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateByteMatchSetCommandInput,
  UpdateByteMatchSetCommandOutput,
} from "./commands/UpdateByteMatchSetCommand";
import type {
  UpdateGeoMatchSetCommandInput,
  UpdateGeoMatchSetCommandOutput,
} from "./commands/UpdateGeoMatchSetCommand";
import type { UpdateIPSetCommandInput, UpdateIPSetCommandOutput } from "./commands/UpdateIPSetCommand";
import type {
  UpdateRateBasedRuleCommandInput,
  UpdateRateBasedRuleCommandOutput,
} from "./commands/UpdateRateBasedRuleCommand";
import type {
  UpdateRegexMatchSetCommandInput,
  UpdateRegexMatchSetCommandOutput,
} from "./commands/UpdateRegexMatchSetCommand";
import type {
  UpdateRegexPatternSetCommandInput,
  UpdateRegexPatternSetCommandOutput,
} from "./commands/UpdateRegexPatternSetCommand";
import type { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import type { UpdateRuleGroupCommandInput, UpdateRuleGroupCommandOutput } from "./commands/UpdateRuleGroupCommand";
import type {
  UpdateSizeConstraintSetCommandInput,
  UpdateSizeConstraintSetCommandOutput,
} from "./commands/UpdateSizeConstraintSetCommand";
import type {
  UpdateSqlInjectionMatchSetCommandInput,
  UpdateSqlInjectionMatchSetCommandOutput,
} from "./commands/UpdateSqlInjectionMatchSetCommand";
import type { UpdateWebACLCommandInput, UpdateWebACLCommandOutput } from "./commands/UpdateWebACLCommand";
import type {
  UpdateXssMatchSetCommandInput,
  UpdateXssMatchSetCommandOutput,
} from "./commands/UpdateXssMatchSetCommand";
import {
  type ClientInputEndpointParameters,
  type ClientResolvedEndpointParameters,
  type EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
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
  | CreateWebACLMigrationStackCommandInput
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
  | GetXssMatchSetCommandInput
  | ListActivatedRulesInRuleGroupCommandInput
  | ListByteMatchSetsCommandInput
  | ListGeoMatchSetsCommandInput
  | ListIPSetsCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListRateBasedRulesCommandInput
  | ListRegexMatchSetsCommandInput
  | ListRegexPatternSetsCommandInput
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

/**
 * @public
 */
export type ServiceOutputTypes =
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
  | CreateWebACLMigrationStackCommandOutput
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
  | GetXssMatchSetCommandOutput
  | ListActivatedRulesInRuleGroupCommandOutput
  | ListByteMatchSetsCommandOutput
  | ListGeoMatchSetsCommandOutput
  | ListIPSetsCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListRateBasedRulesCommandOutput
  | ListRegexMatchSetsCommandOutput
  | ListRegexPatternSetsCommandOutput
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
  defaultUserAgentProvider?: __Provider<__UserAgent>;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type WAFClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of WAFClient class constructor that set the region, credentials and other options.
 */
export interface WAFClientConfig extends WAFClientConfigType {}

/**
 * @public
 */
export type WAFClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of WAFClient class. This is resolved and normalized from the {@link WAFClientConfig | constructor configuration interface}.
 */
export interface WAFClientResolvedConfig extends WAFClientResolvedConfigType {}

/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 * 	        <p>This is the <i>AWS WAF Classic API Reference</i> for using AWS WAF Classic with Amazon CloudFront. The AWS WAF Classic actions and data types listed in the reference are available for protecting Amazon CloudFront distributions. You can use these actions and data types via the endpoint <i>waf.amazonaws.com</i>. This guide is for developers who need detailed information about the AWS WAF Classic API actions,
 * 	      data types, and errors. For detailed information about AWS WAF Classic features and an overview of how to use the AWS WAF Classic API, see the
 * 	      <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS WAF Classic</a> in the developer guide.</p>
 * @public
 */
export class WAFClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  WAFClientResolvedConfig
> {
  /**
   * The resolved configuration of WAFClient class. This is resolved and normalized from the {@link WAFClientConfig | constructor configuration interface}.
   */
  readonly config: WAFClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<WAFClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultWAFHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: WAFClientResolvedConfig) =>
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
