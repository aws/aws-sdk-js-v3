// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { CodeCatalystServiceException as __BaseException } from "./CodeCatalystServiceException";

/**
 * @public
 * <p>The request was denied because you don't have sufficient access to perform this action. Verify that you are a member of a role that allows this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The request was denied because the requested operation would cause a conflict with the current state of a service resource associated with the request.
 *        Another user might have updated the resource. Reload, make sure you have the latest data, and then try again.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface CreateAccessTokenRequest {
  /**
   * @public
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  expiresTime?: Date;
}

/**
 * @public
 */
export interface CreateAccessTokenResponse {
  /**
   * @public
   * <p>The secret value of the personal access token.</p>
   */
  secret: string | undefined;

  /**
   * @public
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>. If not specified, the default is one year from creation.</p>
   */
  expiresTime: Date | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the access token.</p>
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 * <p>The request was denied because the specified resource was not found. Verify that the spelling is correct and that you have access to the resource.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 * <p>The request was denied because one or more resources has reached its limits for the tier the space belongs to. Either reduce
 *       the number of resources, or change the tier if applicable.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {};
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
  }
}

/**
 * @public
 * <p>The request was denied because an input failed to satisfy the constraints specified by the service. Check the spelling and input requirements, and then try again.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
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
  }
}

/**
 * @public
 */
export interface DeleteAccessTokenRequest {
  /**
   * @public
   * <p>The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling <a>ListAccessTokens</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenResponse {}

/**
 * @public
 */
export interface ListAccessTokensRequest {
  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about a specified personal access token (PAT).</p>
 */
export interface AccessTokenSummary {
  /**
   * @public
   * <p>The system-generated ID of the personal access token.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The friendly name of the personal access token.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The date and time when the personal access token will expire, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  expiresTime?: Date;
}

/**
 * @public
 */
export interface ListAccessTokensResponse {
  /**
   * @public
   * <p>A list of personal access tokens (PATs) associated with the calling user identity.</p>
   */
  items: AccessTokenSummary[] | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface GetUserDetailsRequest {
  /**
   * @public
   * <p>The system-generated unique ID of the user. </p>
   */
  id?: string;

  /**
   * @public
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   */
  userName?: string;
}

/**
 * @public
 * <p>Information about an email address.</p>
 */
export interface EmailAddress {
  /**
   * @public
   * <p>The email address.</p>
   */
  email?: string;

  /**
   * @public
   * <p>Whether the email address has been verified.</p>
   */
  verified?: boolean;
}

/**
 * @public
 */
export interface GetUserDetailsResponse {
  /**
   * @public
   * <p>The system-generated unique ID of the user.</p>
   */
  userId?: string;

  /**
   * @public
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   */
  userName?: string;

  /**
   * @public
   * <p>The friendly name displayed for the user in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The email address provided by the user when they signed up.</p>
   */
  primaryEmail?: EmailAddress;

  /**
   * @public
   * <p/>
   */
  version?: string;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * @public
   * <p>The name of the space.  To retrieve a list of space names, use <a>ListSpaces</a>.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The friendly name of the space displayed to users of the space in Amazon CodeCatalyst.</p>
   */
  displayName?: string;
}

/**
 * @public
 */
export interface ListEventLogsRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  startTime: Date | undefined;

  /**
   * @public
   * <p>The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  endTime: Date | undefined;

  /**
   * @public
   * <p>The name of the event.</p>
   */
  eventName?: string;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * @enum
 */
export const OperationType = {
  MUTATION: "MUTATION",
  READONLY: "READONLY",
} as const;

/**
 * @public
 */
export type OperationType = (typeof OperationType)[keyof typeof OperationType];

/**
 * @public
 * <p>Information about a project in a space.</p>
 */
export interface ProjectInformation {
  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The system-generated unique ID of the project.</p>
   */
  projectId?: string;
}

/**
 * @public
 * <p>Information about the payload of an event recording Amazon CodeCatalyst activity.</p>
 */
export interface EventPayload {
  /**
   * @public
   * <p>The type of content in the event payload.</p>
   */
  contentType?: string;

  /**
   * @public
   * <p>The data included in the event payload.</p>
   */
  data?: string;
}

/**
 * @public
 * @enum
 */
export const UserType = {
  AWS_ACCOUNT: "AWS_ACCOUNT",
  UNKNOWN: "UNKNOWN",
  USER: "USER",
} as const;

/**
 * @public
 */
export type UserType = (typeof UserType)[keyof typeof UserType];

/**
 * @public
 * <p>Information about a user whose activity is recorded in an event for a space.</p>
 */
export interface UserIdentity {
  /**
   * @public
   * <p>The role assigned to the user in a Amazon CodeCatalyst space or project when the event occurred.</p>
   */
  userType: UserType | string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon CodeCatalyst service principal.</p>
   */
  principalId: string | undefined;

