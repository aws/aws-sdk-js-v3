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
  defaultMediaConnectHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { AddBridgeOutputsCommandInput, AddBridgeOutputsCommandOutput } from "./commands/AddBridgeOutputsCommand";
import type { AddBridgeSourcesCommandInput, AddBridgeSourcesCommandOutput } from "./commands/AddBridgeSourcesCommand";
import type {
  AddFlowMediaStreamsCommandInput,
  AddFlowMediaStreamsCommandOutput,
} from "./commands/AddFlowMediaStreamsCommand";
import type { AddFlowOutputsCommandInput, AddFlowOutputsCommandOutput } from "./commands/AddFlowOutputsCommand";
import type { AddFlowSourcesCommandInput, AddFlowSourcesCommandOutput } from "./commands/AddFlowSourcesCommand";
import type {
  AddFlowVpcInterfacesCommandInput,
  AddFlowVpcInterfacesCommandOutput,
} from "./commands/AddFlowVpcInterfacesCommand";
import type {
  BatchGetRouterInputCommandInput,
  BatchGetRouterInputCommandOutput,
} from "./commands/BatchGetRouterInputCommand";
import type {
  BatchGetRouterNetworkInterfaceCommandInput,
  BatchGetRouterNetworkInterfaceCommandOutput,
} from "./commands/BatchGetRouterNetworkInterfaceCommand";
import type {
  BatchGetRouterOutputCommandInput,
  BatchGetRouterOutputCommandOutput,
} from "./commands/BatchGetRouterOutputCommand";
import type { CreateBridgeCommandInput, CreateBridgeCommandOutput } from "./commands/CreateBridgeCommand";
import type { CreateFlowCommandInput, CreateFlowCommandOutput } from "./commands/CreateFlowCommand";
import type { CreateGatewayCommandInput, CreateGatewayCommandOutput } from "./commands/CreateGatewayCommand";
import type {
  CreateRouterInputCommandInput,
  CreateRouterInputCommandOutput,
} from "./commands/CreateRouterInputCommand";
import type {
  CreateRouterNetworkInterfaceCommandInput,
  CreateRouterNetworkInterfaceCommandOutput,
} from "./commands/CreateRouterNetworkInterfaceCommand";
import type {
  CreateRouterOutputCommandInput,
  CreateRouterOutputCommandOutput,
} from "./commands/CreateRouterOutputCommand";
import type { DeleteBridgeCommandInput, DeleteBridgeCommandOutput } from "./commands/DeleteBridgeCommand";
import type { DeleteFlowCommandInput, DeleteFlowCommandOutput } from "./commands/DeleteFlowCommand";
import type { DeleteGatewayCommandInput, DeleteGatewayCommandOutput } from "./commands/DeleteGatewayCommand";
import type {
  DeleteRouterInputCommandInput,
  DeleteRouterInputCommandOutput,
} from "./commands/DeleteRouterInputCommand";
import type {
  DeleteRouterNetworkInterfaceCommandInput,
  DeleteRouterNetworkInterfaceCommandOutput,
} from "./commands/DeleteRouterNetworkInterfaceCommand";
import type {
  DeleteRouterOutputCommandInput,
  DeleteRouterOutputCommandOutput,
} from "./commands/DeleteRouterOutputCommand";
import type {
  DeregisterGatewayInstanceCommandInput,
  DeregisterGatewayInstanceCommandOutput,
} from "./commands/DeregisterGatewayInstanceCommand";
import type { DescribeBridgeCommandInput, DescribeBridgeCommandOutput } from "./commands/DescribeBridgeCommand";
import type { DescribeFlowCommandInput, DescribeFlowCommandOutput } from "./commands/DescribeFlowCommand";
import type {
  DescribeFlowSourceMetadataCommandInput,
  DescribeFlowSourceMetadataCommandOutput,
} from "./commands/DescribeFlowSourceMetadataCommand";
import type {
  DescribeFlowSourceThumbnailCommandInput,
  DescribeFlowSourceThumbnailCommandOutput,
} from "./commands/DescribeFlowSourceThumbnailCommand";
import type { DescribeGatewayCommandInput, DescribeGatewayCommandOutput } from "./commands/DescribeGatewayCommand";
import type {
  DescribeGatewayInstanceCommandInput,
  DescribeGatewayInstanceCommandOutput,
} from "./commands/DescribeGatewayInstanceCommand";
import type { DescribeOfferingCommandInput, DescribeOfferingCommandOutput } from "./commands/DescribeOfferingCommand";
import type {
  DescribeReservationCommandInput,
  DescribeReservationCommandOutput,
} from "./commands/DescribeReservationCommand";
import type { GetRouterInputCommandInput, GetRouterInputCommandOutput } from "./commands/GetRouterInputCommand";
import type {
  GetRouterInputSourceMetadataCommandInput,
  GetRouterInputSourceMetadataCommandOutput,
} from "./commands/GetRouterInputSourceMetadataCommand";
import type {
  GetRouterInputThumbnailCommandInput,
  GetRouterInputThumbnailCommandOutput,
} from "./commands/GetRouterInputThumbnailCommand";
import type {
  GetRouterNetworkInterfaceCommandInput,
  GetRouterNetworkInterfaceCommandOutput,
} from "./commands/GetRouterNetworkInterfaceCommand";
import type { GetRouterOutputCommandInput, GetRouterOutputCommandOutput } from "./commands/GetRouterOutputCommand";
import type {
  GrantFlowEntitlementsCommandInput,
  GrantFlowEntitlementsCommandOutput,
} from "./commands/GrantFlowEntitlementsCommand";
import type { ListBridgesCommandInput, ListBridgesCommandOutput } from "./commands/ListBridgesCommand";
import type { ListEntitlementsCommandInput, ListEntitlementsCommandOutput } from "./commands/ListEntitlementsCommand";
import type { ListFlowsCommandInput, ListFlowsCommandOutput } from "./commands/ListFlowsCommand";
import type {
  ListGatewayInstancesCommandInput,
  ListGatewayInstancesCommandOutput,
} from "./commands/ListGatewayInstancesCommand";
import type { ListGatewaysCommandInput, ListGatewaysCommandOutput } from "./commands/ListGatewaysCommand";
import type { ListOfferingsCommandInput, ListOfferingsCommandOutput } from "./commands/ListOfferingsCommand";
import type { ListReservationsCommandInput, ListReservationsCommandOutput } from "./commands/ListReservationsCommand";
import type { ListRouterInputsCommandInput, ListRouterInputsCommandOutput } from "./commands/ListRouterInputsCommand";
import type {
  ListRouterNetworkInterfacesCommandInput,
  ListRouterNetworkInterfacesCommandOutput,
} from "./commands/ListRouterNetworkInterfacesCommand";
import type {
  ListRouterOutputsCommandInput,
  ListRouterOutputsCommandOutput,
} from "./commands/ListRouterOutputsCommand";
import type {
  ListTagsForGlobalResourceCommandInput,
  ListTagsForGlobalResourceCommandOutput,
} from "./commands/ListTagsForGlobalResourceCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput } from "./commands/PurchaseOfferingCommand";
import type {
  RemoveBridgeOutputCommandInput,
  RemoveBridgeOutputCommandOutput,
} from "./commands/RemoveBridgeOutputCommand";
import type {
  RemoveBridgeSourceCommandInput,
  RemoveBridgeSourceCommandOutput,
} from "./commands/RemoveBridgeSourceCommand";
import type {
  RemoveFlowMediaStreamCommandInput,
  RemoveFlowMediaStreamCommandOutput,
} from "./commands/RemoveFlowMediaStreamCommand";
import type { RemoveFlowOutputCommandInput, RemoveFlowOutputCommandOutput } from "./commands/RemoveFlowOutputCommand";
import type { RemoveFlowSourceCommandInput, RemoveFlowSourceCommandOutput } from "./commands/RemoveFlowSourceCommand";
import type {
  RemoveFlowVpcInterfaceCommandInput,
  RemoveFlowVpcInterfaceCommandOutput,
} from "./commands/RemoveFlowVpcInterfaceCommand";
import type {
  RestartRouterInputCommandInput,
  RestartRouterInputCommandOutput,
} from "./commands/RestartRouterInputCommand";
import type {
  RestartRouterOutputCommandInput,
  RestartRouterOutputCommandOutput,
} from "./commands/RestartRouterOutputCommand";
import type {
  RevokeFlowEntitlementCommandInput,
  RevokeFlowEntitlementCommandOutput,
} from "./commands/RevokeFlowEntitlementCommand";
import type { StartFlowCommandInput, StartFlowCommandOutput } from "./commands/StartFlowCommand";
import type { StartRouterInputCommandInput, StartRouterInputCommandOutput } from "./commands/StartRouterInputCommand";
import type {
  StartRouterOutputCommandInput,
  StartRouterOutputCommandOutput,
} from "./commands/StartRouterOutputCommand";
import type { StopFlowCommandInput, StopFlowCommandOutput } from "./commands/StopFlowCommand";
import type { StopRouterInputCommandInput, StopRouterInputCommandOutput } from "./commands/StopRouterInputCommand";
import type { StopRouterOutputCommandInput, StopRouterOutputCommandOutput } from "./commands/StopRouterOutputCommand";
import type {
  TagGlobalResourceCommandInput,
  TagGlobalResourceCommandOutput,
} from "./commands/TagGlobalResourceCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { TakeRouterInputCommandInput, TakeRouterInputCommandOutput } from "./commands/TakeRouterInputCommand";
import type {
  UntagGlobalResourceCommandInput,
  UntagGlobalResourceCommandOutput,
} from "./commands/UntagGlobalResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateBridgeCommandInput, UpdateBridgeCommandOutput } from "./commands/UpdateBridgeCommand";
import type {
  UpdateBridgeOutputCommandInput,
  UpdateBridgeOutputCommandOutput,
} from "./commands/UpdateBridgeOutputCommand";
import type {
  UpdateBridgeSourceCommandInput,
  UpdateBridgeSourceCommandOutput,
} from "./commands/UpdateBridgeSourceCommand";
import type {
  UpdateBridgeStateCommandInput,
  UpdateBridgeStateCommandOutput,
} from "./commands/UpdateBridgeStateCommand";
import type { UpdateFlowCommandInput, UpdateFlowCommandOutput } from "./commands/UpdateFlowCommand";
import type {
  UpdateFlowEntitlementCommandInput,
  UpdateFlowEntitlementCommandOutput,
} from "./commands/UpdateFlowEntitlementCommand";
import type {
  UpdateFlowMediaStreamCommandInput,
  UpdateFlowMediaStreamCommandOutput,
} from "./commands/UpdateFlowMediaStreamCommand";
import type { UpdateFlowOutputCommandInput, UpdateFlowOutputCommandOutput } from "./commands/UpdateFlowOutputCommand";
import type { UpdateFlowSourceCommandInput, UpdateFlowSourceCommandOutput } from "./commands/UpdateFlowSourceCommand";
import type {
  UpdateGatewayInstanceCommandInput,
  UpdateGatewayInstanceCommandOutput,
} from "./commands/UpdateGatewayInstanceCommand";
import type {
  UpdateRouterInputCommandInput,
  UpdateRouterInputCommandOutput,
} from "./commands/UpdateRouterInputCommand";
import type {
  UpdateRouterNetworkInterfaceCommandInput,
  UpdateRouterNetworkInterfaceCommandOutput,
} from "./commands/UpdateRouterNetworkInterfaceCommand";
import type {
  UpdateRouterOutputCommandInput,
  UpdateRouterOutputCommandOutput,
} from "./commands/UpdateRouterOutputCommand";
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
  | AddBridgeOutputsCommandInput
  | AddBridgeSourcesCommandInput
  | AddFlowMediaStreamsCommandInput
  | AddFlowOutputsCommandInput
  | AddFlowSourcesCommandInput
  | AddFlowVpcInterfacesCommandInput
  | BatchGetRouterInputCommandInput
  | BatchGetRouterNetworkInterfaceCommandInput
  | BatchGetRouterOutputCommandInput
  | CreateBridgeCommandInput
  | CreateFlowCommandInput
  | CreateGatewayCommandInput
  | CreateRouterInputCommandInput
  | CreateRouterNetworkInterfaceCommandInput
  | CreateRouterOutputCommandInput
  | DeleteBridgeCommandInput
  | DeleteFlowCommandInput
  | DeleteGatewayCommandInput
  | DeleteRouterInputCommandInput
  | DeleteRouterNetworkInterfaceCommandInput
  | DeleteRouterOutputCommandInput
  | DeregisterGatewayInstanceCommandInput
  | DescribeBridgeCommandInput
  | DescribeFlowCommandInput
  | DescribeFlowSourceMetadataCommandInput
  | DescribeFlowSourceThumbnailCommandInput
  | DescribeGatewayCommandInput
  | DescribeGatewayInstanceCommandInput
  | DescribeOfferingCommandInput
  | DescribeReservationCommandInput
  | GetRouterInputCommandInput
  | GetRouterInputSourceMetadataCommandInput
  | GetRouterInputThumbnailCommandInput
  | GetRouterNetworkInterfaceCommandInput
  | GetRouterOutputCommandInput
  | GrantFlowEntitlementsCommandInput
  | ListBridgesCommandInput
  | ListEntitlementsCommandInput
  | ListFlowsCommandInput
  | ListGatewayInstancesCommandInput
  | ListGatewaysCommandInput
  | ListOfferingsCommandInput
  | ListReservationsCommandInput
  | ListRouterInputsCommandInput
  | ListRouterNetworkInterfacesCommandInput
  | ListRouterOutputsCommandInput
  | ListTagsForGlobalResourceCommandInput
  | ListTagsForResourceCommandInput
  | PurchaseOfferingCommandInput
  | RemoveBridgeOutputCommandInput
  | RemoveBridgeSourceCommandInput
  | RemoveFlowMediaStreamCommandInput
  | RemoveFlowOutputCommandInput
  | RemoveFlowSourceCommandInput
  | RemoveFlowVpcInterfaceCommandInput
  | RestartRouterInputCommandInput
  | RestartRouterOutputCommandInput
  | RevokeFlowEntitlementCommandInput
  | StartFlowCommandInput
  | StartRouterInputCommandInput
  | StartRouterOutputCommandInput
  | StopFlowCommandInput
  | StopRouterInputCommandInput
  | StopRouterOutputCommandInput
  | TagGlobalResourceCommandInput
  | TagResourceCommandInput
  | TakeRouterInputCommandInput
  | UntagGlobalResourceCommandInput
  | UntagResourceCommandInput
  | UpdateBridgeCommandInput
  | UpdateBridgeOutputCommandInput
  | UpdateBridgeSourceCommandInput
  | UpdateBridgeStateCommandInput
  | UpdateFlowCommandInput
  | UpdateFlowEntitlementCommandInput
  | UpdateFlowMediaStreamCommandInput
  | UpdateFlowOutputCommandInput
  | UpdateFlowSourceCommandInput
  | UpdateGatewayInstanceCommandInput
  | UpdateRouterInputCommandInput
  | UpdateRouterNetworkInterfaceCommandInput
  | UpdateRouterOutputCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AddBridgeOutputsCommandOutput
  | AddBridgeSourcesCommandOutput
  | AddFlowMediaStreamsCommandOutput
  | AddFlowOutputsCommandOutput
  | AddFlowSourcesCommandOutput
  | AddFlowVpcInterfacesCommandOutput
  | BatchGetRouterInputCommandOutput
  | BatchGetRouterNetworkInterfaceCommandOutput
  | BatchGetRouterOutputCommandOutput
  | CreateBridgeCommandOutput
  | CreateFlowCommandOutput
  | CreateGatewayCommandOutput
  | CreateRouterInputCommandOutput
  | CreateRouterNetworkInterfaceCommandOutput
  | CreateRouterOutputCommandOutput
  | DeleteBridgeCommandOutput
  | DeleteFlowCommandOutput
  | DeleteGatewayCommandOutput
  | DeleteRouterInputCommandOutput
  | DeleteRouterNetworkInterfaceCommandOutput
  | DeleteRouterOutputCommandOutput
  | DeregisterGatewayInstanceCommandOutput
  | DescribeBridgeCommandOutput
  | DescribeFlowCommandOutput
  | DescribeFlowSourceMetadataCommandOutput
  | DescribeFlowSourceThumbnailCommandOutput
  | DescribeGatewayCommandOutput
  | DescribeGatewayInstanceCommandOutput
  | DescribeOfferingCommandOutput
  | DescribeReservationCommandOutput
  | GetRouterInputCommandOutput
  | GetRouterInputSourceMetadataCommandOutput
  | GetRouterInputThumbnailCommandOutput
  | GetRouterNetworkInterfaceCommandOutput
  | GetRouterOutputCommandOutput
  | GrantFlowEntitlementsCommandOutput
  | ListBridgesCommandOutput
  | ListEntitlementsCommandOutput
  | ListFlowsCommandOutput
  | ListGatewayInstancesCommandOutput
  | ListGatewaysCommandOutput
  | ListOfferingsCommandOutput
  | ListReservationsCommandOutput
  | ListRouterInputsCommandOutput
  | ListRouterNetworkInterfacesCommandOutput
  | ListRouterOutputsCommandOutput
  | ListTagsForGlobalResourceCommandOutput
  | ListTagsForResourceCommandOutput
  | PurchaseOfferingCommandOutput
  | RemoveBridgeOutputCommandOutput
  | RemoveBridgeSourceCommandOutput
  | RemoveFlowMediaStreamCommandOutput
  | RemoveFlowOutputCommandOutput
  | RemoveFlowSourceCommandOutput
  | RemoveFlowVpcInterfaceCommandOutput
  | RestartRouterInputCommandOutput
  | RestartRouterOutputCommandOutput
  | RevokeFlowEntitlementCommandOutput
  | StartFlowCommandOutput
  | StartRouterInputCommandOutput
  | StartRouterOutputCommandOutput
  | StopFlowCommandOutput
  | StopRouterInputCommandOutput
  | StopRouterOutputCommandOutput
  | TagGlobalResourceCommandOutput
  | TagResourceCommandOutput
  | TakeRouterInputCommandOutput
  | UntagGlobalResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateBridgeCommandOutput
  | UpdateBridgeOutputCommandOutput
  | UpdateBridgeSourceCommandOutput
  | UpdateBridgeStateCommandOutput
  | UpdateFlowCommandOutput
  | UpdateFlowEntitlementCommandOutput
  | UpdateFlowMediaStreamCommandOutput
  | UpdateFlowOutputCommandOutput
  | UpdateFlowSourceCommandOutput
  | UpdateGatewayInstanceCommandOutput
  | UpdateRouterInputCommandOutput
  | UpdateRouterNetworkInterfaceCommandOutput
  | UpdateRouterOutputCommandOutput;

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
export type MediaConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of MediaConnectClient class constructor that set the region, credentials and other options.
 */
