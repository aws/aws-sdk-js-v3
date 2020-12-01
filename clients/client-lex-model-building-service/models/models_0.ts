import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The request is not well formed. For example, a value is invalid or
 *       a required field is missing. Check the field values, and try
 *       again.</p>
 */
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  message?: string;
}

export namespace BadRequestException {
  export const filterSensitiveLog = (obj: BadRequestException): any => ({
    ...obj,
  });
}

/**
 * <p> There was a conflict processing the request. Try your request
 *       again. </p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface CreateBotVersionRequest {
  /**
   * <p>The name of the bot that you want to create a new version of. The
   *       name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>Identifies a specific revision of the <code>$LATEST</code> version
   *       of the bot. If you specify a checksum and the <code>$LATEST</code> version
   *       of the bot has a different checksum, a
   *         <code>PreconditionFailedException</code> exception is returned and Amazon Lex
   *       doesn't publish a new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   */
  checksum?: string;
}

export namespace CreateBotVersionRequest {
  export const filterSensitiveLog = (obj: CreateBotVersionRequest): any => ({
    ...obj,
  });
}

export enum ContentType {
  CUSTOM_PAYLOAD = "CustomPayload",
  PLAIN_TEXT = "PlainText",
  SSML = "SSML",
}

/**
 * <p>The message object that provides the message text and its
 *       type.</p>
 */
export interface Message {
  /**
   * <p>The content type of the message string.</p>
   */
  contentType: ContentType | string | undefined;

  /**
   * <p>The text of the message.</p>
   */
  content: string | undefined;

  /**
   * <p>Identifies the message group that the message belongs to. When a group
   *       is assigned to a message, Amazon Lex returns one message from each group in the
   *       response.</p>
   */
  groupNumber?: number;
}

export namespace Message {
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

/**
 * <p>A collection of messages that convey information to the user. At
 *       runtime, Amazon Lex selects the message to convey. </p>
 */
export interface Statement {
  /**
   * <p>A collection of message objects.</p>
   */
  messages: Message[] | undefined;

  /**
   * <p> At runtime, if the client is using the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> API, Amazon Lex includes the response card in the response.
   *       It substitutes all of the session attributes and slot values for
   *       placeholders in the response card. </p>
   */
  responseCard?: string;
}

export namespace Statement {
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

/**
 * <p>Obtains information from the user. To define a prompt, provide one
 *       or more messages and specify the number of attempts to get information
 *       from the user. If you provide more than one message, Amazon Lex chooses one of
 *       the messages to use to prompt the user. For more information, see <a>how-it-works</a>.</p>
 */
export interface Prompt {
  /**
   * <p>An array of objects, each of which provides a message string and
   *       its type. You can specify the message string in plain text or in Speech
   *       Synthesis Markup Language (SSML).</p>
   */
  messages: Message[] | undefined;

  /**
   * <p>The number of times to prompt the user for information.</p>
   */
  maxAttempts: number | undefined;

  /**
   * <p>A response card. Amazon Lex uses this prompt at runtime, in the
   *         <code>PostText</code> API response. It substitutes session attributes
   *       and slot values for placeholders in the response card. For more
   *       information, see <a>ex-resp-card</a>. </p>
   */
  responseCard?: string;
}

export namespace Prompt {
  export const filterSensitiveLog = (obj: Prompt): any => ({
    ...obj,
  });
}

/**
 * <p>Identifies the specific version of an intent.</p>
 */
export interface Intent {
  /**
   * <p>The name of the intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>The version of the intent.</p>
   */
  intentVersion: string | undefined;
}

export namespace Intent {
  export const filterSensitiveLog = (obj: Intent): any => ({
    ...obj,
  });
}

export enum Locale {
  DE_DE = "de-DE",
  EN_AU = "en-AU",
  EN_GB = "en-GB",
  EN_US = "en-US",
  ES_419 = "es-419",
  ES_ES = "es-ES",
  ES_US = "es-US",
  FR_CA = "fr-CA",
  FR_FR = "fr-FR",
  IT_IT = "it-IT",
}

export enum Status {
  BUILDING = "BUILDING",
  FAILED = "FAILED",
  NOT_BUILT = "NOT_BUILT",
  READY = "READY",
  READY_BASIC_TESTING = "READY_BASIC_TESTING",
}

export interface CreateBotVersionResponse {
  /**
   * <p>The name of the bot.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   */
  intents?: Intent[];

  /**
   * <p>The message that Amazon Lex uses when it doesn't understand the user's
   *       request. For more information, see <a>PutBot</a>. </p>
   */
  clarificationPrompt?: Prompt;

  /**
   * <p>The message that Amazon Lex uses to cancel a conversation. For more
   *       information, see <a>PutBot</a>.</p>
   */
  abortStatement?: Statement;

  /**
   * <p> When you send a request to create or update a bot, Amazon Lex sets the
   *         <code>status</code> response element to <code>BUILDING</code>. After
   *       Amazon Lex builds the bot, it sets <code>status</code> to <code>READY</code>.
   *       If Amazon Lex can't build the bot, it sets <code>status</code> to
   *         <code>FAILED</code>. Amazon Lex returns the reason for the failure in the
   *         <code>failureReason</code> response element. </p>
   */
  status?: Status | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to build the bot.</p>
   */
  failureReason?: string;

  /**
   * <p>The date when the <code>$LATEST</code> version of this bot was
   *       updated. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date when the bot version was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interactions
   *       with the user.</p>
   */
  voiceId?: string;

  /**
   * <p>Checksum identifying the version of the bot that was
   *       created.</p>
   */
  checksum?: string;

  /**
   * <p>The version of the bot. </p>
   */
  version?: string;

  /**
   * <p> Specifies the target locale for the bot. </p>
   */
  locale?: Locale | string;

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
   */
  childDirected?: boolean;

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   */
  enableModelImprovements?: boolean;

