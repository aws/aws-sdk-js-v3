// smithy-typescript generated code
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
import { type RegionInputConfig, type RegionResolvedConfig, resolveRegionConfig } from "@smithy/config-resolver";
import {
  DefaultIdentityProviderConfig,
  getHttpAuthSchemeEndpointRuleSetPlugin,
  getHttpSigningPlugin,
} from "@smithy/core";
import { getSchemaSerdePlugin } from "@smithy/core/schema";
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
  defaultQConnectHttpAuthSchemeParametersProvider,
  resolveHttpAuthSchemeConfig,
} from "./auth/httpAuthSchemeProvider";
import type {
  ActivateMessageTemplateCommandInput,
  ActivateMessageTemplateCommandOutput,
} from "./commands/ActivateMessageTemplateCommand";
import type { CreateAIAgentCommandInput, CreateAIAgentCommandOutput } from "./commands/CreateAIAgentCommand";
import type {
  CreateAIAgentVersionCommandInput,
  CreateAIAgentVersionCommandOutput,
} from "./commands/CreateAIAgentVersionCommand";
import type {
  CreateAIGuardrailCommandInput,
  CreateAIGuardrailCommandOutput,
} from "./commands/CreateAIGuardrailCommand";
import type {
  CreateAIGuardrailVersionCommandInput,
  CreateAIGuardrailVersionCommandOutput,
} from "./commands/CreateAIGuardrailVersionCommand";
import type { CreateAIPromptCommandInput, CreateAIPromptCommandOutput } from "./commands/CreateAIPromptCommand";
import type {
  CreateAIPromptVersionCommandInput,
  CreateAIPromptVersionCommandOutput,
} from "./commands/CreateAIPromptVersionCommand";
import type {
  CreateAssistantAssociationCommandInput,
  CreateAssistantAssociationCommandOutput,
} from "./commands/CreateAssistantAssociationCommand";
import type { CreateAssistantCommandInput, CreateAssistantCommandOutput } from "./commands/CreateAssistantCommand";
import type {
  CreateContentAssociationCommandInput,
  CreateContentAssociationCommandOutput,
} from "./commands/CreateContentAssociationCommand";
import type { CreateContentCommandInput, CreateContentCommandOutput } from "./commands/CreateContentCommand";
import type {
  CreateKnowledgeBaseCommandInput,
  CreateKnowledgeBaseCommandOutput,
} from "./commands/CreateKnowledgeBaseCommand";
import type {
  CreateMessageTemplateAttachmentCommandInput,
  CreateMessageTemplateAttachmentCommandOutput,
} from "./commands/CreateMessageTemplateAttachmentCommand";
import type {
  CreateMessageTemplateCommandInput,
  CreateMessageTemplateCommandOutput,
} from "./commands/CreateMessageTemplateCommand";
import type {
  CreateMessageTemplateVersionCommandInput,
  CreateMessageTemplateVersionCommandOutput,
} from "./commands/CreateMessageTemplateVersionCommand";
import type {
  CreateQuickResponseCommandInput,
  CreateQuickResponseCommandOutput,
} from "./commands/CreateQuickResponseCommand";
import type { CreateSessionCommandInput, CreateSessionCommandOutput } from "./commands/CreateSessionCommand";
import type {
  DeactivateMessageTemplateCommandInput,
  DeactivateMessageTemplateCommandOutput,
} from "./commands/DeactivateMessageTemplateCommand";
import type { DeleteAIAgentCommandInput, DeleteAIAgentCommandOutput } from "./commands/DeleteAIAgentCommand";
import type {
  DeleteAIAgentVersionCommandInput,
  DeleteAIAgentVersionCommandOutput,
} from "./commands/DeleteAIAgentVersionCommand";
import type {
  DeleteAIGuardrailCommandInput,
  DeleteAIGuardrailCommandOutput,
} from "./commands/DeleteAIGuardrailCommand";
import type {
  DeleteAIGuardrailVersionCommandInput,
  DeleteAIGuardrailVersionCommandOutput,
} from "./commands/DeleteAIGuardrailVersionCommand";
import type { DeleteAIPromptCommandInput, DeleteAIPromptCommandOutput } from "./commands/DeleteAIPromptCommand";
import type {
  DeleteAIPromptVersionCommandInput,
  DeleteAIPromptVersionCommandOutput,
} from "./commands/DeleteAIPromptVersionCommand";
import type {
  DeleteAssistantAssociationCommandInput,
  DeleteAssistantAssociationCommandOutput,
} from "./commands/DeleteAssistantAssociationCommand";
import type { DeleteAssistantCommandInput, DeleteAssistantCommandOutput } from "./commands/DeleteAssistantCommand";
import type {
  DeleteContentAssociationCommandInput,
  DeleteContentAssociationCommandOutput,
} from "./commands/DeleteContentAssociationCommand";
import type { DeleteContentCommandInput, DeleteContentCommandOutput } from "./commands/DeleteContentCommand";
import type { DeleteImportJobCommandInput, DeleteImportJobCommandOutput } from "./commands/DeleteImportJobCommand";
import type {
  DeleteKnowledgeBaseCommandInput,
  DeleteKnowledgeBaseCommandOutput,
} from "./commands/DeleteKnowledgeBaseCommand";
import type {
  DeleteMessageTemplateAttachmentCommandInput,
  DeleteMessageTemplateAttachmentCommandOutput,
} from "./commands/DeleteMessageTemplateAttachmentCommand";
import type {
  DeleteMessageTemplateCommandInput,
  DeleteMessageTemplateCommandOutput,
} from "./commands/DeleteMessageTemplateCommand";
import type {
  DeleteQuickResponseCommandInput,
  DeleteQuickResponseCommandOutput,
} from "./commands/DeleteQuickResponseCommand";
import type { GetAIAgentCommandInput, GetAIAgentCommandOutput } from "./commands/GetAIAgentCommand";
import type { GetAIGuardrailCommandInput, GetAIGuardrailCommandOutput } from "./commands/GetAIGuardrailCommand";
import type { GetAIPromptCommandInput, GetAIPromptCommandOutput } from "./commands/GetAIPromptCommand";
import type {
  GetAssistantAssociationCommandInput,
  GetAssistantAssociationCommandOutput,
} from "./commands/GetAssistantAssociationCommand";
import type { GetAssistantCommandInput, GetAssistantCommandOutput } from "./commands/GetAssistantCommand";
import type {
  GetContentAssociationCommandInput,
  GetContentAssociationCommandOutput,
} from "./commands/GetContentAssociationCommand";
import type { GetContentCommandInput, GetContentCommandOutput } from "./commands/GetContentCommand";
import type {
  GetContentSummaryCommandInput,
  GetContentSummaryCommandOutput,
} from "./commands/GetContentSummaryCommand";
import type { GetImportJobCommandInput, GetImportJobCommandOutput } from "./commands/GetImportJobCommand";
import type { GetKnowledgeBaseCommandInput, GetKnowledgeBaseCommandOutput } from "./commands/GetKnowledgeBaseCommand";
import type {
  GetMessageTemplateCommandInput,
  GetMessageTemplateCommandOutput,
} from "./commands/GetMessageTemplateCommand";
import type { GetNextMessageCommandInput, GetNextMessageCommandOutput } from "./commands/GetNextMessageCommand";
import type { GetQuickResponseCommandInput, GetQuickResponseCommandOutput } from "./commands/GetQuickResponseCommand";
import type {
  GetRecommendationsCommandInput,
  GetRecommendationsCommandOutput,
} from "./commands/GetRecommendationsCommand";
import type { GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import type { ListAIAgentsCommandInput, ListAIAgentsCommandOutput } from "./commands/ListAIAgentsCommand";
import type {
  ListAIAgentVersionsCommandInput,
  ListAIAgentVersionsCommandOutput,
} from "./commands/ListAIAgentVersionsCommand";
import type { ListAIGuardrailsCommandInput, ListAIGuardrailsCommandOutput } from "./commands/ListAIGuardrailsCommand";
import type {
  ListAIGuardrailVersionsCommandInput,
  ListAIGuardrailVersionsCommandOutput,
} from "./commands/ListAIGuardrailVersionsCommand";
import type { ListAIPromptsCommandInput, ListAIPromptsCommandOutput } from "./commands/ListAIPromptsCommand";
import type {
  ListAIPromptVersionsCommandInput,
  ListAIPromptVersionsCommandOutput,
} from "./commands/ListAIPromptVersionsCommand";
import type {
  ListAssistantAssociationsCommandInput,
  ListAssistantAssociationsCommandOutput,
} from "./commands/ListAssistantAssociationsCommand";
import type { ListAssistantsCommandInput, ListAssistantsCommandOutput } from "./commands/ListAssistantsCommand";
import type {
  ListContentAssociationsCommandInput,
  ListContentAssociationsCommandOutput,
} from "./commands/ListContentAssociationsCommand";
import type { ListContentsCommandInput, ListContentsCommandOutput } from "./commands/ListContentsCommand";
import type { ListImportJobsCommandInput, ListImportJobsCommandOutput } from "./commands/ListImportJobsCommand";
import type {
  ListKnowledgeBasesCommandInput,
  ListKnowledgeBasesCommandOutput,
} from "./commands/ListKnowledgeBasesCommand";
import type { ListMessagesCommandInput, ListMessagesCommandOutput } from "./commands/ListMessagesCommand";
import type {
  ListMessageTemplatesCommandInput,
  ListMessageTemplatesCommandOutput,
} from "./commands/ListMessageTemplatesCommand";
import type {
  ListMessageTemplateVersionsCommandInput,
  ListMessageTemplateVersionsCommandOutput,
} from "./commands/ListMessageTemplateVersionsCommand";
import type {
  ListQuickResponsesCommandInput,
  ListQuickResponsesCommandOutput,
} from "./commands/ListQuickResponsesCommand";
import type { ListSpansCommandInput, ListSpansCommandOutput } from "./commands/ListSpansCommand";
import type {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import type {
  NotifyRecommendationsReceivedCommandInput,
  NotifyRecommendationsReceivedCommandOutput,
} from "./commands/NotifyRecommendationsReceivedCommand";
import type { PutFeedbackCommandInput, PutFeedbackCommandOutput } from "./commands/PutFeedbackCommand";
import type { QueryAssistantCommandInput, QueryAssistantCommandOutput } from "./commands/QueryAssistantCommand";
import type {
  RemoveAssistantAIAgentCommandInput,
  RemoveAssistantAIAgentCommandOutput,
} from "./commands/RemoveAssistantAIAgentCommand";
import type {
  RemoveKnowledgeBaseTemplateUriCommandInput,
  RemoveKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/RemoveKnowledgeBaseTemplateUriCommand";
import type {
  RenderMessageTemplateCommandInput,
  RenderMessageTemplateCommandOutput,
} from "./commands/RenderMessageTemplateCommand";
import type { RetrieveCommandInput, RetrieveCommandOutput } from "./commands/RetrieveCommand";
import type { SearchContentCommandInput, SearchContentCommandOutput } from "./commands/SearchContentCommand";
import type {
  SearchMessageTemplatesCommandInput,
  SearchMessageTemplatesCommandOutput,
} from "./commands/SearchMessageTemplatesCommand";
import type {
  SearchQuickResponsesCommandInput,
  SearchQuickResponsesCommandOutput,
} from "./commands/SearchQuickResponsesCommand";
import type { SearchSessionsCommandInput, SearchSessionsCommandOutput } from "./commands/SearchSessionsCommand";
import type { SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import type {
  StartContentUploadCommandInput,
  StartContentUploadCommandOutput,
} from "./commands/StartContentUploadCommand";
import type { StartImportJobCommandInput, StartImportJobCommandOutput } from "./commands/StartImportJobCommand";
import type { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import type { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import type { UpdateAIAgentCommandInput, UpdateAIAgentCommandOutput } from "./commands/UpdateAIAgentCommand";
import type {
  UpdateAIGuardrailCommandInput,
  UpdateAIGuardrailCommandOutput,
} from "./commands/UpdateAIGuardrailCommand";
import type { UpdateAIPromptCommandInput, UpdateAIPromptCommandOutput } from "./commands/UpdateAIPromptCommand";
import type {
  UpdateAssistantAIAgentCommandInput,
  UpdateAssistantAIAgentCommandOutput,
} from "./commands/UpdateAssistantAIAgentCommand";
import type { UpdateContentCommandInput, UpdateContentCommandOutput } from "./commands/UpdateContentCommand";
import type {
  UpdateKnowledgeBaseTemplateUriCommandInput,
  UpdateKnowledgeBaseTemplateUriCommandOutput,
} from "./commands/UpdateKnowledgeBaseTemplateUriCommand";
import type {
  UpdateMessageTemplateCommandInput,
  UpdateMessageTemplateCommandOutput,
} from "./commands/UpdateMessageTemplateCommand";
import type {
  UpdateMessageTemplateMetadataCommandInput,
  UpdateMessageTemplateMetadataCommandOutput,
} from "./commands/UpdateMessageTemplateMetadataCommand";
import type {
  UpdateQuickResponseCommandInput,
  UpdateQuickResponseCommandOutput,
} from "./commands/UpdateQuickResponseCommand";
import type { UpdateSessionCommandInput, UpdateSessionCommandOutput } from "./commands/UpdateSessionCommand";
import type {
  UpdateSessionDataCommandInput,
  UpdateSessionDataCommandOutput,
} from "./commands/UpdateSessionDataCommand";
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
  | ActivateMessageTemplateCommandInput
  | CreateAIAgentCommandInput
  | CreateAIAgentVersionCommandInput
  | CreateAIGuardrailCommandInput
  | CreateAIGuardrailVersionCommandInput
  | CreateAIPromptCommandInput
  | CreateAIPromptVersionCommandInput
  | CreateAssistantAssociationCommandInput
  | CreateAssistantCommandInput
  | CreateContentAssociationCommandInput
  | CreateContentCommandInput
  | CreateKnowledgeBaseCommandInput
  | CreateMessageTemplateAttachmentCommandInput
  | CreateMessageTemplateCommandInput
  | CreateMessageTemplateVersionCommandInput
  | CreateQuickResponseCommandInput
  | CreateSessionCommandInput
  | DeactivateMessageTemplateCommandInput
  | DeleteAIAgentCommandInput
  | DeleteAIAgentVersionCommandInput
  | DeleteAIGuardrailCommandInput
  | DeleteAIGuardrailVersionCommandInput
  | DeleteAIPromptCommandInput
  | DeleteAIPromptVersionCommandInput
  | DeleteAssistantAssociationCommandInput
  | DeleteAssistantCommandInput
  | DeleteContentAssociationCommandInput
  | DeleteContentCommandInput
  | DeleteImportJobCommandInput
  | DeleteKnowledgeBaseCommandInput
  | DeleteMessageTemplateAttachmentCommandInput
  | DeleteMessageTemplateCommandInput
  | DeleteQuickResponseCommandInput
  | GetAIAgentCommandInput
  | GetAIGuardrailCommandInput
  | GetAIPromptCommandInput
  | GetAssistantAssociationCommandInput
  | GetAssistantCommandInput
  | GetContentAssociationCommandInput
  | GetContentCommandInput
  | GetContentSummaryCommandInput
  | GetImportJobCommandInput
  | GetKnowledgeBaseCommandInput
  | GetMessageTemplateCommandInput
  | GetNextMessageCommandInput
  | GetQuickResponseCommandInput
  | GetRecommendationsCommandInput
  | GetSessionCommandInput
  | ListAIAgentVersionsCommandInput
  | ListAIAgentsCommandInput
  | ListAIGuardrailVersionsCommandInput
  | ListAIGuardrailsCommandInput
  | ListAIPromptVersionsCommandInput
  | ListAIPromptsCommandInput
  | ListAssistantAssociationsCommandInput
  | ListAssistantsCommandInput
  | ListContentAssociationsCommandInput
  | ListContentsCommandInput
  | ListImportJobsCommandInput
  | ListKnowledgeBasesCommandInput
  | ListMessageTemplateVersionsCommandInput
  | ListMessageTemplatesCommandInput
  | ListMessagesCommandInput
  | ListQuickResponsesCommandInput
  | ListSpansCommandInput
  | ListTagsForResourceCommandInput
  | NotifyRecommendationsReceivedCommandInput
  | PutFeedbackCommandInput
  | QueryAssistantCommandInput
  | RemoveAssistantAIAgentCommandInput
  | RemoveKnowledgeBaseTemplateUriCommandInput
  | RenderMessageTemplateCommandInput
  | RetrieveCommandInput
  | SearchContentCommandInput
  | SearchMessageTemplatesCommandInput
  | SearchQuickResponsesCommandInput
  | SearchSessionsCommandInput
  | SendMessageCommandInput
  | StartContentUploadCommandInput
  | StartImportJobCommandInput
  | TagResourceCommandInput
  | UntagResourceCommandInput
  | UpdateAIAgentCommandInput
  | UpdateAIGuardrailCommandInput
  | UpdateAIPromptCommandInput
  | UpdateAssistantAIAgentCommandInput
  | UpdateContentCommandInput
  | UpdateKnowledgeBaseTemplateUriCommandInput
  | UpdateMessageTemplateCommandInput
  | UpdateMessageTemplateMetadataCommandInput
  | UpdateQuickResponseCommandInput
  | UpdateSessionCommandInput
  | UpdateSessionDataCommandInput;

/**
 * @public
 */
export type ServiceOutputTypes =
  | ActivateMessageTemplateCommandOutput
  | CreateAIAgentCommandOutput
  | CreateAIAgentVersionCommandOutput
  | CreateAIGuardrailCommandOutput
  | CreateAIGuardrailVersionCommandOutput
  | CreateAIPromptCommandOutput
  | CreateAIPromptVersionCommandOutput
  | CreateAssistantAssociationCommandOutput
  | CreateAssistantCommandOutput
  | CreateContentAssociationCommandOutput
  | CreateContentCommandOutput
  | CreateKnowledgeBaseCommandOutput
  | CreateMessageTemplateAttachmentCommandOutput
  | CreateMessageTemplateCommandOutput
  | CreateMessageTemplateVersionCommandOutput
  | CreateQuickResponseCommandOutput
  | CreateSessionCommandOutput
  | DeactivateMessageTemplateCommandOutput
  | DeleteAIAgentCommandOutput
  | DeleteAIAgentVersionCommandOutput
  | DeleteAIGuardrailCommandOutput
  | DeleteAIGuardrailVersionCommandOutput
  | DeleteAIPromptCommandOutput
  | DeleteAIPromptVersionCommandOutput
  | DeleteAssistantAssociationCommandOutput
  | DeleteAssistantCommandOutput
  | DeleteContentAssociationCommandOutput
  | DeleteContentCommandOutput
  | DeleteImportJobCommandOutput
  | DeleteKnowledgeBaseCommandOutput
  | DeleteMessageTemplateAttachmentCommandOutput
  | DeleteMessageTemplateCommandOutput
  | DeleteQuickResponseCommandOutput
  | GetAIAgentCommandOutput
  | GetAIGuardrailCommandOutput
  | GetAIPromptCommandOutput
  | GetAssistantAssociationCommandOutput
  | GetAssistantCommandOutput
  | GetContentAssociationCommandOutput
  | GetContentCommandOutput
  | GetContentSummaryCommandOutput
  | GetImportJobCommandOutput
  | GetKnowledgeBaseCommandOutput
  | GetMessageTemplateCommandOutput
  | GetNextMessageCommandOutput
  | GetQuickResponseCommandOutput
  | GetRecommendationsCommandOutput
  | GetSessionCommandOutput
  | ListAIAgentVersionsCommandOutput
  | ListAIAgentsCommandOutput
  | ListAIGuardrailVersionsCommandOutput
  | ListAIGuardrailsCommandOutput
  | ListAIPromptVersionsCommandOutput
  | ListAIPromptsCommandOutput
  | ListAssistantAssociationsCommandOutput
  | ListAssistantsCommandOutput
  | ListContentAssociationsCommandOutput
  | ListContentsCommandOutput
  | ListImportJobsCommandOutput
  | ListKnowledgeBasesCommandOutput
  | ListMessageTemplateVersionsCommandOutput
  | ListMessageTemplatesCommandOutput
  | ListMessagesCommandOutput
  | ListQuickResponsesCommandOutput
  | ListSpansCommandOutput
  | ListTagsForResourceCommandOutput
  | NotifyRecommendationsReceivedCommandOutput
  | PutFeedbackCommandOutput
  | QueryAssistantCommandOutput
  | RemoveAssistantAIAgentCommandOutput
  | RemoveKnowledgeBaseTemplateUriCommandOutput
  | RenderMessageTemplateCommandOutput
  | RetrieveCommandOutput
  | SearchContentCommandOutput
  | SearchMessageTemplatesCommandOutput
  | SearchQuickResponsesCommandOutput
  | SearchSessionsCommandOutput
  | SendMessageCommandOutput
  | StartContentUploadCommandOutput
  | StartImportJobCommandOutput
  | TagResourceCommandOutput
  | UntagResourceCommandOutput
  | UpdateAIAgentCommandOutput
  | UpdateAIGuardrailCommandOutput
  | UpdateAIPromptCommandOutput
  | UpdateAssistantAIAgentCommandOutput
  | UpdateContentCommandOutput
  | UpdateKnowledgeBaseTemplateUriCommandOutput
  | UpdateMessageTemplateCommandOutput
  | UpdateMessageTemplateMetadataCommandOutput
  | UpdateQuickResponseCommandOutput
  | UpdateSessionCommandOutput
  | UpdateSessionDataCommandOutput;

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
   * The {@link @smithy/smithy-client#DefaultsMode} that will be used to determine how certain default configuration options are resolved in the SDK.
   */
  defaultsMode?: __DefaultsMode | __Provider<__DefaultsMode>;
}

/**
 * @public
 */
export type QConnectClientConfigType = Partial<__SmithyConfiguration<__HttpHandlerOptions>> &
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
 *  The configuration interface of QConnectClient class constructor that set the region, credentials and other options.
 */
export interface QConnectClientConfig extends QConnectClientConfigType {}

/**
 * @public
 */
export type QConnectClientResolvedConfigType = __SmithyResolvedConfiguration<__HttpHandlerOptions> &
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
 *  The resolved configuration interface of QConnectClient class. This is resolved and normalized from the {@link QConnectClientConfig | constructor configuration interface}.
 */
export interface QConnectClientResolvedConfig extends QConnectClientResolvedConfigType {}

/**
 * <ul> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Operations_Amazon_Q_Connect.html">Amazon Q actions</a> </p> </li> <li> <p> <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_Types_Amazon_Q_Connect.html">Amazon Q data types</a> </p> </li> </ul> <note> <p> <b>Powered by Amazon Bedrock</b>: Amazon Web Services implements <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/abuse-detection.html">automated abuse detection</a>. Because Amazon Q in Connect is built on Amazon Bedrock, users can take full advantage of the controls implemented in Amazon Bedrock to enforce safety, security, and the responsible use of artificial intelligence (AI).</p> </note> <p>Amazon Q in Connect is a generative AI customer service assistant. It is an LLM-enhanced evolution of Amazon Connect Wisdom that delivers real-time recommendations to help contact center agents resolve customer issues quickly and accurately.</p> <p>Amazon Q in Connect automatically detects customer intent during calls and chats using conversational analytics and natural language understanding (NLU). It then provides agents with immediate, real-time generative responses and suggested actions, and links to relevant documents and articles. Agents can also query Amazon Q in Connect directly using natural language or keywords to answer customer requests.</p> <p>Use the Amazon Q in Connect APIs to create an assistant and a knowledge base, for example, or manage content by uploading custom files.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-q-connect.html">Use Amazon Q in Connect for generative AI powered agent assistance in real-time</a> in the <i>Amazon Connect Administrator Guide</i>.</p>
 * @public
 */
export class QConnectClient extends __Client<
  __HttpHandlerOptions,
  ServiceInputTypes,
  ServiceOutputTypes,
  QConnectClientResolvedConfig
> {
  /**
   * The resolved configuration of QConnectClient class. This is resolved and normalized from the {@link QConnectClientConfig | constructor configuration interface}.
   */
  readonly config: QConnectClientResolvedConfig;

  constructor(...[configuration]: __CheckOptionalClientConfig<QConnectClientConfig>) {
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
        httpAuthSchemeParametersProvider: defaultQConnectHttpAuthSchemeParametersProvider,
        identityProviderConfigProvider: async (config: QConnectClientResolvedConfig) =>
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
