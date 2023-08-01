// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { KendraServiceException as __BaseException } from "./KendraServiceException";
import {
  AdditionalResultAttribute,
  AttributeSuggestionsUpdateConfig,
  CapacityUnitsConfiguration,
  CustomDocumentEnrichmentConfiguration,
  DataSourceConfiguration,
  DataSourceVpcConfiguration,
  DocumentAttribute,
  DocumentAttributeValue,
  DocumentAttributeValueType,
  DocumentMetadataConfiguration,
  DocumentRelevanceConfiguration,
  ExperienceConfiguration,
  FeaturedDocument,
  FeaturedResultsItem,
  FeaturedResultsSet,
  FeaturedResultsSetStatus,
  HierarchicalPrincipal,
  Mode,
  Principal,
  QueryResultFormat,
  QueryResultType,
  S3Path,
  ScoreAttributes,
  SortingConfiguration,
  SpellCorrectionConfiguration,
  SuggestionType,
  TableExcerpt,
  Tag,
  TextWithHighlights,
  UserContext,
  UserContextPolicy,
  UserGroupResolutionConfiguration,
  UserTokenConfiguration,
} from "./models_0";

/**
 * @public
 * <p>A single query result.</p>
 *          <p>A query result contains information about a document returned by the query. This
 *          includes the original location of the document, a list of attributes assigned to the
 *          document, and relevant text from the document that satisfies the query.</p>
 */
export interface QueryResultItem {
  /**
   * @public
   * <p>The identifier for the query result.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The type of document within the response. For example, a response could include a
   *          question-answer that's relevant to the query.</p>
   */
  Type?: QueryResultType | string;

  /**
   * @public
   * <p>If the <code>Type</code> of document within the response is <code>ANSWER</code>, then it
   *          is either a <code>TABLE</code> answer or <code>TEXT</code> answer. If it's a table answer,
   *          a table excerpt is returned in <code>TableExcerpt</code>. If it's a text answer, a text
   *          excerpt is returned in <code>DocumentExcerpt</code>.</p>
   */
  Format?: QueryResultFormat | string;

  /**
   * @public
   * <p>One or more additional fields/attributes associated with the query result.</p>
   */
  AdditionalAttributes?: AdditionalResultAttribute[];

  /**
   * @public
   * <p>The identifier for the document.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>The title of the document. Contains the text of the title and information for
   *          highlighting the relevant terms in the title.</p>
   */
  DocumentTitle?: TextWithHighlights;

  /**
   * @public
   * <p>An extract of the text in the document. Contains information about highlighting the
   *          relevant terms in the excerpt.</p>
   */
  DocumentExcerpt?: TextWithHighlights;

  /**
   * @public
   * <p>The URI of the original location of the document.</p>
   */
  DocumentURI?: string;

  /**
   * @public
   * <p>An array of document fields/attributes assigned to a document in the search results.
   *          For example, the document author (<code>_author</code>) or the source URI
   *          (<code>_source_uri</code>) of the document.</p>
   */
  DocumentAttributes?: DocumentAttribute[];

  /**
   * @public
   * <p>Indicates the confidence level of Amazon Kendra providing a relevant result for
   *          the query. Each result is placed into a bin that indicates the confidence,
   *             <code>VERY_HIGH</code>, <code>HIGH</code>, <code>MEDIUM</code> and <code>LOW</code>.
   *          You can use the score to determine if a response meets the confidence needed for your
   *          application.</p>
   *          <p>The field is only set to <code>LOW</code> when the <code>Type</code> field is set to
   *             <code>DOCUMENT</code> and Amazon Kendra is not confident that the result is
   *          relevant to the query.</p>
   */
  ScoreAttributes?: ScoreAttributes;

  /**
   * @public
   * <p>A token that identifies a particular result from a particular query. Use this token to
   *          provide click-through feedback for the result. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/submitting-feedback.html">Submitting feedback</a>.</p>
   */
  FeedbackToken?: string;

  /**
   * @public
   * <p>An excerpt from a table within a document.</p>
   */
  TableExcerpt?: TableExcerpt;
}

/**
 * @public
 * <p>A corrected misspelled word in a query.</p>
 */
export interface Correction {
  /**
   * @public
   * <p>The zero-based location in the response string or text where
   *             the corrected word starts.</p>
   */
  BeginOffset?: number;

