// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { MigrationHubServiceException as __BaseException } from "./MigrationHubServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ApplicationStatus = {
  COMPLETED: "COMPLETED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus];

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
 * <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
 * @public
 */
export class DryRunOperation extends __BaseException {
  readonly name: "DryRunOperation" = "DryRunOperation";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DryRunOperation, __BaseException>) {
    super({
      name: "DryRunOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, DryRunOperation.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The home region is not set. Set the home region to continue.</p>
 * @public
 */
export class HomeRegionNotSetException extends __BaseException {
  readonly name: "HomeRegionNotSetException" = "HomeRegionNotSetException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<HomeRegionNotSetException, __BaseException>) {
    super({
      name: "HomeRegionNotSetException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, HomeRegionNotSetException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when an internal, configuration, or dependency error is
 *          encountered.</p>
 * @public
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when the provided input violates a policy constraint or is entered in
 *          the wrong format or data type.</p>
 * @public
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidInputException, __BaseException>) {
    super({
      name: "InvalidInputException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidInputException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when the request references a resource (Application Discovery Service
 *          configuration, update stream, migration task, etc.) that does not exist in Application
 *          Discovery Service (Application Discovery Service) or in Migration Hub's repository.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>Exception raised when there is an internal, configuration, or dependency error
 *          encountered.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message that provides information about the exception.</p>
   * @public
   */
  Message: string | undefined;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   * @public
   */
  RetryAfterSeconds?: number | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.Message = opts.Message;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * <p>Exception raised to indicate a request was not authorized when the <code>DryRun</code>
 *          flag is set to "true".</p>
 * @public
 */
export class UnauthorizedOperation extends __BaseException {
  readonly name: "UnauthorizedOperation" = "UnauthorizedOperation";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedOperation, __BaseException>) {
    super({
      name: "UnauthorizedOperation",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedOperation.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>Exception raised when there are problems accessing Application Discovery Service
 *          (Application Discovery Service); most likely due to a misconfigured policy or the
 *             <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
 * @public
 */
export class PolicyErrorException extends __BaseException {
  readonly name: "PolicyErrorException" = "PolicyErrorException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyErrorException, __BaseException>) {
    super({
      name: "PolicyErrorException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyErrorException.prototype);
    this.Message = opts.Message;
  }
}

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
 * @public
 * @enum
 */
export const ResourceAttributeType = {
  BIOS_ID: "BIOS_ID",
  FQDN: "FQDN",
  IPV4_ADDRESS: "IPV4_ADDRESS",
  IPV6_ADDRESS: "IPV6_ADDRESS",
  MAC_ADDRESS: "MAC_ADDRESS",
  MOTHERBOARD_SERIAL_NUMBER: "MOTHERBOARD_SERIAL_NUMBER",
  VM_MANAGED_OBJECT_REFERENCE: "VM_MANAGED_OBJECT_REFERENCE",
  VM_MANAGER_ID: "VM_MANAGER_ID",
  VM_NAME: "VM_NAME",
  VM_PATH: "VM_PATH",
} as const;

/**
 * @public
 */
export type ResourceAttributeType = (typeof ResourceAttributeType)[keyof typeof ResourceAttributeType];

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
 * @public
 * @enum
 */
export const Status = {
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_STARTED: "NOT_STARTED",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

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
