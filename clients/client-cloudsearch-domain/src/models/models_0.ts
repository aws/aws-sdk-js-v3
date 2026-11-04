// smithy-typescript generated code
import type { StreamingBlobTypes } from "@smithy/types";

import type { ContentType, QueryParser } from "./enums";

/**
 * Container for the parameters to the `Search` request.
 *
 * @public
 */
export interface SearchRequest {
  /**
   * Retrieves a cursor value you can use to page through large result sets. Use the `size` parameter to control the number of hits to include in each response. You can specify either the `cursor` or `start` parameter in a request; they are mutually exclusive. To get the first cursor, set the cursor value to `initial`. In subsequent requests, specify the cursor value returned in the hits section of the response.
   *
   * For more information, see [Paginating Results](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  cursor?: string | undefined;

  /**
   * Defines one or more numeric expressions that can be used to sort results or specify search or filter criteria. You can also specify expressions as return fields.
   *
   * You specify the expressions in JSON using the form `\{"EXPRESSIONNAME":"EXPRESSION"\}`. You can define and use multiple expressions in a search request. For example:
   *
   * `\{"expression1":"_score*rating", "expression2":"(1/rank)*year"\}`
   *
   * For information about the variables, operators, and functions you can use in expressions, see [Writing Expressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html#writing-expressions) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  expr?: string | undefined;

  /**
   * Specifies one or more fields for which to get facet information, and options that control how the facet information is returned. Each specified field must be facet-enabled in the domain configuration. The fields and options are specified in JSON using the form `\{"FIELD":\{"OPTION":VALUE,"OPTION:"STRING"\},"FIELD":\{"OPTION":VALUE,"OPTION":"STRING"\}\}`.
   *
   * You can specify the following faceting options:
   *
   * - `buckets` specifies an array of the facet values or ranges to count. Ranges are specified using the same syntax that you use to search for a range of values. For more information, see [Searching for a Range of Values](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-ranges.html) in the *Amazon CloudSearch Developer Guide*. Buckets are returned in the order they are specified in the request. The `sort` and `size` options are not valid if you specify `buckets`.
   * - `size` specifies the maximum number of facets to include in the results. By default, Amazon CloudSearch returns counts for the top 10. The `size` parameter is only valid when you specify the `sort` option; it cannot be used in conjunction with `buckets`.
   * - `sort` specifies how you want to sort the facets in the results: `bucket` or `count`. Specify `bucket` to sort alphabetically or numerically by facet value (in ascending order). Specify `count` to sort by the facet counts computed for each facet value (in descending order). To retrieve facet counts for particular values or ranges of values, use the `buckets` option instead of `sort`.
   *
   * If no facet options are specified, facet counts are computed for all field values, the facets are sorted by facet count, and the top 10 facets are returned in the results.
   *
   * To count particular buckets of values, use the `buckets` option. For example, the following request uses the `buckets` option to calculate and return facet counts by decade.
   *
   * `\{"year":\{"buckets":["[1970,1979]","[1980,1989]","[1990,1999]","[2000,2009]","[2010,\}"]\}\}`
   *
   * To sort facets by facet count, use the `count` option. For example, the following request sets the `sort` option to `count` to sort the facet values by facet count, with the facet values that have the most matching documents listed first. Setting the `size` option to 3 returns only the top three facet values.
   *
   * `\{"year":\{"sort":"count","size":3\}\}`
   *
   * To sort the facets by value, use the `bucket` option. For example, the following request sets the `sort` option to `bucket` to sort the facet values numerically by year, with earliest year listed first.
   *
   * `\{"year":\{"sort":"bucket"\}\}`
   *
   * For more information, see [Getting and Using Facet Information](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/faceting.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  facet?: string | undefined;

  /**
   * Specifies a structured query that filters the results of a search without affecting how the results are scored and sorted. You use `filterQuery` in conjunction with the `query` parameter to filter the documents that match the constraints specified in the `query` parameter. Specifying a filter controls only which matching documents are included in the results, it has no effect on how they are scored and sorted. The `filterQuery` parameter supports the full structured query syntax.
   *
   * For more information about using filters, see [Filtering Matching Documents](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/filtering-results.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  filterQuery?: string | undefined;

  /**
   * Retrieves highlights for matches in the specified `text` or `text-array` fields. Each specified field must be highlight enabled in the domain configuration. The fields and options are specified in JSON using the form `\{"FIELD":\{"OPTION":VALUE,"OPTION:"STRING"\},"FIELD":\{"OPTION":VALUE,"OPTION":"STRING"\}\}`.
   *
   * You can specify the following highlight options:
   *
   * - `format`: specifies the format of the data in the text field: `text` or `html`. When data is returned as HTML, all non-alphanumeric characters are encoded. The default is `html`.
   * - `max_phrases`: specifies the maximum number of occurrences of the search term(s) you want to highlight. By default, the first occurrence is highlighted.
   * - `pre_tag`: specifies the string to prepend to an occurrence of a search term. The default for HTML highlights is `<em>`. The default for text highlights is `*`.
   * - `post_tag`: specifies the string to append to an occurrence of a search term. The default for HTML highlights is `</em>`. The default for text highlights is `*`.
   *
   * If no highlight options are specified for a field, the returned field text is treated as HTML and the first match is highlighted with emphasis tags: `<em>search-term</em>`.
   *
   * For example, the following request retrieves highlights for the `actors` and `title` fields.
   *
   * `\{ "actors": \{\}, "title": \{"format": "text","max_phrases": 2,"pre_tag": "","post_tag": ""\} \}`
   *
   * @public
   */
  highlight?: string | undefined;

