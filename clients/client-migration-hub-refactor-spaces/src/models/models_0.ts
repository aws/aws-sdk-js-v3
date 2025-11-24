// smithy-typescript generated code
import {
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
 * <p>A wrapper object holding the Amazon API Gateway proxy configuration. </p>
 * @public
 */
export interface ApiGatewayProxyConfig {
  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   * @public
   */
  ProxyUrl?: string | undefined;

  /**
   * <p>The resource ID of the API Gateway for the proxy. </p>
   * @public
   */
  ApiGatewayId?: string | undefined;

  /**
   * <p>The <code>VpcLink</code> ID of the API Gateway proxy. </p>
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy. </p>
   * @public
   */
  NlbArn?: string | undefined;

  /**
   * <p>The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *     </p>
   * @public
   */
  NlbName?: string | undefined;

  /**
   * <p>The type of API Gateway endpoint created. </p>
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   * @public
   */
  StageName?: string | undefined;
}

/**
 * <p>A wrapper object holding the Amazon API Gateway endpoint input. </p>
 * @public
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
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   * @public
   */
  StageName?: string | undefined;
}

/**
 * <p>A wrapper object holding the Amazon API Gateway proxy summary. </p>
 * @public
 */
export interface ApiGatewayProxySummary {
  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   * @public
   */
  ProxyUrl?: string | undefined;

  /**
   * <p>The resource ID of the API Gateway for the proxy. </p>
   * @public
   */
  ApiGatewayId?: string | undefined;

  /**
   * <p>The <code>VpcLink</code> ID of the API Gateway proxy. </p>
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Network Load Balancer configured by the API Gateway proxy. </p>
   * @public
   */
  NlbArn?: string | undefined;

  /**
   * <p>The name of the Network Load Balancer that is configured by the API Gateway proxy.
   *     </p>
   * @public
   */
  NlbName?: string | undefined;

  /**
   * <p>The type of API Gateway endpoint created. </p>
   * @public
   */
  EndpointType?: ApiGatewayEndpointType | undefined;

  /**
   * <p>The name of the API Gateway stage. The name defaults to <code>prod</code>. </p>
   * @public
   */
  StageName?: string | undefined;
}

/**
 * <p>Error associated with a resource returned for a Get or List resource response. </p>
 * @public
 */
export interface ErrorResponse {
  /**
   * <p>The error code associated with the error. </p>
   * @public
   */
  Code?: ErrorCode | undefined;

  /**
   * <p>The message associated with the error. </p>
   * @public
   */
  Message?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the resource owner. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The ID of the resource. </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>The type of resource. </p>
   * @public
   */
  ResourceType?: ErrorResourceType | undefined;

  /**
   * <p>Additional details about the error. </p>
   * @public
   */
  AdditionalDetails?: Record<string, string> | undefined;
}

/**
 * <p>The list of <code>ApplicationSummary</code> objects. </p>
 * @public
 */
export interface ApplicationSummary {
  /**
   * <p>The name of the application. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the application creator. </p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The unique identifier of the application. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * <p>The endpoint URL of the Amazon API Gateway proxy. </p>
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxySummary | undefined;

  /**
   * <p>The current state of the application. </p>
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * <p>The tags assigned to the application. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the application resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the application is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateApplicationRequest {
  /**
   * <p>The name to use for the application. </p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC).</p>
   * @public
   */
  VpcId: string | undefined;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   * @public
   */
  ProxyType: ProxyType | undefined;

  /**
   * <p>A wrapper object holding the API Gateway endpoint type and stage name for the
   *       proxy. </p>
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyInput | undefined;

  /**
   * <p>The tags to assign to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateApplicationResponse {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of application creator.</p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the environment in which the application is created.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the Amazon VPC. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * <p>A wrapper object holding the API Gateway endpoint type and stage name for the
   *       proxy. </p>
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyInput | undefined;

  /**
   * <p>The current state of the application. </p>
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * <p>The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the application is created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentRequest {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The network fabric type of the environment.</p>
   * @public
   */
  NetworkFabricType: NetworkFabricType | undefined;

  /**
   * <p>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the environment.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The network fabric type of the environment.</p>
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * <p>The Amazon Web Services account ID of environment owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The current state of the environment. </p>
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * <p>The tags assigned to the created environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair..</p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A timestamp that indicates when the environment was last updated.</p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the environment is created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * <p> The configuration for the default route type. </p>
 * @public
 */
export interface DefaultRouteInput {
  /**
   * <p>If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is created. </p>
   * @public
   */
  ActivationState?: RouteActivationState | undefined;
}

/**
 * <p>The configuration for the URI path route type. </p>
 * @public
 */
export interface UriPathRouteInput {
  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces.
   *       For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   * @public
   */
  SourcePath: string | undefined;

