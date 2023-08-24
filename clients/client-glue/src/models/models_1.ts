// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  Action,
  Blueprint,
  Column,
  ConnectionsList,
  ConnectionType,
  Crawler,
  CsvHeaderOption,
  CsvSerdeOption,
  DatabaseIdentifier,
  DataFormat,
  DataQualityRuleResult,
  DataQualityTargetTable,
  DataSource,
  DevEndpoint,
  ErrorDetail,
  EventBatchingCondition,
  FederatedDatabase,
  GlueTable,
  JobRun,
  Partition,
  PartitionInput,
  PartitionValueList,
  PhysicalConnectionRequirements,
  Predicate,
  PrincipalPermissions,
  SchemaId,
  StorageDescriptor,
  TaskStatusType,
  Trigger,
  TriggerType,
  WorkerType,
} from "./models_0";

/**
 * @public
 * <p>A value could not be validated.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface CreateJobResponse {
  /**
   * @public
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;
}

/**
 * @public
 * <p>The parameters to configure the find matches transform.</p>
 */
export interface FindMatchesParameters {
  /**
   * @public
   * <p>The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.</p>
   */
  PrimaryKeyColumnName?: string;

  /**
   * @public
   * <p>The value selected when tuning your transform for a balance between precision and recall.
   *       A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a
   *       value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0
   *       means very low recall, and choosing values close to 0.0 results in very low precision.</p>
   *          <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
   *          <p>The recall metric indicates that for an actual match, how often your model predicts the
   *       match.</p>
   */
  PrecisionRecallTradeoff?: number;

  /**
   * @public
   * <p>The value that is selected when tuning your transform for a balance between accuracy and
   *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
   *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
   *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
   *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
   *          <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
   *          <p>Cost measures how many compute resources, and thus money, are consumed to run the
   *       transform.</p>
   */
  AccuracyCostTradeoff?: number;

  /**
   * @public
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   */
  EnforceProvidedLabels?: boolean;
}

/**
 * @public
 * @enum
 */
export const TransformType = {
  FIND_MATCHES: "FIND_MATCHES",
} as const;

/**
 * @public
 */
export type TransformType = (typeof TransformType)[keyof typeof TransformType];

/**
 * @public
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
  /**
   * @public
   * <p>The type of machine learning transform.</p>
   *          <p>For information about the types of machine learning transforms, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * @public
   * <p>The parameters for the find matches algorithm.</p>
   */
  FindMatchesParameters?: FindMatchesParameters;
}

/**
 * @public
 * @enum
 */
export const MLUserDataEncryptionModeString = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type MLUserDataEncryptionModeString =
  (typeof MLUserDataEncryptionModeString)[keyof typeof MLUserDataEncryptionModeString];

/**
 * @public
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data.</p>
 */
export interface MLUserDataEncryption {
  /**
   * @public
   * <p>The encryption mode applied to user data. Valid values are:</p>
   *          <ul>
   *             <li>
   *                <p>DISABLED: encryption is disabled</p>
   *             </li>
   *             <li>
   *                <p>SSEKMS: use of server-side encryption with Key Management Service (SSE-KMS) for user data stored in Amazon S3.</p>
   *             </li>
   *          </ul>
   */
  MlUserDataEncryptionMode: MLUserDataEncryptionModeString | string | undefined;

  /**
   * @public
   * <p>The ID for the customer-provided KMS key.</p>
   */
  KmsKeyId?: string;
}

/**
 * @public
 * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
 *          <p>Additionally, imported labels and trained transforms can now be encrypted using a customer provided KMS key.</p>
 */
export interface TransformEncryption {
  /**
   * @public
   * <p>An <code>MLUserDataEncryption</code> object containing the encryption mode and customer-provided KMS key ID.</p>
   */
  MlUserDataEncryption?: MLUserDataEncryption;

  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  TaskRunSecurityConfigurationName?: string;
}

/**
 * @public
 */
export interface CreateMLTransformRequest {
  /**
   * @public
   * <p>The unique name that you give the transform when you create it.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the machine learning transform that is being defined. The default is an
   *       empty string.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * @public
   * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
   *       dependent on the transform type.</p>
   */
  Parameters: TransformParameters | undefined;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *          <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
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
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
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
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>The tags to use with this machine learning transform. You may use tags to limit access to the machine learning transform. For more information about tags in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * @public
 */
export interface CreateMLTransformResponse {
  /**
   * @public
   * <p>A unique identifier that is generated for the transform.</p>
   */
  TransformId?: string;
}

/**
 * @public
 */
export interface CreatePartitionRequest {
  /**
   * @public
   * <p>The Amazon Web Services account ID of the catalog in which the partition is to be created.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A <code>PartitionInput</code> structure defining the partition
   *       to be created.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

/**
 * @public
 */
export interface CreatePartitionResponse {}

/**
 * @public
 * <p>A structure for a partition index.</p>
 */
export interface PartitionIndex {
  /**
   * @public
   * <p>The keys for the partition index.</p>
   */
  Keys: string[] | undefined;

  /**
   * @public
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface CreatePartitionIndexRequest {
  /**
   * @public
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Specifies the name of a database in which you want to create a partition index.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Specifies the name of a table in which you want to create a partition index.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>Specifies a <code>PartitionIndex</code> structure to create a partition index in an existing table.</p>
   */
  PartitionIndex: PartitionIndex | undefined;
}

/**
 * @public
 */
export interface CreatePartitionIndexResponse {}

/**
 * @public
 */
export interface CreateRegistryInput {
  /**
   * @public
   * <p>Name of the registry to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark.  No whitespace.</p>
   */
  RegistryName: string | undefined;

  /**
   * @public
   * <p>A description of the registry. If description is not provided, there will not be any default value for this.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateRegistryResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the newly created registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The tags for the registry.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const Compatibility = {
  BACKWARD: "BACKWARD",
  BACKWARD_ALL: "BACKWARD_ALL",
  DISABLED: "DISABLED",
  FORWARD: "FORWARD",
  FORWARD_ALL: "FORWARD_ALL",
  FULL: "FULL",
  FULL_ALL: "FULL_ALL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type Compatibility = (typeof Compatibility)[keyof typeof Compatibility];

/**
 * @public
 * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
 */
export interface RegistryId {
  /**
   * @public
   * <p>Name of the registry. Used only for lookup. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided. </p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>Arn of the registry to be updated. One of <code>RegistryArn</code> or <code>RegistryName</code> has to be provided.</p>
   */
  RegistryArn?: string;
}

/**
 * @public
 */
export interface CreateSchemaInput {
  /**
   * @public
   * <p> This is a wrapper shape to contain the registry identity fields. If this is not provided, the default registry will be used. The ARN format for the same will be: <code>arn:aws:glue:us-east-2:<customer id>:registry/default-registry:random-5-letter-id</code>.</p>
   */
  RegistryId?: RegistryId;

  /**
   * @public
   * <p>Name of the schema to be created of max length of 255, and may only contain letters, numbers, hyphen, underscore, dollar sign, or hash mark. No whitespace.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat: DataFormat | string | undefined;

  /**
   * @public
   * <p>The compatibility mode of the schema. The possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <i>NONE</i>: No compatibility mode applies. You can use this choice in development scenarios or if you do not know the compatibility mode that you want to apply to schemas. Any new version added will be accepted without undergoing a compatibility check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>DISABLED</i>: This compatibility choice prevents versioning for a particular schema. You can use this choice to prevent future versioning of a schema.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD</i>: This compatibility choice is recommended as it allows data receivers to read both the current and one previous schema version. This means that for instance, a new schema version cannot drop data fields or change the type of these fields, so they can't be read by readers using the previous version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>BACKWARD_ALL</i>: This compatibility choice allows data receivers to read both the current and all previous schema versions. You can use this choice when you need to delete fields or add optional fields, and check compatibility against all previous schema versions. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD</i>: This compatibility choice allows data receivers to read both the current and one next schema version, but not necessarily later versions. You can use this choice when you need to add fields or delete optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FORWARD_ALL</i>: This compatibility choice allows data receivers to read written by producers of any new registered schema. You can use this choice when you need to add fields or delete optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL</i>: This compatibility choice allows data receivers to read data written by producers using the previous or next version of the schema, but not necessarily earlier or later versions. You can use this choice when you need to add or remove optional fields, but only check compatibility against the last schema version.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <i>FULL_ALL</i>: This compatibility choice allows data receivers to read data written by producers using all previous schema versions. You can use this choice when you need to add or remove optional fields, and check compatibility against all previous schema versions.</p>
   *             </li>
   *          </ul>
   */
  Compatibility?: Compatibility | string;

  /**
   * @public
   * <p>An optional description of the schema. If description is not provided, there will not be any automatic default value for this.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Amazon Web Services tags that contain a key value pair and may be searched by console, command line, or API. If specified, follows the Amazon Web Services tags-on-create pattern.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The schema definition using the <code>DataFormat</code> setting for <code>SchemaName</code>.</p>
   */
  SchemaDefinition?: string;
}

/**
 * @public
 * @enum
 */
export const SchemaStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SchemaStatus = (typeof SchemaStatus)[keyof typeof SchemaStatus];

/**
 * @public
 * @enum
 */
export const SchemaVersionStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
  FAILURE: "FAILURE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type SchemaVersionStatus = (typeof SchemaVersionStatus)[keyof typeof SchemaVersionStatus];

/**
 * @public
 */
export interface CreateSchemaResponse {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>A description of the schema if specified when created.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * @public
   * <p>The schema compatibility mode.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * @public
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   */
  SchemaCheckpoint?: number;

  /**
   * @public
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   */
  LatestSchemaVersion?: number;

  /**
   * @public
   * <p>The next version of the schema associated with the returned schema definition.</p>
   */
  NextSchemaVersion?: number;

