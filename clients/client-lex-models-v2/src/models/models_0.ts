// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

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

/**
 * <p>Specifies the allowed input types.</p>
 */
export interface AllowedInputTypes {
  /**
   * <p>Indicates whether audio input is allowed.</p>
   */
  allowAudioInput: boolean | undefined;

  /**
   * <p>Indicates whether DTMF input is allowed.</p>
   */
  allowDTMFInput: boolean | undefined;
}

/**
 * <p>The object containing information that associates the recommended
 *          intent/slot type with a conversation.</p>
 */
export interface AssociatedTranscript {
  /**
   * <p>The content of the transcript that meets the search filter criteria.
   *          For the JSON format of the transcript, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/designing-output-format.html">Output transcript
   *             format</a>.</p>
   */
  transcript?: string;
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

/**
 * <p>Specifies the audio input specifications.</p>
 */
export interface AudioSpecification {
  /**
   * <p>Time for how long Amazon Lex waits before speech input is truncated and the speech
   *          is returned to application.</p>
   */
  maxLengthMs: number | undefined;

  /**
   * <p>Time for which a bot waits after the customer stops speaking to assume the
   *          utterance is finished.</p>
   */
  endTimeoutMs: number | undefined;
}

/**
 * <p>Specifies the DTMF input specifications.</p>
 */
export interface DTMFSpecification {
  /**
   * <p>The maximum number of DTMF digits allowed in an utterance.</p>
   */
  maxLength: number | undefined;

  /**
   * <p>How long the bot should wait after the last DTMF character input before assuming
   *          that the input has concluded.</p>
   */
  endTimeoutMs: number | undefined;

  /**
   * <p>The DTMF character that clears the accumulated DTMF digits and immediately ends
   *          the input.</p>
   */
  deletionCharacter: string | undefined;

  /**
   * <p>The DTMF character that immediately ends input. If the user does not press this
   *          character, the input ends after the end timeout.</p>
   */
  endCharacter: string | undefined;
}

/**
 * <p>Specifies the audio and DTMF input specification.</p>
 */
export interface AudioAndDTMFInputSpecification {
  /**
   * <p>Time for which a bot waits before assuming that the customer isn't going to speak or press
   *          a key. This timeout is shared between Audio and DTMF inputs.</p>
   */
  startTimeoutMs: number | undefined;

  /**
   * <p>Specifies the settings on audio input.</p>
   */
  audioSpecification?: AudioSpecification;

  /**
   * <p>Specifies the settings on DTMF input.</p>
   */
  dtmfSpecification?: DTMFSpecification;
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

/**
 * <p>The new custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface NewCustomVocabularyItem {
  /**
   * <p>The unique phrase for the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  phrase: string | undefined;

  /**
   * <p>The weight assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  weight?: number;

  /**
   * <p>The display as value assigned to the new custom vocabulary item from the custom
   *          vocabulary list.</p>
   */
  displayAs?: string;
}

export interface BatchCreateCustomVocabularyItemRequest {
  /**
   * <p>The unique identifier of the bot to batch create the custom
   *          vocabulary item for.</p>
   */
  botId: string | undefined;

  /**
   * <p>The bot version of the bot to batch create the custom
   *          vocabulary item for.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The unique locale identifier of the bot to batch create the custom
   *          vocabulary item for.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The custom vocabulary item list of the bot to batch create the custom
   *          vocabulary item for.</p>
   */
  customVocabularyItemList: NewCustomVocabularyItem[] | undefined;
}

export enum ErrorCode {
  DUPLICATE_INPUT = "DUPLICATE_INPUT",
  INTERNAL_SERVER_FAILURE = "INTERNAL_SERVER_FAILURE",
  RESOURCE_ALREADY_EXISTS = "RESOURCE_ALREADY_EXISTS",
  RESOURCE_DOES_NOT_EXIST = "RESOURCE_DOES_NOT_EXIST",
}

/**
 * <p>The unique failed custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface FailedCustomVocabularyItem {
  /**
   * <p>The unique item identifer for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  itemId?: string;

  /**
   * <p>The error message for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  errorMessage?: string;

  /**
   * <p>The unique error code for the failed custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  errorCode?: ErrorCode | string;
}

/**
 * <p>The unique custom vocabulary item from the custom
 *          vocabulary list.</p>
 */
export interface CustomVocabularyItem {
  /**
   * <p>The unique item identifer for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  itemId: string | undefined;

  /**
   * <p>The unique phrase for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  phrase: string | undefined;

  /**
   * <p>The weight assigned for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  weight?: number;

  /**
   * <p>The display as value for the custom vocabulary item
   *          from the custom vocabulary list.</p>
   */
  displayAs?: string;
}

export interface BatchCreateCustomVocabularyItemResponse {
  /**
   * <p>The unique identifier of the bot to batch create response for the custom
   *          vocabulary item.</p>
   */
  botId?: string;

  /**
   * <p>The bot version of the bot to batch create the custom
   *          vocabulary item response for.</p>
   */
  botVersion?: string;

  /**
   * <p>The unique locale identifier of the bot to batch create the custom
   *          vocabulary item response for.</p>
   */
  localeId?: string;

