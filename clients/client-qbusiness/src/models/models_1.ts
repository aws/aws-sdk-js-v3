// smithy-typescript generated code
import { SENSITIVE_STRING } from "@smithy/smithy-client";

import {
  ActionExecution,
  ActionExecutionEvent,
  AttachmentInput,
  AttachmentInputEvent,
  AuthChallengeResponse,
  AuthChallengeResponseEvent,
  BlockedPhrasesConfigurationUpdate,
  ChatMode,
  ChatModeConfiguration,
  ContentSource,
  CreatorModeConfiguration,
  DocumentAttribute,
  EndOfInputEvent,
  MembershipType,
  MessageUsefulnessReason,
  OrchestrationControl,
  ResponseScope,
  S3,
  SubscriptionDetails,
  SubscriptionType,
  Tag,
  TextInputEvent,
  TopicConfiguration,
  UserAlias,
} from "./models_0";

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
   * <p>A comment given by an end user on the usefulness of an AI-generated chat
   *             message.</p>
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
 * <p>A list of users or sub groups that belong to a group. This is for generating
 *             Amazon Q Business chat results only from document a user has access to.</p>
 * @public
 */
export interface GroupMembers {
  /**
   * <p>A list of sub groups that belong to a group. For example, the sub groups "Research",
   *             "Engineering", and "Sales and Marketing" all belong to the group "Company".</p>
   * @public
   */
  memberGroups?: MemberGroup[] | undefined;

  /**
   * <p>A list of users that belong to a group. For example, a list of interns all belong to
   *             the "Interns" group.</p>
   * @public
   */
  memberUsers?: MemberUser[] | undefined;

  /**
   * <p>Information required for Amazon Q Business to find a specific file in an Amazon S3
   *             bucket.</p>
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
   * <p>The list that contains your users or sub groups that belong the same group. For
   *             example, the group "Company" includes the user "CEO" and the sub groups "Research",
   *             "Engineering", and "Sales and Marketing".</p>
   * @public
   */
  groupName: string | undefined;

  /**
   * <p>The identifier of the data source for which you want to map users to their groups.
   *             This is useful if a group is tied to multiple data sources, but you only want the group
   *             to access documents of a certain data source. For example, the groups "Research",
   *             "Engineering", and "Sales and Marketing" are all tied to the company's documents stored
   *             in the data sources Confluence and Salesforce. However, "Sales and Marketing" team only
   *             needs access to customer-related documents stored in Salesforce.</p>
   * @public
   */
  dataSourceId?: string | undefined;

  /**
   * <p>The type of the group.</p>
   * @public
   */
  type: MembershipType | undefined;

  /**
   * <p>A list of users or sub groups that belong to a group. This is for generating
   *             Amazon Q Business chat results only from document a user has access to.</p>
   * @public
   */
  groupMembers: GroupMembers | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has access to the S3 file that contains
   *             your list of users that belong to a group.</p>
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
   * <p>The identifier of the Amazon Q Business application that the data source is connected
   *             to.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application or data source to
   *             tag.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the Amazon Q Business application or data source. If a tag
   *             already exists, the existing value is replaced with the new value.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business application, or data source to
   *             remove the tag from.</p>
   * @public
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the Amazon Q Business application or data source. If a
   *             tag key does not exist on the resource, it is ignored.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * <p>Configuration information required to enable chat orchestration for your Amazon Q Business
 *             application.</p>
 *          <note>
 *             <p>Chat orchestration is optimized to work for English language content. For more
 *                 details on language support in Amazon Q Business, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/supported-languages.html">Supported languages</a>.</p>
 *          </note>
 * @public
 */
export interface OrchestrationConfiguration {
  /**
   * <p> Status information about whether chat orchestration is activated or deactivated for
   *             your Amazon Q Business application.</p>
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
   * <p>A token that you provide to identify the request to update a Amazon Q Business application
   *             chat configuration.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The response scope configured for your application. This determines whether your
   *             application uses its retrieval augmented generation (RAG) system to generate answers
   *             only from your enterprise data, or also uses the large language models (LLM) knowledge
   *             to respons to end user questions in chat.</p>
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
}

/**
 * @public
 */
export interface UpdateChatControlsConfigurationResponse {}

/**
 * @public
 */
export interface UpdateSubscriptionRequest {
  /**
   * <p>The identifier of the Amazon Q Business application where the subscription update should
   *             take effect.</p>
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
   * <p>The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was
   *             updated.</p>
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
   * <p>Performs an equals operation on two document attributes or metadata fields. Supported
   *             for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>,
   *                 <code>longValue</code>, <code>stringListValue</code> and
   *             <code>stringValue</code>.</p>
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains all the specified document
   *             attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>:
   *                 <code>stringListValue</code>.</p>
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * <p>Returns <code>true</code> when a document contains any of the specified document
   *             attributes or metadata fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>:
   *                 <code>stringListValue</code>.</p>
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater than operation on two document attributes or metadata fields.
   *             Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>.</p>
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a greater or equals than operation on two document attributes or metadata
   *             fields. Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>. </p>
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than operation on two document attributes or metadata fields.
   *             Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value types</a>: <code>dateValue</code>
   *             and <code>longValue</code>.</p>
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * <p>Performs a less than or equals operation on two document attributes or metadata
   *             fields.Supported for the following <a href="https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html">document attribute value type</a>: <code>dateValue</code>
   *             and <code>longValue</code>. </p>
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
   * <p>The identifier of the Amazon Q Business application linked to the Amazon Q Business
   *             conversation.</p>
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
   * <p>A list of files uploaded directly during chat. You can upload a maximum of 5 files of
   *             upto 10 MB each.</p>
   * @public
   */
  attachments?: AttachmentInput[] | undefined;

