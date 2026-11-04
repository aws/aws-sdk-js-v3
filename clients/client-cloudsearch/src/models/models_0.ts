// smithy-typescript generated code
import type {
  AlgorithmicStemming,
  AnalysisSchemeLanguage,
  IndexFieldType,
  OptionState,
  PartitionInstanceType,
  SuggesterFuzzyMatching,
  TLSSecurityPolicy,
} from "./enums";

/**
 * Container for the parameters to the `BuildSuggester` operation. Specifies the name of the domain you want to update.
 *
 * @public
 */
export interface BuildSuggestersRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of a `BuildSuggester` request. Contains a list of the fields used for suggestions.
 *
 * @public
 */
export interface BuildSuggestersResponse {
  /**
   * A list of field names.
   *
   * @public
   */
  FieldNames?: string[] | undefined;
}

/**
 * Container for the parameters to the `CreateDomain` operation. Specifies a name for the new search domain.
 *
 * @public
 */
export interface CreateDomainRequest {
  /**
   * A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The endpoint to which service requests can be submitted.
 *
 * @public
 */
export interface ServiceEndpoint {
  /**
   * The endpoint to which service requests can be submitted. For example, `search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com` or `doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com`.
   *
   * @public
   */
  Endpoint?: string | undefined;
}

/**
 * @public
 */
export interface Limits {
  MaximumReplicationCount: number | undefined;
  MaximumPartitionCount: number | undefined;
}

/**
 * The current status of the search domain.
 *
 * @public
 */
export interface DomainStatus {
  /**
   * An internally generated unique identifier for a domain.
   *
   * @public
   */
  DomainId: string | undefined;

  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the search domain. See [Identifiers for IAM Entities](http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html) in *Using AWS Identity and Access Management* for more information.
   *
   * @public
   */
  ARN?: string | undefined;

  /**
   * True if the search domain is created. It can take several minutes to initialize a domain when CreateDomain is called. Newly created search domains are returned from DescribeDomains with a false value for Created until domain creation is complete.
   *
   * @public
   */
  Created?: boolean | undefined;

  /**
   * True if the search domain has been deleted. The system must clean up resources dedicated to the search domain when DeleteDomain is called. Newly deleted search domains are returned from DescribeDomains with a true value for IsDeleted for several minutes until resource cleanup is complete.
   *
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * The service endpoint for updating documents in a search domain.
   *
   * @public
   */
  DocService?: ServiceEndpoint | undefined;

  /**
   * The service endpoint for requesting search results from a search domain.
   *
   * @public
   */
  SearchService?: ServiceEndpoint | undefined;

  /**
   * True if IndexDocuments needs to be called to activate the current domain configuration.
   *
   * @public
   */
  RequiresIndexDocuments: boolean | undefined;

  /**
   * True if processing is being done to activate the current domain configuration.
   *
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * The instance type that is being used to process search requests.
   *
   * @public
   */
  SearchInstanceType?: string | undefined;

  /**
   * The number of partitions across which the search index is spread.
   *
   * @public
   */
  SearchPartitionCount?: number | undefined;

  /**
   * The number of search instances that are available to process search requests.
   *
   * @public
   */
  SearchInstanceCount?: number | undefined;

  Limits?: Limits | undefined;
}

/**
 * The result of a `CreateDomainRequest`. Contains the status of a newly created domain.
 *
 * @public
 */
export interface CreateDomainResponse {
  /**
   * The current status of the search domain.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
 *
 * @public
 */
export interface AnalysisOptions {
  /**
   * A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see [Synonyms](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  Synonyms?: string | undefined;

  /**
   * A JSON array of terms to ignore during indexing and searching. For example, `["a", "an", "the", "of"]`. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported.
   *
   * @public
   */
  Stopwords?: string | undefined;

  /**
   * A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, `\{"term1": "stem1", "term2": "stem2", "term3": "stem3"\}`. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.
   *
   * @public
   */
  StemmingDictionary?: string | undefined;

  /**
   * A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.
   *
   * @public
   */
  JapaneseTokenizationDictionary?: string | undefined;

