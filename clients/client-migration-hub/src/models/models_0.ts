// smithy-typescript generated code
import type { ApplicationStatus, ResourceAttributeType, Status, UpdateType } from "./enums";

/**
 * The state of an application discovered through Migration Hub import, the AWS Agentless Discovery Connector, or the AWS Application Discovery Agent.
 *
 * @public
 */
export interface ApplicationState {
  /**
   * The configurationId from the Application Discovery Service that uniquely identifies an application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The current status of an application.
   *
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * The timestamp when the application status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2 instance, RDS instance, etc.).
 *
 * @public
 */
export interface CreatedArtifact {
  /**
   * An ARN that uniquely identifies the result of a migration task.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description that can be free-form text to record additional detail about the artifact for clarity or for later reference.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateCreatedArtifactRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)
   *
   * @public
   */
  CreatedArtifact: CreatedArtifact | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateCreatedArtifactResult {}

/**
 * Object representing the on-premises resource being migrated.
 *
 * @public
 */
export interface DiscoveredResource {
  /**
   * The configurationId in Application Discovery Service that uniquely identifies the on-premise resource.
   *
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * A description that can be free-form text to record additional detail about the discovered resource for clarity or later reference.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface AssociateDiscoveredResourceRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * The identifier given to the MigrationTask. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * Object representing a Resource.
   *
   * @public
   */
  DiscoveredResource: DiscoveredResource | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateDiscoveredResourceResult {}

/**
 * A source resource can be a source server, a migration wave, an application, or any other resource that you track.
 *
 * @public
 */
export interface SourceResource {
  /**
   * This is the name that you want to use to identify the resource. If the resource is an AWS resource, we recommend that you set this parameter to the ARN of the resource.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description that can be free-form text to record additional detail about the resource for clarity or later reference.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A free-form description of the status of the resource.
   *
   * @public
   */
  StatusDetail?: string | undefined;
}

/**
 * @public
 */
export interface AssociateSourceResourceRequest {
  /**
   * The name of the progress-update stream, which is used for access control as well as a namespace for migration-task names that is implicitly linked to your AWS account. The progress-update stream must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * A unique identifier that references the migration task. *Do not include sensitive data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * The source resource that you want to associate.
   *
   * @public
   */
  SourceResource: SourceResource | undefined;

  /**
   * This is an optional parameter that you can use to test whether the call will succeed. Set this parameter to `true` to verify that you have the permissions that are required to make the call, and that you have specified the other parameters in the call correctly.
   *
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
   * The name of the ProgressUpdateStream. *Do not store personal data in this field.*
   *
   * @public
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The name of the ProgressUpdateStream. *Do not store personal data in this field.*
   *
   * @public
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The configurationId in Application Discovery Service that uniquely identifies the grouped application.
   *
   * @public
   */
  ApplicationId: string | undefined;
}

/**
 * @public
 */
export interface DescribeApplicationStateResult {
  /**
   * Status of the application - Not Started, In-Progress, Complete.
   *
   * @public
   */
  ApplicationStatus?: ApplicationStatus | undefined;

  /**
   * The timestamp when the application status was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationTaskRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * The identifier given to the MigrationTask. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;
}

/**
 * Attribute associated with a resource.
 *
 * Note the corresponding format required per type listed below:
 *
 * - **IPV4**
 *
 *   `x.x.x.x`
 *
 *   *where x is an integer in the range [0,255]*
 *
 * - **IPV6**
 *
 *   `y : y : y : y : y : y : y : y`
 *
 *   *where y is a hexadecimal between 0 and FFFF. [0, FFFF]*
 *
 * - **MAC_ADDRESS**
 *
 *   `^([0-9A-Fa-f]\{2\}[:-])\{5\}([0-9A-Fa-f]\{2\})$`
 *
 * - **FQDN**
 *
 *   `^[^<>\{\}\\\\/?,=\\p\{Cntrl\}]\{1,256\}$`
 *
 * @public
 */
export interface ResourceAttribute {
  /**
   * Type of resource.
   *
   * @public
   */
  Type: ResourceAttributeType | undefined;

  /**
   * Value of the resource type.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Task object encapsulating task information.
 *
 * @public
 */
export interface Task {
  /**
   * Status of the task - Not Started, In-Progress, Complete.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * Details of task status as notified by a migration tool. A tool might use this field to provide clarifying information about the status that is unique to that tool or that explains an error state.
   *
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * Indication of the percentage completion of the task.
   *
   * @public
   */
  ProgressPercent?: number | undefined;
}

/**
 * Represents a migration task in a migration tool.
 *
 * @public
 */
export interface MigrationTask {
  /**
   * A name that identifies the vendor of the migration tool being used.
   *
   * @public
   */
  ProgressUpdateStream?: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName?: string | undefined;

  /**
   * Task object encapsulating task information.
   *
   * @public
   */
  Task?: Task | undefined;

