// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { DataBrewServiceException as __BaseException } from "./DataBrewServiceException";

/**
 * <p>Access to the specified resource was denied.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Configuration of statistics that are allowed to be run on columns that
 *             contain detected entities. When undefined, no statistics will be computed
 *             on columns that contain detected entities.</p>
 */
export interface AllowedStatistics {
  /**
   * <p>One or more column statistics to allow for columns that contain detected entities.</p>
   */
  Statistics: string[] | undefined;
}

export enum AnalyticsMode {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export interface BatchDeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe whose versions are to be deleted.</p>
   */
  Name: string | undefined;

  /**
   * <p>An array of version identifiers, for the recipe versions to be deleted. You can
   *             specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>.
   *                 <code>LATEST_PUBLISHED</code> is not supported.</p>
   */
  RecipeVersions: string[] | undefined;
}

/**
 * <p>Represents any errors encountered when attempting to delete multiple recipe
 *             versions.</p>
 */
export interface RecipeVersionErrorDetail {
  /**
   * <p>The HTTP status code for the error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The text of the error message.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The identifier for the recipe version associated with this error.</p>
   */
  RecipeVersion?: string;
}

export interface BatchDeleteRecipeVersionResponse {
  /**
   * <p>The name of the recipe that was modified.</p>
   */
  Name: string | undefined;

  /**
   * <p>Errors, if any, that occurred while attempting to delete the recipe versions.</p>
   */
  Errors?: RecipeVersionErrorDetail[];
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>One or more resources can't be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

/**
 * <p>The input parameters for this request failed validation.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
    this.Message = opts.Message;
  }
}

export enum InputFormat {
  CSV = "CSV",
  EXCEL = "EXCEL",
  JSON = "JSON",
  ORC = "ORC",
  PARQUET = "PARQUET",
}

/**
 * <p>Represents a set of options that define how DataBrew will read a
 *             comma-separated value (CSV) file when creating a dataset from that file.</p>
 */
export interface CsvOptions {
  /**
   * <p>A single character that specifies the delimiter being used in the CSV file.</p>
   */
  Delimiter?: string;

  /**
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   */
  HeaderRow?: boolean;
}

/**
 * <p>Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when
 *             creating a dataset from that file.</p>
 */
export interface ExcelOptions {
  /**
   * <p>One or more named sheets in the Excel file that will be included in the dataset.</p>
   */
  SheetNames?: string[];

  /**
   * <p>One or more sheet numbers in the Excel file that will be included in the
   *             dataset.</p>
   */
  SheetIndexes?: number[];

  /**
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   */
  HeaderRow?: boolean;
}

/**
 * <p>Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.</p>
 */
export interface JsonOptions {
  /**
   * <p>A value that specifies whether JSON input contains embedded new line
   *             characters.</p>
   */
  MultiLine?: boolean;
}

/**
 * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
 *             Excel, or JSON input.</p>
 */
export interface FormatOptions {
  /**
   * <p>Options that define how JSON input is to be interpreted by DataBrew.</p>
   */
  Json?: JsonOptions;

  /**
   * <p>Options that define how Excel input is to be interpreted by DataBrew.</p>
   */
  Excel?: ExcelOptions;

  /**
   * <p>Options that define how CSV input is to be interpreted by DataBrew.</p>
   */
  Csv?: CsvOptions;
}

/**
 * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
 *             input data, or write output from a job.</p>
 */
export interface S3Location {
  /**
   * <p>The Amazon S3 bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The unique name of the object in the bucket.</p>
   */
  Key?: string;

  /**
   * <p>The Amazon Web Services account ID of the bucket owner.</p>
   */
  BucketOwner?: string;
}

/**
 * <p>Connection information for dataset input files stored in a database.</p>
 */
export interface DatabaseInputDefinition {
  /**
   * <p>The Glue Connection that stores the connection information for the target
   *             database.</p>
   */
  GlueConnectionName: string | undefined;

  /**
   * <p>The table within the target database.</p>
   */
  DatabaseTableName?: string;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  TempDirectory?: S3Location;

  /**
   * <p>Custom SQL to run against the provided Glue connection. This SQL will be used as
   *             the input for DataBrew projects and jobs.</p>
   */
  QueryString?: string;
}

/**
 * <p>Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew
 *             dataset. </p>
 */
export interface DataCatalogInputDefinition {
  /**
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the
   *             data.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of a database in the Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of a database table in the Data Catalog. This table corresponds to a DataBrew
   *             dataset.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Represents an Amazon location where DataBrew can store intermediate results.</p>
   */
  TempDirectory?: S3Location;
}

/**
 * <p>Contains additional resource information needed for specific datasets.</p>
 */
export interface Metadata {
  /**
   * <p>The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew
   *             only supports ARNs from Amazon AppFlow.</p>
   */
  SourceArn?: string;
}

/**
 * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
 *             Amazon S3.</p>
 */
export interface Input {
  /**
   * <p>The Amazon S3 location where the data is stored.</p>
   */
  S3InputDefinition?: S3Location;

  /**
   * <p>The Glue Data Catalog parameters for the data.</p>
   */
  DataCatalogInputDefinition?: DataCatalogInputDefinition;

  /**
   * <p>Connection information for dataset input files stored in a database.</p>
   */
  DatabaseInputDefinition?: DatabaseInputDefinition;

  /**
   * <p>Contains additional resource information needed for specific datasets.</p>
   */
  Metadata?: Metadata;
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum OrderedBy {
  LAST_MODIFIED_DATE = "LAST_MODIFIED_DATE",
}

/**
 * <p>Represents a limit imposed on number of Amazon S3 files that should be selected for a
 *             dataset from a connected Amazon S3 path.</p>
 */
export interface FilesLimit {
  /**
   * <p>The number of Amazon S3 files to select.</p>
   */
  MaxFiles: number | undefined;

  /**
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as
   *             a sorting criteria. Currently it's the only allowed value.</p>
   */
  OrderedBy?: OrderedBy | string;

  /**
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By
   *             default uses DESCENDING order, i.e. most recent files are selected first. Another
   *             possible value is ASCENDING.</p>
   */
  Order?: Order | string;
}

/**
 * <p>Represents a structure for defining parameter conditions. Supported conditions are described
 *             here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported
 *                 conditions for dynamic datasets</a> in the
 *             <i>Glue DataBrew Developer Guide</i>.</p>
 */
export interface FilterExpression {
  /**
   * <p>The expression which includes condition names followed by substitution variables, possibly grouped
   *             and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and
   *             (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.</p>
   */
  Expression: string | undefined;

  /**
   * <p>The map of substitution variable names to their values used in this filter expression.</p>
   */
  ValuesMap: Record<string, string> | undefined;
}

/**
 * <p>Represents additional options for correct interpretation of datetime parameters used in
 *             the Amazon S3 path of a dataset.</p>
 */
export interface DatetimeOptions {
  /**
   * <p>Required option, that defines the datetime format used for a date parameter in the
   *             Amazon S3 path. Should use only supported datetime specifiers and separation characters, all
   *             literal a-z or A-Z characters should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".</p>
   */
  Format: string | undefined;

