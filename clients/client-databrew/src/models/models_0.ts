// smithy-typescript generated code
import {
  AnalyticsMode,
  CompressionFormat,
  DatabaseOutputMode,
  EncryptionMode,
  InputFormat,
  JobRunState,
  JobType,
  LogSubscription,
  Order,
  OrderedBy,
  OutputFormat,
  ParameterType,
  SampleMode,
  SampleType,
  SessionStatus,
  Source,
  ThresholdType,
  ThresholdUnit,
  ValidationMode,
} from "./enums";

/**
 * <p>Configuration of statistics that are allowed to be run on columns that
 *             contain detected entities. When undefined, no statistics will be computed
 *             on columns that contain detected entities.</p>
 * @public
 */
export interface AllowedStatistics {
  /**
   * <p>One or more column statistics to allow for columns that contain detected entities.</p>
   * @public
   */
  Statistics: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe whose versions are to be deleted.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An array of version identifiers, for the recipe versions to be deleted. You can
   *             specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>.
   *                 <code>LATEST_PUBLISHED</code> is not supported.</p>
   * @public
   */
  RecipeVersions: string[] | undefined;
}

/**
 * <p>Represents any errors encountered when attempting to delete multiple recipe
 *             versions.</p>
 * @public
 */
export interface RecipeVersionErrorDetail {
  /**
   * <p>The HTTP status code for the error.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The text of the error message.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The identifier for the recipe version associated with this error.</p>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRecipeVersionResponse {
  /**
   * <p>The name of the recipe that was modified.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Errors, if any, that occurred while attempting to delete the recipe versions.</p>
   * @public
   */
  Errors?: RecipeVersionErrorDetail[] | undefined;
}

/**
 * <p>Represents a set of options that define how DataBrew will read a
 *             comma-separated value (CSV) file when creating a dataset from that file.</p>
 * @public
 */
export interface CsvOptions {
  /**
   * <p>A single character that specifies the delimiter being used in the CSV file.</p>
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   * @public
   */
  HeaderRow?: boolean | undefined;
}

/**
 * <p>Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when
 *             creating a dataset from that file.</p>
 * @public
 */
export interface ExcelOptions {
  /**
   * <p>One or more named sheets in the Excel file that will be included in the dataset.</p>
   * @public
   */
  SheetNames?: string[] | undefined;

  /**
   * <p>One or more sheet numbers in the Excel file that will be included in the
   *             dataset.</p>
   * @public
   */
  SheetIndexes?: number[] | undefined;

  /**
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   * @public
   */
  HeaderRow?: boolean | undefined;
}

/**
 * <p>Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.</p>
 * @public
 */
export interface JsonOptions {
  /**
   * <p>A value that specifies whether JSON input contains embedded new line
   *             characters.</p>
   * @public
   */
  MultiLine?: boolean | undefined;
}

/**
 * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
 *             Excel, or JSON input.</p>
 * @public
 */
export interface FormatOptions {
  /**
   * <p>Options that define how JSON input is to be interpreted by DataBrew.</p>
   * @public
   */
  Json?: JsonOptions | undefined;

  /**
   * <p>Options that define how Excel input is to be interpreted by DataBrew.</p>
   * @public
   */
  Excel?: ExcelOptions | undefined;

  /**
   * <p>Options that define how CSV input is to be interpreted by DataBrew.</p>
   * @public
   */
  Csv?: CsvOptions | undefined;
}

/**
 * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
 *             input data, or write output from a job.</p>
 * @public
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name.</p>
   * @public
   */
  Bucket: string | undefined;

  /**
   * <p>The unique name of the object in the bucket.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the bucket owner.</p>
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * <p>Connection information for dataset input files stored in a database.</p>
 * @public
 */
export interface DatabaseInputDefinition {
  /**
   * <p>The Glue Connection that stores the connection information for the target
   *             database.</p>
   * @public
   */
  GlueConnectionName: string | undefined;

  /**
   * <p>The table within the target database.</p>
   * @public
   */
  DatabaseTableName?: string | undefined;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   * @public
   */
  TempDirectory?: S3Location | undefined;

  /**
   * <p>Custom SQL to run against the provided Glue connection. This SQL will be used as
   *             the input for DataBrew projects and jobs.</p>
   * @public
   */
  QueryString?: string | undefined;
}

/**
 * <p>Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew
 *             dataset. </p>
 * @public
 */
export interface DataCatalogInputDefinition {
  /**
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the
   *             data.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of a database in the Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of a database table in the Data Catalog. This table corresponds to a DataBrew
   *             dataset.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Represents an Amazon location where DataBrew can store intermediate results.</p>
   * @public
   */
  TempDirectory?: S3Location | undefined;
}

/**
 * <p>Contains additional resource information needed for specific datasets.</p>
 * @public
 */
export interface Metadata {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew
   *             only supports ARNs from Amazon AppFlow.</p>
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
 *             Amazon S3.</p>
 * @public
 */
export interface Input {
  /**
   * <p>The Amazon S3 location where the data is stored.</p>
   * @public
   */
  S3InputDefinition?: S3Location | undefined;

  /**
   * <p>The Glue Data Catalog parameters for the data.</p>
   * @public
   */
  DataCatalogInputDefinition?: DataCatalogInputDefinition | undefined;

  /**
   * <p>Connection information for dataset input files stored in a database.</p>
   * @public
   */
  DatabaseInputDefinition?: DatabaseInputDefinition | undefined;

