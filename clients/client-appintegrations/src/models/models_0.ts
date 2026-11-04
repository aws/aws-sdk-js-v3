// smithy-typescript generated code
import type { ApplicationType, AuthType, ContactHandlingScope, ExecutionMode, ExecutionStatus } from "./enums";

/**
 * The contact handling configuration for the application.
 *
 * @public
 */
export interface ContactHandling {
  /**
   * Indicates whether the application refreshes for each contact or refreshes only with each new browser session.
   *
   * @public
   */
  Scope?: ContactHandlingScope | undefined;
}

/**
 * The configuration settings for the application.
 *
 * @public
 */
export interface ApplicationConfig {
  /**
   * The contact handling configuration for the application.
   *
   * @public
   */
  ContactHandling?: ContactHandling | undefined;
}

/**
 * The external URL source for the application.
 *
 * @public
 */
export interface ExternalUrlConfig {
  /**
   * The URL to access the application.
   *
   * @public
   */
  AccessUrl: string | undefined;

  /**
   * Additional URLs to allow list if different than the access URL.
   *
   * @public
   */
  ApprovedOrigins?: string[] | undefined;
}

/**
 * The configuration for where the application should be loaded from.
 *
 * @public
 */
export interface ApplicationSourceConfig {
  /**
   * The external URL source for the application.
   *
   * @public
   */
  ExternalUrlConfig?: ExternalUrlConfig | undefined;
}

/**
 * Contains the authentication settings that Connect Customer uses to call an external application endpoint.
 *
 * @public
 */
export interface AuthConfig {
  /**
   * The type of authentication that Connect Customer uses to call the external application endpoint. You must specify an authentication type for `A2A_SERVER` applications. Valid values:
   *
   * - `API_KEY`: Connect Customer sends an API key that is stored in the Secrets Manager secret that you specify in `CredentialProviderIdentifier`.
   * - `CONNECT_JWT`: Connect Customer issues a short-lived, signed JSON Web Token (JWT). This authentication type doesn't require a stored credential.
   *
   * @public
   */
  AuthType?: AuthType | undefined;

  /**
   * The ARN of the Secrets Manager secret that stores the credentials. The secret must be accessible to Connect Customer.
   *
   * You must specify this ARN when `AuthType` is `API_KEY`. Don't specify it when `AuthType` is `CONNECT_JWT`.
   *
   * @public
   */
  CredentialProviderIdentifier?: string | undefined;

  /**
   * The value that Connect Customer uses as the audience (`aud`) claim of the JSON Web Token (JWT) that it issues. You can specify this parameter only when `AuthType` is `CONNECT_JWT`. If you don't specify it, the audience is the `AccessUrl` of the application. The value can't contain `connect.amazonaws.com`.
   *
   * @public
   */
  AudienceOverride?: string | undefined;
}

/**
 * The iframe configuration for the application.
 *
 * @public
 */
export interface IframeConfig {
  /**
   * The list of features that are allowed in the iframe.
   *
   * @public
   */
  Allow?: string[] | undefined;

  /**
   * The list of sandbox attributes for the iframe.
   *
   * @public
   */
  Sandbox?: string[] | undefined;
}

/**
 * The configuration of an event that the application publishes.
 *
 * @public
 */
export interface Publication {
  /**
   * The name of the publication.
   *
   * @public
   */
  Event: string | undefined;

  /**
   * The JSON schema of the publication event.
   *
   * @public
   */
  Schema: string | undefined;

  /**
   * The description of the publication.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The configuration of an event that the application subscribes.
 *
 * @public
 */
export interface Subscription {
  /**
   * The name of the subscription.
   *
   * @public
   */
  Event: string | undefined;

  /**
   * The description of the subscription.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name of the application.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The namespace of the application.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for where the application should be loaded from.
   *
   * @public
   */
  ApplicationSourceConfig: ApplicationSourceConfig | undefined;