  /**
   * <p>If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is created. </p>
   * @public
   */
  ActivationState: RouteActivationState | undefined;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service. </p>
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateRouteRequest {
  /**
   * <p>The ID of the environment in which the route is created.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application within which the route is being created.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service in which the route is created. Traffic that matches this route is
   *       forwarded to this service.</p>
   * @public
   */
  ServiceIdentifier: string | undefined;

  /**
   * <p>The route type of the route. <code>DEFAULT</code> indicates that all traffic that does not
   *       match another route is forwarded to the default route. Applications must have a default route
   *       before any other routes can be created. <code>URI_PATH</code> indicates a route that is based
   *       on a URI path.</p>
   * @public
   */
  RouteType: RouteType | undefined;

  /**
   * <p> Configuration for the default route type. </p>
   * @public
   */
  DefaultRoute?: DefaultRouteInput | undefined;

  /**
   * <p>The configuration for the URI path route type. </p>
   * @public
   */
  UriPathRoute?: UriPathRouteInput | undefined;

  /**
   * <p>The tags to assign to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResponse {
  /**
   * <p>The unique identifier of the route.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the route. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route creator.</p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The route type of the route.</p>
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * <p>The ID of service in which the route is created. Traffic that matches this route is
   *       forwarded to this service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the application in which the route is created.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>Configuration for the URI path route type. </p>
   * @public
   */
  UriPathRoute?: UriPathRouteInput | undefined;

  /**
   * <p>The current state of the route. Activation state only allows <code>ACTIVE</code> or
   *         <code>INACTIVE</code> as user inputs. <code>FAILED</code> is a route state that is system
   *       generated.</p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p>The tags assigned to the created route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the route is created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * <p>The input for the Lambda endpoint type. </p>
 * @public
 */
export interface LambdaEndpointInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda function or alias.</p>
   * @public
   */
  Arn: string | undefined;
}

/**
 * <p>The configuration for the URL endpoint type. </p>
 * @public
 */
export interface UrlEndpointInput {
  /**
   * <p>The URL to route traffic to. The URL must be an <a href="https://datatracker.ietf.org/doc/html/rfc3986">rfc3986-formatted URL</a>. If the
   *       host is a domain name, the name must be resolvable over the public internet. If the scheme is
   *         <code>https</code>, the top level domain of the host must be listed in the <a href="https://www.iana.org/domains/root/db">IANA root zone database</a>. </p>
   * @public
   */
  Url: string | undefined;

  /**
   * <p>The health check URL of the URL endpoint type. If the URL is a public endpoint, the
   *         <code>HealthUrl</code> must also be a public endpoint. If the URL is a private endpoint
   *       inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the
   *       host must be the same as the URL. </p>
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceRequest {
  /**
   * <p>The name of the service.</p>
   * @public
   */
  Name: string | undefined;

  /**
   * <p>The description of the service.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The ID of the environment in which the service is created.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application which the service is created.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the VPC.</p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The type of endpoint to use for the service. The type can be a URL in a VPC or an Lambda function.</p>
   * @public
   */
  EndpointType: ServiceEndpointType | undefined;

  /**
   * <p>The configuration for the URL endpoint type. When creating a route to a service, Refactor Spaces
   *       automatically resolves the address in the <code>UrlEndpointInput</code> object URL when the
   *       Domain Name System (DNS) time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60
   *       seconds.</p>
   * @public
   */
  UrlEndpoint?: UrlEndpointInput | undefined;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   * @public
   */
  LambdaEndpoint?: LambdaEndpointInput | undefined;

  /**
   * <p>The tags to assign to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the
   *       request.</p>
   * @public
   */
  ClientToken?: string | undefined;
}

/**
 * @public
 */
export interface CreateServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service creator.</p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The description of the created service.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the application that the created service belongs to. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the VPC. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The endpoint type of the service.</p>
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * <p>The configuration for the URL endpoint type. </p>
   * @public
   */
  UrlEndpoint?: UrlEndpointInput | undefined;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   * @public
   */
  LambdaEndpoint?: LambdaEndpointInput | undefined;

