// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { GlueServiceException as __BaseException } from "./GlueServiceException";
import {
  AuditContext,
  Blueprint,
  CodeGenEdge,
  CodeGenNode,
  CodeGenNodeArg,
  Column,
  Compatibility,
  ConnectionType,
  Crawler,
  CsvHeaderOption,
  CustomEntityType,
  DatabaseIdentifier,
  DataFormat,
  DevEndpoint,
  EncryptionConfiguration,
  ErrorDetail,
  GlueTable,
  JobRun,
  Language,
  Partition,
  PartitionValueList,
  PhysicalConnectionRequirements,
  PrincipalPermissions,
  PrincipalType,
  RegistryId,
  ResourceUri,
  SchemaId,
  SchemaStatus,
  SchemaVersionStatus,
  Session,
  StorageDescriptor,
  TableIdentifier,
  TaskStatusType,
  TransformEncryption,
  TransformParameters,
  TransformType,
  Trigger,
  WorkerType,
  Workflow,
  WorkflowRun,
} from "./models_0";

export interface DeleteClassifierResponse {}

export namespace DeleteClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteClassifierResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>Name of the column.</p>
   */
  ColumnName: string | undefined;
}

export namespace DeleteColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForPartitionResponse {}

export namespace DeleteColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the column.</p>
   */
  ColumnName: string | undefined;
}

export namespace DeleteColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteColumnStatisticsForTableResponse {}

export namespace DeleteColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection to delete.</p>
   */
  ConnectionName: string | undefined;
}

export namespace DeleteConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj,
  });
}

export interface DeleteConnectionResponse {}

export namespace DeleteConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export class CrawlerRunningException extends __BaseException {
  readonly name: "CrawlerRunningException" = "CrawlerRunningException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeleteCrawlerRequest {
  /**
   * <p>The name of the crawler to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrawlerRequest): any => ({
    ...obj,
  });
}

export interface DeleteCrawlerResponse {}

export namespace DeleteCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCrawlerResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The specified scheduler is transitioning.</p>
 */
export class SchedulerTransitioningException extends __BaseException {
  readonly name: "SchedulerTransitioningException" = "SchedulerTransitioningException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeleteCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCustomEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface DeleteCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern you deleted.</p>
   */
  Name?: string;
}

export namespace DeleteCustomEntityTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteCustomEntityTypeResponse): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to delete. For Hive compatibility, this must be all
   *       lowercase.</p>
   */
  Name: string | undefined;
}

export namespace DeleteDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
    ...obj,
  });
}

export interface DeleteDatabaseResponse {}

export namespace DeleteDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDatabaseResponse): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointRequest {
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface DeleteDevEndpointResponse {}

export namespace DeleteDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface DeleteJobRequest {
  /**
   * <p>The name of the job definition to delete.</p>
   */
  JobName: string | undefined;
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
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;
}

export namespace DeleteJobResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformRequest {
  /**
   * <p>The unique identifier of the transform to delete.</p>
   */
  TransformId: string | undefined;
}

export namespace DeleteMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMLTransformRequest): any => ({
    ...obj,
  });
}

export interface DeleteMLTransformResponse {
  /**
   * <p>The unique identifier of the transform that was deleted.</p>
   */
  TransformId?: string;
}

export namespace DeleteMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteMLTransformResponse): any => ({
    ...obj,
  });
}

export interface DeletePartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table that contains the partition to be deleted.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

export namespace DeletePartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionRequest): any => ({
    ...obj,
  });
}

export interface DeletePartitionResponse {}

export namespace DeletePartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>CreatePartitions</code> API was called on a table that has indexes enabled.	</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeletePartitionIndexRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database from which you want to delete a partition index.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table from which you want to delete a partition index.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The name of the partition index to be deleted.</p>
   */
  IndexName: string | undefined;
}

export namespace DeletePartitionIndexRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionIndexRequest): any => ({
    ...obj,
  });
}

export interface DeletePartitionIndexResponse {}

export namespace DeletePartitionIndexResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeletePartitionIndexResponse): any => ({
    ...obj,
  });
}

export interface DeleteRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

export namespace DeleteRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryInput): any => ({
    ...obj,
  });
}

export enum RegistryStatus {
  AVAILABLE = "AVAILABLE",
  DELETING = "DELETING",
}

export interface DeleteRegistryResponse {
  /**
   * <p>The name of the registry being deleted.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry being deleted.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The status of the registry. A successful operation will return the <code>Deleting</code> status.</p>
   */
  Status?: RegistryStatus | string;
}

export namespace DeleteRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRegistryResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A specified condition was not satisfied.</p>
 */
export class ConditionCheckFailureException extends __BaseException {
  readonly name: "ConditionCheckFailureException" = "ConditionCheckFailureException";
  readonly $fault: "client" = "client";
  /**
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

export interface DeleteResourcePolicyRequest {
  /**
   * <p>The hash value returned when this policy was set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>The ARN of the Glue resource for the resource policy to be deleted.</p>
   */
  ResourceArn?: string;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface DeleteSchemaInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;
}

export namespace DeleteSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaInput): any => ({
    ...obj,
  });
}

export interface DeleteSchemaResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema being deleted.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name of the schema being deleted.</p>
   */
  SchemaName?: string;

  /**
   * <p>The status of the schema.</p>
   */
  Status?: SchemaStatus | string;
}

export namespace DeleteSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaResponse): any => ({
    ...obj,
  });
}

export interface DeleteSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>A version range may be supplied which may be of the format:</p>
   * 	        <ul>
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

export namespace DeleteSchemaVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaVersionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object containing error details.</p>
 */
export interface ErrorDetails {
  /**
   * <p>The error code for an error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message for an error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetails {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorDetails): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains the error details for an operation on a schema version.</p>
 */
export interface SchemaVersionErrorItem {
  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The details of the error for the schema version.</p>
   */
  ErrorDetails?: ErrorDetails;
}

export namespace SchemaVersionErrorItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionErrorItem): any => ({
    ...obj,
  });
}

export interface DeleteSchemaVersionsResponse {
  /**
   * <p>A list of <code>SchemaVersionErrorItem</code> objects, each containing an error and schema version.</p>
   */
  SchemaVersionErrors?: SchemaVersionErrorItem[];
}

export namespace DeleteSchemaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSchemaVersionsResponse): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationRequest {
  /**
   * <p>The name of the security configuration to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationRequest): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationResponse {}

export namespace DeleteSecurityConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface DeleteSessionRequest {
  /**
   * <p>The ID of the session to be deleted.</p>
   */
  Id: string | undefined;

  /**
   * <p>The name of the origin of the delete session request.</p>
   */
  RequestOrigin?: string;
}

export namespace DeleteSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionRequest): any => ({
    ...obj,
  });
}

export interface DeleteSessionResponse {
  /**
   * <p>Returns the ID of the deleted session.</p>
   */
  Id?: string;
}

export namespace DeleteSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteSessionResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableRequest {
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
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to delete the table contents.</p>
   */
  TransactionId?: string;
}

export namespace DeleteTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableResponse {}

export namespace DeleteTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableResponse): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID of the table version to be deleted. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId: string | undefined;
}

export namespace DeleteTableVersionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableVersionRequest): any => ({
    ...obj,
  });
}

export interface DeleteTableVersionResponse {}

export namespace DeleteTableVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTableVersionResponse): any => ({
    ...obj,
  });
}

export interface DeleteTriggerRequest {
  /**
   * <p>The name of the trigger to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteTriggerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTriggerRequest): any => ({
    ...obj,
  });
}

export interface DeleteTriggerResponse {
  /**
   * <p>The name of the trigger that was deleted.</p>
   */
  Name?: string;
}

export namespace DeleteTriggerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteTriggerResponse): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function definition to be deleted.</p>
   */
  FunctionName: string | undefined;
}

export namespace DeleteUserDefinedFunctionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionRequest): any => ({
    ...obj,
  });
}

export interface DeleteUserDefinedFunctionResponse {}

export namespace DeleteUserDefinedFunctionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowRequest {
  /**
   * <p>Name of the workflow to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteWorkflowRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
    ...obj,
  });
}

export interface DeleteWorkflowResponse {
  /**
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;
}

export namespace DeleteWorkflowResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteWorkflowResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether or not to include the blueprint in the response.</p>
   */
  IncludeBlueprint?: boolean;

  /**
   * <p>Specifies whether or not to include the parameter specification.</p>
   */
  IncludeParameterSpec?: boolean;
}

export namespace GetBlueprintRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintResponse {
  /**
   * <p>Returns a <code>Blueprint</code> object.</p>
   */
  Blueprint?: Blueprint;
}

export namespace GetBlueprintResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * <p>The run ID for the blueprint run you want to retrieve.</p>
   */
  RunId: string | undefined;
}

