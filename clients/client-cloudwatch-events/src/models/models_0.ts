// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { CloudWatchEventsServiceException as __BaseException } from "./CloudWatchEventsServiceException";

export interface ActivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to activate.</p>
   */
  Name: string | undefined;
}

/**
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

export enum ApiDestinationState {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export enum ApiDestinationHttpMethod {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

/**
 * <p>Contains details about an API destination.</p>
 */
export interface ApiDestination {
  /**
   * <p>The ARN of the API destination.</p>
   */
  ApiDestinationArn?: string;

  /**
   * <p>The name of the API destination.</p>
   */
  Name?: string;

  /**
   * <p>The state of the API destination.</p>
   */
  ApiDestinationState?: ApiDestinationState | string;

  /**
   * <p>The ARN of the connection specified for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The URL to the endpoint for the API destination.</p>
   */
  InvocationEndpoint?: string;

  /**
   * <p>The method to use to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod | string;

  /**
   * <p>The maximum number of invocations per second to send to the HTTP endpoint.</p>
   */
  InvocationRateLimitPerSecond?: number;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export enum ArchiveState {
  CREATE_FAILED = "CREATE_FAILED",
  CREATING = "CREATING",
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
  UPDATE_FAILED = "UPDATE_FAILED",
  UPDATING = "UPDATING",
}

/**
 * <p>An <code>Archive</code> object that contains details about an archive.</p>
 */
export interface Archive {
  /**
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * <p>The ARN of the event bus associated with the archive. Only events from this event bus are
   *       sent to the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The current state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>A description for the reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The number of days to retain events in the archive before they are deleted.</p>
   */
  RetentionDays?: number;

  /**
   * <p>The size of the archive, in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * <p>The time stamp for the time that the archive was created.</p>
   */
  CreationTime?: Date;
}

export enum AssignPublicIp {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface CancelReplayRequest {
  /**
   * <p>The name of the replay to cancel.</p>
   */
  ReplayName: string | undefined;
}

export enum ReplayState {
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
}

export interface CancelReplayResponse {
  /**
   * <p>The ARN of the replay to cancel.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;
}

/**
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

export interface CreateApiDestinationRequest {
  /**
   * <p>The name for the API destination to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the API destination to create.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the connection to use for the API destination. The destination endpoint must
   *       support the authorization type specified for the connection.</p>
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The URL to the HTTP invocation endpoint for the API destination.</p>
   */
  InvocationEndpoint: string | undefined;

  /**
   * <p>The method to use for the request to the HTTP invocation endpoint.</p>
   */
  HttpMethod: ApiDestinationHttpMethod | string | undefined;

  /**
   * <p>The maximum number of requests per second to send to the HTTP invocation endpoint.</p>
   */
  InvocationRateLimitPerSecond?: number;
}

export interface CreateApiDestinationResponse {
  /**
   * <p>The ARN of the API destination that was created by the request.</p>
   */
  ApiDestinationArn?: string;

  /**
   * <p>The state of the API destination that was created by the request.</p>
   */
  ApiDestinationState?: ApiDestinationState | string;

  /**
   * <p>A time stamp indicating the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp indicating the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
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

export interface CreateArchiveRequest {
  /**
   * <p>The name for the archive to create.</p>
   */
  ArchiveName: string | undefined;

  /**
   * <p>The ARN of the event bus that sends events to the archive.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A description for the archive.</p>
   */
  Description?: string;

  /**
   * <p>An event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The number of days to retain events for. Default value is 0. If set to 0, events are
   *       retained indefinitely</p>
   */
  RetentionDays?: number;
}

export interface CreateArchiveResponse {
  /**
   * <p>The ARN of the archive that was created.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The state of the archive that was created.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

/**
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

export enum ConnectionAuthorizationType {
  API_KEY = "API_KEY",
  BASIC = "BASIC",
  OAUTH_CLIENT_CREDENTIALS = "OAUTH_CLIENT_CREDENTIALS",
}

/**
 * <p>Contains the API key authorization parameters for the connection.</p>
 */
export interface CreateConnectionApiKeyAuthRequestParameters {
  /**
   * <p>The name of the API key to use for authorization.</p>
   */
  ApiKeyName: string | undefined;

  /**
   * <p>The value for the API key to use for authorization.</p>
   */
  ApiKeyValue: string | undefined;
}

/**
 * <p>Contains the Basic authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionBasicAuthRequestParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   */
  Username: string | undefined;

  /**
   * <p>The password associated with the user name to use for Basic authorization.</p>
   */
  Password: string | undefined;
}

/**
 * <p>Additional parameter included in the body. You can include up to 100 additional body
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 */
export interface ConnectionBodyParameter {
  /**
   * <p>The key for the parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value associated with the key.</p>
   */
  Value?: string;

  /**
   * <p>Specified whether the value is secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * <p>Additional parameter included in the header. You can include up to 100 additional header
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 */
export interface ConnectionHeaderParameter {
  /**
   * <p>The key for the parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value associated with the key.</p>
   */
  Value?: string;

  /**
   * <p>Specified whether the value is a secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * <p>Additional query string parameter for the connection. You can include up to 100 additional
 *       query string parameters per request. Each additional parameter counts towards the event
 *       payload size, which cannot exceed 64 KB.</p>
 */
export interface ConnectionQueryStringParameter {
  /**
   * <p>The key for a query string parameter.</p>
   */
  Key?: string;

  /**
   * <p>The value associated with the key for the query string parameter.</p>
   */
  Value?: string;

  /**
   * <p>Specifies whether the value is secret.</p>
   */
  IsValueSecret?: boolean;
}

/**
 * <p>Contains additional parameters for the connection.</p>
 */
export interface ConnectionHttpParameters {
  /**
   * <p>Contains additional header parameters for the connection.</p>
   */
  HeaderParameters?: ConnectionHeaderParameter[];

  /**
   * <p>Contains additional query string parameters for the connection.</p>
   */
  QueryStringParameters?: ConnectionQueryStringParameter[];

  /**
   * <p>Contains additional body string parameters for the connection.</p>
   */
  BodyParameters?: ConnectionBodyParameter[];
}

/**
 * <p>Contains the Basic authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionOAuthClientRequestParameters {
  /**
   * <p>The client ID to use for OAuth authorization for the connection.</p>
   */
  ClientID: string | undefined;

  /**
   * <p>The client secret associated with the client ID to use for OAuth authorization for the
   *       connection.</p>
   */
  ClientSecret: string | undefined;
}

export enum ConnectionOAuthHttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
}

/**
 * <p>Contains the OAuth authorization parameters to use for the connection.</p>
 */
export interface CreateConnectionOAuthRequestParameters {
  /**
   * <p>A <code>CreateConnectionOAuthClientRequestParameters</code> object that contains the
   *       client parameters for OAuth authorization.</p>
   */
  ClientParameters: CreateConnectionOAuthClientRequestParameters | undefined;

  /**
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The method to use for the authorization request.</p>
   */
  HttpMethod: ConnectionOAuthHttpMethod | string | undefined;

  /**
   * <p>A <code>ConnectionHttpParameters</code> object that contains details about the additional
   *       parameters to use for the connection.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * <p>Contains the authorization parameters for the connection.</p>
 */
export interface CreateConnectionAuthRequestParameters {
  /**
   * <p>A <code>CreateConnectionBasicAuthRequestParameters</code> object that contains the Basic
   *       authorization parameters to use for the connection.</p>
   */
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters;

  /**
   * <p>A <code>CreateConnectionOAuthRequestParameters</code> object that contains the OAuth
   *       authorization parameters to use for the connection.</p>
   */
  OAuthParameters?: CreateConnectionOAuthRequestParameters;

  /**
   * <p>A <code>CreateConnectionApiKeyAuthRequestParameters</code> object that contains the API
   *       key authorization parameters to use for the connection.</p>
   */
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters;

  /**
   * <p>A <code>ConnectionHttpParameters</code> object that contains the API key authorization
   *       parameters to use for the connection. Note that if you include additional parameters for the
   *       target of a rule via <code>HttpParameters</code>, including query strings, the parameters
   *       added for the connection take precedence.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

export interface CreateConnectionRequest {
  /**
   * <p>The name for the connection to create.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the connection to create.</p>
   */
  Description?: string;

  /**
   * <p>The type of authorization to use for the connection.</p>
   */
  AuthorizationType: ConnectionAuthorizationType | string | undefined;