  /**
   * <p>Optional value for a timezone offset of the datetime parameter value in the Amazon S3
   *             path. Shouldn't be used if Format for this parameter includes timezone fields.
   *             If no offset specified, UTC is assumed.</p>
   */
  TimezoneOffset?: string;

  /**
   * <p>Optional value for a non-US locale code, needed for correct interpretation of some date formats.</p>
   */
  LocaleCode?: string;
}

export enum ParameterType {
  Datetime = "Datetime",
  Number = "Number",
  String = "String",
}

/**
 * <p>Represents a dataset parameter that defines type and conditions for a parameter in the
 *                 Amazon S3 path of the dataset.</p>
 */
export interface DatasetParameter {
  /**
   * <p>The name of the parameter that is used in the dataset's Amazon S3 path.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.</p>
   */
  Type: ParameterType | string | undefined;

  /**
   * <p>Additional parameter options such as a format and a timezone. Required for datetime parameters.</p>
   */
  DatetimeOptions?: DatetimeOptions;

  /**
   * <p>Optional boolean value that defines whether the captured value of this parameter
   *             should be used to create a new column in a dataset.</p>
   */
  CreateColumn?: boolean;

  /**
   * <p>The optional filter expression structure to apply additional matching criteria to the parameter.</p>
   */
  Filter?: FilterExpression;
}

/**
 * <p>Represents a set of options that define how DataBrew selects files for a given Amazon S3
 *             path in a dataset.</p>
 */
export interface PathOptions {
  /**
   * <p>If provided, this structure defines a date range for matching Amazon S3 objects based on their
   *             LastModifiedDate attribute in Amazon S3.</p>
   */
  LastModifiedDateCondition?: FilterExpression;

  /**
   * <p>If provided, this structure imposes a limit on a number of files that should be selected.</p>
   */
  FilesLimit?: FilesLimit;

  /**
   * <p>A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.</p>
   */
  Parameters?: Record<string, DatasetParameter>;
}

export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z,
   *             0-9), hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat | string;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * <p>Metadata tags to apply to this dataset.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset that you created.</p>
   */
  Name: string | undefined;
}

/**
 * <p>A service quota is exceeded.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Selector of a column from a dataset for profile job configuration.
 *             One selector includes either a column name or a regular expression.</p>
 */
export interface ColumnSelector {
  /**
   * <p>A regular expression for selecting a column from a dataset.</p>
   */
  Regex?: string;

  /**
   * <p>The name of a column from a dataset.</p>
   */
  Name?: string;
}

/**
 * <p>Override of a particular evaluation for a profile job. </p>
 */
export interface StatisticOverride {
  /**
   * <p>The name of an evaluation</p>
   */
  Statistic: string | undefined;

  /**
   * <p>A map that includes overrides of an evaluation’s parameters.</p>
   */
  Parameters: Record<string, string> | undefined;
}

/**
 * <p>Configuration of evaluations for a profile job. This configuration can be used to select
 *             evaluations and override the parameters of selected evaluations.
 *         </p>
 */
export interface StatisticsConfiguration {
  /**
   * <p>List of included evaluations. When the list is undefined, all supported
   *             evaluations will be included.</p>
   */
  IncludedStatistics?: string[];

  /**
   * <p>List of overrides for evaluations.</p>
   */
  Overrides?: StatisticOverride[];
}

/**
 * <p>Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select
 *             evaluations and override parameters of evaluations for particular columns.
 *         </p>
 */
export interface ColumnStatisticsConfiguration {
  /**
   * <p>List of column selectors. Selectors can be used to select columns from the dataset.
   *             When selectors are undefined, configuration will be applied to all supported columns.
   *         </p>
   */
  Selectors?: ColumnSelector[];

  /**
   * <p>Configuration for evaluations. Statistics can be used to select evaluations and override
   *             parameters of evaluations.
   *         </p>
   */
  Statistics: StatisticsConfiguration | undefined;
}

/**
 * <p>Configuration of entity detection for a profile job. When undefined, entity
 *             detection is disabled.</p>
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
   */
  EntityTypes: string[] | undefined;

  /**
   * <p>Configuration of statistics that are allowed to be run on columns that
   *             contain detected entities. When undefined, no statistics will be computed
   *             on columns that contain detected entities.</p>
   */
  AllowedStatistics?: AllowedStatistics[];
}

/**
 * <p>Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default
 *             parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all
 *             supported columns.
 *         </p>
 */
export interface ProfileConfiguration {
  /**
   * <p>Configuration for inter-column evaluations. Configuration can be used to select evaluations and override
   *             parameters of evaluations. When configuration is undefined, the profile job will run all supported
   *             inter-column evaluations.
   *         </p>
   */
  DatasetStatisticsConfiguration?: StatisticsConfiguration;

  /**
   * <p>List of column selectors. ProfileColumns can be used to select columns from the dataset. When
   *             ProfileColumns is undefined, the profile job will profile all supported columns.
   *         </p>
   */
  ProfileColumns?: ColumnSelector[];

  /**
   * <p>List of configurations for column evaluations. ColumnStatisticsConfigurations are used to
   *             select evaluations and override parameters of evaluations for particular columns. When
   *             ColumnStatisticsConfigurations is undefined,  the profile job will profile all supported columns
   *             and run all supported  evaluations.
   *         </p>
   */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[];

  /**
   * <p>Configuration of entity detection for a profile job. When undefined, entity detection is disabled.</p>
   */
  EntityDetectorConfiguration?: EntityDetectorConfiguration;
}

export enum EncryptionMode {
  SSEKMS = "SSE-KMS",
  SSES3 = "SSE-S3",
}

export enum SampleMode {
  CUSTOM_ROWS = "CUSTOM_ROWS",
  FULL_DATASET = "FULL_DATASET",
}

/**
 * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
 *             profile job is run. If a <code>JobSample</code> value isn't provided, the
 *             default is used. The default value is CUSTOM_ROWS for the mode parameter and
 *             20,000 for the size parameter.</p>
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
   */
  Mode?: SampleMode | string;

  /**
   * <p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The
   *             profile job is run on the specified number of rows. The maximum value for size is
   *             Long.MAX_VALUE.</p>
   *          <p>Long.MAX_VALUE = 9223372036854775807</p>
   */
  Size?: number;
}

export enum LogSubscription {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
}

export enum ValidationMode {
  CHECK_ALL = "CHECK_ALL",
}

/**
 * <p>Configuration for data quality validation. Used to select the Rulesets and Validation Mode
 *             to be used in the profile job. When ValidationConfiguration is null, the profile
 *             job will run without data quality validation.</p>
 */
export interface ValidationConfiguration {
  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job.
   *             The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of
   *             the dataset that is associated with the profile job.</p>
   */
  RulesetArn: string | undefined;

  /**
   * <p>Mode of data quality validation. Default mode is “CHECK_ALL” which verifies all rules
   *             defined in the selected ruleset.</p>
   */
  ValidationMode?: ValidationMode | string;
}

