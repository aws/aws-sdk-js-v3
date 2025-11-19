// smithy-typescript generated code
import { ChatMode, ResponseConfigurationType, SubscriptionType } from "./enums";

import {
  ActionExecution,
  ActionExecutionEvent,
  AttachmentInput,
  AttachmentInputEvent,
  AuthChallengeResponse,
  AuthChallengeResponseEvent,
  ChatModeConfiguration,
  ContentSource,
  DataAccessorAuthenticationDetail,
  DocumentAttribute,
  EndOfInputEvent,
  ResponseConfiguration,
  SubscriptionDetails,
  Tag,
  TextInputEvent,
  UserAlias,
} from "./models_0";

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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    configurationEvent: (value: ConfigurationEvent) => T;
    textEvent: (value: TextInputEvent) => T;
    attachmentEvent: (value: AttachmentInputEvent) => T;
    actionExecutionEvent: (value: ActionExecutionEvent) => T;
    endOfInputEvent: (value: EndOfInputEvent) => T;
    authChallengeResponseEvent: (value: AuthChallengeResponseEvent) => T;
    _: (name: string, value: any) => T;
  }
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
