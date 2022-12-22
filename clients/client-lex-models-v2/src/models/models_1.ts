// smithy-typescript generated code
import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import {
  BotAliasLocaleSettings,
  BotAliasStatus,
  BotLocaleStatus,
  BotRecommendationStatus,
  BotStatus,
  CompositeSlotTypeSetting,
  Condition,
  ConversationLogSettings,
  DataPrivacy,
  DialogAction,
  DialogCodeHookSettings,
  ElicitationCodeHookInvocationSetting,
  EncryptionSetting,
  EncryptionSettingFilterSensitiveLog,
  ExportResourceSpecification,
  ExportStatus,
  ExternalSourceSetting,
  FulfillmentUpdatesSpecification,
  ImportExportFileFormat,
  InputContext,
  KendraConfiguration,
  MultipleValuesSetting,
  ObfuscationSetting,
  OutputContext,
  PromptSpecification,
  ResponseSpecification,
  SampleUtterance,
  SentimentAnalysisSettings,
  SlotConstraint,
  SlotDefaultValueSpecification,
  SlotPriority,
  SlotShape,
  SlotTypeValue,
  SlotValue,
  SlotValueSelectionSetting,
  SubSlotSetting,
  TranscriptSourceSetting,
  VoiceSettings,
  WaitAndContinueSpecification,
} from "./models_0";

export interface UpdateBotRequest {
  /**
   * <p>The unique identifier of the bot to update. This identifier is
   *          returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBot.html">CreateBot</a> operation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The new name of the bot. The name must be unique in the account that
   *          creates the bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>A description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permissions
   *          to access the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Provides information on additional privacy protections Amazon Lex should
   *          use with the bot's data.</p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot.</p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds: number | undefined;
}

export interface UpdateBotResponse {
  /**
   * <p>The unique identifier of the bot that was updated.</p>
   */
  botId?: string;

  /**
   * <p>The name of the bot after the update.</p>
   */
  botName?: string;

  /**
   * <p>The description of the bot after the update.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used by the bot after
   *          the update.</p>
   */
  roleArn?: string;

  /**
   * <p>The data privacy settings for the bot after the update.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * <p>The session timeout, in seconds, for the bot after the
   *          update.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>Shows the current status of the bot. The bot is first in the
   *             <code>Creating</code> status. Once the bot is read for use, it
   *          changes to the <code>Available</code> status. After the bot is created,
   *          you can use the <code>DRAFT</code> version of the bot.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>A timestamp of the date and time that the bot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export interface UpdateBotAliasRequest {
  /**
   * <p>The unique identifier of the bot alias.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The new name to assign to the bot alias.</p>
   */
  botAliasName: string | undefined;

  /**
   * <p>The new description to assign to the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The new bot version to assign to the bot alias.</p>
   */
  botVersion?: string;

  /**
   * <p>The new Lambda functions to use in each locale for the bot
   *          alias.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * <p>The new settings for storing conversation logs in Amazon CloudWatch Logs and
   *          Amazon S3 buckets.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The identifier of the bot with the updated alias.</p>
   */
  botId: string | undefined;
}

export interface UpdateBotAliasResponse {
  /**
   * <p>The identifier of the updated bot alias.</p>
   */
  botAliasId?: string;

  /**
   * <p>The updated name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * <p>The updated description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The updated version of the bot that the alias points to.</p>
   */
  botVersion?: string;

  /**
   * <p>The updated Lambda functions to use in each locale for the bot
   *          alias.</p>
   */
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

  /**
   * <p>The updated settings for storing conversation logs in Amazon CloudWatch Logs and
   *          Amazon S3 buckets.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The current status of the bot alias. When the status is
   *             <code>Available</code> the alias is ready for use.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * <p>The identifier of the bot with the updated alias.</p>
   */
  botId?: string;

  /**
   * <p>A timestamp of the date and time that the bot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export interface UpdateBotLocaleRequest {
  /**
   * <p>The unique identifier of the bot that contains the locale.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the locale to be updated. The
   *          version can only be the <code>DRAFT</code> version.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale to update. The string must
   *          match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The new description of the locale.</p>
   */
  description?: string;

  /**
   * <p>The new confidence threshold where Amazon Lex inserts the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * <p>The new Amazon Polly voice Amazon Lex should use for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
}

export interface UpdateBotLocaleResponse {
  /**
   * <p>The identifier of the bot that contains the updated locale.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the updated locale.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the updated bot locale.</p>
   */
  localeId?: string;

  /**
   * <p>The updated locale name for the locale.</p>
   */
  localeName?: string;

  /**
   * <p>The updated description of the locale.</p>
   */
  description?: string;

