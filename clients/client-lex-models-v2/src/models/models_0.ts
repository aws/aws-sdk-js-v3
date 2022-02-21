import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { LexModelsV2ServiceException as __BaseException } from "./LexModelsV2ServiceException";

export enum AudioRecognitionStrategy {
  UseSlotValuesAsCustomVocabulary = "UseSlotValuesAsCustomVocabulary",
}

/**
 * <p>Provides settings that enable advanced recognition settings for slot values.</p>
 */
export interface AdvancedRecognitionSetting {
  /**
   * <p>Enables using the slot values as a custom vocabulary for recognizing user utterances.</p>
   */
  audioRecognitionStrategy?: AudioRecognitionStrategy | string;
}

export namespace AdvancedRecognitionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AdvancedRecognitionSetting): any => ({
    ...obj,
  });
}

export enum AggregatedUtterancesFilterName {
  Utterance = "Utterance",
}

export enum AggregatedUtterancesFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters responses returned by the
 *             <code>ListAggregatedUtterances</code> operation.</p>
 */
export interface AggregatedUtterancesFilter {
  /**
   * <p>The name of the field to filter the utterance list.</p>
   */
  name: AggregatedUtterancesFilterName | string | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListAggregatedUtterances</code> operation should return only
   *          utterances that equal the specified value. Specify <code>CO</code> when
   *          the <code>ListAggregatedUtterances</code> operation should return
   *          utterances that contain the specified value.</p>
   */
  operator: AggregatedUtterancesFilterOperator | string | undefined;
}

export namespace AggregatedUtterancesFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregatedUtterancesFilter): any => ({
    ...obj,
  });
}

export enum AggregatedUtterancesSortAttribute {
  HitCount = "HitCount",
  MissedCount = "MissedCount",
}

export enum SortOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

/**
 * <p>Specifies attributes for sorting a list of utterances.</p>
 */
export interface AggregatedUtterancesSortBy {
  /**
   * <p>The utterance attribute to sort by.</p>
   */
  attribute: AggregatedUtterancesSortAttribute | string | undefined;

  /**
   * <p>Specifies whether to sort the aggregated utterances in ascending or
   *          descending order.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace AggregatedUtterancesSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregatedUtterancesSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information for aggregated utterances. The
 *             <code>ListAggregatedUtterances</code> operations combines all
 *          instances of the same utterance into a single aggregated
 *          summary.</p>
 */
export interface AggregatedUtterancesSummary {
  /**
   * <p>The text of the utterance. If the utterance was used with the
   *             <code>RecognizeUtterance</code> operation, the text is the
   *          transcription of the audio utterance.</p>
   */
  utterance?: string;

  /**
   * <p>The number of times that the utterance was detected by Amazon Lex during
   *          the time period. When an utterance is detected, it activates an intent
   *          or a slot.</p>
   */
  hitCount?: number;

  /**
   * <p>The number of times that the utterance was missed by Amazon Lex An
   *          utterance is missed when it doesn't activate an intent or slot.</p>
   */
  missedCount?: number;

  /**
   * <p>The date and time that the utterance was first recorded in the time
   *          window for aggregation. An utterance may have been sent to Amazon Lex before
   *          that time, but only utterances within the time window are
   *          counted.</p>
   */
  utteranceFirstRecordedInAggregationDuration?: Date;

  /**
   * <p>The last date and time that an utterance was recorded in the time
   *          window for aggregation. An utterance may be sent to Amazon Lex after that
   *          time, but only utterances within the time window are counted.</p>
   */
  utteranceLastRecordedInAggregationDuration?: Date;

  /**
   * <p>Aggregated utterance data may contain utterances from versions of
   *          your bot that have since been deleted. When the aggregated contains
   *          this kind of data, this field is set to true.</p>
   */
  containsDataFromDeletedResources?: boolean;
}

export namespace AggregatedUtterancesSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AggregatedUtterancesSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The object containing information that associates the recommended
 *          intent/slot type with a conversation.</p>
 */
export interface AssociatedTranscript {
  /**
   * <p>The content of the transcript that meets the search filter criteria.
   *          For the JSON format of the transcript, see <a href="https://docs.aws.amazon.com/lex/latest/dg/designing-output-format.html">Output transcript
   *             format</a>.</p>
   */
  transcript?: string;
}

export namespace AssociatedTranscript {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedTranscript): any => ({
    ...obj,
  });
}

export enum AssociatedTranscriptFilterName {
  IntentId = "IntentId",
  SlotTypeId = "SlotTypeId",
}

/**
 * <p>Filters to search for the associated transcript.</p>
 */
export interface AssociatedTranscriptFilter {
  /**
   * <p>The name of the field to use for filtering. The allowed names are
   *          IntentId and SlotTypeId.</p>
   */
  name: AssociatedTranscriptFilterName | string | undefined;

  /**
   * <p>The values to use to filter the transcript.</p>
   */
  values: string[] | undefined;
}

export namespace AssociatedTranscriptFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AssociatedTranscriptFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an Amazon S3 bucket for logging audio conversations</p>
 */
export interface S3BucketLogDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of an AWS Key Management Service
   *          (KMS) key for encrypting audio log files stored in an S3 bucket.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an Amazon S3 bucket where audio
   *          log files are stored.</p>
   */
  s3BucketArn: string | undefined;

  /**
   * <p>The S3 prefix to assign to audio log files.</p>
   */
  logPrefix: string | undefined;
}

export namespace S3BucketLogDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketLogDestination): any => ({
    ...obj,
  });
}

/**
 * <p>The location of audio log files collected when conversation logging
 *          is enabled for a bot.</p>
 */
export interface AudioLogDestination {
  /**
   * <p>The Amazon S3 bucket where the audio log files are stored. The IAM
   *          role specified in the <code>roleArn</code> parameter of the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBot.html">CreateBot</a> operation must have permission to write to this
   *          bucket.</p>
   */
  s3Bucket: S3BucketLogDestination | undefined;
}

export namespace AudioLogDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioLogDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Settings for logging audio of conversations between Amazon Lex and a
 *          user. You specify whether to log audio and the Amazon S3 bucket where
 *          the audio file is stored.</p>
 */
export interface AudioLogSetting {
  /**
   * <p>Determines whether audio logging in enabled for the bot.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>The location of audio log files collected when conversation logging
   *          is enabled for a bot.</p>
   */
  destination: AudioLogDestination | undefined;
}

export namespace AudioLogSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AudioLogSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a record of an event that affects a bot alias. For example,
 *          when the version of a bot that the alias points to changes.</p>
 */
export interface BotAliasHistoryEvent {
  /**
   * <p>The version of the bot that was used in the event. </p>
   */
  botVersion?: string;

  /**
   * <p>The date and time that the event started.</p>
   */
  startDate?: Date;

  /**
   * <p>The date and time that the event ended.</p>
   */
  endDate?: Date;
}

export namespace BotAliasHistoryEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotAliasHistoryEvent): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a Lambda function that verifies requests to a bot or
 *          fulfills the user's request to a bot.</p>
 */
export interface LambdaCodeHook {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function.</p>
   */
  lambdaARN: string | undefined;

  /**
   * <p>The version of the request-response that you want Amazon Lex to use to
   *          invoke your Lambda function.</p>
   */
  codeHookInterfaceVersion: string | undefined;
}

export namespace LambdaCodeHook {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaCodeHook): any => ({
    ...obj,
  });
}

/**
 * <p>Contains information about code hooks that Amazon Lex calls during a
 *          conversation.</p>
 */
export interface CodeHookSpecification {
  /**
   * <p>Specifies a Lambda function that verifies requests to a bot or
   *          fulfills the user's request to a bot.</p>
   */
  lambdaCodeHook: LambdaCodeHook | undefined;
}

export namespace CodeHookSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CodeHookSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies settings that are unique to a locale. For example, you can
 *          use different Lambda function depending on the bot's locale.</p>
 */
export interface BotAliasLocaleSettings {
  /**
   * <p>Determines whether the locale is enabled for the bot. If the value
   *          is <code>false</code>, the locale isn't available for use.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Specifies the Lambda function that should be used in the
   *          locale.</p>
   */
  codeHookSpecification?: CodeHookSpecification;
}

export namespace BotAliasLocaleSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotAliasLocaleSettings): any => ({
    ...obj,
  });
}

export enum BotAliasStatus {
  Available = "Available",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
}

/**
 * <p>Summary information about bot aliases returned from the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotAliases.html">ListBotAliases</a> operation.</p>
 */
export interface BotAliasSummary {
  /**
   * <p>The unique identifier assigned to the bot alias. You can use this ID
   *          to get detailed information about the alias using the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBotAlias.html">DescribeBotAlias</a> operation.</p>
   */
  botAliasId?: string;

  /**
   * <p>The name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * <p>The description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot that the bot alias references.</p>
   */
  botVersion?: string;

  /**
   * <p>The current state of the bot alias. If the status is
   *             <code>Available</code>, the alias is ready for use.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * <p>A timestamp of the date and time that the bot alias was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot alias was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace BotAliasSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotAliasSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the identity of a the bot that was exported.</p>
 */
export interface BotExportSpecification {
  /**
   * <p>The identifier of the bot assigned by Amazon Lex.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that was exported. This will be either
   *             <code>DRAFT</code> or the version number.</p>
   */
  botVersion: string | undefined;
}

export namespace BotExportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotExportSpecification): any => ({
    ...obj,
  });
}

export enum BotFilterName {
  BotName = "BotName",
}

export enum BotFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the responses returned by the <code>ListBots</code>
 *          operation.</p>
 */
export interface BotFilter {
  /**
   * <p>The name of the field to filter the list of bots.</p>
   */
  name: BotFilterName | string | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListBots</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *             <code>ListBots</code> operation should return aliases that contain
   *          the specified value.</p>
   */
  operator: BotFilterOperator | string | undefined;
}

export namespace BotFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotFilter): any => ({
    ...obj,
  });
}

/**
 * <p>By default, data stored by Amazon Lex is encrypted. The
 *             <code>DataPrivacy</code> structure provides settings that determine
 *          how Amazon Lex handles special cases of securing the data for your bot.
 *       </p>
 */
export interface DataPrivacy {
  /**
   * <p>For each Amazon Lex bot created with the Amazon Lex Model Building Service,
   *          you must specify whether your use of Amazon Lex is related to a website,
   *          program, or other application that is directed or targeted, in whole or
   *          in part, to children under age 13 and subject to the Children's Online
   *          Privacy Protection Act (COPPA) by specifying <code>true</code> or
   *             <code>false</code> in the <code>childDirected</code> field. By
   *          specifying <code>true</code> in the <code>childDirected</code> field,
   *          you confirm that your use of Amazon Lex <b>is</b>
   *          related to a website, program, or other application that is directed or
   *          targeted, in whole or in part, to children under age 13 and subject to
   *          COPPA. By specifying <code>false</code> in the
   *             <code>childDirected</code> field, you confirm that your use of Amazon Lex
   *             <b>is not</b> related to a website,
   *          program, or other application that is directed or targeted, in whole or
   *          in part, to children under age 13 and subject to COPPA. You may not
   *          specify a default value for the <code>childDirected</code> field that
   *          does not accurately reflect whether your use of Amazon Lex is related to a
   *          website, program, or other application that is directed or targeted, in
   *          whole or in part, to children under age 13 and subject to COPPA. If
   *          your use of Amazon Lex relates to a website, program, or other application
   *          that is directed in whole or in part, to children under age 13, you
   *          must obtain any required verifiable parental consent under COPPA. For
   *          information regarding the use of Amazon Lex in connection with websites,
   *          programs, or other applications that are directed or targeted, in whole
   *          or in part, to children under age 13, see the <a href="https://aws.amazon.com/lex/faqs#data-security">Amazon Lex
   *             FAQ</a>.</p>
   */
  childDirected: boolean | undefined;
}

export namespace DataPrivacy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataPrivacy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the bot parameters required for importing a bot.</p>
 */
export interface BotImportSpecification {
  /**
   * <p>The name that Amazon Lex should use for the bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used to build and run
   *          the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>By default, data stored by Amazon Lex is encrypted. The
   *             <code>DataPrivacy</code> structure provides settings that determine
   *          how Amazon Lex handles special cases of securing the data for your bot.
   *       </p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          import a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   */
  botTags?: { [key: string]: string };

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you import a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: { [key: string]: string };
}

export namespace BotImportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotImportSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the bot locale parameters required for exporting a bot
 *          locale.</p>
 */
export interface BotLocaleExportSpecification {
  /**
   * <p>The identifier of the bot to create the locale for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to export.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale to export. The string must
   *          match one of the locales in the bot.</p>
   */
  localeId: string | undefined;
}

export namespace BotLocaleExportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleExportSpecification): any => ({
    ...obj,
  });
}

export enum BotLocaleFilterName {
  BotLocaleName = "BotLocaleName",
}

export enum BotLocaleFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters responses returned by the <code>ListBotLocales</code>
 *          operation.</p>
 */
export interface BotLocaleFilter {
  /**
   * <p>The name of the field to filter the list of bots.</p>
   */
  name: BotLocaleFilterName | string | undefined;

  /**
   * <p>The value to use for filtering the list of bots.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListBotLocales</code> operation should return only aliases
   *          that equal the specified value. Specify <code>CO</code> when the
   *             <code>ListBotLocales</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: BotLocaleFilterOperator | string | undefined;
}

export namespace BotLocaleFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleFilter): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about an event that occurred affecting the bot
 *          locale.</p>
 */
export interface BotLocaleHistoryEvent {
  /**
   * <p>A description of the event that occurred.</p>
   */
  event: string | undefined;

  /**
   * <p>A timestamp of the date and time that the event occurred.</p>
   */
  eventDate: Date | undefined;
}

export namespace BotLocaleHistoryEvent {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleHistoryEvent): any => ({
    ...obj,
  });
}

export enum VoiceEngine {
  Neural = "neural",
  Standard = "standard",
}

/**
 * <p>Defines settings for using an Amazon Polly voice to communicate with a
 *          user.</p>
 */
export interface VoiceSettings {
  /**
   * <p>The identifier of the Amazon Polly voice to use.</p>
   */
  voiceId: string | undefined;

  /**
   * <p>Indicates the type of Amazon Polly voice that Amazon Lex should use for voice interaction with the user. For more
   *          information, see the <a href="https://docs.aws.amazon.com/polly/latest/dg/API_SynthesizeSpeech.html#polly-SynthesizeSpeech-request-Engine">
   *                <code>engine</code> parameter of the
   *                <code>SynthesizeSpeech</code> operation</a> in the
   *                <i>Amazon Polly developer guide</i>.</p>
   *          <p>If you do not specify a value, the default is
   *          <code>standard</code>.</p>
   */
  engine?: VoiceEngine | string;
}

export namespace VoiceSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: VoiceSettings): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the bot locale parameters required for importing a bot
 *          locale.</p>
 */
export interface BotLocaleImportSpecification {
  /**
   * <p>The identifier of the bot to import the locale to.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to import the locale to. This can only be the
   *             <code>DRAFT</code> version of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the threshold where Amazon Lex will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents. <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> are only inserted if they are
   *          configured for the bot. </p>
   *          <p>For example, suppose a bot is configured with the confidence
   *          threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon
   *          Lex returns three alternative intents with the following confidence
   *          scores: IntentA (0.70), IntentB (0.60), IntentC (0.50). The response
   *          from the <code>PostText</code> operation would be:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>AMAZON.FallbackIntent</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentA</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentB</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IntentC</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>Defines settings for using an Amazon Polly voice to communicate with a
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
}

export namespace BotLocaleImportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleImportSpecification): any => ({
    ...obj,
  });
}

export enum BotLocaleSortAttribute {
  BotLocaleName = "BotLocaleName",
}

/**
 * <p>Specifies attributes for sorting a list of bot locales.</p>
 */
export interface BotLocaleSortBy {
  /**
   * <p>The bot locale attribute to sort by.</p>
   */
  attribute: BotLocaleSortAttribute | string | undefined;

  /**
   * <p>Specifies whether to sort the bot locales in ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace BotLocaleSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleSortBy): any => ({
    ...obj,
  });
}

export enum BotLocaleStatus {
  Building = "Building",
  Built = "Built",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Importing = "Importing",
  NotBuilt = "NotBuilt",
  Processing = "Processing",
  ReadyExpressTesting = "ReadyExpressTesting",
}

/**
 * <p>Summary information about bot locales returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotLocales.html">ListBotLocales</a> operation.</p>
 */
export interface BotLocaleSummary {
  /**
   * <p>The language and locale of the bot locale.</p>
   */
  localeId?: string;

