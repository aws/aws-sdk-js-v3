// smithy-typescript generated code
/**
 * @public
 */
export interface CreateAccessTokenRequest {
  /**
   * <p>The friendly name of the personal access token.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  expiresTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateAccessTokenResponse {
  /**
   * <p>The secret value of the personal access token.</p>
   * @public
   */
  secret: string | undefined;

  /**
   * <p>The friendly name of the personal access token.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time the personal access token expires, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>. If not specified, the default is one year from creation.</p>
   * @public
   */
  expiresTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the access token.</p>
   * @public
   */
  accessTokenId: string | undefined;
}

/**
 * @public
 */
export interface DeleteAccessTokenRequest {
  /**
   * <p>The ID of the personal access token to delete. You can find the IDs of all PATs associated with your Amazon Web Services Builder ID in a space by calling <a>ListAccessTokens</a>.</p>
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
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about a specified personal access token (PAT).</p>
 * @public
 */
export interface AccessTokenSummary {
  /**
   * <p>The system-generated ID of the personal access token.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The friendly name of the personal access token.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The date and time when the personal access token will expire, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  expiresTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListAccessTokensResponse {
  /**
   * <p>A list of personal access tokens (PATs) associated with the calling user identity.</p>
   * @public
   */
  items: AccessTokenSummary[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetUserDetailsRequest {
  /**
   * <p>The system-generated unique ID of the user. </p>
   * @public
   */
  id?: string | undefined;

  /**
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   * @public
   */
  userName?: string | undefined;
}

/**
 * <p>Information about an email address.</p>
 * @public
 */
export interface EmailAddress {
  /**
   * <p>The email address.</p>
   * @public
   */
  email?: string | undefined;

  /**
   * <p>Whether the email address has been verified.</p>
   * @public
   */
  verified?: boolean | undefined;
}

/**
 * @public
 */
export interface GetUserDetailsResponse {
  /**
   * <p>The system-generated unique ID of the user.</p>
   * @public
   */
  userId?: string | undefined;

  /**
   * <p>The name of the user as displayed in Amazon CodeCatalyst.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The friendly name displayed for the user in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The email address provided by the user when they signed up.</p>
   * @public
   */
  primaryEmail?: EmailAddress | undefined;

  /**
   * <p/>
   * @public
   */
  version?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceRequest {
  /**
   * <p>The name of the space.  To retrieve a list of space names, use <a>ListSpaces</a>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSpaceResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users of the space in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * @public
 */
export interface ListEventLogsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The date and time when you want to start retrieving events, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The time after which you do not want any events retrieved, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The name of the event.</p>
   * @public
   */
  eventName?: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;
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
 * <p>Information about a project in a space.</p>
 * @public
 */
export interface ProjectInformation {
  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The system-generated unique ID of the project.</p>
   * @public
   */
  projectId?: string | undefined;
}

/**
 * <p>Information about the payload of an event recording Amazon CodeCatalyst activity.</p>
 * @public
 */
export interface EventPayload {
  /**
   * <p>The type of content in the event payload.</p>
   * @public
   */
  contentType?: string | undefined;

  /**
   * <p>The data included in the event payload.</p>
   * @public
   */
  data?: string | undefined;
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
 * <p>Information about a user whose activity is recorded in an event for a space.</p>
 * @public
 */
export interface UserIdentity {
  /**
   * <p>The role assigned to the user in a Amazon CodeCatalyst space or project when the event occurred.</p>
   * @public
   */
  userType: UserType | undefined;

  /**
   * <p>The ID of the Amazon CodeCatalyst service principal.</p>
   * @public
   */
  principalId: string | undefined;

  /**
   * <p>The display name of the user in Amazon CodeCatalyst.</p>
   * @public
   */
  userName?: string | undefined;

  /**
   * <p>The Amazon Web Services account number of the user in Amazon Web Services, if any.</p>
   * @public
   */
  awsAccountId?: string | undefined;
}

/**
 * <p>Information about an entry in an event log of Amazon CodeCatalyst activity.</p>
 * @public
 */
export interface EventLogEntry {
  /**
   * <p>The system-generated unique ID of the event.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the event.</p>
   * @public
   */
  eventName: string | undefined;

  /**
   * <p>The type of the event.</p>
   * @public
   */
  eventType: string | undefined;

  /**
   * <p>The category for the event.</p>
   * @public
   */
  eventCategory: string | undefined;

  /**
   * <p>The source of the event.</p>
   * @public
   */
  eventSource: string | undefined;

  /**
   * <p>The time the event took place, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  eventTime: Date | undefined;

  /**
   * <p>The type of the event.</p>
   * @public
   */
  operationType: OperationType | undefined;

  /**
   * <p>The system-generated unique ID of the user whose actions are recorded in the event.</p>
   * @public
   */
  userIdentity: UserIdentity | undefined;

  /**
   * <p>Information about the project where the event occurred.</p>
   * @public
   */
  projectInformation?: ProjectInformation | undefined;

  /**
   * <p>The system-generated unique ID of the request.</p>
   * @public
   */
  requestId?: string | undefined;

  /**
   * <p>Information about the payload of the request.</p>
   * @public
   */
  requestPayload?: EventPayload | undefined;

  /**
   * <p>Information about the payload of the response, if any.</p>
   * @public
   */
  responsePayload?: EventPayload | undefined;

  /**
   * <p>The code of the error, if any.</p>
   * @public
   */
  errorCode?: string | undefined;

  /**
   * <p>The IP address of the user whose actions are recorded in the event.</p>
   * @public
   */
  sourceIpAddress?: string | undefined;

  /**
   * <p>The user agent whose actions are recorded in the event.</p>
   * @public
   */
  userAgent?: string | undefined;
}

/**
 * @public
 */
export interface ListEventLogsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about each event retrieved in the list.</p>
   * @public
   */
  items: EventLogEntry[] | undefined;
}

/**
 * @public
 */
export interface GetSpaceRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSpaceResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Region where the space exists.</p>
   * @public
   */
  regionName: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * <p>Information about a filter used to limit results of a query.</p>
 * @public
 */
export interface Filter {
  /**
   * <p>A key that can be used to sort results.</p>
   * @public
   */
  key: string | undefined;

  /**
   * <p>The values of the key.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator used to compare the fields.</p>
   * @public
   */
  comparisonOperator?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   * @public
   */
  filters?: Filter[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about an integrated development environment (IDE) used in a Dev Environment.</p>
 * @public
 */
export interface Ide {
  /**
   * <p>A link to the IDE runtime image.</p>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The name of the IDE.</p>
   * @public
   */
  name?: string | undefined;
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
 * <p>Information about the persistent storage for a Dev Environment.</p>
 * @public
 */
export interface PersistentStorage {
  /**
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>Information about the source repsitory for a Dev Environment. </p>
 * @public
 */
export interface DevEnvironmentRepositorySummary {
  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch in a source repository cloned into the Dev Environment. </p>
   * @public
   */
  branchName?: string | undefined;
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
 * <p>Information about a Dev Environment. </p>
 * @public
 */
export interface DevEnvironmentSummary {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName?: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName?: string | undefined;

  /**
   * <p>The system-generated unique ID for the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   * @public
   */
  creatorId: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   * @public
   */
  status: DevEnvironmentStatus | undefined;

  /**
   * <p>The reason for the status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>Information about the repositories that will be cloned into the Dev Environment. If no rvalue is specified, no repository is cloned.</p>
   * @public
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   * @public
   */
  ides?: Ide[] | undefined;

  /**
   * <p>The Amazon EC2 instace type used for the Dev Environment. </p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Dev Environments consume compute minutes when running.</p>
   * @public
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * <p>Information about the configuration of persistent storage for the Dev Environment.</p>
   * @public
   */
  persistentStorage: PersistentStorage | undefined;

  /**
   * <p>The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.</p>
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentsResponse {
  /**
   * <p>Information about the Dev Environments in a project.</p>
   * @public
   */
  items: DevEnvironmentSummary[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesRequest {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about an space.</p>
 * @public
 */
export interface SpaceSummary {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The Amazon Web Services Region
   *       where the space exists.</p>
   * @public
   */
  regionName: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListSpacesResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about the spaces. </p>
   * @public
   */
  items?: SpaceSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateProjectRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The friendly name of the project that will be displayed to users.</p>
   * @public
   */
  displayName: string | undefined;

  /**
   * <p>The description of the project. This description will be displayed to all users of the project. We recommend providing a brief description of the project and its intended purpose.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateProjectResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName?: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The friendly name of the project.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space. To retrieve a list of project names, use <a>ListProjects</a>.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteProjectResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The friendly name displayed to users of the project in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;
}

/**
 * <p>Information about the configuration of an integrated development environment (IDE) for a Dev Environment.</p>
 * @public
 */
export interface IdeConfiguration {
  /**
   * <p>A link to the IDE runtime image. </p>
   *          <note>
   *             <p>This parameter is not required for <code>VSCode</code>.</p>
   *          </note>
   * @public
   */
  runtime?: string | undefined;

  /**
   * <p>The name of the IDE. Valid values include <code>Cloud9</code>, <code>IntelliJ</code>, <code>PyCharm</code>, <code>GoLand</code>, and <code>VSCode</code>.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p>Information about the configuration of persistent storage for a Dev Environment. </p>
 * @public
 */
export interface PersistentStorageConfiguration {
  /**
   * <p>The size of the persistent storage in gigabytes (specifically GiB).</p>
   *          <note>
   *             <p>Valid values for storage are based on memory sizes in 16GB increments. Valid values are
   *         16, 32, and 64.</p>
   *          </note>
   * @public
   */
  sizeInGiB: number | undefined;
}

/**
 * <p>Information about a repository that will be cloned to a Dev Environment.</p>
 * @public
 */
export interface RepositoryInput {
  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  repositoryName: string | undefined;

  /**
   * <p>The name of the branch in a source repository.</p>
   * @public
   */
  branchName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The source repository that contains the branch to clone into the Dev Environment. </p>
   * @public
   */
  repositories?: RepositoryInput[] | undefined;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The user-defined alias for a Dev Environment.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a
   *       Dev Environment.</p>
   *          <note>
   *             <p>An IDE is required to create a Dev Environment. For Dev Environment creation, this field
   *         contains configuration information and must be provided. </p>
   *          </note>
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * <p>Information about the amount of storage allocated to the Dev Environment. </p>
   *          <note>
   *             <p>By default, a Dev Environment is configured to have 16GB of persistent storage when created from the Amazon CodeCatalyst console, but there is no default when programmatically
   *         creating a Dev Environment.
   *         Valid values for persistent storage are based on memory sizes in 16GB increments. Valid
   *         values are 16, 32, and 64.</p>
   *          </note>
   * @public
   */
  persistentStorage: PersistentStorageConfiguration | undefined;

  /**
   * <p>The name of the connection that will be used to connect to Amazon VPC, if any.</p>
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.</p>
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment you want to delete. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface DeleteDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the deleted Dev Environment. </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment for which you want to view information. To retrieve a list of Dev Environment IDs, use <a>ListDevEnvironments</a>.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface GetDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The time when the Dev Environment was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the user who created the Dev Environment. </p>
   * @public
   */
  creatorId: string | undefined;

  /**
   * <p>The current status of the Dev Environment.</p>
   * @public
   */
  status: DevEnvironmentStatus | undefined;

  /**
   * <p>The reason for the status.</p>
   * @public
   */
  statusReason?: string | undefined;

  /**
   * <p>The source repository that contains the branch cloned into the Dev Environment. </p>
   * @public
   */
  repositories: DevEnvironmentRepositorySummary[] | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment. </p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment. </p>
   * @public
   */
  ides?: Ide[] | undefined;

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   * @public
   */
  instanceType: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.</p>
   * @public
   */
  inactivityTimeoutMinutes: number | undefined;

  /**
   * <p>Information about the amount of storage allocated to the Dev Environment.  By default, a Dev Environment is configured to have 16GB of persistent storage.</p>
   * @public
   */
  persistentStorage: PersistentStorage | undefined;

  /**
   * <p>The name of the connection used to connect to Amazon VPC used when the Dev Environment was created, if any.</p>
   * @public
   */
  vpcConnectionName?: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   * @public
   */
  devEnvironmentId: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about active sessions for a Dev Environment.</p>
 * @public
 */
export interface DevEnvironmentSessionSummary {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   * @public
   */
  devEnvironmentId: string | undefined;

  /**
   * <p>The date and time the session started, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  startedTime: Date | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface ListDevEnvironmentSessionsResponse {
  /**
   * <p>Information about each session retrieved in the list.</p>
   * @public
   */
  items: DevEnvironmentSessionSummary[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment. </p>
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   * @public
   */
  status: DevEnvironmentStatus | undefined;
}

/**
 * <p>Information about the commands that will be run on a Dev Environment when an SSH session begins.</p>
 * @public
 */
export interface ExecuteCommandSessionConfiguration {
  /**
   * <p>The command used at the beginning of the SSH session to a Dev Environment.</p>
   * @public
   */
  command: string | undefined;

  /**
   * <p>An array of arguments containing arguments and members.</p>
   * @public
   */
  arguments?: string[] | undefined;
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
 * <p>Information about the configuration of a Dev Environment session.</p>
 * @public
 */
export interface DevEnvironmentSessionConfiguration {
  /**
   * <p>The type of the session.</p>
   * @public
   */
  sessionType: DevEnvironmentSessionType | undefined;

  /**
   * <p>Information about optional commands that will be run on the Dev Environment when the SSH session begins.</p>
   * @public
   */
  executeCommandSessionConfiguration?: ExecuteCommandSessionConfiguration | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>Information about the configuration of a Dev Environment session.</p>
   * @public
   */
  sessionConfiguration: DevEnvironmentSessionConfiguration | undefined;
}

/**
 * <p>Information about connection details for a Dev Environment.</p>
 * @public
 */
export interface DevEnvironmentAccessDetails {
  /**
   * <p>The URL used to send commands to and from the Dev Environment.</p>
   * @public
   */
  streamUrl: string | undefined;

  /**
   * <p>An encrypted token value that contains session and caller information used to authenticate the connection.</p>
   * @public
   */
  tokenValue: string | undefined;
}

/**
 * @public
 */
export interface StartDevEnvironmentSessionResponse {
  /**
   * <p>Information about connection details for a Dev Environment.</p>
   * @public
   */
  accessDetails: DevEnvironmentAccessDetails | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   * @public
   */
  sessionId?: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The status of the Dev Environment. </p>
   * @public
   */
  status: DevEnvironmentStatus | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. To obtain this ID, use <a>ListDevEnvironments</a>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session. This ID is returned by <a>StartDevEnvironmentSession</a>.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface StopDevEnvironmentSessionResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment session.</p>
   * @public
   */
  sessionId: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment. Changing this value will not cause a restart.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for a Dev Environment.</p>
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes.
   *       Only whole integers are allowed. Dev Environments consume compute minutes when running.</p>
   *          <note>
   *             <p>Changing this value will cause a restart of the Dev Environment if it is running.</p>
   *          </note>
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDevEnvironmentResponse {
  /**
   * <p>The system-generated unique ID of the Dev Environment. </p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The user-specified alias for the Dev Environment.</p>
   * @public
   */
  alias?: string | undefined;

  /**
   * <p>Information about the integrated development environment (IDE) configured for the Dev Environment.</p>
   * @public
   */
  ides?: IdeConfiguration[] | undefined;

  /**
   * <p>The Amazon EC2 instace type to use for the Dev Environment. </p>
   * @public
   */
  instanceType?: _InstanceType | undefined;

  /**
   * <p>The amount of time the Dev Environment will run without any activity detected before stopping, in minutes. </p>
   * @public
   */
  inactivityTimeoutMinutes?: number | undefined;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface GetProjectRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetProjectResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName?: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The friendly name of the project displayed to users in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  BEGINS_WITH: "BEGINS_WITH",
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
  NAME: "name",
} as const;

/**
 * @public
 */
export type FilterKey = (typeof FilterKey)[keyof typeof FilterKey];

/**
 * <p>nformation about the filter used to narrow the results returned in a list of projects.</p>
 * @public
 */
export interface ProjectListFilter {
  /**
   * <p>A key that can be used to sort results.</p>
   * @public
   */
  key: FilterKey | undefined;

  /**
   * <p>The values of the key.</p>
   * @public
   */
  values: string[] | undefined;

  /**
   * <p>The operator used to compare the fields.</p>
   * @public
   */
  comparisonOperator?: ComparisonOperator | undefined;
}

/**
 * @public
 */
export interface ListProjectsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Information about filters to apply to narrow the results returned in the list.</p>
   * @public
   */
  filters?: ProjectListFilter[] | undefined;
}

/**
 * <p>Information about a project.</p>
 * @public
 */
export interface ProjectSummary {
  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The friendly name displayed to users of the project in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface ListProjectsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about the projects.</p>
   * @public
   */
  items?: ProjectSummary[] | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository. For more information about name requirements, see <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/source-quotas.html">Quotas for source repositories</a>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the source repository.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the source repository.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSourceRepositoryResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the repository.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  name: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the source repository.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  sourceRepositoryName: string | undefined;
}

/**
 * @public
 */
export interface GetSourceRepositoryCloneUrlsResponse {
  /**
   * <p>The HTTPS URL to use when cloning the source repository.</p>
   * @public
   */
  https: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a source repository returned in a list of source repositories.</p>
 * @public
 */
export interface ListSourceRepositoriesItem {
  /**
   * <p>The system-generated unique ID of the source repository.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the repository, if any.</p>
   * @public
   */
  description?: string | undefined;

  /**
   * <p>The time the source repository was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The time the source repository was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  createdTime: Date | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoriesResponse {
  /**
   * <p>Information about the source repositories.</p>
   * @public
   */
  items?: ListSourceRepositoriesItem[] | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the repository where you want to create a branch.</p>
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * <p>The name for the branch you're creating.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The commit ID in an existing branch from which you want to create the new branch.</p>
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface CreateSourceRepositoryBranchResponse {
  /**
   * <p>The Git reference name of the branch.</p>
   * @public
   */
  ref?: string | undefined;

  /**
   * <p>The name of the newly created branch.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The commit ID of the tip of the newly created branch.</p>
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The name of the source repository.</p>
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>Information about a branch of a source repository returned in a list of branches.</p>
 * @public
 */
export interface ListSourceRepositoryBranchesItem {
  /**
   * <p>The Git reference name of the branch.</p>
   * @public
   */
  ref?: string | undefined;

  /**
   * <p>The name of the branch.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The time the branch was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  lastUpdatedTime?: Date | undefined;

  /**
   * <p>The commit ID of the tip of the branch at the time of the request, also known as the head commit.</p>
   * @public
   */
  headCommitId?: string | undefined;
}

/**
 * @public
 */
export interface ListSourceRepositoryBranchesResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about the source branches.</p>
   * @public
   */
  items: ListSourceRepositoryBranchesItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateProjectRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateProjectResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName?: string | undefined;

  /**
   * <p>The name of the project.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The friendly name of the project displayed to users in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the project.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The ID of the workflow. To rerieve a list of workflow IDs, use <a>ListWorkflows</a>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * <p>Information about a workflow definition file.</p>
 * @public
 */
export interface WorkflowDefinition {
  /**
   * <p>The path to the workflow definition file stored in the source repository for the project, including the file name.</p>
   * @public
   */
  path: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowRunMode = {
  PARALLEL: "PARALLEL",
  QUEUED: "QUEUED",
  SUPERSEDED: "SUPERSEDED",
} as const;

/**
 * @public
 */
export type WorkflowRunMode = (typeof WorkflowRunMode)[keyof typeof WorkflowRunMode];

/**
 * @public
 * @enum
 */
export const WorkflowStatus = {
  ACTIVE: "ACTIVE",
  INVALID: "INVALID",
} as const;

/**
 * @public
 */
export type WorkflowStatus = (typeof WorkflowStatus)[keyof typeof WorkflowStatus];

/**
 * @public
 */
export interface GetWorkflowResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the workflow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the source repository where the workflow YAML is stored.</p>
   * @public
   */
  sourceRepositoryName?: string | undefined;

  /**
   * <p>The name of the branch that contains the workflow YAML.</p>
   * @public
   */
  sourceBranchName?: string | undefined;

  /**
   * <p>Information about the workflow definition file for the workflow.</p>
   * @public
   */
  definition: WorkflowDefinition | undefined;

  /**
   * <p>The date and time the workflow was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The behavior to use when multiple workflows occur at the same time. For more information, see
   *       <a href="https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-configure-runs.html">https://docs.aws.amazon.com/codecatalyst/latest/userguide/workflows-configure-runs.html</a> in the Amazon CodeCatalyst User Guide.</p>
   * @public
   */
  runMode: WorkflowRunMode | undefined;

  /**
   * <p>The status of the workflow.</p>
   * @public
   */
  status: WorkflowStatus | undefined;
}

/**
 * <p>Information used to sort workflows in the returned list.</p>
 * @public
 */
export interface WorkflowSortCriteria {}

/**
 * @public
 */
export interface ListWorkflowsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Information used to sort the items in the returned list.</p>
   * @public
   */
  sortBy?: WorkflowSortCriteria[] | undefined;
}

/**
 * <p>Information about a workflow definition.</p>
 * @public
 */
export interface WorkflowDefinitionSummary {
  /**
   * <p>The path to the workflow definition file stored in the source repository for the project, including the file name.</p>
   * @public
   */
  path: string | undefined;
}

/**
 * <p>Information about a workflow.</p>
 * @public
 */
export interface WorkflowSummary {
  /**
   * <p>The system-generated unique ID of a workflow.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The name of the source repository where the workflow definition file is stored.</p>
   * @public
   */
  sourceRepositoryName: string | undefined;

  /**
   * <p>The name of the branch of the source repository where the workflow definition file is stored.</p>
   * @public
   */
  sourceBranchName: string | undefined;

  /**
   * <p>Information about the workflow definition file.</p>
   * @public
   */
  definition: WorkflowDefinitionSummary | undefined;

  /**
   * <p>The date and time the workflow was created, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  createdTime: Date | undefined;

  /**
   * <p>The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  lastUpdatedTime: Date | undefined;

  /**
   * <p>The run mode of the workflow.</p>
   * @public
   */
  runMode: WorkflowRunMode | undefined;

  /**
   * <p>The status of the workflow.</p>
   * @public
   */
  status: WorkflowStatus | undefined;
}

/**
 * @public
 */
export interface ListWorkflowsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about the workflows in a project.</p>
   * @public
   */
  items?: WorkflowSummary[] | undefined;
}

/**
 * @public
 */
export interface GetWorkflowRunRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The ID of the workflow run. To retrieve a list of workflow run IDs, use <a>ListWorkflowRuns</a>.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const WorkflowRunStatus = {
  ABANDONED: "ABANDONED",
  CANCELLED: "CANCELLED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  NOT_RUN: "NOT_RUN",
  PROVISIONING: "PROVISIONING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  SUCCEEDED: "SUCCEEDED",
  SUPERSEDED: "SUPERSEDED",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type WorkflowRunStatus = (typeof WorkflowRunStatus)[keyof typeof WorkflowRunStatus];

/**
 * <p>Information about the status of a workflow run.</p>
 * @public
 */
export interface WorkflowRunStatusReason {}

/**
 * @public
 */
export interface GetWorkflowRunResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The ID of the workflow run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The ID of the workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The status of the workflow run.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * <p>Information about the reasons for the status of the workflow run.</p>
   * @public
   */
  statusReasons?: WorkflowRunStatusReason[] | undefined;

  /**
   * <p>The date and time the workflow run began, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The date and time the workflow run ended, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The date and time the workflow run status was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * <p>Information used to sort workflow runs in the returned list.</p>
 * @public
 */
export interface WorkflowRunSortCriteria {}

/**
 * @public
 */
export interface ListWorkflowRunsRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The ID of the workflow. To retrieve a list of workflow IDs, use <a>ListWorkflows</a>.</p>
   * @public
   */
  workflowId?: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to show in a single call to this API. If the number of results is larger than the number you specified, the response will include a <code>NextToken</code> element, which you can use to obtain additional results.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Information used to sort the items in the returned list.</p>
   * @public
   */
  sortBy?: WorkflowRunSortCriteria[] | undefined;
}

/**
 * <p>Information about a workflow run.</p>
 * @public
 */
export interface WorkflowRunSummary {
  /**
   * <p>The system-generated unique ID of the workflow run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the workflow.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>The name of the workflow.</p>
   * @public
   */
  workflowName: string | undefined;

  /**
   * <p>The status of the workflow run.</p>
   * @public
   */
  status: WorkflowRunStatus | undefined;

  /**
   * <p>The reasons for the workflow run status.</p>
   * @public
   */
  statusReasons?: WorkflowRunStatusReason[] | undefined;

  /**
   * <p>The date and time the workflow run began, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The date and time the workflow run ended, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>The date and time the workflow was last updated, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>
   *          </p>
   * @public
   */
  lastUpdatedTime: Date | undefined;
}

/**
 * @public
 */
export interface ListWorkflowRunsResponse {
  /**
   * <p>A token returned from a call to this API to indicate the next batch of results to return, if any.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Information about the runs of a workflow.</p>
   * @public
   */
  items?: WorkflowRunSummary[] | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the workflow. To retrieve a list of workflow IDs, use <a>ListWorkflows</a>.</p>
   * @public
   */
  workflowId: string | undefined;

  /**
   * <p>A user-specified idempotency token.  Idempotency ensures that an API request completes only once.
   *        With an idempotent request, if the original request completes successfully, the subsequent retries return the result from the original successful request and have no additional effect.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartWorkflowRunResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;

  /**
   * <p>The name of the project in the space.</p>
   * @public
   */
  projectName: string | undefined;

  /**
   * <p>The system-generated unique ID of the workflow run.</p>
   * @public
   */
  id: string | undefined;

  /**
   * <p>The system-generated unique ID of the workflow.</p>
   * @public
   */
  workflowId: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  spaceName: string | undefined;
}

/**
 * @public
 */
export interface GetSubscriptionResponse {
  /**
   * <p>The type of the billing plan for the space.</p>
   * @public
   */
  subscriptionType?: string | undefined;

  /**
   * <p>The display name of the Amazon Web Services account used for billing for the space.</p>
   * @public
   */
  awsAccountName?: string | undefined;

  /**
   * <p>The type of the billing plan that the space will be changed to at the start of the next billing cycle. This applies
   *     only to changes that reduce the functionality available for the space. Billing plan changes that increase functionality
   *     are applied immediately. For more information, see <a href="https://codecatalyst.aws/explore/pricing">Pricing</a>.</p>
   * @public
   */
  pendingSubscriptionType?: string | undefined;

  /**
   * <p>The day and time the pending change will be applied to the space, in coordinated universal time (UTC) timestamp format as specified in <a href="https://www.rfc-editor.org/rfc/rfc3339#section-5.6">RFC 3339</a>.</p>
   * @public
   */
  pendingSubscriptionStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceRequest {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSpaceResponse {
  /**
   * <p>The name of the space.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The friendly name of the space displayed to users in Amazon CodeCatalyst.</p>
   * @public
   */
  displayName?: string | undefined;

  /**
   * <p>The description of the space.</p>
   * @public
   */
  description?: string | undefined;
}

/**
 * @public
 */
export interface VerifySessionResponse {
  /**
   * <p>The system-generated unique ID of the user in Amazon CodeCatalyst.</p>
   * @public
   */
  identity?: string | undefined;
}
