// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CloudSearchServiceException as __BaseException } from "./CloudSearchServiceException";

/**
 * <p>An error occurred while processing the request.</p>
 */
export class BaseException extends __BaseException {
  readonly name: "BaseException" = "BaseException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BaseException, __BaseException>) {
    super({
      name: "BaseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BaseException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>Container for the parameters to the <code><a>BuildSuggester</a></code> operation. Specifies the name of the domain you want to update.</p>
 */
export interface BuildSuggestersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>BuildSuggester</code> request. Contains a list of the fields used for suggestions.</p>
 */
export interface BuildSuggestersResponse {
  /**
   * <p>A list of field names.</p>
   */
  FieldNames?: string[];
}

/**
 * <p>An internal error occurred while processing the request. If this problem persists,
 *       report an issue from the <a href="http://status.aws.amazon.com/" target="_blank">Service Health Dashboard</a>.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it attempted to reference a resource that does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it has invalid parameters.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>Container for the parameters to the <code><a>CreateDomain</a></code> operation. Specifies a name for the new search domain.</p>
 */
export interface CreateDomainRequest {
  /**
   * <p>A name for the domain you are creating. Allowed characters are a-z (lower-case letters), 0-9, and hyphen (-). Domain names must start with a letter or number and be at least 3 and no more than 28 characters long.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The endpoint to which service requests can be submitted.</p>
 */
export interface ServiceEndpoint {
  /**
   * <p>The endpoint to which service requests can be submitted. For example, <code>search-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code> or <code>doc-imdb-movies-oopcnjfn6ugofer3zx5iadxxca.eu-west-1.cloudsearch.amazonaws.com</code>.</p>
   */
  Endpoint?: string;
}

export interface Limits {
  MaximumReplicationCount: number | undefined;
  MaximumPartitionCount: number | undefined;
}

/**
 * <p>The current status of the search domain.</p>
 */
export interface DomainStatus {
  /**
   * <p>An internally generated unique identifier for a domain.</p>
   */
  DomainId: string | undefined;

  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

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
   * <p>The service endpoint for requesting search results from a search domain.</p>
   */
  SearchService?: ServiceEndpoint;

  /**
   * <p>True if <a>IndexDocuments</a> needs to be called to activate the current domain configuration.</p>
   */
  RequiresIndexDocuments: boolean | undefined;

  /**
   * <p>True if processing is being done to activate the current domain configuration.</p>
   */
  Processing?: boolean;

  /**
   * <p>The instance type that is being used to process search requests.</p>
   */
  SearchInstanceType?: string;

  /**
   * <p>The number of partitions across which the search index is spread.</p>
   */
  SearchPartitionCount?: number;

  /**
   * <p>The number of search instances that are available to process search requests.</p>
   */
  SearchInstanceCount?: number;

  Limits?: Limits;
}

/**
 * <p>The result of a <code>CreateDomainRequest</code>. Contains the status of a newly created domain.</p>
 */
export interface CreateDomainResponse {
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>The request was rejected because a resource limit has already been met.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was rejected because it attempted to create a resource that already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

export type AlgorithmicStemming = "full" | "light" | "minimal" | "none";

/**
 * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
 */
export interface AnalysisOptions {
  /**
   * <p>A JSON object that defines synonym groups and aliases. A synonym group is an array of arrays, where each sub-array is a group of terms where each term in the group is considered a synonym of every other term in the group. The aliases value is an object that contains a collection of string:value pairs where the string specifies a term and the array of values specifies each of the aliases for that term. An alias is considered a synonym of the specified term, but the term is not considered a synonym of the alias. For more information about specifying synonyms, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-analysis-schemes.html#synonyms">Synonyms</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  Synonyms?: string;

  /**
   * <p>A  JSON array of terms to ignore during indexing and searching. For example, <code>["a", "an", "the", "of"]</code>. The stopwords dictionary must explicitly list each word you want to ignore. Wildcards and regular expressions are not supported. </p>
   */
  Stopwords?: string;

  /**
   * <p>A JSON object that contains a collection of string:value pairs that each map a term to its stem. For example, <code>{"term1": "stem1", "term2": "stem2", "term3": "stem3"}</code>. The stemming dictionary is applied in addition to any algorithmic stemming. This enables you to override the results of the algorithmic stemming to correct specific cases of overstemming or understemming. The maximum size of a stemming dictionary is 500 KB.</p>
   */
  StemmingDictionary?: string;

  /**
   * <p>A JSON array that contains a collection of terms, tokens, readings and part of speech for Japanese Tokenizaiton. The Japanese tokenization dictionary enables you to override the default tokenization for selected terms. This is only valid for Japanese language fields.</p>
   */
  JapaneseTokenizationDictionary?: string;

  /**
   * <p>The level of algorithmic stemming to perform: <code>none</code>, <code>minimal</code>, <code>light</code>, or <code>full</code>. The available levels vary depending on the language. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/text-processing.html#text-processing-settings" target="_blank">Language Specific Text Processing Settings</a> in the <i>Amazon CloudSearch Developer Guide</i> </p>
   */
  AlgorithmicStemming?: AlgorithmicStemming | string;
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
 * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
 */
export interface AnalysisScheme {
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  AnalysisSchemeName: string | undefined;

  /**
   * <p>An <a href="http://tools.ietf.org/html/rfc4646" target="_blank">IETF RFC 4646</a> language code or <code>mul</code>  for multiple languages.</p>
   */
  AnalysisSchemeLanguage: AnalysisSchemeLanguage | string | undefined;

  /**
   * <p>Synonyms, stopwords, and stemming options for an analysis scheme. Includes tokenization dictionary for Japanese.</p>
   */
  AnalysisOptions?: AnalysisOptions;
}

/**
 * <p>Container for the parameters to the <code><a>DefineAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme configuration.</p>
 */
export interface DefineAnalysisSchemeRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   */
  AnalysisScheme: AnalysisScheme | undefined;
}

export type OptionState = "Active" | "FailedToValidate" | "Processing" | "RequiresIndexDocuments";

/**
 * <p>The status of domain configuration option.</p>
 */
export interface OptionStatus {
  /**
   * <p>A timestamp for when this option was created.</p>
   */
  CreationDate: Date | undefined;

  /**
   * <p>A timestamp for when this option was last updated.</p>
   */
  UpdateDate: Date | undefined;

  /**
   * <p>A unique integer that indicates when this option was last updated.</p>
   */
  UpdateVersion?: number;

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
   * <p>Indicates that the option will be deleted once processing is complete.</p>
   */
  PendingDeletion?: boolean;
}

/**
 * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
 */
export interface AnalysisSchemeStatus {
  /**
   * <p>Configuration information for an analysis scheme. Each analysis scheme has a unique name and specifies the language of the text to be processed. The following options can be configured for an analysis scheme: <code>Synonyms</code>, <code>Stopwords</code>, <code>StemmingDictionary</code>, <code>JapaneseTokenizationDictionary</code> and <code>AlgorithmicStemming</code>.</p>
   */
  Options: AnalysisScheme | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code><a>DefineAnalysisScheme</a></code> request. Contains the status of the newly-configured analysis scheme.</p>
 */
export interface DefineAnalysisSchemeResponse {
  /**
   * <p>The status and configuration of an  <code>AnalysisScheme</code>.</p>
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * <p>The request was rejected because it specified an invalid type definition.</p>
 */
export class InvalidTypeException extends __BaseException {
  readonly name: "InvalidTypeException" = "InvalidTypeException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidTypeException, __BaseException>) {
    super({
      name: "InvalidTypeException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidTypeException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
 */
export interface Expression {
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

/**
 * <p>Container for the parameters to the <code><a>DefineExpression</a></code> operation. Specifies the name of the domain you want to update and the expression you want to configure.</p>
 */
export interface DefineExpressionRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A named expression that can be evaluated at search time. Can be used to sort the search results, define other expressions, or return computed information in the search results.  </p>
   */
  Expression: Expression | undefined;
}

/**
 * <p>The value of an <code>Expression</code> and its current status.</p>
 */
export interface ExpressionStatus {
  /**
   * <p>The expression that is evaluated for sorting while processing a search request.</p>
   */
  Options: Expression | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>
 */
export interface DefineExpressionResponse {
  /**
   * <p>The value of an <code>Expression</code> and its current status.</p>
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
 */
export interface DateArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;
}

/**
 * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
 */
export interface DateOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

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

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
}

/**
 * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
 */
export interface DoubleArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: number;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;
}

/**
 * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
 */
export interface DoubleOptions {
  /**
   * <p>A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.</p>
   */
  DefaultValue?: number;

  /**
   * <p>The name of the source field to map to the field. </p>
   */
  SourceField?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
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
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: number;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;
}

/**
 * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
 */
export interface IntOptions {
  /**
   * A value to use for the field if the field isn't specified for a document. This can be important if you are using the field in an expression and that field is not present in every document.
   */
  DefaultValue?: number;

  /**
   * <p>The name of the source field to map to the field. </p>
   */
  SourceField?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
}

/**
 * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
 */
export interface LatLonOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

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

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
}

/**
 * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
 */
export interface LiteralArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;
}

/**
 * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
 */
export interface LiteralOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

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

  /**
   * <p>Whether facet information can be returned for the field.</p>
   */
  FacetEnabled?: boolean;

  /**
   * <p>Whether the contents of the field are searchable.</p>
   */
  SearchEnabled?: boolean;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;
}

/**
 * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
 */
export interface TextArrayOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

  /**
   * <p>A list of source fields to map to the field. </p>
   */
  SourceFields?: string;

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>The name of an analysis scheme for a  <code>text-array</code> field.</p>
   */
  AnalysisScheme?: string;
}

/**
 * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
 */
export interface TextOptions {
  /**
   * A value to use for the field if the field isn't specified for a document.
   */
  DefaultValue?: string;

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

  /**
   * <p>Whether the contents of the field can be returned in the search results.</p>
   */
  ReturnEnabled?: boolean;

  /**
   * <p>Whether the field can be used to sort the search results.</p>
   */
  SortEnabled?: boolean;

  /**
   * <p>Whether highlights can be returned for the field.</p>
   */
  HighlightEnabled?: boolean;

  /**
   * <p>The name of an analysis scheme for a  <code>text</code> field.</p>
   */
  AnalysisScheme?: string;
}

/**
 * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
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
   */
  IndexFieldName: string | undefined;

  /**
   * <p>The type of field. The valid options for a field depend on the field type. For more information about the supported field types, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-index-fields.html" target="_blank">Configuring Index Fields</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
   */
  IndexFieldType: IndexFieldType | string | undefined;

  /**
   * <p>Options for a 64-bit signed integer field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int</code>. All options are enabled by default.</p>
   */
  IntOptions?: IntOptions;

  /**
   * <p>Options for a double-precision 64-bit floating point field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double</code>. All options are enabled by default.</p>
   */
  DoubleOptions?: DoubleOptions;

  /**
   * <p>Options for literal field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal</code>. All options are enabled by default.</p>
   */
  LiteralOptions?: LiteralOptions;

  /**
   * <p>Options for text field.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text</code>. A <code>text</code> field is always searchable. All options are enabled by default.</p>
   */
  TextOptions?: TextOptions;

  /**
   * <p>Options for a date field. Dates and times are specified in UTC (Coordinated Universal Time) according to IETF RFC3339: yyyy-mm-ddT00:00:00Z.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date</code>. All options are enabled by default.</p>
   */
  DateOptions?: DateOptions;

  /**
   * <p>Options for a latlon field. A latlon field contains a location stored as a latitude and longitude value pair. Present if <code>IndexFieldType</code> specifies the field is of type <code>latlon</code>. All options are enabled by default.</p>
   */
  LatLonOptions?: LatLonOptions;

  /**
   * <p>Options for a field that contains an array of 64-bit signed integers.  Present if <code>IndexFieldType</code> specifies the field is of type <code>int-array</code>. All options are enabled by default.</p>
   */
  IntArrayOptions?: IntArrayOptions;

  /**
   * <p>Options for a field that contains an array of double-precision 64-bit floating point values.  Present if <code>IndexFieldType</code> specifies the field is of type <code>double-array</code>.  All options are enabled by default.</p>
   */
  DoubleArrayOptions?: DoubleArrayOptions;

  /**
   * <p>Options for a field that contains an array of literal strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>literal-array</code>. All options are enabled by default.</p>
   */
  LiteralArrayOptions?: LiteralArrayOptions;

  /**
   * <p>Options for a field that contains an array of text strings.  Present if <code>IndexFieldType</code> specifies the field is of type <code>text-array</code>. A <code>text-array</code> field is always searchable. All options are enabled by default.</p>
   */
  TextArrayOptions?: TextArrayOptions;

  /**
   * <p>Options for a field that contains an array of dates.  Present if <code>IndexFieldType</code> specifies the field is of type <code>date-array</code>. All options are enabled by default.</p>
   */
  DateArrayOptions?: DateArrayOptions;
}

/**
 * <p>Container for the parameters to the <code><a>DefineIndexField</a></code> operation. Specifies the name of the domain you want to update and the index field configuration.</p>
 */
export interface DefineIndexFieldRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The index field and field options you want to configure. </p>
   */
  IndexField: IndexField | undefined;
}

/**
 * <p>The value of an <code>IndexField</code> and its current status.</p>
 */
export interface IndexFieldStatus {
  /**
   * <p>Configuration information for a field in the index, including its name, type, and options. The supported options depend on the <code><a>IndexFieldType</a></code>.</p>
   */
  Options: IndexField | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code><a>DefineIndexField</a></code> request. Contains the status of the newly-configured index field.</p>
 */
export interface DefineIndexFieldResponse {
  /**
   * <p>The value of an <code>IndexField</code> and its current status.</p>
   */
  IndexField: IndexFieldStatus | undefined;
}

export type SuggesterFuzzyMatching = "high" | "low" | "none";

/**
 * <p>Options for a search suggester.</p>
 */
export interface DocumentSuggesterOptions {
  /**
   * <p>The name of the index field you want to use for suggestions.
   *       </p>
   */
  SourceField: string | undefined;

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
}

/**
 * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
 */
export interface Suggester {
  /**
   * <p>Names must begin with a letter and can contain the following characters:
   *       a-z (lowercase), 0-9, and _ (underscore).</p>
   */
  SuggesterName: string | undefined;

  /**
   * <p>Options for a search suggester.</p>
   */
  DocumentSuggesterOptions: DocumentSuggesterOptions | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DefineSuggester</a></code> operation. Specifies the name of the domain you want to update and the suggester configuration.</p>
 */
export interface DefineSuggesterRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Suggester: Suggester | undefined;
}

/**
 * <p>The value of a <code>Suggester</code> and its current status.</p>
 */
export interface SuggesterStatus {
  /**
   * <p>Configuration information for a search suggester. Each suggester has a unique name and specifies the text field you want to use for suggestions. The following options can be configured for a suggester: <code>FuzzyMatching</code>, <code>SortExpression</code>. </p>
   */
  Options: Suggester | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DefineSuggester</code> request. Contains the status of the newly-configured suggester.</p>
 */
export interface DefineSuggesterResponse {
  /**
   * <p>The value of a <code>Suggester</code> and its current status.</p>
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteAnalysisScheme</a></code> operation. Specifies the name of the domain you want to update and the analysis scheme you want to delete. </p>
 */
export interface DeleteAnalysisSchemeRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the analysis scheme you want to delete.</p>
   */
  AnalysisSchemeName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteAnalysisScheme</code> request. Contains the status of the deleted analysis scheme.</p>
 */
export interface DeleteAnalysisSchemeResponse {
  /**
   * <p>The status of the analysis scheme being deleted.</p>
   */
  AnalysisScheme: AnalysisSchemeStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteDomain</a></code> operation. Specifies the name of the domain you want to delete.</p>
 */
export interface DeleteDomainRequest {
  /**
   * <p>The name of the domain you want to permanently delete.</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteDomain</code> request. Contains the status of a newly deleted domain, or no status if the domain has already been completely deleted.</p>
 */
export interface DeleteDomainResponse {
  /**
   * <p>The current status of the search domain.</p>
   */
  DomainStatus?: DomainStatus;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteExpression</a></code> operation. Specifies the name of the domain you want to update and the name of the expression you want to delete.</p>
 */
export interface DeleteExpressionRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the <code><a>Expression</a></code> to delete.</p>
   */
  ExpressionName: string | undefined;
}

/**
 * <p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>
 */
export interface DeleteExpressionResponse {
  /**
   * <p>The status of the expression being deleted.</p>
   */
  Expression: ExpressionStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteIndexField</a></code> operation. Specifies the name of the domain you want to update and the name of the index field you want to delete.</p>
 */
export interface DeleteIndexFieldRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The name of the index field your want to remove from the domain's indexing options.</p>
   */
  IndexFieldName: string | undefined;
}

/**
 * <p>The result of a <code><a>DeleteIndexField</a></code> request.</p>
 */
export interface DeleteIndexFieldResponse {
  /**
   * <p>The status of the index field being deleted.</p>
   */
  IndexField: IndexFieldStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DeleteSuggester</a></code> operation. Specifies the name of the domain you want to update and name of the suggester you want to delete.</p>
 */
export interface DeleteSuggesterRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Specifies the name of the suggester you want to delete.</p>
   */
  SuggesterName: string | undefined;
}

/**
 * <p>The result of a <code>DeleteSuggester</code> request. Contains the status of the deleted suggester.</p>
 */
export interface DeleteSuggesterResponse {
  /**
   * <p>The status of the suggester being deleted.</p>
   */
  Suggester: SuggesterStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAnalysisSchemes</a></code> operation. Specifies the name of the domain you want to describe. To limit the response to particular analysis schemes, specify the names of the analysis schemes you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>. </p>
 */
export interface DescribeAnalysisSchemesRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The analysis schemes you want to describe.</p>
   */
  AnalysisSchemeNames?: string[];

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The result of a <code>DescribeAnalysisSchemes</code> request. Contains the analysis schemes configured for the domain specified in the request.</p>
 */
export interface DescribeAnalysisSchemesResponse {
  /**
   * <p>The analysis scheme descriptions.</p>
   */
  AnalysisSchemes: AnalysisSchemeStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 */
export interface DescribeAvailabilityOptionsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The status and configuration of the domain's availability options.</p>
 */
export interface AvailabilityOptionsStatus {
  /**
   * <p>The availability options configured for the domain.</p>
   */
  Options: boolean | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeAvailabilityOptions</code> request. Indicates whether or not the Multi-AZ option is enabled for the domain specified in the request. </p>
 */
export interface DescribeAvailabilityOptionsResponse {
  /**
   * <p>The availability options configured for the domain. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: AvailabilityOptionsStatus;
}

/**
 * <p>The request was rejected because it attempted an operation which is not enabled.</p>
 */
export class DisabledOperationException extends __BaseException {
  readonly name: "DisabledOperationException" = "DisabledOperationException";
  readonly $fault: "client" = "client";
  /**
   * <p>A machine-parsable string error or warning code.</p>
   */
  Code?: string;

  /**
   * <p>A human-readable string error or warning message.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DisabledOperationException, __BaseException>) {
    super({
      name: "DisabledOperationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DisabledOperationException.prototype);
    this.Code = opts.Code;
    this.Message = opts.Message;
  }
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomainEndpointOptions</a></code> operation. Specify the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the Deployed option to <code>true</code>.</p>
 */
export interface DescribeDomainEndpointOptionsRequest {
  /**
   * <p>A string that represents the name of a domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to retrieve the latest configuration (which might be in a Processing state) or the current, active configuration. Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

export enum TLSSecurityPolicy {
  POLICY_MIN_TLS_1_0_2019_07 = "Policy-Min-TLS-1-0-2019-07",
  POLICY_MIN_TLS_1_2_2019_07 = "Policy-Min-TLS-1-2-2019-07",
}

/**
 * <p>The domain's endpoint options.</p>
 */
export interface DomainEndpointOptions {
  /**
   * <p>Whether the domain is HTTPS only enabled.</p>
   */
  EnforceHTTPS?: boolean;

  /**
   * <p>The minimum required TLS version</p>
   */
  TLSSecurityPolicy?: TLSSecurityPolicy | string;
}

/**
 * <p>The configuration and status of the domain's endpoint options.</p>
 */
export interface DomainEndpointOptionsStatus {
  /**
   * <p>The domain endpoint options configured for the domain.</p>
   */
  Options: DomainEndpointOptions | undefined;

  /**
   * <p>The status of the configured domain endpoint options.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeDomainEndpointOptions</code> request. Contains the status and configuration of a search domain's endpoint options. </p>
 */
export interface DescribeDomainEndpointOptionsResponse {
  /**
   * <p>The status and configuration of a search domain's endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation. By default shows the status of all domains. To restrict the response to particular domains, specify the names of the domains you want to describe.</p>
 */
export interface DescribeDomainsRequest {
  /**
   * <p>The names of the domains you want to include in the response.</p>
   */
  DomainNames?: string[];
}

/**
 * <p>The result of a <code>DescribeDomains</code> request. Contains the status of the domains specified in the request or all domains owned by the account.</p>
 */
export interface DescribeDomainsResponse {
  /**
   * <p>A list that contains the status of each requested domain.</p>
   */
  DomainStatusList: DomainStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeDomains</a></code> operation.
 *       Specifies the name of the domain you want to describe. To restrict the response to particular expressions, specify the names of the expressions you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeExpressionsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Limits the <code><a>DescribeExpressions</a></code> response to the specified expressions. If not specified, all expressions are shown.</p>
   */
  ExpressionNames?: string[];

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>
 */
export interface DescribeExpressionsResponse {
  /**
   * <p>The expressions configured for the domain.</p>
   */
  Expressions: ExpressionStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeIndexFields</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular index fields, specify the names of the index fields you want to describe. To show  the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeIndexFieldsRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>A list of the index fields you want to describe. If not specified, information is returned for all configured index fields.</p>
   */
  FieldNames?: string[];

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The result of a <code>DescribeIndexFields</code> request. Contains the index fields configured for the domain specified in the request.</p>
 */
export interface DescribeIndexFieldsResponse {
  /**
   * <p>The index fields configured for the domain.</p>
   */
  IndexFields: IndexFieldStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeScalingParameters</a></code> operation. Specifies the name of the domain you want to describe. </p>
 */
export interface DescribeScalingParametersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

export type PartitionInstanceType =
  | "search.2xlarge"
  | "search.large"
  | "search.m1.large"
  | "search.m1.small"
  | "search.m2.2xlarge"
  | "search.m2.xlarge"
  | "search.m3.2xlarge"
  | "search.m3.large"
  | "search.m3.medium"
  | "search.m3.xlarge"
  | "search.medium"
  | "search.previousgeneration.2xlarge"
  | "search.previousgeneration.large"
  | "search.previousgeneration.small"
  | "search.previousgeneration.xlarge"
  | "search.small"
  | "search.xlarge";

/**
 * <p>The desired instance type and desired number of replicas of each index partition.</p>
 */
export interface ScalingParameters {
  /**
   * <p>The instance type that you want to preconfigure for your domain. For example, <code>search.m1.small</code>.</p>
   */
  DesiredInstanceType?: PartitionInstanceType | string;

  /**
   * <p>The number of replicas you want to preconfigure for each index partition.</p>
   */
  DesiredReplicationCount?: number;

  /**
   * <p>The number of partitions you want to preconfigure for your domain. Only valid when
   *     you select <code>m2.2xlarge</code> as the desired instance type.</p>
   */
  DesiredPartitionCount?: number;
}

/**
 * <p>The status and configuration of a search domain's scaling parameters. </p>
 */
export interface ScalingParametersStatus {
  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  Options: ScalingParameters | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeScalingParameters</code> request. Contains the scaling parameters configured for the domain specified in the request.</p>
 */
export interface DescribeScalingParametersResponse {
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeServiceAccessPoliciesRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The configured access rules for the domain's document and search endpoints, and the current status of those rules.</p>
 */
export interface AccessPoliciesStatus {
  /**
   * <p>Access rules for a domain's document or search service endpoints. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/configuring-access.html" target="_blank">Configuring Access for a Search Domain</a> in the <i>Amazon CloudSearch Developer Guide</i>. The maximum size of a policy document is 100 KB.</p>
   */
  Options: string | undefined;

  /**
   * <p>The status of domain configuration option.</p>
   */
  Status: OptionStatus | undefined;
}

/**
 * <p>The result of a <code>DescribeServiceAccessPolicies</code> request.</p>
 */
export interface DescribeServiceAccessPoliciesResponse {
  /**
   * <p>The access rules configured for the domain specified in the request.</p>
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>DescribeSuggester</a></code> operation. Specifies the name of the domain you want to describe. To restrict the response to particular suggesters, specify the names of the suggesters you want to describe. To show the active configuration and exclude any pending changes, set the <code>Deployed</code> option to <code>true</code>.</p>
 */
export interface DescribeSuggestersRequest {
  /**
   * <p>The name of the domain you want to describe.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The suggesters you want to describe.</p>
   */
  SuggesterNames?: string[];

  /**
   * <p>Whether to display the deployed configuration (<code>true</code>) or include any pending changes (<code>false</code>). Defaults to <code>false</code>.</p>
   */
  Deployed?: boolean;
}

/**
 * <p>The result of a <code>DescribeSuggesters</code> request.</p>
 */
export interface DescribeSuggestersResponse {
  /**
   * <p>The suggesters configured for the domain specified in the request.</p>
   */
  Suggesters: SuggesterStatus[] | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>IndexDocuments</a></code> operation. Specifies the name of the domain you want to re-index.</p>
 */
export interface IndexDocumentsRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;
}

/**
 * <p>The result of an <code>IndexDocuments</code> request. Contains the status of the indexing operation, including the fields being indexed.</p>
 */
export interface IndexDocumentsResponse {
  /**
   * <p>The names of the fields that are currently being indexed.</p>
   */
  FieldNames?: string[];
}

/**
 * <p>The result of a <code>ListDomainNames</code> request. Contains a list of the domains owned by an account.</p>
 */
export interface ListDomainNamesResponse {
  /**
   * <p>The names of the search domains owned by an account.</p>
   */
  DomainNames?: Record<string, string>;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateAvailabilityOptions</a></code> operation. Specifies the name of the domain you want to update and the Multi-AZ availability option.</p>
 */
export interface UpdateAvailabilityOptionsRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>You expand an existing search domain to a second Availability Zone by setting the Multi-AZ option to true. Similarly, you can turn off the Multi-AZ option to downgrade the domain to a single Availability Zone by setting the Multi-AZ option to <code>false</code>. </p>
   */
  MultiAZ: boolean | undefined;
}

/**
 * <p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>
 */
export interface UpdateAvailabilityOptionsResponse {
  /**
   * <p>The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: AvailabilityOptionsStatus;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateDomainEndpointOptions</a></code> operation. Specifies the name of the domain you want to update and the domain endpoint options.</p>
 */
export interface UpdateDomainEndpointOptionsRequest {
  /**
   * <p>A string that represents the name of a domain.</p>
   */
  DomainName: string | undefined;

  /**
   * <p>Whether to require that all requests to the domain arrive over HTTPS. We recommend Policy-Min-TLS-1-2-2019-07 for TLSSecurityPolicy. For compatibility with older clients, the default is Policy-Min-TLS-1-0-2019-07. </p>
   */
  DomainEndpointOptions: DomainEndpointOptions | undefined;
}

/**
 * <p>The result of a <code>UpdateDomainEndpointOptions</code> request. Contains the configuration and status of the domain's endpoint options. </p>
 */
export interface UpdateDomainEndpointOptionsResponse {
  /**
   * <p>The newly-configured domain endpoint options.</p>
   */
  DomainEndpointOptions?: DomainEndpointOptionsStatus;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateScalingParameters</a></code> operation. Specifies the name of the domain you want to update and the scaling parameters you want to configure.</p>
 */
export interface UpdateScalingParametersRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The desired instance type and desired number of replicas of each index partition.</p>
   */
  ScalingParameters: ScalingParameters | undefined;
}

/**
 * <p>The result of a <code>UpdateScalingParameters</code> request. Contains the status of the newly-configured scaling parameters.</p>
 */
export interface UpdateScalingParametersResponse {
  /**
   * <p>The status and configuration of a search domain's scaling parameters. </p>
   */
  ScalingParameters: ScalingParametersStatus | undefined;
}

/**
 * <p>Container for the parameters to the <code><a>UpdateServiceAccessPolicies</a></code> operation. Specifies the name of the domain you want to update and the access rules you want to configure.</p>
 */
export interface UpdateServiceAccessPoliciesRequest {
  /**
   * <p>A string that represents the name of a domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string | undefined;

  /**
   * <p>The access rules you want to configure. These rules replace any existing rules. </p>
   */
  AccessPolicies: string | undefined;
}

/**
 * <p>The result of an <code>UpdateServiceAccessPolicies</code> request. Contains the new access policies.</p>
 */
export interface UpdateServiceAccessPoliciesResponse {
  /**
   * <p>The access rules configured for the domain.</p>
   */
  AccessPolicies: AccessPoliciesStatus | undefined;
}

/**
 * @internal
 */
export const BuildSuggestersRequestFilterSensitiveLog = (obj: BuildSuggestersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BuildSuggestersResponseFilterSensitiveLog = (obj: BuildSuggestersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainRequestFilterSensitiveLog = (obj: CreateDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ServiceEndpointFilterSensitiveLog = (obj: ServiceEndpoint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LimitsFilterSensitiveLog = (obj: Limits): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainStatusFilterSensitiveLog = (obj: DomainStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDomainResponseFilterSensitiveLog = (obj: CreateDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisOptionsFilterSensitiveLog = (obj: AnalysisOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSchemeFilterSensitiveLog = (obj: AnalysisScheme): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineAnalysisSchemeRequestFilterSensitiveLog = (obj: DefineAnalysisSchemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OptionStatusFilterSensitiveLog = (obj: OptionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AnalysisSchemeStatusFilterSensitiveLog = (obj: AnalysisSchemeStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineAnalysisSchemeResponseFilterSensitiveLog = (obj: DefineAnalysisSchemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExpressionFilterSensitiveLog = (obj: Expression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineExpressionRequestFilterSensitiveLog = (obj: DefineExpressionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExpressionStatusFilterSensitiveLog = (obj: ExpressionStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineExpressionResponseFilterSensitiveLog = (obj: DefineExpressionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateArrayOptionsFilterSensitiveLog = (obj: DateArrayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DateOptionsFilterSensitiveLog = (obj: DateOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DoubleArrayOptionsFilterSensitiveLog = (obj: DoubleArrayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DoubleOptionsFilterSensitiveLog = (obj: DoubleOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntArrayOptionsFilterSensitiveLog = (obj: IntArrayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IntOptionsFilterSensitiveLog = (obj: IntOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LatLonOptionsFilterSensitiveLog = (obj: LatLonOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LiteralArrayOptionsFilterSensitiveLog = (obj: LiteralArrayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LiteralOptionsFilterSensitiveLog = (obj: LiteralOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextArrayOptionsFilterSensitiveLog = (obj: TextArrayOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TextOptionsFilterSensitiveLog = (obj: TextOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexFieldFilterSensitiveLog = (obj: IndexField): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineIndexFieldRequestFilterSensitiveLog = (obj: DefineIndexFieldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexFieldStatusFilterSensitiveLog = (obj: IndexFieldStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineIndexFieldResponseFilterSensitiveLog = (obj: DefineIndexFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DocumentSuggesterOptionsFilterSensitiveLog = (obj: DocumentSuggesterOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuggesterFilterSensitiveLog = (obj: Suggester): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineSuggesterRequestFilterSensitiveLog = (obj: DefineSuggesterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuggesterStatusFilterSensitiveLog = (obj: SuggesterStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DefineSuggesterResponseFilterSensitiveLog = (obj: DefineSuggesterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnalysisSchemeRequestFilterSensitiveLog = (obj: DeleteAnalysisSchemeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAnalysisSchemeResponseFilterSensitiveLog = (obj: DeleteAnalysisSchemeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainRequestFilterSensitiveLog = (obj: DeleteDomainRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDomainResponseFilterSensitiveLog = (obj: DeleteDomainResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExpressionRequestFilterSensitiveLog = (obj: DeleteExpressionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteExpressionResponseFilterSensitiveLog = (obj: DeleteExpressionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIndexFieldRequestFilterSensitiveLog = (obj: DeleteIndexFieldRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteIndexFieldResponseFilterSensitiveLog = (obj: DeleteIndexFieldResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuggesterRequestFilterSensitiveLog = (obj: DeleteSuggesterRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteSuggesterResponseFilterSensitiveLog = (obj: DeleteSuggesterResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisSchemesRequestFilterSensitiveLog = (obj: DescribeAnalysisSchemesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAnalysisSchemesResponseFilterSensitiveLog = (obj: DescribeAnalysisSchemesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailabilityOptionsRequestFilterSensitiveLog = (obj: DescribeAvailabilityOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AvailabilityOptionsStatusFilterSensitiveLog = (obj: AvailabilityOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAvailabilityOptionsResponseFilterSensitiveLog = (
  obj: DescribeAvailabilityOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainEndpointOptionsRequestFilterSensitiveLog = (
  obj: DescribeDomainEndpointOptionsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsFilterSensitiveLog = (obj: DomainEndpointOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DomainEndpointOptionsStatusFilterSensitiveLog = (obj: DomainEndpointOptionsStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainEndpointOptionsResponseFilterSensitiveLog = (
  obj: DescribeDomainEndpointOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsRequestFilterSensitiveLog = (obj: DescribeDomainsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDomainsResponseFilterSensitiveLog = (obj: DescribeDomainsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExpressionsRequestFilterSensitiveLog = (obj: DescribeExpressionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeExpressionsResponseFilterSensitiveLog = (obj: DescribeExpressionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIndexFieldsRequestFilterSensitiveLog = (obj: DescribeIndexFieldsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeIndexFieldsResponseFilterSensitiveLog = (obj: DescribeIndexFieldsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingParametersRequestFilterSensitiveLog = (obj: DescribeScalingParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingParametersFilterSensitiveLog = (obj: ScalingParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingParametersStatusFilterSensitiveLog = (obj: ScalingParametersStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingParametersResponseFilterSensitiveLog = (obj: DescribeScalingParametersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceAccessPoliciesRequestFilterSensitiveLog = (
  obj: DescribeServiceAccessPoliciesRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AccessPoliciesStatusFilterSensitiveLog = (obj: AccessPoliciesStatus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeServiceAccessPoliciesResponseFilterSensitiveLog = (
  obj: DescribeServiceAccessPoliciesResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSuggestersRequestFilterSensitiveLog = (obj: DescribeSuggestersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeSuggestersResponseFilterSensitiveLog = (obj: DescribeSuggestersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexDocumentsRequestFilterSensitiveLog = (obj: IndexDocumentsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const IndexDocumentsResponseFilterSensitiveLog = (obj: IndexDocumentsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDomainNamesResponseFilterSensitiveLog = (obj: ListDomainNamesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAvailabilityOptionsRequestFilterSensitiveLog = (obj: UpdateAvailabilityOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAvailabilityOptionsResponseFilterSensitiveLog = (obj: UpdateAvailabilityOptionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainEndpointOptionsRequestFilterSensitiveLog = (obj: UpdateDomainEndpointOptionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDomainEndpointOptionsResponseFilterSensitiveLog = (
  obj: UpdateDomainEndpointOptionsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScalingParametersRequestFilterSensitiveLog = (obj: UpdateScalingParametersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScalingParametersResponseFilterSensitiveLog = (obj: UpdateScalingParametersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServiceAccessPoliciesRequestFilterSensitiveLog = (obj: UpdateServiceAccessPoliciesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateServiceAccessPoliciesResponseFilterSensitiveLog = (
  obj: UpdateServiceAccessPoliciesResponse
): any => ({
  ...obj,
});