  /**
   * <p>The name of the bot locale.</p>
   */
  localeName?: string;

  /**
   * <p>The description of the bot locale.</p>
   */
  description?: string;

  /**
   * <p>The current status of the bot locale. When the status is
   *             <code>Built</code> the locale is ready for use.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>A timestamp of the date and time that the bot locale was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the bot locale was last
   *          built.</p>
   */
  lastBuildSubmittedDateTime?: Date;
}

export namespace BotLocaleSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotLocaleSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The object that contains the statistical summary of recommended
 *          intents associated with the bot recommendation.</p>
 */
export interface IntentStatistics {
  /**
   * <p>The number of recommended intents associated with the bot
   *          recommendation.</p>
   */
  discoveredIntentCount?: number;
}

export namespace IntentStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>The object that contains the statistical summary of the recommended
 *          slot type associated with the bot recommendation.</p>
 */
export interface SlotTypeStatistics {
  /**
   * <p>The number of recommended slot types associated with the bot
   *          recommendation.</p>
   */
  discoveredSlotTypeCount?: number;
}

export namespace SlotTypeStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotTypeStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>A statistical summary of the bot recommendation results.</p>
 */
export interface BotRecommendationResultStatistics {
  /**
   * <p>Statistical information about about the intents associated with the
   *          bot recommendation results.</p>
   */
  intents?: IntentStatistics;

  /**
   * <p>Statistical information about the slot types associated with the bot
   *          recommendation results.</p>
   */
  slotTypes?: SlotTypeStatistics;
}

export namespace BotRecommendationResultStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotRecommendationResultStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>The object representing the URL of the bot definition, the URL of
 *          the associated transcript and a statistical summary of the bot
 *          recommendation results.</p>
 */
export interface BotRecommendationResults {
  /**
   * <p>The presigned URL link of the recommended bot definition.</p>
   */
  botLocaleExportUrl?: string;

  /**
   * <p>The presigned url link of the associated transcript.</p>
   */
  associatedTranscriptsUrl?: string;

  /**
   * <p>The statistical summary of the bot recommendation results.</p>
   */
  statistics?: BotRecommendationResultStatistics;
}

export namespace BotRecommendationResults {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotRecommendationResults): any => ({
    ...obj,
  });
}

export enum BotRecommendationStatus {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Downloading = "Downloading",
  Failed = "Failed",
  Processing = "Processing",
  Updating = "Updating",
}

/**
 * <p>A summary of the bot recommendation.</p>
 */
export interface BotRecommendationSummary {
  /**
   * <p>The status of the bot recommendation.</p>
   *          <p>If the status is Failed, then the reasons for the failure are listed
   *          in the failureReasons field. </p>
   */
  botRecommendationStatus: BotRecommendationStatus | string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          updated.</p>
   */
  botRecommendationId: string | undefined;

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
}

export namespace BotRecommendationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotRecommendationSummary): any => ({
    ...obj,
  });
}

export enum BotSortAttribute {
  BotName = "BotName",
}

/**
 * <p>Specifies attributes for sorting a list of bots.</p>
 */
export interface BotSortBy {
  /**
   * <p>The attribute to use to sort the list of bots.</p>
   */
  attribute: BotSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace BotSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotSortBy): any => ({
    ...obj,
  });
}

export enum BotStatus {
  Available = "Available",
  Creating = "Creating",
  Deleting = "Deleting",
  Failed = "Failed",
  Importing = "Importing",
  Inactive = "Inactive",
  Versioning = "Versioning",
}

/**
 * <p>Summary information about a bot returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBots.html">ListBots</a> operation.</p>
 */
export interface BotSummary {
  /**
   * <p>The unique identifier assigned to the bot. Use this ID to get
   *          detailed information about the bot with the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeBot.html">DescribeBot</a> operation.</p>
   */
  botId?: string;

  /**
   * <p>The name of the bot.</p>
   */
  botName?: string;

  /**
   * <p>The description of the bot.</p>
   */
  description?: string;

  /**
   * <p>The current status of the bot. When the status is
   *             <code>Available</code> the bot is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>The latest numerical version in use for the bot.</p>
   */
  latestBotVersion?: string;

  /**
   * <p>The date and time that the bot was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace BotSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotSummary): any => ({
    ...obj,
  });
}

/**
 * <p>The version of a bot used for a bot locale.</p>
 */
export interface BotVersionLocaleDetails {
  /**
   * <p>The version of a bot used for a bot locale.</p>
   */
  sourceBotVersion: string | undefined;
}

export namespace BotVersionLocaleDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotVersionLocaleDetails): any => ({
    ...obj,
  });
}

export enum BotVersionSortAttribute {
  BotVersion = "BotVersion",
}

/**
 * <p>Specifies attributes for sorting a list of bot versions.</p>
 */
export interface BotVersionSortBy {
  /**
   * <p>The attribute to use to sort the list of versions.</p>
   */
  attribute: BotVersionSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace BotVersionSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotVersionSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a bot version returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBotVersions.html">ListBotVersions</a> operation.</p>
 */
export interface BotVersionSummary {
  /**
   * <p>The name of the bot associated with the version.</p>
   */
  botName?: string;

  /**
   * <p>The numeric version of the bot, or <code>DRAFT</code> to indicate
   *          that this is the version of the bot that can be updated..</p>
   */
  botVersion?: string;

  /**
   * <p>The description of the version.</p>
   */
  description?: string;

  /**
   * <p>The status of the bot. When the status is available, the version of
   *          the bot is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   */
  creationDateTime?: Date;
}

export namespace BotVersionSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BotVersionSummary): any => ({
    ...obj,
  });
}

export interface BuildBotLocaleRequest {
  /**
   * <p>The identifier of the bot to build. The identifier is returned in
   *          the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateBot.html">CreateBot</a> operation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to build. This can only be the draft version
   *          of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

export namespace BuildBotLocaleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuildBotLocaleRequest): any => ({
    ...obj,
  });
}

export interface BuildBotLocaleResponse {
  /**
   * <p>The identifier of the specified bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that was built. This is only the draft
   *          version of the bot.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified of where the bot can be
   *          used.</p>
   */
  localeId?: string;

  /**
   * <p>The bot's build status. When the status is
   *             <code>ReadyExpressTesting</code> you can test the bot using the
   *          utterances defined for the intents and slot types. When the status is
   *             <code>Built</code>, the bot is ready for use and can be tested using
   *          any utterance.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>A timestamp indicating the date and time that the bot was last built
   *          for this locale.</p>
   */
  lastBuildSubmittedDateTime?: Date;
}

export namespace BuildBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuildBotLocaleResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The action that you tried to perform couldn't be completed because
 *          the resource is in a conflicting state. For example, deleting a bot
 *          that is in the CREATING state. Try your request again. </p>
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
 * <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>Your request couldn't be completed because one or more request
 *          fields aren't valid. Check the fields in your request and try
 *          again.</p>
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
 * <p>You have reached a quota for your bot. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  retryAfterSeconds?: number;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.retryAfterSeconds = opts.retryAfterSeconds;
  }
}

/**
 * <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

export enum BuiltInIntentSortAttribute {
  IntentSignature = "IntentSignature",
}

/**
 * <p>Specifies attributes for sorting a list of built-in intents.</p>
 */
export interface BuiltInIntentSortBy {
  /**
   * <p>The attribute to use to sort the list of built-in intents.</p>
   */
  attribute: BuiltInIntentSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can specify ascending or descending
   *          order.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace BuiltInIntentSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuiltInIntentSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a built-in intent for the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBuiltInIntents.html"> ListBuiltInIntents </a> operation.</p>
 */
export interface BuiltInIntentSummary {
  /**
   * <p>The signature of the built-in intent. Use this to specify the parent
   *          intent of a derived intent.</p>
   */
  intentSignature?: string;

  /**
   * <p>The description of the intent.</p>
   */
  description?: string;
}

export namespace BuiltInIntentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuiltInIntentSummary): any => ({
    ...obj,
  });
}

export enum BuiltInSlotTypeSortAttribute {
  SlotTypeSignature = "SlotTypeSignature",
}

/**
 * <p>Specifies attributes for sorting a list of built-in slot
 *          types.</p>
 */
export interface BuiltInSlotTypeSortBy {
  /**
   * <p>The attribute to use to sort the list of built-in intents.</p>
   */
  attribute: BuiltInSlotTypeSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace BuiltInSlotTypeSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuiltInSlotTypeSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about a built-in slot type for the
 *             <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListBuiltInSlotTypes.html"> ListBuiltInSlotTypes </a>
 *          operation.</p>
 */
export interface BuiltInSlotTypeSummary {
  /**
   * <p>The signature of the built-in slot type. Use this to specify the
   *          parent slot type of a derived slot type.</p>
   */
  slotTypeSignature?: string;

  /**
   * <p>The description of the built-in slot type.</p>
   */
  description?: string;
}

export namespace BuiltInSlotTypeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BuiltInSlotTypeSummary): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a button to use on a response card used to gather slot
 *          values from a user.</p>
 */
export interface Button {
  /**
   * <p>The text that appears on the button. Use this to tell the user what
   *          value is returned when they choose this button.</p>
   */
  text: string | undefined;

  /**
   * <p>The value returned to Amazon Lex when the user chooses this button. This
   *          must be one of the slot values configured for the slot.</p>
   */
  value: string | undefined;
}

export namespace Button {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Button): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon CloudWatch Logs log group where the text and metadata logs are
 *          delivered. The log group must exist before you enable logging.</p>
 */
export interface CloudWatchLogGroupLogDestination {
  /**
   * <p>The Amazon Resource Name (ARN) of the log group where text and
   *          metadata logs are delivered.</p>
   */
  cloudWatchLogGroupArn: string | undefined;

  /**
   * <p>The prefix of the log stream name within the log group that you
   *          specified </p>
   */
  logPrefix: string | undefined;
}

export namespace CloudWatchLogGroupLogDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CloudWatchLogGroupLogDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Defines the Amazon CloudWatch Logs destination log group for
 *          conversation text logs.</p>
 */
export interface TextLogDestination {
  /**
   * <p>Defines the Amazon CloudWatch Logs log group where text and metadata logs are
   *          delivered.</p>
   */
  cloudWatch: CloudWatchLogGroupLogDestination | undefined;
}

export namespace TextLogDestination {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TextLogDestination): any => ({
    ...obj,
  });
}

/**
 * <p>Defines settings to enable text conversation logs.</p>
 */
export interface TextLogSetting {
  /**
   * <p>Determines whether conversation logs should be stored for an
   *          alias.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>Defines the Amazon CloudWatch Logs destination log group for
   *          conversation text logs.</p>
   */
  destination: TextLogDestination | undefined;
}

export namespace TextLogSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TextLogSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Configures conversation logging that saves audio, text, and metadata
 *          for the conversations with your users.</p>
 */
export interface ConversationLogSettings {
  /**
   * <p>The Amazon CloudWatch Logs settings for logging text and metadata.</p>
   */
  textLogSettings?: TextLogSetting[];

  /**
   * <p>The Amazon S3 settings for logging audio to an S3 bucket.</p>
   */
  audioLogSettings?: AudioLogSetting[];
}

export namespace ConversationLogSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConversationLogSettings): any => ({
    ...obj,
  });
}

export interface CreateBotRequest {
  /**
   * <p>The name of the bot. The bot name must be unique in the account that
   *          creates the bot.</p>
   */
  botName: string | undefined;

  /**
   * <p>A description of the bot. It appears in lists to help you identify a
   *          particular bot.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>Provides information on additional privacy protections Amazon Lex should
   *          use with the bot's data.</p>
   */
  dataPrivacy: DataPrivacy | undefined;

  /**
   * <p>The time, in seconds, that Amazon Lex should keep information about a
   *          user's conversation with the bot. </p>
   *          <p>A user interaction remains active for the amount of time specified.
   *          If no conversation occurs during this time, the session expires and
   *          Amazon Lex deletes any data provided before the timeout.</p>
   *          <p>You can specify between 60 (1 minute) and 86,400 (24 hours)
   *          seconds.</p>
   */
  idleSessionTTLInSeconds: number | undefined;

  /**
   * <p>A list of tags to add to the bot. You can only add tags when you
   *          create a bot. You can't use the <code>UpdateBot</code> operation to
   *          update tags. To update tags, use the <code>TagResource</code>
   *          operation.</p>
   */
  botTags?: { [key: string]: string };

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you create a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: { [key: string]: string };
}

export namespace CreateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotRequest): any => ({
    ...obj,
  });
}

export interface CreateBotResponse {
  /**
   * <p>A unique identifier for a particular bot. You use this to identify
   *          the bot when you call other Amazon Lex API operations.</p>
   */
  botId?: string;

  /**
   * <p>The name specified for the bot.</p>
   */
  botName?: string;

  /**
   * <p>The description specified for the bot.</p>
   */
  description?: string;

  /**
   * <p>The IAM role specified for the bot.</p>
   */
  roleArn?: string;

  /**
   * <p>The data privacy settings specified for the bot.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * <p>The session idle time specified for the bot.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>Shows the current status of the bot. The bot is first in the
   *             <code>Creating</code> status. Once the bot is read for use, it
   *          changes to the <code>Available</code> status. After the bot is created,
   *          you can use the <code>Draft</code> version of the bot.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>A timestamp indicating the date and time that the bot was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A list of tags associated with the bot.</p>
   */
  botTags?: { [key: string]: string };

  /**
   * <p>A list of tags associated with the test alias for the bot.</p>
   */
  testBotAliasTags?: { [key: string]: string };
}

export namespace CreateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
 *          user utterances.</p>
 */
export interface SentimentAnalysisSettings {
  /**
   * <p>Sets whether Amazon Lex uses Amazon Comprehend to detect the sentiment of user
   *          utterances.</p>
   */
  detectSentiment: boolean | undefined;
}

export namespace SentimentAnalysisSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SentimentAnalysisSettings): any => ({
    ...obj,
  });
}

export interface CreateBotAliasRequest {
  /**
   * <p>The alias to create. The name must be unique for the bot.</p>
   */
  botAliasName: string | undefined;

  /**
   * <p>A description of the alias. Use this description to help identify
   *          the alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot that this alias points to. You can use the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_UpdateBotAlias.html">UpdateBotAlias</a> operation to change the
   *          bot version associated with the alias.</p>
   */
  botVersion?: string;

