// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { MigrationHubRefactorSpacesServiceException as __BaseException } from "./MigrationHubRefactorSpacesServiceException";

/**
 * @public
 * <p>The user does not have sufficient access to perform this action. </p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
export const ApiGatewayEndpointType = {
  PRIVATE: "PRIVATE",
  REGIONAL: "REGIONAL",
} as const;

/**
 * @public
 */
export type ApiGatewayEndpointType = (typeof ApiGatewayEndpointType)[keyof typeof ApiGatewayEndpointType];

/**
 * @public
 * <p>A wrapper object holding the Amazon API Gateway proxy configuration. </p>
 */
export interface ApiGatewayProxyConfig {
  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   */
  ProxyUrl?: string;

  /**
   * <p>The resource ID of the API Gateway for the proxy. </p>
   */
  ApiGatewayId?: string;

  /**
   * <p>The <code>VpcLink</code> ID of the API Gateway proxy. </p>
   */
  VpcLinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy. </p>
   */
  NlbArn?: string;

  /**
   * <p>The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *     </p>
   */
  NlbName?: string;

  /**
   * <p>The type of API Gateway endpoint created. </p>
   */
  EndpointType?: ApiGatewayEndpointType | string;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   */
  StageName?: string;
}

/**
 * @public
 * <p>A wrapper object holding the Amazon API Gateway endpoint input. </p>
 */
export interface ApiGatewayProxyInput {
  /**
   * <p>The type of endpoint to use for the API Gateway proxy. If no value is specified in
   *       the request, the value is set to <code>REGIONAL</code> by default.</p>
   *          <p>If the value is set to <code>PRIVATE</code> in the request, this creates a private API
   *       endpoint that is isolated from the public internet. The private endpoint can only be accessed
   *       by using Amazon Virtual Private Cloud (Amazon VPC) interface endpoints for the Amazon API Gateway that has been granted access.
   *     For more information about creating a private connection with Refactor Spaces and interface
   *     endpoint (Amazon Web Services PrivateLink) availability, see <a href="https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/vpc-interface-endpoints.html">Access
   *       Refactor Spaces using an interface endpoint (Amazon Web Services PrivateLink)</a>.</p>
   */
  EndpointType?: ApiGatewayEndpointType | string;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   */
  StageName?: string;
}

/**
 * @public
 * <p>A wrapper object holding the Amazon API Gateway proxy summary. </p>
 */
export interface ApiGatewayProxySummary {
  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   */
  ProxyUrl?: string;

  /**
   * <p>The resource ID of the API Gateway for the proxy. </p>
   */
  ApiGatewayId?: string;

  /**
   * <p>The <code>VpcLink</code> ID of the API Gateway proxy. </p>
   */
  VpcLinkId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy. </p>
   */
  NlbArn?: string;

  /**
   * <p>The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *     </p>
   */
  NlbName?: string;

  /**
   * <p>The type of API Gateway endpoint created. </p>
   */
  EndpointType?: ApiGatewayEndpointType | string;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   */
  StageName?: string;
}

/**
 * @public
 * @enum
 */
export const ApplicationState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type ApplicationState = (typeof ApplicationState)[keyof typeof ApplicationState];

/**
 * @public
 * @enum
 */
export const ErrorCode = {
  INVALID_RESOURCE_STATE: "INVALID_RESOURCE_STATE",
  NOT_AUTHORIZED: "NOT_AUTHORIZED",
  REQUEST_LIMIT_EXCEEDED: "REQUEST_LIMIT_EXCEEDED",
  RESOURCE_CREATION_FAILURE: "RESOURCE_CREATION_FAILURE",
  RESOURCE_DELETION_FAILURE: "RESOURCE_DELETION_FAILURE",
  RESOURCE_IN_USE: "RESOURCE_IN_USE",
  RESOURCE_LIMIT_EXCEEDED: "RESOURCE_LIMIT_EXCEEDED",
  RESOURCE_NOT_FOUND: "RESOURCE_NOT_FOUND",
  RESOURCE_RETRIEVAL_FAILURE: "RESOURCE_RETRIEVAL_FAILURE",
  RESOURCE_UPDATE_FAILURE: "RESOURCE_UPDATE_FAILURE",
  SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE: "SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE",
  STATE_TRANSITION_FAILURE: "STATE_TRANSITION_FAILURE",
} as const;

/**
 * @public
 */
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode];

