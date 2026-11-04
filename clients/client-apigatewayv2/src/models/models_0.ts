// smithy-typescript generated code
import type {
  AuthorizationType,
  AuthorizerType,
  ConnectionType,
  ContentHandlingStrategy,
  DeploymentStatus,
  DomainNameStatus,
  EndpointType,
  IntegrationType,
  IpAddressType,
  LoggingLevel,
  PassthroughBehavior,
  PreviewStatus,
  ProtocolType,
  PublishStatus,
  RoutingMode,
  SecurityPolicy,
  Status,
  TryItState,
  VpcLinkStatus,
  VpcLinkVersion,
} from "./enums";

/**
 * Represents a CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
 *
 * @public
 */
export interface Cors {
  /**
   * Specifies whether credentials are included in the CORS request. Supported only for HTTP APIs.
   *
   * @public
   */
  AllowCredentials?: boolean | undefined;

  /**
   * Represents a collection of allowed headers. Supported only for HTTP APIs.
   *
   * @public
   */
  AllowHeaders?: string[] | undefined;

  /**
   * Represents a collection of allowed HTTP methods. Supported only for HTTP APIs.
   *
   * @public
   */
  AllowMethods?: string[] | undefined;

  /**
   * Represents a collection of allowed origins. Supported only for HTTP APIs.
   *
   * @public
   */
  AllowOrigins?: string[] | undefined;

  /**
   * Represents a collection of exposed headers. Supported only for HTTP APIs.
   *
   * @public
   */
  ExposeHeaders?: string[] | undefined;

  /**
   * The number of seconds that the browser should cache preflight request results. Supported only for HTTP APIs.
   *
   * @public
   */
  MaxAge?: number | undefined;
}

/**
 * Represents an API.
 *
 * @public
 */
export interface Api {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * Represents an API mapping.
 *
 * @public
 */
export interface ApiMapping {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * The API mapping key.
   *
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage: string | undefined;
}

/**
 * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
 *
 * @public
 */
export interface JWTConfiguration {
  /**
   * A list of the intended recipients of the JWT. A valid JWT must provide an aud that matches at least one entry in this list. See [RFC 7519](https://tools.ietf.org/html/rfc7519#section-4.1.3). Supported only for HTTP APIs.
   *
   * @public
   */
  Audience?: string[] | undefined;

  /**
   * The base domain of the identity provider that issues JSON Web Tokens. For example, an Amazon Cognito user pool has the following format: https://cognito-idp.\{region\}.amazonaws.com/\{userPoolId\} . Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  Issuer?: string | undefined;
}

/**
 * Represents an authorizer.
 *
 * @public
 */
export interface Authorizer {
  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * The validation expression does not apply to the REQUEST authorizer.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * An immutable representation of an API that can be called by users. A Deployment must be associated with a Stage for it to be callable over the internet.
 *
 * @public
 */
export interface Deployment {
  /**
   * Specifies whether a deployment was automatically released.
   *
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * The date and time when the Deployment resource was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The identifier for the deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * May contain additional feedback on the status of an API deployment.
   *
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * The description for the deployment.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * The domain name configuration.
 *
 * @public
 */
export interface DomainNameConfiguration {
  /**
   * A domain name for the API.
   *
   * @public
   */
  ApiGatewayDomainName?: string | undefined;

  /**
   * An AWS-managed certificate that will be used by the edge-optimized endpoint for this domain name. AWS Certificate Manager is the only supported source.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The user-friendly name of the certificate that will be used by the edge-optimized endpoint for this domain name.
   *
   * @public
   */
  CertificateName?: string | undefined;

  /**
   * The timestamp when the certificate that was used by edge-optimized endpoint for this domain name was uploaded.
   *
   * @public
   */
  CertificateUploadDate?: Date | undefined;

  /**
   * The status of the domain name migration. The valid values are AVAILABLE, UPDATING, PENDING_CERTIFICATE_REIMPORT, and PENDING_OWNERSHIP_VERIFICATION. If the status is UPDATING, the domain cannot be modified further until the existing operation is complete. If it is AVAILABLE, the domain can be updated.
   *
   * @public
   */
  DomainNameStatus?: DomainNameStatus | undefined;

  /**
   * An optional text message containing detailed information about status of the domain name migration.
   *
   * @public
   */
  DomainNameStatusMessage?: string | undefined;

  /**
   * The endpoint type.
   *
   * @public
   */
  EndpointType?: EndpointType | undefined;

  /**
   * The Amazon Route 53 Hosted Zone ID of the endpoint.
   *
   * @public
   */
  HostedZoneId?: string | undefined;

  /**
   * The IP address types that can invoke the domain name. Use ipv4 to allow only IPv4 addresses to invoke your domain name, or use dualstack to allow both IPv4 and IPv6 addresses to invoke your domain name.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The Transport Layer Security (TLS) version of the security policy for this domain name. The valid values are TLS_1_0 and TLS_1_2.
   *
   * @public
   */
  SecurityPolicy?: SecurityPolicy | undefined;

  /**
   * The ARN of the public certificate issued by ACM to validate ownership of your custom domain. Only required when configuring mutual TLS and using an ACM imported or private CA certificate ARN as the regionalCertificateArn
   *
   * @public
   */
  OwnershipVerificationCertificateArn?: string | undefined;
}

/**
 * @public
 */
export interface MutualTlsAuthentication {
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://bucket-name/key-name. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * @public
   */
  TruststoreUri?: string | undefined;

  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   *
   * @public
   */
  TruststoreVersion?: string | undefined;

