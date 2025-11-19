// smithy-typescript generated code
import {
  AlgorithmicStemming,
  AnalysisSchemeLanguage,
  IndexFieldType,
  OptionState,
  PartitionInstanceType,
  SuggesterFuzzyMatching,
  TLSSecurityPolicy,
} from "./enums";

/**
 * <p>Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.</p>
 * @public
 */
export interface BuildSuggestersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.</p>
 * @public
 */
export interface BuildSuggestersResponse {
  /**
   * <p>A list of field names.</p>
   * @public
   */
  FieldNames?: string[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.</p>
 * @public
 */
export interface CreateDomainRequest {
  /**
   * <p>A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The endpoint to which service requests can be submitted.</p>
 * @public
 */
export interface ServiceEndpoint {
  /**
   * <p>The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.</p>
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
 * <p>The current status of the search domain.</p>
 * @public
 */
export interface DomainStatus {
  /**
   * <p>An internally generated unique identifier for a domain.</p>
   * @public
   */
  DomainId: string | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the search domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   * @public
   */
  ARN?: string | undefined;

  /**
   * <p>True if the search domain is created. It can take several minutes to initialize a domain when <a>CreateDomain</a> is called. Newly created search domains are returned from <a>DescribeDomains</a> with a false value for Created until domain creation is complete.</p>
   * @public
   */
  Created?: boolean | undefined;

  /**
   * <p>True if the search domain has been deleted.  The system must clean up resources dedicated to the search domain when <a>DeleteDomain</a> is called.  Newly deleted search domains are returned from <a>DescribeDomains</a> with a true value for IsDeleted for several minutes until resource cleanup is complete.</p>
   * @public
   */
  Deleted?: boolean | undefined;

  /**
   * <p>The service endpoint for updating documents in a search domain.</p>
   * @public
   */
  DocService?: ServiceEndpoint | undefined;

  /**
   * <p>The service endpoint for requesting search results from a search domain.</p>
   * @public
   */
  SearchService?: ServiceEndpoint | undefined;

  /**
   * <p>True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.</p>
   * @public
   */
  RequiresIndexDocuments: boolean | undefined;

  /**
   * <p>True if processing is being done to activate the current domain configuration.</p>
   * @public
   */
  Processing?: boolean | undefined;

  /**
   * <p>The instance type that is being used to process search requests.</p>
   * @public
   */
  SearchInstanceType?: string | undefined;

  /**
   * <p>The number of partitions across which the search index is spread.</p>
   * @public
   */
  SearchPartitionCount?: number | undefined;

  /**
   * <p>The number of search instances that are available to process search requests.</p>
   * @public
   */
  SearchInstanceCount?: number | undefined;

  Limits?: Limits | undefined;
}

/**
 * <p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>
 * @public
 */
export interface CreateDomainResponse {
  /**
   * <p>The current status of the search domain.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
 * @public
 */
export interface AnalysisOptions {
  /**
   * <p>A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms">Synonyms</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   * @public
   */
  Synonyms?: string | undefined;

  /**
   * <p>A  JSON array of terms to ignore during indexing and searching. For example, <code>["a", "an", "the", "of"]</code>. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. </p>
   * @public
   */
  Stopwords?: string | undefined;

  /**
   * <p>A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, <code>\{"term1": "stem1", "term2": "stem2", "term3": "stem3"\}</code>. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.</p>
   * @public
   */
  StemmingDictionary?: string | undefined;

  /**
   * <p>A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.</p>
   * @public
   */
  JapaneseTokenizationDictionary?: string | undefined;

  /**
   * <p>The level of algorithmic stemming to perform: <code>none</code>, <code>minimal</code>, <code>light</code>, or <code>full</code>. The available levels vary depending on the language. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings" target="_blank">Language Specific Text Processing Settings</a> in the <i>Amazon CloudSearch Developer Guide</i> </p>
   * @public
   */
  AlgorithmicStemming?: AlgorithmicStemming | undefined;
}

/**
 * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
 * @public
 */
export interface AnalysisScheme {
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   * @public
   */
  AnalysisSchemeName: string | undefined;

  /**
   * <p>An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code>  for multiple languages.</p>
   * @public
   */
  AnalysisSchemeLanguage: AnalysisSchemeLanguage | undefined;

  /**
   * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
   * @public
   */
  AnalysisOptions?: AnalysisOptions | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.</p>
 * @public
 */
export interface DefineAnalysisSchemeRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   * @public
   */
  AnalysisScheme: AnalysisScheme | undefined;
}

/**
 * <p>The status of domain configuration option.</p>
 * @public
 */
export interface OptionStatus {
  /**
   * <p>A timestamp for when this option was created.</p>
   * @public
   */
  CreationDate: Date | undefined;

  /**
   * <p>A timestamp for when this option was last updated.</p>
   * @public
   */
  UpdateDate: Date | undefined;

  /**
   * <p>A unique integer that indicates when this option was last updated.</p>
   * @public
   */
  UpdateVersion?: number | undefined;

  /**
   * <p>The state of processing a change to an option.  Possible values:</p><ul>
   *     <li><code>RequiresIndexDocuments</code>: the option's latest value will not be deployed until  <a>IndexDocuments</a> has been called and indexing is complete.</li>
   *     <li><code>Processing</code>: the option's latest value is in the process of being activated.  </li>
   *     <li><code>Active</code>: the option's latest value is completely deployed.</li>
   *     <li><code>FailedToValidate</code>: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li>
   *   </ul>
   * @public
   */
  State: OptionState | undefined;

  /**
   * <p>Indicates that the option will be deleted once processing is complete.</p>
   * @public
   */
  PendingDeletion?: boolean | undefined;
}

/**
 * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
 * @public
 */
export interface AnalysisSchemeStatus {
  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   * @public
   */
  Options: AnalysisScheme | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>
 * @public
 */
export interface DefineAnalysisSchemeResponse {
  /**
   * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
   * @public
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
 * @public
 */
export interface Expression {
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   * @public
   */
  ExpressionName: string | undefined;

  /**
   * <p>The expression to evaluate for sorting while processing a search request.  The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   * @public
   */
  ExpressionValue: string | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.</p>
 * @public
 */
export interface DefineExpressionRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
   * @public
   */
  Expression: Expression | undefined;
}

/**
 * <p>The value of an <code>Expression</code> and its current status.</p>
 * @public
 */
export interface ExpressionStatus {
  /**
   * <p>The expression that is evaluated for sorting while processing a search request.</p>
   * @public
   */
  Options: Expression | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>
 * @public
 */
export interface DefineExpressionResponse {
  /**
   * <p>The value of an <code>Expression</code> and its current status.</p>
   * @public
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
 * @public
 */
export interface DateArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A list of source fields to map to the field. </p>
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
 * @public
 */
export interface DateOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields.
   *       A dynamic field's name defines a pattern that begins or ends with a wildcard.
   *       Any document fields that don't map to a regular index field but do match a
   *       dynamic field's pattern are configured with the dynamic field's indexing options.
   *     </p>
   *     <p>Regular field names begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).
   *       Dynamic field names must begin or end with a wildcard (*).
   *       The wildcard can also be the only character in a dynamic field name.
   *       Multiple wildcards, and wildcards embedded within a string are not supported.
   *     </p>
   *     <p>The name <code>score</code> is reserved and cannot be used as a field name.
   *       To reference a document's ID, you can use the name <code>_id</code>.
   *     </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
 * @public
 */
export interface DoubleArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>A list of source fields to map to the field. </p>
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
 * @public
 */
export interface DoubleOptions {
  /**
   * <p>A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.</p>
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>The name of the source field to map to the field. </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * <p>Options for a field that contains an array of 64-bit signed integers.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
 * @public
 */
export interface IntArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>A list of source fields to map to the field. </p>
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
 * @public
 */
export interface IntOptions {
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   * @public
   */
  DefaultValue?: number | undefined;

  /**
   * <p>The name of the source field to map to the field. </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
 * @public
 */
export interface LatLonOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields.
   *       A dynamic field's name defines a pattern that begins or ends with a wildcard.
   *       Any document fields that don't map to a regular index field but do match a
   *       dynamic field's pattern are configured with the dynamic field's indexing options.
   *     </p>
   *     <p>Regular field names begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).
   *       Dynamic field names must begin or end with a wildcard (*).
   *       The wildcard can also be the only character in a dynamic field name.
   *       Multiple wildcards, and wildcards embedded within a string are not supported.
   *     </p>
   *     <p>The name <code>score</code> is reserved and cannot be used as a field name.
   *       To reference a document's ID, you can use the name <code>_id</code>.
   *     </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
 * @public
 */
export interface LiteralArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A list of source fields to map to the field. </p>
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;
}

/**
 * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
 * @public
 */
export interface LiteralOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields.
   *       A dynamic field's name defines a pattern that begins or ends with a wildcard.
   *       Any document fields that don't map to a regular index field but do match a
   *       dynamic field's pattern are configured with the dynamic field's indexing options.
   *     </p>
   *     <p>Regular field names begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).
   *       Dynamic field names must begin or end with a wildcard (*).
   *       The wildcard can also be the only character in a dynamic field name.
   *       Multiple wildcards, and wildcards embedded within a string are not supported.
   *     </p>
   *     <p>The name <code>score</code> is reserved and cannot be used as a field name.
   *       To reference a document's ID, you can use the name <code>_id</code>.
   *     </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   * @public
   */
  FacetEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   * @public
   */
  SearchEnabled?: boolean | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;
}

/**
 * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
 * @public
 */
export interface TextArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A list of source fields to map to the field. </p>
   * @public
   */
  SourceFields?: string | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   * @public
   */
  HighlightEnabled?: boolean | undefined;

  /**
   * <p>The name of an analysis scheme for a  <code>text-array</code> field.</p>
   * @public
   */
  AnalysisScheme?: string | undefined;
}

/**
 * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
 * @public
 */
export interface TextOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields.
   *       A dynamic field's name defines a pattern that begins or ends with a wildcard.
   *       Any document fields that don't map to a regular index field but do match a
   *       dynamic field's pattern are configured with the dynamic field's indexing options.
   *     </p>
   *     <p>Regular field names begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).
   *       Dynamic field names must begin or end with a wildcard (*).
   *       The wildcard can also be the only character in a dynamic field name.
   *       Multiple wildcards, and wildcards embedded within a string are not supported.
   *     </p>
   *     <p>The name <code>score</code> is reserved and cannot be used as a field name.
   *       To reference a document's ID, you can use the name <code>_id</code>.
   *     </p>
   * @public
   */
  SourceField?: string | undefined;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   * @public
   */
  ReturnEnabled?: boolean | undefined;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   * @public
   */
  SortEnabled?: boolean | undefined;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   * @public
   */
  HighlightEnabled?: boolean | undefined;

  /**
   * <p>The name of an analysis scheme for a  <code>text</code> field.</p>
   * @public
   */
  AnalysisScheme?: string | undefined;
}

/**
 * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
 * @public
 */
export interface IndexField {
  /**
   * <p>A string that represents the name of an index field. CloudSearch supports regular index fields as well as dynamic fields.
   *       A dynamic field's name defines a pattern that begins or ends with a wildcard.
   *       Any document fields that don't map to a regular index field but do match a
   *       dynamic field's pattern are configured with the dynamic field's indexing options.
   *     </p>
   *     <p>Regular field names begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).
   *       Dynamic field names must begin or end with a wildcard (*).
   *       The wildcard can also be the only character in a dynamic field name.
   *       Multiple wildcards, and wildcards embedded within a string are not supported.
   *     </p>
   *     <p>The name <code>score</code> is reserved and cannot be used as a field name.
   *       To reference a document's ID, you can use the name <code>_id</code>.
   *     </p>
   * @public
   */
  IndexFieldName: string | undefined;

  /**
   * <p>The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   * @public
   */
  IndexFieldType: IndexFieldType | undefined;

  /**
   * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
   * @public
   */
  IntOptions?: IntOptions | undefined;

  /**
   * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
   * @public
   */
  DoubleOptions?: DoubleOptions | undefined;

  /**
   * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
   * @public
   */
  LiteralOptions?: LiteralOptions | undefined;

  /**
   * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
   * @public
   */
  TextOptions?: TextOptions | undefined;

  /**
   * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
   * @public
   */
  DateOptions?: DateOptions | undefined;

  /**
   * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
   * @public
   */
  LatLonOptions?: LatLonOptions | undefined;

  /**
   * <p>Options for a field that contains an array of 64-bit signed integers.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
   * @public
   */
  IntArrayOptions?: IntArrayOptions | undefined;

  /**
   * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
   * @public
   */
  DoubleArrayOptions?: DoubleArrayOptions | undefined;

  /**
   * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
   * @public
   */
  LiteralArrayOptions?: LiteralArrayOptions | undefined;

  /**
   * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
   * @public
   */
  TextArrayOptions?: TextArrayOptions | undefined;

  /**
   * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
   * @public
   */
  DateArrayOptions?: DateArrayOptions | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.</p>
 * @public
 */
export interface DefineIndexFieldRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The index field and field options you want to configure. </p>
   * @public
   */
  IndexField: IndexField | undefined;
}

/**
 * <p>The value of an <code>IndexField</code> and its current status.</p>
 * @public
 */
export interface IndexFieldStatus {
  /**
   * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
   * @public
   */
  Options: IndexField | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>
 * @public
 */
export interface DefineIndexFieldResponse {
  /**
   * <p>The value of an <code>IndexField</code> and its current status.</p>
   * @public
   */
  IndexField: IndexFieldStatus | undefined;
}

/**
 * <p>Options for a search suggester.</p>
 * @public
 */
export interface DocumentSuggesterOptions {
  /**
   * <p>The name of the index field you want to use for suggestions.
   *       </p>
   * @public
   */
  SourceField: string | undefined;

  /**
   * <p>The level of fuzziness allowed when suggesting matches for a string: <code>none</code>, <code>low</code>, or <code>high</code>. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none. </p>
   * @public
   */
  FuzzyMatching?: SuggesterFuzzyMatching | undefined;

  /**
   * <p>An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest
   *         integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed
   *         for suggestions, so sort expressions cannot reference the <code>_score</code> value.
   *         To sort suggestions using a numeric field or existing expression, simply specify
   *         the name of the field or expression. If no expression is configured for the suggester, the
   *         suggestions are sorted with the closest matches listed first.</p>
   * @public
   */
  SortExpression?: string | undefined;
}

/**
 * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
 * @public
 */
export interface Suggester {
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   * @public
   */
  SuggesterName: string | undefined;

  /**
   * <p>Options for a search suggester.</p>
   * @public
   */
  DocumentSuggesterOptions: DocumentSuggesterOptions | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.</p>
 * @public
 */
export interface DefineSuggesterRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   * @public
   */
  Suggester: Suggester | undefined;
}

/**
 * <p>The value of a <code>Suggester</code> and its current status.</p>
 * @public
 */
export interface SuggesterStatus {
  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   * @public
   */
  Options: Suggester | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.</p>
 * @public
 */
export interface DefineSuggesterResponse {
  /**
   * <p>The value of a <code>Suggester</code> and its current status.</p>
   * @public
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. </p>
 * @public
 */
export interface DeleteAnalysisSchemeRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the analysis scheme you want to delete.</p>
   * @public
   */
  AnalysisSchemeName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>
 * @public
 */
export interface DeleteAnalysisSchemeResponse {
  /**
   * <p>The status of the analysis scheme being deleted.</p>
   * @public
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.</p>
 * @public
 */
export interface DeleteDomainRequest {
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>
 * @public
 */
export interface DeleteDomainResponse {
  /**
   * <p>The current status of the search domain.</p>
   * @public
   */
  DomainStatus?: DomainStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.</p>
 * @public
 */
export interface DeleteExpressionRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the <code><a>Expression</a></code> to delete.</p>
   * @public
   */
  ExpressionName: string | undefined;
}

/**
 * <p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>
 * @public
 */
export interface DeleteExpressionResponse {
  /**
   * <p>The status of the expression being deleted.</p>
   * @public
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.</p>
 * @public
 */
export interface DeleteIndexFieldRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the index field your want to remove from the domain's indexing options.</p>
   * @public
   */
  IndexFieldName: string | undefined;
}

/**
 * <p>The result of a <code><a>DeleteIndexField</a></code> request.</p>
 * @public
 */
export interface DeleteIndexFieldResponse {
  /**
   * <p>The status of the index field being deleted.</p>
   * @public
   */
  IndexField: IndexFieldStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.</p>
 * @public
 */
export interface DeleteSuggesterRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Specifies the name of the suggester you want to delete.</p>
   * @public
   */
  SuggesterName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>
 * @public
 */
export interface DeleteSuggesterResponse {
  /**
   * <p>The status of the suggester being deleted.</p>
   * @public
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. </p>
 * @public
 */
export interface DescribeAnalysisSchemesRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The analysis schemes you want to describe.</p>
   * @public
   */
  AnalysisSchemeNames?: string[] | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>
 * @public
 */
export interface DescribeAnalysisSchemesResponse {
  /**
   * <p>The analysis scheme descriptions.</p>
   * @public
   */
  AnalysisSchemes: AnalysisSchemeStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 * @public
 */
export interface DescribeAvailabilityOptionsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The status and configuration of the domain's availability options.</p>
 * @public
 */
export interface AvailabilityOptionsStatus {
  /**
   * <p>The availability options configured for the domain.</p>
   * @public
   */
  Options: boolean | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>
 * @public
 */
export interface DescribeAvailabilityOptionsResponse {
  /**
   * <p>The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. </p>
   * @public
   */
  AvailabilityOptions?: AvailabilityOptionsStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 * @public
 */
export interface DescribeDomainEndpointOptionsRequest {
  /**
   * <p>A string that represents the name of a domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The domain's endpoint options.</p>
 * @public
 */
export interface DomainEndpointOptions {
  /**
   * <p>Whether the domain is HTTPS only enabled.</p>
   * @public
   */
  EnforceHTTPS?: boolean | undefined;

  /**
   * <p>The minimum required TLS version</p>
   * @public
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | undefined;
}

/**
 * <p>The configuration and status of the domain's endpoint options.</p>
 * @public
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>The domain endpoint options configured for the domain.</p>
   * @public
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the configured domain endpoint options.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. </p>
 * @public
 */
export interface DescribeDomainEndpointOptionsResponse {
  /**
   * <p>The status and configuration of a search domain's endpoint options.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.</p>
 * @public
 */
export interface DescribeDomainsRequest {
  /**
   * <p>The names of the domains you want to include in the response.</p>
   * @public
   */
  DomainNames?: string[] | undefined;
}

/**
 * <p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>
 * @public
 */
export interface DescribeDomainsResponse {
  /**
   * <p>A list that contains the status of each requested domain.</p>
   * @public
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation.
 *       Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 * @public
 */
export interface DescribeExpressionsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.</p>
   * @public
   */
  ExpressionNames?: string[] | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>
 * @public
 */
export interface DescribeExpressionsResponse {
  /**
   * <p>The expressions configured for the domain.</p>
   * @public
   */
  Expressions: ExpressionStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show  the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 * @public
 */
export interface DescribeIndexFieldsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.</p>
   * @public
   */
  FieldNames?: string[] | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>
 * @public
 */
export interface DescribeIndexFieldsResponse {
  /**
   * <p>The index fields configured for the domain.</p>
   * @public
   */
  IndexFields: IndexFieldStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. </p>
 * @public
 */
export interface DescribeScalingParametersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The desired instance type and desired number of replicas of each index partition.</p>
 * @public
 */
export interface ScalingParameters {
  /**
   * <p>The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.</p>
   * @public
   */
  DesiredInstanceType?: PartitionInstanceType | undefined;

  /**
   * <p>The number of replicas you want to preconfigure for each index partition.</p>
   * @public
   */
  DesiredReplicationCount?: number | undefined;

  /**
   * <p>The number of partitions you want to preconfigure for your domain. Only valid when
   *     you select <code>m2.2xlarge</code> as the desired instance type.</p>
   * @public
   */
  DesiredPartitionCount?: number | undefined;
}

/**
 * <p>The status and configuration of a search domain's scaling parameters. </p>
 * @public
 */
export interface ScalingParametersStatus {
  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   * @public
   */
  Options: ScalingParameters | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.</p>
 * @public
 */
export interface DescribeScalingParametersResponse {
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   * @public
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 * @public
 */
export interface DescribeServiceAccessPoliciesRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 * @public
 */
export interface AccessPoliciesStatus {
  /**
   * <p>Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>
   * @public
   */
  Options: string | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   * @public
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>
 * @public
 */
export interface DescribeServiceAccessPoliciesResponse {
  /**
   * <p>The access rules configured for the domain specified in the request.</p>
   * @public
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 * @public
 */
export interface DescribeSuggestersRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The suggesters you want to describe.</p>
   * @public
   */
  SuggesterNames?: string[] | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   * @public
   */
  Deployed?: boolean | undefined;
}

/**
 * <p>The result of a <code>DescribeSuggesters</code> request.</p>
 * @public
 */
export interface DescribeSuggestersResponse {
  /**
   * <p>The suggesters configured for the domain specified in the request.</p>
   * @public
   */
  Suggesters: SuggesterStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.</p>
 * @public
 */
export interface IndexDocumentsRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>
 * @public
 */
export interface IndexDocumentsResponse {
  /**
   * <p>The names of the fields that are currently being indexed.</p>
   * @public
   */
  FieldNames?: string[] | undefined;
}

/**
 * <p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>
 * @public
 */
export interface ListDomainNamesResponse {
  /**
   * <p>The names of the search domains owned by an account.</p>
   * @public
   */
  DomainNames?: Record<string, string> | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.</p>
 * @public
 */
export interface UpdateAvailabilityOptionsRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. </p>
   * @public
   */
  MultiAZ: boolean | undefined;
}

/**
 * <p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>
 * @public
 */
export interface UpdateAvailabilityOptionsResponse {
  /**
   * <p>The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. </p>
   * @public
   */
  AvailabilityOptions?: AvailabilityOptionsStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.</p>
 * @public
 */
export interface UpdateDomainEndpointOptionsRequest {
  /**
   * <p>A string that represents the name of a domain.</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. </p>
   * @public
   */
  DomainEndpointOptions: DomainEndpointOptions | undefined;
}

/**
 * <p>The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. </p>
 * @public
 */
export interface UpdateDomainEndpointOptionsResponse {
  /**
   * <p>The newly-configured domain endpoint options.</p>
   * @public
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.</p>
 * @public
 */
export interface UpdateScalingParametersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   * @public
   */
  ScalingParameters: ScalingParameters | undefined;
}

/**
 * <p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>
 * @public
 */
export interface UpdateScalingParametersResponse {
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   * @public
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.</p>
 * @public
 */
export interface UpdateServiceAccessPoliciesRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   * @public
   */
  DomainName: string | undefined;

  /**
   * <p>The access rules you want to configure. These rules replace any existing rules. </p>
   * @public
   */
  AccessPolicies: string | undefined;
}

/**
 * <p>The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.</p>
 * @public
 */
export interface UpdateServiceAccessPoliciesResponse {
  /**
   * <p>The access rules configured for the domain.</p>
   * @public
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}