  /**
   * @public
   * <p>The zero-based location in the response string or text where
   *             the corrected word ends.</p>
   */
  EndOffset?: number;

  /**
   * @public
   * <p>The string or text of a misspelled word in a query.</p>
   */
  Term?: string;

  /**
   * @public
   * <p>The string or text of a corrected misspelled word in a query.</p>
   */
  CorrectedTerm?: string;
}

/**
 * @public
 * <p>A query with suggested spell corrections. </p>
 */
export interface SpellCorrectedQuery {
  /**
   * @public
   * <p>The query with the suggested spell corrections.</p>
   */
  SuggestedQueryText?: string;

  /**
   * @public
   * <p>The corrected misspelled word or words in a query.</p>
   */
  Corrections?: Correction[];
}

/**
 * @public
 * @enum
 */
export const WarningCode = {
  QUERY_LANGUAGE_INVALID_SYNTAX: "QUERY_LANGUAGE_INVALID_SYNTAX",
} as const;

/**
 * @public
 */
export type WarningCode = (typeof WarningCode)[keyof typeof WarningCode];

/**
 * @public
 * <p>The warning code and message that explains a problem with a query.</p>
 */
export interface Warning {
  /**
   * @public
   * <p>The message that explains the problem with the query.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The code used to show the type of warning for the query.</p>
   */
  Code?: WarningCode | string;
}

/**
 * @public
 * <p>A single retrieved relevant passage result.</p>
 */
export interface RetrieveResultItem {
  /**
   * @public
   * <p>The identifier of the relevant passage result.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The identifier of the document.</p>
   */
  DocumentId?: string;

  /**
   * @public
   * <p>The title of the document.</p>
   */
  DocumentTitle?: string;

  /**
   * @public
   * <p>The contents of the relevant passage.</p>
   */
  Content?: string;

  /**
   * @public
   * <p>The URI of the original location of the document.</p>
   */
  DocumentURI?: string;

  /**
   * @public
   * <p>An array of document fields/attributes assigned to a document in the
   *             search results. For example, the document author (<code>_author</code>)
   *             or the source URI (<code>_source_uri</code>) of the document.</p>
   */
  DocumentAttributes?: DocumentAttribute[];
}

/**
 * @public
 */
export interface RetrieveResult {
  /**
   * @public
   * <p>The identifier of query used for the search. You also use <code>QueryId</code> to
   *             identify the search when using the <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_SubmitFeedback.html">Submitfeedback</a> API.</p>
   */
  QueryId?: string;

  /**
   * @public
   * <p>The results of the retrieved relevant passages for the search.</p>
   */
  ResultItems?: RetrieveResultItem[];
}

/**
 * @public
 * <p>The resource you want to use is currently in use. Please check you have provided the
 *             correct resource and try again.</p>
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  Message?: string;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartDataSourceSyncJobRequest {
  /**
   * @public
   * <p>The identifier of the data source connector to synchronize.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * @public
   * <p>Identifies a particular synchronization job.</p>
   */
  ExecutionId?: string;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * @public
   * <p>The identifier of the data source connector for which to stop the synchronization
   *       jobs.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 * <p>Gathers information about when a particular result was clicked by a user. Your
 *             application uses the <code>SubmitFeedback</code> API to provide click
 *             information.</p>
 */
export interface ClickFeedback {
  /**
   * @public
   * <p>The identifier of the search result that was clicked.</p>
   */
  ResultId: string | undefined;

  /**
   * @public
   * <p>The Unix timestamp when the result was clicked.</p>
   */
  ClickTime: Date | undefined;
}

/**
 * @public
 * @enum
 */
export const RelevanceType = {
  NOT_RELEVANT: "NOT_RELEVANT",
  RELEVANT: "RELEVANT",
} as const;

/**
 * @public
 */
export type RelevanceType = (typeof RelevanceType)[keyof typeof RelevanceType];

/**
 * @public
 * <p>Provides feedback on how relevant a document is to a search. Your application uses the
 *             <code>SubmitFeedback</code> API to provide relevance information.</p>
 */
export interface RelevanceFeedback {
  /**
   * @public
   * <p>The identifier of the search result that the user provided relevance feedback
   *             for.</p>
   */
  ResultId: string | undefined;