  /**
   * <p>The current state of the service. </p>
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * <p>The tags assigned to the created service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair.. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the service is created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteApplicationResponse {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The unique identifier of the application’s environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The current state of the application. </p>
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The current state of the environment. </p>
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteResourcePolicyRequest {
  /**
   * <p>Amazon Resource Name (ARN) of the resource associated with the policy. </p>
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
   * <p>The ID of the environment to delete the route from.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application to delete the route from.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the route to delete.</p>
   * @public
   */
  RouteIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponse {
  /**
   * <p>The ID of the route to delete.</p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the route.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The ID of the service that the route belongs to.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the application that the route belongs to.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The current state of the route. </p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface DeleteServiceRequest {
  /**
   * <p>The ID of the environment that the service is in.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>Deletes a Refactor Spaces service.</p>
   *          <note>
   *             <p>The <code>RefactorSpacesSecurityGroup</code> security group must be removed from all
   *         Amazon Web Services resources in the virtual private cloud (VPC) prior to deleting a service with a URL
   *         endpoint in a VPC.</p>
   *          </note>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service to delete.</p>
   * @public
   */
  ServiceIdentifier: string | undefined;
}

/**
 * @public
 */
export interface DeleteServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the application that the service is in.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The current state of the service. </p>
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}

/**
 * <p>The summary information for environments as a response to <code>ListEnvironments</code>.
 *     </p>
 * @public
 */
export interface EnvironmentSummary {
  /**
   * <p>The name of the environment. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>A description of the environment. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The network fabric type of the environment. </p>
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * <p>The Amazon Web Services account ID of the environment owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The ID of the Transit Gateway set up by the environment. </p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The current state of the environment. </p>
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * <p>The tags assigned to the environment. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the environment resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the environment is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * <p>Provides summary information for the <code>EnvironmentVpc</code> resource as a response to
 *         <code>ListEnvironmentVpc</code>.</p>
 * @public
 */
export interface EnvironmentVpc {
  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the VPC. </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the virtual private cloud (VPC) owner. </p>
   * @public
   */
  AccountId?: string | undefined;

  /**
   * <p>The list of Amazon Virtual Private Cloud (Amazon VPC) CIDR blocks. </p>
   * @public
   */
  CidrBlocks?: string[] | undefined;

  /**
   * <p>The name of the VPC at the time it is added to the environment. </p>
   * @public
   */
  VpcName?: string | undefined;

  /**
   * <p>A timestamp that indicates when the VPC was last updated by the environment. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the VPC is first added to the environment. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetApplicationRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetApplicationResponse {
  /**
   * <p>The name of the application.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the application.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the application owner (which is always the same as
   *       the environment owner account ID).</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the application creator. </p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The unique identifier of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The proxy type of the proxy created within the application. </p>
   * @public
   */
  ProxyType?: ProxyType | undefined;

  /**
   * <p>The endpoint URL of the API Gateway proxy. </p>
   * @public
   */
  ApiGatewayProxy?: ApiGatewayProxyConfig | undefined;

  /**
   * <p>The current state of the application. </p>
   * @public
   */
  State?: ApplicationState | undefined;

  /**
   * <p>The tags assigned to the application. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the application resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the application was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the application is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentRequest {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;
}

/**
 * @public
 */
export interface GetEnvironmentResponse {
  /**
   * <p>The name of the environment.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the environment.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The description of the environment. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The network fabric type of the environment. </p>
   * @public
   */
  NetworkFabricType?: NetworkFabricType | undefined;

  /**
   * <p>The Amazon Web Services account ID of the environment owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The ID of the Transit Gateway set up by the environment, if applicable.</p>
   * @public
   */
  TransitGatewayId?: string | undefined;

  /**
   * <p>The current state of the environment. </p>
   * @public
   */
  State?: EnvironmentState | undefined;

  /**
   * <p>The tags to assign to the environment. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the environment resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the environment was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the environment is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource associated with the policy. </p>
   * @public
   */
  Identifier: string | undefined;
}

/**
 * @public
 */
export interface GetResourcePolicyResponse {
  /**
   * <p>A JSON-formatted string for an Amazon Web Services resource-based policy. </p>
   * @public
   */
  Policy?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the route.</p>
   * @public
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
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the route.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route creator.</p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The type of route.</p>
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * <p>The unique identifier of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The ID of the application that the route belongs to. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>Unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces.
   *       For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service. </p>
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * <p>A mapping of Amazon API Gateway path resources to resource IDs. </p>
   * @public
   */
  PathResourceToId?: Record<string, string> | undefined;

