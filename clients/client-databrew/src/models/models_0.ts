import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

/**
 * <p>Access to the specified resource was denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
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

export namespace BatchDeleteRecipeVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteRecipeVersionRequest): any => ({
    ...obj,
  });
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

export namespace RecipeVersionErrorDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipeVersionErrorDetail): any => ({
    ...obj,
  });
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

export namespace BatchDeleteRecipeVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BatchDeleteRecipeVersionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  Message?: string;
}

export namespace ConflictException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more resources can't be found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

/**
 * <p>The input parameters for this request failed validation.</p>
 */
export interface ValidationException extends __SmithyException, $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  Message?: string;
}

export namespace ValidationException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

export enum InputFormat {
  CSV = "CSV",
  EXCEL = "EXCEL",
  JSON = "JSON",
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

export namespace CsvOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsvOptions): any => ({
    ...obj,
  });
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

export namespace ExcelOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExcelOptions): any => ({
    ...obj,
  });
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

export namespace JsonOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonOptions): any => ({
    ...obj,
  });
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

export namespace FormatOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FormatOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
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
}

export namespace S3Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
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
  DatabaseTableName: string | undefined;

  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  TempDirectory?: S3Location;
}

export namespace DatabaseInputDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseInputDefinition): any => ({
    ...obj,
  });
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

export namespace DataCatalogInputDefinition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCatalogInputDefinition): any => ({
    ...obj,
  });
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
}

export namespace Input {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

export enum Order {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

export enum OrderedBy {
  LAST_MODIFIED_DATE = "LAST_MODIFIED_DATE",
}

/**
 * <p>Represents a limit imposed on number of Amazon S3 files that should be selected for a dataset from a connected
 *             Amazon S3 path.</p>
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
   * <p>A criteria to use for Amazon S3 files sorting before their selection. By default uses DESCENDING order,
   *             i.e. most recent files are selected first. Anotherpossible value is ASCENDING.</p>
   */
  Order?: Order | string;
}

export namespace FilesLimit {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilesLimit): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a structure for defining parameter conditions. Supported conditions are described
 *             here: <a href="https://docs-aws.amazon.com/databrew/latest/dg/datasets.multiple-files.html#conditions.for.dynamic.datasets">Supported
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
  ValuesMap: { [key: string]: string } | undefined;
}

export namespace FilterExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FilterExpression): any => ({
    ...obj,
  });
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

export namespace DatetimeOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatetimeOptions): any => ({
    ...obj,
  });
}

export enum ParameterType {
  Datetime = "Datetime",
  Number = "Number",
  String = "String",
}

/**
 * <p>Represents a dataset paramater that defines type and conditions for a parameter in the Amazon S3
 *             path of the dataset.</p>
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

export namespace DatasetParameter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatasetParameter): any => ({
    ...obj,
  });
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
  Parameters?: { [key: string]: DatasetParameter };
}

export namespace PathOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PathOptions): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetRequest): any => ({
    ...obj,
  });
}

export interface CreateDatasetResponse {
  /**
   * <p>The name of the dataset that you created.</p>
   */
  Name: string | undefined;
}

export namespace CreateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateDatasetResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A service quota is exceeded.</p>
 */
export interface ServiceQuotaExceededException extends __SmithyException, $MetadataBearer {
  name: "ServiceQuotaExceededException";
  $fault: "client";
  Message?: string;
}

export namespace ServiceQuotaExceededException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>Selector of a column from a dataset for profile job configuration. One selector includes either a column name or a regular
 *             expression.</p>
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

export namespace ColumnSelector {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnSelector): any => ({
    ...obj,
  });
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
  Parameters: { [key: string]: string } | undefined;
}

export namespace StatisticOverride {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatisticOverride): any => ({
    ...obj,
  });
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

export namespace StatisticsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatisticsConfiguration): any => ({
    ...obj,
  });
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

export namespace ColumnStatisticsConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatisticsConfiguration): any => ({
    ...obj,
  });
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
}

export namespace ProfileConfiguration {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ProfileConfiguration): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>FULL_DATASET - The profile job is run on the entire dataset.</p>
   *             </li>
   *             <li>
   *                 <p>CUSTOM_ROWS - The profile job is run on the number of rows specified in the
   *                     <code>Size</code> parameter.</p>
   *             </li>
   *          </ul>
   */
  Mode?: SampleMode | string;

  /**
   * <p>The <code>Size</code> parameter is only required when the mode is CUSTOM_ROWS. The
   *             profile job is run on the specified number of rows. The maximum value for size is
   *             Long.MAX_VALUE.</p>
   *         <p>Long.MAX_VALUE = 9223372036854775807</p>
   */
  Size?: number;
}