  /**
   * @public
   * <p>Whether the document was relevant or not relevant to the search.</p>
   */
  RelevanceValue: RelevanceType | string | undefined;
}

/**
 * @public
 */
export interface SubmitFeedbackRequest {
  /**
   * @public
   * <p>The identifier of the index that was queried.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the specific query for which you are submitting
   *             feedback. The query ID is returned in the response to the
   *                 <code>Query</code> API.</p>
   */
  QueryId: string | undefined;

  /**
   * @public
   * <p>Tells Amazon Kendra that a particular search result link was chosen
   *             by the user. </p>
   */
  ClickFeedbackItems?: ClickFeedback[];

  /**
   * @public
   * <p>Provides Amazon Kendra with relevant or not relevant feedback for
   *             whether a particular item was relevant to the search.</p>
   */
  RelevanceFeedbackItems?: RelevanceFeedback[];
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to add to the index, FAQ, or data source. If a tag already exists, the
   *       existing value is replaced with the new value.</p>
   */
  Tags: Tag[] | undefined;
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
   * @public
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag
   *       from.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to remove from the index, FAQ, or data source. If a tag key does not
   *       exist on the resource, it is ignored.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccessControlConfigurationRequest {
  /**
   * @public
   * <p>The identifier of the index for an access control configuration.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the access control configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A new name for the access control configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A new description for the access control configuration.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Information you want to update on principals (users and/or groups) and which documents
   *             they should have access to. This is useful for user context filtering, where search
   *             results are filtered based on the user or their group access to documents.</p>
   */
  AccessControlList?: Principal[];

  /**
   * @public
   * <p>The updated list of <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_Principal.html">principal</a> lists that define the
   *             hierarchy for which documents users should have access to.</p>
   */
  HierarchicalAccessControlList?: HierarchicalPrincipal[];
}

/**
 * @public
 */
export interface UpdateAccessControlConfigurationResponse {}

/**
 * @public
 */
export interface UpdateDataSourceRequest {
  /**
   * @public
   * <p>The identifier of the data source connector you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A new name for the data source connector.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>Configuration information you want to update for the data source connector.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * @public
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your data source.
   *       For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * @public
   * <p>A new description for the data source connector.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The sync schedule you want to update for the data source connector.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source and
   *       required resources. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The code for a language you want to update for the data source connector.
   *             This allows you to support a language for all
   *             documents when updating the data source. English is supported
   *             by default. For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;

  /**
   * @public
   * <p>Configuration information you want to update for altering document metadata and
   *             content during the document ingestion process.</p>
   *          <p>For more information on how to create, modify and delete document metadata, or make
   *             other content alterations when you ingest documents into Amazon Kendra, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/custom-document-enrichment.html">Customizing document metadata during the ingestion process</a>.</p>
   */
  CustomDocumentEnrichmentConfiguration?: CustomDocumentEnrichmentConfiguration;
}

/**
 * @public
 */
export interface UpdateExperienceRequest {
  /**
   * @public
   * <p>The identifier of your Amazon Kendra experience you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A new name for your Amazon Kendra experience.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a role with permission to access <code>Query</code>
   *             API, <code>QuerySuggestions</code> API, <code>SubmitFeedback</code>
   *             API, and IAM Identity Center that stores your user and group information.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Configuration information you want to update for your Amazon Kendra experience.</p>
   */
  Configuration?: ExperienceConfiguration;

  /**
   * @public
   * <p>A new description for your Amazon Kendra experience.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateFeaturedResultsSetRequest {
  /**
   * @public
   * <p>The identifier of the index used for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the set of featured results that you want to update.</p>
   */
  FeaturedResultsSetId: string | undefined;

  /**
   * @public
   * <p>A new name for the set of featured results.</p>
   */
  FeaturedResultsSetName?: string;