  /**
   * <p>Maps configuration information to a specific locale. You can use
   *          this parameter to specify a specific Lambda function to run different
   *          functions in different locales.</p>
   */
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings };

  /**
   * <p>Specifies whether Amazon Lex logs text and audio for a conversation with
   *          the bot. When you enable conversation logs, text logs store text input,
   *          transcripts of audio input, and associated metadata in Amazon CloudWatch Logs. Audio
   *          logs store audio input in Amazon S3.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The unique identifier of the bot that the alias applies to.</p>
   */
  botId: string | undefined;

  /**
   * <p>A list of tags to add to the bot alias. You can only add tags when
   *          you create an alias, you can't use the <code>UpdateBotAlias</code>
   *          operation to update the tags on a bot alias. To update tags, use the
   *             <code>TagResource</code> operation.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateBotAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotAliasRequest): any => ({
    ...obj,
  });
}

export interface CreateBotAliasResponse {
  /**
   * <p>The unique identifier of the bot alias.</p>
   */
  botAliasId?: string;

  /**
   * <p>The name specified for the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * <p>The description specified for the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot associated with this alias.</p>
   */
  botVersion?: string;

  /**
   * <p>Configuration information for a specific locale.</p>
   */
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings };

  /**
   * <p>The conversation log settings specified for the alias.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>The current status of the alias. The alias is first put into the
   *             <code>Creating</code> state. When the alias is ready to be used, it
   *          is put into the <code>Available</code> state. You can use the
   *             <code>DescribeBotAlias</code> operation to get the current state of
   *          an alias.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * <p>The unique identifier of the bot that this alias applies to.</p>
   */
  botId?: string;

  /**
   * <p>A Unix timestamp indicating the date and time that the bot alias was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A list of tags associated with the bot alias.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateBotAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotAliasResponse): any => ({
    ...obj,
  });
}

export interface CreateBotLocaleRequest {
  /**
   * <p>The identifier of the bot to create the locale for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to create the locale for. This can only be
   *          the draft version of the bot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the bot will be used
   *          in. The string must match one of the supported locales. All of the
   *          intents, slot types, and slots used in the bot must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>A description of the bot locale. Use this to help identify the bot
   *          locale in lists.</p>
   */
  description?: string;

  /**
   * <p>Determines the threshold where Amazon Lex will insert the
   *             <code>AMAZON.FallbackIntent</code>,
   *             <code>AMAZON.KendraSearchIntent</code>, or both when returning
   *          alternative intents. <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> are only inserted if they are
   *          configured for the bot.</p>
   *          <p>For example, suppose a bot is configured with the confidence
   *          threshold of 0.80 and the <code>AMAZON.FallbackIntent</code>. Amazon Lex
   *          returns three alternative intents with the following confidence scores:
   *          IntentA (0.70), IntentB (0.60), IntentC (0.50). The response from the
   *             <code>RecognizeText</code> operation would be:</p>
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
  nluIntentConfidenceThreshold: number | undefined;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;
}

export namespace CreateBotLocaleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotLocaleRequest): any => ({
    ...obj,
  });
}

export interface CreateBotLocaleResponse {
  /**
   * <p>The specified bot identifier.</p>
   */
  botId?: string;

  /**
   * <p>The specified bot version.</p>
   */
  botVersion?: string;

  /**
   * <p>The specified locale name.</p>
   */
  localeName?: string;

  /**
   * <p>The specified locale identifier.</p>
   */
  localeId?: string;

  /**
   * <p>The specified description of the bot locale.</p>
   */
  description?: string;

  /**
   * <p>The specified confidence threshold for inserting the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>The Amazon Polly voice ID that Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * <p>The status of the bot.</p>
   *          <p>When the status is <code>Creating</code> the bot locale is being
   *          configured. When the status is <code>Building</code> Amazon Lex is building
   *          the bot for testing and use.</p>
   *          <p>If the status of the bot is <code>ReadyExpressTesting</code>, you
   *          can test the bot using the exact utterances specified in the bots'
   *          intents. When the bot is ready for full testing or to run, the status
   *          is <code>Built</code>.</p>
   *          <p>If there was a problem with building the bot, the status is
   *             <code>Failed</code>. If the bot was saved but not built, the status
   *          is <code>NotBuilt</code>.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>A timestamp specifying the date and time that the bot locale was
   *          created.</p>
   */
  creationDateTime?: Date;
}

export namespace CreateBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotLocaleResponse): any => ({
    ...obj,
  });
}

export interface CreateBotVersionRequest {
  /**
   * <p>The identifier of the bot to create the version for.</p>
   */
  botId: string | undefined;

  /**
   * <p>A description of the version. Use the description to help identify
   *          the version in lists.</p>
   */
  description?: string;

  /**
   * <p>Specifies the locales that Amazon Lex adds to this version. You can
   *          choose the <code>Draft</code> version or any other previously published
   *          version for each locale. When you specify a source version, the locale
   *          data is copied from the source version to the new version.</p>
   */
  botVersionLocaleSpecification: { [key: string]: BotVersionLocaleDetails } | undefined;
}

export namespace CreateBotVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotVersionRequest): any => ({
    ...obj,
  });
}

export interface CreateBotVersionResponse {
  /**
   * <p>The bot identifier specified in the request.</p>
   */
  botId?: string;

  /**
   * <p>The description of the version specified in the request.</p>
   */
  description?: string;

  /**
   * <p>The version number assigned to the version.</p>
   */
  botVersion?: string;

  /**
   * <p>The source versions used for each locale in the new version.</p>
   */
  botVersionLocaleSpecification?: { [key: string]: BotVersionLocaleDetails };

  /**
   * <p>When you send a request to create or update a bot, Amazon Lex sets the
   *          status response element to <code>Creating</code>. After Amazon Lex builds
   *          the bot, it sets status to <code>Available</code>. If Amazon Lex can't build
   *          the bot, it sets status to <code>Failed</code>.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>A timestamp of the date and time that the version was
   *          created.</p>
   */
  creationDateTime?: Date;
}

export namespace CreateBotVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateBotVersionResponse): any => ({
    ...obj,
  });
}

export enum ImportExportFileFormat {
  LexJson = "LexJson",
  TSV = "TSV",
}

/**
 * <p>Provides the parameters required for exporting a custom vocabulary.</p>
 */
export interface CustomVocabularyExportSpecification {
  /**
   * <p>The identifier of the bot that contains the custom vocabulary to export.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the custom vocabulary to export.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale of the bot that contains the custom vocabulary to export.</p>
   */
  localeId: string | undefined;
}

export namespace CustomVocabularyExportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomVocabularyExportSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the bot or bot locale that you want to
 *          export. You can specify the <code>botExportSpecification</code> or the
 *             <code>botLocaleExportSpecification</code>, but not both.</p>
 */
export interface ExportResourceSpecification {
  /**
   * <p>Parameters for exporting a bot.</p>
   */
  botExportSpecification?: BotExportSpecification;

  /**
   * <p>Parameters for exporting a bot locale.</p>
   */
  botLocaleExportSpecification?: BotLocaleExportSpecification;

  /**
   * <p>The parameters required to export a custom vocabulary.</p>
   */
  customVocabularyExportSpecification?: CustomVocabularyExportSpecification;
}

export namespace ExportResourceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportResourceSpecification): any => ({
    ...obj,
  });
}

export interface CreateExportRequest {
  /**
   * <p>Specifies the type of resource to export, either a bot or a bot
   *          locale. You can only specify one type of resource to export.</p>
   */
  resourceSpecification: ExportResourceSpecification | undefined;

  /**
   * <p>The file format of the bot or bot locale definition files.</p>
   */
  fileFormat: ImportExportFileFormat | string | undefined;

  /**
   * <p>An password to use to encrypt the exported archive. Using a password
   *          is optional, but you should encrypt the archive to protect the data in
   *          transit between Amazon Lex and your local computer.</p>
   */
  filePassword?: string;
}

export namespace CreateExportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExportRequest): any => ({
    ...obj,
    ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
  });
}

export enum ExportStatus {
  Completed = "Completed",
  Deleting = "Deleting",
  Failed = "Failed",
  InProgress = "InProgress",
}

export interface CreateExportResponse {
  /**
   * <p>An identifier for a specific request to create an export.</p>
   */
  exportId?: string;

  /**
   * <p>A description of the type of resource that was exported, either a
   *          bot or a bot locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used for the bot or bot locale definition
   *          files.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>,
   *          you can use the <a href="https://docs.aws.amazon.com/latest/dg/API_DescribeExport.html">DescribeExport</a> operation to get the
   *          pre-signed S3 URL link to your exported bot or bot locale.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>The date and time that the request to export a bot was
   *          created.</p>
   */
  creationDateTime?: Date;
}

export namespace CreateExportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateExportResponse): any => ({
    ...obj,
  });
}

/**
 * <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>Settings that determine the Lambda function that Amazon Lex uses for
 *          processing user responses.</p>
 */
export interface DialogCodeHookSettings {
  /**
   * <p>Enables the dialog code hook so that it processes user
   *          requests.</p>
   */
  enabled: boolean | undefined;
}

export namespace DialogCodeHookSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DialogCodeHookSettings): any => ({
    ...obj,
  });
}

/**
 * <p>A custom response string that Amazon Lex sends to your application. You
 *          define the content and structure the string.</p>
 */
export interface CustomPayload {
  /**
   * <p>The string that is sent to your application.</p>
   */
  value: string | undefined;
}

export namespace CustomPayload {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomPayload): any => ({
    ...obj,
  });
}

/**
 * <p>A card that is shown to the user by a messaging platform. You define
 *          the contents of the card, the card is displayed by the platform. </p>
 *          <p>When you use a response card, the response from the user is
 *          constrained to the text associated with a button on the card.</p>
 */
export interface ImageResponseCard {
  /**
   * <p>The title to display on the response card. The format of the title
   *          is determined by the platform displaying the response card.</p>
   */
  title: string | undefined;

  /**
   * <p>The subtitle to display on the response card. The format of the
   *          subtitle is determined by the platform displaying the response
   *          card.</p>
   */
  subtitle?: string;

  /**
   * <p>The URL of an image to display on the response card. The image URL
   *          must be publicly available so that the platform displaying the response
   *          card has access to the image.</p>
   */
  imageUrl?: string;

  /**
   * <p>A list of buttons that should be displayed on the response card. The
   *          arrangement of the buttons is determined by the platform that displays
   *          the button.</p>
   */
  buttons?: Button[];
}

export namespace ImageResponseCard {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImageResponseCard): any => ({
    ...obj,
  });
}

/**
 * <p>Defines an ASCII text message to send to the user.</p>
 */
export interface PlainTextMessage {
  /**
   * <p>The message to send to the user.</p>
   */
  value: string | undefined;
}

export namespace PlainTextMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PlainTextMessage): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a Speech Synthesis Markup Language (SSML) prompt.</p>
 */
export interface SSMLMessage {
  /**
   * <p>The SSML text that defines the prompt.</p>
   */
  value: string | undefined;
}

export namespace SSMLMessage {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SSMLMessage): any => ({
    ...obj,
  });
}

/**
 * <p>The object that provides message text and it's type.</p>
 */
export interface Message {
  /**
   * <p>A message in plain text format.</p>
   */
  plainTextMessage?: PlainTextMessage;

  /**
   * <p>A message in a custom format defined by the client
   *          application.</p>
   */
  customPayload?: CustomPayload;

  /**
   * <p>A message in Speech Synthesis Markup Language (SSML).</p>
   */
  ssmlMessage?: SSMLMessage;

  /**
   * <p>A message that defines a response card that the client application
   *          can show to the user.</p>
   */
  imageResponseCard?: ImageResponseCard;
}

export namespace Message {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Message): any => ({
    ...obj,
  });
}

/**
 * <p>Provides one or more messages that Amazon Lex should send to the
 *          user.</p>
 */
export interface MessageGroup {
  /**
   * <p>The primary message that Amazon Lex should send to the user.</p>
   */
  message: Message | undefined;

  /**
   * <p>Message variations to send to the user. When variations are defined,
   *          Amazon Lex chooses the primary message or one of the variations to send to
   *          the user.</p>
   */
  variations?: Message[];
}

export namespace MessageGroup {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MessageGroup): any => ({
    ...obj,
  });
}

/**
 * <p>Provides settings for a message that is sent to the user when a
 *          fulfillment Lambda function starts running.</p>
 */
export interface FulfillmentStartResponseSpecification {
  /**
   * <p>The delay between when the Lambda fulfillment function starts running
   *          and the start message is played. If the Lambda function returns before
   *          the delay is over, the start message isn't played.</p>
   */
  delayInSeconds: number | undefined;

  /**
   * <p>One to 5 message groups that contain start messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Determines whether the user can interrupt the start message while it
   *          is playing.</p>
   */
  allowInterrupt?: boolean;
}

export namespace FulfillmentStartResponseSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FulfillmentStartResponseSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Provides settings for a message that is sent periodically to the
 *          user while a fulfillment Lambda function is running.</p>
 */
export interface FulfillmentUpdateResponseSpecification {
  /**
   * <p>The frequency that a message is sent to the user. When the period
   *          ends, Amazon Lex chooses a message from the message groups and plays it to
   *          the user. If the fulfillment Lambda returns before the first period
   *          ends, an update message is not played to the user.</p>
   */
  frequencyInSeconds: number | undefined;

  /**
   * <p>One to 5 message groups that contain update messages. Amazon Lex chooses
   *          one of the messages to play to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Determines whether the user can interrupt an update message while it
   *          is playing.</p>
   */
  allowInterrupt?: boolean;
}

export namespace FulfillmentUpdateResponseSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FulfillmentUpdateResponseSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information for updating the user on the progress of
 *          fulfilling an intent.</p>
 */
export interface FulfillmentUpdatesSpecification {
  /**
   * <p>Determines whether fulfillment updates are sent to the user. When
   *          this field is true, updates are sent.</p>
   *          <p>If the <code>active</code> field is set to true, the
   *             <code>startResponse</code>, <code>updateResponse</code>, and
   *             <code>timeoutInSeconds</code> fields are required.</p>
   */
  active: boolean | undefined;

  /**
   * <p>Provides configuration information for the message sent to users
   *          when the fulfillment Lambda functions starts running.</p>
   */
  startResponse?: FulfillmentStartResponseSpecification;

  /**
   * <p>Provides configuration information for messages sent periodically to
   *          the user while the fulfillment Lambda function is running.</p>
   */
  updateResponse?: FulfillmentUpdateResponseSpecification;

  /**
   * <p>The length of time that the fulfillment Lambda function should run
   *          before it times out.</p>
   */
  timeoutInSeconds?: number;
}

export namespace FulfillmentUpdatesSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FulfillmentUpdatesSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a list of message groups that Amazon Lex uses to respond the
 *          user input.</p>
 */
export interface ResponseSpecification {
  /**
   * <p>A collection of responses that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual response to send at runtime.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>Indicates whether the user can interrupt a speech response from
   *          Amazon Lex.</p>
   */
  allowInterrupt?: boolean;
}

export namespace ResponseSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResponseSpecification): any => ({
    ...obj,
  });
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
}

export namespace PostFulfillmentStatusSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PostFulfillmentStatusSpecification): any => ({
    ...obj,
  });
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
}

export namespace FulfillmentCodeHookSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FulfillmentCodeHookSettings): any => ({
    ...obj,
  });
}

/**
 * <p>The name of a context that must be active for an intent to be
 *          selected by Amazon Lex.</p>
 */
export interface InputContext {
  /**
   * <p>The name of the context.</p>
   */
  name: string | undefined;
}

export namespace InputContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InputContext): any => ({
    ...obj,
  });
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
  closingResponse: ResponseSpecification | undefined;

  /**
   * <p>Specifies whether an intent's closing response is used. When this
   *          field is false, the closing response isn't sent to the user. If the
   *             <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;
}

export namespace IntentClosingSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentClosingSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a list of message groups that Amazon Lex sends to a user to
 *          elicit a response.</p>
 */
export interface PromptSpecification {
  /**
   * <p>A collection of messages that Amazon Lex can send to the user. Amazon Lex
   *          chooses the actual message to send at runtime.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>The maximum number of times the bot tries to elicit a response from
   *          the user using this prompt.</p>
   */
  maxRetries: number | undefined;

  /**
   * <p>Indicates whether the user can interrupt a speech prompt from the
   *          bot.</p>
   */
  allowInterrupt?: boolean;
}

export namespace PromptSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PromptSpecification): any => ({
    ...obj,
  });
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
  declinationResponse: ResponseSpecification | undefined;

  /**
   * <p>Specifies whether the intent's confirmation is sent to the user.
   *          When this field is false, confirmation and declination responses aren't
   *          sent. If the <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;
}

export namespace IntentConfirmationSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentConfirmationSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Provides configuration information for the AMAZON.KendraSearchIntent
 *          intent. When you use this intent, Amazon Lex searches the specified Amazon Kendra
 *          index and returns documents from the index that match the user's
 *          utterance.</p>
 */
export interface KendraConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Kendra index that you want the
   *          AMAZON.KendraSearchIntent intent to search. The index must be in the
   *          same account and Region as the Amazon Lex bot.</p>
   */
  kendraIndex: string | undefined;

  /**
   * <p>Determines whether the AMAZON.KendraSearchIntent intent uses a
   *          custom query string to query the Amazon Kendra index.</p>
   */
  queryFilterStringEnabled?: boolean;

  /**
   * <p>A query filter that Amazon Lex sends to Amazon Kendra to filter the response from
   *          a query. The filter is in the format defined by Amazon Kendra. For more
   *          information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/filtering.html">Filtering
   *          queries</a>.</p>
   */
  queryFilterString?: string;
}

export namespace KendraConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KendraConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>Describes a session context that is activated when an intent is
 *          fulfilled.</p>
 */
export interface OutputContext {
  /**
   * <p>The name of the output context.</p>
   */
  name: string | undefined;

  /**
   * <p>The amount of time, in seconds, that the output context should
   *          remain active. The time is figured from the first time the context is
   *          sent to the user.</p>
   */
  timeToLiveInSeconds: number | undefined;

  /**
   * <p>The number of conversation turns that the output context should
   *          remain active. The number of turns is counted from the first time that
   *          the context is sent to the user.</p>
   */
  turnsToLive: number | undefined;
}

export namespace OutputContext {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputContext): any => ({
    ...obj,
  });
}

/**
 * <p>A sample utterance that invokes an intent or respond to a slot
 *          elicitation prompt.</p>
 */
