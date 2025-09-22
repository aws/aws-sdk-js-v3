// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { LexModelBuildingServiceServiceException as __BaseException } from "./LexModelBuildingServiceServiceException";

/**
 * <p>Your IAM user or role does not have permission to call the Amazon Lex V2 APIs
 *       required to migrate your bot.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
  }
}

/**
 * <p> There was a conflict processing the request. Try your request
 *       again. </p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 */
export interface CreateBotVersionRequest {
  /**
   * <p>The name of the bot that you want to create a new version of. The
   *       name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code> version
   *       of the bot. If you specify a checksum and the <code>$LATEST</code> version
   *       of the bot has a different checksum, a
   *         <code>PreconditionFailedException</code> exception is returned and Amazon Lex
   *       doesn't publish a new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   * @public
   */
  checksum?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContentType = {
  CUSTOM_PAYLOAD: "CustomPayload",
  PLAIN_TEXT: "PlainText",
  SSML: "SSML",
} as const;

/**
 * @public
 */
export type ContentType = (typeof ContentType)[keyof typeof ContentType];

/**
 * <p>The message object that provides the message text and its
 *       type.</p>
 * @public
 */
export interface Message {
  /**
   * <p>The content type of the message string.</p>
   * @public
   */
  contentType: ContentType | undefined;

  /**
   * <p>The text of the message.</p>
   * @public
   */
  content: string | undefined;

  /**
   * <p>Identifies the message group that the message belongs to. When a group
   *       is assigned to a message, Amazon Lex returns one message from each group in the
   *       response.</p>
   * @public
   */
  groupNumber?: number | undefined;
}

/**
 * <p>A collection of messages that convey information to the user. At
 *       runtime, Amazon Lex selects the message to convey. </p>
 * @public
 */
export interface Statement {
  /**
   * <p>A collection of message objects.</p>
   * @public
   */
  messages: Message[] | undefined;

  /**
   * <p> At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response.
   *       It substitutes all of the session attributes and slot values for
   *       placeholders in the response card. </p>
   * @public
   */
  responseCard?: string | undefined;
}

/**
 * <p>Obtains information from the user. To define a prompt, provide one
 *       or more messages and specify the number of attempts to get information
 *       from the user. If you provide more than one message, Amazon Lex chooses one of
 *       the messages to use to prompt the user. For more information, see <a>how-it-works</a>.</p>
 * @public
 */
export interface Prompt {
  /**
   * <p>An array of objects, each of which provides a message string and
   *       its type. You can specify the message string in plain text or in Speech
   *       Synthesis Markup Language (SSML).</p>
   * @public
   */
  messages: Message[] | undefined;

  /**
   * <p>The number of times to prompt the user for information.</p>
   * @public
   */
  maxAttempts: number | undefined;

  /**
   * <p>A response card. Amazon Lex uses this prompt at runtime, in the
   *         <code>PostText</code> API response. It substitutes session attributes
   *       and slot values for placeholders in the response card. For more
   *       information, see <a>ex-resp-card</a>. </p>
   * @public
   */
  responseCard?: string | undefined;
}

/**
 * <p>Identifies the specific version of an intent.</p>
 * @public
 */
export interface Intent {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  intentName: string | undefined;