  /**
   * @public
   * <p>A new description for the set of featured results.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>.
   *             When the value is <code>ACTIVE</code>, featured results are ready for
   *             use. You can still configure your settings before setting the status
   *             to <code>ACTIVE</code>. The queries you specify for featured results
   *             must be unique per featured results set for each index, whether the
   *             status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * @public
   * <p>A list of queries for featuring results. For more information on the
   *             list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  QueryTexts?: string[];

  /**
   * @public
   * <p>A list of document IDs for the documents you want to feature at the
   *             top of the search results page. For more information on the list of
   *             featured documents, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  FeaturedDocuments?: FeaturedDocument[];
}

/**
 * @public
 */
export interface UpdateFeaturedResultsSetResponse {
  /**
   * @public
   * <p>Information on the set of featured results. This includes the identifier
   *             of the featured results set, whether the featured results set is active
   *             or inactive, when the featured results set was last updated, and more.</p>
   */
  FeaturedResultsSet?: FeaturedResultsSet;
}

/**
 * @public
 */
export interface UpdateIndexRequest {
  /**
   * @public
   * <p>The identifier of the index you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the index you want to update.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>An Identity and Access Management (IAM) role that gives Amazon Kendra
   *       permission to access Amazon CloudWatch logs and metrics.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>A new description for the index.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The document metadata configuration you want to update for the index. Document metadata
   *       are fields or attributes associated with your documents. For example, the company department
   *       name associated with each document.</p>
   */
  DocumentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];

  /**
   * @public
   * <p>Sets the number of additional document storage and query capacity units that should be
   *       used by the index. You can change the capacity of the index up to 5 times per day, or make 5
   *       API calls.</p>
   *          <p>If you are using extra storage units, you can't reduce the storage capacity below what is
   *       required to meet the storage needs for your index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * @public
   * <p>The user token configuration.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * @public
   * <p>The user context policy.</p>
   */
  UserContextPolicy?: UserContextPolicy | string;

  /**
   * @public
   * <p>Enables fetching access levels of groups and users from an IAM Identity Center (successor to Single Sign-On)
   *          identity source. To configure this, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_UserGroupResolutionConfiguration.html">UserGroupResolutionConfiguration</a>.</p>
   */
  UserGroupResolutionConfiguration?: UserGroupResolutionConfiguration;
}

/**
 * @public
 */
export interface UpdateQuerySuggestionsBlockListRequest {
  /**
   * @public
   * <p>The identifier of the index for the block list.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The identifier of the block list you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A new name for the block list.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A new description for the block list.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The S3 path where your block list text file sits in S3.</p>
   *          <p>If you update your block list and provide the same path to the
   *             block list text file in S3, then Amazon Kendra reloads the file to refresh
   *             the block list. Amazon Kendra does not automatically refresh your block list.
   *             You need to call the <code>UpdateQuerySuggestionsBlockList</code> API
   *             to refresh you block list.</p>
   *          <p>If you update your block list, then Amazon Kendra asynchronously refreshes
   *             all query suggestions with the latest content in the S3 file. This
   *             means changes might not take effect immediately.</p>
   */
  SourceS3Path?: S3Path;

  /**
   * @public
   * <p>The IAM (Identity and Access Management) role used to access the
   *             block list text file in S3.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateQuerySuggestionsConfigRequest {
  /**
   * @public
   * <p> The identifier of the index with query suggestions you want to update.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>Set the mode to <code>ENABLED</code> or <code>LEARN_ONLY</code>.</p>
   *          <p>By default, Amazon Kendra enables query suggestions.
   *             <code>LEARN_ONLY</code> mode allows you to turn off query suggestions.
   *             You can to update this at any time.</p>
   *          <p>In <code>LEARN_ONLY</code> mode, Amazon Kendra continues to learn from new
   *             queries to keep suggestions up to date for when you are ready to
   *             switch to ENABLED mode again.</p>
   */
  Mode?: Mode | string;

  /**
   * @public
   * <p>How recent your queries are in your query log time window.</p>
   *          <p>The time window is the number of days from current day to past days.</p>
   *          <p>By default, Amazon Kendra sets this to 180.</p>
   */
  QueryLogLookBackWindowInDays?: number;

  /**
   * @public
   * <p>
   *             <code>TRUE</code> to include queries without user information (i.e. all queries,
   *             irrespective of the user), otherwise <code>FALSE</code> to only include queries
   *             with user information.</p>
   *          <p>If you pass user information to Amazon Kendra along with the queries, you can set this
   *             flag to <code>FALSE</code> and instruct Amazon Kendra to only consider queries with user
   *             information.</p>
   *          <p>If you set to <code>FALSE</code>, Amazon Kendra only considers queries searched at least
   *             <code>MinimumQueryCount</code> times across <code>MinimumNumberOfQueryingUsers</code>
   *             unique users for suggestions.</p>
   *          <p>If you set to <code>TRUE</code>, Amazon Kendra ignores all user information and learns
   *             from all queries.</p>
   */
  IncludeQueriesWithoutUserInformation?: boolean;

