// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

import { MigrationHubRefactorSpacesServiceException as __BaseException } from "./MigrationHubRefactorSpacesServiceException";

/**
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

export enum ApiGatewayEndpointType {
  PRIVATE = "PRIVATE",
  REGIONAL = "REGIONAL",
}

/**
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

export namespace ApiGatewayProxyConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiGatewayProxyConfig): any => ({
    ...obj,
  });
}

/**
 * <p>A wrapper object holding the Amazon API Gateway endpoint input. </p>
 */
export interface ApiGatewayProxyInput {
  /**
   * <p>The type of endpoint to use for the API Gateway proxy. If no value is specified in
   *       the request, the value is set to <code>REGIONAL</code> by default.</p>
   *          <p>If the value is set to <code>PRIVATE</code> in the request, this creates a private API
   *       endpoint that is isolated from the public internet. The private endpoint can only be accessed
   *       by using Amazon Virtual Private Cloud (Amazon VPC) endpoints for Amazon API Gateway that
   *       have been granted access. </p>
   */
  EndpointType?: ApiGatewayEndpointType | string;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   */
  StageName?: string;
}

export namespace ApiGatewayProxyInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiGatewayProxyInput): any => ({
    ...obj,
  });
}

/**
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

export namespace ApiGatewayProxySummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApiGatewayProxySummary): any => ({
    ...obj,
  });
}

export enum ApplicationState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  UPDATING = "UPDATING",
}

export enum ErrorCode {
  INVALID_RESOURCE_STATE = "INVALID_RESOURCE_STATE",
  NOT_AUTHORIZED = "NOT_AUTHORIZED",
  REQUEST_LIMIT_EXCEEDED = "REQUEST_LIMIT_EXCEEDED",
  RESOURCE_CREATION_FAILURE = "RESOURCE_CREATION_FAILURE",
  RESOURCE_DELETION_FAILURE = "RESOURCE_DELETION_FAILURE",
  RESOURCE_IN_USE = "RESOURCE_IN_USE",
  RESOURCE_LIMIT_EXCEEDED = "RESOURCE_LIMIT_EXCEEDED",
  RESOURCE_NOT_FOUND = "RESOURCE_NOT_FOUND",
  RESOURCE_RETRIEVAL_FAILURE = "RESOURCE_RETRIEVAL_FAILURE",
  RESOURCE_UPDATE_FAILURE = "RESOURCE_UPDATE_FAILURE",
  SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE = "SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE",
  STATE_TRANSITION_FAILURE = "STATE_TRANSITION_FAILURE",
}

export enum ErrorResourceType {
  API_GATEWAY = "API_GATEWAY",
  APPLICATION = "APPLICATION",
  ENVIRONMENT = "ENVIRONMENT",
  IAM_ROLE = "IAM_ROLE",
  LAMBDA = "LAMBDA",
  LOAD_BALANCER_LISTENER = "LOAD_BALANCER_LISTENER",
  NLB = "NLB",
  RESOURCE_SHARE = "RESOURCE_SHARE",
  ROUTE = "ROUTE",
  ROUTE_TABLE = "ROUTE_TABLE",
  SECURITY_GROUP = "SECURITY_GROUP",
  SERVICE = "SERVICE",
  SUBNET = "SUBNET",
  TARGET_GROUP = "TARGET_GROUP",
  TRANSIT_GATEWAY = "TRANSIT_GATEWAY",
  TRANSIT_GATEWAY_ATTACHMENT = "TRANSIT_GATEWAY_ATTACHMENT",
  VPC = "VPC",
  VPC_ENDPOINT_SERVICE_CONFIGURATION = "VPC_ENDPOINT_SERVICE_CONFIGURATION",
  VPC_LINK = "VPC_LINK",
}

/**
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
  AdditionalDetails?: { [key: string]: string };
}

export namespace ErrorResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ErrorResponse): any => ({
    ...obj,
  });
}

export enum ProxyType {
  API_GATEWAY = "API_GATEWAY",
}

/**
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
  Tags?: { [key: string]: string };

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

export namespace ApplicationSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ApplicationSummary): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

/**
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
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

export namespace CreateApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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
  Tags?: { [key: string]: string };

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the application is created.</p>
   */
  CreatedTime?: Date;
}

export namespace CreateApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateApplicationResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