export interface SampleUtterance {
  /**
   * <p>The sample utterance that Amazon Lex uses to build its machine-learning
   *          model to recognize intents.</p>
   */
  utterance: string | undefined;
}

export namespace SampleUtterance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampleUtterance): any => ({
    ...obj,
  });
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
}

export namespace CreateIntentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntentRequest): any => ({
    ...obj,
  });
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
}

export namespace CreateIntentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateIntentResponse): any => ({
    ...obj,
  });
}

export interface CreateResourcePolicyRequest {
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
}

export namespace CreateResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface CreateResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was attached to.</p>
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

export namespace CreateResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourcePolicyResponse): any => ({
    ...obj,
  });
}

export enum Effect {
  Allow = "Allow",
  Deny = "Deny",
}

/**
 * <p>The IAM principal that you allowing or denying access to an Amazon Lex
 *          action. You must provide a <code>service</code> or an <code>arn</code>,
 *          but not both in the same statement. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html"> AWS JSON policy elements: Principal </a>.</p>
 */
export interface Principal {
  /**
   * <p>The name of the AWS service that should allowed or denied access to
   *          an Amazon Lex action.</p>
   */
  service?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the principal.</p>
   */
  arn?: string;
}

export namespace Principal {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Principal): any => ({
    ...obj,
  });
}

export interface CreateResourcePolicyStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the statement. The ID is the same as the
   *             <code>Sid</code> IAM property. The statement name must be unique
   *          within the policy. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_sid.html">IAM
   *             JSON policy elements: Sid</a>. </p>
   */
  statementId: string | undefined;

  /**
   * <p>Determines whether the statement allows or denies access to the
   *          resource.</p>
   */
  effect: Effect | string | undefined;

  /**
   * <p>An IAM principal, such as an IAM users, IAM roles, or AWS services
   *          that is allowed or denied access to a resource. For more information,
   *          see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html">AWS JSON policy elements: Principal</a>.</p>
   */
  principal: Principal[] | undefined;

  /**
   * <p>The Amazon Lex action that this policy either allows or denies. The
   *          action must apply to the resource type of the specified ARN. For more
   *          information, see <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_amazonlexv2.html">
   *             Actions, resources, and condition keys for Amazon Lex V2</a>.</p>
   */
  action: string[] | undefined;

  /**
   * <p>Specifies a condition when the policy is in effect. If the principal
   *          of the policy is a service principal, you must provide two condition
   *          blocks, one with a SourceAccount global condition key and one with a
   *          SourceArn global condition key.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_condition.html">IAM JSON policy elements: Condition </a>.</p>
   */
  condition?: { [key: string]: { [key: string]: string } };

  /**
   * <p>The identifier of the revision of the policy to edit. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   */
  expectedRevisionId?: string;
}

export namespace CreateResourcePolicyStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourcePolicyStatementRequest): any => ({
    ...obj,
  });
}

export interface CreateResourcePolicyStatementResponse {
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

export namespace CreateResourcePolicyStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateResourcePolicyStatementResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates whether a slot can return multiple values.</p>
 */
export interface MultipleValuesSetting {
  /**
   * <p>Indicates whether a slot can return multiple values. When
   *             <code>true</code>, the slot may return more than one value in a
   *          response. When <code>false</code>, the slot returns only a single
   *          value.</p>
   *          <p>Multi-value slots are only available in the en-US locale. If you set
   *          this value to <code>true</code> in any other locale, Amazon Lex throws a
   *             <code>ValidationException</code>.</p>
   *          <p>If the <code>allowMutlipleValues</code> is not set, the default
   *          value is <code>false</code>.</p>
   */
  allowMultipleValues?: boolean;
}

export namespace MultipleValuesSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MultipleValuesSetting): any => ({
    ...obj,
  });
}

export enum ObfuscationSettingType {
  DefaultObfuscation = "DefaultObfuscation",
  None = "None",
}

/**
 * <p>Determines whether Amazon Lex obscures slot values in conversation logs.
 *       </p>
 */
export interface ObfuscationSetting {
  /**
   * <p>Value that determines whether Amazon Lex obscures slot values in
   *          conversation logs. The default is to obscure the values.</p>
   */
  obfuscationSettingType: ObfuscationSettingType | string | undefined;
}

export namespace ObfuscationSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ObfuscationSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the default value to use when a user doesn't provide a
 *          value for a slot.</p>
 */
export interface SlotDefaultValue {
  /**
   * <p>The default value to use when a user doesn't provide a value for a
   *          slot.</p>
   */
  defaultValue: string | undefined;
}

export namespace SlotDefaultValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotDefaultValue): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a list of values that Amazon Lex should use as the default value
 *          for a slot.</p>
 */
export interface SlotDefaultValueSpecification {
  /**
   * <p>A list of default values. Amazon Lex chooses the default value to use in
   *          the order that they are presented in the list.</p>
   */
  defaultValueList: SlotDefaultValue[] | undefined;
}

export namespace SlotDefaultValueSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotDefaultValueSpecification): any => ({
    ...obj,
  });
}

export enum SlotConstraint {
  Optional = "Optional",
  Required = "Required",
}

/**
 * <p>Defines the messages that Amazon Lex sends to a user to remind them that
 *          the bot is waiting for a response.</p>
 */
export interface StillWaitingResponseSpecification {
  /**
   * <p>One or more message groups, each containing one or more messages,
   *          that define the prompts that Amazon Lex sends to the user.</p>
   */
  messageGroups: MessageGroup[] | undefined;

  /**
   * <p>How often a message should be sent to the user. Minimum of 1 second,
   *          maximum of 5 minutes.</p>
   */
  frequencyInSeconds: number | undefined;

  /**
   * <p>If Amazon Lex waits longer than this length of time for a response, it
   *          will stop sending messages.</p>
   */
  timeoutInSeconds: number | undefined;

  /**
   * <p>Indicates that the user can interrupt the response by speaking while
   *          the message is being played.</p>
   */
  allowInterrupt?: boolean;
}

export namespace StillWaitingResponseSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StillWaitingResponseSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
 *          customer input. </p>
 */
export interface WaitAndContinueSpecification {
  /**
   * <p>The response that Amazon Lex sends to indicate that the bot is waiting
   *          for the conversation to continue.</p>
   */
  waitingResponse: ResponseSpecification | undefined;

  /**
   * <p>The response that Amazon Lex sends to indicate that the bot is ready to
   *          continue the conversation.</p>
   */
  continueResponse: ResponseSpecification | undefined;

  /**
   * <p>A response that Amazon Lex sends periodically to the user to indicate
   *          that the bot is still waiting for input from the user.</p>
   */
  stillWaitingResponse?: StillWaitingResponseSpecification;

  /**
   * <p>Specifies whether the bot will wait for a user to respond. When this
   *          field is false, wait and continue responses for a slot aren't used. If
   *          the <code>active</code> field isn't specified, the default is
   *          true.</p>
   */
  active?: boolean;
}

export namespace WaitAndContinueSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: WaitAndContinueSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Settings that you can use for eliciting a slot value.</p>
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
}

export namespace SlotValueElicitationSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotValueElicitationSetting): any => ({
    ...obj,
  });
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
  slotTypeId: string | undefined;

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
}

export namespace CreateSlotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSlotRequest): any => ({
    ...obj,
  });
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
}

export namespace CreateSlotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSlotResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the Amazon S3 bucket name and location for the grammar
 *          that is the source for the slot type.</p>
 */
export interface GrammarSlotTypeSource {
  /**
   * <p>The name of the S3 bucket that contains the grammar source.</p>
   */
  s3BucketName: string | undefined;

  /**
   * <p>The path to the grammar in the S3 bucket.</p>
   */
  s3ObjectKey: string | undefined;

  /**
   * <p>The Amazon KMS key required to decrypt the contents of the grammar,
   *          if any.</p>
   */
  kmsKeyArn?: string;
}

export namespace GrammarSlotTypeSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrammarSlotTypeSource): any => ({
    ...obj,
  });
}

/**
 * <p>Settings requried for a slot type based on a grammar that you
 *          provide.</p>
 */
export interface GrammarSlotTypeSetting {
  /**
   * <p>The source of the grammar used to create the slot type.</p>
   */
  source?: GrammarSlotTypeSource;
}

export namespace GrammarSlotTypeSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrammarSlotTypeSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the external source of the slot type's
 *          definition.</p>
 */
export interface ExternalSourceSetting {
  /**
   * <p>Settings required for a slot type based on a grammar that you
   *          provide.</p>
   */
  grammarSlotTypeSetting?: GrammarSlotTypeSetting;
}

export namespace ExternalSourceSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExternalSourceSetting): any => ({
    ...obj,
  });
}

/**
 * <p>Defines one of the values for a slot type.</p>
 */
export interface SampleValue {
  /**
   * <p>The value that can be used for a slot type.</p>
   */
  value: string | undefined;
}

export namespace SampleValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SampleValue): any => ({
    ...obj,
  });
}

/**
 * <p>Each slot type can have a set of values. Each
 *             <code>SlotTypeValue</code> represents a value that the slot type can
 *          take.</p>
 */
export interface SlotTypeValue {
  /**
   * <p>The value of the slot type entry.</p>
   */
  sampleValue?: SampleValue;

  /**
   * <p>Additional values related to the slot type entry.</p>
   */
  synonyms?: SampleValue[];
}

export namespace SlotTypeValue {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotTypeValue): any => ({
    ...obj,
  });
}

/**
 * <p>Provides a regular expression used to validate the value of a
 *          slot.</p>
 */
export interface SlotValueRegexFilter {
  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   *          <p> Use a standard regular expression. Amazon Lex supports the following
   *          characters in the regular expression: </p>
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
   *          <p> Represent Unicode characters with four digits, for example "\u0041"
   *          or "\u005A". </p>
   *          <p> The following regular expression operators are not supported: </p>
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

export namespace SlotValueRegexFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotValueRegexFilter): any => ({
    ...obj,
  });
}

export enum SlotValueResolutionStrategy {
  OriginalValue = "OriginalValue",
  TopResolution = "TopResolution",
}

/**
 * <p>Contains settings used by Amazon Lex to select a slot value.</p>
 */
export interface SlotValueSelectionSetting {
  /**
   * <p>Determines the slot resolution strategy that Amazon Lex uses to
   *          return slot type values. The field can be set to one of the following
   *          values:</p>
   *
   *          <ul>
   *             <li>
   *                <p>OriginalValue - Returns the value entered by the user, if the
   *                user value is similar to the slot value.</p>
   *             </li>
   *             <li>
   *                <p>TopResolution - If there is a resolution list for the slot,
   *                return the first value in the resolution list as the slot type
   *                value. If there is no resolution list, null is returned.</p>
   *             </li>
   *          </ul>
   *
   *          <p>If you don't specify the valueSelectionStrategy, the default is
   *          OriginalValue. </p>
   */
  resolutionStrategy: SlotValueResolutionStrategy | string | undefined;

  /**
   * <p>A regular expression used to validate the value of a slot.</p>
   */
  regexFilter?: SlotValueRegexFilter;

  /**
   * <p>Provides settings that enable advanced recognition settings for slot
   *          values.</p>
   */
  advancedRecognitionSetting?: AdvancedRecognitionSetting;
}

export namespace SlotValueSelectionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotValueSelectionSetting): any => ({
    ...obj,
  });
}

export interface CreateSlotTypeRequest {
  /**
   * <p>The name for the slot. A slot type name must be unique within the
   *          account.</p>
   */
  slotTypeName: string | undefined;

  /**
   * <p>A description of the slot type. Use the description to help identify
   *          the slot type in lists.</p>
   */
  description?: string;

  /**
   * <p>A list of <code>SlotTypeValue</code> objects that defines the values
   *          that the slot type can take. Each value can have a list of synonyms,
   *          additional values that help train the machine learning model about the
   *          values that it resolves for a slot.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>Determines the strategy that Amazon Lex uses to select a value from the
   *          list of possible values. The field can be set to one of the following
   *          values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>OriginalValue</code> - Returns the value entered by the
   *                user, if the user value is similar to the slot value.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TopResolution</code> - If there is a resolution list for
   *                the slot, return the first value in the resolution list. If there
   *                is no resolution list, return null.</p>
   *             </li>
   *          </ul>
   *          <p>If you don't specify the <code>valueSelectionSetting</code>
   *          parameter, the default is <code>OriginalValue</code>.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The built-in slot type used as a parent of this slot type. When you
   *          define a parent slot type, the new slot type has the configuration of
   *          the parent slot type.</p>
   *          <p>Only <code>AMAZON.AlphaNumeric</code> is supported.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot associated with this slot type.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the bot version associated with this slot
   *          type.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot type will be
   *          used in. The string must match one of the supported locales. All of the
   *          bots, intents, and slots used by the slot type must have the same
   *          locale. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Sets the type of external information used to create the slot
   *          type.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;
}

export namespace CreateSlotTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface CreateSlotTypeResponse {
  /**
   * <p>The unique identifier assigned to the slot type. Use this to
   *          identify the slot type in the <code>UpdateSlotType</code> and
   *             <code>DeleteSlotType</code> operations.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The name specified for the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The description specified for the slot type.</p>
   */
  description?: string;

  /**
   * <p>The list of values that the slot type can assume.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The strategy that Amazon Lex uses to select a value from the list of
   *          possible values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The signature of the base slot type specified for the slot
   *          type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier for the bot associated with the slot type.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion?: string;

  /**
   * <p>The specified language and local specified for the slot type.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the slot type was
   *          created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The type of external information used to create the slot
   *          type.</p>
   */
  externalSourceSetting?: ExternalSourceSetting;
}

export namespace CreateSlotTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateSlotTypeResponse): any => ({
    ...obj,
  });
}

export interface CreateUploadUrlRequest {}

export namespace CreateUploadUrlRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUploadUrlRequest): any => ({
    ...obj,
  });
}

export interface CreateUploadUrlResponse {
  /**
   * <p>An identifier for a unique import job. Use it when you call the
   *             <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_StartImport.html">StartImport</a> operation.</p>
   */
  importId?: string;

  /**
   * <p>A pre-signed S3 write URL. Upload the zip archive file that contains
   *          the definition of your bot or bot locale.</p>
   */
  uploadUrl?: string;
}

export namespace CreateUploadUrlResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateUploadUrlResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Provides the parameters required for importing a custom vocabulary.</p>
 */
export interface CustomVocabularyImportSpecification {
  /**
   * <p>The identifier of the bot to import the custom vocabulary to.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to import the custom vocabulary to.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the local to import the custom vocabulary to. The value must
   *       be <code>en_GB</code>.</p>
   */
  localeId: string | undefined;
}

export namespace CustomVocabularyImportSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CustomVocabularyImportSpecification): any => ({
    ...obj,
  });
}

export enum CustomVocabularyStatus {
  Creating = "Creating",
  Deleting = "Deleting",
  Exporting = "Exporting",
  Importing = "Importing",
  Ready = "Ready",
}

/**
 * <p>The object used for specifying the data range that the customer
 *          wants Amazon Lex to read through in the input transcripts.</p>
 */
export interface DateRangeFilter {
  /**
   * <p>A timestamp indicating the start date for the date range
   *          filter.</p>
   */
  startDateTime: Date | undefined;

  /**
   * <p>A timestamp indicating the end date for the date range
   *          filter.</p>
   */
  endDateTime: Date | undefined;
}

export namespace DateRangeFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateRangeFilter): any => ({
    ...obj,
  });
}

export interface DeleteBotRequest {
  /**
   * <p>The identifier of the bot to delete. </p>
   */
  botId: string | undefined;

  /**
   * <p>When <code>true</code>, Amazon Lex doesn't check to see if another
   *          resource, such as an alias, is using the bot before it is
   *          deleted.</p>
   */
  skipResourceInUseCheck?: boolean;
}

export namespace DeleteBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotResponse {
  /**
   * <p>The unique identifier of the bot that Amazon Lex is deleting.</p>
   */
  botId?: string;

  /**
   * <p>The current status of the bot. The status is <code>Deleting</code>
   *          while the bot and its associated resources are being deleted.</p>
   */
  botStatus?: BotStatus | string;
}

export namespace DeleteBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotResponse): any => ({
    ...obj,
  });
}

export interface DeleteBotAliasRequest {
  /**
   * <p>The unique identifier of the bot alias to delete.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The unique identifier of the bot associated with the alias to
   *          delete.</p>
   */
  botId: string | undefined;