  /**
   * @public
   * <p>The minimum number of unique users who must search a query in order for the query
   *             to be eligible to suggest to your users.</p>
   *          <p>Increasing this number might decrease the number of suggestions. However, this
   *             ensures a query is searched by many users and is truly popular to suggest to users.</p>
   *          <p>How you tune this setting depends on your specific needs.</p>
   */
  MinimumNumberOfQueryingUsers?: number;

  /**
   * @public
   * <p>The the minimum number of times a query must be searched in order to be
   *             eligible to suggest to your users.</p>
   *          <p>Decreasing this number increases the number of suggestions. However, this
   *             affects the quality of suggestions as it sets a low bar for a query to be
   *             considered popular to suggest to users.</p>
   *          <p>How you tune this setting depends on your specific needs.</p>
   */
  MinimumQueryCount?: number;

  /**
   * @public
   * <p>Configuration information for the document fields/attributes that you want to base
   *             query suggestions on.</p>
   */
  AttributeSuggestionsConfig?: AttributeSuggestionsUpdateConfig;
}

/**
 * @public
 */
export interface UpdateThesaurusRequest {
  /**
   * @public
   * <p>The identifier of the thesaurus you want to update.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>A new name for the thesaurus.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>A new description for the thesaurus.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>An IAM role that gives Amazon Kendra permissions to
   *          access thesaurus file specified in <code>SourceS3Path</code>.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Information required to find a specific file in an Amazon S3 bucket.</p>
   */
  SourceS3Path?: S3Path;
}

/**
 * @public
 * <p>Information about a document attribute. You can use document attributes as
 *          facets.</p>
 *          <p>For example, the document attribute or facet "Department" includes the values "HR",
 *          "Engineering", and "Accounting". You can display these values in the search results so that
 *          documents can be searched by department.</p>
 *          <p>You can display up to 10 facet values per facet for a query. If you want to increase
 *          this limit, contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
 */
export interface Facet {
  /**
   * @public
   * <p>The unique key for the document attribute.</p>
   */
  DocumentAttributeKey?: string;

  /**
   * @public
   * <p>An array of document attributes that are nested facets within a facet.</p>
   *          <p>For example, the document attribute or facet "Department" includes a value called
   *          "Engineering". In addition, the document attribute or facet "SubDepartment" includes the
   *          values "Frontend" and "Backend" for documents assigned to "Engineering". You can display
   *          nested facets in the search results so that documents can be searched not only by
   *          department but also by a sub department within a department. This helps your users further
   *          narrow their search.</p>
   *          <p>You can only have one nested facet within a facet. If you want to increase this limit,
   *          contact <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
   */
  Facets?: Facet[];

  /**
   * @public
   * <p>Maximum number of facet values per facet. The default is 10. You can use this to limit
   *          the number of facet values to less than 10. If you want to increase the default, contact
   *             <a href="http://aws.amazon.com/contact-us/">Support</a>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Provides the count of documents that match a particular attribute when doing a faceted
 *          search.</p>
 */
export interface DocumentAttributeValueCountPair {
  /**
   * @public
   * <p>The value of the attribute. For example, "HR".</p>
   */
  DocumentAttributeValue?: DocumentAttributeValue;

  /**
   * @public
   * <p>The number of documents in the response that have the attribute value for the
   *          key.</p>
   */
  Count?: number;

  /**
   * @public
   * <p>Contains the results of a document attribute that is a nested facet. A
   *             <code>FacetResult</code> contains the counts for each facet nested within a
   *          facet.</p>
   *          <p>For example, the document attribute or facet "Department" includes a value called
   *          "Engineering". In addition, the document attribute or facet "SubDepartment" includes the
   *          values "Frontend" and "Backend" for documents assigned to "Engineering". You can display
   *          nested facets in the search results so that documents can be searched not only by
   *          department but also by a sub department within a department. The counts for documents that
   *          belong to "Frontend" and "Backend" within "Engineering" are returned for a query.</p>
   *          <p></p>
   *          <p></p>
   */
  FacetResults?: FacetResult[];
}

/**
 * @public
 * <p>The facet values for the documents in the response.</p>
 */
export interface FacetResult {
  /**
   * @public
   * <p>The key for the facet values. This is the same as the <code>DocumentAttributeKey</code>
   *          provided in the query.</p>
   */
  DocumentAttributeKey?: string;

