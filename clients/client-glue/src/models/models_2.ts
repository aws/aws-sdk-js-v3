// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";

import {
  AuditContext,
  AuthenticationConfigurationInput,
  AuthenticationConfigurationInputFilterSensitiveLog,
  CrawlerTargets,
  CustomEntityType,
  DataSource,
  ErrorDetail,
  ExecutionClass,
  GlueTable,
  InclusionAnnotationValue,
  LakeFormationConfiguration,
  LineageConfiguration,
  NotificationProperty,
  Partition,
  PartitionValueList,
  RecrawlPolicy,
  SchemaChangePolicy,
  SchemaId,
  StatisticAnnotation,
  TableOptimizer,
  TableOptimizerRun,
  TableOptimizerType,
  TimestampedInclusionAnnotation,
  Trigger,
  WorkerType,
  Workflow,
  WorkflowRun,
} from "./models_0";

import {
  CatalogEntry,
  ColumnStatistics,
  Compatibility,
  ConnectionInput,
  ConnectionInputFilterSensitiveLog,
  ConnectionPropertyKey,
  ConnectionType,
  CsvHeaderOption,
  CsvSerdeOption,
  DatabaseInput,
  DataCatalogEncryptionSettings,
  DataFormat,
  DataQualityEvaluationRunAdditionalRunOptions,
  DataQualityTargetTable,
  EncryptionConfiguration,
  ExportLabelsTaskRunProperties,
  FindMatchesTaskRunProperties,
  ImportLabelsTaskRunProperties,
  JobBookmarkEntry,
  LabelingSetGenerationTaskRunProperties,
  Language,
  Location,
  MappingEntry,
  Permission,
  PrincipalType,
  ProfileConfiguration,
  RegistryId,
  RegistryStatus,
  ResourceShareType,
  ResourceUri,
  SchemaStatus,
  SchemaVersionStatus,
  Session,
  TaskStatusType,
  TaskType,
  TransformEncryption,
  TransformParameters,
  TransformType,
  ViewDialect,
} from "./models_1";

/**
 * <p>The configuration properties for the task run.</p>
 * @public
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskType?: TaskType;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   * @public
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   * @public
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   * @public
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   * @public
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
}

/**
 * @public
 */
export interface GetMLTaskRunResponse {
  /**
   * <p>The unique identifier of the task run.</p>
   * @public
   */
  TransformId?: string;

  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  TaskRunId?: string;

  /**
   * <p>The status for this task run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   * @public
   */
  LogGroupName?: string;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   * @public
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The error strings that are associated with the task run.</p>
   * @public
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this task run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when this task run was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time when this task run was completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number;
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>The type of task run.</p>
   * @public
   */
  TaskRunType?: TaskType;

  /**
   * <p>The current status of the task run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>Filter on task runs started before this date.</p>
   * @public
   */
  StartedBefore?: Date;

  /**
   * <p>Filter on task runs started after this date.</p>
   * @public
   */
  StartedAfter?: Date;
}

/**
 * @public
 * @enum
 */
export const TaskRunSortColumnType = {
  STARTED: "STARTED",
  STATUS: "STATUS",
  TASK_RUN_TYPE: "TASK_RUN_TYPE",
} as const;

/**
 * @public
 */
export type TaskRunSortColumnType = (typeof TaskRunSortColumnType)[keyof typeof TaskRunSortColumnType];

/**
 * @public
 * @enum
 */
export const SortDirectionType = {
  ASCENDING: "ASCENDING",
  DESCENDING: "DESCENDING",
} as const;

/**
 * @public
 */
export type SortDirectionType = (typeof SortDirectionType)[keyof typeof SortDirectionType];

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 * @public
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  Column: TaskRunSortColumnType | undefined;

  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. </p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   * @public
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   * @public
   */
  Sort?: TaskRunSortCriteria;
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 * @public
 */
export interface TaskRun {
  /**
   * <p>The unique identifier for the transform.</p>
   * @public
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for this task run.</p>
   * @public
   */
  TaskRunId?: string;

  /**
   * <p>The current status of the requested task run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   * @public
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   * @public
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The list of error strings associated with this task run.</p>
   * @public
   */
  ErrorString?: string;

  /**
   * <p>The date and time that this task run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   * @public
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   * @public
   */
  ExecutionTime?: number;
}

/**
 * @public
 */
export interface GetMLTaskRunsResponse {
  /**
   * <p>A list of task runs that are associated with the transform.</p>
   * @public
   */
  TaskRuns?: TaskRun[];

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * <p>A structure containing the column name and column importance score for a column. </p>
 *          <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 * @public
 */
export interface ColumnImportance {
  /**
   * <p>The name of a column.</p>
   * @public
   */
  ColumnName?: string;

  /**
   * <p>The column importance score for the column, as a decimal.</p>
   * @public
   */
  Importance?: number;
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 * @public
 */
export interface ConfusionMatrix {
  /**
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   * @public
   */
  NumTruePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalsePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   * @public
   */
  NumTrueNegatives?: number;

  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   * @public
   */
  NumFalseNegatives?: number;
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 * @public
 */
export interface FindMatchesMetrics {
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  AreaUnderPRCurve?: number;

  /**
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Precision?: number;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   * @public
   */
  Recall?: number;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   * @public
   */
  F1?: number;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   * @public
   */
  ConfusionMatrix?: ConfusionMatrix;

  /**
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   * @public
   */
  ColumnImportances?: ColumnImportance[];
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 * @public
 */
export interface EvaluationMetrics {
  /**
   * <p>The type of machine learning transform.</p>
   * @public
   */
  TransformType: TransformType | undefined;

  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   * @public
   */
  FindMatchesMetrics?: FindMatchesMetrics;
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 * @public
 */
export interface SchemaColumn {
  /**
   * <p>The name of the column.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of data in the column.</p>
   * @public
   */
  DataType?: string;
}

/**
 * @public
 * @enum
 */
export const TransformStatusType = {
  DELETING: "DELETING",
  NOT_READY: "NOT_READY",
  READY: "READY",
} as const;

/**
 * @public
 */
export type TransformStatusType = (typeof TransformStatusType)[keyof typeof TransformStatusType];

/**
 * @public
 */
export interface GetMLTransformResponse {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   * @public
   */
  TransformId?: string;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the transform.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType;

  /**
   * <p>The date and time when the transform was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the transform was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   * @public
   */
  Parameters?: TransformParameters;

  /**
   * <p>The latest evaluation metrics.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>The number of labels available for this transform.</p>
   * @public
   */
  LabelCount?: number;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when this task runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   * @public
   */
  MaxRetries?: number;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 * @public
 */
export interface TransformFilterCriteria {
  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   * @public
   */
  TransformType?: TransformType;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   * @public
   */
  Status?: TransformStatusType;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The time and date before which the transforms were created.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>The time and date after which the transforms were created.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[];
}

/**
 * @public
 * @enum
 */
export const TransformSortColumnType = {
  CREATED: "CREATED",
  LAST_MODIFIED: "LAST_MODIFIED",
  NAME: "NAME",
  STATUS: "STATUS",
  TRANSFORM_TYPE: "TRANSFORM_TYPE",
} as const;

/**
 * @public
 */
export type TransformSortColumnType = (typeof TransformSortColumnType)[keyof typeof TransformSortColumnType];

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 * @public
 */
export interface TransformSortCriteria {
  /**
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  Column: TransformSortColumnType | undefined;

  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   * @public
   */
  SortDirection: SortDirectionType | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The filter transformation criteria.</p>
   * @public
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>The sorting criteria.</p>
   * @public
   */
  Sort?: TransformSortCriteria;
}

/**
 * <p>A structure for a machine learning transform.</p>
 * @public
 */
export interface MLTransform {
  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   * @public
   */
  TransformId?: string;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The current status of the machine learning transform.</p>
   * @public
   */
  Status?: TransformStatusType;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   * @public
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   * @public
   */
  Parameters?: TransformParameters;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   * @public
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   * @public
   */
  LabelCount?: number;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   * @public
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *          <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   * @public
   */
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   * @public
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
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
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   * @public
   */
  MaxCapacity?: number;

  /**
   * <p>The type of predefined worker that is allocated when a task of this transform runs. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   *          <p>
   *             <code>MaxCapacity</code> is a mutually exclusive option with <code>NumberOfWorkers</code> and <code>WorkerType</code>.</p>
   *          <ul>
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
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   * @public
   */
  MaxRetries?: number;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   * @public
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * @public
 */
export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   * @public
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partition's table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   * @public
   */
  PartitionValues: string[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionResponse {
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   * @public
   */
  Partition?: Partition;
}

/**
 * @public
 */
export interface GetPartitionIndexesRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const BackfillErrorCode = {
  ENCRYPTED_PARTITION_ERROR: "ENCRYPTED_PARTITION_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INVALID_PARTITION_TYPE_DATA_ERROR: "INVALID_PARTITION_TYPE_DATA_ERROR",
  MISSING_PARTITION_VALUE_ERROR: "MISSING_PARTITION_VALUE_ERROR",
  UNSUPPORTED_PARTITION_CHARACTER_ERROR: "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
} as const;

/**
 * @public
 */
export type BackfillErrorCode = (typeof BackfillErrorCode)[keyof typeof BackfillErrorCode];

/**
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
 *          <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p>
 *          <ul>
 *             <li>
 *                <p>EncryptedPartitionError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>InvalidPartitionTypeDataError: The partition value doesn't match the data type for that partition column.</p>
 *             </li>
 *             <li>
 *                <p>MissingPartitionValueError: The partitions are encrypted.</p>
 *             </li>
 *             <li>
 *                <p>UnsupportedPartitionCharacterError: Characters inside the partition value are not supported. For example: U+0000 , U+0001, U+0002.</p>
 *             </li>
 *             <li>
 *                <p>InternalError: Any error which does not belong to other error codes.</p>
 *             </li>
 *          </ul>
 * @public
 */
export interface BackfillError {
  /**
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   * @public
   */
  Code?: BackfillErrorCode;

  /**
   * <p>A list of a limited number of partitions in the response.</p>
   * @public
   */
  Partitions?: PartitionValueList[];
}

/**
 * @public
 * @enum
 */
export const PartitionIndexStatus = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type PartitionIndexStatus = (typeof PartitionIndexStatus)[keyof typeof PartitionIndexStatus];

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 * @public
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a partition key.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The type of a partition key.</p>
   * @public
   */
  Type: string | undefined;
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 * @public
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The name of the partition index.</p>
   * @public
   */
  IndexName: string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   * @public
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The status of the partition index. </p>
   *          <p>The possible statuses are:</p>
   *          <ul>
   *             <li>
   *                <p>CREATING: The index is being created. When an index is in a CREATING state, the index or its table cannot be deleted.</p>
   *             </li>
   *             <li>
   *                <p>ACTIVE: The index creation succeeds.</p>
   *             </li>
   *             <li>
   *                <p>FAILED: The index creation fails. </p>
   *             </li>
   *             <li>
   *                <p>DELETING: The index is deleted from the list of indexes.</p>
   *             </li>
   *          </ul>
   * @public
   */
  IndexStatus: PartitionIndexStatus | undefined;

  /**
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   * @public
   */
  BackfillErrors?: BackfillError[];
}

/**
 * @public
 */
export interface GetPartitionIndexesResponse {
  /**
   * <p>A list of index descriptors.</p>
   * @public
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
 * @public
 */
export interface Segment {
  /**
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   * @public
   */
  SegmentNumber: number | undefined;

