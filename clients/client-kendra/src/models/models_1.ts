// smithy-typescript generated code
import {
  AttributeFilter,
  DocumentRelevanceConfiguration,
  Facet,
  FacetResult,
  QueryResultItem,
  QueryResultType,
  SortingConfiguration,
  SpellCorrectedQuery,
  SpellCorrectionConfiguration,
  UserContext,
  Warning,
} from "./models_0";

export interface QueryResult {
  /**
   * <p>The unique identifier for the search. You use <code>QueryId</code>
   *          to identify the search when using the feedback API.</p>
   */
  QueryId?: string;

  /**
   * <p>The results of the search.</p>
   */
  ResultItems?: QueryResultItem[];

  /**
   * <p>Contains the facet results. A <code>FacetResult</code> contains the
   *          counts for each attribute key that was specified in the
   *             <code>Facets</code> input parameter.</p>
   */
  FacetResults?: FacetResult[];

  /**
   * <p>The total number of items found by the search; however, you can only
   *          retrieve up to 100 items. For example, if the search found 192 items,
   *          you can only retrieve the first 100 of the items.</p>
   */
  TotalNumberOfResults?: number;

  /**
   * <p>A list of warning codes and their messages on problems with your query.</p>
   *          <p>Amazon Kendra currently only supports one type of warning, which is a warning
   *          on invalid syntax used in the query. For examples of invalid query syntax,
   *          see <a href="https://docs.aws.amazon.com/kendra/latest/dg/searching-example.html#searching-index-query-syntax">Searching
   *             with advanced query syntax</a>.</p>
   */
  Warnings?: Warning[];

  /**
   * <p>A list of information related to suggested spell corrections for a query.</p>
   */
  SpellCorrectedQueries?: SpellCorrectedQuery[];
}

export namespace QueryResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryResult): any => ({
    ...obj,
  });
}

export interface QueryRequest {
  /**
   * <p>The unique identifier of the index to search. The identifier is
   *          returned in the response from the <code>CreateIndex</code>
   *          API.</p>
   */
  IndexId: string | undefined;

  /**
   * <p>The text to search for.</p>
   */
  QueryText?: string;

  /**
   * <p>Enables filtered searches based on document attributes. You can only
   *          provide one attribute filter; however, the <code>AndAllFilters</code>,
   *             <code>NotFilter</code>, and <code>OrAllFilters</code> parameters
   *          contain a list of other filters.</p>
   *          <p>The <code>AttributeFilter</code> parameter enables you to create a
   *          set of filtering rules that a document must satisfy to be included in
   *          the query results.</p>
   */
  AttributeFilter?: AttributeFilter;

  /**
   * <p>An array of documents attributes. Amazon Kendra returns a count for
   *          each attribute key specified. This helps your users narrow their search.</p>
   */
  Facets?: Facet[];

  /**
   * <p>An array of document attributes to include in the response.
   *          You can limit the response to include certain document attributes.
   *          By default all document attributes are included in the response.</p>
   */
  RequestedDocumentAttributes?: string[];

  /**
   * <p>Sets the type of query. Only results for the specified query type
   *          are returned.</p>
   */
  QueryResultTypeFilter?: QueryResultType | string;

  /**
   * <p>Overrides relevance tuning configurations of fields or attributes set at the index level.</p>
   *          <p>If you use this API to override the relevance tuning configured at the index
   *          level, but there is no relevance tuning configured at the index level, then Amazon Kendra does not apply any relevance tuning.</p>
   *          <p>If there is relevance tuning configured at the index level, but you do not use this API
   *          to override any relevance tuning in the index, then Amazon Kendra uses the relevance tuning that is configured at the index level.</p>
   *          <p>If there is relevance tuning configured for fields at the index level,
   *          but you use this API to override only some of these fields, then for the fields you did not override,
   *          the importance is set to 1.</p>
   */
  DocumentRelevanceOverrideConfigurations?: DocumentRelevanceConfiguration[];

  /**
   * <p>Query results are returned in pages the size of the
   *          <code>PageSize</code> parameter. By default, Amazon Kendra returns
   *          the first page of results. Use this parameter to get result pages after
   *          the first one.</p>
   */
  PageNumber?: number;

  /**
   * <p>Sets the number of results that are returned in each page of
   *          results. The default page size is 10. The maximum number of results
   *          returned is 100. If you ask for more than 100 results, only 100 are
   *          returned.</p>
   */
  PageSize?: number;

  /**
   * <p>Provides information that determines how the results of the query
   *          are sorted. You can set the field that Amazon Kendra should sort the results
   *          on, and specify whether the results should be sorted in ascending or
   *          descending order. In the case of ties in sorting the results, the
   *          results are sorted by relevance.</p>
   *          <p>If you don't provide sorting configuration, the results are sorted
   *          by the relevance that Amazon Kendra determines for the result.</p>
   */
  SortingConfiguration?: SortingConfiguration;

  /**
   * <p>The user context token or user and group information.</p>
   */
  UserContext?: UserContext;

  /**
   * <p>Provides an identifier for a specific user. The
   *             <code>VisitorId</code> should be a unique identifier, such as a
   *          GUID. Don't use personally identifiable information, such as the user's
   *          email address, as the <code>VisitorId</code>.</p>
   */
  VisitorId?: string;

  /**
   * <p>Enables suggested spell corrections for queries.</p>
   */
  SpellCorrectionConfiguration?: SpellCorrectionConfiguration;
}

export namespace QueryRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QueryRequest): any => ({
    ...obj,
  });
}
