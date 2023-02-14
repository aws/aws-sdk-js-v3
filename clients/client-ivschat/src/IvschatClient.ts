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

import { CreateChatTokenCommandInput, CreateChatTokenCommandOutput } from "./commands/CreateChatTokenCommand";
import {
  CreateLoggingConfigurationCommandInput,
  CreateLoggingConfigurationCommandOutput,
} from "./commands/CreateLoggingConfigurationCommand";
import { CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  DeleteLoggingConfigurationCommandInput,
  DeleteLoggingConfigurationCommandOutput,
} from "./commands/DeleteLoggingConfigurationCommand";
import { DeleteMessageCommandInput, DeleteMessageCommandOutput } from "./commands/DeleteMessageCommand";
import { DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import { DisconnectUserCommandInput, DisconnectUserCommandOutput } from "./commands/DisconnectUserCommand";
import {
  GetLoggingConfigurationCommandInput,
  GetLoggingConfigurationCommandOutput,
} from "./commands/GetLoggingConfigurationCommand";
import { GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import {
  ListLoggingConfigurationsCommandInput,
  ListLoggingConfigurationsCommandOutput,
} from "./commands/ListLoggingConfigurationsCommand";
import { ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import {
  UpdateLoggingConfigurationCommandInput,
  UpdateLoggingConfigurationCommandOutput,
} from "./commands/UpdateLoggingConfigurationCommand";
import { UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import {
  ClientInputEndpointParameters,
  ClientResolvedEndpointParameters,
  EndpointParameters,
  resolveClientEndpointParameters,
} from "./endpoint/EndpointParameters";
import { getRuntimeConfig as __getRuntimeConfig } from "./runtimeConfig";

export type ServiceInputTypes =
  | CreateChatTokenCommandInput
  | CreateLoggingConfigurationCommandInput
  | CreateRoomCommandInput
  | DeleteLoggingConfigurationCommandInput
  | DeleteMessageCommandInput
  | DeleteRoomCommandInput
  | DisconnectUserCommandInput
  | GetLoggingConfigurationCommandInput
  | GetRoomCommandInput
  | ListLoggingConfigurationsCommandInput
  | ListRoomsCommandInput
  | ListTagsForResourceCommandInput
  | SendEventCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateLoggingConfigurationCommandInput
  | UpdateRoomCommandInput;

export type ServiceOutputTypes =
  | CreateChatTokenCommandOutput
  | CreateLoggingConfigurationCommandOutput
  | CreateRoomCommandOutput
  | DeleteLoggingConfigurationCommandOutput
  | DeleteMessageCommandOutput
  | DeleteRoomCommandOutput
  | DisconnectUserCommandOutput
  | GetLoggingConfigurationCommandOutput
  | GetRoomCommandOutput
  | ListLoggingConfigurationsCommandOutput
  | ListRoomsCommandOutput
  | ListTagsForResourceCommandOutput
  | SendEventCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateLoggingConfigurationCommandOutput
  | UpdateRoomCommandOutput;

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

type IvschatClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  RetryInputConfig &
  HostHeaderInputConfig &
  AwsAuthInputConfig &
  UserAgentInputConfig &
  ClientInputEndpointParameters;
/**
 * The configuration interface of IvschatClient class constructor that set the region, credentials and other options.
 */
export interface IvschatClientConfig extends IvschatClientConfigType {}

type IvschatClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  RetryResolvedConfig &
  HostHeaderResolvedConfig &
  AwsAuthResolvedConfig &
  UserAgentResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * The resolved configuration interface of IvschatClient class. This is resolved and normalized from the {@link IvschatClientConfig | constructor configuration interface}.
 */
export interface IvschatClientResolvedConfig extends IvschatClientResolvedConfigType {}

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat
 *       resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging
 *         API</a>, to enable users to interact with chat rooms in real time.</p>
 *          <p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat
 *       HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
 *         <i>AWS General Reference</i>. </p>
 *          <p>
 *             <b>Notes on terminology:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You create service applications using the Amazon IVS Chat API. We refer to these as
 *             <i>applications</i>.</p>
 *             </li>
 *             <li>
 *                <p>You create front-end client applications (browser and Android/iOS apps) using the
 *           Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources are part of Amazon IVS Chat:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>LoggingConfiguration</b> — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Room</b> — The central Amazon IVS Chat resource through
 *           which clients connect to and exchange chat messages. See the Room endpoints for more
 *           information.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to
 *       tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific
 *       constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS Chat API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Room.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 *          <p>
 *             <b>API Access Security</b>
 *          </p>
 *          <p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated
 *       and authorized to access Amazon IVS Chat resources. Note the differences between these
 *       concepts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Authentication</i> is about verifying identity. Requests to the
 *           Amazon IVS Chat API must be signed to verify your identity.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need
 *           to have permissions for Amazon IVS Chat API requests.</p>
 *             </li>
 *          </ul>
 *          <p>Users (viewers) connect to a room using secure access tokens that you create using the
 *         <a>CreateChatToken</a> endpoint through the AWS SDK. You call CreateChatToken for
 *       every user’s chat session, passing identity and authorization information about the
 *       user.</p>
 *          <p>
 *             <b>Signing API Requests</b>
 *          </p>
 *          <p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security
 *       credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the
 *       underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API
 *       directly, it’s your responsibility to sign the requests.</p>
 *          <p>You generate a signature using valid AWS credentials for an IAM role that has permission
 *       to perform the requested action. For example, DeleteMessage requests must be made using an IAM
 *       role that has the <code>ivschat:DeleteMessage</code> permission.</p>
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
 *           Reference</i>.</p>
 *          <p>
 *             <b>Messaging Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteMessage</a> — Sends an event to a specific room which
 *           directs clients to delete a specific message; that is, unrender it from view and delete it
 *           from the client’s chat history. This event’s <code>EventName</code> is
 *             <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html">
 *             DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectUser</a> — Disconnects all connections using a specified
 *           user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html">
 *             DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SendEvent</a> — Sends an event to a room. Use this within your
 *           application’s business logic to send events to clients of a room; e.g., to notify clients
 *           to change the way the chat UI is rendered.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chat Token Endpoint</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateChatToken</a> — Creates an encrypted token that is used by a chat participant to establish an
 *           individual WebSocket chat connection to a room. When the token is used to connect to chat,
 *           the connection is valid for the session duration specified in the request. The token
 *           becomes invalid at the token-expiration timestamp included in the response.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Room Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateRoom</a> — Creates a room that allows clients to connect and
 *           pass messages.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteRoom</a> — Deletes the specified room.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetRoom</a> — Gets the specified room.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRooms</a> — Gets summary information about all your rooms in
 *           the AWS region where the API request is processed. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateRoom</a> — Updates a room’s configuration.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Logging Configuration Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateLoggingConfiguration</a> — Creates a logging configuration that allows clients to store and record sent messages.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteLoggingConfiguration</a> — Deletes the specified logging
 *           configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetLoggingConfiguration</a> — Gets the specified logging
 *           configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListLoggingConfigurations</a> — Gets summary information about all
 *           your logging configurations in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateLoggingConfiguration</a> — Updates a specified logging configuration.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tags Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a> — Gets information about AWS tags for the
 *           specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a> — Adds or updates tags for the AWS resource with
 *           the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a> — Removes tags from the resource with the
 *           specified ARN.</p>
 *             </li>
 *          </ul>
 *          <p>All the above are HTTP operations. There is a separate <i>messaging</i> API
 *       for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API
 *         Reference</a>.</p>
 */
export class IvschatClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IvschatClientResolvedConfig
> {
  /**
   * The resolved configuration of IvschatClient class. This is resolved and normalized from the {@link IvschatClientConfig | constructor configuration interface}.
   */
  readonly config: IvschatClientResolvedConfig;

  constructor(configuration: IvschatClientConfig) {
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