  /**
   * <p>The errors of the action to batch create the custom
   *          vocabulary item response for a bot.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * <p>The resources of the action to batch create the custom
   *          vocabulary item response for a bot.</p>
   */
  resources?: CustomVocabularyItem[];
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

/**
 * <p>The unique entry identifier for the custom vocabulary
 *          items.</p>
 */
export interface CustomVocabularyEntryId {
  /**
   * <p>The unique item identifier for the custom vocabulary
   *          items.</p>
   */
  itemId: string | undefined;
}

export interface BatchDeleteCustomVocabularyItemRequest {
  /**
   * <p>The unique identifier of the bot to batch delete request for the custom
   *          vocabulary item.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot to batch delete request for the custom
   *          vocabulary item.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale identifier of the bot to batch delete request for the custom
   *          vocabulary item.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The custom vocabulary list to batch delete request for the custom
   *          vocabulary item.</p>
   */
  customVocabularyItemList: CustomVocabularyEntryId[] | undefined;
}

export interface BatchDeleteCustomVocabularyItemResponse {
  /**
   * <p>The unique identifier of the bot to batch delete response for the custom
   *          vocabulary item.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot to batch delete response for the custom
   *          vocabulary item.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale identifier of the bot to batch delete response for the custom
   *          vocabulary item.</p>
   */
  localeId?: string;

  /**
   * <p>The errors of the action to batch delete response for the custom
   *          vocabulary item.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * <p>The resources of the action to batch delete response for the custom
   *          vocabulary item.</p>
   */
  resources?: CustomVocabularyItem[];
}

export interface BatchUpdateCustomVocabularyItemRequest {
  /**
   * <p>The unique identifier of the bot to the batch update request for the custom
   *          vocabulary item.</p>
   */
  botId: string | undefined;

  /**
   * <p>The bot version of the bot to the batch update request for the custom
   *          vocabulary item.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale identifier of the bot to the batch update request for the custom
   *          vocabulary item.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The custom vocabulary item list of the bot to the batch update request for the custom
   *          vocabulary item.</p>
   */
  customVocabularyItemList: CustomVocabularyItem[] | undefined;
}

export interface BatchUpdateCustomVocabularyItemResponse {
  /**
   * <p>The unique identifier of the bot to the batch update response for the custom
   *          vocabulary item.</p>
   */
  botId?: string;

  /**
   * <p>The bot version of the bot to the batch update response for the custom
   *          vocabulary item.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale identifier of the bot to the batch update response for the custom
   *          vocabulary item.</p>
   */
  localeId?: string;

  /**
   * <p>The errors of the action to batch update response for the custom
   *          vocabulary item.</p>
   */
  errors?: FailedCustomVocabularyItem[];

  /**
   * <p>The resources of the action to batch update response for the custom
   *          vocabulary item.</p>
   */
  resources?: CustomVocabularyItem[];
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
  botTags?: Record<string, string>;

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you import a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: Record<string, string>;
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

/**
 * <p>The object representing the URL of the bot definition, the URL of
 *          the associated transcript, and a statistical summary of the bot
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

export enum BotRecommendationStatus {
  Available = "Available",
  Deleted = "Deleted",
  Deleting = "Deleting",
  Downloading = "Downloading",
  Failed = "Failed",
  Processing = "Processing",
  Stopped = "Stopped",
  Stopping = "Stopping",
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

/**
 * <p>The version of a bot used for a bot locale.</p>
 */
export interface BotVersionLocaleDetails {
  /**
   * <p>The version of a bot used for a bot locale.</p>
   */
  sourceBotVersion: string | undefined;
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

/**
 * <p>Subslot type composition.</p>
 */
export interface SubSlotTypeComposition {
  /**
   * <p>Name of a constituent sub slot inside a composite slot.</p>
   */
  name: string | undefined;

  /**
   * <p>The unique identifier assigned to a slot type.
   *         This refers to either a built-in slot type or the unique slotTypeId of a custom slot type.</p>
   */
  slotTypeId: string | undefined;
}

/**
 * <p>A composite slot is a combination of two or more slots
 *        that capture multiple pieces of information in a single user input.</p>
 */
export interface CompositeSlotTypeSetting {
  /**
   * <p>Subslots in the composite slot.</p>
   */
  subSlots?: SubSlotTypeComposition[];
}

/**
 * <p>Provides an expression that evaluates to true or false. </p>
 */
export interface Condition {
  /**
   * <p>The expression string that is evaluated. </p>
   */
  expressionString: string | undefined;
}

export enum DialogActionType {
  CloseIntent = "CloseIntent",
  ConfirmIntent = "ConfirmIntent",
  ElicitIntent = "ElicitIntent",
  ElicitSlot = "ElicitSlot",
  EndConversation = "EndConversation",
  EvaluateConditional = "EvaluateConditional",
  FulfillIntent = "FulfillIntent",
  InvokeDialogCodeHook = "InvokeDialogCodeHook",
  StartIntent = "StartIntent",
}

/**
 * <p> Defines the action that the bot executes at runtime when the
 *          conversation reaches this step.</p>
 */
export interface DialogAction {
  /**
   * <p>The action that the bot should execute. </p>
   */
  type: DialogActionType | string | undefined;

  /**
   * <p>If the dialog action is <code>ElicitSlot</code>, defines the slot to
   *          elicit from the user.</p>
   */
  slotToElicit?: string;