  /**
   * <p>A <code>CreateConnectionAuthRequestParameters</code> object that contains the
   *       authorization parameters to use to authorize with the endpoint. </p>
   */
  AuthParameters: CreateConnectionAuthRequestParameters | undefined;
}

export enum ConnectionState {
  AUTHORIZED = "AUTHORIZED",
  AUTHORIZING = "AUTHORIZING",
  CREATING = "CREATING",
  DEAUTHORIZED = "DEAUTHORIZED",
  DEAUTHORIZING = "DEAUTHORIZING",
  DELETING = "DELETING",
  UPDATING = "UPDATING",
}

export interface CreateConnectionResponse {
  /**
   * <p>The ARN of the connection that was created by the request.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The state of the connection that was created by the request.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last updated.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge, rules and event buses
 *       support tagging.</p>
 */
export interface Tag {
  /**
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *       you organize and categorize your resources.</p>
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   */
  Value: string | undefined;
}

export interface CreateEventBusRequest {
  /**
   * <p>The name of the new event bus. </p>
   *          <p>Event bus names cannot contain the / character. You can't use the name
   *         <code>default</code> for a custom event bus, as this name is already used for your account's
   *       default event bus.</p>
   *          <p>If this is a partner event bus, the name must exactly match the name of the partner event
   *       source that this event bus is matched to.</p>
   */
  Name: string | undefined;

  /**
   * <p>If you are creating a partner event bus, this specifies the partner event source that the
   *       new event bus will be matched with.</p>
   */
  EventSourceName?: string;

  /**
   * <p>Tags to associate with the event bus.</p>
   */
  Tags?: Tag[];
}

export interface CreateEventBusResponse {
  /**
   * <p>The ARN of the new event bus.</p>
   */
  EventBusArn?: string;
}

export interface CreatePartnerEventSourceRequest {
  /**
   * <p>The name of the partner event source. This name must be unique and must be in the format
   *           <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>.
   *       The Amazon Web Services account that wants to use this partner event source must create a partner event bus
   *       with a name that matches the name of the partner event source.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that is permitted to create a matching partner event bus for this
   *       partner event source.</p>
   */
  Account: string | undefined;
}

export interface CreatePartnerEventSourceResponse {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  EventSourceArn?: string;
}

export interface DeactivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to deactivate.</p>
   */
  Name: string | undefined;
}

export interface DeauthorizeConnectionRequest {
  /**
   * <p>The name of the connection to remove authorization from.</p>
   */
  Name: string | undefined;
}

export interface DeauthorizeConnectionResponse {
  /**
   * <p>The ARN of the connection that authorization was removed from.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last updated.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

export interface DeleteApiDestinationRequest {
  /**
   * <p>The name of the destination to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteApiDestinationResponse {}

export interface DeleteArchiveRequest {
  /**
   * <p>The name of the archive to delete.</p>
   */
  ArchiveName: string | undefined;
}

export interface DeleteArchiveResponse {}

export interface DeleteConnectionRequest {
  /**
   * <p>The name of the connection to delete.</p>
   */
  Name: string | undefined;
}

export interface DeleteConnectionResponse {
  /**
   * <p>The ARN of the connection that was deleted.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The state of the connection before it was deleted.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last modified before it was
   *       deleted.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last authorized before it wa
   *       deleted.</p>
   */
  LastAuthorizedTime?: Date;
}

export interface DeleteEventBusRequest {
  /**
   * <p>The name of the event bus to delete.</p>
   */
  Name: string | undefined;
}

export interface DeletePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to delete.</p>
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Web Services customer that the event source was created for.</p>
   */
  Account: string | undefined;
}

export interface DeleteRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify
   *         <code>Force</code> as <code>True</code> to delete the rule. This parameter is ignored for
   *       rules that are not managed rules. You can check whether a rule is a managed rule by using
   *         <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code>
   *       field of the response.</p>
   */
  Force?: boolean;
}

/**
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

export interface DescribeApiDestinationRequest {
  /**
   * <p>The name of the API destination to retrieve.</p>
   */
  Name: string | undefined;
}

export interface DescribeApiDestinationResponse {
  /**
   * <p>The ARN of the API destination retrieved.</p>
   */
  ApiDestinationArn?: string;

  /**
   * <p>The name of the API destination retrieved.</p>
   */
  Name?: string;

  /**
   * <p>The description for the API destination retrieved.</p>
   */
  Description?: string;

  /**
   * <p>The state of the API destination retrieved.</p>
   */
  ApiDestinationState?: ApiDestinationState | string;

  /**
   * <p>The ARN of the connection specified for the API destination retrieved.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The URL to use to connect to the HTTP endpoint.</p>
   */
  InvocationEndpoint?: string;

  /**
   * <p>The method to use to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod | string;

  /**
   * <p>The maximum number of invocations per second to specified for the API destination. Note
   *       that if you set the invocation rate maximum to a value lower the rate necessary to send all
   *       events received on to the destination HTTP endpoint, some events may not be delivered within
   *       the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver
   *       all events, consider using a dead-letter queue to catch events that are not delivered within
   *       24 hours.</p>
   */
  InvocationRateLimitPerSecond?: number;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface DescribeArchiveRequest {
  /**
   * <p>The name of the archive to retrieve.</p>
   */
  ArchiveName: string | undefined;
}

export interface DescribeArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The name of the archive.</p>
   */
  ArchiveName?: string;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The description of the archive.</p>
   */
  Description?: string;

  /**
   * <p>The event pattern used to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The number of days to retain events for in the archive.</p>
   */
  RetentionDays?: number;

  /**
   * <p>The size of the archive in bytes.</p>
   */
  SizeBytes?: number;

  /**
   * <p>The number of events in the archive.</p>
   */
  EventCount?: number;

  /**
   * <p>The time at which the archive was created.</p>
   */
  CreationTime?: Date;
}

export interface DescribeConnectionRequest {
  /**
   * <p>The name of the connection to retrieve.</p>
   */
  Name: string | undefined;
}

/**
 * <p>Contains the authorization parameters for the connection if API Key is specified as the
 *       authorization type.</p>
 */
export interface ConnectionApiKeyAuthResponseParameters {
  /**
   * <p>The name of the header to use for the <code>APIKeyValue</code> used for
   *       authorization.</p>
   */
  ApiKeyName?: string;
}

/**
 * <p>Contains the authorization parameters for the connection if Basic is specified as the
 *       authorization type.</p>
 */
export interface ConnectionBasicAuthResponseParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   */
  Username?: string;
}

/**
 * <p>Contains the client response parameters for the connection when OAuth is specified as the
 *       authorization type.</p>
 */
export interface ConnectionOAuthClientResponseParameters {
  /**
   * <p>The client ID associated with the response to the connection request.</p>
   */
  ClientID?: string;
}

/**
 * <p>Contains the response parameters when OAuth is specified as the authorization type.</p>
 */
export interface ConnectionOAuthResponseParameters {
  /**
   * <p>A <code>ConnectionOAuthClientResponseParameters</code> object that contains details about
   *       the client parameters returned when OAuth is specified as the authorization type.</p>
   */
  ClientParameters?: ConnectionOAuthClientResponseParameters;

  /**
   * <p>The URL to the HTTP endpoint that authorized the request.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The method used to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ConnectionOAuthHttpMethod | string;

  /**
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * <p>Contains the authorization parameters to use for the connection.</p>
 */
export interface ConnectionAuthResponseParameters {
  /**
   * <p>The authorization parameters for Basic authorization.</p>
   */
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters;

  /**
   * <p>The OAuth parameters to use for authorization.</p>
   */
  OAuthParameters?: ConnectionOAuthResponseParameters;

  /**
   * <p>The API Key parameters to use for authorization.</p>
   */
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters;

  /**
   * <p>Additional parameters for the connection that are passed through with every invocation to
   *       the HTTP endpoint.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

export interface DescribeConnectionResponse {
  /**
   * <p>The ARN of the connection retrieved.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The name of the connection retrieved.</p>
   */
  Name?: string;

  /**
   * <p>The description for the connection retrieved.</p>
   */
  Description?: string;

  /**
   * <p>The state of the connection retrieved.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>The reason that the connection is in the current connection state.</p>
   */
  StateReason?: string;

  /**
   * <p>The type of authorization specified for the connection.</p>
   */
  AuthorizationType?: ConnectionAuthorizationType | string;

  /**
   * <p>The ARN of the secret created from the authorization parameters specified for the
   *       connection.</p>
   */
  SecretArn?: string;

