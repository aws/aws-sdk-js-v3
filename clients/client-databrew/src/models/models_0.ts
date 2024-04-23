// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DataBrewServiceException as __BaseException } from "./DataBrewServiceException";

/**
 * @public
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
 * @public
 * <p>Configuration of statistics that are allowed to be run on columns that
 *             contain detected entities. When undefined, no statistics will be computed
 *             on columns that contain detected entities.</p>
 */
export interface AllowedStatistics {
  /**
   * @public
   * <p>One or more column statistics to allow for columns that contain detected entities.</p>
   */
  Statistics: string[] | undefined;
}

/**
 * @public
 * @enum
 */
export const AnalyticsMode = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;

/**
 * @public
 */
export type AnalyticsMode = (typeof AnalyticsMode)[keyof typeof AnalyticsMode];

/**
 * @public
 */
export interface BatchDeleteRecipeVersionRequest {
  /**
   * @public
   * <p>The name of the recipe whose versions are to be deleted.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An array of version identifiers, for the recipe versions to be deleted. You can
   *             specify numeric versions (<code>X.Y</code>) or <code>LATEST_WORKING</code>.
   *                 <code>LATEST_PUBLISHED</code> is not supported.</p>
   */
  RecipeVersions: string[] | undefined;
}

/**
 * @public
 * <p>Represents any errors encountered when attempting to delete multiple recipe
 *             versions.</p>
 */
export interface RecipeVersionErrorDetail {
  /**
   * @public
   * <p>The HTTP status code for the error.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The text of the error message.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The identifier for the recipe version associated with this error.</p>
   */
  RecipeVersion?: string;
}

/**
 * @public
 */
export interface BatchDeleteRecipeVersionResponse {
  /**
   * @public
   * <p>The name of the recipe that was modified.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Errors, if any, that occurred while attempting to delete the recipe versions.</p>
   */
  Errors?: RecipeVersionErrorDetail[];
}

/**
 * @public
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
 * @public
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
 * @public
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

/**
 * @public
 * @enum
 */
export const InputFormat = {
  CSV: "CSV",
  EXCEL: "EXCEL",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
} as const;

/**
 * @public
 */
export type InputFormat = (typeof InputFormat)[keyof typeof InputFormat];

/**
 * @public
 * <p>Represents a set of options that define how DataBrew will read a
 *             comma-separated value (CSV) file when creating a dataset from that file.</p>
 */
export interface CsvOptions {
  /**
   * @public
   * <p>A single character that specifies the delimiter being used in the CSV file.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   */
  HeaderRow?: boolean;
}

/**
 * @public
 * <p>Represents a set of options that define how DataBrew will interpret a Microsoft Excel file when
 *             creating a dataset from that file.</p>
 */
export interface ExcelOptions {
  /**
   * @public
   * <p>One or more named sheets in the Excel file that will be included in the dataset.</p>
   */
  SheetNames?: string[];

  /**
   * @public
   * <p>One or more sheet numbers in the Excel file that will be included in the
   *             dataset.</p>
   */
  SheetIndexes?: number[];

  /**
   * @public
   * <p>A variable that specifies whether the first row in the file is parsed as the
   *             header. If this value is false, column names are auto-generated.</p>
   */
  HeaderRow?: boolean;
}

/**
 * @public
 * <p>Represents the JSON-specific options that define how input is to be interpreted by Glue DataBrew.</p>
 */
export interface JsonOptions {
  /**
   * @public
   * <p>A value that specifies whether JSON input contains embedded new line
   *             characters.</p>
   */
  MultiLine?: boolean;
}

/**
 * @public
 * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
 *             Excel, or JSON input.</p>
 */
export interface FormatOptions {
  /**
   * @public
   * <p>Options that define how JSON input is to be interpreted by DataBrew.</p>
   */
  Json?: JsonOptions;

  /**
   * @public
   * <p>Options that define how Excel input is to be interpreted by DataBrew.</p>
   */
  Excel?: ExcelOptions;

  /**
   * @public
   * <p>Options that define how CSV input is to be interpreted by DataBrew.</p>
   */
  Csv?: CsvOptions;
}

/**
 * @public
 * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
 *             input data, or write output from a job.</p>
 */
export interface S3Location {
  /**
   * @public
   * <p>The Amazon S3 bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * @public
   * <p>The unique name of the object in the bucket.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the bucket owner.</p>
   */
  BucketOwner?: string;
}

/**
 * @public
 * <p>Connection information for dataset input files stored in a database.</p>
 */
export interface DatabaseInputDefinition {
  /**
   * @public
   * <p>The Glue Connection that stores the connection information for the target
   *             database.</p>
   */
  GlueConnectionName: string | undefined;

  /**
   * @public
   * <p>The table within the target database.</p>
   */
  DatabaseTableName?: string;

  /**
   * @public
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  TempDirectory?: S3Location;

  /**
   * @public
   * <p>Custom SQL to run against the provided Glue connection. This SQL will be used as
   *             the input for DataBrew projects and jobs.</p>
   */
  QueryString?: string;
}

/**
 * @public
 * <p>Represents how metadata stored in the Glue Data Catalog is defined in a DataBrew
 *             dataset. </p>
 */
export interface DataCatalogInputDefinition {
  /**
   * @public
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the
   *             data.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of a database in the Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of a database table in the Data Catalog. This table corresponds to a DataBrew
   *             dataset.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Represents an Amazon location where DataBrew can store intermediate results.</p>
   */
  TempDirectory?: S3Location;
}

/**
 * @public
 * <p>Contains additional resource information needed for specific datasets.</p>
 */
export interface Metadata {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) associated with the dataset. Currently, DataBrew
   *             only supports ARNs from Amazon AppFlow.</p>
   */
  SourceArn?: string;
}

/**
 * @public
 * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
 *             Amazon S3.</p>
 */
export interface Input {
  /**
   * @public
   * <p>The Amazon S3 location where the data is stored.</p>
   */
  S3InputDefinition?: S3Location;

  /**
   * @public
   * <p>The Glue Data Catalog parameters for the data.</p>
   */
  DataCatalogInputDefinition?: DataCatalogInputDefinition;

  /**
   * @public
   * <p>Connection information for dataset input files stored in a database.</p>
   */
  DatabaseInputDefinition?: DatabaseInputDefinition;

  /**
   * @public
   * <p>Contains additional resource information needed for specific datasets.</p>
   */
  Metadata?: Metadata;
}

/**
 * @public
 * @enum
 */
export const Order = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type Order = (typeof Order)[keyof typeof Order];

/**
 * @public
 * @enum
 */
export const OrderedBy = {
  LAST_MODIFIED_DATE: "LAST_MODIFIED_DATE",
} as const;