  /**
   * <p>The updated confidence threshold for inserting the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>The updated Amazon Polly voice to use for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * <p>The current status of the locale. When the bot status is
   *             <code>Built</code> the locale is ready for use.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>If the <code>botLocaleStatus</code> is <code>Failed</code>, the
   *             <code>failureReasons</code> field lists the errors that occurred
   *          while building the bot.</p>
   */
  failureReasons?: string[];

  /**
   * <p>A timestamp of the date and time that the locale was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the locale was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Recommended actions to take to resolve an error in the
   *             <code>failureReasons</code> field.</p>
   */
  recommendedActions?: string[];
}

export interface UpdateBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation
   *          to be updated.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation to be
   *          updated.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to update. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>The object representing the passwords that will be used to encrypt
   *          the data related to the bot recommendation results, as well as the KMS
   *          key ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting: EncryptionSetting | undefined;
}

export interface UpdateBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation
   *          that has been updated.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the bot recommendation that has
   *          been updated.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to update. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting?: TranscriptSourceSetting;

  /**
   * <p>The object representing the passwords that were used to encrypt the
   *          data related to the bot recommendation results, as well as the KMS key
   *          ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;
}

export interface UpdateExportRequest {
  /**
   * <p>The unique identifier Amazon Lex assigned to the export.</p>
   */
  exportId: string | undefined;

  /**
   * <p>The new password to use to encrypt the export zip archive.</p>
   */
  filePassword?: string;
}

export interface UpdateExportResponse {
  /**
   * <p>The unique identifier Amazon Lex assigned to the export.</p>
   */
  exportId?: string;

  /**
   * <p>A description of the type of resource that was exported, either a
   *          bot or a bot locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used for the files that define the resource. The
   *             <code>TSV</code> format is required to export a custom vocabulary
   *          only; otherwise use <code>LexJson</code> format.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>
   *          the export archive is available for download.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>The date and time that the export was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the export was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export interface UpdateResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>A resource policy to add to the resource. The policy is a JSON
   *          structure that contains one or more statements that define the policy.
   *          The policy must follow the IAM syntax. For more information about the
   *          contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>. </p>
   *          <p>If the policy isn't valid, Amazon Lex returns a validation
   *          exception.</p>
   */
  policy: string | undefined;

  /**
   * <p>The identifier of the revision of the policy to update. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   */
  expectedRevisionId?: string;
}

export interface UpdateResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn?: string;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

export interface UpdateSlotTypeRequest {
  /**
   * <p>The unique identifier of the slot type to update.</p>
   */
  slotTypeId: string | undefined;

  /**
   * <p>The new name of the slot type.</p>
   */
  slotTypeName: string | undefined;

  /**
   * <p>The new description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>A new list of values and their optional synonyms that define the
   *          values that the slot type can take.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The strategy that Amazon Lex should use when deciding on a value from the
   *          list of slot type values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The new built-in slot type that should be used as the parent of this
   *          slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot that contains the slot type.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot type. Must be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that contains the slot
   *          type. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Provides information about the external source of the slot type's
   *          definition.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

export interface UpdateSlotTypeResponse {
  /**
   * <p>The unique identifier of the updated slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The updated name of the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The updated description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>The updated values that the slot type provides.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The updated strategy that Amazon Lex uses to determine which value to
   *          select from the slot type.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The updated signature of the built-in slot type that is the parent
   *          of this slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot that contains the slot type.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slot type. This is always
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the updated slot type.</p>
   */
  localeId?: string;

  /**
   * <p>The timestamp of the date and time that the slot type was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the slot type was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Provides information about the external source of the slot type's
   *          definition.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

/**
 * <p>The slot values that Amazon Lex uses when it sets slot
 *          values in a dialog step.</p>
 */
export interface SlotValueOverride {
  /**
   * <p>When the shape value is <code>List</code>, it indicates that the
   *             <code>values</code> field contains a list of slot values. When the
   *          value is <code>Scalar</code>, it indicates that the <code>value</code>
   *          field contains a single value.</p>
   */
  shape?: SlotShape | string;

  /**
   * <p>The current value of the slot.</p>
   */
  value?: SlotValue;

  /**
   * <p>A list of one or more values that the user provided for the slot.
   *          For example, for a slot that elicits pizza toppings, the values
   *          might be "pepperoni" and "pineapple."</p>
   */
  values?: SlotValueOverride[];
}

/**
 * <p>Override settings to configure the intent state.</p>
 */
export interface IntentOverride {
  /**
   * <p>The name of the intent. Only required when you're switching
   *          intents.</p>
   */
  name?: string;

