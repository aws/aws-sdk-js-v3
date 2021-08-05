import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
   *          role specified in the <code>roleArn</code> parameter of the <a>CreateBot</a> operation must have permission to write to
   *          this bucket.</p>
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
 *          fulfilles the user's request to a bot.</p>
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
   *          fulfilles the user's request to a bot.</p>
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
 * <p>Summary information about bot aliases returned from the <a>ListBotAliases</a> operation.</p>
 */
export interface BotAliasSummary {
  /**
   * <p>The unique identifier assigned to the bot alias. You can use this ID
   *          to get detailed information about the alias using the <a>DescribeBotAlias</a> operation.</p>
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

/**
 * <p>Defines settings for using an Amazon Polly voice to communicate with a
 *          user.</p>
 */
export interface VoiceSettings {
  /**
   * <p>The identifier of the Amazon Polly voice to use.</p>
   */
  voiceId: string | undefined;
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

export enum SortOrder {
  Ascending = "Ascending",
  Descending = "Descending",
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
  ReadyExpressTesting = "ReadyExpressTesting",
}

/**
 * <p>Summary information about bot locales returned by the <a>ListBotLocales</a> operation.</p>
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
 * <p>Summary information about a bot returned by the <a>ListBots</a> operation.</p>
 */
export interface BotSummary {
  /**
   * <p>The unique identifier assigned to the bot. Use this ID to get
   *          detailed information about the bot with the <a>DescribeBot</a> operation.</p>
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
 * <p>Summary information about a bot version returned by the <a>ListBotVersions</a> operation.</p>
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
   *          the response from the  operation.</p>
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
 * <p></p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface PreconditionFailedException extends __SmithyException, $MetadataBearer {
  name: "PreconditionFailedException";
  $fault: "client";
  message?: string;
}

export namespace PreconditionFailedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PreconditionFailedException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  retryAfterSeconds?: number;
  message?: string;
}

export namespace ThrottlingException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ThrottlingException): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
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
 * <p>Provides summary information about a built-in intent for the <a>ListBuiltInIntents</a> operation.</p>
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
 *             <a>ListBuiltInSlotTypes</a> operation.</p>
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
   *              operation to change the bot
   *          version associated with the alias.</p>
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
   *          PostText operation would be:</p>
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
   *          you can use the  operation to get
   *          the pre-signed S3 URL link to your exported bot or bot locale.</p>
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
 * <p></p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
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
 * <p>Determines if a Lambda function should be invoked for a specific
 *          intent.</p>
 */
export interface FulfillmentCodeHookSettings {
  /**
   * <p>Indicates whether a Lambda function should be invoked to fulfill a
   *          specific intent.</p>
   */
  enabled: boolean | undefined;
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
   *          field is false, the closing response isn't sent to the user and no
   *          closing input from the user is used. If the <code>active</code> field
   *          isn't specified, the default is true.</p>
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
   * <p>The maximum number of times the bot tries to elicit a resonse from
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
   *          sent and processing continues as if the responses aren't present. If
   *          the <code>active</code> field isn't specified, the default is
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
   *          field is false, wait and continue responses for a slot aren't used and
   *          the bot expects an appropriate response within the configured timeout.
   *          If the <code>active</code> field isn't specified, the default is
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
   *          values from context variables, sesion attributes, and defined
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
   * <p>Additional values releated to the slot type entry.</p>
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
   *          <p> Use a standard regular expression. Amazon Lex supports the
   *          following characters in the regular expression: </p>
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
  valueSelectionSetting: SlotValueSelectionSetting | undefined;

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
   *              operation.</p>
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
   *          the export will no longer be returned by the  operation and calls to the  with the export identifier will
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
   *          the import will no longer be returned by the  operation and calls to the  with the import identifier will
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
}

export namespace DescribeBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeBotLocaleResponse): any => ({
    ...obj,
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
   * <p>The file format used in the files that describe the bot or bot
   *          locale.</p>
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
  FailOnConflict = "FailOnConflict",
  Overwrite = "Overwrite",
}

/**
 * <p>Provides information about the bot or bot locale that you want to
 *          import. You can sepcifiy the <code>botImportSpecification</code> or the
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
   * <p>The specifications of the imported bot or bot locale.</p>
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
   *          provides one or more reasons for the failture.</p>
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
 * <p>Filtes the response form the
 *          operation</p>
 */
export interface ExportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ExportFilterName | string | undefined;

  /**
   * <p>The values to use to fileter the response.</p>
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
 * <p>Filters the response from the
 *          operation.</p>
 */
export interface ImportFilter {
  /**
   * <p>The name of the field to use for filtering.</p>
   */
  name: ImportFilterName | string | undefined;

  /**
   * <p>The values to use to filter the response.</p>
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
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
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
   * <p>If the response from the <code>ListExports</code> operation contans
   *          more results that specified in the <code>maxResults</code> parameter, a
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
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
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
   */
  nextToken?: string;
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
   *          token is returned in the response. Use that token in the
   *             <code>nextToken</code> parameter to return the next page of
   *          results.</p>
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

export interface StartImportRequest {
  /**
   * <p>The unique identifier for the import. It is included in the response
   *          from the  operation.</p>
   */
  importId: string | undefined;

  /**
   * <p>Parameters for creating the bot or bot locale.</p>
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
   * <p>The password used to encrypt the zip archive that contains the bot
   *          or bot locale definition. You should always encrypt the zip archive to
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
   * <p>The parameters used when importing the bot or bot locale.</p>
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
   *             <code>Complete</code> the bot or bot alias is ready to use.</p>
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
   *          returned by the <a>CreateBot</a> operation.</p>
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
}

export namespace UpdateBotLocaleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateBotLocaleResponse): any => ({
    ...obj,
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
   * <p>The file format used for the files that define the resource.</p>
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
  valueSelectionSetting: SlotValueSelectionSetting | undefined;

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
}

export namespace UpdateSlotTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSlotTypeResponse): any => ({
    ...obj,
  });
}
