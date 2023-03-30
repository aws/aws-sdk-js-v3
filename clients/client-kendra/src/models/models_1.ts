// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { KendraServiceException as __BaseException } from "./KendraServiceException";
import {
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
  QueryResultItem,
  QueryResultType,
  S3Path,
  SortingConfiguration,
  SpellCorrectedQuery,
  SpellCorrectionConfiguration,
  Tag,
  UserContext,
  UserContextPolicy,
  UserGroupResolutionConfiguration,
  UserTokenConfiguration,
  Warning,
} from "./models_0";

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
   * <p>The identifier of the data source connector to synchronize.</p>
   */
  Id: string | undefined;

  /**
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;
}

/**
 * @public
 */
export interface StartDataSourceSyncJobResponse {
  /**
   * <p>Identifies a particular synchronization job.</p>
   */
  ExecutionId?: string;
}

/**
 * @public
 */
export interface StopDataSourceSyncJobRequest {
  /**
   * <p>The identifier of the data source connector for which to stop the synchronization
   *       jobs.</p>
   */
  Id: string | undefined;

  /**
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
   * <p>The identifier of the search result that was clicked.</p>
   */
  ResultId: string | undefined;

  /**
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
   * <p>The identifier of the search result that the user provided relevance feedback
   *             for.</p>
   */
  ResultId: string | undefined;

  /**
   * <p>Whether the document was relevant or not relevant to the search.</p>
   */
  RelevanceValue: RelevanceType | string | undefined;
}

/**
 * @public
 */
export interface SubmitFeedbackRequest {
  /**
   * <p>The identifier of the index that was queried.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the specific query for which you are submitting
   *             feedback. The query ID is returned in the response to the
   *                 <code>Query</code> API.</p>
   */
  QueryId: string | undefined;

  /**
   * <p>Tells Amazon Kendra that a particular search result link was chosen
   *             by the user. </p>
   */
  ClickFeedbackItems?: ClickFeedback[];

  /**
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
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to tag.</p>
   */
  ResourceARN: string | undefined;

  /**
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
   * <p>The Amazon Resource Name (ARN) of the index, FAQ, or data source to remove the tag
   *       from.</p>
   */
  ResourceARN: string | undefined;

  /**
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
   * <p>The identifier of the index for an access control configuration.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the access control configuration you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A new name for the access control configuration.</p>
   */
  Name?: string;

  /**
   * <p>A new description for the access control configuration.</p>
   */
  Description?: string;

  /**
   * <p>Information you want to update on principals (users and/or groups) and which documents
   *             they should have access to. This is useful for user context filtering, where search
   *             results are filtered based on the user or their group access to documents.</p>
   */
  AccessControlList?: Principal[];

  /**
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
   * <p>The identifier of the data source connector you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A new name for the data source connector.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the index used with the data source connector.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>Configuration information you want to update for the data source connector.</p>
   */
  Configuration?: DataSourceConfiguration;

  /**
   * <p>Configuration information for an Amazon Virtual Private Cloud to connect to your data source.
   *       For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/vpc-configuration.html">Configuring a VPC</a>.</p>
   */
  VpcConfiguration?: DataSourceVpcConfiguration;

  /**
   * <p>A new description for the data source connector.</p>
   */
  Description?: string;

  /**
   * <p>The sync schedule you want to update for the data source connector.</p>
   */
  Schedule?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access the data source and
   *       required resources. For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The code for a language you want to update for the data source connector.
   *             This allows you to support a language for all
   *             documents when updating the data source. English is supported
   *             by default. For more information on supported languages, including their codes,
   *             see <a href="https://docs.aws.amazon.com/kendra/latest/dg/in-adding-languages.html">Adding
   *                 documents in languages other than English</a>.</p>
   */
  LanguageCode?: string;

  /**
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
   * <p>The identifier of your Amazon Kendra experience you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A new name for your Amazon Kendra experience.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the index for your Amazon Kendra experience.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a role with permission to access <code>Query</code>
   *             API, <code>QuerySuggestions</code> API, <code>SubmitFeedback</code>
   *             API, and IAM Identity Center that stores your user and group information.
   *             For more information, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/iam-roles.html">IAM roles for Amazon Kendra</a>.</p>
   */
  RoleArn?: string;

