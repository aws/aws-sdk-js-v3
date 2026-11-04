// smithy-typescript generated code
import type {
  ApiGatewayEndpointType,
  ApplicationState,
  EnvironmentState,
  ErrorCode,
  ErrorResourceType,
  HttpMethod,
  NetworkFabricType,
  ProxyType,
  RouteActivationState,
  RouteState,
  RouteType,
  ServiceEndpointType,
  ServiceState,
} from "./enums";

/**
 * A wrapper object holding the Amazon API Gateway proxy configuration.
 *
 * @public
 */
export interface ApiGatewayProxyConfig {
  /**
   * The endpoint URL of the API Gateway proxy.
   *
   * @public
   */
  ProxyUrl?: string | undefined;

  /**
   * The resource ID of the API Gateway for the proxy.
   *
   * @public
   */
  ApiGatewayId?: string | undefined;

  /**
   * The `VpcLink` ID of the API Gateway proxy.
   *
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy.
   *
   * @public
   */
  NlbArn?: string | undefined;

  /**
   * The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *
   * @public
   */
  NlbName?: string | undefined;

  /**
   * The type of API Gateway endpoint created.
   *
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * The name of the API Gateway stage. The name defaults to `prod`.
   *
   * @public
   */
  StageName?: string | undefined;
}

/**
 * A wrapper object holding the Amazon API Gateway endpoint input.
 *
 * @public
 */
export interface ApiGatewayProxyInput {
  /**
   * The type of endpoint to use for the API Gateway proxy. If no value is specified in the request, the value is set to `REGIONAL` by default.
   *
   * If the value is set to `PRIVATE` in the request, this creates a private API endpoint that is isolated from the public internet. The private endpoint can only be accessed by using Amazon Virtual Private Cloud (Amazon VPC) interface endpoints for the Amazon API Gateway that has been granted access. For more information about creating a private connection with Refactor Spaces and interface endpoint (Amazon Web Services PrivateLink) availability, see [Access Refactor Spaces using an interface endpoint (Amazon Web Services PrivateLink)](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/vpc-interface-endpoints.html).
   *
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * The name of the API Gateway stage. The name defaults to `prod`.
   *
   * @public
   */
  StageName?: string | undefined;
}

/**
 * A wrapper object holding the Amazon API Gateway proxy summary.
 *
 * @public
 */
export interface ApiGatewayProxySummary {
  /**
   * The endpoint URL of the API Gateway proxy.
   *
   * @public
   */
  ProxyUrl?: string | undefined;

  /**
   * The resource ID of the API Gateway for the proxy.
   *
   * @public
   */
  ApiGatewayId?: string | undefined;

  /**
   * The `VpcLink` ID of the API Gateway proxy.
   *
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy.
   *
   * @public
   */
  NlbArn?: string | undefined;

  /**
   * The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *
   * @public
   */
  NlbName?: string | undefined;

  /**
   * The type of API Gateway endpoint created.
   *
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * The name of the API Gateway stage. The name defaults to `prod`.
   *
   * @public
   */
  StageName?: string | undefined;
}

/**
 * Error associated with a resource returned for a Get or List resource response.
 *
 * @public
 */
export interface ErrorResponse {
  /**
   * The error code associated with the error.
   *
   * @public
   */
  Code?: ErrorCode | undefined;

  /**
   * The message associated with the error.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The Amazon Web Services account ID of the resource owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The ID of the resource.
   *
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * The type of resource.
   *
   * @public
   */
  ResourceType?: ErrorResourceType | undefined;

  /**
   * Additional details about the error.
   *
   * @public
   */
  AdditionalDetails?: Record<string, string> | undefined;
}

/**
 * The list of `ApplicationSummary` objects.
 *
 * @public
 */
export interface ApplicationSummary {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the application owner (which is always the same as the environment owner account ID).
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the application creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The proxy type of the proxy created within the application.
   *
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * The endpoint URL of the Amazon API Gateway proxy.
   *
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxySummary | undefined;