export namespace GetBlueprintRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunRequest): any => ({
    ...obj,
  });
}

export enum BlueprintRunState {
  FAILED = "FAILED",
  ROLLING_BACK = "ROLLING_BACK",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED",
}

/**
 * <p>The details of a blueprint run.</p>
 */
export interface BlueprintRun {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName?: string;

  /**
   * <p>The run ID for this blueprint run.</p>
   */
  RunId?: string;

  /**
   * <p>The name of a workflow that is created as a result of a successful blueprint run. If a blueprint run has an error, there will not be a workflow created.</p>
   */
  WorkflowName?: string;

  /**
   * <p>The state of the blueprint run. Possible values are:</p>
   *
   * 	        <ul>
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
   * <p>The date and time that the blueprint run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time that the blueprint run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>Indicates any errors that are seen while running the blueprint.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>If there are any errors while creating the entities of a workflow, we try to roll back the created entities until that point and delete them. This attribute indicates the errors seen while trying to delete the entities that are created.</p>
   */
  RollbackErrorMessage?: string;

  /**
   * <p>The blueprint parameters as a string. You will have to provide a value for each key that is required from the parameter spec that is defined in the <code>Blueprint$ParameterSpec</code>.</p>
   */
  Parameters?: string;

  /**
   * <p>The role ARN. This role will be assumed by the Glue service and will be used to create the workflow and other entities of a workflow.</p>
   */
  RoleArn?: string;
}

export namespace BlueprintRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BlueprintRun): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunResponse {
  /**
   * <p>Returns a <code>BlueprintRun</code> object.</p>
   */
  BlueprintRun?: BlueprintRun;
}

export namespace GetBlueprintRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunResponse): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunsRequest {
  /**
   * <p>The name of the blueprint.</p>
   */
  BlueprintName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;
}

export namespace GetBlueprintRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunsRequest): any => ({
    ...obj,
  });
}

export interface GetBlueprintRunsResponse {
  /**
   * <p>Returns a list of <code>BlueprintRun</code> objects.</p>
   */
  BlueprintRuns?: BlueprintRun[];

  /**
   * <p>A continuation token, if not all blueprint runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetBlueprintRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetBlueprintRunsResponse): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusRequest {
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

export namespace GetCatalogImportStatusRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogImportStatusRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing migration status information.</p>
 */
export interface CatalogImportStatus {
  /**
   * <p>
   *             <code>True</code> if the migration has completed, or <code>False</code> otherwise.</p>
   */
  ImportCompleted?: boolean;

  /**
   * <p>The time that the migration was started.</p>
   */
  ImportTime?: Date;

  /**
   * <p>The name of the person who initiated the migration.</p>
   */
  ImportedBy?: string;
}

export namespace CatalogImportStatus {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogImportStatus): any => ({
    ...obj,
  });
}

export interface GetCatalogImportStatusResponse {
  /**
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: CatalogImportStatus;
}

export namespace GetCatalogImportStatusResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCatalogImportStatusResponse): any => ({
    ...obj,
  });
}

export interface GetClassifierRequest {
  /**
   * <p>Name of the classifier to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetClassifierRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifierRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;
}

export namespace CsvClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CsvClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs, and
   *       so on.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The grok pattern applied to a data store by this classifier.
   *        For more information, see built-in patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>Optional custom grok patterns defined by this classifier.
   *       For more information, see custom patterns in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;
}

export namespace GrokClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GrokClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify.
   *       Glue supports a subset of JsonPath, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;
}

export namespace JsonClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JsonClassifier): any => ({
    ...obj,
  });
}

/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace XMLClassifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: XMLClassifier): any => ({
    ...obj,
  });
}

/**
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
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: GrokClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: XMLClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: JsonClassifier;

  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: CsvClassifier;
}

export namespace Classifier {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Classifier): any => ({
    ...obj,
  });
}

export interface GetClassifierResponse {
  /**
   * <p>The requested classifier.</p>
   */
  Classifier?: Classifier;
}

export namespace GetClassifierResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifierResponse): any => ({
    ...obj,
  });
}

export interface GetClassifiersRequest {
  /**
   * <p>The size of the list to return (optional).</p>
   */
  MaxResults?: number;

  /**
   * <p>An optional continuation token.</p>
   */
  NextToken?: string;
}

export namespace GetClassifiersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifiersRequest): any => ({
    ...obj,
  });
}

export interface GetClassifiersResponse {
  /**
   * <p>The requested list of classifier
   *       objects.</p>
   */
  Classifiers?: Classifier[];

  /**
   * <p>A continuation token.</p>
   */
  NextToken?: string;
}

export namespace GetClassifiersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetClassifiersResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of partition values identifying the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

export namespace GetColumnStatisticsForPartitionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for bit sequence data values.</p>
 */
export interface BinaryColumnStatisticsData {
  /**
   * <p>The size of the longest bit sequence in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average bit sequence length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace BinaryColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BinaryColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for Boolean data columns.</p>
 */
export interface BooleanColumnStatisticsData {
  /**
   * <p>The number of true values in the column.</p>
   */
  NumberOfTrues: number | undefined;

  /**
   * <p>The number of false values in the column.</p>
   */
  NumberOfFalses: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;
}

export namespace BooleanColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BooleanColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for timestamp data columns.</p>
 */
export interface DateColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: Date;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: Date;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DateColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DateColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Contains a numeric value in decimal format.</p>
 */
export interface DecimalNumber {
  /**
   * <p>The unscaled numeric value.</p>
   */
  UnscaledValue: Uint8Array | undefined;

  /**
   * <p>The scale that determines where the decimal point falls in the
   *       unscaled value.</p>
   */
  Scale: number | undefined;
}

export namespace DecimalNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalNumber): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for fixed-point number data columns.</p>
 */
export interface DecimalColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: DecimalNumber;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: DecimalNumber;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DecimalColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DecimalColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for floating-point number data columns.</p>
 */
export interface DoubleColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace DoubleColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DoubleColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for integer data columns.</p>
 */
export interface LongColumnStatisticsData {
  /**
   * <p>The lowest value in the column.</p>
   */
  MinimumValue?: number;

  /**
   * <p>The highest value in the column.</p>
   */
  MaximumValue?: number;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace LongColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LongColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Defines column statistics supported for character sequence data values.</p>
 */
export interface StringColumnStatisticsData {
  /**
   * <p>The size of the longest string in the column.</p>
   */
  MaximumLength: number | undefined;

  /**
   * <p>The average string length in the column.</p>
   */
  AverageLength: number | undefined;

  /**
   * <p>The number of null values in the column.</p>
   */
  NumberOfNulls: number | undefined;

  /**
   * <p>The number of distinct values in a column.</p>
   */
  NumberOfDistinctValues: number | undefined;
}

export namespace StringColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StringColumnStatisticsData): any => ({
    ...obj,
  });
}

export enum ColumnStatisticsType {
  BINARY = "BINARY",
  BOOLEAN = "BOOLEAN",
  DATE = "DATE",
  DECIMAL = "DECIMAL",
  DOUBLE = "DOUBLE",
  LONG = "LONG",
  STRING = "STRING",
}

/**
 * <p>Contains the individual types of column statistics data. Only one data object should be set and indicated by the <code>Type</code> attribute.</p>
 */
export interface ColumnStatisticsData {
  /**
   * <p>The type of column statistics data.</p>
   */
  Type: ColumnStatisticsType | string | undefined;

  /**
   * <p>Boolean column statistics data.</p>
   */
  BooleanColumnStatisticsData?: BooleanColumnStatisticsData;

  /**
   * <p>Date column statistics data.</p>
   */
  DateColumnStatisticsData?: DateColumnStatisticsData;

  /**
   * <p>Decimal column statistics data.</p>
   */
  DecimalColumnStatisticsData?: DecimalColumnStatisticsData;

  /**
   * <p>Double column statistics data.</p>
   */
  DoubleColumnStatisticsData?: DoubleColumnStatisticsData;

  /**
   * <p>Long column statistics data.</p>
   */
  LongColumnStatisticsData?: LongColumnStatisticsData;

  /**
   * <p>String column statistics data.</p>
   */
  StringColumnStatisticsData?: StringColumnStatisticsData;

  /**
   * <p>Binary column statistics data.</p>
   */
  BinaryColumnStatisticsData?: BinaryColumnStatisticsData;
}

export namespace ColumnStatisticsData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatisticsData): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the generated column-level statistics for a table or partition.</p>
 */
export interface ColumnStatistics {
  /**
   * <p>Name of column which statistics belong to.</p>
   */
  ColumnName: string | undefined;

  /**
   * <p>The data type of the column.</p>
   */
  ColumnType: string | undefined;

  /**
   * <p>The timestamp of when column statistics were generated.</p>
   */
  AnalyzedTime: Date | undefined;