  /**
   * The level of algorithmic stemming to perform: `none`, `minimal`, `light`, or `full`. The available levels vary depending on the language. For more information, see [Language Specific Text Processing Settings](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings) in the *Amazon CloudSearch Developer Guide*
   *
   * @public
   */
  AlgorithmicStemming?: AlgorithmicStemming | undefined;
}

/**
 * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: `Synonyms`, `Stopwords`, `StemmingDictionary`, `JapaneseTokenizationDictionary` and `AlgorithmicStemming`.
 *
 * @public
 */
export interface AnalysisScheme {
  /**
   * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
   *
   * @public
   */
  AnalysisSchemeName: string | undefined;

  /**
   * An [IETF RFC 4646](http://tools.ietf.org/html/rfc4646) language code or `mul` for multiple languages.
   *
   * @public
   */
  AnalysisSchemeLanguage: AnalysisSchemeLanguage | undefined;

  /**
   * Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.
   *
   * @public
   */
  AnalysisOptions?: AnalysisOptions | undefined;
}

/**
 * Container for the parameters to the `DefineAnalysisScheme` operation. Specifies the name of the domain you want to update and the analysis scheme configuration.
 *
 * @public
 */
export interface DefineAnalysisSchemeRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: `Synonyms`, `Stopwords`, `StemmingDictionary`, `JapaneseTokenizationDictionary` and `AlgorithmicStemming`.
   *
   * @public
   */
  AnalysisScheme: AnalysisScheme | undefined;
}

/**
 * The status of domain configuration option.
 *
 * @public
 */
export interface OptionStatus {
  /**
   * A timestamp for when this option was created.
   *
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * A timestamp for when this option was last updated.
   *
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * A unique integer that indicates when this option was last updated.
   *
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * The state of processing a change to an option. Possible values:
   *
   * - `RequiresIndexDocuments`: the option's latest value will not be deployed until IndexDocuments has been called and indexing is complete.
   * - `Processing`: the option's latest value is in the process of being activated.
   * - `Active`: the option's latest value is completely deployed.
   * - `FailedToValidate`: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.
   *
   * @public
   */
  State: OptionState | undefined;

  /**
   * Indicates that the option will be deleted once processing is complete.
   *
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * The status and configuration of an `AnalysisScheme`.
 *
 * @public
 */
export interface AnalysisSchemeStatus {
  /**
   * Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: `Synonyms`, `Stopwords`, `StemmingDictionary`, `JapaneseTokenizationDictionary` and `AlgorithmicStemming`.
   *
   * @public
   */
  Options: AnalysisScheme | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DefineAnalysisScheme` request. Contains the status of the newly-configured analysis scheme.
 *
 * @public
 */
export interface DefineAnalysisSchemeResponse {
  /**
   * The status and configuration of an `AnalysisScheme`.
   *
   * @public
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
 *
 * @public
 */
export interface Expression {
  /**
   * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
   *
   * @public
   */
  ExpressionName: string | undefined;

  /**
   * The expression to evaluate for sorting while processing a search request. The `Expression` syntax is based on JavaScript expressions. For more information, see [Configuring Expressions](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  ExpressionValue: string | undefined;
}

/**
 * Container for the parameters to the `DefineExpression` operation. Specifies the name of the domain you want to update and the expression you want to configure.
 *
 * @public
 */
export interface DefineExpressionRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.
   *
   * @public
   */
  Expression: Expression | undefined;
}

/**
 * The value of an `Expression` and its current status.
 *
 * @public
 */
export interface ExpressionStatus {
  /**
   * The expression that is evaluated for sorting while processing a search request.
   *
   * @public
   */
  Options: Expression | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DefineExpression` request. Contains the status of the newly-configured expression.
 *
 * @public
 */
export interface DefineExpressionResponse {
  /**
   * The value of an `Expression` and its current status.
   *
   * @public
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * Options for a field that contains an array of dates. Present if `IndexFieldType` specifies the field is of type `date-array`. All options are enabled by default.
 *
 * @public
 */
export interface DateArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A list of source fields to map to the field.
   *
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if `IndexFieldType` specifies the field is of type `date`. All options are enabled by default.
 *
 * @public
 */
export interface DateOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.
   *
   * Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.
   *
   * The name `score` is reserved and cannot be used as a field name. To reference a document's ID, you can use the name `_id`.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * Options for a field that contains an array of double-precision 64-bit floating point values. Present if `IndexFieldType` specifies the field is of type `double-array`. All options are enabled by default.
 *
 * @public
 */
export interface DoubleArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * A list of source fields to map to the field.
   *
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * Options for a double-precision 64-bit floating point field. Present if `IndexFieldType` specifies the field is of type `double`. All options are enabled by default.
 *
 * @public
 */
export interface DoubleOptions {
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   *
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * The name of the source field to map to the field.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * Options for a field that contains an array of 64-bit signed integers. Present if `IndexFieldType` specifies the field is of type `int-array`. All options are enabled by default.
 *
 * @public
 */
export interface IntArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * A list of source fields to map to the field.
   *
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * Options for a 64-bit signed integer field. Present if `IndexFieldType` specifies the field is of type `int`. All options are enabled by default.
 *
 * @public
 */
export interface IntOptions {
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * The name of the source field to map to the field.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if `IndexFieldType` specifies the field is of type `latlon`. All options are enabled by default.
 *
 * @public
 */
export interface LatLonOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.
   *
   * Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.
   *
   * The name `score` is reserved and cannot be used as a field name. To reference a document's ID, you can use the name `_id`.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * Options for a field that contains an array of literal strings. Present if `IndexFieldType` specifies the field is of type `literal-array`. All options are enabled by default.
 *
 * @public
 */
export interface LiteralArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A list of source fields to map to the field.
   *
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * Options for literal field. Present if `IndexFieldType` specifies the field is of type `literal`. All options are enabled by default.
 *
 * @public
 */
export interface LiteralOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.
   *
   * Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.
   *
   * The name `score` is reserved and cannot be used as a field name. To reference a document's ID, you can use the name `_id`.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether facet information can be returned for the field.
   *
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field are searchable.
   *
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * Options for a field that contains an array of text strings. Present if `IndexFieldType` specifies the field is of type `text-array`. A `text-array` field is always searchable. All options are enabled by default.
 *
 * @public
 */
export interface TextArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A list of source fields to map to the field.
   *
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether highlights can be returned for the field.
   *
   * @public
   */
  HighlightEnabled?: boolean | undefined;