  /**
   * @public
   * <p>The display name of the user in Amazon CodeCatalyst.</p>
   */
  userName?: string;

  /**
   * @public
   * <p>The Amazon Web Services account number of the user in Amazon Web Services, if any.</p>
   */
  awsAccountId?: string;
}

/**
 * @public
 * <p>Information about an entry in an event log of Amazon CodeCatalyst activity.</p>
 */
export interface EventLogEntry {
  /**
   * @public
   * <p>The system-generated unique ID of the event.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the event.</p>
   */
  eventName: string | undefined;

  /**
   * @public
   * <p>The type of the event.</p>
   */
  eventType: string | undefined;

  /**
   * @public
   * <p>The category for the event.</p>
   */
  eventCategory: string | undefined;

  /**
   * @public
   * <p>The source of the event.</p>
   */
  eventSource: string | undefined;

  /**
   * @public
   * <p>The time the event took place, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  eventTime: Date | undefined;

  /**
   * @public
   * <p>The type of the event.</p>
   */
  operationType: OperationType | string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the user whose actions are recorded in the event.</p>
   */
  userIdentity: UserIdentity | undefined;

  /**
   * @public
   * <p>Information about the project where the event occurred.</p>
   */
  projectInformation?: ProjectInformation;

  /**
   * @public
   * <p>The system-generated unique ID of the request.</p>
   */
  requestId?: string;

  /**
   * @public
   * <p>Information about the payload of the request.</p>
   */
  requestPayload?: EventPayload;

  /**
   * @public
   * <p>Information about the payload of the response, if any.</p>
   */
  responsePayload?: EventPayload;

  /**
   * @public
   * <p>The code of the error, if any.</p>
   */
  errorCode?: string;

  /**
   * @public
   * <p>The IP address of the user whose actions are recorded in the event.</p>
   */
  sourceIpAddress?: string;

  /**
   * @public
   * <p>The user agent whose actions are recorded in the event.</p>
   */
  userAgent?: string;
}

/**
 * @public
 */
export interface ListEventLogsResponse {
  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about each event retrieved in the list.</p>
   */
  items: EventLogEntry[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region where the space exists.</p>
   */
  regionName: string | undefined;

  /**
   * @public
   * <p>The friendly name of the space displayed to users.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about an space.</p>
 */
export interface SpaceSummary {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services Region
   *       where the space exists.</p>
   */
  regionName: string | undefined;

  /**
   * @public
   * <p>The friendly name of the space displayed to users.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about the spaces. </p>
   */
  items?: SpaceSummary[];
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The friendly name of the project that will be displayed to users.</p>
   */
  displayName: string | undefined;

  /**
   * @public
   * <p>The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The friendly name of the project.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space. To retrieve a list of project names, use <a>ListProjects</a>.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The friendly name displayed to users of the project in Amazon CodeCatalyst.</p>
   */
  displayName?: string;
}

/**
 * @public
 * <p>Information about the configuration of an integrated development environment (IDE) for a Dev Environment.</p>
 */
export interface IdeConfiguration {
  /**
   * @public
   * <p>A link to the IDE runtime image. </p>
   *          <note>
   *             <p>This parameter is not required for <code>VSCode</code>.</p>
   *          </note>
   */
  runtime?: string;

  /**
   * @public
   * <p>The name of the IDE. Valid values include <code>Cloud9</code>, <code>IntelliJ</code>, <code>PyCharm</code>, <code>GoLand</code>, and <code>VSCode</code>.</p>
   */
  name?: string;
}

/**
 * @public
 * @enum
 */
export const _InstanceType = {
  DEV_STANDARD1_LARGE: "dev.standard1.large",
  DEV_STANDARD1_MEDIUM: "dev.standard1.medium",
  DEV_STANDARD1_SMALL: "dev.standard1.small",
  DEV_STANDARD1_XLARGE: "dev.standard1.xlarge",
} as const;

/**
 * @public
 */
export type _InstanceType = (typeof _InstanceType)[keyof typeof _InstanceType];

/**
 * @public
 * <p>Information about the configuration of persistent storage for a Dev Environment. </p>
 */
export interface PersistentStorageConfiguration {
  /**
   * @public
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   */
  sizeInGiB: number | undefined;
}

/**
 * @public
 * <p>Information about a repository that will be cloned to a Dev Environment.</p>
 */
export interface RepositoryInput {
  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the branch in a source repository.</p>
   */
  branchName?: string;
}

/**
 * @public
 */
export interface CreateDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The source repository that contains the branch to clone into the Dev Environment. </p>
   */
  repositories?: RepositoryInput[];

  /**
   * @public
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The user-defined alias for a Dev Environment.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for a
   *       Dev Environment.</p>
   *          <note>
   *             <p>An IDE is required to create a Dev Environment. For Dev Environment creation, this field
   *         contains configuration information and must be provided. </p>
   *          </note>
   */
  ides?: IdeConfiguration[];

  /**
   * @public
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * @public
   * <p>Information about the amount of storage allocated to the Dev Environment. </p>
   *          <note>
   *             <p>By default, a Dev Environment is configured to have 16GB of persistent storage when created from the Amazon CodeCatalyst console, but there is no default when programmatically
   *         creating a Dev Environment.
   *         Valid values for persistent storage are based on memory sizes in 16GB increments. Valid
   *         values are 16, 32, and 64.</p>
   *          </note>
   */
  persistentStorage: PersistentStorageConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the deleted Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;
}

/**
 * @public
 * <p>Information about an integrated development environment (IDE) used in a Dev Environment.</p>
 */
export interface Ide {
  /**
   * @public
   * <p>A link to the IDE runtime image.</p>
   */
  runtime?: string;