  /**
   * The current state of the application.
   *
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * The tags assigned to the application.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the application resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the application was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the application is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * The name to use for the application.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * The proxy type of the proxy created within the application.
   *
   * @public
   */
  ProxyType: ProxyType | undefined;

  /**
   * A wrapper object holding the API Gateway endpoint type and stage name for the proxy.
   *
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyInput | undefined;

  /**
   * The tags to assign to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application. The format for this ARN is `arn:aws:refactor-spaces:region:account-id:resource-type/resource-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the application owner (which is always the same as the environment owner account ID).
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of application creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the environment in which the application is created.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the Amazon VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The proxy type of the proxy created within the application.
   *
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * A wrapper object holding the API Gateway endpoint type and stage name for the proxy.
   *
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyInput | undefined;

  /**
   * The current state of the application.
   *
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A timestamp that indicates when the application was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the application is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * The name of the environment.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The network fabric type of the environment.
   *
   * @public
   */
  NetworkFabricType: NetworkFabricType | undefined;

  /**
   * The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The network fabric type of the environment.
   *
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * The Amazon Web Services account ID of environment owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The current state of the environment.
   *
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * The tags assigned to the created environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A timestamp that indicates when the environment was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the environment is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * The configuration for the default route type.
 *
 * @public
 */
export interface DefaultRouteInput {
  /**
   * If set to `ACTIVE`, traffic is forwarded to this route’s service after the route is created.
   *
   * @public
   */
  ActivationState?: RouteActivationState | undefined;
}

/**
 * The configuration for the URI path route type.
 *
 * @public
 */
export interface UriPathRouteInput {
  /**
   * This is the path that Refactor Spaces uses to match traffic. Paths must start with `/` and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path \{user\} represents a path parameter called 'user'.
   *
   * @public
   */
  SourcePath: string | undefined;

  /**
   * If set to `ACTIVE`, traffic is forwarded to this route’s service after the route is created.
   *
   * @public
   */
  ActivationState: RouteActivationState | undefined;

  /**
   * A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
   *
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * Indicates whether to match all subpaths of the given source path. If this value is `false`, requests must match the source path exactly before they are forwarded to this route's service.
   *
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * If set to `true`, this option appends the source path to the service URL endpoint.
   *
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * The ID of the environment in which the route is created.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application within which the route is being created.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the service in which the route is created. Traffic that matches this route is forwarded to this service.
   *
   * @public
   */
  ServiceIdentifier: string | undefined;

  /**
   * The route type of the route. `DEFAULT` indicates that all traffic that does not match another route is forwarded to the default route. Applications must have a default route before any other routes can be created. `URI_PATH` indicates a route that is based on a URI path.
   *
   * @public
   */
  RouteType: RouteType | undefined;

  /**
   * Configuration for the default route type.
   *
   * @public
   */
  DefaultRoute?: DefaultRouteInput | undefined;

  /**
   * The configuration for the URI path route type.
   *
   * @public
   */
  UriPathRoute?: UriPathRouteInput | undefined;

  /**
   * The tags to assign to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResponse {
  /**
   * The unique identifier of the route.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the route. The format for this ARN is `arn:aws:refactor-spaces:region:account-id:resource-type/resource-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The route type of the route.
   *
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * The ID of service in which the route is created. Traffic that matches this route is forwarded to this service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the application in which the route is created.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * Configuration for the URI path route type.
   *
   * @public
   */
  UriPathRoute?: UriPathRouteInput | undefined;

