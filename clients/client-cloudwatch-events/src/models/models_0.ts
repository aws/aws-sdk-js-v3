// smithy-typescript generated code
import type {
  ApiDestinationHttpMethod,
  ApiDestinationState,
  ArchiveState,
  AssignPublicIp,
  ConnectionAuthorizationType,
  ConnectionOAuthHttpMethod,
  ConnectionState,
  EventSourceState,
  LaunchType,
  PlacementConstraintType,
  PlacementStrategyType,
  PropagateTags,
  ReplayState,
  RuleState,
} from "./enums";

/**
 * @public
 */
export interface ActivateEventSourceRequest {
  /**
   * The name of the partner event source to activate.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Contains details about an API destination.
 *
 * @public
 */
export interface ApiDestination {
  /**
   * The ARN of the API destination.
   *
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * The name of the API destination.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the API destination.
   *
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * The ARN of the connection specified for the API destination.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The URL to the endpoint for the API destination.
   *
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * The method to use to connect to the HTTP endpoint.
   *
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * The maximum number of invocations per second to send to the HTTP endpoint.
   *
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;

  /**
   * A time stamp for the time that the API destination was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the API destination was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * An `Archive` object that contains details about an archive.
 *
 * @public
 */
export interface Archive {
  /**
   * The name of the archive.
   *
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * The ARN of the event bus associated with the archive. Only events from this event bus are sent to the archive.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The current state of the archive.
   *
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * A description for the reason that the archive is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The number of days to retain events in the archive before they are deleted.
   *
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * The size of the archive, in bytes.
   *
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * The number of events in the archive.
   *
   * @public
   */
  EventCount?: number | undefined;

  /**
   * The time stamp for the time that the archive was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface CancelReplayRequest {
  /**
   * The name of the replay to cancel.
   *
   * @public
   */
  ReplayName: string | undefined;
}

/**
 * @public
 */
export interface CancelReplayResponse {
  /**
   * The ARN of the replay to cancel.
   *
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * The current state of the replay.
   *
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * The reason that the replay is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateApiDestinationRequest {
  /**
   * The name for the API destination to create.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the API destination to create.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection.
   *
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * The URL to the HTTP invocation endpoint for the API destination.
   *
   * @public
   */
  InvocationEndpoint: string | undefined;

  /**
   * The method to use for the request to the HTTP invocation endpoint.
   *
   * @public
   */
  HttpMethod: ApiDestinationHttpMethod | undefined;

  /**
   * The maximum number of requests per second to send to the HTTP invocation endpoint.
   *
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface CreateApiDestinationResponse {
  /**
   * The ARN of the API destination that was created by the request.
   *
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * The state of the API destination that was created by the request.
   *
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * A time stamp indicating the time that the API destination was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp indicating the time that the API destination was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateArchiveRequest {
  /**
   * The name for the archive to create.
   *
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * The ARN of the event bus that sends events to the archive.
   *
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * A description for the archive.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * An event pattern to use to filter events sent to the archive.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely
   *
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * @public
 */
export interface CreateArchiveResponse {
  /**
   * The ARN of the archive that was created.
   *
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * The state of the archive that was created.
   *
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * The reason that the archive is in the state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time at which the archive was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * Contains the API key authorization parameters for the connection.
 *
 * @public
 */
export interface CreateConnectionApiKeyAuthRequestParameters {
  /**
   * The name of the API key to use for authorization.
   *
   * @public
   */
  ApiKeyName: string | undefined;

  /**
   * The value for the API key to use for authorization.
   *
   * @public
   */
  ApiKeyValue: string | undefined;
}

/**
 * Contains the Basic authorization parameters to use for the connection.
 *
 * @public
 */
export interface CreateConnectionBasicAuthRequestParameters {
  /**
   * The user name to use for Basic authorization.
   *
   * @public
   */
  Username: string | undefined;

  /**
   * The password associated with the user name to use for Basic authorization.
   *
   * @public
   */
  Password: string | undefined;
}

/**
 * Additional parameter included in the body. You can include up to 100 additional body parameters per request. An event payload cannot exceed 64 KB.
 *
 * @public
 */
export interface ConnectionBodyParameter {
  /**
   * The key for the parameter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value associated with the key.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Specified whether the value is secret.
   *
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * Additional parameter included in the header. You can include up to 100 additional header parameters per request. An event payload cannot exceed 64 KB.
 *
 * @public
 */
export interface ConnectionHeaderParameter {
  /**
   * The key for the parameter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value associated with the key.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Specified whether the value is a secret.
   *
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * Additional query string parameter for the connection. You can include up to 100 additional query string parameters per request. Each additional parameter counts towards the event payload size, which cannot exceed 64 KB.
 *
 * @public
 */
export interface ConnectionQueryStringParameter {
  /**
   * The key for a query string parameter.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value associated with the key for the query string parameter.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Specifies whether the value is secret.
   *
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * Contains additional parameters for the connection.
 *
 * @public
 */
export interface ConnectionHttpParameters {
  /**
   * Contains additional header parameters for the connection.
   *
   * @public
   */
  HeaderParameters?: ConnectionHeaderParameter[] | undefined;

  /**
   * Contains additional query string parameters for the connection.
   *
   * @public
   */
  QueryStringParameters?: ConnectionQueryStringParameter[] | undefined;

  /**
   * Contains additional body string parameters for the connection.
   *
   * @public
   */
  BodyParameters?: ConnectionBodyParameter[] | undefined;
}

/**
 * Contains the Basic authorization parameters to use for the connection.
 *
 * @public
 */
export interface CreateConnectionOAuthClientRequestParameters {
  /**
   * The client ID to use for OAuth authorization for the connection.
   *
   * @public
   */
  ClientID: string | undefined;

  /**
   * The client secret associated with the client ID to use for OAuth authorization for the connection.
   *
   * @public
   */
  ClientSecret: string | undefined;
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 *
 * @public
 */
export interface CreateConnectionOAuthRequestParameters {
  /**
   * A `CreateConnectionOAuthClientRequestParameters` object that contains the client parameters for OAuth authorization.
   *
   * @public
   */
  ClientParameters: CreateConnectionOAuthClientRequestParameters | undefined;

  /**
   * The URL to the authorization endpoint when OAuth is specified as the authorization type.
   *
   * @public
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * The method to use for the authorization request.
   *
   * @public
   */
  HttpMethod: ConnectionOAuthHttpMethod | undefined;

  /**
   * A `ConnectionHttpParameters` object that contains details about the additional parameters to use for the connection.
   *
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * Contains the authorization parameters for the connection.
 *
 * @public
 */
export interface CreateConnectionAuthRequestParameters {
  /**
   * A `CreateConnectionBasicAuthRequestParameters` object that contains the Basic authorization parameters to use for the connection.
   *
   * @public
   */
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters | undefined;

