// smithy-typescript generated code
import {
  type HostHeaderInputConfig,
  type HostHeaderResolvedConfig,
  type UserAgentInputConfig,
  type UserAgentResolvedConfig,
  getHostHeaderPlugin,
  getLoggerPlugin,
  getRecursionDetectionPlugin,
  getUserAgentPlugin,
  resolveHostHeaderConfig,
  resolveUserAgentConfig,
} from "@aws-sdk/core/client";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  type DefaultsMode as __DefaultsMode,
  type SmithyConfiguration as __SmithyConfiguration,
  type SmithyResolvedConfiguration as __SmithyResolvedConfiguration,
  Client as __Client,
} from "@smithy/core/client";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/core/config";
import { type EndpointInputConfig, type EndpointResolvedConfig, resolveEndpointConfig } from "@smithy/core/endpoints";
import { type HttpHandlerUserInput as __HttpHandlerUserInput, getContentLengthPlugin } from "@smithy/core/protocols";
import {
  type RetryInputConfig,
  type RetryResolvedConfig,
  getRetryPlugin,
  resolveRetryConfig,
} from "@smithy/core/retry";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultRoute53HttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  ActivateKeySigningKeyCommandInput,
  ActivateKeySigningKeyCommandOutput,
} from "./commands/ActivateKeySigningKeyCommand";
import type {
  AssociateVPCWithHostedZoneCommandInput,
  AssociateVPCWithHostedZoneCommandOutput,
} from "./commands/AssociateVPCWithHostedZoneCommand";
import type {
  ChangeCidrCollectionCommandInput,
  ChangeCidrCollectionCommandOutput,
} from "./commands/ChangeCidrCollectionCommand";
import type {
  ChangeResourceRecordSetsCommandInput,
  ChangeResourceRecordSetsCommandOutput,
} from "./commands/ChangeResourceRecordSetsCommand";
import type {
  ChangeTagsForResourceCommandInput,
  ChangeTagsForResourceCommandOutput,
} from "./commands/ChangeTagsForResourceCommand";
import type {
  CreateCidrCollectionCommandInput,
  CreateCidrCollectionCommandOutput,
} from "./commands/CreateCidrCollectionCommand";
import type {
  CreateHealthCheckCommandInput,
  CreateHealthCheckCommandOutput,
} from "./commands/CreateHealthCheckCommand";
import type {
  CreateHealthCheckSourceCommandInput,
  CreateHealthCheckSourceCommandOutput,
} from "./commands/CreateHealthCheckSourceCommand";
import type { CreateHostedZoneCommandInput, CreateHostedZoneCommandOutput } from "./commands/CreateHostedZoneCommand";
import type {
  CreateKeySigningKeyCommandInput,
  CreateKeySigningKeyCommandOutput,
} from "./commands/CreateKeySigningKeyCommand";
import type {
  CreateQueryLoggingConfigCommandInput,
  CreateQueryLoggingConfigCommandOutput,
} from "./commands/CreateQueryLoggingConfigCommand";
import type {
  CreateResourceRecordSetProtectionsCommandInput,
  CreateResourceRecordSetProtectionsCommandOutput,
} from "./commands/CreateResourceRecordSetProtectionsCommand";
import type {
  CreateReusableDelegationSetCommandInput,
  CreateReusableDelegationSetCommandOutput,
} from "./commands/CreateReusableDelegationSetCommand";
import type {
  CreateTrafficPolicyCommandInput,
  CreateTrafficPolicyCommandOutput,
} from "./commands/CreateTrafficPolicyCommand";
import type {
  CreateTrafficPolicyInstanceCommandInput,
  CreateTrafficPolicyInstanceCommandOutput,
} from "./commands/CreateTrafficPolicyInstanceCommand";
import type {
  CreateTrafficPolicyVersionCommandInput,
  CreateTrafficPolicyVersionCommandOutput,
} from "./commands/CreateTrafficPolicyVersionCommand";
import type {
  CreateVPCAssociationAuthorizationCommandInput,
  CreateVPCAssociationAuthorizationCommandOutput,
} from "./commands/CreateVPCAssociationAuthorizationCommand";
import type {
  DeactivateKeySigningKeyCommandInput,
  DeactivateKeySigningKeyCommandOutput,
} from "./commands/DeactivateKeySigningKeyCommand";
import type {
  DeleteCidrCollectionCommandInput,
  DeleteCidrCollectionCommandOutput,
} from "./commands/DeleteCidrCollectionCommand";
import type {
  DeleteHealthCheckCommandInput,
  DeleteHealthCheckCommandOutput,
} from "./commands/DeleteHealthCheckCommand";
import type {
  DeleteHealthCheckSourceCommandInput,
  DeleteHealthCheckSourceCommandOutput,
} from "./commands/DeleteHealthCheckSourceCommand";
import type { DeleteHostedZoneCommandInput, DeleteHostedZoneCommandOutput } from "./commands/DeleteHostedZoneCommand";
import type {
  DeleteKeySigningKeyCommandInput,
  DeleteKeySigningKeyCommandOutput,
} from "./commands/DeleteKeySigningKeyCommand";
import type {
  DeleteQueryLoggingConfigCommandInput,
  DeleteQueryLoggingConfigCommandOutput,
} from "./commands/DeleteQueryLoggingConfigCommand";
import type {
  DeleteResourceRecordSetProtectionsCommandInput,
  DeleteResourceRecordSetProtectionsCommandOutput,
} from "./commands/DeleteResourceRecordSetProtectionsCommand";
import type {
  DeleteReusableDelegationSetCommandInput,
  DeleteReusableDelegationSetCommandOutput,
} from "./commands/DeleteReusableDelegationSetCommand";
import type {
  DeleteTrafficPolicyCommandInput,
  DeleteTrafficPolicyCommandOutput,
} from "./commands/DeleteTrafficPolicyCommand";
import type {
  DeleteTrafficPolicyInstanceCommandInput,
  DeleteTrafficPolicyInstanceCommandOutput,
} from "./commands/DeleteTrafficPolicyInstanceCommand";
import type {
  DeleteVPCAssociationAuthorizationCommandInput,
  DeleteVPCAssociationAuthorizationCommandOutput,
} from "./commands/DeleteVPCAssociationAuthorizationCommand";
import type {
  DisableHostedZoneDNSSECCommandInput,
  DisableHostedZoneDNSSECCommandOutput,
} from "./commands/DisableHostedZoneDNSSECCommand";
import type {
  DisassociateVPCFromHostedZoneCommandInput,
  DisassociateVPCFromHostedZoneCommandOutput,
} from "./commands/DisassociateVPCFromHostedZoneCommand";
import type {
  EnableHostedZoneDNSSECCommandInput,
  EnableHostedZoneDNSSECCommandOutput,
} from "./commands/EnableHostedZoneDNSSECCommand";
import type { GetAccountLimitCommandInput, GetAccountLimitCommandOutput } from "./commands/GetAccountLimitCommand";
import type { GetChangeCommandInput, GetChangeCommandOutput } from "./commands/GetChangeCommand";
import type {
  GetCheckerIpRangesCommandInput,
  GetCheckerIpRangesCommandOutput,
} from "./commands/GetCheckerIpRangesCommand";
import type { GetDNSSECCommandInput, GetDNSSECCommandOutput } from "./commands/GetDNSSECCommand";
import type { GetGeoLocationCommandInput, GetGeoLocationCommandOutput } from "./commands/GetGeoLocationCommand";
import type { GetHealthCheckCommandInput, GetHealthCheckCommandOutput } from "./commands/GetHealthCheckCommand";
import type {
  GetHealthCheckCountCommandInput,
  GetHealthCheckCountCommandOutput,
} from "./commands/GetHealthCheckCountCommand";
import type {
  GetHealthCheckLastFailureReasonCommandInput,
  GetHealthCheckLastFailureReasonCommandOutput,
} from "./commands/GetHealthCheckLastFailureReasonCommand";
import type {
  GetHealthCheckSourceCommandInput,
  GetHealthCheckSourceCommandOutput,
} from "./commands/GetHealthCheckSourceCommand";
import type {
  GetHealthCheckStatusCommandInput,
  GetHealthCheckStatusCommandOutput,
} from "./commands/GetHealthCheckStatusCommand";
import type {
  GetHostedZoneChangeBatchCommandInput,
  GetHostedZoneChangeBatchCommandOutput,
} from "./commands/GetHostedZoneChangeBatchCommand";
import type { GetHostedZoneCommandInput, GetHostedZoneCommandOutput } from "./commands/GetHostedZoneCommand";
import type {
  GetHostedZoneCountCommandInput,
  GetHostedZoneCountCommandOutput,
} from "./commands/GetHostedZoneCountCommand";
import type {
  GetHostedZoneLimitCommandInput,
  GetHostedZoneLimitCommandOutput,
} from "./commands/GetHostedZoneLimitCommand";
import type {
  GetQueryLoggingConfigCommandInput,
  GetQueryLoggingConfigCommandOutput,
} from "./commands/GetQueryLoggingConfigCommand";
import type {
  GetReusableDelegationSetCommandInput,
  GetReusableDelegationSetCommandOutput,
} from "./commands/GetReusableDelegationSetCommand";
import type {
  GetReusableDelegationSetLimitCommandInput,
  GetReusableDelegationSetLimitCommandOutput,
} from "./commands/GetReusableDelegationSetLimitCommand";
import type { GetTrafficPolicyCommandInput, GetTrafficPolicyCommandOutput } from "./commands/GetTrafficPolicyCommand";
import type {
  GetTrafficPolicyInstanceCommandInput,
  GetTrafficPolicyInstanceCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCommand";
import type {
  GetTrafficPolicyInstanceCountCommandInput,
  GetTrafficPolicyInstanceCountCommandOutput,
} from "./commands/GetTrafficPolicyInstanceCountCommand";
import type { ListCidrBlocksCommandInput, ListCidrBlocksCommandOutput } from "./commands/ListCidrBlocksCommand";
import type {
  ListCidrCollectionsCommandInput,
  ListCidrCollectionsCommandOutput,
} from "./commands/ListCidrCollectionsCommand";
import type {
  ListCidrLocationsCommandInput,
  ListCidrLocationsCommandOutput,
} from "./commands/ListCidrLocationsCommand";
import type { ListGeoLocationsCommandInput, ListGeoLocationsCommandOutput } from "./commands/ListGeoLocationsCommand";
import type {
  ListHealthChecksBySourceCommandInput,
  ListHealthChecksBySourceCommandOutput,
} from "./commands/ListHealthChecksBySourceCommand";
import type { ListHealthChecksCommandInput, ListHealthChecksCommandOutput } from "./commands/ListHealthChecksCommand";
import type {
  ListHealthCheckSourcesCommandInput,
  ListHealthCheckSourcesCommandOutput,
} from "./commands/ListHealthCheckSourcesCommand";
import type {
  ListHostedZoneChangeBatchesCommandInput,
  ListHostedZoneChangeBatchesCommandOutput,
} from "./commands/ListHostedZoneChangeBatchesCommand";
import type {
  ListHostedZonesByNameCommandInput,
  ListHostedZonesByNameCommandOutput,
} from "./commands/ListHostedZonesByNameCommand";
import type {
  ListHostedZonesByVPCCommandInput,
  ListHostedZonesByVPCCommandOutput,
} from "./commands/ListHostedZonesByVPCCommand";
import type { ListHostedZonesCommandInput, ListHostedZonesCommandOutput } from "./commands/ListHostedZonesCommand";
import type {
  ListQueryLoggingConfigsCommandInput,
  ListQueryLoggingConfigsCommandOutput,
} from "./commands/ListQueryLoggingConfigsCommand";
import type {
  ListResourceRecordSetChangesCommandInput,
  ListResourceRecordSetChangesCommandOutput,
} from "./commands/ListResourceRecordSetChangesCommand";
import type {
  ListResourceRecordSetProtectionsCommandInput,
  ListResourceRecordSetProtectionsCommandOutput,
} from "./commands/ListResourceRecordSetProtectionsCommand";
import type {
  ListResourceRecordSetsCommandInput,
  ListResourceRecordSetsCommandOutput,
} from "./commands/ListResourceRecordSetsCommand";
import type {
  ListReusableDelegationSetsCommandInput,
  ListReusableDelegationSetsCommandOutput,
} from "./commands/ListReusableDelegationSetsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListTagsForResourcesCommandInput,
  ListTagsForResourcesCommandOutput,
} from "./commands/ListTagsForResourcesCommand";
import type {
  ListTrafficPoliciesCommandInput,
  ListTrafficPoliciesCommandOutput,
} from "./commands/ListTrafficPoliciesCommand";
import type {
  ListTrafficPolicyInstancesByHostedZoneCommandInput,
  ListTrafficPolicyInstancesByHostedZoneCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByHostedZoneCommand";
import type {
  ListTrafficPolicyInstancesByPolicyCommandInput,
  ListTrafficPolicyInstancesByPolicyCommandOutput,
} from "./commands/ListTrafficPolicyInstancesByPolicyCommand";
import type {
  ListTrafficPolicyInstancesCommandInput,
  ListTrafficPolicyInstancesCommandOutput,
} from "./commands/ListTrafficPolicyInstancesCommand";
import type {
  ListTrafficPolicyVersionsCommandInput,
  ListTrafficPolicyVersionsCommandOutput,
} from "./commands/ListTrafficPolicyVersionsCommand";
import type {
  ListVPCAssociationAuthorizationsCommandInput,
  ListVPCAssociationAuthorizationsCommandOutput,
} from "./commands/ListVPCAssociationAuthorizationsCommand";
import type { TestDNSAnswerCommandInput, TestDNSAnswerCommandOutput } from "./commands/TestDNSAnswerCommand";
import type {
  UpdateHealthCheckCommandInput,
  UpdateHealthCheckCommandOutput,
} from "./commands/UpdateHealthCheckCommand";
import type {
  UpdateHostedZoneCommentCommandInput,
  UpdateHostedZoneCommentCommandOutput,
} from "./commands/UpdateHostedZoneCommentCommand";
import type {
  UpdateHostedZoneFeaturesCommandInput,
  UpdateHostedZoneFeaturesCommandOutput,
} from "./commands/UpdateHostedZoneFeaturesCommand";
import type {
  UpdateHostedZoneTierCommandInput,
  UpdateHostedZoneTierCommandOutput,
} from "./commands/UpdateHostedZoneTierCommand";
import type {
  UpdateTrafficPolicyCommentCommandInput,
  UpdateTrafficPolicyCommentCommandOutput,
} from "./commands/UpdateTrafficPolicyCommentCommand";
import type {
  UpdateTrafficPolicyInstanceCommandInput,
  UpdateTrafficPolicyInstanceCommandOutput,
} from "./commands/UpdateTrafficPolicyInstanceCommand";
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
  | ActivateKeySigningKeyCommandInput
  | AssociateVPCWithHostedZoneCommandInput
  | ChangeCidrCollectionCommandInput
  | ChangeResourceRecordSetsCommandInput
  | ChangeTagsForResourceCommandInput
  | CreateCidrCollectionCommandInput
  | CreateHealthCheckCommandInput
  | CreateHealthCheckSourceCommandInput
  | CreateHostedZoneCommandInput
  | CreateKeySigningKeyCommandInput
  | CreateQueryLoggingConfigCommandInput
  | CreateResourceRecordSetProtectionsCommandInput
  | CreateReusableDelegationSetCommandInput
  | CreateTrafficPolicyCommandInput
  | CreateTrafficPolicyInstanceCommandInput
  | CreateTrafficPolicyVersionCommandInput
  | CreateVPCAssociationAuthorizationCommandInput
  | DeactivateKeySigningKeyCommandInput
  | DeleteCidrCollectionCommandInput
  | DeleteHealthCheckCommandInput
  | DeleteHealthCheckSourceCommandInput
  | DeleteHostedZoneCommandInput
  | DeleteKeySigningKeyCommandInput
  | DeleteQueryLoggingConfigCommandInput
  | DeleteResourceRecordSetProtectionsCommandInput
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
  | GetHealthCheckSourceCommandInput
  | GetHealthCheckStatusCommandInput
  | GetHostedZoneChangeBatchCommandInput
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
  | ListHealthCheckSourcesCommandInput
  | ListHealthChecksBySourceCommandInput
  | ListHealthChecksCommandInput
  | ListHostedZoneChangeBatchesCommandInput
  | ListHostedZonesByNameCommandInput
  | ListHostedZonesByVPCCommandInput
  | ListHostedZonesCommandInput
  | ListQueryLoggingConfigsCommandInput
  | ListResourceRecordSetChangesCommandInput
  | ListResourceRecordSetProtectionsCommandInput
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
  | UpdateHostedZoneTierCommandInput
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
  | CreateHealthCheckSourceCommandOutput
  | CreateHostedZoneCommandOutput
  | CreateKeySigningKeyCommandOutput
  | CreateQueryLoggingConfigCommandOutput
  | CreateResourceRecordSetProtectionsCommandOutput
  | CreateReusableDelegationSetCommandOutput
  | CreateTrafficPolicyCommandOutput
  | CreateTrafficPolicyInstanceCommandOutput
  | CreateTrafficPolicyVersionCommandOutput
  | CreateVPCAssociationAuthorizationCommandOutput
  | DeactivateKeySigningKeyCommandOutput
  | DeleteCidrCollectionCommandOutput
  | DeleteHealthCheckCommandOutput
  | DeleteHealthCheckSourceCommandOutput
  | DeleteHostedZoneCommandOutput
  | DeleteKeySigningKeyCommandOutput
  | DeleteQueryLoggingConfigCommandOutput
  | DeleteResourceRecordSetProtectionsCommandOutput
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
  | GetHealthCheckSourceCommandOutput
  | GetHealthCheckStatusCommandOutput
  | GetHostedZoneChangeBatchCommandOutput
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
  | ListHealthCheckSourcesCommandOutput
  | ListHealthChecksBySourceCommandOutput
  | ListHealthChecksCommandOutput
  | ListHostedZoneChangeBatchesCommandOutput
  | ListHostedZonesByNameCommandOutput
  | ListHostedZonesByVPCCommandOutput
  | ListHostedZonesCommandOutput
  | ListQueryLoggingConfigsCommandOutput
  | ListResourceRecordSetChangesCommandOutput
  | ListResourceRecordSetProtectionsCommandOutput
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
  | UpdateHostedZoneTierCommandOutput
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
   * Accepted values are "standard" and "adaptive".
   * @see https://docs.aws.amazon.com/sdkref/latest/guide/feature-retry-behavior.html
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
 * <p>Amazon Route 53 is a highly available and scalable Domain Name System (DNS) web service. Route 53 performs four main functions:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Domain registration</b> – Route 53 lets you register domain names such as example.com.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Domain Name System (DNS) service</b> – Route 53 translates friendly domain names into IP addresses using a global network of authoritative DNS servers, and provides DNS resolution within your VPCs for private hosted zones.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Health checking</b> – Route 53 sends automated requests to your application, over the internet or from within your VPC for private endpoints, to verify that it's reachable, available, and functional.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Resolver</b> – Route 53 Resolver lets you forward DNS queries from a VPC that you created using Amazon VPC to DNS resolvers in your network, and from your network to resolvers in your VPC.</p>
 *             </li>
 *          </ul>
 *          <p>You can use the API to create and manage the following resources:</p>
 *          <dl>
 *             <dt>Public and Private Hosted Zones</dt>
 *             <dd>
 *                <p>A <i>public hosted zone</i> is a container that holds information about how you want to route traffic on the internet for a domain, such as example.com, and its subdomains.</p>
 *                <p>A <i>private hosted zone</i> is a container that holds information about how you want to route traffic for a domain and its subdomains within one or more VPCs that you created with the Amazon VPC service.</p>
 *             </dd>
 *             <dt>Reusable Delegation Sets</dt>
 *             <dd>
 *                <p>By default, each hosted zone that you create gets a different set of four name servers—a different delegation set. If you create a lot of hosted zones, maintaining different delegation sets can be difficult and time consuming. Route 53 lets you create a delegation set that you can reuse with multiple hosted zones.</p>
 *             </dd>
 *             <dt>Resource Record Sets</dt>
 *             <dd>
 *                <p>After you create a hosted zone for your domain, such as example.com, you create resource record sets to tell the Domain Name System (DNS) how to route traffic for that domain.</p>
 *             </dd>
 *             <dt>Traffic Policies and Traffic Policy Instances</dt>
 *             <dd>
 *                <p>You can create complex routing configurations, known as traffic policies, that use weighted, latency, failover, and geolocation resource record sets. You can then associate a traffic policy with a domain name or subdomain name, such as www.example.com, by creating a traffic policy instance. When users submit DNS queries for the domain or subdomain, Route 53 responds based on the traffic policy that you used to create the traffic policy instance.</p>
 *             </dd>
 *             <dt>Health Checks</dt>
 *             <dd>
 *                <p>Route 53 health checks monitor the health and performance of your web applications, web servers, and other resources. At regular intervals that you specify, Route 53 submits automated requests to your application, server, or other resource, over the internet or from within your VPC for private endpoints, to verify that it's reachable, available, and functional.</p>
 *             </dd>
 *             <dt>Domain Registrations</dt>
 *             <dd>
 *                <p>When you want to get a new domain name, such as example.com, you can register it with Route 53. You can also transfer the registration for existing domains from other registrars to Route 53.</p>
 *             </dd>
 *             <dt>DNS–DNSSEC</dt>
 *             <dd>
 *                <p>You can protect your domain from DNS spoofing or a man-in-the-middle attack, by configuring Domain Name System Security Extensions (DNSSEC).</p>
 *             </dd>
 *             <dt>Query Logs</dt>
 *             <dd>
 *                <p>You can configure Route 53 to log information about the DNS queries that Route 53 receives, such as the domain or subdomain that was requested, the date and time of the request, and the DNS record type (such as A or AAAA).</p>
 *                <p>You can also configure Route 53 Resolver to log information about the DNS queries that originate in Amazon VPCs.</p>
 *             </dd>
 *             <dt>Outbound and Inbound Endpoints, and Rules</dt>
 *             <dd>
 *                <p>You can configure Route 53 Resolver to forward DNS queries from your VPC to your network or vice versa. DNS queries pass through an outbound endpoint on their way from a VPC to your network, and they pass through an inbound endpoint on their way from your network to a VPC. For outbound queries, rules let you specify the domain names that you want to forward to your network and the IP addresses of the DNS resolvers in your network.</p>
 *             </dd>
 *             <dt>Tags</dt>
 *             <dd>
 *                <p>A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key and a value, both of which you define. You can use tags for a variety of purposes; one common use is to categorize and track your Route 53 costs.</p>
 *             </dd>
 *             <dt>Profiles</dt>
 *             <dd>
 *                <p>A <i>profile</i> is a named container that groups DNS configurations—such as private hosted zone associations, Resolver rules, and DNS Firewall rule groups—into a single reusable unit. You can associate a profile with multiple VPCs and share it across Amazon Web Services accounts so that each VPC inherits the same DNS settings without requiring individual configuration.</p>
 *             </dd>
 *             <dt>DNS Firewall</dt>
 *             <dd>
 *                <p>A <i>DNS Firewall rule group</i> is an ordered collection of rules that each pair a domain list with an action—allow, block, or alert. You associate rule groups with your VPCs to filter outbound DNS queries made by VPC resources, preventing connections to known-malicious domains or restricting access to only approved domains.</p>
 *             </dd>
 *          </dl>
 *          <p>You can also use the Route 53 API to get the current limit on Route 53 objects that you can create, such as hosted zones and health checks.</p>
 *          <p>For information about Route 53 concepts and about how to use the Route 53 console, see the
 * 			<a href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/">Amazon Route 53 Developer Guide</a>.</p>
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