  /**
   * <p>A map of all of the slot value overrides for the intent. The name of
   *          the slot maps to the value of the slot. Slots that are not included in
   *          the map aren't overridden.,</p>
   */
  slots?: Record<string, SlotValueOverride>;
}

/**
 * <p>The current state of the conversation with the user.</p>
 */
export interface DialogState {
  /**
   * <p> Defines the action that the bot executes at runtime when the
   *          conversation reaches this step.</p>
   */
  dialogAction?: DialogAction;

  /**
   * <p>Override settings to configure the intent state.</p>
   */
  intent?: IntentOverride;

  /**
   * <p>Map of key/value pairs representing session-specific context
   *          information. It contains application information passed between Amazon Lex and a client application.</p>
   */
  sessionAttributes?: Record<string, string>;
}

/**
 * <p>A set of actions that Amazon Lex should run if the condition
 *          is matched.</p>
 */
export interface ConditionalBranch {
  /**
   * <p>The name of the branch. </p>
   */
  name: string | undefined;

  /**
   * <p>Contains the expression to evaluate. If the condition is true, the
   *          branch's actions are taken.</p>
   */
  condition: Condition | undefined;

  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep: DialogState | undefined;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  response?: ResponseSpecification;
}

/**
 * <p>A set of actions that Amazon Lex should run if none of the
 *          other conditions are met.</p>
 */
export interface DefaultConditionalBranch {
  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  response?: ResponseSpecification;
}

/**
 * <p>Provides a list of conditional branches. Branches are evaluated in
 *          the order that they are entered in the list. The first branch with a
 *          condition that evaluates to true is executed. The last branch in the
 *          list is the default branch. The default branch should not have any condition
 *          expression. The default branch is executed if no other branch has a
 *          matching condition.</p>
 */
export interface ConditionalSpecification {
  /**
   * <p>Determines whether a conditional branch is active. When
   *             <code>active</code> is false, the conditions are not
   *          evaluated.</p>
   */
  active: boolean | undefined;

  /**
   * <p>A list of conditional branches. A conditional branch is made up of a
   *          condition, a response and a next step. The response and next step are
   *          executed when the condition is true.</p>
   */
  conditionalBranches: ConditionalBranch[] | undefined;

  /**
   * <p>The conditional branch that should be followed when the conditions
   *          for other branches are not satisfied. A conditional branch is made up
   *          of a condition, a response and a next step.</p>
   */
  defaultBranch: DefaultConditionalBranch | undefined;
}

/**
 * <p>Provides a statement the Amazon Lex conveys to the user when the intent
 *          is successfully fulfilled.</p>
 */
export interface IntentClosingSetting {
  /**
   * <p>The response that Amazon Lex sends to the user when the intent is
   *          complete.</p>
   */
  closingResponse?: ResponseSpecification;

  /**
   * <p>Specifies whether an intent's closing response is used. When this
   *          field is false, the closing response isn't sent to the user. If the
   *             <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;

  /**
   * <p>Specifies the next step that the bot executes after playing the
   *          intent's closing response.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>A list of conditional branches associated with the intent's closing
   *          response. These branches are executed when the <code>nextStep</code>
   *          attribute is set to <code>EvalutateConditional</code>.</p>
   */
  conditional?: ConditionalSpecification;
}

/**
 * <p>Specifies next steps to run after the dialog code hook
 *          finishes.</p>
 */
export interface PostDialogCodeHookInvocationSpecification {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  successResponse?: ResponseSpecification;

  /**
   * <p>Specifics the next step the bot runs after the dialog code hook
   *          finishes successfully. </p>
   */
  successNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the dialog code
   *          hook finishes successfully.</p>
   */
  successConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step the bot runs after the dialog code hook
   *          throws an exception or returns with the <code>State</code> field of the
   *             <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the dialog code
   *          hook throws an exception or returns with the <code>State</code> field
   *          of the <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  timeoutResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the code hook times
   *          out.</p>
   */
  timeoutNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate if the code hook times
   *          out.</p>
   */
  timeoutConditional?: ConditionalSpecification;
}

/**
 * <p>Provides a setting that determines whether the post-fulfillment
 *          response is sent to the user. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete">https://docs.aws.amazon.com/lexv2/latest/dg/streaming-progress.html#progress-complete</a>
 *          </p>
 */
export interface PostFulfillmentStatusSpecification {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  successResponse?: ResponseSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  timeoutResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step in the conversation that Amazon Lex
   *          invokes when the fulfillment code hook completes successfully.</p>
   */
  successNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the fulfillment
   *          code hook finishes successfully.</p>
   */
  successConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step the bot runs after the fulfillment code hook
   *          throws an exception or returns with the <code>State</code> field of the
   *             <code>Intent</code> object set to <code>Failed</code>.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the fulfillment
   *          code hook throws an exception or returns with the <code>State</code>
   *          field of the <code>Intent</code> object set to
   *          <code>Failed</code>.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the fulfillment code
   *          hook times out.</p>
   */
  timeoutNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate if the fulfillment code
   *          hook times out.</p>
   */
  timeoutConditional?: ConditionalSpecification;
}

/**
 * <p> Settings that specify the dialog code hook that is
 *          called by Amazon Lex at a step of the conversation. </p>
 */
export interface DialogCodeHookInvocationSetting {
  /**
   * <p>Indicates whether a Lambda function should be invoked
   *          for the dialog.</p>
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * <p>Determines whether a dialog code hook is used when the intent is
   *          activated.</p>
   */
  active: boolean | undefined;

