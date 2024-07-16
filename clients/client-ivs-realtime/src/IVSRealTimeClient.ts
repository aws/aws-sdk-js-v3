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
  defaultIVSRealTimeHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  CreateEncoderConfigurationCommandInput,
  CreateEncoderConfigurationCommandOutput,
} from "./commands/CreateEncoderConfigurationCommand";
import {
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
} from "./commands/CreateParticipantTokenCommand";
import { CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateStorageConfigurationCommandInput,
  CreateStorageConfigurationCommandOutput,
} from "./commands/CreateStorageConfigurationCommand";
import {
  DeleteEncoderConfigurationCommandInput,
  DeleteEncoderConfigurationCommandOutput,
} from "./commands/DeleteEncoderConfigurationCommand";
import { DeletePublicKeyCommandInput, DeletePublicKeyCommandOutput } from "./commands/DeletePublicKeyCommand";
import { DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteStorageConfigurationCommandInput,
  DeleteStorageConfigurationCommandOutput,
} from "./commands/DeleteStorageConfigurationCommand";
import {
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import { GetCompositionCommandInput, GetCompositionCommandOutput } from "./commands/GetCompositionCommand";
import {
  GetEncoderConfigurationCommandInput,
  GetEncoderConfigurationCommandOutput,
} from "./commands/GetEncoderConfigurationCommand";
import { GetParticipantCommandInput, GetParticipantCommandOutput } from "./commands/GetParticipantCommand";
import { GetPublicKeyCommandInput, GetPublicKeyCommandOutput } from "./commands/GetPublicKeyCommand";
import { GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { GetStageSessionCommandInput, GetStageSessionCommandOutput } from "./commands/GetStageSessionCommand";
import {
  GetStorageConfigurationCommandInput,
  GetStorageConfigurationCommandOutput,
} from "./commands/GetStorageConfigurationCommand";
import { ImportPublicKeyCommandInput, ImportPublicKeyCommandOutput } from "./commands/ImportPublicKeyCommand";
import { ListCompositionsCommandInput, ListCompositionsCommandOutput } from "./commands/ListCompositionsCommand";
import {
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput,
} from "./commands/ListEncoderConfigurationsCommand";
import {
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "./commands/ListParticipantEventsCommand";
import { ListParticipantsCommandInput, ListParticipantsCommandOutput } from "./commands/ListParticipantsCommand";
import { ListPublicKeysCommandInput, ListPublicKeysCommandOutput } from "./commands/ListPublicKeysCommand";
import { ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
import { ListStageSessionsCommandInput, ListStageSessionsCommandOutput } from "./commands/ListStageSessionsCommand";
import {
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "./commands/ListStorageConfigurationsCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartCompositionCommandInput, StartCompositionCommandOutput } from "./commands/StartCompositionCommand";
import { StopCompositionCommandInput, StopCompositionCommandOutput } from "./commands/StopCompositionCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
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
  | CreateEncoderConfigurationCommandInput
  | CreateParticipantTokenCommandInput
  | CreateStageCommandInput
  | CreateStorageConfigurationCommandInput
  | DeleteEncoderConfigurationCommandInput
  | DeletePublicKeyCommandInput
  | DeleteStageCommandInput
  | DeleteStorageConfigurationCommandInput
  | DisconnectParticipantCommandInput
  | GetCompositionCommandInput
  | GetEncoderConfigurationCommandInput
  | GetParticipantCommandInput
  | GetPublicKeyCommandInput
  | GetStageCommandInput
  | GetStageSessionCommandInput
  | GetStorageConfigurationCommandInput
  | ImportPublicKeyCommandInput
  | ListCompositionsCommandInput
  | ListEncoderConfigurationsCommandInput
  | ListParticipantEventsCommandInput
  | ListParticipantsCommandInput
  | ListPublicKeysCommandInput
  | ListStageSessionsCommandInput
  | ListStagesCommandInput
  | ListStorageConfigurationsCommandInput
  | ListTagsForResourceCommandInput
  | StartCompositionCommandInput
  | StopCompositionCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateStageCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | CreateEncoderConfigurationCommandOutput
  | CreateParticipantTokenCommandOutput
  | CreateStageCommandOutput
  | CreateStorageConfigurationCommandOutput
  | DeleteEncoderConfigurationCommandOutput
  | DeletePublicKeyCommandOutput
  | DeleteStageCommandOutput
  | DeleteStorageConfigurationCommandOutput
  | DisconnectParticipantCommandOutput
  | GetCompositionCommandOutput
  | GetEncoderConfigurationCommandOutput
  | GetParticipantCommandOutput
  | GetPublicKeyCommandOutput
  | GetStageCommandOutput
  | GetStageSessionCommandOutput
  | GetStorageConfigurationCommandOutput
  | ImportPublicKeyCommandOutput
  | ListCompositionsCommandOutput
  | ListEncoderConfigurationsCommandOutput
  | ListParticipantEventsCommandOutput
  | ListParticipantsCommandOutput
  | ListPublicKeysCommandOutput
  | ListStageSessionsCommandOutput
  | ListStagesCommandOutput
  | ListStorageConfigurationsCommandOutput
  | ListTagsForResourceCommandOutput
  | StartCompositionCommandOutput
  | StopCompositionCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateStageCommandOutput;

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
export type IVSRealTimeClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  RegionInputConfig &
  EndpointInputConfig<EndpointParameters> &
  HostHeaderInputConfig &
  UserAgentInputConfig &
  RetryInputConfig &
  HttpAuthSchemeInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of IVSRealTimeClient class constructor that set the region, credentials and other options.
 */
export interface IVSRealTimeClientConfig extends IVSRealTimeClientConfigType {}

/**
 * @public
 */
export type IVSRealTimeClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  RegionResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  HostHeaderResolvedConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of IVSRealTimeClient class. This is resolved and normalized from the {@link IVSRealTimeClientConfig | constructor configuration interface}.
 */
export interface IVSRealTimeClientResolvedConfig extends IVSRealTimeClientResolvedConfigType {}

/**
 * <p>The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>
 *             <b>Key Concepts</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Stage</b> — A virtual space where participants can exchange video in real time.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant token</b> — A token that authenticates a participant when they join a stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Participant object</b> — Represents participants (people) in the stage and
 *             contains information about them. When a token is created, it includes a participant ID;
 *             when a participant uses that token to join a stage, the participant is associated with
 *             that participant ID. There is a 1:1 mapping between participant tokens and
 *             participants.</p>
 *             </li>
 *          </ul>
 *          <p>For server-side composition:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Composition process</b> — Composites participants
 *             of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels).
 *             Composition endpoints support this process.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Composition</b> — Controls the look of the outputs,
 *             including how participants are positioned in the video.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about your IVS live stream, also see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started.html">Getting Started with Amazon IVS Real-Time Streaming</a>.</p>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to
 *       tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific
 *       constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS real-time API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 * @public
 */
export class IVSRealTimeClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  IVSRealTimeClientResolvedConfig
> {
  /**
   * The resolved configuration of IVSRealTimeClient class. This is resolved and normalized from the {@link IVSRealTimeClientConfig | constructor configuration interface}.
   */
  readonly config: IVSRealTimeClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<IVSRealTimeClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveRegionConfig(_config_1);
    const _config_3 = resolveEndpointConfig(_config_2);
    const _config_4 = resolveHostHeaderConfig(_config_3);
    const _config_5 = resolveUserAgentConfig(_config_4);
    const _config_6 = resolveRetryConfig(_config_5);
    const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
    const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
    super(_config_8);
    this.config = _config_8;
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
        identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
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
  private getDefaultHttpAuthSchemeParametersProvider() {
    return defaultIVSRealTimeHttpAuthSchemeParametersProvider;
  }
  private getIdentityProviderConfigProvider() {
    return async (config: IVSRealTimeClientResolvedConfig) =>
      new DefaultIdentityProviderConfig({
        "aws.auth#sigv4": config.credentials,
      });
  }
}
