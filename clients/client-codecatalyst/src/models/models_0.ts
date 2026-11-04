// smithy-typescript generated code
import type {
  _InstanceType,
  ComparisonOperator,
  DevEnvironmentSessionType,
  DevEnvironmentStatus,
  FilterKey,
  OperationType,
  UserType,
  WorkflowRunMode,
  WorkflowRunStatus,
  WorkflowStatus,
} from "./enums";

/**
 * @public
 */
export interface CreateAccessTokenRequest {
  /**
   * The friendly name of the personal access token.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  expiresTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenResponse {
  /**
   * The secret value of the personal access token.
   *
   * @public
   */
  secret: string | undefined;

  /**
   * The friendly name of the personal access token.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6). If not specified, the default is one year from creation.
   *
   * @public
   */
  expiresTime: Date | undefined;

  /**
   * The system-generated unique ID of the access token.
   *
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenRequest {
  /**
   * The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling ListAccessTokens.
   *
   * @public
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
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about a specified personal access token (PAT).
 *
 * @public
 */
export interface AccessTokenSummary {
  /**
   * The system-generated ID of the personal access token.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The friendly name of the personal access token.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The date and time when the personal access token will expire, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  expiresTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensResponse {
  /**
   * A list of personal access tokens (PATs) associated with the calling user identity.
   *
   * @public
   */
  items: AccessTokenSummary[] | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUserDetailsRequest {
  /**
   * The system-generated unique ID of the user.
   *
   * @public
   */
  id?: string | undefined;

  /**
   * The name of the user as displayed in Amazon CodeCatalyst.
   *
   * @public
   */
  userName?: string | undefined;
}

/**
 * Information about an email address.
 *
 * @public
 */
export interface EmailAddress {
  /**
   * The email address.
   *
   * @public
   */
  email?: string | undefined;

