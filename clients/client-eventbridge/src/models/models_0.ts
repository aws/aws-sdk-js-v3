// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EventBridgeServiceException as __BaseException } from "./EventBridgeServiceException";

/**
 * @public
 */
export interface ActivateEventSourceRequest {
  /**
   * @public
   * <p>The name of the partner event source to activate.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 */
export class ConcurrentModificationException extends __BaseException {
  readonly name: "ConcurrentModificationException" = "ConcurrentModificationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConcurrentModificationException, __BaseException>) {
    super({
      name: "ConcurrentModificationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConcurrentModificationException.prototype);
  }
}

/**
 * @public
 * <p>This exception occurs due to unexpected causes.</p>
 */
export class InternalException extends __BaseException {
  readonly name: "InternalException" = "InternalException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalException, __BaseException>) {
    super({
      name: "InternalException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalException.prototype);
  }
}

/**
 * @public
 * <p>The specified state is not a valid state for an event source.</p>
 */
export class InvalidStateException extends __BaseException {
  readonly name: "InvalidStateException" = "InvalidStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateException, __BaseException>) {
    super({
      name: "InvalidStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateException.prototype);
  }
}

/**
 * @public
 * <p>The operation you are attempting is not available in this region.</p>
 */
export class OperationDisabledException extends __BaseException {
  readonly name: "OperationDisabledException" = "OperationDisabledException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<OperationDisabledException, __BaseException>) {
    super({
      name: "OperationDisabledException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, OperationDisabledException.prototype);
  }
}

/**
 * @public
 * <p>An entity that you specified does not exist.</p>
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
 * @enum
 */
export const ApiDestinationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type ApiDestinationState = (typeof ApiDestinationState)[keyof typeof ApiDestinationState];

/**
 * @public
 * @enum
 */
export const ApiDestinationHttpMethod = {
  DELETE: "DELETE",
  GET: "GET",
  HEAD: "HEAD",
  OPTIONS: "OPTIONS",
  PATCH: "PATCH",
  POST: "POST",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type ApiDestinationHttpMethod = (typeof ApiDestinationHttpMethod)[keyof typeof ApiDestinationHttpMethod];

/**
 * @public
 * <p>Contains details about an API destination.</p>
 */
export interface ApiDestination {
  /**
   * @public
   * <p>The ARN of the API destination.</p>
   */
  ApiDestinationArn?: string;

  /**
   * @public
   * <p>The name of the API destination.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the API destination.</p>
   */
  ApiDestinationState?: ApiDestinationState;

  /**
   * @public
   * <p>The ARN of the connection specified for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The URL to the endpoint for the API destination.</p>
   */
  InvocationEndpoint?: string;

  /**
   * @public
   * <p>The method to use to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod;

  /**
   * @public
   * <p>The maximum number of invocations per second to send to the HTTP endpoint.</p>
   */
  InvocationRateLimitPerSecond?: number;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ArchiveState = {
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ArchiveState = (typeof ArchiveState)[keyof typeof ArchiveState];

/**
 * @public
 * <p>An <code>Archive</code> object that contains details about an archive.</p>
 */
export interface Archive {
  /**
   * @public
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * @public
   * <p>The ARN of the event bus associated with the archive. Only events from this event bus are
   *       sent to the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>The current state of the archive.</p>
   */
  State?: ArchiveState;

  /**
   * @public
   * <p>A description for the reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The number of days to retain events in the archive before they are deleted.</p>
   */
  RetentionDays?: number;

  /**
   * @public
   * <p>The size of the archive, in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * @public
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * @public
   * <p>The time stamp for the time that the archive was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 * @enum
 */
export const AssignPublicIp = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type AssignPublicIp = (typeof AssignPublicIp)[keyof typeof AssignPublicIp];

/**
 * @public
 */
export interface CancelReplayRequest {
  /**
   * @public
   * <p>The name of the replay to cancel.</p>
   */
  ReplayName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplayState = {
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
} as const;

/**
 * @public
 */
export type ReplayState = (typeof ReplayState)[keyof typeof ReplayState];

/**
 * @public
 */
export interface CancelReplayResponse {
  /**
   * @public
   * <p>The ARN of the replay to cancel.</p>
   */
  ReplayArn?: string;

  /**
   * @public
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState;

  /**
   * @public
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;
}

/**
 * @public
 * <p>An error occurred because a replay can be canceled only when the state is Running or
 *       Starting.</p>
 */
export class IllegalStatusException extends __BaseException {
  readonly name: "IllegalStatusException" = "IllegalStatusException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<IllegalStatusException, __BaseException>) {
    super({
      name: "IllegalStatusException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, IllegalStatusException.prototype);
  }
}

/**
 * @public
 */
export interface CreateApiDestinationRequest {
  /**
   * @public
   * <p>The name for the API destination to create.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the API destination to create.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the connection to use for the API destination. The destination endpoint must
   *       support the authorization type specified for the connection.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * @public
   * <p>The URL to the HTTP invocation endpoint for the API destination.</p>
   */
  InvocationEndpoint: string | undefined;

  /**
   * @public
   * <p>The method to use for the request to the HTTP invocation endpoint.</p>
   */
  HttpMethod: ApiDestinationHttpMethod | undefined;

  /**
   * @public
   * <p>The maximum number of requests per second to send to the HTTP invocation endpoint.</p>
   */
  InvocationRateLimitPerSecond?: number;
}

/**
 * @public
 */
export interface CreateApiDestinationResponse {
  /**
   * @public
   * <p>The ARN of the API destination that was created by the request.</p>
   */
  ApiDestinationArn?: string;

  /**
   * @public
   * <p>The state of the API destination that was created by the request.</p>
   */
  ApiDestinationState?: ApiDestinationState;

  /**
   * @public
   * <p>A time stamp indicating the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp indicating the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * @public
 * <p>The resource you are trying to create already exists.</p>
 */
export class ResourceAlreadyExistsException extends __BaseException {
  readonly name: "ResourceAlreadyExistsException" = "ResourceAlreadyExistsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceAlreadyExistsException, __BaseException>) {
    super({
      name: "ResourceAlreadyExistsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceAlreadyExistsException.prototype);
  }
}

/**
 * @public
 */
export interface CreateArchiveRequest {
  /**
   * @public
   * <p>The name for the archive to create.</p>
   */
  ArchiveName: string | undefined;

  /**
   * @public
   * <p>The ARN of the event bus that sends events to the archive.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * @public
   * <p>A description for the archive.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>An event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>The number of days to retain events for. Default value is 0. If set to 0, events are
   *       retained indefinitely</p>
   */
  RetentionDays?: number;
}

/**
 * @public
 */
export interface CreateArchiveResponse {
  /**
   * @public
   * <p>The ARN of the archive that was created.</p>
   */
  ArchiveArn?: string;

  /**
   * @public
   * <p>The state of the archive that was created.</p>
   */
  State?: ArchiveState;

  /**
   * @public
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 * <p>The event pattern is not valid.</p>
 */
export class InvalidEventPatternException extends __BaseException {
  readonly name: "InvalidEventPatternException" = "InvalidEventPatternException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidEventPatternException, __BaseException>) {
    super({
      name: "InvalidEventPatternException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidEventPatternException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const ConnectionAuthorizationType = {
  API_KEY: "API_KEY",
  BASIC: "BASIC",
  OAUTH_CLIENT_CREDENTIALS: "OAUTH_CLIENT_CREDENTIALS",
} as const;

/**
 * @public
 */
export type ConnectionAuthorizationType =
  (typeof ConnectionAuthorizationType)[keyof typeof ConnectionAuthorizationType];

/**
 * @public
 * <p>Contains the API key authorization parameters for the connection.</p>
 */
export interface CreateConnectionApiKeyAuthRequestParameters {
  /**
   * @public
   * <p>The name of the API key to use for authorization.</p>
   */
  ApiKeyName: string | undefined;

  /**
   * @public
   * <p>The value for the API key to use for authorization.</p>
   */
  ApiKeyValue: string | undefined;
}

/**
 * @public
 * <p>Contains the Basic authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionBasicAuthRequestParameters {
  /**
   * @public
   * <p>The user name to use for Basic authorization.</p>
   */
  Username: string | undefined;

  /**
   * @public
   * <p>The password associated with the user name to use for Basic authorization.</p>
   */
  Password: string | undefined;
}

/**
 * @public
 * <p>Additional parameter included in the body. You can include up to 100 additional body
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 */
export interface ConnectionBodyParameter {
  /**
   * @public
   * <p>The key for the parameter.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value associated with the key.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Specified whether the value is secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * @public
 * <p>Additional parameter included in the header. You can include up to 100 additional header
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 */
export interface ConnectionHeaderParameter {
  /**
   * @public
   * <p>The key for the parameter.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value associated with the key.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Specified whether the value is a secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * @public
 * <p>Additional query string parameter for the connection. You can include up to 100 additional
 *       query string parameters per request. Each additional parameter counts towards the event
 *       payload size, which cannot exceed 64 KB.</p>
 */
export interface ConnectionQueryStringParameter {
  /**
   * @public
   * <p>The key for a query string parameter.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value associated with the key for the query string parameter.</p>
   */
  Value?: string;

  /**
   * @public
   * <p>Specifies whether the value is secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * @public
 * <p>Contains additional parameters for the connection.</p>
 */
export interface ConnectionHttpParameters {
  /**
   * @public
   * <p>Contains additional header parameters for the connection.</p>
   */
  HeaderParameters?: ConnectionHeaderParameter[];

  /**
   * @public
   * <p>Contains additional query string parameters for the connection.</p>
   */
  QueryStringParameters?: ConnectionQueryStringParameter[];

  /**
   * @public
   * <p>Contains additional body string parameters for the connection.</p>
   */
  BodyParameters?: ConnectionBodyParameter[];
}

/**
 * @public
 * <p>Contains the Basic authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionOAuthClientRequestParameters {
  /**
   * @public
   * <p>The client ID to use for OAuth authorization for the connection.</p>
   */
  ClientID: string | undefined;

  /**
   * @public
   * <p>The client secret associated with the client ID to use for OAuth authorization for the
   *       connection.</p>
   */
  ClientSecret: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionOAuthHttpMethod = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
} as const;

/**
 * @public
 */
export type ConnectionOAuthHttpMethod = (typeof ConnectionOAuthHttpMethod)[keyof typeof ConnectionOAuthHttpMethod];

/**
 * @public
 * <p>Contains the OAuth authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionOAuthRequestParameters {
  /**
   * @public
   * <p>A <code>CreateConnectionOAuthClientRequestParameters</code> object that contains the
   *       client parameters for OAuth authorization.</p>
   */
  ClientParameters: CreateConnectionOAuthClientRequestParameters | undefined;

  /**
   * @public
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * @public
   * <p>The method to use for the authorization request.</p>
   */
  HttpMethod: ConnectionOAuthHttpMethod | undefined;

  /**
   * @public
   * <p>A <code>ConnectionHttpParameters</code> object that contains details about the additional
   *       parameters to use for the connection.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 * <p>Contains the authorization parameters for the connection.</p>
 */
export interface CreateConnectionAuthRequestParameters {
  /**
   * @public
   * <p>A <code>CreateConnectionBasicAuthRequestParameters</code> object that contains the Basic
   *       authorization parameters to use for the connection.</p>
   */
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters;

  /**
   * @public
   * <p>A <code>CreateConnectionOAuthRequestParameters</code> object that contains the OAuth
   *       authorization parameters to use for the connection.</p>
   */
  OAuthParameters?: CreateConnectionOAuthRequestParameters;

  /**
   * @public
   * <p>A <code>CreateConnectionApiKeyAuthRequestParameters</code> object that contains the API
   *       key authorization parameters to use for the connection.</p>
   */
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;

  /**
   * @public
   * <p>A <code>ConnectionHttpParameters</code> object that contains the API key authorization
   *       parameters to use for the connection. Note that if you include additional parameters for the
   *       target of a rule via <code>HttpParameters</code>, including query strings, the parameters
   *       added for the connection take precedence.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * @public
   * <p>The name for the connection to create.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the connection to create.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of authorization to use for the connection.</p>
   *          <note>
   *             <p>OAUTH tokens are refreshed when a 401 or 407 response is returned.</p>
   *          </note>
   */
  AuthorizationType: ConnectionAuthorizationType | undefined;

  /**
   * @public
   * <p>A <code>CreateConnectionAuthRequestParameters</code> object that contains the
   *       authorization parameters to use to authorize with the endpoint. </p>
   */
  AuthParameters: CreateConnectionAuthRequestParameters | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  AUTHORIZED: "AUTHORIZED",
  AUTHORIZING: "AUTHORIZING",
  CREATING: "CREATING",
  DEAUTHORIZED: "DEAUTHORIZED",
  DEAUTHORIZING: "DEAUTHORIZING",
  DELETING: "DELETING",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ConnectionState = (typeof ConnectionState)[keyof typeof ConnectionState];

/**
 * @public
 */
export interface CreateConnectionResponse {
  /**
   * @public
   * <p>The ARN of the connection that was created by the request.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The state of the connection that was created by the request.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 * <p>The event buses the endpoint is associated with.</p>
 */
export interface EndpointEventBus {
  /**
   * @public
   * <p>The ARN of the event bus the endpoint is associated with.</p>
   */
  EventBusArn: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ReplicationState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type ReplicationState = (typeof ReplicationState)[keyof typeof ReplicationState];

/**
 * @public
 * <p>Endpoints can replicate all events to the secondary Region.</p>
 */
export interface ReplicationConfig {
  /**
   * @public
   * <p>The state of event replication.</p>
   */
  State?: ReplicationState;
}

/**
 * @public
 * <p>The primary Region of the endpoint.</p>
 */
export interface Primary {
  /**
   * @public
   * <p>The ARN of the health check used by the endpoint to determine whether failover is triggered.</p>
   */
  HealthCheck: string | undefined;
}

/**
 * @public
 * <p>The secondary Region that processes events when failover is triggered or replication is enabled.</p>
 */
export interface Secondary {
  /**
   * @public
   * <p>Defines the secondary Region.</p>
   */
  Route: string | undefined;
}

/**
 * @public
 * <p>The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
 */
export interface FailoverConfig {
  /**
   * @public
   * <p>The main Region of the endpoint.</p>
   */
  Primary: Primary | undefined;

  /**
   * @public
   * <p>The Region that events are routed to when failover is triggered or event replication is enabled.</p>
   */
  Secondary: Secondary | undefined;
}

/**
 * @public
 * <p>The routing configuration of the endpoint.</p>
 */
export interface RoutingConfig {
  /**
   * @public
   * <p>The failover configuration for an endpoint. This includes what triggers failover and what happens when it's triggered.</p>
   */
  FailoverConfig: FailoverConfig | undefined;
}

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * @public
   * <p>The name of the global endpoint. For example, <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description of the global endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Configure the routing policy, including the health check and secondary Region..</p>
   */
  RoutingConfig: RoutingConfig | undefined;

  /**
   * @public
   * <p>Enable or disable event replication. The default state is <code>ENABLED</code> which means you must supply a <code>RoleArn</code>. If you don't have a
   *       <code>RoleArn</code> or you don't want event replication enabled, set the state to <code>DISABLED</code>.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>Define the event buses used. </p>
   *          <important>
   *             <p>The names of the event buses must be identical in each Region.</p>
   *          </important>
   */
  EventBuses: EndpointEventBus[] | undefined;

  /**
   * @public
   * <p>The ARN of the role used for replication.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 * @enum
 */
export const EndpointState = {
  ACTIVE: "ACTIVE",
  CREATE_FAILED: "CREATE_FAILED",
  CREATING: "CREATING",
  DELETE_FAILED: "DELETE_FAILED",
  DELETING: "DELETING",
  UPDATE_FAILED: "UPDATE_FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type EndpointState = (typeof EndpointState)[keyof typeof EndpointState];

/**
 * @public
 */
export interface CreateEndpointResponse {
  /**
   * @public
   * <p>The name of the endpoint that was created by this request.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the endpoint that was created by this request.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The routing configuration defined by this request.</p>
   */
  RoutingConfig?: RoutingConfig;

  /**
   * @public
   * <p>Whether event replication was enabled or disabled by this request.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>The event buses used by this request.</p>
   */
  EventBuses?: EndpointEventBus[];

  /**
   * @public
   * <p>The ARN of the role used by event replication for this request.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The state of the endpoint that was created by this request.</p>
   */
  State?: EndpointState;
}

/**
 * @public
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses
 *       support tagging.</p>
 */
export interface Tag {
  /**
   * @public
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *       you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEventBusRequest {
  /**
   * @public
   * <p>The name of the new event bus. </p>
   *          <p>Custom event bus names can't contain the <code>/</code> character, but you can use the <code>/</code> character in partner event bus names. In addition, for partner event buses, the name must exactly match the name of the partner event
   *       source that this event bus is matched to.</p>
   *          <p>You can't use the name <code>default</code> for a custom event bus, as this name is already used for your account's
   *       default event bus.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>If you are creating a partner event bus, this specifies the partner event source that the
   *       new event bus will be matched with.</p>
   */
  EventSourceName?: string;

  /**
   * @public
   * <p>Tags to associate with the event bus.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateEventBusResponse {
  /**
   * @public
   * <p>The ARN of the new event bus.</p>
   */
  EventBusArn?: string;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceRequest {
  /**
   * @public
   * <p>The name of the partner event source. This name must be unique and must be in the format
   *           <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>.
   *       The Amazon Web Services account that wants to use this partner event source must create a partner event bus
   *       with a name that matches the name of the partner event source.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID that is permitted to create a matching partner event bus for this
   *       partner event source.</p>
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceResponse {
  /**
   * @public
   * <p>The ARN of the partner event source.</p>
   */
  EventSourceArn?: string;
}

/**
 * @public
 */
export interface DeactivateEventSourceRequest {
  /**
   * @public
   * <p>The name of the partner event source to deactivate.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionRequest {
  /**
   * @public
   * <p>The name of the connection to remove authorization from.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionResponse {
  /**
   * @public
   * <p>The ARN of the connection that authorization was removed from.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @public
 */
export interface DeleteApiDestinationRequest {
  /**
   * @public
   * <p>The name of the destination to delete.</p>
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
   * @public
   * <p>The name of the archive to delete.</p>
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
   * @public
   * <p>The name of the connection to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * @public
   * <p>The ARN of the connection that was deleted.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The state of the connection before it was deleted.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last modified before it was
   *       deleted.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last authorized before it wa
   *       deleted.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * @public
   * <p>The name of the endpoint you want to delete. For example, <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>..</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointResponse {}

/**
 * @public
 */
export interface DeleteEventBusRequest {
  /**
   * @public
   * <p>The name of the event bus to delete.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerEventSourceRequest {
  /**
   * @public
   * <p>The name of the event source to delete.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The Amazon Web Services account ID of the Amazon Web Services customer that the event source was created for.</p>
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify
   *         <code>Force</code> as <code>True</code> to delete the rule. This parameter is ignored for
   *       rules that are not managed rules. You can check whether a rule is a managed rule by using
   *         <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code>
   *       field of the response.</p>
   */
  Force?: boolean;
}

/**
 * @public
 * <p>This rule was created by an Amazon Web Services service on behalf of your account. It is managed by that
 *       service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 */
export class ManagedRuleException extends __BaseException {
  readonly name: "ManagedRuleException" = "ManagedRuleException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ManagedRuleException, __BaseException>) {
    super({
      name: "ManagedRuleException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ManagedRuleException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeApiDestinationRequest {
  /**
   * @public
   * <p>The name of the API destination to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeApiDestinationResponse {
  /**
   * @public
   * <p>The ARN of the API destination retrieved.</p>
   */
  ApiDestinationArn?: string;

  /**
   * @public
   * <p>The name of the API destination retrieved.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description for the API destination retrieved.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the API destination retrieved.</p>
   */
  ApiDestinationState?: ApiDestinationState;

  /**
   * @public
   * <p>The ARN of the connection specified for the API destination retrieved.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The URL to use to connect to the HTTP endpoint.</p>
   */
  InvocationEndpoint?: string;

  /**
   * @public
   * <p>The method to use to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod;

  /**
   * @public
   * <p>The maximum number of invocations per second to specified for the API destination. Note
   *       that if you set the invocation rate maximum to a value lower the rate necessary to send all
   *       events received on to the destination HTTP endpoint, some events may not be delivered within
   *       the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver
   *       all events, consider using a dead-letter queue to catch events that are not delivered within
   *       24 hours.</p>
   */
  InvocationRateLimitPerSecond?: number;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DescribeArchiveRequest {
  /**
   * @public
   * <p>The name of the archive to retrieve.</p>
   */
  ArchiveName: string | undefined;
}

/**
 * @public
 */
export interface DescribeArchiveResponse {
  /**
   * @public
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * @public
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * @public
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>The description of the archive.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The event pattern used to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState;

  /**
   * @public
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The number of days to retain events for in the archive.</p>
   */
  RetentionDays?: number;

  /**
   * @public
   * <p>The size of the archive in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * @public
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * @public
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface DescribeConnectionRequest {
  /**
   * @public
   * <p>The name of the connection to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * <p>Contains the authorization parameters for the connection if API Key is specified as the
 *       authorization type.</p>
 */
export interface ConnectionApiKeyAuthResponseParameters {
  /**
   * @public
   * <p>The name of the header to use for the <code>APIKeyValue</code> used for
   *       authorization.</p>
   */
  ApiKeyName?: string;
}

/**
 * @public
 * <p>Contains the authorization parameters for the connection if Basic is specified as the
 *       authorization type.</p>
 */
export interface ConnectionBasicAuthResponseParameters {
  /**
   * @public
   * <p>The user name to use for Basic authorization.</p>
   */
  Username?: string;
}

/**
 * @public
 * <p>Contains the client response parameters for the connection when OAuth is specified as the
 *       authorization type.</p>
 */
export interface ConnectionOAuthClientResponseParameters {
  /**
   * @public
   * <p>The client ID associated with the response to the connection request.</p>
   */
  ClientID?: string;
}

/**
 * @public
 * <p>Contains the response parameters when OAuth is specified as the authorization type.</p>
 */
export interface ConnectionOAuthResponseParameters {
  /**
   * @public
   * <p>A <code>ConnectionOAuthClientResponseParameters</code> object that contains details about
   *       the client parameters returned when OAuth is specified as the authorization type.</p>
   */
  ClientParameters?: ConnectionOAuthClientResponseParameters;

  /**
   * @public
   * <p>The URL to the HTTP endpoint that authorized the request.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * @public
   * <p>The method used to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ConnectionOAuthHttpMethod;

  /**
   * @public
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 * <p>Contains the authorization parameters to use for the connection.</p>
 */
export interface ConnectionAuthResponseParameters {
  /**
   * @public
   * <p>The authorization parameters for Basic authorization.</p>
   */
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters;

  /**
   * @public
   * <p>The OAuth parameters to use for authorization.</p>
   */
  OAuthParameters?: ConnectionOAuthResponseParameters;

  /**
   * @public
   * <p>The API Key parameters to use for authorization.</p>
   */
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;

  /**
   * @public
   * <p>Additional parameters for the connection that are passed through with every invocation to
   *       the HTTP endpoint.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 */
export interface DescribeConnectionResponse {
  /**
   * @public
   * <p>The ARN of the connection retrieved.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The name of the connection retrieved.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description for the connection retrieved.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The state of the connection retrieved.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>The reason that the connection is in the current connection state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The type of authorization specified for the connection.</p>
   */
  AuthorizationType?: ConnectionAuthorizationType;

  /**
   * @public
   * <p>The ARN of the secret created from the authorization parameters specified for the
   *       connection.</p>
   */
  SecretArn?: string;

  /**
   * @public
   * <p>The parameters to use for authorization for the connection.</p>
   */
  AuthParameters?: ConnectionAuthResponseParameters;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * @public
   * <p>The name of the endpoint you want to get information about. For example, <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The primary Region of the endpoint you want to get information about. For example <code>"HomeRegion": "us-east-1"</code>.</p>
   */
  HomeRegion?: string;
}

/**
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * @public
   * <p>The name of the endpoint you asked for information about.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The description of the endpoint you asked for information about.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the endpoint you asked for information about.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The routing configuration of the endpoint you asked for information about.</p>
   */
  RoutingConfig?: RoutingConfig;

  /**
   * @public
   * <p>Whether replication is enabled or disabled for the endpoint you asked for information about.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>The event buses being used by the endpoint you asked for information about.</p>
   */
  EventBuses?: EndpointEventBus[];

  /**
   * @public
   * <p>The ARN of the role used by the endpoint you asked for information about.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The ID of the endpoint you asked for information about.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>The URL of the endpoint you asked for information about.</p>
   */
  EndpointUrl?: string;

  /**
   * @public
   * <p>The current state of the endpoint you asked for information about.</p>
   */
  State?: EndpointState;

  /**
   * @public
   * <p>The reason the endpoint you asked for information about is in its current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time the endpoint you asked for information about was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last time the endpoint you asked for information about was modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface DescribeEventBusRequest {
  /**
   * @public
   * <p>The name or ARN of the event bus to show details for. If you omit this, the default event
   *       bus is displayed.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DescribeEventBusResponse {
  /**
   * @public
   * <p>The name of the event bus. Currently, this is always <code>default</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the current
   *       account.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The policy that enables the external account to send events to your account.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface DescribeEventSourceRequest {
  /**
   * @public
   * <p>The name of the partner event source to display the details of.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EventSourceState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type EventSourceState = (typeof EventSourceState)[keyof typeof EventSourceState];

/**
 * @public
 */
export interface DescribeEventSourceResponse {
  /**
   * @public
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the SaaS partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time that the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The date and time that the event source will expire if you do not create a matching event
   *       bus.</p>
   */
  ExpirationTime?: Date;

  /**
   * @public
   * <p>The name of the partner event source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceRequest {
  /**
   * @public
   * <p>The name of the event source to display.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceResponse {
  /**
   * @public
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the event source.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface DescribeReplayRequest {
  /**
   * @public
   * <p>The name of the replay to retrieve.</p>
   */
  ReplayName: string | undefined;
}

/**
 * @public
 * <p>A <code>ReplayDestination</code> object that contains details about a replay.</p>
 */
export interface ReplayDestination {
  /**
   * @public
   * <p>The ARN of the event bus to replay event to. You can replay events only to the event bus
   *       specified to create the archive.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>A list of ARNs for rules to replay events to.</p>
   */
  FilterArns?: string[];
}

/**
 * @public
 */
export interface DescribeReplayResponse {
  /**
   * @public
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * @public
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * @public
   * <p>The description of the replay.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState;

  /**
   * @public
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The ARN of the archive events were replayed from.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>A <code>ReplayDestination</code> object that contains details about the replay.</p>
   */
  Destination?: ReplayDestination;

  /**
   * @public
   * <p>The time stamp of the first event that was last replayed from the archive.</p>
   */
  EventStartTime?: Date;

  /**
   * @public
   * <p>The time stamp for the last event that was replayed from the archive.</p>
   */
  EventEndTime?: Date;

  /**
   * @public
   * <p>The time that the event was last replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the replay stopped.</p>
   */
  ReplayEndTime?: Date;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 * @enum
 */
export const RuleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
} as const;

/**
 * @public
 */
export type RuleState = (typeof RuleState)[keyof typeof RuleState];

/**
 * @public
 */
export interface DescribeRuleResponse {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
   * <p>Specifies whether the rule is enabled or disabled.</p>
   */
  State?: RuleState;

  /**
   * @public
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, this field displays
   *       the principal name of the Amazon Web Services service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * @public
   * <p>The name of the event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The account ID of the user that created the rule. If you use <code>PutRule</code> to put a
   *       rule on an event bus in another account, the other account is the owner of the rule, and the
   *       rule ARN includes the account ID for that account. However, the value for
   *         <code>CreatedBy</code> is the account ID as the account that created the rule in the other
   *       account.</p>
   */
  CreatedBy?: string;
}

/**
 * @public
 */
export interface DisableRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 */
export interface EnableRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 */
export interface ListApiDestinationsRequest {
  /**
   * @public
   * <p>A name prefix to filter results returned. Only API destinations with a name that starts
   *       with the prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The ARN of the connection specified for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of API destinations to include in the response.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListApiDestinationsResponse {
  /**
   * @public
   * <p>An array of <code>ApiDestination</code> objects that include information about an API
   *       destination.</p>
   */
  ApiDestinations?: ApiDestination[];

  /**
   * @public
   * <p>A token you can use in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListArchivesRequest {
  /**
   * @public
   * <p>A name prefix to filter the archives returned. Only archives with name that match the
   *       prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListArchivesResponse {
  /**
   * @public
   * <p>An array of <code>Archive</code> objects that include details about an archive.</p>
   */
  Archives?: Archive[];

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * @public
   * <p>A name prefix to filter results returned. Only connections with a name that starts with
   *       the prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of connections to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Contains information about a connection.</p>
 */
export interface Connection {
  /**
   * @public
   * <p>The ARN of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The name of the connection.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>The reason that the connection is in the connection state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The authorization type specified for the connection.</p>
   *          <note>
   *             <p>OAUTH tokens are refreshed when a 401 or 407 response is returned.</p>
   *          </note>
   */
  AuthorizationType?: ConnectionAuthorizationType;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * @public
   * <p>An array of connections objects that include details about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * @public
   * <p>A token you can use in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * @public
   * <p>A value that will return a subset of the endpoints associated with this account. For example, <code>"NamePrefix": "ABC"</code> will return all endpoints with "ABC" in the name.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The primary Region of the endpoints associated with this account. For example <code>"HomeRegion": "us-east-1"</code>.</p>
   */
  HomeRegion?: string;

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *        Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination
   *        token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results returned by the call.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>A global endpoint used to improve your application's availability by making it regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making applications Regional-fault tolerant with global endpoints and event replication</a> in the Amazon EventBridge User Guide.</p>
 */
export interface Endpoint {
  /**
   * @public
   * <p>The name of the endpoint.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A description for the endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the endpoint.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The routing configuration of the endpoint.</p>
   */
  RoutingConfig?: RoutingConfig;

  /**
   * @public
   * <p>Whether event replication was enabled or disabled for this endpoint. The default state is <code>ENABLED</code> which means you must supply a <code>RoleArn</code>.
   *        If you don't have a <code>RoleArn</code> or you don't want event replication enabled, set the state to <code>DISABLED</code>.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>The event buses being used by the endpoint.</p>
   */
  EventBuses?: EndpointEventBus[];

  /**
   * @public
   * <p>The ARN of the role used by event replication for the endpoint.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is <code>abcde.veo</code>.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>The URL of the endpoint.</p>
   */
  EndpointUrl?: string;

  /**
   * @public
   * <p>The current state of the endpoint.</p>
   */
  State?: EndpointState;

  /**
   * @public
   * <p>The reason the endpoint is in its current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time the endpoint was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The last time the endpoint was modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface ListEndpointsResponse {
  /**
   * @public
   * <p>The endpoints returned by the call.</p>
   */
  Endpoints?: Endpoint[];

  /**
   * @public
   * <p>If <code>nextToken</code> is returned, there are more results available. The value of <code>nextToken</code> is a unique pagination token for each page.
   *        Make the call again using the returned token to retrieve the next page. Keep all other arguments unchanged. Each pagination
   *        token expires after 24 hours. Using an expired pagination token will return an HTTP 400 InvalidToken error.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventBusesRequest {
  /**
   * @public
   * <p>Specifying this limits the results to only those event buses with names that start with
   *       the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>An event bus receives events from a source, uses rules to evaluate them, applies any configured input transformation, and routes them to the appropriate target(s).
 *       Your account's default event bus receives events from Amazon Web Services services. A custom event
 *       bus can receive events from your custom applications and services. A partner event bus
 *       receives events from an event source created by an SaaS partner. These events come from the
 *       partners services or applications.</p>
 */
export interface EventBus {
  /**
   * @public
   * <p>The name of the event bus.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the event bus.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The permissions policy of the event bus, describing which other Amazon Web Services accounts can write
   *       events to this event bus.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface ListEventBusesResponse {
  /**
   * @public
   * <p>This list of event buses.</p>
   */
  EventBuses?: EventBus[];

  /**
   * @public
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEventSourcesRequest {
  /**
   * @public
   * <p>Specifying this limits the results to only those partner event sources with names that
   *       start with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events from the
 *       partner's applications or services.</p>
 */
export interface EventSource {
  /**
   * @public
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * @public
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The date and time that the event source will expire, if the Amazon Web Services account doesn't create a
   *       matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * @public
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState;
}

/**
 * @public
 */
export interface ListEventSourcesResponse {
  /**
   * @public
   * <p>The list of event sources.</p>
   */
  EventSources?: EventSource[];

  /**
   * @public
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsRequest {
  /**
   * @public
   * <p>The name of the partner event source to display account information about.</p>
   */
  EventSourceName: string | undefined;

  /**
   * @public
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *       next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>The Amazon Web Services account that a partner event source has been offered to.</p>
 */
export interface PartnerEventSourceAccount {
  /**
   * @public
   * <p>The Amazon Web Services account ID that the partner event source was offered to.</p>
   */
  Account?: string;

  /**
   * @public
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The date and time that the event source will expire, if the Amazon Web Services account doesn't create a
   *       matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * @public
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsResponse {
  /**
   * @public
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[];

  /**
   * @public
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesRequest {
  /**
   * @public
   * <p>If you specify this, the results are limited to only those partner event sources that
   *       start with the string you specify.</p>
   */
  NamePrefix: string | undefined;

  /**
   * @public
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *       next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>pecifying this limits the number of results returned by this operation. The operation also
   *       returns a NextToken which you can use in a subsequent operation to retrieve the next set of
   *       results.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events from the
 *       partner's applications or services.</p>
 */
export interface PartnerEventSource {
  /**
   * @public
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The name of the partner event source.</p>
   */
  Name?: string;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesResponse {
  /**
   * @public
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSources?: PartnerEventSource[];

  /**
   * @public
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListReplaysRequest {
  /**
   * @public
   * <p>A name prefix to filter the replays returned. Only replays with name that match the prefix
   *       are returned.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The state of the replay.</p>
   */
  State?: ReplayState;

  /**
   * @public
   * <p>The ARN of the archive from which the events are replayed.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of replays to retrieve.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>A <code>Replay</code> object that contains details about a replay.</p>
 */
export interface Replay {
  /**
   * @public
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * @public
   * <p>The ARN of the archive to replay event from.</p>
   */
  EventSourceArn?: string;

  /**
   * @public
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState;

  /**
   * @public
   * <p>A description of why the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>A time stamp for the time to start replaying events. This is determined by the time in the
   *       event as described in <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time">Time</a>.</p>
   */
  EventStartTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time to start replaying events. Any event with a creation time prior
   *       to the <code>EventEndTime</code> specified is replayed.</p>
   */
  EventEndTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the last event was replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the replay completed.</p>
   */
  ReplayEndTime?: Date;
}

/**
 * @public
 */
export interface ListReplaysResponse {
  /**
   * @public
   * <p>An array of <code>Replay</code> objects that contain information about the replay.</p>
   */
  Replays?: Replay[];

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetRequest {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target resource.</p>
   */
  TargetArn: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus to list rules for. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetResponse {
  /**
   * @public
   * <p>The names of the rules that can invoke the given target.</p>
   */
  RuleNames?: string[];

  /**
   * @public
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * @public
   * <p>The prefix matching the rule name.</p>
   */
  NamePrefix?: string;

  /**
   * @public
   * <p>The name or ARN of the event bus to list the rules for. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 */
export interface Rule {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>The state of the rule.</p>
   */
  State?: RuleState;

  /**
   * @public
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html">Creating an Amazon EventBridge rule that runs on a schedule</a>.</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>If the rule was created on behalf of your account by an Amazon Web Services service, this field displays
   *       the principal name of the service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * @public
   * <p>The rules that match the specified criteria.</p>
   */
  Rules?: Rule[];

  /**
   * @public
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * @public
   * <p>The ARN of the EventBridge resource for which you want to view tags.</p>
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * @public
   * <p>The list of tag keys and values associated with the resource you specified</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface ListTargetsByRuleRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * @public
 * <p>The array properties for the submitted job, such as the size of the array. The array size
 *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
 *       job. This parameter is used only if the target is an Batch job.</p>
 */
export interface BatchArrayProperties {
  /**
   * @public
   * <p>The size of the array, if this is an array batch job. Valid values are integers between 2
   *       and 10,000.</p>
   */
  Size?: number;
}

/**
 * @public
 * <p>The retry strategy to use for failed jobs, if the target is an Batch job. If you
 *       specify a retry strategy here, it overrides the retry strategy defined in the job
 *       definition.</p>
 */
export interface BatchRetryStrategy {
  /**
   * @public
   * <p>The number of times to attempt to retry, if the job fails. Valid values are 1–10.</p>
   */
  Attempts?: number;
}

/**
 * @public
 * <p>The custom parameters to be used when the target is an Batch job.</p>
 */
export interface BatchParameters {
  /**
   * @public
   * <p>The ARN or name of the job definition to use if the event target is an Batch job. This
   *       job definition must already exist.</p>
   */
  JobDefinition: string | undefined;

  /**
   * @public
   * <p>The name to use for this execution of the job, if the target is an Batch job.</p>
   */
  JobName: string | undefined;

  /**
   * @public
   * <p>The array properties for the submitted job, such as the size of the array. The array size
   *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
   *       job. This parameter is used only if the target is an Batch job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * @public
   * <p>The retry strategy to use for failed jobs, if the target is an Batch job. The retry
   *       strategy is the number of times to retry the failed job execution. Valid values are 1–10. When
   *       you specify a retry strategy here, it overrides the retry strategy defined in the job
   *       definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;
}

/**
 * @public
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue
 *       configuration.</p>
 */
export interface DeadLetterConfig {
  /**
   * @public
   * <p>The ARN of the SQS queue specified as the target for the dead-letter queue.</p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * @public
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * @public
   * <p>The weight value designates the relative percentage of the total number of tasks launched
   *       that should use the specified capacity provider. The weight value is taken into consideration
   *       after the base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * @public
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *       provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *       If no value is specified, the default value of 0 is used. </p>
   */
  base?: number;
}

/**
 * @public
 * @enum
 */
export const LaunchType = {
  EC2: "EC2",
  EXTERNAL: "EXTERNAL",
  FARGATE: "FARGATE",
} as const;

/**
 * @public
 */
export type LaunchType = (typeof LaunchType)[keyof typeof LaunchType];

/**
 * @public
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a
 *       public IP address is to be used. This structure is relevant only for ECS tasks that use the
 *         <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * @public
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC.
   *       You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * @public
   * <p>Specifies the security groups associated with the task. These security groups must all be
   *       in the same VPC. You can specify as many as five security groups. If you do not specify a
   *       security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * @public
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You
   *       can specify <code>ENABLED</code> only when <code>LaunchType</code> in
   *         <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp;
}

/**
 * @public
 * <p>This structure specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * @public
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *       whether a public IP address is to be used. This structure is relevant only for ECS tasks that
   *       use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

/**
 * @public
 * @enum
 */
export const PlacementConstraintType = {
  DISTINCT_INSTANCE: "distinctInstance",
  MEMBER_OF: "memberOf",
} as const;

/**
 * @public
 */
export type PlacementConstraintType = (typeof PlacementConstraintType)[keyof typeof PlacementConstraintType];

/**
 * @public
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer
 *       Guide.</p>
 */
export interface PlacementConstraint {
  /**
   * @public
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *       group is running on a different container instance. Use memberOf to restrict the selection to
   *       a group of valid candidates. </p>
   */
  type?: PlacementConstraintType;

  /**
   * @public
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *       expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide.
   *     </p>
   */
  expression?: string;
}

/**
 * @public
 * @enum
 */
export const PlacementStrategyType = {
  BINPACK: "binpack",
  RANDOM: "random",
  SPREAD: "spread",
} as const;

/**
 * @public
 */
export type PlacementStrategyType = (typeof PlacementStrategyType)[keyof typeof PlacementStrategyType];

/**
 * @public
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer
 *       Guide.</p>
 */
export interface PlacementStrategy {
  /**
   * @public
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *       available candidates. The spread placement strategy spreads placement across available
   *       candidates evenly based on the field parameter. The binpack strategy places tasks on available
   *       candidates that have the least available amount of the resource that is specified with the
   *       field parameter. For example, if you binpack on memory, a task is placed on the instance with
   *       the least amount of remaining memory (but still enough to run the task). </p>
   */
  type?: PlacementStrategyType;

  /**
   * @public
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *       valid values are instanceId (or host, which has the same effect), or any platform or custom
   *       attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *       For the binpack placement strategy, valid values are cpu and memory. For the random placement
   *       strategy, this field is not used. </p>
   */
  field?: string;
}

/**
 * @public
 * @enum
 */
export const PropagateTags = {
  TASK_DEFINITION: "TASK_DEFINITION",
} as const;

/**
 * @public
 */
export type PropagateTags = (typeof PropagateTags)[keyof typeof PropagateTags];

/**
 * @public
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 */
export interface EcsParameters {
  /**
   * @public
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * @public
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *       1.</p>
   */
  TaskCount?: number;

  /**
   * @public
   * <p>Specifies the launch type on which your task is running. The launch type that you specify
   *       here must match one of the launch type (compatibilities) of the target task. The
   *       <code>FARGATE</code> value is supported only in the Regions where Fargate with Amazon ECS
   *      is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in
   *       the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType;

  /**
   * @public
   * <p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network mode. This
   *       structure specifies the VPC subnets and security groups associated with the task, and whether
   *       a public IP address is to be used. This structure is required if <code>LaunchType</code> is
   *         <code>FARGATE</code> because the <code>awsvpc</code> mode is required for Fargate
   *       tasks.</p>
   *          <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the
   *         <code>awsvpc</code> network mode, the task fails.</p>
   */
  NetworkConfiguration?: NetworkConfiguration;

  /**
   * @public
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *       platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *       information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   *         Versions</a> in the <i>Amazon Elastic Container Service Developer
   *         Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * @public
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * @public
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *       parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *       specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * @public
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer
   *       Guide. </p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * @public
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *       task. If true, this enables execute command functionality on all containers in the
   *       task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * @public
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *       constraints per task (including constraints in the task definition and those specified at
   *       runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * @public
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *       strategy rules per task. </p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * @public
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value
   *       is specified, the tags are not propagated. Tags can only be propagated to the task during task
   *       creation. To add tags to a task after task creation, use the TagResource API action. </p>
   */
  PropagateTags?: PropagateTags;

  /**
   * @public
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * @public
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag
   *       consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 * <p>These are custom parameter to be used when the target is an API Gateway APIs or
 *       EventBridge ApiDestinations. In the latter case, these are merged with any
 *       InvocationParameters specified on the Connection, with any values from the Connection taking
 *       precedence.</p>
 */
export interface HttpParameters {
  /**
   * @public
   * <p>The path parameter values to be used to populate API Gateway API or EventBridge
   *       ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * @public
   * <p>The headers that need to be sent as part of request invoking the API Gateway API or
   *       EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * @public
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *       API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * @public
 * <p>Contains the parameters needed for you to provide custom input to a target based on one or
 *       more pieces of data extracted from the event.</p>
 */
export interface InputTransformer {
  /**
   * @public
   * <p>Map of JSON paths to be extracted from the event. You can then insert these in the
   *       template in <code>InputTemplate</code> to produce the output you want to be sent to the
   *       target.</p>
   *          <p>
   *             <code>InputPathsMap</code> is an array key-value pairs, where each value is a valid JSON
   *       path. You can have as many as 100 key-value pairs. You must use JSON dot notation, not bracket
   *       notation.</p>
   *          <p>The keys cannot start with "Amazon Web Services." </p>
   */
  InputPathsMap?: Record<string, string>;

  /**
   * @public
   * <p>Input template where you specify placeholders that will be filled with the values of the
   *       keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each
   *         <code>InputPathsMaps</code> value in brackets: <<i>value</i>>
   *     </p>
   *          <p>If <code>InputTemplate</code> is a JSON object (surrounded by curly braces), the following
   *       restrictions apply:</p>
   *          <ul>
   *             <li>
   *                <p>The placeholder cannot be used as an object key.</p>
   *             </li>
   *          </ul>
   *          <p>The following example shows the syntax for using <code>InputPathsMap</code> and
   *         <code>InputTemplate</code>.</p>
   *          <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>\{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": \{"instance": "$.detail.instance","status":
   *         "$.detail.status"\},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": "<instance> is in state <status>"</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   *          <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape
   *       each quote marks with a slash, as in the following example:</p>
   *          <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>\{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": \{"instance": "$.detail.instance","status":
   *         "$.detail.status"\},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": "<instance> is in state \"<status>\""</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   *          <p>The <code>InputTemplate</code> can also be valid JSON with varibles in quotes or out, as
   *       in the following example:</p>
   *          <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>\{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": \{"instance": "$.detail.instance","status":
   *         "$.detail.status"\},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": '\{"myInstance": <instance>,"myStatus": "<instance> is
   *         in state \"<status>\""\}'</code>
   *          </p>
   *          <p>
   *             <code>\}</code>
   *          </p>
   */
  InputTemplate: string | undefined;
}

/**
 * @public
 * <p>This object enables you to specify a JSON path to extract from the event and use as the
 *       partition key for the Amazon Kinesis data stream, so that you can control the shard to which
 *       the event goes. If you do not include this parameter, the default is to use the
 *         <code>eventId</code> as the partition key.</p>
 */
export interface KinesisParameters {
  /**
   * @public
   * <p>The JSON path to be extracted from the event and used as the partition key. For more
   *       information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key
   *         Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKeyPath: string | undefined;
}

/**
 * @public
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster or Redshift Serverless workgroup to invoke the
 *       Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>
 */
export interface RedshiftDataParameters {
  /**
   * @public
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *       authenticating using Amazon Web Services Secrets Manager.</p>
   */
  SecretManagerArn?: string;

  /**
   * @public
   * <p>The name of the database. Required when authenticating using temporary credentials.</p>
   */
  Database: string | undefined;

  /**
   * @public
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   *          <p>Do not provide this parameter when connecting to a Redshift Serverless workgroup.</p>
   */
  DbUser?: string;

  /**
   * @public
   * <p>The SQL statement text to run.</p>
   */
  Sql?: string;

  /**
   * @public
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *       identify the query.</p>
   */
  StatementName?: string;

  /**
   * @public
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *       runs.</p>
   */
  WithEvent?: boolean;

  /**
   * @public
   * A list of SQLs.
   */
  Sqls?: string[];
}

/**
 * @public
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy
 *       settings.</p>
 */
export interface RetryPolicy {
  /**
   * @public
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts
   *       continue until either the maximum number of attempts is made or until the duration of the
   *         <code>MaximumEventAgeInSeconds</code> is met.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * @public
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   */
  MaximumEventAgeInSeconds?: number;
}

/**
 * @public
 * <p>Information about the EC2 instances that are to be sent the command, specified as
 *       key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this
 *       key may specify multiple values.</p>
 */
export interface RunCommandTarget {
  /**
   * @public
   * <p>Can be either <code>tag:</code>
   *             <i>tag-key</i> or
   *       <code>InstanceIds</code>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>If <code>Key</code> is <code>tag:</code>
   *             <i>tag-key</i>, <code>Values</code>
   *       is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code>
   *       is a list of Amazon EC2 instance IDs.</p>
   */
  Values: string[] | undefined;
}

/**
 * @public
 * <p>This parameter contains the criteria (either InstanceIds or a tag) used to specify which
 *       EC2 instances are to be sent the command. </p>
 */
export interface RunCommandParameters {
  /**
   * @public
   * <p>Currently, we support including only one RunCommandTarget block, which specifies either an
   *       array of InstanceIds or a tag.</p>
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

/**
 * @public
 * <p>Name/Value pair of a parameter to start execution of a SageMaker Model Building
 *       Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * @public
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 * <p>These are custom parameters to use when the target is a SageMaker Model Building Pipeline
 *       that starts based on EventBridge events.</p>
 */
export interface SageMakerPipelineParameters {
  /**
   * @public
   * <p>List of Parameter names and values for SageMaker Model Building Pipeline execution.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * @public
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO
 *       queue.</p>
 */
export interface SqsParameters {
  /**
   * @public
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

/**
 * @public
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of
 *       services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p>
 *          <p>If you are setting the event bus of another account as the target, and that account
 *       granted permission to your account through an organization instead of directly by the account
 *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *           Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 */
export interface Target {
  /**
   * @public
   * <p>The ID of the target within the specified rule. Use this ID to reference the target when updating the rule. We recommend using a memorable and unique string.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is
   *       triggered. If one rule triggers multiple targets, you can use a different IAM role for each
   *       target.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *       passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *         Interchange Format</a>.</p>
   */
  Input?: string;

  /**
   * @public
   * <p>The value of the JSONPath that is used for extracting part of the matched event when
   *       passing it to the target. You may use JSON dot notation or bracket notation. For more
   *       information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   */
  InputPath?: string;

  /**
   * @public
   * <p>Settings to enable you to provide custom input to a target based on certain event data.
   *       You can extract one or more key-value pairs from the event and then use that data to send
   *       customized input to the target.</p>
   */
  InputTransformer?: InputTransformer;

  /**
   * @public
   * <p>The custom parameter you can use to control the shard assignment, when the target is a
   *       Kinesis data stream. If you do not include this parameter, the default is to use the
   *         <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * @public
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   */
  RunCommandParameters?: RunCommandParameters;

  /**
   * @public
   * <p>Contains the Amazon ECS task definition and task count to be used, if the event target is
   *       an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task
   *         Definitions </a> in the <i>Amazon EC2 Container Service Developer
   *         Guide</i>.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * @public
   * <p>If the event target is an Batch job, this contains the job definition, job name, and
   *       other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>Batch User
   *         Guide</i>.</p>
   */
  BatchParameters?: BatchParameters;

  /**
   * @public
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p>
   *          <p>If you specify an SQS FIFO queue as a target, the queue must have content-based
   *       deduplication enabled.</p>
   */
  SqsParameters?: SqsParameters;

  /**
   * @public
   * <p>Contains the HTTP parameters to use when the target is a API Gateway endpoint or
   *       EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway API or EventBridge ApiDestination as a target, you can
   *       use this parameter to specify headers, path parameters, and query string keys/values as part
   *       of your target invoking request. If you're using ApiDestinations, the corresponding Connection
   *       can also have these values configured. In case of any conflicting keys, values from the
   *       Connection take precedence.</p>
   */
  HttpParameters?: HttpParameters;

  /**
   * @public
   * <p>Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift
   *       cluster.</p>
   *          <p>If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to
   *       invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>
   */
  RedshiftDataParameters?: RedshiftDataParameters;

  /**
   * @public
   * <p>Contains the SageMaker Model Building Pipeline parameters to start execution of a
   *       SageMaker Model Building Pipeline.</p>
   *          <p>If you specify a SageMaker Model Building Pipeline as a target, you can use this to
   *       specify parameters to start a pipeline execution based on EventBridge events.</p>
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters;

  /**
   * @public
   * <p>The <code>DeadLetterConfig</code> that defines the target queue to send dead-letter queue
   *       events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * @public
   * <p>The <code>RetryPolicy</code> object that contains the retry policy configuration to use
   *       for the dead-letter queue.</p>
   */
  RetryPolicy?: RetryPolicy;
}

/**
 * @public
 */
export interface ListTargetsByRuleResponse {
  /**
   * @public
   * <p>The targets assigned to the rule.</p>
   */
  Targets?: Target[];

  /**
   * @public
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

/**
 * @public
 * <p>Represents an event to be submitted.</p>
 */
export interface PutEventsRequestEntry {
  /**
   * @public
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   */
  Time?: Date;

  /**
   * @public
   * <p>The source of the event.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *       concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>Free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * @public
   * <p>A valid JSON object. There is no other schema imposed. The JSON object may contain fields
   *       and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * @public
   * <p>The name or ARN of the event bus to receive the event. Only the rules that are associated
   *       with this event bus are used to match the event. If you omit this, the default event bus is
   *       used.</p>
   *          <note>
   *             <p>If you're using a global endpoint with a custom bus, you must enter the name, not the ARN, of the event bus in either
   *       the primary or secondary Region here and the corresponding event bus in the
   *       other Region will be determined based on the endpoint referenced by the <code>EndpointId</code>.</p>
   *          </note>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>An X-Ray trace header, which is an http header (X-Amzn-Trace-Id) that contains the
   *       trace-id associated with the event.</p>
   *          <p>To learn more about X-Ray trace headers, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader">Tracing header</a> in the X-Ray Developer Guide.</p>
   */
  TraceHeader?: string;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * @public
   * <p>The entry that defines an event in your system. You can specify several parameters for the
   *       entry such as the source and type of the event, resources associated with the event, and so
   *       on.</p>
   */
  Entries: PutEventsRequestEntry[] | undefined;

  /**
   * @public
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is <code>abcde.veo</code>.</p>
   *          <important>
   *             <p>When using Java, you must include <code>auth-crt</code> on the class path.</p>
   *          </important>
   */
  EndpointId?: string;
}

/**
 * @public
 * <p>Represents an event that failed to be submitted. For information about the errors that are common to all actions, see
 *       <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common Errors</a>.</p>
 */
export interface PutEventsResultEntry {
  /**
   * @public
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * @public
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * @public
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * @public
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was
   *       successful, the entry has the event ID in it. Otherwise, you can use the error code and error
   *       message to identify the problem with the entry.</p>
   *          <p>For each record, the index of the response element is the same as the index in the request array.</p>
   */
  Entries?: PutEventsResultEntry[];
}

/**
 * @public
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * @public
   * <p>The date and time of the event.</p>
   */
  Time?: Date;

  /**
   * @public
   * <p>The event source that is generating the entry.</p>
   */
  Source?: string;

  /**
   * @public
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *       concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * @public
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * @public
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain fields
   *       and nested subobjects.</p>
   */
  Detail?: string;
}

/**
 * @public
 */
export interface PutPartnerEventsRequest {
  /**
   * @public
   * <p>The list of events to write to the event bus.</p>
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

/**
 * @public
 * <p>Represents an event that a partner tried to generate, but failed.</p>
 */
export interface PutPartnerEventsResultEntry {
  /**
   * @public
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * @public
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface PutPartnerEventsResponse {
  /**
   * @public
   * <p>The number of events from this operation that could not be written to the partner event
   *       bus.</p>
   */
  FailedEntryCount?: number;

  /**
   * @public
   * <p>The list of events from this operation that were successfully written to the partner event
   *       bus.</p>
   */
  Entries?: PutPartnerEventsResultEntry[];
}

/**
 * @public
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 */
export class PolicyLengthExceededException extends __BaseException {
  readonly name: "PolicyLengthExceededException" = "PolicyLengthExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<PolicyLengthExceededException, __BaseException>) {
    super({
      name: "PolicyLengthExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, PolicyLengthExceededException.prototype);
  }
}

/**
 * @public
 * <p>A JSON string which you can use to limit the event bus permissions you are granting to
 *       only accounts that fulfill the condition. Currently, the only supported condition is
 *       membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>,
 *         <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the
 *       ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p>
 *          <p>
 *             <code>'\{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value":
 *         "o-1234567890"\}'</code>
 *          </p>
 */
export interface Condition {
  /**
   * @public
   * <p>Specifies the type of condition. Currently the only supported value is
   *         <code>StringEquals</code>.</p>
   */
  Type: string | undefined;

  /**
   * @public
   * <p>Specifies the key for the condition. Currently the only supported key is
   *         <code>aws:PrincipalOrgID</code>.</p>
   */
  Key: string | undefined;

  /**
   * @public
   * <p>Specifies the value for the key. Currently, this must be the ID of the
   *       organization.</p>
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionRequest {
  /**
   * @public
   * <p>The name of the event bus associated with the rule. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The action that you are enabling the other account to perform.</p>
   */
  Action?: string;

  /**
   * @public
   * <p>The 12-digit Amazon Web Services account ID that you are permitting to put events to your default event
   *       bus. Specify "*" to permit any account to put events to your default event bus.</p>
   *          <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules that
   *       may match undesirable events. To create more secure rules, make sure that the event pattern
   *       for each rule contains an <code>account</code> field with a specific account ID from which to
   *       receive events. Rules with an account field do not match any events sent from other
   *       accounts.</p>
   */
  Principal?: string;

  /**
   * @public
   * <p>An identifier string for the external account that you are granting permissions to. If you
   *       later want to revoke the permission for this external account, specify this
   *       <code>StatementId</code> when you run <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html">RemovePermission</a>.</p>
   *          <note>
   *             <p>Each <code>StatementId</code> must be unique.</p>
   *          </note>
   */
  StatementId?: string;

  /**
   * @public
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain
   *       condition, such as being a member of a certain Amazon Web Services organization. For more information about
   *       Amazon Web Services Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is Amazon Web Services
   *         Organizations</a> in the <i>Amazon Web Services Organizations User Guide</i>.</p>
   *          <p>If you specify <code>Condition</code> with an Amazon Web Services organization ID, and specify "*" as the
   *       value for <code>Principal</code>, you grant permission to all the accounts in the named
   *       organization.</p>
   *          <p>The <code>Condition</code> is a JSON string which must contain <code>Type</code>,
   *         <code>Key</code>, and <code>Value</code> fields.</p>
   */
  Condition?: Condition;

  /**
   * @public
   * <p>A JSON string that describes the permission policy statement. You can include a
   *         <code>Policy</code> parameter in the request instead of using the <code>StatementId</code>,
   *         <code>Action</code>, <code>Principal</code>, or <code>Condition</code> parameters.</p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface PutRuleRequest {
  /**
   * @public
   * <p>The name of the rule that you are creating or updating.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * @public
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event
   *         patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State?: RuleState;

  /**
   * @public
   * <p>A description of the rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name or ARN of the event bus to associate with this rule. If you omit this, the
   *       default event bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 */
export interface PutRuleResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

/**
 * @public
 */
export interface PutTargetsRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The targets to update or add to the rule.</p>
   */
  Targets: Target[] | undefined;
}

/**
 * @public
 * <p>Represents a target that failed to be added to a rule.</p>
 */
export interface PutTargetsResultEntry {
  /**
   * @public
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * @public
   * <p>The error code that indicates why the target addition failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that explains why the target addition failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface PutTargetsResponse {
  /**
   * @public
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * @public
   * <p>The failed target entries.</p>
   */
  FailedEntries?: PutTargetsResultEntry[];
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * @public
   * <p>The statement ID corresponding to the account that is no longer allowed to put events to
   *       the default event bus.</p>
   */
  StatementId?: string;

  /**
   * @public
   * <p>Specifies whether to remove all permissions.</p>
   */
  RemoveAllPermissions?: boolean;

  /**
   * @public
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;
}

/**
 * @public
 */
export interface RemoveTargetsRequest {
  /**
   * @public
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * @public
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * @public
   * <p>The IDs of the targets to remove from the rule.</p>
   */
  Ids: string[] | undefined;

  /**
   * @public
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify
   *         <code>Force</code> as <code>True</code> to remove targets. This parameter is ignored for
   *       rules that are not managed rules. You can check whether a rule is a managed rule by using
   *         <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code>
   *       field of the response.</p>
   */
  Force?: boolean;
}

/**
 * @public
 * <p>Represents a target that failed to be removed from a rule.</p>
 */
export interface RemoveTargetsResultEntry {
  /**
   * @public
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * @public
   * <p>The error code that indicates why the target removal failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The error message that explains why the target removal failed.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 */
export interface RemoveTargetsResponse {
  /**
   * @public
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * @public
   * <p>The failed target entries.</p>
   */
  FailedEntries?: RemoveTargetsResultEntry[];
}

/**
 * @public
 */
export interface StartReplayRequest {
  /**
   * @public
   * <p>The name of the replay to start.</p>
   */
  ReplayName: string | undefined;

  /**
   * @public
   * <p>A description for the replay to start.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the archive to replay events from.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * @public
   * <p>A time stamp for the time to start replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventStartTime: Date | undefined;

  /**
   * @public
   * <p>A time stamp for the time to stop replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventEndTime: Date | undefined;

  /**
   * @public
   * <p>A <code>ReplayDestination</code> object that includes details about the destination for
   *       the replay.</p>
   */
  Destination: ReplayDestination | undefined;
}

/**
 * @public
 */
export interface StartReplayResponse {
  /**
   * @public
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * @public
   * <p>The state of the replay.</p>
   */
  State?: ReplayState;

  /**
   * @public
   * <p>The reason that the replay is in the state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time at which the replay started.</p>
   */
  ReplayStartTime?: Date;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * @public
   * <p>The ARN of the EventBridge resource that you're adding tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * @public
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern: string | undefined;

  /**
   * @public
   * <p>The event, in JSON format, to test against the event pattern. The JSON must follow the
   *       format specified in <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html">Amazon Web Services Events</a>, and the following
   *       fields are mandatory:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>id</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>account</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>source</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>time</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>region</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>resources</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>detail-type</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Event: string | undefined;
}

/**
 * @public
 */
export interface TestEventPatternResponse {
  /**
   * @public
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * @public
   * <p>The ARN of the EventBridge resource from which you are removing tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * @public
   * <p>The list of tag keys to remove from the resource.</p>
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
   * @public
   * <p>The name of the API destination to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The name of the API destination to update.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The ARN of the connection to use for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The URL to the endpoint to use for the API destination.</p>
   */
  InvocationEndpoint?: string;

  /**
   * @public
   * <p>The method to use for the API destination.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod;

  /**
   * @public
   * <p>The maximum number of invocations per second to send to the API destination.</p>
   */
  InvocationRateLimitPerSecond?: number;
}

/**
 * @public
 */
export interface UpdateApiDestinationResponse {
  /**
   * @public
   * <p>The ARN of the API destination that was updated.</p>
   */
  ApiDestinationArn?: string;

  /**
   * @public
   * <p>The state of the API destination that was updated.</p>
   */
  ApiDestinationState?: ApiDestinationState;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface UpdateArchiveRequest {
  /**
   * @public
   * <p>The name of the archive to update.</p>
   */
  ArchiveName: string | undefined;

  /**
   * @public
   * <p>The description for the archive.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * @public
   * <p>The number of days to retain events in the archive.</p>
   */
  RetentionDays?: number;
}

/**
 * @public
 */
export interface UpdateArchiveResponse {
  /**
   * @public
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * @public
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState;

  /**
   * @public
   * <p>The reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * @public
   * <p>The time at which the archive was updated.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 * <p>Contains the API key authorization parameters to use to update the connection.</p>
 */
export interface UpdateConnectionApiKeyAuthRequestParameters {
  /**
   * @public
   * <p>The name of the API key to use for authorization.</p>
   */
  ApiKeyName?: string;

  /**
   * @public
   * <p>The value associated with teh API key to use for authorization.</p>
   */
  ApiKeyValue?: string;
}

/**
 * @public
 * <p>Contains the Basic authorization parameters for the connection.</p>
 */
export interface UpdateConnectionBasicAuthRequestParameters {
  /**
   * @public
   * <p>The user name to use for Basic authorization.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password associated with the user name to use for Basic authorization.</p>
   */
  Password?: string;
}

/**
 * @public
 * <p>Contains the OAuth authorization parameters to use for the connection.</p>
 */
export interface UpdateConnectionOAuthClientRequestParameters {
  /**
   * @public
   * <p>The client ID to use for OAuth authorization.</p>
   */
  ClientID?: string;

  /**
   * @public
   * <p>The client secret assciated with the client ID to use for OAuth authorization.</p>
   */
  ClientSecret?: string;
}

/**
 * @public
 * <p>Contains the OAuth request parameters to use for the connection.</p>
 */
export interface UpdateConnectionOAuthRequestParameters {
  /**
   * @public
   * <p>A <code>UpdateConnectionOAuthClientRequestParameters</code> object that contains the
   *       client parameters to use for the connection when OAuth is specified as the authorization
   *       type.</p>
   */
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters;

  /**
   * @public
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * @public
   * <p>The method used to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ConnectionOAuthHttpMethod;

  /**
   * @public
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 * <p>Contains the additional parameters to use for the connection.</p>
 */
export interface UpdateConnectionAuthRequestParameters {
  /**
   * @public
   * <p>A <code>UpdateConnectionBasicAuthRequestParameters</code> object that contains the
   *       authorization parameters for Basic authorization.</p>
   */
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;

  /**
   * @public
   * <p>A <code>UpdateConnectionOAuthRequestParameters</code> object that contains the
   *       authorization parameters for OAuth authorization.</p>
   */
  OAuthParameters?: UpdateConnectionOAuthRequestParameters;

  /**
   * @public
   * <p>A <code>UpdateConnectionApiKeyAuthRequestParameters</code> object that contains the
   *       authorization parameters for API key authorization.</p>
   */
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;

  /**
   * @public
   * <p>A <code>ConnectionHttpParameters</code> object that contains the additional parameters to
   *       use for the connection.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * @public
   * <p>The name of the connection to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the connection.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of authorization to use for the connection.</p>
   */
  AuthorizationType?: ConnectionAuthorizationType;

  /**
   * @public
   * <p>The authorization parameters to use for the connection.</p>
   */
  AuthParameters?: UpdateConnectionAuthRequestParameters;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * @public
   * <p>The ARN of the connection that was updated.</p>
   */
  ConnectionArn?: string;

  /**
   * @public
   * <p>The state of the connection that was updated.</p>
   */
  ConnectionState?: ConnectionState;

  /**
   * @public
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * @public
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @public
 */
export interface UpdateEndpointRequest {
  /**
   * @public
   * <p>The name of the endpoint you want to update.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A description for the endpoint.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Configure the routing policy, including the health check and secondary Region.</p>
   */
  RoutingConfig?: RoutingConfig;

  /**
   * @public
   * <p>Whether event replication was enabled or disabled by this request.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>Define event buses used for replication.</p>
   */
  EventBuses?: EndpointEventBus[];

  /**
   * @public
   * <p>The ARN of the role used by event replication for this request.</p>
   */
  RoleArn?: string;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * @public
   * <p>The name of the endpoint you updated in this request.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ARN of the endpoint you updated in this request.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The routing configuration you updated in this request.</p>
   */
  RoutingConfig?: RoutingConfig;

  /**
   * @public
   * <p>Whether event replication was enabled or disabled for the endpoint you updated in this request.</p>
   */
  ReplicationConfig?: ReplicationConfig;

  /**
   * @public
   * <p>The event buses used for replication for the endpoint you updated in this request.</p>
   */
  EventBuses?: EndpointEventBus[];

  /**
   * @public
   * <p>The ARN of the role used by event replication for the endpoint you updated in this request.</p>
   */
  RoleArn?: string;

  /**
   * @public
   * <p>The ID of the endpoint you updated in this request.</p>
   */
  EndpointId?: string;

  /**
   * @public
   * <p>The URL of the endpoint you updated in this request.</p>
   */
  EndpointUrl?: string;

  /**
   * @public
   * <p>The state of the endpoint you updated in this request.</p>
   */
  State?: EndpointState;
}

/**
 * @internal
 */
export const CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionApiKeyAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.ApiKeyValue && { ApiKeyValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateConnectionBasicAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionBasicAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionBodyParameterFilterSensitiveLog = (obj: ConnectionBodyParameter): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionHeaderParameterFilterSensitiveLog = (obj: ConnectionHeaderParameter): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionQueryStringParameterFilterSensitiveLog = (obj: ConnectionQueryStringParameter): any => ({
  ...obj,
  ...(obj.Value && { Value: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ConnectionHttpParametersFilterSensitiveLog = (obj: ConnectionHttpParameters): any => ({
  ...obj,
  ...(obj.HeaderParameters && {
    HeaderParameters: obj.HeaderParameters.map((item) => ConnectionHeaderParameterFilterSensitiveLog(item)),
  }),
  ...(obj.QueryStringParameters && {
    QueryStringParameters: obj.QueryStringParameters.map((item) =>
      ConnectionQueryStringParameterFilterSensitiveLog(item)
    ),
  }),
  ...(obj.BodyParameters && {
    BodyParameters: obj.BodyParameters.map((item) => ConnectionBodyParameterFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const CreateConnectionOAuthClientRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionOAuthClientRequestParameters
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateConnectionOAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionOAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.ClientParameters && {
    ClientParameters: CreateConnectionOAuthClientRequestParametersFilterSensitiveLog(obj.ClientParameters),
  }),
  ...(obj.OAuthHttpParameters && {
    OAuthHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.OAuthHttpParameters),
  }),
});

/**
 * @internal
 */
export const CreateConnectionAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.BasicAuthParameters && {
    BasicAuthParameters: CreateConnectionBasicAuthRequestParametersFilterSensitiveLog(obj.BasicAuthParameters),
  }),
  ...(obj.OAuthParameters && {
    OAuthParameters: CreateConnectionOAuthRequestParametersFilterSensitiveLog(obj.OAuthParameters),
  }),
  ...(obj.ApiKeyAuthParameters && {
    ApiKeyAuthParameters: CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog(obj.ApiKeyAuthParameters),
  }),
  ...(obj.InvocationHttpParameters && {
    InvocationHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.InvocationHttpParameters),
  }),
});

/**
 * @internal
 */
export const CreateConnectionRequestFilterSensitiveLog = (obj: CreateConnectionRequest): any => ({
  ...obj,
  ...(obj.AuthParameters && {
    AuthParameters: CreateConnectionAuthRequestParametersFilterSensitiveLog(obj.AuthParameters),
  }),
});

/**
 * @internal
 */
export const ConnectionOAuthResponseParametersFilterSensitiveLog = (obj: ConnectionOAuthResponseParameters): any => ({
  ...obj,
  ...(obj.OAuthHttpParameters && {
    OAuthHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.OAuthHttpParameters),
  }),
});

/**
 * @internal
 */
export const ConnectionAuthResponseParametersFilterSensitiveLog = (obj: ConnectionAuthResponseParameters): any => ({
  ...obj,
  ...(obj.OAuthParameters && {
    OAuthParameters: ConnectionOAuthResponseParametersFilterSensitiveLog(obj.OAuthParameters),
  }),
  ...(obj.InvocationHttpParameters && {
    InvocationHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.InvocationHttpParameters),
  }),
});

/**
 * @internal
 */
export const DescribeConnectionResponseFilterSensitiveLog = (obj: DescribeConnectionResponse): any => ({
  ...obj,
  ...(obj.AuthParameters && { AuthParameters: ConnectionAuthResponseParametersFilterSensitiveLog(obj.AuthParameters) }),
});

/**
 * @internal
 */
export const RedshiftDataParametersFilterSensitiveLog = (obj: RedshiftDataParameters): any => ({
  ...obj,
  ...(obj.Sql && { Sql: SENSITIVE_STRING }),
  ...(obj.Sqls && { Sqls: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
  ...(obj.RedshiftDataParameters && {
    RedshiftDataParameters: RedshiftDataParametersFilterSensitiveLog(obj.RedshiftDataParameters),
  }),
});

/**
 * @internal
 */
export const ListTargetsByRuleResponseFilterSensitiveLog = (obj: ListTargetsByRuleResponse): any => ({
  ...obj,
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const PutTargetsRequestFilterSensitiveLog = (obj: PutTargetsRequest): any => ({
  ...obj,
  ...(obj.Targets && { Targets: obj.Targets.map((item) => TargetFilterSensitiveLog(item)) }),
});

/**
 * @internal
 */
export const UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionApiKeyAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.ApiKeyValue && { ApiKeyValue: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionBasicAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionOAuthClientRequestParameters
): any => ({
  ...obj,
  ...(obj.ClientSecret && { ClientSecret: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateConnectionOAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionOAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.ClientParameters && {
    ClientParameters: UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog(obj.ClientParameters),
  }),
  ...(obj.OAuthHttpParameters && {
    OAuthHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.OAuthHttpParameters),
  }),
});

/**
 * @internal
 */
export const UpdateConnectionAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionAuthRequestParameters
): any => ({
  ...obj,
  ...(obj.BasicAuthParameters && {
    BasicAuthParameters: UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog(obj.BasicAuthParameters),
  }),
  ...(obj.OAuthParameters && {
    OAuthParameters: UpdateConnectionOAuthRequestParametersFilterSensitiveLog(obj.OAuthParameters),
  }),
  ...(obj.ApiKeyAuthParameters && {
    ApiKeyAuthParameters: UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog(obj.ApiKeyAuthParameters),
  }),
  ...(obj.InvocationHttpParameters && {
    InvocationHttpParameters: ConnectionHttpParametersFilterSensitiveLog(obj.InvocationHttpParameters),
  }),
});

/**
 * @internal
 */
export const UpdateConnectionRequestFilterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
  ...obj,
  ...(obj.AuthParameters && {
    AuthParameters: UpdateConnectionAuthRequestParametersFilterSensitiveLog(obj.AuthParameters),
  }),
});
