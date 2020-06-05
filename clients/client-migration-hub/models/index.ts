import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export interface AccessDeniedException
  extends __SmithyException,
    $MetadataBearer {
  name: "AccessDeniedException";
  $fault: "client";
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
 * <p>The state of an application discovered through Migration Hub import, the AWS Agentless
 *          Discovery Connector, or the AWS Application Discovery Agent.</p>
 */
export interface ApplicationState {
  __type?: "ApplicationState";
  /**
   * <p>The configurationId from the Application Discovery Service that uniquely identifies an
   *          application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The current status of an application.</p>
   */
  ApplicationStatus?: ApplicationStatus | string;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace ApplicationState {
  export const filterSensitiveLog = (obj: ApplicationState): any => ({
    ...obj
  });
  export const isa = (o: any): o is ApplicationState =>
    __isa(o, "ApplicationState");
}

export enum ApplicationStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED"
}

export interface AssociateCreatedArtifactRequest {
  __type?: "AssociateCreatedArtifactRequest";
  /**
   * <p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS
   *          instance, etc.) </p>
   */
  CreatedArtifact: CreatedArtifact | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace AssociateCreatedArtifactRequest {
  export const filterSensitiveLog = (
    obj: AssociateCreatedArtifactRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateCreatedArtifactRequest =>
    __isa(o, "AssociateCreatedArtifactRequest");
}

export interface AssociateCreatedArtifactResult {
  __type?: "AssociateCreatedArtifactResult";
}

export namespace AssociateCreatedArtifactResult {
  export const filterSensitiveLog = (
    obj: AssociateCreatedArtifactResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateCreatedArtifactResult =>
    __isa(o, "AssociateCreatedArtifactResult");
}

export interface AssociateDiscoveredResourceRequest {
  __type?: "AssociateDiscoveredResourceRequest";
  /**
   * <p>Object representing a Resource.</p>
   */
  DiscoveredResource: DiscoveredResource | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace AssociateDiscoveredResourceRequest {
  export const filterSensitiveLog = (
    obj: AssociateDiscoveredResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDiscoveredResourceRequest =>
    __isa(o, "AssociateDiscoveredResourceRequest");
}

export interface AssociateDiscoveredResourceResult {
  __type?: "AssociateDiscoveredResourceResult";
}

export namespace AssociateDiscoveredResourceResult {
  export const filterSensitiveLog = (
    obj: AssociateDiscoveredResourceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AssociateDiscoveredResourceResult =>
    __isa(o, "AssociateDiscoveredResourceResult");
}

/**
 * <p>An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2
 *          instance, RDS instance, etc.).</p>
 */
export interface CreatedArtifact {
  __type?: "CreatedArtifact";
  /**
   * <p>A description that can be free-form text to record additional detail about the artifact
   *          for clarity or for later reference.</p>
   */
  Description?: string;

  /**
   * <p>An ARN that uniquely identifies the result of a migration task.</p>
   */
  Name: string | undefined;
}

export namespace CreatedArtifact {
  export const filterSensitiveLog = (obj: CreatedArtifact): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreatedArtifact =>
    __isa(o, "CreatedArtifact");
}

export interface CreateProgressUpdateStreamRequest {
  __type?: "CreateProgressUpdateStreamRequest";
  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName: string | undefined;
}

export namespace CreateProgressUpdateStreamRequest {
  export const filterSensitiveLog = (
    obj: CreateProgressUpdateStreamRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProgressUpdateStreamRequest =>
    __isa(o, "CreateProgressUpdateStreamRequest");
}

export interface CreateProgressUpdateStreamResult {
  __type?: "CreateProgressUpdateStreamResult";
}

export namespace CreateProgressUpdateStreamResult {
  export const filterSensitiveLog = (
    obj: CreateProgressUpdateStreamResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateProgressUpdateStreamResult =>
    __isa(o, "CreateProgressUpdateStreamResult");
}

export interface DeleteProgressUpdateStreamRequest {
  __type?: "DeleteProgressUpdateStreamRequest";
  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName: string | undefined;
}

export namespace DeleteProgressUpdateStreamRequest {
  export const filterSensitiveLog = (
    obj: DeleteProgressUpdateStreamRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProgressUpdateStreamRequest =>
    __isa(o, "DeleteProgressUpdateStreamRequest");
}

export interface DeleteProgressUpdateStreamResult {
  __type?: "DeleteProgressUpdateStreamResult";
}

export namespace DeleteProgressUpdateStreamResult {
  export const filterSensitiveLog = (
    obj: DeleteProgressUpdateStreamResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteProgressUpdateStreamResult =>
    __isa(o, "DeleteProgressUpdateStreamResult");
}

export interface DescribeApplicationStateRequest {
  __type?: "DescribeApplicationStateRequest";
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   */
  ApplicationId: string | undefined;
}

export namespace DescribeApplicationStateRequest {
  export const filterSensitiveLog = (
    obj: DescribeApplicationStateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationStateRequest =>
    __isa(o, "DescribeApplicationStateRequest");
}

export interface DescribeApplicationStateResult {
  __type?: "DescribeApplicationStateResult";
  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  ApplicationStatus?: ApplicationStatus | string;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export namespace DescribeApplicationStateResult {
  export const filterSensitiveLog = (
    obj: DescribeApplicationStateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeApplicationStateResult =>
    __isa(o, "DescribeApplicationStateResult");
}

export interface DescribeMigrationTaskRequest {
  __type?: "DescribeMigrationTaskRequest";
  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace DescribeMigrationTaskRequest {
  export const filterSensitiveLog = (
    obj: DescribeMigrationTaskRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMigrationTaskRequest =>
    __isa(o, "DescribeMigrationTaskRequest");
}

export interface DescribeMigrationTaskResult {
  __type?: "DescribeMigrationTaskResult";
  /**
   * <p>Object encapsulating information about the migration task.</p>
   */
  MigrationTask?: MigrationTask;
}

export namespace DescribeMigrationTaskResult {
  export const filterSensitiveLog = (
    obj: DescribeMigrationTaskResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMigrationTaskResult =>
    __isa(o, "DescribeMigrationTaskResult");
}

export interface DisassociateCreatedArtifactRequest {
  __type?: "DisassociateCreatedArtifactRequest";
  /**
   * <p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS
   *          instance, etc.)</p>
   */
  CreatedArtifactName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique identifier that references the migration task to be disassociated with the
   *          artifact. <i>Do not store personal data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace DisassociateCreatedArtifactRequest {
  export const filterSensitiveLog = (
    obj: DisassociateCreatedArtifactRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateCreatedArtifactRequest =>
    __isa(o, "DisassociateCreatedArtifactRequest");
}

export interface DisassociateCreatedArtifactResult {
  __type?: "DisassociateCreatedArtifactResult";
}

export namespace DisassociateCreatedArtifactResult {
  export const filterSensitiveLog = (
    obj: DisassociateCreatedArtifactResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateCreatedArtifactResult =>
    __isa(o, "DisassociateCreatedArtifactResult");
}

export interface DisassociateDiscoveredResourceRequest {
  __type?: "DisassociateDiscoveredResourceRequest";
  /**
   * <p>ConfigurationId of the Application Discovery Service resource to be
   *          disassociated.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace DisassociateDiscoveredResourceRequest {
  export const filterSensitiveLog = (
    obj: DisassociateDiscoveredResourceRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateDiscoveredResourceRequest =>
    __isa(o, "DisassociateDiscoveredResourceRequest");
}

export interface DisassociateDiscoveredResourceResult {
  __type?: "DisassociateDiscoveredResourceResult";
}

export namespace DisassociateDiscoveredResourceResult {
  export const filterSensitiveLog = (
    obj: DisassociateDiscoveredResourceResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisassociateDiscoveredResourceResult =>
    __isa(o, "DisassociateDiscoveredResourceResult");
}

/**
 * <p>Object representing the on-premises resource being migrated.</p>
 */
export interface DiscoveredResource {
  __type?: "DiscoveredResource";
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          on-premise resource.</p>
   */
  ConfigurationId: string | undefined;

  /**
   * <p>A description that can be free-form text to record additional detail about the
   *          discovered resource for clarity or later reference.</p>
   */
  Description?: string;
}

export namespace DiscoveredResource {
  export const filterSensitiveLog = (obj: DiscoveredResource): any => ({
    ...obj
  });
  export const isa = (o: any): o is DiscoveredResource =>
    __isa(o, "DiscoveredResource");
}

/**
 * <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
 */
export interface DryRunOperation extends __SmithyException, $MetadataBearer {
  name: "DryRunOperation";
  $fault: "client";
  Message?: string;
}

export namespace DryRunOperation {
  export const filterSensitiveLog = (obj: DryRunOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is DryRunOperation =>
    __isa(o, "DryRunOperation");
}

/**
 * <p>The home region is not set. Set the home region to continue.</p>
 */
export interface HomeRegionNotSetException
  extends __SmithyException,
    $MetadataBearer {
  name: "HomeRegionNotSetException";
  $fault: "client";
  Message?: string;
}

export namespace HomeRegionNotSetException {
  export const filterSensitiveLog = (obj: HomeRegionNotSetException): any => ({
    ...obj
  });
  export const isa = (o: any): o is HomeRegionNotSetException =>
    __isa(o, "HomeRegionNotSetException");
}

export interface ImportMigrationTaskRequest {
  __type?: "ImportMigrationTaskRequest";
  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. ></p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace ImportMigrationTaskRequest {
  export const filterSensitiveLog = (obj: ImportMigrationTaskRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportMigrationTaskRequest =>
    __isa(o, "ImportMigrationTaskRequest");
}

export interface ImportMigrationTaskResult {
  __type?: "ImportMigrationTaskResult";
}

export namespace ImportMigrationTaskResult {
  export const filterSensitiveLog = (obj: ImportMigrationTaskResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ImportMigrationTaskResult =>
    __isa(o, "ImportMigrationTaskResult");
}

/**
 * <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 */
export interface InternalServerError
  extends __SmithyException,
    $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
  Message?: string;
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj
  });
  export const isa = (o: any): o is InternalServerError =>
    __isa(o, "InternalServerError");
}

/**
 * <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 */
export interface InvalidInputException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidInputException";
  $fault: "client";
  Message?: string;
}

export namespace InvalidInputException {
  export const filterSensitiveLog = (obj: InvalidInputException): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidInputException =>
    __isa(o, "InvalidInputException");
}

export interface ListApplicationStatesRequest {
  __type?: "ListApplicationStatesRequest";
  /**
   * <p>The configurationIds from the Application Discovery Service that uniquely identifies
   *          your applications.</p>
   */
  ApplicationIds?: string[];

  /**
   * <p>Maximum number of results to be returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationStatesRequest {
  export const filterSensitiveLog = (
    obj: ListApplicationStatesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApplicationStatesRequest =>
    __isa(o, "ListApplicationStatesRequest");
}

export interface ListApplicationStatesResult {
  __type?: "ListApplicationStatesResult";
  /**
   * <p>A list of Applications that exist in Application Discovery Service.</p>
   */
  ApplicationStateList?: ApplicationState[];

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationStatesResult {
  export const filterSensitiveLog = (
    obj: ListApplicationStatesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListApplicationStatesResult =>
    __isa(o, "ListApplicationStatesResult");
}

export interface ListCreatedArtifactsRequest {
  __type?: "ListCreatedArtifactsRequest";
  /**
   * <p>Maximum number of results to be returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace ListCreatedArtifactsRequest {
  export const filterSensitiveLog = (
    obj: ListCreatedArtifactsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCreatedArtifactsRequest =>
    __isa(o, "ListCreatedArtifactsRequest");
}

export interface ListCreatedArtifactsResult {
  __type?: "ListCreatedArtifactsResult";
  /**
   * <p>List of created artifacts up to the maximum number of results specified in the
   *          request.</p>
   */
  CreatedArtifactList?: CreatedArtifact[];

  /**
   * <p>If there are more created artifacts than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListCreatedArtifactsResult {
  export const filterSensitiveLog = (obj: ListCreatedArtifactsResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListCreatedArtifactsResult =>
    __isa(o, "ListCreatedArtifactsResult");
}

export interface ListDiscoveredResourcesRequest {
  __type?: "ListDiscoveredResourcesRequest";
  /**
   * <p>The maximum number of results returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>The name of the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;
}

export namespace ListDiscoveredResourcesRequest {
  export const filterSensitiveLog = (
    obj: ListDiscoveredResourcesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDiscoveredResourcesRequest =>
    __isa(o, "ListDiscoveredResourcesRequest");
}

export interface ListDiscoveredResourcesResult {
  __type?: "ListDiscoveredResourcesResult";
  /**
   * <p>Returned list of discovered resources associated with the given MigrationTask.</p>
   */
  DiscoveredResourceList?: DiscoveredResource[];

  /**
   * <p>If there are more discovered resources than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListDiscoveredResourcesResult {
  export const filterSensitiveLog = (
    obj: ListDiscoveredResourcesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListDiscoveredResourcesResult =>
    __isa(o, "ListDiscoveredResourcesResult");
}

export interface ListMigrationTasksRequest {
  __type?: "ListMigrationTasksRequest";
  /**
   * <p>Value to specify how many results are returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>Filter migration tasks by discovered resource name.</p>
   */
  ResourceName?: string;
}

export namespace ListMigrationTasksRequest {
  export const filterSensitiveLog = (obj: ListMigrationTasksRequest): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMigrationTasksRequest =>
    __isa(o, "ListMigrationTasksRequest");
}

export interface ListMigrationTasksResult {
  __type?: "ListMigrationTasksResult";
  /**
   * <p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>,
   *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
   *          and the <code>UpdateDateTime</code> for each task.</p>
   */
  MigrationTaskSummaryList?: MigrationTaskSummary[];

  /**
   * <p>If there are more migration tasks than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListMigrationTasksResult {
  export const filterSensitiveLog = (obj: ListMigrationTasksResult): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListMigrationTasksResult =>
    __isa(o, "ListMigrationTasksResult");
}

export interface ListProgressUpdateStreamsRequest {
  __type?: "ListProgressUpdateStreamsRequest";
  /**
   * <p>Filter to limit the maximum number of results to list per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListProgressUpdateStreamsRequest {
  export const filterSensitiveLog = (
    obj: ListProgressUpdateStreamsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProgressUpdateStreamsRequest =>
    __isa(o, "ListProgressUpdateStreamsRequest");
}

export interface ListProgressUpdateStreamsResult {
  __type?: "ListProgressUpdateStreamsResult";
  /**
   * <p>If there are more streams created than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>List of progress update streams up to the max number of results passed in the
   *          input.</p>
   */
  ProgressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[];
}

export namespace ListProgressUpdateStreamsResult {
  export const filterSensitiveLog = (
    obj: ListProgressUpdateStreamsResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ListProgressUpdateStreamsResult =>
    __isa(o, "ListProgressUpdateStreamsResult");
}

/**
 * <p>Represents a migration task in a migration tool.</p>
 */
export interface MigrationTask {
  __type?: "MigrationTask";
  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName?: string;

  /**
   * <p>A name that identifies the vendor of the migration tool being used.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Information about the resource that is being migrated. This data will be used to map the
   *          task to a resource in the Application Discovery Service repository.</p>
   */
  ResourceAttributeList?: ResourceAttribute[];

  /**
   * <p>Task object encapsulating task information.</p>
   */
  Task?: Task;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;
}

export namespace MigrationTask {
  export const filterSensitiveLog = (obj: MigrationTask): any => ({
    ...obj
  });
  export const isa = (o: any): o is MigrationTask => __isa(o, "MigrationTask");
}

/**
 * <p>MigrationTaskSummary includes <code>MigrationTaskName</code>,
 *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
 *          and <code>UpdateDateTime</code> for each task.</p>
 */
export interface MigrationTaskSummary {
  __type?: "MigrationTaskSummary";
  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName?: string;

  /**
   * <p>Indication of the percentage completion of the task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>An AWS resource used for access control. It should uniquely identify the migration tool
   *          as it is used for all updates made by the tool.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Status of the task.</p>
   */
  Status?: Status | string;

  /**
   * <p>Detail information of what is being done within the overall status state.</p>
   */
  StatusDetail?: string;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;
}

export namespace MigrationTaskSummary {
  export const filterSensitiveLog = (obj: MigrationTaskSummary): any => ({
    ...obj
  });
  export const isa = (o: any): o is MigrationTaskSummary =>
    __isa(o, "MigrationTaskSummary");
}

export interface NotifyApplicationStateRequest {
  __type?: "NotifyApplicationStateRequest";
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  Status: ApplicationStatus | string | undefined;

  /**
   * <p>The timestamp when the application state changed.</p>
   */
  UpdateDateTime?: Date;
}

export namespace NotifyApplicationStateRequest {
  export const filterSensitiveLog = (
    obj: NotifyApplicationStateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyApplicationStateRequest =>
    __isa(o, "NotifyApplicationStateRequest");
}

export interface NotifyApplicationStateResult {
  __type?: "NotifyApplicationStateResult";
}

export namespace NotifyApplicationStateResult {
  export const filterSensitiveLog = (
    obj: NotifyApplicationStateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyApplicationStateResult =>
    __isa(o, "NotifyApplicationStateResult");
}

export interface NotifyMigrationTaskStateRequest {
  __type?: "NotifyMigrationTaskStateRequest";
  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Number of seconds after the UpdateDateTime within which the Migration Hub can expect an
   *          update. If Migration Hub does not receive an update within the specified interval, then the
   *          migration task will be considered stale.</p>
   */
  NextUpdateSeconds: number | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Information about the task's progress and status.</p>
   */
  Task: Task | undefined;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime: Date | undefined;
}

export namespace NotifyMigrationTaskStateRequest {
  export const filterSensitiveLog = (
    obj: NotifyMigrationTaskStateRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyMigrationTaskStateRequest =>
    __isa(o, "NotifyMigrationTaskStateRequest");
}

export interface NotifyMigrationTaskStateResult {
  __type?: "NotifyMigrationTaskStateResult";
}

export namespace NotifyMigrationTaskStateResult {
  export const filterSensitiveLog = (
    obj: NotifyMigrationTaskStateResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotifyMigrationTaskStateResult =>
    __isa(o, "NotifyMigrationTaskStateResult");
}

/**
 * <p>Exception raised when there are problems accessing Application Discovery Service
 *          (Application Discovery Service); most likely due to a misconfigured policy or the
 *             <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
 */
export interface PolicyErrorException
  extends __SmithyException,
    $MetadataBearer {
  name: "PolicyErrorException";
  $fault: "client";
  Message?: string;
}

export namespace PolicyErrorException {
  export const filterSensitiveLog = (obj: PolicyErrorException): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyErrorException =>
    __isa(o, "PolicyErrorException");
}

/**
 * <p>Summary of the AWS resource used for access control that is implicitly linked to your
 *          AWS account.</p>
 */
export interface ProgressUpdateStreamSummary {
  __type?: "ProgressUpdateStreamSummary";
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName?: string;
}

export namespace ProgressUpdateStreamSummary {
  export const filterSensitiveLog = (
    obj: ProgressUpdateStreamSummary
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProgressUpdateStreamSummary =>
    __isa(o, "ProgressUpdateStreamSummary");
}

export interface PutResourceAttributesRequest {
  __type?: "PutResourceAttributesRequest";
  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Information about the resource that is being migrated. This data will be used to map the
   *          task to a resource in the Application Discovery Service repository.</p>
   *          <note>
   *             <p>Takes the object array of <code>ResourceAttribute</code> where the <code>Type</code>
   *             field is reserved for the following values: <code>IPV4_ADDRESS | IPV6_ADDRESS |
   *                MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH
   *                | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER</code> where the identifying value can be a
   *             string up to 256 characters.</p>
   *          </note>
   *          <important>
   *             <ul>
   *                <li>
   *
   *                   <p>If any "VM" related value is set for a <code>ResourceAttribute</code> object,
   *                   it is required that <code>VM_MANAGER_ID</code>, as a minimum, is always set. If
   *                      <code>VM_MANAGER_ID</code> is not set, then all "VM" fields will be discarded
   *                   and "VM" fields will not be used for matching the migration task to a server in
   *                   Application Discovery Service repository. See the <a href="https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples">Example</a> section below for a use case of specifying "VM" related
   *                   values.</p>
   *                </li>
   *                <li>
   *                   <p> If a server you are trying to match has multiple IP or MAC addresses, you
   *                   should provide as many as you know in separate type/value pairs passed to the
   *                      <code>ResourceAttributeList</code> parameter to maximize the chances of
   *                   matching.</p>
   *                </li>
   *             </ul>
   *          </important>
   */
  ResourceAttributeList: ResourceAttribute[] | undefined;
}

export namespace PutResourceAttributesRequest {
  export const filterSensitiveLog = (
    obj: PutResourceAttributesRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourceAttributesRequest =>
    __isa(o, "PutResourceAttributesRequest");
}

export interface PutResourceAttributesResult {
  __type?: "PutResourceAttributesResult";
}

export namespace PutResourceAttributesResult {
  export const filterSensitiveLog = (
    obj: PutResourceAttributesResult
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutResourceAttributesResult =>
    __isa(o, "PutResourceAttributesResult");
}

/**
 * <p>Attribute associated with a resource.</p>
 *          <p>Note the corresponding format required per type listed below:</p>
 *
 *
 *          <dl>
 *             <dt>IPV4</dt>
 *             <dd>
 *                <p>
 *                   <code>x.x.x.x</code>
 *                </p>
 *                <p>
 *                   <i>where x is an integer in the range [0,255]</i>
 *                </p>
 *             </dd>
 *             <dt>IPV6</dt>
 *             <dd>
 *                <p>
 *                   <code>y : y : y : y : y : y : y : y</code>
 *                </p>
 *                <p>
 *                   <i>where y is a hexadecimal between 0 and FFFF. [0,
 *                   FFFF]</i>
 *                </p>
 *             </dd>
 *             <dt>MAC_ADDRESS</dt>
 *             <dd>
 *                <p>
 *                   <code>^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$</code>
 *                </p>
 *             </dd>
 *             <dt>FQDN</dt>
 *             <dd>
 *                <p>
 *                   <code>^[^<>{}\\\\/?,=\\p{Cntrl}]{1,256}$</code>
 *                </p>
 *             </dd>
 *          </dl>
 */
export interface ResourceAttribute {
  __type?: "ResourceAttribute";
  /**
   * <p>Type of resource.</p>
   */
  Type: ResourceAttributeType | string | undefined;

  /**
   * <p>Value of the resource type.</p>
   */
  Value: string | undefined;
}

export namespace ResourceAttribute {
  export const filterSensitiveLog = (obj: ResourceAttribute): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceAttribute =>
    __isa(o, "ResourceAttribute");
}

export enum ResourceAttributeType {
  BIOS_ID = "BIOS_ID",
  FQDN = "FQDN",
  IPV4_ADDRESS = "IPV4_ADDRESS",
  IPV6_ADDRESS = "IPV6_ADDRESS",
  MAC_ADDRESS = "MAC_ADDRESS",
  MOTHERBOARD_SERIAL_NUMBER = "MOTHERBOARD_SERIAL_NUMBER",
  VM_MANAGED_OBJECT_REFERENCE = "VM_MANAGED_OBJECT_REFERENCE",
  VM_MANAGER_ID = "VM_MANAGER_ID",
  VM_NAME = "VM_NAME",
  VM_PATH = "VM_PATH"
}

/**
 * <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceNotFoundException =>
    __isa(o, "ResourceNotFoundException");
}

/**
 * <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  Message?: string;
}

export namespace ServiceUnavailableException {
  export const filterSensitiveLog = (
    obj: ServiceUnavailableException
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceUnavailableException =>
    __isa(o, "ServiceUnavailableException");
}

export enum Status {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED"
}

/**
 * <p>Task object encapsulating task information.</p>
 */
export interface Task {
  __type?: "Task";
  /**
   * <p>Indication of the percentage completion of the task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>Status of the task - Not Started, In-Progress, Complete.</p>
   */
  Status: Status | string | undefined;

  /**
   * <p>Details of task status as notified by a migration tool. A tool might use this field to
   *          provide clarifying information about the status that is unique to that tool or that
   *          explains an error state.</p>
   */
  StatusDetail?: string;
}

export namespace Task {
  export const filterSensitiveLog = (obj: Task): any => ({
    ...obj
  });
  export const isa = (o: any): o is Task => __isa(o, "Task");
}

/**
 * <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 */
export interface UnauthorizedOperation
  extends __SmithyException,
    $MetadataBearer {
  name: "UnauthorizedOperation";
  $fault: "client";
  Message?: string;
}

export namespace UnauthorizedOperation {
  export const filterSensitiveLog = (obj: UnauthorizedOperation): any => ({
    ...obj
  });
  export const isa = (o: any): o is UnauthorizedOperation =>
    __isa(o, "UnauthorizedOperation");
}
