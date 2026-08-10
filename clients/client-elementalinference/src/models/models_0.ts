// smithy-typescript generated code
import type {
  DataSourceSport,
  DictionaryLanguage,
  DictionaryStatus,
  FeedStatus,
  FilterName,
  OutputStatus,
  ProfanityFilterMode,
  TranscriptionLanguage,
} from "./enums";

/**
 * <p>The width and height of the output video. Used in SubtitlingConfig to determine subtitle layout. </p>
 * @public
 */
export interface AspectRatio {
  /**
   * <p>The width component of the aspect ratio (for example, 16 in a 16:9 ratio).</p>
   * @public
   */
  width: number | undefined;

  /**
   * <p>The height component of the aspect ratio (for example, 9 in a 16:9 ratio).</p>
   * @public
   */
  height: number | undefined;
}

/**
 * <p>Contains the data source configuration for a clipping output. It identifies the fixture whose event data Elemental Inference maps onto the clipping metadata. It is used in the dataSourceConfiguration property of a ClippingConfig. </p>
 * @public
 */
export interface DataSourceConfiguration {
  /**
   * <p>The ID of the fixture whose event data you want Elemental Inference to map onto this clipping output. The fixture should be the sports event in the source media that the feed is processing. </p> <p>To obtain this ID, use the SearchFixtures operation to find the fixture, then use the fixtureId from the matching FixtureSummary. </p>
   * @public
   */
  fixtureId: string | undefined;
}

/**
 * <p>A type of OutputConfig, used when the output in a feed is for the clip feature.</p>
 * @public
 */
export interface ClippingConfig {
  /**
   * <p>A string that you want Elemental Inference to always include in the event clipping metadata for this output. The string might identify the sports event in the source media, for example. </p>
   * @public
   */
  callbackMetadata?: string | undefined;

  /**
   * <p>The data source to map onto this clipping output. This parameter is optional. When you include this parameter, Elemental Inference reads the event data for the fixture that you specify, and includes that data in the event clipping metadata for this output. </p> <p>If you omit this parameter, Elemental Inference doesn't map a data source onto this output. </p>
   * @public
   */
  dataSourceConfiguration?: DataSourceConfiguration | undefined;
}

/**
 * <p>A named set of graphics-compositing templates used by the crop feature, specified in the templateGroups array of a CroppingConfig. </p>
 * @public
 */
export interface TemplateGroup {
  /**
   * <p>A name for the template group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>An array of Amazon S3 URIs that point to the graphics-compositing templates for this group. You can specify 1 or 2 URIs. Each URI must be in the form <code>s3://bucket-name/key</code>. Elemental Inference reads these templates using the IAM role that you specify in accessRoleArn. </p>
   * @public
   */
  templateUris: string[] | undefined;
}

/**
 * <p>A type of OutputConfig, used when the output in a feed is for the crop feature.</p>
 * @public
 */
export interface CroppingConfig {
  /**
   * <p>An array of template groups for the crop output. Each template group provides the graphics-compositing templates that Elemental Inference applies to the cropped video. You can specify from 1 to 4 template groups. </p>
   * @public
   */
  templateGroups?: TemplateGroup[] | undefined;
}

/**
 * <p>A type of OutputConfig, used when the output in a feed is for the smart subtitling feature. smart subtitling uses automatic speech recognition (ASR) to generate live TTML subtitles from the audio in your source media. </p>
 * @public
 */
export interface SubtitlingConfig {
  /**
   * <p>The language of the audio in the source media. Elemental Inference uses this setting to optimize transcription accuracy. Specify the language using an ISO 639-2/T three-letter code, optionally with a region subtag. Supported values: eng, eng-au, eng-gb, eng-us, fra, ita, deu, spa, por. </p>
   * @public
   */
  language: TranscriptionLanguage | undefined;

  /**
   * <p>The aspect ratio of the output video, specified as width and height integer values. Elemental Inference uses the aspect ratio to determine subtitle layout and line lengths. </p>
   * @public
   */
  aspectRatio?: AspectRatio | undefined;

  /**
   * <p>The ID of a custom dictionary to improve transcription accuracy for domain-specific terminology. Use the CreateDictionary operation to create a dictionary. </p>
   * @public
   */
  dictionary?: string | undefined;