  /**
   * The events that the application subscribes.
   *
   * @deprecated Subscriptions has been replaced with Permissions.
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * The events that the application publishes.
   *
   * @deprecated Publications has been replaced with Permissions.
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration of events or requests that the application has access to.
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * Indicates whether the application is a service.
   *
   * @deprecated (since 2025-12-01) IsService has been deprecated in favor of ApplicationType.
   * @public
   */
  IsService?: boolean | undefined;

  /**
   * The maximum time in milliseconds allowed to establish a connection with the workspace.
   *
   * @public
   */
  InitializationTimeout?: number | undefined;

  /**
   * The configuration settings for the application.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The iframe configuration for the application.
   *
   * @public
   */
  IframeConfig?: IframeConfig | undefined;

  /**
   * The type of application.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * The authentication settings that Connect Customer uses when calling the external application.
   *
   * @public
   */
  AuthConfig?: AuthConfig | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier for the Application.
   *
   * @public
   */
  Id?: string | undefined;
}

/**
 * The configuration for what files should be pulled from the source.
 *
 * @public
 */
export interface FileConfiguration {
  /**
   * Identifiers for the source folders to pull all files from recursively.
   *
   * @public
   */
  Folders: string[] | undefined;

  /**
   * Restrictions for what files should be pulled from the source.
   *
   * @public
   */
  Filters?: Record<string, string[]> | undefined;
}

/**
 * The name of the data and how often it should be pulled from the source.
 *
 * @public
 */
export interface ScheduleConfiguration {
  /**
   * The start date for objects to import in the first flow run as an Unix/epoch timestamp in milliseconds or in ISO-8601 format.
   *
   * @public
   */
  FirstExecutionFrom?: string | undefined;

  /**
   * The name of the object to pull from the data source.
   *
   * @public
   */
  Object?: string | undefined;

  /**
   * How often the data should be pulled from data source.
   *
   * @public
   */
  ScheduleExpression: string | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationRequest {
  /**
   * The name of the DataIntegration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description of the DataIntegration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The KMS key ARN for the DataIntegration.
   *
   * @public
   */
  KmsKey: string | undefined;

  /**
   * The URI of the data source.
   *
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * The name of the data and how often it should be pulled from the source.
   *
   * @public
   */
  ScheduleConfig?: ScheduleConfiguration | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration for what files should be pulled from the source.
   *
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * The configuration for what data should be pulled from the source.
   *
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN)
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the DataIntegration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the DataIntegration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The KMS key ARN for the DataIntegration.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The URI of the data source.
   *
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * The name of the data and how often it should be pulled from the source.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration for what files should be pulled from the source.
   *
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * The configuration for what data should be pulled from the source.
   *
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * The start and end time for data pull from the source.
 *
 * @public
 */
export interface OnDemandConfiguration {
  /**
   * The start time for data pull from the source as an Unix/epoch string in milliseconds
   *
   * @public
   */
  StartTime: string | undefined;

  /**
   * The end time for data pull from the source as an Unix/epoch string in milliseconds
   *
   * @public
   */
  EndTime?: string | undefined;
}

/**
 * The configuration for how the files should be pulled from the source.
 *
 * @public
 */
export interface ExecutionConfiguration {
  /**
   * The mode for data import/export execution.
   *
   * @public
   */
  ExecutionMode: ExecutionMode | undefined;

  /**
   * The start and end time for data pull from the source.
   *
   * @public
   */
  OnDemandConfiguration?: OnDemandConfiguration | undefined;

  /**
   * The name of the data and how often it should be pulled from the source.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationAssociationRequest {
  /**
   * A unique identifier for the DataIntegration.
   *
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * The identifier for the client that is associated with the DataIntegration association.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The configuration for what data should be pulled from the source.
   *
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;

  /**
   * The URI of the data destination.
   *
   * @public
   */
  DestinationURI?: string | undefined;

