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
  BatchPutPropertyValuesCommandInput,
  BatchPutPropertyValuesCommandOutput,
} from "./commands/BatchPutPropertyValuesCommand";
import {
  CreateComponentTypeCommandInput,
  CreateComponentTypeCommandOutput,
} from "./commands/CreateComponentTypeCommand";
import { CreateEntityCommandInput, CreateEntityCommandOutput } from "./commands/CreateEntityCommand";
import { CreateSceneCommandInput, CreateSceneCommandOutput } from "./commands/CreateSceneCommand";
import { CreateSyncJobCommandInput, CreateSyncJobCommandOutput } from "./commands/CreateSyncJobCommand";
import { CreateWorkspaceCommandInput, CreateWorkspaceCommandOutput } from "./commands/CreateWorkspaceCommand";
import {
  DeleteComponentTypeCommandInput,
  DeleteComponentTypeCommandOutput,
} from "./commands/DeleteComponentTypeCommand";
import { DeleteEntityCommandInput, DeleteEntityCommandOutput } from "./commands/DeleteEntityCommand";
import { DeleteSceneCommandInput, DeleteSceneCommandOutput } from "./commands/DeleteSceneCommand";
import { DeleteSyncJobCommandInput, DeleteSyncJobCommandOutput } from "./commands/DeleteSyncJobCommand";
import { DeleteWorkspaceCommandInput, DeleteWorkspaceCommandOutput } from "./commands/DeleteWorkspaceCommand";
import { ExecuteQueryCommandInput, ExecuteQueryCommandOutput } from "./commands/ExecuteQueryCommand";
import { GetComponentTypeCommandInput, GetComponentTypeCommandOutput } from "./commands/GetComponentTypeCommand";
import { GetEntityCommandInput, GetEntityCommandOutput } from "./commands/GetEntityCommand";
import { GetPricingPlanCommandInput, GetPricingPlanCommandOutput } from "./commands/GetPricingPlanCommand";
import { GetPropertyValueCommandInput, GetPropertyValueCommandOutput } from "./commands/GetPropertyValueCommand";
import {
  GetPropertyValueHistoryCommandInput,
  GetPropertyValueHistoryCommandOutput,
} from "./commands/GetPropertyValueHistoryCommand";
import { GetSceneCommandInput, GetSceneCommandOutput } from "./commands/GetSceneCommand";
import { GetSyncJobCommandInput, GetSyncJobCommandOutput } from "./commands/GetSyncJobCommand";
import { GetWorkspaceCommandInput, GetWorkspaceCommandOutput } from "./commands/GetWorkspaceCommand";
import { ListComponentTypesCommandInput, ListComponentTypesCommandOutput } from "./commands/ListComponentTypesCommand";
import { ListEntitiesCommandInput, ListEntitiesCommandOutput } from "./commands/ListEntitiesCommand";
import { ListScenesCommandInput, ListScenesCommandOutput } from "./commands/ListScenesCommand";
import { ListSyncJobsCommandInput, ListSyncJobsCommandOutput } from "./commands/ListSyncJobsCommand";
import { ListSyncResourcesCommandInput, ListSyncResourcesCommandOutput } from "./commands/ListSyncResourcesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWorkspacesCommandInput, ListWorkspacesCommandOutput } from "./commands/ListWorkspacesCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateComponentTypeCommandInput,
  UpdateComponentTypeCommandOutput,
} from "./commands/UpdateComponentTypeCommand";
import { UpdateEntityCommandInput, UpdateEntityCommandOutput } from "./commands/UpdateEntityCommand";
import { UpdatePricingPlanCommandInput, UpdatePricingPlanCommandOutput } from "./commands/UpdatePricingPlanCommand";
import { UpdateSceneCommandInput, UpdateSceneCommandOutput } from "./commands/UpdateSceneCommand";
import { UpdateWorkspaceCommandInput, UpdateWorkspaceCommandOutput } from "./commands/UpdateWorkspaceCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchPutPropertyValuesCommandInput
  | CreateComponentTypeCommandInput
  | CreateEntityCommandInput
  | CreateSceneCommandInput
  | CreateSyncJobCommandInput
  | CreateWorkspaceCommandInput
  | DeleteComponentTypeCommandInput
  | DeleteEntityCommandInput
  | DeleteSceneCommandInput
  | DeleteSyncJobCommandInput
  | DeleteWorkspaceCommandInput
  | ExecuteQueryCommandInput
  | GetComponentTypeCommandInput
  | GetEntityCommandInput
  | GetPricingPlanCommandInput
  | GetPropertyValueCommandInput
  | GetPropertyValueHistoryCommandInput
  | GetSceneCommandInput
  | GetSyncJobCommandInput
  | GetWorkspaceCommandInput
  | ListComponentTypesCommandInput
  | ListEntitiesCommandInput
  | ListScenesCommandInput
  | ListSyncJobsCommandInput
  | ListSyncResourcesCommandInput
  | ListTagsForResourceCommandInput
  | ListWorkspacesCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateComponentTypeCommandInput
  | UpdateEntityCommandInput
  | UpdatePricingPlanCommandInput
  | UpdateSceneCommandInput
  | UpdateWorkspaceCommandInput;