  /**
   * <p>A label that indicates the dialog step from which the dialog code
   *          hook is happening.</p>
   */
  invocationLabel?: string;

  /**
   * <p>Contains the responses and actions that Amazon Lex takes
   *          after the Lambda function is complete.</p>
   */
  postCodeHookSpecification: PostDialogCodeHookInvocationSpecification | undefined;
}

/**
 * <p>Determines if a Lambda function should be invoked for a specific
 *          intent.</p>
 */
export interface FulfillmentCodeHookSettings {
  /**
   * <p>Indicates whether a Lambda function should be invoked to fulfill a
   *          specific intent.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Provides settings for messages sent to the user for after the Lambda
   *          fulfillment function completes. Post-fulfillment messages can be sent
   *          for both streaming and non-streaming conversations.</p>
   */
  postFulfillmentStatusSpecification?: PostFulfillmentStatusSpecification;

  /**
   * <p>Provides settings for update messages sent to the user for
   *          long-running Lambda fulfillment functions. Fulfillment updates can be
   *          used only with streaming conversations.</p>
   */
  fulfillmentUpdatesSpecification?: FulfillmentUpdatesSpecification;

  /**
   * <p>Determines whether the fulfillment code hook is used. When
   *             <code>active</code> is false, the code hook doesn't run.</p>
   */
  active?: boolean;
}

/**
 * <p>Configuration setting for a response sent to the user before Amazon Lex starts eliciting slots.</p>
 */
export interface InitialResponseSetting {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  initialResponse?: ResponseSpecification;

  /**
   * <p>The next step in the conversation.</p>
   */
  nextStep?: DialogState;

  /**
   * <p>Provides a list of conditional branches. Branches are evaluated in
   *          the order that they are entered in the list. The first branch with a
   *          condition that evaluates to true is executed. The last branch in the
   *          list is the default branch. The default branch should not have any condition
   *          expression. The default branch is executed if no other branch has a
   *          matching condition.</p>
   */
  conditional?: ConditionalSpecification;

  /**
   * <p> Settings that specify the dialog code hook that is
   *          called by Amazon Lex at a step of the conversation. </p>
   */
  codeHook?: DialogCodeHookInvocationSetting;
}

/**
 * <p>Settings used when Amazon Lex successfully captures a slot
 *          value from a user.</p>
 */
export interface SlotCaptureSetting {
  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  captureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the slot value is
   *          captured before the code hook times out.</p>
   */
  captureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the slot value is
   *          captured.</p>
   */
  captureConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot runs when the slot value code
   *          is not recognized.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate when the slot value isn't
   *          captured.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>Code hook called after Amazon Lex successfully captures a
   *          slot value.</p>
   */
  codeHook?: DialogCodeHookInvocationSetting;

  /**
   * <p>Code hook called when Amazon Lex doesn't capture a slot
   *          value.</p>
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}

/**
 * <p>Specifies the elicitation setting details for constituent sub slots of a composite slot.</p>
 */
export interface SlotValueElicitationSetting {
  /**
   * <p>A list of default values for a slot. Default values are used when
   *          Amazon Lex hasn't determined a value for a slot. You can specify default
   *          values from context variables, session attributes, and defined
   *          values.</p>
   */
  defaultValueSpecification?: SlotDefaultValueSpecification;

  /**
   * <p>Specifies whether the slot is required or optional.</p>
   */
  slotConstraint: SlotConstraint | string | undefined;

  /**
   * <p>The prompt that Amazon Lex uses to elicit the slot value from the
   *          user.</p>
   */
  promptSpecification?: PromptSpecification;