  /**
   * <p>When this parameter is true, Amazon Lex doesn't check to see if any other
   *          resource is using the alias before it is deleted.</p>
   */
  skipResourceInUseCheck?: boolean;
}

export namespace DeleteBotAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotAliasRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotAliasResponse {
  /**
   * <p>The unique identifier of the bot alias to delete.</p>
   */
  botAliasId?: string;

  /**
   * <p>The unique identifier of the bot that contains the alias to
   *          delete.</p>
   */
  botId?: string;

  /**
   * <p>The current status of the alias. The status is <code>Deleting</code>
   *          while the alias is in the process of being deleted. Once the alias is
   *          deleted, it will no longer appear in the list of aliases returned by
   *          the <code>ListBotAliases</code> operation.</p>
   */
  botAliasStatus?: BotAliasStatus | string;
}

export namespace DeleteBotAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotAliasResponse): any => ({
    ...obj,
  });
}

export interface DeleteBotLocaleRequest {
  /**
   * <p>The unique identifier of the bot that contains the locale.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the locale. </p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that will be deleted. The
   *          string must match one of the supported locales. For more information,
   *          see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

export namespace DeleteBotLocaleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotLocaleRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotLocaleResponse {
  /**
   * <p>The identifier of the bot that contained the deleted locale.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contained the deleted locale.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the deleted locale.</p>
   */
  localeId?: string;

  /**
   * <p>The status of deleting the bot locale. The locale first enters the
   *             <code>Deleting</code> status. Once the locale is deleted it no
   *          longer appears in the list of locales for the bot.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;
}

export namespace DeleteBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotLocaleResponse): any => ({
    ...obj,
  });
}

export interface DeleteBotVersionRequest {
  /**
   * <p>The identifier of the bot that contains the version.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to delete.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>By default, the <code>DeleteBotVersion</code> operations throws a
   *             <code>ResourceInUseException</code> exception if you try to delete a
   *          bot version that has an alias pointing at it. Set the
   *             <code>skipResourceInUseCheck</code> parameter to <code>true</code>
   *          to skip this check and remove the version even if an alias points to
   *          it.</p>
   */
  skipResourceInUseCheck?: boolean;
}

export namespace DeleteBotVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteBotVersionResponse {
  /**
   * <p>The identifier of the bot that is being deleted.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that is being deleted.</p>
   */
  botVersion?: string;

  /**
   * <p>The current status of the bot. </p>
   */
  botStatus?: BotStatus | string;
}

export namespace DeleteBotVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteBotVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteCustomVocabularyRequest {
  /**
   * <p>The unique identifier of the bot to remove the custom
   *       vocabulary from.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to remove the custom vocabulary
   *       from.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale identifier for the locale that contains the
   *       custom vocabulary to remove.</p>
   */
  localeId: string | undefined;
}

export namespace DeleteCustomVocabularyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomVocabularyRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomVocabularyResponse {
  /**
   * <p>The identifier of the bot that the custom vocabulary
   *       was removed from.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that the custom vocabulary
   *          was removed from.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale identifier for the locale that the
   *          custom vocabulary was removed from.</p>
   */
  localeId?: string;

  /**
   * <p>The status of removing the custom vocabulary.</p>
   */
  customVocabularyStatus?: CustomVocabularyStatus | string;
}

export namespace DeleteCustomVocabularyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomVocabularyResponse): any => ({
    ...obj,
  });
}

export interface DeleteExportRequest {
  /**
   * <p>The unique identifier of the export to delete.</p>
   */
  exportId: string | undefined;
}

export namespace DeleteExportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExportRequest): any => ({
    ...obj,
  });
}

export interface DeleteExportResponse {
  /**
   * <p>The unique identifier of the deleted export.</p>
   */
  exportId?: string;

  /**
   * <p>The current status of the deletion. When the deletion is complete,
   *          the export will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListExports.html">ListExports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeExport.html">
   *             DescribeExport</a> operation with the export identifier will
   *          fail.</p>
   */
  exportStatus?: ExportStatus | string;
}

export namespace DeleteExportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteExportResponse): any => ({
    ...obj,
  });
}

export interface DeleteImportRequest {
  /**
   * <p>The unique identifier of the import to delete.</p>
   */
  importId: string | undefined;
}

export namespace DeleteImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImportRequest): any => ({
    ...obj,
  });
}

export enum ImportStatus {
  Completed = "Completed",
  Deleting = "Deleting",
  Failed = "Failed",
  InProgress = "InProgress",
}

export interface DeleteImportResponse {
  /**
   * <p>The unique identifier of the deleted import.</p>
   */
  importId?: string;

  /**
   * <p>The current status of the deletion. When the deletion is complete,
   *          the import will no longer be returned by the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListImports.html">ListImports</a> operation and calls to the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeImport.html">DescribeImport</a> operation with the import identifier will
   *          fail.</p>
   */
  importStatus?: ImportStatus | string;
}

export namespace DeleteImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteImportResponse): any => ({
    ...obj,
  });
}

export interface DeleteIntentRequest {
  /**
   * <p>The unique identifier of the intent to delete.</p>
   */
  intentId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale where the bot will be
   *          deleted. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

export namespace DeleteIntentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteIntentRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that has the
   *          resource policy attached.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The identifier of the revision to edit. If this ID doesn't match the
   *          current revision number, Amazon Lex returns an exception</p>
   *          <p>If you don't specify a revision ID, Amazon Lex will delete the current
   *          policy.</p>
   */
  expectedRevisionId?: string;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy was deleted from.</p>
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

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyStatementRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>The name of the statement (SID) to delete from the policy.</p>
   */
  statementId: string | undefined;

  /**
   * <p>The identifier of the revision of the policy to delete the statement
   *          from. If this revision ID doesn't match the current revision ID, Amazon Lex
   *          throws an exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex removes the current contents
   *          of the statement. </p>
   */
  expectedRevisionId?: string;
}

export namespace DeleteResourcePolicyStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyStatementRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyStatementResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy statement was removed from.</p>
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

export namespace DeleteResourcePolicyStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyStatementResponse): any => ({
    ...obj,
  });
}

export interface DeleteSlotRequest {
  /**
   * <p>The identifier of the slot to delete. </p>
   */
  slotId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot to delete.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot to delete.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent associated with the slot.</p>
   */
  intentId: string | undefined;
}

export namespace DeleteSlotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSlotRequest): any => ({
    ...obj,
  });
}

export interface DeleteSlotTypeRequest {
  /**
   * <p>The identifier of the slot type to delete.</p>
   */
  slotTypeId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale that the slot type will be
   *          deleted from. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>By default, the <code>DeleteSlotType</code> operations throws a
   *             <code>ResourceInUseException</code> exception if you try to delete a
   *          slot type used by a slot. Set the <code>skipResourceInUseCheck</code>
   *          parameter to <code>true</code> to skip this check and remove the slot
   *          type even if a slot uses it.</p>
   */
  skipResourceInUseCheck?: boolean;
}

export namespace DeleteSlotTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteUtterancesRequest {
  /**
   * <p>The unique identifier of the bot that contains the
   *          utterances.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the language and locale where the utterances were
   *          collected. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId?: string;

  /**
   * <p>The unique identifier of the session with the user. The ID is
   *          returned in the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeText.html">RecognizeText</a> and <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_runtime_RecognizeUtterance.html">RecognizeUtterance</a> operations.</p>
   */
  sessionId?: string;
}

export namespace DeleteUtterancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUtterancesRequest): any => ({
    ...obj,
  });
}

export interface DeleteUtterancesResponse {}

export namespace DeleteUtterancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUtterancesResponse): any => ({
    ...obj,
  });
}

export interface DescribeBotRequest {
  /**
   * <p>The unique identifier of the bot to describe.</p>
   */
  botId: string | undefined;
}

export namespace DescribeBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotRequest): any => ({
    ...obj,
  });
}

export interface DescribeBotResponse {
  /**
   * <p>The unique identifier of the bot.</p>
   */
  botId?: string;

  /**
   * <p>The name of the bot.</p>
   */
  botName?: string;

  /**
   * <p>The description of the bot. </p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot.</p>
   */
  roleArn?: string;

  /**
   * <p>Settings for managing data privacy of the bot and its conversations
   *          with users.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * <p>The maximum time in seconds that Amazon Lex retains the data gathered in
   *          a conversation.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The current status of the bot. When the status is
   *             <code>Available</code> the bot is ready to be used in conversations
   *          with users.</p>
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

export namespace DescribeBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotResponse): any => ({
    ...obj,
  });
}

export interface DescribeBotAliasRequest {
  /**
   * <p>The identifier of the bot alias to describe.</p>
   */
  botAliasId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the bot alias to
   *          describe.</p>
   */
  botId: string | undefined;
}

export namespace DescribeBotAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotAliasRequest): any => ({
    ...obj,
  });
}

export interface DescribeBotAliasResponse {
  /**
   * <p>The identifier of the bot alias.</p>
   */
  botAliasId?: string;

  /**
   * <p>The name of the bot alias.</p>
   */
  botAliasName?: string;

  /**
   * <p>The description of the bot alias.</p>
   */
  description?: string;

  /**
   * <p>The version of the bot associated with the bot alias.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale settings that are unique to the alias.</p>
   */
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings };

  /**
   * <p>Specifics of how Amazon Lex logs text and audio conversations with the
   *          bot associated with the alias.</p>
   */
  conversationLogSettings?: ConversationLogSettings;

  /**
   * <p>Determines whether Amazon Lex will use Amazon Comprehend to detect the sentiment of
   *          user utterances.</p>
   */
  sentimentAnalysisSettings?: SentimentAnalysisSettings;

  /**
   * <p>A list of events that affect a bot alias. For example, an event is
   *          recorded when the version that the alias points to changes.</p>
   */
  botAliasHistoryEvents?: BotAliasHistoryEvent[];

  /**
   * <p>The current status of the alias. When the alias is
   *             <code>Available</code>, the alias is ready for use with your
   *          bot.</p>
   */
  botAliasStatus?: BotAliasStatus | string;

  /**
   * <p>The identifier of the bot associated with the bot alias.</p>
   */
  botId?: string;

  /**
   * <p>A timestamp of the date and time that the alias was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>A timestamp of the date and time that the alias was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DescribeBotAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotAliasResponse): any => ({
    ...obj,
  });
}

export interface DescribeBotLocaleRequest {
  /**
   * <p>The identifier of the bot associated with the locale.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the version of the bot associated with the
   *          locale.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The unique identifier of the locale to describe. The string must
   *          match one of the supported locales. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>. </p>
   */
  localeId: string | undefined;
}

export namespace DescribeBotLocaleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotLocaleRequest): any => ({
    ...obj,
  });
}

export interface DescribeBotLocaleResponse {
  /**
   * <p>The identifier of the bot associated with the locale.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the version of the bot associated with the
   *          locale.</p>
   */
  botVersion?: string;

  /**
   * <p>The unique identifier of the described locale.</p>
   */
  localeId?: string;

  /**
   * <p>The name of the locale.</p>
   */
  localeName?: string;

  /**
   * <p>The description of the locale.</p>
   */
  description?: string;

  /**
   * <p>The confidence threshold where Amazon Lex inserts the
   *             <code>AMAZON.FallbackIntent</code> and
   *             <code>AMAZON.KendraSearchIntent</code> intents in the list of
   *          possible intents for an utterance.</p>
   */
  nluIntentConfidenceThreshold?: number;

  /**
   * <p>The Amazon Polly voice Amazon Lex uses for voice interaction with the
   *          user.</p>
   */
  voiceSettings?: VoiceSettings;

  /**
   * <p>The number of intents defined for the locale.</p>
   */
  intentsCount?: number;

  /**
   * <p>The number of slot types defined for the locale.</p>
   */
  slotTypesCount?: number;

  /**
   * <p>The status of the bot. If the status is <code>Failed</code>, the
   *          reasons for the failure are listed in the <code>failureReasons</code>
   *          field.</p>
   */
  botLocaleStatus?: BotLocaleStatus | string;

  /**
   * <p>if <code>botLocaleStatus</code> is <code>Failed</code>, Amazon Lex
   *          explains why it failed to build the bot.</p>
   */
  failureReasons?: string[];

  /**
   * <p>The date and time that the locale was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the locale was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The date and time that the locale was last submitted for
   *          building.</p>
   */
  lastBuildSubmittedDateTime?: Date;

  /**
   * <p>History of changes, such as when a locale is used in an alias, that
   *          have taken place for the locale.</p>
   */
  botLocaleHistoryEvents?: BotLocaleHistoryEvent[];

  /**
   * <p>Recommended actions to take to resolve an error in the
   *             <code>failureReasons</code> field.</p>
   */
  recommendedActions?: string[];
}

export namespace DescribeBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotLocaleResponse): any => ({
    ...obj,
  });
}

export interface DescribeBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot associated with the bot
   *          recommendation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the bot
   *          recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to describe. The string must match one of the supported locales. For
   *          more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the bot recommendation to describe.</p>
   */
  botRecommendationId: string | undefined;
}

export namespace DescribeBotRecommendationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotRecommendationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The object representing the passwords that were used to encrypt the
 *          data related to the bot recommendation, as well as the KMS key ARN used
 *          to encrypt the associated metadata.</p>
 */
export interface EncryptionSetting {
  /**
   * <p>The KMS key ARN used to encrypt the metadata associated with the bot
   *          recommendation.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>The password used to encrypt the recommended bot recommendation
   *          file.</p>
   */
  botLocaleExportPassword?: string;

  /**
   * <p>The password used to encrypt the associated transcript file.</p>
   */
  associatedTranscriptsPassword?: string;
}

export namespace EncryptionSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionSetting): any => ({
    ...obj,
    ...(obj.botLocaleExportPassword && { botLocaleExportPassword: SENSITIVE_STRING }),
    ...(obj.associatedTranscriptsPassword && { associatedTranscriptsPassword: SENSITIVE_STRING }),
  });
}

/**
 * <p>The object that contains a path format that will be applied when
 *          Amazon Lex reads the transcript file in the bucket you provide. Specify this
 *          object if you only want Lex to read a subset of files in your Amazon S3
 *          bucket.</p>
 */
export interface PathFormat {
  /**
   * <p>A list of Amazon S3 prefixes that points to sub-folders in the Amazon S3
   *          bucket. Specify this list if you only want Lex to read the files under
   *          this set of sub-folders.</p>
   */
  objectPrefixes?: string[];
}

export namespace PathFormat {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathFormat): any => ({
    ...obj,
  });
}

/**
 * <p>The object that contains transcript filter details that are
 *          associated with a bot recommendation.</p>
 */
export interface LexTranscriptFilter {
  /**
   * <p>The object that contains a date range filter that will be applied to
   *          the transcript. Specify this object if you want Amazon Lex to only read the
   *          files that are within the date range.</p>
   */
  dateRangeFilter?: DateRangeFilter;
}

export namespace LexTranscriptFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LexTranscriptFilter): any => ({
    ...obj,
  });
}

/**
 * <p>The object representing the filter that Amazon Lex will use to select the
 *          appropriate transcript.</p>
 */
export interface TranscriptFilter {
  /**
   * <p>The object representing the filter that Amazon Lex will use to select the
   *          appropriate transcript when the transcript format is the Amazon Lex
   *          format.</p>
   */
  lexTranscriptFilter?: LexTranscriptFilter;
}

export namespace TranscriptFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptFilter): any => ({
    ...obj,
  });
}

export enum TranscriptFormat {
  Lex = "Lex",
}

/**
 * <p>The object representing the Amazon S3 bucket containing the transcript,
 *          as well as the associated metadata.</p>
 */
export interface S3BucketTranscriptSource {
  /**
   * <p>The name of the bucket containing the transcript and the associated
   *          metadata.</p>
   */
  s3BucketName: string | undefined;

  /**
   * <p>The object that contains a path format that will be applied when
   *          Amazon Lex reads the transcript file in the bucket you provide. Specify this
   *          object if you only want Lex to read a subset of files in your Amazon S3
   *          bucket.</p>
   */
  pathFormat?: PathFormat;

  /**
   * <p>The format of the transcript content. Currently, Genie only supports
   *          the Amazon Lex transcript format.</p>
   */
  transcriptFormat: TranscriptFormat | string | undefined;

  /**
   * <p>The object that contains the filter which will be applied when Amazon Lex
   *          reads through the Amazon S3 bucket. Specify this object if you want Amazon Lex to
   *          read only a subset of the Amazon S3 bucket based on the filter you
   *          provide.</p>
   */
  transcriptFilter?: TranscriptFilter;

