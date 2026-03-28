// smithy-typescript generated code
import {
  type EventStreamInputConfig,
  type EventStreamResolvedConfig,
  resolveEventStreamConfig,
} from "@aws-sdk/middleware-eventstream";
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
import { EventStreamPayloadHandlerProvider as __EventStreamPayloadHandlerProvider } from "@aws-sdk/types";
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
import {
  type EventStreamSerdeInputConfig,
  type EventStreamSerdeResolvedConfig,
  resolveEventStreamSerdeConfig,
} from "@smithy/eventstream-serde-config-resolver";
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
  EventStreamSerdeProvider as __EventStreamSerdeProvider,
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
  defaultQBusinessHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  AssociatePermissionCommandInput,
  AssociatePermissionCommandOutput,
} from "./commands/AssociatePermissionCommand";
import type {
  BatchDeleteDocumentCommandInput,
  BatchDeleteDocumentCommandOutput,
} from "./commands/BatchDeleteDocumentCommand";
import type { BatchPutDocumentCommandInput, BatchPutDocumentCommandOutput } from "./commands/BatchPutDocumentCommand";
import type {
  CancelSubscriptionCommandInput,
  CancelSubscriptionCommandOutput,
} from "./commands/CancelSubscriptionCommand";
import type { ChatCommandInput, ChatCommandOutput } from "./commands/ChatCommand";
import type { ChatSyncCommandInput, ChatSyncCommandOutput } from "./commands/ChatSyncCommand";
import type {
  CheckDocumentAccessCommandInput,
  CheckDocumentAccessCommandOutput,
} from "./commands/CheckDocumentAccessCommand";
import type {
  CreateAnonymousWebExperienceUrlCommandInput,
  CreateAnonymousWebExperienceUrlCommandOutput,
} from "./commands/CreateAnonymousWebExperienceUrlCommand";
import type {
  CreateApplicationCommandInput,
  CreateApplicationCommandOutput,
} from "./commands/CreateApplicationCommand";
import type {
  CreateChatResponseConfigurationCommandInput,
  CreateChatResponseConfigurationCommandOutput,
} from "./commands/CreateChatResponseConfigurationCommand";
import type {
  CreateDataAccessorCommandInput,
  CreateDataAccessorCommandOutput,
} from "./commands/CreateDataAccessorCommand";
import type { CreateDataSourceCommandInput, CreateDataSourceCommandOutput } from "./commands/CreateDataSourceCommand";
import type { CreateIndexCommandInput, CreateIndexCommandOutput } from "./commands/CreateIndexCommand";
import type { CreatePluginCommandInput, CreatePluginCommandOutput } from "./commands/CreatePluginCommand";
import type { CreateRetrieverCommandInput, CreateRetrieverCommandOutput } from "./commands/CreateRetrieverCommand";
import type {
  CreateSubscriptionCommandInput,
  CreateSubscriptionCommandOutput,
} from "./commands/CreateSubscriptionCommand";
import type { CreateUserCommandInput, CreateUserCommandOutput } from "./commands/CreateUserCommand";
import type {
  CreateWebExperienceCommandInput,
  CreateWebExperienceCommandOutput,
} from "./commands/CreateWebExperienceCommand";
import type {
  DeleteApplicationCommandInput,
  DeleteApplicationCommandOutput,
} from "./commands/DeleteApplicationCommand";
import type { DeleteAttachmentCommandInput, DeleteAttachmentCommandOutput } from "./commands/DeleteAttachmentCommand";
import type {
  DeleteChatControlsConfigurationCommandInput,
  DeleteChatControlsConfigurationCommandOutput,
} from "./commands/DeleteChatControlsConfigurationCommand";
import type {
  DeleteChatResponseConfigurationCommandInput,
  DeleteChatResponseConfigurationCommandOutput,
} from "./commands/DeleteChatResponseConfigurationCommand";
import type {
  DeleteConversationCommandInput,
  DeleteConversationCommandOutput,
} from "./commands/DeleteConversationCommand";
import type {
  DeleteDataAccessorCommandInput,
  DeleteDataAccessorCommandOutput,
} from "./commands/DeleteDataAccessorCommand";
import type { DeleteDataSourceCommandInput, DeleteDataSourceCommandOutput } from "./commands/DeleteDataSourceCommand";
import type { DeleteGroupCommandInput, DeleteGroupCommandOutput } from "./commands/DeleteGroupCommand";
import type { DeleteIndexCommandInput, DeleteIndexCommandOutput } from "./commands/DeleteIndexCommand";
import type { DeletePluginCommandInput, DeletePluginCommandOutput } from "./commands/DeletePluginCommand";
import type { DeleteRetrieverCommandInput, DeleteRetrieverCommandOutput } from "./commands/DeleteRetrieverCommand";
import type { DeleteUserCommandInput, DeleteUserCommandOutput } from "./commands/DeleteUserCommand";
import type {
  DeleteWebExperienceCommandInput,
  DeleteWebExperienceCommandOutput,
} from "./commands/DeleteWebExperienceCommand";
import type {
  DisassociatePermissionCommandInput,
  DisassociatePermissionCommandOutput,
} from "./commands/DisassociatePermissionCommand";
import type { GetApplicationCommandInput, GetApplicationCommandOutput } from "./commands/GetApplicationCommand";
import type {
  GetChatControlsConfigurationCommandInput,
  GetChatControlsConfigurationCommandOutput,
} from "./commands/GetChatControlsConfigurationCommand";
import type {
  GetChatResponseConfigurationCommandInput,
  GetChatResponseConfigurationCommandOutput,
} from "./commands/GetChatResponseConfigurationCommand";
import type { GetDataAccessorCommandInput, GetDataAccessorCommandOutput } from "./commands/GetDataAccessorCommand";
import type { GetDataSourceCommandInput, GetDataSourceCommandOutput } from "./commands/GetDataSourceCommand";
import type {
  GetDocumentContentCommandInput,
  GetDocumentContentCommandOutput,
} from "./commands/GetDocumentContentCommand";
import type { GetGroupCommandInput, GetGroupCommandOutput } from "./commands/GetGroupCommand";
import type { GetIndexCommandInput, GetIndexCommandOutput } from "./commands/GetIndexCommand";
import type { GetMediaCommandInput, GetMediaCommandOutput } from "./commands/GetMediaCommand";
import type { GetPluginCommandInput, GetPluginCommandOutput } from "./commands/GetPluginCommand";
import type { GetPolicyCommandInput, GetPolicyCommandOutput } from "./commands/GetPolicyCommand";
import type { GetRetrieverCommandInput, GetRetrieverCommandOutput } from "./commands/GetRetrieverCommand";
import type { GetUserCommandInput, GetUserCommandOutput } from "./commands/GetUserCommand";
import type { GetWebExperienceCommandInput, GetWebExperienceCommandOutput } from "./commands/GetWebExperienceCommand";
import type { ListApplicationsCommandInput, ListApplicationsCommandOutput } from "./commands/ListApplicationsCommand";
import type { ListAttachmentsCommandInput, ListAttachmentsCommandOutput } from "./commands/ListAttachmentsCommand";
import type {
  ListChatResponseConfigurationsCommandInput,
  ListChatResponseConfigurationsCommandOutput,
} from "./commands/ListChatResponseConfigurationsCommand";
import type {
  ListConversationsCommandInput,
  ListConversationsCommandOutput,
} from "./commands/ListConversationsCommand";
import type {
  ListDataAccessorsCommandInput,
  ListDataAccessorsCommandOutput,
} from "./commands/ListDataAccessorsCommand";
import type { ListDataSourcesCommandInput, ListDataSourcesCommandOutput } from "./commands/ListDataSourcesCommand";
import type {
  ListDataSourceSyncJobsCommandInput,
  ListDataSourceSyncJobsCommandOutput,
} from "./commands/ListDataSourceSyncJobsCommand";
import type { ListDocumentsCommandInput, ListDocumentsCommandOutput } from "./commands/ListDocumentsCommand";
import type { ListGroupsCommandInput, ListGroupsCommandOutput } from "./commands/ListGroupsCommand";
import type { ListIndicesCommandInput, ListIndicesCommandOutput } from "./commands/ListIndicesCommand";
import type { ListMessagesCommandInput, ListMessagesCommandOutput } from "./commands/ListMessagesCommand";
import type {
  ListPluginActionsCommandInput,
  ListPluginActionsCommandOutput,
} from "./commands/ListPluginActionsCommand";
import type { ListPluginsCommandInput, ListPluginsCommandOutput } from "./commands/ListPluginsCommand";
import type {
  ListPluginTypeActionsCommandInput,
  ListPluginTypeActionsCommandOutput,
} from "./commands/ListPluginTypeActionsCommand";
import type {
  ListPluginTypeMetadataCommandInput,
  ListPluginTypeMetadataCommandOutput,
} from "./commands/ListPluginTypeMetadataCommand";
import type { ListRetrieversCommandInput, ListRetrieversCommandOutput } from "./commands/ListRetrieversCommand";
import type {
  ListSubscriptionsCommandInput,
  ListSubscriptionsCommandOutput,
} from "./commands/ListSubscriptionsCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  ListWebExperiencesCommandInput,
  ListWebExperiencesCommandOutput,
} from "./commands/ListWebExperiencesCommand";
import type { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import type { PutGroupCommandInput, PutGroupCommandOutput } from "./commands/PutGroupCommand";
import type {
  SearchRelevantContentCommandInput,
  SearchRelevantContentCommandOutput,
} from "./commands/SearchRelevantContentCommand";
import type {
  StartDataSourceSyncJobCommandInput,
  StartDataSourceSyncJobCommandOutput,
} from "./commands/StartDataSourceSyncJobCommand";
import type {
  StopDataSourceSyncJobCommandInput,
  StopDataSourceSyncJobCommandOutput,
} from "./commands/StopDataSourceSyncJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type {
  UpdateApplicationCommandInput,
  UpdateApplicationCommandOutput,
} from "./commands/UpdateApplicationCommand";
import type {
  UpdateChatControlsConfigurationCommandInput,
  UpdateChatControlsConfigurationCommandOutput,
} from "./commands/UpdateChatControlsConfigurationCommand";
import type {
  UpdateChatResponseConfigurationCommandInput,
  UpdateChatResponseConfigurationCommandOutput,
} from "./commands/UpdateChatResponseConfigurationCommand";
import type {
  UpdateDataAccessorCommandInput,
  UpdateDataAccessorCommandOutput,
} from "./commands/UpdateDataAccessorCommand";
import type { UpdateDataSourceCommandInput, UpdateDataSourceCommandOutput } from "./commands/UpdateDataSourceCommand";
import type { UpdateIndexCommandInput, UpdateIndexCommandOutput } from "./commands/UpdateIndexCommand";
import type { UpdatePluginCommandInput, UpdatePluginCommandOutput } from "./commands/UpdatePluginCommand";
import type { UpdateRetrieverCommandInput, UpdateRetrieverCommandOutput } from "./commands/UpdateRetrieverCommand";
import type {
  UpdateSubscriptionCommandInput,
  UpdateSubscriptionCommandOutput,
} from "./commands/UpdateSubscriptionCommand";
import type { UpdateUserCommandInput, UpdateUserCommandOutput } from "./commands/UpdateUserCommand";
import type {
  UpdateWebExperienceCommandInput,
  UpdateWebExperienceCommandOutput,
} from "./commands/UpdateWebExperienceCommand";
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
  | AssociatePermissionCommandInput
  | BatchDeleteDocumentCommandInput
  | BatchPutDocumentCommandInput
  | CancelSubscriptionCommandInput
  | ChatCommandInput
  | ChatSyncCommandInput
  | CheckDocumentAccessCommandInput
  | CreateAnonymousWebExperienceUrlCommandInput
  | CreateApplicationCommandInput
  | CreateChatResponseConfigurationCommandInput
  | CreateDataAccessorCommandInput
  | CreateDataSourceCommandInput
  | CreateIndexCommandInput
  | CreatePluginCommandInput
  | CreateRetrieverCommandInput
  | CreateSubscriptionCommandInput
  | CreateUserCommandInput
  | CreateWebExperienceCommandInput
  | DeleteApplicationCommandInput
  | DeleteAttachmentCommandInput
  | DeleteChatControlsConfigurationCommandInput
  | DeleteChatResponseConfigurationCommandInput
  | DeleteConversationCommandInput
  | DeleteDataAccessorCommandInput
  | DeleteDataSourceCommandInput
  | DeleteGroupCommandInput
  | DeleteIndexCommandInput
  | DeletePluginCommandInput
  | DeleteRetrieverCommandInput
  | DeleteUserCommandInput
  | DeleteWebExperienceCommandInput
  | DisassociatePermissionCommandInput
  | GetApplicationCommandInput
  | GetChatControlsConfigurationCommandInput
  | GetChatResponseConfigurationCommandInput
  | GetDataAccessorCommandInput
  | GetDataSourceCommandInput
  | GetDocumentContentCommandInput
  | GetGroupCommandInput
  | GetIndexCommandInput
  | GetMediaCommandInput
  | GetPluginCommandInput
  | GetPolicyCommandInput
  | GetRetrieverCommandInput
  | GetUserCommandInput
  | GetWebExperienceCommandInput
  | ListApplicationsCommandInput
  | ListAttachmentsCommandInput
  | ListChatResponseConfigurationsCommandInput
  | ListConversationsCommandInput
  | ListDataAccessorsCommandInput
  | ListDataSourceSyncJobsCommandInput
  | ListDataSourcesCommandInput
  | ListDocumentsCommandInput
  | ListGroupsCommandInput
  | ListIndicesCommandInput
  | ListMessagesCommandInput
  | ListPluginActionsCommandInput
  | ListPluginTypeActionsCommandInput
  | ListPluginTypeMetadataCommandInput
  | ListPluginsCommandInput
  | ListRetrieversCommandInput
  | ListSubscriptionsCommandInput
  | ListTagsForResourceCommandInput
  | ListWebExperiencesCommandInput
  | PutFeedbackCommandInput
  | PutGroupCommandInput
  | SearchRelevantContentCommandInput
  | StartDataSourceSyncJobCommandInput
  | StopDataSourceSyncJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateApplicationCommandInput
  | UpdateChatControlsConfigurationCommandInput
  | UpdateChatResponseConfigurationCommandInput
  | UpdateDataAccessorCommandInput
  | UpdateDataSourceCommandInput
  | UpdateIndexCommandInput
  | UpdatePluginCommandInput
  | UpdateRetrieverCommandInput
  | UpdateSubscriptionCommandInput
  | UpdateUserCommandInput
  | UpdateWebExperienceCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | AssociatePermissionCommandOutput
  | BatchDeleteDocumentCommandOutput
  | BatchPutDocumentCommandOutput
  | CancelSubscriptionCommandOutput
  | ChatCommandOutput
  | ChatSyncCommandOutput
  | CheckDocumentAccessCommandOutput
  | CreateAnonymousWebExperienceUrlCommandOutput
  | CreateApplicationCommandOutput
  | CreateChatResponseConfigurationCommandOutput
  | CreateDataAccessorCommandOutput
  | CreateDataSourceCommandOutput
  | CreateIndexCommandOutput
  | CreatePluginCommandOutput
  | CreateRetrieverCommandOutput
  | CreateSubscriptionCommandOutput
  | CreateUserCommandOutput
  | CreateWebExperienceCommandOutput
  | DeleteApplicationCommandOutput
  | DeleteAttachmentCommandOutput
  | DeleteChatControlsConfigurationCommandOutput
  | DeleteChatResponseConfigurationCommandOutput
  | DeleteConversationCommandOutput
  | DeleteDataAccessorCommandOutput
  | DeleteDataSourceCommandOutput
  | DeleteGroupCommandOutput
  | DeleteIndexCommandOutput
  | DeletePluginCommandOutput
  | DeleteRetrieverCommandOutput
  | DeleteUserCommandOutput
  | DeleteWebExperienceCommandOutput
  | DisassociatePermissionCommandOutput
  | GetApplicationCommandOutput
  | GetChatControlsConfigurationCommandOutput
  | GetChatResponseConfigurationCommandOutput
  | GetDataAccessorCommandOutput
  | GetDataSourceCommandOutput
  | GetDocumentContentCommandOutput
  | GetGroupCommandOutput
  | GetIndexCommandOutput
  | GetMediaCommandOutput
  | GetPluginCommandOutput
  | GetPolicyCommandOutput
  | GetRetrieverCommandOutput
  | GetUserCommandOutput
  | GetWebExperienceCommandOutput
  | ListApplicationsCommandOutput
  | ListAttachmentsCommandOutput
  | ListChatResponseConfigurationsCommandOutput
  | ListConversationsCommandOutput
  | ListDataAccessorsCommandOutput
  | ListDataSourceSyncJobsCommandOutput
  | ListDataSourcesCommandOutput
  | ListDocumentsCommandOutput
  | ListGroupsCommandOutput
  | ListIndicesCommandOutput
  | ListMessagesCommandOutput
  | ListPluginActionsCommandOutput
  | ListPluginTypeActionsCommandOutput
  | ListPluginTypeMetadataCommandOutput
  | ListPluginsCommandOutput
  | ListRetrieversCommandOutput
  | ListSubscriptionsCommandOutput
  | ListTagsForResourceCommandOutput
  | ListWebExperiencesCommandOutput
  | PutFeedbackCommandOutput
  | PutGroupCommandOutput
  | SearchRelevantContentCommandOutput
  | StartDataSourceSyncJobCommandOutput
  | StopDataSourceSyncJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateApplicationCommandOutput
  | UpdateChatControlsConfigurationCommandOutput
  | UpdateChatResponseConfigurationCommandOutput
  | UpdateDataAccessorCommandOutput
  | UpdateDataSourceCommandOutput
  | UpdateIndexCommandOutput
  | UpdatePluginCommandOutput
  | UpdateRetrieverCommandOutput
  | UpdateSubscriptionCommandOutput
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
 * <p>This is the <i>Amazon Q Business</i> API Reference. Amazon Q Business is a fully managed, generative-AI powered enterprise chat assistant that you can deploy within your organization. Amazon Q Business enhances employee productivity by supporting key tasks such as question-answering, knowledge discovery, writing email messages, summarizing text, drafting document outlines, and brainstorming ideas. Users ask questions of Amazon Q Business and get answers that are presented in a conversational manner. For an introduction to the service, see the <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/what-is.html"> <i>Amazon Q Business User Guide</i> </a>.</p> <p>For an overview of the Amazon Q Business APIs, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/api-ref.html#api-overview">Overview of Amazon Q Business API operations</a>.</p> <p>For information about the IAM access control permissions you need to use this API, see <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/iam-roles.html">IAM roles for Amazon Q Business</a> in the <i>Amazon Q Business User Guide</i>.</p> <p>The following resources provide additional information about using the Amazon Q Business API:</p> <ul> <li> <p> <i> <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/setting-up.html">Setting up for Amazon Q Business</a> </i> </p> </li> <li> <p> <i> <a href="https://awscli.amazonaws.com/v2/documentation/api/latest/reference/qbusiness/index.html">Amazon Q Business CLI Reference</a> </i> </p> </li> <li> <p> <i> <a href="https://docs.aws.amazon.com/general/latest/gr/amazonq.html">Amazon Web Services General Reference</a> </i> </p> </li> </ul>
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
    super(_config_0 as any);
    this.initConfig = _config_0;
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
    this.config = _config_10;
    this.middlewareStack.use(getSchemaSerdePlugin(this.config));
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