  /**
   * <p>A <code>ColumnStatisticData</code> object that contains the statistics data values.</p>
   */
  StatisticsData: ColumnStatisticsData | undefined;
}

export namespace ColumnStatistics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnStatistics): any => ({
    ...obj,
  });
}

/**
 * <p>Encapsulates a column name that failed and the reason for failure.</p>
 */
export interface ColumnError {
  /**
   * <p>The name of the column that failed.</p>
   */
  ColumnName?: string;

  /**
   * <p>An error message with the reason for the failure of an operation.</p>
   */
  Error?: ErrorDetail;
}

export namespace ColumnError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnError): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForPartitionResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>Error occurred during retrieving column statistics data.</p>
   */
  Errors?: ColumnError[];
}

export namespace GetColumnStatisticsForPartitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForPartitionResponse): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the column names.</p>
   */
  ColumnNames: string[] | undefined;
}

export namespace GetColumnStatisticsForTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableRequest): any => ({
    ...obj,
  });
}

export interface GetColumnStatisticsForTableResponse {
  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  ColumnStatisticsList?: ColumnStatistics[];

  /**
   * <p>List of ColumnStatistics that failed to be retrieved.</p>
   */
  Errors?: ColumnError[];
}

export namespace GetColumnStatisticsForTableResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetColumnStatisticsForTableResponse): any => ({
    ...obj,
  });
}

export interface GetConnectionRequest {
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection definition to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;
}

export namespace GetConnectionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a connection to a data source.</p>
 */
export interface Connection {
  /**
   * <p>The name of the connection definition.</p>
   */
  Name?: string;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of the connection. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
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
   *                   <code>KAFKA_SASL_MECHANISM</code> - <code>"SCRAM-SHA-512"</code> or <code>"GSSAPI"</code>. These are the two supported <a href="https://www.iana.org/assignments/sasl-mechanisms/sasl-mechanisms.xhtml">SASL Mechanisms</a>.</p>
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
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;
}

export namespace Connection {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj,
  });
}

export interface GetConnectionResponse {
  /**
   * <p>The requested connection definition.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
  /**
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>The type of connections to return. Currently, SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;
}

export namespace GetConnectionsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsFilter): any => ({
    ...obj,
  });
}

export interface GetConnectionsRequest {
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A filter that controls which connections are returned.</p>
   */
  Filter?: GetConnectionsFilter;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   */
  MaxResults?: number;
}

export namespace GetConnectionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj,
  });
}

export interface GetConnectionsResponse {
  /**
   * <p>A list of requested connection definitions.</p>
   */
  ConnectionList?: Connection[];

  /**
   * <p>A continuation token, if the list of connections returned does not
   *       include the last of the filtered connections.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerRequest {
  /**
   * <p>The name of the crawler to retrieve metadata for.</p>
   */
  Name: string | undefined;
}

export namespace GetCrawlerRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlerResponse {
  /**
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: Crawler;
}

export namespace GetCrawlerResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsRequest {
  /**
   * <p>A list of the names of crawlers about which to retrieve metrics.</p>
   */
  CrawlerNameList?: string[];

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlerMetricsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerMetricsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
  /**
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;
}

export namespace CrawlerMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlerMetrics): any => ({
    ...obj,
  });
}

export interface GetCrawlerMetricsResponse {
  /**
   * <p>A list of metrics for the specified crawler.</p>
   */
  CrawlerMetricsList?: CrawlerMetrics[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlerMetricsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlerMetricsResponse): any => ({
    ...obj,
  });
}

export interface GetCrawlersRequest {
  /**
   * <p>The number of crawlers to return on each call.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlersRequest): any => ({
    ...obj,
  });
}

export interface GetCrawlersResponse {
  /**
   * <p>A list of crawler metadata.</p>
   */
  Crawlers?: Crawler[];

  /**
   * <p>A continuation token, if the returned list has not reached the end
   *       of those defined in this customer account.</p>
   */
  NextToken?: string;
}

export namespace GetCrawlersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCrawlersResponse): any => ({
    ...obj,
  });
}

export interface GetCustomEntityTypeRequest {
  /**
   * <p>The name of the custom pattern that you want to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetCustomEntityTypeRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomEntityTypeRequest): any => ({
    ...obj,
  });
}

export interface GetCustomEntityTypeResponse {
  /**
   * <p>The name of the custom pattern that you retrieved.</p>
   */
  Name?: string;

  /**
   * <p>A regular expression string that is used for detecting sensitive data in a custom pattern.</p>
   */
  RegexString?: string;

  /**
   * <p>A list of context words if specified when you created the custom pattern. If none of these context words are found within the vicinity of the regular expression the data will not be detected as sensitive data.</p>
   */
  ContextWords?: string[];
}

export namespace GetCustomEntityTypeResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetCustomEntityTypeResponse): any => ({
    ...obj,
  });
}

export interface GetDatabaseRequest {
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the Amazon Web Services
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database to retrieve. For Hive compatibility, this
   *       should be all lowercase.</p>
   */
  Name: string | undefined;
}

export namespace GetDatabaseRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabaseRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A <code>DatabaseIdentifier</code> structure that describes a target database for resource linking.</p>
   */
  TargetDatabase?: DatabaseIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the database resides.</p>
   */
  CatalogId?: string;
}

export namespace Database {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj,
  });
}

export interface GetDatabaseResponse {
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   */
  Database?: Database;
}

export namespace GetDatabaseResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabaseResponse): any => ({
    ...obj,
  });
}

export enum ResourceShareType {
  ALL = "ALL",
  FOREIGN = "FOREIGN",
}

export interface GetDatabasesRequest {
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>Allows you to specify that you want to list the databases shared with your account. The allowable values are <code>FOREIGN</code> or <code>ALL</code>. </p>
   *
   * 	        <ul>
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

export namespace GetDatabasesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabasesRequest): any => ({
    ...obj,
  });
}

export interface GetDatabasesResponse {
  /**
   * <p>A list of <code>Database</code> objects from the specified catalog.</p>
   */
  DatabaseList: Database[] | undefined;

  /**
   * <p>A continuation token for paginating the returned list of tokens,
   *       returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace GetDatabasesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDatabasesResponse): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDataCatalogEncryptionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *
 * 	        <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *
 *          <p>This encryption requires that you set KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;

  /**
   * <p>An KMS key that is used to encrypt the connection password. </p>
   *
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *
   * 	        <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;
}

export namespace ConnectionPasswordEncryption {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConnectionPasswordEncryption): any => ({
    ...obj,
  });
}

export enum CatalogEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
}

/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;

  /**
   * <p>The ID of the KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;
}

export namespace EncryptionAtRest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EncryptionAtRest): any => ({
    ...obj,
  });
}

/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface DataCatalogEncryptionSettings {
  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;

  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;
}

export namespace DataCatalogEncryptionSettings {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DataCatalogEncryptionSettings): any => ({
    ...obj,
  });
}

export interface GetDataCatalogEncryptionSettingsResponse {
  /**
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

export namespace GetDataCatalogEncryptionSettingsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataCatalogEncryptionSettingsResponse): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphRequest {
  /**
   * <p>The Python script to transform.</p>
   */
  PythonScript?: string;
}

export namespace GetDataflowGraphRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataflowGraphRequest): any => ({
    ...obj,
  });
}

export interface GetDataflowGraphResponse {
  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: CodeGenEdge[];
}

export namespace GetDataflowGraphResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDataflowGraphResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointRequest {
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   */
  EndpointName: string | undefined;
}

export namespace GetDevEndpointRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointResponse {
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: DevEndpoint;
}

export namespace GetDevEndpointResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointResponse): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsRequest {
  /**
   * <p>The maximum size of information to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointsRequest): any => ({
    ...obj,
  });
}

export interface GetDevEndpointsResponse {
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A continuation token, if not all <code>DevEndpoint</code> definitions have yet been
   *       returned.</p>
   */
  NextToken?: string;
}

export namespace GetDevEndpointsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface GetJobRequest {
  /**
   * <p>The name of the job definition to retrieve.</p>
   */
  JobName: string | undefined;
}

export namespace GetJobRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkRequest {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

export namespace GetJobBookmarkRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobBookmarkRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
  /**
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * <p>The version of the job.</p>
   */
  Version?: number;

  /**
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The run ID number.</p>
   */
  RunId?: string;

  /**
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;
}

export namespace JobBookmarkEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: JobBookmarkEntry): any => ({
    ...obj,
  });
}

export interface GetJobBookmarkResponse {
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace GetJobBookmarkResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobBookmarkResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunRequest {
  /**
   * <p>Name of the job definition being run.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The ID of the job run.</p>
   */
  RunId: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   */
  PredecessorsIncluded?: boolean;
}