  /**
   * @public
   * <p>The data type of the facet value. This is the same as the type defined for the index
   *          field when it was created.</p>
   */
  DocumentAttributeValueType?: DocumentAttributeValueType | string;

  /**
   * @public
   * <p>An array of key/value pairs, where the key is the value of the attribute and the count
   *          is the number of documents that share the key value.</p>
   */
  DocumentAttributeValueCountPairs?: DocumentAttributeValueCountPair[];
}

/**
 * @public
 * <p>Provides filtering the query results based on document attributes or metadata
 *          fields.</p>
 *          <p>When you use the <code>AndAllFilters</code> or <code>OrAllFilters</code>, filters you
 *          can use 2 layers under the first attribute filter. For example, you can use:</p>
 *          <p>
 *             <code><AndAllFilters></code>
 *          </p>
 *          <ol>
 *             <li>
 *                <p>
 *                   <code> <OrAllFilters></code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code> <EqualsTo></code>
 *                </p>
 *             </li>
 *          </ol>
 *          <p>If you use more than 2 layers, you receive a <code>ValidationException</code> exception
 *          with the message "<code>AttributeFilter</code> cannot have a depth of more than 2."</p>
 *          <p>If you use more than 10 attribute filters in a given list for <code>AndAllFilters</code>
 *          or <code>OrAllFilters</code>, you receive a <code>ValidationException</code> with the
 *          message "<code>AttributeFilter</code> cannot have a length of more than 10".</p>
 */
export interface AttributeFilter {
  /**
   * @public
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   */
  AndAllFilters?: AttributeFilter[];

  /**
   * @public
   * <p>Performs a logical <code>OR</code> operation on all supplied filters.</p>
   */
  OrAllFilters?: AttributeFilter[];

  /**
   * @public
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters.</p>
   */
  NotFilter?: AttributeFilter;

  /**
   * @public
   * <p>Performs an equals operation on two document attributes or metadata fields.</p>
   */
  EqualsTo?: DocumentAttribute;

  /**
   * @public
   * <p>Returns true when a document contains all of the specified document attributes or
   *          metadata fields. This filter is only applicable to <code>StringListValue</code>
   *          metadata.</p>
   */
  ContainsAll?: DocumentAttribute;

  /**
   * @public
   * <p>Returns true when a document contains any of the specified document attributes or
   *          metadata fields. This filter is only applicable to <code>StringListValue</code>
   *          metadata.</p>
   */
  ContainsAny?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a greater than operation on two document attributes or metadata fields. Use
   *          with a document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  GreaterThan?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a greater or equals than operation on two document attributes or metadata
   *          fields. Use with a document attribute of type <code>Date</code> or
   *          <code>Long</code>.</p>
   */
  GreaterThanOrEquals?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a less than operation on two document attributes or metadata fields. Use with a
   *          document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  LessThan?: DocumentAttribute;

  /**
   * @public
   * <p>Performs a less than or equals operation on two document attributes or metadata fields.
   *          Use with a document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  LessThanOrEquals?: DocumentAttribute;
}

/**
 * @public
 */
export interface QueryResult {
  /**
   * @public
   * <p>The identifier for the search. You also use <code>QueryId</code> to identify the
   *          search when using the <a href="https://docs.aws.amazon.com/kendra/latest/APIReference/API_SubmitFeedback.html">SubmitFeedback</a> API.</p>
   */
  QueryId?: string;

  /**
   * @public
   * <p>The results of the search.</p>
   */
  ResultItems?: QueryResultItem[];

  /**
   * @public
   * <p>Contains the facet results. A <code>FacetResult</code> contains the counts for each
   *          field/attribute key that was specified in the <code>Facets</code> input parameter.</p>
   */
  FacetResults?: FacetResult[];

  /**
   * @public
   * <p>The total number of items found by the search. However, you can only retrieve up to
   *          100 items. For example, if the search found 192 items, you can only retrieve the first
   *          100 of the items.</p>
   */
  TotalNumberOfResults?: number;