  /**
   * <p>Configuration information you want to update for your Amazon Kendra experience.</p>
   */
  Configuration?: ExperienceConfiguration;

  /**
   * <p>A new description for your Amazon Kendra experience.</p>
   */
  Description?: string;
}

/**
 * @public
 */
export interface UpdateFeaturedResultsSetRequest {
  /**
   * <p>The identifier of the index used for featuring results.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the index used for featuring results.</p>
   */
  FeaturedResultsSetId: string | undefined;

  /**
   * <p>A new name for the set of featured results.</p>
   */
  FeaturedResultsSetName?: string;

  /**
   * <p>A new description for the set of featured results.</p>
   */
  Description?: string;

  /**
   * <p>You can set the status to <code>ACTIVE</code> or <code>INACTIVE</code>.
   *             When the value is <code>ACTIVE</code>, featured results are ready for
   *             use. You can still configure your settings before setting the status
   *             to <code>ACTIVE</code>. The queries you specify for featured results
   *             must be unique per featured results set for each index, whether the
   *             status is <code>ACTIVE</code> or <code>INACTIVE</code>.</p>
   */
  Status?: FeaturedResultsSetStatus | string;

  /**
   * <p>A list of queries for featuring results. For more information on the
   *             list of queries, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/API_FeaturedResultsSet.html">FeaturedResultsSet</a>.</p>
   */
  QueryTexts?: string[];

  /**
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
   * <p>The identifier of the index you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the index you want to update.</p>
   */
  Name?: string;

  /**
   * <p>An Identity and Access Management (IAM) role that gives Amazon Kendra
   *       permission to access Amazon CloudWatch logs and metrics.</p>
   */
  RoleArn?: string;

  /**
   * <p>A new description for the index.</p>
   */
  Description?: string;

  /**
   * <p>The document metadata configuration you want to update for the index. Document metadata
   *       are fields or attributes associated with your documents. For example, the company department
   *       name associated with each document.</p>
   */
  DocumentMetadataConfigurationUpdates?: DocumentMetadataConfiguration[];

  /**
   * <p>Sets the number of additional document storage and query capacity units that should be
   *       used by the index. You can change the capacity of the index up to 5 times per day, or make 5
   *       API calls.</p>
   *          <p>If you are using extra storage units, you can't reduce the storage capacity below what is
   *       required to meet the storage needs for your index.</p>
   */
  CapacityUnits?: CapacityUnitsConfiguration;

  /**
   * <p>The user token configuration.</p>
   */
  UserTokenConfigurations?: UserTokenConfiguration[];

  /**
   * <p>The user context policy.</p>
   */
  UserContextPolicy?: UserContextPolicy | string;

  /**
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
   * <p>The identifier of the index for the block list.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The identifier of the block list you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A new name for the block list.</p>
   */
  Name?: string;

  /**
   * <p>A new description for the block list.</p>
   */
  Description?: string;

  /**
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
   * <p> The identifier of the index with query suggestions you want to update.</p>
   */
  IndexId: string | undefined;

  /**
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
   * <p>How recent your queries are in your query log time window.</p>
   *          <p>The time window is the number of days from current day to past days.</p>
   *          <p>By default, Amazon Kendra sets this to 180.</p>
   */
  QueryLogLookBackWindowInDays?: number;

  /**
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
   * <p>The minimum number of unique users who must search a query in order for the query
   *             to be eligible to suggest to your users.</p>
   *          <p>Increasing this number might decrease the number of suggestions. However, this
   *             ensures a query is searched by many users and is truly popular to suggest to users.</p>
   *          <p>How you tune this setting depends on your specific needs.</p>
   */
  MinimumNumberOfQueryingUsers?: number;