  /**
   * Enables partial results to be returned if one or more index partitions are unavailable. When your search index is partitioned across multiple search instances, by default Amazon CloudSearch only returns results if every partition can be queried. This means that the failure of a single search instance can result in 5xx (internal server) errors. When you enable partial results, Amazon CloudSearch returns whatever results are available and includes the percentage of documents searched in the search results (percent-searched). This enables you to more gracefully degrade your users' search experience. For example, rather than displaying no results, you could display the partial results and a message indicating that the results might be incomplete due to a temporary system outage.
   *
   * @public
   */
  partial?: boolean | undefined;

  /**
   * Specifies the search criteria for the request. How you specify the search criteria depends on the query parser used for the request and the parser options specified in the `queryOptions` parameter. By default, the `simple` query parser is used to process requests. To use the `structured`, `lucene`, or `dismax` query parser, you must also specify the `queryParser` parameter.
   *
   * For more information about specifying search criteria, see [Searching Your Data](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  query: string | undefined;

  /**
   * Configures options for the query parser specified in the `queryParser` parameter. You specify the options in JSON using the following form `\{"OPTION1":"VALUE1","OPTION2":VALUE2"..."OPTIONN":"VALUEN"\}.`
   *
   * The options you can configure vary according to which parser you use:
   *
   * - `defaultOperator`: The default operator used to combine individual terms in the search string. For example: `defaultOperator: 'or'`. For the `dismax` parser, you specify a percentage that represents the percentage of terms in the search string (rounded down) that must match, rather than a default operator. A value of `0%` is the equivalent to OR, and a value of `100%` is equivalent to AND. The percentage must be specified as a value in the range 0-100 followed by the percent (%) symbol. For example, `defaultOperator: 50%`. Valid values: `and`, `or`, a percentage in the range 0%-100% (`dismax`). Default: `and` (`simple`, `structured`, `lucene`) or `100` (`dismax`). Valid for: `simple`, `structured`, `lucene`, and `dismax`.
   * - `fields`: An array of the fields to search when no fields are specified in a search. If no fields are specified in a search and this option is not specified, all text and text-array fields are searched. You can specify a weight for each field to control the relative importance of each field when Amazon CloudSearch calculates relevance scores. To specify a field weight, append a caret (`^`) symbol and the weight to the field name. For example, to boost the importance of the `title` field over the `description` field you could specify: `"fields":["title^5","description"]`. Valid values: The name of any configured field and an optional numeric value greater than zero. Default: All `text` and `text-array` fields. Valid for: `simple`, `structured`, `lucene`, and `dismax`.
   * - `operators`: An array of the operators or special characters you want to disable for the simple query parser. If you disable the `and`, `or`, or `not` operators, the corresponding operators (`+`, `|`, `-`) have no special meaning and are dropped from the search string. Similarly, disabling `prefix` disables the wildcard operator (`*`) and disabling `phrase` disables the ability to search for phrases by enclosing phrases in double quotes. Disabling precedence disables the ability to control order of precedence using parentheses. Disabling `near` disables the ability to use the ~ operator to perform a sloppy phrase search. Disabling the `fuzzy` operator disables the ability to use the ~ operator to perform a fuzzy search. `escape` disables the ability to use a backslash (`\`) to escape special characters within the search string. Disabling whitespace is an advanced option that prevents the parser from tokenizing on whitespace, which can be useful for Vietnamese. (It prevents Vietnamese words from being split incorrectly.) For example, you could disable all operators other than the phrase operator to support just simple term and phrase queries: `"operators":["and","not","or", "prefix"]`. Valid values: `and`, `escape`, `fuzzy`, `near`, `not`, `or`, `phrase`, `precedence`, `prefix`, `whitespace`. Default: All operators and special characters are enabled. Valid for: `simple`.
   * - `phraseFields`: An array of the `text` or `text-array` fields you want to use for phrase searches. When the terms in the search string appear in close proximity within a field, the field scores higher. You can specify a weight for each field to boost that score. The `phraseSlop` option controls how much the matches can deviate from the search string and still be boosted. To specify a field weight, append a caret (`^`) symbol and the weight to the field name. For example, to boost phrase matches in the `title` field over the `abstract` field, you could specify: `"phraseFields":["title^3", "plot"]` Valid values: The name of any `text` or `text-array` field and an optional numeric value greater than zero. Default: No fields. If you don't specify any fields with `phraseFields`, proximity scoring is disabled even if `phraseSlop` is specified. Valid for: `dismax`.
   * - `phraseSlop`: An integer value that specifies how much matches can deviate from the search phrase and still be boosted according to the weights specified in the `phraseFields` option; for example, `phraseSlop: 2`. You must also specify `phraseFields` to enable proximity scoring. Valid values: positive integers. Default: 0. Valid for: `dismax`.
   * - `explicitPhraseSlop`: An integer value that specifies how much a match can deviate from the search phrase when the phrase is enclosed in double quotes in the search string. (Phrases that exceed this proximity distance are not considered a match.) For example, to specify a slop of three for dismax phrase queries, you would specify `"explicitPhraseSlop":3`. Valid values: positive integers. Default: 0. Valid for: `dismax`.
   * - `tieBreaker`: When a term in the search string is found in a document's field, a score is calculated for that field based on how common the word is in that field compared to other documents. If the term occurs in multiple fields within a document, by default only the highest scoring field contributes to the document's overall score. You can specify a `tieBreaker` value to enable the matches in lower-scoring fields to contribute to the document's score. That way, if two documents have the same max field score for a particular term, the score for the document that has matches in more fields will be higher. The formula for calculating the score with a tieBreaker is `(max field score) + (tieBreaker) * (sum of the scores for the rest of the matching fields)`. Set `tieBreaker` to 0 to disregard all but the highest scoring field (pure max): `"tieBreaker":0`. Set to 1 to sum the scores from all fields (pure sum): `"tieBreaker":1`. Valid values: 0.0 to 1.0. Default: 0.0. Valid for: `dismax`.
   *
   * @public
   */
  queryOptions?: string | undefined;

