// smithy-typescript generated code
import type { ChatMode, ResponseConfigurationType, SubscriptionType } from "./enums";
import type {
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
export interface UpdateChatResponseConfigurationRequest {
  /**
   * The unique identifier of the Amazon Q Business application containing the chat response configuration to update.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the chat response configuration to update within the specified application.
   *
   * @public
   */
  chatResponseConfigurationId: string | undefined;

  /**
   * The new human-readable name to assign to the chat response configuration, making it easier to identify among multiple configurations.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The updated collection of response configuration settings that define how Amazon Q Business generates and formats responses to user queries.
   *
   * @public
   */
  responseConfigurations: Partial<Record<ResponseConfigurationType, ResponseConfiguration>> | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request. This helps prevent the same update from being processed multiple times if retries occur.
   *
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
   * The identifier of the Amazon Q Business application where the subscription update should take effect.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the Amazon Q Business subscription to be updated.
   *
   * @public
   */
  subscriptionId: string | undefined;

  /**
   * The type of the Amazon Q Business subscription to be updated.
   *
   * @public
   */
  type: SubscriptionType | undefined;
}

/**
 * @public
 */
export interface UpdateSubscriptionResponse {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Q Business subscription that was updated.
   *
   * @public
   */
  subscriptionArn?: string | undefined;

  /**
   * The type of your current Amazon Q Business subscription.
   *
   * @public
   */
  currentSubscription?: SubscriptionDetails | undefined;

  /**
   * The type of the Amazon Q Business subscription for the next month.
   *
   * @public
   */
  nextSubscription?: SubscriptionDetails | undefined;
}

/**
 * @public
 */
export interface UpdateUserRequest {
  /**
   * The identifier of the application the user is attached to.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The email id attached to the user.
   *
   * @public
   */
  userId: string | undefined;

  /**
   * The user aliases attached to the user id that are to be updated.
   *
   * @public
   */
  userAliasesToUpdate?: UserAlias[] | undefined;

  /**
   * The user aliases attached to the user id that are to be deleted.
   *
   * @public
   */
  userAliasesToDelete?: UserAlias[] | undefined;
}

/**
 * @public
 */
export interface UpdateUserResponse {
  /**
   * The user aliases that have been to be added to a user id.
   *
   * @public
   */
  userAliasesAdded?: UserAlias[] | undefined;

  /**
   * The user aliases attached to a user id that have been updated.
   *
   * @public
   */
  userAliasesUpdated?: UserAlias[] | undefined;

  /**
   * The user aliases that have been deleted from a user id.
   *
   * @public
   */
  userAliasesDeleted?: UserAlias[] | undefined;
}

/**
 * Enables filtering of responses based on document attributes or metadata fields.
 *
 * @public
 */
export interface AttributeFilter {
  /**
   * Performs a logical `AND` operation on all supplied filters.
   *
   * @public
   */
  andAllFilters?: AttributeFilter[] | undefined;

  /**
   * Performs a logical `OR` operation on all supplied filters.
   *
   * @public
   */
  orAllFilters?: AttributeFilter[] | undefined;

  /**
   * Performs a logical `NOT` operation on all supplied filters.
   *
   * @public
   */
  notFilter?: AttributeFilter | undefined;

  /**
   * Performs an equals operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue`, `longValue`, `stringListValue` and `stringValue`.
   *
   * @public
   */
  equalsTo?: DocumentAttribute | undefined;

  /**
   * Returns `true` when a document contains all the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
   *
   * @public
   */
  containsAll?: DocumentAttribute | undefined;

  /**
   * Returns `true` when a document contains any of the specified document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `stringListValue`.
   *
   * @public
   */
  containsAny?: DocumentAttribute | undefined;

  /**
   * Performs a greater than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  greaterThan?: DocumentAttribute | undefined;

  /**
   * Performs a greater or equals than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  greaterThanOrEquals?: DocumentAttribute | undefined;

  /**
   * Performs a less than operation on two document attributes or metadata fields. Supported for the following [document attribute value types](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  lessThan?: DocumentAttribute | undefined;

  /**
   * Performs a less than or equals operation on two document attributes or metadata fields.Supported for the following [document attribute value type](https://docs.aws.amazon.com/amazonq/latest/api-reference/API_DocumentAttributeValue.html): `dateValue` and `longValue`.
   *
   * @public
   */
  lessThanOrEquals?: DocumentAttribute | undefined;
}

/**
 * Specifies filters to apply to an allowed action.
 *
 * @public
 */
export interface ActionFilterConfiguration {
  /**
   * Enables filtering of responses based on document attributes or metadata fields.
   *
   * @public
   */
  documentAttributeFilter: AttributeFilter | undefined;
}

/**
 * @public
 */
export interface ChatSyncInput {
  /**
   * The identifier of the Amazon Q Business application linked to the Amazon Q Business conversation.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user attached to the chat input.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The group names that a user associated with the chat input belongs to.
   *
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * A end user message in a conversation.
   *
   * @public
   */
  userMessage?: string | undefined;

  /**
   * A list of files uploaded directly during chat. You can upload a maximum of 5 files of upto 10 MB each.
   *
   * @public
   */
  attachments?: AttachmentInput[] | undefined;

  /**
   * A request from an end user to perform an Amazon Q Business plugin action.
   *
   * @public
   */
  actionExecution?: ActionExecution | undefined;

  /**
   * An authentication verification event response by a third party authentication server to Amazon Q Business.
   *
   * @public
   */
  authChallengeResponse?: AuthChallengeResponse | undefined;

  /**
   * The identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier of the previous system message in a conversation.
   *
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * Enables filtering of Amazon Q Business web experience responses based on document attributes or metadata fields.
   *
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * The `chatMode` parameter determines the chat modes available to Amazon Q Business users:
   *
   * - `RETRIEVAL_MODE` - If you choose this mode, Amazon Q generates responses solely from the data sources connected and indexed by the application. If an answer is not found in the data sources or there are no data sources available, Amazon Q will respond with a "*No Answer Found*" message, unless LLM knowledge has been enabled. In that case, Amazon Q will generate a response from the LLM knowledge
   * - `CREATOR_MODE` - By selecting this mode, you can choose to generate responses only from the LLM knowledge. You can also attach files and have Amazon Q generate a response based on the data in those files. If the attached files do not contain an answer for the query, Amazon Q will automatically fall back to generating a response from the LLM knowledge.
   * - `PLUGIN_MODE` - By selecting this mode, users can choose to use plugins in chat to get their responses.
   *
   * > **Note:** If none of the modes are selected, Amazon Q will only respond using the information from the attached files.
   *
   * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html), [Plugins](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html), and [Response sources](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
   *
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * The chat mode configuration for an Amazon Q Business application.
   *
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * A token that you provide to identify a chat request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * A configuration event activated by an end user request to select a specific chat mode.
 *
 * @public
 */
export interface ConfigurationEvent {
  /**
   * The chat modes available to an Amazon Q Business end user.
   *
   * - `RETRIEVAL_MODE` - The default chat mode for an Amazon Q Business application. When this mode is enabled, Amazon Q Business generates responses only from data sources connected to an Amazon Q Business application.
   * - `CREATOR_MODE` - By selecting this mode, users can choose to generate responses only from the LLM knowledge, without consulting connected data sources, for a chat request.
   * - `PLUGIN_MODE` - By selecting this mode, users can choose to use plugins in chat.
   *
   * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html), [Plugins](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/plugins.html), and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
   *
   * @public
   */
  chatMode?: ChatMode | undefined;

  /**
   * Configuration information for Amazon Q Business conversation modes.
   *
   * For more information, see [Admin controls and guardrails](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/guardrails.html) and [Conversation settings](https://docs.aws.amazon.com/amazonq/latest/business-use-dg/using-web-experience.html#chat-source-scope).
   *
   * @public
   */
  chatModeConfiguration?: ChatModeConfiguration | undefined;

  /**
   * Enables filtering of responses based on document attributes or metadata fields.
   *
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;
}

/**
 * @public
 */
export interface SearchRelevantContentRequest {
  /**
   * The unique identifier of the Amazon Q Business application to search.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The text to search for.
   *
   * @public
   */
  queryText: string | undefined;

  /**
   * The source of content to search in.
   *
   * @public
   */
  contentSource: ContentSource | undefined;

  /**
   * Enables filtering of responses based on document attributes or metadata fields.
   *
   * @public
   */
  attributeFilter?: AttributeFilter | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token for the next set of results. (You received this token from a previous call.)
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Specifies an allowed action and its associated filter configuration.
 *
 * @public
 */
export interface ActionConfiguration {
  /**
   * The Amazon Q Business action that is allowed.
   *
   * @public
   */
  action: string | undefined;

  /**
   * The filter configuration for the action, if any.
   *
   * @public
   */
  filterConfiguration?: ActionFilterConfiguration | undefined;
}

/**
 * The streaming input for the `Chat` API.
 *
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
   * A configuration event activated by an end user request to select a specific chat mode.
   *
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
   * Information about the payload of the `ChatInputStream` event containing the end user message input.
   *
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
   * A request by an end user to upload a file during chat.
   *
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
   * A request from an end user to perform an Amazon Q Business plugin action.
   *
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
   * The end of the streaming input for the `Chat` API.
   *
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
   * An authentication verification event response by a third party authentication server to Amazon Q Business.
   *
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
   * The identifier of the Amazon Q Business application linked to a streaming Amazon Q Business conversation.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The identifier of the user attached to the chat input.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The group names that a user associated with the chat input belongs to.
   *
   * @public
   */
  userGroups?: string[] | undefined;

  /**
   * The identifier of the Amazon Q Business conversation.
   *
   * @public
   */
  conversationId?: string | undefined;

  /**
   * The identifier used to associate a user message with a AI generated response.
   *
   * @public
   */
  parentMessageId?: string | undefined;

  /**
   * A token that you provide to identify the chat input.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The streaming input for the `Chat` API.
   *
   * @public
   */
  inputStream?: AsyncIterable<ChatInputStream> | undefined;
}

/**
 * @public
 */
export interface CreateDataAccessorRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the ISV that will be accessing the data.
   *
   * @public
   */
  principal: string | undefined;

  /**
   * A list of action configurations specifying the allowed actions and any associated filters.
   *
   * @public
   */
  actionConfigurations: ActionConfiguration[] | undefined;

  /**
   * A unique, case-sensitive identifier you provide to ensure idempotency of the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * A friendly name for the data accessor.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The authentication configuration details for the data accessor. This specifies how the ISV will authenticate when accessing data through this data accessor.
   *
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * The tags to associate with the data accessor.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface GetDataAccessorResponse {
  /**
   * The friendly name of the data accessor.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The unique identifier of the data accessor.
   *
   * @public
   */
  dataAccessorId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the data accessor.
   *
   * @public
   */
  dataAccessorArn?: string | undefined;

  /**
   * The unique identifier of the Amazon Q Business application associated with this data accessor.
   *
   * @public
   */
  applicationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM Identity Center application associated with this data accessor.
   *
   * @public
   */
  idcApplicationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role for the ISV associated with this data accessor.
   *
   * @public
   */
  principal?: string | undefined;

  /**
   * The list of action configurations specifying the allowed actions and any associated filters.
   *
   * @public
   */
  actionConfigurations?: ActionConfiguration[] | undefined;

  /**
   * The authentication configuration details for the data accessor. This specifies how the ISV authenticates when accessing data through this data accessor.
   *
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * The timestamp when the data accessor was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The timestamp when the data accessor was last updated.
   *
   * @public
   */
  updatedAt?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateDataAccessorRequest {
  /**
   * The unique identifier of the Amazon Q Business application.
   *
   * @public
   */
  applicationId: string | undefined;

  /**
   * The unique identifier of the data accessor to update.
   *
   * @public
   */
  dataAccessorId: string | undefined;

  /**
   * The updated list of action configurations specifying the allowed actions and any associated filters.
   *
   * @public
   */
  actionConfigurations: ActionConfiguration[] | undefined;

  /**
   * The updated authentication configuration details for the data accessor. This specifies how the ISV will authenticate when accessing data through this data accessor.
   *
   * @public
   */
  authenticationDetail?: DataAccessorAuthenticationDetail | undefined;

  /**
   * The updated friendly name for the data accessor.
   *
   * @public
   */
  displayName?: string | undefined;
}
