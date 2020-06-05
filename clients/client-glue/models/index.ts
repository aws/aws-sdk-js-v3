import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Access to a resource was denied.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AccessDeniedException {
  export const filterSensitiveLog = (obj: AccessDeniedException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AccessDeniedException =>
    __isa(o, "AccessDeniedException");
}

/**
 * <p>Defines an action to be initiated by a trigger.</p>
 */
export interface Action {
  __type?: "Action";
  /**
   * <p>The job arguments used when this trigger fires. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The name of the crawler to be used with this action.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The name of a job to be executed.</p>
   */
  JobName?: string;

  /**
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       action.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;
}

export namespace Action {
  export const filterSensitiveLog = (obj: Action): any => ({
    ...obj
  });
  export const isa = (o: any): o is Action => __isa(o, "Action");
}

/**
 * <p>A resource to be created or added already exists.</p>
 */
export interface AlreadyExistsException
  extends __SmithyException,
    $MetadataBearer {
  name: "AlreadyExistsException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace AlreadyExistsException {
  export const filterSensitiveLog = (obj: AlreadyExistsException): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsException =>
    __isa(o, "AlreadyExistsException");
}

export interface BatchCreatePartitionRequest {
  __type?: "BatchCreatePartitionRequest";
  /**
   * <p>The ID of the catalog in which the partition is to be created. Currently, this should be
   *       the AWS account ID.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be created.</p>
   */
  PartitionInputList: PartitionInput[] | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;
}

export namespace BatchCreatePartitionRequest {
  export const filterSensitiveLog = (
    obj: BatchCreatePartitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchCreatePartitionRequest =>
    __isa(o, "BatchCreatePartitionRequest");
}

export interface BatchCreatePartitionResponse {
  __type?: "BatchCreatePartitionResponse";
  /**
   * <p>The errors encountered when trying to create the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchCreatePartitionResponse {
  export const filterSensitiveLog = (
    obj: BatchCreatePartitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchCreatePartitionResponse =>
    __isa(o, "BatchCreatePartitionResponse");
}

export interface BatchDeleteConnectionRequest {
  __type?: "BatchDeleteConnectionRequest";
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of names of the connections to delete.</p>
   */
  ConnectionNameList: string[] | undefined;
}

export namespace BatchDeleteConnectionRequest {
  export const filterSensitiveLog = (
    obj: BatchDeleteConnectionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteConnectionRequest =>
    __isa(o, "BatchDeleteConnectionRequest");
}

export interface BatchDeleteConnectionResponse {
  __type?: "BatchDeleteConnectionResponse";
  /**
   * <p>A map of the names of connections that were not successfully
   *        deleted to error details.</p>
   */
  Errors?: { [key: string]: ErrorDetail };

  /**
   * <p>A list of names of the connection definitions that were
   *        successfully deleted.</p>
   */
  Succeeded?: string[];
}

export namespace BatchDeleteConnectionResponse {
  export const filterSensitiveLog = (
    obj: BatchDeleteConnectionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteConnectionResponse =>
    __isa(o, "BatchDeleteConnectionResponse");
}

export interface BatchDeletePartitionRequest {
  __type?: "BatchDeletePartitionRequest";
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of <code>PartitionInput</code> structures that define
   *       the partitions to be deleted.</p>
   */
  PartitionsToDelete: PartitionValueList[] | undefined;

  /**
   * <p>The name of the table that contains the partitions to be deleted.</p>
   */
  TableName: string | undefined;
}

export namespace BatchDeletePartitionRequest {
  export const filterSensitiveLog = (
    obj: BatchDeletePartitionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeletePartitionRequest =>
    __isa(o, "BatchDeletePartitionRequest");
}

export interface BatchDeletePartitionResponse {
  __type?: "BatchDeletePartitionResponse";
  /**
   * <p>The errors encountered when trying to delete the requested partitions.</p>
   */
  Errors?: PartitionError[];
}

export namespace BatchDeletePartitionResponse {
  export const filterSensitiveLog = (
    obj: BatchDeletePartitionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeletePartitionResponse =>
    __isa(o, "BatchDeletePartitionResponse");
}

export interface BatchDeleteTableRequest {
  __type?: "BatchDeleteTableRequest";
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
   *       ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the tables to delete reside. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the table to delete.</p>
   */
  TablesToDelete: string[] | undefined;
}

export namespace BatchDeleteTableRequest {
  export const filterSensitiveLog = (obj: BatchDeleteTableRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteTableRequest =>
    __isa(o, "BatchDeleteTableRequest");
}

export interface BatchDeleteTableResponse {
  __type?: "BatchDeleteTableResponse";
  /**
   * <p>A list of errors encountered in attempting to delete the specified tables.</p>
   */
  Errors?: TableError[];
}

export namespace BatchDeleteTableResponse {
  export const filterSensitiveLog = (obj: BatchDeleteTableResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteTableResponse =>
    __isa(o, "BatchDeleteTableResponse");
}

export interface BatchDeleteTableVersionRequest {
  __type?: "BatchDeleteTableVersionRequest";
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

  /**
   * <p>The name of the table. For Hive compatibility,
   *       this name is entirely lowercase.</p>
   */
  TableName: string | undefined;

  /**
   * <p>A list of the IDs of versions to be deleted. A <code>VersionId</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionIds: string[] | undefined;
}

export namespace BatchDeleteTableVersionRequest {
  export const filterSensitiveLog = (
    obj: BatchDeleteTableVersionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteTableVersionRequest =>
    __isa(o, "BatchDeleteTableVersionRequest");
}

export interface BatchDeleteTableVersionResponse {
  __type?: "BatchDeleteTableVersionResponse";
  /**
   * <p>A list of errors encountered while trying to delete
   *       the specified table versions.</p>
   */
  Errors?: TableVersionError[];
}

export namespace BatchDeleteTableVersionResponse {
  export const filterSensitiveLog = (
    obj: BatchDeleteTableVersionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteTableVersionResponse =>
    __isa(o, "BatchDeleteTableVersionResponse");
}

export interface BatchGetCrawlersRequest {
  __type?: "BatchGetCrawlersRequest";
  /**
   * <p>A list of crawler names, which might be the names returned from the
   *         <code>ListCrawlers</code> operation.</p>
   */
  CrawlerNames: string[] | undefined;
}

export namespace BatchGetCrawlersRequest {
  export const filterSensitiveLog = (obj: BatchGetCrawlersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetCrawlersRequest =>
    __isa(o, "BatchGetCrawlersRequest");
}

export interface BatchGetCrawlersResponse {
  __type?: "BatchGetCrawlersResponse";
  /**
   * <p>A list of crawler definitions.</p>
   */
  Crawlers?: Crawler[];

  /**
   * <p>A list of names of crawlers that were not found.</p>
   */
  CrawlersNotFound?: string[];
}

export namespace BatchGetCrawlersResponse {
  export const filterSensitiveLog = (obj: BatchGetCrawlersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetCrawlersResponse =>
    __isa(o, "BatchGetCrawlersResponse");
}

export interface BatchGetDevEndpointsRequest {
  __type?: "BatchGetDevEndpointsRequest";
  /**
   * <p>The list of <code>DevEndpoint</code> names, which might be the names returned from the
   *         <code>ListDevEndpoint</code> operation.</p>
   */
  DevEndpointNames: string[] | undefined;
}

export namespace BatchGetDevEndpointsRequest {
  export const filterSensitiveLog = (
    obj: BatchGetDevEndpointsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetDevEndpointsRequest =>
    __isa(o, "BatchGetDevEndpointsRequest");
}

export interface BatchGetDevEndpointsResponse {
  __type?: "BatchGetDevEndpointsResponse";
  /**
   * <p>A list of <code>DevEndpoint</code> definitions.</p>
   */
  DevEndpoints?: DevEndpoint[];

  /**
   * <p>A list of <code>DevEndpoints</code> not found.</p>
   */
  DevEndpointsNotFound?: string[];
}

export namespace BatchGetDevEndpointsResponse {
  export const filterSensitiveLog = (
    obj: BatchGetDevEndpointsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetDevEndpointsResponse =>
    __isa(o, "BatchGetDevEndpointsResponse");
}

export interface BatchGetJobsRequest {
  __type?: "BatchGetJobsRequest";
  /**
   * <p>A list of job names, which might be the names returned from the <code>ListJobs</code>
   *       operation.</p>
   */
  JobNames: string[] | undefined;
}

export namespace BatchGetJobsRequest {
  export const filterSensitiveLog = (obj: BatchGetJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetJobsRequest =>
    __isa(o, "BatchGetJobsRequest");
}

export interface BatchGetJobsResponse {
  __type?: "BatchGetJobsResponse";
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * <p>A list of names of jobs not found.</p>
   */
  JobsNotFound?: string[];
}

export namespace BatchGetJobsResponse {
  export const filterSensitiveLog = (obj: BatchGetJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetJobsResponse =>
    __isa(o, "BatchGetJobsResponse");
}

export interface BatchGetPartitionRequest {
  __type?: "BatchGetPartitionRequest";
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partitions reside.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of partition values identifying the partitions to retrieve.</p>
   */
  PartitionsToGet: PartitionValueList[] | undefined;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;
}

export namespace BatchGetPartitionRequest {
  export const filterSensitiveLog = (obj: BatchGetPartitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetPartitionRequest =>
    __isa(o, "BatchGetPartitionRequest");
}

export interface BatchGetPartitionResponse {
  __type?: "BatchGetPartitionResponse";
  /**
   * <p>A list of the requested partitions.</p>
   */
  Partitions?: Partition[];

  /**
   * <p>A list of the partition values in the request for which partitions were not
   *       returned.</p>
   */
  UnprocessedKeys?: PartitionValueList[];
}

export namespace BatchGetPartitionResponse {
  export const filterSensitiveLog = (obj: BatchGetPartitionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetPartitionResponse =>
    __isa(o, "BatchGetPartitionResponse");
}

export interface BatchGetTriggersRequest {
  __type?: "BatchGetTriggersRequest";
  /**
   * <p>A list of trigger names, which may be the names returned from the <code>ListTriggers</code> operation.</p>
   */
  TriggerNames: string[] | undefined;
}

export namespace BatchGetTriggersRequest {
  export const filterSensitiveLog = (obj: BatchGetTriggersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetTriggersRequest =>
    __isa(o, "BatchGetTriggersRequest");
}

export interface BatchGetTriggersResponse {
  __type?: "BatchGetTriggersResponse";
  /**
   * <p>A list of trigger definitions.</p>
   */
  Triggers?: Trigger[];

  /**
   * <p>A list of names of triggers not found.</p>
   */
  TriggersNotFound?: string[];
}

export namespace BatchGetTriggersResponse {
  export const filterSensitiveLog = (obj: BatchGetTriggersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetTriggersResponse =>
    __isa(o, "BatchGetTriggersResponse");
}

export interface BatchGetWorkflowsRequest {
  __type?: "BatchGetWorkflowsRequest";
  /**
   * <p>Specifies whether to include a graph when returning the workflow resource metadata.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>A list of workflow names, which may be the names returned from the <code>ListWorkflows</code> operation.</p>
   */
  Names: string[] | undefined;
}

export namespace BatchGetWorkflowsRequest {
  export const filterSensitiveLog = (obj: BatchGetWorkflowsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetWorkflowsRequest =>
    __isa(o, "BatchGetWorkflowsRequest");
}

export interface BatchGetWorkflowsResponse {
  __type?: "BatchGetWorkflowsResponse";
  /**
   * <p>A list of names of workflows not found.</p>
   */
  MissingWorkflows?: string[];

  /**
   * <p>A list of workflow resource metadata.</p>
   */
  Workflows?: Workflow[];
}

export namespace BatchGetWorkflowsResponse {
  export const filterSensitiveLog = (obj: BatchGetWorkflowsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchGetWorkflowsResponse =>
    __isa(o, "BatchGetWorkflowsResponse");
}

/**
 * <p>Records an error that occurred when attempting to stop a
 *       specified job run.</p>
 */
export interface BatchStopJobRunError {
  __type?: "BatchStopJobRunError";
  /**
   * <p>Specifies details about the error that was encountered.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The name of the job definition that is used in the job run in question.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run in question.</p>
   */
  JobRunId?: string;
}

export namespace BatchStopJobRunError {
  export const filterSensitiveLog = (obj: BatchStopJobRunError): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchStopJobRunError =>
    __isa(o, "BatchStopJobRunError");
}

export interface BatchStopJobRunRequest {
  __type?: "BatchStopJobRunRequest";
  /**
   * <p>The name of the job definition for which to stop job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>A list of the <code>JobRunIds</code> that should be stopped for that job
   *       definition.</p>
   */
  JobRunIds: string[] | undefined;
}

export namespace BatchStopJobRunRequest {
  export const filterSensitiveLog = (obj: BatchStopJobRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchStopJobRunRequest =>
    __isa(o, "BatchStopJobRunRequest");
}

export interface BatchStopJobRunResponse {
  __type?: "BatchStopJobRunResponse";
  /**
   * <p>A list of the errors that were encountered in trying to stop <code>JobRuns</code>,
   *       including the <code>JobRunId</code> for which each error was encountered and details about the
   *       error.</p>
   */
  Errors?: BatchStopJobRunError[];

  /**
   * <p>A list of the JobRuns that were successfully submitted for stopping.</p>
   */
  SuccessfulSubmissions?: BatchStopJobRunSuccessfulSubmission[];
}

export namespace BatchStopJobRunResponse {
  export const filterSensitiveLog = (obj: BatchStopJobRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchStopJobRunResponse =>
    __isa(o, "BatchStopJobRunResponse");
}

/**
 * <p>Records a successful request to stop a specified <code>JobRun</code>.</p>
 */
export interface BatchStopJobRunSuccessfulSubmission {
  __type?: "BatchStopJobRunSuccessfulSubmission";
  /**
   * <p>The name of the job definition used in the job run that was stopped.</p>
   */
  JobName?: string;

  /**
   * <p>The <code>JobRunId</code> of the job run that was stopped.</p>
   */
  JobRunId?: string;
}

export namespace BatchStopJobRunSuccessfulSubmission {
  export const filterSensitiveLog = (
    obj: BatchStopJobRunSuccessfulSubmission
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchStopJobRunSuccessfulSubmission =>
    __isa(o, "BatchStopJobRunSuccessfulSubmission");
}

export interface CancelMLTaskRunRequest {
  __type?: "CancelMLTaskRunRequest";
  /**
   * <p>A unique identifier for the task run.</p>
   */
  TaskRunId: string | undefined;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace CancelMLTaskRunRequest {
  export const filterSensitiveLog = (obj: CancelMLTaskRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelMLTaskRunRequest =>
    __isa(o, "CancelMLTaskRunRequest");
}

export interface CancelMLTaskRunResponse {
  __type?: "CancelMLTaskRunResponse";
  /**
   * <p>The status for this run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId?: string;
}

export namespace CancelMLTaskRunResponse {
  export const filterSensitiveLog = (obj: CancelMLTaskRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CancelMLTaskRunResponse =>
    __isa(o, "CancelMLTaskRunResponse");
}

export enum CatalogEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS"
}

/**
 * <p>Specifies a table definition in the AWS Glue Data Catalog.</p>
 */
export interface CatalogEntry {
  __type?: "CatalogEntry";
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
  export const filterSensitiveLog = (obj: CatalogEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is CatalogEntry => __isa(o, "CatalogEntry");
}

/**
 * <p>A structure containing migration status information.</p>
 */
export interface CatalogImportStatus {
  __type?: "CatalogImportStatus";
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
  export const filterSensitiveLog = (obj: CatalogImportStatus): any => ({
    ...obj
  });
  export const isa = (o: any): o is CatalogImportStatus =>
    __isa(o, "CatalogImportStatus");
}

/**
 * <p>Specifies an AWS Glue Data Catalog target.</p>
 */
export interface CatalogTarget {
  __type?: "CatalogTarget";
  /**
   * <p>The name of the database to be synchronized.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A list of the tables to be synchronized.</p>
   */
  Tables: string[] | undefined;
}

export namespace CatalogTarget {
  export const filterSensitiveLog = (obj: CatalogTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is CatalogTarget => __isa(o, "CatalogTarget");
}

/**
 * <p>Classifiers are triggered during a crawl task. A classifier checks whether a given file is
 *       in a format it can handle. If it is, the classifier creates a schema in the form of a
 *         <code>StructType</code> object that matches that data format.</p>
 *          <p>You can use the standard classifiers that AWS Glue provides, or you can write your own
 *       classifiers to best categorize your data sources and specify the appropriate schemas to use
 *       for them. A classifier can be a <code>grok</code> classifier, an <code>XML</code> classifier,
 *       a <code>JSON</code> classifier, or a custom <code>CSV</code> classifier, as specified in one
 *       of the fields in the <code>Classifier</code> object.</p>
 */
export interface Classifier {
  __type?: "Classifier";
  /**
   * <p>A classifier for comma-separated values (CSV).</p>
   */
  CsvClassifier?: CsvClassifier;

  /**
   * <p>A classifier that uses <code>grok</code>.</p>
   */
  GrokClassifier?: GrokClassifier;

  /**
   * <p>A classifier for JSON content.</p>
   */
  JsonClassifier?: JsonClassifier;

  /**
   * <p>A classifier for XML content.</p>
   */
  XMLClassifier?: XMLClassifier;
}

export namespace Classifier {
  export const filterSensitiveLog = (obj: Classifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is Classifier => __isa(o, "Classifier");
}

/**
 * <p>Specifies how Amazon CloudWatch data should be encrypted.</p>
 */
export interface CloudWatchEncryption {
  __type?: "CloudWatchEncryption";
  /**
   * <p>The encryption mode to use for CloudWatch data.</p>
   */
  CloudWatchEncryptionMode?: CloudWatchEncryptionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export namespace CloudWatchEncryption {
  export const filterSensitiveLog = (obj: CloudWatchEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is CloudWatchEncryption =>
    __isa(o, "CloudWatchEncryption");
}

export enum CloudWatchEncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS"
}

/**
 * <p>Represents a directional edge in a directed acyclic graph (DAG).</p>
 */
export interface CodeGenEdge {
  __type?: "CodeGenEdge";
  /**
   * <p>The ID of the node at which the edge starts.</p>
   */
  Source: string | undefined;

  /**
   * <p>The ID of the node at which the edge ends.</p>
   */
  Target: string | undefined;

  /**
   * <p>The target of the edge.</p>
   */
  TargetParameter?: string;
}

export namespace CodeGenEdge {
  export const filterSensitiveLog = (obj: CodeGenEdge): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeGenEdge => __isa(o, "CodeGenEdge");
}

/**
 * <p>Represents a node in a directed acyclic graph (DAG)</p>
 */
export interface CodeGenNode {
  __type?: "CodeGenNode";
  /**
   * <p>Properties of the node, in the form of name-value pairs.</p>
   */
  Args: CodeGenNodeArg[] | undefined;

  /**
   * <p>A node identifier that is unique within the node's graph.</p>
   */
  Id: string | undefined;

  /**
   * <p>The line number of the node.</p>
   */
  LineNumber?: number;

  /**
   * <p>The type of node that this is.</p>
   */
  NodeType: string | undefined;
}

export namespace CodeGenNode {
  export const filterSensitiveLog = (obj: CodeGenNode): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeGenNode => __isa(o, "CodeGenNode");
}

/**
 * <p>An argument or property of a node.</p>
 */
export interface CodeGenNodeArg {
  __type?: "CodeGenNodeArg";
  /**
   * <p>The name of the argument or property.</p>
   */
  Name: string | undefined;

  /**
   * <p>True if the value is used as a parameter.</p>
   */
  Param?: boolean;

  /**
   * <p>The value of the argument or property.</p>
   */
  Value: string | undefined;
}

export namespace CodeGenNodeArg {
  export const filterSensitiveLog = (obj: CodeGenNodeArg): any => ({
    ...obj
  });
  export const isa = (o: any): o is CodeGenNodeArg =>
    __isa(o, "CodeGenNodeArg");
}

/**
 * <p>A column in a <code>Table</code>.</p>
 */
export interface Column {
  __type?: "Column";
  /**
   * <p>A free-form text comment.</p>
   */
  Comment?: string;

  /**
   * <p>The name of the <code>Column</code>.</p>
   */
  Name: string | undefined;

  /**
   * <p>These key-value pairs define properties associated with the column.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The data type of the <code>Column</code>.</p>
   */
  Type?: string;
}

export namespace Column {
  export const filterSensitiveLog = (obj: Column): any => ({
    ...obj
  });
  export const isa = (o: any): o is Column => __isa(o, "Column");
}

export enum Comparator {
  EQUALS = "EQUALS",
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_EQUALS = "GREATER_THAN_EQUALS",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_EQUALS = "LESS_THAN_EQUALS"
}

/**
 * <p>Two processes are trying to modify a resource simultaneously.</p>
 */
export interface ConcurrentModificationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentModificationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentModificationException {
  export const filterSensitiveLog = (
    obj: ConcurrentModificationException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentModificationException =>
    __isa(o, "ConcurrentModificationException");
}

/**
 * <p>Too many jobs are being run concurrently.</p>
 */
export interface ConcurrentRunsExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConcurrentRunsExceededException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConcurrentRunsExceededException {
  export const filterSensitiveLog = (
    obj: ConcurrentRunsExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConcurrentRunsExceededException =>
    __isa(o, "ConcurrentRunsExceededException");
}

/**
 * <p>Defines a condition under which a trigger fires.</p>
 */
export interface Condition {
  __type?: "Condition";
  /**
   * <p>The state of the crawler to which this condition applies.</p>
   */
  CrawlState?: CrawlState | string;

  /**
   * <p>The name of the crawler to which this condition applies.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The name of the job whose <code>JobRuns</code> this condition applies to, and on which
   *       this trigger waits.</p>
   */
  JobName?: string;

  /**
   * <p>A logical operator.</p>
   */
  LogicalOperator?: LogicalOperator | string;

  /**
   * <p>The condition state. Currently, the values supported are <code>SUCCEEDED</code>,
   *       <code>STOPPED</code>, <code>TIMEOUT</code>, and <code>FAILED</code>.</p>
   */
  State?: JobRunState | string;
}

export namespace Condition {
  export const filterSensitiveLog = (obj: Condition): any => ({
    ...obj
  });
  export const isa = (o: any): o is Condition => __isa(o, "Condition");
}

/**
 * <p>A specified condition was not satisfied.</p>
 */
export interface ConditionCheckFailureException
  extends __SmithyException,
    $MetadataBearer {
  name: "ConditionCheckFailureException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ConditionCheckFailureException {
  export const filterSensitiveLog = (
    obj: ConditionCheckFailureException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConditionCheckFailureException =>
    __isa(o, "ConditionCheckFailureException");
}

/**
 * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
 *
 * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
 */
export interface ConfusionMatrix {
  __type?: "ConfusionMatrix";
  /**
   * <p>The number of matches in the data that the transform didn't find, in the confusion matrix for your transform.</p>
   */
  NumFalseNegatives?: number;

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
   * <p>The number of matches in the data that the transform correctly found, in the confusion matrix for your transform.</p>
   */
  NumTruePositives?: number;
}

export namespace ConfusionMatrix {
  export const filterSensitiveLog = (obj: ConfusionMatrix): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConfusionMatrix =>
    __isa(o, "ConfusionMatrix");
}

/**
 * <p>Defines a connection to a data source.</p>
 */
export interface Connection {
  __type?: "Connection";
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
   *                   <code>JDBC_CONNECTION_URL</code> - The URL for the JDBC connection.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>JDBC_ENFORCE_SSL</code> - A Boolean string (true, false) specifying whether Secure
   *           Sockets Layer (SSL) with hostname matching is enforced for the JDBC connection on the
   *           client. The default is false.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT</code> - An Amazon S3 location specifying the customer's root certificate. AWS Glue uses this root certificate to validate the customer’s certificate when connecting to the customer database. AWS Glue only handles X.509 certificates. The certificate provided must be DER-encoded and supplied in Base64 encoding PEM format.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SKIP_CUSTOM_JDBC_CERT_VALIDATION</code> - By default, this is <code>false</code>. AWS Glue validates the Signature algorithm and Subject Public Key Algorithm for the customer certificate. The only permitted algorithms for the Signature algorithm are SHA256withRSA, SHA384withRSA or SHA512withRSA. For the Subject Public Key Algorithm, the key length must be at least 2048. You can set the value of this property to <code>true</code> to skip AWS Glue’s validation of the customer certificate.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CUSTOM_JDBC_CERT_STRING</code> - A custom JDBC certificate string which is used for domain match or distinguished name match to prevent a man-in-the-middle attack. In Oracle database, this is used as the <code>SSL_SERVER_CERT_DN</code>; in Microsoft SQL Server, this is used as the <code>hostNameInCertificate</code>.</p>
   *             </li>
   *          </ul>
   */
  ConnectionProperties?: { [key: string]: string };

  /**
   * <p>The type of the connection. Currently, only JDBC is supported;
   *       SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>The time that this connection definition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>The user, group, or role that last updated this connection definition.</p>
   */
  LastUpdatedBy?: string;

  /**
   * <p>The last time that this connection definition was updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>The name of the connection definition.</p>
   */
  Name?: string;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to make this connection successfully.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
}

export namespace Connection {
  export const filterSensitiveLog = (obj: Connection): any => ({
    ...obj
  });
  export const isa = (o: any): o is Connection => __isa(o, "Connection");
}

/**
 * <p>A structure that is used to specify a connection to create or update.</p>
 */
export interface ConnectionInput {
  __type?: "ConnectionInput";
  /**
   * <p>These key-value pairs define parameters for the connection.</p>
   */
  ConnectionProperties: { [key: string]: string } | undefined;

  /**
   * <p>The type of the connection. Currently, only JDBC is supported;
   *       SFTP is not supported.</p>
   */
  ConnectionType: ConnectionType | string | undefined;

  /**
   * <p>The description of the connection.</p>
   */
  Description?: string;

  /**
   * <p>A list of criteria that can be used in selecting this connection.</p>
   */
  MatchCriteria?: string[];

  /**
   * <p>The name of the connection.</p>
   */
  Name: string | undefined;

  /**
   * <p>A map of physical connection requirements, such as virtual private cloud (VPC) and
   *         <code>SecurityGroup</code>, that are needed to successfully make this connection.</p>
   */
  PhysicalConnectionRequirements?: PhysicalConnectionRequirements;
}

export namespace ConnectionInput {
  export const filterSensitiveLog = (obj: ConnectionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionInput =>
    __isa(o, "ConnectionInput");
}

/**
 * <p>The data structure used by the Data Catalog to encrypt the password as part of
 *         <code>CreateConnection</code> or <code>UpdateConnection</code> and store it in the
 *         <code>ENCRYPTED_PASSWORD</code> field in the connection properties. You can enable catalog
 *       encryption or only password encryption.</p>
 *
 * 	        <p>When a <code>CreationConnection</code> request arrives containing a password, the Data
 *       Catalog first encrypts the password using your AWS KMS key. It then encrypts the whole
 *       connection object again if catalog encryption is also enabled.</p>
 *
 *          <p>This encryption requires that you set AWS KMS key permissions to enable or restrict access
 *       on the password key according to your security requirements. For example, you might want only
 *       administrators to have decrypt permission on the password key.</p>
 */
export interface ConnectionPasswordEncryption {
  __type?: "ConnectionPasswordEncryption";
  /**
   * <p>An AWS KMS key that is used to encrypt the connection password. </p>
   *
   *          <p>If connection password protection is enabled, the caller of <code>CreateConnection</code>
   *       and <code>UpdateConnection</code> needs at least <code>kms:Encrypt</code> permission on the
   *       specified AWS KMS key, to encrypt passwords before storing them in the Data Catalog. </p>
   *
   * 	        <p>You can set the decrypt permission to enable or restrict access on the password key according to your security requirements.</p>
   */
  AwsKmsKeyId?: string;

  /**
   * <p>When the <code>ReturnConnectionPasswordEncrypted</code> flag is set to "true", passwords remain encrypted in the responses of <code>GetConnection</code> and <code>GetConnections</code>. This encryption takes effect independently from catalog encryption. </p>
   */
  ReturnConnectionPasswordEncrypted: boolean | undefined;
}

export namespace ConnectionPasswordEncryption {
  export const filterSensitiveLog = (
    obj: ConnectionPasswordEncryption
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionPasswordEncryption =>
    __isa(o, "ConnectionPasswordEncryption");
}

export enum ConnectionPropertyKey {
  CONFIG_FILES = "CONFIG_FILES",
  CUSTOM_JDBC_CERT = "CUSTOM_JDBC_CERT",
  CUSTOM_JDBC_CERT_STRING = "CUSTOM_JDBC_CERT_STRING",
  ENCRYPTED_PASSWORD = "ENCRYPTED_PASSWORD",
  HOST = "HOST",
  INSTANCE_ID = "INSTANCE_ID",
  JDBC_CONNECTION_URL = "JDBC_CONNECTION_URL",
  JDBC_DRIVER_CLASS_NAME = "JDBC_DRIVER_CLASS_NAME",
  JDBC_DRIVER_JAR_URI = "JDBC_DRIVER_JAR_URI",
  JDBC_ENFORCE_SSL = "JDBC_ENFORCE_SSL",
  JDBC_ENGINE = "JDBC_ENGINE",
  JDBC_ENGINE_VERSION = "JDBC_ENGINE_VERSION",
  PASSWORD = "PASSWORD",
  PORT = "PORT",
  SKIP_CUSTOM_JDBC_CERT_VALIDATION = "SKIP_CUSTOM_JDBC_CERT_VALIDATION",
  USER_NAME = "USERNAME"
}

/**
 * <p>Specifies the connections used by a job.</p>
 */
export interface ConnectionsList {
  __type?: "ConnectionsList";
  /**
   * <p>A list of connections used by the job.</p>
   */
  Connections?: string[];
}

export namespace ConnectionsList {
  export const filterSensitiveLog = (obj: ConnectionsList): any => ({
    ...obj
  });
  export const isa = (o: any): o is ConnectionsList =>
    __isa(o, "ConnectionsList");
}

export enum ConnectionType {
  JDBC = "JDBC",
  SFTP = "SFTP"
}

/**
 * <p>The details of a crawl in the workflow.</p>
 */
export interface Crawl {
  __type?: "Crawl";
  /**
   * <p>The date and time on which the crawl completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The error message associated with the crawl.</p>
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
   * <p>The date and time on which the crawl started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The state of the crawler.</p>
   */
  State?: CrawlState | string;
}

export namespace Crawl {
  export const filterSensitiveLog = (obj: Crawl): any => ({
    ...obj
  });
  export const isa = (o: any): o is Crawl => __isa(o, "Crawl");
}

/**
 * <p>Specifies a crawler program that examines a data source and uses classifiers to try to
 *       determine its schema. If successful, the crawler records metadata concerning the data source
 *       in the AWS Glue Data Catalog.</p>
 */
export interface Crawler {
  __type?: "Crawler";
  /**
   * <p>A list of UTF-8 strings that specify the custom classifiers that are associated
   *      with the crawler.</p>
   */
  Classifiers?: string[];

  /**
   * <p>Crawler configuration information. This versioned JSON string allows users
   *         to specify aspects of a crawler's behavior.
   *         For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>If the crawler is running, contains the total time elapsed since the last crawl
   *       began.</p>
   */
  CrawlElapsedTime?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The time that the crawler was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the database in which the crawler's output is stored.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the crawler.</p>
   */
  Description?: string;

  /**
   * <p>The status of the last crawl, and potentially error information if
   *       an error occurred.</p>
   */
  LastCrawl?: LastCrawlInfo;

  /**
   * <p>The time that the crawler was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the crawler.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of an IAM role that's used to access customer resources,
   *       such as Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  Role?: string;

  /**
   * <p>For scheduled crawlers, the schedule when the crawler runs.</p>
   */
  Schedule?: Schedule;

  /**
   * <p>The policy that specifies update and delete behaviors for the crawler.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>Indicates whether the crawler is running, or whether a run is pending.</p>
   */
  State?: CrawlerState | string;

  /**
   * <p>The prefix added to the names of tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>A collection of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;

  /**
   * <p>The version of the crawler.</p>
   */
  Version?: number;
}

export namespace Crawler {
  export const filterSensitiveLog = (obj: Crawler): any => ({
    ...obj
  });
  export const isa = (o: any): o is Crawler => __isa(o, "Crawler");
}

/**
 * <p>Metrics for a specified crawler.</p>
 */
export interface CrawlerMetrics {
  __type?: "CrawlerMetrics";
  /**
   * <p>The name of the crawler.</p>
   */
  CrawlerName?: string;

  /**
   * <p>The duration of the crawler's most recent run, in seconds.</p>
   */
  LastRuntimeSeconds?: number;

  /**
   * <p>The median duration of this crawler's runs, in seconds.</p>
   */
  MedianRuntimeSeconds?: number;

  /**
   * <p>True if the crawler is still estimating how long it will take to complete this run.</p>
   */
  StillEstimating?: boolean;

  /**
   * <p>The number of tables created by this crawler.</p>
   */
  TablesCreated?: number;

  /**
   * <p>The number of tables deleted by this crawler.</p>
   */
  TablesDeleted?: number;

  /**
   * <p>The number of tables updated by this crawler.</p>
   */
  TablesUpdated?: number;

  /**
   * <p>The estimated time left to complete a running crawl.</p>
   */
  TimeLeftSeconds?: number;
}

export namespace CrawlerMetrics {
  export const filterSensitiveLog = (obj: CrawlerMetrics): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerMetrics =>
    __isa(o, "CrawlerMetrics");
}

/**
 * <p>The details of a Crawler node present in the workflow.</p>
 */
export interface CrawlerNodeDetails {
  __type?: "CrawlerNodeDetails";
  /**
   * <p>A list of crawls represented by the crawl node.</p>
   */
  Crawls?: Crawl[];
}

export namespace CrawlerNodeDetails {
  export const filterSensitiveLog = (obj: CrawlerNodeDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerNodeDetails =>
    __isa(o, "CrawlerNodeDetails");
}

/**
 * <p>The specified crawler is not running.</p>
 */
export interface CrawlerNotRunningException
  extends __SmithyException,
    $MetadataBearer {
  name: "CrawlerNotRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerNotRunningException {
  export const filterSensitiveLog = (obj: CrawlerNotRunningException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerNotRunningException =>
    __isa(o, "CrawlerNotRunningException");
}

/**
 * <p>The operation cannot be performed because the crawler is already running.</p>
 */
export interface CrawlerRunningException
  extends __SmithyException,
    $MetadataBearer {
  name: "CrawlerRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerRunningException {
  export const filterSensitiveLog = (obj: CrawlerRunningException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerRunningException =>
    __isa(o, "CrawlerRunningException");
}

export enum CrawlerState {
  READY = "READY",
  RUNNING = "RUNNING",
  STOPPING = "STOPPING"
}

/**
 * <p>The specified crawler is stopping.</p>
 */
export interface CrawlerStoppingException
  extends __SmithyException,
    $MetadataBearer {
  name: "CrawlerStoppingException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace CrawlerStoppingException {
  export const filterSensitiveLog = (obj: CrawlerStoppingException): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerStoppingException =>
    __isa(o, "CrawlerStoppingException");
}

/**
 * <p>Specifies data stores to crawl.</p>
 */
export interface CrawlerTargets {
  __type?: "CrawlerTargets";
  /**
   * <p>Specifies AWS Glue Data Catalog targets.</p>
   */
  CatalogTargets?: CatalogTarget[];

  /**
   * <p>Specifies Amazon DynamoDB targets.</p>
   */
  DynamoDBTargets?: DynamoDBTarget[];

  /**
   * <p>Specifies JDBC targets.</p>
   */
  JdbcTargets?: JdbcTarget[];

  /**
   * <p>Specifies Amazon Simple Storage Service (Amazon S3) targets.</p>
   */
  S3Targets?: S3Target[];
}

export namespace CrawlerTargets {
  export const filterSensitiveLog = (obj: CrawlerTargets): any => ({
    ...obj
  });
  export const isa = (o: any): o is CrawlerTargets =>
    __isa(o, "CrawlerTargets");
}

export enum CrawlState {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SUCCEEDED = "SUCCEEDED"
}

export interface CreateClassifierRequest {
  __type?: "CreateClassifierRequest";
  /**
   * <p>A <code>CsvClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  CsvClassifier?: CreateCsvClassifierRequest;

  /**
   * <p>A <code>GrokClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  GrokClassifier?: CreateGrokClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  JsonClassifier?: CreateJsonClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object specifying the classifier
   *       to create.</p>
   */
  XMLClassifier?: CreateXMLClassifierRequest;
}

export namespace CreateClassifierRequest {
  export const filterSensitiveLog = (obj: CreateClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClassifierRequest =>
    __isa(o, "CreateClassifierRequest");
}

export interface CreateClassifierResponse {
  __type?: "CreateClassifierResponse";
}

export namespace CreateClassifierResponse {
  export const filterSensitiveLog = (obj: CreateClassifierResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateClassifierResponse =>
    __isa(o, "CreateClassifierResponse");
}

export interface CreateConnectionRequest {
  __type?: "CreateConnectionRequest";
  /**
   * <p>The ID of the Data Catalog in which to create the connection. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object defining the connection
   *       to create.</p>
   */
  ConnectionInput: ConnectionInput | undefined;
}

export namespace CreateConnectionRequest {
  export const filterSensitiveLog = (obj: CreateConnectionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConnectionRequest =>
    __isa(o, "CreateConnectionRequest");
}

export interface CreateConnectionResponse {
  __type?: "CreateConnectionResponse";
}

export namespace CreateConnectionResponse {
  export const filterSensitiveLog = (obj: CreateConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateConnectionResponse =>
    __isa(o, "CreateConnectionResponse");
}

export interface CreateCrawlerRequest {
  __type?: "CreateCrawlerRequest";
  /**
   * <p>A list of custom classifiers that the user has registered. By default, all built-in
   *       classifiers are included in a crawl, but these custom classifiers always override the default
   *       classifiers for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The crawler configuration information. This versioned JSON string allows users to specify
   *       aspects of a crawler's behavior. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a
   *         Crawler</a>.</p>
   */
  Configuration?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used by this
   *       crawler.</p>
   */
  CrawlerSecurityConfiguration?: string;

  /**
   * <p>The AWS Glue database where results are written, such as:
   *         <code>arn:aws:daylight:us-east-1::database/sometable/*</code>.</p>
   */
  DatabaseName?: string;

  /**
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role used by the new crawler to
   *       access customer resources.</p>
   */
  Role: string | undefined;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
   *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
   *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>The tags to use with this crawler request. You can use tags to limit access to the
   *       crawler. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS
   *         Glue</a>.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A list of collection of targets to crawl.</p>
   */
  Targets: CrawlerTargets | undefined;
}

export namespace CreateCrawlerRequest {
  export const filterSensitiveLog = (obj: CreateCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCrawlerRequest =>
    __isa(o, "CreateCrawlerRequest");
}

export interface CreateCrawlerResponse {
  __type?: "CreateCrawlerResponse";
}

export namespace CreateCrawlerResponse {
  export const filterSensitiveLog = (obj: CreateCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCrawlerResponse =>
    __isa(o, "CreateCrawlerResponse");
}

/**
 * <p>Specifies a custom CSV classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateCsvClassifierRequest {
  __type?: "CreateCsvClassifierRequest";
  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. Must be different from the column delimiter.</p>
   */
  QuoteSymbol?: string;
}

export namespace CreateCsvClassifierRequest {
  export const filterSensitiveLog = (obj: CreateCsvClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateCsvClassifierRequest =>
    __isa(o, "CreateCsvClassifierRequest");
}

export interface CreateDatabaseRequest {
  __type?: "CreateDatabaseRequest";
  /**
   * <p>The ID of the Data Catalog in which to create the database. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The metadata for the database.</p>
   */
  DatabaseInput: DatabaseInput | undefined;
}

export namespace CreateDatabaseRequest {
  export const filterSensitiveLog = (obj: CreateDatabaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDatabaseRequest =>
    __isa(o, "CreateDatabaseRequest");
}

export interface CreateDatabaseResponse {
  __type?: "CreateDatabaseResponse";
}

export namespace CreateDatabaseResponse {
  export const filterSensitiveLog = (obj: CreateDatabaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDatabaseResponse =>
    __isa(o, "CreateDatabaseResponse");
}

export interface CreateDevEndpointRequest {
  __type?: "CreateDevEndpointRequest";
  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The name to be assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not yet supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) to allocate to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the development endpoints for authentication. The use
   *       of this attribute is preferred over a single public key because the public keys allow you to
   *       have a different private key per client.</p>
   *
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be able
   *         to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API with the public
   *         key content in the <code>deletePublicKeys</code> attribute, and the list of new keys in the
   *           <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The IAM role for the <code>DevEndpoint</code>.</p>
   */
  RoleArn: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>Security group IDs for the security groups to be used by the new
   *       <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The subnet ID for the new <code>DevEndpoint</code> to use.</p>
   */
  SubnetId?: string;

  /**
   * <p>The tags to use with this DevEndpoint. You may use tags to limit access to the DevEndpoint. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;
}

export namespace CreateDevEndpointRequest {
  export const filterSensitiveLog = (obj: CreateDevEndpointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDevEndpointRequest =>
    __isa(o, "CreateDevEndpointRequest");
}

export interface CreateDevEndpointResponse {
  __type?: "CreateDevEndpointResponse";
  /**
   * <p>The map of arguments used to configure this <code>DevEndpoint</code>.</p>
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
  Arguments?: { [key: string]: string };

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name assigned to the new <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>Path to one or more Java <code>.jar</code> files in an S3 bucket that will be loaded in
   *       your <code>DevEndpoint</code>.</p>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The paths to one or more Python libraries in an S3 bucket that will be loaded in your
   *         <code>DevEndpoint</code>.</p>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   */
  GlueVersion?: string;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this DevEndpoint.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the role assigned to the new
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure being used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The security groups assigned to the new <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The current status of the new <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The subnet ID assigned to the new <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. May be a value of Standard, G.1X, or G.2X.</p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The address of the YARN endpoint used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;
}

export namespace CreateDevEndpointResponse {
  export const filterSensitiveLog = (obj: CreateDevEndpointResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateDevEndpointResponse =>
    __isa(o, "CreateDevEndpointResponse");
}

/**
 * <p>Specifies a <code>grok</code> classifier for <code>CreateClassifier</code>
 *       to create.</p>
 */
export interface CreateGrokClassifierRequest {
  __type?: "CreateGrokClassifierRequest";
  /**
   * <p>An identifier of the data format that the classifier matches,
   *       such as Twitter, JSON, Omniture logs, Amazon CloudWatch Logs, and so on.</p>
   */
  Classification: string | undefined;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>The name of the new classifier.</p>
   */
  Name: string | undefined;
}

export namespace CreateGrokClassifierRequest {
  export const filterSensitiveLog = (
    obj: CreateGrokClassifierRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateGrokClassifierRequest =>
    __isa(o, "CreateGrokClassifierRequest");
}

export interface CreateJobRequest {
  __type?: "CreateJobRequest";
  /**
   * <p>This parameter is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) to allocate to this Job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *       page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command: JobCommand | undefined;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

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
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *        of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *        For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
   *          pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *          <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The name you assign to this job definition. It must be unique in your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 	        <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role: string | undefined;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The tags to use with this job. You may use tags to limit access to the job. For more information about tags in AWS Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS Glue</a> in the developer guide.</p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

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
}

export namespace CreateJobRequest {
  export const filterSensitiveLog = (obj: CreateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobRequest =>
    __isa(o, "CreateJobRequest");
}

export interface CreateJobResponse {
  __type?: "CreateJobResponse";
  /**
   * <p>The unique name that was provided for this job definition.</p>
   */
  Name?: string;
}

export namespace CreateJobResponse {
  export const filterSensitiveLog = (obj: CreateJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJobResponse =>
    __isa(o, "CreateJobResponse");
}

/**
 * <p>Specifies a JSON classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateJsonClassifierRequest {
  __type?: "CreateJsonClassifierRequest";
  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
   *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;
}

export namespace CreateJsonClassifierRequest {
  export const filterSensitiveLog = (
    obj: CreateJsonClassifierRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateJsonClassifierRequest =>
    __isa(o, "CreateJsonClassifierRequest");
}

export interface CreateMLTransformRequest {
  __type?: "CreateMLTransformRequest";
  /**
   * <p>A description of the machine learning transform that is being defined. The default is an
   *       empty string.</p>
   */
  Description?: string;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables: GlueTable[] | undefined;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that are allocated to task runs for this transform. You can allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of
   *       processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more
   *       information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *         page</a>. </p>
   *
   * 			      <p>
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
   *
   *
   *          <p>When the <code>WorkerType</code> field is set to a value other than <code>Standard</code>, the <code>MaxCapacity</code> field is set automatically and becomes read-only.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The unique name that you give the transform when you create it.</p>
   */
  Name: string | undefined;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   *
   * 		       <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The algorithmic parameters that are specific to the transform type used. Conditionally
   *       dependent on the transform type.</p>
   */
  Parameters: TransformParameters | undefined;

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
  Role: string | undefined;

  /**
   * <p>The timeout of the task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

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
}

export namespace CreateMLTransformRequest {
  export const filterSensitiveLog = (obj: CreateMLTransformRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMLTransformRequest =>
    __isa(o, "CreateMLTransformRequest");
}

export interface CreateMLTransformResponse {
  __type?: "CreateMLTransformResponse";
  /**
   * <p>A unique identifier that is generated for the transform.</p>
   */
  TransformId?: string;
}

export namespace CreateMLTransformResponse {
  export const filterSensitiveLog = (obj: CreateMLTransformResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateMLTransformResponse =>
    __isa(o, "CreateMLTransformResponse");
}

export interface CreatePartitionRequest {
  __type?: "CreatePartitionRequest";
  /**
   * <p>The AWS account ID of the catalog in which the partition is to be created.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the metadata database in which the partition is
   *       to be created.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>PartitionInput</code> structure defining the partition
   *       to be created.</p>
   */
  PartitionInput: PartitionInput | undefined;

  /**
   * <p>The name of the metadata table in which the partition is to be created.</p>
   */
  TableName: string | undefined;
}

export namespace CreatePartitionRequest {
  export const filterSensitiveLog = (obj: CreatePartitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePartitionRequest =>
    __isa(o, "CreatePartitionRequest");
}

export interface CreatePartitionResponse {
  __type?: "CreatePartitionResponse";
}

export namespace CreatePartitionResponse {
  export const filterSensitiveLog = (obj: CreatePartitionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatePartitionResponse =>
    __isa(o, "CreatePartitionResponse");
}

export interface CreateScriptRequest {
  __type?: "CreateScriptRequest";
  /**
   * <p>A list of the edges in the DAG.</p>
   */
  DagEdges?: CodeGenEdge[];

  /**
   * <p>A list of the nodes in the DAG.</p>
   */
  DagNodes?: CodeGenNode[];

  /**
   * <p>The programming language of the resulting code from the DAG.</p>
   */
  Language?: Language | string;
}

export namespace CreateScriptRequest {
  export const filterSensitiveLog = (obj: CreateScriptRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateScriptRequest =>
    __isa(o, "CreateScriptRequest");
}

export interface CreateScriptResponse {
  __type?: "CreateScriptResponse";
  /**
   * <p>The Python script generated from the DAG.</p>
   */
  PythonScript?: string;

  /**
   * <p>The Scala code generated from the DAG.</p>
   */
  ScalaCode?: string;
}

export namespace CreateScriptResponse {
  export const filterSensitiveLog = (obj: CreateScriptResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateScriptResponse =>
    __isa(o, "CreateScriptResponse");
}

export interface CreateSecurityConfigurationRequest {
  __type?: "CreateSecurityConfigurationRequest";
  /**
   * <p>The encryption configuration for the new security configuration.</p>
   */
  EncryptionConfiguration: EncryptionConfiguration | undefined;

  /**
   * <p>The name for the new security configuration.</p>
   */
  Name: string | undefined;
}

export namespace CreateSecurityConfigurationRequest {
  export const filterSensitiveLog = (
    obj: CreateSecurityConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSecurityConfigurationRequest =>
    __isa(o, "CreateSecurityConfigurationRequest");
}

export interface CreateSecurityConfigurationResponse {
  __type?: "CreateSecurityConfigurationResponse";
  /**
   * <p>The time at which the new security configuration was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name assigned to the new security configuration.</p>
   */
  Name?: string;
}

export namespace CreateSecurityConfigurationResponse {
  export const filterSensitiveLog = (
    obj: CreateSecurityConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateSecurityConfigurationResponse =>
    __isa(o, "CreateSecurityConfigurationResponse");
}

export interface CreateTableRequest {
  __type?: "CreateTableRequest";
  /**
   * <p>The ID of the Data Catalog in which to create the <code>Table</code>.
   *       If none is supplied, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The catalog database in which to create the new table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The <code>TableInput</code> object that defines the metadata table
   *       to create in the catalog.</p>
   */
  TableInput: TableInput | undefined;
}

export namespace CreateTableRequest {
  export const filterSensitiveLog = (obj: CreateTableRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTableRequest =>
    __isa(o, "CreateTableRequest");
}

export interface CreateTableResponse {
  __type?: "CreateTableResponse";
}

export namespace CreateTableResponse {
  export const filterSensitiveLog = (obj: CreateTableResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTableResponse =>
    __isa(o, "CreateTableResponse");
}

export interface CreateTriggerRequest {
  __type?: "CreateTriggerRequest";
  /**
   * <p>The actions initiated by this trigger when it fires.</p>
   */
  Actions: Action[] | undefined;

  /**
   * <p>A description of the new trigger.</p>
   */
  Description?: string;

  /**
   * <p>The name of the trigger.</p>
   */
  Name: string | undefined;

  /**
   * <p>A predicate to specify when the new trigger should fire.</p>
   *          <p>This field is required when the trigger type is <code>CONDITIONAL</code>.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   *          <p>This field is required when the trigger type is SCHEDULED.</p>
   */
  Schedule?: string;

  /**
   * <p>Set to <code>true</code> to start <code>SCHEDULED</code> and <code>CONDITIONAL</code>
   *       triggers when created. True is not supported for <code>ON_DEMAND</code> triggers.</p>
   */
  StartOnCreation?: boolean;

  /**
   * <p>The tags to use with this trigger. You may use tags to limit access to the trigger.
   *       For more information about tags in AWS Glue, see
   *       <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">AWS Tags in AWS
   *         Glue</a> in the developer guide. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>The type of the new trigger.</p>
   */
  Type: TriggerType | string | undefined;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;
}

export namespace CreateTriggerRequest {
  export const filterSensitiveLog = (obj: CreateTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTriggerRequest =>
    __isa(o, "CreateTriggerRequest");
}

export interface CreateTriggerResponse {
  __type?: "CreateTriggerResponse";
  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;
}

export namespace CreateTriggerResponse {
  export const filterSensitiveLog = (obj: CreateTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateTriggerResponse =>
    __isa(o, "CreateTriggerResponse");
}

export interface CreateUserDefinedFunctionRequest {
  __type?: "CreateUserDefinedFunctionRequest";
  /**
   * <p>The ID of the Data Catalog in which to create the function. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which to create the function.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that defines the function
   *       to create in the Data Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;
}

export namespace CreateUserDefinedFunctionRequest {
  export const filterSensitiveLog = (
    obj: CreateUserDefinedFunctionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserDefinedFunctionRequest =>
    __isa(o, "CreateUserDefinedFunctionRequest");
}

export interface CreateUserDefinedFunctionResponse {
  __type?: "CreateUserDefinedFunctionResponse";
}

export namespace CreateUserDefinedFunctionResponse {
  export const filterSensitiveLog = (
    obj: CreateUserDefinedFunctionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateUserDefinedFunctionResponse =>
    __isa(o, "CreateUserDefinedFunctionResponse");
}

export interface CreateWorkflowRequest {
  __type?: "CreateWorkflowRequest";
  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>The name to be assigned to the workflow. It should be unique within your account.</p>
   */
  Name: string | undefined;

  /**
   * <p>The tags to be used with this workflow.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace CreateWorkflowRequest {
  export const filterSensitiveLog = (obj: CreateWorkflowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkflowRequest =>
    __isa(o, "CreateWorkflowRequest");
}

export interface CreateWorkflowResponse {
  __type?: "CreateWorkflowResponse";
  /**
   * <p>The name of the workflow which was provided as part of the request.</p>
   */
  Name?: string;
}

export namespace CreateWorkflowResponse {
  export const filterSensitiveLog = (obj: CreateWorkflowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateWorkflowResponse =>
    __isa(o, "CreateWorkflowResponse");
}

/**
 * <p>Specifies an XML classifier for <code>CreateClassifier</code> to create.</p>
 */
export interface CreateXMLClassifierRequest {
  __type?: "CreateXMLClassifierRequest";
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification: string | undefined;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace CreateXMLClassifierRequest {
  export const filterSensitiveLog = (obj: CreateXMLClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateXMLClassifierRequest =>
    __isa(o, "CreateXMLClassifierRequest");
}

/**
 * <p>A classifier for custom <code>CSV</code> content.</p>
 */
export interface CsvClassifier {
  __type?: "CsvClassifier";
  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default
   *       value is <code>true</code>.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;
}

export namespace CsvClassifier {
  export const filterSensitiveLog = (obj: CsvClassifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is CsvClassifier => __isa(o, "CsvClassifier");
}

export enum CsvHeaderOption {
  ABSENT = "ABSENT",
  PRESENT = "PRESENT",
  UNKNOWN = "UNKNOWN"
}

/**
 * <p>The <code>Database</code> object represents a logical grouping of tables that might reside
 *       in a Hive metastore or an RDBMS.</p>
 */
export interface Database {
  __type?: "Database";
  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>The time at which the metadata database was created in the catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path).</p>
   */
  LocationUri?: string;

  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   */
  Parameters?: { [key: string]: string };
}

export namespace Database {
  export const filterSensitiveLog = (obj: Database): any => ({
    ...obj
  });
  export const isa = (o: any): o is Database => __isa(o, "Database");
}

/**
 * <p>The structure used to create or update a database.</p>
 */
export interface DatabaseInput {
  __type?: "DatabaseInput";
  /**
   * <p>Creates a set of default permissions on the table for principals. </p>
   */
  CreateTableDefaultPermissions?: PrincipalPermissions[];

  /**
   * <p>A description of the database.</p>
   */
  Description?: string;

  /**
   * <p>The location of the database (for example, an HDFS path). </p>
   */
  LocationUri?: string;

  /**
   * <p>The name of the database. For Hive compatibility, this is folded to lowercase when it is
   *       stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>These key-value pairs define parameters and properties
   *       of the database.</p>
   *          <p>These key-value pairs define parameters and properties of the database.</p>
   */
  Parameters?: { [key: string]: string };
}

export namespace DatabaseInput {
  export const filterSensitiveLog = (obj: DatabaseInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is DatabaseInput => __isa(o, "DatabaseInput");
}

/**
 * <p>Contains configuration information for maintaining Data Catalog security.</p>
 */
export interface DataCatalogEncryptionSettings {
  __type?: "DataCatalogEncryptionSettings";
  /**
   * <p>When connection password protection is enabled, the Data Catalog uses a customer-provided
   *       key to encrypt the password as part of <code>CreateConnection</code> or
   *         <code>UpdateConnection</code> and store it in the <code>ENCRYPTED_PASSWORD</code> field in
   *       the connection properties. You can enable catalog encryption or only password
   *       encryption.</p>
   */
  ConnectionPasswordEncryption?: ConnectionPasswordEncryption;

  /**
   * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
   */
  EncryptionAtRest?: EncryptionAtRest;
}

export namespace DataCatalogEncryptionSettings {
  export const filterSensitiveLog = (
    obj: DataCatalogEncryptionSettings
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataCatalogEncryptionSettings =>
    __isa(o, "DataCatalogEncryptionSettings");
}

/**
 * <p>The AWS Lake Formation principal.</p>
 */
export interface DataLakePrincipal {
  __type?: "DataLakePrincipal";
  /**
   * <p>An identifier for the AWS Lake Formation principal.</p>
   */
  DataLakePrincipalIdentifier?: string;
}

export namespace DataLakePrincipal {
  export const filterSensitiveLog = (obj: DataLakePrincipal): any => ({
    ...obj
  });
  export const isa = (o: any): o is DataLakePrincipal =>
    __isa(o, "DataLakePrincipal");
}

export enum DeleteBehavior {
  DELETE_FROM_DATABASE = "DELETE_FROM_DATABASE",
  DEPRECATE_IN_DATABASE = "DEPRECATE_IN_DATABASE",
  LOG = "LOG"
}

export interface DeleteClassifierRequest {
  __type?: "DeleteClassifierRequest";
  /**
   * <p>Name of the classifier to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteClassifierRequest {
  export const filterSensitiveLog = (obj: DeleteClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClassifierRequest =>
    __isa(o, "DeleteClassifierRequest");
}

export interface DeleteClassifierResponse {
  __type?: "DeleteClassifierResponse";
}

export namespace DeleteClassifierResponse {
  export const filterSensitiveLog = (obj: DeleteClassifierResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteClassifierResponse =>
    __isa(o, "DeleteClassifierResponse");
}

export interface DeleteConnectionRequest {
  __type?: "DeleteConnectionRequest";
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection to delete.</p>
   */
  ConnectionName: string | undefined;
}

export namespace DeleteConnectionRequest {
  export const filterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConnectionRequest =>
    __isa(o, "DeleteConnectionRequest");
}

export interface DeleteConnectionResponse {
  __type?: "DeleteConnectionResponse";
}

export namespace DeleteConnectionResponse {
  export const filterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteConnectionResponse =>
    __isa(o, "DeleteConnectionResponse");
}

export interface DeleteCrawlerRequest {
  __type?: "DeleteCrawlerRequest";
  /**
   * <p>The name of the crawler to remove.</p>
   */
  Name: string | undefined;
}

export namespace DeleteCrawlerRequest {
  export const filterSensitiveLog = (obj: DeleteCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCrawlerRequest =>
    __isa(o, "DeleteCrawlerRequest");
}

export interface DeleteCrawlerResponse {
  __type?: "DeleteCrawlerResponse";
}

export namespace DeleteCrawlerResponse {
  export const filterSensitiveLog = (obj: DeleteCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteCrawlerResponse =>
    __isa(o, "DeleteCrawlerResponse");
}

export interface DeleteDatabaseRequest {
  __type?: "DeleteDatabaseRequest";
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
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
  export const filterSensitiveLog = (obj: DeleteDatabaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDatabaseRequest =>
    __isa(o, "DeleteDatabaseRequest");
}

export interface DeleteDatabaseResponse {
  __type?: "DeleteDatabaseResponse";
}

export namespace DeleteDatabaseResponse {
  export const filterSensitiveLog = (obj: DeleteDatabaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDatabaseResponse =>
    __isa(o, "DeleteDatabaseResponse");
}

export interface DeleteDevEndpointRequest {
  __type?: "DeleteDevEndpointRequest";
  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName: string | undefined;
}

export namespace DeleteDevEndpointRequest {
  export const filterSensitiveLog = (obj: DeleteDevEndpointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDevEndpointRequest =>
    __isa(o, "DeleteDevEndpointRequest");
}

export interface DeleteDevEndpointResponse {
  __type?: "DeleteDevEndpointResponse";
}

export namespace DeleteDevEndpointResponse {
  export const filterSensitiveLog = (obj: DeleteDevEndpointResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteDevEndpointResponse =>
    __isa(o, "DeleteDevEndpointResponse");
}

export interface DeleteJobRequest {
  __type?: "DeleteJobRequest";
  /**
   * <p>The name of the job definition to delete.</p>
   */
  JobName: string | undefined;
}

export namespace DeleteJobRequest {
  export const filterSensitiveLog = (obj: DeleteJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobRequest =>
    __isa(o, "DeleteJobRequest");
}

export interface DeleteJobResponse {
  __type?: "DeleteJobResponse";
  /**
   * <p>The name of the job definition that was deleted.</p>
   */
  JobName?: string;
}

export namespace DeleteJobResponse {
  export const filterSensitiveLog = (obj: DeleteJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteJobResponse =>
    __isa(o, "DeleteJobResponse");
}

export interface DeleteMLTransformRequest {
  __type?: "DeleteMLTransformRequest";
  /**
   * <p>The unique identifier of the transform to delete.</p>
   */
  TransformId: string | undefined;
}

export namespace DeleteMLTransformRequest {
  export const filterSensitiveLog = (obj: DeleteMLTransformRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMLTransformRequest =>
    __isa(o, "DeleteMLTransformRequest");
}

export interface DeleteMLTransformResponse {
  __type?: "DeleteMLTransformResponse";
  /**
   * <p>The unique identifier of the transform that was deleted.</p>
   */
  TransformId?: string;
}

export namespace DeleteMLTransformResponse {
  export const filterSensitiveLog = (obj: DeleteMLTransformResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteMLTransformResponse =>
    __isa(o, "DeleteMLTransformResponse");
}

export interface DeletePartitionRequest {
  __type?: "DeletePartitionRequest";
  /**
   * <p>The ID of the Data Catalog where the partition to be deleted resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database in which the table in question
   *       resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The name of the table that contains the partition to be deleted.</p>
   */
  TableName: string | undefined;
}

export namespace DeletePartitionRequest {
  export const filterSensitiveLog = (obj: DeletePartitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePartitionRequest =>
    __isa(o, "DeletePartitionRequest");
}

export interface DeletePartitionResponse {
  __type?: "DeletePartitionResponse";
}

export namespace DeletePartitionResponse {
  export const filterSensitiveLog = (obj: DeletePartitionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePartitionResponse =>
    __isa(o, "DeletePartitionResponse");
}

export interface DeleteResourcePolicyRequest {
  __type?: "DeleteResourcePolicyRequest";
  /**
   * <p>The hash value returned when this policy was set.</p>
   */
  PolicyHashCondition?: string;
}

export namespace DeleteResourcePolicyRequest {
  export const filterSensitiveLog = (
    obj: DeleteResourcePolicyRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourcePolicyRequest =>
    __isa(o, "DeleteResourcePolicyRequest");
}

export interface DeleteResourcePolicyResponse {
  __type?: "DeleteResourcePolicyResponse";
}

export namespace DeleteResourcePolicyResponse {
  export const filterSensitiveLog = (
    obj: DeleteResourcePolicyResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteResourcePolicyResponse =>
    __isa(o, "DeleteResourcePolicyResponse");
}

export interface DeleteSecurityConfigurationRequest {
  __type?: "DeleteSecurityConfigurationRequest";
  /**
   * <p>The name of the security configuration to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationRequest {
  export const filterSensitiveLog = (
    obj: DeleteSecurityConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecurityConfigurationRequest =>
    __isa(o, "DeleteSecurityConfigurationRequest");
}

export interface DeleteSecurityConfigurationResponse {
  __type?: "DeleteSecurityConfigurationResponse";
}

export namespace DeleteSecurityConfigurationResponse {
  export const filterSensitiveLog = (
    obj: DeleteSecurityConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteSecurityConfigurationResponse =>
    __isa(o, "DeleteSecurityConfigurationResponse");
}

export interface DeleteTableRequest {
  __type?: "DeleteTableRequest";
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
   * <p>The name of the table to be deleted. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  Name: string | undefined;
}

export namespace DeleteTableRequest {
  export const filterSensitiveLog = (obj: DeleteTableRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableRequest =>
    __isa(o, "DeleteTableRequest");
}

export interface DeleteTableResponse {
  __type?: "DeleteTableResponse";
}

export namespace DeleteTableResponse {
  export const filterSensitiveLog = (obj: DeleteTableResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableResponse =>
    __isa(o, "DeleteTableResponse");
}

export interface DeleteTableVersionRequest {
  __type?: "DeleteTableVersionRequest";
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
  export const filterSensitiveLog = (obj: DeleteTableVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableVersionRequest =>
    __isa(o, "DeleteTableVersionRequest");
}

export interface DeleteTableVersionResponse {
  __type?: "DeleteTableVersionResponse";
}

export namespace DeleteTableVersionResponse {
  export const filterSensitiveLog = (obj: DeleteTableVersionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTableVersionResponse =>
    __isa(o, "DeleteTableVersionResponse");
}

export interface DeleteTriggerRequest {
  __type?: "DeleteTriggerRequest";
  /**
   * <p>The name of the trigger to delete.</p>
   */
  Name: string | undefined;
}

export namespace DeleteTriggerRequest {
  export const filterSensitiveLog = (obj: DeleteTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTriggerRequest =>
    __isa(o, "DeleteTriggerRequest");
}

export interface DeleteTriggerResponse {
  __type?: "DeleteTriggerResponse";
  /**
   * <p>The name of the trigger that was deleted.</p>
   */
  Name?: string;
}

export namespace DeleteTriggerResponse {
  export const filterSensitiveLog = (obj: DeleteTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTriggerResponse =>
    __isa(o, "DeleteTriggerResponse");
}

export interface DeleteUserDefinedFunctionRequest {
  __type?: "DeleteUserDefinedFunctionRequest";
  /**
   * <p>The ID of the Data Catalog where the function to be deleted is
   *       located. If none is supplied, the AWS account ID is used by default.</p>
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
  export const filterSensitiveLog = (
    obj: DeleteUserDefinedFunctionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserDefinedFunctionRequest =>
    __isa(o, "DeleteUserDefinedFunctionRequest");
}

export interface DeleteUserDefinedFunctionResponse {
  __type?: "DeleteUserDefinedFunctionResponse";
}

export namespace DeleteUserDefinedFunctionResponse {
  export const filterSensitiveLog = (
    obj: DeleteUserDefinedFunctionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteUserDefinedFunctionResponse =>
    __isa(o, "DeleteUserDefinedFunctionResponse");
}

export interface DeleteWorkflowRequest {
  __type?: "DeleteWorkflowRequest";
  /**
   * <p>Name of the workflow to be deleted.</p>
   */
  Name: string | undefined;
}

export namespace DeleteWorkflowRequest {
  export const filterSensitiveLog = (obj: DeleteWorkflowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkflowRequest =>
    __isa(o, "DeleteWorkflowRequest");
}

export interface DeleteWorkflowResponse {
  __type?: "DeleteWorkflowResponse";
  /**
   * <p>Name of the workflow specified in input.</p>
   */
  Name?: string;
}

export namespace DeleteWorkflowResponse {
  export const filterSensitiveLog = (obj: DeleteWorkflowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteWorkflowResponse =>
    __isa(o, "DeleteWorkflowResponse");
}

/**
 * <p>A development endpoint where a developer can remotely debug extract, transform, and load
 *       (ETL) scripts.</p>
 */
export interface DevEndpoint {
  __type?: "DevEndpoint";
  /**
   * <p>A map of arguments used to configure the <code>DevEndpoint</code>.</p>
   *          <p>Valid arguments are:</p>
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
  Arguments?: { [key: string]: string };

  /**
   * <p>The AWS Availability Zone where this <code>DevEndpoint</code> is located.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The point in time at which this DevEndpoint was created.</p>
   */
  CreatedTimestamp?: Date;

  /**
   * <p>The name of the <code>DevEndpoint</code>.</p>
   */
  EndpointName?: string;

  /**
   * <p>The path to one or more Java <code>.jar</code> files in an S3 bucket that should be loaded
   *       in your <code>DevEndpoint</code>.</p>
   *          <note>
   *             <p>You can only use pure Java/Scala libraries with a <code>DevEndpoint</code>.</p>
   *          </note>
   */
  ExtraJarsS3Path?: string;

  /**
   * <p>The paths to one or more Python libraries in an Amazon S3 bucket that should be loaded in
   *       your <code>DevEndpoint</code>. Multiple values must be complete paths separated by a
   *       comma.</p>
   *
   *          <note>
   *             <p>You can only use pure Python libraries with a <code>DevEndpoint</code>. Libraries that rely on
   *         C extensions, such as the <a href="http://pandas.pydata.org/">pandas</a> Python data
   *         analysis library, are not currently supported.</p>
   *          </note>
   */
  ExtraPythonLibsS3Path?: string;

  /**
   * <p>The reason for a current failure in this <code>DevEndpoint</code>.</p>
   */
  FailureReason?: string;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for running your ETL scripts on development endpoints. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Development endpoints that are created without specifying a Glue version default to Glue 0.9.</p>
   *
   * 	        <p>You can specify a version of Python support for development endpoints by using the <code>Arguments</code> parameter in the <code>CreateDevEndpoint</code> or <code>UpdateDevEndpoint</code> APIs. If no arguments are provided, the version defaults to Python 2.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The point in time at which this <code>DevEndpoint</code> was last modified.</p>
   */
  LastModifiedTimestamp?: Date;

  /**
   * <p>The status of the last update.</p>
   */
  LastUpdateStatus?: string;

  /**
   * <p>The number of AWS Glue Data Processing Units (DPUs) allocated to this
   *         <code>DevEndpoint</code>.</p>
   */
  NumberOfNodes?: number;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated to the development endpoint.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A private IP address to access the <code>DevEndpoint</code> within a VPC if the
   *         <code>DevEndpoint</code> is created within one. The <code>PrivateAddress</code> field is
   *       present only when you create the <code>DevEndpoint</code> within your VPC.</p>
   */
  PrivateAddress?: string;

  /**
   * <p>The public IP address used by this <code>DevEndpoint</code>. The
   *         <code>PublicAddress</code> field is present only when you create a non-virtual private cloud
   *       (VPC) <code>DevEndpoint</code>.</p>
   */
  PublicAddress?: string;

  /**
   * <p>The public key to be used by this <code>DevEndpoint</code> for authentication. This
   *       attribute is provided for backward compatibility because the recommended attribute to use is
   *       public keys.</p>
   */
  PublicKey?: string;

  /**
   * <p>A list of public keys to be used by the <code>DevEndpoints</code> for authentication.
   *       Using this attribute is preferred over a single public key because the public keys allow you
   *       to have a different private key per client.</p>
   *          <note>
   *             <p>If you previously created an endpoint with a public key, you must remove that key to be
   *         able to set a list of public keys. Call the <code>UpdateDevEndpoint</code> API operation
   *         with the public key content in the <code>deletePublicKeys</code> attribute, and the list of
   *         new keys in the <code>addPublicKeys</code> attribute.</p>
   *          </note>
   */
  PublicKeys?: string[];

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role used in this
   *       <code>DevEndpoint</code>.</p>
   */
  RoleArn?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *         <code>DevEndpoint</code>.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>A list of security group identifiers used in this <code>DevEndpoint</code>.</p>
   */
  SecurityGroupIds?: string[];

  /**
   * <p>The current status of this <code>DevEndpoint</code>.</p>
   */
  Status?: string;

  /**
   * <p>The subnet ID for this <code>DevEndpoint</code>.</p>
   */
  SubnetId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC) used by this <code>DevEndpoint</code>.</p>
   */
  VpcId?: string;

  /**
   * <p>The type of predefined worker that is allocated to the development endpoint. Accepts a value of Standard, G.1X, or G.2X.</p>
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
   *
   * 	        <p>Known issue: when a development endpoint is created with the <code>G.2X</code>
   *             <code>WorkerType</code> configuration, the Spark drivers for the development endpoint will run on 4 vCPU, 16 GB of memory, and a 64 GB disk. </p>
   */
  WorkerType?: WorkerType | string;

  /**
   * <p>The YARN endpoint address used by this <code>DevEndpoint</code>.</p>
   */
  YarnEndpointAddress?: string;

  /**
   * <p>The Apache Zeppelin port for the remote Apache Spark interpreter.</p>
   */
  ZeppelinRemoteSparkInterpreterPort?: number;
}

export namespace DevEndpoint {
  export const filterSensitiveLog = (obj: DevEndpoint): any => ({
    ...obj
  });
  export const isa = (o: any): o is DevEndpoint => __isa(o, "DevEndpoint");
}

/**
 * <p>Custom libraries to be loaded into a development endpoint.</p>
 */
export interface DevEndpointCustomLibraries {
  __type?: "DevEndpointCustomLibraries";
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
    ...obj
  });
  export const isa = (o: any): o is DevEndpointCustomLibraries =>
    __isa(o, "DevEndpointCustomLibraries");
}

/**
 * <p>Specifies an Amazon DynamoDB table to crawl.</p>
 */
export interface DynamoDBTarget {
  __type?: "DynamoDBTarget";
  /**
   * <p>The name of the DynamoDB table to crawl.</p>
   */
  Path?: string;
}

export namespace DynamoDBTarget {
  export const filterSensitiveLog = (obj: DynamoDBTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is DynamoDBTarget =>
    __isa(o, "DynamoDBTarget");
}

/**
 * <p>An edge represents a directed connection between two AWS Glue components which are part of the workflow the
 *       edge belongs to.</p>
 */
export interface Edge {
  __type?: "Edge";
  /**
   * <p>The unique of the node within the workflow where the edge ends.</p>
   */
  DestinationId?: string;

  /**
   * <p>The unique of the node within the workflow where the edge starts.</p>
   */
  SourceId?: string;
}

export namespace Edge {
  export const filterSensitiveLog = (obj: Edge): any => ({
    ...obj
  });
  export const isa = (o: any): o is Edge => __isa(o, "Edge");
}

/**
 * <p>Specifies the encryption-at-rest configuration for the Data Catalog.</p>
 */
export interface EncryptionAtRest {
  __type?: "EncryptionAtRest";
  /**
   * <p>The encryption-at-rest mode for encrypting Data Catalog data.</p>
   */
  CatalogEncryptionMode: CatalogEncryptionMode | string | undefined;

  /**
   * <p>The ID of the AWS KMS key to use for encryption at rest.</p>
   */
  SseAwsKmsKeyId?: string;
}

export namespace EncryptionAtRest {
  export const filterSensitiveLog = (obj: EncryptionAtRest): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionAtRest =>
    __isa(o, "EncryptionAtRest");
}

/**
 * <p>Specifies an encryption configuration.</p>
 */
export interface EncryptionConfiguration {
  __type?: "EncryptionConfiguration";
  /**
   * <p>The encryption configuration for Amazon CloudWatch.</p>
   */
  CloudWatchEncryption?: CloudWatchEncryption;

  /**
   * <p>The encryption configuration for job bookmarks.</p>
   */
  JobBookmarksEncryption?: JobBookmarksEncryption;

  /**
   * <p>The encryption configuration for Amazon Simple Storage Service (Amazon S3) data.</p>
   */
  S3Encryption?: S3Encryption[];
}

export namespace EncryptionConfiguration {
  export const filterSensitiveLog = (obj: EncryptionConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is EncryptionConfiguration =>
    __isa(o, "EncryptionConfiguration");
}

/**
 * <p>A specified entity does not exist</p>
 */
export interface EntityNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "EntityNotFoundException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace EntityNotFoundException {
  export const filterSensitiveLog = (obj: EntityNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is EntityNotFoundException =>
    __isa(o, "EntityNotFoundException");
}

/**
 * <p>Contains details about an error.</p>
 */
export interface ErrorDetail {
  __type?: "ErrorDetail";
  /**
   * <p>The code associated with this error.</p>
   */
  ErrorCode?: string;

  /**
   * <p>A message describing the error.</p>
   */
  ErrorMessage?: string;
}

export namespace ErrorDetail {
  export const filterSensitiveLog = (obj: ErrorDetail): any => ({
    ...obj
  });
  export const isa = (o: any): o is ErrorDetail => __isa(o, "ErrorDetail");
}

/**
 * <p>Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
 */
export interface EvaluationMetrics {
  __type?: "EvaluationMetrics";
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
    ...obj
  });
  export const isa = (o: any): o is EvaluationMetrics =>
    __isa(o, "EvaluationMetrics");
}

/**
 * <p>An execution property of a job.</p>
 */
export interface ExecutionProperty {
  __type?: "ExecutionProperty";
  /**
   * <p>The maximum number of concurrent runs allowed for the job.
   *       The default is 1. An error is returned when this threshold is reached.
   *       The maximum value you can specify is controlled by a service limit.</p>
   */
  MaxConcurrentRuns?: number;
}

export namespace ExecutionProperty {
  export const filterSensitiveLog = (obj: ExecutionProperty): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecutionProperty =>
    __isa(o, "ExecutionProperty");
}

export enum ExistCondition {
  MUST_EXIST = "MUST_EXIST",
  NONE = "NONE",
  NOT_EXIST = "NOT_EXIST"
}

/**
 * <p>Specifies configuration properties for an exporting labels task run.</p>
 */
export interface ExportLabelsTaskRunProperties {
  __type?: "ExportLabelsTaskRunProperties";
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will export the
   *       labels.</p>
   */
  OutputS3Path?: string;
}

export namespace ExportLabelsTaskRunProperties {
  export const filterSensitiveLog = (
    obj: ExportLabelsTaskRunProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExportLabelsTaskRunProperties =>
    __isa(o, "ExportLabelsTaskRunProperties");
}

/**
 * <p>The evaluation metrics for the find matches algorithm. The quality of your machine
 *       learning transform is measured by getting your transform to predict some matches and comparing
 *       the results to known matches from the same dataset. The quality metrics are based on a subset
 *       of your data, so they are not precise.</p>
 */
export interface FindMatchesMetrics {
  __type?: "FindMatchesMetrics";
  /**
   * <p>The area under the precision/recall curve (AUPRC) is a single number measuring the overall
   *       quality of the transform, that is independent of the choice made for precision vs. recall.
   *       Higher values indicate that you have a more attractive precision vs. recall tradeoff.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Precision_and_recall">Precision and recall</a> in Wikipedia.</p>
   */
  AreaUnderPRCurve?: number;

  /**
   * <p>The confusion matrix shows you what your transform is predicting accurately and what types of errors it is making.</p>
   * 	        <p>For more information, see <a href="https://en.wikipedia.org/wiki/Confusion_matrix">Confusion matrix</a> in Wikipedia.</p>
   */
  ConfusionMatrix?: ConfusionMatrix;

  /**
   * <p>The maximum F1 metric indicates the transform's accuracy between 0 and 1, where 1 is the best accuracy.</p>
   *          <p>For more information, see <a href="https://en.wikipedia.org/wiki/F1_score">F1 score</a> in Wikipedia.</p>
   */
  F1?: number;

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
}

export namespace FindMatchesMetrics {
  export const filterSensitiveLog = (obj: FindMatchesMetrics): any => ({
    ...obj
  });
  export const isa = (o: any): o is FindMatchesMetrics =>
    __isa(o, "FindMatchesMetrics");
}

/**
 * <p>The parameters to configure the find matches transform.</p>
 */
export interface FindMatchesParameters {
  __type?: "FindMatchesParameters";
  /**
   * <p>The value that is selected when tuning your transform for a balance between accuracy and
   *       cost. A value of 0.5 means that the system balances accuracy and cost concerns. A value of 1.0
   *       means a bias purely for accuracy, which typically results in a higher cost, sometimes
   *       substantially higher. A value of 0.0 means a bias purely for cost, which results in a less
   *       accurate <code>FindMatches</code> transform, sometimes with unacceptable accuracy.</p>
   *
   * 	        <p>Accuracy measures how well the transform finds true positives and true negatives. Increasing accuracy requires more machine resources and cost. But it also results in increased recall. </p>
   *
   * 	        <p>Cost measures how many compute resources, and thus money, are consumed to run the
   *       transform.</p>
   */
  AccuracyCostTradeoff?: number;

  /**
   * <p>The value to switch on or off to force the output to match the provided labels from users. If the value is <code>True</code>, the <code>find matches</code> transform forces the output to match the provided labels. The results override the normal conflation results. If the value is <code>False</code>, the <code>find matches</code> transform does not ensure all the labels provided are respected, and the results rely on the trained model.</p>
   *          <p>Note that setting this value to true may increase the conflation execution time.</p>
   */
  EnforceProvidedLabels?: boolean;

  /**
   * <p>The value selected when tuning your transform for a balance between precision and recall.
   *       A value of 0.5 means no preference; a value of 1.0 means a bias purely for precision, and a
   *       value of 0.0 means a bias for recall. Because this is a tradeoff, choosing values close to 1.0
   *       means very low recall, and choosing values close to 0.0 results in very low precision.</p>
   *
   * 	        <p>The precision metric indicates how often your model is correct when it predicts a match. </p>
   *
   * 	        <p>The recall metric indicates that for an actual match, how often your model predicts the
   *       match.</p>
   */
  PrecisionRecallTradeoff?: number;

  /**
   * <p>The name of a column that uniquely identifies rows in the source table. Used to help identify matching records.</p>
   */
  PrimaryKeyColumnName?: string;
}

export namespace FindMatchesParameters {
  export const filterSensitiveLog = (obj: FindMatchesParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is FindMatchesParameters =>
    __isa(o, "FindMatchesParameters");
}

/**
 * <p>Specifies configuration properties for a Find Matches task run.</p>
 */
export interface FindMatchesTaskRunProperties {
  __type?: "FindMatchesTaskRunProperties";
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
  export const filterSensitiveLog = (
    obj: FindMatchesTaskRunProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FindMatchesTaskRunProperties =>
    __isa(o, "FindMatchesTaskRunProperties");
}

export interface GetCatalogImportStatusRequest {
  __type?: "GetCatalogImportStatusRequest";
  /**
   * <p>The ID of the catalog to migrate. Currently, this should be the AWS account ID.</p>
   */
  CatalogId?: string;
}

export namespace GetCatalogImportStatusRequest {
  export const filterSensitiveLog = (
    obj: GetCatalogImportStatusRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCatalogImportStatusRequest =>
    __isa(o, "GetCatalogImportStatusRequest");
}

export interface GetCatalogImportStatusResponse {
  __type?: "GetCatalogImportStatusResponse";
  /**
   * <p>The status of the specified catalog migration.</p>
   */
  ImportStatus?: CatalogImportStatus;
}

export namespace GetCatalogImportStatusResponse {
  export const filterSensitiveLog = (
    obj: GetCatalogImportStatusResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCatalogImportStatusResponse =>
    __isa(o, "GetCatalogImportStatusResponse");
}

export interface GetClassifierRequest {
  __type?: "GetClassifierRequest";
  /**
   * <p>Name of the classifier to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetClassifierRequest {
  export const filterSensitiveLog = (obj: GetClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClassifierRequest =>
    __isa(o, "GetClassifierRequest");
}

export interface GetClassifierResponse {
  __type?: "GetClassifierResponse";
  /**
   * <p>The requested classifier.</p>
   */
  Classifier?: Classifier;
}

export namespace GetClassifierResponse {
  export const filterSensitiveLog = (obj: GetClassifierResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClassifierResponse =>
    __isa(o, "GetClassifierResponse");
}

export interface GetClassifiersRequest {
  __type?: "GetClassifiersRequest";
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
  export const filterSensitiveLog = (obj: GetClassifiersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClassifiersRequest =>
    __isa(o, "GetClassifiersRequest");
}

export interface GetClassifiersResponse {
  __type?: "GetClassifiersResponse";
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
  export const filterSensitiveLog = (obj: GetClassifiersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetClassifiersResponse =>
    __isa(o, "GetClassifiersResponse");
}

export interface GetConnectionRequest {
  __type?: "GetConnectionRequest";
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * <p>The name of the connection definition to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetConnectionRequest {
  export const filterSensitiveLog = (obj: GetConnectionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionRequest =>
    __isa(o, "GetConnectionRequest");
}

export interface GetConnectionResponse {
  __type?: "GetConnectionResponse";
  /**
   * <p>The requested connection definition.</p>
   */
  Connection?: Connection;
}

export namespace GetConnectionResponse {
  export const filterSensitiveLog = (obj: GetConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionResponse =>
    __isa(o, "GetConnectionResponse");
}

/**
 * <p>Filters the connection definitions that are returned by the <code>GetConnections</code>
 *       API operation.</p>
 */
export interface GetConnectionsFilter {
  __type?: "GetConnectionsFilter";
  /**
   * <p>The type of connections to return. Currently, only JDBC is supported;
   *       SFTP is not supported.</p>
   */
  ConnectionType?: ConnectionType | string;

  /**
   * <p>A criteria string that must match the criteria recorded in the
   *        connection definition for that connection definition to be returned.</p>
   */
  MatchCriteria?: string[];
}

export namespace GetConnectionsFilter {
  export const filterSensitiveLog = (obj: GetConnectionsFilter): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionsFilter =>
    __isa(o, "GetConnectionsFilter");
}

export interface GetConnectionsRequest {
  __type?: "GetConnectionsRequest";
  /**
   * <p>The ID of the Data Catalog in which the connections reside. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A filter that controls which connections are returned.</p>
   */
  Filter?: GetConnectionsFilter;

  /**
   * <p>Allows you to retrieve the connection metadata without returning the password. For
   *       instance, the AWS Glue console uses this flag to retrieve the connection, and does not display
   *       the password. Set this parameter when the caller might not have permission to use the AWS KMS
   *       key to decrypt the password, but it does have permission to access the rest of the connection
   *       properties.</p>
   */
  HidePassword?: boolean;

  /**
   * <p>The maximum number of connections to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetConnectionsRequest {
  export const filterSensitiveLog = (obj: GetConnectionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionsRequest =>
    __isa(o, "GetConnectionsRequest");
}

export interface GetConnectionsResponse {
  __type?: "GetConnectionsResponse";
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
  export const filterSensitiveLog = (obj: GetConnectionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetConnectionsResponse =>
    __isa(o, "GetConnectionsResponse");
}

export interface GetCrawlerMetricsRequest {
  __type?: "GetCrawlerMetricsRequest";
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
  export const filterSensitiveLog = (obj: GetCrawlerMetricsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlerMetricsRequest =>
    __isa(o, "GetCrawlerMetricsRequest");
}

export interface GetCrawlerMetricsResponse {
  __type?: "GetCrawlerMetricsResponse";
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
  export const filterSensitiveLog = (obj: GetCrawlerMetricsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlerMetricsResponse =>
    __isa(o, "GetCrawlerMetricsResponse");
}

export interface GetCrawlerRequest {
  __type?: "GetCrawlerRequest";
  /**
   * <p>The name of the crawler to retrieve metadata for.</p>
   */
  Name: string | undefined;
}

export namespace GetCrawlerRequest {
  export const filterSensitiveLog = (obj: GetCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlerRequest =>
    __isa(o, "GetCrawlerRequest");
}

export interface GetCrawlerResponse {
  __type?: "GetCrawlerResponse";
  /**
   * <p>The metadata for the specified crawler.</p>
   */
  Crawler?: Crawler;
}

export namespace GetCrawlerResponse {
  export const filterSensitiveLog = (obj: GetCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlerResponse =>
    __isa(o, "GetCrawlerResponse");
}

export interface GetCrawlersRequest {
  __type?: "GetCrawlersRequest";
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
  export const filterSensitiveLog = (obj: GetCrawlersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlersRequest =>
    __isa(o, "GetCrawlersRequest");
}

export interface GetCrawlersResponse {
  __type?: "GetCrawlersResponse";
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
  export const filterSensitiveLog = (obj: GetCrawlersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetCrawlersResponse =>
    __isa(o, "GetCrawlersResponse");
}

export interface GetDatabaseRequest {
  __type?: "GetDatabaseRequest";
  /**
   * <p>The ID of the Data Catalog in which the database resides. If none is provided, the AWS
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
  export const filterSensitiveLog = (obj: GetDatabaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDatabaseRequest =>
    __isa(o, "GetDatabaseRequest");
}

export interface GetDatabaseResponse {
  __type?: "GetDatabaseResponse";
  /**
   * <p>The definition of the specified database in the Data Catalog.</p>
   */
  Database?: Database;
}

export namespace GetDatabaseResponse {
  export const filterSensitiveLog = (obj: GetDatabaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDatabaseResponse =>
    __isa(o, "GetDatabaseResponse");
}

export interface GetDatabasesRequest {
  __type?: "GetDatabasesRequest";
  /**
   * <p>The ID of the Data Catalog from which to retrieve <code>Databases</code>. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The maximum number of databases to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetDatabasesRequest {
  export const filterSensitiveLog = (obj: GetDatabasesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDatabasesRequest =>
    __isa(o, "GetDatabasesRequest");
}

export interface GetDatabasesResponse {
  __type?: "GetDatabasesResponse";
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
  export const filterSensitiveLog = (obj: GetDatabasesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDatabasesResponse =>
    __isa(o, "GetDatabasesResponse");
}

export interface GetDataCatalogEncryptionSettingsRequest {
  __type?: "GetDataCatalogEncryptionSettingsRequest";
  /**
   * <p>The ID of the Data Catalog to retrieve the security configuration for. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;
}

export namespace GetDataCatalogEncryptionSettingsRequest {
  export const filterSensitiveLog = (
    obj: GetDataCatalogEncryptionSettingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataCatalogEncryptionSettingsRequest =>
    __isa(o, "GetDataCatalogEncryptionSettingsRequest");
}

export interface GetDataCatalogEncryptionSettingsResponse {
  __type?: "GetDataCatalogEncryptionSettingsResponse";
  /**
   * <p>The requested security configuration.</p>
   */
  DataCatalogEncryptionSettings?: DataCatalogEncryptionSettings;
}

export namespace GetDataCatalogEncryptionSettingsResponse {
  export const filterSensitiveLog = (
    obj: GetDataCatalogEncryptionSettingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataCatalogEncryptionSettingsResponse =>
    __isa(o, "GetDataCatalogEncryptionSettingsResponse");
}

export interface GetDataflowGraphRequest {
  __type?: "GetDataflowGraphRequest";
  /**
   * <p>The Python script to transform.</p>
   */
  PythonScript?: string;
}

export namespace GetDataflowGraphRequest {
  export const filterSensitiveLog = (obj: GetDataflowGraphRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataflowGraphRequest =>
    __isa(o, "GetDataflowGraphRequest");
}

export interface GetDataflowGraphResponse {
  __type?: "GetDataflowGraphResponse";
  /**
   * <p>A list of the edges in the resulting DAG.</p>
   */
  DagEdges?: CodeGenEdge[];

  /**
   * <p>A list of the nodes in the resulting DAG.</p>
   */
  DagNodes?: CodeGenNode[];
}

export namespace GetDataflowGraphResponse {
  export const filterSensitiveLog = (obj: GetDataflowGraphResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDataflowGraphResponse =>
    __isa(o, "GetDataflowGraphResponse");
}

export interface GetDevEndpointRequest {
  __type?: "GetDevEndpointRequest";
  /**
   * <p>Name of the <code>DevEndpoint</code> to retrieve information for.</p>
   */
  EndpointName: string | undefined;
}

export namespace GetDevEndpointRequest {
  export const filterSensitiveLog = (obj: GetDevEndpointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDevEndpointRequest =>
    __isa(o, "GetDevEndpointRequest");
}

export interface GetDevEndpointResponse {
  __type?: "GetDevEndpointResponse";
  /**
   * <p>A <code>DevEndpoint</code> definition.</p>
   */
  DevEndpoint?: DevEndpoint;
}

export namespace GetDevEndpointResponse {
  export const filterSensitiveLog = (obj: GetDevEndpointResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDevEndpointResponse =>
    __isa(o, "GetDevEndpointResponse");
}

export interface GetDevEndpointsRequest {
  __type?: "GetDevEndpointsRequest";
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
  export const filterSensitiveLog = (obj: GetDevEndpointsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDevEndpointsRequest =>
    __isa(o, "GetDevEndpointsRequest");
}

export interface GetDevEndpointsResponse {
  __type?: "GetDevEndpointsResponse";
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
  export const filterSensitiveLog = (obj: GetDevEndpointsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetDevEndpointsResponse =>
    __isa(o, "GetDevEndpointsResponse");
}

export interface GetJobBookmarkRequest {
  __type?: "GetJobBookmarkRequest";
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
  export const filterSensitiveLog = (obj: GetJobBookmarkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobBookmarkRequest =>
    __isa(o, "GetJobBookmarkRequest");
}

export interface GetJobBookmarkResponse {
  __type?: "GetJobBookmarkResponse";
  /**
   * <p>A structure that defines a point that a job can resume processing.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace GetJobBookmarkResponse {
  export const filterSensitiveLog = (obj: GetJobBookmarkResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobBookmarkResponse =>
    __isa(o, "GetJobBookmarkResponse");
}

export interface GetJobRequest {
  __type?: "GetJobRequest";
  /**
   * <p>The name of the job definition to retrieve.</p>
   */
  JobName: string | undefined;
}

export namespace GetJobRequest {
  export const filterSensitiveLog = (obj: GetJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRequest => __isa(o, "GetJobRequest");
}

export interface GetJobResponse {
  __type?: "GetJobResponse";
  /**
   * <p>The requested job definition.</p>
   */
  Job?: Job;
}

export namespace GetJobResponse {
  export const filterSensitiveLog = (obj: GetJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobResponse =>
    __isa(o, "GetJobResponse");
}

export interface GetJobRunRequest {
  __type?: "GetJobRunRequest";
  /**
   * <p>Name of the job definition being run.</p>
   */
  JobName: string | undefined;

  /**
   * <p>True if a list of predecessor runs should be returned.</p>
   */
  PredecessorsIncluded?: boolean;

  /**
   * <p>The ID of the job run.</p>
   */
  RunId: string | undefined;
}

export namespace GetJobRunRequest {
  export const filterSensitiveLog = (obj: GetJobRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRunRequest =>
    __isa(o, "GetJobRunRequest");
}

export interface GetJobRunResponse {
  __type?: "GetJobRunResponse";
  /**
   * <p>The requested job-run metadata.</p>
   */
  JobRun?: JobRun;
}

export namespace GetJobRunResponse {
  export const filterSensitiveLog = (obj: GetJobRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRunResponse =>
    __isa(o, "GetJobRunResponse");
}

export interface GetJobRunsRequest {
  __type?: "GetJobRunsRequest";
  /**
   * <p>The name of the job definition for which to retrieve all job runs.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetJobRunsRequest {
  export const filterSensitiveLog = (obj: GetJobRunsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRunsRequest =>
    __isa(o, "GetJobRunsRequest");
}

export interface GetJobRunsResponse {
  __type?: "GetJobRunsResponse";
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
  export const filterSensitiveLog = (obj: GetJobRunsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobRunsResponse =>
    __isa(o, "GetJobRunsResponse");
}

export interface GetJobsRequest {
  __type?: "GetJobsRequest";
  /**
   * <p>The maximum size of the response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetJobsRequest {
  export const filterSensitiveLog = (obj: GetJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobsRequest =>
    __isa(o, "GetJobsRequest");
}

export interface GetJobsResponse {
  __type?: "GetJobsResponse";
  /**
   * <p>A list of job definitions.</p>
   */
  Jobs?: Job[];

  /**
   * <p>A continuation token, if not all job definitions have yet been returned.</p>
   */
  NextToken?: string;
}

export namespace GetJobsResponse {
  export const filterSensitiveLog = (obj: GetJobsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetJobsResponse =>
    __isa(o, "GetJobsResponse");
}

export interface GetMappingRequest {
  __type?: "GetMappingRequest";
  /**
   * <p>Parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * <p>A list of target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>Specifies the source table.</p>
   */
  Source: CatalogEntry | undefined;
}

export namespace GetMappingRequest {
  export const filterSensitiveLog = (obj: GetMappingRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMappingRequest =>
    __isa(o, "GetMappingRequest");
}

export interface GetMappingResponse {
  __type?: "GetMappingResponse";
  /**
   * <p>A list of mappings to the specified targets.</p>
   */
  Mapping: MappingEntry[] | undefined;
}

export namespace GetMappingResponse {
  export const filterSensitiveLog = (obj: GetMappingResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMappingResponse =>
    __isa(o, "GetMappingResponse");
}

export interface GetMLTaskRunRequest {
  __type?: "GetMLTaskRunRequest";
  /**
   * <p>The unique identifier of the task run.</p>
   */
  TaskRunId: string | undefined;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTaskRunRequest {
  export const filterSensitiveLog = (obj: GetMLTaskRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTaskRunRequest =>
    __isa(o, "GetMLTaskRunRequest");
}

export interface GetMLTaskRunResponse {
  __type?: "GetMLTaskRunResponse";
  /**
   * <p>The date and time when this task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The error strings that are associated with the task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The date and time when this task run was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The names of the log groups that are associated with the task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The list of properties that are associated with the task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The date and time when this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The status for this task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The unique run identifier associated with this run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The unique identifier of the task run.</p>
   */
  TransformId?: string;
}

export namespace GetMLTaskRunResponse {
  export const filterSensitiveLog = (obj: GetMLTaskRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTaskRunResponse =>
    __isa(o, "GetMLTaskRunResponse");
}

export interface GetMLTaskRunsRequest {
  __type?: "GetMLTaskRunsRequest";
  /**
   * <p>The filter criteria, in the <code>TaskRunFilterCriteria</code> structure, for the task run.</p>
   */
  Filter?: TaskRunFilterCriteria;

  /**
   * <p>The maximum number of results to return. </p>
   */
  MaxResults?: number;

  /**
   * <p>A token for pagination of the results. The default is empty.</p>
   */
  NextToken?: string;

  /**
   * <p>The sorting criteria, in the <code>TaskRunSortCriteria</code> structure, for the task run.</p>
   */
  Sort?: TaskRunSortCriteria;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTaskRunsRequest {
  export const filterSensitiveLog = (obj: GetMLTaskRunsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTaskRunsRequest =>
    __isa(o, "GetMLTaskRunsRequest");
}

export interface GetMLTaskRunsResponse {
  __type?: "GetMLTaskRunsResponse";
  /**
   * <p>A pagination token, if more results are available.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of task runs that are associated with the transform.</p>
   */
  TaskRuns?: TaskRun[];
}

export namespace GetMLTaskRunsResponse {
  export const filterSensitiveLog = (obj: GetMLTaskRunsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTaskRunsResponse =>
    __isa(o, "GetMLTaskRunsResponse");
}

export interface GetMLTransformRequest {
  __type?: "GetMLTransformRequest";
  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId: string | undefined;
}

export namespace GetMLTransformRequest {
  export const filterSensitiveLog = (obj: GetMLTransformRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTransformRequest =>
    __isa(o, "GetMLTransformRequest");
}

export interface GetMLTransformResponse {
  __type?: "GetMLTransformResponse";
  /**
   * <p>The date and time when the transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>A description of the transform.</p>
   */
  Description?: string;

  /**
   * <p>The latest evaluation metrics.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>The number of labels available for this transform.</p>
   */
  LabelCount?: number;

  /**
   * <p>The date and time when the transform was last modified.</p>
   */
  LastModifiedOn?: Date;

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
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The unique name given to the transform when it was created.</p>
   */
  Name?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The configuration parameters that are specific to the algorithm used.</p>
   */
  Parameters?: TransformParameters;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role with the required
   *       permissions.</p>
   */
  Role?: string;

  /**
   * <p>The <code>Map<Column, Type></code> object that represents the schema that this
   *       transform accepts. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The last known status of the transform (to indicate whether it can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>The unique identifier of the transform, generated at the time that the transform was
   *       created.</p>
   */
  TransformId?: string;

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
}

export namespace GetMLTransformResponse {
  export const filterSensitiveLog = (obj: GetMLTransformResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTransformResponse =>
    __isa(o, "GetMLTransformResponse");
}

export interface GetMLTransformsRequest {
  __type?: "GetMLTransformsRequest";
  /**
   * <p>The filter transformation criteria.</p>
   */
  Filter?: TransformFilterCriteria;

  /**
   * <p>The maximum number of results to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A paginated token to offset the results.</p>
   */
  NextToken?: string;

  /**
   * <p>The sorting criteria.</p>
   */
  Sort?: TransformSortCriteria;
}

export namespace GetMLTransformsRequest {
  export const filterSensitiveLog = (obj: GetMLTransformsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetMLTransformsRequest =>
    __isa(o, "GetMLTransformsRequest");
}

export interface GetMLTransformsResponse {
  __type?: "GetMLTransformsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is GetMLTransformsResponse =>
    __isa(o, "GetMLTransformsResponse");
}

export interface GetPartitionRequest {
  __type?: "GetPartitionRequest";
  /**
   * <p>The ID of the Data Catalog where the partition in question resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the partition resides.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues: string[] | undefined;

  /**
   * <p>The name of the partition's table.</p>
   */
  TableName: string | undefined;
}

export namespace GetPartitionRequest {
  export const filterSensitiveLog = (obj: GetPartitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPartitionRequest =>
    __isa(o, "GetPartitionRequest");
}

export interface GetPartitionResponse {
  __type?: "GetPartitionResponse";
  /**
   * <p>The requested information, in the form of a <code>Partition</code>
   *       object.</p>
   */
  Partition?: Partition;
}

export namespace GetPartitionResponse {
  export const filterSensitiveLog = (obj: GetPartitionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPartitionResponse =>
    __isa(o, "GetPartitionResponse");
}

export interface GetPartitionsRequest {
  __type?: "GetPartitionsRequest";
  /**
   * <p>The ID of the Data Catalog where the partitions in question reside. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

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

  /**
   * <p>The segment of the table's partitions to scan in this request.</p>
   */
  Segment?: Segment;

  /**
   * <p>The name of the partitions' table.</p>
   */
  TableName: string | undefined;
}

export namespace GetPartitionsRequest {
  export const filterSensitiveLog = (obj: GetPartitionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPartitionsRequest =>
    __isa(o, "GetPartitionsRequest");
}

export interface GetPartitionsResponse {
  __type?: "GetPartitionsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is GetPartitionsResponse =>
    __isa(o, "GetPartitionsResponse");
}

export interface GetPlanRequest {
  __type?: "GetPlanRequest";
  /**
   * <p>The programming language of the code to perform the mapping.</p>
   */
  Language?: Language | string;

  /**
   * <p>The parameters for the mapping.</p>
   */
  Location?: Location;

  /**
   * <p>The list of mappings from a source table to target tables.</p>
   */
  Mapping: MappingEntry[] | undefined;

  /**
   * <p>The target tables.</p>
   */
  Sinks?: CatalogEntry[];

  /**
   * <p>The source table.</p>
   */
  Source: CatalogEntry | undefined;
}

export namespace GetPlanRequest {
  export const filterSensitiveLog = (obj: GetPlanRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPlanRequest =>
    __isa(o, "GetPlanRequest");
}

export interface GetPlanResponse {
  __type?: "GetPlanResponse";
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
  export const filterSensitiveLog = (obj: GetPlanResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetPlanResponse =>
    __isa(o, "GetPlanResponse");
}

export interface GetResourcePolicyRequest {
  __type?: "GetResourcePolicyRequest";
}

export namespace GetResourcePolicyRequest {
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourcePolicyRequest =>
    __isa(o, "GetResourcePolicyRequest");
}

export interface GetResourcePolicyResponse {
  __type?: "GetResourcePolicyResponse";
  /**
   * <p>The date and time at which the policy was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>Contains the hash value associated with this policy.</p>
   */
  PolicyHash?: string;

  /**
   * <p>Contains the requested policy document, in JSON format.</p>
   */
  PolicyInJson?: string;

  /**
   * <p>The date and time at which the policy was last updated.</p>
   */
  UpdateTime?: Date;
}

export namespace GetResourcePolicyResponse {
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetResourcePolicyResponse =>
    __isa(o, "GetResourcePolicyResponse");
}

export interface GetSecurityConfigurationRequest {
  __type?: "GetSecurityConfigurationRequest";
  /**
   * <p>The name of the security configuration to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetSecurityConfigurationRequest {
  export const filterSensitiveLog = (
    obj: GetSecurityConfigurationRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSecurityConfigurationRequest =>
    __isa(o, "GetSecurityConfigurationRequest");
}

export interface GetSecurityConfigurationResponse {
  __type?: "GetSecurityConfigurationResponse";
  /**
   * <p>The requested security configuration.</p>
   */
  SecurityConfiguration?: SecurityConfiguration;
}

export namespace GetSecurityConfigurationResponse {
  export const filterSensitiveLog = (
    obj: GetSecurityConfigurationResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSecurityConfigurationResponse =>
    __isa(o, "GetSecurityConfigurationResponse");
}

export interface GetSecurityConfigurationsRequest {
  __type?: "GetSecurityConfigurationsRequest";
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
  export const filterSensitiveLog = (
    obj: GetSecurityConfigurationsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSecurityConfigurationsRequest =>
    __isa(o, "GetSecurityConfigurationsRequest");
}

export interface GetSecurityConfigurationsResponse {
  __type?: "GetSecurityConfigurationsResponse";
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
  export const filterSensitiveLog = (
    obj: GetSecurityConfigurationsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetSecurityConfigurationsResponse =>
    __isa(o, "GetSecurityConfigurationsResponse");
}

export interface GetTableRequest {
  __type?: "GetTableRequest";
  /**
   * <p>The ID of the Data Catalog where the table resides. If none is provided, the AWS account
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
}

export namespace GetTableRequest {
  export const filterSensitiveLog = (obj: GetTableRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableRequest =>
    __isa(o, "GetTableRequest");
}

export interface GetTableResponse {
  __type?: "GetTableResponse";
  /**
   * <p>The <code>Table</code> object that defines the specified table.</p>
   */
  Table?: Table;
}

export namespace GetTableResponse {
  export const filterSensitiveLog = (obj: GetTableResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableResponse =>
    __isa(o, "GetTableResponse");
}

export interface GetTablesRequest {
  __type?: "GetTablesRequest";
  /**
   * <p>The ID of the Data Catalog where the tables reside. If none is provided, the AWS account
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
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;
}

export namespace GetTablesRequest {
  export const filterSensitiveLog = (obj: GetTablesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTablesRequest =>
    __isa(o, "GetTablesRequest");
}

export interface GetTablesResponse {
  __type?: "GetTablesResponse";
  /**
   * <p>A continuation token, present if the current list segment is
   *       not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the requested <code>Table</code> objects.</p>
   */
  TableList?: Table[];
}

export namespace GetTablesResponse {
  export const filterSensitiveLog = (obj: GetTablesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTablesResponse =>
    __isa(o, "GetTablesResponse");
}

export interface GetTableVersionRequest {
  __type?: "GetTableVersionRequest";
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
  export const filterSensitiveLog = (obj: GetTableVersionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableVersionRequest =>
    __isa(o, "GetTableVersionRequest");
}

export interface GetTableVersionResponse {
  __type?: "GetTableVersionResponse";
  /**
   * <p>The requested table version.</p>
   */
  TableVersion?: TableVersion;
}

export namespace GetTableVersionResponse {
  export const filterSensitiveLog = (obj: GetTableVersionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableVersionResponse =>
    __isa(o, "GetTableVersionResponse");
}

export interface GetTableVersionsRequest {
  __type?: "GetTableVersionsRequest";
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

  /**
   * <p>The maximum number of table versions to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is not the first call.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the table. For Hive
   *       compatibility, this name is entirely lowercase.</p>
   */
  TableName: string | undefined;
}

export namespace GetTableVersionsRequest {
  export const filterSensitiveLog = (obj: GetTableVersionsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableVersionsRequest =>
    __isa(o, "GetTableVersionsRequest");
}

export interface GetTableVersionsResponse {
  __type?: "GetTableVersionsResponse";
  /**
   * <p>A continuation token, if the list of available versions does
   *       not include the last one.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of strings identifying available versions of the
   *       specified table.</p>
   */
  TableVersions?: TableVersion[];
}

export namespace GetTableVersionsResponse {
  export const filterSensitiveLog = (obj: GetTableVersionsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTableVersionsResponse =>
    __isa(o, "GetTableVersionsResponse");
}

export interface GetTagsRequest {
  __type?: "GetTagsRequest";
  /**
   * <p>The Amazon Resource Name (ARN) of the resource for which to retrieve tags.</p>
   */
  ResourceArn: string | undefined;
}

export namespace GetTagsRequest {
  export const filterSensitiveLog = (obj: GetTagsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTagsRequest =>
    __isa(o, "GetTagsRequest");
}

export interface GetTagsResponse {
  __type?: "GetTagsResponse";
  /**
   * <p>The requested tags.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace GetTagsResponse {
  export const filterSensitiveLog = (obj: GetTagsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTagsResponse =>
    __isa(o, "GetTagsResponse");
}

export interface GetTriggerRequest {
  __type?: "GetTriggerRequest";
  /**
   * <p>The name of the trigger to retrieve.</p>
   */
  Name: string | undefined;
}

export namespace GetTriggerRequest {
  export const filterSensitiveLog = (obj: GetTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTriggerRequest =>
    __isa(o, "GetTriggerRequest");
}

export interface GetTriggerResponse {
  __type?: "GetTriggerResponse";
  /**
   * <p>The requested trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace GetTriggerResponse {
  export const filterSensitiveLog = (obj: GetTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetTriggerResponse =>
    __isa(o, "GetTriggerResponse");
}

export interface GetTriggersRequest {
  __type?: "GetTriggersRequest";
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
    ...obj
  });
  export const isa = (o: any): o is GetTriggersRequest =>
    __isa(o, "GetTriggersRequest");
}

export interface GetTriggersResponse {
  __type?: "GetTriggersResponse";
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
    ...obj
  });
  export const isa = (o: any): o is GetTriggersResponse =>
    __isa(o, "GetTriggersResponse");
}

export interface GetUserDefinedFunctionRequest {
  __type?: "GetUserDefinedFunctionRequest";
  /**
   * <p>The ID of the Data Catalog where the function to be retrieved is located. If none is
   *       provided, the AWS account ID is used by default.</p>
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
  export const filterSensitiveLog = (
    obj: GetUserDefinedFunctionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserDefinedFunctionRequest =>
    __isa(o, "GetUserDefinedFunctionRequest");
}

export interface GetUserDefinedFunctionResponse {
  __type?: "GetUserDefinedFunctionResponse";
  /**
   * <p>The requested function definition.</p>
   */
  UserDefinedFunction?: UserDefinedFunction;
}

export namespace GetUserDefinedFunctionResponse {
  export const filterSensitiveLog = (
    obj: GetUserDefinedFunctionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserDefinedFunctionResponse =>
    __isa(o, "GetUserDefinedFunctionResponse");
}

export interface GetUserDefinedFunctionsRequest {
  __type?: "GetUserDefinedFunctionsRequest";
  /**
   * <p>The ID of the Data Catalog where the functions to be retrieved are located. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the functions are located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>The maximum number of functions to return in one response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>An optional function-name pattern string that filters the function
   *       definitions returned.</p>
   */
  Pattern: string | undefined;
}

export namespace GetUserDefinedFunctionsRequest {
  export const filterSensitiveLog = (
    obj: GetUserDefinedFunctionsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserDefinedFunctionsRequest =>
    __isa(o, "GetUserDefinedFunctionsRequest");
}

export interface GetUserDefinedFunctionsResponse {
  __type?: "GetUserDefinedFunctionsResponse";
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
  export const filterSensitiveLog = (
    obj: GetUserDefinedFunctionsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetUserDefinedFunctionsResponse =>
    __isa(o, "GetUserDefinedFunctionsResponse");
}

export interface GetWorkflowRequest {
  __type?: "GetWorkflowRequest";
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
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRequest =>
    __isa(o, "GetWorkflowRequest");
}

export interface GetWorkflowResponse {
  __type?: "GetWorkflowResponse";
  /**
   * <p>The resource metadata for the workflow.</p>
   */
  Workflow?: Workflow;
}

export namespace GetWorkflowResponse {
  export const filterSensitiveLog = (obj: GetWorkflowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowResponse =>
    __isa(o, "GetWorkflowResponse");
}

export interface GetWorkflowRunPropertiesRequest {
  __type?: "GetWorkflowRunPropertiesRequest";
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
  export const filterSensitiveLog = (
    obj: GetWorkflowRunPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunPropertiesRequest =>
    __isa(o, "GetWorkflowRunPropertiesRequest");
}

export interface GetWorkflowRunPropertiesResponse {
  __type?: "GetWorkflowRunPropertiesResponse";
  /**
   * <p>The workflow run properties which were set during the specified run.</p>
   */
  RunProperties?: { [key: string]: string };
}

export namespace GetWorkflowRunPropertiesResponse {
  export const filterSensitiveLog = (
    obj: GetWorkflowRunPropertiesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunPropertiesResponse =>
    __isa(o, "GetWorkflowRunPropertiesResponse");
}

export interface GetWorkflowRunRequest {
  __type?: "GetWorkflowRunRequest";
  /**
   * <p>Specifies whether to include the workflow graph in response or not.</p>
   */
  IncludeGraph?: boolean;

  /**
   * <p>Name of the workflow being run.</p>
   */
  Name: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   */
  RunId: string | undefined;
}

export namespace GetWorkflowRunRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunRequest =>
    __isa(o, "GetWorkflowRunRequest");
}

export interface GetWorkflowRunResponse {
  __type?: "GetWorkflowRunResponse";
  /**
   * <p>The requested workflow run metadata.</p>
   */
  Run?: WorkflowRun;
}

export namespace GetWorkflowRunResponse {
  export const filterSensitiveLog = (obj: GetWorkflowRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunResponse =>
    __isa(o, "GetWorkflowRunResponse");
}

export interface GetWorkflowRunsRequest {
  __type?: "GetWorkflowRunsRequest";
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

  /**
   * <p>The maximum size of the response.</p>
   */
  NextToken?: string;
}

export namespace GetWorkflowRunsRequest {
  export const filterSensitiveLog = (obj: GetWorkflowRunsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunsRequest =>
    __isa(o, "GetWorkflowRunsRequest");
}

export interface GetWorkflowRunsResponse {
  __type?: "GetWorkflowRunsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is GetWorkflowRunsResponse =>
    __isa(o, "GetWorkflowRunsResponse");
}

/**
 * <p>An encryption operation failed.</p>
 */
export interface GlueEncryptionException
  extends __SmithyException,
    $MetadataBearer {
  name: "GlueEncryptionException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace GlueEncryptionException {
  export const filterSensitiveLog = (obj: GlueEncryptionException): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlueEncryptionException =>
    __isa(o, "GlueEncryptionException");
}

/**
 * <p>The database and table in the AWS Glue Data Catalog that is used for input or output data.</p>
 */
export interface GlueTable {
  __type?: "GlueTable";
  /**
   * <p>A unique identifier for the AWS Glue Data Catalog.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the connection to the AWS Glue Data Catalog.</p>
   */
  ConnectionName?: string;

  /**
   * <p>A database name in the AWS Glue Data Catalog.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A table name in the AWS Glue Data Catalog.</p>
   */
  TableName: string | undefined;
}

export namespace GlueTable {
  export const filterSensitiveLog = (obj: GlueTable): any => ({
    ...obj
  });
  export const isa = (o: any): o is GlueTable => __isa(o, "GlueTable");
}

/**
 * <p>A classifier that uses <code>grok</code> patterns.</p>
 */
export interface GrokClassifier {
  __type?: "GrokClassifier";
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
   * <p>Optional custom grok patterns defined by this classifier. For more information, see custom
   *       patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom Classifiers</a>.</p>
   */
  CustomPatterns?: string;

  /**
   * <p>The grok pattern applied to a data store by this classifier. For more information, see
   *       built-in patterns in <a href="http://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html">Writing Custom
   *         Classifiers</a>.</p>
   */
  GrokPattern: string | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;
}

export namespace GrokClassifier {
  export const filterSensitiveLog = (obj: GrokClassifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is GrokClassifier =>
    __isa(o, "GrokClassifier");
}

/**
 * <p>The same unique identifier was associated with two different records.</p>
 */
export interface IdempotentParameterMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "IdempotentParameterMismatchException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace IdempotentParameterMismatchException {
  export const filterSensitiveLog = (
    obj: IdempotentParameterMismatchException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is IdempotentParameterMismatchException =>
    __isa(o, "IdempotentParameterMismatchException");
}

export interface ImportCatalogToGlueRequest {
  __type?: "ImportCatalogToGlueRequest";
  /**
   * <p>The ID of the catalog to import. Currently, this should be the AWS account ID.</p>
   */
  CatalogId?: string;
}

export namespace ImportCatalogToGlueRequest {
  export const filterSensitiveLog = (obj: ImportCatalogToGlueRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportCatalogToGlueRequest =>
    __isa(o, "ImportCatalogToGlueRequest");
}

export interface ImportCatalogToGlueResponse {
  __type?: "ImportCatalogToGlueResponse";
}

export namespace ImportCatalogToGlueResponse {
  export const filterSensitiveLog = (
    obj: ImportCatalogToGlueResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportCatalogToGlueResponse =>
    __isa(o, "ImportCatalogToGlueResponse");
}

/**
 * <p>Specifies configuration properties for an importing labels task run.</p>
 */
export interface ImportLabelsTaskRunProperties {
  __type?: "ImportLabelsTaskRunProperties";
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
  export const filterSensitiveLog = (
    obj: ImportLabelsTaskRunProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportLabelsTaskRunProperties =>
    __isa(o, "ImportLabelsTaskRunProperties");
}

/**
 * <p>An internal service error occurred.</p>
 */
export interface InternalServiceException
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServiceException";
  $fault: "server";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServiceException =>
    __isa(o, "InternalServiceException");
}

/**
 * <p>The input provided was not valid.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

/**
 * <p>Specifies a JDBC data store to crawl.</p>
 */
export interface JdbcTarget {
  __type?: "JdbcTarget";
  /**
   * <p>The name of the connection to use to connect to the JDBC target.</p>
   */
  ConnectionName?: string;

  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];

  /**
   * <p>The path of the JDBC target.</p>
   */
  Path?: string;
}

export namespace JdbcTarget {
  export const filterSensitiveLog = (obj: JdbcTarget): any => ({
    ...obj
  });
  export const isa = (o: any): o is JdbcTarget => __isa(o, "JdbcTarget");
}

/**
 * <p>Specifies a job definition.</p>
 */
export interface Job {
  __type?: "Job";
  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) allocated to runs of this job. You can
   *       allocate from 2 to 100 DPUs; the default is 10. A DPU is a relative measure of processing
   *       power that consists of 4 vCPUs of compute capacity and 16 GB of memory. For more information,
   *       see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue pricing
   *       page</a>.</p>
   * 	        <p></p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The <code>JobCommand</code> that executes this job.</p>
   */
  Command?: JobCommand;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

  /**
   * <p>The time and date that this job definition was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>The default arguments for this job, specified as name-value pairs.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own Job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  DefaultArguments?: { [key: string]: string };

  /**
   * <p>A description of the job.</p>
   */
  Description?: string;

  /**
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The last point in time when this job definition was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
   *       pricing page</a>.</p>
   *
   * 	        <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   * 	        <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
   *         <ul>
   *             <li>
   *                <p>When you specify a Python shell job (<code>JobCommand.Name</code>="pythonshell"), you can
   *           allocate either 0.0625 or 1 DPU. The default is 0.0625 DPU.</p>
   *             </li>
   *             <li>
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry this job after a JobRun fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The name you assign to this job definition.</p>
   */
  Name?: string;

  /**
   * <p>Specifies configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   * 		       <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job.</p>
   */
  Role?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

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
}

export namespace Job {
  export const filterSensitiveLog = (obj: Job): any => ({
    ...obj
  });
  export const isa = (o: any): o is Job => __isa(o, "Job");
}

/**
 * <p>Defines a point that a job can resume processing.</p>
 */
export interface JobBookmarkEntry {
  __type?: "JobBookmarkEntry";
  /**
   * <p>The attempt ID number.</p>
   */
  Attempt?: number;

  /**
   * <p>The bookmark itself.</p>
   */
  JobBookmark?: string;

  /**
   * <p>The name of the job in question.</p>
   */
  JobName?: string;

  /**
   * <p>The unique run identifier associated with the previous job run.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The run ID number.</p>
   */
  Run?: number;

  /**
   * <p>The run ID number.</p>
   */
  RunId?: string;

  /**
   * <p>The version of the job.</p>
   */
  Version?: number;
}

export namespace JobBookmarkEntry {
  export const filterSensitiveLog = (obj: JobBookmarkEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobBookmarkEntry =>
    __isa(o, "JobBookmarkEntry");
}

/**
 * <p>Specifies how job bookmark data should be encrypted.</p>
 */
export interface JobBookmarksEncryption {
  __type?: "JobBookmarksEncryption";
  /**
   * <p>The encryption mode to use for job bookmarks data.</p>
   */
  JobBookmarksEncryptionMode?: JobBookmarksEncryptionMode | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;
}

export namespace JobBookmarksEncryption {
  export const filterSensitiveLog = (obj: JobBookmarksEncryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobBookmarksEncryption =>
    __isa(o, "JobBookmarksEncryption");
}

export enum JobBookmarksEncryptionMode {
  CSEKMS = "CSE-KMS",
  DISABLED = "DISABLED"
}

/**
 * <p>Specifies code executed when a job is run.</p>
 */
export interface JobCommand {
  __type?: "JobCommand";
  /**
   * <p>The name of the job command. For an Apache Spark ETL job, this must be
   *         <code>glueetl</code>. For a Python shell job, it must be <code>pythonshell</code>.</p>
   */
  Name?: string;

  /**
   * <p>The Python version being used to execute a Python shell job. Allowed values are 2 or 3.</p>
   */
  PythonVersion?: string;

  /**
   * <p>Specifies the Amazon Simple Storage Service (Amazon S3) path to a script that executes a
   *       job.</p>
   */
  ScriptLocation?: string;
}

export namespace JobCommand {
  export const filterSensitiveLog = (obj: JobCommand): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobCommand => __isa(o, "JobCommand");
}

/**
 * <p>The details of a Job node present in the workflow.</p>
 */
export interface JobNodeDetails {
  __type?: "JobNodeDetails";
  /**
   * <p>The information for the job runs represented by the job node.</p>
   */
  JobRuns?: JobRun[];
}

export namespace JobNodeDetails {
  export const filterSensitiveLog = (obj: JobNodeDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobNodeDetails =>
    __isa(o, "JobNodeDetails");
}

/**
 * <p>Contains information about a job run.</p>
 */
export interface JobRun {
  __type?: "JobRun";
  /**
   * <p>This field is deprecated. Use <code>MaxCapacity</code> instead.</p>
   *
   *          <p>The number of AWS Glue data processing units (DPUs) allocated to this JobRun.
   *       From 2 to 100 DPUs can be allocated; the default is 10. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   */
  AllocatedCapacity?: number;

  /**
   * <p>The job arguments associated with this run. For this job run, they replace the default arguments set in the job definition itself.</p>
   *          <p>You can specify arguments here that your own job-execution script
   *       consumes, as well as arguments that AWS Glue itself consumes.</p>
   *          <p>For information about how to specify and consume your own job arguments, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-python-calling.html">Calling AWS Glue APIs in Python</a> topic in the developer guide.</p>
   *          <p>For information about the key-value pairs that AWS Glue consumes to set up your job, see the <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-programming-etl-glue-arguments.html">Special Parameters Used by AWS Glue</a> topic in the developer guide.</p>
   */
  Arguments?: { [key: string]: string };

  /**
   * <p>The number of the attempt to run this job.</p>
   */
  Attempt?: number;

  /**
   * <p>The date and time that this job run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>An error message associated with this job run.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The amount of time (in seconds) that the job run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   *
   * 	        <p>Jobs that are created without specifying a Glue version default to Glue 0.9.</p>
   */
  GlueVersion?: string;

  /**
   * <p>The ID of this job run.</p>
   */
  Id?: string;

  /**
   * <p>The name of the job definition being used in this run.</p>
   */
  JobName?: string;

  /**
   * <p>The current state of the job run.</p>
   */
  JobRunState?: JobRunState | string;

  /**
   * <p>The last time that this job run was modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The name of the log group for secure logging that can be server-side encrypted in Amazon
   *       CloudWatch using AWS KMS. This name can be <code>/aws-glue/jobs/</code>, in which case the
   *       default encryption is <code>NONE</code>. If you add a role name and
   *       <code>SecurityConfiguration</code> name (in other words,
   *       <code>/aws-glue/jobs-yourRoleName-yourSecurityConfigurationName/</code>), then that security
   *       configuration is used to encrypt the log group.</p>
   */
  LogGroupName?: string;

  /**
   * <p>The number of AWS Glue data processing units (DPUs) that can be allocated when this job runs. A DPU is a relative measure
   *       of processing power that consists of 4 vCPUs of compute capacity and 16 GB of memory.
   *       For more information, see the <a href="https://docs.aws.amazon.com/https:/aws.amazon.com/glue/pricing/">AWS Glue
   *         pricing page</a>.</p>
   *
   *          <p>Do not set <code>Max Capacity</code> if using <code>WorkerType</code> and <code>NumberOfWorkers</code>.</p>
   *
   *          <p>The value that can be allocated for <code>MaxCapacity</code> depends on whether you are
   *       running a Python shell job or an Apache Spark ETL job:</p>
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
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A list of predecessors to this job run.</p>
   */
  PredecessorRuns?: Predecessor[];

  /**
   * <p>The ID of the previous run of this job. For example, the <code>JobRunId</code> specified
   *       in the <code>StartJobRun</code> action.</p>
   */
  PreviousRunId?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The date and time at which this job run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

  /**
   * <p>The name of the trigger that started this job run.</p>
   */
  TriggerName?: string;

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
}

export namespace JobRun {
  export const filterSensitiveLog = (obj: JobRun): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobRun => __isa(o, "JobRun");
}

export enum JobRunState {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT"
}

/**
 * <p>Specifies information used to update an existing job definition. The previous job
 *       definition is completely overwritten by this information.</p>
 */
export interface JobUpdate {
  __type?: "JobUpdate";
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
   * <p>The <code>JobCommand</code> that executes this job (required).</p>
   */
  Command?: JobCommand;

  /**
   * <p>The connections used for this job.</p>
   */
  Connections?: ConnectionsList;

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
   * <p>An <code>ExecutionProperty</code> specifying the maximum number of concurrent runs allowed
   *       for this job.</p>
   */
  ExecutionProperty?: ExecutionProperty;

  /**
   * <p>Glue version determines the versions of Apache Spark and Python that AWS Glue supports. The Python version indicates the version supported for jobs of type Spark. </p>
   *
   *          <p>For more information about the available AWS Glue versions and corresponding Spark and Python versions, see <a href="https://docs.aws.amazon.com/glue/latest/dg/add-job.html">Glue version</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>This field is reserved for future use.</p>
   */
  LogUri?: string;

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
   *                <p>When you specify an Apache Spark ETL job (<code>JobCommand.Name</code>="glueetl"), you can allocate from 2 to 100 DPUs. The default is 10 DPUs. This job type cannot have a fractional DPU allocation.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacity?: number;

  /**
   * <p>The maximum number of times to retry this job if it fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>Specifies the configuration properties of a job notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the IAM role associated with this job
   *       (required).</p>
   */
  Role?: string;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this
   *       job.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The job timeout in minutes.  This is the maximum time that a job run
   *       can consume resources before it is terminated and enters <code>TIMEOUT</code>
   *       status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

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
}

export namespace JobUpdate {
  export const filterSensitiveLog = (obj: JobUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is JobUpdate => __isa(o, "JobUpdate");
}

/**
 * <p>A classifier for <code>JSON</code> content.</p>
 */
export interface JsonClassifier {
  __type?: "JsonClassifier";
  /**
   * <p>The time that this classifier was registered.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
   *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath: string | undefined;

  /**
   * <p>The time that this classifier was last updated.</p>
   */
  LastUpdated?: Date;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;
}

export namespace JsonClassifier {
  export const filterSensitiveLog = (obj: JsonClassifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is JsonClassifier =>
    __isa(o, "JsonClassifier");
}

/**
 * <p>Specifies configuration properties for a labeling set generation task run.</p>
 */
export interface LabelingSetGenerationTaskRunProperties {
  __type?: "LabelingSetGenerationTaskRunProperties";
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path where you will generate the labeling
   *       set.</p>
   */
  OutputS3Path?: string;
}

export namespace LabelingSetGenerationTaskRunProperties {
  export const filterSensitiveLog = (
    obj: LabelingSetGenerationTaskRunProperties
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LabelingSetGenerationTaskRunProperties =>
    __isa(o, "LabelingSetGenerationTaskRunProperties");
}

export enum Language {
  PYTHON = "PYTHON",
  SCALA = "SCALA"
}

/**
 * <p>Status and error information about the most recent crawl.</p>
 */
export interface LastCrawlInfo {
  __type?: "LastCrawlInfo";
  /**
   * <p>If an error occurred, the error information about the last crawl.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The log group for the last crawl.</p>
   */
  LogGroup?: string;

  /**
   * <p>The log stream for the last crawl.</p>
   */
  LogStream?: string;

  /**
   * <p>The prefix for a message about this crawl.</p>
   */
  MessagePrefix?: string;

  /**
   * <p>The time at which the crawl started.</p>
   */
  StartTime?: Date;

  /**
   * <p>Status of the last crawl.</p>
   */
  Status?: LastCrawlStatus | string;
}

export namespace LastCrawlInfo {
  export const filterSensitiveLog = (obj: LastCrawlInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is LastCrawlInfo => __isa(o, "LastCrawlInfo");
}

export enum LastCrawlStatus {
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  SUCCEEDED = "SUCCEEDED"
}

export interface ListCrawlersRequest {
  __type?: "ListCrawlersRequest";
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

export namespace ListCrawlersRequest {
  export const filterSensitiveLog = (obj: ListCrawlersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCrawlersRequest =>
    __isa(o, "ListCrawlersRequest");
}

export interface ListCrawlersResponse {
  __type?: "ListCrawlersResponse";
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
  export const filterSensitiveLog = (obj: ListCrawlersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCrawlersResponse =>
    __isa(o, "ListCrawlersResponse");
}

export interface ListDevEndpointsRequest {
  __type?: "ListDevEndpointsRequest";
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
    ...obj
  });
  export const isa = (o: any): o is ListDevEndpointsRequest =>
    __isa(o, "ListDevEndpointsRequest");
}

export interface ListDevEndpointsResponse {
  __type?: "ListDevEndpointsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListDevEndpointsResponse =>
    __isa(o, "ListDevEndpointsResponse");
}

export interface ListJobsRequest {
  __type?: "ListJobsRequest";
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

export namespace ListJobsRequest {
  export const filterSensitiveLog = (obj: ListJobsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListJobsRequest =>
    __isa(o, "ListJobsRequest");
}

export interface ListJobsResponse {
  __type?: "ListJobsResponse";
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
    ...obj
  });
  export const isa = (o: any): o is ListJobsResponse =>
    __isa(o, "ListJobsResponse");
}

export interface ListTriggersRequest {
  __type?: "ListTriggersRequest";
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
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifies to return only these tagged resources.</p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTriggersRequest {
  export const filterSensitiveLog = (obj: ListTriggersRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTriggersRequest =>
    __isa(o, "ListTriggersRequest");
}

export interface ListTriggersResponse {
  __type?: "ListTriggersResponse";
  /**
   * <p>A continuation token, if the returned list does not contain the
   *       last metric available.</p>
   */
  NextToken?: string;

  /**
   * <p>The names of all triggers in the account, or the triggers with the specified tags.</p>
   */
  TriggerNames?: string[];
}

export namespace ListTriggersResponse {
  export const filterSensitiveLog = (obj: ListTriggersResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListTriggersResponse =>
    __isa(o, "ListTriggersResponse");
}

export interface ListWorkflowsRequest {
  __type?: "ListWorkflowsRequest";
  /**
   * <p>The maximum size of a list to return.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, if this is a continuation request.</p>
   */
  NextToken?: string;
}

export namespace ListWorkflowsRequest {
  export const filterSensitiveLog = (obj: ListWorkflowsRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkflowsRequest =>
    __isa(o, "ListWorkflowsRequest");
}

export interface ListWorkflowsResponse {
  __type?: "ListWorkflowsResponse";
  /**
   * <p>A continuation token, if not all workflow names have been returned.</p>
   */
  NextToken?: string;

  /**
   * <p>List of names of workflows in the account.</p>
   */
  Workflows?: string[];
}

export namespace ListWorkflowsResponse {
  export const filterSensitiveLog = (obj: ListWorkflowsResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListWorkflowsResponse =>
    __isa(o, "ListWorkflowsResponse");
}

/**
 * <p>The location of resources.</p>
 */
export interface Location {
  __type?: "Location";
  /**
   * <p>An Amazon DynamoDB table location.</p>
   */
  DynamoDB?: CodeGenNodeArg[];

  /**
   * <p>A JDBC location.</p>
   */
  Jdbc?: CodeGenNodeArg[];

  /**
   * <p>An Amazon Simple Storage Service (Amazon S3) location.</p>
   */
  S3?: CodeGenNodeArg[];
}

export namespace Location {
  export const filterSensitiveLog = (obj: Location): any => ({
    ...obj
  });
  export const isa = (o: any): o is Location => __isa(o, "Location");
}

export enum Logical {
  AND = "AND",
  ANY = "ANY"
}

export enum LogicalOperator {
  EQUALS = "EQUALS"
}

/**
 * <p>Defines a mapping.</p>
 */
export interface MappingEntry {
  __type?: "MappingEntry";
  /**
   * <p>The source path.</p>
   */
  SourcePath?: string;

  /**
   * <p>The name of the source table.</p>
   */
  SourceTable?: string;

  /**
   * <p>The source type.</p>
   */
  SourceType?: string;

  /**
   * <p>The target path.</p>
   */
  TargetPath?: string;

  /**
   * <p>The target table.</p>
   */
  TargetTable?: string;

  /**
   * <p>The target type.</p>
   */
  TargetType?: string;
}

export namespace MappingEntry {
  export const filterSensitiveLog = (obj: MappingEntry): any => ({
    ...obj
  });
  export const isa = (o: any): o is MappingEntry => __isa(o, "MappingEntry");
}

/**
 * <p>A structure for a machine learning transform.</p>
 */
export interface MLTransform {
  __type?: "MLTransform";
  /**
   * <p>A timestamp. The time and date that this machine learning transform was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>A user-defined, long-form description text for the machine learning transform.
   *       Descriptions are not guaranteed to be unique and can be changed at any time.</p>
   */
  Description?: string;

  /**
   * <p>An <code>EvaluationMetrics</code> object. Evaluation metrics provide an estimate of the quality of your machine learning transform.</p>
   */
  EvaluationMetrics?: EvaluationMetrics;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>A list of AWS Glue table definitions used by the transform.</p>
   */
  InputRecordTables?: GlueTable[];

  /**
   * <p>A count identifier for the labeling files generated by AWS Glue for this transform. As you create a better transform, you can iteratively download, label, and upload the labeling file.</p>
   */
  LabelCount?: number;

  /**
   * <p>A timestamp. The last point in time when this machine learning transform was modified.</p>
   */
  LastModifiedOn?: Date;

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
   * <p>The maximum number of times to retry after an <code>MLTaskRun</code> of the machine
   *       learning transform fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>A user-defined name for the machine learning transform. Names are not guaranteed unique
   *       and can be changed at any time.</p>
   */
  Name?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a task of the transform runs.</p>
   *
   * 	        <p>If <code>WorkerType</code> is set, then <code>NumberOfWorkers</code> is required (and vice versa).</p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>A <code>TransformParameters</code> object. You can use parameters to tune (customize) the
   *       behavior of the machine learning transform by specifying what data it learns from and your
   *       preference on various tradeoffs (such as precious vs. recall, or accuracy vs. cost).</p>
   */
  Parameters?: TransformParameters;

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
   * <p>A map of key-value pairs representing the columns and data types that this transform can
   *       run against. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>The current status of the machine learning transform.</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The timeout in minutes of the machine learning transform.</p>
   */
  Timeout?: number;

  /**
   * <p>The unique transform ID that is generated for the machine learning transform. The ID is
   *       guaranteed to be unique and does not change.</p>
   */
  TransformId?: string;

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
}

export namespace MLTransform {
  export const filterSensitiveLog = (obj: MLTransform): any => ({
    ...obj
  });
  export const isa = (o: any): o is MLTransform => __isa(o, "MLTransform");
}

/**
 * <p>The machine learning transform is not ready to run.</p>
 */
export interface MLTransformNotReadyException
  extends __SmithyException,
    $MetadataBearer {
  name: "MLTransformNotReadyException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace MLTransformNotReadyException {
  export const filterSensitiveLog = (
    obj: MLTransformNotReadyException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is MLTransformNotReadyException =>
    __isa(o, "MLTransformNotReadyException");
}

/**
 * <p>A node represents an AWS Glue component like Trigger, Job etc. which is part of a workflow.</p>
 */
export interface Node {
  __type?: "Node";
  /**
   * <p>Details of the crawler when the node represents a crawler.</p>
   */
  CrawlerDetails?: CrawlerNodeDetails;

  /**
   * <p>Details of the Job when the node represents a Job.</p>
   */
  JobDetails?: JobNodeDetails;

  /**
   * <p>The name of the AWS Glue component represented by the node.</p>
   */
  Name?: string;

  /**
   * <p>Details of the Trigger when the node represents a Trigger.</p>
   */
  TriggerDetails?: TriggerNodeDetails;

  /**
   * <p>The type of AWS Glue component represented by the node.</p>
   */
  Type?: NodeType | string;

  /**
   * <p>The unique Id assigned to the node within the workflow.</p>
   */
  UniqueId?: string;
}

export namespace Node {
  export const filterSensitiveLog = (obj: Node): any => ({
    ...obj
  });
  export const isa = (o: any): o is Node => __isa(o, "Node");
}

export enum NodeType {
  CRAWLER = "CRAWLER",
  JOB = "JOB",
  TRIGGER = "TRIGGER"
}

/**
 * <p>There is no applicable schedule.</p>
 */
export interface NoScheduleException
  extends __SmithyException,
    $MetadataBearer {
  name: "NoScheduleException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace NoScheduleException {
  export const filterSensitiveLog = (obj: NoScheduleException): any => ({
    ...obj
  });
  export const isa = (o: any): o is NoScheduleException =>
    __isa(o, "NoScheduleException");
}

/**
 * <p>Specifies configuration properties of a notification.</p>
 */
export interface NotificationProperty {
  __type?: "NotificationProperty";
  /**
   * <p>After a job run starts, the number of minutes to wait before
   *       sending a job run delay notification.</p>
   */
  NotifyDelayAfter?: number;
}

export namespace NotificationProperty {
  export const filterSensitiveLog = (obj: NotificationProperty): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationProperty =>
    __isa(o, "NotificationProperty");
}

/**
 * <p>The operation timed out.</p>
 */
export interface OperationTimeoutException
  extends __SmithyException,
    $MetadataBearer {
  name: "OperationTimeoutException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace OperationTimeoutException {
  export const filterSensitiveLog = (obj: OperationTimeoutException): any => ({
    ...obj
  });
  export const isa = (o: any): o is OperationTimeoutException =>
    __isa(o, "OperationTimeoutException");
}

/**
 * <p>Specifies the sort order of a sorted column.</p>
 */
export interface Order {
  __type?: "Order";
  /**
   * <p>The name of the column.</p>
   */
  Column: string | undefined;

  /**
   * <p>Indicates that the column is sorted in ascending order
   *       (<code>== 1</code>), or in descending order (<code>==0</code>).</p>
   */
  SortOrder: number | undefined;
}

export namespace Order {
  export const filterSensitiveLog = (obj: Order): any => ({
    ...obj
  });
  export const isa = (o: any): o is Order => __isa(o, "Order");
}

/**
 * <p>Represents a slice of table data.</p>
 */
export interface Partition {
  __type?: "Partition";
  /**
   * <p>The time at which the partition was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The name of the catalog database in which to create the partition.</p>
   */
  DatabaseName?: string;

  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time at which column statistics were computed for this
   *       partition.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The name of the database table in which to create the partition.</p>
   */
  TableName?: string;

  /**
   * <p>The values of the partition.</p>
   */
  Values?: string[];
}

export namespace Partition {
  export const filterSensitiveLog = (obj: Partition): any => ({
    ...obj
  });
  export const isa = (o: any): o is Partition => __isa(o, "Partition");
}

/**
 * <p>Contains information about a partition error.</p>
 */
export interface PartitionError {
  __type?: "PartitionError";
  /**
   * <p>The details about the partition error.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The values that define the partition.</p>
   */
  PartitionValues?: string[];
}

export namespace PartitionError {
  export const filterSensitiveLog = (obj: PartitionError): any => ({
    ...obj
  });
  export const isa = (o: any): o is PartitionError =>
    __isa(o, "PartitionError");
}

/**
 * <p>The structure used to create and update a partition.</p>
 */
export interface PartitionInput {
  __type?: "PartitionInput";
  /**
   * <p>The last time at which the partition was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time at which column statistics were computed for this partition.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>These key-value pairs define partition parameters.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>Provides information about the physical
   *       location where the partition is stored.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The values of the partition. Although this parameter is not required by the SDK, you must specify this parameter for a valid input.</p>
   *
   * 	        <p>The values for the keys for the new partition must be passed as an array of String objects that must be ordered in the same order as the partition keys appearing in the Amazon S3 prefix. Otherwise AWS Glue will add the values to the wrong keys.</p>
   */
  Values?: string[];
}

export namespace PartitionInput {
  export const filterSensitiveLog = (obj: PartitionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is PartitionInput =>
    __isa(o, "PartitionInput");
}

/**
 * <p>Contains a list of values defining partitions.</p>
 */
export interface PartitionValueList {
  __type?: "PartitionValueList";
  /**
   * <p>The list of values.</p>
   */
  Values: string[] | undefined;
}

export namespace PartitionValueList {
  export const filterSensitiveLog = (obj: PartitionValueList): any => ({
    ...obj
  });
  export const isa = (o: any): o is PartitionValueList =>
    __isa(o, "PartitionValueList");
}

export enum Permission {
  ALL = "ALL",
  ALTER = "ALTER",
  CREATE_DATABASE = "CREATE_DATABASE",
  CREATE_TABLE = "CREATE_TABLE",
  DATA_LOCATION_ACCESS = "DATA_LOCATION_ACCESS",
  DELETE = "DELETE",
  DROP = "DROP",
  INSERT = "INSERT",
  SELECT = "SELECT"
}

/**
 * <p>Specifies the physical requirements for a connection.</p>
 */
export interface PhysicalConnectionRequirements {
  __type?: "PhysicalConnectionRequirements";
  /**
   * <p>The connection's Availability Zone. This field is redundant because the specified subnet
   *       implies the Availability Zone to be used. Currently the field must be populated, but it will
   *       be deprecated in the future.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The security group ID list used by the connection.</p>
   */
  SecurityGroupIdList?: string[];

  /**
   * <p>The subnet ID used by the connection.</p>
   */
  SubnetId?: string;
}

export namespace PhysicalConnectionRequirements {
  export const filterSensitiveLog = (
    obj: PhysicalConnectionRequirements
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PhysicalConnectionRequirements =>
    __isa(o, "PhysicalConnectionRequirements");
}

/**
 * <p>A job run that was used in the predicate of a conditional trigger
 *       that triggered this job run.</p>
 */
export interface Predecessor {
  __type?: "Predecessor";
  /**
   * <p>The name of the job definition used by the predecessor job run.</p>
   */
  JobName?: string;

  /**
   * <p>The job-run ID of the predecessor job run.</p>
   */
  RunId?: string;
}

export namespace Predecessor {
  export const filterSensitiveLog = (obj: Predecessor): any => ({
    ...obj
  });
  export const isa = (o: any): o is Predecessor => __isa(o, "Predecessor");
}

/**
 * <p>Defines the predicate of the trigger, which determines when it fires.</p>
 */
export interface Predicate {
  __type?: "Predicate";
  /**
   * <p>A list of the conditions that determine when the trigger will fire.</p>
   */
  Conditions?: Condition[];

  /**
   * <p>An optional field if only one condition is listed. If multiple conditions are listed, then
   *       this field is required.</p>
   */
  Logical?: Logical | string;
}

export namespace Predicate {
  export const filterSensitiveLog = (obj: Predicate): any => ({
    ...obj
  });
  export const isa = (o: any): o is Predicate => __isa(o, "Predicate");
}

/**
 * <p>Permissions granted to a principal.</p>
 */
export interface PrincipalPermissions {
  __type?: "PrincipalPermissions";
  /**
   * <p>The permissions that are granted to the principal.</p>
   */
  Permissions?: (Permission | string)[];

  /**
   * <p>The principal who is granted permissions.</p>
   */
  Principal?: DataLakePrincipal;
}

export namespace PrincipalPermissions {
  export const filterSensitiveLog = (obj: PrincipalPermissions): any => ({
    ...obj
  });
  export const isa = (o: any): o is PrincipalPermissions =>
    __isa(o, "PrincipalPermissions");
}

export enum PrincipalType {
  GROUP = "GROUP",
  ROLE = "ROLE",
  USER = "USER"
}

/**
 * <p>Defines a property predicate.</p>
 */
export interface PropertyPredicate {
  __type?: "PropertyPredicate";
  /**
   * <p>The comparator used to compare this property to others.</p>
   */
  Comparator?: Comparator | string;

  /**
   * <p>The key of the property.</p>
   */
  Key?: string;

  /**
   * <p>The value of the property.</p>
   */
  Value?: string;
}

export namespace PropertyPredicate {
  export const filterSensitiveLog = (obj: PropertyPredicate): any => ({
    ...obj
  });
  export const isa = (o: any): o is PropertyPredicate =>
    __isa(o, "PropertyPredicate");
}

export interface PutDataCatalogEncryptionSettingsRequest {
  __type?: "PutDataCatalogEncryptionSettingsRequest";
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
  export const filterSensitiveLog = (
    obj: PutDataCatalogEncryptionSettingsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutDataCatalogEncryptionSettingsRequest =>
    __isa(o, "PutDataCatalogEncryptionSettingsRequest");
}

export interface PutDataCatalogEncryptionSettingsResponse {
  __type?: "PutDataCatalogEncryptionSettingsResponse";
}

export namespace PutDataCatalogEncryptionSettingsResponse {
  export const filterSensitiveLog = (
    obj: PutDataCatalogEncryptionSettingsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutDataCatalogEncryptionSettingsResponse =>
    __isa(o, "PutDataCatalogEncryptionSettingsResponse");
}

export interface PutResourcePolicyRequest {
  __type?: "PutResourcePolicyRequest";
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
   * <p>Contains the policy document to set, in JSON format.</p>
   */
  PolicyInJson: string | undefined;
}

export namespace PutResourcePolicyRequest {
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourcePolicyRequest =>
    __isa(o, "PutResourcePolicyRequest");
}

export interface PutResourcePolicyResponse {
  __type?: "PutResourcePolicyResponse";
  /**
   * <p>A hash of the policy that has just been set. This must
   *       be included in a subsequent call that overwrites or updates
   *       this policy.</p>
   */
  PolicyHash?: string;
}

export namespace PutResourcePolicyResponse {
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourcePolicyResponse =>
    __isa(o, "PutResourcePolicyResponse");
}

export interface PutWorkflowRunPropertiesRequest {
  __type?: "PutWorkflowRunPropertiesRequest";
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
  RunProperties: { [key: string]: string } | undefined;
}

export namespace PutWorkflowRunPropertiesRequest {
  export const filterSensitiveLog = (
    obj: PutWorkflowRunPropertiesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutWorkflowRunPropertiesRequest =>
    __isa(o, "PutWorkflowRunPropertiesRequest");
}

export interface PutWorkflowRunPropertiesResponse {
  __type?: "PutWorkflowRunPropertiesResponse";
}

export namespace PutWorkflowRunPropertiesResponse {
  export const filterSensitiveLog = (
    obj: PutWorkflowRunPropertiesResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutWorkflowRunPropertiesResponse =>
    __isa(o, "PutWorkflowRunPropertiesResponse");
}

export interface ResetJobBookmarkRequest {
  __type?: "ResetJobBookmarkRequest";
  /**
   * <p>The name of the job in question.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The unique run identifier associated with this job run.</p>
   */
  RunId?: string;
}

export namespace ResetJobBookmarkRequest {
  export const filterSensitiveLog = (obj: ResetJobBookmarkRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetJobBookmarkRequest =>
    __isa(o, "ResetJobBookmarkRequest");
}

export interface ResetJobBookmarkResponse {
  __type?: "ResetJobBookmarkResponse";
  /**
   * <p>The reset bookmark entry.</p>
   */
  JobBookmarkEntry?: JobBookmarkEntry;
}

export namespace ResetJobBookmarkResponse {
  export const filterSensitiveLog = (obj: ResetJobBookmarkResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResetJobBookmarkResponse =>
    __isa(o, "ResetJobBookmarkResponse");
}

/**
 * <p>A resource numerical limit was exceeded.</p>
 */
export interface ResourceNumberLimitExceededException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNumberLimitExceededException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ResourceNumberLimitExceededException {
  export const filterSensitiveLog = (
    obj: ResourceNumberLimitExceededException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNumberLimitExceededException =>
    __isa(o, "ResourceNumberLimitExceededException");
}

export enum ResourceType {
  ARCHIVE = "ARCHIVE",
  FILE = "FILE",
  JAR = "JAR"
}

/**
 * <p>The URIs for function resources.</p>
 */
export interface ResourceUri {
  __type?: "ResourceUri";
  /**
   * <p>The type of the resource.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>The URI for accessing the resource.</p>
   */
  Uri?: string;
}

export namespace ResourceUri {
  export const filterSensitiveLog = (obj: ResourceUri): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceUri => __isa(o, "ResourceUri");
}

/**
 * <p>Specifies how Amazon Simple Storage Service (Amazon S3) data should be encrypted.</p>
 */
export interface S3Encryption {
  __type?: "S3Encryption";
  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key to be used to encrypt the data.</p>
   */
  KmsKeyArn?: string;

  /**
   * <p>The encryption mode to use for Amazon S3 data.</p>
   */
  S3EncryptionMode?: S3EncryptionMode | string;
}

export namespace S3Encryption {
  export const filterSensitiveLog = (obj: S3Encryption): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Encryption => __isa(o, "S3Encryption");
}

export enum S3EncryptionMode {
  DISABLED = "DISABLED",
  SSEKMS = "SSE-KMS",
  SSES3 = "SSE-S3"
}

/**
 * <p>Specifies a data store in Amazon Simple Storage Service (Amazon S3).</p>
 */
export interface S3Target {
  __type?: "S3Target";
  /**
   * <p>A list of glob patterns used to exclude from the crawl.
   *       For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-crawler.html">Catalog Tables with a Crawler</a>.</p>
   */
  Exclusions?: string[];

  /**
   * <p>The path to the Amazon S3 target.</p>
   */
  Path?: string;
}

export namespace S3Target {
  export const filterSensitiveLog = (obj: S3Target): any => ({
    ...obj
  });
  export const isa = (o: any): o is S3Target => __isa(o, "S3Target");
}

/**
 * <p>A scheduling object using a <code>cron</code> statement to schedule an event.</p>
 */
export interface Schedule {
  __type?: "Schedule";
  /**
   * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
   *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
   *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The state of the schedule.</p>
   */
  State?: ScheduleState | string;
}

export namespace Schedule {
  export const filterSensitiveLog = (obj: Schedule): any => ({
    ...obj
  });
  export const isa = (o: any): o is Schedule => __isa(o, "Schedule");
}

/**
 * <p>The specified scheduler is not running.</p>
 */
export interface SchedulerNotRunningException
  extends __SmithyException,
    $MetadataBearer {
  name: "SchedulerNotRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerNotRunningException {
  export const filterSensitiveLog = (
    obj: SchedulerNotRunningException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchedulerNotRunningException =>
    __isa(o, "SchedulerNotRunningException");
}

/**
 * <p>The specified scheduler is already running.</p>
 */
export interface SchedulerRunningException
  extends __SmithyException,
    $MetadataBearer {
  name: "SchedulerRunningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerRunningException {
  export const filterSensitiveLog = (obj: SchedulerRunningException): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchedulerRunningException =>
    __isa(o, "SchedulerRunningException");
}

/**
 * <p>The specified scheduler is transitioning.</p>
 */
export interface SchedulerTransitioningException
  extends __SmithyException,
    $MetadataBearer {
  name: "SchedulerTransitioningException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace SchedulerTransitioningException {
  export const filterSensitiveLog = (
    obj: SchedulerTransitioningException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchedulerTransitioningException =>
    __isa(o, "SchedulerTransitioningException");
}

export enum ScheduleState {
  NOT_SCHEDULED = "NOT_SCHEDULED",
  SCHEDULED = "SCHEDULED",
  TRANSITIONING = "TRANSITIONING"
}

/**
 * <p>A policy that specifies update and deletion behaviors for the crawler.</p>
 */
export interface SchemaChangePolicy {
  __type?: "SchemaChangePolicy";
  /**
   * <p>The deletion behavior when the crawler finds a deleted object.</p>
   */
  DeleteBehavior?: DeleteBehavior | string;

  /**
   * <p>The update behavior when the crawler finds a changed schema.</p>
   */
  UpdateBehavior?: UpdateBehavior | string;
}

export namespace SchemaChangePolicy {
  export const filterSensitiveLog = (obj: SchemaChangePolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is SchemaChangePolicy =>
    __isa(o, "SchemaChangePolicy");
}

/**
 * <p>A key-value pair representing a column and data type that this transform can
 *       run against. The <code>Schema</code> parameter of the <code>MLTransform</code> may contain up to 100 of these structures.</p>
 */
export interface SchemaColumn {
  __type?: "SchemaColumn";
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
    ...obj
  });
  export const isa = (o: any): o is SchemaColumn => __isa(o, "SchemaColumn");
}

export interface SearchTablesRequest {
  __type?: "SearchTablesRequest";
  /**
   * <p>A unique identifier, consisting of <code>
   *                <i>account_id</i>/datalake</code>.</p>
   */
  CatalogId?: string;

  /**
   * <p>A list of key-value pairs, and a comparator used to filter the search results. Returns all entities matching the predicate.</p>
   */
  Filters?: PropertyPredicate[];

  /**
   * <p>The maximum number of tables to return in a single response.</p>
   */
  MaxResults?: number;

  /**
   * <p>A continuation token, included if this is a continuation call.</p>
   */
  NextToken?: string;

  /**
   * <p>A string used for a text search.</p>
   * 	        <p>Specifying a value in quotes filters based on an exact match to the value.</p>
   */
  SearchText?: string;

  /**
   * <p>A list of criteria for sorting the results by a field name, in an ascending or descending order.</p>
   */
  SortCriteria?: SortCriterion[];
}

export namespace SearchTablesRequest {
  export const filterSensitiveLog = (obj: SearchTablesRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchTablesRequest =>
    __isa(o, "SearchTablesRequest");
}

export interface SearchTablesResponse {
  __type?: "SearchTablesResponse";
  /**
   * <p>A continuation token, present if the current list segment is not the last.</p>
   */
  NextToken?: string;

  /**
   * <p>A list of the requested <code>Table</code> objects. The <code>SearchTables</code> response returns only the tables that you have access to.</p>
   */
  TableList?: Table[];
}

export namespace SearchTablesResponse {
  export const filterSensitiveLog = (obj: SearchTablesResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is SearchTablesResponse =>
    __isa(o, "SearchTablesResponse");
}

/**
 * <p>Specifies a security configuration.</p>
 */
export interface SecurityConfiguration {
  __type?: "SecurityConfiguration";
  /**
   * <p>The time at which this security configuration was created.</p>
   */
  CreatedTimeStamp?: Date;

  /**
   * <p>The encryption configuration associated with this security configuration.</p>
   */
  EncryptionConfiguration?: EncryptionConfiguration;

  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;
}

export namespace SecurityConfiguration {
  export const filterSensitiveLog = (obj: SecurityConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is SecurityConfiguration =>
    __isa(o, "SecurityConfiguration");
}

/**
 * <p>Defines a non-overlapping region of a table's partitions, allowing
 *       multiple requests to be executed in parallel.</p>
 */
export interface Segment {
  __type?: "Segment";
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
    ...obj
  });
  export const isa = (o: any): o is Segment => __isa(o, "Segment");
}

/**
 * <p>Information about a serialization/deserialization program (SerDe) that serves as an
 *       extractor and loader.</p>
 */
export interface SerDeInfo {
  __type?: "SerDeInfo";
  /**
   * <p>Name of the SerDe.</p>
   */
  Name?: string;

  /**
   * <p>These key-value pairs define initialization parameters for the SerDe.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>Usually the class that implements the SerDe. An example is
   *         <code>org.apache.hadoop.hive.serde2.columnar.ColumnarSerDe</code>.</p>
   */
  SerializationLibrary?: string;
}

export namespace SerDeInfo {
  export const filterSensitiveLog = (obj: SerDeInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is SerDeInfo => __isa(o, "SerDeInfo");
}

/**
 * <p>Specifies skewed values in a table. Skewed values are those that occur with very high
 *       frequency.</p>
 */
export interface SkewedInfo {
  __type?: "SkewedInfo";
  /**
   * <p>A list of names of columns that contain skewed values.</p>
   */
  SkewedColumnNames?: string[];

  /**
   * <p>A mapping of skewed values to the columns that contain them.</p>
   */
  SkewedColumnValueLocationMaps?: { [key: string]: string };

  /**
   * <p>A list of values that appear so frequently as to be considered
   *       skewed.</p>
   */
  SkewedColumnValues?: string[];
}

export namespace SkewedInfo {
  export const filterSensitiveLog = (obj: SkewedInfo): any => ({
    ...obj
  });
  export const isa = (o: any): o is SkewedInfo => __isa(o, "SkewedInfo");
}

export enum Sort {
  ASCENDING = "ASC",
  DESCENDING = "DESC"
}

/**
 * <p>Specifies a field to sort by and a sort order.</p>
 */
export interface SortCriterion {
  __type?: "SortCriterion";
  /**
   * <p>The name of the field on which to sort.</p>
   */
  FieldName?: string;

  /**
   * <p>An ascending or descending sort.</p>
   */
  Sort?: Sort | string;
}

export namespace SortCriterion {
  export const filterSensitiveLog = (obj: SortCriterion): any => ({
    ...obj
  });
  export const isa = (o: any): o is SortCriterion => __isa(o, "SortCriterion");
}

export enum SortDirectionType {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING"
}

export interface StartCrawlerRequest {
  __type?: "StartCrawlerRequest";
  /**
   * <p>Name of the crawler to start.</p>
   */
  Name: string | undefined;
}

export namespace StartCrawlerRequest {
  export const filterSensitiveLog = (obj: StartCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCrawlerRequest =>
    __isa(o, "StartCrawlerRequest");
}

export interface StartCrawlerResponse {
  __type?: "StartCrawlerResponse";
}

export namespace StartCrawlerResponse {
  export const filterSensitiveLog = (obj: StartCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCrawlerResponse =>
    __isa(o, "StartCrawlerResponse");
}

export interface StartCrawlerScheduleRequest {
  __type?: "StartCrawlerScheduleRequest";
  /**
   * <p>Name of the crawler to schedule.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StartCrawlerScheduleRequest {
  export const filterSensitiveLog = (
    obj: StartCrawlerScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCrawlerScheduleRequest =>
    __isa(o, "StartCrawlerScheduleRequest");
}

export interface StartCrawlerScheduleResponse {
  __type?: "StartCrawlerScheduleResponse";
}

export namespace StartCrawlerScheduleResponse {
  export const filterSensitiveLog = (
    obj: StartCrawlerScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartCrawlerScheduleResponse =>
    __isa(o, "StartCrawlerScheduleResponse");
}

export interface StartExportLabelsTaskRunRequest {
  __type?: "StartExportLabelsTaskRunRequest";
  /**
   * <p>The Amazon S3 path where you export the labels.</p>
   */
  OutputS3Path: string | undefined;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartExportLabelsTaskRunRequest {
  export const filterSensitiveLog = (
    obj: StartExportLabelsTaskRunRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartExportLabelsTaskRunRequest =>
    __isa(o, "StartExportLabelsTaskRunRequest");
}

export interface StartExportLabelsTaskRunResponse {
  __type?: "StartExportLabelsTaskRunResponse";
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartExportLabelsTaskRunResponse {
  export const filterSensitiveLog = (
    obj: StartExportLabelsTaskRunResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartExportLabelsTaskRunResponse =>
    __isa(o, "StartExportLabelsTaskRunResponse");
}

export interface StartImportLabelsTaskRunRequest {
  __type?: "StartImportLabelsTaskRunRequest";
  /**
   * <p>The Amazon Simple Storage Service (Amazon S3) path from where you import the
   *       labels.</p>
   */
  InputS3Path: string | undefined;

  /**
   * <p>Indicates whether to overwrite your existing labels.</p>
   */
  ReplaceAllLabels?: boolean;

  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartImportLabelsTaskRunRequest {
  export const filterSensitiveLog = (
    obj: StartImportLabelsTaskRunRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImportLabelsTaskRunRequest =>
    __isa(o, "StartImportLabelsTaskRunRequest");
}

export interface StartImportLabelsTaskRunResponse {
  __type?: "StartImportLabelsTaskRunResponse";
  /**
   * <p>The unique identifier for the task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartImportLabelsTaskRunResponse {
  export const filterSensitiveLog = (
    obj: StartImportLabelsTaskRunResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartImportLabelsTaskRunResponse =>
    __isa(o, "StartImportLabelsTaskRunResponse");
}

export interface StartJobRunRequest {
  __type?: "StartJobRunRequest";
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
   * <p>The ID of a previous <code>JobRun</code> to retry.</p>
   */
  JobRunId?: string;

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
   * <p>Specifies configuration properties of a job run notification.</p>
   */
  NotificationProperty?: NotificationProperty;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when a job runs.</p>
   *
   *          <p>The maximum number of workers you can define are 299 for <code>G.1X</code>, and 149 for <code>G.2X</code>. </p>
   */
  NumberOfWorkers?: number;

  /**
   * <p>The name of the <code>SecurityConfiguration</code> structure to be used with this job
   *       run.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The <code>JobRun</code> timeout in minutes. This is the maximum time that a job run can
   *       consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default
   *       is 2,880 minutes (48 hours). This overrides the timeout value set in the parent job.</p>
   */
  Timeout?: number;

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
}

export namespace StartJobRunRequest {
  export const filterSensitiveLog = (obj: StartJobRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartJobRunRequest =>
    __isa(o, "StartJobRunRequest");
}

export interface StartJobRunResponse {
  __type?: "StartJobRunResponse";
  /**
   * <p>The ID assigned to this job run.</p>
   */
  JobRunId?: string;
}

export namespace StartJobRunResponse {
  export const filterSensitiveLog = (obj: StartJobRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartJobRunResponse =>
    __isa(o, "StartJobRunResponse");
}

export interface StartMLEvaluationTaskRunRequest {
  __type?: "StartMLEvaluationTaskRunRequest";
  /**
   * <p>The unique identifier of the machine learning transform.</p>
   */
  TransformId: string | undefined;
}

export namespace StartMLEvaluationTaskRunRequest {
  export const filterSensitiveLog = (
    obj: StartMLEvaluationTaskRunRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartMLEvaluationTaskRunRequest =>
    __isa(o, "StartMLEvaluationTaskRunRequest");
}

export interface StartMLEvaluationTaskRunResponse {
  __type?: "StartMLEvaluationTaskRunResponse";
  /**
   * <p>The unique identifier associated with this run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLEvaluationTaskRunResponse {
  export const filterSensitiveLog = (
    obj: StartMLEvaluationTaskRunResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartMLEvaluationTaskRunResponse =>
    __isa(o, "StartMLEvaluationTaskRunResponse");
}

export interface StartMLLabelingSetGenerationTaskRunRequest {
  __type?: "StartMLLabelingSetGenerationTaskRunRequest";
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
  export const filterSensitiveLog = (
    obj: StartMLLabelingSetGenerationTaskRunRequest
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartMLLabelingSetGenerationTaskRunRequest =>
    __isa(o, "StartMLLabelingSetGenerationTaskRunRequest");
}

export interface StartMLLabelingSetGenerationTaskRunResponse {
  __type?: "StartMLLabelingSetGenerationTaskRunResponse";
  /**
   * <p>The unique run identifier that is associated with this task run.</p>
   */
  TaskRunId?: string;
}

export namespace StartMLLabelingSetGenerationTaskRunResponse {
  export const filterSensitiveLog = (
    obj: StartMLLabelingSetGenerationTaskRunResponse
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is StartMLLabelingSetGenerationTaskRunResponse =>
    __isa(o, "StartMLLabelingSetGenerationTaskRunResponse");
}

export interface StartTriggerRequest {
  __type?: "StartTriggerRequest";
  /**
   * <p>The name of the trigger to start.</p>
   */
  Name: string | undefined;
}

export namespace StartTriggerRequest {
  export const filterSensitiveLog = (obj: StartTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartTriggerRequest =>
    __isa(o, "StartTriggerRequest");
}

export interface StartTriggerResponse {
  __type?: "StartTriggerResponse";
  /**
   * <p>The name of the trigger that was started.</p>
   */
  Name?: string;
}

export namespace StartTriggerResponse {
  export const filterSensitiveLog = (obj: StartTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartTriggerResponse =>
    __isa(o, "StartTriggerResponse");
}

export interface StartWorkflowRunRequest {
  __type?: "StartWorkflowRunRequest";
  /**
   * <p>The name of the workflow to start.</p>
   */
  Name: string | undefined;
}

export namespace StartWorkflowRunRequest {
  export const filterSensitiveLog = (obj: StartWorkflowRunRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartWorkflowRunRequest =>
    __isa(o, "StartWorkflowRunRequest");
}

export interface StartWorkflowRunResponse {
  __type?: "StartWorkflowRunResponse";
  /**
   * <p>An Id for the new run.</p>
   */
  RunId?: string;
}

export namespace StartWorkflowRunResponse {
  export const filterSensitiveLog = (obj: StartWorkflowRunResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StartWorkflowRunResponse =>
    __isa(o, "StartWorkflowRunResponse");
}

export interface StopCrawlerRequest {
  __type?: "StopCrawlerRequest";
  /**
   * <p>Name of the crawler to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopCrawlerRequest {
  export const filterSensitiveLog = (obj: StopCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopCrawlerRequest =>
    __isa(o, "StopCrawlerRequest");
}

export interface StopCrawlerResponse {
  __type?: "StopCrawlerResponse";
}

export namespace StopCrawlerResponse {
  export const filterSensitiveLog = (obj: StopCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopCrawlerResponse =>
    __isa(o, "StopCrawlerResponse");
}

export interface StopCrawlerScheduleRequest {
  __type?: "StopCrawlerScheduleRequest";
  /**
   * <p>Name of the crawler whose schedule state to set.</p>
   */
  CrawlerName: string | undefined;
}

export namespace StopCrawlerScheduleRequest {
  export const filterSensitiveLog = (obj: StopCrawlerScheduleRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopCrawlerScheduleRequest =>
    __isa(o, "StopCrawlerScheduleRequest");
}

export interface StopCrawlerScheduleResponse {
  __type?: "StopCrawlerScheduleResponse";
}

export namespace StopCrawlerScheduleResponse {
  export const filterSensitiveLog = (
    obj: StopCrawlerScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopCrawlerScheduleResponse =>
    __isa(o, "StopCrawlerScheduleResponse");
}

export interface StopTriggerRequest {
  __type?: "StopTriggerRequest";
  /**
   * <p>The name of the trigger to stop.</p>
   */
  Name: string | undefined;
}

export namespace StopTriggerRequest {
  export const filterSensitiveLog = (obj: StopTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopTriggerRequest =>
    __isa(o, "StopTriggerRequest");
}

export interface StopTriggerResponse {
  __type?: "StopTriggerResponse";
  /**
   * <p>The name of the trigger that was stopped.</p>
   */
  Name?: string;
}

export namespace StopTriggerResponse {
  export const filterSensitiveLog = (obj: StopTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is StopTriggerResponse =>
    __isa(o, "StopTriggerResponse");
}

/**
 * <p>Describes the physical storage of table data.</p>
 */
export interface StorageDescriptor {
  __type?: "StorageDescriptor";
  /**
   * <p>A list of reducer grouping columns, clustering columns, and
   *       bucketing columns in the table.</p>
   */
  BucketColumns?: string[];

  /**
   * <p>A list of the <code>Columns</code> in the table.</p>
   */
  Columns?: Column[];

  /**
   * <p>
   *             <code>True</code> if the data in the table is compressed, or <code>False</code> if
   *       not.</p>
   */
  Compressed?: boolean;

  /**
   * <p>The input format: <code>SequenceFileInputFormat</code> (binary),
   *       or <code>TextInputFormat</code>, or a custom format.</p>
   */
  InputFormat?: string;

  /**
   * <p>The physical location of the table. By default, this takes the form of the warehouse
   *       location, followed by the database location in the warehouse, followed by the table
   *       name.</p>
   */
  Location?: string;

  /**
   * <p>Must be specified if the table contains any dimension columns.</p>
   */
  NumberOfBuckets?: number;

  /**
   * <p>The output format: <code>SequenceFileOutputFormat</code> (binary),
   *       or <code>IgnoreKeyTextOutputFormat</code>, or a custom format.</p>
   */
  OutputFormat?: string;

  /**
   * <p>The user-supplied properties in key-value form.</p>
   */
  Parameters?: { [key: string]: string };

  /**
   * <p>The serialization/deserialization (SerDe) information.</p>
   */
  SerdeInfo?: SerDeInfo;

  /**
   * <p>The information about values that appear frequently in a column (skewed values).</p>
   */
  SkewedInfo?: SkewedInfo;

  /**
   * <p>A list specifying the sort order of each bucket in the table.</p>
   */
  SortColumns?: Order[];

  /**
   * <p>
   *             <code>True</code> if the table data is stored in subdirectories, or <code>False</code> if
   *       not.</p>
   */
  StoredAsSubDirectories?: boolean;
}

export namespace StorageDescriptor {
  export const filterSensitiveLog = (obj: StorageDescriptor): any => ({
    ...obj
  });
  export const isa = (o: any): o is StorageDescriptor =>
    __isa(o, "StorageDescriptor");
}

/**
 * <p>Represents a collection of related data organized in columns and rows.</p>
 */
export interface Table {
  __type?: "Table";
  /**
   * <p>The time when the table definition was created in the Data Catalog.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The person or entity who created the table.</p>
   */
  CreatedBy?: string;

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
   * <p>Indicates whether the table has been registered with AWS Lake Formation.</p>
   */
  IsRegisteredWithLakeFormation?: boolean;

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
   * <p>The table name. For Hive compatibility, this must be entirely
   *       lowercase.</p>
   */
  Name: string | undefined;

  /**
   * <p>The owner of the table.</p>
   */
  Owner?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string };

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
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>The last time that the table was updated.</p>
   */
  UpdateTime?: Date;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;
}

export namespace Table {
  export const filterSensitiveLog = (obj: Table): any => ({
    ...obj
  });
  export const isa = (o: any): o is Table => __isa(o, "Table");
}

/**
 * <p>An error record for table operations.</p>
 */
export interface TableError {
  __type?: "TableError";
  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The name of the table. For Hive compatibility, this must be entirely lowercase.</p>
   */
  TableName?: string;
}

export namespace TableError {
  export const filterSensitiveLog = (obj: TableError): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableError => __isa(o, "TableError");
}

/**
 * <p>A structure used to define a table.</p>
 */
export interface TableInput {
  __type?: "TableInput";
  /**
   * <p>A description of the table.</p>
   */
  Description?: string;

  /**
   * <p>The last time that the table was accessed.</p>
   */
  LastAccessTime?: Date;

  /**
   * <p>The last time that column statistics were computed for this table.</p>
   */
  LastAnalyzedTime?: Date;

  /**
   * <p>The table name. For Hive compatibility, this is folded to
   *       lowercase when it is stored.</p>
   */
  Name: string | undefined;

  /**
   * <p>The table owner.</p>
   */
  Owner?: string;

  /**
   * <p>These key-value pairs define properties associated with the table.</p>
   */
  Parameters?: { [key: string]: string };

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
   * <p>The retention time for this table.</p>
   */
  Retention?: number;

  /**
   * <p>A storage descriptor containing information about the physical storage
   *       of this table.</p>
   */
  StorageDescriptor?: StorageDescriptor;

  /**
   * <p>The type of this table (<code>EXTERNAL_TABLE</code>, <code>VIRTUAL_VIEW</code>, etc.).</p>
   */
  TableType?: string;

  /**
   * <p>If the table is a view, the expanded text of the view; otherwise <code>null</code>.</p>
   */
  ViewExpandedText?: string;

  /**
   * <p>If the table is a view, the original text of the view; otherwise <code>null</code>.</p>
   */
  ViewOriginalText?: string;
}

export namespace TableInput {
  export const filterSensitiveLog = (obj: TableInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableInput => __isa(o, "TableInput");
}

/**
 * <p>Specifies a version of a table.</p>
 */
export interface TableVersion {
  __type?: "TableVersion";
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
    ...obj
  });
  export const isa = (o: any): o is TableVersion => __isa(o, "TableVersion");
}

/**
 * <p>An error record for table-version operations.</p>
 */
export interface TableVersionError {
  __type?: "TableVersionError";
  /**
   * <p>The details about the error.</p>
   */
  ErrorDetail?: ErrorDetail;

  /**
   * <p>The name of the table in question.</p>
   */
  TableName?: string;

  /**
   * <p>The ID value of the version in question. A <code>VersionID</code> is a string representation of an integer. Each version is incremented by 1.</p>
   */
  VersionId?: string;
}

export namespace TableVersionError {
  export const filterSensitiveLog = (obj: TableVersionError): any => ({
    ...obj
  });
  export const isa = (o: any): o is TableVersionError =>
    __isa(o, "TableVersionError");
}

export interface TagResourceRequest {
  __type?: "TagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is TagResourceRequest =>
    __isa(o, "TagResourceRequest");
}

export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagResourceResponse =>
    __isa(o, "TagResourceResponse");
}

/**
 * <p>The sampling parameters that are associated with the machine learning transform.</p>
 */
export interface TaskRun {
  __type?: "TaskRun";
  /**
   * <p>The last point in time that the requested task run was completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The list of error strings associated with this task run.</p>
   */
  ErrorString?: string;

  /**
   * <p>The amount of time (in seconds) that the task run consumed resources.</p>
   */
  ExecutionTime?: number;

  /**
   * <p>The last point in time that the requested task run was updated.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The names of the log group for secure logging, associated with this task run.</p>
   */
  LogGroupName?: string;

  /**
   * <p>Specifies configuration properties associated with this task run.</p>
   */
  Properties?: TaskRunProperties;

  /**
   * <p>The date and time that this task run started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The current status of the requested task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The unique identifier for this task run.</p>
   */
  TaskRunId?: string;

  /**
   * <p>The unique identifier for the transform.</p>
   */
  TransformId?: string;
}

export namespace TaskRun {
  export const filterSensitiveLog = (obj: TaskRun): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskRun => __isa(o, "TaskRun");
}

/**
 * <p>The criteria that are used to filter the task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunFilterCriteria {
  __type?: "TaskRunFilterCriteria";
  /**
   * <p>Filter on task runs started after this date.</p>
   */
  StartedAfter?: Date;

  /**
   * <p>Filter on task runs started before this date.</p>
   */
  StartedBefore?: Date;

  /**
   * <p>The current status of the task run.</p>
   */
  Status?: TaskStatusType | string;

  /**
   * <p>The type of task run.</p>
   */
  TaskRunType?: TaskType | string;
}

export namespace TaskRunFilterCriteria {
  export const filterSensitiveLog = (obj: TaskRunFilterCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskRunFilterCriteria =>
    __isa(o, "TaskRunFilterCriteria");
}

/**
 * <p>The configuration properties for the task run.</p>
 */
export interface TaskRunProperties {
  __type?: "TaskRunProperties";
  /**
   * <p>The configuration properties for an exporting labels task run.</p>
   */
  ExportLabelsTaskRunProperties?: ExportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a find matches task run.</p>
   */
  FindMatchesTaskRunProperties?: FindMatchesTaskRunProperties;

  /**
   * <p>The configuration properties for an importing labels task run.</p>
   */
  ImportLabelsTaskRunProperties?: ImportLabelsTaskRunProperties;

  /**
   * <p>The configuration properties for a labeling set generation task run.</p>
   */
  LabelingSetGenerationTaskRunProperties?: LabelingSetGenerationTaskRunProperties;

  /**
   * <p>The type of task run.</p>
   */
  TaskType?: TaskType | string;
}

export namespace TaskRunProperties {
  export const filterSensitiveLog = (obj: TaskRunProperties): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskRunProperties =>
    __isa(o, "TaskRunProperties");
}

export enum TaskRunSortColumnType {
  STARTED = "STARTED",
  STATUS = "STATUS",
  TASK_RUN_TYPE = "TASK_RUN_TYPE"
}

/**
 * <p>The sorting criteria that are used to sort the list of task runs for the machine learning
 *       transform.</p>
 */
export interface TaskRunSortCriteria {
  __type?: "TaskRunSortCriteria";
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
  export const filterSensitiveLog = (obj: TaskRunSortCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is TaskRunSortCriteria =>
    __isa(o, "TaskRunSortCriteria");
}

export enum TaskStatusType {
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  SUCCEEDED = "SUCCEEDED",
  TIMEOUT = "TIMEOUT"
}

export enum TaskType {
  EVALUATION = "EVALUATION",
  EXPORT_LABELS = "EXPORT_LABELS",
  FIND_MATCHES = "FIND_MATCHES",
  IMPORT_LABELS = "IMPORT_LABELS",
  LABELING_SET_GENERATION = "LABELING_SET_GENERATION"
}

/**
 * <p>The criteria used to filter the machine learning transforms.</p>
 */
export interface TransformFilterCriteria {
  __type?: "TransformFilterCriteria";
  /**
   * <p>The time and date after which the transforms were created.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The time and date before which the transforms were created.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

  /**
   * <p>Filter on transforms last modified after this date.</p>
   */
  LastModifiedAfter?: Date;

  /**
   * <p>Filter on transforms last modified before this date.</p>
   */
  LastModifiedBefore?: Date;

  /**
   * <p>A unique transform name that is used to filter the machine learning transforms.</p>
   */
  Name?: string;

  /**
   * <p>Filters on datasets with a specific schema. The <code>Map<Column, Type></code>
   *       object is an array of key-value pairs representing the schema this transform accepts, where
   *         <code>Column</code> is the name of a column, and <code>Type</code> is the type of the data
   *       such as an integer or string. Has an upper bound of 100 columns.</p>
   */
  Schema?: SchemaColumn[];

  /**
   * <p>Filters the list of machine learning transforms by the last known status of the transforms (to indicate whether a transform can be used or not). One of "NOT_READY", "READY", or "DELETING".</p>
   */
  Status?: TransformStatusType | string;

  /**
   * <p>The type of machine learning transform that is used to filter the machine learning
   *       transforms.</p>
   */
  TransformType?: TransformType | string;
}

export namespace TransformFilterCriteria {
  export const filterSensitiveLog = (obj: TransformFilterCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformFilterCriteria =>
    __isa(o, "TransformFilterCriteria");
}

/**
 * <p>The algorithm-specific parameters that are associated with the machine learning
 *       transform.</p>
 */
export interface TransformParameters {
  __type?: "TransformParameters";
  /**
   * <p>The parameters for the find matches algorithm.</p>
   */
  FindMatchesParameters?: FindMatchesParameters;

  /**
   * <p>The type of machine learning transform.</p>
   * 	        <p>For information about the types of machine learning transforms, see <a href="http://docs.aws.amazon.com/glue/latest/dg/add-job-machine-learning-transform.html">Creating Machine Learning Transforms</a>.</p>
   */
  TransformType: TransformType | string | undefined;
}

export namespace TransformParameters {
  export const filterSensitiveLog = (obj: TransformParameters): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformParameters =>
    __isa(o, "TransformParameters");
}

export enum TransformSortColumnType {
  CREATED = "CREATED",
  LAST_MODIFIED = "LAST_MODIFIED",
  NAME = "NAME",
  STATUS = "STATUS",
  TRANSFORM_TYPE = "TRANSFORM_TYPE"
}

/**
 * <p>The sorting criteria that are associated with the machine learning transform.</p>
 */
export interface TransformSortCriteria {
  __type?: "TransformSortCriteria";
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
  export const filterSensitiveLog = (obj: TransformSortCriteria): any => ({
    ...obj
  });
  export const isa = (o: any): o is TransformSortCriteria =>
    __isa(o, "TransformSortCriteria");
}

export enum TransformStatusType {
  DELETING = "DELETING",
  NOT_READY = "NOT_READY",
  READY = "READY"
}

export enum TransformType {
  FIND_MATCHES = "FIND_MATCHES"
}

/**
 * <p>Information about a specific trigger.</p>
 */
export interface Trigger {
  __type?: "Trigger";
  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Id?: string;

  /**
   * <p>The name of the trigger.</p>
   */
  Name?: string;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The current state of the trigger.</p>
   */
  State?: TriggerState | string;

  /**
   * <p>The type of trigger that this is.</p>
   */
  Type?: TriggerType | string;

  /**
   * <p>The name of the workflow associated with the trigger.</p>
   */
  WorkflowName?: string;
}

export namespace Trigger {
  export const filterSensitiveLog = (obj: Trigger): any => ({
    ...obj
  });
  export const isa = (o: any): o is Trigger => __isa(o, "Trigger");
}

/**
 * <p>The details of a Trigger node present in the workflow.</p>
 */
export interface TriggerNodeDetails {
  __type?: "TriggerNodeDetails";
  /**
   * <p>The information of the trigger represented by the trigger node.</p>
   */
  Trigger?: Trigger;
}

export namespace TriggerNodeDetails {
  export const filterSensitiveLog = (obj: TriggerNodeDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is TriggerNodeDetails =>
    __isa(o, "TriggerNodeDetails");
}

export enum TriggerState {
  ACTIVATED = "ACTIVATED",
  ACTIVATING = "ACTIVATING",
  CREATED = "CREATED",
  CREATING = "CREATING",
  DEACTIVATED = "DEACTIVATED",
  DEACTIVATING = "DEACTIVATING",
  DELETING = "DELETING",
  UPDATING = "UPDATING"
}

export enum TriggerType {
  CONDITIONAL = "CONDITIONAL",
  ON_DEMAND = "ON_DEMAND",
  SCHEDULED = "SCHEDULED"
}

/**
 * <p>A structure used to provide information used to update a trigger. This object updates the
 *       previous trigger definition by overwriting it completely.</p>
 */
export interface TriggerUpdate {
  __type?: "TriggerUpdate";
  /**
   * <p>The actions initiated by this trigger.</p>
   */
  Actions?: Action[];

  /**
   * <p>A description of this trigger.</p>
   */
  Description?: string;

  /**
   * <p>Reserved for future use.</p>
   */
  Name?: string;

  /**
   * <p>The predicate of this trigger, which defines when it will fire.</p>
   */
  Predicate?: Predicate;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule (see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based
   *       Schedules for Jobs and Crawlers</a>. For example, to run
   *       something every day at 12:15 UTC, you would specify:
   *       <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;
}

export namespace TriggerUpdate {
  export const filterSensitiveLog = (obj: TriggerUpdate): any => ({
    ...obj
  });
  export const isa = (o: any): o is TriggerUpdate => __isa(o, "TriggerUpdate");
}

export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UntagResourceRequest =>
    __isa(o, "UntagResourceRequest");
}

export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UntagResourceResponse =>
    __isa(o, "UntagResourceResponse");
}

export enum UpdateBehavior {
  LOG = "LOG",
  UPDATE_IN_DATABASE = "UPDATE_IN_DATABASE"
}

export interface UpdateClassifierRequest {
  __type?: "UpdateClassifierRequest";
  /**
   * <p>A <code>CsvClassifier</code> object with updated fields.</p>
   */
  CsvClassifier?: UpdateCsvClassifierRequest;

  /**
   * <p>A <code>GrokClassifier</code> object with updated fields.</p>
   */
  GrokClassifier?: UpdateGrokClassifierRequest;

  /**
   * <p>A <code>JsonClassifier</code> object with updated fields.</p>
   */
  JsonClassifier?: UpdateJsonClassifierRequest;

  /**
   * <p>An <code>XMLClassifier</code> object with updated fields.</p>
   */
  XMLClassifier?: UpdateXMLClassifierRequest;
}

export namespace UpdateClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateClassifierRequest =>
    __isa(o, "UpdateClassifierRequest");
}

export interface UpdateClassifierResponse {
  __type?: "UpdateClassifierResponse";
}

export namespace UpdateClassifierResponse {
  export const filterSensitiveLog = (obj: UpdateClassifierResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateClassifierResponse =>
    __isa(o, "UpdateClassifierResponse");
}

export interface UpdateConnectionRequest {
  __type?: "UpdateConnectionRequest";
  /**
   * <p>The ID of the Data Catalog in which the connection resides. If none is provided, the AWS
   *       account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>A <code>ConnectionInput</code> object that redefines the connection
   *       in question.</p>
   */
  ConnectionInput: ConnectionInput | undefined;

  /**
   * <p>The name of the connection definition to update.</p>
   */
  Name: string | undefined;
}

export namespace UpdateConnectionRequest {
  export const filterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConnectionRequest =>
    __isa(o, "UpdateConnectionRequest");
}

export interface UpdateConnectionResponse {
  __type?: "UpdateConnectionResponse";
}

export namespace UpdateConnectionResponse {
  export const filterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateConnectionResponse =>
    __isa(o, "UpdateConnectionResponse");
}

export interface UpdateCrawlerRequest {
  __type?: "UpdateCrawlerRequest";
  /**
   * <p>A list of custom classifiers that the user
   *       has registered. By default, all built-in classifiers are included in a crawl,
   *       but these custom classifiers always override the default classifiers
   *       for a given classification.</p>
   */
  Classifiers?: string[];

  /**
   * <p>The crawler configuration information. This versioned JSON string allows users to specify
   *       aspects of a crawler's behavior. For more information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/crawler-configuration.html">Configuring a
   *         Crawler</a>.</p>
   */
  Configuration?: string;

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
   * <p>A description of the new crawler.</p>
   */
  Description?: string;

  /**
   * <p>Name of the new crawler.</p>
   */
  Name: string | undefined;

  /**
   * <p>The IAM role or Amazon Resource Name (ARN) of an IAM role that is used by the new crawler
   *       to access customer resources.</p>
   */
  Role?: string;

  /**
   * <p>A <code>cron</code> expression used to specify the schedule. For more information, see
   *         <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
   *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;

  /**
   * <p>The policy for the crawler's update and deletion behavior.</p>
   */
  SchemaChangePolicy?: SchemaChangePolicy;

  /**
   * <p>The table prefix used for catalog tables that are created.</p>
   */
  TablePrefix?: string;

  /**
   * <p>A list of targets to crawl.</p>
   */
  Targets?: CrawlerTargets;
}

export namespace UpdateCrawlerRequest {
  export const filterSensitiveLog = (obj: UpdateCrawlerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCrawlerRequest =>
    __isa(o, "UpdateCrawlerRequest");
}

export interface UpdateCrawlerResponse {
  __type?: "UpdateCrawlerResponse";
}

export namespace UpdateCrawlerResponse {
  export const filterSensitiveLog = (obj: UpdateCrawlerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCrawlerResponse =>
    __isa(o, "UpdateCrawlerResponse");
}

export interface UpdateCrawlerScheduleRequest {
  __type?: "UpdateCrawlerScheduleRequest";
  /**
   * <p>The name of the crawler whose schedule to update.</p>
   */
  CrawlerName: string | undefined;

  /**
   * <p>The updated <code>cron</code> expression used to specify the schedule. For more
   *       information, see <a href="http://docs.aws.amazon.com/glue/latest/dg/monitor-data-warehouse-schedule.html">Time-Based Schedules for Jobs and Crawlers</a>. For example, to run something every day
   *       at 12:15 UTC, specify <code>cron(15 12 * * ? *)</code>.</p>
   */
  Schedule?: string;
}

export namespace UpdateCrawlerScheduleRequest {
  export const filterSensitiveLog = (
    obj: UpdateCrawlerScheduleRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCrawlerScheduleRequest =>
    __isa(o, "UpdateCrawlerScheduleRequest");
}

export interface UpdateCrawlerScheduleResponse {
  __type?: "UpdateCrawlerScheduleResponse";
}

export namespace UpdateCrawlerScheduleResponse {
  export const filterSensitiveLog = (
    obj: UpdateCrawlerScheduleResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCrawlerScheduleResponse =>
    __isa(o, "UpdateCrawlerScheduleResponse");
}

/**
 * <p>Specifies a custom CSV classifier to be updated.</p>
 */
export interface UpdateCsvClassifierRequest {
  __type?: "UpdateCsvClassifierRequest";
  /**
   * <p>Enables the processing of files that contain only one column.</p>
   */
  AllowSingleColumn?: boolean;

  /**
   * <p>Indicates whether the CSV file contains a header.</p>
   */
  ContainsHeader?: CsvHeaderOption | string;

  /**
   * <p>A custom symbol to denote what separates each column entry in the row.</p>
   */
  Delimiter?: string;

  /**
   * <p>Specifies not to trim values before identifying the type of column values. The default value is true.</p>
   */
  DisableValueTrimming?: boolean;

  /**
   * <p>A list of strings representing column names.</p>
   */
  Header?: string[];

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>A custom symbol to denote what combines content into a single column value. It must be
   *       different from the column delimiter.</p>
   */
  QuoteSymbol?: string;
}

export namespace UpdateCsvClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateCsvClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateCsvClassifierRequest =>
    __isa(o, "UpdateCsvClassifierRequest");
}

export interface UpdateDatabaseRequest {
  __type?: "UpdateDatabaseRequest";
  /**
   * <p>The ID of the Data Catalog in which the metadata database resides. If none is provided,
   *       the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

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
}

export namespace UpdateDatabaseRequest {
  export const filterSensitiveLog = (obj: UpdateDatabaseRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDatabaseRequest =>
    __isa(o, "UpdateDatabaseRequest");
}

export interface UpdateDatabaseResponse {
  __type?: "UpdateDatabaseResponse";
}

export namespace UpdateDatabaseResponse {
  export const filterSensitiveLog = (obj: UpdateDatabaseResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDatabaseResponse =>
    __isa(o, "UpdateDatabaseResponse");
}

export interface UpdateDevEndpointRequest {
  __type?: "UpdateDevEndpointRequest";
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
   * <p>The list of public keys for the <code>DevEndpoint</code> to use.</p>
   */
  AddPublicKeys?: string[];

  /**
   * <p>Custom Python or Java libraries to be loaded in the <code>DevEndpoint</code>.</p>
   */
  CustomLibraries?: DevEndpointCustomLibraries;

  /**
   * <p>The list of argument keys to be deleted from the map of arguments used to configure the
   *         <code>DevEndpoint</code>.</p>
   */
  DeleteArguments?: string[];

  /**
   * <p>The list of public keys to be deleted from the <code>DevEndpoint</code>.</p>
   */
  DeletePublicKeys?: string[];

  /**
   * <p>The name of the <code>DevEndpoint</code> to be updated.</p>
   */
  EndpointName: string | undefined;

  /**
   * <p>The public key for the <code>DevEndpoint</code> to use.</p>
   */
  PublicKey?: string;

  /**
   * <p>
   *             <code>True</code> if the list of custom libraries to be loaded in the development endpoint
   *       needs to be updated, or <code>False</code> if otherwise.</p>
   */
  UpdateEtlLibraries?: boolean;
}

export namespace UpdateDevEndpointRequest {
  export const filterSensitiveLog = (obj: UpdateDevEndpointRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDevEndpointRequest =>
    __isa(o, "UpdateDevEndpointRequest");
}

export interface UpdateDevEndpointResponse {
  __type?: "UpdateDevEndpointResponse";
}

export namespace UpdateDevEndpointResponse {
  export const filterSensitiveLog = (obj: UpdateDevEndpointResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateDevEndpointResponse =>
    __isa(o, "UpdateDevEndpointResponse");
}

/**
 * <p>Specifies a grok classifier to update when passed to
 *       <code>UpdateClassifier</code>.</p>
 */
export interface UpdateGrokClassifierRequest {
  __type?: "UpdateGrokClassifierRequest";
  /**
   * <p>An identifier of the data format that the classifier matches, such as Twitter, JSON, Omniture logs,
   *       Amazon CloudWatch Logs, and so on.</p>
   */
  Classification?: string;

  /**
   * <p>Optional custom grok patterns used by this classifier.</p>
   */
  CustomPatterns?: string;

  /**
   * <p>The grok pattern used by this classifier.</p>
   */
  GrokPattern?: string;

  /**
   * <p>The name of the <code>GrokClassifier</code>.</p>
   */
  Name: string | undefined;
}

export namespace UpdateGrokClassifierRequest {
  export const filterSensitiveLog = (
    obj: UpdateGrokClassifierRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateGrokClassifierRequest =>
    __isa(o, "UpdateGrokClassifierRequest");
}

export interface UpdateJobRequest {
  __type?: "UpdateJobRequest";
  /**
   * <p>The name of the job definition to update.</p>
   */
  JobName: string | undefined;

  /**
   * <p>Specifies the values with which to update the job definition.</p>
   */
  JobUpdate: JobUpdate | undefined;
}

export namespace UpdateJobRequest {
  export const filterSensitiveLog = (obj: UpdateJobRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobRequest =>
    __isa(o, "UpdateJobRequest");
}

export interface UpdateJobResponse {
  __type?: "UpdateJobResponse";
  /**
   * <p>Returns the name of the updated job definition.</p>
   */
  JobName?: string;
}

export namespace UpdateJobResponse {
  export const filterSensitiveLog = (obj: UpdateJobResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJobResponse =>
    __isa(o, "UpdateJobResponse");
}

/**
 * <p>Specifies a JSON classifier to be updated.</p>
 */
export interface UpdateJsonClassifierRequest {
  __type?: "UpdateJsonClassifierRequest";
  /**
   * <p>A <code>JsonPath</code> string defining the JSON data for the classifier to classify. AWS
   *       Glue supports a subset of <code>JsonPath</code>, as described in <a href="https://docs.aws.amazon.com/glue/latest/dg/custom-classifier.html#custom-classifier-json">Writing JsonPath Custom Classifiers</a>.</p>
   */
  JsonPath?: string;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;
}

export namespace UpdateJsonClassifierRequest {
  export const filterSensitiveLog = (
    obj: UpdateJsonClassifierRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateJsonClassifierRequest =>
    __isa(o, "UpdateJsonClassifierRequest");
}

export interface UpdateMLTransformRequest {
  __type?: "UpdateMLTransformRequest";
  /**
   * <p>A description of the transform. The default is an empty string.</p>
   */
  Description?: string;

  /**
   * <p>This value determines which version of AWS Glue this machine learning transform is compatible with. Glue 1.0 is recommended for most customers. If the value is not set, the Glue compatibility defaults to Glue 0.9.  For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/release-notes.html#release-notes-versions">AWS Glue Versions</a> in the developer guide.</p>
   */
  GlueVersion?: string;

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
   * <p>The maximum number of times to retry a task for this transform after a task run fails.</p>
   */
  MaxRetries?: number;

  /**
   * <p>The unique name that you gave the transform when you created it.</p>
   */
  Name?: string;

  /**
   * <p>The number of workers of a defined <code>workerType</code> that are allocated when this task runs.</p>
   */
  NumberOfWorkers?: number;

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
   * <p>The timeout for a task run for this transform in minutes. This is the maximum time that a task run for this transform can consume resources before it is terminated and enters <code>TIMEOUT</code> status. The default is 2,880 minutes (48 hours).</p>
   */
  Timeout?: number;

  /**
   * <p>A unique identifier that was generated when the transform was created.</p>
   */
  TransformId: string | undefined;

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
}

export namespace UpdateMLTransformRequest {
  export const filterSensitiveLog = (obj: UpdateMLTransformRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMLTransformRequest =>
    __isa(o, "UpdateMLTransformRequest");
}

export interface UpdateMLTransformResponse {
  __type?: "UpdateMLTransformResponse";
  /**
   * <p>The unique identifier for the transform that was updated.</p>
   */
  TransformId?: string;
}

export namespace UpdateMLTransformResponse {
  export const filterSensitiveLog = (obj: UpdateMLTransformResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateMLTransformResponse =>
    __isa(o, "UpdateMLTransformResponse");
}

export interface UpdatePartitionRequest {
  __type?: "UpdatePartitionRequest";
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

  /**
   * <p>The new partition object to update the partition to.</p>
   */
  PartitionInput: PartitionInput | undefined;

  /**
   * <p>A list of the values defining the partition.</p>
   */
  PartitionValueList: string[] | undefined;

  /**
   * <p>The name of the table in which the partition to be updated is located.</p>
   */
  TableName: string | undefined;
}

export namespace UpdatePartitionRequest {
  export const filterSensitiveLog = (obj: UpdatePartitionRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePartitionRequest =>
    __isa(o, "UpdatePartitionRequest");
}

export interface UpdatePartitionResponse {
  __type?: "UpdatePartitionResponse";
}

export namespace UpdatePartitionResponse {
  export const filterSensitiveLog = (obj: UpdatePartitionResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdatePartitionResponse =>
    __isa(o, "UpdatePartitionResponse");
}

export interface UpdateTableRequest {
  __type?: "UpdateTableRequest";
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
    ...obj
  });
  export const isa = (o: any): o is UpdateTableRequest =>
    __isa(o, "UpdateTableRequest");
}

export interface UpdateTableResponse {
  __type?: "UpdateTableResponse";
}

export namespace UpdateTableResponse {
  export const filterSensitiveLog = (obj: UpdateTableResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTableResponse =>
    __isa(o, "UpdateTableResponse");
}

export interface UpdateTriggerRequest {
  __type?: "UpdateTriggerRequest";
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
  export const filterSensitiveLog = (obj: UpdateTriggerRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTriggerRequest =>
    __isa(o, "UpdateTriggerRequest");
}

export interface UpdateTriggerResponse {
  __type?: "UpdateTriggerResponse";
  /**
   * <p>The resulting trigger definition.</p>
   */
  Trigger?: Trigger;
}

export namespace UpdateTriggerResponse {
  export const filterSensitiveLog = (obj: UpdateTriggerResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateTriggerResponse =>
    __isa(o, "UpdateTriggerResponse");
}

export interface UpdateUserDefinedFunctionRequest {
  __type?: "UpdateUserDefinedFunctionRequest";
  /**
   * <p>The ID of the Data Catalog where the function to be updated is located. If none is
   *       provided, the AWS account ID is used by default.</p>
   */
  CatalogId?: string;

  /**
   * <p>The name of the catalog database where the function to be updated is
   *       located.</p>
   */
  DatabaseName: string | undefined;

  /**
   * <p>A <code>FunctionInput</code> object that redefines the function in the Data
   *       Catalog.</p>
   */
  FunctionInput: UserDefinedFunctionInput | undefined;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName: string | undefined;
}

export namespace UpdateUserDefinedFunctionRequest {
  export const filterSensitiveLog = (
    obj: UpdateUserDefinedFunctionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserDefinedFunctionRequest =>
    __isa(o, "UpdateUserDefinedFunctionRequest");
}

export interface UpdateUserDefinedFunctionResponse {
  __type?: "UpdateUserDefinedFunctionResponse";
}

export namespace UpdateUserDefinedFunctionResponse {
  export const filterSensitiveLog = (
    obj: UpdateUserDefinedFunctionResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateUserDefinedFunctionResponse =>
    __isa(o, "UpdateUserDefinedFunctionResponse");
}

export interface UpdateWorkflowRequest {
  __type?: "UpdateWorkflowRequest";
  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>The description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>Name of the workflow to be updated.</p>
   */
  Name: string | undefined;
}

export namespace UpdateWorkflowRequest {
  export const filterSensitiveLog = (obj: UpdateWorkflowRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkflowRequest =>
    __isa(o, "UpdateWorkflowRequest");
}

export interface UpdateWorkflowResponse {
  __type?: "UpdateWorkflowResponse";
  /**
   * <p>The name of the workflow which was specified in input.</p>
   */
  Name?: string;
}

export namespace UpdateWorkflowResponse {
  export const filterSensitiveLog = (obj: UpdateWorkflowResponse): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateWorkflowResponse =>
    __isa(o, "UpdateWorkflowResponse");
}

/**
 * <p>Specifies an XML classifier to be updated.</p>
 */
export interface UpdateXMLClassifierRequest {
  __type?: "UpdateXMLClassifierRequest";
  /**
   * <p>An identifier of the data format that the classifier matches.</p>
   */
  Classification?: string;

  /**
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This cannot identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;
}

export namespace UpdateXMLClassifierRequest {
  export const filterSensitiveLog = (obj: UpdateXMLClassifierRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateXMLClassifierRequest =>
    __isa(o, "UpdateXMLClassifierRequest");
}

/**
 * <p>Represents the equivalent of a Hive user-defined function
 *       (<code>UDF</code>) definition.</p>
 */
export interface UserDefinedFunction {
  __type?: "UserDefinedFunction";
  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The time at which the function was created.</p>
   */
  CreateTime?: Date;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];
}

export namespace UserDefinedFunction {
  export const filterSensitiveLog = (obj: UserDefinedFunction): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserDefinedFunction =>
    __isa(o, "UserDefinedFunction");
}

/**
 * <p>A structure used to create or update a user-defined function.</p>
 */
export interface UserDefinedFunctionInput {
  __type?: "UserDefinedFunctionInput";
  /**
   * <p>The Java class that contains the function code.</p>
   */
  ClassName?: string;

  /**
   * <p>The name of the function.</p>
   */
  FunctionName?: string;

  /**
   * <p>The owner of the function.</p>
   */
  OwnerName?: string;

  /**
   * <p>The owner type.</p>
   */
  OwnerType?: PrincipalType | string;

  /**
   * <p>The resource URIs for the function.</p>
   */
  ResourceUris?: ResourceUri[];
}

export namespace UserDefinedFunctionInput {
  export const filterSensitiveLog = (obj: UserDefinedFunctionInput): any => ({
    ...obj
  });
  export const isa = (o: any): o is UserDefinedFunctionInput =>
    __isa(o, "UserDefinedFunctionInput");
}

/**
 * <p>A value could not be validated.</p>
 */
export interface ValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "ValidationException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace ValidationException {
  export const filterSensitiveLog = (obj: ValidationException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ValidationException =>
    __isa(o, "ValidationException");
}

/**
 * <p>There was a version conflict.</p>
 */
export interface VersionMismatchException
  extends __SmithyException,
    $MetadataBearer {
  name: "VersionMismatchException";
  $fault: "client";
  /**
   * <p>A message describing the problem.</p>
   */
  Message?: string;
}

export namespace VersionMismatchException {
  export const filterSensitiveLog = (obj: VersionMismatchException): any => ({
    ...obj
  });
  export const isa = (o: any): o is VersionMismatchException =>
    __isa(o, "VersionMismatchException");
}

export type WorkerType = "G.1X" | "G.2X" | "Standard";

/**
 * <p>A workflow represents a flow in which AWS Glue components should be executed to complete a logical
 *       task.</p>
 */
export interface Workflow {
  __type?: "Workflow";
  /**
   * <p>The date and time when the workflow was created.</p>
   */
  CreatedOn?: Date;

  /**
   * <p>A collection of properties to be used as part of each execution of the workflow.</p>
   */
  DefaultRunProperties?: { [key: string]: string };

  /**
   * <p>A description of the workflow.</p>
   */
  Description?: string;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>The date and time when the workflow was last modified.</p>
   */
  LastModifiedOn?: Date;

  /**
   * <p>The information about the last execution of the workflow.</p>
   */
  LastRun?: WorkflowRun;

  /**
   * <p>The name of the workflow representing the flow.</p>
   */
  Name?: string;
}

export namespace Workflow {
  export const filterSensitiveLog = (obj: Workflow): any => ({
    ...obj
  });
  export const isa = (o: any): o is Workflow => __isa(o, "Workflow");
}

/**
 * <p>A workflow graph represents the complete workflow containing all the AWS Glue components present in the
 *       workflow and all the directed connections between them.</p>
 */
export interface WorkflowGraph {
  __type?: "WorkflowGraph";
  /**
   * <p>A list of all the directed connections between the nodes belonging to the workflow.</p>
   */
  Edges?: Edge[];

  /**
   * <p>A list of the the AWS Glue components belong to the workflow represented as nodes.</p>
   */
  Nodes?: Node[];
}

export namespace WorkflowGraph {
  export const filterSensitiveLog = (obj: WorkflowGraph): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowGraph => __isa(o, "WorkflowGraph");
}

/**
 * <p>A workflow run is an execution of a workflow providing all the runtime information.</p>
 */
export interface WorkflowRun {
  __type?: "WorkflowRun";
  /**
   * <p>The date and time when the workflow run completed.</p>
   */
  CompletedOn?: Date;

  /**
   * <p>The graph representing all the AWS Glue components that belong to the workflow as nodes and directed
   *       connections between them as edges.</p>
   */
  Graph?: WorkflowGraph;

  /**
   * <p>Name of the workflow which was executed.</p>
   */
  Name?: string;

  /**
   * <p>The date and time when the workflow run was started.</p>
   */
  StartedOn?: Date;

  /**
   * <p>The statistics of the run.</p>
   */
  Statistics?: WorkflowRunStatistics;

  /**
   * <p>The status of the workflow run.</p>
   */
  Status?: WorkflowRunStatus | string;

  /**
   * <p>The ID of this workflow run.</p>
   */
  WorkflowRunId?: string;

  /**
   * <p>The workflow run properties which were set during the run.</p>
   */
  WorkflowRunProperties?: { [key: string]: string };
}

export namespace WorkflowRun {
  export const filterSensitiveLog = (obj: WorkflowRun): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowRun => __isa(o, "WorkflowRun");
}

/**
 * <p>Workflow run statistics provides statistics about the workflow run.</p>
 */
export interface WorkflowRunStatistics {
  __type?: "WorkflowRunStatistics";
  /**
   * <p>Total number of Actions which have failed.</p>
   */
  FailedActions?: number;

  /**
   * <p>Total number Actions in running state.</p>
   */
  RunningActions?: number;

  /**
   * <p>Total number of Actions which have stopped.</p>
   */
  StoppedActions?: number;

  /**
   * <p>Total number of Actions which have succeeded.</p>
   */
  SucceededActions?: number;

  /**
   * <p>Total number of Actions which timed out.</p>
   */
  TimeoutActions?: number;

  /**
   * <p>Total number of Actions in the workflow run.</p>
   */
  TotalActions?: number;
}

export namespace WorkflowRunStatistics {
  export const filterSensitiveLog = (obj: WorkflowRunStatistics): any => ({
    ...obj
  });
  export const isa = (o: any): o is WorkflowRunStatistics =>
    __isa(o, "WorkflowRunStatistics");
}

export enum WorkflowRunStatus {
  COMPLETED = "COMPLETED",
  RUNNING = "RUNNING"
}

/**
 * <p>A classifier for <code>XML</code> content.</p>
 */
export interface XMLClassifier {
  __type?: "XMLClassifier";
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
   * <p>The name of the classifier.</p>
   */
  Name: string | undefined;

  /**
   * <p>The XML tag designating the element that contains each record in an XML document being
   *       parsed. This can't identify a self-closing element (closed by <code>/></code>). An empty
   *       row element that contains only attributes can be parsed as long as it ends with a closing tag
   *       (for example, <code><row item_a="A" item_b="B"></row></code> is okay, but
   *         <code><row item_a="A" item_b="B" /></code> is not).</p>
   */
  RowTag?: string;

  /**
   * <p>The version of this classifier.</p>
   */
  Version?: number;
}

export namespace XMLClassifier {
  export const filterSensitiveLog = (obj: XMLClassifier): any => ({
    ...obj
  });
  export const isa = (o: any): o is XMLClassifier => __isa(o, "XMLClassifier");
}
