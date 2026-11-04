// smithy-typescript generated code
import type {
  DataSourceSport,
  DictionaryLanguage,
  DictionaryStatus,
  ExtendedAnalysisMode,
  FeedStatus,
  FilterName,
  OutputStatus,
  ProfanityFilterMode,
  ScheduleActionErrorCode,
  ScheduleActionStatus,
  SummaryGenerationMode,
  TranscriptionLanguage,
} from "./enums";

/**
 * The width and height of the output video. Used in SubtitlingConfig to determine subtitle layout.
 *
 * @public
 */
export interface AspectRatio {
  /**
   * The width component of the aspect ratio (for example, 16 in a 16:9 ratio).
   *
   * @public
   */
  width: number | undefined;

  /**
   * The height component of the aspect ratio (for example, 9 in a 16:9 ratio).
   *
   * @public
   */
  height: number | undefined;
}

/**
 * Contains the data source configuration for a clipping output. It identifies the fixture whose event data Elemental Inference maps onto the clipping metadata. It is used in the dataSourceConfiguration property of a ClippingConfig.
 *
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * The ID of the fixture whose event data you want Elemental Inference to map onto this clipping output. The fixture should be the sports event in the source media that the feed is processing.
   *
   * To obtain this ID, use the SearchFixtures operation to find the fixture, then use the fixtureId from the matching FixtureSummary.
   *
   * @public
   */
  fixtureId: string | undefined;
}

/**
 * A type of OutputConfig, used when the output in a feed is for the clip feature.
 *
 * @public
 */
export interface ClippingConfig {
  /**
   * A string that you want Elemental Inference to always include in the event clipping metadata for this output. The string might identify the sports event in the source media, for example.
   *
   * @public
   */
  callbackMetadata?: string | undefined;

  /**
   * The data source to map onto this clipping output. This parameter is optional. When you include this parameter, Elemental Inference reads the event data for the fixture that you specify, and includes that data in the event clipping metadata for this output.
   *
   * If you omit this parameter, Elemental Inference doesn't map a data source onto this output.
   *
   * @public
   */
  dataSourceConfiguration?: DataSourceConfiguration | undefined;
}

/**
 * The output configuration settings for the contextual metadata feature. Use this structure when the feed output generates metadata that describes the media content.
 *
 * @public
 */
export interface ContextualMetadataConfig {
  /**
   * Specifies whether Elemental Inference generates a descriptive summary of the media content for this output, along with the objects and actions that it detects. This setting is independent of `extendedAnalysis`.
   *
   * Valid values:
   *
   * - ENABLED (default) – Elemental Inference populates the summary, objects, and actions fields, along with the IAB taxonomy and GARM suitability classifications.
   * - DISABLED – Elemental Inference doesn't populate the summary, objects, and actions fields.
   *
   * @public
   */
  summaryGeneration?: SummaryGenerationMode | undefined;

  /**
   * Specifies whether Elemental Inference generates extended analysis of the media content for this output. Extended analysis identifies the people, environments, brands, and on-screen text in the media content. This setting is independent of `summaryGeneration`.
   *
   * Valid values:
   *
   * - ENABLED (default) – Elemental Inference populates the people, environments, brands, and on-screen text fields.
   * - DISABLED – Elemental Inference doesn't populate the people, environments, brands, and on-screen text fields.
   *
   * @public
   */
  extendedAnalysis?: ExtendedAnalysisMode | undefined;
}

/**
 * A named set of graphics-compositing templates used by the crop feature, specified in the templateGroups array of a CroppingConfig.
 *
 * @public
 */
export interface TemplateGroup {
  /**
   * A name for the template group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * An array of Amazon S3 URIs that point to the graphics-compositing templates for this group. You can specify 1 or 2 URIs. Each URI must be in the form `s3://bucket-name/key`. Elemental Inference reads these templates using the IAM role that you specify in accessRoleArn.
   *
   * @public
   */
  templateUris: string[] | undefined;
}