  /**
   * The timestamp when the task was gathered.
   *
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.
   *
   * @public
   */
  ResourceAttributeList?: ResourceAttribute[] | undefined;
}

/**
 * @public
 */
export interface DescribeMigrationTaskResult {
  /**
   * Object encapsulating information about the migration task.
   *
   * @public
   */
  MigrationTask?: MigrationTask | undefined;
}

/**
 * @public
 */
export interface DisassociateCreatedArtifactRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task to be disassociated with the artifact. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * An ARN of the AWS resource related to the migration (e.g., AMI, EC2 instance, RDS instance, etc.)
   *
   * @public
   */
  CreatedArtifactName: string | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * The identifier given to the MigrationTask. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * ConfigurationId of the Application Discovery Service resource to be disassociated.
   *
   * @public
   */
  ConfigurationId: string | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The name of the progress-update stream, which is used for access control as well as a namespace for migration-task names that is implicitly linked to your AWS account. The progress-update stream must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * A unique identifier that references the migration task. *Do not include sensitive data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * The name that was specified for the source resource.
   *
   * @public
   */
  SourceResourceName: string | undefined;

  /**
   * This is an optional parameter that you can use to test whether the call will succeed. Set this parameter to `true` to verify that you have the permissions that are required to make the call, and that you have specified the other parameters in the call correctly.
   *
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
   * The name of the ProgressUpdateStream. >
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The configurationIds from the Application Discovery Service that uniquely identifies your applications.
   *
   * @public
   */
  ApplicationIds?: string[] | undefined;

  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to be returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationStatesResult {
  /**
   * A list of Applications that exist in Application Discovery Service.
   *
   * @public
   */
  ApplicationStateList?: ApplicationState[] | undefined;

  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCreatedArtifactsRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Maximum number of results to be returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListCreatedArtifactsResult {
  /**
   * If there are more created artifacts than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * List of created artifacts up to the maximum number of results specified in the request.
   *
   * @public
   */
  CreatedArtifactList?: CreatedArtifact[] | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesRequest {
  /**
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * The name of the MigrationTask. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListDiscoveredResourcesResult {
  /**
   * If there are more discovered resources than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Returned list of discovered resources associated with the given MigrationTask.
   *
   * @public
   */
  DiscoveredResourceList?: DiscoveredResource[] | undefined;
}

/**
 * @public
 */
export interface ListMigrationTasksRequest {
  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Value to specify how many results are returned per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * Filter migration tasks by discovered resource name.
   *
   * @public
   */
  ResourceName?: string | undefined;
}

/**
 * MigrationTaskSummary includes `MigrationTaskName`, `ProgressPercent`, `ProgressUpdateStream`, `Status`, and `UpdateDateTime` for each task.
 *
 * @public
 */
export interface MigrationTaskSummary {
  /**
   * An AWS resource used for access control. It should uniquely identify the migration tool as it is used for all updates made by the tool.
   *
   * @public
   */
  ProgressUpdateStream?: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName?: string | undefined;

  /**
   * Status of the task.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * Indication of the percentage completion of the task.
   *
   * @public
   */
  ProgressPercent?: number | undefined;

  /**
   * Detail information of what is being done within the overall status state.
   *
   * @public
   */
  StatusDetail?: string | undefined;

  /**
   * The timestamp when the task was gathered.
   *
   * @public
   */
  UpdateDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListMigrationTasksResult {
  /**
   * If there are more migration tasks than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Lists the migration task's summary which includes: `MigrationTaskName`, `ProgressPercent`, `ProgressUpdateStream`, `Status`, and the `UpdateDateTime` for each task.
   *
   * @public
   */
  MigrationTaskSummaryList?: MigrationTaskSummary[] | undefined;
}

/**
 * @public
 */
export interface ListMigrationTaskUpdatesRequest {
  /**
   * The name of the progress-update stream, which is used for access control as well as a namespace for migration-task names that is implicitly linked to your AWS account. The progress-update stream must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * A unique identifier that references the migration task. *Do not include sensitive data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * If `NextToken` was returned by a previous call, there are more results available. The value of `NextToken` is a unique pagination token for each page. To retrieve the next page of results, specify the `NextToken` value that the previous call returned. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the value that you specify here for `MaxResults`, the response will include a token that you can use to retrieve the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * A migration-task progress update.
 *
 * @public
 */
export interface MigrationTaskUpdate {
  /**
   * The timestamp for the update.
   *
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * The type of the update.
   *
   * @public
   */
  UpdateType?: UpdateType | undefined;

  /**
   * Task object encapsulating task information.
   *
   * @public
   */
  MigrationTaskState?: Task | undefined;
}

/**
 * @public
 */
export interface ListMigrationTaskUpdatesResult {
  /**
   * If the response includes a `NextToken` value, that means that there are more results available. The value of `NextToken` is a unique pagination token for each page. To retrieve the next page of results, call this API again and specify this `NextToken` value in the request. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of migration-task updates.
   *
   * @public
   */
  MigrationTaskUpdateList?: MigrationTaskUpdate[] | undefined;
}

/**
 * @public
 */
export interface ListProgressUpdateStreamsRequest {
  /**
   * If a `NextToken` was returned by a previous call, there are more results available. To retrieve the next page of results, make the call again using the returned token in `NextToken`.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Filter to limit the maximum number of results to list per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary of the AWS resource used for access control that is implicitly linked to your AWS account.
 *
 * @public
 */
export interface ProgressUpdateStreamSummary {
  /**
   * The name of the ProgressUpdateStream. *Do not store personal data in this field.*
   *
   * @public
   */
  ProgressUpdateStreamName?: string | undefined;
}

/**
 * @public
 */
export interface ListProgressUpdateStreamsResult {
  /**
   * List of progress update streams up to the max number of results passed in the input.
   *
   * @public
   */
  ProgressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[] | undefined;

  /**
   * If there are more streams created than the max result, return the next token to be passed to the next call as a bookmark of where to start from.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceResourcesRequest {
  /**
   * The name of the progress-update stream, which is used for access control as well as a namespace for migration-task names that is implicitly linked to your AWS account. The progress-update stream must uniquely identify the migration tool as it is used for all updates made by the tool; however, it does not need to be unique for each AWS account because it is scoped to the AWS account.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * A unique identifier that references the migration task. *Do not store confidential data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * If `NextToken` was returned by a previous call, there are more results available. The value of `NextToken` is a unique pagination token for each page. To retrieve the next page of results, specify the `NextToken` value that the previous call returned. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the value that you specify here for `MaxResults`, the response will include a token that you can use to retrieve the next set of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListSourceResourcesResult {
  /**
   * If the response includes a `NextToken` value, that means that there are more results available. The value of `NextToken` is a unique pagination token for each page. To retrieve the next page of results, call this API again and specify this `NextToken` value in the request. Keep all other arguments unchanged. Each pagination token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of source resources.
   *
   * @public
   */
  SourceResourceList?: SourceResource[] | undefined;
}

/**
 * @public
 */
export interface NotifyApplicationStateRequest {
  /**
   * The configurationId in Application Discovery Service that uniquely identifies the grouped application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * Status of the application - Not Started, In-Progress, Complete.
   *
   * @public
   */
  Status: ApplicationStatus | undefined;

  /**
   * The timestamp when the application state changed.
   *
   * @public
   */
  UpdateDateTime?: Date | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * Information about the task's progress and status.
   *
   * @public
   */
  Task: Task | undefined;

  /**
   * The timestamp when the task was gathered.
   *
   * @public
   */
  UpdateDateTime: Date | undefined;

  /**
   * Number of seconds after the UpdateDateTime within which the Migration Hub can expect an update. If Migration Hub does not receive an update within the specified interval, then the migration task will be considered stale.
   *
   * @public
   */
  NextUpdateSeconds: number | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
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
   * The name of the ProgressUpdateStream.
   *
   * @public
   */
  ProgressUpdateStream: string | undefined;

  /**
   * Unique identifier that references the migration task. *Do not store personal data in this field.*
   *
   * @public
   */
  MigrationTaskName: string | undefined;

  /**
   * Information about the resource that is being migrated. This data will be used to map the task to a resource in the Application Discovery Service repository.
   *
   * > **Note:** Takes the object array of `ResourceAttribute` where the `Type` field is reserved for the following values: `IPV4_ADDRESS | IPV6_ADDRESS | MAC_ADDRESS | FQDN | VM_MANAGER_ID | VM_MANAGED_OBJECT_REFERENCE | VM_NAME | VM_PATH | BIOS_ID | MOTHERBOARD_SERIAL_NUMBER` where the identifying value can be a string up to 256 characters.
   *
   * > **Important:**
   * >
   * > - If any "VM" related value is set for a `ResourceAttribute` object, it is required that `VM_MANAGER_ID`, as a minimum, is always set. If `VM_MANAGER_ID` is not set, then all "VM" fields will be discarded and "VM" fields will not be used for matching the migration task to a server in Application Discovery Service repository. See the [Example](https://docs.aws.amazon.com/migrationhub/latest/ug/API_PutResourceAttributes.html#API_PutResourceAttributes_Examples) section below for a use case of specifying "VM" related values.
   * > - If a server you are trying to match has multiple IP or MAC addresses, you should provide as many as you know in separate type/value pairs passed to the `ResourceAttributeList` parameter to maximize the chances of matching.
   *
   * @public
   */
  ResourceAttributeList: ResourceAttribute[] | undefined;

  /**
   * Optional boolean flag to indicate whether any effect should take place. Used to test if the caller has permission to make the call.
   *
   * @public
   */
  DryRun?: boolean | undefined;
}

/**
 * @public
 */
export interface PutResourceAttributesResult {}