/**
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

export enum NetworkFabricType {
  TRANSIT_GATEWAY = "TRANSIT_GATEWAY",
}

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
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

export namespace CreateEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export enum EnvironmentState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

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
  Tags?: { [key: string]: string };

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the environment is created.</p>
   */
  CreatedTime?: Date;
}

export namespace CreateEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateEnvironmentResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export enum RouteType {
  DEFAULT = "DEFAULT",
  URI_PATH = "URI_PATH",
}

export enum RouteActivationState {
  ACTIVE = "ACTIVE",
}

export enum HttpMethod {
  DELETE = "DELETE",
  GET = "GET",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
  PATCH = "PATCH",
  POST = "POST",
  PUT = "PUT",
}

/**
 * <p>The configuration for the URI path route type. </p>
 */
export interface UriPathRouteInput {
  /**
   * <p>The path to use to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application.</p>
   */
  SourcePath: string | undefined;

  /**
   * <p>Indicates whether traffic is forwarded to this route’s service after the route is created.
   *     </p>
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
}

export namespace UriPathRouteInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UriPathRouteInput): any => ({
    ...obj,
  });
}

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
   * <p>The configuration for the URI path route type. </p>
   */
  UriPathRoute?: UriPathRouteInput;

  /**
   * <p>The tags to assign to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

export namespace CreateRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export enum RouteState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
  INACTIVE = "INACTIVE",
  UPDATING = "UPDATING",
}

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
   * <p>onfiguration for the URI path route type. </p>
   */
  UriPathRoute?: UriPathRouteInput;

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the created route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the route is created.</p>
   */
  CreatedTime?: Date;
}

export namespace CreateRouteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateRouteResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export enum ServiceEndpointType {
  LAMBDA = "LAMBDA",
  URL = "URL",
}

/**
 * <p>The input for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   */
  Arn: string | undefined;
}

export namespace LambdaEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaEndpointInput): any => ({
    ...obj,
  });
}

/**
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

export namespace UrlEndpointInput {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UrlEndpointInput): any => ({
    ...obj,
  });
}

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
   * <p>The configuration for the URL endpoint type.</p>
   */
  UrlEndpoint?: UrlEndpointInput;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   */
  LambdaEndpoint?: LambdaEndpointInput;

  /**
   * <p>The tags to assign to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   */
  Tags?: { [key: string]: string };

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   */
  ClientToken?: string;
}

export namespace CreateServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export enum ServiceState {
  ACTIVE = "ACTIVE",
  CREATING = "CREATING",
  DELETING = "DELETING",
  FAILED = "FAILED",
}

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
  Tags?: { [key: string]: string };

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   */
  LastUpdatedTime?: Date;

  /**
   * <p>A timestamp that indicates when the service is created.</p>
   */
  CreatedTime?: Date;
}

export namespace CreateServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: CreateServiceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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

export namespace DeleteApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationRequest): any => ({
    ...obj,
  });
}

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

export namespace DeleteApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteApplicationResponse): any => ({
    ...obj,
  });
}

export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment. </p>
   */
  EnvironmentIdentifier: string | undefined;
}

export namespace DeleteEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentRequest): any => ({
    ...obj,
  });
}

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

export namespace DeleteEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteEnvironmentResponse): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource associated with the policy. </p>
   */
  Identifier: string | undefined;
}

export namespace DeleteResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface DeleteResourcePolicyResponse {}

export namespace DeleteResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteResourcePolicyResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteRequest): any => ({
    ...obj,
  });
}

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

export namespace DeleteRouteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteRouteResponse): any => ({
    ...obj,
  });
}

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

export namespace DeleteServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceRequest): any => ({
    ...obj,
  });
}

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

export namespace DeleteServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeleteServiceResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>The ID of the transit gateway set up by the environment. </p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>The tags assigned to the environment. </p>
   */
  Tags?: { [key: string]: string };

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

export namespace EnvironmentSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentSummary): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

/**
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

export namespace EnvironmentVpc {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EnvironmentVpc): any => ({
    ...obj,
  });
}

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

export namespace GetApplicationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationRequest): any => ({
    ...obj,
  });
}

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
  Tags?: { [key: string]: string };

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

export namespace GetApplicationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetApplicationResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the environment.</p>
   */
  EnvironmentIdentifier: string | undefined;
}