  /**
   * <p>When true the next message for the intent is not used.</p>
   */
  suppressNextMessage?: boolean;
}

export enum SlotShape {
  List = "List",
  Scalar = "Scalar",
}

/**
 * <p>The value to set in a slot.</p>
 */
export interface SlotValue {
  /**
   * <p>The value that Amazon Lex determines for the slot. The
   *          actual value depends on the setting of the value selection strategy for
   *          the bot. You can choose to use the value entered by the user, or you
   *          can have Amazon Lex choose the first value in the
   *             <code>resolvedValues</code> list.</p>
   */
  interpretedValue?: string;
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

/**
 * <p>Defines an ASCII text message to send to the user.</p>
 */
export interface PlainTextMessage {
  /**
   * <p>The message to send to the user.</p>
   */
  value: string | undefined;
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
  botTags?: Record<string, string>;

  /**
   * <p>A list of tags to add to the test alias for a bot. You can only add
   *          tags when you create a bot. You can't use the <code>UpdateAlias</code>
   *          operation to update tags. To update tags on the test alias, use the
   *             <code>TagResource</code> operation.</p>
   */
  testBotAliasTags?: Record<string, string>;
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
  botTags?: Record<string, string>;

  /**
   * <p>A list of tags associated with the test alias for the bot.</p>
   */
  testBotAliasTags?: Record<string, string>;
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
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

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
  tags?: Record<string, string>;
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
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

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
  tags?: Record<string, string>;
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
  botVersionLocaleSpecification: Record<string, BotVersionLocaleDetails> | undefined;
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
  botVersionLocaleSpecification?: Record<string, BotVersionLocaleDetails>;

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
   *          you can use the <a href="https://docs.aws.amazon.com/lexv2/latest/dg/API_DescribeExport.html">DescribeExport</a> operation to get the
   *          pre-signed S3 URL link to your exported bot or bot locale.</p>
   */
  exportStatus?: ExportStatus | string;

  /**
   * <p>The date and time that the request to export a bot was
   *          created.</p>
   */
  creationDateTime?: Date;
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

/**
 * <p>Settings that specify the dialog code hook that is called by Amazon Lex between eliciting slot values.</p>
 */
export interface ElicitationCodeHookInvocationSetting {
  /**
   * <p>Indicates whether a Lambda function should be invoked
   *          for the dialog.</p>
   */
  enableCodeHookInvocation: boolean | undefined;

  /**
   * <p>A label that indicates the dialog step from which the dialog code
   *          hook is happening.</p>
   */
  invocationLabel?: string;
}

export enum MessageSelectionStrategy {
  Ordered = "Ordered",
  Random = "Random",
}

export enum PromptAttempt {
  Initial = "Initial",
  Retry1 = "Retry1",
  Retry2 = "Retry2",
  Retry3 = "Retry3",
  Retry4 = "Retry4",
  Retry5 = "Retry5",
}

/**
 * <p>Specifies the text input specifications.</p>
 */
export interface TextInputSpecification {
  /**
   * <p>Time for which a bot waits before re-prompting a customer for text input.</p>
   */
  startTimeoutMs: number | undefined;
}

/**
 * <p>Specifies the settings on a prompt attempt.</p>
 */
export interface PromptAttemptSpecification {
  /**
   * <p>Indicates whether the user can interrupt a speech prompt attempt from the bot.</p>
   */
  allowInterrupt?: boolean;

  /**
   * <p>Indicates the allowed input types of the prompt attempt.</p>
   */
  allowedInputTypes: AllowedInputTypes | undefined;

  /**
   * <p>Specifies the settings on audio and DTMF input.</p>
   */
  audioAndDTMFInputSpecification?: AudioAndDTMFInputSpecification;

  /**
   * <p>Specifies the settings on text input.</p>
   */
  textInputSpecification?: TextInputSpecification;
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

  /**
   * <p>Indicates how a message is selected from a message group among retries.</p>
   */
  messageSelectionStrategy?: MessageSelectionStrategy | string;

  /**
   * <p>Specifies the advanced settings on each attempt of the prompt.</p>
   */
  promptAttemptsSpecification?: Record<string, PromptAttemptSpecification>;
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
  condition?: Record<string, Record<string, string>>;

  /**
   * <p>The identifier of the revision of the policy to edit. If this
   *          revision ID doesn't match the current revision ID, Amazon Lex throws an
   *          exception.</p>
   *          <p>If you don't specify a revision, Amazon Lex overwrites the contents of
   *          the policy with the new values.</p>
   */
  expectedRevisionId?: string;
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

/**
 * <p>Subslot elicitation settings.</p>
 *          <p>
 *             <code>DefaultValueSpecification</code> is a list of default values for a constituent sub slot in a composite slot. Default values are used when
 *         Amazon Lex hasn't determined a value for a slot. You can specify default values from context variables,
 *         session attributes, and defined values. This is similar to <code>DefaultValueSpecification</code> for slots.</p>
 *          <p>
 *             <code>PromptSpecification</code> is the prompt that Amazon Lex uses to elicit the sub slot value from the user.
 *         This is similar to <code>PromptSpecification</code> for slots.</p>
 */
export interface SubSlotValueElicitationSetting {
  /**
   * <p>Defines a list of values that Amazon Lex should use as the default value
   *          for a slot.</p>
   */
  defaultValueSpecification?: SlotDefaultValueSpecification;