/**
 * A type of OutputConfig, used when the output in a feed is for the crop feature.
 *
 * @public
 */
export interface CroppingConfig {
  /**
   * An array of template groups for the crop output. Each template group provides the graphics-compositing templates that Elemental Inference applies to the cropped video. You can specify from 1 to 4 template groups.
   *
   * @public
   */
  templateGroups?: TemplateGroup[] | undefined;
}

/**
 * A type of OutputConfig, used when the output in a feed is for the smart subtitling feature. Smart subtitling uses automatic speech recognition (ASR) to generate live TTML subtitles from the audio in your source media.
 *
 * @public
 */
export interface SubtitlingConfig {
  /**
   * The language of the audio in the source media. Elemental Inference uses this setting to optimize transcription accuracy. Specify the language using an ISO 639-2/T three-letter code, optionally with a region subtag. Supported values: eng, eng-au, eng-gb, eng-us, fra, ita, deu, spa, por.
   *
   * @public
   */
  language: TranscriptionLanguage | undefined;

  /**
   * The aspect ratio of the output video, specified as width and height integer values. Elemental Inference uses the aspect ratio to determine subtitle layout and line lengths.
   *
   * @public
   */
  aspectRatio?: AspectRatio | undefined;

  /**
   * The ID of a custom dictionary to improve transcription accuracy for domain-specific terminology. Use the CreateDictionary operation to create a dictionary.
   *
   * @public
   */
  dictionary?: string | undefined;

  /**
   * Controls how profanity is handled in the generated subtitles. Valid values: DISABLED (no filtering, default), CENSOR (replace profanity with asterisks), DROP (remove profanity from the transcript).
   *
   * @public
   */
  profanityFilter?: ProfanityFilterMode | undefined;
}

/**
 * Contains one typed output. It is used in the CreateOutput, GetOutput, and Update Output structures.
 *
 * @public
 */
