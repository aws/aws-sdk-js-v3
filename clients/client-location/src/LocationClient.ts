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
  AssociateTrackerConsumerCommandInput,
  AssociateTrackerConsumerCommandOutput,
} from "./commands/AssociateTrackerConsumerCommand";
import {
  BatchDeleteDevicePositionHistoryCommandInput,
  BatchDeleteDevicePositionHistoryCommandOutput,
} from "./commands/BatchDeleteDevicePositionHistoryCommand";
import {
  BatchDeleteGeofenceCommandInput,
  BatchDeleteGeofenceCommandOutput,
} from "./commands/BatchDeleteGeofenceCommand";
import {
  BatchEvaluateGeofencesCommandInput,
  BatchEvaluateGeofencesCommandOutput,
} from "./commands/BatchEvaluateGeofencesCommand";
import {
  BatchGetDevicePositionCommandInput,
  BatchGetDevicePositionCommandOutput,
} from "./commands/BatchGetDevicePositionCommand";
import { BatchPutGeofenceCommandInput, BatchPutGeofenceCommandOutput } from "./commands/BatchPutGeofenceCommand";
import {
  BatchUpdateDevicePositionCommandInput,
  BatchUpdateDevicePositionCommandOutput,
} from "./commands/BatchUpdateDevicePositionCommand";
import { CalculateRouteCommandInput, CalculateRouteCommandOutput } from "./commands/CalculateRouteCommand";
import {
  CalculateRouteMatrixCommandInput,
  CalculateRouteMatrixCommandOutput,
} from "./commands/CalculateRouteMatrixCommand";
import {
  CreateGeofenceCollectionCommandInput,
  CreateGeofenceCollectionCommandOutput,
} from "./commands/CreateGeofenceCollectionCommand";
import { CreateMapCommandInput, CreateMapCommandOutput } from "./commands/CreateMapCommand";
import { CreatePlaceIndexCommandInput, CreatePlaceIndexCommandOutput } from "./commands/CreatePlaceIndexCommand";
import {
  CreateRouteCalculatorCommandInput,
  CreateRouteCalculatorCommandOutput,
} from "./commands/CreateRouteCalculatorCommand";
import { CreateTrackerCommandInput, CreateTrackerCommandOutput } from "./commands/CreateTrackerCommand";
import {
  DeleteGeofenceCollectionCommandInput,
  DeleteGeofenceCollectionCommandOutput,
} from "./commands/DeleteGeofenceCollectionCommand";
import { DeleteMapCommandInput, DeleteMapCommandOutput } from "./commands/DeleteMapCommand";
import { DeletePlaceIndexCommandInput, DeletePlaceIndexCommandOutput } from "./commands/DeletePlaceIndexCommand";
import {
  DeleteRouteCalculatorCommandInput,
  DeleteRouteCalculatorCommandOutput,
} from "./commands/DeleteRouteCalculatorCommand";
import { DeleteTrackerCommandInput, DeleteTrackerCommandOutput } from "./commands/DeleteTrackerCommand";
import {
  DescribeGeofenceCollectionCommandInput,
  DescribeGeofenceCollectionCommandOutput,
} from "./commands/DescribeGeofenceCollectionCommand";
import { DescribeMapCommandInput, DescribeMapCommandOutput } from "./commands/DescribeMapCommand";
import { DescribePlaceIndexCommandInput, DescribePlaceIndexCommandOutput } from "./commands/DescribePlaceIndexCommand";
import {
  DescribeRouteCalculatorCommandInput,
  DescribeRouteCalculatorCommandOutput,
} from "./commands/DescribeRouteCalculatorCommand";
import { DescribeTrackerCommandInput, DescribeTrackerCommandOutput } from "./commands/DescribeTrackerCommand";
import {
  DisassociateTrackerConsumerCommandInput,
  DisassociateTrackerConsumerCommandOutput,
} from "./commands/DisassociateTrackerConsumerCommand";
import { GetDevicePositionCommandInput, GetDevicePositionCommandOutput } from "./commands/GetDevicePositionCommand";
import {
  GetDevicePositionHistoryCommandInput,
  GetDevicePositionHistoryCommandOutput,
} from "./commands/GetDevicePositionHistoryCommand";
import { GetGeofenceCommandInput, GetGeofenceCommandOutput } from "./commands/GetGeofenceCommand";
import { GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput } from "./commands/GetMapGlyphsCommand";
import { GetMapSpritesCommandInput, GetMapSpritesCommandOutput } from "./commands/GetMapSpritesCommand";
import {
  GetMapStyleDescriptorCommandInput,
  GetMapStyleDescriptorCommandOutput,
} from "./commands/GetMapStyleDescriptorCommand";
import { GetMapTileCommandInput, GetMapTileCommandOutput } from "./commands/GetMapTileCommand";
import { GetPlaceCommandInput, GetPlaceCommandOutput } from "./commands/GetPlaceCommand";
import {
  ListDevicePositionsCommandInput,
  ListDevicePositionsCommandOutput,
} from "./commands/ListDevicePositionsCommand";
import {
  ListGeofenceCollectionsCommandInput,
  ListGeofenceCollectionsCommandOutput,
} from "./commands/ListGeofenceCollectionsCommand";
import { ListGeofencesCommandInput, ListGeofencesCommandOutput } from "./commands/ListGeofencesCommand";
import { ListMapsCommandInput, ListMapsCommandOutput } from "./commands/ListMapsCommand";
import { ListPlaceIndexesCommandInput, ListPlaceIndexesCommandOutput } from "./commands/ListPlaceIndexesCommand";
import {
  ListRouteCalculatorsCommandInput,
  ListRouteCalculatorsCommandOutput,
} from "./commands/ListRouteCalculatorsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListTrackerConsumersCommandInput,
  ListTrackerConsumersCommandOutput,
} from "./commands/ListTrackerConsumersCommand";
import { ListTrackersCommandInput, ListTrackersCommandOutput } from "./commands/ListTrackersCommand";
import { PutGeofenceCommandInput, PutGeofenceCommandOutput } from "./commands/PutGeofenceCommand";
import {
  SearchPlaceIndexForPositionCommandInput,
  SearchPlaceIndexForPositionCommandOutput,
} from "./commands/SearchPlaceIndexForPositionCommand";
import {
  SearchPlaceIndexForSuggestionsCommandInput,
  SearchPlaceIndexForSuggestionsCommandOutput,
} from "./commands/SearchPlaceIndexForSuggestionsCommand";
import {
  SearchPlaceIndexForTextCommandInput,
  SearchPlaceIndexForTextCommandOutput,
} from "./commands/SearchPlaceIndexForTextCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateGeofenceCollectionCommandInput,
  UpdateGeofenceCollectionCommandOutput,
} from "./commands/UpdateGeofenceCollectionCommand";
import { UpdateMapCommandInput, UpdateMapCommandOutput } from "./commands/UpdateMapCommand";
import { UpdatePlaceIndexCommandInput, UpdatePlaceIndexCommandOutput } from "./commands/UpdatePlaceIndexCommand";
import {
  UpdateRouteCalculatorCommandInput,
  UpdateRouteCalculatorCommandOutput,
} from "./commands/UpdateRouteCalculatorCommand";
import { UpdateTrackerCommandInput, UpdateTrackerCommandOutput } from "./commands/UpdateTrackerCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | AssociateTrackerConsumerCommandInput
  | BatchDeleteDevicePositionHistoryCommandInput
  | BatchDeleteGeofenceCommandInput
  | BatchEvaluateGeofencesCommandInput
  | BatchGetDevicePositionCommandInput
  | BatchPutGeofenceCommandInput
  | BatchUpdateDevicePositionCommandInput
  | CalculateRouteCommandInput
  | CalculateRouteMatrixCommandInput
  | CreateGeofenceCollectionCommandInput
  | CreateMapCommandInput
  | CreatePlaceIndexCommandInput
  | CreateRouteCalculatorCommandInput
  | CreateTrackerCommandInput
  | DeleteGeofenceCollectionCommandInput
  | DeleteMapCommandInput
  | DeletePlaceIndexCommandInput
  | DeleteRouteCalculatorCommandInput
  | DeleteTrackerCommandInput
  | DescribeGeofenceCollectionCommandInput
  | DescribeMapCommandInput
  | DescribePlaceIndexCommandInput
  | DescribeRouteCalculatorCommandInput
  | DescribeTrackerCommandInput
  | DisassociateTrackerConsumerCommandInput
  | GetDevicePositionCommandInput
  | GetDevicePositionHistoryCommandInput
  | GetGeofenceCommandInput
  | GetMapGlyphsCommandInput
  | GetMapSpritesCommandInput
  | GetMapStyleDescriptorCommandInput
  | GetMapTileCommandInput
  | GetPlaceCommandInput
  | ListDevicePositionsCommandInput
  | ListGeofenceCollectionsCommandInput
  | ListGeofencesCommandInput
  | ListMapsCommandInput
  | ListPlaceIndexesCommandInput
  | ListRouteCalculatorsCommandInput
  | ListTagsForResourceCommandInput
  | ListTrackerConsumersCommandInput
  | ListTrackersCommandInput
  | PutGeofenceCommandInput
  | SearchPlaceIndexForPositionCommandInput
  | SearchPlaceIndexForSuggestionsCommandInput
  | SearchPlaceIndexForTextCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateGeofenceCollectionCommandInput
  | UpdateMapCommandInput
  | UpdatePlaceIndexCommandInput
  | UpdateRouteCalculatorCommandInput
  | UpdateTrackerCommandInput;