  /**
   * The mapping of metadata to be extracted from the data.
   *
   * @public
   */
  ClientAssociationMetadata?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The configuration for how the files should be pulled from the source.
   *
   * @public
   */
  ExecutionConfiguration?: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateDataIntegrationAssociationResponse {
  /**
   * A unique identifier. for the DataIntegrationAssociation.
   *
   * @public
   */
  DataIntegrationAssociationId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the DataIntegration.
   *
   * @public
   */
  DataIntegrationArn?: string | undefined;
}

/**
 * The event filter.
 *
 * @public
 */
export interface EventFilter {
  /**
   * The source of the events.
   *
   * @public
   */
  Source: string | undefined;
}

/**
 * @public
 */
export interface CreateEventIntegrationRequest {
  /**
   * The name of the event integration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the event integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The event filter.
   *
   * @public
   */
  EventFilter: EventFilter | undefined;

  /**
   * The EventBridge bus.
   *
   * @public
   */
  EventBridgeBus: string | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If not provided, the Amazon Web Services SDK populates this field. For more information about idempotency, see [Making retries safe with idempotent APIs](https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/).
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateEventIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) of the event integration.
   *
   * @public
   */
  EventIntegrationArn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * Specifies whether to delete the application even if it still has application associations. If `true`, the operation removes the application and its associations. If `false` or absent, the delete fails when associations exist.
   *
   * > **Important:** Setting this parameter to `true` permanently removes all of the application's associations. Doing so might impact other resources that rely on and reference the application. This action can't be undone.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {}

/**
 * @public
 */
export interface DeleteDataIntegrationRequest {
  /**
   * A unique identifier for the DataIntegration.
   *
   * @public
   */
  DataIntegrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteDataIntegrationResponse {}

/**
 * @public
 */
export interface DeleteEventIntegrationRequest {
  /**
   * The name of the event integration.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEventIntegrationResponse {}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier for the Application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The namespace of the application.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for where the application should be loaded from.
   *
   * @public
   */
  ApplicationSourceConfig?: ApplicationSourceConfig | undefined;

  /**
   * The events that the application subscribes.
   *
   * @deprecated Subscriptions has been replaced with Permissions.
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * The events that the application publishes.
   *
   * @deprecated Publications has been replaced with Permissions.
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * The created time of the Application.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The last modified time of the Application.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration of events or requests that the application has access to.
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * Indicates whether the application is a service.
   *
   * @deprecated (since 2025-12-01) IsService has been deprecated in favor of ApplicationType.
   * @public
   */
  IsService?: boolean | undefined;

  /**
   * The maximum time in milliseconds allowed to establish a connection with the workspace.
   *
   * @public
   */
  InitializationTimeout?: number | undefined;

  /**
   * The configuration settings for the application.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The iframe configuration for the application.
   *
   * @public
   */
  IframeConfig?: IframeConfig | undefined;

  /**
   * The type of application.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * The authentication settings that Connect Customer uses when calling the external application.
   *
   * @public
   */
  AuthConfig?: AuthConfig | undefined;
}

/**
 * @public
 */
export interface GetDataIntegrationRequest {
  /**
   * A unique identifier.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetDataIntegrationResponse {
  /**
   * The Amazon Resource Name (ARN) for the DataIntegration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the DataIntegration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The KMS key ARN for the DataIntegration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The KMS key ARN for the DataIntegration.
   *
   * @public
   */
  KmsKey?: string | undefined;

  /**
   * The URI of the data source.
   *
   * @public
   */
  SourceURI?: string | undefined;

  /**
   * The name of the data and how often it should be pulled from the source.
   *
   * @public
   */
  ScheduleConfiguration?: ScheduleConfiguration | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The configuration for what files should be pulled from the source.
   *
   * @public
   */
  FileConfiguration?: FileConfiguration | undefined;

  /**
   * The configuration for what data should be pulled from the source.
   *
   * @public
   */
  ObjectConfiguration?: Record<string, Record<string, string[]>> | undefined;
}

/**
 * @public
 */
export interface GetEventIntegrationRequest {
  /**
   * The name of the event integration.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface GetEventIntegrationResponse {
  /**
   * The name of the event integration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the event integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) for the event integration.
   *
   * @public
   */
  EventIntegrationArn?: string | undefined;

