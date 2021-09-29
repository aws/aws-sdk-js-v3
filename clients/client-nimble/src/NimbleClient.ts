import { AcceptEulasCommandInput, AcceptEulasCommandOutput } from "./commands/AcceptEulasCommand";
import {
  CreateLaunchProfileCommandInput,
  CreateLaunchProfileCommandOutput,
} from "./commands/CreateLaunchProfileCommand";
import {
  CreateStreamingImageCommandInput,
  CreateStreamingImageCommandOutput,
} from "./commands/CreateStreamingImageCommand";
import {
  CreateStreamingSessionCommandInput,
  CreateStreamingSessionCommandOutput,
} from "./commands/CreateStreamingSessionCommand";
import {
  CreateStreamingSessionStreamCommandInput,
  CreateStreamingSessionStreamCommandOutput,
} from "./commands/CreateStreamingSessionStreamCommand";
import { CreateStudioCommandInput, CreateStudioCommandOutput } from "./commands/CreateStudioCommand";
import {
  CreateStudioComponentCommandInput,
  CreateStudioComponentCommandOutput,
} from "./commands/CreateStudioComponentCommand";
import {
  DeleteLaunchProfileCommandInput,
  DeleteLaunchProfileCommandOutput,
} from "./commands/DeleteLaunchProfileCommand";
import {
  DeleteLaunchProfileMemberCommandInput,
  DeleteLaunchProfileMemberCommandOutput,
} from "./commands/DeleteLaunchProfileMemberCommand";
import {
  DeleteStreamingImageCommandInput,
  DeleteStreamingImageCommandOutput,
} from "./commands/DeleteStreamingImageCommand";
import {
  DeleteStreamingSessionCommandInput,
  DeleteStreamingSessionCommandOutput,
} from "./commands/DeleteStreamingSessionCommand";
import { DeleteStudioCommandInput, DeleteStudioCommandOutput } from "./commands/DeleteStudioCommand";
import {
  DeleteStudioComponentCommandInput,
  DeleteStudioComponentCommandOutput,
} from "./commands/DeleteStudioComponentCommand";
import { DeleteStudioMemberCommandInput, DeleteStudioMemberCommandOutput } from "./commands/DeleteStudioMemberCommand";
import { GetEulaCommandInput, GetEulaCommandOutput } from "./commands/GetEulaCommand";
import { GetLaunchProfileCommandInput, GetLaunchProfileCommandOutput } from "./commands/GetLaunchProfileCommand";
import {
  GetLaunchProfileDetailsCommandInput,
  GetLaunchProfileDetailsCommandOutput,
} from "./commands/GetLaunchProfileDetailsCommand";
import {
  GetLaunchProfileInitializationCommandInput,
  GetLaunchProfileInitializationCommandOutput,
} from "./commands/GetLaunchProfileInitializationCommand";
import {
  GetLaunchProfileMemberCommandInput,
  GetLaunchProfileMemberCommandOutput,
} from "./commands/GetLaunchProfileMemberCommand";
import { GetStreamingImageCommandInput, GetStreamingImageCommandOutput } from "./commands/GetStreamingImageCommand";
import {
  GetStreamingSessionCommandInput,
  GetStreamingSessionCommandOutput,
} from "./commands/GetStreamingSessionCommand";
import {
  GetStreamingSessionStreamCommandInput,
  GetStreamingSessionStreamCommandOutput,
} from "./commands/GetStreamingSessionStreamCommand";
import { GetStudioCommandInput, GetStudioCommandOutput } from "./commands/GetStudioCommand";
import { GetStudioComponentCommandInput, GetStudioComponentCommandOutput } from "./commands/GetStudioComponentCommand";
import { GetStudioMemberCommandInput, GetStudioMemberCommandOutput } from "./commands/GetStudioMemberCommand";
import {
  ListEulaAcceptancesCommandInput,
  ListEulaAcceptancesCommandOutput,
} from "./commands/ListEulaAcceptancesCommand";
import { ListEulasCommandInput, ListEulasCommandOutput } from "./commands/ListEulasCommand";
import {
  ListLaunchProfileMembersCommandInput,
  ListLaunchProfileMembersCommandOutput,
} from "./commands/ListLaunchProfileMembersCommand";
import { ListLaunchProfilesCommandInput, ListLaunchProfilesCommandOutput } from "./commands/ListLaunchProfilesCommand";
import {
  ListStreamingImagesCommandInput,
  ListStreamingImagesCommandOutput,
} from "./commands/ListStreamingImagesCommand";
import {
  ListStreamingSessionsCommandInput,
  ListStreamingSessionsCommandOutput,
} from "./commands/ListStreamingSessionsCommand";
import {
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "./commands/ListStudioComponentsCommand";
import { ListStudioMembersCommandInput, ListStudioMembersCommandOutput } from "./commands/ListStudioMembersCommand";
import { ListStudiosCommandInput, ListStudiosCommandOutput } from "./commands/ListStudiosCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutLaunchProfileMembersCommandInput,
  PutLaunchProfileMembersCommandOutput,
} from "./commands/PutLaunchProfileMembersCommand";
import { PutStudioMembersCommandInput, PutStudioMembersCommandOutput } from "./commands/PutStudioMembersCommand";
import {
  StartStudioSSOConfigurationRepairCommandInput,
  StartStudioSSOConfigurationRepairCommandOutput,
} from "./commands/StartStudioSSOConfigurationRepairCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateLaunchProfileCommandInput,
  UpdateLaunchProfileCommandOutput,
} from "./commands/UpdateLaunchProfileCommand";
import {
  UpdateLaunchProfileMemberCommandInput,
  UpdateLaunchProfileMemberCommandOutput,
} from "./commands/UpdateLaunchProfileMemberCommand";
import {
  UpdateStreamingImageCommandInput,
  UpdateStreamingImageCommandOutput,
} from "./commands/UpdateStreamingImageCommand";
import { UpdateStudioCommandInput, UpdateStudioCommandOutput } from "./commands/UpdateStudioCommand";
import {
  UpdateStudioComponentCommandInput,
  UpdateStudioComponentCommandOutput,
} from "./commands/UpdateStudioComponentCommand";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";
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
import { getLoggerPlugin } from "@aws-sdk/middleware-logger";
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
  Provider,
  RegionInfoProvider,
  Credentials as __Credentials,
  Decoder as __Decoder,
  Encoder as __Encoder,
  Hash as __Hash,
  HashConstructor as __HashConstructor,
  HttpHandlerOptions as __HttpHandlerOptions,
  Logger as __Logger,
  Provider as __Provider,
  StreamCollector as __StreamCollector,
  UrlParser as __UrlParser,
  UserAgent as __UserAgent,
} from "@aws-sdk/types";

