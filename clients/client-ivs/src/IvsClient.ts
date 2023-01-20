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

import { BatchGetChannelCommandInput, BatchGetChannelCommandOutput } from "./commands/BatchGetChannelCommand";
import { BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput } from "./commands/BatchGetStreamKeyCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import {
  CreateRecordingConfigurationCommandInput,
  CreateRecordingConfigurationCommandOutput,
} from "./commands/CreateRecordingConfigurationCommand";
import { CreateStreamKeyCommandInput, CreateStreamKeyCommandOutput } from "./commands/CreateStreamKeyCommand";
import { DeleteChannelCommandInput, DeleteChannelCommandOutput } from "./commands/DeleteChannelCommand";
import {
  DeletePlaybackKeyPairCommandInput,
  DeletePlaybackKeyPairCommandOutput,
} from "./commands/DeletePlaybackKeyPairCommand";
import {
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
} from "./commands/DeleteRecordingConfigurationCommand";
import { DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput } from "./commands/DeleteStreamKeyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetPlaybackKeyPairCommandInput, GetPlaybackKeyPairCommandOutput } from "./commands/GetPlaybackKeyPairCommand";
import {
  GetRecordingConfigurationCommandInput,
  GetRecordingConfigurationCommandOutput,
} from "./commands/GetRecordingConfigurationCommand";
import { GetStreamCommandInput, GetStreamCommandOutput } from "./commands/GetStreamCommand";
import { GetStreamKeyCommandInput, GetStreamKeyCommandOutput } from "./commands/GetStreamKeyCommand";
import { GetStreamSessionCommandInput, GetStreamSessionCommandOutput } from "./commands/GetStreamSessionCommand";
import {
  ImportPlaybackKeyPairCommandInput,
  ImportPlaybackKeyPairCommandOutput,
} from "./commands/ImportPlaybackKeyPairCommand";
import { ListChannelsCommandInput, ListChannelsCommandOutput } from "./commands/ListChannelsCommand";
import {
  ListPlaybackKeyPairsCommandInput,
  ListPlaybackKeyPairsCommandOutput,
} from "./commands/ListPlaybackKeyPairsCommand";
import {
  ListRecordingConfigurationsCommandInput,
  ListRecordingConfigurationsCommandOutput,
} from "./commands/ListRecordingConfigurationsCommand";
import { ListStreamKeysCommandInput, ListStreamKeysCommandOutput } from "./commands/ListStreamKeysCommand";
import { ListStreamsCommandInput, ListStreamsCommandOutput } from "./commands/ListStreamsCommand";
import { ListStreamSessionsCommandInput, ListStreamSessionsCommandOutput } from "./commands/ListStreamSessionsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { PutMetadataCommandInput, PutMetadataCommandOutput } from "./commands/PutMetadataCommand";
import { StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | BatchGetChannelCommandInput
  | BatchGetStreamKeyCommandInput
  | CreateChannelCommandInput
  | CreateRecordingConfigurationCommandInput
  | CreateStreamKeyCommandInput
  | DeleteChannelCommandInput
  | DeletePlaybackKeyPairCommandInput
  | DeleteRecordingConfigurationCommandInput
  | DeleteStreamKeyCommandInput
  | GetChannelCommandInput
  | GetPlaybackKeyPairCommandInput
  | GetRecordingConfigurationCommandInput
  | GetStreamCommandInput
  | GetStreamKeyCommandInput
  | GetStreamSessionCommandInput
  | ImportPlaybackKeyPairCommandInput
  | ListChannelsCommandInput
  | ListPlaybackKeyPairsCommandInput
  | ListRecordingConfigurationsCommandInput
  | ListStreamKeysCommandInput
  | ListStreamSessionsCommandInput
  | ListStreamsCommandInput
  | ListTagsForResourceCommandInput
  | PutMetadataCommandInput
  | StopStreamCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateChannelCommandInput;

export type ServiceOutputTypes =
  | BatchGetChannelCommandOutput
  | BatchGetStreamKeyCommandOutput
  | CreateChannelCommandOutput
  | CreateRecordingConfigurationCommandOutput
  | CreateStreamKeyCommandOutput
  | DeleteChannelCommandOutput
  | DeletePlaybackKeyPairCommandOutput
  | DeleteRecordingConfigurationCommandOutput
  | DeleteStreamKeyCommandOutput
  | GetChannelCommandOutput
  | GetPlaybackKeyPairCommandOutput
  | GetRecordingConfigurationCommandOutput
  | GetStreamCommandOutput
  | GetStreamKeyCommandOutput
  | GetStreamSessionCommandOutput
  | ImportPlaybackKeyPairCommandOutput
  | ListChannelsCommandOutput
  | ListPlaybackKeyPairsCommandOutput
  | ListRecordingConfigurationsCommandOutput
  | ListStreamKeysCommandOutput
  | ListStreamSessionsCommandOutput
  | ListStreamsCommandOutput
  | ListTagsForResourceCommandOutput
  | PutMetadataCommandOutput
  | StopStreamCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateChannelCommandOutput;

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

type IvsClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IvsClient class constructor that set the region, credentials and other options.
 */
export interface IvsClientConfig extends IvsClientConfigType {}

type IvsClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IvsClient class. This is resolved and normalized from the {@link IvsClientConfig | constructor configuration interface}.
 */
export interface IvsClientResolvedConfig extends IvsClientResolvedConfigType {}

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon Interactive Video Service (IVS) API is REST compatible, using a standard HTTP
 *       API and an Amazon Web Services EventBridge event stream for responses. JSON is used for both
 *       requests and responses, including errors.</p>
 *          <p>The API is an Amazon Web Services regional service. For a list of supported regions and
 *       Amazon IVS HTTPS service endpoints, see the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
 *           <i>Amazon Web Services General Reference</i>.</p>
 *          <p>
 *             <i>
 *                <b>All API request parameters and URLs are case sensitive.
 *         </b>
 *             </i>
 *          </p>
 *          <p>For a summary of notable documentation changes in each release, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/doc-history.html"> Document
 *       History</a>.</p>
 *          <p>
 *             <b>Allowed Header Values</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept:</b>
 *                   </code> application/json</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Accept-Encoding:</b>
 *                   </code> gzip, deflate</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>
 *                      <b>Content-Type:</b>
 *                   </code>application/json</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html"> Getting Started with
 *         Amazon IVS</a>):</p>
 *          <ul>
 *             <li>
 *                <p>Channel — Stores configuration data related to your live stream. You first create a
 *           channel and then use the channel’s stream key to start your live stream. See the Channel
 *           endpoints for more information. </p>
 *             </li>
 *             <li>
 *                <p>Stream key — An identifier assigned by Amazon IVS when you create a channel, which is
 *           then used to authorize streaming. See the StreamKey endpoints for more information.
 *               <i>
 *                      <b>Treat the stream key like a secret, since it allows
 *               anyone to stream to the channel.</b>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>Playback key pair — Video playback may be restricted using playback-authorization
 *           tokens, which use public-key encryption. A playback key pair is the public-private pair of
 *           keys used to sign and validate the playback-authorization token. See the PlaybackKeyPair
 *           endpoints for more information.</p>
 *             </li>
 *             <li>
 *                <p>Recording configuration — Stores configuration related to recording a live stream and
 *           where to store the recorded content. Multiple channels can reference the same recording
 *           configuration. See the Recording Configuration endpoints for more information.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services
 *       resource. A tag comprises a <i>key</i> and a <i>value</i>, both
 *       set by you. For example, you might set a tag as <code>topic:nature</code> to label a
 *       particular video category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging Amazon Web Services Resources</a> for
 *       more information, including restrictions that apply to tags and "Tag naming limits and
 *       requirements"; Amazon IVS has no service-specific constraints beyond what is documented
 *       there.</p>
 *          <p>Tags can help you identify and organize your Amazon Web Services resources. For example,
 *       you can use the same tag for different resources to indicate that they are related. You can
 *       also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p>
 *          <p>The Amazon IVS API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
 *       resources support tagging: Channels, Stream Keys, Playback Key Pairs, and Recording
 *       Configurations.</p>
 *          <p>At most 50 tags can be applied to a resource. </p>
 *          <p>
 *             <b>Authentication versus Authorization</b>
 *          </p>
 *          <p>Note the differences between these concepts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Authentication</i> is about verifying identity. You need to be
 *           authenticated to sign Amazon IVS API requests.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need
 *           to have permissions for Amazon IVS API requests. In addition, authorization is needed to
 *           view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon
 *             IVS private channels</a>. (Private channels are channels that are enabled for
 *           "playback authorization.")</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Authentication</b>
 *          </p>
 *          <p>All Amazon IVS API requests must be authenticated with a signature. The Amazon Web Services
 *       Command-Line Interface (CLI) and Amazon IVS Player SDKs take care of signing the underlying
 *       API calls for you. However, if your application calls the Amazon IVS API directly, it’s your
 *       responsibility to sign the requests.</p>
 *          <p>You generate a signature using valid Amazon Web Services credentials that have permission
 *       to perform the requested action. For example, you must sign PutMetadata requests with a
 *       signature generated from an IAM user account that has the <code>ivs:PutMetadata</code>
 *       permission.</p>
 *          <p>For more information:</p>
 *          <ul>
 *             <li>
 *                <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
 *               (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *             </li>
 *             <li>
 *                <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
 *           the Security page of the <i>Amazon IVS User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Resource Names (ARNs)</b>
 *          </p>
 *          <p>ARNs uniquely identify AWS resources. An ARN is required when you need to specify a
 *       resource unambiguously across all of AWS, such as in IAM policies and API calls. For more
 *       information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon Resource Names</a> in the <i>AWS General
 *       Reference</i>.</p>
 *          <p>
 *             <b>Channel Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateChannel</a> — Creates a new channel and an associated stream
 *           key to start streaming.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetChannel</a> — Gets the channel configuration for the specified
 *           channel ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetChannel</a> — Performs <a>GetChannel</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListChannels</a> — Gets summary information about all channels in
 *           your account, in the Amazon Web Services region where the API request is processed. This
 *           list can be filtered to match a specified name or recording-configuration ARN. Filters are
 *           mutually exclusive and cannot be used together. If you try to use both filters, you will
 *           get an error (409 Conflict Exception).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateChannel</a> — Updates a channel's configuration. This does
 *           not affect an ongoing stream of this channel. You must stop and restart the stream for the
 *           changes to take effect.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteChannel</a> — Deletes the specified channel.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>StreamKey Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStreamKey</a> — Creates a stream key, used to initiate a
 *           stream, for the specified channel ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStreamKey</a> — Gets stream key information for the specified
 *           ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>BatchGetStreamKey</a> — Performs <a>GetStreamKey</a> on
 *           multiple ARNs simultaneously.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreamKeys</a> — Gets summary information about stream keys
 *           for the specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStreamKey</a> — Deletes the stream key for the specified
 *           ARN, so it can no longer be used to stream.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Stream Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetStream</a> — Gets information about the active (live) stream on
 *           a specified channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStreamSession</a> — Gets metadata on a specified stream.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreams</a> — Gets summary information about live streams in
 *           your account, in the Amazon Web Services region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStreamSessions</a> — Gets a summary of current and previous
 *           streams for a specified channel in your account, in the AWS region where the API request
 *           is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopStream</a> — Disconnects the incoming RTMPS stream for the
 *           specified channel. Can be used in conjunction with <a>DeleteStreamKey</a> to
 *           prevent further streaming to a channel.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>PutMetadata</a> — Inserts metadata into the active stream of the
 *           specified channel. At most 5 requests per second per channel are allowed, each with a
 *           maximum 1 KB payload. (If 5 TPS is not sufficient for your needs, we recommend batching
 *           your data into a single PutMetadata call.) At most 155 requests per second per account are
 *           allowed.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>PlaybackKeyPair Endpoints</b>
 *          </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Setting Up Private Channels</a> in the
 *         <i>Amazon IVS User Guide</i>.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ImportPlaybackKeyPair</a> — Imports the public portion of a new
 *           key pair and returns its <code>arn</code> and <code>fingerprint</code>. The
 *             <code>privateKey</code> can then be used to generate viewer authorization tokens, to
 *           grant viewers access to private channels (channels enabled for playback
 *           authorization).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetPlaybackKeyPair</a> — Gets a specified playback authorization
 *           key pair and returns the <code>arn</code> and <code>fingerprint</code>. The
 *             <code>privateKey</code> held by the caller can be used to generate viewer authorization
 *           tokens, to grant viewers access to private channels.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListPlaybackKeyPairs</a> — Gets summary information about playback
 *           key pairs.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeletePlaybackKeyPair</a> — Deletes a specified authorization key
 *           pair. This invalidates future viewer tokens generated using the key pair’s
 *             <code>privateKey</code>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>RecordingConfiguration Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateRecordingConfiguration</a> — Creates a new recording
 *           configuration, used to enable recording to Amazon S3.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetRecordingConfiguration</a> — Gets the recording-configuration
 *           metadata for the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRecordingConfigurations</a> — Gets summary information about
 *           all recording configurations in your account, in the Amazon Web Services region where the
 *           API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteRecordingConfiguration</a> — Deletes the recording
 *           configuration for the specified ARN.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Amazon Web Services Tags Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>TagResource</a> — Adds or updates tags for the Amazon Web Services
 *           resource with the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a> — Removes tags from the resource with the
 *           specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a> — Gets information about Amazon Web Services tags for the specified ARN.</p>
 *             </li>
 *          </ul>
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

  constructor(configuration: IvsClientConfig) {
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