  /**
   * <p>If you know a specific pattern that users might respond to an Amazon Lex
   *          request for a slot value, you can provide those utterances to improve
   *          accuracy. This is optional. In most cases, Amazon Lex is capable of
   *          understanding user utterances.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
   *          customer input. </p>
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification;

  /**
   * <p>Specifies the settings that Amazon Lex uses when a slot
   *          value is successfully entered by a user.</p>
   */
  slotCaptureSetting?: SlotCaptureSetting;
}

/**
 * <p>Provides a prompt for making sure that the user is ready for the
 *          intent to be fulfilled.</p>
 */
export interface IntentConfirmationSetting {
  /**
   * <p>Prompts the user to confirm the intent. This question should have a
   *          yes or no answer.</p>
   *          <p>Amazon Lex uses this prompt to ensure that the user acknowledges that the
   *          intent is ready for fulfillment. For example, with the
   *             <code>OrderPizza</code> intent, you might want to confirm that the
   *          order is correct before placing it. For other intents, such as intents
   *          that simply respond to user questions, you might not need to ask the
   *          user for confirmation before providing the information. </p>
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * <p>When the user answers "no" to the question defined in
   *             <code>promptSpecification</code>, Amazon Lex responds with this response
   *          to acknowledge that the intent was canceled. </p>
   */
  declinationResponse?: ResponseSpecification;

  /**
   * <p>Specifies whether the intent's confirmation is sent to the user.
   *          When this field is false, confirmation and declination responses aren't
   *          sent. If the <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  confirmationResponse?: ResponseSpecification;

  /**
   * <p>Specifies the next step that the bot executes when the customer
   *          confirms the intent.</p>
   */
  confirmationNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the intent is
   *          closed.</p>
   */
  confirmationConditional?: ConditionalSpecification;

  /**
   * <p>Specifies the next step that the bot executes when the customer
   *          declines the intent.</p>
   */
  declinationNextStep?: DialogState;

  /**
   * <p>A list of conditional branches to evaluate after the intent is
   *          declined.</p>
   */
  declinationConditional?: ConditionalSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex uses to respond the
   *          user input.</p>
   */
  failureResponse?: ResponseSpecification;

  /**
   * <p>The next step to take in the conversation if the confirmation step
   *          fails.</p>
   */
  failureNextStep?: DialogState;

  /**
   * <p>Provides a list of conditional branches. Branches are evaluated in
   *          the order that they are entered in the list. The first branch with a
   *          condition that evaluates to true is executed. The last branch in the
   *          list is the default branch. The default branch should not have any condition
   *          expression. The default branch is executed if no other branch has a
   *          matching condition.</p>
   */
  failureConditional?: ConditionalSpecification;

  /**
   * <p>The <code>DialogCodeHookInvocationSetting</code> object associated
   *          with intent's confirmation step. The dialog code hook is triggered
   *          based on these invocation settings when the confirmation next step or
   *          declination next step or failure next step is
   *             <code>InvokeDialogCodeHook</code>. </p>
   */
  codeHook?: DialogCodeHookInvocationSetting;

  /**
   * <p>The <code>DialogCodeHookInvocationSetting</code> used when the code
   *          hook is invoked during confirmation prompt retries.</p>
   */
  elicitationCodeHook?: ElicitationCodeHookInvocationSetting;
}

export interface CreateSlotRequest {
  /**
   * <p>The name of the slot. Slot names must be unique within the bot that
   *          contains the slot.</p>
   */
  slotName: string | undefined;

  /**
   * <p>A description of the slot. Use this to help identify the slot in
   *          lists.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier for the slot type associated with this slot.
   *          The slot type determines the values that can be entered into the
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Specifies prompts that Amazon Lex sends to the user to elicit a response
   *          that provides the value for the slot. </p>
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * <p>Determines how slot values are used in Amazon CloudWatch logs. If the value of
   *          the <code>obfuscationSetting</code> parameter is
   *             <code>DefaultObfuscation</code>, slot values are obfuscated in the
   *          log output. If the value is <code>None</code>, the actual value is
   *          present in the log output.</p>
   *          <p>The default is to obfuscate values in the CloudWatch logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot will be used
   *          in. The string must match one of the supported locales. All of the
   *          bots, intents, slot types used by the slot must have the same locale.
   *          For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Indicates whether the slot returns multiple values in one response.
   *          Multi-value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>. </p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

export interface CreateSlotResponse {
  /**
   * <p>The unique identifier associated with the slot. Use this to identify
   *          the slot when you update or delete it.</p>
   */
  slotId?: string;

  /**
   * <p>The name specified for the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description associated with the slot.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier of the slot type associated with this
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The value elicitation settings specified for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>Indicates whether the slot is configured to obfuscate values in Amazon CloudWatch
   *          logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The unique identifier of the bot associated with the slot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and local specified for the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The unique identifier of the intent associated with the slot.</p>
   */
  intentId?: string;