  /**
   * The name of an analysis scheme for a `text-array` field.
   *
   * @public
   */
  AnalysisScheme?: string | undefined;
}

/**
 * Options for text field. Present if `IndexFieldType` specifies the field is of type `text`. A `text` field is always searchable. All options are enabled by default.
 *
 * @public
 */
export interface TextOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.
   *
   * Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.
   *
   * The name `score` is reserved and cannot be used as a field name. To reference a document's ID, you can use the name `_id`.
   *
   * @public
   */
  SourceField?: string | undefined;

  /**
   * Whether the contents of the field can be returned in the search results.
   *
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * Whether the field can be used to sort the search results.
   *
   * @public
   */
  SortEnabled?: boolean | undefined;

  /**
   * Whether highlights can be returned for the field.
   *
   * @public
   */
  HighlightEnabled?: boolean | undefined;

  /**
   * The name of an analysis scheme for a `text` field.
   *
   * @public
   */
  AnalysisScheme?: string | undefined;
}

/**
 * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the `IndexFieldType`.
 *
 * @public
 */
export interface IndexField {
  /**
   * A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields. A dynamic field's name defines a pattern that begins or ends with a wildcard. Any document fields that don't map to a regular index field but do match a dynamic field's pattern are configured with the dynamic field's indexing options.
   *
   * Regular field names begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore). Dynamic field names must begin or end with a wildcard (*). The wildcard can also be the only character in a dynamic field name. Multiple wildcards, and wildcards embedded within a string are not supported.
   *
   * The name `score` is reserved and cannot be used as a field name. To reference a document's ID, you can use the name `_id`.
   *
   * @public
   */
  IndexFieldName: string | undefined;

  /**
   * The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see [Configuring Index Fields](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html) in the *Amazon CloudSearch Developer Guide*.
   *
   * @public
   */
  IndexFieldType: IndexFieldType | undefined;

  /**
   * Options for a 64-bit signed integer field. Present if `IndexFieldType` specifies the field is of type `int`. All options are enabled by default.
   *
   * @public
   */
  IntOptions?: IntOptions | undefined;