export namespace GetJobRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunResponse {
  /**
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: JobRun;
}

export namespace GetJobRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunResponse): any => ({
    ...obj,
  });
}

export interface GetJobRunsRequest {
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetJobRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunsRequest): any => ({
    ...obj,
  });
}

export interface GetJobRunsResponse {
  /**
   * <p>A list of job-run metadata objects.</p>
   */
  JobRuns?: JobRun[];

  /**
   * <p>A continuation token, if not all requested job runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetJobRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobRunsResponse): any => ({
    ...obj,
  });
}

export interface GetJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetJobsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetJobsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The location of resources.</p>
 */
export interface Location {
  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: CodeGenNodeArg[];

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: CodeGenNodeArg[];

  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: CodeGenNodeArg[];
}

export namespace Location {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies a table definition in the Glue Data Catalog.</p>
 */
export interface CatalogEntry {
  /**
   * <p>The database in which the table metadata resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName: string | undefined;
}

export namespace CatalogEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CatalogEntry): any => ({
    ...obj,
  });
}

export interface GetMappingRequest {
  /**
   * <p>Specifies the source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>A list of target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>Parameters for the mapping.</p>
   */
  Location?: Location;
}

export namespace GetMappingRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMappingRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a mapping.</p>
 */
export interface MappingEntry {
  /**
   * <p>The name of the source table.</p>
   */
  SourceTable?: string;

  /**
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * <p>The target type.</p>
   */
  TargetType?: string;
}

export namespace MappingEntry {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MappingEntry): any => ({
    ...obj,
  });
}

export interface GetMappingResponse {
  /**
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: MappingEntry[] | undefined;
}

export namespace GetMappingResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMappingResponse): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>The unique identifier of the task run.</p>
   */
  TaskRunId: string | undefined;
}

export namespace GetMLTaskRunRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   */
  OutputS3Path?: string;
}

export namespace ExportLabelsTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ExportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
  /**
   * <p>The job ID for the Find Matches task run.</p>
   */
  JobId?: string;

  /**
   * <p>The name assigned to the job for the Find Matches task run.</p>
   */
  JobName?: string;

  /**
   * <p>The job run ID for the Find Matches task run.</p>
   */
  JobRunId?: string;
}

export namespace FindMatchesTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchesTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you will import the
   *       labels.</p>
   */
  InputS3Path?: string;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  Replace?: boolean;
}

export namespace ImportLabelsTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportLabelsTaskRunProperties): any => ({
    ...obj,
  });
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   */
  OutputS3Path?: string;
}

export namespace LabelingSetGenerationTaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LabelingSetGenerationTaskRunProperties): any => ({
    ...obj,
  });
}

export enum TaskType {
  EVALUATION = "EVALUATION",
  EXPORT_LABELS = "EXPORT_LABELS",
  FIND_MATCHES = "FIND_MATCHES",
  IMPORT_LABELS = "IMPORT_LABELS",
  LABELING_SET_GENERATION = "LABELING_SET_GENERATION",
}

/**
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
  /**
   * <p>The type of task run.</p>
   */
  TaskType?: TaskType | string;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;
}

export namespace TaskRunProperties {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunProperties): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunResponse {
  /**
   * <p>The unique identifier of the task run.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The status for this task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The error strings that are associated with the task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The date and time when this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The date and time when this task run was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The date and time when this task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

export namespace GetMLTaskRunResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
  /**
   * <p>The type of task run.</p>
   */
  TaskRunType?: TaskType | string;

  /**
   * <p>The current status of the task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>Filter on task runs started before this date.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>Filter on task runs started after this date.</p>
   */
  StartedAfter?: Date;
}

export namespace TaskRunFilterCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunFilterCriteria): any => ({
    ...obj,
  });
}

export enum TaskRunSortColumnType {
  STARTED = "STARTED",
  STATUS = "STATUS",
  TASK_RUN_TYPE = "TASK_RUN_TYPE",
}

export enum SortDirectionType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
  /**
   * <p>The column to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  Column: TaskRunSortColumnType | string | undefined;

  /**
   * <p>The sort direction to be used to sort the list of task runs for the machine learning
   *       transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

export namespace TaskRunSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRunSortCriteria): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsRequest {
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   */
  Sort?: TaskRunSortCriteria;
}

export namespace GetMLTaskRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
  /**
   * <p>The unique identifier for the transform.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique identifier for this task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The current status of the requested task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The list of error strings associated with this task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The date and time that this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The last point in time that the requested task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;
}

export namespace TaskRun {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TaskRun): any => ({
    ...obj,
  });
}

export interface GetMLTaskRunsResponse {
  /**
   * <p>A list of task runs that are associated with the transform.</p>
   */
  TaskRuns?: TaskRun[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace GetMLTaskRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTaskRunsResponse): any => ({
    ...obj,
  });
}

export interface GetMLTransformRequest {
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTransformRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the column name and column importance score for a column. </p>
 *
 * 	        <p>Column importance helps you understand how columns contribute to your model, by identifying which columns in your records are more important than others.</p>
 */
export interface ColumnImportance {
  /**
   * <p>The name of a column.</p>
   */
  ColumnName?: string;

  /**
   * <p>The column importance score for the column, as a decimal.</p>
   */
  Importance?: number;
}

export namespace ColumnImportance {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnImportance): any => ({
    ...obj,
  });
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *
 * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 */
export interface ConfusionMatrix {
  /**
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   */
  NumTruePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform incorrectly classified as a match,
   *       in the confusion matrix for your transform.</p>
   */
  NumFalsePositives?: number;

  /**
   * <p>The number of nonmatches in the data that the transform correctly rejected, in the
   *       confusion matrix for your transform.</p>
   */
  NumTrueNegatives?: number;

  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   */
  NumFalseNegatives?: number;
}

export namespace ConfusionMatrix {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ConfusionMatrix): any => ({
    ...obj,
  });
}

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
   * <p>The precision metric indicates when often your transform is correct when it predicts a match. Specifically, it measures how well the transform finds true positives from the total true positives possible.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Precision?: number;

  /**
   * <p>The recall metric indicates that for an actual match, how often your transform predicts
   *       the match. Specifically, it measures how well the transform finds true positives from the
   *       total records in the source data.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  Recall?: number;

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

  /**
   * <p>A list of <code>ColumnImportance</code> structures containing column importance metrics, sorted in order of descending importance.</p>
   */
  ColumnImportances?: ColumnImportance[];
}

export namespace FindMatchesMetrics {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: FindMatchesMetrics): any => ({
    ...obj,
  });
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  /**
   * <p>The type of machine learning transform.</p>
   */
  TransformType: TransformType | string | undefined;

  /**
   * <p>The evaluation metrics for the find matches algorithm.</p>
   */
  FindMatchesMetrics?: FindMatchesMetrics;
}

export namespace EvaluationMetrics {
  /**
   * @internal
   */
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
   * <p>The name of the column.</p>
   */
  Name?: string;

  /**
   * <p>The type of data in the column.</p>
   */
  DataType?: string;
}

export namespace SchemaColumn {
  /**
   * @internal
   */
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
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

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

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace GetMLTransformResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   */
  Name?: string;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   */
  TransformType?: TransformType | string;

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];
}

export namespace TransformFilterCriteria {
  /**
   * @internal
   */
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
   * <p>The column to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  Column: TransformSortColumnType | string | undefined;

  /**
   * <p>The sort direction to be used in the sorting criteria that are associated with the machine
   *       learning transform.</p>
   */
  SortDirection: SortDirectionType | string | undefined;
}

export namespace TransformSortCriteria {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TransformSortCriteria): any => ({
    ...obj,
  });
}

export interface GetMLTransformsRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;
}

export namespace GetMLTransformsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformsRequest): any => ({
    ...obj,
  });
}

/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>A list of Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>A count identifier for the labeling files generated by Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;

  /**
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required permissions. The required permissions include both Glue service role permissions to Glue resources, and Amazon S3 permissions required by the transform. </p>
   *
   * 		       <ul>
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
   * <p>This value determines which version of Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="http://aws.amazon.com/glue/pricing/">Glue pricing
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
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *
   * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The encryption-at-rest settings of the transform that apply to accessing user data. Machine learning transforms can access user data encrypted in Amazon S3 using KMS.</p>
   */
  TransformEncryption?: TransformEncryption;
}

export namespace MLTransform {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MLTransform): any => ({
    ...obj,
  });
}

export interface GetMLTransformsResponse {
  /**
   * <p>A list of machine learning transforms.</p>
   */
  Transforms: MLTransform[] | undefined;

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace GetMLTransformsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionRequest {
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partition's table.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;
}

export namespace GetPartitionRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionResponse): any => ({
    ...obj,
  });
}