export type OutputConfig =
  | OutputConfig.ClippingMember
  | OutputConfig.ContextualMetadataMember
  | OutputConfig.CroppingMember
  | OutputConfig.SubtitlingMember
  | OutputConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputConfig {
  /**
   * The output config type that applies to the cropping feature.
   *
   * @public
   */
  export interface CroppingMember {
    cropping: CroppingConfig;
    clipping?: never;
    subtitling?: never;
    contextualMetadata?: never;
    $unknown?: never;
  }

  /**
   * The output config type that applies to the clipping feature.
   *
   * @public
   */
  export interface ClippingMember {
    cropping?: never;
    clipping: ClippingConfig;
    subtitling?: never;
    contextualMetadata?: never;
    $unknown?: never;
  }

  /**
   * The output config type that applies to the smart subtitling feature.
   *
   * @public
   */
  export interface SubtitlingMember {
    cropping?: never;
    clipping?: never;
    subtitling: SubtitlingConfig;
    contextualMetadata?: never;
    $unknown?: never;
  }

  /**
   * The output config type that applies to the contextual metadata feature.
   *
   * @public
   */
  export interface ContextualMetadataMember {
    cropping?: never;
    clipping?: never;
    subtitling?: never;
    contextualMetadata: ContextualMetadataConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cropping?: never;
    clipping?: never;
    subtitling?: never;
    contextualMetadata?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    cropping: (value: CroppingConfig) => T;
    clipping: (value: ClippingConfig) => T;
    subtitling: (value: SubtitlingConfig) => T;
    contextualMetadata: (value: ContextualMetadataConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Contains configuration information about one output in a feed. It is used in the AssociateFeed and the CreateFeed actions.
 *
 * @public
 */
export interface CreateOutput {
  /**
   * A name for the output.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature.
   *
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * The status to assign to the output.
   *
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * A description for the output.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFeedRequest {
  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An identifier for the resource. This name must not resemble an ARN.
   *
   * The resource is the source media that the feed will process. The name you assign should help you to later identify the source media that belongs to the feed. In this way, you will know which source media to push to the feed (using PutMedia).
   *
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * An array of one or more outputs that you want to add to this feed now, to supplement any outputs that you specified when you created or updated the feed.
   *
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * Set to true if you want to do a dry run of the associate action.
   *
   * Elemental Inference will validate that the real request would succeed without actually making any changes. A dry run catches errors such as missing IAM permissions, quota limits exceeded, conflicting outputs, and so on. If the dry run fails, the action returns a 4xx error code. After you've fixed the errors, resubmit the request.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateFeedResponse {
  /**
   * The ARN of the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Contains information about one competitor in a fixture. It is used in the FixtureSummary that is in the SearchFixtures response.
 *
 * @public
 */
export interface Competitor {
  /**
   * The name of the competitor, as provided by the data source.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Specifies whether this competitor is the home side in the fixture. If true, this competitor is the home side. If false, this competitor is the away side.
   *
   * @public
   */
  isHome?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDictionaryRequest {
  /**
   * A user-friendly name for this dictionary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The language of the dictionary entries. Specify the language using an ISO 639-2/T three-letter code. Supported values: eng, fra, ita, deu, spa, por.
   *
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * The dictionary entries payload. Contains the custom words and phrases for the dictionary. Maximum size is 40,960 characters.
   *
   * @public
   */
  entries?: string | undefined;

  /**
   * Optional tags to associate with the dictionary.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDictionaryResponse {
  /**
   * The name that you specified in the request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dictionary.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * A unique ID that Elemental Inference assigns to the dictionary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The language of the dictionary.
   *
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * The current status of the dictionary. After creation succeeds, the status will be AVAILABLE.
   *
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * A list of feed IDs that reference this dictionary.
   *
   * @public
   */
  references?: string[] | undefined;

  /**
   * Any tags that you included when you created the dictionary.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFeedRequest {
  /**
   * A user-friendly name for this feed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of an IAM role that Elemental Inference assumes to access resources in your account on your behalf. For example, the smart crop feature uses this role to read graphics-compositing templates from your Amazon S3 bucket. You specify one access role for each feed.
   *
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * An array of outputs for this feed. Each output represents a specific Elemental Inference feature. For example, there is one output type for the smart crop feature. You must specify at least one output, but you can later add outputs using AssociateFeed, or add, modify, and delete outputs using UpdateFeed.
   *
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * Optional tags. You can also add tags later, using TagResource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Contains information about the resource that is associated with a feed. It is used in the FeedSummary that is used in the response of a ListFeeds action.
 *
 * @public
 */
export interface FeedAssociation {
  /**
   * The name of the associated resource.
   *
   * @public
   */
  associatedResourceName: string | undefined;
}

/**
 * Contains configuration information about one output in a feed. It is used in the GetFeed response.
 *
 * @public
 */
export interface GetOutput {
  /**
   * The name of the output.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature.
   *
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * The status of the output.
   *
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * The description of the output.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * True means that the output was originally created in the feed using AssociateFeed. False means it was created using CreateFeed or UpdateFeed.
   *
   * You will need this value if you use UpdateFeed to modify the list of outputs in the feed.
   *
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFeedResponse {
  /**
   * A unique ARN that Elemental Inference assigns to the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name that you specified in the request.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A unique ID that Elemental Inference assigns to the feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * An array of endpoints for the feed. Typically, there is only one endpoint. The feed receives source media at this endpoint (when the calling application calls PutMedia) and returns the resulting metadata to this endpoint (when the calling application calls GetMetadata).
   *
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * Repeats the outputs that you specified in the request.
   *
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role that you specified in the request. This property is absent if you didn't specify an IAM role.
   *
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * The current status of the feed. After creation of the feed has succeeded, the status will be AVAILABLE.
   *
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * The association for this feed. When you create the feed, this property is empty. You must associate a resource with the feed using AssociateFeed or UpdateFeed.
   *
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * Any tags that you included when you created the feed.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Removes the game from an event clipping output at the action's scheduled time. This is a type of ScheduleActionOperation, and the output must be an event clipping output.
 *
 * @public
 */
export interface RemoveClippingDataSourceConfiguration {
  /**
   * The name of the output that you want to remove the game from.
   *
   * @public
   */
  outputName: string | undefined;
}

/**
 * Attaches a game to an event clipping output at the action's scheduled time. This is a type of ScheduleActionOperation, and the output must be an event clipping output.
 *
 * @public
 */
export interface UpdateClippingDataSourceConfiguration {
  /**
   * The name of the output that you want to attach the game to.
   *
   * @public
   */
  outputName: string | undefined;

  /**
   * The game that you want to attach to the output.
   *
   * @public
   */
  dataSourceConfiguration: DataSourceConfiguration | undefined;
}

/**
 * Enables or disables an output at the action's scheduled time. This is a type of ScheduleActionOperation.
 *
 * @public
 */
export interface UpdateOutputStatus {
  /**
   * The name of the output that you want to enable or disable. The output must exist in the feed when you create the action.
   *
   * @public
   */
  outputName: string | undefined;

  /**
   * Specifies whether the output is enabled or disabled after the action runs.
   *
   * @public
   */
  status: OutputStatus | undefined;
}

/**
 * Holds one typed configuration change that a schedule action makes to a feed. Each operation must contain exactly one property.
 *
 * @public
 */
export type ScheduleActionOperation =
  | ScheduleActionOperation.RemoveClippingDataSourceConfigurationMember
  | ScheduleActionOperation.UpdateClippingDataSourceConfigurationMember
  | ScheduleActionOperation.UpdateOutputStatusMember
  | ScheduleActionOperation.$UnknownMember;

/**
 * @public
 */
export namespace ScheduleActionOperation {
  /**
   * The operation type that enables or disables an output.
   *
   * @public
   */
  export interface UpdateOutputStatusMember {
    updateOutputStatus: UpdateOutputStatus;
    updateClippingDataSourceConfiguration?: never;
    removeClippingDataSourceConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The operation type that attaches a game to an event clipping output.
   *
   * @public
   */
  export interface UpdateClippingDataSourceConfigurationMember {
    updateOutputStatus?: never;
    updateClippingDataSourceConfiguration: UpdateClippingDataSourceConfiguration;
    removeClippingDataSourceConfiguration?: never;
    $unknown?: never;
  }

  /**
   * The operation type that removes the game from an event clipping output.
   *
   * @public
   */
  export interface RemoveClippingDataSourceConfigurationMember {
    updateOutputStatus?: never;
    updateClippingDataSourceConfiguration?: never;
    removeClippingDataSourceConfiguration: RemoveClippingDataSourceConfiguration;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    updateOutputStatus?: never;
    updateClippingDataSourceConfiguration?: never;
    removeClippingDataSourceConfiguration?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    updateOutputStatus: (value: UpdateOutputStatus) => T;
    updateClippingDataSourceConfiguration: (value: UpdateClippingDataSourceConfiguration) => T;
    removeClippingDataSourceConfiguration: (value: RemoveClippingDataSourceConfiguration) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Sets the time at which a schedule action runs once. This is a type of ScheduleActionStartConfiguration.
 *
 * @public
 */
export interface FixedModeScheduleActionStartSettings {
  /**
   * The UTC time at which the action runs. Specify the time in whole seconds. For the range of times that you can specify, see the AWS Elemental Inference User Guide.
   *
   * This time is approximate. The change can take a few minutes to take effect on the media that the feed is processing.
   *
   * @public
   */
  scheduledAt: Date | undefined;
}

/**
 * Holds the typed start settings that determine when a schedule action runs. Currently, only fixed mode is supported.
 *
 * @public
 */
export type ScheduleActionStartConfiguration =
  | ScheduleActionStartConfiguration.FixedModeScheduleActionStartSettingsMember
  | ScheduleActionStartConfiguration.$UnknownMember;

/**
 * @public
 */
export namespace ScheduleActionStartConfiguration {
  /**
   * The start settings type for an action that runs once, at a fixed time.
   *
   * @public
   */
  export interface FixedModeScheduleActionStartSettingsMember {
    fixedModeScheduleActionStartSettings: FixedModeScheduleActionStartSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    fixedModeScheduleActionStartSettings?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    fixedModeScheduleActionStartSettings: (value: FixedModeScheduleActionStartSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateScheduleActionRequest {
  /**
   * Specifies the ID of the feed that you want to add the schedule action to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A name for the schedule action. The name must be unique within the feed. You can reuse the name of an action that you deleted.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Specifies when the action runs.
   *
   * @public
   */
  startConfiguration: ScheduleActionStartConfiguration | undefined;

  /**
   * Specifies the list of configuration changes that you want to make to the feed. Elemental Inference applies all the operations in an action together, in the order that you specify them. If any operation fails, Elemental Inference doesn't apply any of them.
   *
   * @public
   */
  operations: ScheduleActionOperation[] | undefined;
}

/**
 * Describes the cause of a schedule action failure, including the failure type and a description of what went wrong.
 *
 * @public
 */
export interface ScheduleActionError {
  /**
   * The type of failure. Valid values are the following:
   *
   * - **INVALID_ACTION_TARGET**
   *
   *   The action referred to something that didn't exist or wasn't valid at the scheduled time, for example an output that you deleted.
   *
   * - **INTERNAL_ERROR**
   *
   *   An unexpected error prevented the action from completing.
   *
   * @public
   */
  errorCode: ScheduleActionErrorCode | undefined;

  /**
   * A description of the failure.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleActionResponse {
  /**
   * The name that you specified.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Specifies when the action runs.
   *
   * @public
   */
  startConfiguration: ScheduleActionStartConfiguration | undefined;

  /**
   * The configuration changes that the action makes to the feed.
   *
   * @public
   */
  operations: ScheduleActionOperation[] | undefined;

  /**
   * The status of the action. After you create the action successfully, Elemental Inference sets the status to PENDING.
   *
   * @public
   */
  status: ScheduleActionStatus | undefined;

  /**
   * A description of why the action failed. Elemental Inference returns this property only when the status is FAILED.
   *
   * @public
   */
  error?: ScheduleActionError | undefined;
}

/**
 * @public
 */
export interface DeleteDictionaryRequest {
  /**
   * The ID of the dictionary to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDictionaryResponse {
  /**
   * The ARN of the deleted dictionary.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the deleted dictionary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the dictionary after deletion.
   *
   * @public
   */
  status: DictionaryStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFeedRequest {
  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeedResponse {
  /**
   * The ARN of the deleted feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the deleted feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The current status of the feed. When deletion of the feed has succeeded, the status will be DELETED.
   *
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFeedPolicyRequest {
  /**
   * The ID of the feed whose policy you want to delete.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleActionRequest {
  /**
   * The ID of the feed that holds the schedule action.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the schedule action that you want to delete.
   *
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleActionResponse {
  /**
   * The name of the schedule action that Elemental Inference deleted.
   *
   * @public
   */
  actionName: string | undefined;
}

/**
 * @public
 */
export interface ExportDictionaryEntriesRequest {
  /**
   * The ID of the dictionary whose entries you want to export.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportDictionaryEntriesResponse {
  /**
   * The dictionary entries payload.
   *
   * @public
   */
  entries?: string | undefined;
}

/**
 * @public
 */
export interface GetDictionaryRequest {
  /**
   * The ID of the dictionary to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDictionaryResponse {
  /**
   * The name of the dictionary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dictionary.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the dictionary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The language of the dictionary.
   *
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * The current status of the dictionary.
   *
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * A list of feed IDs that reference this dictionary.
   *
   * @public
   */
  references?: string[] | undefined;

  /**
   * The tags associated with the dictionary.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDictionariesRequest {
  /**
   * The maximum number of results to return per API request. Valid range: 1 to 100.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that identifies the next batch of results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains summary information about a dictionary. Used in the ListDictionaries response.
 *
 * @public
 */
export interface DictionarySummary {
  /**
   * The ARN of the dictionary.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the dictionary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the dictionary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The language of the dictionary.
   *
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * The status of the dictionary.
   *
   * @public
   */
  status: DictionaryStatus | undefined;
}

/**
 * @public
 */
export interface ListDictionariesResponse {
  /**
   * A list of DictionarySummary objects.
   *
   * @public
   */
  dictionaries: DictionarySummary[] | undefined;

  /**
   * The token to use to retrieve the next batch of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDictionaryRequest {
  /**
   * The ID of the dictionary to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * A new name for the dictionary. If not specified, the name is not changed.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A new language for the dictionary. If not specified, the language is not changed.
   *
   * @public
   */
  language?: DictionaryLanguage | undefined;

  /**
   * New dictionary entries. If not specified, the entries are not changed.
   *
   * @public
   */
  entries?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDictionaryResponse {
  /**
   * The updated or original name of the dictionary.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the dictionary.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the dictionary.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The updated or original language of the dictionary.
   *
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * The current status of the dictionary.
   *
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * A list of feed IDs that reference this dictionary.
   *
   * @public
   */
  references?: string[] | undefined;

  /**
   * Any tags associated with the dictionary.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedRequest {
  /**
   * The ID of the feed where you want to release the resource.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the resource currently associated with the feed.
   *
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * Set to true if you want to do a dry run of the disassociate action.
   *
   * Elemental Inference will validate that the real request would succeed without actually making any changes. A dry run catches errors such as missing IAM permissions. If the dry run fails, the action returns a 4xx error code.
   *
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedResponse {
  /**
   * The ARN of the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedRequest {
  /**
   * The ID of the feed to query.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedResponse {
  /**
   * The ARN of the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The name of the feed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The dataEndpoints of the feed.
   *
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * An array of the outputs in the feed.
   *
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of an AWS Identity and Access Management (IAM) role that Elemental Inference assumes. Elemental Inference uses this role to access resources in your account on your behalf. This property is absent if the feed doesn't have an IAM role.
   *
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * The status of the feed.
   *
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * Information about the resource that is associated with the feed. It's possible that there is no associated resource. This is not an error.
   *
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * A list of the tags, if any, for the feed.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFeedPolicyRequest {
  /**
   * The ID of the feed whose policy you want to retrieve.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedPolicyResponse {
  /**
   * The resource-based policy document attached to the feed.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface ListFeedsRequest {
  /**
   * The maximum number of results to return per API request.
   *
   * For example, you submit a list request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.)
   *
   * The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page.
   *
   * Valid Range: Minimum value of 1. Maximum value of 1000.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a ListFeeds request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFeeds request a second time and specify the NextToken value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains configuration information about a feed. It is used in the ListFeeds response.
 *
 * @public
 */
export interface FeedSummary {
  /**
   * The ARN of the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the feed
   *
   * @public
   */
  name: string | undefined;

  /**
   * The resource, if any, associated with the feed.
   *
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * The status of the feed.
   *
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface ListFeedsResponse {
  /**
   * A list of FeedSummary objects.
   *
   * @public
   */
  feeds: FeedSummary[] | undefined;

  /**
   * The token that identifies the batch of results that you want to see. For example, you submit a list request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the list request a second time and specify the NextToken value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListScheduleActionsRequest {
  /**
   * The ID of the feed that you want to query.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The maximum number of results to return for each API request. If you don't specify MaxResults, Elemental Inference returns a maximum of 10 results for each page.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see. To see the next batch, submit the request a second time and specify the NextToken value that Elemental Inference returned.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Describes one schedule action on a feed, including the changes it makes and whether it has run yet. Elemental Inference returns this structure in the ListScheduleActions operation.
 *
 * @public
 */
export interface ScheduleAction {
  /**
   * The name of the schedule action. The name is unique within the feed.
   *
   * @public
   */
  actionName: string | undefined;

  /**
   * Specifies when the action runs.
   *
   * @public
   */
  startConfiguration: ScheduleActionStartConfiguration | undefined;

  /**
   * The configuration changes that the action makes to the feed.
   *
   * @public
   */
  operations: ScheduleActionOperation[] | undefined;

  /**
   * The status of the action. Valid values are the following:
   *
   * - **PENDING**
   *
   *   The action is waiting for its scheduled time.
   *
   * - **COMPLETED**
   *
   *   Elemental Inference applied all the action's operations to the feed.
   *
   * - **FAILED**
   *
   *   Elemental Inference couldn't apply the action.
   *
   * @public
   */
  status: ScheduleActionStatus | undefined;

  /**
   * A description of why the action failed. Elemental Inference returns this property only when the status is FAILED.
   *
   * @public
   */
  error?: ScheduleActionError | undefined;
}

/**
 * @public
 */
export interface ListScheduleActionsResponse {
  /**
   * A list of the schedule actions on the feed.
   *
   * @public
   */
  scheduleActions: ScheduleAction[] | undefined;

  /**
   * The token that identifies the next batch of results. Elemental Inference returns it only when more results are available.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface PutFeedPolicyRequest {
  /**
   * The ID of the feed to attach the policy to.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The resource-based policy document to attach to the feed.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutFeedPolicyResponse {}

/**
 * Contains configuration information about one output in a feed. It is used in the UpdateFeed action.
 *
 * @public
 */
export interface UpdateOutput {
  /**
   * The name of the output.
   *
   * @public
   */
  name: string | undefined;

  /**
   * A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature.
   *
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * The status of the output.
   *
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * A description of the output.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * Elemental Inference originally sets this parameter to True if this output was created by AssociateFeed or to False if this output was created by CreateFeed or UpdateFeed.
   *
   * You must not change this value. Therefore, use GetFeed to determine the current value. Then in the UpdateFeed request, if the current value is True, include this parameter with a value of True. If it's False, omit the parameter.
   *
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFeedRequest {
  /**
   * Required. You can specify the existing name (to leave it unchanged) or a new name.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of an IAM role that Elemental Inference assumes to access resources in your account on your behalf. You can specify the existing role (to leave it unchanged) or a new role. You specify one access role for each feed.
   *
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * The ID of the feed to update.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Required. You can specify the existing array of outputs (to leave outputs unchanged) or you can specify a new array.
   *
   * @public
   */
  outputs: UpdateOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateFeedResponse {
  /**
   * The ARN of the feed.
   *
   * @public
   */
  arn: string | undefined;

  /**
   * The updated or original name of the feed.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ID of the feed.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The data endpoints of the feed.
   *
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * The array of outputs in the feed. You might have left this array unchanged, or you might have changed it.
   *
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role for the feed, after the update. This property is absent if the feed doesn't have an IAM role.
   *
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * The status of the feed.
   *
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * Information about the resource that is associated with the feed, if any.
   *
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * The tags associated with the feed.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetFixtureRequest {
  /**
   * The ID of the fixture to retrieve, as returned by SearchFixtures.
   *
   * @public
   */
  fixtureId: string | undefined;
}

/**
 * @public
 */
export interface GetFixtureResponse {
  /**
   * The ID that you specified in the request.
   *
   * @public
   */
  fixtureId: string | undefined;

  /**
   * The name of the fixture, as provided by the data source. For example, the names of the two competing teams.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The group that the fixture belongs to, such as the competition, league, or tournament. The data source doesn't provide this information for every fixture.
   *
   * @public
   */
  fixtureGroup?: string | undefined;

  /**
   * The scheduled start time of the fixture, as provided by the data source. The actual start time might differ.
   *
   * @public
   */
  scheduledStart?: Date | undefined;

  /**
   * The status of the fixture in its lifecycle, as provided by the data source. For example, Scheduled or Completed.
   *
   * @public
   */
  status: string | undefined;

  /**
   * An array of the competitors (the teams or individuals) in the fixture.
   *
   * @public
   */
  competitors: Competitor[] | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource whose tags you want to query.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of the tags that belong to this resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * A filter for a fixture search. It is used in the filters array of a SearchFixtures request.
 *
 * @public
 */
export interface SearchFilter {
  /**
   * The dimension of the fixture to filter on. Valid values: COMPETITOR.
   *
   * @public
   */
  name: FilterName | undefined;

  /**
   * An array of values to match in the dimension that you specified in name. You can specify up to 10 values. A fixture appears in the results if it matches at least one of these values.
   *
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchFixturesRequest {
  /**
   * The sport to search for fixtures. Valid values: basketball (search for basketball fixtures), american-football (search for american-football fixtures).
   *
   * @public
   */
  sport: DataSourceSport | undefined;

  /**
   * The first day of the search window, in UTC. The search includes fixtures that are scheduled on this day.
   *
   * Specify the date in ISO 8601 format, as `YYYY-MM-DD`. For example, 2026-03-14.
   *
   * @public
   */
  startDate: string | undefined;

  /**
   * The last day of the search window, in UTC. The search includes fixtures that are scheduled on this day. Specify the date in ISO 8601 format, as `YYYY-MM-DD`.
   *
   * If you omit this parameter, Elemental Inference searches only the day that you specified in startDate. The window from startDate through endDate must not exceed seven days.
   *
   * @public
   */
  endDate?: string | undefined;

  /**
   * An array of filters that narrow the results. Each filter applies to one dimension of a fixture, such as the competitor. You can specify up to 10 filters.
   *
   * A fixture must satisfy every filter in the array in order to appear in the results. Within one filter, a fixture must match at least one of the values.
   *
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * The maximum number of fixtures to return for each API request.
   *
   * The service might return fewer fixtures than the maxResults value. When more fixtures match the search, the response also includes a nextToken value that you can use to fetch the next batch of results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The token that identifies the batch of results that you want to see.
   *
   * For example, you submit a SearchFixtures request with maxResults set at 5. The service returns the first batch of results (up to 5) and a nextToken value. To see the next batch of results, you submit the SearchFixtures request a second time, with the same search criteria, and specify the nextToken value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Contains information about one fixture. It is used in the SearchFixtures response.
 *
 * Elemental Inference relays the information in this structure from the data source, so that you can identify the fixture that matches your source media.
 *
 * @public
 */
export interface FixtureSummary {
  /**
   * The ID of the fixture. Specify this ID in the clipping output of a feed, to identify the fixture whose event data you want Elemental Inference to map onto the clipping metadata.
   *
   * @public
   */
  fixtureId: string | undefined;

  /**
   * The name of the fixture, as provided by the data source. For example, the names of the two competing teams.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The group that the fixture belongs to, such as the competition, league, or tournament. The data source doesn't provide this information for every fixture.
   *
   * @public
   */
  fixtureGroup?: string | undefined;

  /**
   * The scheduled start time of the fixture, as provided by the data source. The actual start time might differ.
   *
   * @public
   */
  scheduledStart?: Date | undefined;

  /**
   * The status of the fixture in its lifecycle, as provided by the data source. For example, Scheduled or Completed.
   *
   * @public
   */
  status: string | undefined;

  /**
   * An array of the competitors (the teams or individuals) in the fixture.
   *
   * @public
   */
  competitors: Competitor[] | undefined;
}

/**
 * @public
 */
export interface SearchFixturesResponse {
  /**
   * An array of FixtureSummary objects, one for each fixture that matches the search. The array is empty if no fixtures match.
   *
   * @public
   */
  fixtures: FixtureSummary[] | undefined;

  /**
   * The token that identifies the next batch of results. To see the next batch, submit the SearchFixtures request again, with the same search criteria, and specify this value in nextToken.
   *
   * This parameter is absent when there are no more results to return.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the resource where you want to add tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * A list of tags to add to the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the resource where you want to delete one or more tags.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The keys of the tags to delete.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}