  /**
   * @public
   * <p>The status of the schema. </p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * @public
   * <p>The tags for the schema.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The unique identifier of the first schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The status of the first schema version created.</p>
   */
  SchemaVersionStatus?: SchemaVersionStatus | string;
}

/**
 * @public
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 */
export interface CodeGenEdge {
  /**
   * @public
   * <p>The ID of the node at which the edge starts.</p>
   */
  Source: string | undefined;

  /**
   * @public
   * <p>The ID of the node at which the edge ends.</p>
   */
  Target: string | undefined;

  /**
   * @public
   * <p>The target of the edge.</p>
   */
  TargetParameter?: string;
}

/**
 * @public
 * <p>An argument or property of a node.</p>
 */
export interface CodeGenNodeArg {
  /**
   * @public
   * <p>The name of the argument or property.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The value of the argument or property.</p>
   */
  Value: string | undefined;

  /**
   * @public
   * <p>True if the value is used as a parameter.</p>
   */
  Param?: boolean;
}

/**
 * @public
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface CodeGenNode {
  /**
   * @public
   * <p>A node identifier that is unique within the node's graph.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The type of node that this is.</p>
   */
  NodeType: string | undefined;

  /**
   * @public
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * @public
   * <p>The line number of the node.</p>
   */
  LineNumber?: number;
}

/**
 * @public
 * @enum
 */
export const Language = {
  PYTHON: "PYTHON",
  SCALA: "SCALA",
} as const;

/**
 * @public
 */
export type Language = (typeof Language)[keyof typeof Language];

/**
 * @public
 */
export interface CreateScriptRequest {
  /**
   * @public
   * <p>A list of the nodes in the DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * @public
   * <p>A list of the edges in the DAG.</p>
   */
  DagEdges?: CodeGenEdge[];

  /**
   * @public
   * <p>The programming language of the resulting code from the DAG.</p>
   */
  Language?: Language | string;
}

/**
 * @public
 */
export interface CreateScriptResponse {
  /**
   * @public
   * <p>The Python script generated from the DAG.</p>
   */
  PythonScript?: string;

  /**
   * @public
   * <p>The Scala code generated from the DAG.</p>
   */
  ScalaCode?: string;
}

/**
 * @public
 * @enum
 */
export const CloudWatchEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type CloudWatchEncryptionMode = (typeof CloudWatchEncryptionMode)[keyof typeof CloudWatchEncryptionMode];

/**
 * @public
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 */
export interface CloudWatchEncryption {
  /**
   * @public
   * <p>The encryption mode to use for CloudWatch data.</p>
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const JobBookmarksEncryptionMode = {
  CSEKMS: "CSE-KMS",
  DISABLED: "DISABLED",
} as const;

/**
 * @public
 */
export type JobBookmarksEncryptionMode = (typeof JobBookmarksEncryptionMode)[keyof typeof JobBookmarksEncryptionMode];

/**
 * @public
 * <p>Specifies how job bookmark data should be encrypted.</p>
 */
export interface JobBookmarksEncryption {
  /**
   * @public
   * <p>The encryption mode to use for job bookmarks data.</p>
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * @enum
 */
export const S3EncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
  SSES3: "SSE-S3",
} as const;

/**
 * @public
 */
export type S3EncryptionMode = (typeof S3EncryptionMode)[keyof typeof S3EncryptionMode];

/**
 * @public
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 */
export interface S3Encryption {
  /**
   * @public
   * <p>The encryption mode to use for Amazon S3 data.</p>
   */
  S3EncryptionMode?: S3EncryptionMode | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

/**
 * @public
 * <p>Specifies an encryption configuration.</p>
 */
export interface EncryptionConfiguration {
  /**
   * @public
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  S3Encryption?: S3Encryption[];

  /**
   * @public
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   */
  CloudWatchEncryption?: CloudWatchEncryption;

  /**
   * @public
   * <p>The encryption configuration for job bookmarks.</p>
   */
  JobBookmarksEncryption?: JobBookmarksEncryption;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationRequest {
  /**
   * @public
   * <p>The name for the new security configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The encryption configuration for the new security configuration.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationResponse {
  /**
   * @public
   * <p>The name assigned to the new security configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time at which the new security configuration was created.</p>
   */
  CreatedTimestamp?: Date;
}

/**
 * @public
 * <p>The <code>SessionCommand</code> that runs the job.</p>
 */
export interface SessionCommand {
  /**
   * @public
   * <p>Specifies the name of the SessionCommand. Can be 'glueetl' or 'gluestreaming'.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Specifies the Python version. The Python version indicates the version supported for jobs of type Spark.</p>
   */
  PythonVersion?: string;
}

/**
 * @public
 * <p>Request to create a new session.</p>
 */
export interface CreateSessionRequest {
  /**
   * @public
   * <p>The ID of the session request. </p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The description of the session. </p>
   */
  Description?: string;

  /**
   * @public
   * <p>The IAM Role ARN </p>
   */
  Role: string | undefined;

  /**
   * @public
   * <p>The <code>SessionCommand</code> that runs the job. </p>
   */
  Command: SessionCommand | undefined;

  /**
   * @public
   * <p>
   *         The number of minutes before session times out. Default for Spark ETL
   *         jobs is 48 hours (2880 minutes), the maximum session lifetime for this job type.
   *         Consult the documentation for other job types.
   *     </p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>
   *         The number of minutes when idle before session times out. Default for
   *         Spark ETL jobs is value of Timeout. Consult the documentation
   *         for other job types.
   *     </p>
   */
  IdleTimeout?: number;

  /**
   * @public
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * @public
   * <p>The number of connections to use for the session. </p>
   */
  Connections?: ConnectionsList;

  /**
   * @public
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session. </p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a job runs. Accepts a value of
   *       G.1X, G.2X, G.4X, or G.8X for Spark jobs. Accepts the value Z.2X for Ray notebooks.</p>
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
   *                <p>For the <code>Z.2X</code> worker type, each worker maps to 2 M-DPU (8vCPUs, 64 GB of memory) with 128 GB disk (approximately 120GB free), and provides up to 8 Ray workers based on the autoscaler.</p>
   *             </li>
   *          </ul>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The name of the SecurityConfiguration structure to be used with the session </p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0. </p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The map of key value pairs (tags) belonging to the session.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 * @enum
 */
export const SessionStatus = {
  FAILED: "FAILED",
  PROVISIONING: "PROVISIONING",
  READY: "READY",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  TIMEOUT: "TIMEOUT",
} as const;

/**
 * @public
 */
export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus];

/**
 * @public
 * <p>The period in which a remote Spark runtime environment is running.</p>
 */
export interface Session {
  /**
   * @public
   * <p>The ID of the session.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The time and date when the session was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>The session status. </p>
   */
  Status?: SessionStatus | string;

  /**
   * @public
   * <p>The error message displayed during the session.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>The description of the session.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with the Session.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The command object.See SessionCommand.</p>
   */
  Command?: SessionCommand;

  /**
   * @public
   * <p>A map array of key-value pairs. Max is 75 pairs. </p>
   */
  DefaultArguments?: Record<string, string>;

  /**
   * @public
   * <p>The number of connections used for the session.</p>
   */
  Connections?: ConnectionsList;

  /**
   * @public
   * <p>The code execution progress of the session.</p>
   */
  Progress?: number;

  /**
   * @public
   * <p>The number of Glue data processing units (DPUs) that can be allocated when the job runs.
   *       A DPU is a relative measure of processing power that consists of 4 vCPUs of compute capacity and 16 GB memory. </p>
   */
  MaxCapacity?: number;

  /**
   * @public
   * <p>The name of the SecurityConfiguration structure to be used with the session.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>The Glue version determines the versions of Apache Spark and Python that Glue supports.
   *       The GlueVersion must be greater than 2.0.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The number of workers of a defined <code>WorkerType</code> to use for the session.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The type of predefined worker that is allocated when a session runs. Accepts a value of <code>G.1X</code>, <code>G.2X</code>, <code>G.4X</code>, or <code>G.8X</code> for Spark sessions. Accepts the value <code>Z.2X</code> for Ray sessions.</p>
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The date and time that this session is completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The total time the session ran for.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>The DPUs consumed by the session (formula: ExecutionTime * MaxCapacity).</p>
   */
  DPUSeconds?: number;

  /**
   * @public
   * <p>The number of minutes when idle before the session times out.</p>
   */
  IdleTimeout?: number;
}

/**
 * @public
 */
export interface CreateSessionResponse {
  /**
   * @public
   * <p>Returns the session object in the response.</p>
   */
  Session?: Session;
}

/**
 * @public
 * @enum
 */
export const MetadataOperation = {
  CREATE: "CREATE",
} as const;

/**
 * @public
 */
export type MetadataOperation = (typeof MetadataOperation)[keyof typeof MetadataOperation];

/**
 * @public
 * <p>A structure that defines an Apache Iceberg metadata table to create in the catalog.</p>
 */
export interface IcebergInput {
  /**
   * @public
   * <p>A required metadata operation. Can only be set to <code>CREATE</code>.</p>
   */
  MetadataOperation: MetadataOperation | string | undefined;

  /**
   * @public
   * <p>The table version for the Iceberg table. Defaults to 2.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>A structure representing an open format table.</p>
 */
export interface OpenTableFormatInput {
  /**
   * @public
   * <p>Specifies an <code>IcebergInput</code> structure that defines an Apache Iceberg metadata table.</p>
   */
  IcebergInput?: IcebergInput;
}

/**
 * @public
 * <p>A structure that describes a target table for resource linking.</p>
 */
export interface TableIdentifier {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database that contains the target table.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>The name of the target table.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Region of the target table.</p>
   */
  Region?: string;
}

/**
 * @public
 * <p>A structure used to define a table.</p>
 */
export interface TableInput {
  /**
   * @public
   * <p>The table name. For Hive compatibility, this is folded to
   *       lowercase when it is stored.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The table owner. Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The last time that the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * @public
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * @public
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * @public
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * @public
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   *          <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   */
  PartitionKeys?: Column[];