export namespace JobSample {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobSample): any => ({
    ...obj,
  });
}

export enum LogSubscription {
  DISABLE = "DISABLE",
  ENABLE = "ENABLE",
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - <code>SSE-KMS</code> - Server-side encryption with
   *                     KMS-managed keys.</p>
   *             </li>
   *             <li>
   *                 <p>
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
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
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
   * <p>The Amazon Resource Name (ARN) of the Identity and Access Management (IAM) role to
   *             be assumed when DataBrew runs the job.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job.</p>
   */
  Tags?: { [key: string]: string };

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

export namespace CreateProfileJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProfileJobRequest): any => ({
    ...obj,
  });
}

export interface CreateProfileJobResponse {
  /**
   * <p>The name of the job that was created.</p>
   */
  Name: string | undefined;
}

export namespace CreateProfileJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProfileJobResponse): any => ({
    ...obj,
  });
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

export namespace Sample {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Sample): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectRequest): any => ({
    ...obj,
  });
}

export interface CreateProjectResponse {
  /**
   * <p>The name of the project that you created.</p>
   */
  Name: string | undefined;
}

export namespace CreateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateProjectResponse): any => ({
    ...obj,
  });
}

/**
 * <p>An internal service failure occurred.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerException {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
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
  Parameters?: { [key: string]: string };
}

export namespace RecipeAction {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipeAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *         <p>Conditions are used with recipe actions. The action is only performed for column values where the
 *             condition evaluates to true.</p>
 *         <p>If a recipe requires more than one condition, then the recipe must specify multiple
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

export namespace ConditionExpression {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConditionExpression): any => ({
    ...obj,
  });
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
   *         <note>
   *             <p>All of the conditions in the array must be met. In other words, all of the
   *                 conditions must be combined using a logical AND operation.</p>
   *         </note>
   */
  ConditionExpressions?: ConditionExpression[];
}

export namespace RecipeStep {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipeStep): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };
}

export namespace CreateRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecipeRequest): any => ({
    ...obj,
  });
}

export interface CreateRecipeResponse {
  /**
   * <p>The name of the recipe that you created.</p>
   */
  Name: string | undefined;
}

export namespace CreateRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecipeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents options that specify how and where DataBrew writes the database output generated by recipe
 *             jobs.</p>
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

export namespace DatabaseTableOutputOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseTableOutputOptions): any => ({
    ...obj,
  });
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

export namespace DatabaseOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DatabaseOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Represents options that specify how and where DataBrew writes the Amazon S3 output generated by
 *             recipe jobs.</p>
 */
export interface S3TableOutputOptions {
  /**
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can write output
   *             from a job.</p>
   */
  Location: S3Location | undefined;
}

export namespace S3TableOutputOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: S3TableOutputOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Represents options that specify how and where in the Glue Data Catalog DataBrew
 *             writes the output generated by recipe jobs.</p>
 */
export interface DataCatalogOutput {
  /**
   * <p>The unique identifier of the Amazon Web Services account that holds the Data Catalog that stores the data.</p>
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
   * <p>Represents options that specify how and where DataBrew writes the Amazon S3 output generated
   *             by recipe jobs.</p>
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

export namespace DataCatalogOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCatalogOutput): any => ({
    ...obj,
  });
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

export namespace CsvOutputOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsvOutputOptions): any => ({
    ...obj,
  });
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

export namespace OutputFormatOptions {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OutputFormatOptions): any => ({
    ...obj,
  });
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
}

export namespace Output {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
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

export namespace RecipeReference {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RecipeReference): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                 <p>
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
  Tags?: { [key: string]: string };

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export namespace CreateRecipeJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecipeJobRequest): any => ({
    ...obj,
  });
}

export interface CreateRecipeJobResponse {
  /**
   * <p>The name of the job that you created.</p>
   */
  Name: string | undefined;
}

export namespace CreateRecipeJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRecipeJobResponse): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>A unique name for the schedule. Valid characters are alphanumeric (A-Z, a-z, 0-9),
   *             hyphen (-), period (.), and space.</p>
   */
  Name: string | undefined;
}

export namespace CreateScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduleRequest): any => ({
    ...obj,
  });
}

export interface CreateScheduleResponse {
  /**
   * <p>The name of the schedule that was created.</p>
   */
  Name: string | undefined;
}

export namespace CreateScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateScheduleResponse): any => ({
    ...obj,
  });
}

