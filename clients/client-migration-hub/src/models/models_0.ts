// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { MigrationHubServiceException as __BaseException } from "./MigrationHubServiceException";

/**
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export enum ApplicationStatus {
  COMPLETED = "COMPLETED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
 * <p>The state of an application discovered through Migration Hub import, the AWS Agentless
 *          Discovery Connector, or the AWS Application Discovery Agent.</p>
 */
export interface ApplicationState {
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

/**
 * <p>An ARN of the AWS cloud resource target receiving the migration (e.g., AMI, EC2
 *          instance, RDS instance, etc.).</p>
 */
export interface CreatedArtifact {
  /**
   * <p>An ARN that uniquely identifies the result of a migration task.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description that can be free-form text to record additional detail about the artifact
   *          for clarity or for later reference.</p>
   */
  Description?: string;
}

export interface AssociateCreatedArtifactRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

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
}

export interface AssociateCreatedArtifactResult {}

/**
 * <p>Exception raised to indicate a successfully authorized action when the
 *             <code>DryRun</code> flag is set to "true".</p>
 */
export class DryRunOperation extends __BaseException {
  readonly name: "DryRunOperation" = "DryRunOperation";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class HomeRegionNotSetException extends __BaseException {
  readonly name: "HomeRegionNotSetException" = "HomeRegionNotSetException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  Message?: string;
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
 */
export class InvalidInputException extends __BaseException {
  readonly name: "InvalidInputException" = "InvalidInputException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  Message?: string;
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
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * <p>A message that provides information about the exception.</p>
   */
  Message: string | undefined;

  /**
   * <p>The number of seconds the caller should wait before retrying.</p>
   */
  RetryAfterSeconds?: number;
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
 */
export class UnauthorizedOperation extends __BaseException {
  readonly name: "UnauthorizedOperation" = "UnauthorizedOperation";
  readonly $fault: "client" = "client";
  Message?: string;
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
 */
export interface DiscoveredResource {
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

export interface AssociateDiscoveredResourceRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Object representing a Resource.</p>
   */
  DiscoveredResource: DiscoveredResource | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface AssociateDiscoveredResourceResult {}

/**
 * <p>Exception raised when there are problems accessing Application Discovery Service
 *          (Application Discovery Service); most likely due to a misconfigured policy or the
 *             <code>migrationhub-discovery</code> role is missing or not configured correctly.</p>
 */
export class PolicyErrorException extends __BaseException {
  readonly name: "PolicyErrorException" = "PolicyErrorException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface CreateProgressUpdateStreamRequest {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface CreateProgressUpdateStreamResult {}

export interface DeleteProgressUpdateStreamRequest {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface DeleteProgressUpdateStreamResult {}

export interface DescribeApplicationStateRequest {
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   */
  ApplicationId: string | undefined;
}

export interface DescribeApplicationStateResult {
  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  ApplicationStatus?: ApplicationStatus | string;

  /**
   * <p>The timestamp when the application status was last updated.</p>
   */
  LastUpdatedTime?: Date;
}

export interface DescribeMigrationTaskRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;
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
  VM_PATH = "VM_PATH",
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
  /**
   * <p>Type of resource.</p>
   */
  Type: ResourceAttributeType | string | undefined;

  /**
   * <p>Value of the resource type.</p>
   */
  Value: string | undefined;
}

export enum Status {
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  NOT_STARTED = "NOT_STARTED",
}

/**
 * <p>Task object encapsulating task information.</p>
 */
export interface Task {
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

  /**
   * <p>Indication of the percentage completion of the task.</p>
   */
  ProgressPercent?: number;
}

/**
 * <p>Represents a migration task in a migration tool.</p>
 */
export interface MigrationTask {
  /**
   * <p>A name that identifies the vendor of the migration tool being used.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName?: string;

  /**
   * <p>Task object encapsulating task information.</p>
   */
  Task?: Task;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;

  /**
   * <p>Information about the resource that is being migrated. This data will be used to map the
   *          task to a resource in the Application Discovery Service repository.</p>
   */
  ResourceAttributeList?: ResourceAttribute[];
}

export interface DescribeMigrationTaskResult {
  /**
   * <p>Object encapsulating information about the migration task.</p>
   */
  MigrationTask?: MigrationTask;
}

export interface DisassociateCreatedArtifactRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task to be disassociated with the
   *          artifact. <i>Do not store personal data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

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
}

export interface DisassociateCreatedArtifactResult {}

export interface DisassociateDiscoveredResourceRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>The identifier given to the MigrationTask. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

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
}

export interface DisassociateDiscoveredResourceResult {}

export interface ImportMigrationTaskRequest {
  /**
   * <p>The name of the ProgressUpdateStream. ></p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface ImportMigrationTaskResult {}

export interface ListApplicationStatesRequest {
  /**
   * <p>The configurationIds from the Application Discovery Service that uniquely identifies
   *          your applications.</p>
   */
  ApplicationIds?: string[];

  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>Maximum number of results to be returned per page.</p>
   */
  MaxResults?: number;
}

export interface ListApplicationStatesResult {
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

export interface ListCreatedArtifactsRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

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
   * <p>Maximum number of results to be returned per page.</p>
   */
  MaxResults?: number;
}

export interface ListCreatedArtifactsResult {
  /**
   * <p>If there are more created artifacts than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>List of created artifacts up to the maximum number of results specified in the
   *          request.</p>
   */
  CreatedArtifactList?: CreatedArtifact[];
}

export interface ListDiscoveredResourcesRequest {
  /**
   * <p>The name of the ProgressUpdateStream.</p>
   */
  ProgressUpdateStream: string | undefined;

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
   * <p>The maximum number of results returned per page.</p>
   */
  MaxResults?: number;
}

export interface ListDiscoveredResourcesResult {
  /**
   * <p>If there are more discovered resources than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>Returned list of discovered resources associated with the given MigrationTask.</p>
   */
  DiscoveredResourceList?: DiscoveredResource[];
}

export interface ListMigrationTasksRequest {
  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>Value to specify how many results are returned per page.</p>
   */
  MaxResults?: number;

  /**
   * <p>Filter migration tasks by discovered resource name.</p>
   */
  ResourceName?: string;
}

/**
 * <p>MigrationTaskSummary includes <code>MigrationTaskName</code>,
 *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
 *          and <code>UpdateDateTime</code> for each task.</p>
 */
export interface MigrationTaskSummary {
  /**
   * <p>An AWS resource used for access control. It should uniquely identify the migration tool
   *          as it is used for all updates made by the tool.</p>
   */
  ProgressUpdateStream?: string;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName?: string;

  /**
   * <p>Status of the task.</p>
   */
  Status?: Status | string;

  /**
   * <p>Indication of the percentage completion of the task.</p>
   */
  ProgressPercent?: number;

  /**
   * <p>Detail information of what is being done within the overall status state.</p>
   */
  StatusDetail?: string;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime?: Date;
}

export interface ListMigrationTasksResult {
  /**
   * <p>If there are more migration tasks than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;

  /**
   * <p>Lists the migration task's summary which includes: <code>MigrationTaskName</code>,
   *             <code>ProgressPercent</code>, <code>ProgressUpdateStream</code>, <code>Status</code>,
   *          and the <code>UpdateDateTime</code> for each task.</p>
   */
  MigrationTaskSummaryList?: MigrationTaskSummary[];
}

export interface ListProgressUpdateStreamsRequest {
  /**
   * <p>If a <code>NextToken</code> was returned by a previous call, there are more results
   *          available. To retrieve the next page of results, make the call again using the returned
   *          token in <code>NextToken</code>.</p>
   */
  NextToken?: string;

  /**
   * <p>Filter to limit the maximum number of results to list per page.</p>
   */
  MaxResults?: number;
}

/**
 * <p>Summary of the AWS resource used for access control that is implicitly linked to your
 *          AWS account.</p>
 */
export interface ProgressUpdateStreamSummary {
  /**
   * <p>The name of the ProgressUpdateStream. <i>Do not store personal data in this
   *             field.</i>
   *          </p>
   */
  ProgressUpdateStreamName?: string;
}

export interface ListProgressUpdateStreamsResult {
  /**
   * <p>List of progress update streams up to the max number of results passed in the
   *          input.</p>
   */
  ProgressUpdateStreamSummaryList?: ProgressUpdateStreamSummary[];

  /**
   * <p>If there are more streams created than the max result, return the next token to be
   *          passed to the next call as a bookmark of where to start from.</p>
   */
  NextToken?: string;
}

export interface NotifyApplicationStateRequest {
  /**
   * <p>The configurationId in Application Discovery Service that uniquely identifies the
   *          grouped application.</p>
   */
  ApplicationId: string | undefined;

  /**
   * <p>Status of the application - Not Started, In-Progress, Complete.</p>
   */
  Status: ApplicationStatus | string | undefined;

  /**
   * <p>The timestamp when the application state changed.</p>
   */
  UpdateDateTime?: Date;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface NotifyApplicationStateResult {}

export interface NotifyMigrationTaskStateRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
   */
  MigrationTaskName: string | undefined;

  /**
   * <p>Information about the task's progress and status.</p>
   */
  Task: Task | undefined;

  /**
   * <p>The timestamp when the task was gathered.</p>
   */
  UpdateDateTime: Date | undefined;

  /**
   * <p>Number of seconds after the UpdateDateTime within which the Migration Hub can expect an
   *          update. If Migration Hub does not receive an update within the specified interval, then the
   *          migration task will be considered stale.</p>
   */
  NextUpdateSeconds: number | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface NotifyMigrationTaskStateResult {}

export interface PutResourceAttributesRequest {
  /**
   * <p>The name of the ProgressUpdateStream. </p>
   */
  ProgressUpdateStream: string | undefined;

  /**
   * <p>Unique identifier that references the migration task. <i>Do not store personal
   *             data in this field.</i>
   *          </p>
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
   */
  ResourceAttributeList: ResourceAttribute[] | undefined;

  /**
   * <p>Optional boolean flag to indicate whether any effect should take place. Used to test if
   *          the caller has permission to make the call.</p>
   */
  DryRun?: boolean;
}

export interface PutResourceAttributesResult {}

/**
 * @internal
 */
export const ApplicationStateFilterSensitiveLog = (obj: ApplicationState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatedArtifactFilterSensitiveLog = (obj: CreatedArtifact): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateCreatedArtifactRequestFilterSensitiveLog = (obj: AssociateCreatedArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateCreatedArtifactResultFilterSensitiveLog = (obj: AssociateCreatedArtifactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DiscoveredResourceFilterSensitiveLog = (obj: DiscoveredResource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDiscoveredResourceRequestFilterSensitiveLog = (obj: AssociateDiscoveredResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AssociateDiscoveredResourceResultFilterSensitiveLog = (obj: AssociateDiscoveredResourceResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProgressUpdateStreamRequestFilterSensitiveLog = (obj: CreateProgressUpdateStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateProgressUpdateStreamResultFilterSensitiveLog = (obj: CreateProgressUpdateStreamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProgressUpdateStreamRequestFilterSensitiveLog = (obj: DeleteProgressUpdateStreamRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteProgressUpdateStreamResultFilterSensitiveLog = (obj: DeleteProgressUpdateStreamResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationStateRequestFilterSensitiveLog = (obj: DescribeApplicationStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApplicationStateResultFilterSensitiveLog = (obj: DescribeApplicationStateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMigrationTaskRequestFilterSensitiveLog = (obj: DescribeMigrationTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ResourceAttributeFilterSensitiveLog = (obj: ResourceAttribute): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TaskFilterSensitiveLog = (obj: Task): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MigrationTaskFilterSensitiveLog = (obj: MigrationTask): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMigrationTaskResultFilterSensitiveLog = (obj: DescribeMigrationTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateCreatedArtifactRequestFilterSensitiveLog = (obj: DisassociateCreatedArtifactRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateCreatedArtifactResultFilterSensitiveLog = (obj: DisassociateCreatedArtifactResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDiscoveredResourceRequestFilterSensitiveLog = (
  obj: DisassociateDiscoveredResourceRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisassociateDiscoveredResourceResultFilterSensitiveLog = (
  obj: DisassociateDiscoveredResourceResult
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportMigrationTaskRequestFilterSensitiveLog = (obj: ImportMigrationTaskRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ImportMigrationTaskResultFilterSensitiveLog = (obj: ImportMigrationTaskResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationStatesRequestFilterSensitiveLog = (obj: ListApplicationStatesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApplicationStatesResultFilterSensitiveLog = (obj: ListApplicationStatesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCreatedArtifactsRequestFilterSensitiveLog = (obj: ListCreatedArtifactsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListCreatedArtifactsResultFilterSensitiveLog = (obj: ListCreatedArtifactsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoveredResourcesRequestFilterSensitiveLog = (obj: ListDiscoveredResourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListDiscoveredResourcesResultFilterSensitiveLog = (obj: ListDiscoveredResourcesResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMigrationTasksRequestFilterSensitiveLog = (obj: ListMigrationTasksRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MigrationTaskSummaryFilterSensitiveLog = (obj: MigrationTaskSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListMigrationTasksResultFilterSensitiveLog = (obj: ListMigrationTasksResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProgressUpdateStreamsRequestFilterSensitiveLog = (obj: ListProgressUpdateStreamsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProgressUpdateStreamSummaryFilterSensitiveLog = (obj: ProgressUpdateStreamSummary): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListProgressUpdateStreamsResultFilterSensitiveLog = (obj: ListProgressUpdateStreamsResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyApplicationStateRequestFilterSensitiveLog = (obj: NotifyApplicationStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyApplicationStateResultFilterSensitiveLog = (obj: NotifyApplicationStateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyMigrationTaskStateRequestFilterSensitiveLog = (obj: NotifyMigrationTaskStateRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotifyMigrationTaskStateResultFilterSensitiveLog = (obj: NotifyMigrationTaskStateResult): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceAttributesRequestFilterSensitiveLog = (obj: PutResourceAttributesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutResourceAttributesResultFilterSensitiveLog = (obj: PutResourceAttributesResult): any => ({
  ...obj,
});