  /**
   * @public
   * <p>A list of warning codes and their messages on problems with your query.</p>
   *          <p>Amazon Kendra currently only supports one type of warning, which is a warning on
   *          invalid syntax used in the query. For examples of invalid query syntax, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/searching-example.html#searching-index-query-syntax">Searching
   *             with advanced query syntax</a>.</p>
   */
  Warnings?: Warning[];

  /**
   * @public
   * <p>A list of information related to suggested spell corrections for a query.</p>
   */
  SpellCorrectedQueries?: SpellCorrectedQuery[];

  /**
   * @public
   * <p>The list of featured result items. Featured results are displayed at
   *          the top of the search results page, placed above all other results for
   *          certain queries. If there's an exact match of a query, then certain
   *          documents are featured in the search results.</p>
   */
  FeaturedResultsItems?: FeaturedResultsItem[];
}

/**
 * @public
 * <p>Provides the configuration information for the document fields/attributes that you want
 *             to base query suggestions on.</p>
 */
export interface AttributeSuggestionsGetConfig {
  /**
   * @public
   * <p>The list of document field/attribute keys or field names to use for query suggestions.
   *             If the content within any of the fields match what your user starts typing as their query,
   *             then the field content is returned as a query suggestion.</p>
   */
  SuggestionAttributes?: string[];

  /**
   * @public
   * <p>The list of additional document field/attribute keys or field names to include in the
   *             response. You can use additional fields to provide extra information in the response.
   *             Additional fields are not used to based suggestions on.</p>
   */
  AdditionalResponseAttributes?: string[];

  /**
   * @public
   * <p>Filters the search results based on document fields/attributes.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * @public
   * <p>Applies user context filtering so that only users who are given access to certain
   *             documents see these document in their search results.</p>
   */
  UserContext?: UserContext;
}

/**
 * @public
 */
export interface RetrieveRequest {
  /**
   * @public
   * <p>The identifier of the index to retrieve relevant passages for the
   *             search.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The input query text to retrieve relevant passages for the search.
   *             Amazon Kendra truncates queries at 30 token words, which excludes
   *             punctuation and stop words. Truncation still applies if you use Boolean
   *             or more advanced, complex queries.</p>
   */
  QueryText: string | undefined;

  /**
   * @public
   * <p>Filters search results by document fields/attributes. You can only provide
   *             one attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>,
   *             and <code>OrAllFilters</code> parameters contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter means you can create a set of
   *             filtering rules that a document must satisfy to be included in the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * @public
   * <p>A list of document fields/attributes to include in the response. You can limit
   *             the response to include certain document fields. By default, all document
   *             fields are included in the response.</p>
   */
  RequestedDocumentAttributes?: string[];

  /**
   * @public
   * <p>Overrides relevance tuning configurations of fields/attributes set at the index
   *             level.</p>
   *          <p>If you use this API to override the relevance tuning configured at the index level,
   *             but there is no relevance tuning configured at the index level, then
   *             Amazon Kendra does not apply any relevance tuning.</p>
   *          <p>If there is relevance tuning configured for fields at the index level, and you use
   *             this API to override only some of these fields, then for the fields you did not
   *             override, the importance is set to 1.</p>
   */
  DocumentRelevanceOverrideConfigurations?: DocumentRelevanceConfiguration[];

  /**
   * @public
   * <p>Retrieved relevant passages are returned in pages the size of the
   *             <code>PageSize</code> parameter. By default, Amazon Kendra returns the first page
   *             of results. Use this parameter to get result pages after the first one.</p>
   */
  PageNumber?: number;

  /**
   * @public
   * <p>Sets the number of retrieved relevant passages that are returned in each page of
   *             results. The default page size is 10. The maximum number of results returned is 100.
   *             If you ask for more than 100 results, only 100 are returned.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>The user context token or user and group information.</p>
   */
  UserContext?: UserContext;
}

/**
 * @public
 */
export interface GetQuerySuggestionsRequest {
  /**
   * @public
   * <p>The identifier of the index you want to get query suggestions from.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The text of a user's query to generate query suggestions.</p>
   *          <p>A query is suggested if the query prefix matches
   *             what a user starts to type as their query.</p>
   *          <p>Amazon Kendra does not show any suggestions if a user
   *             types fewer than two characters or more than 60 characters.
   *             A query must also have at least one search result and contain
   *             at least one word of more than four characters.</p>
   */
  QueryText: string | undefined;

