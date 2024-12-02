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
  Decoder as __Decoder,
  Encoder as __Encoder,
  EndpointV2 as __EndpointV2,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@smithy/types";

import {
  defaultVPCLatticeHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchUpdateRuleCommandInput, BatchUpdateRuleCommandOutput } from "./commands/BatchUpdateRuleCommand";
import {
  CreateAccessLogSubscriptionCommandInput,
  CreateAccessLogSubscriptionCommandOutput,
} from "./commands/CreateAccessLogSubscriptionCommand";
import { CreateListenerCommandInput, CreateListenerCommandOutput } from "./commands/CreateListenerCommand";
import {
  CreateResourceConfigurationCommandInput,
  CreateResourceConfigurationCommandOutput,
} from "./commands/CreateResourceConfigurationCommand";
import {
  CreateResourceGatewayCommandInput,
  CreateResourceGatewayCommandOutput,
} from "./commands/CreateResourceGatewayCommand";
import { CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { CreateServiceCommandInput, CreateServiceCommandOutput } from "./commands/CreateServiceCommand";
import {
  CreateServiceNetworkCommandInput,
  CreateServiceNetworkCommandOutput,
} from "./commands/CreateServiceNetworkCommand";
import {
  CreateServiceNetworkResourceAssociationCommandInput,
  CreateServiceNetworkResourceAssociationCommandOutput,
} from "./commands/CreateServiceNetworkResourceAssociationCommand";
import {
  CreateServiceNetworkServiceAssociationCommandInput,
  CreateServiceNetworkServiceAssociationCommandOutput,
} from "./commands/CreateServiceNetworkServiceAssociationCommand";
import {
  CreateServiceNetworkVpcAssociationCommandInput,
  CreateServiceNetworkVpcAssociationCommandOutput,
} from "./commands/CreateServiceNetworkVpcAssociationCommand";
import { CreateTargetGroupCommandInput, CreateTargetGroupCommandOutput } from "./commands/CreateTargetGroupCommand";
import {
  DeleteAccessLogSubscriptionCommandInput,
  DeleteAccessLogSubscriptionCommandOutput,
} from "./commands/DeleteAccessLogSubscriptionCommand";
import { DeleteAuthPolicyCommandInput, DeleteAuthPolicyCommandOutput } from "./commands/DeleteAuthPolicyCommand";
import { DeleteListenerCommandInput, DeleteListenerCommandOutput } from "./commands/DeleteListenerCommand";
import {
  DeleteResourceConfigurationCommandInput,
  DeleteResourceConfigurationCommandOutput,
} from "./commands/DeleteResourceConfigurationCommand";
import {
  DeleteResourceEndpointAssociationCommandInput,
  DeleteResourceEndpointAssociationCommandOutput,
} from "./commands/DeleteResourceEndpointAssociationCommand";
import {
  DeleteResourceGatewayCommandInput,
  DeleteResourceGatewayCommandOutput,
} from "./commands/DeleteResourceGatewayCommand";
import {
  DeleteResourcePolicyCommandInput,
  DeleteResourcePolicyCommandOutput,
} from "./commands/DeleteResourcePolicyCommand";
import { DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { DeleteServiceCommandInput, DeleteServiceCommandOutput } from "./commands/DeleteServiceCommand";
import {
  DeleteServiceNetworkCommandInput,
  DeleteServiceNetworkCommandOutput,
} from "./commands/DeleteServiceNetworkCommand";
import {
  DeleteServiceNetworkResourceAssociationCommandInput,
  DeleteServiceNetworkResourceAssociationCommandOutput,
} from "./commands/DeleteServiceNetworkResourceAssociationCommand";
import {
  DeleteServiceNetworkServiceAssociationCommandInput,
  DeleteServiceNetworkServiceAssociationCommandOutput,
} from "./commands/DeleteServiceNetworkServiceAssociationCommand";
import {
  DeleteServiceNetworkVpcAssociationCommandInput,
  DeleteServiceNetworkVpcAssociationCommandOutput,
} from "./commands/DeleteServiceNetworkVpcAssociationCommand";
import { DeleteTargetGroupCommandInput, DeleteTargetGroupCommandOutput } from "./commands/DeleteTargetGroupCommand";
import { DeregisterTargetsCommandInput, DeregisterTargetsCommandOutput } from "./commands/DeregisterTargetsCommand";
import {
  GetAccessLogSubscriptionCommandInput,
  GetAccessLogSubscriptionCommandOutput,
} from "./commands/GetAccessLogSubscriptionCommand";
import { GetAuthPolicyCommandInput, GetAuthPolicyCommandOutput } from "./commands/GetAuthPolicyCommand";
import { GetListenerCommandInput, GetListenerCommandOutput } from "./commands/GetListenerCommand";
import {
  GetResourceConfigurationCommandInput,
  GetResourceConfigurationCommandOutput,
} from "./commands/GetResourceConfigurationCommand";
import { GetResourceGatewayCommandInput, GetResourceGatewayCommandOutput } from "./commands/GetResourceGatewayCommand";
import { GetResourcePolicyCommandInput, GetResourcePolicyCommandOutput } from "./commands/GetResourcePolicyCommand";
import { GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { GetServiceCommandInput, GetServiceCommandOutput } from "./commands/GetServiceCommand";
import { GetServiceNetworkCommandInput, GetServiceNetworkCommandOutput } from "./commands/GetServiceNetworkCommand";
import {
  GetServiceNetworkResourceAssociationCommandInput,
  GetServiceNetworkResourceAssociationCommandOutput,
} from "./commands/GetServiceNetworkResourceAssociationCommand";
import {
  GetServiceNetworkServiceAssociationCommandInput,
  GetServiceNetworkServiceAssociationCommandOutput,
} from "./commands/GetServiceNetworkServiceAssociationCommand";
import {
  GetServiceNetworkVpcAssociationCommandInput,
  GetServiceNetworkVpcAssociationCommandOutput,
} from "./commands/GetServiceNetworkVpcAssociationCommand";
import { GetTargetGroupCommandInput, GetTargetGroupCommandOutput } from "./commands/GetTargetGroupCommand";
import {
  ListAccessLogSubscriptionsCommandInput,
  ListAccessLogSubscriptionsCommandOutput,
} from "./commands/ListAccessLogSubscriptionsCommand";
import { ListListenersCommandInput, ListListenersCommandOutput } from "./commands/ListListenersCommand";
import {
  ListResourceConfigurationsCommandInput,
  ListResourceConfigurationsCommandOutput,
} from "./commands/ListResourceConfigurationsCommand";
import {
  ListResourceEndpointAssociationsCommandInput,
  ListResourceEndpointAssociationsCommandOutput,
} from "./commands/ListResourceEndpointAssociationsCommand";
import {
  ListResourceGatewaysCommandInput,
  ListResourceGatewaysCommandOutput,
} from "./commands/ListResourceGatewaysCommand";
import { ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListServiceNetworkResourceAssociationsCommandInput,
  ListServiceNetworkResourceAssociationsCommandOutput,
} from "./commands/ListServiceNetworkResourceAssociationsCommand";
import {
  ListServiceNetworksCommandInput,
  ListServiceNetworksCommandOutput,
} from "./commands/ListServiceNetworksCommand";
import {
  ListServiceNetworkServiceAssociationsCommandInput,
  ListServiceNetworkServiceAssociationsCommandOutput,
} from "./commands/ListServiceNetworkServiceAssociationsCommand";
import {
  ListServiceNetworkVpcAssociationsCommandInput,
  ListServiceNetworkVpcAssociationsCommandOutput,
} from "./commands/ListServiceNetworkVpcAssociationsCommand";
import {
  ListServiceNetworkVpcEndpointAssociationsCommandInput,
  ListServiceNetworkVpcEndpointAssociationsCommandOutput,
} from "./commands/ListServiceNetworkVpcEndpointAssociationsCommand";
import { ListServicesCommandInput, ListServicesCommandOutput } from "./commands/ListServicesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListTargetGroupsCommandInput, ListTargetGroupsCommandOutput } from "./commands/ListTargetGroupsCommand";
import { ListTargetsCommandInput, ListTargetsCommandOutput } from "./commands/ListTargetsCommand";
import { PutAuthPolicyCommandInput, PutAuthPolicyCommandOutput } from "./commands/PutAuthPolicyCommand";
import { PutResourcePolicyCommandInput, PutResourcePolicyCommandOutput } from "./commands/PutResourcePolicyCommand";
import { RegisterTargetsCommandInput, RegisterTargetsCommandOutput } from "./commands/RegisterTargetsCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateAccessLogSubscriptionCommandInput,
  UpdateAccessLogSubscriptionCommandOutput,
} from "./commands/UpdateAccessLogSubscriptionCommand";
import { UpdateListenerCommandInput, UpdateListenerCommandOutput } from "./commands/UpdateListenerCommand";
import {
  UpdateResourceConfigurationCommandInput,
  UpdateResourceConfigurationCommandOutput,
} from "./commands/UpdateResourceConfigurationCommand";
import {
  UpdateResourceGatewayCommandInput,
  UpdateResourceGatewayCommandOutput,
} from "./commands/UpdateResourceGatewayCommand";
import { UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import { UpdateServiceCommandInput, UpdateServiceCommandOutput } from "./commands/UpdateServiceCommand";
import {
  UpdateServiceNetworkCommandInput,
  UpdateServiceNetworkCommandOutput,
} from "./commands/UpdateServiceNetworkCommand";
import {
  UpdateServiceNetworkVpcAssociationCommandInput,
  UpdateServiceNetworkVpcAssociationCommandOutput,
} from "./commands/UpdateServiceNetworkVpcAssociationCommand";
import { UpdateTargetGroupCommandInput, UpdateTargetGroupCommandOutput } from "./commands/UpdateTargetGroupCommand";
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
  | BatchUpdateRuleCommandInput
  | CreateAccessLogSubscriptionCommandInput
  | CreateListenerCommandInput
  | CreateResourceConfigurationCommandInput
  | CreateResourceGatewayCommandInput
  | CreateRuleCommandInput
  | CreateServiceCommandInput
  | CreateServiceNetworkCommandInput
  | CreateServiceNetworkResourceAssociationCommandInput
  | CreateServiceNetworkServiceAssociationCommandInput
  | CreateServiceNetworkVpcAssociationCommandInput
  | CreateTargetGroupCommandInput
  | DeleteAccessLogSubscriptionCommandInput
  | DeleteAuthPolicyCommandInput
  | DeleteListenerCommandInput
  | DeleteResourceConfigurationCommandInput
  | DeleteResourceEndpointAssociationCommandInput
  | DeleteResourceGatewayCommandInput
  | DeleteResourcePolicyCommandInput
  | DeleteRuleCommandInput
  | DeleteServiceCommandInput
  | DeleteServiceNetworkCommandInput
  | DeleteServiceNetworkResourceAssociationCommandInput
  | DeleteServiceNetworkServiceAssociationCommandInput
  | DeleteServiceNetworkVpcAssociationCommandInput
  | DeleteTargetGroupCommandInput
  | DeregisterTargetsCommandInput
  | GetAccessLogSubscriptionCommandInput
  | GetAuthPolicyCommandInput
  | GetListenerCommandInput
  | GetResourceConfigurationCommandInput
  | GetResourceGatewayCommandInput
  | GetResourcePolicyCommandInput
  | GetRuleCommandInput
  | GetServiceCommandInput
  | GetServiceNetworkCommandInput
  | GetServiceNetworkResourceAssociationCommandInput
  | GetServiceNetworkServiceAssociationCommandInput
  | GetServiceNetworkVpcAssociationCommandInput
  | GetTargetGroupCommandInput
  | ListAccessLogSubscriptionsCommandInput
  | ListListenersCommandInput
  | ListResourceConfigurationsCommandInput
  | ListResourceEndpointAssociationsCommandInput
  | ListResourceGatewaysCommandInput
  | ListRulesCommandInput
  | ListServiceNetworkResourceAssociationsCommandInput
  | ListServiceNetworkServiceAssociationsCommandInput
  | ListServiceNetworkVpcAssociationsCommandInput
  | ListServiceNetworkVpcEndpointAssociationsCommandInput
  | ListServiceNetworksCommandInput
  | ListServicesCommandInput
  | ListTagsForResourceCommandInput
  | ListTargetGroupsCommandInput
  | ListTargetsCommandInput
  | PutAuthPolicyCommandInput
  | PutResourcePolicyCommandInput
  | RegisterTargetsCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAccessLogSubscriptionCommandInput
  | UpdateListenerCommandInput
  | UpdateResourceConfigurationCommandInput
  | UpdateResourceGatewayCommandInput
  | UpdateRuleCommandInput
  | UpdateServiceCommandInput
  | UpdateServiceNetworkCommandInput
  | UpdateServiceNetworkVpcAssociationCommandInput
  | UpdateTargetGroupCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchUpdateRuleCommandOutput
  | CreateAccessLogSubscriptionCommandOutput
  | CreateListenerCommandOutput
  | CreateResourceConfigurationCommandOutput
  | CreateResourceGatewayCommandOutput
  | CreateRuleCommandOutput
  | CreateServiceCommandOutput
  | CreateServiceNetworkCommandOutput
  | CreateServiceNetworkResourceAssociationCommandOutput
  | CreateServiceNetworkServiceAssociationCommandOutput
  | CreateServiceNetworkVpcAssociationCommandOutput
  | CreateTargetGroupCommandOutput
  | DeleteAccessLogSubscriptionCommandOutput
  | DeleteAuthPolicyCommandOutput
  | DeleteListenerCommandOutput
  | DeleteResourceConfigurationCommandOutput
  | DeleteResourceEndpointAssociationCommandOutput
  | DeleteResourceGatewayCommandOutput
  | DeleteResourcePolicyCommandOutput
  | DeleteRuleCommandOutput
  | DeleteServiceCommandOutput
  | DeleteServiceNetworkCommandOutput
  | DeleteServiceNetworkResourceAssociationCommandOutput
  | DeleteServiceNetworkServiceAssociationCommandOutput
  | DeleteServiceNetworkVpcAssociationCommandOutput
  | DeleteTargetGroupCommandOutput
  | DeregisterTargetsCommandOutput
  | GetAccessLogSubscriptionCommandOutput
  | GetAuthPolicyCommandOutput
  | GetListenerCommandOutput
  | GetResourceConfigurationCommandOutput
  | GetResourceGatewayCommandOutput
  | GetResourcePolicyCommandOutput
  | GetRuleCommandOutput
  | GetServiceCommandOutput
  | GetServiceNetworkCommandOutput
  | GetServiceNetworkResourceAssociationCommandOutput
  | GetServiceNetworkServiceAssociationCommandOutput
  | GetServiceNetworkVpcAssociationCommandOutput
  | GetTargetGroupCommandOutput
  | ListAccessLogSubscriptionsCommandOutput
  | ListListenersCommandOutput
  | ListResourceConfigurationsCommandOutput
  | ListResourceEndpointAssociationsCommandOutput
  | ListResourceGatewaysCommandOutput
  | ListRulesCommandOutput
  | ListServiceNetworkResourceAssociationsCommandOutput
  | ListServiceNetworkServiceAssociationsCommandOutput
  | ListServiceNetworkVpcAssociationsCommandOutput
  | ListServiceNetworkVpcEndpointAssociationsCommandOutput
  | ListServiceNetworksCommandOutput
  | ListServicesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTargetGroupsCommandOutput
  | ListTargetsCommandOutput
  | PutAuthPolicyCommandOutput
  | PutResourcePolicyCommandOutput
  | RegisterTargetsCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAccessLogSubscriptionCommandOutput
  | UpdateListenerCommandOutput
  | UpdateResourceConfigurationCommandOutput
  | UpdateResourceGatewayCommandOutput
  | UpdateRuleCommandOutput
  | UpdateServiceCommandOutput
  | UpdateServiceNetworkCommandOutput
  | UpdateServiceNetworkVpcAssociationCommandOutput
  | UpdateTargetGroupCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type VPCLatticeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of VPCLatticeClient class constructor that set the region, credentials and other options.
 */
export interface VPCLatticeClientConfig extends VPCLatticeClientConfigType {}

/**
 * @public
 */
export type VPCLatticeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of VPCLatticeClient class. This is resolved and normalized from the {@link VPCLatticeClientConfig | constructor configuration interface}.
 */
export interface VPCLatticeClientResolvedConfig extends VPCLatticeClientResolvedConfigType {}

/**
 * <p>Amazon VPC Lattice is a fully managed application networking service that you use to connect, secure,
 *    and monitor all of your services across multiple accounts and virtual private clouds (VPCs).
 *    Amazon VPC Lattice interconnects your microservices and legacy services within a logical boundary, so that
 *    you can discover and manage them more efficiently. For more information, see the <a href="https://docs.aws.amazon.com/vpc-lattice/latest/ug/">Amazon VPC Lattice User Guide</a>
 *          </p>
 * @public
 */
export class VPCLatticeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  VPCLatticeClientResolvedConfig
> {
  /**
   * The resolved configuration of VPCLatticeClient class. This is resolved and normalized from the {@link VPCLatticeClientConfig | constructor configuration interface}.
   */
  readonly config: VPCLatticeClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<VPCLatticeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultVPCLatticeHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: VPCLatticeClientResolvedConfig) =>
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
