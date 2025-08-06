// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionExecution,
  ActionExecutionEvent,
  ActionReview,
  ActionSummary,
  Attachment,
  AttachmentInput,
  AttachmentInputEvent,
  AttachmentOutput,
  AuthChallengeResponse,
  AuthChallengeResponseEvent,
  BlockedPhrasesConfigurationUpdate,
  ChatMode,
  ChatModeConfiguration,
  ChatResponseConfiguration,
  ChatResponseConfigurationDetail,
  ContentSource,
  Conversation,
  CreatorModeConfiguration,
  DataAccessorAuthenticationDetail,
  DataSourceSyncJob,
  DataSourceSyncJobStatus,
  DocumentAttribute,
  DocumentDetails,
  EndOfInputEvent,
  ErrorDetail,
  HallucinationReductionConfiguration,
  MembershipType,
  OrchestrationControl,
  PluginType,
  ResponseConfiguration,
  ResponseConfigurationType,
  ResponseScope,
  S3,
  SourceAttribution,
  SubscriptionDetails,
  SubscriptionPrincipal,
  SubscriptionType,
  Tag,
  TextInputEvent,
  TopicConfiguration,
  UserAlias,
} from "./models_0";

import { QBusinessServiceException as __BaseException } from "./QBusinessServiceException";

/**
 * @public
 */
export interface GetChatResponseConfigurationRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application containing the chat response configuration to retrieve.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the chat response configuration to retrieve from the specified application.</p>
   * @public
   */
  chatResponseConfigurationId: string | undefined;
}

/**
 * @public
 */
export interface GetChatResponseConfigurationResponse {
  /**
   * <p>The unique identifier of the retrieved chat response configuration.</p>
   * @public
   */
  chatResponseConfigurationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the retrieved chat response configuration, which uniquely identifies the resource across all Amazon Web Services services. </p>
   * @public
   */
  chatResponseConfigurationArn?: string | undefined;

  /**
   * <p>The human-readable name of the retrieved chat response configuration, making it easier to identify among multiple configurations.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The timestamp indicating when the chat response configuration was initially created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The currently active configuration settings that are being used to generate responses in the Amazon Q Business application.</p>
   * @public
   */
  inUseConfiguration?: ChatResponseConfigurationDetail | undefined;

  /**
   * <p>Information about the most recent update to the configuration, including timestamp and modification details.</p>
   * @public
   */
  lastUpdateConfiguration?: ChatResponseConfigurationDetail | undefined;
}

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  RAW: "RAW",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 */
export interface GetDocumentContentRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application containing the document. This ensures the request is scoped to the correct application environment and its associated security policies.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index where documents are indexed.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data source from which the document was ingested. This field is not present if the document is ingested by directly calling the BatchPutDocument API. If the document is from a file-upload data source, the datasource will be "uploaded-docs-file-stat-datasourceid".</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The unique identifier of the document that is indexed via BatchPutDocument API or file-upload or connector sync. It is also found in chat or chatSync response.</p>
   * @public
   */
  documentId: string | undefined;

  /**
   * <p>Raw document outputFormat.</p>
   * @public
   */
  outputFormat?: OutputFormat | undefined;
}

/**
 * @public
 */
export interface GetDocumentContentResponse {
  /**
   * <p>A pre-signed URL that provides temporary access to download the document content directly from Amazon Q Business. The URL expires after 5 minutes for security purposes. This URL is generated only after successful ACL validation.</p>
   * @public
   */
  presignedUrl: string | undefined;

  /**
   * <p>The MIME type of the document content (e.g., application/pdf, text/plain, application/vnd.openxmlformats-officedocument.wordprocessingml.document).</p>
   * @public
   */
  mimeType: string | undefined;
}

/**
 * @public
 */
export interface GetGroupRequest {
  /**
   * <p>The identifier of the application id the group is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index the group is attached to.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The name of the group.</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source the group is attached to.</p>
   * @public
   */
  dataSourceId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const GroupStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PROCESSING: "PROCESSING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type GroupStatus = (typeof GroupStatus)[keyof typeof GroupStatus];

/**
 * <p>Provides the details of a group's status.</p>
 * @public
 */
export interface GroupStatusDetail {
  /**
   * <p>The status of a group.</p>
   * @public
   */
  status?: GroupStatus | undefined;

  /**
   * <p>The Unix timestamp when the Amazon Q Business application was last updated.</p>
   * @public
   */
  lastUpdatedAt?: Date | undefined;

  /**
   * <p>The details of an error associated a group status.</p>
   * @public
   */
  errorDetail?: ErrorDetail | undefined;
}

/**
 * @public
 */
export interface GetGroupResponse {
  /**
   * <p>The current status of the group.</p>
   * @public
   */
  status?: GroupStatusDetail | undefined;