  /**
   * <p>Contains additional resource information needed for specific datasets.</p>
   * @public
   */
  Metadata?: Metadata | undefined;
}

/**
 * <p>Represents a limit imposed on number of Amazon S3 files that should be selected for a
 *             dataset from a connected Amazon S3 path.</p>
 * @public
 */
export interface FilesLimit {
  /**
   * <p>The number of Amazon S3 files to select.</p>
   * @public
   */
  MaxFiles: number | undefined;

  /**
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as
   *             a sorting criteria. Currently it's the only allowed value.</p>
   * @public
   */
  OrderedBy?: OrderedBy | undefined;

  /**
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By
   *             default uses DESCENDING order, i.e. most recent files are selected first. Another
   *             possible value is ASCENDING.</p>
   * @public
   */
  Order?: Order | undefined;
}

/**
 * <p>Represents a structure for defining parameter conditions. Supported conditions are described
 *             here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported
 *                 conditions for dynamic datasets</a> in the
 *             <i>Glue DataBrew Developer Guide</i>.</p>
 * @public
 */
export interface FilterExpression {
  /**
   * <p>The expression which includes condition names followed by substitution variables, possibly grouped
   *             and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and
   *             (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.</p>
   * @public
   */
  Expression: string | undefined;

  /**
   * <p>The map of substitution variable names to their values used in this filter expression.</p>
   * @public
   */
  ValuesMap: Record<string, string> | undefined;
}

/**
 * <p>Represents additional options for correct interpretation of datetime parameters used in
 *             the Amazon S3 path of a dataset.</p>
 * @public
 */
export interface DatetimeOptions {
  /**
   * <p>Required option, that defines the datetime format used for a date parameter in the
   *             Amazon S3 path. Should use only supported datetime specifiers and separation characters, all
   *             literal a-z or A-Z characters should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".</p>
   * @public
   */
  Format: string | undefined;

  /**
   * <p>Optional value for a timezone offset of the datetime parameter value in the Amazon S3
   *             path. Shouldn't be used if Format for this parameter includes timezone fields.
   *             If no offset specified, UTC is assumed.</p>
   * @public
   */
  TimezoneOffset?: string | undefined;

  /**
   * <p>Optional value for a non-US locale code, needed for correct interpretation of some date formats.</p>
   * @public
   */
  LocaleCode?: string | undefined;
}

/**
 * <p>Represents a dataset parameter that defines type and conditions for a parameter in the
 *                 Amazon S3 path of the dataset.</p>
 * @public
 */
export interface DatasetParameter {
  /**
   * <p>The name of the parameter that is used in the dataset's Amazon S3 path.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.</p>
   * @public
   */
  Type: ParameterType | undefined;

  /**
   * <p>Additional parameter options such as a format and a timezone. Required for datetime parameters.</p>
   * @public
   */
  DatetimeOptions?: DatetimeOptions | undefined;

  /**
   * <p>Optional boolean value that defines whether the captured value of this parameter
   *             should be used to create a new column in a dataset.</p>
   * @public
   */
  CreateColumn?: boolean | undefined;

  /**
   * <p>The optional filter expression structure to apply additional matching criteria to the parameter.</p>
   * @public
   */
  Filter?: FilterExpression | undefined;
}

/**
 * <p>Represents a set of options that define how DataBrew selects files for a given Amazon S3
 *             path in a dataset.</p>
 * @public
 */
export interface PathOptions {
  /**
   * <p>If provided, this structure defines a date range for matching Amazon S3 objects based on their
   *             LastModifiedDate attribute in Amazon S3.</p>
   * @public
   */
  LastModifiedDateCondition?: FilterExpression | undefined;

  /**
   * <p>If provided, this structure imposes a limit on a number of files that should be selected.</p>
   * @public
   */
  FilesLimit?: FilesLimit | undefined;

  /**
   * <p>A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.</p>
   * @public
   */
  Parameters?: Record<string, DatasetParameter> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z,
   *             0-9), hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   * @public
   */
  Input: Input | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * <p>Metadata tags to apply to this dataset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset that you created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Selector of a column from a dataset for profile job configuration.
 *             One selector includes either a column name or a regular expression.</p>
 * @public
 */
export interface ColumnSelector {
  /**
   * <p>A regular expression for selecting a column from a dataset.</p>
   * @public
   */
  Regex?: string | undefined;

  /**
   * <p>The name of a column from a dataset.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * <p>Override of a particular evaluation for a profile job. </p>
 * @public
 */
export interface StatisticOverride {
  /**
   * <p>The name of an evaluation</p>
   * @public
   */
  Statistic: string | undefined;

  /**
   * <p>A map that includes overrides of an evaluation’s parameters.</p>
   * @public
   */
  Parameters: Record<string, string> | undefined;
}

/**
 * <p>Configuration of evaluations for a profile job. This configuration can be used to select
 *             evaluations and override the parameters of selected evaluations.
 *         </p>
 * @public
 */
export interface StatisticsConfiguration {
  /**
   * <p>List of included evaluations. When the list is undefined, all supported
   *             evaluations will be included.</p>
   * @public
   */
  IncludedStatistics?: string[] | undefined;

  /**
   * <p>List of overrides for evaluations.</p>
   * @public
   */
  Overrides?: StatisticOverride[] | undefined;
}

/**
 * <p>Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select
 *             evaluations and override parameters of evaluations for particular columns.
 *         </p>
 * @public
 */
export interface ColumnStatisticsConfiguration {
  /**
   * <p>List of column selectors. Selectors can be used to select columns from the dataset.
   *             When selectors are undefined, configuration will be applied to all supported columns.
   *         </p>
   * @public
   */
  Selectors?: ColumnSelector[] | undefined;