  /**
   * <p>The parameters to use for authorization for the connection.</p>
   */
  AuthParameters?: ConnectionAuthResponseParameters;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

export interface DescribeEventBusRequest {
  /**
   * <p>The name or ARN of the event bus to show details for. If you omit this, the default event
   *       bus is displayed.</p>
   */
  Name?: string;
}

export interface DescribeEventBusResponse {
  /**
   * <p>The name of the event bus. Currently, this is always <code>default</code>.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the current
   *       account.</p>
   */
  Arn?: string;

  /**
   * <p>The policy that enables the external account to send events to your account.</p>
   */
  Policy?: string;
}

export interface DescribeEventSourceRequest {
  /**
   * <p>The name of the partner event source to display the details of.</p>
   */
  Name: string | undefined;
}

export enum EventSourceState {
  ACTIVE = "ACTIVE",
  DELETED = "DELETED",
  PENDING = "PENDING",
}

export interface DescribeEventSourceResponse {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the SaaS partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire if you do not create a matching event
   *       bus.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export interface DescribePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to display.</p>
   */
  Name: string | undefined;
}

export interface DescribePartnerEventSourceResponse {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;
}

export interface DescribeReplayRequest {
  /**
   * <p>The name of the replay to retrieve.</p>
   */
  ReplayName: string | undefined;
}

/**
 * <p>A <code>ReplayDestination</code> object that contains details about a replay.</p>
 */
export interface ReplayDestination {
  /**
   * <p>The ARN of the event bus to replay event to. You can replay events only to the event bus
   *       specified to create the archive.</p>
   */
  Arn: string | undefined;

  /**
   * <p>A list of ARNs for rules to replay events to.</p>
   */
  FilterArns?: string[];
}

export interface DescribeReplayResponse {
  /**
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The description of the replay.</p>
   */
  Description?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The ARN of the archive events were replayed from.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>A <code>ReplayDestination</code> object that contains details about the replay.</p>
   */
  Destination?: ReplayDestination;

  /**
   * <p>The time stamp of the first event that was last replayed from the archive.</p>
   */
  EventStartTime?: Date;

  /**
   * <p>The time stamp for the last event that was replayed from the archive.</p>
   */
  EventEndTime?: Date;

  /**
   * <p>The time that the event was last replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * <p>A time stamp for the time that the replay stopped.</p>
   */
  ReplayEndTime?: Date;
}

export interface DescribeRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

export enum RuleState {
  DISABLED = "DISABLED",
  ENABLED = "ENABLED",
}

export interface DescribeRuleResponse {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>Specifies whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   */
  RoleArn?: string;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, this field displays
   *       the principal name of the Amazon Web Services service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name of the event bus associated with the rule.</p>
   */
  EventBusName?: string;

  /**
   * <p>The account ID of the user that created the rule. If you use <code>PutRule</code> to put a
   *       rule on an event bus in another account, the other account is the owner of the rule, and the
   *       rule ARN includes the account ID for that account. However, the value for
   *         <code>CreatedBy</code> is the account ID as the account that created the rule in the other
   *       account.</p>
   */
  CreatedBy?: string;
}

export interface DisableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

export interface EnableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

export interface ListApiDestinationsRequest {
  /**
   * <p>A name prefix to filter results returned. Only API destinations with a name that starts
   *       with the prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The ARN of the connection specified for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of API destinations to include in the response.</p>
   */
  Limit?: number;
}

export interface ListApiDestinationsResponse {
  /**
   * <p>An array of <code>ApiDestination</code> objects that include information about an API
   *       destination.</p>
   */
  ApiDestinations?: ApiDestination[];

  /**
   * <p>A token you can use in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListArchivesRequest {
  /**
   * <p>A name prefix to filter the archives returned. Only archives with name that match the
   *       prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export interface ListArchivesResponse {
  /**
   * <p>An array of <code>Archive</code> objects that include details about an archive.</p>
   */
  Archives?: Archive[];

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListConnectionsRequest {
  /**
   * <p>A name prefix to filter results returned. Only connections with a name that starts with
   *       the prefix are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of connections to return.</p>
   */
  Limit?: number;
}

/**
 * <p>Contains information about a connection.</p>
 */
export interface Connection {
  /**
   * <p>The ARN of the connection.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The name of the connection.</p>
   */
  Name?: string;

  /**
   * <p>The state of the connection.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>The reason that the connection is in the connection state.</p>
   */
  StateReason?: string;

  /**
   * <p>The authorization type specified for the connection.</p>
   */
  AuthorizationType?: ConnectionAuthorizationType | string;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

export interface ListConnectionsResponse {
  /**
   * <p>An array of connections objects that include details about the connections.</p>
   */
  Connections?: Connection[];

  /**
   * <p>A token you can use in a subsequent request to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListEventBusesRequest {
  /**
   * <p>Specifying this limits the results to only those event buses with names that start with
   *       the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * <p>An event bus receives events from a source and routes them to rules associated with that
 *       event bus. Your account's default event bus receives events from Amazon Web Services services. A custom event
 *       bus can receive events from your custom applications and services. A partner event bus
 *       receives events from an event source created by an SaaS partner. These events come from the
 *       partners services or applications.</p>
 */
export interface EventBus {
  /**
   * <p>The name of the event bus.</p>
   */
  Name?: string;

  /**
   * <p>The ARN of the event bus.</p>
   */
  Arn?: string;