  /**
   * @public
   * <p>The maximum number of query suggestions you want to show
   *             to your users.</p>
   */
  MaxSuggestionsCount?: number;

  /**
   * @public
   * <p>The suggestions type to base query suggestions on. The suggestion
   *             types are query history or document fields/attributes. You can set
   *             one type or the other.</p>
   *          <p>If you set query history as your suggestions type, Amazon Kendra
   *             suggests queries relevant to your users based on popular queries in
   *             the query history.</p>
   *          <p>If you set document fields/attributes as your suggestions type,
   *             Amazon Kendra suggests queries relevant to your users based on the
   *             contents of document fields.</p>
   */
  SuggestionTypes?: (SuggestionType | string)[];

  /**
   * @public
   * <p>Configuration information for the document fields/attributes that you
   *             want to base query suggestions on.</p>
   */
  AttributeSuggestionsConfig?: AttributeSuggestionsGetConfig;
}

/**
 * @public
 */
export interface QueryRequest {
  /**
   * @public
   * <p>The identifier of the index for the search.</p>
   */
  IndexId: string | undefined;

  /**
   * @public
   * <p>The input query text for the search. Amazon Kendra truncates queries at 30 token
   *          words, which excludes punctuation and stop words. Truncation still applies if you use
   *          Boolean or more advanced, complex queries. </p>
   */
  QueryText?: string;

  /**
   * @public
   * <p>Filters search results by document fields/attributes. You can only provide
   *          one attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>,
   *          and <code>OrAllFilters</code> parameters contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter means you can create a set of
   *          filtering rules that a document must satisfy to be included in the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * @public
   * <p>An array of documents fields/attributes for faceted search. Amazon Kendra returns a
   *          count for each field key specified. This helps your users narrow their search.</p>
   */
  Facets?: Facet[];

  /**
   * @public
   * <p>An array of document fields/attributes to include in the response. You can limit the
   *          response to include certain document fields. By default, all document attributes are
   *          included in the response.</p>
   */
  RequestedDocumentAttributes?: string[];

  /**
   * @public
   * <p>Sets the type of query result or response. Only results for the specified type are
   *          returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * @public
   * <p>Overrides relevance tuning configurations of fields/attributes set at the index level.</p>
   *          <p>If you use this API to override the relevance tuning configured at the index level, but there
   *          is no relevance tuning configured at the index level, then Amazon Kendra does not apply any
   *          relevance tuning.</p>
   *          <p>If there is relevance tuning configured for fields at the index level, and you use this API to
   *          override only some of these fields, then for the fields you did not override, the importance is
   *          set to 1.</p>
   */
  DocumentRelevanceOverrideConfigurations?: DocumentRelevanceConfiguration[];

  /**
   * @public
   * <p>Query results are returned in pages the size of the <code>PageSize</code> parameter.
   *          By default, Amazon Kendra returns the first page of results. Use this parameter to
   *          get result pages after the first one.</p>
   */
  PageNumber?: number;

  /**
   * @public
   * <p>Sets the number of results that are returned in each page of results. The default page
   *          size is 10. The maximum number of results returned is 100. If you ask for more than 100
   *          results, only 100 are returned.</p>
   */
  PageSize?: number;

  /**
   * @public
   * <p>Provides information that determines how the results of the query are sorted. You can
   *          set the field that Amazon Kendra should sort the results on, and specify whether the
   *          results should be sorted in ascending or descending order. In the case of ties in sorting
   *          the results, the results are sorted by relevance.</p>
   *          <p>If you don't provide sorting configuration, the results are sorted by the relevance that
   *          Amazon Kendra determines for the result.</p>
   */
  SortingConfiguration?: SortingConfiguration;

  /**
   * @public
   * <p>The user context token or user and group information.</p>
   */
  UserContext?: UserContext;

  /**
   * @public
   * <p>Provides an identifier for a specific user. The <code>VisitorId</code> should be a
   *          unique identifier, such as a GUID. Don't use personally identifiable information, such as
   *          the user's email address, as the <code>VisitorId</code>.</p>
   */
  VisitorId?: string;

  /**
   * @public
   * <p>Enables suggested spell corrections for queries.</p>
   */
  SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
}
