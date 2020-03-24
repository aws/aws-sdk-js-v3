import {
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
  export function isa(o: any): o is AccessDeniedException {
    return __isa(o, "AccessDeniedException");
  }
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
  export function isa(o: any): o is ApplicationState {
    return __isa(o, "ApplicationState");
  }
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
  export function isa(o: any): o is AssociateCreatedArtifactRequest {
    return __isa(o, "AssociateCreatedArtifactRequest");
  }
}

export interface AssociateCreatedArtifactResult extends $MetadataBearer {
  __type?: "AssociateCreatedArtifactResult";
}

export namespace AssociateCreatedArtifactResult {
  export function isa(o: any): o is AssociateCreatedArtifactResult {
    return __isa(o, "AssociateCreatedArtifactResult");
  }
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
  export function isa(o: any): o is AssociateDiscoveredResourceRequest {
    return __isa(o, "AssociateDiscoveredResourceRequest");
  }
}

export interface AssociateDiscoveredResourceResult extends $MetadataBearer {
  __type?: "AssociateDiscoveredResourceResult";
}

export namespace AssociateDiscoveredResourceResult {
  export function isa(o: any): o is AssociateDiscoveredResourceResult {
    return __isa(o, "AssociateDiscoveredResourceResult");
  }
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
  export function isa(o: any): o is CreateProgressUpdateStreamRequest {
    return __isa(o, "CreateProgressUpdateStreamRequest");
  }
}

export interface CreateProgressUpdateStreamResult extends $MetadataBearer {
  __type?: "CreateProgressUpdateStreamResult";
}

export namespace CreateProgressUpdateStreamResult {
  export function isa(o: any): o is CreateProgressUpdateStreamResult {
    return __isa(o, "CreateProgressUpdateStreamResult");
  }
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
  export function isa(o: any): o is CreatedArtifact {
    return __isa(o, "CreatedArtifact");
  }
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
  export function isa(o: any): o is DeleteProgressUpdateStreamRequest {
    return __isa(o, "DeleteProgressUpdateStreamRequest");
  }
}

export interface DeleteProgressUpdateStreamResult extends $MetadataBearer {
  __type?: "DeleteProgressUpdateStreamResult";
}

export namespace DeleteProgressUpdateStreamResult {
  export function isa(o: any): o is DeleteProgressUpdateStreamResult {
    return __isa(o, "DeleteProgressUpdateStreamResult");
  }
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
  export function isa(o: any): o is DescribeApplicationStateRequest {
    return __isa(o, "DescribeApplicationStateRequest");
  }
}

export interface DescribeApplicationStateResult extends $MetadataBearer {
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
  export function isa(o: any): o is DescribeApplicationStateResult {
    return __isa(o, "DescribeApplicationStateResult");
  }
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
  export function isa(o: any): o is DescribeMigrationTaskRequest {
    return __isa(o, "DescribeMigrationTaskRequest");
  }
}

export interface DescribeMigrationTaskResult extends $MetadataBearer {
  __type?: "DescribeMigrationTaskResult";
  /**
   * <p>Object encapsulating information about the migration task.</p>
   */
  MigrationTask?: MigrationTask;
}

export namespace DescribeMigrationTaskResult {
  export function isa(o: any): o is DescribeMigrationTaskResult {
    return __isa(o, "DescribeMigrationTaskResult");
  }
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
  export function isa(o: any): o is DisassociateCreatedArtifactRequest {
    return __isa(o, "DisassociateCreatedArtifactRequest");
  }
}

export interface DisassociateCreatedArtifactResult extends $MetadataBearer {
  __type?: "DisassociateCreatedArtifactResult";
}

export namespace DisassociateCreatedArtifactResult {
  export function isa(o: any): o is DisassociateCreatedArtifactResult {
    return __isa(o, "DisassociateCreatedArtifactResult");
  }
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
  export function isa(o: any): o is DisassociateDiscoveredResourceRequest {
    return __isa(o, "DisassociateDiscoveredResourceRequest");
  }
}

export interface DisassociateDiscoveredResourceResult extends $MetadataBearer {
  __type?: "DisassociateDiscoveredResourceResult";
}

export namespace DisassociateDiscoveredResourceResult {
  export function isa(o: any): o is DisassociateDiscoveredResourceResult {
    return __isa(o, "DisassociateDiscoveredResourceResult");
  }
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
  export function isa(o: any): o is DiscoveredResource {
    return __isa(o, "DiscoveredResource");
  }
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
  export function isa(o: any): o is DryRunOperation {
    return __isa(o, "DryRunOperation");
  }
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
  export function isa(o: any): o is HomeRegionNotSetException {
    return __isa(o, "HomeRegionNotSetException");
  }
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
  export function isa(o: any): o is ImportMigrationTaskRequest {
    return __isa(o, "ImportMigrationTaskRequest");
  }
}

export interface ImportMigrationTaskResult extends $MetadataBearer {
  __type?: "ImportMigrationTaskResult";
}

export namespace ImportMigrationTaskResult {
  export function isa(o: any): o is ImportMigrationTaskResult {
    return __isa(o, "ImportMigrationTaskResult");
  }
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
  export function isa(o: any): o is InternalServerError {
    return __isa(o, "InternalServerError");
  }
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
  export function isa(o: any): o is InvalidInputException {
    return __isa(o, "InvalidInputException");
  }
}

export interface ListApplicationStatesRequest {
  __type?: "ListApplicationStatesRequest";
  /**
   * <p>The configurationIds from the Application Discovery Service that uniquely identifies
   *          your applications.</p>
   */
  ApplicationIds?: Array<string>;

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
  export function isa(o: any): o is ListApplicationStatesRequest {
    return __isa(o, "ListApplicationStatesRequest");
  }
}