  /**
   * Whether the email address has been verified.
   *
   * @public
   */
  verified?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUserDetailsResponse {
  /**
   * The system-generated unique ID of the user.
   *
   * @public
   */
  userId?: string | undefined;

  /**
   * The name of the user as displayed in Amazon CodeCatalyst.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The friendly name displayed for the user in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The email address provided by the user when they signed up.
   *
   * @public
   */
  primaryEmail?: EmailAddress | undefined;

  /**
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * The name of the space. To retrieve a list of space names, use ListSpaces.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The friendly name of the space displayed to users of the space in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListEventLogsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The name of the event.
   *
   * @public
   */
  eventName?: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a project in a space.
 *
 * @public
 */
export interface ProjectInformation {
  /**
   * The name of the project in the space.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The system-generated unique ID of the project.
   *
   * @public
   */
  projectId?: string | undefined;
}

/**
 * Information about the payload of an event recording Amazon CodeCatalyst activity.
 *
 * @public
 */
export interface EventPayload {
  /**
   * The type of content in the event payload.
   *
   * @public
   */
  contentType?: string | undefined;

  /**
   * The data included in the event payload.
   *
   * @public
   */
  data?: string | undefined;
}

/**
 * Information about a user whose activity is recorded in an event for a space.
 *
 * @public
 */
export interface UserIdentity {
  /**
   * The role assigned to the user in a Amazon CodeCatalyst space or project when the event occurred.
   *
   * @public
   */
  userType: UserType | undefined;

  /**
   * The ID of the Amazon CodeCatalyst service principal.
   *
   * @public
   */
  principalId: string | undefined;

  /**
   * The display name of the user in Amazon CodeCatalyst.
   *
   * @public
   */
  userName?: string | undefined;

  /**
   * The Amazon Web Services account number of the user in Amazon Web Services, if any.
   *
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * Information about an entry in an event log of Amazon CodeCatalyst activity.
 *
 * @public
 */
export interface EventLogEntry {
  /**
   * The system-generated unique ID of the event.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the event.
   *
   * @public
   */
  eventName: string | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  eventType: string | undefined;

  /**
   * The category for the event.
   *
   * @public
   */
  eventCategory: string | undefined;

  /**
   * The source of the event.
   *
   * @public
   */
  eventSource: string | undefined;

  /**
   * The time the event took place, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  eventTime: Date | undefined;

  /**
   * The type of the event.
   *
   * @public
   */
  operationType: OperationType | undefined;

  /**
   * The system-generated unique ID of the user whose actions are recorded in the event.
   *
   * @public
   */
  userIdentity: UserIdentity | undefined;

  /**
   * Information about the project where the event occurred.
   *
   * @public
   */
  projectInformation?: ProjectInformation | undefined;

  /**
   * The system-generated unique ID of the request.
   *
   * @public
   */
  requestId?: string | undefined;

  /**
   * Information about the payload of the request.
   *
   * @public
   */
  requestPayload?: EventPayload | undefined;

  /**
   * Information about the payload of the response, if any.
   *
   * @public
   */
  responsePayload?: EventPayload | undefined;

  /**
   * The code of the error, if any.
   *
   * @public
   */
  errorCode?: string | undefined;

  /**
   * The IP address of the user whose actions are recorded in the event.
   *
   * @public
   */
  sourceIpAddress?: string | undefined;

  /**
   * The user agent whose actions are recorded in the event.
   *
   * @public
   */
  userAgent?: string | undefined;
}

/**
 * @public
 */
export interface ListEventLogsResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about each event retrieved in the list.
   *
   * @public
   */
  items: EventLogEntry[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Region where the space exists.
   *
   * @public
   */
  regionName: string | undefined;

  /**
   * The friendly name of the space displayed to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * Information about a filter used to limit results of a query.
 *
 * @public
 */
export interface Filter {
  /**
   * A key that can be used to sort results.
   *
   * @public
   */
  key: string | undefined;

  /**
   * The values of the key.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator used to compare the fields.
   *
   * @public
   */
  comparisonOperator?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * Information about filters to apply to narrow the results returned in the list.
   *
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about an integrated development environment (IDE) used in a Dev Environment.
 *
 * @public
 */
export interface Ide {
  /**
   * A link to the IDE runtime image.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The name of the IDE.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about the persistent storage for a Dev Environment.
 *
 * @public
 */
export interface PersistentStorage {
  /**
   * The size of the persistent storage in gigabytes (specifically GiB).
   *
   * > **Note:** Valid values for storage are based on memory sizes in 16GB increments. Valid values are 16, 32, and 64.
   *
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * Information about the source repsitory for a Dev Environment.
 *
 * @public
 */
export interface DevEnvironmentRepositorySummary {
  /**
   * The name of the source repository.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch in a source repository cloned into the Dev Environment.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * Information about a Dev Environment.
 *
 * @public
 */
export interface DevEnvironmentSummary {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName?: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName?: string | undefined;

  /**
   * The system-generated unique ID for the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The system-generated unique ID of the user who created the Dev Environment.
   *
   * @public
   */
  creatorId: string | undefined;

  /**
   * The status of the Dev Environment.
   *
   * @public
   */
  status: DevEnvironmentStatus | undefined;

  /**
   * The reason for the status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * Information about the repositories that will be cloned into the Dev Environment. If no rvalue is specified, no repository is cloned.
   *
   * @public
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * The user-specified alias for the Dev Environment.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for a Dev Environment.
   *
   * @public
   */
  ides?: Ide[] | undefined;

  /**
   * The Amazon EC2 instace type used for the Dev Environment.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Dev Environments consume compute minutes when running.
   *
   * @public
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * Information about the configuration of persistent storage for the Dev Environment.
   *
   * @public
   */
  persistentStorage: PersistentStorage | undefined;

  /**
   * The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.
   *
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsResponse {
  /**
   * Information about the Dev Environments in a project.
   *
   * @public
   */
  items: DevEnvironmentSummary[] | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about an space.
 *
 * @public
 */
export interface SpaceSummary {
  /**
   * The name of the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The Amazon Web Services Region where the space exists.
   *
   * @public
   */
  regionName: string | undefined;

  /**
   * The friendly name of the space displayed to users.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about the spaces.
   *
   * @public
   */
  items?: SpaceSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The friendly name of the project that will be displayed to users.
   *
   * @public
   */
  displayName: string | undefined;

  /**
   * The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName?: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The friendly name of the project.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space. To retrieve a list of project names, use ListProjects.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The friendly name displayed to users of the project in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;
}

/**
 * Information about the configuration of an integrated development environment (IDE) for a Dev Environment.
 *
 * @public
 */
export interface IdeConfiguration {
  /**
   * A link to the IDE runtime image.
   *
   * > **Note:** This parameter is not required for `VSCode`.
   *
   * @public
   */
  runtime?: string | undefined;

  /**
   * The name of the IDE. Valid values include `Cloud9`, `IntelliJ`, `PyCharm`, `GoLand`, and `VSCode`.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Information about the configuration of persistent storage for a Dev Environment.
 *
 * @public
 */
export interface PersistentStorageConfiguration {
  /**
   * The size of the persistent storage in gigabytes (specifically GiB).
   *
   * > **Note:** Valid values for storage are based on memory sizes in 16GB increments. Valid values are 16, 32, and 64.
   *
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * Information about a repository that will be cloned to a Dev Environment.
 *
 * @public
 */
export interface RepositoryInput {
  /**
   * The name of the source repository.
   *
   * @public
   */
  repositoryName: string | undefined;

  /**
   * The name of the branch in a source repository.
   *
   * @public
   */
  branchName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The source repository that contains the branch to clone into the Dev Environment.
   *
   * @public
   */
  repositories?: RepositoryInput[] | undefined;

  /**
   * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The user-defined alias for a Dev Environment.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for a Dev Environment.
   *
   * > **Note:** An IDE is required to create a Dev Environment. For Dev Environment creation, this field contains configuration information and must be provided.
   *
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * The Amazon EC2 instace type to use for the Dev Environment.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
   *
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * Information about the amount of storage allocated to the Dev Environment.
   *
   * > **Note:** By default, a Dev Environment is configured to have 16GB of persistent storage when created from the Amazon CodeCatalyst console, but there is no default when programmatically creating a Dev Environment. Valid values for persistent storage are based on memory sizes in 16GB increments. Valid values are 16, 32, and 64.
   *
   * @public
   */
  persistentStorage: PersistentStorageConfiguration | undefined;

  /**
   * The name of the connection that will be used to connect to Amazon VPC, if any.
   *
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.
   *
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use ListDevEnvironments.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the deleted Dev Environment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use ListDevEnvironments.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The system-generated unique ID of the user who created the Dev Environment.
   *
   * @public
   */
  creatorId: string | undefined;

  /**
   * The current status of the Dev Environment.
   *
   * @public
   */
  status: DevEnvironmentStatus | undefined;

  /**
   * The reason for the status.
   *
   * @public
   */
  statusReason?: string | undefined;

  /**
   * The source repository that contains the branch cloned into the Dev Environment.
   *
   * @public
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * The user-specified alias for the Dev Environment.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for the Dev Environment.
   *
   * @public
   */
  ides?: Ide[] | undefined;

  /**
   * The Amazon EC2 instace type to use for the Dev Environment.
   *
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.
   *
   * @public
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * Information about the amount of storage allocated to the Dev Environment. By default, a Dev Environment is configured to have 16GB of persistent storage.
   *
   * @public
   */
  persistentStorage: PersistentStorage | undefined;

  /**
   * The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.
   *
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  devEnvironmentId: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about active sessions for a Dev Environment.
 *
 * @public
 */
export interface DevEnvironmentSessionSummary {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  devEnvironmentId: string | undefined;

  /**
   * The date and time the session started, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  startedTime: Date | undefined;

  /**
   * The system-generated unique ID of the Dev Environment session.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsResponse {
  /**
   * Information about each session retrieved in the list.
   *
   * @public
   */
  items: DevEnvironmentSessionSummary[] | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for a Dev Environment.
   *
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * The Amazon EC2 instace type to use for the Dev Environment.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
   *
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the Dev Environment.
   *
   * @public
   */
  status: DevEnvironmentStatus | undefined;
}

/**
 * Information about the commands that will be run on a Dev Environment when an SSH session begins.
 *
 * @public
 */
export interface ExecuteCommandSessionConfiguration {
  /**
   * The command used at the beginning of the SSH session to a Dev Environment.
   *
   * @public
   */
  command: string | undefined;

  /**
   * An array of arguments containing arguments and members.
   *
   * @public
   */
  arguments?: string[] | undefined;
}

/**
 * Information about the configuration of a Dev Environment session.
 *
 * @public
 */
export interface DevEnvironmentSessionConfiguration {
  /**
   * The type of the session.
   *
   * @public
   */
  sessionType: DevEnvironmentSessionType | undefined;

  /**
   * Information about optional commands that will be run on the Dev Environment when the SSH session begins.
   *
   * @public
   */
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * Information about the configuration of a Dev Environment session.
   *
   * @public
   */
  sessionConfiguration: DevEnvironmentSessionConfiguration | undefined;
}

/**
 * Information about connection details for a Dev Environment.
 *
 * @public
 */
export interface DevEnvironmentAccessDetails {
  /**
   * The URL used to send commands to and from the Dev Environment.
   *
   * @public
   */
  streamUrl: string | undefined;

  /**
   * An encrypted token value that contains session and caller information used to authenticate the connection.
   *
   * @public
   */
  tokenValue: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionResponse {
  /**
   * Information about connection details for a Dev Environment.
   *
   * @public
   */
  accessDetails: DevEnvironmentAccessDetails | undefined;

  /**
   * The system-generated unique ID of the Dev Environment session.
   *
   * @public
   */
  sessionId?: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The status of the Dev Environment.
   *
   * @public
   */
  status: DevEnvironmentStatus | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment. To obtain this ID, use ListDevEnvironments.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment session. This ID is returned by StartDevEnvironmentSession.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment session.
   *
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The user-specified alias for the Dev Environment. Changing this value will not cause a restart.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for a Dev Environment.
   *
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * The Amazon EC2 instace type to use for the Dev Environment.
   *
   * > **Note:** Changing this value will cause a restart of the Dev Environment if it is running.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.
   *
   * > **Note:** Changing this value will cause a restart of the Dev Environment if it is running.
   *
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentResponse {
  /**
   * The system-generated unique ID of the Dev Environment.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The user-specified alias for the Dev Environment.
   *
   * @public
   */
  alias?: string | undefined;

  /**
   * Information about the integrated development environment (IDE) configured for the Dev Environment.
   *
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * The Amazon EC2 instace type to use for the Dev Environment.
   *
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.
   *
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName?: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The friendly name of the project displayed to users in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * nformation about the filter used to narrow the results returned in a list of projects.
 *
 * @public
 */
export interface ProjectListFilter {
  /**
   * A key that can be used to sort results.
   *
   * @public
   */
  key: FilterKey | undefined;

  /**
   * The values of the key.
   *
   * @public
   */
  values: string[] | undefined;

  /**
   * The operator used to compare the fields.
   *
   * @public
   */
  comparisonOperator?: ComparisonOperator | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Information about filters to apply to narrow the results returned in the list.
   *
   * @public
   */
  filters?: ProjectListFilter[] | undefined;
}

/**
 * Information about a project.
 *
 * @public
 */
export interface ProjectSummary {
  /**
   * The name of the project in the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The friendly name displayed to users of the project in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about the projects.
   *
   * @public
   */
  items?: ProjectSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository. For more information about name requirements, see [Quotas for source repositories](https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html).
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the source repository.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the source repository.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the repository.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the source repository.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  sourceRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsResponse {
  /**
   * The HTTPS URL to use when cloning the source repository.
   *
   * @public
   */
  https: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a source repository returned in a list of source repositories.
 *
 * @public
 */
export interface ListSourceRepositoriesItem {
  /**
   * The system-generated unique ID of the source repository.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the repository, if any.
   *
   * @public
   */
  description?: string | undefined;

  /**
   * The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesResponse {
  /**
   * Information about the source repositories.
   *
   * @public
   */
  items?: ListSourceRepositoriesItem[] | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the repository where you want to create a branch.
   *
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * The name for the branch you're creating.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The commit ID in an existing branch from which you want to create the new branch.
   *
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchResponse {
  /**
   * The Git reference name of the branch.
   *
   * @public
   */
  ref?: string | undefined;

  /**
   * The name of the newly created branch.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The commit ID of the tip of the newly created branch.
   *
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The name of the source repository.
   *
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * Information about a branch of a source repository returned in a list of branches.
 *
 * @public
 */
export interface ListSourceRepositoryBranchesItem {
  /**
   * The Git reference name of the branch.
   *
   * @public
   */
  ref?: string | undefined;

  /**
   * The name of the branch.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * The commit ID of the tip of the branch at the time of the request, also known as the head commit.
   *
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about the source branches.
   *
   * @public
   */
  items: ListSourceRepositoryBranchesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName?: string | undefined;

  /**
   * The name of the project.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The friendly name of the project displayed to users in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the project.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The ID of the workflow. To rerieve a list of workflow IDs, use ListWorkflows.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;
}

/**
 * Information about a workflow definition file.
 *
 * @public
 */
export interface WorkflowDefinition {
  /**
   * The path to the workflow definition file stored in the source repository for the project, including the file name.
   *
   * @public
   */
  path: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The ID of the workflow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the source repository where the workflow YAML is stored.
   *
   * @public
   */
  sourceRepositoryName?: string | undefined;

  /**
   * The name of the branch that contains the workflow YAML.
   *
   * @public
   */
  sourceBranchName?: string | undefined;

  /**
   * Information about the workflow definition file for the workflow.
   *
   * @public
   */
  definition: WorkflowDefinition | undefined;

  /**
   * The date and time the workflow was created, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The behavior to use when multiple workflows occur at the same time. For more information, see [https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-configure-runs.html](https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-configure-runs.html) in the Amazon CodeCatalyst User Guide.
   *
   * @public
   */
  runMode: WorkflowRunMode | undefined;

  /**
   * The status of the workflow.
   *
   * @public
   */
  status: WorkflowStatus | undefined;
}

/**
 * Information used to sort workflows in the returned list.
 *
 * @public
 */
export interface WorkflowSortCriteria {}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Information used to sort the items in the returned list.
   *
   * @public
   */
  sortBy?: WorkflowSortCriteria[] | undefined;
}

/**
 * Information about a workflow definition.
 *
 * @public
 */
export interface WorkflowDefinitionSummary {
  /**
   * The path to the workflow definition file stored in the source repository for the project, including the file name.
   *
   * @public
   */
  path: string | undefined;
}

/**
 * Information about a workflow.
 *
 * @public
 */
export interface WorkflowSummary {
  /**
   * The system-generated unique ID of a workflow.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The name of the source repository where the workflow definition file is stored.
   *
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * The name of the branch of the source repository where the workflow definition file is stored.
   *
   * @public
   */
  sourceBranchName: string | undefined;

  /**
   * Information about the workflow definition file.
   *
   * @public
   */
  definition: WorkflowDefinitionSummary | undefined;

  /**
   * The date and time the workflow was created, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  createdTime: Date | undefined;

  /**
   * The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * The run mode of the workflow.
   *
   * @public
   */
  runMode: WorkflowRunMode | undefined;

  /**
   * The status of the workflow.
   *
   * @public
   */
  status: WorkflowStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about the workflows in a project.
   *
   * @public
   */
  items?: WorkflowSummary[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The ID of the workflow run. To retrieve a list of workflow run IDs, use ListWorkflowRuns.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;
}

/**
 * Information about the status of a workflow run.
 *
 * @public
 */
export interface WorkflowRunStatusReason {}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The ID of the workflow run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The ID of the workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The status of the workflow run.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * Information about the reasons for the status of the workflow run.
   *
   * @public
   */
  statusReasons?: WorkflowRunStatusReason[] | undefined;

  /**
   * The date and time the workflow run began, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The date and time the workflow run ended, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The date and time the workflow run status was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * Information used to sort workflow runs in the returned list.
 *
 * @public
 */
export interface WorkflowRunSortCriteria {}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The ID of the workflow. To retrieve a list of workflow IDs, use ListWorkflows.
   *
   * @public
   */
  workflowId?: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a `NextToken` element, which you can use to obtain additional results.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Information used to sort the items in the returned list.
   *
   * @public
   */
  sortBy?: WorkflowRunSortCriteria[] | undefined;
}

/**
 * Information about a workflow run.
 *
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * The system-generated unique ID of the workflow run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The system-generated unique ID of the workflow.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * The name of the workflow.
   *
   * @public
   */
  workflowName: string | undefined;

  /**
   * The status of the workflow run.
   *
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * The reasons for the workflow run status.
   *
   * @public
   */
  statusReasons?: WorkflowRunStatusReason[] | undefined;

  /**
   * The date and time the workflow run began, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The date and time the workflow run ended, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6)
   *
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * A token returned from a call to this API to indicate the next batch of results to return, if any.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Information about the runs of a workflow.
   *
   * @public
   */
  items?: WorkflowRunSummary[] | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the workflow. To retrieve a list of workflow IDs, use ListWorkflows.
   *
   * @public
   */
  workflowId: string | undefined;

  /**
   * A user-specified idempotency token. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;

  /**
   * The name of the project in the space.
   *
   * @public
   */
  projectName: string | undefined;

  /**
   * The system-generated unique ID of the workflow run.
   *
   * @public
   */
  id: string | undefined;

  /**
   * The system-generated unique ID of the workflow.
   *
   * @public
   */
  workflowId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  spaceName: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionResponse {
  /**
   * The type of the billing plan for the space.
   *
   * @public
   */
  subscriptionType?: string | undefined;

  /**
   * The display name of the Amazon Web Services account used for billing for the space.
   *
   * @public
   */
  awsAccountName?: string | undefined;

  /**
   * The type of the billing plan that the space will be changed to at the start of the next billing cycle. This applies only to changes that reduce the functionality available for the space. Billing plan changes that increase functionality are applied immediately. For more information, see [Pricing](https://codecatalyst.aws/explore/pricing).
   *
   * @public
   */
  pendingSubscriptionType?: string | undefined;

  /**
   * The day and time the pending change will be applied to the space, in coordinated universal time (UTC) timestamp format as specified in [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339#section-5.6).
   *
   * @public
   */
  pendingSubscriptionStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * The name of the space.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * The name of the space.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The friendly name of the space displayed to users in Amazon CodeCatalyst.
   *
   * @public
   */
  displayName?: string | undefined;

  /**
   * The description of the space.
   *
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface VerifySessionResponse {
  /**
   * The system-generated unique ID of the user in Amazon CodeCatalyst.
   *
   * @public
   */
  identity?: string | undefined;
}