  /**
   * <p>The ARN of the KMS key that customer use to encrypt their Amazon S3
   *          bucket. Only use this field if your bucket is encrypted using a
   *          customer managed KMS key.</p>
   */
  kmsKeyArn?: string;
}

export namespace S3BucketTranscriptSource {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3BucketTranscriptSource): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates the setting of the location where the transcript is
 *          stored.</p>
 */
export interface TranscriptSourceSetting {
  /**
   * <p>Indicates the setting of the Amazon S3 bucket where the transcript is
   *          stored.</p>
   */
  s3BucketTranscriptSource?: S3BucketTranscriptSource;
}

export namespace TranscriptSourceSetting {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TranscriptSourceSetting): any => ({
    ...obj,
  });
}

export interface DescribeBotRecommendationResponse {
  /**
   * <p>The identifier of the bot associated with the bot
   *          recommendation.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the bot
   *          recommendation.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to describe.</p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation. If the status is Failed, then
   *          the reasons for the failure are listed in the failureReasons field.
   *       </p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The identifier of the bot recommendation being described.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>If botRecommendationStatus is Failed, Amazon Lex explains why.</p>
   */
  failureReasons?: string[];

  /**
   * <p>The date and time that the bot recommendation was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the bot recommendation was last
   *          updated.</p>
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

  /**
   * <p>The object representing the URL of the bot definition, the URL of
   *          the associated transcript and a statistical summary of the bot
   *          recommendation results.</p>
   */
  botRecommendationResults?: BotRecommendationResults;
}

export namespace DescribeBotRecommendationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotRecommendationResponse): any => ({
    ...obj,
    ...(obj.encryptionSetting && { encryptionSetting: EncryptionSetting.filterSensitiveLog(obj.encryptionSetting) }),
  });
}

export interface DescribeBotVersionRequest {
  /**
   * <p>The identifier of the bot containing the version to return metadata
   *          for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to return metadata for.</p>
   */
  botVersion: string | undefined;
}

export namespace DescribeBotVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotVersionRequest): any => ({
    ...obj,
  });
}

export interface DescribeBotVersionResponse {
  /**
   * <p>The identifier of the bot that contains the version.</p>
   */
  botId?: string;

  /**
   * <p>The name of the bot that contains the version.</p>
   */
  botName?: string;

  /**
   * <p>The version of the bot to describe.</p>
   */
  botVersion?: string;

  /**
   * <p>The description specified for the bot.</p>
   */
  description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that has permission to
   *          access the bot version.</p>
   */
  roleArn?: string;

  /**
   * <p>Data privacy settings for the bot version.</p>
   */
  dataPrivacy?: DataPrivacy;

  /**
   * <p>The number of seconds that a session with the bot remains active
   *          before it is discarded by Amazon Lex.</p>
   */
  idleSessionTTLInSeconds?: number;

  /**
   * <p>The current status of the bot. When the status is
   *             <code>Available</code>, the bot version is ready for use.</p>
   */
  botStatus?: BotStatus | string;

  /**
   * <p>If the <code>botStatus</code> is <code>Failed</code>, this contains
   *          a list of reasons that the version couldn't be built.</p>
   */
  failureReasons?: string[];

  /**
   * <p>A timestamp of the date and time that the bot version was
   *          created.</p>
   */
  creationDateTime?: Date;
}

export namespace DescribeBotVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotVersionResponse): any => ({
    ...obj,
  });
}

export interface DescribeCustomVocabularyMetadataRequest {
  /**
   * <p>The unique identifier of the bot that contains the custom vocabulary.</p>
   */
  botId: string | undefined;

  /**
   * <p>The bot version of the bot to return metadata for.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale to return the custom vocabulary information for.
   *       The locale must be <code>en_GB</code>.</p>
   */
  localeId: string | undefined;
}

export namespace DescribeCustomVocabularyMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomVocabularyMetadataRequest): any => ({
    ...obj,
  });
}

export interface DescribeCustomVocabularyMetadataResponse {
  /**
   * <p>The identifier of the bot that contains the custom vocabulary.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the custom vocabulary to describe.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale that contains the custom vocabulary to describe.</p>
   */
  localeId?: string;

  /**
   * <p>The status of the custom vocabulary. If the status is
   *       <code>Ready</code> the custom vocabulary is ready to use.</p>
   */
  customVocabularyStatus?: CustomVocabularyStatus | string;

  /**
   * <p>The date and time that the custom vocabulary was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the custom vocabulary was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DescribeCustomVocabularyMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeCustomVocabularyMetadataResponse): any => ({
    ...obj,
  });
}

export interface DescribeExportRequest {
  /**
   * <p>The unique identifier of the export to describe.</p>
   */
  exportId: string | undefined;
}

export namespace DescribeExportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportRequest): any => ({
    ...obj,
  });
}

export interface DescribeExportResponse {
  /**
   * <p>The unique identifier of the described export.</p>
   */
  exportId?: string;

  /**
   * <p>The bot, bot ID, and optional locale ID of the exported bot or bot
   *          locale.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used in the files that describe the resource.
   *       </p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Complete</code>
   *          the export archive file is available for download.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>If the <code>exportStatus</code> is failed, contains one or more
   *          reasons why the export could not be completed.</p>
   */
  failureReasons?: string[];

  /**
   * <p>A pre-signed S3 URL that points to the bot or bot locale archive.
   *          The URL is only available for 5 minutes after calling the
   *             <code>DescribeExport</code> operation.</p>
   */
  downloadUrl?: string;

  /**
   * <p>The date and time that the export was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The last date and time that the export was updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DescribeExportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeExportResponse): any => ({
    ...obj,
  });
}

export interface DescribeImportRequest {
  /**
   * <p>The unique identifier of the import to describe.</p>
   */
  importId: string | undefined;
}

export namespace DescribeImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportRequest): any => ({
    ...obj,
  });
}

export enum MergeStrategy {
  Append = "Append",
  FailOnConflict = "FailOnConflict",
  Overwrite = "Overwrite",
}

/**
 * <p>Provides information about the bot or bot locale that you want to
 *          import. You can specify the <code>botImportSpecification</code> or the
 *             <code>botLocaleImportSpecification</code>, but not both.</p>
 */
export interface ImportResourceSpecification {
  /**
   * <p>Parameters for importing a bot.</p>
   */
  botImportSpecification?: BotImportSpecification;

  /**
   * <p>Parameters for importing a bot locale.</p>
   */
  botLocaleImportSpecification?: BotLocaleImportSpecification;

  /**
   * <p>Provides the parameters required for importing a custom vocabulary.</p>
   */
  customVocabularyImportSpecification?: CustomVocabularyImportSpecification;
}

export namespace ImportResourceSpecification {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportResourceSpecification): any => ({
    ...obj,
  });
}

export interface DescribeImportResponse {
  /**
   * <p>The unique identifier of the described import.</p>
   */
  importId?: string;

  /**
   * <p>The specifications of the imported bot, bot locale, or custom
   *          vocabulary.</p>
   */
  resourceSpecification?: ImportResourceSpecification;

  /**
   * <p>The unique identifier that Amazon Lex assigned to the resource created by
   *          the import.</p>
   */
  importedResourceId?: string;

  /**
   * <p>The name of the imported resource.</p>
   */
  importedResourceName?: string;

  /**
   * <p>The strategy used when there was a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The status of the import process. When the status is
   *             <code>Completed</code> the resource is imported and ready for
   *          use.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>If the <code>importStatus</code> field is <code>Failed</code>, this
   *          provides one or more reasons for the failure.</p>
   */
  failureReasons?: string[];

  /**
   * <p>The date and time that the import was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the import was last updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace DescribeImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeImportResponse): any => ({
    ...obj,
  });
}

export interface DescribeIntentRequest {
  /**
   * <p>The identifier of the intent to describe.</p>
   */
  intentId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the intent to describe.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

export namespace DescribeIntentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIntentRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Sets the priority that Amazon Lex should use when eliciting slot values
 *          from a user.</p>
 */
export interface SlotPriority {
  /**
   * <p>The priority that a slot should be elicited.</p>
   */
  priority: number | undefined;

  /**
   * <p>The unique identifier of the slot.</p>
   */
  slotId: string | undefined;
}

export namespace SlotPriority {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotPriority): any => ({
    ...obj,
  });
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
}

export namespace DescribeIntentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeIntentResponse): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;
}

export namespace DescribeResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DescribeResourcePolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn?: string;

  /**
   * <p>The JSON structure that contains the resource policy. For more
   *          information about the contents of a JSON policy document, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies.html"> IAM JSON policy
   *             reference </a>.</p>
   */
  policy?: string;

  /**
   * <p>The current revision of the resource policy. Use the revision ID to
   *          make sure that you are updating the most current version of a resource
   *          policy when you add a policy statement to a resource, delete a
   *          resource, or update a resource.</p>
   */
  revisionId?: string;
}

export namespace DescribeResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DescribeSlotRequest {
  /**
   * <p>The unique identifier for the slot.</p>
   */
  slotId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slot to describe.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;
}

export namespace DescribeSlotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSlotRequest): any => ({
    ...obj,
  });
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
}

export namespace DescribeSlotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSlotResponse): any => ({
    ...obj,
  });
}

export interface DescribeSlotTypeRequest {
  /**
   * <p>The identifier of the slot type.</p>
   */
  slotTypeId: string | undefined;

  /**
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slot type to
   *          describe. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;
}

export namespace DescribeSlotTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSlotTypeRequest): any => ({
    ...obj,
  });
}

export interface DescribeSlotTypeResponse {
  /**
   * <p>The unique identifier for the slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The name specified for the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The description specified for the slot type.</p>
   */
  description?: string;

  /**
   * <p>The values that the slot type can take. Includes any synonyms for
   *          the slot type values.</p>
   */
  slotTypeValues?: SlotTypeValue[];

  /**
   * <p>The strategy that Amazon Lex uses to choose a value from a list of
   *          possible values.</p>
   */
  valueSelectionSetting?: SlotValueSelectionSetting;

  /**
   * <p>The built in slot type used as a parent to this slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>The identifier of the bot associated with the slot type.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot associated with the slot type.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale specified for the slot type.</p>
   */
  localeId?: string;

  /**
   * <p>A timestamp of the date and time that the slot type was
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
}

export namespace DescribeSlotTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeSlotTypeResponse): any => ({
    ...obj,
  });
}

export enum ExportFilterName {
  ExportResourceType = "ExportResourceType",
}

export enum ExportFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the response form the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListExports.html">ListExports</a> operation</p>
 */
export interface ExportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ExportFilterName | string | undefined;

  /**
   * <p>The values to use to filter the response. The values must be
   *             <code>Bot</code>, <code>BotLocale</code>, or
   *             <code>CustomVocabulary</code>.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify EQ when the
   *             <code>ListExports</code> operation should return only resource types
   *          that equal the specified value. Specify CO when the
   *             <code>ListExports</code> operation should return resource types that
   *          contain the specified value.</p>
   */
  operator: ExportFilterOperator | string | undefined;
}

export namespace ExportFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportFilter): any => ({
    ...obj,
  });
}

export enum ExportSortAttribute {
  LastUpdatedDateTime = "LastUpdatedDateTime",
}

/**
 * <p>Provides information about sorting a list of exports.</p>
 */
export interface ExportSortBy {
  /**
   * <p>The export field to use for sorting.</p>
   */
  attribute: ExportSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace ExportSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about an export in an export list.
 *       </p>
 */
export interface ExportSummary {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the export.</p>
   */
  exportId?: string;

  /**
   * <p>Information about the bot or bot locale that was exported.</p>
   */
  resourceSpecification?: ExportResourceSpecification;

  /**
   * <p>The file format used in the export files.</p>
   */
  fileFormat?: ImportExportFileFormat | string;

  /**
   * <p>The status of the export. When the status is <code>Completed</code>
   *          the export is ready to download.</p>
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

export namespace ExportSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportSummary): any => ({
    ...obj,
  });
}

export enum ImportFilterName {
  ImportResourceType = "ImportResourceType",
}

export enum ImportFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the response from the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_ListImports.html">ListImports</a> operation.</p>
 */
export interface ImportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ImportFilterName | string | undefined;

  /**
   * <p>The values to use to filter the response. The values must be
   *             <code>Bot</code>, <code>BotLocale</code>, or
   *             <code>CustomVocabulary</code>.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify EQ when the
   *             <code>ListImports</code> operation should return only resource types
   *          that equal the specified value. Specify CO when the
   *             <code>ListImports</code> operation should return resource types that
   *          contain the specified value.</p>
   */
  operator: ImportFilterOperator | string | undefined;
}

export namespace ImportFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportFilter): any => ({
    ...obj,
  });
}

export enum ImportResourceType {
  Bot = "Bot",
  BotLocale = "BotLocale",
  CustomVocabulary = "CustomVocabulary",
}

export enum ImportSortAttribute {
  LastUpdatedDateTime = "LastUpdatedDateTime",
}

/**
 * <p>Provides information for sorting a list of imports.</p>
 */
export interface ImportSortBy {
  /**
   * <p>The export field to use for sorting.</p>
   */
  attribute: ImportSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace ImportSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Provides summary information about an import in an import
 *          list.</p>
 */
export interface ImportSummary {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the import.</p>
   */
  importId?: string;

  /**
   * <p>The unique identifier that Amazon Lex assigned to the imported
   *          resource.</p>
   */
  importedResourceId?: string;

  /**
   * <p>The name that you gave the imported resource.</p>
   */
  importedResourceName?: string;

  /**
   * <p>The status of the resource. When the status is
   *             <code>Completed</code> the resource is ready to build.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>The strategy used to merge existing bot or bot locale definitions
   *          with the imported definition.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The date and time that the import was created.</p>
   */
  creationDateTime?: Date;

  /**
   * <p>The date and time that the import was last updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>The type of resource that was imported.</p>
   */
  importedResourceType?: ImportResourceType | string;
}

export namespace ImportSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportSummary): any => ({
    ...obj,
  });
}

export enum IntentFilterName {
  IntentName = "IntentName",
}

export enum IntentFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the response from the <code>ListIntents</code>
 *          operation.</p>
 */
export interface IntentFilter {
  /**
   * <p>The name of the field to use for the filter.</p>
   */
  name: IntentFilterName | string | undefined;

  /**
   * <p>The value to use for the filter.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListIntents</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *             <code>ListIntents</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: IntentFilterOperator | string | undefined;
}

export namespace IntentFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentFilter): any => ({
    ...obj,
  });
}

export enum IntentSortAttribute {
  IntentName = "IntentName",
  LastUpdatedDateTime = "LastUpdatedDateTime",
}

/**
 * <p>Specifies attributes for sorting a list of intents.</p>
 */
export interface IntentSortBy {
  /**
   * <p>The attribute to use to sort the list of intents.</p>
   */
  attribute: IntentSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace IntentSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentSortBy): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about an intent returned by the
 *             <code>ListIntents</code> operation.</p>
 */
export interface IntentSummary {
  /**
   * <p>The unique identifier assigned to the intent. Use this ID to get
   *          detailed information about the intent with the
   *             <code>DescribeIntent</code> operation.</p>
   */
  intentId?: string;

  /**
   * <p>The name of the intent.</p>
   */
  intentName?: string;

  /**
   * <p>The description of the intent.</p>
   */
  description?: string;

  /**
   * <p>If this intent is derived from a built-in intent, the name of the
   *          parent intent.</p>
   */
  parentIntentSignature?: string;

  /**
   * <p>The input contexts that must be active for this intent to be
   *          considered for recognition.</p>
   */
  inputContexts?: InputContext[];

  /**
   * <p>The output contexts that are activated when this intent is
   *          fulfilled.</p>
   */
  outputContexts?: OutputContext[];