/**
 * @public
 */
export type OrderedBy = (typeof OrderedBy)[keyof typeof OrderedBy];

/**
 * @public
 * <p>Represents a limit imposed on number of Amazon S3 files that should be selected for a
 *             dataset from a connected Amazon S3 path.</p>
 */
export interface FilesLimit {
  /**
   * @public
   * <p>The number of Amazon S3 files to select.</p>
   */
  MaxFiles: number | undefined;

  /**
   * @public
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By default uses LAST_MODIFIED_DATE as
   *             a sorting criteria. Currently it's the only allowed value.</p>
   */
  OrderedBy?: OrderedBy;

  /**
   * @public
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By
   *             default uses DESCENDING order, i.e. most recent files are selected first. Another
   *             possible value is ASCENDING.</p>
   */
  Order?: Order;
}

/**
 * @public
 * <p>Represents a structure for defining parameter conditions. Supported conditions are described
 *             here: <a href="https://docs.aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported
 *                 conditions for dynamic datasets</a> in the
 *             <i>Glue DataBrew Developer Guide</i>.</p>
 */
export interface FilterExpression {
  /**
   * @public
   * <p>The expression which includes condition names followed by substitution variables, possibly grouped
   *             and combined with other conditions. For example, "(starts_with :prefix1 or starts_with :prefix2) and
   *             (ends_with :suffix1 or ends_with :suffix2)". Substitution variables should start with ':' symbol.</p>
   */
  Expression: string | undefined;

  /**
   * @public
   * <p>The map of substitution variable names to their values used in this filter expression.</p>
   */
  ValuesMap: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Represents additional options for correct interpretation of datetime parameters used in
 *             the Amazon S3 path of a dataset.</p>
 */
export interface DatetimeOptions {
  /**
   * @public
   * <p>Required option, that defines the datetime format used for a date parameter in the
   *             Amazon S3 path. Should use only supported datetime specifiers and separation characters, all
   *             literal a-z or A-Z characters should be escaped with single quotes. E.g. "MM.dd.yyyy-'at'-HH:mm".</p>
   */
  Format: string | undefined;

  /**
   * @public
   * <p>Optional value for a timezone offset of the datetime parameter value in the Amazon S3
   *             path. Shouldn't be used if Format for this parameter includes timezone fields.
   *             If no offset specified, UTC is assumed.</p>
   */
  TimezoneOffset?: string;

  /**
   * @public
   * <p>Optional value for a non-US locale code, needed for correct interpretation of some date formats.</p>
   */
  LocaleCode?: string;
}

/**
 * @public
 * @enum
 */
export const ParameterType = {
  Datetime: "Datetime",
  Number: "Number",
  String: "String",
} as const;

/**
 * @public
 */
export type ParameterType = (typeof ParameterType)[keyof typeof ParameterType];

/**
 * @public
 * <p>Represents a dataset parameter that defines type and conditions for a parameter in the
 *                 Amazon S3 path of the dataset.</p>
 */
export interface DatasetParameter {
  /**
   * @public
   * <p>The name of the parameter that is used in the dataset's Amazon S3 path.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of the dataset parameter, can be one of a 'String', 'Number' or 'Datetime'.</p>
   */
  Type: ParameterType | undefined;

  /**
   * @public
   * <p>Additional parameter options such as a format and a timezone. Required for datetime parameters.</p>
   */
  DatetimeOptions?: DatetimeOptions;

  /**
   * @public
   * <p>Optional boolean value that defines whether the captured value of this parameter
   *             should be used to create a new column in a dataset.</p>
   */
  CreateColumn?: boolean;

  /**
   * @public
   * <p>The optional filter expression structure to apply additional matching criteria to the parameter.</p>
   */
  Filter?: FilterExpression;
}

/**
 * @public
 * <p>Represents a set of options that define how DataBrew selects files for a given Amazon S3
 *             path in a dataset.</p>
 */
export interface PathOptions {
  /**
   * @public
   * <p>If provided, this structure defines a date range for matching Amazon S3 objects based on their
   *             LastModifiedDate attribute in Amazon S3.</p>
   */
  LastModifiedDateCondition?: FilterExpression;

  /**
   * @public
   * <p>If provided, this structure imposes a limit on a number of files that should be selected.</p>
   */
  FilesLimit?: FilesLimit;

  /**
   * @public
   * <p>A structure that maps names of parameters used in the Amazon S3 path of a dataset to their definitions.</p>
   */
  Parameters?: Record<string, DatasetParameter>;
}

/**
 * @public
 */
export interface CreateDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset to be created. Valid characters are alphanumeric (A-Z, a-z,
   *             0-9), hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat;

  /**
   * @public
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * @public
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * @public
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * @public
   * <p>Metadata tags to apply to this dataset.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateDatasetResponse {
  /**
   * @public
   * <p>The name of the dataset that you created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
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
 * @public
 * <p>Selector of a column from a dataset for profile job configuration.
 *             One selector includes either a column name or a regular expression.</p>
 */
export interface ColumnSelector {
  /**
   * @public
   * <p>A regular expression for selecting a column from a dataset.</p>
   */
  Regex?: string;

  /**
   * @public
   * <p>The name of a column from a dataset.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>Override of a particular evaluation for a profile job. </p>
 */
export interface StatisticOverride {
  /**
   * @public
   * <p>The name of an evaluation</p>
   */
  Statistic: string | undefined;

  /**
   * @public
   * <p>A map that includes overrides of an evaluation’s parameters.</p>
   */
  Parameters: Record<string, string> | undefined;
}

/**
 * @public
 * <p>Configuration of evaluations for a profile job. This configuration can be used to select
 *             evaluations and override the parameters of selected evaluations.
 *         </p>
 */
export interface StatisticsConfiguration {
  /**
   * @public
   * <p>List of included evaluations. When the list is undefined, all supported
   *             evaluations will be included.</p>
   */
  IncludedStatistics?: string[];

  /**
   * @public
   * <p>List of overrides for evaluations.</p>
   */
  Overrides?: StatisticOverride[];
}

/**
 * @public
 * <p>Configuration for column evaluations for a profile job. ColumnStatisticsConfiguration can be used to select
 *             evaluations and override parameters of evaluations for particular columns.
 *         </p>
 */
export interface ColumnStatisticsConfiguration {
  /**
   * @public
   * <p>List of column selectors. Selectors can be used to select columns from the dataset.
   *             When selectors are undefined, configuration will be applied to all supported columns.
   *         </p>
   */
  Selectors?: ColumnSelector[];