  /**
   * Specifies which query parser to use to process the request. If `queryParser` is not specified, Amazon CloudSearch uses the `simple` query parser.
   *
   * Amazon CloudSearch supports four query parsers:
   *
   * - `simple`: perform simple searches of `text` and `text-array` fields. By default, the `simple` query parser searches all `text` and `text-array` fields. You can specify which fields to search by with the `queryOptions` parameter. If you prefix a search term with a plus sign (+) documents must contain the term to be considered a match. (This is the default, unless you configure the default operator with the `queryOptions` parameter.) You can use the `-` (NOT), `|` (OR), and `*` (wildcard) operators to exclude particular terms, find results that match any of the specified terms, or search for a prefix. To search for a phrase rather than individual terms, enclose the phrase in double quotes. For more information, see [Searching for Text](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-text.html) in the *Amazon CloudSearch Developer Guide*.
   * - `structured`: perform advanced searches by combining multiple expressions to define the search criteria. You can also search within particular fields, search for values and ranges of values, and use advanced options such as term boosting, `matchall`, and `near`. For more information, see [Constructing Compound Queries](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/searching-compound-queries.html) in the *Amazon CloudSearch Developer Guide*.
   * - `lucene`: search using the Apache Lucene query parser syntax. For more information, see [Apache Lucene Query Parser Syntax](http://lucene.apache.org/core/4_6_0/queryparser/org/apache/lucene/queryparser/classic/package-summary.html#package_description).
   * - `dismax`: search using the simplified subset of the Apache Lucene query parser syntax defined by the DisMax query parser. For more information, see [DisMax Query Parser Syntax](http://wiki.apache.org/solr/DisMaxQParserPlugin#Query_Syntax).
   *
   * @public
   */
  queryParser?: QueryParser | undefined;