  /**
   * <p>The timestamp of the date and time that the intent was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace IntentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: IntentSummary): any => ({
    ...obj,
  });
}

export enum TimeDimension {
  Days = "Days",
  Hours = "Hours",
  Weeks = "Weeks",
}

/**
 * <p>Specifies the time window that utterance statistics are returned
 *          for. The time window is always relative to the last time that the that
 *          utterances were aggregated. For example, if the
 *             <code>ListAggregatedUtterances</code> operation is called at 1600,
 *          the time window is set to 1 hour, and the last refresh time was 1530,
 *          only utterances made between 1430 and 1530 are returned.</p>
 *          <p>You can choose the time window that statistics should be returned
 *          for.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Hours</b> - You can request
 *                utterance statistics for 1, 3, 6, 12, or 24 hour time windows.
 *                Statistics are refreshed every half hour for 1 hour time windows,
 *                and hourly for the other time windows.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Days</b> - You can request
 *                utterance statistics for 3 days. Statistics are refreshed every 6
 *                hours.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Weeks</b> - You can see
 *                statistics for one or two weeks. Statistics are refreshed every
 *                12 hours for one week time windows, and once per day for two week
 *                time windows.</p>
 *             </li>
 *          </ul>
 */
export interface RelativeAggregationDuration {
  /**
   * <p>The type of time period that the <code>timeValue</code> field
   *          represents. </p>
   */
  timeDimension: TimeDimension | string | undefined;

  /**
   * <p>The period of the time window to gather statistics for. The valid
   *          value depends on the setting of the <code>timeDimension</code>
   *          field.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Hours</code> - 1/3/6/12/24</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Days</code> - 3</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Weeks</code> - 1/2</p>
   *             </li>
   *          </ul>
   */
  timeValue: number | undefined;
}

export namespace RelativeAggregationDuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RelativeAggregationDuration): any => ({
    ...obj,
  });
}

/**
 * <p>Provides parameters for setting the time window and duration for
 *          aggregating utterance data.</p>
 */
export interface UtteranceAggregationDuration {
  /**
   * <p>The desired time window for aggregating utterances. </p>
   */
  relativeAggregationDuration: RelativeAggregationDuration | undefined;
}

export namespace UtteranceAggregationDuration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UtteranceAggregationDuration): any => ({
    ...obj,
  });
}

export interface ListAggregatedUtterancesRequest {
  /**
   * <p>The unique identifier of the bot associated with this
   *          request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The identifier of the bot alias associated with this request. If you
   *          specify the bot alias, you can't specify the bot version.</p>
   */
  botAliasId?: string;

  /**
   * <p>The identifier of the bot version associated with this request. If
   *          you specify the bot version, you can't specify the bot alias.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale where the utterances were
   *          collected. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported
   *          languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The time window for aggregating the utterance information. You can
   *          specify a time between one hour and two weeks.</p>
   */
  aggregationDuration: UtteranceAggregationDuration | undefined;

  /**
   * <p>Specifies sorting parameters for the list of utterances. You can
   *          sort by the hit count, the missed count, or the number of distinct
   *          sessions the utterance appeared in.</p>
   */
  sortBy?: AggregatedUtterancesSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the utterances
   *          in the response to only those that match the filter specification. You
   *          can only specify one filter and one string to filter on.</p>
   */
  filters?: AggregatedUtterancesFilter[];

  /**
   * <p>The maximum number of utterances to return in each page of results.
   *          If there are fewer results than the maximum page size, only the actual
   *          number of results are returned. If you don't specify the
   *             <code>maxResults</code> parameter, 1,000 results are
   *          returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListAggregatedUtterances</code>
   *          operation contains more results that specified in the
   *             <code>maxResults</code> parameter, a token is returned in the
   *          response. Use that token in the <code>nextToken</code> parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListAggregatedUtterancesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAggregatedUtterancesRequest): any => ({
    ...obj,
  });
}

export interface ListAggregatedUtterancesResponse {
  /**
   * <p>The identifier of the bot that contains the utterances.</p>
   */
  botId?: string;

  /**
   * <p>The identifier of the bot alias that contains the utterances. If you
   *          specified the bot version, the bot alias ID isn't returned.</p>
   */
  botAliasId?: string;

  /**
   * <p>The identifier of the bot version that contains the utterances. If
   *          you specified the bot alias, the bot version isn't returned.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale that the utterances are
   *          in.</p>
   */
  localeId?: string;

  /**
   * <p>The time period used to aggregate the utterance data.</p>
   */
  aggregationDuration?: UtteranceAggregationDuration;

  /**
   * <p>The date and time that the aggregation window begins. Only data
   *          collected after this time is returned in the results.</p>
   */
  aggregationWindowStartTime?: Date;

  /**
   * <p>The date and time that the aggregation window ends. Only data
   *          collected between the start time and the end time are returned in the
   *          results. </p>
   */
  aggregationWindowEndTime?: Date;

  /**
   * <p>The last date and time that the aggregated data was collected. The
   *          time period depends on the length of the aggregation window.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <b>Hours</b> - for 1 hour time
   *                window, every half hour; otherwise every hour.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Days</b> - every 6 hours</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <b>Weeks</b> - for a one week time
   *                window, every 12 hours; otherwise, every day</p>
   *             </li>
   *          </ul>
   */
  aggregationLastRefreshedDateTime?: Date;

  /**
   * <p>Summaries of the aggregated utterance data. Each response contains
   *          information about the number of times that the utterance was seen
   *          during the time period, whether it was detected or missed, and when it
   *          was seen during the time period.</p>
   */
  aggregatedUtterancesSummaries?: AggregatedUtterancesSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListAggregatedUtterances</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a
   *             <code>ListAggregatedUtterances</code> operation request to get the
   *          next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListAggregatedUtterancesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListAggregatedUtterancesResponse): any => ({
    ...obj,
  });
}

export interface ListBotAliasesRequest {
  /**
   * <p>The identifier of the bot to list aliases for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The maximum number of aliases to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBotAliases</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListBotAliasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotAliasesRequest): any => ({
    ...obj,
  });
}

export interface ListBotAliasesResponse {
  /**
   * <p>Summary information for the bot aliases that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more aliases available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  botAliasSummaries?: BotAliasSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotAliases</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The identifier of the bot associated with the aliases.</p>
   */
  botId?: string;
}

export namespace ListBotAliasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotAliasesResponse): any => ({
    ...obj,
  });
}

export interface ListBotLocalesRequest {
  /**
   * <p>The identifier of the bot to list locales for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to list locales for.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of locales. You can sort
   *          by locale name in ascending or descending order.</p>
   */
  sortBy?: BotLocaleSortBy;

  /**
   * <p>Provides the specification for a filter used to limit the response
   *          to only those locales that match the filter specification. You can only
   *          specify one filter and one value to filter on.</p>
   */
  filters?: BotLocaleFilter[];

  /**
   * <p>The maximum number of aliases to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBotLocales</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token as the
   *             <code>nextToken</code> parameter to return the next page of results.
   *       </p>
   */
  nextToken?: string;
}

export namespace ListBotLocalesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotLocalesRequest): any => ({
    ...obj,
  });
}

export interface ListBotLocalesResponse {
  /**
   * <p>The identifier of the bot to list locales for.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot.</p>
   */
  botVersion?: string;

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotLocales</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotLocales</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Summary information for the locales that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          locales available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  botLocaleSummaries?: BotLocaleSummary[];
}

export namespace ListBotLocalesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotLocalesResponse): any => ({
    ...obj,
  });
}

export interface ListBotRecommendationsRequest {
  /**
   * <p>The unique identifier of the bot that contains the bot
   *          recommendation list.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the bot recommendation
   *          list.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          list.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the ListBotRecommendation operation contains
   *          more results than specified in the maxResults parameter, a token is
   *          returned in the response. Use that token in the nextToken parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListBotRecommendationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotRecommendationsRequest): any => ({
    ...obj,
  });
}

export interface ListBotRecommendationsResponse {
  /**
   * <p>The unique identifier of the bot that contains the bot
   *          recommendation list.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the bot recommendation
   *          list.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the bot recommendations that meet the filter
   *          specified in this request. The length of the list is specified in the
   *          maxResults parameter of the request. If there are more bot
   *          recommendations available, the nextToken field contains a token to get
   *          the next page of results.</p>
   */
  botRecommendationSummaries?: BotRecommendationSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the ListBotRecommendations operation. If the nextToken
   *          field is present, you send the contents as the nextToken parameter of a
   *          ListBotRecommendations operation request to get the next page of
   *          results. </p>
   */
  nextToken?: string;
}

export namespace ListBotRecommendationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotRecommendationsResponse): any => ({
    ...obj,
  });
}

export interface ListBotsRequest {
  /**
   * <p>Specifies sorting parameters for the list of bots. You can specify
   *          that the list be sorted by bot name in ascending or descending
   *          order.</p>
   */
  sortBy?: BotSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the bots in the
   *          response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: BotFilter[];

  /**
   * <p>The maximum number of bots to return in each page of results. If
   *          there are fewer results than the maximum page size, only the actual
   *          number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBots</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. </p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListBots</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListBots</code> operation
   *          until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;
}

export namespace ListBotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsRequest): any => ({
    ...obj,
  });
}

export interface ListBotsResponse {
  /**
   * <p>Summary information for the bots that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          bots available, the <code>nextToken</code> field contains a token to
   *          the next page of results.</p>
   */
  botSummaries?: BotSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBots</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBots</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListBotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotsResponse): any => ({
    ...obj,
  });
}

export interface ListBotVersionsRequest {
  /**
   * <p>The identifier of the bot to list versions for.</p>
   */
  botId: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of versions. You can
   *          specify that the list be sorted by version name in either ascending or
   *          descending order.</p>
   */
  sortBy?: BotVersionSortBy;

  /**
   * <p>The maximum number of versions to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response to the <code>ListBotVersion</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListBotVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListBotVersionsResponse {
  /**
   * <p>The identifier of the bot to list versions for.</p>
   */
  botId?: string;

  /**
   * <p>Summary information for the bot versions that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more versions available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  botVersionSummaries?: BotVersionSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBotVersions</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListBotVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBotVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListBuiltInIntentsRequest {
  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Specifies sorting parameters for the list of built-in intents. You
   *          can specify that the list be sorted by the built-in intent signature in
   *          either ascending or descending order.</p>
   */
  sortBy?: BuiltInIntentSortBy;

  /**
   * <p>The maximum number of built-in intents to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBuiltInIntents</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListBuiltInIntentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBuiltInIntentsRequest): any => ({
    ...obj,
  });
}

export interface ListBuiltInIntentsResponse {
  /**
   * <p>Summary information for the built-in intents that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more intents available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  builtInIntentSummaries?: BuiltInIntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBuiltInIntents</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListBotAliases</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The language and locale of the intents in the list.</p>
   */
  localeId?: string;
}

export namespace ListBuiltInIntentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBuiltInIntentsResponse): any => ({
    ...obj,
  });
}

export interface ListBuiltInSlotTypesRequest {
  /**
   * <p>The identifier of the language and locale of the slot types to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListBuiltInSlotTypes</code> operation. You can choose to sort
   *          by the slot type signature in either ascending or descending
   *          order.</p>
   */
  sortBy?: BuiltInSlotTypeSortBy;

  /**
   * <p>The maximum number of built-in slot types to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListBuiltInSlotTypes</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListBuiltInSlotTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBuiltInSlotTypesRequest): any => ({
    ...obj,
  });
}

export interface ListBuiltInSlotTypesResponse {
  /**
   * <p>Summary information for the built-in slot types that meet the filter
   *          criteria specified in the request. The length of the list is specified
   *          in the <code>maxResults</code> parameter of the request. If there are
   *          more slot types available, the <code>nextToken</code> field contains a
   *          token to get the next page of results.</p>
   */
  builtInSlotTypeSummaries?: BuiltInSlotTypeSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListBuiltInSlotTypes</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a
   *             <code>LIstBuiltInSlotTypes</code> operation request to get the next
   *          page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The language and locale of the slot types in the list.</p>
   */
  localeId?: string;
}

export namespace ListBuiltInSlotTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBuiltInSlotTypesResponse): any => ({
    ...obj,
  });
}

export interface ListExportsRequest {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot to list exports for. </p>
   */
  botVersion?: string;

  /**
   * <p>Determines the field that the list of exports is sorted by. You can
   *          sort by the <code>LastUpdatedDateTime</code> field in ascending or
   *          descending order.</p>
   */
  sortBy?: ExportSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the exports in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: ExportFilter[];

  /**
   * <p>The maximum number of exports to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListExports</code> operation contains
   *          more results that specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. </p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListExports</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListExports</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the resources that should be exported. If you
   *       don't specify a resource type in the <code>filters</code> parameter,
   *       both bot locales and custom vocabularies are exported.</p>
   */
  localeId?: string;
}

export namespace ListExportsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsRequest): any => ({
    ...obj,
  });
}

export interface ListExportsResponse {
  /**
   * <p>The unique identifier assigned to the bot by Amazon Lex.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that was exported.</p>
   */
  botVersion?: string;

  /**
   * <p>Summary information for the exports that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter. If there are more exports
   *          available, the <code>nextToken</code> field contains a token to get the
   *          next page of results.</p>
   */
  exportSummaries?: ExportSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListExports</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListExports</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The locale specified in the request.</p>
   */
  localeId?: string;
}

export namespace ListExportsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListExportsResponse): any => ({
    ...obj,
  });
}

export interface ListImportsRequest {
  /**
   * <p>The unique identifier that Amazon Lex assigned to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot to list imports for.</p>
   */
  botVersion?: string;

  /**
   * <p>Determines the field that the list of imports is sorted by. You can
   *          sort by the <code>LastUpdatedDateTime</code> field in ascending or
   *          descending order.</p>
   */
  sortBy?: ImportSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the bots in the
   *          response to only those that match the filter specification. You can
   *          only specify one filter and one string to filter on.</p>
   */
  filters?: ImportFilter[];

  /**
   * <p>The maximum number of imports to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListImports</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response.</p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListImports</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListImports</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;

  /**
   * <p>Specifies the locale that should be present in the list. If you
   *          don't specify a resource type in the <code>filters</code> parameter,
   *          the list contains both bot locales and custom vocabularies.</p>
   */
  localeId?: string;
}

export namespace ListImportsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImportsRequest): any => ({
    ...obj,
  });
}

export interface ListImportsResponse {
  /**
   * <p>The unique identifier assigned by Amazon Lex to the bot.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that was imported. It will always be
   *             <code>DRAFT</code>.</p>
   */
  botVersion?: string;

  /**
   * <p>Summary information for the imports that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter. If there are more imports
   *          available, the <code>nextToken</code> field contains a token to get the
   *          next page of results.</p>
   */
  importSummaries?: ImportSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListImports</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListImports</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The locale specified in the request.</p>
   */
  localeId?: string;
}

export namespace ListImportsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListImportsResponse): any => ({
    ...obj,
  });
}

export interface ListIntentsRequest {
  /**
   * <p>The unique identifier of the bot that contains the intent.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListIntents</code> operation. You can choose to sort by the
   *          intent name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: IntentSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the intents in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and only one string to filter on.</p>
   */
  filters?: IntentFilter[];

  /**
   * <p>The maximum number of intents to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListIntents</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response.</p>
   *          <p>Use the returned token in the <code>nextToken</code> parameter of a
   *             <code>ListIntents</code> request to return the next page of results.
   *          For a complete set of results, call the <code>ListIntents</code>
   *          operation until the <code>nextToken</code> returned in the response is
   *          null.</p>
   */
  nextToken?: string;
}

export namespace ListIntentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntentsRequest): any => ({
    ...obj,
  });
}

export interface ListIntentsResponse {
  /**
   * <p>The identifier of the bot that contains the intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the intents in the list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the intents that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          intents available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  intentSummaries?: IntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListIntents</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListIntents</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListIntentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListIntentsResponse): any => ({
    ...obj,
  });
}

export interface ListRecommendedIntentsRequest {
  /**
   * <p>The unique identifier of the bot associated with the recommended
   *          intents.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the recommended intents.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the recommended
   *          intents.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The identifier of the bot recommendation that contains the
   *          recommended intents.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>If the response from the ListRecommendedIntents operation contains
   *          more results than specified in the maxResults parameter, a token is
   *          returned in the response. Use that token in the nextToken parameter to
   *          return the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;
}

export namespace ListRecommendedIntentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecommendedIntentsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains a summary of a recommended intent.</p>
 */
export interface RecommendedIntentSummary {
  /**
   * <p>The unique identifier of a recommended intent associated with the
   *          bot recommendation.</p>
   */
  intentId?: string;

  /**
   * <p>The name of a recommended intent associated with the bot
   *          recommendation.</p>
   */
  intentName?: string;

  /**
   * <p>The count of sample utterances of a recommended intent that is
   *          associated with a bot recommendation.</p>
   */
  sampleUtterancesCount?: number;
}

export namespace RecommendedIntentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecommendedIntentSummary): any => ({
    ...obj,
  });
}