  /**
   * @public
   * <p>Configuration for evaluations. Statistics can be used to select evaluations and override
   *             parameters of evaluations.
   *         </p>
   */
  Statistics: StatisticsConfiguration | undefined;
}

/**
 * @public
 * <p>Configuration of entity detection for a profile job. When undefined, entity
 *             detection is disabled.</p>
 */
export interface EntityDetectorConfiguration {
  /**
   * @public
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
   * @public
   * <p>Configuration of statistics that are allowed to be run on columns that
   *             contain detected entities. When undefined, no statistics will be computed
   *             on columns that contain detected entities.</p>
   */
  AllowedStatistics?: AllowedStatistics[];
}

/**
 * @public
 * <p>Configuration for profile jobs. Configuration can be used to select columns, do evaluations, and override default
 *             parameters of evaluations. When configuration is undefined, the profile job will apply default settings to all
 *             supported columns.
 *         </p>
 */
export interface ProfileConfiguration {
  /**
   * @public
   * <p>Configuration for inter-column evaluations. Configuration can be used to select evaluations and override
   *             parameters of evaluations. When configuration is undefined, the profile job will run all supported
   *             inter-column evaluations.
   *         </p>
   */
  DatasetStatisticsConfiguration?: StatisticsConfiguration;

  /**
   * @public
   * <p>List of column selectors. ProfileColumns can be used to select columns from the dataset. When
   *             ProfileColumns is undefined, the profile job will profile all supported columns.
   *         </p>
   */
  ProfileColumns?: ColumnSelector[];

  /**
   * @public
   * <p>List of configurations for column evaluations. ColumnStatisticsConfigurations are used to
   *             select evaluations and override parameters of evaluations for particular columns. When
   *             ColumnStatisticsConfigurations is undefined,  the profile job will profile all supported columns
   *             and run all supported  evaluations.
   *         </p>
   */
  ColumnStatisticsConfigurations?: ColumnStatisticsConfiguration[];

  /**
   * @public
   * <p>Configuration of entity detection for a profile job. When undefined, entity detection is disabled.</p>
   */
  EntityDetectorConfiguration?: EntityDetectorConfiguration;
}

/**
 * @public
 * @enum
 */
export const EncryptionMode = {
  SSEKMS: "SSE-KMS",
  SSES3: "SSE-S3",
} as const;

/**
 * @public
 */
export type EncryptionMode = (typeof EncryptionMode)[keyof typeof EncryptionMode];

/**
 * @public
 * @enum
 */
export const SampleMode = {
  CUSTOM_ROWS: "CUSTOM_ROWS",
  FULL_DATASET: "FULL_DATASET",
} as const;

/**
 * @public
 */
export type SampleMode = (typeof SampleMode)[keyof typeof SampleMode];

/**
 * @public
 * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
 *             profile job is run. If a <code>JobSample</code> value isn't provided, the
 *             default is used. The default value is CUSTOM_ROWS for the mode parameter and
 *             20,000 for the size parameter.</p>
 */
export interface JobSample {
  /**
   * @public
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
  Mode?: SampleMode;

  /**
   * @public
   * <p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The
   *             profile job is run on the specified number of rows. The maximum value for size is
   *             Long.MAX_VALUE.</p>
   *          <p>Long.MAX_VALUE = 9223372036854775807</p>
   */
  Size?: number;
}

/**
 * @public
 * @enum
 */
export const LogSubscription = {
  DISABLE: "DISABLE",
  ENABLE: "ENABLE",
} as const;

/**
 * @public
 */
export type LogSubscription = (typeof LogSubscription)[keyof typeof LogSubscription];

/**
 * @public
 * @enum
 */
export const ValidationMode = {
  CHECK_ALL: "CHECK_ALL",
} as const;

/**
 * @public
 */
export type ValidationMode = (typeof ValidationMode)[keyof typeof ValidationMode];

/**
 * @public
 * <p>Configuration for data quality validation. Used to select the Rulesets and Validation Mode
 *             to be used in the profile job. When ValidationConfiguration is null, the profile
 *             job will run without data quality validation.</p>
 */
export interface ValidationConfiguration {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the ruleset to be validated in the profile job.
   *             The TargetArn of the selected ruleset should be the same as the Amazon Resource Name (ARN) of
   *             the dataset that is associated with the profile job.</p>
   */
  RulesetArn: string | undefined;

  /**
   * @public
   * <p>Mode of data quality validation. Default mode is “CHECK_ALL” which verifies all rules
   *             defined in the selected ruleset.</p>
   */
  ValidationMode?: ValidationMode;
}

/**
 * @public
 */
export interface CreateProfileJobRequest {
  /**
   * @public
   * <p>The name of the dataset that this job is to act upon.</p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>The name of the job to be created. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of nodes that DataBrew can use when the job processes data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * @public
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  Configuration?: ProfileConfiguration;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;
}

/**
 * @public
 */
export interface CreateProfileJobResponse {
  /**
   * @public
   * <p>The name of the job that was created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SampleType = {
  FIRST_N: "FIRST_N",
  LAST_N: "LAST_N",
  RANDOM: "RANDOM",
} as const;

/**
 * @public
 */
export type SampleType = (typeof SampleType)[keyof typeof SampleType];

/**
 * @public
 * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
 *             analysis.</p>
 */
export interface Sample {
  /**
   * @public
   * <p>The number of rows in the sample.</p>
   */
  Size?: number;

  /**
   * @public
   * <p>The way in which DataBrew obtains rows from a dataset.</p>
   */
  Type: SampleType | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The name of an existing dataset to associate this project with.</p>
   */
  DatasetName: string | undefined;

  /**
   * @public
   * <p>A unique name for the new project. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of an existing recipe to associate with the project.</p>
   */
  RecipeName: string | undefined;

  /**
   * @public
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to this project.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * @public
   * <p>The name of the project that you created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
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
 * @public
 * <p>Represents a transformation and associated parameters that are used to apply a change
 *             to a DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">Recipe
 *                 actions reference</a>.</p>
 */
export interface RecipeAction {
  /**
   * @public
   * <p>The name of a valid DataBrew transformation to be performed on the data.</p>
   */
  Operation: string | undefined;

  /**
   * @public
   * <p>Contextual parameters for the transformation.</p>
   */
  Parameters?: Record<string, string>;
}

/**
 * @public
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *          <p>Conditions are used with recipe actions. The action is only performed for column values where the
 *             condition evaluates to true.</p>
 *          <p>If a recipe requires more than one condition, then the recipe must specify multiple
 *             <code>ConditionExpression</code> elements. Each condition is applied to the rows in a dataset first, before
 *             the recipe action is performed.</p>
 */
export interface ConditionExpression {
  /**
   * @public
   * <p>A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipes.html#recipes.structure">Recipe
   *             structure</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  Condition: string | undefined;

  /**
   * @public
   * <p>A value that the condition must evaluate to for the condition to succeed.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>A column to apply this condition to.</p>
   */
  TargetColumn: string | undefined;
}

/**
 * @public
 * <p>Represents a single step from a DataBrew recipe to be performed.</p>
 */
export interface RecipeStep {
  /**
   * @public
   * <p>The particular action to be performed in the recipe step.</p>
   */
  Action: RecipeAction | undefined;