  /**
   * The EventBridge bus.
   *
   * @public
   */
  EventBridgeBus?: string | undefined;

  /**
   * The event filter.
   *
   * @public
   */
  EventFilter?: EventFilter | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssociationsRequest {
  /**
   * A unique identifier for the Application.
   *
   * @public
   */
  ApplicationId: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about the Application Association.
 *
 * @public
 */
export interface ApplicationAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the Application Association.
   *
   * @public
   */
  ApplicationAssociationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  ApplicationArn?: string | undefined;

  /**
   * The identifier for the client that is associated with the Application Association.
   *
   * @public
   */
  ClientId?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationAssociationsResponse {
  /**
   * List of Application Associations for the Application.
   *
   * @public
   */
  ApplicationAssociations?: ApplicationAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The type of application.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;
}

/**
 * Summary information about the Application.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A unique identifier for the Application.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The namespace of the application.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The time when the application was created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * The time when the application was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * Indicates whether the application is a service.
   *
   * @deprecated (since 2025-12-01) IsService has been deprecated in favor of ApplicationType.
   * @public
   */
  IsService?: boolean | undefined;

  /**
   * The type of application.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The Applications associated with this account.
   *
   * @public
   */
  Applications?: ApplicationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsRequest {
  /**
   * A unique identifier for the DataIntegration.
   *
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The execution status of the last job.
 *
 * @public
 */
export interface LastExecutionStatus {
  /**
   * The job status enum string.
   *
   * @public
   */
  ExecutionStatus?: ExecutionStatus | undefined;

  /**
   * The status message of a job.
   *
   * @public
   */
  StatusMessage?: string | undefined;
}

/**
 * Summary information about the DataIntegration association.
 *
 * @public
 */
export interface DataIntegrationAssociationSummary {
  /**
   * The Amazon Resource Name (ARN) of the DataIntegration association.
   *
   * @public
   */
  DataIntegrationAssociationArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the DataIntegration.
   *
   * @public
   */
  DataIntegrationArn?: string | undefined;

  /**
   * The identifier for the client that is associated with the DataIntegration association.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The URI of the data destination.
   *
   * @public
   */
  DestinationURI?: string | undefined;

  /**
   * The execution status of the last job.
   *
   * @public
   */
  LastExecutionStatus?: LastExecutionStatus | undefined;

  /**
   * The configuration for how the files should be pulled from the source.
   *
   * @public
   */
  ExecutionConfiguration?: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationAssociationsResponse {
  /**
   * The Amazon Resource Name (ARN) and unique ID of the DataIntegration association.
   *
   * @public
   */
  DataIntegrationAssociations?: DataIntegrationAssociationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Summary information about the DataIntegration.
 *
 * @public
 */
export interface DataIntegrationSummary {
  /**
   * The Amazon Resource Name (ARN) of the DataIntegration.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the DataIntegration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The URI of the data source.
   *
   * @public
   */
  SourceURI?: string | undefined;
}

/**
 * @public
 */
export interface ListDataIntegrationsResponse {
  /**
   * The DataIntegrations associated with this account.
   *
   * @public
   */
  DataIntegrations?: DataIntegrationSummary[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsRequest {
  /**
   * The name of the event integration.
   *
   * @public
   */
  EventIntegrationName: string | undefined;

  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The event integration association.
 *
 * @public
 */
export interface EventIntegrationAssociation {
  /**
   * The Amazon Resource Name (ARN) for the event integration association.
   *
   * @public
   */
  EventIntegrationAssociationArn?: string | undefined;

  /**
   * The identifier for the event integration association.
   *
   * @public
   */
  EventIntegrationAssociationId?: string | undefined;

  /**
   * The name of the event integration.
   *
   * @public
   */
  EventIntegrationName?: string | undefined;

  /**
   * The identifier for the client that is associated with the event integration.
   *
   * @public
   */
  ClientId?: string | undefined;

  /**
   * The name of the EventBridge rule.
   *
   * @public
   */
  EventBridgeRuleName?: string | undefined;

  /**
   * The metadata associated with the client.
   *
   * @public
   */
  ClientAssociationMetadata?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationAssociationsResponse {
  /**
   * The event integration associations.
   *
   * @public
   */
  EventIntegrationAssociations?: EventIntegrationAssociation[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationsRequest {
  /**
   * The token for the next set of results. Use the value returned in the previous response in the next request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return per page.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The event integration.
 *
 * @public
 */
export interface EventIntegration {
  /**
   * The Amazon Resource Name (ARN) of the event integration.
   *
   * @public
   */
  EventIntegrationArn?: string | undefined;

  /**
   * The name of the event integration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The event integration description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The event integration filter.
   *
   * @public
   */
  EventFilter?: EventFilter | undefined;

  /**
   * The Amazon EventBridge bus for the event integration.
   *
   * @public
   */
  EventBridgeBus?: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListEventIntegrationsResponse {
  /**
   * The event integrations.
   *
   * @public
   */
  EventIntegrations?: EventIntegration[] | undefined;

  /**
   * If there are additional results, this is the token for the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Information about the tags.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tags used to organize, track, or control access for this resource. For example, \{ "tags": \{"key1":"value1", "key2":"value2"\} \}.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The tag keys.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateApplicationRequest {
  /**
   * The Amazon Resource Name (ARN) of the Application.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description of the application.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The configuration for where the application should be loaded from.
   *
   * @public
   */
  ApplicationSourceConfig?: ApplicationSourceConfig | undefined;

  /**
   * The events that the application subscribes.
   *
   * @deprecated Subscriptions has been replaced with Permissions.
   * @public
   */
  Subscriptions?: Subscription[] | undefined;

  /**
   * The events that the application publishes.
   *
   * @deprecated Publications has been replaced with Permissions.
   * @public
   */
  Publications?: Publication[] | undefined;

  /**
   * The configuration of events or requests that the application has access to.
   *
   * @public
   */
  Permissions?: string[] | undefined;

  /**
   * Indicates whether the application is a service.
   *
   * @deprecated (since 2025-12-01) IsService has been deprecated in favor of ApplicationType.
   * @public
   */
  IsService?: boolean | undefined;

  /**
   * The maximum time in milliseconds allowed to establish a connection with the workspace.
   *
   * @public
   */
  InitializationTimeout?: number | undefined;

  /**
   * The configuration settings for the application.
   *
   * @public
   */
  ApplicationConfig?: ApplicationConfig | undefined;

  /**
   * The iframe configuration for the application.
   *
   * @public
   */
  IframeConfig?: IframeConfig | undefined;

  /**
   * The type of application.
   *
   * @public
   */
  ApplicationType?: ApplicationType | undefined;

  /**
   * The authentication settings that Connect Customer uses when calling the external application.
   *
   * @public
   */
  AuthConfig?: AuthConfig | undefined;
}

/**
 * @public
 */
export interface UpdateApplicationResponse {}

/**
 * @public
 */
export interface UpdateDataIntegrationRequest {
  /**
   * A unique identifier for the DataIntegration.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * The name of the DataIntegration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A description of the DataIntegration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDataIntegrationResponse {}

/**
 * @public
 */
export interface UpdateDataIntegrationAssociationRequest {
  /**
   * A unique identifier for the DataIntegration.
   *
   * @public
   */
  DataIntegrationIdentifier: string | undefined;

  /**
   * A unique identifier. of the DataIntegrationAssociation resource
   *
   * @public
   */
  DataIntegrationAssociationIdentifier: string | undefined;

  /**
   * The configuration for how the files should be pulled from the source.
   *
   * @public
   */
  ExecutionConfiguration: ExecutionConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateDataIntegrationAssociationResponse {}

/**
 * @public
 */
export interface UpdateEventIntegrationRequest {
  /**
   * The name of the event integration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the event integration.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEventIntegrationResponse {}