  /**
   * <p>The permissions policy of the event bus, describing which other Amazon Web Services accounts can write
   *       events to this event bus.</p>
   */
  Policy?: string;
}

export interface ListEventBusesResponse {
  /**
   * <p>This list of event buses.</p>
   */
  EventBuses?: EventBus[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListEventSourcesRequest {
  /**
   * <p>Specifying this limits the results to only those partner event sources with names that
   *       start with the specified prefix.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events from the
 *       partner's applications or services.</p>
 */
export interface EventSource {
  /**
   * <p>The ARN of the event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire, if the Amazon Web Services account doesn't create a
   *       matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export interface ListEventSourcesResponse {
  /**
   * <p>The list of event sources.</p>
   */
  EventSources?: EventSource[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListPartnerEventSourceAccountsRequest {
  /**
   * <p>The name of the partner event source to display account information about.</p>
   */
  EventSourceName: string | undefined;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *       next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   */
  Limit?: number;
}

/**
 * <p>The Amazon Web Services account that a partner event source has been offered to.</p>
 */
export interface PartnerEventSourceAccount {
  /**
   * <p>The Amazon Web Services account ID that the partner event source was offered to.</p>
   */
  Account?: string;

  /**
   * <p>The date and time the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire, if the Amazon Web Services account doesn't create a
   *       matching event bus for it.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: EventSourceState | string;
}

export interface ListPartnerEventSourceAccountsResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListPartnerEventSourcesRequest {
  /**
   * <p>If you specify this, the results are limited to only those partner event sources that
   *       start with the string you specify.</p>
   */
  NamePrefix: string | undefined;

  /**
   * <p>The token returned by a previous call to this operation. Specifying this retrieves the
   *       next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>pecifying this limits the number of results returned by this operation. The operation also
   *       returns a NextToken which you can use in a subsequent operation to retrieve the next set of
   *       results.</p>
   */
  Limit?: number;
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events from the
 *       partner's applications or services.</p>
 */
export interface PartnerEventSource {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;
}

export interface ListPartnerEventSourcesResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   */
  PartnerEventSources?: PartnerEventSource[];

  /**
   * <p>A token you can use in a subsequent operation to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListReplaysRequest {
  /**
   * <p>A name prefix to filter the replays returned. Only replays with name that match the prefix
   *       are returned.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The ARN of the archive from which the events are replayed.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of replays to retrieve.</p>
   */
  Limit?: number;
}

/**
 * <p>A <code>Replay</code> object that contains details about a replay.</p>
 */
export interface Replay {
  /**
   * <p>The name of the replay.</p>
   */
  ReplayName?: string;

  /**
   * <p>The ARN of the archive to replay event from.</p>
   */
  EventSourceArn?: string;

  /**
   * <p>The current state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>A description of why the replay is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>A time stamp for the time to start replaying events. This is determined by the time in the
   *       event as described in <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time">Time</a>.</p>
   */
  EventStartTime?: Date;

  /**
   * <p>A time stamp for the time to start replaying events. Any event with a creation time prior
   *       to the <code>EventEndTime</code> specified is replayed.</p>
   */
  EventEndTime?: Date;

  /**
   * <p>A time stamp for the time that the last event was replayed.</p>
   */
  EventLastReplayedTime?: Date;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   */
  ReplayStartTime?: Date;

  /**
   * <p>A time stamp for the time that the replay completed.</p>
   */
  ReplayEndTime?: Date;
}

export interface ListReplaysResponse {
  /**
   * <p>An array of <code>Replay</code> objects that contain information about the replay.</p>
   */
  Replays?: Replay[];

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;
}

export interface ListRuleNamesByTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target resource.</p>
   */
  TargetArn: string | undefined;

  /**
   * <p>The name or ARN of the event bus to list rules for. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

export interface ListRuleNamesByTargetResponse {
  /**
   * <p>The names of the rules that can invoke the given target.</p>
   */
  RuleNames?: string[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

export interface ListRulesRequest {
  /**
   * <p>The prefix matching the rule name.</p>
   */
  NamePrefix?: string;

  /**
   * <p>The name or ARN of the event bus to list the rules for. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  Arn?: string;

  /**
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>The state of the rule.</p>
   */
  State?: RuleState | string;

  /**
   * <p>The description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html">Creating an Amazon EventBridge rule that runs on a schedule</a>.</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   */
  RoleArn?: string;

  /**
   * <p>If the rule was created on behalf of your account by an Amazon Web Services service, this field displays
   *       the principal name of the service that created the rule.</p>
   */
  ManagedBy?: string;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;
}

export interface ListRulesResponse {
  /**
   * <p>The rules that match the specified criteria.</p>
   */
  Rules?: Rule[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource for which you want to view tags.</p>
   */
  ResourceARN: string | undefined;
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified</p>
   */
  Tags?: Tag[];
}

export interface ListTargetsByRuleRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The token returned by a previous call to retrieve the next set of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return.</p>
   */
  Limit?: number;
}

/**
 * <p>The array properties for the submitted job, such as the size of the array. The array size
 *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
 *       job. This parameter is used only if the target is an Batch job.</p>
 */
export interface BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job. Valid values are integers between 2
   *       and 10,000.</p>
   */
  Size?: number;
}

/**
 * <p>The retry strategy to use for failed jobs, if the target is an Batch job. If you
 *       specify a retry strategy here, it overrides the retry strategy defined in the job
 *       definition.</p>
 */
export interface BatchRetryStrategy {
  /**
   * <p>The number of times to attempt to retry, if the job fails. Valid values are 1–10.</p>
   */
  Attempts?: number;
}

/**
 * <p>The custom parameters to be used when the target is an Batch job.</p>
 */
export interface BatchParameters {
  /**
   * <p>The ARN or name of the job definition to use if the event target is an Batch job. This
   *       job definition must already exist.</p>
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name to use for this execution of the job, if the target is an Batch job.</p>
   */
  JobName: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size
   *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
   *       job. This parameter is used only if the target is an Batch job.</p>
   */
  ArrayProperties?: BatchArrayProperties;

  /**
   * <p>The retry strategy to use for failed jobs, if the target is an Batch job. The retry
   *       strategy is the number of times to retry the failed job execution. Valid values are 1–10. When
   *       you specify a retry strategy here, it overrides the retry strategy defined in the job
   *       definition.</p>
   */
  RetryStrategy?: BatchRetryStrategy;
}

/**
 * <p>A <code>DeadLetterConfig</code> object that contains information about a dead-letter queue
 *       configuration.</p>
 */
export interface DeadLetterConfig {
  /**
   * <p>The ARN of the SQS queue specified as the target for the dead-letter queue.</p>
   */
  Arn?: string;
}

/**
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks launched
   *       that should use the specified capacity provider. The weight value is taken into consideration
   *       after the base value, if defined, is satisfied.</p>
   */
  weight?: number;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *       provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *       If no value is specified, the default value of 0 is used. </p>
   */
  base?: number;
}

export enum LaunchType {
  EC2 = "EC2",
  EXTERNAL = "EXTERNAL",
  FARGATE = "FARGATE",
}

/**
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a
 *       public IP address is to be used. This structure is relevant only for ECS tasks that use the
 *         <code>awsvpc</code> network mode.</p>
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC.
   *       You can specify as many as 16 subnets.</p>
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be
   *       in the same VPC. You can specify as many as five security groups. If you do not specify a
   *       security group, the default security group for the VPC is used.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You
   *       can specify <code>ENABLED</code> only when <code>LaunchType</code> in
   *         <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   */
  AssignPublicIp?: AssignPublicIp | string;
}

/**
 * <p>This structure specifies the network configuration for an ECS task.</p>
 */
export interface NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *       whether a public IP address is to be used. This structure is relevant only for ECS tasks that
   *       use the <code>awsvpc</code> network mode.</p>
   */
  awsvpcConfiguration?: AwsVpcConfiguration;
}

export enum PlacementConstraintType {
  DISTINCT_INSTANCE = "distinctInstance",
  MEMBER_OF = "memberOf",
}

/**
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer
 *       Guide.</p>
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *       group is running on a different container instance. Use memberOf to restrict the selection to
   *       a group of valid candidates. </p>
   */
  type?: PlacementConstraintType | string;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *       expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide.
   *     </p>
   */
  expression?: string;
}

export enum PlacementStrategyType {
  BINPACK = "binpack",
  RANDOM = "random",
  SPREAD = "spread",
}

/**
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer
 *       Guide.</p>
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *       available candidates. The spread placement strategy spreads placement across available
   *       candidates evenly based on the field parameter. The binpack strategy places tasks on available
   *       candidates that have the least available amount of the resource that is specified with the
   *       field parameter. For example, if you binpack on memory, a task is placed on the instance with
   *       the least amount of remaining memory (but still enough to run the task). </p>
   */
  type?: PlacementStrategyType | string;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *       valid values are instanceId (or host, which has the same effect), or any platform or custom
   *       attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *       For the binpack placement strategy, valid values are cpu and memory. For the random placement
   *       strategy, this field is not used. </p>
   */
  field?: string;
}

export enum PropagateTags {
  TASK_DEFINITION = "TASK_DEFINITION",
}

/**
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 */
export interface EcsParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *       1.</p>
   */
  TaskCount?: number;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify
   *       here must match one of the launch type (compatibilities) of the target task. The
   *       <code>FARGATE</code> value is supported only in the Regions where Fargate witt Amazon ECS
   *      is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in
   *       the <i>Amazon Elastic Container Service Developer Guide</i>.</p>
   */
  LaunchType?: LaunchType | string;

  /**
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
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *       platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *       information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate Platform
   *         Versions</a> in the <i>Amazon Elastic Container Service Developer
   *         Guide</i>.</p>
   */
  PlatformVersion?: string;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   */
  Group?: string;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *       parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *       specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[];

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more information,
   *       see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS Resources</a> in the Amazon Elastic Container Service Developer
   *       Guide. </p>
   */
  EnableECSManagedTags?: boolean;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *       task. If true, this enables execute command functionality on all containers in the
   *       task.</p>
   */
  EnableExecuteCommand?: boolean;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *       constraints per task (including constraints in the task definition and those specified at
   *       runtime).</p>
   */
  PlacementConstraints?: PlacementConstraint[];

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *       strategy rules per task. </p>
   */
  PlacementStrategy?: PlacementStrategy[];

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value
   *       is specified, the tags are not propagated. Tags can only be propagated to the task during task
   *       creation. To add tags to a task after task creation, use the TagResource API action. </p>
   */
  PropagateTags?: PropagateTags | string;