  /**
   * <p>The timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>Indicates whether the slot returns multiple values in one
   *          response.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

export interface DescribeSlotResponse {
  /**
   * <p>The unique identifier generated for the slot.</p>
   */
  slotId?: string;

  /**
   * <p>The name specified for the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description specified for the slot.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the slot type that determines the values entered
   *          into the slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Prompts that Amazon Lex uses to elicit a value for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>Whether slot values are shown in Amazon CloudWatch logs. If the value is
   *             <code>None</code>, the actual value of the slot is shown in
   *          logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the intent associated with the slot.</p>
   */
  intentId?: string;

  /**
   * <p>A timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the slot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates whether the slot accepts multiple values in a single
   *          utterance.</p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

export interface UpdateSlotRequest {
  /**
   * <p>The unique identifier for the slot to update.</p>
   */
  slotId: string | undefined;

  /**
   * <p>The new name for the slot.</p>
   */
  slotName: string | undefined;

  /**
   * <p>The new description for the slot.</p>
   */
  description?: string;

  /**
   * <p>The unique identifier of the new slot type to associate with this
   *          slot. </p>
   */
  slotTypeId?: string;

  /**
   * <p>A new set of prompts that Amazon Lex sends to the user to elicit a
   *          response the provides a value for the slot.</p>
   */
  valueElicitationSetting: SlotValueElicitationSetting | undefined;

  /**
   * <p>New settings that determine how slot values are formatted in Amazon CloudWatch
   *          logs. </p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The unique identifier of the bot that contains the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot. Must always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that contains the slot.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Determines whether the slot accepts multiple values in one response.
   *          Multiple value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>.</p>
   *          <p>If the <code>multipleValuesSetting</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

export interface UpdateSlotResponse {
  /**
   * <p>The unique identifier of the slot that was updated.</p>
   */
  slotId?: string;

  /**
   * <p>The updated name of the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The updated description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The updated identifier of the slot type that provides values for the
   *          slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The updated prompts that Amazon Lex sends to the user to elicit a
   *          response that provides a value for the slot.</p>
   */
  valueElicitationSetting?: SlotValueElicitationSetting;

  /**
   * <p>The updated setting that determines whether the slot value is
   *          obfuscated in the Amazon CloudWatch logs.</p>
   */
  obfuscationSetting?: ObfuscationSetting;

  /**
   * <p>The identifier of the bot that contains the slot.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the slot version that contains the slot. Will
   *          always be <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale that contains the slot.</p>
   */
  localeId?: string;

  /**
   * <p>The intent that contains the slot.</p>
   */
  intentId?: string;

  /**
   * <p>The timestamp of the date and time that the slot was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The timestamp of the date and time that the slot was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates whether the slot accepts multiple values in one
   *          response.</p>
   */
  multipleValuesSetting?: MultipleValuesSetting;

  /**
   * <p>Specifications for the constituent sub slots and the
   *         expression for the composite slot.</p>
   */
  subSlotSetting?: SubSlotSetting;
}

export interface CreateIntentRequest {
  /**
   * <p>The name of the intent. Intent names must be unique in the locale
   *          that contains the intent and cannot match the name of any built-in
   *          intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>A description of the intent. Use the description to help identify
   *          the intent in lists.</p>
   */
  description?: string;