export type ServiceInputTypes =
  | AcceptEulasCommandInput
  | CreateLaunchProfileCommandInput
  | CreateStreamingImageCommandInput
  | CreateStreamingSessionCommandInput
  | CreateStreamingSessionStreamCommandInput
  | CreateStudioCommandInput
  | CreateStudioComponentCommandInput
  | DeleteLaunchProfileCommandInput
  | DeleteLaunchProfileMemberCommandInput
  | DeleteStreamingImageCommandInput
  | DeleteStreamingSessionCommandInput
  | DeleteStudioCommandInput
  | DeleteStudioComponentCommandInput
  | DeleteStudioMemberCommandInput
  | GetEulaCommandInput
  | GetLaunchProfileCommandInput
  | GetLaunchProfileDetailsCommandInput
  | GetLaunchProfileInitializationCommandInput
  | GetLaunchProfileMemberCommandInput
  | GetStreamingImageCommandInput
  | GetStreamingSessionCommandInput
  | GetStreamingSessionStreamCommandInput
  | GetStudioCommandInput
  | GetStudioComponentCommandInput
  | GetStudioMemberCommandInput
  | ListEulaAcceptancesCommandInput
  | ListEulasCommandInput
  | ListLaunchProfileMembersCommandInput
  | ListLaunchProfilesCommandInput
  | ListStreamingImagesCommandInput
  | ListStreamingSessionsCommandInput
  | ListStudioComponentsCommandInput
  | ListStudioMembersCommandInput
  | ListStudiosCommandInput
  | ListTagsForResourceCommandInput
  | PutLaunchProfileMembersCommandInput
  | PutStudioMembersCommandInput
  | StartStudioSSOConfigurationRepairCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLaunchProfileCommandInput
  | UpdateLaunchProfileMemberCommandInput
  | UpdateStreamingImageCommandInput
  | UpdateStudioCommandInput
  | UpdateStudioComponentCommandInput;

