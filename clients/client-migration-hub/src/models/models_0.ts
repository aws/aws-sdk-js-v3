// smithy-typescript generated code
import { ApplicationStatus, ResourceAttributeType, Status, UpdateType } from "./enums";

/**
 * <p>The state of an application discovered through Migration Hub import, the AWS Agentless
 *          Discovery Connector, or the AWS Application Discovery Agent.</p>
 * @public
 */
export interface ApplicationState {
  /**
   * <p>The configurationId from the Application Discovery Service that uniquely identifies an
   *          application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The current status of an application.</p>
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2
 *          instance, RDS instance, etc.).</p>
 * @public
 */
export interface CreatedArtifact {
  /**
   * <p>An ARN that uniquely identifies the result of a migration task.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description that can be free-form text to record additional detail about the artifact
   *          for clarity or for later reference.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCreatedArtifactRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS
   *          instance, etc.) </p>
   * @public
   */
  CreatedArtifact: CreatedArtifact | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateCreatedArtifactResult {}

/**
 * <p>Object representing the on-premises resource being migrated.</p>
 * @public
 */
export interface DiscoveredResource {
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          on-premise resource.</p>
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * <p>A description that can be free-form text to record additional detail about the
   *          discovered resource for clarity or later reference.</p>
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDiscoveredResourceRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Object representing a Resource.</p>
   * @public
   */
  DiscoveredResource: DiscoveredResource | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateDiscoveredResourceResult {}

/**
 * <p>A source resource can be a source server, a migration wave, an application, or any other
 *          resource that you track.</p>
 * @public
 */
export interface SourceResource {
  /**
   * <p>This is the name that you want to use to identify the resource. If the resource is an
   *          AWS resource, we recommend that you set this parameter to the ARN of the resource.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description that can be free-form text to record additional detail about the resource
   *          for clarity or later reference.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A free-form description of the status of the resource.</p>
   * @public
   */
  StatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceResourceRequest {
  /**
   * <p>The name of the progress-update stream, which is used for access control as well as a
   *          namespace for migration-task names that is implicitly linked to your AWS account. The
   *          progress-update stream must uniquely identify the migration tool as it is used for all
   *          updates made by the tool; however, it does not need to be unique for each AWS account
   *          because it is scoped to the AWS account.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>A unique identifier that references the migration task. <i>Do not include
   *             sensitive data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The source resource that you want to associate.</p>
   * @public
   */
  SourceResource: SourceResource | undefined;

  /**
   * <p>This is an optional parameter that you can use to test whether the call will succeed.
   *          Set this parameter to <code>true</code> to verify that you have the permissions that are
   *          required to make the call, and that you have specified the other parameters in the call
   *          correctly.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateSourceResourceResult {}

/**
 * @public
 */
export interface CreateProgressUpdateStreamRequest {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateProgressUpdateStreamResult {}

/**
 * @public
 */
export interface DeleteProgressUpdateStreamRequest {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteProgressUpdateStreamResult {}

/**
 * @public
 */
export interface DescribeApplicationStateRequest {
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStateResult {
  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationTaskRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;
}

/**
 * <p>Attribute associated with a resource.</p>
 *          <p>Note the corresponding format required per type listed below:</p>
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
 *                   <code>^([0-9A-Fa-f]\{2\}[:-])\{5\}([0-9A-Fa-f]\{2\})$</code>
 *                </p>
 *             </dd>
 *             <dt>FQDN</dt>
 *             <dd>
 *                <p>
 *                   <code>^[^<>\{\}\\\\/?,=\\p\{Cntrl\}]\{1,256\}$</code>
 *                </p>
 *             </dd>
 *          </dl>
 * @public
 */
export interface ResourceAttribute {
  /**
   * <p>Type of resource.</p>
   * @public
   */
  Type: ResourceAttributeType | undefined;

  /**
   * <p>Value of the resource type.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>Task object encapsulating task information.</p>
 * @public
 */
export interface Task {
  /**
   * <p>Status of the task - Not Started, In-Progress, Complete.</p>
   * @public
   */
  Status: Status | undefined;

  /**
   * <p>Details of task status as notified by a migration tool. A tool might use this field to
   *          provide clarifying information about the status that is unique to that tool or that
   *          explains an error state.</p>
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * <p>Indication of the percentage completion of the task.</p>
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * <p>Represents a migration task in a migration tool.</p>
 * @public
 */
export interface MigrationTask {
  /**
   * <p>A name that identifies the vendor of the migration tool being used.</p>
   * @public
   */
  ProgressUpdateStream?: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName?: string | undefined;

  /**
   * <p>Task object encapsulating task information.</p>
   * @public
   */
  Task?: Task | undefined;

  /**
   * <p>The timestamp when the task was gathered.</p>
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * <p>Information about the resource that is being migrated. This data will be used to map the
   *          task to a resource in the Application Discovery Service repository.</p>
   * @public
   */
  ResourceAttributeList?: ResourceAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationTaskResult {
  /**
   * <p>Object encapsulating information about the migration task.</p>
   * @public
   */
  MigrationTask?: MigrationTask | undefined;
}

/**
 * @public
 */
export interface DisassociateCreatedArtifactRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task to be disassociated with the
   *          artifact. <i>Do not store personal data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS
   *          instance, etc.)</p>
   * @public
   */
  CreatedArtifactName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateCreatedArtifactResult {}

/**
 * @public
 */
export interface DisassociateDiscoveredResourceRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>ConfigurationId of the Application Discovery Service resource to be
   *          disassociated.</p>
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateDiscoveredResourceResult {}

/**
 * @public
 */
export interface DisassociateSourceResourceRequest {
  /**
   * <p>The name of the progress-update stream, which is used for access control as well as a
   *          namespace for migration-task names that is implicitly linked to your AWS account. The
   *          progress-update stream must uniquely identify the migration tool as it is used for all
   *          updates made by the tool; however, it does not need to be unique for each AWS account
   *          because it is scoped to the AWS account.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>A unique identifier that references the migration task. <i>Do not include
   *             sensitive data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>The name that was specified for the source resource.</p>
   * @public
   */
  SourceResourceName: string | undefined;

  /**
   * <p>This is an optional parameter that you can use to test whether the call will succeed.
   *          Set this parameter to <code>true</code> to verify that you have the permissions that are
   *          required to make the call, and that you have specified the other parameters in the call
   *          correctly.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface DisassociateSourceResourceResult {}

/**
 * @public
 */
export interface ImportMigrationTaskRequest {
  /**
   * <p>The name of the ProgressUpdateStream. ></p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportMigrationTaskResult {}

/**
 * @public
 */
export interface ListApplicationStatesRequest {
  /**
   * <p>The configurationIds from the Application Discovery Service that uniquely identifies
   *          your applications.</p>
   * @public
   */
  ApplicationIds?: string[] | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to be returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationStatesResult {
  /**
   * <p>A list of Applications that exist in Application Discovery Service.</p>
   * @public
   */
  ApplicationStateList?: ApplicationState[] | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCreatedArtifactsRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Maximum number of results to be returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCreatedArtifactsResult {
  /**
   * <p>If there are more created artifacts than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>List of created artifacts up to the maximum number of results specified in the
   *          request.</p>
   * @public
   */
  CreatedArtifactList?: CreatedArtifact[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The name of the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResult {
  /**
   * <p>If there are more discovered resources than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Returned list of discovered resources associated with the given MigrationTask.</p>
   * @public
   */
  DiscoveredResourceList?: DiscoveredResource[] | undefined;
}

/**
 * @public
 */
export interface ListMigrationTasksRequest {
  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Value to specify how many results are returned per page.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>Filter migration tasks by discovered resource name.</p>
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * <p>MigrationTaskSummary includes <code>MigrationTaskName</code>,
 *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
 *          and <code>UpdateDateTime</code> for each task.</p>
 * @public
 */
export interface MigrationTaskSummary {
  /**
   * <p>An AWS resource used for access control. It should uniquely identify the migration tool
   *          as it is used for all updates made by the tool.</p>
   * @public
   */
  ProgressUpdateStream?: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName?: string | undefined;

  /**
   * <p>Status of the task.</p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>Indication of the percentage completion of the task.</p>
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * <p>Detail information of what is being done within the overall status state.</p>
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * <p>The timestamp when the task was gathered.</p>
   * @public
   */
  UpdateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListMigrationTasksResult {
  /**
   * <p>If there are more migration tasks than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>,
   *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
   *          and the <code>UpdateDateTime</code> for each task.</p>
   * @public
   */
  MigrationTaskSummaryList?: MigrationTaskSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMigrationTaskUpdatesRequest {
  /**
   * <p>The name of the progress-update stream, which is used for access control as well as a
   *          namespace for migration-task names that is implicitly linked to your AWS account. The
   *          progress-update stream must uniquely identify the migration tool as it is used for all
   *          updates made by the tool; however, it does not need to be unique for each AWS account
   *          because it is scoped to the AWS account.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>A unique identifier that references the migration task. <i>Do not include
   *             sensitive data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If <code>NextToken</code> was returned by a previous call, there are more results
   *          available. The value of <code>NextToken</code> is a unique pagination token for each page.
   *          To retrieve the next page of results, specify the <code>NextToken</code> value that the
   *          previous call returned. Keep all other arguments unchanged. Each pagination token expires
   *          after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken
   *          error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the
   *          value that you specify here for <code>MaxResults</code>, the response will include a token
   *          that you can use to retrieve the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A migration-task progress update.</p>
 * @public
 */
export interface MigrationTaskUpdate {
  /**
   * <p>The timestamp for the update.</p>
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * <p>The type of the update.</p>
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * <p>Task object encapsulating task information.</p>
   * @public
   */
  MigrationTaskState?: Task | undefined;
}

/**
 * @public
 */
export interface ListMigrationTaskUpdatesResult {
  /**
   * <p>If the response includes a <code>NextToken</code> value, that means that there are more
   *          results available. The value of <code>NextToken</code> is a unique pagination token for
   *          each page. To retrieve the next page of results, call this API again and specify this
   *             <code>NextToken</code> value in the request. Keep all other arguments unchanged. Each
   *          pagination token expires after 24 hours. Using an expired pagination token will return an
   *          HTTP 400 InvalidToken error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of migration-task updates.</p>
   * @public
   */
  MigrationTaskUpdateList?: MigrationTaskUpdate[] | undefined;
}

/**
 * @public
 */
export interface ListProgressUpdateStreamsRequest {
  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Filter to limit the maximum number of results to list per page.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Summary of the AWS resource used for access control that is implicitly linked to your
 *          AWS account.</p>
 * @public
 */
export interface ProgressUpdateStreamSummary {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   * @public
   */
  ProgressUpdateStreamName?: string | undefined;
}

/**
 * @public
 */
export interface ListProgressUpdateStreamsResult {
  /**
   * <p>List of progress update streams up to the max number of results passed in the
   *          input.</p>
   * @public
   */
  ProgressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[] | undefined;

  /**
   * <p>If there are more streams created than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceResourcesRequest {
  /**
   * <p>The name of the progress-update stream, which is used for access control as well as a
   *          namespace for migration-task names that is implicitly linked to your AWS account. The
   *          progress-update stream must uniquely identify the migration tool as it is used for all
   *          updates made by the tool; however, it does not need to be unique for each AWS account
   *          because it is scoped to the AWS account.</p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>A unique identifier that references the migration task. <i>Do not store
   *             confidential data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>If <code>NextToken</code> was returned by a previous call, there are more results
   *          available. The value of <code>NextToken</code> is a unique pagination token for each page.
   *          To retrieve the next page of results, specify the <code>NextToken</code> value that the
   *          previous call returned. Keep all other arguments unchanged. Each pagination token expires
   *          after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken
   *          error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the
   *          value that you specify here for <code>MaxResults</code>, the response will include a token
   *          that you can use to retrieve the next set of results.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSourceResourcesResult {
  /**
   * <p>If the response includes a <code>NextToken</code> value, that means that there are more
   *          results available. The value of <code>NextToken</code> is a unique pagination token for
   *          each page. To retrieve the next page of results, call this API again and specify this
   *             <code>NextToken</code> value in the request. Keep all other arguments unchanged. Each
   *          pagination token expires after 24 hours. Using an expired pagination token will return an
   *          HTTP 400 InvalidToken error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The list of source resources.</p>
   * @public
   */
  SourceResourceList?: SourceResource[] | undefined;
}

/**
 * @public
 */
export interface NotifyApplicationStateRequest {
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   * @public
   */
  Status: ApplicationStatus | undefined;

  /**
   * <p>The timestamp when the application state changed.</p>
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface NotifyApplicationStateResult {}

/**
 * @public
 */
export interface NotifyMigrationTaskStateRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Information about the task's progress and status.</p>
   * @public
   */
  Task: Task | undefined;

  /**
   * <p>The timestamp when the task was gathered.</p>
   * @public
   */
  UpdateDateTime: Date | undefined;

  /**
   * <p>Number of seconds after the UpdateDateTime within which the Migration Hub can expect an
   *          update. If Migration Hub does not receive an update within the specified interval, then the
   *          migration task will be considered stale.</p>
   * @public
   */
  NextUpdateSeconds: number | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface NotifyMigrationTaskStateResult {}

/**
 * @public
 */
export interface PutResourceAttributesRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   * @public
   */
  MigrationTaskName: string | undefined;

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
   * @public
   */
  ResourceAttributeList: ResourceAttribute[] | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourceAttributesResult {}
