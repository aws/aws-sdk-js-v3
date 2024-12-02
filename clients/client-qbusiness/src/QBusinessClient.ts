// smithy-typescript generated code
import {
  EventStreamInputConfig,
  EventStreamResolvedConfig,
  resolveEventStreamConfig,
} from "@aws-sdk/middleware-eventstream";
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
import { EventStreamPayloadHandlerProvider as __EventStreamPayloadHandlerProvider } from "@aws-sdk/types";
import { RegionInputConfig, RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import {
  EventStreamSerdeInputConfig,
  EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  defaultQBusinessHttpAuthSchemeParametersProvider,
  HttpAuthSchemeInputConfig,
  HttpAuthSchemeResolvedConfig,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import { ChatCommandInput, ChatCommandOutput } from "./commands/ChatCommand";
import { ChatSyncCommandInput, ChatSyncCommandOutput } from "./commands/ChatSyncCommand";
import { CreateApplicationCommandInput, CreateApplicationCommandOutput } from "./commands/CreateApplicationCommand";
import { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import { CreatePluginCommandInput, CreatePluginCommandOutput } from "./commands/CreatePluginCommand";
import { CreateRetrieverCommandInput, CreateRetrieverCommandOutput } from "./commands/CreateRetrieverCommand";
import { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import {
  CreateWebExperienceCommandInput,
  CreateWebExperienceCommandOutput,
} from "./commands/CreateWebExperienceCommand";
import { DeleteApplicationCommandInput, DeleteApplicationCommandOutput } from "./commands/DeleteApplicationCommand";
import {
  DeleteChatControlsConfigurationCommandInput,
  DeleteChatControlsConfigurationCommandOutput,
} from "./commands/DeleteChatControlsConfigurationCommand";
import { DeleteConversationCommandInput, DeleteConversationCommandOutput } from "./commands/DeleteConversationCommand";
import { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import { DeletePluginCommandInput, DeletePluginCommandOutput } from "./commands/DeletePluginCommand";
import { DeleteRetrieverCommandInput, DeleteRetrieverCommandOutput } from "./commands/DeleteRetrieverCommand";
import { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import {
  DeleteWebExperienceCommandInput,
  DeleteWebExperienceCommandOutput,
} from "./commands/DeleteWebExperienceCommand";
import { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import {
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
} from "./commands/GetChatControlsConfigurationCommand";
import { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import { GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import { GetMediaCommandInput, GetMediaCommandOutput } from "./commands/GetMediaCommand";
import { GetPluginCommandInput, GetPluginCommandOutput } from "./commands/GetPluginCommand";
import { GetRetrieverCommandInput, GetRetrieverCommandOutput } from "./commands/GetRetrieverCommand";
import { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import { GetWebExperienceCommandInput, GetWebExperienceCommandOutput } from "./commands/GetWebExperienceCommand";
import { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "./commands/ListAttachmentsCommand";
import { ListConversationsCommandInput, ListConversationsCommandOutput } from "./commands/ListConversationsCommand";
import { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand";
import { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import { ListMessagesCommandInput, ListMessagesCommandOutput } from "./commands/ListMessagesCommand";
import { ListPluginsCommandInput, ListPluginsCommandOutput } from "./commands/ListPluginsCommand";
import { ListRetrieversCommandInput, ListRetrieversCommandOutput } from "./commands/ListRetrieversCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { ListWebExperiencesCommandInput, ListWebExperiencesCommandOutput } from "./commands/ListWebExperiencesCommand";
import { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import { PutGroupCommandInput, PutGroupCommandOutput } from "./commands/PutGroupCommand";
import {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateApplicationCommandInput, UpdateApplicationCommandOutput } from "./commands/UpdateApplicationCommand";
import {
  UpdateChatControlsConfigurationCommandInput,
  UpdateChatControlsConfigurationCommandOutput,
} from "./commands/UpdateChatControlsConfigurationCommand";
import { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import { UpdatePluginCommandInput, UpdatePluginCommandOutput } from "./commands/UpdatePluginCommand";
import { UpdateRetrieverCommandInput, UpdateRetrieverCommandOutput } from "./commands/UpdateRetrieverCommand";
import { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import {
  UpdateWebExperienceCommandInput,
  UpdateWebExperienceCommandOutput,
} from "./commands/UpdateWebExperienceCommand";
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
  | BatchDeleteDocumentCommandInput
  | BatchPutDocumentCommandInput
  | ChatCommandInput
  | ChatSyncCommandInput
  | CreateApplicationCommandInput
  | CreateDataSourceCommandInput
  | CreateIndexCommandInput
  | CreatePluginCommandInput
  | CreateRetrieverCommandInput
  | CreateUserCommandInput
  | CreateWebExperienceCommandInput
  | DeleteApplicationCommandInput
  | DeleteChatControlsConfigurationCommandInput
  | DeleteConversationCommandInput
  | DeleteDataSourceCommandInput
  | DeleteGroupCommandInput
  | DeleteIndexCommandInput
  | DeletePluginCommandInput
  | DeleteRetrieverCommandInput
  | DeleteUserCommandInput
  | DeleteWebExperienceCommandInput
  | GetApplicationCommandInput
  | GetChatControlsConfigurationCommandInput
  | GetDataSourceCommandInput
  | GetGroupCommandInput
  | GetIndexCommandInput
  | GetMediaCommandInput
  | GetPluginCommandInput
  | GetRetrieverCommandInput
  | GetUserCommandInput
  | GetWebExperienceCommandInput
  | ListApplicationsCommandInput
  | ListAttachmentsCommandInput
  | ListConversationsCommandInput
  | ListDataSourceSyncJobsCommandInput
  | ListDataSourcesCommandInput
  | ListDocumentsCommandInput
  | ListGroupsCommandInput
  | ListIndicesCommandInput
  | ListMessagesCommandInput
  | ListPluginsCommandInput
  | ListRetrieversCommandInput
  | ListTagsForResourceCommandInput
  | ListWebExperiencesCommandInput
  | PutFeedbackCommandInput
  | PutGroupCommandInput
  | StartDataSourceSyncJobCommandInput
  | StopDataSourceSyncJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateChatControlsConfigurationCommandInput
  | UpdateDataSourceCommandInput
  | UpdateIndexCommandInput
  | UpdatePluginCommandInput
  | UpdateRetrieverCommandInput
  | UpdateUserCommandInput
  | UpdateWebExperienceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | BatchDeleteDocumentCommandOutput
  | BatchPutDocumentCommandOutput
  | ChatCommandOutput
  | ChatSyncCommandOutput
  | CreateApplicationCommandOutput
  | CreateDataSourceCommandOutput
  | CreateIndexCommandOutput
  | CreatePluginCommandOutput
  | CreateRetrieverCommandOutput
  | CreateUserCommandOutput
  | CreateWebExperienceCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteChatControlsConfigurationCommandOutput
  | DeleteConversationCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteGroupCommandOutput
  | DeleteIndexCommandOutput
  | DeletePluginCommandOutput
  | DeleteRetrieverCommandOutput
  | DeleteUserCommandOutput
  | DeleteWebExperienceCommandOutput
  | GetApplicationCommandOutput
  | GetChatControlsConfigurationCommandOutput
  | GetDataSourceCommandOutput
  | GetGroupCommandOutput
  | GetIndexCommandOutput
  | GetMediaCommandOutput
  | GetPluginCommandOutput
  | GetRetrieverCommandOutput
  | GetUserCommandOutput
  | GetWebExperienceCommandOutput
  | ListApplicationsCommandOutput
  | ListAttachmentsCommandOutput
  | ListConversationsCommandOutput
  | ListDataSourceSyncJobsCommandOutput
  | ListDataSourcesCommandOutput
  | ListDocumentsCommandOutput
  | ListGroupsCommandOutput
  | ListIndicesCommandOutput
  | ListMessagesCommandOutput
  | ListPluginsCommandOutput
  | ListRetrieversCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebExperiencesCommandOutput
  | PutFeedbackCommandOutput
  | PutGroupCommandOutput
  | StartDataSourceSyncJobCommandOutput
  | StopDataSourceSyncJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateChatControlsConfigurationCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateIndexCommandOutput
  | UpdatePluginCommandOutput
  | UpdateRetrieverCommandOutput
  | UpdateUserCommandOutput
  | UpdateWebExperienceCommandOutput;

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
   * The function that provides necessary utilities for generating and parsing event stream
   */
  eventStreamSerdeProvider?: __EventStreamSerdeProvider;

  /**
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;

  /**
   * The function that provides necessary utilities for handling request event stream.
   * @internal
   */
  eventStreamPayloadHandlerProvider?: __EventStreamPayloadHandlerProvider;
}

/**
 * @public
 */
export type QBusinessClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
  ClientDefaults &
  UserAgentInputConfig &
  RetryInputConfig &
  RegionInputConfig &
  HostHeaderInputConfig &
  EndpointInputConfig<EndpointParameters> &
  EventStreamSerdeInputConfig &
  HttpAuthSchemeInputConfig &
  EventStreamInputConfig &
  ClientInputEndpointParameters;
/**
 * @public
 *
 *  The configuration interface of QBusinessClient class constructor that set the region, credentials and other options.
 */
export interface QBusinessClientConfig extends QBusinessClientConfigType {}

/**
 * @public
 */
export type QBusinessClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
  Required<ClientDefaults> &
  RuntimeExtensionsConfig &
  UserAgentResolvedConfig &
  RetryResolvedConfig &
  RegionResolvedConfig &
  HostHeaderResolvedConfig &
  EndpointResolvedConfig<EndpointParameters> &
  EventStreamSerdeResolvedConfig &
  HttpAuthSchemeResolvedConfig &
  EventStreamResolvedConfig &
  ClientResolvedEndpointParameters;
/**
 * @public
 *
 *  The resolved configuration interface of QBusinessClient class. This is resolved and normalized from the {@link QBusinessClientConfig | constructor configuration interface}.
 */
export interface QBusinessClientResolvedConfig extends QBusinessClientResolvedConfigType {}

/**
 * <p>This is the <i>Amazon Q Business</i> API Reference. Amazon Q Business is a fully
 *             managed, generative-AI powered enterprise chat assistant that you can deploy within your
 *             organization. Amazon Q Business enhances employee productivity by supporting key tasks such
 *             as question-answering, knowledge discovery, writing email messages, summarizing text,
 *             drafting document outlines, and brainstorming ideas. Users ask questions of
 *             Amazon Q Business and get answers that are presented in a conversational manner. For an
 *             introduction to the service, see the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html">
 *                <i>Amazon Q Business User Guide</i>
 *             </a>.</p>
 *          <p>For an overview of the Amazon Q Business APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview">Overview of Amazon Q Business API operations</a>.</p>
 *          <p>For information about the IAM access control permissions you need to
 *             use this API, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html">IAM roles for Amazon Q Business</a> in the
 *                 <i>Amazon Q Business User Guide</i>.</p>
 *          <p>The following resources provide additional information about using the Amazon Q Business
 *             API:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html">Setting up for
 *                             Amazon Q Business</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html">Amazon Q Business CLI Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>
 *                      <a href="https://docs.aws.amazon.com/general/latest/gr/amazonq.html">Amazon Web Services General Reference</a>
 *                   </i>
 *                </p>
 *             </li>
 *          </ul>
 * @public
 */
export class QBusinessClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QBusinessClientResolvedConfig
> {
  /**
   * The resolved configuration of QBusinessClient class. This is resolved and normalized from the {@link QBusinessClientConfig | constructor configuration interface}.
   */
  readonly config: QBusinessClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<QBusinessClientConfig>) {
    const _config_0 = __getRuntimeConfig(configuration || {});
    const _config_1 = resolveClientEndpointParameters(_config_0);
    const _config_2 = resolveUserAgentConfig(_config_1);
    const _config_3 = resolveRetryConfig(_config_2);
    const _config_4 = resolveRegionConfig(_config_3);
    const _config_5 = resolveHostHeaderConfig(_config_4);
    const _config_6 = resolveEndpointConfig(_config_5);
    const _config_7 = resolveEventStreamSerdeConfig(_config_6);
    const _config_8 = resolveHttpAuthSchemeConfig(_config_7);
    const _config_9 = resolveEventStreamConfig(_config_8);
    const _config_10 = resolveRuntimeExtensions(_config_9, configuration?.extensions || []);
    super(_config_10);
    this.config = _config_10;
    this.middlewareStack.use(getUserAgentPlugin(this.config));
    this.middlewareStack.use(getRetryPlugin(this.config));
    this.middlewareStack.use(getContentLengthPlugin(this.config));
    this.middlewareStack.use(getHostHeaderPlugin(this.config));
    this.middlewareStack.use(getLoggerPlugin(this.config));
    this.middlewareStack.use(getRecursionDetectionPlugin(this.config));
    this.middlewareStack.use(
      getHttpAuthSchemeEndpointRuleSetPlugin(this.config, {
        httpAuthSchemeParametersProvider: defaultQBusinessHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: QBusinessClientResolvedConfig) =>
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