export interface ListRecommendedIntentsResponse {
  /**
   * <p>The unique identifier of the bot associated with the recommended
   *          intent.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the intent.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the intents to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the bot recommendation that contains the
   *          recommended intent.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>Summary information for the intents that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *          maxResults parameter of the request. If there are more intents
   *          available, the nextToken field contains a token to get the next page of
   *          results.</p>
   */
  summaryList?: RecommendedIntentSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the ListRecommendedIntents operation. If the nextToken
   *          field is present, you send the contents as the nextToken parameter of a
   *          ListRecommendedIntents operation request to get the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListRecommendedIntentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecommendedIntentsResponse): any => ({
    ...obj,
  });
}

export enum SlotFilterName {
  SlotName = "SlotName",
}

export enum SlotFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the response from the <code>ListSlots</code>
 *          operation.</p>
 */
export interface SlotFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: SlotFilterName | string | undefined;

  /**
   * <p>The value to use to filter the response.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListSlots</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *             <code>ListSlots</code> operation should return aliases that contain
   *          the specified value.</p>
   */
  operator: SlotFilterOperator | string | undefined;
}

export namespace SlotFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotFilter): any => ({
    ...obj,
  });
}

export enum SlotSortAttribute {
  LastUpdatedDateTime = "LastUpdatedDateTime",
  SlotName = "SlotName",
}

/**
 * <p>Specifies attributes for sorting a list of bots.</p>
 */
export interface SlotSortBy {
  /**
   * <p>The attribute to use to sort the list.</p>
   */
  attribute: SlotSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can choose ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace SlotSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotSortBy): any => ({
    ...obj,
  });
}

export interface ListSlotsRequest {
  /**
   * <p>The identifier of the bot that contains the slot.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slots to list. The
   *          string must match one of the supported locales. For more information,
   *          see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the intent that contains the slot.</p>
   */
  intentId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListSlots</code> operation. You can choose to sort by the slot
   *          name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: SlotSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the slots in
   *          the response to only those that match the filter specification. You can
   *          only specify one filter and only one string to filter on.</p>
   */
  filters?: SlotFilter[];

  /**
   * <p>The maximum number of slots to return in each page of results. If
   *          there are fewer results than the max page size, only the actual number
   *          of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListSlots</code> operation contains
   *          more results than specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListSlotsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSlotsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Summary information about a slot, a value that the bot elicits from
 *          the user.</p>
 */
export interface SlotSummary {
  /**
   * <p>The unique identifier of the slot.</p>
   */
  slotId?: string;

  /**
   * <p>The name given to the slot.</p>
   */
  slotName?: string;

  /**
   * <p>The description of the slot.</p>
   */
  description?: string;

  /**
   * <p>Whether the slot is required or optional. An intent is complete when
   *          all required slots are filled.</p>
   */
  slotConstraint?: SlotConstraint | string;

  /**
   * <p>The unique identifier for the slot type that defines the values for
   *          the slot.</p>
   */
  slotTypeId?: string;

  /**
   * <p>Prompts that are sent to the user to elicit a value for the
   *          slot.</p>
   */
  valueElicitationPromptSpecification?: PromptSpecification;

  /**
   * <p>The timestamp of the last date and time that the slot was
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;
}

export namespace SlotSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotSummary): any => ({
    ...obj,
  });
}

export interface ListSlotsResponse {
  /**
   * <p>The identifier of the bot that contains the slots.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slots.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and locale of the slots in the list.</p>
   */
  localeId?: string;

  /**
   * <p>The identifier of the intent that contains the slots.</p>
   */
  intentId?: string;

  /**
   * <p>Summary information for the slots that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          slots available, the <code>nextToken</code> field contains a token to
   *          get the next page of results.</p>
   */
  slotSummaries?: SlotSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListSlots</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListSlots</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListSlotsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSlotsResponse): any => ({
    ...obj,
  });
}

export enum SlotTypeFilterName {
  ExternalSourceType = "ExternalSourceType",
  SlotTypeName = "SlotTypeName",
}

export enum SlotTypeFilterOperator {
  Contains = "CO",
  Equals = "EQ",
}

/**
 * <p>Filters the response from the <code>ListSlotTypes</code>
 *          operation.</p>
 */
export interface SlotTypeFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: SlotTypeFilterName | string | undefined;

  /**
   * <p>The value to use to filter the response.</p>
   */
  values: string[] | undefined;

  /**
   * <p>The operator to use for the filter. Specify <code>EQ</code> when the
   *             <code>ListSlotTypes</code> operation should return only aliases that
   *          equal the specified value. Specify <code>CO</code> when the
   *             <code>ListSlotTypes</code> operation should return aliases that
   *          contain the specified value.</p>
   */
  operator: SlotTypeFilterOperator | string | undefined;
}

export namespace SlotTypeFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotTypeFilter): any => ({
    ...obj,
  });
}

export enum SlotTypeSortAttribute {
  LastUpdatedDateTime = "LastUpdatedDateTime",
  SlotTypeName = "SlotTypeName",
}

/**
 * <p>Specifies attributes for sorting a list of slot types.</p>
 */
export interface SlotTypeSortBy {
  /**
   * <p>The attribute to use to sort the list of slot types.</p>
   */
  attribute: SlotTypeSortAttribute | string | undefined;

  /**
   * <p>The order to sort the list. You can say ascending or
   *          descending.</p>
   */
  order: SortOrder | string | undefined;
}

export namespace SlotTypeSortBy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotTypeSortBy): any => ({
    ...obj,
  });
}

export interface ListSlotTypesRequest {
  /**
   * <p>The unique identifier of the bot that contains the slot
   *          types.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot that contains the slot type.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the slot types to list.
   *          The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>.</p>
   */
  localeId: string | undefined;

  /**
   * <p>Determines the sort order for the response from the
   *             <code>ListSlotTypes</code> operation. You can choose to sort by the
   *          slot type name or last updated date in either ascending or descending
   *          order.</p>
   */
  sortBy?: SlotTypeSortBy;

  /**
   * <p>Provides the specification of a filter used to limit the slot types
   *          in the response to only those that match the filter specification. You
   *          can only specify one filter and only one string to filter on.</p>
   */
  filters?: SlotTypeFilter[];

  /**
   * <p>The maximum number of slot types to return in each page of results.
   *          If there are fewer results than the max page size, only the actual
   *          number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the <code>ListSlotTypes</code> operation
   *          contains more results than specified in the <code>maxResults</code>
   *          parameter, a token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
}

export namespace ListSlotTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSlotTypesRequest): any => ({
    ...obj,
  });
}

export enum SlotTypeCategory {
  Custom = "Custom",
  Extended = "Extended",
  ExternalGrammar = "ExternalGrammar",
}

/**
 * <p>Provides summary information about a slot type.</p>
 */
export interface SlotTypeSummary {
  /**
   * <p>The unique identifier assigned to the slot type.</p>
   */
  slotTypeId?: string;

  /**
   * <p>The name of the slot type.</p>
   */
  slotTypeName?: string;

  /**
   * <p>The description of the slot type.</p>
   */
  description?: string;

  /**
   * <p>If the slot type is derived from a built-on slot type, the name of
   *          the parent slot type.</p>
   */
  parentSlotTypeSignature?: string;

  /**
   * <p>A timestamp of the date and time that the slot type was last
   *          updated.</p>
   */
  lastUpdatedDateTime?: Date;

  /**
   * <p>Indicates the type of the slot type.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Custom</code> - A slot type that you created using
   *                custom values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/custom-slot-types.html">Creating custom slot
   *                types</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Extended</code> - A slot type created by extending the
   *                AMAZON.AlphaNumeric built-in slot type. For more information, see
   *                   <a href="https://docs.aws.amazon.com/lexv2/latest/dg/built-in-slot-alphanumerice.html">AMAZON.AlphaNumeric</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ExternalGrammar</code> - A slot type using a custom
   *                GRXML grammar to define values. For more information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/building-grxml.html">Using a custom grammar slot type</a>.</p>
   *             </li>
   *          </ul>
   */
  slotTypeCategory?: SlotTypeCategory | string;
}

export namespace SlotTypeSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SlotTypeSummary): any => ({
    ...obj,
  });
}

export interface ListSlotTypesResponse {
  /**
   * <p>The identifier of the bot that contains the slot types.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot that contains the slot types.</p>
   */
  botVersion?: string;

  /**
   * <p>The language and local of the slot types in the list.</p>
   */
  localeId?: string;

  /**
   * <p>Summary information for the slot types that meet the filter criteria
   *          specified in the request. The length of the list is specified in the
   *             <code>maxResults</code> parameter of the request. If there are more
   *          slot types available, the <code>nextToken</code> field contains a token
   *          to get the next page of results.</p>
   */
  slotTypeSummaries?: SlotTypeSummary[];

  /**
   * <p>A token that indicates whether there are more results to return in a
   *          response to the <code>ListSlotTypes</code> operation. If the
   *             <code>nextToken</code> field is present, you send the contents as
   *          the <code>nextToken</code> parameter of a <code>ListSlotTypes</code>
   *          operation request to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListSlotTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSlotTypesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get a list of tags
   *          for.</p>
   */
  resourceARN: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

export enum SearchOrder {
  Ascending = "Ascending",
  Descending = "Descending",
}

export interface SearchAssociatedTranscriptsRequest {
  /**
   * <p>The unique identifier of the bot associated with the transcripts
   *          that you are searching.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the transcripts that you are
   *          searching.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the transcripts to
   *          search. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation associated with the
   *          transcripts to search.</p>
   */
  botRecommendationId: string | undefined;

  /**
   * <p>How SearchResults are ordered. Valid values are Ascending or
   *          Descending. The default is Descending.</p>
   */
  searchOrder?: SearchOrder | string;

  /**
   * <p>A list of filter objects.</p>
   */
  filters: AssociatedTranscriptFilter[] | undefined;

  /**
   * <p>The maximum number of bot recommendations to return in each page of
   *          results. If there are fewer results than the max page size, only the
   *          actual number of results are returned.</p>
   */
  maxResults?: number;

  /**
   * <p>If the response from the SearchAssociatedTranscriptsRequest
   *          operation contains more results than specified in the maxResults
   *          parameter, an index is returned in the response. Use that index in the
   *          nextIndex parameter to return the next page of results.</p>
   */
  nextIndex?: number;
}

export namespace SearchAssociatedTranscriptsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAssociatedTranscriptsRequest): any => ({
    ...obj,
  });
}

export interface SearchAssociatedTranscriptsResponse {
  /**
   * <p>The unique identifier of the bot associated with the transcripts
   *          that you are searching.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the transcripts that you are
   *          searching.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the transcripts to
   *          search. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p> The unique identifier of the bot recommendation associated with the
   *          transcripts to search.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A index that indicates whether there are more results to return in a
   *          response to the SearchAssociatedTranscripts operation. If the nextIndex
   *          field is present, you send the contents as the nextIndex parameter of a
   *          SearchAssociatedTranscriptsRequest operation to get the next page of
   *          results.</p>
   */
  nextIndex?: number;

  /**
   * <p>The object that contains the associated transcript that meet the
   *          criteria you specified.</p>
   */
  associatedTranscripts?: AssociatedTranscript[];

  /**
   * <p>The total number of transcripts returned by the search.</p>
   */
  totalResults?: number;
}

export namespace SearchAssociatedTranscriptsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SearchAssociatedTranscriptsResponse): any => ({
    ...obj,
  });
}

export interface StartBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to start. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The object representing the Amazon S3 bucket containing the transcript,
   *          as well as the associated metadata.</p>
   */
  transcriptSourceSetting: TranscriptSourceSetting | undefined;

  /**
   * <p>The object representing the passwords that will be used to encrypt
   *          the data related to the bot recommendation results, as well as the KMS
   *          key ARN used to encrypt the associated metadata.</p>
   */
  encryptionSetting?: EncryptionSetting;
}

export namespace StartBotRecommendationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBotRecommendationRequest): any => ({
    ...obj,
    ...(obj.encryptionSetting && { encryptionSetting: EncryptionSetting.filterSensitiveLog(obj.encryptionSetting) }),
  });
}

export interface StartBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to start. The string must match one of the supported locales. For more
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
   * <p>The identifier of the bot recommendation that you have
   *          created.</p>
   */
  botRecommendationId?: string;

  /**
   * <p>A timestamp of the date and time that the bot recommendation was
   *          created.</p>
   */
  creationDateTime?: Date;

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

export namespace StartBotRecommendationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartBotRecommendationResponse): any => ({
    ...obj,
    ...(obj.encryptionSetting && { encryptionSetting: EncryptionSetting.filterSensitiveLog(obj.encryptionSetting) }),
  });
}

export interface StartImportRequest {
  /**
   * <p>The unique identifier for the import. It is included in the response
   *          from the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_CreateUploadUrl.html">CreateUploadUrl</a> operation.</p>
   */
  importId: string | undefined;

  /**
   * <p>Parameters for creating the bot, bot locale or custom
   *          vocabulary.</p>
   */
  resourceSpecification: ImportResourceSpecification | undefined;

  /**
   * <p>The strategy to use when there is a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy: MergeStrategy | string | undefined;

  /**
   * <p>The password used to encrypt the zip archive that contains the
   *          resource definition. You should always encrypt the zip archive to
   *          protect it during transit between your site and Amazon Lex.</p>
   */
  filePassword?: string;
}

export namespace StartImportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportRequest): any => ({
    ...obj,
    ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
  });
}

export interface StartImportResponse {
  /**
   * <p>A unique identifier for the import.</p>
   */
  importId?: string;

  /**
   * <p>The parameters used when importing the resource.</p>
   */
  resourceSpecification?: ImportResourceSpecification;

  /**
   * <p>The strategy used when there was a name conflict between the
   *          imported resource and an existing resource. When the merge strategy is
   *             <code>FailOnConflict</code> existing resources are not overwritten
   *          and the import fails.</p>
   */
  mergeStrategy?: MergeStrategy | string;

  /**
   * <p>The current status of the import. When the status is
   *             <code>Complete</code> the bot, bot alias, or custom vocabulary is
   *          ready to use.</p>
   */
  importStatus?: ImportStatus | string;

  /**
   * <p>The date and time that the import request was created.</p>
   */
  creationDateTime?: Date;
}

export namespace StartImportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartImportResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot, bot alias, or bot channel
   *          to tag.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to add to the resource. If a tag key already
   *          exists, the existing value is replaced with the new value.</p>
   */
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to remove the tags
   *          from.</p>
   */
  resourceARN: string | undefined;

  /**
   * <p>A list of tag keys to remove from the resource. If a tag key does
   *          not exist on the resource, it is ignored.</p>
   */
  tagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateBotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotResponse): any => ({
    ...obj,
  });
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
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings };

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

export namespace UpdateBotAliasRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotAliasRequest): any => ({
    ...obj,
  });
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
  botAliasLocaleSettings?: { [key: string]: BotAliasLocaleSettings };

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

export namespace UpdateBotAliasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotAliasResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBotLocaleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotLocaleRequest): any => ({
    ...obj,
  });
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

export namespace UpdateBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotLocaleResponse): any => ({
    ...obj,
  });
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

export namespace UpdateBotRecommendationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotRecommendationRequest): any => ({
    ...obj,
    ...(obj.encryptionSetting && { encryptionSetting: EncryptionSetting.filterSensitiveLog(obj.encryptionSetting) }),
  });
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

export namespace UpdateBotRecommendationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotRecommendationResponse): any => ({
    ...obj,
    ...(obj.encryptionSetting && { encryptionSetting: EncryptionSetting.filterSensitiveLog(obj.encryptionSetting) }),
  });
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

export namespace UpdateExportRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExportRequest): any => ({
    ...obj,
    ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
  });
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

export namespace UpdateExportResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateExportResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateIntentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntentRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateIntentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateIntentResponse): any => ({
    ...obj,
  });
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

export namespace UpdateResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourcePolicyRequest): any => ({
    ...obj,
  });
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

export namespace UpdateResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateResourcePolicyResponse): any => ({
    ...obj,
  });
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
  slotTypeId: string | undefined;

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
}

export namespace UpdateSlotRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSlotRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateSlotResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSlotResponse): any => ({
    ...obj,
  });
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
}

export namespace UpdateSlotTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSlotTypeRequest): any => ({
    ...obj,
  });
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
}

export namespace UpdateSlotTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSlotTypeResponse): any => ({
    ...obj,
  });
}