  /**
   * <p>A unique identifier for the built-in intent to base this intent
   *          on.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>An array of strings that a user might say to signal the intent. For
   *          example, "I want a pizza", or "I want a {PizzaSize} pizza". </p>
   *          <p>In an utterance, slot names are enclosed in curly braces ("{", "}")
   *          to indicate where they should be displayed in the utterance shown to
   *          the user.. </p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>Specifies that Amazon Lex invokes the alias Lambda function for each user
   *          input. You can invoke this Lambda function to personalize user
   *          interaction.</p>
   *          <p>For example, suppose that your bot determines that the user's name
   *          is John. You Lambda function might retrieve John's information from a
   *          backend database and prepopulate some of the values. For example, if
   *          you find that John is gluten intolerant, you might set the
   *          corresponding intent slot, <code>glutenIntolerant</code> to
   *             <code>true</code>. You might find John's phone number and set the
   *          corresponding session attribute.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>Specifies that Amazon Lex invokes the alias Lambda function when the
   *          intent is ready for fulfillment. You can invoke this function to
   *          complete the bot's transaction with the user.</p>
   *          <p>For example, in a pizza ordering bot, the Lambda function can look up
   *          the closest pizza restaurant to the customer's location and then place
   *          an order on the customer's behalf.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>Provides prompts that Amazon Lex sends to the user to confirm the
   *          completion of an intent. If the user answers "no," the settings contain
   *          a statement that is sent to the user to end the intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>Sets the response that Amazon Lex sends to the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A list of contexts that must be active for this intent to be
   *          considered by Amazon Lex.</p>
   *          <p>When an intent has an input context list, Amazon Lex only considers using
   *          the intent in an interaction with the user when the specified contexts
   *          are included in the active context list for the session. If the
   *          contexts are not active, then Amazon Lex will not use the intent.</p>
   *          <p>A context can be automatically activated using the
   *             <code>outputContexts</code> property or it can be set at
   *          runtime.</p>
   *          <p> For example, if there are two intents with different input contexts
   *          that respond to the same utterances, only the intent with the active
   *          context will respond.</p>
   *          <p>An intent may have up to 5 input contexts. If an intent has multiple
   *          input contexts, all of the contexts must be active to consider the
   *          intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A lists of contexts that the intent activates when it is
   *          fulfilled.</p>
   *          <p>You can use an output context to indicate the intents that Amazon Lex
   *          should consider for the next turn of the conversation with a customer. </p>
   *          <p>When you use the <code>outputContextsList</code> property, all of
   *          the contexts specified in the list are activated when the intent is
   *          fulfilled. You can set up to 10 output contexts. You can also set the
   *          number of conversation turns that the context should be active, or the
   *          length of time that the context should be active.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration information required to use the
   *             <code>AMAZON.KendraSearchIntent</code> intent to connect to an Amazon Kendra
   *          index. The <code>AMAZON.KendraSearchIntent</code> intent is called when
   *          Amazon Lex can't determine another intent to invoke.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with this intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with this
   *          intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this intent is used.
   *          All of the bots, slot types, and slots used by the intent must have the
   *          same locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Configuration settings for the response that is sent to the user at
   *          the beginning of a conversation, before eliciting slot values.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

export interface CreateIntentResponse {
  /**
   * <p>A unique identifier for the intent.</p>
   */
  intentId?: string;

  /**
   * <p>The name specified for the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description specified for the intent.</p>
   */
  description?: string;

  /**
   * <p>The signature of the parent intent specified for the intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The sample utterances specified for the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The dialog Lambda function specified for the intent.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The fulfillment Lambda function specified for the intent.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The confirmation setting specified for the intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The closing setting specified for the intent.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>The list of input contexts specified for the intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The list of output contexts specified for the intent.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration for searching a Amazon Kendra index specified for the
   *          intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the version of the bot associated with the
   *          intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale that the intent is specified to use.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>Configuration settings for the response that is sent to the user at
   *          the beginning of a conversation, before eliciting slot values.</p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

export interface DescribeIntentResponse {
  /**
   * <p>The unique identifier assigned to the intent when it was
   *          created.</p>
   */
  intentId?: string;

  /**
   * <p>The name specified for the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The identifier of the built-in intent that this intent is derived
   *          from, if any.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>User utterances that trigger this intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The Lambda function called during each turn of a conversation with
   *          the intent.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The Lambda function called when the intent is complete and ready for
   *          fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The list that determines the priority that slots should be elicited
   *          from the user.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>Prompts that Amazon Lex sends to the user to confirm completion of an
   *          intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The response that Amazon Lex sends to when the intent is closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A list of contexts that must be active for the intent to be
   *          considered for sending to the user.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A list of contexts that are activated when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>Configuration information required to use the
   *             <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the intent.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the intent was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p></p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

export interface UpdateIntentRequest {
  /**
   * <p>The unique identifier of the intent to update.</p>
   */
  intentId: string | undefined;

  /**
   * <p>The new name for the intent.</p>
   */
  intentName: string | undefined;

  /**
   * <p>The new description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The signature of the new built-in intent to use as the parent of
   *          this intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>New utterances used to invoke the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The new Lambda function to use between each turn of the conversation
   *          with the bot.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The new Lambda function to call when all of the intents required
   *          slots are provided and the intent is ready for fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>A new list of slots and their priorities that are contained by the
   *          intent.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>New prompts that Amazon Lex sends to the user to confirm the completion
   *          of an intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The new response that Amazon Lex sends the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>A new list of contexts that must be active in order for Amazon Lex to
   *          consider the intent.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>A new list of contexts that Amazon Lex activates when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>New configuration settings for connecting to an Amazon Kendra index.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the intent. Must be
   *             <code>DRAFT</code>.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where this intent is used.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p></p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

export interface UpdateIntentResponse {
  /**
   * <p>The identifier of the intent that was updated.</p>
   */
  intentId?: string;

  /**
   * <p>The updated name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The updated description of the intent.</p>
   */
  description?: string;