/**
 * @public
 * @enum
 */
export const ErrorResourceType = {
  API_GATEWAY: "API_GATEWAY",
  APPLICATION: "APPLICATION",
  ENVIRONMENT: "ENVIRONMENT",
  IAM_ROLE: "IAM_ROLE",
  LAMBDA: "LAMBDA",
  LOAD_BALANCER_LISTENER: "LOAD_BALANCER_LISTENER",
  NLB: "NLB",
  RESOURCE_SHARE: "RESOURCE_SHARE",
  ROUTE: "ROUTE",
  ROUTE_TABLE: "ROUTE_TABLE",
  SECURITY_GROUP: "SECURITY_GROUP",
  SERVICE: "SERVICE",
  SUBNET: "SUBNET",
  TARGET_GROUP: "TARGET_GROUP",
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT: "TRANSIT_GATEWAY_ATTACHMENT",
  VPC: "VPC",
  VPC_ENDPOINT_SERVICE_CONFIGURATION: "VPC_ENDPOINT_SERVICE_CONFIGURATION",
  VPC_LINK: "VPC_LINK",
} as const;

/**
 * @public
 */
export type ErrorResourceType = (typeof ErrorResourceType)[keyof typeof ErrorResourceType];

/**
 * @public
 * <p>Error associated with a resource returned for a Get or List resource response. </p>
 */
export interface ErrorResponse {
  /**
   * <p>The error code associated with the error. </p>
   */
  Code?: ErrorCode | string;

  /**
   * <p>The message associated with the error. </p>
   */
  Message?: string;

  /**
   * <p>The Amazon Web Services account ID of the resource owner. </p>
   */
  AccountId?: string;

  /**
   * <p>The ID of the resource. </p>
   */
  ResourceIdentifier?: string;

  /**
   * <p>The type of resource. </p>
   */
  ResourceType?: ErrorResourceType | string;

  /**
   * <p>Additional details about the error. </p>
   */
  AdditionalDetails?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ProxyType = {
  API_GATEWAY: "API_GATEWAY",
} as const;

/**
 * @public
 */
export type ProxyType = (typeof ProxyType)[keyof typeof ProxyType];

/**
 * @public
 * <p>The list of <code>ApplicationSummary</code> objects. </p>
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application. </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the application creator. </p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The unique identifier of the application. </p>
   */
  ApplicationId?: string;

  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   */
  VpcId?: string;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   */
  ProxyType?: ProxyType | string;

  /**
   * <p>The endpoint URL of the Amazon API Gateway proxy. </p>
   */
  ApiGatewayProxy?: ApiGatewayProxySummary;

  /**
   * <p>The current state of the application. </p>
   */
  State?: ApplicationState | string;

  /**
   * <p>The tags assigned to the application. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the application resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the application is created. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * <p>Updating or deleting a resource can cause an inconsistent state.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource. </p>
   */
  ResourceType: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name to use for the application. </p>
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC).</p>
   */
  VpcId: string | undefined;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   */
  ProxyType: ProxyType | string | undefined;

  /**
   * <p>A wrapper object holding the API Gateway endpoint type and stage name for the
   *       proxy. </p>
   */
  ApiGatewayProxy?: ApiGatewayProxyInput;

  /**
   * <p>The tags to assign to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of application creator.</p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The unique identifier of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the environment in which the application is created.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the Amazon VPC. </p>
   */
  VpcId?: string;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   */
  ProxyType?: ProxyType | string;

  /**
   * <p>A wrapper object holding the API Gateway endpoint type and stage name for the
   *       proxy. </p>
   */
  ApiGatewayProxy?: ApiGatewayProxyInput;

  /**
   * <p>The current state of the application. </p>
   */
  State?: ApplicationState | string;

  /**
   * <p>The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the application is created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * <p>An unexpected error occurred while processing the request.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The request references a resource that does not exist. </p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource. </p>
   */
  ResourceType: string | undefined;
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
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
  }
}

/**
 * @public
 * <p>The request would cause a service quota to be exceeded. </p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>The ID of the resource. </p>
   */
  ResourceId: string | undefined;

  /**
   * <p>The type of resource. </p>
   */
  ResourceType: string | undefined;

  /**
   * <p>Service quota requirement to identify originating quota. Reached throttling quota
   *       exception. </p>
   */
  QuotaCode?: string;

  /**
   * <p>Service quota requirement to identify originating service. Reached throttling quota
   *       exception service code. </p>
   */
  ServiceCode: string | undefined;
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
    this.Message = opts.Message;
    this.ResourceId = opts.ResourceId;
    this.ResourceType = opts.ResourceType;
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
  }
}

