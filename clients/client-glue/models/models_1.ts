import {
  Action,
  CatalogEntry,
  Column,
  ColumnStatistics,
  ConfusionMatrix,
  ConnectionInput,
  ConnectionsList,
  CrawlerTargets,
  CsvHeaderOption,
  DataCatalogEncryptionSettings,
  DatabaseInput,
  EncryptionConfiguration,
  ErrorDetail,
  ExecutionProperty,
  GlueTable,
  JobBookmarkEntry,
  JobCommand,
  Language,
  Location,
  MappingEntry,
  NotificationProperty,
  Partition,
  PartitionInput,
  Predicate,
  PrincipalType,
  RecrawlPolicy,
  ResourceShareType,
  ResourceUri,
  SchemaChangePolicy,
  SortDirectionType,
  StorageDescriptor,
  TableIdentifier,
  TableInput,
  TransformEncryption,
  TransformParameters,
  TransformType,
  Trigger,
  UserDefinedFunctionInput,
  WorkerType,
  Workflow,
  WorkflowRun,
} from "./models_0";
import { SENSITIVE_STRING, SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  AreaUnderPRCurve?: number;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Recall?: number;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Precision?: number;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   */
  F1?: number;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   */
  ConfusionMatrix?: ConfusionMatrix;
}

export namespace FindMatchesMetrics {
  export const filterSensitiveLog = (obj: FindMatchesMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   */
  FindMatchesMetrics?: FindMatchesMetrics;

  /**
   * <p>The type of machine learning transform.</p>
   */
  TransformType: TransformType | string | undefined;
}

export namespace EvaluationMetrics {
  export const filterSensitiveLog = (obj: EvaluationMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 */
export interface SchemaColumn {
  /**
   * <p>The type of data in the column.</p>
   */
  DataType?: string;

  /**
   * <p>The name of the column.</p>
   */
  Name?: string;
}

export namespace SchemaColumn {
  export const filterSensitiveLog = (obj: SchemaColumn): any => ({
    ...obj,
  });
}

export enum TransformStatusType {
  DELETING = "DELETING",
  NOT_READY = "NOT_READY",
  READY = "READY",
}

export interface GetMLTransformResponse {
  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

  /**
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace GetMLTransformResponse {
  export const filterSensitiveLog = (obj: GetMLTransformResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   */
  TransformType?: TransformType | string;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   */
  Name?: string;
}

export namespace TransformFilterCriteria {
  export const filterSensitiveLog = (obj: TransformFilterCriteria): any => ({
    ...obj,
  });
}

export enum TransformSortColumnType {
  CREATED = "CREATED",
  LAST_MODIFIED = "LAST_MODIFIED",
  NAME = "NAME",
  STATUS = "STATUS",
  TRANSFORM_TYPE = "TRANSFORM_TYPE",
}

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 */
export interface TransformSortCriteria {
  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;

  /**
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  Column: TransformSortColumnType | string | undefined;
}

export namespace TransformSortCriteria {
  export const filterSensitiveLog = (obj: TransformSortCriteria): any => ({
    ...obj,
  });
}

export interface GetMLTransformsRequest {
  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;

  /**
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace GetMLTransformsRequest {
  export const filterSensitiveLog = (obj: GetMLTransformsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both AWS Glue service role permissions to AWS Glue resources, and Amazon S3 permissions required by the transform. </p>
   *
   * 		       <ul>
   *             <li>
   *                <p>This role needs AWS Glue service role permissions to allow access to resources in AWS Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access AWS Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *
   * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   * 		       <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *         <ul>
   *             <li>
   *                <p>If either <code>NumberOfWorkers</code> or <code>WorkerType</code> is set, then <code>MaxCapacity</code> cannot be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>MaxCapacity</code> is set then neither <code>NumberOfWorkers</code> or <code>WorkerType</code> can be set.</p>
   *             </li>
   *             <li>
   *                <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MaxCapacity</code> and <code>NumberOfWorkers</code> must both be at least 1.</p>
   *             </li>
   *          </ul>
   *
   * 	        <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * <p>A count identifier for the labeling files generated by AWS Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;
}

export namespace MLTransform {
  export const filterSensitiveLog = (obj: MLTransform): any => ({
    ...obj,
  });
}

export interface GetMLTransformsResponse {
  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of machine learning transforms.</p>
   */
  Transforms: MLTransform[] | undefined;
}

export namespace GetMLTransformsResponse {
  export const filterSensitiveLog = (obj: GetMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionRequest {
  /**
   * <p>The name of the partition's table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetPartitionRequest {
  export const filterSensitiveLog = (obj: GetPartitionRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionResponse {
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   */
  Partition?: Partition;
}

export namespace GetPartitionResponse {
  export const filterSensitiveLog = (obj: GetPartitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 */
export interface ConflictException extends __SmithyException, $MetadataBearer {
  name: "ConflictException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConflictException {
  export const filterSensitiveLog = (obj: ConflictException): any => ({
    ...obj,
  });
}

export interface GetPartitionIndexesRequest {
  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   */
  TableName: string | undefined;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;
}

export namespace GetPartitionIndexesRequest {
  export const filterSensitiveLog = (obj: GetPartitionIndexesRequest): any => ({
    ...obj,
  });
}

export enum PartitionIndexStatus {
  ACTIVE = "ACTIVE",
}

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 */
export interface KeySchemaElement {
  /**
   * <p>The type of a partition key.</p>
   */
  Type: string | undefined;

  /**
   * <p>The name of a partition key.</p>
   */
  Name: string | undefined;
}

export namespace KeySchemaElement {
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj,
  });
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The status of the partition index. </p>
   */
  IndexStatus: PartitionIndexStatus | string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;
}

export namespace PartitionIndexDescriptor {
  export const filterSensitiveLog = (obj: PartitionIndexDescriptor): any => ({
    ...obj,
  });
}

export interface GetPartitionIndexesResponse {
  /**
   * <p>A list of index descriptors.</p>
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionIndexesResponse {
  export const filterSensitiveLog = (obj: GetPartitionIndexesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be executed in parallel.</p>
 */
export interface Segment {
  /**
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   */
  SegmentNumber: number | undefined;

  /**
   * <p>The total number of segments.</p>
   */
  TotalSegments: number | undefined;
}

export namespace Segment {
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj,
  });
}

export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>An expression that filters the partitions to be returned.</p>
   *          <p>The expression uses SQL syntax similar to the SQL <code>WHERE</code> filter clause. The
   *       SQL statement parser <a href="http://jsqlparser.sourceforge.net/home.php">JSQLParser</a> parses the expression. </p>
   *          <p>
   *             <i>Operators</i>: The following are the operators that you can use in the
   *         <code>Expression</code> API call:</p>
   *          <dl>
   *             <dt>=</dt>
   *             <dd>
   *                <p>Checks whether the values of the two operands are equal; if yes, then the condition becomes
   *             true.</p>
   *                <p>Example: Assume 'variable a' holds 10 and 'variable b' holds 20. </p>
   *                <p>(a = b) is not true.</p>
   *             </dd>
   *             <dt>< ></dt>
   *             <dd>
   *                <p>Checks whether the values of two operands are equal; if the values are not equal,
   *             then the condition becomes true.</p>
   *                <p>Example: (a < > b) is true.</p>
   *             </dd>
   *             <dt>></dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a > b) is not true.</p>
   *             </dd>
   *             <dt><</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than the value of the right
   *             operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a < b) is true.</p>
   *             </dd>
   *             <dt>>=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is greater than or equal to the value
   *             of the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a >= b) is not true.</p>
   *             </dd>
   *             <dt><=</dt>
   *             <dd>
   *                <p>Checks whether the value of the left operand is less than or equal to the value of
   *             the right operand; if yes, then the condition becomes true.</p>
   *                <p>Example: (a <= b) is true.</p>
   *             </dd>
   *             <dt>AND, OR, IN, BETWEEN, LIKE, NOT, IS NULL</dt>
   *             <dd>
   *                <p>Logical operators.</p>
   *             </dd>
   *          </dl>
   *          <p>
   *             <i>Supported Partition Key Types</i>: The following are the supported
   *       partition keys.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>string</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>date</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>timestamp</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>int</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>bigint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>long</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tinyint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>smallint</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>decimal</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If an invalid type is encountered, an exception is thrown. </p>
   *          <p>The following list shows the valid operators on each type. When you define a crawler, the
   *         <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog
   *       partitions. </p>
   *
   *          <p>
   *             <i>Sample API Call</i>: </p>
   */
  Expression?: string;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionsRequest {
  export const filterSensitiveLog = (obj: GetPartitionsRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionsResponse {
  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of requested partitions.</p>
   */
  Partitions?: Partition[];
}

export namespace GetPartitionsResponse {
  export const filterSensitiveLog = (obj: GetPartitionsResponse): any => ({
    ...obj,
  });
}

export interface GetPlanRequest {
  /**
   * <p>The source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The list of mappings from a source table to target tables.</p>
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   */
  Language?: Language | string;

  /**
   * <p>The parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * <p>The target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *
   * 	        <p>Currently, these key-value pairs are supported:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an AWS Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   * 	              <p>
   *                   <code>--additional-plan-options-map '{"inferSchema":"true"}'</code>
   *                </p>
   * 	           </li>
   *          </ul>
   */
  AdditionalPlanOptionsMap?: { [key: string]: string };
}

export namespace GetPlanRequest {
  export const filterSensitiveLog = (obj: GetPlanRequest): any => ({
    ...obj,
  });
}

export interface GetPlanResponse {
  /**
   * <p>The Scala code to perform the mapping.</p>
   */
  ScalaCode?: string;

  /**
   * <p>A Python script to perform the mapping.</p>
   */
  PythonScript?: string;
}

export namespace GetPlanResponse {
  export const filterSensitiveLog = (obj: GetPlanResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace GetResourcePoliciesRequest {
  export const filterSensitiveLog = (obj: GetResourcePoliciesRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for returning a resource policy.</p>
 */
export interface GluePolicy {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GluePolicy {
  export const filterSensitiveLog = (obj: GluePolicy): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesResponse {
  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   */
  GetResourcePoliciesResponseList?: GluePolicy[];
}

export namespace GetResourcePoliciesResponse {
  export const filterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the AWS Glue resource for the resource policy to be retrieved. For more
   *       information about AWS Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">AWS Glue ARN string pattern</a>
   *          </p>
   */
  ResourceArn?: string;
}

export namespace GetResourcePolicyRequest {
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyResponse {
  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GetResourcePolicyResponse {
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetSecurityConfigurationRequest {
  export const filterSensitiveLog = (obj: GetSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a security configuration.</p>
 */
export interface SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

export namespace SecurityConfiguration {
  export const filterSensitiveLog = (obj: SecurityConfiguration): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationResponse {
  /**
   * <p>The requested security configuration.</p>
   */
  SecurityConfiguration?: SecurityConfiguration;
}

export namespace GetSecurityConfigurationResponse {
  export const filterSensitiveLog = (obj: GetSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace GetSecurityConfigurationsRequest {
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of security configurations.</p>
   */
  SecurityConfigurations?: SecurityConfiguration[];
}

export namespace GetSecurityConfigurationsResponse {
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface GetTableRequest {
  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetTableRequest {
  export const filterSensitiveLog = (obj: GetTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Indicates whether the table has been registered with AWS Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The owner of the table.</p>
   */
  Owner?: string;

  /**
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   * 	        <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   */
  PartitionKeys?: Column[];

  /**
   * <p>The last time that the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The person or entity who created the table.</p>
   */
  CreatedBy?: string;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
   *       be reliable.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>The time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>The name of the database where the table metadata resides.
   *       For Hive compatibility, this must be all lowercase.</p>
   */
  DatabaseName?: string;
}

export namespace Table {
  export const filterSensitiveLog = (obj: Table): any => ({
    ...obj,
  });
}

export interface GetTableResponse {
  /**
   * <p>The <code>Table</code> object that defines the specified table.</p>
   */
  Table?: Table;
}

export namespace GetTableResponse {
  export const filterSensitiveLog = (obj: GetTableResponse): any => ({
    ...obj,
  });
}

export interface GetTablesRequest {
  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   */
  Expression?: string;

  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;
}

export namespace GetTablesRequest {
  export const filterSensitiveLog = (obj: GetTablesRequest): any => ({
    ...obj,
  });
}

export interface GetTablesResponse {
  /**
   * <p>A list of the requested <code>Table</code> objects.</p>
   */
  TableList?: Table[];

  /**
   * <p>A continuation token, present if the current list segment is
   *       not the last.</p>
   */
  NextToken?: string;
}

export namespace GetTablesResponse {
  export const filterSensitiveLog = (obj: GetTablesResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionRequest {
  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   */
  VersionId?: string;

  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;
}

export namespace GetTableVersionRequest {
  export const filterSensitiveLog = (obj: GetTableVersionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a version of a table.</p>
 */
export interface TableVersion {
  /**
   * <p>The table in question.</p>
   */
  Table?: Table;

  /**
   * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;
}

export namespace TableVersion {
  export const filterSensitiveLog = (obj: TableVersion): any => ({
    ...obj,
  });
}

export interface GetTableVersionResponse {
  /**
   * <p>The requested table version.</p>
   */
  TableVersion?: TableVersion;
}

export namespace GetTableVersionResponse {
  export const filterSensitiveLog = (obj: GetTableVersionResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionsRequest {
  /**
   * <p>A continuation token, if this is not the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetTableVersionsRequest {
  export const filterSensitiveLog = (obj: GetTableVersionsRequest): any => ({
    ...obj,
  });
}

export interface GetTableVersionsResponse {
  /**
   * <p>A list of strings identifying available versions of the
   *       specified table.</p>
   */
  TableVersions?: TableVersion[];

  /**
   * <p>A continuation token, if the list of available versions does
   *       not include the last one.</p>
   */
  NextToken?: string;
}

export namespace GetTableVersionsResponse {
  export const filterSensitiveLog = (obj: GetTableVersionsResponse): any => ({
    ...obj,
  });
}

export interface GetTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetTagsResponse {
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj,
  });
}

export interface GetTriggerRequest {
  /**
   * <p>The name of the trigger to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetTriggerRequest {
  export const filterSensitiveLog = (obj: GetTriggerRequest): any => ({
    ...obj,
  });
}

export interface GetTriggerResponse {
  /**
   * <p>The requested trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace GetTriggerResponse {
  export const filterSensitiveLog = (obj: GetTriggerResponse): any => ({
    ...obj,
  });
}

export interface GetTriggersRequest {
  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetTriggersRequest {
  export const filterSensitiveLog = (obj: GetTriggersRequest): any => ({
    ...obj,
  });
}

export interface GetTriggersResponse {
  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of triggers for the specified job.</p>
   */
  Triggers?: Trigger[];
}

export namespace GetTriggersResponse {
  export const filterSensitiveLog = (obj: GetTriggersResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetUserDefinedFunctionRequest {
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 */
export interface UserDefinedFunction {
  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;
}

export namespace UserDefinedFunction {
  export const filterSensitiveLog = (obj: UserDefinedFunction): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionResponse {
  /**
   * <p>The requested function definition.</p>
   */
  UserDefinedFunction?: UserDefinedFunction;
}

export namespace GetUserDefinedFunctionResponse {
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   */
  Pattern: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetUserDefinedFunctionsRequest {
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsRequest): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of requested function definitions.</p>
   */
  UserDefinedFunctions?: UserDefinedFunction[];
}

export namespace GetUserDefinedFunctionsResponse {
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRequest {
  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The name of the workflow to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetWorkflowRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowResponse {
  /**
   * <p>The resource metadata for the workflow.</p>
   */
  Workflow?: Workflow;
}

export namespace GetWorkflowResponse {
  export const filterSensitiveLog = (obj: GetWorkflowResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunRequest {
  /**
   * <p>Name of the workflow being run.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The ID of the workflow run.</p>
   */
  RunId: string | undefined;
}

export namespace GetWorkflowRunRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunResponse {
  /**
   * <p>The requested workflow run metadata.</p>
   */
  Run?: WorkflowRun;
}

export namespace GetWorkflowRunResponse {
  export const filterSensitiveLog = (obj: GetWorkflowRunResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   */
  RunId: string | undefined;
}

export namespace GetWorkflowRunPropertiesRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: { [key: string]: string };
}

export namespace GetWorkflowRunPropertiesResponse {
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsRequest {
  /**
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   */
  Name: string | undefined;
}

export namespace GetWorkflowRunsRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRunsRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsResponse {
  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of workflow run metadata objects.</p>
   */
  Runs?: WorkflowRun[];
}

export namespace GetWorkflowRunsResponse {
  export const filterSensitiveLog = (obj: GetWorkflowRunsResponse): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the AWS account ID.</p>
   */
  CatalogId?: string;
}

export namespace ImportCatalogToGlueRequest {
  export const filterSensitiveLog = (obj: ImportCatalogToGlueRequest): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueResponse {}

export namespace ImportCatalogToGlueResponse {
  export const filterSensitiveLog = (obj: ImportCatalogToGlueResponse): any => ({
    ...obj,
  });
}

export interface ListCrawlersRequest {
  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace ListCrawlersRequest {
  export const filterSensitiveLog = (obj: ListCrawlersRequest): any => ({
    ...obj,
  });
}

export interface ListCrawlersResponse {
  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;

  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   */
  CrawlerNames?: string[];
}

export namespace ListCrawlersResponse {
  export const filterSensitiveLog = (obj: ListCrawlersResponse): any => ({
    ...obj,
  });
}

export interface ListDevEndpointsRequest {
  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListDevEndpointsRequest {
  export const filterSensitiveLog = (obj: ListDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface ListDevEndpointsResponse {
  /**
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   */
  DevEndpointNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListDevEndpointsResponse {
  export const filterSensitiveLog = (obj: ListDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj,
  });
}

export interface ListJobsResponse {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   */
  JobNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListJobsResponse {
  export const filterSensitiveLog = (obj: ListJobsResponse): any => ({
    ...obj,
  });
}

export interface ListMLTransformsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   */
  Sort?: TransformSortCriteria;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListMLTransformsRequest {
  export const filterSensitiveLog = (obj: ListMLTransformsRequest): any => ({
    ...obj,
  });
}

export interface ListMLTransformsResponse {
  /**
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   */
  TransformIds: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListMLTransformsResponse {
  export const filterSensitiveLog = (obj: ListMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface ListTriggersRequest {
  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;
}

export namespace ListTriggersRequest {
  export const filterSensitiveLog = (obj: ListTriggersRequest): any => ({
    ...obj,
  });
}

export interface ListTriggersResponse {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   */
  TriggerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListTriggersResponse {
  export const filterSensitiveLog = (obj: ListTriggersResponse): any => ({
    ...obj,
  });
}

export interface ListWorkflowsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace ListWorkflowsRequest {
  export const filterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
    ...obj,
  });
}

export interface ListWorkflowsResponse {
  /**
   * <p>List of names of workflows in the account.</p>
   */
  Workflows?: string[];

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   */
  NextToken?: string;
}

export namespace ListWorkflowsResponse {
  export const filterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The security configuration to set.</p>
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

export namespace PutDataCatalogEncryptionSettingsRequest {
  export const filterSensitiveLog = (obj: PutDataCatalogEncryptionSettingsRequest): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsResponse {}

export namespace PutDataCatalogEncryptionSettingsResponse {
  export const filterSensitiveLog = (obj: PutDataCatalogEncryptionSettingsResponse): any => ({
    ...obj,
  });
}

export enum EnableHybridValues {
  FALSE = "FALSE",
  TRUE = "TRUE",
}

export enum ExistCondition {
  MUST_EXIST = "MUST_EXIST",
  NONE = "NONE",
  NOT_EXIST = "NOT_EXIST",
}

export interface PutResourcePolicyRequest {
  /**
   * <p>The ARN of the AWS Glue resource for the resource policy to be set. For more
   *       information about AWS Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">AWS Glue ARN string pattern</a>
   *          </p>
   */
  ResourceArn?: string;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call will not depend on the existence of a policy.</p>
   */
  PolicyExistsCondition?: ExistCondition | string;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>Allows you to specify if you want to use both resource-level and account/catalog-level resource policies. A resource-level policy is a policy attached to an individual resource such as a database or a table.</p>
   *
   * 	        <p>The default value of <code>NO</code> indicates that resource-level policies cannot co-exist with an account-level policy. A value of <code>YES</code> means the use of both resource-level and account/catalog-level resource policies is allowed.</p>
   */
  EnableHybrid?: EnableHybridValues | string;

  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string | undefined;
}

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   */
  PolicyHash?: string;
}

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   */
  RunId: string | undefined;

  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   */
  RunProperties: { [key: string]: string } | undefined;
}

export namespace PutWorkflowRunPropertiesRequest {
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesResponse {}

export namespace PutWorkflowRunPropertiesResponse {
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface ResetJobBookmarkRequest {
  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;

  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;
}

export namespace ResetJobBookmarkRequest {
  export const filterSensitiveLog = (obj: ResetJobBookmarkRequest): any => ({
    ...obj,
  });
}

export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace ResetJobBookmarkResponse {
  export const filterSensitiveLog = (obj: ResetJobBookmarkResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export interface ConcurrentRunsExceededException extends __SmithyException, $MetadataBearer {
  name: "ConcurrentRunsExceededException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentRunsExceededException {
  export const filterSensitiveLog = (obj: ConcurrentRunsExceededException): any => ({
    ...obj,
  });
}

/**
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 */
export interface IllegalWorkflowStateException extends __SmithyException, $MetadataBearer {
  name: "IllegalWorkflowStateException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace IllegalWorkflowStateException {
  export const filterSensitiveLog = (obj: IllegalWorkflowStateException): any => ({
    ...obj,
  });
}

export interface ResumeWorkflowRunRequest {
  /**
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   */
  NodeIds: string[] | undefined;

  /**
   * <p>The name of the workflow to resume.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to resume.</p>
   */
  RunId: string | undefined;
}

export namespace ResumeWorkflowRunRequest {
  export const filterSensitiveLog = (obj: ResumeWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface ResumeWorkflowRunResponse {
  /**
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   */
  RunId?: string;

  /**
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   */
  NodeIds?: string[];
}

export namespace ResumeWorkflowRunResponse {
  export const filterSensitiveLog = (obj: ResumeWorkflowRunResponse): any => ({
    ...obj,
  });
}

export enum Comparator {
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_EQUALS = "GREATER_THAN_EQUALS",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_EQUALS = "LESS_THAN_EQUALS",
}

/**
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
  /**
   * <p>The value of the property.</p>
   */
  Value?: string;

  /**
   * <p>The key of the property.</p>
   */
  Key?: string;

  /**
   * <p>The comparator used to compare this property to others.</p>
   */
  Comparator?: Comparator | string;
}

export namespace PropertyPredicate {
  export const filterSensitiveLog = (obj: PropertyPredicate): any => ({
    ...obj,
  });
}

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC",
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
  /**
   * <p>An ascending or descending sort.</p>
   */
  Sort?: Sort | string;

  /**
   * <p>The name of the field on which to sort.</p>
   */
  FieldName?: string;
}

export namespace SortCriterion {
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj,
  });
}

export interface SearchTablesRequest {
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   */
  CatalogId?: string;

  /**
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *
   * 	        <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;

  /**
   * <p>A string used for a text search.</p>
   * 	        <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   */
  SearchText?: string;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *
   * 	        <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   */
  Filters?: PropertyPredicate[];

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   */
  SortCriteria?: SortCriterion[];
}

export namespace SearchTablesRequest {
  export const filterSensitiveLog = (obj: SearchTablesRequest): any => ({
    ...obj,
  });
}

export interface SearchTablesResponse {
  /**
   * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
   */
  TableList?: Table[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

export namespace SearchTablesResponse {
  export const filterSensitiveLog = (obj: SearchTablesResponse): any => ({
    ...obj,
  });
}

export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   */
  Name: string | undefined;
}

export namespace StartCrawlerRequest {
  export const filterSensitiveLog = (obj: StartCrawlerRequest): any => ({
    ...obj,
  });
}

export interface StartCrawlerResponse {}

export namespace StartCrawlerResponse {
  export const filterSensitiveLog = (obj: StartCrawlerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There is no applicable schedule.</p>
 */
export interface NoScheduleException extends __SmithyException, $MetadataBearer {
  name: "NoScheduleException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace NoScheduleException {
  export const filterSensitiveLog = (obj: NoScheduleException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified scheduler is already running.</p>
 */
export interface SchedulerRunningException extends __SmithyException, $MetadataBearer {
  name: "SchedulerRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerRunningException {
  export const filterSensitiveLog = (obj: SchedulerRunningException): any => ({
    ...obj,
  });
}

export interface StartCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler to schedule.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StartCrawlerScheduleRequest {
  export const filterSensitiveLog = (obj: StartCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StartCrawlerScheduleResponse {}

export namespace StartCrawlerScheduleResponse {
  export const filterSensitiveLog = (obj: StartCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface StartExportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   */
  OutputS3Path: string | undefined;
}

export namespace StartExportLabelsTaskRunRequest {
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartExportLabelsTaskRunResponse {
  export const filterSensitiveLog = (obj: StartExportLabelsTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartImportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  ReplaceAllLabels?: boolean;
}

export namespace StartImportLabelsTaskRunRequest {
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartImportLabelsTaskRunResponse {
  export const filterSensitiveLog = (obj: StartImportLabelsTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartJobRunRequest {
  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   *
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *         allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The job arguments specifically for this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The name of the job definition to use.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;
}

export namespace StartJobRunRequest {
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj,
  });
}

export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

export namespace StartJobRunResponse {
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 */
export interface MLTransformNotReadyException extends __SmithyException, $MetadataBearer {
  name: "MLTransformNotReadyException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace MLTransformNotReadyException {
  export const filterSensitiveLog = (obj: MLTransformNotReadyException): any => ({
    ...obj,
  });
}

export interface StartMLEvaluationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartMLEvaluationTaskRunRequest {
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLEvaluationTaskRunResponse {
  export const filterSensitiveLog = (obj: StartMLEvaluationTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   */
  OutputS3Path: string | undefined;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartMLLabelingSetGenerationTaskRunRequest {
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunRequest): any => ({
    ...obj,
  });
}

export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLLabelingSetGenerationTaskRunResponse {
  export const filterSensitiveLog = (obj: StartMLLabelingSetGenerationTaskRunResponse): any => ({
    ...obj,
  });
}

export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

export namespace StartTriggerRequest {
  export const filterSensitiveLog = (obj: StartTriggerRequest): any => ({
    ...obj,
  });
}

export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

export namespace StartTriggerResponse {
  export const filterSensitiveLog = (obj: StartTriggerResponse): any => ({
    ...obj,
  });
}

export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the workflow to start.</p>
   */
  Name: string | undefined;
}

export namespace StartWorkflowRunRequest {
  export const filterSensitiveLog = (obj: StartWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

export namespace StartWorkflowRunResponse {
  export const filterSensitiveLog = (obj: StartWorkflowRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified crawler is not running.</p>
 */
export interface CrawlerNotRunningException extends __SmithyException, $MetadataBearer {
  name: "CrawlerNotRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerNotRunningException {
  export const filterSensitiveLog = (obj: CrawlerNotRunningException): any => ({
    ...obj,
  });
}

/**
 * <p>The specified crawler is stopping.</p>
 */
export interface CrawlerStoppingException extends __SmithyException, $MetadataBearer {
  name: "CrawlerStoppingException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerStoppingException {
  export const filterSensitiveLog = (obj: CrawlerStoppingException): any => ({
    ...obj,
  });
}

export interface StopCrawlerRequest {
  /**
   * <p>Name of the crawler to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopCrawlerRequest {
  export const filterSensitiveLog = (obj: StopCrawlerRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerResponse {}

export namespace StopCrawlerResponse {
  export const filterSensitiveLog = (obj: StopCrawlerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified scheduler is not running.</p>
 */
export interface SchedulerNotRunningException extends __SmithyException, $MetadataBearer {
  name: "SchedulerNotRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerNotRunningException {
  export const filterSensitiveLog = (obj: SchedulerNotRunningException): any => ({
    ...obj,
  });
}

export interface StopCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StopCrawlerScheduleRequest {
  export const filterSensitiveLog = (obj: StopCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface StopCrawlerScheduleResponse {}

export namespace StopCrawlerScheduleResponse {
  export const filterSensitiveLog = (obj: StopCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopTriggerRequest {
  export const filterSensitiveLog = (obj: StopTriggerRequest): any => ({
    ...obj,
  });
}

export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

export namespace StopTriggerResponse {
  export const filterSensitiveLog = (obj: StopTriggerResponse): any => ({
    ...obj,
  });
}

export interface StopWorkflowRunRequest {
  /**
   * <p>The ID of the workflow run to stop.</p>
   */
  RunId: string | undefined;

  /**
   * <p>The name of the workflow to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopWorkflowRunRequest {
  export const filterSensitiveLog = (obj: StopWorkflowRunRequest): any => ({
    ...obj,
  });
}

export interface StopWorkflowRunResponse {}

export namespace StopWorkflowRunResponse {
  export const filterSensitiveLog = (obj: StopWorkflowRunResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the AWS Glue resource to which to add the tags. For more
   *       information about AWS Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">AWS Glue ARN string pattern</a>.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to add to this resource.</p>
   */
  TagsToAdd: { [key: string]: string } | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   */
  TagsToRemove: string[] | undefined;
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

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;
}

export namespace UpdateCsvClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateCsvClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;
}

export namespace UpdateGrokClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateGrokClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       AWS Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath?: string;
}

export namespace UpdateJsonClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateJsonClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification?: string;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;
}

export namespace UpdateXMLClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateXMLClassifierRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassifierRequest {
  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: UpdateXMLClassifierRequest;

  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: UpdateCsvClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: UpdateJsonClassifierRequest;
}

export namespace UpdateClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateClassifierRequest): any => ({
    ...obj,
  });
}

export interface UpdateClassifierResponse {}

export namespace UpdateClassifierResponse {
  export const filterSensitiveLog = (obj: UpdateClassifierResponse): any => ({
    ...obj,
  });
}

/**
 * <p>There was a version conflict.</p>
 */
export interface VersionMismatchException extends __SmithyException, $MetadataBearer {
  name: "VersionMismatchException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace VersionMismatchException {
  export const filterSensitiveLog = (obj: VersionMismatchException): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace UpdateColumnStatisticsForPartitionRequest {
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 */
export interface ColumnStatisticsError {
  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;

  /**
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   */
  ColumnStatistics?: ColumnStatistics;
}

export namespace ColumnStatisticsError {
  export const filterSensitiveLog = (obj: ColumnStatisticsError): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForPartitionResponse {
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForTableRequest {
  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of the column statistics.</p>
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;
}

export namespace UpdateColumnStatisticsForTableRequest {
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   */
  Errors?: ColumnStatisticsError[];
}

export namespace UpdateColumnStatisticsForTableResponse {
  export const filterSensitiveLog = (obj: UpdateColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface UpdateConnectionRequest {
  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * <p>The name of the connection definition to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace UpdateConnectionRequest {
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj,
  });
}

export interface UpdateConnectionResponse {}

export namespace UpdateConnectionResponse {
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerRequest {
  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   */
  Role?: string;

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The AWS Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>A list of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;
}

export namespace UpdateCrawlerRequest {
  export const filterSensitiveLog = (obj: UpdateCrawlerRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerResponse {}

export namespace UpdateCrawlerResponse {
  export const filterSensitiveLog = (obj: UpdateCrawlerResponse): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerScheduleRequest {
  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The name of the crawler whose schedule to update.</p>
   */
  CrawlerName: string | undefined;
}

export namespace UpdateCrawlerScheduleRequest {
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleRequest): any => ({
    ...obj,
  });
}

export interface UpdateCrawlerScheduleResponse {}

export namespace UpdateCrawlerScheduleResponse {
  export const filterSensitiveLog = (obj: UpdateCrawlerScheduleResponse): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseRequest {
  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   */
  DatabaseInput: DatabaseInput | undefined;

  /**
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace UpdateDatabaseRequest {
  export const filterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
    ...obj,
  });
}

export interface UpdateDatabaseResponse {}

export namespace UpdateDatabaseResponse {
  export const filterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
   *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
   *       complete paths separated by a comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;
}

export namespace DevEndpointCustomLibraries {
  export const filterSensitiveLog = (obj: DevEndpointCustomLibraries): any => ({
    ...obj,
  });
}

export interface UpdateDevEndpointRequest {
  /**
   * <p>The map of arguments to add the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   *
   * 	        <p>Valid arguments are:</p>
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>"--enable-glue-datacatalog": ""</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "3"</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"GLUE_PYTHON_VERSION": "2"</code>
   *                </p>
   *             </li>
   *          </ul>
   *
   *          <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  AddArguments?: { [key: string]: string };

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: DevEndpointCustomLibraries;

  /**
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: string[];

  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: string[];

  /**
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: string[];
}

export namespace UpdateDevEndpointRequest {
  export const filterSensitiveLog = (obj: UpdateDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface UpdateDevEndpointResponse {}

export namespace UpdateDevEndpointResponse {
  export const filterSensitiveLog = (obj: UpdateDevEndpointResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPU, 16 GB of memory, 64 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPU, 32 GB of memory, 128 GB disk), and provides 1 executor per worker. We recommend this worker type for memory-intensive jobs.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>Specifies the configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *      of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *            Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *            The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   */
  Role?: string;

  /**
   * <p>The default arguments for this job.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string };

  /**
   * <p>Description of the job being defined.</p>
   */
  Description?: string;

  /**
   * <p>Non-overridable arguments for this job, specified as name-value pairs.</p>
   */
  NonOverridableArguments?: { [key: string]: string };

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The <code>JobCommand</code> that executes this job (required).</p>
   */
  Command?: JobCommand;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;
}

export namespace JobUpdate {
  export const filterSensitiveLog = (obj: JobUpdate): any => ({
    ...obj,
  });
}

export interface UpdateJobRequest {
  /**
   * <p>Specifies the values with which to update the job definition.</p>
   */
  JobUpdate: JobUpdate | undefined;

  /**
   * <p>The name of the job definition to update.</p>
   */
  JobName: string | undefined;
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj,
  });
}

export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export namespace UpdateJobResponse {
  export const filterSensitiveLog = (obj: UpdateJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformRequest {
  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
   * 	        <ul>
   *             <li>
   *                <p>For the <code>Standard</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 50GB disk, and 2 executors per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker provides 4 vCPU, 16 GB of memory and a 64GB disk, and 1 executor per worker.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker provides 8 vCPU, 32 GB of memory and a 128GB disk, and 1 executor per worker.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   */
  Parameters?: TransformParameters;
}

export namespace UpdateMLTransformRequest {
  export const filterSensitiveLog = (obj: UpdateMLTransformRequest): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformResponse {
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

export namespace UpdateMLTransformResponse {
  export const filterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
    ...obj,
  });
}

export interface UpdatePartitionRequest {
  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The new partition object to update the partition to.</p>
   *
   * 	        <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;

  /**
   * <p>List of partition key values that define the partition to update.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;
}

export namespace UpdatePartitionRequest {
  export const filterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePartitionResponse {}

export namespace UpdatePartitionResponse {
  export const filterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   */
  TableInput: TableInput | undefined;
}

export namespace UpdateTableRequest {
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {}

export namespace UpdateTableResponse {
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;
}

export namespace TriggerUpdate {
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj,
  });
}

export interface UpdateTriggerRequest {
  /**
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;

  /**
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;
}

export namespace UpdateTriggerRequest {
  export const filterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
    ...obj,
  });
}

export interface UpdateTriggerResponse {
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace UpdateTriggerResponse {
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace UpdateUserDefinedFunctionRequest {
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionResponse {}

export namespace UpdateUserDefinedFunctionResponse {
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowRequest {
  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;
}

export namespace UpdateWorkflowRequest {
  export const filterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowResponse {
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

export namespace UpdateWorkflowResponse {
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj,
  });
}
