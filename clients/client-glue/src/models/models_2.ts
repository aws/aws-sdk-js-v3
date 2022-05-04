// smithy-typescript generated code
import {
  Action,
  Compatibility,
  EventBatchingCondition,
  PartitionInput,
  Predicate,
  RegistryId,
  SchemaId,
  TableInput,
  TransformParameters,
  Trigger,
  UserDefinedFunctionInput,
  WorkerType,
} from "./models_0";
import { SchemaVersionNumber } from "./models_1";

export interface UpdateJobResponse {
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export namespace UpdateJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateJobResponse): any => ({
    ...obj,
  });
}

export interface UpdateMLTransformRequest {
  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * <p>The configuration parameters that are specific to the transform type (algorithm) used.
   *       Conditionally dependent on the transform type.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">Glue pricing
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;
}

export namespace UpdateMLTransformRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
    ...obj,
  });
}

export interface UpdatePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be updated resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;

  /**
   * <p>List of partition key values that define the partition to update.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The new partition object to update the partition to.</p>
   *
   * 	        <p>The <code>Values</code> property can't be changed. If you want to change the partition key values for a partition, delete and recreate the partition.</p>
   */
  PartitionInput: PartitionInput | undefined;
}

export namespace UpdatePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
    ...obj,
  });
}

export interface UpdatePartitionResponse {}

export namespace UpdatePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
    ...obj,
  });
}

export interface UpdateRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;

  /**
   * <p>A description of the registry. If description is not provided, this field will not be updated.</p>
   */
  Description: string | undefined;
}

export namespace UpdateRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryInput): any => ({
    ...obj,
  });
}

export interface UpdateRegistryResponse {
  /**
   * <p>The name of the updated registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource name (ARN) of the updated registry.</p>
   */
  RegistryArn?: string;
}

export namespace UpdateRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateRegistryResponse): any => ({
    ...obj,
  });
}

export interface UpdateSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
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
   * <p>Version number required for check pointing. One of <code>VersionNumber</code> or <code>Compatibility</code> has to be provided.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The new compatibility setting for the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The new description for the schema.</p>
   */
  Description?: string;
}

export namespace UpdateSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaInput): any => ({
    ...obj,
  });
}

export interface UpdateSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name of the registry that contains the schema.</p>
   */
  RegistryName?: string;
}

export namespace UpdateSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateSchemaResponse): any => ({
    ...obj,
  });
}

export interface UpdateTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>An updated <code>TableInput</code> object to define the metadata table
   *       in the catalog.</p>
   */
  TableInput: TableInput | undefined;

  /**
   * <p>By default, <code>UpdateTable</code> always creates an archived version of the table
   *       before updating it. However, if <code>skipArchive</code> is set to true,
   *         <code>UpdateTable</code> does not create the archived version.</p>
   */
  SkipArchive?: boolean;

  /**
   * <p>The transaction ID at which to update the table contents. </p>
   */
  TransactionId?: string;

  VersionId?: string;
}

export namespace UpdateTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTableRequest): any => ({
    ...obj,
  });
}

export interface UpdateTableResponse {}

export namespace UpdateTableResponse {
  /**
   * @internal
   */
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
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>Batch condition that must be met (specified number of events received or batch time window expired)
   *       before EventBridge event trigger fires.</p>
   */
  EventBatchingCondition?: EventBatchingCondition;
}

export namespace TriggerUpdate {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj,
  });
}

export interface UpdateTriggerRequest {
  /**
   * <p>The name of the trigger to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The new values with which to update the trigger.</p>
   */
  TriggerUpdate: TriggerUpdate | undefined;
}

export namespace UpdateTriggerRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace UpdateUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface UpdateUserDefinedFunctionResponse {}

export namespace UpdateUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface UpdateWorkflowRequest {
  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>You can use this parameter to prevent unwanted multiple updates to data, to control costs, or in some cases, to prevent exceeding the maximum number of concurrent runs of any of the component jobs. If you leave this parameter blank, there is no limit to the number of concurrent workflow runs.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace UpdateWorkflowRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj,
  });
}