  /**
   * <p>Configuration for evaluations. Statistics can be used to select evaluations and override
   *             parameters of evaluations.
   *         </p>
   * @public
   */
  Statistics: StatisticsConfiguration | undefined;
}

/**
 * <p>Configuration of entity detection for a profile job. When undefined, entity
 *             detection is disabled.</p>
 * @public
 */
export interface EntityDetectorConfiguration {
  /**
   * <p>Entity types to detect. Can be any of the following:</p>
   *          <ul>
   *             <li>
   *                <p>USA_SSN</p>
   *             </li>
   *             <li>
   *                <p>EMAIL</p>
   *             </li>
   *             <li>
   *                <p>USA_ITIN</p>
   *             </li>
   *             <li>
   *                <p>USA_PASSPORT_NUMBER</p>
   *             </li>
   *             <li>
   *                <p>PHONE_NUMBER</p>
   *             </li>
   *             <li>
   *                <p>USA_DRIVING_LICENSE</p>
   *             </li>
   *             <li>
   *                <p>BANK_ACCOUNT</p>
   *             </li>
   *             <li>
   *                <p>CREDIT_CARD</p>
   *             </li>
   *             <li>
   *                <p>IP_ADDRESS</p>
   *             </li>
   *             <li>
   *                <p>MAC_ADDRESS</p>
   *             </li>
   *             <li>
   *                <p>USA_DEA_NUMBER</p>
   *             </li>
   *             <li>
   *                <p>USA_HCPCS_CODE</p>
   *             </li>
   *             <li>
   *                <p>USA_NATIONAL_PROVIDER_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>USA_NATIONAL_DRUG_CODE</p>
   *             </li>
   *             <li>
   *                <p>USA_HEALTH_INSURANCE_CLAIM_NUMBER</p>
   *             </li>
   *             <li>
   *                <p>USA_MEDICARE_BENEFICIARY_IDENTIFIER</p>
   *             </li>
   *             <li>
   *                <p>USA_CPT_CODE</p>
   *             </li>
   *             <li>
   *                <p>PERSON_NAME</p>
   *             </li>
   *             <li>
   *                <p>DATE</p>
   *             </li>
   *          </ul>
   *          <p>The Entity type group USA_ALL is also supported, and includes all of the
   *             above entity types except PERSON_NAME and DATE.</p>
   * @public
   */
  EntityTypes: string[] | undefined;

  /**
   * <p>Configuration of statistics that are allowed to be run on columns that
   *             contain detected entities. When undefined, no statistics will be computed
   *             on columns that contain detected entities.</p>
   * @public
   */
  AllowedStatistics?: AllowedStatistics[] | undefined;
}

/**
 * <p>Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default
 *             parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all
 *             supported columns.
 *         </p>
 * @public
 */
export interface ProfileConfiguration {
  /**
   * <p>Configuration for inter-column evaluations. Configuration can be used to select evaluations and override
   *             parameters of evaluations. When configuration is undefined, the profile job will run all supported
   *             inter-column evaluations.
   *         </p>
   * @public
   */
  DatasetStatisticsConfiguration?: StatisticsConfiguration | undefined;

  /**
   * <p>List of column selectors. ProfileColumns can be used to select columns from the dataset. When
   *             ProfileColumns is undefined, the profile job will profile all supported columns.
   *         </p>
   * @public
   */
  ProfileColumns?: ColumnSelector[] | undefined;

  /**
   * <p>List of configurations for column evaluations. ColumnStatisticsConfigurations are used to
   *             select evaluations and override parameters of evaluations for particular columns. When
   *             ColumnStatisticsConfigurations is undefined,  the profile job will profile all supported columns
   *             and run all supported  evaluations.
   *         </p>
   * @public
   */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[] | undefined;

  /**
   * <p>Configuration of entity detection for a profile job. When undefined, entity detection is disabled.</p>
   * @public
   */
  EntityDetectorConfiguration?: EntityDetectorConfiguration | undefined;
}

/**
 * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
 *             profile job is run. If a <code>JobSample</code> value isn't provided, the
 *             default is used. The default value is CUSTOM_ROWS for the mode parameter and
 *             20,000 for the size parameter.</p>
 * @public
 */
export interface JobSample {
  /**
   * <p>A value that determines whether the profile job is run on the entire dataset or a
   *             specified number of rows. This value must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>FULL_DATASET - The profile job is run on the entire dataset.</p>
   *             </li>
   *             <li>
   *                <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the
   *                     <code>Size</code> parameter.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Mode?: SampleMode | undefined;

  /**
   * <p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The
   *             profile job is run on the specified number of rows. The maximum value for size is
   *             Long.MAX_VALUE.</p>
   *          <p>Long.MAX_VALUE = 9223372036854775807</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>Configuration for data quality validation. Used to select the Rulesets and Validation Mode
 *             to be used in the profile job. When ValidationConfiguration is null, the profile
 *             job will run without data quality validation.</p>
 * @public
 */
export interface ValidationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job.
   *             The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of
   *             the dataset that is associated with the profile job.</p>
   * @public
   */
  RulesetArn: string | undefined;

  /**
   * <p>Mode of data quality validation. Default mode is “CHECK_ALL” which verifies all rules
   *             defined in the selected ruleset.</p>
   * @public
   */
  ValidationMode?: ValidationMode | undefined;
}

/**
 * @public
 */
export interface CreateProfileJobRequest {
  /**
   * <p>The name of the dataset that this job is to act upon.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with
   *                     KMS-managed keys.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of nodes that DataBrew can use when the job processes data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   * @public
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface CreateProfileJobResponse {
  /**
   * <p>The name of the job that was created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
 *             analysis.</p>
 * @public
 */
export interface Sample {
  /**
   * <p>The number of rows in the sample.</p>
   * @public
   */
  Size?: number | undefined;