  /**
   * <p>The current state of the route. </p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p>The tags assigned to the route. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the route resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The timestamp of when the route is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface GetServiceRequest {
  /**
   * <p>The ID of the environment.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The ID of the service.</p>
   * @public
   */
  ServiceIdentifier: string | undefined;
}

/**
 * <p>The configuration for the Lambda endpoint type. </p>
 * @public
 */
export interface LambdaEndpointConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * <p>The configuration for the URL endpoint type. </p>
 * @public
 */
export interface UrlEndpointConfig {
  /**
   * <p>The HTTP URL endpoint. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The health check URL of the URL endpoint type. </p>
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * @public
 */
export interface GetServiceResponse {
  /**
   * <p>The unique identifier of the service.</p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service.</p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service.</p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service creator.</p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The description of the service. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment.</p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The ID of the application.</p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The endpoint type of the service.</p>
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * <p>The configuration for the URL endpoint type.</p>
   *          <p>The <b>Url</b> isthe URL of the endpoint type.</p>
   *          <p>The <b>HealthUrl</b> is the health check URL of the endpoint
   *       type. </p>
   * @public
   */
  UrlEndpoint?: UrlEndpointConfig | undefined;

  /**
   * <p>The configuration for the Lambda endpoint type.</p>
   *          <p>The <b>Arn</b> is the Amazon Resource Name (ARN) of the Lambda function associated with this service. </p>
   * @public
   */
  LambdaEndpoint?: LambdaEndpointConfig | undefined;