  /**
   * <p>The total number of segments.</p>
   * @public
   */
  TotalSegments: number | undefined;
}

/**
 * @public
 */
export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

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
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   *          <p>The following list shows the valid operators on each type. When you define a crawler, the
   *         <code>partitionKey</code> type is created as a <code>STRING</code>, to be compatible with the catalog
   *       partitions. </p>
   *          <p>
   *             <i>Sample API Call</i>: </p>
   * @public
   */
  Expression?: string;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   * @public
   */
  ExcludeColumnSchema?: boolean;

  /**
   * <p>The transaction ID at which to read the partition contents.</p>
   * @public
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date;
}

/**
 * @public
 */
export interface GetPartitionsResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  Partitions?: Partition[];

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * <p>The list of mappings from a source table to target tables.</p>
   * @public
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The source table.</p>
   * @public
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The target tables.</p>
   * @public
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>The parameters for the mapping.</p>
   * @public
   */
  Location?: Location;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   * @public
   */
  Language?: Language;

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *          <p>Currently, these key-value pairs are supported:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   *                <p>
   *                   <code>--additional-plan-options-map '\{"inferSchema":"true"\}'</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  AdditionalPlanOptionsMap?: Record<string, string>;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * <p>A Python script to perform the mapping.</p>
   * @public
   */
  PythonScript?: string;

  /**
   * <p>The Scala code to perform the mapping.</p>
   * @public
   */
  ScalaCode?: string;
}

/**
 * @public
 */
export interface GetRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus;

  /**
   * <p>The date and time the registry was created.</p>
   * @public
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>A structure for returning a resource policy.</p>
 * @public
 */
export interface GluePolicy {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   * @public
   */
  GetResourcePoliciesResponseList?: GluePolicy[];

  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   * @public
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   * @public
   */
  PolicyInJson?: string;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   * @public
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   * @public
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   * @public
   */
  UpdateTime?: Date;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface GetSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>A description of schema if specified when created</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat;

  /**
   * <p>The compatibility mode of the schema.</p>
   * @public
   */
  Compatibility?: Compatibility;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   * @public
   */
  SchemaCheckpoint?: number;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   * @public
   */
  LatestSchemaVersion?: number;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   * @public
   */
  NextSchemaVersion?: number;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the schema was updated.</p>
   * @public
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The definition of the schema for which schema details are required.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * <p>The schema ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus;

  /**
   * <p>The date and time the schema was created.</p>
   * @public
   */
  CreatedTime?: string;
}

/**
 * <p>A structure containing the schema version information.</p>
 * @public
 */
export interface SchemaVersionNumber {
  /**
   * <p>The latest version available for the schema.</p>
   * @public
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface GetSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId?: SchemaId;

  /**
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The schema definition for the schema ID.</p>
   * @public
   */
  SchemaDefinition?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   * @public
   */
  DataFormat?: DataFormat;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version. </p>
   * @public
   */
  Status?: SchemaVersionStatus;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string;
}

/**
 * @public
 * @enum
 */
export const SchemaDiffType = {
  SYNTAX_DIFF: "SYNTAX_DIFF",
} as const;

/**
 * @public
 */
export type SchemaDiffType = (typeof SchemaDiffType)[keyof typeof SchemaDiffType];

/**
 * @public
 */
export interface GetSchemaVersionsDiffInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The first of the two schema versions to be compared.</p>
   * @public
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>The second of the two schema versions to be compared.</p>
   * @public
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   * @public
   */
  SchemaDiffType: SchemaDiffType | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   * @public
   */
  Diff?: string;
}

/**
 * @public
 */
export interface GetSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Specifies a security configuration.</p>
 * @public
 */
export interface SecurityConfiguration {
  /**
   * <p>The name of the security configuration.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The time at which this security configuration was created.</p>
   * @public
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   * @public
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

/**
 * @public
 */
export interface GetSecurityConfigurationResponse {
  /**
   * <p>The requested security configuration.</p>
   * @public
   */
  SecurityConfiguration?: SecurityConfiguration;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A list of security configurations.</p>
   * @public
   */
  SecurityConfigurations?: SecurityConfiguration[];

  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * <p>The ID of the session. </p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * <p>The session object is returned in the response.</p>
   * @public
   */
  Session?: Session;
}

/**
 * @public
 */
export interface GetStatementRequest {
  /**
   * <p>The Session ID of the statement.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The Id of the statement.</p>
   * @public
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutputData {
  /**
   * <p>The code execution output in text format.</p>
   * @public
   */
  TextPlain?: string;
}

/**
 * @public
 * @enum
 */
export const StatementState = {
  AVAILABLE: "AVAILABLE",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  ERROR: "ERROR",
  RUNNING: "RUNNING",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type StatementState = (typeof StatementState)[keyof typeof StatementState];

/**
 * <p>The code execution output in JSON format.</p>
 * @public
 */
export interface StatementOutput {
  /**
   * <p>The code execution output.</p>
   * @public
   */
  Data?: StatementOutputData;

  /**
   * <p>The execution count of the output.</p>
   * @public
   */
  ExecutionCount?: number;

  /**
   * <p>The status of the code execution output.</p>
   * @public
   */
  Status?: StatementState;

  /**
   * <p>The name of the error in the output.</p>
   * @public
   */
  ErrorName?: string;

  /**
   * <p>The error value of the output.</p>
   * @public
   */
  ErrorValue?: string;

  /**
   * <p>The traceback of the output.</p>
   * @public
   */
  Traceback?: string[];
}

/**
 * <p>The statement or request for a particular action to occur in a session.</p>
 * @public
 */
export interface Statement {
  /**
   * <p>The ID of the statement.</p>
   * @public
   */
  Id?: number;

  /**
   * <p>The execution code of the statement.</p>
   * @public
   */
  Code?: string;

  /**
   * <p>The state while request is actioned.</p>
   * @public
   */
  State?: StatementState;

  /**
   * <p>The output in JSON.</p>
   * @public
   */
  Output?: StatementOutput;

  /**
   * <p>The code execution progress.</p>
   * @public
   */
  Progress?: number;

  /**
   * <p>The unix time and date that the job definition was started.</p>
   * @public
   */
  StartedOn?: number;

  /**
   * <p>The unix time and date that the job definition was completed.</p>
   * @public
   */
  CompletedOn?: number;
}

/**
 * @public
 */
export interface GetStatementResponse {
  /**
   * <p>Returns the statement.</p>
   * @public
   */
  Statement?: Statement;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. </p>
   * @public
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean;
}

/**
 * <p>A table that points to an entity outside the Glue Data Catalog.</p>
 * @public
 */
export interface FederatedTable {
  /**
   * <p>A unique identifier for the federated table.</p>
   * @public
   */
  Identifier?: string;

  /**
   * <p>A unique identifier for the federated database.</p>
   * @public
   */
  DatabaseIdentifier?: string;

  /**
   * <p>The name of the connection to the external metastore.</p>
   * @public
   */
  ConnectionName?: string;
}

/**
 * @public
 * @enum
 */
export const ResourceAction = {
  CREATE: "CREATE",
  UPDATE: "UPDATE",
} as const;

/**
 * @public
 */
export type ResourceAction = (typeof ResourceAction)[keyof typeof ResourceAction];

/**
 * @public
 * @enum
 */
export const ResourceState = {
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  STOPPED: "STOPPED",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type ResourceState = (typeof ResourceState)[keyof typeof ResourceState];

/**
 * <p>A structure that contains information for an analytical engine to validate a view, prior to persisting the view metadata. Used in the case of direct <code>UpdateTable</code> or <code>CreateTable</code> API calls.</p>
 * @public
 */
export interface ViewValidation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string;

  /**
   * <p>The <code>SELECT</code> query that defines the view, as provided by the customer.</p>
   * @public
   */
  ViewValidationText?: string;

  /**
   * <p>The time of the last update.</p>
   * @public
   */
  UpdateTime?: Date;

  /**
   * <p>The state of the validation.</p>
   * @public
   */
  State?: ResourceState;

  /**
   * <p>An error associated with the validation.</p>
   * @public
   */
  Error?: ErrorDetail;
}

/**
 * <p>A structure that contains the dialect of the view, and the query that defines the view.</p>
 * @public
 */
export interface ViewRepresentation {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string;

  /**
   * <p>The <code>SELECT</code> query provided by the customer during <code>CREATE VIEW DDL</code>. This SQL is not used during a query on a view (<code>ViewExpandedText</code> is used instead). <code>ViewOriginalText</code> is used for cases like <code>SHOW CREATE VIEW</code> where users want to see the original DDL command that created the view.</p>
   * @public
   */
  ViewOriginalText?: string;

  /**
   * <p>The expanded SQL for the view. This SQL is used by engines while processing a query on a view. Engines may perform operations during view creation to transform <code>ViewOriginalText</code> to <code>ViewExpandedText</code>. For example:</p>
   *          <ul>
   *             <li>
   *                <p>Fully qualified identifiers: <code>SELECT * from table1 -> SELECT * from db1.table1</code>
   *                </p>
   *             </li>
   *          </ul>
   * @public
   */
  ViewExpandedText?: string;

  /**
   * <p>The name of the connection to be used to validate the specific representation of the view.</p>
   * @public
   */
  ValidationConnection?: string;

  /**
   * <p>Dialects marked as stale are no longer valid and must be updated before they can be queried in their respective query engines.</p>
   * @public
   */
  IsStale?: boolean;
}

/**
 * <p>A structure containing details for representations.</p>
 * @public
 */
export interface ViewDefinition {
  /**
   * <p>You can set this flag as true to instruct the engine not to push user-provided operations into the logical plan of the view during query planning. However, setting this flag does not guarantee that the engine will comply. Refer to the engine's documentation to understand the guarantees provided, if any.</p>
   * @public
   */
  IsProtected?: boolean;

  /**
   * <p>The definer of a view in SQL.</p>
   * @public
   */
  Definer?: string;

  /**
   * <p>A list of table Amazon Resource Names (ARNs).</p>
   * @public
   */
  SubObjects?: string[];

  /**
   * <p>A list of representations.</p>
   * @public
   */
  Representations?: ViewRepresentation[];
}

/**
 * @public
 */
export interface GetTableOptimizerRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The type of table optimizer.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;
}

/**
 * @public
 */
export interface GetTableOptimizerResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string;