  /**
   * The current state of the route. Activation state only allows `ACTIVE` or `INACTIVE` as user inputs. `FAILED` is a route state that is system generated.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * The tags assigned to the created route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A timestamp that indicates when the route was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the route is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * The input for the Lambda endpoint type.
 *
 * @public
 */
export interface LambdaEndpointInput {
  /**
   * The Amazon Resource Name (ARN) of the Lambda function or alias.
   *
   * @public
   */
  Arn: string | undefined;
}

/**
 * The configuration for the URL endpoint type.
 *
 * @public
 */
export interface UrlEndpointInput {
  /**
   * The URL to route traffic to. The URL must be an [rfc3986-formatted URL](https://datatracker.ietf.org/doc/html/rfc3986). If the host is a domain name, the name must be resolvable over the public internet. If the scheme is `https`, the top level domain of the host must be listed in the [IANA root zone database](https://www.iana.org/domains/root/db).
   *
   * @public
   */
  Url: string | undefined;

  /**
   * The health check URL of the URL endpoint type. If the URL is a public endpoint, the `HealthUrl` must also be a public endpoint. If the URL is a private endpoint inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the host must be the same as the URL.
   *
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * The name of the service.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The description of the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The ID of the environment in which the service is created.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application which the service is created.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The type of endpoint to use for the service. The type can be a URL in a VPC or an Lambda function.
   *
   * @public
   */
  EndpointType: ServiceEndpointType | undefined;

  /**
   * The configuration for the URL endpoint type. When creating a route to a service, Refactor Spaces automatically resolves the address in the `UrlEndpointInput` object URL when the Domain Name System (DNS) time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds.
   *
   * @public
   */
  UrlEndpoint?: UrlEndpointInput | undefined;

  /**
   * The configuration for the Lambda endpoint type.
   *
   * @public
   */
  LambdaEndpoint?: LambdaEndpointInput | undefined;

  /**
   * The tags to assign to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The description of the created service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the application that the created service belongs to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The endpoint type of the service.
   *
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * The configuration for the URL endpoint type.
   *
   * @public
   */
  UrlEndpoint?: UrlEndpointInput | undefined;

  /**
   * The configuration for the Lambda endpoint type.
   *
   * @public
   */
  LambdaEndpoint?: LambdaEndpointInput | undefined;