  /**
   * <p>A request from an end user to perform an Amazon Q Business plugin action.</p>
   * @public
   */
  actionExecution?: ActionExecution | undefined;

  /**
   * <p>An authentication verification event response by a third party authentication server
   *             to Amazon Q Business.</p>
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
   * <p>Enables filtering of Amazon Q Business web experience responses based on document
   *             attributes or metadata fields.</p>
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * <p>The <code>chatMode</code> parameter determines the chat modes available to
   *             Amazon Q Business users:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RETRIEVAL_MODE</code> - If you choose this mode, Amazon Q generates responses solely from the data sources connected and
   *                     indexed by the application. If an answer is not found in the data sources or
   *                     there are no data sources available, Amazon Q will respond with a
   *                         "<i>No Answer Found</i>" message, unless LLM knowledge has
   *                     been enabled. In that case, Amazon Q will generate a response from
   *                     the LLM knowledge</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATOR_MODE</code> - By selecting this mode, you can choose to generate
   *                     responses only from the LLM knowledge. You can also attach files and have Amazon Q
   *                     generate a response based on the data in those files.
   *                     If the attached files do not contain an answer for the query, Amazon Q
   *                     will automatically fall back to generating a response from the LLM knowledge.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to
   *                     use plugins in chat to get their responses.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>If none of the modes are selected, Amazon Q will only respond using the information
   *                 from the attached files.</p>
   *          </note>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>,
   *             and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Response sources</a>.</p>
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
 * <p>A configuration event activated by an end user request to select a specific chat
 *             mode.</p>
 * @public
 */
export interface ConfigurationEvent {
  /**
   * <p>The chat modes available to an Amazon Q Business end user.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>RETRIEVAL_MODE</code> - The default chat mode for an
   *                     Amazon Q Business application. When this mode is enabled, Amazon Q Business generates
   *                     responses only from data sources connected to an Amazon Q Business
   *                     application.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CREATOR_MODE</code> - By selecting this mode, users can choose to
   *                     generate responses only from the LLM knowledge, without consulting connected
   *                     data sources, for a chat request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PLUGIN_MODE</code> - By selecting this mode, users can choose to
   *                     use plugins in chat.</p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a>, <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html">Plugins</a>,
   *             and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * <p>Configuration information for Amazon Q Business conversation modes.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html">Admin controls and guardrails</a> and <a href="https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope">Conversation settings</a>.</p>
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
   * <p>A configuration event activated by an end user request to select a specific chat
   *             mode.</p>
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
   * <p>Information about the payload of the <code>ChatInputStream</code> event containing the
   *             end user message input.</p>
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
   * <p>An authentication verification event response by a third party authentication server
   *             to Amazon Q Business.</p>
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
   * <p>The identifier of the Amazon Q Business application linked to a streaming Amazon Q Business
   *             conversation.</p>
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
});

/**
 * @internal
 */
export const GetDataAccessorResponseFilterSensitiveLog = (obj: GetDataAccessorResponse): any => ({
  ...obj,
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
  ...(obj.actionConfigurations && { actionConfigurations: obj.actionConfigurations.map((item) => item) }),
});

/**
 * @internal
 */
export const UpdateDataAccessorRequestFilterSensitiveLog = (obj: UpdateDataAccessorRequest): any => ({
  ...obj,
  ...(obj.actionConfigurations && { actionConfigurations: obj.actionConfigurations.map((item) => item) }),
  ...(obj.displayName && { displayName: SENSITIVE_STRING }),
});