  /**
   * Specifies the field and expression values to include in the response. Multiple fields or expressions are specified as a comma-separated list. By default, a search response includes all return enabled fields (`_all_fields`). To return only the document IDs for the matching documents, specify `_no_fields`. To retrieve the relevance score calculated for each document, specify `_score`.
   *
   * @public
   */
  return?: string | undefined;

  /**
   * Specifies the maximum number of search hits to include in the response.
   *
   * @public
   */
  size?: number | undefined;

  /**
   * Specifies the fields or custom expressions to use to sort the search results. Multiple fields or expressions are specified as a comma-separated list. You must specify the sort direction (`asc` or `desc`) for each field; for example, `year desc,title asc`. To use a field to sort results, the field must be sort-enabled in the domain configuration. Array type fields cannot be used for sorting. If no `sort` parameter is specified, results are sorted by their default relevance scores in descending order: `_score desc`. You can also sort by document ID (`_id asc`) and version (`_version desc`).
   *
   * For more information, see [Sorting Results](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/sorting-results.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  sort?: string | undefined;

  /**
   * Specifies the offset of the first search hit you want to return. Note that the result set is zero-based; the first result is at index 0. You can specify either the `start` or `cursor` parameter in a request, they are mutually exclusive.
   *
   * For more information, see [Paginating Results](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/paginating-results.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * Specifies one or more fields for which to get statistics information. Each specified field must be facet-enabled in the domain configuration. The fields are specified in JSON using the form:
   *
   *       `\{"FIELD-A":\{\},"FIELD-B":\{\}\}`
   *
   * There are currently no options supported for statistics.
   *
   * @public
   */
  stats?: string | undefined;
}

/**
 * A container for facet information.
 *
 * @public
 */
export interface Bucket {
  /**
   * The facet value being counted.
   *
   * @public
   */
  value?: string | undefined;

  /**
   * The number of hits that contain the facet value in the specified facet field.
   *
   * @public
   */
  count?: number | undefined;
}

/**
 * A container for the calculated facet values and counts.
 *
 * @public
 */
export interface BucketInfo {
  /**
   * A list of the calculated facet values and counts.
   *
   * @public
   */
  buckets?: Bucket[] | undefined;
}

/**
 * Information about a document that matches the search request.
 *
 * @public
 */