  /**
   * <p>The the minimum number of times a query must be searched in order to be
   *             eligible to suggest to your users.</p>
   *          <p>Decreasing this number increases the number of suggestions. However, this
   *             affects the quality of suggestions as it sets a low bar for a query to be
   *             considered popular to suggest to users.</p>
   *          <p>How you tune this setting depends on your specific needs.</p>
   */
  MinimumQueryCount?: number;
}

/**
 * @public
 */
export interface UpdateThesaurusRequest {
  /**
   * <p>The identifier of the thesaurus you want to update.</p>
   */
  Id: string | undefined;

  /**
   * <p>A new name for the thesaurus.</p>
   */
  Name?: string;

  /**
   * <p>The identifier of the index for the thesaurus.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>A new description for the thesaurus.</p>
   */
  Description?: string;

  /**
   * <p>An IAM role that gives Amazon Kendra permissions to
   *          access thesaurus file specified in <code>SourceS3Path</code>.</p>
   */
  RoleArn?: string;

  /**
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
   * <p>The unique key for the document attribute.</p>
   */
  DocumentAttributeKey?: string;

  /**
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
   * <p>The value of the attribute. For example, "HR".</p>
   */
  DocumentAttributeValue?: DocumentAttributeValue;

  /**
   * <p>The number of documents in the response that have the attribute value for the
   *          key.</p>
   */
  Count?: number;

  /**
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
   * <p>The key for the facet values. This is the same as the <code>DocumentAttributeKey</code>
   *          provided in the query.</p>
   */
  DocumentAttributeKey?: string;

  /**
   * <p>The data type of the facet value. This is the same as the type defined for the index
   *          field when it was created.</p>
   */
  DocumentAttributeValueType?: DocumentAttributeValueType | string;

  /**
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
   * <p>Performs a logical <code>AND</code> operation on all supplied filters.</p>
   */
  AndAllFilters?: AttributeFilter[];

  /**
   * <p>Performs a logical <code>OR</code> operation on all supplied filters.</p>
   */
  OrAllFilters?: AttributeFilter[];

  /**
   * <p>Performs a logical <code>NOT</code> operation on all supplied filters.</p>
   */
  NotFilter?: AttributeFilter;

  /**
   * <p>Performs an equals operation on two document attributes or metadata fields.</p>
   */
  EqualsTo?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains all of the specified document attributes or
   *          metadata fields. This filter is only applicable to <code>StringListValue</code>
   *          metadata.</p>
   */
  ContainsAll?: DocumentAttribute;

  /**
   * <p>Returns true when a document contains any of the specified document attributes or
   *          metadata fields. This filter is only applicable to <code>StringListValue</code>
   *          metadata.</p>
   */
  ContainsAny?: DocumentAttribute;

  /**
   * <p>Performs a greater than operation on two document attributes or metadata fields. Use
   *          with a document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  GreaterThan?: DocumentAttribute;

  /**
   * <p>Performs a greater or equals than operation on two document attributes or metadata
   *          fields. Use with a document attribute of type <code>Date</code> or
   *          <code>Long</code>.</p>
   */
  GreaterThanOrEquals?: DocumentAttribute;

  /**
   * <p>Performs a less than operation on two document attributes or metadata fields. Use with a
   *          document attribute of type <code>Date</code> or <code>Long</code>.</p>
   */
  LessThan?: DocumentAttribute;

  /**
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
   * <p>The identifier for the search. You use <code>QueryId</code> to identify the
   *          search when using the feedback API.</p>
   */
  QueryId?: string;

  /**
   * <p>The results of the search.</p>
   */
  ResultItems?: QueryResultItem[];

  /**
   * <p>Contains the facet results. A <code>FacetResult</code> contains the counts for each
   *          attribute key that was specified in the <code>Facets</code> input parameter.</p>
   */
  FacetResults?: FacetResult[];

  /**
   * <p>The total number of items found by the search; however, you can only retrieve up to 100
   *          items. For example, if the search found 192 items, you can only retrieve the first 100 of
   *          the items.</p>
   */
  TotalNumberOfResults?: number;