export interface CreateProfileJobRequest {
  /**
   * <p>The name of the dataset that this job is to act upon.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that DataBrew can use when the job processes data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  Configuration?: ProfileConfiguration;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;
}

export interface CreateProfileJobResponse {
  /**
   * <p>The name of the job that was created.</p>
   */
  Name: string | undefined;
}

export enum SampleType {
  FIRST_N = "FIRST_N",
  LAST_N = "LAST_N",
  RANDOM = "RANDOM",
}

/**
 * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
 *             analysis.</p>
 */
export interface Sample {
  /**
   * <p>The number of rows in the sample.</p>
   */
  Size?: number;

  /**
   * <p>The way in which DataBrew obtains rows from a dataset.</p>
   */
  Type: SampleType | string | undefined;
}

export interface CreateProjectRequest {
  /**
   * <p>The name of an existing dataset to associate this project with.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of an existing recipe to associate with the project.</p>
   */
  RecipeName: string | undefined;

  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this project.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateProjectResponse {
  /**
   * <p>The name of the project that you created.</p>
   */
  Name: string | undefined;
}

/**
 * <p>An internal service failure occurred.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Represents a transformation and associated parameters that are used to apply a change
 *             to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe
 *                 actions reference</a>.</p>
 */
export interface RecipeAction {
  /**
   * <p>The name of a valid DataBrew transformation to be performed on the data.</p>
   */
  Operation: string | undefined;

  /**
   * <p>Contextual parameters for the transformation.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *          <p>Conditions are used with recipe actions. The action is only performed for column values where the
 *             condition evaluates to true.</p>
 *          <p>If a recipe requires more than one condition, then the recipe must specify multiple
 *             <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before
 *             the recipe action is performed.</p>
 */
export interface ConditionExpression {
  /**
   * <p>A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure">Recipe
   *             structure</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  Condition: string | undefined;

  /**
   * <p>A value that the condition must evaluate to for the condition to succeed.</p>
   */
  Value?: string;

  /**
   * <p>A column to apply this condition to.</p>
   */
  TargetColumn: string | undefined;
}

/**
 * <p>Represents a single step from a DataBrew recipe to be performed.</p>
 */
export interface RecipeStep {
  /**
   * <p>The particular action to be performed in the recipe step.</p>
   */
  Action: RecipeAction | undefined;

  /**
   * <p>One or more conditions that must be met for the recipe step to succeed.</p>
   *          <note>
   *             <p>All of the conditions in the array must be met. In other words, all of the
   *                 conditions must be combined using a logical AND operation.</p>
   *          </note>
   */
  ConditionExpressions?: ConditionExpression[];
}

export interface CreateRecipeRequest {
  /**
   * <p>A description for the recipe.</p>
   */
  Description?: string;

  /**
   * <p>A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>An array containing the steps to be performed by the recipe. Each recipe step consists
   *             of one recipe action and (optionally) an array of condition expressions.</p>
   */
  Steps: RecipeStep[] | undefined;

  /**
   * <p>Metadata tags to apply to this recipe.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateRecipeResponse {
  /**
   * <p>The name of the recipe that you created.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Represents options that specify how and where DataBrew writes the database
 *             output generated by recipe jobs.</p>
 */
export interface DatabaseTableOutputOptions {
  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can store
   *             intermediate results.</p>
   */
  TempDirectory?: S3Location;

  /**
   * <p>A prefix for the name of a table DataBrew will create in the database.</p>
   */
  TableName: string | undefined;
}

export enum DatabaseOutputMode {
  NEW_TABLE = "NEW_TABLE",
}

/**
 * <p>Represents a JDBC database output object which defines the output destination for
 *             a DataBrew recipe job to write into.</p>
 */
export interface DatabaseOutput {
  /**
   * <p>The Glue connection that stores the connection information for the
   *             target database.</p>
   */
  GlueConnectionName: string | undefined;

  /**
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   */
  DatabaseOptions: DatabaseTableOutputOptions | undefined;

  /**
   * <p>The output mode to write into the database. Currently supported option: NEW_TABLE.</p>
   */
  DatabaseOutputMode?: DatabaseOutputMode | string;
}

/**
 * <p>Represents options that specify how and where DataBrew writes the Amazon S3 output
 *             generated by recipe jobs.</p>
 */
export interface S3TableOutputOptions {
  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output
   *             from a job.</p>
   */
  Location: S3Location | undefined;
}

/**
 * <p>Represents options that specify how and where in the Glue Data Catalog DataBrew
 *             writes the output generated by recipe jobs.</p>
 */
export interface DataCatalogOutput {
  /**
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that
   *             stores the data.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of a database in the Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of a table in the Data Catalog.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Represents options that specify how and where DataBrew writes the Amazon S3
   *             output generated by recipe jobs.</p>
   */
  S3Options?: S3TableOutputOptions;

  /**
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   */
  DatabaseOptions?: DatabaseTableOutputOptions;

  /**
   * <p>A value that, if true, means that any data in the location specified for output
   *             is overwritten with new output. Not supported with DatabaseOptions.</p>
   */
  Overwrite?: boolean;
}

export enum CompressionFormat {
  BROTLI = "BROTLI",
  BZIP2 = "BZIP2",
  DEFLATE = "DEFLATE",
  GZIP = "GZIP",
  LZ4 = "LZ4",
  LZO = "LZO",
  SNAPPY = "SNAPPY",
  ZLIB = "ZLIB",
  ZSTD = "ZSTD",
}

export enum OutputFormat {
  AVRO = "AVRO",
  CSV = "CSV",
  GLUEPARQUET = "GLUEPARQUET",
  JSON = "JSON",
  ORC = "ORC",
  PARQUET = "PARQUET",
  TABLEAUHYPER = "TABLEAUHYPER",
  XML = "XML",
}

/**
 * <p>Represents a set of options that define how DataBrew will write a
 *             comma-separated value (CSV) file.</p>
 */
export interface CsvOutputOptions {
  /**
   * <p>A single character that specifies the delimiter used to create CSV job output.</p>
   */
  Delimiter?: string;
}

/**
 * <p>Represents a set of options that define the structure of comma-separated (CSV) job output.</p>
 */
export interface OutputFormatOptions {
  /**
   * <p>Represents a set of options that define the structure of comma-separated value (CSV)
   *             job output.</p>
   */
  Csv?: CsvOutputOptions;
}

/**
 * <p>Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by
 *             recipe jobs or profile jobs.</p>
 */
export interface Output {
  /**
   * <p>The compression algorithm used to compress the output text of the job.</p>
   */
  CompressionFormat?: CompressionFormat | string;

  /**
   * <p>The data format of the output of the job.</p>
   */
  Format?: OutputFormat | string;

  /**
   * <p>The names of one or more partition columns for the output of the job.</p>
   */
  PartitionColumns?: string[];

  /**
   * <p>The location in Amazon S3 where the job writes its output.</p>
   */
  Location: S3Location | undefined;

  /**
   * <p>A value that, if true, means that any data in the location specified for output is
   *             overwritten with new output.</p>
   */
  Overwrite?: boolean;