  /**
   * <p>The way in which DataBrew obtains rows from a dataset.</p>
   * @public
   */
  Type: SampleType | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of an existing dataset to associate this project with.</p>
   * @public
   */
  DatasetName: string | undefined;

  /**
   * <p>A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of an existing recipe to associate with the project.</p>
   * @public
   */
  RecipeName: string | undefined;

  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this project.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The name of the project that you created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents a transformation and associated parameters that are used to apply a change
 *             to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe
 *                 actions reference</a>.</p>
 * @public
 */
export interface RecipeAction {
  /**
   * <p>The name of a valid DataBrew transformation to be performed on the data.</p>
   * @public
   */
  Operation: string | undefined;

  /**
   * <p>Contextual parameters for the transformation.</p>
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *          <p>Conditions are used with recipe actions. The action is only performed for column values where the
 *             condition evaluates to true.</p>
 *          <p>If a recipe requires more than one condition, then the recipe must specify multiple
 *             <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before
 *             the recipe action is performed.</p>
 * @public
 */
export interface ConditionExpression {
  /**
   * <p>A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure">Recipe
   *             structure</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   * @public
   */
  Condition: string | undefined;

  /**
   * <p>A value that the condition must evaluate to for the condition to succeed.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>A column to apply this condition to.</p>
   * @public
   */
  TargetColumn: string | undefined;
}

/**
 * <p>Represents a single step from a DataBrew recipe to be performed.</p>
 * @public
 */
export interface RecipeStep {
  /**
   * <p>The particular action to be performed in the recipe step.</p>
   * @public
   */
  Action: RecipeAction | undefined;

  /**
   * <p>One or more conditions that must be met for the recipe step to succeed.</p>
   *          <note>
   *             <p>All of the conditions in the array must be met. In other words, all of the
   *                 conditions must be combined using a logical AND operation.</p>
   *          </note>
   * @public
   */
  ConditionExpressions?: ConditionExpression[] | undefined;
}

/**
 * @public
 */
export interface CreateRecipeRequest {
  /**
   * <p>A description for the recipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An array containing the steps to be performed by the recipe. Each recipe step consists
   *             of one recipe action and (optionally) an array of condition expressions.</p>
   * @public
   */
  Steps: RecipeStep[] | undefined;

  /**
   * <p>Metadata tags to apply to this recipe.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecipeResponse {
  /**
   * <p>The name of the recipe that you created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents options that specify how and where DataBrew writes the database
 *             output generated by recipe jobs.</p>
 * @public
 */
export interface DatabaseTableOutputOptions {
  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can store
   *             intermediate results.</p>
   * @public
   */
  TempDirectory?: S3Location | undefined;

  /**
   * <p>A prefix for the name of a table DataBrew will create in the database.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * <p>Represents a JDBC database output object which defines the output destination for
 *             a DataBrew recipe job to write into.</p>
 * @public
 */
export interface DatabaseOutput {
  /**
   * <p>The Glue connection that stores the connection information for the
   *             target database.</p>
   * @public
   */
  GlueConnectionName: string | undefined;

  /**
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   * @public
   */
  DatabaseOptions: DatabaseTableOutputOptions | undefined;

  /**
   * <p>The output mode to write into the database. Currently supported option: NEW_TABLE.</p>
   * @public
   */
  DatabaseOutputMode?: DatabaseOutputMode | undefined;
}

/**
 * <p>Represents options that specify how and where DataBrew writes the Amazon S3 output
 *             generated by recipe jobs.</p>
 * @public
 */
export interface S3TableOutputOptions {
  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output
   *             from a job.</p>
   * @public
   */
  Location: S3Location | undefined;
}

/**
 * <p>Represents options that specify how and where in the Glue Data Catalog DataBrew
 *             writes the output generated by recipe jobs.</p>
 * @public
 */
export interface DataCatalogOutput {
  /**
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that
   *             stores the data.</p>
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * <p>The name of a database in the Data Catalog.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of a table in the Data Catalog.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>Represents options that specify how and where DataBrew writes the Amazon S3
   *             output generated by recipe jobs.</p>
   * @public
   */
  S3Options?: S3TableOutputOptions | undefined;

  /**
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   * @public
   */
  DatabaseOptions?: DatabaseTableOutputOptions | undefined;

  /**
   * <p>A value that, if true, means that any data in the location specified for output
   *             is overwritten with new output. Not supported with DatabaseOptions.</p>
   * @public
   */
  Overwrite?: boolean | undefined;
}

/**
 * <p>Represents a set of options that define how DataBrew will write a
 *             comma-separated value (CSV) file.</p>
 * @public
 */
export interface CsvOutputOptions {
  /**
   * <p>A single character that specifies the delimiter used to create CSV job output.</p>
   * @public
   */
  Delimiter?: string | undefined;
}

/**
 * <p>Represents a set of options that define the structure of comma-separated (CSV) job output.</p>
 * @public
 */
export interface OutputFormatOptions {
  /**
   * <p>Represents a set of options that define the structure of comma-separated value (CSV)
   *             job output.</p>
   * @public
   */
  Csv?: CsvOutputOptions | undefined;
}

/**
 * <p>Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by
 *             recipe jobs or profile jobs.</p>
 * @public
 */
export interface Output {
  /**
   * <p>The compression algorithm used to compress the output text of the job.</p>
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * <p>The data format of the output of the job.</p>
   * @public
   */
  Format?: OutputFormat | undefined;

  /**
   * <p>The names of one or more partition columns for the output of the job.</p>
   * @public
   */
  PartitionColumns?: string[] | undefined;