export type ServiceOutputTypes =
  | AcceptEulasCommandOutput
  | CreateLaunchProfileCommandOutput
  | CreateStreamingImageCommandOutput
  | CreateStreamingSessionCommandOutput
  | CreateStreamingSessionStreamCommandOutput
  | CreateStudioCommandOutput
  | CreateStudioComponentCommandOutput
  | DeleteLaunchProfileCommandOutput
  | DeleteLaunchProfileMemberCommandOutput
  | DeleteStreamingImageCommandOutput
  | DeleteStreamingSessionCommandOutput
  | DeleteStudioCommandOutput
  | DeleteStudioComponentCommandOutput
  | DeleteStudioMemberCommandOutput
  | GetEulaCommandOutput
  | GetLaunchProfileCommandOutput
  | GetLaunchProfileDetailsCommandOutput
  | GetLaunchProfileInitializationCommandOutput
  | GetLaunchProfileMemberCommandOutput
  | GetStreamingImageCommandOutput
  | GetStreamingSessionCommandOutput
  | GetStreamingSessionStreamCommandOutput
  | GetStudioCommandOutput
  | GetStudioComponentCommandOutput
  | GetStudioMemberCommandOutput
  | ListEulaAcceptancesCommandOutput
  | ListEulasCommandOutput
  | ListLaunchProfileMembersCommandOutput
  | ListLaunchProfilesCommandOutput
  | ListStreamingImagesCommandOutput
  | ListStreamingSessionsCommandOutput
  | ListStudioComponentsCommandOutput
  | ListStudioMembersCommandOutput
  | ListStudiosCommandOutput
  | ListTagsForResourceCommandOutput
  | PutLaunchProfileMembersCommandOutput
  | PutStudioMembersCommandOutput
  | StartStudioSSOConfigurationRepairCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLaunchProfileCommandOutput
  | UpdateLaunchProfileMemberCommandOutput
  | UpdateStreamingImageCommandOutput
  | UpdateStudioCommandOutput
  | UpdateStudioComponentCommandOutput;

export interface ClientDefaults extends Partial<__SmithyResolvedConfiguration<__HttpHandlerOptions>> {
  /**
   * The HTTP handler to use. Fetch in browser and Https in Nodejs.
   */
  requestHandler?: __HttpHandler;

  /**
   * A constructor for a class implementing the {@link __Hash} interface
   * that computes the SHA-256 HMAC or checksum of a string or binary buffer.
   * @internal
   */
  sha256?: __HashConstructor;

  /**
   * The function that will be used to convert strings into HTTP endpoints.
   * @internal
   */
  urlParser?: __UrlParser;

  /**
   * A function that can calculate the length of a request body.
   * @internal
   */
  bodyLengthChecker?: (body: any) => number | undefined;

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
   * Fetch related hostname, signing name or signing region with given region.
   * @internal
   */
  regionInfoProvider?: RegionInfoProvider;

  /**
   * The provider populating default tracking information to be sent with `user-agent`, `x-amz-user-agent` header
   * @internal
   */
  defaultUserAgentProvider?: Provider<__UserAgent>;
}

type NimbleClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointsInputConfig &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig;
/**
 * The configuration interface of NimbleClient class constructor that set the region, credentials and other options.
 */
export interface NimbleClientConfig extends NimbleClientConfigType {}

type NimbleClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointsResolvedConfig &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig;
/**
 * The resolved configuration interface of NimbleClient class. This is resolved and normalized from the {@link NimbleClientConfig | constructor configuration interface}.
 */
export interface NimbleClientResolvedConfig extends NimbleClientResolvedConfigType {}

export class NimbleClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  NimbleClientResolvedConfig
> {
  /**
   * The resolved configuration of NimbleClient class. This is resolved and normalized from the {@link NimbleClientConfig | constructor configuration interface}.
   */
  readonly config: NimbleClientResolvedConfig;

  constructor(configuration: NimbleClientConfig) {
    let _config_0 = __getRuntimeConfig(configuration);
    let _config_1 = resolveRegionConfig(_config_0);
    let _config_2 = resolveEndpointsConfig(_config_1);
    let _config_3 = resolveRetryConfig(_config_2);
    let _config_4 = resolveHostHeaderConfig(_config_3);
    let _config_5 = resolveAwsAuthConfig(_config_4);
    let _config_6 = resolveUserAgentConfig(_config_5);
    super(_config_6);
    this.config = _config_6;
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
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