  /**
   * The current state of the service.
   *
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * The tags assigned to the created service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A timestamp that indicates when the service was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the service is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The unique identifier of the application’s environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The current state of the application.
   *
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * A timestamp that indicates when the environment was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {
  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The current state of the environment.
   *
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * A timestamp that indicates when the environment was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * Amazon Resource Name (ARN) of the resource associated with the policy.
   *
   * @public
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
   * The ID of the environment to delete the route from.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application to delete the route from.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the route to delete.
   *
   * @public
   */
  RouteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponse {
  /**
   * The ID of the route to delete.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the route.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of the service that the route belongs to.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the application that the route belongs to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The current state of the route.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * A timestamp that indicates when the route was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * The ID of the environment that the service is in.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * Deletes a Refactor Spaces service.
   *
   * > **Note:** The `RefactorSpacesSecurityGroup` security group must be removed from all Amazon Web Services resources in the virtual private cloud (VPC) prior to deleting a service with a URL endpoint in a VPC.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the service to delete.
   *
   * @public
   */
  ServiceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the application that the service is in.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The current state of the service.
   *
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * A timestamp that indicates when the service was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * The summary information for environments as a response to `ListEnvironments`.
 *
 * @public
 */
export interface EnvironmentSummary {
  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * A description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The network fabric type of the environment.
   *
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * The Amazon Web Services account ID of the environment owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The ID of the Transit Gateway set up by the environment.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The current state of the environment.
   *
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * The tags assigned to the environment.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the environment resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the environment was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the environment is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * Provides summary information for the `EnvironmentVpc` resource as a response to `ListEnvironmentVpc`.
 *
 * @public
 */
export interface EnvironmentVpc {
  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the VPC.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the virtual private cloud (VPC) owner.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The list of Amazon Virtual Private Cloud (Amazon VPC) CIDR blocks.
   *
   * @public
   */
  CidrBlocks?: string[] | undefined;

  /**
   * The name of the VPC at the time it is added to the environment.
   *
   * @public
   */
  VpcName?: string | undefined;

  /**
   * A timestamp that indicates when the VPC was last updated by the environment.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the VPC is first added to the environment.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the application.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the application owner (which is always the same as the environment owner account ID).
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the application creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The proxy type of the proxy created within the application.
   *
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * The endpoint URL of the API Gateway proxy.
   *
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyConfig | undefined;

  /**
   * The current state of the application.
   *
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the application resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the application was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the application is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * The name of the environment.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the environment.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The description of the environment.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The network fabric type of the environment.
   *
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * The Amazon Web Services account ID of the environment owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The ID of the Transit Gateway set up by the environment, if applicable.
   *
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * The current state of the environment.
   *
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the environment resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the environment was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the environment is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource associated with the policy.
   *
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * A JSON-formatted string for an Amazon Web Services resource-based policy.
   *
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the route.
   *
   * @public
   */
  RouteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponse {
  /**
   * The unique identifier of the route.
   *
   * **DEFAULT**: All traffic that does not match another route is forwarded to the default route. Applications must have a default route before any other routes can be created.
   *
   * **URI_PATH**: A route that is based on a URI path.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the route.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The type of route.
   *
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the application that the route belongs to.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * Unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * This is the path that Refactor Spaces uses to match traffic. Paths must start with `/` and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path \{user\} represents a path parameter called 'user'.
   *
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
   *
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * Indicates whether to match all subpaths of the given source path. If this value is `false`, requests must match the source path exactly before they are forwarded to this route's service.
   *
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * A mapping of Amazon API Gateway path resources to resource IDs.
   *
   * @public
   */
  PathResourceToId?: Record<string, string> | undefined;

  /**
   * The current state of the route.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * The tags assigned to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the route resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the route was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The timestamp of when the route is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * If set to `true`, this option appends the source path to the service URL endpoint.
   *
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The ID of the service.
   *
   * @public
   */
  ServiceIdentifier: string | undefined;
}

/**
 * The configuration for the Lambda endpoint type.
 *
 * @public
 */
export interface LambdaEndpointConfig {
  /**
   * The Amazon Resource Name (ARN) of the Lambda endpoint.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * The configuration for the URL endpoint type.
 *
 * @public
 */
export interface UrlEndpointConfig {
  /**
   * The HTTP URL endpoint.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The health check URL of the URL endpoint type.
   *
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The description of the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The endpoint type of the service.
   *
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * The configuration for the URL endpoint type.
   *
   * The **Url** isthe URL of the endpoint type.
   *
   * The **HealthUrl** is the health check URL of the endpoint type.
   *
   * @public
   */
  UrlEndpoint?: UrlEndpointConfig | undefined;

  /**
   * The configuration for the Lambda endpoint type.
   *
   * The **Arn** is the Amazon Resource Name (ARN) of the Lambda function associated with this service.
   *
   * @public
   */
  LambdaEndpoint?: LambdaEndpointConfig | undefined;

  /**
   * The current state of the service.
   *
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * The tags assigned to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the service resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the service was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * The timestamp of when the service is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * The summary for the Lambda endpoint type.
 *
 * @public
 */
export interface LambdaEndpointSummary {
  /**
   * The Amazon Resource Name (ARN) of the Lambda endpoint.
   *
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * The list of `ApplicationSummary` objects.
   *
   * @public
   */
  ApplicationSummaryList?: ApplicationSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * The list of `EnvironmentSummary` objects.
   *
   * @public
   */
  EnvironmentSummaryList?: EnvironmentSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsResponse {
  /**
   * The list of `EnvironmentVpc` objects.
   *
   * @public
   */
  EnvironmentVpcList?: EnvironmentVpc[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutesRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary information for the routes as a response to `ListRoutes`.
 *
 * @public
 */
export interface RouteSummary {
  /**
   * The unique identifier of the route.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the route.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the route creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * The route type of the route.
   *
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * This is the path that Refactor Spaces uses to match traffic. Paths must start with `/` and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path \{user\} represents a path parameter called 'user'.
   *
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
   *
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * Indicates whether to match all subpaths of the given source path. If this value is `false`, requests must match the source path exactly before they are forwarded to this route's service.
   *
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * A mapping of Amazon API Gateway path resources to resource IDs.
   *
   * @public
   */
  PathResourceToId?: Record<string, string> | undefined;

  /**
   * The current state of the route.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * The tags assigned to the route.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the route resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the route was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the route is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * If set to `true`, this option appends the source path to the service URL endpoint.
   *
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRoutesResponse {
  /**
   * The list of `RouteSummary` objects.
   *
   * @public
   */
  RouteSummaryList?: RouteSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * The ID of the environment.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The summary of the configuration for the URL endpoint type.
 *
 * @public
 */
export interface UrlEndpointSummary {
  /**
   * The URL to route traffic to. The URL must be an [rfc3986-formatted URL](https://datatracker.ietf.org/doc/html/rfc3986). If the host is a domain name, the name must be resolvable over the public internet. If the scheme is `https`, the top level domain of the host must be listed in the [IANA root zone database](https://www.iana.org/domains/root/db).
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The health check URL of the URL endpoint type. If the URL is a public endpoint, the `HealthUrl` must also be a public endpoint. If the URL is a private endpoint inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the host must be the same as the URL.
   *
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * A summary for the service as a response to `ListServices`.
 *
 * @public
 */
export interface ServiceSummary {
  /**
   * The unique identifier of the service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The name of the service.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service owner.
   *
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * The Amazon Web Services account ID of the service creator.
   *
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * A description of the service.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique identifier of the environment.
   *
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * The unique identifier of the application.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The ID of the virtual private cloud (VPC).
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The endpoint type of the service.
   *
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * The summary of the configuration for the URL endpoint type.
   *
   * @public
   */
  UrlEndpoint?: UrlEndpointSummary | undefined;

  /**
   * A summary of the configuration for the Lambda endpoint type.
   *
   * @public
   */
  LambdaEndpoint?: LambdaEndpointSummary | undefined;

  /**
   * The current state of the service.
   *
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * The tags assigned to the service.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * Any error associated with the service resource.
   *
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * A timestamp that indicates when the service was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * A timestamp that indicates when the service is created.
   *
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * The list of `ServiceSummary` objects.
   *
   * @public
   */
  ServiceSummaryList?: ServiceSummary[] | undefined;

  /**
   * The token for the next page of results.
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
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * The list of tags assigned to the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource to which the policy is being attached.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * A JSON-formatted string for an Amazon Web Services resource-based policy.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The new or modified tags for the resource.
   *
   * @public
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
   * The Amazon Resource Name (ARN) of the resource.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The list of keys of the tags to be removed from the resource.
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
export interface UpdateRouteRequest {
  /**
   * The ID of the environment in which the route is being updated.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The ID of the application within which the route is being updated.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The unique identifier of the route to update.
   *
   * @public
   */
  RouteIdentifier: string | undefined;

  /**
   * If set to `ACTIVE`, traffic is forwarded to this route’s service after the route is updated.
   *
   * @public
   */
  ActivationState: RouteActivationState | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResponse {
  /**
   * The unique identifier of the route.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the route. The format for this ARN is `arn:aws:refactor-spaces:region:account-id:resource-type/resource-id`. For more information about ARNs, see [Amazon Resource Names (ARNs)](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *Amazon Web Services General Reference*.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The ID of service in which the route was created. Traffic that matches this route is forwarded to this service.
   *
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * The ID of the application in which the route is being updated.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * The current state of the route.
   *
   * @public
   */
  State?: RouteState | undefined;

  /**
   * A timestamp that indicates when the route was last updated.
   *
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}