  /**
   * <p>Specifies a list of message groups that Amazon Lex sends to a user to
   *          elicit a response.</p>
   */
  promptSpecification: PromptSpecification | undefined;

  /**
   * <p>If you know a specific pattern that users might respond to an Amazon Lex request for a sub slot value,
   *       you can provide those utterances to improve accuracy. This is optional. In most cases Amazon Lex is capable
   *       of understanding user utterances. This is similar to <code>SampleUtterances</code> for slots.</p>
   */
  sampleUtterances?: SampleUtterance[];

  /**
   * <p>Specifies the prompts that Amazon Lex uses while a bot is waiting for
   *          customer input. </p>
   */
  waitAndContinueSpecification?: WaitAndContinueSpecification;
}

/**
 * <p>Subslot specifications.</p>
 */
export interface Specifications {
  /**
   * <p>The unique identifier assigned to the slot type.</p>
   */
  slotTypeId: string | undefined;

  /**
   * <p>Specifies the elicitation setting details for constituent sub slots of a composite slot.</p>
   */
  valueElicitationSetting: SubSlotValueElicitationSetting | undefined;
}

/**
 * <p>Specifications for the constituent sub slots and the
 *         expression for the composite slot.</p>
 */
export interface SubSlotSetting {
  /**
   * <p>The expression text for defining the constituent sub slots in the composite slot using logical AND and OR operators.</p>
   */
  expression?: string;

  /**
   * <p>Specifications for the constituent sub slots of a composite slot.</p>
   */
  slotSpecifications?: Record<string, Specifications>;
}

export enum SlotConstraint {
  Optional = "Optional",
  Required = "Required",
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

/**
 * <p>Defines one of the values for a slot type.</p>
 */
export interface SampleValue {
  /**
   * <p>The value that can be used for a slot type.</p>
   */
  value: string | undefined;
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

export enum SlotValueResolutionStrategy {
  Concatenation = "Concatenation",
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

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
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

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
}

export interface CreateUploadUrlRequest {}

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

export interface DeleteExportRequest {
  /**
   * <p>The unique identifier of the export to delete.</p>
   */
  exportId: string | undefined;
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

export interface DeleteImportRequest {
  /**
   * <p>The unique identifier of the import to delete.</p>
   */
  importId: string | undefined;
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

export interface DeleteUtterancesResponse {}

export interface DescribeBotRequest {
  /**
   * <p>The unique identifier of the bot to describe.</p>
   */
  botId: string | undefined;
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
  botAliasLocaleSettings?: Record<string, BotAliasLocaleSettings>;

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

export interface DescribeExportRequest {
  /**
   * <p>The unique identifier of the export to describe.</p>
   */
  exportId: string | undefined;
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

export interface DescribeImportRequest {
  /**
   * <p>The unique identifier of the import to describe.</p>
   */
  importId: string | undefined;
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

export interface DescribeResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the bot or bot alias that the
   *          resource policy is attached to.</p>
   */
  resourceArn: string | undefined;
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

  /**
   * <p>Specifications for a composite slot type.</p>
   */
  compositeSlotTypeSetting?: CompositeSlotTypeSetting;
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

export interface ListCustomVocabularyItemsRequest {
  /**
   * <p>The unique identifier of the bot to the list custom vocabulary
   *          request.</p>
   */
  botId: string | undefined;

  /**
   * <p>The bot version of the bot to the list custom vocabulary
   *          request.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The locale identifier of the bot to the list custom vocabulary
   *          request.</p>
   */
  localeId: string | undefined;

  /**
   * <p>The maximum results to the list custom vocabulary
   *          request.</p>
   */
  maxResults?: number;

  /**
   * <p>The nextToken identifier to the list custom vocabulary
   *          request.</p>
   */
  nextToken?: string;
}

export interface ListCustomVocabularyItemsResponse {
  /**
   * <p>The unique identifier of the bot to the list custom vocabulary
   *          response.</p>
   */
  botId?: string;

  /**
   * <p>The bot version of the bot to the list custom vocabulary
   *          response.</p>
   */
  botVersion?: string;

  /**
   * <p>The locale identifier of the bot to the list custom vocabulary
   *          response.</p>
   */
  localeId?: string;

  /**
   * <p>The custom vocabulary items from the list custom vocabulary
   *          response.</p>
   */
  customVocabularyItems?: CustomVocabularyItem[];

  /**
   * <p>The nextToken identifier to the list custom vocabulary
   *          response.</p>
   */
  nextToken?: string;
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

export enum SlotTypeCategory {
  Composite = "Composite",
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

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to get a list of tags
   *          for.</p>
   */
  resourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The tags associated with a resource.</p>
   */
  tags?: Record<string, string>;
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

export interface StopBotRecommendationRequest {
  /**
   * <p>The unique identifier of the bot containing the bot
   *          recommendation to be stopped.</p>
   */
  botId: string | undefined;

  /**
   * <p>The version of the bot containing the bot recommendation.</p>
   */
  botVersion: string | undefined;