export type ServiceOutputTypes =
  | BatchPutPropertyValuesCommandOutput
  | CreateComponentTypeCommandOutput
  | CreateEntityCommandOutput
  | CreateSceneCommandOutput
  | CreateSyncJobCommandOutput
  | CreateWorkspaceCommandOutput
  | DeleteComponentTypeCommandOutput
  | DeleteEntityCommandOutput
  | DeleteSceneCommandOutput
  | DeleteSyncJobCommandOutput
  | DeleteWorkspaceCommandOutput
  | ExecuteQueryCommandOutput
  | GetComponentTypeCommandOutput
  | GetEntityCommandOutput
  | GetPricingPlanCommandOutput
  | GetPropertyValueCommandOutput
  | GetPropertyValueHistoryCommandOutput
  | GetSceneCommandOutput
  | GetSyncJobCommandOutput
  | GetWorkspaceCommandOutput
  | ListComponentTypesCommandOutput
  | ListEntitiesCommandOutput
  | ListScenesCommandOutput
  | ListSyncJobsCommandOutput
  | ListSyncResourcesCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWorkspacesCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateComponentTypeCommandOutput
  | UpdateEntityCommandOutput
  | UpdatePricingPlanCommandOutput
  | UpdateSceneCommandOutput
  | UpdateWorkspaceCommandOutput;

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

type IoTTwinMakerClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IoTTwinMakerClient class constructor that set the region, credentials and other options.
 */
export interface IoTTwinMakerClientConfig extends IoTTwinMakerClientConfigType {}

type IoTTwinMakerClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IoTTwinMakerClient class. This is resolved and normalized from the {@link IoTTwinMakerClientConfig | constructor configuration interface}.
 */
export interface IoTTwinMakerClientResolvedConfig extends IoTTwinMakerClientResolvedConfigType {}

/**
 * <p>IoT TwinMaker is a service that enables you to build operational digital twins of
 *          physical systems. IoT TwinMaker overlays measurements and analysis from real-world sensors,
 *          cameras, and enterprise applications so you can create data visualizations to monitor your
 *          physical factory, building, or industrial plant. You can use this real-world data to
 *          monitor operations and diagnose and repair errors.</p>
 */
export class IoTTwinMakerClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IoTTwinMakerClientResolvedConfig
> {
  /**
   * The resolved configuration of IoTTwinMakerClient class. This is resolved and normalized from the {@link IoTTwinMakerClientConfig | constructor configuration interface}.
   */
  readonly config: IoTTwinMakerClientResolvedConfig;

  constructor(configuration: IoTTwinMakerClientConfig) {
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