  /**
   * <p>The optimizer associated with the specified table.</p>
   * @public
   */
  TableOptimizer?: TableOptimizer;
}

/**
 * @public
 * @enum
 */
export const TableAttributes = {
  NAME: "NAME",
  TABLE_TYPE: "TABLE_TYPE",
} as const;

/**
 * @public
 */
export type TableAttributes = (typeof TableAttributes)[keyof typeof TableAttributes];

/**
 * @public
 */
export interface GetTablesRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   * @public
   */
  Expression?: string;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The transaction ID at which to read the table contents.</p>
   * @public
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   * @public
   */
  QueryAsOfTime?: Date;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean;

  /**
   * <p> Specifies the table fields returned by the <code>GetTables</code> call. This parameter doesn’t accept an empty list. The request must include <code>NAME</code>.</p>
   *          <p>The following are the valid combinations of values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>NAME</code> - Names of all tables in the database.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NAME</code>, <code>TABLE_TYPE</code> - Names of all tables and the table types.</p>
   *             </li>
   *          </ul>
   * @public
   */
  AttributesToGet?: TableAttributes[];
}

/**
 * @public
 */
export interface GetTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   * @public
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface GetTableVersionsRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTriggerRequest {
  /**
   * <p>The name of the trigger to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTriggerResponse {
  /**
   * <p>The requested trigger definition.</p>
   * @public
   */
  Trigger?: Trigger;
}

/**
 * @public
 */
export interface GetTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetTriggersResponse {
  /**
   * <p>A list of triggers for the specified job.</p>
   * @public
   */
  Triggers?: Trigger[];

  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
 * @public
 */
export interface QuerySessionContext {
  /**
   * <p>A unique identifier generated by the query engine for the query.</p>
   * @public
   */
  QueryId?: string;

  /**
   * <p>A timestamp provided by the query engine for when the query started.</p>
   * @public
   */
  QueryStartTime?: Date;

  /**
   * <p>An identifier string for the consumer cluster.</p>
   * @public
   */
  ClusterId?: string;

  /**
   * <p>A cryptographically generated query identifier generated by Glue or Lake Formation.</p>
   * @public
   */
  QueryAuthorizationId?: string;

  /**
   * <p>An opaque string-string map passed by the query engine.</p>
   * @public
   */
  AdditionalContext?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const PermissionType = {
  CELL_FILTER_PERMISSION: "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION: "COLUMN_PERMISSION",
  NESTED_CELL_PERMISSION: "NESTED_CELL_PERMISSION",
  NESTED_PERMISSION: "NESTED_PERMISSION",
} as const;

/**
 * @public
 */
export type PermissionType = (typeof PermissionType)[keyof typeof PermissionType];

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>The catalog ID where the partition resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the partition.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>(Required) A list of partition key values.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext;

  /**
   * <p>(Required) A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * <p>A Partition object containing the partition metadata.</p>
   * @public
   */
  Partition?: Partition;

  /**
   * <p>A list of column names that the user has been granted access to.</p>
   * @public
   */
  AuthorizedColumns?: string[];