  /**
   * @public
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *     If the table is a <code>VIRTUAL_VIEW</code>, certain Athena configuration encoded in base64.</p>
   */
  ViewOriginalText?: string;

  /**
   * @public
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   */
  ViewExpandedText?: string;

  /**
   * @public
   * <p>The type of this table.
   *       Glue will create tables with the <code>EXTERNAL_TABLE</code> type.
   *       Other services, such as Athena, may create tables with additional table types.
   *     </p>
   *          <p>Glue related table types:</p>
   *          <dl>
   *             <dt>EXTERNAL_TABLE</dt>
   *             <dd>
   *                <p>Hive compatible attribute - indicates a non-Hive managed table.</p>
   *             </dd>
   *             <dt>GOVERNED</dt>
   *             <dd>
   *                <p>Used by Lake Formation.
   *             The Glue Data Catalog understands <code>GOVERNED</code>.</p>
   *             </dd>
   *          </dl>
   */
  TableType?: string;

  /**
   * @public
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;
}

/**
 * @public
 */
export interface CreateTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The catalog database in which to create the new table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * @public
   * <p>A list of partition indexes, <code>PartitionIndex</code> structures, to create in the table.</p>
   */
  PartitionIndexes?: PartitionIndex[];

  /**
   * @public
   * <p>The ID of the transaction.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>Specifies an <code>OpenTableFormatInput</code> structure when creating an open format table.</p>
   */
  OpenTableFormatInput?: OpenTableFormatInput;
}

/**
 * @public
 */
export interface CreateTableResponse {}

/**
 * @public
 */
export interface CreateTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;

  /**
   * @public
   * <p>The type of the new trigger.</p>
   */
  Type: TriggerType | string | undefined;

  /**
   * @public
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   *          <p>This field is required when the trigger type is SCHEDULED.</p>
   */
  Schedule?: string;

  /**
   * @public
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   */
  Predicate?: Predicate;

  /**
   * @public
   * <p>The actions initiated by this trigger when it fires.</p>
   */
  Actions: Action[] | undefined;

  /**
   * @public
   * <p>A description of the new trigger.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   */
  StartOnCreation?: boolean;