  /**
   * Options for a double-precision 64-bit floating point field. Present if `IndexFieldType` specifies the field is of type `double`. All options are enabled by default.
   *
   * @public
   */
  DoubleOptions?: DoubleOptions | undefined;

  /**
   * Options for literal field. Present if `IndexFieldType` specifies the field is of type `literal`. All options are enabled by default.
   *
   * @public
   */
  LiteralOptions?: LiteralOptions | undefined;

  /**
   * Options for text field. Present if `IndexFieldType` specifies the field is of type `text`. A `text` field is always searchable. All options are enabled by default.
   *
   * @public
   */
  TextOptions?: TextOptions | undefined;

  /**
   * Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z. Present if `IndexFieldType` specifies the field is of type `date`. All options are enabled by default.
   *
   * @public
   */
  DateOptions?: DateOptions | undefined;

  /**
   * Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if `IndexFieldType` specifies the field is of type `latlon`. All options are enabled by default.
   *
   * @public
   */
  LatLonOptions?: LatLonOptions | undefined;

  /**
   * Options for a field that contains an array of 64-bit signed integers. Present if `IndexFieldType` specifies the field is of type `int-array`. All options are enabled by default.
   *
   * @public
   */
  IntArrayOptions?: IntArrayOptions | undefined;

  /**
   * Options for a field that contains an array of double-precision 64-bit floating point values. Present if `IndexFieldType` specifies the field is of type `double-array`. All options are enabled by default.
   *
   * @public
   */
  DoubleArrayOptions?: DoubleArrayOptions | undefined;

  /**
   * Options for a field that contains an array of literal strings. Present if `IndexFieldType` specifies the field is of type `literal-array`. All options are enabled by default.
   *
   * @public
   */
  LiteralArrayOptions?: LiteralArrayOptions | undefined;

  /**
   * Options for a field that contains an array of text strings. Present if `IndexFieldType` specifies the field is of type `text-array`. A `text-array` field is always searchable. All options are enabled by default.
   *
   * @public
   */
  TextArrayOptions?: TextArrayOptions | undefined;

