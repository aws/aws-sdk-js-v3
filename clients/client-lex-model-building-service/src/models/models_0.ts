// smithy-typescript generated code
import type {
  ChannelStatus,
  ChannelType,
  ContentType,
  Destination,
  ExportStatus,
  ExportType,
  FulfillmentActivityType,
  ImportStatus,
  Locale,
  LogType,
  MergeStrategy,
  MigrationAlertType,
  MigrationSortAttribute,
  MigrationStatus,
  MigrationStrategy,
  ObfuscationSetting,
  ProcessBehavior,
  ResourceType,
  SlotConstraint,
  SlotValueSelectionStrategy,
  SortOrder,
  Status,
  StatusType,
} from "./enums";

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateBotVersionRequest {
  /**
   * The name of the bot that you want to create a new version of. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Identifies a specific revision of the `$LATEST` version of the bot. If you specify a checksum and the `$LATEST` version of the bot has a different checksum, a `PreconditionFailedException` exception is returned and Amazon Lex doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the `$LATEST` version.
   *
   * @public
   */
  checksum?: string | undefined;
}

/**
 * The message object that provides the message text and its type.
 *
 * @public
 */
export interface Message {
  /**
   * The content type of the message string.
   *
   * @public
   */
  contentType: ContentType | undefined;

  /**
   * The text of the message.
   *
   * @public
   */
  content: string | undefined;

  /**
   * Identifies the message group that the message belongs to. When a group is assigned to a message, Amazon Lex returns one message from each group in the response.
   *
   * @public
   */
  groupNumber?: number | undefined;
}

/**
 * A collection of messages that convey information to the user. At runtime, Amazon Lex selects the message to convey.
 *
 * @public
 */
export interface Statement {
  /**
   * A collection of message objects.
   *
   * @public
   */
  messages: Message[] | undefined;

  /**
   * At runtime, if the client is using the [PostText](http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html) API, Amazon Lex includes the response card in the response. It substitutes all of the session attributes and slot values for placeholders in the response card.
   *
   * @public
   */
  responseCard?: string | undefined;
}

/**
 * Obtains information from the user. To define a prompt, provide one or more messages and specify the number of attempts to get information from the user. If you provide more than one message, Amazon Lex chooses one of the messages to use to prompt the user. For more information, see how-it-works.
 *
 * @public
 */
export interface Prompt {
  /**
   * An array of objects, each of which provides a message string and its type. You can specify the message string in plain text or in Speech Synthesis Markup Language (SSML).
   *
   * @public
   */
  messages: Message[] | undefined;

  /**
   * The number of times to prompt the user for information.
   *
   * @public
   */
  maxAttempts: number | undefined;

  /**
   * A response card. Amazon Lex uses this prompt at runtime, in the `PostText` API response. It substitutes session attributes and slot values for placeholders in the response card. For more information, see ex-resp-card.
   *
   * @public
   */
  responseCard?: string | undefined;
}

/**
 * Identifies the specific version of an intent.
 *
 * @public
 */
export interface Intent {
  /**
   * The name of the intent.
   *
   * @public
   */
  intentName: string | undefined;

