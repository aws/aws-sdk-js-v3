// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EventBridgeServiceException as __BaseException } from "./EventBridgeServiceException";

/**
 * <p>You do not have the necessary permissions for this action.</p>
 * @public
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
 */
export interface ActivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to activate.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>There is concurrent modification on a rule, target, archive, or replay.</p>
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * @public
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
 * <p>Contains details about an API destination.</p>
 * @public
 */
export interface ApiDestination {
  /**
   * <p>The ARN of the API destination.</p>
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * <p>The name of the API destination.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the API destination.</p>
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * <p>The ARN of the connection specified for the API destination.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The URL to the endpoint for the API destination.</p>
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * <p>The method to use to connect to the HTTP endpoint.</p>
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * <p>The maximum number of invocations per second to send to the HTTP endpoint.</p>
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>Contains the GraphQL operation to be parsed and executed, if the event target is an
 *         AppSync API.</p>
 * @public
 */
export interface AppSyncParameters {
  /**
   * <p>The GraphQL operation; that is, the query, mutation, or subscription to be parsed and
   *       executed by the GraphQL service.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/appsync/latest/devguide/graphql-architecture.html#graphql-operations">Operations</a> in the <i>AppSync User Guide</i>.</p>
   * @public
   */
  GraphQLOperation?: string | undefined;
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
 * <p>An <code>Archive</code> object that contains details about an archive.</p>
 * @public
 */
export interface Archive {
  /**
   * <p>The name of the archive.</p>
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * <p>The ARN of the event bus associated with the archive. Only events from this event bus are
   *       sent to the archive.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The current state of the archive.</p>
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * <p>A description for the reason that the archive is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The number of days to retain events in the archive before they are deleted.</p>
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * <p>The size of the archive, in bytes.</p>
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * <p>The number of events in the archive.</p>
   * @public
   */
  EventCount?: number | undefined;

  /**
   * <p>The time stamp for the time that the archive was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
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
   * <p>The name of the replay to cancel.</p>
   * @public
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
   * <p>The ARN of the replay to cancel.</p>
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * <p>The current state of the replay.</p>
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * <p>The reason that the replay is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * <p>An error occurred because a replay can be canceled only when the state is Running or
 *       Starting.</p>
 * @public
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
   * <p>The name for the API destination to create.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the API destination to create.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the connection to use for the API destination. The destination endpoint must
   *       support the authorization type specified for the connection.</p>
   * @public
   */
  ConnectionArn: string | undefined;

  /**
   * <p>The URL to the HTTP invocation endpoint for the API destination.</p>
   * @public
   */
  InvocationEndpoint: string | undefined;

  /**
   * <p>The method to use for the request to the HTTP invocation endpoint.</p>
   * @public
   */
  HttpMethod: ApiDestinationHttpMethod | undefined;

  /**
   * <p>The maximum number of requests per second to send to the HTTP invocation endpoint.</p>
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface CreateApiDestinationResponse {
  /**
   * <p>The ARN of the API destination that was created by the request.</p>
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * <p>The state of the API destination that was created by the request.</p>
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * <p>A time stamp indicating the time that the API destination was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp indicating the time that the API destination was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>The request failed because it attempted to create resource beyond the allowed service
 *       quota.</p>
 * @public
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
 * @public
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
   * <p>The name for the archive to create.</p>
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * <p>The ARN of the event bus that sends events to the archive.</p>
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A description for the archive.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>An event pattern to use to filter events sent to the archive.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The number of days to retain events for. Default value is 0. If set to 0, events are
   *       retained indefinitely</p>
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this archive. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt the archive.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   *          <important>
   *             <p>If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
   *         customer managed key for any archives for the event bus as well. </p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html">Encrypting archives</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </important>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface CreateArchiveResponse {
  /**
   * <p>The ARN of the archive that was created.</p>
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * <p>The state of the archive that was created.</p>
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * <p>The reason that the archive is in the state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time at which the archive was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>The event pattern is not valid.</p>
 * @public
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
 * <p>The API key authorization parameters for the connection.</p>
 * @public
 */
export interface CreateConnectionApiKeyAuthRequestParameters {
  /**
   * <p>The name of the API key to use for authorization.</p>
   * @public
   */
  ApiKeyName: string | undefined;

  /**
   * <p>The value for the API key to use for authorization.</p>
   * @public
   */
  ApiKeyValue: string | undefined;
}

/**
 * <p>Contains the Basic authorization parameters to use for the connection.</p>
 * @public
 */
export interface CreateConnectionBasicAuthRequestParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   * @public
   */
  Username: string | undefined;

  /**
   * <p>The password associated with the user name to use for Basic authorization.</p>
   * @public
   */
  Password: string | undefined;
}

/**
 * <p>The Amazon Resource Name (ARN) of the Amazon VPC Lattice resource configuration for the resource endpoint.</p>
 * @public
 */
export interface ConnectivityResourceConfigurationArn {
  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon VPC Lattice resource configuration for the resource endpoint.</p>
   * @public
   */
  ResourceConfigurationArn: string | undefined;
}

/**
 * <p>The parameters for EventBridge to use when invoking the resource endpoint.</p>
 * @public
 */
export interface ConnectivityResourceParameters {
  /**
   * <p>The parameters for EventBridge to use when invoking the resource endpoint.</p>
   * @public
   */
  ResourceParameters: ConnectivityResourceConfigurationArn | undefined;
}

/**
 * <p>Additional parameter included in the body. You can include up to 100 additional body
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 * @public
 */
export interface ConnectionBodyParameter {
  /**
   * <p>The key for the parameter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value associated with the key.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Specifies whether the value is secret.</p>
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * <p>Additional parameter included in the header. You can include up to 100 additional header
 *       parameters per request. An event payload cannot exceed 64 KB.</p>
 * @public
 */
export interface ConnectionHeaderParameter {
  /**
   * <p>The key for the parameter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value associated with the key.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Specifies whether the value is a secret.</p>
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * <p>Any additional query string parameter for the connection. You can include up to 100 additional
 *       query string parameters per request. Each additional parameter counts towards the event
 *       payload size, which cannot exceed 64 KB.</p>
 * @public
 */
export interface ConnectionQueryStringParameter {
  /**
   * <p>The key for a query string parameter.</p>
   * @public
   */
  Key?: string | undefined;

  /**
   * <p>The value associated with the key for the query string parameter.</p>
   * @public
   */
  Value?: string | undefined;

  /**
   * <p>Specifies whether the value is secret.</p>
   * @public
   */
  IsValueSecret?: boolean | undefined;
}

/**
 * <p>Any additional parameters for the connection.</p>
 * @public
 */
export interface ConnectionHttpParameters {
  /**
   * <p>Any additional header parameters for the connection.</p>
   * @public
   */
  HeaderParameters?: ConnectionHeaderParameter[] | undefined;

  /**
   * <p>Any additional query string parameters for the connection.</p>
   * @public
   */
  QueryStringParameters?: ConnectionQueryStringParameter[] | undefined;

  /**
   * <p>Any additional body string parameters for the connection.</p>
   * @public
   */
  BodyParameters?: ConnectionBodyParameter[] | undefined;
}

/**
 * <p>The Basic authorization parameters to use for the connection.</p>
 * @public
 */
export interface CreateConnectionOAuthClientRequestParameters {
  /**
   * <p>The client ID to use for OAuth authorization for the connection.</p>
   * @public
   */
  ClientID: string | undefined;

  /**
   * <p>The client secret associated with the client ID to use for OAuth authorization for the
   *       connection.</p>
   * @public
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
 * <p>Contains the OAuth authorization parameters to use for the connection.</p>
 * @public
 */
export interface CreateConnectionOAuthRequestParameters {
  /**
   * <p>The client parameters for OAuth authorization.</p>
   * @public
   */
  ClientParameters: CreateConnectionOAuthClientRequestParameters | undefined;

  /**
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   * @public
   */
  AuthorizationEndpoint: string | undefined;

  /**
   * <p>The method to use for the authorization request.</p>
   * @public
   */
  HttpMethod: ConnectionOAuthHttpMethod | undefined;

  /**
   * <p>Details about the additional
   *       parameters to use for the connection.</p>
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * <p>The authorization parameters for the connection.</p>
 *          <p>You must include only authorization parameters for the <code>AuthorizationType</code> you specify.</p>
 * @public
 */
export interface CreateConnectionAuthRequestParameters {
  /**
   * <p>The Basic
   *       authorization parameters to use for the connection.</p>
   * @public
   */
  BasicAuthParameters?: CreateConnectionBasicAuthRequestParameters | undefined;

  /**
   * <p>The OAuth
   *       authorization parameters to use for the connection.</p>
   * @public
   */
  OAuthParameters?: CreateConnectionOAuthRequestParameters | undefined;

  /**
   * <p>The API
   *       key authorization parameters to use for the connection.</p>
   * @public
   */
  ApiKeyAuthParameters?: CreateConnectionApiKeyAuthRequestParameters | undefined;

  /**
   * <p>The API key authorization
   *       parameters to use for the connection. Note that if you include additional parameters for the
   *       target of a rule via <code>HttpParameters</code>, including query strings, the parameters
   *       added for the connection take precedence.</p>
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;

  /**
   * <p>If you specify a private OAuth endpoint, the parameters for EventBridge to use when authenticating against the endpoint.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html">Authorization methods for connections</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  ConnectivityParameters?: ConnectivityResourceParameters | undefined;
}

/**
 * @public
 */
export interface CreateConnectionRequest {
  /**
   * <p>The name for the connection to create.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the connection to create.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of authorization to use for the connection.</p>
   *          <note>
   *             <p>OAUTH tokens are refreshed when a 401 or 407 response is returned.</p>
   *          </note>
   * @public
   */
  AuthorizationType: ConnectionAuthorizationType | undefined;

  /**
   * <p>The
   *       authorization parameters to use to authorize with the endpoint. </p>
   *          <p>You must include only authorization parameters for the <code>AuthorizationType</code> you specify.</p>
   * @public
   */
  AuthParameters: CreateConnectionAuthRequestParameters | undefined;

  /**
   * <p>For connections to private APIs, the parameters to use for invoking the API.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html">Connecting to private APIs</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  InvocationConnectivityParameters?: ConnectivityResourceParameters | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this connection. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt the connection.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ConnectionState = {
  ACTIVE: "ACTIVE",
  AUTHORIZED: "AUTHORIZED",
  AUTHORIZING: "AUTHORIZING",
  CREATING: "CREATING",
  DEAUTHORIZED: "DEAUTHORIZED",
  DEAUTHORIZING: "DEAUTHORIZING",
  DELETING: "DELETING",
  FAILED_CONNECTIVITY: "FAILED_CONNECTIVITY",
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
   * <p>The ARN of the connection that was created by the request.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The state of the connection that was created by the request.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * <p>This request cannot be completed due to throttling issues.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
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
 * <p>The event buses the endpoint is associated with.</p>
 * @public
 */
export interface EndpointEventBus {
  /**
   * <p>The ARN of the event bus the endpoint is associated with.</p>
   * @public
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
 * <p>Endpoints can replicate all events to the secondary Region.</p>
 * @public
 */
export interface ReplicationConfig {
  /**
   * <p>The state of event replication.</p>
   * @public
   */
  State?: ReplicationState | undefined;
}

/**
 * <p>The primary Region of the endpoint.</p>
 * @public
 */
export interface Primary {
  /**
   * <p>The ARN of the health check used by the endpoint to determine whether failover is
   *       triggered.</p>
   * @public
   */
  HealthCheck: string | undefined;
}

/**
 * <p>The secondary Region that processes events when failover is triggered or replication is
 *       enabled.</p>
 * @public
 */
export interface Secondary {
  /**
   * <p>Defines the secondary Region.</p>
   * @public
   */
  Route: string | undefined;
}

/**
 * <p>The failover configuration for an endpoint. This includes what triggers failover and what
 *       happens when it's triggered.</p>
 * @public
 */
export interface FailoverConfig {
  /**
   * <p>The main Region of the endpoint.</p>
   * @public
   */
  Primary: Primary | undefined;

