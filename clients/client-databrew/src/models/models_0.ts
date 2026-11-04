// smithy-typescript generated code
import type {
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
 * Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.
 *
 * @public
 */
export interface AllowedStatistics {
  /**
   * One or more column statistics to allow for columns that contain detected entities.
   *
   * @public
   */
  Statistics: string[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRecipeVersionRequest {
  /**
   * The name of the recipe whose versions are to be deleted.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An array of version identifiers, for the recipe versions to be deleted. You can specify numeric versions (`X.Y`) or `LATEST_WORKING`. `LATEST_PUBLISHED` is not supported.
   *
   * @public
   */
  RecipeVersions: string[] | undefined;
}

/**
 * Represents any errors encountered when attempting to delete multiple recipe versions.
 *
 * @public
 */
export interface RecipeVersionErrorDetail {
  /**
   * The HTTP status code for the error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The text of the error message.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The identifier for the recipe version associated with this error.
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteRecipeVersionResponse {
  /**
   * The name of the recipe that was modified.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Errors, if any, that occurred while attempting to delete the recipe versions.
   *
   * @public
   */
  Errors?: RecipeVersionErrorDetail[] | undefined;
}

/**
 * Represents a set of options that define how DataBrew will read a comma-separated value (CSV) file when creating a dataset from that file.
 *
 * @public
 */
export interface CsvOptions {
  /**
   * A single character that specifies the delimiter being used in the CSV file.
   *
   * @public
   */
  Delimiter?: string | undefined;

  /**
   * A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   *
   * @public
   */
  HeaderRow?: boolean | undefined;
}

/**
 * Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when creating a dataset from that file.
 *
 * @public
 */
export interface ExcelOptions {
  /**
   * One or more named sheets in the Excel file that will be included in the dataset.
   *
   * @public
   */
  SheetNames?: string[] | undefined;

  /**
   * One or more sheet numbers in the Excel file that will be included in the dataset.
   *
   * @public
   */
  SheetIndexes?: number[] | undefined;

  /**
   * A variable that specifies whether the first row in the file is parsed as the header. If this value is false, column names are auto-generated.
   *
   * @public
   */
  HeaderRow?: boolean | undefined;
}

/**
 * Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.
 *
 * @public
 */
export interface JsonOptions {
  /**
   * A value that specifies whether JSON input contains embedded new line characters.
   *
   * @public
   */
  MultiLine?: boolean | undefined;
}

/**
 * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
 *
 * @public
 */
export interface FormatOptions {
  /**
   * Options that define how JSON input is to be interpreted by DataBrew.
   *
   * @public
   */
  Json?: JsonOptions | undefined;

  /**
   * Options that define how Excel input is to be interpreted by DataBrew.
   *
   * @public
   */
  Excel?: ExcelOptions | undefined;

  /**
   * Options that define how CSV input is to be interpreted by DataBrew.
   *
   * @public
   */
  Csv?: CsvOptions | undefined;
}

/**
 * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
 *
 * @public
 */
export interface S3Location {
  /**
   * The Amazon S3 bucket name.
   *
   * @public
   */
  Bucket: string | undefined;

  /**
   * The unique name of the object in the bucket.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The Amazon Web Services account ID of the bucket owner.
   *
   * @public
   */
  BucketOwner?: string | undefined;
}

/**
 * Connection information for dataset input files stored in a database.
 *
 * @public
 */
export interface DatabaseInputDefinition {
  /**
   * The Glue Connection that stores the connection information for the target database.
   *
   * @public
   */
  GlueConnectionName: string | undefined;

  /**
   * The table within the target database.
   *
   * @public
   */
  DatabaseTableName?: string | undefined;

  /**
   * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
   *
   * @public
   */
  TempDirectory?: S3Location | undefined;

  /**
   * Custom SQL to run against the provided Glue connection. This SQL will be used as the input for DataBrew projects and jobs.
   *
   * @public
   */
  QueryString?: string | undefined;
}

/**
 * Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew dataset.
 *
 * @public
 */
export interface DataCatalogInputDefinition {
  /**
   * The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the data.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of a database in the Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of a database table in the Data Catalog. This table corresponds to a DataBrew dataset.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Represents an Amazon location where DataBrew can store intermediate results.
   *
   * @public
   */
  TempDirectory?: S3Location | undefined;
}

/**
 * Contains additional resource information needed for specific datasets.
 *
 * @public
 */
export interface Metadata {
  /**
   * The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew only supports ARNs from Amazon AppFlow.
   *
   * @public
   */
  SourceArn?: string | undefined;
}

/**
 * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
 *
 * @public
 */
export interface Input {
  /**
   * The Amazon S3 location where the data is stored.
   *
   * @public
   */
  S3InputDefinition?: S3Location | undefined;

  /**
   * The Glue Data Catalog parameters for the data.
   *
   * @public
   */
  DataCatalogInputDefinition?: DataCatalogInputDefinition | undefined;

  /**
   * Connection information for dataset input files stored in a database.
   *
   * @public
   */
  DatabaseInputDefinition?: DatabaseInputDefinition | undefined;

  /**
   * Contains additional resource information needed for specific datasets.
   *
   * @public
   */
  Metadata?: Metadata | undefined;
}

/**
 * Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected Amazon S3 path.
 *
 * @public
 */
export interface FilesLimit {
  /**
   * The number of Amazon S3 files to select.
   *
   * @public
   */
  MaxFiles: number | undefined;

  /**
   * A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as a sorting criteria. Currently it's the only allowed value.
   *
   * @public
   */
  OrderedBy?: OrderedBy | undefined;

  /**
   * A criteria to use for Amazon S3 files sorting before their selection. By default uses DESCENDING order, i.e. most recent files are selected first. Another possible value is ASCENDING.
   *
   * @public
   */
  Order?: Order | undefined;
}

/**
 * Represents a structure for defining parameter conditions. Supported conditions are described here: [Supported conditions for dynamic datasets](https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets) in the *Glue DataBrew Developer Guide*.
 *
 * @public
 */
export interface FilterExpression {
  /**
   * The expression which includes condition names followed by substitution variables, possibly grouped and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.
   *
   * @public
   */
  Expression: string | undefined;

  /**
   * The map of substitution variable names to their values used in this filter expression.
   *
   * @public
   */
  ValuesMap: Record<string, string> | undefined;
}

/**
 * Represents additional options for correct interpretation of datetime parameters used in the Amazon S3 path of a dataset.
 *
 * @public
 */
export interface DatetimeOptions {
  /**
   * Required option, that defines the datetime format used for a date parameter in the Amazon S3 path. Should use only supported datetime specifiers and separation characters, all literal a-z or A-Z characters should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".
   *
   * @public
   */
  Format: string | undefined;

  /**
   * Optional value for a timezone offset of the datetime parameter value in the Amazon S3 path. Shouldn't be used if Format for this parameter includes timezone fields. If no offset specified, UTC is assumed.
   *
   * @public
   */
  TimezoneOffset?: string | undefined;

  /**
   * Optional value for a non-US locale code, needed for correct interpretation of some date formats.
   *
   * @public
   */
  LocaleCode?: string | undefined;
}

/**
 * Represents a dataset parameter that defines type and conditions for a parameter in the Amazon S3 path of the dataset.
 *
 * @public
 */
export interface DatasetParameter {
  /**
   * The name of the parameter that is used in the dataset's Amazon S3 path.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.
   *
   * @public
   */
  Type: ParameterType | undefined;

  /**
   * Additional parameter options such as a format and a timezone. Required for datetime parameters.
   *
   * @public
   */
  DatetimeOptions?: DatetimeOptions | undefined;

  /**
   * Optional boolean value that defines whether the captured value of this parameter should be used to create a new column in a dataset.
   *
   * @public
   */
  CreateColumn?: boolean | undefined;

  /**
   * The optional filter expression structure to apply additional matching criteria to the parameter.
   *
   * @public
   */
  Filter?: FilterExpression | undefined;
}

/**
 * Represents a set of options that define how DataBrew selects files for a given Amazon S3 path in a dataset.
 *
 * @public
 */
export interface PathOptions {
  /**
   * If provided, this structure defines a date range for matching Amazon S3 objects based on their LastModifiedDate attribute in Amazon S3.
   *
   * @public
   */
  LastModifiedDateCondition?: FilterExpression | undefined;

  /**
   * If provided, this structure imposes a limit on a number of files that should be selected.
   *
   * @public
   */
  FilesLimit?: FilesLimit | undefined;

  /**
   * A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.
   *
   * @public
   */
  Parameters?: Record<string, DatasetParameter> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The file format of a dataset that is created from an Amazon S3 file or folder.
   *
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
   *
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
   *
   * @public
   */
  Input: Input | undefined;

  /**
   * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
   *
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * Metadata tags to apply to this dataset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * The name of the dataset that you created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular expression.
 *
 * @public
 */
export interface ColumnSelector {
  /**
   * A regular expression for selecting a column from a dataset.
   *
   * @public
   */
  Regex?: string | undefined;

  /**
   * The name of a column from a dataset.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Override of a particular evaluation for a profile job.
 *
 * @public
 */
export interface StatisticOverride {
  /**
   * The name of an evaluation
   *
   * @public
   */
  Statistic: string | undefined;

  /**
   * A map that includes overrides of an evaluation’s parameters.
   *
   * @public
   */
  Parameters: Record<string, string> | undefined;
}

/**
 * Configuration of evaluations for a profile job. This configuration can be used to select evaluations and override the parameters of selected evaluations.
 *
 * @public
 */
export interface StatisticsConfiguration {
  /**
   * List of included evaluations. When the list is undefined, all supported evaluations will be included.
   *
   * @public
   */
  IncludedStatistics?: string[] | undefined;

  /**
   * List of overrides for evaluations.
   *
   * @public
   */
  Overrides?: StatisticOverride[] | undefined;
}

/**
 * Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select evaluations and override parameters of evaluations for particular columns.
 *
 * @public
 */
export interface ColumnStatisticsConfiguration {
  /**
   * List of column selectors. Selectors can be used to select columns from the dataset. When selectors are undefined, configuration will be applied to all supported columns.
   *
   * @public
   */
  Selectors?: ColumnSelector[] | undefined;

  /**
   * Configuration for evaluations. Statistics can be used to select evaluations and override parameters of evaluations.
   *
   * @public
   */
  Statistics: StatisticsConfiguration | undefined;
}

/**
 * Configuration of entity detection for a profile job. When undefined, entity detection is disabled.
 *
 * @public
 */
export interface EntityDetectorConfiguration {
  /**
   * Entity types to detect. Can be any of the following:
   *
   * - USA_SSN
   * - EMAIL
   * - USA_ITIN
   * - USA_PASSPORT_NUMBER
   * - PHONE_NUMBER
   * - USA_DRIVING_LICENSE
   * - BANK_ACCOUNT
   * - CREDIT_CARD
   * - IP_ADDRESS
   * - MAC_ADDRESS
   * - USA_DEA_NUMBER
   * - USA_HCPCS_CODE
   * - USA_NATIONAL_PROVIDER_IDENTIFIER
   * - USA_NATIONAL_DRUG_CODE
   * - USA_HEALTH_INSURANCE_CLAIM_NUMBER
   * - USA_MEDICARE_BENEFICIARY_IDENTIFIER
   * - USA_CPT_CODE
   * - PERSON_NAME
   * - DATE
   *
   * The Entity type group USA_ALL is also supported, and includes all of the above entity types except PERSON_NAME and DATE.
   *
   * @public
   */
  EntityTypes: string[] | undefined;

  /**
   * Configuration of statistics that are allowed to be run on columns that contain detected entities. When undefined, no statistics will be computed on columns that contain detected entities.
   *
   * @public
   */
  AllowedStatistics?: AllowedStatistics[] | undefined;
}

/**
 * Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all supported columns.
 *
 * @public
 */
export interface ProfileConfiguration {
  /**
   * Configuration for inter-column evaluations. Configuration can be used to select evaluations and override parameters of evaluations. When configuration is undefined, the profile job will run all supported inter-column evaluations.
   *
   * @public
   */
  DatasetStatisticsConfiguration?: StatisticsConfiguration | undefined;

  /**
   * List of column selectors. ProfileColumns can be used to select columns from the dataset. When ProfileColumns is undefined, the profile job will profile all supported columns.
   *
   * @public
   */
  ProfileColumns?: ColumnSelector[] | undefined;

  /**
   * List of configurations for column evaluations. ColumnStatisticsConfigurations are used to select evaluations and override parameters of evaluations for particular columns. When ColumnStatisticsConfigurations is undefined, the profile job will profile all supported columns and run all supported evaluations.
   *
   * @public
   */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[] | undefined;

  /**
   * Configuration of entity detection for a profile job. When undefined, entity detection is disabled.
   *
   * @public
   */
  EntityDetectorConfiguration?: EntityDetectorConfiguration | undefined;
}

/**
 * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a `JobSample` value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
 *
 * @public
 */
export interface JobSample {
  /**
   * A value that determines whether the profile job is run on the entire dataset or a specified number of rows. This value must be one of the following:
   *
   * - FULL_DATASET - The profile job is run on the entire dataset.
   * - CUSTOM_ROWS - The profile job is run on the number of rows specified in the `Size` parameter.
   *
   * @public
   */
  Mode?: SampleMode | undefined;

  /**
   * The `Size` parameter is only required when the mode is CUSTOM_ROWS. The profile job is run on the specified number of rows. The maximum value for size is Long.MAX_VALUE.
   *
   * Long.MAX_VALUE = 9223372036854775807
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * Configuration for data quality validation. Used to select the Rulesets and Validation Mode to be used in the profile job. When ValidationConfiguration is null, the profile job will run without data quality validation.
 *
 * @public
 */
export interface ValidationConfiguration {
  /**
   * The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job. The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of the dataset that is associated with the profile job.
   *
   * @public
   */
  RulesetArn: string | undefined;

  /**
   * Mode of data quality validation. Default mode is “CHECK_ALL” which verifies all rules defined in the selected ruleset.
   *
   * @public
   */
  ValidationMode?: ValidationMode | undefined;
}

/**
 * @public
 */
export interface CreateProfileJobRequest {
  /**
   * The name of the dataset that this job is to act upon.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - `SSE-KMS` - Server-side encryption with KMS-managed keys.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of nodes that DataBrew can use when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
   *
   * @public
   */
  OutputLocation: S3Location | undefined;

  /**
   * Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.
   *
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * List of validation configurations that are applied to the profile job.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Metadata tags to apply to this job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed. If a JobSample value is not provided, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.
   *
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface CreateProfileJobResponse {
  /**
   * The name of the job that was created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
 *
 * @public
 */
export interface Sample {
  /**
   * The number of rows in the sample.
   *
   * @public
   */
  Size?: number | undefined;

  /**
   * The way in which DataBrew obtains rows from a dataset.
   *
   * @public
   */
  Type: SampleType | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * The name of an existing dataset to associate this project with.
   *
   * @public
   */
  DatasetName: string | undefined;

  /**
   * A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of an existing recipe to associate with the project.
   *
   * @public
   */
  RecipeName: string | undefined;

  /**
   * Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
   *
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed for this request.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Metadata tags to apply to this project.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * The name of the project that you created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents a transformation and associated parameters that are used to apply a change to a DataBrew dataset. For more information, see [Recipe actions reference](https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html).
 *
 * @public
 */
export interface RecipeAction {
  /**
   * The name of a valid DataBrew transformation to be performed on the data.
   *
   * @public
   */
  Operation: string | undefined;

  /**
   * Contextual parameters for the transformation.
   *
   * @public
   */
  Parameters?: Record<string, string> | undefined;
}

/**
 * Represents an individual condition that evaluates to true or false.
 *
 * Conditions are used with recipe actions. The action is only performed for column values where the condition evaluates to true.
 *
 * If a recipe requires more than one condition, then the recipe must specify multiple `ConditionExpression` elements. Each condition is applied to the rows in a dataset first, before the recipe action is performed.
 *
 * @public
 */
export interface ConditionExpression {
  /**
   * A specific condition to apply to a recipe action. For more information, see [Recipe structure](https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure) in the *Glue DataBrew Developer Guide*.
   *
   * @public
   */
  Condition: string | undefined;

  /**
   * A value that the condition must evaluate to for the condition to succeed.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * A column to apply this condition to.
   *
   * @public
   */
  TargetColumn: string | undefined;
}

/**
 * Represents a single step from a DataBrew recipe to be performed.
 *
 * @public
 */
export interface RecipeStep {
  /**
   * The particular action to be performed in the recipe step.
   *
   * @public
   */
  Action: RecipeAction | undefined;

  /**
   * One or more conditions that must be met for the recipe step to succeed.
   *
   * > **Note:** All of the conditions in the array must be met. In other words, all of the conditions must be combined using a logical AND operation.
   *
   * @public
   */
  ConditionExpressions?: ConditionExpression[] | undefined;
}

/**
 * @public
 */
export interface CreateRecipeRequest {
  /**
   * A description for the recipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * An array containing the steps to be performed by the recipe. Each recipe step consists of one recipe action and (optionally) an array of condition expressions.
   *
   * @public
   */
  Steps: RecipeStep[] | undefined;

  /**
   * Metadata tags to apply to this recipe.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRecipeResponse {
  /**
   * The name of the recipe that you created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
 *
 * @public
 */
export interface DatabaseTableOutputOptions {
  /**
   * Represents an Amazon S3 location (bucket name and object key) where DataBrew can store intermediate results.
   *
   * @public
   */
  TempDirectory?: S3Location | undefined;

  /**
   * A prefix for the name of a table DataBrew will create in the database.
   *
   * @public
   */
  TableName: string | undefined;
}

/**
 * Represents a JDBC database output object which defines the output destination for a DataBrew recipe job to write into.
 *
 * @public
 */
export interface DatabaseOutput {
  /**
   * The Glue connection that stores the connection information for the target database.
   *
   * @public
   */
  GlueConnectionName: string | undefined;

  /**
   * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
   *
   * @public
   */
  DatabaseOptions: DatabaseTableOutputOptions | undefined;

  /**
   * The output mode to write into the database. Currently supported option: NEW_TABLE.
   *
   * @public
   */
  DatabaseOutputMode?: DatabaseOutputMode | undefined;
}

/**
 * Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
 *
 * @public
 */
export interface S3TableOutputOptions {
  /**
   * Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output from a job.
   *
   * @public
   */
  Location: S3Location | undefined;
}

/**
 * Represents options that specify how and where in the Glue Data Catalog DataBrew writes the output generated by recipe jobs.
 *
 * @public
 */
export interface DataCatalogOutput {
  /**
   * The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the data.
   *
   * @public
   */
  CatalogId?: string | undefined;

  /**
   * The name of a database in the Data Catalog.
   *
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * The name of a table in the Data Catalog.
   *
   * @public
   */
  TableName: string | undefined;

  /**
   * Represents options that specify how and where DataBrew writes the Amazon S3 output generated by recipe jobs.
   *
   * @public
   */
  S3Options?: S3TableOutputOptions | undefined;

  /**
   * Represents options that specify how and where DataBrew writes the database output generated by recipe jobs.
   *
   * @public
   */
  DatabaseOptions?: DatabaseTableOutputOptions | undefined;

  /**
   * A value that, if true, means that any data in the location specified for output is overwritten with new output. Not supported with DatabaseOptions.
   *
   * @public
   */
  Overwrite?: boolean | undefined;
}

/**
 * Represents a set of options that define how DataBrew will write a comma-separated value (CSV) file.
 *
 * @public
 */
export interface CsvOutputOptions {
  /**
   * A single character that specifies the delimiter used to create CSV job output.
   *
   * @public
   */
  Delimiter?: string | undefined;
}

/**
 * Represents a set of options that define the structure of comma-separated (CSV) job output.
 *
 * @public
 */
export interface OutputFormatOptions {
  /**
   * Represents a set of options that define the structure of comma-separated value (CSV) job output.
   *
   * @public
   */
  Csv?: CsvOutputOptions | undefined;
}

/**
 * Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by recipe jobs or profile jobs.
 *
 * @public
 */
export interface Output {
  /**
   * The compression algorithm used to compress the output text of the job.
   *
   * @public
   */
  CompressionFormat?: CompressionFormat | undefined;

  /**
   * The data format of the output of the job.
   *
   * @public
   */
  Format?: OutputFormat | undefined;

  /**
   * The names of one or more partition columns for the output of the job.
   *
   * @public
   */
  PartitionColumns?: string[] | undefined;

  /**
   * The location in Amazon S3 where the job writes its output.
   *
   * @public
   */
  Location: S3Location | undefined;

  /**
   * A value that, if true, means that any data in the location specified for output is overwritten with new output.
   *
   * @public
   */
  Overwrite?: boolean | undefined;

  /**
   * Represents options that define how DataBrew formats job output files.
   *
   * @public
   */
  FormatOptions?: OutputFormatOptions | undefined;

  /**
   * Maximum number of files to be generated by the job and written to the output folder. For output partitioned by column(s), the MaxOutputFiles value is the maximum number of files per partition.
   *
   * @public
   */
  MaxOutputFiles?: number | undefined;
}

/**
 * Represents the name and version of a DataBrew recipe.
 *
 * @public
 */
export interface RecipeReference {
  /**
   * The name of the recipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The identifier for the version for the recipe.
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface CreateRecipeJobRequest {
  /**
   * The name of the dataset that this job processes.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - Server-side encryption with keys managed by KMS.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of nodes that DataBrew can consume when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * One or more artifacts that represent the output from running the job.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write to.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * Either the name of an existing project, or a combination of a recipe and a dataset to associate with the recipe.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * Represents the name and version of a DataBrew recipe.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * Metadata tags to apply to this job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 */
export interface CreateRecipeJobResponse {
  /**
   * The name of the job that you created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * The threshold used with a non-aggregate check expression. The non-aggregate check expression will be applied to each row in a specific column. Then the threshold will be used to determine whether the validation succeeds.
 *
 * @public
 */
export interface Threshold {
  /**
   * The value of a threshold.
   *
   * @public
   */
  Value: number | undefined;

  /**
   * The type of a threshold. Used for comparison of an actual count of rows that satisfy the rule to the threshold value.
   *
   * @public
   */
  Type?: ThresholdType | undefined;

  /**
   * Unit of threshold value. Can be either a COUNT or PERCENTAGE of the full sample size used for validation.
   *
   * @public
   */
  Unit?: ThresholdUnit | undefined;
}

/**
 * Represents a single data quality requirement that should be validated in the scope of this dataset.
 *
 * @public
 */
export interface Rule {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A value that specifies whether the rule is disabled. Once a rule is disabled, a profile job will not validate it during a job run. Default value is false.
   *
   * @public
   */
  Disabled?: boolean | undefined;

  /**
   * The expression which includes column references, condition names followed by variable references, possibly grouped and combined with other conditions. For example, `(:col1 starts_with :prefix1 or :col1 starts_with :prefix2) and (:col1 ends_with :suffix1 or :col1 ends_with :suffix2)`. Column and value references are substitution variables that should start with the ':' symbol. Depending on the context, substitution variables' values can be either an actual value or a column name. These values are defined in the SubstitutionMap. If a CheckExpression starts with a column reference, then ColumnSelectors in the rule should be null. If ColumnSelectors has been defined, then there should be no column reference in the left side of a condition, for example, `is_between :val1 and :val2`.
   *
   * For more information, see [Available checks](https://docs.aws.amazon.com/databrew/latest/dg/profile.data-quality-available-checks.html)
   *
   * @public
   */
  CheckExpression: string | undefined;

  /**
   * The map of substitution variable names to their values used in a check expression. Variable names should start with a ':' (colon). Variable values can either be actual values or column names. To differentiate between the two, column names should be enclosed in backticks, for example, ``":col1": "`Column A`".``
   *
   * @public
   */
  SubstitutionMap?: Record<string, string> | undefined;

  /**
   * The threshold used with a non-aggregate check expression. Non-aggregate check expressions will be applied to each row in a specific column, and the threshold will be used to determine whether the validation succeeds.
   *
   * @public
   */
  Threshold?: Threshold | undefined;

  /**
   * List of column selectors. Selectors can be used to select columns using a name or regular expression from the dataset. Rule will be applied to selected columns.
   *
   * @public
   */
  ColumnSelectors?: ColumnSelector[] | undefined;
}

/**
 * @public
 */
export interface CreateRulesetRequest {
  /**
   * The name of the ruleset to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.
   *
   * @public
   */
  Rules: Rule[] | undefined;

  /**
   * Metadata tags to apply to the ruleset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateRulesetResponse {
  /**
   * The unique name of the created ruleset.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleRequest {
  /**
   * The name or names of one or more jobs to be run.
   *
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * The date or dates and time or times when the jobs are to be run. For more information, see [Cron expressions](https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html) in the *Glue DataBrew Developer Guide*.
   *
   * @public
   */
  CronExpression: string | undefined;

  /**
   * Metadata tags to apply to this schedule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen (-), period (.), and space.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleResponse {
  /**
   * The name of the schedule that was created.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * The name of the dataset to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * The name of the dataset that you deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * The name of the job to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * The name of the job that you deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * The name of the project to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * The name of the project that you deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionRequest {
  /**
   * The name of the recipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the recipe to be deleted. You can specify a numeric versions (`X.Y`) or `LATEST_WORKING`. `LATEST_PUBLISHED` is not supported.
   *
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionResponse {
  /**
   * The name of the recipe that was deleted.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The version of the recipe that was deleted.
   *
   * @public
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetRequest {
  /**
   * The name of the ruleset to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetResponse {
  /**
   * The name of the deleted ruleset.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleRequest {
  /**
   * The name of the schedule to be deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleResponse {
  /**
   * The name of the schedule that was deleted.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * The name of the dataset to be described.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * The identifier (user name) of the user who created the dataset.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the dataset was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The name of the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The file format of a dataset that is created from an Amazon S3 file or folder.
   *
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
   *
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
   *
   * @public
   */
  Input: Input | undefined;

  /**
   * The date and time that the dataset was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The identifier (user name) of the user who last modified the dataset.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The location of the data for this dataset, Amazon S3 or the Glue Data Catalog.
   *
   * @public
   */
  Source?: Source | undefined;

  /**
   * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
   *
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * Metadata tags associated with this dataset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the dataset.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * The name of the job to be described.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * The date and time that the job was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The identifier (user name) of the user associated with the creation of the job.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The dataset that the job acts upon.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - Server-side encryption with keys managed by KMS.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The name of the job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The job type, which must be one of the following:
   *
   * - `PROFILE` - The job analyzes the dataset to determine its size, data types, data distribution, and more.
   * - `RECIPE` - The job applies one or more transformations to a dataset.
   *
   * @public
   */
  Type?: JobType | undefined;

  /**
   * The identifier (user name) of the user who last modified the job.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time that the job was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * Indicates whether Amazon CloudWatch logging is enabled for this job.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of compute nodes that DataBrew can consume when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * One or more artifacts that represent the output from running the job.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * The DataBrew project associated with this job.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.
   *
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * List of validation configurations that are applied to the profile job.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * Represents the name and version of a DataBrew recipe.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * The Amazon Resource Name (ARN) of the job.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Metadata tags associated with this job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed.
   *
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunRequest {
  /**
   * The name of the job being processed during this run.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the job run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobRunResponse {
  /**
   * The number of times that DataBrew has attempted to run the job.
   *
   * @public
   */
  Attempt?: number | undefined;

  /**
   * The date and time when the job completed processing.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The name of the dataset for the job to process.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * A message indicating an error (if any) that was encountered when the job ran.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The amount of time, in seconds, during which the job run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * The name of the job being processed during this run.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.
   *
   * @public
   */
  ProfileConfiguration?: ProfileConfiguration | undefined;

  /**
   * List of validation configurations that are applied to the profile job.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * The unique identifier of the job run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The current state of the job run entity itself.
   *
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * The current status of Amazon CloudWatch logging for the job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * One or more output artifacts from a job run.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * Represents the name and version of a DataBrew recipe.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who started the job run.
   *
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * The date and time when the job run began.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * Sample configuration for profile jobs only. Determines the number of rows on which the profile job will be executed. If a JobSample value is not provided, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.
   *
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * The name of the project to be described.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * The date and time that the project was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The identifier (user name) of the user who created the project.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The dataset associated with the project.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The date and time that the project was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The identifier (user name) of the user who last modified the project.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The recipe associated with this job.
   *
   * @public
   */
  RecipeName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the project.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
   *
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * The ARN of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Metadata tags associated with this project.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Describes the current state of the session:
   *
   * - `PROVISIONING` - allocating resources for the session.
   * - `INITIALIZING` - getting the session ready for first use.
   * - `ASSIGNED` - the session is ready for use.
   *
   * @public
   */
  SessionStatus?: SessionStatus | undefined;

  /**
   * The identifier (user name) of the user that opened the project for use.
   *
   * @public
   */
  OpenedBy?: string | undefined;

  /**
   * The date and time when the project was opened.
   *
   * @public
   */
  OpenDate?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeRequest {
  /**
   * The name of the recipe to be described.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The recipe version identifier. If this parameter isn't specified, then the latest published version is returned.
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRecipeResponse {
  /**
   * The identifier (user name) of the user who created the recipe.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the recipe was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The identifier (user name) of the user who last modified the recipe.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time that the recipe was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The name of the project associated with this recipe.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * The identifier (user name) of the user who last published the recipe.
   *
   * @public
   */
  PublishedBy?: string | undefined;

  /**
   * The date and time when the recipe was last published.
   *
   * @public
   */
  PublishedDate?: Date | undefined;

  /**
   * The description of the recipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the recipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.
   *
   * @public
   */
  Steps?: RecipeStep[] | undefined;

  /**
   * Metadata tags associated with this project.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ARN of the recipe.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The recipe version identifier.
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesetRequest {
  /**
   * The name of the ruleset to be described.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesetResponse {
  /**
   * The name of the ruleset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * The date and time that the ruleset was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the ruleset.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the ruleset.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The modification date and time of the ruleset.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) for the ruleset.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * Metadata tags that have been applied to the ruleset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeScheduleRequest {
  /**
   * The name of the schedule to be described.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduleResponse {
  /**
   * The date and time that the schedule was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The identifier (user name) of the user who created the schedule.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The name or names of one or more jobs to be run by using the schedule.
   *
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * The identifier (user name) of the user who last modified the schedule.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time that the schedule was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schedule.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The date or dates and time or times when the jobs are to be run for the schedule. For more information, see [Cron expressions](https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html) in the *Glue DataBrew Developer Guide*.
   *
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * Metadata tags associated with this schedule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the schedule.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents a dataset that can be processed by DataBrew.
 *
 * @public
 */
export interface Dataset {
  /**
   * The ID of the Amazon Web Services account that owns the dataset.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the dataset.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the dataset was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The unique name of the dataset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The file format of a dataset that is created from an Amazon S3 file or folder.
   *
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * A set of options that define how DataBrew interprets the data in the dataset.
   *
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * Information on how DataBrew can find the dataset, in either the Glue Data Catalog or Amazon S3.
   *
   * @public
   */
  Input: Input | undefined;

  /**
   * The last modification date and time of the dataset.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the dataset.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog.
   *
   * @public
   */
  Source?: Source | undefined;

  /**
   * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
   *
   * @public
   */
  PathOptions?: PathOptions | undefined;

  /**
   * Metadata tags that have been applied to the dataset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The unique Amazon Resource Name (ARN) for the dataset.
   *
   * @public
   */
  ResourceArn?: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * A list of datasets that are defined.
   *
   * @public
   */
  Datasets: Dataset[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * The name of the job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents one run of a DataBrew job.
 *
 * @public
 */
export interface JobRun {
  /**
   * The number of times that DataBrew has attempted to run the job.
   *
   * @public
   */
  Attempt?: number | undefined;

  /**
   * The date and time when the job completed processing.
   *
   * @public
   */
  CompletedOn?: Date | undefined;

  /**
   * The name of the dataset for the job to process.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * A message indicating an error (if any) that was encountered when the job ran.
   *
   * @public
   */
  ErrorMessage?: string | undefined;

  /**
   * The amount of time, in seconds, during which a job run consumed resources.
   *
   * @public
   */
  ExecutionTime?: number | undefined;

  /**
   * The name of the job being processed during this run.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The unique identifier of the job run.
   *
   * @public
   */
  RunId?: string | undefined;

  /**
   * The current state of the job run entity itself.
   *
   * @public
   */
  State?: JobRunState | undefined;

  /**
   * The current status of Amazon CloudWatch logging for the job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The name of an Amazon CloudWatch log group, where the job writes diagnostic messages when it runs.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * One or more output artifacts from a job run.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * The set of steps processed by the job.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who initiated the job run.
   *
   * @public
   */
  StartedBy?: string | undefined;

  /**
   * The date and time when the job run began.
   *
   * @public
   */
  StartedOn?: Date | undefined;

  /**
   * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a `JobSample` value isn't provided, the default is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
   *
   * @public
   */
  JobSample?: JobSample | undefined;

  /**
   * List of validation configurations that are applied to the profile job run.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * A list of job runs that have occurred for the specified job.
   *
   * @public
   */
  JobRuns: JobRun[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * The name of a dataset. Using this parameter indicates to return only those jobs that act on the specified dataset.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of a project. Using this parameter indicates to return only those jobs that are associated with the specified project.
   *
   * @public
   */
  ProjectName?: string | undefined;
}

/**
 * Represents all of the attributes of a DataBrew job.
 *
 * @public
 */
export interface Job {
  /**
   * The ID of the Amazon Web Services account that owns the job.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the job.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the job was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A dataset that the job is to process.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job output. For more information, see [Encrypting data written by DataBrew jobs](https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html)
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - Server-side encryption with keys managed by KMS.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The unique name of the job.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The job type of the job, which must be one of the following:
   *
   * - `PROFILE` - A job to analyze a dataset, to determine its size, data types, data distribution, and more.
   * - `RECIPE` - A job to apply one or more transformations to a dataset.
   *
   * @public
   */
  Type?: JobType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the job.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The modification date and time of the job.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The current status of Amazon CloudWatch logging for the job.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of nodes that can be consumed when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * One or more artifacts that represent output from running the job.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * The name of the project that the job is associated with.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * A set of steps that the job runs.
   *
   * @public
   */
  RecipeReference?: RecipeReference | undefined;

  /**
   * The unique Amazon Resource Name (ARN) for the job.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role to be assumed for this job.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Metadata tags that have been applied to the job.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A sample configuration for profile jobs only, which determines the number of rows on which the profile job is run. If a `JobSample` value isn't provided, the default value is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the size parameter.
   *
   * @public
   */
  JobSample?: JobSample | undefined;

  /**
   * List of validation configurations that are applied to the profile job.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * A list of jobs that are defined.
   *
   * @public
   */
  Jobs: Job[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Represents all of the attributes of a DataBrew project.
 *
 * @public
 */
export interface Project {
  /**
   * The ID of the Amazon Web Services account that owns the project.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The date and time that the project was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who crated the project.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The dataset that the project is to act upon.
   *
   * @public
   */
  DatasetName?: string | undefined;

  /**
   * The last modification date and time for the project.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the project.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The unique name of a project.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of a recipe that will be developed during a project session.
   *
   * @public
   */
  RecipeName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the project.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The sample size and sampling type to apply to the data. If this parameter isn't specified, then the sample consists of the first 500 rows from the dataset.
   *
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * Metadata tags that have been applied to the project.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that will be assumed for this project.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user that opened the project for use.
   *
   * @public
   */
  OpenedBy?: string | undefined;

  /**
   * The date and time when the project was opened.
   *
   * @public
   */
  OpenDate?: Date | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * A list of projects that are defined .
   *
   * @public
   */
  Projects: Project[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesRequest {
  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Return only those recipes with a version identifier of `LATEST_WORKING` or `LATEST_PUBLISHED`. If `RecipeVersion` is omitted, `ListRecipes` returns all of the `LATEST_PUBLISHED` recipe versions.
   *
   * Valid values: `LATEST_WORKING` | `LATEST_PUBLISHED`
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * Represents one or more actions to be performed on a DataBrew dataset.
 *
 * @public
 */
export interface Recipe {
  /**
   * The Amazon Resource Name (ARN) of the user who created the recipe.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the recipe was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the recipe.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The last modification date and time of the recipe.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The name of the project that the recipe is associated with.
   *
   * @public
   */
  ProjectName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who published the recipe.
   *
   * @public
   */
  PublishedBy?: string | undefined;

  /**
   * The date and time when the recipe was published.
   *
   * @public
   */
  PublishedDate?: Date | undefined;

  /**
   * The description of the recipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique name for the recipe.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the recipe.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * A list of steps that are defined by the recipe.
   *
   * @public
   */
  Steps?: RecipeStep[] | undefined;

  /**
   * Metadata tags that have been applied to the recipe.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The identifier for the version for the recipe. Must be one of the following:
   *
   * - Numeric version (`X.Y`) - `X` and `Y` stand for major and minor version numbers. The maximum length of each is 6 digits, and neither can be negative values. Both `X` and `Y` are required, and "0.0" isn't a valid version.
   * - `LATEST_WORKING` - the most recent valid version being developed in a DataBrew project.
   * - `LATEST_PUBLISHED` - the most recent published version.
   *
   * @public
   */
  RecipeVersion?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipesResponse {
  /**
   * A list of recipes that are defined.
   *
   * @public
   */
  Recipes: Recipe[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRecipeVersionsRequest {
  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The name of the recipe for which to return version information.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRecipeVersionsResponse {
  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of versions for the specified recipe.
   *
   * @public
   */
  Recipes: Recipe[] | undefined;
}

/**
 * @public
 */
export interface ListRulesetsRequest {
  /**
   * The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter indicates to return only those rulesets that are associated with the specified resource.
   *
   * @public
   */
  TargetArn?: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * A token generated by DataBrew that specifies where to continue pagination if a previous request was truncated. To get the next set of pages, pass in the NextToken value from the response object of the previous page call.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Contains metadata about the ruleset.
 *
 * @public
 */
export interface RulesetItem {
  /**
   * The ID of the Amazon Web Services account that owns the ruleset.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the ruleset.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the ruleset was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * The description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the ruleset.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The modification date and time of the ruleset.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The name of the ruleset.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the ruleset.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The number of rules that are defined in the ruleset.
   *
   * @public
   */
  RuleCount?: number | undefined;

  /**
   * Metadata tags that have been applied to the ruleset.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is associated with.
   *
   * @public
   */
  TargetArn: string | undefined;
}

/**
 * @public
 */
export interface ListRulesetsResponse {
  /**
   * A list of RulesetItem. RulesetItem contains meta data of a ruleset.
   *
   * @public
   */
  Rulesets: RulesetItem[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulesRequest {
  /**
   * The name of the job that these schedules apply to.
   *
   * @public
   */
  JobName?: string | undefined;

  /**
   * The maximum number of results to return in this request.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents one or more dates and times when a job is to run.
 *
 * @public
 */
export interface Schedule {
  /**
   * The ID of the Amazon Web Services account that owns the schedule.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who created the schedule.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the schedule was created.
   *
   * @public
   */
  CreateDate?: Date | undefined;

  /**
   * A list of jobs to be run, according to the schedule.
   *
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the user who last modified the schedule.
   *
   * @public
   */
  LastModifiedBy?: string | undefined;

  /**
   * The date and time when the schedule was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the schedule.
   *
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * The dates and times when the job is to run. For more information, see [Cron expressions](https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html) in the *Glue DataBrew Developer Guide*.
   *
   * @public
   */
  CronExpression?: string | undefined;

  /**
   * Metadata tags that have been applied to the schedule.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The name of the schedule.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulesResponse {
  /**
   * A list of schedules that are defined.
   *
   * @public
   */
  Schedules: Schedule[] | undefined;

  /**
   * A token that you can use in a subsequent call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags associated with the DataBrew resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PublishRecipeRequest {
  /**
   * A description of the recipe to be published, for this version of the recipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the recipe to be published.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface PublishRecipeResponse {
  /**
   * The name of the recipe that you published.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Represents the data being transformed during an action.
 *
 * @public
 */
export interface ViewFrame {
  /**
   * The starting index for the range of columns to return in the view frame.
   *
   * @public
   */
  StartColumnIndex: number | undefined;

  /**
   * The number of columns to include in the view frame, beginning with the `StartColumnIndex` value and ignoring any columns in the `HiddenColumns` list.
   *
   * @public
   */
  ColumnRange?: number | undefined;

  /**
   * A list of columns to hide in the view frame.
   *
   * @public
   */
  HiddenColumns?: string[] | undefined;

  /**
   * The starting index for the range of rows to return in the view frame.
   *
   * @public
   */
  StartRowIndex?: number | undefined;

  /**
   * The number of rows to include in the view frame, beginning with the `StartRowIndex` value.
   *
   * @public
   */
  RowRange?: number | undefined;

  /**
   * Controls if analytics computation is enabled or disabled. Enabled by default.
   *
   * @public
   */
  Analytics?: AnalyticsMode | undefined;
}

/**
 * @public
 */
export interface SendProjectSessionActionRequest {
  /**
   * If true, the result of the recipe step will be returned, but not applied.
   *
   * @public
   */
  Preview?: boolean | undefined;

  /**
   * The name of the project to apply the action to.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Represents a single step from a DataBrew recipe to be performed.
   *
   * @public
   */
  RecipeStep?: RecipeStep | undefined;

  /**
   * The index from which to preview a step. This index is used to preview the result of steps that have already been applied, so that the resulting view frame is from earlier in the view frame stack.
   *
   * @public
   */
  StepIndex?: number | undefined;

  /**
   * A unique identifier for an interactive session that's currently open and ready for work. The action will be performed on this session.
   *
   * @public
   */
  ClientSessionId?: string | undefined;

  /**
   * Represents the data being transformed during an action.
   *
   * @public
   */
  ViewFrame?: ViewFrame | undefined;
}

/**
 * @public
 */
export interface SendProjectSessionActionResponse {
  /**
   * A message indicating the result of performing the action.
   *
   * @public
   */
  Result?: string | undefined;

  /**
   * The name of the project that was affected by the action.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A unique identifier for the action that was performed.
   *
   * @public
   */
  ActionId?: number | undefined;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * The name of the job to be run.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * A system-generated identifier for this particular job run.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StartProjectSessionRequest {
  /**
   * The name of the project to act upon.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A value that, if true, enables you to take control of a session, even if a different client is currently accessing the project.
   *
   * @public
   */
  AssumeControl?: boolean | undefined;
}

/**
 * @public
 */
export interface StartProjectSessionResponse {
  /**
   * The name of the project to be acted upon.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A system-generated identifier for the session.
   *
   * @public
   */
  ClientSessionId?: string | undefined;
}

/**
 * @public
 */
export interface StopJobRunRequest {
  /**
   * The name of the job to be stopped.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The ID of the job run to be stopped.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopJobRunResponse {
  /**
   * The ID of the job run that you stopped.
   *
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The DataBrew resource to which tags should be added. The value for this parameter is an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or a recipe.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * One or more tags to be assigned to the resource.
   *
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
   * A DataBrew resource from which you want to remove a tag or tags. The value for this parameter is an Amazon Resource Name (ARN).
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The tag keys (names) of one or more tags to be removed.
   *
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
   * The name of the dataset to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The file format of a dataset that is created from an Amazon S3 file or folder.
   *
   * @public
   */
  Format?: InputFormat | undefined;

  /**
   * Represents a set of options that define the structure of either comma-separated value (CSV), Excel, or JSON input.
   *
   * @public
   */
  FormatOptions?: FormatOptions | undefined;

  /**
   * Represents information on how DataBrew can find data, in either the Glue Data Catalog or Amazon S3.
   *
   * @public
   */
  Input: Input | undefined;

  /**
   * A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.
   *
   * @public
   */
  PathOptions?: PathOptions | undefined;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * The name of the dataset that you updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileJobRequest {
  /**
   * Configuration for profile jobs. Used to select columns, do evaluations, and override default parameters of evaluations. When configuration is null, the profile job will run with default settings.
   *
   * @public
   */
  Configuration?: ProfileConfiguration | undefined;

  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - Server-side encryption with keys managed by KMS.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The name of the job to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of compute nodes that DataBrew can use when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read input data, or write output from a job.
   *
   * @public
   */
  OutputLocation: S3Location | undefined;

  /**
   * List of validation configurations that are applied to the profile job.
   *
   * @public
   */
  ValidationConfigurations?: ValidationConfiguration[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;

  /**
   * Sample configuration for Profile Jobs only. Determines the number of rows on which the Profile job will be executed. If a JobSample value is not provided for profile jobs, the default value will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the size parameter.
   *
   * @public
   */
  JobSample?: JobSample | undefined;
}

/**
 * @public
 */
export interface UpdateProfileJobResponse {
  /**
   * The name of the job that was updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * Represents the sample size and sampling type for DataBrew to use for interactive data analysis.
   *
   * @public
   */
  Sample?: Sample | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The name of the project to be updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * The date and time that the project was last modified.
   *
   * @public
   */
  LastModifiedDate?: Date | undefined;

  /**
   * The name of the project that you updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeRequest {
  /**
   * A description of the recipe.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the recipe to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * One or more steps to be performed by the recipe. Each step consists of an action, and the conditions under which the action should succeed.
   *
   * @public
   */
  Steps?: RecipeStep[] | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeResponse {
  /**
   * The name of the recipe that was updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeJobRequest {
  /**
   * The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * The encryption mode for the job, which can be one of the following:
   *
   * - `SSE-KMS` - Server-side encryption with keys managed by KMS.
   * - `SSE-S3` - Server-side encryption with keys managed by Amazon S3.
   *
   * @public
   */
  EncryptionMode?: EncryptionMode | undefined;

  /**
   * The name of the job to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Enables or disables Amazon CloudWatch logging for the job. If logging is enabled, CloudWatch writes one log stream for each job run.
   *
   * @public
   */
  LogSubscription?: LogSubscription | undefined;

  /**
   * The maximum number of nodes that DataBrew can consume when the job processes data.
   *
   * @public
   */
  MaxCapacity?: number | undefined;

  /**
   * The maximum number of times to retry the job after a job run fails.
   *
   * @public
   */
  MaxRetries?: number | undefined;

  /**
   * One or more artifacts that represent the output from running the job.
   *
   * @public
   */
  Outputs?: Output[] | undefined;

  /**
   * One or more artifacts that represent the Glue Data Catalog output from running the job.
   *
   * @public
   */
  DataCatalogOutputs?: DataCatalogOutput[] | undefined;

  /**
   * Represents a list of JDBC database output objects which defines the output destination for a DataBrew recipe job to write into.
   *
   * @public
   */
  DatabaseOutputs?: DatabaseOutput[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to be assumed when DataBrew runs the job.
   *
   * @public
   */
  RoleArn: string | undefined;

  /**
   * The job's timeout in minutes. A job that attempts to run longer than this timeout period ends with a status of `TIMEOUT`.
   *
   * @public
   */
  Timeout?: number | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeJobResponse {
  /**
   * The name of the job that you updated.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetRequest {
  /**
   * The name of the ruleset to be updated.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the ruleset.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of rules that are defined with the ruleset. A rule includes one or more checks to be validated on a DataBrew dataset.
   *
   * @public
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetResponse {
  /**
   * The name of the updated ruleset.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleRequest {
  /**
   * The name or names of one or more jobs to be run for this schedule.
   *
   * @public
   */
  JobNames?: string[] | undefined;

  /**
   * The date or dates and time or times when the jobs are to be run. For more information, see [Cron expressions](https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html) in the *Glue DataBrew Developer Guide*.
   *
   * @public
   */
  CronExpression: string | undefined;

  /**
   * The name of the schedule to update.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleResponse {
  /**
   * The name of the schedule that was updated.
   *
   * @public
   */
  Name: string | undefined;
}