export namespace GetEnvironmentRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentRequest): any => ({
    ...obj,
  });
}

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
   * <p>The ID of the transit gateway set up by the environment. </p>
   */
  TransitGatewayId?: string;

  /**
   * <p>The current state of the environment. </p>
   */
  State?: EnvironmentState | string;

  /**
   * <p>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: { [key: string]: string };

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

export namespace GetEnvironmentResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetEnvironmentResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the policy. </p>
   */
  Identifier: string | undefined;
}

export namespace GetResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface GetResourcePolicyResponse {
  /**
   * <p>A JSON-formatted string for an Amazon Web Services resource-based policy. </p>
   */
  Policy?: string;
}

export namespace GetResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetResourcePolicyResponse): any => ({
    ...obj,
  });
}

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

export namespace GetRouteRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteRequest): any => ({
    ...obj,
  });
}

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
   * <p>The path to use to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. </p>
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
  PathResourceToId?: { [key: string]: string };

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   */
  Tags?: { [key: string]: string };

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
}

export namespace GetRouteResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetRouteResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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

export namespace GetServiceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceRequest): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   */
  Arn?: string;
}

export namespace LambdaEndpointConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaEndpointConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace UrlEndpointConfig {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UrlEndpointConfig): any => ({
    ...obj,
  });
}

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
  Tags?: { [key: string]: string };

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

export namespace GetServiceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetServiceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

/**
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
 * <p>The summary for the Lambda endpoint type. </p>
 */
export interface LambdaEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   */
  Arn?: string;
}

export namespace LambdaEndpointSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: LambdaEndpointSummary): any => ({
    ...obj,
  });
}

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

export namespace ListApplicationsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListApplicationsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListApplicationsResponse): any => ({
    ...obj,
    ...(obj.ApplicationSummaryList && {
      ApplicationSummaryList: obj.ApplicationSummaryList.map((item) => ApplicationSummary.filterSensitiveLog(item)),
    }),
  });
}

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

export namespace ListEnvironmentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListEnvironmentsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentsResponse): any => ({
    ...obj,
    ...(obj.EnvironmentSummaryList && {
      EnvironmentSummaryList: obj.EnvironmentSummaryList.map((item) => EnvironmentSummary.filterSensitiveLog(item)),
    }),
  });
}

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

export namespace ListEnvironmentVpcsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentVpcsRequest): any => ({
    ...obj,
  });
}

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

export namespace ListEnvironmentVpcsResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListEnvironmentVpcsResponse): any => ({
    ...obj,
  });
}

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

export namespace ListRoutesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutesRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>The path to use to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application.</p>
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
  PathResourceToId?: { [key: string]: string };

  /**
   * <p>The current state of the route. </p>
   */
  State?: RouteState | string;

  /**
   * <p>The tags assigned to the route. </p>
   */
  Tags?: { [key: string]: string };

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
}

export namespace RouteSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: RouteSummary): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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

export namespace ListRoutesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListRoutesResponse): any => ({
    ...obj,
    ...(obj.RouteSummaryList && {
      RouteSummaryList: obj.RouteSummaryList.map((item) => RouteSummary.filterSensitiveLog(item)),
    }),
  });
}

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

export namespace ListServicesRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace UrlEndpointSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UrlEndpointSummary): any => ({
    ...obj,
  });
}

/**
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
  Tags?: { [key: string]: string };

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

export namespace ServiceSummary {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ServiceSummary): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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

export namespace ListServicesResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListServicesResponse): any => ({
    ...obj,
    ...(obj.ServiceSummaryList && {
      ServiceSummaryList: obj.ServiceSummaryList.map((item) => ServiceSummary.filterSensitiveLog(item)),
    }),
  });
}

export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   */
  ResourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource. </p>
   */
  Tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

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

export namespace PutResourcePolicyRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyRequest): any => ({
    ...obj,
  });
}

export interface PutResourcePolicyResponse {}

export namespace PutResourcePolicyResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: PutResourcePolicyResponse): any => ({
    ...obj,
  });
}

export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource</p>
   */
  ResourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource. </p>
   */
  Tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
    ...(obj.Tags && { Tags: SENSITIVE_STRING }),
  });
}

export interface TagResourceResponse {}

export namespace TagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

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

export namespace UntagResourceRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
    ...(obj.TagKeys && { TagKeys: SENSITIVE_STRING }),
  });
}

export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