export interface GetPartitionIndexesRequest {
  /**
   * <p>The catalog ID where the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>Specifies the name of a database from which you want to retrieve partition indexes.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>Specifies the name of a table for which you want to retrieve the partition indexes.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionIndexesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionIndexesRequest): any => ({
    ...obj,
  });
}

export enum BackfillErrorCode {
  ENCRYPTED_PARTITION_ERROR = "ENCRYPTED_PARTITION_ERROR",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  INVALID_PARTITION_TYPE_DATA_ERROR = "INVALID_PARTITION_TYPE_DATA_ERROR",
  MISSING_PARTITION_VALUE_ERROR = "MISSING_PARTITION_VALUE_ERROR",
  UNSUPPORTED_PARTITION_CHARACTER_ERROR = "UNSUPPORTED_PARTITION_CHARACTER_ERROR",
}

/**
 * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
 *
 * 	        <p>These errors give the details about why an index registration failed and provide a limited number of partitions in the response, so that you can fix the partitions at fault and try registering the index again. The most common set of errors that can occur are categorized as follows:</p>
 *
 * 	        <ul>
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
   * <p>The error code for an error that occurred when registering partition indexes for an existing table.</p>
   */
  Code?: BackfillErrorCode | string;

  /**
   * <p>A list of a limited number of partitions in the response.</p>
   */
  Partitions?: PartitionValueList[];
}

export namespace BackfillError {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BackfillError): any => ({
    ...obj,
  });
}

export enum PartitionIndexStatus {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

/**
 * <p>A partition key pair consisting of a name and a type.</p>
 */
export interface KeySchemaElement {
  /**
   * <p>The name of a partition key.</p>
   */
  Name: string | undefined;

  /**
   * <p>The type of a partition key.</p>
   */
  Type: string | undefined;
}

export namespace KeySchemaElement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: KeySchemaElement): any => ({
    ...obj,
  });
}

/**
 * <p>A descriptor for a partition index in a table.</p>
 */
export interface PartitionIndexDescriptor {
  /**
   * <p>The name of the partition index.</p>
   */
  IndexName: string | undefined;

  /**
   * <p>A list of one or more keys, as <code>KeySchemaElement</code> structures, for the partition index.</p>
   */
  Keys: KeySchemaElement[] | undefined;

  /**
   * <p>The status of the partition index. </p>
   *
   * 	        <p>The possible statuses are:</p>
   * 	        <ul>
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
   * <p>A list of errors that can occur when registering partition indexes for an existing table.</p>
   */
  BackfillErrors?: BackfillError[];
}

export namespace PartitionIndexDescriptor {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionIndexesResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be run in parallel.</p>
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Segment): any => ({
    ...obj,
  });
}

export interface GetPartitionsRequest {
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the partitions' table.</p>
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
   *
   *          <p>
   *             <i>Sample API Call</i>: </p>
   */
  Expression?: string;

  /**
   * <p>A continuation token, if this is not the first call to retrieve
   *       these partitions.</p>
   */
  NextToken?: string;

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * <p>The maximum number of partitions to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>When true, specifies not returning the partition column schema. Useful when you are interested only in other partition attributes such as partition values or location. This approach avoids the problem of a large response by not returning duplicate data.</p>
   */
  ExcludeColumnSchema?: boolean;

  /**
   * <p>The transaction ID at which to read the partition contents.</p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the partition contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetPartitionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionsRequest): any => ({
    ...obj,
  });
}

export interface GetPartitionsResponse {
  /**
   * <p>A list of requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * <p>A continuation token, if the returned list of partitions does not include the last
   *       one.</p>
   */
  NextToken?: string;
}

export namespace GetPartitionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPartitionsResponse): any => ({
    ...obj,
  });
}

export interface GetPlanRequest {
  /**
   * <p>The list of mappings from a source table to target tables.</p>
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The source table.</p>
   */
  Source: CatalogEntry | undefined;

  /**
   * <p>The target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>The parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * <p>The programming language of the code to perform the mapping.</p>
   */
  Language?: Language | string;

  /**
   * <p>A map to hold additional optional key-value parameters.</p>
   *
   * 	        <p>Currently, these key-value pairs are supported:</p>
   *
   * 	        <ul>
   *             <li>
   *                <p>
   *                   <code>inferSchema</code>  —  Specifies whether to set <code>inferSchema</code> to true or false for the default script generated by an Glue job. For example, to set <code>inferSchema</code> to true, pass the following key value pair:</p>
   * 	              <p>
   *                   <code>--additional-plan-options-map '{"inferSchema":"true"}'</code>
   *                </p>
   * 	           </li>
   *          </ul>
   */
  AdditionalPlanOptionsMap?: Record<string, string>;
}

export namespace GetPlanRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlanRequest): any => ({
    ...obj,
  });
}

export interface GetPlanResponse {
  /**
   * <p>A Python script to perform the mapping.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code to perform the mapping.</p>
   */
  ScalaCode?: string;
}

export namespace GetPlanResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetPlanResponse): any => ({
    ...obj,
  });
}

export interface GetRegistryInput {
  /**
   * <p>This is a wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId: RegistryId | undefined;
}

export namespace GetRegistryInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryInput): any => ({
    ...obj,
  });
}

export interface GetRegistryResponse {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The status of the registry.</p>
   */
  Status?: RegistryStatus | string;

  /**
   * <p>The date and time the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the registry was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace GetRegistryResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRegistryResponse): any => ({
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
  /**
   * @internal
   */
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
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GluePolicy {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GluePolicy): any => ({
    ...obj,
  });
}

export interface GetResourcePoliciesResponse {
  /**
   * <p>A list of the individual resource policies and the account-level resource policy.</p>
   */
  GetResourcePoliciesResponseList?: GluePolicy[];

  /**
   * <p>A continuation token, if the returned list does not contain the last resource policy available.</p>
   */
  NextToken?: string;
}

export namespace GetResourcePoliciesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePoliciesResponse): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The ARN of the Glue resource for which to retrieve the resource policy. If not
   *       supplied, the Data Catalog resource policy is returned. Use <code>GetResourcePolicies</code>
   *       to view all existing resource policies. For more information see <a href="https://docs.aws.amazon.com/glue/latest/dg/glue-specifying-resource-arns.html">Specifying Glue Resource ARNs</a>.
   *     </p>
   */
  ResourceArn?: string;
}

export namespace GetResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyResponse {
  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GetResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
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

export namespace GetSchemaInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaInput): any => ({
    ...obj,
  });
}

export interface GetSchemaResponse {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>A description of schema if specified when created</p>
   */
  Description?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The compatibility mode of the schema.</p>
   */
  Compatibility?: Compatibility | string;

  /**
   * <p>The version number of the checkpoint (the last time the compatibility mode was changed).</p>
   */
  SchemaCheckpoint?: number;

  /**
   * <p>The latest version of the schema associated with the returned schema definition.</p>
   */
  LatestSchemaVersion?: number;

  /**
   * <p>The next version of the schema associated with the returned schema definition.</p>
   */
  NextSchemaVersion?: number;

  /**
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time the schema was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace GetSchemaResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaResponse): any => ({
    ...obj,
  });
}

export interface GetSchemaByDefinitionInput {
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
   * <p>The definition of the schema for which schema details are required.</p>
   */
  SchemaDefinition: string | undefined;
}

export namespace GetSchemaByDefinitionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaByDefinitionInput): any => ({
    ...obj,
  });
}

export interface GetSchemaByDefinitionResponse {
  /**
   * <p>The schema ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema was created.</p>
   */
  CreatedTime?: string;
}

export namespace GetSchemaByDefinitionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaByDefinitionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the schema version information.</p>
 */
export interface SchemaVersionNumber {
  /**
   * <p>The latest version available for the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;
}

export namespace SchemaVersionNumber {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionNumber): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
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
   * <p>The <code>SchemaVersionId</code> of the schema version. This field is required for fetching by schema ID. Either this or the <code>SchemaId</code> wrapper has to be provided.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;
}

export namespace GetSchemaVersionInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionInput): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionResponse {
  /**
   * <p>The <code>SchemaVersionId</code> of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The schema definition for the schema ID.</p>
   */
  SchemaDefinition?: string;

  /**
   * <p>The data format of the schema definition. Currently <code>AVRO</code>, <code>JSON</code> and <code>PROTOBUF</code> are supported.</p>
   */
  DataFormat?: DataFormat | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version. </p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema version was created.</p>
   */
  CreatedTime?: string;
}

export namespace GetSchemaVersionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionResponse): any => ({
    ...obj,
  });
}

export enum SchemaDiffType {
  SYNTAX_DIFF = "SYNTAX_DIFF",
}

export interface GetSchemaVersionsDiffInput {
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
   * <p>The first of the two schema versions to be compared.</p>
   */
  FirstSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>The second of the two schema versions to be compared.</p>
   */
  SecondSchemaVersionNumber: SchemaVersionNumber | undefined;

  /**
   * <p>Refers to <code>SYNTAX_DIFF</code>, which is the currently supported diff type.</p>
   */
  SchemaDiffType: SchemaDiffType | string | undefined;
}

export namespace GetSchemaVersionsDiffInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionsDiffInput): any => ({
    ...obj,
  });
}

export interface GetSchemaVersionsDiffResponse {
  /**
   * <p>The difference between schemas as a string in JsonPatch format.</p>
   */
  Diff?: string;
}

export namespace GetSchemaVersionsDiffResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSchemaVersionsDiffResponse): any => ({
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationResponse): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsRequest {
  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetSecurityConfigurationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsRequest): any => ({
    ...obj,
  });
}

export interface GetSecurityConfigurationsResponse {
  /**
   * <p>A list of security configurations.</p>
   */
  SecurityConfigurations?: SecurityConfiguration[];

  /**
   * <p>A continuation token, if there are more security
   *       configurations to return.</p>
   */
  NextToken?: string;
}

export namespace GetSecurityConfigurationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSecurityConfigurationsResponse): any => ({
    ...obj,
  });
}

export interface GetSessionRequest {
  /**
   * <p>The ID of the session. </p>
   */
  Id: string | undefined;

  /**
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

export namespace GetSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionRequest): any => ({
    ...obj,
  });
}

export interface GetSessionResponse {
  /**
   * <p>The session object is returned in the response.</p>
   */
  Session?: Session;
}

export namespace GetSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetSessionResponse): any => ({
    ...obj,
  });
}

export interface GetStatementRequest {
  /**
   * <p>The Session ID of the statement.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The Id of the statement.</p>
   */
  Id: number | undefined;

  /**
   * <p>The origin of the request.</p>
   */
  RequestOrigin?: string;
}

export namespace GetStatementRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatementRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutputData {
  /**
   * <p>The code execution output in text format.</p>
   */
  TextPlain?: string;
}

export namespace StatementOutputData {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatementOutputData): any => ({
    ...obj,
  });
}

export enum StatementState {
  AVAILABLE = "AVAILABLE",
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  ERROR = "ERROR",
  RUNNING = "RUNNING",
  WAITING = "WAITING",
}

/**
 * <p>The code execution output in JSON format.</p>
 */
export interface StatementOutput {
  /**
   * <p>The code execution output.</p>
   */
  Data?: StatementOutputData;

  /**
   * <p>The execution count of the output.</p>
   */
  ExecutionCount?: number;

  /**
   * <p>The status of the code execution output.</p>
   */
  Status?: StatementState | string;

  /**
   * <p>The name of the error in the output.</p>
   */
  ErrorName?: string;

  /**
   * <p>The error value of the output.</p>
   */
  ErrorValue?: string;

  /**
   * <p>The traceback of the output.</p>
   */
  Traceback?: string[];
}

export namespace StatementOutput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StatementOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The statement or request for a particular action to occur in a session.</p>
 */
export interface Statement {
  /**
   * <p>The ID of the statement.</p>
   */
  Id?: number;

  /**
   * <p>The execution code of the statement.</p>
   */
  Code?: string;

  /**
   * <p>The state while request is actioned.</p>
   */
  State?: StatementState | string;

  /**
   * <p>The output in JSON.</p>
   */
  Output?: StatementOutput;

  /**
   * <p>The code execution progress.</p>
   */
  Progress?: number;

  /**
   * <p>The unix time and date that the job definition was started.</p>
   */
  StartedOn?: number;

  /**
   * <p>The unix time and date that the job definition was completed.</p>
   */
  CompletedOn?: number;
}

export namespace Statement {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Statement): any => ({
    ...obj,
  });
}

export interface GetStatementResponse {
  /**
   * <p>Returns the statement.</p>
   */
  Statement?: Statement;
}

export namespace GetStatementResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetStatementResponse): any => ({
    ...obj,
  });
}

export interface GetTableRequest {
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the database in the catalog in which the table resides.
   *       For Hive compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table for which to retrieve the definition. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The transaction ID at which to read the table contents. </p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetTableRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
  /**
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the database where the table metadata resides.
   *       For Hive compatibility, this must be all lowercase.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * <p>The owner of the table.</p>
   */
  Owner?: string;

  /**
   * <p>The time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The last time that the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>The last time that the table was accessed. This is usually taken from HDFS, and might not
   *       be reliable.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

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
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: Record<string, string>;

  /**
   * <p>The person or entity who created the table.</p>
   */
  CreatedBy?: string;

  /**
   * <p>Indicates whether the table has been registered with Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

  /**
   * <p>A <code>TableIdentifier</code> structure that describes a target table for resource linking.</p>
   */
  TargetTable?: TableIdentifier;

  /**
   * <p>The ID of the Data Catalog in which the table resides.</p>
   */
  CatalogId?: string;

  /**
   * <p>The ID of the table version.</p>
   */
  VersionId?: string;
}

export namespace Table {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableResponse): any => ({
    ...obj,
  });
}

export interface GetTablesRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog whose tables to list. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A regular expression pattern. If present, only those tables
   *       whose names match the pattern are returned.</p>
   */
  Expression?: string;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>The transaction ID at which to read the table contents.</p>
   */
  TransactionId?: string;

  /**
   * <p>The time as of when to read the table contents. If not set, the most recent transaction commit time will be used. Cannot be specified along with <code>TransactionId</code>.</p>
   */
  QueryAsOfTime?: Date;
}

export namespace GetTablesRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTablesResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>The ID value of the table version to be retrieved. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1. </p>
   */
  VersionId?: string;
}

export namespace GetTableVersionRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTableVersionResponse): any => ({
    ...obj,
  });
}

export interface GetTableVersionsRequest {
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the Amazon Web Services account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The database in the catalog in which the table resides. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   */
  MaxResults?: number;
}

export namespace GetTableVersionsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj,
  });
}

export interface GetTagsResponse {
  /**
   * <p>The requested tags.</p>
   */
  Tags?: Record<string, string>;
}

export namespace GetTagsResponse {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggerResponse): any => ({
    ...obj,
  });
}

export interface GetTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the job to retrieve triggers for. The trigger that can start this job is
   *       returned, and if there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;
}

export namespace GetTriggersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggersRequest): any => ({
    ...obj,
  });
}

export interface GetTriggersResponse {
  /**
   * <p>A list of triggers for the specified job.</p>
   */
  Triggers?: Trigger[];

  /**
   * <p>A continuation token, if not all the requested triggers
   *       have yet been returned.</p>
   */
  NextToken?: string;
}

export namespace GetTriggersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetTriggersResponse): any => ({
    ...obj,
  });
}

export enum PermissionType {
  CELL_FILTER_PERMISSION = "CELL_FILTER_PERMISSION",
  COLUMN_PERMISSION = "COLUMN_PERMISSION",
}

export interface GetUnfilteredPartitionMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  TableName: string | undefined;
  PartitionValues: string[] | undefined;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetUnfilteredPartitionMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionMetadataRequest): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionMetadataResponse {
  /**
   * <p>Represents a slice of table data.</p>
   */
  Partition?: Partition;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
}

export namespace GetUnfilteredPartitionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionMetadataResponse): any => ({
    ...obj,
  });
}

export class PermissionTypeMismatchException extends __BaseException {
  readonly name: "PermissionTypeMismatchException" = "PermissionTypeMismatchException";
  readonly $fault: "client" = "client";
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

export interface GetUnfilteredPartitionsMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  TableName: string | undefined;
  Expression?: string;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
  NextToken?: string;
  /**
   * <p>Defines a non-overlapping region of a table's partitions, allowing
   *       multiple requests to be run in parallel.</p>
   */
  Segment?: Segment;

  MaxResults?: number;
}

export namespace GetUnfilteredPartitionsMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionsMetadataRequest): any => ({
    ...obj,
  });
}

export interface UnfilteredPartition {
  /**
   * <p>Represents a slice of table data.</p>
   */
  Partition?: Partition;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
}

export namespace UnfilteredPartition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UnfilteredPartition): any => ({
    ...obj,
  });
}

export interface GetUnfilteredPartitionsMetadataResponse {
  UnfilteredPartitions?: UnfilteredPartition[];
  NextToken?: string;
}

export namespace GetUnfilteredPartitionsMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredPartitionsMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetUnfilteredTableMetadataRequest {
  CatalogId: string | undefined;
  DatabaseName: string | undefined;
  Name: string | undefined;
  /**
   * <p>A structure containing information for audit.</p>
   */
  AuditContext?: AuditContext;

  SupportedPermissionTypes: (PermissionType | string)[] | undefined;
}

export namespace GetUnfilteredTableMetadataRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredTableMetadataRequest): any => ({
    ...obj,
  });
}

export interface ColumnRowFilter {
  ColumnName?: string;
  RowFilterExpression?: string;
}

export namespace ColumnRowFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ColumnRowFilter): any => ({
    ...obj,
  });
}

export interface GetUnfilteredTableMetadataResponse {
  /**
   * <p>Represents a collection of related data organized in columns and rows.</p>
   */
  Table?: Table;

