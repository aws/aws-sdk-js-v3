import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
  __type?: "AccessPoliciesStatus";
  /**
   * <p>Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AccessPoliciesStatus {
  export const filterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessPoliciesStatus =>
    __isa(o, "AccessPoliciesStatus");
}

export type AlgorithmicStemming = "full" | "light" | "minimal" | "none";

/**
 * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
 */
export interface AnalysisOptions {
  __type?: "AnalysisOptions";
  /**
   * <p>The level of algorithmic stemming to perform: <code>none</code>, <code>minimal</code>, <code>light</code>, or <code>full</code>. The available levels vary depending on the language. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings" target="_blank">Language Specific Text Processing Settings</a> in the <i>Amazon CloudSearch Developer Guide</i> </p>
   */
  AlgorithmicStemming?: AlgorithmicStemming | string;

  /**
   * <p>A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.</p>
   */
  JapaneseTokenizationDictionary?: string;

  /**
   * <p>A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, <code>{"term1": "stem1", "term2": "stem2", "term3": "stem3"}</code>. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.</p>
   */
  StemmingDictionary?: string;

  /**
   * <p>A  JSON array of terms to ignore during indexing and searching. For example, <code>["a", "an", "the", "of"]</code>. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. </p>
   */
  Stopwords?: string;

  /**
   * <p>A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms">Synonyms</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  Synonyms?: string;
}

export namespace AnalysisOptions {
  export const filterSensitiveLog = (obj: AnalysisOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is AnalysisOptions =>
    __isa(o, "AnalysisOptions");
}

/**
 * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
 */
export interface AnalysisScheme {
  __type?: "AnalysisScheme";
  /**
   * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
   */
  AnalysisOptions?: AnalysisOptions;