  /**
   * <p>The location in Amazon S3 where the job writes its output.</p>
   * @public
   */
  Location: S3Location | undefined;

  /**
   * <p>A value that, if true, means that any data in the location specified for output is
   *             overwritten with new output.</p>
   * @public
   */
  Overwrite?: boolean | undefined;

  /**
   * <p>Represents options that define how DataBrew formats job output files.</p>
   * @public
   */
  FormatOptions?: OutputFormatOptions | undefined;

  /**
   * <p>Maximum number of files to be generated by the job and written to the output folder. For output partitioned
   *             by column(s), the MaxOutputFiles value is the maximum number of files per partition.</p>
   * @public
   */
  MaxOutputFiles?: number | undefined;
}

/**
 * <p>Represents the name and version of a DataBrew recipe.</p>
 * @public
 */
export interface RecipeReference {
  /**
   * <p>The name of the recipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the version for the recipe. </p>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateRecipeJobRequest {
  /**
   * <p>The name of the dataset that this job processes.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen
   *             (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>One or more artifacts that represent the output from running the job.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output destination for
   *             a DataBrew recipe job to write to. </p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>Either the name of an existing project, or a combination of a recipe and a dataset to
   *             associate with the recipe.</p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecipeJobResponse {
  /**
   * <p>The name of the job that you created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>The threshold used with a non-aggregate check expression. The non-aggregate check expression
 *             will be applied to each row in a specific column. Then the threshold will be used to determine
 *             whether the validation succeeds.</p>
 * @public
 */
export interface Threshold {
  /**
   * <p>The value of a threshold.</p>
   * @public
   */
  Value: number | undefined;

  /**
   * <p>The type of a threshold. Used for comparison of an actual count of rows that satisfy the
   *             rule to the threshold value.</p>
   * @public
   */
  Type?: ThresholdType | undefined;

  /**
   * <p>Unit of threshold value. Can be either a COUNT or PERCENTAGE of the full sample size
   *             used for validation.</p>
   * @public
   */
  Unit?: ThresholdUnit | undefined;
}

/**
 * <p>Represents a single data quality requirement that should be validated in the
 *             scope of this dataset.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A value that specifies whether the rule is disabled. Once a rule is
   *             disabled, a profile job will not validate it during a job run. Default
   *             value is false.</p>
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * <p>The expression which includes column references, condition names followed by variable
   *             references, possibly grouped and combined with other conditions. For example,
   *                 <code>(:col1 starts_with :prefix1 or :col1 starts_with :prefix2) and (:col1
   *                 ends_with :suffix1 or :col1 ends_with :suffix2)</code>. Column and value references
   *             are substitution variables that should start with the ':' symbol. Depending on the
   *             context, substitution variables' values can be either an actual value or a column name.
   *             These values are defined in the SubstitutionMap. If a CheckExpression starts with a
   *             column reference, then ColumnSelectors in the rule should be null. If ColumnSelectors
   *             has been defined, then there should be no column reference in the left side of a
   *             condition, for example, <code>is_between :val1 and :val2</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/profile.data-quality-available-checks.html">Available checks</a>
   *          </p>
   * @public
   */
  CheckExpression: string | undefined;

  /**
   * <p>The map of substitution variable names to their values used in a check
   *             expression. Variable names should start with a ':' (colon).  Variable values can either
   *             be actual values or column names. To differentiate between the two, column names
   *             should be enclosed in backticks, for example, <code>":col1": "`Column A`".</code>
   *          </p>
   * @public
   */
  SubstitutionMap?: Record<string, string> | undefined;

  /**
   * <p>The threshold used with a non-aggregate check expression. Non-aggregate check expressions
   *             will be applied to each row in a specific column, and the threshold will be used to determine
   *             whether the validation succeeds.</p>
   * @public
   */
  Threshold?: Threshold | undefined;

  /**
   * <p>List of column selectors. Selectors can be used to select columns using a name or regular
   *             expression from the dataset. Rule will be applied to selected columns.</p>
   * @public
   */
  ColumnSelectors?: ColumnSelector[] | undefined;
}

/**
 * @public
 */
export interface CreateRulesetRequest {
  /**
   * <p>The name of the ruleset to be created. Valid characters are alphanumeric
   *             (A-Z, a-z, 0-9), hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the
   *             ruleset is associated with.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes
   *             one or more checks to be validated on a DataBrew dataset.</p>
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * <p>Metadata tags to apply to the ruleset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRulesetResponse {
  /**
   * <p>The unique name of the created ruleset.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleRequest {
  /**
   * <p>The name or names of one or more jobs to be run.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   * @public
   */
  CronExpression: string | undefined;

  /**
   * <p>Metadata tags to apply to this schedule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleResponse {
  /**
   * <p>The name of the schedule that was created.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * <p>The name of the dataset that you deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * <p>The name of the job to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * <p>The name of the job that you deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The name of the project to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * <p>The name of the project that you deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of the recipe to be deleted. You can specify a numeric versions
   *                 (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is
   *             not supported.</p>
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionResponse {
  /**
   * <p>The name of the recipe that was deleted.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The version of the recipe that was deleted.</p>
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetRequest {
  /**
   * <p>The name of the ruleset to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetResponse {
  /**
   * <p>The name of the deleted ruleset.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleRequest {
  /**
   * <p>The name of the schedule to be deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleResponse {
  /**
   * <p>The name of the schedule that was deleted.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * <p>The identifier (user name) of the user who created the dataset.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the dataset was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The name of the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file
   *             or folder.</p>
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   * @public
   */
  Input: Input | undefined;