  /**
   * <p>The Region that events are routed to when failover is triggered or event replication is
   *       enabled.</p>
   * @public
   */
  Secondary: Secondary | undefined;
}

/**
 * <p>The routing configuration of the endpoint.</p>
 * @public
 */
export interface RoutingConfig {
  /**
   * <p>The failover configuration for an endpoint. This includes what triggers failover and what
   *       happens when it's triggered.</p>
   * @public
   */
  FailoverConfig: FailoverConfig | undefined;
}

/**
 * @public
 */
export interface CreateEndpointRequest {
  /**
   * <p>The name of the global endpoint. For example,
   *         <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description of the global endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configure the routing policy, including the health check and secondary Region..</p>
   * @public
   */
  RoutingConfig: RoutingConfig | undefined;

  /**
   * <p>Enable or disable event replication. The default state is <code>ENABLED</code> which means
   *       you must supply a <code>RoleArn</code>. If you don't have a <code>RoleArn</code> or you don't
   *       want event replication enabled, set the state to <code>DISABLED</code>.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>Define the event buses used. </p>
   *          <important>
   *             <p>The names of the event buses must be identical in each Region.</p>
   *          </important>
   * @public
   */
  EventBuses: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used for replication.</p>
   * @public
   */
  RoleArn?: string | undefined;
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
   * <p>The name of the endpoint that was created by this request.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the endpoint that was created by this request.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The routing configuration defined by this request.</p>
   * @public
   */
  RoutingConfig?: RoutingConfig | undefined;

  /**
   * <p>Whether event replication was enabled or disabled by this request.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>The event buses used by this request.</p>
   * @public
   */
  EventBuses?: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used by event replication for this request.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The state of the endpoint that was created by this request.</p>
   * @public
   */
  State?: EndpointState | undefined;
}

/**
 * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
 *       dead-letter queue (DLQ).</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
 *         Guide</i>.</p>
 * @public
 */
export interface DeadLetterConfig {
  /**
   * <p>The ARN of the SQS queue specified as the target for the dead-letter queue.</p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const IncludeDetail = {
  FULL: "FULL",
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type IncludeDetail = (typeof IncludeDetail)[keyof typeof IncludeDetail];

/**
 * @public
 * @enum
 */
export const Level = {
  ERROR: "ERROR",
  INFO: "INFO",
  OFF: "OFF",
  TRACE: "TRACE",
} as const;

/**
 * @public
 */
export type Level = (typeof Level)[keyof typeof Level];

/**
 * <p>The logging configuration settings for the event bus.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
 * @public
 */
export interface LogConfig {
  /**
   * <p>Whether EventBridge include detailed event information in the records it generates.
   *       Detailed data can be useful for troubleshooting and debugging. This information includes details of the event itself, as well as target details.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus-logs.html#eb-event-logs-data">Including detail data in event bus logs</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  IncludeDetail?: IncludeDetail | undefined;

  /**
   * <p>The level of logging detail to include. This applies to all log destinations for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-bus-logs.html#eb-event-bus-logs-level">Specifying event bus log level</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  Level?: Level | undefined;
}

/**
 * <p>A key-value pair associated with an Amazon Web Services resource. In EventBridge,
 *       rules and event buses support tagging.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>A string you can use to assign a value. The combination of tag keys and values can help
   *       you organize and categorize your resources.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>The value for the specified tag key.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface CreateEventBusRequest {
  /**
   * <p>The name of the new event bus. </p>
   *          <p>Custom event bus names can't contain the <code>/</code> character, but you can use the
   *         <code>/</code> character in partner event bus names. In addition, for partner event buses,
   *       the name must exactly match the name of the partner event source that this event bus is
   *       matched to.</p>
   *          <p>You can't use the name <code>default</code> for a custom event bus, as this name is
   *       already used for your account's default event bus.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>If you are creating a partner event bus, this specifies the partner event source that the
   *       new event bus will be matched with.</p>
   * @public
   */
  EventSourceName?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt events on the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   *          <note>
   *             <p>Schema discovery is not supported for event buses encrypted using a
   *         customer managed key. EventBridge returns an error if: </p>
   *             <ul>
   *                <li>
   *                   <p>You call <code>
   *                         <a href="https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#CreateDiscoverer">CreateDiscoverer</a>
   *                      </code> on an event bus set to use a customer managed key for encryption.</p>
   *                </li>
   *                <li>
   *                   <p>You call <code>
   *                         <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdatedEventBus.html">UpdatedEventBus</a>
   *                      </code> to set a customer managed key on an event bus with schema discovery enabled.</p>
   *                </li>
   *             </ul>
   *             <p>To enable schema discovery on an event bus, choose to
   *         use an Amazon Web Services owned key. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption-event-bus-cmkey.html">Encrypting events</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </note>
   *          <important>
   *             <p>If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
   *         customer managed key for any archives for the event bus as well. </p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html">Encrypting archives</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </important>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
   *       dead-letter queue (DLQ).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
   *         Guide</i>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The logging configuration settings for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  LogConfig?: LogConfig | undefined;

  /**
   * <p>Tags to associate with the event bus.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateEventBusResponse {
  /**
   * <p>The ARN of the new event bus.</p>
   * @public
   */
  EventBusArn?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt events on this event bus, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html">Data encryption in EventBridge</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
   *       dead-letter queue (DLQ).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
   *         Guide</i>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The logging configuration settings for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  LogConfig?: LogConfig | undefined;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceRequest {
  /**
   * <p>The name of the partner event source. This name must be unique and must be in the format
   *           <code>
   *                <i>partner_name</i>/<i>event_namespace</i>/<i>event_name</i>
   *             </code>.
   *       The Amazon Web Services account that wants to use this partner event source must create a
   *       partner event bus with a name that matches the name of the partner event source.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID that is permitted to create a matching partner event bus
   *       for this partner event source.</p>
   * @public
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface CreatePartnerEventSourceResponse {
  /**
   * <p>The ARN of the partner event source.</p>
   * @public
   */
  EventSourceArn?: string | undefined;
}

/**
 * @public
 */
export interface DeactivateEventSourceRequest {
  /**
   * <p>The name of the partner event source to deactivate.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionRequest {
  /**
   * <p>The name of the connection to remove authorization from.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeauthorizeConnectionResponse {
  /**
   * <p>The ARN of the connection that authorization was removed from.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The state of the connection.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last updated.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApiDestinationRequest {
  /**
   * <p>The name of the destination to delete.</p>
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
   * <p>The name of the archive to delete.</p>
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
   * <p>The name of the connection to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteConnectionResponse {
  /**
   * <p>The ARN of the connection that was deleted.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The state of the connection before it was deleted.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last modified before it was
   *       deleted.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last authorized before it wa
   *       deleted.</p>
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEndpointRequest {
  /**
   * <p>The name of the endpoint you want to delete. For example,
   *         <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>..</p>
   * @public
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
   * <p>The name of the event bus to delete.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeletePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to delete.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the Amazon Web Services customer that the event source
   *       was created for.</p>
   * @public
   */
  Account: string | undefined;
}

/**
 * @public
 */
export interface DeleteRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you
   *       must specify <code>Force</code> as <code>True</code> to delete the rule. This parameter is
   *       ignored for rules that are not managed rules. You can check whether a rule is a managed rule
   *       by using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *         <code>ManagedBy</code> field of the response.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * <p>This rule was created by an Amazon Web Services service on behalf of your account. It is
 *       managed by that service. If you see this error in response to <code>DeleteRule</code> or
 *         <code>RemoveTargets</code>, you can use the <code>Force</code> parameter in those calls to
 *       delete the rule or remove targets from the rule. You cannot modify these managed rules by
 *       using <code>DisableRule</code>, <code>EnableRule</code>, <code>PutTargets</code>,
 *         <code>PutRule</code>, <code>TagResource</code>, or <code>UntagResource</code>. </p>
 * @public
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
   * <p>The name of the API destination to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeApiDestinationResponse {
  /**
   * <p>The ARN of the API destination retrieved.</p>
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * <p>The name of the API destination retrieved.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the API destination retrieved.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The state of the API destination retrieved.</p>
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * <p>The ARN of the connection specified for the API destination retrieved.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The URL to use to connect to the HTTP endpoint.</p>
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * <p>The method to use to connect to the HTTP endpoint.</p>
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * <p>The maximum number of invocations per second to specified for the API destination. Note
   *       that if you set the invocation rate maximum to a value lower the rate necessary to send all
   *       events received on to the destination HTTP endpoint, some events may not be delivered within
   *       the 24-hour retry window. If you plan to set the rate lower than the rate necessary to deliver
   *       all events, consider using a dead-letter queue to catch events that are not delivered within
   *       24 hours.</p>
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeArchiveRequest {
  /**
   * <p>The name of the archive to retrieve.</p>
   * @public
   */
  ArchiveName: string | undefined;
}

/**
 * @public
 */
export interface DescribeArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * <p>The name of the archive.</p>
   * @public
   */
  ArchiveName?: string | undefined;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The description of the archive.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The event pattern used to filter events sent to the archive.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The state of the archive.</p>
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * <p>The reason that the archive is in the state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt this archive, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html">Encrypting archives</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>The number of days to retain events for in the archive.</p>
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * <p>The size of the archive in bytes.</p>
   * @public
   */
  SizeBytes?: number | undefined;

  /**
   * <p>The number of events in the archive.</p>
   * @public
   */
  EventCount?: number | undefined;

  /**
   * <p>The time at which the archive was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionRequest {
  /**
   * <p>The name of the connection to retrieve.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * <p>Contains the authorization parameters for the connection if API Key is specified as the
 *       authorization type.</p>
 * @public
 */
export interface ConnectionApiKeyAuthResponseParameters {
  /**
   * <p>The name of the header to use for the <code>APIKeyValue</code> used for
   *       authorization.</p>
   * @public
   */
  ApiKeyName?: string | undefined;
}

/**
 * <p>The authorization parameters for the connection if Basic is specified as the
 *       authorization type.</p>
 * @public
 */
export interface ConnectionBasicAuthResponseParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   * @public
   */
  Username?: string | undefined;
}

/**
 * <p>The parameters for EventBridge to use when invoking the resource endpoint.</p>
 * @public
 */
export interface DescribeConnectionResourceParameters {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource configuration for the private API.</p>
   * @public
   */
  ResourceConfigurationArn: string | undefined;

