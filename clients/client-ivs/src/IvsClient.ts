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
  defaultIvsHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type { BatchGetChannelCommandInput, BatchGetChannelCommandOutput } from "./commands/BatchGetChannelCommand";
import type {
  BatchGetStreamKeyCommandInput,
  BatchGetStreamKeyCommandOutput,
} from "./commands/BatchGetStreamKeyCommand";
import type {
  BatchStartViewerSessionRevocationCommandInput,
  BatchStartViewerSessionRevocationCommandOutput,
} from "./commands/BatchStartViewerSessionRevocationCommand";
import type {
  CreateAdConfigurationCommandInput,
  CreateAdConfigurationCommandOutput,
} from "./commands/CreateAdConfigurationCommand";
import type { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import type {
  CreateFailoverSlateConfigurationCommandInput,
  CreateFailoverSlateConfigurationCommandOutput,
} from "./commands/CreateFailoverSlateConfigurationCommand";
import type {
  CreatePlaybackRestrictionPolicyCommandInput,
  CreatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/CreatePlaybackRestrictionPolicyCommand";
import type {
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
} from "./commands/CreateRecordingConfigurationCommand";
import type { CreateStreamKeyCommandInput, CreateStreamKeyCommandOutput } from "./commands/CreateStreamKeyCommand";
import type {
  DeleteAdConfigurationCommandInput,
  DeleteAdConfigurationCommandOutput,
} from "./commands/DeleteAdConfigurationCommand";
import type { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import type {
  DeleteFailoverSlateConfigurationCommandInput,
  DeleteFailoverSlateConfigurationCommandOutput,
} from "./commands/DeleteFailoverSlateConfigurationCommand";
import type {
  DeletePlaybackKeyPairCommandInput,
  DeletePlaybackKeyPairCommandOutput,
} from "./commands/DeletePlaybackKeyPairCommand";
import type {
  DeletePlaybackRestrictionPolicyCommandInput,
  DeletePlaybackRestrictionPolicyCommandOutput,
} from "./commands/DeletePlaybackRestrictionPolicyCommand";
import type {
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
} from "./commands/DeleteRecordingConfigurationCommand";
import type { DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput } from "./commands/DeleteStreamKeyCommand";
import type {
  GetAdConfigurationCommandInput,
  GetAdConfigurationCommandOutput,
} from "./commands/GetAdConfigurationCommand";
import type { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import type {
  GetFailoverSlateConfigurationCommandInput,
  GetFailoverSlateConfigurationCommandOutput,
} from "./commands/GetFailoverSlateConfigurationCommand";
import type {
  GetPlaybackKeyPairCommandInput,
  GetPlaybackKeyPairCommandOutput,
} from "./commands/GetPlaybackKeyPairCommand";
import type {
  GetPlaybackRestrictionPolicyCommandInput,
  GetPlaybackRestrictionPolicyCommandOutput,
} from "./commands/GetPlaybackRestrictionPolicyCommand";
import type {
  GetRecordingConfigurationCommandInput,
  GetRecordingConfigurationCommandOutput,
} from "./commands/GetRecordingConfigurationCommand";
import type { GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand";
import type { GetStreamKeyCommandInput, GetStreamKeyCommandOutput } from "./commands/GetStreamKeyCommand";
import type { GetStreamSessionCommandInput, GetStreamSessionCommandOutput } from "./commands/GetStreamSessionCommand";
import type {
  ImportPlaybackKeyPairCommandInput,
  ImportPlaybackKeyPairCommandOutput,
} from "./commands/ImportPlaybackKeyPairCommand";
import type { InsertAdBreakCommandInput, InsertAdBreakCommandOutput } from "./commands/InsertAdBreakCommand";
import type {
  ListAdConfigurationsCommandInput,
  ListAdConfigurationsCommandOutput,
} from "./commands/ListAdConfigurationsCommand";
import type { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import type {
  ListFailoverSlateConfigurationsCommandInput,
  ListFailoverSlateConfigurationsCommandOutput,
} from "./commands/ListFailoverSlateConfigurationsCommand";
import type {
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "./commands/ListPlaybackKeyPairsCommand";
import type {
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput,
} from "./commands/ListPlaybackRestrictionPoliciesCommand";
import type {
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "./commands/ListRecordingConfigurationsCommand";
import type { ListStreamKeysCommandInput, ListStreamKeysCommandOutput } from "./commands/ListStreamKeysCommand";
import type { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import type {
  ListStreamSessionsCommandInput,
  ListStreamSessionsCommandOutput,
} from "./commands/ListStreamSessionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type { PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import type {
  StartViewerSessionRevocationCommandInput,
  StartViewerSessionRevocationCommandOutput,
} from "./commands/StartViewerSessionRevocationCommand";
import type { StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateAdConfigurationCommandInput,
  UpdateAdConfigurationCommandOutput,
} from "./commands/UpdateAdConfigurationCommand";
import type { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import type {
  UpdateFailoverSlateConfigurationCommandInput,
  UpdateFailoverSlateConfigurationCommandOutput,
} from "./commands/UpdateFailoverSlateConfigurationCommand";
import type {
  UpdatePlaybackRestrictionPolicyCommandInput,
  UpdatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/UpdatePlaybackRestrictionPolicyCommand";
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
  | BatchGetChannelCommandInput
  | BatchGetStreamKeyCommandInput
  | BatchStartViewerSessionRevocationCommandInput
  | CreateAdConfigurationCommandInput
  | CreateChannelCommandInput
  | CreateFailoverSlateConfigurationCommandInput
  | CreatePlaybackRestrictionPolicyCommandInput
  | CreateRecordingConfigurationCommandInput
  | CreateStreamKeyCommandInput
  | DeleteAdConfigurationCommandInput
  | DeleteChannelCommandInput
  | DeleteFailoverSlateConfigurationCommandInput
  | DeletePlaybackKeyPairCommandInput
  | DeletePlaybackRestrictionPolicyCommandInput
  | DeleteRecordingConfigurationCommandInput
  | DeleteStreamKeyCommandInput
  | GetAdConfigurationCommandInput
  | GetChannelCommandInput
  | GetFailoverSlateConfigurationCommandInput
  | GetPlaybackKeyPairCommandInput
  | GetPlaybackRestrictionPolicyCommandInput
  | GetRecordingConfigurationCommandInput
  | GetStreamCommandInput
  | GetStreamKeyCommandInput
  | GetStreamSessionCommandInput
  | ImportPlaybackKeyPairCommandInput
  | InsertAdBreakCommandInput
  | ListAdConfigurationsCommandInput
  | ListChannelsCommandInput
  | ListFailoverSlateConfigurationsCommandInput
  | ListPlaybackKeyPairsCommandInput
  | ListPlaybackRestrictionPoliciesCommandInput
  | ListRecordingConfigurationsCommandInput
  | ListStreamKeysCommandInput
  | ListStreamSessionsCommandInput
  | ListStreamsCommandInput
  | ListTagsForResourceCommandInput
  | PutMetadataCommandInput
  | StartViewerSessionRevocationCommandInput
  | StopStreamCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAdConfigurationCommandInput
  | UpdateChannelCommandInput
  | UpdateFailoverSlateConfigurationCommandInput
  | UpdatePlaybackRestrictionPolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetChannelCommandOutput
  | BatchGetStreamKeyCommandOutput
  | BatchStartViewerSessionRevocationCommandOutput
  | CreateAdConfigurationCommandOutput
  | CreateChannelCommandOutput
  | CreateFailoverSlateConfigurationCommandOutput
  | CreatePlaybackRestrictionPolicyCommandOutput
  | CreateRecordingConfigurationCommandOutput
  | CreateStreamKeyCommandOutput
  | DeleteAdConfigurationCommandOutput
  | DeleteChannelCommandOutput
  | DeleteFailoverSlateConfigurationCommandOutput
  | DeletePlaybackKeyPairCommandOutput
  | DeletePlaybackRestrictionPolicyCommandOutput
  | DeleteRecordingConfigurationCommandOutput
  | DeleteStreamKeyCommandOutput
  | GetAdConfigurationCommandOutput
  | GetChannelCommandOutput
  | GetFailoverSlateConfigurationCommandOutput
  | GetPlaybackKeyPairCommandOutput
  | GetPlaybackRestrictionPolicyCommandOutput
  | GetRecordingConfigurationCommandOutput
  | GetStreamCommandOutput
  | GetStreamKeyCommandOutput
  | GetStreamSessionCommandOutput
  | ImportPlaybackKeyPairCommandOutput
  | InsertAdBreakCommandOutput
  | ListAdConfigurationsCommandOutput
  | ListChannelsCommandOutput
  | ListFailoverSlateConfigurationsCommandOutput
  | ListPlaybackKeyPairsCommandOutput
  | ListPlaybackRestrictionPoliciesCommandOutput
  | ListRecordingConfigurationsCommandOutput
  | ListStreamKeysCommandOutput
  | ListStreamSessionsCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutMetadataCommandOutput
  | StartViewerSessionRevocationCommandOutput
  | StopStreamCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAdConfigurationCommandOutput
  | UpdateChannelCommandOutput
  | UpdateFailoverSlateConfigurationCommandOutput
  | UpdatePlaybackRestrictionPolicyCommandOutput;

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
export type IvsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of IvsClient class constructor that set the region, credentials and other options.
 */
export interface IvsClientConfig extends IvsClientConfigType {}

/**
 * @public
 */
export type IvsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of IvsClient class. This is resolved and normalized from the {@link IvsClientConfig | constructor configuration interface}.
 */
export interface IvsClientResolvedConfig extends IvsClientResolvedConfigType {}

/**
 * **Introduction**
 *
 * The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both requests and responses, including errors.
 *
 * The API is an Amazon Web Services regional service. For a list of supported regions and Amazon IVS HTTPS service endpoints, see the [Amazon IVS page](https://docs.aws.amazon.com/general/latest/gr/ivs.html) in the *Amazon Web Services General Reference*.
 *
 * ***All API request parameters and URLs are case sensitive.***
 *
 * For a summary of notable documentation changes in each release, see [Document History](https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html).
 *
 * **Allowed Header Values**
 *
 * - `Accept:` application/json
 * - `Accept-Encoding:` gzip, deflate
 * - `Content-Type:`application/json
 *
 * **Key Concepts**
 *
 * - **Channel** — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream.
 * - **Stream key** — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. ***Treat the stream key like a secret, since it allows anyone to stream to the channel.***
 * - **Playback key pair** — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token.
 * - **Recording configuration** — Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration.
 * - **Playback restriction policy** — Restricts playback by countries and/or origin sites.
 *
 * For more information about your IVS live stream, also see [Getting Started with IVS Low-Latency Streaming](https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/getting-started.html).
 *
 * **Tagging**
 *
 * A *tag* is a metadata label that you assign to an Amazon Web Services resource. A tag comprises a *key* and a *value*, both set by you. For example, you might set a tag as `topic:nature` to label a particular video category. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented there.
 *
 * Tags can help you identify and organize your Amazon Web Services resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see [Access Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html)).
 *
 * The Amazon IVS API has these tag-related operations: TagResource, UntagResource, and ListTagsForResource. The following resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording Configurations.
 *
 * At most 50 tags can be applied to a resource.
 *
 * **Authentication versus Authorization**
 *
 * Note the differences between these concepts:
 *
 * - *Authentication* is about verifying identity. You need to be authenticated to sign Amazon IVS API requests.
 * - *Authorization* is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition, authorization is needed to view [Amazon IVS private channels](https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html). (Private channels are channels that are enabled for "playback authorization.")
 *
 * **Authentication**
 *
 * All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS API directly, it’s your responsibility to sign the requests.
 *
 * You generate a signature using valid Amazon Web Services credentials that have permission to perform the requested action. For example, you must sign PutMetadata requests with a signature generated from a user account that has the `ivs:PutMetadata` permission.
 *
 * For more information:
 *
 * - Authentication and generating signatures — See [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon Web Services General Reference*.
 * - Managing Amazon IVS permissions — See [Identity and Access Management](https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html) on the Security page of the *Amazon IVS User Guide*.
 *
 * **Amazon Resource Names (ARNs)**
 *
 * ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference*.
 *
 * @public
 */
export class IvsClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IvsClientResolvedConfig
> {
  /**
   * The resolved configuration of IvsClient class. This is resolved and normalized from the {@link IvsClientConfig | constructor configuration interface}.
   */
  readonly config: IvsClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IvsClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultIvsHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: IvsClientResolvedConfig) =>
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