  /**
   * <p>The status history of the group.</p>
   * @public
   */
  statusHistory?: GroupStatusDetail[] | undefined;
}

/**
 * @public
 */
export interface GetMediaRequest {
  /**
   * <p>The identifier of the Amazon Q Business which contains the media object.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business message.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The identifier of the media object. You can find this in the <code>sourceAttributions</code> returned by the <code>Chat</code>, <code>ChatSync</code>, and <code>ListMessages</code> API responses.</p>
   * @public
   */
  mediaId: string | undefined;
}

/**
 * @public
 */
export interface GetMediaResponse {
  /**
   * <p>The base64-encoded bytes of the media object.</p>
   * @public
   */
  mediaBytes?: Uint8Array | undefined;

  /**
   * <p>The MIME type of the media object (image/png).</p>
   * @public
   */
  mediaMimeType?: string | undefined;
}

/**
 * <p>The requested media object is too large to be returned.</p>
 * @public
 */
export class MediaTooLargeException extends __BaseException {
  readonly name: "MediaTooLargeException" = "MediaTooLargeException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MediaTooLargeException, __BaseException>) {
    super({
      name: "MediaTooLargeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MediaTooLargeException.prototype);
  }
}

/**
 * @public
 */
export interface GetPolicyRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;
}

/**
 * @public
 */
export interface GetPolicyResponse {
  /**
   * <p>The JSON representation of the permission policy.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface GetUserRequest {
  /**
   * <p>The identifier of the application connected to the user.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The user email address attached to the user.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetUserResponse {
  /**
   * <p>A list of user aliases attached to a user.</p>
   * @public
   */
  userAliases?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsRequest {
  /**
   * <p>The unique identifier for the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business web experience conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The unique identifier of the user involved in the Amazon Q Business web experience conversation.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the number of attachments returned exceeds <code>maxResults</code>, Amazon Q Business returns a next token as a pagination token to retrieve the next set of attachments.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of attachements to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListAttachmentsResponse {
  /**
   * <p>An array of information on one or more attachments.</p>
   * @public
   */
  attachments?: Attachment[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of attachments.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChatResponseConfigurationsRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application for which to list available chat response configurations.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The maximum number of chat response configurations to return in a single response. This parameter helps control pagination of results when many configurations exist.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token used to retrieve the next set of results when the number of configurations exceeds the specified <code>maxResults</code> value.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListChatResponseConfigurationsResponse {
  /**
   * <p>A list of chat response configuration summaries, each containing key information about an available configuration in the specified application.</p>
   * @public
   */
  chatResponseConfigurations?: ChatResponseConfiguration[] | undefined;

  /**
   * <p>A pagination token that can be used in a subsequent request to retrieve additional chat response configurations if the results were truncated due to the <code>maxResults</code> parameter.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConversationsRequest {
  /**
   * <p>The identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user involved in the Amazon Q Business web experience conversation. </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business conversations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Q Business conversations to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListConversationsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of summary information on the configuration of one or more Amazon Q Business web experiences.</p>
   * @public
   */
  conversations?: Conversation[] | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsRequest {
  /**
   * <p> The identifier of the data source connector.</p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application connected to the data source.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the Amazon Q Business data source connector.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incpmplete because there is more data to retriever, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of responses.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of synchronization jobs to return in the response.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p> The start time of the data source connector sync. </p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p> The end time of the data source connector sync.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Only returns synchronization jobs with the <code>Status</code> field equal to the specified status.</p>
   * @public
   */
  statusFilter?: DataSourceSyncJobStatus | undefined;
}

/**
 * @public
 */
export interface ListDataSourceSyncJobsResponse {
  /**
   * <p>A history of synchronization jobs for the data source connector.</p>
   * @public
   */
  history?: DataSourceSyncJob[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token. You can use this token in any subsequent request to retrieve the next set of jobs.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDocumentsRequest {
  /**
   * <p>The identifier of the application id the documents are attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index the documents are attached to.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The identifier of the data sources the documents are attached to.</p>
   * @public
   */
  dataSourceIds?: string[] | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of documents to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDocumentsResponse {
  /**
   * <p>A list of document details.</p>
   * @public
   */
  documentDetailList?: DocumentDetails[] | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of documents.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsRequest {
  /**
   * <p>The identifier of the application for getting a list of groups mapped to users.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index for getting a list of groups mapped to users.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The timestamp identifier used for the latest <code>PUT</code> or <code>DELETE</code> action for mapping users to their groups.</p>
   * @public
   */
  updatedEarlierThan: Date | undefined;

  /**
   * <p>The identifier of the data source for getting a list of groups mapped to users.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>If the previous response was incomplete (because there is more data to retrieve), Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of groups that are mapped to users.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of returned groups that are mapped to users.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Summary information for groups.</p>
 * @public
 */
export interface GroupSummary {
  /**
   * <p>The name of the group the summary information is for.</p>
   * @public
   */
  groupName?: string | undefined;
}

/**
 * @public
 */
export interface ListGroupsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token that you can use in the subsequent request to retrieve the next set of groups that are mapped to users.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Summary information for list of groups that are mapped to users.</p>
   * @public
   */
  items?: GroupSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMessagesRequest {
  /**
   * <p>The identifier of the Amazon Q Business web experience conversation.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier for the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user involved in the Amazon Q Business web experience conversation.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>If the number of messages returned exceeds <code>maxResults</code>, Amazon Q Business returns a next token as a pagination token to retrieve the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of messages to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageType = {
  SYSTEM: "SYSTEM",
  USER: "USER",
} as const;

/**
 * @public
 */
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * <p>A message in an Amazon Q Business web experience.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The identifier of the Amazon Q Business web experience message.</p>
   * @public
   */
  messageId?: string | undefined;

  /**
   * <p>The content of the Amazon Q Business web experience message.</p>
   * @public
   */
  body?: string | undefined;

  /**
   * <p>The timestamp of the first Amazon Q Business web experience message.</p>
   * @public
   */
  time?: Date | undefined;

  /**
   * <p>The type of Amazon Q Business message, whether <code>HUMAN</code> or <code>AI</code> generated.</p>
   * @public
   */
  type?: MessageType | undefined;

  /**
   * <p>A file directly uploaded into an Amazon Q Business web experience chat.</p>
   * @public
   */
  attachments?: AttachmentOutput[] | undefined;

  /**
   * <p>The source documents used to generate Amazon Q Business web experience message.</p>
   * @public
   */
  sourceAttribution?: SourceAttribution[] | undefined;

  /**
   * <p>An output event that Amazon Q Business returns to an user who wants to perform a plugin action during a non-streaming chat conversation. It contains information about the selected action with a list of possible user input fields, some pre-populated by Amazon Q Business.</p>
   * @public
   */
  actionReview?: ActionReview | undefined;

  /**
   * <p>Performs an Amazon Q Business plugin action during a non-streaming chat conversation.</p>
   * @public
   */
  actionExecution?: ActionExecution | undefined;
}

/**
 * @public
 */
export interface ListMessagesResponse {
  /**
   * <p>An array of information on one or more messages.</p>
   * @public
   */
  messages?: Message[] | undefined;

  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of messages.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginActionsRequest {
  /**
   * <p>The identifier of the Amazon Q Business application the plugin is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business plugin.</p>
   * @public
   */
  pluginId: string | undefined;

  /**
   * <p>If the number of plugin actions returned exceeds <code>maxResults</code>, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugin actions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of plugin actions to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPluginActionsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugin actions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of information on one or more plugin actions.</p>
   * @public
   */
  items?: ActionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeActionsRequest {
  /**
   * <p>The type of the plugin.</p>
   * @public
   */
  pluginType: PluginType | undefined;

  /**
   * <p>If the number of plugins returned exceeds <code>maxResults</code>, Amazon Q Business returns a next token as a pagination token to retrieve the next set of plugins.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of plugins to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeActionsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugins.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of information on one or more plugins.</p>
   * @public
   */
  items?: ActionSummary[] | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeMetadataRequest {
  /**
   * <p>If the metadata returned exceeds <code>maxResults</code>, Amazon Q Business returns a next token as a pagination token to retrieve the next set of metadata.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of plugin metadata items to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const PluginTypeCategory = {
  COMMUNICATION: "Communication",
  CRM: "Customer relationship management (CRM)",
  PRODUCTIVITY: "Productivity",
  PROJECT_MANAGEMENT: "Project management",
  TICKETING_MANAGEMENT: "Ticketing and incident management",
} as const;

/**
 * @public
 */
export type PluginTypeCategory = (typeof PluginTypeCategory)[keyof typeof PluginTypeCategory];

/**
 * <p>Summary metadata information for a Amazon Q Business plugin.</p>
 * @public
 */
export interface PluginTypeMetadataSummary {
  /**
   * <p>The type of the plugin.</p>
   * @public
   */
  type?: PluginType | undefined;

  /**
   * <p>The category of the plugin type.</p>
   * @public
   */
  category?: PluginTypeCategory | undefined;

  /**
   * <p>The description assigned by Amazon Q Business to a plugin. You can't modify this value.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListPluginTypeMetadataResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token, which you can use in a later request to list the next set of plugin metadata.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of information on plugin metadata.</p>
   * @public
   */
  items?: PluginTypeMetadataSummary[] | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsRequest {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the subscription.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>If the <code>maxResults</code> response was incomplete because there is more data to retrieve, Amazon Q Business returns a pagination token in the response. You can use this pagination token to retrieve the next set of Amazon Q Business subscriptions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of Amazon Q Business subscriptions to return.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about an Amazon Q Business subscription.</p> <p>Subscriptions are used to provide access for an IAM Identity Center user or a group to an Amazon Q Business application.</p> <p>Amazon Q Business offers two subscription tiers: <code>Q_LITE</code> and <code>Q_BUSINESS</code>. Subscription tier determines feature access for the user. For more information on subscriptions and pricing tiers, see <a href="https://aws.amazon.com/q/business/pricing/">Amazon Q Business pricing</a>.</p>
 * @public
 */
export interface Subscription {
  /**
   * <p>The identifier of the Amazon Q Business subscription to be updated.</p>
   * @public
   */
  subscriptionId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was updated.</p>
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * <p>The IAM Identity Center <code>UserId</code> or <code>GroupId</code> of a user or group in the IAM Identity Center instance connected to the Amazon Q Business application.</p>
   * @public
   */
  principal?: SubscriptionPrincipal | undefined;

  /**
   * <p>The type of your current Amazon Q Business subscription.</p>
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * <p>The type of the Amazon Q Business subscription for the next month.</p>
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * @public
 */
export interface ListSubscriptionsResponse {
  /**
   * <p>If the response is truncated, Amazon Q Business returns this token. You can use this token in a subsequent request to retrieve the next set of subscriptions.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of summary information on the subscriptions configured for an Amazon Q Business application.</p>
   * @public
   */
  subscriptions?: Subscription[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to get a list of tags for.</p>
   * @public
   */
  resourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the Amazon Q Business application or data source.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MessageUsefulnessReason = {
  COMPLETE: "COMPLETE",
  FACTUALLY_CORRECT: "FACTUALLY_CORRECT",
  HARMFUL_OR_UNSAFE: "HARMFUL_OR_UNSAFE",
  HELPFUL: "HELPFUL",
  INCORRECT_OR_MISSING_SOURCES: "INCORRECT_OR_MISSING_SOURCES",
  NOT_BASED_ON_DOCUMENTS: "NOT_BASED_ON_DOCUMENTS",
  NOT_COMPLETE: "NOT_COMPLETE",
  NOT_CONCISE: "NOT_CONCISE",
  NOT_FACTUALLY_CORRECT: "NOT_FACTUALLY_CORRECT",
  NOT_HELPFUL: "NOT_HELPFUL",
  OTHER: "OTHER",
  RELEVANT_SOURCES: "RELEVANT_SOURCES",
} as const;

/**
 * @public
 */
export type MessageUsefulnessReason = (typeof MessageUsefulnessReason)[keyof typeof MessageUsefulnessReason];

/**
 * @public
 * @enum
 */
export const MessageUsefulness = {
  NOT_USEFUL: "NOT_USEFUL",
  USEFUL: "USEFUL",
} as const;

/**
 * @public
 */
export type MessageUsefulness = (typeof MessageUsefulness)[keyof typeof MessageUsefulness];

/**
 * <p>End user feedback on an AI-generated web experience chat message usefulness.</p>
 * @public
 */
export interface MessageUsefulnessFeedback {
  /**
   * <p>The usefulness value assigned by an end user to a message.</p>
   * @public
   */
  usefulness: MessageUsefulness | undefined;

  /**
   * <p>The reason for a usefulness rating.</p>
   * @public
   */
  reason?: MessageUsefulnessReason | undefined;

  /**
   * <p>A comment given by an end user on the usefulness of an AI-generated chat message.</p>
   * @public
   */
  comment?: string | undefined;

  /**
   * <p>The timestamp for when the feedback was submitted.</p>
   * @public
   */
  submittedAt: Date | undefined;
}

/**
 * @public
 */
export interface PutFeedbackRequest {
  /**
   * <p>The identifier of the application associated with the feedback.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user giving the feedback.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The identifier of the conversation the feedback is attached to.</p>
   * @public
   */
  conversationId: string | undefined;

  /**
   * <p>The identifier of the chat message that the feedback was given for.</p>
   * @public
   */
  messageId: string | undefined;

  /**
   * <p>The timestamp for when the feedback was recorded.</p>
   * @public
   */
  messageCopiedAt?: Date | undefined;

  /**
   * <p>The feedback usefulness value given by the user to the chat message.</p>
   * @public
   */
  messageUsefulness?: MessageUsefulnessFeedback | undefined;
}

/**
 * <p>The sub groups that belong to a group.</p>
 * @public
 */
export interface MemberGroup {
  /**
   * <p>The name of the sub group.</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The type of the sub group.</p>
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * <p>The users that belong to a group.</p>
 * @public
 */
export interface MemberUser {
  /**
   * <p>The identifier of the user you want to map to a group.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The type of the user.</p>
   * @public
   */
  type?: MembershipType | undefined;
}

/**
 * <p>A list of users or sub groups that belong to a group. This is for generating Amazon Q Business chat results only from document a user has access to.</p>
 * @public
 */
export interface GroupMembers {
  /**
   * <p>A list of sub groups that belong to a group. For example, the sub groups "Research", "Engineering", and "Sales and Marketing" all belong to the group "Company".</p>
   * @public
   */
  memberGroups?: MemberGroup[] | undefined;

  /**
   * <p>A list of users that belong to a group. For example, a list of interns all belong to the "Interns" group.</p>
   * @public
   */
  memberUsers?: MemberUser[] | undefined;

  /**
   * <p>Information required for Amazon Q Business to find a specific file in an Amazon S3 bucket.</p>
   * @public
   */
  s3PathForGroupMembers?: S3 | undefined;
}

/**
 * @public
 */
export interface PutGroupRequest {
  /**
   * <p>The identifier of the application in which the user and group mapping belongs.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index in which you want to map users to their groups.</p>
   * @public
   */
  indexId: string | undefined;

  /**
   * <p>The list that contains your users or sub groups that belong the same group. For example, the group "Company" includes the user "CEO" and the sub groups "Research", "Engineering", and "Sales and Marketing".</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source for which you want to map users to their groups. This is useful if a group is tied to multiple data sources, but you only want the group to access documents of a certain data source. For example, the groups "Research", "Engineering", and "Sales and Marketing" are all tied to the company's documents stored in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only needs access to customer-related documents stored in Salesforce.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The type of the group.</p>
   * @public
   */
  type: MembershipType | undefined;

  /**
   * <p>A list of users or sub groups that belong to a group. This is for generating Amazon Q Business chat results only from document a user has access to.</p>
   * @public
   */
  groupMembers: GroupMembers | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains your list of users that belong to a group.</p>
   * @public
   */
  roleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutGroupResponse {}

/**
 * @public
 * @enum
 */
export const ScoreConfidence = {
  HIGH: "HIGH",
  LOW: "LOW",
  MEDIUM: "MEDIUM",
  NOT_AVAILABLE: "NOT_AVAILABLE",
  VERY_HIGH: "VERY_HIGH",
} as const;

/**
 * @public
 */
export type ScoreConfidence = (typeof ScoreConfidence)[keyof typeof ScoreConfidence];

/**
 * <p>Provides information about the relevance score of content.</p>
 * @public
 */
export interface ScoreAttributes {
  /**
   * <p>The confidence level of the relevance score.</p>
   * @public
   */
  scoreConfidence?: ScoreConfidence | undefined;
}

/**
 * <p>Represents a piece of content that is relevant to a search query.</p>
 * @public
 */
export interface RelevantContent {
  /**
   * <p>The actual content of the relevant item.</p>
   * @public
   */
  content?: string | undefined;

  /**
   * <p>The unique identifier of the document containing the relevant content.</p>
   * @public
   */
  documentId?: string | undefined;

  /**
   * <p>The title of the document containing the relevant content.</p>
   * @public
   */
  documentTitle?: string | undefined;

  /**
   * <p>The URI of the document containing the relevant content.</p>
   * @public
   */
  documentUri?: string | undefined;

  /**
   * <p>Additional attributes of the document containing the relevant content.</p>
   * @public
   */
  documentAttributes?: DocumentAttribute[] | undefined;

  /**
   * <p>Attributes related to the relevance score of the content.</p>
   * @public
   */
  scoreAttributes?: ScoreAttributes | undefined;
}

/**
 * @public
 */
export interface SearchRelevantContentResponse {
  /**
   * <p>The list of relevant content items found.</p>
   * @public
   */
  relevantContent?: RelevantContent[] | undefined;

  /**
   * <p>The token to use to retrieve the next set of results, if there are any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobRequest {
  /**
   * <p> The identifier of the data source connector. </p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of Amazon Q Business application the data source is connected to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the data source connector.</p>
   * @public
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * <p>The identifier for a particular synchronization job.</p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * <p> The identifier of the data source connector. </p>
   * @public
   */
  dataSourceId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business application that the data source is connected to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the index used with the Amazon Q Business data source connector.</p>
   * @public
   */
  indexId: string | undefined;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the Amazon Q Business application or data source. If a tag already exists, the existing value is replaced with the new value.</p>
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to remove the tag from.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the Amazon Q Business application or data source. If a tag key does not exist on the resource, it is ignored.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Configuration information required to enable chat orchestration for your Amazon Q Business application.</p> <note> <p>Chat orchestration is optimized to work for English language content. For more details on language support in Amazon Q Business, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/supported-languages.html">Supported languages</a>.</p> </note>
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * <p> Status information about whether chat orchestration is activated or deactivated for your Amazon Q Business application.</p>
   * @public
   */
  control: OrchestrationControl | undefined;
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationRequest {
  /**
   * <p>The identifier of the application for which the chat controls are configured.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>A token that you provide to identify the request to update a Amazon Q Business application chat configuration.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The response scope configured for your application. This determines whether your application uses its retrieval augmented generation (RAG) system to generate answers only from your enterprise data, or also uses the large language models (LLM) knowledge to respons to end user questions in chat.</p>
   * @public
   */
  responseScope?: ResponseScope | undefined;

  /**
   * <p> The chat response orchestration settings for your application.</p>
   * @public
   */
  orchestrationConfiguration?: OrchestrationConfiguration | undefined;

  /**
   * <p>The phrases blocked from chat by your chat control configuration.</p>
   * @public
   */
  blockedPhrasesConfigurationUpdate?: BlockedPhrasesConfigurationUpdate | undefined;

  /**
   * <p>The configured topic specific chat controls you want to update.</p>
   * @public
   */
  topicConfigurationsToCreateOrUpdate?: TopicConfiguration[] | undefined;

  /**
   * <p>The configured topic specific chat controls you want to delete.</p>
   * @public
   */
  topicConfigurationsToDelete?: TopicConfiguration[] | undefined;

  /**
   * <p>The configuration details for <code>CREATOR_MODE</code>.</p>
   * @public
   */
  creatorModeConfiguration?: CreatorModeConfiguration | undefined;

  /**
   * <p> The hallucination reduction settings for your application.</p>
   * @public
   */
  hallucinationReductionConfiguration?: HallucinationReductionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationResponse {}

/**
 * @public
 */
export interface UpdateChatResponseConfigurationRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application containing the chat response configuration to update.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the chat response configuration to update within the specified application.</p>
   * @public
   */
  chatResponseConfigurationId: string | undefined;

  /**
   * <p>The new human-readable name to assign to the chat response configuration, making it easier to identify among multiple configurations.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The updated collection of response configuration settings that define how Amazon Q Business generates and formats responses to user queries.</p>
   * @public
   */
  responseConfigurations: Partial<Record<ResponseConfigurationType, ResponseConfiguration>> | undefined;

  /**
   * <p>A unique, case-sensitive identifier to ensure idempotency of the request. This helps prevent the same update from being processed multiple times if retries occur.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChatResponseConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSubscriptionRequest {
  /**
   * <p>The identifier of the Amazon Q Business application where the subscription update should take effect.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the Amazon Q Business subscription to be updated.</p>
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * <p>The type of the Amazon Q Business subscription to be updated.</p>
   * @public
   */
  type: SubscriptionType | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was updated.</p>
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * <p>The type of your current Amazon Q Business subscription.</p>
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * <p>The type of the Amazon Q Business subscription for the next month.</p>
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * <p>The identifier of the application the user is attached to.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The email id attached to the user.</p>
   * @public
   */
  userId: string | undefined;

  /**
   * <p>The user aliases attached to the user id that are to be updated.</p>
   * @public
   */
  userAliasesToUpdate?: UserAlias[] | undefined;

  /**
   * <p>The user aliases attached to the user id that are to be deleted.</p>
   * @public
   */
  userAliasesToDelete?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * <p>The user aliases that have been to be added to a user id.</p>
   * @public
   */
  userAliasesAdded?: UserAlias[] | undefined;

  /**
   * <p>The user aliases attached to a user id that have been updated.</p>
   * @public
   */
  userAliasesUpdated?: UserAlias[] | undefined;

  /**
   * <p>The user aliases that have been deleted from a user id.</p>
   * @public
   */
  userAliasesDeleted?: UserAlias[] | undefined;
}

/**
 * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
 * @public
 */
export interface AttributeFilter {
  /**
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   * @public
   */
  andAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p> Performs a logical <code>OR</code> operation on all supplied filters. </p>
   * @public
   */
  orAllFilters?: AttributeFilter[] | undefined;

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters. </p>
   * @public
   */
  notFilter?: AttributeFilter | undefined;

  /**
   * <p>Performs an equals operation on two document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>, <code>longValue</code>, <code>stringListValue</code> and <code>stringValue</code>.</p>
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains all the specified document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>stringListValue</code>.</p>
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains any of the specified document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>stringListValue</code>.</p>
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater than operation on two document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and <code>longValue</code>.</p>
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater or equals than operation on two document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and <code>longValue</code>. </p>
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than operation on two document attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code> and <code>longValue</code>.</p>
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than or equals operation on two document attributes or metadata fields.Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value type</a>: <code>dateValue</code> and <code>longValue</code>. </p>
   * @public
   */
  lessThanOrEquals?: DocumentAttribute | undefined;
}

/**
 * <p>Specifies filters to apply to an allowed action.</p>
 * @public
 */
export interface ActionFilterConfiguration {
  /**
   * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
   * @public
   */
  documentAttributeFilter: AttributeFilter | undefined;
}

/**
 * @public
 */
export interface ChatSyncInput {
  /**
   * <p>The identifier of the Amazon Q Business application linked to the Amazon Q Business conversation.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user attached to the chat input.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The group names that a user associated with the chat input belongs to.</p>
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * <p>A end user message in a conversation.</p>
   * @public
   */
  userMessage?: string | undefined;

  /**
   * <p>A list of files uploaded directly during chat. You can upload a maximum of 5 files of upto 10 MB each.</p>
   * @public
   */
  attachments?: AttachmentInput[] | undefined;

  /**
   * <p>A request from an end user to perform an Amazon Q Business plugin action.</p>
   * @public
   */
  actionExecution?: ActionExecution | undefined;

  /**
   * <p>An authentication verification event response by a third party authentication server to Amazon Q Business.</p>
   * @public
   */
  authChallengeResponse?: AuthChallengeResponse | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier of the previous system message in a conversation.</p>
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * <p>Enables filtering of Amazon Q Business web experience responses based on document attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * <p>The <code>chatMode</code> parameter determines the chat modes available to Amazon Q Business users:</p> <ul> <li> <p> <code>RETRIEVAL_MODE</code> - If you choose this mode, Amazon Q generates responses solely from the data sources connected and indexed by the application. If an answer is not found in the data sources or there are no data sources available, Amazon Q will respond with a "<i>No Answer Found</i>" message, unless LLM knowledge has been enabled. In that case, Amazon Q will generate a response from the LLM knowledge</p> </li> <li> <p> <code>CREATOR_MODE</code> - By selecting this mode, you can choose to generate responses only from the LLM knowledge. You can also attach files and have Amazon Q generate a response based on the data in those files. If the attached files do not contain an answer for the query, Amazon Q will automatically fall back to generating a response from the LLM knowledge.</p> </li> <li> <p> <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to use plugins in chat to get their responses.</p> </li> </ul> <note> <p>If none of the modes are selected, Amazon Q will only respond using the information from the attached files.</p> </note> <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>, and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Response sources</a>.</p>
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * <p>The chat mode configuration for an Amazon Q Business application.</p>
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * <p>A token that you provide to identify a chat request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * <p>A configuration event activated by an end user request to select a specific chat mode.</p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>The chat modes available to an Amazon Q Business end user.</p> <ul> <li> <p> <code>RETRIEVAL_MODE</code> - The default chat mode for an Amazon Q Business application. When this mode is enabled, Amazon Q Business generates responses only from data sources connected to an Amazon Q Business application.</p> </li> <li> <p> <code>CREATOR_MODE</code> - By selecting this mode, users can choose to generate responses only from the LLM knowledge, without consulting connected data sources, for a chat request.</p> </li> <li> <p> <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to use plugins in chat.</p> </li> </ul> <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>, and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * <p>Configuration information for Amazon Q Business conversation modes.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchRelevantContentRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application to search.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The text to search for.</p>
   * @public
   */
  queryText: string | undefined;

  /**
   * <p>The source of content to search in.</p>
   * @public
   */
  contentSource: ContentSource | undefined;

  /**
   * <p>Enables filtering of responses based on document attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token for the next set of results. (You received this token from a previous call.)</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Specifies an allowed action and its associated filter configuration.</p>
 * @public
 */
export interface ActionConfiguration {
  /**
   * <p>The Amazon Q Business action that is allowed.</p>
   * @public
   */
  action: string | undefined;

  /**
   * <p>The filter configuration for the action, if any.</p>
   * @public
   */
  filterConfiguration?: ActionFilterConfiguration | undefined;
}

/**
 * <p>The streaming input for the <code>Chat</code> API.</p>
 * @public
 */
export type ChatInputStream =
  | ChatInputStream.ActionExecutionEventMember
  | ChatInputStream.AttachmentEventMember
  | ChatInputStream.AuthChallengeResponseEventMember
  | ChatInputStream.ConfigurationEventMember
  | ChatInputStream.EndOfInputEventMember
  | ChatInputStream.TextEventMember
  | ChatInputStream.$UnknownMember;

/**
 * @public
 */
export namespace ChatInputStream {
  /**
   * <p>A configuration event activated by an end user request to select a specific chat mode.</p>
   * @public
   */
  export interface ConfigurationEventMember {
    configurationEvent: ConfigurationEvent;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the payload of the <code>ChatInputStream</code> event containing the end user message input.</p>
   * @public
   */
  export interface TextEventMember {
    configurationEvent?: never;
    textEvent: TextInputEvent;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A request by an end user to upload a file during chat.</p>
   * @public
   */
  export interface AttachmentEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent: AttachmentInputEvent;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>A request from an end user to perform an Amazon Q Business plugin action.</p>
   * @public
   */
  export interface ActionExecutionEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent: ActionExecutionEvent;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>The end of the streaming input for the <code>Chat</code> API.</p>
   * @public
   */
  export interface EndOfInputEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent: EndOfInputEvent;
    authChallengeResponseEvent?: never;
    $unknown?: never;
  }

  /**
   * <p>An authentication verification event response by a third party authentication server to Amazon Q Business.</p>
   * @public
   */
  export interface AuthChallengeResponseEventMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent: AuthChallengeResponseEvent;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    configurationEvent?: never;
    textEvent?: never;
    attachmentEvent?: never;
    actionExecutionEvent?: never;
    endOfInputEvent?: never;
    authChallengeResponseEvent?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    configurationEvent: (value: ConfigurationEvent) => T;
    textEvent: (value: TextInputEvent) => T;
    attachmentEvent: (value: AttachmentInputEvent) => T;
    actionExecutionEvent: (value: ActionExecutionEvent) => T;
    endOfInputEvent: (value: EndOfInputEvent) => T;
    authChallengeResponseEvent: (value: AuthChallengeResponseEvent) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ChatInputStream, visitor: Visitor<T>): T => {
    if (value.configurationEvent !== undefined) return visitor.configurationEvent(value.configurationEvent);
    if (value.textEvent !== undefined) return visitor.textEvent(value.textEvent);
    if (value.attachmentEvent !== undefined) return visitor.attachmentEvent(value.attachmentEvent);
    if (value.actionExecutionEvent !== undefined) return visitor.actionExecutionEvent(value.actionExecutionEvent);
    if (value.endOfInputEvent !== undefined) return visitor.endOfInputEvent(value.endOfInputEvent);
    if (value.authChallengeResponseEvent !== undefined)
      return visitor.authChallengeResponseEvent(value.authChallengeResponseEvent);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface ChatInput {
  /**
   * <p>The identifier of the Amazon Q Business application linked to a streaming Amazon Q Business conversation.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The identifier of the user attached to the chat input. </p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The group names that a user associated with the chat input belongs to.</p>
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * <p>The identifier of the Amazon Q Business conversation.</p>
   * @public
   */
  conversationId?: string | undefined;

  /**
   * <p>The identifier used to associate a user message with a AI generated response.</p>
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * <p>A token that you provide to identify the chat input.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The streaming input for the <code>Chat</code> API.</p>
   * @public
   */
  inputStream?: AsyncIterable<ChatInputStream> | undefined;
}

/**
 * @public
 */
export interface CreateDataAccessorRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the ISV that will be accessing the data.</p>
   * @public
   */
  principal: string | undefined;

  /**
   * <p>A list of action configurations specifying the allowed actions and any associated filters.</p>
   * @public
   */
  actionConfigurations: ActionConfiguration[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier you provide to ensure idempotency of the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>A friendly name for the data accessor.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The authentication configuration details for the data accessor. This specifies how the ISV will authenticate when accessing data through this data accessor.</p>
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * <p>The tags to associate with the data accessor.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetDataAccessorResponse {
  /**
   * <p>The friendly name of the data accessor.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The unique identifier of the data accessor.</p>
   * @public
   */
  dataAccessorId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the data accessor.</p>
   * @public
   */
  dataAccessorArn?: string | undefined;

  /**
   * <p>The unique identifier of the Amazon Q Business application associated with this data accessor.</p>
   * @public
   */
  applicationId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM Identity Center application associated with this data accessor.</p>
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.</p>
   * @public
   */
  principal?: string | undefined;

  /**
   * <p>The list of action configurations specifying the allowed actions and any associated filters.</p>
   * @public
   */
  actionConfigurations?: ActionConfiguration[] | undefined;

  /**
   * <p>The authentication configuration details for the data accessor. This specifies how the ISV authenticates when accessing data through this data accessor.</p>
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * <p>The timestamp when the data accessor was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The timestamp when the data accessor was last updated.</p>
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDataAccessorRequest {
  /**
   * <p>The unique identifier of the Amazon Q Business application.</p>
   * @public
   */
  applicationId: string | undefined;

  /**
   * <p>The unique identifier of the data accessor to update.</p>
   * @public
   */
  dataAccessorId: string | undefined;

  /**
   * <p>The updated list of action configurations specifying the allowed actions and any associated filters.</p>
   * @public
   */
  actionConfigurations: ActionConfiguration[] | undefined;

  /**
   * <p>The updated authentication configuration details for the data accessor. This specifies how the ISV will authenticate when accessing data through this data accessor.</p>
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * <p>The updated friendly name for the data accessor.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @internal
 */
export const ChatInputStreamFilterSensitiveLog = (obj: ChatInputStream): any => {
  if (obj.configurationEvent !== undefined) return { configurationEvent: obj.configurationEvent };
  if (obj.textEvent !== undefined) return { textEvent: obj.textEvent };
  if (obj.attachmentEvent !== undefined) return { attachmentEvent: obj.attachmentEvent };
  if (obj.actionExecutionEvent !== undefined) return { actionExecutionEvent: obj.actionExecutionEvent };
  if (obj.endOfInputEvent !== undefined) return { endOfInputEvent: obj.endOfInputEvent };
  if (obj.authChallengeResponseEvent !== undefined)
    return { authChallengeResponseEvent: obj.authChallengeResponseEvent };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const ChatInputFilterSensitiveLog = (obj: ChatInput): any => ({
  ...obj,
  ...(obj.inputStream && { inputStream: "STREAMING_CONTENT" }),
});

/**
 * @internal
 */
export const CreateDataAccessorRequestFilterSensitiveLog = (obj: CreateDataAccessorRequest): any => ({
  ...obj,
  ...(obj.actionConfigurations && { actionConfigurations: obj.actionConfigurations.map((item) => item) }),
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.authenticationDetail && { authenticationDetail: obj.authenticationDetail }),
});

/**
 * @internal
 */
export const GetDataAccessorResponseFilterSensitiveLog = (obj: GetDataAccessorResponse): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.actionConfigurations && { actionConfigurations: obj.actionConfigurations.map((item) => item) }),
  ...(obj.authenticationDetail && { authenticationDetail: obj.authenticationDetail }),
});

/**
 * @internal
 */
export const UpdateDataAccessorRequestFilterSensitiveLog = (obj: UpdateDataAccessorRequest): any => ({
  ...obj,
  ...(obj.actionConfigurations && { actionConfigurations: obj.actionConfigurations.map((item) => item) }),
  ...(obj.authenticationDetail && { authenticationDetail: obj.authenticationDetail }),
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});