  /**
   * <p>The current state of the service. </p>
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * <p>The tags assigned to the service. A tag is a label that you assign to an Amazon Web Services resource. Each tag consists of a key-value pair. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the service resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>The timestamp of when the service is created.</p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * <p>The summary for the Lambda endpoint type. </p>
 * @public
 */
export interface LambdaEndpointSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the Lambda endpoint. </p>
   * @public
   */
  Arn?: string | undefined;
}

/**
 * @public
 */
export interface ListApplicationsRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListApplicationsResponse {
  /**
   * <p>The list of <code>ApplicationSummary</code> objects. </p>
   * @public
   */
  ApplicationSummaryList?: ApplicationSummary[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsRequest {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentsResponse {
  /**
   * <p>The list of <code>EnvironmentSummary</code> objects. </p>
   * @public
   */
  EnvironmentSummaryList?: EnvironmentSummary[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListEnvironmentVpcsResponse {
  /**
   * <p>The list of <code>EnvironmentVpc</code> objects. </p>
   * @public
   */
  EnvironmentVpcList?: EnvironmentVpc[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutesRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary information for the routes as a response to <code>ListRoutes</code>. </p>
 * @public
 */
export interface RouteSummary {
  /**
   * <p>The unique identifier of the route. </p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the route. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the route creator. </p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>The route type of the route. </p>
   * @public
   */
  RouteType?: RouteType | undefined;

  /**
   * <p>The unique identifier of the service. </p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The unique identifier of the application. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>This is the path that Refactor Spaces uses to match traffic. Paths must start with <code>/</code> and are relative to
   *       the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path \{user\} represents a path parameter called 'user'.</p>
   * @public
   */
  SourcePath?: string | undefined;

  /**
   * <p>A list of HTTP methods to match. An empty list matches all values. If a method is present,
   *       only HTTP requests using that method are forwarded to this route’s service. </p>
   * @public
   */
  Methods?: HttpMethod[] | undefined;

  /**
   * <p>Indicates whether to match all subpaths of the given source path. If this value is
   *         <code>false</code>, requests must match the source path exactly before they are forwarded to
   *       this route's service.</p>
   * @public
   */
  IncludeChildPaths?: boolean | undefined;

  /**
   * <p>A mapping of Amazon API Gateway path resources to resource IDs. </p>
   * @public
   */
  PathResourceToId?: Record<string, string> | undefined;

  /**
   * <p>The current state of the route. </p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p>The tags assigned to the route. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the route resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the route was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the route is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;

  /**
   * <p>If set to <code>true</code>, this option appends the source path to the service URL endpoint.</p>
   * @public
   */
  AppendSourcePath?: boolean | undefined;
}

/**
 * @public
 */
export interface ListRoutesResponse {
  /**
   * <p>The list of <code>RouteSummary</code> objects. </p>
   * @public
   */
  RouteSummaryList?: RouteSummary[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListServicesRequest {
  /**
   * <p>The ID of the environment. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The ID of the application. </p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call. To retrieve the remaining
   *       results, make another call with the returned <code>nextToken</code> value.</p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>The summary of the configuration for the URL endpoint type. </p>
 * @public
 */
export interface UrlEndpointSummary {
  /**
   * <p> The URL to route traffic to. The URL must be an <a href="https://datatracker.ietf.org/doc/html/rfc3986">rfc3986-formatted URL</a>. If the
   *       host is a domain name, the name must be resolvable over the public internet. If the scheme is
   *         <code>https</code>, the top level domain of the host must be listed in the <a href="https://www.iana.org/domains/root/db">IANA root zone database</a>. </p>
   * @public
   */
  Url?: string | undefined;

  /**
   * <p>The health check URL of the URL endpoint type. If the URL is a public endpoint, the
   *         <code>HealthUrl</code> must also be a public endpoint. If the URL is a private endpoint
   *       inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the
   *       host must be the same as the URL.</p>
   * @public
   */
  HealthUrl?: string | undefined;
}

/**
 * <p>A summary for the service as a response to <code>ListServices</code>. </p>
 * @public
 */
export interface ServiceSummary {
  /**
   * <p>The unique identifier of the service. </p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p>The name of the service. </p>
   * @public
   */
  Name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the service. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service owner.</p>
   * @public
   */
  OwnerAccountId?: string | undefined;

  /**
   * <p>The Amazon Web Services account ID of the service creator. </p>
   * @public
   */
  CreatedByAccountId?: string | undefined;

  /**
   * <p>A description of the service. </p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The unique identifier of the environment. </p>
   * @public
   */
  EnvironmentId?: string | undefined;

  /**
   * <p>The unique identifier of the application. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p>The ID of the virtual private cloud (VPC). </p>
   * @public
   */
  VpcId?: string | undefined;

  /**
   * <p>The endpoint type of the service. </p>
   * @public
   */
  EndpointType?: ServiceEndpointType | undefined;

  /**
   * <p>The summary of the configuration for the URL endpoint type. </p>
   * @public
   */
  UrlEndpoint?: UrlEndpointSummary | undefined;

  /**
   * <p>A summary of the configuration for the Lambda endpoint type. </p>
   * @public
   */
  LambdaEndpoint?: LambdaEndpointSummary | undefined;

  /**
   * <p>The current state of the service. </p>
   * @public
   */
  State?: ServiceState | undefined;

  /**
   * <p>The tags assigned to the service. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * <p>Any error associated with the service resource. </p>
   * @public
   */
  Error?: ErrorResponse | undefined;

  /**
   * <p>A timestamp that indicates when the service was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;

  /**
   * <p>A timestamp that indicates when the service is created. </p>
   * @public
   */
  CreatedTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListServicesResponse {
  /**
   * <p> The list of <code>ServiceSummary</code> objects. </p>
   * @public
   */
  ServiceSummaryList?: ServiceSummary[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>The list of tags assigned to the resource. </p>
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface PutResourcePolicyRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource to which the policy is being attached.
   *     </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>A JSON-formatted string for an Amazon Web Services resource-based policy. </p>
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
   * <p>The Amazon Resource Name (ARN) of the resource.</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The new or modified tags for the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource. </p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The list of keys of the tags to be removed from the resource. </p>
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
   * <p> The ID of the environment in which the route is being updated. </p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p> The ID of the application within which the route is being updated. </p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p> The unique identifier of the route to update. </p>
   * @public
   */
  RouteIdentifier: string | undefined;

  /**
   * <p> If set to <code>ACTIVE</code>, traffic is forwarded to this route’s service after the
   *       route is updated. </p>
   * @public
   */
  ActivationState: RouteActivationState | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResponse {
  /**
   * <p> The unique identifier of the route. </p>
   * @public
   */
  RouteId?: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the route. The format for this ARN is
   * <code>arn:aws:refactor-spaces:<i>region</i>:<i>account-id</i>:<i>resource-type/resource-id</i>
   *             </code>. For more information about ARNs,
   * see <a href="https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html">
   *                     Amazon Resource Names (ARNs)</a> in the
   *                     <i>Amazon Web Services General Reference</i>. </p>
   * @public
   */
  Arn?: string | undefined;

  /**
   * <p> The ID of service in which the route was created. Traffic that matches this route is
   *       forwarded to this service. </p>
   * @public
   */
  ServiceId?: string | undefined;

  /**
   * <p> The ID of the application in which the route is being updated. </p>
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * <p> The current state of the route. </p>
   * @public
   */
  State?: RouteState | undefined;

  /**
   * <p> A timestamp that indicates when the route was last updated. </p>
   * @public
   */
  LastUpdatedTime?: Date | undefined;
}