export type ServiceOutputTypes =
  | AssociateTrackerConsumerCommandOutput
  | BatchDeleteDevicePositionHistoryCommandOutput
  | BatchDeleteGeofenceCommandOutput
  | BatchEvaluateGeofencesCommandOutput
  | BatchGetDevicePositionCommandOutput
  | BatchPutGeofenceCommandOutput
  | BatchUpdateDevicePositionCommandOutput
  | CalculateRouteCommandOutput
  | CalculateRouteMatrixCommandOutput
  | CreateGeofenceCollectionCommandOutput
  | CreateMapCommandOutput
  | CreatePlaceIndexCommandOutput
  | CreateRouteCalculatorCommandOutput
  | CreateTrackerCommandOutput
  | DeleteGeofenceCollectionCommandOutput
  | DeleteMapCommandOutput
  | DeletePlaceIndexCommandOutput
  | DeleteRouteCalculatorCommandOutput
  | DeleteTrackerCommandOutput
  | DescribeGeofenceCollectionCommandOutput
  | DescribeMapCommandOutput
  | DescribePlaceIndexCommandOutput
  | DescribeRouteCalculatorCommandOutput
  | DescribeTrackerCommandOutput
  | DisassociateTrackerConsumerCommandOutput
  | GetDevicePositionCommandOutput
  | GetDevicePositionHistoryCommandOutput
  | GetGeofenceCommandOutput
  | GetMapGlyphsCommandOutput
  | GetMapSpritesCommandOutput
  | GetMapStyleDescriptorCommandOutput
  | GetMapTileCommandOutput
  | GetPlaceCommandOutput
  | ListDevicePositionsCommandOutput
  | ListGeofenceCollectionsCommandOutput
  | ListGeofencesCommandOutput
  | ListMapsCommandOutput
  | ListPlaceIndexesCommandOutput
  | ListRouteCalculatorsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListTrackerConsumersCommandOutput
  | ListTrackersCommandOutput
  | PutGeofenceCommandOutput
  | SearchPlaceIndexForPositionCommandOutput
  | SearchPlaceIndexForSuggestionsCommandOutput
  | SearchPlaceIndexForTextCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateGeofenceCollectionCommandOutput
  | UpdateMapCommandOutput
  | UpdatePlaceIndexCommandOutput
  | UpdateRouteCalculatorCommandOutput
  | UpdateTrackerCommandOutput;

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

type LocationClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of LocationClient class constructor that set the region, credentials and other options.
 */
export interface LocationClientConfig extends LocationClientConfigType {}

type LocationClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of LocationClient class. This is resolved and normalized from the {@link LocationClientConfig | constructor configuration interface}.
 */
export interface LocationClientResolvedConfig extends LocationClientResolvedConfigType {}

/**
 * <p>"Suite of geospatial services including Maps, Places, Routes, Tracking, and Geofencing"</p>
 */
export class LocationClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  LocationClientResolvedConfig
> {
  /**
   * The resolved configuration of LocationClient class. This is resolved and normalized from the {@link LocationClientConfig | constructor configuration interface}.
   */
  readonly config: LocationClientResolvedConfig;

  constructor(configuration: LocationClientConfig) {
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