  /**
   * Options for a field that contains an array of dates. Present if `IndexFieldType` specifies the field is of type `date-array`. All options are enabled by default.
   *
   * @public
   */
  DateArrayOptions?: DateArrayOptions | undefined;
}

/**
 * Container for the parameters to the `DefineIndexField` operation. Specifies the name of the domain you want to update and the index field configuration.
 *
 * @public
 */
export interface DefineIndexFieldRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The index field and field options you want to configure.
   *
   * @public
   */
  IndexField: IndexField | undefined;
}

/**
 * The value of an `IndexField` and its current status.
 *
 * @public
 */
export interface IndexFieldStatus {
  /**
   * Configuration information for a field in the index, including its name, type, and options. The supported options depend on the `IndexFieldType`.
   *
   * @public
   */
  Options: IndexField | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DefineIndexField` request. Contains the status of the newly-configured index field.
 *
 * @public
 */
export interface DefineIndexFieldResponse {
  /**
   * The value of an `IndexField` and its current status.
   *
   * @public
   */
  IndexField: IndexFieldStatus | undefined;
}

/**
 * Options for a search suggester.
 *
 * @public
 */
export interface DocumentSuggesterOptions {
  /**
   * The name of the index field you want to use for suggestions.
   *
   * @public
   */
  SourceField: string | undefined;

  /**
   * The level of fuzziness allowed when suggesting matches for a string: `none`, `low`, or `high`. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none.
   *
   * @public
   */
  FuzzyMatching?: SuggesterFuzzyMatching | undefined;

  /**
   * An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed for suggestions, so sort expressions cannot reference the `_score` value. To sort suggestions using a numeric field or existing expression, simply specify the name of the field or expression. If no expression is configured for the suggester, the suggestions are sorted with the closest matches listed first.
   *
   * @public
   */
  SortExpression?: string | undefined;
}

/**
 * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: `FuzzyMatching`, `SortExpression`.
 *
 * @public
 */
export interface Suggester {
  /**
   * Names must begin with a letter and can contain the following characters: a-z (lowercase), 0-9, and _ (underscore).
   *
   * @public
   */
  SuggesterName: string | undefined;

  /**
   * Options for a search suggester.
   *
   * @public
   */
  DocumentSuggesterOptions: DocumentSuggesterOptions | undefined;
}

/**
 * Container for the parameters to the `DefineSuggester` operation. Specifies the name of the domain you want to update and the suggester configuration.
 *
 * @public
 */
export interface DefineSuggesterRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: `FuzzyMatching`, `SortExpression`.
   *
   * @public
   */
  Suggester: Suggester | undefined;
}

/**
 * The value of a `Suggester` and its current status.
 *
 * @public
 */
export interface SuggesterStatus {
  /**
   * Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: `FuzzyMatching`, `SortExpression`.
   *
   * @public
   */
  Options: Suggester | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DefineSuggester` request. Contains the status of the newly-configured suggester.
 *
 * @public
 */
export interface DefineSuggesterResponse {
  /**
   * The value of a `Suggester` and its current status.
   *
   * @public
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteAnalysisScheme` operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete.
 *
 * @public
 */
export interface DeleteAnalysisSchemeRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the analysis scheme you want to delete.
   *
   * @public
   */
  AnalysisSchemeName: string | undefined;
}

/**
 * The result of a `DeleteAnalysisScheme` request. Contains the status of the deleted analysis scheme.
 *
 * @public
 */
export interface DeleteAnalysisSchemeResponse {
  /**
   * The status of the analysis scheme being deleted.
   *
   * @public
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteDomain` operation. Specifies the name of the domain you want to delete.
 *
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * The name of the domain you want to permanently delete.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of a `DeleteDomain` request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.
 *
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * The current status of the search domain.
   *
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteExpression` operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.
 *
 * @public
 */
export interface DeleteExpressionRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the `Expression` to delete.
   *
   * @public
   */
  ExpressionName: string | undefined;
}

/**
 * The result of a `DeleteExpression` request. Specifies the expression being deleted.
 *
 * @public
 */
export interface DeleteExpressionResponse {
  /**
   * The status of the expression being deleted.
   *
   * @public
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteIndexField` operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.
 *
 * @public
 */
export interface DeleteIndexFieldRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The name of the index field your want to remove from the domain's indexing options.
   *
   * @public
   */
  IndexFieldName: string | undefined;
}

/**
 * The result of a `DeleteIndexField` request.
 *
 * @public
 */
export interface DeleteIndexFieldResponse {
  /**
   * The status of the index field being deleted.
   *
   * @public
   */
  IndexField: IndexFieldStatus | undefined;
}

/**
 * Container for the parameters to the `DeleteSuggester` operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.
 *
 * @public
 */
export interface DeleteSuggesterRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Specifies the name of the suggester you want to delete.
   *
   * @public
   */
  SuggesterName: string | undefined;
}

/**
 * The result of a `DeleteSuggester` request. Contains the status of the deleted suggester.
 *
 * @public
 */
export interface DeleteSuggesterResponse {
  /**
   * The status of the suggester being deleted.
   *
   * @public
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeAnalysisSchemes` operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the `Deployed` option to `true`.
 *
 * @public
 */
export interface DescribeAnalysisSchemesRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The analysis schemes you want to describe.
   *
   * @public
   */
  AnalysisSchemeNames?: string[] | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The result of a `DescribeAnalysisSchemes` request. Contains the analysis schemes configured for the domain specified in the request.
 *
 * @public
 */
export interface DescribeAnalysisSchemesResponse {
  /**
   * The analysis scheme descriptions.
   *
   * @public
   */
  AnalysisSchemes: AnalysisSchemeStatus[] | undefined;
}

/**
 * Container for the parameters to the `DescribeAvailabilityOptions` operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to `true`.
 *
 * @public
 */
export interface DescribeAvailabilityOptionsRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The status and configuration of the domain's availability options.
 *
 * @public
 */
export interface AvailabilityOptionsStatus {
  /**
   * The availability options configured for the domain.
   *
   * @public
   */
  Options: boolean | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DescribeAvailabilityOptions` request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request.
 *
 * @public
 */
export interface DescribeAvailabilityOptionsResponse {
  /**
   * The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain.
   *
   * @public
   */
  AvailabilityOptions?: AvailabilityOptionsStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeDomainEndpointOptions` operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to `true`.
 *
 * @public
 */
export interface DescribeDomainEndpointOptionsRequest {
  /**
   * A string that represents the name of a domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The domain's endpoint options.
 *
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * Whether the domain is HTTPS only enabled.
   *
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * The minimum required TLS version
   *
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;
}

/**
 * The configuration and status of the domain's endpoint options.
 *
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * The domain endpoint options configured for the domain.
   *
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * The status of the configured domain endpoint options.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DescribeDomainEndpointOptions` request. Contains the status and configuration of a search domain's endpoint options.
 *
 * @public
 */
export interface DescribeDomainEndpointOptionsResponse {
  /**
   * The status and configuration of a search domain's endpoint options.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeDomains` operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.
 *
 * @public
 */
export interface DescribeDomainsRequest {
  /**
   * The names of the domains you want to include in the response.
   *
   * @public
   */
  DomainNames?: string[] | undefined;
}

/**
 * The result of a `DescribeDomains` request. Contains the status of the domains specified in the request or all domains owned by the account.
 *
 * @public
 */
export interface DescribeDomainsResponse {
  /**
   * A list that contains the status of each requested domain.
   *
   * @public
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * Container for the parameters to the `DescribeDomains` operation. Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the `Deployed` option to `true`.
 *
 * @public
 */
export interface DescribeExpressionsRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Limits the `DescribeExpressions` response to the specified expressions. If not specified, all expressions are shown.
   *
   * @public
   */
  ExpressionNames?: string[] | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The result of a `DescribeExpressions` request. Contains the expressions configured for the domain specified in the request.
 *
 * @public
 */
export interface DescribeExpressionsResponse {
  /**
   * The expressions configured for the domain.
   *
   * @public
   */
  Expressions: ExpressionStatus[] | undefined;
}

/**
 * Container for the parameters to the `DescribeIndexFields` operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show the active configuration and exclude any pending changes, set the `Deployed` option to `true`.
 *
 * @public
 */
export interface DescribeIndexFieldsRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.
   *
   * @public
   */
  FieldNames?: string[] | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The result of a `DescribeIndexFields` request. Contains the index fields configured for the domain specified in the request.
 *
 * @public
 */
export interface DescribeIndexFieldsResponse {
  /**
   * The index fields configured for the domain.
   *
   * @public
   */
  IndexFields: IndexFieldStatus[] | undefined;
}

/**
 * Container for the parameters to the `DescribeScalingParameters` operation. Specifies the name of the domain you want to describe.
 *
 * @public
 */
export interface DescribeScalingParametersRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The desired instance type and desired number of replicas of each index partition.
 *
 * @public
 */
export interface ScalingParameters {
  /**
   * The instance type that you want to preconfigure for your domain. For example, `search.m1.small`.
   *
   * @public
   */
  DesiredInstanceType?: PartitionInstanceType | undefined;