  /**
   * <p>The date and time that the dataset was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user who last modified the dataset.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The location of the data for this dataset, Amazon S3 or the
   *             Glue Data Catalog.</p>
   * @public
   */
  Source?: Source | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * <p>Metadata tags associated with this dataset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * <p>The name of the job to be described.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * <p>The date and time that the job was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user associated with the creation of the job.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The dataset that the job acts upon.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
   *                     S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The name of the job.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The job type, which must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROFILE</code> - The job analyzes the dataset to determine its size,
   *                     data types, data distribution, and more.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECIPE</code> - The job applies one or more transformations to a
   *                     dataset.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: JobType | undefined;

  /**
   * <p>The identifier (user name) of the user who last modified the job.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time that the job was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>Indicates whether Amazon CloudWatch logging is enabled for this job.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of compute nodes that DataBrew can consume when the job processes
   *             data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>One or more artifacts that represent the output from running the job.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>The DataBrew project associated with this job.</p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Metadata tags associated with this job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed.</p>
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunRequest {
  /**
   * <p>The name of the job being processed during this run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the job run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunResponse {
  /**
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   * @public
   */
  Attempt?: number | undefined;

  /**
   * <p>The date and time when the job completed processing.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The name of the dataset for the job to process.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The amount of time, in seconds, during which the job run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>The name of the job being processed during this run.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * <p>The unique identifier of the job run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The current state of the job run entity itself.</p>
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>One or more output artifacts from a job run.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who started the job run.</p>
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * <p>The date and time when the job run began.</p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * <p>The name of the project to be described.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * <p>The date and time that the project was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user who created the project.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The dataset associated with the project.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The date and time that the project was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user who last modified the project.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The recipe associated with this job.</p>
   * @public
   */
  RecipeName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Metadata tags associated with this project.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Describes the current state of the session:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code> - allocating resources for the session.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INITIALIZING</code> - getting the session ready for first use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASSIGNED</code> - the session is ready for use.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SessionStatus?: SessionStatus | undefined;

  /**
   * <p>The identifier (user name) of the user that opened the project for use. </p>
   * @public
   */
  OpenedBy?: string | undefined;