  /**
   * @public
   * <p>One or more conditions that must be met for the recipe step to succeed.</p>
   *          <note>
   *             <p>All of the conditions in the array must be met. In other words, all of the
   *                 conditions must be combined using a logical AND operation.</p>
   *          </note>
   */
  ConditionExpressions?: ConditionExpression[];
}

/**
 * @public
 */
export interface CreateRecipeRequest {
  /**
   * @public
   * <p>A description for the recipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A unique name for the recipe. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An array containing the steps to be performed by the recipe. Each recipe step consists
   *             of one recipe action and (optionally) an array of condition expressions.</p>
   */
  Steps: RecipeStep[] | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to this recipe.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRecipeResponse {
  /**
   * @public
   * <p>The name of the recipe that you created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Represents options that specify how and where DataBrew writes the database
 *             output generated by recipe jobs.</p>
 */
export interface DatabaseTableOutputOptions {
  /**
   * @public
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can store
   *             intermediate results.</p>
   */
  TempDirectory?: S3Location;

  /**
   * @public
   * <p>A prefix for the name of a table DataBrew will create in the database.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const DatabaseOutputMode = {
  NEW_TABLE: "NEW_TABLE",
} as const;

/**
 * @public
 */
export type DatabaseOutputMode = (typeof DatabaseOutputMode)[keyof typeof DatabaseOutputMode];

/**
 * @public
 * <p>Represents a JDBC database output object which defines the output destination for
 *             a DataBrew recipe job to write into.</p>
 */
export interface DatabaseOutput {
  /**
   * @public
   * <p>The Glue connection that stores the connection information for the
   *             target database.</p>
   */
  GlueConnectionName: string | undefined;

  /**
   * @public
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   */
  DatabaseOptions: DatabaseTableOutputOptions | undefined;

  /**
   * @public
   * <p>The output mode to write into the database. Currently supported option: NEW_TABLE.</p>
   */
  DatabaseOutputMode?: DatabaseOutputMode;
}

/**
 * @public
 * <p>Represents options that specify how and where DataBrew writes the Amazon S3 output
 *             generated by recipe jobs.</p>
 */
export interface S3TableOutputOptions {
  /**
   * @public
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output
   *             from a job.</p>
   */
  Location: S3Location | undefined;
}

/**
 * @public
 * <p>Represents options that specify how and where in the Glue Data Catalog DataBrew
 *             writes the output generated by recipe jobs.</p>
 */
export interface DataCatalogOutput {
  /**
   * @public
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that
   *             stores the data.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of a database in the Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of a table in the Data Catalog.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Represents options that specify how and where DataBrew writes the Amazon S3
   *             output generated by recipe jobs.</p>
   */
  S3Options?: S3TableOutputOptions;

  /**
   * @public
   * <p>Represents options that specify how and where DataBrew writes the database output
   *             generated by recipe jobs.</p>
   */
  DatabaseOptions?: DatabaseTableOutputOptions;

  /**
   * @public
   * <p>A value that, if true, means that any data in the location specified for output
   *             is overwritten with new output. Not supported with DatabaseOptions.</p>
   */
  Overwrite?: boolean;
}

/**
 * @public
 * @enum
 */
export const CompressionFormat = {
  BROTLI: "BROTLI",
  BZIP2: "BZIP2",
  DEFLATE: "DEFLATE",
  GZIP: "GZIP",
  LZ4: "LZ4",
  LZO: "LZO",
  SNAPPY: "SNAPPY",
  ZLIB: "ZLIB",
  ZSTD: "ZSTD",
} as const;

/**
 * @public
 */
export type CompressionFormat = (typeof CompressionFormat)[keyof typeof CompressionFormat];

/**
 * @public
 * @enum
 */
export const OutputFormat = {
  AVRO: "AVRO",
  CSV: "CSV",
  GLUEPARQUET: "GLUEPARQUET",
  JSON: "JSON",
  ORC: "ORC",
  PARQUET: "PARQUET",
  TABLEAUHYPER: "TABLEAUHYPER",
  XML: "XML",
} as const;

/**
 * @public
 */
export type OutputFormat = (typeof OutputFormat)[keyof typeof OutputFormat];

/**
 * @public
 * <p>Represents a set of options that define how DataBrew will write a
 *             comma-separated value (CSV) file.</p>
 */
export interface CsvOutputOptions {
  /**
   * @public
   * <p>A single character that specifies the delimiter used to create CSV job output.</p>
   */
  Delimiter?: string;
}

/**
 * @public
 * <p>Represents a set of options that define the structure of comma-separated (CSV) job output.</p>
 */
export interface OutputFormatOptions {
  /**
   * @public
   * <p>Represents a set of options that define the structure of comma-separated value (CSV)
   *             job output.</p>
   */
  Csv?: CsvOutputOptions;
}

/**
 * @public
 * <p>Represents options that specify how and where in Amazon S3 DataBrew writes the output generated by
 *             recipe jobs or profile jobs.</p>
 */
export interface Output {
  /**
   * @public
   * <p>The compression algorithm used to compress the output text of the job.</p>
   */
  CompressionFormat?: CompressionFormat;

  /**
   * @public
   * <p>The data format of the output of the job.</p>
   */
  Format?: OutputFormat;

  /**
   * @public
   * <p>The names of one or more partition columns for the output of the job.</p>
   */
  PartitionColumns?: string[];

  /**
   * @public
   * <p>The location in Amazon S3 where the job writes its output.</p>
   */
  Location: S3Location | undefined;

  /**
   * @public
   * <p>A value that, if true, means that any data in the location specified for output is
   *             overwritten with new output.</p>
   */
  Overwrite?: boolean;

  /**
   * @public
   * <p>Represents options that define how DataBrew formats job output files.</p>
   */
  FormatOptions?: OutputFormatOptions;

  /**
   * @public
   * <p>Maximum number of files to be generated by the job and written to the output folder. For output partitioned
   *             by column(s), the MaxOutputFiles value is the maximum number of files per partition.</p>
   */
  MaxOutputFiles?: number;
}

/**
 * @public
 * <p>Represents the name and version of a DataBrew recipe.</p>
 */
export interface RecipeReference {
  /**
   * @public
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The identifier for the version for the recipe. </p>
   */
  RecipeVersion?: string;
}

/**
 * @public
 */
export interface CreateRecipeJobRequest {
  /**
   * @public
   * <p>The name of the dataset that this job processes.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>A unique name for the job. Valid characters are alphanumeric (A-Z, a-z, 0-9), hyphen
   *             (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>One or more artifacts that represent the output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output destination for
   *             a DataBrew recipe job to write to. </p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>Either the name of an existing project, or a combination of a recipe and a dataset to
   *             associate with the recipe.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

/**
 * @public
 */
export interface CreateRecipeJobResponse {
  /**
   * @public
   * <p>The name of the job that you created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ThresholdType = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;

/**
 * @public
 */
export type ThresholdType = (typeof ThresholdType)[keyof typeof ThresholdType];

/**
 * @public
 * @enum
 */
export const ThresholdUnit = {
  COUNT: "COUNT",
  PERCENTAGE: "PERCENTAGE",
} as const;

/**
 * @public
 */
export type ThresholdUnit = (typeof ThresholdUnit)[keyof typeof ThresholdUnit];

/**
 * @public
 * <p>The threshold used with a non-aggregate check expression. The non-aggregate check expression
 *             will be applied to each row in a specific column. Then the threshold will be used to determine
 *             whether the validation succeeds.</p>
 */
export interface Threshold {
  /**
   * @public
   * <p>The value of a threshold.</p>
   */
  Value: number | undefined;

  /**
   * @public
   * <p>The type of a threshold. Used for comparison of an actual count of rows that satisfy the
   *             rule to the threshold value.</p>
   */
  Type?: ThresholdType;

  /**
   * @public
   * <p>Unit of threshold value. Can be either a COUNT or PERCENTAGE of the full sample size
   *             used for validation.</p>
   */
  Unit?: ThresholdUnit;
}

/**
 * @public
 * <p>Represents a single data quality requirement that should be validated in the
 *             scope of this dataset.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A value that specifies whether the rule is disabled. Once a rule is
   *             disabled, a profile job will not validate it during a job run. Default
   *             value is false.</p>
   */
  Disabled?: boolean;

  /**
   * @public
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
   * @public
   * <p>The map of substitution variable names to their values used in a check
   *             expression. Variable names should start with a ':' (colon).  Variable values can either
   *             be actual values or column names. To differentiate between the two, column names
   *             should be enclosed in backticks, for example, <code>":col1": "`Column A`".</code>
   *          </p>
   */
  SubstitutionMap?: Record<string, string>;

  /**
   * @public
   * <p>The threshold used with a non-aggregate check expression. Non-aggregate check expressions
   *             will be applied to each row in a specific column, and the threshold will be used to determine
   *             whether the validation succeeds.</p>
   */
  Threshold?: Threshold;

  /**
   * @public
   * <p>List of column selectors. Selectors can be used to select columns using a name or regular
   *             expression from the dataset. Rule will be applied to selected columns.</p>
   */
  ColumnSelectors?: ColumnSelector[];
}

/**
 * @public
 */
export interface CreateRulesetRequest {
  /**
   * @public
   * <p>The name of the ruleset to be created. Valid characters are alphanumeric
   *             (A-Z, a-z, 0-9), hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the
   *             ruleset is associated with.</p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>A list of rules that are defined with the ruleset. A rule includes
   *             one or more checks to be validated on a DataBrew dataset.</p>
   */
  Rules: Rule[] | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to the ruleset.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRulesetResponse {
  /**
   * @public
   * <p>The unique name of the created ruleset.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleRequest {
  /**
   * @public
   * <p>The name or names of one or more jobs to be run.</p>
   */
  JobNames?: string[];

  /**
   * @public
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression: string | undefined;

  /**
   * @public
   * <p>Metadata tags to apply to this schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateScheduleResponse {
  /**
   * @public
   * <p>The name of the schedule that was created.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatasetResponse {
  /**
   * @public
   * <p>The name of the dataset that you deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * @public
   * <p>The name of the job to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * @public
   * <p>The name of the job that you deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>The name of the project to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * @public
   * <p>The name of the project that you deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionRequest {
  /**
   * @public
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of the recipe to be deleted. You can specify a numeric versions
   *                 (<code>X.Y</code>) or <code>LATEST_WORKING</code>. <code>LATEST_PUBLISHED</code> is
   *             not supported.</p>
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRecipeVersionResponse {
  /**
   * @public
   * <p>The name of the recipe that was deleted.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The version of the recipe that was deleted.</p>
   */
  RecipeVersion: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetRequest {
  /**
   * @public
   * <p>The name of the ruleset to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteRulesetResponse {
  /**
   * @public
   * <p>The name of the deleted ruleset.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleRequest {
  /**
   * @public
   * <p>The name of the schedule to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduleResponse {
  /**
   * @public
   * <p>The name of the schedule that was deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeDatasetRequest {
  /**
   * @public
   * <p>The name of the dataset to be described.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Source = {
  DATABASE: "DATABASE",
  DATACATALOG: "DATA-CATALOG",
  S3: "S3",
} as const;

/**
 * @public
 */
export type Source = (typeof Source)[keyof typeof Source];

/**
 * @public
 */
export interface DescribeDatasetResponse {
  /**
   * @public
   * <p>The identifier (user name) of the user who created the dataset.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the dataset was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The name of the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The file format of a dataset that is created from an Amazon S3 file
   *             or folder.</p>
   */
  Format?: InputFormat;

  /**
   * @public
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * @public
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * @public
   * <p>The date and time that the dataset was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The location of the data for this dataset, Amazon S3 or the
   *             Glue Data Catalog.</p>
   */
  Source?: Source;

  /**
   * @public
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * @public
   * <p>Metadata tags associated with this dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface DescribeJobRequest {
  /**
   * @public
   * <p>The name of the job to be described.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobType = {
  PROFILE: "PROFILE",
  RECIPE: "RECIPE",
} as const;

/**
 * @public
 */
export type JobType = (typeof JobType)[keyof typeof JobType];

/**
 * @public
 */
export interface DescribeJobResponse {
  /**
   * @public
   * <p>The date and time that the job was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user associated with the creation of the job.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The dataset that the job acts upon.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>The name of the job.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
  Type?: JobType;

  /**
   * @public
   * <p>The identifier (user name) of the user who last modified the job.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time that the job was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>Indicates whether Amazon CloudWatch logging is enabled for this job.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of compute nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>One or more artifacts that represent the output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>The DataBrew project associated with this job.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  ProfileConfiguration?: ProfileConfiguration;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * @public
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Metadata tags associated with this job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed.</p>
   */
  JobSample?: JobSample;
}

/**
 * @public
 */
export interface DescribeJobRunRequest {
  /**
   * @public
   * <p>The name of the job being processed during this run.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the job run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobRunState = {
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type JobRunState = (typeof JobRunState)[keyof typeof JobRunState];

/**
 * @public
 */
export interface DescribeJobRunResponse {
  /**
   * @public
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   */
  Attempt?: number;

  /**
   * @public
   * <p>The date and time when the job completed processing.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The name of the dataset for the job to process.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, during which the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>The name of the job being processed during this run.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  ProfileConfiguration?: ProfileConfiguration;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * @public
   * <p>The unique identifier of the job run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The current state of the job run entity itself.</p>
   */
  State?: JobRunState;

  /**
   * @public
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>One or more output artifacts from a job run.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>Represents the name and version of a DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who started the job run.</p>
   */
  StartedBy?: string;

  /**
   * @public
   * <p>The date and time when the job run began.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>Sample configuration for profile jobs only. Determines the number of rows on which the
   *             profile job will be executed. If a JobSample value is not provided, the default value
   *             will be used. The default value is CUSTOM_ROWS for the mode parameter and 20000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;
}

/**
 * @public
 */
export interface DescribeProjectRequest {
  /**
   * @public
   * <p>The name of the project to be described.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  ASSIGNED: "ASSIGNED",
  FAILED: "FAILED",
  INITIALIZING: "INITIALIZING",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
  RECYCLING: "RECYCLING",
  ROTATING: "ROTATING",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 */
export interface DescribeProjectResponse {
  /**
   * @public
   * <p>The date and time that the project was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user who created the project.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The dataset associated with the project.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The date and time that the project was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user who last modified the project.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The recipe associated with this job.</p>
   */
  RecipeName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the project.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * @public
   * <p>The ARN of the Identity and Access Management (IAM) role to be assumed when
   *             DataBrew runs the job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Metadata tags associated with this project.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
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
  SessionStatus?: SessionStatus;

  /**
   * @public
   * <p>The identifier (user name) of the user that opened the project for use. </p>
   */
  OpenedBy?: string;

  /**
   * @public
   * <p>The date and time when the project was opened. </p>
   */
  OpenDate?: Date;
}

/**
 * @public
 */
export interface DescribeRecipeRequest {
  /**
   * @public
   * <p>The name of the recipe to be described.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The recipe version identifier. If this parameter isn't specified, then the latest
   *             published version is returned.</p>
   */
  RecipeVersion?: string;
}

/**
 * @public
 */
export interface DescribeRecipeResponse {
  /**
   * @public
   * <p>The identifier (user name) of the user who created the recipe.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the recipe was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user who last modified the recipe.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time that the recipe was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The name of the project associated with this recipe.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>The identifier (user name) of the user who last published the recipe.</p>
   */
  PublishedBy?: string;

  /**
   * @public
   * <p>The date and time when the recipe was last published.</p>
   */
  PublishedDate?: Date;

  /**
   * @public
   * <p>The description of the recipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the recipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   */
  Steps?: RecipeStep[];

  /**
   * @public
   * <p>Metadata tags associated with this project.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The ARN of the recipe.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The recipe version identifier.</p>
   */
  RecipeVersion?: string;
}

/**
 * @public
 */
export interface DescribeRulesetRequest {
  /**
   * @public
   * <p>The name of the ruleset to be described.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeRulesetResponse {
  /**
   * @public
   * <p>The name of the ruleset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>A list of rules that are defined with the ruleset. A rule includes one
   *             or more checks to be validated on a DataBrew dataset.</p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>The date and time that the ruleset was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The modification date and time of the ruleset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>Metadata tags that have been applied to the ruleset.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeScheduleRequest {
  /**
   * @public
   * <p>The name of the schedule to be described.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeScheduleResponse {
  /**
   * @public
   * <p>The date and time that the schedule was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The identifier (user name) of the user who created the schedule. </p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The name or names of one or more jobs to be run by using the schedule.</p>
   */
  JobNames?: string[];

  /**
   * @public
   * <p>The identifier (user name) of the user who last modified the schedule.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time that the schedule was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The date or dates and time or times when the jobs are to be run for the schedule. For
   *             more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron expressions</a> in the
   *             <i>Glue DataBrew Developer Guide</i>.</p>
   */
  CronExpression?: string;

  /**
   * @public
   * <p>Metadata tags associated with this schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListDatasetsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents a dataset that can be processed by DataBrew.</p>
 */
export interface Dataset {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the dataset.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the dataset.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the dataset was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The unique name of the dataset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat;

  /**
   * @public
   * <p>A set of options that define how DataBrew interprets the data in the dataset.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * @public
   * <p>Information on how DataBrew can find the dataset, in either the Glue Data Catalog
   *             or Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * @public
   * <p>The last modification date and time of the dataset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The location of the data for the dataset, either Amazon S3 or the Glue Data Catalog.</p>
   */
  Source?: Source;

  /**
   * @public
   * <p>A set of options that defines how DataBrew interprets an Amazon S3
   *             path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * @public
   * <p>Metadata tags that have been applied to the dataset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) for the dataset.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface ListDatasetsResponse {
  /**
   * @public
   * <p>A list of datasets that are defined.</p>
   */
  Datasets: Dataset[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobRunsRequest {
  /**
   * @public
   * <p>The name of the job.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents one run of a DataBrew job.</p>
 */
export interface JobRun {
  /**
   * @public
   * <p>The number of times that DataBrew has attempted to run the job.</p>
   */
  Attempt?: number;

  /**
   * @public
   * <p>The date and time when the job completed processing.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The name of the dataset for the job to process.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>A message indicating an error (if any) that was encountered when the job ran.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, during which a job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>The name of the job being processed during this run.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The unique identifier of the job run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The current state of the job run entity itself.</p>
   */
  State?: JobRunState;

  /**
   * @public
   * <p>The current status of Amazon CloudWatch logging for the job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The name of an Amazon CloudWatch log group, where the job writes diagnostic messages
   *             when it runs.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>One or more output artifacts from a job run.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>The set of steps processed by the job.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who initiated the job run. </p>
   */
  StartedBy?: string;

  /**
   * @public
   * <p>The date and time when the job run began. </p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job run.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];
}

/**
 * @public
 */
export interface ListJobRunsResponse {
  /**
   * @public
   * <p>A list of job runs that have occurred for the specified job.</p>
   */
  JobRuns: JobRun[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * @public
   * <p>The name of a dataset. Using this parameter indicates to return only those jobs that
   *             act on the specified dataset.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of a project. Using this parameter indicates to return only those jobs that
   *             are associated with the specified project.</p>
   */
  ProjectName?: string;
}

/**
 * @public
 * <p>Represents all of the attributes of a DataBrew job.</p>
 */
export interface Job {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the job.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the job.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the job was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>A dataset that the job is to process.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job
   *             output. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/encryption-security-configuration.html">Encrypting data
   *                 written by DataBrew jobs</a>
   *          </p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>The unique name of the job.</p>
   */
  Name: string | undefined;

  /**
   * @public
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
  Type?: JobType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the job.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The modification date and time of the job.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The current status of Amazon CloudWatch logging for the job.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of nodes that can be consumed when the job processes data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>One or more artifacts that represent output from running the job.</p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output
   *             from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output
   *             destination for a DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>The name of the project that the job is associated with.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>A set of steps that the job runs.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * @public
   * <p>The unique Amazon Resource Name (ARN) for the job.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role to be assumed for this job.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Metadata tags that have been applied to the job.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default value
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * @public
   * <p>A list of jobs that are defined.</p>
   */
  Jobs: Job[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>Represents all of the attributes of a DataBrew project.</p>
 */
export interface Project {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the project.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The date and time that the project was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who crated the project.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The dataset that the project is to act upon.</p>
   */
  DatasetName?: string;

  /**
   * @public
   * <p>The last modification date and time for the project.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the project.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The unique name of a project.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of a recipe that will be developed during a project session.</p>
   */
  RecipeName: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the project.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The sample size and sampling type to apply to the data. If this parameter isn't
   *             specified, then the sample consists of the first 500 rows from the dataset.</p>
   */
  Sample?: Sample;

  /**
   * @public
   * <p>Metadata tags that have been applied to the project.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this
   *             project.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user that opened the project for use.</p>
   */
  OpenedBy?: string;

  /**
   * @public
   * <p>The date and time when the project was opened.</p>
   */
  OpenDate?: Date;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * @public
   * <p>A list of projects that are defined .</p>
   */
  Projects: Project[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecipesRequest {
  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
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
 * @public
 * <p>Represents one or more actions to be performed on a DataBrew dataset.</p>
 */
export interface Recipe {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the recipe.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the recipe was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the recipe.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The last modification date and time of the recipe.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The name of the project that the recipe is associated with.</p>
   */
  ProjectName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who published the recipe.</p>
   */
  PublishedBy?: string;

  /**
   * @public
   * <p>The date and time when the recipe was published.</p>
   */
  PublishedDate?: Date;

  /**
   * @public
   * <p>The description of the recipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique name for the recipe.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the recipe.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>A list of steps that are defined by the recipe.</p>
   */
  Steps?: RecipeStep[];

  /**
   * @public
   * <p>Metadata tags that have been applied to the recipe.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
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

/**
 * @public
 */
export interface ListRecipesResponse {
  /**
   * @public
   * <p>A list of recipes that are defined.</p>
   */
  Recipes: Recipe[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRecipeVersionsRequest {
  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of the recipe for which to return version information.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListRecipeVersionsResponse {
  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>A list of versions for the specified recipe.</p>
   */
  Recipes: Recipe[] | undefined;
}

/**
 * @public
 */
export interface ListRulesetsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a resource (dataset). Using this parameter
   *             indicates to return only those rulesets that are associated with the specified resource.</p>
   */
  TargetArn?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A token generated by DataBrew that specifies where to continue pagination
   *             if a previous request was truncated. To get the next set of pages, pass in
   *             the NextToken value from the response object of the previous page call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Contains metadata about the ruleset.</p>
 */
export interface RulesetItem {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the ruleset.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the ruleset.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the ruleset was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the ruleset.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The modification date and time of the ruleset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The name of the ruleset.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the ruleset.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The number of rules that are defined in the ruleset.</p>
   */
  RuleCount?: number;

  /**
   * @public
   * <p>Metadata tags that have been applied to the ruleset.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of a resource (dataset) that the ruleset is
   *             associated with.</p>
   */
  TargetArn: string | undefined;
}

/**
 * @public
 */
export interface ListRulesetsResponse {
  /**
   * @public
   * <p>A list of RulesetItem. RulesetItem contains meta data of a ruleset.</p>
   */
  Rulesets: RulesetItem[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchedulesRequest {
  /**
   * @public
   * <p>The name of the job that these schedules apply to.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents one or more dates and times when a job is to run.</p>
 */
export interface Schedule {
  /**
   * @public
   * <p>The ID of the Amazon Web Services account that owns the schedule.</p>
   */
  AccountId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who created the schedule.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the schedule was created.</p>
   */
  CreateDate?: Date;

  /**
   * @public
   * <p>A list of jobs to be run, according to the schedule.</p>
   */
  JobNames?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the user who last modified the schedule.</p>
   */
  LastModifiedBy?: string;

  /**
   * @public
   * <p>The date and time when the schedule was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schedule.</p>
   */
  ResourceArn?: string;

  /**
   * @public
   * <p>The dates and times when the job is to run. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *             expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression?: string;

  /**
   * @public
   * <p>Metadata tags that have been applied to the schedule.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface ListSchedulesResponse {
  /**
   * @public
   * <p>A list of schedules that are defined.</p>
   */
  Schedules: Schedule[] | undefined;

  /**
   * @public
   * <p>A token that you can use in a subsequent call to retrieve the next set of
   *             results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
   *         </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>A list of tags associated with the DataBrew resource.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PublishRecipeRequest {
  /**
   * @public
   * <p>A description of the recipe to be published, for this version of the recipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the recipe to be published.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface PublishRecipeResponse {
  /**
   * @public
   * <p>The name of the recipe that you published.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Represents the data being transformed during an action.</p>
 */
export interface ViewFrame {
  /**
   * @public
   * <p>The starting index for the range of columns to return in the view frame.</p>
   */
  StartColumnIndex: number | undefined;

  /**
   * @public
   * <p>The number of columns to include in the view frame, beginning with the
   *                 <code>StartColumnIndex</code> value and ignoring any columns in the
   *                 <code>HiddenColumns</code> list.</p>
   */
  ColumnRange?: number;

  /**
   * @public
   * <p>A list of columns to hide in the view frame.</p>
   */
  HiddenColumns?: string[];

  /**
   * @public
   * <p>The starting index for the range of rows to return in the view frame.</p>
   */
  StartRowIndex?: number;

  /**
   * @public
   * <p>The number of rows to include in the view frame, beginning with the
   *             <code>StartRowIndex</code> value.</p>
   */
  RowRange?: number;

  /**
   * @public
   * <p>Controls if analytics computation is enabled or disabled. Enabled by default.</p>
   */
  Analytics?: AnalyticsMode;
}

/**
 * @public
 */
export interface SendProjectSessionActionRequest {
  /**
   * @public
   * <p>If true, the result of the recipe step will be returned, but not applied.</p>
   */
  Preview?: boolean;

  /**
   * @public
   * <p>The name of the project to apply the action to.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Represents a single step from a DataBrew recipe to be performed.</p>
   */
  RecipeStep?: RecipeStep;

  /**
   * @public
   * <p>The index from which to preview a step. This index is used to preview the result of
   *             steps that have already been applied, so that the resulting view frame is from earlier
   *             in the view frame stack.</p>
   */
  StepIndex?: number;

  /**
   * @public
   * <p>A unique identifier for an interactive session that's currently open and ready for
   *             work. The action will be performed on this session.</p>
   */
  ClientSessionId?: string;

  /**
   * @public
   * <p>Represents the data being transformed during an action.</p>
   */
  ViewFrame?: ViewFrame;
}

/**
 * @public
 */
export interface SendProjectSessionActionResponse {
  /**
   * @public
   * <p>A message indicating the result of performing the action.</p>
   */
  Result?: string;

  /**
   * @public
   * <p>The name of the project that was affected by the action.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A unique identifier for the action that was performed.</p>
   */
  ActionId?: number;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * @public
   * <p>The name of the job to be run.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * @public
   * <p>A system-generated identifier for this particular job run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StartProjectSessionRequest {
  /**
   * @public
   * <p>The name of the project to act upon.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A value that, if true, enables you to take control of a session, even if a different
   *             client is currently accessing the project.</p>
   */
  AssumeControl?: boolean;
}

/**
 * @public
 */
export interface StartProjectSessionResponse {
  /**
   * @public
   * <p>The name of the project to be acted upon.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A system-generated identifier for the session.</p>
   */
  ClientSessionId?: string;
}

/**
 * @public
 */
export interface StopJobRunRequest {
  /**
   * @public
   * <p>The name of the job to be stopped.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The ID of the job run to be stopped.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopJobRunResponse {
  /**
   * @public
   * <p>The ID of the job run that you stopped.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The DataBrew resource to which tags should be added. The value for this parameter is
   *             an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or
   *             a recipe.</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>One or more tags to be assigned to the resource.</p>
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
   * @public
   * <p>A DataBrew resource from which you want to remove a tag or tags. The value for this
   *             parameter is an Amazon Resource Name (ARN). </p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag keys (names) of one or more tags to be removed.</p>
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
   * @public
   * <p>The name of the dataset to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The file format of a dataset that is created from an Amazon S3 file or folder.</p>
   */
  Format?: InputFormat;

  /**
   * @public
   * <p>Represents a set of options that define the structure of either comma-separated value (CSV),
   *             Excel, or JSON input.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * @public
   * <p>Represents information on how DataBrew can find data, in either the Glue Data Catalog or
   *             Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * @public
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;
}

/**
 * @public
 */
export interface UpdateDatasetResponse {
  /**
   * @public
   * <p>The name of the dataset that you updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProfileJobRequest {
  /**
   * @public
   * <p>Configuration for profile jobs. Used to select columns, do evaluations,
   *             and override default parameters of evaluations. When configuration is null, the
   *             profile job will run with default settings.</p>
   */
  Configuration?: ProfileConfiguration;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>The name of the job to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of compute nodes that DataBrew can use when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>Represents an Amazon S3 location (bucket name, bucket owner, and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * @public
   * <p>List of validation configurations that are applied to the profile job.</p>
   */
  ValidationConfigurations?: ValidationConfiguration[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Sample configuration for Profile Jobs only. Determines the number of rows on which the
   *             Profile job will be executed. If a JobSample value is not provided for profile jobs, the
   *             default value will be used. The default value is CUSTOM_ROWS for the mode parameter and
   *             20000 for the size parameter.</p>
   */
  JobSample?: JobSample;
}

/**
 * @public
 */
export interface UpdateProfileJobResponse {
  /**
   * @public
   * <p>The name of the job that was updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>Represents the sample size and sampling type for DataBrew to use for interactive data
   *             analysis.</p>
   */
  Sample?: Sample;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The name of the project to be updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * @public
   * <p>The date and time that the project was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * @public
   * <p>The name of the project that you updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeRequest {
  /**
   * @public
   * <p>A description of the recipe.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name of the recipe to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>One or more steps to be performed by the recipe. Each step consists of an action, and
   *             the conditions under which the action should succeed.</p>
   */
  Steps?: RecipeStep[];
}

/**
 * @public
 */
export interface UpdateRecipeResponse {
  /**
   * @public
   * <p>The name of the recipe that was updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRecipeJobRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * @public
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
  EncryptionMode?: EncryptionMode;

  /**
   * @public
   * <p>The name of the job to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Enables or disables Amazon CloudWatch logging for the job. If logging is enabled,
   *             CloudWatch writes one log stream for each job run.</p>
   */
  LogSubscription?: LogSubscription;

  /**
   * @public
   * <p>The maximum number of nodes that DataBrew can consume when the job processes
   *             data.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>One or more artifacts that represent the output from running the job. </p>
   */
  Outputs?: Output[];

  /**
   * @public
   * <p>One or more artifacts that represent the Glue Data Catalog output from running the job.</p>
   */
  DataCatalogOutputs?: DataCatalogOutput[];

  /**
   * @public
   * <p>Represents a list of JDBC database output objects which defines the output destination for a
   *             DataBrew recipe job to write into.</p>
   */
  DatabaseOutputs?: DatabaseOutput[];

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * @public
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

/**
 * @public
 */
export interface UpdateRecipeJobResponse {
  /**
   * @public
   * <p>The name of the job that you updated.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetRequest {
  /**
   * @public
   * <p>The name of the ruleset to be updated.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of rules that are defined with the ruleset. A rule includes one or more
   *             checks to be validated on a DataBrew dataset.</p>
   */
  Rules: Rule[] | undefined;
}

/**
 * @public
 */
export interface UpdateRulesetResponse {
  /**
   * @public
   * <p>The name of the updated ruleset.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleRequest {
  /**
   * @public
   * <p>The name or names of one or more jobs to be run for this schedule.</p>
   */
  JobNames?: string[];

  /**
   * @public
   * <p>The date or dates and time or times when the jobs are to be run. For more information,
   *             see <a href="https://docs.aws.amazon.com/databrew/latest/dg/jobs.cron.html">Cron
   *                 expressions</a> in the <i>Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  CronExpression: string | undefined;

  /**
   * @public
   * <p>The name of the schedule to update.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface UpdateScheduleResponse {
  /**
   * @public
   * <p>The name of the schedule that was updated.</p>
   */
  Name: string | undefined;
}

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
export const StartProjectSessionResponseFilterSensitiveLog = (obj: StartProjectSessionResponse): any => ({
  ...obj,
  ...(obj.ClientSessionId && { ClientSessionId: SENSITIVE_STRING }),
});