export interface Hit {
  /**
   * The document ID of a document that matches the search request.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The fields returned from a document that matches the search request.
   *
   * @public
   */
  fields?: Record<string, string[]> | undefined;

  /**
   * The expressions returned from a document that matches the search request.
   *
   * @public
   */
  exprs?: Record<string, string> | undefined;

  /**
   * The highlights returned from a document that matches the search request.
   *
   * @public
   */
  highlights?: Record<string, string> | undefined;
}

/**
 * The collection of documents that match the search request.
 *
 * @public
 */
export interface Hits {
  /**
   * The total number of documents that match the search request.
   *
   * @public
   */
  found?: number | undefined;

  /**
   * The index of the first matching document.
   *
   * @public
   */
  start?: number | undefined;

  /**
   * A cursor that can be used to retrieve the next set of matching documents when you want to page through a large result set.
   *
   * @public
   */
  cursor?: string | undefined;

  /**
   * A document that matches the search request.
   *
   * @public
   */
  hit?: Hit[] | undefined;
}

/**
 * The statistics for a field calculated in the request.
 *
 * @public
 */
export interface FieldStats {
  /**
   * The minimum value found in the specified field in the result set.
   *
   * If the field is numeric (`int`, `int-array`, `double`, or `double-array`), `min` is the string representation of a double-precision 64-bit floating point value. If the field is `date` or `date-array`, `min` is the string representation of a date with the format specified in [IETF RFC3339](http://tools.ietf.org/html/rfc3339): yyyy-mm-ddTHH:mm:ss.SSSZ.
   *
   * @public
   */
  min?: string | undefined;

  /**
   * The maximum value found in the specified field in the result set.
   *
   * If the field is numeric (`int`, `int-array`, `double`, or `double-array`), `max` is the string representation of a double-precision 64-bit floating point value. If the field is `date` or `date-array`, `max` is the string representation of a date with the format specified in [IETF RFC3339](http://tools.ietf.org/html/rfc3339): yyyy-mm-ddTHH:mm:ss.SSSZ.
   *
   * @public
   */
  max?: string | undefined;

  /**
   * The number of documents that contain a value in the specified field in the result set.
   *
   * @public
   */
  count?: number | undefined;

  /**
   * The number of documents that do not contain a value in the specified field in the result set.
   *
   * @public
   */
  missing?: number | undefined;

  /**
   * The sum of the field values across the documents in the result set. `null` for date fields.
   *
   * @public
   */
  sum?: number | undefined;

  /**
   * The sum of all field values in the result set squared.
   *
   * @public
   */
  sumOfSquares?: number | undefined;

  /**
   * The average of the values found in the specified field in the result set.
   *
   * If the field is numeric (`int`, `int-array`, `double`, or `double-array`), `mean` is the string representation of a double-precision 64-bit floating point value. If the field is `date` or `date-array`, `mean` is the string representation of a date with the format specified in [IETF RFC3339](http://tools.ietf.org/html/rfc3339): yyyy-mm-ddTHH:mm:ss.SSSZ.
   *
   * @public
   */
  mean?: string | undefined;

  /**
   * The standard deviation of the values in the specified field in the result set.
   *
   * @public
   */
  stddev?: number | undefined;
}

/**
 * Contains the resource id (`rid`) and the time it took to process the request (`timems`).
 *
 * @public
 */
export interface SearchStatus {
  /**
   * How long it took to process the request, in milliseconds.
   *
   * @public
   */
  timems?: number | undefined;

  /**
   * The encrypted resource ID for the request.
   *
   * @public
   */
  rid?: string | undefined;
}

/**
 * The result of a `Search` request. Contains the documents that match the specified search criteria and any requested fields, highlights, and facet information.
 *
 * @public
 */
export interface SearchResponse {
  /**
   * The status information returned for the search request.
   *
   * @public
   */
  status?: SearchStatus | undefined;