  /**
   * <p>Represents options that define how DataBrew formats job output files.</p>
   */
  FormatOptions?: OutputFormatOptions;

  /**
   * <p>Maximum number of files to be generated by the job and written to the output folder. For output partitioned
   *             by column(s), the MaxOutputFiles value is the maximum number of files per partition.</p>
   */
  MaxOutputFiles?: number;
}

/**
 * <p>Represents the name and version of a DataBrew recipe.</p>
 */
export interface RecipeReference {
  /**
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>The identifier for the version for the recipe. </p>
   */
  RecipeVersion?: string;
}

export interface CreateRecipeJobRequest {
  /**
   * <p>The name of the dataset that this job processes.</p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen
   *             (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>One or more artifacts that represent the output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output destination for
   *             a DataBrew recipe job to write to. </p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>Either the name of an existing project, or a combination of a recipe and a dataset to
   *             associate with the recipe.</p>
   */
  ProjectName?: string;

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export interface CreateRecipeJobResponse {
  /**
   * <p>The name of the job that you created.</p>
   */
  Name: string | undefined;
}

export enum ThresholdType {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
}

export enum ThresholdUnit {
  COUNT = "COUNT",
  PERCENTAGE = "PERCENTAGE",
}

/**
 * <p>The threshold used with a non-aggregate check expression. The non-aggregate check expression
 *             will be applied to each row in a specific column. Then the threshold will be used to determine
 *             whether the validation succeeds.</p>
 */
export interface Threshold {
  /**
   * <p>The value of a threshold.</p>
   */
  Value: number | undefined;

  /**
   * <p>The type of a threshold. Used for comparison of an actual count of rows that satisfy the
   *             rule to the threshold value.</p>
   */
  Type?: ThresholdType | string;

  /**
   * <p>Unit of threshold value. Can be either a COUNT or PERCENTAGE of the full sample size
   *             used for validation.</p>
   */
  Unit?: ThresholdUnit | string;
}

/**
 * <p>Represents a single data quality requirement that should be validated in the
 *             scope of this dataset.</p>
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>A value that specifies whether the rule is disabled. Once a rule is
   *             disabled, a profile job will not validate it during a job run. Default
   *             value is false.</p>
   */
  Disabled?: boolean;

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
   */
  CheckExpression: string | undefined;

  /**
   * <p>The map of substitution variable names to their values used in a check
   *             expression. Variable names should start with a ':' (colon).  Variable values can either
   *             be actual values or column names. To differentiate between the two, column names
   *             should be enclosed in backticks, for example, <code>":col1": "`Column A`".</code>
   *          </p>
   */
  SubstitutionMap?: Record<string, string>;

  /**
   * <p>The threshold used with a non-aggregate check expression. Non-aggregate check expressions
   *             will be applied to each row in a specific column, and the threshold will be used to determine
   *             whether the validation succeeds.</p>
   */
  Threshold?: Threshold;

  /**
   * <p>List of column selectors. Selectors can be used to select columns using a name or regular
   *             expression from the dataset. Rule will be applied to selected columns.</p>
   */
  ColumnSelectors?: ColumnSelector[];
}

export interface CreateRulesetRequest {
  /**
   * <p>The name of the ruleset to be created. Valid characters are alphanumeric
   *             (A-Z, a-z, 0-9), hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the
   *             ruleset is associated with.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes
   *             one or more checks to be validated on a DataBrew dataset.</p>
   */
  Rules: Rule[] | undefined;

  /**
   * <p>Metadata tags to apply to the ruleset.</p>
   */
  Tags?: Record<string, string>;
}

export interface CreateRulesetResponse {
  /**
   * <p>The unique name of the created ruleset.</p>
   */
  Name: string | undefined;
}

export interface CreateScheduleRequest {
  /**
   * <p>The name or names of one or more jobs to be run.</p>
   */
  JobNames?: string[];

  /**
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression: string | undefined;

  /**
   * <p>Metadata tags to apply to this schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;
}

export interface CreateScheduleResponse {
  /**
   * <p>The name of the schedule that was created.</p>
   */
  Name: string | undefined;
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteDatasetResponse {
  /**
   * <p>The name of the dataset that you deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteJobRequest {
  /**
   * <p>The name of the job to be deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteJobResponse {
  /**
   * <p>The name of the job that you deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteProjectRequest {
  /**
   * <p>The name of the project to be deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteProjectResponse {
  /**
   * <p>The name of the project that you deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the recipe to be deleted. You can specify a numeric versions
   *                 (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is
   *             not supported.</p>
   */
  RecipeVersion: string | undefined;
}

export interface DeleteRecipeVersionResponse {
  /**
   * <p>The name of the recipe that was deleted.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the recipe that was deleted.</p>
   */
  RecipeVersion: string | undefined;
}

export interface DeleteRulesetRequest {
  /**
   * <p>The name of the ruleset to be deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteRulesetResponse {
  /**
   * <p>The name of the deleted ruleset.</p>
   */
  Name: string | undefined;
}

export interface DeleteScheduleRequest {
  /**
   * <p>The name of the schedule to be deleted.</p>
   */
  Name: string | undefined;
}

export interface DeleteScheduleResponse {
  /**
   * <p>The name of the schedule that was deleted.</p>
   */
  Name: string | undefined;
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described.</p>
   */
  Name: string | undefined;
}

export enum Source {
  DATABASE = "DATABASE",
  DATACATALOG = "DATA-CATALOG",
  S3 = "S3",
}

export interface DescribeDatasetResponse {
  /**
   * <p>The identifier (user name) of the user who created the dataset.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the dataset was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The name of the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file
   *             or folder.</p>
   */
  Format?: InputFormat | string;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>The date and time that the dataset was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The identifier (user name) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The location of the data for this dataset, Amazon S3 or the
   *             Glue Data Catalog.</p>
   */
  Source?: Source | string;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * <p>Metadata tags associated with this dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  ResourceArn?: string;
}

export interface DescribeJobRequest {
  /**
   * <p>The name of the job to be described.</p>
   */
  Name: string | undefined;
}

export enum JobType {
  PROFILE = "PROFILE",
  RECIPE = "RECIPE",
}

export interface DescribeJobResponse {
  /**
   * <p>The date and time that the job was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier (user name) of the user associated with the creation of the job.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The dataset that the job acts upon.</p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The name of the job.</p>
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
   */
  Type?: JobType | string;

  /**
   * <p>The identifier (user name) of the user who last modified the job.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time that the job was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>Indicates whether Amazon CloudWatch logging is enabled for this job.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of compute nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>One or more artifacts that represent the output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>The DataBrew project associated with this job.</p>
   */
  ProjectName?: string;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  ProfileConfiguration?: ProfileConfiguration;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   */
  RoleArn?: string;

  /**
   * <p>Metadata tags associated with this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed.</p>
   */
  JobSample?: JobSample;
}

export interface DescribeJobRunRequest {
  /**
   * <p>The name of the job being processed during this run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the job run.</p>
   */
  RunId: string | undefined;
}

export enum JobRunState {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT",
}

export interface DescribeJobRunResponse {
  /**
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   */
  Attempt?: number;