  AuthorizedColumns?: string[];
  IsRegisteredWithLakeFormation?: boolean;
  CellFilters?: ColumnRowFilter[];
}

export namespace GetUnfilteredTableMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUnfilteredTableMetadataResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionRequest {
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function is located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;
}

export namespace GetUserDefinedFunctionRequest {
  /**
   * @internal
   */
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
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The name of the catalog database that contains the function.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];

  /**
   * <p>The ID of the Data Catalog in which the function resides.</p>
   */
  CatalogId?: string;
}

export namespace UserDefinedFunction {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionResponse): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsRequest {
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the functions are located. If none is provided, functions from all the
   *       databases across the catalog will be returned.</p>
   */
  DatabaseName?: string;

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
}

export namespace GetUserDefinedFunctionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsRequest): any => ({
    ...obj,
  });
}

export interface GetUserDefinedFunctionsResponse {
  /**
   * <p>A list of requested function definitions.</p>
   */
  UserDefinedFunctions?: UserDefinedFunction[];

  /**
   * <p>A continuation token, if the list of functions returned does
   *       not include the last requested function.</p>
   */
  NextToken?: string;
}

export namespace GetUserDefinedFunctionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetUserDefinedFunctionsResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRequest {
  /**
   * <p>The name of the workflow to retrieve.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;
}

export namespace GetWorkflowRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The ID of the workflow run.</p>
   */
  RunId: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;
}

export namespace GetWorkflowRunRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunPropertiesResponse {
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: Record<string, string>;
}

export namespace GetWorkflowRunPropertiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsRequest {
  /**
   * <p>Name of the workflow whose metadata of runs should be returned.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of workflow runs to be included in the response.</p>
   */
  MaxResults?: number;
}

export namespace GetWorkflowRunsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunsRequest): any => ({
    ...obj,
  });
}

export interface GetWorkflowRunsResponse {
  /**
   * <p>A list of workflow run metadata objects.</p>
   */
  Runs?: WorkflowRun[];

  /**
   * <p>A continuation token, if not all requested workflow runs have been returned.</p>
   */
  NextToken?: string;
}

export namespace GetWorkflowRunsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetWorkflowRunsResponse): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueRequest {
  /**
   * <p>The ID of the catalog to import. Currently, this should be the Amazon Web Services account ID.</p>
   */
  CatalogId?: string;
}

export namespace ImportCatalogToGlueRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportCatalogToGlueRequest): any => ({
    ...obj,
  });
}

export interface ImportCatalogToGlueResponse {}

export namespace ImportCatalogToGlueResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ImportCatalogToGlueResponse): any => ({
    ...obj,
  });
}

export interface ListBlueprintsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the list by an Amazon Web Services resource tag.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListBlueprintsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBlueprintsRequest): any => ({
    ...obj,
  });
}

export interface ListBlueprintsResponse {
  /**
   * <p>List of names of blueprints in the account.</p>
   */
  Blueprints?: string[];

  /**
   * <p>A continuation token, if not all blueprint names have been returned.</p>
   */
  NextToken?: string;
}

export namespace ListBlueprintsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListBlueprintsResponse): any => ({
    ...obj,
  });
}

export interface ListCrawlersRequest {
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
  Tags?: Record<string, string>;
}

export namespace ListCrawlersRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlersRequest): any => ({
    ...obj,
  });
}

export interface ListCrawlersResponse {
  /**
   * <p>The names of all crawlers in the account, or the crawlers with the specified tags.</p>
   */
  CrawlerNames?: string[];

  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;
}

export namespace ListCrawlersResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlersResponse): any => ({
    ...obj,
  });
}

export enum FieldName {
  CRAWL_ID = "CRAWL_ID",
  DPU_HOUR = "DPU_HOUR",
  END_TIME = "END_TIME",
  START_TIME = "START_TIME",
  STATE = "STATE",
}

export enum FilterOperator {
  EQ = "EQ",
  GE = "GE",
  GT = "GT",
  LE = "LE",
  LT = "LT",
  NE = "NE",
}

/**
 * <p>A list of fields, comparators and value that you can use to filter the crawler runs for a specified crawler.</p>
 */
export interface CrawlsFilter {
  /**
   * <p>A key used to filter the crawler runs for a specified crawler. Valid values for each of the field names are:</p>
   * 	        <ul>
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
   */
  FieldName?: FieldName | string;

  /**
   * <p>A defined comparator that operates on the value. The available operators are:</p>
   * 	        <ul>
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
   */
  FilterOperator?: FilterOperator | string;

  /**
   * <p>The value provided for comparison on the crawl field. </p>
   */
  FieldValue?: string;
}

export namespace CrawlsFilter {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlsFilter): any => ({
    ...obj,
  });
}

export interface ListCrawlsRequest {
  /**
   * <p>The name of the crawler whose runs you want to retrieve.</p>
   */
  CrawlerName: string | undefined;

  /**
   * <p>The maximum number of results to return. The default is 20, and maximum is 100.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filters the crawls by the criteria you specify in a list of <code>CrawlsFilter</code> objects.</p>
   */
  Filters?: CrawlsFilter[];

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListCrawlsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlsRequest): any => ({
    ...obj,
  });
}

export enum CrawlerHistoryState {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STOPPED = "STOPPED",
}

/**
 * <p>Contains the information for a run of a crawler.</p>
 */
export interface CrawlerHistory {
  /**
   * <p>A UUID identifier for each crawl.</p>
   */
  CrawlId?: string;

  /**
   * <p>The state of the crawl.</p>
   */
  State?: CrawlerHistoryState | string;

  /**
   * <p>The date and time on which the crawl started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time on which the crawl ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>A run summary for the specific crawl in JSON. Contains the catalog tables and partitions that were added, updated, or deleted.</p>
   */
  Summary?: string;

  /**
   * <p>If an error occurred, the error message associated with the crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group associated with the crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream associated with the crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The prefix for a CloudWatch message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The number of data processing units (DPU) used in hours for the crawl.</p>
   */
  DPUHour?: number;
}

export namespace CrawlerHistory {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CrawlerHistory): any => ({
    ...obj,
  });
}

export interface ListCrawlsResponse {
  /**
   * <p>A list of <code>CrawlerHistory</code> objects representing the crawl runs that meet your criteria.</p>
   */
  Crawls?: CrawlerHistory[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListCrawlsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCrawlsResponse): any => ({
    ...obj,
  });
}

export interface ListCustomEntityTypesRequest {
  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;
}

export namespace ListCustomEntityTypesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomEntityTypesRequest): any => ({
    ...obj,
  });
}

export interface ListCustomEntityTypesResponse {
  /**
   * <p>A list of <code>CustomEntityType</code> objects representing custom patterns.</p>
   */
  CustomEntityTypes?: CustomEntityType[];

  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;
}

export namespace ListCustomEntityTypesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListCustomEntityTypesResponse): any => ({
    ...obj,
  });
}

export interface ListDevEndpointsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListDevEndpointsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListDevEndpointsResponse): any => ({
    ...obj,
  });
}

export interface ListJobsRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListJobsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A <code>TransformFilterCriteria</code> used to filter the machine learning transforms.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>A <code>TransformSortCriteria</code> used to sort the machine learning transforms.</p>
   */
  Sort?: TransformSortCriteria;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListMLTransformsRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListMLTransformsResponse): any => ({
    ...obj,
  });
}

export interface ListRegistriesInput {
  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListRegistriesInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegistriesInput): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing the details for a registry.</p>
 */
export interface RegistryListItem {
  /**
   * <p>The name of the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the registry.</p>
   */
  RegistryArn?: string;

  /**
   * <p>A description of the registry.</p>
   */
  Description?: string;

  /**
   * <p>The status of the registry.</p>
   */
  Status?: RegistryStatus | string;

  /**
   * <p>The data the registry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date the registry was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace RegistryListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RegistryListItem): any => ({
    ...obj,
  });
}

export interface ListRegistriesResponse {
  /**
   * <p>An array of <code>RegistryDetailedListItem</code> objects containing minimal details of each registry.</p>
   */
  Registries?: RegistryListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListRegistriesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRegistriesResponse): any => ({
    ...obj,
  });
}

export interface ListSchemasInput {
  /**
   * <p>A wrapper structure that may contain the registry name and Amazon Resource Name (ARN).</p>
   */
  RegistryId?: RegistryId;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListSchemasInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object that contains minimal details for a schema.</p>
 */
export interface SchemaListItem {
  /**
   * <p>the name of the registry where the schema resides.</p>
   */
  RegistryName?: string;

  /**
   * <p>The name of the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>A description for the schema.</p>
   */
  Description?: string;

  /**
   * <p>The status of the schema.</p>
   */
  SchemaStatus?: SchemaStatus | string;