  /**
   * <p>A list of warning codes and their messages on problems with your query.</p>
   *          <p>Amazon Kendra currently only supports one type of warning, which is a warning on
   *          invalid syntax used in the query. For examples of invalid query syntax, see <a href="https://docs.aws.amazon.com/kendra/latest/dg/searching-example.html#searching-index-query-syntax">Searching
   *             with advanced query syntax</a>.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>A list of information related to suggested spell corrections for a query.</p>
   */
  SpellCorrectedQueries?: SpellCorrectedQuery[];

  /**
   * <p>The list of featured result items. Featured results are displayed at
   *          the top of the search results page, placed above all other results for
   *          certain queries. If there's an exact match of a query, then certain
   *          documents are featured in the search results.</p>
   */
  FeaturedResultsItems?: FeaturedResultsItem[];
}

/**
 * @public
 */
export interface QueryRequest {
  /**
   * <p>The identifier of the index to search. The identifier is returned in the response
   *          from the <code>CreateIndex</code> API.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The input query text for the search. Amazon Kendra truncates queries at 30 token
   *          words, which excludes punctuation and stop words. Truncation still applies if you use
   *          Boolean or more advanced, complex queries. </p>
   */
  QueryText?: string;

  /**
   * <p>Enables filtered searches based on document attributes. You can only provide one
   *          attribute filter; however, the <code>AndAllFilters</code>, <code>NotFilter</code>, and
   *             <code>OrAllFilters</code> parameters contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter enables you to create a set of filtering
   *          rules that a document must satisfy to be included in the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * <p>An array of documents attributes. Amazon Kendra returns a count for each attribute
   *          key specified. This helps your users narrow their search.</p>
   */
  Facets?: Facet[];

  /**
   * <p>An array of document attributes to include in the response. You can limit the response
   *          to include certain document attributes. By default all document attributes are included in
   *          the response.</p>
   */
  RequestedDocumentAttributes?: string[];

  /**
   * <p>Sets the type of query. Only results for the specified query type are returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * <p>Overrides relevance tuning configurations of fields or attributes set at the index
   *          level.</p>
   *          <p>If you use this API to override the relevance tuning configured at the index level, but
   *          there is no relevance tuning configured at the index level, then Amazon Kendra does
   *          not apply any relevance tuning.</p>
   *          <p>If there is relevance tuning configured at the index level, but you do not use this API
   *          to override any relevance tuning in the index, then Amazon Kendra uses the relevance
   *          tuning that is configured at the index level.</p>
   *          <p>If there is relevance tuning configured for fields at the index level, but you use this
   *          API to override only some of these fields, then for the fields you did not override, the
   *          importance is set to 1.</p>
   */
  DocumentRelevanceOverrideConfigurations?: DocumentRelevanceConfiguration[];

  /**
   * <p>Query results are returned in pages the size of the <code>PageSize</code> parameter. By
   *          default, Amazon Kendra returns the first page of results. Use this parameter to get
   *          result pages after the first one.</p>
   */
  PageNumber?: number;

  /**
   * <p>Sets the number of results that are returned in each page of results. The default page
   *          size is 10. The maximum number of results returned is 100. If you ask for more than 100
   *          results, only 100 are returned.</p>
   */
  PageSize?: number;

  /**
   * <p>Provides information that determines how the results of the query are sorted. You can
   *          set the field that Amazon Kendra should sort the results on, and specify whether the
   *          results should be sorted in ascending or descending order. In the case of ties in sorting
   *          the results, the results are sorted by relevance.</p>
   *          <p>If you don't provide sorting configuration, the results are sorted by the relevance that
   *             Amazon Kendra determines for the result.</p>
   */
  SortingConfiguration?: SortingConfiguration;

  /**
   * <p>The user context token or user and group information.</p>
   */
  UserContext?: UserContext;

  /**
   * <p>Provides an identifier for a specific user. The <code>VisitorId</code> should be a
   *          unique identifier, such as a GUID. Don't use personally identifiable information, such as
   *          the user's email address, as the <code>VisitorId</code>.</p>
   */
  VisitorId?: string;

  /**
   * <p>Enables suggested spell corrections for queries.</p>
   */
  SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
}