  /**
   * <p>The date and time when the job completed processing.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The name of the dataset for the job to process.</p>
   */
  DatasetName?: string;

  /**
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The amount of time, in seconds, during which the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The name of the job being processed during this run.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  ProfileConfiguration?: ProfileConfiguration;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * <p>The unique identifier of the job run.</p>
   */
  RunId?: string;

  /**
   * <p>The current state of the job run entity itself.</p>
   */
  State?: JobRunState | string;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   */
  LogGroupName?: string;

  /**
   * <p>One or more output artifacts from a job run.</p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who started the job run.</p>
   */
  StartedBy?: string;

  /**
   * <p>The date and time when the job run began.</p>
   */
  StartedOn?: Date;

  /**
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;
}

export interface DescribeProjectRequest {
  /**
   * <p>The name of the project to be described.</p>
   */
  Name: string | undefined;
}

export enum SessionStatus {
  ASSIGNED = "ASSIGNED",
  FAILED = "FAILED",
  INITIALIZING = "INITIALIZING",
  PROVISIONING = "PROVISIONING",
  READY = "READY",
  RECYCLING = "RECYCLING",
  ROTATING = "ROTATING",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
  UPDATING = "UPDATING",
}

export interface DescribeProjectResponse {
  /**
   * <p>The date and time that the project was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier (user name) of the user who created the project.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The dataset associated with the project.</p>
   */
  DatasetName?: string;

  /**
   * <p>The date and time that the project was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The identifier (user name) of the user who last modified the project.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The name of the project.</p>
   */
  Name: string | undefined;

  /**
   * <p>The recipe associated with this job.</p>
   */
  RecipeName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   */
  RoleArn?: string;

  /**
   * <p>Metadata tags associated with this project.</p>
   */
  Tags?: Record<string, string>;

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
   */
  SessionStatus?: SessionStatus | string;

  /**
   * <p>The identifier (user name) of the user that opened the project for use. </p>
   */
  OpenedBy?: string;

  /**
   * <p>The date and time when the project was opened. </p>
   */
  OpenDate?: Date;
}

export interface DescribeRecipeRequest {
  /**
   * <p>The name of the recipe to be described.</p>
   */
  Name: string | undefined;

  /**
   * <p>The recipe version identifier. If this parameter isn't specified, then the latest
   *             published version is returned.</p>
   */
  RecipeVersion?: string;
}

export interface DescribeRecipeResponse {
  /**
   * <p>The identifier (user name) of the user who created the recipe.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the recipe was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier (user name) of the user who last modified the recipe.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time that the recipe was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the project associated with this recipe.</p>
   */
  ProjectName?: string;

  /**
   * <p>The identifier (user name) of the user who last published the recipe.</p>
   */
  PublishedBy?: string;

  /**
   * <p>The date and time when the recipe was last published.</p>
   */
  PublishedDate?: Date;

  /**
   * <p>The description of the recipe.</p>
   */
  Description?: string;

  /**
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   */
  Steps?: RecipeStep[];

  /**
   * <p>Metadata tags associated with this project.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The ARN of the recipe.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The recipe version identifier.</p>
   */
  RecipeVersion?: string;
}

export interface DescribeRulesetRequest {
  /**
   * <p>The name of the ruleset to be described.</p>
   */
  Name: string | undefined;
}

export interface DescribeRulesetResponse {
  /**
   * <p>The name of the ruleset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   */
  TargetArn?: string;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes one
   *             or more checks to be validated on a DataBrew dataset.</p>
   */
  Rules?: Rule[];

  /**
   * <p>The date and time that the ruleset was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The modification date and time of the ruleset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   */
  ResourceArn?: string;

  /**
   * <p>Metadata tags that have been applied to the ruleset.</p>
   */
  Tags?: Record<string, string>;
}

export interface DescribeScheduleRequest {
  /**
   * <p>The name of the schedule to be described.</p>
   */
  Name: string | undefined;
}

export interface DescribeScheduleResponse {
  /**
   * <p>The date and time that the schedule was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier (user name) of the user who created the schedule. </p>
   */
  CreatedBy?: string;

  /**
   * <p>The name or names of one or more jobs to be run by using the schedule.</p>
   */
  JobNames?: string[];