export interface DeleteDatasetRequest {
  /**
   * <p>The name of the dataset to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatasetResponse {
  /**
   * <p>The name of the dataset that you deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatasetResponse): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>The name of the job to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj,
  });
}

export interface DeleteJobResponse {
  /**
   * <p>The name of the job that you deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteProjectRequest {
  /**
   * <p>The name of the project to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectRequest): any => ({
    ...obj,
  });
}

export interface DeleteProjectResponse {
  /**
   * <p>The name of the project that you deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteProjectResponse): any => ({
    ...obj,
  });
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

export namespace DeleteRecipeVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecipeVersionRequest): any => ({
    ...obj,
  });
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

export namespace DeleteRecipeVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRecipeVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteScheduleRequest {
  /**
   * <p>The name of the schedule to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleRequest): any => ({
    ...obj,
  });
}

export interface DeleteScheduleResponse {
  /**
   * <p>The name of the schedule that was deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteScheduleResponse): any => ({
    ...obj,
  });
}

export interface DescribeDatasetRequest {
  /**
   * <p>The name of the dataset to be described.</p>
   */
  Name: string | undefined;
}

export namespace DescribeDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
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
   * <p>The date and time that the dataset was last modified.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The identifier (user name) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The location of the data for this dataset, Amazon S3 or the Glue Data Catalog.</p>
   */
  Source?: Source | string;

  /**
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * <p>Metadata tags associated with this dataset.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the dataset.</p>
   */
  ResourceArn?: string;
}

export namespace DescribeDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeDatasetResponse): any => ({
    ...obj,
  });
}

export interface DescribeJobRequest {
  /**
   * <p>The name of the job to be described.</p>
   */
  Name: string | undefined;
}

export namespace DescribeJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobRequest): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                 <p>
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PROFILE</code> - The job analyzes the dataset to determine its size,
   *                     data types, data distribution, and more.</p>
   *             </li>
   *             <li>
   *                 <p>
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
  Tags?: { [key: string]: string };

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

export namespace DescribeJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobResponse): any => ({
    ...obj,
  });
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

export namespace DescribeJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobRunRequest): any => ({
    ...obj,
  });
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

export namespace DescribeJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeJobRunResponse): any => ({
    ...obj,
  });
}

export interface DescribeProjectRequest {
  /**
   * <p>The name of the project to be described.</p>
   */
  Name: string | undefined;
}

export namespace DescribeProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>Describes the current state of the session:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PROVISIONING</code> - allocating resources for the session.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>INITIALIZING</code> - getting the session ready for first use.</p>
   *             </li>
   *             <li>
   *                 <p>
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

export namespace DescribeProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeProjectResponse): any => ({
    ...obj,
  });
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

export namespace DescribeRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecipeRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The ARN of the recipe.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The recipe version identifier.</p>
   */
  RecipeVersion?: string;
}

export namespace DescribeRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeRecipeResponse): any => ({
    ...obj,
  });
}

export interface DescribeScheduleRequest {
  /**
   * <p>The name of the schedule to be described.</p>
   */
  Name: string | undefined;
}

export namespace DescribeScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

export namespace DescribeScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DescribeScheduleResponse): any => ({
    ...obj,
  });
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

export namespace ListDatasetsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
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
   * <p>A set of options that defines how DataBrew interprets an Amazon S3 path of the dataset.</p>
   */
  PathOptions?: PathOptions;

  /**
   * <p>Metadata tags that have been applied to the dataset.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The unique Amazon Resource Name (ARN) for the dataset.</p>
   */
  ResourceArn?: string;
}

export namespace Dataset {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
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

export namespace ListDatasetsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDatasetsResponse): any => ({
    ...obj,
  });
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

export namespace ListJobRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobRunsRequest): any => ({
    ...obj,
  });
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
}

export namespace JobRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobRun): any => ({
    ...obj,
  });
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

export namespace ListJobRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobRunsResponse): any => ({
    ...obj,
  });
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

export namespace ListJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                 <p>
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>PROFILE</code> - A job to analyze a dataset, to determine its size, data
   *                     types, data distribution, and more.</p>
   *             </li>
   *             <li>
   *                 <p>
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
  Tags?: { [key: string]: string };

  /**
   * <p>A sample configuration for profile jobs only, which determines the number of rows on which the
   *             profile job is run. If a <code>JobSample</code> value isn't provided, the default value
   *             is used. The default value is CUSTOM_ROWS for the mode parameter and 20,000 for the
   *             size parameter.</p>
   */
  JobSample?: JobSample;
}

export namespace Job {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
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

export namespace ListJobsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
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

export namespace ListProjectsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

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

export namespace Project {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
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

export namespace ListProjectsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListProjectsResponse): any => ({
    ...obj,
  });
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
   *         <p>Valid values: <code>LATEST_WORKING</code> | <code>LATEST_PUBLISHED</code>
   *          </p>
   */
  RecipeVersion?: string;
}