  /**
   * <p>The identifier of the language and locale of the bot recommendation
   *          to stop. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId: string | undefined;

  /**
   * <p>The unique identifier of the bot recommendation to be
   *          stopped.</p>
   */
  botRecommendationId: string | undefined;
}

export interface StopBotRecommendationResponse {
  /**
   * <p>The unique identifier of the bot containing the bot recommendation that
   *          is being stopped.</p>
   */
  botId?: string;

  /**
   * <p>The version of the bot containing the recommendation that is being
   *          stopped.</p>
   */
  botVersion?: string;

  /**
   * <p>The identifier of the language and locale of the bot response
   *          to stop. The string must match one of the supported locales. For more
   *          information, see <a href="https://docs.aws.amazon.com/lexv2/latest/dg/how-languages.html">Supported languages</a>
   *          </p>
   */
  localeId?: string;

  /**
   * <p>The status of the bot recommendation. If the status is Failed,
   *          then the reasons for the failure are listed in the failureReasons field.</p>
   */
  botRecommendationStatus?: BotRecommendationStatus | string;

  /**
   * <p>The unique identifier of the bot recommendation that is being
   *          stopped.</p>
   */
  botRecommendationId?: string;
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
  tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

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

export interface UntagResourceResponse {}

/**
 * @internal
 */
export const AdvancedRecognitionSettingFilterSensitiveLog = (obj: AdvancedRecognitionSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregatedUtterancesFilterFilterSensitiveLog = (obj: AggregatedUtterancesFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregatedUtterancesSortByFilterSensitiveLog = (obj: AggregatedUtterancesSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AggregatedUtterancesSummaryFilterSensitiveLog = (obj: AggregatedUtterancesSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AllowedInputTypesFilterSensitiveLog = (obj: AllowedInputTypes): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedTranscriptFilterSensitiveLog = (obj: AssociatedTranscript): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociatedTranscriptFilterFilterSensitiveLog = (obj: AssociatedTranscriptFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioSpecificationFilterSensitiveLog = (obj: AudioSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DTMFSpecificationFilterSensitiveLog = (obj: DTMFSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioAndDTMFInputSpecificationFilterSensitiveLog = (obj: AudioAndDTMFInputSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketLogDestinationFilterSensitiveLog = (obj: S3BucketLogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioLogDestinationFilterSensitiveLog = (obj: AudioLogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AudioLogSettingFilterSensitiveLog = (obj: AudioLogSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NewCustomVocabularyItemFilterSensitiveLog = (obj: NewCustomVocabularyItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateCustomVocabularyItemRequestFilterSensitiveLog = (
  obj: BatchCreateCustomVocabularyItemRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedCustomVocabularyItemFilterSensitiveLog = (obj: FailedCustomVocabularyItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomVocabularyItemFilterSensitiveLog = (obj: CustomVocabularyItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchCreateCustomVocabularyItemResponseFilterSensitiveLog = (
  obj: BatchCreateCustomVocabularyItemResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomVocabularyEntryIdFilterSensitiveLog = (obj: CustomVocabularyEntryId): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteCustomVocabularyItemRequestFilterSensitiveLog = (
  obj: BatchDeleteCustomVocabularyItemRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteCustomVocabularyItemResponseFilterSensitiveLog = (
  obj: BatchDeleteCustomVocabularyItemResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateCustomVocabularyItemRequestFilterSensitiveLog = (
  obj: BatchUpdateCustomVocabularyItemRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchUpdateCustomVocabularyItemResponseFilterSensitiveLog = (
  obj: BatchUpdateCustomVocabularyItemResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotAliasHistoryEventFilterSensitiveLog = (obj: BotAliasHistoryEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LambdaCodeHookFilterSensitiveLog = (obj: LambdaCodeHook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CodeHookSpecificationFilterSensitiveLog = (obj: CodeHookSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotAliasLocaleSettingsFilterSensitiveLog = (obj: BotAliasLocaleSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotAliasSummaryFilterSensitiveLog = (obj: BotAliasSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotExportSpecificationFilterSensitiveLog = (obj: BotExportSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotFilterFilterSensitiveLog = (obj: BotFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataPrivacyFilterSensitiveLog = (obj: DataPrivacy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotImportSpecificationFilterSensitiveLog = (obj: BotImportSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleExportSpecificationFilterSensitiveLog = (obj: BotLocaleExportSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleFilterFilterSensitiveLog = (obj: BotLocaleFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleHistoryEventFilterSensitiveLog = (obj: BotLocaleHistoryEvent): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VoiceSettingsFilterSensitiveLog = (obj: VoiceSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleImportSpecificationFilterSensitiveLog = (obj: BotLocaleImportSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleSortByFilterSensitiveLog = (obj: BotLocaleSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotLocaleSummaryFilterSensitiveLog = (obj: BotLocaleSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentStatisticsFilterSensitiveLog = (obj: IntentStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotTypeStatisticsFilterSensitiveLog = (obj: SlotTypeStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotRecommendationResultStatisticsFilterSensitiveLog = (obj: BotRecommendationResultStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotRecommendationResultsFilterSensitiveLog = (obj: BotRecommendationResults): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotRecommendationSummaryFilterSensitiveLog = (obj: BotRecommendationSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotSortByFilterSensitiveLog = (obj: BotSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotSummaryFilterSensitiveLog = (obj: BotSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotVersionLocaleDetailsFilterSensitiveLog = (obj: BotVersionLocaleDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotVersionSortByFilterSensitiveLog = (obj: BotVersionSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BotVersionSummaryFilterSensitiveLog = (obj: BotVersionSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuildBotLocaleRequestFilterSensitiveLog = (obj: BuildBotLocaleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuildBotLocaleResponseFilterSensitiveLog = (obj: BuildBotLocaleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuiltInIntentSortByFilterSensitiveLog = (obj: BuiltInIntentSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuiltInIntentSummaryFilterSensitiveLog = (obj: BuiltInIntentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuiltInSlotTypeSortByFilterSensitiveLog = (obj: BuiltInSlotTypeSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuiltInSlotTypeSummaryFilterSensitiveLog = (obj: BuiltInSlotTypeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ButtonFilterSensitiveLog = (obj: Button): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CloudWatchLogGroupLogDestinationFilterSensitiveLog = (obj: CloudWatchLogGroupLogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubSlotTypeCompositionFilterSensitiveLog = (obj: SubSlotTypeComposition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompositeSlotTypeSettingFilterSensitiveLog = (obj: CompositeSlotTypeSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionFilterSensitiveLog = (obj: Condition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialogActionFilterSensitiveLog = (obj: DialogAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotValueFilterSensitiveLog = (obj: SlotValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomPayloadFilterSensitiveLog = (obj: CustomPayload): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImageResponseCardFilterSensitiveLog = (obj: ImageResponseCard): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlainTextMessageFilterSensitiveLog = (obj: PlainTextMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SSMLMessageFilterSensitiveLog = (obj: SSMLMessage): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageFilterSensitiveLog = (obj: Message): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MessageGroupFilterSensitiveLog = (obj: MessageGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResponseSpecificationFilterSensitiveLog = (obj: ResponseSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextLogDestinationFilterSensitiveLog = (obj: TextLogDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextLogSettingFilterSensitiveLog = (obj: TextLogSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConversationLogSettingsFilterSensitiveLog = (obj: ConversationLogSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotRequestFilterSensitiveLog = (obj: CreateBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotResponseFilterSensitiveLog = (obj: CreateBotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SentimentAnalysisSettingsFilterSensitiveLog = (obj: SentimentAnalysisSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotAliasRequestFilterSensitiveLog = (obj: CreateBotAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotAliasResponseFilterSensitiveLog = (obj: CreateBotAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotLocaleRequestFilterSensitiveLog = (obj: CreateBotLocaleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotLocaleResponseFilterSensitiveLog = (obj: CreateBotLocaleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotVersionRequestFilterSensitiveLog = (obj: CreateBotVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateBotVersionResponseFilterSensitiveLog = (obj: CreateBotVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomVocabularyExportSpecificationFilterSensitiveLog = (
  obj: CustomVocabularyExportSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportResourceSpecificationFilterSensitiveLog = (obj: ExportResourceSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateExportRequestFilterSensitiveLog = (obj: CreateExportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateExportResponseFilterSensitiveLog = (obj: CreateExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DialogCodeHookSettingsFilterSensitiveLog = (obj: DialogCodeHookSettings): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FulfillmentStartResponseSpecificationFilterSensitiveLog = (
  obj: FulfillmentStartResponseSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FulfillmentUpdateResponseSpecificationFilterSensitiveLog = (
  obj: FulfillmentUpdateResponseSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FulfillmentUpdatesSpecificationFilterSensitiveLog = (obj: FulfillmentUpdatesSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputContextFilterSensitiveLog = (obj: InputContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ElicitationCodeHookInvocationSettingFilterSensitiveLog = (
  obj: ElicitationCodeHookInvocationSetting
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextInputSpecificationFilterSensitiveLog = (obj: TextInputSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptAttemptSpecificationFilterSensitiveLog = (obj: PromptAttemptSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PromptSpecificationFilterSensitiveLog = (obj: PromptSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KendraConfigurationFilterSensitiveLog = (obj: KendraConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputContextFilterSensitiveLog = (obj: OutputContext): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SampleUtteranceFilterSensitiveLog = (obj: SampleUtterance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourcePolicyRequestFilterSensitiveLog = (obj: CreateResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourcePolicyResponseFilterSensitiveLog = (obj: CreateResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PrincipalFilterSensitiveLog = (obj: Principal): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourcePolicyStatementRequestFilterSensitiveLog = (
  obj: CreateResourcePolicyStatementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateResourcePolicyStatementResponseFilterSensitiveLog = (
  obj: CreateResourcePolicyStatementResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MultipleValuesSettingFilterSensitiveLog = (obj: MultipleValuesSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ObfuscationSettingFilterSensitiveLog = (obj: ObfuscationSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotDefaultValueFilterSensitiveLog = (obj: SlotDefaultValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotDefaultValueSpecificationFilterSensitiveLog = (obj: SlotDefaultValueSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StillWaitingResponseSpecificationFilterSensitiveLog = (obj: StillWaitingResponseSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WaitAndContinueSpecificationFilterSensitiveLog = (obj: WaitAndContinueSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubSlotValueElicitationSettingFilterSensitiveLog = (obj: SubSlotValueElicitationSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SpecificationsFilterSensitiveLog = (obj: Specifications): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SubSlotSettingFilterSensitiveLog = (obj: SubSlotSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrammarSlotTypeSourceFilterSensitiveLog = (obj: GrammarSlotTypeSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GrammarSlotTypeSettingFilterSensitiveLog = (obj: GrammarSlotTypeSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExternalSourceSettingFilterSensitiveLog = (obj: ExternalSourceSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SampleValueFilterSensitiveLog = (obj: SampleValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotTypeValueFilterSensitiveLog = (obj: SlotTypeValue): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotValueRegexFilterFilterSensitiveLog = (obj: SlotValueRegexFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotValueSelectionSettingFilterSensitiveLog = (obj: SlotValueSelectionSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSlotTypeRequestFilterSensitiveLog = (obj: CreateSlotTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateSlotTypeResponseFilterSensitiveLog = (obj: CreateSlotTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUploadUrlRequestFilterSensitiveLog = (obj: CreateUploadUrlRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateUploadUrlResponseFilterSensitiveLog = (obj: CreateUploadUrlResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomVocabularyImportSpecificationFilterSensitiveLog = (
  obj: CustomVocabularyImportSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateRangeFilterFilterSensitiveLog = (obj: DateRangeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotRequestFilterSensitiveLog = (obj: DeleteBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotResponseFilterSensitiveLog = (obj: DeleteBotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotAliasRequestFilterSensitiveLog = (obj: DeleteBotAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotAliasResponseFilterSensitiveLog = (obj: DeleteBotAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotLocaleRequestFilterSensitiveLog = (obj: DeleteBotLocaleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotLocaleResponseFilterSensitiveLog = (obj: DeleteBotLocaleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotVersionRequestFilterSensitiveLog = (obj: DeleteBotVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteBotVersionResponseFilterSensitiveLog = (obj: DeleteBotVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomVocabularyRequestFilterSensitiveLog = (obj: DeleteCustomVocabularyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteCustomVocabularyResponseFilterSensitiveLog = (obj: DeleteCustomVocabularyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExportRequestFilterSensitiveLog = (obj: DeleteExportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExportResponseFilterSensitiveLog = (obj: DeleteExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImportRequestFilterSensitiveLog = (obj: DeleteImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteImportResponseFilterSensitiveLog = (obj: DeleteImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIntentRequestFilterSensitiveLog = (obj: DeleteIntentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyRequestFilterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyResponseFilterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyStatementRequestFilterSensitiveLog = (
  obj: DeleteResourcePolicyStatementRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteResourcePolicyStatementResponseFilterSensitiveLog = (
  obj: DeleteResourcePolicyStatementResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSlotRequestFilterSensitiveLog = (obj: DeleteSlotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSlotTypeRequestFilterSensitiveLog = (obj: DeleteSlotTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUtterancesRequestFilterSensitiveLog = (obj: DeleteUtterancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteUtterancesResponseFilterSensitiveLog = (obj: DeleteUtterancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotRequestFilterSensitiveLog = (obj: DescribeBotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotResponseFilterSensitiveLog = (obj: DescribeBotResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotAliasRequestFilterSensitiveLog = (obj: DescribeBotAliasRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotAliasResponseFilterSensitiveLog = (obj: DescribeBotAliasResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotLocaleRequestFilterSensitiveLog = (obj: DescribeBotLocaleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotLocaleResponseFilterSensitiveLog = (obj: DescribeBotLocaleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotRecommendationRequestFilterSensitiveLog = (obj: DescribeBotRecommendationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EncryptionSettingFilterSensitiveLog = (obj: EncryptionSetting): any => ({
  ...obj,
  ...(obj.botLocaleExportPassword && { botLocaleExportPassword: SENSITIVE_STRING }),
  ...(obj.associatedTranscriptsPassword && { associatedTranscriptsPassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const PathFormatFilterSensitiveLog = (obj: PathFormat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LexTranscriptFilterFilterSensitiveLog = (obj: LexTranscriptFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptFilterFilterSensitiveLog = (obj: TranscriptFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3BucketTranscriptSourceFilterSensitiveLog = (obj: S3BucketTranscriptSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TranscriptSourceSettingFilterSensitiveLog = (obj: TranscriptSourceSetting): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotRecommendationResponseFilterSensitiveLog = (obj: DescribeBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const DescribeBotVersionRequestFilterSensitiveLog = (obj: DescribeBotVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeBotVersionResponseFilterSensitiveLog = (obj: DescribeBotVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomVocabularyMetadataRequestFilterSensitiveLog = (
  obj: DescribeCustomVocabularyMetadataRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeCustomVocabularyMetadataResponseFilterSensitiveLog = (
  obj: DescribeCustomVocabularyMetadataResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportRequestFilterSensitiveLog = (obj: DescribeExportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExportResponseFilterSensitiveLog = (obj: DescribeExportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportRequestFilterSensitiveLog = (obj: DescribeImportRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportResourceSpecificationFilterSensitiveLog = (obj: ImportResourceSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeImportResponseFilterSensitiveLog = (obj: DescribeImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIntentRequestFilterSensitiveLog = (obj: DescribeIntentRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotPriorityFilterSensitiveLog = (obj: SlotPriority): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePolicyRequestFilterSensitiveLog = (obj: DescribeResourcePolicyRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeResourcePolicyResponseFilterSensitiveLog = (obj: DescribeResourcePolicyResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSlotRequestFilterSensitiveLog = (obj: DescribeSlotRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSlotTypeRequestFilterSensitiveLog = (obj: DescribeSlotTypeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSlotTypeResponseFilterSensitiveLog = (obj: DescribeSlotTypeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportFilterFilterSensitiveLog = (obj: ExportFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSortByFilterSensitiveLog = (obj: ExportSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExportSummaryFilterSensitiveLog = (obj: ExportSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportFilterFilterSensitiveLog = (obj: ImportFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSortByFilterSensitiveLog = (obj: ImportSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportSummaryFilterSensitiveLog = (obj: ImportSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentFilterFilterSensitiveLog = (obj: IntentFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentSortByFilterSensitiveLog = (obj: IntentSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntentSummaryFilterSensitiveLog = (obj: IntentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RelativeAggregationDurationFilterSensitiveLog = (obj: RelativeAggregationDuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UtteranceAggregationDurationFilterSensitiveLog = (obj: UtteranceAggregationDuration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAggregatedUtterancesRequestFilterSensitiveLog = (obj: ListAggregatedUtterancesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListAggregatedUtterancesResponseFilterSensitiveLog = (obj: ListAggregatedUtterancesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotAliasesRequestFilterSensitiveLog = (obj: ListBotAliasesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotAliasesResponseFilterSensitiveLog = (obj: ListBotAliasesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotLocalesRequestFilterSensitiveLog = (obj: ListBotLocalesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotLocalesResponseFilterSensitiveLog = (obj: ListBotLocalesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotRecommendationsRequestFilterSensitiveLog = (obj: ListBotRecommendationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotRecommendationsResponseFilterSensitiveLog = (obj: ListBotRecommendationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotsRequestFilterSensitiveLog = (obj: ListBotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotsResponseFilterSensitiveLog = (obj: ListBotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotVersionsRequestFilterSensitiveLog = (obj: ListBotVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBotVersionsResponseFilterSensitiveLog = (obj: ListBotVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBuiltInIntentsRequestFilterSensitiveLog = (obj: ListBuiltInIntentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBuiltInIntentsResponseFilterSensitiveLog = (obj: ListBuiltInIntentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBuiltInSlotTypesRequestFilterSensitiveLog = (obj: ListBuiltInSlotTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListBuiltInSlotTypesResponseFilterSensitiveLog = (obj: ListBuiltInSlotTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomVocabularyItemsRequestFilterSensitiveLog = (obj: ListCustomVocabularyItemsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCustomVocabularyItemsResponseFilterSensitiveLog = (obj: ListCustomVocabularyItemsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExportsRequestFilterSensitiveLog = (obj: ListExportsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListExportsResponseFilterSensitiveLog = (obj: ListExportsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportsRequestFilterSensitiveLog = (obj: ListImportsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListImportsResponseFilterSensitiveLog = (obj: ListImportsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIntentsRequestFilterSensitiveLog = (obj: ListIntentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListIntentsResponseFilterSensitiveLog = (obj: ListIntentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendedIntentsRequestFilterSensitiveLog = (obj: ListRecommendedIntentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecommendedIntentSummaryFilterSensitiveLog = (obj: RecommendedIntentSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecommendedIntentsResponseFilterSensitiveLog = (obj: ListRecommendedIntentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotFilterFilterSensitiveLog = (obj: SlotFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotSortByFilterSensitiveLog = (obj: SlotSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSlotsRequestFilterSensitiveLog = (obj: ListSlotsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotSummaryFilterSensitiveLog = (obj: SlotSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSlotsResponseFilterSensitiveLog = (obj: ListSlotsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotTypeFilterFilterSensitiveLog = (obj: SlotTypeFilter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotTypeSortByFilterSensitiveLog = (obj: SlotTypeSortBy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSlotTypesRequestFilterSensitiveLog = (obj: ListSlotTypesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SlotTypeSummaryFilterSensitiveLog = (obj: SlotTypeSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSlotTypesResponseFilterSensitiveLog = (obj: ListSlotTypesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchAssociatedTranscriptsRequestFilterSensitiveLog = (obj: SearchAssociatedTranscriptsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SearchAssociatedTranscriptsResponseFilterSensitiveLog = (
  obj: SearchAssociatedTranscriptsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartBotRecommendationRequestFilterSensitiveLog = (obj: StartBotRecommendationRequest): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const StartBotRecommendationResponseFilterSensitiveLog = (obj: StartBotRecommendationResponse): any => ({
  ...obj,
  ...(obj.encryptionSetting && { encryptionSetting: EncryptionSettingFilterSensitiveLog(obj.encryptionSetting) }),
});

/**
 * @internal
 */
export const StartImportRequestFilterSensitiveLog = (obj: StartImportRequest): any => ({
  ...obj,
  ...(obj.filePassword && { filePassword: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartImportResponseFilterSensitiveLog = (obj: StartImportResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopBotRecommendationRequestFilterSensitiveLog = (obj: StopBotRecommendationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopBotRecommendationResponseFilterSensitiveLog = (obj: StopBotRecommendationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});