  /**
   * <p>An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code>  for multiple languages.</p>
   */
  AnalysisSchemeLanguage: AnalysisSchemeLanguage | string | undefined;

  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  AnalysisSchemeName: string | undefined;
}

export namespace AnalysisScheme {
  export const filterSensitiveLog = (obj: AnalysisScheme): any => ({
    ...obj
  });
  export const isa = (o: any): o is AnalysisScheme =>
    __isa(o, "AnalysisScheme");
}

export type AnalysisSchemeLanguage =
  | "ar"
  | "bg"
  | "ca"
  | "cs"
  | "da"
  | "de"
  | "el"
  | "en"
  | "es"
  | "eu"
  | "fa"
  | "fi"
  | "fr"
  | "ga"
  | "gl"
  | "he"
  | "hi"
  | "hu"
  | "hy"
  | "id"
  | "it"
  | "ja"
  | "ko"
  | "lv"
  | "mul"
  | "nl"
  | "no"
  | "pt"
  | "ro"
  | "ru"
  | "sv"
  | "th"
  | "tr"
  | "zh-Hans"
  | "zh-Hant";

/**
 * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
 */
export interface AnalysisSchemeStatus {
  __type?: "AnalysisSchemeStatus";
  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   */
  Options: AnalysisScheme | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AnalysisSchemeStatus {
  export const filterSensitiveLog = (obj: AnalysisSchemeStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AnalysisSchemeStatus =>
    __isa(o, "AnalysisSchemeStatus");
}

/**
 * <p>The status and configuration of the domain's availability options.</p>
 */
export interface AvailabilityOptionsStatus {
  __type?: "AvailabilityOptionsStatus";
  /**
   * <p>The availability options configured for the domain.</p>
   */
  Options: boolean | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace AvailabilityOptionsStatus {
  export const filterSensitiveLog = (obj: AvailabilityOptionsStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is AvailabilityOptionsStatus =>
    __isa(o, "AvailabilityOptionsStatus");
}

/**
 * <p>An error occurred while processing the request.</p>
 */
export interface BaseException extends __SmithyException, $MetadataBearer {
  name: "BaseException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace BaseException {
  export const filterSensitiveLog = (obj: BaseException): any => ({
    ...obj
  });
  export const isa = (o: any): o is BaseException => __isa(o, "BaseException");
}

/**
 * <p>Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.</p>
 */
export interface BuildSuggestersRequest {
  __type?: "BuildSuggestersRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace BuildSuggestersRequest {
  export const filterSensitiveLog = (obj: BuildSuggestersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BuildSuggestersRequest =>
    __isa(o, "BuildSuggestersRequest");
}

/**
 * <p>The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.</p>
 */
export interface BuildSuggestersResponse {
  __type?: "BuildSuggestersResponse";
  /**
   * <p>A list of field names.</p>
   */
  FieldNames?: string[];
}

export namespace BuildSuggestersResponse {
  export const filterSensitiveLog = (obj: BuildSuggestersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BuildSuggestersResponse =>
    __isa(o, "BuildSuggestersResponse");
}

/**
 * <p>Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.</p>
 */
export interface CreateDomainRequest {
  __type?: "CreateDomainRequest";
  /**
   * <p>A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.</p>
   */
  DomainName: string | undefined;
}

export namespace CreateDomainRequest {
  export const filterSensitiveLog = (obj: CreateDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainRequest =>
    __isa(o, "CreateDomainRequest");
}

/**
 * <p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>
 */
export interface CreateDomainResponse {
  __type?: "CreateDomainResponse";
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: DomainStatus;
}

export namespace CreateDomainResponse {
  export const filterSensitiveLog = (obj: CreateDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDomainResponse =>
    __isa(o, "CreateDomainResponse");
}

/**
 * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
 */
export interface DateArrayOptions {
  __type?: "DateArrayOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;
}

export namespace DateArrayOptions {
  export const filterSensitiveLog = (obj: DateArrayOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateArrayOptions =>
    __isa(o, "DateArrayOptions");
}

/**
 * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
 */
export interface DateOptions {
  __type?: "DateOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

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
   */
  SourceField?: string;
}

export namespace DateOptions {
  export const filterSensitiveLog = (obj: DateOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DateOptions => __isa(o, "DateOptions");
}

/**
 * <p>Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.</p>
 */
export interface DefineAnalysisSchemeRequest {
  __type?: "DefineAnalysisSchemeRequest";
  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   */
  AnalysisScheme: AnalysisScheme | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace DefineAnalysisSchemeRequest {
  export const filterSensitiveLog = (
    obj: DefineAnalysisSchemeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineAnalysisSchemeRequest =>
    __isa(o, "DefineAnalysisSchemeRequest");
}

/**
 * <p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>
 */
export interface DefineAnalysisSchemeResponse {
  __type?: "DefineAnalysisSchemeResponse";
  /**
   * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

export namespace DefineAnalysisSchemeResponse {
  export const filterSensitiveLog = (
    obj: DefineAnalysisSchemeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineAnalysisSchemeResponse =>
    __isa(o, "DefineAnalysisSchemeResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.</p>
 */
export interface DefineExpressionRequest {
  __type?: "DefineExpressionRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
   */
  Expression: Expression | undefined;
}

export namespace DefineExpressionRequest {
  export const filterSensitiveLog = (obj: DefineExpressionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineExpressionRequest =>
    __isa(o, "DefineExpressionRequest");
}

/**
 * <p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>
 */
export interface DefineExpressionResponse {
  __type?: "DefineExpressionResponse";
  /**
   * <p>The value of an <code>Expression</code> and its current status.</p>
   */
  Expression: ExpressionStatus | undefined;
}

export namespace DefineExpressionResponse {
  export const filterSensitiveLog = (obj: DefineExpressionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineExpressionResponse =>
    __isa(o, "DefineExpressionResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.</p>
 */
export interface DefineIndexFieldRequest {
  __type?: "DefineIndexFieldRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The index field and field options you want to configure. </p>
   */
  IndexField: IndexField | undefined;
}

export namespace DefineIndexFieldRequest {
  export const filterSensitiveLog = (obj: DefineIndexFieldRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineIndexFieldRequest =>
    __isa(o, "DefineIndexFieldRequest");
}

/**
 * <p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>
 */
export interface DefineIndexFieldResponse {
  __type?: "DefineIndexFieldResponse";
  /**
   * <p>The value of an <code>IndexField</code> and its current status.</p>
   */
  IndexField: IndexFieldStatus | undefined;
}

export namespace DefineIndexFieldResponse {
  export const filterSensitiveLog = (obj: DefineIndexFieldResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineIndexFieldResponse =>
    __isa(o, "DefineIndexFieldResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.</p>
 */
export interface DefineSuggesterRequest {
  __type?: "DefineSuggesterRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Suggester: Suggester | undefined;
}

export namespace DefineSuggesterRequest {
  export const filterSensitiveLog = (obj: DefineSuggesterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineSuggesterRequest =>
    __isa(o, "DefineSuggesterRequest");
}

/**
 * <p>The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.</p>
 */
export interface DefineSuggesterResponse {
  __type?: "DefineSuggesterResponse";
  /**
   * <p>The value of a <code>Suggester</code> and its current status.</p>
   */
  Suggester: SuggesterStatus | undefined;
}

export namespace DefineSuggesterResponse {
  export const filterSensitiveLog = (obj: DefineSuggesterResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DefineSuggesterResponse =>
    __isa(o, "DefineSuggesterResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. </p>
 */
export interface DeleteAnalysisSchemeRequest {
  __type?: "DeleteAnalysisSchemeRequest";
  /**
   * <p>The name of the analysis scheme you want to delete.</p>
   */
  AnalysisSchemeName: string | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteAnalysisSchemeRequest {
  export const filterSensitiveLog = (
    obj: DeleteAnalysisSchemeRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAnalysisSchemeRequest =>
    __isa(o, "DeleteAnalysisSchemeRequest");
}

/**
 * <p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>
 */
export interface DeleteAnalysisSchemeResponse {
  __type?: "DeleteAnalysisSchemeResponse";
  /**
   * <p>The status of the analysis scheme being deleted.</p>
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

export namespace DeleteAnalysisSchemeResponse {
  export const filterSensitiveLog = (
    obj: DeleteAnalysisSchemeResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAnalysisSchemeResponse =>
    __isa(o, "DeleteAnalysisSchemeResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.</p>
 */
export interface DeleteDomainRequest {
  __type?: "DeleteDomainRequest";
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

export namespace DeleteDomainRequest {
  export const filterSensitiveLog = (obj: DeleteDomainRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainRequest =>
    __isa(o, "DeleteDomainRequest");
}

/**
 * <p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>
 */
export interface DeleteDomainResponse {
  __type?: "DeleteDomainResponse";
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: DomainStatus;
}

export namespace DeleteDomainResponse {
  export const filterSensitiveLog = (obj: DeleteDomainResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDomainResponse =>
    __isa(o, "DeleteDomainResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.</p>
 */
export interface DeleteExpressionRequest {
  __type?: "DeleteExpressionRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the <code><a>Expression</a></code> to delete.</p>
   */
  ExpressionName: string | undefined;
}

export namespace DeleteExpressionRequest {
  export const filterSensitiveLog = (obj: DeleteExpressionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteExpressionRequest =>
    __isa(o, "DeleteExpressionRequest");
}

/**
 * <p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>
 */
export interface DeleteExpressionResponse {
  __type?: "DeleteExpressionResponse";
  /**
   * <p>The status of the expression being deleted.</p>
   */
  Expression: ExpressionStatus | undefined;
}

export namespace DeleteExpressionResponse {
  export const filterSensitiveLog = (obj: DeleteExpressionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteExpressionResponse =>
    __isa(o, "DeleteExpressionResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.</p>
 */
export interface DeleteIndexFieldRequest {
  __type?: "DeleteIndexFieldRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the index field your want to remove from the domain's indexing options.</p>
   */
  IndexFieldName: string | undefined;
}

export namespace DeleteIndexFieldRequest {
  export const filterSensitiveLog = (obj: DeleteIndexFieldRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIndexFieldRequest =>
    __isa(o, "DeleteIndexFieldRequest");
}

/**
 * <p>The result of a <code><a>DeleteIndexField</a></code> request.</p>
 */
export interface DeleteIndexFieldResponse {
  __type?: "DeleteIndexFieldResponse";
  /**
   * <p>The status of the index field being deleted.</p>
   */
  IndexField: IndexFieldStatus | undefined;
}

export namespace DeleteIndexFieldResponse {
  export const filterSensitiveLog = (obj: DeleteIndexFieldResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteIndexFieldResponse =>
    __isa(o, "DeleteIndexFieldResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.</p>
 */
export interface DeleteSuggesterRequest {
  __type?: "DeleteSuggesterRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Specifies the name of the suggester you want to delete.</p>
   */
  SuggesterName: string | undefined;
}

export namespace DeleteSuggesterRequest {
  export const filterSensitiveLog = (obj: DeleteSuggesterRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSuggesterRequest =>
    __isa(o, "DeleteSuggesterRequest");
}

/**
 * <p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>
 */
export interface DeleteSuggesterResponse {
  __type?: "DeleteSuggesterResponse";
  /**
   * <p>The status of the suggester being deleted.</p>
   */
  Suggester: SuggesterStatus | undefined;
}

export namespace DeleteSuggesterResponse {
  export const filterSensitiveLog = (obj: DeleteSuggesterResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSuggesterResponse =>
    __isa(o, "DeleteSuggesterResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. </p>
 */
export interface DescribeAnalysisSchemesRequest {
  __type?: "DescribeAnalysisSchemesRequest";
  /**
   * <p>The analysis schemes you want to describe.</p>
   */
  AnalysisSchemeNames?: string[];

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeAnalysisSchemesRequest {
  export const filterSensitiveLog = (
    obj: DescribeAnalysisSchemesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAnalysisSchemesRequest =>
    __isa(o, "DescribeAnalysisSchemesRequest");
}

/**
 * <p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>
 */
export interface DescribeAnalysisSchemesResponse {
  __type?: "DescribeAnalysisSchemesResponse";
  /**
   * <p>The analysis scheme descriptions.</p>
   */
  AnalysisSchemes: AnalysisSchemeStatus[] | undefined;
}

export namespace DescribeAnalysisSchemesResponse {
  export const filterSensitiveLog = (
    obj: DescribeAnalysisSchemesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAnalysisSchemesResponse =>
    __isa(o, "DescribeAnalysisSchemesResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 */
export interface DescribeAvailabilityOptionsRequest {
  __type?: "DescribeAvailabilityOptionsRequest";
  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeAvailabilityOptionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeAvailabilityOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailabilityOptionsRequest =>
    __isa(o, "DescribeAvailabilityOptionsRequest");
}

/**
 * <p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>
 */
export interface DescribeAvailabilityOptionsResponse {
  __type?: "DescribeAvailabilityOptionsResponse";
  /**
   * <p>The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: AvailabilityOptionsStatus;
}

export namespace DescribeAvailabilityOptionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeAvailabilityOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAvailabilityOptionsResponse =>
    __isa(o, "DescribeAvailabilityOptionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 */
export interface DescribeDomainEndpointOptionsRequest {
  __type?: "DescribeDomainEndpointOptionsRequest";
  /**
   * <p>Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>A string that represents the name of a domain.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeDomainEndpointOptionsRequest {
  export const filterSensitiveLog = (
    obj: DescribeDomainEndpointOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainEndpointOptionsRequest =>
    __isa(o, "DescribeDomainEndpointOptionsRequest");
}

/**
 * <p>The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. </p>
 */
export interface DescribeDomainEndpointOptionsResponse {
  __type?: "DescribeDomainEndpointOptionsResponse";
  /**
   * <p>The status and configuration of a search domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}

export namespace DescribeDomainEndpointOptionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeDomainEndpointOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainEndpointOptionsResponse =>
    __isa(o, "DescribeDomainEndpointOptionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.</p>
 */
export interface DescribeDomainsRequest {
  __type?: "DescribeDomainsRequest";
  /**
   * <p>The names of the domains you want to include in the response.</p>
   */
  DomainNames?: string[];
}

export namespace DescribeDomainsRequest {
  export const filterSensitiveLog = (obj: DescribeDomainsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainsRequest =>
    __isa(o, "DescribeDomainsRequest");
}

/**
 * <p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>
 */
export interface DescribeDomainsResponse {
  __type?: "DescribeDomainsResponse";
  /**
   * <p>A list that contains the status of each requested domain.</p>
   */
  DomainStatusList: DomainStatus[] | undefined;
}

export namespace DescribeDomainsResponse {
  export const filterSensitiveLog = (obj: DescribeDomainsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeDomainsResponse =>
    __isa(o, "DescribeDomainsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation.
 *       Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeExpressionsRequest {
  __type?: "DescribeExpressionsRequest";
  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.</p>
   */
  ExpressionNames?: string[];
}

export namespace DescribeExpressionsRequest {
  export const filterSensitiveLog = (obj: DescribeExpressionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExpressionsRequest =>
    __isa(o, "DescribeExpressionsRequest");
}

/**
 * <p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>
 */
export interface DescribeExpressionsResponse {
  __type?: "DescribeExpressionsResponse";
  /**
   * <p>The expressions configured for the domain.</p>
   */
  Expressions: ExpressionStatus[] | undefined;
}

export namespace DescribeExpressionsResponse {
  export const filterSensitiveLog = (
    obj: DescribeExpressionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeExpressionsResponse =>
    __isa(o, "DescribeExpressionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show  the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeIndexFieldsRequest {
  __type?: "DescribeIndexFieldsRequest";
  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.</p>
   */
  FieldNames?: string[];
}

export namespace DescribeIndexFieldsRequest {
  export const filterSensitiveLog = (obj: DescribeIndexFieldsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIndexFieldsRequest =>
    __isa(o, "DescribeIndexFieldsRequest");
}

/**
 * <p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>
 */
export interface DescribeIndexFieldsResponse {
  __type?: "DescribeIndexFieldsResponse";
  /**
   * <p>The index fields configured for the domain.</p>
   */
  IndexFields: IndexFieldStatus[] | undefined;
}

export namespace DescribeIndexFieldsResponse {
  export const filterSensitiveLog = (
    obj: DescribeIndexFieldsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeIndexFieldsResponse =>
    __isa(o, "DescribeIndexFieldsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. </p>
 */
export interface DescribeScalingParametersRequest {
  __type?: "DescribeScalingParametersRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeScalingParametersRequest {
  export const filterSensitiveLog = (
    obj: DescribeScalingParametersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScalingParametersRequest =>
    __isa(o, "DescribeScalingParametersRequest");
}

/**
 * <p>The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.</p>
 */
export interface DescribeScalingParametersResponse {
  __type?: "DescribeScalingParametersResponse";
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

export namespace DescribeScalingParametersResponse {
  export const filterSensitiveLog = (
    obj: DescribeScalingParametersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScalingParametersResponse =>
    __isa(o, "DescribeScalingParametersResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeServiceAccessPoliciesRequest {
  __type?: "DescribeServiceAccessPoliciesRequest";
  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;
}

export namespace DescribeServiceAccessPoliciesRequest {
  export const filterSensitiveLog = (
    obj: DescribeServiceAccessPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeServiceAccessPoliciesRequest =>
    __isa(o, "DescribeServiceAccessPoliciesRequest");
}

/**
 * <p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>
 */
export interface DescribeServiceAccessPoliciesResponse {
  __type?: "DescribeServiceAccessPoliciesResponse";
  /**
   * <p>The access rules configured for the domain specified in the request.</p>
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

export namespace DescribeServiceAccessPoliciesResponse {
  export const filterSensitiveLog = (
    obj: DescribeServiceAccessPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeServiceAccessPoliciesResponse =>
    __isa(o, "DescribeServiceAccessPoliciesResponse");
}

/**
 * <p>Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeSuggestersRequest {
  __type?: "DescribeSuggestersRequest";
  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;

  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The suggesters you want to describe.</p>
   */
  SuggesterNames?: string[];
}

export namespace DescribeSuggestersRequest {
  export const filterSensitiveLog = (obj: DescribeSuggestersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSuggestersRequest =>
    __isa(o, "DescribeSuggestersRequest");
}

/**
 * <p>The result of a <code>DescribeSuggesters</code> request.</p>
 */
export interface DescribeSuggestersResponse {
  __type?: "DescribeSuggestersResponse";
  /**
   * <p>The suggesters configured for the domain specified in the request.</p>
   */
  Suggesters: SuggesterStatus[] | undefined;
}

export namespace DescribeSuggestersResponse {
  export const filterSensitiveLog = (obj: DescribeSuggestersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeSuggestersResponse =>
    __isa(o, "DescribeSuggestersResponse");
}

/**
 * <p>The request was rejected because it attempted an operation which is not enabled.</p>
 */
export interface DisabledOperationException
  extends __SmithyException,
    $MetadataBearer {
  name: "DisabledOperationException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace DisabledOperationException {
  export const filterSensitiveLog = (obj: DisabledOperationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisabledOperationException =>
    __isa(o, "DisabledOperationException");
}

/**
 * <p>Options for a search suggester.</p>
 */
export interface DocumentSuggesterOptions {
  __type?: "DocumentSuggesterOptions";
  /**
   * <p>The level of fuzziness allowed when suggesting matches for a string: <code>none</code>, <code>low</code>, or <code>high</code>. With none, the specified string is treated as an exact prefix. With low, suggestions must differ from the specified string by no more than one character. With high, suggestions can differ by up to two characters. The default is none. </p>
   */
  FuzzyMatching?: SuggesterFuzzyMatching | string;

  /**
   * <p>An expression that computes a score for each suggestion to control how they are sorted. The scores are rounded to the nearest
   *         integer, with a floor of 0 and a ceiling of 2^31-1. A document's relevance score is not computed
   *         for suggestions, so sort expressions cannot reference the <code>_score</code> value.
   *         To sort suggestions using a numeric field or existing expression, simply specify
   *         the name of the field or expression. If no expression is configured for the suggester, the
   *         suggestions are sorted with the closest matches listed first.</p>
   */
  SortExpression?: string;

  /**
   * <p>The name of the index field you want to use for suggestions.
   *       </p>
   */
  SourceField: string | undefined;
}

export namespace DocumentSuggesterOptions {
  export const filterSensitiveLog = (obj: DocumentSuggesterOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DocumentSuggesterOptions =>
    __isa(o, "DocumentSuggesterOptions");
}

/**
 * <p>The domain's endpoint options.</p>
 */
export interface DomainEndpointOptions {
  __type?: "DomainEndpointOptions";
  /**
   * <p>Whether the domain is HTTPS only enabled.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The minimum required TLS version</p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;
}

export namespace DomainEndpointOptions {
  export const filterSensitiveLog = (obj: DomainEndpointOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainEndpointOptions =>
    __isa(o, "DomainEndpointOptions");
}

/**
 * <p>The configuration and status of the domain's endpoint options.</p>
 */
export interface DomainEndpointOptionsStatus {
  __type?: "DomainEndpointOptionsStatus";
  /**
   * <p>The domain endpoint options configured for the domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the configured domain endpoint options.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace DomainEndpointOptionsStatus {
  export const filterSensitiveLog = (
    obj: DomainEndpointOptionsStatus
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainEndpointOptionsStatus =>
    __isa(o, "DomainEndpointOptionsStatus");
}

/**
 * <p>The current status of the search domain.</p>
 */
export interface DomainStatus {
  __type?: "DomainStatus";
  /**
   * <p>The Amazon Resource Name (ARN) of the search domain.  See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN?: string;

  /**
   * <p>True if the search domain is created. It can take several minutes to initialize a domain when <a>CreateDomain</a> is called. Newly created search domains are returned from <a>DescribeDomains</a> with a false value for Created until domain creation is complete.</p>
   */
  Created?: boolean;

  /**
   * <p>True if the search domain has been deleted.  The system must clean up resources dedicated to the search domain when <a>DeleteDomain</a> is called.  Newly deleted search domains are returned from <a>DescribeDomains</a> with a true value for IsDeleted for several minutes until resource cleanup is complete.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The service endpoint for updating documents in a search domain.</p>
   */
  DocService?: ServiceEndpoint;

  /**
   * <p>An internally generated unique identifier for a domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  Limits?: Limits;
  /**
   * <p>True if processing is being done to activate the current domain configuration.</p>
   */
  Processing?: boolean;

  /**
   * <p>True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.</p>
   */
  RequiresIndexDocuments: boolean | undefined;

  /**
   * <p>The number of search instances that are available to process search requests.</p>
   */
  SearchInstanceCount?: number;

  /**
   * <p>The instance type that is being used to process search requests.</p>
   */
  SearchInstanceType?: string;

  /**
   * <p>The number of partitions across which the search index is spread.</p>
   */
  SearchPartitionCount?: number;

  /**
   * <p>The service endpoint for requesting search results from a search domain.</p>
   */
  SearchService?: ServiceEndpoint;
}

export namespace DomainStatus {
  export const filterSensitiveLog = (obj: DomainStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is DomainStatus => __isa(o, "DomainStatus");
}

/**
 * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
 */
export interface DoubleArrayOptions {
  __type?: "DoubleArrayOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: number;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;
}

export namespace DoubleArrayOptions {
  export const filterSensitiveLog = (obj: DoubleArrayOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DoubleArrayOptions =>
    __isa(o, "DoubleArrayOptions");
}

/**
 * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
 */
export interface DoubleOptions {
  __type?: "DoubleOptions";
  /**
   * <p>A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.</p>
   */
  DefaultValue?: number;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

  /**
   * <p>The name of the source field to map to the field. </p>
   */
  SourceField?: string;
}

export namespace DoubleOptions {
  export const filterSensitiveLog = (obj: DoubleOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is DoubleOptions => __isa(o, "DoubleOptions");
}

/**
 * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
 */
export interface Expression {
  __type?: "Expression";
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  ExpressionName: string | undefined;

  /**
   * <p>The expression to evaluate for sorting while processing a search request.  The <code>Expression</code> syntax is based on JavaScript expressions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-expressions.html" target="_blank">Configuring Expressions</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  ExpressionValue: string | undefined;
}

export namespace Expression {
  export const filterSensitiveLog = (obj: Expression): any => ({
    ...obj
  });
  export const isa = (o: any): o is Expression => __isa(o, "Expression");
}

/**
 * <p>The value of an <code>Expression</code> and its current status.</p>
 */
export interface ExpressionStatus {
  __type?: "ExpressionStatus";
  /**
   * <p>The expression that is evaluated for sorting while processing a search request.</p>
   */
  Options: Expression | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ExpressionStatus {
  export const filterSensitiveLog = (obj: ExpressionStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExpressionStatus =>
    __isa(o, "ExpressionStatus");
}

/**
 * <p>Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.</p>
 */
export interface IndexDocumentsRequest {
  __type?: "IndexDocumentsRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace IndexDocumentsRequest {
  export const filterSensitiveLog = (obj: IndexDocumentsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexDocumentsRequest =>
    __isa(o, "IndexDocumentsRequest");
}

/**
 * <p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>
 */
export interface IndexDocumentsResponse {
  __type?: "IndexDocumentsResponse";
  /**
   * <p>The names of the fields that are currently being indexed.</p>
   */
  FieldNames?: string[];
}

export namespace IndexDocumentsResponse {
  export const filterSensitiveLog = (obj: IndexDocumentsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexDocumentsResponse =>
    __isa(o, "IndexDocumentsResponse");
}

/**
 * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
 */
export interface IndexField {
  __type?: "IndexField";
  /**
   * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
   */
  DateArrayOptions?: DateArrayOptions;

  /**
   * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
   */
  DateOptions?: DateOptions;

  /**
   * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
   */
  DoubleArrayOptions?: DoubleArrayOptions;

  /**
   * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
   */
  DoubleOptions?: DoubleOptions;

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
   */
  IndexFieldName: string | undefined;

  /**
   * <p>The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  IndexFieldType: IndexFieldType | string | undefined;

  /**
   * <p>Options for a field that contains an array of 64-bit signed integers.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
   */
  IntArrayOptions?: IntArrayOptions;

  /**
   * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
   */
  IntOptions?: IntOptions;

  /**
   * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
   */
  LatLonOptions?: LatLonOptions;

  /**
   * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
   */
  LiteralArrayOptions?: LiteralArrayOptions;

  /**
   * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
   */
  LiteralOptions?: LiteralOptions;

  /**
   * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
   */
  TextArrayOptions?: TextArrayOptions;

  /**
   * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
   */
  TextOptions?: TextOptions;
}

export namespace IndexField {
  export const filterSensitiveLog = (obj: IndexField): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexField => __isa(o, "IndexField");
}

/**
 * <p>The value of an <code>IndexField</code> and its current status.</p>
 */
export interface IndexFieldStatus {
  __type?: "IndexFieldStatus";
  /**
   * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
   */
  Options: IndexField | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace IndexFieldStatus {
  export const filterSensitiveLog = (obj: IndexFieldStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is IndexFieldStatus =>
    __isa(o, "IndexFieldStatus");
}

export type IndexFieldType =
  | "date"
  | "date-array"
  | "double"
  | "double-array"
  | "int"
  | "int-array"
  | "latlon"
  | "literal"
  | "literal-array"
  | "text"
  | "text-array";

/**
 * <p>Options for a field that contains an array of 64-bit signed integers.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
 */
export interface IntArrayOptions {
  __type?: "IntArrayOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: number;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;
}

export namespace IntArrayOptions {
  export const filterSensitiveLog = (obj: IntArrayOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is IntArrayOptions =>
    __isa(o, "IntArrayOptions");
}

/**
 * <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 */
export interface InternalException extends __SmithyException, $MetadataBearer {
  name: "InternalException";
  $fault: "server";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace InternalException {
  export const filterSensitiveLog = (obj: InternalException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalException =>
    __isa(o, "InternalException");
}

/**
 * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
 */
export interface IntOptions {
  __type?: "IntOptions";
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   */
  DefaultValue?: number;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

  /**
   * <p>The name of the source field to map to the field. </p>
   */
  SourceField?: string;
}

export namespace IntOptions {
  export const filterSensitiveLog = (obj: IntOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is IntOptions => __isa(o, "IntOptions");
}

/**
 * <p>The request was rejected because it specified an invalid type definition.</p>
 */
export interface InvalidTypeException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidTypeException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace InvalidTypeException {
  export const filterSensitiveLog = (obj: InvalidTypeException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidTypeException =>
    __isa(o, "InvalidTypeException");
}

/**
 * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
 */
export interface LatLonOptions {
  __type?: "LatLonOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

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
   */
  SourceField?: string;
}

export namespace LatLonOptions {
  export const filterSensitiveLog = (obj: LatLonOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is LatLonOptions => __isa(o, "LatLonOptions");
}

/**
 * <p>The request was rejected because a resource limit has already been met.</p>
 */
export interface LimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "LimitExceededException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace LimitExceededException {
  export const filterSensitiveLog = (obj: LimitExceededException): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededException =>
    __isa(o, "LimitExceededException");
}

export interface Limits {
  __type?: "Limits";
  MaximumPartitionCount: number | undefined;
  MaximumReplicationCount: number | undefined;
}

export namespace Limits {
  export const filterSensitiveLog = (obj: Limits): any => ({
    ...obj
  });
  export const isa = (o: any): o is Limits => __isa(o, "Limits");
}

/**
 * <p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>
 */
export interface ListDomainNamesResponse {
  __type?: "ListDomainNamesResponse";
  /**
   * <p>The names of the search domains owned by an account.</p>
   */
  DomainNames?: { [key: string]: string };
}

export namespace ListDomainNamesResponse {
  export const filterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDomainNamesResponse =>
    __isa(o, "ListDomainNamesResponse");
}

/**
 * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
 */
export interface LiteralArrayOptions {
  __type?: "LiteralArrayOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;
}

export namespace LiteralArrayOptions {
  export const filterSensitiveLog = (obj: LiteralArrayOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is LiteralArrayOptions =>
    __isa(o, "LiteralArrayOptions");
}

/**
 * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
 */
export interface LiteralOptions {
  __type?: "LiteralOptions";
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

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
   */
  SourceField?: string;
}

export namespace LiteralOptions {
  export const filterSensitiveLog = (obj: LiteralOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is LiteralOptions =>
    __isa(o, "LiteralOptions");
}

export type OptionState =
  | "Active"
  | "FailedToValidate"
  | "Processing"
  | "RequiresIndexDocuments";

/**
 * <p>The status of domain configuration option.</p>
 */
export interface OptionStatus {
  __type?: "OptionStatus";
  /**
   * <p>A timestamp for when this option was created.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>Indicates that the option will be deleted once processing is complete.</p>
   */
  PendingDeletion?: boolean;

  /**
   * <p>The state of processing a change to an option.  Possible values:</p><ul>
   *     <li><code>RequiresIndexDocuments</code>: the option's latest value will not be deployed until  <a>IndexDocuments</a> has been called and indexing is complete.</li>
   *     <li><code>Processing</code>: the option's latest value is in the process of being activated.  </li>
   *     <li><code>Active</code>: the option's latest value is completely deployed.</li>
   *     <li><code>FailedToValidate</code>: the option value is not compatible with the domain's data and cannot be used to index the data. You must either modify the option value or update or remove the incompatible documents.</li>
   *   </ul>
   */
  State: OptionState | string | undefined;

  /**
   * <p>A timestamp for when this option was last updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>A unique integer that indicates when this option was last updated.</p>
   */
  UpdateVersion?: number;
}

export namespace OptionStatus {
  export const filterSensitiveLog = (obj: OptionStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is OptionStatus => __isa(o, "OptionStatus");
}

export type PartitionInstanceType =
  | "search.m1.large"
  | "search.m1.small"
  | "search.m2.2xlarge"
  | "search.m2.xlarge"
  | "search.m3.2xlarge"
  | "search.m3.large"
  | "search.m3.medium"
  | "search.m3.xlarge";

/**
 * <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>The desired instance type and desired number of replicas of each index partition.</p>
 */
export interface ScalingParameters {
  __type?: "ScalingParameters";
  /**
   * <p>The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.</p>
   */
  DesiredInstanceType?: PartitionInstanceType | string;

  /**
   * <p>The number of partitions you want to preconfigure for your domain. Only valid when
   *     you select <code>m2.2xlarge</code> as the desired instance type.</p>
   */
  DesiredPartitionCount?: number;

  /**
   * <p>The number of replicas you want to preconfigure for each index partition.</p>
   */
  DesiredReplicationCount?: number;
}

export namespace ScalingParameters {
  export const filterSensitiveLog = (obj: ScalingParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingParameters =>
    __isa(o, "ScalingParameters");
}

/**
 * <p>The status and configuration of a search domain's scaling parameters. </p>
 */
export interface ScalingParametersStatus {
  __type?: "ScalingParametersStatus";
  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  Options: ScalingParameters | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace ScalingParametersStatus {
  export const filterSensitiveLog = (obj: ScalingParametersStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingParametersStatus =>
    __isa(o, "ScalingParametersStatus");
}

/**
 * <p>The endpoint to which service requests can be submitted.</p>
 */
export interface ServiceEndpoint {
  __type?: "ServiceEndpoint";
  /**
   * <p>The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.</p>
   */
  Endpoint?: string;
}

export namespace ServiceEndpoint {
  export const filterSensitiveLog = (obj: ServiceEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceEndpoint =>
    __isa(o, "ServiceEndpoint");
}

/**
 * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
 */
export interface Suggester {
  __type?: "Suggester";
  /**
   * <p>Options for a search suggester.</p>
   */
  DocumentSuggesterOptions: DocumentSuggesterOptions | undefined;

  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  SuggesterName: string | undefined;
}

export namespace Suggester {
  export const filterSensitiveLog = (obj: Suggester): any => ({
    ...obj
  });
  export const isa = (o: any): o is Suggester => __isa(o, "Suggester");
}

export type SuggesterFuzzyMatching = "high" | "low" | "none";

/**
 * <p>The value of a <code>Suggester</code> and its current status.</p>
 */
export interface SuggesterStatus {
  __type?: "SuggesterStatus";
  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Options: Suggester | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

export namespace SuggesterStatus {
  export const filterSensitiveLog = (obj: SuggesterStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuggesterStatus =>
    __isa(o, "SuggesterStatus");
}

/**
 * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
 */
export interface TextArrayOptions {
  __type?: "TextArrayOptions";
  /**
   * <p>The name of an analysis scheme for a  <code>text-array</code> field.</p>
   */
  AnalysisScheme?: string;

  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;
}

export namespace TextArrayOptions {
  export const filterSensitiveLog = (obj: TextArrayOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is TextArrayOptions =>
    __isa(o, "TextArrayOptions");
}

/**
 * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
 */
export interface TextOptions {
  __type?: "TextOptions";
  /**
   * <p>The name of an analysis scheme for a  <code>text</code> field.</p>
   */
  AnalysisScheme?: string;

  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

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
   */
  SourceField?: string;
}

export namespace TextOptions {
  export const filterSensitiveLog = (obj: TextOptions): any => ({
    ...obj
  });
  export const isa = (o: any): o is TextOptions => __isa(o, "TextOptions");
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07"
}

/**
 * <p>Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.</p>
 */
export interface UpdateAvailabilityOptionsRequest {
  __type?: "UpdateAvailabilityOptionsRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. </p>
   */
  MultiAZ: boolean | undefined;
}

export namespace UpdateAvailabilityOptionsRequest {
  export const filterSensitiveLog = (
    obj: UpdateAvailabilityOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAvailabilityOptionsRequest =>
    __isa(o, "UpdateAvailabilityOptionsRequest");
}

/**
 * <p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>
 */
export interface UpdateAvailabilityOptionsResponse {
  __type?: "UpdateAvailabilityOptionsResponse";
  /**
   * <p>The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: AvailabilityOptionsStatus;
}

export namespace UpdateAvailabilityOptionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateAvailabilityOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAvailabilityOptionsResponse =>
    __isa(o, "UpdateAvailabilityOptionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.</p>
 */
export interface UpdateDomainEndpointOptionsRequest {
  __type?: "UpdateDomainEndpointOptionsRequest";
  /**
   * <p>Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. </p>
   */
  DomainEndpointOptions: DomainEndpointOptions | undefined;

  /**
   * <p>A string that represents the name of a domain.</p>
   */
  DomainName: string | undefined;
}

export namespace UpdateDomainEndpointOptionsRequest {
  export const filterSensitiveLog = (
    obj: UpdateDomainEndpointOptionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainEndpointOptionsRequest =>
    __isa(o, "UpdateDomainEndpointOptionsRequest");
}

/**
 * <p>The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. </p>
 */
export interface UpdateDomainEndpointOptionsResponse {
  __type?: "UpdateDomainEndpointOptionsResponse";
  /**
   * <p>The newly-configured domain endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}

export namespace UpdateDomainEndpointOptionsResponse {
  export const filterSensitiveLog = (
    obj: UpdateDomainEndpointOptionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDomainEndpointOptionsResponse =>
    __isa(o, "UpdateDomainEndpointOptionsResponse");
}

/**
 * <p>Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.</p>
 */
export interface UpdateScalingParametersRequest {
  __type?: "UpdateScalingParametersRequest";
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  ScalingParameters: ScalingParameters | undefined;
}

export namespace UpdateScalingParametersRequest {
  export const filterSensitiveLog = (
    obj: UpdateScalingParametersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateScalingParametersRequest =>
    __isa(o, "UpdateScalingParametersRequest");
}

/**
 * <p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>
 */
export interface UpdateScalingParametersResponse {
  __type?: "UpdateScalingParametersResponse";
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

export namespace UpdateScalingParametersResponse {
  export const filterSensitiveLog = (
    obj: UpdateScalingParametersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateScalingParametersResponse =>
    __isa(o, "UpdateScalingParametersResponse");
}

/**
 * <p>Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.</p>
 */
export interface UpdateServiceAccessPoliciesRequest {
  __type?: "UpdateServiceAccessPoliciesRequest";
  /**
   * <p>The access rules you want to configure. These rules replace any existing rules. </p>
   */
  AccessPolicies: string | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export namespace UpdateServiceAccessPoliciesRequest {
  export const filterSensitiveLog = (
    obj: UpdateServiceAccessPoliciesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServiceAccessPoliciesRequest =>
    __isa(o, "UpdateServiceAccessPoliciesRequest");
}

/**
 * <p>The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.</p>
 */
export interface UpdateServiceAccessPoliciesResponse {
  __type?: "UpdateServiceAccessPoliciesResponse";
  /**
   * <p>The access rules configured for the domain.</p>
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

export namespace UpdateServiceAccessPoliciesResponse {
  export const filterSensitiveLog = (
    obj: UpdateServiceAccessPoliciesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateServiceAccessPoliciesResponse =>
    __isa(o, "UpdateServiceAccessPoliciesResponse");
}

/**
 * <p>The request was rejected because it has invalid parameters.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}