  /**
   * @public
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a> in the developer guide. </p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

/**
 * @public
 */
export interface CreateTriggerResponse {
  /**
   * @public
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

/**
 * @public
 * @enum
 */
export const PrincipalType = {
  GROUP: "GROUP",
  ROLE: "ROLE",
  USER: "USER",
} as const;

/**
 * @public
 */
export type PrincipalType = (typeof PrincipalType)[keyof typeof PrincipalType];

/**
 * @public
 * @enum
 */
export const ResourceType = {
  ARCHIVE: "ARCHIVE",
  FILE: "FILE",
  JAR: "JAR",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * <p>The URIs for function resources.</p>
 */
export interface ResourceUri {
  /**
   * @public
   * <p>The type of the resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * @public
   * <p>The URI for accessing the resource.</p>
   */
  Uri?: string;
}

/**
 * @public
 * <p>A structure used to create or update a user-defined function.</p>
 */
export interface UserDefinedFunctionInput {
  /**
   * @public
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * @public
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * @public
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * @public
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * @public
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];
}

/**
 * @public
 */
export interface CreateUserDefinedFunctionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which to create the function. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database in which to create the function.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>A <code>FunctionInput</code> object that defines the function
   *       to create in the Data Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

/**
 * @public
 */
export interface CreateUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface CreateWorkflowRequest {
  /**
   * @public
   * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: Record<string, string>;

  /**
   * @public
   * <p>The tags to be used with this workflow.</p>
   */
  Tags?: Record<string, string>;

  /**
   * @public
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

/**
 * @public
 */
export interface CreateWorkflowResponse {
  /**
   * @public
   * <p>The name of the workflow which was provided as part of the request.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DeleteBlueprintRequest {
  /**
   * @public
   * <p>The name of the blueprint to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteBlueprintResponse {
  /**
   * @public
   * <p>Returns the name of the blueprint that was deleted.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DeleteClassifierRequest {
  /**
   * @public
   * <p>Name of the classifier to remove.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteClassifierResponse {}

/**
 * @public
 */
export interface DeleteColumnStatisticsForPartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * @public
   * <p>Name of the column.</p>
   */
  ColumnName: string | undefined;
}

/**
 * @public
 */
export interface DeleteColumnStatisticsForPartitionResponse {}

/**
 * @public
 */
export interface DeleteColumnStatisticsForTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;
}

/**
 * @public
 */
export interface DeleteColumnStatisticsForTableResponse {}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the connection to delete.</p>
   */
  ConnectionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {}

/**
 * @public
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export class CrawlerRunningException extends __BaseException {
  readonly name: "CrawlerRunningException" = "CrawlerRunningException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CrawlerRunningException, __BaseException>) {
    super({
      name: "CrawlerRunningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CrawlerRunningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCrawlerRequest {
  /**
   * @public
   * <p>The name of the crawler to remove.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCrawlerResponse {}

/**
 * @public
 * <p>The specified scheduler is transitioning.</p>
 */
export class SchedulerTransitioningException extends __BaseException {
  readonly name: "SchedulerTransitioningException" = "SchedulerTransitioningException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SchedulerTransitioningException, __BaseException>) {
    super({
      name: "SchedulerTransitioningException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SchedulerTransitioningException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteCustomEntityTypeRequest {
  /**
   * @public
   * <p>The name of the custom pattern that you want to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomEntityTypeResponse {
  /**
   * @public
   * <p>The name of the custom pattern you deleted.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DeleteDatabaseRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database to delete. For Hive compatibility, this must be all
   *       lowercase.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDatabaseResponse {}

/**
 * @public
 */
export interface DeleteDataQualityRulesetRequest {
  /**
   * @public
   * <p>A name for the data quality ruleset.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataQualityRulesetResponse {}

/**
 * @public
 */
export interface DeleteDevEndpointRequest {
  /**
   * @public
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEndpointResponse {}

/**
 * @public
 */
export interface DeleteJobRequest {
  /**
   * @public
   * <p>The name of the job definition to delete.</p>
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface DeleteJobResponse {
  /**
   * @public
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;
}

/**
 * @public
 */
export interface DeleteMLTransformRequest {
  /**
   * @public
   * <p>The unique identifier of the transform to delete.</p>
   */
  TransformId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMLTransformResponse {
  /**
   * @public
   * <p>The unique identifier of the transform that was deleted.</p>
   */
  TransformId?: string;
}

/**
 * @public
 */
export interface DeletePartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table that contains the partition to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

/**
 * @public
 */
export interface DeletePartitionResponse {}

/**
 * @public
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
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
 */
export interface DeletePartitionIndexRequest {
  /**
   * @public
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Specifies the name of a database from which you want to delete a partition index.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Specifies the name of a table from which you want to delete a partition index.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The name of the partition index to be deleted.</p>
   */
  IndexName: string | undefined;
}

/**
 * @public
 */
export interface DeletePartitionIndexResponse {}

/**
 * @public
 */
export interface DeleteRegistryInput {
  /**
   * @public
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 * @enum
 */
export const RegistryStatus = {
  AVAILABLE: "AVAILABLE",
  DELETING: "DELETING",
} as const;

/**
 * @public
 */
export type RegistryStatus = (typeof RegistryStatus)[keyof typeof RegistryStatus];

/**
 * @public
 */
export interface DeleteRegistryResponse {
  /**
   * @public
   * <p>The name of the registry being deleted.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registry being deleted.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The status of the registry. A successful operation will return the <code>Deleting</code> status.</p>
   */
  Status?: RegistryStatus | string;
}

/**
 * @public
 * <p>A specified condition was not satisfied.</p>
 */
export class ConditionCheckFailureException extends __BaseException {
  readonly name: "ConditionCheckFailureException" = "ConditionCheckFailureException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>A message describing the problem.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConditionCheckFailureException, __BaseException>) {
    super({
      name: "ConditionCheckFailureException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConditionCheckFailureException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * @public
   * <p>The hash value returned when this policy was set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * @public
   * <p>The ARN of the Glue resource for the resource policy to be deleted.</p>
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteSchemaInput {
  /**
   * @public
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface DeleteSchemaResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema being deleted.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The name of the schema being deleted.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The status of the schema.</p>
   */
  Status?: SchemaStatus | string;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsInput {
  /**
   * @public
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>A version range may be supplied which may be of the format:</p>
   *          <ul>
   *             <li>
   *                <p>a single version number, 5</p>
   *             </li>
   *             <li>
   *                <p>a range, 5-8 : deletes versions 5, 6, 7, 8</p>
   *             </li>
   *          </ul>
   */
  Versions: string | undefined;
}

/**
 * @public
 * <p>An object containing error details.</p>
 */
export interface ErrorDetails {
  /**
   * @public
   * <p>The error code for an error.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message for an error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * <p>An object that contains the error details for an operation on a schema version.</p>
 */
export interface SchemaVersionErrorItem {
  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The details of the error for the schema version.</p>
   */
  ErrorDetails?: ErrorDetails;
}

/**
 * @public
 */
export interface DeleteSchemaVersionsResponse {
  /**
   * @public
   * <p>A list of <code>SchemaVersionErrorItem</code> objects, each containing an error and schema version.</p>
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[];
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationRequest {
  /**
   * @public
   * <p>The name of the security configuration to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationResponse {}

/**
 * @public
 */
export interface DeleteSessionRequest {
  /**
   * @public
   * <p>The ID of the session to be deleted.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The name of the origin of the delete session request.</p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface DeleteSessionResponse {
  /**
   * @public
   * <p>Returns the ID of the deleted session.</p>
   */
  Id?: string;
}

/**
 * @public
 */
export interface DeleteTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The transaction ID at which to delete the table contents.</p>
   */
  TransactionId?: string;
}

/**
 * @public
 */
export interface DeleteTableResponse {}

/**
 * @public
 */
export interface DeleteTableVersionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTableVersionResponse {}

/**
 * @public
 */
export interface DeleteTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteTriggerResponse {
  /**
   * @public
   * <p>The name of the trigger that was deleted.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DeleteUserDefinedFunctionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the function definition to be deleted.</p>
   */
  FunctionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteUserDefinedFunctionResponse {}

/**
 * @public
 */
export interface DeleteWorkflowRequest {
  /**
   * @public
   * <p>Name of the workflow to be deleted.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteWorkflowResponse {
  /**
   * @public
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface GetBlueprintRequest {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   */
  IncludeBlueprint?: boolean;

  /**
   * @public
   * <p>Specifies whether or not to include the parameter specification.</p>
   */
  IncludeParameterSpec?: boolean;
}

/**
 * @public
 */
export interface GetBlueprintResponse {
  /**
   * @public
   * <p>Returns a <code>Blueprint</code> object.</p>
   */
  Blueprint?: Blueprint;
}

/**
 * @public
 */
export interface GetBlueprintRunRequest {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * @public
   * <p>The run ID for the blueprint run you want to retrieve.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BlueprintRunState = {
  FAILED: "FAILED",
  ROLLING_BACK: "ROLLING_BACK",
  RUNNING: "RUNNING",
  SUCCEEDED: "SUCCEEDED",
} as const;

/**
 * @public
 */
export type BlueprintRunState = (typeof BlueprintRunState)[keyof typeof BlueprintRunState];

/**
 * @public
 * <p>The details of a blueprint run.</p>
 */
export interface BlueprintRun {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;

  /**
   * @public
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.</p>
   */
  WorkflowName?: string;

  /**
   * @public
   * <p>The state of the blueprint run. Possible values are:</p>
   *          <ul>
   *             <li>
   *                <p>Running — The blueprint run is in progress.</p>
   *             </li>
   *             <li>
   *                <p>Succeeded — The blueprint run completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>Failed — The blueprint run failed and rollback is complete.</p>
   *             </li>
   *             <li>
   *                <p>Rolling Back — The blueprint run failed and rollback is in progress.</p>
   *             </li>
   *          </ul>
   */
  State?: BlueprintRunState | string;

  /**
   * @public
   * <p>The date and time that the blueprint run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The date and time that the blueprint run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>Indicates any errors that are seen while running the blueprint.</p>
   */
  ErrorMessage?: string;

  /**
   * @public
   * <p>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</p>
   */
  RollbackErrorMessage?: string;

  /**
   * @public
   * <p>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the <code>Blueprint$ParameterSpec</code>.</p>
   */
  Parameters?: string;

  /**
   * @public
   * <p>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface GetBlueprintRunResponse {
  /**
   * @public
   * <p>Returns a <code>BlueprintRun</code> object.</p>
   */
  BlueprintRun?: BlueprintRun;
}

/**
 * @public
 */
export interface GetBlueprintRunsRequest {
  /**
   * @public
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetBlueprintRunsResponse {
  /**
   * @public
   * <p>Returns a list of <code>BlueprintRun</code> objects.</p>
   */
  BlueprintRuns?: BlueprintRun[];

  /**
   * @public
   * <p>A continuation token, if not all blueprint runs have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCatalogImportStatusRequest {
  /**
   * @public
   * <p>The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

/**
 * @public
 * <p>A structure containing migration status information.</p>
 */
export interface CatalogImportStatus {
  /**
   * @public
   * <p>
   *             <code>True</code> if the migration has completed, or <code>False</code> otherwise.</p>
   */
  ImportCompleted?: boolean;

  /**
   * @public
   * <p>The time that the migration was started.</p>
   */
  ImportTime?: Date;

  /**
   * @public
   * <p>The name of the person who initiated the migration.</p>
   */
  ImportedBy?: string;
}

/**
 * @public
 */
export interface GetCatalogImportStatusResponse {
  /**
   * @public
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: CatalogImportStatus;
}

/**
 * @public
 */
export interface GetClassifierRequest {
  /**
   * @public
   * <p>Name of the classifier to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * @public
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * @public
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * @public
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * @public
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * @public
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * @public
   * <p>Enables the custom datatype to be configured.</p>
   */
  CustomDatatypeConfigured?: boolean;

  /**
   * @public
   * <p>A list of custom datatypes including "BINARY", "BOOLEAN", "DATE", "DECIMAL", "DOUBLE", "FLOAT", "INT", "LONG", "SHORT", "STRING", "TIMESTAMP".</p>
   */
  CustomDatatypes?: string[];

  /**
   * @public
   * <p>Sets the SerDe for processing CSV in the classifier, which will be applied in the Data Catalog. Valid values are <code>OpenCSVSerDe</code>, <code>LazySimpleSerDe</code>, and <code>None</code>. You can specify the <code>None</code> value when you want the crawler to do the detection.</p>
   */
  Serde?: CsvSerdeOption | string;
}

/**
 * @public
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and
   *       so on.</p>
   */
  Classification: string | undefined;

  /**
   * @public
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The grok pattern applied to a data store by this classifier.
   *        For more information, see built-in patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  GrokPattern: string | undefined;

  /**
   * @public
   * <p>Optional custom grok patterns defined by this classifier.
   *       For more information, see custom patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;
}

/**
 * @public
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;
}

/**
 * @public
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
  /**
   * @public
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;

  /**
   * @public
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * @public
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

/**
 * @public
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 */
export interface Classifier {
  /**
   * @public
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: GrokClassifier;

  /**
   * @public
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: XMLClassifier;

  /**
   * @public
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: JsonClassifier;

  /**
   * @public
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: CsvClassifier;
}

/**
 * @public
 */
export interface GetClassifierResponse {
  /**
   * @public
   * <p>The requested classifier.</p>
   */
  Classifier?: Classifier;
}

/**
 * @public
 */
export interface GetClassifiersRequest {
  /**
   * @public
   * <p>The size of the list to return (optional).</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>An optional continuation token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetClassifiersResponse {
  /**
   * @public
   * <p>The requested list of classifier
   *       objects.</p>
   */
  Classifiers?: Classifier[];

  /**
   * @public
   * <p>A continuation token.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * @public
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for bit sequence data values.</p>
 */
export interface BinaryColumnStatisticsData {
  /**
   * @public
   * <p>The size of the longest bit sequence in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * @public
   * <p>The average bit sequence length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for Boolean data columns.</p>
 */
export interface BooleanColumnStatisticsData {
  /**
   * @public
   * <p>The number of true values in the column.</p>
   */
  NumberOfTrues: number | undefined;

  /**
   * @public
   * <p>The number of false values in the column.</p>
   */
  NumberOfFalses: number | undefined;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for timestamp data columns.</p>
 */
export interface DateColumnStatisticsData {
  /**
   * @public
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: Date;

  /**
   * @public
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: Date;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * @public
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * @public
 * <p>Contains a numeric value in decimal format.</p>
 */
export interface DecimalNumber {
  /**
   * @public
   * <p>The unscaled numeric value.</p>
   */
  UnscaledValue: Uint8Array | undefined;

  /**
   * @public
   * <p>The scale that determines where the decimal point falls in the
   *       unscaled value.</p>
   */
  Scale: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for fixed-point number data columns.</p>
 */
export interface DecimalColumnStatisticsData {
  /**
   * @public
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: DecimalNumber;

  /**
   * @public
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: DecimalNumber;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * @public
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for floating-point number data columns.</p>
 */
export interface DoubleColumnStatisticsData {
  /**
   * @public
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * @public
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * @public
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for integer data columns.</p>
 */
export interface LongColumnStatisticsData {
  /**
   * @public
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * @public
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * @public
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * @public
 * <p>Defines column statistics supported for character sequence data values.</p>
 */
export interface StringColumnStatisticsData {
  /**
   * @public
   * <p>The size of the longest string in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * @public
   * <p>The average string length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * @public
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * @public
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

/**
 * @public
 * @enum
 */
export const ColumnStatisticsType = {
  BINARY: "BINARY",
  BOOLEAN: "BOOLEAN",
  DATE: "DATE",
  DECIMAL: "DECIMAL",
  DOUBLE: "DOUBLE",
  LONG: "LONG",
  STRING: "STRING",
} as const;

/**
 * @public
 */
export type ColumnStatisticsType = (typeof ColumnStatisticsType)[keyof typeof ColumnStatisticsType];

/**
 * @public
 * <p>Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.</p>
 */
export interface ColumnStatisticsData {
  /**
   * @public
   * <p>The type of column statistics data.</p>
   */
  Type: ColumnStatisticsType | string | undefined;

  /**
   * @public
   * <p>Boolean column statistics data.</p>
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * @public
   * <p>Date column statistics data.</p>
   */
  DateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * @public
   * <p>
   *         Decimal column statistics data. UnscaledValues within are Base64-encoded
   *         binary objects storing big-endian, two's complement representations of
   *         the decimal's unscaled value.
   *     </p>
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * @public
   * <p>Double column statistics data.</p>
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * @public
   * <p>Long column statistics data.</p>
   */
  LongColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * @public
   * <p>String column statistics data.</p>
   */
  StringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * @public
   * <p>Binary column statistics data.</p>
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
}

/**
 * @public
 * <p>Represents the generated column-level statistics for a table or partition.</p>
 */
export interface ColumnStatistics {
  /**
   * @public
   * <p>Name of column which statistics belong to.</p>
   */
  ColumnName: string | undefined;

  /**
   * @public
   * <p>The data type of the column.</p>
   */
  ColumnType: string | undefined;

  /**
   * @public
   * <p>The timestamp of when column statistics were generated.</p>
   */
  AnalyzedTime: Date | undefined;

  /**
   * @public
   * <p>A <code>ColumnStatisticData</code> object that contains the statistics data values.</p>
   */
  StatisticsData: ColumnStatisticsData | undefined;
}

/**
 * @public
 * <p>Encapsulates a column name that failed and the reason for failure.</p>
 */
export interface ColumnError {
  /**
   * @public
   * <p>The name of the column that failed.</p>
   */
  ColumnName?: string;

  /**
   * @public
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

/**
 * @public
 */
export interface GetColumnStatisticsForPartitionResponse {
  /**
   * @public
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * @public
   * <p>Error occurred during retrieving column statistics data.</p>
   */
  Errors?: ColumnError[];
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

/**
 * @public
 */
export interface GetColumnStatisticsForTableResponse {
  /**
   * @public
   * <p>List of ColumnStatistics.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * @public
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  Errors?: ColumnError[];
}

/**
 * @public
 */
export interface GetConnectionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the connection definition to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;
}

/**
 * @public
 * <p>Defines a connection to a data source.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The name of the connection definition.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * @public
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * @public
   * <p>These key-value pairs define parameters for the connection:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HOST</code> - The host URI: either the
   *         fully qualified domain name (FQDN) or the IPv4 address of
   *         the database host.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PORT</code> - The port number, between
   *         1024 and 65535, of the port on which the database host is
   *         listening for database connections.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>USER_NAME</code> -  The name under which
   *         to log in to the database. The value string for <code>USER_NAME</code> is "<code>USERNAME</code>".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PASSWORD</code> - A password,
   *         if one is used, for the user name.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_PASSWORD</code> - When you enable connection password protection by setting <code>ConnectionPasswordEncryption</code> in the Data Catalog encryption settings, this field stores the encrypted password.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_JAR_URI</code> - The Amazon Simple Storage Service (Amazon S3) path of the
   *           JAR file that contains the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_DRIVER_CLASS_NAME</code> - The class name of the JDBC driver to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE</code> - The name of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENGINE_VERSION</code> - The version of the JDBC engine to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONFIG_FILES</code> - (Reserved for future use.)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>INSTANCE_ID</code> - The instance ID to use.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_CONNECTION_URL</code> - The URL for connecting to a JDBC data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure
   *           Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the
   *           client. The default is false.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip Glue’s validation of the customer certificate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT_STRING</code> - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the <code>SSL_SERVER_CERT_DN</code>; in Microsoft SQL Server, this is used as the <code>hostNameInCertificate</code>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTION_URL</code> - The URL for connecting to a general (non-JDBC) data source.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SECRET_ID</code> - The secret ID used for the secret manager of credentials.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_URL</code> - The connector URL for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_TYPE</code> - The connector type for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONNECTOR_CLASS_NAME</code> - The connector class name for a MARKETPLACE or CUSTOM connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_BOOTSTRAP_SERVERS</code> - A comma-separated list of host and port pairs that are the addresses of the Apache Kafka brokers in a Kafka cluster to which a Kafka client will connect to and bootstrap itself.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SSL_ENABLED</code> - Whether to enable or disable SSL on an Apache Kafka connection. Default value is "true".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CUSTOM_CERT</code> - The Amazon S3 URL for the private CA cert file (.pem format). The default is an empty string.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SKIP_CUSTOM_CERT_VALIDATION</code> - Whether to skip the validation of the CA cert file or not. Glue validates for three algorithms: SHA256withRSA, SHA384withRSA and SHA512withRSA. Default value is "false".</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE</code> - The Amazon S3 location of the client keystore file for Kafka client side authentication (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The password to access the provided keystore (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_CLIENT_KEY_PASSWORD</code> - A keystore can consist of multiple keys, so this is the password to access the client key to be used with the Kafka server side key (Optional).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEYSTORE_PASSWORD</code> - The encrypted version of the Kafka client keystore password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_CLIENT_KEY_PASSWORD</code> - The encrypted version of the Kafka client key password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_MECHANISM</code> - <code>"SCRAM-SHA-512"</code>, <code>"GSSAPI"</code>, or <code>"AWS_MSK_IAM"</code>. These are the supported <a href="https://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml">SASL Mechanisms</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_USERNAME</code> - A plaintext username used to authenticate with the "SCRAM-SHA-512" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_PASSWORD</code> - A plaintext password used to authenticate with the "SCRAM-SHA-512" mechanism.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENCRYPTED_KAFKA_SASL_SCRAM_PASSWORD</code> - The encrypted version of the Kafka SASL SCRAM password (if the user has the Glue encrypt passwords setting selected).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_SCRAM_SECRETS_ARN</code> - The Amazon Resource Name of a secret in Amazon Web Services Secrets Manager.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_KEYTAB</code> - The S3 location of a Kerberos <code>keytab</code> file. A keytab stores long-term keys for one or more principals. For more information, see <a href="https://web.mit.edu/kerberos/krb5-latest/doc/basic/keytab_def.html">MIT Kerberos Documentation: Keytab</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_KRB5_CONF</code> - The S3 location of a Kerberos <code>krb5.conf</code> file. A krb5.conf stores Kerberos configuration information, such as the location of the KDC server. For more information, see <a href="https://web.mit.edu/kerberos/krb5-1.12/doc/admin/conf_files/krb5_conf.html">MIT Kerberos Documentation: krb5.conf</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_SERVICE</code> - The Kerberos service name, as set with <code>sasl.kerberos.service.name</code> in your <a href="https://kafka.apache.org/documentation/#brokerconfigs_sasl.kerberos.service.name">Kafka Configuration</a>.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>KAFKA_SASL_GSSAPI_PRINCIPAL</code> - The name of the Kerberos princial used by Glue. For more information, see <a href="https://kafka.apache.org/documentation/#security_sasl_kerberos_clientconfig">Kafka Documentation: Configuring Kafka Brokers</a>.</p>
   *             </li>
   *          </ul>
   */
  ConnectionProperties?: Record<string, string>;

  /**
   * @public
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * @public
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * @public
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;
}

/**
 * @public
 */
export interface GetConnectionResponse {
  /**
   * @public
   * <p>The requested connection definition.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
  /**
   * @public
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: string[];

  /**
   * @public
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;
}

/**
 * @public
 */
export interface GetConnectionsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A filter that controls which connections are returned.</p>
   */
  Filter?: GetConnectionsFilter;

  /**
   * @public
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of connections to return in one response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetConnectionsResponse {
  /**
   * @public
   * <p>A list of requested connection definitions.</p>
   */
  ConnectionList?: Connection[];

  /**
   * @public
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCrawlerRequest {
  /**
   * @public
   * <p>The name of the crawler to retrieve metadata for.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCrawlerResponse {
  /**
   * @public
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: Crawler;
}

/**
 * @public
 */
export interface GetCrawlerMetricsRequest {
  /**
   * @public
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   */
  CrawlerNameList?: string[];

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
  /**
   * @public
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * @public
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;

  /**
   * @public
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * @public
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * @public
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * @public
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * @public
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;

  /**
   * @public
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;
}

/**
 * @public
 */
export interface GetCrawlerMetricsResponse {
  /**
   * @public
   * <p>A list of metrics for the specified crawler.</p>
   */
  CrawlerMetricsList?: CrawlerMetrics[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCrawlersRequest {
  /**
   * @public
   * <p>The number of crawlers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCrawlersResponse {
  /**
   * @public
   * <p>A list of crawler metadata.</p>
   */
  Crawlers?: Crawler[];

  /**
   * @public
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetCustomEntityTypeRequest {
  /**
   * @public
   * <p>The name of the custom pattern that you want to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetCustomEntityTypeResponse {
  /**
   * @public
   * <p>The name of the custom pattern that you retrieved.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   */
  RegexString?: string;

  /**
   * @public
   * <p>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   */
  ContextWords?: string[];
}

/**
 * @public
 */
export interface GetDatabaseRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database to retrieve. For Hive compatibility, this
   *       should be all lowercase.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
  /**
   * @public
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * @public
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>Creates a set of default permissions on the table for principals. Used by Lake Formation. Not used in the normal course of Glue operations.</p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * @public
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * @public
   * <p>The ID of the Data Catalog in which the database resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A <code>FederatedDatabase</code> structure that references an entity outside the Glue Data Catalog.</p>
   */
  FederatedDatabase?: FederatedDatabase;
}

/**
 * @public
 */
export interface GetDatabaseResponse {
  /**
   * @public
   * <p>The definition of the specified database in the Data Catalog.</p>
   */
  Database?: Database;
}

/**
 * @public
 * @enum
 */
export const ResourceShareType = {
  ALL: "ALL",
  FEDERATED: "FEDERATED",
  FOREIGN: "FOREIGN",
} as const;

/**
 * @public
 */
export type ResourceShareType = (typeof ResourceShareType)[keyof typeof ResourceShareType];

/**
 * @public
 */
export interface GetDatabasesRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>Allows you to specify that you want to list the databases shared with your account. The allowable values are <code>FEDERATED</code>, <code>FOREIGN</code> or <code>ALL</code>. </p>
   *          <ul>
   *             <li>
   *                <p>If set to <code>FEDERATED</code>, will list the federated databases (referencing an external entity) shared with your account.</p>
   *             </li>
   *             <li>
   *                <p>If set to <code>FOREIGN</code>, will list the databases shared with your account. </p>
   *             </li>
   *             <li>
   *                <p>If set to <code>ALL</code>, will list the databases shared with your account, as well as the databases in yor local account. </p>
   *             </li>
   *          </ul>
   */
  ResourceShareType?: ResourceShareType | string;
}

/**
 * @public
 */
export interface GetDatabasesResponse {
  /**
   * @public
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   */
  DatabaseList: Database[] | undefined;

  /**
   * @public
   * <p>A continuation token for paginating the returned list of tokens,
   *       returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;
}

/**
 * @public
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *          <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *          <p>This encryption requires that you set KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
  /**
   * @public
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;

  /**
   * @public
   * <p>An KMS key that is used to encrypt the connection password. </p>
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *          <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;
}

/**
 * @public
 * @enum
 */
export const CatalogEncryptionMode = {
  DISABLED: "DISABLED",
  SSEKMS: "SSE-KMS",
} as const;

/**
 * @public
 */
export type CatalogEncryptionMode = (typeof CatalogEncryptionMode)[keyof typeof CatalogEncryptionMode];

/**
 * @public
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
  /**
   * @public
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;

  /**
   * @public
   * <p>The ID of the KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;
}

/**
 * @public
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface DataCatalogEncryptionSettings {
  /**
   * @public
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * @public
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
}

/**
 * @public
 */
export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * @public
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

/**
 * @public
 */
export interface GetDataflowGraphRequest {
  /**
   * @public
   * <p>The Python script to transform.</p>
   */
  PythonScript?: string;
}

/**
 * @public
 */
export interface GetDataflowGraphResponse {
  /**
   * @public
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * @public
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: CodeGenEdge[];
}

/**
 * @public
 */
export interface GetDataQualityResultRequest {
  /**
   * @public
   * <p>A unique result ID for the data quality result.</p>
   */
  ResultId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityResultResponse {
  /**
   * @public
   * <p>A unique result ID for the data quality result.</p>
   */
  ResultId?: string;

  /**
   * @public
   * <p>An aggregate data quality score. Represents the ratio of rules that passed to the total number of rules.</p>
   */
  Score?: number;

  /**
   * @public
   * <p>The table associated with the data quality result, if any.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>The name of the ruleset associated with the data quality result.</p>
   */
  RulesetName?: string;

  /**
   * @public
   * <p>In the context of a job in Glue Studio, each node in the canvas is typically assigned some sort of name and data quality nodes will have names. In the case of multiple nodes, the <code>evaluationContext</code> can differentiate the nodes.</p>
   */
  EvaluationContext?: string;

  /**
   * @public
   * <p>The date and time when the run for this data quality result started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The date and time when the run for this data quality result was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The job name associated with the data quality result, if any.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The job run ID associated with the data quality result, if any.</p>
   */
  JobRunId?: string;

  /**
   * @public
   * <p>The unique run ID associated with the ruleset evaluation.</p>
   */
  RulesetEvaluationRunId?: string;

  /**
   * @public
   * <p>A list of <code>DataQualityRuleResult</code> objects representing the results for each rule. </p>
   */
  RuleResults?: DataQualityRuleResult[];
}

/**
 * @public
 */
export interface GetDataQualityRuleRecommendationRunRequest {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRuleRecommendationRunResponse {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The data source (an Glue table) associated with this run.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The error strings that are associated with the run.</p>
   */
  ErrorString?: string;

  /**
   * @public
   * <p>The date and time when this run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>The date and time when this run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>When a start rule recommendation run completes, it creates a recommended ruleset (a set of rules). This member has those rules in Data Quality Definition Language (DQDL) format.</p>
   */
  RecommendedRuleset?: string;

  /**
   * @public
   * <p>The name of the ruleset that was created by the run.</p>
   */
  CreatedRulesetName?: string;
}

/**
 * @public
 */
export interface GetDataQualityRulesetRequest {
  /**
   * @public
   * <p>The name of the ruleset.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetDataQualityRulesetResponse {
  /**
   * @public
   * <p>The name of the ruleset.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the ruleset.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A Data Quality Definition Language (DQDL) ruleset. For more information, see the Glue developer guide.</p>
   */
  Ruleset?: string;

  /**
   * @public
   * <p>The name and database name of the target table.</p>
   */
  TargetTable?: DataQualityTargetTable;

  /**
   * @public
   * <p>A timestamp. The time and date that this data quality ruleset was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>A timestamp. The last point in time when this data quality ruleset was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>When a ruleset was created from a recommendation run, this run ID is generated to link the two together.</p>
   */
  RecommendationRunId?: string;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunRequest {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId: string | undefined;
}

/**
 * @public
 * <p>Additional run options you can specify for an evaluation run.</p>
 */
export interface DataQualityEvaluationRunAdditionalRunOptions {
  /**
   * @public
   * <p>Whether or not to enable CloudWatch metrics.</p>
   */
  CloudWatchMetricsEnabled?: boolean;

  /**
   * @public
   * <p>Prefix for Amazon S3 to store results.</p>
   */
  ResultsS3Prefix?: string;
}

/**
 * @public
 */
export interface GetDataQualityRulesetEvaluationRunResponse {
  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The data source (an Glue table) associated with this evaluation run.</p>
   */
  DataSource?: DataSource;

  /**
   * @public
   * <p>An IAM role supplied to encrypt the results of the run.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>The number of <code>G.1X</code> workers to be used in the run. The default is 5.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a run in minutes. This is the maximum time that a run can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>Additional run options you can specify for an evaluation run.</p>
   */
  AdditionalRunOptions?: DataQualityEvaluationRunAdditionalRunOptions;

  /**
   * @public
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The error strings that are associated with the run.</p>
   */
  ErrorString?: string;

  /**
   * @public
   * <p>The date and time when this run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>A timestamp. The last point in time when this data quality rule recommendation run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>The date and time when this run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The amount of time (in seconds) that the run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * @public
   * <p>A list of ruleset names for the run.</p>
   */
  RulesetNames?: string[];

  /**
   * @public
   * <p>A list of result IDs for the data quality results for the run.</p>
   */
  ResultIds?: string[];

  /**
   * @public
   * <p>A map of reference strings to additional data sources you can specify for an evaluation run.</p>
   */
  AdditionalDataSources?: Record<string, DataSource>;
}

/**
 * @public
 */
export interface GetDevEndpointRequest {
  /**
   * @public
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   */
  EndpointName: string | undefined;
}

/**
 * @public
 */
export interface GetDevEndpointResponse {
  /**
   * @public
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: DevEndpoint;
}

/**
 * @public
 */
export interface GetDevEndpointsRequest {
  /**
   * @public
   * <p>The maximum size of information to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetDevEndpointsResponse {
  /**
   * @public
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * @public
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetJobRequest {
  /**
   * @public
   * <p>The name of the job definition to retrieve.</p>
   */
  JobName: string | undefined;
}

/**
 * @public
 */
export interface GetJobBookmarkRequest {
  /**
   * @public
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

/**
 * @public
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
  /**
   * @public
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The version of the job.</p>
   */
  Version?: number;

  /**
   * @public
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * @public
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;

  /**
   * @public
   * <p>The unique run identifier associated with the previous job run.</p>
   */
  PreviousRunId?: string;

  /**
   * @public
   * <p>The run ID number.</p>
   */
  RunId?: string;

  /**
   * @public
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;
}

/**
 * @public
 */
export interface GetJobBookmarkResponse {
  /**
   * @public
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

/**
 * @public
 */
export interface GetJobRunRequest {
  /**
   * @public
   * <p>Name of the job definition being run.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The ID of the job run.</p>
   */
  RunId: string | undefined;

  /**
   * @public
   * <p>True if a list of predecessor runs should be returned.</p>
   */
  PredecessorsIncluded?: boolean;
}

/**
 * @public
 */
export interface GetJobRunResponse {
  /**
   * @public
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: JobRun;
}

/**
 * @public
 */
export interface GetJobRunsRequest {
  /**
   * @public
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetJobRunsResponse {
  /**
   * @public
   * <p>A list of job-run metadata objects.</p>
   */
  JobRuns?: JobRun[];

  /**
   * @public
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetJobsRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The location of resources.</p>
 */
export interface Location {
  /**
   * @public
   * <p>A JDBC location.</p>
   */
  Jdbc?: CodeGenNodeArg[];

  /**
   * @public
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: CodeGenNodeArg[];

  /**
   * @public
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: CodeGenNodeArg[];
}

/**
 * @public
 * <p>Specifies a table definition in the Glue Data Catalog.</p>
 */
export interface CatalogEntry {
  /**
   * @public
   * <p>The database in which the table metadata resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table in question.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 */
export interface GetMappingRequest {
  /**
   * @public
   * <p>Specifies the source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * @public
   * <p>A list of target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * @public
   * <p>Parameters for the mapping.</p>
   */
  Location?: Location;
}

/**
 * @public
 * <p>Defines a mapping.</p>
 */
export interface MappingEntry {
  /**
   * @public
   * <p>The name of the source table.</p>
   */
  SourceTable?: string;

  /**
   * @public
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * @public
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * @public
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * @public
   * <p>The target type.</p>
   */
  TargetType?: string;
}

/**
 * @public
 */
export interface GetMappingResponse {
  /**
   * @public
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: MappingEntry[] | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the task run.</p>
   */
  TaskRunId: string | undefined;
}

/**
 * @public
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   */
  OutputS3Path?: string;
}

/**
 * @public
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
  /**
   * @public
   * <p>The job ID for the Find Matches task run.</p>
   */
  JobId?: string;

  /**
   * @public
   * <p>The name assigned to the job for the Find Matches task run.</p>
   */
  JobName?: string;

  /**
   * @public
   * <p>The job run ID for the Find Matches task run.</p>
   */
  JobRunId?: string;
}

/**
 * @public
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   */
  InputS3Path?: string;

  /**
   * @public
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  Replace?: boolean;
}

/**
 * @public
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * @public
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   */
  OutputS3Path?: string;
}

/**
 * @public
 * @enum
 */
export const TaskType = {
  EVALUATION: "EVALUATION",
  EXPORT_LABELS: "EXPORT_LABELS",
  FIND_MATCHES: "FIND_MATCHES",
  IMPORT_LABELS: "IMPORT_LABELS",
  LABELING_SET_GENERATION: "LABELING_SET_GENERATION",
} as const;

/**
 * @public
 */
export type TaskType = (typeof TaskType)[keyof typeof TaskType];

/**
 * @public
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
  /**
   * @public
   * <p>The type of task run.</p>
   */
  TaskType?: TaskType | string;

  /**
   * @public
   * <p>The configuration properties for an importing labels task run.</p>
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * @public
   * <p>The configuration properties for an exporting labels task run.</p>
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * @public
   * <p>The configuration properties for a labeling set generation task run.</p>
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * @public
   * <p>The configuration properties for a find matches task run.</p>
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
}

/**
 * @public
 */
export interface GetMLTaskRunResponse {
  /**
   * @public
   * <p>The unique identifier of the task run.</p>
   */
  TransformId?: string;

  /**
   * @public
   * <p>The unique run identifier associated with this run.</p>
   */
  TaskRunId?: string;

  /**
   * @public
   * <p>The status for this task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The names of the log groups that are associated with the task run.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>The list of properties that are associated with the task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * @public
   * <p>The error strings that are associated with the task run.</p>
   */
  ErrorString?: string;

  /**
   * @public
   * <p>The date and time when this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The date and time when this task run was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>The date and time when this task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

/**
 * @public
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
  /**
   * @public
   * <p>The type of task run.</p>
   */
  TaskRunType?: TaskType | string;

  /**
   * @public
   * <p>The current status of the task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>Filter on task runs started before this date.</p>
   */
  StartedBefore?: Date;

  /**
   * @public
   * <p>Filter on task runs started after this date.</p>
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
 * @public
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
  /**
   * @public
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  Column: TaskRunSortColumnType | string | undefined;

  /**
   * @public
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

/**
 * @public
 */
export interface GetMLTaskRunsRequest {
  /**
   * @public
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * @public
   * <p>A token for pagination of the results. The default is empty.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return. </p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * @public
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   */
  Sort?: TaskRunSortCriteria;
}

/**
 * @public
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
  /**
   * @public
   * <p>The unique identifier for the transform.</p>
   */
  TransformId?: string;

  /**
   * @public
   * <p>The unique identifier for this task run.</p>
   */
  TaskRunId?: string;

  /**
   * @public
   * <p>The current status of the requested task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * @public
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   */
  LogGroupName?: string;

  /**
   * @public
   * <p>Specifies configuration properties associated with this task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * @public
   * <p>The list of error strings associated with this task run.</p>
   */
  ErrorString?: string;

  /**
   * @public
   * <p>The date and time that this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * @public
   * <p>The last point in time that the requested task run was updated.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>The last point in time that the requested task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * @public
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

/**
 * @public
 */
export interface GetMLTaskRunsResponse {
  /**
   * @public
   * <p>A list of task runs that are associated with the transform.</p>
   */
  TaskRuns?: TaskRun[];

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetMLTransformRequest {
  /**
   * @public
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId: string | undefined;
}

/**
 * @public
 * <p>A structure containing the column name and column importance score for a column. </p>
 *          <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 */
export interface ColumnImportance {
  /**
   * @public
   * <p>The name of a column.</p>
   */
  ColumnName?: string;

  /**
   * @public
   * <p>The column importance score for the column, as a decimal.</p>
   */
  Importance?: number;
}

/**
 * @public
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 */
export interface ConfusionMatrix {
  /**
   * @public
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   */
  NumTruePositives?: number;

  /**
   * @public
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   */
  NumFalsePositives?: number;

  /**
   * @public
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   */
  NumTrueNegatives?: number;

  /**
   * @public
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   */
  NumFalseNegatives?: number;
}

/**
 * @public
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
  /**
   * @public
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  AreaUnderPRCurve?: number;

  /**
   * @public
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Precision?: number;

  /**
   * @public
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Recall?: number;

  /**
   * @public
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   */
  F1?: number;

  /**
   * @public
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   */
  ConfusionMatrix?: ConfusionMatrix;

  /**
   * @public
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   */
  ColumnImportances?: ColumnImportance[];
}

/**
 * @public
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  /**
   * @public
   * <p>The type of machine learning transform.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * @public
   * <p>The evaluation metrics for the find matches algorithm.</p>
   */
  FindMatchesMetrics?: FindMatchesMetrics;
}

/**
 * @public
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 */
export interface SchemaColumn {
  /**
   * @public
   * <p>The name of the column.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of data in the column.</p>
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
   * @public
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

  /**
   * @public
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * @public
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * @public
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * @public
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * @public
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * @public
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * @public
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
   *         page</a>. </p>
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * @public
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
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * @public
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  /**
   * @public
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   */
  TransformType?: TransformType | string;

  /**
   * @public
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * @public
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * @public
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * @public
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * @public
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
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
 * @public
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 */
export interface TransformSortCriteria {
  /**
   * @public
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  Column: TransformSortColumnType | string | undefined;

  /**
   * @public
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

/**
 * @public
 */
export interface GetMLTransformsRequest {
  /**
   * @public
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * @public
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;
}

/**
 * @public
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  /**
   * @public
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

  /**
   * @public
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * @public
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * @public
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * @public
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * @public
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

  /**
   * @public
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * @public
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;

  /**
   * @public
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *          <ul>
   *             <li>
   *                <p>This role needs Glue service role permissions to allow access to resources in Glue. See <a href="https://docs.aws.amazon.com/glue/latest/dg/attach-policy-iam-user.html">Attach a Policy to IAM Users That Access Glue</a>.</p>
   *             </li>
   *             <li>
   *                <p>This role needs permission to your Amazon Simple Storage Service (Amazon S3) sources, targets, temporary directory, scripts, and any libraries used by the task run for this transform.</p>
   *             </li>
   *          </ul>
   */
  Role?: string;

  /**
   * @public
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * @public
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
   */
  MaxCapacity?: number;

  /**
   * @public
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
   */
  WorkerType?: WorkerType | string;

  /**
   * @public
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *          <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * @public
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * @public
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * @public
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

/**
 * @public
 */
export interface GetMLTransformsResponse {
  /**
   * @public
   * <p>A list of machine learning transforms.</p>
   */
  Transforms: MLTransform[] | undefined;

  /**
   * @public
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetPartitionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partition resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partition's table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

/**
 * @public
 */
export interface GetPartitionResponse {
  /**
   * @public
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   */
  Partition?: Partition;
}

/**
 * @public
 */
export interface GetPartitionIndexesRequest {
  /**
   * @public
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A continuation token, included if this is a continuation call.</p>
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
 * @public
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
 */
export interface BackfillError {
  /**
   * @public
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   */
  Code?: BackfillErrorCode | string;

  /**
   * @public
   * <p>A list of a limited number of partitions in the response.</p>
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
 * @public
 * <p>A partition key pair consisting of a name and a type.</p>
 */
export interface KeySchemaElement {
  /**
   * @public
   * <p>The name of a partition key.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The type of a partition key.</p>
   */
  Type: string | undefined;
}

/**
 * @public
 * <p>A descriptor for a partition index in a table.</p>
 */
export interface PartitionIndexDescriptor {
  /**
   * @public
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;

  /**
   * @public
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * @public
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
   */
  IndexStatus: PartitionIndexStatus | string | undefined;

  /**
   * @public
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   */
  BackfillErrors?: BackfillError[];
}

/**
 * @public
 */
export interface GetPartitionIndexesResponse {
  /**
   * @public
   * <p>A list of index descriptors.</p>
   */
  PartitionIndexDescriptorList?: PartitionIndexDescriptor[];

  /**
   * @public
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
 */
export interface Segment {
  /**
   * @public
   * <p>The zero-based index number of the segment. For example, if the total number of segments
   *       is 4, <code>SegmentNumber</code> values range from 0 through 3.</p>
   */
  SegmentNumber: number | undefined;

  /**
   * @public
   * <p>The total number of segments.</p>
   */
  TotalSegments: number | undefined;
}

/**
 * @public
 */
export interface GetPartitionsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * @public
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
   */
  Expression?: string;

  /**
   * @public
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * @public
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   */
  ExcludeColumnSchema?: boolean;

  /**
   * @public
   * <p>The transaction ID at which to read the partition contents.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

/**
 * @public
 */
export interface GetPartitionsResponse {
  /**
   * @public
   * <p>A list of requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * @public
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetPlanRequest {
  /**
   * @public
   * <p>The list of mappings from a source table to target tables.</p>
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * @public
   * <p>The source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * @public
   * <p>The target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * @public
   * <p>The parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * @public
   * <p>The programming language of the code to perform the mapping.</p>
   */
  Language?: Language | string;

  /**
   * @public
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
   */
  AdditionalPlanOptionsMap?: Record<string, string>;
}

/**
 * @public
 */
export interface GetPlanResponse {
  /**
   * @public
   * <p>A Python script to perform the mapping.</p>
   */
  PythonScript?: string;

  /**
   * @public
   * <p>The Scala code to perform the mapping.</p>
   */
  ScalaCode?: string;
}

/**
 * @public
 */
export interface GetRegistryInput {
  /**
   * @public
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

/**
 * @public
 */
export interface GetRegistryResponse {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The status of the registry.</p>
   */
  Status?: RegistryStatus | string;

  /**
   * @public
   * <p>The date and time the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The date and time the registry was updated.</p>
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface GetResourcePoliciesRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A structure for returning a resource policy.</p>
 */
export interface GluePolicy {
  /**
   * @public
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * @public
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * @public
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

/**
 * @public
 */
export interface GetResourcePoliciesResponse {
  /**
   * @public
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   */
  GetResourcePoliciesResponseList?: GluePolicy[];

  /**
   * @public
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * @public
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   */
  ResourceArn?: string;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * @public
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * @public
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * @public
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

/**
 * @public
 */
export interface GetSchemaInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;
}

/**
 * @public
 */
export interface GetSchemaResponse {
  /**
   * @public
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * @public
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>A description of schema if specified when created</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * @public
   * <p>The compatibility mode of the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * @public
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   */
  SchemaCheckpoint?: number;

  /**
   * @public
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   */
  LatestSchemaVersion?: number;

  /**
   * @public
   * <p>The next version of the schema associated with the returned schema definition.</p>
   */
  NextSchemaVersion?: number;

  /**
   * @public
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * @public
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * @public
   * <p>The date and time the schema was updated.</p>
   */
  UpdatedTime?: string;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>The definition of the schema for which schema details are required.</p>
   */
  SchemaDefinition: string | undefined;
}

/**
 * @public
 */
export interface GetSchemaByDefinitionResponse {
  /**
   * @public
   * <p>The schema ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * @public
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * @public
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;
}

/**
 * @public
 * <p>A structure containing the schema version information.</p>
 */
export interface SchemaVersionNumber {
  /**
   * @public
   * <p>The latest version available for the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;
}

/**
 * @public
 */
export interface GetSchemaVersionInput {
  /**
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId?: SchemaId;

  /**
   * @public
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;
}

/**
 * @public
 */
export interface GetSchemaVersionResponse {
  /**
   * @public
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * @public
   * <p>The schema definition for the schema ID.</p>
   */
  SchemaDefinition?: string;

  /**
   * @public
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * @public
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * @public
   * <p>The status of the schema version. </p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * @public
   * <p>The date and time the schema version was created.</p>
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
   * @public
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   *          <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. One of <code>SchemaArn</code> or <code>SchemaName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * @public
   * <p>The first of the two schema versions to be compared.</p>
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * @public
   * <p>The second of the two schema versions to be compared.</p>
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * @public
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   */
  SchemaDiffType: SchemaDiffType | string | undefined;
}

/**
 * @public
 */
export interface GetSchemaVersionsDiffResponse {
  /**
   * @public
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   */
  Diff?: string;
}

/**
 * @public
 */
export interface GetSecurityConfigurationRequest {
  /**
   * @public
   * <p>The name of the security configuration to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Specifies a security configuration.</p>
 */
export interface SecurityConfiguration {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * @public
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;
}

/**
 * @public
 */
export interface GetSecurityConfigurationResponse {
  /**
   * @public
   * <p>The requested security configuration.</p>
   */
  SecurityConfiguration?: SecurityConfiguration;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsRequest {
  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSecurityConfigurationsResponse {
  /**
   * @public
   * <p>A list of security configurations.</p>
   */
  SecurityConfigurations?: SecurityConfiguration[];

  /**
   * @public
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetSessionRequest {
  /**
   * @public
   * <p>The ID of the session. </p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 */
export interface GetSessionResponse {
  /**
   * @public
   * <p>The session object is returned in the response.</p>
   */
  Session?: Session;
}

/**
 * @public
 */
export interface GetStatementRequest {
  /**
   * @public
   * <p>The Session ID of the statement.</p>
   */
  SessionId: string | undefined;

  /**
   * @public
   * <p>The Id of the statement.</p>
   */
  Id: number | undefined;

  /**
   * @public
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

/**
 * @public
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutputData {
  /**
   * @public
   * <p>The code execution output in text format.</p>
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
 * @public
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutput {
  /**
   * @public
   * <p>The code execution output.</p>
   */
  Data?: StatementOutputData;

  /**
   * @public
   * <p>The execution count of the output.</p>
   */
  ExecutionCount?: number;

  /**
   * @public
   * <p>The status of the code execution output.</p>
   */
  Status?: StatementState | string;

  /**
   * @public
   * <p>The name of the error in the output.</p>
   */
  ErrorName?: string;

  /**
   * @public
   * <p>The error value of the output.</p>
   */
  ErrorValue?: string;

  /**
   * @public
   * <p>The traceback of the output.</p>
   */
  Traceback?: string[];
}

/**
 * @public
 * <p>The statement or request for a particular action to occur in a session.</p>
 */
export interface Statement {
  /**
   * @public
   * <p>The ID of the statement.</p>
   */
  Id?: number;

  /**
   * @public
   * <p>The execution code of the statement.</p>
   */
  Code?: string;

  /**
   * @public
   * <p>The state while request is actioned.</p>
   */
  State?: StatementState | string;

  /**
   * @public
   * <p>The output in JSON.</p>
   */
  Output?: StatementOutput;

  /**
   * @public
   * <p>The code execution progress.</p>
   */
  Progress?: number;

  /**
   * @public
   * <p>The unix time and date that the job definition was started.</p>
   */
  StartedOn?: number;

  /**
   * @public
   * <p>The unix time and date that the job definition was completed.</p>
   */
  CompletedOn?: number;
}

/**
 * @public
 */
export interface GetStatementResponse {
  /**
   * @public
   * <p>Returns the statement.</p>
   */
  Statement?: Statement;
}

/**
 * @public
 */
export interface GetTableRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The transaction ID at which to read the table contents. </p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

/**
 * @public
 * <p>A table that points to an entity outside the Glue Data Catalog.</p>
 */
export interface FederatedTable {
  /**
   * @public
   * <p>A unique identifier for the federated table.</p>
   */
  Identifier?: string;

  /**
   * @public
   * <p>A unique identifier for the federated database.</p>
   */
  DatabaseIdentifier?: string;

  /**
   * @public
   * <p>The name of the connection to the external metastore.</p>
   */
  ConnectionName?: string;
}

/**
 * @public
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
  /**
   * @public
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the database where the table metadata resides.
   *       For Hive compatibility, this must be all lowercase.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The owner of the table.</p>
   */
  Owner?: string;

  /**
   * @public
   * <p>The time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * @public
   * <p>The last time that the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * @public
   * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
   *       be reliable.</p>
   */
  LastAccessTime?: Date;

  /**
   * @public
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * @public
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * @public
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * @public
   * <p>A list of columns by which the table is partitioned. Only primitive
   *       types are supported as partition keys.</p>
   *          <p>When you create a table used by Amazon Athena, and you do not specify any
   *         <code>partitionKeys</code>, you must at least set the value of <code>partitionKeys</code> to
   *       an empty list. For example:</p>
   *          <p>
   *             <code>"PartitionKeys": []</code>
   *          </p>
   */
  PartitionKeys?: Column[];

  /**
   * @public
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.
   *     If the table is a <code>VIRTUAL_VIEW</code>, certain Athena configuration encoded in base64.</p>
   */
  ViewOriginalText?: string;

  /**
   * @public
   * <p>Included for Apache Hive compatibility. Not used in the normal course of Glue operations.</p>
   */
  ViewExpandedText?: string;

  /**
   * @public
   * <p>The type of this table.
   *       Glue will create tables with the <code>EXTERNAL_TABLE</code> type.
   *       Other services, such as Athena, may create tables with additional table types.
   *     </p>
   *          <p>Glue related table types:</p>
   *          <dl>
   *             <dt>EXTERNAL_TABLE</dt>
   *             <dd>
   *                <p>Hive compatible attribute - indicates a non-Hive managed table.</p>
   *             </dd>
   *             <dt>GOVERNED</dt>
   *             <dd>
   *                <p>Used by Lake Formation.
   *             The Glue Data Catalog understands <code>GOVERNED</code>.</p>
   *             </dd>
   *          </dl>
   */
  TableType?: string;

  /**
   * @public
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * @public
   * <p>The person or entity who created the table.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>Indicates whether the table has been registered with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

  /**
   * @public
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;

  /**
   * @public
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The ID of the table version.</p>
   */
  VersionId?: string;

  /**
   * @public
   * <p>A <code>FederatedTable</code> structure that references an entity outside the Glue Data Catalog.</p>
   */
  FederatedTable?: FederatedTable;
}

/**
 * @public
 */
export interface GetTableResponse {
  /**
   * @public
   * <p>The <code>Table</code> object that defines the specified table.</p>
   */
  Table?: Table;
}

/**
 * @public
 */
export interface GetTablesRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   */
  Expression?: string;

  /**
   * @public
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * @public
   * <p>The transaction ID at which to read the table contents.</p>
   */
  TransactionId?: string;

  /**
   * @public
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

/**
 * @public
 */
export interface GetTablesResponse {
  /**
   * @public
   * <p>A list of the requested <code>Table</code> objects.</p>
   */
  TableList?: Table[];

  /**
   * @public
   * <p>A continuation token, present if the current list segment is
   *       not the last.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTableVersionRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   */
  VersionId?: string;
}

/**
 * @public
 * <p>Specifies a version of a table.</p>
 */
export interface TableVersion {
  /**
   * @public
   * <p>The table in question.</p>
   */
  Table?: Table;

  /**
   * @public
   * <p>The ID value that identifies this table version. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;
}

/**
 * @public
 */
export interface GetTableVersionResponse {
  /**
   * @public
   * <p>The requested table version.</p>
   */
  TableVersion?: TableVersion;
}

/**
 * @public
 */
export interface GetTableVersionsRequest {
  /**
   * @public
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * @public
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * @public
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * @public
   * <p>A continuation token, if this is not the first call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of table versions to return in one response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetTableVersionsResponse {
  /**
   * @public
   * <p>A list of strings identifying available versions of the
   *       specified table.</p>
   */
  TableVersions?: TableVersion[];

  /**
   * @public
   * <p>A continuation token, if the list of available versions does
   *       not include the last one.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * @public
   * <p>The requested tags.</p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetTriggerRequest {
  /**
   * @public
   * <p>The name of the trigger to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetTriggerResponse {
  /**
   * @public
   * <p>The requested trigger definition.</p>
   */
  Trigger?: Trigger;
}

/**
 * @public
 */
export interface GetTriggersRequest {
  /**
   * @public
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * @public
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface GetTriggersResponse {
  /**
   * @public
   * <p>A list of triggers for the specified job.</p>
   */
  Triggers?: Trigger[];

  /**
   * @public
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   */
  NextToken?: string;
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