export interface MediaConnectClientConfig extends MediaConnectClientConfigType {}

/**
 * @public
 */
export type MediaConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of MediaConnectClient class. This is resolved and normalized from the {@link MediaConnectClientConfig | constructor configuration interface}.
 */
export interface MediaConnectClientResolvedConfig extends MediaConnectClientResolvedConfigType {}

/**
 * <p>Welcome to the Elemental MediaConnect API reference. </p> <p>MediaConnect is a service that lets you ingest live video content into the cloud and distribute it to destinations all over the world, both inside and outside the Amazon Web Services cloud. This API reference provides descriptions, syntax, and usage examples for each of the actions and data types that are supported by MediaConnect. </p> <p>Use the following links to get started with the MediaConnect API:</p> <ul> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Operations.html">Actions</a>: An alphabetical list of all MediaConnect API operations.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/API_Types.html">Data types</a>: An alphabetical list of all MediaConnect data types.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonParameters.html">Common parameters</a>: Parameters that all operations can use.</p> </li> <li> <p> <a href="https://docs.aws.amazon.com/mediaconnect/latest/api/CommonErrors.html">Common errors</a>: Client and server errors that all operations can return.</p> </li> </ul>
 * @public
 */
export class MediaConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  MediaConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of MediaConnectClient class. This is resolved and normalized from the {@link MediaConnectClientConfig | constructor configuration interface}.
   */
  readonly config: MediaConnectClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<MediaConnectClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultMediaConnectHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: MediaConnectClientResolvedConfig) =>
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