  /**
   * <p>The reference ID to use for the task.</p>
   */
  ReferenceId?: string;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag
   *       consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   */
  Tags?: Tag[];
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway REST APIs or
 *       EventBridge ApiDestinations. In the latter case, these are merged with any
 *       InvocationParameters specified on the Connection, with any values from the Connection taking
 *       precedence.</p>
 */
export interface HttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway REST API or EventBridge
   *       ApiDestination path wildcards ("*").</p>
   */
  PathParameterValues?: string[];

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway REST API or
   *       EventBridge ApiDestination.</p>
   */
  HeaderParameters?: Record<string, string>;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway
   *       REST API or EventBridge ApiDestination.</p>
   */
  QueryStringParameters?: Record<string, string>;
}

/**
 * <p>Contains the parameters needed for you to provide custom input to a target based on one or
 *       more pieces of data extracted from the event.</p>
 */
export interface InputTransformer {
  /**
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
   * <p>Input template where you specify placeholders that will be filled with the values of the
   *       keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each
   *         <code>InputPathsMaps</code> value in brackets: <<i>value</i>> The
   *       InputTemplate must be valid JSON.</p>
   *
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
   *             <code>{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status":
   *         "$.detail.status"},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": "<instance> is in state <status>"</code>
   *          </p>
   *          <p>
   *             <code>}</code>
   *          </p>
   *          <p>To have the <code>InputTemplate</code> include quote marks within a JSON string, escape
   *       each quote marks with a slash, as in the following example:</p>
   *          <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status":
   *         "$.detail.status"},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": "<instance> is in state \"<status>\""</code>
   *          </p>
   *          <p>
   *             <code>}</code>
   *          </p>
   *          <p>The <code>InputTemplate</code> can also be valid JSON with varibles in quotes or out, as
   *       in the following example:</p>
   *          <p>
   *             <code> "InputTransformer":</code>
   *          </p>
   *          <p>
   *             <code>{</code>
   *          </p>
   *          <p>
   *             <code>"InputPathsMap": {"instance": "$.detail.instance","status":
   *         "$.detail.status"},</code>
   *          </p>
   *          <p>
   *             <code>"InputTemplate": '{"myInstance": <instance>,"myStatus": "<instance> is
   *         in state \"<status>\""}'</code>
   *          </p>
   *          <p>
   *             <code>}</code>
   *          </p>
   */
  InputTemplate: string | undefined;
}

/**
 * <p>This object enables you to specify a JSON path to extract from the event and use as the
 *       partition key for the Amazon Kinesis data stream, so that you can control the shard to which
 *       the event goes. If you do not include this parameter, the default is to use the
 *         <code>eventId</code> as the partition key.</p>
 */
export interface KinesisParameters {
  /**
   * <p>The JSON path to be extracted from the event and used as the partition key. For more
   *       information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key
   *         Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   */
  PartitionKeyPath: string | undefined;
}

/**
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster to invoke the
 *       Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>
 */
export interface RedshiftDataParameters {
  /**
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *       authenticating using Amazon Web Services Secrets Manager.</p>
   */
  SecretManagerArn?: string;

  /**
   * <p>The name of the database. Required when authenticating using temporary credentials.</p>
   */
  Database: string | undefined;

  /**
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   */
  DbUser?: string;

  /**
   * <p>The SQL statement text to run.</p>
   */
  Sql: string | undefined;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *       identify the query.</p>
   */
  StatementName?: string;

  /**
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *       runs.</p>
   */
  WithEvent?: boolean;
}

/**
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy
 *       settings.</p>
 */
export interface RetryPolicy {
  /**
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts
   *       continue until either the maximum number of attempts is made or until the duration of the
   *         <code>MaximumEventAgeInSeconds</code> is met.</p>
   */
  MaximumRetryAttempts?: number;

  /**
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   */
  MaximumEventAgeInSeconds?: number;
}

/**
 * <p>Information about the EC2 instances that are to be sent the command, specified as
 *       key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this
 *       key may specify multiple values.</p>
 */
export interface RunCommandTarget {
  /**
   * <p>Can be either <code>tag:</code>
   *             <i>tag-key</i> or
   *       <code>InstanceIds</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>If <code>Key</code> is <code>tag:</code>
   *             <i>tag-key</i>, <code>Values</code>
   *       is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code>
   *       is a list of Amazon EC2 instance IDs.</p>
   */
  Values: string[] | undefined;
}

/**
 * <p>This parameter contains the criteria (either InstanceIds or a tag) used to specify which
 *       EC2 instances are to be sent the command. </p>
 */
export interface RunCommandParameters {
  /**
   * <p>Currently, we support including only one RunCommandTarget block, which specifies either an
   *       array of InstanceIds or a tag.</p>
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

/**
 * <p>Name/Value pair of a parameter to start execution of a SageMaker Model Building
 *       Pipeline.</p>
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker Model Building Pipeline.</p>
   */
  Value: string | undefined;
}

/**
 * <p>These are custom parameters to use when the target is a SageMaker Model Building Pipeline
 *       that starts based on EventBridge events.</p>
 */
export interface SageMakerPipelineParameters {
  /**
   * <p>List of Parameter names and values for SageMaker Model Building Pipeline execution.</p>
   */
  PipelineParameterList?: SageMakerPipelineParameter[];
}

/**
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO
 *       queue.</p>
 */
export interface SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   */
  MessageGroupId?: string;
}

/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of
 *       services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p>
 *
 *          <p>If you are setting the event bus of another account as the target, and that account
 *       granted permission to your account through an organization instead of directly by the account
 *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *           Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 */
export interface Target {
  /**
   * <p>The ID of the target. We recommend using a memorable and unique string.</p>
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is
   *       triggered. If one rule triggers multiple targets, you can use a different IAM role for each
   *       target.</p>
   */
  RoleArn?: string;

  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *       passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *         Interchange Format</a>.</p>
   */
  Input?: string;

  /**
   * <p>The value of the JSONPath that is used for extracting part of the matched event when
   *       passing it to the target. You must use JSON dot notation, not bracket notation. For more
   *       information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   */
  InputPath?: string;

  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event data.
   *       You can extract one or more key-value pairs from the event and then use that data to send
   *       customized input to the target.</p>
   */
  InputTransformer?: InputTransformer;

  /**
   * <p>The custom parameter you can use to control the shard assignment, when the target is a
   *       Kinesis data stream. If you do not include this parameter, the default is to use the
   *         <code>eventId</code> as the partition key.</p>
   */
  KinesisParameters?: KinesisParameters;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   */
  RunCommandParameters?: RunCommandParameters;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used, if the event target is
   *       an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task
   *         Definitions </a> in the <i>Amazon EC2 Container Service Developer
   *         Guide</i>.</p>
   */
  EcsParameters?: EcsParameters;

  /**
   * <p>If the event target is an Batch job, this contains the job definition, job name, and
   *       other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>Batch User
   *         Guide</i>.</p>
   */
  BatchParameters?: BatchParameters;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p>
   *          <p>If you specify an SQS FIFO queue as a target, the queue must have content-based
   *       deduplication enabled.</p>
   */
  SqsParameters?: SqsParameters;

  /**
   * <p>Contains the HTTP parameters to use when the target is a API Gateway REST endpoint or
   *       EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway REST API or EventBridge ApiDestination as a target, you can
   *       use this parameter to specify headers, path parameters, and query string keys/values as part
   *       of your target invoking request. If you're using ApiDestinations, the corresponding Connection
   *       can also have these values configured. In case of any conflicting keys, values from the
   *       Connection take precedence.</p>
   */
  HttpParameters?: HttpParameters;

  /**
   * <p>Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift
   *       cluster.</p>
   *          <p>If you specify a Amazon Redshift Cluster as a Target, you can use this to specify parameters to
   *       invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>
   */
  RedshiftDataParameters?: RedshiftDataParameters;

  /**
   * <p>Contains the SageMaker Model Building Pipeline parameters to start execution of a
   *       SageMaker Model Building Pipeline.</p>
   *          <p>If you specify a SageMaker Model Building Pipeline as a target, you can use this to
   *       specify parameters to start a pipeline execution based on EventBridge events.</p>
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters;

  /**
   * <p>The <code>DeadLetterConfig</code> that defines the target queue to send dead-letter queue
   *       events to.</p>
   */
  DeadLetterConfig?: DeadLetterConfig;

  /**
   * <p>The <code>RetryPolicy</code> object that contains the retry policy configuration to use
   *       for the dead-letter queue.</p>
   */
  RetryPolicy?: RetryPolicy;
}

export interface ListTargetsByRuleResponse {
  /**
   * <p>The targets assigned to the rule.</p>
   */
  Targets?: Target[];

  /**
   * <p>Indicates whether there are additional results to retrieve. If there are no more results,
   *       the value is null.</p>
   */
  NextToken?: string;
}

/**
 * <p>Represents an event to be submitted.</p>
 */
export interface PutEventsRequestEntry {
  /**
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   */
  Time?: Date;

  /**
   * <p>The source of the event.</p>
   */
  Source?: string;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *       concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * <p>Free-form string used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain fields
   *       and nested subobjects.</p>
   */
  Detail?: string;