  /**
   * A list of warnings that API Gateway returns while processing your truststore. Invalid certificates produce warnings. Mutual TLS is still enabled, but some clients might not be able to access your API. To resolve warnings, upload a new truststore to S3, and then update you domain name to use the new version.
   *
   * @public
   */
  TruststoreWarnings?: string[] | undefined;
}

/**
 * Represents a domain name.
 *
 * @public
 */
export interface DomainName {
  /**
   * The API mapping selection expression.
   *
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * Represents an Amazon Resource Name (ARN).
   *
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * The collection of tags associated with a domain name.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
 *
 * @public
 */
export interface TlsConfig {
  /**
   * If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.
   *
   * @public
   */
  ServerNameToVerify?: string | undefined;
}

/**
 * Represents an integration.
 *
 * @public
 */
export interface Integration {
  /**
   * Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * Represents the description of an integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Represents the identifier of an integration.
   *
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * The integration response selection expression for the integration. Supported only for WebSocket APIs. See [Integration Response Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions).
   *
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * Represents an integration response.
 *
 * @public
 */
export interface IntegrationResponse {
  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expressions for the integration response.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * Represents a data model for an API. Supported only for WebSocket APIs. See [Create Models and Mapping Templates for Request and Response Mappings](https://docs.aws.amazon.com/apigateway/latest/developerguide/models-mappings.html).
 *
 * @public
 */
export interface Model {
  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The model identifier.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * Represents a portal product.
 *
 * @public
 */
export interface PortalProductSummary {
  /**
   * The description.
   *
   * @public
   */
  Description: string | undefined;

  /**
   * The display name of a portal product.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The timestamp when the portal product was last modified.
   *
   * @public
   */
  LastModified: Date | undefined;

  /**
   * The ARN of a portal product.
   *
   * @public
   */
  PortalProductArn: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The configuration for using Amazon Cognito user pools to control access to your portal.
 *
 * @public
 */
export interface CognitoConfig {
  /**
   * The app client ID.
   *
   * @public
   */
  AppClientId: string | undefined;

  /**
   * The user pool ARN.
   *
   * @public
   */
  UserPoolArn: string | undefined;

  /**
   * The user pool domain.
   *
   * @public
   */
  UserPoolDomain: string | undefined;
}

/**
 * The none option.
 *
 * @public
 */
export interface None {}

/**
 * Represents an authorization configuration for a portal.
 *
 * @public
 */
export interface Authorization {
  /**
   * The Amazon Cognito configuration.
   *
   * @public
   */
  CognitoConfig?: CognitoConfig | undefined;

  /**
   * Provide no authorization for your portal. This makes your portal publicly accesible on the web.
   *
   * @public
   */
  None?: None | undefined;
}

/**
 * Represents an endpoint configuration.
 *
 * @public
 */
export interface EndpointConfigurationResponse {
  /**
   * The ARN of the ACM certificate.
   *
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The portal default domain name. This domain name is generated and managed by API Gateway.
   *
   * @public
   */
  PortalDefaultDomainName: string | undefined;

  /**
   * The portal domain hosted zone identifier.
   *
   * @public
   */
  PortalDomainHostedZoneId: string | undefined;
}

/**
 * Represents custom colors for a published portal.
 *
 * @public
 */
export interface CustomColors {
  /**
   * Represents the accent color.
   *
   * @public
   */
  AccentColor: string | undefined;

  /**
   * Represents the background color.
   *
   * @public
   */
  BackgroundColor: string | undefined;

  /**
   * The errorValidationColor.
   *
   * @public
   */
  ErrorValidationColor: string | undefined;

  /**
   * Represents the header color.
   *
   * @public
   */
  HeaderColor: string | undefined;

  /**
   * Represents the navigation color.
   *
   * @public
   */
  NavigationColor: string | undefined;

  /**
   * Represents the text color.
   *
   * @public
   */
  TextColor: string | undefined;
}

/**
 * Defines the theme for a portal.
 *
 * @public
 */
export interface PortalTheme {
  /**
   * Defines custom color values.
   *
   * @public
   */
  CustomColors: CustomColors | undefined;

  /**
   * The timestamp when the logo was last uploaded.
   *
   * @public
   */
  LogoLastUploaded?: Date | undefined;
}

/**
 * Contains the content that is visible to portal consumers including the themes, display names, and description.
 *
 * @public
 */
export interface PortalContent {
  /**
   * A description of the portal.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name for the portal.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The theme for the portal.
   *
   * @public
   */
  Theme: PortalTheme | undefined;
}

/**
 * Represents a StatusException.
 *
 * @public
 */
export interface StatusException {
  /**
   * The exception.
   *
   * @public
   */
  Exception?: string | undefined;

  /**
   * The error message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Contains the preview status and preview URL.
 *
 * @public
 */
export interface Preview {
  /**
   * The status of the preview.
   *
   * @public
   */
  PreviewStatus: PreviewStatus | undefined;

  /**
   * The URL of the preview.
   *
   * @public
   */
  PreviewUrl?: string | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;
}

/**
 * Represents a portal summary.
 *
 * @public
 */
export interface PortalSummary {
  /**
   * The authorization of the portal.
   *
   * @public
   */
  Authorization: Authorization | undefined;

  /**
   * The endpoint configuration of the portal.
   *
   * @public
   */
  EndpointConfiguration: EndpointConfigurationResponse | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns: string[] | undefined;

  /**
   * The timestamp when the portal was last modified.
   *
   * @public
   */
  LastModified: Date | undefined;

  /**
   * The timestamp when the portal was last published.
   *
   * @public
   */
  LastPublished?: Date | undefined;

  /**
   * The description of the portal the last time it was published.
   *
   * @public
   */
  LastPublishedDescription?: string | undefined;

  /**
   * The ARN of the portal.
   *
   * @public
   */
  PortalArn: string | undefined;

  /**
   * Contains the content that is visible to portal consumers including the themes, display names, and description.
   *
   * @public
   */
  PortalContent: PortalContent | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;

  /**
   * Represents the preview endpoint and the any possible error messages during preview generation.
   *
   * @public
   */
  Preview?: Preview | undefined;

  /**
   * The publish status.
   *
   * @public
   */
  PublishStatus?: PublishStatus | undefined;

  /**
   * The CloudWatch RUM app monitor name.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Represents a product page summary without listing any page content.
 *
 * @public
 */
export interface ProductPageSummaryNoBody {
  /**
   * The timestamp when the product page was last modified.
   *
   * @public
   */
  LastModified: Date | undefined;

  /**
   * The page title.
   *
   * @public
   */
  PageTitle: string | undefined;

  /**
   * The ARN of the product page.
   *
   * @public
   */
  ProductPageArn: string | undefined;

  /**
   * The product page identifier.
   *
   * @public
   */
  ProductPageId: string | undefined;
}

/**
 * The identifier parts of a product REST endpoint.
 *
 * @public
 */
export interface IdentifierParts {
  /**
   * The method of the product REST endpoint.
   *
   * @public
   */
  Method: string | undefined;

  /**
   * The path of the product REST endpoint.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * The REST API ID of the product REST endpoint.
   *
   * @public
   */
  RestApiId: string | undefined;

  /**
   * The stage of the product REST endpoint.
   *
   * @public
   */
  Stage: string | undefined;
}

/**
 * The REST API endpoint identifier.
 *
 * @public
 */
export interface RestEndpointIdentifier {
  /**
   * The identifier parts of the REST endpoint identifier.
   *
   * @public
   */
  IdentifierParts?: IdentifierParts | undefined;
}

/**
 * A summary of a product REST endpoint page, without providing the page content.
 *
 * @public
 */
export interface ProductRestEndpointPageSummaryNoBody {
  /**
   * The endpoint of the product REST endpoint page.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * The timestamp when the product REST endpoint page was last modified.
   *
   * @public
   */
  LastModified: Date | undefined;

  /**
   * The operation name of the product REST endpoint.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The ARN of the product REST endpoint page.
   *
   * @public
   */
  ProductRestEndpointPageArn: string | undefined;

  /**
   * The product REST endpoint page identifier.
   *
   * @public
   */
  ProductRestEndpointPageId: string | undefined;

  /**
   * The REST endpoint identifier.
   *
   * @public
   */
  RestEndpointIdentifier: RestEndpointIdentifier | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status: Status | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The try it state of a product REST endpoint page.
   *
   * @public
   */
  TryItState: TryItState | undefined;
}

/**
 * Validation constraints imposed on parameters of a request (path, query string, headers).
 *
 * @public
 */
export interface ParameterConstraints {
  /**
   * Whether or not the parameter is required.
   *
   * @public
   */
  Required?: boolean | undefined;
}

/**
 * Represents a route.
 *
 * @public
 */
export interface Route {
  /**
   * Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether an API key is required for this route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * Represents a route response.
 *
 * @public
 */
export interface RouteResponse {
  /**
   * Represents the model selection expression of a route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * Represents the response models of a route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * Represents the response parameters of a route response.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * Represents the identifier of a route response.
   *
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * Represents the route response key of a route response.
   *
   * @public
   */
  RouteResponseKey: string | undefined;
}

/**
 * Represents an InvokeApi action.
 *
 * @public
 */
export interface RoutingRuleActionInvokeApi {
  /**
   * The identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * A string with a length between [1-128].
   *
   * @public
   */
  Stage: string | undefined;

  /**
   * The strip base path setting.
   *
   * @public
   */
  StripBasePath?: boolean | undefined;
}

/**
 * The routing rule action.
 *
 * @public
 */
export interface RoutingRuleAction {
  /**
   * Represents an InvokeApi action.
   *
   * @public
   */
  InvokeApi: RoutingRuleActionInvokeApi | undefined;
}

/**
 * Represents a MatchBasePaths condition.
 *
 * @public
 */
export interface RoutingRuleMatchBasePaths {
  /**
   * The string of the case sensitive base path to be matched.
   * @public
   */
  AnyOf: string[] | undefined;
}

/**
 * Represents a MatchHeaderValue.
 *
 * @public
 */
export interface RoutingRuleMatchHeaderValue {
  /**
   * After evaluating a selection expression, the result is compared against one or more selection keys to find a matching key. See [Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions) for a list of expressions and each expression's associated selection key type.
   *
   * @public
   */
  Header: string | undefined;

  /**
   * An expression used to extract information at runtime. See [Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions) for more information.
   *
   * @public
   */
  ValueGlob: string | undefined;
}

/**
 * Represents a MatchHeaders condition.
 *
 * @public
 */
export interface RoutingRuleMatchHeaders {
  /**
   * The header name and header value glob to be matched. The matchHeaders condition is matched if any of the header name and header value globs are matched.
   *
   * @public
   */
  AnyOf: RoutingRuleMatchHeaderValue[] | undefined;
}

/**
 * Represents a routing rule condition.
 *
 * @public
 */
export interface RoutingRuleCondition {
  /**
   * The base path to be matched.
   *
   * @public
   */
  MatchBasePaths?: RoutingRuleMatchBasePaths | undefined;

  /**
   * The headers to be matched.
   *
   * @public
   */
  MatchHeaders?: RoutingRuleMatchHeaders | undefined;
}

/**
 * Represents a routing rule.
 *
 * @public
 */
export interface RoutingRule {
  /**
   * The routing rule action.
   *
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * The routing rule condition.
   *
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * The routing rule priority.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The routing rule ARN.
   *
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * Contains the section name and list of product REST endpoints for a product.
 *
 * @public
 */
export interface Section {
  /**
   * The ARNs of the product REST endpoint pages in a portal product.
   *
   * @public
   */
  ProductRestEndpointPageArns: string[] | undefined;

  /**
   * The section name.
   *
   * @public
   */
  SectionName: string | undefined;
}

/**
 * Settings for logging access in a stage.
 *
 * @public
 */
export interface AccessLogSettings {
  /**
   * The ARN of the CloudWatch Logs log group to receive access logs.
   *
   * @public
   */
  DestinationArn?: string | undefined;

  /**
   * A single line format of the access logs of data, as specified by selected $context variables. The format must include at least $context.requestId.
   *
   * @public
   */
  Format?: string | undefined;
}

/**
 * Represents a collection of route settings.
 *
 * @public
 */
export interface RouteSettings {
  /**
   * Specifies whether (true) or not (false) data trace logging is enabled for this route. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * @public
   */
  DataTraceEnabled?: boolean | undefined;

  /**
   * Specifies whether detailed metrics are enabled.
   *
   * @public
   */
  DetailedMetricsEnabled?: boolean | undefined;

  /**
   * Specifies the logging level for this route: INFO, ERROR, or OFF. This property affects the log entries pushed to Amazon CloudWatch Logs. Supported only for WebSocket APIs.
   *
   * @public
   */
  LoggingLevel?: LoggingLevel | undefined;

  /**
   * Specifies the throttling burst limit.
   *
   * @public
   */
  ThrottlingBurstLimit?: number | undefined;

  /**
   * Specifies the throttling rate limit.
   *
   * @public
   */
  ThrottlingRateLimit?: number | undefined;
}

/**
 * Represents an API stage.
 *
 * @public
 */
export interface Stage {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The timestamp when the stage was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * Default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.
   *
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * The timestamp when the stage was last updated.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Route settings for the stage, by routeKey.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName: string | undefined;

  /**
   * A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Represents a VPC link.
 *
 * @public
 */
export interface VpcLink {
  /**
   * The timestamp when the VPC link was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of security group IDs for the VPC link.
   *
   * @public
   */
  SecurityGroupIds: string[] | undefined;

  /**
   * A list of subnet IDs to include in the VPC link.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * Tags for the VPC link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId: string | undefined;

  /**
   * The status of the VPC link.
   *
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * A message summarizing the cause of the status of the VPC link.
   *
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * The version of the VPC link.
   *
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * Represents a domain name and certificate for a portal.
 *
 * @public
 */
export interface ACMManaged {
  /**
   * The certificate ARN.
   *
   * @public
   */
  CertificateArn: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * Creates a new Api resource to represent an API.
 *
 * @public
 */
export interface CreateApiRequest {
  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs. See [Configuring CORS](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-cors.html) for more information.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null. Currently, this property is not used for HTTP integrations. Supported only for HTTP APIs.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType: ProtocolType | undefined;

  /**
   * This property is part of quick create. If you don't specify a routeKey, a default route of $default is created. The $default route acts as a catch-all for any request made to your API, for a particular stage. The $default route key can't be modified. You can add routes after creating the API, and you can update the route keys of additional routes. Supported only for HTTP APIs.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * This property is part of quick create. Quick create produces an API with an integration, a default catch-all route, and a default stage which is configured to automatically deploy changes. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. Supported only for HTTP APIs.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface CreateApiResponse {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * Creates a new ApiMapping resource to represent an API mapping.
 *
 * @public
 */
export interface CreateApiMappingRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API mapping key.
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage: string | undefined;
}

/**
 * @public
 */
export interface CreateApiMappingResponse {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * The API mapping key.
   *
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage?: string | undefined;
}

/**
 * Creates a new Authorizer resource to represent an authorizer.
 *
 * @public
 */
export interface CreateAuthorizerRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource: string[] | undefined;

  /**
   * This parameter is not used.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface CreateAuthorizerResponse {
  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * The validation expression does not apply to the REQUEST authorizer.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Creates a new Deployment resource to represent a deployment.
 *
 * @public
 */
export interface CreateDeploymentRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The description for the deployment resource.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the Stage resource for the Deployment resource to create.
   *
   * @public
   */
  StageName?: string | undefined;
}

/**
 * @public
 */
export interface CreateDeploymentResponse {
  /**
   * Specifies whether a deployment was automatically released.
   *
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * The date and time when the Deployment resource was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The identifier for the deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * May contain additional feedback on the status of an API deployment.
   *
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * The description for the deployment.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface MutualTlsAuthenticationInput {
  /**
   * An Amazon S3 URL that specifies the truststore for mutual TLS authentication, for example, s3://bucket-name/key-name. The truststore can contain certificates from public or private certificate authorities. To update the truststore, upload a new version to S3, and then update your custom domain name to use the new version. To update the truststore, you must have permissions to access the S3 object.
   *
   * @public
   */
  TruststoreUri?: string | undefined;

  /**
   * The version of the S3 object that contains your truststore. To specify a version, you must have versioning enabled for the S3 bucket.
   *
   * @public
   */
  TruststoreVersion?: string | undefined;
}

/**
 * Creates a new DomainName resource to represent a domain name.
 *
 * @public
 */
export interface CreateDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * The collection of tags associated with a domain name.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDomainNameResponse {
  /**
   * The API mapping selection expression.
   *
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * Represents an Amazon Resource Name (ARN).
   *
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * The collection of tags associated with a domain name.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
 *
 * @public
 */
export interface TlsConfigInput {
  /**
   * If you specify a server name, API Gateway uses it to verify the hostname on the integration's certificate. The server name is also included in the TLS handshake to support Server Name Indication (SNI) or virtual hosting.
   *
   * @public
   */
  ServerNameToVerify?: string | undefined;
}

/**
 * Creates a new Integration resource to represent an integration.
 *
 * @public
 */
export interface CreateIntegrationRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * The description of the integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfigInput | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResult {
  /**
   * Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * Represents the description of an integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Represents the identifier of an integration.
   *
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * The integration response selection expression for the integration. Supported only for WebSocket APIs. See [Integration Response Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions).
   *
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * Creates a new IntegrationResponse resource to represent an integration response.
 *
 * @public
 */
export interface CreateIntegrationResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where \{name\} is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where \{name\} is a valid and unique response header name and \{JSON-expression\} is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expression for the integration response. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface CreateIntegrationResponseResponse {
  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expressions for the integration response.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * Creates a new Model.
 *
 * @public
 */
export interface CreateModelRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema: string | undefined;
}

/**
 * @public
 */
export interface CreateModelResponse {
  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The model identifier.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * Represents an endpoint configuration.
 *
 * @public
 */
export interface EndpointConfigurationRequest {
  /**
   * Represents a domain name and certificate for a portal.
   *
   * @public
   */
  AcmManaged?: ACMManaged | undefined;

  /**
   * Use the default portal domain name that is generated and managed by API Gateway.
   *
   * @public
   */
  None?: None | undefined;
}

/**
 * The request body for the post operation.
 *
 * @public
 */
export interface CreatePortalRequest {
  /**
   * The authentication configuration for the portal.
   *
   * @public
   */
  Authorization: Authorization | undefined;

  /**
   * The domain configuration for the portal. Use a default domain provided by API Gateway or provide a fully-qualified domain name that you own.
   *
   * @public
   */
  EndpointConfiguration: EndpointConfigurationRequest | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns?: string[] | undefined;

  /**
   * The URI for the portal logo image that is displayed in the portal header.
   *
   * @public
   */
  LogoUri?: string | undefined;

  /**
   * The content of the portal.
   *
   * @public
   */
  PortalContent: PortalContent | undefined;

  /**
   * The name of the Amazon CloudWatch RUM app monitor for the portal.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreatePortalResponse {
  /**
   * The authorization for the portal. Supports Cognito-based user authentication or no authentication.
   *
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The endpoint configuration.
   *
   * @public
   */
  EndpointConfiguration?: EndpointConfigurationResponse | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns?: string[] | undefined;

  /**
   * The timestamp when the portal configuration was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The timestamp when the portal was last published.
   *
   * @public
   */
  LastPublished?: Date | undefined;

  /**
   * A user-written description of the changes made in the last published version of the portal.
   *
   * @public
   */
  LastPublishedDescription?: string | undefined;

  /**
   * The ARN of the portal.
   *
   * @public
   */
  PortalArn?: string | undefined;

  /**
   * The name, description, and theme for the portal.
   *
   * @public
   */
  PortalContent?: PortalContent | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId?: string | undefined;

  /**
   * The current publishing status of the portal.
   *
   * @public
   */
  PublishStatus?: PublishStatus | undefined;

  /**
   * The name of the Amazon CloudWatch RUM app monitor.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;

  /**
   * Error information for failed portal operations. Contains details about any issues encountered during portal creation or publishing.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The request body for the post operation.
 *
 * @public
 */
export interface CreatePortalProductRequest {
  /**
   * A description of the portal product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The name of the portal product as it appears in a published portal.
   *
   * @public
   */
  DisplayName: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The display order.
 *
 * @public
 */
export interface DisplayOrder {
  /**
   * Represents a list of sections which include section name and list of product REST endpoints for a product.
   *
   * @public
   */
  Contents?: Section[] | undefined;

  /**
   * The ARN of the overview page.
   *
   * @public
   */
  OverviewPageArn?: string | undefined;

  /**
   * The product page ARNs.
   *
   * @public
   */
  ProductPageArns?: string[] | undefined;
}

/**
 * @public
 */
export interface CreatePortalProductResponse {
  /**
   * A description of the portal product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name for the portal product.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The visual ordering of the product pages and product REST endpoint pages in a published portal.
   *
   * @public
   */
  DisplayOrder?: DisplayOrder | undefined;

  /**
   * The timestamp when the portal product was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the portal product.
   *
   * @public
   */
  PortalProductArn?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The content of the product page.
 *
 * @public
 */
export interface DisplayContent {
  /**
   * The body.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * The title.
   *
   * @public
   */
  Title: string | undefined;
}

/**
 * The request body for the post operation.
 *
 * @public
 */
export interface CreateProductPageRequest {
  /**
   * The content of the product page.
   *
   * @public
   */
  DisplayContent: DisplayContent | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface CreateProductPageResponse {
  /**
   * The content of the product page.
   *
   * @public
   */
  DisplayContent?: DisplayContent | undefined;

  /**
   * The timestamp when the product page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product page.
   *
   * @public
   */
  ProductPageArn?: string | undefined;

  /**
   * The product page identifier.
   *
   * @public
   */
  ProductPageId?: string | undefined;
}

/**
 * Contains any values that override the default configuration generated from API Gateway.
 *
 * @public
 */
export interface DisplayContentOverrides {
  /**
   * By default, this is the documentation of your REST API from API Gateway. You can provide custom documentation to override this value.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The URL for your REST API. By default, API Gateway uses the default execute API endpoint. You can provide a custom domain to override this value.
   *
   * @public
   */
  Endpoint?: string | undefined;

  /**
   * The operation name of the product REST endpoint.
   *
   * @public
   */
  OperationName?: string | undefined;
}

/**
 * Represents the endpoint display content.
 *
 * @public
 */
export interface EndpointDisplayContent {
  /**
   * If your product REST endpoint contains no overrides, the none object is returned.
   *
   * @public
   */
  None?: None | undefined;

  /**
   * The overrides for endpoint display content.
   *
   * @public
   */
  Overrides?: DisplayContentOverrides | undefined;
}

/**
 * The request body for the post operation.
 *
 * @public
 */
export interface CreateProductRestEndpointPageRequest {
  /**
   * The content of the product REST endpoint page.
   *
   * @public
   */
  DisplayContent?: EndpointDisplayContent | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The REST endpoint identifier.
   *
   * @public
   */
  RestEndpointIdentifier: RestEndpointIdentifier | undefined;

  /**
   * The try it state of the product REST endpoint page.
   *
   * @public
   */
  TryItState?: TryItState | undefined;
}

/**
 * The product REST endpoint page.
 *
 * @public
 */
export interface EndpointDisplayContentResponse {
  /**
   * The API documentation.
   *
   * @public
   */
  Body?: string | undefined;

  /**
   * The URL to invoke your REST API.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * The operation name.
   *
   * @public
   */
  OperationName?: string | undefined;
}

/**
 * @public
 */
export interface CreateProductRestEndpointPageResponse {
  /**
   * The display content.
   *
   * @public
   */
  DisplayContent?: EndpointDisplayContentResponse | undefined;

  /**
   * The timestamp when the product REST endpoint page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product REST endpoint page.
   *
   * @public
   */
  ProductRestEndpointPageArn?: string | undefined;

  /**
   * The product REST endpoint page identifier.
   *
   * @public
   */
  ProductRestEndpointPageId?: string | undefined;

  /**
   * The REST endpoint identifier.
   *
   * @public
   */
  RestEndpointIdentifier?: RestEndpointIdentifier | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The try it state.
   *
   * @public
   */
  TryItState?: TryItState | undefined;
}

/**
 * Creates a new Route resource to represent a route.
 *
 * @public
 */
export interface CreateRouteRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * The authorization scopes supported by this route.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResult {
  /**
   * Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether an API key is required for this route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * Creates a new RouteResponse resource to represent a route response.
 *
 * @public
 */
export interface CreateRouteResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The model selection expression for the route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The response models for the route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * The route response parameters.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;

  /**
   * The route response key.
   *
   * @public
   */
  RouteResponseKey: string | undefined;
}

/**
 * @public
 */
export interface CreateRouteResponseResponse {
  /**
   * Represents the model selection expression of a route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * Represents the response models of a route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * Represents the response parameters of a route response.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * Represents the identifier of a route response.
   *
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * Represents the route response key of a route response.
   *
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface CreateRoutingRuleRequest {
  /**
   * Represents a routing rule action. The only supported action is invokeApi.
   *
   * @public
   */
  Actions: RoutingRuleAction[] | undefined;

  /**
   * Represents a condition. Conditions can contain up to two matchHeaders conditions and one matchBasePaths conditions. API Gateway evaluates header conditions and base path conditions together. You can only use AND between header and base path conditions.
   *
   * @public
   */
  Conditions: RoutingRuleCondition[] | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name ID.
   *
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * Represents the priority of the routing rule.
   * @public
   */
  Priority: number | undefined;
}

/**
 * @public
 */
export interface CreateRoutingRuleResponse {
  /**
   * Represents a routing rule action. The only supported action is invokeApi.
   *
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * Represents a condition. Conditions can contain up to two matchHeaders conditions and one matchBasePaths conditions. API Gateway evaluates header conditions and base path conditions together. You can only use AND between header and base path conditions.
   *
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * Represents the priority of the routing rule.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The ARN of the domain name.
   *
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * Creates a new Stage resource to represent a stage.
 *
 * @public
 */
export interface CreateStageRequest {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The deployment identifier of the API stage.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description for the API stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Route settings for the stage, by routeKey.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName: string | undefined;

  /**
   * A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateStageResponse {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The timestamp when the stage was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * Default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.
   *
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * The timestamp when the stage was last updated.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Route settings for the stage, by routeKey.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName?: string | undefined;

  /**
   * A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Creates a VPC link
 *
 * @public
 */
export interface CreateVpcLinkRequest {
  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A list of security group IDs for the VPC link.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs to include in the VPC link.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * A list of tags.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateVpcLinkResponse {
  /**
   * The timestamp when the VPC link was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of security group IDs for the VPC link.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs to include in the VPC link.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Tags for the VPC link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * The status of the VPC link.
   *
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * A message summarizing the cause of the status of the VPC link.
   *
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * The version of the VPC link.
   *
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * @public
 */
export interface DeleteAccessLogSettingsRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteApiMappingRequest {
  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteAuthorizerRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface DeleteCorsConfigurationRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDeploymentRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The deployment ID.
   *
   * @public
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface DeleteDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface DeleteIntegrationResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteModelRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The model ID.
   *
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalRequest {
  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalProductRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface DeletePortalProductSharingPolicyRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProductPageRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  ProductPageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProductRestEndpointPageRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The product REST endpoint identifier.
   *
   * @public
   */
  ProductRestEndpointPageId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteRequestParameterRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route request parameter key.
   *
   * @public
   */
  RequestParameterKey: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;

  /**
   * The route response ID.
   *
   * @public
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface DeleteRouteSettingsRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route key.
   *
   * @public
   */
  RouteKey: string | undefined;

  /**
   * The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteRoutingRuleRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name ID.
   *
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStageRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcLinkRequest {
  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface DeleteVpcLinkResponse {}

/**
 * @public
 */
export interface DisablePortalRequest {
  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;
}

/**
 * @public
 */
export interface ExportApiRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The version of the API Gateway export algorithm. API Gateway uses the latest version by default. Currently, the only supported version is 1.0.
   *
   * @public
   */
  ExportVersion?: string | undefined;

  /**
   * Specifies whether to include [API Gateway extensions](https://docs.aws.amazon.com//apigateway/latest/developerguide/api-gateway-swagger-extensions.html) in the exported API definition. API Gateway extensions are included by default.
   *
   * @public
   */
  IncludeExtensions?: boolean | undefined;

  /**
   * The output type of the exported definition file. Valid values are JSON and YAML.
   *
   * @public
   */
  OutputType: string | undefined;

  /**
   * The version of the API specification to use. OAS30, for OpenAPI 3.0, is the only supported value.
   *
   * @public
   */
  Specification: string | undefined;

  /**
   * The name of the API stage to export. If you don't specify this property, a representation of the latest API configuration is exported.
   *
   * @public
   */
  StageName?: string | undefined;
}

/**
 * @public
 */
export interface ExportApiResponse {
  /**
   * Represents an exported definition of an API in a particular output format, for example, YAML. The API is serialized to the requested specification, for example, OpenAPI 3.0.
   *
   * @public
   */
  body?: Uint8Array | undefined;
}

/**
 * @public
 */
export interface GetApiRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;
}

/**
 * @public
 */
export interface GetApiResponse {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface GetApiMappingRequest {
  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingResponse {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * The API mapping key.
   *
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage?: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingsRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApiMappingsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: ApiMapping[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApisRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetApisResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Api[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizerRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizerResponse {
  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * The validation expression does not apply to the REQUEST authorizer.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizersRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetAuthorizersResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Authorizer[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The deployment ID.
   *
   * @public
   */
  DeploymentId: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentResponse {
  /**
   * Specifies whether a deployment was automatically released.
   *
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * The date and time when the Deployment resource was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The identifier for the deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * May contain additional feedback on the status of an API deployment.
   *
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * The description for the deployment.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDeploymentsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Deployment[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNameResponse {
  /**
   * The API mapping selection expression.
   *
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The ARN of the DomainName resource.
   *
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * The collection of tags associated with a domain name.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetDomainNamesRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetDomainNamesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: DomainName[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResult {
  /**
   * Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * Represents the description of an integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Represents the identifier of an integration.
   *
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * The integration response selection expression for the integration. Supported only for WebSocket APIs. See [Integration Response Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions).
   *
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponseResponse {
  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expressions for the integration response.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponsesRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationResponsesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: IntegrationResponse[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationsRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetIntegrationsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Integration[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The model ID.
   *
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelResponse {
  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The model identifier.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Model[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetModelTemplateRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The model ID.
   *
   * @public
   */
  ModelId: string | undefined;
}

/**
 * @public
 */
export interface GetModelTemplateResponse {
  /**
   * The template value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * @public
 */
export interface GetPortalRequest {
  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;
}

/**
 * @public
 */
export interface GetPortalResponse {
  /**
   * The authorization for the portal.
   *
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The endpoint configuration.
   *
   * @public
   */
  EndpointConfiguration?: EndpointConfigurationResponse | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns?: string[] | undefined;

  /**
   * The timestamp when the portal was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The timestamp when the portal was last published.
   *
   * @public
   */
  LastPublished?: Date | undefined;

  /**
   * The publish description used when the portal was last published.
   *
   * @public
   */
  LastPublishedDescription?: string | undefined;

  /**
   * The ARN of the portal.
   *
   * @public
   */
  PortalArn?: string | undefined;

  /**
   * Contains the content that is visible to portal consumers including the themes, display names, and description.
   *
   * @public
   */
  PortalContent?: PortalContent | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId?: string | undefined;

  /**
   * Represents the preview endpoint and the any possible error messages during preview generation.
   *
   * @public
   */
  Preview?: Preview | undefined;

  /**
   * The publish status of a portal.
   *
   * @public
   */
  PublishStatus?: PublishStatus | undefined;

  /**
   * The CloudWatch RUM app monitor name.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPortalProductRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The account ID of the resource owner of the portal product.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetPortalProductResponse {
  /**
   * The description of a portal product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The display order.
   *
   * @public
   */
  DisplayOrder?: DisplayOrder | undefined;

  /**
   * The timestamp when the portal product was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the portal product.
   *
   * @public
   */
  PortalProductArn?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetPortalProductSharingPolicyRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface GetPortalProductSharingPolicyResponse {
  /**
   * The product sharing policy.
   *
   * @public
   */
  PolicyDocument?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductPageRequest {
  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  ProductPageId: string | undefined;

  /**
   * The account ID of the resource owner of the portal product.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductPageResponse {
  /**
   * The content of the product page.
   *
   * @public
   */
  DisplayContent?: DisplayContent | undefined;

  /**
   * The timestamp when the product page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product page.
   *
   * @public
   */
  ProductPageArn?: string | undefined;

  /**
   * The product page identifier.
   *
   * @public
   */
  ProductPageId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductRestEndpointPageRequest {
  /**
   * The query parameter to include raw display content.
   *
   * @public
   */
  IncludeRawDisplayContent?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The product REST endpoint identifier.
   *
   * @public
   */
  ProductRestEndpointPageId: string | undefined;

  /**
   * The account ID of the resource owner of the portal product.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface GetProductRestEndpointPageResponse {
  /**
   * The content of the product REST endpoint page.
   *
   * @public
   */
  DisplayContent?: EndpointDisplayContentResponse | undefined;

  /**
   * The timestamp when the product REST endpoint page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product REST endpoint page.
   *
   * @public
   */
  ProductRestEndpointPageArn?: string | undefined;

  /**
   * The product REST endpoint page identifier.
   *
   * @public
   */
  ProductRestEndpointPageId?: string | undefined;

  /**
   * The raw display content of the product REST endpoint page.
   *
   * @public
   */
  RawDisplayContent?: string | undefined;

  /**
   * The REST endpoint identifier.
   *
   * @public
   */
  RestEndpointIdentifier?: RestEndpointIdentifier | undefined;

  /**
   * The status of the product REST endpoint page.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The try it state.
   *
   * @public
   */
  TryItState?: TryItState | undefined;
}

/**
 * @public
 */
export interface GetRouteRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResult {
  /**
   * Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether an API key is required for this route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;

  /**
   * The route response ID.
   *
   * @public
   */
  RouteResponseId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponseResponse {
  /**
   * Represents the model selection expression of a route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * Represents the response models of a route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * Represents the response parameters of a route response.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * Represents the identifier of a route response.
   *
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * Represents the route response key of a route response.
   *
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponsesRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;
}

/**
 * @public
 */
export interface GetRouteResponsesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: RouteResponse[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutesRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Route[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingRuleRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name ID.
   *
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface GetRoutingRuleResponse {
  /**
   * The resulting action based on matching a routing rules condition. Only InvokeApi is supported.
   *
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * The conditions of the routing rule.
   *
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * The order in which API Gateway evaluates a rule. Priority is evaluated from the lowest value to the highest value.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The routing rule ARN.
   *
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * @public
 */
export interface GetStageRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The stage name. Stage names can only contain alphanumeric characters, hyphens, and underscores. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * @public
 */
export interface GetStageResponse {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The timestamp when the stage was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * Default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.
   *
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * The timestamp when the stage was last updated.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Route settings for the stage, by routeKey.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName?: string | undefined;

  /**
   * A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetStagesRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetStagesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: Stage[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetTagsRequest {
  /**
   * The resource ARN for the tag.
   *
   * @public
   */
  ResourceArn: string | undefined;
}

/**
 * @public
 */
export interface GetTagsResponse {
  /**
   * Represents a collection of tags associated with the resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetVpcLinkRequest {
  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface GetVpcLinkResponse {
  /**
   * The timestamp when the VPC link was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of security group IDs for the VPC link.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs to include in the VPC link.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Tags for the VPC link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * The status of the VPC link.
   *
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * A message summarizing the cause of the status of the VPC link.
   *
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * The version of the VPC link.
   *
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}

/**
 * @public
 */
export interface GetVpcLinksRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface GetVpcLinksResponse {
  /**
   * A collection of VPC links.
   *
   * @public
   */
  Items?: VpcLink[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ImportApiRequest {
  /**
   * Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.
   *
   * @public
   */
  Basepath?: string | undefined;

  /**
   * The OpenAPI definition. Supported only for HTTP APIs.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
   *
   * @public
   */
  FailOnWarnings?: boolean | undefined;
}

/**
 * @public
 */
export interface ImportApiResponse {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface ListPortalProductsRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The resource owner of the portal product.
   *
   * @public
   */
  ResourceOwner?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalProductsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: PortalProductSummary[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListPortalsResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: PortalSummary[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProductPagesRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The account ID of the resource owner of the portal product.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListProductPagesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: ProductPageSummaryNoBody[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListProductRestEndpointPagesRequest {
  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: string | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The account ID of the resource owner of the portal product.
   *
   * @public
   */
  ResourceOwnerAccountId?: string | undefined;
}

/**
 * @public
 */
export interface ListProductRestEndpointPagesResponse {
  /**
   * The elements from this collection.
   *
   * @public
   */
  Items?: ProductRestEndpointPageSummaryNoBody[] | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingRulesRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name ID.
   *
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * The maximum number of elements to be returned for this resource.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListRoutingRulesResponse {
  /**
   * The next page of elements from this collection. Not valid for the last element of the collection.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The routing rules.
   *
   * @public
   */
  RoutingRules?: RoutingRule[] | undefined;
}

/**
 * @public
 */
export interface PreviewPortalRequest {
  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;
}

/**
 * @public
 */
export interface PreviewPortalResponse {}

/**
 * The request body for the post operation.
 *
 * @public
 */
export interface PublishPortalRequest {
  /**
   * The description of the portal. When the portal is published, this description becomes the last published description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;
}

/**
 * @public
 */
export interface PublishPortalResponse {}

/**
 * The request body for the put operation.
 *
 * @public
 */
export interface PutPortalProductSharingPolicyRequest {
  /**
   * The product sharing policy.
   *
   * @public
   */
  PolicyDocument: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface PutPortalProductSharingPolicyResponse {}

/**
 * @public
 */
export interface PutRoutingRuleRequest {
  /**
   * The routing rule action.
   *
   * @public
   */
  Actions: RoutingRuleAction[] | undefined;

  /**
   * The routing rule condition.
   *
   * @public
   */
  Conditions: RoutingRuleCondition[] | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name ID.
   *
   * @public
   */
  DomainNameId?: string | undefined;

  /**
   * The routing rule priority.
   *
   * @public
   */
  Priority: number | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId: string | undefined;
}

/**
 * @public
 */
export interface PutRoutingRuleResponse {
  /**
   * The routing rule action.
   *
   * @public
   */
  Actions?: RoutingRuleAction[] | undefined;

  /**
   * The conditions of the routing rule.
   *
   * @public
   */
  Conditions?: RoutingRuleCondition[] | undefined;

  /**
   * The routing rule priority.
   *
   * @public
   */
  Priority?: number | undefined;

  /**
   * The routing rule ARN.
   *
   * @public
   */
  RoutingRuleArn?: string | undefined;

  /**
   * The routing rule ID.
   *
   * @public
   */
  RoutingRuleId?: string | undefined;
}

/**
 * @public
 */
export interface ReimportApiRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies how to interpret the base path of the API during import. Valid values are ignore, prepend, and split. The default value is ignore. To learn more, see [Set the OpenAPI basePath Property](https://docs.aws.amazon.com/apigateway/latest/developerguide/api-gateway-import-api-basePath.html). Supported only for HTTP APIs.
   *
   * @public
   */
  Basepath?: string | undefined;

  /**
   * The OpenAPI definition. Supported only for HTTP APIs.
   *
   * @public
   */
  Body: string | undefined;

  /**
   * Specifies whether to rollback the API creation when a warning is encountered. By default, API creation continues if a warning is encountered.
   *
   * @public
   */
  FailOnWarnings?: boolean | undefined;
}

/**
 * @public
 */
export interface ReimportApiResponse {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * @public
 */
export interface ResetAuthorizersCacheRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;
}

/**
 * Creates a new Tag resource to represent a tag.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * The resource ARN for the tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
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
   * The resource ARN for the tag.
   *
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * The Tag keys to delete
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * Updates an Api.
 *
 * @public
 */
export interface UpdateApiRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * This property is part of quick create. It specifies the credentials required for the integration, if any. For a Lambda integration, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, don't specify this parameter. Currently, this property is not used for HTTP integrations. If provided, this value replaces the credentials associated with the quick create integration. Supported only for HTTP APIs.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The IP address types that can invoke your API or domain name.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * This property is part of quick create. If not specified, the route created using quick create is kept. Otherwise, this value replaces the route key of the quick create route. Additional routes may still be added after the API is updated. Supported only for HTTP APIs.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * This property is part of quick create. For HTTP integrations, specify a fully qualified URL. For Lambda integrations, specify a function ARN. The type of the integration will be HTTP_PROXY or AWS_PROXY, respectively. The value provided updates the integration URI and integration type. You can update a quick-created target, but you can't remove it from an API. Supported only for HTTP APIs.
   *
   * @public
   */
  Target?: string | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiResponse {
  /**
   * The URI of the API, of the form \{api-id\}.execute-api.\{region\}.amazonaws.com. The stage name is typically appended to this URI to form a complete path to a deployed API stage.
   *
   * @public
   */
  ApiEndpoint?: string | undefined;

  /**
   * Specifies whether an API is managed by API Gateway. You can't update or delete a managed API by using API Gateway. A managed API can be deleted only through the tooling or service that created it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The API ID.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * An API key selection expression. Supported only for WebSocket APIs. See [API Key Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-apikey-selection-expressions).
   *
   * @public
   */
  ApiKeySelectionExpression?: string | undefined;

  /**
   * A CORS configuration. Supported only for HTTP APIs.
   *
   * @public
   */
  CorsConfiguration?: Cors | undefined;

  /**
   * The timestamp when the API was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The description of the API.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Avoid validating models when creating a deployment. Supported only for WebSocket APIs.
   *
   * @public
   */
  DisableSchemaValidation?: boolean | undefined;

  /**
   * Specifies whether clients can invoke your API by using the default execute-api endpoint. By default, clients can invoke your API with the default https://\{api_id\}.execute-api.\{region\}.amazonaws.com endpoint. To require that clients use a custom domain name to invoke your API, disable the default endpoint.
   *
   * @public
   */
  DisableExecuteApiEndpoint?: boolean | undefined;

  /**
   * The validation information during API import. This may include particular properties of your OpenAPI definition which are ignored during import. Supported only for HTTP APIs.
   *
   * @public
   */
  ImportInfo?: string[] | undefined;

  /**
   * The IP address types that can invoke the API.
   *
   * @public
   */
  IpAddressType?: IpAddressType | undefined;

  /**
   * The name of the API.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The API protocol.
   *
   * @public
   */
  ProtocolType?: ProtocolType | undefined;

  /**
   * The route selection expression for the API. For HTTP APIs, the routeSelectionExpression must be $\{request.method\} $\{request.path\}. If not provided, this will be the default for HTTP APIs. This property is required for WebSocket APIs.
   *
   * @public
   */
  RouteSelectionExpression?: string | undefined;

  /**
   * A collection of tags associated with the API.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * A version identifier for the API.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * The warning messages reported when failonwarnings is turned on during API import.
   *
   * @public
   */
  Warnings?: string[] | undefined;
}

/**
 * Updates an ApiMapping.
 *
 * @public
 */
export interface UpdateApiMappingRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId: string | undefined;

  /**
   * The API mapping key.
   *
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage?: string | undefined;
}

/**
 * @public
 */
export interface UpdateApiMappingResponse {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId?: string | undefined;

  /**
   * The API mapping identifier.
   *
   * @public
   */
  ApiMappingId?: string | undefined;

  /**
   * The API mapping key.
   *
   * @public
   */
  ApiMappingKey?: string | undefined;

  /**
   * The API stage.
   *
   * @public
   */
  Stage?: string | undefined;
}

/**
 * Updates an Authorizer.
 *
 * @public
 */
export interface UpdateAuthorizerRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. By default, a Lambda authorizer must return an IAM policy. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * This parameter is not used.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * @public
 */
export interface UpdateAuthorizerResponse {
  /**
   * Specifies the required credentials as an IAM role for API Gateway to invoke the authorizer. To specify an IAM role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To use resource-based permissions on the Lambda function, don't specify this parameter. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerCredentialsArn?: string | undefined;

  /**
   * The authorizer identifier.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * Specifies the format of the payload sent to an HTTP API Lambda authorizer. Required for HTTP API Lambda authorizers. Supported values are 1.0 and 2.0. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * @public
   */
  AuthorizerPayloadFormatVersion?: string | undefined;

  /**
   * The time to live (TTL) for cached authorizer results, in seconds. If it equals 0, authorization caching is disabled. If it is greater than 0, API Gateway caches authorizer responses. The maximum value is 3600, or 1 hour. Supported only for HTTP API Lambda authorizers.
   *
   * @public
   */
  AuthorizerResultTtlInSeconds?: number | undefined;

  /**
   * The authorizer type. Specify REQUEST for a Lambda function using incoming request parameters. Specify JWT to use JSON Web Tokens (supported only for HTTP APIs).
   *
   * @public
   */
  AuthorizerType?: AuthorizerType | undefined;

  /**
   * The authorizer's Uniform Resource Identifier (URI). For REQUEST authorizers, this must be a well-formed Lambda function URI, for example, arn:aws:apigateway:us-west-2:lambda:path/2015-03-31/functions/arn:aws:lambda:us-west-2:\{account_id\}:function:\{lambda_function_name\}/invocations. In general, the URI has this form: arn:aws:apigateway:\{region\}:lambda:path/\{service_api\} , where \{region\} is the same as the region hosting the Lambda function, path indicates that the remaining substring in the URI should be treated as the path to the resource, including the initial /. For Lambda functions, this is usually of the form /2015-03-31/functions/[FunctionARN]/invocations. Supported only for REQUEST authorizers.
   *
   * @public
   */
  AuthorizerUri?: string | undefined;

  /**
   * Specifies whether a Lambda authorizer returns a response in a simple format. If enabled, the Lambda authorizer can return a boolean value instead of an IAM policy. Supported only for HTTP APIs. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html)
   *
   * @public
   */
  EnableSimpleResponses?: boolean | undefined;

  /**
   * The identity source for which authorization is requested.
   *
   * For a REQUEST authorizer, this is optional. The value is a set of one or more mapping expressions of the specified request parameters. The identity source can be headers, query string parameters, stage variables, and context parameters. For example, if an Auth header and a Name query string parameter are defined as identity sources, this value is route.request.header.Auth, route.request.querystring.Name for WebSocket APIs. For HTTP APIs, use selection expressions prefixed with $, for example, $request.header.Auth, $request.querystring.Name. These parameters are used to perform runtime validation for Lambda-based authorizers by verifying all of the identity-related request parameters are present in the request, not null, and non-empty. Only when this is true does the authorizer invoke the authorizer Lambda function. Otherwise, it returns a 401 Unauthorized response without calling the Lambda function. For HTTP APIs, identity sources are also used as the cache key when caching is enabled. To learn more, see [Working with AWS Lambda authorizers for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-lambda-authorizer.html).
   *
   * For JWT, a single entry that specifies where to extract the JSON Web Token (JWT) from inbound requests. Currently only header-based and query parameter-based selections are supported, for example $request.header.Authorization.
   *
   * @public
   */
  IdentitySource?: string[] | undefined;

  /**
   * The validation expression does not apply to the REQUEST authorizer.
   *
   * @public
   */
  IdentityValidationExpression?: string | undefined;

  /**
   * Represents the configuration of a JWT authorizer. Required for the JWT authorizer type. Supported only for HTTP APIs.
   *
   * @public
   */
  JwtConfiguration?: JWTConfiguration | undefined;

  /**
   * The name of the authorizer.
   *
   * @public
   */
  Name?: string | undefined;
}

/**
 * Updates a Deployment.
 *
 * @public
 */
export interface UpdateDeploymentRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The deployment ID.
   *
   * @public
   */
  DeploymentId: string | undefined;

  /**
   * The description for the deployment resource.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * @public
 */
export interface UpdateDeploymentResponse {
  /**
   * Specifies whether a deployment was automatically released.
   *
   * @public
   */
  AutoDeployed?: boolean | undefined;

  /**
   * The date and time when the Deployment resource was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The identifier for the deployment.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The status of the deployment: PENDING, FAILED, or SUCCEEDED.
   *
   * @public
   */
  DeploymentStatus?: DeploymentStatus | undefined;

  /**
   * May contain additional feedback on the status of an API deployment.
   *
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * The description for the deployment.
   *
   * @public
   */
  Description?: string | undefined;
}

/**
 * Updates a DomainName.
 *
 * @public
 */
export interface UpdateDomainNameRequest {
  /**
   * The domain name.
   *
   * @public
   */
  DomainName: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthenticationInput | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;
}

/**
 * @public
 */
export interface UpdateDomainNameResponse {
  /**
   * The API mapping selection expression.
   *
   * @public
   */
  ApiMappingSelectionExpression?: string | undefined;

  /**
   * The name of the DomainName resource.
   *
   * @public
   */
  DomainName?: string | undefined;

  /**
   * The ARN of the DomainName resource.
   *
   * @public
   */
  DomainNameArn?: string | undefined;

  /**
   * The domain name configurations.
   *
   * @public
   */
  DomainNameConfigurations?: DomainNameConfiguration[] | undefined;

  /**
   * The mutual TLS authentication configuration for a custom domain name.
   *
   * @public
   */
  MutualTlsAuthentication?: MutualTlsAuthentication | undefined;

  /**
   * The routing mode.
   *
   * @public
   */
  RoutingMode?: RoutingMode | undefined;

  /**
   * The collection of tags associated with a domain name.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Updates an Integration.
 *
 * @public
 */
export interface UpdateIntegrationRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * The description of the integration
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration. For HTTP API private integrations, use an HTTP_PROXY integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to the backend. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt; where action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfigInput | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationResult {
  /**
   * Specifies whether an integration is managed by API Gateway. If you created an API using using quick create, the resulting integration is managed by API Gateway. You can update a managed integration, but you can't delete it.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * The ID of the VPC link for a private integration. Supported only for HTTP APIs.
   *
   * @public
   */
  ConnectionId?: string | undefined;

  /**
   * The type of the network connection to the integration endpoint. Specify INTERNET for connections through the public routable internet or VPC_LINK for private connections between API Gateway and resources in a VPC. The default value is INTERNET.
   *
   * @public
   */
  ConnectionType?: ConnectionType | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * Specifies the credentials required for the integration, if any. For AWS integrations, three options are available. To specify an IAM Role for API Gateway to assume, use the role's Amazon Resource Name (ARN). To require that the caller's identity be passed through from the request, specify the string arn:aws:iam::*:user/*. To use resource-based permissions on supported AWS services, specify null.
   *
   * @public
   */
  CredentialsArn?: string | undefined;

  /**
   * Represents the description of an integration.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Represents the identifier of an integration.
   *
   * @public
   */
  IntegrationId?: string | undefined;

  /**
   * Specifies the integration's HTTP method type.
   *
   * @public
   */
  IntegrationMethod?: string | undefined;

  /**
   * The integration response selection expression for the integration. Supported only for WebSocket APIs. See [Integration Response Selection Expressions](https://docs.aws.amazon.com/apigateway/latest/developerguide/apigateway-websocket-api-selection-expressions.html#apigateway-websocket-api-integration-response-selection-expressions).
   *
   * @public
   */
  IntegrationResponseSelectionExpression?: string | undefined;

  /**
   * Supported only for HTTP API AWS_PROXY integrations. Specifies the AWS service action to invoke. To learn more, see [Integration subtype reference](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services-reference.html).
   *
   * @public
   */
  IntegrationSubtype?: string | undefined;

  /**
   * The integration type of an integration. One of the following:
   *
   * AWS: for integrating the route or method request with an AWS service action, including the Lambda function-invoking action. With the Lambda function-invoking action, this is referred to as the Lambda custom integration. With any other AWS service action, this is known as AWS integration. Supported only for WebSocket APIs.
   *
   * AWS_PROXY: for integrating the route or method request with a Lambda function or other AWS service action. This integration is also referred to as a Lambda proxy integration.
   *
   * HTTP: for integrating the route or method request with an HTTP endpoint. This integration is also referred to as the HTTP custom integration. Supported only for WebSocket APIs.
   *
   * HTTP_PROXY: for integrating the route or method request with an HTTP endpoint, with the client request passed through as-is. This is also referred to as HTTP proxy integration.
   *
   * MOCK: for integrating the route or method request with API Gateway as a "loopback" endpoint without invoking any backend. Supported only for WebSocket APIs.
   *
   * @public
   */
  IntegrationType?: IntegrationType | undefined;

  /**
   * For a Lambda integration, specify the URI of a Lambda function.
   *
   * For an HTTP integration, specify a fully-qualified URL.
   *
   * For an HTTP API private integration, specify the ARN of an Application Load Balancer listener, Network Load Balancer listener, or AWS Cloud Map service. If you specify the ARN of an AWS Cloud Map service, API Gateway uses DiscoverInstances to identify resources. You can use query parameters to target specific resources. To learn more, see [DiscoverInstances](https://docs.aws.amazon.com/cloud-map/latest/api/API_DiscoverInstances.html). For private integrations, all resources must be owned by the same AWS account.
   *
   * @public
   */
  IntegrationUri?: string | undefined;

  /**
   * Specifies the pass-through behavior for incoming requests based on the Content-Type header in the request, and the available mapping templates specified as the requestTemplates property on the Integration resource. There are three valid values: WHEN_NO_MATCH, WHEN_NO_TEMPLATES, and NEVER. Supported only for WebSocket APIs.
   *
   * WHEN_NO_MATCH passes the request body for unmapped content types through to the integration backend without transformation.
   *
   * NEVER rejects unmapped content types with an HTTP 415 Unsupported Media Type response.
   *
   * WHEN_NO_TEMPLATES allows pass-through when the integration has no content types mapped to templates. However, if there is at least one content type defined, unmapped content types will be rejected with the same HTTP 415 Unsupported Media Type response.
   *
   * @public
   */
  PassthroughBehavior?: PassthroughBehavior | undefined;

  /**
   * Specifies the format of the payload sent to an integration. Required for HTTP APIs. Supported values for Lambda proxy integrations are 1.0 and 2.0. For all other integrations, 1.0 is the only supported value. To learn more, see [Working with AWS Lambda proxy integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-lambda.html).
   *
   * @public
   */
  PayloadFormatVersion?: string | undefined;

  /**
   * For WebSocket APIs, a key-value map specifying request parameters that are passed from the method request to the backend. The key is an integration request parameter name and the associated value is a method request parameter value or static value that must be enclosed within single quotes and pre-encoded as required by the backend. The method request parameter value must match the pattern of method.request.\{location\}.\{name\} , where \{location\} is querystring, path, or header; and \{name\} must be a valid and unique method request parameter name.
   *
   * For HTTP API integrations with a specified integrationSubtype, request parameters are a key-value map specifying parameters that are passed to AWS_PROXY integrations. You can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Working with AWS service integrations for HTTP APIs](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-develop-integrations-aws-services.html).
   *
   * For HTTP API integrations, without a specified integrationSubtype request parameters are a key-value map specifying how to transform HTTP requests before sending them to backend integrations. The key should follow the pattern &lt;action&gt;:&lt;header|querystring|path&gt;.&lt;location&gt;. The action can be append, overwrite or remove. For values, you can provide static values, or map request data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  RequestParameters?: Record<string, string> | undefined;

  /**
   * Represents a map of Velocity templates that are applied on the request payload based on the value of the Content-Type header sent by the client. The content type value is the key in this map, and the template (as a String) is the value. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestTemplates?: Record<string, string> | undefined;

  /**
   * Supported only for HTTP APIs. You use response parameters to transform the HTTP response from a backend integration before returning the response to clients. Specify a key-value map from a selection key to response parameters. The selection key must be a valid HTTP status code within the range of 200-599. Response parameters are a key-value map. The key must match pattern &lt;action&gt;:&lt;header&gt;.&lt;location&gt; or overwrite.statuscode. The action can be append, overwrite or remove. The value can be a static value, or map to response data, stage variables, or context variables that are evaluated at runtime. To learn more, see [Transforming API requests and responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/http-api-parameter-mapping.html).
   *
   * @public
   */
  ResponseParameters?: Record<string, Record<string, string>> | undefined;

  /**
   * The template selection expression for the integration. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;

  /**
   * Custom timeout between 50 and 29,000 milliseconds for WebSocket APIs and between 50 and 30,000 milliseconds for HTTP APIs. The default timeout is 29 seconds for WebSocket APIs and 30 seconds for HTTP APIs.
   *
   * @public
   */
  TimeoutInMillis?: number | undefined;

  /**
   * The TLS configuration for a private integration. If you specify a TLS configuration, private integration traffic uses the HTTPS protocol. Supported only for HTTP APIs.
   *
   * @public
   */
  TlsConfig?: TlsConfig | undefined;
}

/**
 * Updates an IntegrationResponses.
 *
 * @public
 */
export interface UpdateIntegrationResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration ID.
   *
   * @public
   */
  IntegrationId: string | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\} , where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\} , where \{name\} is a valid and unique response header name and \{JSON-expression\} is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expression for the integration response. Supported only for WebSocket APIs.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * @public
 */
export interface UpdateIntegrationResponseResponse {
  /**
   * Supported only for WebSocket APIs. Specifies how to handle response payload content type conversions. Supported values are CONVERT_TO_BINARY and CONVERT_TO_TEXT, with the following behaviors:
   *
   * CONVERT_TO_BINARY: Converts a response payload from a Base64-encoded string to the corresponding binary blob.
   *
   * CONVERT_TO_TEXT: Converts a response payload from a binary blob to a Base64-encoded string.
   *
   * If this property is not defined, the response payload will be passed through from the integration response to the route response or method response without modification.
   *
   * @public
   */
  ContentHandlingStrategy?: ContentHandlingStrategy | undefined;

  /**
   * The integration response ID.
   *
   * @public
   */
  IntegrationResponseId?: string | undefined;

  /**
   * The integration response key.
   *
   * @public
   */
  IntegrationResponseKey?: string | undefined;

  /**
   * A key-value map specifying response parameters that are passed to the method response from the backend. The key is a method response header parameter name and the mapped value is an integration response header value, a static value enclosed within a pair of single quotes, or a JSON expression from the integration response body. The mapping key must match the pattern of method.response.header.\{name\}, where name is a valid and unique header name. The mapped non-static value must match the pattern of integration.response.header.\{name\} or integration.response.body.\{JSON-expression\}, where name is a valid and unique response header name and JSON-expression is a valid JSON expression without the $ prefix.
   *
   * @public
   */
  ResponseParameters?: Record<string, string> | undefined;

  /**
   * The collection of response templates for the integration response as a string-to-string map of key-value pairs. Response templates are represented as a key/value map, with a content-type as the key and a template as the value.
   *
   * @public
   */
  ResponseTemplates?: Record<string, string> | undefined;

  /**
   * The template selection expressions for the integration response.
   *
   * @public
   */
  TemplateSelectionExpression?: string | undefined;
}

/**
 * Updates a Model.
 *
 * @public
 */
export interface UpdateModelRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The model ID.
   *
   * @public
   */
  ModelId: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * @public
 */
export interface UpdateModelResponse {
  /**
   * The content-type for the model, for example, "application/json".
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The description of the model.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The model identifier.
   *
   * @public
   */
  ModelId?: string | undefined;

  /**
   * The name of the model. Must be alphanumeric.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The schema for the model. For application/json models, this should be JSON schema draft 4 model.
   *
   * @public
   */
  Schema?: string | undefined;
}

/**
 * The request body for the patch operation.
 *
 * @public
 */
export interface UpdatePortalRequest {
  /**
   * The authorization of the portal.
   *
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * Represents an endpoint configuration.
   *
   * @public
   */
  EndpointConfiguration?: EndpointConfigurationRequest | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns?: string[] | undefined;

  /**
   * The logo URI.
   *
   * @public
   */
  LogoUri?: string | undefined;

  /**
   * Contains the content that is visible to portal consumers including the themes, display names, and description.
   *
   * @public
   */
  PortalContent?: PortalContent | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId: string | undefined;

  /**
   * The CloudWatch RUM app monitor name.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalResponse {
  /**
   * The authorization for the portal.
   *
   * @public
   */
  Authorization?: Authorization | undefined;

  /**
   * The endpoint configuration.
   *
   * @public
   */
  EndpointConfiguration?: EndpointConfigurationResponse | undefined;

  /**
   * The ARNs of the portal products included in the portal.
   *
   * @public
   */
  IncludedPortalProductArns?: string[] | undefined;

  /**
   * The timestamp when the portal was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The timestamp when the portal was last published.
   *
   * @public
   */
  LastPublished?: Date | undefined;

  /**
   * The description associated with the last time the portal was published.
   *
   * @public
   */
  LastPublishedDescription?: string | undefined;

  /**
   * The ARN of the portal.
   *
   * @public
   */
  PortalArn?: string | undefined;

  /**
   * Contains the content that is visible to portal consumers including the themes, display names, and description.
   *
   * @public
   */
  PortalContent?: PortalContent | undefined;

  /**
   * The portal identifier.
   *
   * @public
   */
  PortalId?: string | undefined;

  /**
   * Represents the preview endpoint and the any possible error messages during preview generation.
   *
   * @public
   */
  Preview?: Preview | undefined;

  /**
   * The publishStatus.
   *
   * @public
   */
  PublishStatus?: PublishStatus | undefined;

  /**
   * The CloudWatch RUM app monitor name.
   *
   * @public
   */
  RumAppMonitorName?: string | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The request body for the patch operation.
 *
 * @public
 */
export interface UpdatePortalProductRequest {
  /**
   * The description.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The displayName.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The display order.
   *
   * @public
   */
  DisplayOrder?: DisplayOrder | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;
}

/**
 * @public
 */
export interface UpdatePortalProductResponse {
  /**
   * The description of the portal product.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The display name of a portal product.
   *
   * @public
   */
  DisplayName?: string | undefined;

  /**
   * The display order that the portal products will appear in a portal.
   *
   * @public
   */
  DisplayOrder?: DisplayOrder | undefined;

  /**
   * The timestamp when the portal product was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the portal product.
   *
   * @public
   */
  PortalProductArn?: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId?: string | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * The request body for the patch operation.
 *
 * @public
 */
export interface UpdateProductPageRequest {
  /**
   * The content of the product page.
   *
   * @public
   */
  DisplayContent?: DisplayContent | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  ProductPageId: string | undefined;
}

/**
 * @public
 */
export interface UpdateProductPageResponse {
  /**
   * The content of the product page.
   *
   * @public
   */
  DisplayContent?: DisplayContent | undefined;

  /**
   * The timestamp when the product page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product page.
   *
   * @public
   */
  ProductPageArn?: string | undefined;

  /**
   * The product page identifier.
   *
   * @public
   */
  ProductPageId?: string | undefined;
}

/**
 * The request body for the patch operation.
 *
 * @public
 */
export interface UpdateProductRestEndpointPageRequest {
  /**
   * The display content.
   *
   * @public
   */
  DisplayContent?: EndpointDisplayContent | undefined;

  /**
   * The portal product identifier.
   *
   * @public
   */
  PortalProductId: string | undefined;

  /**
   * The product REST endpoint identifier.
   *
   * @public
   */
  ProductRestEndpointPageId: string | undefined;

  /**
   * The try it state of a product REST endpoint page.
   *
   * @public
   */
  TryItState?: TryItState | undefined;
}

/**
 * @public
 */
export interface UpdateProductRestEndpointPageResponse {
  /**
   * The content of the product REST endpoint page.
   *
   * @public
   */
  DisplayContent?: EndpointDisplayContentResponse | undefined;

  /**
   * The timestamp when the product REST endpoint page was last modified.
   *
   * @public
   */
  LastModified?: Date | undefined;

  /**
   * The ARN of the product REST endpoint page.
   *
   * @public
   */
  ProductRestEndpointPageArn?: string | undefined;

  /**
   * The product REST endpoint page identifier.
   *
   * @public
   */
  ProductRestEndpointPageId?: string | undefined;

  /**
   * The REST endpoint identifier.
   *
   * @public
   */
  RestEndpointIdentifier?: RestEndpointIdentifier | undefined;

  /**
   * The status.
   *
   * @public
   */
  Status?: Status | undefined;

  /**
   * The status exception information.
   *
   * @public
   */
  StatusException?: StatusException | undefined;

  /**
   * The try it state of a product REST endpoint page.
   *
   * @public
   */
  TryItState?: TryItState | undefined;
}

/**
 * Updates a Route.
 *
 * @public
 */
export interface UpdateRouteRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies whether an API key is required for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * The authorization scopes supported by this route.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResult {
  /**
   * Specifies whether a route is managed by API Gateway. If you created an API using quick create, the $default route is managed by API Gateway. You can't modify the $default route key.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether an API key is required for this route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ApiKeyRequired?: boolean | undefined;

  /**
   * A list of authorization scopes configured on a route. The scopes are used with a JWT authorizer to authorize the method invocation. The authorization works by matching the route scopes against the scopes parsed from the access token in the incoming request. The method invocation is authorized if any route scope matches a claimed scope in the access token. Otherwise, the invocation is not authorized. When the route scope is configured, the client must provide an access token instead of an identity token for authorization purposes.
   *
   * @public
   */
  AuthorizationScopes?: string[] | undefined;

  /**
   * The authorization type for the route. For WebSocket APIs, valid values are NONE for open access, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer For HTTP APIs, valid values are NONE for open access, JWT for using JSON Web Tokens, AWS_IAM for using AWS IAM permissions, and CUSTOM for using a Lambda authorizer.
   *
   * @public
   */
  AuthorizationType?: AuthorizationType | undefined;

  /**
   * The identifier of the Authorizer resource to be associated with this route. The authorizer identifier is generated by API Gateway when you created the authorizer.
   *
   * @public
   */
  AuthorizerId?: string | undefined;

  /**
   * The model selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The operation name for the route.
   *
   * @public
   */
  OperationName?: string | undefined;

  /**
   * The request models for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestModels?: Record<string, string> | undefined;

  /**
   * The request parameters for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RequestParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId?: string | undefined;

  /**
   * The route key for the route.
   *
   * @public
   */
  RouteKey?: string | undefined;

  /**
   * The route response selection expression for the route. Supported only for WebSocket APIs.
   *
   * @public
   */
  RouteResponseSelectionExpression?: string | undefined;

  /**
   * The target for the route.
   *
   * @public
   */
  Target?: string | undefined;
}

/**
 * Updates a RouteResponse.
 *
 * @public
 */
export interface UpdateRouteResponseRequest {
  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * The model selection expression for the route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * The response models for the route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * The route response parameters.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * The route ID.
   *
   * @public
   */
  RouteId: string | undefined;

  /**
   * The route response ID.
   *
   * @public
   */
  RouteResponseId: string | undefined;

  /**
   * The route response key.
   *
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * @public
 */
export interface UpdateRouteResponseResponse {
  /**
   * Represents the model selection expression of a route response. Supported only for WebSocket APIs.
   *
   * @public
   */
  ModelSelectionExpression?: string | undefined;

  /**
   * Represents the response models of a route response.
   *
   * @public
   */
  ResponseModels?: Record<string, string> | undefined;

  /**
   * Represents the response parameters of a route response.
   *
   * @public
   */
  ResponseParameters?: Record<string, ParameterConstraints> | undefined;

  /**
   * Represents the identifier of a route response.
   *
   * @public
   */
  RouteResponseId?: string | undefined;

  /**
   * Represents the route response key of a route response.
   *
   * @public
   */
  RouteResponseKey?: string | undefined;
}

/**
 * Updates a Stage.
 *
 * @public
 */
export interface UpdateStageRequest {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * The API identifier.
   *
   * @public
   */
  ApiId: string | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The deployment identifier for the API stage. Can't be updated if autoDeploy is enabled.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description for the API stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Route settings for the stage.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The stage name. Stage names can contain only alphanumeric characters, hyphens, and underscores, or be $default. Maximum length is 128 characters.
   *
   * @public
   */
  StageName: string | undefined;

  /**
   * A map that defines the stage variables for a Stage. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateStageResponse {
  /**
   * Settings for logging access in this stage.
   *
   * @public
   */
  AccessLogSettings?: AccessLogSettings | undefined;

  /**
   * Specifies whether a stage is managed by API Gateway. If you created an API using quick create, the $default stage is managed by API Gateway. You can't modify the $default stage.
   *
   * @public
   */
  ApiGatewayManaged?: boolean | undefined;

  /**
   * Specifies whether updates to an API automatically trigger a new deployment. The default value is false.
   *
   * @public
   */
  AutoDeploy?: boolean | undefined;

  /**
   * The identifier of a client certificate for a Stage. Supported only for WebSocket APIs.
   *
   * @public
   */
  ClientCertificateId?: string | undefined;

  /**
   * The timestamp when the stage was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * Default route settings for the stage.
   *
   * @public
   */
  DefaultRouteSettings?: RouteSettings | undefined;

  /**
   * The identifier of the Deployment that the Stage is associated with. Can't be updated if autoDeploy is enabled.
   *
   * @public
   */
  DeploymentId?: string | undefined;

  /**
   * The description of the stage.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Describes the status of the last deployment of a stage. Supported only for stages with autoDeploy enabled.
   *
   * @public
   */
  LastDeploymentStatusMessage?: string | undefined;

  /**
   * The timestamp when the stage was last updated.
   *
   * @public
   */
  LastUpdatedDate?: Date | undefined;

  /**
   * Route settings for the stage, by routeKey.
   *
   * @public
   */
  RouteSettings?: Record<string, RouteSettings> | undefined;

  /**
   * The name of the stage.
   *
   * @public
   */
  StageName?: string | undefined;

  /**
   * A map that defines the stage variables for a stage resource. Variable names can have alphanumeric and underscore characters, and the values must match [A-Za-z0-9-._~:/?#&amp;=,]+.
   *
   * @public
   */
  StageVariables?: Record<string, string> | undefined;

  /**
   * The collection of tags. Each tag element is associated with a given resource.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;
}

/**
 * Updates a VPC link.
 *
 * @public
 */
export interface UpdateVpcLinkRequest {
  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId: string | undefined;
}

/**
 * @public
 */
export interface UpdateVpcLinkResponse {
  /**
   * The timestamp when the VPC link was created.
   *
   * @public
   */
  CreatedDate?: Date | undefined;

  /**
   * The name of the VPC link.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A list of security group IDs for the VPC link.
   *
   * @public
   */
  SecurityGroupIds?: string[] | undefined;

  /**
   * A list of subnet IDs to include in the VPC link.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Tags for the VPC link.
   *
   * @public
   */
  Tags?: Record<string, string> | undefined;

  /**
   * The ID of the VPC link.
   *
   * @public
   */
  VpcLinkId?: string | undefined;

  /**
   * The status of the VPC link.
   *
   * @public
   */
  VpcLinkStatus?: VpcLinkStatus | undefined;

  /**
   * A message summarizing the cause of the status of the VPC link.
   *
   * @public
   */
  VpcLinkStatusMessage?: string | undefined;

  /**
   * The version of the VPC link.
   *
   * @public
   */
  VpcLinkVersion?: VpcLinkVersion | undefined;
}