/**
 * @public
 * <p>Request was denied because the request was throttled. </p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * <p>Service quota requirement to identify originating quota. Reached throttling quota
   *       exception. </p>
   */
  QuotaCode?: string;

  /**
   * <p>Service quota requirement to identify originating service. Reached throttling quota
   *       exception service code. </p>
   */
  ServiceCode?: string;

  /**
   * <p>The number of seconds to wait before retrying. </p>
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
    this.QuotaCode = opts.QuotaCode;
    this.ServiceCode = opts.ServiceCode;
    this.RetryAfterSeconds = opts.RetryAfterSeconds;
  }
}

/**
 * @public
 * <p>The input does not satisfy the constraints specified by an Amazon Web Service.
 *     </p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const NetworkFabricType = {
  NONE: "NONE",
  TRANSIT_GATEWAY: "TRANSIT_GATEWAY",
} as const;

/**
 * @public
 */
export type NetworkFabricType = (typeof NetworkFabricType)[keyof typeof NetworkFabricType];

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The name of the environment.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>The network fabric type of the environment.</p>
   */
  NetworkFabricType: NetworkFabricType | string | undefined;

  /**
   * <p>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const EnvironmentState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type EnvironmentState = (typeof EnvironmentState)[keyof typeof EnvironmentState];

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  Arn?: string;

  /**
   * <p>A description of the environment.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The network fabric type of the environment.</p>
   */
  NetworkFabricType?: NetworkFabricType | string;

  /**
   * <p>The Amazon Web Services account ID of environment owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>The tags assigned to the created environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..</p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A timestamp that indicates when the environment was last updated.</p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the environment is created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const RouteActivationState = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
} as const;

/**
 * @public
 */
export type RouteActivationState = (typeof RouteActivationState)[keyof typeof RouteActivationState];

/**
 * @public
 * <p> The configuration for the default route type. </p>
 */
export interface DefaultRouteInput {
  /**
   * <p>If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is created. </p>
   */
  ActivationState?: RouteActivationState | string;
}

/**
 * @public
 * @enum
 */
export const RouteType = {
  DEFAULT: "DEFAULT",
  URI_PATH: "URI_PATH",
} as const;

/**
 * @public
 */
export type RouteType = (typeof RouteType)[keyof typeof RouteType];

/**
 * @public
 * @enum
 */