  /**
   * <p>Indicates whether utterances entered by the user should be sent to
   *       Amazon Comprehend for sentiment analysis.</p>
   */
  detectSentiment?: boolean;
}

export namespace CreateBotVersionResponse {
  export const filterSensitiveLog = (obj: CreateBotVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal Amazon Lex error occurred. Try your request again.</p>
 */
export interface InternalFailureException extends __SmithyException, $MetadataBearer {
  name: "InternalFailureException";
  $fault: "server";
  message?: string;
}

export namespace InternalFailureException {
  export const filterSensitiveLog = (obj: InternalFailureException): any => ({
    ...obj,
  });
}

/**
 * <p>The request exceeded a limit. Try your request again.</p>
 */
export interface LimitExceededException extends __SmithyException, $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  retryAfterSeconds?: string;
  message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The resource specified in the request was not found. Check the
 *       resource and try again.</p>
 */
export interface NotFoundException extends __SmithyException, $MetadataBearer {
  name: "NotFoundException";
  $fault: "client";
  message?: string;
}

export namespace NotFoundException {
  export const filterSensitiveLog = (obj: NotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p> The checksum of the resource that you are trying to change does
 *       not match the checksum in the request. Check the resource's checksum and
 *       try again.</p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  message?: string;
}

export namespace PreconditionFailedException {
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
}

export interface CreateIntentVersionRequest {
  /**
   * <p>The name of the intent that you want to create a new version of.
   *       The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the intent that
   *       should be used to create the new version. If you specify a checksum and
   *       the <code>$LATEST</code> version of the intent has a different checksum,
   *       Amazon Lex returns a <code>PreconditionFailedException</code> exception and
   *       doesn't publish a new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   */
  checksum?: string;
}

export namespace CreateIntentVersionRequest {
  export const filterSensitiveLog = (obj: CreateIntentVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Lambda function that verifies requests to a bot or
 *       fulfills the user's request to a bot..</p>
 */
export interface CodeHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  uri: string | undefined;

  /**
   * <p>The version of the request-response that you want Amazon Lex to use to
   *       invoke your Lambda function. For more information, see <a>using-lambda</a>.</p>
   */
  messageVersion: string | undefined;
}

export namespace CodeHook {
  export const filterSensitiveLog = (obj: CodeHook): any => ({
    ...obj,
  });
}

/**
 * <p>A prompt for additional activity after an intent is fulfilled. For
 *       example, after the <code>OrderPizza</code> intent is fulfilled, you might
 *       prompt the user to find out whether the user wants to order
 *       drinks.</p>
 */
export interface FollowUpPrompt {
  /**
   * <p>Prompts for information from the user. </p>
   */
  prompt: Prompt | undefined;

  /**
   * <p>If the user answers "no" to the question defined in the
   *         <code>prompt</code> field, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   */
  rejectionStatement: Statement | undefined;
}

export namespace FollowUpPrompt {
  export const filterSensitiveLog = (obj: FollowUpPrompt): any => ({
    ...obj,
  });
}

export enum FulfillmentActivityType {
  CODE_HOOK = "CodeHook",
  RETURN_INTENT = "ReturnIntent",
}

/**
 * <p> Describes how the intent is fulfilled after the user provides all
 *       of the information required for the intent. You can provide a Lambda
 *       function to process the intent, or you can return the intent information
 *       to the client application. We recommend that you use a Lambda function so
 *       that the relevant logic lives in the Cloud and limit the client-side code
 *       primarily to presentation. If you need to update the logic, you only
 *       update the Lambda function; you don't need to upgrade your client
 *       application. </p>
 *
 *
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
 */
export interface FulfillmentActivity {
  /**
   * <p> How the intent should be fulfilled, either by running a Lambda
   *       function or by returning the slot data to the client application.
   *     </p>
   */
  type: FulfillmentActivityType | string | undefined;

  /**
   * <p> A description of the Lambda function that is run to fulfill the
   *       intent. </p>
   */
  codeHook?: CodeHook;
}

export namespace FulfillmentActivity {
  export const filterSensitiveLog = (obj: FulfillmentActivity): any => ({
    ...obj,
  });
}

/**
 * <p>The name of a context that must be active for an intent to be selected
 *       by Amazon Lex.</p>
 */
export interface InputContext {
  /**
   * <p>The name of the context.</p>
   */
  name: string | undefined;
}

export namespace InputContext {
  export const filterSensitiveLog = (obj: InputContext): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for the AMAZON.KendraSearchIntent
 *       intent. When you use this intent, Amazon Lex searches the specified Amazon
 *       Kendra index and returns documents from the index that match the user's
 *       utterance. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html">
 *         AMAZON.KendraSearchIntent</a>.</p>
 */
export interface KendraConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kendra index that you
   *       want the AMAZON.KendraSearchIntent intent to search. The index must be in
   *       the same account and Region as the Amazon Lex bot. If the Amazon Kendra index
   *       does not exist, you get an exception when you call the
   *         <code>PutIntent</code> operation.</p>
   */
  kendraIndex: string | undefined;

  /**
   * <p>A query filter that Amazon Lex sends to Amazon Kendra to filter the
   *       response from the query. The filter is in the format defined by Amazon
   *       Kendra. For more information, see <a href="http://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering
   *         queries</a>.</p>
   *          <p>You can override this filter string with a new filter string at
   *       runtime.</p>
   */
  queryFilterString?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *       search the Amazon Kendra index. The role must be in the same account and
   *       Region as the Amazon Lex bot. If the role does not exist, you get an exception
   *       when you call the <code>PutIntent</code> operation.</p>
   */
  role: string | undefined;
}

export namespace KendraConfiguration {
  export const filterSensitiveLog = (obj: KendraConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The specification of an output context that is set when an intent is
 *       fulfilled.</p>
 */
export interface OutputContext {
  /**
   * <p>The name of the context.</p>
   */
  name: string | undefined;

  /**
   * <p>The number of seconds that the context should be active after it is
   *       first sent in a <code>PostContent</code> or <code>PostText</code>
   *       response. You can set the value between 5 and 86,400 seconds (24
   *       hours).</p>
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of conversation turns that the context should be active. A
   *       conversation turn is one <code>PostContent</code> or <code>PostText</code>
   *       request and the corresponding response from Amazon Lex.</p>
   */
  turnsToLive: number | undefined;
}

export namespace OutputContext {
  export const filterSensitiveLog = (obj: OutputContext): any => ({
    ...obj,
  });
}

/**
 * <p>A default value for a slot.</p>
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
   *                   <code>{attribute}</code> - The slot value of the session attribute
   *           "attribute."</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>'value'</code> - The discrete value "value."</p>
   *             </li>
   *          </ul>
   */
  defaultValue: string | undefined;
}

export namespace SlotDefaultValue {
  export const filterSensitiveLog = (obj: SlotDefaultValue): any => ({
    ...obj,
  });
}

/**
 * <p>Contains the default values for a slot. Default values are used when
 *       Amazon Lex hasn't determined a value for a slot.</p>
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
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

export namespace SlotDefaultValueSpec {
  export const filterSensitiveLog = (obj: SlotDefaultValueSpec): any => ({
    ...obj,
  });
}

export enum ObfuscationSetting {
  DEFAULT_OBFUSCATION = "DEFAULT_OBFUSCATION",
  NONE = "NONE",
}

export enum SlotConstraint {
  OPTIONAL = "Optional",
  REQUIRED = "Required",
}

/**
 * <p>Identifies the version of a specific slot.</p>
 */
export interface Slot {
  /**
   * <p>The name of the slot.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the slot.</p>
   */
  description?: string;

  /**
   * <p>Specifies whether the slot is required or optional. </p>
   */
  slotConstraint: SlotConstraint | string | undefined;

  /**
   * <p>The type of the slot, either a custom slot type that you defined or
   *       one of the built-in slot types.</p>
   */
  slotType?: string;

  /**
   * <p>The version of the slot type.</p>
   */
  slotTypeVersion?: string;

  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the
   *       user.</p>
   */
  valueElicitationPrompt?: Prompt;

  /**
   * <p> Directs Amazon Lex the order in which to elicit this slot value from
   *       the user. For example, if the intent has two slots with priorities 1 and
   *       2, AWS Amazon Lex first elicits a value for the slot with priority 1.</p>
   *          <p>If multiple slots share the same priority, the order in which Amazon Lex
   *       elicits values is arbitrary.</p>
   */
  priority?: number;

  /**
   * <p> If you know a specific pattern with which users might respond to
   *       an Amazon Lex request for a slot value, you can provide those utterances to
   *       improve accuracy. This is optional. In most cases, Amazon Lex is capable of
   *       understanding user utterances. </p>
   */
  sampleUtterances?: string[];

  /**
   * <p> A set of possible responses for the slot type used by text-based
   *       clients. A user chooses an option from the response card, instead of using
   *       text to reply. </p>
   */
  responseCard?: string;

  /**
   * <p>Determines whether a slot is obfuscated in conversation logs and
   *       stored utterances. When you obfuscate a slot, the value is replaced by the
   *       slot name in curly braces ({}). For example, if the slot name is
   *       "full_name", obfuscated values are replaced with "{full_name}". For more
   *       information, see <a href="https://docs.aws.amazon.com/lex/latest/dg/how-obfuscate.html"> Slot Obfuscation </a>.
   *     </p>
   */
  obfuscationSetting?: ObfuscationSetting | string;

  /**
   * <p>A list of default values for the slot. Default values are used when
   *       Amazon Lex hasn't determined a value for a slot. You can specify default values
   *       from context variables, session attributes, and defined values.</p>
   */
  defaultValueSpec?: SlotDefaultValueSpec;
}

export namespace Slot {
  export const filterSensitiveLog = (obj: Slot): any => ({
    ...obj,
  });
}

export interface CreateIntentVersionResponse {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of slot types that defines the information required to
   *       fulfill the intent.</p>
   */
  slots?: Slot[];

  /**
   * <p>An array of sample utterances configured for the intent. </p>
   */
  sampleUtterances?: string[];

  /**
   * <p>If defined, the prompt that Amazon Lex uses to confirm the user's
   *       intent before fulfilling it. </p>
   */
  confirmationPrompt?: Prompt;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: Statement;

  /**
   * <p>If defined, Amazon Lex uses this prompt to solicit additional user
   *       activity after the intent is fulfilled. </p>
   */
  followUpPrompt?: FollowUpPrompt;

  /**
   * <p>After the Lambda function specified in the
   *         <code>fulfillmentActivity</code> field fulfills the intent, Amazon Lex
   *       conveys this statement to the user. </p>
   */
  conclusionStatement?: Statement;

  /**
   * <p>If defined, Amazon Lex invokes this Lambda function for each user
   *       input.</p>
   */
  dialogCodeHook?: CodeHook;

  /**
   * <p> Describes how the intent is fulfilled. </p>
   */
  fulfillmentActivity?: FulfillmentActivity;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version number assigned to the new version of the
   *       intent.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the intent version created.</p>
   */
  checksum?: string;

  /**
   * <p>Configuration information, if any, for connecting an Amazon Kendra
   *       index with the <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   */
  outputContexts?: OutputContext[];
}

export namespace CreateIntentVersionResponse {
  export const filterSensitiveLog = (obj: CreateIntentVersionResponse): any => ({
    ...obj,
  });
}

export interface CreateSlotTypeVersionRequest {
  /**
   * <p>The name of the slot type that you want to create a new version
   *       for. The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>Checksum for the <code>$LATEST</code> version of the slot type that
   *       you want to publish. If you specify a checksum and the
   *         <code>$LATEST</code> version of the slot type has a different checksum,
   *       Amazon Lex returns a <code>PreconditionFailedException</code> exception and
   *       doesn't publish the new version. If you don't specify a checksum, Amazon Lex
   *       publishes the <code>$LATEST</code> version.</p>
   */
  checksum?: string;
}

export namespace CreateSlotTypeVersionRequest {
  export const filterSensitiveLog = (obj: CreateSlotTypeVersionRequest): any => ({
    ...obj,
  });
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
 */
export interface EnumerationValue {
  /**
   * <p>The value of the slot type.</p>
   */
  value: string | undefined;

  /**
   * <p>Additional values related to the slot type value.</p>
   */
  synonyms?: string[];
}

export namespace EnumerationValue {
  export const filterSensitiveLog = (obj: EnumerationValue): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a regular expression used to validate the value of a
 *       slot.</p>
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
   *                <p>Infinite repeaters: *, +, or {x,} with no upper bound.</p>
   *             </li>
   *             <li>
   *                <p>Wild card (.)</p>
   *             </li>
   *          </ul>
   */
  pattern: string | undefined;
}

export namespace SlotTypeRegexConfiguration {
  export const filterSensitiveLog = (obj: SlotTypeRegexConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for a slot type.</p>
 */
export interface SlotTypeConfiguration {
  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   */
  regexConfiguration?: SlotTypeRegexConfiguration;
}

export namespace SlotTypeConfiguration {
  export const filterSensitiveLog = (obj: SlotTypeConfiguration): any => ({
    ...obj,
  });
}

export enum SlotValueSelectionStrategy {
  ORIGINAL_VALUE = "ORIGINAL_VALUE",
  TOP_RESOLUTION = "TOP_RESOLUTION",
}

export interface CreateSlotTypeVersionResponse {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   */
  enumerationValues?: EnumerationValue[];

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last update date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version assigned to the new slot type version. </p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   */
  checksum?: string;

  /**
   * <p>The strategy that Amazon Lex uses to determine the value of the slot.
   *       For more information, see <a>PutSlotType</a>.</p>
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | string;

  /**
   * <p>The built-in slot type used a the parent of the slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   */
  slotTypeConfigurations?: SlotTypeConfiguration[];
}

export namespace CreateSlotTypeVersionResponse {
  export const filterSensitiveLog = (obj: CreateSlotTypeVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteBotRequest {
  /**
   * <p>The name of the bot. The name is case sensitive. </p>
   */
  name: string | undefined;
}

export namespace DeleteBotRequest {
  export const filterSensitiveLog = (obj: DeleteBotRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the resource that refers to the resource that you are
 *       attempting to delete. This object is returned as part of the
 *         <code>ResourceInUseException</code> exception. </p>
 */
export interface ResourceReference {
  /**
   * <p>The name of the resource that is using the resource that you are
   *       trying to delete.</p>
   */
  name?: string;

  /**
   * <p>The version of the resource that is using the resource that you are
   *       trying to delete.</p>
   */
  version?: string;
}

export namespace ResourceReference {
  export const filterSensitiveLog = (obj: ResourceReference): any => ({
    ...obj,
  });
}

export enum ReferenceType {
  BOT = "Bot",
  BOTALIAS = "BotAlias",
  BOTCHANNEL = "BotChannel",
  INTENT = "Intent",
}

/**
 * <p>The resource that you are attempting to delete is referred to by
 *       another resource. Use this information to remove references to the
 *       resource that you are trying to delete.</p>
 *          <p>The body of the exception contains a JSON object that describes the
 *       resource.</p>
 *          <p>
 *             <code>{ "resourceType": BOT | BOTALIAS | BOTCHANNEL |
 *         INTENT,</code>
 *          </p>
 *          <p>
 *             <code>"resourceReference": {</code>
 *          </p>
 *          <p>
 *             <code>"name": <i>string</i>, "version":
 *           <i>string</i> } }</code>
 *          </p>
 */
export interface ResourceInUseException extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseException";
  $fault: "client";
  referenceType?: ReferenceType | string;
  /**
   * <p>Describes the resource that refers to the resource that you are
   *       attempting to delete. This object is returned as part of the
   *         <code>ResourceInUseException</code> exception. </p>
   */
  exampleReference?: ResourceReference;
}

export namespace ResourceInUseException {
  export const filterSensitiveLog = (obj: ResourceInUseException): any => ({
    ...obj,
  });
}

export interface DeleteBotAliasRequest {
  /**
   * <p>The name of the alias to delete. The name is case sensitive.
   *     </p>
   */
  name: string | undefined;

  /**
   * <p>The name of the bot that the alias points to.</p>
   */
  botName: string | undefined;
}

export namespace DeleteBotAliasRequest {
  export const filterSensitiveLog = (obj: DeleteBotAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotChannelAssociationRequest {
  /**
   * <p>The name of the association. The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>An alias that points to the specific version of the Amazon Lex bot to
   *       which this association is being made.</p>
   */
  botAlias: string | undefined;
}

export namespace DeleteBotChannelAssociationRequest {
  export const filterSensitiveLog = (obj: DeleteBotChannelAssociationRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotVersionRequest {
  /**
   * <p>The name of the bot.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the bot to delete. You cannot delete the
   *         <code>$LATEST</code> version of the bot. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteBot</a>
   *       operation.</p>
   */
  version: string | undefined;
}

export namespace DeleteBotVersionRequest {
  export const filterSensitiveLog = (obj: DeleteBotVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteIntentRequest {
  /**
   * <p>The name of the intent. The name is case sensitive. </p>
   */
  name: string | undefined;
}

export namespace DeleteIntentRequest {
  export const filterSensitiveLog = (obj: DeleteIntentRequest): any => ({
    ...obj,
  });
}

export interface DeleteIntentVersionRequest {
  /**
   * <p>The name of the intent.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the intent to delete. You cannot delete the
   *         <code>$LATEST</code> version of the intent. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteIntent</a>
   *       operation.</p>
   */
  version: string | undefined;
}

export namespace DeleteIntentVersionRequest {
  export const filterSensitiveLog = (obj: DeleteIntentVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSlotTypeRequest {
  /**
   * <p>The name of the slot type. The name is case sensitive. </p>
   */
  name: string | undefined;
}

export namespace DeleteSlotTypeRequest {
  export const filterSensitiveLog = (obj: DeleteSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteSlotTypeVersionRequest {
  /**
   * <p>The name of the slot type.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the slot type to delete. You cannot delete the
   *         <code>$LATEST</code> version of the slot type. To delete the
   *         <code>$LATEST</code> version, use the <a>DeleteSlotType</a>
   *       operation.</p>
   */
  version: string | undefined;
}

export namespace DeleteSlotTypeVersionRequest {
  export const filterSensitiveLog = (obj: DeleteSlotTypeVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUtterancesRequest {
  /**
   * <p>The name of the bot that stored the utterances.</p>
   */
  botName: string | undefined;

  /**
   * <p> The unique identifier for the user that made the utterances. This
   *       is the user ID that was sent in the <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostContent.html">PostContent</a> or <a href="http://docs.aws.amazon.com/lex/latest/dg/API_runtime_PostText.html">PostText</a> operation request that contained the
   *       utterance.</p>
   */
  userId: string | undefined;
}

export namespace DeleteUtterancesRequest {
  export const filterSensitiveLog = (obj: DeleteUtterancesRequest): any => ({
    ...obj,
  });
}

export interface GetBotRequest {
  /**
   * <p>The name of the bot. The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>The version or alias of the bot.</p>
   */
  versionOrAlias: string | undefined;
}

export namespace GetBotRequest {
  export const filterSensitiveLog = (obj: GetBotRequest): any => ({
    ...obj,
  });
}

export interface GetBotResponse {
  /**
   * <p>The name of the bot.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   */
  intents?: Intent[];

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   */
  enableModelImprovements?: boolean;

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
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>The message Amazon Lex uses when it doesn't understand the user's
   *       request. For more information, see <a>PutBot</a>. </p>
   */
  clarificationPrompt?: Prompt;

  /**
   * <p>The message that Amazon Lex returns when the user elects to end the
   *       conversation without completing it. For more information, see <a>PutBot</a>.</p>
   */
  abortStatement?: Statement;

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
   */
  status?: Status | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex explains why
   *       it failed to build the bot.</p>
   */
  failureReason?: string;

  /**
   * <p>The date that the bot was updated. When you create a resource, the
   *       creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction
   *       with the user. For more information, see <a>PutBot</a>.</p>
   */
  voiceId?: string;

  /**
   * <p>Checksum of the bot used to identify a specific revision of the
   *       bot's <code>$LATEST</code> version.</p>
   */
  checksum?: string;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   */
  version?: string;

  /**
   * <p> The target locale for the bot. </p>
   */
  locale?: Locale | string;

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
   */
  childDirected?: boolean;

  /**
   * <p>Indicates whether user utterances should be sent to Amazon Comprehend
   *       for sentiment analysis.</p>
   */
  detectSentiment?: boolean;
}

export namespace GetBotResponse {
  export const filterSensitiveLog = (obj: GetBotResponse): any => ({
    ...obj,
  });
}

export interface GetBotAliasRequest {
  /**
   * <p>The name of the bot alias. The name is case sensitive.</p>
   */
  name: string | undefined;

  /**
   * <p>The name of the bot.</p>
   */
  botName: string | undefined;
}

export namespace GetBotAliasRequest {
  export const filterSensitiveLog = (obj: GetBotAliasRequest): any => ({
    ...obj,
  });
}

export enum Destination {
  CLOUDWATCH_LOGS = "CLOUDWATCH_LOGS",
  S3 = "S3",
}

export enum LogType {
  AUDIO = "AUDIO",
  TEXT = "TEXT",
}

/**
 * <p>The settings for conversation logs.</p>
 */
export interface LogSettingsResponse {
  /**
   * <p>The type of logging that is enabled.</p>
   */
  logType?: LogType | string;

  /**
   * <p>The destination where logs are delivered.</p>
   */
  destination?: Destination | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the key used to encrypt audio logs
   *       in an S3 bucket.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3
   *       bucket where the logs are delivered.</p>
   */
  resourceArn?: string;

  /**
   * <p>The resource prefix is the first part of the S3 object key within the
   *       S3 bucket that you specified to contain audio logs. For CloudWatch Logs it
   *       is the prefix of the log stream name within the log group that you
   *       specified. </p>
   */
  resourcePrefix?: string;
}

export namespace LogSettingsResponse {
  export const filterSensitiveLog = (obj: LogSettingsResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about conversation log settings.</p>
 */
export interface ConversationLogsResponse {
  /**
   * <p>The settings for your conversation logs. You can log text, audio, or
   *       both.</p>
   */
  logSettings?: LogSettingsResponse[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to write your logs
   *       to CloudWatch Logs or an S3 bucket.</p>
   */
  iamRoleArn?: string;
}

export namespace ConversationLogsResponse {
  export const filterSensitiveLog = (obj: ConversationLogsResponse): any => ({
    ...obj,
  });
}

export interface GetBotAliasResponse {
  /**
   * <p>The name of the bot alias.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot that the alias points to.</p>
   */
  botVersion?: string;

  /**
   * <p>The name of the bot that the alias points to.</p>
   */
  botName?: string;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and the last updated date are the
   *       same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>Checksum of the bot alias.</p>
   */
  checksum?: string;

  /**
   * <p>The settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   */
  conversationLogs?: ConversationLogsResponse;
}

export namespace GetBotAliasResponse {
  export const filterSensitiveLog = (obj: GetBotAliasResponse): any => ({
    ...obj,
  });
}

export interface GetBotAliasesRequest {
  /**
   * <p>The name of the bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of aliases. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of aliases, specify the pagination
   *       token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of aliases to return in the response. The
   *       default is 50. . </p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in bot alias names. An alias will be returned if
   *       any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   */
  nameContains?: string;
}

export namespace GetBotAliasesRequest {
  export const filterSensitiveLog = (obj: GetBotAliasesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a bot alias.</p>
 */
export interface BotAliasMetadata {
  /**
   * <p>The name of the bot alias.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the Amazon Lex bot to which the alias points.</p>
   */
  botVersion?: string;

  /**
   * <p>The name of the bot to which the alias points.</p>
   */
  botName?: string;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>Checksum of the bot alias.</p>
   */
  checksum?: string;

  /**
   * <p>Settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   */
  conversationLogs?: ConversationLogsResponse;
}

export namespace BotAliasMetadata {
  export const filterSensitiveLog = (obj: BotAliasMetadata): any => ({
    ...obj,
  });
}

export interface GetBotAliasesResponse {
  /**
   * <p>An array of <code>BotAliasMetadata</code> objects, each describing
   *       a bot alias.</p>
   */
  BotAliases?: BotAliasMetadata[];

  /**
   * <p>A pagination token for fetching next page of aliases. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of aliases, specify the pagination
   *       token in the next request. </p>
   */
  nextToken?: string;
}

export namespace GetBotAliasesResponse {
  export const filterSensitiveLog = (obj: GetBotAliasesResponse): any => ({
    ...obj,
  });
}

export interface GetBotChannelAssociationRequest {
  /**
   * <p>The name of the association between the bot and the channel. The
   *       name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   */
  botAlias: string | undefined;
}

export namespace GetBotChannelAssociationRequest {
  export const filterSensitiveLog = (obj: GetBotChannelAssociationRequest): any => ({
    ...obj,
  });
}

export enum ChannelStatus {
  CREATED = "CREATED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum ChannelType {
  FACEBOOK = "Facebook",
  KIK = "Kik",
  SLACK = "Slack",
  TWILIO_SMS = "Twilio-Sms",
}

export interface GetBotChannelAssociationResponse {
  /**
   * <p>The name of the association between the bot and the
   *       channel.</p>
   */
  name?: string;

  /**
   * <p>A description of the association between the bot and the
   *       channel.</p>
   */
  description?: string;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   */
  botAlias?: string;

  /**
   * <p>The name of the Amazon Lex bot.</p>
   */
  botName?: string;

  /**
   * <p>The date that the association between the bot and the channel was
   *       created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The type of the messaging platform.</p>
   */
  type?: ChannelType | string;

  /**
   * <p>Provides information that the messaging platform needs to
   *       communicate with the Amazon Lex bot.</p>
   */
  botConfiguration?: { [key: string]: string };

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
   */
  status?: ChannelStatus | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to create the association.</p>
   */
  failureReason?: string;
}

export namespace GetBotChannelAssociationResponse {
  export const filterSensitiveLog = (obj: GetBotChannelAssociationResponse): any => ({
    ...obj,
    ...(obj.botConfiguration && { botConfiguration: SENSITIVE_STRING }),
  });
}

export interface GetBotChannelAssociationsRequest {
  /**
   * <p>The name of the Amazon Lex bot in the association.</p>
   */
  botName: string | undefined;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made.</p>
   */
  botAlias: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of associations. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of associations, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of associations to return in the response. The
   *       default is 50. </p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in channel association names. An association
   *       will be returned if any part of its name matches the substring. For
   *       example, "xyz" matches both "xyzabc" and "abcxyz." To return all bot
   *       channel associations, use a hyphen ("-") as the <code>nameContains</code>
   *       parameter.</p>
   */
  nameContains?: string;
}

export namespace GetBotChannelAssociationsRequest {
  export const filterSensitiveLog = (obj: GetBotChannelAssociationsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an association between an Amazon Lex bot and an external
 *       messaging platform.</p>
 */
export interface BotChannelAssociation {
  /**
   * <p>The name of the association between the bot and the channel.
   *     </p>
   */
  name?: string;

  /**
   * <p>A text description of the association you are creating. </p>
   */
  description?: string;

  /**
   * <p>An alias pointing to the specific version of the Amazon Lex bot to which
   *       this association is being made. </p>
   */
  botAlias?: string;

  /**
   * <p>The name of the Amazon Lex bot to which this association is being made. </p>
   *          <note>
   *             <p>Currently, Amazon Lex supports associations with Facebook and Slack,
   *         and Twilio.</p>
   *
   *          </note>
   */
  botName?: string;

  /**
   * <p>The date that the association between the Amazon Lex bot and the channel
   *       was created. </p>
   */
  createdDate?: Date;

  /**
   * <p>Specifies the type of association by indicating the type of channel
   *       being established between the Amazon Lex bot and the external messaging
   *       platform.</p>
   */
  type?: ChannelType | string;

  /**
   * <p>Provides information necessary to communicate with the messaging
   *       platform. </p>
   */
  botConfiguration?: { [key: string]: string };

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
   */
  status?: ChannelStatus | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to create the association.</p>
   */
  failureReason?: string;
}

export namespace BotChannelAssociation {
  export const filterSensitiveLog = (obj: BotChannelAssociation): any => ({
    ...obj,
    ...(obj.botConfiguration && { botConfiguration: SENSITIVE_STRING }),
  });
}

export interface GetBotChannelAssociationsResponse {
  /**
   * <p>An array of objects, one for each association, that provides
   *       information about the Amazon Lex bot and its association with the channel.
   *     </p>
   */
  botChannelAssociations?: BotChannelAssociation[];

  /**
   * <p>A pagination token that fetches the next page of associations. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of associations, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;
}

export namespace GetBotChannelAssociationsResponse {
  export const filterSensitiveLog = (obj: GetBotChannelAssociationsResponse): any => ({
    ...obj,
    ...(obj.botChannelAssociations && {
      botChannelAssociations: obj.botChannelAssociations.map((item) => BotChannelAssociation.filterSensitiveLog(item)),
    }),
  });
}

export interface GetBotsRequest {
  /**
   * <p>A pagination token that fetches the next page of bots. If the
   *       response to this call is truncated, Amazon Lex returns a pagination token in
   *       the response. To fetch the next page of bots, specify the pagination token
   *       in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of bots to return in the response that the
   *       request will return. The default is 10.</p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in bot names. A bot will be returned if any part
   *       of its name matches the substring. For example, "xyz" matches both
   *       "xyzabc" and "abcxyz."</p>
   */
  nameContains?: string;
}

export namespace GetBotsRequest {
  export const filterSensitiveLog = (obj: GetBotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a bot. .</p>
 */
export interface BotMetadata {
  /**
   * <p>The name of the bot. </p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The status of the bot.</p>
   */
  status?: Status | string;

  /**
   * <p>The date that the bot was updated. When you create a bot, the
   *       creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   */
  version?: string;
}

export namespace BotMetadata {
  export const filterSensitiveLog = (obj: BotMetadata): any => ({
    ...obj,
  });
}

export interface GetBotsResponse {
  /**
   * <p>An array of <code>botMetadata</code> objects, with one entry for
   *       each bot. </p>
   */
  bots?: BotMetadata[];

  /**
   * <p>If the response is truncated, it includes a pagination token that
   *       you can specify in your next request to fetch the next page of bots.
   *     </p>
   */
  nextToken?: string;
}

export namespace GetBotsResponse {
  export const filterSensitiveLog = (obj: GetBotsResponse): any => ({
    ...obj,
  });
}

export interface GetBotVersionsRequest {
  /**
   * <p>The name of the bot for which versions should be
   *       returned.</p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of bot versions. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of bot versions to return in the response. The
   *       default is 10.</p>
   */
  maxResults?: number;
}

export namespace GetBotVersionsRequest {
  export const filterSensitiveLog = (obj: GetBotVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetBotVersionsResponse {
  /**
   * <p>An array of <code>BotMetadata</code> objects, one for each numbered
   *       version of the bot plus one for the <code>$LATEST</code>
   *       version.</p>
   */
  bots?: BotMetadata[];

  /**
   * <p>A pagination token for fetching the next page of bot versions. If
   *       the response to this call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;
}

export namespace GetBotVersionsResponse {
  export const filterSensitiveLog = (obj: GetBotVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetBuiltinIntentRequest {
  /**
   * <p>The unique identifier for a built-in intent. To find the signature
   *       for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   */
  signature: string | undefined;
}

export namespace GetBuiltinIntentRequest {
  export const filterSensitiveLog = (obj: GetBuiltinIntentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a slot used in a built-in
 *       intent.</p>
 */
export interface BuiltinIntentSlot {
  /**
   * <p>A list of the slots defined for the intent.</p>
   */
  name?: string;
}

export namespace BuiltinIntentSlot {
  export const filterSensitiveLog = (obj: BuiltinIntentSlot): any => ({
    ...obj,
  });
}

export interface GetBuiltinIntentResponse {
  /**
   * <p>The unique identifier for a built-in intent.</p>
   */
  signature?: string;

  /**
   * <p>A list of locales that the intent supports.</p>
   */
  supportedLocales?: (Locale | string)[];

  /**
   * <p>An array of <code>BuiltinIntentSlot</code> objects, one entry for
   *       each slot type in the intent.</p>
   */
  slots?: BuiltinIntentSlot[];
}

export namespace GetBuiltinIntentResponse {
  export const filterSensitiveLog = (obj: GetBuiltinIntentResponse): any => ({
    ...obj,
  });
}

export interface GetBuiltinIntentsRequest {
  /**
   * <p>A list of locales that the intent supports.</p>
   */
  locale?: Locale | string;

  /**
   * <p>Substring to match in built-in intent signatures. An intent will be
   *       returned if any part of its signature matches the substring. For example,
   *       "xyz" matches both "xyzabc" and "abcxyz." To find the signature for an
   *       intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   */
  signatureContains?: string;

  /**
   * <p>A pagination token that fetches the next page of intents. If this
   *       API call is truncated, Amazon Lex returns a pagination token in the response.
   *       To fetch the next page of intents, use the pagination token in the next
   *       request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of intents to return in the response. The
   *       default is 10.</p>
   */
  maxResults?: number;
}

export namespace GetBuiltinIntentsRequest {
  export const filterSensitiveLog = (obj: GetBuiltinIntentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides metadata for a built-in intent.</p>
 */
export interface BuiltinIntentMetadata {
  /**
   * <p>A unique identifier for the built-in intent. To find the signature
   *       for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   */
  signature?: string;

  /**
   * <p>A list of identifiers for the locales that the intent
   *       supports.</p>
   */
  supportedLocales?: (Locale | string)[];
}

export namespace BuiltinIntentMetadata {
  export const filterSensitiveLog = (obj: BuiltinIntentMetadata): any => ({
    ...obj,
  });
}

export interface GetBuiltinIntentsResponse {
  /**
   * <p>An array of <code>builtinIntentMetadata</code> objects, one for
   *       each intent in the response.</p>
   */
  intents?: BuiltinIntentMetadata[];

  /**
   * <p>A pagination token that fetches the next page of intents. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of intents, specify the pagination
   *       token in the next request.</p>
   */
  nextToken?: string;
}

export namespace GetBuiltinIntentsResponse {
  export const filterSensitiveLog = (obj: GetBuiltinIntentsResponse): any => ({
    ...obj,
  });
}

export interface GetBuiltinSlotTypesRequest {
  /**
   * <p>A list of locales that the slot type supports.</p>
   */
  locale?: Locale | string;

  /**
   * <p>Substring to match in built-in slot type signatures. A slot type
   *       will be returned if any part of its signature matches the substring. For
   *       example, "xyz" matches both "xyzabc" and "abcxyz."</p>
   */
  signatureContains?: string;

  /**
   * <p>A pagination token that fetches the next page of slot types. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of slot types, specify the
   *       pagination token in the next request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of slot types to return in the response. The
   *       default is 10.</p>
   */
  maxResults?: number;
}

export namespace GetBuiltinSlotTypesRequest {
  export const filterSensitiveLog = (obj: GetBuiltinSlotTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a built in slot type.</p>
 */
export interface BuiltinSlotTypeMetadata {
  /**
   * <p>A unique identifier for the built-in slot type. To find the
   *       signature for a slot type, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/slot-type-reference">Slot Type Reference</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   */
  signature?: string;

  /**
   * <p>A list of target locales for the slot. </p>
   */
  supportedLocales?: (Locale | string)[];
}

export namespace BuiltinSlotTypeMetadata {
  export const filterSensitiveLog = (obj: BuiltinSlotTypeMetadata): any => ({
    ...obj,
  });
}

export interface GetBuiltinSlotTypesResponse {
  /**
   * <p>An array of <code>BuiltInSlotTypeMetadata</code> objects, one entry
   *       for each slot type returned.</p>
   */
  slotTypes?: BuiltinSlotTypeMetadata[];

  /**
   * <p>If the response is truncated, the response includes a pagination
   *       token that you can use in your next request to fetch the next page of slot
   *       types.</p>
   */
  nextToken?: string;
}

export namespace GetBuiltinSlotTypesResponse {
  export const filterSensitiveLog = (obj: GetBuiltinSlotTypesResponse): any => ({
    ...obj,
  });
}

export enum ExportType {
  ALEXA_SKILLS_KIT = "ALEXA_SKILLS_KIT",
  LEX = "LEX",
}

export enum ResourceType {
  BOT = "BOT",
  INTENT = "INTENT",
  SLOT_TYPE = "SLOT_TYPE",
}

export interface GetExportRequest {
  /**
   * <p>The name of the bot to export.</p>
   */
  name: string | undefined;

  /**
   * <p>The version of the bot to export.</p>
   */
  version: string | undefined;

  /**
   * <p>The type of resource to export. </p>
   */
  resourceType: ResourceType | string | undefined;

  /**
   * <p>The format of the exported data.</p>
   */
  exportType: ExportType | string | undefined;
}

export namespace GetExportRequest {
  export const filterSensitiveLog = (obj: GetExportRequest): any => ({
    ...obj,
  });
}

export enum ExportStatus {
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  READY = "READY",
}

export interface GetExportResponse {
  /**
   * <p>The name of the bot being exported.</p>
   */
  name?: string;

  /**
   * <p>The version of the bot being exported.</p>
   */
  version?: string;

  /**
   * <p>The type of the exported resource.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The format of the exported data.</p>
   */
  exportType?: ExportType | string;

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
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to export the resource.</p>
   */
  failureReason?: string;

  /**
   * <p>An S3 pre-signed URL that provides the location of the exported
   *       resource. The exported resource is a ZIP archive that contains the
   *       exported resource in JSON format. The structure of the archive may change.
   *       Your code should not rely on the archive structure.</p>
   */
  url?: string;
}

export namespace GetExportResponse {
  export const filterSensitiveLog = (obj: GetExportResponse): any => ({
    ...obj,
  });
}

export interface GetImportRequest {
  /**
   * <p>The identifier of the import job information to return.</p>
   */
  importId: string | undefined;
}

export namespace GetImportRequest {
  export const filterSensitiveLog = (obj: GetImportRequest): any => ({
    ...obj,
  });
}

export enum ImportStatus {
  COMPLETE = "COMPLETE",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
}

export enum MergeStrategy {
  FAIL_ON_CONFLICT = "FAIL_ON_CONFLICT",
  OVERWRITE_LATEST = "OVERWRITE_LATEST",
}

export interface GetImportResponse {
  /**
   * <p>The name given to the import job.</p>
   */
  name?: string;

  /**
   * <p>The type of resource imported.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The action taken when there was a conflict between an existing
   *       resource and a resource in the import file.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The identifier for the specific import job.</p>
   */
  importId?: string;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>,
   *       you can get the reason for the failure from the <code>failureReason</code>
   *       field.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>A string that describes why an import job failed to
   *       complete.</p>
   */
  failureReason?: string[];

  /**
   * <p>A timestamp for the date and time that the import job was
   *       created.</p>
   */
  createdDate?: Date;
}

export namespace GetImportResponse {
  export const filterSensitiveLog = (obj: GetImportResponse): any => ({
    ...obj,
  });
}

export interface GetIntentRequest {
  /**
   * <p>The name of the intent. The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>The version of the intent.</p>
   */
  version: string | undefined;
}

export namespace GetIntentRequest {
  export const filterSensitiveLog = (obj: GetIntentRequest): any => ({
    ...obj,
  });
}

export interface GetIntentResponse {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots configured for the intent.</p>
   */
  slots?: Slot[];

  /**
   * <p>An array of sample utterances configured for the intent.</p>
   */
  sampleUtterances?: string[];

  /**
   * <p>If defined in the bot, Amazon Lex uses prompt to confirm the intent
   *       before fulfilling the user's request. For more information, see <a>PutIntent</a>. </p>
   */
  confirmationPrompt?: Prompt;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: Statement;

  /**
   * <p>If defined in the bot, Amazon Lex uses this prompt to solicit additional
   *       user activity after the intent is fulfilled. For more information, see
   *         <a>PutIntent</a>.</p>
   */
  followUpPrompt?: FollowUpPrompt;

  /**
   * <p>After the Lambda function specified in the
   *         <code>fulfillmentActivity</code> element fulfills the intent, Amazon Lex
   *       conveys this statement to the user.</p>
   */
  conclusionStatement?: Statement;

  /**
   * <p>If defined in the bot, Amazon Amazon Lex invokes this Lambda function
   *       for each user input. For more information, see <a>PutIntent</a>. </p>
   */
  dialogCodeHook?: CodeHook;

  /**
   * <p>Describes how the intent is fulfilled. For more information, see
   *         <a>PutIntent</a>. </p>
   */
  fulfillmentActivity?: FulfillmentActivity;

  /**
   * <p>A unique identifier for a built-in intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. When you create a resource,
   *       the creation date and the last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the intent.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the intent.</p>
   */
  checksum?: string;

  /**
   * <p>Configuration information, if any, to connect to an Amazon Kendra
   *       index with the <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   */
  outputContexts?: OutputContext[];
}

export namespace GetIntentResponse {
  export const filterSensitiveLog = (obj: GetIntentResponse): any => ({
    ...obj,
  });
}

export interface GetIntentsRequest {
  /**
   * <p>A pagination token that fetches the next page of intents. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch the next page of intents, specify the pagination
   *       token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of intents to return in the response. The
   *       default is 10.</p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in intent names. An intent will be returned if
   *       any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   */
  nameContains?: string;
}

export namespace GetIntentsRequest {
  export const filterSensitiveLog = (obj: GetIntentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an intent.</p>
 */
export interface IntentMetadata {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The date that the intent was updated. When you create an intent,
   *       the creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the intent.</p>
   */
  version?: string;
}

export namespace IntentMetadata {
  export const filterSensitiveLog = (obj: IntentMetadata): any => ({
    ...obj,
  });
}

export interface GetIntentsResponse {
  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   */
  intents?: IntentMetadata[];

  /**
   * <p>If the response is truncated, the response includes a pagination
   *       token that you can specify in your next request to fetch the next page of
   *       intents. </p>
   */
  nextToken?: string;
}

export namespace GetIntentsResponse {
  export const filterSensitiveLog = (obj: GetIntentsResponse): any => ({
    ...obj,
  });
}

export interface GetIntentVersionsRequest {
  /**
   * <p>The name of the intent for which versions should be
   *       returned.</p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of intent versions.
   *       If the response to this call is truncated, Amazon Lex returns a pagination
   *       token in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of intent versions to return in the response.
   *       The default is 10.</p>
   */
  maxResults?: number;
}

export namespace GetIntentVersionsRequest {
  export const filterSensitiveLog = (obj: GetIntentVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetIntentVersionsResponse {
  /**
   * <p>An array of <code>IntentMetadata</code> objects, one for each
   *       numbered version of the intent plus one for the <code>$LATEST</code>
   *       version.</p>
   */
  intents?: IntentMetadata[];

  /**
   * <p>A pagination token for fetching the next page of intent versions.
   *       If the response to this call is truncated, Amazon Lex returns a pagination
   *       token in the response. To fetch the next page of versions, specify the
   *       pagination token in the next request. </p>
   */
  nextToken?: string;
}

export namespace GetIntentVersionsResponse {
  export const filterSensitiveLog = (obj: GetIntentVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetSlotTypeRequest {
  /**
   * <p>The name of the slot type. The name is case sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>The version of the slot type. </p>
   */
  version: string | undefined;
}

export namespace GetSlotTypeRequest {
  export const filterSensitiveLog = (obj: GetSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface GetSlotTypeResponse {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   */
  enumerationValues?: EnumerationValue[];

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last update date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the slot type.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   */
  checksum?: string;

  /**
   * <p>The strategy that Amazon Lex uses to determine the value of the slot.
   *       For more information, see <a>PutSlotType</a>.</p>
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | string;

  /**
   * <p>The built-in slot type used as a parent for the slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   */
  slotTypeConfigurations?: SlotTypeConfiguration[];
}

export namespace GetSlotTypeResponse {
  export const filterSensitiveLog = (obj: GetSlotTypeResponse): any => ({
    ...obj,
  });
}

export interface GetSlotTypesRequest {
  /**
   * <p>A pagination token that fetches the next page of slot types. If the
   *       response to this API call is truncated, Amazon Lex returns a pagination token
   *       in the response. To fetch next page of slot types, specify the pagination
   *       token in the next request.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of slot types to return in the response. The
   *       default is 10.</p>
   */
  maxResults?: number;

  /**
   * <p>Substring to match in slot type names. A slot type will be returned
   *       if any part of its name matches the substring. For example, "xyz" matches
   *       both "xyzabc" and "abcxyz."</p>
   */
  nameContains?: string;
}

export namespace GetSlotTypesRequest {
  export const filterSensitiveLog = (obj: GetSlotTypesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a slot type..</p>
 */
export interface SlotTypeMetadata {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>The date that the slot type was updated. When you create a
   *       resource, the creation date and last updated date are the same. </p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the slot type.</p>
   */
  version?: string;
}

export namespace SlotTypeMetadata {
  export const filterSensitiveLog = (obj: SlotTypeMetadata): any => ({
    ...obj,
  });
}

export interface GetSlotTypesResponse {
  /**
   * <p>An array of objects, one for each slot type, that provides
   *       information such as the name of the slot type, the version, and a
   *       description.</p>
   */
  slotTypes?: SlotTypeMetadata[];

  /**
   * <p>If the response is truncated, it includes a pagination token that
   *       you can specify in your next request to fetch the next page of slot
   *       types.</p>
   */
  nextToken?: string;
}

export namespace GetSlotTypesResponse {
  export const filterSensitiveLog = (obj: GetSlotTypesResponse): any => ({
    ...obj,
  });
}

export interface GetSlotTypeVersionsRequest {
  /**
   * <p>The name of the slot type for which versions should be
   *       returned.</p>
   */
  name: string | undefined;

  /**
   * <p>A pagination token for fetching the next page of slot type
   *       versions. If the response to this call is truncated, Amazon Lex returns a
   *       pagination token in the response. To fetch the next page of versions,
   *       specify the pagination token in the next request. </p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of slot type versions to return in the response.
   *       The default is 10.</p>
   */
  maxResults?: number;
}

export namespace GetSlotTypeVersionsRequest {
  export const filterSensitiveLog = (obj: GetSlotTypeVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetSlotTypeVersionsResponse {
  /**
   * <p>An array of <code>SlotTypeMetadata</code> objects, one for each
   *       numbered version of the slot type plus one for the <code>$LATEST</code>
   *       version.</p>
   */
  slotTypes?: SlotTypeMetadata[];

  /**
   * <p>A pagination token for fetching the next page of slot type
   *       versions. If the response to this call is truncated, Amazon Lex returns a
   *       pagination token in the response. To fetch the next page of versions,
   *       specify the pagination token in the next request. </p>
   */
  nextToken?: string;
}

export namespace GetSlotTypeVersionsResponse {
  export const filterSensitiveLog = (obj: GetSlotTypeVersionsResponse): any => ({
    ...obj,
  });
}

export enum StatusType {
  DETECTED = "Detected",
  MISSED = "Missed",
}

export interface GetUtterancesViewRequest {
  /**
   * <p>The name of the bot for which utterance information should be
   *       returned.</p>
   */
  botName: string | undefined;

  /**
   * <p>An array of bot versions for which utterance information should be
   *       returned. The limit is 5 versions per request.</p>
   */
  botVersions: string[] | undefined;

  /**
   * <p>To return utterances that were recognized and handled, use
   *         <code>Detected</code>. To return utterances that were not recognized,
   *       use <code>Missed</code>.</p>
   */
  statusType: StatusType | string | undefined;
}

export namespace GetUtterancesViewRequest {
  export const filterSensitiveLog = (obj: GetUtterancesViewRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about a single utterance that was made to your
 *       bot. </p>
 */
export interface UtteranceData {
  /**
   * <p>The text that was entered by the user or the text representation of
   *       an audio clip.</p>
   */
  utteranceString?: string;

  /**
   * <p>The number of times that the utterance was processed.</p>
   */
  count?: number;

  /**
   * <p>The total number of individuals that used the utterance.</p>
   */
  distinctUsers?: number;

  /**
   * <p>The date that the utterance was first recorded.</p>
   */
  firstUtteredDate?: Date;

  /**
   * <p>The date that the utterance was last recorded.</p>
   */
  lastUtteredDate?: Date;
}

export namespace UtteranceData {
  export const filterSensitiveLog = (obj: UtteranceData): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a list of utterances that have been made to a specific
 *       version of your bot. The list contains a maximum of 100
 *       utterances.</p>
 */
export interface UtteranceList {
  /**
   * <p>The version of the bot that processed the list.</p>
   */
  botVersion?: string;

  /**
   * <p>One or more <a>UtteranceData</a> objects that contain
   *       information about the utterances that have been made to a bot. The maximum
   *       number of object is 100.</p>
   */
  utterances?: UtteranceData[];
}

export namespace UtteranceList {
  export const filterSensitiveLog = (obj: UtteranceList): any => ({
    ...obj,
  });
}

export interface GetUtterancesViewResponse {
  /**
   * <p>The name of the bot for which utterance information was
   *       returned.</p>
   */
  botName?: string;

  /**
   * <p>An array of <a>UtteranceList</a> objects, each
   *       containing a list of <a>UtteranceData</a> objects describing
   *       the utterances that were processed by your bot. The response contains a
   *       maximum of 100 <code>UtteranceData</code> objects for each version. Amazon Lex
   *       returns the most frequent utterances received by the bot in the last 15
   *       days.</p>
   */
  utterances?: UtteranceList[];
}

export namespace GetUtterancesViewResponse {
  export const filterSensitiveLog = (obj: GetUtterancesViewResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get a list of tags
   *       for.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A list of key/value pairs that identify a bot, bot alias, or bot
 *       channel. Tag keys and values can consist of Unicode letters, digits, white
 *       space, and any of the following symbols: _ . : / = + - @. </p>
 */
export interface Tag {
  /**
   * <p>The key for the tag. Keys are not case-sensitive and must be
   *       unique.</p>
   */
  key: string | undefined;

  /**
   * <p>The value associated with a key. The value may be an empty string but
   *       it can't be null.</p>
   */
  value: string | undefined;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  tags?: Tag[];
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum ProcessBehavior {
  BUILD = "BUILD",
  SAVE = "SAVE",
}

export interface PutBotRequest {
  /**
   * <p>The name of the bot. The name is <i>not</i> case
   *       sensitive. </p>
   */
  name: string | undefined;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>Intent</code> objects. Each intent represents a
   *       command that a user can express. For example, a pizza ordering bot might
   *       support an OrderPizza intent. For more information, see <a>how-it-works</a>.</p>
   */
  intents?: Intent[];

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
   */
  enableModelImprovements?: boolean;

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
   */
  nluIntentConfidenceThreshold?: number;

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
   */
  clarificationPrompt?: Prompt;

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
   */
  abortStatement?: Statement;

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
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Polly voice ID that you want Amazon Lex to use for voice
   *       interactions with the user. The locale configured for the voice must match
   *       the locale of the bot. For more information, see <a href="https://docs.aws.amazon.com/polly/latest/dg/voicelist.html">Voices
   *         in Amazon Polly</a> in the <i>Amazon Polly Developer
   *         Guide</i>.</p>
   */
  voiceId?: string;

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
   */
  checksum?: string;

  /**
   * <p>If you set the <code>processBehavior</code> element to
   *         <code>BUILD</code>, Amazon Lex builds the bot so that it can be run. If you
   *       set the element to <code>SAVE</code> Amazon Lex saves the bot, but doesn't
   *       build it. </p>
   *          <p>If you don't specify this value, the default value is
   *         <code>BUILD</code>.</p>
   */
  processBehavior?: ProcessBehavior | string;

  /**
   * <p> Specifies the target locale for the bot. Any intent used in the
   *       bot must be compatible with the locale of the bot. </p>
   *
   *          <p>The default is <code>en-US</code>.</p>
   */
  locale: Locale | string | undefined;

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
   */
  childDirected: boolean | undefined;

  /**
   * <p>When set to <code>true</code> user utterances are sent to Amazon
   *       Comprehend for sentiment analysis. If you don't specify
   *         <code>detectSentiment</code>, the default is <code>false</code>.</p>
   */
  detectSentiment?: boolean;

  /**
   * <p>When set to <code>true</code> a new numbered version of the bot is
   *       created. This is the same as calling the <code>CreateBotVersion</code>
   *       operation. If you don't specify <code>createVersion</code>, the default is
   *         <code>false</code>.</p>
   */
  createVersion?: boolean;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *       create a bot, you can't use the <code>PutBot</code> operation to update
   *       the tags on a bot. To update tags, use the <code>TagResource</code>
   *       operation.</p>
   */
  tags?: Tag[];
}

export namespace PutBotRequest {
  export const filterSensitiveLog = (obj: PutBotRequest): any => ({
    ...obj,
  });
}

export interface PutBotResponse {
  /**
   * <p>The name of the bot.</p>
   */
  name?: string;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>An array of <code>Intent</code> objects. For more information, see
   *         <a>PutBot</a>.</p>
   */
  intents?: Intent[];

  /**
   * <p>Indicates whether the bot uses accuracy improvements.
   *         <code>true</code> indicates that the bot is using the improvements,
   *       otherwise, <code>false</code>.</p>
   */
  enableModelImprovements?: boolean;

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
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p> The prompts that Amazon Lex uses when it doesn't understand the user's
   *       intent. For more information, see <a>PutBot</a>. </p>
   */
  clarificationPrompt?: Prompt;

  /**
   * <p>The message that Amazon Lex uses to cancel a conversation. For more
   *       information, see <a>PutBot</a>.</p>
   */
  abortStatement?: Statement;

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
   */
  status?: Status | string;

  /**
   * <p>If <code>status</code> is <code>FAILED</code>, Amazon Lex provides the
   *       reason that it failed to build the bot.</p>
   */
  failureReason?: string;

  /**
   * <p>The date that the bot was updated. When you create a resource, the
   *       creation date and last updated date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The maximum length of time that Amazon Lex retains the data gathered in
   *       a conversation. For more information, see <a>PutBot</a>.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction
   *       with the user. For more information, see <a>PutBot</a>.</p>
   */
  voiceId?: string;

  /**
   * <p>Checksum of the bot that you created.</p>
   */
  checksum?: string;

  /**
   * <p>The version of the bot. For a new bot, the version is always
   *         <code>$LATEST</code>.</p>
   */
  version?: string;

  /**
   * <p> The target locale for the bot. </p>
   */
  locale?: Locale | string;

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
   */
  childDirected?: boolean;

  /**
   * <p>
   *             <code>True</code> if a new version of the bot was created. If the
   *         <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   */
  createVersion?: boolean;

  /**
   * <p>
   *             <code>true</code> if the bot is configured to send user utterances to
   *       Amazon Comprehend for sentiment analysis. If the
   *         <code>detectSentiment</code> field was not specified in the request, the
   *         <code>detectSentiment</code> field is <code>false</code> in the
   *       response.</p>
   */
  detectSentiment?: boolean;

  /**
   * <p>A list of tags associated with the bot.</p>
   */
  tags?: Tag[];
}

export namespace PutBotResponse {
  export const filterSensitiveLog = (obj: PutBotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Settings used to configure delivery mode and destination for
 *       conversation logs.</p>
 */
export interface LogSettingsRequest {
  /**
   * <p>The type of logging to enable. Text logs are delivered to a CloudWatch
   *       Logs log group. Audio logs are delivered to an S3 bucket.</p>
   */
  logType: LogType | string | undefined;

  /**
   * <p>Where the logs will be delivered. Text logs are delivered to a
   *       CloudWatch Logs log group. Audio logs are delivered to an S3
   *       bucket.</p>
   */
  destination: Destination | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS KMS customer managed key for
   *       encrypting audio logs delivered to an S3 bucket. The key does not apply to
   *       CloudWatch Logs and is optional for S3 buckets.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the CloudWatch Logs log group or S3
   *       bucket where the logs should be delivered.</p>
   */
  resourceArn: string | undefined;
}

export namespace LogSettingsRequest {
  export const filterSensitiveLog = (obj: LogSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the settings needed for conversation logs.</p>
 */
export interface ConversationLogsRequest {
  /**
   * <p>The settings for your conversation logs. You can log the conversation
   *       text, conversation audio, or both.</p>
   */
  logSettings: LogSettingsRequest[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role with permission to write
   *       to your CloudWatch Logs for text logs and your S3 bucket for audio logs.
   *       If audio encryption is enabled, this role also provides access permission
   *       for the AWS KMS key used for encrypting audio logs. For more information,
   *       see <a href="https://docs.aws.amazon.com/lex/latest/dg/conversation-logs-role-and-policy.html">Creating an
   *         IAM Role and Policy for Conversation Logs</a>.</p>
   */
  iamRoleArn: string | undefined;
}

export namespace ConversationLogsRequest {
  export const filterSensitiveLog = (obj: ConversationLogsRequest): any => ({
    ...obj,
  });
}

export interface PutBotAliasRequest {
  /**
   * <p>The name of the alias. The name is <i>not</i> case
   *       sensitive.</p>
   */
  name: string | undefined;

  /**
   * <p>A description of the alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The name of the bot.</p>
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
   */
  checksum?: string;

  /**
   * <p>Settings for conversation logs for the alias.</p>
   */
  conversationLogs?: ConversationLogsRequest;

  /**
   * <p>A list of tags to add to the bot alias. You can only add tags when you
   *       create an alias, you can't use the <code>PutBotAlias</code> operation to
   *       update the tags on a bot alias. To update tags, use the
   *         <code>TagResource</code> operation.</p>
   */
  tags?: Tag[];
}

export namespace PutBotAliasRequest {
  export const filterSensitiveLog = (obj: PutBotAliasRequest): any => ({
    ...obj,
  });
}

export interface PutBotAliasResponse {
  /**
   * <p>The name of the alias.</p>
   */
  name?: string;

  /**
   * <p>A description of the alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot that the alias points to.</p>
   */
  botVersion?: string;

  /**
   * <p>The name of the bot that the alias points to.</p>
   */
  botName?: string;

  /**
   * <p>The date that the bot alias was updated. When you create a
   *       resource, the creation date and the last updated date are the
   *       same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the bot alias was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The checksum for the current version of the alias.</p>
   */
  checksum?: string;

  /**
   * <p>The settings that determine how Amazon Lex uses conversation logs for the
   *       alias.</p>
   */
  conversationLogs?: ConversationLogsResponse;

  /**
   * <p>A list of tags associated with a bot.</p>
   */
  tags?: Tag[];
}

export namespace PutBotAliasResponse {
  export const filterSensitiveLog = (obj: PutBotAliasResponse): any => ({
    ...obj,
  });
}

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
   */
  name: string | undefined;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots. At runtime, Amazon Lex elicits required slot
   *       values from the user using prompts defined in the slots. For more
   *       information, see <a>how-it-works</a>. </p>
   */
  slots?: Slot[];

  /**
   * <p>An array of utterances (strings) that a user might say to signal
   *       the intent. For example, "I want {PizzaSize} pizza", "Order {Quantity}
   *       {PizzaSize} pizzas". </p>
   *
   *          <p>In each utterance, a slot name is enclosed in curly braces.
   *     </p>
   */
  sampleUtterances?: string[];

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
   */
  confirmationPrompt?: Prompt;

  /**
   * <p>When the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code>, Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   *          <note>
   *             <p>You must provide both the <code>rejectionStatement</code> and the
   *           <code>confirmationPrompt</code>, or neither.</p>
   *          </note>
   */
  rejectionStatement?: Statement;

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
   *
   *          <p>The <code>followUpPrompt</code> field and the
   *         <code>conclusionStatement</code> field are mutually exclusive. You can
   *       specify only one. </p>
   */
  followUpPrompt?: FollowUpPrompt;

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
   */
  conclusionStatement?: Statement;

  /**
   * <p> Specifies a Lambda function to invoke for each user input. You can
   *       invoke this Lambda function to personalize user interaction. </p>
   *          <p>For example, suppose your bot determines that the user is John.
   *       Your Lambda function might retrieve John's information from a backend
   *       database and prepopulate some of the values. For example, if you find that
   *       John is gluten intolerant, you might set the corresponding intent slot,
   *         <code>GlutenIntolerant</code>, to true. You might find John's phone
   *       number and set the corresponding session attribute. </p>
   */
  dialogCodeHook?: CodeHook;

  /**
   * <p>Required. Describes how the intent is fulfilled. For example, after
   *       a user provides all of the information for a pizza order,
   *         <code>fulfillmentActivity</code> defines how the bot places an order
   *       with a local pizza store. </p>
   *          <p> You might configure Amazon Lex to return all of the intent information
   *       to the client application, or direct it to invoke a Lambda function that
   *       can process the intent (for example, place an order with a pizzeria).
   *     </p>
   */
  fulfillmentActivity?: FulfillmentActivity;

  /**
   * <p>A unique identifier for the built-in intent to base this intent on.
   *       To find the signature for an intent, see <a href="https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/built-in-intent-ref/standard-intents">Standard Built-in Intents</a> in the <i>Alexa Skills
   *         Kit</i>.</p>
   */
  parentIntentSignature?: string;

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
   */
  checksum?: string;

  /**
   * <p>When set to <code>true</code> a new numbered version of the intent
   *       is created. This is the same as calling the
   *         <code>CreateIntentVersion</code> operation. If you do not specify
   *         <code>createVersion</code>, the default is <code>false</code>.</p>
   */
  createVersion?: boolean;

  /**
   * <p>Configuration information required to use the
   *         <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon
   *       Kendra index. For more information, see <a href="http://docs.aws.amazon.com/lex/latest/dg/built-in-intent-kendra-search.html">
   *         AMAZON.KendraSearchIntent</a>.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   */
  outputContexts?: OutputContext[];
}

export namespace PutIntentRequest {
  export const filterSensitiveLog = (obj: PutIntentRequest): any => ({
    ...obj,
  });
}

export interface PutIntentResponse {
  /**
   * <p>The name of the intent.</p>
   */
  name?: string;

  /**
   * <p>A description of the intent.</p>
   */
  description?: string;

  /**
   * <p>An array of intent slots that are configured for the
   *       intent.</p>
   */
  slots?: Slot[];

  /**
   * <p> An array of sample utterances that are configured for the intent.
   *     </p>
   */
  sampleUtterances?: string[];

  /**
   * <p>If defined in the intent, Amazon Lex prompts the user to confirm the
   *       intent before fulfilling it.</p>
   */
  confirmationPrompt?: Prompt;

  /**
   * <p>If the user answers "no" to the question defined in
   *         <code>confirmationPrompt</code> Amazon Lex responds with this statement to
   *       acknowledge that the intent was canceled. </p>
   */
  rejectionStatement?: Statement;

  /**
   * <p>If defined in the intent, Amazon Lex uses this prompt to solicit
   *       additional user activity after the intent is fulfilled.</p>
   */
  followUpPrompt?: FollowUpPrompt;

  /**
   * <p>After the Lambda function specified in
   *         the<code>fulfillmentActivity</code>intent fulfills the intent, Amazon Lex
   *       conveys this statement to the user.</p>
   */
  conclusionStatement?: Statement;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function for
   *       each user input.</p>
   */
  dialogCodeHook?: CodeHook;

  /**
   * <p>If defined in the intent, Amazon Lex invokes this Lambda function to
   *       fulfill the intent after the user provides all of the information required
   *       by the intent.</p>
   */
  fulfillmentActivity?: FulfillmentActivity;

  /**
   * <p>A unique identifier for the built-in intent that this intent is
   *       based on.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The date that the intent was updated. When you create a resource,
   *       the creation date and last update dates are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the intent was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the intent. For a new intent, the version is always
   *         <code>$LATEST</code>.</p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code>version of the intent created
   *       or updated.</p>
   */
  checksum?: string;

  /**
   * <p>
   *             <code>True</code> if a new version of the intent was created. If
   *       the <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   */
  createVersion?: boolean;

  /**
   * <p>Configuration information, if any, required to connect to an Amazon
   *       Kendra index and use the <code>AMAZON.KendraSearchIntent</code>
   *       intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>An array of <code>InputContext</code> objects that lists the contexts
   *       that must be active for Amazon Lex to choose the intent in a conversation with
   *       the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>An array of <code>OutputContext</code> objects that lists the contexts
   *       that the intent activates when the intent is fulfilled.</p>
   */
  outputContexts?: OutputContext[];
}

export namespace PutIntentResponse {
  export const filterSensitiveLog = (obj: PutIntentResponse): any => ({
    ...obj,
  });
}

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
   */
  name: string | undefined;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

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
   */
  enumerationValues?: EnumerationValue[];

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
   */
  checksum?: string;

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
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | string;

  /**
   * <p>When set to <code>true</code> a new numbered version of the slot
   *       type is created. This is the same as calling the
   *         <code>CreateSlotTypeVersion</code> operation. If you do not specify
   *         <code>createVersion</code>, the default is <code>false</code>.</p>
   */
  createVersion?: boolean;

  /**
   * <p>The built-in slot type used as the parent of the slot type. When you
   *       define a parent slot type, the new slot type has all of the same
   *       configuration as the parent.</p>
   *          <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>Configuration information that extends the parent built-in slot type.
   *       The configuration is added to the settings for the parent slot
   *       type.</p>
   */
  slotTypeConfigurations?: SlotTypeConfiguration[];
}

export namespace PutSlotTypeRequest {
  export const filterSensitiveLog = (obj: PutSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface PutSlotTypeResponse {
  /**
   * <p>The name of the slot type.</p>
   */
  name?: string;

  /**
   * <p>A description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>EnumerationValue</code> objects that defines the
   *       values that the slot type can take.</p>
   */
  enumerationValues?: EnumerationValue[];

  /**
   * <p>The date that the slot type was updated. When you create a slot
   *       type, the creation date and last update date are the same.</p>
   */
  lastUpdatedDate?: Date;

  /**
   * <p>The date that the slot type was created.</p>
   */
  createdDate?: Date;

  /**
   * <p>The version of the slot type. For a new slot type, the version is
   *       always <code>$LATEST</code>. </p>
   */
  version?: string;

  /**
   * <p>Checksum of the <code>$LATEST</code> version of the slot
   *       type.</p>
   */
  checksum?: string;

  /**
   * <p>The slot resolution strategy that Amazon Lex uses to determine the value
   *       of the slot. For more information, see <a>PutSlotType</a>.</p>
   */
  valueSelectionStrategy?: SlotValueSelectionStrategy | string;

  /**
   * <p>
   *             <code>True</code> if a new version of the slot type was created. If
   *       the <code>createVersion</code> field was not specified in the request, the
   *         <code>createVersion</code> field is set to false in the
   *       response.</p>
   */
  createVersion?: boolean;

  /**
   * <p>The built-in slot type used as the parent of the slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>Configuration information that extends the parent built-in slot
   *       type.</p>
   */
  slotTypeConfigurations?: SlotTypeConfiguration[];
}

export namespace PutSlotTypeResponse {
  export const filterSensitiveLog = (obj: PutSlotTypeResponse): any => ({
    ...obj,
  });
}

export interface StartImportRequest {
  /**
   * <p>A zip archive in binary format. The archive should contain one file, a
   *       JSON file containing the resource to import. The resource should match the
   *       type specified in the <code>resourceType</code> field.</p>
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
   */
  resourceType: ResourceType | string | undefined;

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
   */
  mergeStrategy: MergeStrategy | string | undefined;

  /**
   * <p>A list of tags to add to the imported bot. You can only add tags when
   *       you import a bot, you can't add tags to an intent or slot type.</p>
   */
  tags?: Tag[];
}

export namespace StartImportRequest {
  export const filterSensitiveLog = (obj: StartImportRequest): any => ({
    ...obj,
  });
}

export interface StartImportResponse {
  /**
   * <p>The name given to the import job.</p>
   */
  name?: string;

  /**
   * <p>The type of resource to import.</p>
   */
  resourceType?: ResourceType | string;

  /**
   * <p>The action to take when there is a merge conflict.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The identifier for the specific import job.</p>
   */
  importId?: string;

  /**
   * <p>The status of the import job. If the status is <code>FAILED</code>,
   *       you can get the reason for the failure using the <code>GetImport</code>
   *       operation.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>A list of tags added to the imported bot.</p>
   */
  tags?: Tag[];

  /**
   * <p>A timestamp for the date and time that the import job was
   *       requested.</p>
   */
  createdDate?: Date;
}

export namespace StartImportResponse {
  export const filterSensitiveLog = (obj: StartImportResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel
   *       to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to add to the resource. If a tag key already
   *       exists, the existing value is replaced with the new value.</p>
   */
  tags: Tag[] | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags
   *       from.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource. If a tag key does not
   *       exist on the resource, it is ignored.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