  /**
   * The number of replicas you want to preconfigure for each index partition.
   *
   * @public
   */
  DesiredReplicationCount?: number | undefined;

  /**
   * The number of partitions you want to preconfigure for your domain. Only valid when you select `m2.2xlarge` as the desired instance type.
   *
   * @public
   */
  DesiredPartitionCount?: number | undefined;
}

/**
 * The status and configuration of a search domain's scaling parameters.
 *
 * @public
 */
export interface ScalingParametersStatus {
  /**
   * The desired instance type and desired number of replicas of each index partition.
   *
   * @public
   */
  Options: ScalingParameters | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DescribeScalingParameters` request. Contains the scaling parameters configured for the domain specified in the request.
 *
 * @public
 */
export interface DescribeScalingParametersResponse {
  /**
   * The status and configuration of a search domain's scaling parameters.
   *
   * @public
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeServiceAccessPolicies` operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the `Deployed` option to `true`.
 *
 * @public
 */
export interface DescribeServiceAccessPoliciesRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The configured access rules for the domain's document and search endpoints, and the current status of those rules.
 *
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * Access rules for a domain's document or search service endpoints. For more information, see [Configuring Access for a Search Domain](http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html) in the *Amazon CloudSearch Developer Guide*. The maximum size of a policy document is 100 KB.
   *
   * @public
   */
  Options: string | undefined;