  /**
   * <p>The name or ARN of the event bus to receive the event. Only the rules that are associated
   *       with this event bus are used to match the event. If you omit this, the default event bus is
   *       used.</p>
   */
  EventBusName?: string;

  /**
   * <p>An X-Ray trade header, which is an http header (X-Amzn-Trace-Id) that contains the
   *       trace-id associated with the event.</p>
   *          <p>To learn more about X-Ray trace headers, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader">Tracing header</a> in the X-Ray Developer Guide.</p>
   */
  TraceHeader?: string;
}

export interface PutEventsRequest {
  /**
   * <p>The entry that defines an event in your system. You can specify several parameters for the
   *       entry such as the source and type of the event, resources associated with the event, and so
   *       on.</p>
   */
  Entries: PutEventsRequestEntry[] | undefined;
}

/**
 * <p>Represents an event that failed to be submitted.</p>
 */
export interface PutEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

export interface PutEventsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was
   *       successful, the entry has the event ID in it. Otherwise, you can use the error code and error
   *       message to identify the problem with the entry.</p>
   */
  Entries?: PutEventsResultEntry[];
}

/**
 * <p>The details about an event generated by an SaaS partner.</p>
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * <p>The date and time of the event.</p>
   */
  Time?: Date;

  /**
   * <p>The event source that is generating the entry.</p>
   */
  Source?: string;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily
   *       concerns. Any number, including zero, may be present.</p>
   */
  Resources?: string[];

  /**
   * <p>A free-form string used to decide what fields to expect in the event detail.</p>
   */
  DetailType?: string;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain fields
   *       and nested subobjects.</p>
   */
  Detail?: string;
}

export interface PutPartnerEventsRequest {
  /**
   * <p>The list of events to write to the event bus.</p>
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

/**
 * <p>Represents an event that a partner tried to generate, but failed.</p>
 */
export interface PutPartnerEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   */
  EventId?: string;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   */
  ErrorMessage?: string;
}

export interface PutPartnerEventsResponse {
  /**
   * <p>The number of events from this operation that could not be written to the partner event
   *       bus.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The list of events from this operation that were successfully written to the partner event
   *       bus.</p>
   */
  Entries?: PutPartnerEventsResultEntry[];
}

/**
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
 * <p>A JSON string which you can use to limit the event bus permissions you are granting to
 *       only accounts that fulfill the condition. Currently, the only supported condition is
 *       membership in a certain Amazon Web Services organization. The string must contain <code>Type</code>,
 *         <code>Key</code>, and <code>Value</code> fields. The <code>Value</code> field specifies the
 *       ID of the Amazon Web Services organization. Following is an example value for <code>Condition</code>:</p>
 *          <p>
 *             <code>'{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value":
 *         "o-1234567890"}'</code>
 *          </p>
 */
export interface Condition {
  /**
   * <p>Specifies the type of condition. Currently the only supported value is
   *         <code>StringEquals</code>.</p>
   */
  Type: string | undefined;

  /**
   * <p>Specifies the key for the condition. Currently the only supported key is
   *         <code>aws:PrincipalOrgID</code>.</p>
   */
  Key: string | undefined;

  /**
   * <p>Specifies the value for the key. Currently, this must be the ID of the
   *       organization.</p>
   */
  Value: string | undefined;
}

export interface PutPermissionRequest {
  /**
   * <p>The name of the event bus associated with the rule. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The action that you are enabling the other account to perform.</p>
   */
  Action?: string;

  /**
   * <p>The 12-digit Amazon Web Services account ID that you are permitting to put events to your default event
   *       bus. Specify "*" to permit any account to put events to your default event bus.</p>
   *
   *          <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules that
   *       may match undesirable events. To create more secure rules, make sure that the event pattern
   *       for each rule contains an <code>account</code> field with a specific account ID from which to
   *       receive events. Rules with an account field do not match any events sent from other
   *       accounts.</p>
   */
  Principal?: string;

  /**
   * <p>An identifier string for the external account that you are granting permissions to. If you
   *       later want to revoke the permission for this external account, specify this
   *       <code>StatementId</code> when you run <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html">RemovePermission</a>.</p>
   */
  StatementId?: string;

  /**
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain
   *       condition, such as being a member of a certain Amazon Web Services organization. For more information about
   *       Amazon Web Services Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is Amazon Web Services
   *         Organizations</a> in the <i>Amazon Web Services Organizations User Guide</i>.</p>
   *          <p>If you specify <code>Condition</code> with an Amazon Web Services organization ID, and specify "*" as the
   *       value for <code>Principal</code>, you grant permission to all the accounts in the named
   *       organization.</p>
   *
   *          <p>The <code>Condition</code> is a JSON string which must contain <code>Type</code>,
   *         <code>Key</code>, and <code>Value</code> fields.</p>
   */
  Condition?: Condition;

  /**
   * <p>A JSON string that describes the permission policy statement. You can include a
   *         <code>Policy</code> parameter in the request instead of using the <code>StatementId</code>,
   *         <code>Action</code>, <code>Principal</code>, or <code>Condition</code> parameters.</p>
   */
  Policy?: string;
}

export interface PutRuleRequest {
  /**
   * <p>The name of the rule that you are creating or updating.</p>
   */
  Name: string | undefined;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".</p>
   */
  ScheduleExpression?: string;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern?: string;

  /**
   * <p>Indicates whether the rule is enabled or disabled.</p>
   */
  State?: RuleState | string;

  /**
   * <p>A description of the rule.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   */
  RoleArn?: string;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name or ARN of the event bus to associate with this rule. If you omit this, the
   *       default event bus is used.</p>
   */
  EventBusName?: string;
}

export interface PutRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   */
  RuleArn?: string;
}

export interface PutTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The targets to update or add to the rule.</p>
   */
  Targets: Target[] | undefined;
}

/**
 * <p>Represents a target that failed to be added to a rule.</p>
 */
export interface PutTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * <p>The error code that indicates why the target addition failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target addition failed.</p>
   */
  ErrorMessage?: string;
}

export interface PutTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: PutTargetsResultEntry[];
}

export interface RemovePermissionRequest {
  /**
   * <p>The statement ID corresponding to the account that is no longer allowed to put events to
   *       the default event bus.</p>
   */
  StatementId?: string;

  /**
   * <p>Specifies whether to remove all permissions.</p>
   */
  RemoveAllPermissions?: boolean;

  /**
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default event
   *       bus is used.</p>
   */
  EventBusName?: string;
}

export interface RemoveTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   */
  EventBusName?: string;

  /**
   * <p>The IDs of the targets to remove from the rule.</p>
   */
  Ids: string[] | undefined;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you must specify
   *         <code>Force</code> as <code>True</code> to remove targets. This parameter is ignored for
   *       rules that are not managed rules. You can check whether a rule is a managed rule by using
   *         <code>DescribeRule</code> or <code>ListRules</code> and checking the <code>ManagedBy</code>
   *       field of the response.</p>
   */
  Force?: boolean;
}

/**
 * <p>Represents a target that failed to be removed from a rule.</p>
 */
export interface RemoveTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   */
  TargetId?: string;

  /**
   * <p>The error code that indicates why the target removal failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message that explains why the target removal failed.</p>
   */
  ErrorMessage?: string;
}

export interface RemoveTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   */
  FailedEntryCount?: number;

  /**
   * <p>The failed target entries.</p>
   */
  FailedEntries?: RemoveTargetsResultEntry[];
}

export interface StartReplayRequest {
  /**
   * <p>The name of the replay to start.</p>
   */
  ReplayName: string | undefined;

  /**
   * <p>A description for the replay to start.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the archive to replay events from.</p>
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A time stamp for the time to start replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventStartTime: Date | undefined;

  /**
   * <p>A time stamp for the time to stop replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   */
  EventEndTime: Date | undefined;

  /**
   * <p>A <code>ReplayDestination</code> object that includes details about the destination for
   *       the replay.</p>
   */
  Destination: ReplayDestination | undefined;
}

export interface StartReplayResponse {
  /**
   * <p>The ARN of the replay.</p>
   */
  ReplayArn?: string;

  /**
   * <p>The state of the replay.</p>
   */
  State?: ReplayState | string;

  /**
   * <p>The reason that the replay is in the state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the replay started.</p>
   */
  ReplayStartTime?: Date;
}

export interface TagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource that you're adding tags to.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
   */
  Tags: Tag[] | undefined;
}

export interface TagResourceResponse {}

export interface TestEventPatternRequest {
  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   */
  EventPattern: string | undefined;