export const HttpMethod = {
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
export type HttpMethod = (typeof HttpMethod)[keyof typeof HttpMethod];

/**
 * @public
 * <p>The configuration for the URI path route type. </p>
 */
export interface UriPathRouteInput {
  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces.
   *       For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   */
  SourcePath: string | undefined;

  /**
   * <p>If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is created. </p>
   */
  ActivationState: RouteActivationState | string | undefined;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   */
  Methods?: (HttpMethod | string)[];

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service. </p>
   */
  IncludeChildPaths?: boolean;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   */
  AppendSourcePath?: boolean;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * <p>The ID of the environment in which the route is created.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application within which the route is being created.</p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service in which the route is created. Traffic that matches this route is
   *       forwarded to this service.</p>
   */
  ServiceIdentifier: string | undefined;

  /**
   * <p>The route type of the route. <code>DEFAULT</code> indicates that all traffic that does not
   *       match another route is forwarded to the default route. Applications must have a default route
   *       before any other routes can be created. <code>URI_PATH</code> indicates a route that is based
   *       on a URI path.</p>
   */
  RouteType: RouteType | string | undefined;

  /**
   * <p> Configuration for the default route type. </p>
   */
  DefaultRoute?: DefaultRouteInput;

  /**
   * <p>The configuration for the URI path route type. </p>
   */
  UriPathRoute?: UriPathRouteInput;

  /**
   * <p>The tags to assign to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const RouteState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  UPDATING: "UPDATING",
} as const;

/**
 * @public
 */
export type RouteState = (typeof RouteState)[keyof typeof RouteState];

/**
 * @public
 */
export interface CreateRouteResponse {
  /**
   * <p>The unique identifier of the route.</p>
   */
  RouteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the route. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the route creator.</p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The route type of the route.</p>
   */
  RouteType?: RouteType | string;

  /**
   * <p>The ID of service in which the route is created. Traffic that matches this route is
   *       forwarded to this service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the application in which the route is created.</p>
   */
  ApplicationId?: string;

  /**
   * <p>Configuration for the URI path route type. </p>
   */
  UriPathRoute?: UriPathRouteInput;

  /**
   * <p>The current state of the route. Activation state only allows <code>ACTIVE</code> or
   *         <code>INACTIVE</code> as user inputs. <code>FAILED</code> is a route state that is system
   *       generated.</p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the created route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the route is created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * @enum
 */
export const ServiceEndpointType = {
  LAMBDA: "LAMBDA",
  URL: "URL",
} as const;

/**
 * @public
 */
export type ServiceEndpointType = (typeof ServiceEndpointType)[keyof typeof ServiceEndpointType];

/**
 * @public
 * <p>The input for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function or alias.</p>
   */
  Arn: string | undefined;
}

/**
 * @public
 * <p>The configuration for the URL endpoint type. </p>
 */
export interface UrlEndpointInput {
  /**
   * <p>The URL to route traffic to. The URL must be an <a href="https://datatracker.ietf.org/doc/html/rfc3986">rfc3986-formatted URL</a>. If the
   *       host is a domain name, the name must be resolvable over the public internet. If the scheme is
   *         <code>https</code>, the top level domain of the host must be listed in the <a href="https://www.iana.org/domains/root/db">IANA root zone database</a>. </p>
   */
  Url: string | undefined;

  /**
   * <p>The health check URL of the URL endpoint type. If the URL is a public endpoint, the
   *         <code>HealthUrl</code> must also be a public endpoint. If the URL is a private endpoint
   *       inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the
   *       host must be the same as the URL. </p>
   */
  HealthUrl?: string;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * <p>The name of the service.</p>
   */
  Name: string | undefined;

  /**
   * <p>The description of the service.</p>
   */
  Description?: string;

  /**
   * <p>The ID of the environment in which the service is created.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application which the service is created.</p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   */
  VpcId?: string;

  /**
   * <p>The type of endpoint to use for the service. The type can be a URL in a VPC or an Lambda function.</p>
   */
  EndpointType: ServiceEndpointType | string | undefined;

  /**
   * <p>The configuration for the URL endpoint type. When creating a route to a service, Refactor Spaces
   *       automatically resolves the address in the <code>UrlEndpointInput</code> object URL when the
   *       Domain Name System (DNS) time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60
   *       seconds.</p>
   */
  UrlEndpoint?: UrlEndpointInput;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   */
  LambdaEndpoint?: LambdaEndpointInput;

  /**
   * <p>The tags to assign to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

/**
 * @public
 * @enum
 */
export const ServiceState = {
  ACTIVE: "ACTIVE",
  CREATING: "CREATING",
  DELETING: "DELETING",
  FAILED: "FAILED",
} as const;

/**
 * @public
 */
export type ServiceState = (typeof ServiceState)[keyof typeof ServiceState];

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the service creator.</p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The description of the created service.</p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the application that the created service belongs to. </p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the VPC. </p>
   */
  VpcId?: string;

  /**
   * <p>The endpoint type of the service.</p>
   */
  EndpointType?: ServiceEndpointType | string;

  /**
   * <p>The configuration for the URL endpoint type. </p>
   */
  UrlEndpoint?: UrlEndpointInput;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   */
  LambdaEndpoint?: LambdaEndpointInput;

  /**
   * <p>The current state of the service. </p>
   */
  State?: ServiceState | string;

  /**
   * <p>The tags assigned to the created service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the service is created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The unique identifier of the application’s environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The current state of the application. </p>
   */
  State?: ApplicationState | string;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource associated with the policy. </p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyResponse {}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * <p>The ID of the environment to delete the route from.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application to delete the route from.</p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the route to delete.</p>
   */
  RouteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponse {
  /**
   * <p>The ID of the route to delete.</p>
   */
  RouteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the route.</p>
   */
  Arn?: string;

  /**
   * <p>The ID of the service that the route belongs to.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the application that the route belongs to.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * <p>The ID of the environment that the service is in.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>Deletes a Refactor Spaces service.</p>
   *          <note>
   *             <p>The <code>RefactorSpacesSecurityGroup</code> security group must be removed from all
   *         Amazon Web Services resources in the virtual private cloud (VPC) prior to deleting a service with a URL
   *         endpoint in a VPC.</p>
   *          </note>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service to delete.</p>
   */
  ServiceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  Arn?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the application that the service is in.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The current state of the service. </p>
   */
  State?: ServiceState | string;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @public
 * <p>The summary information for environments as a response to <code>ListEnvironments</code>.
 *     </p>
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the environment. </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment. </p>
   */
  Arn?: string;

  /**
   * <p>A description of the environment. </p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The network fabric type of the environment. </p>
   */
  NetworkFabricType?: NetworkFabricType | string;

  /**
   * <p>The Amazon Web Services account ID of the environment owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the Transit Gateway set up by the environment. </p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>The tags assigned to the environment. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the environment resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the environment is created. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * <p>Provides summary information for the <code>EnvironmentVpc</code> resource as a response to
 *         <code>ListEnvironmentVpc</code>.</p>
 */
export interface EnvironmentVpc {
  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the VPC. </p>
   */
  VpcId?: string;

  /**
   * <p>The Amazon Web Services account ID of the virtual private cloud (VPC) owner. </p>
   */
  AccountId?: string;

  /**
   * <p>The list of Amazon Virtual Private Cloud (Amazon VPC) CIDR blocks. </p>
   */
  CidrBlocks?: string[];

  /**
   * <p>The name of the VPC at the time it is added to the environment. </p>
   */
  VpcName?: string;

  /**
   * <p>A timestamp that indicates when the VPC was last updated by the environment. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the VPC is first added to the environment. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the application creator. </p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The unique identifier of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   */
  VpcId?: string;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   */
  ProxyType?: ProxyType | string;

  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   */
  ApiGatewayProxy?: ApiGatewayProxyConfig;

  /**
   * <p>The current state of the application. </p>
   */
  State?: ApplicationState | string;

  /**
   * <p>The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the application resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the application is created. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the environment.</p>
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   */
  Arn?: string;

  /**
   * <p>The description of the environment. </p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The network fabric type of the environment. </p>
   */
  NetworkFabricType?: NetworkFabricType | string;

  /**
   * <p>The Amazon Web Services account ID of the environment owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The ID of the Transit Gateway set up by the environment, if applicable.</p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the environment resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the environment is created. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the policy. </p>
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>A JSON-formatted string for an Amazon Web Services resource-based policy. </p>
   */
  Policy?: string;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * <p>The ID of the environment.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the route.</p>
   */
  RouteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponse {
  /**
   * <p>The unique identifier of the route.</p>
   *          <p>
   *             <b>DEFAULT</b>: All traffic that does not match another route is
   *       forwarded to the default route. Applications must have a default route before any other routes
   *       can be created.</p>
   *          <p>
   *             <b>URI_PATH</b>: A route that is based on a URI path.</p>
   */
  RouteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the route.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the route creator.</p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The type of route.</p>
   */
  RouteType?: RouteType | string;

  /**
   * <p>The unique identifier of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The ID of the application that the route belongs to. </p>
   */
  ApplicationId?: string;

  /**
   * <p>Unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces.
   *       For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   */
  SourcePath?: string;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   */
  Methods?: (HttpMethod | string)[];

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service. </p>
   */
  IncludeChildPaths?: boolean;

  /**
   * <p>A mapping of Amazon API Gateway path resources to resource IDs. </p>
   */
  PathResourceToId?: Record<string, string>;

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the route resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The timestamp of when the route is created. </p>
   */
  CreatedTime?: Date;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   */
  AppendSourcePath?: boolean;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * <p>The ID of the environment.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service.</p>
   */
  ServiceIdentifier: string | undefined;
}

/**
 * @public
 * <p>The configuration for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   */
  Arn?: string;
}

/**
 * @public
 * <p>The configuration for the URL endpoint type. </p>
 */
export interface UrlEndpointConfig {
  /**
   * <p>The HTTP URL endpoint. </p>
   */
  Url?: string;

  /**
   * <p>The health check URL of the URL endpoint type. </p>
   */
  HealthUrl?: string;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the service creator.</p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The description of the service. </p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment.</p>
   */
  EnvironmentId?: string;

  /**
   * <p>The ID of the application.</p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   */
  VpcId?: string;

  /**
   * <p>The endpoint type of the service.</p>
   */
  EndpointType?: ServiceEndpointType | string;

  /**
   * <p>The configuration for the URL endpoint type.</p>
   *          <p>The <b>Url</b> isthe URL of the endpoint type.</p>
   *          <p>The <b>HealthUrl</b> is the health check URL of the endpoint
   *       type. </p>
   */
  UrlEndpoint?: UrlEndpointConfig;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   *          <p>The <b>Arn</b> is the Amazon Resource Name (ARN) of the Lambda function associated with this service. </p>
   */
  LambdaEndpoint?: LambdaEndpointConfig;

  /**
   * <p>The current state of the service. </p>
   */
  State?: ServiceState | string;

  /**
   * <p>The tags assigned to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the service resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>The timestamp of when the service is created.</p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 * <p>The resource policy is not valid.</p>
 */
export class InvalidResourcePolicyException extends __BaseException {
  readonly name: "InvalidResourcePolicyException" = "InvalidResourcePolicyException";
  readonly $fault: "client" = "client";
  Message: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidResourcePolicyException, __BaseException>) {
    super({
      name: "InvalidResourcePolicyException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidResourcePolicyException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The summary for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   */
  Arn?: string;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The list of <code>ApplicationSummary</code> objects. </p>
   */
  ApplicationSummaryList?: ApplicationSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>The list of <code>EnvironmentSummary</code> objects. </p>
   */
  EnvironmentSummaryList?: EnvironmentSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsResponse {
  /**
   * <p>The list of <code>EnvironmentVpc</code> objects. </p>
   */
  EnvironmentVpcList?: EnvironmentVpc[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListRoutesRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary information for the routes as a response to <code>ListRoutes</code>. </p>
 */
export interface RouteSummary {
  /**
   * <p>The unique identifier of the route. </p>
   */
  RouteId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the route. </p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the route creator. </p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>The route type of the route. </p>
   */
  RouteType?: RouteType | string;

  /**
   * <p>The unique identifier of the service. </p>
   */
  ServiceId?: string;

  /**
   * <p>The unique identifier of the application. </p>
   */
  ApplicationId?: string;

  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   */
  SourcePath?: string;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   */
  Methods?: (HttpMethod | string)[];

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service.</p>
   */
  IncludeChildPaths?: boolean;

  /**
   * <p>A mapping of Amazon API Gateway path resources to resource IDs. </p>
   */
  PathResourceToId?: Record<string, string>;

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the route. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the route resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the route is created. </p>
   */
  CreatedTime?: Date;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   */
  AppendSourcePath?: boolean;
}

/**
 * @public
 */
export interface ListRoutesResponse {
  /**
   * <p>The list of <code>RouteSummary</code> objects. </p>
   */
  RouteSummaryList?: RouteSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The summary of the configuration for the URL endpoint type. </p>
 */
export interface UrlEndpointSummary {
  /**
   * <p> The URL to route traffic to. The URL must be an <a href="https://datatracker.ietf.org/doc/html/rfc3986">rfc3986-formatted URL</a>. If the
   *       host is a domain name, the name must be resolvable over the public internet. If the scheme is
   *         <code>https</code>, the top level domain of the host must be listed in the <a href="https://www.iana.org/domains/root/db">IANA root zone database</a>. </p>
   */
  Url?: string;

  /**
   * <p>The health check URL of the URL endpoint type. If the URL is a public endpoint, the
   *         <code>HealthUrl</code> must also be a public endpoint. If the URL is a private endpoint
   *       inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the
   *       host must be the same as the URL.</p>
   */
  HealthUrl?: string;
}

/**
 * @public
 * <p>A summary for the service as a response to <code>ListServices</code>. </p>
 */
export interface ServiceSummary {
  /**
   * <p>The unique identifier of the service. </p>
   */
  ServiceId?: string;

  /**
   * <p>The name of the service. </p>
   */
  Name?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service. </p>
   */
  Arn?: string;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   */
  OwnerAccountId?: string;

  /**
   * <p>The Amazon Web Services account ID of the service creator. </p>
   */
  CreatedByAccountId?: string;

  /**
   * <p>A description of the service. </p>
   */
  Description?: string;

  /**
   * <p>The unique identifier of the environment. </p>
   */
  EnvironmentId?: string;

  /**
   * <p>The unique identifier of the application. </p>
   */
  ApplicationId?: string;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   */
  VpcId?: string;

  /**
   * <p>The endpoint type of the service. </p>
   */
  EndpointType?: ServiceEndpointType | string;

  /**
   * <p>The summary of the configuration for the URL endpoint type. </p>
   */
  UrlEndpoint?: UrlEndpointSummary;

  /**
   * <p>A summary of the configuration for the Lambda endpoint type. </p>
   */
  LambdaEndpoint?: LambdaEndpointSummary;

  /**
   * <p>The current state of the service. </p>
   */
  State?: ServiceState | string;

  /**
   * <p>The tags assigned to the service. </p>
   */
  Tags?: Record<string, string>;

  /**
   * <p>Any error associated with the service resource. </p>
   */
  Error?: ErrorResponse;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the service is created. </p>
   */
  CreatedTime?: Date;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p> The list of <code>ServiceSummary</code> objects. </p>
   */
  ServiceSummaryList?: ServiceSummary[];

  /**
   * <p>The token for the next page of results.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource. </p>
   */
  Tags?: Record<string, string>;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the policy is being attached.
   *     </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>A JSON-formatted string for an Amazon Web Services resource-based policy. </p>
   */
  Policy: string | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyResponse {}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
   */
  Tags: Record<string, string> | undefined;
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
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys of the tags to be removed from the resource. </p>
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
export interface UpdateRouteRequest {
  /**
   * <p> The ID of the environment in which the route is being updated. </p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p> The ID of the application within which the route is being updated. </p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p> The unique identifier of the route to update. </p>
   */
  RouteIdentifier: string | undefined;

  /**
   * <p> If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is updated. </p>
   */
  ActivationState: RouteActivationState | string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResponse {
  /**
   * <p> The unique identifier of the route. </p>
   */
  RouteId?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the route. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>. </p>
   */
  Arn?: string;

  /**
   * <p> The ID of service in which the route was created. Traffic that matches this route is
   *       forwarded to this service. </p>
   */
  ServiceId?: string;

  /**
   * <p> The ID of the application in which the route is being updated. </p>
   */
  ApplicationId?: string;

  /**
   * <p> The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p> A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;
}

/**
 * @internal
 */
export const ApplicationSummaryFilterSensitiveLog = (obj: ApplicationSummary): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateApplicationRequestFilterSensitiveLog = (obj: CreateApplicationRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateApplicationResponseFilterSensitiveLog = (obj: CreateApplicationResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentRequestFilterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateEnvironmentResponseFilterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRouteRequestFilterSensitiveLog = (obj: CreateRouteRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateRouteResponseFilterSensitiveLog = (obj: CreateRouteResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceRequestFilterSensitiveLog = (obj: CreateServiceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateServiceResponseFilterSensitiveLog = (obj: CreateServiceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const EnvironmentSummaryFilterSensitiveLog = (obj: EnvironmentSummary): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetApplicationResponseFilterSensitiveLog = (obj: GetApplicationResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetEnvironmentResponseFilterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetRouteResponseFilterSensitiveLog = (obj: GetRouteResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const GetServiceResponseFilterSensitiveLog = (obj: GetServiceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListApplicationsResponseFilterSensitiveLog = (obj: ListApplicationsResponse): any => ({
  ...obj,
  ...(obj.ApplicationSummaryList && {
    ApplicationSummaryList: obj.ApplicationSummaryList.map((item) => ApplicationSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListEnvironmentsResponseFilterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
  ...obj,
  ...(obj.EnvironmentSummaryList && {
    EnvironmentSummaryList: obj.EnvironmentSummaryList.map((item) => EnvironmentSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const RouteSummaryFilterSensitiveLog = (obj: RouteSummary): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListRoutesResponseFilterSensitiveLog = (obj: ListRoutesResponse): any => ({
  ...obj,
  ...(obj.RouteSummaryList && {
    RouteSummaryList: obj.RouteSummaryList.map((item) => RouteSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ServiceSummaryFilterSensitiveLog = (obj: ServiceSummary): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ListServicesResponseFilterSensitiveLog = (obj: ListServicesResponse): any => ({
  ...obj,
  ...(obj.ServiceSummaryList && {
    ServiceSummaryList: obj.ServiceSummaryList.map((item) => ServiceSummaryFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const ListTagsForResourceResponseFilterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TagResourceRequestFilterSensitiveLog = (obj: TagResourceRequest): any => ({
  ...obj,
  ...(obj.Tags && { Tags: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UntagResourceRequestFilterSensitiveLog = (obj: UntagResourceRequest): any => ({
  ...obj,
  ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
});