  /**
   * @public
   * <p>The name of the IDE.</p>
   */
  name?: string;
}

/**
 * @public
 * <p>Information about the persistent storage for a Dev Environment.</p>
 */
export interface PersistentStorage {
  /**
   * @public
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   */
  sizeInGiB: number | undefined;
}

/**
 * @public
 * <p>Information about the source repsitory for a Dev Environment. </p>
 */
export interface DevEnvironmentRepositorySummary {
  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  repositoryName: string | undefined;

  /**
   * @public
   * <p>The name of the branch in a source repository cloned into the Dev Environment. </p>
   */
  branchName?: string;
}

/**
 * @public
 * @enum
 */
export const DevEnvironmentStatus = {
  DELETED: "DELETED",
  DELETING: "DELETING",
  FAILED: "FAILED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type DevEnvironmentStatus = (typeof DevEnvironmentStatus)[keyof typeof DevEnvironmentStatus];

/**
 * @public
 */
export interface GetDevEnvironmentResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   */
  creatorId: string | undefined;

  /**
   * @public
   * <p>The current status of the Dev Environment.</p>
   */
  status: DevEnvironmentStatus | string | undefined;

  /**
   * @public
   * <p>The reason for the status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>The source repository that contains the branch cloned into the Dev Environment. </p>
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * @public
   * <p>The user-specified alias for the Dev Environment. </p>
   */
  alias?: string;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment. </p>
   */
  ides?: Ide[];

  /**
   * @public
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.</p>
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * @public
   * <p>Information about the amount of storage allocated to the Dev Environment.  By default, a Dev Environment is configured to have 16GB of persistent storage.</p>
   */
  persistentStorage: PersistentStorage | undefined;
}

/**
 * @public
 * <p>Information about a filter used to limit results of a query.</p>
 */
export interface Filter {
  /**
   * @public
   * <p>A key that can be used to sort results.</p>
   */
  key: string | undefined;

  /**
   * @public
   * <p>The values of the key.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator used to compare the fields.</p>
   */
  comparisonOperator?: string;
}

/**
 * @public
 */
export interface ListDevEnvironmentsRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   */
  filters?: Filter[];

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a Dev Environment. </p>
 */
export interface DevEnvironmentSummary {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName?: string;

  /**
   * @public
   * <p>The system-generated unique ID for the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   */
  creatorId: string | undefined;

  /**
   * @public
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;

  /**
   * @public
   * <p>The reason for the status.</p>
   */
  statusReason?: string;

  /**
   * @public
   * <p>Information about the repositories that will be cloned into the Dev Environment. If no rvalue is specified, no repository is cloned.</p>
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * @public
   * <p>The user-specified alias for the Dev Environment.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   */
  ides?: Ide[];