  /**
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

export interface TestEventPatternResponse {
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   */
  Result?: boolean;
}

export interface UntagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource from which you are removing tags.</p>
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

export interface UntagResourceResponse {}

export interface UpdateApiDestinationRequest {
  /**
   * <p>The name of the API destination to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>The name of the API destination to update.</p>
   */
  Description?: string;

  /**
   * <p>The ARN of the connection to use for the API destination.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The URL to the endpoint to use for the API destination.</p>
   */
  InvocationEndpoint?: string;

  /**
   * <p>The method to use for the API destination.</p>
   */
  HttpMethod?: ApiDestinationHttpMethod | string;

  /**
   * <p>The maximum number of invocations per second to send to the API destination.</p>
   */
  InvocationRateLimitPerSecond?: number;
}

export interface UpdateApiDestinationResponse {
  /**
   * <p>The ARN of the API destination that was updated.</p>
   */
  ApiDestinationArn?: string;

  /**
   * <p>The state of the API destination that was updated.</p>
   */
  ApiDestinationState?: ApiDestinationState | string;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export interface UpdateArchiveRequest {
  /**
   * <p>The name of the archive to update.</p>
   */
  ArchiveName: string | undefined;

  /**
   * <p>The description for the archive.</p>
   */
  Description?: string;

  /**
   * <p>The event pattern to use to filter events sent to the archive.</p>
   */
  EventPattern?: string;

  /**
   * <p>The number of days to retain events in the archive.</p>
   */
  RetentionDays?: number;
}

export interface UpdateArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   */
  ArchiveArn?: string;

  /**
   * <p>The state of the archive.</p>
   */
  State?: ArchiveState | string;

  /**
   * <p>The reason that the archive is in the current state.</p>
   */
  StateReason?: string;

  /**
   * <p>The time at which the archive was updated.</p>
   */
  CreationTime?: Date;
}

/**
 * <p>Contains the API key authorization parameters to use to update the connection.</p>
 */
export interface UpdateConnectionApiKeyAuthRequestParameters {
  /**
   * <p>The name of the API key to use for authorization.</p>
   */
  ApiKeyName?: string;

  /**
   * <p>The value associated with teh API key to use for authorization.</p>
   */
  ApiKeyValue?: string;
}

/**
 * <p>Contains the Basic authorization parameters for the connection.</p>
 */
export interface UpdateConnectionBasicAuthRequestParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   */
  Username?: string;

  /**
   * <p>The password associated with the user name to use for Basic authorization.</p>
   */
  Password?: string;
}

/**
 * <p>Contains the OAuth authorization parameters to use for the connection.</p>
 */
export interface UpdateConnectionOAuthClientRequestParameters {
  /**
   * <p>The client ID to use for OAuth authorization.</p>
   */
  ClientID?: string;

  /**
   * <p>The client secret assciated with the client ID to use for OAuth authorization.</p>
   */
  ClientSecret?: string;
}

/**
 * <p>Contains the OAuth request parameters to use for the connection.</p>
 */
export interface UpdateConnectionOAuthRequestParameters {
  /**
   * <p>A <code>UpdateConnectionOAuthClientRequestParameters</code> object that contains the
   *       client parameters to use for the connection when OAuth is specified as the authorization
   *       type.</p>
   */
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters;

  /**
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   */
  AuthorizationEndpoint?: string;

  /**
   * <p>The method used to connect to the HTTP endpoint.</p>
   */
  HttpMethod?: ConnectionOAuthHttpMethod | string;

  /**
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   */
  OAuthHttpParameters?: ConnectionHttpParameters;
}

/**
 * <p>Contains the additional parameters to use for the connection.</p>
 */
export interface UpdateConnectionAuthRequestParameters {
  /**
   * <p>A <code>UpdateConnectionBasicAuthRequestParameters</code> object that contains the
   *       authorization parameters for Basic authorization.</p>
   */
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters;

  /**
   * <p>A <code>UpdateConnectionOAuthRequestParameters</code> object that contains the
   *       authorization parameters for OAuth authorization.</p>
   */
  OAuthParameters?: UpdateConnectionOAuthRequestParameters;

  /**
   * <p>A <code>UpdateConnectionApiKeyAuthRequestParameters</code> object that contains the
   *       authorization parameters for API key authorization.</p>
   */
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters;

  /**
   * <p>A <code>ConnectionHttpParameters</code> object that contains the additional parameters to
   *       use for the connection.</p>
   */
  InvocationHttpParameters?: ConnectionHttpParameters;
}

export interface UpdateConnectionRequest {
  /**
   * <p>The name of the connection to update.</p>
   */
  Name: string | undefined;

  /**
   * <p>A description for the connection.</p>
   */
  Description?: string;

  /**
   * <p>The type of authorization to use for the connection.</p>
   */
  AuthorizationType?: ConnectionAuthorizationType | string;

  /**
   * <p>The authorization parameters to use for the connection.</p>
   */
  AuthParameters?: UpdateConnectionAuthRequestParameters;
}

export interface UpdateConnectionResponse {
  /**
   * <p>The ARN of the connection that was updated.</p>
   */
  ConnectionArn?: string;

  /**
   * <p>The state of the connection that was updated.</p>
   */
  ConnectionState?: ConnectionState | string;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   */
  LastModifiedTime?: Date;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   */
  LastAuthorizedTime?: Date;
}

/**
 * @internal
 */