  /**
   * A `CreateConnectionOAuthRequestParameters` object that contains the OAuth authorization parameters to use for the connection.
   *
   * @public
   */
  OAuthParameters?: CreateConnectionOAuthRequestParameters | undefined;

  /**
   * A `CreateConnectionApiKeyAuthRequestParameters` object that contains the API key authorization parameters to use for the connection.
   *
   * @public
   */
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters | undefined;

  /**
   * A `ConnectionHttpParameters` object that contains the API key authorization parameters to use for the connection. Note that if you include additional parameters for the target of a rule via `HttpParameters`, including query strings, the parameters added for the connection take precedence.
   *
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * The name for the connection to create.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the connection to create.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of authorization to use for the connection.
   *
   * @public
   */
  AuthorizationType: ConnectionAuthorizationType | undefined;

  /**
   * A `CreateConnectionAuthRequestParameters` object that contains the authorization parameters to use to authorize with the endpoint.
   *
   * @public
   */
  AuthParameters: CreateConnectionAuthRequestParameters | undefined;
}

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * The ARN of the connection that was created by the request.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The state of the connection that was created by the request.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses support tagging.
 *
 * @public
 */
export interface Tag {
  /**
   * A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The value for the specified tag key.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEventBusRequest {
  /**
   * The name of the new event bus.
   *
   * Event bus names cannot contain the / character. You can't use the name `default` for a custom event bus, as this name is already used for your account's default event bus.
   *
   * If this is a partner event bus, the name must exactly match the name of the partner event source that this event bus is matched to.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * If you are creating a partner event bus, this specifies the partner event source that the new event bus will be matched with.
   *
   * @public
   */
  EventSourceName?: string | undefined;