  /**
   * <p>The version of the intent.</p>
   * @public
   */
  intentVersion: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Locale = {
  DE_DE: "de-DE",
  EN_AU: "en-AU",
  EN_GB: "en-GB",
  EN_IN: "en-IN",
  EN_US: "en-US",
  ES_419: "es-419",
  ES_ES: "es-ES",
  ES_US: "es-US",
  FR_CA: "fr-CA",
  FR_FR: "fr-FR",
  IT_IT: "it-IT",
  JA_JP: "ja-JP",
  KO_KR: "ko-KR",
} as const;

/**
 * @public
 */
export type Locale = (typeof Locale)[keyof typeof Locale];

/**
 * @public
 * @enum
 */
export const Status = {
  BUILDING: "BUILDING",
  FAILED: "FAILED",
  NOT_BUILT: "NOT_BUILT",
  READY: "READY",
  READY_BASIC_TESTING: "READY_BASIC_TESTING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface CreateBotVersionResponse {
  /**
   * <p>The name of the bot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * <p>The message that Amazon Lex uses when it doesn't understand the user's
   *       request. For more information, see <a>PutBot</a>. </p>
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * <p>The message that Amazon Lex uses to cancel a conversation. For more
   *       information, see <a>PutBot</a>.</p>
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * <p> When you send a request to create or update a bot, Amazon Lex sets the
   *         <code>status</code> response element to <code>BUILDING</code>. After
   *       Amazon Lex builds the bot, it sets <code>status</code> to <code>READY</code>.
   *       If Amazon Lex can't build the bot, it sets <code>status</code> to
   *         <code>FAILED</code>. Amazon Lex returns the reason for the failure in the
   *         <code>failureReason</code> response element. </p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to build the bot.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date when the <code>$LATEST</code> version of this bot was
   *       updated. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date when the bot version was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interactions
   *       with the user.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>Checksum identifying the version of the bot that was
   *       created.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The version of the bot. </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p> Specifies the target locale for the bot. </p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *       you must specify whether your use of Amazon Lex is related to a website,
   *       program, or other application that is directed or targeted, in whole or in
   *       part, to children under age 13 and subject to the Children's Online
   *       Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *         <code>false</code> in the <code>childDirected</code> field. By
   *       specifying <code>true</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is</b> related
   *       to a website, program, or other application that is directed or targeted,
   *       in whole or in part, to children under age 13 and subject to COPPA. By
   *       specifying <code>false</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is not</b>
   *       related to a website, program, or other application that is directed or
   *       targeted, in whole or in part, to children under age 13 and subject to
   *       COPPA. You may not specify a default value for the
   *         <code>childDirected</code> field that does not accurately reflect
   *       whether your use of Amazon Lex is related to a website, program, or other
   *       application that is directed or targeted, in whole or in part, to children
   *       under age 13 and subject to COPPA.</p>
   *          <p>If your use of Amazon Lex relates to a website, program, or other
   *       application that is directed in whole or in part, to children under age
   *       13, you must obtain any required verifiable parental consent under COPPA.
   *       For information regarding the use of Amazon Lex in connection with websites,
   *       programs, or other applications that are directed or targeted, in whole or
   *       in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a>
   *          </p>
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * <p>Indicates whether utterances entered by the user should be sent to
   *       Amazon Comprehend for sentiment analysis.</p>
   * @public
   */
  detectSentiment?: boolean | undefined;
}

/**
 * <p>An internal Amazon Lex error occurred. Try your request again.</p>
 * @public
 */
export class InternalFailureException extends __BaseException {
  readonly name: "InternalFailureException" = "InternalFailureException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalFailureException, __BaseException>) {
    super({
      name: "InternalFailureException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalFailureException.prototype);
  }
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 * @public
 */
export class NotFoundException extends __BaseException {
  readonly name: "NotFoundException" = "NotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NotFoundException, __BaseException>) {
    super({
      name: "NotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NotFoundException.prototype);
  }
}

/**
 * <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 * @public
 */
export class PreconditionFailedException extends __BaseException {
  readonly name: "PreconditionFailedException" = "PreconditionFailedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PreconditionFailedException, __BaseException>) {
    super({
      name: "PreconditionFailedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PreconditionFailedException.prototype);
  }
}

/**
 * @public
 */
export interface CreateIntentVersionRequest {
  /**
   * <p>The name of the intent that you want to create a new version of.
   *       The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the intent that
   *       should be used to create the new version. If you specify a checksum and
   *       the <code>$LATEST</code> version of the intent has a different checksum,
   *       Amazon Lex returns a <code>PreconditionFailedException</code> exception and
   *       doesn't publish a new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   * @public
   */
  checksum?: string | undefined;
}

/**
 * <p>Specifies a Lambda function that verifies requests to a bot or
 *       fulfills the user's request to a bot..</p>
 * @public
 */
export interface CodeHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   * @public
   */
  uri: string | undefined;

  /**
   * <p>The version of the request-response that you want Amazon Lex to use to
   *       invoke your Lambda function. For more information, see <a>using-lambda</a>.</p>
   * @public
   */
  messageVersion: string | undefined;
}

/**
 * <p>A prompt for additional activity after an intent is fulfilled. For
 *       example, after the <code>OrderPizza</code> intent is fulfilled, you might
 *       prompt the user to find out whether the user wants to order
 *       drinks.</p>
 * @public
 */
export interface FollowUpPrompt {
  /**
   * <p>Prompts for information from the user. </p>
   * @public
   */
  prompt: Prompt | undefined;

  /**
   * <p>If the user answers "no" to the question defined in the
   *         <code>prompt</code> field, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   * @public
   */
  rejectionStatement: Statement | undefined;
}

/**
 * @public
 * @enum
 */
export const FulfillmentActivityType = {
  CODE_HOOK: "CodeHook",
  RETURN_INTENT: "ReturnIntent",
} as const;

/**
 * @public
 */
export type FulfillmentActivityType = (typeof FulfillmentActivityType)[keyof typeof FulfillmentActivityType];

/**
 * <p> Describes how the intent is fulfilled after the user provides all
 *       of the information required for the intent. You can provide a Lambda
 *       function to process the intent, or you can return the intent information
 *       to the client application. We recommend that you use a Lambda function so
 *       that the relevant logic lives in the Cloud and limit the client-side code
 *       primarily to presentation. If you need to update the logic, you only
 *       update the Lambda function; you don't need to upgrade your client
 *       application. </p>
 *          <p>Consider the following examples:</p>
 *          <ul>
 *             <li>
 *                <p>In a pizza ordering application, after the user provides all of
 *           the information for placing an order, you use a Lambda function to
 *           place an order with a pizzeria. </p>
 *             </li>
 *             <li>
 *                <p>In a gaming application, when a user says "pick up a rock,"
 *           this information must go back to the client application so that it can
 *           perform the operation and update the graphics. In this case, you want
 *           Amazon Lex to return the intent data to the client. </p>
 *             </li>
 *          </ul>
 * @public
 */
export interface FulfillmentActivity {
  /**
   * <p> How the intent should be fulfilled, either by running a Lambda
   *       function or by returning the slot data to the client application.
   *     </p>
   * @public
   */
  type: FulfillmentActivityType | undefined;

  /**
   * <p> A description of the Lambda function that is run to fulfill the
   *       intent. </p>
   * @public
   */
  codeHook?: CodeHook | undefined;
}

/**
 * <p>The name of a context that must be active for an intent to be selected
 *       by Amazon Lex.</p>
 * @public
 */
export interface InputContext {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Provides configuration information for the AMAZON.KendraSearchIntent
 *       intent. When you use this intent, Amazon Lex searches the specified Amazon
 *       Kendra index and returns documents from the index that match the user's
 *       utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html">
 *         AMAZON.KendraSearchIntent</a>.</p>
 * @public
 */
export interface KendraConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kendra index that you
   *       want the AMAZON.KendraSearchIntent intent to search. The index must be in
   *       the same account and Region as the Amazon Lex bot. If the Amazon Kendra index
   *       does not exist, you get an exception when you call the
   *         <code>PutIntent</code> operation.</p>
   * @public
   */
  kendraIndex: string | undefined;

  /**
   * <p>A query filter that Amazon Lex sends to Amazon Kendra to filter the
   *       response from the query. The filter is in the format defined by Amazon
   *       Kendra. For more information, see <a href="http://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering
   *         queries</a>.</p>
   *          <p>You can override this filter string with a new filter string at
   *       runtime.</p>
   * @public
   */
  queryFilterString?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *       search the Amazon Kendra index. The role must be in the same account and
   *       Region as the Amazon Lex bot. If the role does not exist, you get an exception
   *       when you call the <code>PutIntent</code> operation.</p>
   * @public
   */
  role: string | undefined;
}

/**
 * <p>The specification of an output context that is set when an intent is
 *       fulfilled.</p>
 * @public
 */
export interface OutputContext {
  /**
   * <p>The name of the context.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The number of seconds that the context should be active after it is
   *       first sent in a <code>PostContent</code> or <code>PostText</code>
   *       response. You can set the value between 5 and 86,400 seconds (24
   *       hours).</p>
   * @public
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of conversation turns that the context should be active. A
   *       conversation turn is one <code>PostContent</code> or <code>PostText</code>
   *       request and the corresponding response from Amazon Lex.</p>
   * @public
   */
  turnsToLive: number | undefined;
}

/**
 * <p>A default value for a slot.</p>
 * @public
 */
export interface SlotDefaultValue {
  /**
   * <p>The default value for the slot. You can specify one of the
   *       following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>#context-name.slot-name</code> - The slot value "slot-name"
   *           in the context "context-name."</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>\{attribute\}</code> - The slot value of the session attribute
   *           "attribute."</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'value'</code> - The discrete value "value."</p>
   *             </li>
   *          </ul>
   * @public
   */
  defaultValue: string | undefined;
}

/**
 * <p>Contains the default values for a slot. Default values are used when
 *       Amazon Lex hasn't determined a value for a slot.</p>
 * @public
 */
export interface SlotDefaultValueSpec {
  /**
   * <p>The default values for a slot. You can specify more than one default.
   *       For example, you can specify a default value to use from a matching
   *       context variable, a session attribute, or a fixed value.</p>
   *          <p>The default value chosen is selected based on the order that you
   *       specify them in the list. For example, if you specify a context variable
   *       and a fixed value in that order, Amazon Lex uses the context variable if it is
   *       available, else it uses the fixed value.</p>
   * @public
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ObfuscationSetting = {
  DEFAULT_OBFUSCATION: "DEFAULT_OBFUSCATION",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type ObfuscationSetting = (typeof ObfuscationSetting)[keyof typeof ObfuscationSetting];

/**
 * @public
 * @enum
 */
export const SlotConstraint = {
  OPTIONAL: "Optional",
  REQUIRED: "Required",
} as const;

/**
 * @public
 */
export type SlotConstraint = (typeof SlotConstraint)[keyof typeof SlotConstraint];

/**
 * <p>Identifies the version of a specific slot.</p>
 * @public
 */
export interface Slot {
  /**
   * <p>The name of the slot.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the slot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Specifies whether the slot is required or optional. </p>
   * @public
   */
  slotConstraint: SlotConstraint | undefined;

  /**
   * <p>The type of the slot, either a custom slot type that you defined or
   *       one of the built-in slot types.</p>
   * @public
   */
  slotType?: string | undefined;

  /**
   * <p>The version of the slot type.</p>
   * @public
   */
  slotTypeVersion?: string | undefined;

  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the
   *       user.</p>
   * @public
   */
  valueElicitationPrompt?: Prompt | undefined;

  /**
   * <p> Directs Amazon Lex the order in which to elicit this slot value from
   *       the user. For example, if the intent has two slots with priorities 1 and
   *       2, AWS Amazon Lex first elicits a value for the slot with priority 1.</p>
   *          <p>If multiple slots share the same priority, the order in which Amazon Lex
   *       elicits values is arbitrary.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p> If you know a specific pattern with which users might respond to
   *       an Amazon Lex request for a slot value, you can provide those utterances to
   *       improve accuracy. This is optional. In most cases, Amazon Lex is capable of
   *       understanding user utterances. </p>
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * <p> A set of possible responses for the slot type used by text-based
   *       clients. A user chooses an option from the response card, instead of using
   *       text to reply. </p>
   * @public
   */
  responseCard?: string | undefined;

  /**
   * <p>Determines whether a slot is obfuscated in conversation logs and
   *       stored utterances. When you obfuscate a slot, the value is replaced by the
   *       slot name in curly braces (\{\}). For example, if the slot name is
   *       "full_name", obfuscated values are replaced with "\{full_name\}". For more
   *       information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html"> Slot Obfuscation </a>.
   *     </p>
   * @public
   */
  obfuscationSetting?: ObfuscationSetting | undefined;

  /**
   * <p>A list of default values for the slot. Default values are used when
   *       Amazon Lex hasn't determined a value for a slot. You can specify default values
   *       from context variables, session attributes, and defined values.</p>
   * @public
   */
  defaultValueSpec?: SlotDefaultValueSpec | undefined;
}

/**
 * @public
 */
export interface CreateIntentVersionResponse {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the intent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of slot types that defines the information required to
   *       fulfill the intent.</p>
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * <p>An array of sample utterances configured for the intent. </p>
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * <p>If defined, the prompt that Amazon Lex uses to confirm the user's
   *       intent before fulfilling it. </p>
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * <p>If defined, Amazon Lex uses this prompt to solicit additional user
   *       activity after the intent is fulfilled. </p>
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * <p>After the Lambda function specified in the
   *         <code>fulfillmentActivity</code> field fulfills the intent, Amazon Lex
   *       conveys this statement to the user. </p>
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * <p>If defined, Amazon Lex invokes this Lambda function for each user
   *       input.</p>
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * <p> Describes how the intent is fulfilled. </p>
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * <p>The date that the intent was updated. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the intent was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version number assigned to the new version of the
   *       intent.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the intent version created.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Configuration information, if any, for connecting an Amazon Kendra
   *       index with the <code>AMAZON.KendraSearchIntent</code> intent.</p>
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @public
 */
export interface CreateSlotTypeVersionRequest {
  /**
   * <p>The name of the slot type that you want to create a new version
   *       for. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Checksum for the <code>$LATEST</code> version of the slot type that
   *       you want to publish. If you specify a checksum and the
   *         <code>$LATEST</code> version of the slot type has a different checksum,
   *       Amazon Lex returns a <code>PreconditionFailedException</code> exception and
   *       doesn't publish the new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   * @public
   */
  checksum?: string | undefined;
}

/**
 * <p>Each slot type can have a set of values. Each enumeration value
 *       represents a value the slot type can take. </p>
 *          <p>For example, a pizza ordering bot could have a slot type that
 *       specifies the type of crust that the pizza should have. The slot type
 *       could include the values </p>
 *          <ul>
 *             <li>
 *                <p>thick</p>
 *             </li>
 *             <li>
 *                <p>thin</p>
 *             </li>
 *             <li>
 *                <p>stuffed</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface EnumerationValue {
  /**
   * <p>The value of the slot type.</p>
   * @public
   */
  value: string | undefined;

  /**
   * <p>Additional values related to the slot type value.</p>
   * @public
   */
  synonyms?: string[] | undefined;
}

/**
 * <p>Provides a regular expression used to validate the value of a
 *       slot.</p>
 * @public
 */
export interface SlotTypeRegexConfiguration {
  /**
   * <p>A regular expression used to validate the value of a slot. </p>
   *          <p>Use a standard regular expression. Amazon Lex supports the following
   *       characters in the regular expression:</p>
   *          <ul>
   *             <li>
   *                <p>A-Z, a-z</p>
   *             </li>
   *             <li>
   *                <p>0-9</p>
   *             </li>
   *             <li>
   *                <p>Unicode characters ("\ u<Unicode>")</p>
   *             </li>
   *          </ul>
   *          <p>Represent Unicode characters with four digits, for example
   *       "\u0041" or "\u005A".</p>
   *          <p>The following regular expression operators are not supported:</p>
   *          <ul>
   *             <li>
   *                <p>Infinite repeaters: *, +, or \{x,\} with no upper bound.</p>
   *             </li>
   *             <li>
   *                <p>Wild card (.)</p>
   *             </li>
   *          </ul>
   * @public
   */
  pattern: string | undefined;
}

/**
 * <p>Provides configuration information for a slot type.</p>
 * @public
 */
export interface SlotTypeConfiguration {
  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   * @public
   */
  regexConfiguration?: SlotTypeRegexConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const SlotValueSelectionStrategy = {
  ORIGINAL_VALUE: "ORIGINAL_VALUE",
  TOP_RESOLUTION: "TOP_RESOLUTION",
} as const;

/**
 * @public
 */
export type SlotValueSelectionStrategy = (typeof SlotValueSelectionStrategy)[keyof typeof SlotValueSelectionStrategy];

/**
 * @public
 */
export interface CreateSlotTypeVersionResponse {
  /**
   * <p>The name of the slot type.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last update date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the slot type was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version assigned to the new slot type version. </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The strategy that Amazon Lex uses to determine the value of the slot.
   *       For more information, see <a>PutSlotType</a>.</p>
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * <p>The built-in slot type used a the parent of the slot type.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteBotRequest {
  /**
   * <p>The name of the bot. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * <p>Describes the resource that refers to the resource that you are
 *       attempting to delete. This object is returned as part of the
 *         <code>ResourceInUseException</code> exception. </p>
 * @public
 */
export interface ResourceReference {
  /**
   * <p>The name of the resource that is using the resource that you are
   *       trying to delete.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the resource that is using the resource that you are
   *       trying to delete.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReferenceType = {
  BOT: "Bot",
  BOTALIAS: "BotAlias",
  BOTCHANNEL: "BotChannel",
  INTENT: "Intent",
} as const;

/**
 * @public
 */
export type ReferenceType = (typeof ReferenceType)[keyof typeof ReferenceType];

/**
 * <p>The resource that you are attempting to delete is referred to by
 *       another resource. Use this information to remove references to the
 *       resource that you are trying to delete.</p>
 *          <p>The body of the exception contains a JSON object that describes the
 *       resource.</p>
 *          <p>
 *             <code>\{ "resourceType": BOT | BOTALIAS | BOTCHANNEL |
 *         INTENT,</code>
 *          </p>
 *          <p>
 *             <code>"resourceReference": \{</code>
 *          </p>
 *          <p>
 *             <code>"name": <i>string</i>, "version":
 *           <i>string</i> \} \}</code>
 *          </p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  referenceType?: ReferenceType | undefined;
  /**
   * <p>Describes the resource that refers to the resource that you are
   *       attempting to delete. This object is returned as part of the
   *         <code>ResourceInUseException</code> exception. </p>
   * @public
   */
  exampleReference?: ResourceReference | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
    this.referenceType = opts.referenceType;
    this.exampleReference = opts.exampleReference;
  }
}

/**
 * @public
 */
export interface DeleteBotAliasRequest {
  /**
   * <p>The name of the alias to delete. The name is case sensitive.
   *     </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the bot that the alias points to.</p>
   * @public
   */
  botName: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotChannelAssociationRequest {
  /**
   * <p>The name of the association. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>An alias that points to the specific version of the Amazon Lex bot to
   *       which this association is being made.</p>
   * @public
   */
  botAlias: string | undefined;
}

/**
 * @public
 */
export interface DeleteBotVersionRequest {
  /**
   * <p>The name of the bot.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the bot to delete. You cannot delete the
   *         <code>$LATEST</code> version of the bot. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteBot</a>
   *       operation.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntentRequest {
  /**
   * <p>The name of the intent. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntentVersionRequest {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the intent to delete. You cannot delete the
   *         <code>$LATEST</code> version of the intent. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteIntent</a>
   *       operation.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotTypeRequest {
  /**
   * <p>The name of the slot type. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlotTypeVersionRequest {
  /**
   * <p>The name of the slot type.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the slot type to delete. You cannot delete the
   *         <code>$LATEST</code> version of the slot type. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteSlotType</a>
   *       operation.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface DeleteUtterancesRequest {
  /**
   * <p>The name of the bot that stored the utterances.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p> The unique identifier for the user that made the utterances. This
   *       is the user ID that was sent in the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> operation request that contained the
   *       utterance.</p>
   * @public
   */
  userId: string | undefined;
}

/**
 * @public
 */
export interface GetBotRequest {
  /**
   * <p>The name of the bot. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version or alias of the bot.</p>
   * @public
   */
  versionOrAlias: string | undefined;
}

/**
 * @public
 */
export interface GetBotResponse {
  /**
   * <p>The name of the bot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of <code>intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * <p>The score that determines where Amazon Lex inserts the
   *         <code>AMAZON.FallbackIntent</code>,
   *         <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *       alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or
   *         <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response.
   *         <code>AMAZON.FallbackIntent</code> is inserted if the confidence score
   *       for all intents is below this value.
   *         <code>AMAZON.KendraSearchIntent</code> is only inserted if it is
   *       configured for the bot.</p>
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * <p>The message Amazon Lex uses when it doesn't understand the user's
   *       request. For more information, see <a>PutBot</a>. </p>
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * <p>The message that Amazon Lex returns when the user elects to end the
   *       conversation without completing it. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * <p>The status of the bot. </p>
   *          <p>When the status is <code>BUILDING</code> Amazon Lex is building the bot
   *       for testing and use.</p>
   *          <p>If the status of the bot is <code>READY_BASIC_TESTING</code>, you
   *       can test the bot using the exact utterances specified in the bot's
   *       intents. When the bot is ready for full testing or to run, the status is
   *         <code>READY</code>.</p>
   *          <p>If there was a problem with building the bot, the status is
   *         <code>FAILED</code> and the <code>failureReason</code> field explains
   *       why the bot did not build.</p>
   *          <p>If the bot was saved but not built, the status is
   *         <code>NOT_BUILT</code>.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex explains why
   *       it failed to build the bot.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date that the bot was updated. When you create a resource, the
   *       creation date and last updated date are the same. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction
   *       with the user. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>Checksum of the bot used to identify a specific revision of the
   *       bot's <code>$LATEST</code> version.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p> The target locale for the bot. </p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *       you must specify whether your use of Amazon Lex is related to a website,
   *       program, or other application that is directed or targeted, in whole or in
   *       part, to children under age 13 and subject to the Children's Online
   *       Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *         <code>false</code> in the <code>childDirected</code> field. By
   *       specifying <code>true</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is</b> related
   *       to a website, program, or other application that is directed or targeted,
   *       in whole or in part, to children under age 13 and subject to COPPA. By
   *       specifying <code>false</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is not</b>
   *       related to a website, program, or other application that is directed or
   *       targeted, in whole or in part, to children under age 13 and subject to
   *       COPPA. You may not specify a default value for the
   *         <code>childDirected</code> field that does not accurately reflect
   *       whether your use of Amazon Lex is related to a website, program, or other
   *       application that is directed or targeted, in whole or in part, to children
   *       under age 13 and subject to COPPA.</p>
   *          <p>If your use of Amazon Lex relates to a website, program, or other
   *       application that is directed in whole or in part, to children under age
   *       13, you must obtain any required verifiable parental consent under COPPA.
   *       For information regarding the use of Amazon Lex in connection with websites,
   *       programs, or other applications that are directed or targeted, in whole or
   *       in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a>
   *          </p>
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * <p>Indicates whether user utterances should be sent to Amazon Comprehend
   *       for sentiment analysis.</p>
   * @public
   */
  detectSentiment?: boolean | undefined;
}

/**
 * @public
 */
export interface GetBotAliasRequest {
  /**
   * <p>The name of the bot alias. The name is case sensitive.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the bot.</p>
   * @public
   */
  botName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Destination = {
  CLOUDWATCH_LOGS: "CLOUDWATCH_LOGS",
  S3: "S3",
} as const;

/**
 * @public
 */
export type Destination = (typeof Destination)[keyof typeof Destination];

/**
 * @public
 * @enum
 */
export const LogType = {
  AUDIO: "AUDIO",
  TEXT: "TEXT",
} as const;

/**
 * @public
 */
export type LogType = (typeof LogType)[keyof typeof LogType];

/**
 * <p>The settings for conversation logs.</p>
 * @public
 */
export interface LogSettingsResponse {
  /**
   * <p>The type of logging that is enabled.</p>
   * @public
   */
  logType?: LogType | undefined;

  /**
   * <p>The destination where logs are delivered.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the key used to encrypt audio logs
   *       in an S3 bucket.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3
   *       bucket where the logs are delivered.</p>
   * @public
   */
  resourceArn?: string | undefined;

  /**
   * <p>The resource prefix is the first part of the S3 object key within the
   *       S3 bucket that you specified to contain audio logs. For CloudWatch Logs it
   *       is the prefix of the log stream name within the log group that you
   *       specified. </p>
   * @public
   */
  resourcePrefix?: string | undefined;
}

/**
 * <p>Contains information about conversation log settings.</p>
 * @public
 */
export interface ConversationLogsResponse {
  /**
   * <p>The settings for your conversation logs. You can log text, audio, or
   *       both.</p>
   * @public
   */
  logSettings?: LogSettingsResponse[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to write your logs
   *       to CloudWatch Logs or an S3 bucket.</p>
   * @public
   */
  iamRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetBotAliasResponse {
  /**
   * <p>The name of the bot alias.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot that the alias points to.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The name of the bot that the alias points to.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and the last updated date are the
   *       same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot alias was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>Checksum of the bot alias.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;
}

/**
 * @public
 */
export interface GetBotAliasesRequest {
  /**
   * <p>The name of the bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of aliases. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of aliases, specify the pagination
   *       token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of aliases to return in the response. The
   *       default is 50. . </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Substring to match in bot alias names. An alias will be returned if
   *       any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * <p>Provides information about a bot alias.</p>
 * @public
 */
export interface BotAliasMetadata {
  /**
   * <p>The name of the bot alias.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the Amazon Lex bot to which the alias points.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The name of the bot to which the alias points.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and last updated date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot alias was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>Checksum of the bot alias.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;
}

/**
 * @public
 */
export interface GetBotAliasesResponse {
  /**
   * <p>An array of <code>BotAliasMetadata</code> objects, each describing
   *       a bot alias.</p>
   * @public
   */
  BotAliases?: BotAliasMetadata[] | undefined;

  /**
   * <p>A pagination token for fetching next page of aliases. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of aliases, specify the pagination
   *       token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBotChannelAssociationRequest {
  /**
   * <p>The name of the association between the bot and the channel. The
   *       name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   * @public
   */
  botAlias: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChannelStatus = {
  CREATED: "CREATED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ChannelStatus = (typeof ChannelStatus)[keyof typeof ChannelStatus];

/**
 * @public
 * @enum
 */
export const ChannelType = {
  FACEBOOK: "Facebook",
  KIK: "Kik",
  SLACK: "Slack",
  TWILIO_SMS: "Twilio-Sms",
} as const;

/**
 * @public
 */
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * @public
 */
export interface GetBotChannelAssociationResponse {
  /**
   * <p>The name of the association between the bot and the
   *       channel.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the association between the bot and the
   *       channel.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   * @public
   */
  botAlias?: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The date that the association between the bot and the channel was
   *       created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The type of the messaging platform.</p>
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * <p>Provides information that the messaging platform needs to
   *       communicate with the Amazon Lex bot.</p>
   * @public
   */
  botConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The status of the bot channel. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The channel has been created and is
   *           ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Channel creation is in
   *           progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - There was an error creating the channel.
   *           For information about the reason for the failure, see the
   *             <code>failureReason</code> field.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to create the association.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetBotChannelAssociationsRequest {
  /**
   * <p>The name of the Amazon Lex bot in the association.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   * @public
   */
  botAlias: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of associations. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of associations, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of associations to return in the response. The
   *       default is 50. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Substring to match in channel association names. An association
   *       will be returned if any part of its name matches the substring. For
   *       example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot
   *       channel associations, use a hyphen ("-") as the <code>nameContains</code>
   *       parameter.</p>
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * <p>Represents an association between an Amazon Lex bot and an external
 *       messaging platform.</p>
 * @public
 */
export interface BotChannelAssociation {
  /**
   * <p>The name of the association between the bot and the channel.
   *     </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A text description of the association you are creating. </p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made. </p>
   * @public
   */
  botAlias?: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot to which this association is being made. </p>
   *          <note>
   *             <p>Currently, Amazon Lex supports associations with Facebook and Slack,
   *         and Twilio.</p>
   *          </note>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The date that the association between the Amazon Lex bot and the channel
   *       was created. </p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>Specifies the type of association by indicating the type of channel
   *       being established between the Amazon Lex bot and the external messaging
   *       platform.</p>
   * @public
   */
  type?: ChannelType | undefined;

  /**
   * <p>Provides information necessary to communicate with the messaging
   *       platform. </p>
   * @public
   */
  botConfiguration?: Record<string, string> | undefined;

  /**
   * <p>The status of the bot channel. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATED</code> - The channel has been created and is
   *           ready for use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - Channel creation is in
   *           progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - There was an error creating the channel.
   *           For information about the reason for the failure, see the
   *             <code>failureReason</code> field.</p>
   *             </li>
   *          </ul>
   * @public
   */
  status?: ChannelStatus | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to create the association.</p>
   * @public
   */
  failureReason?: string | undefined;
}

/**
 * @public
 */
export interface GetBotChannelAssociationsResponse {
  /**
   * <p>An array of objects, one for each association, that provides
   *       information about the Amazon Lex bot and its association with the channel.
   *     </p>
   * @public
   */
  botChannelAssociations?: BotChannelAssociation[] | undefined;

  /**
   * <p>A pagination token that fetches the next page of associations. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of associations, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBotsRequest {
  /**
   * <p>A pagination token that fetches the next page of bots. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of bots, specify the pagination token
   *       in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of bots to return in the response that the
   *       request will return. The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Substring to match in bot names. A bot will be returned if any part
   *       of its name matches the substring. For example, "xyz" matches both
   *       "xyzabc" and "abcxyz."</p>
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * <p>Provides information about a bot. .</p>
 * @public
 */
export interface BotMetadata {
  /**
   * <p>The name of the bot. </p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The status of the bot.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>The date that the bot was updated. When you create a bot, the
   *       creation date and last updated date are the same. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetBotsResponse {
  /**
   * <p>An array of <code>botMetadata</code> objects, with one entry for
   *       each bot. </p>
   * @public
   */
  bots?: BotMetadata[] | undefined;

  /**
   * <p>If the response is truncated, it includes a pagination token that
   *       you can specify in your next request to fetch the next page of bots.
   *     </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBotVersionsRequest {
  /**
   * <p>The name of the bot for which versions should be
   *       returned.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of bot versions. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of bot versions to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetBotVersionsResponse {
  /**
   * <p>An array of <code>BotMetadata</code> objects, one for each numbered
   *       version of the bot plus one for the <code>$LATEST</code>
   *       version.</p>
   * @public
   */
  bots?: BotMetadata[] | undefined;

  /**
   * <p>A pagination token for fetching the next page of bot versions. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBuiltinIntentRequest {
  /**
   * <p>The unique identifier for a built-in intent. To find the signature
   *       for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  signature: string | undefined;
}

/**
 * <p>Provides information about a slot used in a built-in
 *       intent.</p>
 * @public
 */
export interface BuiltinIntentSlot {
  /**
   * <p>A list of the slots defined for the intent.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetBuiltinIntentResponse {
  /**
   * <p>The unique identifier for a built-in intent.</p>
   * @public
   */
  signature?: string | undefined;

  /**
   * <p>A list of locales that the intent supports.</p>
   * @public
   */
  supportedLocales?: Locale[] | undefined;

  /**
   * <p>An array of <code>BuiltinIntentSlot</code> objects, one entry for
   *       each slot type in the intent.</p>
   * @public
   */
  slots?: BuiltinIntentSlot[] | undefined;
}

/**
 * @public
 */
export interface GetBuiltinIntentsRequest {
  /**
   * <p>A list of locales that the intent supports.</p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>Substring to match in built-in intent signatures. An intent will be
   *       returned if any part of its signature matches the substring. For example,
   *       "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an
   *       intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  signatureContains?: string | undefined;

  /**
   * <p>A pagination token that fetches the next page of intents. If this
   *       API call is truncated, Amazon Lex returns a pagination token in the response.
   *       To fetch the next page of intents, use the pagination token in the next
   *       request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of intents to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides metadata for a built-in intent.</p>
 * @public
 */
export interface BuiltinIntentMetadata {
  /**
   * <p>A unique identifier for the built-in intent. To find the signature
   *       for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  signature?: string | undefined;

  /**
   * <p>A list of identifiers for the locales that the intent
   *       supports.</p>
   * @public
   */
  supportedLocales?: Locale[] | undefined;
}

/**
 * @public
 */
export interface GetBuiltinIntentsResponse {
  /**
   * <p>An array of <code>builtinIntentMetadata</code> objects, one for
   *       each intent in the response.</p>
   * @public
   */
  intents?: BuiltinIntentMetadata[] | undefined;

  /**
   * <p>A pagination token that fetches the next page of intents. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of intents, specify the pagination
   *       token in the next request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetBuiltinSlotTypesRequest {
  /**
   * <p>A list of locales that the slot type supports.</p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>Substring to match in built-in slot type signatures. A slot type
   *       will be returned if any part of its signature matches the substring. For
   *       example, "xyz" matches both "xyzabc" and "abcxyz."</p>
   * @public
   */
  signatureContains?: string | undefined;

  /**
   * <p>A pagination token that fetches the next page of slot types. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of slot types, specify the
   *       pagination token in the next request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of slot types to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Provides information about a built in slot type.</p>
 * @public
 */
export interface BuiltinSlotTypeMetadata {
  /**
   * <p>A unique identifier for the built-in slot type. To find the
   *       signature for a slot type, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  signature?: string | undefined;

  /**
   * <p>A list of target locales for the slot. </p>
   * @public
   */
  supportedLocales?: Locale[] | undefined;
}

/**
 * @public
 */
export interface GetBuiltinSlotTypesResponse {
  /**
   * <p>An array of <code>BuiltInSlotTypeMetadata</code> objects, one entry
   *       for each slot type returned.</p>
   * @public
   */
  slotTypes?: BuiltinSlotTypeMetadata[] | undefined;

  /**
   * <p>If the response is truncated, the response includes a pagination
   *       token that you can use in your next request to fetch the next page of slot
   *       types.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportType = {
  ALEXA_SKILLS_KIT: "ALEXA_SKILLS_KIT",
  LEX: "LEX",
} as const;

/**
 * @public
 */
export type ExportType = (typeof ExportType)[keyof typeof ExportType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  BOT: "BOT",
  INTENT: "INTENT",
  SLOT_TYPE: "SLOT_TYPE",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 */
export interface GetExportRequest {
  /**
   * <p>The name of the bot to export.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the bot to export.</p>
   * @public
   */
  version: string | undefined;

  /**
   * <p>The type of resource to export. </p>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>The format of the exported data.</p>
   * @public
   */
  exportType: ExportType | undefined;
}

/**
 * @public
 * @enum
 */
export const ExportStatus = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  READY: "READY",
} as const;

/**
 * @public
 */
export type ExportStatus = (typeof ExportStatus)[keyof typeof ExportStatus];

/**
 * @public
 */
export interface GetExportResponse {
  /**
   * <p>The name of the bot being exported.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The version of the bot being exported.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>The type of the exported resource.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The format of the exported data.</p>
   * @public
   */
  exportType?: ExportType | undefined;

  /**
   * <p>The status of the export. </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>IN_PROGRESS</code> - The export is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>READY</code> - The export is complete.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> - The export could not be
   *           completed.</p>
   *             </li>
   *          </ul>
   * @public
   */
  exportStatus?: ExportStatus | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to export the resource.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>An S3 pre-signed URL that provides the location of the exported
   *       resource. The exported resource is a ZIP archive that contains the
   *       exported resource in JSON format. The structure of the archive may change.
   *       Your code should not rely on the archive structure.</p>
   * @public
   */
  url?: string | undefined;
}

/**
 * @public
 */
export interface GetImportRequest {
  /**
   * <p>The identifier of the import job information to return.</p>
   * @public
   */
  importId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ImportStatus = {
  COMPLETE: "COMPLETE",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type ImportStatus = (typeof ImportStatus)[keyof typeof ImportStatus];

/**
 * @public
 * @enum
 */
export const MergeStrategy = {
  FAIL_ON_CONFLICT: "FAIL_ON_CONFLICT",
  OVERWRITE_LATEST: "OVERWRITE_LATEST",
} as const;

/**
 * @public
 */
export type MergeStrategy = (typeof MergeStrategy)[keyof typeof MergeStrategy];

/**
 * @public
 */
export interface GetImportResponse {
  /**
   * <p>The name given to the import job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of resource imported.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The action taken when there was a conflict between an existing
   *       resource and a resource in the import file.</p>
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * <p>The identifier for the specific import job.</p>
   * @public
   */
  importId?: string | undefined;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>,
   *       you can get the reason for the failure from the <code>failureReason</code>
   *       field.</p>
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * <p>A string that describes why an import job failed to
   *       complete.</p>
   * @public
   */
  failureReason?: string[] | undefined;

  /**
   * <p>A timestamp for the date and time that the import job was
   *       created.</p>
   * @public
   */
  createdDate?: Date | undefined;
}

/**
 * @public
 */
export interface GetIntentRequest {
  /**
   * <p>The name of the intent. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the intent.</p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetIntentResponse {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the intent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of intent slots configured for the intent.</p>
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * <p>An array of sample utterances configured for the intent.</p>
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * <p>If defined in the bot, Amazon Lex uses prompt to confirm the intent
   *       before fulfilling the user's request. For more information, see <a>PutIntent</a>. </p>
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * <p>If defined in the bot, Amazon Lex uses this prompt to solicit additional
   *       user activity after the intent is fulfilled. For more information, see
   *         <a>PutIntent</a>.</p>
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * <p>After the Lambda function specified in the
   *         <code>fulfillmentActivity</code> element fulfills the intent, Amazon Lex
   *       conveys this statement to the user.</p>
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * <p>If defined in the bot, Amazon Amazon Lex invokes this Lambda function
   *       for each user input. For more information, see <a>PutIntent</a>. </p>
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * <p>Describes how the intent is fulfilled. For more information, see
   *         <a>PutIntent</a>. </p>
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * <p>The date that the intent was updated. When you create a resource,
   *       the creation date and the last updated date are the same. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the intent was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the intent.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the intent.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Configuration information, if any, to connect to an Amazon Kendra
   *       index with the <code>AMAZON.KendraSearchIntent</code> intent.</p>
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @public
 */
export interface GetIntentsRequest {
  /**
   * <p>A pagination token that fetches the next page of intents. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of intents, specify the pagination
   *       token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of intents to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Substring to match in intent names. An intent will be returned if
   *       any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * <p>Provides information about an intent.</p>
 * @public
 */
export interface IntentMetadata {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the intent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date that the intent was updated. When you create an intent,
   *       the creation date and last updated date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the intent was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the intent.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetIntentsResponse {
  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   * @public
   */
  intents?: IntentMetadata[] | undefined;

  /**
   * <p>If the response is truncated, the response includes a pagination
   *       token that you can specify in your next request to fetch the next page of
   *       intents. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntentVersionsRequest {
  /**
   * <p>The name of the intent for which versions should be
   *       returned.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of intent versions.
   *       If the response to this call is truncated, Amazon Lex returns a pagination
   *       token in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of intent versions to return in the response.
   *       The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetIntentVersionsResponse {
  /**
   * <p>An array of <code>IntentMetadata</code> objects, one for each
   *       numbered version of the intent plus one for the <code>$LATEST</code>
   *       version.</p>
   * @public
   */
  intents?: IntentMetadata[] | undefined;

  /**
   * <p>A pagination token for fetching the next page of intent versions.
   *       If the response to this call is truncated, Amazon Lex returns a pagination
   *       token in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetMigrationRequest {
  /**
   * <p>The unique identifier of the migration to view. The
   *         <code>migrationID</code> is returned by the  operation.</p>
   * @public
   */
  migrationId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const MigrationAlertType = {
  ERROR: "ERROR",
  WARN: "WARN",
} as const;

/**
 * @public
 */
export type MigrationAlertType = (typeof MigrationAlertType)[keyof typeof MigrationAlertType];

/**
 * <p>Provides information about alerts and warnings that Amazon Lex sends during
 *       a migration. The alerts include information about how to resolve the
 *       issue.</p>
 * @public
 */
export interface MigrationAlert {
  /**
   * <p>The type of alert. There are two kinds of alerts:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ERROR</code> - There was an issue with the migration that
   *           can't be resolved. The migration stops.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WARN</code> - There was an issue with the migration that
   *           requires manual changes to the new Amazon Lex V2 bot. The migration
   *           continues.</p>
   *             </li>
   *          </ul>
   * @public
   */
  type?: MigrationAlertType | undefined;

  /**
   * <p>A message that describes why the alert was issued.</p>
   * @public
   */
  message?: string | undefined;

  /**
   * <p>Additional details about the alert.</p>
   * @public
   */
  details?: string[] | undefined;

  /**
   * <p>A link to the Amazon Lex documentation that describes how to resolve
   *     the alert.</p>
   * @public
   */
  referenceURLs?: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MigrationStatus = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
} as const;

/**
 * @public
 */
export type MigrationStatus = (typeof MigrationStatus)[keyof typeof MigrationStatus];

/**
 * @public
 * @enum
 */
export const MigrationStrategy = {
  CREATE_NEW: "CREATE_NEW",
  UPDATE_EXISTING: "UPDATE_EXISTING",
} as const;

/**
 * @public
 */
export type MigrationStrategy = (typeof MigrationStrategy)[keyof typeof MigrationStrategy];

/**
 * @public
 */
export interface GetMigrationResponse {
  /**
   * <p>The unique identifier of the migration. This is the same as the
   *       identifier used when calling the <code>GetMigration</code>
   *       operation.</p>
   * @public
   */
  migrationId?: string | undefined;

  /**
   * <p>The name of the Amazon Lex V1 bot migrated to Amazon Lex V2.</p>
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * <p>The version of the Amazon Lex V1 bot migrated to Amazon Lex V2.</p>
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * <p>The locale of the Amazon Lex V1 bot migrated to Amazon Lex V2.</p>
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * <p>The unique identifier of the Amazon Lex V2 bot that the Amazon Lex V1 is being
   *       migrated to.</p>
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * <p>The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.</p>
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * <p>Indicates the status of the migration. When the status is
   *         <code>COMPLETE</code> the migration is finished and the bot is available
   *       in Amazon Lex V2. There may be alerts and warnings that need to be resolved to
   *       complete the migration.</p>
   * @public
   */
  migrationStatus?: MigrationStatus | undefined;

  /**
   * <p>The strategy used to conduct the migration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates
   *           the Amazon Lex V1 bot to the new bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot
   *         metadata and the locale being migrated. It doesn't change any other
   *         locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale
   *         is created in the Amazon Lex V2 bot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * <p>The date and time that the migration started.</p>
   * @public
   */
  migrationTimestamp?: Date | undefined;

  /**
   * <p>A list of alerts and warnings that indicate issues with the migration
   *       for the Amazon Lex V1 bot to Amazon Lex V2. You receive a warning when an Amazon Lex V1
   *       feature has a different implementation if Amazon Lex V2.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/migrate.html">Migrating a bot</a> in the <i>Amazon Lex V2
   *         developer guide</i>.</p>
   * @public
   */
  alerts?: MigrationAlert[] | undefined;
}

/**
 * @public
 * @enum
 */
export const MigrationSortAttribute = {
  MIGRATION_DATE_TIME: "MIGRATION_DATE_TIME",
  V1_BOT_NAME: "V1_BOT_NAME",
} as const;

/**
 * @public
 */
export type MigrationSortAttribute = (typeof MigrationSortAttribute)[keyof typeof MigrationSortAttribute];

/**
 * @public
 * @enum
 */
export const SortOrder = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];

/**
 * @public
 */
export interface GetMigrationsRequest {
  /**
   * <p>The field to sort the list of migrations by. You can sort by the
   *       Amazon Lex V1 bot name or the date and time that the migration was
   *       started.</p>
   * @public
   */
  sortByAttribute?: MigrationSortAttribute | undefined;

  /**
   * <p>The order so sort the list.</p>
   * @public
   */
  sortByOrder?: SortOrder | undefined;

  /**
   * <p>Filters the list to contain only bots whose name contains the
   *       specified string. The string is matched anywhere in bot name.</p>
   * @public
   */
  v1BotNameContains?: string | undefined;

  /**
   * <p>Filters the list to contain only migrations in the specified state.</p>
   * @public
   */
  migrationStatusEquals?: MigrationStatus | undefined;

  /**
   * <p>The maximum number of migrations to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A pagination token that fetches the next page of migrations. If the
   *       response to this operation is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of migrations, specify the
   *       pagination token in the request.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Provides information about migrating a bot from Amazon Lex V1 to Amazon Lex V2.</p>
 * @public
 */
export interface MigrationSummary {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the migration.</p>
   * @public
   */
  migrationId?: string | undefined;

  /**
   * <p>The name of the Amazon Lex V1 bot that is the source of the migration.</p>
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * <p>The version of the Amazon Lex V1 bot that is the source of the migration.</p>
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * <p>The locale of the Amazon Lex V1 bot that is the source of the migration.</p>
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * <p>The unique identifier of the Amazon Lex V2 that is the destination of the migration.</p>
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * <p>The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.</p>
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * <p>The status of the operation. When the status is <code>COMPLETE</code>
   *     the bot is available in Amazon Lex V2. There may be alerts and warnings that
   *     need to be resolved to complete the migration.</p>
   * @public
   */
  migrationStatus?: MigrationStatus | undefined;

  /**
   * <p>The strategy used to conduct the migration.</p>
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * <p>The date and time that the migration started.</p>
   * @public
   */
  migrationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface GetMigrationsResponse {
  /**
   * <p>An array of summaries for migrations from Amazon Lex V1 to Amazon Lex V2. To see
   *       details of the migration, use the <code>migrationId</code> from the
   *       summary in a call to the
   *       operation.</p>
   * @public
   */
  migrationSummaries?: MigrationSummary[] | undefined;

  /**
   * <p>If the response is truncated, it includes a pagination token that you
   *       can specify in your next request to fetch the next page of
   *       migrations.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSlotTypeRequest {
  /**
   * <p>The name of the slot type. The name is case sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The version of the slot type. </p>
   * @public
   */
  version: string | undefined;
}

/**
 * @public
 */
export interface GetSlotTypeResponse {
  /**
   * <p>The name of the slot type.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last update date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the slot type was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the slot type.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The strategy that Amazon Lex uses to determine the value of the slot.
   *       For more information, see <a>PutSlotType</a>.</p>
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * <p>The built-in slot type used as a parent for the slot type.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface GetSlotTypesRequest {
  /**
   * <p>A pagination token that fetches the next page of slot types. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch next page of slot types, specify the pagination
   *       token in the next request.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of slot types to return in the response. The
   *       default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Substring to match in slot type names. A slot type will be returned
   *       if any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   * @public
   */
  nameContains?: string | undefined;
}

/**
 * <p>Provides information about a slot type..</p>
 * @public
 */
export interface SlotTypeMetadata {
  /**
   * <p>The name of the slot type.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last updated date are the same. </p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the slot type was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the slot type.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface GetSlotTypesResponse {
  /**
   * <p>An array of objects, one for each slot type, that provides
   *       information such as the name of the slot type, the version, and a
   *       description.</p>
   * @public
   */
  slotTypes?: SlotTypeMetadata[] | undefined;

  /**
   * <p>If the response is truncated, it includes a pagination token that
   *       you can specify in your next request to fetch the next page of slot
   *       types.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetSlotTypeVersionsRequest {
  /**
   * <p>The name of the slot type for which versions should be
   *       returned.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of slot type
   *       versions. If the response to this call is truncated, Amazon Lex returns a
   *       pagination token in the response. To fetch the next page of versions,
   *       specify the pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of slot type versions to return in the response.
   *       The default is 10.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * @public
 */
export interface GetSlotTypeVersionsResponse {
  /**
   * <p>An array of <code>SlotTypeMetadata</code> objects, one for each
   *       numbered version of the slot type plus one for the <code>$LATEST</code>
   *       version.</p>
   * @public
   */
  slotTypes?: SlotTypeMetadata[] | undefined;

  /**
   * <p>A pagination token for fetching the next page of slot type
   *       versions. If the response to this call is truncated, Amazon Lex returns a
   *       pagination token in the response. To fetch the next page of versions,
   *       specify the pagination token in the next request. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StatusType = {
  DETECTED: "Detected",
  MISSED: "Missed",
} as const;

/**
 * @public
 */
export type StatusType = (typeof StatusType)[keyof typeof StatusType];

/**
 * @public
 */
export interface GetUtterancesViewRequest {
  /**
   * <p>The name of the bot for which utterance information should be
   *       returned.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>An array of bot versions for which utterance information should be
   *       returned. The limit is 5 versions per request.</p>
   * @public
   */
  botVersions: string[] | undefined;

  /**
   * <p>To return utterances that were recognized and handled, use
   *         <code>Detected</code>. To return utterances that were not recognized,
   *       use <code>Missed</code>.</p>
   * @public
   */
  statusType: StatusType | undefined;
}

/**
 * <p>Provides information about a single utterance that was made to your
 *       bot. </p>
 * @public
 */
export interface UtteranceData {
  /**
   * <p>The text that was entered by the user or the text representation of
   *       an audio clip.</p>
   * @public
   */
  utteranceString?: string | undefined;

  /**
   * <p>The number of times that the utterance was processed.</p>
   * @public
   */
  count?: number | undefined;

  /**
   * <p>The total number of individuals that used the utterance.</p>
   * @public
   */
  distinctUsers?: number | undefined;

  /**
   * <p>The date that the utterance was first recorded.</p>
   * @public
   */
  firstUtteredDate?: Date | undefined;

  /**
   * <p>The date that the utterance was last recorded.</p>
   * @public
   */
  lastUtteredDate?: Date | undefined;
}

/**
 * <p>Provides a list of utterances that have been made to a specific
 *       version of your bot. The list contains a maximum of 100
 *       utterances.</p>
 * @public
 */
export interface UtteranceList {
  /**
   * <p>The version of the bot that processed the list.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>One or more <a>UtteranceData</a> objects that contain
   *       information about the utterances that have been made to a bot. The maximum
   *       number of object is 100.</p>
   * @public
   */
  utterances?: UtteranceData[] | undefined;
}

/**
 * @public
 */
export interface GetUtterancesViewResponse {
  /**
   * <p>The name of the bot for which utterance information was
   *       returned.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>An array of <a>UtteranceList</a> objects, each
   *       containing a list of <a>UtteranceData</a> objects describing
   *       the utterances that were processed by your bot. The response contains a
   *       maximum of 100 <code>UtteranceData</code> objects for each version. Amazon Lex
   *       returns the most frequent utterances received by the bot in the last 15
   *       days.</p>
   * @public
   */
  utterances?: UtteranceList[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get a list of tags
   *       for.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>A list of key/value pairs that identify a bot, bot alias, or bot
 *       channel. Tag keys and values can consist of Unicode letters, digits, white
 *       space, and any of the following symbols: _ . : / = + - @. </p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key for the tag. Keys are not case-sensitive and must be
   *       unique.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The value associated with a key. The value may be an empty string but
   *       it can't be null.</p>
   * @public
   */
  value: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 * @enum
 */
export const ProcessBehavior = {
  BUILD: "BUILD",
  SAVE: "SAVE",
} as const;

/**
 * @public
 */
export type ProcessBehavior = (typeof ProcessBehavior)[keyof typeof ProcessBehavior];

/**
 * @public
 */
export interface PutBotRequest {
  /**
   * <p>The name of the bot. The name is <i>not</i> case
   *       sensitive. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of <code>Intent</code> objects. Each intent represents a
   *       command that a user can express. For example, a pizza ordering bot might
   *       support an OrderPizza intent. For more information, see <a>how-it-works</a>.</p>
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * <p>Set to <code>true</code> to enable access to natural language
   *       understanding improvements. </p>
   *          <p>When you set the <code>enableModelImprovements</code> parameter to
   *         <code>true</code> you can use the
   *         <code>nluIntentConfidenceThreshold</code> parameter to configure
   *       confidence scores. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/confidence-scores.html">Confidence Scores</a>.</p>
   *          <p>You can only set the <code>enableModelImprovements</code> parameter in
   *       certain Regions. If you set the parameter to <code>true</code>, your bot
   *       has access to accuracy improvements.</p>
   *          <p>The Regions where you can set the <code>enableModelImprovements</code>
   *       parameter to <code>true</code> are:</p>
   *          <ul>
   *             <li>
   *                <p>US East (N. Virginia) (us-east-1)</p>
   *             </li>
   *             <li>
   *                <p>US West (Oregon) (us-west-2)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Sydney) (ap-southeast-2)</p>
   *             </li>
   *             <li>
   *                <p>EU (Ireland) (eu-west-1)</p>
   *             </li>
   *          </ul>
   *          <p>In other Regions, the <code>enableModelImprovements</code> parameter
   *       is set to <code>true</code> by default. In these Regions setting the
   *       parameter to <code>false</code> throws a <code>ValidationException</code>
   *       exception.</p>
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * <p>Determines the threshold where Amazon Lex will insert the
   *         <code>AMAZON.FallbackIntent</code>,
   *         <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *       alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or
   *         <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response.
   *         <code>AMAZON.FallbackIntent</code> and
   *         <code>AMAZON.KendraSearchIntent</code> are only inserted if they are
   *       configured for the bot.</p>
   *          <p>You must set the <code>enableModelImprovements</code> parameter to
   *         <code>true</code> to use confidence scores in the following
   *       regions.</p>
   *          <ul>
   *             <li>
   *                <p>US East (N. Virginia) (us-east-1)</p>
   *             </li>
   *             <li>
   *                <p>US West (Oregon) (us-west-2)</p>
   *             </li>
   *             <li>
   *                <p>Asia Pacific (Sydney) (ap-southeast-2)</p>
   *             </li>
   *             <li>
   *                <p>EU (Ireland) (eu-west-1)</p>
   *             </li>
   *          </ul>
   *          <p>In other Regions, the <code>enableModelImprovements</code> parameter
   *       is set to <code>true</code> by default.</p>
   *          <p>For example, suppose a bot is configured with the confidence threshold
   *       of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex returns three
   *       alternative intents with the following confidence scores: IntentA (0.70),
   *       IntentB (0.60), IntentC (0.50). The response from the
   *         <code>PostText</code> operation would be:</p>
   *          <ul>
   *             <li>
   *                <p>AMAZON.FallbackIntent</p>
   *             </li>
   *             <li>
   *                <p>IntentA</p>
   *             </li>
   *             <li>
   *                <p>IntentB</p>
   *             </li>
   *             <li>
   *                <p>IntentC</p>
   *             </li>
   *          </ul>
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * <p>When Amazon Lex doesn't understand the user's intent, it uses this
   *       message to get clarification. To specify how many times Amazon Lex should
   *       repeat the clarification prompt, use the <code>maxAttempts</code> field.
   *       If Amazon Lex still doesn't understand, it sends the message in the
   *         <code>abortStatement</code> field. </p>
   *          <p>When you create a clarification prompt, make sure that it suggests
   *       the correct response from the user. for example, for a bot that orders
   *       pizza and drinks, you might create this clarification prompt: "What would
   *       you like to do? You can say 'Order a pizza' or 'Order a drink.'"</p>
   *          <p>If you have defined a fallback intent, it will be invoked if the
   *       clarification prompt is repeated the number of times defined in the
   *         <code>maxAttempts</code> field. For more information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html">
   *         AMAZON.FallbackIntent</a>.</p>
   *          <p>If you don't define a clarification prompt, at runtime Amazon Lex will
   *       return a 400 Bad Request exception in three cases: </p>
   *          <ul>
   *             <li>
   *                <p>Follow-up prompt - When the user responds to a follow-up prompt
   *           but does not provide an intent. For example, in response to a
   *           follow-up prompt that says "Would you like anything else today?" the
   *           user says "Yes." Amazon Lex will return a 400 Bad Request exception because
   *           it does not have a clarification prompt to send to the user to get an
   *           intent.</p>
   *             </li>
   *             <li>
   *                <p>Lambda function - When using a Lambda function, you return an
   *             <code>ElicitIntent</code> dialog type. Since Amazon Lex does not have a
   *           clarification prompt to get an intent from the user, it returns a 400
   *           Bad Request exception.</p>
   *             </li>
   *             <li>
   *                <p>PutSession operation - When using the <code>PutSession</code>
   *           operation, you send an <code>ElicitIntent</code> dialog type. Since
   *           Amazon Lex does not have a clarification prompt to get an intent from the
   *           user, it returns a 400 Bad Request exception.</p>
   *             </li>
   *          </ul>
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * <p>When Amazon Lex can't understand the user's input in context, it tries
   *       to elicit the information a few times. After that, Amazon Lex sends the message
   *       defined in <code>abortStatement</code> to the user, and then cancels the
   *       conversation. To set the number of retries, use the
   *         <code>valueElicitationPrompt</code> field for the slot type. </p>
   *          <p>For example, in a pizza ordering bot, Amazon Lex might ask a user "What
   *       type of crust would you like?" If the user's response is not one of the
   *       expected responses (for example, "thin crust, "deep dish," etc.), Amazon Lex
   *       tries to elicit a correct response a few more times. </p>
   *          <p>For example, in a pizza ordering application,
   *         <code>OrderPizza</code> might be one of the intents. This intent might
   *       require the <code>CrustType</code> slot. You specify the
   *         <code>valueElicitationPrompt</code> field when you create the
   *         <code>CrustType</code> slot.</p>
   *          <p>If you have defined a fallback intent the cancel statement will not be
   *       sent to the user, the fallback intent is used instead. For more
   *       information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/built-in-intent-fallback.html">
   *         AMAZON.FallbackIntent</a>.</p>
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *       a conversation.</p>
   *          <p>A user interaction session remains active for the amount of time
   *       specified. If no conversation occurs during this time, the session expires
   *       and Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>For example, suppose that a user chooses the OrderPizza intent, but
   *       gets sidetracked halfway through placing an order. If the user doesn't
   *       complete the order within the specified time, Amazon Lex discards the slot
   *       information that it gathered, and the user must start over.</p>
   *          <p>If you don't include the <code>idleSessionTTLInSeconds</code>
   *       element in a <code>PutBot</code> operation request, Amazon Lex uses the default
   *       value. This is also true if the request replaces an existing
   *       bot.</p>
   *          <p>The default is 300 seconds (5 minutes).</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that you want Amazon Lex to use for voice
   *       interactions with the user. The locale configured for the voice must match
   *       the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices
   *         in Amazon Polly</a> in the <i>Amazon Polly Developer
   *         Guide</i>.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code>
   *       version.</p>
   *          <p>When you create a new bot, leave the <code>checksum</code> field
   *       blank. If you specify a checksum you get a
   *         <code>BadRequestException</code> exception.</p>
   *          <p>When you want to update a bot, set the <code>checksum</code> field
   *       to the checksum of the most recent revision of the <code>$LATEST</code>
   *       version. If you don't specify the <code> checksum</code> field, or if the
   *       checksum does not match the <code>$LATEST</code> version, you get a
   *         <code>PreconditionFailedException</code> exception.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>If you set the <code>processBehavior</code> element to
   *         <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you
   *       set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't
   *       build it. </p>
   *          <p>If you don't specify this value, the default value is
   *         <code>BUILD</code>.</p>
   * @public
   */
  processBehavior?: ProcessBehavior | undefined;

  /**
   * <p> Specifies the target locale for the bot. Any intent used in the
   *       bot must be compatible with the locale of the bot. </p>
   *          <p>The default is <code>en-US</code>.</p>
   * @public
   */
  locale: Locale | undefined;

  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *       you must specify whether your use of Amazon Lex is related to a website,
   *       program, or other application that is directed or targeted, in whole or in
   *       part, to children under age 13 and subject to the Children's Online
   *       Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *         <code>false</code> in the <code>childDirected</code> field. By
   *       specifying <code>true</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is</b> related
   *       to a website, program, or other application that is directed or targeted,
   *       in whole or in part, to children under age 13 and subject to COPPA. By
   *       specifying <code>false</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is not</b>
   *       related to a website, program, or other application that is directed or
   *       targeted, in whole or in part, to children under age 13 and subject to
   *       COPPA. You may not specify a default value for the
   *         <code>childDirected</code> field that does not accurately reflect
   *       whether your use of Amazon Lex is related to a website, program, or other
   *       application that is directed or targeted, in whole or in part, to children
   *       under age 13 and subject to COPPA.</p>
   *          <p>If your use of Amazon Lex relates to a website, program, or other
   *       application that is directed in whole or in part, to children under age
   *       13, you must obtain any required verifiable parental consent under COPPA.
   *       For information regarding the use of Amazon Lex in connection with websites,
   *       programs, or other applications that are directed or targeted, in whole or
   *       in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a>
   *          </p>
   * @public
   */
  childDirected: boolean | undefined;

  /**
   * <p>When set to <code>true</code> user utterances are sent to Amazon
   *       Comprehend for sentiment analysis. If you don't specify
   *         <code>detectSentiment</code>, the default is <code>false</code>.</p>
   * @public
   */
  detectSentiment?: boolean | undefined;

  /**
   * <p>When set to <code>true</code> a new numbered version of the bot is
   *       created. This is the same as calling the <code>CreateBotVersion</code>
   *       operation. If you don't specify <code>createVersion</code>, the default is
   *         <code>false</code>.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *       create a bot, you can't use the <code>PutBot</code> operation to update
   *       the tags on a bot. To update tags, use the <code>TagResource</code>
   *       operation.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBotResponse {
  /**
   * <p>The name of the bot.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the bot.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   * @public
   */
  intents?: Intent[] | undefined;

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   * @public
   */
  enableModelImprovements?: boolean | undefined;

  /**
   * <p>The score that determines where Amazon Lex inserts the
   *         <code>AMAZON.FallbackIntent</code>,
   *         <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *       alternative intents in a <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or
   *         <a href="https://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> response.
   *         <code>AMAZON.FallbackIntent</code> is inserted if the confidence score
   *       for all intents is below this value.
   *         <code>AMAZON.KendraSearchIntent</code> is only inserted if it is
   *       configured for the bot.</p>
   * @public
   */
  nluIntentConfidenceThreshold?: number | undefined;

  /**
   * <p> The prompts that Amazon Lex uses when it doesn't understand the user's
   *       intent. For more information, see <a>PutBot</a>. </p>
   * @public
   */
  clarificationPrompt?: Prompt | undefined;

  /**
   * <p>The message that Amazon Lex uses to cancel a conversation. For more
   *       information, see <a>PutBot</a>.</p>
   * @public
   */
  abortStatement?: Statement | undefined;

  /**
   * <p> When you send a request to create a bot with
   *         <code>processBehavior</code> set to <code>BUILD</code>, Amazon Lex sets the
   *         <code>status</code> response element to <code>BUILDING</code>.</p>
   *          <p>In the <code>READY_BASIC_TESTING</code> state you can test the bot
   *       with user inputs that exactly match the utterances configured for the
   *       bot's intents and values in the slot types.</p>
   *          <p>If Amazon Lex can't build the bot, Amazon Lex sets <code>status</code> to
   *         <code>FAILED</code>. Amazon Lex returns the reason for the failure in the
   *         <code>failureReason</code> response element. </p>
   *          <p>When you set <code>processBehavior</code> to <code>SAVE</code>,
   *       Amazon Lex sets the status code to <code>NOT BUILT</code>.</p>
   *          <p>When the bot is in the <code>READY</code> state you can test and
   *       publish the bot.</p>
   * @public
   */
  status?: Status | undefined;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to build the bot.</p>
   * @public
   */
  failureReason?: string | undefined;

  /**
   * <p>The date that the bot was updated. When you create a resource, the
   *       creation date and last updated date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The maximum length of time that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  idleSessionTTLInSeconds?: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction
   *       with the user. For more information, see <a>PutBot</a>.</p>
   * @public
   */
  voiceId?: string | undefined;

  /**
   * <p>Checksum of the bot that you created.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p> The target locale for the bot. </p>
   * @public
   */
  locale?: Locale | undefined;

  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *       you must specify whether your use of Amazon Lex is related to a website,
   *       program, or other application that is directed or targeted, in whole or in
   *       part, to children under age 13 and subject to the Children's Online
   *       Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *         <code>false</code> in the <code>childDirected</code> field. By
   *       specifying <code>true</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is</b> related
   *       to a website, program, or other application that is directed or targeted,
   *       in whole or in part, to children under age 13 and subject to COPPA. By
   *       specifying <code>false</code> in the <code>childDirected</code> field, you
   *       confirm that your use of Amazon Lex <b>is not</b>
   *       related to a website, program, or other application that is directed or
   *       targeted, in whole or in part, to children under age 13 and subject to
   *       COPPA. You may not specify a default value for the
   *         <code>childDirected</code> field that does not accurately reflect
   *       whether your use of Amazon Lex is related to a website, program, or other
   *       application that is directed or targeted, in whole or in part, to children
   *       under age 13 and subject to COPPA.</p>
   *          <p>If your use of Amazon Lex relates to a website, program, or other
   *       application that is directed in whole or in part, to children under age
   *       13, you must obtain any required verifiable parental consent under COPPA.
   *       For information regarding the use of Amazon Lex in connection with websites,
   *       programs, or other applications that are directed or targeted, in whole or
   *       in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex FAQ.</a>
   *          </p>
   * @public
   */
  childDirected?: boolean | undefined;

  /**
   * <p>
   *             <code>True</code> if a new version of the bot was created. If the
   *         <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>
   *             <code>true</code> if the bot is configured to send user utterances to
   *       Amazon Comprehend for sentiment analysis. If the
   *         <code>detectSentiment</code> field was not specified in the request, the
   *         <code>detectSentiment</code> field is <code>false</code> in the
   *       response.</p>
   * @public
   */
  detectSentiment?: boolean | undefined;

  /**
   * <p>A list of tags associated with the bot.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * <p>Settings used to configure delivery mode and destination for
 *       conversation logs.</p>
 * @public
 */
export interface LogSettingsRequest {
  /**
   * <p>The type of logging to enable. Text logs are delivered to a CloudWatch
   *       Logs log group. Audio logs are delivered to an S3 bucket.</p>
   * @public
   */
  logType: LogType | undefined;

  /**
   * <p>Where the logs will be delivered. Text logs are delivered to a
   *       CloudWatch Logs log group. Audio logs are delivered to an S3
   *       bucket.</p>
   * @public
   */
  destination: Destination | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS customer managed key for
   *       encrypting audio logs delivered to an S3 bucket. The key does not apply to
   *       CloudWatch Logs and is optional for S3 buckets.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3
   *       bucket where the logs should be delivered.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p>Provides the settings needed for conversation logs.</p>
 * @public
 */
export interface ConversationLogsRequest {
  /**
   * <p>The settings for your conversation logs. You can log the conversation
   *       text, conversation audio, or both.</p>
   * @public
   */
  logSettings: LogSettingsRequest[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to write
   *       to your CloudWatch Logs for text logs and your S3 bucket for audio logs.
   *       If audio encryption is enabled, this role also provides access permission
   *       for the AWS KMS key used for encrypting audio logs. For more information,
   *       see <a href="https://docs.aws.amazon.com/lex/latest/dg/conversation-logs-role-and-policy.html">Creating an
   *         IAM Role and Policy for Conversation Logs</a>.</p>
   * @public
   */
  iamRoleArn: string | undefined;
}

/**
 * @public
 */
export interface PutBotAliasRequest {
  /**
   * <p>The name of the alias. The name is <i>not</i> case
   *       sensitive.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot.</p>
   * @public
   */
  botVersion: string | undefined;

  /**
   * <p>The name of the bot.</p>
   * @public
   */
  botName: string | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code>
   *       version.</p>
   *          <p>When you create a new bot alias, leave the <code>checksum</code>
   *       field blank. If you specify a checksum you get a
   *         <code>BadRequestException</code> exception.</p>
   *          <p>When you want to update a bot alias, set the <code>checksum</code>
   *       field to the checksum of the most recent revision of the
   *         <code>$LATEST</code> version. If you don't specify the <code>
   *         checksum</code> field, or if the checksum does not match the
   *         <code>$LATEST</code> version, you get a
   *         <code>PreconditionFailedException</code> exception.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Settings for conversation logs for the alias.</p>
   * @public
   */
  conversationLogs?: ConversationLogsRequest | undefined;

  /**
   * <p>A list of tags to add to the bot alias. You can only add tags when you
   *       create an alias, you can't use the <code>PutBotAlias</code> operation to
   *       update the tags on a bot alias. To update tags, use the
   *         <code>TagResource</code> operation.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutBotAliasResponse {
  /**
   * <p>The name of the alias.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the alias.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The version of the bot that the alias points to.</p>
   * @public
   */
  botVersion?: string | undefined;

  /**
   * <p>The name of the bot that the alias points to.</p>
   * @public
   */
  botName?: string | undefined;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and the last updated date are the
   *       same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the bot alias was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The checksum for the current version of the alias.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   * @public
   */
  conversationLogs?: ConversationLogsResponse | undefined;

  /**
   * <p>A list of tags associated with a bot.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface PutIntentRequest {
  /**
   * <p>The name of the intent. The name is <i>not</i> case
   *       sensitive. </p>
   *          <p>The name can't match a built-in intent name, or a built-in intent
   *       name with "AMAZON." removed. For example, because there is a built-in
   *       intent called <code>AMAZON.HelpIntent</code>, you can't create a custom
   *       intent called <code>HelpIntent</code>.</p>
   *          <p>For a list of built-in intents, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the intent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of intent slots. At runtime, Amazon Lex elicits required slot
   *       values from the user using prompts defined in the slots. For more
   *       information, see <a>how-it-works</a>. </p>
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * <p>An array of utterances (strings) that a user might say to signal
   *       the intent. For example, "I want \{PizzaSize\} pizza", "Order \{Quantity\}
   *       \{PizzaSize\} pizzas". </p>
   *          <p>In each utterance, a slot name is enclosed in curly braces.
   *     </p>
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * <p>Prompts the user to confirm the intent. This question should have a
   *       yes or no answer.</p>
   *          <p>Amazon Lex uses this prompt to ensure that the user acknowledges that
   *       the intent is ready for fulfillment. For example, with the
   *         <code>OrderPizza</code> intent, you might want to confirm that the order
   *       is correct before placing it. For other intents, such as intents that
   *       simply respond to user questions, you might not need to ask the user for
   *       confirmation before providing the information. </p>
   *          <note>
   *             <p>You you must provide both the <code>rejectionStatement</code> and
   *         the <code>confirmationPrompt</code>, or neither.</p>
   *          </note>
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * <p>When the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   *          <note>
   *             <p>You must provide both the <code>rejectionStatement</code> and the
   *           <code>confirmationPrompt</code>, or neither.</p>
   *          </note>
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * <p>Amazon Lex uses this prompt to solicit additional activity after
   *       fulfilling an intent. For example, after the <code>OrderPizza</code>
   *       intent is fulfilled, you might prompt the user to order a drink.</p>
   *          <p>The action that Amazon Lex takes depends on the user's response, as
   *       follows:</p>
   *          <ul>
   *             <li>
   *                <p>If the user says "Yes" it responds with the clarification
   *           prompt that is configured for the bot.</p>
   *             </li>
   *             <li>
   *                <p>if the user says "Yes" and continues with an utterance that
   *           triggers an intent it starts a conversation for the intent.</p>
   *             </li>
   *             <li>
   *                <p>If the user says "No" it responds with the rejection statement
   *           configured for the the follow-up prompt.</p>
   *             </li>
   *             <li>
   *                <p>If it doesn't recognize the utterance it repeats the follow-up
   *           prompt again.</p>
   *             </li>
   *          </ul>
   *          <p>The <code>followUpPrompt</code> field and the
   *         <code>conclusionStatement</code> field are mutually exclusive. You can
   *       specify only one. </p>
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * <p> The statement that you want Amazon Lex to convey to the user after the
   *       intent is successfully fulfilled by the Lambda function. </p>
   *          <p>This element is relevant only if you provide a Lambda function in
   *       the <code>fulfillmentActivity</code>. If you return the intent to the
   *       client application, you can't specify this element.</p>
   *          <note>
   *             <p>The <code>followUpPrompt</code> and
   *           <code>conclusionStatement</code> are mutually exclusive. You can
   *         specify only one.</p>
   *          </note>
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * <p> Specifies a Lambda function to invoke for each user input. You can
   *       invoke this Lambda function to personalize user interaction. </p>
   *          <p>For example, suppose your bot determines that the user is John.
   *       Your Lambda function might retrieve John's information from a backend
   *       database and prepopulate some of the values. For example, if you find that
   *       John is gluten intolerant, you might set the corresponding intent slot,
   *         <code>GlutenIntolerant</code>, to true. You might find John's phone
   *       number and set the corresponding session attribute. </p>
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * <p>Required. Describes how the intent is fulfilled. For example, after
   *       a user provides all of the information for a pizza order,
   *         <code>fulfillmentActivity</code> defines how the bot places an order
   *       with a local pizza store. </p>
   *          <p> You might configure Amazon Lex to return all of the intent information
   *       to the client application, or direct it to invoke a Lambda function that
   *       can process the intent (for example, place an order with a pizzeria).
   *     </p>
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * <p>A unique identifier for the built-in intent to base this intent on.
   *       To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code>
   *       version.</p>
   *          <p>When you create a new intent, leave the <code>checksum</code> field
   *       blank. If you specify a checksum you get a
   *         <code>BadRequestException</code> exception.</p>
   *          <p>When you want to update a intent, set the <code>checksum</code>
   *       field to the checksum of the most recent revision of the
   *         <code>$LATEST</code> version. If you don't specify the <code>
   *         checksum</code> field, or if the checksum does not match the
   *         <code>$LATEST</code> version, you get a
   *         <code>PreconditionFailedException</code> exception.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>When set to <code>true</code> a new numbered version of the intent
   *       is created. This is the same as calling the
   *         <code>CreateIntentVersion</code> operation. If you do not specify
   *         <code>createVersion</code>, the default is <code>false</code>.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>Configuration information required to use the
   *         <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon
   *       Kendra index. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html">
   *         AMAZON.KendraSearchIntent</a>.</p>
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @public
 */
export interface PutIntentResponse {
  /**
   * <p>The name of the intent.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the intent.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>An array of intent slots that are configured for the
   *       intent.</p>
   * @public
   */
  slots?: Slot[] | undefined;

  /**
   * <p> An array of sample utterances that are configured for the intent.
   *     </p>
   * @public
   */
  sampleUtterances?: string[] | undefined;

  /**
   * <p>If defined in the intent, Amazon Lex prompts the user to confirm the
   *       intent before fulfilling it.</p>
   * @public
   */
  confirmationPrompt?: Prompt | undefined;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code> Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   * @public
   */
  rejectionStatement?: Statement | undefined;

  /**
   * <p>If defined in the intent, Amazon Lex uses this prompt to solicit
   *       additional user activity after the intent is fulfilled.</p>
   * @public
   */
  followUpPrompt?: FollowUpPrompt | undefined;

  /**
   * <p>After the Lambda function specified in
   *         the<code>fulfillmentActivity</code>intent fulfills the intent, Amazon Lex
   *       conveys this statement to the user.</p>
   * @public
   */
  conclusionStatement?: Statement | undefined;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function for
   *       each user input.</p>
   * @public
   */
  dialogCodeHook?: CodeHook | undefined;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function to
   *       fulfill the intent after the user provides all of the information required
   *       by the intent.</p>
   * @public
   */
  fulfillmentActivity?: FulfillmentActivity | undefined;

  /**
   * <p>A unique identifier for the built-in intent that this intent is
   *       based on.</p>
   * @public
   */
  parentIntentSignature?: string | undefined;

  /**
   * <p>The date that the intent was updated. When you create a resource,
   *       the creation date and last update dates are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the intent was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the intent. For a new intent, the version is always
   *         <code>$LATEST</code>.</p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code>version of the intent created
   *       or updated.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>
   *             <code>True</code> if a new version of the intent was created. If
   *       the <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>Configuration information, if any, required to connect to an Amazon
   *       Kendra index and use the <code>AMAZON.KendraSearchIntent</code>
   *       intent.</p>
   * @public
   */
  kendraConfiguration?: KendraConfiguration | undefined;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   * @public
   */
  inputContexts?: InputContext[] | undefined;

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   * @public
   */
  outputContexts?: OutputContext[] | undefined;
}

/**
 * @public
 */
export interface PutSlotTypeRequest {
  /**
   * <p>The name of the slot type. The name is <i>not</i>
   *       case sensitive. </p>
   *          <p>The name can't match a built-in slot type name, or a built-in slot
   *       type name with "AMAZON." removed. For example, because there is a built-in
   *       slot type called <code>AMAZON.DATE</code>, you can't create a custom slot
   *       type called <code>DATE</code>.</p>
   *          <p>For a list of built-in slot types, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take. Each value can have a list of
   *         <code>synonyms</code>, which are additional values that help train the
   *       machine learning model about the values that it resolves for a slot. </p>
   *          <p>A regular expression slot type doesn't require enumeration values.
   *       All other slot types require a list of enumeration values.</p>
   *          <p>When Amazon Lex resolves a slot value, it generates a resolution list
   *       that contains up to five possible values for the slot. If you are using a
   *       Lambda function, this resolution list is passed to the function. If you
   *       are not using a Lambda function you can choose to return the value that
   *       the user entered or the first value in the resolution list as the slot
   *       value. The <code>valueSelectionStrategy</code> field indicates the option
   *       to use. </p>
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code>
   *       version.</p>
   *          <p>When you create a new slot type, leave the <code>checksum</code>
   *       field blank. If you specify a checksum you get a
   *         <code>BadRequestException</code> exception.</p>
   *          <p>When you want to update a slot type, set the <code>checksum</code>
   *       field to the checksum of the most recent revision of the
   *         <code>$LATEST</code> version. If you don't specify the <code>
   *         checksum</code> field, or if the checksum does not match the
   *         <code>$LATEST</code> version, you get a
   *         <code>PreconditionFailedException</code> exception.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>Determines the slot resolution strategy that Amazon Lex uses to return
   *       slot type values. The field can be set to one of the following
   *       values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ORIGINAL_VALUE</code> - Returns the value entered by the
   *           user, if the user value is similar to the slot value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TOP_RESOLUTION</code> - If there is a resolution list for
   *           the slot, return the first value in the resolution list as the slot
   *           type value. If there is no resolution list, null is
   *           returned.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify the <code>valueSelectionStrategy</code>, the
   *       default is <code>ORIGINAL_VALUE</code>.</p>
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * <p>When set to <code>true</code> a new numbered version of the slot
   *       type is created. This is the same as calling the
   *         <code>CreateSlotTypeVersion</code> operation. If you do not specify
   *         <code>createVersion</code>, the default is <code>false</code>.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>The built-in slot type used as the parent of the slot type. When you
   *       define a parent slot type, the new slot type has all of the same
   *       configuration as the parent.</p>
   *          <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>Configuration information that extends the parent built-in slot type.
   *       The configuration is added to the settings for the parent slot
   *       type.</p>
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutSlotTypeResponse {
  /**
   * <p>The name of the slot type.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   * @public
   */
  enumerationValues?: EnumerationValue[] | undefined;

  /**
   * <p>The date that the slot type was updated. When you create a slot
   *       type, the creation date and last update date are the same.</p>
   * @public
   */
  lastUpdatedDate?: Date | undefined;

  /**
   * <p>The date that the slot type was created.</p>
   * @public
   */
  createdDate?: Date | undefined;

  /**
   * <p>The version of the slot type. For a new slot type, the version is
   *       always <code>$LATEST</code>. </p>
   * @public
   */
  version?: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   * @public
   */
  checksum?: string | undefined;

  /**
   * <p>The slot resolution strategy that Amazon Lex uses to determine the value
   *       of the slot. For more information, see <a>PutSlotType</a>.</p>
   * @public
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | undefined;

  /**
   * <p>
   *             <code>True</code> if a new version of the slot type was created. If
   *       the <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   * @public
   */
  createVersion?: boolean | undefined;

  /**
   * <p>The built-in slot type used as the parent of the slot type.</p>
   * @public
   */
  parentSlotTypeSignature?: string | undefined;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   * @public
   */
  slotTypeConfigurations?: SlotTypeConfiguration[] | undefined;
}

/**
 * @public
 */
export interface StartImportRequest {
  /**
   * <p>A zip archive in binary format. The archive should contain one file, a
   *       JSON file containing the resource to import. The resource should match the
   *       type specified in the <code>resourceType</code> field.</p>
   * @public
   */
  payload: Uint8Array | undefined;

  /**
   * <p>Specifies the type of resource to export. Each resource also
   *       exports any resources that it depends on. </p>
   *          <ul>
   *             <li>
   *                <p>A bot exports dependent intents.</p>
   *             </li>
   *             <li>
   *                <p>An intent exports dependent slot types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  resourceType: ResourceType | undefined;

  /**
   * <p>Specifies the action that the <code>StartImport</code> operation
   *       should take when there is an existing resource with the same
   *       name.</p>
   *          <ul>
   *             <li>
   *                <p>FAIL_ON_CONFLICT - The import operation is stopped on the first
   *           conflict between a resource in the import file and an existing
   *           resource. The name of the resource causing the conflict is in the
   *             <code>failureReason</code> field of the response to the
   *             <code>GetImport</code> operation.</p>
   *                <p>OVERWRITE_LATEST - The import operation proceeds even if there
   *           is a conflict with an existing resource. The $LASTEST version of the
   *           existing resource is overwritten with the data from the import
   *           file.</p>
   *             </li>
   *          </ul>
   * @public
   */
  mergeStrategy: MergeStrategy | undefined;

  /**
   * <p>A list of tags to add to the imported bot. You can only add tags when
   *       you import a bot, you can't add tags to an intent or slot type.</p>
   * @public
   */
  tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface StartImportResponse {
  /**
   * <p>The name given to the import job.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The type of resource to import.</p>
   * @public
   */
  resourceType?: ResourceType | undefined;

  /**
   * <p>The action to take when there is a merge conflict.</p>
   * @public
   */
  mergeStrategy?: MergeStrategy | undefined;

  /**
   * <p>The identifier for the specific import job.</p>
   * @public
   */
  importId?: string | undefined;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>,
   *       you can get the reason for the failure using the <code>GetImport</code>
   *       operation.</p>
   * @public
   */
  importStatus?: ImportStatus | undefined;

  /**
   * <p>A list of tags added to the imported bot.</p>
   * @public
   */
  tags?: Tag[] | undefined;

  /**
   * <p>A timestamp for the date and time that the import job was
   *       requested.</p>
   * @public
   */
  createdDate?: Date | undefined;
}

/**
 * @public
 */
export interface StartMigrationRequest {
  /**
   * <p>The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.</p>
   * @public
   */
  v1BotName: string | undefined;

  /**
   * <p>The version of the bot to migrate to Amazon Lex V2. You can migrate the
   *         <code>$LATEST</code> version as well as any numbered version.</p>
   * @public
   */
  v1BotVersion: string | undefined;

  /**
   * <p>The name of the Amazon Lex V2 bot that you are migrating the Amazon Lex V1 bot to. </p>
   *          <ul>
   *             <li>
   *                <p>If the Amazon Lex V2 bot doesn't exist, you must use the
   *             <code>CREATE_NEW</code> migration strategy.</p>
   *             </li>
   *             <li>
   *                <p>If the Amazon Lex V2 bot exists, you must use the
   *             <code>UPDATE_EXISTING</code> migration strategy to change the
   *           contents of the Amazon Lex V2 bot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  v2BotName: string | undefined;

  /**
   * <p>The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.</p>
   * @public
   */
  v2BotRole: string | undefined;

  /**
   * <p>The strategy used to conduct the migration.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CREATE_NEW</code> - Creates a new Amazon Lex V2 bot and migrates
   *           the Amazon Lex V1 bot to the new bot.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>UPDATE_EXISTING</code> - Overwrites the existing Amazon Lex V2 bot
   *           metadata and the locale being migrated. It doesn't change any other
   *           locales in the Amazon Lex V2 bot. If the locale doesn't exist, a new locale
   *           is created in the Amazon Lex V2 bot.</p>
   *             </li>
   *          </ul>
   * @public
   */
  migrationStrategy: MigrationStrategy | undefined;
}

/**
 * @public
 */
export interface StartMigrationResponse {
  /**
   * <p>The name of the Amazon Lex V1 bot that you are migrating to Amazon Lex V2.</p>
   * @public
   */
  v1BotName?: string | undefined;

  /**
   * <p>The version of the bot to migrate to Amazon Lex V2. </p>
   * @public
   */
  v1BotVersion?: string | undefined;

  /**
   * <p>The locale used for the Amazon Lex V1 bot. </p>
   * @public
   */
  v1BotLocale?: Locale | undefined;

  /**
   * <p>The unique identifier for the Amazon Lex V2 bot. </p>
   * @public
   */
  v2BotId?: string | undefined;

  /**
   * <p>The IAM role that Amazon Lex uses to run the Amazon Lex V2 bot.</p>
   * @public
   */
  v2BotRole?: string | undefined;

  /**
   * <p>The unique identifier that Amazon Lex assigned to the migration.</p>
   * @public
   */
  migrationId?: string | undefined;

  /**
   * <p>The strategy used to conduct the migration.</p>
   * @public
   */
  migrationStrategy?: MigrationStrategy | undefined;

  /**
   * <p>The date and time that the migration started.</p>
   * @public
   */
  migrationTimestamp?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel
   *       to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to add to the resource. If a tag key already
   *       exists, the existing value is replaced with the new value.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags
   *       from.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource. If a tag key does not
   *       exist on the resource, it is ignored.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