  /**
   * <p>For connections to private APIs, the Amazon Resource Name (ARN) of the resource association EventBridge created between the connection and the private API's resource configuration.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html#connection-private-snra">
   *       Managing service network resource associations for connections</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  ResourceAssociationArn: string | undefined;
}

/**
 * <p>If the connection uses a private OAuth endpoint, the parameters for EventBridge to use when authenticating against the endpoint.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html">Authorization methods for connections</a> in the <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 * @public
 */
export interface DescribeConnectionConnectivityParameters {
  /**
   * <p>The parameters for EventBridge to use when invoking the resource endpoint.</p>
   * @public
   */
  ResourceParameters: DescribeConnectionResourceParameters | undefined;
}

/**
 * <p>The client response parameters for the connection when OAuth is specified as the
 *       authorization type.</p>
 * @public
 */
export interface ConnectionOAuthClientResponseParameters {
  /**
   * <p>The client ID associated with the response to the connection request.</p>
   * @public
   */
  ClientID?: string | undefined;
}

/**
 * <p>The response parameters when OAuth is specified as the authorization type.</p>
 * @public
 */
export interface ConnectionOAuthResponseParameters {
  /**
   * <p>Details about the client parameters returned when OAuth is specified as the authorization type.</p>
   * @public
   */
  ClientParameters?: ConnectionOAuthClientResponseParameters | undefined;

  /**
   * <p>The URL to the HTTP endpoint that authorized the request.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The method used to connect to the HTTP endpoint.</p>
   * @public
   */
  HttpMethod?: ConnectionOAuthHttpMethod | undefined;

  /**
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * <p>Tthe authorization parameters to use for the connection.</p>
 * @public
 */
export interface ConnectionAuthResponseParameters {
  /**
   * <p>The authorization parameters for Basic authorization.</p>
   * @public
   */
  BasicAuthParameters?: ConnectionBasicAuthResponseParameters | undefined;

  /**
   * <p>The OAuth parameters to use for authorization.</p>
   * @public
   */
  OAuthParameters?: ConnectionOAuthResponseParameters | undefined;

  /**
   * <p>The API Key parameters to use for authorization.</p>
   * @public
   */
  ApiKeyAuthParameters?: ConnectionApiKeyAuthResponseParameters | undefined;