export interface ListApplicationStatesResult extends $MetadataBearer {
  __type?: "ListApplicationStatesResult";
  /**
   * <p>A list of Applications that exist in Application Discovery Service.</p>
   */
  ApplicationStateList?: Array<ApplicationState>;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;
}

export namespace ListApplicationStatesResult {
  export function isa(o: any): o is ListApplicationStatesResult {
    return __isa(o, "ListApplicationStatesResult");
  }
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
  export function isa(o: any): o is ListCreatedArtifactsRequest {
    return __isa(o, "ListCreatedArtifactsRequest");
  }
}

export interface ListCreatedArtifactsResult extends $MetadataBearer {
  __type?: "ListCreatedArtifactsResult";
  /**
   * <p>List of created artifacts up to the maximum number of results specified in the
   *          request.</p>
   */
  CreatedArtifactList?: Array<CreatedArtifact>;

  /**
   * <p>If there are more created artifacts than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListCreatedArtifactsResult {
  export function isa(o: any): o is ListCreatedArtifactsResult {
    return __isa(o, "ListCreatedArtifactsResult");
  }
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
  export function isa(o: any): o is ListDiscoveredResourcesRequest {
    return __isa(o, "ListDiscoveredResourcesRequest");
  }
}

export interface ListDiscoveredResourcesResult extends $MetadataBearer {
  __type?: "ListDiscoveredResourcesResult";
  /**
   * <p>Returned list of discovered resources associated with the given MigrationTask.</p>
   */
  DiscoveredResourceList?: Array<DiscoveredResource>;

  /**
   * <p>If there are more discovered resources than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListDiscoveredResourcesResult {
  export function isa(o: any): o is ListDiscoveredResourcesResult {
    return __isa(o, "ListDiscoveredResourcesResult");
  }
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
  export function isa(o: any): o is ListMigrationTasksRequest {
    return __isa(o, "ListMigrationTasksRequest");
  }
}

export interface ListMigrationTasksResult extends $MetadataBearer {
  __type?: "ListMigrationTasksResult";
  /**
   * <p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>,
   *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
   *          and the <code>UpdateDateTime</code> for each task.</p>
   */
  MigrationTaskSummaryList?: Array<MigrationTaskSummary>;

  /**
   * <p>If there are more migration tasks than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export namespace ListMigrationTasksResult {
  export function isa(o: any): o is ListMigrationTasksResult {
    return __isa(o, "ListMigrationTasksResult");
  }
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
  export function isa(o: any): o is ListProgressUpdateStreamsRequest {
    return __isa(o, "ListProgressUpdateStreamsRequest");
  }
}

export interface ListProgressUpdateStreamsResult extends $MetadataBearer {
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
  ProgressUpdateStreamSummaryList?: Array<ProgressUpdateStreamSummary>;
}

export namespace ListProgressUpdateStreamsResult {
  export function isa(o: any): o is ListProgressUpdateStreamsResult {
    return __isa(o, "ListProgressUpdateStreamsResult");
  }
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
  ResourceAttributeList?: Array<ResourceAttribute>;

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
  export function isa(o: any): o is MigrationTask {
    return __isa(o, "MigrationTask");
  }
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
  export function isa(o: any): o is MigrationTaskSummary {
    return __isa(o, "MigrationTaskSummary");
  }
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
  export function isa(o: any): o is NotifyApplicationStateRequest {
    return __isa(o, "NotifyApplicationStateRequest");
  }
}

export interface NotifyApplicationStateResult extends $MetadataBearer {
  __type?: "NotifyApplicationStateResult";
}

export namespace NotifyApplicationStateResult {
  export function isa(o: any): o is NotifyApplicationStateResult {
    return __isa(o, "NotifyApplicationStateResult");
  }
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
  export function isa(o: any): o is NotifyMigrationTaskStateRequest {
    return __isa(o, "NotifyMigrationTaskStateRequest");
  }
}

export interface NotifyMigrationTaskStateResult extends $MetadataBearer {
  __type?: "NotifyMigrationTaskStateResult";
}

export namespace NotifyMigrationTaskStateResult {
  export function isa(o: any): o is NotifyMigrationTaskStateResult {
    return __isa(o, "NotifyMigrationTaskStateResult");
  }
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
  export function isa(o: any): o is PolicyErrorException {
    return __isa(o, "PolicyErrorException");
  }
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
  export function isa(o: any): o is ProgressUpdateStreamSummary {
    return __isa(o, "ProgressUpdateStreamSummary");
  }
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
  ResourceAttributeList: Array<ResourceAttribute> | undefined;
}

export namespace PutResourceAttributesRequest {
  export function isa(o: any): o is PutResourceAttributesRequest {
    return __isa(o, "PutResourceAttributesRequest");
  }
}

export interface PutResourceAttributesResult extends $MetadataBearer {
  __type?: "PutResourceAttributesResult";
}

export namespace PutResourceAttributesResult {
  export function isa(o: any): o is PutResourceAttributesResult {
    return __isa(o, "PutResourceAttributesResult");
  }
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
  export function isa(o: any): o is ResourceAttribute {
    return __isa(o, "ResourceAttribute");
  }
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
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
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
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
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
  export function isa(o: any): o is Task {
    return __isa(o, "Task");
  }
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
  export function isa(o: any): o is UnauthorizedOperation {
    return __isa(o, "UnauthorizedOperation");
  }
}