  /**
   * <p>A Boolean value that indicates whether the partition location is registered
   *           with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean;
}

/**
 * <p>The operation timed out.</p>
 * @public
 */
export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>There is a mismatch between the SupportedPermissionType used in the query request
   *           and the permissions defined on the target table.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PermissionTypeMismatchException, __BaseException>) {
    super({
      name: "PermissionTypeMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PermissionTypeMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *           the AWS account ID is used by default. </p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partition.</p>
   * @public
   */
  TableName: string | undefined;

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
   *          <p>If an type is encountered that is not valid, an exception is thrown. </p>
   * @public
   */
  Expression?: string;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext;

  /**
   * <p>A list of supported permission types. </p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   * @public
   */
  Segment?: Segment;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext;
}

/**
 * <p>A partition that contains unfiltered metadata.</p>
 * @public
 */
export interface UnfilteredPartition {
  /**
   * <p>The partition object.</p>
   * @public
   */
  Partition?: Partition;

  /**
   * <p>The list of columns the user has permissions to access.</p>
   * @public
   */
  AuthorizedColumns?: string[];

  /**
   * <p>A Boolean value indicating that the partition location is registered with Lake Formation.</p>
   * @public
   */
  IsRegisteredWithLakeFormation?: boolean;
}

/**
 * @public
 */
export interface GetUnfilteredPartitionsMetadataResponse {
  /**
   * <p>A list of requested partitions.</p>
   * @public
   */
  UnfilteredPartitions?: UnfilteredPartition[];

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
 * @public
 */
export interface SupportedDialect {
  /**
   * <p>The dialect of the query engine.</p>
   * @public
   */
  Dialect?: ViewDialect;

  /**
   * <p>The version of the dialect of the query engine. For example, 3.0.0.</p>
   * @public
   */
  DialectVersion?: string;
}

/**
 * @public
 */
export interface GetUnfilteredTableMetadataRequest {
  /**
   * <p>Specified only if the base tables belong to a different Amazon Web Services Region.</p>
   * @public
   */
  Region?: string;

  /**
   * <p>The catalog ID where the table resides.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>(Required) Specifies the name of a database that contains the table.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>(Required) Specifies the name of a table for which you are requesting metadata.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A structure containing Lake Formation audit context information.</p>
   * @public
   */
  AuditContext?: AuditContext;

  /**
   * <p>Indicates the level of filtering a third-party analytical engine is capable of enforcing when calling the <code>GetUnfilteredTableMetadata</code> API operation. Accepted values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>COLUMN_PERMISSION</code> - Column permissions ensure that users can access only specific columns in the table. If there are particular columns contain sensitive data, data lake administrators can define column filters that exclude access to specific columns.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CELL_FILTER_PERMISSION</code> - Cell-level filtering combines column filtering (include or exclude columns) and row filter expressions to restrict access to individual elements in the table.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_PERMISSION</code> - Nested permissions combines cell-level filtering and nested column filtering to restrict access to columns and/or nested columns in specific rows based on row filter expressions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NESTED_CELL_PERMISSION</code> - Nested cell permissions combines nested permission with nested cell-level filtering. This allows different subsets of nested columns to be restricted based on an array of row filter expressions. </p>
   *             </li>
   *          </ul>
   *          <p>Note: Each of these permission types follows a hierarchical order where each subsequent permission type includes all permission of the previous type.</p>
   *          <p>Important: If you provide a supported permission type that doesn't match the user's level of permissions on the table, then Lake Formation raises an exception. For example, if the third-party engine calling the <code>GetUnfilteredTableMetadata</code> operation can enforce only column-level filtering, and the user has nested cell filtering applied on the table, Lake Formation throws an exception, and will not return unfiltered table metadata and data access credentials.</p>
   * @public
   */
  SupportedPermissionTypes: PermissionType[] | undefined;

  /**
   * <p>The resource ARN of the view.</p>
   * @public
   */
  ParentResourceArn?: string;

  /**
   * <p>The resource ARN of the root view in a chain of nested views.</p>
   * @public
   */
  RootResourceArn?: string;

  /**
   * <p>A structure specifying the dialect and dialect version used by the query engine.</p>
   * @public
   */
  SupportedDialect?: SupportedDialect;

  /**
   * <p>The Lake Formation data permissions of the caller on the table. Used to authorize the call when no view context is found.</p>
   * @public
   */
  Permissions?: Permission[];

  /**
   * <p>A structure used as a protocol between query engines and Lake Formation or Glue. Contains both a Lake Formation generated authorization identifier and information from the request's authorization context.</p>
   * @public
   */
  QuerySessionContext?: QuerySessionContext;
}

/**
 * <p>A filter that uses both column-level and row-level filtering.</p>
 * @public
 */
export interface ColumnRowFilter {
  /**
   * <p>A string containing the name of the column.</p>
   * @public
   */
  ColumnName?: string;

  /**
   * <p>A string containing the row-level filter expression.</p>
   * @public
   */
  RowFilterExpression?: string;
}

/**
 * @public
 */
export interface GetUsageProfileRequest {
  /**
   * <p>The name of the usage profile to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetUsageProfileResponse {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A <code>ProfileConfiguration</code> object specifying the job and session values for the profile.</p>
   * @public
   */
  Configuration?: ProfileConfiguration;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName: string | undefined;
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 * @public
 */
export interface UserDefinedFunction {
  /**
   * <p>The name of the function.</p>
   * @public
   */
  FunctionName?: string;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   * @public
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   * @public
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   * @public
   */
  OwnerType?: PrincipalType;

  /**
   * <p>The time at which the function was created.</p>
   * @public
   */
  CreateTime?: Date;

  /**
   * <p>The resource URIs for the function.</p>
   * @public
   */
  ResourceUris?: ResourceUri[];

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   * @public
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionResponse {
  /**
   * <p>The requested function definition.</p>
   * @public
   */
  UserDefinedFunction?: UserDefinedFunction;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   * @public
   */
  Pattern: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A list of requested function definitions.</p>
   * @public
   */
  UserDefinedFunctions?: UserDefinedFunction[];

  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The name of the workflow to retrieve.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   * @public
   */
  IncludeGraph?: boolean;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The resource metadata for the workflow.</p>
   * @public
   */
  Workflow?: Workflow;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>Name of the workflow being run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean;
}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The requested workflow run metadata.</p>
   * @public
   */
  Run?: WorkflowRun;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run whose run properties should be returned.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   * @public
   */
  RunProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface GetWorkflowRunsRequest {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   * @public
   */
  IncludeGraph?: boolean;

  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetWorkflowRunsResponse {
  /**
   * <p>A list of workflow run metadata objects.</p>
   * @public
   */
  Runs?: WorkflowRun[];

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   * @public
   */
  CatalogId?: string;
}

/**
 * @public
 */
export interface ImportCatalogToGlueResponse {}

/**
 * @public
 */
export interface ListBlueprintsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListBlueprintsResponse {
  /**
   * <p>List of names of blueprints in the account.</p>
   * @public
   */
  Blueprints?: string[];

  /**
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsRequest {
  /**
   * <p>The maximum size of the response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListColumnStatisticsTaskRunsResponse {
  /**
   * <p>A list of column statistics task run IDs.</p>
   * @public
   */
  ColumnStatisticsTaskRunIds?: string[];

  /**
   * <p>A continuation token, if not all task run IDs have yet been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCrawlersRequest {
  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCrawlersResponse {
  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   * @public
   */
  CrawlerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const FieldName = {
  CRAWL_ID: "CRAWL_ID",
  DPU_HOUR: "DPU_HOUR",
  END_TIME: "END_TIME",
  START_TIME: "START_TIME",
  STATE: "STATE",
} as const;

/**
 * @public
 */
export type FieldName = (typeof FieldName)[keyof typeof FieldName];

/**
 * @public
 * @enum
 */
export const FilterOperator = {
  EQ: "EQ",
  GE: "GE",
  GT: "GT",
  LE: "LE",
  LT: "LT",
  NE: "NE",
} as const;

/**
 * @public
 */
export type FilterOperator = (typeof FilterOperator)[keyof typeof FilterOperator];

/**
 * <p>A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.</p>
 * @public
 */
export interface CrawlsFilter {
  /**
   * <p>A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>CRAWL_ID</code>: A string representing the UUID identifier for a crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STATE</code>: A string representing the state of the crawl.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>START_TIME</code> and <code>END_TIME</code>: The epoch timestamp in milliseconds.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>DPU_HOUR</code>: The number of data processing unit (DPU) hours used for the crawl.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FieldName?: FieldName;

  /**
   * <p>A defined comparator that operates on the value. The available operators are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GT</code>: Greater than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GE</code>: Greater than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LT</code>: Less than.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>LE</code>: Less than or equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>EQ</code>: Equal to.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NE</code>: Not equal to.</p>
   *             </li>
   *          </ul>
   * @public
   */
  FilterOperator?: FilterOperator;

  /**
   * <p>The value provided for comparison on the crawl field. </p>
   * @public
   */
  FieldValue?: string;
}

/**
 * @public
 */
export interface ListCrawlsRequest {
  /**
   * <p>The name of the crawler whose runs you want to retrieve.</p>
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 20, and maximum is 100.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Filters the crawls by the criteria you specify in a list of <code>CrawlsFilter</code> objects.</p>
   * @public
   */
  Filters?: CrawlsFilter[];

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const CrawlerHistoryState = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STOPPED: "STOPPED",
} as const;

/**
 * @public
 */
export type CrawlerHistoryState = (typeof CrawlerHistoryState)[keyof typeof CrawlerHistoryState];

/**
 * <p>Contains the information for a run of a crawler.</p>
 * @public
 */
export interface CrawlerHistory {
  /**
   * <p>A UUID identifier for each crawl.</p>
   * @public
   */
  CrawlId?: string;

  /**
   * <p>The state of the crawl.</p>
   * @public
   */
  State?: CrawlerHistoryState;

  /**
   * <p>The date and time on which the crawl started.</p>
   * @public
   */
  StartTime?: Date;

  /**
   * <p>The date and time on which the crawl ended.</p>
   * @public
   */
  EndTime?: Date;

  /**
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   * @public
   */
  Summary?: string;

  /**
   * <p>If an error occurred, the error message associated with the crawl.</p>
   * @public
   */
  ErrorMessage?: string;

  /**
   * <p>The log group associated with the crawl.</p>
   * @public
   */
  LogGroup?: string;

  /**
   * <p>The log stream associated with the crawl.</p>
   * @public
   */
  LogStream?: string;

  /**
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   * @public
   */
  MessagePrefix?: string;

  /**
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   * @public
   */
  DPUHour?: number;
}

/**
 * @public
 */
export interface ListCrawlsResponse {
  /**
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   * @public
   */
  Crawls?: CrawlerHistory[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListCustomEntityTypesRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   * @public
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>Criteria used to return data quality results.</p>
 * @public
 */
export interface DataQualityResultFilterCriteria {
  /**
   * <p>Filter results by the specified data source. For example, retrieving all results for an Glue table.</p>
   * @public
   */
  DataSource?: DataSource;

  /**
   * <p>Filter results by the specified job name.</p>
   * @public
   */
  JobName?: string;

  /**
   * <p>Filter results by the specified job run ID.</p>
   * @public
   */
  JobRunId?: string;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date;
}

/**
 * @public
 */
export interface ListDataQualityResultsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityResultFilterCriteria;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes a data quality result.</p>
 * @public
 */
export interface DataQualityResultDescription {
  /**
   * <p>The unique result ID for this data quality result.</p>
   * @public
   */
  ResultId?: string;

  /**
   * <p>The table name associated with the data quality result.</p>
   * @public
   */
  DataSource?: DataSource;

  /**
   * <p>The job name associated with the data quality result.</p>
   * @public
   */
  JobName?: string;

  /**
   * <p>The job run ID associated with the data quality result.</p>
   * @public
   */
  JobRunId?: string;

  /**
   * <p>The time that the run started for this data quality result.</p>
   * @public
   */
  StartedOn?: Date;
}

/**
 * @public
 */
export interface ListDataQualityResultsResponse {
  /**
   * <p>A list of <code>DataQualityResultDescription</code> objects.</p>
   * @public
   */
  Results: DataQualityResultDescription[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A filter for listing data quality recommendation runs.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunFilter {
  /**
   * <p>Filter based on a specified data source (Glue table).</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter based on time for results started before provided time.</p>
   * @public
   */
  StartedBefore?: Date;

  /**
   * <p>Filter based on time for results started after provided time.</p>
   * @public
   */
  StartedAfter?: Date;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRuleRecommendationRunFilter;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes the result of a data quality rule recommendation run.</p>
 * @public
 */
export interface DataQualityRuleRecommendationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The date and time when this run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The data source (Glue table) associated with the recommendation run.</p>
   * @public
   */
  DataSource?: DataSource;
}

/**
 * @public
 */
export interface ListDataQualityRuleRecommendationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRuleRecommendationRunDescription</code> objects.</p>
   * @public
   */
  Runs?: DataQualityRuleRecommendationRunDescription[];

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The filter criteria.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunFilter {
  /**
   * <p>Filter based on a data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>Filter results by runs that started before this time.</p>
   * @public
   */
  StartedBefore?: Date;

  /**
   * <p>Filter results by runs that started after this time.</p>
   * @public
   */
  StartedAfter?: Date;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsRequest {
  /**
   * <p>The filter criteria.</p>
   * @public
   */
  Filter?: DataQualityRulesetEvaluationRunFilter;

  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes the result of a data quality ruleset evaluation run.</p>
 * @public
 */
export interface DataQualityRulesetEvaluationRunDescription {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The status for this run.</p>
   * @public
   */
  Status?: TaskStatusType;

  /**
   * <p>The date and time when the run started.</p>
   * @public
   */
  StartedOn?: Date;

  /**
   * <p>The data source (an Glue table) associated with the run.</p>
   * @public
   */
  DataSource?: DataSource;
}

/**
 * @public
 */
export interface ListDataQualityRulesetEvaluationRunsResponse {
  /**
   * <p>A list of <code>DataQualityRulesetEvaluationRunDescription</code> objects representing data quality ruleset runs.</p>
   * @public
   */
  Runs?: DataQualityRulesetEvaluationRunDescription[];

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>The criteria used to filter data quality rulesets.</p>
 * @public
 */
export interface DataQualityRulesetFilterCriteria {
  /**
   * <p>The name of the ruleset filter criteria.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>The description of the ruleset filter criteria.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Filter on rulesets created before this date.</p>
   * @public
   */
  CreatedBefore?: Date;

  /**
   * <p>Filter on rulesets created after this date.</p>
   * @public
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter on rulesets last modified before this date.</p>
   * @public
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filter on rulesets last modified after this date.</p>
   * @public
   */
  LastModifiedAfter?: Date;

  /**
   * <p>The name and database name of the target table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria. </p>
   * @public
   */
  Filter?: DataQualityRulesetFilterCriteria;

  /**
   * <p>A list of key-value pair tags.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * <p>Describes a data quality ruleset returned by <code>GetDataQualityRuleset</code>.</p>
 * @public
 */
export interface DataQualityRulesetListDetails {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the data quality ruleset.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time the data quality ruleset was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time the data quality ruleset was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date;

  /**
   * <p>An object representing an Glue table.</p>
   * @public
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   * @public
   */
  RecommendationRunId?: string;

  /**
   * <p>The number of rules in the ruleset.</p>
   * @public
   */
  RuleCount?: number;
}

/**
 * @public
 */
export interface ListDataQualityRulesetsResponse {
  /**
   * <p>A paginated list of rulesets for the specified list of Glue tables.</p>
   * @public
   */
  Rulesets?: DataQualityRulesetListDetails[];

  /**
   * <p>A pagination token, if more results are available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A timestamp filter.</p>
 * @public
 */
export interface TimestampFilter {
  /**
   * <p>The timestamp before which statistics should be included in the results.</p>
   * @public
   */
  RecordedBefore?: Date;

  /**
   * <p>The timestamp after which statistics should be included in the results.</p>
   * @public
   */
  RecordedAfter?: Date;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDataQualityStatisticAnnotationsResponse {
  /**
   * <p>A list of <code>StatisticAnnotation</code> applied to the Statistic</p>
   * @public
   */
  Annotations?: StatisticAnnotation[];

  /**
   * <p>A pagination token to retrieve the next set of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsRequest {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string;

  /**
   * <p>A timestamp filter.</p>
   * @public
   */
  TimestampFilter?: TimestampFilter;

  /**
   * <p>The maximum number of results to return in this request.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 * @enum
 */
export const StatisticEvaluationLevel = {
  COLUMN: "Column",
  DATASET: "Dataset",
  MULTICOLUMN: "Multicolumn",
} as const;

/**
 * @public
 */
export type StatisticEvaluationLevel = (typeof StatisticEvaluationLevel)[keyof typeof StatisticEvaluationLevel];

/**
 * <p>A run identifier.</p>
 * @public
 */
export interface RunIdentifier {
  /**
   * <p>The Run ID.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>The Job Run ID.</p>
   * @public
   */
  JobRunId?: string;
}

/**
 * <p>Summary information about a statistic.</p>
 * @public
 */
export interface StatisticSummary {
  /**
   * <p>The Statistic ID.</p>
   * @public
   */
  StatisticId?: string;

  /**
   * <p>The Profile ID.</p>
   * @public
   */
  ProfileId?: string;

  /**
   * <p>The Run Identifier</p>
   * @public
   */
  RunIdentifier?: RunIdentifier;

  /**
   * <p>The name of the statistic.</p>
   * @public
   */
  StatisticName?: string;

  /**
   * <p>The value of the statistic.</p>
   * @public
   */
  DoubleValue?: number;

  /**
   * <p>The evaluation level of the statistic. Possible values: <code>Dataset</code>, <code>Column</code>, <code>Multicolumn</code>.</p>
   * @public
   */
  EvaluationLevel?: StatisticEvaluationLevel;

  /**
   * <p>The list of columns referenced by the statistic.</p>
   * @public
   */
  ColumnsReferenced?: string[];

  /**
   * <p>The list of datasets referenced by the statistic.</p>
   * @public
   */
  ReferencedDatasets?: string[];

  /**
   * <p>A <code>StatisticPropertiesMap</code>, which contains a <code>NameString</code> and <code>DescriptionString</code>
   *          </p>
   * @public
   */
  StatisticProperties?: Record<string, string>;

  /**
   * <p>The timestamp when the statistic was recorded.</p>
   * @public
   */
  RecordedOn?: Date;

  /**
   * <p>The inclusion annotation for the statistic.</p>
   * @public
   */
  InclusionAnnotation?: TimestampedInclusionAnnotation;
}

/**
 * @public
 */
export interface ListDataQualityStatisticsResponse {
  /**
   * <p>A <code>StatisticSummaryList</code>.</p>
   * @public
   */
  Statistics?: StatisticSummary[];

  /**
   * <p>A pagination token to request the next page of results.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListDevEndpointsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListDevEndpointsResponse {
  /**
   * <p>The names of all the <code>DevEndpoint</code>s in the account, or the
   *         <code>DevEndpoint</code>s with the specified tags.</p>
   * @public
   */
  DevEndpointNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListJobsResponse {
  /**
   * <p>The names of all jobs in the account, or the jobs with the specified tags.</p>
   * @public
   */
  JobNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMLTransformsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   * @public
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   * @public
   */
  Sort?: TransformSortCriteria;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMLTransformsResponse {
  /**
   * <p>The identifiers of all the machine learning transforms in the account, or the
   *         machine learning transforms with the specified tags.</p>
   * @public
   */
  TransformIds: string[] | undefined;

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRegistriesInput {
  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A structure containing the details for a registry.</p>
 * @public
 */
export interface RegistryListItem {
  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   * @public
   */
  RegistryArn?: string;

  /**
   * <p>A description of the registry.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the registry.</p>
   * @public
   */
  Status?: RegistryStatus;

  /**
   * <p>The data the registry was created.</p>
   * @public
   */
  CreatedTime?: string;

  /**
   * <p>The date the registry was updated.</p>
   * @public
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface ListRegistriesResponse {
  /**
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   * @public
   */
  Registries?: RegistryListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchemasInput {
  /**
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   * @public
   */
  RegistryId?: RegistryId;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>An object that contains minimal details for a schema.</p>
 * @public
 */
export interface SchemaListItem {
  /**
   * <p>the name of the registry where the schema resides.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>A description for the schema.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The status of the schema.</p>
   * @public
   */
  SchemaStatus?: SchemaStatus;

  /**
   * <p>The date and time that a schema was created.</p>
   * @public
   */
  CreatedTime?: string;

  /**
   * <p>The date and time that a schema was updated.</p>
   * @public
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface ListSchemasResponse {
  /**
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   * @public
   */
  Schemas?: SchemaListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>An object containing the details about a schema version.</p>
 * @public
 */
export interface SchemaVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>The unique identifier of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus;

  /**
   * <p>The date and time the schema version was created.</p>
   * @public
   */
  CreatedTime?: string;
}

/**
 * @public
 */
export interface ListSchemaVersionsResponse {
  /**
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   * @public
   */
  Schemas?: SchemaVersionListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSessionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results. </p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Tags belonging to the session. </p>
   * @public
   */
  Tags?: Record<string, string>;

  /**
   * <p>The origin of the request. </p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface ListSessionsResponse {
  /**
   * <p>Returns the ID of the session. </p>
   * @public
   */
  Ids?: string[];

  /**
   * <p>Returns the session object. </p>
   * @public
   */
  Sessions?: Session[];

  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   * @public
   */
  RequestOrigin?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   * @public
   */
  Statements?: Statement[];

  /**
   * <p>A continuation token, if not all statements have yet been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsRequest {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId: string | undefined;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The type of table optimizer. Currently, the only valid value is <code>compaction</code>.</p>
   * @public
   */
  Type: TableOptimizerType | undefined;

  /**
   * <p>The maximum number of optimizer runs to return on each call.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTableOptimizerRunsResponse {
  /**
   * <p>The Catalog ID of the table.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the database in the catalog in which the table resides.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName?: string;

  /**
   * <p>A continuation token for paginating the returned list of optimizer runs, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of the optimizer runs associated with a table.</p>
   * @public
   */
  TableOptimizerRuns?: TableOptimizerRun[];
}

/**
 * @public
 */
export interface ListTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   * @public
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   * @public
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListTriggersResponse {
  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   * @public
   */
  TriggerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListUsageProfilesRequest {
  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum number of usage profiles to return in a single response.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * <p>Describes an Glue usage profile.</p>
 * @public
 */
export interface UsageProfileDefinition {
  /**
   * <p>The name of the usage profile.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the usage profile.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>The date and time when the usage profile was created.</p>
   * @public
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the usage profile was last modified.</p>
   * @public
   */
  LastModifiedOn?: Date;
}

/**
 * @public
 */
export interface ListUsageProfilesResponse {
  /**
   * <p>A list of usage profile (<code>UsageProfileDefinition</code>) objects.</p>
   * @public
   */
  Profiles?: UsageProfileDefinition[];

  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   * @public
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>List of names of workflows in the account.</p>
   * @public
   */
  Workflows?: string[];

  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The security configuration to set.</p>
   * @public
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

/**
 * @public
 */
export interface PutDataCatalogEncryptionSettingsResponse {}

/**
 * @public
 */
export interface PutDataQualityProfileAnnotationRequest {
  /**
   * <p>The ID of the data quality monitoring profile to annotate.</p>
   * @public
   */
  ProfileId: string | undefined;

  /**
   * <p>The inclusion annotation value to apply to the profile.</p>
   * @public
   */
  InclusionAnnotation: InclusionAnnotationValue | undefined;
}

/**
 * <p>Left blank.</p>
 * @public
 */
export interface PutDataQualityProfileAnnotationResponse {}

/**
 * @public
 * @enum
 */
export const EnableHybridValues = {
  FALSE: "FALSE",
  TRUE: "TRUE",
} as const;

/**
 * @public
 */
export type EnableHybridValues = (typeof EnableHybridValues)[keyof typeof EnableHybridValues];

/**
 * @public
 * @enum
 */
export const ExistCondition = {
  MUST_EXIST: "MUST_EXIST",
  NONE: "NONE",
  NOT_EXIST: "NOT_EXIST",
} as const;

/**
 * @public
 */
export type ExistCondition = (typeof ExistCondition)[keyof typeof ExistCondition];

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>Contains the policy document to set, in JSON format.</p>
   * @public
   */
  PolicyInJson: string | undefined;

  /**
   * <p>Do not use. For internal use only.</p>
   * @public
   */
  ResourceArn?: string;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   * @public
   */
  PolicyHashCondition?: string;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   * @public
   */
  PolicyExistsCondition?: ExistCondition;

  /**
   * <p>If <code>'TRUE'</code>, indicates that you are using both methods to grant cross-account
   *       access to Data Catalog resources:</p>
   *          <ul>
   *             <li>
   *                <p>By directly updating the resource policy with <code>PutResourePolicy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>By using the <b>Grant permissions</b> command on the Amazon Web Services Management Console.</p>
   *             </li>
   *          </ul>
   *          <p>Must be set to <code>'TRUE'</code> if you have already used the Management Console to
   *       grant cross-account access, otherwise the call fails. Default is 'FALSE'.</p>
   * @public
   */
  EnableHybrid?: EnableHybridValues;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   * @public
   */
  PolicyHash?: string;
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 * @public
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   * @public
   */
  MetadataKey?: string;

  /**
   * <p>A metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataInput {
  /**
   * <p>The unique ID for the schema.</p>
   * @public
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key's corresponding value.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface PutSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>The name for the schema.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The name for the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   * @public
   */
  RunProperties: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutWorkflowRunPropertiesResponse {}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   * @public
   */
  MetadataList?: MetadataKeyValuePair[];

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 * @public
 */
export interface OtherMetadataValueListItem {
  /**
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   * @public
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string;
}

/**
 * <p>A structure containing metadata information for a schema version.</p>
 * @public
 */
export interface MetadataInfo {
  /**
   * <p>The metadata key’s corresponding value.</p>
   * @public
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   * @public
   */
  CreatedTime?: string;

  /**
   * <p>Other metadata belonging to the same metadata key.</p>
   * @public
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[];
}

/**
 * @public
 */
export interface QuerySchemaVersionMetadataResponse {
  /**
   * <p>A map of a metadata key and associated values.</p>
   * @public
   */
  MetadataInfoMap?: Record<string, MetadataInfo>;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface RegisterSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   * @public
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>The schema definition using the <code>DataFormat</code> setting for the <code>SchemaName</code>.</p>
   * @public
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface RegisterSchemaVersionResponse {
  /**
   * <p>The unique ID that represents the version of this schema.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The version of this schema (for sync flow only, in case this is the first version).</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version.</p>
   * @public
   */
  Status?: SchemaVersionStatus;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   * @public
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

/**
 * @public
 */
export interface RemoveSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   * @public
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   * @public
   */
  SchemaName?: string;

  /**
   * <p>The name of the registry.</p>
   * @public
   */
  RegistryName?: string;

  /**
   * <p>The latest version of the schema.</p>
   * @public
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   * @public
   */
  VersionNumber?: number;

  /**
   * <p>The version ID for the schema version.</p>
   * @public
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key.</p>
   * @public
   */
  MetadataKey?: string;

  /**
   * <p>The value of the metadata key.</p>
   * @public
   */
  MetadataValue?: string;
}

/**
 * @public
 */
export interface ResetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   * @public
   */
  RunId?: string;
}

/**
 * @public
 */
export interface ResetJobBookmarkResponse {
  /**
   * <p>The reset bookmark entry.</p>
   * @public
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 * @public
 */
export class ConcurrentRunsExceededException extends __BaseException {
  readonly name: "ConcurrentRunsExceededException" = "ConcurrentRunsExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentRunsExceededException, __BaseException>) {
    super({
      name: "ConcurrentRunsExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentRunsExceededException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The workflow is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalWorkflowStateException extends __BaseException {
  readonly name: "IllegalWorkflowStateException" = "IllegalWorkflowStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalWorkflowStateException, __BaseException>) {
    super({
      name: "IllegalWorkflowStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalWorkflowStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ResumeWorkflowRunRequest {
  /**
   * <p>The name of the workflow to resume.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to resume.</p>
   * @public
   */
  RunId: string | undefined;

  /**
   * <p>A list of the node IDs for the nodes you want to restart. The nodes that are to be restarted must have a run attempt in the original run.</p>
   * @public
   */
  NodeIds: string[] | undefined;
}

/**
 * @public
 */
export interface ResumeWorkflowRunResponse {
  /**
   * <p>The new ID assigned to the resumed workflow run. Each resume of a workflow run will have a new run ID.</p>
   * @public
   */
  RunId?: string;

  /**
   * <p>A list of the node IDs for the nodes that were actually restarted.</p>
   * @public
   */
  NodeIds?: string[];
}

/**
 * @public
 */
export interface RunStatementRequest {
  /**
   * <p>The Session Id of the statement to be run.</p>
   * @public
   */
  SessionId: string | undefined;

  /**
   * <p>The statement code to be run.</p>
   * @public
   */
  Code: string | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface RunStatementResponse {
  /**
   * <p>Returns the Id of the statement that was run.</p>
   * @public
   */
  Id?: number;
}

/**
 * @public
 * @enum
 */
export const Comparator = {
  EQUALS: "EQUALS",
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_EQUALS: "GREATER_THAN_EQUALS",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_EQUALS: "LESS_THAN_EQUALS",
} as const;

/**
 * @public
 */
export type Comparator = (typeof Comparator)[keyof typeof Comparator];

/**
 * <p>Defines a property predicate.</p>
 * @public
 */
export interface PropertyPredicate {
  /**
   * <p>The key of the property.</p>
   * @public
   */
  Key?: string;

  /**
   * <p>The value of the property.</p>
   * @public
   */
  Value?: string;

  /**
   * <p>The comparator used to compare this property to others.</p>
   * @public
   */
  Comparator?: Comparator;
}

/**
 * @public
 * @enum
 */
export const Sort = {
  ASCENDING: "ASC",
  DESCENDING: "DESC",
} as const;

/**
 * @public
 */
export type Sort = (typeof Sort)[keyof typeof Sort];

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 * @public
 */
export interface SortCriterion {
  /**
   * <p>The name of the field on which to sort.</p>
   * @public
   */
  FieldName?: string;

  /**
   * <p>An ascending or descending sort.</p>
   * @public
   */
  Sort?: Sort;
}

/**
 * @public
 */
export interface SearchTablesRequest {
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>
   *             </code>.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   * @public
   */
  NextToken?: string;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   *          <p>The <code>Comparator</code> member of the <code>PropertyPredicate</code> struct is used only for time fields, and can be omitted for other field types. Also, when comparing string values, such as when <code>Key=Name</code>, a fuzzy match algorithm is used. The <code>Key</code> field (for example, the value of the <code>Name</code> field) is split on certain punctuation characters, for example, -, :, #, etc. into tokens. Then each token is exact-match compared with the <code>Value</code> member of <code>PropertyPredicate</code>. For example, if <code>Key=Name</code> and <code>Value=link</code>, tables named <code>customer-link</code> and <code>xx-link-yy</code> are returned, but <code>xxlinkyy</code> is not returned.</p>
   * @public
   */
  Filters?: PropertyPredicate[];

  /**
   * <p>A string used for a text search.</p>
   *          <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   * @public
   */
  SearchText?: string;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   * @public
   */
  SortCriteria?: SortCriterion[];

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   * @public
   */
  MaxResults?: number;

  /**
   * <p>Allows you to specify that you want to search the tables shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will search the tables shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will search the tables shared with your account, as well as the tables in yor local account. </p>
   *             </li>
   *          </ul>
   * @public
   */
  ResourceShareType?: ResourceShareType;

  /**
   * <p>Specifies whether to include status details related to a request to create or update an Glue Data Catalog view.</p>
   * @public
   */
  IncludeStatusDetails?: boolean;
}

/**
 * <p>The blueprint is in an invalid state to perform a requested operation.</p>
 * @public
 */
export class IllegalBlueprintStateException extends __BaseException {
  readonly name: "IllegalBlueprintStateException" = "IllegalBlueprintStateException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalBlueprintStateException, __BaseException>) {
    super({
      name: "IllegalBlueprintStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalBlueprintStateException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  BlueprintName: string | undefined;

  /**
   * <p>Specifies the parameters as a <code>BlueprintParameters</code> object.</p>
   * @public
   */
  Parameters?: string;

  /**
   * <p>Specifies the IAM role used to create the workflow.</p>
   * @public
   */
  RoleArn: string | undefined;
}

/**
 * @public
 */
export interface StartBlueprintRunResponse {
  /**
   * <p>The run ID for this blueprint run.</p>
   * @public
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table to generate statistics.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names to generate statistics. If none is supplied, all column names for the table will be used by default.</p>
   * @public
   */
  ColumnNameList?: string[];

  /**
   * <p>The IAM role that the service assumes to generate statistics.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The percentage of rows used to generate statistics. If none is supplied, the entire table will be used to generate stats.</p>
   * @public
   */
  SampleSize?: number;

  /**
   * <p>The ID of the Data Catalog where the table reside. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogID?: string;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs for the column stats task run.</p>
   * @public
   */
  SecurityConfiguration?: string;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunResponse {
  /**
   * <p>The identifier for the column statistics task run.</p>
   * @public
   */
  ColumnStatisticsTaskRunId?: string;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to start a column statistic task run schedule.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StartColumnStatisticsTaskRunScheduleResponse {}

/**
 * @public
 */
export interface StartCrawlerRequest {
  /**
   * <p>Name of the crawler to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerResponse {}

/**
 * <p>There is no applicable schedule.</p>
 * @public
 */
export class NoScheduleException extends __BaseException {
  readonly name: "NoScheduleException" = "NoScheduleException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<NoScheduleException, __BaseException>) {
    super({
      name: "NoScheduleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, NoScheduleException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified scheduler is already running.</p>
 * @public
 */
export class SchedulerRunningException extends __BaseException {
  readonly name: "SchedulerRunningException" = "SchedulerRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerRunningException, __BaseException>) {
    super({
      name: "SchedulerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler to schedule.</p>
   * @public
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StartCrawlerScheduleResponse {}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>A name for the ruleset.</p>
   * @public
   */
  CreatedRulesetName?: string;

  /**
   * <p>The name of the security configuration created with the data quality encryption option.</p>
   * @public
   */
  DataQualitySecurityConfiguration?: string;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   * @public
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface StartDataQualityRuleRecommendationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunRequest {
  /**
   * <p>The data source (Glue table) associated with this run.</p>
   * @public
   */
  DataSource: DataSource | undefined;

  /**
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   * @public
   */
  Role: string | undefined;

  /**
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>Used for idempotency and is recommended to be set to a random ID (such as a UUID) to avoid creating or starting multiple instances of the same resource.</p>
   * @public
   */
  ClientToken?: string;

  /**
   * <p>Additional run options you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

  /**
   * <p>A list of ruleset names.</p>
   * @public
   */
  RulesetNames: string[] | undefined;

  /**
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   * @public
   */
  AdditionalDataSources?: Record<string, DataSource>;
}

/**
 * @public
 */
export interface StartDataQualityRulesetEvaluationRunResponse {
  /**
   * <p>The unique run identifier associated with this run.</p>
   * @public
   */
  RunId?: string;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartExportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   * @public
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   * @public
   */
  ReplaceAllLabels?: boolean;
}

/**
 * @public
 */
export interface StartImportLabelsTaskRunResponse {
  /**
   * <p>The unique identifier for the task run.</p>
   * @public
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartJobRunRequest {
  /**
   * <p>The name of the job definition to use.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>Specifies whether job run queuing is enabled for the job run.</p>
   *          <p>A value of true means job run queuing is enabled for the job run. If false or not populated, the job run will not be considered for queueing.</p>
   * @public
   */
  JobRunQueuingEnabled?: boolean;

  /**
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   * @public
   */
  JobRunId?: string;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default
   *       arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that Glue itself consumes.</p>
   *          <p>Job arguments may be logged. Do not pass plaintext secrets as arguments. Retrieve secrets
   *       from a Glue Connection, Secrets Manager or other secret management
   *       mechanism if you intend to keep them within the Job. </p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Spark jobs,
   *      see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by Glue</a> topic in the developer guide.</p>
   *          <p>For information about the arguments you can provide to this field when configuring Ray
   *       jobs, see <a href="https://docs.aws.amazon.com/glue/latest/dg/author-job-ray-job-parameters.html">Using
   *       job parameters in Ray jobs</a> in the developer guide.</p>
   * @public
   */
  Arguments?: Record<string, string>;

  /**
   * @deprecated
   *
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *          <p>The number of Glue data processing units (DPUs) to allocate to this JobRun.
   *       You can allocate a minimum of 2 DPUs; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue
   *         pricing page</a>.</p>
   * @public
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. This value overrides the timeout value set in the parent job. </p>
   *          <p>Streaming jobs must have timeout values less than 7 days or 10080 minutes. When the value is left blank, the job will be restarted after 7 days based if you have not setup a maintenance window. If you have setup maintenance window, it will be restarted during the maintenance window after 7 days.</p>
   * @public
   */
  Timeout?: number;

  /**
   * <p>For Glue version 1.0 or earlier jobs, using the standard worker type, the number of
   *       Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is
   *       a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB
   *       of memory. For more information, see the <a href="https://aws.amazon.com/glue/pricing/">
   *         Glue pricing page</a>.</p>
   *          <p>For Glue version 2.0+ jobs, you cannot specify a <code>Maximum capacity</code>.
   *       Instead, you should specify a <code>Worker type</code> and the <code>Number of workers</code>.</p>
   *          <p>Do not set <code>MaxCapacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job, an Apache Spark ETL job, or an Apache Spark streaming ETL
   *       job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl") or Apache
   *         Spark streaming ETL job (<code>JobCommand.Name</code>="gluestreaming"), you can allocate from 2 to 100 DPUs.
   *         The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   * @public
   */
  MaxCapacity?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   * @public
   */
  SecurityConfiguration?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   * @public
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *           G.1X, G.2X, G.4X, G.8X or G.025X for Spark jobs. Accepts the value Z.2X for Ray jobs.</p>
   *          <ul>
   *             <li>
   *                <p>For the <code>G.1X</code> worker type, each worker maps to 1 DPU (4 vCPUs, 16 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.2X</code> worker type, each worker maps to 2 DPU (8 vCPUs, 32 GB of memory) with 128GB disk (approximately 77GB free), and provides 1 executor per worker. We recommend this worker type for workloads such as data transforms, joins, and queries, to offers a scalable and cost effective way to run most jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.4X</code> worker type, each worker maps to 4 DPU (16 vCPUs, 64 GB of memory) with 256GB disk (approximately 235GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs in the following Amazon Web Services Regions: US East (Ohio), US East (N. Virginia), US West (Oregon), Asia Pacific (Singapore), Asia Pacific (Sydney), Asia Pacific (Tokyo), Canada (Central), Europe (Frankfurt), Europe (Ireland), and Europe (Stockholm).</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.8X</code> worker type, each worker maps to 8 DPU (32 vCPUs, 128 GB of memory) with 512GB disk (approximately 487GB free), and provides 1 executor per worker. We recommend this worker type for jobs whose workloads contain your most demanding transforms, aggregations, joins, and queries. This worker type is available only for Glue version 3.0 or later Spark ETL jobs, in the same Amazon Web Services Regions as supported for the <code>G.4X</code> worker type.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>G.025X</code> worker type, each worker maps to 0.25 DPU (2 vCPUs, 4 GB of memory) with 84GB disk (approximately 34GB free), and provides 1 executor per worker. We recommend this worker type for low volume streaming jobs. This worker type is only available for Glue version 3.0 streaming jobs.</p>
   *             </li>
   *             <li>
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   * @public
   */
  WorkerType?: WorkerType;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   * @public
   */
  NumberOfWorkers?: number;

  /**
   * <p>Indicates whether the job is run with a standard or flexible execution class. The standard execution-class is ideal for time-sensitive workloads that require fast job startup and dedicated resources.</p>
   *          <p>The flexible execution class is appropriate for time-insensitive jobs whose start and completion times may vary. </p>
   *          <p>Only jobs with Glue version 3.0 and above and command type <code>glueetl</code> will be allowed to set <code>ExecutionClass</code> to <code>FLEX</code>. The flexible execution class is available for Spark jobs.</p>
   * @public
   */
  ExecutionClass?: ExecutionClass;
}

/**
 * @public
 */
export interface StartJobRunResponse {
  /**
   * <p>The ID assigned to this job run.</p>
   * @public
   */
  JobRunId?: string;
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 * @public
 */
export class MLTransformNotReadyException extends __BaseException {
  readonly name: "MLTransformNotReadyException" = "MLTransformNotReadyException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<MLTransformNotReadyException, __BaseException>) {
    super({
      name: "MLTransformNotReadyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, MLTransformNotReadyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface StartMLEvaluationTaskRunResponse {
  /**
   * <p>The unique identifier associated with this run.</p>
   * @public
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   * @public
   */
  TransformId: string | undefined;

  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you generate the labeling
   *       set.</p>
   * @public
   */
  OutputS3Path: string | undefined;
}

/**
 * @public
 */
export interface StartMLLabelingSetGenerationTaskRunResponse {
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   * @public
   */
  TaskRunId?: string;
}

/**
 * @public
 */
export interface StartTriggerRequest {
  /**
   * <p>The name of the trigger to start.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StartTriggerResponse {
  /**
   * <p>The name of the trigger that was started.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the workflow to start.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The workflow run properties for the new workflow run.</p>
   * @public
   */
  RunProperties?: Record<string, string>;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * <p>An Id for the new run.</p>
   * @public
   */
  RunId?: string;
}

/**
 * <p>An exception thrown when you try to stop a task run when there is no task running.</p>
 * @public
 */
export class ColumnStatisticsTaskNotRunningException extends __BaseException {
  readonly name: "ColumnStatisticsTaskNotRunningException" = "ColumnStatisticsTaskNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskNotRunningException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>An exception thrown when you try to stop a task run.</p>
 * @public
 */
export class ColumnStatisticsTaskStoppingException extends __BaseException {
  readonly name: "ColumnStatisticsTaskStoppingException" = "ColumnStatisticsTaskStoppingException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ColumnStatisticsTaskStoppingException, __BaseException>) {
    super({
      name: "ColumnStatisticsTaskStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ColumnStatisticsTaskStoppingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunResponse {}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunScheduleRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to stop a column statistic task run schedule.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface StopColumnStatisticsTaskRunScheduleResponse {}

/**
 * <p>The specified crawler is not running.</p>
 * @public
 */
export class CrawlerNotRunningException extends __BaseException {
  readonly name: "CrawlerNotRunningException" = "CrawlerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerNotRunningException, __BaseException>) {
    super({
      name: "CrawlerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The specified crawler is stopping.</p>
 * @public
 */
export class CrawlerStoppingException extends __BaseException {
  readonly name: "CrawlerStoppingException" = "CrawlerStoppingException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerStoppingException, __BaseException>) {
    super({
      name: "CrawlerStoppingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerStoppingException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopCrawlerRequest {
  /**
   * <p>Name of the crawler to stop.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerResponse {}

/**
 * <p>The specified scheduler is not running.</p>
 * @public
 */
export class SchedulerNotRunningException extends __BaseException {
  readonly name: "SchedulerNotRunningException" = "SchedulerNotRunningException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerNotRunningException, __BaseException>) {
    super({
      name: "SchedulerNotRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerNotRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface StopCrawlerScheduleRequest {
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   * @public
   */
  CrawlerName: string | undefined;
}

/**
 * @public
 */
export interface StopCrawlerScheduleResponse {}

/**
 * @public
 */
export interface StopSessionRequest {
  /**
   * <p>The ID of the session to be stopped.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request.</p>
   * @public
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface StopSessionResponse {
  /**
   * <p>Returns the Id of the stopped session.</p>
   * @public
   */
  Id?: string;
}

/**
 * @public
 */
export interface StopTriggerRequest {
  /**
   * <p>The name of the trigger to stop.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface StopTriggerResponse {
  /**
   * <p>The name of the trigger that was stopped.</p>
   * @public
   */
  Name?: string;
}

/**
 * @public
 */
export interface StopWorkflowRunRequest {
  /**
   * <p>The name of the workflow to stop.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run to stop.</p>
   * @public
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface StopWorkflowRunResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the Glue resource to which to add the tags. For more
   *       information about Glue resource ARNs, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-common.html#aws-glue-api-regex-aws-glue-arn-id">Glue ARN string pattern</a>.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to add to this resource.</p>
   * @public
   */
  TagsToAdd: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p>A structure that is used to specify testing a connection to a service.</p>
 * @public
 */
export interface TestConnectionInput {
  /**
   * <p>The type of connection to test. This operation is only available for the <code>JDBC</code> or <code>SALESFORCE</code> connection types.</p>
   * @public
   */
  ConnectionType: ConnectionType | undefined;

  /**
   * <p>The key-value pairs that define parameters for the connection.</p>
   *          <p>JDBC connections use the following connection properties:</p>
   *          <ul>
   *             <li>
   *                <p>Required: All of (<code>HOST</code>, <code>PORT</code>, <code>JDBC_ENGINE</code>) or <code>JDBC_CONNECTION_URL</code>.</p>
   *             </li>
   *             <li>
   *                <p>Required: All of (<code>USERNAME</code>, <code>PASSWORD</code>) or <code>SECRET_ID</code>.</p>
   *             </li>
   *             <li>
   *                <p>Optional: <code>JDBC_ENFORCE_SSL</code>, <code>CUSTOM_JDBC_CERT</code>, <code>CUSTOM_JDBC_CERT_STRING</code>, <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code>. These parameters are used to configure SSL with JDBC.</p>
   *             </li>
   *          </ul>
   *          <p>SALESFORCE connections require the <code>AuthenticationConfiguration</code> member to be configured.</p>
   * @public
   */
  ConnectionProperties: Partial<Record<ConnectionPropertyKey, string>> | undefined;

  /**
   * <p>A structure containing the authentication configuration in the TestConnection request. Required for a connection to Salesforce using OAuth authentication.</p>
   * @public
   */
  AuthenticationConfiguration?: AuthenticationConfigurationInput;
}

/**
 * @public
 */
export interface TestConnectionRequest {
  /**
   * <p>Optional. The name of the connection to test. If only name is provided, the operation will get the connection and use that for testing.</p>
   * @public
   */
  ConnectionName?: string;

  /**
   * <p>A structure that is used to specify testing a connection to a service.</p>
   * @public
   */
  TestConnectionInput?: TestConnectionInput;
}

/**
 * @public
 */
export interface TestConnectionResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource from which to remove the tags.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>Tags to remove from this resource.</p>
   * @public
   */
  TagsToRemove: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the blueprint.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>Specifies a path in Amazon S3 where the blueprint is published.</p>
   * @public
   */
  BlueprintLocation: string | undefined;
}

/**
 * @public
 */
export interface UpdateBlueprintResponse {
  /**
   * <p>Returns the name of the blueprint that was updated.</p>
   * @public
   */
  Name?: string;
}

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 * @public
 */
export interface UpdateCsvClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   * @public
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   * @public
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   * @public
   */
  ContainsHeader?: CsvHeaderOption;

  /**
   * <p>A list of strings representing column names.</p>
   * @public
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   * @public
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   * @public
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Specifies the configuration of custom datatypes.</p>
   * @public
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * <p>Specifies a list of supported custom datatypes.</p>
   * @public
   */
  CustomDatatypes?: string[];

  /**
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   * @public
   */
  Serde?: CsvSerdeOption;
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 * @public
 */
export interface UpdateGrokClassifierRequest {
  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   * @public
   */
  Classification?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   * @public
   */
  GrokPattern?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   * @public
   */
  CustomPatterns?: string;
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 * @public
 */
export interface UpdateJsonClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   * @public
   */
  JsonPath?: string;
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 * @public
 */
export interface UpdateXMLClassifierRequest {
  /**
   * <p>The name of the classifier.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   * @public
   */
  Classification?: string;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   * @public
   */
  RowTag?: string;
}

/**
 * @public
 */
export interface UpdateClassifierRequest {
  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   * @public
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   * @public
   */
  XMLClassifier?: UpdateXMLClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   * @public
   */
  JsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   * @public
   */
  CsvClassifier?: UpdateCsvClassifierRequest;
}

/**
 * @public
 */
export interface UpdateClassifierResponse {}

/**
 * <p>There was a version conflict.</p>
 * @public
 */
export class VersionMismatchException extends __BaseException {
  readonly name: "VersionMismatchException" = "VersionMismatchException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message describing the problem.</p>
   * @public
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<VersionMismatchException, __BaseException>) {
    super({
      name: "VersionMismatchException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, VersionMismatchException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   * @public
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A list of the column statistics.</p>
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * <p>Encapsulates a <code>ColumnStatistics</code> object that failed and the reason for failure.</p>
 * @public
 */
export interface ColumnStatisticsError {
  /**
   * <p>The <code>ColumnStatistics</code> of the column.</p>
   * @public
   */
  ColumnStatistics?: ColumnStatistics;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   * @public
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForPartitionResponse {
  /**
   * <p>Error occurred during updating column statistics data.</p>
   * @public
   */
  Errors?: ColumnStatisticsError[];
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column statistics.</p>
   * @public
   */
  ColumnStatisticsList: ColumnStatistics[] | undefined;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatisticsErrors.</p>
   * @public
   */
  Errors?: ColumnStatisticsError[];
}

/**
 * @public
 */
export interface UpdateColumnStatisticsTaskSettingsRequest {
  /**
   * <p>The name of the database where the table resides.</p>
   * @public
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to generate column statistics.</p>
   * @public
   */
  TableName: string | undefined;

  /**
   * <p>The role used for running the column statistics.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>A schedule for running the column statistics, specified in CRON syntax.</p>
   * @public
   */
  Schedule?: string;

  /**
   * <p>A list of column names for which to run statistics.</p>
   * @public
   */
  ColumnNameList?: string[];

  /**
   * <p>The percentage of data to sample.</p>
   * @public
   */
  SampleSize?: number;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   * @public
   */
  CatalogID?: string;

  /**
   * <p>Name of the security configuration that is used to encrypt CloudWatch logs.</p>
   * @public
   */
  SecurityConfiguration?: string;
}

/**
 * @public
 */
export interface UpdateColumnStatisticsTaskSettingsResponse {}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   * @public
   */
  ConnectionInput: ConnectionInput | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {}

/**
 * @public
 */
export interface UpdateCrawlerRequest {
  /**
   * <p>Name of the new crawler.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   * @public
   */
  Role?: string;

  /**
   * <p>The Glue database where results are stored, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   * @public
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A list of targets to crawl.</p>
   * @public
   */
  Targets?: CrawlerTargets;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string;

  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   * @public
   */
  Classifiers?: string[];

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   * @public
   */
  TablePrefix?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   * @public
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>A policy that specifies whether to crawl the entire dataset again, or to crawl only folders that were added since the last crawler run.</p>
   * @public
   */
  RecrawlPolicy?: RecrawlPolicy;

  /**
   * <p>Specifies data lineage configuration settings for the crawler.</p>
   * @public
   */
  LineageConfiguration?: LineageConfiguration;

  /**
   * <p>Specifies Lake Formation configuration settings for the crawler.</p>
   * @public
   */
  LakeFormationConfiguration?: LakeFormationConfiguration;

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Setting crawler configuration options</a>.</p>
   * @public
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   * @public
   */
  CrawlerSecurityConfiguration?: string;
}

/**
 * @public
 */
export interface UpdateCrawlerResponse {}

/**
 * @public
 */
export interface UpdateCrawlerScheduleRequest {
  /**
   * <p>The name of the crawler whose schedule to update.</p>
   * @public
   */
  CrawlerName: string | undefined;

  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   * @public
   */
  Schedule?: string;
}

/**
 * @public
 */
export interface UpdateCrawlerScheduleResponse {}

/**
 * @public
 */
export interface UpdateDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   * @public
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to update in the catalog. For Hive
   *       compatibility, this is folded to lowercase.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A <code>DatabaseInput</code> object specifying the new definition
   *       of the metadata database in the catalog.</p>
   * @public
   */
  DatabaseInput: DatabaseInput | undefined;
}

/**
 * @public
 */
export interface UpdateDatabaseResponse {}

/**
 * @public
 */
export interface UpdateDataQualityRulesetRequest {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the ruleset.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset?: string;
}

/**
 * @public
 */
export interface UpdateDataQualityRulesetResponse {
  /**
   * <p>The name of the data quality ruleset.</p>
   * @public
   */
  Name?: string;

  /**
   * <p>A description of the ruleset.</p>
   * @public
   */
  Description?: string;

  /**
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   * @public
   */
  Ruleset?: string;
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 * @public
 */
export interface DevEndpointCustomLibraries {
  /**
   * <p>The paths to one or more Python libraries in an Amazon Simple Storage Service (Amazon S3)
   *       bucket that should be loaded in your <code>DevEndpoint</code>. Multiple values must be
   *       complete paths separated by a comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   * @public
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   * @public
   */
  ExtraJarsS3Path?: string;
}

/**
 * @internal
 */
export const StatisticSummaryFilterSensitiveLog = (obj: StatisticSummary): any => ({
  ...obj,
  ...(obj.StatisticProperties && { StatisticProperties: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListDataQualityStatisticsResponseFilterSensitiveLog = (obj: ListDataQualityStatisticsResponse): any => ({
  ...obj,
  ...(obj.Statistics && { Statistics: obj.Statistics.map((item) => StatisticSummaryFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const TestConnectionInputFilterSensitiveLog = (obj: TestConnectionInput): any => ({
  ...obj,
  ...(obj.AuthenticationConfiguration && {
    AuthenticationConfiguration: AuthenticationConfigurationInputFilterSensitiveLog(obj.AuthenticationConfiguration),
  }),
});

/**
 * @internal
 */
export const TestConnectionRequestFilterSensitiveLog = (obj: TestConnectionRequest): any => ({
  ...obj,
  ...(obj.TestConnectionInput && {
    TestConnectionInput: TestConnectionInputFilterSensitiveLog(obj.TestConnectionInput),
  }),
});

/**
 * @internal
 */
export const UpdateConnectionRequestFilterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
  ...obj,
  ...(obj.ConnectionInput && { ConnectionInput: ConnectionInputFilterSensitiveLog(obj.ConnectionInput) }),
});