  /**
   * Tags to associate with the event bus.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventBusResponse {
  /**
   * The ARN of the new event bus.
   *
   * @public
   */
  EventBusArn?: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceRequest {
  /**
   * The name of the partner event source. This name must be unique and must be in the format `partner_name/event_namespace/event_name`. The Amazon Web Services account that wants to use this partner event source must create a partner event bus with a name that matches the name of the partner event source.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID that is permitted to create a matching partner event bus for this partner event source.
   *
   * @public
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceResponse {
  /**
   * The ARN of the partner event source.
   *
   * @public
   */
  EventSourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateEventSourceRequest {
  /**
   * The name of the partner event source to deactivate.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionRequest {
  /**
   * The name of the connection to remove authorization from.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionResponse {
  /**
   * The ARN of the connection that authorization was removed from.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The state of the connection.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last updated.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last authorized.
   *
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApiDestinationRequest {
  /**
   * The name of the destination to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiDestinationResponse {}

/**
 * @public
 */
export interface DeleteArchiveRequest {
  /**
   * The name of the archive to delete.
   *
   * @public
   */
  ArchiveName: string | undefined;
}

/**
 * @public
 */
export interface DeleteArchiveResponse {}

/**
 * @public
 */
export interface DeleteConnectionRequest {
  /**
   * The name of the connection to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * The ARN of the connection that was deleted.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The state of the connection before it was deleted.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last modified before it was deleted.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last authorized before it wa deleted.
   *
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEventBusRequest {
  /**
   * The name of the event bus to delete.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerEventSourceRequest {
  /**
   * The name of the event source to delete.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The Amazon Web Services account ID of the Amazon Web Services customer that the event source was created for.
   *
   * @public
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify `Force` as `True` to delete the rule. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using `DescribeRule` or `ListRules` and checking the `ManagedBy` field of the response.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeApiDestinationRequest {
  /**
   * The name of the API destination to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeApiDestinationResponse {
  /**
   * The ARN of the API destination retrieved.
   *
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * The name of the API destination retrieved.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description for the API destination retrieved.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of the API destination retrieved.
   *
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * The ARN of the connection specified for the API destination retrieved.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The URL to use to connect to the HTTP endpoint.
   *
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * The method to use to connect to the HTTP endpoint.
   *
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * The maximum number of invocations per second to specified for the API destination. Note that if you set the invocation rate maximum to a value lower the rate necessary to send all events received on to the destination HTTP endpoint, some events may not be delivered within the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver all events, consider using a dead-letter queue to catch events that are not delivered within 24 hours.
   *
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;

  /**
   * A time stamp for the time that the API destination was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the API destination was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeArchiveRequest {
  /**
   * The name of the archive to retrieve.
   *
   * @public
   */
  ArchiveName: string | undefined;
}

/**
 * @public
 */
export interface DescribeArchiveResponse {
  /**
   * The ARN of the archive.
   *
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * The name of the archive.
   *
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * The ARN of the event source associated with the archive.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The description of the archive.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The event pattern used to filter events sent to the archive.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * The state of the archive.
   *
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * The reason that the archive is in the state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The number of days to retain events for in the archive.
   *
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * The size of the archive in bytes.
   *
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * The number of events in the archive.
   *
   * @public
   */
  EventCount?: number | undefined;

  /**
   * The time at which the archive was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionRequest {
  /**
   * The name of the connection to retrieve.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * Contains the authorization parameters for the connection if API Key is specified as the authorization type.
 *
 * @public
 */
export interface ConnectionApiKeyAuthResponseParameters {
  /**
   * The name of the header to use for the `APIKeyValue` used for authorization.
   *
   * @public
   */
  ApiKeyName?: string | undefined;
}

/**
 * Contains the authorization parameters for the connection if Basic is specified as the authorization type.
 *
 * @public
 */
export interface ConnectionBasicAuthResponseParameters {
  /**
   * The user name to use for Basic authorization.
   *
   * @public
   */
  Username?: string | undefined;
}

/**
 * Contains the client response parameters for the connection when OAuth is specified as the authorization type.
 *
 * @public
 */
export interface ConnectionOAuthClientResponseParameters {
  /**
   * The client ID associated with the response to the connection request.
   *
   * @public
   */
  ClientID?: string | undefined;
}

/**
 * Contains the response parameters when OAuth is specified as the authorization type.
 *
 * @public
 */
export interface ConnectionOAuthResponseParameters {
  /**
   * A `ConnectionOAuthClientResponseParameters` object that contains details about the client parameters returned when OAuth is specified as the authorization type.
   *
   * @public
   */
  ClientParameters?: ConnectionOAuthClientResponseParameters | undefined;

  /**
   * The URL to the HTTP endpoint that authorized the request.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The method used to connect to the HTTP endpoint.
   *
   * @public
   */
  HttpMethod?: ConnectionOAuthHttpMethod | undefined;

  /**
   * The additional HTTP parameters used for the OAuth authorization request.
   *
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * Contains the authorization parameters to use for the connection.
 *
 * @public
 */
export interface ConnectionAuthResponseParameters {
  /**
   * The authorization parameters for Basic authorization.
   *
   * @public
   */
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters | undefined;

  /**
   * The OAuth parameters to use for authorization.
   *
   * @public
   */
  OAuthParameters?: ConnectionOAuthResponseParameters | undefined;

  /**
   * The API Key parameters to use for authorization.
   *
   * @public
   */
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters | undefined;

  /**
   * Additional parameters for the connection that are passed through with every invocation to the HTTP endpoint.
   *
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionResponse {
  /**
   * The ARN of the connection retrieved.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The name of the connection retrieved.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The description for the connection retrieved.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The state of the connection retrieved.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * The reason that the connection is in the current connection state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The type of authorization specified for the connection.
   *
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * The ARN of the secret created from the authorization parameters specified for the connection.
   *
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * The parameters to use for authorization for the connection.
   *
   * @public
   */
  AuthParameters?: ConnectionAuthResponseParameters | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last authorized.
   *
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusRequest {
  /**
   * The name or ARN of the event bus to show details for. If you omit this, the default event bus is displayed.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusResponse {
  /**
   * The name of the event bus. Currently, this is always `default`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the account permitted to write events to the current account.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The policy that enables the external account to send events to your account.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceRequest {
  /**
   * The name of the partner event source to display the details of.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceResponse {
  /**
   * The ARN of the partner event source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the SaaS partner that created the event source.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time that the event source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the event source will expire if you do not create a matching event bus.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The name of the partner event source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
   *
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceRequest {
  /**
   * The name of the event source to display.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceResponse {
  /**
   * The ARN of the event source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the event source.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplayRequest {
  /**
   * The name of the replay to retrieve.
   *
   * @public
   */
  ReplayName: string | undefined;
}

/**
 * A `ReplayDestination` object that contains details about a replay.
 *
 * @public
 */
export interface ReplayDestination {
  /**
   * The ARN of the event bus to replay event to. You can replay events only to the event bus specified to create the archive.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * A list of ARNs for rules to replay events to.
   *
   * @public
   */
  FilterArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplayResponse {
  /**
   * The name of the replay.
   *
   * @public
   */
  ReplayName?: string | undefined;

  /**
   * The ARN of the replay.
   *
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * The description of the replay.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The current state of the replay.
   *
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * The reason that the replay is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The ARN of the archive events were replayed from.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * A `ReplayDestination` object that contains details about the replay.
   *
   * @public
   */
  Destination?: ReplayDestination | undefined;

  /**
   * The time stamp of the first event that was last replayed from the archive.
   *
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * The time stamp for the last event that was replayed from the archive.
   *
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * The time that the event was last replayed.
   *
   * @public
   */
  EventLastReplayedTime?: Date | undefined;

  /**
   * A time stamp for the time that the replay started.
   *
   * @public
   */
  ReplayStartTime?: Date | undefined;

  /**
   * A time stamp for the time that the replay stopped.
   *
   * @public
   */
  ReplayEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * Specifies whether the rule is enabled or disabled.
   *
   * @public
   */
  State?: RuleState | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * If this is a managed rule, created by an Amazon Web Services service on your behalf, this field displays the principal name of the Amazon Web Services service that created the rule.
   *
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * The name of the event bus associated with the rule.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The account ID of the user that created the rule. If you use `PutRule` to put a rule on an event bus in another account, the other account is the owner of the rule, and the rule ARN includes the account ID for that account. However, the value for `CreatedBy` is the account ID as the account that created the rule in the other account.
   *
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DisableRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface EnableRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface ListApiDestinationsRequest {
  /**
   * A name prefix to filter results returned. Only API destinations with a name that starts with the prefix are returned.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The ARN of the connection specified for the API destination.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of API destinations to include in the response.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListApiDestinationsResponse {
  /**
   * An array of `ApiDestination` objects that include information about an API destination.
   *
   * @public
   */
  ApiDestinations?: ApiDestination[] | undefined;

  /**
   * A token you can use in a subsequent request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArchivesRequest {
  /**
   * A name prefix to filter the archives returned. Only archives with name that match the prefix are returned.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The ARN of the event source associated with the archive.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The state of the archive.
   *
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListArchivesResponse {
  /**
   * An array of `Archive` objects that include details about an archive.
   *
   * @public
   */
  Archives?: Archive[] | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * A name prefix to filter results returned. Only connections with a name that starts with the prefix are returned.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The state of the connection.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of connections to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains information about a connection.
 *
 * @public
 */
export interface Connection {
  /**
   * The ARN of the connection.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The name of the connection.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the connection.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * The reason that the connection is in the connection state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The authorization type specified for the connection.
   *
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last authorized.
   *
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * An array of connections objects that include details about the connections.
   *
   * @public
   */
  Connections?: Connection[] | undefined;

  /**
   * A token you can use in a subsequent request to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesRequest {
  /**
   * Specifying this limits the results to only those event buses with names that start with the specified prefix.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * An event bus receives events from a source and routes them to rules associated with that event bus. Your account's default event bus receives events from Amazon Web Services services. A custom event bus can receive events from your custom applications and services. A partner event bus receives events from an event source created by an SaaS partner. These events come from the partners services or applications.
 *
 * @public
 */
export interface EventBus {
  /**
   * The name of the event bus.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ARN of the event bus.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The permissions policy of the event bus, describing which other Amazon Web Services accounts can write events to this event bus.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesResponse {
  /**
   * This list of event buses.
   *
   * @public
   */
  EventBuses?: EventBus[] | undefined;

  /**
   * A token you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesRequest {
  /**
   * Specifying this limits the results to only those partner event sources with names that start with the specified prefix.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
 *
 * @public
 */
export interface EventSource {
  /**
   * The ARN of the event source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the partner that created the event source.
   *
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * The date and time the event source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the event source will expire, if the Amazon Web Services account doesn't create a matching event bus for it.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The name of the event source.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
   *
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesResponse {
  /**
   * The list of event sources.
   *
   * @public
   */
  EventSources?: EventSource[] | undefined;

  /**
   * A token you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsRequest {
  /**
   * The name of the partner event source to display account information about.
   *
   * @public
   */
  EventSourceName: string | undefined;

  /**
   * The token returned by a previous call to this operation. Specifying this retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Specifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * The Amazon Web Services account that a partner event source has been offered to.
 *
 * @public
 */
export interface PartnerEventSourceAccount {
  /**
   * The Amazon Web Services account ID that the partner event source was offered to.
   *
   * @public
   */
  Account?: string | undefined;

  /**
   * The date and time the event source was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time that the event source will expire, if the Amazon Web Services account doesn't create a matching event bus for it.
   *
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * The state of the event source. If it is ACTIVE, you have already created a matching event bus for this event source, and that event bus is active. If it is PENDING, either you haven't yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have created a matching event bus, but the event source has since been deleted.
   *
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsResponse {
  /**
   * The list of partner event sources returned by the operation.
   *
   * @public
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[] | undefined;

  /**
   * A token you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesRequest {
  /**
   * If you specify this, the results are limited to only those partner event sources that start with the string you specify.
   *
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * The token returned by a previous call to this operation. Specifying this retrieves the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * pecifying this limits the number of results returned by this operation. The operation also returns a NextToken which you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * A partner event source is created by an SaaS partner. If a customer creates a partner event bus that matches this event source, that Amazon Web Services account can receive events from the partner's applications or services.
 *
 * @public
 */
export interface PartnerEventSource {
  /**
   * The ARN of the partner event source.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The name of the partner event source.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesResponse {
  /**
   * The list of partner event sources returned by the operation.
   *
   * @public
   */
  PartnerEventSources?: PartnerEventSource[] | undefined;

  /**
   * A token you can use in a subsequent operation to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplaysRequest {
  /**
   * A name prefix to filter the replays returned. Only replays with name that match the prefix are returned.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The state of the replay.
   *
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * The ARN of the archive from which the events are replayed.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of replays to retrieve.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * A `Replay` object that contains details about a replay.
 *
 * @public
 */
export interface Replay {
  /**
   * The name of the replay.
   *
   * @public
   */
  ReplayName?: string | undefined;

  /**
   * The ARN of the archive to replay event from.
   *
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * The current state of the replay.
   *
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * A description of why the replay is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * A time stamp for the time to start replaying events. This is determined by the time in the event as described in [Time](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time).
   *
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * A time stamp for the time to start replaying events. Any event with a creation time prior to the `EventEndTime` specified is replayed.
   *
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * A time stamp for the time that the last event was replayed.
   *
   * @public
   */
  EventLastReplayedTime?: Date | undefined;

  /**
   * A time stamp for the time that the replay started.
   *
   * @public
   */
  ReplayStartTime?: Date | undefined;

  /**
   * A time stamp for the time that the replay completed.
   *
   * @public
   */
  ReplayEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListReplaysResponse {
  /**
   * An array of `Replay` objects that contain information about the replay.
   *
   * @public
   */
  Replays?: Replay[] | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetRequest {
  /**
   * The Amazon Resource Name (ARN) of the target resource.
   *
   * @public
   */
  TargetArn: string | undefined;

  /**
   * The name or ARN of the event bus to list rules for. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetResponse {
  /**
   * The names of the rules that can invoke the given target.
   *
   * @public
   */
  RuleNames?: string[] | undefined;

  /**
   * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * The prefix matching the rule name.
   *
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * The name or ARN of the event bus to list the rules for. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * Contains information about a rule in Amazon EventBridge.
 *
 * @public
 */
export interface Rule {
  /**
   * The name of the rule.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The event pattern of the rule. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * The state of the rule.
   *
   * @public
   */
  State?: RuleState | undefined;

  /**
   * The description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see [Creating an Amazon EventBridge rule that runs on a schedule](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html).
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the role that is used for target invocation.
   *
   * If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a `RoleArn` with proper permissions in the `Target` structure, instead of here in this parameter.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * If the rule was created on behalf of your account by an Amazon Web Services service, this field displays the principal name of the service that created the rule.
   *
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * The rules that match the specified criteria.
   *
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
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
   * The ARN of the EventBridge resource for which you want to view tags.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tag keys and values associated with the resource you specified
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTargetsByRuleRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Rule: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The token returned by a previous call to retrieve the next set of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return.
   *
   * @public
   */
  Limit?: number | undefined;
}

/**
 * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
 *
 * @public
 */
export interface BatchArrayProperties {
  /**
   * The size of the array, if this is an array batch job. Valid values are integers between 2 and 10,000.
   *
   * @public
   */
  Size?: number | undefined;
}

/**
 * The retry strategy to use for failed jobs, if the target is an Batch job. If you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
 *
 * @public
 */
export interface BatchRetryStrategy {
  /**
   * The number of times to attempt to retry, if the job fails. Valid values are 1–10.
   *
   * @public
   */
  Attempts?: number | undefined;
}

/**
 * The custom parameters to be used when the target is an Batch job.
 *
 * @public
 */
export interface BatchParameters {
  /**
   * The ARN or name of the job definition to use if the event target is an Batch job. This job definition must already exist.
   *
   * @public
   */
  JobDefinition: string | undefined;

  /**
   * The name to use for this execution of the job, if the target is an Batch job.
   *
   * @public
   */
  JobName: string | undefined;

  /**
   * The array properties for the submitted job, such as the size of the array. The array size can be between 2 and 10,000. If you specify array properties for a job, it becomes an array job. This parameter is used only if the target is an Batch job.
   *
   * @public
   */
  ArrayProperties?: BatchArrayProperties | undefined;

  /**
   * The retry strategy to use for failed jobs, if the target is an Batch job. The retry strategy is the number of times to retry the failed job execution. Valid values are 1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the job definition.
   *
   * @public
   */
  RetryStrategy?: BatchRetryStrategy | undefined;
}

/**
 * A `DeadLetterConfig` object that contains information about a dead-letter queue configuration.
 *
 * @public
 */
export interface DeadLetterConfig {
  /**
   * The ARN of the SQS queue specified as the target for the dead-letter queue.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The details of a capacity provider strategy. To learn more, see [CapacityProviderStrategyItem](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html) in the Amazon ECS API Reference.
 *
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * The short name of the capacity provider.
   *
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * The weight value designates the relative percentage of the total number of tasks launched that should use the specified capacity provider. The weight value is taken into consideration after the base value, if defined, is satisfied.
   *
   * @public
   */
  weight?: number | undefined;

  /**
   * The base value designates how many tasks, at a minimum, to run on the specified capacity provider. Only one capacity provider in a capacity provider strategy can have a base defined. If no value is specified, the default value of 0 is used.
   *
   * @public
   */
  base?: number | undefined;
}

/**
 * This structure specifies the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
 *
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * Specifies the subnets associated with the task. These subnets must all be in the same VPC. You can specify as many as 16 subnets.
   *
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * Specifies the security groups associated with the task. These security groups must all be in the same VPC. You can specify as many as five security groups. If you do not specify a security group, the default security group for the VPC is used.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Specifies whether the task's elastic network interface receives a public IP address. You can specify `ENABLED` only when `LaunchType` in `EcsParameters` is set to `FARGATE`.
   *
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * This structure specifies the network configuration for an ECS task.
 *
 * @public
 */
export interface NetworkConfiguration {
  /**
   * Use this structure to specify the VPC subnets and security groups for the task, and whether a public IP address is to be used. This structure is relevant only for ECS tasks that use the `awsvpc` network mode.
   *
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
}

/**
 * An object representing a constraint on task placement. To learn more, see [Task Placement Constraints](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html) in the Amazon Elastic Container Service Developer Guide.
 *
 * @public
 */
export interface PlacementConstraint {
  /**
   * The type of constraint. Use distinctInstance to ensure that each task in a particular group is running on a different container instance. Use memberOf to restrict the selection to a group of valid candidates.
   *
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * A cluster query language expression to apply to the constraint. You cannot specify an expression if the constraint type is `distinctInstance`. To learn more, see [Cluster Query Language](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  expression?: string | undefined;
}

/**
 * The task placement strategy for a task or service. To learn more, see [Task Placement Strategies](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html) in the Amazon Elastic Container Service Service Developer Guide.
 *
 * @public
 */
export interface PlacementStrategy {
  /**
   * The type of placement strategy. The random placement strategy randomly places tasks on available candidates. The spread placement strategy spreads placement across available candidates evenly based on the field parameter. The binpack strategy places tasks on available candidates that have the least available amount of the resource that is specified with the field parameter. For example, if you binpack on memory, a task is placed on the instance with the least amount of remaining memory (but still enough to run the task).
   *
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * The field to apply the placement strategy against. For the spread placement strategy, valid values are instanceId (or host, which has the same effect), or any platform or custom attribute that is applied to a container instance, such as attribute:ecs.availability-zone. For the binpack placement strategy, valid values are cpu and memory. For the random placement strategy, this field is not used.
   *
   * @public
   */
  field?: string | undefined;
}

/**
 * The custom parameters to be used when the target is an Amazon ECS task.
 *
 * @public
 */
export interface EcsParameters {
  /**
   * The ARN of the task definition to use if the event target is an Amazon ECS task.
   *
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * The number of tasks to create based on `TaskDefinition`. The default is 1.
   *
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * Specifies the launch type on which your task is running. The launch type that you specify here must match one of the launch type (compatibilities) of the target task. The `FARGATE` value is supported only in the Regions where Fargate witt Amazon ECS is supported. For more information, see [Fargate on Amazon ECS](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * Use this structure if the Amazon ECS task uses the `awsvpc` network mode. This structure specifies the VPC subnets and security groups associated with the task, and whether a public IP address is to be used. This structure is required if `LaunchType` is `FARGATE` because the `awsvpc` mode is required for Fargate tasks.
   *
   * If you specify `NetworkConfiguration` when the target ECS task does not use the `awsvpc` network mode, the task fails.
   *
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * Specifies the platform version for the task. Specify only the numeric portion of the platform version, such as `1.1.0`.
   *
   * This structure is used only if `LaunchType` is `FARGATE`. For more information about valid platform versions, see [Fargate Platform Versions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html) in the *Amazon Elastic Container Service Developer Guide*.
   *
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * Specifies an ECS task group for the task. The maximum length is 255 characters.
   *
   * @public
   */
  Group?: string | undefined;

  /**
   * The capacity provider strategy to use for the task.
   *
   * If a `capacityProviderStrategy` is specified, the `launchType` parameter must be omitted. If no `capacityProviderStrategy` or launchType is specified, the `defaultCapacityProviderStrategy` for the cluster is used.
   *
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * Specifies whether to enable Amazon ECS managed tags for the task. For more information, see [Tagging Your Amazon ECS Resources](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html) in the Amazon Elastic Container Service Developer Guide.
   *
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * Whether or not to enable the execute command functionality for the containers in this task. If true, this enables execute command functionality on all containers in the task.
   *
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * An array of placement constraint objects to use for the task. You can specify up to 10 constraints per task (including constraints in the task definition and those specified at runtime).
   *
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * The placement strategy objects to use for the task. You can specify a maximum of five strategy rules per task.
   *
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * Specifies whether to propagate the tags from the task definition to the task. If no value is specified, the tags are not propagated. Tags can only be propagated to the task during task creation. To add tags to a task after task creation, use the TagResource API action.
   *
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * The reference ID to use for the task.
   *
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * The metadata that you apply to the task to help you categorize and organize them. Each tag consists of a key and an optional value, both of which you define. To learn more, see [RunTask](https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags) in the Amazon ECS API Reference.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * These are custom parameter to be used when the target is an API Gateway REST APIs or EventBridge ApiDestinations. In the latter case, these are merged with any InvocationParameters specified on the Connection, with any values from the Connection taking precedence.
 *
 * @public
 */
export interface HttpParameters {
  /**
   * The path parameter values to be used to populate API Gateway REST API or EventBridge ApiDestination path wildcards ("*").
   *
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * The headers that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * The query string keys/values that need to be sent as part of request invoking the API Gateway REST API or EventBridge ApiDestination.
   *
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * Contains the parameters needed for you to provide custom input to a target based on one or more pieces of data extracted from the event.
 *
 * @public
 */
export interface InputTransformer {
  /**
   * Map of JSON paths to be extracted from the event. You can then insert these in the template in `InputTemplate` to produce the output you want to be sent to the target.
   *
   * `InputPathsMap` is an array key-value pairs, where each value is a valid JSON path. You can have as many as 100 key-value pairs. You must use JSON dot notation, not bracket notation.
   *
   * The keys cannot start with "Amazon Web Services."
   *
   * @public
   */
  InputPathsMap?: Record<string, string> | undefined;

  /**
   * Input template where you specify placeholders that will be filled with the values of the keys from `InputPathsMap` to customize the data sent to the target. Enclose each `InputPathsMaps` value in brackets: <*value*> The InputTemplate must be valid JSON.
   *
   * If `InputTemplate` is a JSON object (surrounded by curly braces), the following restrictions apply:
   *
   * - The placeholder cannot be used as an object key.
   *
   * The following example shows the syntax for using `InputPathsMap` and `InputTemplate`.
   *
   * `"InputTransformer":`
   *
   * `\{`
   *
   * `"InputPathsMap": \{"instance": "$.detail.instance","status": "$.detail.status"\},`
   *
   * `"InputTemplate": "<instance> is in state <status>"`
   *
   * `\}`
   *
   * To have the `InputTemplate` include quote marks within a JSON string, escape each quote marks with a slash, as in the following example:
   *
   * `"InputTransformer":`
   *
   * `\{`
   *
   * `"InputPathsMap": \{"instance": "$.detail.instance","status": "$.detail.status"\},`
   *
   * `"InputTemplate": "<instance> is in state \"<status>\""`
   *
   * `\}`
   *
   * The `InputTemplate` can also be valid JSON with varibles in quotes or out, as in the following example:
   *
   * `"InputTransformer":`
   *
   * `\{`
   *
   * `"InputPathsMap": \{"instance": "$.detail.instance","status": "$.detail.status"\},`
   *
   * `"InputTemplate": '\{"myInstance": <instance>,"myStatus": "<instance> is in state \"<status>\""\}'`
   *
   * `\}`
   *
   * @public
   */
  InputTemplate: string | undefined;
}

/**
 * This object enables you to specify a JSON path to extract from the event and use as the partition key for the Amazon Kinesis data stream, so that you can control the shard to which the event goes. If you do not include this parameter, the default is to use the `eventId` as the partition key.
 *
 * @public
 */
export interface KinesisParameters {
  /**
   * The JSON path to be extracted from the event and used as the partition key. For more information, see [Amazon Kinesis Streams Key Concepts](https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key) in the *Amazon Kinesis Streams Developer Guide*.
   *
   * @public
   */
  PartitionKeyPath: string | undefined;
}

/**
 * These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
 *
 * @public
 */
export interface RedshiftDataParameters {
  /**
   * The name or ARN of the secret that enables access to the database. Required when authenticating using Amazon Web Services Secrets Manager.
   *
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * The name of the database. Required when authenticating using temporary credentials.
   *
   * @public
   */
  Database: string | undefined;

  /**
   * The database user name. Required when authenticating using temporary credentials.
   *
   * @public
   */
  DbUser?: string | undefined;

  /**
   * The SQL statement text to run.
   *
   * @public
   */
  Sql: string | undefined;

  /**
   * The name of the SQL statement. You can name the SQL statement when you create it to identify the query.
   *
   * @public
   */
  StatementName?: string | undefined;

  /**
   * Indicates whether to send an event back to EventBridge after the SQL statement runs.
   *
   * @public
   */
  WithEvent?: boolean | undefined;
}

/**
 * A `RetryPolicy` object that includes information about the retry policy settings.
 *
 * @public
 */
export interface RetryPolicy {
  /**
   * The maximum number of retry attempts to make before the request fails. Retry attempts continue until either the maximum number of attempts is made or until the duration of the `MaximumEventAgeInSeconds` is met.
   *
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * The maximum amount of time, in seconds, to continue to make retry attempts.
   *
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;
}

/**
 * Information about the EC2 instances that are to be sent the command, specified as key-value pairs. Each `RunCommandTarget` block can include only one key, but this key may specify multiple values.
 *
 * @public
 */
export interface RunCommandTarget {
  /**
   * Can be either `tag:` *tag-key* or `InstanceIds`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * If `Key` is `tag:` *tag-key*, `Values` is a list of tag values. If `Key` is `InstanceIds`, `Values` is a list of Amazon EC2 instance IDs.
   *
   * @public
   */
  Values: string[] | undefined;
}

/**
 * This parameter contains the criteria (either InstanceIds or a tag) used to specify which EC2 instances are to be sent the command.
 *
 * @public
 */
export interface RunCommandParameters {
  /**
   * Currently, we support including only one RunCommandTarget block, which specifies either an array of InstanceIds or a tag.
   *
   * @public
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

/**
 * Name/Value pair of a parameter to start execution of a SageMaker AI Model Building Pipeline.
 *
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * Name of parameter to start execution of a SageMaker AI Model Building Pipeline.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * Value of parameter to start execution of a SageMaker AI Model Building Pipeline.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * These are custom parameters to use when the target is a SageMaker AI Model Building Pipeline that starts based on EventBridge events.
 *
 * @public
 */
export interface SageMakerPipelineParameters {
  /**
   * List of Parameter names and values for SageMaker AI Model Building Pipeline execution.
   *
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * This structure includes the custom parameter to be used when the target is an SQS FIFO queue.
 *
 * @public
 */
export interface SqsParameters {
  /**
   * The FIFO message group ID to use as the target.
   *
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * Targets are the resources to be invoked when a rule is triggered. For a complete list of services and resources that can be set as a target, see [PutTargets](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html).
 *
 * If you are setting the event bus of another account as the target, and that account granted permission to your account through an organization instead of directly by the account ID, then you must specify a `RoleArn` with proper permissions in the `Target` structure. For more information, see [Sending and Receiving Events Between Amazon Web Services Accounts](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html) in the *Amazon EventBridge User Guide*.
 *
 * @public
 */
export interface Target {
  /**
   * The ID of the target. We recommend using a memorable and unique string.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the target.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If one rule triggers multiple targets, you can use a different IAM role for each target.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * Valid JSON text passed to the target. In this case, nothing from the event itself is passed to the target. For more information, see [The JavaScript Object Notation (JSON) Data Interchange Format](http://www.rfc-editor.org/rfc/rfc7159.txt).
   *
   * @public
   */
  Input?: string | undefined;

  /**
   * The value of the JSONPath that is used for extracting part of the matched event when passing it to the target. You must use JSON dot notation, not bracket notation. For more information about JSON paths, see [JSONPath](http://goessner.net/articles/JsonPath/).
   *
   * @public
   */
  InputPath?: string | undefined;

  /**
   * Settings to enable you to provide custom input to a target based on certain event data. You can extract one or more key-value pairs from the event and then use that data to send customized input to the target.
   *
   * @public
   */
  InputTransformer?: InputTransformer | undefined;

  /**
   * The custom parameter you can use to control the shard assignment, when the target is a Kinesis data stream. If you do not include this parameter, the default is to use the `eventId` as the partition key.
   *
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * Parameters used when you are using the rule to invoke Amazon EC2 Run Command.
   *
   * @public
   */
  RunCommandParameters?: RunCommandParameters | undefined;

  /**
   * Contains the Amazon ECS task definition and task count to be used, if the event target is an Amazon ECS task. For more information about Amazon ECS tasks, see [Task Definitions](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html) in the *Amazon EC2 Container Service Developer Guide*.
   *
   * @public
   */
  EcsParameters?: EcsParameters | undefined;

  /**
   * If the event target is an Batch job, this contains the job definition, job name, and other parameters. For more information, see [Jobs](https://docs.aws.amazon.com/batch/latest/userguide/jobs.html) in the *Batch User Guide*.
   *
   * @public
   */
  BatchParameters?: BatchParameters | undefined;

  /**
   * Contains the message group ID to use when the target is a FIFO queue.
   *
   * If you specify an SQS FIFO queue as a target, the queue must have content-based deduplication enabled.
   *
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or EventBridge ApiDestination.
   *
   * If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can use this parameter to specify headers, path parameters, and query string keys/values as part of your target invoking request. If you're using ApiDestinations, the corresponding Connection can also have these values configured. In case of any conflicting keys, values from the Connection take precedence.
   *
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift cluster.
   *
   * If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.
   *
   * @public
   */
  RedshiftDataParameters?: RedshiftDataParameters | undefined;

  /**
   * Contains the SageMaker AI Model Building Pipeline parameters to start execution of a SageMaker AI Model Building Pipeline.
   *
   * If you specify a SageMaker AI Model Building Pipeline as a target, you can use this to specify parameters to start a pipeline execution based on EventBridge events.
   *
   * @public
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;

  /**
   * The `DeadLetterConfig` that defines the target queue to send dead-letter queue events to.
   *
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * The `RetryPolicy` object that contains the retry policy configuration to use for the dead-letter queue.
   *
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;
}

/**
 * @public
 */
export interface ListTargetsByRuleResponse {
  /**
   * The targets assigned to the rule.
   *
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * Indicates whether there are additional results to retrieve. If there are no more results, the value is null.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Represents an event to be submitted.
 *
 * @public
 */
export interface PutEventsRequestEntry {
  /**
   * The time stamp of the event, per [RFC3339](https://www.rfc-editor.org/rfc/rfc3339.txt). If no time stamp is provided, the time stamp of the [PutEvents](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html) call is used.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * The source of the event.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * Free-form string used to decide what fields to expect in the event detail.
   *
   * @public
   */
  DetailType?: string | undefined;

  /**
   * A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.
   *
   * @public
   */
  Detail?: string | undefined;

  /**
   * The name or ARN of the event bus to receive the event. Only the rules that are associated with this event bus are used to match the event. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * An X-Ray trade header, which is an http header (X-Amzn-Trace-Id) that contains the trace-id associated with the event.
   *
   * To learn more about X-Ray trace headers, see [Tracing header](https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader) in the X-Ray Developer Guide.
   *
   * @public
   */
  TraceHeader?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * The entry that defines an event in your system. You can specify several parameters for the entry such as the source and type of the event, resources associated with the event, and so on.
   *
   * @public
   */
  Entries: PutEventsRequestEntry[] | undefined;
}

/**
 * Represents an event that failed to be submitted.
 *
 * @public
 */
export interface PutEventsResultEntry {
  /**
   * The ID of the event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The error code that indicates why the event submission failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that explains why the event submission failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * The number of failed entries.
   *
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * The successfully and unsuccessfully ingested events results. If the ingestion was successful, the entry has the event ID in it. Otherwise, you can use the error code and error message to identify the problem with the entry.
   *
   * @public
   */
  Entries?: PutEventsResultEntry[] | undefined;
}

/**
 * The details about an event generated by an SaaS partner.
 *
 * @public
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * The date and time of the event.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * The event source that is generating the entry.
   *
   * @public
   */
  Source?: string | undefined;

  /**
   * Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns. Any number, including zero, may be present.
   *
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * A free-form string used to decide what fields to expect in the event detail.
   *
   * @public
   */
  DetailType?: string | undefined;

  /**
   * A valid JSON string. There is no other schema imposed. The JSON string may contain fields and nested subobjects.
   *
   * @public
   */
  Detail?: string | undefined;
}

/**
 * @public
 */
export interface PutPartnerEventsRequest {
  /**
   * The list of events to write to the event bus.
   *
   * @public
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

/**
 * Represents an event that a partner tried to generate, but failed.
 *
 * @public
 */
export interface PutPartnerEventsResultEntry {
  /**
   * The ID of the event.
   *
   * @public
   */
  EventId?: string | undefined;

  /**
   * The error code that indicates why the event submission failed.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that explains why the event submission failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutPartnerEventsResponse {
  /**
   * The number of events from this operation that could not be written to the partner event bus.
   *
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * The list of events from this operation that were successfully written to the partner event bus.
   *
   * @public
   */
  Entries?: PutPartnerEventsResultEntry[] | undefined;
}

/**
 * A JSON string which you can use to limit the event bus permissions you are granting to only accounts that fulfill the condition. Currently, the only supported condition is membership in a certain Amazon Web Services organization. The string must contain `Type`, `Key`, and `Value` fields. The `Value` field specifies the ID of the Amazon Web Services organization. Following is an example value for `Condition`:
 *
 * `'\{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value": "o-1234567890"\}'`
 *
 * @public
 */
export interface Condition {
  /**
   * Specifies the type of condition. Currently the only supported value is `StringEquals`.
   *
   * @public
   */
  Type: string | undefined;

  /**
   * Specifies the key for the condition. Currently the only supported key is `aws:PrincipalOrgID`.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * Specifies the value for the key. Currently, this must be the ID of the organization.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionRequest {
  /**
   * The name of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The action that you are enabling the other account to perform.
   *
   * @public
   */
  Action?: string | undefined;

  /**
   * The 12-digit Amazon Web Services account ID that you are permitting to put events to your default event bus. Specify "*" to permit any account to put events to your default event bus.
   *
   * If you specify "*" without specifying `Condition`, avoid creating rules that may match undesirable events. To create more secure rules, make sure that the event pattern for each rule contains an `account` field with a specific account ID from which to receive events. Rules with an account field do not match any events sent from other accounts.
   *
   * @public
   */
  Principal?: string | undefined;

  /**
   * An identifier string for the external account that you are granting permissions to. If you later want to revoke the permission for this external account, specify this `StatementId` when you run [RemovePermission](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html).
   *
   * @public
   */
  StatementId?: string | undefined;

  /**
   * This parameter enables you to limit the permission to accounts that fulfill a certain condition, such as being a member of a certain Amazon Web Services organization. For more information about Amazon Web Services Organizations, see [What Is Amazon Web Services Organizations](https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html) in the *Amazon Web Services Organizations User Guide*.
   *
   * If you specify `Condition` with an Amazon Web Services organization ID, and specify "*" as the value for `Principal`, you grant permission to all the accounts in the named organization.
   *
   * The `Condition` is a JSON string which must contain `Type`, `Key`, and `Value` fields.
   *
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * A JSON string that describes the permission policy statement. You can include a `Policy` parameter in the request instead of using the `StatementId`, `Action`, `Principal`, or `Condition` parameters.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutRuleRequest {
  /**
   * The name of the rule that you are creating or updating.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".
   *
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * The event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * Indicates whether the rule is enabled or disabled.
   *
   * @public
   */
  State?: RuleState | undefined;

  /**
   * A description of the rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the IAM role associated with the rule.
   *
   * If you're setting an event bus in another account as the target and that account granted permission to your account through an organization instead of directly by the account ID, you must specify a `RoleArn` with proper permissions in the `Target` structure, instead of here in this parameter.
   *
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * The list of key-value pairs to associate with the rule.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name or ARN of the event bus to associate with this rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface PutRuleResponse {
  /**
   * The Amazon Resource Name (ARN) of the rule.
   *
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutTargetsRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Rule: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The targets to update or add to the rule.
   *
   * @public
   */
  Targets: Target[] | undefined;
}

/**
 * Represents a target that failed to be added to a rule.
 *
 * @public
 */
export interface PutTargetsResultEntry {
  /**
   * The ID of the target.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The error code that indicates why the target addition failed. If the value is `ConcurrentModificationException`, too many requests were made at the same time.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that explains why the target addition failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutTargetsResponse {
  /**
   * The number of failed entries.
   *
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * The failed target entries.
   *
   * @public
   */
  FailedEntries?: PutTargetsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * The statement ID corresponding to the account that is no longer allowed to put events to the default event bus.
   *
   * @public
   */
  StatementId?: string | undefined;

  /**
   * Specifies whether to remove all permissions.
   *
   * @public
   */
  RemoveAllPermissions?: boolean | undefined;

  /**
   * The name of the event bus to revoke permissions for. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTargetsRequest {
  /**
   * The name of the rule.
   *
   * @public
   */
  Rule: string | undefined;

  /**
   * The name or ARN of the event bus associated with the rule. If you omit this, the default event bus is used.
   *
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * The IDs of the targets to remove from the rule.
   *
   * @public
   */
  Ids: string[] | undefined;

  /**
   * If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify `Force` as `True` to remove targets. This parameter is ignored for rules that are not managed rules. You can check whether a rule is a managed rule by using `DescribeRule` or `ListRules` and checking the `ManagedBy` field of the response.
   *
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * Represents a target that failed to be removed from a rule.
 *
 * @public
 */
export interface RemoveTargetsResultEntry {
  /**
   * The ID of the target.
   *
   * @public
   */
  TargetId?: string | undefined;

  /**
   * The error code that indicates why the target removal failed. If the value is `ConcurrentModificationException`, too many requests were made at the same time.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message that explains why the target removal failed.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTargetsResponse {
  /**
   * The number of failed entries.
   *
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * The failed target entries.
   *
   * @public
   */
  FailedEntries?: RemoveTargetsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface StartReplayRequest {
  /**
   * The name of the replay to start.
   *
   * @public
   */
  ReplayName: string | undefined;

  /**
   * A description for the replay to start.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the archive to replay events from.
   *
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * A time stamp for the time to start replaying events. Only events that occurred between the `EventStartTime` and `EventEndTime` are replayed.
   *
   * @public
   */
  EventStartTime: Date | undefined;

  /**
   * A time stamp for the time to stop replaying events. Only events that occurred between the `EventStartTime` and `EventEndTime` are replayed.
   *
   * @public
   */
  EventEndTime: Date | undefined;

  /**
   * A `ReplayDestination` object that includes details about the destination for the replay.
   *
   * @public
   */
  Destination: ReplayDestination | undefined;
}

/**
 * @public
 */
export interface StartReplayResponse {
  /**
   * The ARN of the replay.
   *
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * The state of the replay.
   *
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * The reason that the replay is in the state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time at which the replay started.
   *
   * @public
   */
  ReplayStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the EventBridge resource that you're adding tags to.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface TestEventPatternRequest {
  /**
   * The event pattern. For more information, see [Events and Event Patterns](https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html) in the *Amazon EventBridge User Guide*.
   *
   * @public
   */
  EventPattern: string | undefined;

  /**
   * The event, in JSON format, to test against the event pattern. The JSON must follow the format specified in [Amazon Web Services Events](https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html), and the following fields are mandatory:
   *
   * - `id`
   * - `account`
   * - `source`
   * - `time`
   * - `region`
   * - `resources`
   * - `detail-type`
   *
   * @public
   */
  Event: string | undefined;
}

/**
 * @public
 */
export interface TestEventPatternResponse {
  /**
   * Indicates whether the event matches the event pattern.
   *
   * @public
   */
  Result?: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The ARN of the EventBridge resource from which you are removing tags.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateApiDestinationRequest {
  /**
   * The name of the API destination to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The name of the API destination to update.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ARN of the connection to use for the API destination.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The URL to the endpoint to use for the API destination.
   *
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * The method to use for the API destination.
   *
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * The maximum number of invocations per second to send to the API destination.
   *
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface UpdateApiDestinationResponse {
  /**
   * The ARN of the API destination that was updated.
   *
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * The state of the API destination that was updated.
   *
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * A time stamp for the time that the API destination was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the API destination was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateArchiveRequest {
  /**
   * The name of the archive to update.
   *
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * The description for the archive.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The event pattern to use to filter events sent to the archive.
   *
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * The number of days to retain events in the archive.
   *
   * @public
   */
  RetentionDays?: number | undefined;
}

/**
 * @public
 */
export interface UpdateArchiveResponse {
  /**
   * The ARN of the archive.
   *
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * The state of the archive.
   *
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * The reason that the archive is in the current state.
   *
   * @public
   */
  StateReason?: string | undefined;

  /**
   * The time at which the archive was updated.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * Contains the API key authorization parameters to use to update the connection.
 *
 * @public
 */
export interface UpdateConnectionApiKeyAuthRequestParameters {
  /**
   * The name of the API key to use for authorization.
   *
   * @public
   */
  ApiKeyName?: string | undefined;

  /**
   * The value associated with teh API key to use for authorization.
   *
   * @public
   */
  ApiKeyValue?: string | undefined;
}

/**
 * Contains the Basic authorization parameters for the connection.
 *
 * @public
 */
export interface UpdateConnectionBasicAuthRequestParameters {
  /**
   * The user name to use for Basic authorization.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password associated with the user name to use for Basic authorization.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * Contains the OAuth authorization parameters to use for the connection.
 *
 * @public
 */
export interface UpdateConnectionOAuthClientRequestParameters {
  /**
   * The client ID to use for OAuth authorization.
   *
   * @public
   */
  ClientID?: string | undefined;

  /**
   * The client secret assciated with the client ID to use for OAuth authorization.
   *
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * Contains the OAuth request parameters to use for the connection.
 *
 * @public
 */
export interface UpdateConnectionOAuthRequestParameters {
  /**
   * A `UpdateConnectionOAuthClientRequestParameters` object that contains the client parameters to use for the connection when OAuth is specified as the authorization type.
   *
   * @public
   */
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters | undefined;

  /**
   * The URL to the authorization endpoint when OAuth is specified as the authorization type.
   *
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * The method used to connect to the HTTP endpoint.
   *
   * @public
   */
  HttpMethod?: ConnectionOAuthHttpMethod | undefined;

  /**
   * The additional HTTP parameters used for the OAuth authorization request.
   *
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * Contains the additional parameters to use for the connection.
 *
 * @public
 */
export interface UpdateConnectionAuthRequestParameters {
  /**
   * A `UpdateConnectionBasicAuthRequestParameters` object that contains the authorization parameters for Basic authorization.
   *
   * @public
   */
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters | undefined;

  /**
   * A `UpdateConnectionOAuthRequestParameters` object that contains the authorization parameters for OAuth authorization.
   *
   * @public
   */
  OAuthParameters?: UpdateConnectionOAuthRequestParameters | undefined;

  /**
   * A `UpdateConnectionApiKeyAuthRequestParameters` object that contains the authorization parameters for API key authorization.
   *
   * @public
   */
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters | undefined;

  /**
   * A `ConnectionHttpParameters` object that contains the additional parameters to use for the connection.
   *
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * The name of the connection to update.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A description for the connection.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The type of authorization to use for the connection.
   *
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * The authorization parameters to use for the connection.
   *
   * @public
   */
  AuthParameters?: UpdateConnectionAuthRequestParameters | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * The ARN of the connection that was updated.
   *
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * The state of the connection that was updated.
   *
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * A time stamp for the time that the connection was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * A time stamp for the time that the connection was last authorized.
   *
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}