  /**
   * The status of domain configuration option.
   *
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * The result of a `DescribeServiceAccessPolicies` request.
 *
 * @public
 */
export interface DescribeServiceAccessPoliciesResponse {
  /**
   * The access rules configured for the domain specified in the request.
   *
   * @public
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

/**
 * Container for the parameters to the `DescribeSuggester` operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the `Deployed` option to `true`.
 *
 * @public
 */
export interface DescribeSuggestersRequest {
  /**
   * The name of the domain you want to describe.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The suggesters you want to describe.
   *
   * @public
   */
  SuggesterNames?: string[] | undefined;

  /**
   * Whether to display the deployed configuration (`true`) or include any pending changes (`false`). Defaults to `false`.
   *
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * The result of a `DescribeSuggesters` request.
 *
 * @public
 */
export interface DescribeSuggestersResponse {
  /**
   * The suggesters configured for the domain specified in the request.
   *
   * @public
   */
  Suggesters: SuggesterStatus[] | undefined;
}

/**
 * Container for the parameters to the `IndexDocuments` operation. Specifies the name of the domain you want to re-index.
 *
 * @public
 */
export interface IndexDocumentsRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * The result of an `IndexDocuments` request. Contains the status of the indexing operation, including the fields being indexed.
 *
 * @public
 */
export interface IndexDocumentsResponse {
  /**
   * The names of the fields that are currently being indexed.
   *
   * @public
   */
  FieldNames?: string[] | undefined;
}

/**
 * The result of a `ListDomainNames` request. Contains a list of the domains owned by an account.
 *
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * The names of the search domains owned by an account.
   *
   * @public
   */
  DomainNames?: Record<string, string> | undefined;
}

/**
 * Container for the parameters to the `UpdateAvailabilityOptions` operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.
 *
 * @public
 */
export interface UpdateAvailabilityOptionsRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to `false`.
   *
   * @public
   */
  MultiAZ: boolean | undefined;
}

/**
 * The result of a `UpdateAvailabilityOptions` request. Contains the status of the domain's availability options.
 *
 * @public
 */
export interface UpdateAvailabilityOptionsResponse {
  /**
   * The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain.
   *
   * @public
   */
  AvailabilityOptions?: AvailabilityOptionsStatus | undefined;
}

/**
 * Container for the parameters to the `UpdateDomainEndpointOptions` operation. Specifies the name of the domain you want to update and the domain endpoint options.
 *
 * @public
 */
export interface UpdateDomainEndpointOptionsRequest {
  /**
   * A string that represents the name of a domain.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07.
   *
   * @public
   */
  DomainEndpointOptions: DomainEndpointOptions | undefined;
}

/**
 * The result of a `UpdateDomainEndpointOptions` request. Contains the configuration and status of the domain's endpoint options.
 *
 * @public
 */
export interface UpdateDomainEndpointOptionsResponse {
  /**
   * The newly-configured domain endpoint options.
   *
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;
}

/**
 * Container for the parameters to the `UpdateScalingParameters` operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.
 *
 * @public
 */
export interface UpdateScalingParametersRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The desired instance type and desired number of replicas of each index partition.
   *
   * @public
   */
  ScalingParameters: ScalingParameters | undefined;
}

/**
 * The result of a `UpdateScalingParameters` request. Contains the status of the newly-configured scaling parameters.
 *
 * @public
 */
export interface UpdateScalingParametersResponse {
  /**
   * The status and configuration of a search domain's scaling parameters.
   *
   * @public
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * Container for the parameters to the `UpdateServiceAccessPolicies` operation. Specifies the name of the domain you want to update and the access rules you want to configure.
 *
 * @public
 */
export interface UpdateServiceAccessPoliciesRequest {
  /**
   * A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The access rules you want to configure. These rules replace any existing rules.
   *
   * @public
   */
  AccessPolicies: string | undefined;
}

/**
 * The result of an `UpdateServiceAccessPolicies` request. Contains the new access policies.
 *
 * @public
 */
export interface UpdateServiceAccessPoliciesResponse {
  /**
   * The access rules configured for the domain.
   *
   * @public
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}