  /**
   * The documents that match the search criteria.
   *
   * @public
   */
  hits?: Hits | undefined;

  /**
   * The requested facet information.
   *
   * @public
   */
  facets?: Record<string, BucketInfo> | undefined;

  /**
   * The requested field statistics information.
   *
   * @public
   */
  stats?: Record<string, FieldStats> | undefined;
}

/**
 * Container for the parameters to the `Suggest` request.
 *
 * @public
 */
export interface SuggestRequest {
  /**
   * Specifies the string for which you want to get suggestions.
   *
   * @public
   */
  query: string | undefined;

  /**
   * Specifies the name of the suggester to use to find suggested matches.
   *
   * @public
   */
  suggester: string | undefined;

  /**
   * Specifies the maximum number of suggestions to return.
   *
   * @public
   */
  size?: number | undefined;
}

/**
 * Contains the resource id (`rid`) and the time it took to process the request (`timems`).
 *
 * @public
 */
export interface SuggestStatus {
  /**
   * How long it took to process the request, in milliseconds.
   *
   * @public
   */
  timems?: number | undefined;

  /**
   * The encrypted resource ID for the request.
   *
   * @public
   */
  rid?: string | undefined;
}

/**
 * An autocomplete suggestion that matches the query string specified in a `SuggestRequest`.
 *
 * @public
 */
export interface SuggestionMatch {
  /**
   * The string that matches the query string specified in the `SuggestRequest`.
   *
   * @public
   */
  suggestion?: string | undefined;

  /**
   * The relevance score of a suggested match.
   *
   * @public
   */
  score?: number | undefined;

  /**
   * The document ID of the suggested document.
   *
   * @public
   */
  id?: string | undefined;
}

/**
 * Container for the suggestion information returned in a `SuggestResponse`.
 *
 * @public
 */
export interface SuggestModel {
  /**
   * The query string specified in the suggest request.
   *
   * @public
   */
  query?: string | undefined;

  /**
   * The number of documents that were found to match the query string.
   *
   * @public
   */
  found?: number | undefined;

  /**
   * The documents that match the query string.
   *
   * @public
   */
  suggestions?: SuggestionMatch[] | undefined;
}

/**
 * Contains the response to a `Suggest` request.
 *
 * @public
 */
export interface SuggestResponse {
  /**
   * The status of a `SuggestRequest`. Contains the resource ID (`rid`) and how long it took to process the request (`timems`).
   *
   * @public
   */
  status?: SuggestStatus | undefined;

  /**
   * Container for the matching search suggestion information.
   *
   * @public
   */
  suggest?: SuggestModel | undefined;
}

/**
 * Container for the parameters to the `UploadDocuments` request.
 *
 * @public
 */
export interface UploadDocumentsRequest {
  /**
   * A batch of documents formatted in JSON or HTML.
   *
   * @public
   */
  documents: StreamingBlobTypes | undefined;

  /**
   * The format of the batch you are uploading. Amazon CloudSearch supports two document batch formats:
   *
   * - application/json
   * - application/xml
   *
   * @public
   */
  contentType: ContentType | undefined;
}

/**
 * A warning returned by the document service when an issue is discovered while processing an upload request.
 *
 * @public
 */
export interface DocumentServiceWarning {
  /**
   * The description for a warning returned by the document service.
   *
   * @public
   */
  message?: string | undefined;
}

/**
 * Contains the response to an `UploadDocuments` request.
 *
 * @public
 */
export interface UploadDocumentsResponse {
  /**
   * The status of an `UploadDocumentsRequest`.
   *
   * @public
   */
  status?: string | undefined;

  /**
   * The number of documents that were added to the search domain.
   *
   * @public
   */
  adds?: number | undefined;

  /**
   * The number of documents that were deleted from the search domain.
   *
   * @public
   */
  deletes?: number | undefined;

  /**
   * Any warnings returned by the document service about the documents being uploaded.
   *
   * @public
   */
  warnings?: DocumentServiceWarning[] | undefined;
}
