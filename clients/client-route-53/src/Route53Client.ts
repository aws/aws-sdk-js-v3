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
import {
  type BodyLengthCalculator as __BodyLengthCalculator,
  type CheckOptionalClientConfig as __CheckOptionalClientConfig,
  type ChecksumConstructor as __ChecksumConstructor,
  type ClientProtocol,
  type Decoder as __Decoder,
  type Encoder as __Encoder,
  type HashConstructor as __HashConstructor,
  type HttpHandlerOptions as __HttpHandlerOptions,
  type HttpRequest,
  type HttpResponse,
  type Logger as __Logger,
  type Provider as __Provider,
  type StreamCollector as __StreamCollector,
  type UrlParser as __UrlParser,
  AwsCredentialIdentityProvider,
  EndpointV2 as __EndpointV2,
  Provider,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  type HttpAuthSchemeInputConfig,
  type HttpAuthSchemeResolvedConfig,
  defaultRoute53HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "./commands/ActivateKeySigningKeyCommand";
import {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import {
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "./commands/ChangeCidrCollectionCommand";
import {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand";
import {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand";
import {
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "./commands/CreateCidrCollectionCommand";
import { CreateHealthCheckCommandInput, CreateHealthCheckCommandOutput } from "./commands/CreateHealthCheckCommand";
import { CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput } from "./commands/CreateHostedZoneCommand";
import {
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "./commands/CreateKeySigningKeyCommand";
import {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand";
import {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand";
import {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand";
import {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import {
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "./commands/DeactivateKeySigningKeyCommand";
import {
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "./commands/DeleteCidrCollectionCommand";
import { DeleteHealthCheckCommandInput, DeleteHealthCheckCommandOutput } from "./commands/DeleteHealthCheckCommand";
import { DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput } from "./commands/DeleteHostedZoneCommand";
import {
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "./commands/DeleteKeySigningKeyCommand";
import {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand";
import {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand";
import {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import {
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "./commands/DisableHostedZoneDNSSECCommand";
import {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import {
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "./commands/EnableHostedZoneDNSSECCommand";
import { GetAccountLimitCommandInput, GetAccountLimitCommandOutput } from "./commands/GetAccountLimitCommand";
import { GetChangeCommandInput, GetChangeCommandOutput } from "./commands/GetChangeCommand";
import { GetCheckerIpRangesCommandInput, GetCheckerIpRangesCommandOutput } from "./commands/GetCheckerIpRangesCommand";
import { GetDNSSECCommandInput, GetDNSSECCommandOutput } from "./commands/GetDNSSECCommand";
import { GetGeoLocationCommandInput, GetGeoLocationCommandOutput } from "./commands/GetGeoLocationCommand";
import { GetHealthCheckCommandInput, GetHealthCheckCommandOutput } from "./commands/GetHealthCheckCommand";
import {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand";
import {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand";
import { GetHostedZoneCommandInput, GetHostedZoneCommandOutput } from "./commands/GetHostedZoneCommand";
import { GetHostedZoneCountCommandInput, GetHostedZoneCountCommandOutput } from "./commands/GetHostedZoneCountCommand";
import { GetHostedZoneLimitCommandInput, GetHostedZoneLimitCommandOutput } from "./commands/GetHostedZoneLimitCommand";
import {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand";
import {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand";
import {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand";
import { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "./commands/GetTrafficPolicyCommand";
import {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand";
import {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import { ListCidrBlocksCommandInput, ListCidrBlocksCommandOutput } from "./commands/ListCidrBlocksCommand";
import {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "./commands/ListCidrCollectionsCommand";
import { ListCidrLocationsCommandInput, ListCidrLocationsCommandOutput } from "./commands/ListCidrLocationsCommand";
import { ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput } from "./commands/ListGeoLocationsCommand";
import { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "./commands/ListHealthChecksCommand";
import {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand";
import {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand";
import { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "./commands/ListHostedZonesCommand";
import {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand";
import {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand";
import {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand";
import {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand";
import {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import { TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput } from "./commands/TestDNSAnswerCommand";
import { UpdateHealthCheckCommandInput, UpdateHealthCheckCommandOutput } from "./commands/UpdateHealthCheckCommand";
import {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand";
import {
  UpdateHostedZoneFeaturesCommandInput,
  UpdateHostedZoneFeaturesCommandOutput,
} from "./commands/UpdateHostedZoneFeaturesCommand";
import {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
import { type RuntimeExtension, type RuntimeExtensionsConfig, resolveRuntimeExtensions } from "./runtimeExtensions";

export { __Client };

/**
 * @public
 */
export type ServiceInputTypes =
  | ActivateKeySigningKeyCommandInput
  | AssociateVPCWithHostedZoneCommandInput
  | ChangeCidrCollectionCommandInput
  | ChangeResourceRecordSetsCommandInput
  | ChangeTagsForResourceCommandInput
  | CreateCidrCollectionCommandInput
  | CreateHealthCheckCommandInput
  | CreateHostedZoneCommandInput
  | CreateKeySigningKeyCommandInput
  | CreateQueryLoggingConfigCommandInput
  | CreateReusableDelegationSetCommandInput
  | CreateTrafficPolicyCommandInput
  | CreateTrafficPolicyInstanceCommandInput
  | CreateTrafficPolicyVersionCommandInput
  | CreateVPCAssociationAuthorizationCommandInput
  | DeactivateKeySigningKeyCommandInput
  | DeleteCidrCollectionCommandInput
  | DeleteHealthCheckCommandInput
  | DeleteHostedZoneCommandInput
  | DeleteKeySigningKeyCommandInput
  | DeleteQueryLoggingConfigCommandInput
  | DeleteReusableDelegationSetCommandInput
  | DeleteTrafficPolicyCommandInput
  | DeleteTrafficPolicyInstanceCommandInput
  | DeleteVPCAssociationAuthorizationCommandInput
  | DisableHostedZoneDNSSECCommandInput
  | DisassociateVPCFromHostedZoneCommandInput
  | EnableHostedZoneDNSSECCommandInput
  | GetAccountLimitCommandInput
  | GetChangeCommandInput
  | GetCheckerIpRangesCommandInput
  | GetDNSSECCommandInput
  | GetGeoLocationCommandInput
  | GetHealthCheckCommandInput
  | GetHealthCheckCountCommandInput
  | GetHealthCheckLastFailureReasonCommandInput
  | GetHealthCheckStatusCommandInput
  | GetHostedZoneCommandInput
  | GetHostedZoneCountCommandInput
  | GetHostedZoneLimitCommandInput
  | GetQueryLoggingConfigCommandInput
  | GetReusableDelegationSetCommandInput
  | GetReusableDelegationSetLimitCommandInput
  | GetTrafficPolicyCommandInput
  | GetTrafficPolicyInstanceCommandInput
  | GetTrafficPolicyInstanceCountCommandInput
  | ListCidrBlocksCommandInput
  | ListCidrCollectionsCommandInput
  | ListCidrLocationsCommandInput
  | ListGeoLocationsCommandInput
  | ListHealthChecksCommandInput
  | ListHostedZonesByNameCommandInput
  | ListHostedZonesByVPCCommandInput
  | ListHostedZonesCommandInput
  | ListQueryLoggingConfigsCommandInput
  | ListResourceRecordSetsCommandInput
  | ListReusableDelegationSetsCommandInput
  | ListTagsForResourceCommandInput
  | ListTagsForResourcesCommandInput
  | ListTrafficPoliciesCommandInput
  | ListTrafficPolicyInstancesByHostedZoneCommandInput
  | ListTrafficPolicyInstancesByPolicyCommandInput
  | ListTrafficPolicyInstancesCommandInput
  | ListTrafficPolicyVersionsCommandInput
  | ListVPCAssociationAuthorizationsCommandInput
  | TestDNSAnswerCommandInput
  | UpdateHealthCheckCommandInput
  | UpdateHostedZoneCommentCommandInput
  | UpdateHostedZoneFeaturesCommandInput
  | UpdateTrafficPolicyCommentCommandInput
  | UpdateTrafficPolicyInstanceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ActivateKeySigningKeyCommandOutput
  | AssociateVPCWithHostedZoneCommandOutput
  | ChangeCidrCollectionCommandOutput
  | ChangeResourceRecordSetsCommandOutput
  | ChangeTagsForResourceCommandOutput
  | CreateCidrCollectionCommandOutput
  | CreateHealthCheckCommandOutput
  | CreateHostedZoneCommandOutput
  | CreateKeySigningKeyCommandOutput
  | CreateQueryLoggingConfigCommandOutput
  | CreateReusableDelegationSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | CreateTrafficPolicyInstanceCommandOutput
  | CreateTrafficPolicyVersionCommandOutput
  | CreateVPCAssociationAuthorizationCommandOutput
  | DeactivateKeySigningKeyCommandOutput
  | DeleteCidrCollectionCommandOutput
  | DeleteHealthCheckCommandOutput
  | DeleteHostedZoneCommandOutput
  | DeleteKeySigningKeyCommandOutput
  | DeleteQueryLoggingConfigCommandOutput
  | DeleteReusableDelegationSetCommandOutput
  | DeleteTrafficPolicyCommandOutput
  | DeleteTrafficPolicyInstanceCommandOutput
  | DeleteVPCAssociationAuthorizationCommandOutput
  | DisableHostedZoneDNSSECCommandOutput
  | DisassociateVPCFromHostedZoneCommandOutput
  | EnableHostedZoneDNSSECCommandOutput
  | GetAccountLimitCommandOutput
  | GetChangeCommandOutput
  | GetCheckerIpRangesCommandOutput
  | GetDNSSECCommandOutput
  | GetGeoLocationCommandOutput
  | GetHealthCheckCommandOutput
  | GetHealthCheckCountCommandOutput
  | GetHealthCheckLastFailureReasonCommandOutput
  | GetHealthCheckStatusCommandOutput
  | GetHostedZoneCommandOutput
  | GetHostedZoneCountCommandOutput
  | GetHostedZoneLimitCommandOutput
  | GetQueryLoggingConfigCommandOutput
  | GetReusableDelegationSetCommandOutput
  | GetReusableDelegationSetLimitCommandOutput
  | GetTrafficPolicyCommandOutput
  | GetTrafficPolicyInstanceCommandOutput
  | GetTrafficPolicyInstanceCountCommandOutput
  | ListCidrBlocksCommandOutput
  | ListCidrCollectionsCommandOutput
  | ListCidrLocationsCommandOutput
  | ListGeoLocationsCommandOutput
  | ListHealthChecksCommandOutput
  | ListHostedZonesByNameCommandOutput
  | ListHostedZonesByVPCCommandOutput
  | ListHostedZonesCommandOutput
  | ListQueryLoggingConfigsCommandOutput
  | ListResourceRecordSetsCommandOutput
  | ListReusableDelegationSetsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTagsForResourcesCommandOutput
  | ListTrafficPoliciesCommandOutput
  | ListTrafficPolicyInstancesByHostedZoneCommandOutput
  | ListTrafficPolicyInstancesByPolicyCommandOutput
  | ListTrafficPolicyInstancesCommandOutput
  | ListTrafficPolicyVersionsCommandOutput
  | ListVPCAssociationAuthorizationsCommandOutput
  | TestDNSAnswerCommandOutput
  | UpdateHealthCheckCommandOutput
  | UpdateHostedZoneCommentCommandOutput
  | UpdateHostedZoneFeaturesCommandOutput
  | UpdateTrafficPolicyCommentCommandOutput
  | UpdateTrafficPolicyInstanceCommandOutput;

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
export type Route53ClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of Route53Client class constructor that set the region, credentials and other options.
 */
export interface Route53ClientConfig extends Route53ClientConfigType {}

/**
 * @public
 */
export type Route53ClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of Route53Client class. This is resolved and normalized from the {@link Route53ClientConfig | constructor configuration interface}.
 */
export interface Route53ClientResolvedConfig extends Route53ClientResolvedConfigType {}

/**
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web
 * 			service.</p>
 *          <p>You can use Route 53 to:</p>
 *          <ul>
 *             <li>
 *                <p>Register domain names.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-domain-registration.html">How domain registration works</a>.</p>
 *             </li>
 *             <li>
 *                <p>Route internet traffic to the resources for your domain</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-dns-service.html">How internet traffic is routed to your website or web application</a>.</p>
 *             </li>
 *             <li>
 *                <p>Check the health of your resources.</p>
 *                <p>For more information, see <a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/welcome-health-checks.html">How Route 53 checks the health of your resources</a>.</p>
 *             </li>
 *          </ul>
 * @public
 */
export class Route53Client extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  Route53ClientResolvedConfig
> {
  /**
   * The resolved configuration of Route53Client class. This is resolved and normalized from the {@link Route53ClientConfig | constructor configuration interface}.
   */
  readonly config: Route53ClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<Route53ClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultRoute53HttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: Route53ClientResolvedConfig) =>
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