  /**
   * <p>The updated built-in intent that is the parent of this
   *          intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The updated list of sample utterances for the intent.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>The updated Lambda function called during each turn of the
   *          conversation with the user.</p>
   */
  dialogCodeHook?: DialogCodeHookSettings;

  /**
   * <p>The updated Lambda function called when the intent is ready for
   *          fulfillment.</p>
   */
  fulfillmentCodeHook?: FulfillmentCodeHookSettings;

  /**
   * <p>The updated list of slots and their priorities that are elicited
   *          from the user for the intent.</p>
   */
  slotPriorities?: SlotPriority[];

  /**
   * <p>The updated prompts that Amazon Lex sends to the user to confirm the
   *          completion of an intent.</p>
   */
  intentConfirmationSetting?: IntentConfirmationSetting;

  /**
   * <p>The updated response that Amazon Lex sends the user when the intent is
   *          closed.</p>
   */
  intentClosingSetting?: IntentClosingSetting;

  /**
   * <p>The updated list of contexts that must be active for the intent to
   *          be considered by Amazon Lex.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The updated list of contexts that Amazon Lex activates when the intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>The updated configuration for connecting to an Amazon Kendra index with the
   *             <code>AMAZON.KendraSearchIntent</code> intent.</p>
   */
  kendraConfiguration?: KendraConfiguration;

  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent. Will always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>The updated language and locale of the intent.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of when the intent was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the last time that the intent was modified.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p></p>
   */
  initialResponseSetting?: InitialResponseSetting;
}

/**
 * @internal
 */
export const UpdateBotRequestFilterSensitiveLog = (obj: UpdateBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotResponseFilterSensitiveLog = (obj: UpdateBotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotAliasRequestFilterSensitiveLog = (obj: UpdateBotAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotAliasResponseFilterSensitiveLog = (obj: UpdateBotAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotLocaleRequestFilterSensitiveLog = (obj: UpdateBotLocaleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotLocaleResponseFilterSensitiveLog = (obj: UpdateBotLocaleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateBotRecommendationRequestFilterSensitiveLog = (obj: UpdateBotRecommendationRequest): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const UpdateBotRecommendationResponseFilterSensitiveLog = (obj: UpdateBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const UpdateExportRequestFilterSensitiveLog = (obj: UpdateExportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateExportResponseFilterSensitiveLog = (obj: UpdateExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourcePolicyRequestFilterSensitiveLog = (obj: UpdateResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateResourcePolicyResponseFilterSensitiveLog = (obj: UpdateResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSlotTypeRequestFilterSensitiveLog = (obj: UpdateSlotTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSlotTypeResponseFilterSensitiveLog = (obj: UpdateSlotTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotValueOverrideFilterSensitiveLog = (obj: SlotValueOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentOverrideFilterSensitiveLog = (obj: IntentOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialogStateFilterSensitiveLog = (obj: DialogState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionalBranchFilterSensitiveLog = (obj: ConditionalBranch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefaultConditionalBranchFilterSensitiveLog = (obj: DefaultConditionalBranch): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionalSpecificationFilterSensitiveLog = (obj: ConditionalSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentClosingSettingFilterSensitiveLog = (obj: IntentClosingSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PostDialogCodeHookInvocationSpecificationFilterSensitiveLog = (
  obj: PostDialogCodeHookInvocationSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PostFulfillmentStatusSpecificationFilterSensitiveLog = (obj: PostFulfillmentStatusSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialogCodeHookInvocationSettingFilterSensitiveLog = (obj: DialogCodeHookInvocationSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FulfillmentCodeHookSettingsFilterSensitiveLog = (obj: FulfillmentCodeHookSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InitialResponseSettingFilterSensitiveLog = (obj: InitialResponseSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotCaptureSettingFilterSensitiveLog = (obj: SlotCaptureSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotValueElicitationSettingFilterSensitiveLog = (obj: SlotValueElicitationSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentConfirmationSettingFilterSensitiveLog = (obj: IntentConfirmationSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSlotRequestFilterSensitiveLog = (obj: CreateSlotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSlotResponseFilterSensitiveLog = (obj: CreateSlotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSlotResponseFilterSensitiveLog = (obj: DescribeSlotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSlotRequestFilterSensitiveLog = (obj: UpdateSlotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateSlotResponseFilterSensitiveLog = (obj: UpdateSlotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIntentRequestFilterSensitiveLog = (obj: CreateIntentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateIntentResponseFilterSensitiveLog = (obj: CreateIntentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIntentResponseFilterSensitiveLog = (obj: DescribeIntentResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIntentRequestFilterSensitiveLog = (obj: UpdateIntentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateIntentResponseFilterSensitiveLog = (obj: UpdateIntentResponse): any => ({
  ...obj,
});