export const ActivateEventSourceRequestFilterSensitiveLog = (obj: ActivateEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ApiDestinationFilterSensitiveLog = (obj: ApiDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ArchiveFilterSensitiveLog = (obj: Archive): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelReplayRequestFilterSensitiveLog = (obj: CancelReplayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelReplayResponseFilterSensitiveLog = (obj: CancelReplayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApiDestinationRequestFilterSensitiveLog = (obj: CreateApiDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateApiDestinationResponseFilterSensitiveLog = (obj: CreateApiDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateArchiveRequestFilterSensitiveLog = (obj: CreateArchiveRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateArchiveResponseFilterSensitiveLog = (obj: CreateArchiveResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionApiKeyAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionBasicAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionBasicAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionBodyParameterFilterSensitiveLog = (obj: ConnectionBodyParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionHeaderParameterFilterSensitiveLog = (obj: ConnectionHeaderParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionQueryStringParameterFilterSensitiveLog = (obj: ConnectionQueryStringParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionHttpParametersFilterSensitiveLog = (obj: ConnectionHttpParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionOAuthClientRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionOAuthClientRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionOAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionOAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionAuthRequestParametersFilterSensitiveLog = (
  obj: CreateConnectionAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionRequestFilterSensitiveLog = (obj: CreateConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateConnectionResponseFilterSensitiveLog = (obj: CreateConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventBusRequestFilterSensitiveLog = (obj: CreateEventBusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateEventBusResponseFilterSensitiveLog = (obj: CreateEventBusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePartnerEventSourceRequestFilterSensitiveLog = (obj: CreatePartnerEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreatePartnerEventSourceResponseFilterSensitiveLog = (obj: CreatePartnerEventSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeactivateEventSourceRequestFilterSensitiveLog = (obj: DeactivateEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeauthorizeConnectionRequestFilterSensitiveLog = (obj: DeauthorizeConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeauthorizeConnectionResponseFilterSensitiveLog = (obj: DeauthorizeConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApiDestinationRequestFilterSensitiveLog = (obj: DeleteApiDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteApiDestinationResponseFilterSensitiveLog = (obj: DeleteApiDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteArchiveRequestFilterSensitiveLog = (obj: DeleteArchiveRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteArchiveResponseFilterSensitiveLog = (obj: DeleteArchiveResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionRequestFilterSensitiveLog = (obj: DeleteConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteConnectionResponseFilterSensitiveLog = (obj: DeleteConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteEventBusRequestFilterSensitiveLog = (obj: DeleteEventBusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePartnerEventSourceRequestFilterSensitiveLog = (obj: DeletePartnerEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteRuleRequestFilterSensitiveLog = (obj: DeleteRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApiDestinationRequestFilterSensitiveLog = (obj: DescribeApiDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeApiDestinationResponseFilterSensitiveLog = (obj: DescribeApiDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArchiveRequestFilterSensitiveLog = (obj: DescribeArchiveRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeArchiveResponseFilterSensitiveLog = (obj: DescribeArchiveResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionRequestFilterSensitiveLog = (obj: DescribeConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionApiKeyAuthResponseParametersFilterSensitiveLog = (
  obj: ConnectionApiKeyAuthResponseParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionBasicAuthResponseParametersFilterSensitiveLog = (
  obj: ConnectionBasicAuthResponseParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionOAuthClientResponseParametersFilterSensitiveLog = (
  obj: ConnectionOAuthClientResponseParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionOAuthResponseParametersFilterSensitiveLog = (obj: ConnectionOAuthResponseParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionAuthResponseParametersFilterSensitiveLog = (obj: ConnectionAuthResponseParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeConnectionResponseFilterSensitiveLog = (obj: DescribeConnectionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventBusRequestFilterSensitiveLog = (obj: DescribeEventBusRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventBusResponseFilterSensitiveLog = (obj: DescribeEventBusResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventSourceRequestFilterSensitiveLog = (obj: DescribeEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeEventSourceResponseFilterSensitiveLog = (obj: DescribeEventSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePartnerEventSourceRequestFilterSensitiveLog = (obj: DescribePartnerEventSourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePartnerEventSourceResponseFilterSensitiveLog = (obj: DescribePartnerEventSourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplayRequestFilterSensitiveLog = (obj: DescribeReplayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplayDestinationFilterSensitiveLog = (obj: ReplayDestination): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeReplayResponseFilterSensitiveLog = (obj: DescribeReplayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleRequestFilterSensitiveLog = (obj: DescribeRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeRuleResponseFilterSensitiveLog = (obj: DescribeRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableRuleRequestFilterSensitiveLog = (obj: DisableRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableRuleRequestFilterSensitiveLog = (obj: EnableRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApiDestinationsRequestFilterSensitiveLog = (obj: ListApiDestinationsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListApiDestinationsResponseFilterSensitiveLog = (obj: ListApiDestinationsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArchivesRequestFilterSensitiveLog = (obj: ListArchivesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListArchivesResponseFilterSensitiveLog = (obj: ListArchivesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectionsRequestFilterSensitiveLog = (obj: ListConnectionsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConnectionFilterSensitiveLog = (obj: Connection): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListConnectionsResponseFilterSensitiveLog = (obj: ListConnectionsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventBusesRequestFilterSensitiveLog = (obj: ListEventBusesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventBusFilterSensitiveLog = (obj: EventBus): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventBusesResponseFilterSensitiveLog = (obj: ListEventBusesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventSourcesRequestFilterSensitiveLog = (obj: ListEventSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EventSourceFilterSensitiveLog = (obj: EventSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListEventSourcesResponseFilterSensitiveLog = (obj: ListEventSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerEventSourceAccountsRequestFilterSensitiveLog = (
  obj: ListPartnerEventSourceAccountsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PartnerEventSourceAccountFilterSensitiveLog = (obj: PartnerEventSourceAccount): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerEventSourceAccountsResponseFilterSensitiveLog = (
  obj: ListPartnerEventSourceAccountsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerEventSourcesRequestFilterSensitiveLog = (obj: ListPartnerEventSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PartnerEventSourceFilterSensitiveLog = (obj: PartnerEventSource): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListPartnerEventSourcesResponseFilterSensitiveLog = (obj: ListPartnerEventSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReplaysRequestFilterSensitiveLog = (obj: ListReplaysRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ReplayFilterSensitiveLog = (obj: Replay): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListReplaysResponseFilterSensitiveLog = (obj: ListReplaysResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRuleNamesByTargetRequestFilterSensitiveLog = (obj: ListRuleNamesByTargetRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRuleNamesByTargetResponseFilterSensitiveLog = (obj: ListRuleNamesByTargetResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesRequestFilterSensitiveLog = (obj: ListRulesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RuleFilterSensitiveLog = (obj: Rule): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListRulesResponseFilterSensitiveLog = (obj: ListRulesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceRequestFilterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsByRuleRequestFilterSensitiveLog = (obj: ListTargetsByRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchArrayPropertiesFilterSensitiveLog = (obj: BatchArrayProperties): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchRetryStrategyFilterSensitiveLog = (obj: BatchRetryStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchParametersFilterSensitiveLog = (obj: BatchParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeadLetterConfigFilterSensitiveLog = (obj: DeadLetterConfig): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityProviderStrategyItemFilterSensitiveLog = (obj: CapacityProviderStrategyItem): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AwsVpcConfigurationFilterSensitiveLog = (obj: AwsVpcConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkConfigurationFilterSensitiveLog = (obj: NetworkConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementConstraintFilterSensitiveLog = (obj: PlacementConstraint): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PlacementStrategyFilterSensitiveLog = (obj: PlacementStrategy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EcsParametersFilterSensitiveLog = (obj: EcsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const HttpParametersFilterSensitiveLog = (obj: HttpParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InputTransformerFilterSensitiveLog = (obj: InputTransformer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const KinesisParametersFilterSensitiveLog = (obj: KinesisParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RedshiftDataParametersFilterSensitiveLog = (obj: RedshiftDataParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RetryPolicyFilterSensitiveLog = (obj: RetryPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunCommandTargetFilterSensitiveLog = (obj: RunCommandTarget): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RunCommandParametersFilterSensitiveLog = (obj: RunCommandParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SageMakerPipelineParameterFilterSensitiveLog = (obj: SageMakerPipelineParameter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SageMakerPipelineParametersFilterSensitiveLog = (obj: SageMakerPipelineParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SqsParametersFilterSensitiveLog = (obj: SqsParameters): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetFilterSensitiveLog = (obj: Target): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ListTargetsByRuleResponseFilterSensitiveLog = (obj: ListTargetsByRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEventsRequestEntryFilterSensitiveLog = (obj: PutEventsRequestEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEventsRequestFilterSensitiveLog = (obj: PutEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEventsResultEntryFilterSensitiveLog = (obj: PutEventsResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutEventsResponseFilterSensitiveLog = (obj: PutEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPartnerEventsRequestEntryFilterSensitiveLog = (obj: PutPartnerEventsRequestEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPartnerEventsRequestFilterSensitiveLog = (obj: PutPartnerEventsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPartnerEventsResultEntryFilterSensitiveLog = (obj: PutPartnerEventsResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPartnerEventsResponseFilterSensitiveLog = (obj: PutPartnerEventsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ConditionFilterSensitiveLog = (obj: Condition): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutPermissionRequestFilterSensitiveLog = (obj: PutPermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRuleRequestFilterSensitiveLog = (obj: PutRuleRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutRuleResponseFilterSensitiveLog = (obj: PutRuleResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTargetsRequestFilterSensitiveLog = (obj: PutTargetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTargetsResultEntryFilterSensitiveLog = (obj: PutTargetsResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutTargetsResponseFilterSensitiveLog = (obj: PutTargetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemovePermissionRequestFilterSensitiveLog = (obj: RemovePermissionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTargetsRequestFilterSensitiveLog = (obj: RemoveTargetsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTargetsResultEntryFilterSensitiveLog = (obj: RemoveTargetsResultEntry): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RemoveTargetsResponseFilterSensitiveLog = (obj: RemoveTargetsResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReplayRequestFilterSensitiveLog = (obj: StartReplayRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartReplayResponseFilterSensitiveLog = (obj: StartReplayResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagResourceResponseFilterSensitiveLog = (obj: TagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestEventPatternRequestFilterSensitiveLog = (obj: TestEventPatternRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TestEventPatternResponseFilterSensitiveLog = (obj: TestEventPatternResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UntagResourceResponseFilterSensitiveLog = (obj: UntagResourceResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApiDestinationRequestFilterSensitiveLog = (obj: UpdateApiDestinationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateApiDestinationResponseFilterSensitiveLog = (obj: UpdateApiDestinationResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateArchiveRequestFilterSensitiveLog = (obj: UpdateArchiveRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateArchiveResponseFilterSensitiveLog = (obj: UpdateArchiveResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionApiKeyAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionApiKeyAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionBasicAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionBasicAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionOAuthClientRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionOAuthClientRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionOAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionOAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionAuthRequestParametersFilterSensitiveLog = (
  obj: UpdateConnectionAuthRequestParameters
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionRequestFilterSensitiveLog = (obj: UpdateConnectionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateConnectionResponseFilterSensitiveLog = (obj: UpdateConnectionResponse): any => ({
  ...obj,
});