export namespace ListRecipesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipesRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The identifier for the version for the recipe. Must be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>Numeric version (<code>X.Y</code>) - <code>X</code> and <code>Y</code> stand
   *                     for major and minor version numbers. The maximum length of each is 6 digits, and
   *                     neither can be negative values. Both <code>X</code> and <code>Y</code> are
   *                     required, and "0.0" isn't a valid version.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LATEST_WORKING</code> - the most recent valid version being developed in
   *                     a DataBrew project.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>LATEST_PUBLISHED</code> - the most recent published version.</p>
   *             </li>
   *          </ul>
   */
  RecipeVersion?: string;
}

export namespace Recipe {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Recipe): any => ({
    ...obj,
  });
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

export namespace ListRecipesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipesResponse): any => ({
    ...obj,
  });
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

export namespace ListRecipeVersionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipeVersionsRequest): any => ({
    ...obj,
  });
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

export namespace ListRecipeVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRecipeVersionsResponse): any => ({
    ...obj,
  });
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

export namespace ListSchedulesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchedulesRequest): any => ({
    ...obj,
  });
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
  Tags?: { [key: string]: string };

  /**
   * <p>The name of the schedule.</p>
   */
  Name: string | undefined;
}

export namespace Schedule {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
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

export namespace ListSchedulesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchedulesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource.
   *         </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags associated with the DataBrew resource.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
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

export namespace PublishRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishRecipeRequest): any => ({
    ...obj,
  });
}

export interface PublishRecipeResponse {
  /**
   * <p>The name of the recipe that you published.</p>
   */
  Name: string | undefined;
}

export namespace PublishRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PublishRecipeResponse): any => ({
    ...obj,
  });
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
}

export namespace ViewFrame {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ViewFrame): any => ({
    ...obj,
  });
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

export namespace SendProjectSessionActionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendProjectSessionActionRequest): any => ({
    ...obj,
  });
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

export namespace SendProjectSessionActionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendProjectSessionActionResponse): any => ({
    ...obj,
  });
}

export interface StartJobRunRequest {
  /**
   * <p>The name of the job to be run.</p>
   */
  Name: string | undefined;
}

export namespace StartJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj,
  });
}

export interface StartJobRunResponse {
  /**
   * <p>A system-generated identifier for this particular job run.</p>
   */
  RunId: string | undefined;
}

export namespace StartJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj,
  });
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

export namespace StartProjectSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartProjectSessionRequest): any => ({
    ...obj,
  });
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

export namespace StartProjectSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartProjectSessionResponse): any => ({
    ...obj,
  });
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

export namespace StopJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopJobRunRequest): any => ({
    ...obj,
  });
}

export interface StopJobRunResponse {
  /**
   * <p>The ID of the job run that you stopped.</p>
   */
  RunId: string | undefined;
}

export namespace StopJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StopJobRunResponse): any => ({
    ...obj,
  });
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
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UpdateDatasetRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatasetResponse {
  /**
   * <p>The name of the dataset that you updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateDatasetResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateDatasetResponse): any => ({
    ...obj,
  });
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
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                 <p>
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
   * <p>Represents an Amazon S3 location (bucket name and object key) where DataBrew can read
   *             input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

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

export namespace UpdateProfileJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProfileJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateProfileJobResponse {
  /**
   * <p>The name of the job that was updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateProfileJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProfileJobResponse): any => ({
    ...obj,
  });
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

export namespace UpdateProjectRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectRequest): any => ({
    ...obj,
  });
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

export namespace UpdateProjectResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateProjectResponse): any => ({
    ...obj,
  });
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

export namespace UpdateRecipeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecipeRequest): any => ({
    ...obj,
  });
}

export interface UpdateRecipeResponse {
  /**
   * <p>The name of the recipe that was updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateRecipeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecipeResponse): any => ({
    ...obj,
  });
}

export interface UpdateRecipeJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the
   *             job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with keys managed by KMS.</p>
   *             </li>
   *             <li>
   *                 <p>
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

export namespace UpdateRecipeJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecipeJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateRecipeJobResponse {
  /**
   * <p>The name of the job that you updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateRecipeJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRecipeJobResponse): any => ({
    ...obj,
  });
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

export namespace UpdateScheduleRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateScheduleResponse {
  /**
   * <p>The name of the schedule that was updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateScheduleResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateScheduleResponse): any => ({
    ...obj,
  });
}