  /**
   * <p>The identifier (user name) of the user who last modified the schedule.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time that the schedule was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The date or dates and time or times when the jobs are to be run for the schedule. For
   *             more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the
   *             <i>Glue DataBrew Developer Guide</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>Metadata tags associated with this schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

export interface ListDatasetsRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents a dataset that can be processed by DataBrew.</p>
 */
export interface Dataset {
  /**
   * <p>The ID of the Amazon Web Services account that owns the dataset.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the dataset.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the dataset was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The unique name of the dataset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat | string;

  /**
   * <p>A set of options that define how DataBrew interprets the data in the dataset.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Information on how DataBrew can find the dataset, in either the Glue Data Catalog
   *             or Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>The last modification date and time of the dataset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog.</p>
   */
  Source?: Source | string;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * <p>Metadata tags that have been applied to the dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The unique Amazon Resource Name (ARN) for the dataset.</p>
   */
  ResourceArn?: string;
}

export interface ListDatasetsResponse {
  /**
   * <p>A list of datasets that are defined.</p>
   */
  Datasets: Dataset[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListJobRunsRequest {
  /**
   * <p>The name of the job.</p>
   */
  Name: string | undefined;

  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents one run of a DataBrew job.</p>
 */
export interface JobRun {
  /**
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   */
  Attempt?: number;

  /**
   * <p>The date and time when the job completed processing.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The name of the dataset for the job to process.</p>
   */
  DatasetName?: string;

  /**
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The amount of time, in seconds, during which a job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The name of the job being processed during this run.</p>
   */
  JobName?: string;

  /**
   * <p>The unique identifier of the job run.</p>
   */
  RunId?: string;

  /**
   * <p>The current state of the job run entity itself.</p>
   */
  State?: JobRunState | string;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   */
  LogGroupName?: string;

  /**
   * <p>One or more output artifacts from a job run.</p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>The set of steps processed by the job.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who initiated the job run. </p>
   */
  StartedBy?: string;

  /**
   * <p>The date and time when the job run began. </p>
   */
  StartedOn?: Date;

  /**
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;

  /**
   * <p>List of validation configurations that are applied to the profile job run.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];
}

export interface ListJobRunsResponse {
  /**
   * <p>A list of job runs that have occurred for the specified job.</p>
   */
  JobRuns: JobRun[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListJobsRequest {
  /**
   * <p>The name of a dataset. Using this parameter indicates to return only those jobs that
   *             act on the specified dataset.</p>
   */
  DatasetName?: string;

  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;

  /**
   * <p>The name of a project. Using this parameter indicates to return only those jobs that
   *             are associated with the specified project.</p>
   */
  ProjectName?: string;
}

/**
 * <p>Represents all of the attributes of a DataBrew job.</p>
 */
export interface Job {
  /**
   * <p>The ID of the Amazon Web Services account that owns the job.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the job.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the job was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A dataset that the job is to process.</p>
   */
  DatasetName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job
   *             output. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html">Encrypting data
   *                 written by DataBrew jobs</a>
   *          </p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The unique name of the job.</p>
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
   */
  Type?: JobType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the job.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The modification date and time of the job.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The current status of Amazon CloudWatch logging for the job.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that can be consumed when the job processes data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>One or more artifacts that represent output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>The name of the project that the job is associated with.</p>
   */
  ProjectName?: string;

  /**
   * <p>A set of steps that the job runs.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The unique Amazon Resource Name (ARN) for the job.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role to be assumed for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * <p>Metadata tags that have been applied to the job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default value
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];
}

export interface ListJobsResponse {
  /**
   * <p>A list of jobs that are defined.</p>
   */
  Jobs: Job[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListProjectsRequest {
  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;
}

/**
 * <p>Represents all of the attributes of a DataBrew project.</p>
 */
export interface Project {
  /**
   * <p>The ID of the Amazon Web Services account that owns the project.</p>
   */
  AccountId?: string;

  /**
   * <p>The date and time that the project was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who crated the project.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The dataset that the project is to act upon.</p>
   */
  DatasetName?: string;

  /**
   * <p>The last modification date and time for the project.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the project.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The unique name of a project.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of a recipe that will be developed during a project session.</p>
   */
  RecipeName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The sample size and sampling type to apply to the data. If this parameter isn't
   *             specified, then the sample consists of the first 500 rows from the dataset.</p>
   */
  Sample?: Sample;

  /**
   * <p>Metadata tags that have been applied to the project.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this
   *             project.</p>
   */
  RoleArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user that opened the project for use.</p>
   */
  OpenedBy?: string;

  /**
   * <p>The date and time when the project was opened.</p>
   */
  OpenDate?: Date;
}

export interface ListProjectsResponse {
  /**
   * <p>A list of projects that are defined .</p>
   */
  Projects: Project[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListRecipesRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Return only those recipes with a version identifier of <code>LATEST_WORKING</code> or
   *                 <code>LATEST_PUBLISHED</code>. If <code>RecipeVersion</code> is omitted,
   *                 <code>ListRecipes</code> returns all of the <code>LATEST_PUBLISHED</code> recipe
   *             versions.</p>
   *          <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code>
   *          </p>
   */
  RecipeVersion?: string;
}

/**
 * <p>Represents one or more actions to be performed on a DataBrew dataset.</p>
 */
export interface Recipe {
  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the recipe.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the recipe was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the recipe.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The last modification date and time of the recipe.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the project that the recipe is associated with.</p>
   */
  ProjectName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who published the recipe.</p>
   */
  PublishedBy?: string;

  /**
   * <p>The date and time when the recipe was published.</p>
   */
  PublishedDate?: Date;

  /**
   * <p>The description of the recipe.</p>
   */
  Description?: string;

  /**
   * <p>The unique name for the recipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the recipe.</p>
   */
  ResourceArn?: string;

  /**
   * <p>A list of steps that are defined by the recipe.</p>
   */
  Steps?: RecipeStep[];

  /**
   * <p>Metadata tags that have been applied to the recipe.</p>
   */
  Tags?: Record<string, string>;

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
   */
  RecipeVersion?: string;
}

export interface ListRecipesResponse {
  /**
   * <p>A list of recipes that are defined.</p>
   */
  Recipes: Recipe[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListRecipeVersionsRequest {
  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the recipe for which to return version information.</p>
   */
  Name: string | undefined;
}

export interface ListRecipeVersionsResponse {
  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of versions for the specified recipe.</p>
   */
  Recipes: Recipe[] | undefined;
}

export interface ListRulesetsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter
   *             indicates to return only those rulesets that are associated with the specified resource.</p>
   */
  TargetArn?: string;

  /**
   * <p>The maximum number of results to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination
   *             if a previous request was truncated. To get the next set of pages, pass in
   *             the NextToken value from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * <p>Contains metadata about the ruleset.</p>
 */
export interface RulesetItem {
  /**
   * <p>The ID of the Amazon Web Services account that owns the ruleset.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the ruleset was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The modification date and time of the ruleset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the ruleset.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The number of rules that are defined in the ruleset.</p>
   */
  RuleCount?: number;

  /**
   * <p>Metadata tags that have been applied to the ruleset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   */
  TargetArn: string | undefined;
}

export interface ListRulesetsResponse {
  /**
   * <p>A list of RulesetItem. RulesetItem contains meta data of a ruleset.</p>
   */
  Rulesets: RulesetItem[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListSchedulesRequest {
  /**
   * <p>The name of the job that these schedules apply to.</p>
   */
  JobName?: string;

  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents one or more dates and times when a job is to run.</p>
 */
export interface Schedule {
  /**
   * <p>The ID of the Amazon Web Services account that owns the schedule.</p>
   */
  AccountId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the user who created the schedule.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the schedule was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>A list of jobs to be run, according to the schedule.</p>
   */
  JobNames?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the user who last modified the schedule.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The date and time when the schedule was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The dates and times when the job is to run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *             expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression?: string;

  /**
   * <p>Metadata tags that have been applied to the schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

export interface ListSchedulesResponse {
  /**
   * <p>A list of schedules that are defined.</p>
   */
  Schedules: Schedule[] | undefined;

  /**
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
   *         </p>
   */
  ResourceArn: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the DataBrew resource.</p>
   */
  Tags?: Record<string, string>;
}

export interface PublishRecipeRequest {
  /**
   * <p>A description of the recipe to be published, for this version of the recipe.</p>
   */
  Description?: string;

  /**
   * <p>The name of the recipe to be published.</p>
   */
  Name: string | undefined;
}

export interface PublishRecipeResponse {
  /**
   * <p>The name of the recipe that you published.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Represents the data being transformed during an action.</p>
 */
export interface ViewFrame {
  /**
   * <p>The starting index for the range of columns to return in the view frame.</p>
   */
  StartColumnIndex: number | undefined;

  /**
   * <p>The number of columns to include in the view frame, beginning with the
   *                 <code>StartColumnIndex</code> value and ignoring any columns in the
   *                 <code>HiddenColumns</code> list.</p>
   */
  ColumnRange?: number;

  /**
   * <p>A list of columns to hide in the view frame.</p>
   */
  HiddenColumns?: string[];

  /**
   * <p>The starting index for the range of rows to return in the view frame.</p>
   */
  StartRowIndex?: number;

  /**
   * <p>The number of rows to include in the view frame, beginning with the
   *             <code>StartRowIndex</code> value.</p>
   */
  RowRange?: number;

  /**
   * <p>Controls if analytics computation is enabled or disabled. Enabled by default.</p>
   */
  Analytics?: AnalyticsMode | string;
}

export interface SendProjectSessionActionRequest {
  /**
   * <p>If true, the result of the recipe step will be returned, but not applied.</p>
   */
  Preview?: boolean;

  /**
   * <p>The name of the project to apply the action to.</p>
   */
  Name: string | undefined;

  /**
   * <p>Represents a single step from a DataBrew recipe to be performed.</p>
   */
  RecipeStep?: RecipeStep;

  /**
   * <p>The index from which to preview a step. This index is used to preview the result of
   *             steps that have already been applied, so that the resulting view frame is from earlier
   *             in the view frame stack.</p>
   */
  StepIndex?: number;

  /**
   * <p>A unique identifier for an interactive session that's currently open and ready for
   *             work. The action will be performed on this session.</p>
   */
  ClientSessionId?: string;

  /**
   * <p>Represents the data being transformed during an action.</p>
   */
  ViewFrame?: ViewFrame;
}

export interface SendProjectSessionActionResponse {
  /**
   * <p>A message indicating the result of performing the action.</p>
   */
  Result?: string;

  /**
   * <p>The name of the project that was affected by the action.</p>
   */
  Name: string | undefined;

  /**
   * <p>A unique identifier for the action that was performed.</p>
   */
  ActionId?: number;
}

export interface StartJobRunRequest {
  /**
   * <p>The name of the job to be run.</p>
   */
  Name: string | undefined;
}

export interface StartJobRunResponse {
  /**
   * <p>A system-generated identifier for this particular job run.</p>
   */
  RunId: string | undefined;
}

export interface StartProjectSessionRequest {
  /**
   * <p>The name of the project to act upon.</p>
   */
  Name: string | undefined;

  /**
   * <p>A value that, if true, enables you to take control of a session, even if a different
   *             client is currently accessing the project.</p>
   */
  AssumeControl?: boolean;
}

export interface StartProjectSessionResponse {
  /**
   * <p>The name of the project to be acted upon.</p>
   */
  Name: string | undefined;

  /**
   * <p>A system-generated identifier for the session.</p>
   */
  ClientSessionId?: string;
}

export interface StopJobRunRequest {
  /**
   * <p>The name of the job to be stopped.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the job run to be stopped.</p>
   */
  RunId: string | undefined;
}

export interface StopJobRunResponse {
  /**
   * <p>The ID of the job run that you stopped.</p>
   */
  RunId: string | undefined;
}

export interface TagResourceRequest {
  /**
   * <p>The DataBrew resource to which tags should be added. The value for this parameter is
   *             an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or
   *             a recipe.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: Record<string, string> | undefined;
}

export interface TagResourceResponse {}

export interface UntagResourceRequest {
  /**
   * <p>A DataBrew resource from which you want to remove a tag or tags. The value for this
   *             parameter is an Amazon Resource Name (ARN). </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys (names) of one or more tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateDatasetRequest {
  /**
   * <p>The name of the dataset to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat | string;

  /**
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;
}

export interface UpdateDatasetResponse {
  /**
   * <p>The name of the dataset that you updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateProfileJobRequest {
  /**
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  Configuration?: ProfileConfiguration;

  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The name of the job to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of compute nodes that DataBrew can use when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * <p>Sample configuration for Profile Jobs only. Determines the number of rows on which the
   *             Profile job will be executed. If a JobSample value is not provided for profile jobs, the
   *             default value will be used. The default value is CUSTOM_ROWS for the mode parameter and
   *             20000 for the size parameter.</p>
   */
  JobSample?: JobSample;
}

export interface UpdateProfileJobResponse {
  /**
   * <p>The name of the job that was updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateProjectRequest {
  /**
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the project to be updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateProjectResponse {
  /**
   * <p>The date and time that the project was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the project that you updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateRecipeRequest {
  /**
   * <p>A description of the recipe.</p>
   */
  Description?: string;

  /**
   * <p>The name of the recipe to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   */
  Steps?: RecipeStep[];
}

export interface UpdateRecipeResponse {
  /**
   * <p>The name of the recipe that was updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateRecipeJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

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
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The name of the job to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>One or more artifacts that represent the output from running the job. </p>
   */
  Outputs?: Output[];

  /**
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * <p>Represents a list of JDBC database output objects which defines the output destination for a
   *             DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export interface UpdateRecipeJobResponse {
  /**
   * <p>The name of the job that you updated.</p>
   */
  Name: string | undefined;
}

export interface UpdateRulesetRequest {
  /**
   * <p>The name of the ruleset to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * <p>A list of rules that are defined with the ruleset. A rule includes one or more
   *             checks to be validated on a DataBrew dataset.</p>
   */
  Rules: Rule[] | undefined;
}

export interface UpdateRulesetResponse {
  /**
   * <p>The name of the updated ruleset.</p>
   */
  Name: string | undefined;
}

export interface UpdateScheduleRequest {
  /**
   * <p>The name or names of one or more jobs to be run for this schedule.</p>
   */
  JobNames?: string[];

  /**
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression: string | undefined;

  /**
   * <p>The name of the schedule to update.</p>
   */
  Name: string | undefined;
}

export interface UpdateScheduleResponse {
  /**
   * <p>The name of the schedule that was updated.</p>
   */
  Name: string | undefined;
}

/**
 * @internal
 */
export const AllowedStatisticsFilterSensitiveLog = (obj: AllowedStatistics): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteRecipeVersionRequestFilterSensitiveLog = (obj: BatchDeleteRecipeVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeVersionErrorDetailFilterSensitiveLog = (obj: RecipeVersionErrorDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteRecipeVersionResponseFilterSensitiveLog = (obj: BatchDeleteRecipeVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CsvOptionsFilterSensitiveLog = (obj: CsvOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExcelOptionsFilterSensitiveLog = (obj: ExcelOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JsonOptionsFilterSensitiveLog = (obj: JsonOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FormatOptionsFilterSensitiveLog = (obj: FormatOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3LocationFilterSensitiveLog = (obj: S3Location): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseInputDefinitionFilterSensitiveLog = (obj: DatabaseInputDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCatalogInputDefinitionFilterSensitiveLog = (obj: DataCatalogInputDefinition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetadataFilterSensitiveLog = (obj: Metadata): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputFilterSensitiveLog = (obj: Input): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilesLimitFilterSensitiveLog = (obj: FilesLimit): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterExpressionFilterSensitiveLog = (obj: FilterExpression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatetimeOptionsFilterSensitiveLog = (obj: DatetimeOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetParameterFilterSensitiveLog = (obj: DatasetParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PathOptionsFilterSensitiveLog = (obj: PathOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetRequestFilterSensitiveLog = (obj: CreateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateDatasetResponseFilterSensitiveLog = (obj: CreateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnSelectorFilterSensitiveLog = (obj: ColumnSelector): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatisticOverrideFilterSensitiveLog = (obj: StatisticOverride): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StatisticsConfigurationFilterSensitiveLog = (obj: StatisticsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ColumnStatisticsConfigurationFilterSensitiveLog = (obj: ColumnStatisticsConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EntityDetectorConfigurationFilterSensitiveLog = (obj: EntityDetectorConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProfileConfigurationFilterSensitiveLog = (obj: ProfileConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobSampleFilterSensitiveLog = (obj: JobSample): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ValidationConfigurationFilterSensitiveLog = (obj: ValidationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProfileJobRequestFilterSensitiveLog = (obj: CreateProfileJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProfileJobResponseFilterSensitiveLog = (obj: CreateProfileJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SampleFilterSensitiveLog = (obj: Sample): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectRequestFilterSensitiveLog = (obj: CreateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProjectResponseFilterSensitiveLog = (obj: CreateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeActionFilterSensitiveLog = (obj: RecipeAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionExpressionFilterSensitiveLog = (obj: ConditionExpression): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeStepFilterSensitiveLog = (obj: RecipeStep): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecipeRequestFilterSensitiveLog = (obj: CreateRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecipeResponseFilterSensitiveLog = (obj: CreateRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseTableOutputOptionsFilterSensitiveLog = (obj: DatabaseTableOutputOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatabaseOutputFilterSensitiveLog = (obj: DatabaseOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const S3TableOutputOptionsFilterSensitiveLog = (obj: S3TableOutputOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DataCatalogOutputFilterSensitiveLog = (obj: DataCatalogOutput): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CsvOutputOptionsFilterSensitiveLog = (obj: CsvOutputOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFormatOptionsFilterSensitiveLog = (obj: OutputFormatOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const OutputFilterSensitiveLog = (obj: Output): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeReferenceFilterSensitiveLog = (obj: RecipeReference): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecipeJobRequestFilterSensitiveLog = (obj: CreateRecipeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRecipeJobResponseFilterSensitiveLog = (obj: CreateRecipeJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ThresholdFilterSensitiveLog = (obj: Threshold): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRulesetRequestFilterSensitiveLog = (obj: CreateRulesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateRulesetResponseFilterSensitiveLog = (obj: CreateRulesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleRequestFilterSensitiveLog = (obj: CreateScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateScheduleResponseFilterSensitiveLog = (obj: CreateScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetRequestFilterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteDatasetResponseFilterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobRequestFilterSensitiveLog = (obj: DeleteJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteJobResponseFilterSensitiveLog = (obj: DeleteJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectRequestFilterSensitiveLog = (obj: DeleteProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProjectResponseFilterSensitiveLog = (obj: DeleteProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecipeVersionRequestFilterSensitiveLog = (obj: DeleteRecipeVersionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRecipeVersionResponseFilterSensitiveLog = (obj: DeleteRecipeVersionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRulesetRequestFilterSensitiveLog = (obj: DeleteRulesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRulesetResponseFilterSensitiveLog = (obj: DeleteRulesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleRequestFilterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduleResponseFilterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetRequestFilterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeDatasetResponseFilterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobRequestFilterSensitiveLog = (obj: DescribeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobResponseFilterSensitiveLog = (obj: DescribeJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobRunRequestFilterSensitiveLog = (obj: DescribeJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeJobRunResponseFilterSensitiveLog = (obj: DescribeJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectRequestFilterSensitiveLog = (obj: DescribeProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeProjectResponseFilterSensitiveLog = (obj: DescribeProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecipeRequestFilterSensitiveLog = (obj: DescribeRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRecipeResponseFilterSensitiveLog = (obj: DescribeRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRulesetRequestFilterSensitiveLog = (obj: DescribeRulesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRulesetResponseFilterSensitiveLog = (obj: DescribeRulesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduleRequestFilterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduleResponseFilterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsRequestFilterSensitiveLog = (obj: ListDatasetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DatasetFilterSensitiveLog = (obj: Dataset): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDatasetsResponseFilterSensitiveLog = (obj: ListDatasetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobRunsRequestFilterSensitiveLog = (obj: ListJobRunsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobRunFilterSensitiveLog = (obj: JobRun): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobRunsResponseFilterSensitiveLog = (obj: ListJobRunsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsRequestFilterSensitiveLog = (obj: ListJobsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const JobFilterSensitiveLog = (obj: Job): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListJobsResponseFilterSensitiveLog = (obj: ListJobsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsRequestFilterSensitiveLog = (obj: ListProjectsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProjectFilterSensitiveLog = (obj: Project): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProjectsResponseFilterSensitiveLog = (obj: ListProjectsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipesRequestFilterSensitiveLog = (obj: ListRecipesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecipeFilterSensitiveLog = (obj: Recipe): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipesResponseFilterSensitiveLog = (obj: ListRecipesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipeVersionsRequestFilterSensitiveLog = (obj: ListRecipeVersionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRecipeVersionsResponseFilterSensitiveLog = (obj: ListRecipeVersionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesetsRequestFilterSensitiveLog = (obj: ListRulesetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RulesetItemFilterSensitiveLog = (obj: RulesetItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesetsResponseFilterSensitiveLog = (obj: ListRulesetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulesRequestFilterSensitiveLog = (obj: ListSchedulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduleFilterSensitiveLog = (obj: Schedule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListSchedulesResponseFilterSensitiveLog = (obj: ListSchedulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishRecipeRequestFilterSensitiveLog = (obj: PublishRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PublishRecipeResponseFilterSensitiveLog = (obj: PublishRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ViewFrameFilterSensitiveLog = (obj: ViewFrame): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SendProjectSessionActionRequestFilterSensitiveLog = (obj: SendProjectSessionActionRequest): any => ({
  ...obj,
  ...(obj.ClientSessionId && { ClientSessionId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SendProjectSessionActionResponseFilterSensitiveLog = (obj: SendProjectSessionActionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRunRequestFilterSensitiveLog = (obj: StartJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartJobRunResponseFilterSensitiveLog = (obj: StartJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartProjectSessionRequestFilterSensitiveLog = (obj: StartProjectSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartProjectSessionResponseFilterSensitiveLog = (obj: StartProjectSessionResponse): any => ({
  ...obj,
  ...(obj.ClientSessionId && { ClientSessionId: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StopJobRunRequestFilterSensitiveLog = (obj: StopJobRunRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StopJobRunResponseFilterSensitiveLog = (obj: StopJobRunResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetRequestFilterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateDatasetResponseFilterSensitiveLog = (obj: UpdateDatasetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileJobRequestFilterSensitiveLog = (obj: UpdateProfileJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProfileJobResponseFilterSensitiveLog = (obj: UpdateProfileJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectRequestFilterSensitiveLog = (obj: UpdateProjectRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateProjectResponseFilterSensitiveLog = (obj: UpdateProjectResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecipeRequestFilterSensitiveLog = (obj: UpdateRecipeRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecipeResponseFilterSensitiveLog = (obj: UpdateRecipeResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecipeJobRequestFilterSensitiveLog = (obj: UpdateRecipeJobRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRecipeJobResponseFilterSensitiveLog = (obj: UpdateRecipeJobResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRulesetRequestFilterSensitiveLog = (obj: UpdateRulesetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateRulesetResponseFilterSensitiveLog = (obj: UpdateRulesetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduleRequestFilterSensitiveLog = (obj: UpdateScheduleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateScheduleResponseFilterSensitiveLog = (obj: UpdateScheduleResponse): any => ({
  ...obj,
});