  /**
   * The version of the intent.
   *
   * @public
   */
  intentVersion: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateBotVersionResponse {
  /**
   * The name of the bot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of `Intent` objects. For more information, see PutBot.
   *
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * The message that Amazon Lex uses when it doesn't understand the user's request. For more information, see PutBot.
   *
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * The message that Amazon Lex uses to cancel a conversation. For more information, see PutBot.
   *
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * When you send a request to create or update a bot, Amazon Lex sets the `status` response element to `BUILDING`. After Amazon Lex builds the bot, it sets `status` to `READY`. If Amazon Lex can't build the bot, it sets `status` to `FAILED`. Amazon Lex returns the reason for the failure in the `failureReason` response element.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex provides the reason that it failed to build the bot.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date when the `$LATEST` version of this bot was updated.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date when the bot version was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interactions with the user.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * Checksum identifying the version of the bot that was created.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The version of the bot.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Specifies the target locale for the bot.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.
   *
   * If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ.](https://aws.amazon.com/lex/faqs#data-security)
   *
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * Indicates whether the bot uses accuracy improvements. `true` indicates that the bot is using the improvements, otherwise, `false`.
   *
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * Indicates whether utterances entered by the user should be sent to Amazon Comprehend for sentiment analysis.
   *
   * @public
   */
  detectSentiment?: boolean | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateIntentVersionRequest {
  /**
   * The name of the intent that you want to create a new version of. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Checksum of the `$LATEST` version of the intent that should be used to create the new version. If you specify a checksum and the `$LATEST` version of the intent has a different checksum, Amazon Lex returns a `PreconditionFailedException` exception and doesn't publish a new version. If you don't specify a checksum, Amazon Lex publishes the `$LATEST` version.
   *
   * @public
   */
  checksum?: string | undefined;
}

/**
 * Specifies a Lambda function that verifies requests to a bot or fulfills the user's request to a bot..
 *
 * @public
 */
export interface CodeHook {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function.
   *
   * @public
   */
  uri: string | undefined;

  /**
   * The version of the request-response that you want Amazon Lex to use to invoke your Lambda function. For more information, see using-lambda.
   *
   * @public
   */
  messageVersion: string | undefined;
}

/**
 * A prompt for additional activity after an intent is fulfilled. For example, after the `OrderPizza` intent is fulfilled, you might prompt the user to find out whether the user wants to order drinks.
 *
 * @public
 */
export interface FollowUpPrompt {
  /**
   * Prompts for information from the user.
   *
   * @public
   */
  prompt: Prompt | undefined;

  /**
   * If the user answers "no" to the question defined in the `prompt` field, Amazon Lex responds with this statement to acknowledge that the intent was canceled.
   *
   * @public
   */
  rejectionStatement: Statement | undefined;
}

/**
 * Describes how the intent is fulfilled after the user provides all of the information required for the intent. You can provide a Lambda function to process the intent, or you can return the intent information to the client application. We recommend that you use a Lambda function so that the relevant logic lives in the Cloud and limit the client-side code primarily to presentation. If you need to update the logic, you only update the Lambda function; you don't need to upgrade your client application.
 *
 * Consider the following examples:
 *
 * - In a pizza ordering application, after the user provides all of the information for placing an order, you use a Lambda function to place an order with a pizzeria.
 * - In a gaming application, when a user says "pick up a rock," this information must go back to the client application so that it can perform the operation and update the graphics. In this case, you want Amazon Lex to return the intent data to the client.
 *
 * @public
 */
export interface FulfillmentActivity {
  /**
   * How the intent should be fulfilled, either by running a Lambda function or by returning the slot data to the client application.
   *
   * @public
   */
  type: FulfillmentActivityType | undefined;

  /**
   * A description of the Lambda function that is run to fulfill the intent.
   *
   * @public
   */
  codeHook?: CodeHook | undefined;
}

/**
 * The name of a context that must be active for an intent to be selected by Amazon Lex.
 *
 * @public
 */
export interface InputContext {
  /**
   * The name of the context.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Provides configuration information for the AMAZON.KendraSearchIntent intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra index and returns documents from the index that match the user's utterance. For more information, see [AMAZON.KendraSearchIntent](http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html).
 *
 * @public
 */
export interface KendraConfiguration {
  /**
   * The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the AMAZON.KendraSearchIntent intent to search. The index must be in the same account and Region as the Amazon Lex bot. If the Amazon Kendra index does not exist, you get an exception when you call the `PutIntent` operation.
   *
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * A query filter that Amazon Lex sends to Amazon Kendra to filter the response from the query. The filter is in the format defined by Amazon Kendra. For more information, see [Filtering queries](http://docs.aws.amazon.com/kendra/latest/dg/filtering.html).
   *
   * You can override this filter string with a new filter string at runtime.
   *
   * @public
   */
  queryFilterString?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that has permission to search the Amazon Kendra index. The role must be in the same account and Region as the Amazon Lex bot. If the role does not exist, you get an exception when you call the `PutIntent` operation.
   *
   * @public
   */
  role: string | undefined;
}

/**
 * The specification of an output context that is set when an intent is fulfilled.
 *
 * @public
 */
export interface OutputContext {
  /**
   * The name of the context.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The number of seconds that the context should be active after it is first sent in a `PostContent` or `PostText` response. You can set the value between 5 and 86,400 seconds (24 hours).
   *
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * The number of conversation turns that the context should be active. A conversation turn is one `PostContent` or `PostText` request and the corresponding response from Amazon Lex.
   *
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * A default value for a slot.
 *
 * @public
 */
export interface SlotDefaultValue {
  /**
   * The default value for the slot. You can specify one of the following:
   *
   * - `#context-name.slot-name` - The slot value "slot-name" in the context "context-name."
   * - `\{attribute\}` - The slot value of the session attribute "attribute."
   * - `'value'` - The discrete value "value."
   *
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * Contains the default values for a slot. Default values are used when Amazon Lex hasn't determined a value for a slot.
 *
 * @public
 */
export interface SlotDefaultValueSpec {
  /**
   * The default values for a slot. You can specify more than one default. For example, you can specify a default value to use from a matching context variable, a session attribute, or a fixed value.
   *
   * The default value chosen is selected based on the order that you specify them in the list. For example, if you specify a context variable and a fixed value in that order, Amazon Lex uses the context variable if it is available, else it uses the fixed value.
   *
   * @public
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

/**
 * Identifies the version of a specific slot.
 *
 * @public
 */
export interface Slot {
  /**
   * The name of the slot.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the slot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Specifies whether the slot is required or optional.
   *
   * @public
   */
  slotConstraint: SlotConstraint | undefined;

  /**
   * The type of the slot, either a custom slot type that you defined or one of the built-in slot types.
   *
   * @public
   */
  slotType?: string | undefined;

  /**
   * The version of the slot type.
   *
   * @public
   */
  slotTypeVersion?: string | undefined;

  /**
   * The prompt that Amazon Lex uses to elicit the slot value from the user.
   *
   * @public
   */
  valueElicitationPrompt?: Prompt | undefined;

  /**
   * Directs Amazon Lex the order in which to elicit this slot value from the user. For example, if the intent has two slots with priorities 1 and 2, AWS Amazon Lex first elicits a value for the slot with priority 1.
   *
   * If multiple slots share the same priority, the order in which Amazon Lex elicits values is arbitrary.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * If you know a specific pattern with which users might respond to an Amazon Lex request for a slot value, you can provide those utterances to improve accuracy. This is optional. In most cases, Amazon Lex is capable of understanding user utterances.
   *
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * A set of possible responses for the slot type used by text-based clients. A user chooses an option from the response card, instead of using text to reply.
   *
   * @public
   */
  responseCard?: string | undefined;

  /**
   * Determines whether a slot is obfuscated in conversation logs and stored utterances. When you obfuscate a slot, the value is replaced by the slot name in curly braces (\{\}). For example, if the slot name is "full_name", obfuscated values are replaced with "\{full_name\}". For more information, see [Slot Obfuscation](https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html).
   *
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * A list of default values for the slot. Default values are used when Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables, session attributes, and defined values.
   *
   * @public
   */
  defaultValueSpec?: SlotDefaultValueSpec | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateIntentVersionResponse {
  /**
   * The name of the intent.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of slot types that defines the information required to fulfill the intent.
   *
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * An array of sample utterances configured for the intent.
   *
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * If defined, the prompt that Amazon Lex uses to confirm the user's intent before fulfilling it.
   *
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * If the user answers "no" to the question defined in `confirmationPrompt`, Amazon Lex responds with this statement to acknowledge that the intent was canceled.
   *
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * If defined, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled.
   *
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * After the Lambda function specified in the `fulfillmentActivity` field fulfills the intent, Amazon Lex conveys this statement to the user.
   *
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * If defined, Amazon Lex invokes this Lambda function for each user input.
   *
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * Describes how the intent is fulfilled.
   *
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * A unique identifier for a built-in intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The date that the intent was updated.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the intent was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version number assigned to the new version of the intent.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the intent version created.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Configuration information, if any, for connecting an Amazon Kendra index with the `AMAZON.KendraSearchIntent` intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * An array of `InputContext` objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * An array of `OutputContext` objects that lists the contexts that the intent activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateSlotTypeVersionRequest {
  /**
   * The name of the slot type that you want to create a new version for. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Checksum for the `$LATEST` version of the slot type that you want to publish. If you specify a checksum and the `$LATEST` version of the slot type has a different checksum, Amazon Lex returns a `PreconditionFailedException` exception and doesn't publish the new version. If you don't specify a checksum, Amazon Lex publishes the `$LATEST` version.
   *
   * @public
   */
  checksum?: string | undefined;
}

/**
 * Each slot type can have a set of values. Each enumeration value represents a value the slot type can take.
 *
 * For example, a pizza ordering bot could have a slot type that specifies the type of crust that the pizza should have. The slot type could include the values
 *
 * - thick
 * - thin
 * - stuffed
 *
 * @public
 */
export interface EnumerationValue {
  /**
   * The value of the slot type.
   *
   * @public
   */
  value: string | undefined;

  /**
   * Additional values related to the slot type value.
   *
   * @public
   */
  synonyms?: string[] | undefined;
}

/**
 * Provides a regular expression used to validate the value of a slot.
 *
 * @public
 */
export interface SlotTypeRegexConfiguration {
  /**
   * A regular expression used to validate the value of a slot.
   *
   * Use a standard regular expression. Amazon Lex supports the following characters in the regular expression:
   *
   * - A-Z, a-z
   * - 0-9
   * - Unicode characters ("\ u<Unicode>")
   *
   * Represent Unicode characters with four digits, for example "\u0041" or "\u005A".
   *
   * The following regular expression operators are not supported:
   *
   * - Infinite repeaters: *, +, or \{x,\} with no upper bound.
   * - Wild card (.)
   *
   * @public
   */
  pattern: string | undefined;
}

/**
 * Provides configuration information for a slot type.
 *
 * @public
 */
export interface SlotTypeConfiguration {
  /**
   * A regular expression used to validate the value of a slot.
   *
   * @public
   */
  regexConfiguration?: SlotTypeRegexConfiguration | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface CreateSlotTypeVersionResponse {
  /**
   * The name of the slot type.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `EnumerationValue` objects that defines the values that the slot type can take.
   *
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the slot type was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version assigned to the new slot type version.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the `$LATEST` version of the slot type.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
   *
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * The built-in slot type used a the parent of the slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * Configuration information that extends the parent built-in slot type.
   *
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteBotRequest {
  /**
   * The name of the bot. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * Describes the resource that refers to the resource that you are attempting to delete. This object is returned as part of the `ResourceInUseException` exception.
 *
 * @public
 */
export interface ResourceReference {
  /**
   * The name of the resource that is using the resource that you are trying to delete.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the resource that is using the resource that you are trying to delete.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteBotAliasRequest {
  /**
   * The name of the alias to delete. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the bot that the alias points to.
   *
   * @public
   */
  botName: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteBotChannelAssociationRequest {
  /**
   * The name of the association. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the Amazon Lex bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * An alias that points to the specific version of the Amazon Lex bot to which this association is being made.
   *
   * @public
   */
  botAlias: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteBotVersionRequest {
  /**
   * The name of the bot.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the bot to delete. You cannot delete the `$LATEST` version of the bot. To delete the `$LATEST` version, use the DeleteBot operation.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteIntentRequest {
  /**
   * The name of the intent. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteIntentVersionRequest {
  /**
   * The name of the intent.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the intent to delete. You cannot delete the `$LATEST` version of the intent. To delete the `$LATEST` version, use the DeleteIntent operation.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteSlotTypeRequest {
  /**
   * The name of the slot type. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteSlotTypeVersionRequest {
  /**
   * The name of the slot type.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the slot type to delete. You cannot delete the `$LATEST` version of the slot type. To delete the `$LATEST` version, use the DeleteSlotType operation.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface DeleteUtterancesRequest {
  /**
   * The name of the bot that stored the utterances.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * The unique identifier for the user that made the utterances. This is the user ID that was sent in the [PostContent](http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html) or [PostText](http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html) operation request that contained the utterance.
   *
   * @public
   */
  userId: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotRequest {
  /**
   * The name of the bot. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version or alias of the bot.
   *
   * @public
   */
  versionOrAlias: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotResponse {
  /**
   * The name of the bot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of `intent` objects. For more information, see PutBot.
   *
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * Indicates whether the bot uses accuracy improvements. `true` indicates that the bot is using the improvements, otherwise, `false`.
   *
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * The score that determines where Amazon Lex inserts the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents in a [PostContent](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html) or [PostText](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html) response. `AMAZON.FallbackIntent` is inserted if the confidence score for all intents is below this value. `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot.
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * The message Amazon Lex uses when it doesn't understand the user's request. For more information, see PutBot.
   *
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * The message that Amazon Lex returns when the user elects to end the conversation without completing it. For more information, see PutBot.
   *
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * The status of the bot.
   *
   * When the status is `BUILDING` Amazon Lex is building the bot for testing and use.
   *
   * If the status of the bot is `READY_BASIC_TESTING`, you can test the bot using the exact utterances specified in the bot's intents. When the bot is ready for full testing or to run, the status is `READY`.
   *
   * If there was a problem with building the bot, the status is `FAILED` and the `failureReason` field explains why the bot did not build.
   *
   * If the bot was saved but not built, the status is `NOT_BUILT`.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex explains why it failed to build the bot.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * Checksum of the bot used to identify a specific revision of the bot's `$LATEST` version.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The version of the bot. For a new bot, the version is always `$LATEST`.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The target locale for the bot.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.
   *
   * If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ.](https://aws.amazon.com/lex/faqs#data-security)
   *
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * Indicates whether user utterances should be sent to Amazon Comprehend for sentiment analysis.
   *
   * @public
   */
  detectSentiment?: boolean | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotAliasRequest {
  /**
   * The name of the bot alias. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the bot.
   *
   * @public
   */
  botName: string | undefined;
}

/**
 * The settings for conversation logs.
 *
 * @public
 */
export interface LogSettingsResponse {
  /**
   * The type of logging that is enabled.
   *
   * @public
   */
  logType?: LogType | undefined;

  /**
   * The destination where logs are delivered.
   *
   * @public
   */
  destination?: Destination | undefined;

  /**
   * The Amazon Resource Name (ARN) of the key used to encrypt audio logs in an S3 bucket.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs are delivered.
   *
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * The resource prefix is the first part of the S3 object key within the S3 bucket that you specified to contain audio logs. For CloudWatch Logs it is the prefix of the log stream name within the log group that you specified.
   *
   * @public
   */
  resourcePrefix?: string | undefined;
}

/**
 * Contains information about conversation log settings.
 *
 * @public
 */
export interface ConversationLogsResponse {
  /**
   * The settings for your conversation logs. You can log text, audio, or both.
   *
   * @public
   */
  logSettings?: LogSettingsResponse[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role used to write your logs to CloudWatch Logs or an S3 bucket.
   *
   * @public
   */
  iamRoleArn?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotAliasResponse {
  /**
   * The name of the bot alias.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot that the alias points to.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The name of the bot that the alias points to.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot alias was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * Checksum of the bot alias.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The settings that determine how Amazon Lex uses conversation logs for the alias.
   *
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotAliasesRequest {
  /**
   * The name of the bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * A pagination token for fetching the next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of aliases to return in the response. The default is 50. .
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Substring to match in bot alias names. An alias will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   *
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * Provides information about a bot alias.
 *
 * @public
 */
export interface BotAliasMetadata {
  /**
   * The name of the bot alias.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the Amazon Lex bot to which the alias points.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The name of the bot to which the alias points.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The date that the bot alias was updated. When you create a resource, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot alias was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * Checksum of the bot alias.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Settings that determine how Amazon Lex uses conversation logs for the alias.
   *
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotAliasesResponse {
  /**
   * An array of `BotAliasMetadata` objects, each describing a bot alias.
   *
   * @public
   */
  BotAliases?: BotAliasMetadata[] | undefined;

  /**
   * A pagination token for fetching next page of aliases. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of aliases, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotChannelAssociationRequest {
  /**
   * The name of the association between the bot and the channel. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the Amazon Lex bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
   *
   * @public
   */
  botAlias: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotChannelAssociationResponse {
  /**
   * The name of the association between the bot and the channel.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the association between the bot and the channel.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
   *
   * @public
   */
  botAlias?: string | undefined;

  /**
   * The name of the Amazon Lex bot.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The date that the association between the bot and the channel was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The type of the messaging platform.
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Provides information that the messaging platform needs to communicate with the Amazon Lex bot.
   *
   * @public
   */
  botConfiguration?: Record<string, string> | undefined;

  /**
   * The status of the bot channel.
   *
   * - `CREATED` - The channel has been created and is ready for use.
   * - `IN_PROGRESS` - Channel creation is in progress.
   * - `FAILED` - There was an error creating the channel. For information about the reason for the failure, see the `failureReason` field.
   *
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex provides the reason that it failed to create the association.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotChannelAssociationsRequest {
  /**
   * The name of the Amazon Lex bot in the association.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
   *
   * @public
   */
  botAlias: string | undefined;

  /**
   * A pagination token for fetching the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of associations to return in the response. The default is 50.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Substring to match in channel association names. An association will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot channel associations, use a hyphen ("-") as the `nameContains` parameter.
   *
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * Represents an association between an Amazon Lex bot and an external messaging platform.
 *
 * @public
 */
export interface BotChannelAssociation {
  /**
   * The name of the association between the bot and the channel.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A text description of the association you are creating.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An alias pointing to the specific version of the Amazon Lex bot to which this association is being made.
   *
   * @public
   */
  botAlias?: string | undefined;

  /**
   * The name of the Amazon Lex bot to which this association is being made.
   *
   * > **Note:** Currently, Amazon Lex supports associations with Facebook and Slack, and Twilio.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The date that the association between the Amazon Lex bot and the channel was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * Specifies the type of association by indicating the type of channel being established between the Amazon Lex bot and the external messaging platform.
   *
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * Provides information necessary to communicate with the messaging platform.
   *
   * @public
   */
  botConfiguration?: Record<string, string> | undefined;

  /**
   * The status of the bot channel.
   *
   * - `CREATED` - The channel has been created and is ready for use.
   * - `IN_PROGRESS` - Channel creation is in progress.
   * - `FAILED` - There was an error creating the channel. For information about the reason for the failure, see the `failureReason` field.
   *
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex provides the reason that it failed to create the association.
   *
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotChannelAssociationsResponse {
  /**
   * An array of objects, one for each association, that provides information about the Amazon Lex bot and its association with the channel.
   *
   * @public
   */
  botChannelAssociations?: BotChannelAssociation[] | undefined;

  /**
   * A pagination token that fetches the next page of associations. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of associations, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotsRequest {
  /**
   * A pagination token that fetches the next page of bots. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of bots, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of bots to return in the response that the request will return. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Substring to match in bot names. A bot will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   *
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * Provides information about a bot. .
 *
 * @public
 */
export interface BotMetadata {
  /**
   * The name of the bot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The status of the bot.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * The date that the bot was updated. When you create a bot, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the bot. For a new bot, the version is always `$LATEST`.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotsResponse {
  /**
   * An array of `botMetadata` objects, with one entry for each bot.
   *
   * @public
   */
  bots?: BotMetadata[] | undefined;

  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of bots.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotVersionsRequest {
  /**
   * The name of the bot for which versions should be returned.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of bot versions to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBotVersionsResponse {
  /**
   * An array of `BotMetadata` objects, one for each numbered version of the bot plus one for the `$LATEST` version.
   *
   * @public
   */
  bots?: BotMetadata[] | undefined;

  /**
   * A pagination token for fetching the next page of bot versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinIntentRequest {
  /**
   * The unique identifier for a built-in intent. To find the signature for an intent, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents) in the *Alexa Skills Kit*.
   *
   * @public
   */
  signature: string | undefined;
}

/**
 * Provides information about a slot used in a built-in intent.
 *
 * @public
 */
export interface BuiltinIntentSlot {
  /**
   * A list of the slots defined for the intent.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinIntentResponse {
  /**
   * The unique identifier for a built-in intent.
   *
   * @public
   */
  signature?: string | undefined;

  /**
   * A list of locales that the intent supports.
   *
   * @public
   */
  supportedLocales?: Locale[] | undefined;

  /**
   * An array of `BuiltinIntentSlot` objects, one entry for each slot type in the intent.
   *
   * @public
   */
  slots?: BuiltinIntentSlot[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinIntentsRequest {
  /**
   * A list of locales that the intent supports.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * Substring to match in built-in intent signatures. An intent will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an intent, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents) in the *Alexa Skills Kit*.
   *
   * @public
   */
  signatureContains?: string | undefined;

  /**
   * A pagination token that fetches the next page of intents. If this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, use the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of intents to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides metadata for a built-in intent.
 *
 * @public
 */
export interface BuiltinIntentMetadata {
  /**
   * A unique identifier for the built-in intent. To find the signature for an intent, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents) in the *Alexa Skills Kit*.
   *
   * @public
   */
  signature?: string | undefined;

  /**
   * A list of identifiers for the locales that the intent supports.
   *
   * @public
   */
  supportedLocales?: Locale[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinIntentsResponse {
  /**
   * An array of `builtinIntentMetadata` objects, one for each intent in the response.
   *
   * @public
   */
  intents?: BuiltinIntentMetadata[] | undefined;

  /**
   * A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinSlotTypesRequest {
  /**
   * A list of locales that the slot type supports.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * Substring to match in built-in slot type signatures. A slot type will be returned if any part of its signature matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   *
   * @public
   */
  signatureContains?: string | undefined;

  /**
   * A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of slot types, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of slot types to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Provides information about a built in slot type.
 *
 * @public
 */
export interface BuiltinSlotTypeMetadata {
  /**
   * A unique identifier for the built-in slot type. To find the signature for a slot type, see [Slot Type Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference) in the *Alexa Skills Kit*.
   *
   * @public
   */
  signature?: string | undefined;

  /**
   * A list of target locales for the slot.
   *
   * @public
   */
  supportedLocales?: Locale[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetBuiltinSlotTypesResponse {
  /**
   * An array of `BuiltInSlotTypeMetadata` objects, one entry for each slot type returned.
   *
   * @public
   */
  slotTypes?: BuiltinSlotTypeMetadata[] | undefined;

  /**
   * If the response is truncated, the response includes a pagination token that you can use in your next request to fetch the next page of slot types.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetExportRequest {
  /**
   * The name of the bot to export.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the bot to export.
   *
   * @public
   */
  version: string | undefined;

  /**
   * The type of resource to export.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * The format of the exported data.
   *
   * @public
   */
  exportType: ExportType | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetExportResponse {
  /**
   * The name of the bot being exported.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The version of the bot being exported.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The type of the exported resource.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The format of the exported data.
   *
   * @public
   */
  exportType?: ExportType | undefined;

  /**
   * The status of the export.
   *
   * - `IN_PROGRESS` - The export is in progress.
   * - `READY` - The export is complete.
   * - `FAILED` - The export could not be completed.
   *
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex provides the reason that it failed to export the resource.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * An S3 pre-signed URL that provides the location of the exported resource. The exported resource is a ZIP archive that contains the exported resource in JSON format. The structure of the archive may change. Your code should not rely on the archive structure.
   *
   * @public
   */
  url?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetImportRequest {
  /**
   * The identifier of the import job information to return.
   *
   * @public
   */
  importId: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetImportResponse {
  /**
   * The name given to the import job.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of resource imported.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The action taken when there was a conflict between an existing resource and a resource in the import file.
   *
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * The identifier for the specific import job.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The status of the import job. If the status is `FAILED`, you can get the reason for the failure from the `failureReason` field.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * A string that describes why an import job failed to complete.
   *
   * @public
   */
  failureReason?: string[] | undefined;

  /**
   * A timestamp for the date and time that the import job was created.
   *
   * @public
   */
  createdDate?: Date | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentRequest {
  /**
   * The name of the intent. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the intent.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentResponse {
  /**
   * The name of the intent.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of intent slots configured for the intent.
   *
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * An array of sample utterances configured for the intent.
   *
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * If defined in the bot, Amazon Lex uses prompt to confirm the intent before fulfilling the user's request. For more information, see PutIntent.
   *
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * If the user answers "no" to the question defined in `confirmationPrompt`, Amazon Lex responds with this statement to acknowledge that the intent was canceled.
   *
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * If defined in the bot, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled. For more information, see PutIntent.
   *
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * After the Lambda function specified in the `fulfillmentActivity` element fulfills the intent, Amazon Lex conveys this statement to the user.
   *
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * If defined in the bot, Amazon Amazon Lex invokes this Lambda function for each user input. For more information, see PutIntent.
   *
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * Describes how the intent is fulfilled. For more information, see PutIntent.
   *
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * A unique identifier for a built-in intent.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The date that the intent was updated. When you create a resource, the creation date and the last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the intent was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the intent.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the intent.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Configuration information, if any, to connect to an Amazon Kendra index with the `AMAZON.KendraSearchIntent` intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * An array of `InputContext` objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * An array of `OutputContext` objects that lists the contexts that the intent activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentsRequest {
  /**
   * A pagination token that fetches the next page of intents. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of intents, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of intents to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Substring to match in intent names. An intent will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   *
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * Provides information about an intent.
 *
 * @public
 */
export interface IntentMetadata {
  /**
   * The name of the intent.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date that the intent was updated. When you create an intent, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the intent was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the intent.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentsResponse {
  /**
   * An array of `Intent` objects. For more information, see PutBot.
   *
   * @public
   */
  intents?: IntentMetadata[] | undefined;

  /**
   * If the response is truncated, the response includes a pagination token that you can specify in your next request to fetch the next page of intents.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentVersionsRequest {
  /**
   * The name of the intent for which versions should be returned.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of intent versions to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetIntentVersionsResponse {
  /**
   * An array of `IntentMetadata` objects, one for each numbered version of the intent plus one for the `$LATEST` version.
   *
   * @public
   */
  intents?: IntentMetadata[] | undefined;

  /**
   * A pagination token for fetching the next page of intent versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetMigrationRequest {
  /**
   * The unique identifier of the migration to view. The `migrationID` is returned by the operation.
   *
   * @public
   */
  migrationId: string | undefined;
}

/**
 * Provides information about alerts and warnings that Amazon Lex sends during a migration. The alerts include information about how to resolve the issue.
 *
 * @public
 */
export interface MigrationAlert {
  /**
   * The type of alert. There are two kinds of alerts:
   *
   * - `ERROR` - There was an issue with the migration that can't be resolved. The migration stops.
   * - `WARN` - There was an issue with the migration that requires manual changes to the new Amazon Lex V2 bot. The migration continues.
   *
   * @public
   */
  type?: MigrationAlertType | undefined;

  /**
   * A message that describes why the alert was issued.
   *
   * @public
   */
  message?: string | undefined;

  /**
   * Additional details about the alert.
   *
   * @public
   */
  details?: string[] | undefined;

  /**
   * A link to the Amazon Lex documentation that describes how to resolve the alert.
   *
   * @public
   */
  referenceURLs?: string[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetMigrationResponse {
  /**
   * The unique identifier of the migration. This is the same as the identifier used when calling the `GetMigration` operation.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The name of the Amazon Lex V1 bot migrated to Amazon Lex V2.
   *
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * The version of the Amazon Lex V1 bot migrated to Amazon Lex V2.
   *
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2.
   *
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being migrated to.
   *
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * Indicates the status of the migration. When the status is `COMPLETE` the migration is finished and the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.
   *
   * @public
   */
  migrationStatus?: MigrationStatus | undefined;

  /**
   * The strategy used to conduct the migration.
   *
   * - `CREATE_NEW` - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.
   * - `UPDATE_EXISTING` - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
   *
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * The date and time that the migration started.
   *
   * @public
   */
  migrationTimestamp?: Date | undefined;

  /**
   * A list of alerts and warnings that indicate issues with the migration for the Amazon Lex V1 bot to Amazon Lex V2. You receive a warning when an Amazon Lex V1 feature has a different implementation if Amazon Lex V2.
   *
   * For more information, see [Migrating a bot](https://docs.aws.amazon.com/lexv2/latest/dg/migrate.html) in the *Amazon Lex V2 developer guide*.
   *
   * @public
   */
  alerts?: MigrationAlert[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetMigrationsRequest {
  /**
   * The field to sort the list of migrations by. You can sort by the Amazon Lex V1 bot name or the date and time that the migration was started.
   *
   * @public
   */
  sortByAttribute?: MigrationSortAttribute | undefined;

  /**
   * The order so sort the list.
   *
   * @public
   */
  sortByOrder?: SortOrder | undefined;

  /**
   * Filters the list to contain only bots whose name contains the specified string. The string is matched anywhere in bot name.
   *
   * @public
   */
  v1BotNameContains?: string | undefined;

  /**
   * Filters the list to contain only migrations in the specified state.
   *
   * @public
   */
  migrationStatusEquals?: MigrationStatus | undefined;

  /**
   * The maximum number of migrations to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A pagination token that fetches the next page of migrations. If the response to this operation is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of migrations, specify the pagination token in the request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.
 *
 * @public
 */
export interface MigrationSummary {
  /**
   * The unique identifier that Amazon Lex assigned to the migration.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The name of the Amazon Lex V1 bot that is the source of the migration.
   *
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * The version of the Amazon Lex V1 bot that is the source of the migration.
   *
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * The locale of the Amazon Lex V1 bot that is the source of the migration.
   *
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * The unique identifier of the Amazon Lex V2 that is the destination of the migration.
   *
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * The status of the operation. When the status is `COMPLETE` the bot is available in Amazon Lex V2. There may be alerts and warnings that need to be resolved to complete the migration.
   *
   * @public
   */
  migrationStatus?: MigrationStatus | undefined;

  /**
   * The strategy used to conduct the migration.
   *
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * The date and time that the migration started.
   *
   * @public
   */
  migrationTimestamp?: Date | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetMigrationsResponse {
  /**
   * An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see details of the migration, use the `migrationId` from the summary in a call to the operation.
   *
   * @public
   */
  migrationSummaries?: MigrationSummary[] | undefined;

  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of migrations.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypeRequest {
  /**
   * The name of the slot type. The name is case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The version of the slot type.
   *
   * @public
   */
  version: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypeResponse {
  /**
   * The name of the slot type.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `EnumerationValue` objects that defines the values that the slot type can take.
   *
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * The date that the slot type was updated. When you create a resource, the creation date and last update date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the slot type was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the slot type.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the `$LATEST` version of the slot type.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
   *
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * The built-in slot type used as a parent for the slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * Configuration information that extends the parent built-in slot type.
   *
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypesRequest {
  /**
   * A pagination token that fetches the next page of slot types. If the response to this API call is truncated, Amazon Lex returns a pagination token in the response. To fetch next page of slot types, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of slot types to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Substring to match in slot type names. A slot type will be returned if any part of its name matches the substring. For example, "xyz" matches both "xyzabc" and "abcxyz."
   *
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * Provides information about a slot type..
 *
 * @public
 */
export interface SlotTypeMetadata {
  /**
   * The name of the slot type.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The date that the slot type was updated. When you create a resource, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the slot type was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the slot type.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypesResponse {
  /**
   * An array of objects, one for each slot type, that provides information such as the name of the slot type, the version, and a description.
   *
   * @public
   */
  slotTypes?: SlotTypeMetadata[] | undefined;

  /**
   * If the response is truncated, it includes a pagination token that you can specify in your next request to fetch the next page of slot types.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypeVersionsRequest {
  /**
   * The name of the slot type for which versions should be returned.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of slot type versions to return in the response. The default is 10.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetSlotTypeVersionsResponse {
  /**
   * An array of `SlotTypeMetadata` objects, one for each numbered version of the slot type plus one for the `$LATEST` version.
   *
   * @public
   */
  slotTypes?: SlotTypeMetadata[] | undefined;

  /**
   * A pagination token for fetching the next page of slot type versions. If the response to this call is truncated, Amazon Lex returns a pagination token in the response. To fetch the next page of versions, specify the pagination token in the next request.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetUtterancesViewRequest {
  /**
   * The name of the bot for which utterance information should be returned.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * An array of bot versions for which utterance information should be returned. The limit is 5 versions per request.
   *
   * @public
   */
  botVersions: string[] | undefined;

  /**
   * To return utterances that were recognized and handled, use `Detected`. To return utterances that were not recognized, use `Missed`.
   *
   * @public
   */
  statusType: StatusType | undefined;
}

/**
 * Provides information about a single utterance that was made to your bot.
 *
 * @public
 */
export interface UtteranceData {
  /**
   * The text that was entered by the user or the text representation of an audio clip.
   *
   * @public
   */
  utteranceString?: string | undefined;

  /**
   * The number of times that the utterance was processed.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The total number of individuals that used the utterance.
   *
   * @public
   */
  distinctUsers?: number | undefined;

  /**
   * The date that the utterance was first recorded.
   *
   * @public
   */
  firstUtteredDate?: Date | undefined;

  /**
   * The date that the utterance was last recorded.
   *
   * @public
   */
  lastUtteredDate?: Date | undefined;
}

/**
 * Provides a list of utterances that have been made to a specific version of your bot. The list contains a maximum of 100 utterances.
 *
 * @public
 */
export interface UtteranceList {
  /**
   * The version of the bot that processed the list.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * One or more UtteranceData objects that contain information about the utterances that have been made to a bot. The maximum number of object is 100.
   *
   * @public
   */
  utterances?: UtteranceData[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface GetUtterancesViewResponse {
  /**
   * The name of the bot for which utterance information was returned.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * An array of UtteranceList objects, each containing a list of UtteranceData objects describing the utterances that were processed by your bot. The response contains a maximum of 100 `UtteranceData` objects for each version. Amazon Lex returns the most frequent utterances received by the bot in the last 15 days.
   *
   * @public
   */
  utterances?: UtteranceList[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to get a list of tags for.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * A list of key/value pairs that identify a bot, bot alias, or bot channel. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: _ . : / = + - @.
 *
 * @public
 */
export interface Tag {
  /**
   * The key for the tag. Keys are not case-sensitive and must be unique.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The value associated with a key. The value may be an empty string but it can't be null.
   *
   * @public
   */
  value: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The tags associated with a resource.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutBotRequest {
  /**
   * The name of the bot. The name is *not* case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of `Intent` objects. Each intent represents a command that a user can express. For example, a pizza ordering bot might support an OrderPizza intent. For more information, see how-it-works.
   *
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * Set to `true` to enable access to natural language understanding improvements.
   *
   * When you set the `enableModelImprovements` parameter to `true` you can use the `nluIntentConfidenceThreshold` parameter to configure confidence scores. For more information, see [Confidence Scores](https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html).
   *
   * You can only set the `enableModelImprovements` parameter in certain Regions. If you set the parameter to `true`, your bot has access to accuracy improvements.
   *
   * The Regions where you can set the `enableModelImprovements` parameter to `true` are:
   *
   * - US East (N. Virginia) (us-east-1)
   * - US West (Oregon) (us-west-2)
   * - Asia Pacific (Sydney) (ap-southeast-2)
   * - EU (Ireland) (eu-west-1)
   *
   * In other Regions, the `enableModelImprovements` parameter is set to `true` by default. In these Regions setting the parameter to `false` throws a `ValidationException` exception.
   *
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * Determines the threshold where Amazon Lex will insert the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents in a [PostContent](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html) or [PostText](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html) response. `AMAZON.FallbackIntent` and `AMAZON.KendraSearchIntent` are only inserted if they are configured for the bot.
   *
   * You must set the `enableModelImprovements` parameter to `true` to use confidence scores in the following regions.
   *
   * - US East (N. Virginia) (us-east-1)
   * - US West (Oregon) (us-west-2)
   * - Asia Pacific (Sydney) (ap-southeast-2)
   * - EU (Ireland) (eu-west-1)
   *
   * In other Regions, the `enableModelImprovements` parameter is set to `true` by default.
   *
   * For example, suppose a bot is configured with the confidence threshold of 0.80 and the `AMAZON.FallbackIntent`. Amazon Lex returns three alternative intents with the following confidence scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the `PostText` operation would be:
   *
   * - AMAZON.FallbackIntent
   * - IntentA
   * - IntentB
   * - IntentC
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * When Amazon Lex doesn't understand the user's intent, it uses this message to get clarification. To specify how many times Amazon Lex should repeat the clarification prompt, use the `maxAttempts` field. If Amazon Lex still doesn't understand, it sends the message in the `abortStatement` field.
   *
   * When you create a clarification prompt, make sure that it suggests the correct response from the user. for example, for a bot that orders pizza and drinks, you might create this clarification prompt: "What would you like to do? You can say 'Order a pizza' or 'Order a drink.'"
   *
   * If you have defined a fallback intent, it will be invoked if the clarification prompt is repeated the number of times defined in the `maxAttempts` field. For more information, see [AMAZON.FallbackIntent](https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html).
   *
   * If you don't define a clarification prompt, at runtime Amazon Lex will return a 400 Bad Request exception in three cases:
   *
   * - Follow-up prompt - When the user responds to a follow-up prompt but does not provide an intent. For example, in response to a follow-up prompt that says "Would you like anything else today?" the user says "Yes." Amazon Lex will return a 400 Bad Request exception because it does not have a clarification prompt to send to the user to get an intent.
   * - Lambda function - When using a Lambda function, you return an `ElicitIntent` dialog type. Since Amazon Lex does not have a clarification prompt to get an intent from the user, it returns a 400 Bad Request exception.
   * - PutSession operation - When using the `PutSession` operation, you send an `ElicitIntent` dialog type. Since Amazon Lex does not have a clarification prompt to get an intent from the user, it returns a 400 Bad Request exception.
   *
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * When Amazon Lex can't understand the user's input in context, it tries to elicit the information a few times. After that, Amazon Lex sends the message defined in `abortStatement` to the user, and then cancels the conversation. To set the number of retries, use the `valueElicitationPrompt` field for the slot type.
   *
   * For example, in a pizza ordering bot, Amazon Lex might ask a user "What type of crust would you like?" If the user's response is not one of the expected responses (for example, "thin crust, "deep dish," etc.), Amazon Lex tries to elicit a correct response a few more times.
   *
   * For example, in a pizza ordering application, `OrderPizza` might be one of the intents. This intent might require the `CrustType` slot. You specify the `valueElicitationPrompt` field when you create the `CrustType` slot.
   *
   * If you have defined a fallback intent the cancel statement will not be sent to the user, the fallback intent is used instead. For more information, see [AMAZON.FallbackIntent](https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html).
   *
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * The maximum time in seconds that Amazon Lex retains the data gathered in a conversation.
   *
   * A user interaction session remains active for the amount of time specified. If no conversation occurs during this time, the session expires and Amazon Lex deletes any data provided before the timeout.
   *
   * For example, suppose that a user chooses the OrderPizza intent, but gets sidetracked halfway through placing an order. If the user doesn't complete the order within the specified time, Amazon Lex discards the slot information that it gathered, and the user must start over.
   *
   * If you don't include the `idleSessionTTLInSeconds` element in a `PutBot` operation request, Amazon Lex uses the default value. This is also true if the request replaces an existing bot.
   *
   * The default is 300 seconds (5 minutes).
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Polly voice ID that you want Amazon Lex to use for voice interactions with the user. The locale configured for the voice must match the locale of the bot. For more information, see [Voices in Amazon Polly](https://docs.aws.amazon.com/polly/latest/dg/voicelist.html) in the *Amazon Polly Developer Guide*.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * Identifies a specific revision of the `$LATEST` version.
   *
   * When you create a new bot, leave the `checksum` field blank. If you specify a checksum you get a `BadRequestException` exception.
   *
   * When you want to update a bot, set the `checksum` field to the checksum of the most recent revision of the `$LATEST` version. If you don't specify the `checksum` field, or if the checksum does not match the `$LATEST` version, you get a `PreconditionFailedException` exception.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * If you set the `processBehavior` element to `BUILD`, Amazon Lex builds the bot so that it can be run. If you set the element to `SAVE` Amazon Lex saves the bot, but doesn't build it.
   *
   * If you don't specify this value, the default value is `BUILD`.
   *
   * @public
   */
  processBehavior?: ProcessBehavior | undefined;

  /**
   * Specifies the target locale for the bot. Any intent used in the bot must be compatible with the locale of the bot.
   *
   * The default is `en-US`.
   *
   * @public
   */
  locale: Locale | undefined;

  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.
   *
   * If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ.](https://aws.amazon.com/lex/faqs#data-security)
   *
   * @public
   */
  childDirected: boolean | undefined;

  /**
   * When set to `true` user utterances are sent to Amazon Comprehend for sentiment analysis. If you don't specify `detectSentiment`, the default is `false`.
   *
   * @public
   */
  detectSentiment?: boolean | undefined;

  /**
   * When set to `true` a new numbered version of the bot is created. This is the same as calling the `CreateBotVersion` operation. If you don't specify `createVersion`, the default is `false`.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * A list of tags to add to the bot. You can only add tags when you create a bot, you can't use the `PutBot` operation to update the tags on a bot. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutBotResponse {
  /**
   * The name of the bot.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the bot.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of `Intent` objects. For more information, see PutBot.
   *
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * Indicates whether the bot uses accuracy improvements. `true` indicates that the bot is using the improvements, otherwise, `false`.
   *
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * The score that determines where Amazon Lex inserts the `AMAZON.FallbackIntent`, `AMAZON.KendraSearchIntent`, or both when returning alternative intents in a [PostContent](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html) or [PostText](https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html) response. `AMAZON.FallbackIntent` is inserted if the confidence score for all intents is below this value. `AMAZON.KendraSearchIntent` is only inserted if it is configured for the bot.
   *
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * The prompts that Amazon Lex uses when it doesn't understand the user's intent. For more information, see PutBot.
   *
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * The message that Amazon Lex uses to cancel a conversation. For more information, see PutBot.
   *
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * When you send a request to create a bot with `processBehavior` set to `BUILD`, Amazon Lex sets the `status` response element to `BUILDING`.
   *
   * In the `READY_BASIC_TESTING` state you can test the bot with user inputs that exactly match the utterances configured for the bot's intents and values in the slot types.
   *
   * If Amazon Lex can't build the bot, Amazon Lex sets `status` to `FAILED`. Amazon Lex returns the reason for the failure in the `failureReason` response element.
   *
   * When you set `processBehavior` to `SAVE`, Amazon Lex sets the status code to `NOT BUILT`.
   *
   * When the bot is in the `READY` state you can test and publish the bot.
   *
   * @public
   */
  status?: Status | undefined;

  /**
   * If `status` is `FAILED`, Amazon Lex provides the reason that it failed to build the bot.
   *
   * @public
   */
  failureReason?: string | undefined;

  /**
   * The date that the bot was updated. When you create a resource, the creation date and last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The maximum length of time that Amazon Lex retains the data gathered in a conversation. For more information, see PutBot.
   *
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the user. For more information, see PutBot.
   *
   * @public
   */
  voiceId?: string | undefined;

  /**
   * Checksum of the bot that you created.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The version of the bot. For a new bot, the version is always `$LATEST`.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * The target locale for the bot.
   *
   * @public
   */
  locale?: Locale | undefined;

  /**
   * For each Amazon Lex bot created with the Amazon Lex Model Building Service, you must specify whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to the Children's Online Privacy Protection Act (COPPA) by specifying `true` or `false` in the `childDirected` field. By specifying `true` in the `childDirected` field, you confirm that your use of Amazon Lex **is** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. By specifying `false` in the `childDirected` field, you confirm that your use of Amazon Lex **is not** related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA. You may not specify a default value for the `childDirected` field that does not accurately reflect whether your use of Amazon Lex is related to a website, program, or other application that is directed or targeted, in whole or in part, to children under age 13 and subject to COPPA.
   *
   * If your use of Amazon Lex relates to a website, program, or other application that is directed in whole or in part, to children under age 13, you must obtain any required verifiable parental consent under COPPA. For information regarding the use of Amazon Lex in connection with websites, programs, or other applications that are directed or targeted, in whole or in part, to children under age 13, see the [Amazon Lex FAQ.](https://aws.amazon.com/lex/faqs#data-security)
   *
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * `True` if a new version of the bot was created. If the `createVersion` field was not specified in the request, the `createVersion` field is set to false in the response.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * `true` if the bot is configured to send user utterances to Amazon Comprehend for sentiment analysis. If the `detectSentiment` field was not specified in the request, the `detectSentiment` field is `false` in the response.
   *
   * @public
   */
  detectSentiment?: boolean | undefined;

  /**
   * A list of tags associated with the bot.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * Settings used to configure delivery mode and destination for conversation logs.
 *
 * @public
 */
export interface LogSettingsRequest {
  /**
   * The type of logging to enable. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
   *
   * @public
   */
  logType: LogType | undefined;

  /**
   * Where the logs will be delivered. Text logs are delivered to a CloudWatch Logs log group. Audio logs are delivered to an S3 bucket.
   *
   * @public
   */
  destination: Destination | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS KMS customer managed key for encrypting audio logs delivered to an S3 bucket. The key does not apply to CloudWatch Logs and is optional for S3 buckets.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3 bucket where the logs should be delivered.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Provides the settings needed for conversation logs.
 *
 * @public
 */
export interface ConversationLogsRequest {
  /**
   * The settings for your conversation logs. You can log the conversation text, conversation audio, or both.
   *
   * @public
   */
  logSettings: LogSettingsRequest[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role with permission to write to your CloudWatch Logs for text logs and your S3 bucket for audio logs. If audio encryption is enabled, this role also provides access permission for the AWS KMS key used for encrypting audio logs. For more information, see [Creating an IAM Role and Policy for Conversation Logs](https://docs.aws.amazon.com/lex/latest/dg/conversation-logs-role-and-policy.html).
   *
   * @public
   */
  iamRoleArn: string | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutBotAliasRequest {
  /**
   * The name of the alias. The name is *not* case sensitive.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot.
   *
   * @public
   */
  botVersion: string | undefined;

  /**
   * The name of the bot.
   *
   * @public
   */
  botName: string | undefined;

  /**
   * Identifies a specific revision of the `$LATEST` version.
   *
   * When you create a new bot alias, leave the `checksum` field blank. If you specify a checksum you get a `BadRequestException` exception.
   *
   * When you want to update a bot alias, set the `checksum` field to the checksum of the most recent revision of the `$LATEST` version. If you don't specify the `checksum` field, or if the checksum does not match the `$LATEST` version, you get a `PreconditionFailedException` exception.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Settings for conversation logs for the alias.
   *
   * @public
   */
  conversationLogs?: ConversationLogsRequest | undefined;

  /**
   * A list of tags to add to the bot alias. You can only add tags when you create an alias, you can't use the `PutBotAlias` operation to update the tags on a bot alias. To update tags, use the `TagResource` operation.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutBotAliasResponse {
  /**
   * The name of the alias.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the alias.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The version of the bot that the alias points to.
   *
   * @public
   */
  botVersion?: string | undefined;

  /**
   * The name of the bot that the alias points to.
   *
   * @public
   */
  botName?: string | undefined;

  /**
   * The date that the bot alias was updated. When you create a resource, the creation date and the last updated date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the bot alias was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The checksum for the current version of the alias.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The settings that determine how Amazon Lex uses conversation logs for the alias.
   *
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;

  /**
   * A list of tags associated with a bot.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutIntentRequest {
  /**
   * The name of the intent. The name is *not* case sensitive.
   *
   * The name can't match a built-in intent name, or a built-in intent name with "AMAZON." removed. For example, because there is a built-in intent called `AMAZON.HelpIntent`, you can't create a custom intent called `HelpIntent`.
   *
   * For a list of built-in intents, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents) in the *Alexa Skills Kit*.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of intent slots. At runtime, Amazon Lex elicits required slot values from the user using prompts defined in the slots. For more information, see how-it-works.
   *
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * An array of utterances (strings) that a user might say to signal the intent. For example, "I want \{PizzaSize\} pizza", "Order \{Quantity\} \{PizzaSize\} pizzas".
   *
   * In each utterance, a slot name is enclosed in curly braces.
   *
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * Prompts the user to confirm the intent. This question should have a yes or no answer.
   *
   * Amazon Lex uses this prompt to ensure that the user acknowledges that the intent is ready for fulfillment. For example, with the `OrderPizza` intent, you might want to confirm that the order is correct before placing it. For other intents, such as intents that simply respond to user questions, you might not need to ask the user for confirmation before providing the information.
   *
   * > **Note:** You you must provide both the `rejectionStatement` and the `confirmationPrompt`, or neither.
   *
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * When the user answers "no" to the question defined in `confirmationPrompt`, Amazon Lex responds with this statement to acknowledge that the intent was canceled.
   *
   * > **Note:** You must provide both the `rejectionStatement` and the `confirmationPrompt`, or neither.
   *
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * Amazon Lex uses this prompt to solicit additional activity after fulfilling an intent. For example, after the `OrderPizza` intent is fulfilled, you might prompt the user to order a drink.
   *
   * The action that Amazon Lex takes depends on the user's response, as follows:
   *
   * - If the user says "Yes" it responds with the clarification prompt that is configured for the bot.
   * - if the user says "Yes" and continues with an utterance that triggers an intent it starts a conversation for the intent.
   * - If the user says "No" it responds with the rejection statement configured for the the follow-up prompt.
   * - If it doesn't recognize the utterance it repeats the follow-up prompt again.
   *
   * The `followUpPrompt` field and the `conclusionStatement` field are mutually exclusive. You can specify only one.
   *
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * The statement that you want Amazon Lex to convey to the user after the intent is successfully fulfilled by the Lambda function.
   *
   * This element is relevant only if you provide a Lambda function in the `fulfillmentActivity`. If you return the intent to the client application, you can't specify this element.
   *
   * > **Note:** The `followUpPrompt` and `conclusionStatement` are mutually exclusive. You can specify only one.
   *
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * Specifies a Lambda function to invoke for each user input. You can invoke this Lambda function to personalize user interaction.
   *
   * For example, suppose your bot determines that the user is John. Your Lambda function might retrieve John's information from a backend database and prepopulate some of the values. For example, if you find that John is gluten intolerant, you might set the corresponding intent slot, `GlutenIntolerant`, to true. You might find John's phone number and set the corresponding session attribute.
   *
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * Required. Describes how the intent is fulfilled. For example, after a user provides all of the information for a pizza order, `fulfillmentActivity` defines how the bot places an order with a local pizza store.
   *
   * You might configure Amazon Lex to return all of the intent information to the client application, or direct it to invoke a Lambda function that can process the intent (for example, place an order with a pizzeria).
   *
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * A unique identifier for the built-in intent to base this intent on. To find the signature for an intent, see [Standard Built-in Intents](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents) in the *Alexa Skills Kit*.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * Identifies a specific revision of the `$LATEST` version.
   *
   * When you create a new intent, leave the `checksum` field blank. If you specify a checksum you get a `BadRequestException` exception.
   *
   * When you want to update a intent, set the `checksum` field to the checksum of the most recent revision of the `$LATEST` version. If you don't specify the `checksum` field, or if the checksum does not match the `$LATEST` version, you get a `PreconditionFailedException` exception.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * When set to `true` a new numbered version of the intent is created. This is the same as calling the `CreateIntentVersion` operation. If you do not specify `createVersion`, the default is `false`.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * Configuration information required to use the `AMAZON.KendraSearchIntent` intent to connect to an Amazon Kendra index. For more information, see [AMAZON.KendraSearchIntent](http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html).
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * An array of `InputContext` objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * An array of `OutputContext` objects that lists the contexts that the intent activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutIntentResponse {
  /**
   * The name of the intent.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the intent.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * An array of intent slots that are configured for the intent.
   *
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * An array of sample utterances that are configured for the intent.
   *
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * If defined in the intent, Amazon Lex prompts the user to confirm the intent before fulfilling it.
   *
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * If the user answers "no" to the question defined in `confirmationPrompt` Amazon Lex responds with this statement to acknowledge that the intent was canceled.
   *
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * If defined in the intent, Amazon Lex uses this prompt to solicit additional user activity after the intent is fulfilled.
   *
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * After the Lambda function specified in the`fulfillmentActivity`intent fulfills the intent, Amazon Lex conveys this statement to the user.
   *
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * If defined in the intent, Amazon Lex invokes this Lambda function for each user input.
   *
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * If defined in the intent, Amazon Lex invokes this Lambda function to fulfill the intent after the user provides all of the information required by the intent.
   *
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * A unique identifier for the built-in intent that this intent is based on.
   *
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * The date that the intent was updated. When you create a resource, the creation date and last update dates are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the intent was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the intent. For a new intent, the version is always `$LATEST`.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the `$LATEST`version of the intent created or updated.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * `True` if a new version of the intent was created. If the `createVersion` field was not specified in the request, the `createVersion` field is set to false in the response.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * Configuration information, if any, required to connect to an Amazon Kendra index and use the `AMAZON.KendraSearchIntent` intent.
   *
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * An array of `InputContext` objects that lists the contexts that must be active for Amazon Lex to choose the intent in a conversation with the user.
   *
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * An array of `OutputContext` objects that lists the contexts that the intent activates when the intent is fulfilled.
   *
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutSlotTypeRequest {
  /**
   * The name of the slot type. The name is *not* case sensitive.
   *
   * The name can't match a built-in slot type name, or a built-in slot type name with "AMAZON." removed. For example, because there is a built-in slot type called `AMAZON.DATE`, you can't create a custom slot type called `DATE`.
   *
   * For a list of built-in slot types, see [Slot Type Reference](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference) in the *Alexa Skills Kit*.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `EnumerationValue` objects that defines the values that the slot type can take. Each value can have a list of `synonyms`, which are additional values that help train the machine learning model about the values that it resolves for a slot.
   *
   * A regular expression slot type doesn't require enumeration values. All other slot types require a list of enumeration values.
   *
   * When Amazon Lex resolves a slot value, it generates a resolution list that contains up to five possible values for the slot. If you are using a Lambda function, this resolution list is passed to the function. If you are not using a Lambda function you can choose to return the value that the user entered or the first value in the resolution list as the slot value. The `valueSelectionStrategy` field indicates the option to use.
   *
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * Identifies a specific revision of the `$LATEST` version.
   *
   * When you create a new slot type, leave the `checksum` field blank. If you specify a checksum you get a `BadRequestException` exception.
   *
   * When you want to update a slot type, set the `checksum` field to the checksum of the most recent revision of the `$LATEST` version. If you don't specify the `checksum` field, or if the checksum does not match the `$LATEST` version, you get a `PreconditionFailedException` exception.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * Determines the slot resolution strategy that Amazon Lex uses to return slot type values. The field can be set to one of the following values:
   *
   * - `ORIGINAL_VALUE` - Returns the value entered by the user, if the user value is similar to the slot value.
   * - `TOP_RESOLUTION` - If there is a resolution list for the slot, return the first value in the resolution list as the slot type value. If there is no resolution list, null is returned.
   *
   * If you don't specify the `valueSelectionStrategy`, the default is `ORIGINAL_VALUE`.
   *
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * When set to `true` a new numbered version of the slot type is created. This is the same as calling the `CreateSlotTypeVersion` operation. If you do not specify `createVersion`, the default is `false`.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * The built-in slot type used as the parent of the slot type. When you define a parent slot type, the new slot type has all of the same configuration as the parent.
   *
   * Only `AMAZON.AlphaNumeric` is supported.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * Configuration information that extends the parent built-in slot type. The configuration is added to the settings for the parent slot type.
   *
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface PutSlotTypeResponse {
  /**
   * The name of the slot type.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A description of the slot type.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * A list of `EnumerationValue` objects that defines the values that the slot type can take.
   *
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * The date that the slot type was updated. When you create a slot type, the creation date and last update date are the same.
   *
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * The date that the slot type was created.
   *
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * The version of the slot type. For a new slot type, the version is always `$LATEST`.
   *
   * @public
   */
  version?: string | undefined;

  /**
   * Checksum of the `$LATEST` version of the slot type.
   *
   * @public
   */
  checksum?: string | undefined;

  /**
   * The slot resolution strategy that Amazon Lex uses to determine the value of the slot. For more information, see PutSlotType.
   *
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * `True` if a new version of the slot type was created. If the `createVersion` field was not specified in the request, the `createVersion` field is set to false in the response.
   *
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * The built-in slot type used as the parent of the slot type.
   *
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * Configuration information that extends the parent built-in slot type.
   *
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface StartImportRequest {
  /**
   * A zip archive in binary format. The archive should contain one file, a JSON file containing the resource to import. The resource should match the type specified in the `resourceType` field.
   *
   * @public
   */
  payload: Uint8Array | undefined;

  /**
   * Specifies the type of resource to export. Each resource also exports any resources that it depends on.
   *
   * - A bot exports dependent intents.
   * - An intent exports dependent slot types.
   *
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * Specifies the action that the `StartImport` operation should take when there is an existing resource with the same name.
   *
   * - FAIL_ON_CONFLICT - The import operation is stopped on the first conflict between a resource in the import file and an existing resource. The name of the resource causing the conflict is in the `failureReason` field of the response to the `GetImport` operation.
   *
   *   OVERWRITE_LATEST - The import operation proceeds even if there is a conflict with an existing resource. The $LASTEST version of the existing resource is overwritten with the data from the import file.
   *
   * @public
   */
  mergeStrategy: MergeStrategy | undefined;

  /**
   * A list of tags to add to the imported bot. You can only add tags when you import a bot, you can't add tags to an intent or slot type.
   *
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface StartImportResponse {
  /**
   * The name given to the import job.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The type of resource to import.
   *
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * The action to take when there is a merge conflict.
   *
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * The identifier for the specific import job.
   *
   * @public
   */
  importId?: string | undefined;

  /**
   * The status of the import job. If the status is `FAILED`, you can get the reason for the failure using the `GetImport` operation.
   *
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * A list of tags added to the imported bot.
   *
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * A timestamp for the date and time that the import job was requested.
   *
   * @public
   */
  createdDate?: Date | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface StartMigrationRequest {
  /**
   * The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.
   *
   * @public
   */
  v1BotName: string | undefined;

  /**
   * The version of the bot to migrate to Amazon Lex V2. You can migrate the `$LATEST` version as well as any numbered version.
   *
   * @public
   */
  v1BotVersion: string | undefined;

  /**
   * The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to.
   *
   * - If the Amazon Lex V2 bot doesn't exist, you must use the `CREATE_NEW` migration strategy.
   * - If the Amazon Lex V2 bot exists, you must use the `UPDATE_EXISTING` migration strategy to change the contents of the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotName: string | undefined;

  /**
   * The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotRole: string | undefined;

  /**
   * The strategy used to conduct the migration.
   *
   * - `CREATE_NEW` - Creates a new Amazon Lex V2 bot and migrates the Amazon Lex V1 bot to the new bot.
   * - `UPDATE_EXISTING` - Overwrites the existing Amazon Lex V2 bot metadata and the locale being migrated. It doesn't change any other locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale is created in the Amazon Lex V2 bot.
   *
   * @public
   */
  migrationStrategy: MigrationStrategy | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface StartMigrationResponse {
  /**
   * The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.
   *
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * The version of the bot to migrate to Amazon Lex V2.
   *
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * The locale used for the Amazon Lex V1 bot.
   *
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * The unique identifier for the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.
   *
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * The unique identifier that Amazon Lex assigned to the migration.
   *
   * @public
   */
  migrationId?: string | undefined;

  /**
   * The strategy used to conduct the migration.
   *
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * The date and time that the migration started.
   *
   * @public
   */
  migrationTimestamp?: Date | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys to add to the resource. If a tag key already exists, the existing value is replaced with the new value.
   *
   * @public
   */
  tags: Tag[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface TagResourceResponse {}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to remove the tags from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tag keys to remove from the resource. If a tag key does not exist on the resource, it is ignored.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @deprecated (since 2025-09-08) Amazon Lex V1 is deprecated. Use Amazon Lex V2 instead.
 * @public
 */
export interface UntagResourceResponse {}