  /**
   * <p>Controls how profanity is handled in the generated subtitles. Valid values: DISABLED (no filtering, default), CENSOR (replace profanity with asterisks), DROP (remove profanity from the transcript). </p>
   * @public
   */
  profanityFilter?: ProfanityFilterMode | undefined;
}

/**
 * <p>Contains one typed output. It is used in the CreateOutput, GetOutput, and Update Output structures.</p>
 * @public
 */
export type OutputConfig =
  | OutputConfig.ClippingMember
  | OutputConfig.CroppingMember
  | OutputConfig.SubtitlingMember
  | OutputConfig.$UnknownMember;

/**
 * @public
 */
export namespace OutputConfig {
  /**
   * <p>The output config type that applies to the cropping feature.</p>
   * @public
   */
  export interface CroppingMember {
    cropping: CroppingConfig;
    clipping?: never;
    subtitling?: never;
    $unknown?: never;
  }

  /**
   * <p>The output config type that applies to the clipping feature.</p>
   * @public
   */
  export interface ClippingMember {
    cropping?: never;
    clipping: ClippingConfig;
    subtitling?: never;
    $unknown?: never;
  }

  /**
   * <p>The output config type that applies to the smart subtitling feature.</p>
   * @public
   */
  export interface SubtitlingMember {
    cropping?: never;
    clipping?: never;
    subtitling: SubtitlingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    cropping?: never;
    clipping?: never;
    subtitling?: never;
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
    _: (name: string, value: any) => T;
  }
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the AssociateFeed and the CreateFeed actions. </p>
 * @public
 */
export interface CreateOutput {
  /**
   * <p>A name for the output.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status to assign to the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>A description for the output.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateFeedRequest {
  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An identifier for the resource. This name must not resemble an ARN.</p> <p>The resource is the source media that the feed will process. The name you assign should help you to later identify the source media that belongs to the feed. In this way, you will know which source media to push to the feed (using PutMedia). </p>
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * <p>An array of one or more outputs that you want to add to this feed now, to supplement any outputs that you specified when you created or updated the feed. </p>
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * <p>Set to true if you want to do a dry run of the associate action.</p> <p>Elemental Inference will validate that the real request would succeed without actually making any changes. A dry run catches errors such as missing IAM permissions, quota limits exceeded, conflicting outputs, and so on. If the dry run fails, the action returns a 4xx error code. After you've fixed the errors, resubmit the request. </p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Contains information about one competitor in a fixture. It is used in the FixtureSummary that is in the SearchFixtures response. </p>
 * @public
 */
export interface Competitor {
  /**
   * <p>The name of the competitor, as provided by the data source.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Specifies whether this competitor is the home side in the fixture. If true, this competitor is the home side. If false, this competitor is the away side. </p>
   * @public
   */
  isHome?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateDictionaryRequest {
  /**
   * <p>A user-friendly name for this dictionary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The language of the dictionary entries. Specify the language using an ISO 639-2/T three-letter code. Supported values: eng, fra, ita, deu, spa, por. </p>
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * <p>The dictionary entries payload. Contains the custom words and phrases for the dictionary. Maximum size is 40,960 characters. </p>
   * @public
   */
  entries?: string | undefined;

  /**
   * <p>Optional tags to associate with the dictionary.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDictionaryResponse {
  /**
   * <p>The name that you specified in the request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the dictionary.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>A unique ID that Elemental Inference assigns to the dictionary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The language of the dictionary.</p>
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * <p>The current status of the dictionary. After creation succeeds, the status will be AVAILABLE. </p>
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * <p>A list of feed IDs that reference this dictionary.</p>
   * @public
   */
  references?: string[] | undefined;

  /**
   * <p>Any tags that you included when you created the dictionary.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateFeedRequest {
  /**
   * <p>A user-friendly name for this feed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of an IAM role that Elemental Inference assumes to access resources in your account on your behalf. For example, the smart crop feature uses this role to read graphics-compositing templates from your Amazon S3 bucket. You specify one access role for each feed. </p>
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * <p>An array of outputs for this feed. Each output represents a specific Elemental Inference feature. For example, there is one output type for the smart crop feature. You must specify at least one output, but you can later add outputs using AssociateFeed, or add, modify, and delete outputs using UpdateFeed. </p>
   * @public
   */
  outputs: CreateOutput[] | undefined;

  /**
   * <p>Optional tags. You can also add tags later, using TagResource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Contains information about the resource that is associated with a feed. It is used in the FeedSummary that is used in the response of a ListFeeds action. </p>
 * @public
 */
export interface FeedAssociation {
  /**
   * <p>The name of the associated resource.</p>
   * @public
   */
  associatedResourceName: string | undefined;
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the GetFeed response. </p>
 * @public
 */
export interface GetOutput {
  /**
   * <p>The name of the output.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status of the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>The description of the output.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>True means that the output was originally created in the feed using AssociateFeed. False means it was created using CreateFeed or UpdateFeed. </p> <p>You will need this value if you use UpdateFeed to modify the list of outputs in the feed.</p>
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateFeedResponse {
  /**
   * <p>A unique ARN that Elemental Inference assigns to the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name that you specified in the request.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A unique ID that Elemental Inference assigns to the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>An array of endpoints for the feed. Typically, there is only one endpoint. The feed receives source media at this endpoint (when the calling application calls PutMedia) and returns the resulting metadata to this endpoint (when the calling application calls GetMetadata). </p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>Repeats the outputs that you specified in the request.</p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The current status of the feed. After creation of the feed has succeeded, the status will be AVAILABLE. </p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>The association for this feed. When you create the feed, this property is empty. You must associate a resource with the feed using AssociateFeed or UpdateFeed. </p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>Any tags that you included when you created the feed.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteDictionaryRequest {
  /**
   * <p>The ID of the dictionary to delete.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDictionaryResponse {
  /**
   * <p>The ARN of the deleted dictionary.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the deleted dictionary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the dictionary after deletion.</p>
   * @public
   */
  status: DictionaryStatus | undefined;
}

/**
 * @public
 */
export interface DeleteFeedRequest {
  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteFeedResponse {
  /**
   * <p>The ARN of the deleted feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the deleted feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The current status of the feed. When deletion of the feed has succeeded, the status will be DELETED. </p>
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface ExportDictionaryEntriesRequest {
  /**
   * <p>The ID of the dictionary whose entries you want to export.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ExportDictionaryEntriesResponse {
  /**
   * <p>The dictionary entries payload.</p>
   * @public
   */
  entries?: string | undefined;
}

/**
 * @public
 */
export interface GetDictionaryRequest {
  /**
   * <p>The ID of the dictionary to retrieve.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDictionaryResponse {
  /**
   * <p>The name of the dictionary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the dictionary.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the dictionary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The language of the dictionary.</p>
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * <p>The current status of the dictionary.</p>
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * <p>A list of feed IDs that reference this dictionary.</p>
   * @public
   */
  references?: string[] | undefined;

  /**
   * <p>The tags associated with the dictionary.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListDictionariesRequest {
  /**
   * <p>The maximum number of results to return per API request. Valid range: 1 to 100.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that identifies the next batch of results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains summary information about a dictionary. Used in the ListDictionaries response. </p>
 * @public
 */
export interface DictionarySummary {
  /**
   * <p>The ARN of the dictionary.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the dictionary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the dictionary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The language of the dictionary.</p>
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * <p>The status of the dictionary.</p>
   * @public
   */
  status: DictionaryStatus | undefined;
}

/**
 * @public
 */
export interface ListDictionariesResponse {
  /**
   * <p>A list of DictionarySummary objects.</p>
   * @public
   */
  dictionaries: DictionarySummary[] | undefined;

  /**
   * <p>The token to use to retrieve the next batch of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDictionaryRequest {
  /**
   * <p>The ID of the dictionary to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>A new name for the dictionary. If not specified, the name is not changed.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A new language for the dictionary. If not specified, the language is not changed.</p>
   * @public
   */
  language?: DictionaryLanguage | undefined;

  /**
   * <p>New dictionary entries. If not specified, the entries are not changed.</p>
   * @public
   */
  entries?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDictionaryResponse {
  /**
   * <p>The updated or original name of the dictionary.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the dictionary.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the dictionary.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The updated or original language of the dictionary.</p>
   * @public
   */
  language: DictionaryLanguage | undefined;

  /**
   * <p>The current status of the dictionary.</p>
   * @public
   */
  status: DictionaryStatus | undefined;

  /**
   * <p>A list of feed IDs that reference this dictionary.</p>
   * @public
   */
  references?: string[] | undefined;

  /**
   * <p>Any tags associated with the dictionary.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedRequest {
  /**
   * <p>The ID of the feed where you want to release the resource.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the resource currently associated with the feed.</p>
   * @public
   */
  associatedResourceName?: string | undefined;

  /**
   * <p>Set to true if you want to do a dry run of the disassociate action.</p> <p>Elemental Inference will validate that the real request would succeed without actually making any changes. A dry run catches errors such as missing IAM permissions. If the dry run fails, the action returns a 4xx error code. </p>
   * @public
   */
  dryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedRequest {
  /**
   * <p>The ID of the feed to query.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The name of the feed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The dataEndpoints of the feed.</p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>An array of the outputs in the feed.</p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The status of the feed.</p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>Information about the resource that is associated with the feed. It's possible that there is no associated resource. This is not an error. </p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>A list of the tags, if any, for the feed.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListFeedsRequest {
  /**
   * <p>The maximum number of results to return per API request.</p> <p>For example, you submit a list request with MaxResults set at 5. Although 20 items match your request, the service returns no more than the first 5 items. (The service also returns a NextToken value that you can use to fetch the next batch of results.) </p> <p>The service might return fewer results than the MaxResults value. If MaxResults is not included in the request, the service defaults to pagination with a maximum of 10 results per page. </p> <p>Valid Range: Minimum value of 1. Maximum value of 1000.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see.</p> <p>For example, you submit a ListFeeds request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the ListFeeds request a second time and specify the NextToken value. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration information about a feed. It is used in the ListFeeds response. </p>
 * @public
 */
export interface FeedSummary {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the feed</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The resource, if any, associated with the feed.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>The status of the feed.</p>
   * @public
   */
  status: FeedStatus | undefined;
}

/**
 * @public
 */
export interface ListFeedsResponse {
  /**
   * <p>A list of FeedSummary objects.</p>
   * @public
   */
  feeds: FeedSummary[] | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see. For example, you submit a list request with MaxResults set at 5. The service returns the first batch of results (up to 5) and a NextToken value. To see the next batch of results, you can submit the list request a second time and specify the NextToken value. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains configuration information about one output in a feed. It is used in the UpdateFeed action. </p>
 * @public
 */
export interface UpdateOutput {
  /**
   * <p>The name of the output.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>A typed property for an output in a feed. It identifies the action for Elemental Inference to perform. It also provides a repository for the results of that action. For example, CroppingConfig output will contain the metadata for the crop feature. </p>
   * @public
   */
  outputConfig: OutputConfig | undefined;

  /**
   * <p>The status of the output.</p>
   * @public
   */
  status: OutputStatus | undefined;

  /**
   * <p>A description of the output.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>Elemental Inference originally sets this parameter to True if this output was created by AssociateFeed or to False if this output was created by CreateFeed or UpdateFeed. </p> <p>You must not change this value. Therefore, use GetFeed to determine the current value. Then in the UpdateFeed request, if the current value is True, include this parameter with a value of True. If it's False, omit the parameter. </p>
   * @public
   */
  fromAssociation?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateFeedRequest {
  /**
   * <p>Required. You can specify the existing name (to leave it unchanged) or a new name. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of an IAM role that Elemental Inference assumes to access resources in your account on your behalf. You can specify the existing role (to leave it unchanged) or a new role. You specify one access role for each feed. </p>
   * @public
   */
  accessRoleArn?: string | undefined;

  /**
   * <p>The ID of the feed to update.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Required. You can specify the existing array of outputs (to leave outputs unchanged) or you can specify a new array. </p>
   * @public
   */
  outputs: UpdateOutput[] | undefined;
}

/**
 * @public
 */
export interface UpdateFeedResponse {
  /**
   * <p>The ARN of the feed.</p>
   * @public
   */
  arn: string | undefined;

  /**
   * <p>The updated or original name of the feed.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ID of the feed.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The data endpoints of the feed.</p>
   * @public
   */
  dataEndpoints: string[] | undefined;

  /**
   * <p>The array of outputs in the feed. You might have left this array unchanged, or you might have changed it. </p>
   * @public
   */
  outputs: GetOutput[] | undefined;

  /**
   * <p>The status of the feed.</p>
   * @public
   */
  status: FeedStatus | undefined;

  /**
   * <p>Information about the resource that is associated with the feed, if any.</p>
   * @public
   */
  association?: FeedAssociation | undefined;

  /**
   * <p>The tags associated with the feed.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource whose tags you want to query.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of the tags that belong to this resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>A filter for a fixture search. It is used in the filters array of a SearchFixtures request. </p>
 * @public
 */
export interface SearchFilter {
  /**
   * <p>The dimension of the fixture to filter on. Valid values: COMPETITOR.</p>
   * @public
   */
  name: FilterName | undefined;

  /**
   * <p>An array of values to match in the dimension that you specified in name. You can specify up to 10 values. A fixture appears in the results if it matches at least one of these values. </p>
   * @public
   */
  values: string[] | undefined;
}

/**
 * @public
 */
export interface SearchFixturesRequest {
  /**
   * <p>The sport to search for fixtures. Valid values: basketball (search for basketball fixtures), american-football (search for american-football fixtures). </p>
   * @public
   */
  sport: DataSourceSport | undefined;

  /**
   * <p>The first day of the search window, in UTC. The search includes fixtures that are scheduled on this day. </p> <p>Specify the date in ISO 8601 format, as <code>YYYY-MM-DD</code>. For example, 2026-03-14. </p>
   * @public
   */
  startDate: string | undefined;

  /**
   * <p>The last day of the search window, in UTC. The search includes fixtures that are scheduled on this day. Specify the date in ISO 8601 format, as <code>YYYY-MM-DD</code>. </p> <p>If you omit this parameter, Elemental Inference searches only the day that you specified in startDate. The window from startDate through endDate must not exceed seven days. </p>
   * @public
   */
  endDate?: string | undefined;

  /**
   * <p>An array of filters that narrow the results. Each filter applies to one dimension of a fixture, such as the competitor. You can specify up to 10 filters. </p> <p>A fixture must satisfy every filter in the array in order to appear in the results. Within one filter, a fixture must match at least one of the values. </p>
   * @public
   */
  filters?: SearchFilter[] | undefined;

  /**
   * <p>The maximum number of fixtures to return for each API request.</p> <p>The service might return fewer fixtures than the maxResults value. When more fixtures match the search, the response also includes a nextToken value that you can use to fetch the next batch of results. </p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The token that identifies the batch of results that you want to see.</p> <p>For example, you submit a SearchFixtures request with maxResults set at 5. The service returns the first batch of results (up to 5) and a nextToken value. To see the next batch of results, you submit the SearchFixtures request a second time, with the same search criteria, and specify the nextToken value. </p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Contains information about one fixture. It is used in the SearchFixtures response.</p> <p>Elemental Inference relays the information in this structure from the data source, so that you can identify the fixture that matches your source media. </p>
 * @public
 */
export interface FixtureSummary {
  /**
   * <p>The ID of the fixture. Specify this ID in the clipping output of a feed, to identify the fixture whose event data you want Elemental Inference to map onto the clipping metadata. </p>
   * @public
   */
  fixtureId: string | undefined;

  /**
   * <p>The name of the fixture, as provided by the data source. For example, the names of the two competing teams. </p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The group that the fixture belongs to, such as the competition, league, or tournament. The data source doesn't provide this information for every fixture. </p>
   * @public
   */
  fixtureGroup?: string | undefined;

  /**
   * <p>The scheduled start time of the fixture, as provided by the data source. The actual start time might differ. </p>
   * @public
   */
  scheduledStart?: Date | undefined;

  /**
   * <p>The status of the fixture in its lifecycle, as provided by the data source. For example, Scheduled or Completed. </p>
   * @public
   */
  status: string | undefined;

  /**
   * <p>An array of the competitors (the teams or individuals) in the fixture.</p>
   * @public
   */
  competitors: Competitor[] | undefined;
}

/**
 * @public
 */
export interface SearchFixturesResponse {
  /**
   * <p>An array of FixtureSummary objects, one for each fixture that matches the search. The array is empty if no fixtures match. </p>
   * @public
   */
  fixtures: FixtureSummary[] | undefined;

  /**
   * <p>The token that identifies the next batch of results. To see the next batch, submit the SearchFixtures request again, with the same search criteria, and specify this value in nextToken. </p> <p>This parameter is absent when there are no more results to return.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the resource where you want to add tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>A list of tags to add to the resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the resource where you want to delete one or more tags.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The keys of the tags to delete.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}