  /**
   * @public
   * <p>The Amazon EC2 instace type used for the Dev Environment. </p>
   */
  instanceType: _InstanceType | string | undefined;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * @public
   * <p>Information about the configuration of persistent storage for the Dev Environment.</p>
   */
  persistentStorage: PersistentStorage | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsResponse {
  /**
   * @public
   * <p>Information about the Dev Environments in a project.</p>
   */
  items: DevEnvironmentSummary[] | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  devEnvironmentId: string | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about active sessions for a Dev Environment.</p>
 */
export interface DevEnvironmentSessionSummary {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  devEnvironmentId: string | undefined;

  /**
   * @public
   * <p>The date and time the session started, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   */
  startedTime: Date | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsResponse {
  /**
   * @public
   * <p>Information about each session retrieved in the list.</p>
   */
  items: DevEnvironmentSessionSummary[] | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface StartDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment. </p>
   */
  ides?: IdeConfiguration[];

  /**
   * @public
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   */
  inactivityTimeoutMinutes?: number;
}

/**
 * @public
 */
export interface StartDevEnvironmentResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;
}

/**
 * @public
 * <p>Information about the commands that will be run on a Dev Environment when an SSH session begins.</p>
 */
export interface ExecuteCommandSessionConfiguration {
  /**
   * @public
   * <p>The command used at the beginning of the SSH session to a Dev Environment.</p>
   */
  command: string | undefined;

  /**
   * @public
   * <p>An array of arguments containing arguments and members.</p>
   */
  arguments?: string[];
}

/**
 * @public
 * @enum
 */
export const DevEnvironmentSessionType = {
  SSH: "SSH",
  SSM: "SSM",
} as const;

/**
 * @public
 */
export type DevEnvironmentSessionType = (typeof DevEnvironmentSessionType)[keyof typeof DevEnvironmentSessionType];

/**
 * @public
 * <p>Information about the configuration of a Dev Environment session.</p>
 */
export interface DevEnvironmentSessionConfiguration {
  /**
   * @public
   * <p>The type of the session.</p>
   */
  sessionType: DevEnvironmentSessionType | string | undefined;

  /**
   * @public
   * <p>Information about optional commands that will be run on the Dev Environment when the SSH session begins.</p>
   */
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>Information about the configuration of a Dev Environment session.</p>
   */
  sessionConfiguration: DevEnvironmentSessionConfiguration | undefined;
}

/**
 * @public
 * <p>Information about connection details for a Dev Environment.</p>
 */
export interface DevEnvironmentAccessDetails {
  /**
   * @public
   * <p>The URL used to send commands to and from the Dev Environment.</p>
   */
  streamUrl: string | undefined;

  /**
   * @public
   * <p>An encrypted token value that contains session and caller information used to authenticate the connection.</p>
   */
  tokenValue: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionResponse {
  /**
   * @public
   * <p>Information about connection details for a Dev Environment.</p>
   */
  accessDetails: DevEnvironmentAccessDetails | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   */
  sessionId?: string;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The status of the Dev Environment. </p>
   */
  status: DevEnvironmentStatus | string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. To obtain this ID, use <a>ListDevEnvironments</a>.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment session. This ID is returned by <a>StartDevEnvironmentSession</a>.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The user-specified alias for the Dev Environment. Changing this value will not cause a restart.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   */
  ides?: IdeConfiguration[];

  /**
   * @public
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   */
  instanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.
   *       Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * @public
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentResponse {
  /**
   * @public
   * <p>The system-generated unique ID of the Dev Environment. </p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The user-specified alias for the Dev Environment.</p>
   */
  alias?: string;

  /**
   * @public
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment.</p>
   */
  ides?: IdeConfiguration[];

  /**
   * @public
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   */
  instanceType?: _InstanceType | string;

  /**
   * @public
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. </p>
   */
  inactivityTimeoutMinutes?: number;

  /**
   * @public
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   */
  clientToken?: string;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The friendly name of the project displayed to users in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  EQUALS: "EQ",
  GREATER_THAN: "GT",
  GREATER_THAN_OR_EQUALS: "GE",
  LESS_THAN: "LT",
  LESS_THAN_OR_EQUALS: "LE",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * @enum
 */
export const FilterKey = {
  HAS_ACCESS_TO: "hasAccessTo",
} as const;

/**
 * @public
 */
export type FilterKey = (typeof FilterKey)[keyof typeof FilterKey];

/**
 * @public
 * <p>nformation about the filter used to narrow the results returned in a list of projects.</p>
 */
export interface ProjectListFilter {
  /**
   * @public
   * <p>A key that can be used to sort results.</p>
   */
  key: FilterKey | string | undefined;

  /**
   * @public
   * <p>The values of the key.</p>
   */
  values: string[] | undefined;

  /**
   * @public
   * <p>The operator used to compare the fields.</p>
   */
  comparisonOperator?: ComparisonOperator | string;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   */
  filters?: ProjectListFilter[];
}

/**
 * @public
 * <p>Information about a project.</p>
 */
export interface ProjectSummary {
  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The friendly name displayed to users of the project in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about the projects.</p>
   */
  items?: ProjectSummary[];
}

/**
 * @public
 */
export interface CreateSourceRepositoryRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository. For more information about name requirements, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html">Quotas for source repositories</a>.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the source repository.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface CreateSourceRepositoryResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the source repository.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the repository.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the source repository.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  sourceRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsResponse {
  /**
   * @public
   * <p>The HTTPS URL to use when cloning the source repository.</p>
   */
  https: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a source repository returned in a list of source repositories.</p>
 */
export interface ListSourceRepositoriesItem {
  /**
   * @public
   * <p>The system-generated unique ID of the source repository.</p>
   */
  id: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the repository, if any.</p>
   */
  description?: string;

  /**
   * @public
   * <p>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime: Date | undefined;

  /**
   * @public
   * <p>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesResponse {
  /**
   * @public
   * <p>Information about the source repositories.</p>
   */
  items?: ListSourceRepositoriesItem[];

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the repository where you want to create a branch.</p>
   */
  sourceRepositoryName: string | undefined;

  /**
   * @public
   * <p>The name for the branch you're creating.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The commit ID in an existing branch from which you want to create the new branch.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchResponse {
  /**
   * @public
   * <p>The Git reference name of the branch.</p>
   */
  ref?: string;

  /**
   * @public
   * <p>The name of the newly created branch.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * @public
   * <p>The commit ID of the tip of the newly created branch.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project in the space.</p>
   */
  projectName: string | undefined;

  /**
   * @public
   * <p>The name of the source repository.</p>
   */
  sourceRepositoryName: string | undefined;

  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   */
  maxResults?: number;
}

/**
 * @public
 * <p>Information about a branch of a source repository returned in a list of branches.</p>
 */
export interface ListSourceRepositoryBranchesItem {
  /**
   * @public
   * <p>The Git reference name of the branch.</p>
   */
  ref?: string;

  /**
   * @public
   * <p>The name of the branch.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   */
  lastUpdatedTime?: Date;

  /**
   * @public
   * <p>The commit ID of the tip of the branch at the time of the request, also known as the head commit.</p>
   */
  headCommitId?: string;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesResponse {
  /**
   * @public
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>Information about the source branches.</p>
   */
  items: ListSourceRepositoryBranchesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName?: string;

  /**
   * @public
   * <p>The name of the project.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The friendly name of the project displayed to users in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the project.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface GetSubscriptionRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  spaceName: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionResponse {
  /**
   * @public
   * <p>The type of the billing plan for the space.</p>
   */
  subscriptionType?: string;

  /**
   * @public
   * <p>The display name of the Amazon Web Services account used for billing for the space.</p>
   */
  awsAccountName?: string;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name: string | undefined;

  /**
   * @public
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * @public
   * <p>The name of the space.</p>
   */
  name?: string;

  /**
   * @public
   * <p>The friendly name of the space displayed to users in Amazon CodeCatalyst.</p>
   */
  displayName?: string;

  /**
   * @public
   * <p>The description of the space.</p>
   */
  description?: string;
}

/**
 * @public
 */
export interface VerifySessionResponse {
  /**
   * @public
   * <p>The system-generated unique ID of the user in Amazon CodeCatalyst.</p>
   */
  identity?: string;
}

/**
 * @internal
 */
export const CreateAccessTokenResponseFilterSensitiveLog = (obj: CreateAccessTokenResponse): any => ({
  ...obj,
  ...(obj.secret && { secret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const DevEnvironmentAccessDetailsFilterSensitiveLog = (obj: DevEnvironmentAccessDetails): any => ({
  ...obj,
  ...(obj.streamUrl && { streamUrl: SENSITIVE_STRING }),
  ...(obj.tokenValue && { tokenValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const StartDevEnvironmentSessionResponseFilterSensitiveLog = (obj: StartDevEnvironmentSessionResponse): any => ({
  ...obj,
  ...(obj.accessDetails && { accessDetails: SENSITIVE_STRING }),
});