  /**
   * <p>The date and time that a schema was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>The date and time that a schema was updated.</p>
   */
  UpdatedTime?: string;
}

export namespace SchemaListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaListItem): any => ({
    ...obj,
  });
}

export interface ListSchemasResponse {
  /**
   * <p>An array of <code>SchemaListItem</code> objects containing details of each schema.</p>
   */
  Schemas?: SchemaListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListSchemasResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemasResponse): any => ({
    ...obj,
  });
}

export interface ListSchemaVersionsInput {
  /**
   * <p>This is a wrapper structure to contain schema identity fields. The structure contains:</p>
   * 	        <ul>
   *             <li>
   *                <p>SchemaId$SchemaArn: The Amazon Resource Name (ARN) of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *             <li>
   *                <p>SchemaId$SchemaName: The name of the schema. Either <code>SchemaArn</code> or <code>SchemaName</code> and <code>RegistryName</code> has to be provided.</p>
   *             </li>
   *          </ul>
   */
  SchemaId: SchemaId | undefined;

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaVersionsInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaVersionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>An object containing the details about a schema version.</p>
 */
export interface SchemaVersionListItem {
  /**
   * <p>The Amazon Resource Name (ARN) of the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The unique identifier of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The status of the schema version.</p>
   */
  Status?: SchemaVersionStatus | string;

  /**
   * <p>The date and time the schema version was created.</p>
   */
  CreatedTime?: string;
}

export namespace SchemaVersionListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SchemaVersionListItem): any => ({
    ...obj,
  });
}

export interface ListSchemaVersionsResponse {
  /**
   * <p>An array of <code>SchemaVersionList</code> objects containing details of each schema version.</p>
   */
  Schemas?: SchemaVersionListItem[];

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace ListSchemaVersionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSchemaVersionsResponse): any => ({
    ...obj,
  });
}

export interface ListSessionsRequest {
  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results. </p>
   */
  MaxResults?: number;

  /**
   * <p>Tags belonging to the session. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>The origin of the request. </p>
   */
  RequestOrigin?: string;
}

export namespace ListSessionsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSessionsRequest): any => ({
    ...obj,
  });
}

export interface ListSessionsResponse {
  /**
   * <p>Returns the Id of the session. </p>
   */
  Ids?: string[];

  /**
   * <p>Returns the session object. </p>
   */
  Sessions?: Session[];

  /**
   * <p>The token for the next set of results, or null if there are no more result. </p>
   */
  NextToken?: string;
}

export namespace ListSessionsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListSessionsResponse): any => ({
    ...obj,
  });
}

export interface ListStatementsRequest {
  /**
   * <p>The Session ID of the statements.</p>
   */
  SessionId: string | undefined;

  /**
   * <p>The origin of the request to list statements.</p>
   */
  RequestOrigin?: string;

  NextToken?: string;
}

export namespace ListStatementsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStatementsRequest): any => ({
    ...obj,
  });
}

export interface ListStatementsResponse {
  /**
   * <p>Returns the list of statements.</p>
   */
  Statements?: Statement[];

  NextToken?: string;
}

export namespace ListStatementsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListStatementsResponse): any => ({
    ...obj,
  });
}

export interface ListTriggersRequest {
  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p> The name of the job for which to retrieve triggers. The trigger that can start this job
   *       is returned. If there is no such trigger, all triggers are returned.</p>
   */
  DependentJobName?: string;

  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: Record<string, string>;
}

export namespace ListTriggersRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsRequest {
  /**
   * <p>The ID of the Data Catalog to set the security configuration for. If none is provided, the
   *       Amazon Web Services account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The security configuration to set.</p>
   */
  DataCatalogEncryptionSettings: DataCatalogEncryptionSettings | undefined;
}

export namespace PutDataCatalogEncryptionSettingsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutDataCatalogEncryptionSettingsRequest): any => ({
    ...obj,
  });
}

export interface PutDataCatalogEncryptionSettingsResponse {}

export namespace PutDataCatalogEncryptionSettingsResponse {
  /**
   * @internal
   */
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
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string | undefined;

  /**
   * <p>Do not use. For internal use only.</p>
   */
  ResourceArn?: string;

  /**
   * <p>The hash value returned when the previous policy was set using
   *         <code>PutResourcePolicy</code>. Its purpose is to prevent concurrent modifications of a
   *       policy. Do not use this parameter if no previous policy has been set.</p>
   */
  PolicyHashCondition?: string;

  /**
   * <p>A value of <code>MUST_EXIST</code> is used to update a policy. A value of
   *         <code>NOT_EXIST</code> is used to create a new policy. If a value of <code>NONE</code> or a
   *       null value is used, the call does not depend on the existence of a policy.</p>
   */
  PolicyExistsCondition?: ExistCondition | string;

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
   */
  EnableHybrid?: EnableHybridValues | string;
}

export namespace PutResourcePolicyRequest {
  /**
   * @internal
   */
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
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing a key value pair for metadata.</p>
 */
export interface MetadataKeyValuePair {
  /**
   * <p>A metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>A metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;
}

export namespace MetadataKeyValuePair {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataKeyValuePair): any => ({
    ...obj,
  });
}

export interface PutSchemaVersionMetadataInput {
  /**
   * <p>The unique ID for the schema.</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key's corresponding value.</p>
   */
  MetadataKeyValue: MetadataKeyValuePair | undefined;
}

export namespace PutSchemaVersionMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSchemaVersionMetadataInput): any => ({
    ...obj,
  });
}

export interface PutSchemaVersionMetadataResponse {
  /**
   * <p>The Amazon Resource Name (ARN) for the schema.</p>
   */
  SchemaArn?: string;

  /**
   * <p>The name for the schema.</p>
   */
  SchemaName?: string;

  /**
   * <p>The name for the registry.</p>
   */
  RegistryName?: string;

  /**
   * <p>The latest version of the schema.</p>
   */
  LatestVersion?: boolean;

  /**
   * <p>The version number of the schema.</p>
   */
  VersionNumber?: number;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>The metadata key.</p>
   */
  MetadataKey?: string;

  /**
   * <p>The value of the metadata key.</p>
   */
  MetadataValue?: string;
}

export namespace PutSchemaVersionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutSchemaVersionMetadataResponse): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesRequest {
  /**
   * <p>Name of the workflow which was run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run for which the run properties should be updated.</p>
   */
  RunId: string | undefined;

  /**
   * <p>The properties to put for the specified run.</p>
   */
  RunProperties: Record<string, string> | undefined;
}

export namespace PutWorkflowRunPropertiesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesRequest): any => ({
    ...obj,
  });
}

export interface PutWorkflowRunPropertiesResponse {}

export namespace PutWorkflowRunPropertiesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutWorkflowRunPropertiesResponse): any => ({
    ...obj,
  });
}

export interface QuerySchemaVersionMetadataInput {
  /**
   * <p>A wrapper structure that may contain the schema name and Amazon Resource Name (ARN).</p>
   */
  SchemaId?: SchemaId;

  /**
   * <p>The version number of the schema.</p>
   */
  SchemaVersionNumber?: SchemaVersionNumber;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>Search key-value pairs for metadata, if they are not provided all the metadata information will be fetched.</p>
   */
  MetadataList?: MetadataKeyValuePair[];

  /**
   * <p>Maximum number of results required per page. If the value is not supplied, this will be defaulted to 25 per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace QuerySchemaVersionMetadataInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuerySchemaVersionMetadataInput): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing other metadata for a schema version belonging to the same metadata key.</p>
 */
export interface OtherMetadataValueListItem {
  /**
   * <p>The metadata key’s corresponding value for the other metadata belonging to the same metadata key.</p>
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;
}

export namespace OtherMetadataValueListItem {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: OtherMetadataValueListItem): any => ({
    ...obj,
  });
}

/**
 * <p>A structure containing metadata information for a schema version.</p>
 */
export interface MetadataInfo {
  /**
   * <p>The metadata key’s corresponding value.</p>
   */
  MetadataValue?: string;

  /**
   * <p>The time at which the entry was created.</p>
   */
  CreatedTime?: string;

  /**
   * <p>Other metadata belonging to the same metadata key.</p>
   */
  OtherMetadataValueList?: OtherMetadataValueListItem[];
}

export namespace MetadataInfo {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: MetadataInfo): any => ({
    ...obj,
  });
}

export interface QuerySchemaVersionMetadataResponse {
  /**
   * <p>A map of a metadata key and associated values.</p>
   */
  MetadataInfoMap?: Record<string, MetadataInfo>;

  /**
   * <p>The unique version ID of the schema version.</p>
   */
  SchemaVersionId?: string;

  /**
   * <p>A continuation token for paginating the returned list of tokens, returned if the current segment of the list is not the last.</p>
   */
  NextToken?: string;
}

export namespace QuerySchemaVersionMetadataResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: QuerySchemaVersionMetadataResponse): any => ({
    ...obj,
  });
}