  /**
   * <p>Additional parameters for the connection that are passed through with every invocation to
   *       the HTTP endpoint.</p>
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;

  /**
   * <p>For private OAuth authentication endpoints. The parameters EventBridge uses to authenticate against the endpoint.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html">Authorization methods for connections</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  ConnectivityParameters?: DescribeConnectionConnectivityParameters | undefined;
}

/**
 * @public
 */
export interface DescribeConnectionResponse {
  /**
   * <p>The ARN of the connection retrieved.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The name of the connection retrieved.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description for the connection retrieved.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>For connections to private APIs The parameters EventBridge uses to invoke the resource
   *       endpoint.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html">Connecting to private APIs</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  InvocationConnectivityParameters?: DescribeConnectionConnectivityParameters | undefined;

  /**
   * <p>The state of the connection retrieved.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>The reason that the connection is in the current connection state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The type of authorization specified for the connection.</p>
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * <p>The ARN of the secret created from the authorization parameters specified for the
   *       connection.</p>
   * @public
   */
  SecretArn?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt the connection, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-connections.html">Encrypting connections</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>The parameters to use for authorization for the connection.</p>
   * @public
   */
  AuthParameters?: ConnectionAuthResponseParameters | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointRequest {
  /**
   * <p>The name of the endpoint you want to get information about. For example,
   *         <code>"Name":"us-east-2-custom_bus_A-endpoint"</code>.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The primary Region of the endpoint you want to get information about. For example
   *         <code>"HomeRegion": "us-east-1"</code>.</p>
   * @public
   */
  HomeRegion?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEndpointResponse {
  /**
   * <p>The name of the endpoint you asked for information about.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The description of the endpoint you asked for information about.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the endpoint you asked for information about.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The routing configuration of the endpoint you asked for information about.</p>
   * @public
   */
  RoutingConfig?: RoutingConfig | undefined;

  /**
   * <p>Whether replication is enabled or disabled for the endpoint you asked for information
   *       about.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>The event buses being used by the endpoint you asked for information about.</p>
   * @public
   */
  EventBuses?: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used by the endpoint you asked for information about.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The ID of the endpoint you asked for information about.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The URL of the endpoint you asked for information about.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The current state of the endpoint you asked for information about.</p>
   * @public
   */
  State?: EndpointState | undefined;

  /**
   * <p>The reason the endpoint you asked for information about is in its current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time the endpoint you asked for information about was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the endpoint you asked for information about was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusRequest {
  /**
   * <p>The name or ARN of the event bus to show details for. If you omit this, the default event
   *       bus is displayed.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeEventBusResponse {
  /**
   * <p>The name of the event bus. Currently, this is always <code>default</code>.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the account permitted to write events to the current account.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt events on this event bus, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html">Data encryption in EventBridge</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
   *       dead-letter queue (DLQ).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
   *         Guide</i>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The policy that enables the external account to send events to your account.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The logging configuration settings for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  LogConfig?: LogConfig | undefined;

  /**
   * <p>The time the event bus was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the event bus was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeEventSourceRequest {
  /**
   * <p>The name of the partner event source to display the details of.</p>
   * @public
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
   * <p>The ARN of the partner event source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the SaaS partner that created the event source.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time that the event source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that the event source will expire if you do not create a matching event
   *       bus.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>The name of the partner event source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceRequest {
  /**
   * <p>The name of the event source to display.</p>
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribePartnerEventSourceResponse {
  /**
   * <p>The ARN of the event source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReplayRequest {
  /**
   * <p>The name of the replay to retrieve.</p>
   * @public
   */
  ReplayName: string | undefined;
}

/**
 * <p>A <code>ReplayDestination</code> object that contains details about a replay.</p>
 * @public
 */
export interface ReplayDestination {
  /**
   * <p>The ARN of the event bus to replay event to. You can replay events only to the event bus
   *       specified to create the archive.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>A list of ARNs for rules to replay events to.</p>
   * @public
   */
  FilterArns?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeReplayResponse {
  /**
   * <p>The name of the replay.</p>
   * @public
   */
  ReplayName?: string | undefined;

  /**
   * <p>The ARN of the replay.</p>
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * <p>The description of the replay.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The current state of the replay.</p>
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * <p>The reason that the replay is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The ARN of the archive events were replayed from.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>A <code>ReplayDestination</code> object that contains details about the replay.</p>
   * @public
   */
  Destination?: ReplayDestination | undefined;

  /**
   * <p>The time stamp of the first event that was last replayed from the archive.</p>
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * <p>The time stamp for the last event that was replayed from the archive.</p>
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * <p>The time that the event was last replayed.</p>
   * @public
   */
  EventLastReplayedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   * @public
   */
  ReplayStartTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the replay stopped.</p>
   * @public
   */
  ReplayEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface DescribeRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const RuleState = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS: "ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS",
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
   * <p>The name of the rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)".</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>Specifies whether the rule is enabled or disabled.</p>
   * @public
   */
  State?: RuleState | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, this
   *       field displays the principal name of the Amazon Web Services service that created the
   *       rule.</p>
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * <p>The name of the event bus associated with the rule.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The account ID of the user that created the rule. If you use <code>PutRule</code> to put a
   *       rule on an event bus in another account, the other account is the owner of the rule, and the
   *       rule ARN includes the account ID for that account. However, the value for
   *         <code>CreatedBy</code> is the account ID as the account that created the rule in the other
   *       account.</p>
   * @public
   */
  CreatedBy?: string | undefined;
}

/**
 * @public
 */
export interface DisableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface EnableRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface ListApiDestinationsRequest {
  /**
   * <p>A name prefix to filter results returned. Only API destinations with a name that starts
   *       with the prefix are returned.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The ARN of the connection specified for the API destination.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of API destinations to include in the response.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListApiDestinationsResponse {
  /**
   * <p>An array that includes information about each API
   *       destination.</p>
   * @public
   */
  ApiDestinations?: ApiDestination[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListArchivesRequest {
  /**
   * <p>A name prefix to filter the archives returned. Only archives with name that match the
   *       prefix are returned.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The ARN of the event source associated with the archive.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The state of the archive.</p>
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListArchivesResponse {
  /**
   * <p>An array of <code>Archive</code> objects that include details about an archive.</p>
   * @public
   */
  Archives?: Archive[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListConnectionsRequest {
  /**
   * <p>A name prefix to filter results returned. Only connections with a name that starts with
   *       the prefix are returned.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The state of the connection.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of connections to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Contains information about a connection.</p>
 * @public
 */
export interface Connection {
  /**
   * <p>The ARN of the connection.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The name of the connection.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the connection.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>The reason that the connection is in the connection state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The authorization type specified for the connection.</p>
   *          <note>
   *             <p>OAUTH tokens are refreshed when a 401 or 407 response is returned.</p>
   *          </note>
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListConnectionsResponse {
  /**
   * <p>An array of connections objects that include details about the connections.</p>
   * @public
   */
  Connections?: Connection[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEndpointsRequest {
  /**
   * <p>A value that will return a subset of the endpoints associated with this account. For
   *       example, <code>"NamePrefix": "ABC"</code> will return all endpoints with "ABC" in the
   *       name.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The primary Region of the endpoints associated with this account. For example
   *         <code>"HomeRegion": "us-east-1"</code>.</p>
   * @public
   */
  HomeRegion?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results returned by the call.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>A global endpoint used to improve your application's availability by making it
 *       regional-fault tolerant. For more information about global endpoints, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-global-endpoints.html">Making
 *         applications Regional-fault tolerant with global endpoints and event replication</a> in
 *       the <i>
 *                <i>Amazon EventBridge User Guide</i>
 *             </i>.</p>
 * @public
 */
export interface Endpoint {
  /**
   * <p>The name of the endpoint.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>A description for the endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the endpoint.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The routing configuration of the endpoint.</p>
   * @public
   */
  RoutingConfig?: RoutingConfig | undefined;

  /**
   * <p>Whether event replication was enabled or disabled for this endpoint. The default state is
   *         <code>ENABLED</code> which means you must supply a <code>RoleArn</code>. If you don't have a
   *         <code>RoleArn</code> or you don't want event replication enabled, set the state to
   *         <code>DISABLED</code>.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>The event buses being used by the endpoint.</p>
   * @public
   */
  EventBuses?: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used by event replication for the endpoint.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is
   *       https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is
   *       <code>abcde.veo</code>.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The URL of the endpoint.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The current state of the endpoint.</p>
   * @public
   */
  State?: EndpointState | undefined;

  /**
   * <p>The reason the endpoint is in its current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time the endpoint was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The last time the endpoint was modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEndpointsResponse {
  /**
   * <p>The endpoints returned by the call.</p>
   * @public
   */
  Endpoints?: Endpoint[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventBusesRequest {
  /**
   * <p>Specifying this limits the results to only those event buses with names that start with
   *       the specified prefix.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>An event bus receives events from a source, uses rules to evaluate them, applies any
 *       configured input transformation, and routes them to the appropriate target(s). Your account's
 *       default event bus receives events from Amazon Web Services services. A custom event bus can
 *       receive events from your custom applications and services. A partner event bus receives events
 *       from an event source created by an SaaS partner. These events come from the partners services
 *       or applications.</p>
 * @public
 */
export interface EventBus {
  /**
   * <p>The name of the event bus.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the event bus.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The permissions policy of the event bus, describing which other Amazon Web Services
   *       accounts can write events to this event bus.</p>
   * @public
   */
  Policy?: string | undefined;

  /**
   * <p>The time the event bus was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The time the event bus was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListEventBusesResponse {
  /**
   * <p>This list of event buses.</p>
   * @public
   */
  EventBuses?: EventBus[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesRequest {
  /**
   * <p>Specifying this limits the results to only those partner event sources with names that
   *       start with the specified prefix.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events
 *       from the partner's applications or services.</p>
 * @public
 */
export interface EventSource {
  /**
   * <p>The ARN of the event source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the partner that created the event source.</p>
   * @public
   */
  CreatedBy?: string | undefined;

  /**
   * <p>The date and time the event source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that the event source will expire, if the Amazon Web Services account
   *       doesn't create a matching event bus for it.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>The name of the event source.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface ListEventSourcesResponse {
  /**
   * <p>The list of event sources.</p>
   * @public
   */
  EventSources?: EventSource[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsRequest {
  /**
   * <p>The name of the partner event source to display account information about.</p>
   * @public
   */
  EventSourceName: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>Specifying this limits the number of results returned by this operation. The operation
   *       also returns a NextToken which you can use in a subsequent operation to retrieve the next set
   *       of results.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>The Amazon Web Services account that a partner event source has been offered to.</p>
 * @public
 */
export interface PartnerEventSourceAccount {
  /**
   * <p>The Amazon Web Services account ID that the partner event source was offered to.</p>
   * @public
   */
  Account?: string | undefined;

  /**
   * <p>The date and time the event source was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>The date and time that the event source will expire, if the Amazon Web Services account
   *       doesn't create a matching event bus for it.</p>
   * @public
   */
  ExpirationTime?: Date | undefined;

  /**
   * <p>The state of the event source. If it is ACTIVE, you have already created a matching event
   *       bus for this event source, and that event bus is active. If it is PENDING, either you haven't
   *       yet created a matching event bus, or that event bus is deactivated. If it is DELETED, you have
   *       created a matching event bus, but the event source has since been deleted.</p>
   * @public
   */
  State?: EventSourceState | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourceAccountsResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   * @public
   */
  PartnerEventSourceAccounts?: PartnerEventSourceAccount[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesRequest {
  /**
   * <p>If you specify this, the results are limited to only those partner event sources that
   *       start with the string you specify.</p>
   * @public
   */
  NamePrefix: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>pecifying this limits the number of results returned by this operation. The operation also
   *       returns a NextToken which you can use in a subsequent operation to retrieve the next set of
   *       results.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>A partner event source is created by an SaaS partner. If a customer creates a partner
 *       event bus that matches this event source, that Amazon Web Services account can receive events
 *       from the partner's applications or services.</p>
 * @public
 */
export interface PartnerEventSource {
  /**
   * <p>The ARN of the partner event source.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The name of the partner event source.</p>
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface ListPartnerEventSourcesResponse {
  /**
   * <p>The list of partner event sources returned by the operation.</p>
   * @public
   */
  PartnerEventSources?: PartnerEventSource[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListReplaysRequest {
  /**
   * <p>A name prefix to filter the replays returned. Only replays with name that match the prefix
   *       are returned.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The state of the replay.</p>
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * <p>The ARN of the archive from which the events are replayed.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of replays to retrieve.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>A <code>Replay</code> object that contains details about a replay.</p>
 * @public
 */
export interface Replay {
  /**
   * <p>The name of the replay.</p>
   * @public
   */
  ReplayName?: string | undefined;

  /**
   * <p>The ARN of the archive to replay event from.</p>
   * @public
   */
  EventSourceArn?: string | undefined;

  /**
   * <p>The current state of the replay.</p>
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * <p>A description of why the replay is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>A time stamp for the time to start replaying events. This is determined by the time in the
   *       event as described in <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEventsRequestEntry.html#eventbridge-Type-PutEventsRequestEntry-Time">Time</a>.</p>
   * @public
   */
  EventStartTime?: Date | undefined;

  /**
   * <p>A time stamp for the time to start replaying events. Any event with a creation time prior
   *       to the <code>EventEndTime</code> specified is replayed.</p>
   * @public
   */
  EventEndTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the last event was replayed.</p>
   * @public
   */
  EventLastReplayedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the replay started.</p>
   * @public
   */
  ReplayStartTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the replay completed.</p>
   * @public
   */
  ReplayEndTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListReplaysResponse {
  /**
   * <p>An array of <code>Replay</code> objects that contain information about the replay.</p>
   * @public
   */
  Replays?: Replay[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the target resource.</p>
   * @public
   */
  TargetArn: string | undefined;

  /**
   * <p>The name or ARN of the event bus to list rules for. If you omit this, the default event
   *       bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * @public
 */
export interface ListRuleNamesByTargetResponse {
  /**
   * <p>The names of the rules that can invoke the given target.</p>
   * @public
   */
  RuleNames?: string[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesRequest {
  /**
   * <p>The prefix matching the rule name.</p>
   * @public
   */
  NamePrefix?: string | undefined;

  /**
   * <p>The name or ARN of the event bus to list the rules for. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>Contains information about a rule in Amazon EventBridge.</p>
 * @public
 */
export interface Rule {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The event pattern of the rule. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The state of the rule.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>: The rule is disabled. EventBridge does not match any events against the rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: The rule is enabled.
   *           EventBridge matches events against the rule, <i>except</i> for Amazon Web Services management events delivered through CloudTrail.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS</code>: The rule is enabled for all
   *         events, including Amazon Web Services management events delivered through CloudTrail.</p>
   *                <p>Management events provide visibility into management operations that are performed on
   *           resources in your Amazon Web Services account. These are also known as control plane
   *           operations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html#logging-management-events">Logging management events</a> in the <i>CloudTrail User
   *             Guide</i>, and <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-cloudtrail">Filtering management events from Amazon Web Services services</a> in the
   *             <i>
   *                      <i>Amazon EventBridge User Guide</i>
   *                   </i>.</p>
   *                <p>This value is only valid for rules on the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is-how-it-works-concepts.html#eb-bus-concepts-buses">default</a> event bus
   *           or <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-event-bus.html">custom event buses</a>.
   *           It does not apply to <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-saas.html">partner event buses</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: RuleState | undefined;

  /**
   * <p>The description of the rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)", "rate(5 minutes)". For more
   *       information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-rule-schedule.html">Creating an Amazon EventBridge rule
   *         that runs on a schedule</a>.</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the role that is used for target invocation.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>If the rule was created on behalf of your account by an Amazon Web Services service, this
   *       field displays the principal name of the service that created the rule.</p>
   * @public
   */
  ManagedBy?: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface ListRulesResponse {
  /**
   * <p>The rules that match the specified criteria.</p>
   * @public
   */
  Rules?: Rule[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource for which you want to view tags.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tag keys and values associated with the resource you specified</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ListTargetsByRuleRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The token returned by a previous call, which you can use to retrieve the next set of results.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return.</p>
   * @public
   */
  Limit?: number | undefined;
}

/**
 * <p>The array properties for the submitted job, such as the size of the array. The array size
 *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
 *       job. This parameter is used only if the target is an Batch job.</p>
 * @public
 */
export interface BatchArrayProperties {
  /**
   * <p>The size of the array, if this is an array batch job. Valid values are integers between 2
   *       and 10,000.</p>
   * @public
   */
  Size?: number | undefined;
}

/**
 * <p>The retry strategy to use for failed jobs, if the target is an Batch job.
 *       If you specify a retry strategy here, it overrides the retry strategy defined in the job
 *       definition.</p>
 * @public
 */
export interface BatchRetryStrategy {
  /**
   * <p>The number of times to attempt to retry, if the job fails. Valid values are 1–10.</p>
   * @public
   */
  Attempts?: number | undefined;
}

/**
 * <p>The custom parameters to be used when the target is an Batch job.</p>
 * @public
 */
export interface BatchParameters {
  /**
   * <p>The ARN or name of the job definition to use if the event target is an Batch job. This job definition must already exist.</p>
   * @public
   */
  JobDefinition: string | undefined;

  /**
   * <p>The name to use for this execution of the job, if the target is an Batch
   *       job.</p>
   * @public
   */
  JobName: string | undefined;

  /**
   * <p>The array properties for the submitted job, such as the size of the array. The array size
   *       can be between 2 and 10,000. If you specify array properties for a job, it becomes an array
   *       job. This parameter is used only if the target is an Batch job.</p>
   * @public
   */
  ArrayProperties?: BatchArrayProperties | undefined;

  /**
   * <p>The retry strategy to use for failed jobs, if the target is an Batch job.
   *       The retry strategy is the number of times to retry the failed job execution. Valid values are
   *       1–10. When you specify a retry strategy here, it overrides the retry strategy defined in the
   *       job definition.</p>
   * @public
   */
  RetryStrategy?: BatchRetryStrategy | undefined;
}

/**
 * <p>The details of a capacity provider strategy. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_CapacityProviderStrategyItem.html">CapacityProviderStrategyItem</a> in the Amazon ECS API Reference.</p>
 * @public
 */
export interface CapacityProviderStrategyItem {
  /**
   * <p>The short name of the capacity provider.</p>
   * @public
   */
  capacityProvider: string | undefined;

  /**
   * <p>The weight value designates the relative percentage of the total number of tasks launched
   *       that should use the specified capacity provider. The weight value is taken into consideration
   *       after the base value, if defined, is satisfied.</p>
   * @public
   */
  weight?: number | undefined;

  /**
   * <p>The base value designates how many tasks, at a minimum, to run on the specified capacity
   *       provider. Only one capacity provider in a capacity provider strategy can have a base defined.
   *       If no value is specified, the default value of 0 is used. </p>
   * @public
   */
  base?: number | undefined;
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
 * <p>This structure specifies the VPC subnets and security groups for the task, and whether a
 *       public IP address is to be used. This structure is relevant only for ECS tasks that use the
 *         <code>awsvpc</code> network mode.</p>
 * @public
 */
export interface AwsVpcConfiguration {
  /**
   * <p>Specifies the subnets associated with the task. These subnets must all be in the same VPC.
   *       You can specify as many as 16 subnets.</p>
   * @public
   */
  Subnets: string[] | undefined;

  /**
   * <p>Specifies the security groups associated with the task. These security groups must all be
   *       in the same VPC. You can specify as many as five security groups. If you do not specify a
   *       security group, the default security group for the VPC is used.</p>
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * <p>Specifies whether the task's elastic network interface receives a public IP address. You
   *       can specify <code>ENABLED</code> only when <code>LaunchType</code> in
   *         <code>EcsParameters</code> is set to <code>FARGATE</code>.</p>
   * @public
   */
  AssignPublicIp?: AssignPublicIp | undefined;
}

/**
 * <p>This structure specifies the network configuration for an ECS task.</p>
 * @public
 */
export interface NetworkConfiguration {
  /**
   * <p>Use this structure to specify the VPC subnets and security groups for the task, and
   *       whether a public IP address is to be used. This structure is relevant only for ECS tasks that
   *       use the <code>awsvpc</code> network mode.</p>
   * @public
   */
  awsvpcConfiguration?: AwsVpcConfiguration | undefined;
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
 * <p>An object representing a constraint on task placement. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-constraints.html">Task Placement Constraints</a> in the Amazon Elastic Container Service Developer Guide.</p>
 * @public
 */
export interface PlacementConstraint {
  /**
   * <p>The type of constraint. Use distinctInstance to ensure that each task in a particular
   *       group is running on a different container instance. Use memberOf to restrict the selection to
   *       a group of valid candidates. </p>
   * @public
   */
  type?: PlacementConstraintType | undefined;

  /**
   * <p>A cluster query language expression to apply to the constraint. You cannot specify an
   *       expression if the constraint type is <code>distinctInstance</code>. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/cluster-query-language.html">Cluster Query Language</a> in the Amazon Elastic Container Service Developer Guide. </p>
   * @public
   */
  expression?: string | undefined;
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
 * <p>The task placement strategy for a task or service. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-placement-strategies.html">Task Placement Strategies</a> in the Amazon Elastic Container Service Service Developer
 *       Guide.</p>
 * @public
 */
export interface PlacementStrategy {
  /**
   * <p>The type of placement strategy. The random placement strategy randomly places tasks on
   *       available candidates. The spread placement strategy spreads placement across available
   *       candidates evenly based on the field parameter. The binpack strategy places tasks on available
   *       candidates that have the least available amount of the resource that is specified with the
   *       field parameter. For example, if you binpack on memory, a task is placed on the instance with
   *       the least amount of remaining memory (but still enough to run the task). </p>
   * @public
   */
  type?: PlacementStrategyType | undefined;

  /**
   * <p>The field to apply the placement strategy against. For the spread placement strategy,
   *       valid values are instanceId (or host, which has the same effect), or any platform or custom
   *       attribute that is applied to a container instance, such as attribute:ecs.availability-zone.
   *       For the binpack placement strategy, valid values are cpu and memory. For the random placement
   *       strategy, this field is not used. </p>
   * @public
   */
  field?: string | undefined;
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
 * <p>The custom parameters to be used when the target is an Amazon ECS task.</p>
 * @public
 */
export interface EcsParameters {
  /**
   * <p>The ARN of the task definition to use if the event target is an Amazon ECS task. </p>
   * @public
   */
  TaskDefinitionArn: string | undefined;

  /**
   * <p>The number of tasks to create based on <code>TaskDefinition</code>. The default is
   *       1.</p>
   * @public
   */
  TaskCount?: number | undefined;

  /**
   * <p>Specifies the launch type on which your task is running. The launch type that you specify
   *       here must match one of the launch type (compatibilities) of the target task. The
   *         <code>FARGATE</code> value is supported only in the Regions where Fargate
   *       with Amazon ECS is supported. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/AWS-Fargate.html">Fargate on Amazon ECS</a> in the <i>Amazon Elastic Container Service Developer
   *       Guide</i>.</p>
   * @public
   */
  LaunchType?: LaunchType | undefined;

  /**
   * <p>Use this structure if the Amazon ECS task uses the <code>awsvpc</code> network
   *       mode. This structure specifies the VPC subnets and security groups associated with the task,
   *       and whether a public IP address is to be used. This structure is required if
   *         <code>LaunchType</code> is <code>FARGATE</code> because the <code>awsvpc</code> mode is
   *       required for Fargate tasks.</p>
   *          <p>If you specify <code>NetworkConfiguration</code> when the target ECS task does not use the
   *         <code>awsvpc</code> network mode, the task fails.</p>
   * @public
   */
  NetworkConfiguration?: NetworkConfiguration | undefined;

  /**
   * <p>Specifies the platform version for the task. Specify only the numeric portion of the
   *       platform version, such as <code>1.1.0</code>.</p>
   *          <p>This structure is used only if <code>LaunchType</code> is <code>FARGATE</code>. For more
   *       information about valid platform versions, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/platform_versions.html">Fargate
   *         Platform Versions</a> in the <i>Amazon Elastic Container Service Developer
   *       Guide</i>.</p>
   * @public
   */
  PlatformVersion?: string | undefined;

  /**
   * <p>Specifies an ECS task group for the task. The maximum length is 255 characters.</p>
   * @public
   */
  Group?: string | undefined;

  /**
   * <p>The capacity provider strategy to use for the task.</p>
   *          <p>If a <code>capacityProviderStrategy</code> is specified, the <code>launchType</code>
   *       parameter must be omitted. If no <code>capacityProviderStrategy</code> or launchType is
   *       specified, the <code>defaultCapacityProviderStrategy</code> for the cluster is used. </p>
   * @public
   */
  CapacityProviderStrategy?: CapacityProviderStrategyItem[] | undefined;

  /**
   * <p>Specifies whether to enable Amazon ECS managed tags for the task. For more
   *       information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/ecs-using-tags.html">Tagging Your Amazon ECS
   *         Resources</a> in the Amazon Elastic Container Service Developer Guide. </p>
   * @public
   */
  EnableECSManagedTags?: boolean | undefined;

  /**
   * <p>Whether or not to enable the execute command functionality for the containers in this
   *       task. If true, this enables execute command functionality on all containers in the
   *       task.</p>
   * @public
   */
  EnableExecuteCommand?: boolean | undefined;

  /**
   * <p>An array of placement constraint objects to use for the task. You can specify up to 10
   *       constraints per task (including constraints in the task definition and those specified at
   *       runtime).</p>
   * @public
   */
  PlacementConstraints?: PlacementConstraint[] | undefined;

  /**
   * <p>The placement strategy objects to use for the task. You can specify a maximum of five
   *       strategy rules per task. </p>
   * @public
   */
  PlacementStrategy?: PlacementStrategy[] | undefined;

  /**
   * <p>Specifies whether to propagate the tags from the task definition to the task. If no value
   *       is specified, the tags are not propagated. Tags can only be propagated to the task during task
   *       creation. To add tags to a task after task creation, use the TagResource API action. </p>
   * @public
   */
  PropagateTags?: PropagateTags | undefined;

  /**
   * <p>The reference ID to use for the task.</p>
   * @public
   */
  ReferenceId?: string | undefined;

  /**
   * <p>The metadata that you apply to the task to help you categorize and organize them. Each tag
   *       consists of a key and an optional value, both of which you define. To learn more, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/APIReference/API_RunTask.html#ECS-RunTask-request-tags">RunTask</a> in the Amazon ECS API Reference.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>These are custom parameter to be used when the target is an API Gateway APIs or
 *         EventBridge ApiDestinations. In the latter case, these are merged with any
 *       InvocationParameters specified on the Connection, with any values from the Connection taking
 *       precedence.</p>
 * @public
 */
export interface HttpParameters {
  /**
   * <p>The path parameter values to be used to populate API Gateway API or EventBridge ApiDestination path wildcards ("*").</p>
   * @public
   */
  PathParameterValues?: string[] | undefined;

  /**
   * <p>The headers that need to be sent as part of request invoking the API Gateway API or
   *         EventBridge ApiDestination.</p>
   * @public
   */
  HeaderParameters?: Record<string, string> | undefined;

  /**
   * <p>The query string keys/values that need to be sent as part of request invoking the API Gateway API or EventBridge ApiDestination.</p>
   * @public
   */
  QueryStringParameters?: Record<string, string> | undefined;
}

/**
 * <p>Contains the parameters needed for you to provide custom input to a target based on one or
 *       more pieces of data extracted from the event.</p>
 * @public
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
   * @public
   */
  InputPathsMap?: Record<string, string> | undefined;

  /**
   * <p>Input template where you specify placeholders that will be filled with the values of the
   *       keys from <code>InputPathsMap</code> to customize the data sent to the target. Enclose each
   *         <code>InputPathsMaps</code> value in brackets: <<i>value</i>> </p>
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
   * @public
   */
  InputTemplate: string | undefined;
}

/**
 * <p>This object enables you to specify a JSON path to extract from the event and use as the
 *       partition key for the Amazon Kinesis data stream, so that you can control the shard to which
 *       the event goes. If you do not include this parameter, the default is to use the
 *         <code>eventId</code> as the partition key.</p>
 * @public
 */
export interface KinesisParameters {
  /**
   * <p>The JSON path to be extracted from the event and used as the partition key. For more
   *       information, see <a href="https://docs.aws.amazon.com/streams/latest/dev/key-concepts.html#partition-key">Amazon Kinesis Streams Key
   *         Concepts</a> in the <i>Amazon Kinesis Streams Developer Guide</i>.</p>
   * @public
   */
  PartitionKeyPath: string | undefined;
}

/**
 * <p>These are custom parameters to be used when the target is a Amazon Redshift cluster
 *        to invoke the Amazon Redshift Data API
 *       ExecuteStatement based on EventBridge events.</p>
 * @public
 */
export interface RedshiftDataParameters {
  /**
   * <p>The name or ARN of the secret that enables access to the database. Required when
   *       authenticating using Amazon Web Services Secrets Manager.</p>
   * @public
   */
  SecretManagerArn?: string | undefined;

  /**
   * <p>The name of the database. Required when authenticating using temporary credentials.</p>
   * @public
   */
  Database: string | undefined;

  /**
   * <p>The database user name. Required when authenticating using temporary credentials.</p>
   * @public
   */
  DbUser?: string | undefined;

  /**
   * <p>The SQL statement text to run.</p>
   * @public
   */
  Sql?: string | undefined;

  /**
   * <p>The name of the SQL statement. You can name the SQL statement when you create it to
   *       identify the query.</p>
   * @public
   */
  StatementName?: string | undefined;

  /**
   * <p>Indicates whether to send an event back to EventBridge after the SQL statement
   *       runs.</p>
   * @public
   */
  WithEvent?: boolean | undefined;

  /**
   * <p>One or more SQL statements to run. The SQL statements are run as a single transaction.
   *       They run serially in the order of the array. Subsequent SQL statements don't start until the
   *       previous statement in the array completes. If any SQL statement fails, then because they are
   *       run as one transaction, all work is rolled back.</p>
   * @public
   */
  Sqls?: string[] | undefined;
}

/**
 * <p>A <code>RetryPolicy</code> object that includes information about the retry policy
 *       settings.</p>
 * @public
 */
export interface RetryPolicy {
  /**
   * <p>The maximum number of retry attempts to make before the request fails. Retry attempts
   *       continue until either the maximum number of attempts is made or until the duration of the
   *         <code>MaximumEventAgeInSeconds</code> is met.</p>
   * @public
   */
  MaximumRetryAttempts?: number | undefined;

  /**
   * <p>The maximum amount of time, in seconds, to continue to make retry attempts.</p>
   * @public
   */
  MaximumEventAgeInSeconds?: number | undefined;
}

/**
 * <p>Information about the EC2 instances that are to be sent the command, specified as
 *       key-value pairs. Each <code>RunCommandTarget</code> block can include only one key, but this
 *       key may specify multiple values.</p>
 * @public
 */
export interface RunCommandTarget {
  /**
   * <p>Can be either <code>tag:</code>
   *             <i>tag-key</i> or
   *       <code>InstanceIds</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>If <code>Key</code> is <code>tag:</code>
   *             <i>tag-key</i>, <code>Values</code>
   *       is a list of tag values. If <code>Key</code> is <code>InstanceIds</code>, <code>Values</code>
   *       is a list of Amazon EC2 instance IDs.</p>
   * @public
   */
  Values: string[] | undefined;
}

/**
 * <p>This parameter contains the criteria (either InstanceIds or a tag) used to specify which
 *       EC2 instances are to be sent the command. </p>
 * @public
 */
export interface RunCommandParameters {
  /**
   * <p>Currently, we support including only one RunCommandTarget block, which specifies either an
   *       array of InstanceIds or a tag.</p>
   * @public
   */
  RunCommandTargets: RunCommandTarget[] | undefined;
}

/**
 * <p>Name/Value pair of a parameter to start execution of a SageMaker AI Model Building
 *       Pipeline.</p>
 * @public
 */
export interface SageMakerPipelineParameter {
  /**
   * <p>Name of parameter to start execution of a SageMaker AI Model Building
   *       Pipeline.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>Value of parameter to start execution of a SageMaker AI Model Building
   *       Pipeline.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * <p>These are custom parameters to use when the target is a SageMaker AI Model Building
 *       Pipeline that starts based on EventBridge events.</p>
 * @public
 */
export interface SageMakerPipelineParameters {
  /**
   * <p>List of Parameter names and values for SageMaker AI Model Building Pipeline
   *       execution.</p>
   * @public
   */
  PipelineParameterList?: SageMakerPipelineParameter[] | undefined;
}

/**
 * <p>This structure includes the custom parameter to be used when the target is an SQS FIFO
 *       queue.</p>
 * @public
 */
export interface SqsParameters {
  /**
   * <p>The FIFO message group ID to use as the target.</p>
   * @public
   */
  MessageGroupId?: string | undefined;
}

/**
 * <p>Targets are the resources to be invoked when a rule is triggered. For a complete list of
 *       services and resources that can be set as a target, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutTargets.html">PutTargets</a>.</p>
 *          <p>If you are setting the event bus of another account as the target, and that account
 *       granted permission to your account through an organization instead of directly by the account
 *       ID, then you must specify a <code>RoleArn</code> with proper permissions in the
 *         <code>Target</code> structure. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between Amazon Web Services Accounts</a> in the <i>Amazon EventBridge User Guide</i>.</p>
 * @public
 */
export interface Target {
  /**
   * <p>The ID of the target within the specified rule. Use this ID to reference the target when
   *       updating the rule. We recommend using a memorable and unique string.</p>
   * @public
   */
  Id: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target.</p>
   * @public
   */
  Arn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role to be used for this target when the rule is triggered. If
   *       one rule triggers multiple targets, you can use a different IAM role for each target.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>Valid JSON text passed to the target. In this case, nothing from the event itself is
   *       passed to the target. For more information, see <a href="http://www.rfc-editor.org/rfc/rfc7159.txt">The JavaScript Object Notation (JSON) Data
   *         Interchange Format</a>.</p>
   * @public
   */
  Input?: string | undefined;

  /**
   * <p>The value of the JSONPath that is used for extracting part of the matched event when
   *       passing it to the target. You may use JSON dot notation or bracket notation. For more
   *       information about JSON paths, see <a href="http://goessner.net/articles/JsonPath/">JSONPath</a>.</p>
   * @public
   */
  InputPath?: string | undefined;

  /**
   * <p>Settings to enable you to provide custom input to a target based on certain event data.
   *       You can extract one or more key-value pairs from the event and then use that data to send
   *       customized input to the target.</p>
   * @public
   */
  InputTransformer?: InputTransformer | undefined;

  /**
   * <p>The custom parameter you can use to control the shard assignment, when the target is a
   *       Kinesis data stream. If you do not include this parameter, the default is to use the
   *         <code>eventId</code> as the partition key.</p>
   * @public
   */
  KinesisParameters?: KinesisParameters | undefined;

  /**
   * <p>Parameters used when you are using the rule to invoke Amazon EC2 Run Command.</p>
   * @public
   */
  RunCommandParameters?: RunCommandParameters | undefined;

  /**
   * <p>Contains the Amazon ECS task definition and task count to be used, if the event target is
   *       an Amazon ECS task. For more information about Amazon ECS tasks, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_defintions.html">Task
   *         Definitions </a> in the <i>Amazon EC2 Container Service Developer
   *         Guide</i>.</p>
   * @public
   */
  EcsParameters?: EcsParameters | undefined;

  /**
   * <p>If the event target is an Batch job, this contains the job definition, job
   *       name, and other parameters. For more information, see <a href="https://docs.aws.amazon.com/batch/latest/userguide/jobs.html">Jobs</a> in the <i>Batch
   *         User Guide</i>.</p>
   * @public
   */
  BatchParameters?: BatchParameters | undefined;

  /**
   * <p>Contains the message group ID to use when the target is a FIFO queue.</p>
   *          <p>If you specify an SQS FIFO queue as a target, the queue must have content-based
   *       deduplication enabled.</p>
   * @public
   */
  SqsParameters?: SqsParameters | undefined;

  /**
   * <p>Contains the HTTP parameters to use when the target is a API Gateway endpoint or
   *         EventBridge ApiDestination.</p>
   *          <p>If you specify an API Gateway API or EventBridge ApiDestination as a target,
   *       you can use this parameter to specify headers, path parameters, and query string keys/values
   *       as part of your target invoking request. If you're using ApiDestinations, the corresponding
   *       Connection can also have these values configured. In case of any conflicting keys, values from
   *       the Connection take precedence.</p>
   * @public
   */
  HttpParameters?: HttpParameters | undefined;

  /**
   * <p>Contains the Amazon Redshift Data API parameters to use when the target is a Amazon Redshift cluster.</p>
   *          <p>If you specify a Amazon Redshift Cluster as a Target, you can use this to specify
   *       parameters to invoke the Amazon Redshift Data API ExecuteStatement based on EventBridge events.</p>
   * @public
   */
  RedshiftDataParameters?: RedshiftDataParameters | undefined;

  /**
   * <p>Contains the SageMaker AI Model Building Pipeline parameters to start execution of a
   *         SageMaker AI Model Building Pipeline.</p>
   *          <p>If you specify a SageMaker AI Model Building Pipeline as a target, you can use this
   *       to specify parameters to start a pipeline execution based on EventBridge events.</p>
   * @public
   */
  SageMakerPipelineParameters?: SageMakerPipelineParameters | undefined;

  /**
   * <p>The <code>DeadLetterConfig</code> that defines the target queue to send dead-letter queue
   *       events to.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The retry policy configuration to use
   *       for the dead-letter queue.</p>
   * @public
   */
  RetryPolicy?: RetryPolicy | undefined;

  /**
   * <p>Contains the GraphQL operation to be parsed and executed, if the event target is an
   *         AppSync API.</p>
   * @public
   */
  AppSyncParameters?: AppSyncParameters | undefined;
}

/**
 * @public
 */
export interface ListTargetsByRuleResponse {
  /**
   * <p>The targets assigned to the rule.</p>
   * @public
   */
  Targets?: Target[] | undefined;

  /**
   * <p>A token indicating there are more results available. If there are no more results, no token is included in the response.</p>
   *          <p>The value of <code>nextToken</code> is a unique pagination token for each page. To retrieve the next page of results, make the call again using
   *       the returned token. Keep all other arguments unchanged.</p>
   *          <p> Using an expired pagination token results in an <code>HTTP 400 InvalidToken</code> error.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>Represents an event to be submitted.</p>
 * @public
 */
export interface PutEventsRequestEntry {
  /**
   * <p>The time stamp of the event, per <a href="https://www.rfc-editor.org/rfc/rfc3339.txt">RFC3339</a>. If no time stamp is provided, the time stamp of the <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_PutEvents.html">PutEvents</a> call is used.</p>
   * @public
   */
  Time?: Date | undefined;

  /**
   * <p>The source of the event.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns.
   *       Any number, including zero, may be present.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>Free-form string, with a maximum of 128 characters, used to decide what fields to expect
   *       in the event detail.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  DetailType?: string | undefined;

  /**
   * <p>A valid JSON object. There is no other schema imposed. The JSON object may contain fields
   *       and nested sub-objects.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  Detail?: string | undefined;

  /**
   * <p>The name or ARN of the event bus to receive the event. Only the rules that are associated
   *       with this event bus are used to match the event. If you omit this, the default event bus is
   *       used.</p>
   *          <note>
   *             <p>If you're using a global endpoint with a custom bus, you can enter either the name or
   *         Amazon Resource Name (ARN) of the event bus in either the primary or secondary Region here. EventBridge then
   *         determines the corresponding event bus in the other Region based on the endpoint referenced
   *         by the <code>EndpointId</code>. Specifying the event bus ARN is preferred.</p>
   *          </note>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>An X-Ray trace header, which is an http header (X-Amzn-Trace-Id) that
   *       contains the trace-id associated with the event.</p>
   *          <p>To learn more about X-Ray trace headers, see <a href="https://docs.aws.amazon.com/xray/latest/devguide/xray-concepts.html#xray-concepts-tracingheader">Tracing
   *         header</a> in the X-Ray Developer Guide.</p>
   * @public
   */
  TraceHeader?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsRequest {
  /**
   * <p>The entry that defines an event in your system. You can specify several parameters for the
   *       entry such as the source and type of the event, resources associated with the event, and so
   *       on.</p>
   * @public
   */
  Entries: PutEventsRequestEntry[] | undefined;

  /**
   * <p>The URL subdomain of the endpoint. For example, if the URL for Endpoint is
   *       https://abcde.veo.endpoints.event.amazonaws.com, then the EndpointId is
   *       <code>abcde.veo</code>.</p>
   *          <important>
   *             <p>When using Java, you must include <code>auth-crt</code> on the class path.</p>
   *          </important>
   * @public
   */
  EndpointId?: string | undefined;
}

/**
 * <p>Represents the results of an event submitted to an event bus.</p>
 *          <p>If the submission was successful, the entry has the event ID in it. Otherwise, you can use
 *       the error code and error message to identify the problem with the entry.</p>
 *          <p>For information about the errors that are common to all actions, see <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">Common
 *         Errors</a>.</p>
 * @public
 */
export interface PutEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   *          <p>Retryable errors include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>
   *                      <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">InternalFailure</a>
   *                   </code>
   *                </p>
   *                <p>The request processing has failed because of an unknown error, exception or
   *           failure.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>
   *                      <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">ThrottlingException</a>
   *                   </code>
   *                </p>
   *                <p>The request was denied due to request throttling.</p>
   *             </li>
   *          </ul>
   *          <p>Non-retryable errors include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>
   *                      <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/CommonErrors.html">AccessDeniedException</a>
   *                   </code>
   *                </p>
   *                <p>You do not have sufficient access to perform this action.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidAccountIdException</code>
   *                </p>
   *                <p>The account ID provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InvalidArgument</code>
   *                </p>
   *                <p>A specified parameter is not valid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>MalformedDetail</code>
   *                </p>
   *                <p>The JSON provided is not valid.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RedactionFailure</code>
   *                </p>
   *                <p>Redacting the CloudTrail event failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotAuthorizedForSourceException</code>
   *                </p>
   *                <p>You do not have permissions to publish events with this source onto this event
   *           bus.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>NotAuthorizedForDetailTypeException</code>
   *                </p>
   *                <p>You do not have permissions to publish events with this detail type onto this event
   *           bus.</p>
   *             </li>
   *          </ul>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutEventsResponse {
  /**
   * <p>The number of failed entries.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>The successfully and unsuccessfully ingested events results. If the ingestion was
   *       successful, the entry has the event ID in it. Otherwise, you can use the error code and error
   *       message to identify the problem with the entry.</p>
   *          <p>For each record, the index of the response element is the same as the index in the request
   *       array.</p>
   * @public
   */
  Entries?: PutEventsResultEntry[] | undefined;
}

/**
 * <p>The details about an event generated by an SaaS partner.</p>
 * @public
 */
export interface PutPartnerEventsRequestEntry {
  /**
   * <p>The date and time of the event.</p>
   * @public
   */
  Time?: Date | undefined;

  /**
   * <p>The event source that is generating the entry.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  Source?: string | undefined;

  /**
   * <p>Amazon Web Services resources, identified by Amazon Resource Name (ARN), which the event primarily concerns.
   *       Any number, including zero, may be present.</p>
   * @public
   */
  Resources?: string[] | undefined;

  /**
   * <p>A free-form string, with a maximum of 128 characters, used to decide what fields to expect
   *       in the event detail.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  DetailType?: string | undefined;

  /**
   * <p>A valid JSON string. There is no other schema imposed. The JSON string may contain fields
   *       and nested sub-objects.</p>
   *          <note>
   *             <p>
   *                <code>Detail</code>, <code>DetailType</code>, and <code>Source</code> are required for EventBridge to successfully send an event to an event bus.
   *     If you include event entries in a request that do not include each of those properties, EventBridge fails that entry.
   *     If you submit a request in which <i>none</i> of the entries have each of these properties, EventBridge fails the entire request.
   *     </p>
   *          </note>
   * @public
   */
  Detail?: string | undefined;
}

/**
 * @public
 */
export interface PutPartnerEventsRequest {
  /**
   * <p>The list of events to write to the event bus.</p>
   * @public
   */
  Entries: PutPartnerEventsRequestEntry[] | undefined;
}

/**
 * <p>The result of an event entry the partner submitted in this request. If the event was
 *       successfully submitted, the entry has the event ID in it. Otherwise, you can use the error
 *       code and error message to identify the problem with the entry.</p>
 * @public
 */
export interface PutPartnerEventsResultEntry {
  /**
   * <p>The ID of the event.</p>
   * @public
   */
  EventId?: string | undefined;

  /**
   * <p>The error code that indicates why the event submission failed.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that explains why the event submission failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutPartnerEventsResponse {
  /**
   * <p>The number of events from this operation that could not be written to the partner event
   *       bus.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>The results for each event entry the partner submitted in this request. If the event was
   *       successfully submitted, the entry has the event ID in it. Otherwise, you can use the error
   *       code and error message to identify the problem with the entry.</p>
   *          <p>For each record, the index of the response element is the same as the index in the request
   *       array.</p>
   * @public
   */
  Entries?: PutPartnerEventsResultEntry[] | undefined;
}

/**
 * <p>The event bus policy is too long. For more information, see the limits.</p>
 * @public
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
 *       membership in a certain Amazon Web Services organization. The string must contain
 *         <code>Type</code>, <code>Key</code>, and <code>Value</code> fields. The <code>Value</code>
 *       field specifies the ID of the Amazon Web Services organization. Following is an example value
 *       for <code>Condition</code>:</p>
 *          <p>
 *             <code>'\{"Type" : "StringEquals", "Key": "aws:PrincipalOrgID", "Value":
 *         "o-1234567890"\}'</code>
 *          </p>
 * @public
 */
export interface Condition {
  /**
   * <p>Specifies the type of condition. Currently the only supported value is
   *         <code>StringEquals</code>.</p>
   * @public
   */
  Type: string | undefined;

  /**
   * <p>Specifies the key for the condition. Currently the only supported key is
   *         <code>aws:PrincipalOrgID</code>.</p>
   * @public
   */
  Key: string | undefined;

  /**
   * <p>Specifies the value for the key. Currently, this must be the ID of the
   *       organization.</p>
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface PutPermissionRequest {
  /**
   * <p>The name of the event bus associated with the rule. If you omit this, the default event
   *       bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The action that you are enabling the other account to perform.</p>
   * @public
   */
  Action?: string | undefined;

  /**
   * <p>The 12-digit Amazon Web Services account ID that you are permitting to put events to your
   *       default event bus. Specify "*" to permit any account to put events to your default event
   *       bus.</p>
   *          <p>If you specify "*" without specifying <code>Condition</code>, avoid creating rules that
   *       may match undesirable events. To create more secure rules, make sure that the event pattern
   *       for each rule contains an <code>account</code> field with a specific account ID from which to
   *       receive events. Rules with an account field do not match any events sent from other
   *       accounts.</p>
   * @public
   */
  Principal?: string | undefined;

  /**
   * <p>An identifier string for the external account that you are granting permissions to. If you
   *       later want to revoke the permission for this external account, specify this
   *         <code>StatementId</code> when you run <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_RemovePermission.html">RemovePermission</a>.</p>
   *          <note>
   *             <p>Each <code>StatementId</code> must be unique.</p>
   *          </note>
   * @public
   */
  StatementId?: string | undefined;

  /**
   * <p>This parameter enables you to limit the permission to accounts that fulfill a certain
   *       condition, such as being a member of a certain Amazon Web Services organization. For more
   *       information about Amazon Web Services Organizations, see <a href="https://docs.aws.amazon.com/organizations/latest/userguide/orgs_introduction.html">What Is Amazon Web Services
   *         Organizations</a> in the <i>Amazon Web Services Organizations User
   *         Guide</i>.</p>
   *          <p>If you specify <code>Condition</code> with an Amazon Web Services organization ID, and
   *       specify "*" as the value for <code>Principal</code>, you grant permission to all the accounts
   *       in the named organization.</p>
   *          <p>The <code>Condition</code> is a JSON string which must contain <code>Type</code>,
   *         <code>Key</code>, and <code>Value</code> fields.</p>
   * @public
   */
  Condition?: Condition | undefined;

  /**
   * <p>A JSON string that describes the permission policy statement. You can include a
   *         <code>Policy</code> parameter in the request instead of using the <code>StatementId</code>,
   *         <code>Action</code>, <code>Principal</code>, or <code>Condition</code> parameters.</p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface PutRuleRequest {
  /**
   * <p>The name of the rule that you are creating or updating.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The scheduling expression. For example, "cron(0 20 * * ? *)" or "rate(5 minutes)".</p>
   * @public
   */
  ScheduleExpression?: string | undefined;

  /**
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-event-patterns.html">Amazon EventBridge event
   *         patterns</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The state of the rule.</p>
   *          <p>Valid values include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>DISABLED</code>: The rule is disabled. EventBridge does not match any events against the rule.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED</code>: The rule is enabled.
   *           EventBridge matches events against the rule, <i>except</i> for Amazon Web Services management events delivered through CloudTrail.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ENABLED_WITH_ALL_CLOUDTRAIL_MANAGEMENT_EVENTS</code>: The rule is enabled for all
   *         events, including Amazon Web Services management events delivered through CloudTrail.</p>
   *                <p>Management events provide visibility into management operations that are performed on
   *           resources in your Amazon Web Services account. These are also known as control plane
   *           operations. For more information, see <a href="https://docs.aws.amazon.com/awscloudtrail/latest/userguide/logging-management-events-with-cloudtrail.html#logging-management-events">Logging management events</a> in the <i>CloudTrail User
   *             Guide</i>, and <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-service-event.html#eb-service-event-cloudtrail">Filtering management events from Amazon Web Services services</a> in the
   *             <i>
   *                      <i>Amazon EventBridge User Guide</i>
   *                   </i>.</p>
   *                <p>This value is only valid for rules on the <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-what-is-how-it-works-concepts.html#eb-bus-concepts-buses">default</a> event bus
   *           or <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-create-event-bus.html">custom event buses</a>.
   *           It does not apply to <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-saas.html">partner event buses</a>.</p>
   *             </li>
   *          </ul>
   * @public
   */
  State?: RuleState | undefined;

  /**
   * <p>A description of the rule.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the IAM role associated with the rule.</p>
   *          <p>If you're setting an event bus in another account as the target and that account granted
   *       permission to your account through an organization instead of directly by the account ID, you
   *       must specify a <code>RoleArn</code> with proper permissions in the <code>Target</code>
   *       structure, instead of here in this parameter.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the rule.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>The name or ARN of the event bus to associate with this rule. If you omit this, the
   *       default event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface PutRuleResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the rule.</p>
   * @public
   */
  RuleArn?: string | undefined;
}

/**
 * @public
 */
export interface PutTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The targets to update or add to the rule.</p>
   * @public
   */
  Targets: Target[] | undefined;
}

/**
 * <p>Represents a target that failed to be added to a rule.</p>
 * @public
 */
export interface PutTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The error code that indicates why the target addition failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that explains why the target addition failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface PutTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>The failed target entries.</p>
   * @public
   */
  FailedEntries?: PutTargetsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface RemovePermissionRequest {
  /**
   * <p>The statement ID corresponding to the account that is no longer allowed to put events to
   *       the default event bus.</p>
   * @public
   */
  StatementId?: string | undefined;

  /**
   * <p>Specifies whether to remove all permissions.</p>
   * @public
   */
  RemoveAllPermissions?: boolean | undefined;

  /**
   * <p>The name of the event bus to revoke permissions for. If you omit this, the default event
   *       bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTargetsRequest {
  /**
   * <p>The name of the rule.</p>
   * @public
   */
  Rule: string | undefined;

  /**
   * <p>The name or ARN of the event bus associated with the rule. If you omit this, the default
   *       event bus is used.</p>
   * @public
   */
  EventBusName?: string | undefined;

  /**
   * <p>The IDs of the targets to remove from the rule.</p>
   * @public
   */
  Ids: string[] | undefined;

  /**
   * <p>If this is a managed rule, created by an Amazon Web Services service on your behalf, you
   *       must specify <code>Force</code> as <code>True</code> to remove targets. This parameter is
   *       ignored for rules that are not managed rules. You can check whether a rule is a managed rule
   *       by using <code>DescribeRule</code> or <code>ListRules</code> and checking the
   *         <code>ManagedBy</code> field of the response.</p>
   * @public
   */
  Force?: boolean | undefined;
}

/**
 * <p>Represents a target that failed to be removed from a rule.</p>
 * @public
 */
export interface RemoveTargetsResultEntry {
  /**
   * <p>The ID of the target.</p>
   * @public
   */
  TargetId?: string | undefined;

  /**
   * <p>The error code that indicates why the target removal failed. If the value is
   *         <code>ConcurrentModificationException</code>, too many requests were made at the same
   *       time.</p>
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * <p>The error message that explains why the target removal failed.</p>
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface RemoveTargetsResponse {
  /**
   * <p>The number of failed entries.</p>
   * @public
   */
  FailedEntryCount?: number | undefined;

  /**
   * <p>The failed target entries.</p>
   * @public
   */
  FailedEntries?: RemoveTargetsResultEntry[] | undefined;
}

/**
 * @public
 */
export interface StartReplayRequest {
  /**
   * <p>The name of the replay to start.</p>
   * @public
   */
  ReplayName: string | undefined;

  /**
   * <p>A description for the replay to start.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the archive to replay events from.</p>
   * @public
   */
  EventSourceArn: string | undefined;

  /**
   * <p>A time stamp for the time to start replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   * @public
   */
  EventStartTime: Date | undefined;

  /**
   * <p>A time stamp for the time to stop replaying events. Only events that occurred between the
   *         <code>EventStartTime</code> and <code>EventEndTime</code> are replayed.</p>
   * @public
   */
  EventEndTime: Date | undefined;

  /**
   * <p>A <code>ReplayDestination</code> object that includes details about the destination for
   *       the replay.</p>
   * @public
   */
  Destination: ReplayDestination | undefined;
}

/**
 * @public
 */
export interface StartReplayResponse {
  /**
   * <p>The ARN of the replay.</p>
   * @public
   */
  ReplayArn?: string | undefined;

  /**
   * <p>The state of the replay.</p>
   * @public
   */
  State?: ReplayState | undefined;

  /**
   * <p>The reason that the replay is in the state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time at which the replay started.</p>
   * @public
   */
  ReplayStartTime?: Date | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource that you're adding tags to.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * <p>The event pattern. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-and-event-patterns.html">Events and Event
   *         Patterns</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  EventPattern: string | undefined;

  /**
   * <p>The event, in JSON format, to test against the event pattern. The JSON must follow the
   *       format specified in <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/aws-events.html">Amazon Web Services Events</a>, and
   *       the following fields are mandatory:</p>
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
   * @public
   */
  Event: string | undefined;
}

/**
 * @public
 */
export interface TestEventPatternResponse {
  /**
   * <p>Indicates whether the event matches the event pattern.</p>
   * @public
   */
  Result?: boolean | undefined;
}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>The ARN of the EventBridge resource from which you are removing tags.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
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
   * <p>The name of the API destination to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The name of the API destination to update.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ARN of the connection to use for the API destination.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The URL to the endpoint to use for the API destination.</p>
   * @public
   */
  InvocationEndpoint?: string | undefined;

  /**
   * <p>The method to use for the API destination.</p>
   * @public
   */
  HttpMethod?: ApiDestinationHttpMethod | undefined;

  /**
   * <p>The maximum number of invocations per second to send to the API destination.</p>
   * @public
   */
  InvocationRateLimitPerSecond?: number | undefined;
}

/**
 * @public
 */
export interface UpdateApiDestinationResponse {
  /**
   * <p>The ARN of the API destination that was updated.</p>
   * @public
   */
  ApiDestinationArn?: string | undefined;

  /**
   * <p>The state of the API destination that was updated.</p>
   * @public
   */
  ApiDestinationState?: ApiDestinationState | undefined;

  /**
   * <p>A time stamp for the time that the API destination was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the API destination was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateArchiveRequest {
  /**
   * <p>The name of the archive to update.</p>
   * @public
   */
  ArchiveName: string | undefined;

  /**
   * <p>The description for the archive.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The event pattern to use to filter events sent to the archive.</p>
   * @public
   */
  EventPattern?: string | undefined;

  /**
   * <p>The number of days to retain events in the archive.</p>
   * @public
   */
  RetentionDays?: number | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this archive. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt the archive.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   *          <important>
   *             <p>If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
   *         customer managed key for any archives for the event bus as well. </p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html">Encrypting archives</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </important>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateArchiveResponse {
  /**
   * <p>The ARN of the archive.</p>
   * @public
   */
  ArchiveArn?: string | undefined;

  /**
   * <p>The state of the archive.</p>
   * @public
   */
  State?: ArchiveState | undefined;

  /**
   * <p>The reason that the archive is in the current state.</p>
   * @public
   */
  StateReason?: string | undefined;

  /**
   * <p>The time at which the archive was updated.</p>
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * <p>Contains the API key authorization parameters to use to update the connection.</p>
 * @public
 */
export interface UpdateConnectionApiKeyAuthRequestParameters {
  /**
   * <p>The name of the API key to use for authorization.</p>
   * @public
   */
  ApiKeyName?: string | undefined;

  /**
   * <p>The value associated with the API key to use for authorization.</p>
   * @public
   */
  ApiKeyValue?: string | undefined;
}

/**
 * <p>The Basic authorization parameters for the connection.</p>
 * @public
 */
export interface UpdateConnectionBasicAuthRequestParameters {
  /**
   * <p>The user name to use for Basic authorization.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password associated with the user name to use for Basic authorization.</p>
   * @public
   */
  Password?: string | undefined;
}

/**
 * <p>The OAuth authorization parameters to use for the connection.</p>
 * @public
 */
export interface UpdateConnectionOAuthClientRequestParameters {
  /**
   * <p>The client ID to use for OAuth authorization.</p>
   * @public
   */
  ClientID?: string | undefined;

  /**
   * <p>The client secret assciated with the client ID to use for OAuth authorization.</p>
   * @public
   */
  ClientSecret?: string | undefined;
}

/**
 * <p>The OAuth request parameters to use for the connection.</p>
 * @public
 */
export interface UpdateConnectionOAuthRequestParameters {
  /**
   * <p>The
   *       client parameters to use for the connection when OAuth is specified as the authorization
   *       type.</p>
   * @public
   */
  ClientParameters?: UpdateConnectionOAuthClientRequestParameters | undefined;

  /**
   * <p>The URL to the authorization endpoint when OAuth is specified as the authorization
   *       type.</p>
   * @public
   */
  AuthorizationEndpoint?: string | undefined;

  /**
   * <p>The method used to connect to the HTTP endpoint.</p>
   * @public
   */
  HttpMethod?: ConnectionOAuthHttpMethod | undefined;

  /**
   * <p>The additional HTTP parameters used for the OAuth authorization request.</p>
   * @public
   */
  OAuthHttpParameters?: ConnectionHttpParameters | undefined;
}

/**
 * <p>Contains the additional parameters to use for the connection.</p>
 * @public
 */
export interface UpdateConnectionAuthRequestParameters {
  /**
   * <p>The
   *       authorization parameters for Basic authorization.</p>
   * @public
   */
  BasicAuthParameters?: UpdateConnectionBasicAuthRequestParameters | undefined;

  /**
   * <p>The
   *       authorization parameters for OAuth authorization.</p>
   * @public
   */
  OAuthParameters?: UpdateConnectionOAuthRequestParameters | undefined;

  /**
   * <p>The
   *       authorization parameters for API key authorization.</p>
   * @public
   */
  ApiKeyAuthParameters?: UpdateConnectionApiKeyAuthRequestParameters | undefined;

  /**
   * <p>The additional parameters to
   *       use for the connection.</p>
   * @public
   */
  InvocationHttpParameters?: ConnectionHttpParameters | undefined;

  /**
   * <p>If you specify a private OAuth endpoint, the parameters for EventBridge to use when authenticating against the endpoint.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-target-connection-auth.html">Authorization methods for connections</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  ConnectivityParameters?: ConnectivityResourceParameters | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionRequest {
  /**
   * <p>The name of the connection to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the connection.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of authorization to use for the connection.</p>
   * @public
   */
  AuthorizationType?: ConnectionAuthorizationType | undefined;

  /**
   * <p>The authorization parameters to use for the connection.</p>
   * @public
   */
  AuthParameters?: UpdateConnectionAuthRequestParameters | undefined;

  /**
   * <p>For connections to private APIs, the parameters to use for invoking the API.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/connection-private.html">Connecting to private APIs</a> in the <i>
   *                <i>Amazon EventBridge User Guide</i>
   *             </i>.</p>
   * @public
   */
  InvocationConnectivityParameters?: ConnectivityResourceParameters | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this connection. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt the connection.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface UpdateConnectionResponse {
  /**
   * <p>The ARN of the connection that was updated.</p>
   * @public
   */
  ConnectionArn?: string | undefined;

  /**
   * <p>The state of the connection that was updated.</p>
   * @public
   */
  ConnectionState?: ConnectionState | undefined;

  /**
   * <p>A time stamp for the time that the connection was created.</p>
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last modified.</p>
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * <p>A time stamp for the time that the connection was last authorized.</p>
   * @public
   */
  LastAuthorizedTime?: Date | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointRequest {
  /**
   * <p>The name of the endpoint you want to update.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>A description for the endpoint.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configure the routing policy, including the health check and secondary Region.</p>
   * @public
   */
  RoutingConfig?: RoutingConfig | undefined;

  /**
   * <p>Whether event replication was enabled or disabled by this request.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>Define event buses used for replication.</p>
   * @public
   */
  EventBuses?: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used by event replication for this request.</p>
   * @public
   */
  RoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateEndpointResponse {
  /**
   * <p>The name of the endpoint you updated in this request.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The ARN of the endpoint you updated in this request.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The routing configuration you updated in this request.</p>
   * @public
   */
  RoutingConfig?: RoutingConfig | undefined;

  /**
   * <p>Whether event replication was enabled or disabled for the endpoint you updated in this
   *       request.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;

  /**
   * <p>The event buses used for replication for the endpoint you updated in this request.</p>
   * @public
   */
  EventBuses?: EndpointEventBus[] | undefined;

  /**
   * <p>The ARN of the role used by event replication for the endpoint you updated in this
   *       request.</p>
   * @public
   */
  RoleArn?: string | undefined;

  /**
   * <p>The ID of the endpoint you updated in this request.</p>
   * @public
   */
  EndpointId?: string | undefined;

  /**
   * <p>The URL of the endpoint you updated in this request.</p>
   * @public
   */
  EndpointUrl?: string | undefined;

  /**
   * <p>The state of the endpoint you updated in this request.</p>
   * @public
   */
  State?: EndpointState | undefined;
}

/**
 * @public
 */
export interface UpdateEventBusRequest {
  /**
   * <p>The name of the event bus.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt events on this event bus. The identifier can be the key
   *       Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.</p>
   *          <p>If you do not specify a customer managed key identifier, EventBridge uses an
   *         Amazon Web Services owned key to encrypt events on the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html">Identify and view keys</a> in the <i>Key Management Service
   *                                 Developer Guide</i>. </p>
   *          <note>
   *             <p>Schema discovery is not supported for event buses encrypted using a
   *         customer managed key. EventBridge returns an error if: </p>
   *             <ul>
   *                <li>
   *                   <p>You call <code>
   *                         <a href="https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#CreateDiscoverer">CreateDiscoverer</a>
   *                      </code> on an event bus set to use a customer managed key for encryption.</p>
   *                </li>
   *                <li>
   *                   <p>You call <code>
   *                         <a href="https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdatedEventBus.html">UpdatedEventBus</a>
   *                      </code> to set a customer managed key on an event bus with schema discovery enabled.</p>
   *                </li>
   *             </ul>
   *             <p>To enable schema discovery on an event bus, choose to
   *         use an Amazon Web Services owned key. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption-event-bus-cmkey.html">Encrypting events</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </note>
   *          <important>
   *             <p>If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a
   *         customer managed key for any archives for the event bus as well. </p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html">Encrypting archives</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   *          </important>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
   *       dead-letter queue (DLQ).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
   *         Guide</i>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The logging configuration settings for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  LogConfig?: LogConfig | undefined;
}

/**
 * @public
 */
export interface UpdateEventBusResponse {
  /**
   * <p>The event bus Amazon Resource Name (ARN).</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The event bus name.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The identifier of the KMS
   *       customer managed key for EventBridge to use to encrypt events on this event bus, if one has been specified.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html">Data encryption in EventBridge</a> in the <i>Amazon EventBridge User Guide</i>.</p>
   * @public
   */
  KmsKeyIdentifier?: string | undefined;

  /**
   * <p>The event bus description.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>Configuration details of the Amazon SQS queue for EventBridge to use as a
   *       dead-letter queue (DLQ).</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-rule-event-delivery.html#eb-rule-dlq">Using dead-letter queues to process undelivered events</a> in the <i>EventBridge User
   *         Guide</i>.</p>
   * @public
   */
  DeadLetterConfig?: DeadLetterConfig | undefined;

  /**
   * <p>The logging configuration settings for the event bus.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/eb-event-bus-logs.html">Configuring logs for event buses</a> in the <i>EventBridge User Guide</i>.</p>
   * @public
   */
  LogConfig?: LogConfig | undefined;
}

/**
 * @internal
 */
export const AppSyncParametersFilterSensitiveLog = (obj: AppSyncParameters): any => ({
  ...obj,
  ...(obj.GraphQLOperation && { GraphQLOperation: SENSITIVE_STRING }),
});

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
  ...(obj.AppSyncParameters && { AppSyncParameters: AppSyncParametersFilterSensitiveLog(obj.AppSyncParameters) }),
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