  /**
   * <p>The date and time when the project was opened. </p>
   * @public
   */
  OpenDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeRequest {
  /**
   * <p>The name of the recipe to be described.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The recipe version identifier. If this parameter isn't specified, then the latest
   *             published version is returned.</p>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeResponse {
  /**
   * <p>The identifier (user name) of the user who created the recipe.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the recipe was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user who last modified the recipe.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time that the recipe was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The name of the project associated with this recipe.</p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>The identifier (user name) of the user who last published the recipe.</p>
   * @public
   */
  PublishedBy?: string | undefined;

  /**
   * <p>The date and time when the recipe was last published.</p>
   * @public
   */
  PublishedDate?: Date | undefined;

  /**
   * <p>The description of the recipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the recipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   * @public
   */
  Steps?: RecipeStep[] | undefined;

  /**
   * <p>Metadata tags associated with this project.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The ARN of the recipe.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The recipe version identifier.</p>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesetRequest {
  /**
   * <p>The name of the ruleset to be described.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesetResponse {
  /**
   * <p>The name of the ruleset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes one
   *             or more checks to be validated on a DataBrew dataset.</p>
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * <p>The date and time that the ruleset was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The modification date and time of the ruleset.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>Metadata tags that have been applied to the ruleset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeScheduleRequest {
  /**
   * <p>The name of the schedule to be described.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduleResponse {
  /**
   * <p>The date and time that the schedule was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The identifier (user name) of the user who created the schedule. </p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The name or names of one or more jobs to be run by using the schedule.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>The identifier (user name) of the user who last modified the schedule.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time that the schedule was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The date or dates and time or times when the jobs are to be run for the schedule. For
   *             more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the
   *             <i>Glue DataBrew Developer Guide</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>Metadata tags associated with this schedule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the schedule.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents a dataset that can be processed by DataBrew.</p>
 * @public
 */
export interface Dataset {
  /**
   * <p>The ID of the Amazon Web Services account that owns the dataset.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the dataset.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the dataset was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The unique name of the dataset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * <p>A set of options that define how DataBrew interprets the data in the dataset.</p>
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * <p>Information on how DataBrew can find the dataset, in either the Glue Data Catalog
   *             or Amazon S3.</p>
   * @public
   */
  Input: Input | undefined;

  /**
   * <p>The last modification date and time of the dataset.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the dataset.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog.</p>
   * @public
   */
  Source?: Source | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * <p>Metadata tags that have been applied to the dataset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) for the dataset.</p>
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * <p>A list of datasets that are defined.</p>
   * @public
   */
  Datasets: Dataset[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * <p>The name of the job.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents one run of a DataBrew job.</p>
 * @public
 */
export interface JobRun {
  /**
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   * @public
   */
  Attempt?: number | undefined;

  /**
   * <p>The date and time when the job completed processing.</p>
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * <p>The name of the dataset for the job to process.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * <p>The amount of time, in seconds, during which a job run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * <p>The name of the job being processed during this run.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The unique identifier of the job run.</p>
   * @public
   */
  RunId?: string | undefined;

  /**
   * <p>The current state of the job run entity itself.</p>
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * <p>One or more output artifacts from a job run.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>The set of steps processed by the job.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who initiated the job run. </p>
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * <p>The date and time when the job run began. </p>
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   * @public
   */
  JobSample?: JobSample | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job run.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * <p>A list of job runs that have occurred for the specified job.</p>
   * @public
   */
  JobRuns: JobRun[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>The name of a dataset. Using this parameter indicates to return only those jobs that
   *             act on the specified dataset.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of a project. Using this parameter indicates to return only those jobs that
   *             are associated with the specified project.</p>
   * @public
   */
  ProjectName?: string | undefined;
}

/**
 * <p>Represents all of the attributes of a DataBrew job.</p>
 * @public
 */
export interface Job {
  /**
   * <p>The ID of the Amazon Web Services account that owns the job.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the job.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the job was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>A dataset that the job is to process.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job
   *             output. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html">Encrypting data
   *                 written by DataBrew jobs</a>
   *          </p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The unique name of the job.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The job type of the job, which must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROFILE</code> - A job to analyze a dataset, to determine its size, data
   *                     types, data distribution, and more.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RECIPE</code> - A job to apply one or more transformations to a
   *                     dataset.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Type?: JobType | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the job.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The modification date and time of the job.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of nodes that can be consumed when the job processes data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>One or more artifacts that represent output from running the job.</p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>The name of the project that the job is associated with.</p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>A set of steps that the job runs.</p>
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * <p>The unique Amazon Resource Name (ARN) for the job.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to be assumed for this job.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Metadata tags that have been applied to the job.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default value
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   * @public
   */
  JobSample?: JobSample | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>A list of jobs that are defined.</p>
   * @public
   */
  Jobs: Job[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Represents all of the attributes of a DataBrew project.</p>
 * @public
 */
export interface Project {
  /**
   * <p>The ID of the Amazon Web Services account that owns the project.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The date and time that the project was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who crated the project.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The dataset that the project is to act upon.</p>
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * <p>The last modification date and time for the project.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the project.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The unique name of a project.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of a recipe that will be developed during a project session.</p>
   * @public
   */
  RecipeName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The sample size and sampling type to apply to the data. If this parameter isn't
   *             specified, then the sample consists of the first 500 rows from the dataset.</p>
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * <p>Metadata tags that have been applied to the project.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this
   *             project.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user that opened the project for use.</p>
   * @public
   */
  OpenedBy?: string | undefined;

  /**
   * <p>The date and time when the project was opened.</p>
   * @public
   */
  OpenDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>A list of projects that are defined .</p>
   * @public
   */
  Projects: Project[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or
   *                 <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted,
   *                 <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe
   *             versions.</p>
   *          <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code>
   *          </p>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * <p>Represents one or more actions to be performed on a DataBrew dataset.</p>
 * @public
 */
export interface Recipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the recipe.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the recipe was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the recipe.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The last modification date and time of the recipe.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The name of the project that the recipe is associated with.</p>
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who published the recipe.</p>
   * @public
   */
  PublishedBy?: string | undefined;

  /**
   * <p>The date and time when the recipe was published.</p>
   * @public
   */
  PublishedDate?: Date | undefined;

  /**
   * <p>The description of the recipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique name for the recipe.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recipe.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>A list of steps that are defined by the recipe.</p>
   * @public
   */
  Steps?: RecipeStep[] | undefined;

  /**
   * <p>Metadata tags that have been applied to the recipe.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The identifier for the version for the recipe. Must be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>Numeric version (<code>X.Y</code>) - <code>X</code> and <code>Y</code> stand
   *                     for major and minor version numbers. The maximum length of each is 6 digits, and
   *                     neither can be negative values. Both <code>X</code> and <code>Y</code> are
   *                     required, and "0.0" isn't a valid version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST_WORKING</code> - the most recent valid version being developed in
   *                     a DataBrew project.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LATEST_PUBLISHED</code> - the most recent published version.</p>
   *             </li>
   *          </ul>
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesResponse {
  /**
   * <p>A list of recipes that are defined.</p>
   * @public
   */
  Recipes: Recipe[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipeVersionsRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The name of the recipe for which to return version information.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRecipeVersionsResponse {
  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of versions for the specified recipe.</p>
   * @public
   */
  Recipes: Recipe[] | undefined;
}

/**
 * @public
 */
export interface ListRulesetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter
   *             indicates to return only those rulesets that are associated with the specified resource.</p>
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination
   *             if a previous request was truncated. To get the next set of pages, pass in
   *             the NextToken value from the response object of the previous page call.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Contains metadata about the ruleset.</p>
 * @public
 */
export interface RulesetItem {
  /**
   * <p>The ID of the Amazon Web Services account that owns the ruleset.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the ruleset was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>The description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The modification date and time of the ruleset.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The name of the ruleset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The number of rules that are defined in the ruleset.</p>
   * @public
   */
  RuleCount?: number | undefined;

  /**
   * <p>Metadata tags that have been applied to the ruleset.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   * @public
   */
  TargetArn: string | undefined;
}

/**
 * @public
 */
export interface ListRulesetsResponse {
  /**
   * <p>A list of RulesetItem. RulesetItem contains meta data of a ruleset.</p>
   * @public
   */
  Rulesets: RulesetItem[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulesRequest {
  /**
   * <p>The name of the job that these schedules apply to.</p>
   * @public
   */
  JobName?: string | undefined;

  /**
   * <p>The maximum number of results to return in this request. </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents one or more dates and times when a job is to run.</p>
 * @public
 */
export interface Schedule {
  /**
   * <p>The ID of the Amazon Web Services account that owns the schedule.</p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the schedule.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the schedule was created.</p>
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * <p>A list of jobs to be run, according to the schedule.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the schedule.</p>
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * <p>The date and time when the schedule was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>The dates and times when the job is to run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *             expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * <p>Metadata tags that have been applied to the schedule.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>The name of the schedule.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulesResponse {
  /**
   * <p>A list of schedules that are defined.</p>
   * @public
   */
  Schedules: Schedule[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
   *         </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the DataBrew resource.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PublishRecipeRequest {
  /**
   * <p>A description of the recipe to be published, for this version of the recipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the recipe to be published.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface PublishRecipeResponse {
  /**
   * <p>The name of the recipe that you published.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Represents the data being transformed during an action.</p>
 * @public
 */
export interface ViewFrame {
  /**
   * <p>The starting index for the range of columns to return in the view frame.</p>
   * @public
   */
  StartColumnIndex: number | undefined;

  /**
   * <p>The number of columns to include in the view frame, beginning with the
   *                 <code>StartColumnIndex</code> value and ignoring any columns in the
   *                 <code>HiddenColumns</code> list.</p>
   * @public
   */
  ColumnRange?: number | undefined;

  /**
   * <p>A list of columns to hide in the view frame.</p>
   * @public
   */
  HiddenColumns?: string[] | undefined;

  /**
   * <p>The starting index for the range of rows to return in the view frame.</p>
   * @public
   */
  StartRowIndex?: number | undefined;

  /**
   * <p>The number of rows to include in the view frame, beginning with the
   *             <code>StartRowIndex</code> value.</p>
   * @public
   */
  RowRange?: number | undefined;

  /**
   * <p>Controls if analytics computation is enabled or disabled. Enabled by default.</p>
   * @public
   */
  Analytics?: AnalyticsMode | undefined;
}

/**
 * @public
 */
export interface SendProjectSessionActionRequest {
  /**
   * <p>If true, the result of the recipe step will be returned, but not applied.</p>
   * @public
   */
  Preview?: boolean | undefined;

  /**
   * <p>The name of the project to apply the action to.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Represents a single step from a DataBrew recipe to be performed.</p>
   * @public
   */
  RecipeStep?: RecipeStep | undefined;

  /**
   * <p>The index from which to preview a step. This index is used to preview the result of
   *             steps that have already been applied, so that the resulting view frame is from earlier
   *             in the view frame stack.</p>
   * @public
   */
  StepIndex?: number | undefined;

  /**
   * <p>A unique identifier for an interactive session that's currently open and ready for
   *             work. The action will be performed on this session.</p>
   * @public
   */
  ClientSessionId?: string | undefined;

  /**
   * <p>Represents the data being transformed during an action.</p>
   * @public
   */
  ViewFrame?: ViewFrame | undefined;
}

/**
 * @public
 */
export interface SendProjectSessionActionResponse {
  /**
   * <p>A message indicating the result of performing the action.</p>
   * @public
   */
  Result?: string | undefined;

  /**
   * <p>The name of the project that was affected by the action.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the action that was performed.</p>
   * @public
   */
  ActionId?: number | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The name of the job to be run.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>A system-generated identifier for this particular job run.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StartProjectSessionRequest {
  /**
   * <p>The name of the project to act upon.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A value that, if true, enables you to take control of a session, even if a different
   *             client is currently accessing the project.</p>
   * @public
   */
  AssumeControl?: boolean | undefined;
}

/**
 * @public
 */
export interface StartProjectSessionResponse {
  /**
   * <p>The name of the project to be acted upon.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A system-generated identifier for the session.</p>
   * @public
   */
  ClientSessionId?: string | undefined;
}

/**
 * @public
 */
export interface StopJobRunRequest {
  /**
   * <p>The name of the job to be stopped.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the job run to be stopped.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopJobRunResponse {
  /**
   * <p>The ID of the job run that you stopped.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The DataBrew resource to which tags should be added. The value for this parameter is
   *             an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or
   *             a recipe.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   * @public
   */
  Tags: Record<string, string> | undefined;
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
   * <p>A DataBrew resource from which you want to remove a tag or tags. The value for this
   *             parameter is an Amazon Resource Name (ARN). </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys (names) of one or more tags to be removed.</p>
   * @public
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
export interface UpdateDatasetRequest {
  /**
   * <p>The name of the dataset to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   * @public
   */
  Input: Input | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   * @public
   */
  PathOptions?: PathOptions | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * <p>The name of the dataset that you updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileJobRequest {
  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon
   *                     S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The name of the job to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of compute nodes that DataBrew can use when the job processes
   *             data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   * @public
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;

  /**
   * <p>Sample configuration for Profile Jobs only. Determines the number of rows on which the
   *             Profile job will be executed. If a JobSample value is not provided for profile jobs, the
   *             default value will be used. The default value is CUSTOM_ROWS for the mode parameter and
   *             20000 for the size parameter.</p>
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface UpdateProfileJobResponse {
  /**
   * <p>The name of the job that was updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the project to be updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * <p>The date and time that the project was last modified.</p>
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * <p>The name of the project that you updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeRequest {
  /**
   * <p>A description of the recipe.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The name of the recipe to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   * @public
   */
  Steps?: RecipeStep[] | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeResponse {
  /**
   * <p>The name of the recipe that was updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * <p>The name of the job to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * <p>One or more artifacts that represent the output from running the job. </p>
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * <p>Represents a list of JDBC database output objects which defines the output destination for a
   *             DataBrew recipe job to write into.</p>
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   * @public
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeJobResponse {
  /**
   * <p>The name of the job that you updated.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetRequest {
  /**
   * <p>The name of the ruleset to be updated.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes one or more
   *             checks to be validated on a DataBrew dataset.</p>
   * @public
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetResponse {
  /**
   * <p>The name of the updated ruleset.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleRequest {
  /**
   * <p>The name or names of one or more jobs to be run for this schedule.</p>
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   * @public
   */
  CronExpression: string | undefined;

  /**
   * <p>The name of the schedule to update.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleResponse {
  /**
   * <p>The name of the schedule that was updated.</p>
   * @public
   */
  Name: string | undefined;
}
