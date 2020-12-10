import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to the specified resource was denied.</p>
 */
export interface AccessDeniedException extends __SmithyException, $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj,
  });
}

export interface BatchDeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe to be modified.</p>
   */
  Name: string | undefined;

  /**
   * <p>An array of version identifiers to be deleted.</p>
   */
  RecipeVersions: string[] | undefined;
}

export namespace BatchDeleteRecipeVersionRequest {
  export const filterSensitiveLog = (obj: BatchDeleteRecipeVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents any errors encountered when attempting to delete multiple recipe versions.</p>
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
   * <p>Errors, if any, that were encountered when deleting the recipe versions.</p>
   */
  Errors?: RecipeVersionErrorDetail[];
}

export namespace BatchDeleteRecipeVersionResponse {
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
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj,
  });
}

/**
 * <p>Options that define how DataBrew will interpret a Microsoft Excel file, when creating a
 *             dataset from that file.</p>
 */
export interface ExcelOptions {
  /**
   * <p>Specifies one or more named sheets in the Excel file, which will be included in the dataset.</p>
   */
  SheetNames?: string[];

  /**
   * <p>Specifies one or more sheet numbers in the Excel file, which will be included in the dataset.</p>
   */
  SheetIndexes?: number[];
}

export namespace ExcelOptions {
  export const filterSensitiveLog = (obj: ExcelOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the JSON-specific options that define how input is to be interpreted by AWS
 *             Glue DataBrew.</p>
 */
export interface JsonOptions {
  /**
   * <p>A value that specifies whether JSON input contains embedded new line
   *             characters.</p>
   */
  MultiLine?: boolean;
}

export namespace JsonOptions {
  export const filterSensitiveLog = (obj: JsonOptions): any => ({
    ...obj,
  });
}

/**
 * <p>Options that define how Microsoft Excel input is to be interpreted by DataBrew.</p>
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
}

export namespace FormatOptions {
  export const filterSensitiveLog = (obj: FormatOptions): any => ({
    ...obj,
  });
}

/**
 * <p>An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.</p>
 */
export interface S3Location {
  /**
   * <p>The S3 bucket name.</p>
   */
  Bucket: string | undefined;

  /**
   * <p>The unique name of the object in the bucket.</p>
   */
  Key?: string;
}

export namespace S3Location {
  export const filterSensitiveLog = (obj: S3Location): any => ({
    ...obj,
  });
}

/**
 * <p>Represents how metadata stored in the AWS Glue Data Catalog is defined in an AWS Glue
 *             DataBrew dataset. </p>
 */
export interface DataCatalogInputDefinition {
  /**
   * <p>The unique identifier of the AWS account that holds the Data Catalog that stores the
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
   * <p>An Amazon location that AWS Glue Data Catalog can use as a temporary directory.</p>
   */
  TempDirectory?: S3Location;
}

export namespace DataCatalogInputDefinition {
  export const filterSensitiveLog = (obj: DataCatalogInputDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data
 *             Catalog or Amazon S3.</p>
 */
export interface Input {
  /**
   * <p>The Amazon S3 location where the data is stored.</p>
   */
  S3InputDefinition?: S3Location;

  /**
   * <p>The AWS Glue Data Catalog parameters for the data.</p>
   */
  DataCatalogInputDefinition?: DataCatalogInputDefinition;
}

export namespace Input {
  export const filterSensitiveLog = (obj: Input): any => ({
    ...obj,
  });
}

export interface CreateDatasetRequest {
  /**
   * <p>The name of the dataset to be created.</p>
   */
  Name: string | undefined;

  /**
   * <p>Options that define how Microsoft Excel input is to be interpreted by DataBrew.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data
   *             Catalog or Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>Metadata tags to apply to this dataset.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateDatasetRequest {
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
  export const filterSensitiveLog = (obj: ServiceQuotaExceededException): any => ({
    ...obj,
  });
}

export enum EncryptionMode {
  SSEKMS = "SSE-KMS",
  SSES3 = "SSE-S3",
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
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to
   *             protect the job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - para><code>SSE-KMS</code> - server-side encryption with AWS KMS-managed keys.</p>
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
   * <p>The name of the job to be created.</p>
   */
  Name: string | undefined;

  /**
   * <p>A value that enables or disables Amazon CloudWatch logging for the current AWS
   *             account. If logging is enabled, CloudWatch writes one log stream for each job
   *             run.</p>
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
   * <p>An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
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

export namespace CreateProfileJobRequest {
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
 * <p>Represents the sample size and sampling type for AWS Glue DataBrew to use for
 *             interactive data analysis.</p>
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
  export const filterSensitiveLog = (obj: Sample): any => ({
    ...obj,
  });
}

export interface CreateProjectRequest {
  /**
   * <p>The name of the dataset to associate this project with.</p>
   */
  DatasetName: string | undefined;

  /**
   * <p>A unique name for the new project.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of an existing recipe to associate with the project.</p>
   */
  RecipeName: string | undefined;

  /**
   * <p>Represents the sample size and sampling type for AWS Glue DataBrew to use for
   *             interactive data analysis.</p>
   */
  Sample?: Sample;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this project.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateProjectRequest {
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
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a transformation and associated parameters that are used to apply a change
 *             to an AWS Glue DataBrew dataset. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-structure.html">Recipe structure</a> and <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-actions-reference.html">ecipe
 *                 actions reference</a> .</p>
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
  export const filterSensitiveLog = (obj: RecipeAction): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an individual condition that evaluates to true or false.</p>
 *         <p>Conditions are used with recipe actions: The action is only performed for column
 *             values where the condition evaluates to true.</p>
 *         <p>If a recipe requires more than one condition, then the recipe must specify multiple
 *                 <code>ConditionExpression</code> elements. Each condition is applied to the rows in
 *             a dataset first, before the recipe action is performed.</p>
 */
export interface ConditionExpression {
  /**
   * <p>A specific condition to apply to a recipe action. For more information, see <a href="https://docs.aws.amazon.com/databrew/latest/dg/recipe-structure.html">Recipe
   *                 structure</a> in the <i>AWS Glue DataBrew Developer
   *             Guide</i>.</p>
   */
  Condition: string | undefined;

  /**
   * <p>A value that the condition must evaluate to for the condition to succeed.</p>
   */
  Value?: string;

  /**
   * <p>A column to apply this condition to, within an AWS Glue DataBrew dataset.</p>
   */
  TargetColumn: string | undefined;
}

export namespace ConditionExpression {
  export const filterSensitiveLog = (obj: ConditionExpression): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a single step to be performed in an AWS Glue DataBrew recipe.</p>
 */
export interface RecipeStep {
  /**
   * <p>The particular action to be performed in the recipe step.</p>
   */
  Action: RecipeAction | undefined;

  /**
   * <p>One or more conditions that must be met, in order for the recipe step to succeed.</p>
   *         <note>
   *             <p>All of the conditions in the array must be met. In other words, all of the
   *                 conditions must be combined using a logical AND operation.</p>
   *         </note>
   */
  ConditionExpressions?: ConditionExpression[];
}

export namespace RecipeStep {
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
   * <p>A unique name for the recipe.</p>
   */
  Name: string | undefined;

  /**
   * <p>An array containing the steps to be performed by the recipe.  Each recipe step consists of one
   *             recipe action and (optionally) an array of condition expressions.</p>
   */
  Steps: RecipeStep[] | undefined;

  /**
   * <p>Metadata tags to apply to this recipe.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateRecipeRequest {
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
  export const filterSensitiveLog = (obj: CreateRecipeResponse): any => ({
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
  XML = "XML",
}

/**
 * <p>Represents individual output from a particular job run.</p>
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
}

export namespace Output {
  export const filterSensitiveLog = (obj: Output): any => ({
    ...obj,
  });
}

/**
 * <p>Represents all of the attributes of an AWS Glue DataBrew recipe.</p>
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
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>A unique name for the job.</p>
   */
  Name: string | undefined;

  /**
   * <p>A value that enables or disables Amazon CloudWatch logging for the current AWS
   *             account. If logging is enabled, CloudWatch writes one log stream for each job
   *             run.</p>
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
  Outputs: Output[] | undefined;

  /**
   * <p>Either the name of an existing project, or a combination of a recipe and a dataset to
   *             associate with the recipe.</p>
   */
  ProjectName?: string;

  /**
   * <p>Represents all of the attributes of an AWS Glue DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>Metadata tags to apply to this job dataset.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export namespace CreateRecipeJobRequest {
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
   * <p>The date or dates and time or times, in <code>cron</code> format, when the jobs are to
   *             be run.</p>
   */
  CronExpression: string | undefined;

  /**
   * <p>Metadata tags to apply to this schedule.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A unique name for the schedule.</p>
   */
  Name: string | undefined;
}

export namespace CreateScheduleRequest {
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
  export const filterSensitiveLog = (obj: DeleteProjectResponse): any => ({
    ...obj,
  });
}

export interface DeleteRecipeVersionRequest {
  /**
   * <p>The name of the recipe to be deleted.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of the recipe to be deleted.</p>
   */
  RecipeVersion: string | undefined;
}

export namespace DeleteRecipeVersionRequest {
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
  export const filterSensitiveLog = (obj: DescribeDatasetRequest): any => ({
    ...obj,
  });
}

export enum Source {
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
   * <p>Options that define how Microsoft Excel input is to be interpreted by DataBrew.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data
   *             Catalog or Amazon S3.</p>
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
   * <p>The location of the data for this dataset, Amazon S3 or the AWS Glue Data
   *             Catalog.</p>
   */
  Source?: Source | string;

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
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
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
   * <p>A value that indicates whether Amazon CloudWatch logging is enabled for this job.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that AWS Glue DataBrew can consume when the job processes
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
   * <p>The DataBrew project associated with this job.</p>
   */
  ProjectName?: string;

  /**
   * <p>Represents all of the attributes of an AWS Glue DataBrew recipe.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The Amazon Resource Name (ARN) of the job.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that was assumed for this
   *             request.</p>
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
}

export namespace DescribeJobResponse {
  export const filterSensitiveLog = (obj: DescribeJobResponse): any => ({
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
   * <p>Represents the sample size and sampling type for AWS Glue DataBrew to use for
   *             interactive data analysis.</p>
   */
  Sample?: Sample;

  /**
   * <p>The ARN of the AWS Identity and Access Management (IAM) role that was assumed for this
   *             request.</p>
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

export namespace DescribeProjectResponse {
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
   * <p>The date or dates and time or times, in <code>cron</code> format, when the jobs are to
   *             be run for the schedule.</p>
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
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListDatasetsRequest {
  export const filterSensitiveLog = (obj: ListDatasetsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a dataset that can be processed by AWS Glue DataBrew.</p>
 */
export interface Dataset {
  /**
   * <p>The ID of the AWS account that owns the dataset.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier (the user name) of the user who created the dataset.</p>
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
   * <p>Options that define how DataBrew interprets the data in the dataset.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Information on how DataBrew can find the dataset, in either the AWS Glue Data Catalog
   *             or Amazon S3.</p>
   */
  Input: Input | undefined;

  /**
   * <p>The last modification date and time of the dataset.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The identifier (the user name) of the user who last modified the dataset.</p>
   */
  LastModifiedBy?: string;

  /**
   * <p>The location of the data for the dataset, either Amazon S3 or the AWS Glue Data
   *             Catalog.</p>
   */
  Source?: Source | string;

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
  export const filterSensitiveLog = (obj: Dataset): any => ({
    ...obj,
  });
}

export interface ListDatasetsResponse {
  /**
   * <p>A list of datasets that are defined in the current AWS account.</p>
   */
  Datasets: Dataset[] | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a previous
   *             request was truncated. To obtain the next set of pages, pass in the NextToken from the
   *             response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListDatasetsResponse {
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
   * <p>A token generated by AWS Glue DataBrew that specifies where to continue pagination if
   *             a previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListJobRunsRequest {
  export const filterSensitiveLog = (obj: ListJobRunsRequest): any => ({
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

/**
 * <p>Represents one run of an AWS Glue DataBrew job.</p>
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
   * <p>The set of steps processed by the job.</p>
   */
  RecipeReference?: RecipeReference;

  /**
   * <p>The identifier (the user name) of the user who initiated the job run. </p>
   */
  StartedBy?: string;

  /**
   * <p>The date and time when the job run began. </p>
   */
  StartedOn?: Date;
}

export namespace JobRun {
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
   * <p>A token generated by DataBrew that specifies where to continue pagination if a previous
   *             request was truncated. To obtain the next set of pages, pass in the NextToken from the
   *             response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListJobRunsResponse {
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
   * <p>The name of a project. Using this parameter indicates to return
   *             only those jobs that are associated with the specified project.</p>
   */
  ProjectName?: string;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents all of the attributes of an AWS Glue DataBrew job.</p>
 */
export interface Job {
  /**
   * <p>The ID of the AWS account that owns the job.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier (the user name) of the user who created the job.</p>
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
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect a job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p>
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
   * <p>The identifier (the user name) of the user who last modified the job.</p>
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
   * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this job.</p>
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
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>A list of jobs that are defined in the current AWS account.</p>
   */
  Jobs: Job[] | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a previous
   *             request was truncated. To obtain the next set of pages, pass in the NextToken from the
   *             response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListProjectsRequest {
  /**
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return in this request. </p>
   */
  MaxResults?: number;
}

export namespace ListProjectsRequest {
  export const filterSensitiveLog = (obj: ListProjectsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents all of the attributes of an AWS Glue DataBrew project.</p>
 */
export interface Project {
  /**
   * <p>The ID of the AWS account that owns the project.</p>
   */
  AccountId?: string;

  /**
   * <p>The date and time that the project was created.</p>
   */
  CreateDate?: Date;

  /**
   * <p>The identifier (the user name) of the user who crated the
   *             project.</p>
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
   * <p>The identifier (user name) of the user who last modified the project.</p>
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
   * <p>The sample size and sampling type to apply to the data.  If this parameter isn't specified, then the sample will consiste of the first 500 rows from the dataset.</p>
   */
  Sample?: Sample;

  /**
   * <p>Metadata tags that have been applied to the project.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The Amazon Resource Name (ARN) of the role that will be assumed for this project.</p>
   */
  RoleArn?: string;

  /**
   * <p>The identifier (the user name) of the user that opened the project for use.</p>
   */
  OpenedBy?: string;

  /**
   * <p>The date and time when the project was opened.</p>
   */
  OpenDate?: Date;
}

export namespace Project {
  export const filterSensitiveLog = (obj: Project): any => ({
    ...obj,
  });
}

export interface ListProjectsResponse {
  /**
   * <p>A list of projects that are defined in the current AWS account.</p>
   */
  Projects: Project[] | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListProjectsResponse {
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
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>A version identifier. Using this parameter indicates to return only those
   *             recipes that have this version identifier.</p>
   */
  RecipeVersion?: string;
}

export namespace ListRecipesRequest {
  export const filterSensitiveLog = (obj: ListRecipesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents one or more actions to be performed on an AWS Glue DataBrew dataset.</p>
 */
export interface Recipe {
  /**
   * <p>The identifier (the user name) of the user who created the recipe.</p>
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
   * <p>The last modification date and time of the recipe.</p>
   */
  LastModifiedDate?: Date;

  /**
   * <p>The name of the project that the recipe is associated with.</p>
   */
  ProjectName?: string;

  /**
   * <p>The identifier (the user name) of the user who published the recipe.</p>
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
   * <p>The identifier for the version for the recipe. </p>
   */
  RecipeVersion?: string;
}

export namespace Recipe {
  export const filterSensitiveLog = (obj: Recipe): any => ({
    ...obj,
  });
}

export interface ListRecipesResponse {
  /**
   * <p>A list of recipes that are defined in the current AWS account.</p>
   */
  Recipes: Recipe[] | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListRecipesResponse {
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
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the recipe for which to return version information.</p>
   */
  Name: string | undefined;
}

export namespace ListRecipeVersionsRequest {
  export const filterSensitiveLog = (obj: ListRecipeVersionsRequest): any => ({
    ...obj,
  });
}

export interface ListRecipeVersionsResponse {
  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;

  /**
   * <p>A list of versions for the specified recipe.</p>
   */
  Recipes: Recipe[] | undefined;
}

export namespace ListRecipeVersionsResponse {
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
   * <p>A pagination token that can be used in a subsequent request.</p>
   */
  NextToken?: string;
}

export namespace ListSchedulesRequest {
  export const filterSensitiveLog = (obj: ListSchedulesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents one or more dates and times when a job is to run.</p>
 */
export interface Schedule {
  /**
   * <p>The ID of the AWS account that owns the schedule.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier (the user name) of the user who created the schedule.</p>
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
   * <p>The identifier (the user name) of the user who last modified the schedule.</p>
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
   * <p>The date(s) and time(s), in <code>cron</code> format, when the job will run.</p>
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
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj,
  });
}

export interface ListSchedulesResponse {
  /**
   * <p>A list of schedules in the current AWS account.</p>
   */
  Schedules: Schedule[] | undefined;

  /**
   * <p>A token generated by DataBrew that specifies where to continue pagination if a
   *             previous request was truncated. To get the next set of pages, pass in the NextToken
   *             value from the response object of the previous page call. </p>
   */
  NextToken?: string;
}

export namespace ListSchedulesResponse {
  export const filterSensitiveLog = (obj: ListSchedulesResponse): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DataBrew resource. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
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
  export const filterSensitiveLog = (obj: PublishRecipeResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the data being being transformed during an AWS Glue DataBrew project session.</p>
 */
export interface ViewFrame {
  /**
   * <p>The starting index for the range of columns to return in the view
   *             frame.</p>
   */
  StartColumnIndex: number | undefined;

  /**
   * <p>The number of columns to include in the view frame, beginning with the
   *             <code>StartColumnIndex</code> value and ignoring any columns in the
   *             <code>HiddenColumns</code> list.</p>
   */
  ColumnRange?: number;

  /**
   * <p>A list of columns to hide in the view frame.</p>
   */
  HiddenColumns?: string[];
}

export namespace ViewFrame {
  export const filterSensitiveLog = (obj: ViewFrame): any => ({
    ...obj,
  });
}

export interface SendProjectSessionActionRequest {
  /**
   * <p>Returns the result of the recipe step, without applying it. The result isn't
   *             added to the view frame stack.</p>
   */
  Preview?: boolean;

  /**
   * <p>The name of the project to apply the action to.</p>
   */
  Name: string | undefined;

  /**
   * <p>Represents a single step to be performed in an AWS Glue DataBrew recipe.</p>
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
   * <p>Represents the data being being transformed during an AWS Glue DataBrew project session.</p>
   */
  ViewFrame?: ViewFrame;
}

export namespace SendProjectSessionActionRequest {
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
   * <p>A value that, if true, enables you to take control of a session, even if a different client is
   *             currently accessing the project.</p>
   */
  AssumeControl?: boolean;
}

export namespace StartProjectSessionRequest {
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
  export const filterSensitiveLog = (obj: StopJobRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The DataBrew resource to which tags should be added. The value for this parameter is
   *             an Amazon Resource Name (ARN). For DataBrew, you can tag a dataset, a job, a project, or a
   *             recipe.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>One or more tags to be assigned to the resource.</p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

export interface UntagResourceRequest {
  /**
   * <p>An DataBrew resource from which you want to remove a tag or tags. The value for this
   *             parameter is an Amazon Resource Name (ARN). </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag keys (names) of one or more tags to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
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
   * <p>Options that define how Microsoft Excel input is to be interpreted by DataBrew.</p>
   */
  FormatOptions?: FormatOptions;

  /**
   * <p>Information on how AWS Glue DataBrew can find data, in either the AWS Glue Data
   *             Catalog or Amazon S3.</p>
   */
  Input: Input | undefined;
}

export namespace UpdateDatasetRequest {
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
  export const filterSensitiveLog = (obj: UpdateDatasetResponse): any => ({
    ...obj,
  });
}

export interface UpdateProfileJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>SSE-S3</code> - Server-side encryption with keys managed by Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  EncryptionMode?: EncryptionMode | string;

  /**
   * <p>The name of the job to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>A value that enables or disables Amazon CloudWatch logging for the current AWS
   *             account. If logging is enabled, CloudWatch writes one log stream for each job
   *             run.</p>
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
   * <p>An Amazon S3 location (bucket name an object key) where DataBrew can read input data, or write output from a job.</p>
   */
  OutputLocation: S3Location | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export namespace UpdateProfileJobRequest {
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
  export const filterSensitiveLog = (obj: UpdateProfileJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateProjectRequest {
  /**
   * <p>Represents the sample size and sampling type for AWS Glue DataBrew to use for
   *             interactive data analysis.</p>
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
  export const filterSensitiveLog = (obj: UpdateRecipeResponse): any => ({
    ...obj,
  });
}

export interface UpdateRecipeJobRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of an encryption key that is used to protect the job.</p>
   */
  EncryptionKeyArn?: string;

  /**
   * <p>The encryption mode for the job, which can be one of the following:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>SSE-KMS</code> - Server-side encryption with AWS KMS-managed keys.</p>
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
   * <p>A value that enables or disables Amazon CloudWatch logging for the current AWS
   *             account. If logging is enabled, CloudWatch writes one log stream for each job
   *             run.</p>
   */
  LogSubscription?: LogSubscription | string;

  /**
   * <p>The maximum number of nodes that DataBrew
   *             can consume when the job processes data.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry the job after a job run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>One or more artifacts that represent the output from running the job. </p>
   */
  Outputs: Output[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the AWS Identity and Access Management (IAM) role to
   *             be assumed for this request.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The job's timeout in minutes. A job that attempts to run longer than this timeout
   *             period ends with a status of <code>TIMEOUT</code>.</p>
   */
  Timeout?: number;
}

export namespace UpdateRecipeJobRequest {
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
   * <p>The date or dates and time or times, in <code>cron</code> format, when the jobs are to
   *             be run.</p>
   */
  CronExpression: string | undefined;

  /**
   * <p>The name of the schedule to update.</p>
   */
  Name: string | undefined;
}

export namespace UpdateScheduleRequest {
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
  export const filterSensitiveLog = (obj: UpdateScheduleResponse): any => ({
    ...obj,
  });
}
