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
  defaultIvsHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import { BatchGetChannelCommandInput, BatchGetChannelCommandOutput } from "./commands/BatchGetChannelCommand";
import { BatchGetStreamKeyCommandInput, BatchGetStreamKeyCommandOutput } from "./commands/BatchGetStreamKeyCommand";
import {
  BatchStartViewerSessionRevocationCommandInput,
  BatchStartViewerSessionRevocationCommandOutput,
} from "./commands/BatchStartViewerSessionRevocationCommand";
import { CreateChannelCommandInput, CreateChannelCommandOutput } from "./commands/CreateChannelCommand";
import {
  CreatePlaybackRestrictionPolicyCommandInput,
  CreatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/CreatePlaybackRestrictionPolicyCommand";
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
  DeletePlaybackRestrictionPolicyCommandInput,
  DeletePlaybackRestrictionPolicyCommandOutput,
} from "./commands/DeletePlaybackRestrictionPolicyCommand";
import {
  DeleteRecordingConfigurationCommandInput,
  DeleteRecordingConfigurationCommandOutput,
} from "./commands/DeleteRecordingConfigurationCommand";
import { DeleteStreamKeyCommandInput, DeleteStreamKeyCommandOutput } from "./commands/DeleteStreamKeyCommand";
import { GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import { GetPlaybackKeyPairCommandInput, GetPlaybackKeyPairCommandOutput } from "./commands/GetPlaybackKeyPairCommand";
import {
  GetPlaybackRestrictionPolicyCommandInput,
  GetPlaybackRestrictionPolicyCommandOutput,
} from "./commands/GetPlaybackRestrictionPolicyCommand";
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
  ListPlaybackRestrictionPoliciesCommandInput,
  ListPlaybackRestrictionPoliciesCommandOutput,
} from "./commands/ListPlaybackRestrictionPoliciesCommand";
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
import {
  StartViewerSessionRevocationCommandInput,
  StartViewerSessionRevocationCommandOutput,
} from "./commands/StartViewerSessionRevocationCommand";
import { StopStreamCommandInput, StopStreamCommandOutput } from "./commands/StopStreamCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateChannelCommandInput, UpdateChannelCommandOutput } from "./commands/UpdateChannelCommand";
import {
  UpdatePlaybackRestrictionPolicyCommandInput,
  UpdatePlaybackRestrictionPolicyCommandOutput,
} from "./commands/UpdatePlaybackRestrictionPolicyCommand";
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
  | BatchGetChannelCommandInput
  | BatchGetStreamKeyCommandInput
  | BatchStartViewerSessionRevocationCommandInput
  | CreateChannelCommandInput
  | CreatePlaybackRestrictionPolicyCommandInput
  | CreateRecordingConfigurationCommandInput
  | CreateStreamKeyCommandInput
  | DeleteChannelCommandInput
  | DeletePlaybackKeyPairCommandInput
  | DeletePlaybackRestrictionPolicyCommandInput
  | DeleteRecordingConfigurationCommandInput
  | DeleteStreamKeyCommandInput
  | GetChannelCommandInput
  | GetPlaybackKeyPairCommandInput
  | GetPlaybackRestrictionPolicyCommandInput
  | GetRecordingConfigurationCommandInput
  | GetStreamCommandInput
  | GetStreamKeyCommandInput
  | GetStreamSessionCommandInput
  | ImportPlaybackKeyPairCommandInput
  | ListChannelsCommandInput
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
  | UpdateChannelCommandInput
  | UpdatePlaybackRestrictionPolicyCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchGetChannelCommandOutput
  | BatchGetStreamKeyCommandOutput
  | BatchStartViewerSessionRevocationCommandOutput
  | CreateChannelCommandOutput
  | CreatePlaybackRestrictionPolicyCommandOutput
  | CreateRecordingConfigurationCommandOutput
  | CreateStreamKeyCommandOutput
  | DeleteChannelCommandOutput
  | DeletePlaybackKeyPairCommandOutput
  | DeletePlaybackRestrictionPolicyCommandOutput
  | DeleteRecordingConfigurationCommandOutput
  | DeleteStreamKeyCommandOutput
  | GetChannelCommandOutput
  | GetPlaybackKeyPairCommandOutput
  | GetPlaybackRestrictionPolicyCommandOutput
  | GetRecordingConfigurationCommandOutput
  | GetStreamCommandOutput
  | GetStreamKeyCommandOutput
  | GetStreamSessionCommandOutput
  | ImportPlaybackKeyPairCommandOutput
  | ListChannelsCommandOutput
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
  | UpdateChannelCommandOutput
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
 *             <b>Key Concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Channel</b> — Stores configuration data related to your live stream. You first create a channel and then use the channel’s stream key to start your live stream.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Stream key</b> — An identifier assigned by Amazon IVS when you create a channel, which is then used to authorize streaming. <i>
 *                      <b>Treat the stream key like a secret, since it allows anyone to stream to the channel.</b>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Playback key pair</b> — Video playback may be restricted using playback-authorization tokens, which use public-key encryption. A playback key pair is the public-private pair of keys used to sign and validate the playback-authorization token.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Recording configuration</b> — Stores configuration related to recording a live stream and where to store the recorded content. Multiple channels can reference the same recording configuration.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Playback restriction policy</b> — Restricts playback by countries and/or origin sites.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about your IVS live stream, also see <a href="https://docs.aws.amazon.com/ivs/latest/LowLatencyUserGuide/getting-started.html">Getting Started with IVS Low-Latency Streaming</a>.</p>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an Amazon Web Services
 *       resource. A tag comprises a <i>key</i> and a <i>value</i>, both
 *       set by you. For example, you might set a tag as <code>topic:nature</code> to label a
 *       particular video category. See <a href="https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html">Best practices and strategies</a> in <i>Tagging Amazon Web Services Resources and Tag Editor</i> for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS has no service-specific constraints beyond what is documented
 *       there.</p>
 *          <p>Tags can help you identify and organize your Amazon Web Services resources. For example,
 *       you can use the same tag for different resources to indicate that they are related. You can
 *       also use tags to manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html"> Access Tags</a>). </p>
 *          <p>The Amazon IVS API has these tag-related operations: <a>TagResource</a>, <a>UntagResource</a>, and <a>ListTagsForResource</a>. The following
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
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need to have permissions for Amazon IVS API requests. In addition,
 *           authorization is needed to view <a href="https://docs.aws.amazon.com/ivs/latest/userguide/private-channels.html">Amazon IVS private channels</a>.
 *           (Private channels are channels that are enabled for "playback authorization.")</p>
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
 *       signature generated from a user account that has the <code>ivs:PutMetadata</code>
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
 *       resource unambiguously across all of AWS, such as in IAM policies and API
 *       calls. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">Amazon
 *         Resource Names</a> in the <i>AWS General Reference</i>.</p>
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
